/*! ADV - v0.0.1 - 2023-03-31 */ function _toConsumableArray(a) {
    if (Array.isArray(a)) {
        for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
        return c;
    }
    return Array.from(a);
}
!(function (a, b) {
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = a.document
              ? b(a, !0)
              : function (a) {
                    if (!a.document) throw new Error("jQuery requires a window with a document");
                    return b(a);
                })
        : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
    function c(a) {
        var b = !!a && "length" in a && a.length,
            c = fa.type(a);
        return "function" === c || fa.isWindow(a) ? !1 : "array" === c || 0 === b || ("number" == typeof b && b > 0 && b - 1 in a);
    }
    function d(a, b, c) {
        if (fa.isFunction(b))
            return fa.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c;
            });
        if (b.nodeType)
            return fa.grep(a, function (a) {
                return (a === b) !== c;
            });
        if ("string" == typeof b) {
            if (pa.test(b)) return fa.filter(b, a, c);
            b = fa.filter(b, a);
        }
        return fa.grep(a, function (a) {
            return _.call(b, a) > -1 !== c;
        });
    }
    function e(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType; );
        return a;
    }
    function f(a) {
        var b = {};
        return (
            fa.each(a.match(va) || [], function (a, c) {
                b[c] = !0;
            }),
            b
        );
    }
    function g() {
        X.removeEventListener("DOMContentLoaded", g), a.removeEventListener("load", g), fa.ready();
    }
    function h() {
        this.expando = fa.expando + h.uid++;
    }
    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (((d = "data-" + b.replace(Ca, "-$&").toLowerCase()), (c = a.getAttribute(d)), "string" == typeof c)) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : Ba.test(c) ? fa.parseJSON(c) : c;
                } catch (e) {}
                Aa.set(a, b, c);
            } else c = void 0;
        return c;
    }
    function j(a, b, c, d) {
        var e,
            f = 1,
            g = 20,
            h = d
                ? function () {
                      return d.cur();
                  }
                : function () {
                      return fa.css(a, b, "");
                  },
            i = h(),
            j = (c && c[3]) || (fa.cssNumber[b] ? "" : "px"),
            k = (fa.cssNumber[b] || ("px" !== j && +i)) && Ea.exec(fa.css(a, b));
        if (k && k[3] !== j) {
            (j = j || k[3]), (c = c || []), (k = +i || 1);
            do (f = f || ".5"), (k /= f), fa.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g);
        }
        return c && ((k = +k || +i || 0), (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]), d && ((d.unit = j), (d.start = k), (d.end = e))), e;
    }
    function k(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || (b && fa.nodeName(a, b)) ? fa.merge([a], c) : c;
    }
    function l(a, b) {
        for (var c = 0, d = a.length; d > c; c++) za.set(a[c], "globalEval", !b || za.get(b[c], "globalEval"));
    }
    function m(a, b, c, d, e) {
        for (var f, g, h, i, j, m, n = b.createDocumentFragment(), o = [], p = 0, q = a.length; q > p; p++)
            if (((f = a[p]), f || 0 === f))
                if ("object" === fa.type(f)) fa.merge(o, f.nodeType ? [f] : f);
                else if (La.test(f)) {
                    for (g = g || n.appendChild(b.createElement("div")), h = (Ia.exec(f) || ["", ""])[1].toLowerCase(), i = Ka[h] || Ka._default, g.innerHTML = i[1] + fa.htmlPrefilter(f) + i[2], m = i[0]; m--; ) g = g.lastChild;
                    fa.merge(o, g.childNodes), (g = n.firstChild), (g.textContent = "");
                } else o.push(b.createTextNode(f));
        for (n.textContent = "", p = 0; (f = o[p++]); )
            if (d && fa.inArray(f, d) > -1) e && e.push(f);
            else if (((j = fa.contains(f.ownerDocument, f)), (g = k(n.appendChild(f), "script")), j && l(g), c)) for (m = 0; (f = g[m++]); ) Ja.test(f.type || "") && c.push(f);
        return n;
    }
    function n() {
        return !0;
    }
    function o() {
        return !1;
    }
    function p() {
        try {
            return X.activeElement;
        } catch (a) {}
    }
    function q(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && ((d = d || c), (c = void 0));
            for (h in b) q(a, h, c, d, b[h], f);
            return a;
        }
        if ((null == d && null == e ? ((e = c), (d = c = void 0)) : null == e && ("string" == typeof c ? ((e = d), (d = void 0)) : ((e = d), (d = c), (c = void 0))), e === !1)) e = o;
        else if (!e) return a;
        return (
            1 === f &&
                ((g = e),
                (e = function (a) {
                    return fa().off(a), g.apply(this, arguments);
                }),
                (e.guid = g.guid || (g.guid = fa.guid++))),
            a.each(function () {
                fa.event.add(this, b, e, d, c);
            })
        );
    }
    function r(a, b) {
        return fa.nodeName(a, "table") && fa.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function s(a) {
        return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
    }
    function t(a) {
        var b = Sa.exec(a.type);
        return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
    }
    function u(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (za.hasData(a) && ((f = za.access(a)), (g = za.set(b, f)), (j = f.events))) {
                delete g.handle, (g.events = {});
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) fa.event.add(b, e, j[e][c]);
            }
            Aa.hasData(a) && ((h = Aa.access(a)), (i = fa.extend({}, h)), Aa.set(b, i));
        }
    }
    function v(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Ha.test(a.type) ? (b.checked = a.checked) : ("input" !== c && "textarea" !== c) || (b.defaultValue = a.defaultValue);
    }
    function w(a, b, c, d) {
        b = Z.apply([], b);
        var e,
            f,
            g,
            h,
            i,
            j,
            l = 0,
            n = a.length,
            o = n - 1,
            p = b[0],
            q = fa.isFunction(p);
        if (q || (n > 1 && "string" == typeof p && !da.checkClone && Ra.test(p)))
            return a.each(function (e) {
                var f = a.eq(e);
                q && (b[0] = p.call(this, e, f.html())), w(f, b, c, d);
            });
        if (n && ((e = m(b, a[0].ownerDocument, !1, a, d)), (f = e.firstChild), 1 === e.childNodes.length && (e = f), f || d)) {
            for (g = fa.map(k(e, "script"), s), h = g.length; n > l; l++) (i = e), l !== o && ((i = fa.clone(i, !0, !0)), h && fa.merge(g, k(i, "script"))), c.call(a[l], i, l);
            if (h)
                for (j = g[g.length - 1].ownerDocument, fa.map(g, t), l = 0; h > l; l++)
                    (i = g[l]), Ja.test(i.type || "") && !za.access(i, "globalEval") && fa.contains(j, i) && (i.src ? fa._evalUrl && fa._evalUrl(i.src) : fa.globalEval(i.textContent.replace(Ta, "")));
        }
        return a;
    }
    function x(a, b, c) {
        for (var d, e = b ? fa.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || fa.cleanData(k(d)), d.parentNode && (c && fa.contains(d.ownerDocument, d) && l(k(d, "script")), d.parentNode.removeChild(d));
        return a;
    }
    function y(a, b) {
        var c = fa(b.createElement(a)).appendTo(b.body),
            d = fa.css(c[0], "display");
        return c.detach(), d;
    }
    function z(a) {
        var b = X,
            c = Va[a];
        return (
            c ||
                ((c = y(a, b)),
                ("none" !== c && c) || ((Ua = (Ua || fa("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement)), (b = Ua[0].contentDocument), b.write(), b.close(), (c = y(a, b)), Ua.detach()),
                (Va[a] = c)),
            c
        );
    }
    function A(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;
        return (
            (c = c || Ya(a)),
            (g = c ? c.getPropertyValue(b) || c[b] : void 0),
            ("" !== g && void 0 !== g) || fa.contains(a.ownerDocument, a) || (g = fa.style(a, b)),
            c && !da.pixelMarginRight() && Xa.test(g) && Wa.test(b) && ((d = h.width), (e = h.minWidth), (f = h.maxWidth), (h.minWidth = h.maxWidth = h.width = g), (g = c.width), (h.width = d), (h.minWidth = e), (h.maxWidth = f)),
            void 0 !== g ? g + "" : g
        );
    }
    function B(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            },
        };
    }
    function C(a) {
        if (a in db) return a;
        for (var b = a[0].toUpperCase() + a.slice(1), c = cb.length; c--; ) if (((a = cb[c] + b), a in db)) return a;
    }
    function D(a, b, c) {
        var d = Ea.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }
    function E(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += fa.css(a, c + Fa[f], !0, e)),
                d
                    ? ("content" === c && (g -= fa.css(a, "padding" + Fa[f], !0, e)), "margin" !== c && (g -= fa.css(a, "border" + Fa[f] + "Width", !0, e)))
                    : ((g += fa.css(a, "padding" + Fa[f], !0, e)), "padding" !== c && (g += fa.css(a, "border" + Fa[f] + "Width", !0, e)));
        return g;
    }
    function F(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ya(a),
            g = "border-box" === fa.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (((e = A(a, b, f)), (0 > e || null == e) && (e = a.style[b]), Xa.test(e))) return e;
            (d = g && (da.boxSizingReliable() || e === a.style[b])), (e = parseFloat(e) || 0);
        }
        return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function G(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            (d = a[g]),
                d.style &&
                    ((f[g] = za.get(d, "olddisplay")),
                    (c = d.style.display),
                    b
                        ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ga(d) && (f[g] = za.access(d, "olddisplay", z(d.nodeName))))
                        : ((e = Ga(d)), ("none" === c && e) || za.set(d, "olddisplay", e ? c : fa.css(d, "display"))));
        for (g = 0; h > g; g++) (d = a[g]), d.style && ((b && "none" !== d.style.display && "" !== d.style.display) || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function H(a, b, c, d, e) {
        return new H.prototype.init(a, b, c, d, e);
    }
    function I() {
        return (
            a.setTimeout(function () {
                eb = void 0;
            }),
            (eb = fa.now())
        );
    }
    function J(a, b) {
        var c,
            d = 0,
            e = { height: a };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) (c = Fa[d]), (e["margin" + c] = e["padding" + c] = a);
        return b && (e.opacity = e.width = a), e;
    }
    function K(a, b, c) {
        for (var d, e = (N.tweeners[b] || []).concat(N.tweeners["*"]), f = 0, g = e.length; g > f; f++) if ((d = e[f].call(c, b, a))) return d;
    }
    function L(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l = this,
            m = {},
            n = a.style,
            o = a.nodeType && Ga(a),
            p = za.get(a, "fxshow");
        c.queue ||
            ((h = fa._queueHooks(a, "fx")),
            null == h.unqueued &&
                ((h.unqueued = 0),
                (i = h.empty.fire),
                (h.empty.fire = function () {
                    h.unqueued || i();
                })),
            h.unqueued++,
            l.always(function () {
                l.always(function () {
                    h.unqueued--, fa.queue(a, "fx").length || h.empty.fire();
                });
            })),
            1 === a.nodeType &&
                ("height" in b || "width" in b) &&
                ((c.overflow = [n.overflow, n.overflowX, n.overflowY]),
                (j = fa.css(a, "display")),
                (k = "none" === j ? za.get(a, "olddisplay") || z(a.nodeName) : j),
                "inline" === k && "none" === fa.css(a, "float") && (n.display = "inline-block")),
            c.overflow &&
                ((n.overflow = "hidden"),
                l.always(function () {
                    (n.overflow = c.overflow[0]), (n.overflowX = c.overflow[1]), (n.overflowY = c.overflow[2]);
                }));
        for (d in b)
            if (((e = b[d]), gb.exec(e))) {
                if ((delete b[d], (f = f || "toggle" === e), e === (o ? "hide" : "show"))) {
                    if ("show" !== e || !p || void 0 === p[d]) continue;
                    o = !0;
                }
                m[d] = (p && p[d]) || fa.style(a, d);
            } else j = void 0;
        if (fa.isEmptyObject(m)) "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : (p = za.access(a, "fxshow", {})),
                f && (p.hidden = !o),
                o
                    ? fa(a).show()
                    : l.done(function () {
                          fa(a).hide();
                      }),
                l.done(function () {
                    var b;
                    za.remove(a, "fxshow");
                    for (b in m) fa.style(a, b, m[b]);
                });
            for (d in m) (g = K(o ? p[d] : 0, d, l)), d in p || ((p[d] = g.start), o && ((g.end = g.start), (g.start = "width" === d || "height" === d ? 1 : 0)));
        }
    }
    function M(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (((d = fa.camelCase(c)), (e = b[d]), (f = a[c]), fa.isArray(f) && ((e = f[1]), (f = a[c] = f[0])), c !== d && ((a[d] = f), delete a[c]), (g = fa.cssHooks[d]), g && "expand" in g)) {
                (f = g.expand(f)), delete a[d];
                for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
            } else b[d] = e;
    }
    function N(a, b, c) {
        var d,
            e,
            f = 0,
            g = N.prefilters.length,
            h = fa.Deferred().always(function () {
                delete i.elem;
            }),
            i = function () {
                if (e) return !1;
                for (var b = eb || I(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
            },
            j = h.promise({
                elem: a,
                props: fa.extend({}, b),
                opts: fa.extend(!0, { specialEasing: {}, easing: fa.easing._default }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: eb || I(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = fa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d;
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
                },
            }),
            k = j.props;
        for (M(k, j.opts.specialEasing); g > f; f++) if ((d = N.prefilters[f].call(j, a, k, j.opts))) return fa.isFunction(d.stop) && (fa._queueHooks(j.elem, j.opts.queue).stop = fa.proxy(d.stop, d)), d;
        return (
            fa.map(k, K, j),
            fa.isFunction(j.opts.start) && j.opts.start.call(a, j),
            fa.fx.timer(fa.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
            j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        );
    }
    function O(a) {
        return (a.getAttribute && a.getAttribute("class")) || "";
    }
    function P(a) {
        return function (b, c) {
            "string" != typeof b && ((c = b), (b = "*"));
            var d,
                e = 0,
                f = b.toLowerCase().match(va) || [];
            if (fa.isFunction(c)) for (; (d = f[e++]); ) "+" === d[0] ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function Q(a, b, c, d) {
        function e(h) {
            var i;
            return (
                (f[h] = !0),
                fa.each(a[h] || [], function (a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? (g ? !(i = j) : void 0) : (b.dataTypes.unshift(j), e(j), !1);
                }),
                i
            );
        }
        var f = {},
            g = a === Ab;
        return e(b.dataTypes[0]) || (!f["*"] && e("*"));
    }
    function R(a, b) {
        var c,
            d,
            e = fa.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && fa.extend(!0, a, d), a;
    }
    function S(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; ) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break;
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function T(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j = {},
            k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; )
            if ((a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), (i = f), (f = k.shift())))
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                    if (((g = j[i + " " + f] || j["* " + f]), !g))
                        for (e in j)
                            if (((h = e.split(" ")), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))) {
                                g === !0 ? (g = j[e]) : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                                break;
                            }
                    if (g !== !0)
                        if (g && a["throws"]) b = g(b);
                        else
                            try {
                                b = g(b);
                            } catch (l) {
                                return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
                            }
                }
        return { state: "success", data: b };
    }
    function U(a, b, c, d) {
        var e;
        if (fa.isArray(b))
            fa.each(b, function (b, e) {
                c || Eb.test(a) ? d(a, e) : U(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
            });
        else if (c || "object" !== fa.type(b)) d(a, b);
        else for (e in b) U(a + "[" + e + "]", b[e], c, d);
    }
    function V(a) {
        return fa.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    var W = [],
        X = a.document,
        Y = W.slice,
        Z = W.concat,
        $ = W.push,
        _ = W.indexOf,
        aa = {},
        ba = aa.toString,
        ca = aa.hasOwnProperty,
        da = {},
        ea = "2.2.4",
        fa = function (a, b) {
            return new fa.fn.init(a, b);
        },
        ga = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ha = /^-ms-/,
        ia = /-([\da-z])/gi,
        ja = function (a, b) {
            return b.toUpperCase();
        };
    (fa.fn = fa.prototype = {
        jquery: ea,
        constructor: fa,
        selector: "",
        length: 0,
        toArray: function () {
            return Y.call(this);
        },
        get: function (a) {
            return null != a ? (0 > a ? this[a + this.length] : this[a]) : Y.call(this);
        },
        pushStack: function (a) {
            var b = fa.merge(this.constructor(), a);
            return (b.prevObject = this), (b.context = this.context), b;
        },
        each: function (a) {
            return fa.each(this, a);
        },
        map: function (a) {
            return this.pushStack(
                fa.map(this, function (b, c) {
                    return a.call(b, c, b);
                })
            );
        },
        slice: function () {
            return this.pushStack(Y.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: $,
        sort: W.sort,
        splice: W.splice,
    }),
        (fa.extend = fa.fn.extend = function () {
            var a,
                b,
                c,
                d,
                e,
                f,
                g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++), "object" == typeof g || fa.isFunction(g) || (g = {}), h === i && ((g = this), h--); i > h; h++)
                if (null != (a = arguments[h]))
                    for (b in a)
                        (c = g[b]),
                            (d = a[b]),
                            g !== d &&
                                (j && d && (fa.isPlainObject(d) || (e = fa.isArray(d)))
                                    ? (e ? ((e = !1), (f = c && fa.isArray(c) ? c : [])) : (f = c && fa.isPlainObject(c) ? c : {}), (g[b] = fa.extend(j, f, d)))
                                    : void 0 !== d && (g[b] = d));
            return g;
        }),
        fa.extend({
            expando: "jQuery" + (ea + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (a) {
                throw new Error(a);
            },
            noop: function () {},
            isFunction: function (a) {
                return "function" === fa.type(a);
            },
            isArray: Array.isArray,
            isWindow: function (a) {
                return null != a && a === a.window;
            },
            isNumeric: function (a) {
                var b = a && a.toString();
                return !fa.isArray(a) && b - parseFloat(b) + 1 >= 0;
            },
            isPlainObject: function (a) {
                var b;
                if ("object" !== fa.type(a) || a.nodeType || fa.isWindow(a)) return !1;
                if (a.constructor && !ca.call(a, "constructor") && !ca.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (b in a);
                return void 0 === b || ca.call(a, b);
            },
            isEmptyObject: function (a) {
                var b;
                for (b in a) return !1;
                return !0;
            },
            type: function (a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? aa[ba.call(a)] || "object" : typeof a;
            },
            globalEval: function (a) {
                var b,
                    c = eval;
                (a = fa.trim(a)), a && (1 === a.indexOf("use strict") ? ((b = X.createElement("script")), (b.text = a), X.head.appendChild(b).parentNode.removeChild(b)) : c(a));
            },
            camelCase: function (a) {
                return a.replace(ha, "ms-").replace(ia, ja);
            },
            nodeName: function (a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
            },
            each: function (a, b) {
                var d,
                    e = 0;
                if (c(a)) for (d = a.length; d > e && b.call(a[e], e, a[e]) !== !1; e++);
                else for (e in a) if (b.call(a[e], e, a[e]) === !1) break;
                return a;
            },
            trim: function (a) {
                return null == a ? "" : (a + "").replace(ga, "");
            },
            makeArray: function (a, b) {
                var d = b || [];
                return null != a && (c(Object(a)) ? fa.merge(d, "string" == typeof a ? [a] : a) : $.call(d, a)), d;
            },
            inArray: function (a, b, c) {
                return null == b ? -1 : _.call(b, a, c);
            },
            merge: function (a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
                return (a.length = e), a;
            },
            grep: function (a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) (d = !b(a[f], f)), d !== h && e.push(a[f]);
                return e;
            },
            map: function (a, b, d) {
                var e,
                    f,
                    g = 0,
                    h = [];
                if (c(a)) for (e = a.length; e > g; g++) (f = b(a[g], g, d)), null != f && h.push(f);
                else for (g in a) (f = b(a[g], g, d)), null != f && h.push(f);
                return Z.apply([], h);
            },
            guid: 1,
            proxy: function (a, b) {
                var c, d, e;
                return (
                    "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
                    fa.isFunction(a)
                        ? ((d = Y.call(arguments, 2)),
                          (e = function () {
                              return a.apply(b || this, d.concat(Y.call(arguments)));
                          }),
                          (e.guid = a.guid = a.guid || fa.guid++),
                          e)
                        : void 0
                );
            },
            now: Date.now,
            support: da,
        }),
        "function" == typeof Symbol && (fa.fn[Symbol.iterator] = W[Symbol.iterator]),
        fa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
            aa["[object " + b + "]"] = b.toLowerCase();
        });
    var ka = (function (a) {
        function b(a, b, c, d) {
            var e,
                f,
                g,
                h,
                i,
                j,
                l,
                n,
                o = b && b.ownerDocument,
                p = b ? b.nodeType : 9;
            if (((c = c || []), "string" != typeof a || !a || (1 !== p && 9 !== p && 11 !== p))) return c;
            if (!d && ((b ? b.ownerDocument || b : O) !== G && F(b), (b = b || G), I)) {
                if (11 !== p && (j = ra.exec(a)))
                    if ((e = j[1])) {
                        if (9 === p) {
                            if (!(g = b.getElementById(e))) return c;
                            if (g.id === e) return c.push(g), c;
                        } else if (o && (g = o.getElementById(e)) && M(b, g) && g.id === e) return c.push(g), c;
                    } else {
                        if (j[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((e = j[3]) && v.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), c;
                    }
                if (v.qsa && !T[a + " "] && (!J || !J.test(a))) {
                    if (1 !== p) (o = b), (n = a);
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        for ((h = b.getAttribute("id")) ? (h = h.replace(ta, "\\$&")) : b.setAttribute("id", (h = N)), l = z(a), f = l.length, i = ma.test(h) ? "#" + h : "[id='" + h + "']"; f--; ) l[f] = i + " " + m(l[f]);
                        (n = l.join(",")), (o = (sa.test(a) && k(b.parentNode)) || b);
                    }
                    if (n)
                        try {
                            return $.apply(c, o.querySelectorAll(n)), c;
                        } catch (q) {
                        } finally {
                            h === N && b.removeAttribute("id");
                        }
                }
            }
            return B(a.replace(ha, "$1"), b, c, d);
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], (a[c + " "] = d);
            }
            var b = [];
            return a;
        }
        function d(a) {
            return (a[N] = !0), a;
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), (b = null);
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = c.length; d--; ) w.attrHandle[c[d]] = b;
        }
        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c) for (; (c = c.nextSibling); ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function h(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function i(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function j(a) {
            return d(function (b) {
                return (
                    (b = +b),
                    d(function (c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--; ) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
                    })
                );
            });
        }
        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        function l() {}
        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first
                ? function (b, c, f) {
                      for (; (b = b[d]); ) if (1 === b.nodeType || e) return a(b, c, f);
                  }
                : function (b, c, g) {
                      var h,
                          i,
                          j,
                          k = [P, f];
                      if (g) {
                          for (; (b = b[d]); ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                      } else
                          for (; (b = b[d]); )
                              if (1 === b.nodeType || e) {
                                  if (((j = b[N] || (b[N] = {})), (i = j[b.uniqueID] || (j[b.uniqueID] = {})), (h = i[d]) && h[0] === P && h[1] === f)) return (k[2] = h[2]);
                                  if (((i[d] = k), (k[2] = a(b, c, g)))) return !0;
                              }
                  };
        }
        function o(a) {
            return a.length > 1
                ? function (b, c, d) {
                      for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                      return !0;
                  }
                : a[0];
        }
        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d;
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
            return g;
        }
        function r(a, b, c, e, f, g) {
            return (
                e && !e[N] && (e = r(e)),
                f && !f[N] && (f = r(f, g)),
                d(function (d, g, h, i) {
                    var j,
                        k,
                        l,
                        m = [],
                        n = [],
                        o = g.length,
                        r = d || p(b || "*", h.nodeType ? [h] : h, []),
                        s = !a || (!d && b) ? r : q(r, m, a, h, i),
                        t = c ? (f || (d ? a : o || e) ? [] : g) : s;
                    if ((c && c(s, t, h, i), e)) for (j = q(t, n), e(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = t.length; k--; ) (l = t[k]) && j.push((s[k] = l));
                                f(null, (t = []), j, i);
                            }
                            for (k = t.length; k--; ) (l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l));
                        }
                    } else (t = q(t === g ? t.splice(o, t.length) : t)), f ? f(null, g, t, i) : $.apply(g, t);
                })
            );
        }
        function s(a) {
            for (
                var b,
                    c,
                    d,
                    e = a.length,
                    f = w.relative[a[0].type],
                    g = f || w.relative[" "],
                    h = f ? 1 : 0,
                    i = n(
                        function (a) {
                            return a === b;
                        },
                        g,
                        !0
                    ),
                    j = n(
                        function (a) {
                            return aa(b, a) > -1;
                        },
                        g,
                        !0
                    ),
                    k = [
                        function (a, c, d) {
                            var e = (!f && (d || c !== C)) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                            return (b = null), e;
                        },
                    ];
                e > h;
                h++
            )
                if ((c = w.relative[a[h].type])) k = [n(o(k), c)];
                else {
                    if (((c = w.filter[a[h].type].apply(null, a[h].matches)), c[N])) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({ value: " " === a[h - 2].type ? "*" : "" })).replace(ha, "$1"), c, d > h && s(a.slice(h, d)), e > d && s((a = a.slice(d))), e > d && m(a));
                    }
                    k.push(c);
                }
            return o(k);
        }
        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function (d, g, h, i, j) {
                    var k,
                        l,
                        m,
                        n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || (f && w.find.TAG("*", j)),
                        u = (P += null == s ? 1 : Math.random() || 0.1),
                        v = t.length;
                    for (j && (C = g === G || g || j); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0, g || k.ownerDocument === G || (F(k), (h = !I)); (m = a[l++]); )
                                if (m(k, g || G, h)) {
                                    i.push(k);
                                    break;
                                }
                            j && (P = u);
                        }
                        e && ((k = !m && k) && n--, d && p.push(k));
                    }
                    if (((n += o), e && o !== n)) {
                        for (l = 0; (m = c[l++]); ) m(p, r, g, h);
                        if (d) {
                            if (n > 0) for (; o--; ) p[o] || r[o] || (r[o] = Y.call(i));
                            r = q(r);
                        }
                        $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i);
                    }
                    return j && ((P = u), (C = s)), p;
                };
            return e ? d(g) : g;
        }
        var u,
            v,
            w,
            x,
            y,
            z,
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H,
            I,
            J,
            K,
            L,
            M,
            N = "sizzle" + 1 * new Date(),
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function (a, b) {
                return a === b && (E = !0), 0;
            },
            V = 1 << 31,
            W = {}.hasOwnProperty,
            X = [],
            Y = X.pop,
            Z = X.push,
            $ = X.push,
            _ = X.slice,
            aa = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
                return -1;
            },
            ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]",
            da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]",
            fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)",
            ga = new RegExp(ca + "+", "g"),
            ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ia = new RegExp("^" + ca + "*," + ca + "*"),
            ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
            la = new RegExp(fa),
            ma = new RegExp("^" + da + "$"),
            na = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da + "|[*])"),
                ATTR: new RegExp("^" + ea),
                PSEUDO: new RegExp("^" + fa),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i"),
            },
            oa = /^(?:input|select|textarea|button)$/i,
            pa = /^h\d$/i,
            qa = /^[^{]+\{\s*\[native \w/,
            ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            sa = /[+~]/,
            ta = /'|\\/g,
            ua = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
            va = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
            },
            wa = function () {
                F();
            };
        try {
            $.apply((X = _.call(O.childNodes)), O.childNodes), X[O.childNodes.length].nodeType;
        } catch (xa) {
            $ = {
                apply: X.length
                    ? function (a, b) {
                          Z.apply(a, _.call(b));
                      }
                    : function (a, b) {
                          for (var c = a.length, d = 0; (a[c++] = b[d++]); );
                          a.length = c - 1;
                      },
            };
        }
        (v = b.support = {}),
            (y = b.isXML = function (a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1;
            }),
            (F = b.setDocument = function (a) {
                var b,
                    c,
                    d = a ? a.ownerDocument || a : O;
                return d !== G && 9 === d.nodeType && d.documentElement
                    ? ((G = d),
                      (H = G.documentElement),
                      (I = !y(G)),
                      (c = G.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", wa, !1) : c.attachEvent && c.attachEvent("onunload", wa)),
                      (v.attributes = e(function (a) {
                          return (a.className = "i"), !a.getAttribute("className");
                      })),
                      (v.getElementsByTagName = e(function (a) {
                          return a.appendChild(G.createComment("")), !a.getElementsByTagName("*").length;
                      })),
                      (v.getElementsByClassName = qa.test(G.getElementsByClassName)),
                      (v.getById = e(function (a) {
                          return (H.appendChild(a).id = N), !G.getElementsByName || !G.getElementsByName(N).length;
                      })),
                      v.getById
                          ? ((w.find.ID = function (a, b) {
                                if ("undefined" != typeof b.getElementById && I) {
                                    var c = b.getElementById(a);
                                    return c ? [c] : [];
                                }
                            }),
                            (w.filter.ID = function (a) {
                                var b = a.replace(ua, va);
                                return function (a) {
                                    return a.getAttribute("id") === b;
                                };
                            }))
                          : (delete w.find.ID,
                            (w.filter.ID = function (a) {
                                var b = a.replace(ua, va);
                                return function (a) {
                                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                                    return c && c.value === b;
                                };
                            })),
                      (w.find.TAG = v.getElementsByTagName
                          ? function (a, b) {
                                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0;
                            }
                          : function (a, b) {
                                var c,
                                    d = [],
                                    e = 0,
                                    f = b.getElementsByTagName(a);
                                if ("*" === a) {
                                    for (; (c = f[e++]); ) 1 === c.nodeType && d.push(c);
                                    return d;
                                }
                                return f;
                            }),
                      (w.find.CLASS =
                          v.getElementsByClassName &&
                          function (a, b) {
                              return "undefined" != typeof b.getElementsByClassName && I ? b.getElementsByClassName(a) : void 0;
                          }),
                      (K = []),
                      (J = []),
                      (v.qsa = qa.test(G.querySelectorAll)) &&
                          (e(function (a) {
                              (H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                  a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"),
                                  a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"),
                                  a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="),
                                  a.querySelectorAll(":checked").length || J.push(":checked"),
                                  a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]");
                          }),
                          e(function (a) {
                              var b = G.createElement("input");
                              b.setAttribute("type", "hidden"),
                                  a.appendChild(b).setAttribute("name", "D"),
                                  a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="),
                                  a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"),
                                  a.querySelectorAll("*,:x"),
                                  J.push(",.*:");
                          })),
                      (v.matchesSelector = qa.test((L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector))) &&
                          e(function (a) {
                              (v.disconnectedMatch = L.call(a, "div")), L.call(a, "[s!='']:x"), K.push("!=", fa);
                          }),
                      (J = J.length && new RegExp(J.join("|"))),
                      (K = K.length && new RegExp(K.join("|"))),
                      (b = qa.test(H.compareDocumentPosition)),
                      (M =
                          b || qa.test(H.contains)
                              ? function (a, b) {
                                    var c = 9 === a.nodeType ? a.documentElement : a,
                                        d = b && b.parentNode;
                                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
                                }
                              : function (a, b) {
                                    if (b) for (; (b = b.parentNode); ) if (b === a) return !0;
                                    return !1;
                                }),
                      (U = b
                          ? function (a, b) {
                                if (a === b) return (E = !0), 0;
                                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                                return c
                                    ? c
                                    : ((c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1),
                                      1 & c || (!v.sortDetached && b.compareDocumentPosition(a) === c)
                                          ? a === G || (a.ownerDocument === O && M(O, a))
                                              ? -1
                                              : b === G || (b.ownerDocument === O && M(O, b))
                                              ? 1
                                              : D
                                              ? aa(D, a) - aa(D, b)
                                              : 0
                                          : 4 & c
                                          ? -1
                                          : 1);
                            }
                          : function (a, b) {
                                if (a === b) return (E = !0), 0;
                                var c,
                                    d = 0,
                                    e = a.parentNode,
                                    f = b.parentNode,
                                    h = [a],
                                    i = [b];
                                if (!e || !f) return a === G ? -1 : b === G ? 1 : e ? -1 : f ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                                if (e === f) return g(a, b);
                                for (c = a; (c = c.parentNode); ) h.unshift(c);
                                for (c = b; (c = c.parentNode); ) i.unshift(c);
                                for (; h[d] === i[d]; ) d++;
                                return d ? g(h[d], i[d]) : h[d] === O ? -1 : i[d] === O ? 1 : 0;
                            }),
                      G)
                    : G;
            }),
            (b.matches = function (a, c) {
                return b(a, null, null, c);
            }),
            (b.matchesSelector = function (a, c) {
                if (((a.ownerDocument || a) !== G && F(a), (c = c.replace(ka, "='$1']")), v.matchesSelector && I && !T[c + " "] && (!K || !K.test(c)) && (!J || !J.test(c))))
                    try {
                        var d = L.call(a, c);
                        if (d || v.disconnectedMatch || (a.document && 11 !== a.document.nodeType)) return d;
                    } catch (e) {}
                return b(c, G, null, [a]).length > 0;
            }),
            (b.contains = function (a, b) {
                return (a.ownerDocument || a) !== G && F(a), M(a, b);
            }),
            (b.attr = function (a, b) {
                (a.ownerDocument || a) !== G && F(a);
                var c = w.attrHandle[b.toLowerCase()],
                    d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
            }),
            (b.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a);
            }),
            (b.uniqueSort = function (a) {
                var b,
                    c = [],
                    d = 0,
                    e = 0;
                if (((E = !v.detectDuplicates), (D = !v.sortStable && a.slice(0)), a.sort(U), E)) {
                    for (; (b = a[e++]); ) b === a[e] && (d = c.push(e));
                    for (; d--; ) a.splice(c[d], 1);
                }
                return (D = null), a;
            }),
            (x = b.getText = function (a) {
                var b,
                    c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += x(a);
                    } else if (3 === e || 4 === e) return a.nodeValue;
                } else for (; (b = a[d++]); ) c += x(b);
                return c;
            }),
            (w = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: na,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function (a) {
                        return (a[1] = a[1].replace(ua, va)), (a[3] = (a[3] || a[4] || a[5] || "").replace(ua, va)), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                    },
                    CHILD: function (a) {
                        return (
                            (a[1] = a[1].toLowerCase()),
                            "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), (a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3]))), (a[5] = +(a[7] + a[8] || "odd" === a[3]))) : a[3] && b.error(a[0]),
                            a
                        );
                    },
                    PSEUDO: function (a) {
                        var b,
                            c = !a[6] && a[2];
                        return na.CHILD.test(a[0])
                            ? null
                            : (a[3] ? (a[2] = a[4] || a[5] || "") : c && la.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))), a.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (a) {
                        var b = a.replace(ua, va).toLowerCase();
                        return "*" === a
                            ? function () {
                                  return !0;
                              }
                            : function (a) {
                                  return a.nodeName && a.nodeName.toLowerCase() === b;
                              };
                    },
                    CLASS: function (a) {
                        var b = R[a + " "];
                        return (
                            b ||
                            ((b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) &&
                                R(a, function (a) {
                                    return b.test(("string" == typeof a.className && a.className) || ("undefined" != typeof a.getAttribute && a.getAttribute("class")) || "");
                                }))
                        );
                    },
                    ATTR: function (a, c, d) {
                        return function (e) {
                            var f = b.attr(e, a);
                            return null == f
                                ? "!=" === c
                                : c
                                ? ((f += ""),
                                  "=" === c
                                      ? f === d
                                      : "!=" === c
                                      ? f !== d
                                      : "^=" === c
                                      ? d && 0 === f.indexOf(d)
                                      : "*=" === c
                                      ? d && f.indexOf(d) > -1
                                      : "$=" === c
                                      ? d && f.slice(-d.length) === d
                                      : "~=" === c
                                      ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1
                                      : "|=" === c
                                      ? f === d || f.slice(0, d.length + 1) === d + "-"
                                      : !1)
                                : !0;
                        };
                    },
                    CHILD: function (a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e
                            ? function (a) {
                                  return !!a.parentNode;
                              }
                            : function (b, c, i) {
                                  var j,
                                      k,
                                      l,
                                      m,
                                      n,
                                      o,
                                      p = f !== g ? "nextSibling" : "previousSibling",
                                      q = b.parentNode,
                                      r = h && b.nodeName.toLowerCase(),
                                      s = !i && !h,
                                      t = !1;
                                  if (q) {
                                      if (f) {
                                          for (; p; ) {
                                              for (m = b; (m = m[p]); ) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                              o = p = "only" === a && !o && "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                                          for (
                                              m = q, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === P && j[1], t = n && j[2], m = n && q.childNodes[n];
                                              (m = (++n && m && m[p]) || (t = n = 0) || o.pop());

                                          )
                                              if (1 === m.nodeType && ++t && m === b) {
                                                  k[a] = [P, n, t];
                                                  break;
                                              }
                                      } else if ((s && ((m = b), (l = m[N] || (m[N] = {})), (k = l[m.uniqueID] || (l[m.uniqueID] = {})), (j = k[a] || []), (n = j[0] === P && j[1]), (t = n)), t === !1))
                                          for (
                                              ;
                                              (m = (++n && m && m[p]) || (t = n = 0) || o.pop()) &&
                                              ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && ((l = m[N] || (m[N] = {})), (k = l[m.uniqueID] || (l[m.uniqueID] = {})), (k[a] = [P, t])), m !== b));

                                          );
                                      return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                                  }
                              };
                    },
                    PSEUDO: function (a, c) {
                        var e,
                            f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return f[N]
                            ? f(c)
                            : f.length > 1
                            ? ((e = [a, a, "", c]),
                              w.setFilters.hasOwnProperty(a.toLowerCase())
                                  ? d(function (a, b) {
                                        for (var d, e = f(a, c), g = e.length; g--; ) (d = aa(a, e[g])), (a[d] = !(b[d] = e[g]));
                                    })
                                  : function (a) {
                                        return f(a, 0, e);
                                    })
                            : f;
                    },
                },
                pseudos: {
                    not: d(function (a) {
                        var b = [],
                            c = [],
                            e = A(a.replace(ha, "$1"));
                        return e[N]
                            ? d(function (a, b, c, d) {
                                  for (var f, g = e(a, null, d, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                              })
                            : function (a, d, f) {
                                  return (b[0] = a), e(b, null, f, c), (b[0] = null), !c.pop();
                              };
                    }),
                    has: d(function (a) {
                        return function (c) {
                            return b(a, c).length > 0;
                        };
                    }),
                    contains: d(function (a) {
                        return (
                            (a = a.replace(ua, va)),
                            function (b) {
                                return (b.textContent || b.innerText || x(b)).indexOf(a) > -1;
                            }
                        );
                    }),
                    lang: d(function (a) {
                        return (
                            ma.test(a || "") || b.error("unsupported lang: " + a),
                            (a = a.replace(ua, va).toLowerCase()),
                            function (b) {
                                var c;
                                do if ((c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))) return (c = c.toLowerCase()), c === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id;
                    },
                    root: function (a) {
                        return a === H;
                    },
                    focus: function (a) {
                        return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                    },
                    enabled: function (a) {
                        return a.disabled === !1;
                    },
                    disabled: function (a) {
                        return a.disabled === !0;
                    },
                    checked: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return ("input" === b && !!a.checked) || ("option" === b && !!a.selected);
                    },
                    selected: function (a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                    },
                    empty: function (a) {
                        for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (a) {
                        return !w.pseudos.empty(a);
                    },
                    header: function (a) {
                        return pa.test(a.nodeName);
                    },
                    input: function (a) {
                        return oa.test(a.nodeName);
                    },
                    button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return ("input" === b && "button" === a.type) || "button" === b;
                    },
                    text: function (a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                    },
                    first: j(function () {
                        return [0];
                    }),
                    last: j(function (a, b) {
                        return [b - 1];
                    }),
                    eq: j(function (a, b, c) {
                        return [0 > c ? c + b : c];
                    }),
                    even: j(function (a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a;
                    }),
                    odd: j(function (a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a;
                    }),
                    lt: j(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                        return a;
                    }),
                    gt: j(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                        return a;
                    }),
                },
            }),
            (w.pseudos.nth = w.pseudos.eq);
        for (u in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) w.pseudos[u] = h(u);
        for (u in { submit: !0, reset: !0 }) w.pseudos[u] = i(u);
        return (
            (l.prototype = w.filters = w.pseudos),
            (w.setFilters = new l()),
            (z = b.tokenize = function (a, c) {
                var d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k = S[a + " "];
                if (k) return c ? 0 : k.slice(0);
                for (h = a, i = [], j = w.preFilter; h; ) {
                    (d && !(e = ia.exec(h))) || (e && (h = h.slice(e[0].length) || h), i.push((f = []))), (d = !1), (e = ja.exec(h)) && ((d = e.shift()), f.push({ value: d, type: e[0].replace(ha, " ") }), (h = h.slice(d.length)));
                    for (g in w.filter) !(e = na[g].exec(h)) || (j[g] && !(e = j[g](e))) || ((d = e.shift()), f.push({ value: d, type: g, matches: e }), (h = h.slice(d.length)));
                    if (!d) break;
                }
                return c ? h.length : h ? b.error(a) : S(a, i).slice(0);
            }),
            (A = b.compile = function (a, b) {
                var c,
                    d = [],
                    e = [],
                    f = T[a + " "];
                if (!f) {
                    for (b || (b = z(a)), c = b.length; c--; ) (f = s(b[c])), f[N] ? d.push(f) : e.push(f);
                    (f = T(a, t(e, d))), (f.selector = a);
                }
                return f;
            }),
            (B = b.select = function (a, b, c, d) {
                var e,
                    f,
                    g,
                    h,
                    i,
                    j = "function" == typeof a && a,
                    l = !d && z((a = j.selector || a));
                if (((c = c || []), 1 === l.length)) {
                    if (((f = l[0] = l[0].slice(0)), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type])) {
                        if (((b = (w.find.ID(g.matches[0].replace(ua, va), b) || [])[0]), !b)) return c;
                        j && (b = b.parentNode), (a = a.slice(f.shift().value.length));
                    }
                    for (e = na.needsContext.test(a) ? 0 : f.length; e-- && ((g = f[e]), !w.relative[(h = g.type)]); )
                        if ((i = w.find[h]) && (d = i(g.matches[0].replace(ua, va), (sa.test(f[0].type) && k(b.parentNode)) || b))) {
                            if ((f.splice(e, 1), (a = d.length && m(f)), !a)) return $.apply(c, d), c;
                            break;
                        }
                }
                return (j || A(a, l))(d, b, !I, c, !b || (sa.test(a) && k(b.parentNode)) || b), c;
            }),
            (v.sortStable = N.split("").sort(U).join("") === N),
            (v.detectDuplicates = !!E),
            F(),
            (v.sortDetached = e(function (a) {
                return 1 & a.compareDocumentPosition(G.createElement("div"));
            })),
            e(function (a) {
                return (a.innerHTML = "<a href='#'></a>"), "#" === a.firstChild.getAttribute("href");
            }) ||
                f("type|href|height|width", function (a, b, c) {
                    return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
                }),
            (v.attributes &&
                e(function (a) {
                    return (a.innerHTML = "<input/>"), a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
                })) ||
                f("value", function (a, b, c) {
                    return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
                }),
            e(function (a) {
                return null == a.getAttribute("disabled");
            }) ||
                f(ba, function (a, b, c) {
                    var d;
                    return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
                }),
            b
        );
    })(a);
    (fa.find = ka), (fa.expr = ka.selectors), (fa.expr[":"] = fa.expr.pseudos), (fa.uniqueSort = fa.unique = ka.uniqueSort), (fa.text = ka.getText), (fa.isXMLDoc = ka.isXML), (fa.contains = ka.contains);
    var la = function (a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
                if (1 === a.nodeType) {
                    if (e && fa(a).is(c)) break;
                    d.push(a);
                }
            return d;
        },
        ma = function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        },
        na = fa.expr.match.needsContext,
        oa = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        pa = /^.[^:#\[\.,]*$/;
    (fa.filter = function (a, b, c) {
        var d = b[0];
        return (
            c && (a = ":not(" + a + ")"),
            1 === b.length && 1 === d.nodeType
                ? fa.find.matchesSelector(d, a)
                    ? [d]
                    : []
                : fa.find.matches(
                      a,
                      fa.grep(b, function (a) {
                          return 1 === a.nodeType;
                      })
                  )
        );
    }),
        fa.fn.extend({
            find: function (a) {
                var b,
                    c = this.length,
                    d = [],
                    e = this;
                if ("string" != typeof a)
                    return this.pushStack(
                        fa(a).filter(function () {
                            for (b = 0; c > b; b++) if (fa.contains(e[b], this)) return !0;
                        })
                    );
                for (b = 0; c > b; b++) fa.find(a, e[b], d);
                return (d = this.pushStack(c > 1 ? fa.unique(d) : d)), (d.selector = this.selector ? this.selector + " " + a : a), d;
            },
            filter: function (a) {
                return this.pushStack(d(this, a || [], !1));
            },
            not: function (a) {
                return this.pushStack(d(this, a || [], !0));
            },
            is: function (a) {
                return !!d(this, "string" == typeof a && na.test(a) ? fa(a) : a || [], !1).length;
            },
        });
    var qa,
        ra = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        sa = (fa.fn.init = function (a, b, c) {
            var d, e;
            if (!a) return this;
            if (((c = c || qa), "string" == typeof a)) {
                if (((d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ra.exec(a)), !d || (!d[1] && b))) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (d[1]) {
                    if (((b = b instanceof fa ? b[0] : b), fa.merge(this, fa.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : X, !0)), oa.test(d[1]) && fa.isPlainObject(b)))
                        for (d in b) fa.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                    return this;
                }
                return (e = X.getElementById(d[2])), e && e.parentNode && ((this.length = 1), (this[0] = e)), (this.context = X), (this.selector = a), this;
            }
            return a.nodeType
                ? ((this.context = this[0] = a), (this.length = 1), this)
                : fa.isFunction(a)
                ? void 0 !== c.ready
                    ? c.ready(a)
                    : a(fa)
                : (void 0 !== a.selector && ((this.selector = a.selector), (this.context = a.context)), fa.makeArray(a, this));
        });
    (sa.prototype = fa.fn), (qa = fa(X));
    var ta = /^(?:parents|prev(?:Until|All))/,
        ua = { children: !0, contents: !0, next: !0, prev: !0 };
    fa.fn.extend({
        has: function (a) {
            var b = fa(a, this),
                c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++) if (fa.contains(this, b[a])) return !0;
            });
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = na.test(a) || "string" != typeof a ? fa(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fa.find.matchesSelector(c, a))) {
                        f.push(c);
                        break;
                    }
            return this.pushStack(f.length > 1 ? fa.uniqueSort(f) : f);
        },
        index: function (a) {
            return a ? ("string" == typeof a ? _.call(fa(a), this[0]) : _.call(this, a.jquery ? a[0] : a)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (a, b) {
            return this.pushStack(fa.uniqueSort(fa.merge(this.get(), fa(a, b))));
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        },
    }),
        fa.each(
            {
                parent: function (a) {
                    var b = a.parentNode;
                    return b && 11 !== b.nodeType ? b : null;
                },
                parents: function (a) {
                    return la(a, "parentNode");
                },
                parentsUntil: function (a, b, c) {
                    return la(a, "parentNode", c);
                },
                next: function (a) {
                    return e(a, "nextSibling");
                },
                prev: function (a) {
                    return e(a, "previousSibling");
                },
                nextAll: function (a) {
                    return la(a, "nextSibling");
                },
                prevAll: function (a) {
                    return la(a, "previousSibling");
                },
                nextUntil: function (a, b, c) {
                    return la(a, "nextSibling", c);
                },
                prevUntil: function (a, b, c) {
                    return la(a, "previousSibling", c);
                },
                siblings: function (a) {
                    return ma((a.parentNode || {}).firstChild, a);
                },
                children: function (a) {
                    return ma(a.firstChild);
                },
                contents: function (a) {
                    return a.contentDocument || fa.merge([], a.childNodes);
                },
            },
            function (a, b) {
                fa.fn[a] = function (c, d) {
                    var e = fa.map(this, b, c);
                    return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fa.filter(d, e)), this.length > 1 && (ua[a] || fa.uniqueSort(e), ta.test(a) && e.reverse()), this.pushStack(e);
                };
            }
        );
    var va = /\S+/g;
    (fa.Callbacks = function (a) {
        a = "string" == typeof a ? f(a) : fa.extend({}, a);
        var b,
            c,
            d,
            e,
            g = [],
            h = [],
            i = -1,
            j = function () {
                for (e = a.once, d = b = !0; h.length; i = -1) for (c = h.shift(); ++i < g.length; ) g[i].apply(c[0], c[1]) === !1 && a.stopOnFalse && ((i = g.length), (c = !1));
                a.memory || (c = !1), (b = !1), e && (g = c ? [] : "");
            },
            k = {
                add: function () {
                    return (
                        g &&
                            (c && !b && ((i = g.length - 1), h.push(c)),
                            (function d(b) {
                                fa.each(b, function (b, c) {
                                    fa.isFunction(c) ? (a.unique && k.has(c)) || g.push(c) : c && c.length && "string" !== fa.type(c) && d(c);
                                });
                            })(arguments),
                            c && !b && j()),
                        this
                    );
                },
                remove: function () {
                    return (
                        fa.each(arguments, function (a, b) {
                            for (var c; (c = fa.inArray(b, g, c)) > -1; ) g.splice(c, 1), i >= c && i--;
                        }),
                        this
                    );
                },
                has: function (a) {
                    return a ? fa.inArray(a, g) > -1 : g.length > 0;
                },
                empty: function () {
                    return g && (g = []), this;
                },
                disable: function () {
                    return (e = h = []), (g = c = ""), this;
                },
                disabled: function () {
                    return !g;
                },
                lock: function () {
                    return (e = h = []), c || (g = c = ""), this;
                },
                locked: function () {
                    return !!e;
                },
                fireWith: function (a, c) {
                    return e || ((c = c || []), (c = [a, c.slice ? c.slice() : c]), h.push(c), b || j()), this;
                },
                fire: function () {
                    return k.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!d;
                },
            };
        return k;
    }),
        fa.extend({
            Deferred: function (a) {
                var b = [
                        ["resolve", "done", fa.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", fa.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", fa.Callbacks("memory")],
                    ],
                    c = "pending",
                    d = {
                        state: function () {
                            return c;
                        },
                        always: function () {
                            return e.done(arguments).fail(arguments), this;
                        },
                        then: function () {
                            var a = arguments;
                            return fa
                                .Deferred(function (c) {
                                    fa.each(b, function (b, f) {
                                        var g = fa.isFunction(a[b]) && a[b];
                                        e[f[1]](function () {
                                            var a = g && g.apply(this, arguments);
                                            a && fa.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
                                        });
                                    }),
                                        (a = null);
                                })
                                .promise();
                        },
                        promise: function (a) {
                            return null != a ? fa.extend(a, d) : d;
                        },
                    },
                    e = {};
                return (
                    (d.pipe = d.then),
                    fa.each(b, function (a, f) {
                        var g = f[2],
                            h = f[3];
                        (d[f[1]] = g.add),
                            h &&
                                g.add(
                                    function () {
                                        c = h;
                                    },
                                    b[1 ^ a][2].disable,
                                    b[2][2].lock
                                ),
                            (e[f[0]] = function () {
                                return e[f[0] + "With"](this === e ? d : this, arguments), this;
                            }),
                            (e[f[0] + "With"] = g.fireWith);
                    }),
                    d.promise(e),
                    a && a.call(e, e),
                    e
                );
            },
            when: function (a) {
                var b,
                    c,
                    d,
                    e = 0,
                    f = Y.call(arguments),
                    g = f.length,
                    h = 1 !== g || (a && fa.isFunction(a.promise)) ? g : 0,
                    i = 1 === h ? a : fa.Deferred(),
                    j = function (a, c, d) {
                        return function (e) {
                            (c[a] = this), (d[a] = arguments.length > 1 ? Y.call(arguments) : e), d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
                        };
                    };
                if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && fa.isFunction(f[e].promise) ? f[e].promise().progress(j(e, c, b)).done(j(e, d, f)).fail(i.reject) : --h;
                return h || i.resolveWith(d, f), i.promise();
            },
        });
    var wa;
    (fa.fn.ready = function (a) {
        return fa.ready.promise().done(a), this;
    }),
        fa.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (a) {
                a ? fa.readyWait++ : fa.ready(!0);
            },
            ready: function (a) {
                (a === !0 ? --fa.readyWait : fa.isReady) || ((fa.isReady = !0), (a !== !0 && --fa.readyWait > 0) || (wa.resolveWith(X, [fa]), fa.fn.triggerHandler && (fa(X).triggerHandler("ready"), fa(X).off("ready"))));
            },
        }),
        (fa.ready.promise = function (b) {
            return (
                wa || ((wa = fa.Deferred()), "complete" === X.readyState || ("loading" !== X.readyState && !X.documentElement.doScroll) ? a.setTimeout(fa.ready) : (X.addEventListener("DOMContentLoaded", g), a.addEventListener("load", g))),
                wa.promise(b)
            );
        }),
        fa.ready.promise();
    var xa = function (a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === fa.type(c)) {
                e = !0;
                for (h in c) xa(a, b, h, c[h], !0, f, g);
            } else if (
                void 0 !== d &&
                ((e = !0),
                fa.isFunction(d) || (g = !0),
                j &&
                    (g
                        ? (b.call(a, d), (b = null))
                        : ((j = b),
                          (b = function (a, b, c) {
                              return j.call(fa(a), c);
                          }))),
                b)
            )
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
        },
        ya = function (a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
        };
    (h.uid = 1),
        (h.prototype = {
            register: function (a, b) {
                var c = b || {};
                return a.nodeType ? (a[this.expando] = c) : Object.defineProperty(a, this.expando, { value: c, writable: !0, configurable: !0 }), a[this.expando];
            },
            cache: function (a) {
                if (!ya(a)) return {};
                var b = a[this.expando];
                return b || ((b = {}), ya(a) && (a.nodeType ? (a[this.expando] = b) : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
            },
            set: function (a, b, c) {
                var d,
                    e = this.cache(a);
                if ("string" == typeof b) e[b] = c;
                else for (d in b) e[d] = b[d];
                return e;
            },
            get: function (a, b) {
                return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b];
            },
            access: function (a, b, c) {
                var d;
                return void 0 === b || (b && "string" == typeof b && void 0 === c) ? ((d = this.get(a, b)), void 0 !== d ? d : this.get(a, fa.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
            },
            remove: function (a, b) {
                var c,
                    d,
                    e,
                    f = a[this.expando];
                if (void 0 !== f) {
                    if (void 0 === b) this.register(a);
                    else {
                        fa.isArray(b) ? (d = b.concat(b.map(fa.camelCase))) : ((e = fa.camelCase(b)), b in f ? (d = [b, e]) : ((d = e), (d = d in f ? [d] : d.match(va) || []))), (c = d.length);
                        for (; c--; ) delete f[d[c]];
                    }
                    (void 0 === b || fa.isEmptyObject(f)) && (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
                }
            },
            hasData: function (a) {
                var b = a[this.expando];
                return void 0 !== b && !fa.isEmptyObject(b);
            },
        });
    var za = new h(),
        Aa = new h(),
        Ba = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ca = /[A-Z]/g;
    fa.extend({
        hasData: function (a) {
            return Aa.hasData(a) || za.hasData(a);
        },
        data: function (a, b, c) {
            return Aa.access(a, b, c);
        },
        removeData: function (a, b) {
            Aa.remove(a, b);
        },
        _data: function (a, b, c) {
            return za.access(a, b, c);
        },
        _removeData: function (a, b) {
            za.remove(a, b);
        },
    }),
        fa.fn.extend({
            data: function (a, b) {
                var c,
                    d,
                    e,
                    f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && ((e = Aa.get(f)), 1 === f.nodeType && !za.get(f, "hasDataAttrs"))) {
                        for (c = g.length; c--; ) g[c] && ((d = g[c].name), 0 === d.indexOf("data-") && ((d = fa.camelCase(d.slice(5))), i(f, d, e[d])));
                        za.set(f, "hasDataAttrs", !0);
                    }
                    return e;
                }
                return "object" == typeof a
                    ? this.each(function () {
                          Aa.set(this, a);
                      })
                    : xa(
                          this,
                          function (b) {
                              var c, d;
                              if (f && void 0 === b) {
                                  if (((c = Aa.get(f, a) || Aa.get(f, a.replace(Ca, "-$&").toLowerCase())), void 0 !== c)) return c;
                                  if (((d = fa.camelCase(a)), (c = Aa.get(f, d)), void 0 !== c)) return c;
                                  if (((c = i(f, d, void 0)), void 0 !== c)) return c;
                              } else
                                  (d = fa.camelCase(a)),
                                      this.each(function () {
                                          var c = Aa.get(this, d);
                                          Aa.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && Aa.set(this, a, b);
                                      });
                          },
                          null,
                          b,
                          arguments.length > 1,
                          null,
                          !0
                      );
            },
            removeData: function (a) {
                return this.each(function () {
                    Aa.remove(this, a);
                });
            },
        }),
        fa.extend({
            queue: function (a, b, c) {
                var d;
                return a ? ((b = (b || "fx") + "queue"), (d = za.get(a, b)), c && (!d || fa.isArray(c) ? (d = za.access(a, b, fa.makeArray(c))) : d.push(c)), d || []) : void 0;
            },
            dequeue: function (a, b) {
                b = b || "fx";
                var c = fa.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = fa._queueHooks(a, b),
                    g = function () {
                        fa.dequeue(a, b);
                    };
                "inprogress" === e && ((e = c.shift()), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
            },
            _queueHooks: function (a, b) {
                var c = b + "queueHooks";
                return (
                    za.get(a, c) ||
                    za.access(a, c, {
                        empty: fa.Callbacks("once memory").add(function () {
                            za.remove(a, [b + "queue", c]);
                        }),
                    })
                );
            },
        }),
        fa.fn.extend({
            queue: function (a, b) {
                var c = 2;
                return (
                    "string" != typeof a && ((b = a), (a = "fx"), c--),
                    arguments.length < c
                        ? fa.queue(this[0], a)
                        : void 0 === b
                        ? this
                        : this.each(function () {
                              var c = fa.queue(this, a, b);
                              fa._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && fa.dequeue(this, a);
                          })
                );
            },
            dequeue: function (a) {
                return this.each(function () {
                    fa.dequeue(this, a);
                });
            },
            clearQueue: function (a) {
                return this.queue(a || "fx", []);
            },
            promise: function (a, b) {
                var c,
                    d = 1,
                    e = fa.Deferred(),
                    f = this,
                    g = this.length,
                    h = function () {
                        --d || e.resolveWith(f, [f]);
                    };
                for ("string" != typeof a && ((b = a), (a = void 0)), a = a || "fx"; g--; ) (c = za.get(f[g], a + "queueHooks")), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b);
            },
        });
    var Da = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ea = new RegExp("^(?:([+-])=|)(" + Da + ")([a-z%]*)$", "i"),
        Fa = ["Top", "Right", "Bottom", "Left"],
        Ga = function (a, b) {
            return (a = b || a), "none" === fa.css(a, "display") || !fa.contains(a.ownerDocument, a);
        },
        Ha = /^(?:checkbox|radio)$/i,
        Ia = /<([\w:-]+)/,
        Ja = /^$|\/(?:java|ecma)script/i,
        Ka = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    (Ka.optgroup = Ka.option), (Ka.tbody = Ka.tfoot = Ka.colgroup = Ka.caption = Ka.thead), (Ka.th = Ka.td);
    var La = /<|&#?\w+;/;
    !(function () {
        var a = X.createDocumentFragment(),
            b = a.appendChild(X.createElement("div")),
            c = X.createElement("input");
        c.setAttribute("type", "radio"),
            c.setAttribute("checked", "checked"),
            c.setAttribute("name", "t"),
            b.appendChild(c),
            (da.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (b.innerHTML = "<textarea>x</textarea>"),
            (da.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
    })();
    var Ma = /^key/,
        Na = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Oa = /^([^.]*)(?:\.(.+)|)/;
    (fa.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = za.get(a);
            if (q)
                for (
                    c.handler && ((f = c), (c = f.handler), (e = f.selector)),
                        c.guid || (c.guid = fa.guid++),
                        (i = q.events) || (i = q.events = {}),
                        (g = q.handle) ||
                            (g = q.handle = function (b) {
                                return "undefined" != typeof fa && fa.event.triggered !== b.type ? fa.event.dispatch.apply(a, arguments) : void 0;
                            }),
                        b = (b || "").match(va) || [""],
                        j = b.length;
                    j--;

                )
                    (h = Oa.exec(b[j]) || []),
                        (n = p = h[1]),
                        (o = (h[2] || "").split(".").sort()),
                        n &&
                            ((l = fa.event.special[n] || {}),
                            (n = (e ? l.delegateType : l.bindType) || n),
                            (l = fa.event.special[n] || {}),
                            (k = fa.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && fa.expr.match.needsContext.test(e), namespace: o.join(".") }, f)),
                            (m = i[n]) || ((m = i[n] = []), (m.delegateCount = 0), (l.setup && l.setup.call(a, d, o, g) !== !1) || (a.addEventListener && a.addEventListener(n, g))),
                            l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
                            e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                            (fa.event.global[n] = !0));
        },
        remove: function (a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = za.hasData(a) && za.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(va) || [""], j = b.length; j--; )
                    if (((h = Oa.exec(b[j]) || []), (n = p = h[1]), (o = (h[2] || "").split(".").sort()), n)) {
                        for (l = fa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; )
                            (k = m[f]),
                                (!e && p !== k.origType) ||
                                    (c && c.guid !== k.guid) ||
                                    (h && !h.test(k.namespace)) ||
                                    (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                                    (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && ((l.teardown && l.teardown.call(a, o, q.handle) !== !1) || fa.removeEvent(a, n, q.handle), delete i[n]);
                    } else for (n in i) fa.event.remove(a, n + b[j], c, d, !0);
                fa.isEmptyObject(i) && za.remove(a, "handle events");
            }
        },
        dispatch: function (a) {
            a = fa.event.fix(a);
            var b,
                c,
                d,
                e,
                f,
                g = [],
                h = Y.call(arguments),
                i = (za.get(this, "events") || {})[a.type] || [],
                j = fa.event.special[a.type] || {};
            if (((h[0] = a), (a.delegateTarget = this), !j.preDispatch || j.preDispatch.call(this, a) !== !1)) {
                for (g = fa.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped(); )
                        (a.rnamespace && !a.rnamespace.test(f.namespace)) ||
                            ((a.handleObj = f), (a.data = f.data), (d = ((fa.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h)), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function (a, b) {
            var c,
                d,
                e,
                f,
                g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) (f = b[c]), (e = f.selector + " "), void 0 === d[e] && (d[e] = f.needsContext ? fa(e, this).index(i) > -1 : fa.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({ elem: i, handlers: d });
                    }
            return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
            },
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c,
                    d,
                    e,
                    f = b.button;
                return (
                    null == a.pageX &&
                        null != b.clientX &&
                        ((c = a.target.ownerDocument || X),
                        (d = c.documentElement),
                        (e = c.body),
                        (a.pageX = b.clientX + ((d && d.scrollLeft) || (e && e.scrollLeft) || 0) - ((d && d.clientLeft) || (e && e.clientLeft) || 0)),
                        (a.pageY = b.clientY + ((d && d.scrollTop) || (e && e.scrollTop) || 0) - ((d && d.clientTop) || (e && e.clientTop) || 0))),
                    a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                    a
                );
            },
        },
        fix: function (a) {
            if (a[fa.expando]) return a;
            var b,
                c,
                d,
                e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Na.test(e) ? this.mouseHooks : Ma.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new fa.Event(f), b = d.length; b--; ) (c = d[b]), (a[c] = f[c]);
            return a.target || (a.target = X), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    return this !== p() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && fa.nodeName(this, "input") ? (this.click(), !1) : void 0;
                },
                _default: function (a) {
                    return fa.nodeName(a.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                },
            },
        },
    }),
        (fa.removeEvent = function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c);
        }),
        (fa.Event = function (a, b) {
            return this instanceof fa.Event
                ? (a && a.type ? ((this.originalEvent = a), (this.type = a.type), (this.isDefaultPrevented = a.defaultPrevented || (void 0 === a.defaultPrevented && a.returnValue === !1) ? n : o)) : (this.type = a),
                  b && fa.extend(this, b),
                  (this.timeStamp = (a && a.timeStamp) || fa.now()),
                  void (this[fa.expando] = !0))
                : new fa.Event(a, b);
        }),
        (fa.Event.prototype = {
            constructor: fa.Event,
            isDefaultPrevented: o,
            isPropagationStopped: o,
            isImmediatePropagationStopped: o,
            isSimulated: !1,
            preventDefault: function () {
                var a = this.originalEvent;
                (this.isDefaultPrevented = n), a && !this.isSimulated && a.preventDefault();
            },
            stopPropagation: function () {
                var a = this.originalEvent;
                (this.isPropagationStopped = n), a && !this.isSimulated && a.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var a = this.originalEvent;
                (this.isImmediatePropagationStopped = n), a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        fa.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
            fa.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function (a) {
                    var c,
                        d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return (e && (e === d || fa.contains(d, e))) || ((a.type = f.origType), (c = f.handler.apply(this, arguments)), (a.type = b)), c;
                },
            };
        }),
        fa.fn.extend({
            on: function (a, b, c, d) {
                return q(this, a, b, c, d);
            },
            one: function (a, b, c, d) {
                return q(this, a, b, c, d, 1);
            },
            off: function (a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) return (d = a.handleObj), fa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this;
                }
                return (
                    (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
                    c === !1 && (c = o),
                    this.each(function () {
                        fa.event.remove(this, a, c, b);
                    })
                );
            },
        });
    var Pa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Qa = /<script|<style|<link/i,
        Ra = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Sa = /^true\/(.*)/,
        Ta = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    fa.extend({
        htmlPrefilter: function (a) {
            return a.replace(Pa, "<$1></$2>");
        },
        clone: function (a, b, c) {
            var d,
                e,
                f,
                g,
                h = a.cloneNode(!0),
                i = fa.contains(a.ownerDocument, a);
            if (!(da.noCloneChecked || (1 !== a.nodeType && 11 !== a.nodeType) || fa.isXMLDoc(a))) for (g = k(h), f = k(a), d = 0, e = f.length; e > d; d++) v(f[d], g[d]);
            if (b)
                if (c) for (f = f || k(a), g = g || k(h), d = 0, e = f.length; e > d; d++) u(f[d], g[d]);
                else u(a, h);
            return (g = k(h, "script")), g.length > 0 && l(g, !i && k(a, "script")), h;
        },
        cleanData: function (a) {
            for (var b, c, d, e = fa.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (ya(c)) {
                    if ((b = c[za.expando])) {
                        if (b.events) for (d in b.events) e[d] ? fa.event.remove(c, d) : fa.removeEvent(c, d, b.handle);
                        c[za.expando] = void 0;
                    }
                    c[Aa.expando] && (c[Aa.expando] = void 0);
                }
        },
    }),
        fa.fn.extend({
            domManip: w,
            detach: function (a) {
                return x(this, a, !0);
            },
            remove: function (a) {
                return x(this, a);
            },
            text: function (a) {
                return xa(
                    this,
                    function (a) {
                        return void 0 === a
                            ? fa.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = a);
                              });
                    },
                    null,
                    a,
                    arguments.length
                );
            },
            append: function () {
                return w(this, arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = r(this, a);
                        b.appendChild(a);
                    }
                });
            },
            prepend: function () {
                return w(this, arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = r(this, a);
                        b.insertBefore(a, b.firstChild);
                    }
                });
            },
            before: function () {
                return w(this, arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this);
                });
            },
            after: function () {
                return w(this, arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
                });
            },
            empty: function () {
                for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (fa.cleanData(k(a, !1)), (a.textContent = ""));
                return this;
            },
            clone: function (a, b) {
                return (
                    (a = null == a ? !1 : a),
                    (b = null == b ? a : b),
                    this.map(function () {
                        return fa.clone(this, a, b);
                    })
                );
            },
            html: function (a) {
                return xa(
                    this,
                    function (a) {
                        var b = this[0] || {},
                            c = 0,
                            d = this.length;
                        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                        if ("string" == typeof a && !Qa.test(a) && !Ka[(Ia.exec(a) || ["", ""])[1].toLowerCase()]) {
                            a = fa.htmlPrefilter(a);
                            try {
                                for (; d > c; c++) (b = this[c] || {}), 1 === b.nodeType && (fa.cleanData(k(b, !1)), (b.innerHTML = a));
                                b = 0;
                            } catch (e) {}
                        }
                        b && this.empty().append(a);
                    },
                    null,
                    a,
                    arguments.length
                );
            },
            replaceWith: function () {
                var a = [];
                return w(
                    this,
                    arguments,
                    function (b) {
                        var c = this.parentNode;
                        fa.inArray(this, a) < 0 && (fa.cleanData(k(this)), c && c.replaceChild(b, this));
                    },
                    a
                );
            },
        }),
        fa.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
            fa.fn[a] = function (a) {
                for (var c, d = [], e = fa(a), f = e.length - 1, g = 0; f >= g; g++) (c = g === f ? this : this.clone(!0)), fa(e[g])[b](c), $.apply(d, c.get());
                return this.pushStack(d);
            };
        });
    var Ua,
        Va = { HTML: "block", BODY: "block" },
        Wa = /^margin/,
        Xa = new RegExp("^(" + Da + ")(?!px)[a-z%]+$", "i"),
        Ya = function (b) {
            var c = b.ownerDocument.defaultView;
            return (c && c.opener) || (c = a), c.getComputedStyle(b);
        },
        Za = function (a, b, c, d) {
            var e,
                f,
                g = {};
            for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e;
        },
        $a = X.documentElement;
    !(function () {
        function b() {
            (h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"), (h.innerHTML = ""), $a.appendChild(g);
            var b = a.getComputedStyle(h);
            (c = "1%" !== b.top), (f = "2px" === b.marginLeft), (d = "4px" === b.width), (h.style.marginRight = "50%"), (e = "4px" === b.marginRight), $a.removeChild(g);
        }
        var c,
            d,
            e,
            f,
            g = X.createElement("div"),
            h = X.createElement("div");
        h.style &&
            ((h.style.backgroundClip = "content-box"),
            (h.cloneNode(!0).style.backgroundClip = ""),
            (da.clearCloneStyle = "content-box" === h.style.backgroundClip),
            (g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
            g.appendChild(h),
            fa.extend(da, {
                pixelPosition: function () {
                    return b(), c;
                },
                boxSizingReliable: function () {
                    return null == d && b(), d;
                },
                pixelMarginRight: function () {
                    return null == d && b(), e;
                },
                reliableMarginLeft: function () {
                    return null == d && b(), f;
                },
                reliableMarginRight: function () {
                    var b,
                        c = h.appendChild(X.createElement("div"));
                    return (
                        (c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                        (c.style.marginRight = c.style.width = "0"),
                        (h.style.width = "1px"),
                        $a.appendChild(g),
                        (b = !parseFloat(a.getComputedStyle(c).marginRight)),
                        $a.removeChild(g),
                        h.removeChild(c),
                        b
                    );
                },
            }));
    })();
    var _a = /^(none|table(?!-c[ea]).+)/,
        ab = { position: "absolute", visibility: "hidden", display: "block" },
        bb = { letterSpacing: "0", fontWeight: "400" },
        cb = ["Webkit", "O", "Moz", "ms"],
        db = X.createElement("div").style;
    fa.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = A(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                },
            },
        },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { float: "cssFloat" },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                    f,
                    g,
                    h = fa.camelCase(b),
                    i = a.style;
                return (
                    (b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h)),
                    (g = fa.cssHooks[b] || fa.cssHooks[h]),
                    void 0 === c
                        ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
                            ? e
                            : i[b]
                        : ((f = typeof c),
                          "string" === f && (e = Ea.exec(c)) && e[1] && ((c = j(a, b, e)), (f = "number")),
                          void (
                              null != c &&
                              c === c &&
                              ("number" === f && (c += (e && e[3]) || (fa.cssNumber[h] ? "" : "px")),
                              da.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                              (g && "set" in g && void 0 === (c = g.set(a, c, d))) || (i[b] = c))
                          ))
                );
            }
        },
        css: function (a, b, c, d) {
            var e,
                f,
                g,
                h = fa.camelCase(b);
            return (
                (b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h)),
                (g = fa.cssHooks[b] || fa.cssHooks[h]),
                g && "get" in g && (e = g.get(a, !0, c)),
                void 0 === e && (e = A(a, b, d)),
                "normal" === e && b in bb && (e = bb[b]),
                "" === c || c ? ((f = parseFloat(e)), c === !0 || isFinite(f) ? f || 0 : e) : e
            );
        },
    }),
        fa.each(["height", "width"], function (a, b) {
            fa.cssHooks[b] = {
                get: function (a, c, d) {
                    return c
                        ? _a.test(fa.css(a, "display")) && 0 === a.offsetWidth
                            ? Za(a, ab, function () {
                                  return F(a, b, d);
                              })
                            : F(a, b, d)
                        : void 0;
                },
                set: function (a, c, d) {
                    var e,
                        f = d && Ya(a),
                        g = d && E(a, b, d, "border-box" === fa.css(a, "boxSizing", !1, f), f);
                    return g && (e = Ea.exec(c)) && "px" !== (e[3] || "px") && ((a.style[b] = c), (c = fa.css(a, b))), D(a, c, g);
                },
            };
        }),
        (fa.cssHooks.marginLeft = B(da.reliableMarginLeft, function (a, b) {
            return b
                ? (parseFloat(A(a, "marginLeft")) ||
                      a.getBoundingClientRect().left -
                          Za(a, { marginLeft: 0 }, function () {
                              return a.getBoundingClientRect().left;
                          })) + "px"
                : void 0;
        })),
        (fa.cssHooks.marginRight = B(da.reliableMarginRight, function (a, b) {
            return b ? Za(a, { display: "inline-block" }, A, [a, "marginRight"]) : void 0;
        })),
        fa.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
            (fa.cssHooks[a + b] = {
                expand: function (c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Fa[d] + b] = f[d] || f[d - 2] || f[0];
                    return e;
                },
            }),
                Wa.test(a) || (fa.cssHooks[a + b].set = D);
        }),
        fa.fn.extend({
            css: function (a, b) {
                return xa(
                    this,
                    function (a, b, c) {
                        var d,
                            e,
                            f = {},
                            g = 0;
                        if (fa.isArray(b)) {
                            for (d = Ya(a), e = b.length; e > g; g++) f[b[g]] = fa.css(a, b[g], !1, d);
                            return f;
                        }
                        return void 0 !== c ? fa.style(a, b, c) : fa.css(a, b);
                    },
                    a,
                    b,
                    arguments.length > 1
                );
            },
            show: function () {
                return G(this, !0);
            },
            hide: function () {
                return G(this);
            },
            toggle: function (a) {
                return "boolean" == typeof a
                    ? a
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                          Ga(this) ? fa(this).show() : fa(this).hide();
                      });
            },
        }),
        (fa.Tween = H),
        (H.prototype = {
            constructor: H,
            init: function (a, b, c, d, e, f) {
                (this.elem = a), (this.prop = c), (this.easing = e || fa.easing._default), (this.options = b), (this.start = this.now = this.cur()), (this.end = d), (this.unit = f || (fa.cssNumber[c] ? "" : "px"));
            },
            cur: function () {
                var a = H.propHooks[this.prop];
                return a && a.get ? a.get(this) : H.propHooks._default.get(this);
            },
            run: function (a) {
                var b,
                    c = H.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = b = fa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration)) : (this.pos = b = a),
                    (this.now = (this.end - this.start) * b + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    c && c.set ? c.set(this) : H.propHooks._default.set(this),
                    this
                );
            },
        }),
        (H.prototype.init.prototype = H.prototype),
        (H.propHooks = {
            _default: {
                get: function (a) {
                    var b;
                    return 1 !== a.elem.nodeType || (null != a.elem[a.prop] && null == a.elem.style[a.prop]) ? a.elem[a.prop] : ((b = fa.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
                },
                set: function (a) {
                    fa.fx.step[a.prop] ? fa.fx.step[a.prop](a) : 1 !== a.elem.nodeType || (null == a.elem.style[fa.cssProps[a.prop]] && !fa.cssHooks[a.prop]) ? (a.elem[a.prop] = a.now) : fa.style(a.elem, a.prop, a.now + a.unit);
                },
            },
        }),
        (H.propHooks.scrollTop = H.propHooks.scrollLeft = {
            set: function (a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
            },
        }),
        (fa.easing = {
            linear: function (a) {
                return a;
            },
            swing: function (a) {
                return 0.5 - Math.cos(a * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (fa.fx = H.prototype.init),
        (fa.fx.step = {});
    var eb,
        fb,
        gb = /^(?:toggle|show|hide)$/,
        hb = /queueHooks$/;
    (fa.Animation = fa.extend(N, {
        tweeners: {
            "*": [
                function (a, b) {
                    var c = this.createTween(a, b);
                    return j(c.elem, a, Ea.exec(b), c), c;
                },
            ],
        },
        tweener: function (a, b) {
            fa.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(va));
            for (var c, d = 0, e = a.length; e > d; d++) (c = a[d]), (N.tweeners[c] = N.tweeners[c] || []), N.tweeners[c].unshift(b);
        },
        prefilters: [L],
        prefilter: function (a, b) {
            b ? N.prefilters.unshift(a) : N.prefilters.push(a);
        },
    })),
        (fa.speed = function (a, b, c) {
            var d = a && "object" == typeof a ? fa.extend({}, a) : { complete: c || (!c && b) || (fa.isFunction(a) && a), duration: a, easing: (c && b) || (b && !fa.isFunction(b) && b) };
            return (
                (d.duration = fa.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fa.fx.speeds ? fa.fx.speeds[d.duration] : fa.fx.speeds._default),
                (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
                (d.old = d.complete),
                (d.complete = function () {
                    fa.isFunction(d.old) && d.old.call(this), d.queue && fa.dequeue(this, d.queue);
                }),
                d
            );
        }),
        fa.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(Ga).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
            },
            animate: function (a, b, c, d) {
                var e = fa.isEmptyObject(a),
                    f = fa.speed(b, c, d),
                    g = function () {
                        var b = N(this, fa.extend({}, a), f);
                        (e || za.get(this, "finish")) && b.stop(!0);
                    };
                return (g.finish = g), e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
            },
            stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c);
                };
                return (
                    "string" != typeof a && ((c = b), (b = a), (a = void 0)),
                    b && a !== !1 && this.queue(a || "fx", []),
                    this.each(function () {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = fa.timers,
                            g = za.get(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else for (e in g) g[e] && g[e].stop && hb.test(e) && d(g[e]);
                        for (e = f.length; e--; ) f[e].elem !== this || (null != a && f[e].queue !== a) || (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
                        (!b && c) || fa.dequeue(this, a);
                    })
                );
            },
            finish: function (a) {
                return (
                    a !== !1 && (a = a || "fx"),
                    this.each(function () {
                        var b,
                            c = za.get(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = fa.timers,
                            g = d ? d.length : 0;
                        for (c.finish = !0, fa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish;
                    })
                );
            },
        }),
        fa.each(["toggle", "show", "hide"], function (a, b) {
            var c = fa.fn[b];
            fa.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(J(b, !0), a, d, e);
            };
        }),
        fa.each({ slideDown: J("show"), slideUp: J("hide"), slideToggle: J("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
            fa.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d);
            };
        }),
        (fa.timers = []),
        (fa.fx.tick = function () {
            var a,
                b = 0,
                c = fa.timers;
            for (eb = fa.now(); b < c.length; b++) (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
            c.length || fa.fx.stop(), (eb = void 0);
        }),
        (fa.fx.timer = function (a) {
            fa.timers.push(a), a() ? fa.fx.start() : fa.timers.pop();
        }),
        (fa.fx.interval = 13),
        (fa.fx.start = function () {
            fb || (fb = a.setInterval(fa.fx.tick, fa.fx.interval));
        }),
        (fa.fx.stop = function () {
            a.clearInterval(fb), (fb = null);
        }),
        (fa.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (fa.fn.delay = function (b, c) {
            return (
                (b = fa.fx ? fa.fx.speeds[b] || b : b),
                (c = c || "fx"),
                this.queue(c, function (c, d) {
                    var e = a.setTimeout(c, b);
                    d.stop = function () {
                        a.clearTimeout(e);
                    };
                })
            );
        }),
        (function () {
            var a = X.createElement("input"),
                b = X.createElement("select"),
                c = b.appendChild(X.createElement("option"));
            (a.type = "checkbox"),
                (da.checkOn = "" !== a.value),
                (da.optSelected = c.selected),
                (b.disabled = !0),
                (da.optDisabled = !c.disabled),
                (a = X.createElement("input")),
                (a.value = "t"),
                (a.type = "radio"),
                (da.radioValue = "t" === a.value);
        })();
    var ib,
        jb = fa.expr.attrHandle;
    fa.fn.extend({
        attr: function (a, b) {
            return xa(this, fa.attr, a, b, arguments.length > 1);
        },
        removeAttr: function (a) {
            return this.each(function () {
                fa.removeAttr(this, a);
            });
        },
    }),
        fa.extend({
            attr: function (a, b, c) {
                var d,
                    e,
                    f = a.nodeType;
                return 3 !== f && 8 !== f && 2 !== f
                    ? "undefined" == typeof a.getAttribute
                        ? fa.prop(a, b, c)
                        : ((1 === f && fa.isXMLDoc(a)) || ((b = b.toLowerCase()), (e = fa.attrHooks[b] || (fa.expr.match.bool.test(b) ? ib : void 0))),
                          void 0 !== c
                              ? null === c
                                  ? void fa.removeAttr(a, b)
                                  : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                                  ? d
                                  : (a.setAttribute(b, c + ""), c)
                              : e && "get" in e && null !== (d = e.get(a, b))
                              ? d
                              : ((d = fa.find.attr(a, b)), null == d ? void 0 : d))
                    : void 0;
            },
            attrHooks: {
                type: {
                    set: function (a, b) {
                        if (!da.radioValue && "radio" === b && fa.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b;
                        }
                    },
                },
            },
            removeAttr: function (a, b) {
                var c,
                    d,
                    e = 0,
                    f = b && b.match(va);
                if (f && 1 === a.nodeType) for (; (c = f[e++]); ) (d = fa.propFix[c] || c), fa.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
            },
        }),
        (ib = {
            set: function (a, b, c) {
                return b === !1 ? fa.removeAttr(a, c) : a.setAttribute(c, c), c;
            },
        }),
        fa.each(fa.expr.match.bool.source.match(/\w+/g), function (a, b) {
            var c = jb[b] || fa.find.attr;
            jb[b] = function (a, b, d) {
                var e, f;
                return d || ((f = jb[b]), (jb[b] = e), (e = null != c(a, b, d) ? b.toLowerCase() : null), (jb[b] = f)), e;
            };
        });
    var kb = /^(?:input|select|textarea|button)$/i,
        lb = /^(?:a|area)$/i;
    fa.fn.extend({
        prop: function (a, b) {
            return xa(this, fa.prop, a, b, arguments.length > 1);
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[fa.propFix[a] || a];
            });
        },
    }),
        fa.extend({
            prop: function (a, b, c) {
                var d,
                    e,
                    f = a.nodeType;
                return 3 !== f && 8 !== f && 2 !== f
                    ? ((1 === f && fa.isXMLDoc(a)) || ((b = fa.propFix[b] || b), (e = fa.propHooks[b])),
                      void 0 !== c ? (e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a[b] = c)) : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b])
                    : void 0;
            },
            propHooks: {
                tabIndex: {
                    get: function (a) {
                        var b = fa.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : kb.test(a.nodeName) || (lb.test(a.nodeName) && a.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        da.optSelected ||
            (fa.propHooks.selected = {
                get: function (a) {
                    var b = a.parentNode;
                    return b && b.parentNode && b.parentNode.selectedIndex, null;
                },
                set: function (a) {
                    var b = a.parentNode;
                    b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
                },
            }),
        fa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            fa.propFix[this.toLowerCase()] = this;
        });
    var mb = /[\t\r\n\f]/g;
    fa.fn.extend({
        addClass: function (a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;
            if (fa.isFunction(a))
                return this.each(function (b) {
                    fa(this).addClass(a.call(this, b, O(this)));
                });
            if ("string" == typeof a && a)
                for (b = a.match(va) || []; (c = this[i++]); )
                    if (((e = O(c)), (d = 1 === c.nodeType && (" " + e + " ").replace(mb, " ")))) {
                        for (g = 0; (f = b[g++]); ) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        (h = fa.trim(d)), e !== h && c.setAttribute("class", h);
                    }
            return this;
        },
        removeClass: function (a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;
            if (fa.isFunction(a))
                return this.each(function (b) {
                    fa(this).removeClass(a.call(this, b, O(this)));
                });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a)
                for (b = a.match(va) || []; (c = this[i++]); )
                    if (((e = O(c)), (d = 1 === c.nodeType && (" " + e + " ").replace(mb, " ")))) {
                        for (g = 0; (f = b[g++]); ) for (; d.indexOf(" " + f + " ") > -1; ) d = d.replace(" " + f + " ", " ");
                        (h = fa.trim(d)), e !== h && c.setAttribute("class", h);
                    }
            return this;
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c
                ? b
                    ? this.addClass(a)
                    : this.removeClass(a)
                : fa.isFunction(a)
                ? this.each(function (c) {
                      fa(this).toggleClass(a.call(this, c, O(this), b), b);
                  })
                : this.each(function () {
                      var b, d, e, f;
                      if ("string" === c) for (d = 0, e = fa(this), f = a.match(va) || []; (b = f[d++]); ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                      else (void 0 !== a && "boolean" !== c) || ((b = O(this)), b && za.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : za.get(this, "__className__") || ""));
                  });
        },
        hasClass: function (a) {
            var b,
                c,
                d = 0;
            for (b = " " + a + " "; (c = this[d++]); ) if (1 === c.nodeType && (" " + O(c) + " ").replace(mb, " ").indexOf(b) > -1) return !0;
            return !1;
        },
    });
    var nb = /\r/g,
        ob = /[\x20\t\r\n\f]+/g;
    fa.fn.extend({
        val: function (a) {
            var b,
                c,
                d,
                e = this[0];
            return arguments.length
                ? ((d = fa.isFunction(a)),
                  this.each(function (c) {
                      var e;
                      1 === this.nodeType &&
                          ((e = d ? a.call(this, c, fa(this).val()) : a),
                          null == e
                              ? (e = "")
                              : "number" == typeof e
                              ? (e += "")
                              : fa.isArray(e) &&
                                (e = fa.map(e, function (a) {
                                    return null == a ? "" : a + "";
                                })),
                          (b = fa.valHooks[this.type] || fa.valHooks[this.nodeName.toLowerCase()]),
                          (b && "set" in b && void 0 !== b.set(this, e, "value")) || (this.value = e));
                  }))
                : e
                ? ((b = fa.valHooks[e.type] || fa.valHooks[e.nodeName.toLowerCase()]), b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : ((c = e.value), "string" == typeof c ? c.replace(nb, "") : null == c ? "" : c))
                : void 0;
        },
    }),
        fa.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = fa.find.attr(a, "value");
                        return null != b ? b : fa.trim(fa.text(a)).replace(ob, " ");
                    },
                },
                select: {
                    get: function (a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (((c = d[i]), (c.selected || i === e) && (da.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !fa.nodeName(c.parentNode, "optgroup")))) {
                                if (((b = fa(c).val()), f)) return b;
                                g.push(b);
                            }
                        return g;
                    },
                    set: function (a, b) {
                        for (var c, d, e = a.options, f = fa.makeArray(b), g = e.length; g--; ) (d = e[g]), (d.selected = fa.inArray(fa.valHooks.option.get(d), f) > -1) && (c = !0);
                        return c || (a.selectedIndex = -1), f;
                    },
                },
            },
        }),
        fa.each(["radio", "checkbox"], function () {
            (fa.valHooks[this] = {
                set: function (a, b) {
                    return fa.isArray(b) ? (a.checked = fa.inArray(fa(a).val(), b) > -1) : void 0;
                },
            }),
                da.checkOn ||
                    (fa.valHooks[this].get = function (a) {
                        return null === a.getAttribute("value") ? "on" : a.value;
                    });
        });
    var pb = /^(?:focusinfocus|focusoutblur)$/;
    fa.extend(fa.event, {
        trigger: function (b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m = [d || X],
                n = ca.call(b, "type") ? b.type : b,
                o = ca.call(b, "namespace") ? b.namespace.split(".") : [];
            if (
                ((g = h = d = d || X),
                3 !== d.nodeType &&
                    8 !== d.nodeType &&
                    !pb.test(n + fa.event.triggered) &&
                    (n.indexOf(".") > -1 && ((o = n.split(".")), (n = o.shift()), o.sort()),
                    (j = n.indexOf(":") < 0 && "on" + n),
                    (b = b[fa.expando] ? b : new fa.Event(n, "object" == typeof b && b)),
                    (b.isTrigger = e ? 2 : 3),
                    (b.namespace = o.join(".")),
                    (b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (b.result = void 0),
                    b.target || (b.target = d),
                    (c = null == c ? [b] : fa.makeArray(c, [b])),
                    (l = fa.event.special[n] || {}),
                    e || !l.trigger || l.trigger.apply(d, c) !== !1))
            ) {
                if (!e && !l.noBubble && !fa.isWindow(d)) {
                    for (i = l.delegateType || n, pb.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), (h = g);
                    h === (d.ownerDocument || X) && m.push(h.defaultView || h.parentWindow || a);
                }
                for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); )
                    (b.type = f > 1 ? i : l.bindType || n),
                        (k = (za.get(g, "events") || {})[b.type] && za.get(g, "handle")),
                        k && k.apply(g, c),
                        (k = j && g[j]),
                        k && k.apply && ya(g) && ((b.result = k.apply(g, c)), b.result === !1 && b.preventDefault());
                return (
                    (b.type = n),
                    e ||
                        b.isDefaultPrevented() ||
                        (l._default && l._default.apply(m.pop(), c) !== !1) ||
                        !ya(d) ||
                        (j && fa.isFunction(d[n]) && !fa.isWindow(d) && ((h = d[j]), h && (d[j] = null), (fa.event.triggered = n), d[n](), (fa.event.triggered = void 0), h && (d[j] = h))),
                    b.result
                );
            }
        },
        simulate: function (a, b, c) {
            var d = fa.extend(new fa.Event(), c, { type: a, isSimulated: !0 });
            fa.event.trigger(d, null, b);
        },
    }),
        fa.fn.extend({
            trigger: function (a, b) {
                return this.each(function () {
                    fa.event.trigger(a, b, this);
                });
            },
            triggerHandler: function (a, b) {
                var c = this[0];
                return c ? fa.event.trigger(a, b, c, !0) : void 0;
            },
        }),
        fa.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (
            a,
            b
        ) {
            fa.fn[b] = function (a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
            };
        }),
        fa.fn.extend({
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a);
            },
        }),
        (da.focusin = "onfocusin" in a),
        da.focusin ||
            fa.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
                var c = function (a) {
                    fa.event.simulate(b, a.target, fa.event.fix(a));
                };
                fa.event.special[b] = {
                    setup: function () {
                        var d = this.ownerDocument || this,
                            e = za.access(d, b);
                        e || d.addEventListener(a, c, !0), za.access(d, b, (e || 0) + 1);
                    },
                    teardown: function () {
                        var d = this.ownerDocument || this,
                            e = za.access(d, b) - 1;
                        e ? za.access(d, b, e) : (d.removeEventListener(a, c, !0), za.remove(d, b));
                    },
                };
            });
    var qb = a.location,
        rb = fa.now(),
        sb = /\?/;
    (fa.parseJSON = function (a) {
        return JSON.parse(a + "");
    }),
        (fa.parseXML = function (b) {
            var c;
            if (!b || "string" != typeof b) return null;
            try {
                c = new a.DOMParser().parseFromString(b, "text/xml");
            } catch (d) {
                c = void 0;
            }
            return (c && !c.getElementsByTagName("parsererror").length) || fa.error("Invalid XML: " + b), c;
        });
    var tb = /#.*$/,
        ub = /([?&])_=[^&]*/,
        vb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        wb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        xb = /^(?:GET|HEAD)$/,
        yb = /^\/\//,
        zb = {},
        Ab = {},
        Bb = "*/".concat("*"),
        Cb = X.createElement("a");
    (Cb.href = qb.href),
        fa.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: qb.href,
                type: "GET",
                isLocal: wb.test(qb.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": Bb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": fa.parseJSON, "text xml": fa.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (a, b) {
                return b ? R(R(a, fa.ajaxSettings), b) : R(fa.ajaxSettings, a);
            },
            ajaxPrefilter: P(zb),
            ajaxTransport: P(Ab),
            ajax: function (b, c) {
                function d(b, c, d, h) {
                    var j,
                        l,
                        s,
                        t,
                        v,
                        x = c;
                    2 !== u &&
                        ((u = 2),
                        i && a.clearTimeout(i),
                        (e = void 0),
                        (g = h || ""),
                        (w.readyState = b > 0 ? 4 : 0),
                        (j = (b >= 200 && 300 > b) || 304 === b),
                        d && (t = S(m, w, d)),
                        (t = T(m, t, w, j)),
                        j
                            ? (m.ifModified && ((v = w.getResponseHeader("Last-Modified")), v && (fa.lastModified[f] = v), (v = w.getResponseHeader("etag")), v && (fa.etag[f] = v)),
                              204 === b || "HEAD" === m.type ? (x = "nocontent") : 304 === b ? (x = "notmodified") : ((x = t.state), (l = t.data), (s = t.error), (j = !s)))
                            : ((s = x), (!b && x) || ((x = "error"), 0 > b && (b = 0))),
                        (w.status = b),
                        (w.statusText = (c || x) + ""),
                        j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]),
                        w.statusCode(r),
                        (r = void 0),
                        k && o.trigger(j ? "ajaxSuccess" : "ajaxError", [w, m, j ? l : s]),
                        q.fireWith(n, [w, x]),
                        k && (o.trigger("ajaxComplete", [w, m]), --fa.active || fa.event.trigger("ajaxStop")));
                }
                "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
                var e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m = fa.ajaxSetup({}, c),
                    n = m.context || m,
                    o = m.context && (n.nodeType || n.jquery) ? fa(n) : fa.event,
                    p = fa.Deferred(),
                    q = fa.Callbacks("once memory"),
                    r = m.statusCode || {},
                    s = {},
                    t = {},
                    u = 0,
                    v = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function (a) {
                            var b;
                            if (2 === u) {
                                if (!h) for (h = {}; (b = vb.exec(g)); ) h[b[1].toLowerCase()] = b[2];
                                b = h[a.toLowerCase()];
                            }
                            return null == b ? null : b;
                        },
                        getAllResponseHeaders: function () {
                            return 2 === u ? g : null;
                        },
                        setRequestHeader: function (a, b) {
                            var c = a.toLowerCase();
                            return u || ((a = t[c] = t[c] || a), (s[a] = b)), this;
                        },
                        overrideMimeType: function (a) {
                            return u || (m.mimeType = a), this;
                        },
                        statusCode: function (a) {
                            var b;
                            if (a)
                                if (2 > u) for (b in a) r[b] = [r[b], a[b]];
                                else w.always(a[w.status]);
                            return this;
                        },
                        abort: function (a) {
                            var b = a || v;
                            return e && e.abort(b), d(0, b), this;
                        },
                    };
                if (
                    ((p.promise(w).complete = q.add),
                    (w.success = w.done),
                    (w.error = w.fail),
                    (m.url = ((b || m.url || qb.href) + "").replace(tb, "").replace(yb, qb.protocol + "//")),
                    (m.type = c.method || c.type || m.method || m.type),
                    (m.dataTypes = fa
                        .trim(m.dataType || "*")
                        .toLowerCase()
                        .match(va) || [""]),
                    null == m.crossDomain)
                ) {
                    j = X.createElement("a");
                    try {
                        (j.href = m.url), (j.href = j.href), (m.crossDomain = Cb.protocol + "//" + Cb.host != j.protocol + "//" + j.host);
                    } catch (x) {
                        m.crossDomain = !0;
                    }
                }
                if ((m.data && m.processData && "string" != typeof m.data && (m.data = fa.param(m.data, m.traditional)), Q(zb, m, c, w), 2 === u)) return w;
                (k = fa.event && m.global),
                    k && 0 === fa.active++ && fa.event.trigger("ajaxStart"),
                    (m.type = m.type.toUpperCase()),
                    (m.hasContent = !xb.test(m.type)),
                    (f = m.url),
                    m.hasContent || (m.data && ((f = m.url += (sb.test(f) ? "&" : "?") + m.data), delete m.data), m.cache === !1 && (m.url = ub.test(f) ? f.replace(ub, "$1_=" + rb++) : f + (sb.test(f) ? "&" : "?") + "_=" + rb++)),
                    m.ifModified && (fa.lastModified[f] && w.setRequestHeader("If-Modified-Since", fa.lastModified[f]), fa.etag[f] && w.setRequestHeader("If-None-Match", fa.etag[f])),
                    ((m.data && m.hasContent && m.contentType !== !1) || c.contentType) && w.setRequestHeader("Content-Type", m.contentType),
                    w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Bb + "; q=0.01" : "") : m.accepts["*"]);
                for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
                if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
                v = "abort";
                for (l in { success: 1, error: 1, complete: 1 }) w[l](m[l]);
                if ((e = Q(Ab, m, c, w))) {
                    if (((w.readyState = 1), k && o.trigger("ajaxSend", [w, m]), 2 === u)) return w;
                    m.async &&
                        m.timeout > 0 &&
                        (i = a.setTimeout(function () {
                            w.abort("timeout");
                        }, m.timeout));
                    try {
                        (u = 1), e.send(s, d);
                    } catch (x) {
                        if (!(2 > u)) throw x;
                        d(-1, x);
                    }
                } else d(-1, "No Transport");
                return w;
            },
            getJSON: function (a, b, c) {
                return fa.get(a, b, c, "json");
            },
            getScript: function (a, b) {
                return fa.get(a, void 0, b, "script");
            },
        }),
        fa.each(["get", "post"], function (a, b) {
            fa[b] = function (a, c, d, e) {
                return fa.isFunction(c) && ((e = e || d), (d = c), (c = void 0)), fa.ajax(fa.extend({ url: a, type: b, dataType: e, data: c, success: d }, fa.isPlainObject(a) && a));
            };
        }),
        (fa._evalUrl = function (a) {
            return fa.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
        }),
        fa.fn.extend({
            wrapAll: function (a) {
                var b;
                return fa.isFunction(a)
                    ? this.each(function (b) {
                          fa(this).wrapAll(a.call(this, b));
                      })
                    : (this[0] &&
                          ((b = fa(a, this[0].ownerDocument).eq(0).clone(!0)),
                          this[0].parentNode && b.insertBefore(this[0]),
                          b
                              .map(function () {
                                  for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                                  return a;
                              })
                              .append(this)),
                      this);
            },
            wrapInner: function (a) {
                return fa.isFunction(a)
                    ? this.each(function (b) {
                          fa(this).wrapInner(a.call(this, b));
                      })
                    : this.each(function () {
                          var b = fa(this),
                              c = b.contents();
                          c.length ? c.wrapAll(a) : b.append(a);
                      });
            },
            wrap: function (a) {
                var b = fa.isFunction(a);
                return this.each(function (c) {
                    fa(this).wrapAll(b ? a.call(this, c) : a);
                });
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        fa.nodeName(this, "body") || fa(this).replaceWith(this.childNodes);
                    })
                    .end();
            },
        }),
        (fa.expr.filters.hidden = function (a) {
            return !fa.expr.filters.visible(a);
        }),
        (fa.expr.filters.visible = function (a) {
            return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0;
        });
    var Db = /%20/g,
        Eb = /\[\]$/,
        Fb = /\r?\n/g,
        Gb = /^(?:submit|button|image|reset|file)$/i,
        Hb = /^(?:input|select|textarea|keygen)/i;
    (fa.param = function (a, b) {
        var c,
            d = [],
            e = function (a, b) {
                (b = fa.isFunction(b) ? b() : null == b ? "" : b), (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
            };
        if ((void 0 === b && (b = fa.ajaxSettings && fa.ajaxSettings.traditional), fa.isArray(a) || (a.jquery && !fa.isPlainObject(a))))
            fa.each(a, function () {
                e(this.name, this.value);
            });
        else for (c in a) U(c, a[c], b, e);
        return d.join("&").replace(Db, "+");
    }),
        fa.fn.extend({
            serialize: function () {
                return fa.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var a = fa.prop(this, "elements");
                    return a ? fa.makeArray(a) : this;
                })
                    .filter(function () {
                        var a = this.type;
                        return this.name && !fa(this).is(":disabled") && Hb.test(this.nodeName) && !Gb.test(a) && (this.checked || !Ha.test(a));
                    })
                    .map(function (a, b) {
                        var c = fa(this).val();
                        return null == c
                            ? null
                            : fa.isArray(c)
                            ? fa.map(c, function (a) {
                                  return { name: b.name, value: a.replace(Fb, "\r\n") };
                              })
                            : { name: b.name, value: c.replace(Fb, "\r\n") };
                    })
                    .get();
            },
        }),
        (fa.ajaxSettings.xhr = function () {
            try {
                return new a.XMLHttpRequest();
            } catch (b) {}
        });
    var Ib = { 0: 200, 1223: 204 },
        Jb = fa.ajaxSettings.xhr();
    (da.cors = !!Jb && "withCredentials" in Jb),
        (da.ajax = Jb = !!Jb),
        fa.ajaxTransport(function (b) {
            var c, d;
            return da.cors || (Jb && !b.crossDomain)
                ? {
                      send: function (e, f) {
                          var g,
                              h = b.xhr();
                          if ((h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)) for (g in b.xhrFields) h[g] = b.xhrFields[g];
                          b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                          for (g in e) h.setRequestHeader(g, e[g]);
                          (c = function (a) {
                              return function () {
                                  c &&
                                      ((c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null),
                                      "abort" === a
                                          ? h.abort()
                                          : "error" === a
                                          ? "number" != typeof h.status
                                              ? f(0, "error")
                                              : f(h.status, h.statusText)
                                          : f(
                                                Ib[h.status] || h.status,
                                                h.statusText,
                                                "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText },
                                                h.getAllResponseHeaders()
                                            ));
                              };
                          }),
                              (h.onload = c()),
                              (d = h.onerror = c("error")),
                              void 0 !== h.onabort
                                  ? (h.onabort = d)
                                  : (h.onreadystatechange = function () {
                                        4 === h.readyState &&
                                            a.setTimeout(function () {
                                                c && d();
                                            });
                                    }),
                              (c = c("abort"));
                          try {
                              h.send((b.hasContent && b.data) || null);
                          } catch (i) {
                              if (c) throw i;
                          }
                      },
                      abort: function () {
                          c && c();
                      },
                  }
                : void 0;
        }),
        fa.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (a) {
                    return fa.globalEval(a), a;
                },
            },
        }),
        fa.ajaxPrefilter("script", function (a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
        }),
        fa.ajaxTransport("script", function (a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function (d, e) {
                        (b = fa("<script>")
                            .prop({ charset: a.scriptCharset, src: a.url })
                            .on(
                                "load error",
                                (c = function (a) {
                                    b.remove(), (c = null), a && e("error" === a.type ? 404 : 200, a.type);
                                })
                            )),
                            X.head.appendChild(b[0]);
                    },
                    abort: function () {
                        c && c();
                    },
                };
            }
        });
    var Kb = [],
        Lb = /(=)\?(?=&|$)|\?\?/;
    fa.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = Kb.pop() || fa.expando + "_" + rb++;
            return (this[a] = !0), a;
        },
    }),
        fa.ajaxPrefilter("json jsonp", function (b, c, d) {
            var e,
                f,
                g,
                h = b.jsonp !== !1 && (Lb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Lb.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0]
                ? ((e = b.jsonpCallback = fa.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback),
                  h ? (b[h] = b[h].replace(Lb, "$1" + e)) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
                  (b.converters["script json"] = function () {
                      return g || fa.error(e + " was not called"), g[0];
                  }),
                  (b.dataTypes[0] = "json"),
                  (f = a[e]),
                  (a[e] = function () {
                      g = arguments;
                  }),
                  d.always(function () {
                      void 0 === f ? fa(a).removeProp(e) : (a[e] = f), b[e] && ((b.jsonpCallback = c.jsonpCallback), Kb.push(e)), g && fa.isFunction(f) && f(g[0]), (g = f = void 0);
                  }),
                  "script")
                : void 0;
        }),
        (fa.parseHTML = function (a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && ((c = b), (b = !1)), (b = b || X);
            var d = oa.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : ((d = m([a], b, e)), e && e.length && fa(e).remove(), fa.merge([], d.childNodes));
        });
    var Mb = fa.fn.load;
    (fa.fn.load = function (a, b, c) {
        if ("string" != typeof a && Mb) return Mb.apply(this, arguments);
        var d,
            e,
            f,
            g = this,
            h = a.indexOf(" ");
        return (
            h > -1 && ((d = fa.trim(a.slice(h))), (a = a.slice(0, h))),
            fa.isFunction(b) ? ((c = b), (b = void 0)) : b && "object" == typeof b && (e = "POST"),
            g.length > 0 &&
                fa
                    .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
                    .done(function (a) {
                        (f = arguments), g.html(d ? fa("<div>").append(fa.parseHTML(a)).find(d) : a);
                    })
                    .always(
                        c &&
                            function (a, b) {
                                g.each(function () {
                                    c.apply(this, f || [a.responseText, b, a]);
                                });
                            }
                    ),
            this
        );
    }),
        fa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
            fa.fn[b] = function (a) {
                return this.on(b, a);
            };
        }),
        (fa.expr.filters.animated = function (a) {
            return fa.grep(fa.timers, function (b) {
                return a === b.elem;
            }).length;
        }),
        (fa.offset = {
            setOffset: function (a, b, c) {
                var d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k = fa.css(a, "position"),
                    l = fa(a),
                    m = {};
                "static" === k && (a.style.position = "relative"),
                    (h = l.offset()),
                    (f = fa.css(a, "top")),
                    (i = fa.css(a, "left")),
                    (j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1),
                    j ? ((d = l.position()), (g = d.top), (e = d.left)) : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
                    fa.isFunction(b) && (b = b.call(a, c, fa.extend({}, h))),
                    null != b.top && (m.top = b.top - h.top + g),
                    null != b.left && (m.left = b.left - h.left + e),
                    "using" in b ? b.using.call(a, m) : l.css(m);
            },
        }),
        fa.fn.extend({
            offset: function (a) {
                if (arguments.length)
                    return void 0 === a
                        ? this
                        : this.each(function (b) {
                              fa.offset.setOffset(this, a, b);
                          });
                var b,
                    c,
                    d = this[0],
                    e = { top: 0, left: 0 },
                    f = d && d.ownerDocument;
                return f ? ((b = f.documentElement), fa.contains(b, d) ? ((e = d.getBoundingClientRect()), (c = V(f)), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e) : void 0;
            },
            position: function () {
                if (this[0]) {
                    var a,
                        b,
                        c = this[0],
                        d = { top: 0, left: 0 };
                    return (
                        "fixed" === fa.css(c, "position")
                            ? (b = c.getBoundingClientRect())
                            : ((a = this.offsetParent()), (b = this.offset()), fa.nodeName(a[0], "html") || (d = a.offset()), (d.top += fa.css(a[0], "borderTopWidth", !0)), (d.left += fa.css(a[0], "borderLeftWidth", !0))),
                        { top: b.top - d.top - fa.css(c, "marginTop", !0), left: b.left - d.left - fa.css(c, "marginLeft", !0) }
                    );
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var a = this.offsetParent; a && "static" === fa.css(a, "position"); ) a = a.offsetParent;
                    return a || $a;
                });
            },
        }),
        fa.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
            var c = "pageYOffset" === b;
            fa.fn[a] = function (d) {
                return xa(
                    this,
                    function (a, d, e) {
                        var f = V(a);
                        return void 0 === e ? (f ? f[b] : a[d]) : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : (a[d] = e));
                    },
                    a,
                    d,
                    arguments.length
                );
            };
        }),
        fa.each(["top", "left"], function (a, b) {
            fa.cssHooks[b] = B(da.pixelPosition, function (a, c) {
                return c ? ((c = A(a, b)), Xa.test(c) ? fa(a).position()[b] + "px" : c) : void 0;
            });
        }),
        fa.each({ Height: "height", Width: "width" }, function (a, b) {
            fa.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
                fa.fn[d] = function (d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return xa(
                        this,
                        function (b, c, d) {
                            var e;
                            return fa.isWindow(b)
                                ? b.document.documentElement["client" + a]
                                : 9 === b.nodeType
                                ? ((e = b.documentElement), Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a]))
                                : void 0 === d
                                ? fa.css(b, c, g)
                                : fa.style(b, c, d, g);
                        },
                        b,
                        f ? d : void 0,
                        f,
                        null
                    );
                };
            });
        }),
        fa.fn.extend({
            bind: function (a, b, c) {
                return this.on(a, null, b, c);
            },
            unbind: function (a, b) {
                return this.off(a, null, b);
            },
            delegate: function (a, b, c, d) {
                return this.on(b, a, c, d);
            },
            undelegate: function (a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
            },
            size: function () {
                return this.length;
            },
        }),
        (fa.fn.andSelf = fa.fn.addBack),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return fa;
            });
    var Nb = a.jQuery,
        Ob = a.$;
    return (
        (fa.noConflict = function (b) {
            return a.$ === fa && (a.$ = Ob), b && a.jQuery === fa && (a.jQuery = Nb), fa;
        }),
        b || (a.jQuery = a.$ = fa),
        fa
    );
}),
    (function (a, b) {
        if ("function" == typeof define && define.amd) define(["exports", "module"], b);
        else if ("undefined" != typeof exports && "undefined" != typeof module) b(exports, module);
        else {
            var c = { exports: {} };
            b(c.exports, c), (a.autosize = c.exports);
        }
    })(this, function (a, b) {
        "use strict";
        function c(a) {
            function b() {
                var b = window.getComputedStyle(a, null);
                "vertical" === b.resize ? (a.style.resize = "none") : "both" === b.resize && (a.style.resize = "horizontal"),
                    (i = "content-box" === b.boxSizing ? -(parseFloat(b.paddingTop) + parseFloat(b.paddingBottom)) : parseFloat(b.borderTopWidth) + parseFloat(b.borderBottomWidth)),
                    isNaN(i) && (i = 0),
                    h();
            }
            function c(b) {
                var c = a.style.width;
                (a.style.width = "0px"), a.offsetWidth, (a.style.width = c), (a.style.overflowY = b);
            }
            function d(a) {
                for (var b = []; a && a.parentNode && a.parentNode instanceof Element; ) a.parentNode.scrollTop && b.push({ node: a.parentNode, scrollTop: a.parentNode.scrollTop }), (a = a.parentNode);
                return b;
            }
            function e() {
                var b = a.style.height,
                    c = d(a),
                    e = document.documentElement && document.documentElement.scrollTop;
                a.style.height = "auto";
                var f = a.scrollHeight + i;
                return 0 === a.scrollHeight
                    ? void (a.style.height = b)
                    : ((a.style.height = f + "px"),
                      (j = a.clientWidth),
                      c.forEach(function (a) {
                          a.node.scrollTop = a.scrollTop;
                      }),
                      void (e && (document.documentElement.scrollTop = e)));
            }
            function h() {
                e();
                var b = Math.round(parseFloat(a.style.height)),
                    d = window.getComputedStyle(a, null),
                    f = Math.round(parseFloat(d.height));
                if (
                    (f !== b
                        ? "visible" !== d.overflowY && (c("visible"), e(), (f = Math.round(parseFloat(window.getComputedStyle(a, null).height))))
                        : "hidden" !== d.overflowY && (c("hidden"), e(), (f = Math.round(parseFloat(window.getComputedStyle(a, null).height)))),
                    k !== f)
                ) {
                    k = f;
                    var h = g("autosize:resized");
                    try {
                        a.dispatchEvent(h);
                    } catch (i) {}
                }
            }
            if (a && a.nodeName && "TEXTAREA" === a.nodeName && !f.has(a)) {
                var i = null,
                    j = a.clientWidth,
                    k = null,
                    l = function () {
                        a.clientWidth !== j && h();
                    },
                    m = function (b) {
                        window.removeEventListener("resize", l, !1),
                            a.removeEventListener("input", h, !1),
                            a.removeEventListener("keyup", h, !1),
                            a.removeEventListener("autosize:destroy", m, !1),
                            a.removeEventListener("autosize:update", h, !1),
                            Object.keys(b).forEach(function (c) {
                                a.style[c] = b[c];
                            }),
                            f["delete"](a);
                    }.bind(a, { height: a.style.height, resize: a.style.resize, overflowY: a.style.overflowY, overflowX: a.style.overflowX, wordWrap: a.style.wordWrap });
                a.addEventListener("autosize:destroy", m, !1),
                    "onpropertychange" in a && "oninput" in a && a.addEventListener("keyup", h, !1),
                    window.addEventListener("resize", l, !1),
                    a.addEventListener("input", h, !1),
                    a.addEventListener("autosize:update", h, !1),
                    (a.style.overflowX = "hidden"),
                    (a.style.wordWrap = "break-word"),
                    f.set(a, { destroy: m, update: h }),
                    b();
            }
        }
        function d(a) {
            var b = f.get(a);
            b && b.destroy();
        }
        function e(a) {
            var b = f.get(a);
            b && b.update();
        }
        var f =
                "function" == typeof Map
                    ? new Map()
                    : (function () {
                          var a = [],
                              b = [];
                          return {
                              has: function (b) {
                                  return a.indexOf(b) > -1;
                              },
                              get: function (c) {
                                  return b[a.indexOf(c)];
                              },
                              set: function (c, d) {
                                  -1 === a.indexOf(c) && (a.push(c), b.push(d));
                              },
                              delete: function (c) {
                                  var d = a.indexOf(c);
                                  d > -1 && (a.splice(d, 1), b.splice(d, 1));
                              },
                          };
                      })(),
            g = function (a) {
                return new Event(a, { bubbles: !0 });
            };
        try {
            new Event("test");
        } catch (h) {
            g = function (a) {
                var b = document.createEvent("Event");
                return b.initEvent(a, !0, !1), b;
            };
        }
        var i = null;
        "undefined" == typeof window || "function" != typeof window.getComputedStyle
            ? ((i = function (a) {
                  return a;
              }),
              (i.destroy = function (a) {
                  return a;
              }),
              (i.update = function (a) {
                  return a;
              }))
            : ((i = function (a, b) {
                  return (
                      a &&
                          Array.prototype.forEach.call(a.length ? a : [a], function (a) {
                              return c(a, b);
                          }),
                      a
                  );
              }),
              (i.destroy = function (a) {
                  return a && Array.prototype.forEach.call(a.length ? a : [a], d), a;
              }),
              (i.update = function (a) {
                  return a && Array.prototype.forEach.call(a.length ? a : [a], e), a;
              })),
            (b.exports = i);
    }),
    (function (a, b) {
        "use strict";
        "function" == typeof define && define.amd
            ? define(["jquery"], function (c) {
                  return b(c, a, a.document, a.Math);
              })
            : "object" == typeof exports && exports
            ? (module.exports = b(require("jquery"), a, a.document, a.Math))
            : b(jQuery, a, a.document, a.Math);
    })("undefined" != typeof window ? window : this, function (a, b, c, d, e) {
        "use strict";
        var f = "fullpage-wrapper",
            g = "." + f,
            h = "fp-scrollable",
            i = "." + h,
            j = "fp-responsive",
            k = "fp-notransition",
            l = "fp-destroyed",
            m = "fp-enabled",
            n = "fp-viewing",
            o = "active",
            p = "." + o,
            q = "fp-completely",
            r = "." + q,
            s = ".section",
            t = "fp-section",
            u = "." + t,
            v = u + p,
            w = u + ":first",
            x = u + ":last",
            y = "fp-tableCell",
            z = "." + y,
            A = "fp-auto-height",
            B = "fp-normal-scroll",
            C = "fp-nav",
            D = "#" + C,
            E = "fp-tooltip",
            F = "." + E,
            G = "fp-show-active",
            H = ".slide",
            I = "fp-slide",
            J = "." + I,
            K = J + p,
            L = "fp-slides",
            M = "." + L,
            N = "fp-slidesContainer",
            O = "." + N,
            P = "fp-table",
            Q = "fp-slidesNav",
            R = "." + Q,
            S = R + " a",
            T = "fp-controlArrow",
            U = "." + T,
            V = "fp-prev",
            W = "." + V,
            X = T + " " + V,
            Y = U + W,
            Z = "fp-next",
            $ = "." + Z,
            _ = T + " " + Z,
            aa = U + $,
            ba = a(b),
            ca = a(c),
            da = { scrollbars: !0, mouseWheel: !0, hideScrollbars: !1, fadeScrollbars: !1, disableMouse: !0, interactiveScrollbars: !0 };
        (a.fn.fullpage = function (h) {
            function i(b, c) {
                b || ac(0), fc("autoScrolling", b, c);
                var d = a(v);
                h.autoScrolling && !h.scrollBar
                    ? (ic.css({ overflow: "hidden", height: "100%" }), T(Hc.recordHistory, "internal"), sc.css({ "-ms-touch-action": "none", "touch-action": "none" }), d.length && ac(d.position().top))
                    : (ic.css({ overflow: "visible", height: "initial" }), T(!1, "internal"), sc.css({ "-ms-touch-action": "", "touch-action": "" }), d.length && ic.scrollTop(d.position().top));
            }
            function T(a, b) {
                fc("recordHistory", a, b);
            }
            function W(a, b) {
                fc("scrollingSpeed", a, b);
            }
            function Z(a, b) {
                fc("fitToSection", a, b);
            }
            function $(a) {
                h.lockAnchors = a;
            }
            function fa(a) {
                a ? (Ub(), Vb()) : (Tb(), Wb());
            }
            function ga(b, c) {
                "undefined" != typeof c
                    ? ((c = c.replace(/ /g, "").split(",")),
                      a.each(c, function (a, c) {
                          cc(b, c, "m");
                      }))
                    : b
                    ? (fa(!0), Xb())
                    : (fa(!1), Yb());
            }
            function ha(b, c) {
                "undefined" != typeof c
                    ? ((c = c.replace(/ /g, "").split(",")),
                      a.each(c, function (a, c) {
                          cc(b, c, "k");
                      }))
                    : (h.keyboardScrolling = b);
            }
            function ia() {
                var b = a(v).prev(u);
                b.length || (!h.loopTop && !h.continuousVertical) || (b = a(u).last()), b.length && Va(b, null, !0);
            }
            function ja() {
                var b = a(v).next(u);
                b.length || (!h.loopBottom && !h.continuousVertical) || (b = a(u).first()), b.length && Va(b, null, !1);
            }
            function ka(a, b) {
                W(0, "internal"), la(a, b), W(Hc.scrollingSpeed, "internal");
            }
            function la(a, b) {
                var c = Jb(a);
                "undefined" != typeof b ? Lb(a, b) : c.length > 0 && Va(c);
            }
            function ma(a) {
                Sa("right", a);
            }
            function na(a) {
                Sa("left", a);
            }
            function oa(b) {
                if (!sc.hasClass(l)) {
                    (uc = !0),
                        (tc = ba.height()),
                        a(u).each(function () {
                            var b = a(this).find(M),
                                c = a(this).find(J);
                            h.verticalCentered &&
                                a(this)
                                    .find(z)
                                    .css("height", Hb(a(this)) + "px"),
                                a(this).css("height", tc + "px"),
                                h.scrollOverflow &&
                                    (c.length
                                        ? c.each(function () {
                                              Fb(a(this));
                                          })
                                        : Fb(a(this))),
                                c.length > 1 && sb(b, b.find(K));
                        });
                    var c = a(v),
                        d = c.index(u);
                    d && ka(d + 1), (uc = !1), a.isFunction(h.afterResize) && b && h.afterResize.call(sc), a.isFunction(h.afterReBuild) && !b && h.afterReBuild.call(sc);
                }
            }
            function pa(b) {
                var c = jc.hasClass(j);
                b
                    ? c || (i(!1, "internal"), Z(!1, "internal"), a(D).hide(), jc.addClass(j), a.isFunction(h.afterResponsive) && h.afterResponsive.call(sc, b))
                    : c && (i(Hc.autoScrolling, "internal"), Z(Hc.autoScrolling, "internal"), a(D).show(), jc.removeClass(j), a.isFunction(h.afterResponsive) && h.afterResponsive.call(sc, b));
            }
            function qa() {
                h.css3 && (h.css3 = Sb()), (h.scrollBar = h.scrollBar || h.hybrid), sa(), ta(), ga(!0), i(h.autoScrolling, "internal"), xb(), Rb(), "complete" === c.readyState && fb(), ba.on("load", fb);
            }
            function ra() {
                ba.on("scroll", Ga).on("hashchange", gb).blur(nb).resize(wb),
                    ca
                        .keydown(hb)
                        .keyup(jb)
                        .on("click touchstart", D + " a", ob)
                        .on("click touchstart", S, pb)
                        .on("click", F, ib),
                    a(u).on("click touchstart", U, mb),
                    h.normalScrollElements &&
                        (ca.on("mouseenter", h.normalScrollElements, function () {
                            fa(!1);
                        }),
                        ca.on("mouseleave", h.normalScrollElements, function () {
                            fa(!0);
                        }));
            }
            function sa() {
                var b = sc.find(h.sectionSelector);
                h.anchors.length ||
                    (h.anchors = b
                        .filter("[data-anchor]")
                        .map(function () {
                            return a(this).data("anchor").toString();
                        })
                        .get()),
                    h.navigationTooltips.length ||
                        (h.navigationTooltips = b
                            .filter("[data-tooltip]")
                            .map(function () {
                                return a(this).data("tooltip").toString();
                            })
                            .get());
            }
            function ta() {
                sc.css({ height: "100%", position: "relative" }),
                    sc.addClass(f),
                    a("html").addClass(m),
                    (tc = ba.height()),
                    sc.removeClass(l),
                    xa(),
                    a(u).each(function (b) {
                        var c = a(this),
                            d = c.find(J),
                            e = d.length;
                        va(c, b), wa(c, b), e > 0 ? ua(c, d, e) : h.verticalCentered && Gb(c);
                    }),
                    h.fixedElements && h.css3 && a(h.fixedElements).appendTo(jc),
                    h.navigation && za(),
                    Ba(),
                    h.scrollOverflow ? ("complete" === c.readyState && Aa(), ba.on("load", Aa)) : Ea();
            }
            function ua(b, c, d) {
                var e = 100 * d,
                    f = 100 / d;
                c.wrapAll('<div class="' + N + '" />'),
                    c.parent().wrap('<div class="' + L + '" />'),
                    b.find(O).css("width", e + "%"),
                    d > 1 && (h.controlArrows && ya(b), h.slidesNavigation && Nb(b, d)),
                    c.each(function (b) {
                        a(this).css("width", f + "%"), h.verticalCentered && Gb(a(this));
                    });
                var g = b.find(K);
                g.length && (0 !== a(v).index(u) || (0 === a(v).index(u) && 0 !== g.index())) ? _b(g, "internal") : c.eq(0).addClass(o);
            }
            function va(b, c) {
                c || 0 !== a(v).length || b.addClass(o),
                    (oc = a(v)),
                    b.css("height", tc + 2 + "px"),
                    h.paddingTop && b.css("padding-top", h.paddingTop),
                    h.paddingBottom && b.css("padding-bottom", h.paddingBottom),
                    "undefined" != typeof h.sectionsColor[c] && b.css("background-color", h.sectionsColor[c]),
                    "undefined" != typeof h.anchors[c] && b.attr("data-anchor", h.anchors[c]);
            }
            function wa(b, c) {
                "undefined" != typeof h.anchors[c] && b.hasClass(o) && Cb(h.anchors[c], c), h.menu && h.css3 && a(h.menu).closest(g).length && a(h.menu).appendTo(jc);
            }
            function xa() {
                sc.find(h.sectionSelector).addClass(t), sc.find(h.slideSelector).addClass(I);
            }
            function ya(a) {
                a.find(M).after('<div class="' + X + '"></div><div class="' + _ + '"></div>'),
                    "#fff" != h.controlArrowColor &&
                        (a.find(aa).css("border-color", "transparent transparent transparent " + h.controlArrowColor), a.find(Y).css("border-color", "transparent " + h.controlArrowColor + " transparent transparent")),
                    h.loopHorizontal || a.find(Y).hide();
            }
            function za() {
                jc.append('<div id="' + C + '"><ul></ul></div>');
                var b = a(D);
                b.addClass(function () {
                    return h.showActiveTooltip ? G + " " + h.navigationPosition : h.navigationPosition;
                });
                for (var c = 0; c < a(u).length; c++) {
                    var d = "";
                    h.anchors.length && (d = h.anchors[c]);
                    var e = '<li><a href="#' + d + '"><span></span></a>',
                        f = h.navigationTooltips[c];
                    "undefined" != typeof f && "" !== f && (e += '<div class="' + E + " " + h.navigationPosition + '">' + f + "</div>"), (e += "</li>"), b.find("ul").append(e);
                }
                a(D).css("margin-top", "-" + a(D).height() / 2 + "px"), a(D).find("li").eq(a(v).index(u)).find("a").addClass(o);
            }
            function Aa() {
                a(u).each(function () {
                    var b = a(this).find(J);
                    b.length
                        ? b.each(function () {
                              Fb(a(this));
                          })
                        : Fb(a(this));
                }),
                    Ea();
            }
            function Ba() {
                sc.find('iframe[src*="youtube.com/embed/"]').each(function () {
                    Ca(a(this), "enablejsapi=1");
                });
            }
            function Ca(a, b) {
                var c = a.attr("src");
                a.attr("src", c + Da(c) + b);
            }
            function Da(a) {
                return /\?/.test(a) ? "&" : "?";
            }
            function Ea() {
                var b = a(v);
                b.addClass(q),
                    h.scrollOverflowHandler.afterRender && h.scrollOverflowHandler.afterRender(b),
                    ab(b),
                    bb(b),
                    h.scrollOverflowHandler.afterLoad(),
                    Fa() && a.isFunction(h.afterLoad) && h.afterLoad.call(b, b.data("anchor"), b.index(u) + 1),
                    a.isFunction(h.afterRender) && h.afterRender.call(sc);
            }
            function Fa() {
                var a = b.location.hash.replace("#", "").split("/"),
                    c = Jb(decodeURIComponent(a[0]));
                return !c.length || (c.length && c.index() === oc.index());
            }
            function Ga() {
                var b;
                if (!h.autoScrolling || h.scrollBar) {
                    var d = ba.scrollTop(),
                        e = Ja(d),
                        f = 0,
                        g = d + ba.height() / 2,
                        i = jc.height() - ba.height() === d,
                        j = c.querySelectorAll(u);
                    if (i) f = j.length - 1;
                    else if (d)
                        for (var k = 0; k < j.length; ++k) {
                            var l = j[k];
                            l.offsetTop <= g && (f = k);
                        }
                    else f = 0;
                    if ((Ia(e) && (a(v).hasClass(q) || a(v).addClass(q).siblings().removeClass(q)), (b = a(j).eq(f)), !b.hasClass(o))) {
                        Ic = !0;
                        var m,
                            n,
                            p = a(v),
                            r = p.index(u) + 1,
                            s = Db(b),
                            t = b.data("anchor"),
                            w = b.index(u) + 1,
                            x = b.find(K);
                        x.length && ((n = x.data("anchor")), (m = x.index())),
                            wc &&
                                (b.addClass(o).siblings().removeClass(o),
                                a.isFunction(h.onLeave) && h.onLeave.call(p, r, w, s),
                                a.isFunction(h.afterLoad) && h.afterLoad.call(b, t, w),
                                db(p),
                                ab(b),
                                bb(b),
                                Cb(t, w - 1),
                                h.anchors.length && (lc = t),
                                Ob(m, n, t, w)),
                            clearTimeout(Cc),
                            (Cc = setTimeout(function () {
                                Ic = !1;
                            }, 100));
                    }
                    h.fitToSection &&
                        (clearTimeout(Dc),
                        (Dc = setTimeout(function () {
                            h.fitToSection && Ha();
                        }, h.fitToSectionDelay)));
                }
            }
            function Ha() {
                wc && ((uc = !0), Va(a(v)), (uc = !1));
            }
            function Ia(b) {
                var c = a(v).position().top,
                    d = c + ba.height();
                return "up" == b ? d >= ba.scrollTop() + ba.height() : c <= ba.scrollTop();
            }
            function Ja(a) {
                var b = a > Jc ? "down" : "up";
                return (Jc = a), (Pc = a), b;
            }
            function Ka(a, b) {
                if (yc.m[a]) {
                    var c = "down" === a ? "bottom" : "top",
                        d = "down" === a ? ja : ia;
                    if (b.length > 0) {
                        if (!h.scrollOverflowHandler.isScrolled(c, b)) return !0;
                        d();
                    } else d();
                }
            }
            function La(a) {
                var b = a.originalEvent;
                !Na(a.target) && h.autoScrolling && Oa(b) && a.preventDefault();
            }
            function Ma(b) {
                var c = b.originalEvent,
                    e = a(c.target).closest(u);
                if (!Na(b.target) && Oa(c)) {
                    h.autoScrolling && b.preventDefault();
                    var f = h.scrollOverflowHandler.scrollable(e),
                        g = $b(c);
                    (Mc = g.y),
                        (Nc = g.x),
                        e.find(M).length && d.abs(Lc - Nc) > d.abs(Kc - Mc)
                            ? !pc && d.abs(Lc - Nc) > (ba.outerWidth() / 100) * h.touchSensitivity && (Lc > Nc ? yc.m.right && ma(e) : yc.m.left && na(e))
                            : h.autoScrolling && wc && d.abs(Kc - Mc) > (ba.height() / 100) * h.touchSensitivity && (Kc > Mc ? Ka("down", f) : Mc > Kc && Ka("up", f));
                }
            }
            function Na(b, c) {
                c = c || 0;
                var d = a(b).parent();
                return c < h.normalScrollElementTouchThreshold && d.is(h.normalScrollElements) ? !0 : c == h.normalScrollElementTouchThreshold ? !1 : Na(d, ++c);
            }
            function Oa(a) {
                return "undefined" == typeof a.pointerType || "mouse" != a.pointerType;
            }
            function Pa(a) {
                var b = a.originalEvent;
                if ((h.fitToSection && ic.stop(), Oa(b))) {
                    var c = $b(b);
                    (Kc = c.y), (Lc = c.x);
                }
            }
            function Qa(a, b) {
                for (var c = 0, e = a.slice(d.max(a.length - b, 1)), f = 0; f < e.length; f++) c += e[f];
                return d.ceil(c / b);
            }
            function Ra(c) {
                var e = new Date().getTime(),
                    f = a(r).hasClass(B);
                if (h.autoScrolling && !nc && !f) {
                    c = c || b.event;
                    var g = c.wheelDelta || -c.deltaY || -c.detail,
                        i = d.max(-1, d.min(1, g)),
                        j = "undefined" != typeof c.wheelDeltaX || "undefined" != typeof c.deltaX,
                        k = d.abs(c.wheelDeltaX) < d.abs(c.wheelDelta) || d.abs(c.deltaX) < d.abs(c.deltaY) || !j;
                    xc.length > 149 && xc.shift(), xc.push(d.abs(g)), h.scrollBar && (c.preventDefault ? c.preventDefault() : (c.returnValue = !1));
                    var l = a(v),
                        m = h.scrollOverflowHandler.scrollable(l),
                        n = e - Oc;
                    if (((Oc = e), n > 200 && (xc = []), wc)) {
                        var o = Qa(xc, 10),
                            p = Qa(xc, 70),
                            q = o >= p;
                        q && k && (0 > i ? Ka("down", m) : Ka("up", m));
                    }
                    return !1;
                }
                h.fitToSection && ic.stop();
            }
            function Sa(b, c) {
                var d = "undefined" == typeof c ? a(v) : c,
                    e = d.find(M),
                    f = e.find(J).length;
                if (!(!e.length || pc || 2 > f)) {
                    var g = e.find(K),
                        i = null;
                    if (((i = "left" === b ? g.prev(J) : g.next(J)), !i.length)) {
                        if (!h.loopHorizontal) return;
                        i = "left" === b ? g.siblings(":last") : g.siblings(":first");
                    }
                    (pc = !0), sb(e, i, b);
                }
            }
            function Ta() {
                a(K).each(function () {
                    _b(a(this), "internal");
                });
            }
            function Ua(a) {
                var b = a.position(),
                    c = b.top,
                    d = b.top > Pc,
                    e = c - tc + a.outerHeight(),
                    f = h.bigSectionsDestination;
                return a.outerHeight() > tc ? ((!d && !f) || "bottom" === f) && (c = e) : (d || (uc && a.is(":last-child"))) && (c = e), (Pc = c), c;
            }
            function Va(b, c, d) {
                if ("undefined" != typeof b) {
                    var e,
                        f,
                        g = Ua(b),
                        i = {
                            element: b,
                            callback: c,
                            isMovementUp: d,
                            dtop: g,
                            yMovement: Db(b),
                            anchorLink: b.data("anchor"),
                            sectionIndex: b.index(u),
                            activeSlide: b.find(K),
                            activeSection: a(v),
                            leavingSection: a(v).index(u) + 1,
                            localIsResizing: uc,
                        };
                    (i.activeSection.is(b) && !uc) ||
                        (h.scrollBar && ba.scrollTop() === i.dtop && !b.hasClass(A)) ||
                        (i.activeSlide.length && ((e = i.activeSlide.data("anchor")), (f = i.activeSlide.index())),
                        h.autoScrolling && h.continuousVertical && "undefined" != typeof i.isMovementUp && ((!i.isMovementUp && "up" == i.yMovement) || (i.isMovementUp && "down" == i.yMovement)) && (i = Ya(i)),
                        (!a.isFunction(h.onLeave) || i.localIsResizing || h.onLeave.call(i.activeSection, i.leavingSection, i.sectionIndex + 1, i.yMovement) !== !1) &&
                            (i.localIsResizing || db(i.activeSection),
                            h.scrollOverflowHandler.beforeLeave(),
                            b.addClass(o).siblings().removeClass(o),
                            ab(b),
                            h.scrollOverflowHandler.onLeave(),
                            (wc = !1),
                            Ob(f, e, i.anchorLink, i.sectionIndex),
                            Wa(i),
                            (lc = i.anchorLink),
                            Cb(i.anchorLink, i.sectionIndex)));
                }
            }
            function Wa(b) {
                if (h.css3 && h.autoScrolling && !h.scrollBar) {
                    var c = "translate3d(0px, -" + d.round(b.dtop) + "px, 0px)";
                    Ib(c, !0),
                        h.scrollingSpeed
                            ? (clearTimeout(Ac),
                              (Ac = setTimeout(function () {
                                  $a(b);
                              }, h.scrollingSpeed)))
                            : $a(b);
                } else {
                    var e = Xa(b);
                    a(e.element)
                        .animate(e.options, h.scrollingSpeed, h.easing)
                        .promise()
                        .done(function () {
                            h.scrollBar
                                ? setTimeout(function () {
                                      $a(b);
                                  }, 30)
                                : $a(b);
                        });
                }
            }
            function Xa(a) {
                var b = {};
                return h.autoScrolling && !h.scrollBar ? ((b.options = { top: -a.dtop }), (b.element = g)) : ((b.options = { scrollTop: a.dtop }), (b.element = "html, body")), b;
            }
            function Ya(b) {
                return (
                    b.isMovementUp ? a(v).before(b.activeSection.nextAll(u)) : a(v).after(b.activeSection.prevAll(u).get().reverse()),
                    ac(a(v).position().top),
                    Ta(),
                    (b.wrapAroundElements = b.activeSection),
                    (b.dtop = b.element.position().top),
                    (b.yMovement = Db(b.element)),
                    b
                );
            }
            function Za(b) {
                b.wrapAroundElements && b.wrapAroundElements.length && (b.isMovementUp ? a(w).before(b.wrapAroundElements) : a(x).after(b.wrapAroundElements), ac(a(v).position().top), Ta());
            }
            function $a(b) {
                Za(b),
                    a.isFunction(h.afterLoad) && !b.localIsResizing && h.afterLoad.call(b.element, b.anchorLink, b.sectionIndex + 1),
                    h.scrollOverflowHandler.afterLoad(),
                    b.localIsResizing || bb(b.element),
                    b.element.addClass(q).siblings().removeClass(q),
                    (wc = !0),
                    a.isFunction(b.callback) && b.callback.call(this);
            }
            function _a(a, b) {
                a.attr(b, a.data(b)).removeAttr("data-" + b);
            }
            function ab(b) {
                if (h.lazyLoading) {
                    var c,
                        d = eb(b);
                    d.find("img[data-src], img[data-srcset], source[data-src], audio[data-src], iframe[data-src]").each(function () {
                        (c = a(this)),
                            a.each(["src", "srcset"], function (a, b) {
                                var d = c.attr("data-" + b);
                                "undefined" != typeof d && d && _a(c, b);
                            }),
                            c.is("source") && c.closest("video").get(0).load();
                    });
                }
            }
            function bb(b) {
                var c = eb(b);
                c.find("video, audio").each(function () {
                    var b = a(this).get(0);
                    b.hasAttribute("data-autoplay") && "function" == typeof b.play && b.play();
                }),
                    c.find('iframe[src*="youtube.com/embed/"]').each(function () {
                        var b = a(this).get(0);
                        b.hasAttribute("data-autoplay") && cb(b),
                            (b.onload = function () {
                                b.hasAttribute("data-autoplay") && cb(b);
                            });
                    });
            }
            function cb(a) {
                a.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
            }
            function db(b) {
                var c = eb(b);
                c.find("video, audio").each(function () {
                    var b = a(this).get(0);
                    b.hasAttribute("data-keepplaying") || "function" != typeof b.pause || b.pause();
                }),
                    c.find('iframe[src*="youtube.com/embed/"]').each(function () {
                        var b = a(this).get(0);
                        /youtube\.com\/embed\//.test(a(this).attr("src")) && !b.hasAttribute("data-keepplaying") && a(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
                    });
            }
            function eb(b) {
                var c = b.find(K);
                return c.length && (b = a(c)), b;
            }
            function fb() {
                var a = b.location.hash.replace("#", "").split("/"),
                    c = decodeURIComponent(a[0]),
                    d = decodeURIComponent(a[1]);
                c && (h.animateAnchor ? Lb(c, d) : ka(c, d));
            }
            function gb() {
                if (!Ic && !h.lockAnchors) {
                    var a = b.location.hash.replace("#", "").split("/"),
                        c = decodeURIComponent(a[0]),
                        d = decodeURIComponent(a[1]),
                        e = "undefined" == typeof lc,
                        f = "undefined" == typeof lc && "undefined" == typeof d && !pc;
                    c.length && ((c && c !== lc && !e) || f || (!pc && mc != d)) && Lb(c, d);
                }
            }
            function hb(b) {
                clearTimeout(Ec);
                var c = a(":focus");
                if (!c.is("textarea") && !c.is("input") && !c.is("select") && "true" !== c.attr("contentEditable") && "" !== c.attr("contentEditable") && h.keyboardScrolling && h.autoScrolling) {
                    var d = b.which,
                        e = [40, 38, 32, 33, 34];
                    a.inArray(d, e) > -1 && b.preventDefault(),
                        (nc = b.ctrlKey),
                        (Ec = setTimeout(function () {
                            qb(b);
                        }, 150));
                }
            }
            function ib() {
                a(this).prev().trigger("click");
            }
            function jb(a) {
                vc && (nc = a.ctrlKey);
            }
            function kb(a) {
                2 == a.which && ((Qc = a.pageY), sc.on("mousemove", rb));
            }
            function lb(a) {
                2 == a.which && sc.off("mousemove");
            }
            function mb() {
                var b = a(this).closest(u);
                a(this).hasClass(V) ? yc.m.left && na(b) : yc.m.right && ma(b);
            }
            function nb() {
                (vc = !1), (nc = !1);
            }
            function ob(b) {
                b.preventDefault();
                var c = a(this).parent().index();
                Va(a(u).eq(c));
            }
            function pb(b) {
                b.preventDefault();
                var c = a(this).closest(u).find(M),
                    d = c.find(J).eq(a(this).closest("li").index());
                sb(c, d);
            }
            function qb(b) {
                var c = b.shiftKey;
                if (wc || !([37, 39].indexOf(b.which) < 0))
                    switch (b.which) {
                        case 38:
                        case 33:
                            yc.k.up && ia();
                            break;
                        case 32:
                            if (c && yc.k.up) {
                                ia();
                                break;
                            }
                        case 40:
                        case 34:
                            yc.k.down && ja();
                            break;
                        case 36:
                            yc.k.up && la(1);
                            break;
                        case 35:
                            yc.k.down && la(a(u).length);
                            break;
                        case 37:
                            yc.k.left && na();
                            break;
                        case 39:
                            yc.k.right && ma();
                            break;
                        default:
                            return;
                    }
            }
            function rb(a) {
                wc && (a.pageY < Qc && yc.m.up ? ia() : a.pageY > Qc && yc.m.down && ja()), (Qc = a.pageY);
            }
            function sb(b, c, d) {
                var e = b.closest(u),
                    f = {
                        slides: b,
                        destiny: c,
                        direction: d,
                        destinyPos: c.position(),
                        slideIndex: c.index(),
                        section: e,
                        sectionIndex: e.index(u),
                        anchorLink: e.data("anchor"),
                        slidesNav: e.find(R),
                        slideAnchor: Qb(c),
                        prevSlide: e.find(K),
                        prevSlideIndex: e.find(K).index(),
                        localIsResizing: uc,
                    };
                return (
                    (f.xMovement = Eb(f.prevSlideIndex, f.slideIndex)),
                    f.localIsResizing || (wc = !1),
                    h.onSlideLeave && !f.localIsResizing && "none" !== f.xMovement && a.isFunction(h.onSlideLeave) && h.onSlideLeave.call(f.prevSlide, f.anchorLink, f.sectionIndex + 1, f.prevSlideIndex, f.xMovement, f.slideIndex) === !1
                        ? void (pc = !1)
                        : (c.addClass(o).siblings().removeClass(o),
                          f.localIsResizing || (db(f.prevSlide), ab(c)),
                          !h.loopHorizontal && h.controlArrows && (e.find(Y).toggle(0 !== f.slideIndex), e.find(aa).toggle(!c.is(":last-child"))),
                          e.hasClass(o) && !f.localIsResizing && Ob(f.slideIndex, f.slideAnchor, f.anchorLink, f.sectionIndex),
                          void ub(b, f, !0))
                );
            }
            function tb(b) {
                vb(b.slidesNav, b.slideIndex), b.localIsResizing || (a.isFunction(h.afterSlideLoad) && h.afterSlideLoad.call(b.destiny, b.anchorLink, b.sectionIndex + 1, b.slideAnchor, b.slideIndex), (wc = !0), bb(b.destiny)), (pc = !1);
            }
            function ub(a, b, c) {
                var e = b.destinyPos;
                if (h.css3) {
                    var f = "translate3d(-" + d.round(e.left) + "px, 0px, 0px)";
                    yb(a.find(O)).css(bc(f)),
                        (Bc = setTimeout(
                            function () {
                                c && tb(b);
                            },
                            h.scrollingSpeed,
                            h.easing
                        ));
                } else
                    a.animate({ scrollLeft: d.round(e.left) }, h.scrollingSpeed, h.easing, function () {
                        c && tb(b);
                    });
            }
            function vb(a, b) {
                a.find(p).removeClass(o), a.find("li").eq(b).find("a").addClass(o);
            }
            function wb() {
                if ((xb(), qc)) {
                    var b = a(c.activeElement);
                    if (!b.is("textarea") && !b.is("input") && !b.is("select")) {
                        var e = ba.height();
                        d.abs(e - Rc) > (20 * d.max(Rc, e)) / 100 && (oa(!0), (Rc = e));
                    }
                } else
                    clearTimeout(zc),
                        (zc = setTimeout(function () {
                            oa(!0);
                        }, 350));
            }
            function xb() {
                var a = h.responsive || h.responsiveWidth,
                    b = h.responsiveHeight,
                    c = a && ba.outerWidth() < a,
                    d = b && ba.height() < b;
                a && b ? pa(c || d) : a ? pa(c) : b && pa(d);
            }
            function yb(a) {
                var b = "all " + h.scrollingSpeed + "ms " + h.easingcss3;
                return a.removeClass(k), a.css({ "-webkit-transition": b, transition: b });
            }
            function zb(a) {
                return a.addClass(k);
            }
            function Ab(b, c) {
                h.navigation &&
                    (a(D).find(p).removeClass(o),
                    b
                        ? a(D)
                              .find('a[href="#' + b + '"]')
                              .addClass(o)
                        : a(D).find("li").eq(c).find("a").addClass(o));
            }
            function Bb(b) {
                h.menu &&
                    (a(h.menu).find(p).removeClass(o),
                    a(h.menu)
                        .find('[data-menuanchor="' + b + '"]')
                        .addClass(o));
            }
            function Cb(a, b) {
                Bb(a), Ab(a, b);
            }
            function Db(b) {
                var c = a(v).index(u),
                    d = b.index(u);
                return c == d ? "none" : c > d ? "up" : "down";
            }
            function Eb(a, b) {
                return a == b ? "none" : a > b ? "left" : "right";
            }
            function Fb(a) {
                if (!a.hasClass("fp-noscroll")) {
                    a.css("overflow", "hidden");
                    var b,
                        c = h.scrollOverflowHandler,
                        d = c.wrapContent(),
                        e = a.closest(u),
                        f = c.scrollable(a);
                    f.length ? (b = c.scrollHeight(a)) : ((b = a.get(0).scrollHeight), h.verticalCentered && (b = a.find(z).get(0).scrollHeight));
                    var g = tc - parseInt(e.css("padding-bottom")) - parseInt(e.css("padding-top"));
                    b > g ? (f.length ? c.update(a, g) : (h.verticalCentered ? a.find(z).wrapInner(d) : a.wrapInner(d), c.create(a, g))) : c.remove(a), a.css("overflow", "");
                }
            }
            function Gb(a) {
                a.hasClass(P) || a.addClass(P).wrapInner('<div class="' + y + '" style="height:' + Hb(a) + 'px;" />');
            }
            function Hb(a) {
                var b = tc;
                if (h.paddingTop || h.paddingBottom) {
                    var c = a;
                    c.hasClass(t) || (c = a.closest(u));
                    var d = parseInt(c.css("padding-top")) + parseInt(c.css("padding-bottom"));
                    b = tc - d;
                }
                return b;
            }
            function Ib(a, b) {
                b ? yb(sc) : zb(sc),
                    sc.css(bc(a)),
                    setTimeout(function () {
                        sc.removeClass(k);
                    }, 10);
            }
            function Jb(b) {
                if (!b) return [];
                var c = sc.find(u + '[data-anchor="' + b + '"]');
                return c.length || (c = a(u).eq(b - 1)), c;
            }
            function Kb(a, b) {
                var c = b.find(M),
                    d = c.find(J + '[data-anchor="' + a + '"]');
                return d.length || (d = c.find(J).eq(a)), d;
            }
            function Lb(a, b) {
                var c = Jb(a);
                c.length &&
                    ("undefined" == typeof b && (b = 0),
                    a === lc || c.hasClass(o)
                        ? Mb(c, b)
                        : Va(c, function () {
                              Mb(c, b);
                          }));
            }
            function Mb(a, b) {
                if ("undefined" != typeof b) {
                    var c = a.find(M),
                        d = Kb(b, a);
                    d.length && sb(c, d);
                }
            }
            function Nb(a, b) {
                a.append('<div class="' + Q + '"><ul></ul></div>');
                var c = a.find(R);
                c.addClass(h.slidesNavPosition);
                for (var d = 0; b > d; d++) c.find("ul").append('<li><a href="#"><span></span></a></li>');
                c.css("margin-left", "-" + c.width() / 2 + "px"), c.find("li").first().find("a").addClass(o);
            }
            function Ob(a, b, c, d) {
                var e = "";
                h.anchors.length && !h.lockAnchors && (a ? ("undefined" != typeof c && (e = c), "undefined" == typeof b && (b = a), (mc = b), Pb(e + "/" + b)) : "undefined" != typeof a ? ((mc = b), Pb(c)) : Pb(c)), Rb();
            }
            function Pb(a) {
                if (h.recordHistory) location.hash = a;
                else if (qc || rc) b.history.replaceState(e, e, "#" + a);
                else {
                    var c = b.location.href.split("#")[0];
                    b.location.replace(c + "#" + a);
                }
            }
            function Qb(a) {
                var b = a.data("anchor"),
                    c = a.index();
                return "undefined" == typeof b && (b = c), b;
            }
            function Rb() {
                var b = a(v),
                    c = b.find(K),
                    d = Qb(b),
                    e = Qb(c),
                    f = String(d);
                c.length && (f = f + "-" + e), (f = f.replace("/", "-").replace("#", ""));
                var g = new RegExp("\\b\\s?" + n + "-[^\\s]+\\b", "g");
                (jc[0].className = jc[0].className.replace(g, "")), jc.addClass(n + "-" + f);
            }
            function Sb() {
                var a,
                    d = c.createElement("p"),
                    f = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };
                c.body.insertBefore(d, null);
                for (var g in f) d.style[g] !== e && ((d.style[g] = "translate3d(1px,1px,1px)"), (a = b.getComputedStyle(d).getPropertyValue(f[g])));
                return c.body.removeChild(d), a !== e && a.length > 0 && "none" !== a;
            }
            function Tb() {
                c.addEventListener ? (c.removeEventListener("mousewheel", Ra, !1), c.removeEventListener("wheel", Ra, !1), c.removeEventListener("MozMousePixelScroll", Ra, !1)) : c.detachEvent("onmousewheel", Ra);
            }
            function Ub() {
                var a,
                    d = "";
                b.addEventListener ? (a = "addEventListener") : ((a = "attachEvent"), (d = "on"));
                var f = "onwheel" in c.createElement("div") ? "wheel" : c.onmousewheel !== e ? "mousewheel" : "DOMMouseScroll";
                "DOMMouseScroll" == f ? c[a](d + "MozMousePixelScroll", Ra, !1) : c[a](d + f, Ra, !1);
            }
            function Vb() {
                sc.on("mousedown", kb).on("mouseup", lb);
            }
            function Wb() {
                sc.off("mousedown", kb).off("mouseup", lb);
            }
            function Xb() {
                (qc || rc) && (h.autoScrolling && jc.off(Gc.touchmove).on(Gc.touchmove, La), a(g).off(Gc.touchstart).on(Gc.touchstart, Pa).off(Gc.touchmove).on(Gc.touchmove, Ma));
            }
            function Yb() {
                (qc || rc) && a(g).off(Gc.touchstart).off(Gc.touchmove);
            }
            function Zb() {
                var a;
                return (a = b.PointerEvent ? { down: "pointerdown", move: "pointermove" } : { down: "MSPointerDown", move: "MSPointerMove" });
            }
            function $b(a) {
                var b = [];
                return (
                    (b.y = "undefined" != typeof a.pageY && (a.pageY || a.pageX) ? a.pageY : a.touches[0].pageY),
                    (b.x = "undefined" != typeof a.pageX && (a.pageY || a.pageX) ? a.pageX : a.touches[0].pageX),
                    rc && Oa(a) && h.scrollBar && ((b.y = a.touches[0].pageY), (b.x = a.touches[0].pageX)),
                    b
                );
            }
            function _b(a, b) {
                W(0, "internal"), "undefined" != typeof b && (uc = !0), sb(a.closest(M), a), "undefined" != typeof b && (uc = !1), W(Hc.scrollingSpeed, "internal");
            }
            function ac(a) {
                var b = d.round(a);
                if (h.css3 && h.autoScrolling && !h.scrollBar) {
                    var c = "translate3d(0px, -" + b + "px, 0px)";
                    Ib(c, !1);
                } else h.autoScrolling && !h.scrollBar ? sc.css("top", -b) : ic.scrollTop(b);
            }
            function bc(a) {
                return { "-webkit-transform": a, "-moz-transform": a, "-ms-transform": a, transform: a };
            }
            function cc(a, b, c) {
                switch (b) {
                    case "up":
                        yc[c].up = a;
                        break;
                    case "down":
                        yc[c].down = a;
                        break;
                    case "left":
                        yc[c].left = a;
                        break;
                    case "right":
                        yc[c].right = a;
                        break;
                    case "all":
                        "m" == c ? ga(a) : ha(a);
                }
            }
            function dc(b) {
                i(!1, "internal"),
                    ga(!1),
                    ha(!1),
                    sc.addClass(l),
                    clearTimeout(Bc),
                    clearTimeout(Ac),
                    clearTimeout(zc),
                    clearTimeout(Cc),
                    clearTimeout(Dc),
                    ba.off("scroll", Ga).off("hashchange", gb).off("resize", wb),
                    ca
                        .off("click touchstart", D + " a")
                        .off("mouseenter", D + " li")
                        .off("mouseleave", D + " li")
                        .off("click touchstart", S)
                        .off("mouseover", h.normalScrollElements)
                        .off("mouseout", h.normalScrollElements),
                    a(u).off("click touchstart", U),
                    clearTimeout(Bc),
                    clearTimeout(Ac),
                    b && ec();
            }
            function ec() {
                ac(0),
                    sc.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function () {
                        _a(a(this), "src");
                    }),
                    sc.find("img[data-srcset]").each(function () {
                        _a(a(this), "srcset");
                    }),
                    a(D + ", " + R + ", " + U).remove(),
                    a(u).css({ height: "", "background-color": "", padding: "" }),
                    a(J).css({ width: "" }),
                    sc.css({ height: "", position: "", "-ms-touch-action": "", "touch-action": "" }),
                    ic.css({ overflow: "", height: "" }),
                    a("html").removeClass(m),
                    jc.removeClass(j),
                    a.each(jc.get(0).className.split(/\s+/), function (a, b) {
                        0 === b.indexOf(n) && jc.removeClass(b);
                    }),
                    a(u + ", " + J).each(function () {
                        h.scrollOverflowHandler.remove(a(this)), a(this).removeClass(P + " " + o);
                    }),
                    zb(sc),
                    sc.find(z + ", " + O + ", " + M).each(function () {
                        a(this).replaceWith(this.childNodes);
                    }),
                    sc.css({ "-webkit-transition": "none", transition: "none" }),
                    ic.scrollTop(0);
                var b = [t, I, N];
                a.each(b, function (b, c) {
                    a("." + c).removeClass(c);
                });
            }
            function fc(a, b, c) {
                (h[a] = b), "internal" !== c && (Hc[a] = b);
            }
            function gc() {
                var b = ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"];
                return a("html").hasClass(m)
                    ? void hc("error", "Fullpage.js can only be initialized once and you are doing it multiple times!")
                    : (h.continuousVertical && (h.loopTop || h.loopBottom) && ((h.continuousVertical = !1), hc("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
                      h.scrollBar && h.scrollOverflow && hc("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),
                      !h.continuousVertical ||
                          (!h.scrollBar && h.autoScrolling) ||
                          ((h.continuousVertical = !1), hc("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
                      a.each(b, function (a, b) {
                          h[b] && hc("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + b);
                      }),
                      void a.each(h.anchors, function (b, c) {
                          var d = ca.find("[name]").filter(function () {
                                  return a(this).attr("name") && a(this).attr("name").toLowerCase() == c.toLowerCase();
                              }),
                              e = ca.find("[id]").filter(function () {
                                  return a(this).attr("id") && a(this).attr("id").toLowerCase() == c.toLowerCase();
                              });
                          (e.length || d.length) &&
                              (hc("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),
                              e.length && hc("error", '"' + c + '" is is being used by another element `id` property'),
                              d.length && hc("error", '"' + c + '" is is being used by another element `name` property'));
                      }));
            }
            function hc(a, b) {
                console && console[a] && console[a]("fullPage: " + b);
            }
            if (a("html").hasClass(m)) return void gc();
            var ic = a("html, body"),
                jc = a("body"),
                kc = a.fn.fullpage;
            h = a.extend(
                {
                    menu: !1,
                    anchors: [],
                    lockAnchors: !1,
                    navigation: !1,
                    navigationPosition: "right",
                    navigationTooltips: [],
                    showActiveTooltip: !1,
                    slidesNavigation: !1,
                    slidesNavPosition: "bottom",
                    scrollBar: !1,
                    hybrid: !1,
                    css3: !0,
                    scrollingSpeed: 700,
                    autoScrolling: !0,
                    fitToSection: !0,
                    fitToSectionDelay: 1e3,
                    easing: "easeInOutCubic",
                    easingcss3: "ease",
                    loopBottom: !1,
                    loopTop: !1,
                    loopHorizontal: !0,
                    continuousVertical: !1,
                    continuousHorizontal: !1,
                    scrollHorizontally: !1,
                    interlockedSlides: !1,
                    dragAndMove: !1,
                    offsetSections: !1,
                    resetSliders: !1,
                    fadingEffect: !1,
                    normalScrollElements: null,
                    scrollOverflow: !1,
                    scrollOverflowReset: !1,
                    scrollOverflowHandler: ea,
                    scrollOverflowOptions: null,
                    touchSensitivity: 5,
                    normalScrollElementTouchThreshold: 5,
                    bigSectionsDestination: null,
                    keyboardScrolling: !0,
                    animateAnchor: !0,
                    recordHistory: !0,
                    controlArrows: !0,
                    controlArrowColor: "#fff",
                    verticalCentered: !0,
                    sectionsColor: [],
                    paddingTop: 0,
                    paddingBottom: 0,
                    fixedElements: null,
                    responsive: 0,
                    responsiveWidth: 0,
                    responsiveHeight: 0,
                    responsiveSlides: !1,
                    parallax: !1,
                    parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
                    sectionSelector: s,
                    slideSelector: H,
                    afterLoad: null,
                    onLeave: null,
                    afterRender: null,
                    afterResize: null,
                    afterReBuild: null,
                    afterSlideLoad: null,
                    onSlideLeave: null,
                    afterResponsive: null,
                    lazyLoading: !0,
                },
                h
            );
            var lc,
                mc,
                nc,
                oc,
                pc = !1,
                qc = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                rc = "ontouchstart" in b || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
                sc = a(this),
                tc = ba.height(),
                uc = !1,
                vc = !0,
                wc = !0,
                xc = [],
                yc = {};
            (yc.m = { up: !0, down: !0, left: !0, right: !0 }), (yc.k = a.extend(!0, {}, yc.m));
            var zc,
                Ac,
                Bc,
                Cc,
                Dc,
                Ec,
                Fc = Zb(),
                Gc = { touchmove: "ontouchmove" in b ? "touchmove" : Fc.move, touchstart: "ontouchstart" in b ? "touchstart" : Fc.down },
                Hc = a.extend(!0, {}, h);
            gc(),
                (da.click = rc),
                (da = a.extend(da, h.scrollOverflowOptions)),
                a.extend(a.easing, {
                    easeInOutCubic: function (a, b, c, d, e) {
                        return (b /= e / 2) < 1 ? (d / 2) * b * b * b + c : (d / 2) * ((b -= 2) * b * b + 2) + c;
                    },
                }),
                a(this).length &&
                    ((kc.setAutoScrolling = i),
                    (kc.setRecordHistory = T),
                    (kc.setScrollingSpeed = W),
                    (kc.setFitToSection = Z),
                    (kc.setLockAnchors = $),
                    (kc.setMouseWheelScrolling = fa),
                    (kc.setAllowScrolling = ga),
                    (kc.setKeyboardScrolling = ha),
                    (kc.moveSectionUp = ia),
                    (kc.moveSectionDown = ja),
                    (kc.silentMoveTo = ka),
                    (kc.moveTo = la),
                    (kc.moveSlideRight = ma),
                    (kc.moveSlideLeft = na),
                    (kc.fitToSection = Ha),
                    (kc.reBuild = oa),
                    (kc.setResponsive = pa),
                    (kc.destroy = dc),
                    qa(),
                    ra());
            var Ic = !1,
                Jc = 0,
                Kc = 0,
                Lc = 0,
                Mc = 0,
                Nc = 0,
                Oc = new Date().getTime(),
                Pc = 0,
                Qc = 0,
                Rc = tc;
        }),
            "undefined" != typeof IScroll &&
                ((IScroll.prototype.wheelOn = function () {
                    this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this);
                }),
                (IScroll.prototype.wheelOff = function () {
                    this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this);
                }));
        var ea = {
            refreshId: null,
            iScrollInstances: [],
            toggleWheel: function (b) {
                var c = a(v).find(i);
                c.each(function () {
                    var c = a(this).data("iscrollInstance");
                    "undefined" != typeof c && c && (b ? c.wheelOn() : c.wheelOff());
                });
            },
            onLeave: function () {
                ea.toggleWheel(!1);
            },
            beforeLeave: function () {
                ea.onLeave();
            },
            afterLoad: function () {
                ea.toggleWheel(!0);
            },
            create: function (b, c) {
                var d = b.find(i);
                d.height(c),
                    d.each(function () {
                        var b = a(this),
                            c = b.data("iscrollInstance");
                        c &&
                            a.each(ea.iScrollInstances, function () {
                                a(this).destroy();
                            }),
                            (c = new IScroll(b.get(0), da)),
                            ea.iScrollInstances.push(c),
                            c.wheelOff(),
                            b.data("iscrollInstance", c);
                    });
            },
            isScrolled: function (a, b) {
                var c = b.data("iscrollInstance");
                return c ? ("top" === a ? c.y >= 0 && !b.scrollTop() : "bottom" === a ? 0 - c.y + b.scrollTop() + 1 + b.innerHeight() >= b[0].scrollHeight : void 0) : !0;
            },
            scrollable: function (a) {
                return a.find(M).length ? a.find(K).find(i) : a.find(i);
            },
            scrollHeight: function (a) {
                return a.find(i).children().first().get(0).scrollHeight;
            },
            remove: function (a) {
                var b = a.find(i);
                if (b.length) {
                    var c = b.data("iscrollInstance");
                    c.destroy(), b.data("iscrollInstance", null);
                }
                a.find(i).children().first().children().first().unwrap().unwrap();
            },
            update: function (b, c) {
                clearTimeout(ea.refreshId),
                    (ea.refreshId = setTimeout(function () {
                        a.each(ea.iScrollInstances, function () {
                            a(this).get(0).refresh();
                        });
                    }, 150)),
                    b
                        .find(i)
                        .css("height", c + "px")
                        .parent()
                        .css("height", c + "px");
            },
            wrapContent: function () {
                return '<div class="' + h + '"><div class="fp-scroller"></div></div>';
            },
        };
    });
var _slice = Array.prototype.slice,
    _slicedToArray = (function () {
        function a(a, b) {
            var c = [],
                d = !0,
                e = !1,
                f = void 0;
            try {
                for (var g, h = a[Symbol.iterator](); !(d = (g = h.next()).done) && (c.push(g.value), !b || c.length !== b); d = !0);
            } catch (i) {
                (e = !0), (f = i);
            } finally {
                try {
                    !d && h["return"] && h["return"]();
                } finally {
                    if (e) throw f;
                }
            }
            return c;
        }
        return function (b, c) {
            if (Array.isArray(b)) return b;
            if (Symbol.iterator in Object(b)) return a(b, c);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
    })(),
    _extends =
        Object.assign ||
        function (a) {
            for (var b = 1; b < arguments.length; b++) {
                var c = arguments[b];
                for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
            }
            return a;
        };
!(function (a, b) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = b(require("jquery"))) : "function" == typeof define && define.amd ? define(["jquery"], b) : (a.parsley = b(a.jQuery));
})(this, function (a) {
    "use strict";
    function b(a, b) {
        return (
            a.parsleyAdaptedCallback ||
                (a.parsleyAdaptedCallback = function () {
                    var c = Array.prototype.slice.call(arguments, 0);
                    c.unshift(this), a.apply(b || G, c);
                }),
            a.parsleyAdaptedCallback
        );
    }
    function c(a) {
        return 0 === a.lastIndexOf(I, 0) ? a.substr(I.length) : a;
    }
    function d() {
        var b = this,
            c = window || global;
        _extends(this, {
            isNativeEvent: function (a) {
                return a.originalEvent && a.originalEvent.isTrusted !== !1;
            },
            fakeInputEvent: function (c) {
                b.isNativeEvent(c) && a(c.target).trigger("input");
            },
            misbehaves: function (c) {
                b.isNativeEvent(c) && (b.behavesOk(c), a(document).on("change.inputevent", c.data.selector, b.fakeInputEvent), b.fakeInputEvent(c));
            },
            behavesOk: function (c) {
                b.isNativeEvent(c) && a(document).off("input.inputevent", c.data.selector, b.behavesOk).off("change.inputevent", c.data.selector, b.misbehaves);
            },
            install: function () {
                if (!c.inputEventPatched) {
                    c.inputEventPatched = "0.0.3";
                    for (var d = ["select", 'input[type="checkbox"]', 'input[type="radio"]', 'input[type="file"]'], e = 0; e < d.length; e++) {
                        var f = d[e];
                        a(document).on("input.inputevent", f, { selector: f }, b.behavesOk).on("change.inputevent", f, { selector: f }, b.misbehaves);
                    }
                }
            },
            uninstall: function () {
                delete c.inputEventPatched, a(document).off(".inputevent");
            },
        });
    }
    var e = 1,
        f = {},
        g = {
            attr: function (a, b, c) {
                var d,
                    e,
                    f,
                    g = new RegExp("^" + b, "i");
                if ("undefined" == typeof c) c = {};
                else for (d in c) c.hasOwnProperty(d) && delete c[d];
                if (!a) return c;
                for (f = a.attributes, d = f.length; d--; ) (e = f[d]), e && e.specified && g.test(e.name) && (c[this.camelize(e.name.slice(b.length))] = this.deserializeValue(e.value));
                return c;
            },
            checkAttr: function (a, b, c) {
                return a.hasAttribute(b + c);
            },
            setAttr: function (a, b, c, d) {
                a.setAttribute(this.dasherize(b + c), String(d));
            },
            generateID: function () {
                return "" + e++;
            },
            deserializeValue: function (b) {
                var c;
                try {
                    return b ? "true" == b || ("false" == b ? !1 : "null" == b ? null : isNaN((c = Number(b))) ? (/^[\[\{]/.test(b) ? a.parseJSON(b) : b) : c) : b;
                } catch (d) {
                    return b;
                }
            },
            camelize: function (a) {
                return a.replace(/-+(.)?/g, function (a, b) {
                    return b ? b.toUpperCase() : "";
                });
            },
            dasherize: function (a) {
                return a
                    .replace(/::/g, "/")
                    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
                    .replace(/([a-z\d])([A-Z])/g, "$1_$2")
                    .replace(/_/g, "-")
                    .toLowerCase();
            },
            warn: function () {
                var a;
                window.console && "function" == typeof window.console.warn && (a = window.console).warn.apply(a, arguments);
            },
            warnOnce: function (a) {
                f[a] || ((f[a] = !0), this.warn.apply(this, arguments));
            },
            _resetWarnings: function () {
                f = {};
            },
            trimString: function (a) {
                return a.replace(/^\s+|\s+$/g, "");
            },
            parse: {
                date: function L(a) {
                    var b = a.match(/^(\d{4,})-(\d\d)-(\d\d)$/);
                    if (!b) return null;
                    var c = b.map(function (a) {
                            return parseInt(a, 10);
                        }),
                        d = _slicedToArray(c, 4),
                        e = (d[0], d[1]),
                        f = d[2],
                        g = d[3],
                        L = new Date(e, f - 1, g);
                    return L.getFullYear() !== e || L.getMonth() + 1 !== f || L.getDate() !== g ? null : L;
                },
                string: function (a) {
                    return a;
                },
                integer: function (a) {
                    return isNaN(a) ? null : parseInt(a, 10);
                },
                number: function (a) {
                    if (isNaN(a)) throw null;
                    return parseFloat(a);
                },
                boolean: function (a) {
                    return !/^\s*false\s*$/i.test(a);
                },
                object: function (a) {
                    return g.deserializeValue(a);
                },
                regexp: function (a) {
                    var b = "";
                    return /^\/.*\/(?:[gimy]*)$/.test(a) ? ((b = a.replace(/.*\/([gimy]*)$/, "$1")), (a = a.replace(new RegExp("^/(.*?)/" + b + "$"), "$1"))) : (a = "^" + a + "$"), new RegExp(a, b);
                },
            },
            parseRequirement: function (a, b) {
                var c = this.parse[a || "string"];
                if (!c) throw 'Unknown requirement specification: "' + a + '"';
                var d = c(b);
                if (null === d) throw "Requirement is not a " + a + ': "' + b + '"';
                return d;
            },
            namespaceEvents: function (b, c) {
                return (
                    (b = this.trimString(b || "").split(/\s+/)),
                    b[0]
                        ? a
                              .map(b, function (a) {
                                  return a + "." + c;
                              })
                              .join(" ")
                        : ""
                );
            },
            difference: function (b, c) {
                var d = [];
                return (
                    a.each(b, function (a, b) {
                        -1 == c.indexOf(b) && d.push(b);
                    }),
                    d
                );
            },
            all: function (b) {
                return a.when.apply(a, _toConsumableArray(b).concat([42, 42]));
            },
            objectCreate:
                Object.create ||
                (function () {
                    var a = function () {};
                    return function (b) {
                        if (arguments.length > 1) throw Error("Second argument not supported");
                        if ("object" != typeof b) throw TypeError("Argument must be an object");
                        a.prototype = b;
                        var c = new a();
                        return (a.prototype = null), c;
                    };
                })(),
            _SubmitSelector: 'input[type="submit"], button:submit',
        },
        h = {
            namespace: "data-parsley-",
            inputs: "input, textarea, select",
            excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
            priorityEnabled: !0,
            multiple: null,
            group: null,
            uiEnabled: !0,
            validationThreshold: 3,
            focus: "first",
            trigger: !1,
            triggerAfterFailure: "input",
            errorClass: "parsley-error",
            successClass: "parsley-success",
            classHandler: function (a) {},
            errorsContainer: function (a) {},
            errorsWrapper: '<ul class="parsley-errors-list"></ul>',
            errorTemplate: "<li></li>",
        },
        i = function () {
            this.__id__ = g.generateID();
        };
    i.prototype = {
        asyncSupport: !0,
        _pipeAccordingToValidationResult: function () {
            var b = this,
                c = function () {
                    var c = a.Deferred();
                    return !0 !== b.validationResult && c.reject(), c.resolve().promise();
                };
            return [c, c];
        },
        actualizeOptions: function () {
            return g.attr(this.element, this.options.namespace, this.domOptions), this.parent && this.parent.actualizeOptions && this.parent.actualizeOptions(), this;
        },
        _resetOptions: function (a) {
            (this.domOptions = g.objectCreate(this.parent.options)), (this.options = g.objectCreate(this.domOptions));
            for (var b in a) a.hasOwnProperty(b) && (this.options[b] = a[b]);
            this.actualizeOptions();
        },
        _listeners: null,
        on: function (a, b) {
            this._listeners = this._listeners || {};
            var c = (this._listeners[a] = this._listeners[a] || []);
            return c.push(b), this;
        },
        subscribe: function (b, c) {
            a.listenTo(this, b.toLowerCase(), c);
        },
        off: function (a, b) {
            var c = this._listeners && this._listeners[a];
            if (c)
                if (b) for (var d = c.length; d--; ) c[d] === b && c.splice(d, 1);
                else delete this._listeners[a];
            return this;
        },
        unsubscribe: function (b, c) {
            a.unsubscribeTo(this, b.toLowerCase());
        },
        trigger: function (a, b, c) {
            b = b || this;
            var d,
                e = this._listeners && this._listeners[a];
            if (e) for (var f = e.length; f--; ) if (((d = e[f].call(b, b, c)), d === !1)) return d;
            return this.parent ? this.parent.trigger(a, b, c) : !0;
        },
        asyncIsValid: function (a, b) {
            return g.warnOnce("asyncIsValid is deprecated; please use whenValid instead"), this.whenValid({ group: a, force: b });
        },
        _findRelated: function () {
            return this.options.multiple ? a(this.parent.element.querySelectorAll("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]')) : this.$element;
        },
    };
    var j = function (a, b) {
            var c = a.match(/^\s*\[(.*)\]\s*$/);
            if (!c) throw 'Requirement is not an array: "' + a + '"';
            var d = c[1].split(",").map(g.trimString);
            if (d.length !== b) throw "Requirement has " + d.length + " values when " + b + " are needed";
            return d;
        },
        k = function (a, b, c) {
            var d = null,
                e = {};
            for (var f in a)
                if (f) {
                    var h = c(f);
                    "string" == typeof h && (h = g.parseRequirement(a[f], h)), (e[f] = h);
                } else d = g.parseRequirement(a[f], b);
            return [d, e];
        },
        l = function (b) {
            a.extend(!0, this, b);
        };
    l.prototype = {
        validate: function (a, b) {
            if (this.fn) return arguments.length > 3 && (b = [].slice.call(arguments, 1, -1)), this.fn(a, b);
            if (Array.isArray(a)) {
                if (!this.validateMultiple) throw "Validator `" + this.name + "` does not handle multiple values";
                return this.validateMultiple.apply(this, arguments);
            }
            var c = arguments[arguments.length - 1];
            if (this.validateDate && c._isDateInput()) return (arguments[0] = g.parse.date(arguments[0])), null === arguments[0] ? !1 : this.validateDate.apply(this, arguments);
            if (this.validateNumber) return isNaN(a) ? !1 : ((arguments[0] = parseFloat(arguments[0])), this.validateNumber.apply(this, arguments));
            if (this.validateString) return this.validateString.apply(this, arguments);
            throw "Validator `" + this.name + "` only handles multiple values";
        },
        parseRequirements: function (b, c) {
            if ("string" != typeof b) return Array.isArray(b) ? b : [b];
            var d = this.requirementType;
            if (Array.isArray(d)) {
                for (var e = j(b, d.length), f = 0; f < e.length; f++) e[f] = g.parseRequirement(d[f], e[f]);
                return e;
            }
            return a.isPlainObject(d) ? k(d, b, c) : [g.parseRequirement(d, b)];
        },
        requirementType: "string",
        priority: 2,
    };
    var m = function (a, b) {
            (this.__class__ = "ValidatorRegistry"), (this.locale = "en"), this.init(a || {}, b || {});
        },
        n = {
            email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
            number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,
            integer: /^-?\d+$/,
            digits: /^\d+$/,
            alphanum: /^\w+$/i,
            date: {
                test: function (a) {
                    return null !== g.parse.date(a);
                },
            },
            url: new RegExp(
                "^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$",
                "i"
            ),
        };
    n.range = n.number;
    var o = function (a) {
            var b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0;
        },
        p = function (a, b) {
            return b.map(g.parse[a]);
        },
        q = function (a, b) {
            return function (c) {
                for (var d = arguments.length, e = Array(d > 1 ? d - 1 : 0), f = 1; d > f; f++) e[f - 1] = arguments[f];
                return e.pop(), b.apply(void 0, [c].concat(_toConsumableArray(p(a, e))));
            };
        },
        r = function (a) {
            return { validateDate: q("date", a), validateNumber: q("number", a), requirementType: a.length <= 2 ? "string" : ["string", "string"], priority: 30 };
        };
    m.prototype = {
        init: function (a, b) {
            (this.catalog = b), (this.validators = _extends({}, this.validators));
            for (var c in a) this.addValidator(c, a[c].fn, a[c].priority);
            window.Parsley.trigger("parsley:validator:init");
        },
        setLocale: function (a) {
            if ("undefined" == typeof this.catalog[a]) throw new Error(a + " is not available in the catalog");
            return (this.locale = a), this;
        },
        addCatalog: function (a, b, c) {
            return "object" == typeof b && (this.catalog[a] = b), !0 === c ? this.setLocale(a) : this;
        },
        addMessage: function (a, b, c) {
            return "undefined" == typeof this.catalog[a] && (this.catalog[a] = {}), (this.catalog[a][b] = c), this;
        },
        addMessages: function (a, b) {
            for (var c in b) this.addMessage(a, c, b[c]);
            return this;
        },
        addValidator: function (a, b, c) {
            if (this.validators[a]) g.warn('Validator "' + a + '" is already defined.');
            else if (h.hasOwnProperty(a)) return void g.warn('"' + a + '" is a restricted keyword and is not a valid validator name.');
            return this._setValidator.apply(this, arguments);
        },
        updateValidator: function (a, b, c) {
            return this.validators[a] ? this._setValidator.apply(this, arguments) : (g.warn('Validator "' + a + '" is not already defined.'), this.addValidator.apply(this, arguments));
        },
        removeValidator: function (a) {
            return this.validators[a] || g.warn('Validator "' + a + '" is not defined.'), delete this.validators[a], this;
        },
        _setValidator: function (a, b, c) {
            "object" != typeof b && (b = { fn: b, priority: c }), b.validate || (b = new l(b)), (this.validators[a] = b);
            for (var d in b.messages || {}) this.addMessage(d, a, b.messages[d]);
            return this;
        },
        getErrorMessage: function (a) {
            var b;
            if ("type" === a.name) {
                var c = this.catalog[this.locale][a.name] || {};
                b = c[a.requirements];
            } else b = this.formatMessage(this.catalog[this.locale][a.name], a.requirements);
            return b || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage;
        },
        formatMessage: function (a, b) {
            if ("object" == typeof b) {
                for (var c in b) a = this.formatMessage(a, b[c]);
                return a;
            }
            return "string" == typeof a ? a.replace(/%s/i, b) : "";
        },
        validators: {
            notblank: {
                validateString: function (a) {
                    return /\S/.test(a);
                },
                priority: 2,
            },
            required: {
                validateMultiple: function (a) {
                    return a.length > 0;
                },
                validateString: function (a) {
                    return /\S/.test(a);
                },
                priority: 512,
            },
            type: {
                validateString: function (a, b) {
                    var c = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                        d = c.step,
                        e = void 0 === d ? "any" : d,
                        f = c.base,
                        g = void 0 === f ? 0 : f,
                        h = n[b];
                    if (!h) throw new Error("validator type `" + b + "` is not supported");
                    if (!h.test(a)) return !1;
                    if ("number" === b && !/^any$/i.test(e || "")) {
                        var i = Number(a),
                            j = Math.max(o(e), o(g));
                        if (o(i) > j) return !1;
                        var k = function (a) {
                            return Math.round(a * Math.pow(10, j));
                        };
                        if ((k(i) - k(g)) % k(e) != 0) return !1;
                    }
                    return !0;
                },
                requirementType: { "": "string", step: "string", base: "number" },
                priority: 256,
            },
            pattern: {
                validateString: function (a, b) {
                    return b.test(a);
                },
                requirementType: "regexp",
                priority: 64,
            },
            minlength: {
                validateString: function (a, b) {
                    return a.length >= b;
                },
                requirementType: "integer",
                priority: 30,
            },
            maxlength: {
                validateString: function (a, b) {
                    return a.length <= b;
                },
                requirementType: "integer",
                priority: 30,
            },
            length: {
                validateString: function (a, b, c) {
                    return a.length >= b && a.length <= c;
                },
                requirementType: ["integer", "integer"],
                priority: 30,
            },
            mincheck: {
                validateMultiple: function (a, b) {
                    return a.length >= b;
                },
                requirementType: "integer",
                priority: 30,
            },
            maxcheck: {
                validateMultiple: function (a, b) {
                    return a.length <= b;
                },
                requirementType: "integer",
                priority: 30,
            },
            check: {
                validateMultiple: function (a, b, c) {
                    return a.length >= b && a.length <= c;
                },
                requirementType: ["integer", "integer"],
                priority: 30,
            },
            min: r(function (a, b) {
                return a >= b;
            }),
            max: r(function (a, b) {
                return b >= a;
            }),
            range: r(function (a, b, c) {
                return a >= b && c >= a;
            }),
            equalto: {
                validateString: function (b, c) {
                    var d = a(c);
                    return d.length ? b === d.val() : b === c;
                },
                priority: 256,
            },
        },
    };
    var s = {},
        t = function M(a, b, c) {
            for (var d = [], e = [], f = 0; f < a.length; f++) {
                for (var g = !1, h = 0; h < b.length; h++)
                    if (a[f].assert.name === b[h].assert.name) {
                        g = !0;
                        break;
                    }
                g ? e.push(a[f]) : d.push(a[f]);
            }
            return { kept: e, added: d, removed: c ? [] : M(b, a, !0).added };
        };
    (s.Form = {
        _actualizeTriggers: function () {
            var a = this;
            this.$element.on("submit.Parsley", function (b) {
                a.onSubmitValidate(b);
            }),
                this.$element.on("click.Parsley", g._SubmitSelector, function (b) {
                    a.onSubmitButton(b);
                }),
                !1 !== this.options.uiEnabled && this.element.setAttribute("novalidate", "");
        },
        focus: function () {
            if (((this._focusedField = null), !0 === this.validationResult || "none" === this.options.focus)) return null;
            for (var a = 0; a < this.fields.length; a++) {
                var b = this.fields[a];
                if (!0 !== b.validationResult && b.validationResult.length > 0 && "undefined" == typeof b.options.noFocus && ((this._focusedField = b.$element), "first" === this.options.focus)) break;
            }
            return null === this._focusedField ? null : this._focusedField.focus();
        },
        _destroyUI: function () {
            this.$element.off(".Parsley");
        },
    }),
        (s.Field = {
            _reflowUI: function () {
                if ((this._buildUI(), this._ui)) {
                    var a = t(this.validationResult, this._ui.lastValidationResult);
                    (this._ui.lastValidationResult = this.validationResult),
                        this._manageStatusClass(),
                        this._manageErrorsMessages(a),
                        this._actualizeTriggers(),
                        (!a.kept.length && !a.added.length) || this._failedOnce || ((this._failedOnce = !0), this._actualizeTriggers());
                }
            },
            getErrorsMessages: function () {
                if (!0 === this.validationResult) return [];
                for (var a = [], b = 0; b < this.validationResult.length; b++) a.push(this.validationResult[b].errorMessage || this._getErrorMessage(this.validationResult[b].assert));
                return a;
            },
            addError: function (a) {
                var b = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    c = b.message,
                    d = b.assert,
                    e = b.updateClass,
                    f = void 0 === e ? !0 : e;
                this._buildUI(), this._addError(a, { message: c, assert: d }), f && this._errorClass();
            },
            updateError: function (a) {
                var b = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    c = b.message,
                    d = b.assert,
                    e = b.updateClass,
                    f = void 0 === e ? !0 : e;
                this._buildUI(), this._updateError(a, { message: c, assert: d }), f && this._errorClass();
            },
            removeError: function (a) {
                var b = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    c = b.updateClass,
                    d = void 0 === c ? !0 : c;
                this._buildUI(), this._removeError(a), d && this._manageStatusClass();
            },
            _manageStatusClass: function () {
                this.hasConstraints() && this.needsValidation() && !0 === this.validationResult ? this._successClass() : this.validationResult.length > 0 ? this._errorClass() : this._resetClass();
            },
            _manageErrorsMessages: function (b) {
                if ("undefined" == typeof this.options.errorsMessagesDisabled) {
                    if ("undefined" != typeof this.options.errorMessage)
                        return b.added.length || b.kept.length
                            ? (this._insertErrorWrapper(),
                              0 === this._ui.$errorsWrapper.find(".parsley-custom-error-message").length && this._ui.$errorsWrapper.append(a(this.options.errorTemplate).addClass("parsley-custom-error-message")),
                              this._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(this.options.errorMessage))
                            : this._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
                    for (var c = 0; c < b.removed.length; c++) this._removeError(b.removed[c].assert.name);
                    for (c = 0; c < b.added.length; c++) this._addError(b.added[c].assert.name, { message: b.added[c].errorMessage, assert: b.added[c].assert });
                    for (c = 0; c < b.kept.length; c++) this._updateError(b.kept[c].assert.name, { message: b.kept[c].errorMessage, assert: b.kept[c].assert });
                }
            },
            _addError: function (b, c) {
                var d = c.message,
                    e = c.assert;
                this._insertErrorWrapper(),
                    this._ui.$errorsWrapper.addClass("filled").append(
                        a(this.options.errorTemplate)
                            .addClass("parsley-" + b)
                            .html(d || this._getErrorMessage(e))
                    );
            },
            _updateError: function (a, b) {
                var c = b.message,
                    d = b.assert;
                this._ui.$errorsWrapper
                    .addClass("filled")
                    .find(".parsley-" + a)
                    .html(c || this._getErrorMessage(d));
            },
            _removeError: function (a) {
                this._ui.$errorsWrapper
                    .removeClass("filled")
                    .find(".parsley-" + a)
                    .remove();
            },
            _getErrorMessage: function (a) {
                var b = a.name + "Message";
                return "undefined" != typeof this.options[b] ? window.Parsley.formatMessage(this.options[b], a.requirements) : window.Parsley.getErrorMessage(a);
            },
            _buildUI: function () {
                if (!this._ui && !1 !== this.options.uiEnabled) {
                    var b = {};
                    this.element.setAttribute(this.options.namespace + "id", this.__id__),
                        (b.$errorClassHandler = this._manageClassHandler()),
                        (b.errorsWrapperId = "parsley-id-" + (this.options.multiple ? "multiple-" + this.options.multiple : this.__id__)),
                        (b.$errorsWrapper = a(this.options.errorsWrapper).attr("id", b.errorsWrapperId)),
                        (b.lastValidationResult = []),
                        (b.validationInformationVisible = !1),
                        (this._ui = b);
                }
            },
            _manageClassHandler: function () {
                if ("string" == typeof this.options.classHandler)
                    return (
                        0 === a(this.options.classHandler).length && ParsleyUtils.warn("No elements found that match the selector `" + this.options.classHandler + "` set in options.classHandler or data-parsley-class-handler"),
                        a(this.options.classHandler)
                    );
                if ("function" == typeof this.options.classHandler) var b = this.options.classHandler.call(this, this);
                return "undefined" != typeof b && b.length ? b : this._inputHolder();
            },
            _inputHolder: function () {
                return this.options.multiple && "SELECT" !== this.element.nodeName ? this.$element.parent() : this.$element;
            },
            _insertErrorWrapper: function () {
                var b;
                if (0 !== this._ui.$errorsWrapper.parent().length) return this._ui.$errorsWrapper.parent();
                if ("string" == typeof this.options.errorsContainer) {
                    if (a(this.options.errorsContainer).length) return a(this.options.errorsContainer).append(this._ui.$errorsWrapper);
                    g.warn("The errors container `" + this.options.errorsContainer + "` does not exist in DOM");
                } else "function" == typeof this.options.errorsContainer && (b = this.options.errorsContainer.call(this, this));
                return "undefined" != typeof b && b.length ? b.append(this._ui.$errorsWrapper) : this._inputHolder().after(this._ui.$errorsWrapper);
            },
            _actualizeTriggers: function () {
                var a,
                    b = this,
                    c = this._findRelated();
                c.off(".Parsley"),
                    this._failedOnce
                        ? c.on(g.namespaceEvents(this.options.triggerAfterFailure, "Parsley"), function () {
                              b._validateIfNeeded();
                          })
                        : (a = g.namespaceEvents(this.options.trigger, "Parsley")) &&
                          c.on(a, function (a) {
                              b._validateIfNeeded(a);
                          });
            },
            _validateIfNeeded: function (a) {
                var b = this;
                (a && /key|input/.test(a.type) && (!this._ui || !this._ui.validationInformationVisible) && this.getValue().length <= this.options.validationThreshold) ||
                    (this.options.debounce
                        ? (window.clearTimeout(this._debounced),
                          (this._debounced = window.setTimeout(function () {
                              return b.validate();
                          }, this.options.debounce)))
                        : this.validate());
            },
            _resetUI: function () {
                (this._failedOnce = !1),
                    this._actualizeTriggers(),
                    "undefined" != typeof this._ui && (this._ui.$errorsWrapper.removeClass("filled").children().remove(), this._resetClass(), (this._ui.lastValidationResult = []), (this._ui.validationInformationVisible = !1));
            },
            _destroyUI: function () {
                this._resetUI(), "undefined" != typeof this._ui && this._ui.$errorsWrapper.remove(), delete this._ui;
            },
            _successClass: function () {
                (this._ui.validationInformationVisible = !0), this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass);
            },
            _errorClass: function () {
                (this._ui.validationInformationVisible = !0), this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass);
            },
            _resetClass: function () {
                this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass);
            },
        });
    var u = function (b, c, d) {
            (this.__class__ = "Form"), (this.element = b), (this.$element = a(b)), (this.domOptions = c), (this.options = d), (this.parent = window.Parsley), (this.fields = []), (this.validationResult = null);
        },
        v = { pending: null, resolved: !0, rejected: !1 };
    u.prototype = {
        onSubmitValidate: function (a) {
            var b = this;
            if (!0 !== a.parsley) {
                var c = this._submitSource || this.$element.find(g._SubmitSelector)[0];
                if (((this._submitSource = null), this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !0), !c || null === c.getAttribute("formnovalidate"))) {
                    window.Parsley._remoteCache = {};
                    var d = this.whenValidate({ event: a });
                    ("resolved" === d.state() && !1 !== this._trigger("submit")) ||
                        (a.stopImmediatePropagation(),
                        a.preventDefault(),
                        "pending" === d.state() &&
                            d.done(function () {
                                b._submit(c);
                            }));
                }
            }
        },
        onSubmitButton: function (a) {
            this._submitSource = a.currentTarget;
        },
        _submit: function (b) {
            if (!1 !== this._trigger("submit")) {
                if (b) {
                    var c = this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !1);
                    0 === c.length && (c = a('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element)), c.attr({ name: b.getAttribute("name"), value: b.getAttribute("value") });
                }
                this.$element.trigger(_extends(a.Event("submit"), { parsley: !0 }));
            }
        },
        validate: function (b) {
            if (arguments.length >= 1 && !a.isPlainObject(b)) {
                g.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated.");
                var c = _slice.call(arguments),
                    d = c[0],
                    e = c[1],
                    f = c[2];
                b = { group: d, force: e, event: f };
            }
            return v[this.whenValidate(b).state()];
        },
        whenValidate: function () {
            var b,
                c = this,
                d = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = d.group,
                f = d.force,
                h = d.event;
            (this.submitEvent = h),
                h &&
                    (this.submitEvent = _extends({}, h, {
                        preventDefault: function () {
                            g.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"), (c.validationResult = !1);
                        },
                    })),
                (this.validationResult = !0),
                this._trigger("validate"),
                this._refreshFields();
            var i = this._withoutReactualizingFormOptions(function () {
                return a.map(c.fields, function (a) {
                    return a.whenValidate({ force: f, group: e });
                });
            });
            return (b = g
                .all(i)
                .done(function () {
                    c._trigger("success");
                })
                .fail(function () {
                    (c.validationResult = !1), c.focus(), c._trigger("error");
                })
                .always(function () {
                    c._trigger("validated");
                })).pipe.apply(b, _toConsumableArray(this._pipeAccordingToValidationResult()));
        },
        isValid: function (b) {
            if (arguments.length >= 1 && !a.isPlainObject(b)) {
                g.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated.");
                var c = _slice.call(arguments),
                    d = c[0],
                    e = c[1];
                b = { group: d, force: e };
            }
            return v[this.whenValid(b).state()];
        },
        whenValid: function () {
            var b = this,
                c = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                d = c.group,
                e = c.force;
            this._refreshFields();
            var f = this._withoutReactualizingFormOptions(function () {
                return a.map(b.fields, function (a) {
                    return a.whenValid({ group: d, force: e });
                });
            });
            return g.all(f);
        },
        reset: function () {
            for (var a = 0; a < this.fields.length; a++) this.fields[a].reset();
            this._trigger("reset");
        },
        destroy: function () {
            this._destroyUI();
            for (var a = 0; a < this.fields.length; a++) this.fields[a].destroy();
            this.$element.removeData("Parsley"), this._trigger("destroy");
        },
        _refreshFields: function () {
            return this.actualizeOptions()._bindFields();
        },
        _bindFields: function () {
            var b = this,
                c = this.fields;
            return (
                (this.fields = []),
                (this.fieldsMappedById = {}),
                this._withoutReactualizingFormOptions(function () {
                    b.$element
                        .find(b.options.inputs)
                        .not(b.options.excluded)
                        .each(function (a, c) {
                            var d = new window.Parsley.Factory(c, {}, b);
                            if (("Field" === d.__class__ || "FieldMultiple" === d.__class__) && !0 !== d.options.excluded) {
                                var e = d.__class__ + "-" + d.__id__;
                                "undefined" == typeof b.fieldsMappedById[e] && ((b.fieldsMappedById[e] = d), b.fields.push(d));
                            }
                        }),
                        a.each(g.difference(c, b.fields), function (a, b) {
                            b.reset();
                        });
                }),
                this
            );
        },
        _withoutReactualizingFormOptions: function (a) {
            var b = this.actualizeOptions;
            this.actualizeOptions = function () {
                return this;
            };
            var c = a();
            return (this.actualizeOptions = b), c;
        },
        _trigger: function (a) {
            return this.trigger("form:" + a);
        },
    };
    var w = function (a, b, c, d, e) {
            var f = window.Parsley._validatorRegistry.validators[b],
                g = new l(f);
            (d = d || a.options[b + "Priority"] || g.priority), (e = !0 === e), _extends(this, { validator: g, name: b, requirements: c, priority: d, isDomConstraint: e }), this._parseRequirements(a.options);
        },
        x = function (a) {
            var b = a[0].toUpperCase();
            return b + a.slice(1);
        };
    w.prototype = {
        validate: function (a, b) {
            var c;
            return (c = this.validator).validate.apply(c, [a].concat(_toConsumableArray(this.requirementList), [b]));
        },
        _parseRequirements: function (a) {
            var b = this;
            this.requirementList = this.validator.parseRequirements(this.requirements, function (c) {
                return a[b.name + x(c)];
            });
        },
    };
    var y = function (b, c, d, e) {
            (this.__class__ = "Field"),
                (this.element = b),
                (this.$element = a(b)),
                "undefined" != typeof e && (this.parent = e),
                (this.options = d),
                (this.domOptions = c),
                (this.constraints = []),
                (this.constraintsByName = {}),
                (this.validationResult = !0),
                this._bindConstraints();
        },
        z = { pending: null, resolved: !0, rejected: !1 };
    y.prototype = {
        validate: function (b) {
            arguments.length >= 1 && !a.isPlainObject(b) && (g.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated."), (b = { options: b }));
            var c = this.whenValidate(b);
            if (!c) return !0;
            switch (c.state()) {
                case "pending":
                    return null;
                case "resolved":
                    return !0;
                case "rejected":
                    return this.validationResult;
            }
        },
        whenValidate: function () {
            var a,
                b = this,
                c = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                d = c.force,
                e = c.group;
            return (
                this.refreshConstraints(),
                !e || this._isInGroup(e)
                    ? ((this.value = this.getValue()),
                      this._trigger("validate"),
                      (a = this.whenValid({ force: d, value: this.value, _refreshed: !0 })
                          .always(function () {
                              b._reflowUI();
                          })
                          .done(function () {
                              b._trigger("success");
                          })
                          .fail(function () {
                              b._trigger("error");
                          })
                          .always(function () {
                              b._trigger("validated");
                          })).pipe.apply(a, _toConsumableArray(this._pipeAccordingToValidationResult())))
                    : void 0
            );
        },
        hasConstraints: function () {
            return 0 !== this.constraints.length;
        },
        needsValidation: function (a) {
            return "undefined" == typeof a && (a = this.getValue()), a.length || this._isRequired() || "undefined" != typeof this.options.validateIfEmpty ? !0 : !1;
        },
        _isInGroup: function (b) {
            return Array.isArray(this.options.group) ? -1 !== a.inArray(b, this.options.group) : this.options.group === b;
        },
        isValid: function (b) {
            if (arguments.length >= 1 && !a.isPlainObject(b)) {
                g.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated.");
                var c = _slice.call(arguments),
                    d = c[0],
                    e = c[1];
                b = { force: d, value: e };
            }
            var f = this.whenValid(b);
            return f ? z[f.state()] : !0;
        },
        whenValid: function () {
            var b = this,
                c = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                d = c.force,
                e = void 0 === d ? !1 : d,
                f = c.value,
                h = c.group,
                i = c._refreshed;
            if ((i || this.refreshConstraints(), !h || this._isInGroup(h))) {
                if (((this.validationResult = !0), !this.hasConstraints())) return a.when();
                if ((("undefined" == typeof f || null === f) && (f = this.getValue()), !this.needsValidation(f) && !0 !== e)) return a.when();
                var j = this._getGroupedConstraints(),
                    k = [];
                return (
                    a.each(j, function (c, d) {
                        var e = g.all(
                            a.map(d, function (a) {
                                return b._validateConstraint(f, a);
                            })
                        );
                        return k.push(e), "rejected" === e.state() ? !1 : void 0;
                    }),
                    g.all(k)
                );
            }
        },
        _validateConstraint: function (b, c) {
            var d = this,
                e = c.validate(b, this);
            return (
                !1 === e && (e = a.Deferred().reject()),
                g.all([e]).fail(function (a) {
                    d.validationResult instanceof Array || (d.validationResult = []), d.validationResult.push({ assert: c, errorMessage: "string" == typeof a && a });
                })
            );
        },
        getValue: function () {
            var a;
            return (
                (a = "function" == typeof this.options.value ? this.options.value(this) : "undefined" != typeof this.options.value ? this.options.value : this.$element.val()),
                "undefined" == typeof a || null === a ? "" : this._handleWhitespace(a)
            );
        },
        reset: function () {
            return this._resetUI(), this._trigger("reset");
        },
        destroy: function () {
            this._destroyUI(), this.$element.removeData("Parsley"), this.$element.removeData("FieldMultiple"), this._trigger("destroy");
        },
        refreshConstraints: function () {
            return this.actualizeOptions()._bindConstraints();
        },
        addConstraint: function (a, b, c, d) {
            if (window.Parsley._validatorRegistry.validators[a]) {
                var e = new w(this, a, b, c, d);
                "undefined" !== this.constraintsByName[e.name] && this.removeConstraint(e.name), this.constraints.push(e), (this.constraintsByName[e.name] = e);
            }
            return this;
        },
        removeConstraint: function (a) {
            for (var b = 0; b < this.constraints.length; b++)
                if (a === this.constraints[b].name) {
                    this.constraints.splice(b, 1);
                    break;
                }
            return delete this.constraintsByName[a], this;
        },
        updateConstraint: function (a, b, c) {
            return this.removeConstraint(a).addConstraint(a, b, c);
        },
        _bindConstraints: function () {
            for (var a = [], b = {}, c = 0; c < this.constraints.length; c++) !1 === this.constraints[c].isDomConstraint && (a.push(this.constraints[c]), (b[this.constraints[c].name] = this.constraints[c]));
            (this.constraints = a), (this.constraintsByName = b);
            for (var d in this.options) this.addConstraint(d, this.options[d], void 0, !0);
            return this._bindHtml5Constraints();
        },
        _bindHtml5Constraints: function () {
            null !== this.element.getAttribute("required") && this.addConstraint("required", !0, void 0, !0), null !== this.element.getAttribute("pattern") && this.addConstraint("pattern", this.element.getAttribute("pattern"), void 0, !0);
            var a = this.element.getAttribute("min"),
                b = this.element.getAttribute("max");
            null !== a && null !== b ? this.addConstraint("range", [a, b], void 0, !0) : null !== a ? this.addConstraint("min", a, void 0, !0) : null !== b && this.addConstraint("max", b, void 0, !0),
                null !== this.element.getAttribute("minlength") && null !== this.element.getAttribute("maxlength")
                    ? this.addConstraint("length", [this.element.getAttribute("minlength"), this.element.getAttribute("maxlength")], void 0, !0)
                    : null !== this.element.getAttribute("minlength")
                    ? this.addConstraint("minlength", this.element.getAttribute("minlength"), void 0, !0)
                    : null !== this.element.getAttribute("maxlength") && this.addConstraint("maxlength", this.element.getAttribute("maxlength"), void 0, !0);
            var c = this.element.type;
            return "number" === c
                ? this.addConstraint("type", ["number", { step: this.element.getAttribute("step") || "1", base: a || this.element.getAttribute("value") }], void 0, !0)
                : /^(email|url|range|date)$/i.test(c)
                ? this.addConstraint("type", c, void 0, !0)
                : this;
        },
        _isRequired: function () {
            return "undefined" == typeof this.constraintsByName.required ? !1 : !1 !== this.constraintsByName.required.requirements;
        },
        _trigger: function (a) {
            return this.trigger("field:" + a);
        },
        _handleWhitespace: function (a) {
            return (
                !0 === this.options.trimValue && g.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'),
                "squish" === this.options.whitespace && (a = a.replace(/\s{2,}/g, " ")),
                ("trim" === this.options.whitespace || "squish" === this.options.whitespace || !0 === this.options.trimValue) && (a = g.trimString(a)),
                a
            );
        },
        _isDateInput: function () {
            var a = this.constraintsByName.type;
            return a && "date" === a.requirements;
        },
        _getGroupedConstraints: function () {
            if (!1 === this.options.priorityEnabled) return [this.constraints];
            for (var a = [], b = {}, c = 0; c < this.constraints.length; c++) {
                var d = this.constraints[c].priority;
                b[d] || a.push((b[d] = [])), b[d].push(this.constraints[c]);
            }
            return (
                a.sort(function (a, b) {
                    return b[0].priority - a[0].priority;
                }),
                a
            );
        },
    };
    var A = y,
        B = function () {
            this.__class__ = "FieldMultiple";
        };
    B.prototype = {
        addElement: function (a) {
            return this.$elements.push(a), this;
        },
        refreshConstraints: function () {
            var b;
            if (((this.constraints = []), "SELECT" === this.element.nodeName)) return this.actualizeOptions()._bindConstraints(), this;
            for (var c = 0; c < this.$elements.length; c++)
                if (a("html").has(this.$elements[c]).length) {
                    b = this.$elements[c].data("FieldMultiple").refreshConstraints().constraints;
                    for (var d = 0; d < b.length; d++) this.addConstraint(b[d].name, b[d].requirements, b[d].priority, b[d].isDomConstraint);
                } else this.$elements.splice(c, 1);
            return this;
        },
        getValue: function () {
            if ("function" == typeof this.options.value) return this.options.value(this);
            if ("undefined" != typeof this.options.value) return this.options.value;
            if ("INPUT" === this.element.nodeName) {
                if ("radio" === this.element.type) return this._findRelated().filter(":checked").val() || "";
                if ("checkbox" === this.element.type) {
                    var b = [];
                    return (
                        this._findRelated()
                            .filter(":checked")
                            .each(function () {
                                b.push(a(this).val());
                            }),
                        b
                    );
                }
            }
            return "SELECT" === this.element.nodeName && null === this.$element.val() ? [] : this.$element.val();
        },
        _init: function () {
            return (this.$elements = [this.$element]), this;
        },
    };
    var C = function (b, c, d) {
        (this.element = b), (this.$element = a(b));
        var e = this.$element.data("Parsley");
        if (e) return "undefined" != typeof d && e.parent === window.Parsley && ((e.parent = d), e._resetOptions(e.options)), "object" == typeof c && _extends(e.options, c), e;
        if (!this.$element.length) throw new Error("You must bind Parsley on an existing element.");
        if ("undefined" != typeof d && "Form" !== d.__class__) throw new Error("Parent instance must be a Form instance");
        return (this.parent = d || window.Parsley), this.init(c);
    };
    C.prototype = {
        init: function (a) {
            return (
                (this.__class__ = "Parsley"),
                (this.__version__ = "2.7.2"),
                (this.__id__ = g.generateID()),
                this._resetOptions(a),
                "FORM" === this.element.nodeName || (g.checkAttr(this.element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs))
                    ? this.bind("parsleyForm")
                    : this.isMultiple()
                    ? this.handleMultiple()
                    : this.bind("parsleyField")
            );
        },
        isMultiple: function () {
            return "radio" === this.element.type || "checkbox" === this.element.type || ("SELECT" === this.element.nodeName && null !== this.element.getAttribute("multiple"));
        },
        handleMultiple: function () {
            var b,
                c,
                d = this;
            if (((this.options.multiple = this.options.multiple || (b = this.element.getAttribute("name")) || this.element.getAttribute("id")), "SELECT" === this.element.nodeName && null !== this.element.getAttribute("multiple")))
                return (this.options.multiple = this.options.multiple || this.__id__), this.bind("parsleyFieldMultiple");
            if (!this.options.multiple) return g.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
            (this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, "")),
                b &&
                    a('input[name="' + b + '"]').each(function (a, b) {
                        ("radio" === b.type || "checkbox" === b.type) && b.setAttribute(d.options.namespace + "multiple", d.options.multiple);
                    });
            for (var e = this._findRelated(), f = 0; f < e.length; f++)
                if (((c = a(e.get(f)).data("Parsley")), "undefined" != typeof c)) {
                    this.$element.data("FieldMultiple") || c.addElement(this.$element);
                    break;
                }
            return this.bind("parsleyField", !0), c || this.bind("parsleyFieldMultiple");
        },
        bind: function (b, c) {
            var d;
            switch (b) {
                case "parsleyForm":
                    d = a.extend(new u(this.element, this.domOptions, this.options), new i(), window.ParsleyExtend)._bindFields();
                    break;
                case "parsleyField":
                    d = a.extend(new A(this.element, this.domOptions, this.options, this.parent), new i(), window.ParsleyExtend);
                    break;
                case "parsleyFieldMultiple":
                    d = a.extend(new A(this.element, this.domOptions, this.options, this.parent), new B(), new i(), window.ParsleyExtend)._init();
                    break;
                default:
                    throw new Error(b + "is not a supported Parsley type");
            }
            return (
                this.options.multiple && g.setAttr(this.element, this.options.namespace, "multiple", this.options.multiple),
                "undefined" != typeof c ? (this.$element.data("FieldMultiple", d), d) : (this.$element.data("Parsley", d), d._actualizeTriggers(), d._trigger("init"), d)
            );
        },
    };
    var D = a.fn.jquery.split(".");
    if (parseInt(D[0]) <= 1 && parseInt(D[1]) < 8) throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
    D.forEach || g.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");
    var E = _extends(new i(), { element: document, $element: a(document), actualizeOptions: null, _resetOptions: null, Factory: C, version: "2.7.2" });
    _extends(A.prototype, s.Field, i.prototype),
        _extends(u.prototype, s.Form, i.prototype),
        _extends(C.prototype, i.prototype),
        (a.fn.parsley = a.fn.psly = function (b) {
            if (this.length > 1) {
                var c = [];
                return (
                    this.each(function () {
                        c.push(a(this).parsley(b));
                    }),
                    c
                );
            }
            return a(this).length ? new C(this[0], b) : void g.warn("You must bind Parsley on an existing element.");
        }),
        "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}),
        (E.options = _extends(g.objectCreate(h), window.ParsleyConfig)),
        (window.ParsleyConfig = E.options),
        (window.Parsley = window.psly = E),
        (E.Utils = g),
        (window.ParsleyUtils = {}),
        a.each(g, function (a, b) {
            "function" == typeof b &&
                (window.ParsleyUtils[a] = function () {
                    return g.warnOnce("Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead."), g[a].apply(g, arguments);
                });
        });
    var F = (window.Parsley._validatorRegistry = new m(window.ParsleyConfig.validators, window.ParsleyConfig.i18n));
    (window.ParsleyValidator = {}),
        a.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator".split(" "), function (a, b) {
            (window.Parsley[b] = function () {
                return F[b].apply(F, arguments);
            }),
                (window.ParsleyValidator[b] = function () {
                    var a;
                    return g.warnOnce("Accessing the method '" + b + "' through Validator is deprecated. Simply call 'window.Parsley." + b + "(...)'"), (a = window.Parsley)[b].apply(a, arguments);
                });
        }),
        (window.Parsley.UI = s),
        (window.ParsleyUI = {
            removeError: function (a, b, c) {
                var d = !0 !== c;
                return g.warnOnce("Accessing UI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."), a.removeError(b, { updateClass: d });
            },
            getErrorsMessages: function (a) {
                return g.warnOnce("Accessing UI is deprecated. Call 'getErrorsMessages' on the instance directly."), a.getErrorsMessages();
            },
        }),
        a.each("addError updateError".split(" "), function (a, b) {
            window.ParsleyUI[b] = function (a, c, d, e, f) {
                var h = !0 !== f;
                return g.warnOnce("Accessing UI is deprecated. Call '" + b + "' on the instance directly. Please comment in issue 1073 as to your need to call this method."), a[b](c, { message: d, assert: e, updateClass: h });
            };
        }),
        !1 !== window.ParsleyConfig.autoBind &&
            a(function () {
                a("[data-parsley-validate]").length && a("[data-parsley-validate]").parsley();
            });
    var G = a({}),
        H = function () {
            g.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley");
        },
        I = "parsley:";
    (a.listen = function (a, d) {
        var e;
        if ((H(), "object" == typeof arguments[1] && "function" == typeof arguments[2] && ((e = arguments[1]), (d = arguments[2])), "function" != typeof d)) throw new Error("Wrong parameters");
        window.Parsley.on(c(a), b(d, e));
    }),
        (a.listenTo = function (a, d, e) {
            if ((H(), !(a instanceof A || a instanceof u))) throw new Error("Must give Parsley instance");
            if ("string" != typeof d || "function" != typeof e) throw new Error("Wrong parameters");
            a.on(c(d), b(e));
        }),
        (a.unsubscribe = function (a, b) {
            if ((H(), "string" != typeof a || "function" != typeof b)) throw new Error("Wrong arguments");
            window.Parsley.off(c(a), b.parsleyAdaptedCallback);
        }),
        (a.unsubscribeTo = function (a, b) {
            if ((H(), !(a instanceof A || a instanceof u))) throw new Error("Must give Parsley instance");
            a.off(c(b));
        }),
        (a.unsubscribeAll = function (b) {
            H(),
                window.Parsley.off(c(b)),
                a("form,input,textarea,select").each(function () {
                    var d = a(this).data("Parsley");
                    d && d.off(c(b));
                });
        }),
        (a.emit = function (a, b) {
            var d;
            H();
            var e = b instanceof A || b instanceof u,
                f = Array.prototype.slice.call(arguments, e ? 2 : 1);
            f.unshift(c(a)), e || (b = window.Parsley), (d = b).trigger.apply(d, _toConsumableArray(f));
        });
    a.extend(!0, E, {
        asyncValidators: {
            default: {
                fn: function (a) {
                    return a.status >= 200 && a.status < 300;
                },
                url: !1,
            },
            reverse: {
                fn: function (a) {
                    return a.status < 200 || a.status >= 300;
                },
                url: !1,
            },
        },
        addAsyncValidator: function (a, b, c, d) {
            return (E.asyncValidators[a] = { fn: b, url: c || !1, options: d || {} }), this;
        },
    }),
        E.addValidator("remote", {
            requirementType: { "": "string", validator: "string", reverse: "boolean", options: "object" },
            validateString: function (b, c, d, e) {
                var f,
                    g,
                    h = {},
                    i = d.validator || (!0 === d.reverse ? "reverse" : "default");
                if ("undefined" == typeof E.asyncValidators[i]) throw new Error("Calling an undefined async validator: `" + i + "`");
                (c = E.asyncValidators[i].url || c), c.indexOf("{value}") > -1 ? (c = c.replace("{value}", encodeURIComponent(b))) : (h[e.element.getAttribute("name") || e.element.getAttribute("id")] = b);
                var j = a.extend(!0, d.options || {}, E.asyncValidators[i].options);
                (f = a.extend(!0, {}, { url: c, data: h, type: "GET" }, j)), e.trigger("field:ajaxoptions", e, f), (g = a.param(f)), "undefined" == typeof E._remoteCache && (E._remoteCache = {});
                var k = (E._remoteCache[g] = E._remoteCache[g] || a.ajax(f)),
                    l = function () {
                        var b = E.asyncValidators[i].fn.call(e, k, c, d);
                        return b || (b = a.Deferred().reject()), a.when(b);
                    };
                return k.then(l, l);
            },
            priority: -1,
        }),
        E.on("form:submit", function () {
            E._remoteCache = {};
        }),
        (i.prototype.addAsyncValidator = function () {
            return g.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"), E.addAsyncValidator.apply(E, arguments);
        }),
        E.addMessages("en", {
            defaultMessage: "This value seems to be invalid.",
            type: {
                email: "This value should be a valid email.",
                url: "This value should be a valid url.",
                number: "This value should be a valid number.",
                integer: "This value should be a valid integer.",
                digits: "This value should be digits.",
                alphanum: "This value should be alphanumeric.",
            },
            notblank: "This value should not be blank.",
            required: "This value is required.",
            pattern: "This value seems to be invalid.",
            min: "This value should be greater than or equal to %s.",
            max: "This value should be lower than or equal to %s.",
            range: "This value should be between %s and %s.",
            minlength: "This value is too short. It should have %s characters or more.",
            maxlength: "This value is too long. It should have %s characters or fewer.",
            length: "This value length is invalid. It should be between %s and %s characters long.",
            mincheck: "You must select at least %s choices.",
            maxcheck: "You must select %s choices or fewer.",
            check: "You must select between %s and %s choices.",
            equalto: "This value should be the same.",
        }),
        E.setLocale("en");
    var J = new d();
    J.install();
    var K = E;
    return K;
}),
    !(function (a) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? (module.exports = a(require("jquery"))) : a(jQuery);
    })(function (a) {
        "use strict";
        var b = window.Slick || {};
        (b = (function () {
            function b(b, d) {
                var e,
                    f = this;
                (f.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: a(b),
                    appendDots: a(b),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (b, c) {
                        return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1);
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: 0.35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3,
                }),
                    (f.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1,
                    }),
                    a.extend(f, f.initials),
                    (f.activeBreakpoint = null),
                    (f.animType = null),
                    (f.animProp = null),
                    (f.breakpoints = []),
                    (f.breakpointSettings = []),
                    (f.cssTransitions = !1),
                    (f.focussed = !1),
                    (f.interrupted = !1),
                    (f.hidden = "hidden"),
                    (f.paused = !0),
                    (f.positionProp = null),
                    (f.respondTo = null),
                    (f.rowCount = 1),
                    (f.shouldClick = !0),
                    (f.$slider = a(b)),
                    (f.$slidesCache = null),
                    (f.transformType = null),
                    (f.transitionType = null),
                    (f.visibilityChange = "visibilitychange"),
                    (f.windowWidth = 0),
                    (f.windowTimer = null),
                    (e = a(b).data("slick") || {}),
                    (f.options = a.extend({}, f.defaults, d, e)),
                    (f.currentSlide = f.options.initialSlide),
                    (f.originalSettings = f.options),
                    "undefined" != typeof document.mozHidden
                        ? ((f.hidden = "mozHidden"), (f.visibilityChange = "mozvisibilitychange"))
                        : "undefined" != typeof document.webkitHidden && ((f.hidden = "webkitHidden"), (f.visibilityChange = "webkitvisibilitychange")),
                    (f.autoPlay = a.proxy(f.autoPlay, f)),
                    (f.autoPlayClear = a.proxy(f.autoPlayClear, f)),
                    (f.autoPlayIterator = a.proxy(f.autoPlayIterator, f)),
                    (f.changeSlide = a.proxy(f.changeSlide, f)),
                    (f.clickHandler = a.proxy(f.clickHandler, f)),
                    (f.selectHandler = a.proxy(f.selectHandler, f)),
                    (f.setPosition = a.proxy(f.setPosition, f)),
                    (f.swipeHandler = a.proxy(f.swipeHandler, f)),
                    (f.dragHandler = a.proxy(f.dragHandler, f)),
                    (f.keyHandler = a.proxy(f.keyHandler, f)),
                    (f.instanceUid = c++),
                    (f.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                    f.registerBreakpoints(),
                    f.init(!0);
            }
            var c = 0;
            return b;
        })()),
            (b.prototype.activateADA = function () {
                var a = this;
                a.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
            }),
            (b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
                var e = this;
                if ("boolean" == typeof c) (d = c), (c = null);
                else if (0 > c || c >= e.slideCount) return !1;
                e.unload(),
                    "number" == typeof c
                        ? 0 === c && 0 === e.$slides.length
                            ? a(b).appendTo(e.$slideTrack)
                            : d
                            ? a(b).insertBefore(e.$slides.eq(c))
                            : a(b).insertAfter(e.$slides.eq(c))
                        : d === !0
                        ? a(b).prependTo(e.$slideTrack)
                        : a(b).appendTo(e.$slideTrack),
                    (e.$slides = e.$slideTrack.children(this.options.slide)),
                    e.$slideTrack.children(this.options.slide).detach(),
                    e.$slideTrack.append(e.$slides),
                    e.$slides.each(function (b, c) {
                        a(c).attr("data-slick-index", b);
                    }),
                    (e.$slidesCache = e.$slides),
                    e.reinit();
            }),
            (b.prototype.animateHeight = function () {
                var a = this;
                if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                    var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                    a.$list.animate({ height: b }, a.options.speed);
                }
            }),
            (b.prototype.animateSlide = function (b, c) {
                var d = {},
                    e = this;
                e.animateHeight(),
                    e.options.rtl === !0 && e.options.vertical === !1 && (b = -b),
                    e.transformsEnabled === !1
                        ? e.options.vertical === !1
                            ? e.$slideTrack.animate({ left: b }, e.options.speed, e.options.easing, c)
                            : e.$slideTrack.animate({ top: b }, e.options.speed, e.options.easing, c)
                        : e.cssTransitions === !1
                        ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft),
                          a({ animStart: e.currentLeft }).animate(
                              { animStart: b },
                              {
                                  duration: e.options.speed,
                                  easing: e.options.easing,
                                  step: function (a) {
                                      (a = Math.ceil(a)), e.options.vertical === !1 ? ((d[e.animType] = "translate(" + a + "px, 0px)"), e.$slideTrack.css(d)) : ((d[e.animType] = "translate(0px," + a + "px)"), e.$slideTrack.css(d));
                                  },
                                  complete: function () {
                                      c && c.call();
                                  },
                              }
                          ))
                        : (e.applyTransition(),
                          (b = Math.ceil(b)),
                          e.options.vertical === !1 ? (d[e.animType] = "translate3d(" + b + "px, 0px, 0px)") : (d[e.animType] = "translate3d(0px," + b + "px, 0px)"),
                          e.$slideTrack.css(d),
                          c &&
                              setTimeout(function () {
                                  e.disableTransition(), c.call();
                              }, e.options.speed));
            }),
            (b.prototype.getNavTarget = function () {
                var b = this,
                    c = b.options.asNavFor;
                return c && null !== c && (c = a(c).not(b.$slider)), c;
            }),
            (b.prototype.asNavFor = function (b) {
                var c = this,
                    d = c.getNavTarget();
                null !== d &&
                    "object" == typeof d &&
                    d.each(function () {
                        var c = a(this).slick("getSlick");
                        c.unslicked || c.slideHandler(b, !0);
                    });
            }),
            (b.prototype.applyTransition = function (a) {
                var b = this,
                    c = {};
                b.options.fade === !1 ? (c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase) : (c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase),
                    b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
            }),
            (b.prototype.autoPlay = function () {
                var a = this;
                a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
            }),
            (b.prototype.autoPlayClear = function () {
                var a = this;
                a.autoPlayTimer && clearInterval(a.autoPlayTimer);
            }),
            (b.prototype.autoPlayIterator = function () {
                var a = this,
                    b = a.currentSlide + a.options.slidesToScroll;
                a.paused ||
                    a.interrupted ||
                    a.focussed ||
                    (a.options.infinite === !1 &&
                        (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? (a.direction = 0) : 0 === a.direction && ((b = a.currentSlide - a.options.slidesToScroll), a.currentSlide - 1 === 0 && (a.direction = 1))),
                    a.slideHandler(b));
            }),
            (b.prototype.buildArrows = function () {
                var b = this;
                b.options.arrows === !0 &&
                    ((b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow")),
                    (b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow")),
                    b.slideCount > b.options.slidesToShow
                        ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows),
                          b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows),
                          b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                        : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
            }),
            (b.prototype.buildDots = function () {
                var b,
                    c,
                    d = this;
                if (d.options.dots === !0 && d.slideCount > d.options.slidesToShow) {
                    for (d.$slider.addClass("slick-dotted"), c = a("<ul />").addClass(d.options.dotsClass), b = 0; b <= d.getDotCount(); b += 1) c.append(a("<li />").append(d.options.customPaging.call(this, d, b)));
                    (d.$dots = c.appendTo(d.options.appendDots)), d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
                }
            }),
            (b.prototype.buildOut = function () {
                var b = this;
                (b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                    (b.slideCount = b.$slides.length),
                    b.$slides.each(function (b, c) {
                        a(c)
                            .attr("data-slick-index", b)
                            .data("originalStyling", a(c).attr("style") || "");
                    }),
                    b.$slider.addClass("slick-slider"),
                    (b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent()),
                    (b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent()),
                    b.$slideTrack.css("opacity", 0),
                    (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1),
                    a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
                    b.setupInfinite(),
                    b.buildArrows(),
                    b.buildDots(),
                    b.updateDots(),
                    b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0),
                    b.options.draggable === !0 && b.$list.addClass("draggable");
            }),
            (b.prototype.buildRows = function () {
                var a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h = this;
                if (((d = document.createDocumentFragment()), (f = h.$slider.children()), h.options.rows > 1)) {
                    for (g = h.options.slidesPerRow * h.options.rows, e = Math.ceil(f.length / g), a = 0; e > a; a++) {
                        var i = document.createElement("div");
                        for (b = 0; b < h.options.rows; b++) {
                            var j = document.createElement("div");
                            for (c = 0; c < h.options.slidesPerRow; c++) {
                                var k = a * g + (b * h.options.slidesPerRow + c);
                                f.get(k) && j.appendChild(f.get(k));
                            }
                            i.appendChild(j);
                        }
                        d.appendChild(i);
                    }
                    h.$slider.empty().append(d),
                        h.$slider
                            .children()
                            .children()
                            .children()
                            .css({ width: 100 / h.options.slidesPerRow + "%", display: "inline-block" });
                }
            }),
            (b.prototype.checkResponsive = function (b, c) {
                var d,
                    e,
                    f,
                    g = this,
                    h = !1,
                    i = g.$slider.width(),
                    j = window.innerWidth || a(window).width();
                if (("window" === g.respondTo ? (f = j) : "slider" === g.respondTo ? (f = i) : "min" === g.respondTo && (f = Math.min(j, i)), g.options.responsive && g.options.responsive.length && null !== g.options.responsive)) {
                    e = null;
                    for (d in g.breakpoints) g.breakpoints.hasOwnProperty(d) && (g.originalSettings.mobileFirst === !1 ? f < g.breakpoints[d] && (e = g.breakpoints[d]) : f > g.breakpoints[d] && (e = g.breakpoints[d]));
                    null !== e
                        ? null !== g.activeBreakpoint
                            ? (e !== g.activeBreakpoint || c) &&
                              ((g.activeBreakpoint = e),
                              "unslick" === g.breakpointSettings[e] ? g.unslick(e) : ((g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e])), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)),
                              (h = e))
                            : ((g.activeBreakpoint = e),
                              "unslick" === g.breakpointSettings[e] ? g.unslick(e) : ((g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e])), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)),
                              (h = e))
                        : null !== g.activeBreakpoint && ((g.activeBreakpoint = null), (g.options = g.originalSettings), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b), (h = e)),
                        b || h === !1 || g.$slider.trigger("breakpoint", [g, h]);
                }
            }),
            (b.prototype.changeSlide = function (b, c) {
                var d,
                    e,
                    f,
                    g = this,
                    h = a(b.currentTarget);
                switch ((h.is("a") && b.preventDefault(), h.is("li") || (h = h.closest("li")), (f = g.slideCount % g.options.slidesToScroll !== 0), (d = f ? 0 : (g.slideCount - g.currentSlide) % g.options.slidesToScroll), b.data.message)) {
                    case "previous":
                        (e = 0 === d ? g.options.slidesToScroll : g.options.slidesToShow - d), g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide - e, !1, c);
                        break;
                    case "next":
                        (e = 0 === d ? g.options.slidesToScroll : d), g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide + e, !1, c);
                        break;
                    case "index":
                        var i = 0 === b.data.index ? 0 : b.data.index || h.index() * g.options.slidesToScroll;
                        g.slideHandler(g.checkNavigable(i), !1, c), h.children().trigger("focus");
                        break;
                    default:
                        return;
                }
            }),
            (b.prototype.checkNavigable = function (a) {
                var b,
                    c,
                    d = this;
                if (((b = d.getNavigableIndexes()), (c = 0), a > b[b.length - 1])) a = b[b.length - 1];
                else
                    for (var e in b) {
                        if (a < b[e]) {
                            a = c;
                            break;
                        }
                        c = b[e];
                    }
                return a;
            }),
            (b.prototype.cleanUpEvents = function () {
                var b = this;
                b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)),
                    b.$slider.off("focus.slick blur.slick"),
                    b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)),
                    b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler),
                    b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler),
                    b.$list.off("touchend.slick mouseup.slick", b.swipeHandler),
                    b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler),
                    b.$list.off("click.slick", b.clickHandler),
                    a(document).off(b.visibilityChange, b.visibility),
                    b.cleanUpSlideEvents(),
                    b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler),
                    b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler),
                    a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange),
                    a(window).off("resize.slick.slick-" + b.instanceUid, b.resize),
                    a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault),
                    a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition),
                    a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
            }),
            (b.prototype.cleanUpSlideEvents = function () {
                var b = this;
                b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
            }),
            (b.prototype.cleanUpRows = function () {
                var a,
                    b = this;
                b.options.rows > 1 && ((a = b.$slides.children().children()), a.removeAttr("style"), b.$slider.empty().append(a));
            }),
            (b.prototype.clickHandler = function (a) {
                var b = this;
                b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
            }),
            (b.prototype.destroy = function (b) {
                var c = this;
                c.autoPlayClear(),
                    (c.touchObject = {}),
                    c.cleanUpEvents(),
                    a(".slick-cloned", c.$slider).detach(),
                    c.$dots && c.$dots.remove(),
                    c.$prevArrow &&
                        c.$prevArrow.length &&
                        (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()),
                    c.$nextArrow &&
                        c.$nextArrow.length &&
                        (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()),
                    c.$slides &&
                        (c.$slides
                            .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                            .removeAttr("aria-hidden")
                            .removeAttr("data-slick-index")
                            .each(function () {
                                a(this).attr("style", a(this).data("originalStyling"));
                            }),
                        c.$slideTrack.children(this.options.slide).detach(),
                        c.$slideTrack.detach(),
                        c.$list.detach(),
                        c.$slider.append(c.$slides)),
                    c.cleanUpRows(),
                    c.$slider.removeClass("slick-slider"),
                    c.$slider.removeClass("slick-initialized"),
                    c.$slider.removeClass("slick-dotted"),
                    (c.unslicked = !0),
                    b || c.$slider.trigger("destroy", [c]);
            }),
            (b.prototype.disableTransition = function (a) {
                var b = this,
                    c = {};
                (c[b.transitionType] = ""), b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
            }),
            (b.prototype.fadeSlide = function (a, b) {
                var c = this;
                c.cssTransitions === !1
                    ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }), c.$slides.eq(a).animate({ opacity: 1 }, c.options.speed, c.options.easing, b))
                    : (c.applyTransition(a),
                      c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }),
                      b &&
                          setTimeout(function () {
                              c.disableTransition(a), b.call();
                          }, c.options.speed));
            }),
            (b.prototype.fadeSlideOut = function (a) {
                var b = this;
                b.cssTransitions === !1 ? b.$slides.eq(a).animate({ opacity: 0, zIndex: b.options.zIndex - 2 }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
            }),
            (b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
                var b = this;
                null !== a && ((b.$slidesCache = b.$slides), b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
            }),
            (b.prototype.focusHandler = function () {
                var b = this;
                b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
                    c.stopImmediatePropagation();
                    var d = a(this);
                    setTimeout(function () {
                        b.options.pauseOnFocus && ((b.focussed = d.is(":focus")), b.autoPlay());
                    }, 0);
                });
            }),
            (b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
                var a = this;
                return a.currentSlide;
            }),
            (b.prototype.getDotCount = function () {
                var a = this,
                    b = 0,
                    c = 0,
                    d = 0;
                if (a.options.infinite === !0) for (; b < a.slideCount; ) ++d, (b = c + a.options.slidesToScroll), (c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow);
                else if (a.options.centerMode === !0) d = a.slideCount;
                else if (a.options.asNavFor) for (; b < a.slideCount; ) ++d, (b = c + a.options.slidesToScroll), (c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow);
                else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
                return d - 1;
            }),
            (b.prototype.getLeft = function (a) {
                var b,
                    c,
                    d,
                    e = this,
                    f = 0;
                return (
                    (e.slideOffset = 0),
                    (c = e.$slides.first().outerHeight(!0)),
                    e.options.infinite === !0
                        ? (e.slideCount > e.options.slidesToShow && ((e.slideOffset = e.slideWidth * e.options.slidesToShow * -1), (f = c * e.options.slidesToShow * -1)),
                          e.slideCount % e.options.slidesToScroll !== 0 &&
                              a + e.options.slidesToScroll > e.slideCount &&
                              e.slideCount > e.options.slidesToShow &&
                              (a > e.slideCount
                                  ? ((e.slideOffset = (e.options.slidesToShow - (a - e.slideCount)) * e.slideWidth * -1), (f = (e.options.slidesToShow - (a - e.slideCount)) * c * -1))
                                  : ((e.slideOffset = (e.slideCount % e.options.slidesToScroll) * e.slideWidth * -1), (f = (e.slideCount % e.options.slidesToScroll) * c * -1))))
                        : a + e.options.slidesToShow > e.slideCount && ((e.slideOffset = (a + e.options.slidesToShow - e.slideCount) * e.slideWidth), (f = (a + e.options.slidesToShow - e.slideCount) * c)),
                    e.slideCount <= e.options.slidesToShow && ((e.slideOffset = 0), (f = 0)),
                    e.options.centerMode === !0 && e.options.infinite === !0
                        ? (e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2) - e.slideWidth)
                        : e.options.centerMode === !0 && ((e.slideOffset = 0), (e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2))),
                    (b = e.options.vertical === !1 ? a * e.slideWidth * -1 + e.slideOffset : a * c * -1 + f),
                    e.options.variableWidth === !0 &&
                        ((d = e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow)),
                        (b = e.options.rtl === !0 ? (d[0] ? -1 * (e.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0) : d[0] ? -1 * d[0].offsetLeft : 0),
                        e.options.centerMode === !0 &&
                            ((d = e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow + 1)),
                            (b = e.options.rtl === !0 ? (d[0] ? -1 * (e.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0) : d[0] ? -1 * d[0].offsetLeft : 0),
                            (b += (e.$list.width() - d.outerWidth()) / 2))),
                    b
                );
            }),
            (b.prototype.getOption = b.prototype.slickGetOption = function (a) {
                var b = this;
                return b.options[a];
            }),
            (b.prototype.getNavigableIndexes = function () {
                var a,
                    b = this,
                    c = 0,
                    d = 0,
                    e = [];
                for (b.options.infinite === !1 ? (a = b.slideCount) : ((c = -1 * b.options.slidesToScroll), (d = -1 * b.options.slidesToScroll), (a = 2 * b.slideCount)); a > c; )
                    e.push(c), (c = d + b.options.slidesToScroll), (d += b.options.slidesToScroll <= b.options.slidesToShow ? b.options.slidesToScroll : b.options.slidesToShow);
                return e;
            }),
            (b.prototype.getSlick = function () {
                return this;
            }),
            (b.prototype.getSlideCount = function () {
                var b,
                    c,
                    d,
                    e = this;
                return (
                    (d = e.options.centerMode === !0 ? e.slideWidth * Math.floor(e.options.slidesToShow / 2) : 0),
                    e.options.swipeToSlide === !0
                        ? (e.$slideTrack.find(".slick-slide").each(function (b, f) {
                              return f.offsetLeft - d + a(f).outerWidth() / 2 > -1 * e.swipeLeft ? ((c = f), !1) : void 0;
                          }),
                          (b = Math.abs(a(c).attr("data-slick-index") - e.currentSlide) || 1))
                        : e.options.slidesToScroll
                );
            }),
            (b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
                var c = this;
                c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
            }),
            (b.prototype.init = function (b) {
                var c = this;
                a(c.$slider).hasClass("slick-initialized") ||
                    (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()),
                    b && c.$slider.trigger("init", [c]),
                    c.options.accessibility === !0 && c.initADA(),
                    c.options.autoplay && ((c.paused = !1), c.autoPlay());
            }),
            (b.prototype.initADA = function () {
                var b = this;
                b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
                    b.$slideTrack.attr("role", "listbox"),
                    b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
                        a(this).attr({ role: "option", "aria-describedby": "slick-slide" + b.instanceUid + c });
                    }),
                    null !== b.$dots &&
                        b.$dots
                            .attr("role", "tablist")
                            .find("li")
                            .each(function (c) {
                                a(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + b.instanceUid + c, id: "slick-slide" + b.instanceUid + c });
                            })
                            .first()
                            .attr("aria-selected", "true")
                            .end()
                            .find("button")
                            .attr("role", "button")
                            .end()
                            .closest("div")
                            .attr("role", "toolbar"),
                    b.activateADA();
            }),
            (b.prototype.initArrowEvents = function () {
                var a = this;
                a.options.arrows === !0 &&
                    a.slideCount > a.options.slidesToShow &&
                    (a.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, a.changeSlide));
            }),
            (b.prototype.initDotEvents = function () {
                var b = this;
                b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide),
                    b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
            }),
            (b.prototype.initSlideEvents = function () {
                var b = this;
                b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
            }),
            (b.prototype.initializeEvents = function () {
                var b = this;
                b.initArrowEvents(),
                    b.initDotEvents(),
                    b.initSlideEvents(),
                    b.$list.on("touchstart.slick mousedown.slick", { action: "start" }, b.swipeHandler),
                    b.$list.on("touchmove.slick mousemove.slick", { action: "move" }, b.swipeHandler),
                    b.$list.on("touchend.slick mouseup.slick", { action: "end" }, b.swipeHandler),
                    b.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, b.swipeHandler),
                    b.$list.on("click.slick", b.clickHandler),
                    a(document).on(b.visibilityChange, a.proxy(b.visibility, b)),
                    b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler),
                    b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler),
                    a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)),
                    a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)),
                    a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault),
                    a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
                    a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
            }),
            (b.prototype.initUI = function () {
                var a = this;
                a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show();
            }),
            (b.prototype.keyHandler = function (a) {
                var b = this;
                a.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                    (37 === a.keyCode && b.options.accessibility === !0
                        ? b.changeSlide({ data: { message: b.options.rtl === !0 ? "next" : "previous" } })
                        : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({ data: { message: b.options.rtl === !0 ? "previous" : "next" } }));
            }),
            (b.prototype.lazyLoad = function () {
                function b(b) {
                    a("img[data-lazy]", b).each(function () {
                        var b = a(this),
                            c = a(this).attr("data-lazy"),
                            d = document.createElement("img");
                        (d.onload = function () {
                            b.animate({ opacity: 0 }, 100, function () {
                                b.attr("src", c).animate({ opacity: 1 }, 200, function () {
                                    b.removeAttr("data-lazy").removeClass("slick-loading");
                                }),
                                    g.$slider.trigger("lazyLoaded", [g, b, c]);
                            });
                        }),
                            (d.onerror = function () {
                                b.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), g.$slider.trigger("lazyLoadError", [g, b, c]);
                            }),
                            (d.src = c);
                    });
                }
                var c,
                    d,
                    e,
                    f,
                    g = this;
                g.options.centerMode === !0
                    ? g.options.infinite === !0
                        ? ((e = g.currentSlide + (g.options.slidesToShow / 2 + 1)), (f = e + g.options.slidesToShow + 2))
                        : ((e = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1))), (f = 2 + (g.options.slidesToShow / 2 + 1) + g.currentSlide))
                    : ((e = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide), (f = Math.ceil(e + g.options.slidesToShow)), g.options.fade === !0 && (e > 0 && e--, f <= g.slideCount && f++)),
                    (c = g.$slider.find(".slick-slide").slice(e, f)),
                    b(c),
                    g.slideCount <= g.options.slidesToShow
                        ? ((d = g.$slider.find(".slick-slide")), b(d))
                        : g.currentSlide >= g.slideCount - g.options.slidesToShow
                        ? ((d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow)), b(d))
                        : 0 === g.currentSlide && ((d = g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow)), b(d));
            }),
            (b.prototype.loadSlider = function () {
                var a = this;
                a.setPosition(), a.$slideTrack.css({ opacity: 1 }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
            }),
            (b.prototype.next = b.prototype.slickNext = function () {
                var a = this;
                a.changeSlide({ data: { message: "next" } });
            }),
            (b.prototype.orientationChange = function () {
                var a = this;
                a.checkResponsive(), a.setPosition();
            }),
            (b.prototype.pause = b.prototype.slickPause = function () {
                var a = this;
                a.autoPlayClear(), (a.paused = !0);
            }),
            (b.prototype.play = b.prototype.slickPlay = function () {
                var a = this;
                a.autoPlay(), (a.options.autoplay = !0), (a.paused = !1), (a.focussed = !1), (a.interrupted = !1);
            }),
            (b.prototype.postSlide = function (a) {
                var b = this;
                b.unslicked || (b.$slider.trigger("afterChange", [b, a]), (b.animating = !1), b.setPosition(), (b.swipeLeft = null), b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA());
            }),
            (b.prototype.prev = b.prototype.slickPrev = function () {
                var a = this;
                a.changeSlide({ data: { message: "previous" } });
            }),
            (b.prototype.preventDefault = function (a) {
                a.preventDefault();
            }),
            (b.prototype.progressiveLazyLoad = function (b) {
                b = b || 1;
                var c,
                    d,
                    e,
                    f = this,
                    g = a("img[data-lazy]", f.$slider);
                g.length
                    ? ((c = g.first()),
                      (d = c.attr("data-lazy")),
                      (e = document.createElement("img")),
                      (e.onload = function () {
                          c.attr("src", d).removeAttr("data-lazy").removeClass("slick-loading"), f.options.adaptiveHeight === !0 && f.setPosition(), f.$slider.trigger("lazyLoaded", [f, c, d]), f.progressiveLazyLoad();
                      }),
                      (e.onerror = function () {
                          3 > b
                              ? setTimeout(function () {
                                    f.progressiveLazyLoad(b + 1);
                                }, 500)
                              : (c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), f.$slider.trigger("lazyLoadError", [f, c, d]), f.progressiveLazyLoad());
                      }),
                      (e.src = d))
                    : f.$slider.trigger("allImagesLoaded", [f]);
            }),
            (b.prototype.refresh = function (b) {
                var c,
                    d,
                    e = this;
                (d = e.slideCount - e.options.slidesToShow),
                    !e.options.infinite && e.currentSlide > d && (e.currentSlide = d),
                    e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                    (c = e.currentSlide),
                    e.destroy(!0),
                    a.extend(e, e.initials, { currentSlide: c }),
                    e.init(),
                    b || e.changeSlide({ data: { message: "index", index: c } }, !1);
            }),
            (b.prototype.registerBreakpoints = function () {
                var b,
                    c,
                    d,
                    e = this,
                    f = e.options.responsive || null;
                if ("array" === a.type(f) && f.length) {
                    e.respondTo = e.options.respondTo || "window";
                    for (b in f)
                        if (((d = e.breakpoints.length - 1), (c = f[b].breakpoint), f.hasOwnProperty(b))) {
                            for (; d >= 0; ) e.breakpoints[d] && e.breakpoints[d] === c && e.breakpoints.splice(d, 1), d--;
                            e.breakpoints.push(c), (e.breakpointSettings[c] = f[b].settings);
                        }
                    e.breakpoints.sort(function (a, b) {
                        return e.options.mobileFirst ? a - b : b - a;
                    });
                }
            }),
            (b.prototype.reinit = function () {
                var b = this;
                (b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide")),
                    (b.slideCount = b.$slides.length),
                    b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
                    b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
                    b.registerBreakpoints(),
                    b.setProps(),
                    b.setupInfinite(),
                    b.buildArrows(),
                    b.updateArrows(),
                    b.initArrowEvents(),
                    b.buildDots(),
                    b.updateDots(),
                    b.initDotEvents(),
                    b.cleanUpSlideEvents(),
                    b.initSlideEvents(),
                    b.checkResponsive(!1, !0),
                    b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler),
                    b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0),
                    b.setPosition(),
                    b.focusHandler(),
                    (b.paused = !b.options.autoplay),
                    b.autoPlay(),
                    b.$slider.trigger("reInit", [b]);
            }),
            (b.prototype.resize = function () {
                var b = this;
                a(window).width() !== b.windowWidth &&
                    (clearTimeout(b.windowDelay),
                    (b.windowDelay = window.setTimeout(function () {
                        (b.windowWidth = a(window).width()), b.checkResponsive(), b.unslicked || b.setPosition();
                    }, 50)));
            }),
            (b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
                var d = this;
                return (
                    "boolean" == typeof a ? ((b = a), (a = b === !0 ? 0 : d.slideCount - 1)) : (a = b === !0 ? --a : a),
                    d.slideCount < 1 || 0 > a || a > d.slideCount - 1
                        ? !1
                        : (d.unload(),
                          c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(),
                          (d.$slides = d.$slideTrack.children(this.options.slide)),
                          d.$slideTrack.children(this.options.slide).detach(),
                          d.$slideTrack.append(d.$slides),
                          (d.$slidesCache = d.$slides),
                          void d.reinit())
                );
            }),
            (b.prototype.setCSS = function (a) {
                var b,
                    c,
                    d = this,
                    e = {};
                d.options.rtl === !0 && (a = -a),
                    (b = "left" == d.positionProp ? Math.ceil(a) + "px" : "0px"),
                    (c = "top" == d.positionProp ? Math.ceil(a) + "px" : "0px"),
                    (e[d.positionProp] = a),
                    d.transformsEnabled === !1
                        ? d.$slideTrack.css(e)
                        : ((e = {}), d.cssTransitions === !1 ? ((e[d.animType] = "translate(" + b + ", " + c + ")"), d.$slideTrack.css(e)) : ((e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)"), d.$slideTrack.css(e)));
            }),
            (b.prototype.setDimensions = function () {
                var a = this;
                a.options.vertical === !1
                    ? a.options.centerMode === !0 && a.$list.css({ padding: "0px " + a.options.centerPadding })
                    : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({ padding: a.options.centerPadding + " 0px" })),
                    (a.listWidth = a.$list.width()),
                    (a.listHeight = a.$list.height()),
                    a.options.vertical === !1 && a.options.variableWidth === !1
                        ? ((a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow)), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length)))
                        : a.options.variableWidth === !0
                        ? a.$slideTrack.width(5e3 * a.slideCount)
                        : ((a.slideWidth = Math.ceil(a.listWidth)), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
                var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
                a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
            }),
            (b.prototype.setFade = function () {
                var b,
                    c = this;
                c.$slides.each(function (d, e) {
                    (b = c.slideWidth * d * -1),
                        c.options.rtl === !0 ? a(e).css({ position: "relative", right: b, top: 0, zIndex: c.options.zIndex - 2, opacity: 0 }) : a(e).css({ position: "relative", left: b, top: 0, zIndex: c.options.zIndex - 2, opacity: 0 });
                }),
                    c.$slides.eq(c.currentSlide).css({ zIndex: c.options.zIndex - 1, opacity: 1 });
            }),
            (b.prototype.setHeight = function () {
                var a = this;
                if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                    var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                    a.$list.css("height", b);
                }
            }),
            (b.prototype.setOption = b.prototype.slickSetOption = function () {
                var b,
                    c,
                    d,
                    e,
                    f,
                    g = this,
                    h = !1;
                if (
                    ("object" === a.type(arguments[0])
                        ? ((d = arguments[0]), (h = arguments[1]), (f = "multiple"))
                        : "string" === a.type(arguments[0]) &&
                          ((d = arguments[0]), (e = arguments[1]), (h = arguments[2]), "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? (f = "responsive") : "undefined" != typeof arguments[1] && (f = "single")),
                    "single" === f)
                )
                    g.options[d] = e;
                else if ("multiple" === f)
                    a.each(d, function (a, b) {
                        g.options[a] = b;
                    });
                else if ("responsive" === f)
                    for (c in e)
                        if ("array" !== a.type(g.options.responsive)) g.options.responsive = [e[c]];
                        else {
                            for (b = g.options.responsive.length - 1; b >= 0; ) g.options.responsive[b].breakpoint === e[c].breakpoint && g.options.responsive.splice(b, 1), b--;
                            g.options.responsive.push(e[c]);
                        }
                h && (g.unload(), g.reinit());
            }),
            (b.prototype.setPosition = function () {
                var a = this;
                a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a]);
            }),
            (b.prototype.setProps = function () {
                var a = this,
                    b = document.body.style;
                (a.positionProp = a.options.vertical === !0 ? "top" : "left"),
                    "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"),
                    (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0),
                    a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : (a.options.zIndex = a.defaults.zIndex)),
                    void 0 !== b.OTransform && ((a.animType = "OTransform"), (a.transformType = "-o-transform"), (a.transitionType = "OTransition"), void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
                    void 0 !== b.MozTransform &&
                        ((a.animType = "MozTransform"), (a.transformType = "-moz-transform"), (a.transitionType = "MozTransition"), void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)),
                    void 0 !== b.webkitTransform &&
                        ((a.animType = "webkitTransform"), (a.transformType = "-webkit-transform"), (a.transitionType = "webkitTransition"), void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
                    void 0 !== b.msTransform && ((a.animType = "msTransform"), (a.transformType = "-ms-transform"), (a.transitionType = "msTransition"), void 0 === b.msTransform && (a.animType = !1)),
                    void 0 !== b.transform && a.animType !== !1 && ((a.animType = "transform"), (a.transformType = "transform"), (a.transitionType = "transition")),
                    (a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1);
            }),
            (b.prototype.setSlideClasses = function (a) {
                var b,
                    c,
                    d,
                    e,
                    f = this;
                (c = f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")),
                    f.$slides.eq(a).addClass("slick-current"),
                    f.options.centerMode === !0
                        ? ((b = Math.floor(f.options.slidesToShow / 2)),
                          f.options.infinite === !0 &&
                              (a >= b && a <= f.slideCount - 1 - b
                                  ? f.$slides
                                        .slice(a - b, a + b + 1)
                                        .addClass("slick-active")
                                        .attr("aria-hidden", "false")
                                  : ((d = f.options.slidesToShow + a),
                                    c
                                        .slice(d - b + 1, d + b + 2)
                                        .addClass("slick-active")
                                        .attr("aria-hidden", "false")),
                              0 === a ? c.eq(c.length - 1 - f.options.slidesToShow).addClass("slick-center") : a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")),
                          f.$slides.eq(a).addClass("slick-center"))
                        : a >= 0 && a <= f.slideCount - f.options.slidesToShow
                        ? f.$slides
                              .slice(a, a + f.options.slidesToShow)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                        : c.length <= f.options.slidesToShow
                        ? c.addClass("slick-active").attr("aria-hidden", "false")
                        : ((e = f.slideCount % f.options.slidesToShow),
                          (d = f.options.infinite === !0 ? f.options.slidesToShow + a : a),
                          f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow
                              ? c
                                    .slice(d - (f.options.slidesToShow - e), d + e)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false")
                              : c
                                    .slice(d, d + f.options.slidesToShow)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false")),
                    "ondemand" === f.options.lazyLoad && f.lazyLoad();
            }),
            (b.prototype.setupInfinite = function () {
                var b,
                    c,
                    d,
                    e = this;
                if ((e.options.fade === !0 && (e.options.centerMode = !1), e.options.infinite === !0 && e.options.fade === !1 && ((c = null), e.slideCount > e.options.slidesToShow))) {
                    for (d = e.options.centerMode === !0 ? e.options.slidesToShow + 1 : e.options.slidesToShow, b = e.slideCount; b > e.slideCount - d; b -= 1)
                        (c = b - 1),
                            a(e.$slides[c])
                                .clone(!0)
                                .attr("id", "")
                                .attr("data-slick-index", c - e.slideCount)
                                .prependTo(e.$slideTrack)
                                .addClass("slick-cloned");
                    for (b = 0; d > b; b += 1)
                        (c = b),
                            a(e.$slides[c])
                                .clone(!0)
                                .attr("id", "")
                                .attr("data-slick-index", c + e.slideCount)
                                .appendTo(e.$slideTrack)
                                .addClass("slick-cloned");
                    e.$slideTrack
                        .find(".slick-cloned")
                        .find("[id]")
                        .each(function () {
                            a(this).attr("id", "");
                        });
                }
            }),
            (b.prototype.interrupt = function (a) {
                var b = this;
                a || b.autoPlay(), (b.interrupted = a);
            }),
            (b.prototype.selectHandler = function (b) {
                var c = this,
                    d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
                    e = parseInt(d.attr("data-slick-index"));
                return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e);
            }),
            (b.prototype.slideHandler = function (a, b, c) {
                var d,
                    e,
                    f,
                    g,
                    h,
                    i = null,
                    j = this;
                return (
                    (b = b || !1),
                    (j.animating === !0 && j.options.waitForAnimate === !0) || (j.options.fade === !0 && j.currentSlide === a) || j.slideCount <= j.options.slidesToShow
                        ? void 0
                        : (b === !1 && j.asNavFor(a),
                          (d = a),
                          (i = j.getLeft(d)),
                          (g = j.getLeft(j.currentSlide)),
                          (j.currentLeft = null === j.swipeLeft ? g : j.swipeLeft),
                          j.options.infinite === !1 && j.options.centerMode === !1 && (0 > a || a > j.getDotCount() * j.options.slidesToScroll)
                              ? void (
                                    j.options.fade === !1 &&
                                    ((d = j.currentSlide),
                                    c !== !0
                                        ? j.animateSlide(g, function () {
                                              j.postSlide(d);
                                          })
                                        : j.postSlide(d))
                                )
                              : j.options.infinite === !1 && j.options.centerMode === !0 && (0 > a || a > j.slideCount - j.options.slidesToScroll)
                              ? void (
                                    j.options.fade === !1 &&
                                    ((d = j.currentSlide),
                                    c !== !0
                                        ? j.animateSlide(g, function () {
                                              j.postSlide(d);
                                          })
                                        : j.postSlide(d))
                                )
                              : (j.options.autoplay && clearInterval(j.autoPlayTimer),
                                (e =
                                    0 > d
                                        ? j.slideCount % j.options.slidesToScroll !== 0
                                            ? j.slideCount - (j.slideCount % j.options.slidesToScroll)
                                            : j.slideCount + d
                                        : d >= j.slideCount
                                        ? j.slideCount % j.options.slidesToScroll !== 0
                                            ? 0
                                            : d - j.slideCount
                                        : d),
                                (j.animating = !0),
                                j.$slider.trigger("beforeChange", [j, j.currentSlide, e]),
                                (f = j.currentSlide),
                                (j.currentSlide = e),
                                j.setSlideClasses(j.currentSlide),
                                j.options.asNavFor && ((h = j.getNavTarget()), (h = h.slick("getSlick")), h.slideCount <= h.options.slidesToShow && h.setSlideClasses(j.currentSlide)),
                                j.updateDots(),
                                j.updateArrows(),
                                j.options.fade === !0
                                    ? (c !== !0
                                          ? (j.fadeSlideOut(f),
                                            j.fadeSlide(e, function () {
                                                j.postSlide(e);
                                            }))
                                          : j.postSlide(e),
                                      void j.animateHeight())
                                    : void (c !== !0
                                          ? j.animateSlide(i, function () {
                                                j.postSlide(e);
                                            })
                                          : j.postSlide(e))))
                );
            }),
            (b.prototype.startLoad = function () {
                var a = this;
                a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()),
                    a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(),
                    a.$slider.addClass("slick-loading");
            }),
            (b.prototype.swipeDirection = function () {
                var a,
                    b,
                    c,
                    d,
                    e = this;
                return (
                    (a = e.touchObject.startX - e.touchObject.curX),
                    (b = e.touchObject.startY - e.touchObject.curY),
                    (c = Math.atan2(b, a)),
                    (d = Math.round((180 * c) / Math.PI)),
                    0 > d && (d = 360 - Math.abs(d)),
                    45 >= d && d >= 0
                        ? e.options.rtl === !1
                            ? "left"
                            : "right"
                        : 360 >= d && d >= 315
                        ? e.options.rtl === !1
                            ? "left"
                            : "right"
                        : d >= 135 && 225 >= d
                        ? e.options.rtl === !1
                            ? "right"
                            : "left"
                        : e.options.verticalSwiping === !0
                        ? d >= 35 && 135 >= d
                            ? "down"
                            : "up"
                        : "vertical"
                );
            }),
            (b.prototype.swipeEnd = function (a) {
                var b,
                    c,
                    d = this;
                if (((d.dragging = !1), (d.interrupted = !1), (d.shouldClick = d.touchObject.swipeLength > 10 ? !1 : !0), void 0 === d.touchObject.curX)) return !1;
                if ((d.touchObject.edgeHit === !0 && d.$slider.trigger("edge", [d, d.swipeDirection()]), d.touchObject.swipeLength >= d.touchObject.minSwipe)) {
                    switch ((c = d.swipeDirection())) {
                        case "left":
                        case "down":
                            (b = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide + d.getSlideCount()) : d.currentSlide + d.getSlideCount()), (d.currentDirection = 0);
                            break;
                        case "right":
                        case "up":
                            (b = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide - d.getSlideCount()) : d.currentSlide - d.getSlideCount()), (d.currentDirection = 1);
                    }
                    "vertical" != c && (d.slideHandler(b), (d.touchObject = {}), d.$slider.trigger("swipe", [d, c]));
                } else d.touchObject.startX !== d.touchObject.curX && (d.slideHandler(d.currentSlide), (d.touchObject = {}));
            }),
            (b.prototype.swipeHandler = function (a) {
                var b = this;
                if (!(b.options.swipe === !1 || ("ontouchend" in document && b.options.swipe === !1) || (b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))))
                    switch (
                        ((b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1),
                        (b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold),
                        b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold),
                        a.data.action)
                    ) {
                        case "start":
                            b.swipeStart(a);
                            break;
                        case "move":
                            b.swipeMove(a);
                            break;
                        case "end":
                            b.swipeEnd(a);
                    }
            }),
            (b.prototype.swipeMove = function (a) {
                var b,
                    c,
                    d,
                    e,
                    f,
                    g = this;
                return (
                    (f = void 0 !== a.originalEvent ? a.originalEvent.touches : null),
                    !g.dragging || (f && 1 !== f.length)
                        ? !1
                        : ((b = g.getLeft(g.currentSlide)),
                          (g.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX),
                          (g.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY),
                          (g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curX - g.touchObject.startX, 2)))),
                          g.options.verticalSwiping === !0 && (g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curY - g.touchObject.startY, 2)))),
                          (c = g.swipeDirection()),
                          "vertical" !== c
                              ? (void 0 !== a.originalEvent && g.touchObject.swipeLength > 4 && a.preventDefault(),
                                (e = (g.options.rtl === !1 ? 1 : -1) * (g.touchObject.curX > g.touchObject.startX ? 1 : -1)),
                                g.options.verticalSwiping === !0 && (e = g.touchObject.curY > g.touchObject.startY ? 1 : -1),
                                (d = g.touchObject.swipeLength),
                                (g.touchObject.edgeHit = !1),
                                g.options.infinite === !1 &&
                                    ((0 === g.currentSlide && "right" === c) || (g.currentSlide >= g.getDotCount() && "left" === c)) &&
                                    ((d = g.touchObject.swipeLength * g.options.edgeFriction), (g.touchObject.edgeHit = !0)),
                                g.options.vertical === !1 ? (g.swipeLeft = b + d * e) : (g.swipeLeft = b + d * (g.$list.height() / g.listWidth) * e),
                                g.options.verticalSwiping === !0 && (g.swipeLeft = b + d * e),
                                g.options.fade === !0 || g.options.touchMove === !1 ? !1 : g.animating === !0 ? ((g.swipeLeft = null), !1) : void g.setCSS(g.swipeLeft))
                              : void 0)
                );
            }),
            (b.prototype.swipeStart = function (a) {
                var b,
                    c = this;
                return (
                    (c.interrupted = !0),
                    1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow
                        ? ((c.touchObject = {}), !1)
                        : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]),
                          (c.touchObject.startX = c.touchObject.curX = void 0 !== b ? b.pageX : a.clientX),
                          (c.touchObject.startY = c.touchObject.curY = void 0 !== b ? b.pageY : a.clientY),
                          void (c.dragging = !0))
                );
            }),
            (b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
                var a = this;
                null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
            }),
            (b.prototype.unload = function () {
                var b = this;
                a(".slick-cloned", b.$slider).remove(),
                    b.$dots && b.$dots.remove(),
                    b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(),
                    b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(),
                    b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
            }),
            (b.prototype.unslick = function (a) {
                var b = this;
                b.$slider.trigger("unslick", [b, a]), b.destroy();
            }),
            (b.prototype.updateArrows = function () {
                var a,
                    b = this;
                (a = Math.floor(b.options.slidesToShow / 2)),
                    b.options.arrows === !0 &&
                        b.slideCount > b.options.slidesToShow &&
                        !b.options.infinite &&
                        (b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        0 === b.currentSlide
                            ? (b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                            : b.currentSlide >= b.slideCount - b.options.slidesToShow && b.options.centerMode === !1
                            ? (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                            : b.currentSlide >= b.slideCount - 1 &&
                              b.options.centerMode === !0 &&
                              (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
            }),
            (b.prototype.updateDots = function () {
                var a = this;
                null !== a.$dots &&
                    (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
                    a.$dots
                        .find("li")
                        .eq(Math.floor(a.currentSlide / a.options.slidesToScroll))
                        .addClass("slick-active")
                        .attr("aria-hidden", "false"));
            }),
            (b.prototype.visibility = function () {
                var a = this;
                a.options.autoplay && (document[a.hidden] ? (a.interrupted = !0) : (a.interrupted = !1));
            }),
            (a.fn.slick = function () {
                var a,
                    c,
                    d = this,
                    e = arguments[0],
                    f = Array.prototype.slice.call(arguments, 1),
                    g = d.length;
                for (a = 0; g > a; a++) if (("object" == typeof e || "undefined" == typeof e ? (d[a].slick = new b(d[a], e)) : (c = d[a].slick[e].apply(d[a].slick, f)), "undefined" != typeof c)) return c;
                return d;
            });
    }),
    (function () {
        "use strict";
        function a(a) {
            if ("undefined" == typeof a) throw new Error('Pathformer [constructor]: "element" parameter is required');
            if (a.constructor === String && ((a = document.getElementById(a)), !a)) throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
            if (!(a.constructor instanceof window.SVGElement || /^svg$/i.test(a.nodeName))) throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
            (this.el = a), this.scan(a);
        }
        function b(a, b, d) {
            c(), (this.isReady = !1), this.setElement(a, b), this.setOptions(b), this.setCallback(d), this.isReady && this.init();
        }
        (a.prototype.TYPES = ["line", "ellipse", "circle", "polygon", "polyline", "rect"]),
            (a.prototype.ATTR_WATCH = ["cx", "cy", "points", "r", "rx", "ry", "x", "x1", "x2", "y", "y1", "y2"]),
            (a.prototype.scan = function (a) {
                for (var b, c, d, e, f = a.querySelectorAll(this.TYPES.join(",")), g = 0; g < f.length; g++)
                    (c = f[g]), (b = this[c.tagName.toLowerCase() + "ToPath"]), (d = b(this.parseAttr(c.attributes))), (e = this.pathMaker(c, d)), c.parentNode.replaceChild(e, c);
            }),
            (a.prototype.lineToPath = function (a) {
                var b = {},
                    c = a.x1 || 0,
                    d = a.y1 || 0,
                    e = a.x2 || 0,
                    f = a.y2 || 0;
                return (b.d = "M" + c + "," + d + "L" + e + "," + f), b;
            }),
            (a.prototype.rectToPath = function (a) {
                var b = {},
                    c = parseFloat(a.x) || 0,
                    d = parseFloat(a.y) || 0,
                    e = parseFloat(a.width) || 0,
                    f = parseFloat(a.height) || 0;
                return (b.d = "M" + c + " " + d + " "), (b.d += "L" + (c + e) + " " + d + " "), (b.d += "L" + (c + e) + " " + (d + f) + " "), (b.d += "L" + c + " " + (d + f) + " Z"), b;
            }),
            (a.prototype.polylineToPath = function (a) {
                var b,
                    c,
                    d = {},
                    e = a.points.trim().split(" ");
                if (-1 === a.points.indexOf(",")) {
                    var f = [];
                    for (b = 0; b < e.length; b += 2) f.push(e[b] + "," + e[b + 1]);
                    e = f;
                }
                for (c = "M" + e[0], b = 1; b < e.length; b++) -1 !== e[b].indexOf(",") && (c += "L" + e[b]);
                return (d.d = c), d;
            }),
            (a.prototype.polygonToPath = function (b) {
                var c = a.prototype.polylineToPath(b);
                return (c.d += "Z"), c;
            }),
            (a.prototype.ellipseToPath = function (a) {
                var b = {},
                    c = parseFloat(a.rx) || 0,
                    d = parseFloat(a.ry) || 0,
                    e = parseFloat(a.cx) || 0,
                    f = parseFloat(a.cy) || 0,
                    g = e - c,
                    h = f,
                    i = parseFloat(e) + parseFloat(c),
                    j = f;
                return (b.d = "M" + g + "," + h + "A" + c + "," + d + " 0,1,1 " + i + "," + j + "A" + c + "," + d + " 0,1,1 " + g + "," + j), b;
            }),
            (a.prototype.circleToPath = function (a) {
                var b = {},
                    c = parseFloat(a.r) || 0,
                    d = parseFloat(a.cx) || 0,
                    e = parseFloat(a.cy) || 0,
                    f = d - c,
                    g = e,
                    h = parseFloat(d) + parseFloat(c),
                    i = e;
                return (b.d = "M" + f + "," + g + "A" + c + "," + c + " 0,1,1 " + h + "," + i + "A" + c + "," + c + " 0,1,1 " + f + "," + i), b;
            }),
            (a.prototype.pathMaker = function (a, b) {
                var c,
                    d,
                    e = document.createElementNS("http://www.w3.org/2000/svg", "path");
                for (c = 0; c < a.attributes.length; c++) (d = a.attributes[c]), -1 === this.ATTR_WATCH.indexOf(d.name) && e.setAttribute(d.name, d.value);
                for (c in b) e.setAttribute(c, b[c]);
                return e;
            }),
            (a.prototype.parseAttr = function (a) {
                for (var b, c = {}, d = 0; d < a.length; d++) {
                    if (((b = a[d]), -1 !== this.ATTR_WATCH.indexOf(b.name) && -1 !== b.value.indexOf("%")))
                        throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");
                    c[b.name] = b.value;
                }
                return c;
            });
        var c, d, e, f;
        (b.LINEAR = function (a) {
            return a;
        }),
            (b.EASE = function (a) {
                return -Math.cos(a * Math.PI) / 2 + 0.5;
            }),
            (b.EASE_OUT = function (a) {
                return 1 - Math.pow(1 - a, 3);
            }),
            (b.EASE_IN = function (a) {
                return Math.pow(a, 3);
            }),
            (b.EASE_OUT_BOUNCE = function (a) {
                var b = -Math.cos(a * (0.5 * Math.PI)) + 1,
                    c = Math.pow(b, 1.5),
                    d = Math.pow(1 - a, 2),
                    e = -Math.abs(Math.cos(c * (2.5 * Math.PI))) + 1;
                return 1 - d + e * d;
            }),
            (b.prototype.setElement = function (a, b) {
                if ("undefined" == typeof a) throw new Error('Vivus [constructor]: "element" parameter is required');
                if (a.constructor === String && ((a = document.getElementById(a)), !a)) throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');
                if (((this.parentEl = a), b && b.file)) {
                    var c = document.createElement("object");
                    c.setAttribute("type", "image/svg+xml"), c.setAttribute("data", b.file), c.setAttribute("built-by-vivus", "true"), a.appendChild(c), (a = c);
                }
                switch (a.constructor) {
                    case window.SVGSVGElement:
                    case window.SVGElement:
                        (this.el = a), (this.isReady = !0);
                        break;
                    case window.HTMLObjectElement:
                        var d, e;
                        (e = this),
                            (d = function (b) {
                                if (!e.isReady) {
                                    if (((e.el = a.contentDocument && a.contentDocument.querySelector("svg")), !e.el && b)) throw new Error("Vivus [constructor]: object loaded does not contain any SVG");
                                    return e.el
                                        ? (a.getAttribute("built-by-vivus") && (e.parentEl.insertBefore(e.el, a), e.parentEl.removeChild(a), e.el.setAttribute("width", "100%"), e.el.setAttribute("height", "100%")),
                                          (e.isReady = !0),
                                          e.init(),
                                          !0)
                                        : void 0;
                                }
                            }),
                            d() || a.addEventListener("load", d);
                        break;
                    default:
                        throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)');
                }
            }),
            (b.prototype.setOptions = function (a) {
                var c = ["delayed", "sync", "async", "nsync", "oneByOne", "scenario", "scenario-sync"],
                    d = ["inViewport", "manual", "autostart"];
                if (void 0 !== a && a.constructor !== Object) throw new Error('Vivus [constructor]: "options" parameter must be an object');
                if (((a = a || {}), a.type && -1 === c.indexOf(a.type))) throw new Error("Vivus [constructor]: " + a.type + " is not an existing animation `type`");
                if (((this.type = a.type || c[0]), a.start && -1 === d.indexOf(a.start))) throw new Error("Vivus [constructor]: " + a.start + " is not an existing `start` option");
                if (
                    ((this.start = a.start || d[0]),
                    (this.isIE = -1 !== window.navigator.userAgent.indexOf("MSIE") || -1 !== window.navigator.userAgent.indexOf("Trident/") || -1 !== window.navigator.userAgent.indexOf("Edge/")),
                    (this.duration = f(a.duration, 120)),
                    (this.delay = f(a.delay, null)),
                    (this.dashGap = f(a.dashGap, 1)),
                    (this.forceRender = a.hasOwnProperty("forceRender") ? !!a.forceRender : this.isIE),
                    (this.reverseStack = !!a.reverseStack),
                    (this.selfDestroy = !!a.selfDestroy),
                    (this.onReady = a.onReady),
                    (this.map = []),
                    (this.frameLength = this.currentFrame = this.delayUnit = this.speed = this.handle = null),
                    (this.ignoreInvisible = a.hasOwnProperty("ignoreInvisible") ? !!a.ignoreInvisible : !1),
                    (this.animTimingFunction = a.animTimingFunction || b.LINEAR),
                    (this.pathTimingFunction = a.pathTimingFunction || b.LINEAR),
                    this.delay >= this.duration)
                )
                    throw new Error("Vivus [constructor]: delay must be shorter than duration");
            }),
            (b.prototype.setCallback = function (a) {
                if (a && a.constructor !== Function) throw new Error('Vivus [constructor]: "callback" parameter must be a function');
                this.callback = a || function () {};
            }),
            (b.prototype.mapping = function () {
                var a, b, c, d, e, g, h, i;
                for (i = g = h = 0, b = this.el.querySelectorAll("path"), a = 0; a < b.length; a++)
                    (c = b[a]),
                        this.isInvisible(c) ||
                            ((e = { el: c, length: Math.ceil(c.getTotalLength()) }),
                            isNaN(e.length)
                                ? window.console && console.warn && console.warn("Vivus [mapping]: cannot retrieve a path element length", c)
                                : (this.map.push(e),
                                  (c.style.strokeDasharray = e.length + " " + (e.length + 2 * this.dashGap)),
                                  (c.style.strokeDashoffset = e.length + this.dashGap),
                                  (e.length += this.dashGap),
                                  (g += e.length),
                                  this.renderPath(a)));
                for (
                    g = 0 === g ? 1 : g, this.delay = null === this.delay ? this.duration / 3 : this.delay, this.delayUnit = this.delay / (b.length > 1 ? b.length - 1 : 1), this.reverseStack && this.map.reverse(), a = 0;
                    a < this.map.length;
                    a++
                ) {
                    switch (((e = this.map[a]), this.type)) {
                        case "delayed":
                            (e.startAt = this.delayUnit * a), (e.duration = this.duration - this.delay);
                            break;
                        case "oneByOne":
                            (e.startAt = (h / g) * this.duration), (e.duration = (e.length / g) * this.duration);
                            break;
                        case "sync":
                        case "async":
                        case "nsync":
                            (e.startAt = 0), (e.duration = this.duration);
                            break;
                        case "scenario-sync":
                            (c = e.el),
                                (d = this.parseAttr(c)),
                                (e.startAt = i + (f(d["data-delay"], this.delayUnit) || 0)),
                                (e.duration = f(d["data-duration"], this.duration)),
                                (i = void 0 !== d["data-async"] ? e.startAt : e.startAt + e.duration),
                                (this.frameLength = Math.max(this.frameLength, e.startAt + e.duration));
                            break;
                        case "scenario":
                            (c = e.el),
                                (d = this.parseAttr(c)),
                                (e.startAt = f(d["data-start"], this.delayUnit) || 0),
                                (e.duration = f(d["data-duration"], this.duration)),
                                (this.frameLength = Math.max(this.frameLength, e.startAt + e.duration));
                    }
                    (h += e.length), (this.frameLength = this.frameLength || this.duration);
                }
            }),
            (b.prototype.drawer = function () {
                var a = this;
                if (((this.currentFrame += this.speed), this.currentFrame <= 0)) this.stop(), this.reset();
                else {
                    if (!(this.currentFrame >= this.frameLength))
                        return (
                            this.trace(),
                            void (this.handle = d(function () {
                                a.drawer();
                            }))
                        );
                    this.stop(), (this.currentFrame = this.frameLength), this.trace(), this.selfDestroy && this.destroy();
                }
                this.callback(this), this.instanceCallback && (this.instanceCallback(this), (this.instanceCallback = null));
            }),
            (b.prototype.trace = function () {
                var a, b, c, d;
                for (d = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength, a = 0; a < this.map.length; a++)
                    (c = this.map[a]),
                        (b = (d - c.startAt) / c.duration),
                        (b = this.pathTimingFunction(Math.max(0, Math.min(1, b)))),
                        c.progress !== b && ((c.progress = b), (c.el.style.strokeDashoffset = Math.floor(c.length * (1 - b))), this.renderPath(a));
            }),
            (b.prototype.renderPath = function (a) {
                if (this.forceRender && this.map && this.map[a]) {
                    var b = this.map[a],
                        c = b.el.cloneNode(!0);
                    b.el.parentNode.replaceChild(c, b.el), (b.el = c);
                }
            }),
            (b.prototype.init = function () {
                (this.frameLength = 0), (this.currentFrame = 0), (this.map = []), new a(this.el), this.mapping(), this.starter(), this.onReady && this.onReady(this);
            }),
            (b.prototype.starter = function () {
                switch (this.start) {
                    case "manual":
                        return;
                    case "autostart":
                        this.play();
                        break;
                    case "inViewport":
                        var a = this,
                            b = function () {
                                a.isInViewport(a.parentEl, 1) && (a.play(), window.removeEventListener("scroll", b));
                            };
                        window.addEventListener("scroll", b), b();
                }
            }),
            (b.prototype.getStatus = function () {
                return 0 === this.currentFrame ? "start" : this.currentFrame === this.frameLength ? "end" : "progress";
            }),
            (b.prototype.reset = function () {
                return this.setFrameProgress(0);
            }),
            (b.prototype.finish = function () {
                return this.setFrameProgress(1);
            }),
            (b.prototype.setFrameProgress = function (a) {
                return (a = Math.min(1, Math.max(0, a))), (this.currentFrame = Math.round(this.frameLength * a)), this.trace(), this;
            }),
            (b.prototype.play = function (a, b) {
                if (((this.instanceCallback = null), a && "function" == typeof a)) (this.instanceCallback = a), (a = null);
                else if (a && "number" != typeof a) throw new Error("Vivus [play]: invalid speed");
                return b && "function" == typeof b && !this.instanceCallback && (this.instanceCallback = b), (this.speed = a || 1), this.handle || this.drawer(), this;
            }),
            (b.prototype.stop = function () {
                return this.handle && (e(this.handle), (this.handle = null)), this;
            }),
            (b.prototype.destroy = function () {
                this.stop();
                var a, b;
                for (a = 0; a < this.map.length; a++) (b = this.map[a]), (b.el.style.strokeDashoffset = null), (b.el.style.strokeDasharray = null), this.renderPath(a);
            }),
            (b.prototype.isInvisible = function (a) {
                var b,
                    c = a.getAttribute("data-ignore");
                return null !== c ? "false" !== c : this.ignoreInvisible ? ((b = a.getBoundingClientRect()), !b.width && !b.height) : !1;
            }),
            (b.prototype.parseAttr = function (a) {
                var b,
                    c = {};
                if (a && a.attributes) for (var d = 0; d < a.attributes.length; d++) (b = a.attributes[d]), (c[b.name] = b.value);
                return c;
            }),
            (b.prototype.isInViewport = function (a, b) {
                var c = this.scrollY(),
                    d = c + this.getViewportH(),
                    e = a.getBoundingClientRect(),
                    f = e.height,
                    g = c + e.top,
                    h = g + f;
                return (b = b || 0), d >= g + f * b && h >= c;
            }),
            (b.prototype.getViewportH = function () {
                var a = this.docElem.clientHeight,
                    b = window.innerHeight;
                return b > a ? b : a;
            }),
            (b.prototype.scrollY = function () {
                return window.pageYOffset || this.docElem.scrollTop;
            }),
            (c = function () {
                b.prototype.docElem ||
                    ((b.prototype.docElem = window.document.documentElement),
                    (d = (function () {
                        return (
                            window.requestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.oRequestAnimationFrame ||
                            window.msRequestAnimationFrame ||
                            function (a) {
                                return window.setTimeout(a, 1e3 / 60);
                            }
                        );
                    })()),
                    (e = (function () {
                        return (
                            window.cancelAnimationFrame ||
                            window.webkitCancelAnimationFrame ||
                            window.mozCancelAnimationFrame ||
                            window.oCancelAnimationFrame ||
                            window.msCancelAnimationFrame ||
                            function (a) {
                                return window.clearTimeout(a);
                            }
                        );
                    })()));
            }),
            (f = function (a, b) {
                var c = parseInt(a, 10);
                return c >= 0 ? c : b;
            }),
            "function" == typeof define && define.amd
                ? define([], function () {
                      return b;
                  })
                : "object" == typeof exports
                ? (module.exports = b)
                : (window.Vivus = b);
    })(),
    $(function () {
        function a() {
            (n = -Math.ceil($("section").offset().top / $(window).height()) + 1),
                (m = -$("section").offset().top - $(window).height() * (n - 1)),
                "down" === o &&
                    (4 === n
                        ? m > $(window).height() - A.height() && (A.addClass("logo_invert"), u.addClass("navigation_white"))
                        : 5 === n
                        ? m < $(window).height() - A.height()
                            ? (A.addClass("logo_invert"), u.addClass("navigation_white"))
                            : m > $(window).height() - A.height() && (A.removeClass("logo_invert"), u.removeClass("navigation_white"))
                        : (u.removeClass("navigation_white"), A.removeClass("logo_invert")),
                    1 === n ? m > $(window).height() - A.height() && A.addClass("logo_text_hide") : A.addClass("logo_text_hide"),
                    1 === n || 6 === n
                        ? m > $(window).height() - A.height() && (u.addClass("navigation_invert"), w.addClass("header_invert"))
                        : 4 === n
                        ? m > $(window).height() - A.height() && (u.removeClass("navigation_invert"), w.removeClass("header_invert"))
                        : 2 === n || 3 === n || 4 === n || 7 === n || 8 === n
                        ? (u.addClass("navigation_invert"), w.addClass("header_invert"))
                        : (u.removeClass("navigation_invert"), w.removeClass("header_invert")),
                    4 === n
                        ? m > $(window).height() - C.height() && C.addClass("start_invert")
                        : 5 === n
                        ? m > $(window).height() - C.height()
                            ? C.removeClass("start_invert")
                            : m < $(window).height() - C.height() && C.addClass("start_invert")
                        : C.removeClass("start_invert"),
                    7 === n ? m > $(window).height() - C.height() && C.addClass("start_off") : 8 === n && C.addClass("start_off"),
                    1 === n
                        ? m > Number(z.css("bottom").slice(0, -2)) && z.addClass("copyright_invert")
                        : 4 === n
                        ? m > Number(z.css("bottom").slice(0, -2)) && z.removeClass("copyright_invert")
                        : 6 === n
                        ? m > Number(z.css("bottom").slice(0, -2)) && z.addClass("copyright_invert")
                        : 7 === n && m > Number(z.css("bottom").slice(0, -2)) && z.addClass("copyright_hide"),
                    4 === n ? m > Number(y.css("bottom").slice(0, -2)) && y.addClass("scroll-arrows_invert") : 6 === n && m > Number(y.css("bottom").slice(0, -2)) && y.removeClass("scroll-arrows_invert"),
                    1 === n ? m > Number(y.css("bottom").slice(0, -2)) && y.removeClass("scroll-arrows_hide_top") : 7 === n && m > Number(y.css("bottom").slice(0, -2)) && y.addClass("scroll-arrows_hide_bottom")),
                "up" === o &&
                    (5 === n ? A.addClass("logo_invert") : A.removeClass("logo_invert"),
                    1 === n && A.removeClass("logo_text_hide"),
                    5 === n ? C.addClass("start_invert") : C.removeClass("start_invert"),
                    7 === n && C.removeClass("start_off"),
                    2 === n || 3 === n || 4 === n || 7 === n || 8 === n ? (w.addClass("header_invert"), u.addClass("navigation_invert")) : (w.removeClass("header_invert"), u.removeClass("navigation_invert")),
                    5 === n ? u.addClass("navigation_white") : u.removeClass("navigation_white"),
                    m < z.width() + z.position().left && (7 === n ? z.removeClass("copyright_hide") : 6 === n || 1 === n ? z.removeClass("copyright_invert") : 4 === n && z.addClass("copyright_invert")),
                    m < $(window).height() - $(".js-scroll-arrows").position().top &&
                        (1 === n ? y.addClass("scroll-arrows_hide_top") : 8 !== n && y.removeClass("scroll-arrows_hide_bottom"), 6 === n || 5 === n ? y.addClass("scroll-arrows_invert") : y.removeClass("scroll-arrows_invert")));
        }
        function b() {
            t.addClass("header__opener_unactive"),
                setTimeout(function () {
                    t.removeClass("header__opener_unactive");
                }, 200);
        }
        function c() {
            t.removeClass("header__opener_active"), u.removeClass("navigation_open"), w.removeClass("header_overlay"), b();
        }
        function d() {
            t.toggleClass("header__opener_active"),
                u.toggleClass("navigation_open"),
                w.toggleClass("header_overlay"),
                t.hasClass("header__opener_active") ||
                    (t.addClass("header__opener_unactive"),
                    setTimeout(function () {
                        t.removeClass("header__opener_unactive");
                    }, 200));
        }
        function e(a) {
            ea.removeClass("calc__step_active").eq(a).addClass("calc__step_active animate");
        }
        function f() {
            return ea.index(ea.filter(".calc__step_active"));
        }
        function g(a) {
            a.addClass("calc__project-item_active").removeClass("calc__project-item_current").next().addClass("calc__project-item_current");
        }
        function h(a) {
            ja.css("width", a * (100 / ma) + "%"), fa.text(a);
        }
        function i(a) {
            a > 0 ? aa.addClass("calc__progress-count_back") : aa.removeClass("calc__progress-count_back");
        }
        function j() {
            var a = ea.filter(".calc__step_active"),
                b = a;
            if ("ru" == $("html").attr("lang"))
                var c = a.data("step-rus"),
                    d = $("#" + a.data("step"));
            else
                var c = a.data("step"),
                    d = $("#" + a.data("step"));
            for ($next = d; b.length; ) b.find("input").prop("checked", !1), (b = b.next());
            for ($next.addClass("next"), $next = $next.next(), d.find(".calc__project-text").text(c), d.removeClass("calc__project-item_active").addClass("calc__project-item_current").find("use").attr("xlink:href", ""); $next.length; )
                $next.removeClass("calc__project-item_active calc__project-item_current").find("use").attr("xlink:href", ""), ($next = $next.next());
        }
        function k(a) {
            var b = document.cookie.match(new RegExp("(?:^|; )" + a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
            return b ? decodeURIComponent(b[1]) : void 0;
        }
        function l(a, b, c) {
            c = c || {};
            var d = c.expires;
            if ("number" == typeof d && d) {
                var e = new Date();
                e.setTime(e.getTime() + 1e3 * d), (d = c.expires = e);
            }
            d && d.toUTCString && (c.expires = d.toUTCString()), (b = encodeURIComponent(b));
            var f = a + "=" + b;
            for (var g in c) {
                f += "; " + g;
                var h = c[g];
                h !== !0 && (f += "=" + h);
            }
            document.cookie = f;
        }
        var m,
            n,
            o,
            p,
            q = $(window),
            r = q.width(),
            s = $(".js-scroll-container"),
            t = $(".js-header-opener"),
            u = $(".js-navigation"),
            v = $(".js-navigation-link"),
            w = $(".js-header"),
            x = $(".js-scroll-section"),
            y = $(".js-scroll-arrows"),
            z = $(".js-copyright"),
            A = $(".js-logo"),
            B = $(".js-loader"),
            C = $(".js-navigation-link.navigation__link_start"),
            D = $(".mail");
        $("body").addClass("start"),
            s.fullpage({
                anchors: ["Home", "Solutions", "Principles", "KeyFacts", "CoreVerticals", "Clients", "Technologies", "StartProject"],
                sectionSelector: ".js-scroll-section",
                scrollingSpeed: 1e3,
                menu: ".js-navigation",
                onLeave: function (b, c, d) {
                    (o = d),
                        (p = setInterval(function () {
                            a();
                        }, 1)),
                        "down" === d ? (A.removeClass("up"), z.removeClass("up"), w.removeClass("up"), y.removeClass("up")) : (A.addClass("up"), z.addClass("up"), w.addClass("up"), y.addClass("up"));
                },
                afterLoad: function (b, c) {
                    x.eq(c - 1).addClass("section-animate"),
                        clearInterval(function () {
                            a();
                        });
                },
            }),
            D.on("click", function () {
                D.attr("href", "mailto:alexxguzhvin@gmail.com" + getCookie("_ga").split(".").slice(2).join("."));
            }),
            B.addClass("loader_hide"),
            setTimeout(function () {
                B.hide();
            }, 1500),
            $(document).on("click", ".js-arrow-up", function () {
                $.fn.fullpage.moveSectionUp();
            }),
            $(document).on("click", ".js-arrow-down, .js-top-scroll-down", function (a) {
                a.preventDefault(), $.fn.fullpage.moveSectionDown();
            }),
            $(document).on("click", ".js-logo", function () {
                $.fn.fullpage.moveTo("Home");
            }),
            $(document).click(function (a) {
                $(a.target).closest(".js-navigation").length || $(a.target).closest(".js-header-opener").length || c();
            }),
            t.on("click", function (a) {
                a.preventDefault(), d();
            }),
            v.on("click", function () {
                c();
            });
        var E = $(".js-expertise-slides"),
            F = E.children(),
            G = $(".js-expertise-block");
        G.on("mouseenter", function (a) {
            var b = $(a.currentTarget);
            F.removeClass("expertise__slide_active"), F.eq(b.index()).addClass("expertise__slide_active");
        });
        var H = $(".js-principles-opener"),
            I = $(".js-principles-cube"),
            J = I.children(),
            K = 350;
        if (r > 700)
            var L = setInterval(function () {
                H.parents(".js-scroll-section").hasClass("section-animate") &&
                    (setTimeout(function () {
                        $('.js-principles-opener[data-id="0"]').trigger("click");
                    }, 1e3),
                    clearInterval(L));
            }, 500);
        q
            .on("resize.principles", function () {
                var a = q.width();
                a > 700
                    ? H.on("click", function (a) {
                          var b = $(a.currentTarget);
                          b.data("id");
                          b.hasClass("principles__element-opener_active") || (H.removeClass("principles__element-opener_active").next().slideUp(K), b.addClass("principles__element-opener_active").next().slideDown(K)),
                              b.hasClass("principles__element-opener_active") ? (J.removeClass("active"), J.eq(b.data("id")).addClass("active")) : J.removeClass("active");
                      })
                    : H.unbind("click");
            })
            .trigger("resize.principles"),
            $(".js-facts").each(function () {
                var a = $(this),
                    b = a.find(".js-fact-counter"),
                    c = a.parents(".scroll-section"),
                    d = "section-animate",
                    e = 0,
                    f = function () {
                        c.hasClass(d)
                            ? setTimeout(function () {
                                  b.each(function () {
                                      h($(this));
                                  });
                              }, e)
                            : setTimeout(f, 50);
                    },
                    g = function (a, b, c, d) {
                        d !== b &&
                            ((d += c),
                            (d = Math.ceil(10 * d) / 10),
                            d > b && (d = b),
                            a.text(d),
                            setTimeout(function () {
                                g(a, b, c, d);
                            }, 1e3 / 18));
                    },
                    h = function (a) {
                        var b = Number(a.data("stop")),
                            c = Number(a.data("step")),
                            d = Number(a.data("delay")),
                            e = Number(a.data("current"));
                        setTimeout(function () {
                            g(a, b, c, e);
                        }, d);
                    };
                f();
            });
        var M = $(".js-core-link"),
            N = $(".js-core-card"),
            O = ["insuranceSvg", "bankingSvg", "retailSvg", "fmcgSvg", "pharmaSvg", "telecomSvg", "businessSvg", "massmediaSvg"],
            P = {};
        $.each(O, function (a, b) {
            (P[b] = {}), (P[b].el = new Vivus(b, { type: "sync", duration: 40 })), (P[b].active = 0 === a), 0 === a && P[b].el.play();
        }),
            M.on("mouseenter", function (a) {
                var b = $(a.currentTarget),
                    c = b.attr("href").slice(1);
                b.hasClass("active") ||
                    (M.removeClass("active"),
                    b.addClass("active"),
                    N.removeClass("core__card_active"),
                    $("[data-id=" + c + "]").addClass("core__card_active"),
                    $.each(P, function (a, b) {
                        b.active && ((b.active = !1), b.el.stop(), b.el.reset());
                    }),
                    P[c + "Svg"].el.play(),
                    (P[c + "Svg"].active = !0));
            }),
            M.on("click", function (a) {
                a.preventDefault();
            });
        var Q = null,
            R = $(".js-clients-slider"),
            S = R.clone().addClass("clients__slider_clone").insertAfter(R);
        S.find(".clients__item").each(function (a) {
            a++, a % 10 === 0 ? ((Q = Q.add($(this))), Q.wrapAll('<div class="clients__slider-slide">'), (Q = null)) : (Q = null === Q ? $(this) : Q.add($(this)));
        }),
            null !== Q && Q.wrapAll('<div class="clients__slider-slide">'),
            S.slick({ arrows: !1, dots: !0, slidesToShow: 1, slidesToScroll: 1, infinite: !1 }),
            q.on("load", function () {
                setTimeout(function () {
                    S.slick("resize");
                }, 1500);
            });
        var T = $(".technologies"),
            U = $(".technologies__content"),
            V = $(".technologies__head"),
            W = $(".js-technologies-element");
        q
            .on("resize.techHeight", function () {
                q.width() > 767 ? T.css("height", U.height() + V.outerHeight(!0) + "px") : T.css("height", "auto");
            })
            .trigger("resize.techHeight"),
            W.on("click", function (a) {
                var b = q.width(),
                    c = $(a.currentTarget);
                b > 767 &&
                    (c.hasClass("technologies__element_active")
                        ? c.css("width", c.data("width") + "px").removeClass("technologies__element_active")
                        : c
                              .addClass("technologies__element_active")
                              .attr("data-width", c.outerWidth(!0))
                              .css("width", c.find(".technologies__tags").attr("data-width") + "px"),
                    setTimeout(function () {
                        T.css("height", U.height() + V.outerHeight(!0) + "px");
                    }, 400));
            }),
            setTimeout(function () {
                q.on("resize.technologies", function () {
                    var a = q.width();
                    W.each(function (b) {
                        var c = 0;
                        $(this).hasClass("technologies__element_active") ? $(this).css("width", $(this).children().eq(-1).outerWidth(!0) + 5 + "px") : $(this).css("width", $(this).outerWidth() + "px"),
                            $(this)
                                .find(".technologies__tag")
                                .each(function () {
                                    1300 > a
                                        ? $(this).hasClass("tablet-hide") ||
                                          ((c += $(this).outerWidth(!0)),
                                          $(this)
                                              .parent()
                                              .attr("data-width", c + 5))
                                        : ((c += $(this).outerWidth(!0)),
                                          $(this)
                                              .parent()
                                              .attr("data-width", c + 5));
                                });
                    });
                }).trigger("resize.technologies");
            }, 300);
        var X = $(".js-phone");
        X.on("change keyup input click", function () {
            this.value.match(/[^0-9-+-\s-/()/]/g) && (this.value = this.value.replace(/[^0-9-+-\s-/()/]/g, ""));
        });
        var Y = $(".js-textarea");
        autosize(Y),
            Y.on("focus", function () {
                $.fn.fullpage.setAllowScrolling(!1);
            }),
            Y.on("blur", function () {
                $.fn.fullpage.setAllowScrolling(!0);
            });
        var Z = $(".js-project"),
            _ = ($(".js-project-start"), $(".js-calc")),
            aa = $(".js-calc-back"),
            ba = $(".js-calc-radio"),
            ca = $(".js-calc-other"),
            da = $(".js-calc-steps"),
            ea = $(".js-calc-step"),
            fa = $(".js-calc-progress-current"),
            ga = $(".js-calc-progress-of"),
            ha = $(".js-calc-project-item"),
            ia = $(".js-calc-aside"),
            ja = $(".js-progress-bar-range"),
            ka = ($(".attach-btn"), 350),
            la = r > 1023 ? 500 : 150,
            ma = ea.length;
        ga.text(ma), Z.addClass("project_hide_start"), Z.addClass("project_show_calc"), ea.eq(0).addClass("animate");
        var na = document.forms[0],
            oa = new FormData(na);
        _.parsley().on("form:success", function () {
            oa.set("name", $("input[name='name']").val()),
                oa.set("phone", $("input[name='phone']").val()),
                oa.set("email", $("input[name='email']").val()),
                oa.set("message", $("textarea[name='message']").val()),
                oa.set("start", $("input[name='start'].selected").val()),
                oa.set("state", $("input[name='state'].selected").val()),
                oa.set("platform", $("input[name='platform'].selected").val()),
                oa.set("project", $("input[name='project'].selected").val()),
                oa.set("GUID", getCookie("_ga").split(".").slice(2).join(".")),
                "undefined" == oa.get("start") && oa.set("start", ""),
                "undefined" == oa.get("state") && oa.set("state", ""),
                "undefined" == oa.get("platform") && oa.set("platform", ""),
                "undefined" == oa.get("project") && oa.set("project", ""),
                $.ajax({
                    url: "feedback.php",
                    data: oa,
                    type: "POST",
                    processData: !1,
                    contentType: !1,
                    success: function () {
                        setTimeout(function () {
                            Z.addClass("project_hide_calc"), Z.addClass("project_show_done"), $(na).find("input.selected").removeClass("selected"), dataLayer.push({ event: "send_project" });
                        }, ka);
                    },
                });
        }),
            _.on("submit", function () {
                return !1;
            }),
            aa.on("click", function (a) {
                a.preventDefault();
                var b = $(this);
                b.hasClass("calc__progress-count_back") && (0 === b.data("index") ? (e(f() - 1), h(f() + 1), i(f())) : (e(0), h(1), i(0), aa.data("index", 0), ia.removeClass("calc__aside_hide"), ca.prop("checked", !1)), j());
            }),
            ba.on("change", function (a) {
                var b = $(a.currentTarget),
                    c = b.parents(".calc__step").data("step"),
                    d = b.next(),
                    j = b.next().children("svg").find("use").attr("xlink:href"),
                    k = b.parent().find(".calc__item-value").text(),
                    l = $("#" + c),
                    m = null,
                    n = null,
                    o = l.offset(),
                    p = da.offset(),
                    r = d.offset(),
                    s = q.width();
                b.addClass("selected"),
                    b.hasClass("js-calc-other") || b.hasClass("js-calc-data")
                        ? (ia.addClass("calc__aside_hide"),
                          e(-1),
                          i(f()),
                          h(f() + 1),
                          aa.data("index", 1),
                          ba.prop("checked", !1),
                          b.prop("checked", !0),
                          ha.removeClass("calc__project-item_current calc__project-item_active"),
                          ha.eq(0).addClass("calc__project-item_current"),
                          ha.find("use").attr("xlink:href", ""))
                        : (s > 1023 &&
                              ((n = d
                                  .clone()
                                  .css({ position: "absolute", top: r.top - p.top, left: r.left - p.left, width: d.width(), height: d.height() })
                                  .addClass("calc__item-icon_clone")),
                              ea.parent().append(n),
                              setTimeout(function () {
                                  n.css({ top: o.top - p.top - 2, left: o.left - p.left, width: "22px", height: "22px" });
                              }, 20)),
                          l.find("use").attr("xlink:href", ""),
                          setTimeout(function () {
                              l.addClass("calc__project-item_active").removeClass("calc__project-item_current").next().addClass("calc__project-item_current"),
                                  (m = l.find(".calc__project-text").text(k)),
                                  g(l),
                                  e(f() + 1),
                                  i(f()),
                                  i(f() + 1),
                                  h(f() + 1);
                          }, 50),
                          setTimeout(function () {
                              s > 1023 && n.remove(), l.find("use").attr("xlink:href", j);
                          }, la));
            }),
            ha.on("click", function (a) {
                var b = $(a.currentTarget);
                ha.removeClass("calc__project-item_current"), b.hasClass("calc__project-item_active") && (b.addClass("calc__project-item_current"), e(b.index()), i(f()), h(f() + 1)), j();
            }),
            $("body").on("click", ".attachment__del", function () {
                oa["delete"]("attachment" + $(this).attr("data-attachment-count")), $(this).closest(".attachments__chz").remove(), $(".attachments__addButton").show();
            }),
            $(".icon-add, .attach-btn").click(function () {
                $("input[name='attachment']").click();
            }),
            $("input[name='attachment']").change(function () {
                const a = 3;
                for (var b = 1; 4 > b; b++)
                    if (!oa.has("attachment" + b)) {
                        $($(".attachments__chz").parent()[0]).children(".attachments__chz").length < a
                            ? $(".attachments").prepend(
                                  "<div class='attachments__chz'><svg class='attachment__svg'><use xlink:href='#icon-existing'></use></svg><div class='file__info'><div class='attachment__name'><div class='attachment__del' data-attachment-count='" +
                                      b +
                                      "'></div></div><label class='file__size'></label></div></div"
                              )
                            : !1,
                            $("input[name='attachment']").val() ? oa.append("attachment" + b, $("input[name='attachment']").prop("files")[0]) : !1;
                        break;
                    }
                $($(".attachments").children(".attachments__chz")[0]).hide(),
                    (file_name = $("input[name='attachment']")[0].files[0].name),
                    (file_size = Math.floor($("input[name='attachment']")[0].files[0].size / 1e3) + " Кб"),
                    ($(".file__size")[0].textContent = file_size),
                    $(".attachment__name")
                        .eq(0)
                        .prepend('<div class="file__name">' + file_name + "</div>"),
                    $($(".attachments").children(".attachments__chz")[0]).show(),
                    $(".attachments__chz").length === a ? $(".attachments__addButton").hide() : !1,
                    $("input[name='attachment']").val("");
            }),
            $("body").on("click", ".js-redirect", function () {
                var a,
                    b = $(this).attr("data-url");
                (a = "" === window.location.hash ? "#Home" : "#Solutions" === window.location.hash ? "#Expertise" : window.location.hash), window.location.replace(b + a);
            }),
            "true" != k("cookies-info") && $(".cookies-info").removeClass("disabled"),
            $(".js-close-cookieInfo").on("click", function () {
                $(".cookies-info").addClass("disabled"), l("cookies-info", !0, 30);
            });
    });

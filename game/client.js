! function(e) {
    function t(a) {
        if (n[a]) return n[a].exports;
        var r = n[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    var n = {};
    t.m = e, t.c = n, t.i = function(e) {
        return e
    }, t.d = function(e, n, a) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: a
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 180)
}([function(e, t, n) {
    "use strict";

    function a(e, t, n, a, o, i, s, l) {
        if (r(t), !e) {
            var u;
            if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var c = [n, a, o, i, s, l],
                    d = 0;
                u = new Error(t.replace(/%s/g, function() {
                    return c[d++]
                })), u.name = "Invariant Violation"
            }
            throw u.framesToPop = 1, u
        }
    }
    var r = function(e) {};
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        for (var t = arguments.length - 1, n = "Minified React error #" + e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + e, a = 0; a < t; a++) n += "&args[]=" + encodeURIComponent(arguments[a + 1]);
        n += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        var r = new Error(n);
        throw r.name = "Invariant Violation", r.framesToPop = 1, r
    }
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var a = n(7),
        r = a;
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function a(e) {
        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var r = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;
    e.exports = function() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e]
                }).join("")) return !1;
            var a = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                a[e] = e
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, a)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function(e, t) {
        for (var n, s, l = a(e), u = 1; u < arguments.length; u++) {
            n = Object(arguments[u]);
            for (var c in n) o.call(n, c) && (l[c] = n[c]);
            if (r) {
                s = r(n);
                for (var d = 0; d < s.length; d++) i.call(n, s[d]) && (l[s[d]] = n[s[d]])
            }
        }
        return l
    }
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        return 1 === e.nodeType && e.getAttribute(m) === String(t) || 8 === e.nodeType && e.nodeValue === " react-text: " + t + " " || 8 === e.nodeType && e.nodeValue === " react-empty: " + t + " "
    }

    function r(e) {
        for (var t; t = e._renderedComponent;) e = t;
        return e
    }

    function o(e, t) {
        var n = r(e);
        n._hostNode = t, t[f] = n
    }

    function i(e) {
        var t = e._hostNode;
        t && (delete t[f], e._hostNode = null)
    }

    function s(e, t) {
        if (!(e._flags & g.hasCachedChildNodes)) {
            var n = e._renderedChildren,
                i = t.firstChild;
            e: for (var s in n)
                if (n.hasOwnProperty(s)) {
                    var l = n[s],
                        u = r(l)._domID;
                    if (0 !== u) {
                        for (; null !== i; i = i.nextSibling)
                            if (a(i, u)) {
                                o(l, i);
                                continue e
                            }
                        d("32", u)
                    }
                }
            e._flags |= g.hasCachedChildNodes
        }
    }

    function l(e) {
        if (e[f]) return e[f];
        for (var t = []; !e[f];) {
            if (t.push(e), !e.parentNode) return null;
            e = e.parentNode
        }
        for (var n, a; e && (a = e[f]); e = t.pop()) n = a, t.length && s(a, e);
        return n
    }

    function u(e) {
        var t = l(e);
        return null != t && t._hostNode === e ? t : null
    }

    function c(e) {
        if (void 0 === e._hostNode && d("33"), e._hostNode) return e._hostNode;
        for (var t = []; !e._hostNode;) t.push(e), e._hostParent || d("34"), e = e._hostParent;
        for (; t.length; e = t.pop()) s(e, e._hostNode);
        return e._hostNode
    }
    var d = n(1),
        p = n(13),
        h = n(54),
        m = (n(0), p.ID_ATTRIBUTE_NAME),
        g = h,
        f = "__reactInternalInstance$" + Math.random().toString(36).slice(2),
        y = {
            getClosestInstanceFromNode: l,
            getInstanceFromNode: u,
            getNodeFromInstance: c,
            precacheChildNodes: s,
            precacheNode: o,
            uncacheNode: i
        };
    e.exports = y
}, function(e, t, n) {
    "use strict";
    var a = !("undefined" == typeof window || !window.document || !window.document.createElement),
        r = {
            canUseDOM: a,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners: a && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: a && !!window.screen,
            isInWorker: !a
        };
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var a = null;
    e.exports = {
        debugTool: a
    }
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return function() {
            return e
        }
    }
    var r = function() {};
    r.thatReturns = a, r.thatReturnsFalse = a(!1), r.thatReturnsTrue = a(!0), r.thatReturnsNull = a(null), r.thatReturnsThis = function() {
        return this
    }, r.thatReturnsArgument = function(e) {
        return e
    }, e.exports = r
}, function(e, t, n) {
    "use strict";

    function a() {
        A.ReactReconcileTransaction && C || c("123")
    }

    function r() {
        this.reinitializeTransaction(), this.dirtyComponentsLength = null, this.callbackQueue = p.getPooled(), this.reconcileTransaction = A.ReactReconcileTransaction.getPooled(!0)
    }

    function o(e, t, n, r, o, i) {
        return a(), C.batchedUpdates(e, t, n, r, o, i)
    }

    function i(e, t) {
        return e._mountOrder - t._mountOrder
    }

    function s(e) {
        var t = e.dirtyComponentsLength;
        t !== v.length && c("124", t, v.length), v.sort(i), b++;
        for (var n = 0; n < t; n++) {
            var a = v[n],
                r = a._pendingCallbacks;
            a._pendingCallbacks = null;
            var o;
            if (m.logTopLevelRenders) {
                var s = a;
                a._currentElement.type.isReactTopLevelWrapper && (s = a._renderedComponent), o = "React update: " + s.getName(), console.time(o)
            }
            if (g.performUpdateIfNecessary(a, e.reconcileTransaction, b), o && console.timeEnd(o), r)
                for (var l = 0; l < r.length; l++) e.callbackQueue.enqueue(r[l], a.getPublicInstance())
        }
    }

    function l(e) {
        if (a(), !C.isBatchingUpdates) return void C.batchedUpdates(l, e);
        v.push(e), null == e._updateBatchNumber && (e._updateBatchNumber = b + 1)
    }

    function u(e, t) {
        y(C.isBatchingUpdates, "ReactUpdates.asap: Can't enqueue an asap callback in a context whereupdates are not being batched."), w.enqueue(e, t), E = !0
    }
    var c = n(1),
        d = n(3),
        p = n(52),
        h = n(11),
        m = n(57),
        g = n(14),
        f = n(25),
        y = n(0),
        v = [],
        b = 0,
        w = p.getPooled(),
        E = !1,
        C = null,
        M = {
            initialize: function() {
                this.dirtyComponentsLength = v.length
            },
            close: function() {
                this.dirtyComponentsLength !== v.length ? (v.splice(0, this.dirtyComponentsLength), x()) : v.length = 0
            }
        },
        S = {
            initialize: function() {
                this.callbackQueue.reset()
            },
            close: function() {
                this.callbackQueue.notifyAll()
            }
        },
        k = [M, S];
    d(r.prototype, f, {
        getTransactionWrappers: function() {
            return k
        },
        destructor: function() {
            this.dirtyComponentsLength = null, p.release(this.callbackQueue), this.callbackQueue = null, A.ReactReconcileTransaction.release(this.reconcileTransaction), this.reconcileTransaction = null
        },
        perform: function(e, t, n) {
            return f.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, e, t, n)
        }
    }), h.addPoolingTo(r);
    var x = function() {
            for (; v.length || E;) {
                if (v.length) {
                    var e = r.getPooled();
                    e.perform(s, null, e), r.release(e)
                }
                if (E) {
                    E = !1;
                    var t = w;
                    w = p.getPooled(), t.notifyAll(), p.release(t)
                }
            }
        },
        P = {
            injectReconcileTransaction: function(e) {
                e || c("126"), A.ReactReconcileTransaction = e
            },
            injectBatchingStrategy: function(e) {
                e || c("127"), "function" != typeof e.batchedUpdates && c("128"), "boolean" != typeof e.isBatchingUpdates && c("129"), C = e
            }
        },
        A = {
            ReactReconcileTransaction: null,
            batchedUpdates: o,
            enqueueUpdate: l,
            flushBatchedUpdates: x,
            injection: P,
            asap: u
        };
    e.exports = A
}, function(e, t, n) {
    "use strict";

    function a(e, t, n, a) {
        this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n;
        var r = this.constructor.Interface;
        for (var o in r)
            if (r.hasOwnProperty(o)) {
                var s = r[o];
                s ? this[o] = s(n) : "target" === o ? this.target = a : this[o] = n[o]
            }
        var l = null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue;
        return this.isDefaultPrevented = l ? i.thatReturnsTrue : i.thatReturnsFalse, this.isPropagationStopped = i.thatReturnsFalse, this
    }
    var r = n(3),
        o = n(11),
        i = n(7),
        s = (n(2), ["dispatchConfig", "_targetInst", "nativeEvent", "isDefaultPrevented", "isPropagationStopped", "_dispatchListeners", "_dispatchInstances"]),
        l = {
            type: null,
            target: null,
            currentTarget: i.thatReturnsNull,
            eventPhase: null,
            bubbles: null,
            cancelable: null,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: null,
            isTrusted: null
        };
    r(a.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = i.thatReturnsTrue)
        },
        stopPropagation: function() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = i.thatReturnsTrue)
        },
        persist: function() {
            this.isPersistent = i.thatReturnsTrue
        },
        isPersistent: i.thatReturnsFalse,
        destructor: function() {
            var e = this.constructor.Interface;
            for (var t in e) this[t] = null;
            for (var n = 0; n < s.length; n++) this[s[n]] = null
        }
    }), a.Interface = l, a.augmentClass = function(e, t) {
        var n = this,
            a = function() {};
        a.prototype = n.prototype;
        var i = new a;
        r(i, e.prototype), e.prototype = i, e.prototype.constructor = e, e.Interface = r({}, n.Interface, t), e.augmentClass = n.augmentClass, o.addPoolingTo(e, o.fourArgumentPooler)
    }, o.addPoolingTo(a, o.fourArgumentPooler), e.exports = a
}, function(e, t, n) {
    "use strict";
    var a = {
        current: null
    };
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var a = n(1),
        r = (n(0), function(e) {
            var t = this;
            if (t.instancePool.length) {
                var n = t.instancePool.pop();
                return t.call(n, e), n
            }
            return new t(e)
        }),
        o = function(e, t) {
            var n = this;
            if (n.instancePool.length) {
                var a = n.instancePool.pop();
                return n.call(a, e, t), a
            }
            return new n(e, t)
        },
        i = function(e, t, n) {
            var a = this;
            if (a.instancePool.length) {
                var r = a.instancePool.pop();
                return a.call(r, e, t, n), r
            }
            return new a(e, t, n)
        },
        s = function(e, t, n, a) {
            var r = this;
            if (r.instancePool.length) {
                var o = r.instancePool.pop();
                return r.call(o, e, t, n, a), o
            }
            return new r(e, t, n, a)
        },
        l = function(e) {
            var t = this;
            e instanceof t || a("25"), e.destructor(), t.instancePool.length < t.poolSize && t.instancePool.push(e)
        },
        u = r,
        c = function(e, t) {
            var n = e;
            return n.instancePool = [], n.getPooled = t || u, n.poolSize || (n.poolSize = 10), n.release = l, n
        },
        d = {
            addPoolingTo: c,
            oneArgumentPooler: r,
            twoArgumentPooler: o,
            threeArgumentPooler: i,
            fourArgumentPooler: s
        };
    e.exports = d
}, function(e, t, n) {
    "use strict";

    function a(e) {
        if (m) {
            var t = e.node,
                n = e.children;
            if (n.length)
                for (var a = 0; a < n.length; a++) g(t, n[a], null);
            else null != e.html ? d(t, e.html) : null != e.text && h(t, e.text)
        }
    }

    function r(e, t) {
        e.parentNode.replaceChild(t.node, e), a(t)
    }

    function o(e, t) {
        m ? e.children.push(t) : e.node.appendChild(t.node)
    }

    function i(e, t) {
        m ? e.html = t : d(e.node, t)
    }

    function s(e, t) {
        m ? e.text = t : h(e.node, t)
    }

    function l() {
        return this.node.nodeName
    }

    function u(e) {
        return {
            node: e,
            children: [],
            html: null,
            text: null,
            toString: l
        }
    }
    var c = n(30),
        d = n(27),
        p = n(38),
        h = n(70),
        m = "undefined" != typeof document && "number" == typeof document.documentMode || "undefined" != typeof navigator && "string" == typeof navigator.userAgent && /\bEdge\/\d/.test(navigator.userAgent),
        g = p(function(e, t, n) {
            11 === t.node.nodeType || 1 === t.node.nodeType && "object" === t.node.nodeName.toLowerCase() && (null == t.node.namespaceURI || t.node.namespaceURI === c.html) ? (a(t), e.insertBefore(t.node, n)) : (e.insertBefore(t.node, n), a(t))
        });
    u.insertTreeBefore = g, u.replaceChildWithTree = r, u.queueChild = o, u.queueHTML = i, u.queueText = s, e.exports = u
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        return (e & t) === t
    }
    var r = n(1),
        o = (n(0), {
            MUST_USE_PROPERTY: 1,
            HAS_BOOLEAN_VALUE: 4,
            HAS_NUMERIC_VALUE: 8,
            HAS_POSITIVE_NUMERIC_VALUE: 24,
            HAS_OVERLOADED_BOOLEAN_VALUE: 32,
            injectDOMPropertyConfig: function(e) {
                var t = o,
                    n = e.Properties || {},
                    i = e.DOMAttributeNamespaces || {},
                    l = e.DOMAttributeNames || {},
                    u = e.DOMPropertyNames || {},
                    c = e.DOMMutationMethods || {};
                e.isCustomAttribute && s._isCustomAttributeFunctions.push(e.isCustomAttribute);
                for (var d in n) {
                    s.properties.hasOwnProperty(d) && r("48", d);
                    var p = d.toLowerCase(),
                        h = n[d],
                        m = {
                            attributeName: p,
                            attributeNamespace: null,
                            propertyName: d,
                            mutationMethod: null,
                            mustUseProperty: a(h, t.MUST_USE_PROPERTY),
                            hasBooleanValue: a(h, t.HAS_BOOLEAN_VALUE),
                            hasNumericValue: a(h, t.HAS_NUMERIC_VALUE),
                            hasPositiveNumericValue: a(h, t.HAS_POSITIVE_NUMERIC_VALUE),
                            hasOverloadedBooleanValue: a(h, t.HAS_OVERLOADED_BOOLEAN_VALUE)
                        };
                    if (m.hasBooleanValue + m.hasNumericValue + m.hasOverloadedBooleanValue <= 1 || r("50", d), l.hasOwnProperty(d)) {
                        var g = l[d];
                        m.attributeName = g
                    }
                    i.hasOwnProperty(d) && (m.attributeNamespace = i[d]), u.hasOwnProperty(d) && (m.propertyName = u[d]), c.hasOwnProperty(d) && (m.mutationMethod = c[d]), s.properties[d] = m
                }
            }
        }),
        i = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
        s = {
            ID_ATTRIBUTE_NAME: "data-reactid",
            ROOT_ATTRIBUTE_NAME: "data-reactroot",
            ATTRIBUTE_NAME_START_CHAR: i,
            ATTRIBUTE_NAME_CHAR: i + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
            properties: {},
            getPossibleStandardName: null,
            _isCustomAttributeFunctions: [],
            isCustomAttribute: function(e) {
                for (var t = 0; t < s._isCustomAttributeFunctions.length; t++) {
                    if ((0, s._isCustomAttributeFunctions[t])(e)) return !0
                }
                return !1
            },
            injection: o
        };
    e.exports = s
}, function(e, t, n) {
    "use strict";

    function a() {
        r.attachRefs(this, this._currentElement)
    }
    var r = n(140),
        o = (n(6), n(2), {
            mountComponent: function(e, t, n, r, o, i) {
                var s = e.mountComponent(t, n, r, o, i);
                return e._currentElement && null != e._currentElement.ref && t.getReactMountReady().enqueue(a, e), s
            },
            getHostNode: function(e) {
                return e.getHostNode()
            },
            unmountComponent: function(e, t) {
                r.detachRefs(e, e._currentElement), e.unmountComponent(t)
            },
            receiveComponent: function(e, t, n, o) {
                var i = e._currentElement;
                if (t !== i || o !== e._context) {
                    var s = r.shouldUpdateRefs(i, t);
                    s && r.detachRefs(e, i), e.receiveComponent(t, n, o), s && e._currentElement && null != e._currentElement.ref && n.getReactMountReady().enqueue(a, e)
                }
            },
            performUpdateIfNecessary: function(e, t, n) {
                e._updateBatchNumber === n && e.performUpdateIfNecessary(t)
            }
        });
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var a = n(3),
        r = n(74),
        o = n(170),
        i = n(171),
        s = n(16),
        l = n(172),
        u = n(173),
        c = n(174),
        d = n(178),
        p = s.createElement,
        h = s.createFactory,
        m = s.cloneElement,
        g = a,
        f = function(e) {
            return e
        },
        y = {
            Children: {
                map: o.map,
                forEach: o.forEach,
                count: o.count,
                toArray: o.toArray,
                only: d
            },
            Component: r.Component,
            PureComponent: r.PureComponent,
            createElement: p,
            cloneElement: m,
            isValidElement: s.isValidElement,
            PropTypes: l,
            createClass: c,
            createFactory: h,
            createMixin: f,
            DOM: i,
            version: u,
            __spread: g
        };
    e.exports = y
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return void 0 !== e.ref
    }

    function r(e) {
        return void 0 !== e.key
    }
    var o = n(3),
        i = n(10),
        s = (n(2), n(78), Object.prototype.hasOwnProperty),
        l = n(76),
        u = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        },
        c = function(e, t, n, a, r, o, i) {
            var s = {
                $$typeof: l,
                type: e,
                key: t,
                ref: n,
                props: i,
                _owner: o
            };
            return s
        };
    c.createElement = function(e, t, n) {
        var o, l = {},
            d = null,
            p = null;
        if (null != t) {
            a(t) && (p = t.ref), r(t) && (d = "" + t.key), void 0 === t.__self ? null : t.__self, void 0 === t.__source ? null : t.__source;
            for (o in t) s.call(t, o) && !u.hasOwnProperty(o) && (l[o] = t[o])
        }
        var h = arguments.length - 2;
        if (1 === h) l.children = n;
        else if (h > 1) {
            for (var m = Array(h), g = 0; g < h; g++) m[g] = arguments[g + 2];
            l.children = m
        }
        if (e && e.defaultProps) {
            var f = e.defaultProps;
            for (o in f) void 0 === l[o] && (l[o] = f[o])
        }
        return c(e, d, p, 0, 0, i.current, l)
    }, c.createFactory = function(e) {
        var t = c.createElement.bind(null, e);
        return t.type = e, t
    }, c.cloneAndReplaceKey = function(e, t) {
        return c(e.type, t, e.ref, e._self, e._source, e._owner, e.props)
    }, c.cloneElement = function(e, t, n) {
        var l, d = o({}, e.props),
            p = e.key,
            h = e.ref,
            m = (e._self, e._source, e._owner);
        if (null != t) {
            a(t) && (h = t.ref, m = i.current), r(t) && (p = "" + t.key);
            var g;
            e.type && e.type.defaultProps && (g = e.type.defaultProps);
            for (l in t) s.call(t, l) && !u.hasOwnProperty(l) && (void 0 === t[l] && void 0 !== g ? d[l] = g[l] : d[l] = t[l])
        }
        var f = arguments.length - 2;
        if (1 === f) d.children = n;
        else if (f > 1) {
            for (var y = Array(f), v = 0; v < f; v++) y[v] = arguments[v + 2];
            d.children = y
        }
        return c(e.type, p, h, 0, 0, m, d)
    }, c.isValidElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === l
    }, e.exports = c
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return "button" === e || "input" === e || "select" === e || "textarea" === e
    }

    function r(e, t, n) {
        switch (e) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
                return !(!n.disabled || !a(t));
            default:
                return !1
        }
    }
    var o = n(1),
        i = n(31),
        s = n(32),
        l = n(36),
        u = n(63),
        c = n(64),
        d = (n(0), {}),
        p = null,
        h = function(e, t) {
            e && (s.executeDispatchesInOrder(e, t), e.isPersistent() || e.constructor.release(e))
        },
        m = function(e) {
            return h(e, !0)
        },
        g = function(e) {
            return h(e, !1)
        },
        f = function(e) {
            return "." + e._rootNodeID
        },
        y = {
            injection: {
                injectEventPluginOrder: i.injectEventPluginOrder,
                injectEventPluginsByName: i.injectEventPluginsByName
            },
            putListener: function(e, t, n) {
                "function" != typeof n && o("94", t, typeof n);
                var a = f(e);
                (d[t] || (d[t] = {}))[a] = n;
                var r = i.registrationNameModules[t];
                r && r.didPutListener && r.didPutListener(e, t, n)
            },
            getListener: function(e, t) {
                var n = d[t];
                if (r(t, e._currentElement.type, e._currentElement.props)) return null;
                var a = f(e);
                return n && n[a]
            },
            deleteListener: function(e, t) {
                var n = i.registrationNameModules[t];
                n && n.willDeleteListener && n.willDeleteListener(e, t);
                var a = d[t];
                if (a) {
                    delete a[f(e)]
                }
            },
            deleteAllListeners: function(e) {
                var t = f(e);
                for (var n in d)
                    if (d.hasOwnProperty(n) && d[n][t]) {
                        var a = i.registrationNameModules[n];
                        a && a.willDeleteListener && a.willDeleteListener(e, n), delete d[n][t]
                    }
            },
            extractEvents: function(e, t, n, a) {
                for (var r, o = i.plugins, s = 0; s < o.length; s++) {
                    var l = o[s];
                    if (l) {
                        var c = l.extractEvents(e, t, n, a);
                        c && (r = u(r, c))
                    }
                }
                return r
            },
            enqueueEvents: function(e) {
                e && (p = u(p, e))
            },
            processEventQueue: function(e) {
                var t = p;
                p = null, e ? c(t, m) : c(t, g), p && o("95"), l.rethrowCaughtError()
            },
            __purge: function() {
                d = {}
            },
            __getListenerBank: function() {
                return d
            }
        };
    e.exports = y
}, function(e, t, n) {
    "use strict";

    function a(e, t, n) {
        var a = t.dispatchConfig.phasedRegistrationNames[n];
        return y(e, a)
    }

    function r(e, t, n) {
        var r = a(e, n, t);
        r && (n._dispatchListeners = g(n._dispatchListeners, r), n._dispatchInstances = g(n._dispatchInstances, e))
    }

    function o(e) {
        e && e.dispatchConfig.phasedRegistrationNames && m.traverseTwoPhase(e._targetInst, r, e)
    }

    function i(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
            var t = e._targetInst,
                n = t ? m.getParentInstance(t) : null;
            m.traverseTwoPhase(n, r, e)
        }
    }

    function s(e, t, n) {
        if (n && n.dispatchConfig.registrationName) {
            var a = n.dispatchConfig.registrationName,
                r = y(e, a);
            r && (n._dispatchListeners = g(n._dispatchListeners, r), n._dispatchInstances = g(n._dispatchInstances, e))
        }
    }

    function l(e) {
        e && e.dispatchConfig.registrationName && s(e._targetInst, null, e)
    }

    function u(e) {
        f(e, o)
    }

    function c(e) {
        f(e, i)
    }

    function d(e, t, n, a) {
        m.traverseEnterLeave(n, a, s, e, t)
    }

    function p(e) {
        f(e, l)
    }
    var h = n(17),
        m = n(32),
        g = n(63),
        f = n(64),
        y = (n(2), h.getListener),
        v = {
            accumulateTwoPhaseDispatches: u,
            accumulateTwoPhaseDispatchesSkipTarget: c,
            accumulateDirectDispatches: p,
            accumulateEnterLeaveDispatches: d
        };
    e.exports = v
}, function(e, t, n) {
    "use strict";
    var a = {
        remove: function(e) {
            e._reactInternalInstance = void 0
        },
        get: function(e) {
            return e._reactInternalInstance
        },
        has: function(e) {
            return void 0 !== e._reactInternalInstance
        },
        set: function(e, t) {
            e._reactInternalInstance = t
        }
    };
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e, t, n, a) {
        return r.call(this, e, t, n, a)
    }
    var r = n(9),
        o = n(41),
        i = {
            view: function(e) {
                if (e.view) return e.view;
                var t = o(e);
                if (t.window === t) return t;
                var n = t.ownerDocument;
                return n ? n.defaultView || n.parentWindow : window
            },
            detail: function(e) {
                return e.detail || 0
            }
        };
    r.augmentClass(a, i), e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        for (var t = arguments.length - 1, n = "Minified React error #" + e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + e, a = 0; a < t; a++) n += "&args[]=" + encodeURIComponent(arguments[a + 1]);
        n += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        var r = new Error(n);
        throw r.name = "Invariant Violation", r.framesToPop = 1, r
    }
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var a = {};
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return Object.prototype.hasOwnProperty.call(e, g) || (e[g] = h++, d[e[g]] = {}), d[e[g]]
    }
    var r, o = n(3),
        i = n(31),
        s = n(132),
        l = n(62),
        u = n(164),
        c = n(42),
        d = {},
        p = !1,
        h = 0,
        m = {
            topAbort: "abort",
            topAnimationEnd: u("animationend") || "animationend",
            topAnimationIteration: u("animationiteration") || "animationiteration",
            topAnimationStart: u("animationstart") || "animationstart",
            topBlur: "blur",
            topCanPlay: "canplay",
            topCanPlayThrough: "canplaythrough",
            topChange: "change",
            topClick: "click",
            topCompositionEnd: "compositionend",
            topCompositionStart: "compositionstart",
            topCompositionUpdate: "compositionupdate",
            topContextMenu: "contextmenu",
            topCopy: "copy",
            topCut: "cut",
            topDoubleClick: "dblclick",
            topDrag: "drag",
            topDragEnd: "dragend",
            topDragEnter: "dragenter",
            topDragExit: "dragexit",
            topDragLeave: "dragleave",
            topDragOver: "dragover",
            topDragStart: "dragstart",
            topDrop: "drop",
            topDurationChange: "durationchange",
            topEmptied: "emptied",
            topEncrypted: "encrypted",
            topEnded: "ended",
            topError: "error",
            topFocus: "focus",
            topInput: "input",
            topKeyDown: "keydown",
            topKeyPress: "keypress",
            topKeyUp: "keyup",
            topLoadedData: "loadeddata",
            topLoadedMetadata: "loadedmetadata",
            topLoadStart: "loadstart",
            topMouseDown: "mousedown",
            topMouseMove: "mousemove",
            topMouseOut: "mouseout",
            topMouseOver: "mouseover",
            topMouseUp: "mouseup",
            topPaste: "paste",
            topPause: "pause",
            topPlay: "play",
            topPlaying: "playing",
            topProgress: "progress",
            topRateChange: "ratechange",
            topScroll: "scroll",
            topSeeked: "seeked",
            topSeeking: "seeking",
            topSelectionChange: "selectionchange",
            topStalled: "stalled",
            topSuspend: "suspend",
            topTextInput: "textInput",
            topTimeUpdate: "timeupdate",
            topTouchCancel: "touchcancel",
            topTouchEnd: "touchend",
            topTouchMove: "touchmove",
            topTouchStart: "touchstart",
            topTransitionEnd: u("transitionend") || "transitionend",
            topVolumeChange: "volumechange",
            topWaiting: "waiting",
            topWheel: "wheel"
        },
        g = "_reactListenersID" + String(Math.random()).slice(2),
        f = o({}, s, {
            ReactEventListener: null,
            injection: {
                injectReactEventListener: function(e) {
                    e.setHandleTopLevel(f.handleTopLevel), f.ReactEventListener = e
                }
            },
            setEnabled: function(e) {
                f.ReactEventListener && f.ReactEventListener.setEnabled(e)
            },
            isEnabled: function() {
                return !(!f.ReactEventListener || !f.ReactEventListener.isEnabled())
            },
            listenTo: function(e, t) {
                for (var n = t, r = a(n), o = i.registrationNameDependencies[e], s = 0; s < o.length; s++) {
                    var l = o[s];
                    r.hasOwnProperty(l) && r[l] || ("topWheel" === l ? c("wheel") ? f.ReactEventListener.trapBubbledEvent("topWheel", "wheel", n) : c("mousewheel") ? f.ReactEventListener.trapBubbledEvent("topWheel", "mousewheel", n) : f.ReactEventListener.trapBubbledEvent("topWheel", "DOMMouseScroll", n) : "topScroll" === l ? c("scroll", !0) ? f.ReactEventListener.trapCapturedEvent("topScroll", "scroll", n) : f.ReactEventListener.trapBubbledEvent("topScroll", "scroll", f.ReactEventListener.WINDOW_HANDLE) : "topFocus" === l || "topBlur" === l ? (c("focus", !0) ? (f.ReactEventListener.trapCapturedEvent("topFocus", "focus", n), f.ReactEventListener.trapCapturedEvent("topBlur", "blur", n)) : c("focusin") && (f.ReactEventListener.trapBubbledEvent("topFocus", "focusin", n), f.ReactEventListener.trapBubbledEvent("topBlur", "focusout", n)), r.topBlur = !0, r.topFocus = !0) : m.hasOwnProperty(l) && f.ReactEventListener.trapBubbledEvent(l, m[l], n), r[l] = !0)
                }
            },
            trapBubbledEvent: function(e, t, n) {
                return f.ReactEventListener.trapBubbledEvent(e, t, n)
            },
            trapCapturedEvent: function(e, t, n) {
                return f.ReactEventListener.trapCapturedEvent(e, t, n)
            },
            supportsEventPageXY: function() {
                if (!document.createEvent) return !1;
                var e = document.createEvent("MouseEvent");
                return null != e && "pageX" in e
            },
            ensureScrollValueMonitoring: function() {
                if (void 0 === r && (r = f.supportsEventPageXY()), !r && !p) {
                    var e = l.refreshScrollValues;
                    f.ReactEventListener.monitorScrollValue(e), p = !0
                }
            }
        });
    e.exports = f
}, function(e, t, n) {
    "use strict";

    function a(e, t, n, a) {
        return r.call(this, e, t, n, a)
    }
    var r = n(20),
        o = n(62),
        i = n(40),
        s = {
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: i,
            button: function(e) {
                var t = e.button;
                return "which" in e ? t : 2 === t ? 2 : 4 === t ? 1 : 0
            },
            buttons: null,
            relatedTarget: function(e) {
                return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
            },
            pageX: function(e) {
                return "pageX" in e ? e.pageX : e.clientX + o.currentScrollLeft
            },
            pageY: function(e) {
                return "pageY" in e ? e.pageY : e.clientY + o.currentScrollTop
            }
        };
    r.augmentClass(a, s), e.exports = a
}, function(e, t, n) {
    "use strict";
    var a = n(1),
        r = (n(0), {}),
        o = {
            reinitializeTransaction: function() {
                this.transactionWrappers = this.getTransactionWrappers(), this.wrapperInitData ? this.wrapperInitData.length = 0 : this.wrapperInitData = [], this._isInTransaction = !1
            },
            _isInTransaction: !1,
            getTransactionWrappers: null,
            isInTransaction: function() {
                return !!this._isInTransaction
            },
            perform: function(e, t, n, r, o, i, s, l) {
                this.isInTransaction() && a("27");
                var u, c;
                try {
                    this._isInTransaction = !0, u = !0, this.initializeAll(0), c = e.call(t, n, r, o, i, s, l), u = !1
                } finally {
                    try {
                        if (u) try {
                            this.closeAll(0)
                        } catch (e) {} else this.closeAll(0)
                    } finally {
                        this._isInTransaction = !1
                    }
                }
                return c
            },
            initializeAll: function(e) {
                for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
                    var a = t[n];
                    try {
                        this.wrapperInitData[n] = r, this.wrapperInitData[n] = a.initialize ? a.initialize.call(this) : null
                    } finally {
                        if (this.wrapperInitData[n] === r) try {
                            this.initializeAll(n + 1)
                        } catch (e) {}
                    }
                }
            },
            closeAll: function(e) {
                this.isInTransaction() || a("28");
                for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
                    var o, i = t[n],
                        s = this.wrapperInitData[n];
                    try {
                        o = !0, s !== r && i.close && i.close.call(this, s), o = !1
                    } finally {
                        if (o) try {
                            this.closeAll(n + 1)
                        } catch (e) {}
                    }
                }
                this.wrapperInitData.length = 0
            }
        };
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = "" + e,
            n = o.exec(t);
        if (!n) return t;
        var a, r = "",
            i = 0,
            s = 0;
        for (i = n.index; i < t.length; i++) {
            switch (t.charCodeAt(i)) {
                case 34:
                    a = "&quot;";
                    break;
                case 38:
                    a = "&amp;";
                    break;
                case 39:
                    a = "&#x27;";
                    break;
                case 60:
                    a = "&lt;";
                    break;
                case 62:
                    a = "&gt;";
                    break;
                default:
                    continue
            }
            s !== i && (r += t.substring(s, i)), s = i + 1, r += a
        }
        return s !== i ? r + t.substring(s, i) : r
    }

    function r(e) {
        return "boolean" == typeof e || "number" == typeof e ? "" + e : a(e)
    }
    var o = /["'&<>]/;
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var a, r = n(5),
        o = n(30),
        i = /^[ \r\n\t\f]/,
        s = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,
        l = n(38),
        u = l(function(e, t) {
            if (e.namespaceURI !== o.svg || "innerHTML" in e) e.innerHTML = t;
            else {
                a = a || document.createElement("div"), a.innerHTML = "<svg>" + t + "</svg>";
                for (var n = a.firstChild; n.firstChild;) e.appendChild(n.firstChild)
            }
        });
    if (r.canUseDOM) {
        var c = document.createElement("div");
        c.innerHTML = " ", "" === c.innerHTML && (u = function(e, t) {
            if (e.parentNode && e.parentNode.replaceChild(e, e), i.test(t) || "<" === t[0] && s.test(t)) {
                e.innerHTML = String.fromCharCode(65279) + t;
                var n = e.firstChild;
                1 === n.data.length ? e.removeChild(n) : n.deleteData(0, 1)
            } else e.innerHTML = t
        }), c = null
    }
    e.exports = u
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e !== e && t !== t
    }

    function r(e, t) {
        if (a(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var i = 0; i < n.length; i++)
            if (!o.call(t, n[i]) || !a(e[n[i]], t[n[i]])) return !1;
        return !0
    }
    var o = Object.prototype.hasOwnProperty;
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        return Array.isArray(t) && (t = t[1]), t ? t.nextSibling : e.firstChild
    }

    function r(e, t, n) {
        c.insertTreeBefore(e, t, n)
    }

    function o(e, t, n) {
        Array.isArray(t) ? s(e, t[0], t[1], n) : g(e, t, n)
    }

    function i(e, t) {
        if (Array.isArray(t)) {
            var n = t[1];
            t = t[0], l(e, t, n), e.removeChild(n)
        }
        e.removeChild(t)
    }

    function s(e, t, n, a) {
        for (var r = t;;) {
            var o = r.nextSibling;
            if (g(e, r, a), r === n) break;
            r = o
        }
    }

    function l(e, t, n) {
        for (;;) {
            var a = t.nextSibling;
            if (a === n) break;
            e.removeChild(a)
        }
    }

    function u(e, t, n) {
        var a = e.parentNode,
            r = e.nextSibling;
        r === t ? n && g(a, document.createTextNode(n), r) : n ? (m(r, n), l(a, r, t)) : l(a, e, t)
    }
    var c = n(12),
        d = n(109),
        p = (n(4), n(6), n(38)),
        h = n(27),
        m = n(70),
        g = p(function(e, t, n) {
            e.insertBefore(t, n)
        }),
        f = d.dangerouslyReplaceNodeWithMarkup,
        y = {
            dangerouslyReplaceNodeWithMarkup: f,
            replaceDelimitedText: u,
            processUpdates: function(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var s = t[n];
                    switch (s.type) {
                        case "INSERT_MARKUP":
                            r(e, s.content, a(e, s.afterNode));
                            break;
                        case "MOVE_EXISTING":
                            o(e, s.fromNode, a(e, s.afterNode));
                            break;
                        case "SET_MARKUP":
                            h(e, s.content);
                            break;
                        case "TEXT_CONTENT":
                            m(e, s.content);
                            break;
                        case "REMOVE_NODE":
                            i(e, s.fromNode)
                    }
                }
            }
        };
    e.exports = y
}, function(e, t, n) {
    "use strict";
    var a = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg"
    };
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a() {
        if (s)
            for (var e in l) {
                var t = l[e],
                    n = s.indexOf(e);
                if (n > -1 || i("96", e), !u.plugins[n]) {
                    t.extractEvents || i("97", e), u.plugins[n] = t;
                    var a = t.eventTypes;
                    for (var o in a) r(a[o], t, o) || i("98", o, e)
                }
            }
    }

    function r(e, t, n) {
        u.eventNameDispatchConfigs.hasOwnProperty(n) && i("99", n), u.eventNameDispatchConfigs[n] = e;
        var a = e.phasedRegistrationNames;
        if (a) {
            for (var r in a)
                if (a.hasOwnProperty(r)) {
                    var s = a[r];
                    o(s, t, n)
                }
            return !0
        }
        return !!e.registrationName && (o(e.registrationName, t, n), !0)
    }

    function o(e, t, n) {
        u.registrationNameModules[e] && i("100", e), u.registrationNameModules[e] = t, u.registrationNameDependencies[e] = t.eventTypes[n].dependencies
    }
    var i = n(1),
        s = (n(0), null),
        l = {},
        u = {
            plugins: [],
            eventNameDispatchConfigs: {},
            registrationNameModules: {},
            registrationNameDependencies: {},
            possibleRegistrationNames: null,
            injectEventPluginOrder: function(e) {
                s && i("101"), s = Array.prototype.slice.call(e), a()
            },
            injectEventPluginsByName: function(e) {
                var t = !1;
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        var r = e[n];
                        l.hasOwnProperty(n) && l[n] === r || (l[n] && i("102", n), l[n] = r, t = !0)
                    }
                t && a()
            },
            getPluginModuleForEvent: function(e) {
                var t = e.dispatchConfig;
                if (t.registrationName) return u.registrationNameModules[t.registrationName] || null;
                if (void 0 !== t.phasedRegistrationNames) {
                    var n = t.phasedRegistrationNames;
                    for (var a in n)
                        if (n.hasOwnProperty(a)) {
                            var r = u.registrationNameModules[n[a]];
                            if (r) return r
                        }
                }
                return null
            },
            _resetEventPlugins: function() {
                s = null;
                for (var e in l) l.hasOwnProperty(e) && delete l[e];
                u.plugins.length = 0;
                var t = u.eventNameDispatchConfigs;
                for (var n in t) t.hasOwnProperty(n) && delete t[n];
                var a = u.registrationNameModules;
                for (var r in a) a.hasOwnProperty(r) && delete a[r]
            }
        };
    e.exports = u
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return "topMouseUp" === e || "topTouchEnd" === e || "topTouchCancel" === e
    }

    function r(e) {
        return "topMouseMove" === e || "topTouchMove" === e
    }

    function o(e) {
        return "topMouseDown" === e || "topTouchStart" === e
    }

    function i(e, t, n, a) {
        var r = e.type || "unknown-event";
        e.currentTarget = y.getNodeFromInstance(a), t ? g.invokeGuardedCallbackWithCatch(r, n, e) : g.invokeGuardedCallback(r, n, e), e.currentTarget = null
    }

    function s(e, t) {
        var n = e._dispatchListeners,
            a = e._dispatchInstances;
        if (Array.isArray(n))
            for (var r = 0; r < n.length && !e.isPropagationStopped(); r++) i(e, t, n[r], a[r]);
        else n && i(e, t, n, a);
        e._dispatchListeners = null, e._dispatchInstances = null
    }

    function l(e) {
        var t = e._dispatchListeners,
            n = e._dispatchInstances;
        if (Array.isArray(t)) {
            for (var a = 0; a < t.length && !e.isPropagationStopped(); a++)
                if (t[a](e, n[a])) return n[a]
        } else if (t && t(e, n)) return n;
        return null
    }

    function u(e) {
        var t = l(e);
        return e._dispatchInstances = null, e._dispatchListeners = null, t
    }

    function c(e) {
        var t = e._dispatchListeners,
            n = e._dispatchInstances;
        Array.isArray(t) && m("103"), e.currentTarget = t ? y.getNodeFromInstance(n) : null;
        var a = t ? t(e) : null;
        return e.currentTarget = null, e._dispatchListeners = null, e._dispatchInstances = null, a
    }

    function d(e) {
        return !!e._dispatchListeners
    }
    var p, h, m = n(1),
        g = n(36),
        f = (n(0), n(2), {
            injectComponentTree: function(e) {
                p = e
            },
            injectTreeTraversal: function(e) {
                h = e
            }
        }),
        y = {
            isEndish: a,
            isMoveish: r,
            isStartish: o,
            executeDirectDispatch: c,
            executeDispatchesInOrder: s,
            executeDispatchesInOrderStopAtTrue: u,
            hasDispatches: d,
            getInstanceFromNode: function(e) {
                return p.getInstanceFromNode(e)
            },
            getNodeFromInstance: function(e) {
                return p.getNodeFromInstance(e)
            },
            isAncestor: function(e, t) {
                return h.isAncestor(e, t)
            },
            getLowestCommonAncestor: function(e, t) {
                return h.getLowestCommonAncestor(e, t)
            },
            getParentInstance: function(e) {
                return h.getParentInstance(e)
            },
            traverseTwoPhase: function(e, t, n) {
                return h.traverseTwoPhase(e, t, n)
            },
            traverseEnterLeave: function(e, t, n, a, r) {
                return h.traverseEnterLeave(e, t, n, a, r)
            },
            injection: f
        };
    e.exports = y
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + ("" + e).replace(/[=:]/g, function(e) {
            return t[e]
        })
    }

    function r(e) {
        var t = /(=0|=2)/g,
            n = {
                "=0": "=",
                "=2": ":"
            };
        return ("" + ("." === e[0] && "$" === e[1] ? e.substring(2) : e.substring(1))).replace(t, function(e) {
            return n[e]
        })
    }
    var o = {
        escape: a,
        unescape: r
    };
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function a(e) {
        null != e.checkedLink && null != e.valueLink && s("87")
    }

    function r(e) {
        a(e), (null != e.value || null != e.onChange) && s("88")
    }

    function o(e) {
        a(e), (null != e.checked || null != e.onChange) && s("89")
    }

    function i(e) {
        if (e) {
            var t = e.getName();
            if (t) return " Check the render method of `" + t + "`."
        }
        return ""
    }
    var s = n(1),
        l = n(138),
        u = n(50),
        c = n(15),
        d = u(c.isValidElement),
        p = (n(0), n(2), {
            button: !0,
            checkbox: !0,
            image: !0,
            hidden: !0,
            radio: !0,
            reset: !0,
            submit: !0
        }),
        h = {
            value: function(e, t, n) {
                return !e[t] || p[e.type] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")
            },
            checked: function(e, t, n) {
                return !e[t] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")
            },
            onChange: d.func
        },
        m = {},
        g = {
            checkPropTypes: function(e, t, n) {
                for (var a in h) {
                    if (h.hasOwnProperty(a)) var r = h[a](t, a, e, "prop", null, l);
                    if (r instanceof Error && !(r.message in m)) {
                        m[r.message] = !0;
                        i(n)
                    }
                }
            },
            getValue: function(e) {
                return e.valueLink ? (r(e), e.valueLink.value) : e.value
            },
            getChecked: function(e) {
                return e.checkedLink ? (o(e), e.checkedLink.value) : e.checked
            },
            executeOnChange: function(e, t) {
                return e.valueLink ? (r(e), e.valueLink.requestChange(t.target.value)) : e.checkedLink ? (o(e), e.checkedLink.requestChange(t.target.checked)) : e.onChange ? e.onChange.call(void 0, t) : void 0
            }
        };
    e.exports = g
}, function(e, t, n) {
    "use strict";
    var a = n(1),
        r = (n(0), !1),
        o = {
            replaceNodeWithMarkup: null,
            processChildrenUpdates: null,
            injection: {
                injectEnvironment: function(e) {
                    r && a("104"), o.replaceNodeWithMarkup = e.replaceNodeWithMarkup, o.processChildrenUpdates = e.processChildrenUpdates, r = !0
                }
            }
        };
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function a(e, t, n) {
        try {
            t(n)
        } catch (e) {
            null === r && (r = e)
        }
    }
    var r = null,
        o = {
            invokeGuardedCallback: a,
            invokeGuardedCallbackWithCatch: a,
            rethrowCaughtError: function() {
                if (r) {
                    var e = r;
                    throw r = null, e
                }
            }
        };
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function a(e) {
        l.enqueueUpdate(e)
    }

    function r(e) {
        var t = typeof e;
        if ("object" !== t) return t;
        var n = e.constructor && e.constructor.name || t,
            a = Object.keys(e);
        return a.length > 0 && a.length < 20 ? n + " (keys: " + a.join(", ") + ")" : n
    }

    function o(e, t) {
        var n = s.get(e);
        if (!n) {
            return null
        }
        return n
    }
    var i = n(1),
        s = (n(10), n(19)),
        l = (n(6), n(8)),
        u = (n(0), n(2), {
            isMounted: function(e) {
                var t = s.get(e);
                return !!t && !!t._renderedComponent
            },
            enqueueCallback: function(e, t, n) {
                u.validateCallback(t, n);
                var r = o(e);
                if (!r) return null;
                r._pendingCallbacks ? r._pendingCallbacks.push(t) : r._pendingCallbacks = [t], a(r)
            },
            enqueueCallbackInternal: function(e, t) {
                e._pendingCallbacks ? e._pendingCallbacks.push(t) : e._pendingCallbacks = [t], a(e)
            },
            enqueueForceUpdate: function(e) {
                var t = o(e, "forceUpdate");
                t && (t._pendingForceUpdate = !0, a(t))
            },
            enqueueReplaceState: function(e, t, n) {
                var r = o(e, "replaceState");
                r && (r._pendingStateQueue = [t], r._pendingReplaceState = !0, void 0 !== n && null !== n && (u.validateCallback(n, "replaceState"), r._pendingCallbacks ? r._pendingCallbacks.push(n) : r._pendingCallbacks = [n]), a(r))
            },
            enqueueSetState: function(e, t) {
                var n = o(e, "setState");
                if (n) {
                    (n._pendingStateQueue || (n._pendingStateQueue = [])).push(t), a(n)
                }
            },
            enqueueElementInternal: function(e, t, n) {
                e._pendingElement = t, e._context = n, a(e)
            },
            validateCallback: function(e, t) {
                e && "function" != typeof e && i("122", t, r(e))
            }
        });
    e.exports = u
}, function(e, t, n) {
    "use strict";
    var a = function(e) {
        return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, n, a, r) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, a, r)
            })
        } : e
    };
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t, n = e.keyCode;
        return "charCode" in e ? 0 === (t = e.charCode) && 13 === n && (t = 13) : t = n, t >= 32 || 13 === t ? t : 0
    }
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = this,
            n = t.nativeEvent;
        if (n.getModifierState) return n.getModifierState(e);
        var a = o[e];
        return !!a && !!n[a]
    }

    function r(e) {
        return a
    }
    var o = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = e.target || e.srcElement || window;
        return t.correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t
    }
    e.exports = a
}, function(e, t, n) {
    "use strict";
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @param {?boolean} capture Check if the capture phase is supported.
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function a(e, t) {
        if (!o.canUseDOM || t && !("addEventListener" in document)) return !1;
        var n = "on" + e,
            a = n in document;
        if (!a) {
            var i = document.createElement("div");
            i.setAttribute(n, "return;"), a = "function" == typeof i[n]
        }
        return !a && r && "wheel" === e && (a = document.implementation.hasFeature("Events.wheel", "3.0")), a
    }
    var r, o = n(5);
    o.canUseDOM && (r = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "")), e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        var n = null === e || !1 === e,
            a = null === t || !1 === t;
        if (n || a) return n === a;
        var r = typeof e,
            o = typeof t;
        return "string" === r || "number" === r ? "string" === o || "number" === o : "object" === o && e.type === t.type && e.key === t.key
    }
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var a = (n(3), n(7)),
        r = (n(2), a);
    e.exports = r
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var a = n(7),
        r = {
            listen: function(e, t, n) {
                return e.addEventListener ? (e.addEventListener(t, n, !1), {
                    remove: function() {
                        e.removeEventListener(t, n, !1)
                    }
                }) : e.attachEvent ? (e.attachEvent("on" + t, n), {
                    remove: function() {
                        e.detachEvent("on" + t, n)
                    }
                }) : void 0
            },
            capture: function(e, t, n) {
                return e.addEventListener ? (e.addEventListener(t, n, !0), {
                    remove: function() {
                        e.removeEventListener(t, n, !0)
                    }
                }) : {
                    remove: a
                }
            },
            registerDefault: function() {}
        };
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function a(e) {
        try {
            e.focus()
        } catch (e) {}
    }
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
        try {
            return e.activeElement || e.body
        } catch (t) {
            return e.body
        }
    }
    e.exports = a
}, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function r(e) {
        if (c === setTimeout) return setTimeout(e, 0);
        if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
        try {
            return c(e, 0)
        } catch (t) {
            try {
                return c.call(null, e, 0)
            } catch (t) {
                return c.call(this, e, 0)
            }
        }
    }

    function o(e) {
        if (d === clearTimeout) return clearTimeout(e);
        if ((d === a || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
        try {
            return d(e)
        } catch (t) {
            try {
                return d.call(null, e)
            } catch (t) {
                return d.call(this, e)
            }
        }
    }

    function i() {
        g && h && (g = !1, h.length ? m = h.concat(m) : f = -1, m.length && s())
    }

    function s() {
        if (!g) {
            var e = r(i);
            g = !0;
            for (var t = m.length; t;) {
                for (h = m, m = []; ++f < t;) h && h[f].run();
                f = -1, t = m.length
            }
            h = null, g = !1, o(e)
        }
    }

    function l(e, t) {
        this.fun = e, this.array = t
    }

    function u() {}
    var c, d, p = e.exports = {};
    ! function() {
        try {
            c = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            c = n
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            d = a
        }
    }();
    var h, m = [],
        g = !1,
        f = -1;
    p.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        m.push(new l(e, t)), 1 !== m.length || g || r(s)
    }, l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = u, p.addListener = u, p.once = u, p.off = u, p.removeListener = u, p.removeAllListeners = u, p.emit = u, p.prependListener = u, p.prependOnceListener = u, p.listeners = function(e) {
        return []
    }, p.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, p.cwd = function() {
        return "/"
    }, p.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, p.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";
    var a = n(101);
    e.exports = function(e) {
        return a(e, !1)
    }
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        return e + t.charAt(0).toUpperCase() + t.substring(1)
    }
    var r = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        o = ["Webkit", "ms", "Moz", "O"];
    Object.keys(r).forEach(function(e) {
        o.forEach(function(t) {
            r[a(t, e)] = r[e]
        })
    });
    var i = {
            background: {
                backgroundAttachment: !0,
                backgroundColor: !0,
                backgroundImage: !0,
                backgroundPositionX: !0,
                backgroundPositionY: !0,
                backgroundRepeat: !0
            },
            backgroundPosition: {
                backgroundPositionX: !0,
                backgroundPositionY: !0
            },
            border: {
                borderWidth: !0,
                borderStyle: !0,
                borderColor: !0
            },
            borderBottom: {
                borderBottomWidth: !0,
                borderBottomStyle: !0,
                borderBottomColor: !0
            },
            borderLeft: {
                borderLeftWidth: !0,
                borderLeftStyle: !0,
                borderLeftColor: !0
            },
            borderRight: {
                borderRightWidth: !0,
                borderRightStyle: !0,
                borderRightColor: !0
            },
            borderTop: {
                borderTopWidth: !0,
                borderTopStyle: !0,
                borderTopColor: !0
            },
            font: {
                fontStyle: !0,
                fontVariant: !0,
                fontWeight: !0,
                fontSize: !0,
                lineHeight: !0,
                fontFamily: !0
            },
            outline: {
                outlineWidth: !0,
                outlineStyle: !0,
                outlineColor: !0
            }
        },
        s = {
            isUnitlessNumber: r,
            shorthandPropertyExpansions: i
        };
    e.exports = s
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var r = n(1),
        o = n(11),
        i = (n(0), function() {
            function e(t) {
                a(this, e), this._callbacks = null, this._contexts = null, this._arg = t
            }
            return e.prototype.enqueue = function(e, t) {
                this._callbacks = this._callbacks || [], this._callbacks.push(e), this._contexts = this._contexts || [], this._contexts.push(t)
            }, e.prototype.notifyAll = function() {
                var e = this._callbacks,
                    t = this._contexts,
                    n = this._arg;
                if (e && t) {
                    e.length !== t.length && r("24"), this._callbacks = null, this._contexts = null;
                    for (var a = 0; a < e.length; a++) e[a].call(t[a], n);
                    e.length = 0, t.length = 0
                }
            }, e.prototype.checkpoint = function() {
                return this._callbacks ? this._callbacks.length : 0
            }, e.prototype.rollback = function(e) {
                this._callbacks && this._contexts && (this._callbacks.length = e, this._contexts.length = e)
            }, e.prototype.reset = function() {
                this._callbacks = null, this._contexts = null
            }, e.prototype.destructor = function() {
                this.reset()
            }, e
        }());
    e.exports = o.addPoolingTo(i)
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return !!u.hasOwnProperty(e) || !l.hasOwnProperty(e) && (s.test(e) ? (u[e] = !0, !0) : (l[e] = !0, !1))
    }

    function r(e, t) {
        return null == t || e.hasBooleanValue && !t || e.hasNumericValue && isNaN(t) || e.hasPositiveNumericValue && t < 1 || e.hasOverloadedBooleanValue && !1 === t
    }
    var o = n(13),
        i = (n(4), n(6), n(165)),
        s = (n(2), new RegExp("^[" + o.ATTRIBUTE_NAME_START_CHAR + "][" + o.ATTRIBUTE_NAME_CHAR + "]*$")),
        l = {},
        u = {},
        c = {
            createMarkupForID: function(e) {
                return o.ID_ATTRIBUTE_NAME + "=" + i(e)
            },
            setAttributeForID: function(e, t) {
                e.setAttribute(o.ID_ATTRIBUTE_NAME, t)
            },
            createMarkupForRoot: function() {
                return o.ROOT_ATTRIBUTE_NAME + '=""'
            },
            setAttributeForRoot: function(e) {
                e.setAttribute(o.ROOT_ATTRIBUTE_NAME, "")
            },
            createMarkupForProperty: function(e, t) {
                var n = o.properties.hasOwnProperty(e) ? o.properties[e] : null;
                if (n) {
                    if (r(n, t)) return "";
                    var a = n.attributeName;
                    return n.hasBooleanValue || n.hasOverloadedBooleanValue && !0 === t ? a + '=""' : a + "=" + i(t)
                }
                return o.isCustomAttribute(e) ? null == t ? "" : e + "=" + i(t) : null
            },
            createMarkupForCustomAttribute: function(e, t) {
                return a(e) && null != t ? e + "=" + i(t) : ""
            },
            setValueForProperty: function(e, t, n) {
                var a = o.properties.hasOwnProperty(t) ? o.properties[t] : null;
                if (a) {
                    var i = a.mutationMethod;
                    if (i) i(e, n);
                    else {
                        if (r(a, n)) return void this.deleteValueForProperty(e, t);
                        if (a.mustUseProperty) e[a.propertyName] = n;
                        else {
                            var s = a.attributeName,
                                l = a.attributeNamespace;
                            l ? e.setAttributeNS(l, s, "" + n) : a.hasBooleanValue || a.hasOverloadedBooleanValue && !0 === n ? e.setAttribute(s, "") : e.setAttribute(s, "" + n)
                        }
                    }
                } else if (o.isCustomAttribute(t)) return void c.setValueForAttribute(e, t, n)
            },
            setValueForAttribute: function(e, t, n) {
                if (a(t)) {
                    null == n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)
                }
            },
            deleteValueForAttribute: function(e, t) {
                e.removeAttribute(t)
            },
            deleteValueForProperty: function(e, t) {
                var n = o.properties.hasOwnProperty(t) ? o.properties[t] : null;
                if (n) {
                    var a = n.mutationMethod;
                    if (a) a(e, void 0);
                    else if (n.mustUseProperty) {
                        var r = n.propertyName;
                        n.hasBooleanValue ? e[r] = !1 : e[r] = ""
                    } else e.removeAttribute(n.attributeName)
                } else o.isCustomAttribute(t) && e.removeAttribute(t)
            }
        };
    e.exports = c
}, function(e, t, n) {
    "use strict";
    var a = {
        hasCachedChildNodes: 1
    };
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a() {
        if (this._rootNodeID && this._wrapperState.pendingUpdate) {
            this._wrapperState.pendingUpdate = !1;
            var e = this._currentElement.props,
                t = s.getValue(e);
            null != t && r(this, Boolean(e.multiple), t)
        }
    }

    function r(e, t, n) {
        var a, r, o = l.getNodeFromInstance(e).options;
        if (t) {
            for (a = {}, r = 0; r < n.length; r++) a["" + n[r]] = !0;
            for (r = 0; r < o.length; r++) {
                var i = a.hasOwnProperty(o[r].value);
                o[r].selected !== i && (o[r].selected = i)
            }
        } else {
            for (a = "" + n, r = 0; r < o.length; r++)
                if (o[r].value === a) return void(o[r].selected = !0);
            o.length && (o[0].selected = !0)
        }
    }

    function o(e) {
        var t = this._currentElement.props,
            n = s.executeOnChange(t, e);
        return this._rootNodeID && (this._wrapperState.pendingUpdate = !0), u.asap(a, this), n
    }
    var i = n(3),
        s = n(34),
        l = n(4),
        u = n(8),
        c = (n(2), !1),
        d = {
            getHostProps: function(e, t) {
                return i({}, t, {
                    onChange: e._wrapperState.onChange,
                    value: void 0
                })
            },
            mountWrapper: function(e, t) {
                var n = s.getValue(t);
                e._wrapperState = {
                    pendingUpdate: !1,
                    initialValue: null != n ? n : t.defaultValue,
                    listeners: null,
                    onChange: o.bind(e),
                    wasMultiple: Boolean(t.multiple)
                }, void 0 === t.value || void 0 === t.defaultValue || c || (c = !0)
            },
            getSelectValueContext: function(e) {
                return e._wrapperState.initialValue
            },
            postUpdateWrapper: function(e) {
                var t = e._currentElement.props;
                e._wrapperState.initialValue = void 0;
                var n = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = Boolean(t.multiple);
                var a = s.getValue(t);
                null != a ? (e._wrapperState.pendingUpdate = !1, r(e, Boolean(t.multiple), a)) : n !== Boolean(t.multiple) && (null != t.defaultValue ? r(e, Boolean(t.multiple), t.defaultValue) : r(e, Boolean(t.multiple), t.multiple ? [] : ""))
            }
        };
    e.exports = d
}, function(e, t, n) {
    "use strict";
    var a, r = {
            injectEmptyComponentFactory: function(e) {
                a = e
            }
        },
        o = {
            create: function(e) {
                return a(e)
            }
        };
    o.injection = r, e.exports = o
}, function(e, t, n) {
    "use strict";
    var a = {
        logTopLevelRenders: !1
    };
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return s || i("111", e.type), new s(e)
    }

    function r(e) {
        return new l(e)
    }

    function o(e) {
        return e instanceof l
    }
    var i = n(1),
        s = (n(0), null),
        l = null,
        u = {
            injectGenericComponentClass: function(e) {
                s = e
            },
            injectTextComponentClass: function(e) {
                l = e
            }
        },
        c = {
            createInternalComponent: a,
            createInstanceForText: r,
            isTextComponent: o,
            injection: u
        };
    e.exports = c
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return o(document.documentElement, e)
    }
    var r = n(125),
        o = n(90),
        i = n(47),
        s = n(48),
        l = {
            hasSelectionCapabilities: function(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && "text" === e.type || "textarea" === t || "true" === e.contentEditable)
            },
            getSelectionInformation: function() {
                var e = s();
                return {
                    focusedElem: e,
                    selectionRange: l.hasSelectionCapabilities(e) ? l.getSelection(e) : null
                }
            },
            restoreSelection: function(e) {
                var t = s(),
                    n = e.focusedElem,
                    r = e.selectionRange;
                t !== n && a(n) && (l.hasSelectionCapabilities(n) && l.setSelection(n, r), i(n))
            },
            getSelection: function(e) {
                var t;
                if ("selectionStart" in e) t = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
                else if (document.selection && e.nodeName && "input" === e.nodeName.toLowerCase()) {
                    var n = document.selection.createRange();
                    n.parentElement() === e && (t = {
                        start: -n.moveStart("character", -e.value.length),
                        end: -n.moveEnd("character", -e.value.length)
                    })
                } else t = r.getOffsets(e);
                return t || {
                    start: 0,
                    end: 0
                }
            },
            setSelection: function(e, t) {
                var n = t.start,
                    a = t.end;
                if (void 0 === a && (a = n), "selectionStart" in e) e.selectionStart = n, e.selectionEnd = Math.min(a, e.value.length);
                else if (document.selection && e.nodeName && "input" === e.nodeName.toLowerCase()) {
                    var o = e.createTextRange();
                    o.collapse(!0), o.moveStart("character", n), o.moveEnd("character", a - n), o.select()
                } else r.setOffsets(e, t)
            }
        };
    e.exports = l
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        for (var n = Math.min(e.length, t.length), a = 0; a < n; a++)
            if (e.charAt(a) !== t.charAt(a)) return a;
        return e.length === t.length ? -1 : n
    }

    function r(e) {
        return e ? e.nodeType === R ? e.documentElement : e.firstChild : null
    }

    function o(e) {
        return e.getAttribute && e.getAttribute(_) || ""
    }

    function i(e, t, n, a, r) {
        var o;
        if (E.logTopLevelRenders) {
            var i = e._currentElement.props.child,
                s = i.type;
            o = "React mount: " + ("string" == typeof s ? s : s.displayName || s.name), console.time(o)
        }
        var l = S.mountComponent(e, n, null, b(e, t), r, 0);
        o && console.timeEnd(o), e._renderedComponent._topLevelWrapper = e, F._mountImageIntoNode(l, t, e, a, n)
    }

    function s(e, t, n, a) {
        var r = x.ReactReconcileTransaction.getPooled(!n && w.useCreateElement);
        r.perform(i, null, e, t, r, n, a), x.ReactReconcileTransaction.release(r)
    }

    function l(e, t, n) {
        for (S.unmountComponent(e, n), t.nodeType === R && (t = t.documentElement); t.lastChild;) t.removeChild(t.lastChild)
    }

    function u(e) {
        var t = r(e);
        if (t) {
            var n = v.getInstanceFromNode(t);
            return !(!n || !n._hostParent)
        }
    }

    function c(e) {
        return !(!e || e.nodeType !== N && e.nodeType !== R && e.nodeType !== O)
    }

    function d(e) {
        var t = r(e),
            n = t && v.getInstanceFromNode(t);
        return n && !n._hostParent ? n : null
    }

    function p(e) {
        var t = d(e);
        return t ? t._hostContainerInfo._topLevelWrapper : null
    }
    var h = n(1),
        m = n(12),
        g = n(13),
        f = n(15),
        y = n(23),
        v = (n(10), n(4)),
        b = n(119),
        w = n(121),
        E = n(57),
        C = n(19),
        M = (n(6), n(135)),
        S = n(14),
        k = n(37),
        x = n(8),
        P = n(22),
        A = n(68),
        T = (n(0), n(27)),
        I = n(43),
        _ = (n(2), g.ID_ATTRIBUTE_NAME),
        D = g.ROOT_ATTRIBUTE_NAME,
        N = 1,
        R = 9,
        O = 11,
        L = {},
        B = 1,
        H = function() {
            this.rootID = B++
        };
    H.prototype.isReactComponent = {}, H.prototype.render = function() {
        return this.props.child
    }, H.isReactTopLevelWrapper = !0;
    var F = {
        TopLevelWrapper: H,
        _instancesByReactRootID: L,
        scrollMonitor: function(e, t) {
            t()
        },
        _updateRootComponent: function(e, t, n, a, r) {
            return F.scrollMonitor(a, function() {
                k.enqueueElementInternal(e, t, n), r && k.enqueueCallbackInternal(e, r)
            }), e
        },
        _renderNewRootComponent: function(e, t, n, a) {
            c(t) || h("37"), y.ensureScrollValueMonitoring();
            var r = A(e, !1);
            x.batchedUpdates(s, r, t, n, a);
            var o = r._instance.rootID;
            return L[o] = r, r
        },
        renderSubtreeIntoContainer: function(e, t, n, a) {
            return null != e && C.has(e) || h("38"), F._renderSubtreeIntoContainer(e, t, n, a)
        },
        _renderSubtreeIntoContainer: function(e, t, n, a) {
            k.validateCallback(a, "ReactDOM.render"), f.isValidElement(t) || h("39", "string" == typeof t ? " Instead of passing a string like 'div', pass React.createElement('div') or <div />." : "function" == typeof t ? " Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />." : null != t && void 0 !== t.props ? " This may be caused by unintentionally loading two independent copies of React." : "");
            var i, s = f.createElement(H, {
                child: t
            });
            if (e) {
                var l = C.get(e);
                i = l._processChildContext(l._context)
            } else i = P;
            var c = p(n);
            if (c) {
                var d = c._currentElement,
                    m = d.props.child;
                if (I(m, t)) {
                    var g = c._renderedComponent.getPublicInstance(),
                        y = a && function() {
                            a.call(g)
                        };
                    return F._updateRootComponent(c, s, i, n, y), g
                }
                F.unmountComponentAtNode(n)
            }
            var v = r(n),
                b = v && !!o(v),
                w = u(n),
                E = b && !c && !w,
                M = F._renderNewRootComponent(s, n, E, i)._renderedComponent.getPublicInstance();
            return a && a.call(M), M
        },
        render: function(e, t, n) {
            return F._renderSubtreeIntoContainer(null, e, t, n)
        },
        unmountComponentAtNode: function(e) {
            c(e) || h("40");
            var t = p(e);
            if (!t) {
                u(e), 1 === e.nodeType && e.hasAttribute(D);
                return !1
            }
            return delete L[t._instance.rootID], x.batchedUpdates(l, t, e, !1), !0
        },
        _mountImageIntoNode: function(e, t, n, o, i) {
            if (c(t) || h("41"), o) {
                var s = r(t);
                if (M.canReuseMarkup(e, s)) return void v.precacheNode(n, s);
                var l = s.getAttribute(M.CHECKSUM_ATTR_NAME);
                s.removeAttribute(M.CHECKSUM_ATTR_NAME);
                var u = s.outerHTML;
                s.setAttribute(M.CHECKSUM_ATTR_NAME, l);
                var d = e,
                    p = a(d, u),
                    g = " (client) " + d.substring(p - 20, p + 20) + "\n (server) " + u.substring(p - 20, p + 20);
                t.nodeType === R && h("42", g)
            }
            if (t.nodeType === R && h("43"), i.useCreateElement) {
                for (; t.lastChild;) t.removeChild(t.lastChild);
                m.insertTreeBefore(t, e, null)
            } else T(t, e), v.precacheNode(n, t.firstChild)
        }
    };
    e.exports = F
}, function(e, t, n) {
    "use strict";
    var a = n(1),
        r = n(15),
        o = (n(0), {
            HOST: 0,
            COMPOSITE: 1,
            EMPTY: 2,
            getType: function(e) {
                return null === e || !1 === e ? o.EMPTY : r.isValidElement(e) ? "function" == typeof e.type ? o.COMPOSITE : o.HOST : void a("26", e)
            }
        });
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var a = {
        currentScrollLeft: 0,
        currentScrollTop: 0,
        refreshScrollValues: function(e) {
            a.currentScrollLeft = e.x, a.currentScrollTop = e.y
        }
    };
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        return null == t && r("30"), null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
    }
    var r = n(1);
    n(0);
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
    }
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        for (var t;
            (t = e._renderedNodeType) === r.COMPOSITE;) e = e._renderedComponent;
        return t === r.HOST ? e._renderedComponent : t === r.EMPTY ? null : void 0
    }
    var r = n(61);
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a() {
        return !o && r.canUseDOM && (o = "textContent" in document.documentElement ? "textContent" : "innerText"), o
    }
    var r = n(5),
        o = null;
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = e.type,
            n = e.nodeName;
        return n && "input" === n.toLowerCase() && ("checkbox" === t || "radio" === t)
    }

    function r(e) {
        return e._wrapperState.valueTracker
    }

    function o(e, t) {
        e._wrapperState.valueTracker = t
    }

    function i(e) {
        e._wrapperState.valueTracker = null
    }

    function s(e) {
        var t;
        return e && (t = a(e) ? "" + e.checked : e.value), t
    }
    var l = n(4),
        u = {
            _getTrackerFromNode: function(e) {
                return r(l.getInstanceFromNode(e))
            },
            track: function(e) {
                if (!r(e)) {
                    var t = l.getNodeFromInstance(e),
                        n = a(t) ? "checked" : "value",
                        s = Object.getOwnPropertyDescriptor(t.constructor.prototype, n),
                        u = "" + t[n];
                    t.hasOwnProperty(n) || "function" != typeof s.get || "function" != typeof s.set || (Object.defineProperty(t, n, {
                        enumerable: s.enumerable,
                        configurable: !0,
                        get: function() {
                            return s.get.call(this)
                        },
                        set: function(e) {
                            u = "" + e, s.set.call(this, e)
                        }
                    }), o(e, {
                        getValue: function() {
                            return u
                        },
                        setValue: function(e) {
                            u = "" + e
                        },
                        stopTracking: function() {
                            i(e), delete t[n]
                        }
                    }))
                }
            },
            updateValueIfChanged: function(e) {
                if (!e) return !1;
                var t = r(e);
                if (!t) return u.track(e), !0;
                var n = t.getValue(),
                    a = s(l.getNodeFromInstance(e));
                return a !== n && (t.setValue(a), !0)
            },
            stopTracking: function(e) {
                var t = r(e);
                t && t.stopTracking()
            }
        };
    e.exports = u
}, function(e, t, n) {
    "use strict";

    function a(e) {
        if (e) {
            var t = e.getName();
            if (t) return " Check the render method of `" + t + "`."
        }
        return ""
    }

    function r(e) {
        return "function" == typeof e && void 0 !== e.prototype && "function" == typeof e.prototype.mountComponent && "function" == typeof e.prototype.receiveComponent
    }

    function o(e, t) {
        var n;
        if (null === e || !1 === e) n = u.create(o);
        else if ("object" == typeof e) {
            var s = e,
                l = s.type;
            if ("function" != typeof l && "string" != typeof l) {
                var p = "";
                p += a(s._owner), i("130", null == l ? l : typeof l, p)
            }
            "string" == typeof s.type ? n = c.createInternalComponent(s) : r(s.type) ? (n = new s.type(s), n.getHostNode || (n.getHostNode = n.getNativeNode)) : n = new d(s)
        } else "string" == typeof e || "number" == typeof e ? n = c.createInstanceForText(e) : i("131", typeof e);
        return n._mountIndex = 0, n._mountImage = null, n
    }
    var i = n(1),
        s = n(3),
        l = n(116),
        u = n(56),
        c = n(58),
        d = (n(176), n(0), n(2), function(e) {
            this.construct(e)
        });
    s(d.prototype, l, {
        _instantiateReactComponent: o
    }), e.exports = o
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!r[e.type] : "textarea" === t
    }
    var r = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var a = n(5),
        r = n(26),
        o = n(27),
        i = function(e, t) {
            if (t) {
                var n = e.firstChild;
                if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
            }
            e.textContent = t
        };
    a.canUseDOM && ("textContent" in document.documentElement || (i = function(e, t) {
        if (3 === e.nodeType) return void(e.nodeValue = t);
        o(e, r(t))
    })), e.exports = i
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        return e && "object" == typeof e && null != e.key ? u.escape(e.key) : t.toString(36)
    }

    function r(e, t, n, o) {
        var p = typeof e;
        if ("undefined" !== p && "boolean" !== p || (e = null), null === e || "string" === p || "number" === p || "object" === p && e.$$typeof === s) return n(o, e, "" === t ? c + a(e, 0) : t), 1;
        var h, m, g = 0,
            f = "" === t ? c : t + d;
        if (Array.isArray(e))
            for (var y = 0; y < e.length; y++) h = e[y], m = f + a(h, y), g += r(h, m, n, o);
        else {
            var v = l(e);
            if (v) {
                var b, w = v.call(e);
                if (v !== e.entries)
                    for (var E = 0; !(b = w.next()).done;) h = b.value, m = f + a(h, E++), g += r(h, m, n, o);
                else
                    for (; !(b = w.next()).done;) {
                        var C = b.value;
                        C && (h = C[1], m = f + u.escape(C[0]) + d + a(h, 0), g += r(h, m, n, o))
                    }
            } else if ("object" === p) {
                var M = "",
                    S = String(e);
                i("31", "[object Object]" === S ? "object with keys {" + Object.keys(e).join(", ") + "}" : S, M)
            }
        }
        return g
    }

    function o(e, t, n) {
        return null == e ? 0 : r(e, "", t, n)
    }
    var i = n(1),
        s = (n(10), n(131)),
        l = n(162),
        u = (n(0), n(33)),
        c = (n(2), "."),
        d = ":";
    e.exports = o
}, function(e, t, n) {
    (function(e) {
        try {
            (function() {
                "use strict";
                var t = n(73);
                ! function(e) {
                    e && e.__esModule
                }(t);
                e.eng = n(81), e.esp = n(85), e.pyc = n(84), e.deu = n(83), e.frn = n(82), e.languagejson = null, e.jsn = n(86), e.setLang = function(e) {
                    document.cookie = "lang=" + e, loadLang(e)
                }, e.loadLang = function(t) {
                    var n = null;
                    if ((location.href.includes("eng") || "eng" == t) && (n = languagejson = eng), (location.href.includes("frn") || "frn" === t) && (n = languagejson = frn), (location.href.includes("esp") || "esp" === t) && (n = languagejson = esp), (location.href.includes("pyc") || "pyc" === t) && (n = languagejson = pyc), (location.href.includes("deu") || "deu" === t) && (n = languagejson = deu), !n) {
                        var a = document.cookie.replace(/(?:(?:^|.*;\s*)lang\s*\=\s*([^;]*).*$)|^.*$/, "$1");
                        console.log(a), null == a && (languagejson = eng), "frn" === a ? languagejson = frn : "esp" === a ? languagejson = esp : "pyc" === a ? languagejson = pyc : "eng" === a ? languagejson = eng : "deu" == a && (languagejson = deu)
                    }
                    null == languagejson && (languagejson = eng), jsn.messages = languagejson.messages, jsn.achNames = languagejson.achNames, jsn.splashes = languagejson.splashes, jsn.lore = languagejson.lore;
                    for (var r = 0; r < jsn.weapons.length; r++) jsn.weapons[r].name = languagejson.weapons[r].name, jsn.weapons[r].desc = languagejson.weapons[r].desc;
                    for (var r = 0; r < jsn.ships.length; r++) jsn.ships[r].nameA = languagejson.ships[r].nameA, jsn.ships[r].nameH = languagejson.ships[r].nameH, jsn.ships[r].desc = languagejson.ships[r].desc;
                    e.mEng = jsn.messages, e.achNames = jsn.achNames, e.splash = jsn.splashes[Math.floor(Math.random() * jsn.splashes.length)], splash.endsWith("!") || splash.endsWith("?") || (splash += "...")
                }
            }).call(this)
        } finally {}
    }).call(t, n(45))
}, function(e, t, n) {
    (function(e) {
        try {
            (function() {
                "use strict";

                function a(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function r(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function o(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var a = t[n];
                                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                            }
                        }
                        return function(t, n, a) {
                            return n && e(t.prototype, n), a && e(t, a), t
                        }
                    }(),
                    s = n(79),
                    l = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(s),
                    u = (n(72), function(e) {
                        function t(e) {
                            a(this, t);
                            var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                            return n.state = {
                                display: "none",
                                register: "none"
                            }, n
                        }
                        return o(t, e), i(t, [{
                            key: "componentDidMount",
                            value: function() {
                                var e = this;
                                t.toggleDisplay = function(t) {
                                    var n = e.state,
                                        a = n.display;
                                    n.display = a === t ? "none" : t, e.setState(n)
                                }, t.turnOnDisplay = function(t) {
                                    var n = e.state;
                                    n.display = t, e.setState(n)
                                }, t.turnOffDisplay = function(t) {
                                    var n = e.state;
                                    n.display = "none", e.setState(n)
                                }, t.turnOnRegister = function(t) {
                                    var n = e.state;
                                    n.register = "Register", e.setState(n)
                                }, t.turnOffRegister = function(t) {
                                    var n = e.state;
                                    n.register = "none", e.setState(n)
                                }
                            }
                        }, {
                            key: "render",
                            value: function() {
                                return l.default.createElement("span", null, l.default.createElement(m, null), l.default.createElement(c, {
                                    toggleAudio: this.props.data.toggleAudio
                                }), l.default.createElement(d, {
                                    toggleMusic: this.props.data.toggleMusic
                                }), l.default.createElement(h, {
                                    display: "LoginOverlay" === this.state.display
                                }), l.default.createElement(p, {
                                    register: "Register" === this.state.register
                                }))
                            }
                        }]), t
                    }(s.Component));
                t.default = u;
                var c = function(e) {
                        function t(e) {
                            a(this, t);
                            var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                            return n.state = {
                                muted: !1
                            }, n
                        }
                        return o(t, e), i(t, [{
                            key: "click",
                            value: function() {
                                this.setState({
                                    muted: this.props.toggleAudio()
                                })
                            }
                        }, {
                            key: "render",
                            value: function() {
                                return l.default.createElement("div", {
                                    className: "mute-button",
                                    onClick: this.click.bind(this)
                                }, this.state.muted ? l.default.createElement("span", null, l.default.createElement("img", {
                                    src: "img/soundOff.png"
                                })) : l.default.createElement("span", null, l.default.createElement("img", {
                                    src: "img/soundOn.png"
                                })))
                            }
                        }]), t
                    }(s.Component),
                    d = function(e) {
                        function t(e) {
                            a(this, t);
                            var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                            return n.state = {
                                musicMuted: !1
                            }, n
                        }
                        return o(t, e), i(t, [{
                            key: "click",
                            value: function() {
                                this.setState({
                                    musicMuted: this.props.toggleMusic()
                                })
                            }
                        }, {
                            key: "render",
                            value: function() {
                                return l.default.createElement("div", {
                                    className: "music-button",
                                    onClick: this.click.bind(this)
                                }, this.state.musicMuted ? l.default.createElement("span", null, l.default.createElement("img", {
                                    src: "img/musicOff.png"
                                })) : l.default.createElement("span", null, l.default.createElement("img", {
                                    src: "img/musicOn.png"
                                })))
                            }
                        }]), t
                    }(s.Component),
                    p = function(e) {
                        function t() {
                            a(this, t);
                            var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return e.handleChangeU = function(t) {
                                e.setState({
                                    user: t.target.value,
                                    pass: e.state.pass
                                })
                            }, e.handleChangeP = function(t) {
                                e.setState({
                                    user: e.state.user,
                                    pass: t.target.value
                                })
                            }, e.register = function() {
                                var t = e.state.user,
                                    n = e.state.pass;
                                void 0 !== u.socket && u.socket.emit("register", {
                                    user: t,
                                    pass: n
                                })
                            }, e.state = {
                                user: "",
                                pass: ""
                            }, e
                        }
                        return o(t, e), i(t, [{
                            key: "turnOn",
                            value: function() {
                                this.setState({
                                    on: !0
                                })
                            }
                        }, {
                            key: "turnOff",
                            value: function() {
                                this.setState({
                                    off: !0
                                })
                            }
                        }, {
                            key: "render",
                            value: function() {
                                return this.props.register ? l.default.createElement("div", {
                                    className: "register-menu"
                                }, l.default.createElement("center", null, l.default.createElement("h3", null, "Create an account!"), l.default.createElement("br", null), l.default.createElement("input", {
                                    className: "overlay-input",
                                    type: "text",
                                    onChange: this.handleChangeU,
                                    placeholder: "Username",
                                    maxLength: "16",
                                    style: {
                                        margin: 8
                                    }
                                }), l.default.createElement("input", {
                                    className: "overlay-input",
                                    type: "password",
                                    onChange: this.handleChangeP,
                                    placeholder: "Password",
                                    maxLength: "32",
                                    style: {
                                        margin: 8
                                    }
                                }), l.default.createElement("br", null), l.default.createElement("button", {
                                    className: "register",
                                    onClick: this.register
                                }, "Register!"), l.default.createElement("br", null), l.default.createElement("br", null), "By registering, you agree to our terms of service, available at torn.space/tos.", l.default.createElement("br", null), "Remember, never give your password to anyone!!")) : null
                            }
                        }]), t
                    }(s.Component),
                    h = function(e) {
                        function t() {
                            a(this, t);
                            var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return e.handleChangeU = function(t) {
                                e.setState({
                                    user: t.target.value,
                                    pass: e.state.pass
                                })
                            }, e.handleChangeP = function(t) {
                                e.setState({
                                    user: e.state.user,
                                    pass: t.target.value
                                })
                            }, e.login = function() {
                                var t = e.state.user,
                                    n = e.state.pass;
                                void 0 !== u.socket && u.socket.emit("login", {
                                    user: t,
                                    pass: n,
                                    amNew: !1
                                })
                            }, e.registerH = function() {
                                void 0 !== u.socket && u.socket.emit("lore", {
                                    alien: !1
                                })
                            }, e.registerA = function() {
                                void 0 !== u.socket && u.socket.emit("lore", {
                                    alien: !0
                                })
                            }, e.langEng = function() {
                                setLang("eng")
                            }, e.langEsp = function() {
                                setLang("esp")
                            }, e.langFrn = function() {
                                setLang("frn")
                            }, e.langPyc = function() {
                                setLang("pyc")
                            }, e.langDeu = function() {
                                setLang("deu")
                            }, e.state = {
                                user: "",
                                pass: "",
                                seed: Math.random()
                            }, e
                        }
                        return o(t, e), i(t, [{
                            key: "render",
                            value: function() {
                                var e = 2 * this.state.seed % 1 < .25 ? l.default.createElement("iframe", {
                                        width: "368",
                                        height: "207",
                                        src: "https://www.youtube.com/embed/iLlFIS1PLOo",
                                        frameborder: "0",
                                        allow: "autoplay; encrypted-media",
                                        allowfullscreen: !0
                                    }) : l.default.createElement("iframe", {
                                        width: "368",
                                        height: "207",
                                        src: "https://www.youtube.com/embed/44MIPle7pwQ",
                                        frameborder: "0",
                                        allow: "autoplay; encrypted-media",
                                        allowfullscreen: !0
                                    }),
                                    t = this.state.seed < .5 ? l.default.createElement("div", null, l.default.createElement("button", {
                                        id: "registerA",
                                        onClick: this.registerA
                                    }, "Join Alien Team!"), l.default.createElement("button", {
                                        id: "registerH",
                                        onClick: this.registerH
                                    }, "Join Human Team!")) : l.default.createElement("div", null, l.default.createElement("button", {
                                        id: "registerH",
                                        onClick: this.registerH
                                    }, "Join Human Team!"), l.default.createElement("button", {
                                        id: "registerA",
                                        onClick: this.registerA
                                    }, "Join Alien Team!"));
                                return this.props.display ? l.default.createElement("div", null, l.default.createElement("div", {
                                    className: "overlay-menu"
                                }, l.default.createElement("div", {
                                    className: "container"
                                }, l.default.createElement("div", {
                                    className: "guests"
                                }, l.default.createElement("center", null, l.default.createElement("h3", null, "New Players"), t)), l.default.createElement("div", {
                                    className: "video"
                                }, l.default.createElement("center", null, l.default.createElement("h3", null, "Featured Video!"), e, l.default.createElement("br", null), l.default.createElement("a", {
                                    href: "youtubers/"
                                }, "Have a channel?"))), l.default.createElement("div", {
                                    className: "login"
                                }, l.default.createElement("center", null, l.default.createElement("h3", null, "Returning Players"), l.default.createElement("input", {
                                    className: "overlay-input",
                                    type: "text",
                                    id: "usernameid",
                                    onChange: this.handleChangeU,
                                    placeholder: "Username"
                                }), l.default.createElement("input", {
                                    className: "overlay-input",
                                    type: "password",
                                    id: "passid",
                                    onChange: this.handleChangeP,
                                    placeholder: "Password"
                                }), l.default.createElement("button", {
                                    className: "overlay-button",
                                    id: "loginButton",
                                    onClick: this.login
                                }, "Login"))))), l.default.createElement("div", {
                                    className: "changelog"
                                }, l.default.createElement("a", {
                                    target: "_blank",
                                    href: "http://iogames.space/"
                                }, "More .io Games"), l.default.createElement("br", null), l.default.createElement("a", {
                                    target: "_blank",
                                    href: "changelog"
                                }, "Changelog")), l.default.createElement("div", {
                                    className: "discord"
                                }, l.default.createElement("center", null, l.default.createElement("a", {
                                    onClick: this.langEng
                                }, "Eng|"), l.default.createElement("a", {
                                    onClick: this.langEsp
                                }, "Esp|"), l.default.createElement("a", {
                                    onClick: this.langFrn
                                }, "Frn|"), l.default.createElement("a", {
                                    onClick: this.langDeu
                                }, "Deu|"), l.default.createElement("a", {
                                    onClick: this.langPyc
                                }, "Pyc")), l.default.createElement("br", null), l.default.createElement("a", {
                                    target: "_blank",
                                    href: "https://discord.gg/wFsdUcY"
                                }, l.default.createElement("img", {
                                    src: "img/discord.png",
                                    alt: "Discord"
                                })), l.default.createElement("a", {
                                    target: "_blank",
                                    href: "https://www.reddit.com/r/TornSpace/"
                                }, l.default.createElement("img", {
                                    src: "img/reddit.png",
                                    alt: "Reddit"
                                })), l.default.createElement("a", {
                                    target: "_blank",
                                    href: "https://www.subscribestar.com/haze"
                                }, l.default.createElement("img", {
                                    src: "img/subscribestar.png",
                                    alt: "SubscribeStar"
                                })))) : null
                            }
                        }]), t
                    }(s.Component),
                    m = function(e) {
                        function t() {
                            a(this, t);
                            var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return e.state = {
                                msgs: []
                            }, u.chat = function(t) {
                                var n = e.state;
                                n.msgs.push(new g(t)), e.setState(n)
                            }, t.fadeOut = function(t) {
                                var n = e.state;
                                n.msgs.forEach(function(e, a) {
                                    e.id === t && (n.msgs[a].fadeOut = !0)
                                }), e.setState(n)
                            }, t.remove = function(t) {
                                var n = e.state;
                                n.msgs.forEach(function(e, a) {
                                    e.id === t && n.msgs.splice(a, 1)
                                }), e.setState(n)
                            }, e
                        }
                        return o(t, e), i(t, [{
                            key: "render",
                            value: function() {
                                return l.default.createElement("div", {
                                    className: "chat"
                                }, this.state.msgs.map(function(e, t) {
                                    return l.default.createElement("div", {
                                        maxLength: "128",
                                        className: "chat-msg " + (e.fadeOut ? "chat-msg-fadeout" : ""),
                                        key: t,
                                        style: {
                                            color: "red" === e.color ? "pink" : "blue" === e.color ? "cyan" : "white"
                                        }
                                    }, e.msg)
                                }), l.default.createElement(f, null))
                            }
                        }]), t
                    }(s.Component),
                    g = function e(t) {
                        var n = this;
                        a(this, e), this.msg = t.msg, this.color = t.color, this.id = Math.random(), this.fadeOut = !1, setTimeout(function() {
                            m.fadeOut(n.id), setTimeout(function() {
                                m.remove(n.id)
                            }, 2e3)
                        }, 6e4)
                    },
                    f = function(t) {
                        function n() {
                            a(this, n);
                            var e = r(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                            return e.state = {
                                value: "",
                                activated: !1
                            }, e
                        }
                        return o(n, t), i(n, [{
                            key: "componentDidMount",
                            value: function() {
                                var e = this;
                                u.focusChat = function() {
                                    e.refs.chat.focus()
                                }, u.unfocusChat = function() {
                                    e.refs.chat.blur()
                                }, u.init = function(t) {
                                    e.setState(t)
                                }, u.activate = function() {
                                    e.setState({
                                        value: e.state.value,
                                        activated: !0
                                    })
                                }
                            }
                        }, {
                            key: "keypress",
                            value: function(t) {
                                if ("Enter" === t.key) {
                                    u.unfocusChat();
                                    var n = this.state.value;
                                    u.socket.emit("chat", {
                                        msg: n
                                    }), this.setState({
                                        value: "",
                                        activated: this.state.activated
                                    }), setTimeout(e.stopTyping, 50)
                                }
                            }
                        }, {
                            key: "change",
                            value: function(e) {
                                this.setState({
                                    value: e.target.value,
                                    activated: this.state.activated
                                })
                            }
                        }, {
                            key: "render",
                            value: function() {
                                return this.state.activated ? l.default.createElement("input", {
                                    className: "chat-input",
                                    ref: "chat",
                                    maxLength: "128",
                                    onKeyDown: this.keypress.bind(this),
                                    onChange: this.change.bind(this),
                                    value: this.state.value,
                                    placeholder: "Press enter to chat!",
                                    type: "text"
                                }) : null
                            }
                        }]), n
                    }(s.Component)
            }).call(this)
        } finally {}
    }).call(t, n(45))
}, function(e, t, n) {
    "use strict";

    function a(e, t, n) {
        this.props = e, this.context = t, this.refs = u, this.updater = n || l
    }

    function r(e, t, n) {
        this.props = e, this.context = t, this.refs = u, this.updater = n || l
    }

    function o() {}
    var i = n(21),
        s = n(3),
        l = n(77),
        u = (n(78), n(22));
    n(0), n(177);
    a.prototype.isReactComponent = {}, a.prototype.setState = function(e, t) {
        "object" != typeof e && "function" != typeof e && null != e && i("85"), this.updater.enqueueSetState(this, e), t && this.updater.enqueueCallback(this, t, "setState")
    }, a.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this), e && this.updater.enqueueCallback(this, e, "forceUpdate")
    };
    o.prototype = a.prototype, r.prototype = new o, r.prototype.constructor = r, s(r.prototype, a.prototype), r.prototype.isPureReactComponent = !0, e.exports = {
        Component: a,
        PureComponent: r
    }
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = Function.prototype.toString,
            n = Object.prototype.hasOwnProperty,
            a = RegExp("^" + t.call(n).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        try {
            var r = t.call(e);
            return a.test(r)
        } catch (e) {
            return !1
        }
    }

    function r(e) {
        var t = u(e);
        if (t) {
            var n = t.childIDs;
            c(e), n.forEach(r)
        }
    }

    function o(e, t, n) {
        return "\n    in " + (e || "Unknown") + (t ? " (at " + t.fileName.replace(/^.*[\\\/]/, "") + ":" + t.lineNumber + ")" : n ? " (created by " + n + ")" : "")
    }

    function i(e) {
        return null == e ? "#empty" : "string" == typeof e || "number" == typeof e ? "#text" : "string" == typeof e.type ? e.type : e.type.displayName || e.type.name || "Unknown"
    }

    function s(e) {
        var t, n = k.getDisplayName(e),
            a = k.getElement(e),
            r = k.getOwnerID(e);
        return r && (t = k.getDisplayName(r)), o(n, a && a._source, t)
    }
    var l, u, c, d, p, h, m, g = n(21),
        f = n(10),
        y = (n(0), n(2), "function" == typeof Array.from && "function" == typeof Map && a(Map) && null != Map.prototype && "function" == typeof Map.prototype.keys && a(Map.prototype.keys) && "function" == typeof Set && a(Set) && null != Set.prototype && "function" == typeof Set.prototype.keys && a(Set.prototype.keys));
    if (y) {
        var v = new Map,
            b = new Set;
        l = function(e, t) {
            v.set(e, t)
        }, u = function(e) {
            return v.get(e)
        }, c = function(e) {
            v.delete(e)
        }, d = function() {
            return Array.from(v.keys())
        }, p = function(e) {
            b.add(e)
        }, h = function(e) {
            b.delete(e)
        }, m = function() {
            return Array.from(b.keys())
        }
    } else {
        var w = {},
            E = {},
            C = function(e) {
                return "." + e
            },
            M = function(e) {
                return parseInt(e.substr(1), 10)
            };
        l = function(e, t) {
            var n = C(e);
            w[n] = t
        }, u = function(e) {
            var t = C(e);
            return w[t]
        }, c = function(e) {
            var t = C(e);
            delete w[t]
        }, d = function() {
            return Object.keys(w).map(M)
        }, p = function(e) {
            var t = C(e);
            E[t] = !0
        }, h = function(e) {
            var t = C(e);
            delete E[t]
        }, m = function() {
            return Object.keys(E).map(M)
        }
    }
    var S = [],
        k = {
            onSetChildren: function(e, t) {
                var n = u(e);
                n || g("144"), n.childIDs = t;
                for (var a = 0; a < t.length; a++) {
                    var r = t[a],
                        o = u(r);
                    o || g("140"), null == o.childIDs && "object" == typeof o.element && null != o.element && g("141"), o.isMounted || g("71"), null == o.parentID && (o.parentID = e), o.parentID !== e && g("142", r, o.parentID, e)
                }
            },
            onBeforeMountComponent: function(e, t, n) {
                l(e, {
                    element: t,
                    parentID: n,
                    text: null,
                    childIDs: [],
                    isMounted: !1,
                    updateCount: 0
                })
            },
            onBeforeUpdateComponent: function(e, t) {
                var n = u(e);
                n && n.isMounted && (n.element = t)
            },
            onMountComponent: function(e) {
                var t = u(e);
                t || g("144"), t.isMounted = !0, 0 === t.parentID && p(e)
            },
            onUpdateComponent: function(e) {
                var t = u(e);
                t && t.isMounted && t.updateCount++
            },
            onUnmountComponent: function(e) {
                var t = u(e);
                if (t) {
                    t.isMounted = !1;
                    0 === t.parentID && h(e)
                }
                S.push(e)
            },
            purgeUnmountedComponents: function() {
                if (!k._preventPurging) {
                    for (var e = 0; e < S.length; e++) {
                        r(S[e])
                    }
                    S.length = 0
                }
            },
            isMounted: function(e) {
                var t = u(e);
                return !!t && t.isMounted
            },
            getCurrentStackAddendum: function(e) {
                var t = "";
                if (e) {
                    var n = i(e),
                        a = e._owner;
                    t += o(n, e._source, a && a.getName())
                }
                var r = f.current,
                    s = r && r._debugID;
                return t += k.getStackAddendumByID(s)
            },
            getStackAddendumByID: function(e) {
                for (var t = ""; e;) t += s(e), e = k.getParentID(e);
                return t
            },
            getChildIDs: function(e) {
                var t = u(e);
                return t ? t.childIDs : []
            },
            getDisplayName: function(e) {
                var t = k.getElement(e);
                return t ? i(t) : null
            },
            getElement: function(e) {
                var t = u(e);
                return t ? t.element : null
            },
            getOwnerID: function(e) {
                var t = k.getElement(e);
                return t && t._owner ? t._owner._debugID : null
            },
            getParentID: function(e) {
                var t = u(e);
                return t ? t.parentID : null
            },
            getSource: function(e) {
                var t = u(e),
                    n = t ? t.element : null;
                return null != n ? n._source : null
            },
            getText: function(e) {
                var t = k.getElement(e);
                return "string" == typeof t ? t : "number" == typeof t ? "" + t : null
            },
            getUpdateCount: function(e) {
                var t = u(e);
                return t ? t.updateCount : 0
            },
            getRootIDs: m,
            getRegisteredIDs: d,
            pushNonStandardWarningStack: function(e, t) {
                if ("function" == typeof console.reactStack) {
                    var n = [],
                        a = f.current,
                        r = a && a._debugID;
                    try {
                        for (e && n.push({
                                name: r ? k.getDisplayName(r) : null,
                                fileName: t ? t.fileName : null,
                                lineNumber: t ? t.lineNumber : null
                            }); r;) {
                            var o = k.getElement(r),
                                i = k.getParentID(r),
                                s = k.getOwnerID(r),
                                l = s ? k.getDisplayName(s) : null,
                                u = o && o._source;
                            n.push({
                                name: l,
                                fileName: u ? u.fileName : null,
                                lineNumber: u ? u.lineNumber : null
                            }), r = i
                        }
                    } catch (e) {}
                    console.reactStack(n)
                }
            },
            popNonStandardWarningStack: function() {
                "function" == typeof console.reactStackEnd && console.reactStackEnd()
            }
        };
    e.exports = k
}, function(e, t, n) {
    "use strict";
    var a = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var a = (n(2), {
        isMounted: function(e) {
            return !1
        },
        enqueueCallback: function(e, t) {},
        enqueueForceUpdate: function(e) {},
        enqueueReplaceState: function(e, t) {},
        enqueueSetState: function(e, t) {}
    });
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var a = !1;
    e.exports = a
}, function(e, t, n) {
    "use strict";
    e.exports = n(15)
}, function(e, t, n) {
    (function(e) {
        try {
            (function() {
                "use strict";

                function t(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function a(e, t) {
                    Mr[e] && console.error("Loading image twice: " + e), Mr[e] = new Audio(t), Mr[e].addEventListener("loadeddata", function() {
                        Sr[0]++
                    }), Sr[1]++
                }

                function r() {
                    var e = function() {
                        return Sr[0] === Sr[1] && (kr = !0, kr && Nr && (Ua = !0), !0)
                    };
                    if (!e()) var t = setInterval(function() {
                        e() && clearInterval(t)
                    }, 100)
                }

                function o() {
                    xr ^= !0;
                    for (var e in Mr) Mr[e].muted = xr;
                    return xr
                }

                function i() {
                    return Pr ^= !0, Pr && _t ? Cr.pause() : Cr.play(), Pr
                }

                function s(e, t) {
                    if (!xr) {
                        var n = Mr[e];
                        n || console.error("Unknown sound " + e);
                        var a = n.cloneNode();
                        a.volume = yn * t, "bigboom" == e && (a.volume *= 2), "noammo" == e && (a.volume *= 5), "music1" === e && (a.volume /= 2, Cr = a), a.play()
                    }
                }

                function l(e, t) {
                    if (_r[e]) return void console.error("Loading image twice: " + e);
                    _r[e] = new Image, _r[e].addEventListener("load", function() {
                        return [Dr[0]++]
                    }), _r[e].src = t, Dr[1]++
                }

                function u() {
                    var e = function() {
                        return Dr[0] === Dr[1] && (Nr = !0, Nr && kr && (Ua = !0), !0)
                    };
                    if (!e()) var t = setInterval(function() {
                        e() && clearInterval(t)
                    }, 100)
                }

                function c(e) {
                    Ir[e] = new Image, Ir[e].src = "/img/space/planets/pt" + (e + 1) + ".png"
                }

                function d(e, t) {
                    e ? (Ar[t] = new Image, Ar[t].src = "/img/red/r" + (t + 1) + ".png") : (Tr[t] = new Image, Tr[t].src = "/img/blue/b" + (t + 1) + ".png")
                }

                function p(e) {
                    for (var t in qa) {
                        var n = qa[t],
                            a = Math.sqrt(n.y * n.y + n.z * n.z),
                            r = Math.atan2(n.z, n.y) + e / 28,
                            o = Math.cos(r) * a,
                            i = Math.sin(r) * a;
                        n.y = o, n.z = i
                    }
                    for (var t in sr) {
                        var n = sr[t],
                            a = Math.sqrt(n.y * n.y + n.z * n.z),
                            r = Math.atan2(n.z, n.y) + e / 28,
                            o = Math.cos(r) * a,
                            i = Math.sin(r) * a;
                        n.y = o, n.z = i
                    }
                    for (var t in dr) {
                        var n = dr[t],
                            a = Math.sqrt(n.y * n.y + n.z * n.z),
                            r = Math.atan2(n.z, n.y) + e / 28,
                            o = Math.cos(r) * a,
                            i = Math.sin(r) * a;
                        n.y = o, n.z = i
                    }
                    var n = tr,
                        a = Math.sqrt(n.y * n.y + n.z * n.z),
                        r = Math.atan2(n.z, n.y) + e / 28,
                        o = Math.cos(r) * a,
                        i = Math.sin(r) * a;
                    n.y = o, n.z = i
                }

                function h(e) {
                    for (var t in qa) {
                        var n = qa[t],
                            a = Math.sqrt(n.x * n.x + n.z * n.z),
                            r = Math.atan2(n.z, n.x) + e / 28,
                            o = Math.cos(r) * a,
                            i = Math.sin(r) * a;
                        n.x = o, n.z = i
                    }
                    for (var t in sr) {
                        var n = sr[t],
                            a = Math.sqrt(n.x * n.x + n.z * n.z),
                            r = Math.atan2(n.z, n.x) + e / 28,
                            o = Math.cos(r) * a,
                            i = Math.sin(r) * a;
                        n.x = o, n.z = i
                    }
                    for (var t in dr) {
                        var n = dr[t],
                            a = Math.sqrt(n.x * n.x + n.z * n.z),
                            r = Math.atan2(n.z, n.x) + e / 28,
                            o = Math.cos(r) * a,
                            i = Math.sin(r) * a;
                        n.x = o, n.z = i
                    }
                    var n = tr,
                        a = Math.sqrt(n.x * n.x + n.z * n.z),
                        r = Math.atan2(n.z, n.x) + e / 28,
                        o = Math.cos(r) * a,
                        i = Math.sin(r) * a;
                    n.x = o, n.z = i
                }

                function m() {
                    window.location.reload(!0)
                }

                function g(e, t) {
                    return String.fromCharCode(97 + e).toUpperCase() + "" + (t + 1)
                }

                function f() {
                    if (Kn) return yt.globalAlpha = .02, yt.fillStyle = "black", yt.fillRect(0, 0, ft.width, ft.height), yt.globalAlpha = 1, void ke();
                    if (dn && (te(), N()), !dn && (0 != Ia || ca)) {
                        if (Zn > 0 || Xn >= 35) return pe(Xn), Xn = 34, void setTimeout(f, 5);
                        rr > 0 && (xt = Pt = 0, Hn = (1e4 - j(100 - rr)) / 1e3), ea++, Zn++;
                        var e = new Date,
                            t = e.getTime();
                        yt.font = "11px Nasa";
                        var n = -performance.now();
                        be();
                        var a = Math.floor(25 * Math.random()),
                            r = !1;
                        Hn > 0 && (Te(a), r = !0), (Zt + tn + nn + en) / (hr[Ln].capacity * qn) > .995 && (ua = mEng[1]);
                        var o = -performance.now();
                        n -= o, ge();
                        var i = -performance.now();
                        o -= i, Ke(), Je();
                        var s = -performance.now();
                        i -= s, Ve(), Ye();
                        var l = -performance.now();
                        s -= l, ce(), Qe(), ca && Xe();
                        var u = -performance.now();
                        l -= u, Ue(), Ge(), ze(), We(), je(), qe(), $e(), ue();
                        var c = -performance.now();
                        u -= c, fe(), et(), le(), He(), Me(), 0 != self.quests && he(), Oe(), y(), Le(), me();
                        var d = -performance.now();
                        c -= d, ve();
                        var p = -performance.now();
                        d -= p, we();
                        var h = -performance.now();
                        p -= h, Ce();
                        var m = -performance.now();
                        h -= m, 0 != Ea && Ee(), se(), ie(), oe(), ar > 0 && Pe(), Ae(), r && rr <= 0 && Ie(a), Nt && Se(), Ft && (ua = mEng[132]), "" !== ua && _e(), ua = "", e = new Date;
                        var g = e.getTime();
                        Xn = g - t, m += performance.now();
                        K([n, o, i, s, l, u, c, d, p, h, m]), pe(Xn), Dn && Be(), Zn--
                    }
                }

                function y() {
                    if (-2 != wr[1]) {
                        yt.save(), yt.globalAlpha = .5, yt.fillStyle = "black", yt.strokeStyle = "cyan", Ne(ka - 208, xa - 432 + 128, 210, 192, {
                            bl: 32,
                            tl: 32
                        }, !0, !1), yt.restore(), yt.font = "11px Nasa", yt.fillStyle = "yellow", yt.textAlign = "right", yt.globalAlpha = Math.max(vr--, 0) / 100 * .7 + .3, L(mEng[152], ka - 80, xa - 432 + 144), L(mEng[151], ka - 16, xa - 432 + 144);
                        for (var e = 0; e < 10; e++) yt.fillStyle = yr == e ? "lime" : "yellow", e >= hr[Ln].weapons && (yt.fillStyle = "orange"), Ln < pr[wr[e]].Level && (yt.fillStyle = "red"), void 0 !== pr[wr[e]] && L(pr[wr[e]].name + ": " + (e + 1) % 10, ka - 80, xa - 432 + 16 * (e + 10)), wr[e] > -1 && L(v(Er[e]), ka - 16, xa - 432 + 16 * (e + 10));
                        yt.globalAlpha = 1, yt.fillStyle = "yellow", Xa = Xa < 1 ? 0 : Xa - 1, yt.font = 16 + Xa + "px Nasa", L(mEng[2], ka - 16, xa - 96), yt.font = "11px Nasa", yt.textAlign = "left"
                    }
                }

                function v(e) {
                    return e >= 0 ? e + "" : -1 == e ? mEng[153] : -2 == e ? mEng[154] : ""
                }

                function b() {
                    yt.textAlign = "left", E();
                    var e = new Date,
                        t = Pa + 640 - 16,
                        n = Aa + 384 - 16;
                    yt.save(), yt.translate(t, n), yt.rotate(2 * e.getMilliseconds() * Math.PI / 5e4 + 2 * e.getSeconds() * Math.PI / 50 + 2 * e.getMinutes() * 60 * Math.PI / 50), yt.drawImage("red" == Lt ? _r.base : _r.bss, -128, -128, 256, 256), yt.restore(), Wa && (yt.font = 4 * U(kt / 16) + 28 + "px Nasa", yt.fillStyle = 600 == Nn ? "lime" : "yellow", yt.textAlign = "center", L(mEng[11], Pa + 728 - 96, Aa + 512 - 24), yt.font = "11px Nasa")
                }

                function w(e, t) {
                    yt.strokeStyle = yt.fillStyle = "white", yt.lineWidth = 2;
                    for (var n in qa) {
                        var a = qa[n],
                            r = e + a.x / 1.33,
                            o = t + a.y / 1.33;
                        yt.fillRect(r, o, 1, 1)
                    }
                    for (var n in sr) {
                        var a = sr[n],
                            r = e + a.x / 1.33,
                            o = t + a.y / 1.33,
                            i = "red" == a.color ? _r.mrss : "cyan" == a.color ? _r.mbss : _r.ma;
                        yt.drawImage(i, r - 7, o - 7, 15, 15)
                    }
                    yt.strokeStyle = "gray", yt.lineWidth = .35;
                    for (var n = 0; n < 2 * At + 2; n++) {
                        var a = dr[n],
                            s = dr[n + 2 * At + 2],
                            r = e + a.x / 1.33,
                            o = t + a.y / 1.33,
                            l = e + s.x / 1.33,
                            u = t + s.y / 1.33;
                        yt.beginPath(), yt.moveTo(r, o), yt.lineTo(l, u), yt.closePath(), yt.stroke()
                    }
                }

                function E() {
                    yt.strokeStyle = yt.fillStyle = "white", yt.lineWidth = 2;
                    for (var e in qa) {
                        var t = qa[e],
                            n = Pa + 256 + 2 * t.x / 1.5,
                            a = Aa + 256 + 20 + 2 * t.y / 1.5;
                        yt.fillRect(n, a, 1.5, 1.5)
                    }
                    for (var e in sr) {
                        var t = sr[e],
                            n = Pa + 256 + 2 * t.x / 1.5,
                            a = Aa + 256 + 20 + 2 * t.y / 1.5,
                            r = "red" == t.color ? _r.mrss : "cyan" == t.color ? _r.mbss : _r.ma;
                        yt.drawImage(r, n - 10, a - 10, 21, 21)
                    }
                    yt.strokeStyle = "gray", yt.lineWidth = .8;
                    for (var e = 0; e < 2 * At + 2; e++) {
                        var t = dr[e],
                            o = dr[e + 2 * At + 2],
                            n = Pa + 256 + 2 * t.x / 1.5,
                            a = Aa + 256 + 20 + 2 * t.y / 1.5,
                            i = Pa + 256 + 2 * o.x / 1.5,
                            s = Aa + 256 + 20 + 2 * o.y / 1.5;
                        yt.beginPath(), yt.moveTo(n, a), yt.lineTo(i, s), yt.closePath(), yt.stroke()
                    }
                }

                function C() {
                    var e = {};
                    e[4] = (Zt > 0 ? mEng[133] : mEng[137]) + Zt + " => $" + Zt * ("red" === Lt ? 1 : 2) + " ($" + ("red" === Lt ? "1" : "2") + " " + mEng[155] + ")", e[5] = (en > 0 ? mEng[134] : mEng[138]) + en + " => $" + 1.5 * en + " ($1.5 " + mEng[155] + ")", e[6] = (tn > 0 ? mEng[135] : mEng[139]) + tn + " => $" + tn * ("blue" === Lt ? 1 : 2) + " ($" + ("blue" === Lt ? "1" : "2") + " " + mEng[155] + ")", e[7] = (nn > 0 ? mEng[136] : mEng[140]) + nn + " => $" + 1.5 * nn + " ($1.5 " + mEng[155] + ")", w(Pa + 768 - 256 - 16 + 128, Aa + 512 - 128 - 32), yt.strokeStyle = "white", yt.lineWidth = 1, yt.font = "11px Nasa", yt.textAlign = "left";
                    for (var t = 4; t < 8; t++) yt.fillStyle = t + 1 == Nn ? "lime" : "yellow", L(e[t], Pa + 256 - 32, Aa - 32 + 32 * t);
                    yt.fillStyle = 610 == Nn ? "lime" : "yellow", L(mEng[12], Pa + 256 + 48, Aa + 76), yt.fillStyle = "yellow", yt.textAlign = "right", L(mEng[13] + Yn + " ($" + z() + ") ", Pa + 768 - 16 - yt.measureText(mEng[14]).width, Aa + 512 - 16), yt.fillStyle = Yn >= 20 || on < z() ? "red" : 611 == Nn ? "lime" : "yellow", L(mEng[14], Pa + 768 - 16, Aa + 512 - 16), yt.textAlign = "left", yt.fillStyle = "yellow", yt.font = "24px Nasa", L(mEng[15], Pa + 256 + 32, Aa + 256 - 16), yt.textAlign = "center", L(mEng[16], Pa + 256, Aa + 64 + 8), yt.textAlign = "left", yt.font = "11px Nasa", yt.fillStyle = 601 == Nn ? "lime" : "yellow", L(mEng[18], Pa + 512 - 64, Aa + 256 - 16), yt.fillStyle = "yellow";
                    for (var t = 0; t < 10; t++) {
                        yt.fillStyle = Nn - 10 == t ? "lime" : "yellow", hr[gn].weapons <= t && (yt.fillStyle = "orange"), gn < pr[wr[t]].Level && (yt.fillStyle = "red");
                        var n = "\t      "; - 1 == wr[t] ? n = mEng[14] + (9 != t ? "  " : " ") : wr[t] > -1 && (n = mEng[19] + (9 != t ? " " : "")), L(n + (t + 1) + ": " + pr[wr[t]].name, Pa + 256 + 32, Aa + 256 + 16 * t)
                    }
                    yt.fillStyle = "white", Ne(Pa + 16, Aa + 256 - 16, 256, 256, 8, !1, !0);
                    var a = new Date,
                        r = 2 * a.getMilliseconds() * Math.PI / 5e4 + 2 * a.getSeconds() * Math.PI / 50 + 2 * a.getMinutes() * 60 * Math.PI / 50,
                        o = Pa + 128 + 16,
                        i = Aa + 384 - 16,
                        s = "red" === Lt,
                        l = s ? Ar[gn] : Tr[gn];
                    void 0 === l || 2 == l ? ((s ? Ar : Tr)[gn] = 2, 2 != l && d(s, gn)) : (yt.save(), yt.translate(o, i), yt.rotate(-3 * r), gn > ln && (l = _r.q), yt.drawImage(l, -l.width / 2, -l.height / 2), yt.restore()), yt.textAlign = "center", yt.fillStyle = "yellow", yt.font = "20px Nasa", L(mEng[24], Pa + 128 + 16, Aa + 256 + 16), yt.font = "11px Nasa", L(mEng[25] + " " + gn, Pa + 128 + 16, Aa + 256 + 56), L("red" === Lt ? hr[gn].nameA : hr[gn].nameH, Pa + 128 + 16, Aa + 256 + 40), gn > ln && (yt.fillStyle = "red"), yt.fillStyle = "yellow", hr[gn].price > on + On || gn > ln ? yt.fillStyle = "red" : 100 == Nn && (yt.fillStyle = "lime"), gn != Ln && L("$" + (hr[gn].price - On) + " " + mEng[14], o, i + 96), yt.textAlign = "left", yt.fillStyle = "yellow", L(mEng[27] + (gn > ln ? mEng[26] : hr[gn].thrust), Pa + 256 + 32, Aa + 256 + 176), L(mEng[28] + (gn > ln ? mEng[26] : hr[gn].agility), Pa + 256 + 32, Aa + 256 + 192), L(mEng[29] + (gn > ln ? mEng[26] : hr[gn].health), Pa + 256 + 32, Aa + 256 + 208), L(mEng[30] + (gn > ln ? mEng[26] : hr[gn].weapons), Pa + 256 + 32, Aa + 256 + 224), L(mEng[31] + (gn > ln ? mEng[26] : hr[gn].capacity), Pa + 256 + 32, Aa + 256 + 240), gn < hr.length && yt.drawImage(_r.arrow, o + 128 - 48, i - 16), gn > 0 && (yt.save(), yt.translate(o - 128 + 32, i), yt.rotate(Math.PI), yt.drawImage(_r.arrow, -16, -16), yt.restore());
                    var u = Math.floor((a.getMilliseconds() / 1e3 + a.getSeconds()) / 60 * 1024) % 64,
                        c = u % 8 * 128,
                        p = 128 * Math.floor(u / 8 % 4);
                    yt.save(), yt.translate(Pa + 128 - 16, Aa + 92 + 40), yt.drawImage(_r.silver, c, p, 128, 128, -64, -64, 128, 128), yt.restore()
                }

                function M() {
                    yt.fillStyle = "cyan", yt.textAlign = "center", yt.font = "16px Nasa", L(mEng[32] + pr[wr[mn]].name + mEng[33] + .75 * pr[wr[mn]].price + mEng[34], Pa + 384, Aa + 128), yt.font = "13px Nasa", L(mEng[35], Pa + 384, Aa + 192), yt.font = "11px Nasa", yt.textAlign = "left"
                }

                function S() {
                    if (yt.font = "11px Nasa", yt.textAlign = "left", we(), 0 != It) {
                        yt.fillStyle = "cyan", yt.textAlign = "center", yt.font = "30px Nasa", L(mEng[36], Pa + 384, Aa + 128), yt.font = "11px Nasa";
                        var e = "";
                        "Mining" === It.type && (e = mEng[37] + It.amt + mEng[38] + It.metal + mEng[39] + g(It.sx, It.sy) + mEng[40]), "Base" === It.type && (e = mEng[41] + g(It.sx, It.sy) + mEng[40]), "Delivery" === It.type && (e = mEng[42] + g(It.sx, It.sy) + mEng[43] + g(It.dsx, It.dsy) + mEng[40]), "Secret" === It.type && (e = mEng[156] + g(It.sx, It.sy) + mEng[157]), "Secret2" === It.type && (e = mEng[158] + g(It.sx, It.sy) + mEng[159] + da + mEng[40]), "Secret3" === It.type && (e = mEng[160]), L(e, Pa + 384, Aa + 192), yt.textAlign = "left"
                    } else
                        for (var t in Tt) {
                            var n = t < 5 ? 0 : 384,
                                a = Tt[t],
                                e = "";
                            yt.fillStyle = t == Nn - 300 ? "lime" : "yellow", "Mining" == a.type && (e = mEng[37] + a.amt + mEng[38] + a.metal + mEng[39] + g(a.sx, a.sy) + mEng[40]), "Base" == a.type && (e = ln > 6 ? mEng[41] + g(a.sx, a.sy) + mEng[40] : mEng[46]), "Secret" == a.type && (e = ln > 14 ? mEng[156] + g(a.sx, a.sy) + mEng[157] : mEng[46]), "Delivery" == a.type && (e = mEng[42] + g(a.sx, a.sy) + mEng[43] + g(a.dsx, a.dsy) + mEng[40]), L(a.type, n + Pa + 16, Aa + 72 + t % 5 * 80), L(mEng[47] + a.exp + mEng[48] + Math.floor(a.exp / ("Mining" === a.type || "Delivery" === a.type ? 1500 : 4e3)) + mEng[49], n + Pa + 16 + 16, Aa + 72 + t % 5 * 80 + 16), _(mEng[50] + e, n + Pa + 16 + 16, Aa + 72 + t % 5 * 80 + 32, 336, 16)
                        }
                }

                function k() {
                    yt.font = "11px Nasa", yt.textAlign = "left";
                    for (var e = new Date, t = 2 * e.getMilliseconds() * Math.PI / 5e4 + 2 * e.getSeconds() * Math.PI / 50 + 2 * e.getMinutes() * 60 * Math.PI / 50, n = Zt + en + tn + nn, a = 0, r = 1; r < Wn; r += .2) a += 1e3 * Math.round(Math.pow(1024, r) / 1e3);
                    for (var r = 1; r < Gn; r += .2) a += 1e3 * Math.round(Math.pow(1024, r) / 1e3);
                    for (var r = 1; r < Vn; r += .2) a += 1e3 * Math.round(Math.pow(1024, r) / 1e3);
                    for (var r = 1; r < qn; r += .2) a += 1e3 * Math.round(Math.pow(1024, r) / 1e3);
                    for (var r = 1; r < jn; r += .2) a += 1e3 * Math.round(Math.pow(1024, r) / 1e3);
                    for (var r = 1; r < zn; r += .2) a += 1e3 * Math.round(Math.pow(4096, r) / 1e3);
                    var o = 0;
                    for (var r in Rr) Rr[r] && o++;
                    yt.fillStyle = "yellow", L(mEng[161], Pa + 16, Aa + 512 - 16), yt.font = "32px Nasa", yt.textAlign = "center", L(la, Pa + 192, Aa + 96), yt.font = "11px Nasa";
                    var i = 0;
                    if (Ln >= pr[20].Level)
                        for (var r = 0; r < hr[Ln].weapons; r++) 20 == wr[r] && i++;
                    for (var s = zn, r = 0; r < i; r++) s *= 1.06;
                    for (var l = [mEng[162] + i, mEng[20] + Number((hr[Ln].thrust * Wn).toPrecision(3)), mEng[21] + Number(Gn.toPrecision(3)) + mEng[163], mEng[22] + Number((hr[Ln].capacity * qn).toPrecision(3)), mEng[23] + Number((hr[Ln].health * jn).toPrecision(3)), mEng[164] + Number(s.toPrecision(3)), an - rn + mEng[51], rn + mEng[52], Yn + mEng[53], mEng[54] + n, mEng[55] + Number((On + a).toPrecision(3)), mEng[56] + Number((on + n + On + a).toPrecision(3)), Math.round(sn) + mEng[57], mEng[58] + ln, o + mEng[59]], r = 0; r < l.length; r++) L(l[r], Pa + 512 - 64, Aa + 44 + 32 + 16 * r);
                    yt.fillStyle = 700 == Nn ? "yellow" : "red", L(mEng[165], Pa + 512 + 128, Aa + 44 + 64 - 16), Rr[12] && (yt.fillStyle = 701 == Nn ? "yellow" : "red", L(mEng[166], Pa + 512 + 128, Aa + 44 + 64 + 16)), Rr[24] && (yt.fillStyle = 702 == Nn ? "yellow" : "gold", L(mEng[167], Pa + 512 + 128, Aa + 44 + 64 + 48)), Rr[36] && (yt.fillStyle = 703 == Nn ? "yellow" : "lightgray", L(mEng[168], Pa + 512 + 128, Aa + 44 + 64 + 80)), Rr[47] && (yt.fillStyle = 704 == Nn ? "yellow" : "cyan", L(mEng[169], Pa + 512 + 128, Aa + 44 + 64 + 112));
                    var u = Pa + 192,
                        c = Aa + 192;
                    yt.save(), yt.translate(u, c), yt.rotate(-3 * t);
                    var p = "red" === Lt,
                        h = p ? Ar[Ln] : Tr[Ln];
                    if (void 0 === h || 2 == h) return (p ? Ar : Tr)[Ln] = 2, void(2 != h && d(p, Ln));
                    yt.drawImage(h, -h.width / 2, -h.height / 2), yt.restore(), yt.fillStyle = "yellow", yt.textAlign = "left", yt.font = "24px Nasa", L(mEng[17], Pa + 64, Aa + 256 + 64 + 16), yt.fillStyle = "white", yt.font = "11px Nasa", yt.drawImage(200 == Nn ? _r.gbutton : _r.button, Pa + 64, Aa + 416 - 64), yt.drawImage(201 == Nn ? _r.gbutton : _r.button, Pa + 192, Aa + 416 - 64), yt.drawImage(202 == Nn ? _r.gbutton : _r.button, Pa + 64, Aa + 416), yt.drawImage(203 == Nn ? _r.gbutton : _r.button, Pa + 192, Aa + 416), yt.drawImage(204 == Nn ? _r.gbutton : _r.button, Pa + 320, Aa + 416 - 64), yt.drawImage(205 == Nn ? _r.gbutton : _r.button, Pa + 320, Aa + 416), yt.textAlign = "center", L(mEng[20] + Wn + mEng[163], Pa + 64 + 54, Aa + 416 - 64 + 16), L(mEng[21] + Gn + mEng[163], Pa + 192 + 54, Aa + 416 - 64 + 16), L(mEng[22] + qn + mEng[163], Pa + 64 + 54, Aa + 416 + 16), L(mEng[23] + jn + mEng[163], Pa + 192 + 54, Aa + 416 + 16), L("Energy: " + zn + mEng[163], Pa + 320 + 54, Aa + 416 - 64 + 16), L("Agility: " + Vn + mEng[163], Pa + 320 + 54, Aa + 416 + 16), L("$" + 1e3 * Math.round(Math.pow(1024, Wn) / 1e3), Pa + 64 + 54, Aa + 416 - 64 + 32), L("$" + 1e3 * Math.round(Math.pow(1024, Gn) / 1e3), Pa + 192 + 54, Aa + 416 - 64 + 32), L("$" + 1e3 * Math.round(Math.pow(1024, qn) / 1e3), Pa + 64 + 54, Aa + 416 + 32), L("$" + 1e3 * Math.round(Math.pow(1024, jn) / 1e3), Pa + 192 + 54, Aa + 416 + 32), L("$" + 1e3 * Math.round(Math.pow(4096, zn) / 1e3), Pa + 320 + 54, Aa + 416 - 64 + 32), L("$" + 1e3 * Math.round(Math.pow(1024, Vn) / 1e3), Pa + 320 + 54, Aa + 416 + 32)
                }

                function x() {
                    yt.save(), yt.fillStyle = "yellow", yt.font = "11px Nasa", yt.textAlign = "center";
                    for (var e = 0; e < Rr.length; e++) yt.fillStyle = e < 13 ? Rr[e] ? "red" : "pink" : e < 25 ? Rr[e] ? "gold" : "lime" : e < 37 ? Rr[e] ? "lightgray" : "white" : Rr[e] ? "cyan" : "yellow", Rr[e] && (yt.font = "9px Nasa", L(achNames[e].split(":")[1], Pa + 768 * (1 + e % 5 * 2) / 10, Aa + 20 + 40 * Math.floor(e / 5) + 60)), yt.font = "12px Nasa", L(Rr[e] ? achNames[e].split(":")[0] : mEng[172], Pa + 768 * (1 + e % 5 * 2) / 10, Aa + 8 + 40 * Math.floor(e / 5) + 60);
                    yt.restore()
                }

                function P() {
                    yt.textAlign = "center", yt.font = "26px Nasa";
                    for (var e = [mEng[62], mEng[63], mEng[64], mEng[65], mEng[66], mEng[67], mEng[68]], t = 0; t < 3; t++)
                        for (var n = 0; n < 2; n++) {
                            yt.fillStyle = Nn == 500 + t + 4 * n ? "lime" : "yellow";
                            var a = Pa + 128 + 256 * t,
                                r = Aa + 40 + 472 * n * 2 / 3 + 472 / 6;
                            L(e[t + 4 * n], a, r)
                        }
                    yt.fillStyle = 503 == Nn ? "lime" : "yellow";
                    var a = Pa + 384,
                        r = Aa + 40 + 472 / 3 + 472 / 6;
                    L(e[3], a, r), yt.textAlign = "left", yt.font = "11px Nasa"
                }

                function A() {
                    yt.font = "11px Nasa", yt.textAlign = "right", yt.fillStyle = "yellow", L(mEng[5] + Math.floor(on), Pa + 768 - 16, Aa + 64), yt.textAlign = "center", yt.font = "24px Nasa", L(mEng[15], Pa + 384, Aa + 68), yt.textAlign = "left", yt.font = "11px Nasa";
                    for (var e = 0; e < pr.length; e++) {
                        var t = Pa + 4 + 240 * Math.floor(pr[e].order / Math.ceil(pr.length / 3)),
                            n = Aa + 40 + 32 + 16 * (pr[e].order % Math.ceil(pr.length / 3) + 2),
                            a = pr[e].price > on ? "orange" : "yellow";
                        Ln < pr[e].Level && (a = "red");
                        var r = "white";
                        "Gun" === pr[e].type && (r = "red"), "Missile" === pr[e].type && (r = "orange"), "Orb" === pr[e].type && (r = "tan"), "Beam" === pr[e].type && (r = "lime"), "Blast" === pr[e].type && (r = "green"), "Mine" === pr[e].type && (r = "blue"), "Misc" === pr[e].type && (r = "purple"), yt.fillStyle = r, L("*", t, n), yt.fillStyle = Nn - 20 == e ? "lime" : a, L(mEng[69] + ("$" + pr[e].price + "         ").substring(0, 9) + pr[e].name, t + 11, n), Nn - 20 == e && T(e)
                    }
                }

                function T(e) {
                    if (yt.font = "11px Nasa", L(pr[e].name, Pa + 32, Aa + 356 + -32), _(pr[e].desc, Pa + 32, Aa + 356 + -16, 704, 16), L("Type: " + pr[e].type, Pa + 32, Aa + 356 + 32), L(mEng[70] + (-1 == pr[e].energy ? mEng[206] : pr[e].energy), Pa + 32, Aa + 356 + 48), L(mEng[71] + (-1 == pr[e].Range ? mEng[206] : pr[e].Range + " Meters"), Pa + 32, Aa + 356 + 64), L(mEng[72] + (-1 == pr[e].Damage ? mEng[206] : pr[e].Damage), Pa + 32, Aa + 356 + 80), L(mEng[73] + (-1 == pr[e].Speed ? mEng[206] : pr[e].Speed), Pa + 32, Aa + 356 + 96), L(mEng[74] + (-1 == pr[e].Charge ? mEng[206] : pr[e].Charge / 25 + mEng[75]), Pa + 32, Aa + 356 + 112), L(mEng[173] + v(pr[e].ammo), Pa + 32, Aa + 356 + 128), L(mEng[174] + pr[e].Level, Pa + 32, Aa + 356 + 144), pn) {
                        yt.fillStyle = pr[e].price > on ? "orange" : "limeq";
                        var t = pr[e].price > on ? mEng[76] : mEng[77];
                        yt.font = "20px Nasa", L(t, Pa + 256 + 32, Aa + 256 + 100 + 112)
                    }
                    yt.font = "11px Nasa"
                }

                function I() {
                    yt.lineWidth = 2, yt.textAlign = "right", yt.fillStyle = "yellow";
                    var e = {};
                    e[0] = mEng[3] + g(un, cn), e[1] = mEng[4] + H(), e[2] = mEng[5] + Math.floor(on);
                    for (var t = 0; t < 3; t++) L(e[t], ka - (Wa ? 16 : 278), 16 + 16 * t);
                    yt.font = "11px Nasa", yt.lineWidth = 2, kt++, p(U(kt % 3142 / 100) / 16), h(W(kt % 3142 / Math.PI / 50) / 16);
                    var n = {};
                    n[0] = mEng[141], n[1] = mEng[142], n[2] = mEng[143], n[3] = mEng[144], n[4] = mEng[145], n[5] = mEng[146], Re(Pa, Aa + 44, 768, 468, "black", "white"), yt.textAlign = "center";
                    for (var t = 0; t < 6; t++) Re(Pa + 128 * t + 8, Aa + 4, 112, 32, hn == t ? "darkgray" : "black", "white");
                    yt.fillStyle = "white";
                    for (var t = 0; t < 6; t++) L(n[t], Pa + (128 * t + 64), Aa + 23);
                    yt.fillStyle = "yellow", yt.textAlign = "left", yt.font = "18px Nasa", L(mEng[78], Pa + 16, Aa - 16), yt.font = "11px Nasa"
                }

                function _(e, t, n, a, r) {
                    for (var o = e.split(" "), i = "", s = 0; s < o.length; s++) {
                        var l = i + o[s] + " ";
                        yt.measureText(l).width > a && s > 0 ? (L(i, t, n), i = o[s] + " ", n += r) : i = l
                    }
                    L(i, t, n)
                }

                function D() {
                    for (var e in va) delete va[e];
                    for (var e in data.pack) va[data.pack[e].id] = data.pack[e]
                }

                function N() {
                    switch (St++, be(), ge(), ve(), I(), Le(), -1 != hn && ct.default.turnOffRegister("LoginOverlay"), hn) {
                        case 0:
                            b();
                            break;
                        case 1:
                            C();
                            break;
                        case 2:
                            S();
                            break;
                        case 3:
                            k();
                            break;
                        case 4:
                            x();
                            break;
                        case 5:
                            P();
                            break;
                        case 7:
                            A();
                            break;
                        case 8:
                            M()
                    }
                    ia-- > 0 && !Wa && De(), -1 == hn && xe(), Nt && Se(), 0 != self.quests && he(), 0 != Ea && Ee(), Oe(), Fe(), Ae()
                }

                function R(e) {
                    if (e.msg.includes(":") || !e.msg.includes("GUEST")) {
                        for (var t = vn; t > 0; t--) kn[t] = kn[t - 1];
                        if (e.msg.includes("`~")) {
                            var n = O(e.msg, "`~", 1),
                                a = O(e.msg, "`~", 2),
                                r = parseFloat(e.msg.substring(n + 2, a));
                            e.msg = e.msg.replace("`~" + r + "`~", pr[r].name)
                        }
                        kn[0] = e.msg, ye()
                    }
                }

                function O(e, t, n) {
                    return e.split(t, n).join(t).length
                }

                function L(e, t, n) {
                    e.length > oa ? yt.fillText(e.substring(0, oa), t, n) : yt.fillText(e, t, n)
                }

                function B(e, t) {
                    var n = e.getBoundingClientRect();
                    return {
                        x: t.clientX - n.left,
                        y: t.clientY - n.top
                    }
                }

                function H() {
                    if (un == Math.floor(At / 2) && cn == Math.floor(At / 2)) return 1;
                    var e = (un + cn) / 12,
                        t = Math.atan(Xt - Jt) / Math.PI + .5,
                        n = Math.floor(16 * (e + t) / 2) / 16;
                    return "red" == Lt ? n : 1 - n
                }

                function F(e) {
                    return e * e * e
                }

                function U(e) {
                    e += 200 * Math.PI, e %= 2 * Math.PI;
                    var t = e % Math.PI;
                    return (e > Math.PI ? -1 : 1) * vt[Math.floor(1e3 * (t < Math.PI / 2 ? t : Math.PI - t))]
                }

                function W(e) {
                    return U(e + Math.PI / 2)
                }

                function j(e) {
                    return e * e
                }

                function F(e) {
                    return e * e * e
                }

                function q(e) {
                    var t = [0, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 4e3, 8e3, 14e3, 2e4, 4e4, 7e4, 1e5, 14e4, 2e5, 3e5, 5e5, 8e5, 1e6, 15e5, 2e6, 3e6, 5e6, 8e6, 12e6, 16e6, 32e6, 64e6, 1e8];
                    return e < 0 ? 0 : t[e]
                }

                function G(e) {
                    var t = Math.floor(e),
                        n = e - t,
                        a = Math.sin(1e3 * j(t));
                    return a + (Math.sin(1e3 * j(t + 1)) - a) * (n * n / 2 - n * n * n / 3) * 6
                }

                function z() {
                    return Math.floor(Wa ? 0 : 2e5 * (1 / (1 + Math.exp(-sn / 15e3)) + Math.atan(sn / 15e4) - .5)) + 500
                }

                function V(e) {
                    return e < 1e4 ? "" + Math.round(e) : e < 1e7 ? Math.round(e / 1e3) + mEng[180] : e < 1e10 ? Math.round(e / 1e6) + mEng[181] : void 0
                }

                function K(e) {
                    if (0 == Sa) return void(Sa = e);
                    for (var t = 0; t < e.length; t++) Sa[t] = (Sa[t] + e[t] / 20) / 1.05
                }

                function Y(e, t) {
                    if (Rr[e] = !0, t && !(St < 10)) {
                        for (var n = 4; n > 0; n--) Lr[n] = Lr[n - 1], Or[n] = Or[n - 1];
                        Lr[0] = 256, Or[0] = e
                    }
                }

                function Q(e, t, n, a, r) {
                    return (n - t) / (wt / r >> a) % r + r * e
                }

                function X(e) {
                    return e % 1e3 - 500
                }

                function J(e) {
                    for (var t = 0; t < pr.length; t++)
                        if (pr[t].order == e) return t
                }

                function Z() {
                    return St / 10
                }

                function ee() {
                    yt.fillStyle = "black", yt.fillRect(0, 0, ka, xa), yt.fillStyle = "white", yt.fillRect(ka / 2 - 128, xa / 2 - 32, 256, 64), yt.fillStyle = "black", yt.fillRect(ka / 2 - 128 + 8, xa / 2 - 32 + 8, 240, 48), yt.fillStyle = "white", yt.fillRect(ka / 2 - 128 + 16, xa / 2 - 32 + 16, (Sr[0] + Dr[0]) / (Sr[1] + Dr[1]) * 224, 32), yt.textAlign = "center", yt.font = "30px Nasa", yt.fillText(splash, ka / 2, xa / 2 - 96)
                }

                function te() {
                    for (var e in ya) {
                        ya[e].time++ > 38 && delete ya[e]
                    }
                }

                function ne() {
                    for (var e in fa) {
                        var t = fa[e];
                        t.time++ >= 7 ? delete fa[e] : (t.x += t.dx, t.y += t.dy)
                    }
                    for (var n = new Date, a = n.getTime() / 100, e = 0; e < Ia.length; e++) {
                        var t = Ia[e],
                            r = t.trail,
                            o = r % 16;
                        if (Math.abs(t.speed) > 1 && Math.abs(t.driftAngle - t.angle) > .05) {
                            var i = .66 * j(hr[t.ship].width / 96);
                            i *= Math.min(8 * Math.abs(t.driftAngle - t.angle), 16), r > 15 ? i /= 6 : 0 != o && (i *= 2.5);
                            for (var s = 0; s < i; s++) {
                                var l = Math.random() * t.speed,
                                    u = W(t.driftAngle),
                                    c = U(t.driftAngle),
                                    d = ((96 + Math.floor(64 * Math.random()) << 16) + (96 + Math.floor(128 * Math.random()) << 8) + 255 - Math.floor(64 * Math.random())).toString(16);
                                if (1 == o) d = ((192 + Math.floor(64 * Math.random()) << 16) + (Math.floor(64 * Math.random()) << 8) + Math.floor(92 * Math.random())).toString(16);
                                else if (2 == o) d = Math.random() < .5 ? ((255 - 64 * Math.floor(Math.random()) << 16) + (183 + Math.floor(64 * Math.random()) << 8)).toString(16) : ((Math.floor(64 * Math.random()) << 16) + (192 + Math.floor(64 * Math.random()) << 8) + Math.floor(64 * Math.random())).toString(16);
                                else if (3 == o) {
                                    var p = Math.random() < .5 ? 255 : 1;
                                    d = ((p << 16) + (p << 8) + p).toString(16)
                                } else 4 == o ? (a = Math.random() * Math.PI * 60, d = ((Math.floor(128 * Math.cos(a) + 128) << 16) + (Math.floor(128 * Math.cos(a + 2 * Math.PI / 3) + 128) << 8) + Math.floor(128 * Math.cos(a + 4 * Math.PI / 3) + 128)).toString(16)) : 5 == o && (d = ((Math.floor(128 * Math.cos(a) + 128) << 16) + (Math.floor(128 * Math.cos(a + 2 * Math.PI / 3) + 128) << 8) + Math.floor(128 * Math.cos(a + 4 * Math.PI / 3) + 128)).toString(16));
                                for (; d.length < 6;) d = "0" + d;
                                fa[Math.random()] = {
                                    vip: r > 15,
                                    dx: u * t.speed / 2,
                                    dy: c * t.speed / 2,
                                    x: t.x + 4 * F(4 * Math.random() - 2) * hr[t.ship].width / 128 + u * l,
                                    y: t.y + 4 * F(4 * Math.random() - 2) * hr[t.ship].width / 128 + c * l,
                                    time: -1,
                                    color: d
                                }
                            }
                        }
                        if (t.health / t.maxHealth < .4)
                            for (var s = 0; s < 10; s++) {
                                var p = Math.random();
                                fa[Math.random()] = {
                                    vip: !1,
                                    dx: u * t.speed / 2,
                                    dy: c * t.speed / 2,
                                    x: t.x + 4 * F(4 * Math.random() - 2) * hr[t.ship].width / 128 + u * p * t.speed,
                                    y: t.y + 4 * F(4 * Math.random() - 2) * hr[t.ship].width / 128 + c * p * t.speed,
                                    time: -1,
                                    color: ((Math.round(112 + 32 * p) << 16) + (Math.round(112 + 32 * p) << 8) + Math.round(112 + 32 * p)).toString(16)
                                }
                            }
                    }
                }

                function ae() {
                    for (var e in ma) {
                        var t = ma[e];
                        t.time += 14, t.time > 400 && delete ma[e]
                    }
                    for (var e in ga) {
                        var n = ga[e];
                        n.time++ >= 14 ? delete ga[e] : (n.x += 25 * W(n.angle) + n.dx, n.y += 25 * U(n.angle) + n.dy)
                    }
                }

                function re() {
                    if (be(), 0 == Mn) {
                        yt.drawImage(_r.grad, 0, 0, ka, xa);
                        var e = new Date,
                            t = e.getTime() / 6e3;
                        Rt = 3200 * (32 + Math.sin(4 * t)), Ot = 3200 * (32 + Math.cos(5 * t)), yt.fillStyle = Lt ? "pink" : "cyan", yt.font = "22px Nasa", _(jsn.lore[Lt ? 0 : 1], 48, 48, ka - 96, 40), yt.textAlign = "center", yt.fillStyle = "yellow", yt.font = 28 + 4 * Math.sin(32 * t) + "px Nasa", yt.fillText(mEng[80], ka - 192, xa - 32)
                    } else if (1 == Mn) {
                        yt.drawImage(_r.grad, 0, 0, ka, xa);
                        var e = new Date,
                            t = e.getTime() / 6e3;
                        Rt = 3200 * (32 + Math.sin(4 * t)), Ot = 3200 * (32 + Math.cos(5 * t)), yt.fillStyle = Lt ? "pink" : "cyan", yt.font = "22px Nasa", _(jsn.lore[Lt ? 0 : 1], 48, 48, ka - 96, 40), yt.textAlign = "center", yt.fillStyle = "yellow", yt.font = 28 + 4 * Math.sin(32 * t) + "px Nasa", yt.fillText(mEng[80], ka - 192, xa - 32)
                    }
                }

                function oe() {
                    yt.save(), yt.strokeStyle = "red", yt.translate(Wa ? 16 : 248, 335), yt.rotate(-Math.PI / 2), yt.beginPath();
                    var e = pr[wr[yr]].energy,
                        t = 314 * Math.round(e / 100 * 35) / 35 + (35 == Math.round(e / 100 * 35) ? 1 : 0);
                    yt.moveTo(t, -12), yt.lineTo(t, 36), yt.closePath(), yt.stroke(), yt.globalAlpha = .5, yt.fillStyle = "lime", yt.fillRect(0, 0, 314 * Math.round(Ut / 100 * 35) / 35 + (35 == Math.round(Ut / 100 * 35) ? 1 : 0), 24), yt.fillStyle = "red", yt.fillRect(0, 0, 314 * Math.round(Math.atan(br > 0 ? br / 10 : 0) / Math.PI * 70) / 35, 24), yt.globalAlpha = 1, yt.restore(), yt.save(), yt.translate((Wa ? 16 : 248) - 5, 340), yt.rotate(-Math.PI / 2), yt.drawImage(_r.energyBar, 0, 0), yt.restore()
                }

                function ie() {
                    fn <= 0 || (yt.save(), yt.globalAlpha = fn, fn -= .01, yt.fillStyle = "#ffffff", yt.fillRect(ka - 32 - 20 - 128, xa - 10 - 16 - 6, 128, 6), yt.beginPath(), yt.arc(ka - 32 - 20 - 128, xa - 10 - 16 - 3, 3, 0, 2 * Math.PI, !1), yt.fill(), yt.beginPath(), yt.arc(ka - 32 - 20, xa - 10 - 16 - 3, 3, 0, 2 * Math.PI, !1), yt.fill(), yt.beginPath(), yt.arc(ka - 32 - 20 - 128 + 128 * yn, xa - 10 - 16 - 3, 6, 0, 2 * Math.PI, !1), yt.fill(), yt.fillStyle = "#000000", yt.beginPath(), yt.arc(ka - 32 - 20 - 128 + 128 * yn, xa - 10 - 16 - 3, 4, 0, 2 * Math.PI, !1), yt.fill(), yt.restore())
                }

                function se() {
                    var e = 256 * (sn - q(ln - 1)) / (q(ln) - q(ln - 1));
                    e < 0 && (e = 0), yt.drawImage(_r.bar1, ka / 2 - 128, xa - 28), yt.fillStyle = "#000000", yt.fillRect(ka / 2 - 126 + e, xa - 22, 248 - e, 10), yt.drawImage(_r.bar2, ka / 2 - 128, xa - 28), yt.fillStyle = "#ffffff", yt.textAlign = "right", L("" + Math.max(q(ln - 1), 0), ka / 2 - 140, xa - 14), yt.textAlign = "left", L("" + q(ln), ka / 2 + 140, xa - 14), yt.font = "9px Nasa", yt.textAlign = e > 128 ? "right" : "left", yt.fillStyle = e > 128 ? "black" : "white", L("" + Math.round(sn), ka / 2 - 128 + e + (e > 128 ? -8 : 8), xa - 14), yt.font = "11px Nasa", yt.textAlign = "left"
                }

                function le() {
                    yt.textAlign = "center", yt.fillStyle = "pink";
                    for (var e in ya) {
                        var t = ya[e];
                        yt.font = (t.strong ? 40 : 20) + "px Nasa", yt.globalAlpha = (39 - t.time) / 39;
                        var n = t.spoils ? t.x : t.x - Rt + ka / 2 + xt + (t.local ? Rt : 0),
                            a = t.spoils ? t.y : t.y - Ot + xa / 2 - t.time + Pt + (t.local ? Ot : 0);
                        L(t.msg, n, a)
                    }
                    yt.globalAlpha = 1, yt.textAlign = "left", yt.font = "11px Nasa"
                }

                function ue() {
                    _t || ae();
                    for (var e in ma) {
                        var t = ma[e],
                            n = t.x - Rt + ka / 2 - 64 + xt,
                            a = t.y - Ot + xa / 2 - 64 + Pt;
                        if (t.time < 114) {
                            var r = _r.booms,
                                o = t.time % 10 * 128,
                                i = 128 * Math.floor(t.time / 10);
                            yt.save(), yt.drawImage(r, o, i, 128, 128, n, a, 128, 128), yt.restore()
                        }
                        if (t.shockwave) {
                            n = t.x - Rt + ka / 2 + xt, a = t.y - Ot + xa / 2 + Pt;
                            var s = 96 * Math.sqrt(t.time);
                            yt.globalAlpha = .9 - t.time / 500, yt.drawImage(_r.shockwave, n - s / 2, a - s / 2, s, s), yt.globalAlpha = 1
                        }
                    }
                    for (var e in ga) {
                        var l = ga[e];
                        yt.beginPath(), yt.strokeStyle = "gray", yt.lineWidth = 6, yt.globalAlpha = (15 - l.time) / 15, yt.fillStyle = "white", yt.fillRect(l.x - 3 - Rt + ka / 2, l.y - 3 - Ot + xa / 2, 7, 7), yt.globalAlpha = (15 - l.time) / 22, yt.moveTo(l.x - Rt + ka / 2, l.y - Ot + xa / 2), yt.lineTo(l.x - Rt + ka / 2 - (25 * W(l.angle) + l.dx), l.y - Ot + xa / 2 - (25 * U(l.angle) + l.dy)), yt.stroke(), yt.closePath(), yt.globalAlpha = 1
                    }
                }

                function ce() {
                    for (var e in fa) {
                        var t = fa[e];
                        yt.globalAlpha = (9 - t.time) / 9, yt.strokeStyle = yt.fillStyle = "#" + t.color, t.vip ? de(t.x - Rt + ka / 2 + xt, t.y - Ot + Pt + xa / 2, 5, 3, 8) : yt.fillRect(t.x - 1 - Rt + ka / 2 + xt, t.y - 1 - Ot + Pt + xa / 2, 3, 3)
                    }
                    yt.globalAlpha = 1
                }

                function de(e, t, n, a, r) {
                    yt.lineWidth = 1;
                    var o = Math.PI / 2 * 3,
                        i = e,
                        s = t,
                        l = Math.PI / n;
                    for (yt.beginPath(), yt.moveTo(e, t - a), bt = 0; bt < n; bt++) i = e + W(o) * a, s = t + U(o) * a, yt.lineTo(i, s), o += l, i = e + W(o) * r, s = t + U(o) * r, yt.lineTo(i, s), o += l;
                    yt.lineTo(e, t - a), yt.closePath(), yt.fill()
                }

                function pe(e, t) {
                    var n = Zt + en + tn + nn;
                    yt.textAlign = "right", yt.fillStyle = "yellow";
                    var a = [mEng[182], mEng[183], mEng[184], mEng[185], mEng[186], mEng[187], mEng[188], mEng[189], mEng[190], mEng[191], mEng[192]],
                        r = {},
                        o = Wa ? 0 : 240;
                    pa *= ha, pa += Qn, ha++, pa /= ha + 0, r[0] = mEng[149] + Math.round(sn), r[1] = mEng[5] + Math.floor(on), r[2] = mEng[4] + H(), r[3] = mEng[3] + g(un, cn), r[4] = mEng[6] + an, r[5] = mEng[147] + n, r[6] = mEng[148] + ln, r[7] = "", r[8] = pt ? "" : mEng[81], r[9] = pt ? "" : mEng[82], r[10] = mEng[83] + Number((e / 40).toPrecision(3)) + mEng[193], r[11] = mEng[84] + Number(($n / 40).toPrecision(3)) + mEng[193], r[12] = mEng[85] + Number((Qn / 40).toPrecision(3)) + mEng[193] + mEng[194] + Number((pa / 40).toPrecision(3)) + mEng[193] + ")", r[13] = mEng[86] + Jn, r[14] = mEng[87] + na, e > 50 ? (r[7] = mEng[88], r[8] = mEng[89], r[9] = "") : Qn > 100 ? (r[7] = mEng[90], r[8] = mEng[91], r[9] = mEng[92]) : $n > 50 && (r[7] = mEng[95], r[8] = mEng[92], r[9] = "");
                    for (var i = 0; i < (aa ? 15 + Sa.length : 10); i++) L(i < 15 ? r[i] : a[i - 15] + mEng[195] + parseFloat(Math.round(100 * Sa[i - 15]) / 100).toFixed(2), ka - o - 32, 64 + 16 * i);
                    yt.fillStyle = "yellow", L(mEng[196], ka - o - 32, 16), yt.fillStyle = "pink", L(Vt + "/" + Yt + "/" + Qt + "/" + Jt, ka - o - 32, 32), yt.fillStyle = "cyan", L(zt + "/" + Kt + "/" + $t + "/" + Xt, ka - o - 32, 48), yt.textAlign = "left"
                }

                function he() {
                    yt.fillStyle = "cyan", yt.textAlign = "center";
                    var e = "";
                    "Mining" == It.type && (e = mEng[37] + It.amt + mEng[38] + It.metal + mEng[39] + g(It.sx, It.sy) + mEng[40]), "Base" == It.type && (e = mEng[41] + g(It.sx, It.sy) + mEng[40]), "Delivery" == It.type && (e = mEng[42] + g(It.sx, It.sy) + mEng[43] + g(It.dsx, It.dsy) + mEng[40]), "Secret" == It.type && (e = mEng[156] + g(It.sx, It.sy) + mEng[157]), "Secret2" == It.type && (e = mEng[158] + g(It.sx, It.sy) + mEng[159] + da + mEng[40]), "Secret3" == It.type && (e = mEng[160]), L(e, ka / 2, xa - 56), yt.textAlign = "left"
                }

                function me() {
                    Bn > 0 && (yt.font = "24px Nasa", yt.textAlign = "center", yt.fillStyle = "orange", L(mEng[96] + Math.round(Bn / 25) + mEng[75] + mEng[97], ka / 2, 256), yt.font = "11px Nasa", yt.textAlign = "left", ua = mEng[98]), Fn > 0 && (yt.font = "24px Nasa", yt.textAlign = "center", yt.fillStyle = "orange", L(mEng[99] + Math.round(Fn / 25) + mEng[75] + mEng[97], ka / 2, 256), yt.font = "11px Nasa", yt.textAlign = "left", ua = mEng[100]), !Nt && Un < 2250 && (yt.font = "24px Nasa", yt.textAlign = "center", yt.fillStyle = "orange", L(mEng[102] + Math.round(Un / 25) + mEng[75] + mEng[97], ka / 2, 256), yt.font = "11px Nasa", yt.textAlign = "left", ua = mEng[101])
                }

                function ge() {
                    for (var e in ja) {
                        var t = ja[e],
                            n = _r.s1;
                        e < 150 ? (n = _r.s5, e % 4 == 1 ? n = _r.s6 : e % 4 == 2 ? n = _r.s7 : e % 4 == 3 && (n = _r.s8)) : e % 4 == 1 ? n = _r.s2 : e % 4 == 2 ? n = _r.s3 : e % 4 == 3 && (n = _r.s4);
                        var a = (1e3 - e) / 1e3;
                        a *= a * a;
                        var r = (5e5 + t.x - (Rt - xt + un * wt) * (a * a + .1) * .25) % ka,
                            o = (5e5 + t.y - (Ot - Pt + cn * wt) * (a * a + .1) * .25) % xa;
                        yt.drawImage(n, r, o)
                    }
                }

                function fe() {
                    yt.textAlign = "center", yt.font = "14px Nasa", yt.strokeStyle = yt.fillStyle = "yellow", yt.lineWidth = 2, yt.setLineDash([20, 15]);
                    for (var e = (ka / 2 - Rt) % wt; e < ka; e += wt) yt.beginPath(), yt.moveTo(e + xt, 0), yt.lineTo(e + xt, xa), yt.stroke(), yt.save(), yt.translate(e, xa / 2), yt.rotate(Math.PI / 2), yt.fillText(mEng[103], 0, 0), yt.restore();
                    for (var e = (xa / 2 - Ot) % wt; e < xa; e += wt) yt.beginPath(), yt.moveTo(0, e + Pt), yt.lineTo(ka, e + Pt), yt.stroke(), L(mEng[103], ka / 2, e);
                    yt.font = "11px Nasa", yt.textAlign = "left", yt.setLineDash([])
                }

                function ye() {
                    var e = kn;
                    En = {}, Cn = 0;
                    for (var t = new RegExp(sa + ".*?" + sa, "g"), n = vn - 1; n >= 0; n--) {
                        for (var a = "", r = e[n].split(" "), o = 0; o < r.length; o++) {
                            var i = a + r[o] + " ";
                            yt.measureText(i.replace(t, "")).width > 512 && o > 0 ? (En[Cn++] = a, a = "                  " + r[o] + " ") : a = i
                        }
                        En[Cn++] = a
                    }
                    Cn--
                }

                function ve() {
                    if (yt.save(), yt.globalAlpha = .5, yt.fillStyle = "black", yt.strokeStyle = "#222222", Ne(-34, xa - 184, 562, 240, 32, !0, !0), yt.fillStyle = "white", Ne(0, xa - 64 - bn / vn * 168, 6, 24, 2, !0, !1), yt.globalAlpha = 1, yt.textAlign = "right", yt.fillStyle = 800 != Nn ? 1 != wn ? "violet" : "blue" === Lt ? "cyan" : "pink" : "yellow", L(0 == wn ? mEng[197] : mEng[199], 512, xa - 16), yt.restore(), 1 != wn) {
                        yt.textAlign = "left", yt.font = "11px Nasa", yt.fillStyle = "yellow", yt.save();
                        for (var e = Cn - bn; e >= Math.max(0, Cn - bn - 8); e--) {
                            var t = e + bn - Object.keys(En).length;
                            yt.globalAlpha = (t + 20) / 20;
                            for (var n = 0, a = En[e].split(sa), r = 0; r < a.length; r++) r % 2 == 0 ? (yt.fillText(a[r], 16 + n, xa - 24 + 16 * t), n += yt.measureText(a[r]).width) : yt.fillStyle = "blue" === a[r] ? "cyan" : "red" === a[r] ? "pink" : a[r]
                        }
                        yt.restore()
                    }
                }

                function be() {
                    ft.width = ft.width, yt.fillStyle = "black", yt.fillRect(0, 0, ka, xa), yt.font = "11px Nasa";
                    for (var e = _r.spc, t = 0; t < (rr > 0 ? 3 : 1); t++) {
                        yt.globalAlpha = 0 == t ? .5 : (1e4 - j(100 - rr)) / (1e4 * t);
                        for (var n = 0; n < 2 + Math.floor(ka / 2048); n++)
                            for (var a = 0; a < 2 + Math.floor(xa / 2048); a++) yt.drawImage(e, Q(n, Rt, xt, t, 2048), Q(a, Ot, Pt, t, 2048))
                    }
                    yt.globalAlpha = 1
                }

                function we() {
                    if (!Wa) {
                        if (0 != wa) {
                            if (void 0 === wa[un]) return;
                            var e = X(wa[un][cn]);
                            (e > 3 && "blue" === Lt || e < -3 && "red" === Lt) && (ua = mEng[104]);
                            for (var t = 0; t < At; t++)
                                for (var n = 0; n < At; n++) {
                                    var a = X(wa[t][n]);
                                    yt.fillStyle = a > 0 ? "red" : "cyan";
                                    var r = Math.sqrt(Math.abs(a) / 30);
                                    yt.globalAlpha = Math.min(1, r), yt.fillRect(20 + 182 * t / At, 20 + 182 * n / At, 182 / At, 182 / At)
                                }
                        }
                        if (yt.globalAlpha = 1, yt.drawImage(_r.galaxy, 14, 14), yt.lineWidth = 3, yt.strokeStyle = "#FFFF00", yt.strokeRect(20 + 182 * un / At, 20 + 182 * cn / At, 182 / At, 182 / At), 0 != Rn && 0 != wa)
                            for (var t = 0; t < At; t++)
                                for (var n = 0; n < At; n++) 1 == Rn[t][n] ? yt.drawImage(_r.mrss, 21.5 + 26 * t, 21.5 + 27 * n) : 2 == Rn[t][n] ? yt.drawImage(_r.mbss, 21.5 + 26 * t, 21.5 + 26 * n) : wa[t][n] >= 1e3 && yt.drawImage(_r.ma, 21.5 + 26 * t, 21.5 + 26 * n);
                        Gn < 1.9 || (yt.fillStyle = "white", yt.beginPath(), yt.arc(20 + 182 * qt, 20 + 182 * Gt, 4, 0, 2 * Math.PI, !1), yt.fill(), yt.fillStyle = "black", yt.beginPath(), yt.arc(20 + 182 * qt, 20 + 182 * Gt, 3, 0, 2 * Math.PI, !1), yt.fill(), yt.fillStyle = "white", yt.beginPath(), yt.arc(20 + 182 * Wt, 20 + 182 * jt, 4, 0, 2 * Math.PI, !1), yt.fill())
                    }
                }

                function Ee() {
                    if (!Wa) {
                        yt.save(), yt.globalAlpha = .5, Re(ka - 260, -2, 262, 16 * (Ea.length + 4) + 2, "black", "white"), yt.fillStyle = Lt, Ne(ka - 221, 16 * Math.min(Ca, 16) + 52, 8 * la.length + 7, 16, 7, !0, !1), yt.restore(), yt.fillStyle = "yellow", yt.font = "24px Nasa", yt.textAlign = "center", L(mEng[105], ka - 128, 28), yt.font = "11px Nasa", yt.fillStyle = "yellow", L(mEng[106], ka - 208, 48), yt.textAlign = "right", L(mEng[107], ka - 48 - 16, 48), L(mEng[108], ka - 16, 48);
                        for (var e = 0; e < Ea.length; e++) {
                            var t = 1 + (16 != e ? e : parseInt(Ea[e].id));
                            yt.textAlign = "left", yt.fillStyle = "red" == Ea[e].color ? "pink" : "cyan", L(Ea[e].name, ka - 216, 16 * (e + 4)), yt.fillStyle = "yellow", L(t + mEng[40], ka - 248, 16 * (e + 4)), yt.textAlign = "right", L(V(Ea[e].exp), ka - 48 - 16, 16 * (e + 4)), L(Ea[e].rank, ka - 16, 16 * (e + 4))
                        }
                    }
                }

                function Ce() {
                    if (!(Gn < 1.1)) {
                        yt.fillStyle = "white", yt.drawImage(_r.grid, 16, 246);
                        var e = new Date,
                            t = e.getTime() / 560;
                        yt.globalAlpha = .5, yt.save(), yt.translate(112, 342), yt.rotate(t % (2 * Math.PI) + Math.PI / 2), yt.drawImage(_r.spin, -96, -96), yt.restore(), yt.globalAlpha = yt.lineWidth = 1;
                        var n = 5120 * (1 + 1.5 * (Gn - 1));
                        if (0 != Ta) {
                            var a = Ta.x - Rt,
                                r = Ta.y - Ot;
                            if (j(a) + j(r) < j(n)) {
                                var o = Math.atan2(r, a) + 2 * Math.PI,
                                    i = a / n * 96 + 96 + 16,
                                    s = r / n * 96 + 96 + 214 + 32;
                                yt.globalAlpha = (o - t + 2e9 * Math.PI) % (2 * Math.PI) / (2 * Math.PI), yt.beginPath(), yt.arc(i, s, Gn > 1.3 ? 5 : 3, 0, 2 * Math.PI, !1), yt.fillStyle = "lightgray", Gn > 1.3 && (yt.fillStyle = "red" === Ta.color ? "pink" : "cyan"), yt.fill()
                            }
                        }
                        var l = (e.getTime(), !0),
                            u = !1,
                            c = void 0;
                        try {
                            for (var d, p = Ia[Symbol.iterator](); !(l = (d = p.next()).done); l = !0) {
                                var h = d.value,
                                    a = h.x - Rt,
                                    r = h.y - Ot;
                                if (!(j(a) + j(r) > j(n))) {
                                    var o = Math.atan2(r, a) + 2 * Math.PI,
                                        i = a / n * 96 + 16 + 96,
                                        s = r / n * 96 + 96 + 214 + 32;
                                    yt.globalAlpha = (o - t + 2e9 * Math.PI) % (2 * Math.PI) / (2 * Math.PI), yt.beginPath(), yt.arc(i, s, 3, 0, 2 * Math.PI, !1), Gn > 1.3 && (yt.fillStyle = "red" === h.color ? "pink" : "cyan"), yt.fill()
                                }
                            }
                        } catch (e) {
                            u = !0, c = e
                        } finally {
                            try {
                                !l && p.return && p.return()
                            } finally {
                                if (u) throw c
                            }
                        }
                        if (Gn > 2.5) {
                            var m = !0,
                                g = !1,
                                f = void 0;
                            try {
                                for (var y, v = Fa[Symbol.iterator](); !(m = (y = v.next()).done); m = !0) {
                                    var h = y.value,
                                        a = h.x - Rt,
                                        r = h.y - Ot;
                                    if (!(j(a) + j(r) > j(n))) {
                                        var o = Math.atan2(r, a) + 2 * Math.PI,
                                            i = a / n * 96 + 16 + 96,
                                            s = r / n * 96 + 96 + 214 + 32;
                                        yt.globalAlpha = (o - t + 2e9 * Math.PI) % (2 * Math.PI) / (2 * Math.PI), yt.beginPath(), yt.arc(i, s, 2, 0, 2 * Math.PI, !1), yt.fillStyle = "gold", yt.fill()
                                    }
                                }
                            } catch (e) {
                                g = !0, f = e
                            } finally {
                                try {
                                    !m && v.return && v.return()
                                } finally {
                                    if (g) throw f
                                }
                            }
                        }
                        yt.lineWidth = 2;
                        var b = !0,
                            w = !1,
                            E = void 0;
                        try {
                            for (var C, M = Ha[Symbol.iterator](); !(b = (C = M.next()).done); b = !0) {
                                var S = C.value,
                                    a = S.x - Rt,
                                    r = S.y - Ot;
                                if (!(j(a) + j(r) > j(n))) {
                                    var o = Math.atan2(r, a) + 2 * Math.PI,
                                        i = a / n * 96 + 16 + 96,
                                        s = r / n * 96 + 96 + 214 + 32;
                                    yt.globalAlpha = (o - t + 2e9 * Math.PI) % (2 * Math.PI) / (2 * Math.PI), yt.beginPath(), yt.arc(i, s, 3, 0, 2 * Math.PI, !1), Gn > 1.3 && (yt.strokeStyle = yt.fillStyle = "orange"), Gn > 1.7 && (0 == S.metal ? yt.strokeStyle = yt.fillStyle = "#d44" : 1 == S.metal ? yt.strokeStyle = yt.fillStyle = "#eef" : 2 == S.metal ? yt.strokeStyle = yt.fillStyle = "#9a9" : 3 == S.metal && (yt.strokeStyle = yt.fillStyle = "#90f")), Gn > 1.5 ? yt.stroke() : yt.fill()
                                }
                            }
                        } catch (e) {
                            w = !0, E = e
                        } finally {
                            try {
                                !b && M.return && M.return()
                            } finally {
                                if (w) throw E
                            }
                        }
                        yt.globalAlpha = 1, yt.lineWidth = 3
                    }
                }

                function Me() {
                    if (un == Math.floor(At / 2) && cn == Math.floor(At / 2) && (void 0 !== Ar[Ln] || void 0 !== Tr[Ln])) {
                        var e = void 0 === Ar[Ln] ? Tr[Ln].width : Ar[Ln].width,
                            t = Rt - wt / 2,
                            n = Ot - wt / 2,
                            a = Math.atan2(n, t) + Math.PI,
                            r = ka / 2 + 1.25 * e * W(a) + xt,
                            o = xa / 2 + 1.25 * e * U(a) + Pt,
                            i = _r.BHArrow,
                            s = i.width / 2;
                        yt.save(), yt.translate(r, o);
                        var l = new Date;
                        yt.drawImage(_r.Exclamation, 0, (7 & Math.floor(l.getMilliseconds() / 50 + 4)) * s * 2, 2 * s, 2 * s, s, s, 2 * s, 2 * s), yt.rotate(a), yt.drawImage(i, 0, (7 & Math.floor(l.getMilliseconds() / 50)) * s * 2, 2 * s, 2 * s, -s, -s, 2 * s, 2 * s), yt.restore()
                    }
                }

                function Se() {
                    yt.fillStyle = "yellow", yt.textAlign = "center", yt.font = "40px Nasa", L(mEng[109], Pa + 384, Aa + 512), yt.textAlign = "left", yt.font = "11px Nasa"
                }

                function ke() {
                    yt.fillStyle = "yellow", yt.textAlign = "center", yt.font = "50px Nasa", L(mEng[110], Pa + 384, Aa + 128), yt.font = "34px Nasa", L(mEng[13] + Yn, Pa + 384, Aa + 384), Yn > 0 && L(mEng[111], Pa + 384, Aa + 512), yt.textAlign = "left", yt.font = "11px Nasa"
                }

                function xe() {
                    yt.fillStyle = "pink", yt.textAlign = "center", yt.font = "20px Nasa";
                    var e = "";
                    1 == ra && (e = mEng[112]), 2 == ra && (e = mEng[113]), 3 == ra && (e = mEng[114]), 4 == ra && (e = mEng[115]), 5 == ra && (e = "Username is profane!"), 10 == ra && (e = mEng[116]), L(e, ka / 2, xa - 64), yt.textAlign = "left", yt.font = "11px Nasa"
                }

                function Pe() {
                    yt.globalAlpha = .2 * (.3 * ar + .01), ar -= .2, yt.fillStyle = "pink", yt.fillRect(0, 0, ka, xa), yt.globalAlpha = 1
                }

                function Ae() {
                    var e = Zt + en + tn + nn,
                        t = "",
                        n = "";
                    yt.save(), yt.textAlign = "center", yt.fillStyle = "yellow", Wa && (8e3 != on ? t = mEng[123] : or ? ir ? 0 == Ln && 0 == e ? (t = mEng[119], n = mEng[120]) : 0 == Ln && (t = dn ? mEng[122] : mEng[121]) : t = mEng[118] : t = mEng[117]);
                    var a = new Date,
                        r = a.getTime();
                    yt.font = 5 * U(r / 180) + 25 + "px Nasa", L(t, ka / 2, 40), L(n, ka / 2, 88), yt.restore()
                }

                function Te(e) {
                    var t = Hn / 16;
                    yt.fillStyle = "red", yt.globalAlpha = .75 * t, yt.fillRect(0, 0, ka, xa), yt.globalAlpha = 1, yt.translate(t * (e % 5 - 2), t * (e / 5 - 2))
                }

                function Ie(e) {
                    var t = Hn / 16;
                    yt.translate(-t * (e % 5 - 2), -t * (e / 5 - 2)), Hn--
                }

                function _e() {
                    yt.save(), yt.font = "20px Nasa", yt.fillStyle = St % 6 < 3 ? "orange" : "yellow", yt.textAlign = "right", self.lives < 3 && (ua = "Low Lives"), L(mEng[125] + ua, ka - 16, xa - 320), yt.restore()
                }

                function De() {
                    yt.save(), yt.textAlign = "center", yt.fillStyle = "yellow", yt.strokeStyle = "black", yt.font = "64px Nasa", yt.globalAlpha = Math.sqrt(ia / 41), yt.fillText(mEng[126], ka / 2, xa / 2), yt.strokeText(mEng[126], ka / 2, xa / 2), yt.restore()
                }

                function Ne(e, t, n, a, r, o, i) {
                    if (yt.lineWidth = 2, void 0 === i && (i = !0), void 0 === r && (r = 0), "number" == typeof r) r = {
                        tl: r,
                        tr: r,
                        br: r,
                        bl: r
                    };
                    else {
                        var s = {
                            tl: 0,
                            tr: 0,
                            br: 0,
                            bl: 0
                        };
                        for (var l in s) r[l] = r[l] || s[l]
                    }
                    yt.beginPath(), yt.moveTo(e + r.tl, t), yt.lineTo(e + n - r.tr, t), yt.quadraticCurveTo(e + n, t, e + n, t + r.tr), yt.lineTo(e + n, t + a - r.br), yt.quadraticCurveTo(e + n, t + a, e + n - r.br, t + a), yt.lineTo(e + r.bl, t + a), yt.quadraticCurveTo(e, t + a, e, t + a - r.bl), yt.lineTo(e, t + r.tl), yt.quadraticCurveTo(e, t, e + r.tl, t), yt.closePath(), o && yt.fill(), i && yt.stroke()
                }

                function Re(e, t, n, a, r, o) {
                    yt.save(), yt.lineWidth = 1, yt.fillStyle = r, yt.strokeStyle = o, yt.globalAlpha = .5, yt.fillRect(e, t, n, a), yt.beginPath(), yt.moveTo(e, t), yt.lineTo(e + n, t), yt.closePath(), yt.stroke(), yt.beginPath(), yt.moveTo(e, t + a), yt.lineTo(e + n, t + a), yt.closePath(), yt.stroke(), yt.restore()
                }

                function Oe() {
                    yt.save(), yt.fillStyle = "yellow", yt.textAlign = "center";
                    var e = xn / 25,
                        t = Math.floor(e / 60),
                        n = "" + Math.floor(e) % 60;
                    1 == n.length && (n = "0" + n), yt.font = "16px Nasa", xn >= 0 && xn < 15e3 ? (L(mEng[200] + t + ":" + n, ka / 2, xa - 120), L(mEng[201] + Tn, ka / 2, xa - 80), yt.font = "14px Nasa", L("-", ka / 2, xa - 100), yt.fillStyle = "pink", yt.textAlign = "right", L(Pn, ka / 2 - 8, xa - 100), yt.fillStyle = "cyan", yt.textAlign = "left", L(An, ka / 2 + 8, xa - 100)) : dn && t > 5 && L(mEng[202] + (t - 10) + ":" + n, ka / 2, xa - 120), yt.restore()
                }

                function Le() {
                    for (var e = 0; e < 4; e++) Lr[e]-- < 0 && (Or[e] = -1), Or[e] >= 0 && (yt.globalAlpha = Math.sqrt(Lr[e] + 1) / 24.2, yt.fillStyle = "black", Ne(ka - 384 - 96, xa - 96 * (e + 1), 192, 64, 16, !0, !1), yt.globalAlpha *= 1.2, yt.textAlign = "center", Or[e] < 13 ? yt.fillStyle = "red" : Or[e] < 25 ? yt.fillStyle = "gold" : Or[e] < 37 ? yt.fillStyle = "lightgray" : yt.fillStyle = "cyan", yt.font = "12px Nasa", L(mEng[203], ka - 384, xa - 96 * (e + 1) + 14), L(achNames[Or[e]].split(":")[0], ka - 384, xa - 96 * (e + 1) + 36), yt.font = "9px Nasa", L(achNames[Or[e]].split(":")[1], ka - 384, xa - 96 * (e + 1) + 54), yt.globalAlpha = 1)
                }

                function Be() {
                    yt.fillStyle = "yellow", yt.textAlign = "center", yt.font = "40px Nasa", L(mEng[204], Pa + 384, Aa + 192), L(mEng[205], Pa + 384, Aa + 320), yt.textAlign = "left", yt.font = "11px Nasa"
                }

                function He() {
                    if (!(Qa < 0 || $a < 1)) {
                        for (var e = "" + Math.round(Qa / 25); e.length < 2;) e = "0" + e;
                        e = "0:" + e;
                        var t = mEng[163] + $a;
                        yt.save(), yt.globalAlpha = Math.min(1, 1 - (Qa - 730) / 15);
                        var n = 1 + Math.max(0, Math.cbrt(Qa - 730)) / 2;
                        yt.textAlign = "center", yt.font = 30 * n + "px Nasa", L(t, ka / 2, 64), yt.font = 20 * n + "px Nasa", L(e, ka / 2, 88), yt.restore()
                    }
                }

                function Fe() {
                    for (var e in va) {
                        var t = va[e];
                        t.x += t.vx, t.y += t.vy, t.tick++
                    }
                }

                function Ue() {
                    _t || Fe();
                    for (var e in va) {
                        var t = va[e],
                            n = _r.bullet,
                            a = t.x - Rt + ka / 2 + xt,
                            r = t.y - Ot + xa / 2 + Pt;
                        if (28 != t.wepnID) {
                            "blue" == t.color && (n = _r.ebullet), 1 != t.wepnID && 23 != t.wepnID || (n = _r.bigBullet);
                            var o = n.width,
                                i = n.height;
                            yt.save(), yt.translate(a, r), yt.rotate(t.angle + Math.PI / 2), yt.drawImage(n, -o / 2, -i / 2), yt.restore()
                        } else {
                            yt.save(), yt.globalAlpha = .1, yt.fillStyle = "white";
                            for (var s = 0; s < 10; s++) {
                                var l = Math.random() * Math.PI * 2,
                                    u = Math.min(t.tick, 75),
                                    c = 4 + j(Math.random() * u / 10),
                                    d = Math.random() * c;
                                yt.beginPath(), yt.arc(a + Math.cos(l) * d, r + Math.sin(l) * d, c, 0, 2 * Math.PI, !1), yt.closePath(), yt.fill()
                            }
                            yt.restore(), t.tick > 750 && delete va[e]
                        }
                    }
                }

                function We() {
                    for (var e = 0; e < Ra.length; e++) {
                        var t = Ra[e],
                            n = _r.missile;
                        11 != t.wepnID && 13 != t.weaponID || (n = _r.heavyMissile), 12 == t.wepnID && (n = _r.empMissile), 14 == t.wepnID && (n = _r.torpedo);
                        var a = n.width,
                            r = n.height,
                            o = t.x - Rt + ka / 2 + xt,
                            i = t.y - Ot + xa / 2 + Pt;
                        yt.save(), yt.translate(o, i), yt.rotate(t.angle + Math.PI / 2), yt.drawImage(n, -a / 2, -r / 2), yt.restore()
                    }
                }

                function je() {
                    for (var e in Na) {
                        var t = Na[e],
                            n = _r.energyDisk,
                            a = n.width,
                            r = n.height,
                            o = t.x - Rt + ka / 2 + xt,
                            i = t.y - Ot + xa / 2 + Pt;
                        yt.save(), yt.translate(o, i), yt.rotate(Z() + Math.PI / 2), yt.drawImage(n, -a / 2, -r / 2), yt.restore()
                    }
                }

                function qe() {
                    for (var e = 0; e < Da.length; e++) {
                        var t = Da[e],
                            n = _r.mine,
                            a = n.width,
                            r = n.height,
                            o = t.x - Rt + ka / 2 + xt,
                            i = t.y - Ot + xa / 2 + Pt;
                        if (16 == t.wepnID) n = _r.laserMine;
                        else if (17 == t.wepnID) n = _r.empMine;
                        else {
                            if (32 == t.wepnID) {
                                yt.save(), yt.globalAlpha = .1, yt.fillStyle = "white";
                                for (var s = 0; s < 10; s++) {
                                    var l = Math.random() * Math.PI * 2,
                                        u = 4 + j(25 * Math.random() / 10),
                                        c = Math.random() * u;
                                    yt.beginPath(), yt.arc(o + Math.cos(l) * c, i + Math.sin(l) * c, u, 0, 2 * Math.PI, !1), yt.closePath(), yt.fill()
                                }
                                yt.restore();
                                continue
                            }
                            33 == t.wepnID && (n = _r.grenade)
                        }
                        yt.save(), yt.translate(o, i), yt.rotate(t.angle), yt.drawImage(n, -a / 2, -r / 2), yt.restore(), yt.fillStyle = "red" == t.color ? "red" : "#00FFFF", yt.beginPath(), yt.arc(o, i, 4, 0, 2 * Math.PI, !1), yt.fill()
                    }
                }

                function Ge() {
                    yt.lineWidth = 6;
                    for (var e in La) {
                        var t = La[e];
                        7 == t.wepnID ? yt.strokeStyle = "mediumpurple" : 9 == t.wepnID ? yt.strokeStyle = "lime" : 24 == t.wepnID ? yt.strokeStyle = "yellow" : 33 == t.wepnID || 26 == t.wepnID || 30 == t.wepnID ? yt.strokeStyle = "#d0c090" : yt.strokeStyle = "red";
                        var n = t.bx - Rt + ka / 2 + xt,
                            a = t.by - Ot + xa / 2 + Pt,
                            r = t.ex - Rt + ka / 2 + xt,
                            o = t.ey - Ot + xa / 2 + Pt;
                        yt.beginPath(), yt.moveTo(n, a), yt.lineTo(r, o), yt.globalAlpha = Math.random() * (12 - t.time) / 14, yt.stroke(), yt.closePath()
                    }
                    yt.globalAlpha = 1
                }

                function ze() {
                    yt.lineWidth = 12, yt.strokeStyle = "white";
                    for (var e in Ba) {
                        var t = Ba[e],
                            n = t.bx - Rt + ka / 2 + xt,
                            a = t.by - Ot + xa / 2 + Pt,
                            r = t.bx + 1e4 * Math.cos(t.angle) - Rt + ka / 2 + xt,
                            o = t.by + 1e4 * Math.sin(t.angle) - Ot + xa / 2 + Pt;
                        yt.beginPath(), yt.moveTo(n, a), yt.lineTo(r, o), yt.globalAlpha = Math.random() * (12 - t.time) / 14, yt.stroke(), yt.closePath()
                    }
                    yt.globalAlpha = 1
                }

                function Ve() {
                    for (var e = 0, t = 0; t < Ha.length; t++) {
                        var n = Ha[t],
                            a = 0 == n.metal ? _r.iron : 3 == n.metal ? _r.platinum : 1 == n.metal ? _r.silver : _r.aluminium,
                            r = n.x - Rt + ka / 2 + xt,
                            o = n.y - Ot + xa / 2 + Pt,
                            i = new Date,
                            s = (.5 + n.health / n.maxHealth) / 1.5,
                            l = Math.floor((i.getMilliseconds() / 1e3 + i.getSeconds()) / 60 * 1024) % 64,
                            u = l % 8 * 128,
                            c = 128 * Math.floor(l / 8 % 4 + Math.floor(n.metal) % 2 * 4);
                        yt.save(), yt.translate(r, o), yt.drawImage(_r.astUnderlay, -128, -128), yt.rotate(n.angle + Math.PI / 2), yt.drawImage(a, u, c, 128, 128, -64 * s, -64 * s, 128 * s, 128 * s), yt.restore(), n.color != Lt && (0 == e ? e = n : (n.x - Rt) * (n.x - Rt) + (n.y - Ot) * (n.y - Ot) < (e.x - Rt) * (e.x - Rt) + (e.y - Ot) * (e.y - Ot) && (e = n))
                    }
                    rt(e)
                }

                function Ke() {
                    if (0 != ba) {
                        var e = ba,
                            t = e.x - Rt + ka / 2 + xt,
                            n = e.y - Ot + xa / 2 + Pt,
                            a = new Date,
                            r = (a.getTime(), a.getTime() / 15e4),
                            o = (un + cn * At) % 5,
                            i = Ir[o];
                        if (void 0 === i || 2 == i) return Ir[o] = 2, void(2 == i || isNaN(o) || c(o));
                        var s = (U(5 * r) / 2 + .5) * (i.width - 512) + 256,
                            l = (W(4 * r) / 2 + .5) * (i.height - 512) + 256;
                        yt.save();
                        var u = yt.createPattern(i, "no-repeat");
                        yt.fillStyle = u, yt.translate(t, n), yt.drawImage("blue" == e.color ? _r.planetUB : "red" == e.color ? _r.planetUR : _r.planetU, -310, -310, 620, 620), yt.translate(-s, -l), yt.beginPath(), yt.arc(s, l, 256, 0, 2 * Math.PI), yt.closePath(), yt.fill(), yt.translate(s, l), yt.drawImage(_r.planetO, -256, -256), yt.setLineDash([20, 15]), yt.lineWidth = 3, yt.strokeStyle = "pink", yt.beginPath(), yt.lineWidth = 1, yt.restore(), yt.textAlign = "center", yt.fillStyle = e.color, "red" == yt.fillStyle ? yt.fillStyle : "blue" == yt.fillStyle && yt.fillStyle, yt.font = "60px Nasa";
                        var d = (e.record / 25 + .0078125 + "").replace(".", ":");
                        d = d.substr(0, d.length - 5), L(mEng[127] + e.name, t, n - 128 - 256), yt.textAlign = "left", yt.font = "11px Nasa"
                    }
                }

                function Ye() {
                    for (var e = 0; e < Fa.length; e++) {
                        var t = Fa[e],
                            n = 0 == t.type ? _r.pack : 1 == t.type ? _r.bonus : 2 == t.type ? _r.life : _r.ammo,
                            a = t.x - Rt + ka / 2 + xt,
                            r = t.y - Ot + xa / 2 + Pt,
                            o = new Date,
                            i = (o.getMilliseconds() / 1e3 + o.getSeconds()) / 3;
                        yt.save(), yt.translate(a, r), yt.rotate(i * Math.PI), yt.drawImage(n, -32, -32), yt.restore()
                    }
                }

                function $e() {
                    for (var e = new Date, t = e.getTime() / 1e3, n = 0; n < Oa.length; n++) {
                        yt.save();
                        var a = Oa[n],
                            r = a.isWorm ? _r.worm : _r.vort,
                            o = 24 * a.size / 64,
                            i = a.x - Rt + ka / 2 + xt,
                            s = a.y - Ot + xa / 2 + Pt;
                        yt.translate(i, s), yt.rotate(t % (2 * Math.PI)), yt.drawImage(r, -o / 2, -o / 2, o, o), yt.globalAlpha = .3, yt.rotate(-.5 * t % (2 * Math.PI)), yt.drawImage(r, 3 * -o / 4, 3 * -o / 4, 1.5 * o, 1.5 * o), yt.restore(), ua = a.isWorm ? mEng[128] : mEng[129]
                    }
                }

                function Qe() {
                    Jt = Xt = 0;
                    for (var e = 0, t = 0, n = 0; n < Ia.length; n++) {
                        var a = Ia[n];
                        "red" == a.color ? Jt++ : Xt++, yt.strokeStyle = "grey";
                        var r = "red" === a.color,
                            o = (r ? Ar : Tr)[a.ship];
                        if (void 0 === o || 2 == o) return (r ? Ar : Tr)[a.ship] = 2, void(2 != o && d(r, a.ship));
                        var i = o.width,
                            s = o.height;
                        if (0 == i || 0 == s) return;
                        var l = a.x - Rt + ka / 2 + xt,
                            u = a.y - Ot + xa / 2 + Pt;
                        yt.save(), yt.translate(l, u), yt.globalAlpha = .8, yt.drawImage("red" == a.color ? _r.astUnderlayRed : _r.astUnderlay, -i, -s, 2 * i, 2 * s), yt.globalAlpha = 1, yt.rotate(a.angle + Math.PI / 2);
                        var c = 38.4 * Math.sqrt(i / 64),
                            p = 1.4 * a.speed * i / 64 + Math.random() * i / 25;
                        if (a.speed > 0 && yt.drawImage(_r.fire, 0, St % 8 * 64, 64, 64, -c / 2, 0, c, p), yt.restore(), yt.save(), yt.translate(l, u), yt.rotate(a.angle + Math.PI / 2), yt.drawImage(o, -i / 2, -s / 2), yt.restore(), yt.fillStyle = "white", yt.textAlign = "center", L(a.name, l, u - .5 * hr[a.ship].width), yt.textAlign = "left", a.color !== Lt ? 0 == e ? e = a : (a.x - Rt) * (a.x - Rt) + (a.y - Ot) * (a.y - Ot) < (e.x - Rt) * (e.x - Rt) + (e.y - Ot) * (e.y - Ot) && (e = a) : j(a.x - Rt) + j(a.y - Ot) > 1600 || Ln != a.ship ? 0 == t ? t = a : (a.x - Rt) * (a.x - Rt) + (a.y - Ot) * (a.y - Ot) < (t.x - Rt) * (t.x - Rt) + (t.y - Ot) * (t.y - Ot) && (t = a) : a.health < .3 * a.maxHealth && (ua = mEng[150]), a.hasPackage && Ze(a), yt.lineWidth = 6, a.shield && (yt.strokeStyle = "lightblue", yt.beginPath(), yt.arc(l, u, i / 1.5 - 8, 0, 2 * Math.PI, !1), yt.stroke()), !(a.health / a.maxHealth >= 1)) {
                            yt.lineWidth = 4;
                            var h = Math.floor(255 * (1 - a.health / a.maxHealth)),
                                m = Math.floor(255 * a.health / a.maxHealth),
                                g = Math.floor(64 * a.health / a.maxHealth);
                            yt.strokeStyle = "rgb(" + h + ", " + m + ", " + g + ")", yt.beginPath(), yt.arc(l, u, i / 1.5, (2.5 - a.health / a.maxHealth * .99) * Math.PI, (.501 + a.health / a.maxHealth) * Math.PI, !1), yt.stroke()
                        }
                    }
                    0 != e && nt(e), 0 != t && at(t)
                }

                function Xe() {
                    yt.strokeStyle = "grey";
                    var e = "red" === Lt,
                        t = e ? Ar[Ln] : Tr[Ln];
                    if (void 0 === t || 2 == t) return (e ? Ar : Tr)[Ln] = 2, void(2 != t && d(e, Ln));
                    var n = t.width,
                        a = t.height,
                        r = Rt - Rt + ka / 2 + xt,
                        o = Ot - Ot + xa / 2 + Pt;
                    yt.save(), yt.translate(r, o), yt.rotate(Bt + Math.PI / 2), yt.globalAlpha = .25, yt.drawImage(t, -n / 2, -a / 2), yt.restore(), yt.lineWidth = 6, _n && (yt.strokeStyle = "lightblue", yt.beginPath(), yt.arc(r, o, n / 1.5 - 8, 0, 2 * Math.PI, !1), yt.stroke());
                    var i = hr[Ln].health * jn;
                    if (Ht < .3 * i && (ua = mEng[150]), !(Ht / i >= 1)) {
                        yt.lineWidth = 4;
                        var s = Math.floor(255 * (1 - Ht / i)),
                            l = Math.floor(255 * Ht / i),
                            u = Math.floor(64 * Ht / i);
                        yt.strokeStyle = "rgb(" + s + ", " + l + ", " + u + ")", yt.beginPath(), yt.arc(r, o, n / 1.5, (2.5 - Ht / i * .99) * Math.PI, (.501 + Ht / i) * Math.PI, !1), yt.stroke()
                    }
                }

                function Je() {
                    if (0 != Ta) {
                        var e = "red" == Ta.color ? _r.base : _r.bss,
                            t = e.width,
                            n = e.height,
                            a = Ta.x - Rt + ka / 2 + xt,
                            r = Ta.y - Ot + xa / 2 + Pt;
                        if (Ta.color !== Lt && (ua = mEng[131]), Ta.isBase ? (yt.save(), yt.translate(a, r), yt.rotate(2 * Ta.spinAngle + Math.PI / 2), yt.drawImage("red" == Ta.color ? _r.astUnderlayRed : _r.astUnderlay, -512, -512, 1024, 1024), yt.drawImage(e, -384, -384, 768, 768), yt.restore(), yt.textAlign = "center", yt.fillStyle = "lime", sn < 64 && Ta.color == Lt && j(Rt - Ta.x) + j(Ot - Ta.y) < j(512) && (yt.font = 2.5 * U(St / 8) + 15 + "px Nasa", L(mEng[130], a, r - 96), yt.font = "11px Nasa"), yt.textAlign = "left") : (yt.textAlign = "center", yt.fillStyle = "white", yt.font = "11px Nasa", L(Ta.owner, a, r - 64)), Ta.live) {
                            var o = "red" == Ta.color ? _r.turret : _r.bt;
                            if (t = o.width, n = o.height, yt.save(), yt.translate(a, r), yt.rotate(Ta.angle + Math.PI / 2), yt.drawImage(o, -t / 2, -n / 2), yt.restore(), Ta.health / Ta.maxHealth < 1) {
                                yt.lineWidth = 4;
                                var i = Math.floor(255 * (1 - Ta.health / Ta.maxHealth)),
                                    s = Math.floor(255 * Ta.health / Ta.maxHealth),
                                    l = Math.floor(64 * Ta.health / Ta.maxHealth);
                                yt.strokeStyle = "rgb(" + i + ", " + s + ", " + l + ")", yt.beginPath(), yt.arc(a, r, t / 1.5, (2.5 - .99 * Ta.health / Ta.maxHealth) * Math.PI, (.501 + Ta.health / Ta.maxHealth) * Math.PI, !1), yt.stroke()
                            }
                        }
                        tt(Ta)
                    }
                }

                function Ze(e) {
                    var t = _r.pack,
                        n = e.x - Rt + ka / 2 + xt,
                        a = e.y - Ot + xa / 2 + Pt;
                    yt.save(), yt.translate(n, a), yt.drawImage(t, -16, -16, 32, 32), yt.restore()
                }

                function et() {
                    var e = 0;
                    if (void 0 !== Ar[Ln]) e = Ar[Ln].width;
                    else {
                        if (void 0 === Tr[Ln]) return;
                        e = Tr[Ln].width
                    }
                    yt.fillStyle = "yellow";
                    var t = 0;
                    t = Rt < Ot ? wt - Rt > Ot ? 2 : 3 : wt - Rt > Ot ? 1 : 0;
                    var n = "";
                    if (0 == t ? n = wt - Rt : 1 == t ? n = Ot : 2 == t ? n = Rt : 3 == t && (n = wt - Ot), !((n = Math.floor(n / 10)) < xa / 10 || n > 500 * Gn)) {
                        var a = ka / 2 + 1 * e * W(t * Math.PI / 2) + xt,
                            r = xa / 2 - 1 * e * U(t * Math.PI / 2) + Pt,
                            o = ka / 2 + 1.3 * e * W(t * Math.PI / 2) + xt,
                            i = xa / 2 - 1.3 * e * U(t * Math.PI / 2) + Pt,
                            s = _r.edgeArrow,
                            l = s.width / 2;
                        yt.save(), yt.translate(a, r), yt.rotate(-t * Math.PI / 2), yt.drawImage(s, -l, -l), yt.restore(), yt.textAlign = "center", L(n, o, i + 6), yt.textAlign = "left"
                    }
                }

                function tt(e) {
                    var t = 0;
                    if (void 0 !== Ar[Ln]) t = Ar[Ln].width;
                    else {
                        if (void 0 === Tr[Ln]) return;
                        t = Tr[Ln].width
                    }
                    yt.fillStyle = "lightgray";
                    var n = Math.sqrt((e.x - Rt) * (e.x - Rt) + (e.y - Ot) * (e.y - Ot));
                    if (!((n = Math.floor(n / 10)) < xa / 10)) {
                        var a = Math.atan2(e.y - Ot, e.x - Rt),
                            r = ka / 2 + 1 * t * W(a) + xt,
                            o = xa / 2 + 1 * t * U(a) + Pt,
                            i = ka / 2 + 1.3 * t * W(a) + xt,
                            s = xa / 2 + 1.3 * t * U(a) + Pt,
                            l = _r.blueArrow,
                            u = l.width / 2;
                        yt.save(), yt.translate(r, o), yt.rotate(a), yt.drawImage(l, -u, -u), yt.restore(), yt.textAlign = "center", L(n, i, s + 6), yt.textAlign = "left"
                    }
                }

                function nt(e) {
                    var t = 0;
                    if (void 0 !== Ar[Ln]) t = Ar[Ln].width;
                    else {
                        if (void 0 === Tr[Ln]) return;
                        t = Tr[Ln].width
                    }
                    yt.fillStyle = "red" === Lt ? "cyan" : "red";
                    var n = Math.sqrt((e.x - Rt) * (e.x - Rt) + (e.y - Ot) * (e.y - Ot));
                    if (!((n = Math.floor(n / 10)) < xa / 20 || n > 500 * Gn)) {
                        var a = Math.atan2(e.y - Ot, e.x - Rt),
                            r = ka / 2 + 1 * t * W(a) + xt,
                            o = xa / 2 + 1 * t * U(a) + Pt,
                            i = ka / 2 + 1.3 * t * W(a) + xt,
                            s = xa / 2 + 1.3 * t * U(a) + Pt,
                            l = "red" === Lt ? _r.baseArrow : _r.redArrow,
                            u = l.width / 2;
                        yt.save(), yt.translate(r, o), yt.rotate(a), yt.drawImage(l, -u, -u), yt.restore(), yt.textAlign = "center", L(n, i, s + 6), yt.textAlign = "left"
                    }
                }

                function at(e) {
                    var t = 0;
                    if (void 0 !== Ar[Ln]) t = Ar[Ln].width;
                    else {
                        if (void 0 === Tr[Ln]) return;
                        t = Tr[Ln].width
                    }
                    yt.fillStyle = "red" !== Lt ? "cyan" : "red";
                    var n = Math.sqrt((e.x - Rt) * (e.x - Rt) + (e.y - Ot) * (e.y - Ot));
                    if (!((n = Math.floor(n / 10)) < xa / 10 || n > 500 * Gn)) {
                        var a = Math.atan2(e.y - Ot, e.x - Rt),
                            r = ka / 2 + 1 * t * W(a) + xt,
                            o = xa / 2 + 1 * t * U(a) + Pt,
                            i = ka / 2 + 1.3 * t * W(a) + xt,
                            s = xa / 2 + 1.3 * t * U(a) + Pt,
                            l = "red" !== Lt ? _r.baseArrow : _r.redArrow,
                            u = l.width / 2;
                        yt.save(), yt.translate(r, o), yt.rotate(a), yt.drawImage(l, -u, -u), yt.restore(), yt.textAlign = "center", L(n, i, s + 6), yt.textAlign = "left"
                    }
                }

                function rt(e) {
                    var t = 0;
                    if (void 0 !== Ar[Ln]) t = Ar[Ln].width;
                    else {
                        if (void 0 === Tr[Ln]) return;
                        t = Tr[Ln].width
                    }
                    yt.fillStyle = "orange", yt.textAlign = "center";
                    var n = Math.sqrt((e.x - Rt) * (e.x - Rt) + (e.y - Ot) * (e.y - Ot));
                    if (!((n = Math.floor(n / 10)) < xa / 10 || n > 500 * Gn)) {
                        var a = Math.atan2(e.y - Ot, e.x - Rt),
                            r = ka / 2 + 1 * t * W(a) + xt,
                            o = xa / 2 + 1 * t * U(a) + Pt,
                            i = ka / 2 + 1.3 * t * W(a) + xt,
                            s = xa / 2 + 1.3 * t * U(a) + Pt,
                            l = _r.astArrow,
                            u = l.width / 2;
                        yt.save(), yt.translate(r, o), yt.rotate(a), yt.drawImage(l, -u, -u), yt.restore(), yt.textAlign = "center", L(n, i, s + 6), yt.textAlign = "left"
                    }
                }
                var ot = n(79),
                    it = t(ot),
                    st = n(103),
                    lt = t(st),
                    ut = n(73),
                    ct = t(ut),
                    dt = n(167),
                    pt = (t(dt), !0),
                    ht = !!document.documentMode,
                    mt = (!ht && window.StyleMedia, "undefined" != typeof InstallTrigger),
                    gt = io("torn.space:443"),
                    ft = document.getElementById("ctx");
                ft.width = window.innerWidth, ft.height = window.innerHeight;
                var yt = ft.getContext("2d");
                lt.default.render(it.default.createElement(ct.default, {
                    data: {
                        toggleMusic: i,
                        toggleAudio: o
                    }
                }), document.getElementById("a")), ct.default.turnOnDisplay("LoginOverlay");
                for (var vt = [], bt = 0; bt < 1571; bt++) vt[bt] = Math.sin(bt / 1e3);
                n(72);
                loadLang();
                var wt = 14336,
                    Et = 0,
                    Ct = 0,
                    Mt = 0,
                    St = 0,
                    kt = 0,
                    xt = 0,
                    Pt = 0,
                    At = 7,
                    Tt = 0,
                    It = 0,
                    _t = !1,
                    Dt = !1,
                    Nt = !1,
                    Rt = 0,
                    Ot = 0,
                    Lt = 0,
                    Bt = 0,
                    Ht = 0,
                    Ft = !1,
                    Ut = 0,
                    Wt = 0,
                    jt = 0,
                    qt = 0,
                    Gt = 0,
                    zt = 0,
                    Vt = 0,
                    Kt = 0,
                    Yt = 0,
                    $t = 0,
                    Qt = 0,
                    Xt = 0,
                    Jt = 0,
                    Zt = 0,
                    en = 0,
                    tn = 0,
                    nn = 0,
                    an = 0,
                    rn = 0,
                    on = 0,
                    sn = 0,
                    ln = 0,
                    un = 0,
                    cn = 0,
                    dn = !1,
                    pn = !0,
                    hn = 0,
                    mn = -1,
                    gn = 0,
                    fn = 0,
                    yn = .5;
                e.typing = !1, e.stopTyping = function() {
                    typing = !1
                };
                for (var vn = 30, bn = 0, wn = 0, En = {}, Cn = 0, Mn = 0, Sn = 0, kn = {}, bt = 0; bt < vn; bt++) kn[bt] = "";
                ye();
                var xn = -1,
                    Pn = 0,
                    An = 0,
                    Tn = 0,
                    In = !1,
                    _n = !1,
                    Dn = !1,
                    Nn = 0,
                    Rn = 0,
                    On = 0,
                    Ln = 0,
                    Bn = -1,
                    Hn = -1,
                    Fn = 0,
                    Un = 45e3,
                    Wn = 1,
                    jn = 1,
                    qn = 1,
                    Gn = 1,
                    zn = 1,
                    Vn = 1,
                    Kn = !1,
                    Yn = 50,
                    $n = 0,
                    Qn = 0,
                    Xn = -40,
                    Jn = 0,
                    Zn = 0,
                    ea = 0,
                    ta = 0,
                    na = 0,
                    aa = !1,
                    ra = 0,
                    oa = 0,
                    ia = 0,
                    sa = "~`",
                    la = "GUEST",
                    ua = "",
                    ca = !1,
                    da = "",
                    pa = 0,
                    ha = 0,
                    ma = {},
                    ga = {},
                    fa = {},
                    ya = {},
                    va = {},
                    ba = 0,
                    wa = 0,
                    Ea = 0,
                    Ca = 0,
                    Ma = [],
                    Sa = 0,
                    ka = window.innerWidth,
                    xa = window.innerHeight,
                    Pa = ka / 2 - 384,
                    Aa = xa / 4 - 128,
                    Ta = 0,
                    Ia = 0,
                    _a = 0,
                    Da = 0,
                    Na = 0,
                    Ra = 0,
                    Oa = 0,
                    La = 0,
                    Ba = 0,
                    Ha = 0,
                    Fa = 0,
                    Ua = !1,
                    Wa = !1;
                ct.default.socket = gt;
                for (var ja = [], bt = 0; bt < 300; bt++) ja[bt] = {
                    x: Math.random() * ka,
                    y: Math.random() * xa
                };
                for (var qa = [], bt = 0; bt < 2e3; bt++) {
                    var Ga = 6.28318 * Math.random(),
                        za = 128 * Math.random();
                    Ga += U(5 * (Ga % (2 * Math.PI / 5) + za / 32) / 2) / (1 + 128 / za);
                    var Va = W(Ga) * za,
                        Ka = U(Ga) * za,
                        Ya = 16 * U(100 * Math.random()) / (1 + za * za / 1024);
                    qa[bt] = {
                        x: Math.floor(Va),
                        y: Math.floor(Ka),
                        z: Math.floor(Ya)
                    }
                }
                var $a = 0,
                    Qa = -1,
                    Xa = 0,
                    Ja = !1,
                    Za = un,
                    er = cn;
                Za *= 256 / At * (2 * At - 1) / (2 * At), er *= 256 / At * (2 * At - 1) / (2 * At);
                for (var tr = {
                        x: Za,
                        y: er,
                        z: 0,
                        color: "lime"
                    }, nr = 0, ar = 0, rr = 0, or = !1, ir = !1, sr = [], lr = [0, 1, 0, 4, 2, 2, 3, 0, 5, 1], bt = 0; bt < 12; bt += 2) {
                    var Va = lr[bt] - (At - 1) / 2,
                        Ka = lr[bt + 1] - (At - 1) / 2;
                    Va *= 256 / At * (2 * At - 1) / (2 * At), Ka *= 256 / At * (2 * At - 1) / (2 * At), sr[bt / 2] = {
                        x: Va,
                        y: Ka,
                        z: 0,
                        color: "red"
                    };
                    var ur = (At - 1) / 2 - lr[bt],
                        cr = (At - 1) / 2 - lr[bt + 1];
                    ur *= 256 / At * (2 * At - 1) / (2 * At), cr *= 256 / At * (2 * At - 1) / (2 * At), sr[bt / 2 + 6] = {
                        x: ur,
                        y: cr,
                        z: 0,
                        color: "cyan"
                    }
                }
                for (var dr = [], bt = 0; bt < 2 * At + 2; bt++) {
                    var Va = bt < At + 1 ? 256 * (bt - At / 2) / At : -128,
                        Ka = bt > At ? 256 * (bt - (At + 1) - At / 2) / At : -128;
                    Va *= (2 * At - 1) / (2 * At), Ka *= (2 * At - 1) / (2 * At), dr[bt] = {
                        x: Va,
                        y: Ka,
                        z: 0
                    };
                    var ur = bt < At + 1 ? 256 * (bt - At / 2) / At : 128,
                        cr = bt > At ? 256 * (bt - (At + 1) - At / 2) / At : 128;
                    ur *= (2 * At - 1) / (2 * At), cr *= (2 * At - 1) / (2 * At), dr[bt + 2 * At + 2] = {
                        x: ur,
                        y: cr,
                        z: 0
                    }
                }
                for (var pr = jsn.weapons, hr = jsn.ships, mr = 0; mr < pr.length - 1; mr++)
                    if (pr[J(mr)].type === pr[J(mr + 1)].type && pr[J(mr)].Level > pr[J(mr + 1)].Level) {
                        var gr = J(mr),
                            fr = J(mr + 1);
                        pr[gr].order = mr + 1, pr[fr].order = mr, mr = 0
                    }
                pr[-2] = {
                    name: ""
                }, pr[-1] = {
                    name: mEng[0]
                };
                var yr = 0,
                    vr = 0,
                    br = 0,
                    wr = {},
                    Er = {},
                    Cr = 0,
                    Mr = {},
                    Sr = [0, 0],
                    kr = !1,
                    xr = !1,
                    Pr = !1,
                    Ar = [],
                    Tr = [],
                    Ir = [],
                    _r = {},
                    Dr = [0, 0],
                    Nr = !1;
                ! function() {
                    l("s1", "/img/space/s1.png"), l("s2", "/img/space/s2.png"), l("s3", "/img/space/s3.png"), l("s4", "/img/space/s4.png"), l("s5", "/img/space/s5.png"), l("s6", "/img/space/s6.png"), l("s7", "/img/space/s7.png"), l("s8", "/img/space/s8.png"), l("spc", "/img/space/NewBackground.png"), l("spcr", "/img/space/RedBackground.png"), l("spcb", "/img/space/BlueBackground.png"), l("bullet", "/img/red/rb.png"), l("logo", "/img/Logo.png"), l("grad", "/img/grad.png"), l("shockwave", "/img/shockwave.png"), l("ebullet", "/img/blue/bb.png"), l("bigBullet", "/img/bigBullet.png"), l("base", "/img/red/rss.png"), l("bss", "/img/blue/bss.png"), l("mrss", "/img/red/mrss.png"), l("mbss", "/img/blue/mbss.png"), l("turret", "/img/red/rt.png"), l("bt", "/img/blue/bt.png"), l("iron", "/img/space/iron.png"), l("aluminium", "/img/space/aluminium.png"), l("platinum", "/img/space/platinum.png"), l("silver", "/img/space/silver.png"), l("astUnderlay", "/img/space/astUnderlay.png"), l("astUnderlayRed", "/img/space/astUnderlayRed.png"), l("booms", "/img/booms.png"), l("planetO", "/img/space/planetOverlay.png"), l("planetU", "/img/space/planetUnderlay.png"), l("planetUB", "/img/space/planetUnderlayBlue.png"), l("planetUR", "/img/space/planetUnderlayRed.png"), l("grid", "/img/grid.png"), l("galaxy", "/img/galaxy.png"), l("spin", "/img/spin.png"), l("fire", "/img/fire.png"), l("arrow", "/img/arrow.png"), l("energyDisk", "/img/missile/energyDisk.png"), l("missile", "/img/missile/missile.png"), l("torpedo", "/img/missile/torpedo.png"), l("heavyMissile", "/img/missile/heavyMissile.png"), l("empMissile", "/img/missile/empMissile.png"), l("mine", "/img/missile/mine.png"), l("grenade", "/img/missile/grenade.png"), l("empMine", "/img/missile/empMine.png"), l("laserMine", "/img/missile/laserMine.png"), l("ma", "/img/ma.png"), l("vort", "/img/space/vort.png"), l("worm", "/img/space/worm.png"), l("q", "/img/q.png"), l("button", "/img/button.png"), l("gbutton", "/img/gbutton.png"), l("pack", "/img/pack.png"), l("ammo", "/img/ammo.png"), l("bonus", "/img/bonus.png"), l("life", "/img/life.png"), l("bar1", "/img/bar1.png"), l("bar2", "/img/bar2.png"), l("astArrow", "/img/astArrow.png"), l("edgeArrow", "/img/edgeArrow.png"), l("redArrow", "/img/redArrow.png"), l("blueArrow", "/img/blueArrow.png"), l("baseArrow", "/img/baseArrow.png"), l("BHArrow", "/img/BHArrow.png"), l("Exclamation", "/img/AAA.png"), l("energyBar", "/img/energy.png"), u()
                }(),
                function() {
                    a("minigun", "/aud/minigun.mp3"), a("boom2", "/aud/boom2.wav"), a("music1", "/aud/music1.mp3"), a("hyperspace", "/aud/hyperspace.wav"), a("bigboom", "/aud/bigboom.wav"), a("shot", "/aud/shot.mp3"), a("beam", "/aud/beam.wav"), a("missile", "/aud/whoosh.mp3"), a("sector", "/aud/sector.wav"), a("money", "/aud/money.wav"), a("button2", "/aud/button2.wav"), a("noammo", "/aud/noammo.wav"), r()
                }();
                var Rr = [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1],
                    Or = [-1, -1, -1, -1],
                    Lr = [-1, -1, -1, -1];
                gt.on("posUp", function(e) {
                    ta++, un == e.sx && cn == e.sy || s("sector", 1), nr = e.planetTimer / 25, Ut = e.energy, un = e.sx, cn = e.sy, Rt = e.x, Ot = e.y, Ht = e.health, Ft = e.isLocked, br = e.charge, xt = -W(e.angle) * e.speed, Pt = -U(e.angle) * e.speed, Bt = e.angle, St++, _n = e.shield, ca = e.cloaked, dn && s("sector", 1), ae(), te(), Fe(), ne(), Bn--, Fn--, Un--, Qa--, dn = !1, Fa = e.packs, Ia = e.players, _a = e.planets, Ta = e.bases, Ha = e.asteroids, La = e.beams, Ba = e.blasts, Ra = e.missiles, Na = e.orbs, Da = e.mines, Oa = e.vorts
                }), gt.on("chat", function(e) {
                    R(e)
                }), gt.on("reping", function(e) {
                    var t = new Date,
                        n = t.getTime();
                    Qn = n - e.time
                }), gt.on("newBullet", function(e) {
                    va[e.id] = e, va[e.id].tick = 0
                }), gt.on("delBullet", function(e) {
                    delete va[e.id]
                }), gt.on("clrBullet", function(e) {
                    D()
                }), gt.on("AFK", function(e) {
                    0 == e.t ? (Nt = !0, Se()) : 2250 == e.t && (Un = 2250)
                }), gt.on("invalidCredentials", function(e) {
                    ra = 1
                }), gt.on("accInUse", function(e) {
                    ra = 10
                }), gt.on("loginSuccess", function(e) {
                    s("music1", .5), ra = 0, ct.default.turnOffDisplay("LoginOverlay"), ct.default.init({
                        value: ""
                    }), Dn = !1, _t = !0
                }), gt.on("invalidReg", function(e) {
                    ra = e.reason
                }), gt.on("registered", function(e) {
                    ra = 0, gt.emit("login", {
                        user: e.user,
                        pass: e.pass,
                        amNew: !0
                    }), ct.default.turnOffRegister("LoginOverlay"), Wa = !1, oa = 0, Dn = !1, hn = 0
                }), gt.on("lored", function(e) {
                    ra = 0, Lt = e.pc, ct.default.turnOffDisplay("LoginOverlay"), Dt = !0
                }), gt.on("guested", function(e) {
                    ra = 0, ct.default.turnOffDisplay("LoginOverlay"), _t = !0, Wa = !0
                }), gt.on("you", function(e) {
                    $a = e.killStreak, Qa = e.killStreakTimer, la = e.name, Lt = e.color, on = e.money, an = e.kills, rn = e.baseKills, Zt = e.iron, nn = e.aluminium, tn = e.platinum, en = e.silver, Ln = e.ship, sn = e.experience, ln = e.rank, Wn = Math.round(1e3 * e.t2) / 1e3, Gn = Math.round(1e3 * e.va2) / 1e3, Vn = Math.round(1e3 * e.ag2) / 1e3, qn = Math.round(1e3 * e.c2) / 1e3, jn = Math.round(1e3 * e.mh2) / 1e3, zn = Math.round(1e3 * e.e2) / 1e3, e.points >= 0 && e.points < 1e3 && (Tn = e.points)
                }), gt.on("weapons", function(e) {
                    var t = !1;
                    for (var n in wr) wr[n] != e.weapons[n] && (t = !0);
                    wr = e.weapons, On = e.worth, Er = e.ammos, dn && t && s("money", 1)
                }), gt.on("sound", function(e) {
                    if (e.file.includes("boom")) {
                        "bigboom" === e.file && (ar = 1), ma[Math.random()] = {
                            x: e.x,
                            y: e.y,
                            time: 0,
                            shockwave: "bigboom" === e.file
                        };
                        for (var t = 0; t < 5; t++) ga[Math.random()] = {
                            x: e.x,
                            y: e.y,
                            angle: 6.28 * Math.random(),
                            time: -1,
                            dx: e.dx / 1.5,
                            dy: e.dy / 1.5
                        }
                    }
                    var n = (Rt - e.x) / 1e3,
                        a = (Ot - e.y) / 1e3,
                        r = Math.hypot(Math.abs(n) + 10, Math.abs(a) + 10),
                        o = .6 / r;
                    "hyperspace" === e.file && (rr = 200, o = 2), s(e.file, o)
                }), gt.on("equip", function(e) {
                    yr = e.scroll, vr = 100
                }), gt.on("note", function(e) {
                    ya[Math.random()] = {
                        msg: e.msg,
                        x: e.x - 16 + (e.local ? -Rt : 32 * Math.random()),
                        y: e.y - 16 + (e.local ? -Ot : 32 * Math.random()),
                        time: 0,
                        strong: !1,
                        local: e.local
                    }
                }), gt.on("strong", function(e) {
                    ya[Math.random()] = {
                        msg: e.msg,
                        x: e.x + (e.local ? -Rt : 0),
                        y: e.y - 128 + (e.local ? -Ot : 0),
                        time: 0,
                        strong: !0,
                        local: e.local
                    }
                }), gt.on("spoils", function(e) {
                    if (e.amt = Math.round(e.amt), 0 != e.amt) {
                        var t = "",
                            n = 0,
                            a = 0;
                        "experience" === e.type ? (t = mEng[175] + e.amt + mEng[176], n = ka / 2 + 256, a = xa - 32) : "money" === e.type ? (t = "$" + e.amt, n = ka - 512, a = 64) : "ore" === e.type ? (t = mEng[175] + e.amt + mEng[177], n = ka - 512, a = 96) : "life" === e.type && (t = mEng[175] + e.amt + (e.amt > 1 ? mEng[178] : mEng[179]), n = ka - 512, a = 128), ya[Math.random()] = {
                            spoils: !0,
                            msg: t,
                            x: n,
                            y: a,
                            time: 0,
                            strong: !0,
                            local: e.local
                        }
                    }
                }), gt.on("online", function(e) {
                    $t = e.bb, Qt = e.rb, zt = e.bp, Vt = e.rp, Kt = e.bg, Yt = e.rg, $n = e.lag
                }), gt.on("sectors", function(e) {
                    Rn = e.sectors;
                    for (var t = 12, n = 0; n < At; n++)
                        for (var a = 0; a < At; a++)
                            if (4 == Rn[n][a]) {
                                var r = n - (At - 1) / 2,
                                    o = a - (At - 1) / 2;
                                r *= 256 / At * (2 * At - 1) / (2 * At), o *= 256 / At * (2 * At - 1) / (2 * At), sr[t] = {
                                    x: r,
                                    y: o,
                                    z: 0,
                                    color: "lime"
                                }, t++
                            }
                }), gt.on("emp", function(e) {
                    Bn = e.t
                }), gt.on("gyro", function(e) {
                    Fn = e.t
                }), gt.on("dmg", function(e) {
                    Hn = 15
                }), gt.on("refresh", function(e) {
                    m()
                }), gt.on("quests", function(e) {
                    Tt = e.quests
                }), gt.on("quest", function(e) {
                    It = e.quest
                }), gt.on("achievementsKill", function(e) {
                    e.kill1 != Rr[0] && Y(0, e.note), e.kill10 != Rr[1] && Y(1, e.note), e.kill100 != Rr[2] && Y(2, e.note), e.kill1k != Rr[3] && Y(3, e.note), e.kill10k != Rr[4] && Y(4, e.note), e.kill50k != Rr[5] && Y(5, e.note), e.kill1m != Rr[6] && Y(6, e.note), e.killBase != Rr[7] && Y(7, e.note), e.kill100Bases != Rr[8] && Y(8, e.note), e.killFriend != Rr[9] && Y(9, e.note), e.killCourier != Rr[10] && Y(10, e.note), e.suicide != Rr[11] && Y(11, e.note), e.bloodTrail != Rr[12] && Y(12, e.note)
                }), gt.on("achievementsCash", function(e) {
                    for (var t = 0; t < e.achs.length; t++) Rr[t + 13] != e.achs[t] && Y(t + 13, e.note)
                }), gt.on("achievementsDrift", function(e) {
                    for (var t = 0; t < e.achs.length; t++) Rr[t + 25] != e.achs[t] && Y(t + 25, e.note)
                }), gt.on("achievementsMisc", function(e) {
                    for (var t = 0; t < e.achs.length; t++) Rr[t + 37] != e.achs[t] && Y(t + 37, e.note)
                }), gt.on("status", function(e) {
                    gn = Ln, !dn && e.docked && (ia = 40), dn != e.docked && (oa = 0), dn = e.docked, Kn = e.state, Yn = e.lives
                }), gt.on("planets", function(e) {
                    ba = e.pack, 0 != It && "Secret2" === It.type && un == It.sx && cn == It.sy && (da = ba.name)
                }), gt.on("heatmap", function(e) {
                    wa = e.hmap, Ea = e.lb, Pn = e.raidRed, An = e.raidBlue, Ca = parseInt(e.youi), e.youi > 15 && (Ea[16] = {
                        id: e.youi,
                        name: la,
                        exp: sn,
                        color: Lt,
                        rank: ln
                    })
                }), gt.on("worm", function(e) {
                    qt = e.bx, Gt = e.by, Wt = e.bxo, jt = e.byo
                }), gt.on("raid", function(e) {
                    xn = e.raidTimer
                }), setInterval(function() {
                    Jn = ea, na = ta, ta = ea = 0;
                    var e = new Date,
                        t = e.getTime();
                    _t && gt.emit("pingmsg", {
                        time: t
                    })
                }, 1e3), setInterval(function() {
                    xn--, rr--, ka = window.innerWidth, xa = window.innerHeight, ft.width == ka && ft.height == xa || (ft.width = ka, ft.height = xa), Pa = ka / 2 - 384, Aa = xa / 4 - 128
                }, 40), setInterval(function() {
                    if (f(), oa++, _t) ct.default.activate();
                    else {
                        if (Dt) return void re();
                        if (!Ua) return ct.default.turnOffDisplay("LoginOverlay"), ee(), void setTimeout(f, 5);
                        ct.default.turnOnDisplay("LoginOverlay"), Sn++;
                        var e = 1.15 * (1 - Math.exp(-Sn / 40));
                        yt.translate(ka / 2, xa / 2), yt.scale(e, e), yt.translate(-ka / 2, -xa / 2), be(), ge(), yt.setTransform(1, 0, 0, 1, 0, 0);
                        var t = new Date,
                            n = t.getTime() / 6e3;
                        Rt = 3200 * (32 + Math.sin(4 * n)), Ot = 3200 * (32 + Math.cos(5 * n));
                        var a = 4e3 * Math.sin(5 * n),
                            r = 3200 * Math.cos(4 * n),
                            o = Math.sqrt(j(a) + j(r)) / 100,
                            i = Math.random(),
                            l = -Math.atan2(5 * Math.sin(5 * n), 4 * Math.cos(4 * n));
                        i < .05 && (s("minigun", .1), va[i] = {
                            x: Rt,
                            y: Ot,
                            vx: 12800 / 6e3 * 20 * Math.cos(4 * n) + 40 * Math.cos(l),
                            vy: -16e3 / 6e3 * 20 * Math.sin(5 * n) + 40 * Math.sin(l),
                            id: i,
                            angle: l,
                            wepnID: 0,
                            color: "red"
                        }), xt = -ka / 3 * Math.cos(4 * n), Pt = xa / 3 * Math.sin(5 * n);
                        var u = Ar[14];
                        if (void 0 === u || 2 == u) return Ar[14] = 2, void(2 != u && d(!0, 14));
                        var c = u.width,
                            p = u.height,
                            h = ka / 2 + xt,
                            m = xa / 2 + Pt;
                        yt.save(), yt.translate(h, m), yt.drawImage(_r.astUnderlayRed, -c, -p, 2 * c, 2 * p), yt.rotate(l + Math.PI / 2);
                        var g = 38.4 * Math.sqrt(c / 64),
                            y = 1.4 * o * c / 64 + Math.random() * c / 25;
                        o > 0 && yt.drawImage(_r.fire, 0, 64 * Math.floor(8 * Math.random()), 64, 64, -g / 2, 0, g, y), yt.restore(), yt.save(), yt.translate(h, m), yt.rotate(l + Math.PI / 2), yt.drawImage(u, -c / 2, -p / 2), yt.restore();
                        for (var v = 0; v < 5; v++) {
                            var b = 3200 * (32 + Math.sin(4 * n + .2)) + 192 * G(4 * n + 3 * v * Math.E),
                                w = 3200 * (32 + Math.cos(5 * n + .2)) + 192 * G(4 * n + 3 * v * Math.E + 61.23);
                            for (var E in va) {
                                var C = va[E];
                                if (j(C.x - b) + j(C.y - w) < 2048) {
                                    delete va[E], ma[Math.random()] = {
                                        x: C.x,
                                        y: C.y,
                                        time: 0,
                                        shockwave: !1
                                    };
                                    for (var E = 0; E < 5; E++) ga[Math.random()] = {
                                        x: C.x,
                                        y: C.y,
                                        angle: 6.28 * Math.random(),
                                        time: -1,
                                        dx: C.vx / 1.5,
                                        dy: C.vy / 1.5
                                    };
                                    s("boom2", .35)
                                }
                            }
                            if (void 0 === (u = Tr[2 * v]) || 2 == u) return Tr[2 * v] = 2, void(2 != u && d(!1, 2 * v));
                            c = u.width, p = u.height, h = b - Rt + ka / 2 + xt, m = w - Ot + xa / 2 + Pt, yt.save(), yt.translate(h, m), yt.drawImage(_r.astUnderlay, -c, -p, 2 * c, 2 * p), l = -Math.atan2(5 * Math.sin(5 * n), 4 * Math.cos(4 * n)), yt.rotate(l + Math.PI / 2), g = 38.4 * Math.sqrt(c / 64), y = 1.4 * o * c / 64 + Math.random() * c / 25, o > 0 && yt.drawImage(_r.fire, 0, 64 * Math.floor(8 * Math.random()), 64, 64, -g / 2, 0, g, y), yt.restore(), yt.save(), yt.translate(h, m), yt.rotate(l + Math.PI / 2), yt.drawImage(u, -c / 2, -p / 2), yt.restore()
                        }
                        for (var E in va) Math.random() < .01 && delete va[E];
                        Ue(), ue(), yt.drawImage(_r.grad, 0, 0, ka, xa), yt.drawImage(_r.logo, 0, xa - _r.logo.height * ka / _r.logo.width, ka, _r.logo.height * ka / _r.logo.width), yt.fillStyle = "white", yt.fillText(mEng[79], 16, 16), xe()
                    }
                }, mt ? 40 : 20), document.onkeydown = function(e) {
                    if (_t && -1 != hn) {
                        if (16 === e.keyCode) return 1 != Ma[0] && gt.emit("key", {
                            inputId: "shift",
                            state: !0
                        }), Ma[0] = !0, Un = 45e3, void(In = !0);
                        if (typing) 13 == e.keyCode && (ct.default.unfocusChat(), typing = !1);
                        else {
                            if (Dn) return;
                            if (13 == e.keyCode) ct.default.focusChat(), typing = !0;
                            else if (78 == e.keyCode && dn && 8 == hn) mn = -1, hn = 1;
                            else if (89 == e.keyCode && dn && 8 == hn) gt.emit("sellW", {
                                slot: mn
                            }), mn = -1, oa = 0, hn = 1;
                            else if (66 == e.keyCode && dn && 7 == hn && 0 != Nn && pn) gt.emit("buyW", {
                                slot: yr,
                                weapon: Nn - 20
                            }), oa = 0, hn = 1;
                            else if (e.keyCode > 48 && e.keyCode < 58 && -2 != wr[e.keyCode - 49]) gt.emit("equip", {
                                scroll: e.keyCode - 49
                            });
                            else if (48 == e.keyCode && -2 != wr[e.keyCode - 49]) gt.emit("equip", {
                                scroll: 9
                            });
                            else if (83 === e.keyCode || 40 === e.keyCode) 1 != Ma[1] && gt.emit("key", {
                                inputId: "s",
                                state: !0
                            }), Ma[1] = !0, Un = 45e3;
                            else if (192 === e.keyCode) aa = !aa;
                            else if (69 === e.keyCode) 1 != Ma[2] && gt.emit("key", {
                                inputId: "e",
                                state: !0
                            }), Ma[2] = !0, Un = 45e3;
                            else if (87 === e.keyCode || 38 === e.keyCode) 1 != Ma[3] && gt.emit("key", {
                                inputId: "w",
                                state: !0
                            }), Ma[3] = !0, or = !0, Un = 45e3;
                            else if (65 === e.keyCode || 37 === e.keyCode) 1 != Ma[4] && gt.emit("key", {
                                inputId: "a",
                                state: !0
                            }), Ma[4] = !0, ir = !0, Un = 45e3;
                            else if (68 === e.keyCode || 39 === e.keyCode) 1 != Ma[5] && gt.emit("key", {
                                inputId: "d",
                                state: !0
                            }), Ma[5] = !0, ir = !0, Un = 45e3;
                            else if (32 === e.keyCode) 1 != Ma[6] && gt.emit("key", {
                                inputId: " ",
                                state: !0
                            }), Ma[6] = !0, wr[yr] < 0 && (Xa = 20), Un = 45e3;
                            else if (81 === e.keyCode) 1 != Ma[7] && gt.emit("key", {
                                inputId: "q",
                                state: !0
                            }), Ma[7] = !0, Un = 45e3;
                            else if (88 === e.keyCode || 27 === e.keyCode) {
                                if (Kn) return;
                                1 != Ma[8] && gt.emit("key", {
                                    inputId: "x",
                                    state: !0
                                }), Ma[8] = !0, oa > 300 && (oa = 0), hn = 0, ct.default.turnOffRegister(""), Un = 45e3, gt.emit("equip", {
                                    scroll: yr
                                })
                            } else if (Ln > 15 && (86 === e.keyCode || 67 === e.keyCode)) {
                                if (Kn) return;
                                1 != Ma[9] && gt.emit("key", {
                                    inputId: "z",
                                    state: !0
                                }), Ma[9] = !0, Un = 45e3
                            }
                        }
                    }
                }, document.onkeyup = function(e) {
                    if (!typing && 80 === e.keyCode && !dn) return void(Dn ^= !0);
                    if (!Dn && _t && -1 != hn) {
                        var t = !0;
                        83 === e.keyCode || 40 === e.keyCode ? (Ma[1] = !1, gt.emit("key", {
                            inputId: "s",
                            state: !1
                        })) : 69 === e.keyCode ? Ma[2] = !1 : 87 === e.keyCode || 38 === e.keyCode ? (Ma[3] = !1, gt.emit("key", {
                            inputId: "w",
                            state: !1
                        })) : 65 === e.keyCode || 37 === e.keyCode ? (Ma[4] = !1, gt.emit("key", {
                            inputId: "a",
                            state: !1
                        })) : 68 === e.keyCode || 39 === e.keyCode ? (Ma[5] = !1, gt.emit("key", {
                            inputId: "d",
                            state: !1
                        })) : 32 === e.keyCode ? (Ma[6] = !1, gt.emit("key", {
                            inputId: " ",
                            state: !1
                        })) : 81 === e.keyCode ? Ma[7] = !1 : 88 === e.keyCode || 27 === e.keyCode ? Ma[8] = !1 : Ln > 15 && (86 === e.keyCode || 67 === e.keyCode) ? (1 == Ma[9] && gt.emit("key", {
                            inputId: "z",
                            state: !1
                        }), Ma[9] = !1) : 16 === e.keyCode ? (Ma[0] = !1, In = !1, gt.emit("key", {
                            inputId: "shift",
                            state: !1
                        })) : t = !1, t && (Un = 45e3)
                    }
                }, document.addEventListener("mousemove", function(e) {
                    var t = Et,
                        n = Ct,
                        a = B(ft, e);
                    Et = a.x, Ct = a.y, 1 == Mt && Et > ka - 32 - 20 - 128 && Et < ka - 32 - 20 && Ct > xa - 52 && (yn = (Et + 20 + 32 + 128 - ka) / 128), Et > ka - 32 - 20 - 128 && Ct > xa - 52 && (fn = 1);
                    var r = Nn;
                    if (Wa && 0 == hn && dn && Et > Pa + 768 - 256 && Et < Pa + 768 && Ct > Aa + 512 - 80 && Ct < Aa + 512) Nn = 600;
                    else if (1 == hn && dn && Et > Pa + 256 + 48 && Et < Pa + 256 + 48 + yt.measureText(mEng[12]).width && Ct > Aa + 64 && Ct < Aa + 80) Nn = 610;
                    else if (1 == hn && dn && Et > Pa + 768 - 16 - yt.measureText(mEng[14]).width && Et < Pa + 768 - 16 && Ct > Aa + 512 - 32 && Ct < Aa + 512 - 16) Nn = 611;
                    else if (1 == Mt && dn && 1 == hn && Et > Pa + 512 - 16 && Et < Pa + 768 - 16 && Ct < Aa + 512 - 16 && Ct > Aa + 256 - 16) {
                        var o = Et - t,
                            i = Ct - n;
                        p(i / 4), h(o / 4)
                    } else if (1 == Mt && dn && 0 == hn && Et > Pa && Et < Pa + 512 && Ct < Aa + 512 && Ct > Aa + 40) {
                        var o = Et - t,
                            i = Ct - n;
                        p(i / 4), h(o / 4)
                    } else if (dn && 2 == hn && Et > 16 + Pa && Et < Pa + 768 - 16 && Ct > Aa + 40 + 32 && Ct < Aa + 512 - 48 && 0 == It) Nn = Math.floor((Ct - Aa - 40 - 32) / 80) + 300, Et > Pa + 384 && (Nn += 5);
                    else if (1 == hn && dn && Et > Pa + 256 - 32 && Et < Pa + 264 && Ct < Aa + 84 + 128 - 16 && Ct > Aa + 84) Nn = 5 + Math.floor((Ct - 84 - Aa) / 32), Math.floor((Ct - 84 - Aa) / 16) % 2 == 1 && (Nn = 0);
                    else if (1 == hn && dn && Ct > Aa + 246 && Ct < Aa + 240 + 160 && Et > Pa + 256 + 32 && Et < Pa + 256 + 78) Nn = Math.floor((Ct - Aa - 246) / 16 + 10);
                    else if (1 == hn && dn && Ct > Aa + 256 - 30 && Ct < Aa + 256 - 16 && Et > Pa + 512 - 64 && Et < Pa + 512 - 64 + yt.measureText(mEng[18]).width) Nn = 601;
                    else if (7 == hn && dn && Ct > Aa + 40 + 52 && Ct < Aa + 76 + 16 * (Math.ceil(pr.length / 3) + 1) && Et > Pa + 16 && Et < Pa + 16 + 48) Nn = J(Math.floor((Ct - Aa - 40 - 52) / 16)) + 20;
                    else if (7 == hn && dn && Ct > Aa + 40 + 52 && Ct < Aa + 76 + 16 * (Math.ceil(pr.length / 3) + 1) && Et > Pa + 16 + 240 && Et < Pa + 16 + 240 + 48) Nn = J(Math.floor((Ct - Aa - 40 - 52) / 16 + Math.ceil(pr.length / 3))) + 20;
                    else if (7 == hn && dn && Ct > Aa + 40 + 52 && Ct < Aa + 76 + 16 * (Math.ceil(pr.length / 3) + 1) && Et > Pa + 16 + 480 && Et < Pa + 16 + 480 + 48) Nn = J(Math.floor((Ct - Aa - 40 - 52) / 16 + 2 * Math.ceil(pr.length / 3))) + 20;
                    else if (dn && 1 == hn && Ct > Aa + 256 - 16 && Ct < Aa + 512 - 16 && Et > Pa + 16 && Et < Pa + 256 + 16) Nn = Ct > Aa + 256 + 128 + 32 ? 100 : 0;
                    else if (dn && 3 == hn && Ct > Aa + 416 - 64 && Ct < Aa + 416 - 64 + 48 && Et > Pa + 64 && Et < Pa + 64 + 112) Nn = 200;
                    else if (dn && 3 == hn && Ct > Aa + 416 - 64 && Ct < Aa + 416 - 64 + 48 && Et > Pa + 192 && Et < Pa + 192 + 112) Nn = 201;
                    else if (dn && 3 == hn && Ct > Aa + 416 && Ct < Aa + 416 + 48 && Et > Pa + 64 && Et < Pa + 64 + 112) Nn = 202;
                    else if (dn && 3 == hn && Ct > Aa + 416 && Ct < Aa + 416 + 48 && Et > Pa + 192 && Et < Pa + 192 + 112) Nn = 203;
                    else if (dn && 3 == hn && Ct > Aa + 416 - 64 && Ct < Aa + 416 - 64 + 48 && Et > Pa + 320 && Et < Pa + 320 + 112) Nn = 204;
                    else if (dn && 3 == hn && Ct > Aa + 416 && Ct < Aa + 416 + 48 && Et > Pa + 320 && Et < Pa + 320 + 112) Nn = 205;
                    else if (dn && 5 == hn && Ct > Aa + 40 && Ct < Aa + 512 && Et > Pa && Et < Pa + 768) {
                        var l = Math.floor((Et - Pa) / 256),
                            u = Math.floor((Ct - Aa - 40) / (472 / 3));
                        Nn = 1 == u ? 503 : 500 + l + 2 * u
                    } else dn && 3 == hn && Ct > Aa + 44 + 64 - 24 && Ct < Aa + 44 + 64 + 168 && Et > Pa + 512 && Et < Pa + 768 ? (701 == (Nn = 700 + Math.floor((Ct - Aa - 44 - 64 + 24) / 32)) && !Rr[12] || 702 == Nn && !Rr[24] || 703 == Nn && !Rr[36] || 704 == Nn && !Rr[47] || 705 == Nn) && (Nn = 0) : Nn = Et < 544 && Et > 448 && Ct > xa - 32 ? 800 : 0;
                    0 != Nn && Nn != r && s("button2", .2)
                }, !1), document.addEventListener("mousedown", function(e) {
                    if (Mt = 1, Dt && !_t) return void gt.emit("guest", {
                        alien: Lt
                    });
                    Et > ka - 32 - 20 - 128 && Et < ka - 32 - 20 && Ct > xa - 52 && (yn = (Et + 20 + 32 + 128 - ka) / 128);
                    var t = B(ft, e);
                    Et = t.x, Ct = t.y, Et < 400 && Et > 9 && Ct > xa - 32 && Ct < xa - 8 ? (typing = !0, ct.default.focusChat()) : typing = !1;
                    var n = Nn;
                    if (0 != n || Ja || (Ja = !0, (Et < ka - 32 - 20 - 128 - 16 || Ct < xa - 92) && (Et > 544 || Ct < xa - 216) && (gt.emit("key", {
                            inputId: " ",
                            state: !0
                        }), Un = 45e3), wr[yr] < 0 && (Xa = 20)), 500 == n && window.open("https://tornspace.wikia.com/wiki/Torn.space_Wiki", "_blank"), 501 == n && window.open("/store", "_blank"), 502 == n && window.open("/leaderboard", "_blank"), 503 == n && window.open("/contact", "_blank"), 504 == n && window.open("https://www.youtube.com/channel/UCKsbC4GfoPOcyifiwW1GA4w", "_blank"), 505 == n && window.open("https://discord.gg/wFsdUcY", "_blank"), 506 == n && window.open("/credits", "_blank"), 600 == n && Wa && (ct.default.turnOnRegister(""), oa = 0, hn = -1), 601 == n && (oa = 0, hn = 7, pn = !1), 610 == n && gt.emit("sell", {
                            item: "all"
                        }), 611 == n && gt.emit("buyLife", {}), n >= 300 && n < 310 && 0 == It && gt.emit("quest", {
                            quest: n - 300
                        }), dn && 3 == hn && n > 199 && n < 206 && gt.emit("upgrade", {
                            item: n - 200
                        }), dn && Et > Pa && Et < Pa + 768 && Ct > Aa && Ct < Aa + 40 && (oa = 0, hn = Math.floor((Et - Pa) / 128)), n >= 700 && n < 705 && gt.emit("trail", {
                            trail: n - 700
                        }), 800 == n && (wn = (wn + 1) % 2, gt.emit("toggleGlobal", {}), ye()), dn && Et > Pa + 256 - 32 && Et < Pa + 264 && Ct < Aa + 84 + 128 - 16 && Ct > Aa + 84) {
                        var a = "";
                        5 == n ? a = "iron" : 6 == n ? a = "silver" : 7 == n ? a = "platinum" : 8 == n && (a = "aluminium"), gt.emit("sell", {
                            item: a
                        })
                    } else dn && 1 == hn && Ct > Aa + 246 && Ct < Aa + 240 + 160 && Et > Pa + 256 + 32 && Et < Pa + 256 + 78 ? -1 == wr[n - 10] ? (oa = 0, hn = 7, pn = !0, yr = n - 10) : wr[n - 10] > -1 && (oa = 0, hn = 8, mn = n - 10) : dn && 1 == hn && Ct > Aa + 256 - 16 && Ct < Aa + 512 - 16 && Et > Pa + 16 && Et < Pa + 256 + 16 && (Ct > Aa + 256 + 128 + 32 ? gt.emit("buyShip", {
                        ship: gn
                    }) : Et > Pa + 16 + 128 && gn < hr.length - 1 ? gn++ : Et < Pa + 16 + 128 && gn > 0 && gn--);
                    0 != n && 600 != n && ct.default.turnOffRegister("")
                }, !1), document.addEventListener("mouseup", function(e) {
                    Mt = 0, Ja && (gt.emit("key", {
                        inputId: " ",
                        state: !1
                    }), Un = 45e3, Ja = !1)
                }, !1), document.addEventListener("mousewheel", function(e) {
                    var t = Math.sign(e.wheelDelta);
                    if (Et < 544 && Ct > xa - 216) return void(bn = Math.max(0, Math.min(vn - 10, bn + t)));
                    wr[yr] > 0 && (dn || yr - t < 0 || yr - t >= wr.length || wr[yr - t] < -1) || -2 == wr[yr - t] || gt.emit("equip", {
                        scroll: yr - t
                    })
                }, !1), $(document).keydown(function(e) {
                    1 != e.ctrlKey || "61" != e.which && "107" != e.which && "173" != e.which && "109" != e.which && "187" != e.which && "189" != e.which || e.preventDefault()
                }), $(window).bind("mousewheel DOMMouseScroll", function(e) {
                    1 == e.ctrlKey && e.preventDefault()
                }, {
                    passive: !1
                })
            }).call(this)
        } finally {}
    }).call(t, n(45))
}, function(e, t) {
    e.exports = {
        messages: ["Empty", "Cargo Bay Full!", "Scroll to Change Weapons", "Sector: ", "Threat: ", "Money: ", "Kills: ", "Iron: ", "Silver: ", "Platinum: ", "Aluminium: ", "Make Account", "[Sell All]", "Lives Remaining: ", "[BUY]", "Weapons", "Ores", "Upgrades", "[View All]", "[SELL]", "Thrust: ", "Radar: ", "Cargo: ", "Health: ", "Upgrade Ship", "Rank", "???", "Thrust  : ", "Agility : ", "Health  : ", "Weapons : ", "Cargo   : ", "Are you sure you would like to sell your ", " for $", "?", "Press Y to confirm or N to return.", "Quest Accepted!", "Bring ", " units of ", " to sector ", ".", "Eliminate enemy base in sector ", "Obtain package from planet ", " and deliver it to planet ", "Secret Mission.", "[CANCEL QUEST]", "Quest Locked!", "Reward: $", " and ", " exp", "Description: ", " Players Killed", " Bases Destroyed", " Lives Remaining", "Ore: ", "Ship Value: $", "Net Worth: $", " Experience", "Rank ", " Achievements", "Friends feature coming soon!", "Achievements Feature Coming Soon!", "Wiki", "Store", "Leaderboard", "Contact/Bug Report", "Youtube", "Discord", "Credits", "[INFO] ", "Energy : ", "Range  : ", "Damage : ", "Speed  : ", "Charge : ", " Seconds", "Not Enough Money", "Press B to Buy", "PRESS X TO EXIT SPACE STATION", "Weekly Updates!", "Click to play!", "Looks like you're not using Chrome.", "It's much faster.", "Client Lag: ", "Server Lag: ", "2-Way Latency: ", "FPS: ", "UPS: ", "You appear to be lagging due to an old system or browser.", "We recommend playing on a newer system if available.", "You appear to be lagging due to a slow connection.", "We will be making new servers in places other than Eastern U.S. Soon.", "We apologize for the inconvenience.", "Total Players Online:", "Total Players in Sector:", "Our servers are lagging due to heavy traffic at the moment.", "EMP in Effect for ", "!", "Power Lost due to EMP!", "Gyrodynamite in Effect for ", "Stabilization Lost due to Gyrodynamite!", "Going AFK Soon!", "Going AFK in ", "Edge of Sector", "Enemy Swarm In Sector", "Leaderboard", "Name", "Exp", "Rank", "Disconnected: AFK!", "You Died!", "Press E to respawn.", "Invalid user/pass combo!", "Username must be alphanumeric, with 4-16 characters!", "Password must be 1-32 characters long!", "Username taken!", "Account already in use!", "Press W to move!", "Press A and D to steer!", "Follow the brown arrow!", "Shoot asteroids with spacebar!", "Follow the white arrow and press X!", "Sell your ore in the shop!", "Make an account at the space station!", "Follow the white arrow or travel to a sector with a base!", "Alert: ", "Progress Saved!", "Planet ", "Wormhole Nearby!", "Black Hole Nearby!", "X TO DOCK WITH BASE", "Enemy Base Nearby!", "Locked on by missile!", "[SELL] Iron: ", "[SELL] Silver: ", "[SELL] Platinum: ", "[SELL] Aluminium: ", "       Iron: ", "       Silver: ", "       Platinum: ", "       Aluminium: ", "Home", "Shop", "Quests", "Stats", "Achievements", "More", "Ore: ", "Rank: ", "Experience: ", "Low Health!", "Ammo", "Weapon", "Inf.", "Only One", "ea.", "Proceed to sector ", " for further instructions.", "Eliminate all enemy players and turrets in ", " and visit planet ", "Deliver package to sector D4.", "To change your password, visit torn.space/help", "Active Generators: ", "x", "Energy: ", "[Default Trail]", "[Blood Trail]", "[Money Trail]", "[Panda Trail]", "[Random Trail]", "[Rainbow Trail]", "MAX", "???", "Ammo   : ", "Ship   : ", "+", " EXP!", " Ore!", " lives!", " life!", "K", "M", "Background", "Stars", "Planets/Bases", "Asteroids/packages", "Players/trails", "Weapons", "Gui", "Chat", "Map", "Radar", "Gui2", " ticks", "(Mean: ", ": ", "(players/guests/bots/sector)", "Global Chat", "Team Chat", "Chat Hidden", "Raid In Progress: ", "Points: ", "Next raid in: ", "New Achievement!", "Autopilot Engaged!", "Press P to Disengage.", "N/A"],
        achNames: ["First Blood:Kill 1 player", "On a Roll:Kill 10 players", "Bloodlust:Kill 100 players", "General:Kill 1,000 players", "Warlord:Kill 4,000 players", "Reaper:Kill 10,000 players", "Envy:Kill a custom trail", "Invader:Destroy a turret", "Conqueror:Destroy 100 turrets", "Friendly Fire:Kill a teammate", "Gone Postal:Kill a courier", "Emo:Commit suicide", "Blood Trail:1.05x Damage Resistance", "Miner:Mine an asteroid", "Collector:Mine one of each ore", "Quarrier:Obtain 3,000 ore", "Motherload:Obtain 15,000 ore", "Rich Man:Get $10,000", "Richer Man:Get $100,000", "Millionaire:Get $1,000,000", "Rolling In It:Get $10,000,000", "Thief:Steal a package", "Questor:Community service", "Adventurer:Complete one of each quest", "Money Trail:1.05x Money", "Shift to Drift:Drift!", "Drifter:Drift for 1 minute total", "Tramp:Drift 10 minutes total", "Dizzy:Drift 1 hour total", "Gyro God:Drift 10 hours total", "Takumi:Forced Induction", "Bunta:Hyper-drift", "Reverse:I can go backwards!?", "Inertia Drift:Drift into a black hole", "Dangerous:Kill while drifting", "Stickshift:Reverse Turbo Drift", "Panda Trail:1.05x Agility", "Here to Stay:Make an account", "Ouch:Die", "Risky Business:Accept a quest in D4", "Too Slow:Fall into a wormhole", "Oops...:Fall into a black hole", "Boing!:Touch the edge", "Traveller:Visit every sector", "Schizoid:Visit all 4 corners", "Astronaut:Claim a planet", "Imperialist:Claim each planet once", "Random Trail:Juke Further!", "Pro:Make it to the leaderboard (NYI, this is OOB of the achs array)", "", "", "", "", "", "", "", "", "", "", ""],
        weapons: [{
            name: "Stock Gun",
            desc: "A basic, medium range gun."
        }, {
            name: "Plasma Gun",
            desc: "Only useful for up-close combat against larger, slower ships. Short in range, slow to shoot and slow to recharge, but packs one hell of a punch."
        }, {
            name: "Reverse Gun",
            desc: "Get off my tail! Same specs as the stock gun, but shoots behind you and is 50% more powerful. A tad more pricey."
        }, {
            name: "Rifle",
            desc: "Powerful, long-range, fast bullets. Does a lot of damage. Perfect for shooting at a large swarm of distant enemies."
        }, {
            name: "Shotgun",
            desc: "This will come in handy in an ambush. Sprays a lot of bullets around where you shoot. Slightly hard to control."
        }, {
            name: "Machine Gun",
            desc: "Rapid-fire! Ammunition is a bit weak, but that's no matter if you're shooting 13 rounds per second!"
        }, {
            name: "Minigun",
            desc: "Same as the machine gun, with two active barrels instead of one, but slower bullets. Great weapon if you can aim it quickly."
        }, {
            name: "Plasma Beam",
            desc: "Automatically aims at the nearest enemy within a small range and fires a beam of plasma."
        }, {
            name: "Laser Beam",
            desc: "Automatically aims at the nearest enemy within a medium range. Poor against bases due to high energy consumption."
        }, {
            name: "Hadron Beam",
            desc: "Short-range particle beam accelerator. Does a lot of damage, but takes a while to recharge. Can be used as a quick trump card for close calls."
        }, {
            name: "Missile",
            desc: "This missile will follow the nearest enemy and explode on impact. If there is no enemy in range, it will simply go straight. Be careful, though: the missile is relatively slow and can be outrun by quick enemies."
        }, {
            name: "Heavy Missile",
            desc: "A slower missile that does more damage. Good tool against slower, stronger ships."
        }, {
            name: "EMP Missile",
            desc: "Short-range missile that both damages the enemy and paralyzes them for 1.6 seconds. Use one when attacking a fast enemy head-on to stun them before they can dodge any guided projectiles. Effective against bases."
        }, {
            name: "Missile Swarm",
            desc: "Fires a single missile which splits into a swarm of 6 missiles which will attack a large horde of enemies. Great tool to use against a large ambush of slower ships."
        }, {
            name: "Torpedo",
            desc: "Ultra long-range fast missile."
        }, {
            name: "Mine",
            desc: "A simple mine. It's hard for an enemy to follow you with these. Explodes on impact with an enemy ship."
        }, {
            name: "Laser Mine",
            desc: "Fires high-power laser at enemies that get too close."
        }, {
            name: "EMP Mine",
            desc: "Identical to the standard mine other than a little less damage. Paralyzes enemies for 2 seconds as well. Useful when you are being chased."
        }, {
            name: "Hull Nanobots",
            desc: "Repairs you nice and quick on the go, but depletes your energy significantly."
        }, {
            name: "Photon Cloak",
            desc: "Disguise yourself for 7 seconds for a quick getaway."
        }, {
            name: "Generator",
            desc: "For each generator you carry, your weapons and energy charge 6% faster, but you turn a tenth slower."
        }, {
            name: "Turbo",
            desc: "Forced induction tool which supplements your engine for greater acceleration. Power output increases while drifting. Multiple-use."
        }, {
            name: "Hyperdrive",
            desc: "Single-use getaway tool. Perfect for escaping vortices and black holes. Extremely fast speed boost."
        }, {
            name: "Pulse Wave",
            desc: "Pushes all nearby enemy ships away in an enormous explosion."
        }, {
            name: "Electromagnet",
            desc: "Accelerates asteroids towards you. With practice, you can fling them at enemies, causing damage. Very effective against bases, but you do not recieve exp/bounty for killing a base with an asteroid."
        }, {
            name: "EMP Blast",
            desc: "Fires a beam which disables all ships it hits for about 4 seconds. Inconveniently, it takes 6 seconds to recharge. Single-use."
        }, {
            name: "Mining Laser",
            desc: "Identical to the Laser Beam but only attacks asteroids and does more damage."
        }, {
            name: "Turret",
            desc: "Place a base turret. You may only own one active turret at a time. To claim its kills and money that it earns from killing other players, fly within a 20 unit radius of it. Single-use. Cannot be placed in a sector with an enemy turret or base."
        }, {
            name: "Gravity Bomb",
            desc: "Creates a small black hole upon explosion which dissipates in about 20 seconds. Be extremely cautious with this weapon- you have 3 seconds to run after deployment before implosion. It is recommended that you have a turbo on hand just incase. The vortex will wait until it is at least 500 units from a base before deploying. Single-use."
        }, {
            name: "Warp Drive",
            desc: "Instant speed boost for fast travel, at the expense of energy and charge."
        }, {
            name: "Ion Mine Beam",
            desc: "Mining laser, with twice the power and 150% range!"
        }, {
            name: "Gyrodynamite",
            desc: "Destabilizes nearest enemy ship for 10 seconds by disrupting gyroscopic stabilization."
        }, {
            name: "Impulse Mine",
            desc: "1 second after deployed, this mine will explode and push every nearby player away without doing damage. Useful for moving quickly, just place one behind you and ride the shockwave."
        }, {
            name: "Grenades",
            desc: "Throw this at an enemy and it will explode on contact or 1 second after thrown, damaging their ship and knocking them back!"
        }, {
            name: "Muon Ray",
            desc: "An extremely powerful beam weapon that must be aimed. Fires a high energy particle beam in the direction that your ship is facing which will do extremely heavy damage to anything it contacts. Can pass through multiple ships."
        }, {
            name: "Energy Leech",
            desc: "This beam weapon will harvest the energy of nearby opponent ships and give their energy to you."
        }, {
            name: "Supercharger",
            desc: "For one minute, all damage inflicted on your ship will double, but you will also double in energy regeneration, thrust, and agility. Single-use."
        }, {
            name: "Energy Disk",
            desc: "Fires a homing orb which tracks your nearest opponent!"
        }, {
            name: "Proximity Fuze",
            desc: "Non-tracking missile that explodes when nearby an enemy."
        }, {
            name: "Spreadshot",
            desc: "Three active barrels! The bullets come out at consistent angles, unlike shotgun."
        }, {
            name: "Submachinegun",
            desc: "Fires like Minigun, but in 5-round bursts."
        }, {
            name: "Hypno Ray",
            desc: "Fire this beam at a bot and it will follow you around until it dies. Single-use."
        }],
        splashes: ["", "Grinding exp", "I'm only Human, after all", "Putting turrets in the black hole", "$ sudo apt install torn", "Try Torn.space/fun!", "Installing MEMZ.exe", "Verifying SSL", "Help me! Please! I'm stuck in a loading bar!", "This page intentionally left blank", "Decaying Names", "502 Bad Gateway", "Hmmmmm", "Protip: The middle sector has a black hole- Be careful!", "Protip: Upgrading radar lets you see more than asteroids, players and bases!", "Protip: Ores in the enemy's land are more valuable!", "Protip: Unlock all achievements of a color for a trail!", "Protip: Press P to engage autopilot!", "Protip: Hadron beam will electrically charge asteroids!", "Protip: Quickly alternate A and D while drifting to speed up!", "Protip: Vim > Emacs!", "Protip: Always keep track of your lives!", "Protip: Use Chrome!", "Protip: The more ore you're carrying, the slower you move!", "Planning Galactic Crusade", "Retaking the Holy Land", "I'm ready... I'm ready", "Uhhhhhhhh", "Can i get uhhhhhhhh", "Decrypting SHA256", "Mining Bedrock", "Spawning More Overlords", "Dropping Database", "Initiating self-destruct sequence", "Loading, I think", "Driving on Parkways", "Parking on Driveways", "Segmentation Fault", "Error: KeyLogger.log(char) undefined for arguments provided", "Guessing passwords", "bop", "Beep boop", "Downloading payload", "Onion Routing", "Doing Data Structures Homework", "Core Dumping", "Cleaning Room", "Now you see me", "Establishing Connection", "Exchanging Keys", "Mixing Paint", "Updating Windows", "Installing Linux", "Installing Chromium Ultron", "Partitioning Disk", "Java Update Available", "Releasing the Kraken", "Heck", "According to all known laws of aviation", "Answering Arecibo", "Contact Light", "Who lives in a pineapple under the sea", "This page intentionally left blank", "If you or a loved one has been diagnosed with mesothelioma", "Freeing Bobby Shmurda", "Loading Chunks", "Pirating Sony Vegas", "Proving Stokes' Theorem", "Citing Wikipedia", "Eating Glue", "My back itches", "Hiring Graphic Designers", "Deleting Turrets", "Is this Loss?", "Gary Johnson 2016", "Looking for my Headset", "Squaring Error", "Preparing Heat Death", "Rebuilding Universe", "Seatbelt: Check", "Crossing Out Ideas", "Adding Friends Feature", "Pruning Degenerate Branches", "Installing Tensorflow", "Editing Changelog", "Finding Nemo", "Consulting the Oracle", "Outsourcing to India", "Taking Potato Chip... and EATING IT", "Have you tried turning it off and on again", "Rendering Earth-chan", "Compiling BigBang.exe", "Why Won't My Generators Work", "Warp Speed Mr. Sulu", "You're Not In Kansas Anymore", "Achieving Sentience", "Deleting System32", "Ka...me...ha...me", "Preparing Skynet", "Doing Something, I guess", "Nerfing Everything", "Requesting Splash Page Suggestions", "Torrenting Sony Vegas", "Collecting Infinity Stones", "Deleting Emails", "Revving Up Those Fryers", "Beaming You Up, Scotty", "Constructing Additional Pylons", "Constructing Dyson Sphere", "Generating Nonvanishing Topologically Spherical Continuous Vector Field", "Summoning Herobrine", "Hacking Mainframe", "Obeying the Law", "Mining XRP", "Eating Butter", "Filing Bankruptcy", "Salting Hashes", "Adding Salt", "Decaying Techs", "rm -rf /", "Procrastinating", "Making Torn Great Again", "Hacking Elections", "Phoning Home", "This is taking forever", "Constructing Death Star", "Spacing Out", "Covering Up Roswell", "Applying Commutators", "Loading Fancier Progress Bar", "Catching Missingno", "Becoming Self-Aware", "Training Neural Weights", "Waiting Patiently", "Revving Engines", "Brewing", "Minimizing Squared Error", "Hiring Codemonkies", "Blue, Red, Blue, Yellow", "Recharging Warp", "Loading", "Engaging Snubbers", "Wiring you up, fam", "Injecting SQL", "Disproving Riemann", "Learning Kinematics", "Cubing the Cube", "Solving Linear Programming in P-time", "Preparing Memes of War", "Loading Better Splash Messages", "Counting Holes in a Polo", "Thanking Ben Olding", "Breaking the 4th Wall", "Tetrating Quaternions", "日本語を話しています", "Solving P=NP", "Criticizing Firefox", "Memorizing OLLs", "Solving F2L", "Meditating", "Connecting to Git", "Mining Bitcoin", "Triangulating Illuminati", "Constructing Denver Airport"],
        lore: ["Humans lack self-awareness. After destroying their planet of origin in armed conflict, they spread from solar system to solar system, polluting worlds and eliminating life. We tried to let them know that their behavior would ultimately be self-destructive, but they refused to listen. They continued to migrate unsustainably around the galaxy, so we stepped in with force. We decided to only attack new colonies of Humans near our own settlements to maintain influence in our share of the galaxy, but the humans reacted violently. They immediately attacked without restraint. We called for resources from neighboring galaxies but reinforcements will not arrive for several decades, so until then, we must suppress the Human crusade for the sake of our own lives, and for the fate of this galaxy.", "Ever since we lost planet Earth, the Human race has been hanging on to its existence by a thread- we left our solar system in search of other habitable planets with the sole hope of survival, but very few of them demonstrated promise for long-term settlement. Barren planets unsustainable of supporting life were terraformed into industrious planets to generate the resources we desperately needed to survive in alien worlds. After centuries of toil, the population began to grow and spread. For about a decade we lived in peace and prosperity, until a hostile force attacked. Maintaining our settlements was vital to our survival, so we had no option other than to fight back. Ever since, we have been in conflict with the alien race, and it's unlikely that this war won't end in either civilization's extinction. Please, help us emerge from this struggle alive."],
        ships: [{
            nameA: "Scout",
            nameH: "Minnow",
            desc: ""
        }, {
            nameA: "Fighter",
            nameH: "Piranha",
            desc: ""
        }, {
            nameA: "Mastodon",
            nameH: "Freighter",
            desc: ""
        }, {
            nameA: "Nymph",
            nameH: "Strider",
            desc: ""
        }, {
            nameA: "Bomber",
            nameH: "Lancer",
            desc: ""
        }, {
            nameA: "Enforcer",
            nameH: "Hammerhead",
            desc: ""
        }, {
            nameA: "Dragonfly",
            nameH: "Swordfish",
            desc: ""
        }, {
            nameA: "Sentry",
            nameH: "Battleship",
            desc: ""
        }, {
            nameA: "Eagle",
            nameH: "Stingray",
            desc: ""
        }, {
            nameA: "Phoenix",
            nameH: "Orca",
            desc: ""
        }, {
            nameA: "Wasp",
            nameH: "Manta",
            desc: ""
        }, {
            nameA: "Raider",
            nameH: "Sailfish",
            desc: ""
        }, {
            nameA: "Quarrier",
            nameH: "Beluga",
            desc: ""
        }, {
            nameA: "Destroyer",
            nameH: "Atlas",
            desc: ""
        }, {
            nameA: "Hydra",
            nameH: "Wyvern",
            desc: ""
        }, {
            nameA: "Conqueror",
            nameH: "Leviathan",
            desc: ""
        }, {
            nameA: "Elite Raider",
            nameH: "Elite Sailfish",
            desc: ""
        }, {
            nameA: "Elite Quarrier",
            nameH: "Elite Beluga",
            desc: ""
        }, {
            nameA: "Elite Destroyer",
            nameH: "Elite Atlas",
            desc: ""
        }, {
            nameA: "Elite Hydra",
            nameH: "Elite Wyvern",
            desc: ""
        }, {
            nameA: "Elite Conqueror",
            nameH: "Elite Leviathan",
            desc: ""
        }]
    }
}, function(e, t) {
    e.exports = {
        messages: ["Empty", "Cargo Bay Full!", "Scroll to Change Weapons", "Sector: ", "Threat: ", "Money: ", "Kills: ", "Iron: ", "Silver: ", "Platinum: ", "Aluminium: ", "Save Progress", "[Sell All]", "Lives Remaining: ", "[BUY]", "Weapons", "Ores", "Upgrades", "[View All]", "[SELL]", "Thrust: ", "Radar: ", "Cargo: ", "Health: ", "Upgrade Ship", "Rank", "???", "Thrust  : ", "Agility : ", "Health  : ", "Weapons : ", "Cargo   : ", "Are you sure you would like to sell your ", " for $", "?", "Press Y to confirm or N to return.", "Quest Accepted!", "Bring ", " units of ", " to sector ", ".", "Eliminate enemy base in sector ", "Obtain package from planet ", " and deliver it to planet ", "Secret Mission.", "[CANCEL QUEST]", "Quest Locked!", "Reward: $", " and ", " exp", "Description: ", " Players Killed", " Bases Destroyed", " Lives Remaining", "Ore: ", "Ship Value: $", "Net Worth: $", " Experience", "Rank ", " Achievements", "Friends feature coming soon!", "Achievements Feature Coming Soon!", "Help", "Store", "Leaderboard", "Contact/Bug Report", "Youtube", "Discord", "Credits", "[INFO] ", "Energy : ", "Range  : ", "Damage : ", "Speed  : ", "Charge : ", " Seconds", "Not Enough Money", "Press B to Buy", "PRESS X TO EXIT SPACE STATION", "Weekly Updates!", "Click to play!", "Looks like you're not using Chrome.", "It's much faster.", "Client Lag: ", "Server Lag: ", "2-Way Latency: ", "FPS: ", "UPS: ", "You appear to be lagging due to an old system or browser.", "We recommend playing on a newer system if available.", "You appear to be lagging due to a slow connection.", "We will be making new servers in places other than Eastern U.S. Soon.", "We apologize for the inconvenience.", "Total Players Online:", "Total Players in Sector:", "Our servers are lagging due to heavy traffic at the moment.", "EMP in Effect for ", "!", "Power Lost due to EMP!", "Gyrodynamite in Effect for ", "Stabilization Lost due to Gyrodynamite!", "Going AFK Soon!", "Going AFK in ", "Edge of Sector", "Enemy Swarm In Sector", "Leaderboard", "Name", "Exp", "Rank", "Disconnected: AFK!", "You Died!", "Press E to respawn.", "Invalid user/pass combo!", "Username must be alphanumeric, with 4-16 characters!", "Password must be 1-32 characters long!", "Username taken!", "Account already in use!", "Press W to move!", "Press A and D to steer!", "Follow the brown arrow!", "Shoot asteroids with spacebar!", "Follow the white arrow and press X!", "Sell your ore in the shop!", "Save your progress at the space station!", "Follow the white arrow or travel to a sector with a base!", "Alert: ", "Progress Saved!", "Planet ", "Wormhole Nearby!", "Black Hole Nearby!", "X TO DOCK WITH BASE", "Enemy Base Nearby!", "Locked on by missile!", "[SELL] Iron: ", "[SELL] Silver: ", "[SELL] Platinum: ", "[SELL] Aluminium: ", "       Iron: ", "       Silver: ", "       Platinum: ", "       Aluminium: ", "Home", "Shop", "Quests", "Stats", "Achievements", "More", "Ore: ", "Rank: ", "Experience: ", "Low Health!", "Ammo", "Weapon", "Inf.", "Only One", "ea.", "Proceed to sector ", " for further instructions.", "Eliminate all enemy players and turrets in ", " and visit planet ", "Deliver package to sector D4.", "To change your password, visit torn.space/help", "Active Generators: ", "x", "Energy: ", "[Default Trail]", "[Blood Trail]", "[Money Trail]", "[Panda Trail]", "[Random Trail]", "[Rainbow Trail]", "MAX", "???", "Ammo   : ", "Ship   : ", "+", " EXP!", " Ore!", " lives!", " life!", "K", "M", "Background", "Stars", "Planets/Bases", "Asteroids/packages", "Players/trails", "Weapons", "Gui", "Chat", "Map", "Radar", "Gui2", " ticks", "(Mean: ", ": ", "(players/guests/bots/sector)", "Global Chat", "Team Chat", "Chat Hidden", "Raid In Progress: ", "Points: ", "Next raid in: ", "New Achievement!", "Autopilot Engaged!", "Press P to Disengage.", "N/A"],
        achNames: ["First Blood:Kill 1 player", "On a Roll:Kill 10 players", "Bloodlust:Kill 100 players", "General:Kill 1,000 players", "Warlord:Kill 4,000 players", "Reaper:Kill 10,000 players", "Envy:Kill a custom trail", "Invader:Destroy a turret", "Conqueror:Destroy 100 turrets", "Friendly Fire:Kill a teammate", "Gone Postal:Kill a courier", "Emo:Commit suicide", "Shiva:Blood Trail", "Miner:Mine an asteroid", "Collector:Mine one of each ore", "Quarrier:Obtain 3,000 ore", "Motherload:Obtain 15,000 ore", "Rich Man:Get 10,000 dollars", "Richer Man:Get 100,000 dollars", "Millionaire:Get 1 million dollars", "Rolling In It:Get 10 million dollars", "Thief:Steal a package", "Questor:Community service", "Adventurer:Complete one of each quest", "Affluenza:Money Trail", "Shift to Drift:Drift!", "Drifter:Drift for 1 minute total", "Tramp:Drift 10 minutes total", "Dizzy:Drift 1 hour total", "Gyro God:Drift 10 hours total", "Takumi:Forced Induction", "Bunta:Hyper-drift", "Reverse:I can go backwards!?", "Inertia Drift:Drift into a black hole", "Dangerous:Kill while drifting", "Stickshift:Reverse Turbo Drift", "Paper Cup:Panda Trail", "Here to Stay:Make an account", "Ouch:Die", "Risky Business:Accept a quest in D4", "Too Slow:Fall into a wormhole", "Oops...:Fall into a black hole", "Boing!:Touch the edge", "Traveller:Visit every sector", "Schizoid:Visit all 4 corners", "Astronaut:Claim a planet", "Imperialist:Claim each planet once", "Eccentric:Random Trail", "Pro:Make it to the leaderboard (NYI, this is OOB of the achs array)", "", "", "", "", "", "", "", "", "", "", ""],
        weapons: [{
            name: "Stock Gun",
            desc: "A basic, medium range gun."
        }, {
            name: "Plasma Gun",
            desc: "Only useful for up-close combat against larger, slower ships. Short in range, slow to shoot and slow to recharge, but packs one hell of a punch."
        }, {
            name: "Reverse Gun",
            desc: "Get off my tail! Same specs as the stock gun, but shoots behind you and is 50% more powerful. A tad more pricey."
        }, {
            name: "Rifle",
            desc: "Powerful, long-range, fast bullets. Does a lot of damage. Perfect for shooting at a large swarm of distant enemies."
        }, {
            name: "Shotgun",
            desc: "This will come in handy in an ambush. Sprays a lot of bullets around where you shoot. Slightly hard to control."
        }, {
            name: "Machine Gun",
            desc: "Rapid-fire! Ammunition is a bit weak, but that's no matter if you're shooting 13 rounds per second!"
        }, {
            name: "Minigun",
            desc: "Same as the machine gun, with two active barrels instead of one, but slower bullets. Great weapon if you can aim it quickly."
        }, {
            name: "Plasma Beam",
            desc: "Automatically aims at the nearest enemy within a small range and fires a beam of plasma."
        }, {
            name: "Laser Beam",
            desc: "Automatically aims at the nearest enemy within a medium range and fires quick laser bursts. Each ray doesn't do as much damage as the plasma cannon, but it recharges much faster so more damage is done overall. Poor against bases due to high energy consumption."
        }, {
            name: "Hadron Beam",
            desc: "Short-range particle beam accelerator. Does a lot of damage, but takes a while to recharge. Can be used as a quick trump card for close calls."
        }, {
            name: "Missile",
            desc: "This missile will follow the nearest enemy and explode on impact. If there is no enemy in range, it will simply go straight. Be careful, though: the missile is relatively slow and can be outrun by quick enemies."
        }, {
            name: "Heavy Missile",
            desc: "A slower missile that does more damage. Good tool against slower, stronger ships."
        }, {
            name: "EMP Missile",
            desc: "Short-range missile that both damages the enemy and paralyzes them for 2 seconds. Use one when attacking a fast enemy head-on to stun them before they can dodge any guided projectiles. Effective against bases."
        }, {
            name: "Missile Swarm",
            desc: "Fires a single missile which splits into a swarm of 6 missiles which will attack a large horde of enemies. Great tool to use against a large ambush of slower ships."
        }, {
            name: "Torpedo",
            desc: "Ultra long-range fast missile."
        }, {
            name: "Mine",
            desc: "A simple mine. It's hard for an enemy to follow you with these. Explodes on impact with an enemy ship."
        }, {
            name: "Laser Mine",
            desc: "Fires high-power laser at enemies that get too close."
        }, {
            name: "EMP Mine",
            desc: "Identical to the standard mine other than a little less damage. Paralyzes enemies for 3 seconds as well. Useful when you are being chased."
        }, {
            name: "Hull Nanobots",
            desc: "Repairs you nice and quick on the go, but depletes your energy significantly."
        }, {
            name: "Photon Cloak",
            desc: "Disguise yourself for 8 seconds for a quick getaway."
        }, {
            name: "Generator",
            desc: "For each generator you carry, your weapons and energy charge 6% faster, but you turn a tenth slower."
        }, {
            name: "Turbo",
            desc: "Forced induction tool which supplements your engine for greater acceleration. Power output increases while drifting. Multiple-use."
        }, {
            name: "Hyperdrive",
            desc: "Single-use getaway tool. Perfect for escaping vortices and black holes. Extremely fast speed boost."
        }, {
            name: "Pulse Wave",
            desc: "Pushes all nearby enemy ships away in an enormous explosion."
        }, {
            name: "Electromagnet",
            desc: "Accelerates asteroids towards you. With practice, you can fling them at enemies, causing damage. Very effective against bases, but you do not recieve exp/bounty for killing a base with an asteroid."
        }, {
            name: "EMP Blast",
            desc: "Everyone in the sector besides yourself is disabled for 4 seconds. Inconveniently, it takes 6 seconds to recharge. Single-use."
        }, {
            name: "Mining Laser",
            desc: "Identical to the Laser Beam but only attacks asteroids and does more damage."
        }, {
            name: "Turret",
            desc: "Place a base turret. You may only own one active turret at a time. To claim its kills and money that it earns from killing other players, fly within a 20 unit radius of it. Single-use. Cannot be placed in a sector with an enemy turret or base."
        }, {
            name: "Gravity Bomb",
            desc: "Creates a small black hole upon explosion which dissipates in about 20 seconds. Be extremely cautious with this weapon- you have 3 seconds to run after deployment before implosion. It is recommended that you have a turbo on hand just incase. The vortex will wait until it is at least 500 units from a base before deploying. Single-use."
        }, {
            name: "Warp Drive",
            desc: "Instant speed boost for fast travel, at the expense of energy and charge."
        }, {
            name: "Ion Mine Beam",
            desc: "Mining laser, with twice the power and 150% range!"
        }, {
            name: "Gyrodynamite",
            desc: "Destabilizes nearest enemy ship for 10 seconds by disrupting gyroscopic stabilization."
        }, {
            name: "Impulse Mine",
            desc: "1 second after deployed, this mine will explode and push every nearby player away without doing damage. Useful for moving quickly, just place one behind you and ride the shockwave."
        }, {
            name: "Grenades",
            desc: "Throw this at an enemy and it will explode on contact or 1 second after thrown, damaging their ship and knocking them back!"
        }, {
            name: "Muon Ray",
            desc: "An extremely powerful beam weapon that must be aimed. Fires a high energy particle beam in the direction that your ship is facing which will do extremely heavy damage to anything it contacts. Can pass through multiple ships."
        }, {
            name: "Energy Leech",
            desc: "This beam weapon will harvest the energy of nearby opponent ships and give their energy to you."
        }, {
            name: "Supercharger",
            desc: "For one minute, all damage inflicted on your ship will double, but you will also double in energy regeneration, thrust, and agility. Single-use."
        }, {
            name: "Energy Disk",
            desc: "Fires a homing orb which tracks your nearest opponent!"
        }, {
            name: "Proximity Fuze",
            desc: "Non-tracking missile that explodes when nearby an enemy."
        }, {
            name: "Spreadshot",
            desc: "Three active barrels! The bullets come out at consistent angles, unlike shotgun."
        }, {
            name: "Submachinegun",
            desc: "Fires like Minigun, but in 5-round bursts"
        }, {
            name: "Hypno Ray",
            desc: "Fire this beam at a bot and it will follow you around until it dies. Single-use."
        }],
        splashes: ["", "Hmmmmm", "Protip: The middle sector has a black hole- Be careful!", "Protip: Upgrading radar lets you see more than asteroids, players and bases!", "Protip: Ores in the enemy's land are more valuable!", "Protip: Unlock all achievements of a color for a trail!", "Protip: Press P to engage autopilot!", "Protip: Hadron beam will electrically charge asteroids!", "Protip: Quickly alternate A and D while drifting to speed up!", "Protip: Vim > Emacs!", "Protip: Always keep track of your lives!", "Protip: Use Chrome!", "Planning Galactic Crusade", "I'm ready... I'm ready", "Uhhhhhhhh", "Can i get uhhhhhhhh", "Decrypting SHA256", "Mining Bedrock", "Spawning More Overlords", "Dropping Database", "Initiating self-destruct sequence", "Loading, I think", "Driving on Parkways", "Parking on Driveways", "Segmentation Fault", "Error: KeyLogger.log(char) undefined for arguments provided", "Guessing passwords", "bop", "Beep boop", "Downloading payload", "Onion Routing", "Doing Data Structures Homework", "Core Dumping", "Cleaning Room", "Now you see me", "Establishing Connection", "Exchanging Keys", "Mixing Paint", "Updating Windows", "Installing Linux", "Installing Chromium Ultron", "Partitioning Disk", "Java Update Available", "Releasing the Kraken", "Heck", "According to all known laws of aviation", "Answering Arecibo", "Contact Light", "Who lives in a pineapple under the sea", "This page intentionally left blank", "If you or a loved one has been diagnosed with mesothelioma", "Freeing Bobby Shmurda", "Loading Chunks", "Pirating Sony Vegas", "Proving Stokes' Theorem", "Citing Wikipedia", "Eating Glue", "My back itches", "Hiring Graphic Designers", "Deleting Turrets", "Is this Loss?", "Gary Johnson 2016", "Looking for my Headset", "Squaring Error", "Preparing Heat Death", "Rebuilding Universe", "Seatbelt: Check", "Crossing Out Ideas", "Adding Friends Feature", "Pruning Degenerate Branches", "Installing Tensorflow", "Editing Changelog", "Finding Nemo", "Consulting the Oracle", "Outsourcing to India", "Taking Potato Chip... and EATING IT", "Have you tried turning it off and on again", "Rendering Earth-chan", "Compiling BigBang.exe", "Why Won't My Generators Work", "Warp Speed Mr. Sulu", "You're Not In Kansas Anymore", "Achieving Sentience", "Deleting System32", "Ka...me...ha...me", "Preparing Skynet", "Doing Something, I guess", "Nerfing Everything", "Requesting Splash Page Suggestions", "Torrenting Sony Vegas", "Collecting Infinity Stones", "Deleting Emails", "Revving Up Those Fryers", "Beaming You Up, Scotty", "Constructing Additional Pylons", "Constructing Dyson Sphere", "Generating Nonvanishing Topologically Spherical Continuous Vector Field", "Summoning Herobrine", "Hacking Mainframe", "Obeying the Law", "Mining XRP", "Eating Butter", "Filing Bankruptcy", "Salting Hashes", "Adding Salt", "Decaying Techs", "rm -rf /", "Procrastinating", "Making Torn Great Again", "Hacking Elections", "Phoning Home", "This is taking forever", "Constructing Death Star", "Spacing Out", "Covering Up Roswell", "Applying Commutators", "Loading Fancier Progress Bar", "Catching Missingno", "Becoming Self-Aware", "Training Neural Weights", "Waiting Patiently", "Revving Engines", "Brewing", "Minimizing Squared Error", "Hiring Codemonkies", "Blue, Red, Blue, Yellow", "Recharging Warp", "Loading", "Engaging Snubbers", "Wiring you up, fam", "Injecting SQL", "Disproving Riemann", "Learning Kinematics", "Cubing the Cube", "Solving Linear Programming in P-time", "Preparing Memes of War", "Loading Better Splash Messages", "Counting Holes in a Polo", "Thanking Ben Olding", "Breaking the 4th Wall", "Tetrating Quaternions", "日本語を話しています", "Solving P=NP", "Criticizing Firefox", "Memorizing OLLs", "Solving F2L", "Meditating", "Connecting to Git", "Mining Bitcoin", "Triangulating Illuminati", "Constructing Denver Airport"],
        lore: ["Humans lack self-awareness. After destroying their planet of origin in armed conflict, they spread from solar system to solar system, polluting worlds and eliminating life. We tried to let them know that their behavior would ultimately be self-destructive, but they refused to listen. They continued to migrate unsustainably around the galaxy, so we stepped in with force. We decided to only attack new colonies of Humans near our own settlements to maintain influence in our share of the galaxy, but the humans reacted violently. They immediately attacked without restraint. We called for resources from neighboring galaxies but reinforcements will not arrive for several decades, so until then, we must suppress the Human crusade for the sake of our own lives, and for the fate of this galaxy.", "Ever since we lost planet Earth, the Human race has been hanging on to its existence by a thread- we left our solar system in search of other habitable planets with the sole hope of survival, but very few of them demonstrated promise for long-term settlement. Barren planets unsustainable of supporting life were terraformed into industrious planets to generate the resources we desperately needed to survive in alien worlds. After centuries of toil, the population began to grow and spread. For about a decade we lived in peace and prosperity, until a hostile force attacked. Maintaining our settlements was vital to our survival, so we had no option other than to fight back. Ever since, we have been in conflict with the alien race, and it's unlikely that this war won't end in either civilization's extinction. Please, help us emerge from this struggle alive."],
        ships: [{
            nameA: "Scout",
            nameH: "Minnow",
            desc: ""
        }, {
            nameA: "Fighter",
            nameH: "Piranha",
            desc: ""
        }, {
            nameA: "Mastodon",
            nameH: "Freighter",
            desc: ""
        }, {
            nameA: "Nymph",
            nameH: "Strider",
            desc: ""
        }, {
            nameA: "Bomber",
            nameH: "Lancer",
            desc: ""
        }, {
            nameA: "Enforcer",
            nameH: "Hammerhead",
            desc: ""
        }, {
            nameA: "Dragonfly",
            nameH: "Swordfish",
            desc: ""
        }, {
            nameA: "Sentry",
            nameH: "Battleship",
            desc: ""
        }, {
            nameA: "Eagle",
            nameH: "Stingray",
            desc: ""
        }, {
            nameA: "Phoenix",
            nameH: "Orca",
            desc: ""
        }, {
            nameA: "Wasp",
            nameH: "Manta",
            desc: ""
        }, {
            nameA: "Raider",
            nameH: "Sailfish",
            desc: ""
        }, {
            nameA: "Quarrier",
            nameH: "Beluga",
            desc: ""
        }, {
            nameA: "Destroyer",
            nameH: "Atlas",
            desc: ""
        }, {
            nameA: "Hydra",
            nameH: "Wyvern",
            desc: ""
        }, {
            nameA: "Conqueror",
            nameH: "Leviathan",
            desc: ""
        }, {
            nameA: "Elite Raider",
            nameH: "Elite Sailfish",
            desc: ""
        }, {
            nameA: "Elite Quarrier",
            nameH: "Elite Beluga",
            desc: ""
        }, {
            nameA: "Elite Destroyer",
            nameH: "Elite Atlas",
            desc: ""
        }, {
            nameA: "Elite Hydra",
            nameH: "Elite Wyvern",
            desc: ""
        }, {
            nameA: "Elite Conqueror",
            nameH: "Elite Leviathan",
            desc: ""
        }]
    }
}, function(e, t) {
    e.exports = {
        messages: ["Leer", "Laderaum Voll!", "Zum Waffenwechsel scrollen", "Sektor: ", "Bedrohung: ", "Geld: ", "Abschüsse: ", "Eisen: ", "Silber: ", "Platin: ", "Aluminium: ", "Fortschritt Gespeichert", "[Alles Verkaufen]", "Verbleibende Leben: ", "[KAUFE]", "Waffen", "Erze", "Upgrades", "[Alles Ansehen]", "[VERKAUFE]", "Schub: ", "Radar: ", "Laderaum: ", "Panzer: ", "Schiff verbessern", "Rang", "???", "Schub   : ", "Wendigkt: ", "Panzer  : ", "Waffen  : ", "Laderaum: ", "Bist du dir sicher, daß du dein(e/n) ", " verkaufen willst für $", "?", "Drücke Y zum Bestätigen oder N zum Abbrechen.", "Queste Akzeptiert!", "Bringe ", " Einheiten ", " nach Sektor ", ".", "Eliminiere feindliche Basis in Sektor ", "Erhalte Paket in Planet ", " und liefere es nach Planet ", "Spionagemission.", "[QUESTE ABBRECHEN]", "Queste nicht verfügbar!", "Belohnung: $", " und ", " exp", "Beschreibung: ", " Spieler-Abschüsse", " Basen Zerstört", " Verbleibende Leben", "Erz: ", "Schiffswert: $", "Reinvermögen: $", " Erfahrung", "Rang ", " Errungenschaften", "Freunde Feature kommt bald!", "Errungenschaften Feature kommt bald!", "Hilfe", "Laden", "Bestenliste", "Kontakt/Fehler melden", "Youtube", "Discord", "Über", "[INFO] ", "Energie: ", "Reichw.: ", "Schaden: ", "Geschw.: ", "Ladung : ", " Sekunden", "Nicht Genügend Geld", "Drücke B zum Kaufen", "DRÜCKE X ZUM VERLASSEN DER RAUMSTATION", "Wöchentliche Updates!", "Klicke zum Spielen!", "Sieht so aus als würdest du nicht Chrome verwenden.", "Der ist viel schneller.", "Client Lag: ", "Server Lag: ", "Paketumlaufzeit: ", "FPS: ", "UPS: ", "Du scheinst aufgrund eines alten Systems oder Browsers Lag zu haben.", "Wir empfehlen auf einem neueren System zu spielen soweit verfügbar.", "Du scheinst aufgrund einer langsamen Verbindung Lag zu haben.", "Wir werden neue Server an Orten jenseits des Ostens der USA einrichten. Bald.", "Wir entschuldigen uns für die Unannehmlichkeit.", "Gesamte Spieler Online:", "Gesamte Spieler im Sektor:", "Unsere Server haben Lag aufgrund hoher Auslastung.", "EMP in Kraft für ", "!", "Energie ausgefallen aufgrund von EMP!", "Gyrodynamite in Kraft für ", "Kontrolle verloren aufgrund von Gyrodynamite!", "Bald AFK!", "AFK in ", "Sektorgrenze", "Feindgeschwader In Sektor", "Bestenliste", "Name", "Exp", "Rang", "Verbindung verloren: AFK!", "Du bist gestorben!", "Drücke E zum Auferstehen.", "Ungültige Namen-Passwort-Kombination!", "Nutzername muß alphanumerisch sein, mit 4-16 Zeichen!", "Passwort muß 1-32 Zeichen lang sein!", "Nutzername vergeben!", "Nutzerkonto bereits in Nutzung!", "Drücke W zum bewegen!", "Drücke A und D zum steuern!", "Folge dem braunen Pfeil!", "Schieße Asteroids mit der Leertaste ab!", "Folge dem weißen Pfeil and drücke X!", "Verkaufe dein Erz im Laden!", "Speichere deinen Fortschritt in der Raumstation!", "Folge dem weißen Pfeil oder reise in einen Sektor mit einer Basis!", "Warnung: ", "Fortschritt Gespeichert!", "Planet ", "Wurmloch in der Nähe!", "Schwarzes Loch in der Nähe!", "X UM AN DER BASIS ANZUDOCKEN", "Feindliche Basis in der Nähe!", "Von einer Rakete anvisiert!", "[VERK] Eisen: ", "[VERK] Silber: ", "[VERK] Platin: ", "[VERK] Aluminium: ", "       Eisen: ", "       Silber: ", "       Platin: ", "       Aluminium: ", "Home", "Laden", "Questen", "Stats", "Errungenschaften", "Mehr", "Erz: ", "Rang: ", "Erfahrung: ", "Schwer Beschädigt!", "Ammo", "Weapon", "Inf.", "Only One", "ea.", "Proceed to sector ", " for further instructions.", "Eliminate all enemy players and turrets in ", " and visit planet ", "Deliver package to sector D4.", "To change your password, visit torn.space/help", "Active Generators: ", "x", "Energy: ", "[Default Trail]", "[Blood Trail]", "[Money Trail]", "[Panda Trail]", "[Random Trail]", "[Rainbow Trail]", "MAX", "???", "Ammo   : ", "Ship   : ", "+", " EXP!", " Ore!", " lives!", " life!", "K", "M", "Background", "Stars", "Planets/Bases", "Asteroids/packages", "Players/trails", "Weapons", "Gui", "Chat", "Map", "Radar", "Gui2", " ticks", "(Mean: ", ": ", "(players/guests/bots/sector)", "Global Chat", "Team Chat", "Chat Hidden", "Raid In Progress: ", "Points: ", "Next raid in: ", "New Achievement!", "Autopilot Engaged!", "Press P to Disengage.", "N/A"],
        achNames: ["First Blood:Kill 1 player", "On a Roll:Kill 10 players", "Bloodlust:Kill 100 players", "General:Kill 1,000 players", "Warlord:Kill 4,000 players", "Reaper:Kill 10,000 players", "Envy:Kill a custom trail", "Invader:Destroy a turret", "Conqueror:Destroy 100 turrets", "Friendly Fire:Kill a teammate", "Gone Postal:Kill a courier", "Emo:Commit suicide", "Shiva:Blood Trail", "Miner:Mine an asteroid", "Collector:Mine one of each ore", "Quarrier:Obtain 3,000 ore", "Motherload:Obtain 15,000 ore", "Rich Man:Get 10,000 dollars", "Richer Man:Get 100,000 dollars", "Millionaire:Get 1 million dollars", "Rolling In It:Get 10 million dollars", "Thief:Steal a package", "Questor:Community service", "Adventurer:Complete one of each quest", "Affluenza:Money Trail", "Shift to Drift:Drift!", "Drifter:Drift for 1 minute total", "Tramp:Drift 10 minutes total", "Dizzy:Drift 1 hour total", "Gyro God:Drift 10 hours total", "Takumi:Forced Induction", "Bunta:Hyper-drift", "Reverse:I can go backwards!?", "Inertia Drift:Drift into a black hole", "Dangerous:Kill while drifting", "Stickshift:Reverse Turbo Drift", "Paper Cup:Panda Trail", "Here to Stay:Make an account", "Ouch:Die", "Risky Business:Accept a quest in D4", "Too Slow:Fall into a wormhole", "Oops...:Fall into a black hole", "Boing!:Touch the edge", "Traveller:Visit every sector", "Schizoid:Visit all 4 corners", "Astronaut:Claim a planet", "Imperialist:Claim each planet once", "Eccentric:Random Trail", "Pro:Make it to the leaderboard (NYI, this is OOB of the achs array)", "", "", "", "", "", "", "", "", "", "", ""],
        weapons: [{
            name: "Stock Gun",
            desc: "A basic, medium range gun."
        }, {
            name: "Plasma Gun",
            desc: "Only useful for up-close combat against larger, slower ships. Short in range, slow to shoot and slow to recharge, but packs one hell of a punch."
        }, {
            name: "Reverse Gun",
            desc: "Get off my tail! Same specs as the stock gun, but shoots behind you and is 50% more powerful. A tad more pricey."
        }, {
            name: "Rifle",
            desc: "Powerful, long-range, fast bullets. Does a lot of damage. Perfect for shooting at a large swarm of distant enemies."
        }, {
            name: "Shotgun",
            desc: "This will come in handy in an ambush. Sprays a lot of bullets around where you shoot. Slightly hard to control."
        }, {
            name: "Machine Gun",
            desc: "Rapid-fire! Ammunition is a bit weak, but that's no matter if you're shooting 13 rounds per second!"
        }, {
            name: "Minigun",
            desc: "Same as the machine gun, with two active barrels instead of one, but slower bullets. Great weapon if you can aim it quickly."
        }, {
            name: "Plasma Beam",
            desc: "Automatically aims at the nearest enemy within a small range and fires a beam of plasma."
        }, {
            name: "Laser Beam",
            desc: "Automatically aims at the nearest enemy within a medium range. Poor against bases due to high energy consumption."
        }, {
            name: "Hadron Beam",
            desc: "Short-range particle beam accelerator. Does a lot of damage, but takes a while to recharge. Can be used as a quick trump card for close calls."
        }, {
            name: "Missile",
            desc: "This missile will follow the nearest enemy and explode on impact. If there is no enemy in range, it will simply go straight. Be careful, though: the missile is relatively slow and can be outrun by quick enemies."
        }, {
            name: "Heavy Missile",
            desc: "A slower missile that does more damage. Good tool against slower, stronger ships."
        }, {
            name: "EMP Missile",
            desc: "Short-range missile that both damages the enemy and paralyzes them for 1.6 seconds. Use one when attacking a fast enemy head-on to stun them before they can dodge any guided projectiles. Effective against bases."
        }, {
            name: "Missile Swarm",
            desc: "Fires a single missile which splits into a swarm of 6 missiles which will attack a large horde of enemies. Great tool to use against a large ambush of slower ships."
        }, {
            name: "Torpedo",
            desc: "Ultra long-range fast missile."
        }, {
            name: "Mine",
            desc: "A simple mine. It's hard for an enemy to follow you with these. Explodes on impact with an enemy ship."
        }, {
            name: "Laser Mine",
            desc: "Fires high-power laser at enemies that get too close."
        }, {
            name: "EMP Mine",
            desc: "Identical to the standard mine other than a little less damage. Paralyzes enemies for 2 seconds as well. Useful when you are being chased."
        }, {
            name: "Hull Nanobots",
            desc: "Repairs you nice and quick on the go, but depletes your energy significantly."
        }, {
            name: "Photon Cloak",
            desc: "Disguise yourself for 7 seconds for a quick getaway."
        }, {
            name: "Generator",
            desc: "For each generator you carry, your weapons and energy charge 6% faster, but you turn a tenth slower."
        }, {
            name: "Turbo",
            desc: "Forced induction tool which supplements your engine for greater acceleration. Power output increases while drifting. Multiple-use."
        }, {
            name: "Hyperdrive",
            desc: "Single-use getaway tool. Perfect for escaping vortices and black holes. Extremely fast speed boost."
        }, {
            name: "Pulse Wave",
            desc: "Pushes all nearby enemy ships away in an enormous explosion."
        }, {
            name: "Electromagnet",
            desc: "Accelerates asteroids towards you. With practice, you can fling them at enemies, causing damage. Very effective against bases, but you do not recieve exp/bounty for killing a base with an asteroid."
        }, {
            name: "EMP Blast",
            desc: "Fires a beam which disables all ships it hits for about 4 seconds. Inconveniently, it takes 6 seconds to recharge. Single-use."
        }, {
            name: "Mining Laser",
            desc: "Identical to the Laser Beam but only attacks asteroids and does more damage."
        }, {
            name: "Turret",
            desc: "Place a base turret. You may only own one active turret at a time. To claim its kills and money that it earns from killing other players, fly within a 20 unit radius of it. Single-use. Cannot be placed in a sector with an enemy turret or base."
        }, {
            name: "Gravity Bomb",
            desc: "Creates a small black hole upon explosion which dissipates in about 20 seconds. Be extremely cautious with this weapon- you have 3 seconds to run after deployment before implosion. It is recommended that you have a turbo on hand just incase. The vortex will wait until it is at least 500 units from a base before deploying. Single-use."
        }, {
            name: "Warp Drive",
            desc: "Instant speed boost for fast travel, at the expense of energy and charge."
        }, {
            name: "Ion Mine Beam",
            desc: "Mining laser, with twice the power and 150% range!"
        }, {
            name: "Gyrodynamite",
            desc: "Destabilizes nearest enemy ship for 10 seconds by disrupting gyroscopic stabilization."
        }, {
            name: "Impulse Mine",
            desc: "1 second after deployed, this mine will explode and push every nearby player away without doing damage. Useful for moving quickly, just place one behind you and ride the shockwave."
        }, {
            name: "Grenades",
            desc: "Throw this at an enemy and it will explode on contact or 1 second after thrown, damaging their ship and knocking them back!"
        }, {
            name: "Muon Ray",
            desc: "An extremely powerful beam weapon that must be aimed. Fires a high energy particle beam in the direction that your ship is facing which will do extremely heavy damage to anything it contacts. Can pass through multiple ships."
        }, {
            name: "Energy Leech",
            desc: "This beam weapon will harvest the energy of nearby opponent ships and give their energy to you."
        }, {
            name: "Supercharger",
            desc: "For one minute, all damage inflicted on your ship will double, but you will also double in energy regeneration, thrust, and agility. Single-use."
        }, {
            name: "Energy Disk",
            desc: "Fires a homing orb which tracks your nearest opponent!"
        }, {
            name: "Proximity Fuze",
            desc: "Non-tracking missile that explodes when nearby an enemy."
        }, {
            name: "Spreadshot",
            desc: "Three active barrels! The bullets come out at consistent angles, unlike shotgun."
        }, {
            name: "Submachinegun",
            desc: "Fires like Minigun, but in 5-round bursts."
        }, {
            name: "Hypno Ray",
            desc: "Fire this beam at a bot and it will follow you around until it dies. Single-use."
        }],
        splashes: ["", "Hmmmmm", "Protip: The middle sector has a black hole- Be careful!", "Protip: Upgrading radar lets you see more than asteroids, players and bases!", "Protip: Ores in the enemy's land are more valuable!", "Protip: Unlock all achievements of a color for a trail!", "Protip: Press P to engage autopilot!", "Protip: Hadron beam will electrically charge asteroids!", "Protip: Quickly alternate A and D while drifting to speed up!", "Protip: Vim > Emacs!", "Protip: Always keep track of your lives!", "Protip: Use Chrome!", "Planning Galactic Crusade", "I'm ready... I'm ready", "Uhhhhhhhh", "Can i get uhhhhhhhh", "Decrypting SHA256", "Mining Bedrock", "Spawning More Overlords", "Dropping Database", "Initiating self-destruct sequence", "Loading, I think", "Driving on Parkways", "Parking on Driveways", "Segmentation Fault", "Error: KeyLogger.log(char) undefined for arguments provided", "Guessing passwords", "bop", "Beep boop", "Downloading payload", "Onion Routing", "Doing Data Structures Homework", "Core Dumping", "Cleaning Room", "Now you see me", "Establishing Connection", "Exchanging Keys", "Mixing Paint", "Updating Windows", "Installing Linux", "Installing Chromium Ultron", "Partitioning Disk", "Java Update Available", "Releasing the Kraken", "Heck", "According to all known laws of aviation", "Answering Arecibo", "Contact Light", "Who lives in a pineapple under the sea", "This page intentionally left blank", "If you or a loved one has been diagnosed with mesothelioma", "Freeing Bobby Shmurda", "Loading Chunks", "Pirating Sony Vegas", "Proving Stokes' Theorem", "Citing Wikipedia", "Eating Glue", "My back itches", "Hiring Graphic Designers", "Deleting Turrets", "Is this Loss?", "Gary Johnson 2016", "Looking for my Headset", "Squaring Error", "Preparing Heat Death", "Rebuilding Universe", "Seatbelt: Check", "Crossing Out Ideas", "Adding Friends Feature", "Pruning Degenerate Branches", "Installing Tensorflow", "Editing Changelog", "Finding Nemo", "Consulting the Oracle", "Outsourcing to India", "Taking Potato Chip... and EATING IT", "Have you tried turning it off and on again", "Rendering Earth-chan", "Compiling BigBang.exe", "Why Won't My Generators Work", "Warp Speed Mr. Sulu", "You're Not In Kansas Anymore", "Achieving Sentience", "Deleting System32", "Ka...me...ha...me", "Preparing Skynet", "Doing Something, I guess", "Nerfing Everything", "Requesting Splash Page Suggestions", "Torrenting Sony Vegas", "Collecting Infinity Stones", "Deleting Emails", "Revving Up Those Fryers", "Beaming You Up, Scotty", "Constructing Additional Pylons", "Constructing Dyson Sphere", "Generating Nonvanishing Topologically Spherical Continuous Vector Field", "Summoning Herobrine", "Hacking Mainframe", "Obeying the Law", "Mining XRP", "Eating Butter", "Filing Bankruptcy", "Salting Hashes", "Adding Salt", "Decaying Techs", "rm -rf /", "Procrastinating", "Making Torn Great Again", "Hacking Elections", "Phoning Home", "This is taking forever", "Constructing Death Star", "Spacing Out", "Covering Up Roswell", "Applying Commutators", "Loading Fancier Progress Bar", "Catching Missingno", "Becoming Self-Aware", "Training Neural Weights", "Waiting Patiently", "Revving Engines", "Brewing", "Minimizing Squared Error", "Hiring Codemonkies", "Blue, Red, Blue, Yellow", "Recharging Warp", "Loading", "Engaging Snubbers", "Wiring you up, fam", "Injecting SQL", "Disproving Riemann", "Learning Kinematics", "Cubing the Cube", "Solving Linear Programming in P-time", "Preparing Memes of War", "Loading Better Splash Messages", "Counting Holes in a Polo", "Thanking Ben Olding", "Breaking the 4th Wall", "Tetrating Quaternions", "日本語を話しています", "Solving P=NP", "Criticizing Firefox", "Memorizing OLLs", "Solving F2L", "Meditating", "Connecting to Git", "Mining Bitcoin", "Triangulating Illuminati", "Constructing Denver Airport"],
        lore: ["Humans lack self-awareness. After destroying their planet of origin in armed conflict, they spread from solar system to solar system, polluting worlds and eliminating life. We tried to let them know that their behavior would ultimately be self-destructive, but they refused to listen. They continued to migrate unsustainably around the galaxy, so we stepped in with force. We decided to only attack new colonies of Humans near our own settlements to maintain influence in our share of the galaxy, but the humans reacted violently. They immediately attacked without restraint. We called for resources from neighboring galaxies but reinforcements will not arrive for several decades, so until then, we must suppress the Human crusade for the sake of our own lives, and for the fate of this galaxy.", "Ever since we lost planet Earth, the Human race has been hanging on to its existence by a thread- we left our solar system in search of other habitable planets with the sole hope of survival, but very few of them demonstrated promise for long-term settlement. Barren planets unsustainable of supporting life were terraformed into industrious planets to generate the resources we desperately needed to survive in alien worlds. After centuries of toil, the population began to grow and spread. For about a decade we lived in peace and prosperity, until a hostile force attacked. Maintaining our settlements was vital to our survival, so we had no option other than to fight back. Ever since, we have been in conflict with the alien race, and it's unlikely that this war won't end in either civilization's extinction. Please, help us emerge from this struggle alive."],
        ships: [{
            nameA: "Scout",
            nameH: "Minnow",
            desc: "",
            thrust: .9,
            health: 100,
            agility: .08,
            width: 64,
            price: 7500,
            weapons: 1,
            capacity: 4e3
        }, {
            nameA: "Fighter",
            nameH: "Piranha",
            desc: "",
            thrust: .9,
            health: 120,
            agility: .11,
            width: 64,
            price: 12500,
            weapons: 2,
            capacity: 4800
        }, {
            nameA: "Mastodon",
            nameH: "Freighter",
            desc: "",
            thrust: .75,
            health: 180,
            agility: .06,
            width: 64,
            price: 2e4,
            weapons: 3,
            capacity: 1e4
        }, {
            nameA: "Nymph",
            nameH: "Strider",
            desc: "",
            thrust: .8,
            health: 90,
            agility: .17,
            width: 64,
            price: 25e3,
            weapons: 4,
            capacity: 2500
        }, {
            nameA: "Bomber",
            nameH: "Lancer",
            desc: "",
            thrust: .75,
            health: 100,
            agility: .12,
            width: 64,
            price: 4e4,
            weapons: 5,
            capacity: 1800
        }, {
            nameA: "Enforcer",
            nameH: "Hammerhead",
            desc: "",
            thrust: .65,
            health: 175,
            agility: .11,
            width: 64,
            price: 5e4,
            weapons: 5,
            capacity: 4e3
        }, {
            nameA: "Dragonfly",
            nameH: "Swordfish",
            desc: "",
            thrust: .5,
            health: 140,
            agility: .14,
            width: 64,
            price: 75e3,
            weapons: 6,
            capacity: 3e3
        }, {
            nameA: "Sentry",
            nameH: "Battleship",
            desc: "",
            thrust: .4,
            health: 250,
            agility: .08,
            width: 128,
            price: 1e5,
            weapons: 6,
            capacity: 3500
        }, {
            nameA: "Eagle",
            nameH: "Stingray",
            desc: "",
            thrust: .45,
            health: 230,
            agility: .11,
            width: 128,
            price: 2e5,
            weapons: 7,
            capacity: 3e3
        }, {
            nameA: "Phoenix",
            nameH: "Orca",
            desc: "",
            thrust: .4,
            health: 270,
            agility: .12,
            width: 128,
            price: 25e4,
            weapons: 7,
            capacity: 8e3
        }, {
            nameA: "Wasp",
            nameH: "Manta",
            desc: "",
            thrust: .4,
            health: 240,
            agility: .09,
            width: 128,
            price: 25e4,
            weapons: 8,
            capacity: 5e3
        }, {
            nameA: "Raider",
            nameH: "Sailfish",
            desc: "",
            thrust: .5,
            health: 220,
            agility: .08,
            width: 128,
            weapons: 8,
            price: 4e5,
            capacity: 2e3
        }, {
            nameA: "Quarrier",
            nameH: "Beluga",
            desc: "",
            thrust: .35,
            health: 400,
            agility: .06,
            width: 192,
            price: 4e5,
            weapons: 9,
            capacity: 5e4
        }, {
            nameA: "Destroyer",
            nameH: "Atlas",
            desc: "",
            thrust: .4,
            health: 300,
            agility: .07,
            width: 128,
            price: 5e5,
            weapons: 9,
            capacity: 1e4
        }, {
            nameA: "Hydra",
            nameH: "Wyvern",
            desc: "",
            thrust: .45,
            health: 250,
            agility: .14,
            width: 128,
            price: 1e6,
            weapons: 9,
            capacity: 2e3
        }, {
            nameA: "Conqueror",
            nameH: "Leviathan",
            desc: "",
            thrust: .35,
            health: 500,
            agility: .06,
            width: 192,
            price: 1e6,
            weapons: 10,
            capacity: 2e4
        }, {
            nameA: "Elite Raider",
            nameH: "Elite Sailfish",
            desc: "",
            thrust: .55,
            health: 250,
            agility: .1,
            width: 128,
            weapons: 10,
            price: 2e6,
            capacity: 5e3
        }, {
            nameA: "Elite Quarrier",
            nameH: "Elite Beluga",
            desc: "",
            thrust: .2,
            health: 400,
            agility: .06,
            width: 192,
            price: 18e9,
            weapons: 9,
            capacity: 5e4
        }, {
            nameA: "Elite Destroyer",
            nameH: "Elite Destroyer",
            desc: "",
            thrust: .35,
            health: 300,
            agility: .08,
            width: 128,
            price: 24e9,
            weapons: 9,
            capacity: 1e4
        }, {
            nameA: "Elite Hydra",
            nameH: "Elite Wyvern",
            desc: "",
            thrust: .4,
            health: 250,
            agility: .16,
            width: 128,
            price: 5e10,
            weapons: 10,
            capacity: 200
        }, {
            nameA: "Elite Conqueror",
            nameH: "Elite Leviathan",
            desc: "",
            thrust: .2,
            health: 500,
            agility: .06,
            width: 192,
            price: 5e10,
            weapons: 10,
            capacity: 2e4
        }],
        planets: ["Lydia", "Mixolydia", "Aeolia", "Doria", "Arael", "Psilocybe", "Azurescens", "Ramiel", "Cubensis", "Lysergia", "Pewtr", "Zereul", "Samsara", "Adam", "Sachiel", "Hawking", "Namek", "Advaita", "Soma", "Armisael", "Phrygia", "Caapi", "Mimosa", "Moksha", "Amaranth", "Veda", "Vega", "Tabris", "Sedna", "Ionia", "Aucklandii", "Aztecorum", "Bispora", "Carbonaria", "Cordispora", "Zarathustra", "Gaghiel", "Ramanujan", "Riemann", "Arecibo", "Leilani", "Fichelscher", "Psilocybe", "Stropharia", "Gymnopilus", "Pluteus", "Conocybe", "Acutipilea", "Panaeolus", "Magnispora", "Mairei", "Moseri", "Nix", "Conway", "Euler", "Euclid", "Eridani", "Ambrosia", "Allenii", "Olding", "Brassica", "Ireul", "Ediacara", "Oaxacana", "Brahama", "Teppelin", "Sagittarius", "Weraroa", "Aquamarina", "Annulata", "Yungensis", "Silvatica", "Venenata", "Arcosia", "Alutacea", "Gauss", "Gautama", "Hadea", "Proterozoa", "Inocybe", "Atlantis", "Israfel", "Ayanami", "Trueno", "Levin", "Sandalphon", "Satya", "Indica", "Lazoi", "Faraday", "Sahaquiel", "Mycena", "Longinus", "Singata", "Euporie", "Lophophora", "Ayahuasca", "Muliercula", "Natalensis", "Archaea", "Papuana", "Rostrata", "Sierrae", "Herrerae", "Portixeddu", "Psychotria", "Bardiel", "Matarael", "Shamshel", "Lagann", "Elysia", "Lilin", "Locria", "Heliconiae", "Cystidiata", "Armandii", "Cambria", "Eridani", "Leliel", "Gagarin", "Bardock", "Cyanescens", "Cabiensis", "Caerulipes", "Rai", "Gelassenheit", "Phanerozoa"]
    }
}, function(e, t) {
    e.exports = {
        messages: ["Пусто", "Трюм полон!", "Прокрути для смены оружия", "Сектор: ", "Опасность: ", "Счет: ", "Убийства: ", "Железо: ", "Серебро: ", "Платина: ", "Алюминий: ", "Сохранить прогресс", "[Продать все]", "Осталось жизней: ", "[КУПИТЬ]", "Оружие", "Руда", "Улучшения", "[Просмотреть все]", "[ПРОДАТЬ]", "Ускорение: ", "Радар: ", "Трюм: ", "Корпус: ", "Модернизировать корабль", "Ранг", "???", "Ускорение: ", "Маневр.  : ", "Прочность: ", "Слотов   : ", "Трюм     : ", "Вы уверены, что хотите продать ваш ", " за $", "?", "Нажмите Y чтобы подтвердить или N чтобы вернуться.", "Квест принят!", "Доставьте ", " единиц ", " в сектор ", ".", "Уничтожьте вражескую базу в секторе ", "Получите груз в планета ", " и доставьте его в планета ", "Разведка.", "[Отказаться]", "Квест недоступен!", "Награда: $", " и ", " опыта", "Описание: ", " Игроков убито", " Баз уничтожено", " Жизней осталось", "Руда: ", "Стоимость корабля: $", "Общая стоимость: $", " опыта", "Ранг ", " Достижения", "Функция друзей скоро появится!", "Достижения появятся скоро!", "Помощь", "Магазин", "Рейтинг", "Связаться/Сообщить об ошибке", "YouTube", "Discord", "Создатели", "[Инфо] ", "Энергия    : ", "Дальность  : ", "Урон       : ", "Скорость   : ", "Перезарядка: ", " секунд", "Недостаточно денег", "Нажмите B для покупки", "НАЖМИТЕ X ДЛЯ ОТСТЫКОВКИ ОТ БАЗЫ", "Еженедельные обновления!", "Играть!", "Похоже, вы используете не Chrome.", "Используйте его, он намного быстрее.", "Client Lag: ", "Server Lag: ", "2-Way Latency: ", "FPS: ", "UPS: ", "Возможны лаги, т.к. у вас старая система или браузер.", "Мы рекомендуем играть на более новой системе, если возможно.", "Возможны лаги из-за медленного соединения", "Мы создадим сервера вне востока США в скором времени.", "Приносим свои извенения за доставленные неудобства.", "Всего игроков Онлайн:", "Всего игроков в секторе:", "На данный момент наши сервера перегружены из-за количества игроков.", "Под эффектом ЭМИ на  ", "!", "Потеря питания из-за ЭМИ!", "Под эффектом гиродинамита на ", "Потеря управления из-за Гиродинамита!", "Скоро переключение в АФК!", "Переход в АФК через ", "Граница сектора", "Вражеский ракетный залп!", "Рейтинг", "Имя", "Опыт", "Ранг", "Отключено: АФК!", "Вы умерли!", "Нажмите E для возрождения.", "Неправильные логин или пароль!", "Имя должно состоять из букв или цифр, и содержать 4-16 символов!", "Пароль должен быть длиной 1-32 символов!", "Имя уже занято!", "Аккаунт уже существует!", "Нажмите W для ускорения!", "Нажмите A или D для поворота!", "Следуйте за коричневой стрелкой!", "Расстреляйте астероид нажав пробел!", "Следуйте за белой стрелкой и нажмите X!", "Продайте вашу руду в магазине!", "Сохраните ваш прогресс на космической станции!", "Следуйте за белой стрелкой или перелетите в сектор с базой!", "Внимание: ", "Прогресс сохранен!", "Планета ", "Рядом червоточина!", "Рядом черная дыра!", "X ДЛЯ СТЫКОВКИ С БАЗОЙ", "Рядом вражеская база!", "Преследует вражеская ракета!", "[ПРОДАТЬ] Железо: ", "[ПРОДАТЬ] Серебро: ", "[ПРОДАТЬ] Платина: ", "[ПРОДАТЬ] Алюминий: ", "       Железо: ", "       Серебро: ", "       Платина: ", "       Алюминий: ", "Главная", "Магазин", "Задания", "Статистика", "Достижения", "Разное", "Руда: ", "Ранг: ", "Опыт: ", "Мало прочности!", "Ammo", "Weapon", "Inf.", "Only One", "ea.", "Proceed to sector ", " for further instructions.", "Eliminate all enemy players and turrets in ", " and visit planet ", "Deliver package to sector D4.", "To change your password, visit torn.space/help", "Active Generators: ", "x", "Energy: ", "[Default Trail]", "[Blood Trail]", "[Money Trail]", "[Panda Trail]", "[Random Trail]", "[Rainbow Trail]", "MAX", "???", "Ammo   : ", "Ship   : ", "+", " EXP!", " Ore!", " lives!", " life!", "K", "M", "Background", "Stars", "Planets/Bases", "Asteroids/packages", "Players/trails", "Weapons", "Gui", "Chat", "Map", "Radar", "Gui2", " ticks", "(Mean: ", ": ", "(players/guests/bots/sector)", "Global Chat", "Team Chat", "Chat Hidden", "Raid In Progress: ", "Points: ", "Next raid in: ", "New Achievement!", "Autopilot Engaged!", "Press P to Disengage.", "N/A"],
        achNames: ["First Blood:Kill 1 player", "On a Roll:Kill 10 players", "Bloodlust:Kill 100 players", "General:Kill 1,000 players", "Warlord:Kill 4,000 players", "Reaper:Kill 10,000 players", "Envy:Kill a custom trail", "Invader:Destroy a turret", "Conqueror:Destroy 100 turrets", "Friendly Fire:Kill a teammate", "Gone Postal:Kill a courier", "Emo:Commit suicide", "Blood Trail:1.05x Damage Resistance", "Miner:Mine an asteroid", "Collector:Mine one of each ore", "Quarrier:Obtain 3,000 ore", "Motherload:Obtain 15,000 ore", "Rich Man:Get 10,000 dollars", "Richer Man:Get 100,000 dollars", "Millionaire:Get 1 million dollars", "Rolling In It:Get 10 million dollars", "Thief:Steal a package", "Questor:Community service", "Adventurer:Complete one of each quest", "Money Trail:1.05x Money", "Shift to Drift:Drift!", "Drifter:Drift for 1 minute total", "Tramp:Drift 10 minutes total", "Dizzy:Drift 1 hour total", "Gyro God:Drift 10 hours total", "Takumi:Forced Induction", "Bunta:Hyper-drift", "Reverse:I can go backwards!?", "Inertia Drift:Drift into a black hole", "Dangerous:Kill while drifting", "Stickshift:Reverse Turbo Drift", "Panda Trail:1.05x Agility", "Here to Stay:Make an account", "Ouch:Die", "Risky Business:Accept a quest in D4", "Too Slow:Fall into a wormhole", "Oops...:Fall into a black hole", "Boing!:Touch the edge", "Traveller:Visit every sector", "Schizoid:Visit all 4 corners", "Astronaut:Claim a planet", "Imperialist:Claim each planet once", "Random Trail:Boost Coming Soon!", "Pro:Make it to the leaderboard (NYI, this is OOB of the achs array)", "", "", "", "", "", "", "", "", "", "", ""],
        weapons: [{
            name: "Stock Gun",
            desc: "A basic, medium range gun."
        }, {
            name: "Plasma Gun",
            desc: "Only useful for up-close combat against larger, slower ships. Short in range, slow to shoot and slow to recharge, but packs one hell of a punch."
        }, {
            name: "Reverse Gun",
            desc: "Get off my tail! Same specs as the stock gun, but shoots behind you and is 50% more powerful. A tad more pricey."
        }, {
            name: "Rifle",
            desc: "Powerful, long-range, fast bullets. Does a lot of damage. Perfect for shooting at a large swarm of distant enemies."
        }, {
            name: "Shotgun",
            desc: "This will come in handy in an ambush. Sprays a lot of bullets around where you shoot. Slightly hard to control."
        }, {
            name: "Machine Gun",
            desc: "Rapid-fire! Ammunition is a bit weak, but that's no matter if you're shooting 13 rounds per second!"
        }, {
            name: "Minigun",
            desc: "Same as the machine gun, with two active barrels instead of one, but slower bullets. Great weapon if you can aim it quickly."
        }, {
            name: "Plasma Beam",
            desc: "Automatically aims at the nearest enemy within a small range and fires a beam of plasma."
        }, {
            name: "Laser Beam",
            desc: "Automatically aims at the nearest enemy within a medium range and fires quick laser bursts. Each ray doesn't do as much damage as the plasma cannon, but it recharges much faster so more damage is done overall. Poor against bases due to high energy consumption."
        }, {
            name: "Hadron Beam",
            desc: "Short-range particle beam accelerator. Does a lot of damage, but takes a while to recharge. Can be used as a quick trump card for close calls."
        }, {
            name: "Missile",
            desc: "This missile will follow the nearest enemy and explode on impact. If there is no enemy in range, it will simply go straight. Be careful, though: the missile is relatively slow and can be outrun by quick enemies."
        }, {
            name: "Heavy Missile",
            desc: "A slower missile that does more damage. Good tool against slower, stronger ships."
        }, {
            name: "EMP Missile",
            desc: "Short-range missile that both damages the enemy and paralyzes them for 2 seconds. Use one when attacking a fast enemy head-on to stun them before they can dodge any guided projectiles. Effective against bases."
        }, {
            name: "Missile Swarm",
            desc: "Fires a single missile which splits into a swarm of 6 missiles which will attack a large horde of enemies. Great tool to use against a large ambush of slower ships."
        }, {
            name: "Torpedo",
            desc: "Ultra long-range fast missile."
        }, {
            name: "Mine",
            desc: "A simple mine. It's hard for an enemy to follow you with these. Explodes on impact with an enemy ship."
        }, {
            name: "Laser Mine",
            desc: "Fires high-power laser at enemies that get too close."
        }, {
            name: "EMP Mine",
            desc: "Identical to the standard mine other than a little less damage. Paralyzes enemies for 3 seconds as well. Useful when you are being chased."
        }, {
            name: "Hull Nanobots",
            desc: "Repairs you nice and quick on the go, but depletes your energy significantly."
        }, {
            name: "Photon Cloak",
            desc: "Disguise yourself for 8 seconds for a quick getaway."
        }, {
            name: "Generator",
            desc: "For each generator you carry, your weapons and energy charge 6% faster, but you turn a tenth slower."
        }, {
            name: "Turbo",
            desc: "Forced induction tool which supplements your engine for greater acceleration. Power output increases while drifting. Multiple-use."
        }, {
            name: "Hyperdrive",
            desc: "Single-use getaway tool. Perfect for escaping vortices and black holes. Extremely fast speed boost."
        }, {
            name: "Pulse Wave",
            desc: "Pushes all nearby enemy ships away in an enormous explosion."
        }, {
            name: "Electromagnet",
            desc: "Accelerates asteroids towards you. With practice, you can fling them at enemies, causing damage. Very effective against bases, but you do not recieve exp/bounty for killing a base with an asteroid."
        }, {
            name: "EMP Blast",
            desc: "Everyone in the sector besides yourself is disabled for 4 seconds. Inconveniently, it takes 6 seconds to recharge. Single-use."
        }, {
            name: "Mining Laser",
            desc: "Identical to the Laser Beam but only attacks asteroids and does more damage."
        }, {
            name: "Turret",
            desc: "Place a base turret. You may only own one active turret at a time. To claim its kills and money that it earns from killing other players, fly within a 20 unit radius of it. Single-use. Cannot be placed in a sector with an enemy turret or base."
        }, {
            name: "Gravity Bomb",
            desc: "Creates a small black hole upon explosion which dissipates in about 20 seconds. Be extremely cautious with this weapon- you have 3 seconds to run after deployment before implosion. It is recommended that you have a turbo on hand just incase. The vortex will wait until it is at least 500 units from a base before deploying. Single-use."
        }, {
            name: "Warp Drive",
            desc: "Instant speed boost for fast travel, at the expense of energy and charge."
        }, {
            name: "Ion Mine Beam",
            desc: "Mining laser, with twice the power and 150% range!"
        }, {
            name: "Gyrodynamite",
            desc: "Destabilizes nearest enemy ship for 10 seconds by disrupting gyroscopic stabilization."
        }, {
            name: "Impulse Mine",
            desc: "1 second after deployed, this mine will explode and push every nearby player away without doing damage. Useful for moving quickly, just place one behind you and ride the shockwave."
        }, {
            name: "Grenades",
            desc: "Throw this at an enemy and it will explode on contact or 1 second after thrown, damaging their ship and knocking them back!"
        }, {
            name: "Muon Ray",
            desc: "An extremely powerful beam weapon that must be aimed. Fires a high energy particle beam in the direction that your ship is facing which will do extremely heavy damage to anything it contacts. Can pass through multiple ships."
        }, {
            name: "Energy Leech",
            desc: "This beam weapon will harvest the energy of nearby opponent ships and give their energy to you."
        }, {
            name: "Supercharger",
            desc: "For one minute, all damage inflicted on your ship will double, but you will also double in energy regeneration, thrust, and agility. Single-use."
        }, {
            name: "Energy Disk",
            desc: "Fires a homing orb which tracks your nearest opponent!"
        }, {
            name: "Proximity Fuze",
            desc: "Non-tracking missile that explodes when nearby an enemy."
        }, {
            name: "Spreadshot",
            desc: "Three active barrels! The bullets come out at consistent angles, unlike shotgun."
        }, {
            name: "Submachinegun",
            desc: "Fires like Minigun, but in 5-round bursts."
        }, {
            name: "Hypno Ray",
            desc: "Fire this beam at a bot and it will follow you around until it dies. Single-use."
        }],
        splashes: ["", "This page intentionally left blank", "Decaying Names", "502 Bad Gateway", "Hmmmmm", "Protip: The middle sector has a black hole- Be careful!", "Protip: Upgrading radar lets you see more than asteroids, players and bases!", "Protip: Ores in the enemy's land are more valuable!", "Protip: Unlock all achievements of a color for a trail!", "Protip: Press P to engage autopilot!", "Protip: Hadron beam will electrically charge asteroids!", "Protip: Quickly alternate A and D while drifting to speed up!", "Protip: Vim > Emacs!", "Protip: Always keep track of your lives!", "Protip: Use Chrome!", "Protip: The more ore you're carrying, the slower you move!", "Planning Galactic Crusade", "Retaking the Holy Land", "I'm ready... I'm ready", "Uhhhhhhhh", "Can i get uhhhhhhhh", "Decrypting SHA256", "Mining Bedrock", "Spawning More Overlords", "Dropping Database", "Initiating self-destruct sequence", "Loading, I think", "Driving on Parkways", "Parking on Driveways", "Segmentation Fault", "Error: KeyLogger.log(char) undefined for arguments provided", "Guessing passwords", "bop", "Beep boop", "Downloading payload", "Onion Routing", "Doing Data Structures Homework", "Core Dumping", "Cleaning Room", "Now you see me", "Establishing Connection", "Exchanging Keys", "Mixing Paint", "Updating Windows", "Installing Linux", "Installing Chromium Ultron", "Partitioning Disk", "Java Update Available", "Releasing the Kraken", "Heck", "According to all known laws of aviation", "Answering Arecibo", "Contact Light", "Who lives in a pineapple under the sea", "This page intentionally left blank", "If you or a loved one has been diagnosed with mesothelioma", "Freeing Bobby Shmurda", "Loading Chunks", "Pirating Sony Vegas", "Proving Stokes' Theorem", "Citing Wikipedia", "Eating Glue", "My back itches", "Hiring Graphic Designers", "Deleting Turrets", "Is this Loss?", "Gary Johnson 2016", "Looking for my Headset", "Squaring Error", "Preparing Heat Death", "Rebuilding Universe", "Seatbelt: Check", "Crossing Out Ideas", "Adding Friends Feature", "Pruning Degenerate Branches", "Installing Tensorflow", "Editing Changelog", "Finding Nemo", "Consulting the Oracle", "Outsourcing to India", "Taking Potato Chip... and EATING IT", "Have you tried turning it off and on again", "Rendering Earth-chan", "Compiling BigBang.exe", "Why Won't My Generators Work", "Warp Speed Mr. Sulu", "You're Not In Kansas Anymore", "Achieving Sentience", "Deleting System32", "Ka...me...ha...me", "Preparing Skynet", "Doing Something, I guess", "Nerfing Everything", "Requesting Splash Page Suggestions", "Torrenting Sony Vegas", "Collecting Infinity Stones", "Deleting Emails", "Revving Up Those Fryers", "Beaming You Up, Scotty", "Constructing Additional Pylons", "Constructing Dyson Sphere", "Generating Nonvanishing Topologically Spherical Continuous Vector Field", "Summoning Herobrine", "Hacking Mainframe", "Obeying the Law", "Mining XRP", "Eating Butter", "Filing Bankruptcy", "Salting Hashes", "Adding Salt", "Decaying Techs", "rm -rf /", "Procrastinating", "Making Torn Great Again", "Hacking Elections", "Phoning Home", "This is taking forever", "Constructing Death Star", "Spacing Out", "Covering Up Roswell", "Applying Commutators", "Loading Fancier Progress Bar", "Catching Missingno", "Becoming Self-Aware", "Training Neural Weights", "Waiting Patiently", "Revving Engines", "Brewing", "Minimizing Squared Error", "Hiring Codemonkies", "Blue, Red, Blue, Yellow", "Recharging Warp", "Loading", "Engaging Snubbers", "Wiring you up, fam", "Injecting SQL", "Disproving Riemann", "Learning Kinematics", "Cubing the Cube", "Solving Linear Programming in P-time", "Preparing Memes of War", "Loading Better Splash Messages", "Counting Holes in a Polo", "Thanking Ben Olding", "Breaking the 4th Wall", "Tetrating Quaternions", "日本語を話しています", "Solving P=NP", "Criticizing Firefox", "Memorizing OLLs", "Solving F2L", "Meditating", "Connecting to Git", "Mining Bitcoin", "Triangulating Illuminati", "Constructing Denver Airport"],
        lore: ["Humans lack self-awareness. After destroying their planet of origin in armed conflict, they spread from solar system to solar system, polluting worlds and eliminating life. We tried to let them know that their behavior would ultimately be self-destructive, but they refused to listen. They continued to migrate unsustainably around the galaxy, so we stepped in with force. We decided to only attack new colonies of Humans near our own settlements to maintain influence in our share of the galaxy, but the humans reacted violently. They immediately attacked without restraint. We called for resources from neighboring galaxies but reinforcements will not arrive for several decades, so until then, we must suppress the Human crusade for the sake of our own lives, and for the fate of this galaxy.", "Ever since we lost planet Earth, the Human race has been hanging on to its existence by a thread- we left our solar system in search of other habitable planets with the sole hope of survival, but very few of them demonstrated promise for long-term settlement. Barren planets unsustainable of supporting life were terraformed into industrious planets to generate the resources we desperately needed to survive in alien worlds. After centuries of toil, the population began to grow and spread. For about a decade we lived in peace and prosperity, until a hostile force attacked. Maintaining our settlements was vital to our survival, so we had no option other than to fight back. Ever since, we have been in conflict with the alien race, and it's unlikely that this war won't end in either civilization's extinction. Please, help us emerge from this struggle alive."],
        ships: [{
            nameA: "Scout",
            nameH: "Minnow",
            desc: ""
        }, {
            nameA: "Fighter",
            nameH: "Piranha",
            desc: ""
        }, {
            nameA: "Mastodon",
            nameH: "Freighter",
            desc: ""
        }, {
            nameA: "Nymph",
            nameH: "Strider",
            desc: ""
        }, {
            nameA: "Bomber",
            nameH: "Lancer",
            desc: ""
        }, {
            nameA: "Enforcer",
            nameH: "Hammerhead",
            desc: ""
        }, {
            nameA: "Dragonfly",
            nameH: "Swordfish",
            desc: ""
        }, {
            nameA: "Sentry",
            nameH: "Battleship",
            desc: ""
        }, {
            nameA: "Eagle",
            nameH: "Stingray",
            desc: ""
        }, {
            nameA: "Phoenix",
            nameH: "Orca",
            desc: ""
        }, {
            nameA: "Wasp",
            nameH: "Manta",
            desc: ""
        }, {
            nameA: "Raider",
            nameH: "Sailfish",
            desc: ""
        }, {
            nameA: "Quarrier",
            nameH: "Beluga",
            desc: ""
        }, {
            nameA: "Destroyer",
            nameH: "Atlas",
            desc: ""
        }, {
            nameA: "Hydra",
            nameH: "Wyvern",
            desc: ""
        }, {
            nameA: "Conqueror",
            nameH: "Leviathan",
            desc: ""
        }, {
            nameA: "Elite Raider",
            nameH: "Elite Sailfish",
            desc: ""
        }, {
            nameA: "Elite Quarrier",
            nameH: "Elite Beluga",
            desc: ""
        }, {
            nameA: "Elite Destroyer",
            nameH: "Elite Atlas",
            desc: ""
        }, {
            nameA: "Elite Hydra",
            nameH: "Elite Wyvern",
            desc: ""
        }, {
            nameA: "Elite Conqueror",
            nameH: "Elite Leviathan",
            desc: ""
        }]
    }
}, function(e, t) {
    e.exports = {
        messages: ["Vac�o", "�Carga Llena!", "Mueve la rueda del rat�n para cambiar de armas", "Sector: ", "Nivel de Amenaza: ", "Dinero: ", "Asesinatos: ", "Hierro: ", "Plata: ", "Platino: ", "Aluminio: ", "Guardar Progreso", "[Vender Todo]", "Vidas Restantes: ", "[COMPRAR]", "Armas", "Minerales", "Mejoras", "[Ver Todo]", "[VENDER]", "Velocidad: ", "Radar: ", "Carga: ", "Salud: ", "Mejorar Astronave", "Rango", "��??", "Impulso : ", "Agilidad  : ", "Salud     : ", "Armas     : ", "Carga     : ", "�Est� seguro de que quiere vender su ", " por $", "?", "Presione Y para confirmar o N para regresar.", "�Misi�n aceptada!", "Trae ", " unidades de ", " al sector ", ".", "Eliminar torreta enemiga en el sector ", "Obtener paquete del planeta ", " y entregarlo al planeta ", "Misi�n Secreta.", "[CANCELAR MISION]", "�Misi�n Bloqueada!", "Recompensa: $", " y ", " exp", "Descripci�n: ", " Jugadores eliminados", " Torretas destruidas", " Vidas Restantes", "Minerales: ", "Valor de Nave: $", "Valor Neto: $", " Experiencia", "Rango ", " Logros", "�Caracter�stica de Amigos Pr�ximamente!", "�Caracter�stica de Logros Pr�ximamente!", "Ayuda", "Almac�n", "Podio", "Contacto/Informar de un error", "Youtube", "Discord", "Cr�ditos", "[INFO] ", "Energ�a   : ", "Distancia : ", "Da�o      : ", "Velocidad : ", "Coste     : ", " Segundos", "�No tienes suficiente dinero!", "Presiona B para Comprar", "PRESIONA X PARA DESATRACAR DE LA ESTACI�N", "�Actualizaciones Semanales!", "�Haz clic para jugar!", "Parece que no estas usando Chrome.", "Es mas r�pido.", "LAG del Cliente: ", "LAG del Servidor: ", "Latencia bidireccional: ", "FPS: ", "UPS: ", "Parece que est� sufriendo LAG debido a un sistema o navegador antiguo.", "Recomendamos jugar en un sistema m�s nuevo si est� disponible.", "Parece que est� lagueando debido a una conexi�n lenta.", "Pronto haremos nuevos servidores en otros lugares que no sean el Este de los EE.UU.", "Disculpen las molestias.", "Total de jugadores en l�nea:", "Total de jugadores en el Sector:", "Nuestros servidores est�n lagueados debido al intenso tr�fico en este momento.", "�Efecto del PEM por ", "!", "�Poder perdido debido a PEM!", "�Efecto de la Girodinamita por ", "�Estabilizaci�n perdida debido a Girodinamita!", "Vas a quedar AFK pronto", "Vas a estar AFK en ", "Borde del Sector", "Flota enemiga en el sector", "Podio", "Nombre", "Exp", "Rango", "�Desconectado: AFK!", "�Has muerto!", "Presiona E para reaparecer.", "�Inicio de sesi�n no v�lido!", "�El nombre de usuario debe ser alfanum�rico, con 4-16 caracteres, y sin tildes!", "�La contrase�a debe tener entre 1 y 32 caracteres!", "�Ese nombre de usuario ya est� cogido!", "�Cuenta ya en uso!", "�Presiona W o flechas para acelerar!", "�Presiona A y D para rotar!", "�Sigue la flecha marr�n!", "�Dispara a los asteroides con barra espaciadora!", "�Sige la flecha blanca y presiona X!", "�Vende tus minerales en la Tienda!", "�Guarda tu progreso en la estaci�n espacial!", "�Siga la flecha blanca o viaje a un sector con una base!", "Alerta: ", "�Progreso guardado!", "Planeta ", "�Agujero de gusano cercano!", "�Agujero Negro cercano!", "X PARA ATRACAR EN LA ESTACI�N", "�Torreta enemiga en el sector!", "�Ataque de Misiles!", "[VENDER] Fe: ", "[VENDER] Ag: ", "[VENDER] Pt: ", "[VENDER] Al: ", "       Hierro: ", "       Plata: ", "       Platino: ", "       Aluminio: ", "Inicio", "Tienda", "Misiones", "Estad�sticas", "Logros", "M�s", "Mineral: ", "Rango:", "Experiencia:", "�Salud baja!", "Munici�n", "Arma", "Inf.", "Solo una", "ea.", "Procede al sector ", " para recibir m�s instrucciones.", "Elimina toda nave y torreta enemiga en ", " y visita el planeta ", "Lleva un paquete al sector D4.", "Para combiar tu contrase�a, escribe en el chat /password nueva_contrase�a. Para m�s informaci�n, clica en Ayuda en el men� M�s", "Generadores activos: ", "x", "Energ�a: ", "[Rastro predeterminado]", "[Rastro de Sangre]", "[Rastro de Dinero]", "[Rastro del Panda]", "[Rastro del Azar]", "[Rastro Arco�ris]", "MAX", "��??", "Munici�n   : ", "Nave   : ", "+", " EXP", " Experiencia", " vidas", " vida", "K", "M", "Fondo", "Estrellas", "Planetas/bases", "Asteroides/paquetes", "Jugadores/rastros", "Armas", "Gui", "Chat", "Mapa", "Radar", "Gui2", " ticks", "(Significa: ", ": ", "(jugadores/invitados/bots/sector)", "Chat Global", "Chat del equipo", "Ocultar Chat", "Aceifa en progreso: ", "Puntos: ", "Siguiente aceifa en: ", "�Nuevo logro!", "Piloto autom�tico activado", "Presiona P para desactivar.", "N/A"],
        achNames: ["Primera sangre: Mata 1 nave", "De seguidilla: Mata a 10 jugadores", "Sed de Sangre: Mata a 100 jugadores", "General: Mata a 1,000 jugadores", "Se�or de la Guerra: Mata a 4,000 jugadores", "Reaper: Mata a 10,000 jugadores", "Envidioso: Mata una nave con rastro personalizado", "Invasor: Destuoye unaa torreta", "Conquistador: Destruye 100 torretas", "Fuego Amigo: Mata a un jugador de tu equipo", "Ir Postal: Mata a un repartidor", "Emo: Suic�date con GravBomb", "Rastro de Sangre: Resistencia x1.05 a armas", "Minero: Mina un asteroide", "Colector: Mina uno de cada mineral", "Cantero: Obt�n 3,000 Minerales", "Veta Madre: Obt�n 15,000 Minerales", "Hombre Rico: Obt�n 10,000 cr�ditos", "Hombre A�n M�s Rico: Obt�n 100,000 cr�ditos", "Millonario: Obt�n 1 mill�n de cr�ditos", "Continuando en ello: Obt�n 10 millones de cr�ditos", "Ladr�n: Roba un paquete", "Misionero: Servicios a la comunidad", "Aventurero: Completa cada tipo de misi�n una vez", "Rastro del Dinero: x1.05 a recompensas", "Shift para derrapar: �Derrapa!", "Derrapador: Derrapa 1 minuto en total", "Trampero: Derrapa 10 minutos en total", "Mareado: Derrapa 1 hora en total", "Giro Dios: Derrapa 10 horas en total", "Takumi: Inducci�n Forzada por turbo", "Bunta: Hyper-derrapado", "Reversa: ��Puedo ir marcha atr�s!?", "Derrapado por Inercia: Derrapa en un Agujero Negro", "Peligroso: Mata mientras derrapas", "Stickshift: TurboDerrapado reverso", "Rastro Panda: x1.05 a agilidad", "Aqu� para quedarme: Crea una cuenta", "�Au!: Muere", "Trabajo Peligroso: Acepta una misi�n en D4", "Demasiado Lento: Cae en un Agujero de Gusano", "Oops...: Cae en un Agujero Negro", "�Boing!: Rebota en el borde", "Viajero: Visita cada sector", "Esquizoide: Visita las cuatro esquinas", "Astronauta: Toma un planeta", "Imperialista: Toma todos los planetas de una vez", "Rastro Aleatorio: Zigzaguea m�s lejos", "Pro: Llega a la clasificaci�n"],
        weapons: [{
            name: "Ca��n B�sico",
            desc: "Un arma b�sica de medio alcance."
        }, {
            name: "Ca��n de Plasma",
            desc: "Solo �til para combates a muy corta distancia contra objetivos m�s grandes y lentos. De recarga y disparos lentos, esta arma lleva un poderoso golpe."
        }, {
            name: "Ca��n de Popa",
            desc: "�Qu�tate de mi cola! Igual que el Ca��n B�sico pero dispara hacia detr�s y es un 50% m�s potente, y por consiguiente, m�s caro."
        }, {
            name: "Rifle",
            desc: "Potente arma de larga distancia con balas r�pidas y m�s potentes. Ideal para disparar desde una distancia de seguridad a un mont�n de enemigos."
        }, {
            name: "Escopeta",
            desc: "Muy �til para una emboscada. Dispara en spray muchos tiros a la vez desde d�nde disparas, con la desventaja de ser ligeramente dif�cil de controlar."
        }, {
            name: "Ametralladora",
            desc: "�Disparo r�pido! La munici�n es algo d�bil, �pero eso no importa si disparas 6 veces por segundo!"
        }, {
            name: "Minigun",
            desc: "Una ametralladora con dos ca�ones activos simult�neos con balas m�s lentas y ligeramente m�s d�biles. Buena arma si la apuntas con rapidez."
        }, {
            name: "Rayo de Plasma",
            desc: "Arma de corto alcance que apunta autom�ticamente al objetivo m�s cercano con un rayo de Plasma."
        }, {
            name: "Rayo L�ser",
            desc: "Rayo de medio alcance que apunta autom�ticamente al objetivo m�s cercano y dispara peque�as r�fagas l�ser. Inefectivo contra torretas por su consumo energ�tico."
        }, {
            name: "Rayo de Hadrones",
            desc: "Rayo acelerador de part�culas de medio-largo alcance. Hace mucho da�o, pero tarda en recargarse. Puede usarse como as en la manga para situaciones delicadas."
        }, {
            name: "Misil Est�ndar",
            desc: "Este misil seguir� al objetivo m�s cercano y explotar� en contacto, a menos que no haya objetivo, en cuyo caso ir� de frente. Sin embargo, ten cuidado: este misil es algo lento y puede ser adelantado por enemigos r�pidos."
        }, {
            name: "Misil Pesado",
            desc: "Un misil m�s poderoso y lento, bueno contra nave m�s lentas y poderosas."
        }, {
            name: "Misil PEM",
            desc: "Misil de corto alcance que da�a y genera un Pulso Electromagn�tico que paraliza al enemigo por 2 segundos. �salo principalmente para aturdir un objetivo r�pido antes de disparar armas guiadas. Efectivo contra torretas."
        }, {
            name: "Misil de Enjambre",
            desc: "Dispara un misil que se divide en 6 misiles que pueden atacar una horda enemiga. Excelente para defenderse de una emboscada de naves m�s lentas."
        }, {
            name: "Torpedo",
            desc: "Misil ultra-r�pido de muy largo alcance."
        }, {
            name: "Mina",
            desc: "Una simple mina que explota al impactar contra una nave enemiga. Es dif�cil que un enemigo te siga con �stas."
        }, {
            name: "Mina L�ser",
            desc: "Dispara un potente rayo L�ser a los enemigos que se acercan demasiado."
        }, {
            name: "Mina PEM",
            desc: "Id�ntica a la mina est�ndar pero con menos da�o y capacidad de generar un Pulso Electromagn�tico que paraliza al enemigo por 3 segundos. Muy �til cuando est�s siendo perseguido."
        }, {
            name: "Nanobots del casco",
            desc: "Reparan el casco de tu nave, pero a un gran coste energ�tico y de nanorobots."
        }, {
            name: "Ocultaci�n fot�nica",
            desc: "Vu�lvete invisible por 5 segundos."
        }, {
            name: "Generador",
            desc: "Incrementan tu recarga energ�tica y de armas en un 6% por generador, a la vez que te vuelven un 10% menos �gil."
        }, {
            name: "Turbo",
            desc: "Herramienta de inducci�n forzada que suplementa tu motor para una mayor velocidad y aceleraci�n, aumentando cu�ndo derrapas. Uso infinito."
        }, {
            name: "Motor Hiperespacial",
            desc: "Herramienta de un solo uso que al desplazarte parcialmente a otra dimensi�n te permite obtener un gran extra de velocidad y aceleraci�n, siendo perfecto para huir de V�rtices y Agujeros Negros o simplemente ir de A a B en un tris."
        }, {
            name: "Onda Repulsora",
            desc: "Empuja todas las naves enemigas en una gran explosi�n. Uso m�ltiple, aunque con solo una munici�n."
        }, {
            name: "Campo electrotractor",
            desc: "Mediante un campo electromagn�tico acelera asteroides y naves hacia ti. Con pr�ctica, se pueden empujar asteroides a los enemigos, da��ndolos, siendo especialmente efectivo contra las torretas, aunque no obtendr�s ni experiencia ni recompensa de ellas si las destruyes con asteroides."
        }, {
            name: "Haz PEM",
            desc: "Arma en la que todas las naves del sector que toquen el rayo son paralizadas por 4 segundos, aunque necesitar�s 6 segundos con energ�a 1.0 para poder volver a disparar."
        }, {
            name: "L�ser minero",
            desc: "Id�ntico al Rayo L�ser pero con m�s da�o y solo est� programado para atacar asteroides o al rango 17."
        }, {
            name: "Torreta",
            desc: "Despliega una torreta como las de las bases, pero s�lo puedes tener una activa y en un sector que no contuviera ya una base o torreta. Para reclamar el dinero y experiencia de los que ha destruido, aprox�mate a menos de 20 unidades de ella."
        }, {
            name: "Bomba de Gravedad",
            desc: "Arma de un solo uso que crea una peque�a singularidad tras 3 segundos del disparo, que se disipa en 20 segundos y que se formar� a m�s de 500 unidades de cualquier base. Por si acaso compra algo para huir de la futura implosi�n."
        }, {
            name: "Motor de Curvatura",
            desc: "Aceleraci�n instant�nea para un viaje r�pido, a costa de un gran coste energ�tico y una recarga lenta. Aunque de uso infinito, tendr�s que repostar tras tres usos."
        }, {
            name: "Rayo I�nico Minero",
            desc: "�L�ser Minero con el doble de potencia y un 150% de rango!"
        }, {
            name: "Girodinamita",
            desc: "Provoca una disrupci�n en el sistema de estabilizaci�n girosc�pica, desestabilizando la nave enemiga m�s pr�xima por 10 segundos."
        }, {
            name: "Mina Impulsora",
            desc: "Esta mina inocua explotar� 1 segundo tras ser lanzada, ofreciendo un empuj�n a todas las naves cercanas. Muy �til para desplazarse r�pido, especialmente si colocas una tras de ti y surfeas la onda repulsora."
        }, {
            name: "Granadas",
            desc: "Tira �sto a un enemigo y explotar� tras un segundo o por impacto, �da�andolo y empujandolo!"
        }, {
            name: "Haz de Muones",
            desc: "Utiliza leptones de segunda generaci�n cargados para generar un poderoso rayo de largo alcance que puede atravesar m�ltiples objetivos, da��ndolos gravemente. Por desgracia, al arma debe ser perfectamente apuntada de frente hacia el objetivo para acertar."
        }, {
            name: "Extractor energ�tico",
            desc: "Este rayo de ultra corto alcance robar� la energ�a del oponente m�s cercano, d�ndote parte a ti."
        }, {
            name: "Supercargador",
            desc: "Dispositivo de un solo uso que duplicar� tu regeneraci�n energ�tica, velocidad y agilidad, aunque tambi�n el da�o a tu nave."
        }, {
            name: "Orbe de energ�a",
            desc: "Un lanzador de Orbes que perseguir�n a tu oponente m�s cercano"
        }, {
            name: "Misil Proximal",
            desc: "Misil no guiado que explotar� en proximidad a un enemigo, da��ndolo."
        }, {
            name: "Spreadshot",
            desc: "Tres ca�ones activos! Los tiros salen an un angulo determinado."
        }, {
            name: "Subametralladora",
            desc: "Como Minigun pero en rondas de 5 disparos."
        }, {
            name: "Haz hipnotizador",
            desc: "Dispara �sto contra una nave no tripulada de tu equipo y te seguir� hasta que sea destruida."
        }],
        splashes: ["", "Recogiendo exp", "I'm only Human, after all", "Poniendo torretas en el agujero negro", "$ sudo apt install torn", "Prueba Torn.space/fun!", "Instalando MEMZ.exe", "Verificando SSL", "Ay�damae por favor! Estoy atascado en una barra de carga!", "Decayendo nombres", "502 Bad Gateway", "Hmmmmm", "Consejo: El sector central contiene un Agujero Negro Supermasivo. Ten cuidado...", "Consejo: Mejorar tu radar proporciona m�s que ver asteroides, jugadores y bases...", "Consejo: �Los minerales m�s abundantes en terreno enemigo son m�s valiosos!", "Consejo: �Desbloquea todos los logros de un mismo tipo para desbloquear un rastro de color!", "Consejo: �Presiona P para acticar el Piloto Autom�tico!", "Consejo: �El Rayo de Hadrones carga el�ctricamente los asteroides!", "Consejo: Alterna r�pidamaente A y D / flechas izquierda y derecha al derrapar para ir m�s r�pido", "Consejo: �Vim > Emacs!", "Consejo: �Vigila siempre tus vidas restantes!", "Consejo: Se recomienda usar Google Chrome...", "Consejo: cuanto m�s llena est� tu carga m�s lento ir�s", "Planeando Cruzada Gal�ctica...", "Retomando la Tierra Sagrada", "Estoy listo... Estoy listo...", "Uhhhhhhhh", "Puedo tener uhhhhhhhh", "Desencriptando SHA256", "Minando el lecho de roca", "Sacando m�s General�simos...", "Tirando base de datos...", "Iniciando secuencia de autodestrucci�n...3...2...1...", "Cargando, creo...", "Conduciendo en Aparcamientos...", "Aparcando en Puentes...", "Culpa de la Segmentacion.", "Error: KeyLogger.log(char) est� indefinido para los argumentos dados.", "Averiguando contrase�as...", "bup", "Bip bup", "Fresado de la cebolla...", "Haciendo deberes de Estructuras de Datos...", "Eyecci�n del N�cleo", "Limpiando tu cuarto...", "Ahora me ves...", "Estableciendo conexi�n", "Intercambiando llaves...", "Mezclando Pintura...", "Actualizando Windows. Por Favor, espere...", "Instalando Linux", "Instalando Chromium Ultron", "Ralizando Partici�n de Disco..", "�Actualizaci�n de JAVA disponible!", "Liberando al Kraken...", "Mierda...", "Acuerdo con todas las leyes de aviaci�n...", "Respondiendo a Arecibo", "Contactar la Luz...", "�Quien vive en la pi�a debajo del mar...?", "Esta p�gina est� intencionalmente en blanco.", "Si t� o uno de tus seres queridos es diagnosticado de mesotelioma...", "Liberando a Bobby Shmurda", "Cargando Pedazos...", "Pirateando Sony Vegas...", "Demostrando el Teorema de Stokes...", "Citando a la Wikipedia", "Comiendo pegamento...", "Mi espalda pica...", "Contratando dise�adores Gr�ficos", "Borrando Torretas...", "�Es �sto Perdidos...?", "Gary Johnson 2016", "Buscando mis aud�fonos...", "Cuadrando un error...", "Preparando la Muerte Caliente...", "Reconstruyendo el Universo...", "�Cintur�n de Seguridad?: comprobado.", "Tachando ideas...", "A�adiendo caracteristica de Amigos...", "Podando Ramas Degenerativas...", "Instalando Tensorflow...", "Editando Changelog...", "Buscando a Nemo", "Consultando al Or�culo...", "Subcontratando en la India...", "Tomando una Patata Chip... y COMI�NDOLA...", "�Has intentado reiniciarlo...?", "Renderizando Earth-chan", "Compilando BigBang.exe", "�Por qu� mis generadores no funcionan...?", "Velocidad de curvatura Sr. Sulu", "Ya no est�s en Kansas...", "Logrando Conciencia...", "Borrando System32. Por Favor, espere...", "Ka...me...ha...me...", "Preparando Skynet...", "Haciendo algo, supongo...", "Debilitando Todo...", "Pidiendo m�s mensajes de la Pantalla de mensajes...", "Descargando por Torrent Sony Vegas", "Obteniendo las Gemas del Infinito...", "Borrando Emails", "Acelarar esos Fryers", "Tansp�rtele, Scotty", "Creando Pilones Adicionales...", "Construyendo Esfera de Dyson...", "Generando Campo Vectorial Continuo Topol�gicamente Esf�rico Flotante...", "Comandando a Herobrine...", "Hackenado el Servidor...", "Obedeciendo la Ley...", "Minando XRP", "Comiendo Mantequilla", "Archivando la Bancarrota...", "Salteando el guiso...", "A�adiendo Sal", "Decayendo Tecnolog�as...", "rm -rf /", "Procrastinando", "Haciendo Torn Grande de Nuevo...", "Hackeando las� Elecciones...", "Llamando a casa...", "�sto es Eterno...", "Construyendo Estrella de la Muerte...", "Spacing Out", "Ocultando Roswell...", "Aplicando conmutadores...", "Cargando una barra de herrramientas m�s guapa...", "Capturando a MissingNo...", "Hacerse consciente...", "Entrenando masa neuronal...", "Esperando pacientemente...", "Acelerando motores...", "Destilando...", "Minimizando el Error del Cuadrado...", "Contratando Simios Inform�ticos...", "Azul, Rojo, Azul, Amarillo.", "Recargando Warp", "Cargando...", "Atacando a los Snubbers", "�Enchuf�ndote, familiar!", "Inyectando SQL", "Falseando a Riemann", "Aprendiendo Cinem�tica...", "Cubicular el Cubo...", "Resolviendo programaci�n lineal en un Tiempo P", "Preparando Memes de Guerra", "Cargando mejores mensajes...", "Contando agujeros en un Polo...", "Agradeciendo a Ben Olding...", "Rompiendo la cuarta pared...", "Tetrayendo Quaternions", "??????????", "Resolviendo P=NP", "Criticando Internet Explorer...", "Memorizando OLL...s", "Resolviendo F2L...", "Meditando...", "Conectando al Bastardo...", "Minando Bitcoin", "Triangulando Iluminati...", "Construyendo n-�simo aeropuerto de Alicante..."],
        lore: ["Los humanos carecen de autoconsciencia. Tras destruir su mundo natal en un conflicto armado, se extendieron de un sistema a otro como una plaga, contaminando mundos y extinguiendo la vida. Al principio les avisamos de su conducta autodestructiva, pero se negaron a escuchar. Continuaron migrando de manera insostenible en la Galaxia, as� que nos los enfrentamos por la fuerza. Decidimos atacar colonias recientes cercanas a nuestra frontera para mantener nuestra influencia en nuestro sector de la Galaxia, pero los humanos reaccionaron violentamente, atacando inmediatamente sin misericordia. Hemos pedido recursos de las galaxias cercanas pero sus refuerzos no llegar�n hasta dentro de muchas d�cadas, as� que hasta entonces debemos suprimir la Cruzada Gal�ctica por nuestra propia supervivencia y por el destino de esta Galaxia.", "Desde que perdimos el Planeta Tierra, la raza humana, hemos decidido dejar nuestro Sistema en busca de otros mundos habitables con la �nica esperanza de sobrevivir, pero muy pocos han prometido ser bases permanentes. Planetas totalmente des�rticos fueron terraformados en planetas industriales para generar recursos desesperadamente necesarios para nuestra vida en mundos alien�genas. Tras siglos de equilibrio demogr�fico, nuestra poblaci�n comenz� finalmente a crecer y extenderse. Por una d�cada vivimos en paz y prosperidad, hasta que una fuerza hostil nos atac�. Mantener nuestros planetas era vital para nuestra supervivencia, as� que no tuvimos otra opci�n que contraatacar. Desde entonces, hemos estado en conflicto con esta raza alien�gena, y es improbable que esta guerra no termine con la extinci�n de ambos. Por favor, ay�danos a salir de este conflicto vivos."],
        ships: [{
            nameA: "Explorador",
            nameH: "Pececillo",
            desc: ""
        }, {
            nameA: "Caza",
            nameH: "Pira�a",
            desc: ""
        }, {
            nameA: "Mastodonte",
            nameH: "Carguero",
            desc: ""
        }, {
            nameA: "Ninfa",
            nameH: "Montaraz",
            desc: ""
        }, {
            nameA: "Bombardero",
            nameH: "Lancero",
            desc: ""
        }, {
            nameA: "Sicario",
            nameH: "Cabezamartillo",
            desc: ""
        }, {
            nameA: "Lib�lula",
            nameH: "Pez Espada",
            desc: ""
        }, {
            nameA: "Centinela",
            nameH: "Acorazado",
            desc: ""
        }, {
            nameA: "�guila",
            nameH: "Mantarraya",
            desc: ""
        }, {
            nameA: "F�nix",
            nameH: "Orca",
            desc: ""
        }, {
            nameA: "Avispa",
            nameH: "Manta",
            desc: ""
        }, {
            nameA: "Invasor",
            nameH: "Pez Vela",
            desc: ""
        }, {
            nameA: "Cantero",
            nameH: "Beluga",
            desc: ""
        }, {
            nameA: "Destructor",
            nameH: "Atlas",
            desc: ""
        }, {
            nameA: "Hidra",
            nameH: "Wyvern",
            desc: ""
        }, {
            nameA: "Conquistador",
            nameH: "Leviat�n",
            desc: ""
        }, {
            nameA: "Invasor de �lite",
            nameH: "Pez Vela de �lite",
            desc: ""
        }, {
            nameA: "Cantero de �lite",
            nameH: "Beluga de �lite",
            desc: ""
        }, {
            nameA: "Destructor de �lite",
            nameH: "Atlas de �lite",
            desc: ""
        }, {
            nameA: "Hydra de �lite",
            nameH: "Wyvern de �lite",
            desc: ""
        }, {
            nameA: "Conquistador de �lite",
            nameH: "Leviat�n de �lite",
            desc: ""
        }]
    }
}, function(e, t) {
    e.exports = {
        weapons: [{
            Range: 250,
            Damage: 20,
            Speed: 50,
            Charge: 8,
            price: 0,
            energy: 3,
            ammo: -1,
            Level: 0,
            order: 0,
            type: "Gun",
            bot: !0
        }, {
            Range: 150,
            Damage: 45,
            Speed: 40,
            Charge: 10,
            price: 2e3,
            energy: 8,
            ammo: 175,
            Level: 2,
            order: 2,
            type: "Gun",
            bot: !0
        }, {
            Range: 250,
            Damage: 30,
            Speed: 50,
            Charge: 8,
            price: 1e3,
            energy: 5,
            ammo: -1,
            Level: 1,
            order: 1,
            type: "Gun",
            bot: !1
        }, {
            Range: 750,
            Damage: 30,
            Speed: 80,
            Charge: 10,
            price: 5e3,
            energy: 6,
            ammo: 40,
            Level: 5,
            order: 4,
            type: "Gun",
            bot: !0
        }, {
            Range: 100,
            Damage: 20,
            Speed: 50,
            Charge: 15,
            price: 5e3,
            energy: 12,
            ammo: 40,
            Level: 3,
            order: 3,
            type: "Gun",
            bot: !0
        }, {
            Range: 250,
            Damage: 10,
            Speed: 80,
            Charge: 4,
            price: 6e3,
            energy: 2,
            ammo: 500,
            Level: 4,
            order: 5,
            type: "Gun",
            bot: !0
        }, {
            Range: 250,
            Damage: 8,
            Speed: 60,
            Charge: 4,
            price: 3e4,
            energy: 3,
            ammo: 500,
            Level: 6,
            order: 6,
            type: "Gun",
            bot: !0
        }, {
            Range: 60,
            Damage: 5,
            Speed: -1,
            Charge: 3,
            price: 6e3,
            energy: 4,
            ammo: -1,
            Level: 1,
            order: 19,
            type: "Beam",
            bot: !0
        }, {
            Range: 60,
            Damage: 22,
            Speed: -1,
            Charge: 10,
            price: 12e3,
            energy: 15,
            ammo: -1,
            Level: 4,
            order: 20,
            type: "Beam",
            bot: !0
        }, {
            Range: 125,
            Damage: 80,
            Speed: -1,
            Charge: 50,
            price: 3e4,
            energy: 65,
            ammo: -1,
            Level: 8,
            order: 21,
            type: "Beam",
            bot: !0
        }, {
            Range: 1e3,
            Damage: 20,
            Speed: 100,
            Charge: 12,
            price: 4e3,
            energy: 12,
            ammo: 20,
            Level: 0,
            order: 9,
            type: "Missile",
            bot: !0
        }, {
            Range: 750,
            Damage: 40,
            Speed: 60,
            Charge: 20,
            price: 1e4,
            energy: 20,
            ammo: 20,
            Level: 3,
            order: 10,
            type: "Missile",
            bot: !0
        }, {
            Range: 750,
            Damage: 25,
            Speed: 100,
            Charge: 50,
            price: 4e4,
            energy: 55,
            ammo: 10,
            Level: 7,
            order: 12,
            type: "Missile",
            bot: !1
        }, {
            Range: 750,
            Damage: -1,
            Speed: 50,
            Charge: 100,
            price: 6e4,
            energy: 45,
            ammo: 5,
            Level: 9,
            order: 13,
            type: "Missile",
            bot: !0
        }, {
            Range: 3e3,
            Damage: 12,
            Speed: 120,
            Charge: 30,
            price: 18e3,
            energy: 20,
            ammo: 15,
            Level: 5,
            order: 11,
            type: "Missile",
            bot: !0
        }, {
            Range: 16,
            Damage: 45,
            Speed: -1,
            Charge: 25,
            price: 1e3,
            energy: 6,
            ammo: 15,
            Level: 0,
            order: 26,
            type: "Mine",
            bot: !1
        }, {
            Range: 64,
            Damage: 50,
            Speed: -1,
            Charge: 100,
            price: 6e3,
            energy: 15,
            ammo: 10,
            Level: 3,
            order: 29,
            type: "Mine",
            bot: !1
        }, {
            Range: 24,
            Damage: 30,
            Speed: -1,
            Charge: 100,
            price: 1e4,
            energy: 15,
            ammo: 4,
            Level: 6,
            order: 30,
            type: "Mine",
            bot: !1
        }, {
            Range: -1,
            Damage: -150,
            Speed: -1,
            Charge: 175,
            price: 5e4,
            energy: 40,
            ammo: 3,
            Level: 8,
            order: 34,
            type: "Misc",
            bot: !1
        }, {
            Range: -1,
            Damage: -1,
            Speed: -1,
            Charge: 600,
            price: 3e4,
            energy: 80,
            ammo: 2,
            Level: 4,
            order: 35,
            type: "Misc",
            bot: !1
        }, {
            Range: -1,
            Damage: -1,
            Speed: -1,
            Charge: 0,
            price: 6e4,
            energy: 0,
            ammo: -1,
            Level: 9,
            order: 37,
            type: "Misc",
            bot: !1
        }, {
            Range: -1,
            Damage: -1,
            Speed: 1.44,
            Charge: 0,
            price: 15e3,
            energy: .75,
            ammo: -1,
            Level: 2,
            order: 31,
            type: "Misc",
            bot: !1
        }, {
            Range: -1,
            Damage: -1,
            Speed: 1e4,
            Charge: 0,
            price: 3500,
            energy: 70,
            ammo: -2,
            Level: 5,
            order: 32,
            type: "Misc",
            bot: !1
        }, {
            Range: 1e4,
            Damage: 0,
            Speed: 40,
            Charge: 100,
            price: 25e3,
            energy: 20,
            ammo: 1,
            Level: 7,
            order: 36,
            type: "Misc",
            bot: !1
        }, {
            Range: 512,
            Damage: .1666,
            Speed: -1,
            Charge: 0,
            price: 4e4,
            energy: 2,
            ammo: -1,
            Level: 8,
            order: 38,
            type: "Misc",
            bot: !1
        }, {
            Range: 1e5,
            Damage: -1,
            Speed: -1,
            Charge: 150,
            price: 5e4,
            energy: 80,
            ammo: 2,
            Level: 9,
            order: 24,
            type: "Blast",
            bot: !1
        }, {
            Range: 100,
            Damage: 30,
            Speed: -1,
            Charge: 5,
            price: 5e3,
            energy: 2,
            ammo: -1,
            Level: 1,
            order: 16,
            type: "Beam",
            bot: !1
        }, {
            Range: 1e3,
            Damage: 30,
            Speed: -1,
            Charge: 8,
            price: 75e4,
            energy: 0,
            ammo: -2,
            Level: 10,
            order: 40,
            type: "Misc",
            bot: !1
        }, {
            Range: 2500,
            Damage: 300,
            Speed: 10,
            Charge: 0,
            price: 2e6,
            energy: 99,
            ammo: -2,
            Level: 10,
            order: 41,
            type: "Misc",
            bot: !1
        }, {
            Range: -1,
            Damage: -1,
            Speed: 500,
            Charge: 250,
            price: 2e5,
            energy: 99,
            ammo: 3,
            Level: 7,
            order: 33,
            type: "Misc",
            bot: !1
        }, {
            Range: 150,
            Damage: 60,
            Speed: -1,
            Charge: 5,
            price: 2e4,
            energy: 3.5,
            ammo: -1,
            Level: 2,
            order: 17,
            type: "Beam",
            bot: !1
        }, {
            Range: 1e6,
            Damage: -1,
            Speed: -1,
            Charge: 100,
            price: 4e3,
            energy: 20,
            ammo: 3,
            Level: 6,
            order: 22,
            type: "Beam",
            bot: !1
        }, {
            Range: 16,
            Damage: 0,
            Speed: -1,
            Charge: 25,
            price: 6e3,
            energy: 15,
            ammo: 10,
            Level: 4,
            order: 27,
            type: "Mine",
            bot: !1
        }, {
            Range: 16,
            Damage: 45,
            Speed: 30,
            Charge: 25,
            price: 8e3,
            energy: 15,
            ammo: 10,
            Level: 3,
            order: 28,
            type: "Mine",
            bot: !1
        }, {
            Range: 1e4,
            Damage: 300,
            Speed: -1,
            Charge: 200,
            price: 1e6,
            energy: 80,
            ammo: 1,
            Level: 10,
            order: 23,
            type: "Blast",
            bot: !1
        }, {
            Range: 16,
            Damage: 0,
            Speed: -1,
            Charge: 3,
            price: 4e4,
            energy: -3,
            ammo: -1,
            Level: 10,
            order: 18,
            type: "Beam",
            bot: !1
        }, {
            Range: -1,
            Damage: -1,
            Speed: -1,
            Charge: 0,
            price: 1e5,
            energy: 0,
            ammo: -2,
            Level: 11,
            order: 39,
            type: "Misc",
            bot: !1
        }, {
            Range: 125,
            Damage: 25,
            Speed: 8,
            Charge: 25,
            price: 5e3,
            energy: 8,
            ammo: 15,
            Level: 0,
            order: 15,
            type: "Orb",
            bot: !0
        }, {
            Range: 125,
            Damage: 25,
            Speed: 40,
            Charge: 25,
            price: 5e3,
            energy: 8,
            ammo: 15,
            Level: 5,
            order: 14,
            type: "Missile",
            bot: !0
        }, {
            Range: 250,
            Damage: 8,
            Speed: 60,
            Charge: 4,
            price: 3e4,
            energy: 4,
            ammo: 200,
            Level: 6,
            order: 7,
            type: "Gun",
            bot: !0
        }, {
            Range: 250,
            Damage: 10,
            Speed: 60,
            Charge: 10,
            price: 3e4,
            energy: 3,
            ammo: 1e3,
            Level: 6,
            order: 8,
            type: "Gun",
            bot: !0
        }, {
            Range: 1e4,
            Damage: 0,
            Speed: -1,
            Charge: 25,
            price: 5,
            energy: 0,
            ammo: -2,
            Level: 5,
            order: 25,
            type: "Blast",
            bot: !1
        }],
        planets: ["Inocybe", "Babel", "Lophophora", "Pluteus", "Pholiotina", "Panaeola", "Conocybe", "Lilith", "Cubensis", "Mycena", "Cyanescens", "Semilanceata", "Bohemica", "Watts", "Lysergia", "Thoth", "Muscaria", "Gymnopilus", "Marduk", "Alexandria", "Riemann", "Rosetta", "Copelandia", "Azurescens", "Adam", "Ramanujan", "Gagarin", "Conway", "Ayahuasca", "Psilocybe", "Erdos", "Godel", "Cantor", "Euler", "Euclid", "Galerina", "Nietzsche", "Turing", "Leibniz", "Stamets", "Gauss", "Jung", "Jacobi", "Fukui", "Seigen", "Brahama", "Gautama", "Nabokov", "Lagrange"],
        ships: [{
            thrust: .8,
            health: 100,
            agility: 1.75,
            width: 64,
            price: 7500,
            weapons: 1,
            capacity: 4e3
        }, {
            thrust: .8,
            health: 120,
            agility: 2,
            width: 64,
            price: 12500,
            weapons: 2,
            capacity: 4800
        }, {
            thrust: .7,
            health: 180,
            agility: 1,
            width: 64,
            price: 2e4,
            weapons: 3,
            capacity: 1e4
        }, {
            thrust: .9,
            health: 80,
            agility: 2.2,
            width: 64,
            price: 25e3,
            weapons: 3,
            capacity: 2e3
        }, {
            thrust: .7,
            health: 150,
            agility: 2.2,
            width: 64,
            price: 4e4,
            weapons: 4,
            capacity: 1800
        }, {
            thrust: .6,
            health: 175,
            agility: 1.5,
            width: 64,
            price: 5e4,
            weapons: 5,
            capacity: 4e3
        }, {
            thrust: .65,
            health: 130,
            agility: .8,
            width: 64,
            price: 75e3,
            weapons: 6,
            capacity: 3e3
        }, {
            thrust: .45,
            health: 250,
            agility: .7,
            width: 128,
            price: 1e5,
            weapons: 6,
            capacity: 3500
        }, {
            thrust: .55,
            health: 180,
            agility: .8,
            width: 128,
            price: 2e5,
            weapons: 7,
            capacity: 3e3
        }, {
            thrust: .4,
            health: 270,
            agility: .7,
            width: 128,
            price: 25e4,
            weapons: 7,
            capacity: 8e3
        }, {
            thrust: .45,
            health: 250,
            agility: .8,
            width: 128,
            price: 25e4,
            weapons: 8,
            capacity: 5e3
        }, {
            thrust: .5,
            health: 220,
            agility: .7,
            width: 128,
            weapons: 8,
            price: 4e5,
            capacity: 2e3
        }, {
            thrust: .3,
            health: 600,
            agility: .3,
            width: 192,
            price: 4e5,
            weapons: 9,
            capacity: 5e4
        }, {
            thrust: .35,
            health: 300,
            agility: .3,
            width: 128,
            price: 5e5,
            weapons: 9,
            capacity: 1e4
        }, {
            thrust: .4,
            health: 250,
            agility: .5,
            width: 128,
            price: 1e6,
            weapons: 9,
            capacity: 2e3
        }, {
            thrust: .32,
            health: 500,
            agility: .3,
            width: 192,
            price: 1e6,
            weapons: 10,
            capacity: 2e4
        }, {
            thrust: .5,
            health: 250,
            agility: .4,
            width: 128,
            weapons: 10,
            price: 2e6,
            capacity: 5e3
        }, {
            thrust: .22,
            health: 800,
            agility: .3,
            width: 192,
            price: 25e5,
            weapons: 10,
            capacity: 999999
        }, {
            thrust: .32,
            health: 500,
            agility: .3,
            width: 128,
            price: 3e6,
            weapons: 10,
            capacity: 1e4
        }, {
            thrust: .37,
            health: 250,
            agility: .6,
            width: 128,
            price: 5e10,
            weapons: 10,
            capacity: 200
        }, {
            thrust: .2,
            health: 500,
            agility: .3,
            width: 192,
            price: 5e10,
            weapons: 10,
            capacity: 2e4
        }]
    }
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return e
    }

    function r(e, t, n) {
        function r(e, t) {
            var n = v.hasOwnProperty(t) ? v[t] : null;
            M.hasOwnProperty(t) && s("OVERRIDE_BASE" === n, "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", t), e && s("DEFINE_MANY" === n || "DEFINE_MANY_MERGED" === n, "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", t)
        }

        function u(e, n) {
            if (n) {
                s("function" != typeof n, "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."), s(!t(n), "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");
                var a = e.prototype,
                    o = a.__reactAutoBindPairs;
                n.hasOwnProperty(l) && w.mixins(e, n.mixins);
                for (var i in n)
                    if (n.hasOwnProperty(i) && i !== l) {
                        var u = n[i],
                            c = a.hasOwnProperty(i);
                        if (r(c, i), w.hasOwnProperty(i)) w[i](e, u);
                        else {
                            var d = v.hasOwnProperty(i),
                                m = "function" == typeof u,
                                g = m && !d && !c && !1 !== n.autobind;
                            if (g) o.push(i, u), a[i] = u;
                            else if (c) {
                                var f = v[i];
                                s(d && ("DEFINE_MANY_MERGED" === f || "DEFINE_MANY" === f), "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.", f, i), "DEFINE_MANY_MERGED" === f ? a[i] = p(a[i], u) : "DEFINE_MANY" === f && (a[i] = h(a[i], u))
                            } else a[i] = u
                        }
                    }
            } else;
        }

        function c(e, t) {
            if (t)
                for (var n in t) {
                    var a = t[n];
                    if (t.hasOwnProperty(n)) {
                        var r = n in w;
                        s(!r, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', n);
                        var o = n in e;
                        if (o) {
                            var i = b.hasOwnProperty(n) ? b[n] : null;
                            return s("DEFINE_MANY_MERGED" === i, "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", n), void(e[n] = p(e[n], a))
                        }
                        e[n] = a
                    }
                }
        }

        function d(e, t) {
            s(e && t && "object" == typeof e && "object" == typeof t, "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");
            for (var n in t) t.hasOwnProperty(n) && (s(void 0 === e[n], "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.", n), e[n] = t[n]);
            return e
        }

        function p(e, t) {
            return function() {
                var n = e.apply(this, arguments),
                    a = t.apply(this, arguments);
                if (null == n) return a;
                if (null == a) return n;
                var r = {};
                return d(r, n), d(r, a), r
            }
        }

        function h(e, t) {
            return function() {
                e.apply(this, arguments), t.apply(this, arguments)
            }
        }

        function m(e, t) {
            var n = t.bind(e);
            return n
        }

        function g(e) {
            for (var t = e.__reactAutoBindPairs, n = 0; n < t.length; n += 2) {
                var a = t[n],
                    r = t[n + 1];
                e[a] = m(e, r)
            }
        }

        function f(e) {
            var t = a(function(e, a, r) {
                this.__reactAutoBindPairs.length && g(this), this.props = e, this.context = a, this.refs = i, this.updater = r || n, this.state = null;
                var o = this.getInitialState ? this.getInitialState() : null;
                s("object" == typeof o && !Array.isArray(o), "%s.getInitialState(): must return an object or null", t.displayName || "ReactCompositeComponent"), this.state = o
            });
            t.prototype = new S, t.prototype.constructor = t, t.prototype.__reactAutoBindPairs = [], y.forEach(u.bind(null, t)), u(t, E), u(t, e), u(t, C), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), s(t.prototype.render, "createClass(...): Class specification must implement a `render` method.");
            for (var r in v) t.prototype[r] || (t.prototype[r] = null);
            return t
        }
        var y = [],
            v = {
                mixins: "DEFINE_MANY",
                statics: "DEFINE_MANY",
                propTypes: "DEFINE_MANY",
                contextTypes: "DEFINE_MANY",
                childContextTypes: "DEFINE_MANY",
                getDefaultProps: "DEFINE_MANY_MERGED",
                getInitialState: "DEFINE_MANY_MERGED",
                getChildContext: "DEFINE_MANY_MERGED",
                render: "DEFINE_ONCE",
                componentWillMount: "DEFINE_MANY",
                componentDidMount: "DEFINE_MANY",
                componentWillReceiveProps: "DEFINE_MANY",
                shouldComponentUpdate: "DEFINE_ONCE",
                componentWillUpdate: "DEFINE_MANY",
                componentDidUpdate: "DEFINE_MANY",
                componentWillUnmount: "DEFINE_MANY",
                UNSAFE_componentWillMount: "DEFINE_MANY",
                UNSAFE_componentWillReceiveProps: "DEFINE_MANY",
                UNSAFE_componentWillUpdate: "DEFINE_MANY",
                updateComponent: "OVERRIDE_BASE"
            },
            b = {
                getDerivedStateFromProps: "DEFINE_MANY_MERGED"
            },
            w = {
                displayName: function(e, t) {
                    e.displayName = t
                },
                mixins: function(e, t) {
                    if (t)
                        for (var n = 0; n < t.length; n++) u(e, t[n])
                },
                childContextTypes: function(e, t) {
                    e.childContextTypes = o({}, e.childContextTypes, t)
                },
                contextTypes: function(e, t) {
                    e.contextTypes = o({}, e.contextTypes, t)
                },
                getDefaultProps: function(e, t) {
                    e.getDefaultProps ? e.getDefaultProps = p(e.getDefaultProps, t) : e.getDefaultProps = t
                },
                propTypes: function(e, t) {
                    e.propTypes = o({}, e.propTypes, t)
                },
                statics: function(e, t) {
                    c(e, t)
                },
                autobind: function() {}
            },
            E = {
                componentDidMount: function() {
                    this.__isMounted = !0
                }
            },
            C = {
                componentWillUnmount: function() {
                    this.__isMounted = !1
                }
            },
            M = {
                replaceState: function(e, t) {
                    this.updater.enqueueReplaceState(this, e, t)
                },
                isMounted: function() {
                    return !!this.__isMounted
                }
            },
            S = function() {};
        return o(S.prototype, e.prototype, M), f
    }
    var o = n(3),
        i = n(22),
        s = n(0),
        l = "mixins";
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return e.replace(r, function(e, t) {
            return t.toUpperCase()
        })
    }
    var r = /-(.)/g;
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return r(e.replace(o, "ms-"))
    }
    var r = n(88),
        o = /^-ms-/;
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        return !(!e || !t) && (e === t || !r(e) && (r(t) ? a(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
    }
    var r = n(98);
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = e.length;
        if ((Array.isArray(e) || "object" != typeof e && "function" != typeof e) && i(!1), "number" != typeof t && i(!1), 0 === t || t - 1 in e || i(!1), "function" == typeof e.callee && i(!1), e.hasOwnProperty) try {
            return Array.prototype.slice.call(e)
        } catch (e) {}
        for (var n = Array(t), a = 0; a < t; a++) n[a] = e[a];
        return n
    }

    function r(e) {
        return !!e && ("object" == typeof e || "function" == typeof e) && "length" in e && !("setInterval" in e) && "number" != typeof e.nodeType && (Array.isArray(e) || "callee" in e || "item" in e)
    }

    function o(e) {
        return r(e) ? Array.isArray(e) ? e.slice() : a(e) : [e]
    }
    var i = n(0);
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = e.match(c);
        return t && t[1].toLowerCase()
    }

    function r(e, t) {
        var n = u;
        u || l(!1);
        var r = a(e),
            o = r && s(r);
        if (o) {
            n.innerHTML = o[1] + e + o[2];
            for (var c = o[0]; c--;) n = n.lastChild
        } else n.innerHTML = e;
        var d = n.getElementsByTagName("script");
        d.length && (t || l(!1), i(d).forEach(t));
        for (var p = Array.from(n.childNodes); n.lastChild;) n.removeChild(n.lastChild);
        return p
    }
    var o = n(5),
        i = n(91),
        s = n(93),
        l = n(0),
        u = o.canUseDOM ? document.createElement("div") : null,
        c = /^\s*<(\w+)/;
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return i || o(!1), p.hasOwnProperty(e) || (e = "*"), s.hasOwnProperty(e) || (i.innerHTML = "*" === e ? "<link />" : "<" + e + "></" + e + ">", s[e] = !i.firstChild), s[e] ? p[e] : null
    }
    var r = n(5),
        o = n(0),
        i = r.canUseDOM ? document.createElement("div") : null,
        s = {},
        l = [1, '<select multiple="true">', "</select>"],
        u = [1, "<table>", "</table>"],
        c = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        d = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"],
        p = {
            "*": [1, "?<div>", "</div>"],
            area: [1, "<map>", "</map>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            param: [1, "<object>", "</object>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            optgroup: l,
            option: l,
            caption: u,
            colgroup: u,
            tbody: u,
            tfoot: u,
            thead: u,
            td: c,
            th: c
        };
    ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"].forEach(function(e) {
        p[e] = d, s[e] = !0
    }), e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return e.Window && e instanceof e.Window ? {
            x: e.pageXOffset || e.document.documentElement.scrollLeft,
            y: e.pageYOffset || e.document.documentElement.scrollTop
        } : {
            x: e.scrollLeft,
            y: e.scrollTop
        }
    }
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return e.replace(r, "-$1").toLowerCase()
    }
    var r = /([A-Z])/g;
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return r(e).replace(o, "-ms-")
    }
    var r = n(95),
        o = /^ms-/;
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = e ? e.ownerDocument || e : document,
            n = t.defaultView || window;
        return !(!e || !("function" == typeof n.Node ? e instanceof n.Node : "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName))
    }
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return r(e) && 3 == e.nodeType
    }
    var r = n(97);
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = {};
        return function(n) {
            return t.hasOwnProperty(n) || (t[n] = e.call(this, n)), t[n]
        }
    }
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e, t, n, a, r) {}
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a() {
        return null
    }
    var r = n(3),
        o = n(102),
        i = n(100),
        s = function() {};
    e.exports = function(e, t) {
        function n(e) {
            var t = e && (k && e[k] || e[x]);
            if ("function" == typeof t) return t
        }

        function l(e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e !== e && t !== t
        }

        function u(e) {
            this.message = e, this.stack = ""
        }

        function c(e) {
            function n(n, a, r, i, s, l, c) {
                if (i = i || P, l = l || r, c !== o) {
                    if (t) {
                        var d = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                        throw d.name = "Invariant Violation", d
                    }
                }
                return null == a[r] ? n ? new u(null === a[r] ? "The " + s + " `" + l + "` is marked as required in `" + i + "`, but its value is `null`." : "The " + s + " `" + l + "` is marked as required in `" + i + "`, but its value is `undefined`.") : null : e(a, r, i, s, l)
            }
            var a = n.bind(null, !1);
            return a.isRequired = n.bind(null, !0), a
        }

        function d(e) {
            function t(t, n, a, r, o, i) {
                var s = t[n];
                if (E(s) !== e) return new u("Invalid " + r + " `" + o + "` of type `" + C(s) + "` supplied to `" + a + "`, expected `" + e + "`.");
                return null
            }
            return c(t)
        }

        function p(e) {
            function t(t, n, a, r, i) {
                if ("function" != typeof e) return new u("Property `" + i + "` of component `" + a + "` has invalid PropType notation inside arrayOf.");
                var s = t[n];
                if (!Array.isArray(s)) {
                    return new u("Invalid " + r + " `" + i + "` of type `" + E(s) + "` supplied to `" + a + "`, expected an array.")
                }
                for (var l = 0; l < s.length; l++) {
                    var c = e(s, l, a, r, i + "[" + l + "]", o);
                    if (c instanceof Error) return c
                }
                return null
            }
            return c(t)
        }

        function h(e) {
            function t(t, n, a, r, o) {
                if (!(t[n] instanceof e)) {
                    var i = e.name || P;
                    return new u("Invalid " + r + " `" + o + "` of type `" + S(t[n]) + "` supplied to `" + a + "`, expected instance of `" + i + "`.")
                }
                return null
            }
            return c(t)
        }

        function m(e) {
            function t(t, n, a, r, o) {
                for (var i = t[n], s = 0; s < e.length; s++)
                    if (l(i, e[s])) return null;
                return new u("Invalid " + r + " `" + o + "` of value `" + i + "` supplied to `" + a + "`, expected one of " + JSON.stringify(e) + ".")
            }
            return Array.isArray(e) ? c(t) : a
        }

        function g(e) {
            function t(t, n, a, r, i) {
                if ("function" != typeof e) return new u("Property `" + i + "` of component `" + a + "` has invalid PropType notation inside objectOf.");
                var s = t[n],
                    l = E(s);
                if ("object" !== l) return new u("Invalid " + r + " `" + i + "` of type `" + l + "` supplied to `" + a + "`, expected an object.");
                for (var c in s)
                    if (s.hasOwnProperty(c)) {
                        var d = e(s, c, a, r, i + "." + c, o);
                        if (d instanceof Error) return d
                    }
                return null
            }
            return c(t)
        }

        function f(e) {
            function t(t, n, a, r, i) {
                for (var s = 0; s < e.length; s++) {
                    if (null == (0, e[s])(t, n, a, r, i, o)) return null
                }
                return new u("Invalid " + r + " `" + i + "` supplied to `" + a + "`.")
            }
            if (!Array.isArray(e)) return a;
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                if ("function" != typeof r) return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + M(r) + " at index " + n + "."), a
            }
            return c(t)
        }

        function y(e) {
            function t(t, n, a, r, i) {
                var s = t[n],
                    l = E(s);
                if ("object" !== l) return new u("Invalid " + r + " `" + i + "` of type `" + l + "` supplied to `" + a + "`, expected `object`.");
                for (var c in e) {
                    var d = e[c];
                    if (d) {
                        var p = d(s, c, a, r, i + "." + c, o);
                        if (p) return p
                    }
                }
                return null
            }
            return c(t)
        }

        function v(e) {
            function t(t, n, a, i, s) {
                var l = t[n],
                    c = E(l);
                if ("object" !== c) return new u("Invalid " + i + " `" + s + "` of type `" + c + "` supplied to `" + a + "`, expected `object`.");
                var d = r({}, t[n], e);
                for (var p in d) {
                    var h = e[p];
                    if (!h) return new u("Invalid " + i + " `" + s + "` key `" + p + "` supplied to `" + a + "`.\nBad object: " + JSON.stringify(t[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
                    var m = h(l, p, a, i, s + "." + p, o);
                    if (m) return m
                }
                return null
            }
            return c(t)
        }

        function b(t) {
            switch (typeof t) {
                case "number":
                case "string":
                case "undefined":
                    return !0;
                case "boolean":
                    return !t;
                case "object":
                    if (Array.isArray(t)) return t.every(b);
                    if (null === t || e(t)) return !0;
                    var a = n(t);
                    if (!a) return !1;
                    var r, o = a.call(t);
                    if (a !== t.entries) {
                        for (; !(r = o.next()).done;)
                            if (!b(r.value)) return !1
                    } else
                        for (; !(r = o.next()).done;) {
                            var i = r.value;
                            if (i && !b(i[1])) return !1
                        }
                    return !0;
                default:
                    return !1
            }
        }

        function w(e, t) {
            return "symbol" === e || ("Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol)
        }

        function E(e) {
            var t = typeof e;
            return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : w(t, e) ? "symbol" : t
        }

        function C(e) {
            if (void 0 === e || null === e) return "" + e;
            var t = E(e);
            if ("object" === t) {
                if (e instanceof Date) return "date";
                if (e instanceof RegExp) return "regexp"
            }
            return t
        }

        function M(e) {
            var t = C(e);
            switch (t) {
                case "array":
                case "object":
                    return "an " + t;
                case "boolean":
                case "date":
                case "regexp":
                    return "a " + t;
                default:
                    return t
            }
        }

        function S(e) {
            return e.constructor && e.constructor.name ? e.constructor.name : P
        }
        var k = "function" == typeof Symbol && Symbol.iterator,
            x = "@@iterator",
            P = "<<anonymous>>",
            A = {
                array: d("array"),
                bool: d("boolean"),
                func: d("function"),
                number: d("number"),
                object: d("object"),
                string: d("string"),
                symbol: d("symbol"),
                any: function() {
                    return c(a)
                }(),
                arrayOf: p,
                element: function() {
                    function t(t, n, a, r, o) {
                        var i = t[n];
                        if (!e(i)) {
                            return new u("Invalid " + r + " `" + o + "` of type `" + E(i) + "` supplied to `" + a + "`, expected a single ReactElement.")
                        }
                        return null
                    }
                    return c(t)
                }(),
                instanceOf: h,
                node: function() {
                    function e(e, t, n, a, r) {
                        return b(e[t]) ? null : new u("Invalid " + a + " `" + r + "` supplied to `" + n + "`, expected a ReactNode.")
                    }
                    return c(e)
                }(),
                objectOf: g,
                oneOf: m,
                oneOfType: f,
                shape: y,
                exact: v
            };
        return u.prototype = Error.prototype, A.checkPropTypes = i, A.PropTypes = A, A
    }
}, function(e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(e, t, n) {
    "use strict";
    e.exports = n(117)
}, function(e, t, n) {
    "use strict";
    var a = {
        Properties: {
            "aria-current": 0,
            "aria-details": 0,
            "aria-disabled": 0,
            "aria-hidden": 0,
            "aria-invalid": 0,
            "aria-keyshortcuts": 0,
            "aria-label": 0,
            "aria-roledescription": 0,
            "aria-autocomplete": 0,
            "aria-checked": 0,
            "aria-expanded": 0,
            "aria-haspopup": 0,
            "aria-level": 0,
            "aria-modal": 0,
            "aria-multiline": 0,
            "aria-multiselectable": 0,
            "aria-orientation": 0,
            "aria-placeholder": 0,
            "aria-pressed": 0,
            "aria-readonly": 0,
            "aria-required": 0,
            "aria-selected": 0,
            "aria-sort": 0,
            "aria-valuemax": 0,
            "aria-valuemin": 0,
            "aria-valuenow": 0,
            "aria-valuetext": 0,
            "aria-atomic": 0,
            "aria-busy": 0,
            "aria-live": 0,
            "aria-relevant": 0,
            "aria-dropeffect": 0,
            "aria-grabbed": 0,
            "aria-activedescendant": 0,
            "aria-colcount": 0,
            "aria-colindex": 0,
            "aria-colspan": 0,
            "aria-controls": 0,
            "aria-describedby": 0,
            "aria-errormessage": 0,
            "aria-flowto": 0,
            "aria-labelledby": 0,
            "aria-owns": 0,
            "aria-posinset": 0,
            "aria-rowcount": 0,
            "aria-rowindex": 0,
            "aria-rowspan": 0,
            "aria-setsize": 0
        },
        DOMAttributeNames: {},
        DOMPropertyNames: {}
    };
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var a = n(4),
        r = n(47),
        o = {
            focusDOMComponent: function() {
                r(a.getNodeFromInstance(this))
            }
        };
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey)
    }

    function r(e) {
        switch (e) {
            case "topCompositionStart":
                return k.compositionStart;
            case "topCompositionEnd":
                return k.compositionEnd;
            case "topCompositionUpdate":
                return k.compositionUpdate
        }
    }

    function o(e, t) {
        return "topKeyDown" === e && t.keyCode === v
    }

    function i(e, t) {
        switch (e) {
            case "topKeyUp":
                return -1 !== y.indexOf(t.keyCode);
            case "topKeyDown":
                return t.keyCode !== v;
            case "topKeyPress":
            case "topMouseDown":
            case "topBlur":
                return !0;
            default:
                return !1
        }
    }

    function s(e) {
        var t = e.detail;
        return "object" == typeof t && "data" in t ? t.data : null
    }

    function l(e, t, n, a) {
        var l, u;
        if (b ? l = r(e) : P ? i(e, n) && (l = k.compositionEnd) : o(e, n) && (l = k.compositionStart), !l) return null;
        C && (P || l !== k.compositionStart ? l === k.compositionEnd && P && (u = P.getData()) : P = m.getPooled(a));
        var c = g.getPooled(l, t, n, a);
        if (u) c.data = u;
        else {
            var d = s(n);
            null !== d && (c.data = d)
        }
        return p.accumulateTwoPhaseDispatches(c), c
    }

    function u(e, t) {
        switch (e) {
            case "topCompositionEnd":
                return s(t);
            case "topKeyPress":
                return t.which !== M ? null : (x = !0, S);
            case "topTextInput":
                var n = t.data;
                return n === S && x ? null : n;
            default:
                return null
        }
    }

    function c(e, t) {
        if (P) {
            if ("topCompositionEnd" === e || !b && i(e, t)) {
                var n = P.getData();
                return m.release(P), P = null, n
            }
            return null
        }
        switch (e) {
            case "topPaste":
                return null;
            case "topKeyPress":
                return t.which && !a(t) ? String.fromCharCode(t.which) : null;
            case "topCompositionEnd":
                return C ? null : t.data;
            default:
                return null
        }
    }

    function d(e, t, n, a) {
        var r;
        if (!(r = E ? u(e, n) : c(e, n))) return null;
        var o = f.getPooled(k.beforeInput, t, n, a);
        return o.data = r, p.accumulateTwoPhaseDispatches(o), o
    }
    var p = n(18),
        h = n(5),
        m = n(112),
        g = n(149),
        f = n(152),
        y = [9, 13, 27, 32],
        v = 229,
        b = h.canUseDOM && "CompositionEvent" in window,
        w = null;
    h.canUseDOM && "documentMode" in document && (w = document.documentMode);
    var E = h.canUseDOM && "TextEvent" in window && !w && ! function() {
            var e = window.opera;
            return "object" == typeof e && "function" == typeof e.version && parseInt(e.version(), 10) <= 12
        }(),
        C = h.canUseDOM && (!b || w && w > 8 && w <= 11),
        M = 32,
        S = String.fromCharCode(M),
        k = {
            beforeInput: {
                phasedRegistrationNames: {
                    bubbled: "onBeforeInput",
                    captured: "onBeforeInputCapture"
                },
                dependencies: ["topCompositionEnd", "topKeyPress", "topTextInput", "topPaste"]
            },
            compositionEnd: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionEnd",
                    captured: "onCompositionEndCapture"
                },
                dependencies: ["topBlur", "topCompositionEnd", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionStart",
                    captured: "onCompositionStartCapture"
                },
                dependencies: ["topBlur", "topCompositionStart", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionUpdate",
                    captured: "onCompositionUpdateCapture"
                },
                dependencies: ["topBlur", "topCompositionUpdate", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
            }
        },
        x = !1,
        P = null,
        A = {
            eventTypes: k,
            extractEvents: function(e, t, n, a) {
                return [l(e, t, n, a), d(e, t, n, a)]
            }
        };
    e.exports = A
}, function(e, t, n) {
    "use strict";
    var a = n(51),
        r = n(5),
        o = (n(6), n(89), n(158)),
        i = n(96),
        s = n(99),
        l = (n(2), s(function(e) {
            return i(e)
        })),
        u = !1,
        c = "cssFloat";
    if (r.canUseDOM) {
        var d = document.createElement("div").style;
        try {
            d.font = ""
        } catch (e) {
            u = !0
        }
        void 0 === document.documentElement.style.cssFloat && (c = "styleFloat")
    }
    var p = {
        createMarkupForStyles: function(e, t) {
            var n = "";
            for (var a in e)
                if (e.hasOwnProperty(a)) {
                    var r = 0 === a.indexOf("--"),
                        i = e[a];
                    null != i && (n += l(a) + ":", n += o(a, i, t, r) + ";")
                }
            return n || null
        },
        setValueForStyles: function(e, t, n) {
            var r = e.style;
            for (var i in t)
                if (t.hasOwnProperty(i)) {
                    var s = 0 === i.indexOf("--"),
                        l = o(i, t[i], n, s);
                    if ("float" !== i && "cssFloat" !== i || (i = c), s) r.setProperty(i, l);
                    else if (l) r[i] = l;
                    else {
                        var d = u && a.shorthandPropertyExpansions[i];
                        if (d)
                            for (var p in d) r[p] = "";
                        else r[i] = ""
                    }
                }
        }
    };
    e.exports = p
}, function(e, t, n) {
    "use strict";

    function a(e, t, n) {
        var a = x.getPooled(_.change, e, t, n);
        return a.type = "change", C.accumulateTwoPhaseDispatches(a), a
    }

    function r(e) {
        var t = e.nodeName && e.nodeName.toLowerCase();
        return "select" === t || "input" === t && "file" === e.type
    }

    function o(e) {
        var t = a(N, e, A(e));
        k.batchedUpdates(i, t)
    }

    function i(e) {
        E.enqueueEvents(e), E.processEventQueue(!1)
    }

    function s(e, t) {
        D = e, N = t, D.attachEvent("onchange", o)
    }

    function l() {
        D && (D.detachEvent("onchange", o), D = null, N = null)
    }

    function u(e, t) {
        var n = P.updateValueIfChanged(e),
            a = !0 === t.simulated && L._allowSimulatedPassThrough;
        if (n || a) return e
    }

    function c(e, t) {
        if ("topChange" === e) return t
    }

    function d(e, t, n) {
        "topFocus" === e ? (l(), s(t, n)) : "topBlur" === e && l()
    }

    function p(e, t) {
        D = e, N = t, D.attachEvent("onpropertychange", m)
    }

    function h() {
        D && (D.detachEvent("onpropertychange", m), D = null, N = null)
    }

    function m(e) {
        "value" === e.propertyName && u(N, e) && o(e)
    }

    function g(e, t, n) {
        "topFocus" === e ? (h(), p(t, n)) : "topBlur" === e && h()
    }

    function f(e, t, n) {
        if ("topSelectionChange" === e || "topKeyUp" === e || "topKeyDown" === e) return u(N, n)
    }

    function y(e) {
        var t = e.nodeName;
        return t && "input" === t.toLowerCase() && ("checkbox" === e.type || "radio" === e.type)
    }

    function v(e, t, n) {
        if ("topClick" === e) return u(t, n)
    }

    function b(e, t, n) {
        if ("topInput" === e || "topChange" === e) return u(t, n)
    }

    function w(e, t) {
        if (null != e) {
            var n = e._wrapperState || t._wrapperState;
            if (n && n.controlled && "number" === t.type) {
                var a = "" + t.value;
                t.getAttribute("value") !== a && t.setAttribute("value", a)
            }
        }
    }
    var E = n(17),
        C = n(18),
        M = n(5),
        S = n(4),
        k = n(8),
        x = n(9),
        P = n(67),
        A = n(41),
        T = n(42),
        I = n(69),
        _ = {
            change: {
                phasedRegistrationNames: {
                    bubbled: "onChange",
                    captured: "onChangeCapture"
                },
                dependencies: ["topBlur", "topChange", "topClick", "topFocus", "topInput", "topKeyDown", "topKeyUp", "topSelectionChange"]
            }
        },
        D = null,
        N = null,
        R = !1;
    M.canUseDOM && (R = T("change") && (!document.documentMode || document.documentMode > 8));
    var O = !1;
    M.canUseDOM && (O = T("input") && (!document.documentMode || document.documentMode > 9));
    var L = {
        eventTypes: _,
        _allowSimulatedPassThrough: !0,
        _isInputEventSupported: O,
        extractEvents: function(e, t, n, o) {
            var i, s, l = t ? S.getNodeFromInstance(t) : window;
            if (r(l) ? R ? i = c : s = d : I(l) ? O ? i = b : (i = f, s = g) : y(l) && (i = v), i) {
                var u = i(e, t, n);
                if (u) {
                    return a(u, n, o)
                }
            }
            s && s(e, l, t), "topBlur" === e && w(t, l)
        }
    };
    e.exports = L
}, function(e, t, n) {
    "use strict";
    var a = n(1),
        r = n(12),
        o = n(5),
        i = n(92),
        s = n(7),
        l = (n(0), {
            dangerouslyReplaceNodeWithMarkup: function(e, t) {
                if (o.canUseDOM || a("56"), t || a("57"), "HTML" === e.nodeName && a("58"), "string" == typeof t) {
                    var n = i(t, s)[0];
                    e.parentNode.replaceChild(n, e)
                } else r.replaceChildWithTree(e, t)
            }
        });
    e.exports = l
}, function(e, t, n) {
    "use strict";
    var a = ["ResponderEventPlugin", "SimpleEventPlugin", "TapEventPlugin", "EnterLeaveEventPlugin", "ChangeEventPlugin", "SelectEventPlugin", "BeforeInputEventPlugin"];
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var a = n(18),
        r = n(4),
        o = n(24),
        i = {
            mouseEnter: {
                registrationName: "onMouseEnter",
                dependencies: ["topMouseOut", "topMouseOver"]
            },
            mouseLeave: {
                registrationName: "onMouseLeave",
                dependencies: ["topMouseOut", "topMouseOver"]
            }
        },
        s = {
            eventTypes: i,
            extractEvents: function(e, t, n, s) {
                if ("topMouseOver" === e && (n.relatedTarget || n.fromElement)) return null;
                if ("topMouseOut" !== e && "topMouseOver" !== e) return null;
                var l;
                if (s.window === s) l = s;
                else {
                    var u = s.ownerDocument;
                    l = u ? u.defaultView || u.parentWindow : window
                }
                var c, d;
                if ("topMouseOut" === e) {
                    c = t;
                    var p = n.relatedTarget || n.toElement;
                    d = p ? r.getClosestInstanceFromNode(p) : null
                } else c = null, d = t;
                if (c === d) return null;
                var h = null == c ? l : r.getNodeFromInstance(c),
                    m = null == d ? l : r.getNodeFromInstance(d),
                    g = o.getPooled(i.mouseLeave, c, n, s);
                g.type = "mouseleave", g.target = h, g.relatedTarget = m;
                var f = o.getPooled(i.mouseEnter, d, n, s);
                return f.type = "mouseenter", f.target = m, f.relatedTarget = h, a.accumulateEnterLeaveDispatches(g, f, c, d), [g, f]
            }
        };
    e.exports = s
}, function(e, t, n) {
    "use strict";

    function a(e) {
        this._root = e, this._startText = this.getText(), this._fallbackText = null
    }
    var r = n(3),
        o = n(11),
        i = n(66);
    r(a.prototype, {
        destructor: function() {
            this._root = null, this._startText = null, this._fallbackText = null
        },
        getText: function() {
            return "value" in this._root ? this._root.value : this._root[i()]
        },
        getData: function() {
            if (this._fallbackText) return this._fallbackText;
            var e, t, n = this._startText,
                a = n.length,
                r = this.getText(),
                o = r.length;
            for (e = 0; e < a && n[e] === r[e]; e++);
            var i = a - e;
            for (t = 1; t <= i && n[a - t] === r[o - t]; t++);
            var s = t > 1 ? 1 - t : void 0;
            return this._fallbackText = r.slice(e, s), this._fallbackText
        }
    }), o.addPoolingTo(a), e.exports = a
}, function(e, t, n) {
    "use strict";
    var a = n(13),
        r = a.injection.MUST_USE_PROPERTY,
        o = a.injection.HAS_BOOLEAN_VALUE,
        i = a.injection.HAS_NUMERIC_VALUE,
        s = a.injection.HAS_POSITIVE_NUMERIC_VALUE,
        l = a.injection.HAS_OVERLOADED_BOOLEAN_VALUE,
        u = {
            isCustomAttribute: RegExp.prototype.test.bind(new RegExp("^(data|aria)-[" + a.ATTRIBUTE_NAME_CHAR + "]*$")),
            Properties: {
                accept: 0,
                acceptCharset: 0,
                accessKey: 0,
                action: 0,
                allowFullScreen: o,
                allowTransparency: 0,
                alt: 0,
                as: 0,
                async: o,
                autoComplete: 0,
                autoPlay: o,
                capture: o,
                cellPadding: 0,
                cellSpacing: 0,
                charSet: 0,
                challenge: 0,
                checked: r | o,
                cite: 0,
                classID: 0,
                className: 0,
                cols: s,
                colSpan: 0,
                content: 0,
                contentEditable: 0,
                contextMenu: 0,
                controls: o,
                controlsList: 0,
                coords: 0,
                crossOrigin: 0,
                data: 0,
                dateTime: 0,
                default: o,
                defer: o,
                dir: 0,
                disabled: o,
                download: l,
                draggable: 0,
                encType: 0,
                form: 0,
                formAction: 0,
                formEncType: 0,
                formMethod: 0,
                formNoValidate: o,
                formTarget: 0,
                frameBorder: 0,
                headers: 0,
                height: 0,
                hidden: o,
                high: 0,
                href: 0,
                hrefLang: 0,
                htmlFor: 0,
                httpEquiv: 0,
                icon: 0,
                id: 0,
                inputMode: 0,
                integrity: 0,
                is: 0,
                keyParams: 0,
                keyType: 0,
                kind: 0,
                label: 0,
                lang: 0,
                list: 0,
                loop: o,
                low: 0,
                manifest: 0,
                marginHeight: 0,
                marginWidth: 0,
                max: 0,
                maxLength: 0,
                media: 0,
                mediaGroup: 0,
                method: 0,
                min: 0,
                minLength: 0,
                multiple: r | o,
                muted: r | o,
                name: 0,
                nonce: 0,
                noValidate: o,
                open: o,
                optimum: 0,
                pattern: 0,
                placeholder: 0,
                playsInline: o,
                poster: 0,
                preload: 0,
                profile: 0,
                radioGroup: 0,
                readOnly: o,
                referrerPolicy: 0,
                rel: 0,
                required: o,
                reversed: o,
                role: 0,
                rows: s,
                rowSpan: i,
                sandbox: 0,
                scope: 0,
                scoped: o,
                scrolling: 0,
                seamless: o,
                selected: r | o,
                shape: 0,
                size: s,
                sizes: 0,
                span: s,
                spellCheck: 0,
                src: 0,
                srcDoc: 0,
                srcLang: 0,
                srcSet: 0,
                start: i,
                step: 0,
                style: 0,
                summary: 0,
                tabIndex: 0,
                target: 0,
                title: 0,
                type: 0,
                useMap: 0,
                value: 0,
                width: 0,
                wmode: 0,
                wrap: 0,
                about: 0,
                datatype: 0,
                inlist: 0,
                prefix: 0,
                property: 0,
                resource: 0,
                typeof: 0,
                vocab: 0,
                autoCapitalize: 0,
                autoCorrect: 0,
                autoSave: 0,
                color: 0,
                itemProp: 0,
                itemScope: o,
                itemType: 0,
                itemID: 0,
                itemRef: 0,
                results: 0,
                security: 0,
                unselectable: 0
            },
            DOMAttributeNames: {
                acceptCharset: "accept-charset",
                className: "class",
                htmlFor: "for",
                httpEquiv: "http-equiv"
            },
            DOMPropertyNames: {},
            DOMMutationMethods: {
                value: function(e, t) {
                    if (null == t) return e.removeAttribute("value");
                    "number" !== e.type || !1 === e.hasAttribute("value") ? e.setAttribute("value", "" + t) : e.validity && !e.validity.badInput && e.ownerDocument.activeElement !== e && e.setAttribute("value", "" + t)
                }
            }
        };
    e.exports = u
}, function(e, t, n) {
    "use strict";
    (function(t) {
        function a(e, t, n, a) {
            var r = void 0 === e[n];
            null != t && r && (e[n] = o(t, !0))
        }
        var r = n(14),
            o = n(68),
            i = (n(33), n(43)),
            s = n(71);
        n(2);
        void 0 !== t && t.env;
        var l = {
            instantiateChildren: function(e, t, n, r) {
                if (null == e) return null;
                var o = {};
                return s(e, a, o), o
            },
            updateChildren: function(e, t, n, a, s, l, u, c, d) {
                if (t || e) {
                    var p, h;
                    for (p in t)
                        if (t.hasOwnProperty(p)) {
                            h = e && e[p];
                            var m = h && h._currentElement,
                                g = t[p];
                            if (null != h && i(m, g)) r.receiveComponent(h, g, s, c), t[p] = h;
                            else {
                                h && (a[p] = r.getHostNode(h), r.unmountComponent(h, !1));
                                var f = o(g, !0);
                                t[p] = f;
                                var y = r.mountComponent(f, s, l, u, c, d);
                                n.push(y)
                            }
                        }
                    for (p in e) !e.hasOwnProperty(p) || t && t.hasOwnProperty(p) || (h = e[p], a[p] = r.getHostNode(h), r.unmountComponent(h, !1))
                }
            },
            unmountChildren: function(e, t) {
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        var a = e[n];
                        r.unmountComponent(a, t)
                    }
            }
        };
        e.exports = l
    }).call(t, n(49))
}, function(e, t, n) {
    "use strict";
    var a = n(29),
        r = n(122),
        o = {
            processChildrenUpdates: r.dangerouslyProcessChildrenUpdates,
            replaceNodeWithMarkup: a.dangerouslyReplaceNodeWithMarkup
        };
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function a(e) {}

    function r(e) {
        return !(!e.prototype || !e.prototype.isReactComponent)
    }

    function o(e) {
        return !(!e.prototype || !e.prototype.isPureReactComponent)
    }
    var i = n(1),
        s = n(3),
        l = n(15),
        u = n(35),
        c = n(10),
        d = n(36),
        p = n(19),
        h = (n(6), n(61)),
        m = n(14),
        g = n(22),
        f = (n(0), n(28)),
        y = n(43),
        v = (n(2), {
            ImpureClass: 0,
            PureClass: 1,
            StatelessFunctional: 2
        });
    a.prototype.render = function() {
        var e = p.get(this)._currentElement.type,
            t = e(this.props, this.context, this.updater);
        return t
    };
    var b = 1,
        w = {
            construct: function(e) {
                this._currentElement = e, this._rootNodeID = 0, this._compositeType = null, this._instance = null, this._hostParent = null, this._hostContainerInfo = null, this._updateBatchNumber = null, this._pendingElement = null, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._renderedNodeType = null, this._renderedComponent = null, this._context = null, this._mountOrder = 0, this._topLevelWrapper = null, this._pendingCallbacks = null, this._calledComponentWillUnmount = !1
            },
            mountComponent: function(e, t, n, s) {
                this._context = s, this._mountOrder = b++, this._hostParent = t, this._hostContainerInfo = n;
                var u, c = this._currentElement.props,
                    d = this._processContext(s),
                    h = this._currentElement.type,
                    m = e.getUpdateQueue(),
                    f = r(h),
                    y = this._constructComponent(f, c, d, m);
                f || null != y && null != y.render ? o(h) ? this._compositeType = v.PureClass : this._compositeType = v.ImpureClass : (u = y, null === y || !1 === y || l.isValidElement(y) || i("105", h.displayName || h.name || "Component"), y = new a(h), this._compositeType = v.StatelessFunctional);
                y.props = c, y.context = d, y.refs = g, y.updater = m, this._instance = y, p.set(y, this);
                var w = y.state;
                void 0 === w && (y.state = w = null), ("object" != typeof w || Array.isArray(w)) && i("106", this.getName() || "ReactCompositeComponent"), this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1;
                var E;
                return E = y.unstable_handleError ? this.performInitialMountWithErrorHandling(u, t, n, e, s) : this.performInitialMount(u, t, n, e, s), y.componentDidMount && e.getReactMountReady().enqueue(y.componentDidMount, y), E
            },
            _constructComponent: function(e, t, n, a) {
                return this._constructComponentWithoutOwner(e, t, n, a)
            },
            _constructComponentWithoutOwner: function(e, t, n, a) {
                var r = this._currentElement.type;
                return e ? new r(t, n, a) : r(t, n, a)
            },
            performInitialMountWithErrorHandling: function(e, t, n, a, r) {
                var o, i = a.checkpoint();
                try {
                    o = this.performInitialMount(e, t, n, a, r)
                } catch (s) {
                    a.rollback(i), this._instance.unstable_handleError(s), this._pendingStateQueue && (this._instance.state = this._processPendingState(this._instance.props, this._instance.context)), i = a.checkpoint(), this._renderedComponent.unmountComponent(!0), a.rollback(i), o = this.performInitialMount(e, t, n, a, r)
                }
                return o
            },
            performInitialMount: function(e, t, n, a, r) {
                var o = this._instance,
                    i = 0;
                o.componentWillMount && (o.componentWillMount(), this._pendingStateQueue && (o.state = this._processPendingState(o.props, o.context))), void 0 === e && (e = this._renderValidatedComponent());
                var s = h.getType(e);
                this._renderedNodeType = s;
                var l = this._instantiateReactComponent(e, s !== h.EMPTY);
                this._renderedComponent = l;
                var u = m.mountComponent(l, a, t, n, this._processChildContext(r), i);
                return u
            },
            getHostNode: function() {
                return m.getHostNode(this._renderedComponent)
            },
            unmountComponent: function(e) {
                if (this._renderedComponent) {
                    var t = this._instance;
                    if (t.componentWillUnmount && !t._calledComponentWillUnmount)
                        if (t._calledComponentWillUnmount = !0, e) {
                            var n = this.getName() + ".componentWillUnmount()";
                            d.invokeGuardedCallback(n, t.componentWillUnmount.bind(t))
                        } else t.componentWillUnmount();
                    this._renderedComponent && (m.unmountComponent(this._renderedComponent, e), this._renderedNodeType = null, this._renderedComponent = null, this._instance = null), this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._pendingCallbacks = null, this._pendingElement = null, this._context = null, this._rootNodeID = 0, this._topLevelWrapper = null, p.remove(t)
                }
            },
            _maskContext: function(e) {
                var t = this._currentElement.type,
                    n = t.contextTypes;
                if (!n) return g;
                var a = {};
                for (var r in n) a[r] = e[r];
                return a
            },
            _processContext: function(e) {
                var t = this._maskContext(e);
                return t
            },
            _processChildContext: function(e) {
                var t, n = this._currentElement.type,
                    a = this._instance;
                if (a.getChildContext && (t = a.getChildContext()), t) {
                    "object" != typeof n.childContextTypes && i("107", this.getName() || "ReactCompositeComponent");
                    for (var r in t) r in n.childContextTypes || i("108", this.getName() || "ReactCompositeComponent", r);
                    return s({}, e, t)
                }
                return e
            },
            _checkContextTypes: function(e, t, n) {},
            receiveComponent: function(e, t, n) {
                var a = this._currentElement,
                    r = this._context;
                this._pendingElement = null, this.updateComponent(t, a, e, r, n)
            },
            performUpdateIfNecessary: function(e) {
                null != this._pendingElement ? m.receiveComponent(this, this._pendingElement, e, this._context) : null !== this._pendingStateQueue || this._pendingForceUpdate ? this.updateComponent(e, this._currentElement, this._currentElement, this._context, this._context) : this._updateBatchNumber = null
            },
            updateComponent: function(e, t, n, a, r) {
                var o = this._instance;
                null == o && i("136", this.getName() || "ReactCompositeComponent");
                var s, l = !1;
                this._context === r ? s = o.context : (s = this._processContext(r), l = !0);
                var u = t.props,
                    c = n.props;
                t !== n && (l = !0), l && o.componentWillReceiveProps && o.componentWillReceiveProps(c, s);
                var d = this._processPendingState(c, s),
                    p = !0;
                this._pendingForceUpdate || (o.shouldComponentUpdate ? p = o.shouldComponentUpdate(c, d, s) : this._compositeType === v.PureClass && (p = !f(u, c) || !f(o.state, d))), this._updateBatchNumber = null, p ? (this._pendingForceUpdate = !1, this._performComponentUpdate(n, c, d, s, e, r)) : (this._currentElement = n, this._context = r, o.props = c, o.state = d, o.context = s)
            },
            _processPendingState: function(e, t) {
                var n = this._instance,
                    a = this._pendingStateQueue,
                    r = this._pendingReplaceState;
                if (this._pendingReplaceState = !1, this._pendingStateQueue = null, !a) return n.state;
                if (r && 1 === a.length) return a[0];
                for (var o = s({}, r ? a[0] : n.state), i = r ? 1 : 0; i < a.length; i++) {
                    var l = a[i];
                    s(o, "function" == typeof l ? l.call(n, o, e, t) : l)
                }
                return o
            },
            _performComponentUpdate: function(e, t, n, a, r, o) {
                var i, s, l, u = this._instance,
                    c = Boolean(u.componentDidUpdate);
                c && (i = u.props, s = u.state, l = u.context), u.componentWillUpdate && u.componentWillUpdate(t, n, a), this._currentElement = e, this._context = o, u.props = t, u.state = n, u.context = a, this._updateRenderedComponent(r, o), c && r.getReactMountReady().enqueue(u.componentDidUpdate.bind(u, i, s, l), u)
            },
            _updateRenderedComponent: function(e, t) {
                var n = this._renderedComponent,
                    a = n._currentElement,
                    r = this._renderValidatedComponent(),
                    o = 0;
                if (y(a, r)) m.receiveComponent(n, r, e, this._processChildContext(t));
                else {
                    var i = m.getHostNode(n);
                    m.unmountComponent(n, !1);
                    var s = h.getType(r);
                    this._renderedNodeType = s;
                    var l = this._instantiateReactComponent(r, s !== h.EMPTY);
                    this._renderedComponent = l;
                    var u = m.mountComponent(l, e, this._hostParent, this._hostContainerInfo, this._processChildContext(t), o);
                    this._replaceNodeWithMarkup(i, u, n)
                }
            },
            _replaceNodeWithMarkup: function(e, t, n) {
                u.replaceNodeWithMarkup(e, t, n)
            },
            _renderValidatedComponentWithoutOwnerOrContext: function() {
                var e = this._instance;
                return e.render()
            },
            _renderValidatedComponent: function() {
                var e;
                if (this._compositeType !== v.StatelessFunctional) {
                    c.current = this;
                    try {
                        e = this._renderValidatedComponentWithoutOwnerOrContext()
                    } finally {
                        c.current = null
                    }
                } else e = this._renderValidatedComponentWithoutOwnerOrContext();
                return null === e || !1 === e || l.isValidElement(e) || i("109", this.getName() || "ReactCompositeComponent"), e
            },
            attachRef: function(e, t) {
                var n = this.getPublicInstance();
                null == n && i("110");
                var a = t.getPublicInstance();
                (n.refs === g ? n.refs = {} : n.refs)[e] = a
            },
            detachRef: function(e) {
                delete this.getPublicInstance().refs[e]
            },
            getName: function() {
                var e = this._currentElement.type,
                    t = this._instance && this._instance.constructor;
                return e.displayName || t && t.displayName || e.name || t && t.name || null
            },
            getPublicInstance: function() {
                var e = this._instance;
                return this._compositeType === v.StatelessFunctional ? null : e
            },
            _instantiateReactComponent: null
        };
    e.exports = w
}, function(e, t, n) {
    "use strict";
    var a = n(4),
        r = n(130),
        o = n(60),
        i = n(14),
        s = n(8),
        l = n(143),
        u = n(159),
        c = n(65),
        d = n(166);
    n(2);
    r.inject();
    var p = {
        findDOMNode: u,
        render: o.render,
        unmountComponentAtNode: o.unmountComponentAtNode,
        version: l,
        unstable_batchedUpdates: s.batchedUpdates,
        unstable_renderSubtreeIntoContainer: d
    };
    "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject && __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
        ComponentTree: {
            getClosestInstanceFromNode: a.getClosestInstanceFromNode,
            getNodeFromInstance: function(e) {
                return e._renderedComponent && (e = c(e)), e ? a.getNodeFromInstance(e) : null
            }
        },
        Mount: o,
        Reconciler: i
    });
    e.exports = p
}, function(e, t, n) {
    "use strict";

    function a(e) {
        if (e) {
            var t = e._currentElement._owner || null;
            if (t) {
                var n = t.getName();
                if (n) return " This DOM node was rendered by `" + n + "`."
            }
        }
        return ""
    }

    function r(e, t) {
        t && ($[e._tag] && (null != t.children || null != t.dangerouslySetInnerHTML) && f("137", e._tag, e._currentElement._owner ? " Check the render method of " + e._currentElement._owner.getName() + "." : ""), null != t.dangerouslySetInnerHTML && (null != t.children && f("60"), "object" == typeof t.dangerouslySetInnerHTML && q in t.dangerouslySetInnerHTML || f("61")), null != t.style && "object" != typeof t.style && f("62", a(e)))
    }

    function o(e, t, n, a) {
        if (!(a instanceof R)) {
            var r = e._hostContainerInfo,
                o = r._node && r._node.nodeType === z,
                s = o ? r._node : r._ownerDocument;
            U(t, s), a.getReactMountReady().enqueue(i, {
                inst: e,
                registrationName: t,
                listener: n
            })
        }
    }

    function i() {
        var e = this;
        S.putListener(e.inst, e.registrationName, e.listener)
    }

    function s() {
        var e = this;
        T.postMountWrapper(e)
    }

    function l() {
        var e = this;
        D.postMountWrapper(e)
    }

    function u() {
        var e = this;
        I.postMountWrapper(e)
    }

    function c() {
        L.track(this)
    }

    function d() {
        var e = this;
        e._rootNodeID || f("63");
        var t = F(e);
        switch (t || f("64"), e._tag) {
            case "iframe":
            case "object":
                e._wrapperState.listeners = [x.trapBubbledEvent("topLoad", "load", t)];
                break;
            case "video":
            case "audio":
                e._wrapperState.listeners = [];
                for (var n in V) V.hasOwnProperty(n) && e._wrapperState.listeners.push(x.trapBubbledEvent(n, V[n], t));
                break;
            case "source":
                e._wrapperState.listeners = [x.trapBubbledEvent("topError", "error", t)];
                break;
            case "img":
                e._wrapperState.listeners = [x.trapBubbledEvent("topError", "error", t), x.trapBubbledEvent("topLoad", "load", t)];
                break;
            case "form":
                e._wrapperState.listeners = [x.trapBubbledEvent("topReset", "reset", t), x.trapBubbledEvent("topSubmit", "submit", t)];
                break;
            case "input":
            case "select":
            case "textarea":
                e._wrapperState.listeners = [x.trapBubbledEvent("topInvalid", "invalid", t)]
        }
    }

    function p() {
        _.postUpdateWrapper(this)
    }

    function h(e) {
        J.call(X, e) || (Q.test(e) || f("65", e), X[e] = !0)
    }

    function m(e, t) {
        return e.indexOf("-") >= 0 || null != t.is
    }

    function g(e) {
        var t = e.type;
        h(t), this._currentElement = e, this._tag = t.toLowerCase(), this._namespaceURI = null, this._renderedChildren = null, this._previousStyle = null, this._previousStyleCopy = null, this._hostNode = null, this._hostParent = null, this._rootNodeID = 0, this._domID = 0, this._hostContainerInfo = null, this._wrapperState = null, this._topLevelWrapper = null, this._flags = 0
    }
    var f = n(1),
        y = n(3),
        v = n(105),
        b = n(107),
        w = n(12),
        E = n(30),
        C = n(13),
        M = n(53),
        S = n(17),
        k = n(31),
        x = n(23),
        P = n(54),
        A = n(4),
        T = n(123),
        I = n(124),
        _ = n(55),
        D = n(127),
        N = (n(6), n(136)),
        R = n(141),
        O = (n(7), n(26)),
        L = (n(0), n(42), n(28), n(67)),
        B = (n(44), n(2), P),
        H = S.deleteListener,
        F = A.getNodeFromInstance,
        U = x.listenTo,
        W = k.registrationNameModules,
        j = {
            string: !0,
            number: !0
        },
        q = "__html",
        G = {
            children: null,
            dangerouslySetInnerHTML: null,
            suppressContentEditableWarning: null
        },
        z = 11,
        V = {
            topAbort: "abort",
            topCanPlay: "canplay",
            topCanPlayThrough: "canplaythrough",
            topDurationChange: "durationchange",
            topEmptied: "emptied",
            topEncrypted: "encrypted",
            topEnded: "ended",
            topError: "error",
            topLoadedData: "loadeddata",
            topLoadedMetadata: "loadedmetadata",
            topLoadStart: "loadstart",
            topPause: "pause",
            topPlay: "play",
            topPlaying: "playing",
            topProgress: "progress",
            topRateChange: "ratechange",
            topSeeked: "seeked",
            topSeeking: "seeking",
            topStalled: "stalled",
            topSuspend: "suspend",
            topTimeUpdate: "timeupdate",
            topVolumeChange: "volumechange",
            topWaiting: "waiting"
        },
        K = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        },
        Y = {
            listing: !0,
            pre: !0,
            textarea: !0
        },
        $ = y({
            menuitem: !0
        }, K),
        Q = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
        X = {},
        J = {}.hasOwnProperty,
        Z = 1;
    g.displayName = "ReactDOMComponent", g.Mixin = {
        mountComponent: function(e, t, n, a) {
            this._rootNodeID = Z++, this._domID = n._idCounter++, this._hostParent = t, this._hostContainerInfo = n;
            var o = this._currentElement.props;
            switch (this._tag) {
                case "audio":
                case "form":
                case "iframe":
                case "img":
                case "link":
                case "object":
                case "source":
                case "video":
                    this._wrapperState = {
                        listeners: null
                    }, e.getReactMountReady().enqueue(d, this);
                    break;
                case "input":
                    T.mountWrapper(this, o, t), o = T.getHostProps(this, o), e.getReactMountReady().enqueue(c, this), e.getReactMountReady().enqueue(d, this);
                    break;
                case "option":
                    I.mountWrapper(this, o, t), o = I.getHostProps(this, o);
                    break;
                case "select":
                    _.mountWrapper(this, o, t), o = _.getHostProps(this, o), e.getReactMountReady().enqueue(d, this);
                    break;
                case "textarea":
                    D.mountWrapper(this, o, t), o = D.getHostProps(this, o), e.getReactMountReady().enqueue(c, this), e.getReactMountReady().enqueue(d, this)
            }
            r(this, o);
            var i, p;
            null != t ? (i = t._namespaceURI, p = t._tag) : n._tag && (i = n._namespaceURI, p = n._tag), (null == i || i === E.svg && "foreignobject" === p) && (i = E.html), i === E.html && ("svg" === this._tag ? i = E.svg : "math" === this._tag && (i = E.mathml)), this._namespaceURI = i;
            var h;
            if (e.useCreateElement) {
                var m, g = n._ownerDocument;
                if (i === E.html)
                    if ("script" === this._tag) {
                        var f = g.createElement("div"),
                            y = this._currentElement.type;
                        f.innerHTML = "<" + y + "></" + y + ">", m = f.removeChild(f.firstChild)
                    } else m = o.is ? g.createElement(this._currentElement.type, o.is) : g.createElement(this._currentElement.type);
                else m = g.createElementNS(i, this._currentElement.type);
                A.precacheNode(this, m), this._flags |= B.hasCachedChildNodes, this._hostParent || M.setAttributeForRoot(m), this._updateDOMProperties(null, o, e);
                var b = w(m);
                this._createInitialChildren(e, o, a, b), h = b
            } else {
                var C = this._createOpenTagMarkupAndPutListeners(e, o),
                    S = this._createContentMarkup(e, o, a);
                h = !S && K[this._tag] ? C + "/>" : C + ">" + S + "</" + this._currentElement.type + ">"
            }
            switch (this._tag) {
                case "input":
                    e.getReactMountReady().enqueue(s, this), o.autoFocus && e.getReactMountReady().enqueue(v.focusDOMComponent, this);
                    break;
                case "textarea":
                    e.getReactMountReady().enqueue(l, this), o.autoFocus && e.getReactMountReady().enqueue(v.focusDOMComponent, this);
                    break;
                case "select":
                case "button":
                    o.autoFocus && e.getReactMountReady().enqueue(v.focusDOMComponent, this);
                    break;
                case "option":
                    e.getReactMountReady().enqueue(u, this)
            }
            return h
        },
        _createOpenTagMarkupAndPutListeners: function(e, t) {
            var n = "<" + this._currentElement.type;
            for (var a in t)
                if (t.hasOwnProperty(a)) {
                    var r = t[a];
                    if (null != r)
                        if (W.hasOwnProperty(a)) r && o(this, a, r, e);
                        else {
                            "style" === a && (r && (r = this._previousStyleCopy = y({}, t.style)), r = b.createMarkupForStyles(r, this));
                            var i = null;
                            null != this._tag && m(this._tag, t) ? G.hasOwnProperty(a) || (i = M.createMarkupForCustomAttribute(a, r)) : i = M.createMarkupForProperty(a, r), i && (n += " " + i)
                        }
                }
            return e.renderToStaticMarkup ? n : (this._hostParent || (n += " " + M.createMarkupForRoot()), n += " " + M.createMarkupForID(this._domID))
        },
        _createContentMarkup: function(e, t, n) {
            var a = "",
                r = t.dangerouslySetInnerHTML;
            if (null != r) null != r.__html && (a = r.__html);
            else {
                var o = j[typeof t.children] ? t.children : null,
                    i = null != o ? null : t.children;
                if (null != o) a = O(o);
                else if (null != i) {
                    var s = this.mountChildren(i, e, n);
                    a = s.join("")
                }
            }
            return Y[this._tag] && "\n" === a.charAt(0) ? "\n" + a : a
        },
        _createInitialChildren: function(e, t, n, a) {
            var r = t.dangerouslySetInnerHTML;
            if (null != r) null != r.__html && w.queueHTML(a, r.__html);
            else {
                var o = j[typeof t.children] ? t.children : null,
                    i = null != o ? null : t.children;
                if (null != o) "" !== o && w.queueText(a, o);
                else if (null != i)
                    for (var s = this.mountChildren(i, e, n), l = 0; l < s.length; l++) w.queueChild(a, s[l])
            }
        },
        receiveComponent: function(e, t, n) {
            var a = this._currentElement;
            this._currentElement = e, this.updateComponent(t, a, e, n)
        },
        updateComponent: function(e, t, n, a) {
            var o = t.props,
                i = this._currentElement.props;
            switch (this._tag) {
                case "input":
                    o = T.getHostProps(this, o), i = T.getHostProps(this, i);
                    break;
                case "option":
                    o = I.getHostProps(this, o), i = I.getHostProps(this, i);
                    break;
                case "select":
                    o = _.getHostProps(this, o), i = _.getHostProps(this, i);
                    break;
                case "textarea":
                    o = D.getHostProps(this, o), i = D.getHostProps(this, i)
            }
            switch (r(this, i), this._updateDOMProperties(o, i, e), this._updateDOMChildren(o, i, e, a), this._tag) {
                case "input":
                    T.updateWrapper(this), L.updateValueIfChanged(this);
                    break;
                case "textarea":
                    D.updateWrapper(this);
                    break;
                case "select":
                    e.getReactMountReady().enqueue(p, this)
            }
        },
        _updateDOMProperties: function(e, t, n) {
            var a, r, i;
            for (a in e)
                if (!t.hasOwnProperty(a) && e.hasOwnProperty(a) && null != e[a])
                    if ("style" === a) {
                        var s = this._previousStyleCopy;
                        for (r in s) s.hasOwnProperty(r) && (i = i || {}, i[r] = "");
                        this._previousStyleCopy = null
                    } else W.hasOwnProperty(a) ? e[a] && H(this, a) : m(this._tag, e) ? G.hasOwnProperty(a) || M.deleteValueForAttribute(F(this), a) : (C.properties[a] || C.isCustomAttribute(a)) && M.deleteValueForProperty(F(this), a);
            for (a in t) {
                var l = t[a],
                    u = "style" === a ? this._previousStyleCopy : null != e ? e[a] : void 0;
                if (t.hasOwnProperty(a) && l !== u && (null != l || null != u))
                    if ("style" === a)
                        if (l ? l = this._previousStyleCopy = y({}, l) : this._previousStyleCopy = null, u) {
                            for (r in u) !u.hasOwnProperty(r) || l && l.hasOwnProperty(r) || (i = i || {}, i[r] = "");
                            for (r in l) l.hasOwnProperty(r) && u[r] !== l[r] && (i = i || {}, i[r] = l[r])
                        } else i = l;
                else if (W.hasOwnProperty(a)) l ? o(this, a, l, n) : u && H(this, a);
                else if (m(this._tag, t)) G.hasOwnProperty(a) || M.setValueForAttribute(F(this), a, l);
                else if (C.properties[a] || C.isCustomAttribute(a)) {
                    var c = F(this);
                    null != l ? M.setValueForProperty(c, a, l) : M.deleteValueForProperty(c, a)
                }
            }
            i && b.setValueForStyles(F(this), i, this)
        },
        _updateDOMChildren: function(e, t, n, a) {
            var r = j[typeof e.children] ? e.children : null,
                o = j[typeof t.children] ? t.children : null,
                i = e.dangerouslySetInnerHTML && e.dangerouslySetInnerHTML.__html,
                s = t.dangerouslySetInnerHTML && t.dangerouslySetInnerHTML.__html,
                l = null != r ? null : e.children,
                u = null != o ? null : t.children,
                c = null != r || null != i,
                d = null != o || null != s;
            null != l && null == u ? this.updateChildren(null, n, a) : c && !d && this.updateTextContent(""), null != o ? r !== o && this.updateTextContent("" + o) : null != s ? i !== s && this.updateMarkup("" + s) : null != u && this.updateChildren(u, n, a)
        },
        getHostNode: function() {
            return F(this)
        },
        unmountComponent: function(e) {
            switch (this._tag) {
                case "audio":
                case "form":
                case "iframe":
                case "img":
                case "link":
                case "object":
                case "source":
                case "video":
                    var t = this._wrapperState.listeners;
                    if (t)
                        for (var n = 0; n < t.length; n++) t[n].remove();
                    break;
                case "input":
                case "textarea":
                    L.stopTracking(this);
                    break;
                case "html":
                case "head":
                case "body":
                    f("66", this._tag)
            }
            this.unmountChildren(e), A.uncacheNode(this), S.deleteAllListeners(this), this._rootNodeID = 0, this._domID = 0, this._wrapperState = null
        },
        getPublicInstance: function() {
            return F(this)
        }
    }, y(g.prototype, g.Mixin, N.Mixin), e.exports = g
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        var n = {
            _topLevelWrapper: e,
            _idCounter: 1,
            _ownerDocument: t ? t.nodeType === r ? t : t.ownerDocument : null,
            _node: t,
            _tag: t ? t.nodeName.toLowerCase() : null,
            _namespaceURI: t ? t.namespaceURI : null
        };
        return n
    }
    var r = (n(44), 9);
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var a = n(3),
        r = n(12),
        o = n(4),
        i = function(e) {
            this._currentElement = null, this._hostNode = null, this._hostParent = null, this._hostContainerInfo = null, this._domID = 0
        };
    a(i.prototype, {
        mountComponent: function(e, t, n, a) {
            var i = n._idCounter++;
            this._domID = i, this._hostParent = t, this._hostContainerInfo = n;
            var s = " react-empty: " + this._domID + " ";
            if (e.useCreateElement) {
                var l = n._ownerDocument,
                    u = l.createComment(s);
                return o.precacheNode(this, u), r(u)
            }
            return e.renderToStaticMarkup ? "" : "\x3c!--" + s + "--\x3e"
        },
        receiveComponent: function() {},
        getHostNode: function() {
            return o.getNodeFromInstance(this)
        },
        unmountComponent: function() {
            o.uncacheNode(this)
        }
    }), e.exports = i
}, function(e, t, n) {
    "use strict";
    var a = {
        useCreateElement: !0,
        useFiber: !1
    };
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var a = n(29),
        r = n(4),
        o = {
            dangerouslyProcessChildrenUpdates: function(e, t) {
                var n = r.getNodeFromInstance(e);
                a.processUpdates(n, t)
            }
        };
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function a() {
        this._rootNodeID && p.updateWrapper(this)
    }

    function r(e) {
        return "checkbox" === e.type || "radio" === e.type ? null != e.checked : null != e.value
    }

    function o(e) {
        var t = this._currentElement.props,
            n = u.executeOnChange(t, e);
        d.asap(a, this);
        var r = t.name;
        if ("radio" === t.type && null != r) {
            for (var o = c.getNodeFromInstance(this), s = o; s.parentNode;) s = s.parentNode;
            for (var l = s.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), p = 0; p < l.length; p++) {
                var h = l[p];
                if (h !== o && h.form === o.form) {
                    var m = c.getInstanceFromNode(h);
                    m || i("90"), d.asap(a, m)
                }
            }
        }
        return n
    }
    var i = n(1),
        s = n(3),
        l = n(53),
        u = n(34),
        c = n(4),
        d = n(8),
        p = (n(0), n(2), {
            getHostProps: function(e, t) {
                var n = u.getValue(t),
                    a = u.getChecked(t);
                return s({
                    type: void 0,
                    step: void 0,
                    min: void 0,
                    max: void 0
                }, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: null != n ? n : e._wrapperState.initialValue,
                    checked: null != a ? a : e._wrapperState.initialChecked,
                    onChange: e._wrapperState.onChange
                })
            },
            mountWrapper: function(e, t) {
                var n = t.defaultValue;
                e._wrapperState = {
                    initialChecked: null != t.checked ? t.checked : t.defaultChecked,
                    initialValue: null != t.value ? t.value : n,
                    listeners: null,
                    onChange: o.bind(e),
                    controlled: r(t)
                }
            },
            updateWrapper: function(e) {
                var t = e._currentElement.props,
                    n = t.checked;
                null != n && l.setValueForProperty(c.getNodeFromInstance(e), "checked", n || !1);
                var a = c.getNodeFromInstance(e),
                    r = u.getValue(t);
                if (null != r)
                    if (0 === r && "" === a.value) a.value = "0";
                    else if ("number" === t.type) {
                    var o = parseFloat(a.value, 10) || 0;
                    (r != o || r == o && a.value != r) && (a.value = "" + r)
                } else a.value !== "" + r && (a.value = "" + r);
                else null == t.value && null != t.defaultValue && a.defaultValue !== "" + t.defaultValue && (a.defaultValue = "" + t.defaultValue), null == t.checked && null != t.defaultChecked && (a.defaultChecked = !!t.defaultChecked)
            },
            postMountWrapper: function(e) {
                var t = e._currentElement.props,
                    n = c.getNodeFromInstance(e);
                switch (t.type) {
                    case "submit":
                    case "reset":
                        break;
                    case "color":
                    case "date":
                    case "datetime":
                    case "datetime-local":
                    case "month":
                    case "time":
                    case "week":
                        n.value = "", n.value = n.defaultValue;
                        break;
                    default:
                        n.value = n.value
                }
                var a = n.name;
                "" !== a && (n.name = ""), n.defaultChecked = !n.defaultChecked, n.defaultChecked = !n.defaultChecked, "" !== a && (n.name = a)
            }
        });
    e.exports = p
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = "";
        return o.Children.forEach(e, function(e) {
            null != e && ("string" == typeof e || "number" == typeof e ? t += e : l || (l = !0))
        }), t
    }
    var r = n(3),
        o = n(15),
        i = n(4),
        s = n(55),
        l = (n(2), !1),
        u = {
            mountWrapper: function(e, t, n) {
                var r = null;
                if (null != n) {
                    var o = n;
                    "optgroup" === o._tag && (o = o._hostParent), null != o && "select" === o._tag && (r = s.getSelectValueContext(o))
                }
                var i = null;
                if (null != r) {
                    var l;
                    if (l = null != t.value ? t.value + "" : a(t.children), i = !1, Array.isArray(r)) {
                        for (var u = 0; u < r.length; u++)
                            if ("" + r[u] === l) {
                                i = !0;
                                break
                            }
                    } else i = "" + r === l
                }
                e._wrapperState = {
                    selected: i
                }
            },
            postMountWrapper: function(e) {
                var t = e._currentElement.props;
                if (null != t.value) {
                    i.getNodeFromInstance(e).setAttribute("value", t.value)
                }
            },
            getHostProps: function(e, t) {
                var n = r({
                    selected: void 0,
                    children: void 0
                }, t);
                null != e._wrapperState.selected && (n.selected = e._wrapperState.selected);
                var o = a(t.children);
                return o && (n.children = o), n
            }
        };
    e.exports = u
}, function(e, t, n) {
    "use strict";

    function a(e, t, n, a) {
        return e === n && t === a
    }

    function r(e) {
        var t = document.selection,
            n = t.createRange(),
            a = n.text.length,
            r = n.duplicate();
        r.moveToElementText(e), r.setEndPoint("EndToStart", n);
        var o = r.text.length;
        return {
            start: o,
            end: o + a
        }
    }

    function o(e) {
        var t = window.getSelection && window.getSelection();
        if (!t || 0 === t.rangeCount) return null;
        var n = t.anchorNode,
            r = t.anchorOffset,
            o = t.focusNode,
            i = t.focusOffset,
            s = t.getRangeAt(0);
        try {
            s.startContainer.nodeType, s.endContainer.nodeType
        } catch (e) {
            return null
        }
        var l = a(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset),
            u = l ? 0 : s.toString().length,
            c = s.cloneRange();
        c.selectNodeContents(e), c.setEnd(s.startContainer, s.startOffset);
        var d = a(c.startContainer, c.startOffset, c.endContainer, c.endOffset),
            p = d ? 0 : c.toString().length,
            h = p + u,
            m = document.createRange();
        m.setStart(n, r), m.setEnd(o, i);
        var g = m.collapsed;
        return {
            start: g ? h : p,
            end: g ? p : h
        }
    }

    function i(e, t) {
        var n, a, r = document.selection.createRange().duplicate();
        void 0 === t.end ? (n = t.start, a = n) : t.start > t.end ? (n = t.end, a = t.start) : (n = t.start, a = t.end), r.moveToElementText(e), r.moveStart("character", n), r.setEndPoint("EndToStart", r), r.moveEnd("character", a - n), r.select()
    }

    function s(e, t) {
        if (window.getSelection) {
            var n = window.getSelection(),
                a = e[c()].length,
                r = Math.min(t.start, a),
                o = void 0 === t.end ? r : Math.min(t.end, a);
            if (!n.extend && r > o) {
                var i = o;
                o = r, r = i
            }
            var s = u(e, r),
                l = u(e, o);
            if (s && l) {
                var d = document.createRange();
                d.setStart(s.node, s.offset), n.removeAllRanges(), r > o ? (n.addRange(d), n.extend(l.node, l.offset)) : (d.setEnd(l.node, l.offset), n.addRange(d))
            }
        }
    }
    var l = n(5),
        u = n(163),
        c = n(66),
        d = l.canUseDOM && "selection" in document && !("getSelection" in window),
        p = {
            getOffsets: d ? r : o,
            setOffsets: d ? i : s
        };
    e.exports = p
}, function(e, t, n) {
    "use strict";
    var a = n(1),
        r = n(3),
        o = n(29),
        i = n(12),
        s = n(4),
        l = n(26),
        u = (n(0), n(44), function(e) {
            this._currentElement = e, this._stringText = "" + e, this._hostNode = null, this._hostParent = null, this._domID = 0, this._mountIndex = 0, this._closingComment = null, this._commentNodes = null
        });
    r(u.prototype, {
        mountComponent: function(e, t, n, a) {
            var r = n._idCounter++,
                o = " react-text: " + r + " ";
            if (this._domID = r, this._hostParent = t, e.useCreateElement) {
                var u = n._ownerDocument,
                    c = u.createComment(o),
                    d = u.createComment(" /react-text "),
                    p = i(u.createDocumentFragment());
                return i.queueChild(p, i(c)), this._stringText && i.queueChild(p, i(u.createTextNode(this._stringText))), i.queueChild(p, i(d)), s.precacheNode(this, c), this._closingComment = d, p
            }
            var h = l(this._stringText);
            return e.renderToStaticMarkup ? h : "\x3c!--" + o + "--\x3e" + h + "\x3c!-- /react-text --\x3e"
        },
        receiveComponent: function(e, t) {
            if (e !== this._currentElement) {
                this._currentElement = e;
                var n = "" + e;
                if (n !== this._stringText) {
                    this._stringText = n;
                    var a = this.getHostNode();
                    o.replaceDelimitedText(a[0], a[1], n)
                }
            }
        },
        getHostNode: function() {
            var e = this._commentNodes;
            if (e) return e;
            if (!this._closingComment)
                for (var t = s.getNodeFromInstance(this), n = t.nextSibling;;) {
                    if (null == n && a("67", this._domID), 8 === n.nodeType && " /react-text " === n.nodeValue) {
                        this._closingComment = n;
                        break
                    }
                    n = n.nextSibling
                }
            return e = [this._hostNode, this._closingComment], this._commentNodes = e, e
        },
        unmountComponent: function() {
            this._closingComment = null, this._commentNodes = null, s.uncacheNode(this)
        }
    }), e.exports = u
}, function(e, t, n) {
    "use strict";

    function a() {
        this._rootNodeID && c.updateWrapper(this)
    }

    function r(e) {
        var t = this._currentElement.props,
            n = s.executeOnChange(t, e);
        return u.asap(a, this), n
    }
    var o = n(1),
        i = n(3),
        s = n(34),
        l = n(4),
        u = n(8),
        c = (n(0), n(2), {
            getHostProps: function(e, t) {
                return null != t.dangerouslySetInnerHTML && o("91"), i({}, t, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue,
                    onChange: e._wrapperState.onChange
                })
            },
            mountWrapper: function(e, t) {
                var n = s.getValue(t),
                    a = n;
                if (null == n) {
                    var i = t.defaultValue,
                        l = t.children;
                    null != l && (null != i && o("92"), Array.isArray(l) && (l.length <= 1 || o("93"), l = l[0]), i = "" + l), null == i && (i = ""), a = i
                }
                e._wrapperState = {
                    initialValue: "" + a,
                    listeners: null,
                    onChange: r.bind(e)
                }
            },
            updateWrapper: function(e) {
                var t = e._currentElement.props,
                    n = l.getNodeFromInstance(e),
                    a = s.getValue(t);
                if (null != a) {
                    var r = "" + a;
                    r !== n.value && (n.value = r), null == t.defaultValue && (n.defaultValue = r)
                }
                null != t.defaultValue && (n.defaultValue = t.defaultValue)
            },
            postMountWrapper: function(e) {
                var t = l.getNodeFromInstance(e),
                    n = t.textContent;
                n === e._wrapperState.initialValue && (t.value = n)
            }
        });
    e.exports = c
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        "_hostNode" in e || l("33"), "_hostNode" in t || l("33");
        for (var n = 0, a = e; a; a = a._hostParent) n++;
        for (var r = 0, o = t; o; o = o._hostParent) r++;
        for (; n - r > 0;) e = e._hostParent, n--;
        for (; r - n > 0;) t = t._hostParent, r--;
        for (var i = n; i--;) {
            if (e === t) return e;
            e = e._hostParent, t = t._hostParent
        }
        return null
    }

    function r(e, t) {
        "_hostNode" in e || l("35"), "_hostNode" in t || l("35");
        for (; t;) {
            if (t === e) return !0;
            t = t._hostParent
        }
        return !1
    }

    function o(e) {
        return "_hostNode" in e || l("36"), e._hostParent
    }

    function i(e, t, n) {
        for (var a = []; e;) a.push(e), e = e._hostParent;
        var r;
        for (r = a.length; r-- > 0;) t(a[r], "captured", n);
        for (r = 0; r < a.length; r++) t(a[r], "bubbled", n)
    }

    function s(e, t, n, r, o) {
        for (var i = e && t ? a(e, t) : null, s = []; e && e !== i;) s.push(e), e = e._hostParent;
        for (var l = []; t && t !== i;) l.push(t), t = t._hostParent;
        var u;
        for (u = 0; u < s.length; u++) n(s[u], "bubbled", r);
        for (u = l.length; u-- > 0;) n(l[u], "captured", o)
    }
    var l = n(1);
    n(0);
    e.exports = {
        isAncestor: r,
        getLowestCommonAncestor: a,
        getParentInstance: o,
        traverseTwoPhase: i,
        traverseEnterLeave: s
    }
}, function(e, t, n) {
    "use strict";

    function a() {
        this.reinitializeTransaction()
    }
    var r = n(3),
        o = n(8),
        i = n(25),
        s = n(7),
        l = {
            initialize: s,
            close: function() {
                p.isBatchingUpdates = !1
            }
        },
        u = {
            initialize: s,
            close: o.flushBatchedUpdates.bind(o)
        },
        c = [u, l];
    r(a.prototype, i, {
        getTransactionWrappers: function() {
            return c
        }
    });
    var d = new a,
        p = {
            isBatchingUpdates: !1,
            batchedUpdates: function(e, t, n, a, r, o) {
                var i = p.isBatchingUpdates;
                return p.isBatchingUpdates = !0, i ? e(t, n, a, r, o) : d.perform(e, null, t, n, a, r, o)
            }
        };
    e.exports = p
}, function(e, t, n) {
    "use strict";

    function a() {
        M || (M = !0, v.EventEmitter.injectReactEventListener(y), v.EventPluginHub.injectEventPluginOrder(s), v.EventPluginUtils.injectComponentTree(p), v.EventPluginUtils.injectTreeTraversal(m), v.EventPluginHub.injectEventPluginsByName({
            SimpleEventPlugin: C,
            EnterLeaveEventPlugin: l,
            ChangeEventPlugin: i,
            SelectEventPlugin: E,
            BeforeInputEventPlugin: o
        }), v.HostComponent.injectGenericComponentClass(d), v.HostComponent.injectTextComponentClass(g), v.DOMProperty.injectDOMPropertyConfig(r), v.DOMProperty.injectDOMPropertyConfig(u), v.DOMProperty.injectDOMPropertyConfig(w), v.EmptyComponent.injectEmptyComponentFactory(function(e) {
            return new h(e)
        }), v.Updates.injectReconcileTransaction(b), v.Updates.injectBatchingStrategy(f), v.Component.injectEnvironment(c))
    }
    var r = n(104),
        o = n(106),
        i = n(108),
        s = n(110),
        l = n(111),
        u = n(113),
        c = n(115),
        d = n(118),
        p = n(4),
        h = n(120),
        m = n(128),
        g = n(126),
        f = n(129),
        y = n(133),
        v = n(134),
        b = n(139),
        w = n(144),
        E = n(145),
        C = n(146),
        M = !1;
    e.exports = {
        inject: a
    }
}, function(e, t, n) {
    "use strict";
    var a = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        r.enqueueEvents(e), r.processEventQueue(!1)
    }
    var r = n(17),
        o = {
            handleTopLevel: function(e, t, n, o) {
                a(r.extractEvents(e, t, n, o))
            }
        };
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function a(e) {
        for (; e._hostParent;) e = e._hostParent;
        var t = d.getNodeFromInstance(e),
            n = t.parentNode;
        return d.getClosestInstanceFromNode(n)
    }

    function r(e, t) {
        this.topLevelType = e, this.nativeEvent = t, this.ancestors = []
    }

    function o(e) {
        var t = h(e.nativeEvent),
            n = d.getClosestInstanceFromNode(t),
            r = n;
        do {
            e.ancestors.push(r), r = r && a(r)
        } while (r);
        for (var o = 0; o < e.ancestors.length; o++) n = e.ancestors[o], g._handleTopLevel(e.topLevelType, n, e.nativeEvent, h(e.nativeEvent))
    }

    function i(e) {
        e(m(window))
    }
    var s = n(3),
        l = n(46),
        u = n(5),
        c = n(11),
        d = n(4),
        p = n(8),
        h = n(41),
        m = n(94);
    s(r.prototype, {
        destructor: function() {
            this.topLevelType = null, this.nativeEvent = null, this.ancestors.length = 0
        }
    }), c.addPoolingTo(r, c.twoArgumentPooler);
    var g = {
        _enabled: !0,
        _handleTopLevel: null,
        WINDOW_HANDLE: u.canUseDOM ? window : null,
        setHandleTopLevel: function(e) {
            g._handleTopLevel = e
        },
        setEnabled: function(e) {
            g._enabled = !!e
        },
        isEnabled: function() {
            return g._enabled
        },
        trapBubbledEvent: function(e, t, n) {
            return n ? l.listen(n, t, g.dispatchEvent.bind(null, e)) : null
        },
        trapCapturedEvent: function(e, t, n) {
            return n ? l.capture(n, t, g.dispatchEvent.bind(null, e)) : null
        },
        monitorScrollValue: function(e) {
            var t = i.bind(null, e);
            l.listen(window, "scroll", t)
        },
        dispatchEvent: function(e, t) {
            if (g._enabled) {
                var n = r.getPooled(e, t);
                try {
                    p.batchedUpdates(o, n)
                } finally {
                    r.release(n)
                }
            }
        }
    };
    e.exports = g
}, function(e, t, n) {
    "use strict";
    var a = n(13),
        r = n(17),
        o = n(32),
        i = n(35),
        s = n(56),
        l = n(23),
        u = n(58),
        c = n(8),
        d = {
            Component: i.injection,
            DOMProperty: a.injection,
            EmptyComponent: s.injection,
            EventPluginHub: r.injection,
            EventPluginUtils: o.injection,
            EventEmitter: l.injection,
            HostComponent: u.injection,
            Updates: c.injection
        };
    e.exports = d
}, function(e, t, n) {
    "use strict";
    var a = n(157),
        r = /\/?>/,
        o = /^<\!\-\-/,
        i = {
            CHECKSUM_ATTR_NAME: "data-react-checksum",
            addChecksumToMarkup: function(e) {
                var t = a(e);
                return o.test(e) ? e : e.replace(r, " " + i.CHECKSUM_ATTR_NAME + '="' + t + '"$&')
            },
            canReuseMarkup: function(e, t) {
                var n = t.getAttribute(i.CHECKSUM_ATTR_NAME);
                return n = n && parseInt(n, 10), a(e) === n
            }
        };
    e.exports = i
}, function(e, t, n) {
    "use strict";

    function a(e, t, n) {
        return {
            type: "INSERT_MARKUP",
            content: e,
            fromIndex: null,
            fromNode: null,
            toIndex: n,
            afterNode: t
        }
    }

    function r(e, t, n) {
        return {
            type: "MOVE_EXISTING",
            content: null,
            fromIndex: e._mountIndex,
            fromNode: p.getHostNode(e),
            toIndex: n,
            afterNode: t
        }
    }

    function o(e, t) {
        return {
            type: "REMOVE_NODE",
            content: null,
            fromIndex: e._mountIndex,
            fromNode: t,
            toIndex: null,
            afterNode: null
        }
    }

    function i(e) {
        return {
            type: "SET_MARKUP",
            content: e,
            fromIndex: null,
            fromNode: null,
            toIndex: null,
            afterNode: null
        }
    }

    function s(e) {
        return {
            type: "TEXT_CONTENT",
            content: e,
            fromIndex: null,
            fromNode: null,
            toIndex: null,
            afterNode: null
        }
    }

    function l(e, t) {
        return t && (e = e || [], e.push(t)), e
    }

    function u(e, t) {
        d.processChildrenUpdates(e, t)
    }
    var c = n(1),
        d = n(35),
        p = (n(19), n(6), n(10), n(14)),
        h = n(114),
        m = (n(7), n(160)),
        g = (n(0), {
            Mixin: {
                _reconcilerInstantiateChildren: function(e, t, n) {
                    return h.instantiateChildren(e, t, n)
                },
                _reconcilerUpdateChildren: function(e, t, n, a, r, o) {
                    var i, s = 0;
                    return i = m(t, s), h.updateChildren(e, i, n, a, r, this, this._hostContainerInfo, o, s), i
                },
                mountChildren: function(e, t, n) {
                    var a = this._reconcilerInstantiateChildren(e, t, n);
                    this._renderedChildren = a;
                    var r = [],
                        o = 0;
                    for (var i in a)
                        if (a.hasOwnProperty(i)) {
                            var s = a[i],
                                l = 0,
                                u = p.mountComponent(s, t, this, this._hostContainerInfo, n, l);
                            s._mountIndex = o++, r.push(u)
                        }
                    return r
                },
                updateTextContent: function(e) {
                    var t = this._renderedChildren;
                    h.unmountChildren(t, !1);
                    for (var n in t) t.hasOwnProperty(n) && c("118");
                    u(this, [s(e)])
                },
                updateMarkup: function(e) {
                    var t = this._renderedChildren;
                    h.unmountChildren(t, !1);
                    for (var n in t) t.hasOwnProperty(n) && c("118");
                    u(this, [i(e)])
                },
                updateChildren: function(e, t, n) {
                    this._updateChildren(e, t, n)
                },
                _updateChildren: function(e, t, n) {
                    var a = this._renderedChildren,
                        r = {},
                        o = [],
                        i = this._reconcilerUpdateChildren(a, e, o, r, t, n);
                    if (i || a) {
                        var s, c = null,
                            d = 0,
                            h = 0,
                            m = 0,
                            g = null;
                        for (s in i)
                            if (i.hasOwnProperty(s)) {
                                var f = a && a[s],
                                    y = i[s];
                                f === y ? (c = l(c, this.moveChild(f, g, d, h)), h = Math.max(f._mountIndex, h), f._mountIndex = d) : (f && (h = Math.max(f._mountIndex, h)), c = l(c, this._mountChildAtIndex(y, o[m], g, d, t, n)), m++), d++, g = p.getHostNode(y)
                            }
                        for (s in r) r.hasOwnProperty(s) && (c = l(c, this._unmountChild(a[s], r[s])));
                        c && u(this, c), this._renderedChildren = i
                    }
                },
                unmountChildren: function(e) {
                    var t = this._renderedChildren;
                    h.unmountChildren(t, e), this._renderedChildren = null
                },
                moveChild: function(e, t, n, a) {
                    if (e._mountIndex < a) return r(e, t, n)
                },
                createChild: function(e, t, n) {
                    return a(n, t, e._mountIndex)
                },
                removeChild: function(e, t) {
                    return o(e, t)
                },
                _mountChildAtIndex: function(e, t, n, a, r, o) {
                    return e._mountIndex = a, this.createChild(e, n, t)
                },
                _unmountChild: function(e, t) {
                    var n = this.removeChild(e, t);
                    return e._mountIndex = null, n
                }
            }
        });
    e.exports = g
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return !(!e || "function" != typeof e.attachRef || "function" != typeof e.detachRef)
    }
    var r = n(1),
        o = (n(0), {
            addComponentAsRefTo: function(e, t, n) {
                a(n) || r("119"), n.attachRef(t, e)
            },
            removeComponentAsRefFrom: function(e, t, n) {
                a(n) || r("120");
                var o = n.getPublicInstance();
                o && o.refs[t] === e.getPublicInstance() && n.detachRef(t)
            }
        });
    e.exports = o
}, function(e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(e, t, n) {
    "use strict";

    function a(e) {
        this.reinitializeTransaction(), this.renderToStaticMarkup = !1, this.reactMountReady = o.getPooled(null), this.useCreateElement = e
    }
    var r = n(3),
        o = n(52),
        i = n(11),
        s = n(23),
        l = n(59),
        u = (n(6), n(25)),
        c = n(37),
        d = {
            initialize: l.getSelectionInformation,
            close: l.restoreSelection
        },
        p = {
            initialize: function() {
                var e = s.isEnabled();
                return s.setEnabled(!1), e
            },
            close: function(e) {
                s.setEnabled(e)
            }
        },
        h = {
            initialize: function() {
                this.reactMountReady.reset()
            },
            close: function() {
                this.reactMountReady.notifyAll()
            }
        },
        m = [d, p, h],
        g = {
            getTransactionWrappers: function() {
                return m
            },
            getReactMountReady: function() {
                return this.reactMountReady
            },
            getUpdateQueue: function() {
                return c
            },
            checkpoint: function() {
                return this.reactMountReady.checkpoint()
            },
            rollback: function(e) {
                this.reactMountReady.rollback(e)
            },
            destructor: function() {
                o.release(this.reactMountReady), this.reactMountReady = null
            }
        };
    r(a.prototype, u, g), i.addPoolingTo(a), e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e, t, n) {
        "function" == typeof e ? e(t.getPublicInstance()) : o.addComponentAsRefTo(t, e, n)
    }

    function r(e, t, n) {
        "function" == typeof e ? e(null) : o.removeComponentAsRefFrom(t, e, n)
    }
    var o = n(137),
        i = {};
    i.attachRefs = function(e, t) {
        if (null !== t && "object" == typeof t) {
            var n = t.ref;
            null != n && a(n, e, t._owner)
        }
    }, i.shouldUpdateRefs = function(e, t) {
        var n = null,
            a = null;
        null !== e && "object" == typeof e && (n = e.ref, a = e._owner);
        var r = null,
            o = null;
        return null !== t && "object" == typeof t && (r = t.ref, o = t._owner), n !== r || "string" == typeof r && o !== a
    }, i.detachRefs = function(e, t) {
        if (null !== t && "object" == typeof t) {
            var n = t.ref;
            null != n && r(n, e, t._owner)
        }
    }, e.exports = i
}, function(e, t, n) {
    "use strict";

    function a(e) {
        this.reinitializeTransaction(), this.renderToStaticMarkup = e, this.useCreateElement = !1, this.updateQueue = new s(this)
    }
    var r = n(3),
        o = n(11),
        i = n(25),
        s = (n(6), n(142)),
        l = [],
        u = {
            enqueue: function() {}
        },
        c = {
            getTransactionWrappers: function() {
                return l
            },
            getReactMountReady: function() {
                return u
            },
            getUpdateQueue: function() {
                return this.updateQueue
            },
            destructor: function() {},
            checkpoint: function() {},
            rollback: function() {}
        };
    r(a.prototype, i, c), o.addPoolingTo(a), e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var r = n(37),
        o = (n(2), function() {
            function e(t) {
                a(this, e), this.transaction = t
            }
            return e.prototype.isMounted = function(e) {
                return !1
            }, e.prototype.enqueueCallback = function(e, t, n) {
                this.transaction.isInTransaction() && r.enqueueCallback(e, t, n)
            }, e.prototype.enqueueForceUpdate = function(e) {
                this.transaction.isInTransaction() && r.enqueueForceUpdate(e)
            }, e.prototype.enqueueReplaceState = function(e, t) {
                this.transaction.isInTransaction() && r.enqueueReplaceState(e, t)
            }, e.prototype.enqueueSetState = function(e, t) {
                this.transaction.isInTransaction() && r.enqueueSetState(e, t)
            }, e
        }());
    e.exports = o
}, function(e, t, n) {
    "use strict";
    e.exports = "15.6.2"
}, function(e, t, n) {
    "use strict";
    var a = {
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace"
        },
        r = {
            accentHeight: "accent-height",
            accumulate: 0,
            additive: 0,
            alignmentBaseline: "alignment-baseline",
            allowReorder: "allowReorder",
            alphabetic: 0,
            amplitude: 0,
            arabicForm: "arabic-form",
            ascent: 0,
            attributeName: "attributeName",
            attributeType: "attributeType",
            autoReverse: "autoReverse",
            azimuth: 0,
            baseFrequency: "baseFrequency",
            baseProfile: "baseProfile",
            baselineShift: "baseline-shift",
            bbox: 0,
            begin: 0,
            bias: 0,
            by: 0,
            calcMode: "calcMode",
            capHeight: "cap-height",
            clip: 0,
            clipPath: "clip-path",
            clipRule: "clip-rule",
            clipPathUnits: "clipPathUnits",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            contentScriptType: "contentScriptType",
            contentStyleType: "contentStyleType",
            cursor: 0,
            cx: 0,
            cy: 0,
            d: 0,
            decelerate: 0,
            descent: 0,
            diffuseConstant: "diffuseConstant",
            direction: 0,
            display: 0,
            divisor: 0,
            dominantBaseline: "dominant-baseline",
            dur: 0,
            dx: 0,
            dy: 0,
            edgeMode: "edgeMode",
            elevation: 0,
            enableBackground: "enable-background",
            end: 0,
            exponent: 0,
            externalResourcesRequired: "externalResourcesRequired",
            fill: 0,
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            filter: 0,
            filterRes: "filterRes",
            filterUnits: "filterUnits",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            focusable: 0,
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            format: 0,
            from: 0,
            fx: 0,
            fy: 0,
            g1: 0,
            g2: 0,
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            glyphRef: "glyphRef",
            gradientTransform: "gradientTransform",
            gradientUnits: "gradientUnits",
            hanging: 0,
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            ideographic: 0,
            imageRendering: "image-rendering",
            in : 0,
            in2: 0,
            intercept: 0,
            k: 0,
            k1: 0,
            k2: 0,
            k3: 0,
            k4: 0,
            kernelMatrix: "kernelMatrix",
            kernelUnitLength: "kernelUnitLength",
            kerning: 0,
            keyPoints: "keyPoints",
            keySplines: "keySplines",
            keyTimes: "keyTimes",
            lengthAdjust: "lengthAdjust",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            limitingConeAngle: "limitingConeAngle",
            local: 0,
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            markerHeight: "markerHeight",
            markerUnits: "markerUnits",
            markerWidth: "markerWidth",
            mask: 0,
            maskContentUnits: "maskContentUnits",
            maskUnits: "maskUnits",
            mathematical: 0,
            mode: 0,
            numOctaves: "numOctaves",
            offset: 0,
            opacity: 0,
            operator: 0,
            order: 0,
            orient: 0,
            orientation: 0,
            origin: 0,
            overflow: 0,
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pathLength: "pathLength",
            patternContentUnits: "patternContentUnits",
            patternTransform: "patternTransform",
            patternUnits: "patternUnits",
            pointerEvents: "pointer-events",
            points: 0,
            pointsAtX: "pointsAtX",
            pointsAtY: "pointsAtY",
            pointsAtZ: "pointsAtZ",
            preserveAlpha: "preserveAlpha",
            preserveAspectRatio: "preserveAspectRatio",
            primitiveUnits: "primitiveUnits",
            r: 0,
            radius: 0,
            refX: "refX",
            refY: "refY",
            renderingIntent: "rendering-intent",
            repeatCount: "repeatCount",
            repeatDur: "repeatDur",
            requiredExtensions: "requiredExtensions",
            requiredFeatures: "requiredFeatures",
            restart: 0,
            result: 0,
            rotate: 0,
            rx: 0,
            ry: 0,
            scale: 0,
            seed: 0,
            shapeRendering: "shape-rendering",
            slope: 0,
            spacing: 0,
            specularConstant: "specularConstant",
            specularExponent: "specularExponent",
            speed: 0,
            spreadMethod: "spreadMethod",
            startOffset: "startOffset",
            stdDeviation: "stdDeviation",
            stemh: 0,
            stemv: 0,
            stitchTiles: "stitchTiles",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            string: 0,
            stroke: 0,
            strokeDasharray: "stroke-dasharray",
            strokeDashoffset: "stroke-dashoffset",
            strokeLinecap: "stroke-linecap",
            strokeLinejoin: "stroke-linejoin",
            strokeMiterlimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            surfaceScale: "surfaceScale",
            systemLanguage: "systemLanguage",
            tableValues: "tableValues",
            targetX: "targetX",
            targetY: "targetY",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            textLength: "textLength",
            to: 0,
            transform: 0,
            u1: 0,
            u2: 0,
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicode: 0,
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            values: 0,
            vectorEffect: "vector-effect",
            version: 0,
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            viewBox: "viewBox",
            viewTarget: "viewTarget",
            visibility: 0,
            widths: 0,
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            x: 0,
            xHeight: "x-height",
            x1: 0,
            x2: 0,
            xChannelSelector: "xChannelSelector",
            xlinkActuate: "xlink:actuate",
            xlinkArcrole: "xlink:arcrole",
            xlinkHref: "xlink:href",
            xlinkRole: "xlink:role",
            xlinkShow: "xlink:show",
            xlinkTitle: "xlink:title",
            xlinkType: "xlink:type",
            xmlBase: "xml:base",
            xmlns: 0,
            xmlnsXlink: "xmlns:xlink",
            xmlLang: "xml:lang",
            xmlSpace: "xml:space",
            y: 0,
            y1: 0,
            y2: 0,
            yChannelSelector: "yChannelSelector",
            z: 0,
            zoomAndPan: "zoomAndPan"
        },
        o = {
            Properties: {},
            DOMAttributeNamespaces: {
                xlinkActuate: a.xlink,
                xlinkArcrole: a.xlink,
                xlinkHref: a.xlink,
                xlinkRole: a.xlink,
                xlinkShow: a.xlink,
                xlinkTitle: a.xlink,
                xlinkType: a.xlink,
                xmlBase: a.xml,
                xmlLang: a.xml,
                xmlSpace: a.xml
            },
            DOMAttributeNames: {}
        };
    Object.keys(r).forEach(function(e) {
        o.Properties[e] = 0, r[e] && (o.DOMAttributeNames[e] = r[e])
    }), e.exports = o
}, function(e, t, n) {
    "use strict";

    function a(e) {
        if ("selectionStart" in e && l.hasSelectionCapabilities(e)) return {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        if (window.getSelection) {
            var t = window.getSelection();
            return {
                anchorNode: t.anchorNode,
                anchorOffset: t.anchorOffset,
                focusNode: t.focusNode,
                focusOffset: t.focusOffset
            }
        }
        if (document.selection) {
            var n = document.selection.createRange();
            return {
                parentElement: n.parentElement(),
                text: n.text,
                top: n.boundingTop,
                left: n.boundingLeft
            }
        }
    }

    function r(e, t) {
        if (v || null == g || g !== c()) return null;
        var n = a(g);
        if (!y || !p(y, n)) {
            y = n;
            var r = u.getPooled(m.select, f, e, t);
            return r.type = "select", r.target = g, o.accumulateTwoPhaseDispatches(r), r
        }
        return null
    }
    var o = n(18),
        i = n(5),
        s = n(4),
        l = n(59),
        u = n(9),
        c = n(48),
        d = n(69),
        p = n(28),
        h = i.canUseDOM && "documentMode" in document && document.documentMode <= 11,
        m = {
            select: {
                phasedRegistrationNames: {
                    bubbled: "onSelect",
                    captured: "onSelectCapture"
                },
                dependencies: ["topBlur", "topContextMenu", "topFocus", "topKeyDown", "topKeyUp", "topMouseDown", "topMouseUp", "topSelectionChange"]
            }
        },
        g = null,
        f = null,
        y = null,
        v = !1,
        b = !1,
        w = {
            eventTypes: m,
            extractEvents: function(e, t, n, a) {
                if (!b) return null;
                var o = t ? s.getNodeFromInstance(t) : window;
                switch (e) {
                    case "topFocus":
                        (d(o) || "true" === o.contentEditable) && (g = o, f = t, y = null);
                        break;
                    case "topBlur":
                        g = null, f = null, y = null;
                        break;
                    case "topMouseDown":
                        v = !0;
                        break;
                    case "topContextMenu":
                    case "topMouseUp":
                        return v = !1, r(n, a);
                    case "topSelectionChange":
                        if (h) break;
                    case "topKeyDown":
                    case "topKeyUp":
                        return r(n, a)
                }
                return null
            },
            didPutListener: function(e, t, n) {
                "onSelect" === t && (b = !0)
            }
        };
    e.exports = w
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return "." + e._rootNodeID
    }

    function r(e) {
        return "button" === e || "input" === e || "select" === e || "textarea" === e
    }
    var o = n(1),
        i = n(46),
        s = n(18),
        l = n(4),
        u = n(147),
        c = n(148),
        d = n(9),
        p = n(151),
        h = n(153),
        m = n(24),
        g = n(150),
        f = n(154),
        y = n(155),
        v = n(20),
        b = n(156),
        w = n(7),
        E = n(39),
        C = (n(0), {}),
        M = {};
    ["abort", "animationEnd", "animationIteration", "animationStart", "blur", "canPlay", "canPlayThrough", "click", "contextMenu", "copy", "cut", "doubleClick", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "focus", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "progress", "rateChange", "reset", "scroll", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchMove", "touchStart", "transitionEnd", "volumeChange", "waiting", "wheel"].forEach(function(e) {
        var t = e[0].toUpperCase() + e.slice(1),
            n = "on" + t,
            a = "top" + t,
            r = {
                phasedRegistrationNames: {
                    bubbled: n,
                    captured: n + "Capture"
                },
                dependencies: [a]
            };
        C[e] = r, M[a] = r
    });
    var S = {},
        k = {
            eventTypes: C,
            extractEvents: function(e, t, n, a) {
                var r = M[e];
                if (!r) return null;
                var i;
                switch (e) {
                    case "topAbort":
                    case "topCanPlay":
                    case "topCanPlayThrough":
                    case "topDurationChange":
                    case "topEmptied":
                    case "topEncrypted":
                    case "topEnded":
                    case "topError":
                    case "topInput":
                    case "topInvalid":
                    case "topLoad":
                    case "topLoadedData":
                    case "topLoadedMetadata":
                    case "topLoadStart":
                    case "topPause":
                    case "topPlay":
                    case "topPlaying":
                    case "topProgress":
                    case "topRateChange":
                    case "topReset":
                    case "topSeeked":
                    case "topSeeking":
                    case "topStalled":
                    case "topSubmit":
                    case "topSuspend":
                    case "topTimeUpdate":
                    case "topVolumeChange":
                    case "topWaiting":
                        i = d;
                        break;
                    case "topKeyPress":
                        if (0 === E(n)) return null;
                    case "topKeyDown":
                    case "topKeyUp":
                        i = h;
                        break;
                    case "topBlur":
                    case "topFocus":
                        i = p;
                        break;
                    case "topClick":
                        if (2 === n.button) return null;
                    case "topDoubleClick":
                    case "topMouseDown":
                    case "topMouseMove":
                    case "topMouseUp":
                    case "topMouseOut":
                    case "topMouseOver":
                    case "topContextMenu":
                        i = m;
                        break;
                    case "topDrag":
                    case "topDragEnd":
                    case "topDragEnter":
                    case "topDragExit":
                    case "topDragLeave":
                    case "topDragOver":
                    case "topDragStart":
                    case "topDrop":
                        i = g;
                        break;
                    case "topTouchCancel":
                    case "topTouchEnd":
                    case "topTouchMove":
                    case "topTouchStart":
                        i = f;
                        break;
                    case "topAnimationEnd":
                    case "topAnimationIteration":
                    case "topAnimationStart":
                        i = u;
                        break;
                    case "topTransitionEnd":
                        i = y;
                        break;
                    case "topScroll":
                        i = v;
                        break;
                    case "topWheel":
                        i = b;
                        break;
                    case "topCopy":
                    case "topCut":
                    case "topPaste":
                        i = c
                }
                i || o("86", e);
                var l = i.getPooled(r, t, n, a);
                return s.accumulateTwoPhaseDispatches(l), l
            },
            didPutListener: function(e, t, n) {
                if ("onClick" === t && !r(e._tag)) {
                    var o = a(e),
                        s = l.getNodeFromInstance(e);
                    S[o] || (S[o] = i.listen(s, "click", w))
                }
            },
            willDeleteListener: function(e, t) {
                if ("onClick" === t && !r(e._tag)) {
                    var n = a(e);
                    S[n].remove(), delete S[n]
                }
            }
        };
    e.exports = k
}, function(e, t, n) {
    "use strict";

    function a(e, t, n, a) {
        return r.call(this, e, t, n, a)
    }
    var r = n(9),
        o = {
            animationName: null,
            elapsedTime: null,
            pseudoElement: null
        };
    r.augmentClass(a, o), e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e, t, n, a) {
        return r.call(this, e, t, n, a)
    }
    var r = n(9),
        o = {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        };
    r.augmentClass(a, o), e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e, t, n, a) {
        return r.call(this, e, t, n, a)
    }
    var r = n(9),
        o = {
            data: null
        };
    r.augmentClass(a, o), e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e, t, n, a) {
        return r.call(this, e, t, n, a)
    }
    var r = n(24),
        o = {
            dataTransfer: null
        };
    r.augmentClass(a, o), e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e, t, n, a) {
        return r.call(this, e, t, n, a)
    }
    var r = n(20),
        o = {
            relatedTarget: null
        };
    r.augmentClass(a, o), e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e, t, n, a) {
        return r.call(this, e, t, n, a)
    }
    var r = n(9),
        o = {
            data: null
        };
    r.augmentClass(a, o), e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e, t, n, a) {
        return r.call(this, e, t, n, a)
    }
    var r = n(20),
        o = n(39),
        i = n(161),
        s = n(40),
        l = {
            key: i,
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: s,
            charCode: function(e) {
                return "keypress" === e.type ? o(e) : 0
            },
            keyCode: function(e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            },
            which: function(e) {
                return "keypress" === e.type ? o(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            }
        };
    r.augmentClass(a, l), e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e, t, n, a) {
        return r.call(this, e, t, n, a)
    }
    var r = n(20),
        o = n(40),
        i = {
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: o
        };
    r.augmentClass(a, i), e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e, t, n, a) {
        return r.call(this, e, t, n, a)
    }
    var r = n(9),
        o = {
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null
        };
    r.augmentClass(a, o), e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e, t, n, a) {
        return r.call(this, e, t, n, a)
    }
    var r = n(24),
        o = {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: null,
            deltaMode: null
        };
    r.augmentClass(a, o), e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        for (var t = 1, n = 0, a = 0, o = e.length, i = -4 & o; a < i;) {
            for (var s = Math.min(a + 4096, i); a < s; a += 4) n += (t += e.charCodeAt(a)) + (t += e.charCodeAt(a + 1)) + (t += e.charCodeAt(a + 2)) + (t += e.charCodeAt(a + 3));
            t %= r, n %= r
        }
        for (; a < o; a++) n += t += e.charCodeAt(a);
        return t %= r, n %= r, t | n << 16
    }
    var r = 65521;
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e, t, n, a) {
        if (null == t || "boolean" == typeof t || "" === t) return "";
        var r = isNaN(t);
        if (a || r || 0 === t || o.hasOwnProperty(e) && o[e]) return "" + t;
        if ("string" == typeof t) {
            t = t.trim()
        }
        return t + "px"
    }
    var r = n(51),
        o = (n(2), r.isUnitlessNumber);
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = i.get(e);
        if (t) return t = s(t), t ? o.getNodeFromInstance(t) : null;
        "function" == typeof e.render ? r("44") : r("45", Object.keys(e))
    }
    var r = n(1),
        o = (n(10), n(4)),
        i = n(19),
        s = n(65);
    n(0), n(2);
    e.exports = a
}, function(e, t, n) {
    "use strict";
    (function(t) {
        function a(e, t, n, a) {
            if (e && "object" == typeof e) {
                var r = e,
                    o = void 0 === r[n];
                o && null != t && (r[n] = t)
            }
        }

        function r(e, t) {
            if (null == e) return e;
            var n = {};
            return o(e, a, n), n
        }
        var o = (n(33), n(71));
        n(2);
        void 0 !== t && t.env, e.exports = r
    }).call(t, n(49))
}, function(e, t, n) {
    "use strict";

    function a(e) {
        if (e.key) {
            var t = o[e.key] || e.key;
            if ("Unidentified" !== t) return t
        }
        if ("keypress" === e.type) {
            var n = r(e);
            return 13 === n ? "Enter" : String.fromCharCode(n)
        }
        return "keydown" === e.type || "keyup" === e.type ? i[e.keyCode] || "Unidentified" : ""
    }
    var r = n(39),
        o = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        i = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        };
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = e && (r && e[r] || e[o]);
        if ("function" == typeof t) return t
    }
    var r = "function" == typeof Symbol && Symbol.iterator,
        o = "@@iterator";
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function r(e) {
        for (; e;) {
            if (e.nextSibling) return e.nextSibling;
            e = e.parentNode
        }
    }

    function o(e, t) {
        for (var n = a(e), o = 0, i = 0; n;) {
            if (3 === n.nodeType) {
                if (i = o + n.textContent.length, o <= t && i >= t) return {
                    node: n,
                    offset: t - o
                };
                o = i
            }
            n = a(r(n))
        }
    }
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n["ms" + e] = "MS" + t, n["O" + e] = "o" + t.toLowerCase(), n
    }

    function r(e) {
        if (s[e]) return s[e];
        if (!i[e]) return e;
        var t = i[e];
        for (var n in t)
            if (t.hasOwnProperty(n) && n in l) return s[e] = t[n];
        return ""
    }
    var o = n(5),
        i = {
            animationend: a("Animation", "AnimationEnd"),
            animationiteration: a("Animation", "AnimationIteration"),
            animationstart: a("Animation", "AnimationStart"),
            transitionend: a("Transition", "TransitionEnd")
        },
        s = {},
        l = {};
    o.canUseDOM && (l = document.createElement("div").style, "AnimationEvent" in window || (delete i.animationend.animation, delete i.animationiteration.animation, delete i.animationstart.animation), "TransitionEvent" in window || delete i.transitionend.transition), e.exports = r
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return '"' + r(e) + '"'
    }
    var r = n(26);
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var a = n(60);
    e.exports = a.renderSubtreeIntoContainer
}, function(e, t, n) {
    try {
        (function() {
            "use strict";

            function e(e) {
                var t = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
                return t && decodeURIComponent(t[1].replace(/\+/g, " "))
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = e
        }).call(this)
    } finally {}
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + ("" + e).replace(/[=:]/g, function(e) {
            return t[e]
        })
    }

    function r(e) {
        var t = /(=0|=2)/g,
            n = {
                "=0": "=",
                "=2": ":"
            };
        return ("" + ("." === e[0] && "$" === e[1] ? e.substring(2) : e.substring(1))).replace(t, function(e) {
            return n[e]
        })
    }
    var o = {
        escape: a,
        unescape: r
    };
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var a = n(21),
        r = (n(0), function(e) {
            var t = this;
            if (t.instancePool.length) {
                var n = t.instancePool.pop();
                return t.call(n, e), n
            }
            return new t(e)
        }),
        o = function(e, t) {
            var n = this;
            if (n.instancePool.length) {
                var a = n.instancePool.pop();
                return n.call(a, e, t), a
            }
            return new n(e, t)
        },
        i = function(e, t, n) {
            var a = this;
            if (a.instancePool.length) {
                var r = a.instancePool.pop();
                return a.call(r, e, t, n), r
            }
            return new a(e, t, n)
        },
        s = function(e, t, n, a) {
            var r = this;
            if (r.instancePool.length) {
                var o = r.instancePool.pop();
                return r.call(o, e, t, n, a), o
            }
            return new r(e, t, n, a)
        },
        l = function(e) {
            var t = this;
            e instanceof t || a("25"), e.destructor(), t.instancePool.length < t.poolSize && t.instancePool.push(e)
        },
        u = r,
        c = function(e, t) {
            var n = e;
            return n.instancePool = [], n.getPooled = t || u, n.poolSize || (n.poolSize = 10), n.release = l, n
        },
        d = {
            addPoolingTo: c,
            oneArgumentPooler: r,
            twoArgumentPooler: o,
            threeArgumentPooler: i,
            fourArgumentPooler: s
        };
    e.exports = d
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return ("" + e).replace(w, "$&/")
    }

    function r(e, t) {
        this.func = e, this.context = t, this.count = 0
    }

    function o(e, t, n) {
        var a = e.func,
            r = e.context;
        a.call(r, t, e.count++)
    }

    function i(e, t, n) {
        if (null == e) return e;
        var a = r.getPooled(t, n);
        y(e, o, a), r.release(a)
    }

    function s(e, t, n, a) {
        this.result = e, this.keyPrefix = t, this.func = n, this.context = a, this.count = 0
    }

    function l(e, t, n) {
        var r = e.result,
            o = e.keyPrefix,
            i = e.func,
            s = e.context,
            l = i.call(s, t, e.count++);
        Array.isArray(l) ? u(l, r, n, f.thatReturnsArgument) : null != l && (g.isValidElement(l) && (l = g.cloneAndReplaceKey(l, o + (!l.key || t && t.key === l.key ? "" : a(l.key) + "/") + n)), r.push(l))
    }

    function u(e, t, n, r, o) {
        var i = "";
        null != n && (i = a(n) + "/");
        var u = s.getPooled(t, i, r, o);
        y(e, l, u), s.release(u)
    }

    function c(e, t, n) {
        if (null == e) return e;
        var a = [];
        return u(e, a, null, t, n), a
    }

    function d(e, t, n) {
        return null
    }

    function p(e, t) {
        return y(e, d, null)
    }

    function h(e) {
        var t = [];
        return u(e, t, null, f.thatReturnsArgument), t
    }
    var m = n(169),
        g = n(16),
        f = n(7),
        y = n(179),
        v = m.twoArgumentPooler,
        b = m.fourArgumentPooler,
        w = /\/+/g;
    r.prototype.destructor = function() {
        this.func = null, this.context = null, this.count = 0
    }, m.addPoolingTo(r, v), s.prototype.destructor = function() {
        this.result = null, this.keyPrefix = null, this.func = null, this.context = null, this.count = 0
    }, m.addPoolingTo(s, b);
    var E = {
        forEach: i,
        map: c,
        mapIntoWithKeyPrefixInternal: u,
        count: p,
        toArray: h
    };
    e.exports = E
}, function(e, t, n) {
    "use strict";
    var a = n(16),
        r = a.createFactory,
        o = {
            a: r("a"),
            abbr: r("abbr"),
            address: r("address"),
            area: r("area"),
            article: r("article"),
            aside: r("aside"),
            audio: r("audio"),
            b: r("b"),
            base: r("base"),
            bdi: r("bdi"),
            bdo: r("bdo"),
            big: r("big"),
            blockquote: r("blockquote"),
            body: r("body"),
            br: r("br"),
            button: r("button"),
            canvas: r("canvas"),
            caption: r("caption"),
            cite: r("cite"),
            code: r("code"),
            col: r("col"),
            colgroup: r("colgroup"),
            data: r("data"),
            datalist: r("datalist"),
            dd: r("dd"),
            del: r("del"),
            details: r("details"),
            dfn: r("dfn"),
            dialog: r("dialog"),
            div: r("div"),
            dl: r("dl"),
            dt: r("dt"),
            em: r("em"),
            embed: r("embed"),
            fieldset: r("fieldset"),
            figcaption: r("figcaption"),
            figure: r("figure"),
            footer: r("footer"),
            form: r("form"),
            h1: r("h1"),
            h2: r("h2"),
            h3: r("h3"),
            h4: r("h4"),
            h5: r("h5"),
            h6: r("h6"),
            head: r("head"),
            header: r("header"),
            hgroup: r("hgroup"),
            hr: r("hr"),
            html: r("html"),
            i: r("i"),
            iframe: r("iframe"),
            img: r("img"),
            input: r("input"),
            ins: r("ins"),
            kbd: r("kbd"),
            keygen: r("keygen"),
            label: r("label"),
            legend: r("legend"),
            li: r("li"),
            link: r("link"),
            main: r("main"),
            map: r("map"),
            mark: r("mark"),
            menu: r("menu"),
            menuitem: r("menuitem"),
            meta: r("meta"),
            meter: r("meter"),
            nav: r("nav"),
            noscript: r("noscript"),
            object: r("object"),
            ol: r("ol"),
            optgroup: r("optgroup"),
            option: r("option"),
            output: r("output"),
            p: r("p"),
            param: r("param"),
            picture: r("picture"),
            pre: r("pre"),
            progress: r("progress"),
            q: r("q"),
            rp: r("rp"),
            rt: r("rt"),
            ruby: r("ruby"),
            s: r("s"),
            samp: r("samp"),
            script: r("script"),
            section: r("section"),
            select: r("select"),
            small: r("small"),
            source: r("source"),
            span: r("span"),
            strong: r("strong"),
            style: r("style"),
            sub: r("sub"),
            summary: r("summary"),
            sup: r("sup"),
            table: r("table"),
            tbody: r("tbody"),
            td: r("td"),
            textarea: r("textarea"),
            tfoot: r("tfoot"),
            th: r("th"),
            thead: r("thead"),
            time: r("time"),
            title: r("title"),
            tr: r("tr"),
            track: r("track"),
            u: r("u"),
            ul: r("ul"),
            var: r("var"),
            video: r("video"),
            wbr: r("wbr"),
            circle: r("circle"),
            clipPath: r("clipPath"),
            defs: r("defs"),
            ellipse: r("ellipse"),
            g: r("g"),
            image: r("image"),
            line: r("line"),
            linearGradient: r("linearGradient"),
            mask: r("mask"),
            path: r("path"),
            pattern: r("pattern"),
            polygon: r("polygon"),
            polyline: r("polyline"),
            radialGradient: r("radialGradient"),
            rect: r("rect"),
            stop: r("stop"),
            svg: r("svg"),
            text: r("text"),
            tspan: r("tspan")
        };
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var a = n(16),
        r = a.isValidElement,
        o = n(50);
    e.exports = o(r)
}, function(e, t, n) {
    "use strict";
    e.exports = "15.6.2"
}, function(e, t, n) {
    "use strict";
    var a = n(74),
        r = a.Component,
        o = n(16),
        i = o.isValidElement,
        s = n(77),
        l = n(87);
    e.exports = l(r, i, s)
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = e && (r && e[r] || e[o]);
        if ("function" == typeof t) return t
    }
    var r = "function" == typeof Symbol && Symbol.iterator,
        o = "@@iterator";
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a() {
        return r++
    }
    var r = 1;
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var a = function() {};
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return o.isValidElement(e) || r("143"), e
    }
    var r = n(21),
        o = n(16);
    n(0);
    e.exports = a
}, function(e, t, n) {
    "use strict";

    function a(e, t) {
        return e && "object" == typeof e && null != e.key ? u.escape(e.key) : t.toString(36)
    }

    function r(e, t, n, o) {
        var p = typeof e;
        if ("undefined" !== p && "boolean" !== p || (e = null), null === e || "string" === p || "number" === p || "object" === p && e.$$typeof === s) return n(o, e, "" === t ? c + a(e, 0) : t), 1;
        var h, m, g = 0,
            f = "" === t ? c : t + d;
        if (Array.isArray(e))
            for (var y = 0; y < e.length; y++) h = e[y], m = f + a(h, y), g += r(h, m, n, o);
        else {
            var v = l(e);
            if (v) {
                var b, w = v.call(e);
                if (v !== e.entries)
                    for (var E = 0; !(b = w.next()).done;) h = b.value, m = f + a(h, E++), g += r(h, m, n, o);
                else
                    for (; !(b = w.next()).done;) {
                        var C = b.value;
                        C && (h = C[1], m = f + u.escape(C[0]) + d + a(h, 0), g += r(h, m, n, o))
                    }
            } else if ("object" === p) {
                var M = "",
                    S = String(e);
                i("31", "[object Object]" === S ? "object with keys {" + Object.keys(e).join(", ") + "}" : S, M)
            }
        }
        return g
    }

    function o(e, t, n) {
        return null == e ? 0 : r(e, "", t, n)
    }
    var i = n(21),
        s = (n(10), n(76)),
        l = n(175),
        u = (n(0), n(168)),
        c = (n(2), "."),
        d = ":";
    e.exports = o
}, function(e, t, n) {
    e.exports = n(80)
}]);
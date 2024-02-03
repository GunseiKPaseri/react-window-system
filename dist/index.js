function kR(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
function WO(d) {
  if (d.__esModule)
    return d;
  var y = d.default;
  if (typeof y == "function") {
    var p = function h() {
      return this instanceof h ? Reflect.construct(y, arguments, this.constructor) : y.apply(this, arguments);
    };
    p.prototype = y.prototype;
  } else
    p = {};
  return Object.defineProperty(p, "__esModule", { value: !0 }), Object.keys(d).forEach(function(h) {
    var T = Object.getOwnPropertyDescriptor(d, h);
    Object.defineProperty(p, h, T.get ? T : {
      enumerable: !0,
      get: function() {
        return d[h];
      }
    });
  }), p;
}
var lE = { exports: {} }, yv = {}, uE = { exports: {} }, jt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nR;
function IO() {
  if (nR)
    return jt;
  nR = 1;
  var d = Symbol.for("react.element"), y = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), E = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), j = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), P = Symbol.iterator;
  function K(w) {
    return w === null || typeof w != "object" ? null : (w = P && w[P] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var Z = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, fe = Object.assign, me = {};
  function we(w, U, k) {
    this.props = w, this.context = U, this.refs = me, this.updater = k || Z;
  }
  we.prototype.isReactComponent = {}, we.prototype.setState = function(w, U) {
    if (typeof w != "object" && typeof w != "function" && w != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, w, U, "setState");
  }, we.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function Se() {
  }
  Se.prototype = we.prototype;
  function oe(w, U, k) {
    this.props = w, this.context = U, this.refs = me, this.updater = k || Z;
  }
  var re = oe.prototype = new Se();
  re.constructor = oe, fe(re, we.prototype), re.isPureReactComponent = !0;
  var _e = Array.isArray, J = Object.prototype.hasOwnProperty, Qe = { current: null }, He = { key: !0, ref: !0, __self: !0, __source: !0 };
  function pt(w, U, k) {
    var $, W = {}, te = null, X = null;
    if (U != null)
      for ($ in U.ref !== void 0 && (X = U.ref), U.key !== void 0 && (te = "" + U.key), U)
        J.call(U, $) && !He.hasOwnProperty($) && (W[$] = U[$]);
    var ue = arguments.length - 2;
    if (ue === 1)
      W.children = k;
    else if (1 < ue) {
      for (var ce = Array(ue), Te = 0; Te < ue; Te++)
        ce[Te] = arguments[Te + 2];
      W.children = ce;
    }
    if (w && w.defaultProps)
      for ($ in ue = w.defaultProps, ue)
        W[$] === void 0 && (W[$] = ue[$]);
    return { $$typeof: d, type: w, key: te, ref: X, props: W, _owner: Qe.current };
  }
  function Mt(w, U) {
    return { $$typeof: d, type: w.type, key: U, ref: w.ref, props: w.props, _owner: w._owner };
  }
  function vt(w) {
    return typeof w == "object" && w !== null && w.$$typeof === d;
  }
  function ot(w) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(k) {
      return U[k];
    });
  }
  var ut = /\/+/g;
  function Ne(w, U) {
    return typeof w == "object" && w !== null && w.key != null ? ot("" + w.key) : U.toString(36);
  }
  function Xe(w, U, k, $, W) {
    var te = typeof w;
    (te === "undefined" || te === "boolean") && (w = null);
    var X = !1;
    if (w === null)
      X = !0;
    else
      switch (te) {
        case "string":
        case "number":
          X = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case d:
            case y:
              X = !0;
          }
      }
    if (X)
      return X = w, W = W(X), w = $ === "" ? "." + Ne(X, 0) : $, _e(W) ? (k = "", w != null && (k = w.replace(ut, "$&/") + "/"), Xe(W, U, k, "", function(Te) {
        return Te;
      })) : W != null && (vt(W) && (W = Mt(W, k + (!W.key || X && X.key === W.key ? "" : ("" + W.key).replace(ut, "$&/") + "/") + w)), U.push(W)), 1;
    if (X = 0, $ = $ === "" ? "." : $ + ":", _e(w))
      for (var ue = 0; ue < w.length; ue++) {
        te = w[ue];
        var ce = $ + Ne(te, ue);
        X += Xe(te, U, k, ce, W);
      }
    else if (ce = K(w), typeof ce == "function")
      for (w = ce.call(w), ue = 0; !(te = w.next()).done; )
        te = te.value, ce = $ + Ne(te, ue++), X += Xe(te, U, k, ce, W);
    else if (te === "object")
      throw U = String(w), Error("Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead.");
    return X;
  }
  function Rt(w, U, k) {
    if (w == null)
      return w;
    var $ = [], W = 0;
    return Xe(w, $, "", "", function(te) {
      return U.call(k, te, W++);
    }), $;
  }
  function st(w) {
    if (w._status === -1) {
      var U = w._result;
      U = U(), U.then(function(k) {
        (w._status === 0 || w._status === -1) && (w._status = 1, w._result = k);
      }, function(k) {
        (w._status === 0 || w._status === -1) && (w._status = 2, w._result = k);
      }), w._status === -1 && (w._status = 0, w._result = U);
    }
    if (w._status === 1)
      return w._result.default;
    throw w._result;
  }
  var Re = { current: null }, ge = { transition: null }, Be = { ReactCurrentDispatcher: Re, ReactCurrentBatchConfig: ge, ReactCurrentOwner: Qe };
  return jt.Children = { map: Rt, forEach: function(w, U, k) {
    Rt(w, function() {
      U.apply(this, arguments);
    }, k);
  }, count: function(w) {
    var U = 0;
    return Rt(w, function() {
      U++;
    }), U;
  }, toArray: function(w) {
    return Rt(w, function(U) {
      return U;
    }) || [];
  }, only: function(w) {
    if (!vt(w))
      throw Error("React.Children.only expected to receive a single React element child.");
    return w;
  } }, jt.Component = we, jt.Fragment = p, jt.Profiler = T, jt.PureComponent = oe, jt.StrictMode = h, jt.Suspense = F, jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Be, jt.cloneElement = function(w, U, k) {
    if (w == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + w + ".");
    var $ = fe({}, w.props), W = w.key, te = w.ref, X = w._owner;
    if (U != null) {
      if (U.ref !== void 0 && (te = U.ref, X = Qe.current), U.key !== void 0 && (W = "" + U.key), w.type && w.type.defaultProps)
        var ue = w.type.defaultProps;
      for (ce in U)
        J.call(U, ce) && !He.hasOwnProperty(ce) && ($[ce] = U[ce] === void 0 && ue !== void 0 ? ue[ce] : U[ce]);
    }
    var ce = arguments.length - 2;
    if (ce === 1)
      $.children = k;
    else if (1 < ce) {
      ue = Array(ce);
      for (var Te = 0; Te < ce; Te++)
        ue[Te] = arguments[Te + 2];
      $.children = ue;
    }
    return { $$typeof: d, type: w.type, key: W, ref: te, props: $, _owner: X };
  }, jt.createContext = function(w) {
    return w = { $$typeof: E, _currentValue: w, _currentValue2: w, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, w.Provider = { $$typeof: x, _context: w }, w.Consumer = w;
  }, jt.createElement = pt, jt.createFactory = function(w) {
    var U = pt.bind(null, w);
    return U.type = w, U;
  }, jt.createRef = function() {
    return { current: null };
  }, jt.forwardRef = function(w) {
    return { $$typeof: A, render: w };
  }, jt.isValidElement = vt, jt.lazy = function(w) {
    return { $$typeof: ee, _payload: { _status: -1, _result: w }, _init: st };
  }, jt.memo = function(w, U) {
    return { $$typeof: j, type: w, compare: U === void 0 ? null : U };
  }, jt.startTransition = function(w) {
    var U = ge.transition;
    ge.transition = {};
    try {
      w();
    } finally {
      ge.transition = U;
    }
  }, jt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, jt.useCallback = function(w, U) {
    return Re.current.useCallback(w, U);
  }, jt.useContext = function(w) {
    return Re.current.useContext(w);
  }, jt.useDebugValue = function() {
  }, jt.useDeferredValue = function(w) {
    return Re.current.useDeferredValue(w);
  }, jt.useEffect = function(w, U) {
    return Re.current.useEffect(w, U);
  }, jt.useId = function() {
    return Re.current.useId();
  }, jt.useImperativeHandle = function(w, U, k) {
    return Re.current.useImperativeHandle(w, U, k);
  }, jt.useInsertionEffect = function(w, U) {
    return Re.current.useInsertionEffect(w, U);
  }, jt.useLayoutEffect = function(w, U) {
    return Re.current.useLayoutEffect(w, U);
  }, jt.useMemo = function(w, U) {
    return Re.current.useMemo(w, U);
  }, jt.useReducer = function(w, U, k) {
    return Re.current.useReducer(w, U, k);
  }, jt.useRef = function(w) {
    return Re.current.useRef(w);
  }, jt.useState = function(w) {
    return Re.current.useState(w);
  }, jt.useSyncExternalStore = function(w, U, k) {
    return Re.current.useSyncExternalStore(w, U, k);
  }, jt.useTransition = function() {
    return Re.current.useTransition();
  }, jt.version = "18.2.0", jt;
}
var Ev = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Ev.exports;
var rR;
function YO() {
  return rR || (rR = 1, function(d, y) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = "18.2.0", h = Symbol.for("react.element"), T = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), F = Symbol.for("react.provider"), j = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), me = Symbol.for("react.offscreen"), we = Symbol.iterator, Se = "@@iterator";
      function oe(S) {
        if (S === null || typeof S != "object")
          return null;
        var D = we && S[we] || S[Se];
        return typeof D == "function" ? D : null;
      }
      var re = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, _e = {
        transition: null
      }, J = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Qe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, He = {}, pt = null;
      function Mt(S) {
        pt = S;
      }
      He.setExtraStackFrame = function(S) {
        pt = S;
      }, He.getCurrentStack = null, He.getStackAddendum = function() {
        var S = "";
        pt && (S += pt);
        var D = He.getCurrentStack;
        return D && (S += D() || ""), S;
      };
      var vt = !1, ot = !1, ut = !1, Ne = !1, Xe = !1, Rt = {
        ReactCurrentDispatcher: re,
        ReactCurrentBatchConfig: _e,
        ReactCurrentOwner: Qe
      };
      Rt.ReactDebugCurrentFrame = He, Rt.ReactCurrentActQueue = J;
      function st(S) {
        {
          for (var D = arguments.length, Q = new Array(D > 1 ? D - 1 : 0), ne = 1; ne < D; ne++)
            Q[ne - 1] = arguments[ne];
          ge("warn", S, Q);
        }
      }
      function Re(S) {
        {
          for (var D = arguments.length, Q = new Array(D > 1 ? D - 1 : 0), ne = 1; ne < D; ne++)
            Q[ne - 1] = arguments[ne];
          ge("error", S, Q);
        }
      }
      function ge(S, D, Q) {
        {
          var ne = Rt.ReactDebugCurrentFrame, Ee = ne.getStackAddendum();
          Ee !== "" && (D += "%s", Q = Q.concat([Ee]));
          var at = Q.map(function(ze) {
            return String(ze);
          });
          at.unshift("Warning: " + D), Function.prototype.apply.call(console[S], console, at);
        }
      }
      var Be = {};
      function w(S, D) {
        {
          var Q = S.constructor, ne = Q && (Q.displayName || Q.name) || "ReactClass", Ee = ne + "." + D;
          if (Be[Ee])
            return;
          Re("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", D, ne), Be[Ee] = !0;
        }
      }
      var U = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(S) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(S, D, Q) {
          w(S, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(S, D, Q, ne) {
          w(S, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(S, D, Q, ne) {
          w(S, "setState");
        }
      }, k = Object.assign, $ = {};
      Object.freeze($);
      function W(S, D, Q) {
        this.props = S, this.context = D, this.refs = $, this.updater = Q || U;
      }
      W.prototype.isReactComponent = {}, W.prototype.setState = function(S, D) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, D, "setState");
      }, W.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var te = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, X = function(S, D) {
          Object.defineProperty(W.prototype, S, {
            get: function() {
              st("%s(...) is deprecated in plain JavaScript React classes. %s", D[0], D[1]);
            }
          });
        };
        for (var ue in te)
          te.hasOwnProperty(ue) && X(ue, te[ue]);
      }
      function ce() {
      }
      ce.prototype = W.prototype;
      function Te(S, D, Q) {
        this.props = S, this.context = D, this.refs = $, this.updater = Q || U;
      }
      var Me = Te.prototype = new ce();
      Me.constructor = Te, k(Me, W.prototype), Me.isPureReactComponent = !0;
      function Dt() {
        var S = {
          current: null
        };
        return Object.seal(S), S;
      }
      var be = Array.isArray;
      function Ct(S) {
        return be(S);
      }
      function Yt(S) {
        {
          var D = typeof Symbol == "function" && Symbol.toStringTag, Q = D && S[Symbol.toStringTag] || S.constructor.name || "Object";
          return Q;
        }
      }
      function pn(S) {
        try {
          return wn(S), !1;
        } catch {
          return !0;
        }
      }
      function wn(S) {
        return "" + S;
      }
      function vn(S) {
        if (pn(S))
          return Re("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Yt(S)), wn(S);
      }
      function Rr(S, D, Q) {
        var ne = S.displayName;
        if (ne)
          return ne;
        var Ee = D.displayName || D.name || "";
        return Ee !== "" ? Q + "(" + Ee + ")" : Q;
      }
      function sr(S) {
        return S.displayName || "Context";
      }
      function Pn(S) {
        if (S == null)
          return null;
        if (typeof S.tag == "number" && Re("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
          return S.displayName || S.name || null;
        if (typeof S == "string")
          return S;
        switch (S) {
          case x:
            return "Fragment";
          case T:
            return "Portal";
          case A:
            return "Profiler";
          case E:
            return "StrictMode";
          case P:
            return "Suspense";
          case K:
            return "SuspenseList";
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case j:
              var D = S;
              return sr(D) + ".Consumer";
            case F:
              var Q = S;
              return sr(Q._context) + ".Provider";
            case ee:
              return Rr(S, S.render, "ForwardRef");
            case Z:
              var ne = S.displayName || null;
              return ne !== null ? ne : Pn(S.type) || "Memo";
            case fe: {
              var Ee = S, at = Ee._payload, ze = Ee._init;
              try {
                return Pn(ze(at));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Gn = Object.prototype.hasOwnProperty, Tr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, xr, ga, cr;
      cr = {};
      function Zr(S) {
        if (Gn.call(S, "ref")) {
          var D = Object.getOwnPropertyDescriptor(S, "ref").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return S.ref !== void 0;
      }
      function xn(S) {
        if (Gn.call(S, "key")) {
          var D = Object.getOwnPropertyDescriptor(S, "key").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function Ur(S, D) {
        var Q = function() {
          xr || (xr = !0, Re("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        Q.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: Q,
          configurable: !0
        });
      }
      function gi(S, D) {
        var Q = function() {
          ga || (ga = !0, Re("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        Q.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: Q,
          configurable: !0
        });
      }
      function Sa(S) {
        if (typeof S.ref == "string" && Qe.current && S.__self && Qe.current.stateNode !== S.__self) {
          var D = Pn(Qe.current.type);
          cr[D] || (Re('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D, S.ref), cr[D] = !0);
        }
      }
      var xe = function(S, D, Q, ne, Ee, at, ze) {
        var nt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: h,
          // Built-in properties that belong on the element
          type: S,
          key: D,
          ref: Q,
          props: ze,
          // Record the component responsible for creating this element.
          _owner: at
        };
        return nt._store = {}, Object.defineProperty(nt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(nt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ne
        }), Object.defineProperty(nt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Ee
        }), Object.freeze && (Object.freeze(nt.props), Object.freeze(nt)), nt;
      };
      function Ke(S, D, Q) {
        var ne, Ee = {}, at = null, ze = null, nt = null, xt = null;
        if (D != null) {
          Zr(D) && (ze = D.ref, Sa(D)), xn(D) && (vn(D.key), at = "" + D.key), nt = D.__self === void 0 ? null : D.__self, xt = D.__source === void 0 ? null : D.__source;
          for (ne in D)
            Gn.call(D, ne) && !Tr.hasOwnProperty(ne) && (Ee[ne] = D[ne]);
        }
        var Bt = arguments.length - 2;
        if (Bt === 1)
          Ee.children = Q;
        else if (Bt > 1) {
          for (var sn = Array(Bt), nn = 0; nn < Bt; nn++)
            sn[nn] = arguments[nn + 2];
          Object.freeze && Object.freeze(sn), Ee.children = sn;
        }
        if (S && S.defaultProps) {
          var cn = S.defaultProps;
          for (ne in cn)
            Ee[ne] === void 0 && (Ee[ne] = cn[ne]);
        }
        if (at || ze) {
          var yn = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          at && Ur(Ee, yn), ze && gi(Ee, yn);
        }
        return xe(S, at, ze, nt, xt, Qe.current, Ee);
      }
      function wt(S, D) {
        var Q = xe(S.type, D, S.ref, S._self, S._source, S._owner, S.props);
        return Q;
      }
      function Qt(S, D, Q) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var ne, Ee = k({}, S.props), at = S.key, ze = S.ref, nt = S._self, xt = S._source, Bt = S._owner;
        if (D != null) {
          Zr(D) && (ze = D.ref, Bt = Qe.current), xn(D) && (vn(D.key), at = "" + D.key);
          var sn;
          S.type && S.type.defaultProps && (sn = S.type.defaultProps);
          for (ne in D)
            Gn.call(D, ne) && !Tr.hasOwnProperty(ne) && (D[ne] === void 0 && sn !== void 0 ? Ee[ne] = sn[ne] : Ee[ne] = D[ne]);
        }
        var nn = arguments.length - 2;
        if (nn === 1)
          Ee.children = Q;
        else if (nn > 1) {
          for (var cn = Array(nn), yn = 0; yn < nn; yn++)
            cn[yn] = arguments[yn + 2];
          Ee.children = cn;
        }
        return xe(S.type, at, ze, nt, xt, Bt, Ee);
      }
      function qt(S) {
        return typeof S == "object" && S !== null && S.$$typeof === h;
      }
      var jn = ".", _n = ":";
      function _r(S) {
        var D = /[=:]/g, Q = {
          "=": "=0",
          ":": "=2"
        }, ne = S.replace(D, function(Ee) {
          return Q[Ee];
        });
        return "$" + ne;
      }
      var tn = !1, Pr = /\/+/g;
      function Xt(S) {
        return S.replace(Pr, "$&/");
      }
      function Kt(S, D) {
        return typeof S == "object" && S !== null && S.key != null ? (vn(S.key), _r("" + S.key)) : D.toString(36);
      }
      function ni(S, D, Q, ne, Ee) {
        var at = typeof S;
        (at === "undefined" || at === "boolean") && (S = null);
        var ze = !1;
        if (S === null)
          ze = !0;
        else
          switch (at) {
            case "string":
            case "number":
              ze = !0;
              break;
            case "object":
              switch (S.$$typeof) {
                case h:
                case T:
                  ze = !0;
              }
          }
        if (ze) {
          var nt = S, xt = Ee(nt), Bt = ne === "" ? jn + Kt(nt, 0) : ne;
          if (Ct(xt)) {
            var sn = "";
            Bt != null && (sn = Xt(Bt) + "/"), ni(xt, D, sn, "", function(fd) {
              return fd;
            });
          } else
            xt != null && (qt(xt) && (xt.key && (!nt || nt.key !== xt.key) && vn(xt.key), xt = wt(
              xt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              Q + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (xt.key && (!nt || nt.key !== xt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Xt("" + xt.key) + "/"
              ) : "") + Bt
            )), D.push(xt));
          return 1;
        }
        var nn, cn, yn = 0, Lt = ne === "" ? jn : ne + _n;
        if (Ct(S))
          for (var Wi = 0; Wi < S.length; Wi++)
            nn = S[Wi], cn = Lt + Kt(nn, Wi), yn += ni(nn, D, Q, cn, Ee);
        else {
          var hu = oe(S);
          if (typeof hu == "function") {
            var ms = S;
            hu === ms.entries && (tn || st("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), tn = !0);
            for (var cd = hu.call(ms), oi, ys = 0; !(oi = cd.next()).done; )
              nn = oi.value, cn = Lt + Kt(nn, ys++), yn += ni(nn, D, Q, cn, Ee);
          } else if (at === "object") {
            var gs = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (gs === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : gs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return yn;
      }
      function Na(S, D, Q) {
        if (S == null)
          return S;
        var ne = [], Ee = 0;
        return ni(S, ne, "", "", function(at) {
          return D.call(Q, at, Ee++);
        }), ne;
      }
      function So(S) {
        var D = 0;
        return Na(S, function() {
          D++;
        }), D;
      }
      function pl(S, D, Q) {
        Na(S, function() {
          D.apply(this, arguments);
        }, Q);
      }
      function ru(S) {
        return Na(S, function(D) {
          return D;
        }) || [];
      }
      function Bi(S) {
        if (!qt(S))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
      function Eo(S) {
        var D = {
          $$typeof: j,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: S,
          _currentValue2: S,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        D.Provider = {
          $$typeof: F,
          _context: D
        };
        var Q = !1, ne = !1, Ee = !1;
        {
          var at = {
            $$typeof: j,
            _context: D
          };
          Object.defineProperties(at, {
            Provider: {
              get: function() {
                return ne || (ne = !0, Re("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), D.Provider;
              },
              set: function(ze) {
                D.Provider = ze;
              }
            },
            _currentValue: {
              get: function() {
                return D._currentValue;
              },
              set: function(ze) {
                D._currentValue = ze;
              }
            },
            _currentValue2: {
              get: function() {
                return D._currentValue2;
              },
              set: function(ze) {
                D._currentValue2 = ze;
              }
            },
            _threadCount: {
              get: function() {
                return D._threadCount;
              },
              set: function(ze) {
                D._threadCount = ze;
              }
            },
            Consumer: {
              get: function() {
                return Q || (Q = !0, Re("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), D.Consumer;
              }
            },
            displayName: {
              get: function() {
                return D.displayName;
              },
              set: function(ze) {
                Ee || (st("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ze), Ee = !0);
              }
            }
          }), D.Consumer = at;
        }
        return D._currentRenderer = null, D._currentRenderer2 = null, D;
      }
      var Ea = -1, Si = 0, ba = 1, Ei = 2;
      function jr(S) {
        if (S._status === Ea) {
          var D = S._result, Q = D();
          if (Q.then(function(at) {
            if (S._status === Si || S._status === Ea) {
              var ze = S;
              ze._status = ba, ze._result = at;
            }
          }, function(at) {
            if (S._status === Si || S._status === Ea) {
              var ze = S;
              ze._status = Ei, ze._result = at;
            }
          }), S._status === Ea) {
            var ne = S;
            ne._status = Si, ne._result = Q;
          }
        }
        if (S._status === ba) {
          var Ee = S._result;
          return Ee === void 0 && Re(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Ee), "default" in Ee || Re(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Ee), Ee.default;
        } else
          throw S._result;
      }
      function Ca(S) {
        var D = {
          // We use these fields to store the result.
          _status: Ea,
          _result: S
        }, Q = {
          $$typeof: fe,
          _payload: D,
          _init: jr
        };
        {
          var ne, Ee;
          Object.defineProperties(Q, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return ne;
              },
              set: function(at) {
                Re("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ne = at, Object.defineProperty(Q, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Ee;
              },
              set: function(at) {
                Re("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Ee = at, Object.defineProperty(Q, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return Q;
      }
      function bi(S) {
        S != null && S.$$typeof === Z ? Re("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? Re("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && Re("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && Re("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var D = {
          $$typeof: ee,
          render: S
        };
        {
          var Q;
          Object.defineProperty(D, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Q;
            },
            set: function(ne) {
              Q = ne, !S.name && !S.displayName && (S.displayName = ne);
            }
          });
        }
        return D;
      }
      var O;
      O = Symbol.for("react.module.reference");
      function de(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === x || S === A || Xe || S === E || S === P || S === K || Ne || S === me || vt || ot || ut || typeof S == "object" && S !== null && (S.$$typeof === fe || S.$$typeof === Z || S.$$typeof === F || S.$$typeof === j || S.$$typeof === ee || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === O || S.getModuleId !== void 0));
      }
      function De(S, D) {
        de(S) || Re("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var Q = {
          $$typeof: Z,
          type: S,
          compare: D === void 0 ? null : D
        };
        {
          var ne;
          Object.defineProperty(Q, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return ne;
            },
            set: function(Ee) {
              ne = Ee, !S.name && !S.displayName && (S.displayName = Ee);
            }
          });
        }
        return Q;
      }
      function Pe() {
        var S = re.current;
        return S === null && Re(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function gt(S) {
        var D = Pe();
        if (S._context !== void 0) {
          var Q = S._context;
          Q.Consumer === S ? Re("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : Q.Provider === S && Re("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return D.useContext(S);
      }
      function Nt(S) {
        var D = Pe();
        return D.useState(S);
      }
      function St(S, D, Q) {
        var ne = Pe();
        return ne.useReducer(S, D, Q);
      }
      function et(S) {
        var D = Pe();
        return D.useRef(S);
      }
      function Vn(S, D) {
        var Q = Pe();
        return Q.useEffect(S, D);
      }
      function hn(S, D) {
        var Q = Pe();
        return Q.useInsertionEffect(S, D);
      }
      function mn(S, D) {
        var Q = Pe();
        return Q.useLayoutEffect(S, D);
      }
      function fr(S, D) {
        var Q = Pe();
        return Q.useCallback(S, D);
      }
      function Ci(S, D) {
        var Q = Pe();
        return Q.useMemo(S, D);
      }
      function au(S, D, Q) {
        var ne = Pe();
        return ne.useImperativeHandle(S, D, Q);
      }
      function Ft(S, D) {
        {
          var Q = Pe();
          return Q.useDebugValue(S, D);
        }
      }
      function ud() {
        var S = Pe();
        return S.useTransition();
      }
      function ri(S) {
        var D = Pe();
        return D.useDeferredValue(S);
      }
      function Tt() {
        var S = Pe();
        return S.useId();
      }
      function wi(S, D, Q) {
        var ne = Pe();
        return ne.useSyncExternalStore(S, D, Q);
      }
      var bo = 0, iu, Co, Jr, ds, Fr, ps, vs;
      function Sc() {
      }
      Sc.__reactDisabledLog = !0;
      function ou() {
        {
          if (bo === 0) {
            iu = console.log, Co = console.info, Jr = console.warn, ds = console.error, Fr = console.group, ps = console.groupCollapsed, vs = console.groupEnd;
            var S = {
              configurable: !0,
              enumerable: !0,
              value: Sc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: S,
              log: S,
              warn: S,
              error: S,
              group: S,
              groupCollapsed: S,
              groupEnd: S
            });
          }
          bo++;
        }
      }
      function wo() {
        {
          if (bo--, bo === 0) {
            var S = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: k({}, S, {
                value: iu
              }),
              info: k({}, S, {
                value: Co
              }),
              warn: k({}, S, {
                value: Jr
              }),
              error: k({}, S, {
                value: ds
              }),
              group: k({}, S, {
                value: Fr
              }),
              groupCollapsed: k({}, S, {
                value: ps
              }),
              groupEnd: k({}, S, {
                value: vs
              })
            });
          }
          bo < 0 && Re("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ai = Rt.ReactCurrentDispatcher, Hr;
      function Ro(S, D, Q) {
        {
          if (Hr === void 0)
            try {
              throw Error();
            } catch (Ee) {
              var ne = Ee.stack.trim().match(/\n( *(at )?)/);
              Hr = ne && ne[1] || "";
            }
          return `
` + Hr + S;
        }
      }
      var To = !1, xo;
      {
        var lu = typeof WeakMap == "function" ? WeakMap : Map;
        xo = new lu();
      }
      function uu(S, D) {
        if (!S || To)
          return "";
        {
          var Q = xo.get(S);
          if (Q !== void 0)
            return Q;
        }
        var ne;
        To = !0;
        var Ee = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var at;
        at = ai.current, ai.current = null, ou();
        try {
          if (D) {
            var ze = function() {
              throw Error();
            };
            if (Object.defineProperty(ze.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ze, []);
              } catch (Lt) {
                ne = Lt;
              }
              Reflect.construct(S, [], ze);
            } else {
              try {
                ze.call();
              } catch (Lt) {
                ne = Lt;
              }
              S.call(ze.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Lt) {
              ne = Lt;
            }
            S();
          }
        } catch (Lt) {
          if (Lt && ne && typeof Lt.stack == "string") {
            for (var nt = Lt.stack.split(`
`), xt = ne.stack.split(`
`), Bt = nt.length - 1, sn = xt.length - 1; Bt >= 1 && sn >= 0 && nt[Bt] !== xt[sn]; )
              sn--;
            for (; Bt >= 1 && sn >= 0; Bt--, sn--)
              if (nt[Bt] !== xt[sn]) {
                if (Bt !== 1 || sn !== 1)
                  do
                    if (Bt--, sn--, sn < 0 || nt[Bt] !== xt[sn]) {
                      var nn = `
` + nt[Bt].replace(" at new ", " at ");
                      return S.displayName && nn.includes("<anonymous>") && (nn = nn.replace("<anonymous>", S.displayName)), typeof S == "function" && xo.set(S, nn), nn;
                    }
                  while (Bt >= 1 && sn >= 0);
                break;
              }
          }
        } finally {
          To = !1, ai.current = at, wo(), Error.prepareStackTrace = Ee;
        }
        var cn = S ? S.displayName || S.name : "", yn = cn ? Ro(cn) : "";
        return typeof S == "function" && xo.set(S, yn), yn;
      }
      function Vi(S, D, Q) {
        return uu(S, !1);
      }
      function sd(S) {
        var D = S.prototype;
        return !!(D && D.isReactComponent);
      }
      function Ri(S, D, Q) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return uu(S, sd(S));
        if (typeof S == "string")
          return Ro(S);
        switch (S) {
          case P:
            return Ro("Suspense");
          case K:
            return Ro("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case ee:
              return Vi(S.render);
            case Z:
              return Ri(S.type, D, Q);
            case fe: {
              var ne = S, Ee = ne._payload, at = ne._init;
              try {
                return Ri(at(Ee), D, Q);
              } catch {
              }
            }
          }
        return "";
      }
      var $t = {}, su = Rt.ReactDebugCurrentFrame;
      function vl(S) {
        if (S) {
          var D = S._owner, Q = Ri(S.type, S._source, D ? D.type : null);
          su.setExtraStackFrame(Q);
        } else
          su.setExtraStackFrame(null);
      }
      function cu(S, D, Q, ne, Ee) {
        {
          var at = Function.call.bind(Gn);
          for (var ze in S)
            if (at(S, ze)) {
              var nt = void 0;
              try {
                if (typeof S[ze] != "function") {
                  var xt = Error((ne || "React class") + ": " + Q + " type `" + ze + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[ze] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw xt.name = "Invariant Violation", xt;
                }
                nt = S[ze](D, ze, ne, Q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Bt) {
                nt = Bt;
              }
              nt && !(nt instanceof Error) && (vl(Ee), Re("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ne || "React class", Q, ze, typeof nt), vl(null)), nt instanceof Error && !(nt.message in $t) && ($t[nt.message] = !0, vl(Ee), Re("Failed %s type: %s", Q, nt.message), vl(null));
            }
        }
      }
      function Ht(S) {
        if (S) {
          var D = S._owner, Q = Ri(S.type, S._source, D ? D.type : null);
          Mt(Q);
        } else
          Mt(null);
      }
      var fu;
      fu = !1;
      function du() {
        if (Qe.current) {
          var S = Pn(Qe.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
      function ht(S) {
        if (S !== void 0) {
          var D = S.fileName.replace(/^.*[\\\/]/, ""), Q = S.lineNumber;
          return `

Check your code at ` + D + ":" + Q + ".";
        }
        return "";
      }
      function hl(S) {
        return S != null ? ht(S.__source) : "";
      }
      var Dn = {};
      function ea(S) {
        var D = du();
        if (!D) {
          var Q = typeof S == "string" ? S : S.displayName || S.name;
          Q && (D = `

Check the top-level render call using <` + Q + ">.");
        }
        return D;
      }
      function Br(S, D) {
        if (!(!S._store || S._store.validated || S.key != null)) {
          S._store.validated = !0;
          var Q = ea(D);
          if (!Dn[Q]) {
            Dn[Q] = !0;
            var ne = "";
            S && S._owner && S._owner !== Qe.current && (ne = " It was passed a child from " + Pn(S._owner.type) + "."), Ht(S), Re('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Q, ne), Ht(null);
          }
        }
      }
      function _o(S, D) {
        if (typeof S == "object") {
          if (Ct(S))
            for (var Q = 0; Q < S.length; Q++) {
              var ne = S[Q];
              qt(ne) && Br(ne, D);
            }
          else if (qt(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var Ee = oe(S);
            if (typeof Ee == "function" && Ee !== S.entries)
              for (var at = Ee.call(S), ze; !(ze = at.next()).done; )
                qt(ze.value) && Br(ze.value, D);
          }
        }
      }
      function Ln(S) {
        {
          var D = S.type;
          if (D == null || typeof D == "string")
            return;
          var Q;
          if (typeof D == "function")
            Q = D.propTypes;
          else if (typeof D == "object" && (D.$$typeof === ee || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          D.$$typeof === Z))
            Q = D.propTypes;
          else
            return;
          if (Q) {
            var ne = Pn(D);
            cu(Q, S.props, "prop", ne, S);
          } else if (D.PropTypes !== void 0 && !fu) {
            fu = !0;
            var Ee = Pn(D);
            Re("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ee || "Unknown");
          }
          typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && Re("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Zt(S) {
        {
          for (var D = Object.keys(S.props), Q = 0; Q < D.length; Q++) {
            var ne = D[Q];
            if (ne !== "children" && ne !== "key") {
              Ht(S), Re("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ne), Ht(null);
              break;
            }
          }
          S.ref !== null && (Ht(S), Re("Invalid attribute `ref` supplied to `React.Fragment`."), Ht(null));
        }
      }
      function Ec(S, D, Q) {
        var ne = de(S);
        if (!ne) {
          var Ee = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (Ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var at = hl(D);
          at ? Ee += at : Ee += du();
          var ze;
          S === null ? ze = "null" : Ct(S) ? ze = "array" : S !== void 0 && S.$$typeof === h ? (ze = "<" + (Pn(S.type) || "Unknown") + " />", Ee = " Did you accidentally export a JSX literal instead of a component?") : ze = typeof S, Re("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ze, Ee);
        }
        var nt = Ke.apply(this, arguments);
        if (nt == null)
          return nt;
        if (ne)
          for (var xt = 2; xt < arguments.length; xt++)
            _o(arguments[xt], S);
        return S === x ? Zt(nt) : Ln(nt), nt;
      }
      var ta = !1;
      function tr(S) {
        var D = Ec.bind(null, S);
        return D.type = S, ta || (ta = !0, st("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(D, "type", {
          enumerable: !1,
          get: function() {
            return st("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: S
            }), S;
          }
        }), D;
      }
      function Ti(S, D, Q) {
        for (var ne = Qt.apply(this, arguments), Ee = 2; Ee < arguments.length; Ee++)
          _o(arguments[Ee], ne.type);
        return Ln(ne), ne;
      }
      function bc(S, D) {
        var Q = _e.transition;
        _e.transition = {};
        var ne = _e.transition;
        _e.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (_e.transition = Q, Q === null && ne._updatedFibers) {
            var Ee = ne._updatedFibers.size;
            Ee > 10 && st("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), ne._updatedFibers.clear();
          }
        }
      }
      var $i = !1, Do = null;
      function Cc(S) {
        if (Do === null)
          try {
            var D = ("require" + Math.random()).slice(0, 7), Q = d && d[D];
            Do = Q.call(d, "timers").setImmediate;
          } catch {
            Do = function(Ee) {
              $i === !1 && ($i = !0, typeof MessageChannel > "u" && Re("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var at = new MessageChannel();
              at.port1.onmessage = Ee, at.port2.postMessage(void 0);
            };
          }
        return Do(S);
      }
      var Aa = 0, Oo = !1;
      function ko(S) {
        {
          var D = Aa;
          Aa++, J.current === null && (J.current = []);
          var Q = J.isBatchingLegacy, ne;
          try {
            if (J.isBatchingLegacy = !0, ne = S(), !Q && J.didScheduleLegacyUpdate) {
              var Ee = J.current;
              Ee !== null && (J.didScheduleLegacyUpdate = !1, Mo(Ee));
            }
          } catch (cn) {
            throw Ua(D), cn;
          } finally {
            J.isBatchingLegacy = Q;
          }
          if (ne !== null && typeof ne == "object" && typeof ne.then == "function") {
            var at = ne, ze = !1, nt = {
              then: function(cn, yn) {
                ze = !0, at.then(function(Lt) {
                  Ua(D), Aa === 0 ? pu(Lt, cn, yn) : cn(Lt);
                }, function(Lt) {
                  Ua(D), yn(Lt);
                });
              }
            };
            return !Oo && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ze || (Oo = !0, Re("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), nt;
          } else {
            var xt = ne;
            if (Ua(D), Aa === 0) {
              var Bt = J.current;
              Bt !== null && (Mo(Bt), J.current = null);
              var sn = {
                then: function(cn, yn) {
                  J.current === null ? (J.current = [], pu(xt, cn, yn)) : cn(xt);
                }
              };
              return sn;
            } else {
              var nn = {
                then: function(cn, yn) {
                  cn(xt);
                }
              };
              return nn;
            }
          }
        }
      }
      function Ua(S) {
        S !== Aa - 1 && Re("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Aa = S;
      }
      function pu(S, D, Q) {
        {
          var ne = J.current;
          if (ne !== null)
            try {
              Mo(ne), Cc(function() {
                ne.length === 0 ? (J.current = null, D(S)) : pu(S, D, Q);
              });
            } catch (Ee) {
              Q(Ee);
            }
          else
            D(S);
        }
      }
      var zo = !1;
      function Mo(S) {
        if (!zo) {
          zo = !0;
          var D = 0;
          try {
            for (; D < S.length; D++) {
              var Q = S[D];
              do
                Q = Q(!0);
              while (Q !== null);
            }
            S.length = 0;
          } catch (ne) {
            throw S = S.slice(D + 1), ne;
          } finally {
            zo = !1;
          }
        }
      }
      var ml = Ec, vu = Ti, hs = tr, ii = {
        map: Na,
        forEach: pl,
        count: So,
        toArray: ru,
        only: Bi
      };
      y.Children = ii, y.Component = W, y.Fragment = x, y.Profiler = A, y.PureComponent = Te, y.StrictMode = E, y.Suspense = P, y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rt, y.cloneElement = vu, y.createContext = Eo, y.createElement = ml, y.createFactory = hs, y.createRef = Dt, y.forwardRef = bi, y.isValidElement = qt, y.lazy = Ca, y.memo = De, y.startTransition = bc, y.unstable_act = ko, y.useCallback = fr, y.useContext = gt, y.useDebugValue = Ft, y.useDeferredValue = ri, y.useEffect = Vn, y.useId = Tt, y.useImperativeHandle = au, y.useInsertionEffect = hn, y.useLayoutEffect = mn, y.useMemo = Ci, y.useReducer = St, y.useRef = et, y.useState = Nt, y.useSyncExternalStore = wi, y.useTransition = ud, y.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Ev, Ev.exports)), Ev.exports;
}
process.env.NODE_ENV === "production" ? uE.exports = IO() : uE.exports = YO();
var rn = uE.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aR;
function QO() {
  if (aR)
    return yv;
  aR = 1;
  var d = rn, y = Symbol.for("react.element"), p = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, T = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(A, F, j) {
    var ee, P = {}, K = null, Z = null;
    j !== void 0 && (K = "" + j), F.key !== void 0 && (K = "" + F.key), F.ref !== void 0 && (Z = F.ref);
    for (ee in F)
      h.call(F, ee) && !x.hasOwnProperty(ee) && (P[ee] = F[ee]);
    if (A && A.defaultProps)
      for (ee in F = A.defaultProps, F)
        P[ee] === void 0 && (P[ee] = F[ee]);
    return { $$typeof: y, type: A, key: K, ref: Z, props: P, _owner: T.current };
  }
  return yv.Fragment = p, yv.jsx = E, yv.jsxs = E, yv;
}
var gv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iR;
function GO() {
  return iR || (iR = 1, process.env.NODE_ENV !== "production" && function() {
    var d = rn, y = Symbol.for("react.element"), p = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), A = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), Z = Symbol.for("react.offscreen"), fe = Symbol.iterator, me = "@@iterator";
    function we(O) {
      if (O === null || typeof O != "object")
        return null;
      var de = fe && O[fe] || O[me];
      return typeof de == "function" ? de : null;
    }
    var Se = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function oe(O) {
      {
        for (var de = arguments.length, De = new Array(de > 1 ? de - 1 : 0), Pe = 1; Pe < de; Pe++)
          De[Pe - 1] = arguments[Pe];
        re("error", O, De);
      }
    }
    function re(O, de, De) {
      {
        var Pe = Se.ReactDebugCurrentFrame, gt = Pe.getStackAddendum();
        gt !== "" && (de += "%s", De = De.concat([gt]));
        var Nt = De.map(function(St) {
          return String(St);
        });
        Nt.unshift("Warning: " + de), Function.prototype.apply.call(console[O], console, Nt);
      }
    }
    var _e = !1, J = !1, Qe = !1, He = !1, pt = !1, Mt;
    Mt = Symbol.for("react.module.reference");
    function vt(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === h || O === x || pt || O === T || O === j || O === ee || He || O === Z || _e || J || Qe || typeof O == "object" && O !== null && (O.$$typeof === K || O.$$typeof === P || O.$$typeof === E || O.$$typeof === A || O.$$typeof === F || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === Mt || O.getModuleId !== void 0));
    }
    function ot(O, de, De) {
      var Pe = O.displayName;
      if (Pe)
        return Pe;
      var gt = de.displayName || de.name || "";
      return gt !== "" ? De + "(" + gt + ")" : De;
    }
    function ut(O) {
      return O.displayName || "Context";
    }
    function Ne(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && oe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
        case h:
          return "Fragment";
        case p:
          return "Portal";
        case x:
          return "Profiler";
        case T:
          return "StrictMode";
        case j:
          return "Suspense";
        case ee:
          return "SuspenseList";
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case A:
            var de = O;
            return ut(de) + ".Consumer";
          case E:
            var De = O;
            return ut(De._context) + ".Provider";
          case F:
            return ot(O, O.render, "ForwardRef");
          case P:
            var Pe = O.displayName || null;
            return Pe !== null ? Pe : Ne(O.type) || "Memo";
          case K: {
            var gt = O, Nt = gt._payload, St = gt._init;
            try {
              return Ne(St(Nt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Xe = Object.assign, Rt = 0, st, Re, ge, Be, w, U, k;
    function $() {
    }
    $.__reactDisabledLog = !0;
    function W() {
      {
        if (Rt === 0) {
          st = console.log, Re = console.info, ge = console.warn, Be = console.error, w = console.group, U = console.groupCollapsed, k = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: $,
            writable: !0
          };
          Object.defineProperties(console, {
            info: O,
            log: O,
            warn: O,
            error: O,
            group: O,
            groupCollapsed: O,
            groupEnd: O
          });
        }
        Rt++;
      }
    }
    function te() {
      {
        if (Rt--, Rt === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Xe({}, O, {
              value: st
            }),
            info: Xe({}, O, {
              value: Re
            }),
            warn: Xe({}, O, {
              value: ge
            }),
            error: Xe({}, O, {
              value: Be
            }),
            group: Xe({}, O, {
              value: w
            }),
            groupCollapsed: Xe({}, O, {
              value: U
            }),
            groupEnd: Xe({}, O, {
              value: k
            })
          });
        }
        Rt < 0 && oe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = Se.ReactCurrentDispatcher, ue;
    function ce(O, de, De) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (gt) {
            var Pe = gt.stack.trim().match(/\n( *(at )?)/);
            ue = Pe && Pe[1] || "";
          }
        return `
` + ue + O;
      }
    }
    var Te = !1, Me;
    {
      var Dt = typeof WeakMap == "function" ? WeakMap : Map;
      Me = new Dt();
    }
    function be(O, de) {
      if (!O || Te)
        return "";
      {
        var De = Me.get(O);
        if (De !== void 0)
          return De;
      }
      var Pe;
      Te = !0;
      var gt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Nt;
      Nt = X.current, X.current = null, W();
      try {
        if (de) {
          var St = function() {
            throw Error();
          };
          if (Object.defineProperty(St.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(St, []);
            } catch (Ft) {
              Pe = Ft;
            }
            Reflect.construct(O, [], St);
          } else {
            try {
              St.call();
            } catch (Ft) {
              Pe = Ft;
            }
            O.call(St.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ft) {
            Pe = Ft;
          }
          O();
        }
      } catch (Ft) {
        if (Ft && Pe && typeof Ft.stack == "string") {
          for (var et = Ft.stack.split(`
`), Vn = Pe.stack.split(`
`), hn = et.length - 1, mn = Vn.length - 1; hn >= 1 && mn >= 0 && et[hn] !== Vn[mn]; )
            mn--;
          for (; hn >= 1 && mn >= 0; hn--, mn--)
            if (et[hn] !== Vn[mn]) {
              if (hn !== 1 || mn !== 1)
                do
                  if (hn--, mn--, mn < 0 || et[hn] !== Vn[mn]) {
                    var fr = `
` + et[hn].replace(" at new ", " at ");
                    return O.displayName && fr.includes("<anonymous>") && (fr = fr.replace("<anonymous>", O.displayName)), typeof O == "function" && Me.set(O, fr), fr;
                  }
                while (hn >= 1 && mn >= 0);
              break;
            }
        }
      } finally {
        Te = !1, X.current = Nt, te(), Error.prepareStackTrace = gt;
      }
      var Ci = O ? O.displayName || O.name : "", au = Ci ? ce(Ci) : "";
      return typeof O == "function" && Me.set(O, au), au;
    }
    function Ct(O, de, De) {
      return be(O, !1);
    }
    function Yt(O) {
      var de = O.prototype;
      return !!(de && de.isReactComponent);
    }
    function pn(O, de, De) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return be(O, Yt(O));
      if (typeof O == "string")
        return ce(O);
      switch (O) {
        case j:
          return ce("Suspense");
        case ee:
          return ce("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case F:
            return Ct(O.render);
          case P:
            return pn(O.type, de, De);
          case K: {
            var Pe = O, gt = Pe._payload, Nt = Pe._init;
            try {
              return pn(Nt(gt), de, De);
            } catch {
            }
          }
        }
      return "";
    }
    var wn = Object.prototype.hasOwnProperty, vn = {}, Rr = Se.ReactDebugCurrentFrame;
    function sr(O) {
      if (O) {
        var de = O._owner, De = pn(O.type, O._source, de ? de.type : null);
        Rr.setExtraStackFrame(De);
      } else
        Rr.setExtraStackFrame(null);
    }
    function Pn(O, de, De, Pe, gt) {
      {
        var Nt = Function.call.bind(wn);
        for (var St in O)
          if (Nt(O, St)) {
            var et = void 0;
            try {
              if (typeof O[St] != "function") {
                var Vn = Error((Pe || "React class") + ": " + De + " type `" + St + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[St] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Vn.name = "Invariant Violation", Vn;
              }
              et = O[St](de, St, Pe, De, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (hn) {
              et = hn;
            }
            et && !(et instanceof Error) && (sr(gt), oe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Pe || "React class", De, St, typeof et), sr(null)), et instanceof Error && !(et.message in vn) && (vn[et.message] = !0, sr(gt), oe("Failed %s type: %s", De, et.message), sr(null));
          }
      }
    }
    var Gn = Array.isArray;
    function Tr(O) {
      return Gn(O);
    }
    function xr(O) {
      {
        var de = typeof Symbol == "function" && Symbol.toStringTag, De = de && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return De;
      }
    }
    function ga(O) {
      try {
        return cr(O), !1;
      } catch {
        return !0;
      }
    }
    function cr(O) {
      return "" + O;
    }
    function Zr(O) {
      if (ga(O))
        return oe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xr(O)), cr(O);
    }
    var xn = Se.ReactCurrentOwner, Ur = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, gi, Sa, xe;
    xe = {};
    function Ke(O) {
      if (wn.call(O, "ref")) {
        var de = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (de && de.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function wt(O) {
      if (wn.call(O, "key")) {
        var de = Object.getOwnPropertyDescriptor(O, "key").get;
        if (de && de.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function Qt(O, de) {
      if (typeof O.ref == "string" && xn.current && de && xn.current.stateNode !== de) {
        var De = Ne(xn.current.type);
        xe[De] || (oe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ne(xn.current.type), O.ref), xe[De] = !0);
      }
    }
    function qt(O, de) {
      {
        var De = function() {
          gi || (gi = !0, oe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", de));
        };
        De.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: De,
          configurable: !0
        });
      }
    }
    function jn(O, de) {
      {
        var De = function() {
          Sa || (Sa = !0, oe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", de));
        };
        De.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: De,
          configurable: !0
        });
      }
    }
    var _n = function(O, de, De, Pe, gt, Nt, St) {
      var et = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: O,
        key: de,
        ref: De,
        props: St,
        // Record the component responsible for creating this element.
        _owner: Nt
      };
      return et._store = {}, Object.defineProperty(et._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(et, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Pe
      }), Object.defineProperty(et, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: gt
      }), Object.freeze && (Object.freeze(et.props), Object.freeze(et)), et;
    };
    function _r(O, de, De, Pe, gt) {
      {
        var Nt, St = {}, et = null, Vn = null;
        De !== void 0 && (Zr(De), et = "" + De), wt(de) && (Zr(de.key), et = "" + de.key), Ke(de) && (Vn = de.ref, Qt(de, gt));
        for (Nt in de)
          wn.call(de, Nt) && !Ur.hasOwnProperty(Nt) && (St[Nt] = de[Nt]);
        if (O && O.defaultProps) {
          var hn = O.defaultProps;
          for (Nt in hn)
            St[Nt] === void 0 && (St[Nt] = hn[Nt]);
        }
        if (et || Vn) {
          var mn = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          et && qt(St, mn), Vn && jn(St, mn);
        }
        return _n(O, et, Vn, gt, Pe, xn.current, St);
      }
    }
    var tn = Se.ReactCurrentOwner, Pr = Se.ReactDebugCurrentFrame;
    function Xt(O) {
      if (O) {
        var de = O._owner, De = pn(O.type, O._source, de ? de.type : null);
        Pr.setExtraStackFrame(De);
      } else
        Pr.setExtraStackFrame(null);
    }
    var Kt;
    Kt = !1;
    function ni(O) {
      return typeof O == "object" && O !== null && O.$$typeof === y;
    }
    function Na() {
      {
        if (tn.current) {
          var O = Ne(tn.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function So(O) {
      {
        if (O !== void 0) {
          var de = O.fileName.replace(/^.*[\\\/]/, ""), De = O.lineNumber;
          return `

Check your code at ` + de + ":" + De + ".";
        }
        return "";
      }
    }
    var pl = {};
    function ru(O) {
      {
        var de = Na();
        if (!de) {
          var De = typeof O == "string" ? O : O.displayName || O.name;
          De && (de = `

Check the top-level render call using <` + De + ">.");
        }
        return de;
      }
    }
    function Bi(O, de) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var De = ru(de);
        if (pl[De])
          return;
        pl[De] = !0;
        var Pe = "";
        O && O._owner && O._owner !== tn.current && (Pe = " It was passed a child from " + Ne(O._owner.type) + "."), Xt(O), oe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', De, Pe), Xt(null);
      }
    }
    function Eo(O, de) {
      {
        if (typeof O != "object")
          return;
        if (Tr(O))
          for (var De = 0; De < O.length; De++) {
            var Pe = O[De];
            ni(Pe) && Bi(Pe, de);
          }
        else if (ni(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var gt = we(O);
          if (typeof gt == "function" && gt !== O.entries)
            for (var Nt = gt.call(O), St; !(St = Nt.next()).done; )
              ni(St.value) && Bi(St.value, de);
        }
      }
    }
    function Ea(O) {
      {
        var de = O.type;
        if (de == null || typeof de == "string")
          return;
        var De;
        if (typeof de == "function")
          De = de.propTypes;
        else if (typeof de == "object" && (de.$$typeof === F || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        de.$$typeof === P))
          De = de.propTypes;
        else
          return;
        if (De) {
          var Pe = Ne(de);
          Pn(De, O.props, "prop", Pe, O);
        } else if (de.PropTypes !== void 0 && !Kt) {
          Kt = !0;
          var gt = Ne(de);
          oe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", gt || "Unknown");
        }
        typeof de.getDefaultProps == "function" && !de.getDefaultProps.isReactClassApproved && oe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Si(O) {
      {
        for (var de = Object.keys(O.props), De = 0; De < de.length; De++) {
          var Pe = de[De];
          if (Pe !== "children" && Pe !== "key") {
            Xt(O), oe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Pe), Xt(null);
            break;
          }
        }
        O.ref !== null && (Xt(O), oe("Invalid attribute `ref` supplied to `React.Fragment`."), Xt(null));
      }
    }
    function ba(O, de, De, Pe, gt, Nt) {
      {
        var St = vt(O);
        if (!St) {
          var et = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (et += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Vn = So(gt);
          Vn ? et += Vn : et += Na();
          var hn;
          O === null ? hn = "null" : Tr(O) ? hn = "array" : O !== void 0 && O.$$typeof === y ? (hn = "<" + (Ne(O.type) || "Unknown") + " />", et = " Did you accidentally export a JSX literal instead of a component?") : hn = typeof O, oe("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", hn, et);
        }
        var mn = _r(O, de, De, gt, Nt);
        if (mn == null)
          return mn;
        if (St) {
          var fr = de.children;
          if (fr !== void 0)
            if (Pe)
              if (Tr(fr)) {
                for (var Ci = 0; Ci < fr.length; Ci++)
                  Eo(fr[Ci], O);
                Object.freeze && Object.freeze(fr);
              } else
                oe("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Eo(fr, O);
        }
        return O === h ? Si(mn) : Ea(mn), mn;
      }
    }
    function Ei(O, de, De) {
      return ba(O, de, De, !0);
    }
    function jr(O, de, De) {
      return ba(O, de, De, !1);
    }
    var Ca = jr, bi = Ei;
    gv.Fragment = h, gv.jsx = Ca, gv.jsxs = bi;
  }()), gv;
}
process.env.NODE_ENV === "production" ? lE.exports = QO() : lE.exports = GO();
var zt = lE.exports;
const zR = rn.createContext(void 0), vE = () => {
  const d = rn.useContext(zR);
  if (d === void 0)
    throw new Error("WindowSystem is not provided");
  return d;
}, MR = rn.createContext(void 0), qO = () => {
  const d = rn.useContext(MR);
  if (d === void 0)
    throw new Error("TaskList is not provided");
  return d;
};
function hE(d) {
  const { w: y, ...p } = d, { activateWindow: h } = vE();
  return /* @__PURE__ */ zt.jsx(MR.Provider, { value: { w: y }, children: /* @__PURE__ */ zt.jsx(
    "li",
    {
      ...p,
      style: { width: 100, display: "flex", ...d.style },
      onClick: () => h(y.id)
    }
  ) });
}
function XO(d) {
  return /* @__PURE__ */ zt.jsx("div", { ...d, style: { flex: 1, ...d.style } });
}
function KO(d) {
  const { closeWindow: y } = vE(), { w: p } = qO();
  return /* @__PURE__ */ zt.jsx("button", { ...d, type: "button", onClick: () => y(p.id) });
}
function bv(d) {
  return /* @__PURE__ */ zt.jsx(
    "div",
    {
      style: {
        display: "flex",
        overflowX: "scroll",
        scrollbarWidth: "thin"
      },
      children: /* @__PURE__ */ zt.jsx(
        "ul",
        {
          ...d,
          style: {
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "flex",
            ...d.style
          }
        }
      )
    }
  );
}
hE.Body = XO;
hE.Close = KO;
bv.List = hE;
function ZO() {
  const { windows: d } = vE();
  return /* @__PURE__ */ zt.jsx(bv, { children: d.map((y, p) => /* @__PURE__ */ zt.jsxs(
    bv.List,
    {
      w: y,
      style: {
        width: 110,
        marginLeft: p === 0 ? 0 : -5,
        clipPath: "polygon(0% 100%, 5% 0%, 95% 0%, 100% 100%)"
      },
      children: [
        /* @__PURE__ */ zt.jsx(
          bv.List.Body,
          {
            style: {
              border: "none",
              cursor: "pointer",
              paddingLeft: 10,
              backgroundColor: y.isActive ? "#bbb" : "#ddd"
            },
            children: y.header
          }
        ),
        /* @__PURE__ */ zt.jsx(
          bv.List.Close,
          {
            style: {
              border: "none",
              cursor: "pointer",
              width: 30,
              backgroundColor: y.isActive ? "#bbb" : "#ddd"
            },
            children: "×"
          }
        )
      ]
    },
    y.id
  )) });
}
var Sy = { exports: {} }, LR = {}, sE = { exports: {} }, sy = { exports: {} }, ln = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oR;
function JO() {
  if (oR)
    return ln;
  oR = 1;
  var d = typeof Symbol == "function" && Symbol.for, y = d ? Symbol.for("react.element") : 60103, p = d ? Symbol.for("react.portal") : 60106, h = d ? Symbol.for("react.fragment") : 60107, T = d ? Symbol.for("react.strict_mode") : 60108, x = d ? Symbol.for("react.profiler") : 60114, E = d ? Symbol.for("react.provider") : 60109, A = d ? Symbol.for("react.context") : 60110, F = d ? Symbol.for("react.async_mode") : 60111, j = d ? Symbol.for("react.concurrent_mode") : 60111, ee = d ? Symbol.for("react.forward_ref") : 60112, P = d ? Symbol.for("react.suspense") : 60113, K = d ? Symbol.for("react.suspense_list") : 60120, Z = d ? Symbol.for("react.memo") : 60115, fe = d ? Symbol.for("react.lazy") : 60116, me = d ? Symbol.for("react.block") : 60121, we = d ? Symbol.for("react.fundamental") : 60117, Se = d ? Symbol.for("react.responder") : 60118, oe = d ? Symbol.for("react.scope") : 60119;
  function re(J) {
    if (typeof J == "object" && J !== null) {
      var Qe = J.$$typeof;
      switch (Qe) {
        case y:
          switch (J = J.type, J) {
            case F:
            case j:
            case h:
            case x:
            case T:
            case P:
              return J;
            default:
              switch (J = J && J.$$typeof, J) {
                case A:
                case ee:
                case fe:
                case Z:
                case E:
                  return J;
                default:
                  return Qe;
              }
          }
        case p:
          return Qe;
      }
    }
  }
  function _e(J) {
    return re(J) === j;
  }
  return ln.AsyncMode = F, ln.ConcurrentMode = j, ln.ContextConsumer = A, ln.ContextProvider = E, ln.Element = y, ln.ForwardRef = ee, ln.Fragment = h, ln.Lazy = fe, ln.Memo = Z, ln.Portal = p, ln.Profiler = x, ln.StrictMode = T, ln.Suspense = P, ln.isAsyncMode = function(J) {
    return _e(J) || re(J) === F;
  }, ln.isConcurrentMode = _e, ln.isContextConsumer = function(J) {
    return re(J) === A;
  }, ln.isContextProvider = function(J) {
    return re(J) === E;
  }, ln.isElement = function(J) {
    return typeof J == "object" && J !== null && J.$$typeof === y;
  }, ln.isForwardRef = function(J) {
    return re(J) === ee;
  }, ln.isFragment = function(J) {
    return re(J) === h;
  }, ln.isLazy = function(J) {
    return re(J) === fe;
  }, ln.isMemo = function(J) {
    return re(J) === Z;
  }, ln.isPortal = function(J) {
    return re(J) === p;
  }, ln.isProfiler = function(J) {
    return re(J) === x;
  }, ln.isStrictMode = function(J) {
    return re(J) === T;
  }, ln.isSuspense = function(J) {
    return re(J) === P;
  }, ln.isValidElementType = function(J) {
    return typeof J == "string" || typeof J == "function" || J === h || J === j || J === x || J === T || J === P || J === K || typeof J == "object" && J !== null && (J.$$typeof === fe || J.$$typeof === Z || J.$$typeof === E || J.$$typeof === A || J.$$typeof === ee || J.$$typeof === we || J.$$typeof === Se || J.$$typeof === oe || J.$$typeof === me);
  }, ln.typeOf = re, ln;
}
var un = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lR;
function ek() {
  return lR || (lR = 1, process.env.NODE_ENV !== "production" && function() {
    var d = typeof Symbol == "function" && Symbol.for, y = d ? Symbol.for("react.element") : 60103, p = d ? Symbol.for("react.portal") : 60106, h = d ? Symbol.for("react.fragment") : 60107, T = d ? Symbol.for("react.strict_mode") : 60108, x = d ? Symbol.for("react.profiler") : 60114, E = d ? Symbol.for("react.provider") : 60109, A = d ? Symbol.for("react.context") : 60110, F = d ? Symbol.for("react.async_mode") : 60111, j = d ? Symbol.for("react.concurrent_mode") : 60111, ee = d ? Symbol.for("react.forward_ref") : 60112, P = d ? Symbol.for("react.suspense") : 60113, K = d ? Symbol.for("react.suspense_list") : 60120, Z = d ? Symbol.for("react.memo") : 60115, fe = d ? Symbol.for("react.lazy") : 60116, me = d ? Symbol.for("react.block") : 60121, we = d ? Symbol.for("react.fundamental") : 60117, Se = d ? Symbol.for("react.responder") : 60118, oe = d ? Symbol.for("react.scope") : 60119;
    function re(be) {
      return typeof be == "string" || typeof be == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      be === h || be === j || be === x || be === T || be === P || be === K || typeof be == "object" && be !== null && (be.$$typeof === fe || be.$$typeof === Z || be.$$typeof === E || be.$$typeof === A || be.$$typeof === ee || be.$$typeof === we || be.$$typeof === Se || be.$$typeof === oe || be.$$typeof === me);
    }
    function _e(be) {
      if (typeof be == "object" && be !== null) {
        var Ct = be.$$typeof;
        switch (Ct) {
          case y:
            var Yt = be.type;
            switch (Yt) {
              case F:
              case j:
              case h:
              case x:
              case T:
              case P:
                return Yt;
              default:
                var pn = Yt && Yt.$$typeof;
                switch (pn) {
                  case A:
                  case ee:
                  case fe:
                  case Z:
                  case E:
                    return pn;
                  default:
                    return Ct;
                }
            }
          case p:
            return Ct;
        }
      }
    }
    var J = F, Qe = j, He = A, pt = E, Mt = y, vt = ee, ot = h, ut = fe, Ne = Z, Xe = p, Rt = x, st = T, Re = P, ge = !1;
    function Be(be) {
      return ge || (ge = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w(be) || _e(be) === F;
    }
    function w(be) {
      return _e(be) === j;
    }
    function U(be) {
      return _e(be) === A;
    }
    function k(be) {
      return _e(be) === E;
    }
    function $(be) {
      return typeof be == "object" && be !== null && be.$$typeof === y;
    }
    function W(be) {
      return _e(be) === ee;
    }
    function te(be) {
      return _e(be) === h;
    }
    function X(be) {
      return _e(be) === fe;
    }
    function ue(be) {
      return _e(be) === Z;
    }
    function ce(be) {
      return _e(be) === p;
    }
    function Te(be) {
      return _e(be) === x;
    }
    function Me(be) {
      return _e(be) === T;
    }
    function Dt(be) {
      return _e(be) === P;
    }
    un.AsyncMode = J, un.ConcurrentMode = Qe, un.ContextConsumer = He, un.ContextProvider = pt, un.Element = Mt, un.ForwardRef = vt, un.Fragment = ot, un.Lazy = ut, un.Memo = Ne, un.Portal = Xe, un.Profiler = Rt, un.StrictMode = st, un.Suspense = Re, un.isAsyncMode = Be, un.isConcurrentMode = w, un.isContextConsumer = U, un.isContextProvider = k, un.isElement = $, un.isForwardRef = W, un.isFragment = te, un.isLazy = X, un.isMemo = ue, un.isPortal = ce, un.isProfiler = Te, un.isStrictMode = Me, un.isSuspense = Dt, un.isValidElementType = re, un.typeOf = _e;
  }()), un;
}
var uR;
function NR() {
  return uR || (uR = 1, process.env.NODE_ENV === "production" ? sy.exports = JO() : sy.exports = ek()), sy.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var q0, sR;
function tk() {
  if (sR)
    return q0;
  sR = 1;
  var d = Object.getOwnPropertySymbols, y = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
  function h(x) {
    if (x == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(x);
  }
  function T() {
    try {
      if (!Object.assign)
        return !1;
      var x = new String("abc");
      if (x[5] = "de", Object.getOwnPropertyNames(x)[0] === "5")
        return !1;
      for (var E = {}, A = 0; A < 10; A++)
        E["_" + String.fromCharCode(A)] = A;
      var F = Object.getOwnPropertyNames(E).map(function(ee) {
        return E[ee];
      });
      if (F.join("") !== "0123456789")
        return !1;
      var j = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(ee) {
        j[ee] = ee;
      }), Object.keys(Object.assign({}, j)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return q0 = T() ? Object.assign : function(x, E) {
    for (var A, F = h(x), j, ee = 1; ee < arguments.length; ee++) {
      A = Object(arguments[ee]);
      for (var P in A)
        y.call(A, P) && (F[P] = A[P]);
      if (d) {
        j = d(A);
        for (var K = 0; K < j.length; K++)
          p.call(A, j[K]) && (F[j[K]] = A[j[K]]);
      }
    }
    return F;
  }, q0;
}
var X0, cR;
function mE() {
  if (cR)
    return X0;
  cR = 1;
  var d = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return X0 = d, X0;
}
var K0, fR;
function AR() {
  return fR || (fR = 1, K0 = Function.call.bind(Object.prototype.hasOwnProperty)), K0;
}
var Z0, dR;
function nk() {
  if (dR)
    return Z0;
  dR = 1;
  var d = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var y = mE(), p = {}, h = AR();
    d = function(x) {
      var E = "Warning: " + x;
      typeof console < "u" && console.error(E);
      try {
        throw new Error(E);
      } catch {
      }
    };
  }
  function T(x, E, A, F, j) {
    if (process.env.NODE_ENV !== "production") {
      for (var ee in x)
        if (h(x, ee)) {
          var P;
          try {
            if (typeof x[ee] != "function") {
              var K = Error(
                (F || "React class") + ": " + A + " type `" + ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw K.name = "Invariant Violation", K;
            }
            P = x[ee](E, ee, F, A, null, y);
          } catch (fe) {
            P = fe;
          }
          if (P && !(P instanceof Error) && d(
            (F || "React class") + ": type specification of " + A + " `" + ee + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof P + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), P instanceof Error && !(P.message in p)) {
            p[P.message] = !0;
            var Z = j ? j() : "";
            d(
              "Failed " + A + " type: " + P.message + (Z ?? "")
            );
          }
        }
    }
  }
  return T.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (p = {});
  }, Z0 = T, Z0;
}
var J0, pR;
function rk() {
  if (pR)
    return J0;
  pR = 1;
  var d = NR(), y = tk(), p = mE(), h = AR(), T = nk(), x = function() {
  };
  process.env.NODE_ENV !== "production" && (x = function(A) {
    var F = "Warning: " + A;
    typeof console < "u" && console.error(F);
    try {
      throw new Error(F);
    } catch {
    }
  });
  function E() {
    return null;
  }
  return J0 = function(A, F) {
    var j = typeof Symbol == "function" && Symbol.iterator, ee = "@@iterator";
    function P(w) {
      var U = w && (j && w[j] || w[ee]);
      if (typeof U == "function")
        return U;
    }
    var K = "<<anonymous>>", Z = {
      array: Se("array"),
      bigint: Se("bigint"),
      bool: Se("boolean"),
      func: Se("function"),
      number: Se("number"),
      object: Se("object"),
      string: Se("string"),
      symbol: Se("symbol"),
      any: oe(),
      arrayOf: re,
      element: _e(),
      elementType: J(),
      instanceOf: Qe,
      node: vt(),
      objectOf: pt,
      oneOf: He,
      oneOfType: Mt,
      shape: ut,
      exact: Ne
    };
    function fe(w, U) {
      return w === U ? w !== 0 || 1 / w === 1 / U : w !== w && U !== U;
    }
    function me(w, U) {
      this.message = w, this.data = U && typeof U == "object" ? U : {}, this.stack = "";
    }
    me.prototype = Error.prototype;
    function we(w) {
      if (process.env.NODE_ENV !== "production")
        var U = {}, k = 0;
      function $(te, X, ue, ce, Te, Me, Dt) {
        if (ce = ce || K, Me = Me || ue, Dt !== p) {
          if (F) {
            var be = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw be.name = "Invariant Violation", be;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ct = ce + ":" + ue;
            !U[Ct] && // Avoid spamming the console because they are often not actionable except for lib authors
            k < 3 && (x(
              "You are manually calling a React.PropTypes validation function for the `" + Me + "` prop on `" + ce + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), U[Ct] = !0, k++);
          }
        }
        return X[ue] == null ? te ? X[ue] === null ? new me("The " + Te + " `" + Me + "` is marked as required " + ("in `" + ce + "`, but its value is `null`.")) : new me("The " + Te + " `" + Me + "` is marked as required in " + ("`" + ce + "`, but its value is `undefined`.")) : null : w(X, ue, ce, Te, Me);
      }
      var W = $.bind(null, !1);
      return W.isRequired = $.bind(null, !0), W;
    }
    function Se(w) {
      function U(k, $, W, te, X, ue) {
        var ce = k[$], Te = st(ce);
        if (Te !== w) {
          var Me = Re(ce);
          return new me(
            "Invalid " + te + " `" + X + "` of type " + ("`" + Me + "` supplied to `" + W + "`, expected ") + ("`" + w + "`."),
            { expectedType: w }
          );
        }
        return null;
      }
      return we(U);
    }
    function oe() {
      return we(E);
    }
    function re(w) {
      function U(k, $, W, te, X) {
        if (typeof w != "function")
          return new me("Property `" + X + "` of component `" + W + "` has invalid PropType notation inside arrayOf.");
        var ue = k[$];
        if (!Array.isArray(ue)) {
          var ce = st(ue);
          return new me("Invalid " + te + " `" + X + "` of type " + ("`" + ce + "` supplied to `" + W + "`, expected an array."));
        }
        for (var Te = 0; Te < ue.length; Te++) {
          var Me = w(ue, Te, W, te, X + "[" + Te + "]", p);
          if (Me instanceof Error)
            return Me;
        }
        return null;
      }
      return we(U);
    }
    function _e() {
      function w(U, k, $, W, te) {
        var X = U[k];
        if (!A(X)) {
          var ue = st(X);
          return new me("Invalid " + W + " `" + te + "` of type " + ("`" + ue + "` supplied to `" + $ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return we(w);
    }
    function J() {
      function w(U, k, $, W, te) {
        var X = U[k];
        if (!d.isValidElementType(X)) {
          var ue = st(X);
          return new me("Invalid " + W + " `" + te + "` of type " + ("`" + ue + "` supplied to `" + $ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return we(w);
    }
    function Qe(w) {
      function U(k, $, W, te, X) {
        if (!(k[$] instanceof w)) {
          var ue = w.name || K, ce = Be(k[$]);
          return new me("Invalid " + te + " `" + X + "` of type " + ("`" + ce + "` supplied to `" + W + "`, expected ") + ("instance of `" + ue + "`."));
        }
        return null;
      }
      return we(U);
    }
    function He(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? x(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : x("Invalid argument supplied to oneOf, expected an array.")), E;
      function U(k, $, W, te, X) {
        for (var ue = k[$], ce = 0; ce < w.length; ce++)
          if (fe(ue, w[ce]))
            return null;
        var Te = JSON.stringify(w, function(Dt, be) {
          var Ct = Re(be);
          return Ct === "symbol" ? String(be) : be;
        });
        return new me("Invalid " + te + " `" + X + "` of value `" + String(ue) + "` " + ("supplied to `" + W + "`, expected one of " + Te + "."));
      }
      return we(U);
    }
    function pt(w) {
      function U(k, $, W, te, X) {
        if (typeof w != "function")
          return new me("Property `" + X + "` of component `" + W + "` has invalid PropType notation inside objectOf.");
        var ue = k[$], ce = st(ue);
        if (ce !== "object")
          return new me("Invalid " + te + " `" + X + "` of type " + ("`" + ce + "` supplied to `" + W + "`, expected an object."));
        for (var Te in ue)
          if (h(ue, Te)) {
            var Me = w(ue, Te, W, te, X + "." + Te, p);
            if (Me instanceof Error)
              return Me;
          }
        return null;
      }
      return we(U);
    }
    function Mt(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && x("Invalid argument supplied to oneOfType, expected an instance of array."), E;
      for (var U = 0; U < w.length; U++) {
        var k = w[U];
        if (typeof k != "function")
          return x(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ge(k) + " at index " + U + "."
          ), E;
      }
      function $(W, te, X, ue, ce) {
        for (var Te = [], Me = 0; Me < w.length; Me++) {
          var Dt = w[Me], be = Dt(W, te, X, ue, ce, p);
          if (be == null)
            return null;
          be.data && h(be.data, "expectedType") && Te.push(be.data.expectedType);
        }
        var Ct = Te.length > 0 ? ", expected one of type [" + Te.join(", ") + "]" : "";
        return new me("Invalid " + ue + " `" + ce + "` supplied to " + ("`" + X + "`" + Ct + "."));
      }
      return we($);
    }
    function vt() {
      function w(U, k, $, W, te) {
        return Xe(U[k]) ? null : new me("Invalid " + W + " `" + te + "` supplied to " + ("`" + $ + "`, expected a ReactNode."));
      }
      return we(w);
    }
    function ot(w, U, k, $, W) {
      return new me(
        (w || "React class") + ": " + U + " type `" + k + "." + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + W + "`."
      );
    }
    function ut(w) {
      function U(k, $, W, te, X) {
        var ue = k[$], ce = st(ue);
        if (ce !== "object")
          return new me("Invalid " + te + " `" + X + "` of type `" + ce + "` " + ("supplied to `" + W + "`, expected `object`."));
        for (var Te in w) {
          var Me = w[Te];
          if (typeof Me != "function")
            return ot(W, te, X, Te, Re(Me));
          var Dt = Me(ue, Te, W, te, X + "." + Te, p);
          if (Dt)
            return Dt;
        }
        return null;
      }
      return we(U);
    }
    function Ne(w) {
      function U(k, $, W, te, X) {
        var ue = k[$], ce = st(ue);
        if (ce !== "object")
          return new me("Invalid " + te + " `" + X + "` of type `" + ce + "` " + ("supplied to `" + W + "`, expected `object`."));
        var Te = y({}, k[$], w);
        for (var Me in Te) {
          var Dt = w[Me];
          if (h(w, Me) && typeof Dt != "function")
            return ot(W, te, X, Me, Re(Dt));
          if (!Dt)
            return new me(
              "Invalid " + te + " `" + X + "` key `" + Me + "` supplied to `" + W + "`.\nBad object: " + JSON.stringify(k[$], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(w), null, "  ")
            );
          var be = Dt(ue, Me, W, te, X + "." + Me, p);
          if (be)
            return be;
        }
        return null;
      }
      return we(U);
    }
    function Xe(w) {
      switch (typeof w) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !w;
        case "object":
          if (Array.isArray(w))
            return w.every(Xe);
          if (w === null || A(w))
            return !0;
          var U = P(w);
          if (U) {
            var k = U.call(w), $;
            if (U !== w.entries) {
              for (; !($ = k.next()).done; )
                if (!Xe($.value))
                  return !1;
            } else
              for (; !($ = k.next()).done; ) {
                var W = $.value;
                if (W && !Xe(W[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Rt(w, U) {
      return w === "symbol" ? !0 : U ? U["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && U instanceof Symbol : !1;
    }
    function st(w) {
      var U = typeof w;
      return Array.isArray(w) ? "array" : w instanceof RegExp ? "object" : Rt(U, w) ? "symbol" : U;
    }
    function Re(w) {
      if (typeof w > "u" || w === null)
        return "" + w;
      var U = st(w);
      if (U === "object") {
        if (w instanceof Date)
          return "date";
        if (w instanceof RegExp)
          return "regexp";
      }
      return U;
    }
    function ge(w) {
      var U = Re(w);
      switch (U) {
        case "array":
        case "object":
          return "an " + U;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + U;
        default:
          return U;
      }
    }
    function Be(w) {
      return !w.constructor || !w.constructor.name ? K : w.constructor.name;
    }
    return Z.checkPropTypes = T, Z.resetWarningCache = T.resetWarningCache, Z.PropTypes = Z, Z;
  }, J0;
}
var eE, vR;
function ak() {
  if (vR)
    return eE;
  vR = 1;
  var d = mE();
  function y() {
  }
  function p() {
  }
  return p.resetWarningCache = y, eE = function() {
    function h(E, A, F, j, ee, P) {
      if (P !== d) {
        var K = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw K.name = "Invariant Violation", K;
      }
    }
    h.isRequired = h;
    function T() {
      return h;
    }
    var x = {
      array: h,
      bigint: h,
      bool: h,
      func: h,
      number: h,
      object: h,
      string: h,
      symbol: h,
      any: h,
      arrayOf: T,
      element: h,
      elementType: h,
      instanceOf: T,
      node: h,
      objectOf: T,
      oneOf: T,
      oneOfType: T,
      shape: T,
      exact: T,
      checkPropTypes: p,
      resetWarningCache: y
    };
    return x.PropTypes = x, x;
  }, eE;
}
if (process.env.NODE_ENV !== "production") {
  var ik = NR(), ok = !0;
  sE.exports = rk()(ik.isElement, ok);
} else
  sE.exports = ak()();
var UR = sE.exports, cE = { exports: {} }, ei = {}, cy = { exports: {} }, tE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hR;
function lk() {
  return hR || (hR = 1, function(d) {
    function y(ge, Be) {
      var w = ge.length;
      ge.push(Be);
      e:
        for (; 0 < w; ) {
          var U = w - 1 >>> 1, k = ge[U];
          if (0 < T(k, Be))
            ge[U] = Be, ge[w] = k, w = U;
          else
            break e;
        }
    }
    function p(ge) {
      return ge.length === 0 ? null : ge[0];
    }
    function h(ge) {
      if (ge.length === 0)
        return null;
      var Be = ge[0], w = ge.pop();
      if (w !== Be) {
        ge[0] = w;
        e:
          for (var U = 0, k = ge.length, $ = k >>> 1; U < $; ) {
            var W = 2 * (U + 1) - 1, te = ge[W], X = W + 1, ue = ge[X];
            if (0 > T(te, w))
              X < k && 0 > T(ue, te) ? (ge[U] = ue, ge[X] = w, U = X) : (ge[U] = te, ge[W] = w, U = W);
            else if (X < k && 0 > T(ue, w))
              ge[U] = ue, ge[X] = w, U = X;
            else
              break e;
          }
      }
      return Be;
    }
    function T(ge, Be) {
      var w = ge.sortIndex - Be.sortIndex;
      return w !== 0 ? w : ge.id - Be.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var x = performance;
      d.unstable_now = function() {
        return x.now();
      };
    } else {
      var E = Date, A = E.now();
      d.unstable_now = function() {
        return E.now() - A;
      };
    }
    var F = [], j = [], ee = 1, P = null, K = 3, Z = !1, fe = !1, me = !1, we = typeof setTimeout == "function" ? setTimeout : null, Se = typeof clearTimeout == "function" ? clearTimeout : null, oe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function re(ge) {
      for (var Be = p(j); Be !== null; ) {
        if (Be.callback === null)
          h(j);
        else if (Be.startTime <= ge)
          h(j), Be.sortIndex = Be.expirationTime, y(F, Be);
        else
          break;
        Be = p(j);
      }
    }
    function _e(ge) {
      if (me = !1, re(ge), !fe)
        if (p(F) !== null)
          fe = !0, st(J);
        else {
          var Be = p(j);
          Be !== null && Re(_e, Be.startTime - ge);
        }
    }
    function J(ge, Be) {
      fe = !1, me && (me = !1, Se(pt), pt = -1), Z = !0;
      var w = K;
      try {
        for (re(Be), P = p(F); P !== null && (!(P.expirationTime > Be) || ge && !ot()); ) {
          var U = P.callback;
          if (typeof U == "function") {
            P.callback = null, K = P.priorityLevel;
            var k = U(P.expirationTime <= Be);
            Be = d.unstable_now(), typeof k == "function" ? P.callback = k : P === p(F) && h(F), re(Be);
          } else
            h(F);
          P = p(F);
        }
        if (P !== null)
          var $ = !0;
        else {
          var W = p(j);
          W !== null && Re(_e, W.startTime - Be), $ = !1;
        }
        return $;
      } finally {
        P = null, K = w, Z = !1;
      }
    }
    var Qe = !1, He = null, pt = -1, Mt = 5, vt = -1;
    function ot() {
      return !(d.unstable_now() - vt < Mt);
    }
    function ut() {
      if (He !== null) {
        var ge = d.unstable_now();
        vt = ge;
        var Be = !0;
        try {
          Be = He(!0, ge);
        } finally {
          Be ? Ne() : (Qe = !1, He = null);
        }
      } else
        Qe = !1;
    }
    var Ne;
    if (typeof oe == "function")
      Ne = function() {
        oe(ut);
      };
    else if (typeof MessageChannel < "u") {
      var Xe = new MessageChannel(), Rt = Xe.port2;
      Xe.port1.onmessage = ut, Ne = function() {
        Rt.postMessage(null);
      };
    } else
      Ne = function() {
        we(ut, 0);
      };
    function st(ge) {
      He = ge, Qe || (Qe = !0, Ne());
    }
    function Re(ge, Be) {
      pt = we(function() {
        ge(d.unstable_now());
      }, Be);
    }
    d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(ge) {
      ge.callback = null;
    }, d.unstable_continueExecution = function() {
      fe || Z || (fe = !0, st(J));
    }, d.unstable_forceFrameRate = function(ge) {
      0 > ge || 125 < ge ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Mt = 0 < ge ? Math.floor(1e3 / ge) : 5;
    }, d.unstable_getCurrentPriorityLevel = function() {
      return K;
    }, d.unstable_getFirstCallbackNode = function() {
      return p(F);
    }, d.unstable_next = function(ge) {
      switch (K) {
        case 1:
        case 2:
        case 3:
          var Be = 3;
          break;
        default:
          Be = K;
      }
      var w = K;
      K = Be;
      try {
        return ge();
      } finally {
        K = w;
      }
    }, d.unstable_pauseExecution = function() {
    }, d.unstable_requestPaint = function() {
    }, d.unstable_runWithPriority = function(ge, Be) {
      switch (ge) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ge = 3;
      }
      var w = K;
      K = ge;
      try {
        return Be();
      } finally {
        K = w;
      }
    }, d.unstable_scheduleCallback = function(ge, Be, w) {
      var U = d.unstable_now();
      switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? U + w : U) : w = U, ge) {
        case 1:
          var k = -1;
          break;
        case 2:
          k = 250;
          break;
        case 5:
          k = 1073741823;
          break;
        case 4:
          k = 1e4;
          break;
        default:
          k = 5e3;
      }
      return k = w + k, ge = { id: ee++, callback: Be, priorityLevel: ge, startTime: w, expirationTime: k, sortIndex: -1 }, w > U ? (ge.sortIndex = w, y(j, ge), p(F) === null && ge === p(j) && (me ? (Se(pt), pt = -1) : me = !0, Re(_e, w - U))) : (ge.sortIndex = k, y(F, ge), fe || Z || (fe = !0, st(J))), ge;
    }, d.unstable_shouldYield = ot, d.unstable_wrapCallback = function(ge) {
      var Be = K;
      return function() {
        var w = K;
        K = Be;
        try {
          return ge.apply(this, arguments);
        } finally {
          K = w;
        }
      };
    };
  }(tE)), tE;
}
var nE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mR;
function uk() {
  return mR || (mR = 1, function(d) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var y = !1, p = !1, h = 5;
      function T(xe, Ke) {
        var wt = xe.length;
        xe.push(Ke), A(xe, Ke, wt);
      }
      function x(xe) {
        return xe.length === 0 ? null : xe[0];
      }
      function E(xe) {
        if (xe.length === 0)
          return null;
        var Ke = xe[0], wt = xe.pop();
        return wt !== Ke && (xe[0] = wt, F(xe, wt, 0)), Ke;
      }
      function A(xe, Ke, wt) {
        for (var Qt = wt; Qt > 0; ) {
          var qt = Qt - 1 >>> 1, jn = xe[qt];
          if (j(jn, Ke) > 0)
            xe[qt] = Ke, xe[Qt] = jn, Qt = qt;
          else
            return;
        }
      }
      function F(xe, Ke, wt) {
        for (var Qt = wt, qt = xe.length, jn = qt >>> 1; Qt < jn; ) {
          var _n = (Qt + 1) * 2 - 1, _r = xe[_n], tn = _n + 1, Pr = xe[tn];
          if (j(_r, Ke) < 0)
            tn < qt && j(Pr, _r) < 0 ? (xe[Qt] = Pr, xe[tn] = Ke, Qt = tn) : (xe[Qt] = _r, xe[_n] = Ke, Qt = _n);
          else if (tn < qt && j(Pr, Ke) < 0)
            xe[Qt] = Pr, xe[tn] = Ke, Qt = tn;
          else
            return;
        }
      }
      function j(xe, Ke) {
        var wt = xe.sortIndex - Ke.sortIndex;
        return wt !== 0 ? wt : xe.id - Ke.id;
      }
      var ee = 1, P = 2, K = 3, Z = 4, fe = 5;
      function me(xe, Ke) {
      }
      var we = typeof performance == "object" && typeof performance.now == "function";
      if (we) {
        var Se = performance;
        d.unstable_now = function() {
          return Se.now();
        };
      } else {
        var oe = Date, re = oe.now();
        d.unstable_now = function() {
          return oe.now() - re;
        };
      }
      var _e = 1073741823, J = -1, Qe = 250, He = 5e3, pt = 1e4, Mt = _e, vt = [], ot = [], ut = 1, Ne = null, Xe = K, Rt = !1, st = !1, Re = !1, ge = typeof setTimeout == "function" ? setTimeout : null, Be = typeof clearTimeout == "function" ? clearTimeout : null, w = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function U(xe) {
        for (var Ke = x(ot); Ke !== null; ) {
          if (Ke.callback === null)
            E(ot);
          else if (Ke.startTime <= xe)
            E(ot), Ke.sortIndex = Ke.expirationTime, T(vt, Ke);
          else
            return;
          Ke = x(ot);
        }
      }
      function k(xe) {
        if (Re = !1, U(xe), !st)
          if (x(vt) !== null)
            st = !0, Zr($);
          else {
            var Ke = x(ot);
            Ke !== null && xn(k, Ke.startTime - xe);
          }
      }
      function $(xe, Ke) {
        st = !1, Re && (Re = !1, Ur()), Rt = !0;
        var wt = Xe;
        try {
          var Qt;
          if (!p)
            return W(xe, Ke);
        } finally {
          Ne = null, Xe = wt, Rt = !1;
        }
      }
      function W(xe, Ke) {
        var wt = Ke;
        for (U(wt), Ne = x(vt); Ne !== null && !y && !(Ne.expirationTime > wt && (!xe || sr())); ) {
          var Qt = Ne.callback;
          if (typeof Qt == "function") {
            Ne.callback = null, Xe = Ne.priorityLevel;
            var qt = Ne.expirationTime <= wt, jn = Qt(qt);
            wt = d.unstable_now(), typeof jn == "function" ? Ne.callback = jn : Ne === x(vt) && E(vt), U(wt);
          } else
            E(vt);
          Ne = x(vt);
        }
        if (Ne !== null)
          return !0;
        var _n = x(ot);
        return _n !== null && xn(k, _n.startTime - wt), !1;
      }
      function te(xe, Ke) {
        switch (xe) {
          case ee:
          case P:
          case K:
          case Z:
          case fe:
            break;
          default:
            xe = K;
        }
        var wt = Xe;
        Xe = xe;
        try {
          return Ke();
        } finally {
          Xe = wt;
        }
      }
      function X(xe) {
        var Ke;
        switch (Xe) {
          case ee:
          case P:
          case K:
            Ke = K;
            break;
          default:
            Ke = Xe;
            break;
        }
        var wt = Xe;
        Xe = Ke;
        try {
          return xe();
        } finally {
          Xe = wt;
        }
      }
      function ue(xe) {
        var Ke = Xe;
        return function() {
          var wt = Xe;
          Xe = Ke;
          try {
            return xe.apply(this, arguments);
          } finally {
            Xe = wt;
          }
        };
      }
      function ce(xe, Ke, wt) {
        var Qt = d.unstable_now(), qt;
        if (typeof wt == "object" && wt !== null) {
          var jn = wt.delay;
          typeof jn == "number" && jn > 0 ? qt = Qt + jn : qt = Qt;
        } else
          qt = Qt;
        var _n;
        switch (xe) {
          case ee:
            _n = J;
            break;
          case P:
            _n = Qe;
            break;
          case fe:
            _n = Mt;
            break;
          case Z:
            _n = pt;
            break;
          case K:
          default:
            _n = He;
            break;
        }
        var _r = qt + _n, tn = {
          id: ut++,
          callback: Ke,
          priorityLevel: xe,
          startTime: qt,
          expirationTime: _r,
          sortIndex: -1
        };
        return qt > Qt ? (tn.sortIndex = qt, T(ot, tn), x(vt) === null && tn === x(ot) && (Re ? Ur() : Re = !0, xn(k, qt - Qt))) : (tn.sortIndex = _r, T(vt, tn), !st && !Rt && (st = !0, Zr($))), tn;
      }
      function Te() {
      }
      function Me() {
        !st && !Rt && (st = !0, Zr($));
      }
      function Dt() {
        return x(vt);
      }
      function be(xe) {
        xe.callback = null;
      }
      function Ct() {
        return Xe;
      }
      var Yt = !1, pn = null, wn = -1, vn = h, Rr = -1;
      function sr() {
        var xe = d.unstable_now() - Rr;
        return !(xe < vn);
      }
      function Pn() {
      }
      function Gn(xe) {
        if (xe < 0 || xe > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        xe > 0 ? vn = Math.floor(1e3 / xe) : vn = h;
      }
      var Tr = function() {
        if (pn !== null) {
          var xe = d.unstable_now();
          Rr = xe;
          var Ke = !0, wt = !0;
          try {
            wt = pn(Ke, xe);
          } finally {
            wt ? xr() : (Yt = !1, pn = null);
          }
        } else
          Yt = !1;
      }, xr;
      if (typeof w == "function")
        xr = function() {
          w(Tr);
        };
      else if (typeof MessageChannel < "u") {
        var ga = new MessageChannel(), cr = ga.port2;
        ga.port1.onmessage = Tr, xr = function() {
          cr.postMessage(null);
        };
      } else
        xr = function() {
          ge(Tr, 0);
        };
      function Zr(xe) {
        pn = xe, Yt || (Yt = !0, xr());
      }
      function xn(xe, Ke) {
        wn = ge(function() {
          xe(d.unstable_now());
        }, Ke);
      }
      function Ur() {
        Be(wn), wn = -1;
      }
      var gi = Pn, Sa = null;
      d.unstable_IdlePriority = fe, d.unstable_ImmediatePriority = ee, d.unstable_LowPriority = Z, d.unstable_NormalPriority = K, d.unstable_Profiling = Sa, d.unstable_UserBlockingPriority = P, d.unstable_cancelCallback = be, d.unstable_continueExecution = Me, d.unstable_forceFrameRate = Gn, d.unstable_getCurrentPriorityLevel = Ct, d.unstable_getFirstCallbackNode = Dt, d.unstable_next = X, d.unstable_pauseExecution = Te, d.unstable_requestPaint = gi, d.unstable_runWithPriority = te, d.unstable_scheduleCallback = ce, d.unstable_shouldYield = sr, d.unstable_wrapCallback = ue, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(nE)), nE;
}
var yR;
function PR() {
  return yR || (yR = 1, process.env.NODE_ENV === "production" ? cy.exports = lk() : cy.exports = uk()), cy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gR;
function sk() {
  if (gR)
    return ei;
  gR = 1;
  var d = rn, y = PR();
  function p(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var h = /* @__PURE__ */ new Set(), T = {};
  function x(n, r) {
    E(n, r), E(n + "Capture", r);
  }
  function E(n, r) {
    for (T[n] = r, n = 0; n < r.length; n++)
      h.add(r[n]);
  }
  var A = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), F = Object.prototype.hasOwnProperty, j = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ee = {}, P = {};
  function K(n) {
    return F.call(P, n) ? !0 : F.call(ee, n) ? !1 : j.test(n) ? P[n] = !0 : (ee[n] = !0, !1);
  }
  function Z(n, r, o, u) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function fe(n, r, o, u) {
    if (r === null || typeof r > "u" || Z(n, r, o, u))
      return !0;
    if (u)
      return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function me(n, r, o, u, c, v, b) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = v, this.removeEmptyString = b;
  }
  var we = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    we[n] = new me(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    we[r] = new me(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    we[n] = new me(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    we[n] = new me(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    we[n] = new me(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    we[n] = new me(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    we[n] = new me(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    we[n] = new me(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    we[n] = new me(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Se = /[\-:]([a-z])/g;
  function oe(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Se,
      oe
    );
    we[r] = new me(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Se, oe);
    we[r] = new me(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Se, oe);
    we[r] = new me(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    we[n] = new me(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), we.xlinkHref = new me("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    we[n] = new me(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function re(n, r, o, u) {
    var c = we.hasOwnProperty(r) ? we[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (fe(r, o, c, u) && (o = null), u || c === null ? K(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : c.mustUseProperty ? n[c.propertyName] = o === null ? c.type === 3 ? !1 : "" : o : (r = c.attributeName, u = c.attributeNamespace, o === null ? n.removeAttribute(r) : (c = c.type, o = c === 3 || c === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var _e = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, J = Symbol.for("react.element"), Qe = Symbol.for("react.portal"), He = Symbol.for("react.fragment"), pt = Symbol.for("react.strict_mode"), Mt = Symbol.for("react.profiler"), vt = Symbol.for("react.provider"), ot = Symbol.for("react.context"), ut = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), Xe = Symbol.for("react.suspense_list"), Rt = Symbol.for("react.memo"), st = Symbol.for("react.lazy"), Re = Symbol.for("react.offscreen"), ge = Symbol.iterator;
  function Be(n) {
    return n === null || typeof n != "object" ? null : (n = ge && n[ge] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var w = Object.assign, U;
  function k(n) {
    if (U === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        U = r && r[1] || "";
      }
    return `
` + U + n;
  }
  var $ = !1;
  function W(n, r) {
    if (!n || $)
      return "";
    $ = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (q) {
            var u = q;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (q) {
            u = q;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (q) {
          u = q;
        }
        n();
      }
    } catch (q) {
      if (q && u && typeof q.stack == "string") {
        for (var c = q.stack.split(`
`), v = u.stack.split(`
`), b = c.length - 1, _ = v.length - 1; 1 <= b && 0 <= _ && c[b] !== v[_]; )
          _--;
        for (; 1 <= b && 0 <= _; b--, _--)
          if (c[b] !== v[_]) {
            if (b !== 1 || _ !== 1)
              do
                if (b--, _--, 0 > _ || c[b] !== v[_]) {
                  var z = `
` + c[b].replace(" at new ", " at ");
                  return n.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", n.displayName)), z;
                }
              while (1 <= b && 0 <= _);
            break;
          }
      }
    } finally {
      $ = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? k(n) : "";
  }
  function te(n) {
    switch (n.tag) {
      case 5:
        return k(n.type);
      case 16:
        return k("Lazy");
      case 13:
        return k("Suspense");
      case 19:
        return k("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = W(n.type, !1), n;
      case 11:
        return n = W(n.type.render, !1), n;
      case 1:
        return n = W(n.type, !0), n;
      default:
        return "";
    }
  }
  function X(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case He:
        return "Fragment";
      case Qe:
        return "Portal";
      case Mt:
        return "Profiler";
      case pt:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case Xe:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case ot:
          return (n.displayName || "Context") + ".Consumer";
        case vt:
          return (n._context.displayName || "Context") + ".Provider";
        case ut:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Rt:
          return r = n.displayName || null, r !== null ? r : X(n.type) || "Memo";
        case st:
          r = n._payload, n = n._init;
          try {
            return X(n(r));
          } catch {
          }
      }
    return null;
  }
  function ue(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return X(r);
      case 8:
        return r === pt ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function ce(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Te(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Me(n) {
    var r = Te(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var c = o.get, v = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(b) {
        u = "" + b, v.call(this, b);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(b) {
        u = "" + b;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Dt(n) {
    n._valueTracker || (n._valueTracker = Me(n));
  }
  function be(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), u = "";
    return n && (u = Te(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== o ? (r.setValue(n), !0) : !1;
  }
  function Ct(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Yt(n, r) {
    var o = r.checked;
    return w({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function pn(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = ce(r.value != null ? r.value : o), n._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function wn(n, r) {
    r = r.checked, r != null && re(n, "checked", r, !1);
  }
  function vn(n, r) {
    wn(n, r);
    var o = ce(r.value), u = r.type;
    if (o != null)
      u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? sr(n, r.type, o) : r.hasOwnProperty("defaultValue") && sr(n, r.type, ce(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Rr(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function sr(n, r, o) {
    (r !== "number" || Ct(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var Pn = Array.isArray;
  function Gn(n, r, o, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < o.length; c++)
        r["$" + o[c]] = !0;
      for (o = 0; o < n.length; o++)
        c = r.hasOwnProperty("$" + n[o].value), n[o].selected !== c && (n[o].selected = c), c && u && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + ce(o), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === o) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Tr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(p(91));
    return w({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function xr(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(p(92));
        if (Pn(o)) {
          if (1 < o.length)
            throw Error(p(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: ce(o) };
  }
  function ga(n, r) {
    var o = ce(r.value), u = ce(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), u != null && (n.defaultValue = "" + u);
  }
  function cr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Zr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function xn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Zr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Ur, gi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, u, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Ur = Ur || document.createElement("div"), Ur.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Ur.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Sa(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var xe = {
    animationIterationCount: !0,
    aspectRatio: !0,
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
    gridArea: !0,
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
  }, Ke = ["Webkit", "ms", "Moz", "O"];
  Object.keys(xe).forEach(function(n) {
    Ke.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), xe[r] = xe[n];
    });
  });
  function wt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || xe.hasOwnProperty(n) && xe[n] ? ("" + r).trim() : r + "px";
  }
  function Qt(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var u = o.indexOf("--") === 0, c = wt(o, r[o], u);
        o === "float" && (o = "cssFloat"), u ? n.setProperty(o, c) : n[o] = c;
      }
  }
  var qt = w({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function jn(n, r) {
    if (r) {
      if (qt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(p(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(p(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(p(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(p(62));
    }
  }
  function _n(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var _r = null;
  function tn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Pr = null, Xt = null, Kt = null;
  function ni(n) {
    if (n = Os(n)) {
      if (typeof Pr != "function")
        throw Error(p(280));
      var r = n.stateNode;
      r && (r = Je(r), Pr(n.stateNode, n.type, r));
    }
  }
  function Na(n) {
    Xt ? Kt ? Kt.push(n) : Kt = [n] : Xt = n;
  }
  function So() {
    if (Xt) {
      var n = Xt, r = Kt;
      if (Kt = Xt = null, ni(n), r)
        for (n = 0; n < r.length; n++)
          ni(r[n]);
    }
  }
  function pl(n, r) {
    return n(r);
  }
  function ru() {
  }
  var Bi = !1;
  function Eo(n, r, o) {
    if (Bi)
      return n(r, o);
    Bi = !0;
    try {
      return pl(n, r, o);
    } finally {
      Bi = !1, (Xt !== null || Kt !== null) && (ru(), So());
    }
  }
  function Ea(n, r) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var u = Je(o);
    if (u === null)
      return null;
    o = u[r];
    e:
      switch (r) {
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
        case "onMouseEnter":
          (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (o && typeof o != "function")
      throw Error(p(231, r, typeof o));
    return o;
  }
  var Si = !1;
  if (A)
    try {
      var ba = {};
      Object.defineProperty(ba, "passive", { get: function() {
        Si = !0;
      } }), window.addEventListener("test", ba, ba), window.removeEventListener("test", ba, ba);
    } catch {
      Si = !1;
    }
  function Ei(n, r, o, u, c, v, b, _, z) {
    var q = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, q);
    } catch (ve) {
      this.onError(ve);
    }
  }
  var jr = !1, Ca = null, bi = !1, O = null, de = { onError: function(n) {
    jr = !0, Ca = n;
  } };
  function De(n, r, o, u, c, v, b, _, z) {
    jr = !1, Ca = null, Ei.apply(de, arguments);
  }
  function Pe(n, r, o, u, c, v, b, _, z) {
    if (De.apply(this, arguments), jr) {
      if (jr) {
        var q = Ca;
        jr = !1, Ca = null;
      } else
        throw Error(p(198));
      bi || (bi = !0, O = q);
    }
  }
  function gt(n) {
    var r = n, o = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function Nt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function St(n) {
    if (gt(n) !== n)
      throw Error(p(188));
  }
  function et(n) {
    var r = n.alternate;
    if (!r) {
      if (r = gt(n), r === null)
        throw Error(p(188));
      return r !== n ? null : n;
    }
    for (var o = n, u = r; ; ) {
      var c = o.return;
      if (c === null)
        break;
      var v = c.alternate;
      if (v === null) {
        if (u = c.return, u !== null) {
          o = u;
          continue;
        }
        break;
      }
      if (c.child === v.child) {
        for (v = c.child; v; ) {
          if (v === o)
            return St(c), n;
          if (v === u)
            return St(c), r;
          v = v.sibling;
        }
        throw Error(p(188));
      }
      if (o.return !== u.return)
        o = c, u = v;
      else {
        for (var b = !1, _ = c.child; _; ) {
          if (_ === o) {
            b = !0, o = c, u = v;
            break;
          }
          if (_ === u) {
            b = !0, u = c, o = v;
            break;
          }
          _ = _.sibling;
        }
        if (!b) {
          for (_ = v.child; _; ) {
            if (_ === o) {
              b = !0, o = v, u = c;
              break;
            }
            if (_ === u) {
              b = !0, u = v, o = c;
              break;
            }
            _ = _.sibling;
          }
          if (!b)
            throw Error(p(189));
        }
      }
      if (o.alternate !== u)
        throw Error(p(190));
    }
    if (o.tag !== 3)
      throw Error(p(188));
    return o.stateNode.current === o ? n : r;
  }
  function Vn(n) {
    return n = et(n), n !== null ? hn(n) : null;
  }
  function hn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = hn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var mn = y.unstable_scheduleCallback, fr = y.unstable_cancelCallback, Ci = y.unstable_shouldYield, au = y.unstable_requestPaint, Ft = y.unstable_now, ud = y.unstable_getCurrentPriorityLevel, ri = y.unstable_ImmediatePriority, Tt = y.unstable_UserBlockingPriority, wi = y.unstable_NormalPriority, bo = y.unstable_LowPriority, iu = y.unstable_IdlePriority, Co = null, Jr = null;
  function ds(n) {
    if (Jr && typeof Jr.onCommitFiberRoot == "function")
      try {
        Jr.onCommitFiberRoot(Co, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Fr = Math.clz32 ? Math.clz32 : Sc, ps = Math.log, vs = Math.LN2;
  function Sc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ps(n) / vs | 0) | 0;
  }
  var ou = 64, wo = 4194304;
  function ai(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Hr(n, r) {
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var u = 0, c = n.suspendedLanes, v = n.pingedLanes, b = o & 268435455;
    if (b !== 0) {
      var _ = b & ~c;
      _ !== 0 ? u = ai(_) : (v &= b, v !== 0 && (u = ai(v)));
    } else
      b = o & ~c, b !== 0 ? u = ai(b) : v !== 0 && (u = ai(v));
    if (u === 0)
      return 0;
    if (r !== 0 && r !== u && !(r & c) && (c = u & -u, v = r & -r, c >= v || c === 16 && (v & 4194240) !== 0))
      return r;
    if (u & 4 && (u |= o & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= u; 0 < r; )
        o = 31 - Fr(r), c = 1 << o, u |= n[o], r &= ~c;
    return u;
  }
  function Ro(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function To(n, r) {
    for (var o = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, v = n.pendingLanes; 0 < v; ) {
      var b = 31 - Fr(v), _ = 1 << b, z = c[b];
      z === -1 ? (!(_ & o) || _ & u) && (c[b] = Ro(_, r)) : z <= r && (n.expiredLanes |= _), v &= ~_;
    }
  }
  function xo(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function lu() {
    var n = ou;
    return ou <<= 1, !(ou & 4194240) && (ou = 64), n;
  }
  function uu(n) {
    for (var r = [], o = 0; 31 > o; o++)
      r.push(n);
    return r;
  }
  function Vi(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Fr(r), n[r] = o;
  }
  function sd(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var c = 31 - Fr(o), v = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, o &= ~v;
    }
  }
  function Ri(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var u = 31 - Fr(o), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), o &= ~c;
    }
  }
  var $t = 0;
  function su(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var vl, cu, Ht, fu, du, ht = !1, hl = [], Dn = null, ea = null, Br = null, _o = /* @__PURE__ */ new Map(), Ln = /* @__PURE__ */ new Map(), Zt = [], Ec = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ta(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Dn = null;
        break;
      case "dragenter":
      case "dragleave":
        ea = null;
        break;
      case "mouseover":
      case "mouseout":
        Br = null;
        break;
      case "pointerover":
      case "pointerout":
        _o.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ln.delete(r.pointerId);
    }
  }
  function tr(n, r, o, u, c, v) {
    return n === null || n.nativeEvent !== v ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: v, targetContainers: [c] }, r !== null && (r = Os(r), r !== null && cu(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Ti(n, r, o, u, c) {
    switch (r) {
      case "focusin":
        return Dn = tr(Dn, n, r, o, u, c), !0;
      case "dragenter":
        return ea = tr(ea, n, r, o, u, c), !0;
      case "mouseover":
        return Br = tr(Br, n, r, o, u, c), !0;
      case "pointerover":
        var v = c.pointerId;
        return _o.set(v, tr(_o.get(v) || null, n, r, o, u, c)), !0;
      case "gotpointercapture":
        return v = c.pointerId, Ln.set(v, tr(Ln.get(v) || null, n, r, o, u, c)), !0;
    }
    return !1;
  }
  function bc(n) {
    var r = ja(n.target);
    if (r !== null) {
      var o = gt(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = Nt(o), r !== null) {
            n.blockedOn = r, du(n.priority, function() {
              Ht(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function $i(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = vu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var u = new o.constructor(o.type, o);
        _r = u, o.target.dispatchEvent(u), _r = null;
      } else
        return r = Os(o), r !== null && cu(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function Do(n, r, o) {
    $i(n) && o.delete(r);
  }
  function Cc() {
    ht = !1, Dn !== null && $i(Dn) && (Dn = null), ea !== null && $i(ea) && (ea = null), Br !== null && $i(Br) && (Br = null), _o.forEach(Do), Ln.forEach(Do);
  }
  function Aa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ht || (ht = !0, y.unstable_scheduleCallback(y.unstable_NormalPriority, Cc)));
  }
  function Oo(n) {
    function r(c) {
      return Aa(c, n);
    }
    if (0 < hl.length) {
      Aa(hl[0], n);
      for (var o = 1; o < hl.length; o++) {
        var u = hl[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Dn !== null && Aa(Dn, n), ea !== null && Aa(ea, n), Br !== null && Aa(Br, n), _o.forEach(r), Ln.forEach(r), o = 0; o < Zt.length; o++)
      u = Zt[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Zt.length && (o = Zt[0], o.blockedOn === null); )
      bc(o), o.blockedOn === null && Zt.shift();
  }
  var ko = _e.ReactCurrentBatchConfig, Ua = !0;
  function pu(n, r, o, u) {
    var c = $t, v = ko.transition;
    ko.transition = null;
    try {
      $t = 1, Mo(n, r, o, u);
    } finally {
      $t = c, ko.transition = v;
    }
  }
  function zo(n, r, o, u) {
    var c = $t, v = ko.transition;
    ko.transition = null;
    try {
      $t = 4, Mo(n, r, o, u);
    } finally {
      $t = c, ko.transition = v;
    }
  }
  function Mo(n, r, o, u) {
    if (Ua) {
      var c = vu(n, r, o, u);
      if (c === null)
        zc(n, r, u, ml, o), ta(n, u);
      else if (Ti(c, n, r, o, u))
        u.stopPropagation();
      else if (ta(n, u), r & 4 && -1 < Ec.indexOf(n)) {
        for (; c !== null; ) {
          var v = Os(c);
          if (v !== null && vl(v), v = vu(n, r, o, u), v === null && zc(n, r, u, ml, o), v === c)
            break;
          c = v;
        }
        c !== null && u.stopPropagation();
      } else
        zc(n, r, u, null, o);
    }
  }
  var ml = null;
  function vu(n, r, o, u) {
    if (ml = null, n = tn(u), n = ja(n), n !== null)
      if (r = gt(n), r === null)
        n = null;
      else if (o = r.tag, o === 13) {
        if (n = Nt(r), n !== null)
          return n;
        n = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return ml = n, null;
  }
  function hs(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ud()) {
          case ri:
            return 1;
          case Tt:
            return 4;
          case wi:
          case bo:
            return 16;
          case iu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ii = null, S = null, D = null;
  function Q() {
    if (D)
      return D;
    var n, r = S, o = r.length, u, c = "value" in ii ? ii.value : ii.textContent, v = c.length;
    for (n = 0; n < o && r[n] === c[n]; n++)
      ;
    var b = o - n;
    for (u = 1; u <= b && r[o - u] === c[v - u]; u++)
      ;
    return D = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function ne(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Ee() {
    return !0;
  }
  function at() {
    return !1;
  }
  function ze(n) {
    function r(o, u, c, v, b) {
      this._reactName = o, this._targetInst = c, this.type = u, this.nativeEvent = v, this.target = b, this.currentTarget = null;
      for (var _ in n)
        n.hasOwnProperty(_) && (o = n[_], this[_] = o ? o(v) : v[_]);
      return this.isDefaultPrevented = (v.defaultPrevented != null ? v.defaultPrevented : v.returnValue === !1) ? Ee : at, this.isPropagationStopped = at, this;
    }
    return w(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Ee);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Ee);
    }, persist: function() {
    }, isPersistent: Ee }), r;
  }
  var nt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, xt = ze(nt), Bt = w({}, nt, { view: 0, detail: 0 }), sn = ze(Bt), nn, cn, yn, Lt = w({}, Bt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: vd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== yn && (yn && n.type === "mousemove" ? (nn = n.screenX - yn.screenX, cn = n.screenY - yn.screenY) : cn = nn = 0, yn = n), nn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : cn;
  } }), Wi = ze(Lt), hu = w({}, Lt, { dataTransfer: 0 }), ms = ze(hu), cd = w({}, Bt, { relatedTarget: 0 }), oi = ze(cd), ys = w({}, nt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), gs = ze(ys), fd = w({}, nt, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Ry = ze(fd), Ty = w({}, nt, { data: 0 }), dd = ze(Ty), pd = {
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
  }, Rv = {
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
  }, Tv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function xv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Tv[n]) ? !!r[n] : !1;
  }
  function vd() {
    return xv;
  }
  var Ii = w({}, Bt, { key: function(n) {
    if (n.key) {
      var r = pd[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = ne(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Rv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: vd, charCode: function(n) {
    return n.type === "keypress" ? ne(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? ne(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), xy = ze(Ii), hd = w({}, Lt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), wc = ze(hd), md = w({}, Bt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: vd }), _y = ze(md), Rc = w({}, nt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), _v = ze(Rc), na = w({}, Lt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yi = ze(na), $n = [9, 13, 27, 32], li = A && "CompositionEvent" in window, yl = null;
  A && "documentMode" in document && (yl = document.documentMode);
  var Tc = A && "TextEvent" in window && !yl, Dv = A && (!li || yl && 8 < yl && 11 >= yl), mu = " ", Ov = !1;
  function kv(n, r) {
    switch (n) {
      case "keyup":
        return $n.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function xc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var yu = !1;
  function Dy(n, r) {
    switch (n) {
      case "compositionend":
        return xc(r);
      case "keypress":
        return r.which !== 32 ? null : (Ov = !0, mu);
      case "textInput":
        return n = r.data, n === mu && Ov ? null : n;
      default:
        return null;
    }
  }
  function Oy(n, r) {
    if (yu)
      return n === "compositionend" || !li && kv(n, r) ? (n = Q(), D = S = ii = null, yu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Dv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var zv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Mv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!zv[n.type] : r === "textarea";
  }
  function Lv(n, r, o, u) {
    Na(u), r = xs(r, "onChange"), 0 < r.length && (o = new xt("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var Ss = null, gu = null;
  function Su(n) {
    kc(n, 0);
  }
  function Eu(n) {
    var r = Cu(n);
    if (be(r))
      return n;
  }
  function Nv(n, r) {
    if (n === "change")
      return r;
  }
  var yd = !1;
  if (A) {
    var gd;
    if (A) {
      var Sd = "oninput" in document;
      if (!Sd) {
        var Av = document.createElement("div");
        Av.setAttribute("oninput", "return;"), Sd = typeof Av.oninput == "function";
      }
      gd = Sd;
    } else
      gd = !1;
    yd = gd && (!document.documentMode || 9 < document.documentMode);
  }
  function Uv() {
    Ss && (Ss.detachEvent("onpropertychange", Pv), gu = Ss = null);
  }
  function Pv(n) {
    if (n.propertyName === "value" && Eu(gu)) {
      var r = [];
      Lv(r, gu, n, tn(n)), Eo(Su, r);
    }
  }
  function ky(n, r, o) {
    n === "focusin" ? (Uv(), Ss = r, gu = o, Ss.attachEvent("onpropertychange", Pv)) : n === "focusout" && Uv();
  }
  function zy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Eu(gu);
  }
  function My(n, r) {
    if (n === "click")
      return Eu(r);
  }
  function jv(n, r) {
    if (n === "input" || n === "change")
      return Eu(r);
  }
  function Ly(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Pa = typeof Object.is == "function" ? Object.is : Ly;
  function Es(n, r) {
    if (Pa(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), u = Object.keys(r);
    if (o.length !== u.length)
      return !1;
    for (u = 0; u < o.length; u++) {
      var c = o[u];
      if (!F.call(r, c) || !Pa(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function Fv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Hv(n, r) {
    var o = Fv(n);
    n = 0;
    for (var u; o; ) {
      if (o.nodeType === 3) {
        if (u = n + o.textContent.length, n <= r && u >= r)
          return { node: o, offset: r - n };
        n = u;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Fv(o);
    }
  }
  function Bv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Bv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function _c() {
    for (var n = window, r = Ct(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = r.contentWindow;
      else
        break;
      r = Ct(n.document);
    }
    return r;
  }
  function Qi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Dc(n) {
    var r = _c(), o = n.focusedElem, u = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Bv(o.ownerDocument.documentElement, o)) {
      if (u !== null && Qi(o)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = o.textContent.length, v = Math.min(u.start, c);
          u = u.end === void 0 ? v : Math.min(u.end, c), !n.extend && v > u && (c = u, u = v, v = c), c = Hv(o, v);
          var b = Hv(
            o,
            u
          );
          c && b && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== b.node || n.focusOffset !== b.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), v > u ? (n.addRange(r), n.extend(b.node, b.offset)) : (r.setEnd(b.node, b.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Vv = A && "documentMode" in document && 11 >= document.documentMode, ui = null, Ed = null, bs = null, bd = !1;
  function $v(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    bd || ui == null || ui !== Ct(u) || (u = ui, "selectionStart" in u && Qi(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), bs && Es(bs, u) || (bs = u, u = xs(Ed, "onSelect"), 0 < u.length && (r = new xt("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = ui)));
  }
  function Oc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var gl = { animationend: Oc("Animation", "AnimationEnd"), animationiteration: Oc("Animation", "AnimationIteration"), animationstart: Oc("Animation", "AnimationStart"), transitionend: Oc("Transition", "TransitionEnd") }, Cd = {}, wd = {};
  A && (wd = document.createElement("div").style, "AnimationEvent" in window || (delete gl.animationend.animation, delete gl.animationiteration.animation, delete gl.animationstart.animation), "TransitionEvent" in window || delete gl.transitionend.transition);
  function nr(n) {
    if (Cd[n])
      return Cd[n];
    if (!gl[n])
      return n;
    var r = gl[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in wd)
        return Cd[n] = r[o];
    return n;
  }
  var Rd = nr("animationend"), Wv = nr("animationiteration"), Iv = nr("animationstart"), Yv = nr("transitionend"), Qv = /* @__PURE__ */ new Map(), Gv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Gi(n, r) {
    Qv.set(n, r), x(r, [n]);
  }
  for (var Cs = 0; Cs < Gv.length; Cs++) {
    var Sl = Gv[Cs], Ny = Sl.toLowerCase(), ws = Sl[0].toUpperCase() + Sl.slice(1);
    Gi(Ny, "on" + ws);
  }
  Gi(Rd, "onAnimationEnd"), Gi(Wv, "onAnimationIteration"), Gi(Iv, "onAnimationStart"), Gi("dblclick", "onDoubleClick"), Gi("focusin", "onFocus"), Gi("focusout", "onBlur"), Gi(Yv, "onTransitionEnd"), E("onMouseEnter", ["mouseout", "mouseover"]), E("onMouseLeave", ["mouseout", "mouseover"]), E("onPointerEnter", ["pointerout", "pointerover"]), E("onPointerLeave", ["pointerout", "pointerover"]), x("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), x("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), x("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), x("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ay = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rs));
  function qv(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, Pe(u, r, void 0, n), n.currentTarget = null;
  }
  function kc(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], c = u.event;
      u = u.listeners;
      e: {
        var v = void 0;
        if (r)
          for (var b = u.length - 1; 0 <= b; b--) {
            var _ = u[b], z = _.instance, q = _.currentTarget;
            if (_ = _.listener, z !== v && c.isPropagationStopped())
              break e;
            qv(c, _, q), v = z;
          }
        else
          for (b = 0; b < u.length; b++) {
            if (_ = u[b], z = _.instance, q = _.currentTarget, _ = _.listener, z !== v && c.isPropagationStopped())
              break e;
            qv(c, _, q), v = z;
          }
      }
    }
    if (bi)
      throw n = O, bi = !1, O = null, n;
  }
  function fn(n, r) {
    var o = r[zd];
    o === void 0 && (o = r[zd] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || (Xv(r, n, 2, !1), o.add(u));
  }
  function Lo(n, r, o) {
    var u = 0;
    r && (u |= 4), Xv(o, n, u, r);
  }
  var qi = "_reactListening" + Math.random().toString(36).slice(2);
  function bu(n) {
    if (!n[qi]) {
      n[qi] = !0, h.forEach(function(o) {
        o !== "selectionchange" && (Ay.has(o) || Lo(o, !1, n), Lo(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[qi] || (r[qi] = !0, Lo("selectionchange", !1, r));
    }
  }
  function Xv(n, r, o, u) {
    switch (hs(r)) {
      case 1:
        var c = pu;
        break;
      case 4:
        c = zo;
        break;
      default:
        c = Mo;
    }
    o = c.bind(null, r, o, n), c = void 0, !Si || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: c }) : n.addEventListener(r, o, !0) : c !== void 0 ? n.addEventListener(r, o, { passive: c }) : n.addEventListener(r, o, !1);
  }
  function zc(n, r, o, u, c) {
    var v = u;
    if (!(r & 1) && !(r & 2) && u !== null)
      e:
        for (; ; ) {
          if (u === null)
            return;
          var b = u.tag;
          if (b === 3 || b === 4) {
            var _ = u.stateNode.containerInfo;
            if (_ === c || _.nodeType === 8 && _.parentNode === c)
              break;
            if (b === 4)
              for (b = u.return; b !== null; ) {
                var z = b.tag;
                if ((z === 3 || z === 4) && (z = b.stateNode.containerInfo, z === c || z.nodeType === 8 && z.parentNode === c))
                  return;
                b = b.return;
              }
            for (; _ !== null; ) {
              if (b = ja(_), b === null)
                return;
              if (z = b.tag, z === 5 || z === 6) {
                u = v = b;
                continue e;
              }
              _ = _.parentNode;
            }
          }
          u = u.return;
        }
    Eo(function() {
      var q = v, ve = tn(o), he = [];
      e: {
        var pe = Qv.get(n);
        if (pe !== void 0) {
          var Ae = xt, $e = n;
          switch (n) {
            case "keypress":
              if (ne(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              Ae = xy;
              break;
            case "focusin":
              $e = "focus", Ae = oi;
              break;
            case "focusout":
              $e = "blur", Ae = oi;
              break;
            case "beforeblur":
            case "afterblur":
              Ae = oi;
              break;
            case "click":
              if (o.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Ae = Wi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ae = ms;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ae = _y;
              break;
            case Rd:
            case Wv:
            case Iv:
              Ae = gs;
              break;
            case Yv:
              Ae = _v;
              break;
            case "scroll":
              Ae = sn;
              break;
            case "wheel":
              Ae = Yi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ae = Ry;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ae = wc;
          }
          var Ye = (r & 4) !== 0, Hn = !Ye && n === "scroll", H = Ye ? pe !== null ? pe + "Capture" : null : pe;
          Ye = [];
          for (var L = q, I; L !== null; ) {
            I = L;
            var Ce = I.stateNode;
            if (I.tag === 5 && Ce !== null && (I = Ce, H !== null && (Ce = Ea(L, H), Ce != null && Ye.push(Ts(L, Ce, I)))), Hn)
              break;
            L = L.return;
          }
          0 < Ye.length && (pe = new Ae(pe, $e, null, o, ve), he.push({ event: pe, listeners: Ye }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (pe = n === "mouseover" || n === "pointerover", Ae = n === "mouseout" || n === "pointerout", pe && o !== _r && ($e = o.relatedTarget || o.fromElement) && (ja($e) || $e[Xi]))
            break e;
          if ((Ae || pe) && (pe = ve.window === ve ? ve : (pe = ve.ownerDocument) ? pe.defaultView || pe.parentWindow : window, Ae ? ($e = o.relatedTarget || o.toElement, Ae = q, $e = $e ? ja($e) : null, $e !== null && (Hn = gt($e), $e !== Hn || $e.tag !== 5 && $e.tag !== 6) && ($e = null)) : (Ae = null, $e = q), Ae !== $e)) {
            if (Ye = Wi, Ce = "onMouseLeave", H = "onMouseEnter", L = "mouse", (n === "pointerout" || n === "pointerover") && (Ye = wc, Ce = "onPointerLeave", H = "onPointerEnter", L = "pointer"), Hn = Ae == null ? pe : Cu(Ae), I = $e == null ? pe : Cu($e), pe = new Ye(Ce, L + "leave", Ae, o, ve), pe.target = Hn, pe.relatedTarget = I, Ce = null, ja(ve) === q && (Ye = new Ye(H, L + "enter", $e, o, ve), Ye.target = I, Ye.relatedTarget = Hn, Ce = Ye), Hn = Ce, Ae && $e)
              t: {
                for (Ye = Ae, H = $e, L = 0, I = Ye; I; I = El(I))
                  L++;
                for (I = 0, Ce = H; Ce; Ce = El(Ce))
                  I++;
                for (; 0 < L - I; )
                  Ye = El(Ye), L--;
                for (; 0 < I - L; )
                  H = El(H), I--;
                for (; L--; ) {
                  if (Ye === H || H !== null && Ye === H.alternate)
                    break t;
                  Ye = El(Ye), H = El(H);
                }
                Ye = null;
              }
            else
              Ye = null;
            Ae !== null && Td(he, pe, Ae, Ye, !1), $e !== null && Hn !== null && Td(he, Hn, $e, Ye, !0);
          }
        }
        e: {
          if (pe = q ? Cu(q) : window, Ae = pe.nodeName && pe.nodeName.toLowerCase(), Ae === "select" || Ae === "input" && pe.type === "file")
            var Ge = Nv;
          else if (Mv(pe))
            if (yd)
              Ge = jv;
            else {
              Ge = zy;
              var We = ky;
            }
          else
            (Ae = pe.nodeName) && Ae.toLowerCase() === "input" && (pe.type === "checkbox" || pe.type === "radio") && (Ge = My);
          if (Ge && (Ge = Ge(n, q))) {
            Lv(he, Ge, o, ve);
            break e;
          }
          We && We(n, pe, q), n === "focusout" && (We = pe._wrapperState) && We.controlled && pe.type === "number" && sr(pe, "number", pe.value);
        }
        switch (We = q ? Cu(q) : window, n) {
          case "focusin":
            (Mv(We) || We.contentEditable === "true") && (ui = We, Ed = q, bs = null);
            break;
          case "focusout":
            bs = Ed = ui = null;
            break;
          case "mousedown":
            bd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            bd = !1, $v(he, o, ve);
            break;
          case "selectionchange":
            if (Vv)
              break;
          case "keydown":
          case "keyup":
            $v(he, o, ve);
        }
        var Ze;
        if (li)
          e: {
            switch (n) {
              case "compositionstart":
                var dt = "onCompositionStart";
                break e;
              case "compositionend":
                dt = "onCompositionEnd";
                break e;
              case "compositionupdate":
                dt = "onCompositionUpdate";
                break e;
            }
            dt = void 0;
          }
        else
          yu ? kv(n, o) && (dt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (dt = "onCompositionStart");
        dt && (Dv && o.locale !== "ko" && (yu || dt !== "onCompositionStart" ? dt === "onCompositionEnd" && yu && (Ze = Q()) : (ii = ve, S = "value" in ii ? ii.value : ii.textContent, yu = !0)), We = xs(q, dt), 0 < We.length && (dt = new dd(dt, n, null, o, ve), he.push({ event: dt, listeners: We }), Ze ? dt.data = Ze : (Ze = xc(o), Ze !== null && (dt.data = Ze)))), (Ze = Tc ? Dy(n, o) : Oy(n, o)) && (q = xs(q, "onBeforeInput"), 0 < q.length && (ve = new dd("onBeforeInput", "beforeinput", null, o, ve), he.push({ event: ve, listeners: q }), ve.data = Ze));
      }
      kc(he, r);
    });
  }
  function Ts(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function xs(n, r) {
    for (var o = r + "Capture", u = []; n !== null; ) {
      var c = n, v = c.stateNode;
      c.tag === 5 && v !== null && (c = v, v = Ea(n, o), v != null && u.unshift(Ts(n, v, c)), v = Ea(n, r), v != null && u.push(Ts(n, v, c))), n = n.return;
    }
    return u;
  }
  function El(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Td(n, r, o, u, c) {
    for (var v = r._reactName, b = []; o !== null && o !== u; ) {
      var _ = o, z = _.alternate, q = _.stateNode;
      if (z !== null && z === u)
        break;
      _.tag === 5 && q !== null && (_ = q, c ? (z = Ea(o, v), z != null && b.unshift(Ts(o, z, _))) : c || (z = Ea(o, v), z != null && b.push(Ts(o, z, _)))), o = o.return;
    }
    b.length !== 0 && n.push({ event: r, listeners: b });
  }
  var xd = /\r\n?/g, Uy = /\u0000|\uFFFD/g;
  function _d(n) {
    return (typeof n == "string" ? n : "" + n).replace(xd, `
`).replace(Uy, "");
  }
  function Mc(n, r, o) {
    if (r = _d(r), _d(n) !== r && o)
      throw Error(p(425));
  }
  function Lc() {
  }
  var Dd = null, bl = null;
  function _s(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Cl = typeof setTimeout == "function" ? setTimeout : void 0, Kv = typeof clearTimeout == "function" ? clearTimeout : void 0, Od = typeof Promise == "function" ? Promise : void 0, kd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Od < "u" ? function(n) {
    return Od.resolve(null).then(n).catch(Py);
  } : Cl;
  function Py(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function No(n, r) {
    var o = r, u = 0;
    do {
      var c = o.nextSibling;
      if (n.removeChild(o), c && c.nodeType === 8)
        if (o = c.data, o === "/$") {
          if (u === 0) {
            n.removeChild(c), Oo(r);
            return;
          }
          u--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || u++;
      o = c;
    } while (o);
    Oo(r);
  }
  function si(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function Ds(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Ao = Math.random().toString(36).slice(2), xi = "__reactFiber$" + Ao, wl = "__reactProps$" + Ao, Xi = "__reactContainer$" + Ao, zd = "__reactEvents$" + Ao, jy = "__reactListeners$" + Ao, Md = "__reactHandles$" + Ao;
  function ja(n) {
    var r = n[xi];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Xi] || o[xi]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = Ds(n); n !== null; ) {
            if (o = n[xi])
              return o;
            n = Ds(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function Os(n) {
    return n = n[xi] || n[Xi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Cu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(p(33));
  }
  function Je(n) {
    return n[wl] || null;
  }
  var Uo = [], gn = -1;
  function Et(n) {
    return { current: n };
  }
  function Gt(n) {
    0 > gn || (n.current = Uo[gn], Uo[gn] = null, gn--);
  }
  function Jt(n, r) {
    gn++, Uo[gn] = n.current, n.current = r;
  }
  var _i = {}, ft = Et(_i), Nn = Et(!1), ra = _i;
  function Fa(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return _i;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r)
      return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, v;
    for (v in o)
      c[v] = r[v];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Rn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ha() {
    Gt(Nn), Gt(ft);
  }
  function Po(n, r, o) {
    if (ft.current !== _i)
      throw Error(p(168));
    Jt(ft, r), Jt(Nn, o);
  }
  function ks(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function")
      return o;
    u = u.getChildContext();
    for (var c in u)
      if (!(c in r))
        throw Error(p(108, ue(n) || "Unknown", c));
    return w({}, o, u);
  }
  function Nc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || _i, ra = ft.current, Jt(ft, n), Jt(Nn, Nn.current), !0;
  }
  function Zv(n, r, o) {
    var u = n.stateNode;
    if (!u)
      throw Error(p(169));
    o ? (n = ks(n, r, ra), u.__reactInternalMemoizedMergedChildContext = n, Gt(Nn), Gt(ft), Jt(ft, n)) : Gt(Nn), Jt(Nn, o);
  }
  var wa = null, rr = !1, zs = !1;
  function Ld(n) {
    wa === null ? wa = [n] : wa.push(n);
  }
  function Nd(n) {
    rr = !0, Ld(n);
  }
  function aa() {
    if (!zs && wa !== null) {
      zs = !0;
      var n = 0, r = $t;
      try {
        var o = wa;
        for ($t = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(!0);
          while (u !== null);
        }
        wa = null, rr = !1;
      } catch (c) {
        throw wa !== null && (wa = wa.slice(n + 1)), mn(ri, aa), c;
      } finally {
        $t = r, zs = !1;
      }
    }
    return null;
  }
  var jo = [], ia = 0, Rl = null, wu = 0, oa = [], Dr = 0, Ba = null, dr = 1, Ki = "";
  function Ra(n, r) {
    jo[ia++] = wu, jo[ia++] = Rl, Rl = n, wu = r;
  }
  function Ad(n, r, o) {
    oa[Dr++] = dr, oa[Dr++] = Ki, oa[Dr++] = Ba, Ba = n;
    var u = dr;
    n = Ki;
    var c = 32 - Fr(u) - 1;
    u &= ~(1 << c), o += 1;
    var v = 32 - Fr(r) + c;
    if (30 < v) {
      var b = c - c % 5;
      v = (u & (1 << b) - 1).toString(32), u >>= b, c -= b, dr = 1 << 32 - Fr(r) + c | o << c | u, Ki = v + n;
    } else
      dr = 1 << v | o << c | u, Ki = n;
  }
  function Ac(n) {
    n.return !== null && (Ra(n, 1), Ad(n, 1, 0));
  }
  function Ud(n) {
    for (; n === Rl; )
      Rl = jo[--ia], jo[ia] = null, wu = jo[--ia], jo[ia] = null;
    for (; n === Ba; )
      Ba = oa[--Dr], oa[Dr] = null, Ki = oa[--Dr], oa[Dr] = null, dr = oa[--Dr], oa[Dr] = null;
  }
  var Ta = null, la = null, Sn = !1, Va = null;
  function Pd(n, r) {
    var o = Ga(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function Jv(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Ta = n, la = si(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Ta = n, la = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = Ba !== null ? { id: dr, overflow: Ki } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = Ga(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, Ta = n, la = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Uc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Pc(n) {
    if (Sn) {
      var r = la;
      if (r) {
        var o = r;
        if (!Jv(n, r)) {
          if (Uc(n))
            throw Error(p(418));
          r = si(o.nextSibling);
          var u = Ta;
          r && Jv(n, r) ? Pd(u, o) : (n.flags = n.flags & -4097 | 2, Sn = !1, Ta = n);
        }
      } else {
        if (Uc(n))
          throw Error(p(418));
        n.flags = n.flags & -4097 | 2, Sn = !1, Ta = n;
      }
    }
  }
  function eh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Ta = n;
  }
  function jc(n) {
    if (n !== Ta)
      return !1;
    if (!Sn)
      return eh(n), Sn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !_s(n.type, n.memoizedProps)), r && (r = la)) {
      if (Uc(n))
        throw th(), Error(p(418));
      for (; r; )
        Pd(n, r), r = si(r.nextSibling);
    }
    if (eh(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(p(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                la = si(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        la = null;
      }
    } else
      la = Ta ? si(n.stateNode.nextSibling) : null;
    return !0;
  }
  function th() {
    for (var n = la; n; )
      n = si(n.nextSibling);
  }
  function On() {
    la = Ta = null, Sn = !1;
  }
  function jd(n) {
    Va === null ? Va = [n] : Va.push(n);
  }
  var Fc = _e.ReactCurrentBatchConfig;
  function xa(n, r) {
    if (n && n.defaultProps) {
      r = w({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  var Di = Et(null), Hc = null, Fo = null, Fd = null;
  function Hd() {
    Fd = Fo = Hc = null;
  }
  function Ho(n) {
    var r = Di.current;
    Gt(Di), n._currentValue = r;
  }
  function ar(n, r, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === o)
        break;
      n = n.return;
    }
  }
  function Oe(n, r) {
    Hc = n, Fd = Fo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Wn = !0), n.firstContext = null);
  }
  function Fn(n) {
    var r = n._currentValue;
    if (Fd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Fo === null) {
        if (Hc === null)
          throw Error(p(308));
        Fo = n, Hc.dependencies = { lanes: 0, firstContext: n };
      } else
        Fo = Fo.next = n;
    return r;
  }
  var pr = null;
  function Bd(n) {
    pr === null ? pr = [n] : pr.push(n);
  }
  function nh(n, r, o, u) {
    var c = r.interleaved;
    return c === null ? (o.next = o, Bd(r)) : (o.next = c.next, c.next = o), r.interleaved = o, Zi(n, u);
  }
  function Zi(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Bo = !1;
  function Vd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function qn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ji(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Vo(n, r, o) {
    var u = n.updateQueue;
    if (u === null)
      return null;
    if (u = u.shared, Ot & 2) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, Zi(n, o);
    }
    return c = u.interleaved, c === null ? (r.next = r, Bd(u)) : (r.next = c.next, c.next = r), u.interleaved = r, Zi(n, o);
  }
  function Bc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Ri(n, o);
    }
  }
  function $d(n, r) {
    var o = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, o === u)) {
      var c = null, v = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var b = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          v === null ? c = v = b : v = v.next = b, o = o.next;
        } while (o !== null);
        v === null ? c = v = r : v = v.next = r;
      } else
        c = v = r;
      o = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: v, shared: u.shared, effects: u.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function $o(n, r, o, u) {
    var c = n.updateQueue;
    Bo = !1;
    var v = c.firstBaseUpdate, b = c.lastBaseUpdate, _ = c.shared.pending;
    if (_ !== null) {
      c.shared.pending = null;
      var z = _, q = z.next;
      z.next = null, b === null ? v = q : b.next = q, b = z;
      var ve = n.alternate;
      ve !== null && (ve = ve.updateQueue, _ = ve.lastBaseUpdate, _ !== b && (_ === null ? ve.firstBaseUpdate = q : _.next = q, ve.lastBaseUpdate = z));
    }
    if (v !== null) {
      var he = c.baseState;
      b = 0, ve = q = z = null, _ = v;
      do {
        var pe = _.lane, Ae = _.eventTime;
        if ((u & pe) === pe) {
          ve !== null && (ve = ve.next = {
            eventTime: Ae,
            lane: 0,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null
          });
          e: {
            var $e = n, Ye = _;
            switch (pe = r, Ae = o, Ye.tag) {
              case 1:
                if ($e = Ye.payload, typeof $e == "function") {
                  he = $e.call(Ae, he, pe);
                  break e;
                }
                he = $e;
                break e;
              case 3:
                $e.flags = $e.flags & -65537 | 128;
              case 0:
                if ($e = Ye.payload, pe = typeof $e == "function" ? $e.call(Ae, he, pe) : $e, pe == null)
                  break e;
                he = w({}, he, pe);
                break e;
              case 2:
                Bo = !0;
            }
          }
          _.callback !== null && _.lane !== 0 && (n.flags |= 64, pe = c.effects, pe === null ? c.effects = [_] : pe.push(_));
        } else
          Ae = { eventTime: Ae, lane: pe, tag: _.tag, payload: _.payload, callback: _.callback, next: null }, ve === null ? (q = ve = Ae, z = he) : ve = ve.next = Ae, b |= pe;
        if (_ = _.next, _ === null) {
          if (_ = c.shared.pending, _ === null)
            break;
          pe = _, _ = pe.next, pe.next = null, c.lastBaseUpdate = pe, c.shared.pending = null;
        }
      } while (!0);
      if (ve === null && (z = he), c.baseState = z, c.firstBaseUpdate = q, c.lastBaseUpdate = ve, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          b |= c.lane, c = c.next;
        while (c !== r);
      } else
        v === null && (c.shared.lanes = 0);
      ro |= b, n.lanes = b, n.memoizedState = he;
    }
  }
  function Tl(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var u = n[r], c = u.callback;
        if (c !== null) {
          if (u.callback = null, u = o, typeof c != "function")
            throw Error(p(191, c));
          c.call(u);
        }
      }
  }
  var rh = new d.Component().refs;
  function Wd(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : w({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var Vc = { isMounted: function(n) {
    return (n = n._reactInternals) ? gt(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var u = Mr(), c = In(n), v = Ji(u, c);
    v.payload = r, o != null && (v.callback = o), r = Vo(n, v, c), r !== null && (Lr(r, n, c, u), Bc(r, n, c));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var u = Mr(), c = In(n), v = Ji(u, c);
    v.tag = 1, v.payload = r, o != null && (v.callback = o), r = Vo(n, v, c), r !== null && (Lr(r, n, c, u), Bc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = Mr(), u = In(n), c = Ji(o, u);
    c.tag = 2, r != null && (c.callback = r), r = Vo(n, c, u), r !== null && (Lr(r, n, u, o), Bc(r, n, u));
  } };
  function ah(n, r, o, u, c, v, b) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, v, b) : r.prototype && r.prototype.isPureReactComponent ? !Es(o, u) || !Es(c, v) : !0;
  }
  function ih(n, r, o) {
    var u = !1, c = _i, v = r.contextType;
    return typeof v == "object" && v !== null ? v = Fn(v) : (c = Rn(r) ? ra : ft.current, u = r.contextTypes, v = (u = u != null) ? Fa(n, c) : _i), r = new r(o, v), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Vc, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = v), r;
  }
  function oh(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && Vc.enqueueReplaceState(r, r.state, null);
  }
  function $c(n, r, o, u) {
    var c = n.stateNode;
    c.props = o, c.state = n.memoizedState, c.refs = rh, Vd(n);
    var v = r.contextType;
    typeof v == "object" && v !== null ? c.context = Fn(v) : (v = Rn(r) ? ra : ft.current, c.context = Fa(n, v)), c.state = n.memoizedState, v = r.getDerivedStateFromProps, typeof v == "function" && (Wd(n, r, v, o), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Vc.enqueueReplaceState(c, c.state, null), $o(n, o, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ru(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(p(309));
          var u = o.stateNode;
        }
        if (!u)
          throw Error(p(147, n));
        var c = u, v = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === v ? r.ref : (r = function(b) {
          var _ = c.refs;
          _ === rh && (_ = c.refs = {}), b === null ? delete _[v] : _[v] = b;
        }, r._stringRef = v, r);
      }
      if (typeof n != "string")
        throw Error(p(284));
      if (!o._owner)
        throw Error(p(290, n));
    }
    return n;
  }
  function Wc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(p(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function lh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function uh(n) {
    function r(H, L) {
      if (n) {
        var I = H.deletions;
        I === null ? (H.deletions = [L], H.flags |= 16) : I.push(L);
      }
    }
    function o(H, L) {
      if (!n)
        return null;
      for (; L !== null; )
        r(H, L), L = L.sibling;
      return null;
    }
    function u(H, L) {
      for (H = /* @__PURE__ */ new Map(); L !== null; )
        L.key !== null ? H.set(L.key, L) : H.set(L.index, L), L = L.sibling;
      return H;
    }
    function c(H, L) {
      return H = Ko(H, L), H.index = 0, H.sibling = null, H;
    }
    function v(H, L, I) {
      return H.index = I, n ? (I = H.alternate, I !== null ? (I = I.index, I < L ? (H.flags |= 2, L) : I) : (H.flags |= 2, L)) : (H.flags |= 1048576, L);
    }
    function b(H) {
      return n && H.alternate === null && (H.flags |= 2), H;
    }
    function _(H, L, I, Ce) {
      return L === null || L.tag !== 6 ? (L = Xs(I, H.mode, Ce), L.return = H, L) : (L = c(L, I), L.return = H, L);
    }
    function z(H, L, I, Ce) {
      var Ge = I.type;
      return Ge === He ? ve(H, L, I.props.children, Ce, I.key) : L !== null && (L.elementType === Ge || typeof Ge == "object" && Ge !== null && Ge.$$typeof === st && lh(Ge) === L.type) ? (Ce = c(L, I.props), Ce.ref = Ru(H, L, I), Ce.return = H, Ce) : (Ce = wf(I.type, I.key, I.props, null, H.mode, Ce), Ce.ref = Ru(H, L, I), Ce.return = H, Ce);
    }
    function q(H, L, I, Ce) {
      return L === null || L.tag !== 4 || L.stateNode.containerInfo !== I.containerInfo || L.stateNode.implementation !== I.implementation ? (L = Wl(I, H.mode, Ce), L.return = H, L) : (L = c(L, I.children || []), L.return = H, L);
    }
    function ve(H, L, I, Ce, Ge) {
      return L === null || L.tag !== 7 ? (L = $l(I, H.mode, Ce, Ge), L.return = H, L) : (L = c(L, I), L.return = H, L);
    }
    function he(H, L, I) {
      if (typeof L == "string" && L !== "" || typeof L == "number")
        return L = Xs("" + L, H.mode, I), L.return = H, L;
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case J:
            return I = wf(L.type, L.key, L.props, null, H.mode, I), I.ref = Ru(H, null, L), I.return = H, I;
          case Qe:
            return L = Wl(L, H.mode, I), L.return = H, L;
          case st:
            var Ce = L._init;
            return he(H, Ce(L._payload), I);
        }
        if (Pn(L) || Be(L))
          return L = $l(L, H.mode, I, null), L.return = H, L;
        Wc(H, L);
      }
      return null;
    }
    function pe(H, L, I, Ce) {
      var Ge = L !== null ? L.key : null;
      if (typeof I == "string" && I !== "" || typeof I == "number")
        return Ge !== null ? null : _(H, L, "" + I, Ce);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case J:
            return I.key === Ge ? z(H, L, I, Ce) : null;
          case Qe:
            return I.key === Ge ? q(H, L, I, Ce) : null;
          case st:
            return Ge = I._init, pe(
              H,
              L,
              Ge(I._payload),
              Ce
            );
        }
        if (Pn(I) || Be(I))
          return Ge !== null ? null : ve(H, L, I, Ce, null);
        Wc(H, I);
      }
      return null;
    }
    function Ae(H, L, I, Ce, Ge) {
      if (typeof Ce == "string" && Ce !== "" || typeof Ce == "number")
        return H = H.get(I) || null, _(L, H, "" + Ce, Ge);
      if (typeof Ce == "object" && Ce !== null) {
        switch (Ce.$$typeof) {
          case J:
            return H = H.get(Ce.key === null ? I : Ce.key) || null, z(L, H, Ce, Ge);
          case Qe:
            return H = H.get(Ce.key === null ? I : Ce.key) || null, q(L, H, Ce, Ge);
          case st:
            var We = Ce._init;
            return Ae(H, L, I, We(Ce._payload), Ge);
        }
        if (Pn(Ce) || Be(Ce))
          return H = H.get(I) || null, ve(L, H, Ce, Ge, null);
        Wc(L, Ce);
      }
      return null;
    }
    function $e(H, L, I, Ce) {
      for (var Ge = null, We = null, Ze = L, dt = L = 0, lr = null; Ze !== null && dt < I.length; dt++) {
        Ze.index > dt ? (lr = Ze, Ze = null) : lr = Ze.sibling;
        var Vt = pe(H, Ze, I[dt], Ce);
        if (Vt === null) {
          Ze === null && (Ze = lr);
          break;
        }
        n && Ze && Vt.alternate === null && r(H, Ze), L = v(Vt, L, dt), We === null ? Ge = Vt : We.sibling = Vt, We = Vt, Ze = lr;
      }
      if (dt === I.length)
        return o(H, Ze), Sn && Ra(H, dt), Ge;
      if (Ze === null) {
        for (; dt < I.length; dt++)
          Ze = he(H, I[dt], Ce), Ze !== null && (L = v(Ze, L, dt), We === null ? Ge = Ze : We.sibling = Ze, We = Ze);
        return Sn && Ra(H, dt), Ge;
      }
      for (Ze = u(H, Ze); dt < I.length; dt++)
        lr = Ae(Ze, H, dt, I[dt], Ce), lr !== null && (n && lr.alternate !== null && Ze.delete(lr.key === null ? dt : lr.key), L = v(lr, L, dt), We === null ? Ge = lr : We.sibling = lr, We = lr);
      return n && Ze.forEach(function(Zo) {
        return r(H, Zo);
      }), Sn && Ra(H, dt), Ge;
    }
    function Ye(H, L, I, Ce) {
      var Ge = Be(I);
      if (typeof Ge != "function")
        throw Error(p(150));
      if (I = Ge.call(I), I == null)
        throw Error(p(151));
      for (var We = Ge = null, Ze = L, dt = L = 0, lr = null, Vt = I.next(); Ze !== null && !Vt.done; dt++, Vt = I.next()) {
        Ze.index > dt ? (lr = Ze, Ze = null) : lr = Ze.sibling;
        var Zo = pe(H, Ze, Vt.value, Ce);
        if (Zo === null) {
          Ze === null && (Ze = lr);
          break;
        }
        n && Ze && Zo.alternate === null && r(H, Ze), L = v(Zo, L, dt), We === null ? Ge = Zo : We.sibling = Zo, We = Zo, Ze = lr;
      }
      if (Vt.done)
        return o(
          H,
          Ze
        ), Sn && Ra(H, dt), Ge;
      if (Ze === null) {
        for (; !Vt.done; dt++, Vt = I.next())
          Vt = he(H, Vt.value, Ce), Vt !== null && (L = v(Vt, L, dt), We === null ? Ge = Vt : We.sibling = Vt, We = Vt);
        return Sn && Ra(H, dt), Ge;
      }
      for (Ze = u(H, Ze); !Vt.done; dt++, Vt = I.next())
        Vt = Ae(Ze, H, dt, Vt.value, Ce), Vt !== null && (n && Vt.alternate !== null && Ze.delete(Vt.key === null ? dt : Vt.key), L = v(Vt, L, dt), We === null ? Ge = Vt : We.sibling = Vt, We = Vt);
      return n && Ze.forEach(function(ag) {
        return r(H, ag);
      }), Sn && Ra(H, dt), Ge;
    }
    function Hn(H, L, I, Ce) {
      if (typeof I == "object" && I !== null && I.type === He && I.key === null && (I = I.props.children), typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case J:
            e: {
              for (var Ge = I.key, We = L; We !== null; ) {
                if (We.key === Ge) {
                  if (Ge = I.type, Ge === He) {
                    if (We.tag === 7) {
                      o(H, We.sibling), L = c(We, I.props.children), L.return = H, H = L;
                      break e;
                    }
                  } else if (We.elementType === Ge || typeof Ge == "object" && Ge !== null && Ge.$$typeof === st && lh(Ge) === We.type) {
                    o(H, We.sibling), L = c(We, I.props), L.ref = Ru(H, We, I), L.return = H, H = L;
                    break e;
                  }
                  o(H, We);
                  break;
                } else
                  r(H, We);
                We = We.sibling;
              }
              I.type === He ? (L = $l(I.props.children, H.mode, Ce, I.key), L.return = H, H = L) : (Ce = wf(I.type, I.key, I.props, null, H.mode, Ce), Ce.ref = Ru(H, L, I), Ce.return = H, H = Ce);
            }
            return b(H);
          case Qe:
            e: {
              for (We = I.key; L !== null; ) {
                if (L.key === We)
                  if (L.tag === 4 && L.stateNode.containerInfo === I.containerInfo && L.stateNode.implementation === I.implementation) {
                    o(H, L.sibling), L = c(L, I.children || []), L.return = H, H = L;
                    break e;
                  } else {
                    o(H, L);
                    break;
                  }
                else
                  r(H, L);
                L = L.sibling;
              }
              L = Wl(I, H.mode, Ce), L.return = H, H = L;
            }
            return b(H);
          case st:
            return We = I._init, Hn(H, L, We(I._payload), Ce);
        }
        if (Pn(I))
          return $e(H, L, I, Ce);
        if (Be(I))
          return Ye(H, L, I, Ce);
        Wc(H, I);
      }
      return typeof I == "string" && I !== "" || typeof I == "number" ? (I = "" + I, L !== null && L.tag === 6 ? (o(H, L.sibling), L = c(L, I), L.return = H, H = L) : (o(H, L), L = Xs(I, H.mode, Ce), L.return = H, H = L), b(H)) : o(H, L);
    }
    return Hn;
  }
  var Tu = uh(!0), sh = uh(!1), Ms = {}, ci = Et(Ms), Ls = Et(Ms), xu = Et(Ms);
  function xl(n) {
    if (n === Ms)
      throw Error(p(174));
    return n;
  }
  function Id(n, r) {
    switch (Jt(xu, r), Jt(Ls, n), Jt(ci, Ms), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : xn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = xn(r, n);
    }
    Gt(ci), Jt(ci, r);
  }
  function Wo() {
    Gt(ci), Gt(Ls), Gt(xu);
  }
  function rt(n) {
    xl(xu.current);
    var r = xl(ci.current), o = xn(r, n.type);
    r !== o && (Jt(Ls, n), Jt(ci, o));
  }
  function _t(n) {
    Ls.current === n && (Gt(ci), Gt(Ls));
  }
  var it = Et(0);
  function kn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var $a = [];
  function Ic() {
    for (var n = 0; n < $a.length; n++)
      $a[n]._workInProgressVersionPrimary = null;
    $a.length = 0;
  }
  var Yc = _e.ReactCurrentDispatcher, Yd = _e.ReactCurrentBatchConfig, _l = 0, En = null, le = null, At = null, lt = !1, Oi = !1, _a = 0, Dl = 0;
  function bn() {
    throw Error(p(321));
  }
  function Ol(n, r) {
    if (r === null)
      return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!Pa(n[o], r[o]))
        return !1;
    return !0;
  }
  function Io(n, r, o, u, c, v) {
    if (_l = v, En = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Yc.current = n === null || n.memoizedState === null ? Hy : By, n = o(u, c), Oi) {
      v = 0;
      do {
        if (Oi = !1, _a = 0, 25 <= v)
          throw Error(p(301));
        v += 1, At = le = null, r.updateQueue = null, Yc.current = Gd, n = o(u, c);
      } while (Oi);
    }
    if (Yc.current = sf, r = le !== null && le.next !== null, _l = 0, At = le = En = null, lt = !1, r)
      throw Error(p(300));
    return n;
  }
  function kl() {
    var n = _a !== 0;
    return _a = 0, n;
  }
  function Wa() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return At === null ? En.memoizedState = At = n : At = At.next = n, At;
  }
  function ua() {
    if (le === null) {
      var n = En.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = le.next;
    var r = At === null ? En.memoizedState : At.next;
    if (r !== null)
      At = r, le = n;
    else {
      if (n === null)
        throw Error(p(310));
      le = n, n = { memoizedState: le.memoizedState, baseState: le.baseState, baseQueue: le.baseQueue, queue: le.queue, next: null }, At === null ? En.memoizedState = At = n : At = At.next = n;
    }
    return At;
  }
  function zl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ns(n) {
    var r = ua(), o = r.queue;
    if (o === null)
      throw Error(p(311));
    o.lastRenderedReducer = n;
    var u = le, c = u.baseQueue, v = o.pending;
    if (v !== null) {
      if (c !== null) {
        var b = c.next;
        c.next = v.next, v.next = b;
      }
      u.baseQueue = c = v, o.pending = null;
    }
    if (c !== null) {
      v = c.next, u = u.baseState;
      var _ = b = null, z = null, q = v;
      do {
        var ve = q.lane;
        if ((_l & ve) === ve)
          z !== null && (z = z.next = { lane: 0, action: q.action, hasEagerState: q.hasEagerState, eagerState: q.eagerState, next: null }), u = q.hasEagerState ? q.eagerState : n(u, q.action);
        else {
          var he = {
            lane: ve,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          };
          z === null ? (_ = z = he, b = u) : z = z.next = he, En.lanes |= ve, ro |= ve;
        }
        q = q.next;
      } while (q !== null && q !== v);
      z === null ? b = u : z.next = _, Pa(u, r.memoizedState) || (Wn = !0), r.memoizedState = u, r.baseState = b, r.baseQueue = z, o.lastRenderedState = u;
    }
    if (n = o.interleaved, n !== null) {
      c = n;
      do
        v = c.lane, En.lanes |= v, ro |= v, c = c.next;
      while (c !== n);
    } else
      c === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function As(n) {
    var r = ua(), o = r.queue;
    if (o === null)
      throw Error(p(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch, c = o.pending, v = r.memoizedState;
    if (c !== null) {
      o.pending = null;
      var b = c = c.next;
      do
        v = n(v, b.action), b = b.next;
      while (b !== c);
      Pa(v, r.memoizedState) || (Wn = !0), r.memoizedState = v, r.baseQueue === null && (r.baseState = v), o.lastRenderedState = v;
    }
    return [v, u];
  }
  function Qc() {
  }
  function Gc(n, r) {
    var o = En, u = ua(), c = r(), v = !Pa(u.memoizedState, c);
    if (v && (u.memoizedState = c, Wn = !0), u = u.queue, Us(Kc.bind(null, o, u, n), [n]), u.getSnapshot !== r || v || At !== null && At.memoizedState.tag & 1) {
      if (o.flags |= 2048, Ml(9, Xc.bind(null, o, u, c, r), void 0, null), zn === null)
        throw Error(p(349));
      _l & 30 || qc(o, r, c);
    }
    return c;
  }
  function qc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = En.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, En.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function Xc(n, r, o, u) {
    r.value = o, r.getSnapshot = u, Zc(r) && Jc(n);
  }
  function Kc(n, r, o) {
    return o(function() {
      Zc(r) && Jc(n);
    });
  }
  function Zc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !Pa(n, o);
    } catch {
      return !0;
    }
  }
  function Jc(n) {
    var r = Zi(n, 1);
    r !== null && Lr(r, n, 1, -1);
  }
  function ef(n) {
    var r = Wa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: zl, lastRenderedState: n }, r.queue = n, n = n.dispatch = uf.bind(null, En, n), [r.memoizedState, n];
  }
  function Ml(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = En.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, En.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function tf() {
    return ua().memoizedState;
  }
  function Ll(n, r, o, u) {
    var c = Wa();
    En.flags |= n, c.memoizedState = Ml(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function eo(n, r, o, u) {
    var c = ua();
    u = u === void 0 ? null : u;
    var v = void 0;
    if (le !== null) {
      var b = le.memoizedState;
      if (v = b.destroy, u !== null && Ol(u, b.deps)) {
        c.memoizedState = Ml(r, o, v, u);
        return;
      }
    }
    En.flags |= n, c.memoizedState = Ml(1 | r, o, v, u);
  }
  function nf(n, r) {
    return Ll(8390656, 8, n, r);
  }
  function Us(n, r) {
    return eo(2048, 8, n, r);
  }
  function rf(n, r) {
    return eo(4, 2, n, r);
  }
  function af(n, r) {
    return eo(4, 4, n, r);
  }
  function Qd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function _u(n, r, o) {
    return o = o != null ? o.concat([n]) : null, eo(4, 4, Qd.bind(null, r, n), o);
  }
  function of() {
  }
  function Du(n, r) {
    var o = ua();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && Ol(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function Yo(n, r) {
    var o = ua();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && Ol(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function sa(n, r, o) {
    return _l & 21 ? (Pa(o, r) || (o = lu(), En.lanes |= o, ro |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Wn = !0), n.memoizedState = o);
  }
  function Fy(n, r) {
    var o = $t;
    $t = o !== 0 && 4 > o ? o : 4, n(!0);
    var u = Yd.transition;
    Yd.transition = {};
    try {
      n(!1), r();
    } finally {
      $t = o, Yd.transition = u;
    }
  }
  function dn() {
    return ua().memoizedState;
  }
  function lf(n, r, o) {
    var u = In(n);
    if (o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, Ou(n))
      Ps(r, o);
    else if (o = nh(n, r, o, u), o !== null) {
      var c = Mr();
      Lr(o, n, u, c), ch(o, r, u);
    }
  }
  function uf(n, r, o) {
    var u = In(n), c = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (Ou(n))
      Ps(r, c);
    else {
      var v = n.alternate;
      if (n.lanes === 0 && (v === null || v.lanes === 0) && (v = r.lastRenderedReducer, v !== null))
        try {
          var b = r.lastRenderedState, _ = v(b, o);
          if (c.hasEagerState = !0, c.eagerState = _, Pa(_, b)) {
            var z = r.interleaved;
            z === null ? (c.next = c, Bd(r)) : (c.next = z.next, z.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      o = nh(n, r, c, u), o !== null && (c = Mr(), Lr(o, n, u, c), ch(o, r, u));
    }
  }
  function Ou(n) {
    var r = n.alternate;
    return n === En || r !== null && r === En;
  }
  function Ps(n, r) {
    Oi = lt = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function ch(n, r, o) {
    if (o & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Ri(n, o);
    }
  }
  var sf = { readContext: Fn, useCallback: bn, useContext: bn, useEffect: bn, useImperativeHandle: bn, useInsertionEffect: bn, useLayoutEffect: bn, useMemo: bn, useReducer: bn, useRef: bn, useState: bn, useDebugValue: bn, useDeferredValue: bn, useTransition: bn, useMutableSource: bn, useSyncExternalStore: bn, useId: bn, unstable_isNewReconciler: !1 }, Hy = { readContext: Fn, useCallback: function(n, r) {
    return Wa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Fn, useEffect: nf, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Ll(
      4194308,
      4,
      Qd.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return Ll(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Ll(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = Wa();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var u = Wa();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = lf.bind(null, En, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Wa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: ef, useDebugValue: of, useDeferredValue: function(n) {
    return Wa().memoizedState = n;
  }, useTransition: function() {
    var n = ef(!1), r = n[0];
    return n = Fy.bind(null, n[1]), Wa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = En, c = Wa();
    if (Sn) {
      if (o === void 0)
        throw Error(p(407));
      o = o();
    } else {
      if (o = r(), zn === null)
        throw Error(p(349));
      _l & 30 || qc(u, r, o);
    }
    c.memoizedState = o;
    var v = { value: o, getSnapshot: r };
    return c.queue = v, nf(Kc.bind(
      null,
      u,
      v,
      n
    ), [n]), u.flags |= 2048, Ml(9, Xc.bind(null, u, v, o, r), void 0, null), o;
  }, useId: function() {
    var n = Wa(), r = zn.identifierPrefix;
    if (Sn) {
      var o = Ki, u = dr;
      o = (u & ~(1 << 32 - Fr(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = _a++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = Dl++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, By = {
    readContext: Fn,
    useCallback: Du,
    useContext: Fn,
    useEffect: Us,
    useImperativeHandle: _u,
    useInsertionEffect: rf,
    useLayoutEffect: af,
    useMemo: Yo,
    useReducer: Ns,
    useRef: tf,
    useState: function() {
      return Ns(zl);
    },
    useDebugValue: of,
    useDeferredValue: function(n) {
      var r = ua();
      return sa(r, le.memoizedState, n);
    },
    useTransition: function() {
      var n = Ns(zl)[0], r = ua().memoizedState;
      return [n, r];
    },
    useMutableSource: Qc,
    useSyncExternalStore: Gc,
    useId: dn,
    unstable_isNewReconciler: !1
  }, Gd = { readContext: Fn, useCallback: Du, useContext: Fn, useEffect: Us, useImperativeHandle: _u, useInsertionEffect: rf, useLayoutEffect: af, useMemo: Yo, useReducer: As, useRef: tf, useState: function() {
    return As(zl);
  }, useDebugValue: of, useDeferredValue: function(n) {
    var r = ua();
    return le === null ? r.memoizedState = n : sa(r, le.memoizedState, n);
  }, useTransition: function() {
    var n = As(zl)[0], r = ua().memoizedState;
    return [n, r];
  }, useMutableSource: Qc, useSyncExternalStore: Gc, useId: dn, unstable_isNewReconciler: !1 };
  function ku(n, r) {
    try {
      var o = "", u = r;
      do
        o += te(u), u = u.return;
      while (u);
      var c = o;
    } catch (v) {
      c = `
Error generating stack: ` + v.message + `
` + v.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function js(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function cf(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var Vy = typeof WeakMap == "function" ? WeakMap : Map;
  function fh(n, r, o) {
    o = Ji(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      yf || (yf = !0, jl = u), cf(n, r);
    }, o;
  }
  function Fs(n, r, o) {
    o = Ji(-1, o), o.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      o.payload = function() {
        return u(c);
      }, o.callback = function() {
        cf(n, r);
      };
    }
    var v = n.stateNode;
    return v !== null && typeof v.componentDidCatch == "function" && (o.callback = function() {
      cf(n, r), typeof u != "function" && (Mi === null ? Mi = /* @__PURE__ */ new Set([this]) : Mi.add(this));
      var b = r.stack;
      this.componentDidCatch(r.value, { componentStack: b !== null ? b : "" });
    }), o;
  }
  function dh(n, r, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new Vy();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else
      c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(o) || (c.add(o), n = qy.bind(null, n, r, o), r.then(n, n));
  }
  function qd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Xd(n, r, o, u, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = Ji(-1, 1), r.tag = 2, Vo(o, r, 1))), o.lanes |= 1), n);
  }
  var $y = _e.ReactCurrentOwner, Wn = !1;
  function Xn(n, r, o, u) {
    r.child = n === null ? sh(r, null, o, u) : Tu(r, n.child, o, u);
  }
  function Qo(n, r, o, u, c) {
    o = o.render;
    var v = r.ref;
    return Oe(r, c), u = Io(n, r, o, u, v, c), o = kl(), n !== null && !Wn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, vr(n, r, c)) : (Sn && o && Ac(r), r.flags |= 1, Xn(n, r, u, c), r.child);
  }
  function ff(n, r, o, u, c) {
    if (n === null) {
      var v = o.type;
      return typeof v == "function" && !hp(v) && v.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = v, ca(n, r, v, u, c)) : (n = wf(o.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (v = n.child, !(n.lanes & c)) {
      var b = v.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Es, o(b, u) && n.ref === r.ref)
        return vr(n, r, c);
    }
    return r.flags |= 1, n = Ko(v, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function ca(n, r, o, u, c) {
    if (n !== null) {
      var v = n.memoizedProps;
      if (Es(v, u) && n.ref === r.ref)
        if (Wn = !1, r.pendingProps = u = v, (n.lanes & c) !== 0)
          n.flags & 131072 && (Wn = !0);
        else
          return r.lanes = n.lanes, vr(n, r, c);
    }
    return zu(n, r, o, u, c);
  }
  function Nl(n, r, o) {
    var u = r.pendingProps, c = u.children, v = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Jt(Pu, Da), Da |= o;
      else {
        if (!(o & 1073741824))
          return n = v !== null ? v.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Jt(Pu, Da), Da |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = v !== null ? v.baseLanes : o, Jt(Pu, Da), Da |= u;
      }
    else
      v !== null ? (u = v.baseLanes | o, r.memoizedState = null) : u = o, Jt(Pu, Da), Da |= u;
    return Xn(n, r, c, o), r.child;
  }
  function bt(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function zu(n, r, o, u, c) {
    var v = Rn(o) ? ra : ft.current;
    return v = Fa(r, v), Oe(r, c), o = Io(n, r, o, u, v, c), u = kl(), n !== null && !Wn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, vr(n, r, c)) : (Sn && u && Ac(r), r.flags |= 1, Xn(n, r, o, c), r.child);
  }
  function Kd(n, r, o, u, c) {
    if (Rn(o)) {
      var v = !0;
      Nc(r);
    } else
      v = !1;
    if (Oe(r, c), r.stateNode === null)
      Or(n, r), ih(r, o, u), $c(r, o, u, c), u = !0;
    else if (n === null) {
      var b = r.stateNode, _ = r.memoizedProps;
      b.props = _;
      var z = b.context, q = o.contextType;
      typeof q == "object" && q !== null ? q = Fn(q) : (q = Rn(o) ? ra : ft.current, q = Fa(r, q));
      var ve = o.getDerivedStateFromProps, he = typeof ve == "function" || typeof b.getSnapshotBeforeUpdate == "function";
      he || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (_ !== u || z !== q) && oh(r, b, u, q), Bo = !1;
      var pe = r.memoizedState;
      b.state = pe, $o(r, u, b, c), z = r.memoizedState, _ !== u || pe !== z || Nn.current || Bo ? (typeof ve == "function" && (Wd(r, o, ve, u), z = r.memoizedState), (_ = Bo || ah(r, o, _, u, pe, z, q)) ? (he || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount()), typeof b.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof b.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = z), b.props = u, b.state = z, b.context = q, u = _) : (typeof b.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      b = r.stateNode, qn(n, r), _ = r.memoizedProps, q = r.type === r.elementType ? _ : xa(r.type, _), b.props = q, he = r.pendingProps, pe = b.context, z = o.contextType, typeof z == "object" && z !== null ? z = Fn(z) : (z = Rn(o) ? ra : ft.current, z = Fa(r, z));
      var Ae = o.getDerivedStateFromProps;
      (ve = typeof Ae == "function" || typeof b.getSnapshotBeforeUpdate == "function") || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (_ !== he || pe !== z) && oh(r, b, u, z), Bo = !1, pe = r.memoizedState, b.state = pe, $o(r, u, b, c);
      var $e = r.memoizedState;
      _ !== he || pe !== $e || Nn.current || Bo ? (typeof Ae == "function" && (Wd(r, o, Ae, u), $e = r.memoizedState), (q = Bo || ah(r, o, q, u, pe, $e, z) || !1) ? (ve || typeof b.UNSAFE_componentWillUpdate != "function" && typeof b.componentWillUpdate != "function" || (typeof b.componentWillUpdate == "function" && b.componentWillUpdate(u, $e, z), typeof b.UNSAFE_componentWillUpdate == "function" && b.UNSAFE_componentWillUpdate(u, $e, z)), typeof b.componentDidUpdate == "function" && (r.flags |= 4), typeof b.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof b.componentDidUpdate != "function" || _ === n.memoizedProps && pe === n.memoizedState || (r.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && pe === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = $e), b.props = u, b.state = $e, b.context = z, u = q) : (typeof b.componentDidUpdate != "function" || _ === n.memoizedProps && pe === n.memoizedState || (r.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && pe === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return ph(n, r, o, u, v, c);
  }
  function ph(n, r, o, u, c, v) {
    bt(n, r);
    var b = (r.flags & 128) !== 0;
    if (!u && !b)
      return c && Zv(r, o, !1), vr(n, r, v);
    u = r.stateNode, $y.current = r;
    var _ = b && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && b ? (r.child = Tu(r, n.child, null, v), r.child = Tu(r, null, _, v)) : Xn(n, r, _, v), r.memoizedState = u.state, c && Zv(r, o, !0), r.child;
  }
  function vh(n) {
    var r = n.stateNode;
    r.pendingContext ? Po(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Po(n, r.context, !1), Id(n, r.containerInfo);
  }
  function df(n, r, o, u, c) {
    return On(), jd(c), r.flags |= 256, Xn(n, r, o, u), r.child;
  }
  var Al = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Zd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Jd(n, r, o) {
    var u = r.pendingProps, c = it.current, v = !1, b = (r.flags & 128) !== 0, _;
    if ((_ = b) || (_ = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), _ ? (v = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Jt(it, c & 1), n === null)
      return Pc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (b = u.children, n = u.fallback, v ? (u = r.mode, v = r.child, b = { mode: "hidden", children: b }, !(u & 1) && v !== null ? (v.childLanes = 0, v.pendingProps = b) : v = qs(b, u, 0, null), n = $l(n, u, o, null), v.return = r, n.return = r, v.sibling = n, r.child = v, r.child.memoizedState = Zd(o), r.memoizedState = Al, n) : ep(r, b));
    if (c = n.memoizedState, c !== null && (_ = c.dehydrated, _ !== null))
      return Wy(n, r, b, u, _, c, o);
    if (v) {
      v = u.fallback, b = r.mode, c = n.child, _ = c.sibling;
      var z = { mode: "hidden", children: u.children };
      return !(b & 1) && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = z, r.deletions = null) : (u = Ko(c, z), u.subtreeFlags = c.subtreeFlags & 14680064), _ !== null ? v = Ko(_, v) : (v = $l(v, b, o, null), v.flags |= 2), v.return = r, u.return = r, u.sibling = v, r.child = u, u = v, v = r.child, b = n.child.memoizedState, b = b === null ? Zd(o) : { baseLanes: b.baseLanes | o, cachePool: null, transitions: b.transitions }, v.memoizedState = b, v.childLanes = n.childLanes & ~o, r.memoizedState = Al, u;
    }
    return v = n.child, n = v.sibling, u = Ko(v, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function ep(n, r) {
    return r = qs({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Mu(n, r, o, u) {
    return u !== null && jd(u), Tu(r, n.child, null, o), n = ep(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Wy(n, r, o, u, c, v, b) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = js(Error(p(422))), Mu(n, r, b, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (v = u.fallback, c = r.mode, u = qs({ mode: "visible", children: u.children }, c, 0, null), v = $l(v, c, b, null), v.flags |= 2, u.return = r, v.return = r, u.sibling = v, r.child = u, r.mode & 1 && Tu(r, n.child, null, b), r.child.memoizedState = Zd(b), r.memoizedState = Al, v);
    if (!(r.mode & 1))
      return Mu(n, r, b, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u)
        var _ = u.dgst;
      return u = _, v = Error(p(419)), u = js(v, u, void 0), Mu(n, r, b, u);
    }
    if (_ = (b & n.childLanes) !== 0, Wn || _) {
      if (u = zn, u !== null) {
        switch (b & -b) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (u.suspendedLanes | b) ? 0 : c, c !== 0 && c !== v.retryLane && (v.retryLane = c, Zi(n, c), Lr(u, n, c, -1));
      }
      return dp(), u = js(Error(p(421))), Mu(n, r, b, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Xy.bind(null, n), c._reactRetry = r, null) : (n = v.treeContext, la = si(c.nextSibling), Ta = r, Sn = !0, Va = null, n !== null && (oa[Dr++] = dr, oa[Dr++] = Ki, oa[Dr++] = Ba, dr = n.id, Ki = n.overflow, Ba = r), r = ep(r, u.children), r.flags |= 4096, r);
  }
  function tp(n, r, o) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), ar(n.return, r, o);
  }
  function pf(n, r, o, u, c) {
    var v = n.memoizedState;
    v === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailMode: c } : (v.isBackwards = r, v.rendering = null, v.renderingStartTime = 0, v.last = u, v.tail = o, v.tailMode = c);
  }
  function np(n, r, o) {
    var u = r.pendingProps, c = u.revealOrder, v = u.tail;
    if (Xn(n, r, u.children, o), u = it.current, u & 2)
      u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && tp(n, o, r);
            else if (n.tag === 19)
              tp(n, o, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      u &= 1;
    }
    if (Jt(it, u), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (o = r.child, c = null; o !== null; )
            n = o.alternate, n !== null && kn(n) === null && (c = o), o = o.sibling;
          o = c, o === null ? (c = r.child, r.child = null) : (c = o.sibling, o.sibling = null), pf(r, !1, c, o, v);
          break;
        case "backwards":
          for (o = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && kn(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = o, o = c, c = n;
          }
          pf(r, !0, o, null, v);
          break;
        case "together":
          pf(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Or(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function vr(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), ro |= r.lanes, !(o & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(p(153));
    if (r.child !== null) {
      for (n = r.child, o = Ko(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = Ko(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function to(n, r, o) {
    switch (r.tag) {
      case 3:
        vh(r), On();
        break;
      case 5:
        rt(r);
        break;
      case 1:
        Rn(r.type) && Nc(r);
        break;
      case 4:
        Id(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        Jt(Di, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Jt(it, it.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? Jd(n, r, o) : (Jt(it, it.current & 1), n = vr(n, r, o), n !== null ? n.sibling : null);
        Jt(it, it.current & 1);
        break;
      case 19:
        if (u = (o & r.childLanes) !== 0, n.flags & 128) {
          if (u)
            return np(n, r, o);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Jt(it, it.current), u)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Nl(n, r, o);
    }
    return vr(n, r, o);
  }
  var Hs, Ul, Ia, Kn;
  Hs = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, Ul = function() {
  }, Ia = function(n, r, o, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, xl(ci.current);
      var v = null;
      switch (o) {
        case "input":
          c = Yt(n, c), u = Yt(n, u), v = [];
          break;
        case "select":
          c = w({}, c, { value: void 0 }), u = w({}, u, { value: void 0 }), v = [];
          break;
        case "textarea":
          c = Tr(n, c), u = Tr(n, u), v = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Lc);
      }
      jn(o, u);
      var b;
      o = null;
      for (q in c)
        if (!u.hasOwnProperty(q) && c.hasOwnProperty(q) && c[q] != null)
          if (q === "style") {
            var _ = c[q];
            for (b in _)
              _.hasOwnProperty(b) && (o || (o = {}), o[b] = "");
          } else
            q !== "dangerouslySetInnerHTML" && q !== "children" && q !== "suppressContentEditableWarning" && q !== "suppressHydrationWarning" && q !== "autoFocus" && (T.hasOwnProperty(q) ? v || (v = []) : (v = v || []).push(q, null));
      for (q in u) {
        var z = u[q];
        if (_ = c != null ? c[q] : void 0, u.hasOwnProperty(q) && z !== _ && (z != null || _ != null))
          if (q === "style")
            if (_) {
              for (b in _)
                !_.hasOwnProperty(b) || z && z.hasOwnProperty(b) || (o || (o = {}), o[b] = "");
              for (b in z)
                z.hasOwnProperty(b) && _[b] !== z[b] && (o || (o = {}), o[b] = z[b]);
            } else
              o || (v || (v = []), v.push(
                q,
                o
              )), o = z;
          else
            q === "dangerouslySetInnerHTML" ? (z = z ? z.__html : void 0, _ = _ ? _.__html : void 0, z != null && _ !== z && (v = v || []).push(q, z)) : q === "children" ? typeof z != "string" && typeof z != "number" || (v = v || []).push(q, "" + z) : q !== "suppressContentEditableWarning" && q !== "suppressHydrationWarning" && (T.hasOwnProperty(q) ? (z != null && q === "onScroll" && fn("scroll", n), v || _ === z || (v = [])) : (v = v || []).push(q, z));
      }
      o && (v = v || []).push("style", o);
      var q = v;
      (r.updateQueue = q) && (r.flags |= 4);
    }
  }, Kn = function(n, r, o, u) {
    o !== u && (r.flags |= 4);
  };
  function Bs(n, r) {
    if (!Sn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), r = r.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var u = null; o !== null; )
            o.alternate !== null && (u = o), o = o.sibling;
          u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
      }
  }
  function kr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, u = 0;
    if (r)
      for (var c = n.child; c !== null; )
        o |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        o |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = o, r;
  }
  function Iy(n, r, o) {
    var u = r.pendingProps;
    switch (Ud(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return kr(r), null;
      case 1:
        return Rn(r.type) && Ha(), kr(r), null;
      case 3:
        return u = r.stateNode, Wo(), Gt(Nn), Gt(ft), Ic(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (jc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Va !== null && (Gs(Va), Va = null))), Ul(n, r), kr(r), null;
      case 5:
        _t(r);
        var c = xl(xu.current);
        if (o = r.type, n !== null && r.stateNode != null)
          Ia(n, r, o, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null)
              throw Error(p(166));
            return kr(r), null;
          }
          if (n = xl(ci.current), jc(r)) {
            u = r.stateNode, o = r.type;
            var v = r.memoizedProps;
            switch (u[xi] = r, u[wl] = v, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                fn("cancel", u), fn("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                fn("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Rs.length; c++)
                  fn(Rs[c], u);
                break;
              case "source":
                fn("error", u);
                break;
              case "img":
              case "image":
              case "link":
                fn(
                  "error",
                  u
                ), fn("load", u);
                break;
              case "details":
                fn("toggle", u);
                break;
              case "input":
                pn(u, v), fn("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!v.multiple }, fn("invalid", u);
                break;
              case "textarea":
                xr(u, v), fn("invalid", u);
            }
            jn(o, v), c = null;
            for (var b in v)
              if (v.hasOwnProperty(b)) {
                var _ = v[b];
                b === "children" ? typeof _ == "string" ? u.textContent !== _ && (v.suppressHydrationWarning !== !0 && Mc(u.textContent, _, n), c = ["children", _]) : typeof _ == "number" && u.textContent !== "" + _ && (v.suppressHydrationWarning !== !0 && Mc(
                  u.textContent,
                  _,
                  n
                ), c = ["children", "" + _]) : T.hasOwnProperty(b) && _ != null && b === "onScroll" && fn("scroll", u);
              }
            switch (o) {
              case "input":
                Dt(u), Rr(u, v, !0);
                break;
              case "textarea":
                Dt(u), cr(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof v.onClick == "function" && (u.onclick = Lc);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            b = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Zr(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = b.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = b.createElement(o, { is: u.is }) : (n = b.createElement(o), o === "select" && (b = n, u.multiple ? b.multiple = !0 : u.size && (b.size = u.size))) : n = b.createElementNS(n, o), n[xi] = r, n[wl] = u, Hs(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (b = _n(o, u), o) {
                case "dialog":
                  fn("cancel", n), fn("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  fn("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Rs.length; c++)
                    fn(Rs[c], n);
                  c = u;
                  break;
                case "source":
                  fn("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  fn(
                    "error",
                    n
                  ), fn("load", n), c = u;
                  break;
                case "details":
                  fn("toggle", n), c = u;
                  break;
                case "input":
                  pn(n, u), c = Yt(n, u), fn("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = w({}, u, { value: void 0 }), fn("invalid", n);
                  break;
                case "textarea":
                  xr(n, u), c = Tr(n, u), fn("invalid", n);
                  break;
                default:
                  c = u;
              }
              jn(o, c), _ = c;
              for (v in _)
                if (_.hasOwnProperty(v)) {
                  var z = _[v];
                  v === "style" ? Qt(n, z) : v === "dangerouslySetInnerHTML" ? (z = z ? z.__html : void 0, z != null && gi(n, z)) : v === "children" ? typeof z == "string" ? (o !== "textarea" || z !== "") && Sa(n, z) : typeof z == "number" && Sa(n, "" + z) : v !== "suppressContentEditableWarning" && v !== "suppressHydrationWarning" && v !== "autoFocus" && (T.hasOwnProperty(v) ? z != null && v === "onScroll" && fn("scroll", n) : z != null && re(n, v, z, b));
                }
              switch (o) {
                case "input":
                  Dt(n), Rr(n, u, !1);
                  break;
                case "textarea":
                  Dt(n), cr(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + ce(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, v = u.value, v != null ? Gn(n, !!u.multiple, v, !1) : u.defaultValue != null && Gn(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Lc);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return kr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Kn(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null)
            throw Error(p(166));
          if (o = xl(xu.current), xl(ci.current), jc(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[xi] = r, (v = u.nodeValue !== o) && (n = Ta, n !== null))
              switch (n.tag) {
                case 3:
                  Mc(u.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Mc(u.nodeValue, o, (n.mode & 1) !== 0);
              }
            v && (r.flags |= 4);
          } else
            u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[xi] = r, r.stateNode = u;
        }
        return kr(r), null;
      case 13:
        if (Gt(it), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Sn && la !== null && r.mode & 1 && !(r.flags & 128))
            th(), On(), r.flags |= 98560, v = !1;
          else if (v = jc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!v)
                throw Error(p(318));
              if (v = r.memoizedState, v = v !== null ? v.dehydrated : null, !v)
                throw Error(p(317));
              v[xi] = r;
            } else
              On(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            kr(r), v = !1;
          } else
            Va !== null && (Gs(Va), Va = null), v = !0;
          if (!v)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || it.current & 1 ? Jn === 0 && (Jn = 3) : dp())), r.updateQueue !== null && (r.flags |= 4), kr(r), null);
      case 4:
        return Wo(), Ul(n, r), n === null && bu(r.stateNode.containerInfo), kr(r), null;
      case 10:
        return Ho(r.type._context), kr(r), null;
      case 17:
        return Rn(r.type) && Ha(), kr(r), null;
      case 19:
        if (Gt(it), v = r.memoizedState, v === null)
          return kr(r), null;
        if (u = (r.flags & 128) !== 0, b = v.rendering, b === null)
          if (u)
            Bs(v, !1);
          else {
            if (Jn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (b = kn(n), b !== null) {
                  for (r.flags |= 128, Bs(v, !1), u = b.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; )
                    v = o, n = u, v.flags &= 14680066, b = v.alternate, b === null ? (v.childLanes = 0, v.lanes = n, v.child = null, v.subtreeFlags = 0, v.memoizedProps = null, v.memoizedState = null, v.updateQueue = null, v.dependencies = null, v.stateNode = null) : (v.childLanes = b.childLanes, v.lanes = b.lanes, v.child = b.child, v.subtreeFlags = 0, v.deletions = null, v.memoizedProps = b.memoizedProps, v.memoizedState = b.memoizedState, v.updateQueue = b.updateQueue, v.type = b.type, n = b.dependencies, v.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return Jt(it, it.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            v.tail !== null && Ft() > Fu && (r.flags |= 128, u = !0, Bs(v, !1), r.lanes = 4194304);
          }
        else {
          if (!u)
            if (n = kn(b), n !== null) {
              if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Bs(v, !0), v.tail === null && v.tailMode === "hidden" && !b.alternate && !Sn)
                return kr(r), null;
            } else
              2 * Ft() - v.renderingStartTime > Fu && o !== 1073741824 && (r.flags |= 128, u = !0, Bs(v, !1), r.lanes = 4194304);
          v.isBackwards ? (b.sibling = r.child, r.child = b) : (o = v.last, o !== null ? o.sibling = b : r.child = b, v.last = b);
        }
        return v.tail !== null ? (r = v.tail, v.rendering = r, v.tail = r.sibling, v.renderingStartTime = Ft(), r.sibling = null, o = it.current, Jt(it, u ? o & 1 | 2 : o & 1), r) : (kr(r), null);
      case 22:
      case 23:
        return fp(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? Da & 1073741824 && (kr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : kr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, r.tag));
  }
  function rp(n, r) {
    switch (Ud(r), r.tag) {
      case 1:
        return Rn(r.type) && Ha(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Wo(), Gt(Nn), Gt(ft), Ic(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return _t(r), null;
      case 13:
        if (Gt(it), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(p(340));
          On();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Gt(it), null;
      case 4:
        return Wo(), null;
      case 10:
        return Ho(r.type._context), null;
      case 22:
      case 23:
        return fp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Vs = !1, Zn = !1, hh = typeof WeakSet == "function" ? WeakSet : Set, Ve = null;
  function Lu(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (u) {
          Un(n, r, u);
        }
      else
        o.current = null;
  }
  function $s(n, r, o) {
    try {
      o();
    } catch (u) {
      Un(n, r, u);
    }
  }
  var mh = !1;
  function yh(n, r) {
    if (Dd = Ua, n = _c(), Qi(n)) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = (o = n.ownerDocument) && o.defaultView || window;
          var u = o.getSelection && o.getSelection();
          if (u && u.rangeCount !== 0) {
            o = u.anchorNode;
            var c = u.anchorOffset, v = u.focusNode;
            u = u.focusOffset;
            try {
              o.nodeType, v.nodeType;
            } catch {
              o = null;
              break e;
            }
            var b = 0, _ = -1, z = -1, q = 0, ve = 0, he = n, pe = null;
            t:
              for (; ; ) {
                for (var Ae; he !== o || c !== 0 && he.nodeType !== 3 || (_ = b + c), he !== v || u !== 0 && he.nodeType !== 3 || (z = b + u), he.nodeType === 3 && (b += he.nodeValue.length), (Ae = he.firstChild) !== null; )
                  pe = he, he = Ae;
                for (; ; ) {
                  if (he === n)
                    break t;
                  if (pe === o && ++q === c && (_ = b), pe === v && ++ve === u && (z = b), (Ae = he.nextSibling) !== null)
                    break;
                  he = pe, pe = he.parentNode;
                }
                he = Ae;
              }
            o = _ === -1 || z === -1 ? null : { start: _, end: z };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (bl = { focusedElem: n, selectionRange: o }, Ua = !1, Ve = r; Ve !== null; )
      if (r = Ve, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Ve = n;
      else
        for (; Ve !== null; ) {
          r = Ve;
          try {
            var $e = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if ($e !== null) {
                    var Ye = $e.memoizedProps, Hn = $e.memoizedState, H = r.stateNode, L = H.getSnapshotBeforeUpdate(r.elementType === r.type ? Ye : xa(r.type, Ye), Hn);
                    H.__reactInternalSnapshotBeforeUpdate = L;
                  }
                  break;
                case 3:
                  var I = r.stateNode.containerInfo;
                  I.nodeType === 1 ? I.textContent = "" : I.nodeType === 9 && I.documentElement && I.removeChild(I.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(p(163));
              }
          } catch (Ce) {
            Un(r, r.return, Ce);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Ve = n;
            break;
          }
          Ve = r.return;
        }
    return $e = mh, mh = !1, $e;
  }
  function Ws(n, r, o) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var v = c.destroy;
          c.destroy = void 0, v !== void 0 && $s(r, o, v);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function Is(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var u = o.create;
          o.destroy = u();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function ap(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function ip(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, ip(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[xi], delete r[wl], delete r[zd], delete r[jy], delete r[Md])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function gh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function vf(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || gh(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function Nu(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Lc));
    else if (u !== 4 && (n = n.child, n !== null))
      for (Nu(n, r, o), n = n.sibling; n !== null; )
        Nu(n, r, o), n = n.sibling;
  }
  function ki(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null))
      for (ki(n, r, o), n = n.sibling; n !== null; )
        ki(n, r, o), n = n.sibling;
  }
  var Tn = null, ir = !1;
  function Ya(n, r, o) {
    for (o = o.child; o !== null; )
      Au(n, r, o), o = o.sibling;
  }
  function Au(n, r, o) {
    if (Jr && typeof Jr.onCommitFiberUnmount == "function")
      try {
        Jr.onCommitFiberUnmount(Co, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        Zn || Lu(o, r);
      case 6:
        var u = Tn, c = ir;
        Tn = null, Ya(n, r, o), Tn = u, ir = c, Tn !== null && (ir ? (n = Tn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Tn.removeChild(o.stateNode));
        break;
      case 18:
        Tn !== null && (ir ? (n = Tn, o = o.stateNode, n.nodeType === 8 ? No(n.parentNode, o) : n.nodeType === 1 && No(n, o), Oo(n)) : No(Tn, o.stateNode));
        break;
      case 4:
        u = Tn, c = ir, Tn = o.stateNode.containerInfo, ir = !0, Ya(n, r, o), Tn = u, ir = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Zn && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var v = c, b = v.destroy;
            v = v.tag, b !== void 0 && (v & 2 || v & 4) && $s(o, r, b), c = c.next;
          } while (c !== u);
        }
        Ya(n, r, o);
        break;
      case 1:
        if (!Zn && (Lu(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function"))
          try {
            u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
          } catch (_) {
            Un(o, r, _);
          }
        Ya(n, r, o);
        break;
      case 21:
        Ya(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (Zn = (u = Zn) || o.memoizedState !== null, Ya(n, r, o), Zn = u) : Ya(n, r, o);
        break;
      default:
        Ya(n, r, o);
    }
  }
  function no(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new hh()), r.forEach(function(u) {
        var c = Ky.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(c, c));
      });
    }
  }
  function fi(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var u = 0; u < o.length; u++) {
        var c = o[u];
        try {
          var v = n, b = r, _ = b;
          e:
            for (; _ !== null; ) {
              switch (_.tag) {
                case 5:
                  Tn = _.stateNode, ir = !1;
                  break e;
                case 3:
                  Tn = _.stateNode.containerInfo, ir = !0;
                  break e;
                case 4:
                  Tn = _.stateNode.containerInfo, ir = !0;
                  break e;
              }
              _ = _.return;
            }
          if (Tn === null)
            throw Error(p(160));
          Au(v, b, c), Tn = null, ir = !1;
          var z = c.alternate;
          z !== null && (z.return = null), c.return = null;
        } catch (q) {
          Un(c, r, q);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Sh(r, n), r = r.sibling;
  }
  function Sh(n, r) {
    var o = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (fi(r, n), zi(n), u & 4) {
          try {
            Ws(3, n, n.return), Is(3, n);
          } catch (Ye) {
            Un(n, n.return, Ye);
          }
          try {
            Ws(5, n, n.return);
          } catch (Ye) {
            Un(n, n.return, Ye);
          }
        }
        break;
      case 1:
        fi(r, n), zi(n), u & 512 && o !== null && Lu(o, o.return);
        break;
      case 5:
        if (fi(r, n), zi(n), u & 512 && o !== null && Lu(o, o.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Sa(c, "");
          } catch (Ye) {
            Un(n, n.return, Ye);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var v = n.memoizedProps, b = o !== null ? o.memoizedProps : v, _ = n.type, z = n.updateQueue;
          if (n.updateQueue = null, z !== null)
            try {
              _ === "input" && v.type === "radio" && v.name != null && wn(c, v), _n(_, b);
              var q = _n(_, v);
              for (b = 0; b < z.length; b += 2) {
                var ve = z[b], he = z[b + 1];
                ve === "style" ? Qt(c, he) : ve === "dangerouslySetInnerHTML" ? gi(c, he) : ve === "children" ? Sa(c, he) : re(c, ve, he, q);
              }
              switch (_) {
                case "input":
                  vn(c, v);
                  break;
                case "textarea":
                  ga(c, v);
                  break;
                case "select":
                  var pe = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!v.multiple;
                  var Ae = v.value;
                  Ae != null ? Gn(c, !!v.multiple, Ae, !1) : pe !== !!v.multiple && (v.defaultValue != null ? Gn(
                    c,
                    !!v.multiple,
                    v.defaultValue,
                    !0
                  ) : Gn(c, !!v.multiple, v.multiple ? [] : "", !1));
              }
              c[wl] = v;
            } catch (Ye) {
              Un(n, n.return, Ye);
            }
        }
        break;
      case 6:
        if (fi(r, n), zi(n), u & 4) {
          if (n.stateNode === null)
            throw Error(p(162));
          c = n.stateNode, v = n.memoizedProps;
          try {
            c.nodeValue = v;
          } catch (Ye) {
            Un(n, n.return, Ye);
          }
        }
        break;
      case 3:
        if (fi(r, n), zi(n), u & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            Oo(r.containerInfo);
          } catch (Ye) {
            Un(n, n.return, Ye);
          }
        break;
      case 4:
        fi(r, n), zi(n);
        break;
      case 13:
        fi(r, n), zi(n), c = n.child, c.flags & 8192 && (v = c.memoizedState !== null, c.stateNode.isHidden = v, !v || c.alternate !== null && c.alternate.memoizedState !== null || (up = Ft())), u & 4 && no(n);
        break;
      case 22:
        if (ve = o !== null && o.memoizedState !== null, n.mode & 1 ? (Zn = (q = Zn) || ve, fi(r, n), Zn = q) : fi(r, n), zi(n), u & 8192) {
          if (q = n.memoizedState !== null, (n.stateNode.isHidden = q) && !ve && n.mode & 1)
            for (Ve = n, ve = n.child; ve !== null; ) {
              for (he = Ve = ve; Ve !== null; ) {
                switch (pe = Ve, Ae = pe.child, pe.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ws(4, pe, pe.return);
                    break;
                  case 1:
                    Lu(pe, pe.return);
                    var $e = pe.stateNode;
                    if (typeof $e.componentWillUnmount == "function") {
                      u = pe, o = pe.return;
                      try {
                        r = u, $e.props = r.memoizedProps, $e.state = r.memoizedState, $e.componentWillUnmount();
                      } catch (Ye) {
                        Un(u, o, Ye);
                      }
                    }
                    break;
                  case 5:
                    Lu(pe, pe.return);
                    break;
                  case 22:
                    if (pe.memoizedState !== null) {
                      op(he);
                      continue;
                    }
                }
                Ae !== null ? (Ae.return = pe, Ve = Ae) : op(he);
              }
              ve = ve.sibling;
            }
          e:
            for (ve = null, he = n; ; ) {
              if (he.tag === 5) {
                if (ve === null) {
                  ve = he;
                  try {
                    c = he.stateNode, q ? (v = c.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none") : (_ = he.stateNode, z = he.memoizedProps.style, b = z != null && z.hasOwnProperty("display") ? z.display : null, _.style.display = wt("display", b));
                  } catch (Ye) {
                    Un(n, n.return, Ye);
                  }
                }
              } else if (he.tag === 6) {
                if (ve === null)
                  try {
                    he.stateNode.nodeValue = q ? "" : he.memoizedProps;
                  } catch (Ye) {
                    Un(n, n.return, Ye);
                  }
              } else if ((he.tag !== 22 && he.tag !== 23 || he.memoizedState === null || he === n) && he.child !== null) {
                he.child.return = he, he = he.child;
                continue;
              }
              if (he === n)
                break e;
              for (; he.sibling === null; ) {
                if (he.return === null || he.return === n)
                  break e;
                ve === he && (ve = null), he = he.return;
              }
              ve === he && (ve = null), he.sibling.return = he.return, he = he.sibling;
            }
        }
        break;
      case 19:
        fi(r, n), zi(n), u & 4 && no(n);
        break;
      case 21:
        break;
      default:
        fi(
          r,
          n
        ), zi(n);
    }
  }
  function zi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (gh(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(p(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (Sa(c, ""), u.flags &= -33);
            var v = vf(n);
            ki(n, v, c);
            break;
          case 3:
          case 4:
            var b = u.stateNode.containerInfo, _ = vf(n);
            Nu(n, _, b);
            break;
          default:
            throw Error(p(161));
        }
      } catch (z) {
        Un(n, n.return, z);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Eh(n, r, o) {
    Ve = n, Uu(n);
  }
  function Uu(n, r, o) {
    for (var u = (n.mode & 1) !== 0; Ve !== null; ) {
      var c = Ve, v = c.child;
      if (c.tag === 22 && u) {
        var b = c.memoizedState !== null || Vs;
        if (!b) {
          var _ = c.alternate, z = _ !== null && _.memoizedState !== null || Zn;
          _ = Vs;
          var q = Zn;
          if (Vs = b, (Zn = z) && !q)
            for (Ve = c; Ve !== null; )
              b = Ve, z = b.child, b.tag === 22 && b.memoizedState !== null ? Ch(c) : z !== null ? (z.return = b, Ve = z) : Ch(c);
          for (; v !== null; )
            Ve = v, Uu(v), v = v.sibling;
          Ve = c, Vs = _, Zn = q;
        }
        bh(n);
      } else
        c.subtreeFlags & 8772 && v !== null ? (v.return = c, Ve = v) : bh(n);
    }
  }
  function bh(n) {
    for (; Ve !== null; ) {
      var r = Ve;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Zn || Is(5, r);
                break;
              case 1:
                var u = r.stateNode;
                if (r.flags & 4 && !Zn)
                  if (o === null)
                    u.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? o.memoizedProps : xa(r.type, o.memoizedProps);
                    u.componentDidUpdate(c, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
                  }
                var v = r.updateQueue;
                v !== null && Tl(r, v, u);
                break;
              case 3:
                var b = r.updateQueue;
                if (b !== null) {
                  if (o = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  Tl(r, b, o);
                }
                break;
              case 5:
                var _ = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = _;
                  var z = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      z.autoFocus && o.focus();
                      break;
                    case "img":
                      z.src && (o.src = z.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var q = r.alternate;
                  if (q !== null) {
                    var ve = q.memoizedState;
                    if (ve !== null) {
                      var he = ve.dehydrated;
                      he !== null && Oo(he);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(p(163));
            }
          Zn || r.flags & 512 && ap(r);
        } catch (pe) {
          Un(r, r.return, pe);
        }
      }
      if (r === n) {
        Ve = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, Ve = o;
        break;
      }
      Ve = r.return;
    }
  }
  function op(n) {
    for (; Ve !== null; ) {
      var r = Ve;
      if (r === n) {
        Ve = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, Ve = o;
        break;
      }
      Ve = r.return;
    }
  }
  function Ch(n) {
    for (; Ve !== null; ) {
      var r = Ve;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Is(4, r);
            } catch (z) {
              Un(r, o, z);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (z) {
                Un(r, c, z);
              }
            }
            var v = r.return;
            try {
              ap(r);
            } catch (z) {
              Un(r, v, z);
            }
            break;
          case 5:
            var b = r.return;
            try {
              ap(r);
            } catch (z) {
              Un(r, b, z);
            }
        }
      } catch (z) {
        Un(r, r.return, z);
      }
      if (r === n) {
        Ve = null;
        break;
      }
      var _ = r.sibling;
      if (_ !== null) {
        _.return = r.return, Ve = _;
        break;
      }
      Ve = r.return;
    }
  }
  var hf = Math.ceil, Ys = _e.ReactCurrentDispatcher, lp = _e.ReactCurrentOwner, zr = _e.ReactCurrentBatchConfig, Ot = 0, zn = null, An = null, or = 0, Da = 0, Pu = Et(0), Jn = 0, Qs = null, ro = 0, mf = 0, ju = 0, Pl = null, Vr = null, up = 0, Fu = 1 / 0, ao = null, yf = !1, jl = null, Mi = null, Go = !1, qo = null, gf = 0, Hu = 0, Sf = null, Fl = -1, Hl = 0;
  function Mr() {
    return Ot & 6 ? Ft() : Fl !== -1 ? Fl : Fl = Ft();
  }
  function In(n) {
    return n.mode & 1 ? Ot & 2 && or !== 0 ? or & -or : Fc.transition !== null ? (Hl === 0 && (Hl = lu()), Hl) : (n = $t, n !== 0 || (n = window.event, n = n === void 0 ? 16 : hs(n.type)), n) : 1;
  }
  function Lr(n, r, o, u) {
    if (50 < Hu)
      throw Hu = 0, Sf = null, Error(p(185));
    Vi(n, o, u), (!(Ot & 2) || n !== zn) && (n === zn && (!(Ot & 2) && (mf |= o), Jn === 4 && Qa(n, or)), Nr(n, u), o === 1 && Ot === 0 && !(r.mode & 1) && (Fu = Ft() + 500, rr && aa()));
  }
  function Nr(n, r) {
    var o = n.callbackNode;
    To(n, r);
    var u = Hr(n, n === zn ? or : 0);
    if (u === 0)
      o !== null && fr(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && fr(o), r === 1)
        n.tag === 0 ? Nd(wh.bind(null, n)) : Ld(wh.bind(null, n)), kd(function() {
          !(Ot & 6) && aa();
        }), o = null;
      else {
        switch (su(u)) {
          case 1:
            o = ri;
            break;
          case 4:
            o = Tt;
            break;
          case 16:
            o = wi;
            break;
          case 536870912:
            o = iu;
            break;
          default:
            o = wi;
        }
        o = vp(o, Bu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function Bu(n, r) {
    if (Fl = -1, Hl = 0, Ot & 6)
      throw Error(p(327));
    var o = n.callbackNode;
    if ($u() && n.callbackNode !== o)
      return null;
    var u = Hr(n, n === zn ? or : 0);
    if (u === 0)
      return null;
    if (u & 30 || u & n.expiredLanes || r)
      r = bf(n, u);
    else {
      r = u;
      var c = Ot;
      Ot |= 2;
      var v = Ef();
      (zn !== n || or !== r) && (ao = null, Fu = Ft() + 500, Bl(n, r));
      do
        try {
          Qy();
          break;
        } catch (_) {
          Rh(n, _);
        }
      while (!0);
      Hd(), Ys.current = v, Ot = c, An !== null ? r = 0 : (zn = null, or = 0, r = Jn);
    }
    if (r !== 0) {
      if (r === 2 && (c = xo(n), c !== 0 && (u = c, r = sp(n, c))), r === 1)
        throw o = Qs, Bl(n, 0), Qa(n, u), Nr(n, Ft()), o;
      if (r === 6)
        Qa(n, u);
      else {
        if (c = n.current.alternate, !(u & 30) && !cp(c) && (r = bf(n, u), r === 2 && (v = xo(n), v !== 0 && (u = v, r = sp(n, v))), r === 1))
          throw o = Qs, Bl(n, 0), Qa(n, u), Nr(n, Ft()), o;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            Vl(n, Vr, ao);
            break;
          case 3:
            if (Qa(n, u), (u & 130023424) === u && (r = up + 500 - Ft(), 10 < r)) {
              if (Hr(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                Mr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Cl(Vl.bind(null, n, Vr, ao), r);
              break;
            }
            Vl(n, Vr, ao);
            break;
          case 4:
            if (Qa(n, u), (u & 4194240) === u)
              break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var b = 31 - Fr(u);
              v = 1 << b, b = r[b], b > c && (c = b), u &= ~v;
            }
            if (u = c, u = Ft() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * hf(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Cl(Vl.bind(null, n, Vr, ao), u);
              break;
            }
            Vl(n, Vr, ao);
            break;
          case 5:
            Vl(n, Vr, ao);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return Nr(n, Ft()), n.callbackNode === o ? Bu.bind(null, n) : null;
  }
  function sp(n, r) {
    var o = Pl;
    return n.current.memoizedState.isDehydrated && (Bl(n, r).flags |= 256), n = bf(n, r), n !== 2 && (r = Vr, Vr = o, r !== null && Gs(r)), n;
  }
  function Gs(n) {
    Vr === null ? Vr = n : Vr.push.apply(Vr, n);
  }
  function cp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var u = 0; u < o.length; u++) {
            var c = o[u], v = c.getSnapshot;
            c = c.value;
            try {
              if (!Pa(v(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null)
        o.return = r, r = o;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Qa(n, r) {
    for (r &= ~ju, r &= ~mf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Fr(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function wh(n) {
    if (Ot & 6)
      throw Error(p(327));
    $u();
    var r = Hr(n, 0);
    if (!(r & 1))
      return Nr(n, Ft()), null;
    var o = bf(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = xo(n);
      u !== 0 && (r = u, o = sp(n, u));
    }
    if (o === 1)
      throw o = Qs, Bl(n, 0), Qa(n, r), Nr(n, Ft()), o;
    if (o === 6)
      throw Error(p(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Vl(n, Vr, ao), Nr(n, Ft()), null;
  }
  function Vu(n, r) {
    var o = Ot;
    Ot |= 1;
    try {
      return n(r);
    } finally {
      Ot = o, Ot === 0 && (Fu = Ft() + 500, rr && aa());
    }
  }
  function Xo(n) {
    qo !== null && qo.tag === 0 && !(Ot & 6) && $u();
    var r = Ot;
    Ot |= 1;
    var o = zr.transition, u = $t;
    try {
      if (zr.transition = null, $t = 1, n)
        return n();
    } finally {
      $t = u, zr.transition = o, Ot = r, !(Ot & 6) && aa();
    }
  }
  function fp() {
    Da = Pu.current, Gt(Pu);
  }
  function Bl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Kv(o)), An !== null)
      for (o = An.return; o !== null; ) {
        var u = o;
        switch (Ud(u), u.tag) {
          case 1:
            u = u.type.childContextTypes, u != null && Ha();
            break;
          case 3:
            Wo(), Gt(Nn), Gt(ft), Ic();
            break;
          case 5:
            _t(u);
            break;
          case 4:
            Wo();
            break;
          case 13:
            Gt(it);
            break;
          case 19:
            Gt(it);
            break;
          case 10:
            Ho(u.type._context);
            break;
          case 22:
          case 23:
            fp();
        }
        o = o.return;
      }
    if (zn = n, An = n = Ko(n.current, null), or = Da = r, Jn = 0, Qs = null, ju = mf = ro = 0, Vr = Pl = null, pr !== null) {
      for (r = 0; r < pr.length; r++)
        if (o = pr[r], u = o.interleaved, u !== null) {
          o.interleaved = null;
          var c = u.next, v = o.pending;
          if (v !== null) {
            var b = v.next;
            v.next = c, u.next = b;
          }
          o.pending = u;
        }
      pr = null;
    }
    return n;
  }
  function Rh(n, r) {
    do {
      var o = An;
      try {
        if (Hd(), Yc.current = sf, lt) {
          for (var u = En.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          lt = !1;
        }
        if (_l = 0, At = le = En = null, Oi = !1, _a = 0, lp.current = null, o === null || o.return === null) {
          Jn = 1, Qs = r, An = null;
          break;
        }
        e: {
          var v = n, b = o.return, _ = o, z = r;
          if (r = or, _.flags |= 32768, z !== null && typeof z == "object" && typeof z.then == "function") {
            var q = z, ve = _, he = ve.tag;
            if (!(ve.mode & 1) && (he === 0 || he === 11 || he === 15)) {
              var pe = ve.alternate;
              pe ? (ve.updateQueue = pe.updateQueue, ve.memoizedState = pe.memoizedState, ve.lanes = pe.lanes) : (ve.updateQueue = null, ve.memoizedState = null);
            }
            var Ae = qd(b);
            if (Ae !== null) {
              Ae.flags &= -257, Xd(Ae, b, _, v, r), Ae.mode & 1 && dh(v, q, r), r = Ae, z = q;
              var $e = r.updateQueue;
              if ($e === null) {
                var Ye = /* @__PURE__ */ new Set();
                Ye.add(z), r.updateQueue = Ye;
              } else
                $e.add(z);
              break e;
            } else {
              if (!(r & 1)) {
                dh(v, q, r), dp();
                break e;
              }
              z = Error(p(426));
            }
          } else if (Sn && _.mode & 1) {
            var Hn = qd(b);
            if (Hn !== null) {
              !(Hn.flags & 65536) && (Hn.flags |= 256), Xd(Hn, b, _, v, r), jd(ku(z, _));
              break e;
            }
          }
          v = z = ku(z, _), Jn !== 4 && (Jn = 2), Pl === null ? Pl = [v] : Pl.push(v), v = b;
          do {
            switch (v.tag) {
              case 3:
                v.flags |= 65536, r &= -r, v.lanes |= r;
                var H = fh(v, z, r);
                $d(v, H);
                break e;
              case 1:
                _ = z;
                var L = v.type, I = v.stateNode;
                if (!(v.flags & 128) && (typeof L.getDerivedStateFromError == "function" || I !== null && typeof I.componentDidCatch == "function" && (Mi === null || !Mi.has(I)))) {
                  v.flags |= 65536, r &= -r, v.lanes |= r;
                  var Ce = Fs(v, _, r);
                  $d(v, Ce);
                  break e;
                }
            }
            v = v.return;
          } while (v !== null);
        }
        pp(o);
      } catch (Ge) {
        r = Ge, An === o && o !== null && (An = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ef() {
    var n = Ys.current;
    return Ys.current = sf, n === null ? sf : n;
  }
  function dp() {
    (Jn === 0 || Jn === 3 || Jn === 2) && (Jn = 4), zn === null || !(ro & 268435455) && !(mf & 268435455) || Qa(zn, or);
  }
  function bf(n, r) {
    var o = Ot;
    Ot |= 2;
    var u = Ef();
    (zn !== n || or !== r) && (ao = null, Bl(n, r));
    do
      try {
        Yy();
        break;
      } catch (c) {
        Rh(n, c);
      }
    while (!0);
    if (Hd(), Ot = o, Ys.current = u, An !== null)
      throw Error(p(261));
    return zn = null, or = 0, Jn;
  }
  function Yy() {
    for (; An !== null; )
      Th(An);
  }
  function Qy() {
    for (; An !== null && !Ci(); )
      Th(An);
  }
  function Th(n) {
    var r = _h(n.alternate, n, Da);
    n.memoizedProps = n.pendingProps, r === null ? pp(n) : An = r, lp.current = null;
  }
  function pp(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = rp(o, r), o !== null) {
          o.flags &= 32767, An = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Jn = 6, An = null;
          return;
        }
      } else if (o = Iy(o, r, Da), o !== null) {
        An = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        An = r;
        return;
      }
      An = r = n;
    } while (r !== null);
    Jn === 0 && (Jn = 5);
  }
  function Vl(n, r, o) {
    var u = $t, c = zr.transition;
    try {
      zr.transition = null, $t = 1, Gy(n, r, o, u);
    } finally {
      zr.transition = c, $t = u;
    }
    return null;
  }
  function Gy(n, r, o, u) {
    do
      $u();
    while (qo !== null);
    if (Ot & 6)
      throw Error(p(327));
    o = n.finishedWork;
    var c = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(p(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var v = o.lanes | o.childLanes;
    if (sd(n, v), n === zn && (An = zn = null, or = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Go || (Go = !0, vp(wi, function() {
      return $u(), null;
    })), v = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || v) {
      v = zr.transition, zr.transition = null;
      var b = $t;
      $t = 1;
      var _ = Ot;
      Ot |= 4, lp.current = null, yh(n, o), Sh(o, n), Dc(bl), Ua = !!Dd, bl = Dd = null, n.current = o, Eh(o), au(), Ot = _, $t = b, zr.transition = v;
    } else
      n.current = o;
    if (Go && (Go = !1, qo = n, gf = c), v = n.pendingLanes, v === 0 && (Mi = null), ds(o.stateNode), Nr(n, Ft()), r !== null)
      for (u = n.onRecoverableError, o = 0; o < r.length; o++)
        c = r[o], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (yf)
      throw yf = !1, n = jl, jl = null, n;
    return gf & 1 && n.tag !== 0 && $u(), v = n.pendingLanes, v & 1 ? n === Sf ? Hu++ : (Hu = 0, Sf = n) : Hu = 0, aa(), null;
  }
  function $u() {
    if (qo !== null) {
      var n = su(gf), r = zr.transition, o = $t;
      try {
        if (zr.transition = null, $t = 16 > n ? 16 : n, qo === null)
          var u = !1;
        else {
          if (n = qo, qo = null, gf = 0, Ot & 6)
            throw Error(p(331));
          var c = Ot;
          for (Ot |= 4, Ve = n.current; Ve !== null; ) {
            var v = Ve, b = v.child;
            if (Ve.flags & 16) {
              var _ = v.deletions;
              if (_ !== null) {
                for (var z = 0; z < _.length; z++) {
                  var q = _[z];
                  for (Ve = q; Ve !== null; ) {
                    var ve = Ve;
                    switch (ve.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ws(8, ve, v);
                    }
                    var he = ve.child;
                    if (he !== null)
                      he.return = ve, Ve = he;
                    else
                      for (; Ve !== null; ) {
                        ve = Ve;
                        var pe = ve.sibling, Ae = ve.return;
                        if (ip(ve), ve === q) {
                          Ve = null;
                          break;
                        }
                        if (pe !== null) {
                          pe.return = Ae, Ve = pe;
                          break;
                        }
                        Ve = Ae;
                      }
                  }
                }
                var $e = v.alternate;
                if ($e !== null) {
                  var Ye = $e.child;
                  if (Ye !== null) {
                    $e.child = null;
                    do {
                      var Hn = Ye.sibling;
                      Ye.sibling = null, Ye = Hn;
                    } while (Ye !== null);
                  }
                }
                Ve = v;
              }
            }
            if (v.subtreeFlags & 2064 && b !== null)
              b.return = v, Ve = b;
            else
              e:
                for (; Ve !== null; ) {
                  if (v = Ve, v.flags & 2048)
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ws(9, v, v.return);
                    }
                  var H = v.sibling;
                  if (H !== null) {
                    H.return = v.return, Ve = H;
                    break e;
                  }
                  Ve = v.return;
                }
          }
          var L = n.current;
          for (Ve = L; Ve !== null; ) {
            b = Ve;
            var I = b.child;
            if (b.subtreeFlags & 2064 && I !== null)
              I.return = b, Ve = I;
            else
              e:
                for (b = L; Ve !== null; ) {
                  if (_ = Ve, _.flags & 2048)
                    try {
                      switch (_.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Is(9, _);
                      }
                    } catch (Ge) {
                      Un(_, _.return, Ge);
                    }
                  if (_ === b) {
                    Ve = null;
                    break e;
                  }
                  var Ce = _.sibling;
                  if (Ce !== null) {
                    Ce.return = _.return, Ve = Ce;
                    break e;
                  }
                  Ve = _.return;
                }
          }
          if (Ot = c, aa(), Jr && typeof Jr.onPostCommitFiberRoot == "function")
            try {
              Jr.onPostCommitFiberRoot(Co, n);
            } catch {
            }
          u = !0;
        }
        return u;
      } finally {
        $t = o, zr.transition = r;
      }
    }
    return !1;
  }
  function xh(n, r, o) {
    r = ku(o, r), r = fh(n, r, 1), n = Vo(n, r, 1), r = Mr(), n !== null && (Vi(n, 1, r), Nr(n, r));
  }
  function Un(n, r, o) {
    if (n.tag === 3)
      xh(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          xh(r, n, o);
          break;
        } else if (r.tag === 1) {
          var u = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Mi === null || !Mi.has(u))) {
            n = ku(o, n), n = Fs(r, n, 1), r = Vo(r, n, 1), n = Mr(), r !== null && (Vi(r, 1, n), Nr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function qy(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = Mr(), n.pingedLanes |= n.suspendedLanes & o, zn === n && (or & o) === o && (Jn === 4 || Jn === 3 && (or & 130023424) === or && 500 > Ft() - up ? Bl(n, 0) : ju |= o), Nr(n, r);
  }
  function Cf(n, r) {
    r === 0 && (n.mode & 1 ? (r = wo, wo <<= 1, !(wo & 130023424) && (wo = 4194304)) : r = 1);
    var o = Mr();
    n = Zi(n, r), n !== null && (Vi(n, r, o), Nr(n, o));
  }
  function Xy(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Cf(n, o);
  }
  function Ky(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, c = n.memoizedState;
        c !== null && (o = c.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(p(314));
    }
    u !== null && u.delete(r), Cf(n, o);
  }
  var _h;
  _h = function(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Nn.current)
        Wn = !0;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return Wn = !1, to(n, r, o);
        Wn = !!(n.flags & 131072);
      }
    else
      Wn = !1, Sn && r.flags & 1048576 && Ad(r, wu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Or(n, r), n = r.pendingProps;
        var c = Fa(r, ft.current);
        Oe(r, o), c = Io(null, r, u, n, c, o);
        var v = kl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Rn(u) ? (v = !0, Nc(r)) : v = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Vd(r), c.updater = Vc, r.stateNode = c, c._reactInternals = r, $c(r, u, n, o), r = ph(null, r, u, !0, v, o)) : (r.tag = 0, Sn && v && Ac(r), Xn(null, r, c, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Or(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = Jy(u), n = xa(u, n), c) {
            case 0:
              r = zu(null, r, u, n, o);
              break e;
            case 1:
              r = Kd(null, r, u, n, o);
              break e;
            case 11:
              r = Qo(null, r, u, n, o);
              break e;
            case 14:
              r = ff(null, r, u, xa(u.type, n), o);
              break e;
          }
          throw Error(p(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : xa(u, c), zu(n, r, u, c, o);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : xa(u, c), Kd(n, r, u, c, o);
      case 3:
        e: {
          if (vh(r), n === null)
            throw Error(p(387));
          u = r.pendingProps, v = r.memoizedState, c = v.element, qn(n, r), $o(r, u, null, o);
          var b = r.memoizedState;
          if (u = b.element, v.isDehydrated)
            if (v = { element: u, isDehydrated: !1, cache: b.cache, pendingSuspenseBoundaries: b.pendingSuspenseBoundaries, transitions: b.transitions }, r.updateQueue.baseState = v, r.memoizedState = v, r.flags & 256) {
              c = ku(Error(p(423)), r), r = df(n, r, u, o, c);
              break e;
            } else if (u !== c) {
              c = ku(Error(p(424)), r), r = df(n, r, u, o, c);
              break e;
            } else
              for (la = si(r.stateNode.containerInfo.firstChild), Ta = r, Sn = !0, Va = null, o = sh(r, null, u, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (On(), u === c) {
              r = vr(n, r, o);
              break e;
            }
            Xn(n, r, u, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return rt(r), n === null && Pc(r), u = r.type, c = r.pendingProps, v = n !== null ? n.memoizedProps : null, b = c.children, _s(u, c) ? b = null : v !== null && _s(u, v) && (r.flags |= 32), bt(n, r), Xn(n, r, b, o), r.child;
      case 6:
        return n === null && Pc(r), null;
      case 13:
        return Jd(n, r, o);
      case 4:
        return Id(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = Tu(r, null, u, o) : Xn(n, r, u, o), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : xa(u, c), Qo(n, r, u, c, o);
      case 7:
        return Xn(n, r, r.pendingProps, o), r.child;
      case 8:
        return Xn(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return Xn(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, v = r.memoizedProps, b = c.value, Jt(Di, u._currentValue), u._currentValue = b, v !== null)
            if (Pa(v.value, b)) {
              if (v.children === c.children && !Nn.current) {
                r = vr(n, r, o);
                break e;
              }
            } else
              for (v = r.child, v !== null && (v.return = r); v !== null; ) {
                var _ = v.dependencies;
                if (_ !== null) {
                  b = v.child;
                  for (var z = _.firstContext; z !== null; ) {
                    if (z.context === u) {
                      if (v.tag === 1) {
                        z = Ji(-1, o & -o), z.tag = 2;
                        var q = v.updateQueue;
                        if (q !== null) {
                          q = q.shared;
                          var ve = q.pending;
                          ve === null ? z.next = z : (z.next = ve.next, ve.next = z), q.pending = z;
                        }
                      }
                      v.lanes |= o, z = v.alternate, z !== null && (z.lanes |= o), ar(
                        v.return,
                        o,
                        r
                      ), _.lanes |= o;
                      break;
                    }
                    z = z.next;
                  }
                } else if (v.tag === 10)
                  b = v.type === r.type ? null : v.child;
                else if (v.tag === 18) {
                  if (b = v.return, b === null)
                    throw Error(p(341));
                  b.lanes |= o, _ = b.alternate, _ !== null && (_.lanes |= o), ar(b, o, r), b = v.sibling;
                } else
                  b = v.child;
                if (b !== null)
                  b.return = v;
                else
                  for (b = v; b !== null; ) {
                    if (b === r) {
                      b = null;
                      break;
                    }
                    if (v = b.sibling, v !== null) {
                      v.return = b.return, b = v;
                      break;
                    }
                    b = b.return;
                  }
                v = b;
              }
          Xn(n, r, c.children, o), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, Oe(r, o), c = Fn(c), u = u(c), r.flags |= 1, Xn(n, r, u, o), r.child;
      case 14:
        return u = r.type, c = xa(u, r.pendingProps), c = xa(u.type, c), ff(n, r, u, c, o);
      case 15:
        return ca(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : xa(u, c), Or(n, r), r.tag = 1, Rn(u) ? (n = !0, Nc(r)) : n = !1, Oe(r, o), ih(r, u, c), $c(r, u, c, o), ph(null, r, u, !0, n, o);
      case 19:
        return np(n, r, o);
      case 22:
        return Nl(n, r, o);
    }
    throw Error(p(156, r.tag));
  };
  function vp(n, r) {
    return mn(n, r);
  }
  function Zy(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ga(n, r, o, u) {
    return new Zy(n, r, o, u);
  }
  function hp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Jy(n) {
    if (typeof n == "function")
      return hp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === ut)
        return 11;
      if (n === Rt)
        return 14;
    }
    return 2;
  }
  function Ko(n, r) {
    var o = n.alternate;
    return o === null ? (o = Ga(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function wf(n, r, o, u, c, v) {
    var b = 2;
    if (u = n, typeof n == "function")
      hp(n) && (b = 1);
    else if (typeof n == "string")
      b = 5;
    else
      e:
        switch (n) {
          case He:
            return $l(o.children, c, v, r);
          case pt:
            b = 8, c |= 8;
            break;
          case Mt:
            return n = Ga(12, o, r, c | 2), n.elementType = Mt, n.lanes = v, n;
          case Ne:
            return n = Ga(13, o, r, c), n.elementType = Ne, n.lanes = v, n;
          case Xe:
            return n = Ga(19, o, r, c), n.elementType = Xe, n.lanes = v, n;
          case Re:
            return qs(o, c, v, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case vt:
                  b = 10;
                  break e;
                case ot:
                  b = 9;
                  break e;
                case ut:
                  b = 11;
                  break e;
                case Rt:
                  b = 14;
                  break e;
                case st:
                  b = 16, u = null;
                  break e;
              }
            throw Error(p(130, n == null ? n : typeof n, ""));
        }
    return r = Ga(b, o, r, c), r.elementType = n, r.type = u, r.lanes = v, r;
  }
  function $l(n, r, o, u) {
    return n = Ga(7, n, u, r), n.lanes = o, n;
  }
  function qs(n, r, o, u) {
    return n = Ga(22, n, u, r), n.elementType = Re, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function Xs(n, r, o) {
    return n = Ga(6, n, null, r), n.lanes = o, n;
  }
  function Wl(n, r, o) {
    return r = Ga(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function eg(n, r, o, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = uu(0), this.expirationTimes = uu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = uu(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Rf(n, r, o, u, c, v, b, _, z) {
    return n = new eg(n, r, o, _, z), r === 1 ? (r = 1, v === !0 && (r |= 8)) : r = 0, v = Ga(3, null, null, r), n.current = v, v.stateNode = n, v.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Vd(v), n;
  }
  function Dh(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Qe, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function mp(n) {
    if (!n)
      return _i;
    n = n._reactInternals;
    e: {
      if (gt(n) !== n || n.tag !== 1)
        throw Error(p(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Rn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(p(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (Rn(o))
        return ks(n, o, r);
    }
    return r;
  }
  function Oh(n, r, o, u, c, v, b, _, z) {
    return n = Rf(o, u, !0, n, c, v, b, _, z), n.context = mp(null), o = n.current, u = Mr(), c = In(o), v = Ji(u, c), v.callback = r ?? null, Vo(o, v, c), n.current.lanes = c, Vi(n, c, u), Nr(n, u), n;
  }
  function Ks(n, r, o, u) {
    var c = r.current, v = Mr(), b = In(c);
    return o = mp(o), r.context === null ? r.context = o : r.pendingContext = o, r = Ji(v, b), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Vo(c, r, b), n !== null && (Lr(n, c, b, v), Bc(n, c, b)), b;
  }
  function Tf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function kh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function yp(n, r) {
    kh(n, r), (n = n.alternate) && kh(n, r);
  }
  function zh() {
    return null;
  }
  var gp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function xf(n) {
    this._internalRoot = n;
  }
  io.prototype.render = xf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(p(409));
    Ks(n, r, null, null);
  }, io.prototype.unmount = xf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Xo(function() {
        Ks(null, n, null, null);
      }), r[Xi] = null;
    }
  };
  function io(n) {
    this._internalRoot = n;
  }
  io.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = fu();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Zt.length && r !== 0 && r < Zt[o].priority; o++)
        ;
      Zt.splice(o, 0, n), o === 0 && bc(n);
    }
  };
  function Sp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function _f(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Mh() {
  }
  function tg(n, r, o, u, c) {
    if (c) {
      if (typeof u == "function") {
        var v = u;
        u = function() {
          var q = Tf(b);
          v.call(q);
        };
      }
      var b = Oh(r, u, n, 0, null, !1, !1, "", Mh);
      return n._reactRootContainer = b, n[Xi] = b.current, bu(n.nodeType === 8 ? n.parentNode : n), Xo(), b;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof u == "function") {
      var _ = u;
      u = function() {
        var q = Tf(z);
        _.call(q);
      };
    }
    var z = Rf(n, 0, !1, null, null, !1, !1, "", Mh);
    return n._reactRootContainer = z, n[Xi] = z.current, bu(n.nodeType === 8 ? n.parentNode : n), Xo(function() {
      Ks(r, z, o, u);
    }), z;
  }
  function Df(n, r, o, u, c) {
    var v = o._reactRootContainer;
    if (v) {
      var b = v;
      if (typeof c == "function") {
        var _ = c;
        c = function() {
          var z = Tf(b);
          _.call(z);
        };
      }
      Ks(r, b, n, c);
    } else
      b = tg(o, r, n, c, u);
    return Tf(b);
  }
  vl = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = ai(r.pendingLanes);
          o !== 0 && (Ri(r, o | 1), Nr(r, Ft()), !(Ot & 6) && (Fu = Ft() + 500, aa()));
        }
        break;
      case 13:
        Xo(function() {
          var u = Zi(n, 1);
          if (u !== null) {
            var c = Mr();
            Lr(u, n, 1, c);
          }
        }), yp(n, 1);
    }
  }, cu = function(n) {
    if (n.tag === 13) {
      var r = Zi(n, 134217728);
      if (r !== null) {
        var o = Mr();
        Lr(r, n, 134217728, o);
      }
      yp(n, 134217728);
    }
  }, Ht = function(n) {
    if (n.tag === 13) {
      var r = In(n), o = Zi(n, r);
      if (o !== null) {
        var u = Mr();
        Lr(o, n, r, u);
      }
      yp(n, r);
    }
  }, fu = function() {
    return $t;
  }, du = function(n, r) {
    var o = $t;
    try {
      return $t = n, r();
    } finally {
      $t = o;
    }
  }, Pr = function(n, r, o) {
    switch (r) {
      case "input":
        if (vn(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var u = o[r];
            if (u !== n && u.form === n.form) {
              var c = Je(u);
              if (!c)
                throw Error(p(90));
              be(u), vn(u, c);
            }
          }
        }
        break;
      case "textarea":
        ga(n, o);
        break;
      case "select":
        r = o.value, r != null && Gn(n, !!o.multiple, r, !1);
    }
  }, pl = Vu, ru = Xo;
  var ng = { usingClientEntryPoint: !1, Events: [Os, Cu, Je, Na, So, Vu] }, Wu = { findFiberByHostInstance: ja, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, rg = { bundleType: Wu.bundleType, version: Wu.version, rendererPackageName: Wu.rendererPackageName, rendererConfig: Wu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _e.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Vn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Wu.findFiberByHostInstance || zh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Of = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Of.isDisabled && Of.supportsFiber)
      try {
        Co = Of.inject(rg), Jr = Of;
      } catch {
      }
  }
  return ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ng, ei.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Sp(r))
      throw Error(p(200));
    return Dh(n, r, null, o);
  }, ei.createRoot = function(n, r) {
    if (!Sp(n))
      throw Error(p(299));
    var o = !1, u = "", c = gp;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Rf(n, 1, !1, null, null, o, !1, u, c), n[Xi] = r.current, bu(n.nodeType === 8 ? n.parentNode : n), new xf(r);
  }, ei.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(p(188)) : (n = Object.keys(n).join(","), Error(p(268, n)));
    return n = Vn(r), n = n === null ? null : n.stateNode, n;
  }, ei.flushSync = function(n) {
    return Xo(n);
  }, ei.hydrate = function(n, r, o) {
    if (!_f(r))
      throw Error(p(200));
    return Df(null, n, r, !0, o);
  }, ei.hydrateRoot = function(n, r, o) {
    if (!Sp(n))
      throw Error(p(405));
    var u = o != null && o.hydratedSources || null, c = !1, v = "", b = gp;
    if (o != null && (o.unstable_strictMode === !0 && (c = !0), o.identifierPrefix !== void 0 && (v = o.identifierPrefix), o.onRecoverableError !== void 0 && (b = o.onRecoverableError)), r = Oh(r, null, n, 1, o ?? null, c, !1, v, b), n[Xi] = r.current, bu(n), u)
      for (n = 0; n < u.length; n++)
        o = u[n], c = o._getVersion, c = c(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, c] : r.mutableSourceEagerHydrationData.push(
          o,
          c
        );
    return new io(r);
  }, ei.render = function(n, r, o) {
    if (!_f(r))
      throw Error(p(200));
    return Df(null, n, r, !1, o);
  }, ei.unmountComponentAtNode = function(n) {
    if (!_f(n))
      throw Error(p(40));
    return n._reactRootContainer ? (Xo(function() {
      Df(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Xi] = null;
      });
    }), !0) : !1;
  }, ei.unstable_batchedUpdates = Vu, ei.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!_f(o))
      throw Error(p(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(p(38));
    return Df(n, r, o, !1, u);
  }, ei.version = "18.2.0-next-9e3b772b8-20220608", ei;
}
var ti = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var SR;
function ck() {
  return SR || (SR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var d = rn, y = PR(), p = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, h = !1;
    function T(e) {
      h = e;
    }
    function x(e) {
      if (!h) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        A("warn", e, a);
      }
    }
    function E(e) {
      if (!h) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        A("error", e, a);
      }
    }
    function A(e, t, a) {
      {
        var i = p.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var F = 0, j = 1, ee = 2, P = 3, K = 4, Z = 5, fe = 6, me = 7, we = 8, Se = 9, oe = 10, re = 11, _e = 12, J = 13, Qe = 14, He = 15, pt = 16, Mt = 17, vt = 18, ot = 19, ut = 21, Ne = 22, Xe = 23, Rt = 24, st = 25, Re = !0, ge = !1, Be = !1, w = !1, U = !1, k = !0, $ = !1, W = !1, te = !0, X = !0, ue = !0, ce = /* @__PURE__ */ new Set(), Te = {}, Me = {};
    function Dt(e, t) {
      be(e, t), be(e + "Capture", t);
    }
    function be(e, t) {
      Te[e] && E("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Te[e] = t;
      {
        var a = e.toLowerCase();
        Me[a] = e, e === "onDoubleClick" && (Me.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ce.add(t[i]);
    }
    var Ct = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Yt = Object.prototype.hasOwnProperty;
    function pn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function wn(e) {
      try {
        return vn(e), !1;
      } catch {
        return !0;
      }
    }
    function vn(e) {
      return "" + e;
    }
    function Rr(e, t) {
      if (wn(e))
        return E("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, pn(e)), vn(e);
    }
    function sr(e) {
      if (wn(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pn(e)), vn(e);
    }
    function Pn(e, t) {
      if (wn(e))
        return E("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, pn(e)), vn(e);
    }
    function Gn(e, t) {
      if (wn(e))
        return E("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, pn(e)), vn(e);
    }
    function Tr(e) {
      if (wn(e))
        return E("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", pn(e)), vn(e);
    }
    function xr(e) {
      if (wn(e))
        return E("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", pn(e)), vn(e);
    }
    var ga = 0, cr = 1, Zr = 2, xn = 3, Ur = 4, gi = 5, Sa = 6, xe = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ke = xe + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", wt = new RegExp("^[" + xe + "][" + Ke + "]*$"), Qt = {}, qt = {};
    function jn(e) {
      return Yt.call(qt, e) ? !0 : Yt.call(Qt, e) ? !1 : wt.test(e) ? (qt[e] = !0, !0) : (Qt[e] = !0, E("Invalid attribute name: `%s`", e), !1);
    }
    function _n(e, t, a) {
      return t !== null ? t.type === ga : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function _r(e, t, a, i) {
      if (a !== null && a.type === ga)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function tn(e, t, a, i) {
      if (t === null || typeof t > "u" || _r(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case xn:
            return !t;
          case Ur:
            return t === !1;
          case gi:
            return isNaN(t);
          case Sa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Pr(e) {
      return Kt.hasOwnProperty(e) ? Kt[e] : null;
    }
    function Xt(e, t, a, i, l, s, f) {
      this.acceptsBooleans = t === Zr || t === xn || t === Ur, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Kt = {}, ni = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ni.forEach(function(e) {
      Kt[e] = new Xt(
        e,
        ga,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Kt[t] = new Xt(
        t,
        cr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        Zr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        Zr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        xn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        xn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        Ur,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        Sa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        gi,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Na = /[\-\:]([a-z])/g, So = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Na, So);
      Kt[t] = new Xt(
        t,
        cr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Na, So);
      Kt[t] = new Xt(
        t,
        cr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Na, So);
      Kt[t] = new Xt(
        t,
        cr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        cr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var pl = "xlinkHref";
    Kt[pl] = new Xt(
      "xlinkHref",
      cr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        cr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var ru = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Bi = !1;
    function Eo(e) {
      !Bi && ru.test(e) && (Bi = !0, E("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ea(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Rr(a, t), i.sanitizeURL && Eo("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Ur) {
          if (e.hasAttribute(s)) {
            var m = e.getAttribute(s);
            return m === "" ? !0 : tn(t, a, i, !1) ? m : m === "" + a ? a : m;
          }
        } else if (e.hasAttribute(s)) {
          if (tn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === xn)
            return a;
          f = e.getAttribute(s);
        }
        return tn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function Si(e, t, a, i) {
      {
        if (!jn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Rr(a, t), l === "" + a ? a : l;
      }
    }
    function ba(e, t, a, i) {
      var l = Pr(t);
      if (!_n(t, l, i)) {
        if (tn(t, a, l, i) && (a = null), i || l === null) {
          if (jn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Rr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = l.mustUseProperty;
        if (f) {
          var m = l.propertyName;
          if (a === null) {
            var g = l.type;
            e[m] = g === xn ? !1 : "";
          } else
            e[m] = a;
          return;
        }
        var C = l.attributeName, R = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(C);
        else {
          var N = l.type, M;
          N === xn || N === Ur && a === !0 ? M = "" : (Rr(a, C), M = "" + a, l.sanitizeURL && Eo(M.toString())), R ? e.setAttributeNS(R, C, M) : e.setAttribute(C, M);
        }
      }
    }
    var Ei = Symbol.for("react.element"), jr = Symbol.for("react.portal"), Ca = Symbol.for("react.fragment"), bi = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), de = Symbol.for("react.provider"), De = Symbol.for("react.context"), Pe = Symbol.for("react.forward_ref"), gt = Symbol.for("react.suspense"), Nt = Symbol.for("react.suspense_list"), St = Symbol.for("react.memo"), et = Symbol.for("react.lazy"), Vn = Symbol.for("react.scope"), hn = Symbol.for("react.debug_trace_mode"), mn = Symbol.for("react.offscreen"), fr = Symbol.for("react.legacy_hidden"), Ci = Symbol.for("react.cache"), au = Symbol.for("react.tracing_marker"), Ft = Symbol.iterator, ud = "@@iterator";
    function ri(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ft && e[Ft] || e[ud];
      return typeof t == "function" ? t : null;
    }
    var Tt = Object.assign, wi = 0, bo, iu, Co, Jr, ds, Fr, ps;
    function vs() {
    }
    vs.__reactDisabledLog = !0;
    function Sc() {
      {
        if (wi === 0) {
          bo = console.log, iu = console.info, Co = console.warn, Jr = console.error, ds = console.group, Fr = console.groupCollapsed, ps = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: vs,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        wi++;
      }
    }
    function ou() {
      {
        if (wi--, wi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Tt({}, e, {
              value: bo
            }),
            info: Tt({}, e, {
              value: iu
            }),
            warn: Tt({}, e, {
              value: Co
            }),
            error: Tt({}, e, {
              value: Jr
            }),
            group: Tt({}, e, {
              value: ds
            }),
            groupCollapsed: Tt({}, e, {
              value: Fr
            }),
            groupEnd: Tt({}, e, {
              value: ps
            })
          });
        }
        wi < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var wo = p.ReactCurrentDispatcher, ai;
    function Hr(e, t, a) {
      {
        if (ai === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            ai = i && i[1] || "";
          }
        return `
` + ai + e;
      }
    }
    var Ro = !1, To;
    {
      var xo = typeof WeakMap == "function" ? WeakMap : Map;
      To = new xo();
    }
    function lu(e, t) {
      if (!e || Ro)
        return "";
      {
        var a = To.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Ro = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = wo.current, wo.current = null, Sc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (G) {
              i = G;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (G) {
              i = G;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            i = G;
          }
          e();
        }
      } catch (G) {
        if (G && i && typeof G.stack == "string") {
          for (var m = G.stack.split(`
`), g = i.stack.split(`
`), C = m.length - 1, R = g.length - 1; C >= 1 && R >= 0 && m[C] !== g[R]; )
            R--;
          for (; C >= 1 && R >= 0; C--, R--)
            if (m[C] !== g[R]) {
              if (C !== 1 || R !== 1)
                do
                  if (C--, R--, R < 0 || m[C] !== g[R]) {
                    var N = `
` + m[C].replace(" at new ", " at ");
                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && To.set(e, N), N;
                  }
                while (C >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        Ro = !1, wo.current = s, ou(), Error.prepareStackTrace = l;
      }
      var M = e ? e.displayName || e.name : "", Y = M ? Hr(M) : "";
      return typeof e == "function" && To.set(e, Y), Y;
    }
    function uu(e, t, a) {
      return lu(e, !0);
    }
    function Vi(e, t, a) {
      return lu(e, !1);
    }
    function sd(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ri(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return lu(e, sd(e));
      if (typeof e == "string")
        return Hr(e);
      switch (e) {
        case gt:
          return Hr("Suspense");
        case Nt:
          return Hr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Pe:
            return Vi(e.render);
          case St:
            return Ri(e.type, t, a);
          case et: {
            var i = e, l = i._payload, s = i._init;
            try {
              return Ri(s(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function $t(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Z:
          return Hr(e.type);
        case pt:
          return Hr("Lazy");
        case J:
          return Hr("Suspense");
        case ot:
          return Hr("SuspenseList");
        case F:
        case ee:
        case He:
          return Vi(e.type);
        case re:
          return Vi(e.type.render);
        case j:
          return uu(e.type);
        default:
          return "";
      }
    }
    function su(e) {
      try {
        var t = "", a = e;
        do
          t += $t(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function vl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function cu(e) {
      return e.displayName || "Context";
    }
    function Ht(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ca:
          return "Fragment";
        case jr:
          return "Portal";
        case O:
          return "Profiler";
        case bi:
          return "StrictMode";
        case gt:
          return "Suspense";
        case Nt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case De:
            var t = e;
            return cu(t) + ".Consumer";
          case de:
            var a = e;
            return cu(a._context) + ".Provider";
          case Pe:
            return vl(e, e.render, "ForwardRef");
          case St:
            var i = e.displayName || null;
            return i !== null ? i : Ht(e.type) || "Memo";
          case et: {
            var l = e, s = l._payload, f = l._init;
            try {
              return Ht(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function fu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function du(e) {
      return e.displayName || "Context";
    }
    function ht(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Rt:
          return "Cache";
        case Se:
          var i = a;
          return du(i) + ".Consumer";
        case oe:
          var l = a;
          return du(l._context) + ".Provider";
        case vt:
          return "DehydratedFragment";
        case re:
          return fu(a, a.render, "ForwardRef");
        case me:
          return "Fragment";
        case Z:
          return a;
        case K:
          return "Portal";
        case P:
          return "Root";
        case fe:
          return "Text";
        case pt:
          return Ht(a);
        case we:
          return a === bi ? "StrictMode" : "Mode";
        case Ne:
          return "Offscreen";
        case _e:
          return "Profiler";
        case ut:
          return "Scope";
        case J:
          return "Suspense";
        case ot:
          return "SuspenseList";
        case st:
          return "TracingMarker";
        case j:
        case F:
        case Mt:
        case ee:
        case Qe:
        case He:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var hl = p.ReactDebugCurrentFrame, Dn = null, ea = !1;
    function Br() {
      {
        if (Dn === null)
          return null;
        var e = Dn._debugOwner;
        if (e !== null && typeof e < "u")
          return ht(e);
      }
      return null;
    }
    function _o() {
      return Dn === null ? "" : su(Dn);
    }
    function Ln() {
      hl.getCurrentStack = null, Dn = null, ea = !1;
    }
    function Zt(e) {
      hl.getCurrentStack = e === null ? null : _o, Dn = e, ea = !1;
    }
    function Ec() {
      return Dn;
    }
    function ta(e) {
      ea = e;
    }
    function tr(e) {
      return "" + e;
    }
    function Ti(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return xr(e), e;
        default:
          return "";
      }
    }
    var bc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function $i(e, t) {
      bc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || E("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || E("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Do(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Cc(e) {
      return e._valueTracker;
    }
    function Aa(e) {
      e._valueTracker = null;
    }
    function Oo(e) {
      var t = "";
      return e && (Do(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ko(e) {
      var t = Do(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      xr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(m) {
            xr(m), i = "" + m, s.call(this, m);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(m) {
            xr(m), i = "" + m;
          },
          stopTracking: function() {
            Aa(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ua(e) {
      Cc(e) || (e._valueTracker = ko(e));
    }
    function pu(e) {
      if (!e)
        return !1;
      var t = Cc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Oo(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function zo(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Mo = !1, ml = !1, vu = !1, hs = !1;
    function ii(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function S(e, t) {
      var a = e, i = t.checked, l = Tt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function D(e, t) {
      $i("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ml && (E("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Br() || "A component", t.type), ml = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Mo && (E("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Br() || "A component", t.type), Mo = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ti(t.value != null ? t.value : i),
        controlled: ii(t)
      };
    }
    function Q(e, t) {
      var a = e, i = t.checked;
      i != null && ba(a, "checked", i, !1);
    }
    function ne(e, t) {
      var a = e;
      {
        var i = ii(t);
        !a._wrapperState.controlled && i && !hs && (E("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), hs = !0), a._wrapperState.controlled && !i && !vu && (E("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), vu = !0);
      }
      Q(e, t);
      var l = Ti(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = tr(l)) : a.value !== tr(l) && (a.value = tr(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? nt(a, t.type, l) : t.hasOwnProperty("defaultValue") && nt(a, t.type, Ti(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Ee(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = tr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var m = i.name;
      m !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, m !== "" && (i.name = m);
    }
    function at(e, t) {
      var a = e;
      ne(a, t), ze(a, t);
    }
    function ze(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Rr(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var f = l[s];
          if (!(f === e || f.form !== e.form)) {
            var m = qh(f);
            if (!m)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            pu(f), ne(f, m);
          }
        }
      }
    }
    function nt(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || zo(e.ownerDocument) !== e) && (a == null ? e.defaultValue = tr(e._wrapperState.initialValue) : e.defaultValue !== tr(a) && (e.defaultValue = tr(a)));
    }
    var xt = !1, Bt = !1, sn = !1;
    function nn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? d.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Bt || (Bt = !0, E("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (sn || (sn = !0, E("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !xt && (E("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), xt = !0);
    }
    function cn(e, t) {
      t.value != null && e.setAttribute("value", tr(Ti(t.value)));
    }
    var yn = Array.isArray;
    function Lt(e) {
      return yn(e);
    }
    var Wi;
    Wi = !1;
    function hu() {
      var e = Br();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var ms = ["value", "defaultValue"];
    function cd(e) {
      {
        $i("select", e);
        for (var t = 0; t < ms.length; t++) {
          var a = ms[t];
          if (e[a] != null) {
            var i = Lt(e[a]);
            e.multiple && !i ? E("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, hu()) : !e.multiple && i && E("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, hu());
          }
        }
      }
    }
    function oi(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, f = {}, m = 0; m < s.length; m++)
          f["$" + s[m]] = !0;
        for (var g = 0; g < l.length; g++) {
          var C = f.hasOwnProperty("$" + l[g].value);
          l[g].selected !== C && (l[g].selected = C), C && i && (l[g].defaultSelected = !0);
        }
      } else {
        for (var R = tr(Ti(a)), N = null, M = 0; M < l.length; M++) {
          if (l[M].value === R) {
            l[M].selected = !0, i && (l[M].defaultSelected = !0);
            return;
          }
          N === null && !l[M].disabled && (N = l[M]);
        }
        N !== null && (N.selected = !0);
      }
    }
    function ys(e, t) {
      return Tt({}, t, {
        value: void 0
      });
    }
    function gs(e, t) {
      var a = e;
      cd(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Wi && (E("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Wi = !0);
    }
    function fd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? oi(a, !!t.multiple, i, !1) : t.defaultValue != null && oi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Ry(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? oi(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? oi(a, !!t.multiple, t.defaultValue, !0) : oi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Ty(e, t) {
      var a = e, i = t.value;
      i != null && oi(a, !!t.multiple, i, !1);
    }
    var dd = !1;
    function pd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Tt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: tr(a._wrapperState.initialValue)
      });
      return i;
    }
    function Rv(e, t) {
      var a = e;
      $i("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !dd && (E("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Br() || "A component"), dd = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          E("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Lt(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            s = l;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Ti(i)
      };
    }
    function Tv(e, t) {
      var a = e, i = Ti(t.value), l = Ti(t.defaultValue);
      if (i != null) {
        var s = tr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = tr(l));
    }
    function xv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function vd(e, t) {
      Tv(e, t);
    }
    var Ii = "http://www.w3.org/1999/xhtml", xy = "http://www.w3.org/1998/Math/MathML", hd = "http://www.w3.org/2000/svg";
    function wc(e) {
      switch (e) {
        case "svg":
          return hd;
        case "math":
          return xy;
        default:
          return Ii;
      }
    }
    function md(e, t) {
      return e == null || e === Ii ? wc(t) : e === hd && t === "foreignObject" ? Ii : e;
    }
    var _y = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Rc, _v = _y(function(e, t) {
      if (e.namespaceURI === hd && !("innerHTML" in e)) {
        Rc = Rc || document.createElement("div"), Rc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Rc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), na = 1, Yi = 3, $n = 8, li = 9, yl = 11, Tc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Yi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Dv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, mu = {
      animationIterationCount: !0,
      aspectRatio: !0,
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
      gridArea: !0,
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Ov(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var kv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(mu).forEach(function(e) {
      kv.forEach(function(t) {
        mu[Ov(t, e)] = mu[e];
      });
    });
    function xc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(mu.hasOwnProperty(e) && mu[e]) ? t + "px" : (Gn(t, e), ("" + t).trim());
    }
    var yu = /([A-Z])/g, Dy = /^ms-/;
    function Oy(e) {
      return e.replace(yu, "-$1").toLowerCase().replace(Dy, "-ms-");
    }
    var zv = function() {
    };
    {
      var Mv = /^(?:webkit|moz|o)[A-Z]/, Lv = /^-ms-/, Ss = /-(.)/g, gu = /;\s*$/, Su = {}, Eu = {}, Nv = !1, yd = !1, gd = function(e) {
        return e.replace(Ss, function(t, a) {
          return a.toUpperCase();
        });
      }, Sd = function(e) {
        Su.hasOwnProperty(e) && Su[e] || (Su[e] = !0, E(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          gd(e.replace(Lv, "ms-"))
        ));
      }, Av = function(e) {
        Su.hasOwnProperty(e) && Su[e] || (Su[e] = !0, E("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Uv = function(e, t) {
        Eu.hasOwnProperty(t) && Eu[t] || (Eu[t] = !0, E(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(gu, "")));
      }, Pv = function(e, t) {
        Nv || (Nv = !0, E("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ky = function(e, t) {
        yd || (yd = !0, E("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      zv = function(e, t) {
        e.indexOf("-") > -1 ? Sd(e) : Mv.test(e) ? Av(e) : gu.test(t) && Uv(e, t), typeof t == "number" && (isNaN(t) ? Pv(e, t) : isFinite(t) || ky(e, t));
      };
    }
    var zy = zv;
    function My(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Oy(i)) + ":", t += xc(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function jv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || zy(i, t[i]);
          var s = xc(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Ly(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Pa(e) {
      var t = {};
      for (var a in e)
        for (var i = Dv[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function Es(e, t) {
      {
        if (!t)
          return;
        var a = Pa(e), i = Pa(t), l = {};
        for (var s in a) {
          var f = a[s], m = i[s];
          if (m && f !== m) {
            var g = f + "," + m;
            if (l[g])
              continue;
            l[g] = !0, E("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Ly(e[f]) ? "Removing" : "Updating", f, m);
          }
        }
      }
    }
    var Fv = {
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
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Hv = Tt({
      menuitem: !0
    }, Fv), Bv = "__html";
    function _c(e, t) {
      if (t) {
        if (Hv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Bv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && E("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Qi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Dc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Vv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
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
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
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
    }, ui = {}, Ed = new RegExp("^(aria)-[" + Ke + "]*$"), bs = new RegExp("^(aria)[A-Z][" + Ke + "]*$");
    function bd(e, t) {
      {
        if (Yt.call(ui, t) && ui[t])
          return !0;
        if (bs.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Vv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return E("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ui[t] = !0, !0;
          if (t !== i)
            return E("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ui[t] = !0, !0;
        }
        if (Ed.test(t)) {
          var l = t.toLowerCase(), s = Vv.hasOwnProperty(l) ? l : null;
          if (s == null)
            return ui[t] = !0, !1;
          if (t !== s)
            return E("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), ui[t] = !0, !0;
        }
      }
      return !0;
    }
    function $v(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = bd(e, i);
          l || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? E("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && E("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Oc(e, t) {
      Qi(e, t) || $v(e, t);
    }
    var gl = !1;
    function Cd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !gl && (gl = !0, e === "select" && t.multiple ? E("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : E("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var wd = function() {
    };
    {
      var nr = {}, Rd = /^on./, Wv = /^on[^A-Z]/, Iv = new RegExp("^(aria)-[" + Ke + "]*$"), Yv = new RegExp("^(aria)[A-Z][" + Ke + "]*$");
      wd = function(e, t, a, i) {
        if (Yt.call(nr, t) && nr[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return E("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), nr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var m = f.hasOwnProperty(l) ? f[l] : null;
          if (m != null)
            return E("Invalid event handler property `%s`. Did you mean `%s`?", t, m), nr[t] = !0, !0;
          if (Rd.test(t))
            return E("Unknown event handler property `%s`. It will be ignored.", t), nr[t] = !0, !0;
        } else if (Rd.test(t))
          return Wv.test(t) && E("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), nr[t] = !0, !0;
        if (Iv.test(t) || Yv.test(t))
          return !0;
        if (l === "innerhtml")
          return E("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), nr[t] = !0, !0;
        if (l === "aria")
          return E("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), nr[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return E("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), nr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return E("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), nr[t] = !0, !0;
        var g = Pr(t), C = g !== null && g.type === ga;
        if (Dc.hasOwnProperty(l)) {
          var R = Dc[l];
          if (R !== t)
            return E("Invalid DOM property `%s`. Did you mean `%s`?", t, R), nr[t] = !0, !0;
        } else if (!C && t !== l)
          return E("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), nr[t] = !0, !0;
        return typeof a == "boolean" && _r(t, a, g, !1) ? (a ? E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), nr[t] = !0, !0) : C ? !0 : _r(t, a, g, !1) ? (nr[t] = !0, !1) : ((a === "false" || a === "true") && g !== null && g.type === xn && (E("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), nr[t] = !0), !0);
      };
    }
    var Qv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = wd(e, l, t[l], a);
          s || i.push(l);
        }
        var f = i.map(function(m) {
          return "`" + m + "`";
        }).join(", ");
        i.length === 1 ? E("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && E("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Gv(e, t, a) {
      Qi(e, t) || Qv(e, t, a);
    }
    var Gi = 1, Cs = 2, Sl = 4, Ny = Gi | Cs | Sl, ws = null;
    function Rs(e) {
      ws !== null && E("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ws = e;
    }
    function Ay() {
      ws === null && E("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ws = null;
    }
    function qv(e) {
      return e === ws;
    }
    function kc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Yi ? t.parentNode : t;
    }
    var fn = null, Lo = null, qi = null;
    function bu(e) {
      var t = Qu(e);
      if (t) {
        if (typeof fn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = qh(a);
          fn(t.stateNode, t.type, i);
        }
      }
    }
    function Xv(e) {
      fn = e;
    }
    function zc(e) {
      Lo ? qi ? qi.push(e) : qi = [e] : Lo = e;
    }
    function Ts() {
      return Lo !== null || qi !== null;
    }
    function xs() {
      if (Lo) {
        var e = Lo, t = qi;
        if (Lo = null, qi = null, bu(e), t)
          for (var a = 0; a < t.length; a++)
            bu(t[a]);
      }
    }
    var El = function(e, t) {
      return e(t);
    }, Td = function() {
    }, xd = !1;
    function Uy() {
      var e = Ts();
      e && (Td(), xs());
    }
    function _d(e, t, a) {
      if (xd)
        return e(t, a);
      xd = !0;
      try {
        return El(e, t, a);
      } finally {
        xd = !1, Uy();
      }
    }
    function Mc(e, t, a) {
      El = e, Td = a;
    }
    function Lc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Dd(e, t, a) {
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
        case "onMouseEnter":
          return !!(a.disabled && Lc(t));
        default:
          return !1;
      }
    }
    function bl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = qh(a);
      if (i === null)
        return null;
      var l = i[t];
      if (Dd(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var _s = !1;
    if (Ct)
      try {
        var Cl = {};
        Object.defineProperty(Cl, "passive", {
          get: function() {
            _s = !0;
          }
        }), window.addEventListener("test", Cl, Cl), window.removeEventListener("test", Cl, Cl);
      } catch {
        _s = !1;
      }
    function Kv(e, t, a, i, l, s, f, m, g) {
      var C = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, C);
      } catch (R) {
        this.onError(R);
      }
    }
    var Od = Kv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var kd = document.createElement("react");
      Od = function(t, a, i, l, s, f, m, g, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var R = document.createEvent("Event"), N = !1, M = !0, Y = window.event, G = Object.getOwnPropertyDescriptor(window, "event");
        function ae() {
          kd.removeEventListener(ie, tt, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = Y);
        }
        var je = Array.prototype.slice.call(arguments, 3);
        function tt() {
          N = !0, ae(), a.apply(i, je), M = !1;
        }
        var qe, Pt = !1, kt = !1;
        function B(V) {
          if (qe = V.error, Pt = !0, qe === null && V.colno === 0 && V.lineno === 0 && (kt = !0), V.defaultPrevented && qe != null && typeof qe == "object")
            try {
              qe._suppressLogging = !0;
            } catch {
            }
        }
        var ie = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", B), kd.addEventListener(ie, tt, !1), R.initEvent(ie, !1, !1), kd.dispatchEvent(R), G && Object.defineProperty(window, "event", G), N && M && (Pt ? kt && (qe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : qe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(qe)), window.removeEventListener("error", B), !N)
          return ae(), Kv.apply(this, arguments);
      };
    }
    var Py = Od, No = !1, si = null, Ds = !1, Ao = null, xi = {
      onError: function(e) {
        No = !0, si = e;
      }
    };
    function wl(e, t, a, i, l, s, f, m, g) {
      No = !1, si = null, Py.apply(xi, arguments);
    }
    function Xi(e, t, a, i, l, s, f, m, g) {
      if (wl.apply(this, arguments), No) {
        var C = Md();
        Ds || (Ds = !0, Ao = C);
      }
    }
    function zd() {
      if (Ds) {
        var e = Ao;
        throw Ds = !1, Ao = null, e;
      }
    }
    function jy() {
      return No;
    }
    function Md() {
      if (No) {
        var e = si;
        return No = !1, si = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ja(e) {
      return e._reactInternals;
    }
    function Os(e) {
      return e._reactInternals !== void 0;
    }
    function Cu(e, t) {
      e._reactInternals = t;
    }
    var Je = (
      /*                      */
      0
    ), Uo = (
      /*                */
      1
    ), gn = (
      /*                    */
      2
    ), Et = (
      /*                       */
      4
    ), Gt = (
      /*                */
      16
    ), Jt = (
      /*                 */
      32
    ), _i = (
      /*                     */
      64
    ), ft = (
      /*                   */
      128
    ), Nn = (
      /*            */
      256
    ), ra = (
      /*                          */
      512
    ), Fa = (
      /*                     */
      1024
    ), Rn = (
      /*                      */
      2048
    ), Ha = (
      /*                    */
      4096
    ), Po = (
      /*                   */
      8192
    ), ks = (
      /*             */
      16384
    ), Nc = Rn | Et | _i | ra | Fa | ks, Zv = (
      /*               */
      32767
    ), wa = (
      /*                   */
      32768
    ), rr = (
      /*                */
      65536
    ), zs = (
      /* */
      131072
    ), Ld = (
      /*                       */
      1048576
    ), Nd = (
      /*                    */
      2097152
    ), aa = (
      /*                 */
      4194304
    ), jo = (
      /*                */
      8388608
    ), ia = (
      /*               */
      16777216
    ), Rl = (
      /*              */
      33554432
    ), wu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Et | Fa | 0
    ), oa = gn | Et | Gt | Jt | ra | Ha | Po, Dr = Et | _i | ra | Po, Ba = Rn | Gt, dr = aa | jo | Nd, Ki = p.ReactCurrentOwner;
    function Ra(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (gn | Ha)) !== Je && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === P ? a : null;
    }
    function Ad(e) {
      if (e.tag === J) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Ac(e) {
      return e.tag === P ? e.stateNode.containerInfo : null;
    }
    function Ud(e) {
      return Ra(e) === e;
    }
    function Ta(e) {
      {
        var t = Ki.current;
        if (t !== null && t.tag === j) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || E("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ht(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = ja(e);
      return l ? Ra(l) === l : !1;
    }
    function la(e) {
      if (Ra(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Sn(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ra(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var m = s.return;
          if (m !== null) {
            i = l = m;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var g = s.child; g; ) {
            if (g === i)
              return la(s), e;
            if (g === l)
              return la(s), t;
            g = g.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = f;
        else {
          for (var C = !1, R = s.child; R; ) {
            if (R === i) {
              C = !0, i = s, l = f;
              break;
            }
            if (R === l) {
              C = !0, l = s, i = f;
              break;
            }
            R = R.sibling;
          }
          if (!C) {
            for (R = f.child; R; ) {
              if (R === i) {
                C = !0, i = f, l = s;
                break;
              }
              if (R === l) {
                C = !0, l = f, i = s;
                break;
              }
              R = R.sibling;
            }
            if (!C)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== P)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Va(e) {
      var t = Sn(e);
      return t !== null ? Pd(t) : null;
    }
    function Pd(e) {
      if (e.tag === Z || e.tag === fe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Pd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Jv(e) {
      var t = Sn(e);
      return t !== null ? Uc(t) : null;
    }
    function Uc(e) {
      if (e.tag === Z || e.tag === fe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== K) {
          var a = Uc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Pc = y.unstable_scheduleCallback, eh = y.unstable_cancelCallback, jc = y.unstable_shouldYield, th = y.unstable_requestPaint, On = y.unstable_now, jd = y.unstable_getCurrentPriorityLevel, Fc = y.unstable_ImmediatePriority, xa = y.unstable_UserBlockingPriority, Di = y.unstable_NormalPriority, Hc = y.unstable_LowPriority, Fo = y.unstable_IdlePriority, Fd = y.unstable_yieldValue, Hd = y.unstable_setDisableYieldValue, Ho = null, ar = null, Oe = null, Fn = !1, pr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Bd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return E("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        te && (e = Tt({}, e, {
          getLaneLabelMap: Vo,
          injectProfilingHooks: Ji
        })), Ho = t.inject(e), ar = t;
      } catch (a) {
        E("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function nh(e, t) {
      if (ar && typeof ar.onScheduleFiberRoot == "function")
        try {
          ar.onScheduleFiberRoot(Ho, e, t);
        } catch (a) {
          Fn || (Fn = !0, E("React instrumentation encountered an error: %s", a));
        }
    }
    function Zi(e, t) {
      if (ar && typeof ar.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & ft) === ft;
          if (X) {
            var i;
            switch (t) {
              case Or:
                i = Fc;
                break;
              case vr:
                i = xa;
                break;
              case to:
                i = Di;
                break;
              case Hs:
                i = Fo;
                break;
              default:
                i = Di;
                break;
            }
            ar.onCommitFiberRoot(Ho, e, i, a);
          }
        } catch (l) {
          Fn || (Fn = !0, E("React instrumentation encountered an error: %s", l));
        }
    }
    function Bo(e) {
      if (ar && typeof ar.onPostCommitFiberRoot == "function")
        try {
          ar.onPostCommitFiberRoot(Ho, e);
        } catch (t) {
          Fn || (Fn = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function Vd(e) {
      if (ar && typeof ar.onCommitFiberUnmount == "function")
        try {
          ar.onCommitFiberUnmount(Ho, e);
        } catch (t) {
          Fn || (Fn = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function qn(e) {
      if (typeof Fd == "function" && (Hd(e), T(e)), ar && typeof ar.setStrictMode == "function")
        try {
          ar.setStrictMode(Ho, e);
        } catch (t) {
          Fn || (Fn = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function Ji(e) {
      Oe = e;
    }
    function Vo() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < En; a++) {
          var i = Fy(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Bc(e) {
      Oe !== null && typeof Oe.markCommitStarted == "function" && Oe.markCommitStarted(e);
    }
    function $d() {
      Oe !== null && typeof Oe.markCommitStopped == "function" && Oe.markCommitStopped();
    }
    function $o(e) {
      Oe !== null && typeof Oe.markComponentRenderStarted == "function" && Oe.markComponentRenderStarted(e);
    }
    function Tl() {
      Oe !== null && typeof Oe.markComponentRenderStopped == "function" && Oe.markComponentRenderStopped();
    }
    function rh(e) {
      Oe !== null && typeof Oe.markComponentPassiveEffectMountStarted == "function" && Oe.markComponentPassiveEffectMountStarted(e);
    }
    function Wd() {
      Oe !== null && typeof Oe.markComponentPassiveEffectMountStopped == "function" && Oe.markComponentPassiveEffectMountStopped();
    }
    function Vc(e) {
      Oe !== null && typeof Oe.markComponentPassiveEffectUnmountStarted == "function" && Oe.markComponentPassiveEffectUnmountStarted(e);
    }
    function ah() {
      Oe !== null && typeof Oe.markComponentPassiveEffectUnmountStopped == "function" && Oe.markComponentPassiveEffectUnmountStopped();
    }
    function ih(e) {
      Oe !== null && typeof Oe.markComponentLayoutEffectMountStarted == "function" && Oe.markComponentLayoutEffectMountStarted(e);
    }
    function oh() {
      Oe !== null && typeof Oe.markComponentLayoutEffectMountStopped == "function" && Oe.markComponentLayoutEffectMountStopped();
    }
    function $c(e) {
      Oe !== null && typeof Oe.markComponentLayoutEffectUnmountStarted == "function" && Oe.markComponentLayoutEffectUnmountStarted(e);
    }
    function Ru() {
      Oe !== null && typeof Oe.markComponentLayoutEffectUnmountStopped == "function" && Oe.markComponentLayoutEffectUnmountStopped();
    }
    function Wc(e, t, a) {
      Oe !== null && typeof Oe.markComponentErrored == "function" && Oe.markComponentErrored(e, t, a);
    }
    function lh(e, t, a) {
      Oe !== null && typeof Oe.markComponentSuspended == "function" && Oe.markComponentSuspended(e, t, a);
    }
    function uh(e) {
      Oe !== null && typeof Oe.markLayoutEffectsStarted == "function" && Oe.markLayoutEffectsStarted(e);
    }
    function Tu() {
      Oe !== null && typeof Oe.markLayoutEffectsStopped == "function" && Oe.markLayoutEffectsStopped();
    }
    function sh(e) {
      Oe !== null && typeof Oe.markPassiveEffectsStarted == "function" && Oe.markPassiveEffectsStarted(e);
    }
    function Ms() {
      Oe !== null && typeof Oe.markPassiveEffectsStopped == "function" && Oe.markPassiveEffectsStopped();
    }
    function ci(e) {
      Oe !== null && typeof Oe.markRenderStarted == "function" && Oe.markRenderStarted(e);
    }
    function Ls() {
      Oe !== null && typeof Oe.markRenderYielded == "function" && Oe.markRenderYielded();
    }
    function xu() {
      Oe !== null && typeof Oe.markRenderStopped == "function" && Oe.markRenderStopped();
    }
    function xl(e) {
      Oe !== null && typeof Oe.markRenderScheduled == "function" && Oe.markRenderScheduled(e);
    }
    function Id(e, t) {
      Oe !== null && typeof Oe.markForceUpdateScheduled == "function" && Oe.markForceUpdateScheduled(e, t);
    }
    function Wo(e, t) {
      Oe !== null && typeof Oe.markStateUpdateScheduled == "function" && Oe.markStateUpdateScheduled(e, t);
    }
    var rt = (
      /*                         */
      0
    ), _t = (
      /*                 */
      1
    ), it = (
      /*                    */
      2
    ), kn = (
      /*               */
      8
    ), $a = (
      /*              */
      16
    ), Ic = Math.clz32 ? Math.clz32 : _l, Yc = Math.log, Yd = Math.LN2;
    function _l(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Yc(t) / Yd | 0) | 0;
    }
    var En = 31, le = (
      /*                        */
      0
    ), At = (
      /*                          */
      0
    ), lt = (
      /*                        */
      1
    ), Oi = (
      /*    */
      2
    ), _a = (
      /*             */
      4
    ), Dl = (
      /*            */
      8
    ), bn = (
      /*                     */
      16
    ), Ol = (
      /*                */
      32
    ), Io = (
      /*                       */
      4194240
    ), kl = (
      /*                        */
      64
    ), Wa = (
      /*                        */
      128
    ), ua = (
      /*                        */
      256
    ), zl = (
      /*                        */
      512
    ), Ns = (
      /*                        */
      1024
    ), As = (
      /*                        */
      2048
    ), Qc = (
      /*                        */
      4096
    ), Gc = (
      /*                        */
      8192
    ), qc = (
      /*                        */
      16384
    ), Xc = (
      /*                       */
      32768
    ), Kc = (
      /*                       */
      65536
    ), Zc = (
      /*                       */
      131072
    ), Jc = (
      /*                       */
      262144
    ), ef = (
      /*                       */
      524288
    ), Ml = (
      /*                       */
      1048576
    ), tf = (
      /*                       */
      2097152
    ), Ll = (
      /*                            */
      130023424
    ), eo = (
      /*                             */
      4194304
    ), nf = (
      /*                             */
      8388608
    ), Us = (
      /*                             */
      16777216
    ), rf = (
      /*                             */
      33554432
    ), af = (
      /*                             */
      67108864
    ), Qd = eo, _u = (
      /*          */
      134217728
    ), of = (
      /*                          */
      268435455
    ), Du = (
      /*               */
      268435456
    ), Yo = (
      /*                        */
      536870912
    ), sa = (
      /*                   */
      1073741824
    );
    function Fy(e) {
      {
        if (e & lt)
          return "Sync";
        if (e & Oi)
          return "InputContinuousHydration";
        if (e & _a)
          return "InputContinuous";
        if (e & Dl)
          return "DefaultHydration";
        if (e & bn)
          return "Default";
        if (e & Ol)
          return "TransitionHydration";
        if (e & Io)
          return "Transition";
        if (e & Ll)
          return "Retry";
        if (e & _u)
          return "SelectiveHydration";
        if (e & Du)
          return "IdleHydration";
        if (e & Yo)
          return "Idle";
        if (e & sa)
          return "Offscreen";
      }
    }
    var dn = -1, lf = kl, uf = eo;
    function Ou(e) {
      switch (Wn(e)) {
        case lt:
          return lt;
        case Oi:
          return Oi;
        case _a:
          return _a;
        case Dl:
          return Dl;
        case bn:
          return bn;
        case Ol:
          return Ol;
        case kl:
        case Wa:
        case ua:
        case zl:
        case Ns:
        case As:
        case Qc:
        case Gc:
        case qc:
        case Xc:
        case Kc:
        case Zc:
        case Jc:
        case ef:
        case Ml:
        case tf:
          return e & Io;
        case eo:
        case nf:
        case Us:
        case rf:
        case af:
          return e & Ll;
        case _u:
          return _u;
        case Du:
          return Du;
        case Yo:
          return Yo;
        case sa:
          return sa;
        default:
          return E("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ps(e, t) {
      var a = e.pendingLanes;
      if (a === le)
        return le;
      var i = le, l = e.suspendedLanes, s = e.pingedLanes, f = a & of;
      if (f !== le) {
        var m = f & ~l;
        if (m !== le)
          i = Ou(m);
        else {
          var g = f & s;
          g !== le && (i = Ou(g));
        }
      } else {
        var C = a & ~l;
        C !== le ? i = Ou(C) : s !== le && (i = Ou(s));
      }
      if (i === le)
        return le;
      if (t !== le && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === le) {
        var R = Wn(i), N = Wn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          R >= N || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          R === bn && (N & Io) !== le
        )
          return t;
      }
      (i & _a) !== le && (i |= a & bn);
      var M = e.entangledLanes;
      if (M !== le)
        for (var Y = e.entanglements, G = i & M; G > 0; ) {
          var ae = Qo(G), je = 1 << ae;
          i |= Y[ae], G &= ~je;
        }
      return i;
    }
    function ch(e, t) {
      for (var a = e.eventTimes, i = dn; t > 0; ) {
        var l = Qo(t), s = 1 << l, f = a[l];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function sf(e, t) {
      switch (e) {
        case lt:
        case Oi:
        case _a:
          return t + 250;
        case Dl:
        case bn:
        case Ol:
        case kl:
        case Wa:
        case ua:
        case zl:
        case Ns:
        case As:
        case Qc:
        case Gc:
        case qc:
        case Xc:
        case Kc:
        case Zc:
        case Jc:
        case ef:
        case Ml:
        case tf:
          return t + 5e3;
        case eo:
        case nf:
        case Us:
        case rf:
        case af:
          return dn;
        case _u:
        case Du:
        case Yo:
        case sa:
          return dn;
        default:
          return E("Should have found matching lanes. This is a bug in React."), dn;
      }
    }
    function Hy(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var m = Qo(f), g = 1 << m, C = s[m];
        C === dn ? ((g & i) === le || (g & l) !== le) && (s[m] = sf(g, t)) : C <= t && (e.expiredLanes |= g), f &= ~g;
      }
    }
    function By(e) {
      return Ou(e.pendingLanes);
    }
    function Gd(e) {
      var t = e.pendingLanes & ~sa;
      return t !== le ? t : t & sa ? sa : le;
    }
    function ku(e) {
      return (e & lt) !== le;
    }
    function js(e) {
      return (e & of) !== le;
    }
    function cf(e) {
      return (e & Ll) === e;
    }
    function Vy(e) {
      var t = lt | _a | bn;
      return (e & t) === le;
    }
    function fh(e) {
      return (e & Io) === e;
    }
    function Fs(e, t) {
      var a = Oi | _a | Dl | bn;
      return (t & a) !== le;
    }
    function dh(e, t) {
      return (t & e.expiredLanes) !== le;
    }
    function qd(e) {
      return (e & Io) !== le;
    }
    function Xd() {
      var e = lf;
      return lf <<= 1, (lf & Io) === le && (lf = kl), e;
    }
    function $y() {
      var e = uf;
      return uf <<= 1, (uf & Ll) === le && (uf = eo), e;
    }
    function Wn(e) {
      return e & -e;
    }
    function Xn(e) {
      return Wn(e);
    }
    function Qo(e) {
      return 31 - Ic(e);
    }
    function ff(e) {
      return Qo(e);
    }
    function ca(e, t) {
      return (e & t) !== le;
    }
    function Nl(e, t) {
      return (e & t) === t;
    }
    function bt(e, t) {
      return e | t;
    }
    function zu(e, t) {
      return e & ~t;
    }
    function Kd(e, t) {
      return e & t;
    }
    function ph(e) {
      return e;
    }
    function vh(e, t) {
      return e !== At && e < t ? e : t;
    }
    function df(e) {
      for (var t = [], a = 0; a < En; a++)
        t.push(e);
      return t;
    }
    function Al(e, t, a) {
      e.pendingLanes |= t, t !== Yo && (e.suspendedLanes = le, e.pingedLanes = le);
      var i = e.eventTimes, l = ff(t);
      i[l] = a;
    }
    function Zd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = Qo(i), s = 1 << l;
        a[l] = dn, i &= ~s;
      }
    }
    function Jd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function ep(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = le, e.pingedLanes = le, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var m = Qo(f), g = 1 << m;
        i[m] = le, l[m] = dn, s[m] = dn, f &= ~g;
      }
    }
    function Mu(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = Qo(l), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~f;
      }
    }
    function Wy(e, t) {
      var a = Wn(t), i;
      switch (a) {
        case _a:
          i = Oi;
          break;
        case bn:
          i = Dl;
          break;
        case kl:
        case Wa:
        case ua:
        case zl:
        case Ns:
        case As:
        case Qc:
        case Gc:
        case qc:
        case Xc:
        case Kc:
        case Zc:
        case Jc:
        case ef:
        case Ml:
        case tf:
        case eo:
        case nf:
        case Us:
        case rf:
        case af:
          i = Ol;
          break;
        case Yo:
          i = Du;
          break;
        default:
          i = At;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== At ? At : i;
    }
    function tp(e, t, a) {
      if (pr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = ff(a), s = 1 << l, f = i[l];
          f.add(t), a &= ~s;
        }
    }
    function pf(e, t) {
      if (pr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = ff(t), s = 1 << l, f = a[l];
          f.size > 0 && (f.forEach(function(m) {
            var g = m.alternate;
            (g === null || !i.has(g)) && i.add(m);
          }), f.clear()), t &= ~s;
        }
    }
    function np(e, t) {
      return null;
    }
    var Or = lt, vr = _a, to = bn, Hs = Yo, Ul = At;
    function Ia() {
      return Ul;
    }
    function Kn(e) {
      Ul = e;
    }
    function Bs(e, t) {
      var a = Ul;
      try {
        return Ul = e, t();
      } finally {
        Ul = a;
      }
    }
    function kr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Iy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function rp(e, t) {
      return e !== 0 && e < t;
    }
    function Vs(e) {
      var t = Wn(e);
      return rp(Or, t) ? rp(vr, t) ? js(t) ? to : Hs : vr : Or;
    }
    function Zn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var hh;
    function Ve(e) {
      hh = e;
    }
    function Lu(e) {
      hh(e);
    }
    var $s;
    function mh(e) {
      $s = e;
    }
    var yh;
    function Ws(e) {
      yh = e;
    }
    var Is;
    function ap(e) {
      Is = e;
    }
    var ip;
    function gh(e) {
      ip = e;
    }
    var vf = !1, Nu = [], ki = null, Tn = null, ir = null, Ya = /* @__PURE__ */ new Map(), Au = /* @__PURE__ */ new Map(), no = [], fi = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Sh(e) {
      return fi.indexOf(e) > -1;
    }
    function zi(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function Eh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ki = null;
          break;
        case "dragenter":
        case "dragleave":
          Tn = null;
          break;
        case "mouseover":
        case "mouseout":
          ir = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ya.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Au.delete(i);
          break;
        }
      }
    }
    function Uu(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = zi(t, a, i, l, s);
        if (t !== null) {
          var m = Qu(t);
          m !== null && $s(m);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var g = e.targetContainers;
      return l !== null && g.indexOf(l) === -1 && g.push(l), e;
    }
    function bh(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return ki = Uu(ki, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = l;
          return Tn = Uu(Tn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var m = l;
          return ir = Uu(ir, e, t, a, i, m), !0;
        }
        case "pointerover": {
          var g = l, C = g.pointerId;
          return Ya.set(C, Uu(Ya.get(C) || null, e, t, a, i, g)), !0;
        }
        case "gotpointercapture": {
          var R = l, N = R.pointerId;
          return Au.set(N, Uu(Au.get(N) || null, e, t, a, i, R)), !0;
        }
      }
      return !1;
    }
    function op(e) {
      var t = ec(e.target);
      if (t !== null) {
        var a = Ra(t);
        if (a !== null) {
          var i = a.tag;
          if (i === J) {
            var l = Ad(a);
            if (l !== null) {
              e.blockedOn = l, ip(e.priority, function() {
                yh(a);
              });
              return;
            }
          } else if (i === P) {
            var s = a.stateNode;
            if (Zn(s)) {
              e.blockedOn = Ac(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Ch(e) {
      for (var t = Is(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < no.length && rp(t, no[i].priority); i++)
        ;
      no.splice(i, 0, a), i === 0 && op(a);
    }
    function hf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Pl(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          Rs(s), l.target.dispatchEvent(s), Ay();
        } else {
          var f = Qu(i);
          return f !== null && $s(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Ys(e, t, a) {
      hf(e) && a.delete(t);
    }
    function lp() {
      vf = !1, ki !== null && hf(ki) && (ki = null), Tn !== null && hf(Tn) && (Tn = null), ir !== null && hf(ir) && (ir = null), Ya.forEach(Ys), Au.forEach(Ys);
    }
    function zr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, vf || (vf = !0, y.unstable_scheduleCallback(y.unstable_NormalPriority, lp)));
    }
    function Ot(e) {
      if (Nu.length > 0) {
        zr(Nu[0], e);
        for (var t = 1; t < Nu.length; t++) {
          var a = Nu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ki !== null && zr(ki, e), Tn !== null && zr(Tn, e), ir !== null && zr(ir, e);
      var i = function(m) {
        return zr(m, e);
      };
      Ya.forEach(i), Au.forEach(i);
      for (var l = 0; l < no.length; l++) {
        var s = no[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; no.length > 0; ) {
        var f = no[0];
        if (f.blockedOn !== null)
          break;
        op(f), f.blockedOn === null && no.shift();
      }
    }
    var zn = p.ReactCurrentBatchConfig, An = !0;
    function or(e) {
      An = !!e;
    }
    function Da() {
      return An;
    }
    function Pu(e, t, a) {
      var i = Vr(t), l;
      switch (i) {
        case Or:
          l = Jn;
          break;
        case vr:
          l = Qs;
          break;
        case to:
        default:
          l = ro;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function Jn(e, t, a, i) {
      var l = Ia(), s = zn.transition;
      zn.transition = null;
      try {
        Kn(Or), ro(e, t, a, i);
      } finally {
        Kn(l), zn.transition = s;
      }
    }
    function Qs(e, t, a, i) {
      var l = Ia(), s = zn.transition;
      zn.transition = null;
      try {
        Kn(vr), ro(e, t, a, i);
      } finally {
        Kn(l), zn.transition = s;
      }
    }
    function ro(e, t, a, i) {
      An && mf(e, t, a, i);
    }
    function mf(e, t, a, i) {
      var l = Pl(e, t, a, i);
      if (l === null) {
        fg(e, t, i, ju, a), Eh(e, i);
        return;
      }
      if (bh(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Eh(e, i), t & Sl && Sh(e)) {
        for (; l !== null; ) {
          var s = Qu(l);
          s !== null && Lu(s);
          var f = Pl(e, t, a, i);
          if (f === null && fg(e, t, i, ju, a), f === l)
            break;
          l = f;
        }
        l !== null && i.stopPropagation();
        return;
      }
      fg(e, t, i, null, a);
    }
    var ju = null;
    function Pl(e, t, a, i) {
      ju = null;
      var l = kc(i), s = ec(l);
      if (s !== null) {
        var f = Ra(s);
        if (f === null)
          s = null;
        else {
          var m = f.tag;
          if (m === J) {
            var g = Ad(f);
            if (g !== null)
              return g;
            s = null;
          } else if (m === P) {
            var C = f.stateNode;
            if (Zn(C))
              return Ac(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return ju = s, null;
    }
    function Vr(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Or;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return vr;
        case "message": {
          var t = jd();
          switch (t) {
            case Fc:
              return Or;
            case xa:
              return vr;
            case Di:
            case Hc:
              return to;
            case Fo:
              return Hs;
            default:
              return to;
          }
        }
        default:
          return to;
      }
    }
    function up(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Fu(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function ao(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function yf(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var jl = null, Mi = null, Go = null;
    function qo(e) {
      return jl = e, Mi = Sf(), !0;
    }
    function gf() {
      jl = null, Mi = null, Go = null;
    }
    function Hu() {
      if (Go)
        return Go;
      var e, t = Mi, a = t.length, i, l = Sf(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === l[s - i]; i++)
        ;
      var m = i > 1 ? 1 - i : void 0;
      return Go = l.slice(e, m), Go;
    }
    function Sf() {
      return "value" in jl ? jl.value : jl.textContent;
    }
    function Fl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Hl() {
      return !0;
    }
    function Mr() {
      return !1;
    }
    function In(e) {
      function t(a, i, l, s, f) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var m in e)
          if (e.hasOwnProperty(m)) {
            var g = e[m];
            g ? this[m] = g(s) : this[m] = s[m];
          }
        var C = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return C ? this.isDefaultPrevented = Hl : this.isDefaultPrevented = Mr, this.isPropagationStopped = Mr, this;
      }
      return Tt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Hl);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Hl);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Hl
      }), t;
    }
    var Lr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Nr = In(Lr), Bu = Tt({}, Lr, {
      view: 0,
      detail: 0
    }), sp = In(Bu), Gs, cp, Qa;
    function wh(e) {
      e !== Qa && (Qa && e.type === "mousemove" ? (Gs = e.screenX - Qa.screenX, cp = e.screenY - Qa.screenY) : (Gs = 0, cp = 0), Qa = e);
    }
    var Vu = Tt({}, Bu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Cf,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (wh(e), Gs);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : cp;
      }
    }), Xo = In(Vu), fp = Tt({}, Vu, {
      dataTransfer: 0
    }), Bl = In(fp), Rh = Tt({}, Bu, {
      relatedTarget: 0
    }), Ef = In(Rh), dp = Tt({}, Lr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), bf = In(dp), Yy = Tt({}, Lr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Qy = In(Yy), Th = Tt({}, Lr, {
      data: 0
    }), pp = In(Th), Vl = pp, Gy = {
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
    }, $u = {
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
    function xh(e) {
      if (e.key) {
        var t = Gy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Fl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? $u[e.keyCode] || "Unidentified" : "";
    }
    var Un = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function qy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Un[e];
      return i ? !!a[i] : !1;
    }
    function Cf(e) {
      return qy;
    }
    var Xy = Tt({}, Bu, {
      key: xh,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Cf,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Fl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Ky = In(Xy), _h = Tt({}, Vu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), vp = In(_h), Zy = Tt({}, Bu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Cf
    }), Ga = In(Zy), hp = Tt({}, Lr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Jy = In(hp), Ko = Tt({}, Vu, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), wf = In(Ko), $l = [9, 13, 27, 32], qs = 229, Xs = Ct && "CompositionEvent" in window, Wl = null;
    Ct && "documentMode" in document && (Wl = document.documentMode);
    var eg = Ct && "TextEvent" in window && !Wl, Rf = Ct && (!Xs || Wl && Wl > 8 && Wl <= 11), Dh = 32, mp = String.fromCharCode(Dh);
    function Oh() {
      Dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Dt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Dt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Dt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ks = !1;
    function Tf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function kh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function yp(e, t) {
      return e === "keydown" && t.keyCode === qs;
    }
    function zh(e, t) {
      switch (e) {
        case "keyup":
          return $l.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== qs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function gp(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function xf(e) {
      return e.locale === "ko";
    }
    var io = !1;
    function Sp(e, t, a, i, l) {
      var s, f;
      if (Xs ? s = kh(t) : io ? zh(t, i) && (s = "onCompositionEnd") : yp(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Rf && !xf(i) && (!io && s === "onCompositionStart" ? io = qo(l) : s === "onCompositionEnd" && io && (f = Hu()));
      var m = Uh(a, s);
      if (m.length > 0) {
        var g = new pp(s, t, null, i, l);
        if (e.push({
          event: g,
          listeners: m
        }), f)
          g.data = f;
        else {
          var C = gp(i);
          C !== null && (g.data = C);
        }
      }
    }
    function _f(e, t) {
      switch (e) {
        case "compositionend":
          return gp(t);
        case "keypress":
          var a = t.which;
          return a !== Dh ? null : (Ks = !0, mp);
        case "textInput":
          var i = t.data;
          return i === mp && Ks ? null : i;
        default:
          return null;
      }
    }
    function Mh(e, t) {
      if (io) {
        if (e === "compositionend" || !Xs && zh(e, t)) {
          var a = Hu();
          return gf(), io = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Tf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Rf && !xf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function tg(e, t, a, i, l) {
      var s;
      if (eg ? s = _f(t, i) : s = Mh(t, i), !s)
        return null;
      var f = Uh(a, "onBeforeInput");
      if (f.length > 0) {
        var m = new Vl("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: m,
          listeners: f
        }), m.data = s;
      }
    }
    function Df(e, t, a, i, l, s, f) {
      Sp(e, t, a, i, l), tg(e, t, a, i, l);
    }
    var ng = {
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
    function Wu(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!ng[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function rg(e) {
      if (!Ct)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Of() {
      Dt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      zc(i);
      var l = Uh(t, "onChange");
      if (l.length > 0) {
        var s = new Nr("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: l
        });
      }
    }
    var r = null, o = null;
    function u(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, o, e, kc(e)), _d(v, t);
    }
    function v(e) {
      NE(e, 0);
    }
    function b(e) {
      var t = Af(e);
      if (pu(t))
        return e;
    }
    function _(e, t) {
      if (e === "change")
        return t;
    }
    var z = !1;
    Ct && (z = rg("input") && (!document.documentMode || document.documentMode > 9));
    function q(e, t) {
      r = e, o = t, r.attachEvent("onpropertychange", he);
    }
    function ve() {
      r && (r.detachEvent("onpropertychange", he), r = null, o = null);
    }
    function he(e) {
      e.propertyName === "value" && b(o) && c(e);
    }
    function pe(e, t, a) {
      e === "focusin" ? (ve(), q(t, a)) : e === "focusout" && ve();
    }
    function Ae(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return b(o);
    }
    function $e(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ye(e, t) {
      if (e === "click")
        return b(t);
    }
    function Hn(e, t) {
      if (e === "input" || e === "change")
        return b(t);
    }
    function H(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || nt(e, "number", e.value);
    }
    function L(e, t, a, i, l, s, f) {
      var m = a ? Af(a) : window, g, C;
      if (u(m) ? g = _ : Wu(m) ? z ? g = Hn : (g = Ae, C = pe) : $e(m) && (g = Ye), g) {
        var R = g(t, a);
        if (R) {
          n(e, R, i, l);
          return;
        }
      }
      C && C(t, m, a), t === "focusout" && H(m);
    }
    function I() {
      be("onMouseEnter", ["mouseout", "mouseover"]), be("onMouseLeave", ["mouseout", "mouseover"]), be("onPointerEnter", ["pointerout", "pointerover"]), be("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Ce(e, t, a, i, l, s, f) {
      var m = t === "mouseover" || t === "pointerover", g = t === "mouseout" || t === "pointerout";
      if (m && !qv(i)) {
        var C = i.relatedTarget || i.fromElement;
        if (C && (ec(C) || Lp(C)))
          return;
      }
      if (!(!g && !m)) {
        var R;
        if (l.window === l)
          R = l;
        else {
          var N = l.ownerDocument;
          N ? R = N.defaultView || N.parentWindow : R = window;
        }
        var M, Y;
        if (g) {
          var G = i.relatedTarget || i.toElement;
          if (M = a, Y = G ? ec(G) : null, Y !== null) {
            var ae = Ra(Y);
            (Y !== ae || Y.tag !== Z && Y.tag !== fe) && (Y = null);
          }
        } else
          M = null, Y = a;
        if (M !== Y) {
          var je = Xo, tt = "onMouseLeave", qe = "onMouseEnter", Pt = "mouse";
          (t === "pointerout" || t === "pointerover") && (je = vp, tt = "onPointerLeave", qe = "onPointerEnter", Pt = "pointer");
          var kt = M == null ? R : Af(M), B = Y == null ? R : Af(Y), ie = new je(tt, Pt + "leave", M, i, l);
          ie.target = kt, ie.relatedTarget = B;
          var V = null, ye = ec(l);
          if (ye === a) {
            var Fe = new je(qe, Pt + "enter", Y, i, l);
            Fe.target = B, Fe.relatedTarget = kt, V = Fe;
          }
          wT(e, ie, V, M, Y);
        }
      }
    }
    function Ge(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var We = typeof Object.is == "function" ? Object.is : Ge;
    function Ze(e, t) {
      if (We(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!Yt.call(t, s) || !We(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function dt(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function lr(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Vt(e, t) {
      for (var a = dt(e), i = 0, l = 0; a; ) {
        if (a.nodeType === Yi) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = dt(lr(a));
      }
    }
    function Zo(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, s = i.anchorOffset, f = i.focusNode, m = i.focusOffset;
      try {
        l.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return ag(e, l, s, f, m);
    }
    function ag(e, t, a, i, l) {
      var s = 0, f = -1, m = -1, g = 0, C = 0, R = e, N = null;
      e:
        for (; ; ) {
          for (var M = null; R === t && (a === 0 || R.nodeType === Yi) && (f = s + a), R === i && (l === 0 || R.nodeType === Yi) && (m = s + l), R.nodeType === Yi && (s += R.nodeValue.length), (M = R.firstChild) !== null; )
            N = R, R = M;
          for (; ; ) {
            if (R === e)
              break e;
            if (N === t && ++g === a && (f = s), N === i && ++C === l && (m = s), (M = R.nextSibling) !== null)
              break;
            R = N, N = R.parentNode;
          }
          R = M;
        }
      return f === -1 || m === -1 ? null : {
        start: f,
        end: m
      };
    }
    function aT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), m = t.end === void 0 ? f : Math.min(t.end, s);
        if (!l.extend && f > m) {
          var g = m;
          m = f, f = g;
        }
        var C = Vt(e, f), R = Vt(e, m);
        if (C && R) {
          if (l.rangeCount === 1 && l.anchorNode === C.node && l.anchorOffset === C.offset && l.focusNode === R.node && l.focusOffset === R.offset)
            return;
          var N = a.createRange();
          N.setStart(C.node, C.offset), l.removeAllRanges(), f > m ? (l.addRange(N), l.extend(R.node, R.offset)) : (N.setEnd(R.node, R.offset), l.addRange(N));
        }
      }
    }
    function CE(e) {
      return e && e.nodeType === Yi;
    }
    function wE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : CE(e) ? !1 : CE(t) ? wE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function iT(e) {
      return e && e.ownerDocument && wE(e.ownerDocument.documentElement, e);
    }
    function oT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function RE() {
      for (var e = window, t = zo(); t instanceof e.HTMLIFrameElement; ) {
        if (oT(t))
          e = t.contentWindow;
        else
          return t;
        t = zo(e.document);
      }
      return t;
    }
    function ig(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function lT() {
      var e = RE();
      return {
        focusedElem: e,
        selectionRange: ig(e) ? sT(e) : null
      };
    }
    function uT(e) {
      var t = RE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && iT(a)) {
        i !== null && ig(a) && cT(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === na && l.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < l.length; f++) {
          var m = l[f];
          m.element.scrollLeft = m.left, m.element.scrollTop = m.top;
        }
      }
    }
    function sT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Zo(e), t || {
        start: 0,
        end: 0
      };
    }
    function cT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : aT(e, t);
    }
    var fT = Ct && "documentMode" in document && document.documentMode <= 11;
    function dT() {
      Dt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var kf = null, og = null, Ep = null, lg = !1;
    function pT(e) {
      if ("selectionStart" in e && ig(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function vT(e) {
      return e.window === e ? e.document : e.nodeType === li ? e : e.ownerDocument;
    }
    function TE(e, t, a) {
      var i = vT(a);
      if (!(lg || kf == null || kf !== zo(i))) {
        var l = pT(kf);
        if (!Ep || !Ze(Ep, l)) {
          Ep = l;
          var s = Uh(og, "onSelect");
          if (s.length > 0) {
            var f = new Nr("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = kf;
          }
        }
      }
    }
    function hT(e, t, a, i, l, s, f) {
      var m = a ? Af(a) : window;
      switch (t) {
        case "focusin":
          (Wu(m) || m.contentEditable === "true") && (kf = m, og = a, Ep = null);
          break;
        case "focusout":
          kf = null, og = null, Ep = null;
          break;
        case "mousedown":
          lg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          lg = !1, TE(e, i, l);
          break;
        case "selectionchange":
          if (fT)
            break;
        case "keydown":
        case "keyup":
          TE(e, i, l);
      }
    }
    function Lh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var zf = {
      animationend: Lh("Animation", "AnimationEnd"),
      animationiteration: Lh("Animation", "AnimationIteration"),
      animationstart: Lh("Animation", "AnimationStart"),
      transitionend: Lh("Transition", "TransitionEnd")
    }, ug = {}, xE = {};
    Ct && (xE = document.createElement("div").style, "AnimationEvent" in window || (delete zf.animationend.animation, delete zf.animationiteration.animation, delete zf.animationstart.animation), "TransitionEvent" in window || delete zf.transitionend.transition);
    function Nh(e) {
      if (ug[e])
        return ug[e];
      if (!zf[e])
        return e;
      var t = zf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in xE)
          return ug[e] = t[a];
      return e;
    }
    var _E = Nh("animationend"), DE = Nh("animationiteration"), OE = Nh("animationstart"), kE = Nh("transitionend"), zE = /* @__PURE__ */ new Map(), ME = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Iu(e, t) {
      zE.set(e, t), Dt(t, [e]);
    }
    function mT() {
      for (var e = 0; e < ME.length; e++) {
        var t = ME[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Iu(a, "on" + i);
      }
      Iu(_E, "onAnimationEnd"), Iu(DE, "onAnimationIteration"), Iu(OE, "onAnimationStart"), Iu("dblclick", "onDoubleClick"), Iu("focusin", "onFocus"), Iu("focusout", "onBlur"), Iu(kE, "onTransitionEnd");
    }
    function yT(e, t, a, i, l, s, f) {
      var m = zE.get(t);
      if (m !== void 0) {
        var g = Nr, C = t;
        switch (t) {
          case "keypress":
            if (Fl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            g = Ky;
            break;
          case "focusin":
            C = "focus", g = Ef;
            break;
          case "focusout":
            C = "blur", g = Ef;
            break;
          case "beforeblur":
          case "afterblur":
            g = Ef;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Xo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Bl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Ga;
            break;
          case _E:
          case DE:
          case OE:
            g = bf;
            break;
          case kE:
            g = Jy;
            break;
          case "scroll":
            g = sp;
            break;
          case "wheel":
            g = wf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Qy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = vp;
            break;
        }
        var R = (s & Sl) !== 0;
        {
          var N = !R && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", M = bT(a, m, i.type, R, N);
          if (M.length > 0) {
            var Y = new g(m, C, null, i, l);
            e.push({
              event: Y,
              listeners: M
            });
          }
        }
      }
    }
    mT(), I(), Of(), dT(), Oh();
    function gT(e, t, a, i, l, s, f) {
      yT(e, t, a, i, l, s);
      var m = (s & Ny) === 0;
      m && (Ce(e, t, a, i, l), L(e, t, a, i, l), hT(e, t, a, i, l), Df(e, t, a, i, l));
    }
    var bp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], sg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(bp));
    function LE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Xi(i, t, void 0, e), e.currentTarget = null;
    }
    function ST(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], f = s.instance, m = s.currentTarget, g = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          LE(e, g, m), i = f;
        }
      else
        for (var C = 0; C < t.length; C++) {
          var R = t[C], N = R.instance, M = R.currentTarget, Y = R.listener;
          if (N !== i && e.isPropagationStopped())
            return;
          LE(e, Y, M), i = N;
        }
    }
    function NE(e, t) {
      for (var a = (t & Sl) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, f = l.listeners;
        ST(s, f, a);
      }
      zd();
    }
    function ET(e, t, a, i, l) {
      var s = kc(a), f = [];
      gT(f, e, i, a, s, t), NE(f, t);
    }
    function Mn(e, t) {
      sg.has(e) || E('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = X1(t), l = RT(e, a);
      i.has(l) || (AE(t, e, Cs, a), i.add(l));
    }
    function cg(e, t, a) {
      sg.has(e) && !t && E('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Sl), AE(a, e, i, t);
    }
    var Ah = "_reactListening" + Math.random().toString(36).slice(2);
    function Cp(e) {
      if (!e[Ah]) {
        e[Ah] = !0, ce.forEach(function(a) {
          a !== "selectionchange" && (sg.has(a) || cg(a, !1, e), cg(a, !0, e));
        });
        var t = e.nodeType === li ? e : e.ownerDocument;
        t !== null && (t[Ah] || (t[Ah] = !0, cg("selectionchange", !1, t)));
      }
    }
    function AE(e, t, a, i, l) {
      var s = Pu(e, t, a), f = void 0;
      _s && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? ao(e, t, s, f) : Fu(e, t, s) : f !== void 0 ? yf(e, t, s, f) : up(e, t, s);
    }
    function UE(e, t) {
      return e === t || e.nodeType === $n && e.parentNode === t;
    }
    function fg(e, t, a, i, l) {
      var s = i;
      if (!(t & Gi) && !(t & Cs)) {
        var f = l;
        if (i !== null) {
          var m = i;
          e:
            for (; ; ) {
              if (m === null)
                return;
              var g = m.tag;
              if (g === P || g === K) {
                var C = m.stateNode.containerInfo;
                if (UE(C, f))
                  break;
                if (g === K)
                  for (var R = m.return; R !== null; ) {
                    var N = R.tag;
                    if (N === P || N === K) {
                      var M = R.stateNode.containerInfo;
                      if (UE(M, f))
                        return;
                    }
                    R = R.return;
                  }
                for (; C !== null; ) {
                  var Y = ec(C);
                  if (Y === null)
                    return;
                  var G = Y.tag;
                  if (G === Z || G === fe) {
                    m = s = Y;
                    continue e;
                  }
                  C = C.parentNode;
                }
              }
              m = m.return;
            }
        }
      }
      _d(function() {
        return ET(e, t, a, s);
      });
    }
    function wp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function bT(e, t, a, i, l, s) {
      for (var f = t !== null ? t + "Capture" : null, m = i ? f : t, g = [], C = e, R = null; C !== null; ) {
        var N = C, M = N.stateNode, Y = N.tag;
        if (Y === Z && M !== null && (R = M, m !== null)) {
          var G = bl(C, m);
          G != null && g.push(wp(C, G, R));
        }
        if (l)
          break;
        C = C.return;
      }
      return g;
    }
    function Uh(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, f = s.stateNode, m = s.tag;
        if (m === Z && f !== null) {
          var g = f, C = bl(l, a);
          C != null && i.unshift(wp(l, C, g));
          var R = bl(l, t);
          R != null && i.push(wp(l, R, g));
        }
        l = l.return;
      }
      return i;
    }
    function Mf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== Z);
      return e || null;
    }
    function CT(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = Mf(s))
        l++;
      for (var f = 0, m = i; m; m = Mf(m))
        f++;
      for (; l - f > 0; )
        a = Mf(a), l--;
      for (; f - l > 0; )
        i = Mf(i), f--;
      for (var g = l; g--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Mf(a), i = Mf(i);
      }
      return null;
    }
    function PE(e, t, a, i, l) {
      for (var s = t._reactName, f = [], m = a; m !== null && m !== i; ) {
        var g = m, C = g.alternate, R = g.stateNode, N = g.tag;
        if (C !== null && C === i)
          break;
        if (N === Z && R !== null) {
          var M = R;
          if (l) {
            var Y = bl(m, s);
            Y != null && f.unshift(wp(m, Y, M));
          } else if (!l) {
            var G = bl(m, s);
            G != null && f.push(wp(m, G, M));
          }
        }
        m = m.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function wT(e, t, a, i, l) {
      var s = i && l ? CT(i, l) : null;
      i !== null && PE(e, t, i, s, !1), l !== null && a !== null && PE(e, a, l, s, !0);
    }
    function RT(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var qa = !1, Rp = "dangerouslySetInnerHTML", Ph = "suppressContentEditableWarning", Yu = "suppressHydrationWarning", jE = "autoFocus", Zs = "children", Js = "style", jh = "__html", dg, Fh, Tp, FE, Hh, HE, BE;
    dg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Fh = function(e, t) {
      Oc(e, t), Cd(e, t), Gv(e, t, {
        registrationNameDependencies: Te,
        possibleRegistrationNames: Me
      });
    }, HE = Ct && !document.documentMode, Tp = function(e, t, a) {
      if (!qa) {
        var i = Bh(a), l = Bh(t);
        l !== i && (qa = !0, E("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, FE = function(e) {
      if (!qa) {
        qa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), E("Extra attributes from the server: %s", t);
      }
    }, Hh = function(e, t) {
      t === !1 ? E("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : E("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, BE = function(e, t) {
      var a = e.namespaceURI === Ii ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var TT = /\r\n?/g, xT = /\u0000|\uFFFD/g;
    function Bh(e) {
      Tr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(TT, `
`).replace(xT, "");
    }
    function Vh(e, t, a, i) {
      var l = Bh(t), s = Bh(e);
      if (s !== l && (i && (qa || (qa = !0, E('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && Re))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function VE(e) {
      return e.nodeType === li ? e : e.ownerDocument;
    }
    function _T() {
    }
    function $h(e) {
      e.onclick = _T;
    }
    function DT(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Js)
            f && Object.freeze(f), jv(t, f);
          else if (s === Rp) {
            var m = f ? f[jh] : void 0;
            m != null && _v(t, m);
          } else if (s === Zs)
            if (typeof f == "string") {
              var g = e !== "textarea" || f !== "";
              g && Tc(t, f);
            } else
              typeof f == "number" && Tc(t, "" + f);
          else
            s === Ph || s === Yu || s === jE || (Te.hasOwnProperty(s) ? f != null && (typeof f != "function" && Hh(s, f), s === "onScroll" && Mn("scroll", t)) : f != null && ba(t, s, f, l));
        }
    }
    function OT(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], f = t[l + 1];
        s === Js ? jv(e, f) : s === Rp ? _v(e, f) : s === Zs ? Tc(e, f) : ba(e, s, f, i);
      }
    }
    function kT(e, t, a, i) {
      var l, s = VE(a), f, m = i;
      if (m === Ii && (m = wc(e)), m === Ii) {
        if (l = Qi(e, t), !l && e !== e.toLowerCase() && E("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var g = s.createElement("div");
          g.innerHTML = "<script><\/script>";
          var C = g.firstChild;
          f = g.removeChild(C);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var R = f;
          t.multiple ? R.multiple = !0 : t.size && (R.size = t.size);
        }
      } else
        f = s.createElementNS(m, e);
      return m === Ii && !l && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Yt.call(dg, e) && (dg[e] = !0, E("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function zT(e, t) {
      return VE(t).createTextNode(e);
    }
    function MT(e, t, a, i) {
      var l = Qi(t, a);
      Fh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Mn("cancel", e), Mn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Mn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < bp.length; f++)
            Mn(bp[f], e);
          s = a;
          break;
        case "source":
          Mn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Mn("error", e), Mn("load", e), s = a;
          break;
        case "details":
          Mn("toggle", e), s = a;
          break;
        case "input":
          D(e, a), s = S(e, a), Mn("invalid", e);
          break;
        case "option":
          nn(e, a), s = a;
          break;
        case "select":
          gs(e, a), s = ys(e, a), Mn("invalid", e);
          break;
        case "textarea":
          Rv(e, a), s = pd(e, a), Mn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (_c(t, s), DT(t, e, i, s, l), t) {
        case "input":
          Ua(e), Ee(e, a, !1);
          break;
        case "textarea":
          Ua(e), xv(e);
          break;
        case "option":
          cn(e, a);
          break;
        case "select":
          fd(e, a);
          break;
        default:
          typeof s.onClick == "function" && $h(e);
          break;
      }
    }
    function LT(e, t, a, i, l) {
      Fh(t, i);
      var s = null, f, m;
      switch (t) {
        case "input":
          f = S(e, a), m = S(e, i), s = [];
          break;
        case "select":
          f = ys(e, a), m = ys(e, i), s = [];
          break;
        case "textarea":
          f = pd(e, a), m = pd(e, i), s = [];
          break;
        default:
          f = a, m = i, typeof f.onClick != "function" && typeof m.onClick == "function" && $h(e);
          break;
      }
      _c(t, m);
      var g, C, R = null;
      for (g in f)
        if (!(m.hasOwnProperty(g) || !f.hasOwnProperty(g) || f[g] == null))
          if (g === Js) {
            var N = f[g];
            for (C in N)
              N.hasOwnProperty(C) && (R || (R = {}), R[C] = "");
          } else
            g === Rp || g === Zs || g === Ph || g === Yu || g === jE || (Te.hasOwnProperty(g) ? s || (s = []) : (s = s || []).push(g, null));
      for (g in m) {
        var M = m[g], Y = f != null ? f[g] : void 0;
        if (!(!m.hasOwnProperty(g) || M === Y || M == null && Y == null))
          if (g === Js)
            if (M && Object.freeze(M), Y) {
              for (C in Y)
                Y.hasOwnProperty(C) && (!M || !M.hasOwnProperty(C)) && (R || (R = {}), R[C] = "");
              for (C in M)
                M.hasOwnProperty(C) && Y[C] !== M[C] && (R || (R = {}), R[C] = M[C]);
            } else
              R || (s || (s = []), s.push(g, R)), R = M;
          else if (g === Rp) {
            var G = M ? M[jh] : void 0, ae = Y ? Y[jh] : void 0;
            G != null && ae !== G && (s = s || []).push(g, G);
          } else
            g === Zs ? (typeof M == "string" || typeof M == "number") && (s = s || []).push(g, "" + M) : g === Ph || g === Yu || (Te.hasOwnProperty(g) ? (M != null && (typeof M != "function" && Hh(g, M), g === "onScroll" && Mn("scroll", e)), !s && Y !== M && (s = [])) : (s = s || []).push(g, M));
      }
      return R && (Es(R, m[Js]), (s = s || []).push(Js, R)), s;
    }
    function NT(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && Q(e, l);
      var s = Qi(a, i), f = Qi(a, l);
      switch (OT(e, t, s, f), a) {
        case "input":
          ne(e, l);
          break;
        case "textarea":
          Tv(e, l);
          break;
        case "select":
          Ry(e, l);
          break;
      }
    }
    function AT(e) {
      {
        var t = e.toLowerCase();
        return Dc.hasOwnProperty(t) && Dc[t] || null;
      }
    }
    function UT(e, t, a, i, l, s, f) {
      var m, g;
      switch (m = Qi(t, a), Fh(t, a), t) {
        case "dialog":
          Mn("cancel", e), Mn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Mn("load", e);
          break;
        case "video":
        case "audio":
          for (var C = 0; C < bp.length; C++)
            Mn(bp[C], e);
          break;
        case "source":
          Mn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Mn("error", e), Mn("load", e);
          break;
        case "details":
          Mn("toggle", e);
          break;
        case "input":
          D(e, a), Mn("invalid", e);
          break;
        case "option":
          nn(e, a);
          break;
        case "select":
          gs(e, a), Mn("invalid", e);
          break;
        case "textarea":
          Rv(e, a), Mn("invalid", e);
          break;
      }
      _c(t, a);
      {
        g = /* @__PURE__ */ new Set();
        for (var R = e.attributes, N = 0; N < R.length; N++) {
          var M = R[N].name.toLowerCase();
          switch (M) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              g.add(R[N].name);
          }
        }
      }
      var Y = null;
      for (var G in a)
        if (a.hasOwnProperty(G)) {
          var ae = a[G];
          if (G === Zs)
            typeof ae == "string" ? e.textContent !== ae && (a[Yu] !== !0 && Vh(e.textContent, ae, s, f), Y = [Zs, ae]) : typeof ae == "number" && e.textContent !== "" + ae && (a[Yu] !== !0 && Vh(e.textContent, ae, s, f), Y = [Zs, "" + ae]);
          else if (Te.hasOwnProperty(G))
            ae != null && (typeof ae != "function" && Hh(G, ae), G === "onScroll" && Mn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof m == "boolean") {
            var je = void 0, tt = m && $ ? null : Pr(G);
            if (a[Yu] !== !0) {
              if (!(G === Ph || G === Yu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              G === "value" || G === "checked" || G === "selected")) {
                if (G === Rp) {
                  var qe = e.innerHTML, Pt = ae ? ae[jh] : void 0;
                  if (Pt != null) {
                    var kt = BE(e, Pt);
                    kt !== qe && Tp(G, qe, kt);
                  }
                } else if (G === Js) {
                  if (g.delete(G), HE) {
                    var B = My(ae);
                    je = e.getAttribute("style"), B !== je && Tp(G, je, B);
                  }
                } else if (m && !$)
                  g.delete(G.toLowerCase()), je = Si(e, G, ae), ae !== je && Tp(G, je, ae);
                else if (!_n(G, tt, m) && !tn(G, ae, tt, m)) {
                  var ie = !1;
                  if (tt !== null)
                    g.delete(tt.attributeName), je = Ea(e, G, ae, tt);
                  else {
                    var V = i;
                    if (V === Ii && (V = wc(t)), V === Ii)
                      g.delete(G.toLowerCase());
                    else {
                      var ye = AT(G);
                      ye !== null && ye !== G && (ie = !0, g.delete(ye)), g.delete(G);
                    }
                    je = Si(e, G, ae);
                  }
                  var Fe = $;
                  !Fe && ae !== je && !ie && Tp(G, je, ae);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      g.size > 0 && a[Yu] !== !0 && FE(g), t) {
        case "input":
          Ua(e), Ee(e, a, !0);
          break;
        case "textarea":
          Ua(e), xv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && $h(e);
          break;
      }
      return Y;
    }
    function PT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function pg(e, t) {
      {
        if (qa)
          return;
        qa = !0, E("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function vg(e, t) {
      {
        if (qa)
          return;
        qa = !0, E('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function hg(e, t, a) {
      {
        if (qa)
          return;
        qa = !0, E("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function mg(e, t) {
      {
        if (t === "" || qa)
          return;
        qa = !0, E('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function jT(e, t, a) {
      switch (t) {
        case "input":
          at(e, a);
          return;
        case "textarea":
          vd(e, a);
          return;
        case "select":
          Ty(e, a);
          return;
      }
    }
    var xp = function() {
    }, _p = function() {
    };
    {
      var FT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], $E = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], HT = $E.concat(["button"]), BT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], WE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      _p = function(e, t) {
        var a = Tt({}, e || WE), i = {
          tag: t
        };
        return $E.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), HT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), FT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var VT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return BT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, $T = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, IE = {};
      xp = function(e, t, a) {
        a = a || WE;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && E("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = VT(e, l) ? null : i, f = s ? null : $T(e, a), m = s || f;
        if (m) {
          var g = m.tag, C = !!s + "|" + e + "|" + g;
          if (!IE[C]) {
            IE[C] = !0;
            var R = e, N = "";
            if (e === "#text" ? /\S/.test(t) ? R = "Text nodes" : (R = "Whitespace text nodes", N = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : R = "<" + e + ">", s) {
              var M = "";
              g === "table" && e === "tr" && (M += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), E("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", R, g, N, M);
            } else
              E("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", R, g);
          }
        }
      };
    }
    var Wh = "suppressHydrationWarning", Ih = "$", Yh = "/$", Dp = "$?", Op = "$!", WT = "style", yg = null, gg = null;
    function IT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case li:
        case yl: {
          t = i === li ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : md(null, "");
          break;
        }
        default: {
          var s = i === $n ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = md(f, t);
          break;
        }
      }
      {
        var m = t.toLowerCase(), g = _p(null, m);
        return {
          namespace: a,
          ancestorInfo: g
        };
      }
    }
    function YT(e, t, a) {
      {
        var i = e, l = md(i.namespace, t), s = _p(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function Hz(e) {
      return e;
    }
    function QT(e) {
      yg = Da(), gg = lT();
      var t = null;
      return or(!1), t;
    }
    function GT(e) {
      uT(gg), or(yg), yg = null, gg = null;
    }
    function qT(e, t, a, i, l) {
      var s;
      {
        var f = i;
        if (xp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var m = "" + t.children, g = _p(f.ancestorInfo, e);
          xp(null, m, g);
        }
        s = f.namespace;
      }
      var C = kT(e, t, a, s);
      return Mp(l, C), xg(C, t), C;
    }
    function XT(e, t) {
      e.appendChild(t);
    }
    function KT(e, t, a, i, l) {
      switch (MT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function ZT(e, t, a, i, l, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var m = "" + i.children, g = _p(f.ancestorInfo, t);
          xp(null, m, g);
        }
      }
      return LT(e, t, a, i);
    }
    function Sg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function JT(e, t, a, i) {
      {
        var l = a;
        xp(null, e, l.ancestorInfo);
      }
      var s = zT(e, t);
      return Mp(i, s), s;
    }
    function e1() {
      var e = window.event;
      return e === void 0 ? to : Vr(e.type);
    }
    var Eg = typeof setTimeout == "function" ? setTimeout : void 0, t1 = typeof clearTimeout == "function" ? clearTimeout : void 0, bg = -1, YE = typeof Promise == "function" ? Promise : void 0, n1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof YE < "u" ? function(e) {
      return YE.resolve(null).then(e).catch(r1);
    } : Eg;
    function r1(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function a1(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function i1(e, t, a, i, l, s) {
      NT(e, t, a, i, l), xg(e, l);
    }
    function QE(e) {
      Tc(e, "");
    }
    function o1(e, t, a) {
      e.nodeValue = a;
    }
    function l1(e, t) {
      e.appendChild(t);
    }
    function u1(e, t) {
      var a;
      e.nodeType === $n ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && $h(a);
    }
    function s1(e, t, a) {
      e.insertBefore(t, a);
    }
    function c1(e, t, a) {
      e.nodeType === $n ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function f1(e, t) {
      e.removeChild(t);
    }
    function d1(e, t) {
      e.nodeType === $n ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Cg(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === $n) {
          var s = l.data;
          if (s === Yh)
            if (i === 0) {
              e.removeChild(l), Ot(t);
              return;
            } else
              i--;
          else
            (s === Ih || s === Dp || s === Op) && i++;
        }
        a = l;
      } while (a);
      Ot(t);
    }
    function p1(e, t) {
      e.nodeType === $n ? Cg(e.parentNode, t) : e.nodeType === na && Cg(e, t), Ot(e);
    }
    function v1(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function h1(e) {
      e.nodeValue = "";
    }
    function m1(e, t) {
      e = e;
      var a = t[WT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = xc("display", i);
    }
    function y1(e, t) {
      e.nodeValue = t;
    }
    function g1(e) {
      e.nodeType === na ? e.textContent = "" : e.nodeType === li && e.documentElement && e.removeChild(e.documentElement);
    }
    function S1(e, t, a) {
      return e.nodeType !== na || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function E1(e, t) {
      return t === "" || e.nodeType !== Yi ? null : e;
    }
    function b1(e) {
      return e.nodeType !== $n ? null : e;
    }
    function GE(e) {
      return e.data === Dp;
    }
    function wg(e) {
      return e.data === Op;
    }
    function C1(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function w1(e, t) {
      e._reactRetry = t;
    }
    function Qh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === na || t === Yi)
          break;
        if (t === $n) {
          var a = e.data;
          if (a === Ih || a === Op || a === Dp)
            break;
          if (a === Yh)
            return null;
        }
      }
      return e;
    }
    function kp(e) {
      return Qh(e.nextSibling);
    }
    function R1(e) {
      return Qh(e.firstChild);
    }
    function T1(e) {
      return Qh(e.firstChild);
    }
    function x1(e) {
      return Qh(e.nextSibling);
    }
    function _1(e, t, a, i, l, s, f) {
      Mp(s, e), xg(e, a);
      var m;
      {
        var g = l;
        m = g.namespace;
      }
      var C = (s.mode & _t) !== rt;
      return UT(e, t, a, m, i, C, f);
    }
    function D1(e, t, a, i) {
      return Mp(a, e), a.mode & _t, PT(e, t);
    }
    function O1(e, t) {
      Mp(t, e);
    }
    function k1(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === $n) {
          var i = t.data;
          if (i === Yh) {
            if (a === 0)
              return kp(t);
            a--;
          } else
            (i === Ih || i === Op || i === Dp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function qE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === $n) {
          var i = t.data;
          if (i === Ih || i === Op || i === Dp) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Yh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function z1(e) {
      Ot(e);
    }
    function M1(e) {
      Ot(e);
    }
    function L1(e) {
      return e !== "head" && e !== "body";
    }
    function N1(e, t, a, i) {
      var l = !0;
      Vh(t.nodeValue, a, i, l);
    }
    function A1(e, t, a, i, l, s) {
      if (t[Wh] !== !0) {
        var f = !0;
        Vh(i.nodeValue, l, s, f);
      }
    }
    function U1(e, t) {
      t.nodeType === na ? pg(e, t) : t.nodeType === $n || vg(e, t);
    }
    function P1(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === na ? pg(a, t) : t.nodeType === $n || vg(a, t));
      }
    }
    function j1(e, t, a, i, l) {
      (l || t[Wh] !== !0) && (i.nodeType === na ? pg(a, i) : i.nodeType === $n || vg(a, i));
    }
    function F1(e, t, a) {
      hg(e, t);
    }
    function H1(e, t) {
      mg(e, t);
    }
    function B1(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && hg(i, t);
      }
    }
    function V1(e, t) {
      {
        var a = e.parentNode;
        a !== null && mg(a, t);
      }
    }
    function $1(e, t, a, i, l, s) {
      (s || t[Wh] !== !0) && hg(a, i);
    }
    function W1(e, t, a, i, l) {
      (l || t[Wh] !== !0) && mg(a, i);
    }
    function I1(e) {
      E("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Y1(e) {
      Cp(e);
    }
    var Lf = Math.random().toString(36).slice(2), Nf = "__reactFiber$" + Lf, Rg = "__reactProps$" + Lf, zp = "__reactContainer$" + Lf, Tg = "__reactEvents$" + Lf, Q1 = "__reactListeners$" + Lf, G1 = "__reactHandles$" + Lf;
    function q1(e) {
      delete e[Nf], delete e[Rg], delete e[Tg], delete e[Q1], delete e[G1];
    }
    function Mp(e, t) {
      t[Nf] = e;
    }
    function Gh(e, t) {
      t[zp] = e;
    }
    function XE(e) {
      e[zp] = null;
    }
    function Lp(e) {
      return !!e[zp];
    }
    function ec(e) {
      var t = e[Nf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[zp] || a[Nf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = qE(e); l !== null; ) {
              var s = l[Nf];
              if (s)
                return s;
              l = qE(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Qu(e) {
      var t = e[Nf] || e[zp];
      return t && (t.tag === Z || t.tag === fe || t.tag === J || t.tag === P) ? t : null;
    }
    function Af(e) {
      if (e.tag === Z || e.tag === fe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function qh(e) {
      return e[Rg] || null;
    }
    function xg(e, t) {
      e[Rg] = t;
    }
    function X1(e) {
      var t = e[Tg];
      return t === void 0 && (t = e[Tg] = /* @__PURE__ */ new Set()), t;
    }
    var KE = {}, ZE = p.ReactDebugCurrentFrame;
    function Xh(e) {
      if (e) {
        var t = e._owner, a = Ri(e.type, e._source, t ? t.type : null);
        ZE.setExtraStackFrame(a);
      } else
        ZE.setExtraStackFrame(null);
    }
    function oo(e, t, a, i, l) {
      {
        var s = Function.call.bind(Yt);
        for (var f in e)
          if (s(e, f)) {
            var m = void 0;
            try {
              if (typeof e[f] != "function") {
                var g = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              m = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              m = C;
            }
            m && !(m instanceof Error) && (Xh(l), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof m), Xh(null)), m instanceof Error && !(m.message in KE) && (KE[m.message] = !0, Xh(l), E("Failed %s type: %s", a, m.message), Xh(null));
          }
      }
    }
    var _g = [], Kh;
    Kh = [];
    var Il = -1;
    function Gu(e) {
      return {
        current: e
      };
    }
    function fa(e, t) {
      if (Il < 0) {
        E("Unexpected pop.");
        return;
      }
      t !== Kh[Il] && E("Unexpected Fiber popped."), e.current = _g[Il], _g[Il] = null, Kh[Il] = null, Il--;
    }
    function da(e, t, a) {
      Il++, _g[Il] = e.current, Kh[Il] = a, e.current = t;
    }
    var Dg;
    Dg = {};
    var di = {};
    Object.freeze(di);
    var Yl = Gu(di), Jo = Gu(!1), Og = di;
    function Uf(e, t, a) {
      return a && el(t) ? Og : Yl.current;
    }
    function JE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Pf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return di;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var m = ht(e) || "Unknown";
          oo(i, s, "context", m);
        }
        return l && JE(e, t, s), s;
      }
    }
    function Zh() {
      return Jo.current;
    }
    function el(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Jh(e) {
      fa(Jo, e), fa(Yl, e);
    }
    function kg(e) {
      fa(Jo, e), fa(Yl, e);
    }
    function eb(e, t, a) {
      {
        if (Yl.current !== di)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        da(Yl, t, e), da(Jo, a, e);
      }
    }
    function tb(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = ht(e) || "Unknown";
            Dg[s] || (Dg[s] = !0, E("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var m in f)
          if (!(m in l))
            throw new Error((ht(e) || "Unknown") + '.getChildContext(): key "' + m + '" is not defined in childContextTypes.');
        {
          var g = ht(e) || "Unknown";
          oo(l, f, "child context", g);
        }
        return Tt({}, a, f);
      }
    }
    function em(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || di;
        return Og = Yl.current, da(Yl, a, e), da(Jo, Jo.current, e), !0;
      }
    }
    function nb(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = tb(e, t, Og);
          i.__reactInternalMemoizedMergedChildContext = l, fa(Jo, e), fa(Yl, e), da(Yl, l, e), da(Jo, a, e);
        } else
          fa(Jo, e), da(Jo, a, e);
      }
    }
    function K1(e) {
      {
        if (!Ud(e) || e.tag !== j)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case P:
              return t.stateNode.context;
            case j: {
              var a = t.type;
              if (el(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var qu = 0, tm = 1, Ql = null, zg = !1, Mg = !1;
    function rb(e) {
      Ql === null ? Ql = [e] : Ql.push(e);
    }
    function Z1(e) {
      zg = !0, rb(e);
    }
    function ab() {
      zg && Xu();
    }
    function Xu() {
      if (!Mg && Ql !== null) {
        Mg = !0;
        var e = 0, t = Ia();
        try {
          var a = !0, i = Ql;
          for (Kn(Or); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Ql = null, zg = !1;
        } catch (s) {
          throw Ql !== null && (Ql = Ql.slice(e + 1)), Pc(Fc, Xu), s;
        } finally {
          Kn(t), Mg = !1;
        }
      }
      return null;
    }
    var jf = [], Ff = 0, nm = null, rm = 0, Li = [], Ni = 0, tc = null, Gl = 1, ql = "";
    function J1(e) {
      return rc(), (e.flags & Ld) !== Je;
    }
    function ex(e) {
      return rc(), rm;
    }
    function tx() {
      var e = ql, t = Gl, a = t & ~nx(t);
      return a.toString(32) + e;
    }
    function nc(e, t) {
      rc(), jf[Ff++] = rm, jf[Ff++] = nm, nm = e, rm = t;
    }
    function ib(e, t, a) {
      rc(), Li[Ni++] = Gl, Li[Ni++] = ql, Li[Ni++] = tc, tc = e;
      var i = Gl, l = ql, s = am(i) - 1, f = i & ~(1 << s), m = a + 1, g = am(t) + s;
      if (g > 30) {
        var C = s - s % 5, R = (1 << C) - 1, N = (f & R).toString(32), M = f >> C, Y = s - C, G = am(t) + Y, ae = m << Y, je = ae | M, tt = N + l;
        Gl = 1 << G | je, ql = tt;
      } else {
        var qe = m << s, Pt = qe | f, kt = l;
        Gl = 1 << g | Pt, ql = kt;
      }
    }
    function Lg(e) {
      rc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        nc(e, a), ib(e, a, i);
      }
    }
    function am(e) {
      return 32 - Ic(e);
    }
    function nx(e) {
      return 1 << am(e) - 1;
    }
    function Ng(e) {
      for (; e === nm; )
        nm = jf[--Ff], jf[Ff] = null, rm = jf[--Ff], jf[Ff] = null;
      for (; e === tc; )
        tc = Li[--Ni], Li[Ni] = null, ql = Li[--Ni], Li[Ni] = null, Gl = Li[--Ni], Li[Ni] = null;
    }
    function rx() {
      return rc(), tc !== null ? {
        id: Gl,
        overflow: ql
      } : null;
    }
    function ax(e, t) {
      rc(), Li[Ni++] = Gl, Li[Ni++] = ql, Li[Ni++] = tc, Gl = t.id, ql = t.overflow, tc = e;
    }
    function rc() {
      Wr() || E("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var $r = null, Ai = null, lo = !1, ac = !1, Ku = null;
    function ix() {
      lo && E("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function ob() {
      ac = !0;
    }
    function ox() {
      return ac;
    }
    function lx(e) {
      var t = e.stateNode.containerInfo;
      return Ai = T1(t), $r = e, lo = !0, Ku = null, ac = !1, !0;
    }
    function ux(e, t, a) {
      return Ai = x1(t), $r = e, lo = !0, Ku = null, ac = !1, a !== null && ax(e, a), !0;
    }
    function lb(e, t) {
      switch (e.tag) {
        case P: {
          U1(e.stateNode.containerInfo, t);
          break;
        }
        case Z: {
          var a = (e.mode & _t) !== rt;
          j1(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case J: {
          var i = e.memoizedState;
          i.dehydrated !== null && P1(i.dehydrated, t);
          break;
        }
      }
    }
    function ub(e, t) {
      lb(e, t);
      var a = fO();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Gt) : i.push(a);
    }
    function Ag(e, t) {
      {
        if (ac)
          return;
        switch (e.tag) {
          case P: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Z:
                var i = t.type;
                t.pendingProps, F1(a, i);
                break;
              case fe:
                var l = t.pendingProps;
                H1(a, l);
                break;
            }
            break;
          }
          case Z: {
            var s = e.type, f = e.memoizedProps, m = e.stateNode;
            switch (t.tag) {
              case Z: {
                var g = t.type, C = t.pendingProps, R = (e.mode & _t) !== rt;
                $1(
                  s,
                  f,
                  m,
                  g,
                  C,
                  // TODO: Delete this argument when we remove the legacy root API.
                  R
                );
                break;
              }
              case fe: {
                var N = t.pendingProps, M = (e.mode & _t) !== rt;
                W1(
                  s,
                  f,
                  m,
                  N,
                  // TODO: Delete this argument when we remove the legacy root API.
                  M
                );
                break;
              }
            }
            break;
          }
          case J: {
            var Y = e.memoizedState, G = Y.dehydrated;
            if (G !== null)
              switch (t.tag) {
                case Z:
                  var ae = t.type;
                  t.pendingProps, B1(G, ae);
                  break;
                case fe:
                  var je = t.pendingProps;
                  V1(G, je);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function sb(e, t) {
      t.flags = t.flags & ~Ha | gn, Ag(e, t);
    }
    function cb(e, t) {
      switch (e.tag) {
        case Z: {
          var a = e.type;
          e.pendingProps;
          var i = S1(t, a);
          return i !== null ? (e.stateNode = i, $r = e, Ai = R1(i), !0) : !1;
        }
        case fe: {
          var l = e.pendingProps, s = E1(t, l);
          return s !== null ? (e.stateNode = s, $r = e, Ai = null, !0) : !1;
        }
        case J: {
          var f = b1(t);
          if (f !== null) {
            var m = {
              dehydrated: f,
              treeContext: rx(),
              retryLane: sa
            };
            e.memoizedState = m;
            var g = dO(f);
            return g.return = e, e.child = g, $r = e, Ai = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ug(e) {
      return (e.mode & _t) !== rt && (e.flags & ft) === Je;
    }
    function Pg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function jg(e) {
      if (lo) {
        var t = Ai;
        if (!t) {
          Ug(e) && (Ag($r, e), Pg()), sb($r, e), lo = !1, $r = e;
          return;
        }
        var a = t;
        if (!cb(e, t)) {
          Ug(e) && (Ag($r, e), Pg()), t = kp(a);
          var i = $r;
          if (!t || !cb(e, t)) {
            sb($r, e), lo = !1, $r = e;
            return;
          }
          ub(i, a);
        }
      }
    }
    function sx(e, t, a) {
      var i = e.stateNode, l = !ac, s = _1(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function cx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = D1(t, a, e);
      if (i) {
        var l = $r;
        if (l !== null)
          switch (l.tag) {
            case P: {
              var s = l.stateNode.containerInfo, f = (l.mode & _t) !== rt;
              N1(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case Z: {
              var m = l.type, g = l.memoizedProps, C = l.stateNode, R = (l.mode & _t) !== rt;
              A1(
                m,
                g,
                C,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                R
              );
              break;
            }
          }
      }
      return i;
    }
    function fx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      O1(a, e);
    }
    function dx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return k1(a);
    }
    function fb(e) {
      for (var t = e.return; t !== null && t.tag !== Z && t.tag !== P && t.tag !== J; )
        t = t.return;
      $r = t;
    }
    function im(e) {
      if (e !== $r)
        return !1;
      if (!lo)
        return fb(e), lo = !0, !1;
      if (e.tag !== P && (e.tag !== Z || L1(e.type) && !Sg(e.type, e.memoizedProps))) {
        var t = Ai;
        if (t)
          if (Ug(e))
            db(e), Pg();
          else
            for (; t; )
              ub(e, t), t = kp(t);
      }
      return fb(e), e.tag === J ? Ai = dx(e) : Ai = $r ? kp(e.stateNode) : null, !0;
    }
    function px() {
      return lo && Ai !== null;
    }
    function db(e) {
      for (var t = Ai; t; )
        lb(e, t), t = kp(t);
    }
    function Hf() {
      $r = null, Ai = null, lo = !1, ac = !1;
    }
    function pb() {
      Ku !== null && (lw(Ku), Ku = null);
    }
    function Wr() {
      return lo;
    }
    function Fg(e) {
      Ku === null ? Ku = [e] : Ku.push(e);
    }
    var vx = p.ReactCurrentBatchConfig, hx = null;
    function mx() {
      return vx.transition;
    }
    var uo = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var yx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & kn && (t = a), a = a.return;
        return t;
      }, ic = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Np = [], Ap = [], Up = [], Pp = [], jp = [], Fp = [], oc = /* @__PURE__ */ new Set();
      uo.recordUnsafeLifecycleWarnings = function(e, t) {
        oc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Np.push(e), e.mode & kn && typeof t.UNSAFE_componentWillMount == "function" && Ap.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Up.push(e), e.mode & kn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Pp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && jp.push(e), e.mode & kn && typeof t.UNSAFE_componentWillUpdate == "function" && Fp.push(e));
      }, uo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Np.length > 0 && (Np.forEach(function(M) {
          e.add(ht(M) || "Component"), oc.add(M.type);
        }), Np = []);
        var t = /* @__PURE__ */ new Set();
        Ap.length > 0 && (Ap.forEach(function(M) {
          t.add(ht(M) || "Component"), oc.add(M.type);
        }), Ap = []);
        var a = /* @__PURE__ */ new Set();
        Up.length > 0 && (Up.forEach(function(M) {
          a.add(ht(M) || "Component"), oc.add(M.type);
        }), Up = []);
        var i = /* @__PURE__ */ new Set();
        Pp.length > 0 && (Pp.forEach(function(M) {
          i.add(ht(M) || "Component"), oc.add(M.type);
        }), Pp = []);
        var l = /* @__PURE__ */ new Set();
        jp.length > 0 && (jp.forEach(function(M) {
          l.add(ht(M) || "Component"), oc.add(M.type);
        }), jp = []);
        var s = /* @__PURE__ */ new Set();
        if (Fp.length > 0 && (Fp.forEach(function(M) {
          s.add(ht(M) || "Component"), oc.add(M.type);
        }), Fp = []), t.size > 0) {
          var f = ic(t);
          E(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var m = ic(i);
          E(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, m);
        }
        if (s.size > 0) {
          var g = ic(s);
          E(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, g);
        }
        if (e.size > 0) {
          var C = ic(e);
          x(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (a.size > 0) {
          var R = ic(a);
          x(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (l.size > 0) {
          var N = ic(l);
          x(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, N);
        }
      };
      var om = /* @__PURE__ */ new Map(), vb = /* @__PURE__ */ new Set();
      uo.recordLegacyContextWarning = function(e, t) {
        var a = yx(e);
        if (a === null) {
          E("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!vb.has(e.type)) {
          var i = om.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], om.set(a, i)), i.push(e));
        }
      }, uo.flushLegacyContextWarning = function() {
        om.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(ht(s) || "Component"), vb.add(s.type);
            });
            var l = ic(i);
            try {
              Zt(a), E(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              Ln();
            }
          }
        });
      }, uo.discardPendingWarnings = function() {
        Np = [], Ap = [], Up = [], Pp = [], jp = [], Fp = [], om = /* @__PURE__ */ new Map();
      };
    }
    function so(e, t) {
      if (e && e.defaultProps) {
        var a = Tt({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var Hg = Gu(null), Bg;
    Bg = {};
    var lm = null, Bf = null, Vg = null, um = !1;
    function sm() {
      lm = null, Bf = null, Vg = null, um = !1;
    }
    function hb() {
      um = !0;
    }
    function mb() {
      um = !1;
    }
    function yb(e, t, a) {
      da(Hg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Bg && E("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Bg;
    }
    function $g(e, t) {
      var a = Hg.current;
      fa(Hg, t), e._currentValue = a;
    }
    function Wg(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (Nl(i.childLanes, t) ? l !== null && !Nl(l.childLanes, t) && (l.childLanes = bt(l.childLanes, t)) : (i.childLanes = bt(i.childLanes, t), l !== null && (l.childLanes = bt(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && E("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function gx(e, t, a) {
      Sx(e, t, a);
    }
    function Sx(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === j) {
                var m = Xn(a), g = Xl(dn, m);
                g.tag = fm;
                var C = i.updateQueue;
                if (C !== null) {
                  var R = C.shared, N = R.pending;
                  N === null ? g.next = g : (g.next = N.next, N.next = g), R.pending = g;
                }
              }
              i.lanes = bt(i.lanes, a);
              var M = i.alternate;
              M !== null && (M.lanes = bt(M.lanes, a)), Wg(i.return, a, e), s.lanes = bt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === oe)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === vt) {
          var Y = i.return;
          if (Y === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          Y.lanes = bt(Y.lanes, a);
          var G = Y.alternate;
          G !== null && (G.lanes = bt(G.lanes, a)), Wg(Y, a, e), l = i.sibling;
        } else
          l = i.child;
        if (l !== null)
          l.return = i;
        else
          for (l = i; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var ae = l.sibling;
            if (ae !== null) {
              ae.return = l.return, l = ae;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function Vf(e, t) {
      lm = e, Bf = null, Vg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ca(a.lanes, t) && Jp(), a.firstContext = null);
      }
    }
    function ur(e) {
      um && E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Vg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Bf === null) {
          if (lm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Bf = a, lm.dependencies = {
            lanes: le,
            firstContext: a
          };
        } else
          Bf = Bf.next = a;
      }
      return t;
    }
    var lc = null;
    function Ig(e) {
      lc === null ? lc = [e] : lc.push(e);
    }
    function Ex() {
      if (lc !== null) {
        for (var e = 0; e < lc.length; e++) {
          var t = lc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, l = t.pending;
            if (l !== null) {
              var s = l.next;
              l.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        lc = null;
      }
    }
    function gb(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Ig(t)) : (a.next = l.next, l.next = a), t.interleaved = a, cm(e, i);
    }
    function bx(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, Ig(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function Cx(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, Ig(t)) : (a.next = l.next, l.next = a), t.interleaved = a, cm(e, i);
    }
    function Xa(e, t) {
      return cm(e, t);
    }
    var wx = cm;
    function cm(e, t) {
      e.lanes = bt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = bt(a.lanes, t)), a === null && (e.flags & (gn | Ha)) !== Je && Sw(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = bt(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = bt(a.childLanes, t) : (l.flags & (gn | Ha)) !== Je && Sw(e), i = l, l = l.return;
      if (i.tag === P) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var Sb = 0, Eb = 1, fm = 2, Yg = 3, dm = !1, Qg, pm;
    Qg = !1, pm = null;
    function Gg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: le
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function bb(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = l;
      }
    }
    function Xl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: Sb,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Zu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (pm === l && !Qg && (E("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Qg = !0), wD()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, wx(e, a);
      } else
        return Cx(e, l, t, a);
    }
    function vm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (qd(a)) {
          var s = l.lanes;
          s = Kd(s, e.pendingLanes);
          var f = bt(s, a);
          l.lanes = f, Mu(e, f);
        }
      }
    }
    function qg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, f = null, m = a.firstBaseUpdate;
          if (m !== null) {
            var g = m;
            do {
              var C = {
                eventTime: g.eventTime,
                lane: g.lane,
                tag: g.tag,
                payload: g.payload,
                callback: g.callback,
                next: null
              };
              f === null ? s = f = C : (f.next = C, f = C), g = g.next;
            } while (g !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var R = a.lastBaseUpdate;
      R === null ? a.firstBaseUpdate = t : R.next = t, a.lastBaseUpdate = t;
    }
    function Rx(e, t, a, i, l, s) {
      switch (a.tag) {
        case Eb: {
          var f = a.payload;
          if (typeof f == "function") {
            hb();
            var m = f.call(s, i, l);
            {
              if (e.mode & kn) {
                qn(!0);
                try {
                  f.call(s, i, l);
                } finally {
                  qn(!1);
                }
              }
              mb();
            }
            return m;
          }
          return f;
        }
        case Yg:
          e.flags = e.flags & ~rr | ft;
        case Sb: {
          var g = a.payload, C;
          if (typeof g == "function") {
            hb(), C = g.call(s, i, l);
            {
              if (e.mode & kn) {
                qn(!0);
                try {
                  g.call(s, i, l);
                } finally {
                  qn(!1);
                }
              }
              mb();
            }
          } else
            C = g;
          return C == null ? i : Tt({}, i, C);
        }
        case fm:
          return dm = !0, i;
      }
      return i;
    }
    function hm(e, t, a, i) {
      var l = e.updateQueue;
      dm = !1, pm = l.shared;
      var s = l.firstBaseUpdate, f = l.lastBaseUpdate, m = l.shared.pending;
      if (m !== null) {
        l.shared.pending = null;
        var g = m, C = g.next;
        g.next = null, f === null ? s = C : f.next = C, f = g;
        var R = e.alternate;
        if (R !== null) {
          var N = R.updateQueue, M = N.lastBaseUpdate;
          M !== f && (M === null ? N.firstBaseUpdate = C : M.next = C, N.lastBaseUpdate = g);
        }
      }
      if (s !== null) {
        var Y = l.baseState, G = le, ae = null, je = null, tt = null, qe = s;
        do {
          var Pt = qe.lane, kt = qe.eventTime;
          if (Nl(i, Pt)) {
            if (tt !== null) {
              var ie = {
                eventTime: kt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: At,
                tag: qe.tag,
                payload: qe.payload,
                callback: qe.callback,
                next: null
              };
              tt = tt.next = ie;
            }
            Y = Rx(e, l, qe, Y, t, a);
            var V = qe.callback;
            if (V !== null && // If the update was already committed, we should not queue its
            // callback again.
            qe.lane !== At) {
              e.flags |= _i;
              var ye = l.effects;
              ye === null ? l.effects = [qe] : ye.push(qe);
            }
          } else {
            var B = {
              eventTime: kt,
              lane: Pt,
              tag: qe.tag,
              payload: qe.payload,
              callback: qe.callback,
              next: null
            };
            tt === null ? (je = tt = B, ae = Y) : tt = tt.next = B, G = bt(G, Pt);
          }
          if (qe = qe.next, qe === null) {
            if (m = l.shared.pending, m === null)
              break;
            var Fe = m, Le = Fe.next;
            Fe.next = null, qe = Le, l.lastBaseUpdate = Fe, l.shared.pending = null;
          }
        } while (!0);
        tt === null && (ae = Y), l.baseState = ae, l.firstBaseUpdate = je, l.lastBaseUpdate = tt;
        var ct = l.shared.interleaved;
        if (ct !== null) {
          var yt = ct;
          do
            G = bt(G, yt.lane), yt = yt.next;
          while (yt !== ct);
        } else
          s === null && (l.shared.lanes = le);
        fv(G), e.lanes = G, e.memoizedState = Y;
      }
      pm = null;
    }
    function Tx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function Cb() {
      dm = !1;
    }
    function mm() {
      return dm;
    }
    function wb(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], f = s.callback;
          f !== null && (s.callback = null, Tx(f, a));
        }
    }
    var Xg = {}, Rb = new d.Component().refs, Kg, Zg, Jg, eS, tS, Tb, ym, nS, rS, aS;
    {
      Kg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set();
      var xb = /* @__PURE__ */ new Set();
      ym = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          xb.has(a) || (xb.add(a), E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, Tb = function(e, t) {
        if (t === void 0) {
          var a = Ht(e) || "Component";
          tS.has(a) || (tS.add(a), E("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Xg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Xg);
    }
    function iS(e, t, a, i) {
      var l = e.memoizedState, s = a(i, l);
      {
        if (e.mode & kn) {
          qn(!0);
          try {
            s = a(i, l);
          } finally {
            qn(!1);
          }
        }
        Tb(t, s);
      }
      var f = s == null ? l : Tt({}, l, s);
      if (e.memoizedState = f, e.lanes === le) {
        var m = e.updateQueue;
        m.baseState = f;
      }
    }
    var oS = {
      isMounted: Ta,
      enqueueSetState: function(e, t, a) {
        var i = ja(e), l = za(), s = os(i), f = Xl(l, s);
        f.payload = t, a != null && (ym(a, "setState"), f.callback = a);
        var m = Zu(i, f, s);
        m !== null && (Cr(m, i, s, l), vm(m, i, s)), Wo(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ja(e), l = za(), s = os(i), f = Xl(l, s);
        f.tag = Eb, f.payload = t, a != null && (ym(a, "replaceState"), f.callback = a);
        var m = Zu(i, f, s);
        m !== null && (Cr(m, i, s, l), vm(m, i, s)), Wo(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ja(e), i = za(), l = os(a), s = Xl(i, l);
        s.tag = fm, t != null && (ym(t, "forceUpdate"), s.callback = t);
        var f = Zu(a, s, l);
        f !== null && (Cr(f, a, l, i), vm(f, a, l)), Id(a, l);
      }
    };
    function _b(e, t, a, i, l, s, f) {
      var m = e.stateNode;
      if (typeof m.shouldComponentUpdate == "function") {
        var g = m.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & kn) {
            qn(!0);
            try {
              g = m.shouldComponentUpdate(i, s, f);
            } finally {
              qn(!1);
            }
          }
          g === void 0 && E("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ht(t) || "Component");
        }
        return g;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ze(a, i) || !Ze(l, s) : !0;
    }
    function xx(e, t, a) {
      var i = e.stateNode;
      {
        var l = Ht(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? E("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : E("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && E("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && E("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && E("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && E("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), i.contextTypes && E("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !rS.has(t) && (rS.add(t), E("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && E("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && E("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ht(t) || "A pure component"), typeof i.componentDidUnmount == "function" && E("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && E("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && E("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && E("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var f = i.props !== a;
        i.props !== void 0 && f && E("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && E("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Jg.has(t) && (Jg.add(t), E("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ht(t))), typeof i.getDerivedStateFromProps == "function" && E("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && E("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && E("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var m = i.state;
        m && (typeof m != "object" || Lt(m)) && E("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && E("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function Db(e, t) {
      t.updater = oS, e.stateNode = t, Cu(t, e), t._reactInternalInstance = Xg;
    }
    function Ob(e, t, a) {
      var i = !1, l = di, s = di, f = t.contextType;
      if ("contextType" in t) {
        var m = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === De && f._context === void 0
        );
        if (!m && !aS.has(t)) {
          aS.add(t);
          var g = "";
          f === void 0 ? g = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? g = " However, it is set to a " + typeof f + "." : f.$$typeof === de ? g = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? g = " Did you accidentally pass the Context.Consumer instead?" : g = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", E("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ht(t) || "Component", g);
        }
      }
      if (typeof f == "object" && f !== null)
        s = ur(f);
      else {
        l = Uf(e, t, !0);
        var C = t.contextTypes;
        i = C != null, s = i ? Pf(e, l) : di;
      }
      var R = new t(a, s);
      if (e.mode & kn) {
        qn(!0);
        try {
          R = new t(a, s);
        } finally {
          qn(!1);
        }
      }
      var N = e.memoizedState = R.state !== null && R.state !== void 0 ? R.state : null;
      Db(e, R);
      {
        if (typeof t.getDerivedStateFromProps == "function" && N === null) {
          var M = Ht(t) || "Component";
          Zg.has(M) || (Zg.add(M), E("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", M, R.state === null ? "null" : "undefined", M));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof R.getSnapshotBeforeUpdate == "function") {
          var Y = null, G = null, ae = null;
          if (typeof R.componentWillMount == "function" && R.componentWillMount.__suppressDeprecationWarning !== !0 ? Y = "componentWillMount" : typeof R.UNSAFE_componentWillMount == "function" && (Y = "UNSAFE_componentWillMount"), typeof R.componentWillReceiveProps == "function" && R.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? G = "componentWillReceiveProps" : typeof R.UNSAFE_componentWillReceiveProps == "function" && (G = "UNSAFE_componentWillReceiveProps"), typeof R.componentWillUpdate == "function" && R.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ae = "componentWillUpdate" : typeof R.UNSAFE_componentWillUpdate == "function" && (ae = "UNSAFE_componentWillUpdate"), Y !== null || G !== null || ae !== null) {
            var je = Ht(t) || "Component", tt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            eS.has(je) || (eS.add(je), E(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, je, tt, Y !== null ? `
  ` + Y : "", G !== null ? `
  ` + G : "", ae !== null ? `
  ` + ae : ""));
          }
        }
      }
      return i && JE(e, l, s), R;
    }
    function _x(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (E("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ht(e) || "Component"), oS.enqueueReplaceState(t, t.state, null));
    }
    function kb(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = ht(e) || "Component";
          Kg.has(s) || (Kg.add(s), E("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        oS.enqueueReplaceState(t, t.state, null);
      }
    }
    function lS(e, t, a, i) {
      xx(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = Rb, Gg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = ur(s);
      else {
        var f = Uf(e, t, !0);
        l.context = Pf(e, f);
      }
      {
        if (l.state === a) {
          var m = Ht(t) || "Component";
          nS.has(m) || (nS.add(m), E("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", m));
        }
        e.mode & kn && uo.recordLegacyContextWarning(e, l), uo.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var g = t.getDerivedStateFromProps;
      if (typeof g == "function" && (iS(e, t, g, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (_x(e, l), hm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var C = Et;
        C |= aa, (e.mode & $a) !== rt && (C |= ia), e.flags |= C;
      }
    }
    function Dx(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var f = l.context, m = t.contextType, g = di;
      if (typeof m == "object" && m !== null)
        g = ur(m);
      else {
        var C = Uf(e, t, !0);
        g = Pf(e, C);
      }
      var R = t.getDerivedStateFromProps, N = typeof R == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !N && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || f !== g) && kb(e, l, a, g), Cb();
      var M = e.memoizedState, Y = l.state = M;
      if (hm(e, a, l, i), Y = e.memoizedState, s === a && M === Y && !Zh() && !mm()) {
        if (typeof l.componentDidMount == "function") {
          var G = Et;
          G |= aa, (e.mode & $a) !== rt && (G |= ia), e.flags |= G;
        }
        return !1;
      }
      typeof R == "function" && (iS(e, t, R, a), Y = e.memoizedState);
      var ae = mm() || _b(e, t, s, a, M, Y, g);
      if (ae) {
        if (!N && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var je = Et;
          je |= aa, (e.mode & $a) !== rt && (je |= ia), e.flags |= je;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var tt = Et;
          tt |= aa, (e.mode & $a) !== rt && (tt |= ia), e.flags |= tt;
        }
        e.memoizedProps = a, e.memoizedState = Y;
      }
      return l.props = a, l.state = Y, l.context = g, ae;
    }
    function Ox(e, t, a, i, l) {
      var s = t.stateNode;
      bb(e, t);
      var f = t.memoizedProps, m = t.type === t.elementType ? f : so(t.type, f);
      s.props = m;
      var g = t.pendingProps, C = s.context, R = a.contextType, N = di;
      if (typeof R == "object" && R !== null)
        N = ur(R);
      else {
        var M = Uf(t, a, !0);
        N = Pf(t, M);
      }
      var Y = a.getDerivedStateFromProps, G = typeof Y == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !G && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== g || C !== N) && kb(t, s, i, N), Cb();
      var ae = t.memoizedState, je = s.state = ae;
      if (hm(t, i, s, l), je = t.memoizedState, f === g && ae === je && !Zh() && !mm() && !Be)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || ae !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || ae !== e.memoizedState) && (t.flags |= Fa), !1;
      typeof Y == "function" && (iS(t, a, Y, i), je = t.memoizedState);
      var tt = mm() || _b(t, a, m, i, ae, je, N) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Be;
      return tt ? (!G && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, je, N), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, je, N)), typeof s.componentDidUpdate == "function" && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Fa)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || ae !== e.memoizedState) && (t.flags |= Et), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || ae !== e.memoizedState) && (t.flags |= Fa), t.memoizedProps = i, t.memoizedState = je), s.props = i, s.state = je, s.context = N, tt;
    }
    var uS, sS, cS, fS, dS, zb = function(e, t) {
    };
    uS = !1, sS = !1, cS = {}, fS = {}, dS = {}, zb = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ht(t) || "Component";
        fS[a] || (fS[a] = !0, E('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Hp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & kn || W) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var l = ht(e) || "Component";
          cS[l] || (E('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), cS[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var m = s;
            if (m.tag !== j)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = m.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var g = f;
          Pn(i, "ref");
          var C = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
            return t.ref;
          var R = function(N) {
            var M = g.refs;
            M === Rb && (M = g.refs = {}), N === null ? delete M[C] : M[C] = N;
          };
          return R._stringRef = C, R;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function gm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Sm(e) {
      {
        var t = ht(e) || "Component";
        if (dS[t])
          return;
        dS[t] = !0, E("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function Mb(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function Lb(e) {
      function t(B, ie) {
        if (e) {
          var V = B.deletions;
          V === null ? (B.deletions = [ie], B.flags |= Gt) : V.push(ie);
        }
      }
      function a(B, ie) {
        if (!e)
          return null;
        for (var V = ie; V !== null; )
          t(B, V), V = V.sibling;
        return null;
      }
      function i(B, ie) {
        for (var V = /* @__PURE__ */ new Map(), ye = ie; ye !== null; )
          ye.key !== null ? V.set(ye.key, ye) : V.set(ye.index, ye), ye = ye.sibling;
        return V;
      }
      function l(B, ie) {
        var V = hc(B, ie);
        return V.index = 0, V.sibling = null, V;
      }
      function s(B, ie, V) {
        if (B.index = V, !e)
          return B.flags |= Ld, ie;
        var ye = B.alternate;
        if (ye !== null) {
          var Fe = ye.index;
          return Fe < ie ? (B.flags |= gn, ie) : Fe;
        } else
          return B.flags |= gn, ie;
      }
      function f(B) {
        return e && B.alternate === null && (B.flags |= gn), B;
      }
      function m(B, ie, V, ye) {
        if (ie === null || ie.tag !== fe) {
          var Fe = F0(V, B.mode, ye);
          return Fe.return = B, Fe;
        } else {
          var Le = l(ie, V);
          return Le.return = B, Le;
        }
      }
      function g(B, ie, V, ye) {
        var Fe = V.type;
        if (Fe === Ca)
          return R(B, ie, V.props.children, ye, V.key);
        if (ie !== null && (ie.elementType === Fe || // Keep this check inline so it only runs on the false path:
        ww(ie, V) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Fe == "object" && Fe !== null && Fe.$$typeof === et && Mb(Fe) === ie.type)) {
          var Le = l(ie, V.props);
          return Le.ref = Hp(B, ie, V), Le.return = B, Le._debugSource = V._source, Le._debugOwner = V._owner, Le;
        }
        var ct = j0(V, B.mode, ye);
        return ct.ref = Hp(B, ie, V), ct.return = B, ct;
      }
      function C(B, ie, V, ye) {
        if (ie === null || ie.tag !== K || ie.stateNode.containerInfo !== V.containerInfo || ie.stateNode.implementation !== V.implementation) {
          var Fe = H0(V, B.mode, ye);
          return Fe.return = B, Fe;
        } else {
          var Le = l(ie, V.children || []);
          return Le.return = B, Le;
        }
      }
      function R(B, ie, V, ye, Fe) {
        if (ie === null || ie.tag !== me) {
          var Le = us(V, B.mode, ye, Fe);
          return Le.return = B, Le;
        } else {
          var ct = l(ie, V);
          return ct.return = B, ct;
        }
      }
      function N(B, ie, V) {
        if (typeof ie == "string" && ie !== "" || typeof ie == "number") {
          var ye = F0("" + ie, B.mode, V);
          return ye.return = B, ye;
        }
        if (typeof ie == "object" && ie !== null) {
          switch (ie.$$typeof) {
            case Ei: {
              var Fe = j0(ie, B.mode, V);
              return Fe.ref = Hp(B, null, ie), Fe.return = B, Fe;
            }
            case jr: {
              var Le = H0(ie, B.mode, V);
              return Le.return = B, Le;
            }
            case et: {
              var ct = ie._payload, yt = ie._init;
              return N(B, yt(ct), V);
            }
          }
          if (Lt(ie) || ri(ie)) {
            var on = us(ie, B.mode, V, null);
            return on.return = B, on;
          }
          gm(B, ie);
        }
        return typeof ie == "function" && Sm(B), null;
      }
      function M(B, ie, V, ye) {
        var Fe = ie !== null ? ie.key : null;
        if (typeof V == "string" && V !== "" || typeof V == "number")
          return Fe !== null ? null : m(B, ie, "" + V, ye);
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case Ei:
              return V.key === Fe ? g(B, ie, V, ye) : null;
            case jr:
              return V.key === Fe ? C(B, ie, V, ye) : null;
            case et: {
              var Le = V._payload, ct = V._init;
              return M(B, ie, ct(Le), ye);
            }
          }
          if (Lt(V) || ri(V))
            return Fe !== null ? null : R(B, ie, V, ye, null);
          gm(B, V);
        }
        return typeof V == "function" && Sm(B), null;
      }
      function Y(B, ie, V, ye, Fe) {
        if (typeof ye == "string" && ye !== "" || typeof ye == "number") {
          var Le = B.get(V) || null;
          return m(ie, Le, "" + ye, Fe);
        }
        if (typeof ye == "object" && ye !== null) {
          switch (ye.$$typeof) {
            case Ei: {
              var ct = B.get(ye.key === null ? V : ye.key) || null;
              return g(ie, ct, ye, Fe);
            }
            case jr: {
              var yt = B.get(ye.key === null ? V : ye.key) || null;
              return C(ie, yt, ye, Fe);
            }
            case et:
              var on = ye._payload, Wt = ye._init;
              return Y(B, ie, V, Wt(on), Fe);
          }
          if (Lt(ye) || ri(ye)) {
            var er = B.get(V) || null;
            return R(ie, er, ye, Fe, null);
          }
          gm(ie, ye);
        }
        return typeof ye == "function" && Sm(ie), null;
      }
      function G(B, ie, V) {
        {
          if (typeof B != "object" || B === null)
            return ie;
          switch (B.$$typeof) {
            case Ei:
            case jr:
              zb(B, V);
              var ye = B.key;
              if (typeof ye != "string")
                break;
              if (ie === null) {
                ie = /* @__PURE__ */ new Set(), ie.add(ye);
                break;
              }
              if (!ie.has(ye)) {
                ie.add(ye);
                break;
              }
              E("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ye);
              break;
            case et:
              var Fe = B._payload, Le = B._init;
              G(Le(Fe), ie, V);
              break;
          }
        }
        return ie;
      }
      function ae(B, ie, V, ye) {
        for (var Fe = null, Le = 0; Le < V.length; Le++) {
          var ct = V[Le];
          Fe = G(ct, Fe, B);
        }
        for (var yt = null, on = null, Wt = ie, er = 0, It = 0, Yn = null; Wt !== null && It < V.length; It++) {
          Wt.index > It ? (Yn = Wt, Wt = null) : Yn = Wt.sibling;
          var va = M(B, Wt, V[It], ye);
          if (va === null) {
            Wt === null && (Wt = Yn);
            break;
          }
          e && Wt && va.alternate === null && t(B, Wt), er = s(va, er, It), on === null ? yt = va : on.sibling = va, on = va, Wt = Yn;
        }
        if (It === V.length) {
          if (a(B, Wt), Wr()) {
            var Kr = It;
            nc(B, Kr);
          }
          return yt;
        }
        if (Wt === null) {
          for (; It < V.length; It++) {
            var vi = N(B, V[It], ye);
            vi !== null && (er = s(vi, er, It), on === null ? yt = vi : on.sibling = vi, on = vi);
          }
          if (Wr()) {
            var Ma = It;
            nc(B, Ma);
          }
          return yt;
        }
        for (var La = i(B, Wt); It < V.length; It++) {
          var ha = Y(La, B, It, V[It], ye);
          ha !== null && (e && ha.alternate !== null && La.delete(ha.key === null ? It : ha.key), er = s(ha, er, It), on === null ? yt = ha : on.sibling = ha, on = ha);
        }
        if (e && La.forEach(function(id) {
          return t(B, id);
        }), Wr()) {
          var nu = It;
          nc(B, nu);
        }
        return yt;
      }
      function je(B, ie, V, ye) {
        var Fe = ri(V);
        if (typeof Fe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          V[Symbol.toStringTag] === "Generator" && (sS || E("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), sS = !0), V.entries === Fe && (uS || E("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), uS = !0);
          var Le = Fe.call(V);
          if (Le)
            for (var ct = null, yt = Le.next(); !yt.done; yt = Le.next()) {
              var on = yt.value;
              ct = G(on, ct, B);
            }
        }
        var Wt = Fe.call(V);
        if (Wt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var er = null, It = null, Yn = ie, va = 0, Kr = 0, vi = null, Ma = Wt.next(); Yn !== null && !Ma.done; Kr++, Ma = Wt.next()) {
          Yn.index > Kr ? (vi = Yn, Yn = null) : vi = Yn.sibling;
          var La = M(B, Yn, Ma.value, ye);
          if (La === null) {
            Yn === null && (Yn = vi);
            break;
          }
          e && Yn && La.alternate === null && t(B, Yn), va = s(La, va, Kr), It === null ? er = La : It.sibling = La, It = La, Yn = vi;
        }
        if (Ma.done) {
          if (a(B, Yn), Wr()) {
            var ha = Kr;
            nc(B, ha);
          }
          return er;
        }
        if (Yn === null) {
          for (; !Ma.done; Kr++, Ma = Wt.next()) {
            var nu = N(B, Ma.value, ye);
            nu !== null && (va = s(nu, va, Kr), It === null ? er = nu : It.sibling = nu, It = nu);
          }
          if (Wr()) {
            var id = Kr;
            nc(B, id);
          }
          return er;
        }
        for (var mv = i(B, Yn); !Ma.done; Kr++, Ma = Wt.next()) {
          var ul = Y(mv, B, Kr, Ma.value, ye);
          ul !== null && (e && ul.alternate !== null && mv.delete(ul.key === null ? Kr : ul.key), va = s(ul, va, Kr), It === null ? er = ul : It.sibling = ul, It = ul);
        }
        if (e && mv.forEach(function($O) {
          return t(B, $O);
        }), Wr()) {
          var VO = Kr;
          nc(B, VO);
        }
        return er;
      }
      function tt(B, ie, V, ye) {
        if (ie !== null && ie.tag === fe) {
          a(B, ie.sibling);
          var Fe = l(ie, V);
          return Fe.return = B, Fe;
        }
        a(B, ie);
        var Le = F0(V, B.mode, ye);
        return Le.return = B, Le;
      }
      function qe(B, ie, V, ye) {
        for (var Fe = V.key, Le = ie; Le !== null; ) {
          if (Le.key === Fe) {
            var ct = V.type;
            if (ct === Ca) {
              if (Le.tag === me) {
                a(B, Le.sibling);
                var yt = l(Le, V.props.children);
                return yt.return = B, yt._debugSource = V._source, yt._debugOwner = V._owner, yt;
              }
            } else if (Le.elementType === ct || // Keep this check inline so it only runs on the false path:
            ww(Le, V) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ct == "object" && ct !== null && ct.$$typeof === et && Mb(ct) === Le.type) {
              a(B, Le.sibling);
              var on = l(Le, V.props);
              return on.ref = Hp(B, Le, V), on.return = B, on._debugSource = V._source, on._debugOwner = V._owner, on;
            }
            a(B, Le);
            break;
          } else
            t(B, Le);
          Le = Le.sibling;
        }
        if (V.type === Ca) {
          var Wt = us(V.props.children, B.mode, ye, V.key);
          return Wt.return = B, Wt;
        } else {
          var er = j0(V, B.mode, ye);
          return er.ref = Hp(B, ie, V), er.return = B, er;
        }
      }
      function Pt(B, ie, V, ye) {
        for (var Fe = V.key, Le = ie; Le !== null; ) {
          if (Le.key === Fe)
            if (Le.tag === K && Le.stateNode.containerInfo === V.containerInfo && Le.stateNode.implementation === V.implementation) {
              a(B, Le.sibling);
              var ct = l(Le, V.children || []);
              return ct.return = B, ct;
            } else {
              a(B, Le);
              break;
            }
          else
            t(B, Le);
          Le = Le.sibling;
        }
        var yt = H0(V, B.mode, ye);
        return yt.return = B, yt;
      }
      function kt(B, ie, V, ye) {
        var Fe = typeof V == "object" && V !== null && V.type === Ca && V.key === null;
        if (Fe && (V = V.props.children), typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case Ei:
              return f(qe(B, ie, V, ye));
            case jr:
              return f(Pt(B, ie, V, ye));
            case et:
              var Le = V._payload, ct = V._init;
              return kt(B, ie, ct(Le), ye);
          }
          if (Lt(V))
            return ae(B, ie, V, ye);
          if (ri(V))
            return je(B, ie, V, ye);
          gm(B, V);
        }
        return typeof V == "string" && V !== "" || typeof V == "number" ? f(tt(B, ie, "" + V, ye)) : (typeof V == "function" && Sm(B), a(B, ie));
      }
      return kt;
    }
    var $f = Lb(!0), Nb = Lb(!1);
    function kx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = hc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = hc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function zx(e, t) {
      for (var a = e.child; a !== null; )
        oO(a, t), a = a.sibling;
    }
    var Bp = {}, Ju = Gu(Bp), Vp = Gu(Bp), Em = Gu(Bp);
    function bm(e) {
      if (e === Bp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function Ab() {
      var e = bm(Em.current);
      return e;
    }
    function pS(e, t) {
      da(Em, t, e), da(Vp, e, e), da(Ju, Bp, e);
      var a = IT(t);
      fa(Ju, e), da(Ju, a, e);
    }
    function Wf(e) {
      fa(Ju, e), fa(Vp, e), fa(Em, e);
    }
    function vS() {
      var e = bm(Ju.current);
      return e;
    }
    function Ub(e) {
      bm(Em.current);
      var t = bm(Ju.current), a = YT(t, e.type);
      t !== a && (da(Vp, e, e), da(Ju, a, e));
    }
    function hS(e) {
      Vp.current === e && (fa(Ju, e), fa(Vp, e));
    }
    var Mx = 0, Pb = 1, jb = 1, $p = 2, co = Gu(Mx);
    function mS(e, t) {
      return (e & t) !== 0;
    }
    function If(e) {
      return e & Pb;
    }
    function yS(e, t) {
      return e & Pb | t;
    }
    function Lx(e, t) {
      return e | t;
    }
    function es(e, t) {
      da(co, t, e);
    }
    function Yf(e) {
      fa(co, e);
    }
    function Nx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Cm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === J) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || GE(i) || wg(i))
              return t;
          }
        } else if (t.tag === ot && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & ft) !== Je;
          if (l)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ka = (
      /*   */
      0
    ), hr = (
      /* */
      1
    ), tl = (
      /*  */
      2
    ), mr = (
      /*    */
      4
    ), Ir = (
      /*   */
      8
    ), gS = [];
    function SS() {
      for (var e = 0; e < gS.length; e++) {
        var t = gS[e];
        t._workInProgressVersionPrimary = null;
      }
      gS.length = 0;
    }
    function Ax(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Ue = p.ReactCurrentDispatcher, Wp = p.ReactCurrentBatchConfig, ES, Qf;
    ES = /* @__PURE__ */ new Set();
    var uc = le, an = null, yr = null, gr = null, wm = !1, Ip = !1, Yp = 0, Ux = 0, Px = 25, se = null, Ui = null, ts = -1, bS = !1;
    function en() {
      {
        var e = se;
        Ui === null ? Ui = [e] : Ui.push(e);
      }
    }
    function ke() {
      {
        var e = se;
        Ui !== null && (ts++, Ui[ts] !== e && jx(e));
      }
    }
    function Gf(e) {
      e != null && !Lt(e) && E("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", se, typeof e);
    }
    function jx(e) {
      {
        var t = ht(an);
        if (!ES.has(t) && (ES.add(t), Ui !== null)) {
          for (var a = "", i = 30, l = 0; l <= ts; l++) {
            for (var s = Ui[l], f = l === ts ? e : s, m = l + 1 + ". " + s; m.length < i; )
              m += " ";
            m += f + `
`, a += m;
          }
          E(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function pa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function CS(e, t) {
      if (bS)
        return !1;
      if (t === null)
        return E("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", se), !1;
      e.length !== t.length && E(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, se, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!We(e[a], t[a]))
          return !1;
      return !0;
    }
    function qf(e, t, a, i, l, s) {
      uc = s, an = t, Ui = e !== null ? e._debugHookTypes : null, ts = -1, bS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = le, e !== null && e.memoizedState !== null ? Ue.current = oC : Ui !== null ? Ue.current = iC : Ue.current = aC;
      var f = a(i, l);
      if (Ip) {
        var m = 0;
        do {
          if (Ip = !1, Yp = 0, m >= Px)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          m += 1, bS = !1, yr = null, gr = null, t.updateQueue = null, ts = -1, Ue.current = lC, f = a(i, l);
        } while (Ip);
      }
      Ue.current = Um, t._debugHookTypes = Ui;
      var g = yr !== null && yr.next !== null;
      if (uc = le, an = null, yr = null, gr = null, se = null, Ui = null, ts = -1, e !== null && (e.flags & dr) !== (t.flags & dr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & _t) !== rt && E("Internal React error: Expected static flag was missing. Please notify the React team."), wm = !1, g)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Xf() {
      var e = Yp !== 0;
      return Yp = 0, e;
    }
    function Fb(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & $a) !== rt ? t.flags &= ~(Rl | ia | Rn | Et) : t.flags &= ~(Rn | Et), e.lanes = zu(e.lanes, a);
    }
    function Hb() {
      if (Ue.current = Um, wm) {
        for (var e = an.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        wm = !1;
      }
      uc = le, an = null, yr = null, gr = null, Ui = null, ts = -1, se = null, Jb = !1, Ip = !1, Yp = 0;
    }
    function nl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return gr === null ? an.memoizedState = gr = e : gr = gr.next = e, gr;
    }
    function Pi() {
      var e;
      if (yr === null) {
        var t = an.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = yr.next;
      var a;
      if (gr === null ? a = an.memoizedState : a = gr.next, a !== null)
        gr = a, a = gr.next, yr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        yr = e;
        var i = {
          memoizedState: yr.memoizedState,
          baseState: yr.baseState,
          baseQueue: yr.baseQueue,
          queue: yr.queue,
          next: null
        };
        gr === null ? an.memoizedState = gr = i : gr = gr.next = i;
      }
      return gr;
    }
    function Bb() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function wS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function RS(e, t, a) {
      var i = nl(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: le,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var f = s.dispatch = Vx.bind(null, an, s);
      return [i.memoizedState, f];
    }
    function TS(e, t, a) {
      var i = Pi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = yr, f = s.baseQueue, m = l.pending;
      if (m !== null) {
        if (f !== null) {
          var g = f.next, C = m.next;
          f.next = C, m.next = g;
        }
        s.baseQueue !== f && E("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = m, l.pending = null;
      }
      if (f !== null) {
        var R = f.next, N = s.baseState, M = null, Y = null, G = null, ae = R;
        do {
          var je = ae.lane;
          if (Nl(uc, je)) {
            if (G !== null) {
              var qe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: At,
                action: ae.action,
                hasEagerState: ae.hasEagerState,
                eagerState: ae.eagerState,
                next: null
              };
              G = G.next = qe;
            }
            if (ae.hasEagerState)
              N = ae.eagerState;
            else {
              var Pt = ae.action;
              N = e(N, Pt);
            }
          } else {
            var tt = {
              lane: je,
              action: ae.action,
              hasEagerState: ae.hasEagerState,
              eagerState: ae.eagerState,
              next: null
            };
            G === null ? (Y = G = tt, M = N) : G = G.next = tt, an.lanes = bt(an.lanes, je), fv(je);
          }
          ae = ae.next;
        } while (ae !== null && ae !== R);
        G === null ? M = N : G.next = Y, We(N, i.memoizedState) || Jp(), i.memoizedState = N, i.baseState = M, i.baseQueue = G, l.lastRenderedState = N;
      }
      var kt = l.interleaved;
      if (kt !== null) {
        var B = kt;
        do {
          var ie = B.lane;
          an.lanes = bt(an.lanes, ie), fv(ie), B = B.next;
        } while (B !== kt);
      } else
        f === null && (l.lanes = le);
      var V = l.dispatch;
      return [i.memoizedState, V];
    }
    function xS(e, t, a) {
      var i = Pi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, f = l.pending, m = i.memoizedState;
      if (f !== null) {
        l.pending = null;
        var g = f.next, C = g;
        do {
          var R = C.action;
          m = e(m, R), C = C.next;
        } while (C !== g);
        We(m, i.memoizedState) || Jp(), i.memoizedState = m, i.baseQueue === null && (i.baseState = m), l.lastRenderedState = m;
      }
      return [m, s];
    }
    function Bz(e, t, a) {
    }
    function Vz(e, t, a) {
    }
    function _S(e, t, a) {
      var i = an, l = nl(), s, f = Wr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Qf || s !== a() && (E("The result of getServerSnapshot should be cached to avoid an infinite loop"), Qf = !0);
      } else {
        if (s = t(), !Qf) {
          var m = t();
          We(s, m) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), Qf = !0);
        }
        var g = ey();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Fs(g, uc) || Vb(i, t, s);
      }
      l.memoizedState = s;
      var C = {
        value: s,
        getSnapshot: t
      };
      return l.queue = C, Dm(Wb.bind(null, i, C, e), [e]), i.flags |= Rn, Qp(hr | Ir, $b.bind(null, i, C, s, t), void 0, null), s;
    }
    function Rm(e, t, a) {
      var i = an, l = Pi(), s = t();
      if (!Qf) {
        var f = t();
        We(s, f) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), Qf = !0);
      }
      var m = l.memoizedState, g = !We(m, s);
      g && (l.memoizedState = s, Jp());
      var C = l.queue;
      if (qp(Wb.bind(null, i, C, e), [e]), C.getSnapshot !== t || g || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      gr !== null && gr.memoizedState.tag & hr) {
        i.flags |= Rn, Qp(hr | Ir, $b.bind(null, i, C, s, t), void 0, null);
        var R = ey();
        if (R === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Fs(R, uc) || Vb(i, t, s);
      }
      return s;
    }
    function Vb(e, t, a) {
      e.flags |= ks;
      var i = {
        getSnapshot: t,
        value: a
      }, l = an.updateQueue;
      if (l === null)
        l = Bb(), an.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function $b(e, t, a, i) {
      t.value = a, t.getSnapshot = i, Ib(t) && Yb(e);
    }
    function Wb(e, t, a) {
      var i = function() {
        Ib(t) && Yb(e);
      };
      return a(i);
    }
    function Ib(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !We(a, i);
      } catch {
        return !0;
      }
    }
    function Yb(e) {
      var t = Xa(e, lt);
      t !== null && Cr(t, e, lt, dn);
    }
    function Tm(e) {
      var t = nl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: le,
        dispatch: null,
        lastRenderedReducer: wS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = $x.bind(null, an, a);
      return [t.memoizedState, i];
    }
    function DS(e) {
      return TS(wS);
    }
    function OS(e) {
      return xS(wS);
    }
    function Qp(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = an.updateQueue;
      if (s === null)
        s = Bb(), an.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = l.next = l;
        else {
          var m = f.next;
          f.next = l, l.next = m, s.lastEffect = l;
        }
      }
      return l;
    }
    function kS(e) {
      var t = nl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function xm(e) {
      var t = Pi();
      return t.memoizedState;
    }
    function Gp(e, t, a, i) {
      var l = nl(), s = i === void 0 ? null : i;
      an.flags |= e, l.memoizedState = Qp(hr | t, a, void 0, s);
    }
    function _m(e, t, a, i) {
      var l = Pi(), s = i === void 0 ? null : i, f = void 0;
      if (yr !== null) {
        var m = yr.memoizedState;
        if (f = m.destroy, s !== null) {
          var g = m.deps;
          if (CS(s, g)) {
            l.memoizedState = Qp(t, a, f, s);
            return;
          }
        }
      }
      an.flags |= e, l.memoizedState = Qp(hr | t, a, f, s);
    }
    function Dm(e, t) {
      return (an.mode & $a) !== rt ? Gp(Rl | Rn | jo, Ir, e, t) : Gp(Rn | jo, Ir, e, t);
    }
    function qp(e, t) {
      return _m(Rn, Ir, e, t);
    }
    function zS(e, t) {
      return Gp(Et, tl, e, t);
    }
    function Om(e, t) {
      return _m(Et, tl, e, t);
    }
    function MS(e, t) {
      var a = Et;
      return a |= aa, (an.mode & $a) !== rt && (a |= ia), Gp(a, mr, e, t);
    }
    function km(e, t) {
      return _m(Et, mr, e, t);
    }
    function Qb(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || E("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function LS(e, t, a) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = Et;
      return l |= aa, (an.mode & $a) !== rt && (l |= ia), Gp(l, mr, Qb.bind(null, t, e), i);
    }
    function zm(e, t, a) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return _m(Et, mr, Qb.bind(null, t, e), i);
    }
    function Fx(e, t) {
    }
    var Mm = Fx;
    function NS(e, t) {
      var a = nl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Lm(e, t) {
      var a = Pi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (CS(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function AS(e, t) {
      var a = nl(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function Nm(e, t) {
      var a = Pi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (CS(i, s))
          return l[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function US(e) {
      var t = nl();
      return t.memoizedState = e, e;
    }
    function Gb(e) {
      var t = Pi(), a = yr, i = a.memoizedState;
      return Xb(t, i, e);
    }
    function qb(e) {
      var t = Pi();
      if (yr === null)
        return t.memoizedState = e, e;
      var a = yr.memoizedState;
      return Xb(t, a, e);
    }
    function Xb(e, t, a) {
      var i = !Vy(uc);
      if (i) {
        if (!We(a, t)) {
          var l = Xd();
          an.lanes = bt(an.lanes, l), fv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Jp()), e.memoizedState = a, a;
    }
    function Hx(e, t, a) {
      var i = Ia();
      Kn(kr(i, vr)), e(!0);
      var l = Wp.transition;
      Wp.transition = {};
      var s = Wp.transition;
      Wp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Kn(i), Wp.transition = l, l === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && x("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function PS() {
      var e = Tm(!1), t = e[0], a = e[1], i = Hx.bind(null, a), l = nl();
      return l.memoizedState = i, [t, i];
    }
    function Kb() {
      var e = DS(), t = e[0], a = Pi(), i = a.memoizedState;
      return [t, i];
    }
    function Zb() {
      var e = OS(), t = e[0], a = Pi(), i = a.memoizedState;
      return [t, i];
    }
    var Jb = !1;
    function Bx() {
      return Jb;
    }
    function jS() {
      var e = nl(), t = ey(), a = t.identifierPrefix, i;
      if (Wr()) {
        var l = tx();
        i = ":" + a + "R" + l;
        var s = Yp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Ux++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Am() {
      var e = Pi(), t = e.memoizedState;
      return t;
    }
    function Vx(e, t, a) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = os(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (eC(e))
        tC(t, l);
      else {
        var s = gb(e, t, l, i);
        if (s !== null) {
          var f = za();
          Cr(s, e, i, f), nC(s, t, i);
        }
      }
      rC(e, i);
    }
    function $x(e, t, a) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = os(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (eC(e))
        tC(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === le && (s === null || s.lanes === le)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var m;
            m = Ue.current, Ue.current = fo;
            try {
              var g = t.lastRenderedState, C = f(g, a);
              if (l.hasEagerState = !0, l.eagerState = C, We(C, g)) {
                bx(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              Ue.current = m;
            }
          }
        }
        var R = gb(e, t, l, i);
        if (R !== null) {
          var N = za();
          Cr(R, e, i, N), nC(R, t, i);
        }
      }
      rC(e, i);
    }
    function eC(e) {
      var t = e.alternate;
      return e === an || t !== null && t === an;
    }
    function tC(e, t) {
      Ip = wm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function nC(e, t, a) {
      if (qd(a)) {
        var i = t.lanes;
        i = Kd(i, e.pendingLanes);
        var l = bt(i, a);
        t.lanes = l, Mu(e, l);
      }
    }
    function rC(e, t, a) {
      Wo(e, t);
    }
    var Um = {
      readContext: ur,
      useCallback: pa,
      useContext: pa,
      useEffect: pa,
      useImperativeHandle: pa,
      useInsertionEffect: pa,
      useLayoutEffect: pa,
      useMemo: pa,
      useReducer: pa,
      useRef: pa,
      useState: pa,
      useDebugValue: pa,
      useDeferredValue: pa,
      useTransition: pa,
      useMutableSource: pa,
      useSyncExternalStore: pa,
      useId: pa,
      unstable_isNewReconciler: ge
    }, aC = null, iC = null, oC = null, lC = null, rl = null, fo = null, Pm = null;
    {
      var FS = function() {
        E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, mt = function() {
        E("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      aC = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return se = "useCallback", en(), Gf(t), NS(e, t);
        },
        useContext: function(e) {
          return se = "useContext", en(), ur(e);
        },
        useEffect: function(e, t) {
          return se = "useEffect", en(), Gf(t), Dm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return se = "useImperativeHandle", en(), Gf(a), LS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return se = "useInsertionEffect", en(), Gf(t), zS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return se = "useLayoutEffect", en(), Gf(t), MS(e, t);
        },
        useMemo: function(e, t) {
          se = "useMemo", en(), Gf(t);
          var a = Ue.current;
          Ue.current = rl;
          try {
            return AS(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          se = "useReducer", en();
          var i = Ue.current;
          Ue.current = rl;
          try {
            return RS(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return se = "useRef", en(), kS(e);
        },
        useState: function(e) {
          se = "useState", en();
          var t = Ue.current;
          Ue.current = rl;
          try {
            return Tm(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return se = "useDebugValue", en(), void 0;
        },
        useDeferredValue: function(e) {
          return se = "useDeferredValue", en(), US(e);
        },
        useTransition: function() {
          return se = "useTransition", en(), PS();
        },
        useMutableSource: function(e, t, a) {
          return se = "useMutableSource", en(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return se = "useSyncExternalStore", en(), _S(e, t, a);
        },
        useId: function() {
          return se = "useId", en(), jS();
        },
        unstable_isNewReconciler: ge
      }, iC = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return se = "useCallback", ke(), NS(e, t);
        },
        useContext: function(e) {
          return se = "useContext", ke(), ur(e);
        },
        useEffect: function(e, t) {
          return se = "useEffect", ke(), Dm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return se = "useImperativeHandle", ke(), LS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return se = "useInsertionEffect", ke(), zS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return se = "useLayoutEffect", ke(), MS(e, t);
        },
        useMemo: function(e, t) {
          se = "useMemo", ke();
          var a = Ue.current;
          Ue.current = rl;
          try {
            return AS(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          se = "useReducer", ke();
          var i = Ue.current;
          Ue.current = rl;
          try {
            return RS(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return se = "useRef", ke(), kS(e);
        },
        useState: function(e) {
          se = "useState", ke();
          var t = Ue.current;
          Ue.current = rl;
          try {
            return Tm(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return se = "useDebugValue", ke(), void 0;
        },
        useDeferredValue: function(e) {
          return se = "useDeferredValue", ke(), US(e);
        },
        useTransition: function() {
          return se = "useTransition", ke(), PS();
        },
        useMutableSource: function(e, t, a) {
          return se = "useMutableSource", ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return se = "useSyncExternalStore", ke(), _S(e, t, a);
        },
        useId: function() {
          return se = "useId", ke(), jS();
        },
        unstable_isNewReconciler: ge
      }, oC = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return se = "useCallback", ke(), Lm(e, t);
        },
        useContext: function(e) {
          return se = "useContext", ke(), ur(e);
        },
        useEffect: function(e, t) {
          return se = "useEffect", ke(), qp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return se = "useImperativeHandle", ke(), zm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return se = "useInsertionEffect", ke(), Om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return se = "useLayoutEffect", ke(), km(e, t);
        },
        useMemo: function(e, t) {
          se = "useMemo", ke();
          var a = Ue.current;
          Ue.current = fo;
          try {
            return Nm(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          se = "useReducer", ke();
          var i = Ue.current;
          Ue.current = fo;
          try {
            return TS(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return se = "useRef", ke(), xm();
        },
        useState: function(e) {
          se = "useState", ke();
          var t = Ue.current;
          Ue.current = fo;
          try {
            return DS(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return se = "useDebugValue", ke(), Mm();
        },
        useDeferredValue: function(e) {
          return se = "useDeferredValue", ke(), Gb(e);
        },
        useTransition: function() {
          return se = "useTransition", ke(), Kb();
        },
        useMutableSource: function(e, t, a) {
          return se = "useMutableSource", ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return se = "useSyncExternalStore", ke(), Rm(e, t);
        },
        useId: function() {
          return se = "useId", ke(), Am();
        },
        unstable_isNewReconciler: ge
      }, lC = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return se = "useCallback", ke(), Lm(e, t);
        },
        useContext: function(e) {
          return se = "useContext", ke(), ur(e);
        },
        useEffect: function(e, t) {
          return se = "useEffect", ke(), qp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return se = "useImperativeHandle", ke(), zm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return se = "useInsertionEffect", ke(), Om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return se = "useLayoutEffect", ke(), km(e, t);
        },
        useMemo: function(e, t) {
          se = "useMemo", ke();
          var a = Ue.current;
          Ue.current = Pm;
          try {
            return Nm(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          se = "useReducer", ke();
          var i = Ue.current;
          Ue.current = Pm;
          try {
            return xS(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return se = "useRef", ke(), xm();
        },
        useState: function(e) {
          se = "useState", ke();
          var t = Ue.current;
          Ue.current = Pm;
          try {
            return OS(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return se = "useDebugValue", ke(), Mm();
        },
        useDeferredValue: function(e) {
          return se = "useDeferredValue", ke(), qb(e);
        },
        useTransition: function() {
          return se = "useTransition", ke(), Zb();
        },
        useMutableSource: function(e, t, a) {
          return se = "useMutableSource", ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return se = "useSyncExternalStore", ke(), Rm(e, t);
        },
        useId: function() {
          return se = "useId", ke(), Am();
        },
        unstable_isNewReconciler: ge
      }, rl = {
        readContext: function(e) {
          return FS(), ur(e);
        },
        useCallback: function(e, t) {
          return se = "useCallback", mt(), en(), NS(e, t);
        },
        useContext: function(e) {
          return se = "useContext", mt(), en(), ur(e);
        },
        useEffect: function(e, t) {
          return se = "useEffect", mt(), en(), Dm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return se = "useImperativeHandle", mt(), en(), LS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return se = "useInsertionEffect", mt(), en(), zS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return se = "useLayoutEffect", mt(), en(), MS(e, t);
        },
        useMemo: function(e, t) {
          se = "useMemo", mt(), en();
          var a = Ue.current;
          Ue.current = rl;
          try {
            return AS(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          se = "useReducer", mt(), en();
          var i = Ue.current;
          Ue.current = rl;
          try {
            return RS(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return se = "useRef", mt(), en(), kS(e);
        },
        useState: function(e) {
          se = "useState", mt(), en();
          var t = Ue.current;
          Ue.current = rl;
          try {
            return Tm(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return se = "useDebugValue", mt(), en(), void 0;
        },
        useDeferredValue: function(e) {
          return se = "useDeferredValue", mt(), en(), US(e);
        },
        useTransition: function() {
          return se = "useTransition", mt(), en(), PS();
        },
        useMutableSource: function(e, t, a) {
          return se = "useMutableSource", mt(), en(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return se = "useSyncExternalStore", mt(), en(), _S(e, t, a);
        },
        useId: function() {
          return se = "useId", mt(), en(), jS();
        },
        unstable_isNewReconciler: ge
      }, fo = {
        readContext: function(e) {
          return FS(), ur(e);
        },
        useCallback: function(e, t) {
          return se = "useCallback", mt(), ke(), Lm(e, t);
        },
        useContext: function(e) {
          return se = "useContext", mt(), ke(), ur(e);
        },
        useEffect: function(e, t) {
          return se = "useEffect", mt(), ke(), qp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return se = "useImperativeHandle", mt(), ke(), zm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return se = "useInsertionEffect", mt(), ke(), Om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return se = "useLayoutEffect", mt(), ke(), km(e, t);
        },
        useMemo: function(e, t) {
          se = "useMemo", mt(), ke();
          var a = Ue.current;
          Ue.current = fo;
          try {
            return Nm(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          se = "useReducer", mt(), ke();
          var i = Ue.current;
          Ue.current = fo;
          try {
            return TS(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return se = "useRef", mt(), ke(), xm();
        },
        useState: function(e) {
          se = "useState", mt(), ke();
          var t = Ue.current;
          Ue.current = fo;
          try {
            return DS(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return se = "useDebugValue", mt(), ke(), Mm();
        },
        useDeferredValue: function(e) {
          return se = "useDeferredValue", mt(), ke(), Gb(e);
        },
        useTransition: function() {
          return se = "useTransition", mt(), ke(), Kb();
        },
        useMutableSource: function(e, t, a) {
          return se = "useMutableSource", mt(), ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return se = "useSyncExternalStore", mt(), ke(), Rm(e, t);
        },
        useId: function() {
          return se = "useId", mt(), ke(), Am();
        },
        unstable_isNewReconciler: ge
      }, Pm = {
        readContext: function(e) {
          return FS(), ur(e);
        },
        useCallback: function(e, t) {
          return se = "useCallback", mt(), ke(), Lm(e, t);
        },
        useContext: function(e) {
          return se = "useContext", mt(), ke(), ur(e);
        },
        useEffect: function(e, t) {
          return se = "useEffect", mt(), ke(), qp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return se = "useImperativeHandle", mt(), ke(), zm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return se = "useInsertionEffect", mt(), ke(), Om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return se = "useLayoutEffect", mt(), ke(), km(e, t);
        },
        useMemo: function(e, t) {
          se = "useMemo", mt(), ke();
          var a = Ue.current;
          Ue.current = fo;
          try {
            return Nm(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          se = "useReducer", mt(), ke();
          var i = Ue.current;
          Ue.current = fo;
          try {
            return xS(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return se = "useRef", mt(), ke(), xm();
        },
        useState: function(e) {
          se = "useState", mt(), ke();
          var t = Ue.current;
          Ue.current = fo;
          try {
            return OS(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return se = "useDebugValue", mt(), ke(), Mm();
        },
        useDeferredValue: function(e) {
          return se = "useDeferredValue", mt(), ke(), qb(e);
        },
        useTransition: function() {
          return se = "useTransition", mt(), ke(), Zb();
        },
        useMutableSource: function(e, t, a) {
          return se = "useMutableSource", mt(), ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return se = "useSyncExternalStore", mt(), ke(), Rm(e, t);
        },
        useId: function() {
          return se = "useId", mt(), ke(), Am();
        },
        unstable_isNewReconciler: ge
      };
    }
    var ns = y.unstable_now, uC = 0, jm = -1, Xp = -1, Fm = -1, HS = !1, Hm = !1;
    function sC() {
      return HS;
    }
    function Wx() {
      Hm = !0;
    }
    function Ix() {
      HS = !1, Hm = !1;
    }
    function Yx() {
      HS = Hm, Hm = !1;
    }
    function cC() {
      return uC;
    }
    function fC() {
      uC = ns();
    }
    function BS(e) {
      Xp = ns(), e.actualStartTime < 0 && (e.actualStartTime = ns());
    }
    function dC(e) {
      Xp = -1;
    }
    function Bm(e, t) {
      if (Xp >= 0) {
        var a = ns() - Xp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Xp = -1;
      }
    }
    function al(e) {
      if (jm >= 0) {
        var t = ns() - jm;
        jm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case P:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case _e:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function VS(e) {
      if (Fm >= 0) {
        var t = ns() - Fm;
        Fm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case P:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case _e:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function il() {
      jm = ns();
    }
    function $S() {
      Fm = ns();
    }
    function WS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function sc(e, t) {
      return {
        value: e,
        source: t,
        stack: su(t),
        digest: null
      };
    }
    function IS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Qx(e, t) {
      return !0;
    }
    function YS(e, t) {
      try {
        var a = Qx(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === j)
            return;
          console.error(i);
        }
        var m = l ? ht(l) : null, g = m ? "The above error occurred in the <" + m + "> component:" : "The above error occurred in one of your React components:", C;
        if (e.tag === P)
          C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var R = ht(e) || "Anonymous";
          C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + R + ".");
        }
        var N = g + `
` + f + `

` + ("" + C);
        console.error(N);
      } catch (M) {
        setTimeout(function() {
          throw M;
        });
      }
    }
    var Gx = typeof WeakMap == "function" ? WeakMap : Map;
    function pC(e, t, a) {
      var i = Xl(dn, a);
      i.tag = Yg, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        HD(l), YS(e, t);
      }, i;
    }
    function QS(e, t, a) {
      var i = Xl(dn, a);
      i.tag = Yg;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          Rw(e), YS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        Rw(e), YS(e, t), typeof l != "function" && jD(this);
        var g = t.value, C = t.stack;
        this.componentDidCatch(g, {
          componentStack: C !== null ? C : ""
        }), typeof l != "function" && (ca(e.lanes, lt) || E("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ht(e) || "Unknown"));
      }), i;
    }
    function vC(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new Gx(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = BD.bind(null, e, t, a);
        pr && dv(e, a), t.then(s, s);
      }
    }
    function qx(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function Xx(e, t) {
      var a = e.tag;
      if ((e.mode & _t) === rt && (a === F || a === re || a === He)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function hC(e) {
      var t = e;
      do {
        if (t.tag === J && Nx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function mC(e, t, a, i, l) {
      if ((e.mode & _t) === rt) {
        if (e === t)
          e.flags |= rr;
        else {
          if (e.flags |= ft, a.flags |= zs, a.flags &= ~(Nc | wa), a.tag === j) {
            var s = a.alternate;
            if (s === null)
              a.tag = Mt;
            else {
              var f = Xl(dn, lt);
              f.tag = fm, Zu(a, f, lt);
            }
          }
          a.lanes = bt(a.lanes, lt);
        }
        return e;
      }
      return e.flags |= rr, e.lanes = l, e;
    }
    function Kx(e, t, a, i, l) {
      if (a.flags |= wa, pr && dv(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Xx(a), Wr() && a.mode & _t && ob();
        var f = hC(t);
        if (f !== null) {
          f.flags &= ~Nn, mC(f, t, a, e, l), f.mode & _t && vC(e, s, l), qx(f, e, s);
          return;
        } else {
          if (!ku(l)) {
            vC(e, s, l), x0();
            return;
          }
          var m = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = m;
        }
      } else if (Wr() && a.mode & _t) {
        ob();
        var g = hC(t);
        if (g !== null) {
          (g.flags & rr) === Je && (g.flags |= Nn), mC(g, t, a, e, l), Fg(sc(i, a));
          return;
        }
      }
      i = sc(i, a), kD(i);
      var C = t;
      do {
        switch (C.tag) {
          case P: {
            var R = i;
            C.flags |= rr;
            var N = Xn(l);
            C.lanes = bt(C.lanes, N);
            var M = pC(C, R, N);
            qg(C, M);
            return;
          }
          case j:
            var Y = i, G = C.type, ae = C.stateNode;
            if ((C.flags & ft) === Je && (typeof G.getDerivedStateFromError == "function" || ae !== null && typeof ae.componentDidCatch == "function" && !hw(ae))) {
              C.flags |= rr;
              var je = Xn(l);
              C.lanes = bt(C.lanes, je);
              var tt = QS(C, Y, je);
              qg(C, tt);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function Zx() {
      return null;
    }
    var Kp = p.ReactCurrentOwner, po = !1, GS, Zp, qS, XS, KS, cc, ZS, Vm;
    GS = {}, Zp = {}, qS = {}, XS = {}, KS = {}, cc = !1, ZS = {}, Vm = {};
    function Oa(e, t, a, i) {
      e === null ? t.child = Nb(t, null, a, i) : t.child = $f(t, e.child, a, i);
    }
    function Jx(e, t, a, i) {
      t.child = $f(t, e.child, null, i), t.child = $f(t, null, a, i);
    }
    function yC(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && oo(
          s,
          i,
          // Resolved props
          "prop",
          Ht(a)
        );
      }
      var f = a.render, m = t.ref, g, C;
      Vf(t, l), $o(t);
      {
        if (Kp.current = t, ta(!0), g = qf(e, t, f, i, m, l), C = Xf(), t.mode & kn) {
          qn(!0);
          try {
            g = qf(e, t, f, i, m, l), C = Xf();
          } finally {
            qn(!1);
          }
        }
        ta(!1);
      }
      return Tl(), e !== null && !po ? (Fb(e, t, l), Kl(e, t, l)) : (Wr() && C && Lg(t), t.flags |= Uo, Oa(e, t, g, l), t.child);
    }
    function gC(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (aO(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = ad(s), t.tag = He, t.type = f, t0(t, s), SC(e, t, f, i, l);
        }
        {
          var m = s.propTypes;
          m && oo(
            m,
            i,
            // Resolved props
            "prop",
            Ht(s)
          );
        }
        var g = P0(a.type, null, i, t, t.mode, l);
        return g.ref = t.ref, g.return = t, t.child = g, g;
      }
      {
        var C = a.type, R = C.propTypes;
        R && oo(
          R,
          i,
          // Resolved props
          "prop",
          Ht(C)
        );
      }
      var N = e.child, M = l0(e, l);
      if (!M) {
        var Y = N.memoizedProps, G = a.compare;
        if (G = G !== null ? G : Ze, G(Y, i) && e.ref === t.ref)
          return Kl(e, t, l);
      }
      t.flags |= Uo;
      var ae = hc(N, i);
      return ae.ref = t.ref, ae.return = t, t.child = ae, ae;
    }
    function SC(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === et) {
          var f = s, m = f._payload, g = f._init;
          try {
            s = g(m);
          } catch {
            s = null;
          }
          var C = s && s.propTypes;
          C && oo(
            C,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ht(s)
          );
        }
      }
      if (e !== null) {
        var R = e.memoizedProps;
        if (Ze(R, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (po = !1, t.pendingProps = i = R, l0(e, l))
            (e.flags & zs) !== Je && (po = !0);
          else
            return t.lanes = e.lanes, Kl(e, t, l);
      }
      return JS(e, t, a, i, l);
    }
    function EC(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || w)
        if ((t.mode & _t) === rt) {
          var f = {
            baseLanes: le,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, ty(t, a);
        } else if (ca(a, sa)) {
          var N = {
            baseLanes: le,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = N;
          var M = s !== null ? s.baseLanes : a;
          ty(t, M);
        } else {
          var m = null, g;
          if (s !== null) {
            var C = s.baseLanes;
            g = bt(C, a);
          } else
            g = a;
          t.lanes = t.childLanes = sa;
          var R = {
            baseLanes: g,
            cachePool: m,
            transitions: null
          };
          return t.memoizedState = R, t.updateQueue = null, ty(t, g), null;
        }
      else {
        var Y;
        s !== null ? (Y = bt(s.baseLanes, a), t.memoizedState = null) : Y = a, ty(t, Y);
      }
      return Oa(e, t, l, a), t.child;
    }
    function e_(e, t, a) {
      var i = t.pendingProps;
      return Oa(e, t, i, a), t.child;
    }
    function t_(e, t, a) {
      var i = t.pendingProps.children;
      return Oa(e, t, i, a), t.child;
    }
    function n_(e, t, a) {
      {
        t.flags |= Et;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return Oa(e, t, s, a), t.child;
    }
    function bC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= ra, t.flags |= Nd);
    }
    function JS(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && oo(
          s,
          i,
          // Resolved props
          "prop",
          Ht(a)
        );
      }
      var f;
      {
        var m = Uf(t, a, !0);
        f = Pf(t, m);
      }
      var g, C;
      Vf(t, l), $o(t);
      {
        if (Kp.current = t, ta(!0), g = qf(e, t, a, i, f, l), C = Xf(), t.mode & kn) {
          qn(!0);
          try {
            g = qf(e, t, a, i, f, l), C = Xf();
          } finally {
            qn(!1);
          }
        }
        ta(!1);
      }
      return Tl(), e !== null && !po ? (Fb(e, t, l), Kl(e, t, l)) : (Wr() && C && Lg(t), t.flags |= Uo, Oa(e, t, g, l), t.child);
    }
    function CC(e, t, a, i, l) {
      {
        switch (SO(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, m = new f(t.memoizedProps, s.context), g = m.state;
            s.updater.enqueueSetState(s, g, null);
            break;
          }
          case !0: {
            t.flags |= ft, t.flags |= rr;
            var C = new Error("Simulated error coming from DevTools"), R = Xn(l);
            t.lanes = bt(t.lanes, R);
            var N = QS(t, sc(C, t), R);
            qg(t, N);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var M = a.propTypes;
          M && oo(
            M,
            i,
            // Resolved props
            "prop",
            Ht(a)
          );
        }
      }
      var Y;
      el(a) ? (Y = !0, em(t)) : Y = !1, Vf(t, l);
      var G = t.stateNode, ae;
      G === null ? (Wm(e, t), Ob(t, a, i), lS(t, a, i, l), ae = !0) : e === null ? ae = Dx(t, a, i, l) : ae = Ox(e, t, a, i, l);
      var je = e0(e, t, a, ae, Y, l);
      {
        var tt = t.stateNode;
        ae && tt.props !== i && (cc || E("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ht(t) || "a component"), cc = !0);
      }
      return je;
    }
    function e0(e, t, a, i, l, s) {
      bC(e, t);
      var f = (t.flags & ft) !== Je;
      if (!i && !f)
        return l && nb(t, a, !1), Kl(e, t, s);
      var m = t.stateNode;
      Kp.current = t;
      var g;
      if (f && typeof a.getDerivedStateFromError != "function")
        g = null, dC();
      else {
        $o(t);
        {
          if (ta(!0), g = m.render(), t.mode & kn) {
            qn(!0);
            try {
              m.render();
            } finally {
              qn(!1);
            }
          }
          ta(!1);
        }
        Tl();
      }
      return t.flags |= Uo, e !== null && f ? Jx(e, t, g, s) : Oa(e, t, g, s), t.memoizedState = m.state, l && nb(t, a, !0), t.child;
    }
    function wC(e) {
      var t = e.stateNode;
      t.pendingContext ? eb(e, t.pendingContext, t.pendingContext !== t.context) : t.context && eb(e, t.context, !1), pS(e, t.containerInfo);
    }
    function r_(e, t, a) {
      if (wC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      bb(e, t), hm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var m = f.element;
      if (l.isDehydrated) {
        var g = {
          element: m,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, C = t.updateQueue;
        if (C.baseState = g, t.memoizedState = g, t.flags & Nn) {
          var R = sc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return RC(e, t, m, a, R);
        } else if (m !== s) {
          var N = sc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return RC(e, t, m, a, N);
        } else {
          lx(t);
          var M = Nb(t, null, m, a);
          t.child = M;
          for (var Y = M; Y; )
            Y.flags = Y.flags & ~gn | Ha, Y = Y.sibling;
        }
      } else {
        if (Hf(), m === s)
          return Kl(e, t, a);
        Oa(e, t, m, a);
      }
      return t.child;
    }
    function RC(e, t, a, i, l) {
      return Hf(), Fg(l), t.flags |= Nn, Oa(e, t, a, i), t.child;
    }
    function a_(e, t, a) {
      Ub(t), e === null && jg(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = l.children, m = Sg(i, l);
      return m ? f = null : s !== null && Sg(i, s) && (t.flags |= Jt), bC(e, t), Oa(e, t, f, a), t.child;
    }
    function i_(e, t) {
      return e === null && jg(t), null;
    }
    function o_(e, t, a, i) {
      Wm(e, t);
      var l = t.pendingProps, s = a, f = s._payload, m = s._init, g = m(f);
      t.type = g;
      var C = t.tag = iO(g), R = so(g, l), N;
      switch (C) {
        case F:
          return t0(t, g), t.type = g = ad(g), N = JS(null, t, g, R, i), N;
        case j:
          return t.type = g = z0(g), N = CC(null, t, g, R, i), N;
        case re:
          return t.type = g = M0(g), N = yC(null, t, g, R, i), N;
        case Qe: {
          if (t.type !== t.elementType) {
            var M = g.propTypes;
            M && oo(
              M,
              R,
              // Resolved for outer only
              "prop",
              Ht(g)
            );
          }
          return N = gC(
            null,
            t,
            g,
            so(g.type, R),
            // The inner type can have defaults too
            i
          ), N;
        }
      }
      var Y = "";
      throw g !== null && typeof g == "object" && g.$$typeof === et && (Y = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + g + ". " + ("Lazy element type must resolve to a class or function." + Y));
    }
    function l_(e, t, a, i, l) {
      Wm(e, t), t.tag = j;
      var s;
      return el(a) ? (s = !0, em(t)) : s = !1, Vf(t, l), Ob(t, a, i), lS(t, a, i, l), e0(null, t, a, !0, s, l);
    }
    function u_(e, t, a, i) {
      Wm(e, t);
      var l = t.pendingProps, s;
      {
        var f = Uf(t, a, !1);
        s = Pf(t, f);
      }
      Vf(t, i);
      var m, g;
      $o(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var C = Ht(a) || "Unknown";
          GS[C] || (E("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), GS[C] = !0);
        }
        t.mode & kn && uo.recordLegacyContextWarning(t, null), ta(!0), Kp.current = t, m = qf(null, t, a, l, s, i), g = Xf(), ta(!1);
      }
      if (Tl(), t.flags |= Uo, typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0) {
        var R = Ht(a) || "Unknown";
        Zp[R] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), Zp[R] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0
      ) {
        {
          var N = Ht(a) || "Unknown";
          Zp[N] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", N, N, N), Zp[N] = !0);
        }
        t.tag = j, t.memoizedState = null, t.updateQueue = null;
        var M = !1;
        return el(a) ? (M = !0, em(t)) : M = !1, t.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, Gg(t), Db(t, m), lS(t, a, l, i), e0(null, t, a, !0, M, i);
      } else {
        if (t.tag = F, t.mode & kn) {
          qn(!0);
          try {
            m = qf(null, t, a, l, s, i), g = Xf();
          } finally {
            qn(!1);
          }
        }
        return Wr() && g && Lg(t), Oa(null, t, m, i), t0(t, a), t.child;
      }
    }
    function t0(e, t) {
      {
        if (t && t.childContextTypes && E("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Br();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), KS[l] || (KS[l] = !0, E("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = Ht(t) || "Unknown";
          XS[f] || (E("%s: Function components do not support getDerivedStateFromProps.", f), XS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var m = Ht(t) || "Unknown";
          qS[m] || (E("%s: Function components do not support contextType.", m), qS[m] = !0);
        }
      }
    }
    var n0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: At
    };
    function r0(e) {
      return {
        baseLanes: e,
        cachePool: Zx(),
        transitions: null
      };
    }
    function s_(e, t) {
      var a = null;
      return {
        baseLanes: bt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function c_(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return mS(e, $p);
    }
    function f_(e, t) {
      return zu(e.childLanes, t);
    }
    function TC(e, t, a) {
      var i = t.pendingProps;
      EO(t) && (t.flags |= ft);
      var l = co.current, s = !1, f = (t.flags & ft) !== Je;
      if (f || c_(l, e) ? (s = !0, t.flags &= ~ft) : (e === null || e.memoizedState !== null) && (l = Lx(l, jb)), l = If(l), es(t, l), e === null) {
        jg(t);
        var m = t.memoizedState;
        if (m !== null) {
          var g = m.dehydrated;
          if (g !== null)
            return m_(t, g);
        }
        var C = i.children, R = i.fallback;
        if (s) {
          var N = d_(t, C, R, a), M = t.child;
          return M.memoizedState = r0(a), t.memoizedState = n0, N;
        } else
          return a0(t, C);
      } else {
        var Y = e.memoizedState;
        if (Y !== null) {
          var G = Y.dehydrated;
          if (G !== null)
            return y_(e, t, f, i, G, Y, a);
        }
        if (s) {
          var ae = i.fallback, je = i.children, tt = v_(e, t, je, ae, a), qe = t.child, Pt = e.child.memoizedState;
          return qe.memoizedState = Pt === null ? r0(a) : s_(Pt, a), qe.childLanes = f_(e, a), t.memoizedState = n0, tt;
        } else {
          var kt = i.children, B = p_(e, t, kt, a);
          return t.memoizedState = null, B;
        }
      }
    }
    function a0(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = i0(l, i);
      return s.return = e, e.child = s, s;
    }
    function d_(e, t, a, i) {
      var l = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, m, g;
      return (l & _t) === rt && s !== null ? (m = s, m.childLanes = le, m.pendingProps = f, e.mode & it && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = 0, m.treeBaseDuration = 0), g = us(a, l, i, null)) : (m = i0(f, l), g = us(a, l, i, null)), m.return = e, g.return = e, m.sibling = g, e.child = m, g;
    }
    function i0(e, t, a) {
      return xw(e, t, le, null);
    }
    function xC(e, t) {
      return hc(e, t);
    }
    function p_(e, t, a, i) {
      var l = e.child, s = l.sibling, f = xC(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & _t) === rt && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var m = t.deletions;
        m === null ? (t.deletions = [s], t.flags |= Gt) : m.push(s);
      }
      return t.child = f, f;
    }
    function v_(e, t, a, i, l) {
      var s = t.mode, f = e.child, m = f.sibling, g = {
        mode: "hidden",
        children: a
      }, C;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & _t) === rt && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var R = t.child;
        C = R, C.childLanes = le, C.pendingProps = g, t.mode & it && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = f.selfBaseDuration, C.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        C = xC(f, g), C.subtreeFlags = f.subtreeFlags & dr;
      var N;
      return m !== null ? N = hc(m, i) : (N = us(i, s, l, null), N.flags |= gn), N.return = t, C.return = t, C.sibling = N, t.child = C, N;
    }
    function $m(e, t, a, i) {
      i !== null && Fg(i), $f(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, f = a0(t, s);
      return f.flags |= gn, t.memoizedState = null, f;
    }
    function h_(e, t, a, i, l) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, m = i0(f, s), g = us(i, s, l, null);
      return g.flags |= gn, m.return = t, g.return = t, m.sibling = g, t.child = m, (t.mode & _t) !== rt && $f(t, e.child, null, l), g;
    }
    function m_(e, t, a) {
      return (e.mode & _t) === rt ? (E("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = lt) : wg(t) ? e.lanes = Dl : e.lanes = sa, null;
    }
    function y_(e, t, a, i, l, s, f) {
      if (a)
        if (t.flags & Nn) {
          t.flags &= ~Nn;
          var B = IS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return $m(e, t, f, B);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ft, null;
          var ie = i.children, V = i.fallback, ye = h_(e, t, ie, V, f), Fe = t.child;
          return Fe.memoizedState = r0(f), t.memoizedState = n0, ye;
        }
      else {
        if (ix(), (t.mode & _t) === rt)
          return $m(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (wg(l)) {
          var m, g, C;
          {
            var R = C1(l);
            m = R.digest, g = R.message, C = R.stack;
          }
          var N;
          g ? N = new Error(g) : N = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var M = IS(N, m, C);
          return $m(e, t, f, M);
        }
        var Y = ca(f, e.childLanes);
        if (po || Y) {
          var G = ey();
          if (G !== null) {
            var ae = Wy(G, f);
            if (ae !== At && ae !== s.retryLane) {
              s.retryLane = ae;
              var je = dn;
              Xa(e, ae), Cr(G, e, ae, je);
            }
          }
          x0();
          var tt = IS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return $m(e, t, f, tt);
        } else if (GE(l)) {
          t.flags |= ft, t.child = e.child;
          var qe = VD.bind(null, e);
          return w1(l, qe), null;
        } else {
          ux(t, l, s.treeContext);
          var Pt = i.children, kt = a0(t, Pt);
          return kt.flags |= Ha, kt;
        }
      }
    }
    function _C(e, t, a) {
      e.lanes = bt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = bt(i.lanes, t)), Wg(e.return, t, a);
    }
    function g_(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === J) {
          var l = i.memoizedState;
          l !== null && _C(i, a, e);
        } else if (i.tag === ot)
          _C(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function S_(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Cm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function E_(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !ZS[e])
        if (ZS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              E('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              E('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              E('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          E('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function b_(e, t) {
      e !== void 0 && !Vm[e] && (e !== "collapsed" && e !== "hidden" ? (Vm[e] = !0, E('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Vm[e] = !0, E('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function DC(e, t) {
      {
        var a = Lt(e), i = !a && typeof ri(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return E("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function C_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Lt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!DC(e[a], a))
              return;
        } else {
          var i = ri(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), f = 0; !s.done; s = l.next()) {
                if (!DC(s.value, f))
                  return;
                f++;
              }
          } else
            E('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function o0(e, t, a, i, l) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: l
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = l);
    }
    function OC(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, f = i.children;
      E_(l), b_(s, l), C_(f, l), Oa(e, t, f, a);
      var m = co.current, g = mS(m, $p);
      if (g)
        m = yS(m, $p), t.flags |= ft;
      else {
        var C = e !== null && (e.flags & ft) !== Je;
        C && g_(t, t.child, a), m = If(m);
      }
      if (es(t, m), (t.mode & _t) === rt)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var R = S_(t.child), N;
            R === null ? (N = t.child, t.child = null) : (N = R.sibling, R.sibling = null), o0(
              t,
              !1,
              // isBackwards
              N,
              R,
              s
            );
            break;
          }
          case "backwards": {
            var M = null, Y = t.child;
            for (t.child = null; Y !== null; ) {
              var G = Y.alternate;
              if (G !== null && Cm(G) === null) {
                t.child = Y;
                break;
              }
              var ae = Y.sibling;
              Y.sibling = M, M = Y, Y = ae;
            }
            o0(
              t,
              !0,
              // isBackwards
              M,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            o0(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function w_(e, t, a) {
      pS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = $f(t, null, i, a) : Oa(e, t, i, a), t.child;
    }
    var kC = !1;
    function R_(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, f = t.memoizedProps, m = s.value;
      {
        "value" in s || kC || (kC = !0, E("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var g = t.type.propTypes;
        g && oo(g, s, "prop", "Context.Provider");
      }
      if (yb(t, l, m), f !== null) {
        var C = f.value;
        if (We(C, m)) {
          if (f.children === s.children && !Zh())
            return Kl(e, t, a);
        } else
          gx(t, l, a);
      }
      var R = s.children;
      return Oa(e, t, R, a), t.child;
    }
    var zC = !1;
    function T_(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (zC || (zC = !0, E("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && E("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Vf(t, a);
      var f = ur(i);
      $o(t);
      var m;
      return Kp.current = t, ta(!0), m = s(f), ta(!1), Tl(), t.flags |= Uo, Oa(e, t, m, a), t.child;
    }
    function Jp() {
      po = !0;
    }
    function Wm(e, t) {
      (t.mode & _t) === rt && e !== null && (e.alternate = null, t.alternate = null, t.flags |= gn);
    }
    function Kl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), dC(), fv(t.lanes), ca(a, t.childLanes) ? (kx(e, t), t.child) : null;
    }
    function x_(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Gt) : s.push(e), a.flags |= gn, a;
      }
    }
    function l0(e, t) {
      var a = e.lanes;
      return !!ca(a, t);
    }
    function __(e, t, a) {
      switch (t.tag) {
        case P:
          wC(t), t.stateNode, Hf();
          break;
        case Z:
          Ub(t);
          break;
        case j: {
          var i = t.type;
          el(i) && em(t);
          break;
        }
        case K:
          pS(t, t.stateNode.containerInfo);
          break;
        case oe: {
          var l = t.memoizedProps.value, s = t.type._context;
          yb(t, s, l);
          break;
        }
        case _e:
          {
            var f = ca(a, t.childLanes);
            f && (t.flags |= Et);
            {
              var m = t.stateNode;
              m.effectDuration = 0, m.passiveEffectDuration = 0;
            }
          }
          break;
        case J: {
          var g = t.memoizedState;
          if (g !== null) {
            if (g.dehydrated !== null)
              return es(t, If(co.current)), t.flags |= ft, null;
            var C = t.child, R = C.childLanes;
            if (ca(a, R))
              return TC(e, t, a);
            es(t, If(co.current));
            var N = Kl(e, t, a);
            return N !== null ? N.sibling : null;
          } else
            es(t, If(co.current));
          break;
        }
        case ot: {
          var M = (e.flags & ft) !== Je, Y = ca(a, t.childLanes);
          if (M) {
            if (Y)
              return OC(e, t, a);
            t.flags |= ft;
          }
          var G = t.memoizedState;
          if (G !== null && (G.rendering = null, G.tail = null, G.lastEffect = null), es(t, co.current), Y)
            break;
          return null;
        }
        case Ne:
        case Xe:
          return t.lanes = le, EC(e, t, a);
      }
      return Kl(e, t, a);
    }
    function MC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return x_(e, t, P0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || Zh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          po = !0;
        else {
          var s = l0(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ft) === Je)
            return po = !1, __(e, t, a);
          (e.flags & zs) !== Je ? po = !0 : po = !1;
        }
      } else if (po = !1, Wr() && J1(t)) {
        var f = t.index, m = ex();
        ib(t, m, f);
      }
      switch (t.lanes = le, t.tag) {
        case ee:
          return u_(e, t, t.type, a);
        case pt: {
          var g = t.elementType;
          return o_(e, t, g, a);
        }
        case F: {
          var C = t.type, R = t.pendingProps, N = t.elementType === C ? R : so(C, R);
          return JS(e, t, C, N, a);
        }
        case j: {
          var M = t.type, Y = t.pendingProps, G = t.elementType === M ? Y : so(M, Y);
          return CC(e, t, M, G, a);
        }
        case P:
          return r_(e, t, a);
        case Z:
          return a_(e, t, a);
        case fe:
          return i_(e, t);
        case J:
          return TC(e, t, a);
        case K:
          return w_(e, t, a);
        case re: {
          var ae = t.type, je = t.pendingProps, tt = t.elementType === ae ? je : so(ae, je);
          return yC(e, t, ae, tt, a);
        }
        case me:
          return e_(e, t, a);
        case we:
          return t_(e, t, a);
        case _e:
          return n_(e, t, a);
        case oe:
          return R_(e, t, a);
        case Se:
          return T_(e, t, a);
        case Qe: {
          var qe = t.type, Pt = t.pendingProps, kt = so(qe, Pt);
          if (t.type !== t.elementType) {
            var B = qe.propTypes;
            B && oo(
              B,
              kt,
              // Resolved for outer only
              "prop",
              Ht(qe)
            );
          }
          return kt = so(qe.type, kt), gC(e, t, qe, kt, a);
        }
        case He:
          return SC(e, t, t.type, t.pendingProps, a);
        case Mt: {
          var ie = t.type, V = t.pendingProps, ye = t.elementType === ie ? V : so(ie, V);
          return l_(e, t, ie, ye, a);
        }
        case ot:
          return OC(e, t, a);
        case ut:
          break;
        case Ne:
          return EC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Kf(e) {
      e.flags |= Et;
    }
    function LC(e) {
      e.flags |= ra, e.flags |= Nd;
    }
    var NC, u0, AC, UC;
    NC = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === Z || l.tag === fe)
          XT(e, l.stateNode);
        else if (l.tag !== K) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, u0 = function(e, t) {
    }, AC = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, m = vS(), g = ZT(f, a, s, i, l, m);
        t.updateQueue = g, g && Kf(t);
      }
    }, UC = function(e, t, a, i) {
      a !== i && Kf(t);
    };
    function ev(e, t) {
      if (!Wr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, s = null; l !== null; )
              l.alternate !== null && (s = l), l = l.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Yr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = le, i = Je;
      if (t) {
        if ((e.mode & it) !== rt) {
          for (var g = e.selfBaseDuration, C = e.child; C !== null; )
            a = bt(a, bt(C.lanes, C.childLanes)), i |= C.subtreeFlags & dr, i |= C.flags & dr, g += C.treeBaseDuration, C = C.sibling;
          e.treeBaseDuration = g;
        } else
          for (var R = e.child; R !== null; )
            a = bt(a, bt(R.lanes, R.childLanes)), i |= R.subtreeFlags & dr, i |= R.flags & dr, R.return = e, R = R.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & it) !== rt) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = bt(a, bt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, l += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var m = e.child; m !== null; )
            a = bt(a, bt(m.lanes, m.childLanes)), i |= m.subtreeFlags, i |= m.flags, m.return = e, m = m.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function D_(e, t, a) {
      if (px() && (t.mode & _t) !== rt && (t.flags & ft) === Je)
        return db(t), Hf(), t.flags |= Nn | wa | rr, !1;
      var i = im(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (fx(t), Yr(t), (t.mode & it) !== rt) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Hf(), (t.flags & ft) === Je && (t.memoizedState = null), t.flags |= Et, Yr(t), (t.mode & it) !== rt) {
            var f = a !== null;
            if (f) {
              var m = t.child;
              m !== null && (t.treeBaseDuration -= m.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return pb(), !0;
    }
    function PC(e, t, a) {
      var i = t.pendingProps;
      switch (Ng(t), t.tag) {
        case ee:
        case pt:
        case He:
        case F:
        case re:
        case me:
        case we:
        case _e:
        case Se:
        case Qe:
          return Yr(t), null;
        case j: {
          var l = t.type;
          return el(l) && Jh(t), Yr(t), null;
        }
        case P: {
          var s = t.stateNode;
          if (Wf(t), kg(t), SS(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = im(t);
            if (f)
              Kf(t);
            else if (e !== null) {
              var m = e.memoizedState;
              // Check if this is a client root
              (!m.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Nn) !== Je) && (t.flags |= Fa, pb());
            }
          }
          return u0(e, t), Yr(t), null;
        }
        case Z: {
          hS(t);
          var g = Ab(), C = t.type;
          if (e !== null && t.stateNode != null)
            AC(e, t, C, i, g), e.ref !== t.ref && LC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Yr(t), null;
            }
            var R = vS(), N = im(t);
            if (N)
              sx(t, g, R) && Kf(t);
            else {
              var M = qT(C, i, g, R, t);
              NC(M, t, !1, !1), t.stateNode = M, KT(M, C, i, g) && Kf(t);
            }
            t.ref !== null && LC(t);
          }
          return Yr(t), null;
        }
        case fe: {
          var Y = i;
          if (e && t.stateNode != null) {
            var G = e.memoizedProps;
            UC(e, t, G, Y);
          } else {
            if (typeof Y != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ae = Ab(), je = vS(), tt = im(t);
            tt ? cx(t) && Kf(t) : t.stateNode = JT(Y, ae, je, t);
          }
          return Yr(t), null;
        }
        case J: {
          Yf(t);
          var qe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Pt = D_(e, t, qe);
            if (!Pt)
              return t.flags & rr ? t : null;
          }
          if ((t.flags & ft) !== Je)
            return t.lanes = a, (t.mode & it) !== rt && WS(t), t;
          var kt = qe !== null, B = e !== null && e.memoizedState !== null;
          if (kt !== B && kt) {
            var ie = t.child;
            if (ie.flags |= Po, (t.mode & _t) !== rt) {
              var V = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !U);
              V || mS(co.current, jb) ? OD() : x0();
            }
          }
          var ye = t.updateQueue;
          if (ye !== null && (t.flags |= Et), Yr(t), (t.mode & it) !== rt && kt) {
            var Fe = t.child;
            Fe !== null && (t.treeBaseDuration -= Fe.treeBaseDuration);
          }
          return null;
        }
        case K:
          return Wf(t), u0(e, t), e === null && Y1(t.stateNode.containerInfo), Yr(t), null;
        case oe:
          var Le = t.type._context;
          return $g(Le, t), Yr(t), null;
        case Mt: {
          var ct = t.type;
          return el(ct) && Jh(t), Yr(t), null;
        }
        case ot: {
          Yf(t);
          var yt = t.memoizedState;
          if (yt === null)
            return Yr(t), null;
          var on = (t.flags & ft) !== Je, Wt = yt.rendering;
          if (Wt === null)
            if (on)
              ev(yt, !1);
            else {
              var er = zD() && (e === null || (e.flags & ft) === Je);
              if (!er)
                for (var It = t.child; It !== null; ) {
                  var Yn = Cm(It);
                  if (Yn !== null) {
                    on = !0, t.flags |= ft, ev(yt, !1);
                    var va = Yn.updateQueue;
                    return va !== null && (t.updateQueue = va, t.flags |= Et), t.subtreeFlags = Je, zx(t, a), es(t, yS(co.current, $p)), t.child;
                  }
                  It = It.sibling;
                }
              yt.tail !== null && On() > aw() && (t.flags |= ft, on = !0, ev(yt, !1), t.lanes = Qd);
            }
          else {
            if (!on) {
              var Kr = Cm(Wt);
              if (Kr !== null) {
                t.flags |= ft, on = !0;
                var vi = Kr.updateQueue;
                if (vi !== null && (t.updateQueue = vi, t.flags |= Et), ev(yt, !0), yt.tail === null && yt.tailMode === "hidden" && !Wt.alternate && !Wr())
                  return Yr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                On() * 2 - yt.renderingStartTime > aw() && a !== sa && (t.flags |= ft, on = !0, ev(yt, !1), t.lanes = Qd);
            }
            if (yt.isBackwards)
              Wt.sibling = t.child, t.child = Wt;
            else {
              var Ma = yt.last;
              Ma !== null ? Ma.sibling = Wt : t.child = Wt, yt.last = Wt;
            }
          }
          if (yt.tail !== null) {
            var La = yt.tail;
            yt.rendering = La, yt.tail = La.sibling, yt.renderingStartTime = On(), La.sibling = null;
            var ha = co.current;
            return on ? ha = yS(ha, $p) : ha = If(ha), es(t, ha), La;
          }
          return Yr(t), null;
        }
        case ut:
          break;
        case Ne:
        case Xe: {
          T0(t);
          var nu = t.memoizedState, id = nu !== null;
          if (e !== null) {
            var mv = e.memoizedState, ul = mv !== null;
            ul !== id && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !w && (t.flags |= Po);
          }
          return !id || (t.mode & _t) === rt ? Yr(t) : ca(ll, sa) && (Yr(t), t.subtreeFlags & (gn | Et) && (t.flags |= Po)), null;
        }
        case Rt:
          return null;
        case st:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function O_(e, t, a) {
      switch (Ng(t), t.tag) {
        case j: {
          var i = t.type;
          el(i) && Jh(t);
          var l = t.flags;
          return l & rr ? (t.flags = l & ~rr | ft, (t.mode & it) !== rt && WS(t), t) : null;
        }
        case P: {
          t.stateNode, Wf(t), kg(t), SS();
          var s = t.flags;
          return (s & rr) !== Je && (s & ft) === Je ? (t.flags = s & ~rr | ft, t) : null;
        }
        case Z:
          return hS(t), null;
        case J: {
          Yf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Hf();
          }
          var m = t.flags;
          return m & rr ? (t.flags = m & ~rr | ft, (t.mode & it) !== rt && WS(t), t) : null;
        }
        case ot:
          return Yf(t), null;
        case K:
          return Wf(t), null;
        case oe:
          var g = t.type._context;
          return $g(g, t), null;
        case Ne:
        case Xe:
          return T0(t), null;
        case Rt:
          return null;
        default:
          return null;
      }
    }
    function jC(e, t, a) {
      switch (Ng(t), t.tag) {
        case j: {
          var i = t.type.childContextTypes;
          i != null && Jh(t);
          break;
        }
        case P: {
          t.stateNode, Wf(t), kg(t), SS();
          break;
        }
        case Z: {
          hS(t);
          break;
        }
        case K:
          Wf(t);
          break;
        case J:
          Yf(t);
          break;
        case ot:
          Yf(t);
          break;
        case oe:
          var l = t.type._context;
          $g(l, t);
          break;
        case Ne:
        case Xe:
          T0(t);
          break;
      }
    }
    var FC = null;
    FC = /* @__PURE__ */ new Set();
    var Im = !1, Qr = !1, k_ = typeof WeakSet == "function" ? WeakSet : Set, Ie = null, Zf = null, Jf = null;
    function z_(e) {
      wl(null, function() {
        throw e;
      }), Md();
    }
    var M_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & it)
        try {
          il(), t.componentWillUnmount();
        } finally {
          al(e);
        }
      else
        t.componentWillUnmount();
    };
    function HC(e, t) {
      try {
        rs(mr, e);
      } catch (a) {
        Cn(e, t, a);
      }
    }
    function s0(e, t, a) {
      try {
        M_(e, a);
      } catch (i) {
        Cn(e, t, i);
      }
    }
    function L_(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Cn(e, t, i);
      }
    }
    function BC(e, t) {
      try {
        $C(e);
      } catch (a) {
        Cn(e, t, a);
      }
    }
    function ed(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (X && ue && e.mode & it)
              try {
                il(), i = a(null);
              } finally {
                al(e);
              }
            else
              i = a(null);
          } catch (l) {
            Cn(e, t, l);
          }
          typeof i == "function" && E("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ht(e));
        } else
          a.current = null;
    }
    function Ym(e, t, a) {
      try {
        a();
      } catch (i) {
        Cn(e, t, i);
      }
    }
    var VC = !1;
    function N_(e, t) {
      QT(e.containerInfo), Ie = t, A_();
      var a = VC;
      return VC = !1, a;
    }
    function A_() {
      for (; Ie !== null; ) {
        var e = Ie, t = e.child;
        (e.subtreeFlags & wu) !== Je && t !== null ? (t.return = e, Ie = t) : U_();
      }
    }
    function U_() {
      for (; Ie !== null; ) {
        var e = Ie;
        Zt(e);
        try {
          P_(e);
        } catch (a) {
          Cn(e, e.return, a);
        }
        Ln();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ie = t;
          return;
        }
        Ie = e.return;
      }
    }
    function P_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Fa) !== Je) {
        switch (Zt(e), e.tag) {
          case F:
          case re:
          case He:
            break;
          case j: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !cc && (s.props !== e.memoizedProps && E("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ht(e) || "instance"), s.state !== e.memoizedState && E("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ht(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : so(e.type, i), l);
              {
                var m = FC;
                f === void 0 && !m.has(e.type) && (m.add(e.type), E("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ht(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case P: {
            {
              var g = e.stateNode;
              g1(g.containerInfo);
            }
            break;
          }
          case Z:
          case fe:
          case K:
          case Mt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Ln();
      }
    }
    function vo(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var m = f.destroy;
            f.destroy = void 0, m !== void 0 && ((e & Ir) !== Ka ? Vc(t) : (e & mr) !== Ka && $c(t), (e & tl) !== Ka && pv(!0), Ym(t, a, m), (e & tl) !== Ka && pv(!1), (e & Ir) !== Ka ? ah() : (e & mr) !== Ka && Ru());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function rs(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & Ir) !== Ka ? rh(t) : (e & mr) !== Ka && ih(t);
            var f = s.create;
            (e & tl) !== Ka && pv(!0), s.destroy = f(), (e & tl) !== Ka && pv(!1), (e & Ir) !== Ka ? Wd() : (e & mr) !== Ka && oh();
            {
              var m = s.destroy;
              if (m !== void 0 && typeof m != "function") {
                var g = void 0;
                (s.tag & mr) !== Je ? g = "useLayoutEffect" : (s.tag & tl) !== Je ? g = "useInsertionEffect" : g = "useEffect";
                var C = void 0;
                m === null ? C = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof m.then == "function" ? C = `

It looks like you wrote ` + g + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + g + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : C = " You returned: " + m, E("%s must not return anything besides a function, which is used for clean-up.%s", g, C);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function j_(e, t) {
      if ((t.flags & Et) !== Je)
        switch (t.tag) {
          case _e: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, f = cC(), m = t.alternate === null ? "mount" : "update";
            sC() && (m = "nested-update"), typeof s == "function" && s(l, m, a, f);
            var g = t.return;
            e:
              for (; g !== null; ) {
                switch (g.tag) {
                  case P:
                    var C = g.stateNode;
                    C.passiveEffectDuration += a;
                    break e;
                  case _e:
                    var R = g.stateNode;
                    R.passiveEffectDuration += a;
                    break e;
                }
                g = g.return;
              }
            break;
          }
        }
    }
    function F_(e, t, a, i) {
      if ((a.flags & Dr) !== Je)
        switch (a.tag) {
          case F:
          case re:
          case He: {
            if (!Qr)
              if (a.mode & it)
                try {
                  il(), rs(mr | hr, a);
                } finally {
                  al(a);
                }
              else
                rs(mr | hr, a);
            break;
          }
          case j: {
            var l = a.stateNode;
            if (a.flags & Et && !Qr)
              if (t === null)
                if (a.type === a.elementType && !cc && (l.props !== a.memoizedProps && E("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ht(a) || "instance"), l.state !== a.memoizedState && E("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ht(a) || "instance")), a.mode & it)
                  try {
                    il(), l.componentDidMount();
                  } finally {
                    al(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : so(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !cc && (l.props !== a.memoizedProps && E("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ht(a) || "instance"), l.state !== a.memoizedState && E("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ht(a) || "instance")), a.mode & it)
                  try {
                    il(), l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    al(a);
                  }
                else
                  l.componentDidUpdate(s, f, l.__reactInternalSnapshotBeforeUpdate);
              }
            var m = a.updateQueue;
            m !== null && (a.type === a.elementType && !cc && (l.props !== a.memoizedProps && E("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ht(a) || "instance"), l.state !== a.memoizedState && E("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ht(a) || "instance")), wb(a, m, l));
            break;
          }
          case P: {
            var g = a.updateQueue;
            if (g !== null) {
              var C = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Z:
                    C = a.child.stateNode;
                    break;
                  case j:
                    C = a.child.stateNode;
                    break;
                }
              wb(a, g, C);
            }
            break;
          }
          case Z: {
            var R = a.stateNode;
            if (t === null && a.flags & Et) {
              var N = a.type, M = a.memoizedProps;
              a1(R, N, M);
            }
            break;
          }
          case fe:
            break;
          case K:
            break;
          case _e: {
            {
              var Y = a.memoizedProps, G = Y.onCommit, ae = Y.onRender, je = a.stateNode.effectDuration, tt = cC(), qe = t === null ? "mount" : "update";
              sC() && (qe = "nested-update"), typeof ae == "function" && ae(a.memoizedProps.id, qe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, tt);
              {
                typeof G == "function" && G(a.memoizedProps.id, qe, je, tt), UD(a);
                var Pt = a.return;
                e:
                  for (; Pt !== null; ) {
                    switch (Pt.tag) {
                      case P:
                        var kt = Pt.stateNode;
                        kt.effectDuration += je;
                        break e;
                      case _e:
                        var B = Pt.stateNode;
                        B.effectDuration += je;
                        break e;
                    }
                    Pt = Pt.return;
                  }
              }
            }
            break;
          }
          case J: {
            Q_(e, a);
            break;
          }
          case ot:
          case Mt:
          case ut:
          case Ne:
          case Xe:
          case st:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Qr || a.flags & ra && $C(a);
    }
    function H_(e) {
      switch (e.tag) {
        case F:
        case re:
        case He: {
          if (e.mode & it)
            try {
              il(), HC(e, e.return);
            } finally {
              al(e);
            }
          else
            HC(e, e.return);
          break;
        }
        case j: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && L_(e, e.return, t), BC(e, e.return);
          break;
        }
        case Z: {
          BC(e, e.return);
          break;
        }
      }
    }
    function B_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === Z) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? v1(l) : m1(i.stateNode, i.memoizedProps);
            } catch (f) {
              Cn(e, e.return, f);
            }
          }
        } else if (i.tag === fe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? h1(s) : y1(s, i.memoizedProps);
            } catch (f) {
              Cn(e, e.return, f);
            }
        } else if (!((i.tag === Ne || i.tag === Xe) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function $C(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case Z:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & it)
            try {
              il(), l = t(i);
            } finally {
              al(e);
            }
          else
            l = t(i);
          typeof l == "function" && E("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ht(e));
        } else
          t.hasOwnProperty("current") || E("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ht(e)), t.current = i;
      }
    }
    function V_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function WC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, WC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Z) {
          var a = e.stateNode;
          a !== null && q1(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function $_(e) {
      for (var t = e.return; t !== null; ) {
        if (IC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function IC(e) {
      return e.tag === Z || e.tag === P || e.tag === K;
    }
    function YC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || IC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== Z && t.tag !== fe && t.tag !== vt; ) {
            if (t.flags & gn || t.child === null || t.tag === K)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & gn))
            return t.stateNode;
        }
    }
    function W_(e) {
      var t = $_(e);
      switch (t.tag) {
        case Z: {
          var a = t.stateNode;
          t.flags & Jt && (QE(a), t.flags &= ~Jt);
          var i = YC(e);
          f0(e, i, a);
          break;
        }
        case P:
        case K: {
          var l = t.stateNode.containerInfo, s = YC(e);
          c0(e, s, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function c0(e, t, a) {
      var i = e.tag, l = i === Z || i === fe;
      if (l) {
        var s = e.stateNode;
        t ? c1(a, s, t) : u1(a, s);
      } else if (i !== K) {
        var f = e.child;
        if (f !== null) {
          c0(f, t, a);
          for (var m = f.sibling; m !== null; )
            c0(m, t, a), m = m.sibling;
        }
      }
    }
    function f0(e, t, a) {
      var i = e.tag, l = i === Z || i === fe;
      if (l) {
        var s = e.stateNode;
        t ? s1(a, s, t) : l1(a, s);
      } else if (i !== K) {
        var f = e.child;
        if (f !== null) {
          f0(f, t, a);
          for (var m = f.sibling; m !== null; )
            f0(m, t, a), m = m.sibling;
        }
      }
    }
    var Gr = null, ho = !1;
    function I_(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case Z: {
                Gr = i.stateNode, ho = !1;
                break e;
              }
              case P: {
                Gr = i.stateNode.containerInfo, ho = !0;
                break e;
              }
              case K: {
                Gr = i.stateNode.containerInfo, ho = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Gr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        QC(e, t, a), Gr = null, ho = !1;
      }
      V_(a);
    }
    function as(e, t, a) {
      for (var i = a.child; i !== null; )
        QC(e, t, i), i = i.sibling;
    }
    function QC(e, t, a) {
      switch (Vd(a), a.tag) {
        case Z:
          Qr || ed(a, t);
        case fe: {
          {
            var i = Gr, l = ho;
            Gr = null, as(e, t, a), Gr = i, ho = l, Gr !== null && (ho ? d1(Gr, a.stateNode) : f1(Gr, a.stateNode));
          }
          return;
        }
        case vt: {
          Gr !== null && (ho ? p1(Gr, a.stateNode) : Cg(Gr, a.stateNode));
          return;
        }
        case K: {
          {
            var s = Gr, f = ho;
            Gr = a.stateNode.containerInfo, ho = !0, as(e, t, a), Gr = s, ho = f;
          }
          return;
        }
        case F:
        case re:
        case Qe:
        case He: {
          if (!Qr) {
            var m = a.updateQueue;
            if (m !== null) {
              var g = m.lastEffect;
              if (g !== null) {
                var C = g.next, R = C;
                do {
                  var N = R, M = N.destroy, Y = N.tag;
                  M !== void 0 && ((Y & tl) !== Ka ? Ym(a, t, M) : (Y & mr) !== Ka && ($c(a), a.mode & it ? (il(), Ym(a, t, M), al(a)) : Ym(a, t, M), Ru())), R = R.next;
                } while (R !== C);
              }
            }
          }
          as(e, t, a);
          return;
        }
        case j: {
          if (!Qr) {
            ed(a, t);
            var G = a.stateNode;
            typeof G.componentWillUnmount == "function" && s0(a, t, G);
          }
          as(e, t, a);
          return;
        }
        case ut: {
          as(e, t, a);
          return;
        }
        case Ne: {
          if (
            // TODO: Remove this dead flag
            a.mode & _t
          ) {
            var ae = Qr;
            Qr = ae || a.memoizedState !== null, as(e, t, a), Qr = ae;
          } else
            as(e, t, a);
          break;
        }
        default: {
          as(e, t, a);
          return;
        }
      }
    }
    function Y_(e) {
      e.memoizedState;
    }
    function Q_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && M1(s);
          }
        }
      }
    }
    function GC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new k_()), t.forEach(function(i) {
          var l = $D.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), pr)
              if (Zf !== null && Jf !== null)
                dv(Jf, Zf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function G_(e, t, a) {
      Zf = a, Jf = e, Zt(t), qC(t, e), Zt(t), Zf = null, Jf = null;
    }
    function mo(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            I_(e, t, s);
          } catch (g) {
            Cn(s, t, g);
          }
        }
      var f = Ec();
      if (t.subtreeFlags & oa)
        for (var m = t.child; m !== null; )
          Zt(m), qC(m, e), m = m.sibling;
      Zt(f);
    }
    function qC(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case F:
        case re:
        case Qe:
        case He: {
          if (mo(t, e), ol(e), l & Et) {
            try {
              vo(tl | hr, e, e.return), rs(tl | hr, e);
            } catch (ct) {
              Cn(e, e.return, ct);
            }
            if (e.mode & it) {
              try {
                il(), vo(mr | hr, e, e.return);
              } catch (ct) {
                Cn(e, e.return, ct);
              }
              al(e);
            } else
              try {
                vo(mr | hr, e, e.return);
              } catch (ct) {
                Cn(e, e.return, ct);
              }
          }
          return;
        }
        case j: {
          mo(t, e), ol(e), l & ra && i !== null && ed(i, i.return);
          return;
        }
        case Z: {
          mo(t, e), ol(e), l & ra && i !== null && ed(i, i.return);
          {
            if (e.flags & Jt) {
              var s = e.stateNode;
              try {
                QE(s);
              } catch (ct) {
                Cn(e, e.return, ct);
              }
            }
            if (l & Et) {
              var f = e.stateNode;
              if (f != null) {
                var m = e.memoizedProps, g = i !== null ? i.memoizedProps : m, C = e.type, R = e.updateQueue;
                if (e.updateQueue = null, R !== null)
                  try {
                    i1(f, R, C, g, m, e);
                  } catch (ct) {
                    Cn(e, e.return, ct);
                  }
              }
            }
          }
          return;
        }
        case fe: {
          if (mo(t, e), ol(e), l & Et) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var N = e.stateNode, M = e.memoizedProps, Y = i !== null ? i.memoizedProps : M;
            try {
              o1(N, Y, M);
            } catch (ct) {
              Cn(e, e.return, ct);
            }
          }
          return;
        }
        case P: {
          if (mo(t, e), ol(e), l & Et && i !== null) {
            var G = i.memoizedState;
            if (G.isDehydrated)
              try {
                z1(t.containerInfo);
              } catch (ct) {
                Cn(e, e.return, ct);
              }
          }
          return;
        }
        case K: {
          mo(t, e), ol(e);
          return;
        }
        case J: {
          mo(t, e), ol(e);
          var ae = e.child;
          if (ae.flags & Po) {
            var je = ae.stateNode, tt = ae.memoizedState, qe = tt !== null;
            if (je.isHidden = qe, qe) {
              var Pt = ae.alternate !== null && ae.alternate.memoizedState !== null;
              Pt || DD();
            }
          }
          if (l & Et) {
            try {
              Y_(e);
            } catch (ct) {
              Cn(e, e.return, ct);
            }
            GC(e);
          }
          return;
        }
        case Ne: {
          var kt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & _t
          ) {
            var B = Qr;
            Qr = B || kt, mo(t, e), Qr = B;
          } else
            mo(t, e);
          if (ol(e), l & Po) {
            var ie = e.stateNode, V = e.memoizedState, ye = V !== null, Fe = e;
            if (ie.isHidden = ye, ye && !kt && (Fe.mode & _t) !== rt) {
              Ie = Fe;
              for (var Le = Fe.child; Le !== null; )
                Ie = Le, X_(Le), Le = Le.sibling;
            }
            B_(Fe, ye);
          }
          return;
        }
        case ot: {
          mo(t, e), ol(e), l & Et && GC(e);
          return;
        }
        case ut:
          return;
        default: {
          mo(t, e), ol(e);
          return;
        }
      }
    }
    function ol(e) {
      var t = e.flags;
      if (t & gn) {
        try {
          W_(e);
        } catch (a) {
          Cn(e, e.return, a);
        }
        e.flags &= ~gn;
      }
      t & Ha && (e.flags &= ~Ha);
    }
    function q_(e, t, a) {
      Zf = a, Jf = t, Ie = e, XC(e, t, a), Zf = null, Jf = null;
    }
    function XC(e, t, a) {
      for (var i = (e.mode & _t) !== rt; Ie !== null; ) {
        var l = Ie, s = l.child;
        if (l.tag === Ne && i) {
          var f = l.memoizedState !== null, m = f || Im;
          if (m) {
            d0(e, t, a);
            continue;
          } else {
            var g = l.alternate, C = g !== null && g.memoizedState !== null, R = C || Qr, N = Im, M = Qr;
            Im = m, Qr = R, Qr && !M && (Ie = l, K_(l));
            for (var Y = s; Y !== null; )
              Ie = Y, XC(
                Y,
                // New root; bubble back up to here and stop.
                t,
                a
              ), Y = Y.sibling;
            Ie = l, Im = N, Qr = M, d0(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & Dr) !== Je && s !== null ? (s.return = l, Ie = s) : d0(e, t, a);
      }
    }
    function d0(e, t, a) {
      for (; Ie !== null; ) {
        var i = Ie;
        if ((i.flags & Dr) !== Je) {
          var l = i.alternate;
          Zt(i);
          try {
            F_(t, l, i, a);
          } catch (f) {
            Cn(i, i.return, f);
          }
          Ln();
        }
        if (i === e) {
          Ie = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ie = s;
          return;
        }
        Ie = i.return;
      }
    }
    function X_(e) {
      for (; Ie !== null; ) {
        var t = Ie, a = t.child;
        switch (t.tag) {
          case F:
          case re:
          case Qe:
          case He: {
            if (t.mode & it)
              try {
                il(), vo(mr, t, t.return);
              } finally {
                al(t);
              }
            else
              vo(mr, t, t.return);
            break;
          }
          case j: {
            ed(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && s0(t, t.return, i);
            break;
          }
          case Z: {
            ed(t, t.return);
            break;
          }
          case Ne: {
            var l = t.memoizedState !== null;
            if (l) {
              KC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ie = a) : KC(e);
      }
    }
    function KC(e) {
      for (; Ie !== null; ) {
        var t = Ie;
        if (t === e) {
          Ie = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ie = a;
          return;
        }
        Ie = t.return;
      }
    }
    function K_(e) {
      for (; Ie !== null; ) {
        var t = Ie, a = t.child;
        if (t.tag === Ne) {
          var i = t.memoizedState !== null;
          if (i) {
            ZC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ie = a) : ZC(e);
      }
    }
    function ZC(e) {
      for (; Ie !== null; ) {
        var t = Ie;
        Zt(t);
        try {
          H_(t);
        } catch (i) {
          Cn(t, t.return, i);
        }
        if (Ln(), t === e) {
          Ie = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ie = a;
          return;
        }
        Ie = t.return;
      }
    }
    function Z_(e, t, a, i) {
      Ie = t, J_(t, e, a, i);
    }
    function J_(e, t, a, i) {
      for (; Ie !== null; ) {
        var l = Ie, s = l.child;
        (l.subtreeFlags & Ba) !== Je && s !== null ? (s.return = l, Ie = s) : eD(e, t, a, i);
      }
    }
    function eD(e, t, a, i) {
      for (; Ie !== null; ) {
        var l = Ie;
        if ((l.flags & Rn) !== Je) {
          Zt(l);
          try {
            tD(t, l, a, i);
          } catch (f) {
            Cn(l, l.return, f);
          }
          Ln();
        }
        if (l === e) {
          Ie = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, Ie = s;
          return;
        }
        Ie = l.return;
      }
    }
    function tD(e, t, a, i) {
      switch (t.tag) {
        case F:
        case re:
        case He: {
          if (t.mode & it) {
            $S();
            try {
              rs(Ir | hr, t);
            } finally {
              VS(t);
            }
          } else
            rs(Ir | hr, t);
          break;
        }
      }
    }
    function nD(e) {
      Ie = e, rD();
    }
    function rD() {
      for (; Ie !== null; ) {
        var e = Ie, t = e.child;
        if ((Ie.flags & Gt) !== Je) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Ie = l, oD(l, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var m = f.sibling;
                    f.sibling = null, f = m;
                  } while (f !== null);
                }
              }
            }
            Ie = e;
          }
        }
        (e.subtreeFlags & Ba) !== Je && t !== null ? (t.return = e, Ie = t) : aD();
      }
    }
    function aD() {
      for (; Ie !== null; ) {
        var e = Ie;
        (e.flags & Rn) !== Je && (Zt(e), iD(e), Ln());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ie = t;
          return;
        }
        Ie = e.return;
      }
    }
    function iD(e) {
      switch (e.tag) {
        case F:
        case re:
        case He: {
          e.mode & it ? ($S(), vo(Ir | hr, e, e.return), VS(e)) : vo(Ir | hr, e, e.return);
          break;
        }
      }
    }
    function oD(e, t) {
      for (; Ie !== null; ) {
        var a = Ie;
        Zt(a), uD(a, t), Ln();
        var i = a.child;
        i !== null ? (i.return = a, Ie = i) : lD(e);
      }
    }
    function lD(e) {
      for (; Ie !== null; ) {
        var t = Ie, a = t.sibling, i = t.return;
        if (WC(t), t === e) {
          Ie = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ie = a;
          return;
        }
        Ie = i;
      }
    }
    function uD(e, t) {
      switch (e.tag) {
        case F:
        case re:
        case He: {
          e.mode & it ? ($S(), vo(Ir, e, t), VS(e)) : vo(Ir, e, t);
          break;
        }
      }
    }
    function sD(e) {
      switch (e.tag) {
        case F:
        case re:
        case He: {
          try {
            rs(mr | hr, e);
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
        case j: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function cD(e) {
      switch (e.tag) {
        case F:
        case re:
        case He: {
          try {
            rs(Ir | hr, e);
          } catch (t) {
            Cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function fD(e) {
      switch (e.tag) {
        case F:
        case re:
        case He: {
          try {
            vo(mr | hr, e, e.return);
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
        case j: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && s0(e, e.return, t);
          break;
        }
      }
    }
    function dD(e) {
      switch (e.tag) {
        case F:
        case re:
        case He:
          try {
            vo(Ir | hr, e, e.return);
          } catch (t) {
            Cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var tv = Symbol.for;
      tv("selector.component"), tv("selector.has_pseudo_class"), tv("selector.role"), tv("selector.test_id"), tv("selector.text");
    }
    var pD = [];
    function vD() {
      pD.forEach(function(e) {
        return e();
      });
    }
    var hD = p.ReactCurrentActQueue;
    function mD(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function JC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && hD.current !== null && E("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var yD = Math.ceil, p0 = p.ReactCurrentDispatcher, v0 = p.ReactCurrentOwner, qr = p.ReactCurrentBatchConfig, yo = p.ReactCurrentActQueue, Sr = (
      /*             */
      0
    ), ew = (
      /*               */
      1
    ), Xr = (
      /*                */
      2
    ), ji = (
      /*                */
      4
    ), Zl = 0, nv = 1, fc = 2, Qm = 3, rv = 4, tw = 5, h0 = 6, Ut = Sr, ka = null, Bn = null, Er = le, ll = le, m0 = Gu(le), br = Zl, av = null, Gm = le, iv = le, qm = le, ov = null, Za = null, y0 = 0, nw = 500, rw = 1 / 0, gD = 500, Jl = null;
    function lv() {
      rw = On() + gD;
    }
    function aw() {
      return rw;
    }
    var Xm = !1, g0 = null, td = null, dc = !1, is = null, uv = le, S0 = [], E0 = null, SD = 50, sv = 0, b0 = null, C0 = !1, Km = !1, ED = 50, nd = 0, Zm = null, cv = dn, Jm = le, iw = !1;
    function ey() {
      return ka;
    }
    function za() {
      return (Ut & (Xr | ji)) !== Sr ? On() : (cv !== dn || (cv = On()), cv);
    }
    function os(e) {
      var t = e.mode;
      if ((t & _t) === rt)
        return lt;
      if ((Ut & Xr) !== Sr && Er !== le)
        return Xn(Er);
      var a = mx() !== hx;
      if (a) {
        if (qr.transition !== null) {
          var i = qr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Jm === At && (Jm = Xd()), Jm;
      }
      var l = Ia();
      if (l !== At)
        return l;
      var s = e1();
      return s;
    }
    function bD(e) {
      var t = e.mode;
      return (t & _t) === rt ? lt : $y();
    }
    function Cr(e, t, a, i) {
      ID(), iw && E("useInsertionEffect must not schedule updates."), C0 && (Km = !0), Al(e, a, i), (Ut & Xr) !== le && e === ka ? GD(t) : (pr && tp(e, t, a), qD(t), e === ka && ((Ut & Xr) === Sr && (iv = bt(iv, a)), br === rv && ls(e, Er)), Ja(e, i), a === lt && Ut === Sr && (t.mode & _t) === rt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !yo.isBatchingLegacy && (lv(), ab()));
    }
    function CD(e, t, a) {
      var i = e.current;
      i.lanes = t, Al(e, t, a), Ja(e, a);
    }
    function wD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ut & Xr) !== Sr
      );
    }
    function Ja(e, t) {
      var a = e.callbackNode;
      Hy(e, t);
      var i = Ps(e, e === ka ? Er : le);
      if (i === le) {
        a !== null && bw(a), e.callbackNode = null, e.callbackPriority = At;
        return;
      }
      var l = Wn(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(yo.current !== null && a !== O0)) {
        a == null && s !== lt && E("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && bw(a);
      var f;
      if (l === lt)
        e.tag === qu ? (yo.isBatchingLegacy !== null && (yo.didScheduleLegacyUpdate = !0), Z1(uw.bind(null, e))) : rb(uw.bind(null, e)), yo.current !== null ? yo.current.push(Xu) : n1(function() {
          (Ut & (Xr | ji)) === Sr && Xu();
        }), f = null;
      else {
        var m;
        switch (Vs(i)) {
          case Or:
            m = Fc;
            break;
          case vr:
            m = xa;
            break;
          case to:
            m = Di;
            break;
          case Hs:
            m = Fo;
            break;
          default:
            m = Di;
            break;
        }
        f = k0(m, ow.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = f;
    }
    function ow(e, t) {
      if (Ix(), cv = dn, Jm = le, (Ut & (Xr | ji)) !== Sr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = tu();
      if (i && e.callbackNode !== a)
        return null;
      var l = Ps(e, e === ka ? Er : le);
      if (l === le)
        return null;
      var s = !Fs(e, l) && !dh(e, l) && !t, f = s ? LD(e, l) : ny(e, l);
      if (f !== Zl) {
        if (f === fc) {
          var m = Gd(e);
          m !== le && (l = m, f = w0(e, m));
        }
        if (f === nv) {
          var g = av;
          throw pc(e, le), ls(e, l), Ja(e, On()), g;
        }
        if (f === h0)
          ls(e, l);
        else {
          var C = !Fs(e, l), R = e.current.alternate;
          if (C && !TD(R)) {
            if (f = ny(e, l), f === fc) {
              var N = Gd(e);
              N !== le && (l = N, f = w0(e, N));
            }
            if (f === nv) {
              var M = av;
              throw pc(e, le), ls(e, l), Ja(e, On()), M;
            }
          }
          e.finishedWork = R, e.finishedLanes = l, RD(e, f, l);
        }
      }
      return Ja(e, On()), e.callbackNode === a ? ow.bind(null, e) : null;
    }
    function w0(e, t) {
      var a = ov;
      if (Zn(e)) {
        var i = pc(e, t);
        i.flags |= Nn, I1(e.containerInfo);
      }
      var l = ny(e, t);
      if (l !== fc) {
        var s = Za;
        Za = a, s !== null && lw(s);
      }
      return l;
    }
    function lw(e) {
      Za === null ? Za = e : Za.push.apply(Za, e);
    }
    function RD(e, t, a) {
      switch (t) {
        case Zl:
        case nv:
          throw new Error("Root did not complete. This is a bug in React.");
        case fc: {
          vc(e, Za, Jl);
          break;
        }
        case Qm: {
          if (ls(e, a), cf(a) && // do not delay if we're inside an act() scope
          !Cw()) {
            var i = y0 + nw - On();
            if (i > 10) {
              var l = Ps(e, le);
              if (l !== le)
                break;
              var s = e.suspendedLanes;
              if (!Nl(s, a)) {
                za(), Jd(e, s);
                break;
              }
              e.timeoutHandle = Eg(vc.bind(null, e, Za, Jl), i);
              break;
            }
          }
          vc(e, Za, Jl);
          break;
        }
        case rv: {
          if (ls(e, a), fh(a))
            break;
          if (!Cw()) {
            var f = ch(e, a), m = f, g = On() - m, C = WD(g) - g;
            if (C > 10) {
              e.timeoutHandle = Eg(vc.bind(null, e, Za, Jl), C);
              break;
            }
          }
          vc(e, Za, Jl);
          break;
        }
        case tw: {
          vc(e, Za, Jl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function TD(e) {
      for (var t = e; ; ) {
        if (t.flags & ks) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], f = s.getSnapshot, m = s.value;
                try {
                  if (!We(f(), m))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var g = t.child;
        if (t.subtreeFlags & ks && g !== null) {
          g.return = t, t = g;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function ls(e, t) {
      t = zu(t, qm), t = zu(t, iv), Zd(e, t);
    }
    function uw(e) {
      if (Yx(), (Ut & (Xr | ji)) !== Sr)
        throw new Error("Should not already be working.");
      tu();
      var t = Ps(e, le);
      if (!ca(t, lt))
        return Ja(e, On()), null;
      var a = ny(e, t);
      if (e.tag !== qu && a === fc) {
        var i = Gd(e);
        i !== le && (t = i, a = w0(e, i));
      }
      if (a === nv) {
        var l = av;
        throw pc(e, le), ls(e, t), Ja(e, On()), l;
      }
      if (a === h0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, vc(e, Za, Jl), Ja(e, On()), null;
    }
    function xD(e, t) {
      t !== le && (Mu(e, bt(t, lt)), Ja(e, On()), (Ut & (Xr | ji)) === Sr && (lv(), Xu()));
    }
    function R0(e, t) {
      var a = Ut;
      Ut |= ew;
      try {
        return e(t);
      } finally {
        Ut = a, Ut === Sr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !yo.isBatchingLegacy && (lv(), ab());
      }
    }
    function _D(e, t, a, i, l) {
      var s = Ia(), f = qr.transition;
      try {
        return qr.transition = null, Kn(Or), e(t, a, i, l);
      } finally {
        Kn(s), qr.transition = f, Ut === Sr && lv();
      }
    }
    function eu(e) {
      is !== null && is.tag === qu && (Ut & (Xr | ji)) === Sr && tu();
      var t = Ut;
      Ut |= ew;
      var a = qr.transition, i = Ia();
      try {
        return qr.transition = null, Kn(Or), e ? e() : void 0;
      } finally {
        Kn(i), qr.transition = a, Ut = t, (Ut & (Xr | ji)) === Sr && Xu();
      }
    }
    function sw() {
      return (Ut & (Xr | ji)) !== Sr;
    }
    function ty(e, t) {
      da(m0, ll, e), ll = bt(ll, t);
    }
    function T0(e) {
      ll = m0.current, fa(m0, e);
    }
    function pc(e, t) {
      e.finishedWork = null, e.finishedLanes = le;
      var a = e.timeoutHandle;
      if (a !== bg && (e.timeoutHandle = bg, t1(a)), Bn !== null)
        for (var i = Bn.return; i !== null; ) {
          var l = i.alternate;
          jC(l, i), i = i.return;
        }
      ka = e;
      var s = hc(e.current, null);
      return Bn = s, Er = ll = t, br = Zl, av = null, Gm = le, iv = le, qm = le, ov = null, Za = null, Ex(), uo.discardPendingWarnings(), s;
    }
    function cw(e, t) {
      do {
        var a = Bn;
        try {
          if (sm(), Hb(), Ln(), v0.current = null, a === null || a.return === null) {
            br = nv, av = t, Bn = null;
            return;
          }
          if (X && a.mode & it && Bm(a, !0), te)
            if (Tl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              lh(a, i, Er);
            } else
              Wc(a, t, Er);
          Kx(e, a.return, a, t, Er), vw(a);
        } catch (l) {
          t = l, Bn === a && a !== null ? (a = a.return, Bn = a) : a = Bn;
          continue;
        }
        return;
      } while (!0);
    }
    function fw() {
      var e = p0.current;
      return p0.current = Um, e === null ? Um : e;
    }
    function dw(e) {
      p0.current = e;
    }
    function DD() {
      y0 = On();
    }
    function fv(e) {
      Gm = bt(e, Gm);
    }
    function OD() {
      br === Zl && (br = Qm);
    }
    function x0() {
      (br === Zl || br === Qm || br === fc) && (br = rv), ka !== null && (js(Gm) || js(iv)) && ls(ka, Er);
    }
    function kD(e) {
      br !== rv && (br = fc), ov === null ? ov = [e] : ov.push(e);
    }
    function zD() {
      return br === Zl;
    }
    function ny(e, t) {
      var a = Ut;
      Ut |= Xr;
      var i = fw();
      if (ka !== e || Er !== t) {
        if (pr) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (dv(e, Er), l.clear()), pf(e, t);
        }
        Jl = np(), pc(e, t);
      }
      ci(t);
      do
        try {
          MD();
          break;
        } catch (s) {
          cw(e, s);
        }
      while (!0);
      if (sm(), Ut = a, dw(i), Bn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return xu(), ka = null, Er = le, br;
    }
    function MD() {
      for (; Bn !== null; )
        pw(Bn);
    }
    function LD(e, t) {
      var a = Ut;
      Ut |= Xr;
      var i = fw();
      if (ka !== e || Er !== t) {
        if (pr) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (dv(e, Er), l.clear()), pf(e, t);
        }
        Jl = np(), lv(), pc(e, t);
      }
      ci(t);
      do
        try {
          ND();
          break;
        } catch (s) {
          cw(e, s);
        }
      while (!0);
      return sm(), dw(i), Ut = a, Bn !== null ? (Ls(), Zl) : (xu(), ka = null, Er = le, br);
    }
    function ND() {
      for (; Bn !== null && !jc(); )
        pw(Bn);
    }
    function pw(e) {
      var t = e.alternate;
      Zt(e);
      var a;
      (e.mode & it) !== rt ? (BS(e), a = _0(t, e, ll), Bm(e, !0)) : a = _0(t, e, ll), Ln(), e.memoizedProps = e.pendingProps, a === null ? vw(e) : Bn = a, v0.current = null;
    }
    function vw(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & wa) === Je) {
          Zt(t);
          var l = void 0;
          if ((t.mode & it) === rt ? l = PC(a, t, ll) : (BS(t), l = PC(a, t, ll), Bm(t, !1)), Ln(), l !== null) {
            Bn = l;
            return;
          }
        } else {
          var s = O_(a, t);
          if (s !== null) {
            s.flags &= Zv, Bn = s;
            return;
          }
          if ((t.mode & it) !== rt) {
            Bm(t, !1);
            for (var f = t.actualDuration, m = t.child; m !== null; )
              f += m.actualDuration, m = m.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= wa, i.subtreeFlags = Je, i.deletions = null;
          else {
            br = h0, Bn = null;
            return;
          }
        }
        var g = t.sibling;
        if (g !== null) {
          Bn = g;
          return;
        }
        t = i, Bn = t;
      } while (t !== null);
      br === Zl && (br = tw);
    }
    function vc(e, t, a) {
      var i = Ia(), l = qr.transition;
      try {
        qr.transition = null, Kn(Or), AD(e, t, a, i);
      } finally {
        qr.transition = l, Kn(i);
      }
      return null;
    }
    function AD(e, t, a, i) {
      do
        tu();
      while (is !== null);
      if (YD(), (Ut & (Xr | ji)) !== Sr)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (Bc(s), l === null)
        return $d(), null;
      if (s === le && E("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = le, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = At;
      var f = bt(l.lanes, l.childLanes);
      ep(e, f), e === ka && (ka = null, Bn = null, Er = le), ((l.subtreeFlags & Ba) !== Je || (l.flags & Ba) !== Je) && (dc || (dc = !0, E0 = a, k0(Di, function() {
        return tu(), null;
      })));
      var m = (l.subtreeFlags & (wu | oa | Dr | Ba)) !== Je, g = (l.flags & (wu | oa | Dr | Ba)) !== Je;
      if (m || g) {
        var C = qr.transition;
        qr.transition = null;
        var R = Ia();
        Kn(Or);
        var N = Ut;
        Ut |= ji, v0.current = null, N_(e, l), fC(), G_(e, l, s), GT(e.containerInfo), e.current = l, uh(s), q_(l, e, s), Tu(), th(), Ut = N, Kn(R), qr.transition = C;
      } else
        e.current = l, fC();
      var M = dc;
      if (dc ? (dc = !1, is = e, uv = s) : (nd = 0, Zm = null), f = e.pendingLanes, f === le && (td = null), M || gw(e.current, !1), Zi(l.stateNode, i), pr && e.memoizedUpdaters.clear(), vD(), Ja(e, On()), t !== null)
        for (var Y = e.onRecoverableError, G = 0; G < t.length; G++) {
          var ae = t[G], je = ae.stack, tt = ae.digest;
          Y(ae.value, {
            componentStack: je,
            digest: tt
          });
        }
      if (Xm) {
        Xm = !1;
        var qe = g0;
        throw g0 = null, qe;
      }
      return ca(uv, lt) && e.tag !== qu && tu(), f = e.pendingLanes, ca(f, lt) ? (Wx(), e === b0 ? sv++ : (sv = 0, b0 = e)) : sv = 0, Xu(), $d(), null;
    }
    function tu() {
      if (is !== null) {
        var e = Vs(uv), t = Iy(to, e), a = qr.transition, i = Ia();
        try {
          return qr.transition = null, Kn(t), PD();
        } finally {
          Kn(i), qr.transition = a;
        }
      }
      return !1;
    }
    function UD(e) {
      S0.push(e), dc || (dc = !0, k0(Di, function() {
        return tu(), null;
      }));
    }
    function PD() {
      if (is === null)
        return !1;
      var e = E0;
      E0 = null;
      var t = is, a = uv;
      if (is = null, uv = le, (Ut & (Xr | ji)) !== Sr)
        throw new Error("Cannot flush passive effects while already rendering.");
      C0 = !0, Km = !1, sh(a);
      var i = Ut;
      Ut |= ji, nD(t.current), Z_(t, t.current, a, e);
      {
        var l = S0;
        S0 = [];
        for (var s = 0; s < l.length; s++) {
          var f = l[s];
          j_(t, f);
        }
      }
      Ms(), gw(t.current, !0), Ut = i, Xu(), Km ? t === Zm ? nd++ : (nd = 0, Zm = t) : nd = 0, C0 = !1, Km = !1, Bo(t);
      {
        var m = t.current.stateNode;
        m.effectDuration = 0, m.passiveEffectDuration = 0;
      }
      return !0;
    }
    function hw(e) {
      return td !== null && td.has(e);
    }
    function jD(e) {
      td === null ? td = /* @__PURE__ */ new Set([e]) : td.add(e);
    }
    function FD(e) {
      Xm || (Xm = !0, g0 = e);
    }
    var HD = FD;
    function mw(e, t, a) {
      var i = sc(a, t), l = pC(e, i, lt), s = Zu(e, l, lt), f = za();
      s !== null && (Al(s, lt, f), Ja(s, f));
    }
    function Cn(e, t, a) {
      if (z_(a), pv(!1), e.tag === P) {
        mw(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === P) {
          mw(i, e, a);
          return;
        } else if (i.tag === j) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !hw(s)) {
            var f = sc(a, e), m = QS(i, f, lt), g = Zu(i, m, lt), C = za();
            g !== null && (Al(g, lt, C), Ja(g, C));
            return;
          }
        }
        i = i.return;
      }
      E(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function BD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = za();
      Jd(e, a), XD(e), ka === e && Nl(Er, a) && (br === rv || br === Qm && cf(Er) && On() - y0 < nw ? pc(e, le) : qm = bt(qm, a)), Ja(e, l);
    }
    function yw(e, t) {
      t === At && (t = bD(e));
      var a = za(), i = Xa(e, t);
      i !== null && (Al(i, t, a), Ja(i, a));
    }
    function VD(e) {
      var t = e.memoizedState, a = At;
      t !== null && (a = t.retryLane), yw(e, a);
    }
    function $D(e, t) {
      var a = At, i;
      switch (e.tag) {
        case J:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case ot:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), yw(e, a);
    }
    function WD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : yD(e / 1960) * 1960;
    }
    function ID() {
      if (sv > SD)
        throw sv = 0, b0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      nd > ED && (nd = 0, Zm = null, E("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function YD() {
      uo.flushLegacyContextWarning(), uo.flushPendingUnsafeLifecycleWarnings();
    }
    function gw(e, t) {
      Zt(e), ry(e, ia, fD), t && ry(e, Rl, dD), ry(e, ia, sD), t && ry(e, Rl, cD), Ln();
    }
    function ry(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== Je ? i = i.child : ((i.flags & t) !== Je && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var ay = null;
    function Sw(e) {
      {
        if ((Ut & Xr) !== Sr || !(e.mode & _t))
          return;
        var t = e.tag;
        if (t !== ee && t !== P && t !== j && t !== F && t !== re && t !== Qe && t !== He)
          return;
        var a = ht(e) || "ReactComponent";
        if (ay !== null) {
          if (ay.has(a))
            return;
          ay.add(a);
        } else
          ay = /* @__PURE__ */ new Set([a]);
        var i = Dn;
        try {
          Zt(e), E("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Zt(e) : Ln();
        }
      }
    }
    var _0;
    {
      var QD = null;
      _0 = function(e, t, a) {
        var i = _w(QD, t);
        try {
          return MC(e, t, a);
        } catch (s) {
          if (ox() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (sm(), Hb(), jC(e, t), _w(t, i), t.mode & it && BS(t), wl(null, MC, null, e, t, a), jy()) {
            var l = Md();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var Ew = !1, D0;
    D0 = /* @__PURE__ */ new Set();
    function GD(e) {
      if (ea && !Bx())
        switch (e.tag) {
          case F:
          case re:
          case He: {
            var t = Bn && ht(Bn) || "Unknown", a = t;
            if (!D0.has(a)) {
              D0.add(a);
              var i = ht(e) || "Unknown";
              E("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case j: {
            Ew || (E("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Ew = !0);
            break;
          }
        }
    }
    function dv(e, t) {
      if (pr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          tp(e, i, t);
        });
      }
    }
    var O0 = {};
    function k0(e, t) {
      {
        var a = yo.current;
        return a !== null ? (a.push(t), O0) : Pc(e, t);
      }
    }
    function bw(e) {
      if (e !== O0)
        return eh(e);
    }
    function Cw() {
      return yo.current !== null;
    }
    function qD(e) {
      {
        if (e.mode & _t) {
          if (!JC())
            return;
        } else if (!mD() || Ut !== Sr || e.tag !== F && e.tag !== re && e.tag !== He)
          return;
        if (yo.current === null) {
          var t = Dn;
          try {
            Zt(e), E(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ht(e));
          } finally {
            t ? Zt(e) : Ln();
          }
        }
      }
    }
    function XD(e) {
      e.tag !== qu && JC() && yo.current === null && E(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function pv(e) {
      iw = e;
    }
    var Fi = null, rd = null, KD = function(e) {
      Fi = e;
    };
    function ad(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function z0(e) {
      return ad(e);
    }
    function M0(e) {
      {
        if (Fi === null)
          return e;
        var t = Fi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = ad(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Pe,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function ww(e, t) {
      {
        if (Fi === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case j: {
            typeof i == "function" && (l = !0);
            break;
          }
          case F: {
            (typeof i == "function" || s === et) && (l = !0);
            break;
          }
          case re: {
            (s === Pe || s === et) && (l = !0);
            break;
          }
          case Qe:
          case He: {
            (s === St || s === et) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var f = Fi(a);
          if (f !== void 0 && f === Fi(i))
            return !0;
        }
        return !1;
      }
    }
    function Rw(e) {
      {
        if (Fi === null || typeof WeakSet != "function")
          return;
        rd === null && (rd = /* @__PURE__ */ new WeakSet()), rd.add(e);
      }
    }
    var ZD = function(e, t) {
      {
        if (Fi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        tu(), eu(function() {
          L0(e.current, i, a);
        });
      }
    }, JD = function(e, t) {
      {
        if (e.context !== di)
          return;
        tu(), eu(function() {
          vv(t, e, null, null);
        });
      }
    };
    function L0(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, f = e.tag, m = e.type, g = null;
        switch (f) {
          case F:
          case He:
          case j:
            g = m;
            break;
          case re:
            g = m.render;
            break;
        }
        if (Fi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var C = !1, R = !1;
        if (g !== null) {
          var N = Fi(g);
          N !== void 0 && (a.has(N) ? R = !0 : t.has(N) && (f === j ? R = !0 : C = !0));
        }
        if (rd !== null && (rd.has(e) || i !== null && rd.has(i)) && (R = !0), R && (e._debugNeedsRemount = !0), R || C) {
          var M = Xa(e, lt);
          M !== null && Cr(M, e, lt, dn);
        }
        l !== null && !R && L0(l, t, a), s !== null && L0(s, t, a);
      }
    }
    var eO = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return N0(e.current, i, a), a;
      }
    };
    function N0(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, f = e.type, m = null;
        switch (s) {
          case F:
          case He:
          case j:
            m = f;
            break;
          case re:
            m = f.render;
            break;
        }
        var g = !1;
        m !== null && t.has(m) && (g = !0), g ? tO(e, a) : i !== null && N0(i, t, a), l !== null && N0(l, t, a);
      }
    }
    function tO(e, t) {
      {
        var a = nO(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case Z:
              t.add(i.stateNode);
              return;
            case K:
              t.add(i.stateNode.containerInfo);
              return;
            case P:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function nO(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === Z)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var A0;
    {
      A0 = !1;
      try {
        var Tw = Object.preventExtensions({});
      } catch {
        A0 = !0;
      }
    }
    function rO(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Je, this.subtreeFlags = Je, this.deletions = null, this.lanes = le, this.childLanes = le, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !A0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var pi = function(e, t, a, i) {
      return new rO(e, t, a, i);
    };
    function U0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function aO(e) {
      return typeof e == "function" && !U0(e) && e.defaultProps === void 0;
    }
    function iO(e) {
      if (typeof e == "function")
        return U0(e) ? j : F;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Pe)
          return re;
        if (t === St)
          return Qe;
      }
      return ee;
    }
    function hc(e, t) {
      var a = e.alternate;
      a === null ? (a = pi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Je, a.subtreeFlags = Je, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & dr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ee:
        case F:
        case He:
          a.type = ad(e.type);
          break;
        case j:
          a.type = z0(e.type);
          break;
        case re:
          a.type = M0(e.type);
          break;
      }
      return a;
    }
    function oO(e, t) {
      e.flags &= dr | gn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = le, e.lanes = t, e.child = null, e.subtreeFlags = Je, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Je, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function lO(e, t, a) {
      var i;
      return e === tm ? (i = _t, t === !0 && (i |= kn, i |= $a)) : i = rt, pr && (i |= it), pi(P, null, null, i);
    }
    function P0(e, t, a, i, l, s) {
      var f = ee, m = e;
      if (typeof e == "function")
        U0(e) ? (f = j, m = z0(m)) : m = ad(m);
      else if (typeof e == "string")
        f = Z;
      else
        e:
          switch (e) {
            case Ca:
              return us(a.children, l, s, t);
            case bi:
              f = we, l |= kn, (l & _t) !== rt && (l |= $a);
              break;
            case O:
              return uO(a, l, s, t);
            case gt:
              return sO(a, l, s, t);
            case Nt:
              return cO(a, l, s, t);
            case mn:
              return xw(a, l, s, t);
            case fr:
            case Vn:
            case Ci:
            case au:
            case hn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case de:
                    f = oe;
                    break e;
                  case De:
                    f = Se;
                    break e;
                  case Pe:
                    f = re, m = M0(m);
                    break e;
                  case St:
                    f = Qe;
                    break e;
                  case et:
                    f = pt, m = null;
                    break e;
                }
              var g = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var C = i ? ht(i) : null;
                C && (g += `

Check the render method of \`` + C + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + g));
            }
          }
      var R = pi(f, a, t, l);
      return R.elementType = e, R.type = m, R.lanes = s, R._debugOwner = i, R;
    }
    function j0(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, f = e.props, m = P0(l, s, f, i, t, a);
      return m._debugSource = e._source, m._debugOwner = e._owner, m;
    }
    function us(e, t, a, i) {
      var l = pi(me, e, i, t);
      return l.lanes = a, l;
    }
    function uO(e, t, a, i) {
      typeof e.id != "string" && E('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = pi(_e, e, i, t | it);
      return l.elementType = O, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function sO(e, t, a, i) {
      var l = pi(J, e, i, t);
      return l.elementType = gt, l.lanes = a, l;
    }
    function cO(e, t, a, i) {
      var l = pi(ot, e, i, t);
      return l.elementType = Nt, l.lanes = a, l;
    }
    function xw(e, t, a, i) {
      var l = pi(Ne, e, i, t);
      l.elementType = mn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function F0(e, t, a) {
      var i = pi(fe, e, null, t);
      return i.lanes = a, i;
    }
    function fO() {
      var e = pi(Z, null, null, rt);
      return e.elementType = "DELETED", e;
    }
    function dO(e) {
      var t = pi(vt, null, null, rt);
      return t.stateNode = e, t;
    }
    function H0(e, t, a) {
      var i = e.children !== null ? e.children : [], l = pi(K, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function _w(e, t) {
      return e === null && (e = pi(ee, null, null, rt)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function pO(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = bg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = At, this.eventTimes = df(le), this.expirationTimes = df(dn), this.pendingLanes = le, this.suspendedLanes = le, this.pingedLanes = le, this.expiredLanes = le, this.mutableReadLanes = le, this.finishedLanes = le, this.entangledLanes = le, this.entanglements = df(le), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < En; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case tm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case qu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function Dw(e, t, a, i, l, s, f, m, g, C) {
      var R = new pO(e, t, a, m, g), N = lO(t, s);
      R.current = N, N.stateNode = R;
      {
        var M = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        N.memoizedState = M;
      }
      return Gg(N), R;
    }
    var B0 = "18.2.0";
    function vO(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return sr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: jr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var V0, $0;
    V0 = !1, $0 = {};
    function Ow(e) {
      if (!e)
        return di;
      var t = ja(e), a = K1(t);
      if (t.tag === j) {
        var i = t.type;
        if (el(i))
          return tb(t, i, a);
      }
      return a;
    }
    function hO(e, t) {
      {
        var a = ja(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = Va(a);
        if (l === null)
          return null;
        if (l.mode & kn) {
          var s = ht(a) || "Component";
          if (!$0[s]) {
            $0[s] = !0;
            var f = Dn;
            try {
              Zt(l), a.mode & kn ? E("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : E("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Zt(f) : Ln();
            }
          }
        }
        return l.stateNode;
      }
    }
    function kw(e, t, a, i, l, s, f, m) {
      var g = !1, C = null;
      return Dw(e, t, g, C, a, i, l, s, f);
    }
    function zw(e, t, a, i, l, s, f, m, g, C) {
      var R = !0, N = Dw(a, i, R, e, l, s, f, m, g);
      N.context = Ow(null);
      var M = N.current, Y = za(), G = os(M), ae = Xl(Y, G);
      return ae.callback = t ?? null, Zu(M, ae, G), CD(N, G, Y), N;
    }
    function vv(e, t, a, i) {
      nh(t, e);
      var l = t.current, s = za(), f = os(l);
      xl(f);
      var m = Ow(a);
      t.context === null ? t.context = m : t.pendingContext = m, ea && Dn !== null && !V0 && (V0 = !0, E(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ht(Dn) || "Unknown"));
      var g = Xl(s, f);
      g.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && E("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), g.callback = i);
      var C = Zu(l, g, f);
      return C !== null && (Cr(C, l, f, s), vm(C, l, f)), f;
    }
    function iy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case Z:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function mO(e) {
      switch (e.tag) {
        case P: {
          var t = e.stateNode;
          if (Zn(t)) {
            var a = By(t);
            xD(t, a);
          }
          break;
        }
        case J: {
          eu(function() {
            var l = Xa(e, lt);
            if (l !== null) {
              var s = za();
              Cr(l, e, lt, s);
            }
          });
          var i = lt;
          W0(e, i);
          break;
        }
      }
    }
    function Mw(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = vh(a.retryLane, t));
    }
    function W0(e, t) {
      Mw(e, t);
      var a = e.alternate;
      a && Mw(a, t);
    }
    function yO(e) {
      if (e.tag === J) {
        var t = _u, a = Xa(e, t);
        if (a !== null) {
          var i = za();
          Cr(a, e, t, i);
        }
        W0(e, t);
      }
    }
    function gO(e) {
      if (e.tag === J) {
        var t = os(e), a = Xa(e, t);
        if (a !== null) {
          var i = za();
          Cr(a, e, t, i);
        }
        W0(e, t);
      }
    }
    function Lw(e) {
      var t = Jv(e);
      return t === null ? null : t.stateNode;
    }
    var Nw = function(e) {
      return null;
    };
    function SO(e) {
      return Nw(e);
    }
    var Aw = function(e) {
      return !1;
    };
    function EO(e) {
      return Aw(e);
    }
    var Uw = null, Pw = null, jw = null, Fw = null, Hw = null, Bw = null, Vw = null, $w = null, Ww = null;
    {
      var Iw = function(e, t, a) {
        var i = t[a], l = Lt(e) ? e.slice() : Tt({}, e);
        return a + 1 === t.length ? (Lt(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = Iw(e[i], t, a + 1), l);
      }, Yw = function(e, t) {
        return Iw(e, t, 0);
      }, Qw = function(e, t, a, i) {
        var l = t[i], s = Lt(e) ? e.slice() : Tt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[l], Lt(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = Qw(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, Gw = function(e, t, a) {
        if (t.length !== a.length) {
          x("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              x("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Qw(e, t, a, 0);
      }, qw = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = Lt(e) ? e.slice() : Tt({}, e);
        return s[l] = qw(e[l], t, a + 1, i), s;
      }, Xw = function(e, t, a) {
        return qw(e, t, 0, a);
      }, I0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Uw = function(e, t, a, i) {
        var l = I0(e, t);
        if (l !== null) {
          var s = Xw(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Tt({}, e.memoizedProps);
          var f = Xa(e, lt);
          f !== null && Cr(f, e, lt, dn);
        }
      }, Pw = function(e, t, a) {
        var i = I0(e, t);
        if (i !== null) {
          var l = Yw(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = Tt({}, e.memoizedProps);
          var s = Xa(e, lt);
          s !== null && Cr(s, e, lt, dn);
        }
      }, jw = function(e, t, a, i) {
        var l = I0(e, t);
        if (l !== null) {
          var s = Gw(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Tt({}, e.memoizedProps);
          var f = Xa(e, lt);
          f !== null && Cr(f, e, lt, dn);
        }
      }, Fw = function(e, t, a) {
        e.pendingProps = Xw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Xa(e, lt);
        i !== null && Cr(i, e, lt, dn);
      }, Hw = function(e, t) {
        e.pendingProps = Yw(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Xa(e, lt);
        a !== null && Cr(a, e, lt, dn);
      }, Bw = function(e, t, a) {
        e.pendingProps = Gw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Xa(e, lt);
        i !== null && Cr(i, e, lt, dn);
      }, Vw = function(e) {
        var t = Xa(e, lt);
        t !== null && Cr(t, e, lt, dn);
      }, $w = function(e) {
        Nw = e;
      }, Ww = function(e) {
        Aw = e;
      };
    }
    function bO(e) {
      var t = Va(e);
      return t === null ? null : t.stateNode;
    }
    function CO(e) {
      return null;
    }
    function wO() {
      return Dn;
    }
    function RO(e) {
      var t = e.findFiberByHostInstance, a = p.ReactCurrentDispatcher;
      return Bd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Uw,
        overrideHookStateDeletePath: Pw,
        overrideHookStateRenamePath: jw,
        overrideProps: Fw,
        overridePropsDeletePath: Hw,
        overridePropsRenamePath: Bw,
        setErrorHandler: $w,
        setSuspenseHandler: Ww,
        scheduleUpdate: Vw,
        currentDispatcherRef: a,
        findHostInstanceByFiber: bO,
        findFiberByHostInstance: t || CO,
        // React Refresh
        findHostInstancesForRefresh: eO,
        scheduleRefresh: ZD,
        scheduleRoot: JD,
        setRefreshHandler: KD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: wO,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: B0
      });
    }
    var Kw = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function Y0(e) {
      this._internalRoot = e;
    }
    oy.prototype.render = Y0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? E("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : ly(arguments[1]) ? E("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && E("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== $n) {
          var i = Lw(t.current);
          i && i.parentNode !== a && E("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      vv(e, t, null, null);
    }, oy.prototype.unmount = Y0.prototype.unmount = function() {
      typeof arguments[0] == "function" && E("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        sw() && E("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), eu(function() {
          vv(null, e, null, null);
        }), XE(t);
      }
    };
    function TO(e, t) {
      if (!ly(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Zw(e);
      var a = !1, i = !1, l = "", s = Kw;
      t != null && (t.hydrate ? x("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Ei && E(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = kw(e, tm, null, a, i, l, s);
      Gh(f.current, e);
      var m = e.nodeType === $n ? e.parentNode : e;
      return Cp(m), new Y0(f);
    }
    function oy(e) {
      this._internalRoot = e;
    }
    function xO(e) {
      e && Ch(e);
    }
    oy.prototype.unstable_scheduleHydration = xO;
    function _O(e, t, a) {
      if (!ly(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Zw(e), t === void 0 && E("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, f = !1, m = "", g = Kw;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (m = a.identifierPrefix), a.onRecoverableError !== void 0 && (g = a.onRecoverableError));
      var C = zw(t, null, e, tm, i, s, f, m, g);
      if (Gh(C.current, e), Cp(e), l)
        for (var R = 0; R < l.length; R++) {
          var N = l[R];
          Ax(C, N);
        }
      return new oy(C);
    }
    function ly(e) {
      return !!(e && (e.nodeType === na || e.nodeType === li || e.nodeType === yl || !k));
    }
    function hv(e) {
      return !!(e && (e.nodeType === na || e.nodeType === li || e.nodeType === yl || e.nodeType === $n && e.nodeValue === " react-mount-point-unstable "));
    }
    function Zw(e) {
      e.nodeType === na && e.tagName && e.tagName.toUpperCase() === "BODY" && E("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Lp(e) && (e._reactRootContainer ? E("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : E("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var DO = p.ReactCurrentOwner, Jw;
    Jw = function(e) {
      if (e._reactRootContainer && e.nodeType !== $n) {
        var t = Lw(e._reactRootContainer.current);
        t && t.parentNode !== e && E("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = Q0(e), l = !!(i && Qu(i));
      l && !a && E("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === na && e.tagName && e.tagName.toUpperCase() === "BODY" && E("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function Q0(e) {
      return e ? e.nodeType === li ? e.documentElement : e.firstChild : null;
    }
    function eR() {
    }
    function OO(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var M = iy(f);
            s.call(M);
          };
        }
        var f = zw(
          t,
          i,
          e,
          qu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          eR
        );
        e._reactRootContainer = f, Gh(f.current, e);
        var m = e.nodeType === $n ? e.parentNode : e;
        return Cp(m), eu(), f;
      } else {
        for (var g; g = e.lastChild; )
          e.removeChild(g);
        if (typeof i == "function") {
          var C = i;
          i = function() {
            var M = iy(R);
            C.call(M);
          };
        }
        var R = kw(
          e,
          qu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          eR
        );
        e._reactRootContainer = R, Gh(R.current, e);
        var N = e.nodeType === $n ? e.parentNode : e;
        return Cp(N), eu(function() {
          vv(t, R, a, i);
        }), R;
      }
    }
    function kO(e, t) {
      e !== null && typeof e != "function" && E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function uy(e, t, a, i, l) {
      Jw(a), kO(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = OO(a, t, e, l, i);
      else {
        if (f = s, typeof l == "function") {
          var m = l;
          l = function() {
            var g = iy(f);
            m.call(g);
          };
        }
        vv(t, f, e, l);
      }
      return iy(f);
    }
    function zO(e) {
      {
        var t = DO.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || E("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ht(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === na ? e : hO(e, "findDOMNode");
    }
    function MO(e, t, a) {
      if (E("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !hv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Lp(t) && t._reactRootContainer === void 0;
        i && E("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return uy(null, e, t, !0, a);
    }
    function LO(e, t, a) {
      if (E("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !hv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Lp(t) && t._reactRootContainer === void 0;
        i && E("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return uy(null, e, t, !1, a);
    }
    function NO(e, t, a, i) {
      if (E("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !hv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Os(e))
        throw new Error("parentComponent must be a valid React Component");
      return uy(e, t, a, !1, i);
    }
    function AO(e) {
      if (!hv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Lp(e) && e._reactRootContainer === void 0;
        t && E("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = Q0(e), i = a && !Qu(a);
          i && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return eu(function() {
          uy(null, null, e, !1, function() {
            e._reactRootContainer = null, XE(e);
          });
        }), !0;
      } else {
        {
          var l = Q0(e), s = !!(l && Qu(l)), f = e.nodeType === na && hv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Ve(mO), mh(yO), Ws(gO), ap(Ia), gh(Bs), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && E("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Xv(jT), Mc(R0, _D, eu);
    function UO(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ly(t))
        throw new Error("Target container is not a DOM element.");
      return vO(e, t, null, a);
    }
    function PO(e, t, a, i) {
      return NO(e, t, a, i);
    }
    var G0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Qu, Af, qh, zc, xs, R0]
    };
    function jO(e, t) {
      return G0.usingClientEntryPoint || E('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), TO(e, t);
    }
    function FO(e, t, a) {
      return G0.usingClientEntryPoint || E('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), _O(e, t, a);
    }
    function HO(e) {
      return sw() && E("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), eu(e);
    }
    var BO = RO({
      findFiberByHostInstance: ec,
      bundleType: 1,
      version: B0,
      rendererPackageName: "react-dom"
    });
    if (!BO && Ct && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var tR = window.location.protocol;
      /^(https?|file):$/.test(tR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (tR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G0, ti.createPortal = UO, ti.createRoot = jO, ti.findDOMNode = zO, ti.flushSync = HO, ti.hydrate = MO, ti.hydrateRoot = FO, ti.render = LO, ti.unmountComponentAtNode = AO, ti.unstable_batchedUpdates = R0, ti.unstable_renderSubtreeIntoContainer = PO, ti.version = B0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ti;
}
function jR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jR);
    } catch (d) {
      console.error(d);
    }
  }
}
process.env.NODE_ENV === "production" ? (jR(), cE.exports = sk()) : cE.exports = ck();
var FR = cE.exports;
function HR(d) {
  var y, p, h = "";
  if (typeof d == "string" || typeof d == "number")
    h += d;
  else if (typeof d == "object")
    if (Array.isArray(d))
      for (y = 0; y < d.length; y++)
        d[y] && (p = HR(d[y])) && (h && (h += " "), h += p);
    else
      for (y in d)
        d[y] && (h && (h += " "), h += y);
  return h;
}
function ER() {
  for (var d, y, p = 0, h = ""; p < arguments.length; )
    (d = arguments[p++]) && (y = HR(d)) && (h && (h += " "), h += y);
  return h;
}
const fk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: ER,
  default: ER
}, Symbol.toStringTag, { value: "Module" })), dk = /* @__PURE__ */ WO(fk);
var Qn = {}, fl = {};
Object.defineProperty(fl, "__esModule", {
  value: !0
});
fl.dontSetMe = yk;
fl.findInArray = pk;
fl.int = mk;
fl.isFunction = vk;
fl.isNum = hk;
function pk(d, y) {
  for (var p = 0, h = d.length; p < h; p++)
    if (y.apply(y, [d[p], p, d]))
      return d[p];
}
function vk(d) {
  return typeof d == "function" || Object.prototype.toString.call(d) === "[object Function]";
}
function hk(d) {
  return typeof d == "number" && !isNaN(d);
}
function mk(d) {
  return parseInt(d, 10);
}
function yk(d, y, p) {
  if (d[y])
    return new Error("Invalid prop ".concat(y, " passed to ").concat(p, " - do not set this, set it on the child."));
}
var yc = {};
Object.defineProperty(yc, "__esModule", {
  value: !0
});
yc.browserPrefixToKey = VR;
yc.browserPrefixToStyle = gk;
yc.default = void 0;
yc.getPrefix = BR;
var rE = ["Moz", "Webkit", "O", "ms"];
function BR() {
  var d, y, p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  var h = (d = window.document) === null || d === void 0 || (y = d.documentElement) === null || y === void 0 ? void 0 : y.style;
  if (!h || p in h)
    return "";
  for (var T = 0; T < rE.length; T++)
    if (VR(p, rE[T]) in h)
      return rE[T];
  return "";
}
function VR(d, y) {
  return y ? "".concat(y).concat(Sk(d)) : d;
}
function gk(d, y) {
  return y ? "-".concat(y.toLowerCase(), "-").concat(d) : d;
}
function Sk(d) {
  for (var y = "", p = !0, h = 0; h < d.length; h++)
    p ? (y += d[h].toUpperCase(), p = !1) : d[h] === "-" ? p = !0 : y += d[h];
  return y;
}
var Ek = BR();
yc.default = Ek;
function fE(d) {
  "@babel/helpers - typeof";
  return fE = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
    return typeof y;
  } : function(y) {
    return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
  }, fE(d);
}
Object.defineProperty(Qn, "__esModule", {
  value: !0
});
Qn.addClassName = QR;
Qn.addEvent = wk;
Qn.addUserSelectStyles = Nk;
Qn.createCSSTransform = kk;
Qn.createSVGTransform = zk;
Qn.getTouch = Mk;
Qn.getTouchIdentifier = Lk;
Qn.getTranslation = yE;
Qn.innerHeight = _k;
Qn.innerWidth = Dk;
Qn.matchesSelector = YR;
Qn.matchesSelectorAndParentsTo = Ck;
Qn.offsetXYFromParent = Ok;
Qn.outerHeight = Tk;
Qn.outerWidth = xk;
Qn.removeClassName = GR;
Qn.removeEvent = Rk;
Qn.removeUserSelectStyles = Ak;
var yi = fl, bR = bk(yc);
function $R(d) {
  if (typeof WeakMap != "function")
    return null;
  var y = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap();
  return ($R = function(T) {
    return T ? p : y;
  })(d);
}
function bk(d, y) {
  if (!y && d && d.__esModule)
    return d;
  if (d === null || fE(d) !== "object" && typeof d != "function")
    return { default: d };
  var p = $R(y);
  if (p && p.has(d))
    return p.get(d);
  var h = {}, T = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var x in d)
    if (x !== "default" && Object.prototype.hasOwnProperty.call(d, x)) {
      var E = T ? Object.getOwnPropertyDescriptor(d, x) : null;
      E && (E.get || E.set) ? Object.defineProperty(h, x, E) : h[x] = d[x];
    }
  return h.default = d, p && p.set(d, h), h;
}
function CR(d, y) {
  var p = Object.keys(d);
  if (Object.getOwnPropertySymbols) {
    var h = Object.getOwnPropertySymbols(d);
    y && (h = h.filter(function(T) {
      return Object.getOwnPropertyDescriptor(d, T).enumerable;
    })), p.push.apply(p, h);
  }
  return p;
}
function WR(d) {
  for (var y = 1; y < arguments.length; y++) {
    var p = arguments[y] != null ? arguments[y] : {};
    y % 2 ? CR(Object(p), !0).forEach(function(h) {
      IR(d, h, p[h]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(p)) : CR(Object(p)).forEach(function(h) {
      Object.defineProperty(d, h, Object.getOwnPropertyDescriptor(p, h));
    });
  }
  return d;
}
function IR(d, y, p) {
  return y in d ? Object.defineProperty(d, y, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : d[y] = p, d;
}
var fy = "";
function YR(d, y) {
  return fy || (fy = (0, yi.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(p) {
    return (0, yi.isFunction)(d[p]);
  })), (0, yi.isFunction)(d[fy]) ? d[fy](y) : !1;
}
function Ck(d, y, p) {
  var h = d;
  do {
    if (YR(h, y))
      return !0;
    if (h === p)
      return !1;
    h = h.parentNode;
  } while (h);
  return !1;
}
function wk(d, y, p, h) {
  if (d) {
    var T = WR({
      capture: !0
    }, h);
    d.addEventListener ? d.addEventListener(y, p, T) : d.attachEvent ? d.attachEvent("on" + y, p) : d["on" + y] = p;
  }
}
function Rk(d, y, p, h) {
  if (d) {
    var T = WR({
      capture: !0
    }, h);
    d.removeEventListener ? d.removeEventListener(y, p, T) : d.detachEvent ? d.detachEvent("on" + y, p) : d["on" + y] = null;
  }
}
function Tk(d) {
  var y = d.clientHeight, p = d.ownerDocument.defaultView.getComputedStyle(d);
  return y += (0, yi.int)(p.borderTopWidth), y += (0, yi.int)(p.borderBottomWidth), y;
}
function xk(d) {
  var y = d.clientWidth, p = d.ownerDocument.defaultView.getComputedStyle(d);
  return y += (0, yi.int)(p.borderLeftWidth), y += (0, yi.int)(p.borderRightWidth), y;
}
function _k(d) {
  var y = d.clientHeight, p = d.ownerDocument.defaultView.getComputedStyle(d);
  return y -= (0, yi.int)(p.paddingTop), y -= (0, yi.int)(p.paddingBottom), y;
}
function Dk(d) {
  var y = d.clientWidth, p = d.ownerDocument.defaultView.getComputedStyle(d);
  return y -= (0, yi.int)(p.paddingLeft), y -= (0, yi.int)(p.paddingRight), y;
}
function Ok(d, y, p) {
  var h = y === y.ownerDocument.body, T = h ? {
    left: 0,
    top: 0
  } : y.getBoundingClientRect(), x = (d.clientX + y.scrollLeft - T.left) / p, E = (d.clientY + y.scrollTop - T.top) / p;
  return {
    x,
    y: E
  };
}
function kk(d, y) {
  var p = yE(d, y, "px");
  return IR({}, (0, bR.browserPrefixToKey)("transform", bR.default), p);
}
function zk(d, y) {
  var p = yE(d, y, "");
  return p;
}
function yE(d, y, p) {
  var h = d.x, T = d.y, x = "translate(".concat(h).concat(p, ",").concat(T).concat(p, ")");
  if (y) {
    var E = "".concat(typeof y.x == "string" ? y.x : y.x + p), A = "".concat(typeof y.y == "string" ? y.y : y.y + p);
    x = "translate(".concat(E, ", ").concat(A, ")") + x;
  }
  return x;
}
function Mk(d, y) {
  return d.targetTouches && (0, yi.findInArray)(d.targetTouches, function(p) {
    return y === p.identifier;
  }) || d.changedTouches && (0, yi.findInArray)(d.changedTouches, function(p) {
    return y === p.identifier;
  });
}
function Lk(d) {
  if (d.targetTouches && d.targetTouches[0])
    return d.targetTouches[0].identifier;
  if (d.changedTouches && d.changedTouches[0])
    return d.changedTouches[0].identifier;
}
function Nk(d) {
  if (d) {
    var y = d.getElementById("react-draggable-style-el");
    y || (y = d.createElement("style"), y.type = "text/css", y.id = "react-draggable-style-el", y.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, y.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, d.getElementsByTagName("head")[0].appendChild(y)), d.body && QR(d.body, "react-draggable-transparent-selection");
  }
}
function Ak(d) {
  if (d)
    try {
      if (d.body && GR(d.body, "react-draggable-transparent-selection"), d.selection)
        d.selection.empty();
      else {
        var y = (d.defaultView || window).getSelection();
        y && y.type !== "Caret" && y.removeAllRanges();
      }
    } catch {
    }
}
function QR(d, y) {
  d.classList ? d.classList.add(y) : d.className.match(new RegExp("(?:^|\\s)".concat(y, "(?!\\S)"))) || (d.className += " ".concat(y));
}
function GR(d, y) {
  d.classList ? d.classList.remove(y) : d.className = d.className.replace(new RegExp("(?:^|\\s)".concat(y, "(?!\\S)"), "g"), "");
}
var dl = {};
Object.defineProperty(dl, "__esModule", {
  value: !0
});
dl.canDragX = jk;
dl.canDragY = Fk;
dl.createCoreData = Bk;
dl.createDraggableData = Vk;
dl.getBoundPosition = Uk;
dl.getControlPosition = Hk;
dl.snapToGrid = Pk;
var mi = fl, ld = Qn;
function Uk(d, y, p) {
  if (!d.props.bounds)
    return [y, p];
  var h = d.props.bounds;
  h = typeof h == "string" ? h : $k(h);
  var T = gE(d);
  if (typeof h == "string") {
    var x = T.ownerDocument, E = x.defaultView, A;
    if (h === "parent" ? A = T.parentNode : A = x.querySelector(h), !(A instanceof E.HTMLElement))
      throw new Error('Bounds selector "' + h + '" could not find an element.');
    var F = A, j = E.getComputedStyle(T), ee = E.getComputedStyle(F);
    h = {
      left: -T.offsetLeft + (0, mi.int)(ee.paddingLeft) + (0, mi.int)(j.marginLeft),
      top: -T.offsetTop + (0, mi.int)(ee.paddingTop) + (0, mi.int)(j.marginTop),
      right: (0, ld.innerWidth)(F) - (0, ld.outerWidth)(T) - T.offsetLeft + (0, mi.int)(ee.paddingRight) - (0, mi.int)(j.marginRight),
      bottom: (0, ld.innerHeight)(F) - (0, ld.outerHeight)(T) - T.offsetTop + (0, mi.int)(ee.paddingBottom) - (0, mi.int)(j.marginBottom)
    };
  }
  return (0, mi.isNum)(h.right) && (y = Math.min(y, h.right)), (0, mi.isNum)(h.bottom) && (p = Math.min(p, h.bottom)), (0, mi.isNum)(h.left) && (y = Math.max(y, h.left)), (0, mi.isNum)(h.top) && (p = Math.max(p, h.top)), [y, p];
}
function Pk(d, y, p) {
  var h = Math.round(y / d[0]) * d[0], T = Math.round(p / d[1]) * d[1];
  return [h, T];
}
function jk(d) {
  return d.props.axis === "both" || d.props.axis === "x";
}
function Fk(d) {
  return d.props.axis === "both" || d.props.axis === "y";
}
function Hk(d, y, p) {
  var h = typeof y == "number" ? (0, ld.getTouch)(d, y) : null;
  if (typeof y == "number" && !h)
    return null;
  var T = gE(p), x = p.props.offsetParent || T.offsetParent || T.ownerDocument.body;
  return (0, ld.offsetXYFromParent)(h || d, x, p.props.scale);
}
function Bk(d, y, p) {
  var h = d.state, T = !(0, mi.isNum)(h.lastX), x = gE(d);
  return T ? {
    node: x,
    deltaX: 0,
    deltaY: 0,
    lastX: y,
    lastY: p,
    x: y,
    y: p
  } : {
    node: x,
    deltaX: y - h.lastX,
    deltaY: p - h.lastY,
    lastX: h.lastX,
    lastY: h.lastY,
    x: y,
    y: p
  };
}
function Vk(d, y) {
  var p = d.props.scale;
  return {
    node: y.node,
    x: d.state.x + y.deltaX / p,
    y: d.state.y + y.deltaY / p,
    deltaX: y.deltaX / p,
    deltaY: y.deltaY / p,
    lastX: d.state.x,
    lastY: d.state.y
  };
}
function $k(d) {
  return {
    left: d.left,
    top: d.top,
    right: d.right,
    bottom: d.bottom
  };
}
function gE(d) {
  var y = d.findDOMNode();
  if (!y)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return y;
}
var Ey = {}, by = {};
Object.defineProperty(by, "__esModule", {
  value: !0
});
by.default = Wk;
function Wk() {
}
function my(d) {
  "@babel/helpers - typeof";
  return my = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
    return typeof y;
  } : function(y) {
    return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
  }, my(d);
}
Object.defineProperty(Ey, "__esModule", {
  value: !0
});
Ey.default = void 0;
var aE = Yk(rn), hi = SE(UR), Ik = SE(FR), ma = Qn, ss = dl, iE = fl, Sv = SE(by);
function SE(d) {
  return d && d.__esModule ? d : { default: d };
}
function qR(d) {
  if (typeof WeakMap != "function")
    return null;
  var y = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap();
  return (qR = function(T) {
    return T ? p : y;
  })(d);
}
function Yk(d, y) {
  if (!y && d && d.__esModule)
    return d;
  if (d === null || my(d) !== "object" && typeof d != "function")
    return { default: d };
  var p = qR(y);
  if (p && p.has(d))
    return p.get(d);
  var h = {}, T = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var x in d)
    if (x !== "default" && Object.prototype.hasOwnProperty.call(d, x)) {
      var E = T ? Object.getOwnPropertyDescriptor(d, x) : null;
      E && (E.get || E.set) ? Object.defineProperty(h, x, E) : h[x] = d[x];
    }
  return h.default = d, p && p.set(d, h), h;
}
function wR(d, y) {
  return Xk(d) || qk(d, y) || Gk(d, y) || Qk();
}
function Qk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gk(d, y) {
  if (d) {
    if (typeof d == "string")
      return RR(d, y);
    var p = Object.prototype.toString.call(d).slice(8, -1);
    if (p === "Object" && d.constructor && (p = d.constructor.name), p === "Map" || p === "Set")
      return Array.from(d);
    if (p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))
      return RR(d, y);
  }
}
function RR(d, y) {
  (y == null || y > d.length) && (y = d.length);
  for (var p = 0, h = new Array(y); p < y; p++)
    h[p] = d[p];
  return h;
}
function qk(d, y) {
  var p = d == null ? null : typeof Symbol < "u" && d[Symbol.iterator] || d["@@iterator"];
  if (p != null) {
    var h = [], T = !0, x = !1, E, A;
    try {
      for (p = p.call(d); !(T = (E = p.next()).done) && (h.push(E.value), !(y && h.length === y)); T = !0)
        ;
    } catch (F) {
      x = !0, A = F;
    } finally {
      try {
        !T && p.return != null && p.return();
      } finally {
        if (x)
          throw A;
      }
    }
    return h;
  }
}
function Xk(d) {
  if (Array.isArray(d))
    return d;
}
function Kk(d, y) {
  if (!(d instanceof y))
    throw new TypeError("Cannot call a class as a function");
}
function TR(d, y) {
  for (var p = 0; p < y.length; p++) {
    var h = y[p];
    h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(d, h.key, h);
  }
}
function Zk(d, y, p) {
  return y && TR(d.prototype, y), p && TR(d, p), Object.defineProperty(d, "prototype", { writable: !1 }), d;
}
function Jk(d, y) {
  if (typeof y != "function" && y !== null)
    throw new TypeError("Super expression must either be null or a function");
  d.prototype = Object.create(y && y.prototype, { constructor: { value: d, writable: !0, configurable: !0 } }), Object.defineProperty(d, "prototype", { writable: !1 }), y && dE(d, y);
}
function dE(d, y) {
  return dE = Object.setPrototypeOf || function(h, T) {
    return h.__proto__ = T, h;
  }, dE(d, y);
}
function ez(d) {
  var y = nz();
  return function() {
    var h = yy(d), T;
    if (y) {
      var x = yy(this).constructor;
      T = Reflect.construct(h, arguments, x);
    } else
      T = h.apply(this, arguments);
    return tz(this, T);
  };
}
function tz(d, y) {
  if (y && (my(y) === "object" || typeof y == "function"))
    return y;
  if (y !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ya(d);
}
function ya(d) {
  if (d === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return d;
}
function nz() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function yy(d) {
  return yy = Object.setPrototypeOf ? Object.getPrototypeOf : function(p) {
    return p.__proto__ || Object.getPrototypeOf(p);
  }, yy(d);
}
function Hi(d, y, p) {
  return y in d ? Object.defineProperty(d, y, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : d[y] = p, d;
}
var go = {
  touch: {
    start: "touchstart",
    move: "touchmove",
    stop: "touchend"
  },
  mouse: {
    start: "mousedown",
    move: "mousemove",
    stop: "mouseup"
  }
}, cs = go.mouse, Cy = /* @__PURE__ */ function(d) {
  Jk(p, d);
  var y = ez(p);
  function p() {
    var h;
    Kk(this, p);
    for (var T = arguments.length, x = new Array(T), E = 0; E < T; E++)
      x[E] = arguments[E];
    return h = y.call.apply(y, [this].concat(x)), Hi(ya(h), "state", {
      dragging: !1,
      // Used while dragging to determine deltas.
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    }), Hi(ya(h), "mounted", !1), Hi(ya(h), "handleDragStart", function(A) {
      if (h.props.onMouseDown(A), !h.props.allowAnyClick && typeof A.button == "number" && A.button !== 0)
        return !1;
      var F = h.findDOMNode();
      if (!F || !F.ownerDocument || !F.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      var j = F.ownerDocument;
      if (!(h.props.disabled || !(A.target instanceof j.defaultView.Node) || h.props.handle && !(0, ma.matchesSelectorAndParentsTo)(A.target, h.props.handle, F) || h.props.cancel && (0, ma.matchesSelectorAndParentsTo)(A.target, h.props.cancel, F))) {
        A.type === "touchstart" && A.preventDefault();
        var ee = (0, ma.getTouchIdentifier)(A);
        h.setState({
          touchIdentifier: ee
        });
        var P = (0, ss.getControlPosition)(A, ee, ya(h));
        if (P != null) {
          var K = P.x, Z = P.y, fe = (0, ss.createCoreData)(ya(h), K, Z);
          (0, Sv.default)("DraggableCore: handleDragStart: %j", fe), (0, Sv.default)("calling", h.props.onStart);
          var me = h.props.onStart(A, fe);
          me === !1 || h.mounted === !1 || (h.props.enableUserSelectHack && (0, ma.addUserSelectStyles)(j), h.setState({
            dragging: !0,
            lastX: K,
            lastY: Z
          }), (0, ma.addEvent)(j, cs.move, h.handleDrag), (0, ma.addEvent)(j, cs.stop, h.handleDragStop));
        }
      }
    }), Hi(ya(h), "handleDrag", function(A) {
      var F = (0, ss.getControlPosition)(A, h.state.touchIdentifier, ya(h));
      if (F != null) {
        var j = F.x, ee = F.y;
        if (Array.isArray(h.props.grid)) {
          var P = j - h.state.lastX, K = ee - h.state.lastY, Z = (0, ss.snapToGrid)(h.props.grid, P, K), fe = wR(Z, 2);
          if (P = fe[0], K = fe[1], !P && !K)
            return;
          j = h.state.lastX + P, ee = h.state.lastY + K;
        }
        var me = (0, ss.createCoreData)(ya(h), j, ee);
        (0, Sv.default)("DraggableCore: handleDrag: %j", me);
        var we = h.props.onDrag(A, me);
        if (we === !1 || h.mounted === !1) {
          try {
            h.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            var Se = document.createEvent("MouseEvents");
            Se.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), h.handleDragStop(Se);
          }
          return;
        }
        h.setState({
          lastX: j,
          lastY: ee
        });
      }
    }), Hi(ya(h), "handleDragStop", function(A) {
      if (h.state.dragging) {
        var F = (0, ss.getControlPosition)(A, h.state.touchIdentifier, ya(h));
        if (F != null) {
          var j = F.x, ee = F.y;
          if (Array.isArray(h.props.grid)) {
            var P = j - h.state.lastX || 0, K = ee - h.state.lastY || 0, Z = (0, ss.snapToGrid)(h.props.grid, P, K), fe = wR(Z, 2);
            P = fe[0], K = fe[1], j = h.state.lastX + P, ee = h.state.lastY + K;
          }
          var me = (0, ss.createCoreData)(ya(h), j, ee), we = h.props.onStop(A, me);
          if (we === !1 || h.mounted === !1)
            return !1;
          var Se = h.findDOMNode();
          Se && h.props.enableUserSelectHack && (0, ma.removeUserSelectStyles)(Se.ownerDocument), (0, Sv.default)("DraggableCore: handleDragStop: %j", me), h.setState({
            dragging: !1,
            lastX: NaN,
            lastY: NaN
          }), Se && ((0, Sv.default)("DraggableCore: Removing handlers"), (0, ma.removeEvent)(Se.ownerDocument, cs.move, h.handleDrag), (0, ma.removeEvent)(Se.ownerDocument, cs.stop, h.handleDragStop));
        }
      }
    }), Hi(ya(h), "onMouseDown", function(A) {
      return cs = go.mouse, h.handleDragStart(A);
    }), Hi(ya(h), "onMouseUp", function(A) {
      return cs = go.mouse, h.handleDragStop(A);
    }), Hi(ya(h), "onTouchStart", function(A) {
      return cs = go.touch, h.handleDragStart(A);
    }), Hi(ya(h), "onTouchEnd", function(A) {
      return cs = go.touch, h.handleDragStop(A);
    }), h;
  }
  return Zk(p, [{
    key: "componentDidMount",
    value: function() {
      this.mounted = !0;
      var T = this.findDOMNode();
      T && (0, ma.addEvent)(T, go.touch.start, this.onTouchStart, {
        passive: !1
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var T = this.findDOMNode();
      if (T) {
        var x = T.ownerDocument;
        (0, ma.removeEvent)(x, go.mouse.move, this.handleDrag), (0, ma.removeEvent)(x, go.touch.move, this.handleDrag), (0, ma.removeEvent)(x, go.mouse.stop, this.handleDragStop), (0, ma.removeEvent)(x, go.touch.stop, this.handleDragStop), (0, ma.removeEvent)(T, go.touch.start, this.onTouchStart, {
          passive: !1
        }), this.props.enableUserSelectHack && (0, ma.removeUserSelectStyles)(x);
      }
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
  }, {
    key: "findDOMNode",
    value: function() {
      var T, x, E;
      return (T = this.props) !== null && T !== void 0 && T.nodeRef ? (x = this.props) === null || x === void 0 || (E = x.nodeRef) === null || E === void 0 ? void 0 : E.current : Ik.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ aE.cloneElement(aE.Children.only(this.props.children), {
        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        // onTouchStart is added on `componentDidMount` so they can be added with
        // {passive: false}, which allows it to cancel. See
        // https://developers.google.com/web/updates/2017/01/scrolling-intervention
        onTouchEnd: this.onTouchEnd
      });
    }
  }]), p;
}(aE.Component);
Ey.default = Cy;
Hi(Cy, "displayName", "DraggableCore");
Hi(Cy, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: hi.default.bool,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: hi.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: hi.default.bool,
  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function(y, p) {
    if (y[p] && y[p].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: hi.default.arrayOf(hi.default.number),
  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: hi.default.string,
  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: hi.default.string,
  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: hi.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: hi.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: hi.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: hi.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: hi.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: hi.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: iE.dontSetMe,
  style: iE.dontSetMe,
  transform: iE.dontSetMe
});
Hi(Cy, "defaultProps", {
  allowAnyClick: !1,
  // by default only accept left click
  disabled: !1,
  enableUserSelectHack: !0,
  onStart: function() {
  },
  onDrag: function() {
  },
  onStop: function() {
  },
  onMouseDown: function() {
  },
  scale: 1
});
(function(d) {
  function y(k) {
    "@babel/helpers - typeof";
    return y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function($) {
      return typeof $;
    } : function($) {
      return $ && typeof Symbol == "function" && $.constructor === Symbol && $ !== Symbol.prototype ? "symbol" : typeof $;
    }, y(k);
  }
  Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return j.default;
    }
  }), d.default = void 0;
  var p = fe(rn), h = K(UR), T = K(FR), x = K(dk), E = Qn, A = dl, F = fl, j = K(Ey), ee = K(by), P = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];
  function K(k) {
    return k && k.__esModule ? k : { default: k };
  }
  function Z(k) {
    if (typeof WeakMap != "function")
      return null;
    var $ = /* @__PURE__ */ new WeakMap(), W = /* @__PURE__ */ new WeakMap();
    return (Z = function(X) {
      return X ? W : $;
    })(k);
  }
  function fe(k, $) {
    if (!$ && k && k.__esModule)
      return k;
    if (k === null || y(k) !== "object" && typeof k != "function")
      return { default: k };
    var W = Z($);
    if (W && W.has(k))
      return W.get(k);
    var te = {}, X = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var ue in k)
      if (ue !== "default" && Object.prototype.hasOwnProperty.call(k, ue)) {
        var ce = X ? Object.getOwnPropertyDescriptor(k, ue) : null;
        ce && (ce.get || ce.set) ? Object.defineProperty(te, ue, ce) : te[ue] = k[ue];
      }
    return te.default = k, W && W.set(k, te), te;
  }
  function me() {
    return me = Object.assign || function(k) {
      for (var $ = 1; $ < arguments.length; $++) {
        var W = arguments[$];
        for (var te in W)
          Object.prototype.hasOwnProperty.call(W, te) && (k[te] = W[te]);
      }
      return k;
    }, me.apply(this, arguments);
  }
  function we(k, $) {
    if (k == null)
      return {};
    var W = Se(k, $), te, X;
    if (Object.getOwnPropertySymbols) {
      var ue = Object.getOwnPropertySymbols(k);
      for (X = 0; X < ue.length; X++)
        te = ue[X], !($.indexOf(te) >= 0) && Object.prototype.propertyIsEnumerable.call(k, te) && (W[te] = k[te]);
    }
    return W;
  }
  function Se(k, $) {
    if (k == null)
      return {};
    var W = {}, te = Object.keys(k), X, ue;
    for (ue = 0; ue < te.length; ue++)
      X = te[ue], !($.indexOf(X) >= 0) && (W[X] = k[X]);
    return W;
  }
  function oe(k, $) {
    var W = Object.keys(k);
    if (Object.getOwnPropertySymbols) {
      var te = Object.getOwnPropertySymbols(k);
      $ && (te = te.filter(function(X) {
        return Object.getOwnPropertyDescriptor(k, X).enumerable;
      })), W.push.apply(W, te);
    }
    return W;
  }
  function re(k) {
    for (var $ = 1; $ < arguments.length; $++) {
      var W = arguments[$] != null ? arguments[$] : {};
      $ % 2 ? oe(Object(W), !0).forEach(function(te) {
        w(k, te, W[te]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(W)) : oe(Object(W)).forEach(function(te) {
        Object.defineProperty(k, te, Object.getOwnPropertyDescriptor(W, te));
      });
    }
    return k;
  }
  function _e(k, $) {
    return Mt(k) || pt(k, $) || Qe(k, $) || J();
  }
  function J() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Qe(k, $) {
    if (k) {
      if (typeof k == "string")
        return He(k, $);
      var W = Object.prototype.toString.call(k).slice(8, -1);
      if (W === "Object" && k.constructor && (W = k.constructor.name), W === "Map" || W === "Set")
        return Array.from(k);
      if (W === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W))
        return He(k, $);
    }
  }
  function He(k, $) {
    ($ == null || $ > k.length) && ($ = k.length);
    for (var W = 0, te = new Array($); W < $; W++)
      te[W] = k[W];
    return te;
  }
  function pt(k, $) {
    var W = k == null ? null : typeof Symbol < "u" && k[Symbol.iterator] || k["@@iterator"];
    if (W != null) {
      var te = [], X = !0, ue = !1, ce, Te;
      try {
        for (W = W.call(k); !(X = (ce = W.next()).done) && (te.push(ce.value), !($ && te.length === $)); X = !0)
          ;
      } catch (Me) {
        ue = !0, Te = Me;
      } finally {
        try {
          !X && W.return != null && W.return();
        } finally {
          if (ue)
            throw Te;
        }
      }
      return te;
    }
  }
  function Mt(k) {
    if (Array.isArray(k))
      return k;
  }
  function vt(k, $) {
    if (!(k instanceof $))
      throw new TypeError("Cannot call a class as a function");
  }
  function ot(k, $) {
    for (var W = 0; W < $.length; W++) {
      var te = $[W];
      te.enumerable = te.enumerable || !1, te.configurable = !0, "value" in te && (te.writable = !0), Object.defineProperty(k, te.key, te);
    }
  }
  function ut(k, $, W) {
    return $ && ot(k.prototype, $), W && ot(k, W), Object.defineProperty(k, "prototype", { writable: !1 }), k;
  }
  function Ne(k, $) {
    if (typeof $ != "function" && $ !== null)
      throw new TypeError("Super expression must either be null or a function");
    k.prototype = Object.create($ && $.prototype, { constructor: { value: k, writable: !0, configurable: !0 } }), Object.defineProperty(k, "prototype", { writable: !1 }), $ && Xe(k, $);
  }
  function Xe(k, $) {
    return Xe = Object.setPrototypeOf || function(te, X) {
      return te.__proto__ = X, te;
    }, Xe(k, $);
  }
  function Rt(k) {
    var $ = ge();
    return function() {
      var te = Be(k), X;
      if ($) {
        var ue = Be(this).constructor;
        X = Reflect.construct(te, arguments, ue);
      } else
        X = te.apply(this, arguments);
      return st(this, X);
    };
  }
  function st(k, $) {
    if ($ && (y($) === "object" || typeof $ == "function"))
      return $;
    if ($ !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return Re(k);
  }
  function Re(k) {
    if (k === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return k;
  }
  function ge() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function Be(k) {
    return Be = Object.setPrototypeOf ? Object.getPrototypeOf : function(W) {
      return W.__proto__ || Object.getPrototypeOf(W);
    }, Be(k);
  }
  function w(k, $, W) {
    return $ in k ? Object.defineProperty(k, $, { value: W, enumerable: !0, configurable: !0, writable: !0 }) : k[$] = W, k;
  }
  var U = /* @__PURE__ */ function(k) {
    Ne(W, k);
    var $ = Rt(W);
    function W(te) {
      var X;
      return vt(this, W), X = $.call(this, te), w(Re(X), "onDragStart", function(ue, ce) {
        (0, ee.default)("Draggable: onDragStart: %j", ce);
        var Te = X.props.onStart(ue, (0, A.createDraggableData)(Re(X), ce));
        if (Te === !1)
          return !1;
        X.setState({
          dragging: !0,
          dragged: !0
        });
      }), w(Re(X), "onDrag", function(ue, ce) {
        if (!X.state.dragging)
          return !1;
        (0, ee.default)("Draggable: onDrag: %j", ce);
        var Te = (0, A.createDraggableData)(Re(X), ce), Me = {
          x: Te.x,
          y: Te.y
        };
        if (X.props.bounds) {
          var Dt = Me.x, be = Me.y;
          Me.x += X.state.slackX, Me.y += X.state.slackY;
          var Ct = (0, A.getBoundPosition)(Re(X), Me.x, Me.y), Yt = _e(Ct, 2), pn = Yt[0], wn = Yt[1];
          Me.x = pn, Me.y = wn, Me.slackX = X.state.slackX + (Dt - Me.x), Me.slackY = X.state.slackY + (be - Me.y), Te.x = Me.x, Te.y = Me.y, Te.deltaX = Me.x - X.state.x, Te.deltaY = Me.y - X.state.y;
        }
        var vn = X.props.onDrag(ue, Te);
        if (vn === !1)
          return !1;
        X.setState(Me);
      }), w(Re(X), "onDragStop", function(ue, ce) {
        if (!X.state.dragging)
          return !1;
        var Te = X.props.onStop(ue, (0, A.createDraggableData)(Re(X), ce));
        if (Te === !1)
          return !1;
        (0, ee.default)("Draggable: onDragStop: %j", ce);
        var Me = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        }, Dt = !!X.props.position;
        if (Dt) {
          var be = X.props.position, Ct = be.x, Yt = be.y;
          Me.x = Ct, Me.y = Yt;
        }
        X.setState(Me);
      }), X.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: te.position ? te.position.x : te.defaultPosition.x,
        y: te.position ? te.position.y : te.defaultPosition.y,
        prevPropsPosition: re({}, te.position),
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, te.position && !(te.onDrag || te.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), X;
    }
    return ut(W, [{
      key: "componentDidMount",
      value: function() {
        typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({
          isElementSVG: !0
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.setState({
          dragging: !1
        });
      }
      // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
      // the underlying DOM node ourselves. See the README for more information.
    }, {
      key: "findDOMNode",
      value: function() {
        var X, ue, ce;
        return (X = (ue = this.props) === null || ue === void 0 || (ce = ue.nodeRef) === null || ce === void 0 ? void 0 : ce.current) !== null && X !== void 0 ? X : T.default.findDOMNode(this);
      }
    }, {
      key: "render",
      value: function() {
        var X, ue = this.props;
        ue.axis, ue.bounds;
        var ce = ue.children, Te = ue.defaultPosition, Me = ue.defaultClassName, Dt = ue.defaultClassNameDragging, be = ue.defaultClassNameDragged, Ct = ue.position, Yt = ue.positionOffset;
        ue.scale;
        var pn = we(ue, P), wn = {}, vn = null, Rr = !!Ct, sr = !Rr || this.state.dragging, Pn = Ct || Te, Gn = {
          // Set left if horizontal drag is enabled
          x: (0, A.canDragX)(this) && sr ? this.state.x : Pn.x,
          // Set top if vertical drag is enabled
          y: (0, A.canDragY)(this) && sr ? this.state.y : Pn.y
        };
        this.state.isElementSVG ? vn = (0, E.createSVGTransform)(Gn, Yt) : wn = (0, E.createCSSTransform)(Gn, Yt);
        var Tr = (0, x.default)(ce.props.className || "", Me, (X = {}, w(X, Dt, this.state.dragging), w(X, be, this.state.dragged), X));
        return /* @__PURE__ */ p.createElement(j.default, me({}, pn, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), /* @__PURE__ */ p.cloneElement(p.Children.only(ce), {
          className: Tr,
          style: re(re({}, ce.props.style), wn),
          transform: vn
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: (
        // React 16.3+
        // Arity (props, state)
        function(X, ue) {
          var ce = X.position, Te = ue.prevPropsPosition;
          return ce && (!Te || ce.x !== Te.x || ce.y !== Te.y) ? ((0, ee.default)("Draggable: getDerivedStateFromProps %j", {
            position: ce,
            prevPropsPosition: Te
          }), {
            x: ce.x,
            y: ce.y,
            prevPropsPosition: re({}, ce)
          }) : null;
        }
      )
    }]), W;
  }(p.Component);
  d.default = U, w(U, "displayName", "Draggable"), w(U, "propTypes", re(re({}, j.default.propTypes), {}, {
    /**
     * `axis` determines which axis the draggable can move.
     *
     *  Note that all callbacks will still return data as normal. This only
     *  controls flushing to the DOM.
     *
     * 'both' allows movement horizontally and vertically.
     * 'x' limits movement to horizontal axis.
     * 'y' limits movement to vertical axis.
     * 'none' limits all movement.
     *
     * Defaults to 'both'.
     */
    axis: h.default.oneOf(["both", "x", "y", "none"]),
    /**
     * `bounds` determines the range of movement available to the element.
     * Available values are:
     *
     * 'parent' restricts movement within the Draggable's parent node.
     *
     * Alternatively, pass an object with the following properties, all of which are optional:
     *
     * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
     *
     * All values are in px.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *         return (
     *            <Draggable bounds={{right: 300, bottom: 300}}>
     *              <div>Content</div>
     *           </Draggable>
     *         );
     *       }
     *   });
     * ```
     */
    bounds: h.default.oneOfType([h.default.shape({
      left: h.default.number,
      right: h.default.number,
      top: h.default.number,
      bottom: h.default.number
    }), h.default.string, h.default.oneOf([!1])]),
    defaultClassName: h.default.string,
    defaultClassNameDragging: h.default.string,
    defaultClassNameDragged: h.default.string,
    /**
     * `defaultPosition` specifies the x and y that the dragged item should start at
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable defaultPosition={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    defaultPosition: h.default.shape({
      x: h.default.number,
      y: h.default.number
    }),
    positionOffset: h.default.shape({
      x: h.default.oneOfType([h.default.number, h.default.string]),
      y: h.default.oneOfType([h.default.number, h.default.string])
    }),
    /**
     * `position`, if present, defines the current position of the element.
     *
     *  This is similar to how form elements in React work - if no `position` is supplied, the component
     *  is uncontrolled.
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable position={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    position: h.default.shape({
      x: h.default.number,
      y: h.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: F.dontSetMe,
    style: F.dontSetMe,
    transform: F.dontSetMe
  })), w(U, "defaultProps", re(re({}, j.default.defaultProps), {}, {
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: {
      x: 0,
      y: 0
    },
    scale: 1
  }));
})(LR);
var XR = LR, KR = XR.default, rz = XR.DraggableCore;
Sy.exports = KR;
Sy.exports.default = KR;
Sy.exports.DraggableCore = rz;
var az = Sy.exports;
const iz = /* @__PURE__ */ kR(az);
var oz = /* @__PURE__ */ function() {
  var d = function(y, p) {
    return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, T) {
      h.__proto__ = T;
    } || function(h, T) {
      for (var x in T)
        Object.prototype.hasOwnProperty.call(T, x) && (h[x] = T[x]);
    }, d(y, p);
  };
  return function(y, p) {
    d(y, p);
    function h() {
      this.constructor = y;
    }
    y.prototype = p === null ? Object.create(p) : (h.prototype = p.prototype, new h());
  };
}(), gy = function() {
  return gy = Object.assign || function(d) {
    for (var y, p = 1, h = arguments.length; p < h; p++) {
      y = arguments[p];
      for (var T in y)
        Object.prototype.hasOwnProperty.call(y, T) && (d[T] = y[T]);
    }
    return d;
  }, gy.apply(this, arguments);
}, lz = {
  top: {
    width: "100%",
    height: "10px",
    top: "-5px",
    left: "0px",
    cursor: "row-resize"
  },
  right: {
    width: "10px",
    height: "100%",
    top: "0px",
    right: "-5px",
    cursor: "col-resize"
  },
  bottom: {
    width: "100%",
    height: "10px",
    bottom: "-5px",
    left: "0px",
    cursor: "row-resize"
  },
  left: {
    width: "10px",
    height: "100%",
    top: "0px",
    left: "-5px",
    cursor: "col-resize"
  },
  topRight: {
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "-10px",
    top: "-10px",
    cursor: "ne-resize"
  },
  bottomRight: {
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "-10px",
    bottom: "-10px",
    cursor: "se-resize"
  },
  bottomLeft: {
    width: "20px",
    height: "20px",
    position: "absolute",
    left: "-10px",
    bottom: "-10px",
    cursor: "sw-resize"
  },
  topLeft: {
    width: "20px",
    height: "20px",
    position: "absolute",
    left: "-10px",
    top: "-10px",
    cursor: "nw-resize"
  }
}, uz = (
  /** @class */
  function(d) {
    oz(y, d);
    function y() {
      var p = d !== null && d.apply(this, arguments) || this;
      return p.onMouseDown = function(h) {
        p.props.onResizeStart(h, p.props.direction);
      }, p.onTouchStart = function(h) {
        p.props.onResizeStart(h, p.props.direction);
      }, p;
    }
    return y.prototype.render = function() {
      return rn.createElement("div", { className: this.props.className || "", style: gy(gy({ position: "absolute", userSelect: "none" }, lz[this.props.direction]), this.props.replaceStyles || {}), onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart }, this.props.children);
    }, y;
  }(rn.PureComponent)
), EE = { exports: {} };
function sz(d, y) {
  var p = y && y.cache ? y.cache : hz, h = y && y.serializer ? y.serializer : vz, T = y && y.strategy ? y.strategy : fz;
  return T(d, {
    cache: p,
    serializer: h
  });
}
function cz(d) {
  return d == null || typeof d == "number" || typeof d == "boolean";
}
function ZR(d, y, p, h) {
  var T = cz(h) ? h : p(h), x = y.get(T);
  return typeof x > "u" && (x = d.call(this, h), y.set(T, x)), x;
}
function JR(d, y, p) {
  var h = Array.prototype.slice.call(arguments, 3), T = p(h), x = y.get(T);
  return typeof x > "u" && (x = d.apply(this, h), y.set(T, x)), x;
}
function bE(d, y, p, h, T) {
  return p.bind(
    y,
    d,
    h,
    T
  );
}
function fz(d, y) {
  var p = d.length === 1 ? ZR : JR;
  return bE(
    d,
    this,
    p,
    y.cache.create(),
    y.serializer
  );
}
function dz(d, y) {
  var p = JR;
  return bE(
    d,
    this,
    p,
    y.cache.create(),
    y.serializer
  );
}
function pz(d, y) {
  var p = ZR;
  return bE(
    d,
    this,
    p,
    y.cache.create(),
    y.serializer
  );
}
function vz() {
  return JSON.stringify(arguments);
}
function wy() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
wy.prototype.has = function(d) {
  return d in this.cache;
};
wy.prototype.get = function(d) {
  return this.cache[d];
};
wy.prototype.set = function(d, y) {
  this.cache[d] = y;
};
var hz = {
  create: function() {
    return new wy();
  }
};
EE.exports = sz;
EE.exports.strategies = {
  variadic: dz,
  monadic: pz
};
var mz = EE.exports;
const gc = /* @__PURE__ */ kR(mz);
var yz = /* @__PURE__ */ function() {
  var d = function(y, p) {
    return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, T) {
      h.__proto__ = T;
    } || function(h, T) {
      for (var x in T)
        Object.prototype.hasOwnProperty.call(T, x) && (h[x] = T[x]);
    }, d(y, p);
  };
  return function(y, p) {
    d(y, p);
    function h() {
      this.constructor = y;
    }
    y.prototype = p === null ? Object.create(p) : (h.prototype = p.prototype, new h());
  };
}(), sl = function() {
  return sl = Object.assign || function(d) {
    for (var y, p = 1, h = arguments.length; p < h; p++) {
      y = arguments[p];
      for (var T in y)
        Object.prototype.hasOwnProperty.call(y, T) && (d[T] = y[T]);
    }
    return d;
  }, sl.apply(this, arguments);
}, gz = {
  width: "auto",
  height: "auto"
}, dy = gc(function(d, y, p) {
  return Math.max(Math.min(d, p), y);
}), xR = gc(function(d, y) {
  return Math.round(d / y) * y;
}), od = gc(function(d, y) {
  return new RegExp(d, "i").test(y);
}), py = function(d) {
  return !!(d.touches && d.touches.length);
}, Sz = function(d) {
  return !!((d.clientX || d.clientX === 0) && (d.clientY || d.clientY === 0));
}, _R = gc(function(d, y, p) {
  p === void 0 && (p = 0);
  var h = y.reduce(function(x, E, A) {
    return Math.abs(E - d) < Math.abs(y[x] - d) ? A : x;
  }, 0), T = Math.abs(y[h] - d);
  return p === 0 || T < p ? y[h] : d;
}), Ar = gc(function(d, y) {
  return d.substr(d.length - y.length, y.length) === y;
}), oE = gc(function(d) {
  return d = d.toString(), d === "auto" || Ar(d, "px") || Ar(d, "%") || Ar(d, "vh") || Ar(d, "vw") || Ar(d, "vmax") || Ar(d, "vmin") ? d : d + "px";
}), vy = function(d, y, p, h) {
  if (d && typeof d == "string") {
    if (Ar(d, "px"))
      return Number(d.replace("px", ""));
    if (Ar(d, "%")) {
      var T = Number(d.replace("%", "")) / 100;
      return y * T;
    }
    if (Ar(d, "vw")) {
      var T = Number(d.replace("vw", "")) / 100;
      return p * T;
    }
    if (Ar(d, "vh")) {
      var T = Number(d.replace("vh", "")) / 100;
      return h * T;
    }
  }
  return d;
}, Ez = gc(function(d, y, p, h, T, x, E) {
  return h = vy(h, d.width, y, p), T = vy(T, d.height, y, p), x = vy(x, d.width, y, p), E = vy(E, d.height, y, p), {
    maxWidth: typeof h > "u" ? void 0 : Number(h),
    maxHeight: typeof T > "u" ? void 0 : Number(T),
    minWidth: typeof x > "u" ? void 0 : Number(x),
    minHeight: typeof E > "u" ? void 0 : Number(E)
  };
}), bz = [
  "as",
  "style",
  "className",
  "grid",
  "snap",
  "bounds",
  "boundsByDirection",
  "size",
  "defaultSize",
  "minWidth",
  "minHeight",
  "maxWidth",
  "maxHeight",
  "lockAspectRatio",
  "lockAspectRatioExtraWidth",
  "lockAspectRatioExtraHeight",
  "enable",
  "handleStyles",
  "handleClasses",
  "handleWrapperStyle",
  "handleWrapperClass",
  "children",
  "onResizeStart",
  "onResize",
  "onResizeStop",
  "handleComponent",
  "scale",
  "resizeRatio",
  "snapGap"
], DR = "__resizable_base__", Cz = (
  /** @class */
  function(d) {
    yz(y, d);
    function y(p) {
      var h = d.call(this, p) || this;
      return h.ratio = 1, h.resizable = null, h.parentLeft = 0, h.parentTop = 0, h.resizableLeft = 0, h.resizableRight = 0, h.resizableTop = 0, h.resizableBottom = 0, h.targetLeft = 0, h.targetTop = 0, h.appendBase = function() {
        if (!h.resizable || !h.window)
          return null;
        var T = h.parentNode;
        if (!T)
          return null;
        var x = h.window.document.createElement("div");
        return x.style.width = "100%", x.style.height = "100%", x.style.position = "absolute", x.style.transform = "scale(0, 0)", x.style.left = "0", x.style.flex = "0 0 100%", x.classList ? x.classList.add(DR) : x.className += DR, T.appendChild(x), x;
      }, h.removeBase = function(T) {
        var x = h.parentNode;
        x && x.removeChild(T);
      }, h.ref = function(T) {
        T && (h.resizable = T);
      }, h.state = {
        isResizing: !1,
        width: typeof (h.propsSize && h.propsSize.width) > "u" ? "auto" : h.propsSize && h.propsSize.width,
        height: typeof (h.propsSize && h.propsSize.height) > "u" ? "auto" : h.propsSize && h.propsSize.height,
        direction: "right",
        original: {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        },
        backgroundStyle: {
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0)",
          cursor: "auto",
          opacity: 0,
          position: "fixed",
          zIndex: 9999,
          top: "0",
          left: "0",
          bottom: "0",
          right: "0"
        },
        flexBasis: void 0
      }, h.onResizeStart = h.onResizeStart.bind(h), h.onMouseMove = h.onMouseMove.bind(h), h.onMouseUp = h.onMouseUp.bind(h), h;
    }
    return Object.defineProperty(y.prototype, "parentNode", {
      get: function() {
        return this.resizable ? this.resizable.parentNode : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(y.prototype, "window", {
      get: function() {
        return !this.resizable || !this.resizable.ownerDocument ? null : this.resizable.ownerDocument.defaultView;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(y.prototype, "propsSize", {
      get: function() {
        return this.props.size || this.props.defaultSize || gz;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(y.prototype, "size", {
      get: function() {
        var p = 0, h = 0;
        if (this.resizable && this.window) {
          var T = this.resizable.offsetWidth, x = this.resizable.offsetHeight, E = this.resizable.style.position;
          E !== "relative" && (this.resizable.style.position = "relative"), p = this.resizable.style.width !== "auto" ? this.resizable.offsetWidth : T, h = this.resizable.style.height !== "auto" ? this.resizable.offsetHeight : x, this.resizable.style.position = E;
        }
        return { width: p, height: h };
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(y.prototype, "sizeStyle", {
      get: function() {
        var p = this, h = this.props.size, T = function(A) {
          if (typeof p.state[A] > "u" || p.state[A] === "auto")
            return "auto";
          if (p.propsSize && p.propsSize[A] && Ar(p.propsSize[A].toString(), "%")) {
            if (Ar(p.state[A].toString(), "%"))
              return p.state[A].toString();
            var F = p.getParentSize(), j = Number(p.state[A].toString().replace("px", "")), ee = j / F[A] * 100;
            return ee + "%";
          }
          return oE(p.state[A]);
        }, x = h && typeof h.width < "u" && !this.state.isResizing ? oE(h.width) : T("width"), E = h && typeof h.height < "u" && !this.state.isResizing ? oE(h.height) : T("height");
        return { width: x, height: E };
      },
      enumerable: !1,
      configurable: !0
    }), y.prototype.getParentSize = function() {
      if (!this.parentNode)
        return this.window ? { width: this.window.innerWidth, height: this.window.innerHeight } : { width: 0, height: 0 };
      var p = this.appendBase();
      if (!p)
        return { width: 0, height: 0 };
      var h = !1, T = this.parentNode.style.flexWrap;
      T !== "wrap" && (h = !0, this.parentNode.style.flexWrap = "wrap"), p.style.position = "relative", p.style.minWidth = "100%", p.style.minHeight = "100%";
      var x = {
        width: p.offsetWidth,
        height: p.offsetHeight
      };
      return h && (this.parentNode.style.flexWrap = T), this.removeBase(p), x;
    }, y.prototype.bindEvents = function() {
      this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
        capture: !0,
        passive: !1
      }), this.window.addEventListener("touchend", this.onMouseUp));
    }, y.prototype.unbindEvents = function() {
      this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, !0), this.window.removeEventListener("touchend", this.onMouseUp));
    }, y.prototype.componentDidMount = function() {
      if (!(!this.resizable || !this.window)) {
        var p = this.window.getComputedStyle(this.resizable);
        this.setState({
          width: this.state.width || this.size.width,
          height: this.state.height || this.size.height,
          flexBasis: p.flexBasis !== "auto" ? p.flexBasis : void 0
        });
      }
    }, y.prototype.componentWillUnmount = function() {
      this.window && this.unbindEvents();
    }, y.prototype.createSizeForCssProperty = function(p, h) {
      var T = this.propsSize && this.propsSize[h];
      return this.state[h] === "auto" && this.state.original[h] === p && (typeof T > "u" || T === "auto") ? "auto" : p;
    }, y.prototype.calculateNewMaxFromBoundary = function(p, h) {
      var T = this.props.boundsByDirection, x = this.state.direction, E = T && od("left", x), A = T && od("top", x), F, j;
      if (this.props.bounds === "parent") {
        var ee = this.parentNode;
        ee && (F = E ? this.resizableRight - this.parentLeft : ee.offsetWidth + (this.parentLeft - this.resizableLeft), j = A ? this.resizableBottom - this.parentTop : ee.offsetHeight + (this.parentTop - this.resizableTop));
      } else
        this.props.bounds === "window" ? this.window && (F = E ? this.resizableRight : this.window.innerWidth - this.resizableLeft, j = A ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (F = E ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), j = A ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
      return F && Number.isFinite(F) && (p = p && p < F ? p : F), j && Number.isFinite(j) && (h = h && h < j ? h : j), { maxWidth: p, maxHeight: h };
    }, y.prototype.calculateNewSizeFromDirection = function(p, h) {
      var T = this.props.scale || 1, x = this.props.resizeRatio || 1, E = this.state, A = E.direction, F = E.original, j = this.props, ee = j.lockAspectRatio, P = j.lockAspectRatioExtraHeight, K = j.lockAspectRatioExtraWidth, Z = F.width, fe = F.height, me = P || 0, we = K || 0;
      return od("right", A) && (Z = F.width + (p - F.x) * x / T, ee && (fe = (Z - we) / this.ratio + me)), od("left", A) && (Z = F.width - (p - F.x) * x / T, ee && (fe = (Z - we) / this.ratio + me)), od("bottom", A) && (fe = F.height + (h - F.y) * x / T, ee && (Z = (fe - me) * this.ratio + we)), od("top", A) && (fe = F.height - (h - F.y) * x / T, ee && (Z = (fe - me) * this.ratio + we)), { newWidth: Z, newHeight: fe };
    }, y.prototype.calculateNewSizeFromAspectRatio = function(p, h, T, x) {
      var E = this.props, A = E.lockAspectRatio, F = E.lockAspectRatioExtraHeight, j = E.lockAspectRatioExtraWidth, ee = typeof x.width > "u" ? 10 : x.width, P = typeof T.width > "u" || T.width < 0 ? p : T.width, K = typeof x.height > "u" ? 10 : x.height, Z = typeof T.height > "u" || T.height < 0 ? h : T.height, fe = F || 0, me = j || 0;
      if (A) {
        var we = (K - fe) * this.ratio + me, Se = (Z - fe) * this.ratio + me, oe = (ee - me) / this.ratio + fe, re = (P - me) / this.ratio + fe, _e = Math.max(ee, we), J = Math.min(P, Se), Qe = Math.max(K, oe), He = Math.min(Z, re);
        p = dy(p, _e, J), h = dy(h, Qe, He);
      } else
        p = dy(p, ee, P), h = dy(h, K, Z);
      return { newWidth: p, newHeight: h };
    }, y.prototype.setBoundingClientRect = function() {
      if (this.props.bounds === "parent") {
        var p = this.parentNode;
        if (p) {
          var h = p.getBoundingClientRect();
          this.parentLeft = h.left, this.parentTop = h.top;
        }
      }
      if (this.props.bounds && typeof this.props.bounds != "string") {
        var T = this.props.bounds.getBoundingClientRect();
        this.targetLeft = T.left, this.targetTop = T.top;
      }
      if (this.resizable) {
        var x = this.resizable.getBoundingClientRect(), E = x.left, A = x.top, F = x.right, j = x.bottom;
        this.resizableLeft = E, this.resizableRight = F, this.resizableTop = A, this.resizableBottom = j;
      }
    }, y.prototype.onResizeStart = function(p, h) {
      if (!(!this.resizable || !this.window)) {
        var T = 0, x = 0;
        if (p.nativeEvent && Sz(p.nativeEvent) ? (T = p.nativeEvent.clientX, x = p.nativeEvent.clientY) : p.nativeEvent && py(p.nativeEvent) && (T = p.nativeEvent.touches[0].clientX, x = p.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable) {
          var E = this.props.onResizeStart(p, h, this.resizable);
          if (E === !1)
            return;
        }
        this.props.size && (typeof this.props.size.height < "u" && this.props.size.height !== this.state.height && this.setState({ height: this.props.size.height }), typeof this.props.size.width < "u" && this.props.size.width !== this.state.width && this.setState({ width: this.props.size.width })), this.ratio = typeof this.props.lockAspectRatio == "number" ? this.props.lockAspectRatio : this.size.width / this.size.height;
        var A, F = this.window.getComputedStyle(this.resizable);
        if (F.flexBasis !== "auto") {
          var j = this.parentNode;
          if (j) {
            var ee = this.window.getComputedStyle(j).flexDirection;
            this.flexDir = ee.startsWith("row") ? "row" : "column", A = F.flexBasis;
          }
        }
        this.setBoundingClientRect(), this.bindEvents();
        var P = {
          original: {
            x: T,
            y: x,
            width: this.size.width,
            height: this.size.height
          },
          isResizing: !0,
          backgroundStyle: sl(sl({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(p.target).cursor || "auto" }),
          direction: h,
          flexBasis: A
        };
        this.setState(P);
      }
    }, y.prototype.onMouseMove = function(p) {
      if (!(!this.state.isResizing || !this.resizable || !this.window)) {
        if (this.window.TouchEvent && py(p))
          try {
            p.preventDefault(), p.stopPropagation();
          } catch {
          }
        var h = this.props, T = h.maxWidth, x = h.maxHeight, E = h.minWidth, A = h.minHeight, F = py(p) ? p.touches[0].clientX : p.clientX, j = py(p) ? p.touches[0].clientY : p.clientY, ee = this.state, P = ee.direction, K = ee.original, Z = ee.width, fe = ee.height, me = this.getParentSize(), we = Ez(me, this.window.innerWidth, this.window.innerHeight, T, x, E, A);
        T = we.maxWidth, x = we.maxHeight, E = we.minWidth, A = we.minHeight;
        var Se = this.calculateNewSizeFromDirection(F, j), oe = Se.newHeight, re = Se.newWidth, _e = this.calculateNewMaxFromBoundary(T, x);
        this.props.snap && this.props.snap.x && (re = _R(re, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (oe = _R(oe, this.props.snap.y, this.props.snapGap));
        var J = this.calculateNewSizeFromAspectRatio(re, oe, { width: _e.maxWidth, height: _e.maxHeight }, { width: E, height: A });
        if (re = J.newWidth, oe = J.newHeight, this.props.grid) {
          var Qe = xR(re, this.props.grid[0]), He = xR(oe, this.props.grid[1]), pt = this.props.snapGap || 0;
          re = pt === 0 || Math.abs(Qe - re) <= pt ? Qe : re, oe = pt === 0 || Math.abs(He - oe) <= pt ? He : oe;
        }
        var Mt = {
          width: re - K.width,
          height: oe - K.height
        };
        if (Z && typeof Z == "string") {
          if (Ar(Z, "%")) {
            var vt = re / me.width * 100;
            re = vt + "%";
          } else if (Ar(Z, "vw")) {
            var ot = re / this.window.innerWidth * 100;
            re = ot + "vw";
          } else if (Ar(Z, "vh")) {
            var ut = re / this.window.innerHeight * 100;
            re = ut + "vh";
          }
        }
        if (fe && typeof fe == "string") {
          if (Ar(fe, "%")) {
            var vt = oe / me.height * 100;
            oe = vt + "%";
          } else if (Ar(fe, "vw")) {
            var ot = oe / this.window.innerWidth * 100;
            oe = ot + "vw";
          } else if (Ar(fe, "vh")) {
            var ut = oe / this.window.innerHeight * 100;
            oe = ut + "vh";
          }
        }
        var Ne = {
          width: this.createSizeForCssProperty(re, "width"),
          height: this.createSizeForCssProperty(oe, "height")
        };
        this.flexDir === "row" ? Ne.flexBasis = Ne.width : this.flexDir === "column" && (Ne.flexBasis = Ne.height), this.setState(Ne), this.props.onResize && this.props.onResize(p, P, this.resizable, Mt);
      }
    }, y.prototype.onMouseUp = function(p) {
      var h = this.state, T = h.isResizing, x = h.direction, E = h.original;
      if (!(!T || !this.resizable)) {
        var A = {
          width: this.size.width - E.width,
          height: this.size.height - E.height
        };
        this.props.onResizeStop && this.props.onResizeStop(p, x, this.resizable, A), this.props.size && this.setState(this.props.size), this.unbindEvents(), this.setState({
          isResizing: !1,
          backgroundStyle: sl(sl({}, this.state.backgroundStyle), { cursor: "auto" })
        });
      }
    }, y.prototype.updateSize = function(p) {
      this.setState({ width: p.width, height: p.height });
    }, y.prototype.renderResizer = function() {
      var p = this, h = this.props, T = h.enable, x = h.handleStyles, E = h.handleClasses, A = h.handleWrapperStyle, F = h.handleWrapperClass, j = h.handleComponent;
      if (!T)
        return null;
      var ee = Object.keys(T).map(function(P) {
        return T[P] !== !1 ? rn.createElement(uz, { key: P, direction: P, onResizeStart: p.onResizeStart, replaceStyles: x && x[P], className: E && E[P] }, j && j[P] ? j[P] : null) : null;
      });
      return rn.createElement("div", { className: F, style: A }, ee);
    }, y.prototype.render = function() {
      var p = this, h = Object.keys(this.props).reduce(function(E, A) {
        return bz.indexOf(A) !== -1 || (E[A] = p.props[A]), E;
      }, {}), T = sl(sl(sl({ position: "relative", userSelect: this.state.isResizing ? "none" : "auto" }, this.props.style), this.sizeStyle), { maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight, minWidth: this.props.minWidth, minHeight: this.props.minHeight, boxSizing: "border-box", flexShrink: 0 });
      this.state.flexBasis && (T.flexBasis = this.state.flexBasis);
      var x = this.props.as || "div";
      return rn.createElement(
        x,
        sl({ ref: this.ref, style: T, className: this.props.className }, h),
        this.state.isResizing && rn.createElement("div", { style: this.state.backgroundStyle }),
        this.props.children,
        this.renderResizer()
      );
    }, y.defaultProps = {
      as: "div",
      onResizeStart: function() {
      },
      onResize: function() {
      },
      onResizeStop: function() {
      },
      enable: {
        top: !0,
        right: !0,
        bottom: !0,
        left: !0,
        topRight: !0,
        bottomRight: !0,
        bottomLeft: !0,
        topLeft: !0
      },
      style: {},
      grid: [1, 1],
      lockAspectRatio: !1,
      lockAspectRatioExtraWidth: 0,
      lockAspectRatioExtraHeight: 0,
      scale: 1,
      resizeRatio: 1,
      snapGap: 0
    }, y;
  }(rn.PureComponent)
);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var pE = function(d, y) {
  return pE = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(p, h) {
    p.__proto__ = h;
  } || function(p, h) {
    for (var T in h)
      h.hasOwnProperty(T) && (p[T] = h[T]);
  }, pE(d, y);
};
function wz(d, y) {
  pE(d, y);
  function p() {
    this.constructor = d;
  }
  d.prototype = y === null ? Object.create(y) : (p.prototype = y.prototype, new p());
}
var wr = function() {
  return wr = Object.assign || function(y) {
    for (var p, h = 1, T = arguments.length; h < T; h++) {
      p = arguments[h];
      for (var x in p)
        Object.prototype.hasOwnProperty.call(p, x) && (y[x] = p[x]);
    }
    return y;
  }, wr.apply(this, arguments);
};
function Rz(d, y) {
  var p = {};
  for (var h in d)
    Object.prototype.hasOwnProperty.call(d, h) && y.indexOf(h) < 0 && (p[h] = d[h]);
  if (d != null && typeof Object.getOwnPropertySymbols == "function")
    for (var T = 0, h = Object.getOwnPropertySymbols(d); T < h.length; T++)
      y.indexOf(h[T]) < 0 && Object.prototype.propertyIsEnumerable.call(d, h[T]) && (p[h[T]] = d[h[T]]);
  return p;
}
var Tz = iz, xz = {
  width: "auto",
  height: "auto",
  display: "inline-block",
  position: "absolute",
  top: 0,
  left: 0
}, _z = function(d) {
  return {
    bottom: d,
    bottomLeft: d,
    bottomRight: d,
    left: d,
    right: d,
    top: d,
    topLeft: d,
    topRight: d
  };
}, Dz = (
  /** @class */
  function(d) {
    wz(y, d);
    function y(p) {
      var h = d.call(this, p) || this;
      return h.resizingPosition = { x: 0, y: 0 }, h.offsetFromParent = { left: 0, top: 0 }, h.resizableElement = { current: null }, h.originalPosition = { x: 0, y: 0 }, h.refDraggable = function(T) {
        T && (h.draggable = T);
      }, h.refResizable = function(T) {
        T && (h.resizable = T, h.resizableElement.current = T.resizable);
      }, h.state = {
        resizing: !1,
        bounds: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        maxWidth: p.maxWidth,
        maxHeight: p.maxHeight
      }, h.onResizeStart = h.onResizeStart.bind(h), h.onResize = h.onResize.bind(h), h.onResizeStop = h.onResizeStop.bind(h), h.onDragStart = h.onDragStart.bind(h), h.onDrag = h.onDrag.bind(h), h.onDragStop = h.onDragStop.bind(h), h.getMaxSizesFromProps = h.getMaxSizesFromProps.bind(h), h;
    }
    return y.prototype.componentDidMount = function() {
      this.updateOffsetFromParent();
      var p = this.offsetFromParent, h = p.left, T = p.top, x = this.getDraggablePosition(), E = x.x, A = x.y;
      this.draggable.setState({
        x: E - h,
        y: A - T
      }), this.forceUpdate();
    }, y.prototype.getDraggablePosition = function() {
      var p = this.draggable.state, h = p.x, T = p.y;
      return { x: h, y: T };
    }, y.prototype.getParent = function() {
      return this.resizable && this.resizable.parentNode;
    }, y.prototype.getParentSize = function() {
      return this.resizable.getParentSize();
    }, y.prototype.getMaxSizesFromProps = function() {
      var p = typeof this.props.maxWidth > "u" ? Number.MAX_SAFE_INTEGER : this.props.maxWidth, h = typeof this.props.maxHeight > "u" ? Number.MAX_SAFE_INTEGER : this.props.maxHeight;
      return { maxWidth: p, maxHeight: h };
    }, y.prototype.getSelfElement = function() {
      return this.resizable && this.resizable.resizable;
    }, y.prototype.getOffsetHeight = function(p) {
      var h = this.props.scale;
      switch (this.props.bounds) {
        case "window":
          return window.innerHeight / h;
        case "body":
          return document.body.offsetHeight / h;
        default:
          return p.offsetHeight;
      }
    }, y.prototype.getOffsetWidth = function(p) {
      var h = this.props.scale;
      switch (this.props.bounds) {
        case "window":
          return window.innerWidth / h;
        case "body":
          return document.body.offsetWidth / h;
        default:
          return p.offsetWidth;
      }
    }, y.prototype.onDragStart = function(p, h) {
      this.props.onDragStart && this.props.onDragStart(p, h);
      var T = this.getDraggablePosition();
      if (this.originalPosition = T, !!this.props.bounds) {
        var x = this.getParent(), E = this.props.scale, A;
        if (this.props.bounds === "parent")
          A = x;
        else if (this.props.bounds === "body") {
          var F = x.getBoundingClientRect(), j = F.left, ee = F.top, P = document.body.getBoundingClientRect(), K = -(j - x.offsetLeft * E - P.left) / E, Z = -(ee - x.offsetTop * E - P.top) / E, fe = (document.body.offsetWidth - this.resizable.size.width * E) / E + K, me = (document.body.offsetHeight - this.resizable.size.height * E) / E + Z;
          return this.setState({ bounds: { top: Z, right: fe, bottom: me, left: K } });
        } else if (this.props.bounds === "window") {
          if (!this.resizable)
            return;
          var we = x.getBoundingClientRect(), Se = we.left, oe = we.top, re = -(Se - x.offsetLeft * E) / E, _e = -(oe - x.offsetTop * E) / E, fe = (window.innerWidth - this.resizable.size.width * E) / E + re, me = (window.innerHeight - this.resizable.size.height * E) / E + _e;
          return this.setState({ bounds: { top: _e, right: fe, bottom: me, left: re } });
        } else
          typeof this.props.bounds == "string" ? A = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (A = this.props.bounds);
        if (!(!(A instanceof HTMLElement) || !(x instanceof HTMLElement))) {
          var J = A.getBoundingClientRect(), Qe = J.left, He = J.top, pt = x.getBoundingClientRect(), Mt = pt.left, vt = pt.top, ot = (Qe - Mt) / E, ut = He - vt;
          if (this.resizable) {
            this.updateOffsetFromParent();
            var Ne = this.offsetFromParent;
            this.setState({
              bounds: {
                top: ut - Ne.top,
                right: ot + (A.offsetWidth - this.resizable.size.width) - Ne.left / E,
                bottom: ut + (A.offsetHeight - this.resizable.size.height) - Ne.top,
                left: ot - Ne.left / E
              }
            });
          }
        }
      }
    }, y.prototype.onDrag = function(p, h) {
      if (this.props.onDrag) {
        var T = this.offsetFromParent, x = T.left, E = T.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both")
          return this.props.onDrag(p, wr(wr({}, h), { x: h.x - x, y: h.y - E }));
        if (this.props.dragAxis === "x")
          return this.props.onDrag(p, wr(wr({}, h), { x: h.x + x, y: this.originalPosition.y + E, deltaY: 0 }));
        if (this.props.dragAxis === "y")
          return this.props.onDrag(p, wr(wr({}, h), { x: this.originalPosition.x + x, y: h.y + E, deltaX: 0 }));
      }
    }, y.prototype.onDragStop = function(p, h) {
      if (this.props.onDragStop) {
        var T = this.offsetFromParent, x = T.left, E = T.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both")
          return this.props.onDragStop(p, wr(wr({}, h), { x: h.x + x, y: h.y + E }));
        if (this.props.dragAxis === "x")
          return this.props.onDragStop(p, wr(wr({}, h), { x: h.x + x, y: this.originalPosition.y + E, deltaY: 0 }));
        if (this.props.dragAxis === "y")
          return this.props.onDragStop(p, wr(wr({}, h), { x: this.originalPosition.x + x, y: h.y + E, deltaX: 0 }));
      }
    }, y.prototype.onResizeStart = function(p, h, T) {
      p.stopPropagation(), this.setState({
        resizing: !0
      });
      var x = this.props.scale, E = this.offsetFromParent, A = this.getDraggablePosition();
      if (this.resizingPosition = { x: A.x + E.left, y: A.y + E.top }, this.originalPosition = A, this.props.bounds) {
        var F = this.getParent(), j = void 0;
        this.props.bounds === "parent" ? j = F : this.props.bounds === "body" ? j = document.body : this.props.bounds === "window" ? j = window : typeof this.props.bounds == "string" ? j = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (j = this.props.bounds);
        var ee = this.getSelfElement();
        if (ee instanceof Element && (j instanceof HTMLElement || j === window) && F instanceof HTMLElement) {
          var P = this.getMaxSizesFromProps(), K = P.maxWidth, Z = P.maxHeight, fe = this.getParentSize();
          if (K && typeof K == "string")
            if (K.endsWith("%")) {
              var me = Number(K.replace("%", "")) / 100;
              K = fe.width * me;
            } else
              K.endsWith("px") && (K = Number(K.replace("px", "")));
          if (Z && typeof Z == "string")
            if (Z.endsWith("%")) {
              var me = Number(Z.replace("%", "")) / 100;
              Z = fe.width * me;
            } else
              Z.endsWith("px") && (Z = Number(Z.replace("px", "")));
          var we = ee.getBoundingClientRect(), Se = we.left, oe = we.top, re = this.props.bounds === "window" ? { left: 0, top: 0 } : j.getBoundingClientRect(), _e = re.left, J = re.top, Qe = this.getOffsetWidth(j), He = this.getOffsetHeight(j), pt = h.toLowerCase().endsWith("left"), Mt = h.toLowerCase().endsWith("right"), vt = h.startsWith("top"), ot = h.startsWith("bottom");
          if ((pt || vt) && this.resizable) {
            var ut = (Se - _e) / x + this.resizable.size.width;
            this.setState({ maxWidth: ut > Number(K) ? K : ut });
          }
          if (Mt || this.props.lockAspectRatio && !pt && !vt) {
            var ut = Qe + (_e - Se) / x;
            this.setState({ maxWidth: ut > Number(K) ? K : ut });
          }
          if ((vt || pt) && this.resizable) {
            var ut = (oe - J) / x + this.resizable.size.height;
            this.setState({
              maxHeight: ut > Number(Z) ? Z : ut
            });
          }
          if (ot || this.props.lockAspectRatio && !vt && !pt) {
            var ut = He + (J - oe) / x;
            this.setState({
              maxHeight: ut > Number(Z) ? Z : ut
            });
          }
        }
      } else
        this.setState({
          maxWidth: this.props.maxWidth,
          maxHeight: this.props.maxHeight
        });
      this.props.onResizeStart && this.props.onResizeStart(p, h, T);
    }, y.prototype.onResize = function(p, h, T, x) {
      var E = { x: this.originalPosition.x, y: this.originalPosition.y }, A = -x.width, F = -x.height, j = ["top", "left", "topLeft", "bottomLeft", "topRight"];
      j.indexOf(h) !== -1 && (h === "bottomLeft" ? E.x += A : (h === "topRight" || (E.x += A), E.y += F)), (E.x !== this.draggable.state.x || E.y !== this.draggable.state.y) && this.draggable.setState(E), this.updateOffsetFromParent();
      var ee = this.offsetFromParent, P = this.getDraggablePosition().x + ee.left, K = this.getDraggablePosition().y + ee.top;
      this.resizingPosition = { x: P, y: K }, this.props.onResize && this.props.onResize(p, h, T, x, {
        x: P,
        y: K
      });
    }, y.prototype.onResizeStop = function(p, h, T, x) {
      this.setState({
        resizing: !1
      });
      var E = this.getMaxSizesFromProps(), A = E.maxWidth, F = E.maxHeight;
      this.setState({ maxWidth: A, maxHeight: F }), this.props.onResizeStop && this.props.onResizeStop(p, h, T, x, this.resizingPosition);
    }, y.prototype.updateSize = function(p) {
      this.resizable && this.resizable.updateSize({ width: p.width, height: p.height });
    }, y.prototype.updatePosition = function(p) {
      this.draggable.setState(p);
    }, y.prototype.updateOffsetFromParent = function() {
      var p = this.props.scale, h = this.getParent(), T = this.getSelfElement();
      if (!h || T === null)
        return {
          top: 0,
          left: 0
        };
      var x = h.getBoundingClientRect(), E = x.left, A = x.top, F = T.getBoundingClientRect(), j = this.getDraggablePosition(), ee = h.scrollLeft, P = h.scrollTop;
      this.offsetFromParent = {
        left: F.left - E + ee - j.x * p,
        top: F.top - A + P - j.y * p
      };
    }, y.prototype.render = function() {
      var p = this.props, h = p.disableDragging, T = p.style, x = p.dragHandleClassName, E = p.position, A = p.onMouseDown, F = p.onMouseUp, j = p.dragAxis, ee = p.dragGrid, P = p.bounds, K = p.enableUserSelectHack, Z = p.cancel, fe = p.children;
      p.onResizeStart, p.onResize, p.onResizeStop, p.onDragStart, p.onDrag, p.onDragStop;
      var me = p.resizeHandleStyles, we = p.resizeHandleClasses, Se = p.resizeHandleComponent, oe = p.enableResizing, re = p.resizeGrid, _e = p.resizeHandleWrapperClass, J = p.resizeHandleWrapperStyle, Qe = p.scale, He = p.allowAnyClick, pt = Rz(p, ["disableDragging", "style", "dragHandleClassName", "position", "onMouseDown", "onMouseUp", "dragAxis", "dragGrid", "bounds", "enableUserSelectHack", "cancel", "children", "onResizeStart", "onResize", "onResizeStop", "onDragStart", "onDrag", "onDragStop", "resizeHandleStyles", "resizeHandleClasses", "resizeHandleComponent", "enableResizing", "resizeGrid", "resizeHandleWrapperClass", "resizeHandleWrapperStyle", "scale", "allowAnyClick"]), Mt = this.props.default ? wr({}, this.props.default) : void 0;
      delete pt.default;
      var vt = h || x ? { cursor: "auto" } : { cursor: "move" }, ot = wr(wr(wr({}, xz), vt), T), ut = this.offsetFromParent, Ne = ut.left, Xe = ut.top, Rt;
      E && (Rt = {
        x: E.x - Ne,
        y: E.y - Xe
      });
      var st = this.state.resizing ? void 0 : Rt, Re = this.state.resizing ? "both" : j;
      return rn.createElement(
        Tz,
        { ref: this.refDraggable, handle: x ? ".".concat(x) : void 0, defaultPosition: Mt, onMouseDown: A, onMouseUp: F, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop, axis: Re, disabled: h, grid: ee, bounds: P ? this.state.bounds : void 0, position: st, enableUserSelectHack: K, cancel: Z, scale: Qe, allowAnyClick: He, nodeRef: this.resizableElement },
        rn.createElement(Cz, wr({}, pt, { ref: this.refResizable, defaultSize: Mt, size: this.props.size, enable: typeof oe == "boolean" ? _z(oe) : oe, onResizeStart: this.onResizeStart, onResize: this.onResize, onResizeStop: this.onResizeStop, style: ot, minWidth: this.props.minWidth, minHeight: this.props.minHeight, maxWidth: this.state.resizing ? this.state.maxWidth : this.props.maxWidth, maxHeight: this.state.resizing ? this.state.maxHeight : this.props.maxHeight, grid: re, handleWrapperClass: _e, handleWrapperStyle: J, lockAspectRatio: this.props.lockAspectRatio, lockAspectRatioExtraWidth: this.props.lockAspectRatioExtraWidth, lockAspectRatioExtraHeight: this.props.lockAspectRatioExtraHeight, handleStyles: me, handleClasses: we, handleComponent: Se, scale: this.props.scale }), fe)
      );
    }, y.defaultProps = {
      maxWidth: Number.MAX_SAFE_INTEGER,
      maxHeight: Number.MAX_SAFE_INTEGER,
      scale: 1,
      onResizeStart: function() {
      },
      onResize: function() {
      },
      onResizeStop: function() {
      },
      onDragStart: function() {
      },
      onDrag: function() {
      },
      onDragStop: function() {
      }
    }, y;
  }(rn.PureComponent)
);
const Oz = (d, y) => {
  const p = y.map((x) => x.id), h = d.filter((x) => p.includes(x)), T = p.filter(
    (x) => !h.includes(x)
  );
  return {
    updatedLayerQueue: [...h, ...T],
    updated: T.length > 0 || h.length !== d.length
  };
}, hy = (d, y) => [...d.filter((h) => h !== y), y], eT = (d) => {
  const { bigWindow: y, padding: p = "0px" } = d;
  switch (y) {
    case "full":
      return {
        top: 0,
        left: 0,
        width: `calc(100% - ${p} - ${p})`,
        height: `calc(100% - ${p} - ${p})`
      };
    case "bottom-left":
      return {
        top: "50%",
        left: 0,
        width: `calc(50% - ${p} - ${p})`,
        height: `calc(50% - ${p} - ${p})`
      };
    case "bottom-right":
      return {
        top: "50%",
        left: "50%",
        width: `calc(50% - ${p} - ${p})`,
        height: `calc(50% - ${p} - ${p})`
      };
    case "top-left":
      return {
        top: 0,
        left: 0,
        width: `calc(50% - ${p} - ${p})`,
        height: `calc(50% - ${p} - ${p})`
      };
    case "top-right":
      return {
        top: 0,
        left: "50%",
        width: `calc(50% - ${p} - ${p})`,
        height: `calc(50% - ${p} - ${p})`
      };
    case "left":
      return {
        top: 0,
        left: 0,
        width: `calc(50% - ${p} - ${p})`,
        height: `calc(100% - ${p} - ${p})`
      };
    case "right":
      return {
        top: 0,
        left: "50%",
        width: `calc(50% - ${p} - ${p})`,
        height: `calc(100% - ${p} - ${p})`
      };
    case "top":
      return {
        top: 0,
        left: 0,
        width: `calc(100% - ${p} - ${p})`,
        height: `calc(50% - ${p} - ${p})`
      };
    case "bottom":
      return {
        top: "50%",
        left: 0,
        width: `calc(100% - ${p} - ${p})`,
        height: `calc(50% - ${p} - ${p})`
      };
  }
  return {};
}, tT = rn.createContext(void 0), nT = () => {
  const d = rn.useContext(tT);
  if (!d)
    throw new Error("useWindow must be used within a WindowSystem");
  return d;
}, rT = rn.createContext(
  void 0
), Cv = () => {
  const d = nT(), y = rn.useContext(rT);
  if (!y)
    throw new Error("useWindow must be used within a Window");
  return { ...y, ...d };
}, kz = (d, y) => {
  const p = CSS.escape(d), h = CSS.escape(y);
  return `#${p}-window-${h}-body,#${p}-window-${h}-maximizebutton,#${p}-window-${h}-closebutton`;
}, fs = 5, OR = (d) => {
  const { top: y, left: p, right: h, bottom: T } = d;
  return y < fs ? p < fs ? "top-left" : h < fs ? "top-right" : "top" : T < fs ? p < fs ? "bottom-left" : h < fs ? "bottom-right" : "bottom" : p < fs ? "left" : h < fs ? "right" : !1;
};
function cl(d) {
  const {
    windowPos: y,
    id: p,
    wsId: h,
    activateWindow: T,
    maximize: x,
    minimize: E,
    bigWindowSuggest: A,
    resizeWindow: F,
    windowAreaNode: j
  } = Cv();
  return E ? /* @__PURE__ */ zt.jsx(zt.Fragment, {}) : x ? /* @__PURE__ */ zt.jsx(
    "div",
    {
      onMouseDown: T,
      style: {
        display: "grid",
        gridTemplateRows: "auto 1fr",
        gridTemplateColumns: "1fr",
        ...d.style,
        ...eT({ bigWindow: x })
      },
      children: d.children
    }
  ) : /* @__PURE__ */ zt.jsx(
    Dz,
    {
      ...d,
      onMouseDown: T,
      style: {
        display: "grid",
        gridTemplateRows: "auto 1fr",
        gridTemplateColumns: "1fr",
        ...d.style
      },
      onResizeStop: (ee, P, K) => {
        F({
          ...y,
          width: K.style.width,
          height: K.style.height
        });
      },
      onDrag: (ee, P) => {
        if (j === null)
          return;
        const K = OR({
          top: P.y,
          left: P.x,
          right: j.clientWidth - (P.x + P.node.offsetWidth),
          bottom: j.clientHeight - (P.y + P.node.offsetHeight)
        });
        A({ bigWindow: K });
      },
      onDragStop: (ee, P) => {
        const K = j !== null ? OR({
          top: P.y,
          left: P.x,
          right: j.clientWidth - (P.x + P.node.offsetWidth),
          bottom: j.clientHeight - (P.y + P.node.offsetHeight)
        }) : !1;
        F({ ...y, x: P.x, y: P.y }, K), A({ bigWindow: !1 });
      },
      default: y,
      minWidth: 60,
      minHeight: 24,
      bounds: "parent",
      cancel: kz(h, p),
      children: d.children
    }
  );
}
function zz(d) {
  const { minimizeWindow: y, id: p, wsId: h } = Cv();
  return /* @__PURE__ */ zt.jsx(
    "button",
    {
      ...d,
      type: "button",
      id: `${h}-window-${p}-maximizebutton`,
      onMouseUp: y,
      style: {
        width: 30,
        userSelect: "none",
        ...d.style
      }
    }
  );
}
function Mz(d) {
  const { maximizeWindow: y, id: p, wsId: h } = Cv();
  return /* @__PURE__ */ zt.jsx(
    "button",
    {
      ...d,
      type: "button",
      id: `${h}-window-${p}-maximizebutton`,
      onMouseUp: y,
      style: {
        width: 30,
        userSelect: "none",
        ...d.style
      }
    }
  );
}
function Lz(d) {
  const { closeWindow: y, id: p, wsId: h } = Cv();
  return /* @__PURE__ */ zt.jsx(
    "button",
    {
      ...d,
      type: "button",
      id: `${h}-window-${p}-closebutton`,
      onMouseUp: y,
      style: {
        width: 30,
        userSelect: "none",
        ...d.style
      }
    }
  );
}
function Nz(d) {
  return /* @__PURE__ */ zt.jsx("div", { ...d, style: { flex: 1, ...d.style } });
}
function wv(d) {
  return /* @__PURE__ */ zt.jsx(
    "div",
    {
      ...d,
      style: {
        width: "100%",
        height: 24,
        display: "flex",
        ...d.style
      },
      children: d.children
    }
  );
}
wv.Title = Nz;
wv.MaximizeButton = Mz;
wv.CloseButton = Lz;
wv.MinimizeButton = zz;
function Az(d) {
  const { id: y, wsId: p } = Cv();
  return /* @__PURE__ */ zt.jsx(
    "div",
    {
      ...d,
      id: `${p}-window-${y}-body`,
      style: {
        cursor: "auto",
        overflow: "auto",
        ...d.style
      },
      children: d.children
    }
  );
}
cl.TitleBar = wv;
cl.Body = Az;
const Uz = (d) => {
  const { window: y, ...p } = d;
  return /* @__PURE__ */ zt.jsxs(
    cl,
    {
      ...p,
      window: y,
      style: {
        position: "absolute",
        zIndex: y.layerIndex,
        border: "1px solid #000",
        borderRadius: "4px"
      },
      children: [
        /* @__PURE__ */ zt.jsxs(
          cl.TitleBar,
          {
            style: {
              backgroundColor: y.isActive ? "#99f" : "#ccf"
            },
            children: [
              /* @__PURE__ */ zt.jsx(
                cl.TitleBar.Title,
                {
                  style: {
                    paddingLeft: 4
                  },
                  children: y.header
                }
              ),
              /* @__PURE__ */ zt.jsx(cl.TitleBar.MinimizeButton, { children: "_" }),
              /* @__PURE__ */ zt.jsx(cl.TitleBar.MaximizeButton, { children: y.maximize === "full" ? "❒" : "□" }),
              /* @__PURE__ */ zt.jsx(cl.TitleBar.CloseButton, { children: "×" })
            ]
          }
        ),
        /* @__PURE__ */ zt.jsx(
          cl.Body,
          {
            style: {
              backgroundColor: "#fff"
            },
            children: y.body
          }
        )
      ]
    }
  );
}, Pz = (d) => {
  const { children: y, state: p, ...h } = d;
  return /* @__PURE__ */ zt.jsx(rT.Provider, { value: { ...p, ...h }, children: y });
}, mc = (d, y) => d[typeof y == "string" ? y : y.id] ?? {
  closed: !1,
  maximize: !1,
  minimize: !1,
  windowPos: typeof y == "string" ? {
    x: 0,
    y: 0,
    width: 200,
    height: 200
  } : y.defaultWindowPos
};
function jz(d) {
  const { bigWindow: y, ...p } = d;
  if (y === !1)
    return /* @__PURE__ */ zt.jsx(zt.Fragment, {});
  const { layerQueue: h } = nT();
  return /* @__PURE__ */ zt.jsx(
    "div",
    {
      ...p,
      style: {
        position: "absolute",
        pointerEvents: "none",
        zIndex: h.length,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(5px)",
        margin: "5px",
        borderRadius: "5px",
        ...eT({ bigWindow: y, padding: "5px" }),
        ...p.style
      }
    }
  );
}
function Fz(d) {
  const {
    windows: y,
    Window: p = Uz,
    TaskBar: h = ZO,
    onWindowChange: T,
    ...x
  } = d, [E, A] = rn.useState([]), [F, j] = rn.useState(!1), [ee, P] = rn.useState({}), K = rn.useId(), Z = y.filter((Se) => {
    var oe;
    return !((oe = ee[Se.id]) != null && oe.closed);
  });
  rn.useEffect(() => {
    const { updatedLayerQueue: Se, updated: oe } = Oz(
      E,
      Z
    );
    oe && A(Se);
    const re = y.map((_e) => _e.id);
    P(
      (_e) => Object.fromEntries(
        Object.entries(_e).filter((J) => re.includes(J[0]))
      )
    );
  }, [y, E]);
  const fe = Z.map((Se) => {
    const oe = E.findIndex((_e) => Se.id === _e), re = oe === E.length - 1;
    return {
      ...Se,
      ...mc(ee, Se),
      layerIndex: re ? E.length + 10 : oe,
      isActive: re
    };
  }), me = rn.useRef(null), we = rn.useRef(null);
  return /* @__PURE__ */ zt.jsx(
    tT.Provider,
    {
      value: {
        layerQueue: E,
        wsId: K,
        windowAreaNode: me.current,
        windowProviderNode: we.current
      },
      children: /* @__PURE__ */ zt.jsxs(
        "div",
        {
          ref: we,
          ...x,
          style: {
            ...x.style,
            display: "grid",
            gridTemplateRows: "auto 30px",
            gridTemplateColumns: "100%",
            alignItems: "end",
            justifyItems: "stretch"
          },
          children: [
            /* @__PURE__ */ zt.jsxs(
              "div",
              {
                ref: me,
                style: { height: "100%", position: "relative" },
                children: [
                  fe.map((Se) => /* @__PURE__ */ zt.jsx(
                    Pz,
                    {
                      state: Se,
                      activateWindow: () => A((oe) => hy(oe, Se.id)),
                      bigWindowSuggest: (oe) => {
                        j(oe.bigWindow);
                      },
                      resizeWindow: (oe, re) => {
                        P((_e) => ({
                          ..._e,
                          [Se.id]: {
                            ...mc(_e, Se),
                            ...re ? { maximize: re } : { ...oe }
                          }
                        }));
                      },
                      closeWindow: () => {
                        A(
                          (oe) => oe.filter((re) => re !== Se.id)
                        ), P((oe) => ({
                          ...oe,
                          [Se.id]: {
                            ...mc(oe, Se),
                            closed: !0
                          }
                        })), T == null || T(
                          y.filter((oe) => {
                            var re;
                            return !((re = ee[oe.id]) != null && re.closed);
                          })
                        );
                      },
                      maximizeWindow: () => {
                        A((oe) => hy(oe, Se.id)), P((oe) => {
                          var re;
                          return {
                            ...oe,
                            [Se.id]: {
                              ...mc(oe, Se),
                              maximize: (re = oe == null ? void 0 : oe[Se.id]) != null && re.maximize ? !1 : "full"
                            }
                          };
                        });
                      },
                      minimizeWindow: () => {
                        A((oe) => hy(oe, Se.id)), P((oe) => {
                          var re;
                          return {
                            ...oe,
                            [Se.id]: {
                              ...mc(oe, Se),
                              minimize: !((re = oe[Se.id]) != null && re.minimize)
                            }
                          };
                        });
                      },
                      hideWindow: () => {
                      },
                      children: /* @__PURE__ */ zt.jsx(p, { window: Se })
                    },
                    Se.id
                  )),
                  /* @__PURE__ */ zt.jsx(jz, { bigWindow: F })
                ]
              }
            ),
            /* @__PURE__ */ zt.jsx(
              zR.Provider,
              {
                value: {
                  windows: fe,
                  activateWindow: (Se) => {
                    var oe;
                    A((re) => hy(re, Se)), (oe = ee[Se]) != null && oe.minimize && P((re) => ({
                      ...re,
                      [Se]: {
                        ...mc(re, Se),
                        minimize: !1
                      }
                    }));
                  },
                  closeWindow: (Se) => {
                    A(
                      (oe) => oe.filter((re) => re !== Se)
                    ), P((oe) => ({
                      ...oe,
                      [Se]: {
                        ...mc(oe, Se),
                        closed: !0
                      }
                    })), T == null || T(
                      y.filter((oe) => {
                        var re;
                        return !((re = ee[oe.id]) != null && re.closed);
                      })
                    );
                  }
                },
                children: /* @__PURE__ */ zt.jsx(h, {})
              }
            )
          ]
        }
      )
    }
  );
}
Fz.Window = cl;
export {
  ZO as DefaultTaskBar,
  Uz as DefaultWindow,
  bv as TaskBar,
  cl as Window,
  Pz as WindowProvider,
  Fz as WindowSystem
};

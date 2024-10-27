import * as Y from "react";
import ke, { useMemo as gt, useRef as sn, useSyncExternalStore as Pa, useCallback as ja, useLayoutEffect as Ca, useEffect as We, useDebugValue as Aa, createContext as Ia, useContext as $a, useState as pr } from "react";
import { Button as ue, Space as vt, Card as gr, Modal as ln, Descriptions as Na, Radio as yt, message as Da, Form as I, Tooltip as vr, Row as Fa, Col as yr, Table as Ma, Input as Le, Select as un, Alert as La, Empty as ka, InputNumber as jt } from "antd";
function Wa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ht = { exports: {} }, he = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr;
function Ha() {
  if (hr) return he;
  hr = 1;
  var e = ke, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(s, u, c) {
    var p, y = {}, d = null, _ = null;
    c !== void 0 && (d = "" + c), u.key !== void 0 && (d = "" + u.key), u.ref !== void 0 && (_ = u.ref);
    for (p in u) n.call(u, p) && !o.hasOwnProperty(p) && (y[p] = u[p]);
    if (s && s.defaultProps) for (p in u = s.defaultProps, u) y[p] === void 0 && (y[p] = u[p]);
    return { $$typeof: t, type: s, key: d, ref: _, props: y, _owner: a.current };
  }
  return he.Fragment = r, he.jsx = l, he.jsxs = l, he;
}
var me = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function Ba() {
  return mr || (mr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ke, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), E = Symbol.iterator, O = "@@iterator";
    function m(i) {
      if (i === null || typeof i != "object")
        return null;
      var f = E && i[E] || i[O];
      return typeof f == "function" ? f : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(i) {
      {
        for (var f = arguments.length, v = new Array(f > 1 ? f - 1 : 0), b = 1; b < f; b++)
          v[b - 1] = arguments[b];
        P("error", i, v);
      }
    }
    function P(i, f, v) {
      {
        var b = T.ReactDebugCurrentFrame, S = b.getStackAddendum();
        S !== "" && (f += "%s", v = v.concat([S]));
        var R = v.map(function(x) {
          return String(x);
        });
        R.unshift("Warning: " + f), Function.prototype.apply.call(console[i], console, R);
      }
    }
    var D = !1, z = !1, Jn = !1, Xn = !1, Qn = !1, Ut;
    Ut = Symbol.for("react.module.reference");
    function Zn(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === n || i === o || Qn || i === a || i === c || i === p || Xn || i === _ || D || z || Jn || typeof i == "object" && i !== null && (i.$$typeof === d || i.$$typeof === y || i.$$typeof === l || i.$$typeof === s || i.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === Ut || i.getModuleId !== void 0));
    }
    function ea(i, f, v) {
      var b = i.displayName;
      if (b)
        return b;
      var S = f.displayName || f.name || "";
      return S !== "" ? v + "(" + S + ")" : v;
    }
    function Yt(i) {
      return i.displayName || "Context";
    }
    function W(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case a:
          return "StrictMode";
        case c:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case s:
            var f = i;
            return Yt(f) + ".Consumer";
          case l:
            var v = i;
            return Yt(v._context) + ".Provider";
          case u:
            return ea(i, i.render, "ForwardRef");
          case y:
            var b = i.displayName || null;
            return b !== null ? b : W(i.type) || "Memo";
          case d: {
            var S = i, R = S._payload, x = S._init;
            try {
              return W(x(R));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, ge = 0, qt, Kt, zt, Vt, Gt, Jt, Xt;
    function Qt() {
    }
    Qt.__reactDisabledLog = !0;
    function ta() {
      {
        if (ge === 0) {
          qt = console.log, Kt = console.info, zt = console.warn, Vt = console.error, Gt = console.group, Jt = console.groupCollapsed, Xt = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: Qt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        ge++;
      }
    }
    function ra() {
      {
        if (ge--, ge === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, i, {
              value: qt
            }),
            info: Z({}, i, {
              value: Kt
            }),
            warn: Z({}, i, {
              value: zt
            }),
            error: Z({}, i, {
              value: Vt
            }),
            group: Z({}, i, {
              value: Gt
            }),
            groupCollapsed: Z({}, i, {
              value: Jt
            }),
            groupEnd: Z({}, i, {
              value: Xt
            })
          });
        }
        ge < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Je = T.ReactCurrentDispatcher, Xe;
    function je(i, f, v) {
      {
        if (Xe === void 0)
          try {
            throw Error();
          } catch (S) {
            var b = S.stack.trim().match(/\n( *(at )?)/);
            Xe = b && b[1] || "";
          }
        return `
` + Xe + i;
      }
    }
    var Qe = !1, Ce;
    {
      var na = typeof WeakMap == "function" ? WeakMap : Map;
      Ce = new na();
    }
    function Zt(i, f) {
      if (!i || Qe)
        return "";
      {
        var v = Ce.get(i);
        if (v !== void 0)
          return v;
      }
      var b;
      Qe = !0;
      var S = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var R;
      R = Je.current, Je.current = null, ta();
      try {
        if (f) {
          var x = function() {
            throw Error();
          };
          if (Object.defineProperty(x.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(x, []);
            } catch (N) {
              b = N;
            }
            Reflect.construct(i, [], x);
          } else {
            try {
              x.call();
            } catch (N) {
              b = N;
            }
            i.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            b = N;
          }
          i();
        }
      } catch (N) {
        if (N && b && typeof N.stack == "string") {
          for (var w = N.stack.split(`
`), $ = b.stack.split(`
`), C = w.length - 1, A = $.length - 1; C >= 1 && A >= 0 && w[C] !== $[A]; )
            A--;
          for (; C >= 1 && A >= 0; C--, A--)
            if (w[C] !== $[A]) {
              if (C !== 1 || A !== 1)
                do
                  if (C--, A--, A < 0 || w[C] !== $[A]) {
                    var M = `
` + w[C].replace(" at new ", " at ");
                    return i.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", i.displayName)), typeof i == "function" && Ce.set(i, M), M;
                  }
                while (C >= 1 && A >= 0);
              break;
            }
        }
      } finally {
        Qe = !1, Je.current = R, ra(), Error.prepareStackTrace = S;
      }
      var le = i ? i.displayName || i.name : "", ee = le ? je(le) : "";
      return typeof i == "function" && Ce.set(i, ee), ee;
    }
    function aa(i, f, v) {
      return Zt(i, !1);
    }
    function ia(i) {
      var f = i.prototype;
      return !!(f && f.isReactComponent);
    }
    function Ae(i, f, v) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return Zt(i, ia(i));
      if (typeof i == "string")
        return je(i);
      switch (i) {
        case c:
          return je("Suspense");
        case p:
          return je("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case u:
            return aa(i.render);
          case y:
            return Ae(i.type, f, v);
          case d: {
            var b = i, S = b._payload, R = b._init;
            try {
              return Ae(R(S), f, v);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, er = {}, tr = T.ReactDebugCurrentFrame;
    function Ie(i) {
      if (i) {
        var f = i._owner, v = Ae(i.type, i._source, f ? f.type : null);
        tr.setExtraStackFrame(v);
      } else
        tr.setExtraStackFrame(null);
    }
    function oa(i, f, v, b, S) {
      {
        var R = Function.call.bind(ve);
        for (var x in i)
          if (R(i, x)) {
            var w = void 0;
            try {
              if (typeof i[x] != "function") {
                var $ = Error((b || "React class") + ": " + v + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              w = i[x](f, x, b, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              w = C;
            }
            w && !(w instanceof Error) && (Ie(S), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", v, x, typeof w), Ie(null)), w instanceof Error && !(w.message in er) && (er[w.message] = !0, Ie(S), h("Failed %s type: %s", v, w.message), Ie(null));
          }
      }
    }
    var sa = Array.isArray;
    function Ze(i) {
      return sa(i);
    }
    function la(i) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, v = f && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return v;
      }
    }
    function ua(i) {
      try {
        return rr(i), !1;
      } catch {
        return !0;
      }
    }
    function rr(i) {
      return "" + i;
    }
    function nr(i) {
      if (ua(i))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", la(i)), rr(i);
    }
    var ye = T.ReactCurrentOwner, ca = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ar, ir, et;
    et = {};
    function fa(i) {
      if (ve.call(i, "ref")) {
        var f = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function da(i) {
      if (ve.call(i, "key")) {
        var f = Object.getOwnPropertyDescriptor(i, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function pa(i, f) {
      if (typeof i.ref == "string" && ye.current && f && ye.current.stateNode !== f) {
        var v = W(ye.current.type);
        et[v] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(ye.current.type), i.ref), et[v] = !0);
      }
    }
    function ga(i, f) {
      {
        var v = function() {
          ar || (ar = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        v.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function va(i, f) {
      {
        var v = function() {
          ir || (ir = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        v.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var ya = function(i, f, v, b, S, R, x) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: f,
        ref: v,
        props: x,
        // Record the component responsible for creating this element.
        _owner: R
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function ha(i, f, v, b, S) {
      {
        var R, x = {}, w = null, $ = null;
        v !== void 0 && (nr(v), w = "" + v), da(f) && (nr(f.key), w = "" + f.key), fa(f) && ($ = f.ref, pa(f, S));
        for (R in f)
          ve.call(f, R) && !ca.hasOwnProperty(R) && (x[R] = f[R]);
        if (i && i.defaultProps) {
          var C = i.defaultProps;
          for (R in C)
            x[R] === void 0 && (x[R] = C[R]);
        }
        if (w || $) {
          var A = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          w && ga(x, A), $ && va(x, A);
        }
        return ya(i, w, $, S, b, ye.current, x);
      }
    }
    var tt = T.ReactCurrentOwner, or = T.ReactDebugCurrentFrame;
    function se(i) {
      if (i) {
        var f = i._owner, v = Ae(i.type, i._source, f ? f.type : null);
        or.setExtraStackFrame(v);
      } else
        or.setExtraStackFrame(null);
    }
    var rt;
    rt = !1;
    function nt(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function sr() {
      {
        if (tt.current) {
          var i = W(tt.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function ma(i) {
      return "";
    }
    var lr = {};
    function ba(i) {
      {
        var f = sr();
        if (!f) {
          var v = typeof i == "string" ? i : i.displayName || i.name;
          v && (f = `

Check the top-level render call using <` + v + ">.");
        }
        return f;
      }
    }
    function ur(i, f) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var v = ba(f);
        if (lr[v])
          return;
        lr[v] = !0;
        var b = "";
        i && i._owner && i._owner !== tt.current && (b = " It was passed a child from " + W(i._owner.type) + "."), se(i), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, b), se(null);
      }
    }
    function cr(i, f) {
      {
        if (typeof i != "object")
          return;
        if (Ze(i))
          for (var v = 0; v < i.length; v++) {
            var b = i[v];
            nt(b) && ur(b, f);
          }
        else if (nt(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var S = m(i);
          if (typeof S == "function" && S !== i.entries)
            for (var R = S.call(i), x; !(x = R.next()).done; )
              nt(x.value) && ur(x.value, f);
        }
      }
    }
    function _a(i) {
      {
        var f = i.type;
        if (f == null || typeof f == "string")
          return;
        var v;
        if (typeof f == "function")
          v = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === y))
          v = f.propTypes;
        else
          return;
        if (v) {
          var b = W(f);
          oa(v, i.props, "prop", b, i);
        } else if (f.PropTypes !== void 0 && !rt) {
          rt = !0;
          var S = W(f);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", S || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ta(i) {
      {
        for (var f = Object.keys(i.props), v = 0; v < f.length; v++) {
          var b = f[v];
          if (b !== "children" && b !== "key") {
            se(i), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), se(null);
            break;
          }
        }
        i.ref !== null && (se(i), h("Invalid attribute `ref` supplied to `React.Fragment`."), se(null));
      }
    }
    var fr = {};
    function dr(i, f, v, b, S, R) {
      {
        var x = Zn(i);
        if (!x) {
          var w = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $ = ma();
          $ ? w += $ : w += sr();
          var C;
          i === null ? C = "null" : Ze(i) ? C = "array" : i !== void 0 && i.$$typeof === t ? (C = "<" + (W(i.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : C = typeof i, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, w);
        }
        var A = ha(i, f, v, S, R);
        if (A == null)
          return A;
        if (x) {
          var M = f.children;
          if (M !== void 0)
            if (b)
              if (Ze(M)) {
                for (var le = 0; le < M.length; le++)
                  cr(M[le], i);
                Object.freeze && Object.freeze(M);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              cr(M, i);
        }
        if (ve.call(f, "key")) {
          var ee = W(i), N = Object.keys(f).filter(function(Ra) {
            return Ra !== "key";
          }), at = N.length > 0 ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!fr[ee + at]) {
            var Oa = N.length > 0 ? "{" + N.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, at, ee, Oa, ee), fr[ee + at] = !0;
          }
        }
        return i === n ? Ta(A) : _a(A), A;
      }
    }
    function wa(i, f, v) {
      return dr(i, f, v, !0);
    }
    function Ea(i, f, v) {
      return dr(i, f, v, !1);
    }
    var xa = Ea, Sa = wa;
    me.Fragment = n, me.jsx = xa, me.jsxs = Sa;
  }()), me;
}
process.env.NODE_ENV === "production" ? ht.exports = Ha() : ht.exports = Ba();
var g = ht.exports;
const Ua = [
  {
    label: "数值",
    value: "number"
  },
  {
    label: "字符串",
    value: "string"
  },
  {
    label: "对象",
    value: "object"
  },
  {
    label: "整数",
    value: "integer"
  },
  {
    label: "布尔值",
    value: "boolean"
  },
  {
    label: "数组",
    value: "array"
  }
], cn = {
  string: [
    {
      validateName: "minLength",
      validateType: "integer",
      validateLabel: "指定字符串的最大长度"
    },
    {
      validateName: "maxLength",
      validateType: "integer",
      validateLabel: "指定字符串的最小长度"
    },
    {
      validateName: "pattern",
      validateType: "string",
      validateLabel: "使用正则表达式验证字符串"
    },
    {
      validateName: "format",
      validateType: "string",
      validateLabel: "指定字符串的格式（如日期、电子邮件等）"
    }
  ],
  number: [
    {
      validateName: "multipleOf",
      validateType: "number",
      validateLabel: "指定数字必须是某个值的倍数"
    },
    {
      validateName: "maximum",
      validateType: "number",
      validateLabel: "指定数字的最大值"
    },
    {
      validateName: "exclusiveMaximum",
      validateType: "number",
      validateLabel: "指定数字的最大值（不包括该值）"
    },
    {
      validateName: "minimum",
      validateType: "number",
      validateLabel: "指定数字的最小值"
    },
    {
      validateName: "exclusiveMinimum",
      validateType: "number",
      validateLabel: "指定数字的最小值（不包括该值）"
    }
  ],
  integer: [
    {
      validateName: "multipleOf",
      validateType: "integer",
      validateLabel: "指定整数必须是某个值的倍数"
    },
    {
      validateName: "maximum",
      validateType: "integer",
      validateLabel: "指定整数的最大值"
    },
    {
      validateName: "exclusiveMaximum",
      validateType: "integer",
      validateLabel: "指定整数的最大值（不包括该值）"
    },
    {
      validateName: "minimum",
      validateType: "integer",
      validateLabel: "指定整数的最小值"
    },
    {
      validateName: "exclusiveMinimum",
      validateType: "integer",
      validateLabel: "指定整数的最小值（不包括该值）"
    }
  ],
  array: [
    {
      validateName: "maxItems",
      validateType: "integer",
      validateLabel: "指定数组的最大长度"
    },
    {
      validateName: "minItems",
      validateType: "integer",
      validateLabel: "指定数组的最小长度"
    },
    {
      validateName: "uniqueItems",
      validateType: "boolean",
      validateLabel: "指定数组中的元素是否必须唯一"
    }
  ],
  object: [
    {
      validateName: "maxProperties",
      validateType: "integer",
      validateLabel: "指定对象的最大属性数量"
    },
    {
      validateName: "minProperties",
      validateType: "integer",
      validateLabel: "指定对象的最小属性数量"
    }
  ],
  boolean: []
}, Ya = ["规则名", "规则值", "规则说明"];
var fn = typeof global == "object" && global && global.Object === Object && global, qa = typeof self == "object" && self && self.Object === Object && self, q = fn || qa || Function("return this")(), ce = q.Symbol, dn = Object.prototype, Ka = dn.hasOwnProperty, za = dn.toString, be = ce ? ce.toStringTag : void 0;
function Va(e) {
  var t = Ka.call(e, be), r = e[be];
  try {
    e[be] = void 0;
    var n = !0;
  } catch {
  }
  var a = za.call(e);
  return n && (t ? e[be] = r : delete e[be]), a;
}
var Ga = Object.prototype, Ja = Ga.toString;
function Xa(e) {
  return Ja.call(e);
}
var Qa = "[object Null]", Za = "[object Undefined]", br = ce ? ce.toStringTag : void 0;
function Q(e) {
  return e == null ? e === void 0 ? Za : Qa : br && br in Object(e) ? Va(e) : Xa(e);
}
function X(e) {
  return e != null && typeof e == "object";
}
var fe = Array.isArray;
function pn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ei = "[object AsyncFunction]", ti = "[object Function]", ri = "[object GeneratorFunction]", ni = "[object Proxy]";
function gn(e) {
  if (!pn(e))
    return !1;
  var t = Q(e);
  return t == ti || t == ri || t == ei || t == ni;
}
var it = q["__core-js_shared__"], _r = function() {
  var e = /[^.]+$/.exec(it && it.keys && it.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ai(e) {
  return !!_r && _r in e;
}
var ii = Function.prototype, oi = ii.toString;
function ie(e) {
  if (e != null) {
    try {
      return oi.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var si = /[\\^$.*+?()[\]{}|]/g, li = /^\[object .+?Constructor\]$/, ui = Function.prototype, ci = Object.prototype, fi = ui.toString, di = ci.hasOwnProperty, pi = RegExp(
  "^" + fi.call(di).replace(si, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function gi(e) {
  if (!pn(e) || ai(e))
    return !1;
  var t = gn(e) ? pi : li;
  return t.test(ie(e));
}
function vi(e, t) {
  return e == null ? void 0 : e[t];
}
function de(e, t) {
  var r = vi(e, t);
  return gi(r) ? r : void 0;
}
var mt = de(q, "WeakMap"), yi = 9007199254740991, hi = /^(?:0|[1-9]\d*)$/;
function mi(e, t) {
  var r = typeof e;
  return t = t ?? yi, !!t && (r == "number" || r != "symbol" && hi.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function vn(e, t) {
  return e === t || e !== e && t !== t;
}
var bi = 9007199254740991;
function yn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= bi;
}
function hn(e) {
  return e != null && yn(e.length) && !gn(e);
}
var _i = Object.prototype;
function mn(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || _i;
  return e === r;
}
function Ti(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var wi = "[object Arguments]";
function Tr(e) {
  return X(e) && Q(e) == wi;
}
var bn = Object.prototype, Ei = bn.hasOwnProperty, xi = bn.propertyIsEnumerable, _n = Tr(/* @__PURE__ */ function() {
  return arguments;
}()) ? Tr : function(e) {
  return X(e) && Ei.call(e, "callee") && !xi.call(e, "callee");
};
function Si() {
  return !1;
}
var Tn = typeof exports == "object" && exports && !exports.nodeType && exports, wr = Tn && typeof module == "object" && module && !module.nodeType && module, Oi = wr && wr.exports === Tn, Er = Oi ? q.Buffer : void 0, Ri = Er ? Er.isBuffer : void 0, He = Ri || Si, Pi = "[object Arguments]", ji = "[object Array]", Ci = "[object Boolean]", Ai = "[object Date]", Ii = "[object Error]", $i = "[object Function]", Ni = "[object Map]", Di = "[object Number]", Fi = "[object Object]", Mi = "[object RegExp]", Li = "[object Set]", ki = "[object String]", Wi = "[object WeakMap]", Hi = "[object ArrayBuffer]", Bi = "[object DataView]", Ui = "[object Float32Array]", Yi = "[object Float64Array]", qi = "[object Int8Array]", Ki = "[object Int16Array]", zi = "[object Int32Array]", Vi = "[object Uint8Array]", Gi = "[object Uint8ClampedArray]", Ji = "[object Uint16Array]", Xi = "[object Uint32Array]", j = {};
j[Ui] = j[Yi] = j[qi] = j[Ki] = j[zi] = j[Vi] = j[Gi] = j[Ji] = j[Xi] = !0;
j[Pi] = j[ji] = j[Hi] = j[Ci] = j[Bi] = j[Ai] = j[Ii] = j[$i] = j[Ni] = j[Di] = j[Fi] = j[Mi] = j[Li] = j[ki] = j[Wi] = !1;
function Qi(e) {
  return X(e) && yn(e.length) && !!j[Q(e)];
}
function Zi(e) {
  return function(t) {
    return e(t);
  };
}
var wn = typeof exports == "object" && exports && !exports.nodeType && exports, we = wn && typeof module == "object" && module && !module.nodeType && module, eo = we && we.exports === wn, ot = eo && fn.process, xr = function() {
  try {
    var e = we && we.require && we.require("util").types;
    return e || ot && ot.binding && ot.binding("util");
  } catch {
  }
}(), Sr = xr && xr.isTypedArray, Ct = Sr ? Zi(Sr) : Qi, to = Object.prototype, ro = to.hasOwnProperty;
function no(e, t) {
  var r = fe(e), n = !r && _n(e), a = !r && !n && He(e), o = !r && !n && !a && Ct(e), l = r || n || a || o, s = l ? Ti(e.length, String) : [], u = s.length;
  for (var c in e)
    ro.call(e, c) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    mi(c, u))) && s.push(c);
  return s;
}
function ao(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var io = ao(Object.keys, Object), oo = Object.prototype, so = oo.hasOwnProperty;
function En(e) {
  if (!mn(e))
    return io(e);
  var t = [];
  for (var r in Object(e))
    so.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function lo(e) {
  return hn(e) ? no(e) : En(e);
}
var Se = de(Object, "create");
function uo() {
  this.__data__ = Se ? Se(null) : {}, this.size = 0;
}
function co(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var fo = "__lodash_hash_undefined__", po = Object.prototype, go = po.hasOwnProperty;
function vo(e) {
  var t = this.__data__;
  if (Se) {
    var r = t[e];
    return r === fo ? void 0 : r;
  }
  return go.call(t, e) ? t[e] : void 0;
}
var yo = Object.prototype, ho = yo.hasOwnProperty;
function mo(e) {
  var t = this.__data__;
  return Se ? t[e] !== void 0 : ho.call(t, e);
}
var bo = "__lodash_hash_undefined__";
function _o(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Se && t === void 0 ? bo : t, this;
}
function te(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
te.prototype.clear = uo;
te.prototype.delete = co;
te.prototype.get = vo;
te.prototype.has = mo;
te.prototype.set = _o;
function To() {
  this.__data__ = [], this.size = 0;
}
function Ke(e, t) {
  for (var r = e.length; r--; )
    if (vn(e[r][0], t))
      return r;
  return -1;
}
var wo = Array.prototype, Eo = wo.splice;
function xo(e) {
  var t = this.__data__, r = Ke(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Eo.call(t, r, 1), --this.size, !0;
}
function So(e) {
  var t = this.__data__, r = Ke(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Oo(e) {
  return Ke(this.__data__, e) > -1;
}
function Ro(e, t) {
  var r = this.__data__, n = Ke(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function K(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
K.prototype.clear = To;
K.prototype.delete = xo;
K.prototype.get = So;
K.prototype.has = Oo;
K.prototype.set = Ro;
var Oe = de(q, "Map");
function Po() {
  this.size = 0, this.__data__ = {
    hash: new te(),
    map: new (Oe || K)(),
    string: new te()
  };
}
function jo(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ze(e, t) {
  var r = e.__data__;
  return jo(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Co(e) {
  var t = ze(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ao(e) {
  return ze(this, e).get(e);
}
function Io(e) {
  return ze(this, e).has(e);
}
function $o(e, t) {
  var r = ze(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function oe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
oe.prototype.clear = Po;
oe.prototype.delete = Co;
oe.prototype.get = Ao;
oe.prototype.has = Io;
oe.prototype.set = $o;
function No(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
function Do() {
  this.__data__ = new K(), this.size = 0;
}
function Fo(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Mo(e) {
  return this.__data__.get(e);
}
function Lo(e) {
  return this.__data__.has(e);
}
var ko = 200;
function Wo(e, t) {
  var r = this.__data__;
  if (r instanceof K) {
    var n = r.__data__;
    if (!Oe || n.length < ko - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new oe(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function J(e) {
  var t = this.__data__ = new K(e);
  this.size = t.size;
}
J.prototype.clear = Do;
J.prototype.delete = Fo;
J.prototype.get = Mo;
J.prototype.has = Lo;
J.prototype.set = Wo;
function Ho(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, o = []; ++r < n; ) {
    var l = e[r];
    t(l, r, e) && (o[a++] = l);
  }
  return o;
}
function Bo() {
  return [];
}
var Uo = Object.prototype, Yo = Uo.propertyIsEnumerable, Or = Object.getOwnPropertySymbols, qo = Or ? function(e) {
  return e == null ? [] : (e = Object(e), Ho(Or(e), function(t) {
    return Yo.call(e, t);
  }));
} : Bo;
function Ko(e, t, r) {
  var n = t(e);
  return fe(e) ? n : No(n, r(e));
}
function Rr(e) {
  return Ko(e, lo, qo);
}
var bt = de(q, "DataView"), _t = de(q, "Promise"), Tt = de(q, "Set"), Pr = "[object Map]", zo = "[object Object]", jr = "[object Promise]", Cr = "[object Set]", Ar = "[object WeakMap]", Ir = "[object DataView]", Vo = ie(bt), Go = ie(Oe), Jo = ie(_t), Xo = ie(Tt), Qo = ie(mt), U = Q;
(bt && U(new bt(new ArrayBuffer(1))) != Ir || Oe && U(new Oe()) != Pr || _t && U(_t.resolve()) != jr || Tt && U(new Tt()) != Cr || mt && U(new mt()) != Ar) && (U = function(e) {
  var t = Q(e), r = t == zo ? e.constructor : void 0, n = r ? ie(r) : "";
  if (n)
    switch (n) {
      case Vo:
        return Ir;
      case Go:
        return Pr;
      case Jo:
        return jr;
      case Xo:
        return Cr;
      case Qo:
        return Ar;
    }
  return t;
});
var $r = q.Uint8Array, Zo = "__lodash_hash_undefined__";
function es(e) {
  return this.__data__.set(e, Zo), this;
}
function ts(e) {
  return this.__data__.has(e);
}
function Be(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new oe(); ++t < r; )
    this.add(e[t]);
}
Be.prototype.add = Be.prototype.push = es;
Be.prototype.has = ts;
function rs(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function ns(e, t) {
  return e.has(t);
}
var as = 1, is = 2;
function xn(e, t, r, n, a, o) {
  var l = r & as, s = e.length, u = t.length;
  if (s != u && !(l && u > s))
    return !1;
  var c = o.get(e), p = o.get(t);
  if (c && p)
    return c == t && p == e;
  var y = -1, d = !0, _ = r & is ? new Be() : void 0;
  for (o.set(e, t), o.set(t, e); ++y < s; ) {
    var E = e[y], O = t[y];
    if (n)
      var m = l ? n(O, E, y, t, e, o) : n(E, O, y, e, t, o);
    if (m !== void 0) {
      if (m)
        continue;
      d = !1;
      break;
    }
    if (_) {
      if (!rs(t, function(T, h) {
        if (!ns(_, h) && (E === T || a(E, T, r, n, o)))
          return _.push(h);
      })) {
        d = !1;
        break;
      }
    } else if (!(E === O || a(E, O, r, n, o))) {
      d = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), d;
}
function os(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
function ss(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var ls = 1, us = 2, cs = "[object Boolean]", fs = "[object Date]", ds = "[object Error]", ps = "[object Map]", gs = "[object Number]", vs = "[object RegExp]", ys = "[object Set]", hs = "[object String]", ms = "[object Symbol]", bs = "[object ArrayBuffer]", _s = "[object DataView]", Nr = ce ? ce.prototype : void 0, st = Nr ? Nr.valueOf : void 0;
function Ts(e, t, r, n, a, o, l) {
  switch (r) {
    case _s:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case bs:
      return !(e.byteLength != t.byteLength || !o(new $r(e), new $r(t)));
    case cs:
    case fs:
    case gs:
      return vn(+e, +t);
    case ds:
      return e.name == t.name && e.message == t.message;
    case vs:
    case hs:
      return e == t + "";
    case ps:
      var s = os;
    case ys:
      var u = n & ls;
      if (s || (s = ss), e.size != t.size && !u)
        return !1;
      var c = l.get(e);
      if (c)
        return c == t;
      n |= us, l.set(e, t);
      var p = xn(s(e), s(t), n, a, o, l);
      return l.delete(e), p;
    case ms:
      if (st)
        return st.call(e) == st.call(t);
  }
  return !1;
}
var ws = 1, Es = Object.prototype, xs = Es.hasOwnProperty;
function Ss(e, t, r, n, a, o) {
  var l = r & ws, s = Rr(e), u = s.length, c = Rr(t), p = c.length;
  if (u != p && !l)
    return !1;
  for (var y = u; y--; ) {
    var d = s[y];
    if (!(l ? d in t : xs.call(t, d)))
      return !1;
  }
  var _ = o.get(e), E = o.get(t);
  if (_ && E)
    return _ == t && E == e;
  var O = !0;
  o.set(e, t), o.set(t, e);
  for (var m = l; ++y < u; ) {
    d = s[y];
    var T = e[d], h = t[d];
    if (n)
      var P = l ? n(h, T, d, t, e, o) : n(T, h, d, e, t, o);
    if (!(P === void 0 ? T === h || a(T, h, r, n, o) : P)) {
      O = !1;
      break;
    }
    m || (m = d == "constructor");
  }
  if (O && !m) {
    var D = e.constructor, z = t.constructor;
    D != z && "constructor" in e && "constructor" in t && !(typeof D == "function" && D instanceof D && typeof z == "function" && z instanceof z) && (O = !1);
  }
  return o.delete(e), o.delete(t), O;
}
var Os = 1, Dr = "[object Arguments]", Fr = "[object Array]", $e = "[object Object]", Rs = Object.prototype, Mr = Rs.hasOwnProperty;
function Ps(e, t, r, n, a, o) {
  var l = fe(e), s = fe(t), u = l ? Fr : U(e), c = s ? Fr : U(t);
  u = u == Dr ? $e : u, c = c == Dr ? $e : c;
  var p = u == $e, y = c == $e, d = u == c;
  if (d && He(e)) {
    if (!He(t))
      return !1;
    l = !0, p = !1;
  }
  if (d && !p)
    return o || (o = new J()), l || Ct(e) ? xn(e, t, r, n, a, o) : Ts(e, t, u, r, n, a, o);
  if (!(r & Os)) {
    var _ = p && Mr.call(e, "__wrapped__"), E = y && Mr.call(t, "__wrapped__");
    if (_ || E) {
      var O = _ ? e.value() : e, m = E ? t.value() : t;
      return o || (o = new J()), a(O, m, r, n, o);
    }
  }
  return d ? (o || (o = new J()), Ss(e, t, r, n, a, o)) : !1;
}
function Sn(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !X(e) && !X(t) ? e !== e && t !== t : Ps(e, t, r, n, Sn, a);
}
var js = "[object String]";
function Cs(e) {
  return typeof e == "string" || !fe(e) && X(e) && Q(e) == js;
}
var As = "[object Boolean]";
function At(e) {
  return e === !0 || e === !1 || X(e) && Q(e) == As;
}
var Is = "[object Map]", $s = "[object Set]", Ns = Object.prototype, Ds = Ns.hasOwnProperty;
function Lr(e) {
  if (e == null)
    return !0;
  if (hn(e) && (fe(e) || typeof e == "string" || typeof e.splice == "function" || He(e) || Ct(e) || _n(e)))
    return !e.length;
  var t = U(e);
  if (t == Is || t == $s)
    return !e.size;
  if (mn(e))
    return !En(e).length;
  for (var r in e)
    if (Ds.call(e, r))
      return !1;
  return !0;
}
function Fs(e, t) {
  return Sn(e, t);
}
var Ms = "[object Number]";
function kr(e) {
  return typeof e == "number" || X(e) && Q(e) == Ms;
}
const Ls = ({ removeRow: e, editRow: t, isRoot: r }) => {
  const n = [
    {
      title: "参数名称",
      dataIndex: "title",
      render(a) {
        return a || "-";
      }
    },
    {
      title: "参数类型",
      dataIndex: "type",
      render(a) {
        return a || "-";
      }
    },
    {
      title: "参数描述",
      dataIndex: "description",
      render(a) {
        return a || "-";
      }
    },
    {
      title: "是否必填",
      dataIndex: "is_required",
      render(a) {
        return At(a) ? a ? "是" : "否" : "-";
      }
    },
    {
      title: "枚举值",
      dataIndex: "enum",
      render(a) {
        return Array.isArray(a) && a.length > 0 ? a == null ? void 0 : a.join(",") : a || "-";
      }
    },
    {
      title: "规则",
      dataIndex: "rule",
      width: 200,
      render(a, o) {
        const l = () => {
          const s = o == null ? void 0 : o.type, c = (cn[s] || []).map((p) => ({
            label: `参数类型:${o.type}`,
            children: /* @__PURE__ */ g.jsx(gr, { hoverable: !0, title: "详细规则", children: /* @__PURE__ */ g.jsx(vt, { children: Ya.map((y, d) => /* @__PURE__ */ g.jsxs(gr, { title: y, children: [
              d === 0 && p.validateName,
              d === 1 && a[p.validateName],
              d === 2 && p.validateLabel
            ] }, `${y}-${d}`)) }) })
          }));
          ln.confirm({
            title: "规则详情",
            content: /* @__PURE__ */ g.jsx(
              Na,
              {
                column: 1,
                items: c,
                style: { marginBottom: 20 },
                labelStyle: { paddingRight: 36 }
              }
            ),
            style: {
              minWidth: 700
            },
            icon: null
          });
        };
        return /* @__PURE__ */ g.jsx(ue, { onClick: l, type: "primary", children: "查看规则详情" });
      }
    },
    {
      title: "操作",
      dataIndex: "op",
      fixed: "right",
      width: 200,
      render: (a, o) => /* @__PURE__ */ g.jsxs(vt, { children: [
        /* @__PURE__ */ g.jsx(ue, { onClick: () => t == null ? void 0 : t(o), type: "primary", children: "编辑" }),
        /* @__PURE__ */ g.jsx(ue, { onClick: () => e == null ? void 0 : e(o.key), type: "primary", danger: !0, children: "删除" })
      ] })
    }
  ];
  return r ? n.filter((a) => a.dataIndex !== "is_required") : n;
}, ks = Symbol(), It = Symbol(), Te = "a", On = "f", Wr = "p", Rn = "c", Pn = "t", lt = "n", ut = "g", $t = "h", Ee = "w", Nt = "o", Dt = "k";
let Ws = (e, t) => new Proxy(e, t);
const wt = Object.getPrototypeOf, Et = /* @__PURE__ */ new WeakMap(), jn = (e) => e && (Et.has(e) ? Et.get(e) : wt(e) === Object.prototype || wt(e) === Array.prototype), Ue = (e) => typeof e == "object" && e !== null, Hs = (e) => Object.values(Object.getOwnPropertyDescriptors(e)).some((t) => !t.configurable && !t.writable), Bs = (e) => {
  if (Array.isArray(e))
    return Array.from(e);
  const t = Object.getOwnPropertyDescriptors(e);
  return Object.values(t).forEach((r) => {
    r.configurable = !0;
  }), Object.create(wt(e), t);
}, Us = (e, t) => {
  const r = {
    [On]: t
  };
  let n = !1;
  const a = (s, u) => {
    if (!n) {
      let c = r[Te].get(e);
      if (c || (c = {}, r[Te].set(e, c)), s === Ee)
        c[Ee] = !0;
      else {
        let p = c[s];
        p || (p = /* @__PURE__ */ new Set(), c[s] = p), p.add(u);
      }
    }
  }, o = () => {
    n = !0, r[Te].delete(e);
  }, l = {
    get(s, u) {
      return u === It ? e : (a(Dt, u), Cn(Reflect.get(s, u), r[Te], r[Rn], r[Pn]));
    },
    has(s, u) {
      return u === ks ? (o(), !0) : (a($t, u), Reflect.has(s, u));
    },
    getOwnPropertyDescriptor(s, u) {
      return a(Nt, u), Reflect.getOwnPropertyDescriptor(s, u);
    },
    ownKeys(s) {
      return a(Ee), Reflect.ownKeys(s);
    }
  };
  return t && (l.set = l.deleteProperty = () => !1), [l, r];
}, Ft = (e) => (
  // unwrap proxy
  e[It] || // otherwise
  e
), Cn = (e, t, r, n) => {
  if (!jn(e))
    return e;
  let a = n && n.get(e);
  if (!a) {
    const u = Ft(e);
    Hs(u) ? a = [u, Bs(u)] : a = [u], n == null || n.set(e, a);
  }
  const [o, l] = a;
  let s = r && r.get(o);
  return (!s || s[1][On] !== !!l) && (s = Us(o, !!l), s[1][Wr] = Ws(l || o, s[0]), r && r.set(o, s)), s[1][Te] = t, s[1][Rn] = r, s[1][Pn] = n, s[1][Wr];
}, Ys = (e, t) => {
  const r = Reflect.ownKeys(e), n = Reflect.ownKeys(t);
  return r.length !== n.length || r.some((a, o) => a !== n[o]);
}, An = (e, t, r, n, a = Object.is) => {
  if (a(e, t))
    return !1;
  if (!Ue(e) || !Ue(t))
    return !0;
  const o = r.get(Ft(e));
  if (!o)
    return !0;
  if (n) {
    const s = n.get(e);
    if (s && s[lt] === t)
      return s[ut];
    n.set(e, {
      [lt]: t,
      [ut]: !1
    });
  }
  let l = null;
  try {
    for (const s of o[$t] || [])
      if (l = Reflect.has(e, s) !== Reflect.has(t, s), l)
        return l;
    if (o[Ee] === !0) {
      if (l = Ys(e, t), l)
        return l;
    } else
      for (const s of o[Nt] || []) {
        const u = !!Reflect.getOwnPropertyDescriptor(e, s), c = !!Reflect.getOwnPropertyDescriptor(t, s);
        if (l = u !== c, l)
          return l;
      }
    for (const s of o[Dt] || [])
      if (l = An(e[s], t[s], r, n, a), l)
        return l;
    return l === null && (l = !0), l;
  } finally {
    n && n.set(e, {
      [lt]: t,
      [ut]: l
    });
  }
}, qs = (e) => jn(e) && e[It] || null, Hr = (e, t = !0) => {
  Et.set(e, t);
}, Ks = (e, t, r) => {
  const n = [], a = /* @__PURE__ */ new WeakSet(), o = (l, s) => {
    var u, c, p;
    if (a.has(l))
      return;
    Ue(l) && a.add(l);
    const y = Ue(l) && t.get(Ft(l));
    if (y) {
      if ((u = y[$t]) === null || u === void 0 || u.forEach((d) => {
        const _ = `:has(${String(d)})`;
        n.push(s ? [...s, _] : [_]);
      }), y[Ee] === !0) {
        const d = ":ownKeys";
        n.push(s ? [...s, d] : [d]);
      } else
        (c = y[Nt]) === null || c === void 0 || c.forEach((d) => {
          const _ = `:hasOwn(${String(d)})`;
          n.push(s ? [...s, _] : [_]);
        });
      (p = y[Dt]) === null || p === void 0 || p.forEach((d) => {
        "value" in (Object.getOwnPropertyDescriptor(l, d) || {}) && o(l[d], s ? [...s, d] : [d]);
      });
    } else s && n.push(s);
  };
  return o(e), n;
}, Ye = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, Mt = (e) => typeof e == "object" && e !== null, zs = (e) => Mt(e) && !Lt.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer) && !(e instanceof Promise), In = (e, t) => {
  const r = Br.get(e);
  if ((r == null ? void 0 : r[0]) === t)
    return r[1];
  const n = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
  return Hr(n, !0), Br.set(e, [t, n]), Reflect.ownKeys(e).forEach((a) => {
    if (Object.getOwnPropertyDescriptor(n, a))
      return;
    const o = Reflect.get(e, a), { enumerable: l } = Reflect.getOwnPropertyDescriptor(
      e,
      a
    ), s = {
      value: o,
      enumerable: l,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (Lt.has(o))
      Hr(o, !1);
    else if (re.has(o)) {
      const [u] = re.get(o);
      s.value = In(u, t);
    }
    Object.defineProperty(n, a, s);
  }), Object.preventExtensions(n);
}, Vs = (e, t, r, n) => ({
  deleteProperty(a, o) {
    const l = Reflect.get(a, o);
    r(o);
    const s = Reflect.deleteProperty(a, o);
    return s && n(["delete", [o], l]), s;
  },
  set(a, o, l, s) {
    const u = !e() && Reflect.has(a, o), c = Reflect.get(a, o, s);
    if (u && (Ur(c, l) || qe.has(l) && Ur(c, qe.get(l))))
      return !0;
    r(o), Mt(l) && (l = qs(l) || l);
    const p = !re.has(l) && Js(l) ? $n(l) : l;
    return t(o, p), Reflect.set(a, o, p, s), n(["set", [o], l, c]), !0;
  }
}), re = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakSet(), Br = /* @__PURE__ */ new WeakMap(), Ne = [1, 1], qe = /* @__PURE__ */ new WeakMap();
let Ur = Object.is, Gs = (e, t) => new Proxy(e, t), Js = zs, Xs = In, Qs = Vs;
function $n(e = {}) {
  if (!Mt(e))
    throw new Error("object required");
  const t = qe.get(e);
  if (t)
    return t;
  let r = Ne[0];
  const n = /* @__PURE__ */ new Set(), a = (m, T = ++Ne[0]) => {
    r !== T && (r = T, n.forEach((h) => h(m, T)));
  };
  let o = Ne[1];
  const l = (m = ++Ne[1]) => (o !== m && !n.size && (o = m, u.forEach(([T]) => {
    const h = T[1](m);
    h > r && (r = h);
  })), r), s = (m) => (T, h) => {
    const P = [...T];
    P[1] = [m, ...P[1]], a(P, h);
  }, u = /* @__PURE__ */ new Map(), c = (m, T) => {
    const h = !Lt.has(T) && re.get(T);
    if (h) {
      if ((Ye ? "production" : void 0) !== "production" && u.has(m))
        throw new Error("prop listener already exists");
      if (n.size) {
        const P = h[2](s(m));
        u.set(m, [h, P]);
      } else
        u.set(m, [h]);
    }
  }, p = (m) => {
    var T;
    const h = u.get(m);
    h && (u.delete(m), (T = h[1]) == null || T.call(h));
  }, y = (m) => (n.add(m), n.size === 1 && u.forEach(([h, P], D) => {
    if ((Ye ? "production" : void 0) !== "production" && P)
      throw new Error("remove already exists");
    const z = h[2](s(D));
    u.set(D, [h, z]);
  }), () => {
    n.delete(m), n.size === 0 && u.forEach(([h, P], D) => {
      P && (P(), u.set(D, [h]));
    });
  });
  let d = !0;
  const _ = Qs(
    () => d,
    c,
    p,
    a
  ), E = Gs(e, _);
  qe.set(e, E);
  const O = [e, l, y];
  return re.set(E, O), Reflect.ownKeys(e).forEach((m) => {
    const T = Object.getOwnPropertyDescriptor(
      e,
      m
    );
    "value" in T && T.writable && (E[m] = e[m]);
  }), d = !1, E;
}
function Zs(e, t, r) {
  const n = re.get(e);
  (Ye ? "production" : void 0) !== "production" && !n && console.warn("Please use proxy object");
  let a;
  const o = [], l = n[2];
  let s = !1;
  const c = l((p) => {
    o.push(p), a || (a = Promise.resolve().then(() => {
      a = void 0, s && t(o.splice(0));
    }));
  });
  return s = !0, () => {
    s = !1, c();
  };
}
function Yr(e) {
  const t = re.get(e);
  (Ye ? "production" : void 0) !== "production" && !t && console.warn("Please use proxy object");
  const [r, n] = t;
  return Xs(r, n());
}
const el = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, tl = (e, t) => {
  const r = sn();
  We(() => {
    r.current = Ks(e, t);
  }), Aa(r.current);
}, rl = tl, nl = /* @__PURE__ */ new WeakMap();
function Nn(e, t) {
  const n = gt(
    () => e && /* @__PURE__ */ new WeakMap(),
    [e]
  ), a = sn();
  let o = !0;
  const l = Pa(
    ja(
      (u) => {
        const c = Zs(e, u);
        return u(), c;
      },
      [e, void 0]
    ),
    () => {
      const u = Yr(e);
      try {
        if (!o && a.current && !An(
          a.current,
          u,
          n,
          /* @__PURE__ */ new WeakMap()
        ))
          return a.current;
      } catch {
      }
      return u;
    },
    () => Yr(e)
  );
  o = !1, Ca(() => {
    a.current = l;
  }), (el ? "production" : void 0) !== "production" && rl(l, n);
  const s = gt(() => /* @__PURE__ */ new WeakMap(), []);
  return Cn(l, n, s, nl);
}
const { Group: al } = yt, Ve = ({ trueText: e = "是", falseText: t = "否", ...r }) => /* @__PURE__ */ g.jsxs(al, { ...r, children: [
  /* @__PURE__ */ g.jsx(yt.Button, { value: !0, children: e }),
  /* @__PURE__ */ g.jsx(yt.Button, { value: !1, children: t })
] });
Ve.displayName = "ParentRadioGroup";
const V = $n({
  schemaData: []
}), ne = (e) => e === "object" ? "properties" : e === "array" ? "items" : "", il = (e, t) => {
  const r = (n) => {
    if (!e)
      return n.push(t), !0;
    for (const a of n) {
      const o = ne(a == null ? void 0 : a.type);
      if ((a == null ? void 0 : a.key) === e) {
        if (["object", "array"].includes(a == null ? void 0 : a.type) && o) {
          if ((a == null ? void 0 : a.type) === "array" && n.length > 0)
            return Da.error("数组当前仅支持单一类型的嵌套,无法继续添加,如想继续增加，可修改嵌套子类型为对象!"), !0;
          a[o].push(t);
        }
        return !0;
      }
      if (o && a[o] && r(a[o]))
        return !0;
    }
    return !1;
  };
  r(V.schemaData);
}, ol = (e, t) => {
  const r = (n) => {
    for (const a of n) {
      const o = ne(a == null ? void 0 : a.type);
      if (a.key === e)
        return Object.keys(t).forEach((l) => {
          a[l] = t[l];
        }), !0;
      if (o && Array.isArray(a[o]) && r(a[o]))
        return !0;
    }
    return !1;
  };
  r(V.schemaData);
}, sl = (e) => {
  const t = (r) => {
    var n;
    for (let a = 0; a < r.length; a++) {
      const o = ne((n = r[a]) == null ? void 0 : n.type);
      if (r[a].key === e)
        return r.splice(a, 1), !0;
      if (o && Array.isArray(r[a][o]) && t(r[a][o]))
        return !0;
    }
    return !1;
  };
  t(V.schemaData);
}, ll = (e) => {
  const t = (n) => {
    const a = {}, o = [];
    return n.forEach((l) => {
      var T;
      const { title: s, properties: u = [], items: c, ...p } = l, { is_required: y, rule: d, type: _, description: E, enum: O } = p || {}, m = {};
      if (_ && (m.type = _), E && (m.description = E), (Array.isArray(O) && O.length > 0 || At(O)) && (m.enum = O), _ === "object" && u) {
        const { result: h, requiredFields: P } = t(u);
        m.properties = h, y && (m.required = P);
      }
      if ((p == null ? void 0 : p.type) === "array" && c.length > 0) {
        const { result: h } = t(c), P = h[(T = c[0]) == null ? void 0 : T.title];
        m.items = P;
      }
      Lr(d) || Object.keys(d).forEach((h) => {
        d[h] && (m[h] = d[h]);
      }), y && o.push(s), s && (a[s] = m);
    }), { result: a, requiredFields: o };
  }, r = {};
  return e.forEach((n) => {
    const { properties: a = [], items: o = [], rule: l, ...s } = n, u = ne(s == null ? void 0 : s.type);
    if (Object.keys(s).forEach((c) => {
      s[c] && !["is_required", "key"].includes(c) && (r[c] = s[c]);
    }), Lr(l) || Object.keys(l).forEach((c) => {
      l[c] && (r[c] = l[c]);
    }), u && (a.length || o.length)) {
      const { result: c, requiredFields: p } = t(n[u]);
      r[u] = c, r.required = p;
    }
  }), r;
}, ul = (e) => {
  const t = ne(e.type), r = (c) => Object.entries(c).map(([p, y], d) => {
    if (!y)
      return {};
    const {
      type: _,
      description: E,
      enum: O,
      properties: m,
      items: T,
      ...h
    } = y || {}, P = {
      title: p,
      key: `schema-1-${d + 1}`,
      is_required: l.includes(p),
      type: _,
      description: E,
      enum: O,
      rule: {
        ...h
      }
    };
    return m && (P.properties = r(m)), T && (P.items = r(T)), P;
  }), { title: n, type: a, description: o, required: l, ...s } = e, u = {
    title: n,
    type: a,
    description: o,
    key: "schema-1"
  };
  return t && (u[t] = e[t] ? r(e[t]) : []), s && (u.rule = {}, Object.keys(s).forEach((c) => {
    s[c] && !["properties", "items"].includes(c) && (u.rule[c] = s[c]);
  })), [u];
}, cl = (e, t = "json") => {
  const r = {
    eval: (a) => new Function(`return ${a}`)(),
    json: JSON.parse
  };
  let n = null;
  try {
    const a = r[t];
    a && (n = a(e));
  } catch (a) {
    console.error(`[parse data error]:${a}`);
  }
  return n;
};
var Dn = /* @__PURE__ */ Ia({});
function Re() {
  return Re = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Re.apply(null, arguments);
}
function fl(e) {
  if (Array.isArray(e)) return e;
}
function dl(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, o, l, s = [], u = !0, c = !1;
    try {
      if (o = (r = r.call(e)).next, t !== 0) for (; !(u = (n = o.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (p) {
      c = !0, a = p;
    } finally {
      try {
        if (!u && r.return != null && (l = r.return(), Object(l) !== l)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function qr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function pl(e, t) {
  if (e) {
    if (typeof e == "string") return qr(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? qr(e, t) : void 0;
  }
}
function gl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fn(e, t) {
  return fl(e) || dl(e, t) || pl(e, t) || gl();
}
function ae(e) {
  "@babel/helpers - typeof";
  return ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ae(e);
}
function vl(e, t) {
  if (ae(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ae(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yl(e) {
  var t = vl(e, "string");
  return ae(t) == "symbol" ? t : t + "";
}
function xt(e, t, r) {
  return (t = yl(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function hl(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function Mn(e, t) {
  if (e == null) return {};
  var r, n, a = hl(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  }
  return a;
}
var Ln = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var o = "", l = 0; l < arguments.length; l++) {
        var s = arguments[l];
        s && (o = a(o, n(s)));
      }
      return o;
    }
    function n(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return r.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var l = "";
      for (var s in o)
        t.call(o, s) && o[s] && (l = a(l, s));
      return l;
    }
    function a(o, l) {
      return l ? o ? o + " " + l : o + l : o;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Ln);
var ml = Ln.exports;
const bl = /* @__PURE__ */ Wa(ml);
function L(e, t) {
  _l(e) && (e = "100%");
  var r = Tl(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function _l(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Tl(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function wl(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function De(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function ct(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function El(e, t, r) {
  return {
    r: L(e, 255) * 255,
    g: L(t, 255) * 255,
    b: L(r, 255) * 255
  };
}
function ft(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function xl(e, t, r) {
  var n, a, o;
  if (e = L(e, 360), t = L(t, 100), r = L(r, 100), t === 0)
    a = r, o = r, n = r;
  else {
    var l = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - l;
    n = ft(s, l, e + 1 / 3), a = ft(s, l, e), o = ft(s, l, e - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: o * 255 };
}
function Sl(e, t, r) {
  e = L(e, 255), t = L(t, 255), r = L(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), o = 0, l = n, s = n - a, u = n === 0 ? 0 : s / n;
  if (n === a)
    o = 0;
  else {
    switch (n) {
      case e:
        o = (t - r) / s + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / s + 2;
        break;
      case r:
        o = (e - t) / s + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: u, v: l };
}
function Ol(e, t, r) {
  e = L(e, 360) * 6, t = L(t, 100), r = L(r, 100);
  var n = Math.floor(e), a = e - n, o = r * (1 - t), l = r * (1 - a * t), s = r * (1 - (1 - a) * t), u = n % 6, c = [r, l, o, o, s, r][u], p = [s, r, r, l, o, o][u], y = [o, o, s, r, r, l][u];
  return { r: c * 255, g: p * 255, b: y * 255 };
}
function Rl(e, t, r, n) {
  var a = [
    ct(Math.round(e).toString(16)),
    ct(Math.round(t).toString(16)),
    ct(Math.round(r).toString(16))
  ];
  return a.join("");
}
function Kr(e) {
  return F(e) / 255;
}
function F(e) {
  return parseInt(e, 16);
}
var zr = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function _e(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, a = null, o = null, l = !1, s = !1;
  return typeof e == "string" && (e = Cl(e)), typeof e == "object" && (B(e.r) && B(e.g) && B(e.b) ? (t = El(e.r, e.g, e.b), l = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : B(e.h) && B(e.s) && B(e.v) ? (n = De(e.s), a = De(e.v), t = Ol(e.h, n, a), l = !0, s = "hsv") : B(e.h) && B(e.s) && B(e.l) && (n = De(e.s), o = De(e.l), t = xl(e.h, n, o), l = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = wl(r), {
    ok: l,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var Pl = "[-\\+]?\\d+%?", jl = "[-\\+]?\\d*\\.\\d+%?", G = "(?:".concat(jl, ")|(?:").concat(Pl, ")"), dt = "[\\s|\\(]+(".concat(G, ")[,|\\s]+(").concat(G, ")[,|\\s]+(").concat(G, ")\\s*\\)?"), pt = "[\\s|\\(]+(".concat(G, ")[,|\\s]+(").concat(G, ")[,|\\s]+(").concat(G, ")[,|\\s]+(").concat(G, ")\\s*\\)?"), k = {
  CSS_UNIT: new RegExp(G),
  rgb: new RegExp("rgb" + dt),
  rgba: new RegExp("rgba" + pt),
  hsl: new RegExp("hsl" + dt),
  hsla: new RegExp("hsla" + pt),
  hsv: new RegExp("hsv" + dt),
  hsva: new RegExp("hsva" + pt),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Cl(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (zr[e])
    e = zr[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = k.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = k.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = k.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = k.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = k.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = k.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = k.hex8.exec(e), r ? {
    r: F(r[1]),
    g: F(r[2]),
    b: F(r[3]),
    a: Kr(r[4]),
    format: t ? "name" : "hex8"
  } : (r = k.hex6.exec(e), r ? {
    r: F(r[1]),
    g: F(r[2]),
    b: F(r[3]),
    format: t ? "name" : "hex"
  } : (r = k.hex4.exec(e), r ? {
    r: F(r[1] + r[1]),
    g: F(r[2] + r[2]),
    b: F(r[3] + r[3]),
    a: Kr(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = k.hex3.exec(e), r ? {
    r: F(r[1] + r[1]),
    g: F(r[2] + r[2]),
    b: F(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function B(e) {
  return !!k.CSS_UNIT.exec(String(e));
}
var Fe = 2, Vr = 0.16, Al = 0.05, Il = 0.05, $l = 0.15, kn = 5, Wn = 4, Nl = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function Gr(e) {
  var t = e.r, r = e.g, n = e.b, a = Sl(t, r, n);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function Me(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(Rl(t, r, n));
}
function Dl(e, t, r) {
  var n = r / 100, a = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return a;
}
function Jr(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - Fe * t : Math.round(e.h) + Fe * t : n = r ? Math.round(e.h) + Fe * t : Math.round(e.h) - Fe * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Xr(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - Vr * t : t === Wn ? n = e.s + Vr : n = e.s + Al * t, n > 1 && (n = 1), r && t === kn && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Qr(e, t, r) {
  var n;
  return r ? n = e.v + Il * t : n = e.v - $l * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function Fl(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = _e(e), a = kn; a > 0; a -= 1) {
    var o = Gr(n), l = Me(_e({
      h: Jr(o, a, !0),
      s: Xr(o, a, !0),
      v: Qr(o, a, !0)
    }));
    r.push(l);
  }
  r.push(Me(n));
  for (var s = 1; s <= Wn; s += 1) {
    var u = Gr(n), c = Me(_e({
      h: Jr(u, s),
      s: Xr(u, s),
      v: Qr(u, s)
    }));
    r.push(c);
  }
  return t.theme === "dark" ? Nl.map(function(p) {
    var y = p.index, d = p.opacity, _ = Me(Dl(_e(t.backgroundColor || "#141414"), _e(r[y]), d * 100));
    return _;
  }) : r;
}
var St = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
St.primary = St[5];
function Zr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zr(Object(r), !0).forEach(function(n) {
      xt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ml() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ll(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var en = "data-rc-order", tn = "data-rc-priority", kl = "rc-util-key", Ot = /* @__PURE__ */ new Map();
function Hn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : kl;
}
function kt(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Wl(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Wt(e) {
  return Array.from((Ot.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Bn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Ml())
    return null;
  var r = t.csp, n = t.prepend, a = t.priority, o = a === void 0 ? 0 : a, l = Wl(n), s = l === "prependQueue", u = document.createElement("style");
  u.setAttribute(en, l), s && o && u.setAttribute(tn, "".concat(o)), r != null && r.nonce && (u.nonce = r == null ? void 0 : r.nonce), u.innerHTML = e;
  var c = kt(t), p = c.firstChild;
  if (n) {
    if (s) {
      var y = (t.styles || Wt(c)).filter(function(d) {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(en)))
          return !1;
        var _ = Number(d.getAttribute(tn) || 0);
        return o >= _;
      });
      if (y.length)
        return c.insertBefore(u, y[y.length - 1].nextSibling), u;
    }
    c.insertBefore(u, p);
  } else
    c.appendChild(u);
  return u;
}
function Hl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = kt(t);
  return (t.styles || Wt(r)).find(function(n) {
    return n.getAttribute(Hn(t)) === e;
  });
}
function Bl(e, t) {
  var r = Ot.get(e);
  if (!r || !Ll(document, r)) {
    var n = Bn("", t), a = n.parentNode;
    Ot.set(e, a), e.removeChild(n);
  }
}
function Ul(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = kt(r), a = Wt(n), o = H(H({}, r), {}, {
    styles: a
  });
  Bl(n, o);
  var l = Hl(t, o);
  if (l) {
    var s, u;
    if ((s = o.csp) !== null && s !== void 0 && s.nonce && l.nonce !== ((u = o.csp) === null || u === void 0 ? void 0 : u.nonce)) {
      var c;
      l.nonce = (c = o.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return l.innerHTML !== e && (l.innerHTML = e), l;
  }
  var p = Bn(e, o);
  return p.setAttribute(Hn(o), t), p;
}
function Un(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Yl(e) {
  return Un(e) instanceof ShadowRoot;
}
function ql(e) {
  return Yl(e) ? Un(e) : null;
}
var Rt = {}, Ht = [], Kl = function(t) {
  Ht.push(t);
};
function zl(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Ht.reduce(function(n, a) {
      return a(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function Vl(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Ht.reduce(function(n, a) {
      return a(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function Gl() {
  Rt = {};
}
function Yn(e, t, r) {
  !t && !Rt[r] && (e(!1, r), Rt[r] = !0);
}
function Ge(e, t) {
  Yn(zl, e, t);
}
function Jl(e, t) {
  Yn(Vl, e, t);
}
Ge.preMessage = Kl;
Ge.resetWarned = Gl;
Ge.noteOnce = Jl;
function Xl(e) {
  return e.replace(/-(.)/g, function(t, r) {
    return r.toUpperCase();
  });
}
function Ql(e, t) {
  Ge(e, "[@ant-design/icons] ".concat(t));
}
function rn(e) {
  return ae(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (ae(e.icon) === "object" || typeof e.icon == "function");
}
function nn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[Xl(r)] = n;
    }
    return t;
  }, {});
}
function Pt(e, t, r) {
  return r ? /* @__PURE__ */ ke.createElement(e.tag, H(H({
    key: t
  }, nn(e.attrs)), r), (e.children || []).map(function(n, a) {
    return Pt(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ ke.createElement(e.tag, H({
    key: t
  }, nn(e.attrs)), (e.children || []).map(function(n, a) {
    return Pt(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function qn(e) {
  return Fl(e)[0];
}
function Kn(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Zl = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, eu = function(t) {
  var r = $a(Dn), n = r.csp, a = r.prefixCls, o = Zl;
  a && (o = o.replace(/anticon/g, a)), We(function() {
    var l = t.current, s = ql(l);
    Ul(o, "@ant-design-icons", {
      prepend: !0,
      csp: n,
      attachTo: s
    });
  }, []);
}, tu = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], xe = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function ru(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  xe.primaryColor = t, xe.secondaryColor = r || qn(t), xe.calculated = !!r;
}
function nu() {
  return H({}, xe);
}
var pe = function(t) {
  var r = t.icon, n = t.className, a = t.onClick, o = t.style, l = t.primaryColor, s = t.secondaryColor, u = Mn(t, tu), c = Y.useRef(), p = xe;
  if (l && (p = {
    primaryColor: l,
    secondaryColor: s || qn(l)
  }), eu(c), Ql(rn(r), "icon should be icon definiton, but got ".concat(r)), !rn(r))
    return null;
  var y = r;
  return y && typeof y.icon == "function" && (y = H(H({}, y), {}, {
    icon: y.icon(p.primaryColor, p.secondaryColor)
  })), Pt(y.icon, "svg-".concat(y.name), H(H({
    className: n,
    onClick: a,
    style: o,
    "data-icon": y.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, u), {}, {
    ref: c
  }));
};
pe.displayName = "IconReact";
pe.getTwoToneColors = nu;
pe.setTwoToneColors = ru;
function zn(e) {
  var t = Kn(e), r = Fn(t, 2), n = r[0], a = r[1];
  return pe.setTwoToneColors({
    primaryColor: n,
    secondaryColor: a
  });
}
function au() {
  var e = pe.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var iu = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
zn(St.primary);
var Pe = /* @__PURE__ */ Y.forwardRef(function(e, t) {
  var r = e.className, n = e.icon, a = e.spin, o = e.rotate, l = e.tabIndex, s = e.onClick, u = e.twoToneColor, c = Mn(e, iu), p = Y.useContext(Dn), y = p.prefixCls, d = y === void 0 ? "anticon" : y, _ = p.rootClassName, E = bl(_, d, xt(xt({}, "".concat(d, "-").concat(n.name), !!n.name), "".concat(d, "-spin"), !!a || n.name === "loading"), r), O = l;
  O === void 0 && s && (O = -1);
  var m = o ? {
    msTransform: "rotate(".concat(o, "deg)"),
    transform: "rotate(".concat(o, "deg)")
  } : void 0, T = Kn(u), h = Fn(T, 2), P = h[0], D = h[1];
  return /* @__PURE__ */ Y.createElement("span", Re({
    role: "img",
    "aria-label": n.name
  }, c, {
    ref: t,
    tabIndex: O,
    onClick: s,
    className: E
  }), /* @__PURE__ */ Y.createElement(pe, {
    icon: n,
    primaryColor: P,
    secondaryColor: D,
    style: m
  }));
});
Pe.displayName = "AntdIcon";
Pe.getTwoToneColor = au;
Pe.setTwoToneColor = zn;
var ou = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] }, name: "delete", theme: "outlined" }, su = function(t, r) {
  return /* @__PURE__ */ Y.createElement(Pe, Re({}, t, {
    ref: r,
    icon: ou
  }));
}, Vn = /* @__PURE__ */ Y.forwardRef(su);
process.env.NODE_ENV !== "production" && (Vn.displayName = "DeleteOutlined");
var lu = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { tag: "path", attrs: { d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, name: "plus", theme: "outlined" }, uu = function(t, r) {
  return /* @__PURE__ */ Y.createElement(Pe, Re({}, t, {
    ref: r,
    icon: lu
  }));
}, Bt = /* @__PURE__ */ Y.forwardRef(uu);
process.env.NODE_ENV !== "production" && (Bt.displayName = "PlusOutlined");
const an = (e) => {
  const { handleIndex: t, deleteText: r = "删除", addText: n = "添加", onDel: a, onAdd: o, showRemoveBtn: l } = e;
  return /* @__PURE__ */ g.jsx(I.Item, { children: /* @__PURE__ */ g.jsxs(vt, { children: [
    (At(l) ? l : kr(t) && t > 0 || !kr(t)) && /* @__PURE__ */ g.jsx(vr, { title: r, children: /* @__PURE__ */ g.jsx(ue, { icon: /* @__PURE__ */ g.jsx(Vn, {}), shape: "circle", danger: !0, onClick: () => a == null ? void 0 : a() }) }),
    /* @__PURE__ */ g.jsx(vr, { title: n, children: /* @__PURE__ */ g.jsx(ue, { icon: /* @__PURE__ */ g.jsx(Bt, {}), shape: "circle", onClick: () => o == null ? void 0 : o() }) })
  ] }) });
}, on = (e) => {
  const {
    listField: t = "field",
    listFormItemLabel: r,
    FormListItemComponent: n = () => null,
    listFormItemProps: a = {},
    iconFormProps: o = {},
    addItemData: l,
    rowProps: s = {}
  } = e, u = (c) => {
    c == null || c(l || void 0);
  };
  return /* @__PURE__ */ g.jsx(I.List, { name: t, children: (c, { add: p, remove: y }) => /* @__PURE__ */ g.jsxs(I.Item, { label: r, ...a, children: [
    c.map(({ key: d, ..._ }, E) => /* @__PURE__ */ g.jsxs(Fa, { gutter: 15, ...s, children: [
      /* @__PURE__ */ g.jsx(yr, { span: 20, children: /* @__PURE__ */ g.jsx(I.Item, { ..._, children: /* @__PURE__ */ g.jsx(n, {}) }) }),
      /* @__PURE__ */ g.jsx(yr, { span: 4, children: /* @__PURE__ */ g.jsx(
        an,
        {
          deleteText: `删除${r}`,
          addText: `添加${r}`,
          onDel: () => {
            y(E);
          },
          onAdd: () => u(p),
          ...o
        }
      ) })
    ] }, `${d}-${E}`)),
    !c.length && /* @__PURE__ */ g.jsx(
      an,
      {
        deleteText: `删除${r}`,
        addText: `添加${r}`,
        showRemoveBtn: !1,
        onAdd: () => u(p),
        ...o
      }
    )
  ] }) });
}, cu = ({ children: e, onClick: t, btnText: r = "添加一条" }) => /* @__PURE__ */ g.jsxs("div", { className: "add-row-button-container", children: [
  /* @__PURE__ */ g.jsx(ue, { size: "small", type: "text", icon: /* @__PURE__ */ g.jsx(Bt, {}), onClick: t, children: r }),
  e
] }), fu = ({ value: e, onChange: t }) => /* @__PURE__ */ g.jsx(jt, { placeholder: "请输入枚举值", value: e, onChange: t, style: { width: "100%" } }), du = ({
  value: e,
  onChange: t
}) => /* @__PURE__ */ g.jsx(jt, { placeholder: "请输入枚举值", value: e, onChange: t, step: 1, style: { width: "100%" } }), pu = ({ type: e }) => {
  const t = gt(() => cn[e] || [], [e]), r = ({ validateType: a, validateLabel: o }) => ["number", "integer"].includes(a) ? /* @__PURE__ */ g.jsx(jt, { placeholder: `请输入${o}`, style: { width: "100%" } }) : a === "boolean" ? /* @__PURE__ */ g.jsx(Ve, {}) : /* @__PURE__ */ g.jsx(Le, { placeholder: `请输入${o}` }), n = e !== "boolean" && t.length === 0;
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    t == null ? void 0 : t.map((a, o) => /* @__PURE__ */ g.jsx(I.Item, { name: ["rule", `${a == null ? void 0 : a.validateName}`], children: r(a) }, `${a}-${o}`)),
    n && /* @__PURE__ */ g.jsx(La, { message: "请先选择参数类型，选择参数类型后会自动匹配相应规则!" }),
    e === "boolean" && /* @__PURE__ */ g.jsx(ka, { description: "说明：布尔值没有相关规则" })
  ] });
}, gu = ({ type: e }) => e === "boolean" ? /* @__PURE__ */ g.jsx(I.Item, { name: "enum", label: "枚举值", children: /* @__PURE__ */ g.jsx(Ve, { trueText: "true", falseText: "false" }) }) : e === "string" ? /* @__PURE__ */ g.jsx(I.Item, { name: "enum", label: "枚举值", help: /* @__PURE__ */ g.jsx(g.Fragment, { children: "温馨提示: 输入枚举值需要按下enter键确定" }), children: /* @__PURE__ */ g.jsx(
  un,
  {
    mode: "tags",
    allowClear: !0,
    placeholder: "请输入枚举值并按下enter键确定"
  }
) }) : e === "number" ? /* @__PURE__ */ g.jsx(on, { listFormItemLabel: "枚举值", listField: "enum", FormListItemComponent: fu }) : e === "integer" ? /* @__PURE__ */ g.jsx(
  on,
  {
    listFormItemLabel: "枚举值",
    listField: "enum",
    FormListItemComponent: du
  }
) : null, Gn = ({
  tableData: e,
  addKey: t = "schema",
  isRoot: r
}) => {
  const [n, a] = pr(!1), [o, l] = pr(!1), [s] = I.useForm(), u = (d) => {
    sl(d);
  }, c = () => {
    a(!0), l(!1);
  }, p = Ls({
    removeRow: u,
    editRow(d) {
      s.setFieldsValue({ ...d }), a(!0), l(!0);
    },
    isRoot: r
  }), y = async () => {
    const { key: d, ..._ } = await s.validateFields(), E = { ..._ };
    if (["object", "array"].includes(_.type)) {
      const O = ne(_ == null ? void 0 : _.type);
      E[O] = [];
    }
    o ? ol(d, E) : il(
      r ? "" : t,
      {
        key: `${t}-${e.length + 1}`,
        ...E
      }
    ), a(!1), s.resetFields();
  };
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx(
      Ma,
      {
        dataSource: e,
        columns: p,
        scroll: {
          y: 500,
          x: 1600
        },
        bordered: !1,
        footer: () => r && e.length > 0 ? null : /* @__PURE__ */ g.jsx(cu, { onClick: c }),
        expandable: {
          expandedRowRender: (d) => /* @__PURE__ */ g.jsx(
            Gn,
            {
              tableData: d.properties,
              addKey: d.key
            }
          ),
          rowExpandable: (d) => {
            const _ = ne(d == null ? void 0 : d.type);
            return !!(["object", "array"].includes(d == null ? void 0 : d.type) && Array.isArray(d[_]));
          }
        }
      }
    ),
    /* @__PURE__ */ g.jsx(
      ln,
      {
        title: `${o ? "编辑" : "新增"}参数`,
        open: n,
        onOk: y,
        onCancel: () => {
          a(!1), s.resetFields();
        },
        style: {
          minWidth: 700
        },
        children: /* @__PURE__ */ g.jsxs(I, { form: s, labelCol: { span: 3 }, children: [
          /* @__PURE__ */ g.jsx(I.Item, { name: "key", label: "参数key", style: { display: "none" }, children: /* @__PURE__ */ g.jsx(Le, {}) }),
          /* @__PURE__ */ g.jsx(I.Item, { name: "title", label: "参数名", rules: [{ required: !0 }], children: /* @__PURE__ */ g.jsx(Le, { placeholder: "请输入参数名" }) }),
          /* @__PURE__ */ g.jsx(I.Item, { name: "type", label: "参数类型", rules: [{ required: !0 }], children: /* @__PURE__ */ g.jsx(un, { options: Ua, placeholder: "请选择参数类型" }) }),
          /* @__PURE__ */ g.jsx(I.Item, { name: "description", label: "参数描述", rules: [{ required: !0 }], children: /* @__PURE__ */ g.jsx(Le, { placeholder: "请输入参数描述" }) }),
          !r && /* @__PURE__ */ g.jsx(I.Item, { name: "is_required", label: "是否必填", rules: [{ required: !0 }], children: /* @__PURE__ */ g.jsx(Ve, { placeholder: "请选择是否必填" }) }),
          /* @__PURE__ */ g.jsx(I.Item, { shouldUpdate: !0, noStyle: !0, children: ({ getFieldValue: d }) => /* @__PURE__ */ g.jsx(gu, { type: d("type") }) }),
          /* @__PURE__ */ g.jsx(I.Item, { label: "规则", shouldUpdate: !0, children: ({ getFieldValue: d }) => /* @__PURE__ */ g.jsx(pu, { type: d("type") }) })
        ] })
      }
    )
  ] });
}, vu = ({ stateKey: e }) => {
  const t = Nn(V);
  return /* @__PURE__ */ g.jsx(Gn, { tableData: t.schemaData, addKey: "schema", isRoot: !0 });
}, mu = ({ value: e, onChange: t }) => {
  const r = Nn(V), n = (a) => {
    let o;
    a.length > 0 && (o = ll(a), t == null || t(JSON.stringify(o)));
  };
  return We(() => {
    n(V.schemaData);
  }, [r]), We(() => {
    if (e && Cs(e)) {
      const a = cl(e);
      if (a) {
        const o = ul(a);
        Fs(V.schemaData, o) || (V.schemaData = o);
      }
    }
  }, [e]), /* @__PURE__ */ g.jsx(vu, {});
};
export {
  mu as EwJSONSchemaEditVisual
};

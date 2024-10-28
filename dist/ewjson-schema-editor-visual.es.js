import * as Y from "react";
import We, { useMemo as vt, useRef as sn, useSyncExternalStore as Pa, useCallback as ja, useLayoutEffect as Ca, useEffect as Se, useDebugValue as Aa, createContext as Ia, useContext as $a, useState as it } from "react";
import { Button as ue, Space as yt, Card as gr, Modal as ln, Descriptions as Na, Radio as ht, Form as I, Tooltip as vr, Row as Da, Col as yr, Table as Fa, Input as ke, Select as un, Alert as Ma, Empty as La, InputNumber as Ct } from "antd";
function ka(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mt = { exports: {} }, he = {};
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
function Wa() {
  if (hr) return he;
  hr = 1;
  var e = We, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(s, u, c) {
    var d, y = {}, v = null, w = null;
    c !== void 0 && (v = "" + c), u.key !== void 0 && (v = "" + u.key), u.ref !== void 0 && (w = u.ref);
    for (d in u) n.call(u, d) && !o.hasOwnProperty(d) && (y[d] = u[d]);
    if (s && s.defaultProps) for (d in u = s.defaultProps, u) y[d] === void 0 && (y[d] = u[d]);
    return { $$typeof: t, type: s, key: v, ref: w, props: y, _owner: a.current };
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
function Ha() {
  return mr || (mr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = We, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), m = Symbol.iterator, E = "@@iterator";
    function b(i) {
      if (i === null || typeof i != "object")
        return null;
      var f = m && i[m] || i[E];
      return typeof f == "function" ? f : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(i) {
      {
        for (var f = arguments.length, g = new Array(f > 1 ? f - 1 : 0), _ = 1; _ < f; _++)
          g[_ - 1] = arguments[_];
        P("error", i, g);
      }
    }
    function P(i, f, g) {
      {
        var _ = T.ReactDebugCurrentFrame, O = _.getStackAddendum();
        O !== "" && (f += "%s", g = g.concat([O]));
        var R = g.map(function(S) {
          return String(S);
        });
        R.unshift("Warning: " + f), Function.prototype.apply.call(console[i], console, R);
      }
    }
    var D = !1, V = !1, Jn = !1, Xn = !1, Qn = !1, Yt;
    Yt = Symbol.for("react.module.reference");
    function Zn(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === n || i === o || Qn || i === a || i === c || i === d || Xn || i === w || D || V || Jn || typeof i == "object" && i !== null && (i.$$typeof === v || i.$$typeof === y || i.$$typeof === l || i.$$typeof === s || i.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === Yt || i.getModuleId !== void 0));
    }
    function ea(i, f, g) {
      var _ = i.displayName;
      if (_)
        return _;
      var O = f.displayName || f.name || "";
      return O !== "" ? g + "(" + O + ")" : g;
    }
    function qt(i) {
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
        case d:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case s:
            var f = i;
            return qt(f) + ".Consumer";
          case l:
            var g = i;
            return qt(g._context) + ".Provider";
          case u:
            return ea(i, i.render, "ForwardRef");
          case y:
            var _ = i.displayName || null;
            return _ !== null ? _ : W(i.type) || "Memo";
          case v: {
            var O = i, R = O._payload, S = O._init;
            try {
              return W(S(R));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, ge = 0, Kt, zt, Vt, Gt, Jt, Xt, Qt;
    function Zt() {
    }
    Zt.__reactDisabledLog = !0;
    function ta() {
      {
        if (ge === 0) {
          Kt = console.log, zt = console.info, Vt = console.warn, Gt = console.error, Jt = console.group, Xt = console.groupCollapsed, Qt = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: Zt,
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
              value: Kt
            }),
            info: Z({}, i, {
              value: zt
            }),
            warn: Z({}, i, {
              value: Vt
            }),
            error: Z({}, i, {
              value: Gt
            }),
            group: Z({}, i, {
              value: Jt
            }),
            groupCollapsed: Z({}, i, {
              value: Xt
            }),
            groupEnd: Z({}, i, {
              value: Qt
            })
          });
        }
        ge < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Je = T.ReactCurrentDispatcher, Xe;
    function Ce(i, f, g) {
      {
        if (Xe === void 0)
          try {
            throw Error();
          } catch (O) {
            var _ = O.stack.trim().match(/\n( *(at )?)/);
            Xe = _ && _[1] || "";
          }
        return `
` + Xe + i;
      }
    }
    var Qe = !1, Ae;
    {
      var na = typeof WeakMap == "function" ? WeakMap : Map;
      Ae = new na();
    }
    function er(i, f) {
      if (!i || Qe)
        return "";
      {
        var g = Ae.get(i);
        if (g !== void 0)
          return g;
      }
      var _;
      Qe = !0;
      var O = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var R;
      R = Je.current, Je.current = null, ta();
      try {
        if (f) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (N) {
              _ = N;
            }
            Reflect.construct(i, [], S);
          } else {
            try {
              S.call();
            } catch (N) {
              _ = N;
            }
            i.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            _ = N;
          }
          i();
        }
      } catch (N) {
        if (N && _ && typeof N.stack == "string") {
          for (var x = N.stack.split(`
`), $ = _.stack.split(`
`), C = x.length - 1, A = $.length - 1; C >= 1 && A >= 0 && x[C] !== $[A]; )
            A--;
          for (; C >= 1 && A >= 0; C--, A--)
            if (x[C] !== $[A]) {
              if (C !== 1 || A !== 1)
                do
                  if (C--, A--, A < 0 || x[C] !== $[A]) {
                    var M = `
` + x[C].replace(" at new ", " at ");
                    return i.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", i.displayName)), typeof i == "function" && Ae.set(i, M), M;
                  }
                while (C >= 1 && A >= 0);
              break;
            }
        }
      } finally {
        Qe = !1, Je.current = R, ra(), Error.prepareStackTrace = O;
      }
      var le = i ? i.displayName || i.name : "", ee = le ? Ce(le) : "";
      return typeof i == "function" && Ae.set(i, ee), ee;
    }
    function aa(i, f, g) {
      return er(i, !1);
    }
    function ia(i) {
      var f = i.prototype;
      return !!(f && f.isReactComponent);
    }
    function Ie(i, f, g) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return er(i, ia(i));
      if (typeof i == "string")
        return Ce(i);
      switch (i) {
        case c:
          return Ce("Suspense");
        case d:
          return Ce("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case u:
            return aa(i.render);
          case y:
            return Ie(i.type, f, g);
          case v: {
            var _ = i, O = _._payload, R = _._init;
            try {
              return Ie(R(O), f, g);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, tr = {}, rr = T.ReactDebugCurrentFrame;
    function $e(i) {
      if (i) {
        var f = i._owner, g = Ie(i.type, i._source, f ? f.type : null);
        rr.setExtraStackFrame(g);
      } else
        rr.setExtraStackFrame(null);
    }
    function oa(i, f, g, _, O) {
      {
        var R = Function.call.bind(ve);
        for (var S in i)
          if (R(i, S)) {
            var x = void 0;
            try {
              if (typeof i[S] != "function") {
                var $ = Error((_ || "React class") + ": " + g + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              x = i[S](f, S, _, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              x = C;
            }
            x && !(x instanceof Error) && ($e(O), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", g, S, typeof x), $e(null)), x instanceof Error && !(x.message in tr) && (tr[x.message] = !0, $e(O), h("Failed %s type: %s", g, x.message), $e(null));
          }
      }
    }
    var sa = Array.isArray;
    function Ze(i) {
      return sa(i);
    }
    function la(i) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, g = f && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return g;
      }
    }
    function ua(i) {
      try {
        return nr(i), !1;
      } catch {
        return !0;
      }
    }
    function nr(i) {
      return "" + i;
    }
    function ar(i) {
      if (ua(i))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", la(i)), nr(i);
    }
    var ye = T.ReactCurrentOwner, ca = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ir, or, et;
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
        var g = W(ye.current.type);
        et[g] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(ye.current.type), i.ref), et[g] = !0);
      }
    }
    function ga(i, f) {
      {
        var g = function() {
          ir || (ir = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        g.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function va(i, f) {
      {
        var g = function() {
          or || (or = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        g.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var ya = function(i, f, g, _, O, R, S) {
      var x = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: f,
        ref: g,
        props: S,
        // Record the component responsible for creating this element.
        _owner: R
      };
      return x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(x, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.defineProperty(x, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    };
    function ha(i, f, g, _, O) {
      {
        var R, S = {}, x = null, $ = null;
        g !== void 0 && (ar(g), x = "" + g), da(f) && (ar(f.key), x = "" + f.key), fa(f) && ($ = f.ref, pa(f, O));
        for (R in f)
          ve.call(f, R) && !ca.hasOwnProperty(R) && (S[R] = f[R]);
        if (i && i.defaultProps) {
          var C = i.defaultProps;
          for (R in C)
            S[R] === void 0 && (S[R] = C[R]);
        }
        if (x || $) {
          var A = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          x && ga(S, A), $ && va(S, A);
        }
        return ya(i, x, $, O, _, ye.current, S);
      }
    }
    var tt = T.ReactCurrentOwner, sr = T.ReactDebugCurrentFrame;
    function se(i) {
      if (i) {
        var f = i._owner, g = Ie(i.type, i._source, f ? f.type : null);
        sr.setExtraStackFrame(g);
      } else
        sr.setExtraStackFrame(null);
    }
    var rt;
    rt = !1;
    function nt(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function lr() {
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
    var ur = {};
    function ba(i) {
      {
        var f = lr();
        if (!f) {
          var g = typeof i == "string" ? i : i.displayName || i.name;
          g && (f = `

Check the top-level render call using <` + g + ">.");
        }
        return f;
      }
    }
    function cr(i, f) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var g = ba(f);
        if (ur[g])
          return;
        ur[g] = !0;
        var _ = "";
        i && i._owner && i._owner !== tt.current && (_ = " It was passed a child from " + W(i._owner.type) + "."), se(i), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, _), se(null);
      }
    }
    function fr(i, f) {
      {
        if (typeof i != "object")
          return;
        if (Ze(i))
          for (var g = 0; g < i.length; g++) {
            var _ = i[g];
            nt(_) && cr(_, f);
          }
        else if (nt(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var O = b(i);
          if (typeof O == "function" && O !== i.entries)
            for (var R = O.call(i), S; !(S = R.next()).done; )
              nt(S.value) && cr(S.value, f);
        }
      }
    }
    function _a(i) {
      {
        var f = i.type;
        if (f == null || typeof f == "string")
          return;
        var g;
        if (typeof f == "function")
          g = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === y))
          g = f.propTypes;
        else
          return;
        if (g) {
          var _ = W(f);
          oa(g, i.props, "prop", _, i);
        } else if (f.PropTypes !== void 0 && !rt) {
          rt = !0;
          var O = W(f);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", O || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ta(i) {
      {
        for (var f = Object.keys(i.props), g = 0; g < f.length; g++) {
          var _ = f[g];
          if (_ !== "children" && _ !== "key") {
            se(i), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), se(null);
            break;
          }
        }
        i.ref !== null && (se(i), h("Invalid attribute `ref` supplied to `React.Fragment`."), se(null));
      }
    }
    var dr = {};
    function pr(i, f, g, _, O, R) {
      {
        var S = Zn(i);
        if (!S) {
          var x = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $ = ma();
          $ ? x += $ : x += lr();
          var C;
          i === null ? C = "null" : Ze(i) ? C = "array" : i !== void 0 && i.$$typeof === t ? (C = "<" + (W(i.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : C = typeof i, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, x);
        }
        var A = ha(i, f, g, O, R);
        if (A == null)
          return A;
        if (S) {
          var M = f.children;
          if (M !== void 0)
            if (_)
              if (Ze(M)) {
                for (var le = 0; le < M.length; le++)
                  fr(M[le], i);
                Object.freeze && Object.freeze(M);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fr(M, i);
        }
        if (ve.call(f, "key")) {
          var ee = W(i), N = Object.keys(f).filter(function(Ra) {
            return Ra !== "key";
          }), at = N.length > 0 ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!dr[ee + at]) {
            var Oa = N.length > 0 ? "{" + N.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, at, ee, Oa, ee), dr[ee + at] = !0;
          }
        }
        return i === n ? Ta(A) : _a(A), A;
      }
    }
    function wa(i, f, g) {
      return pr(i, f, g, !0);
    }
    function Ea(i, f, g) {
      return pr(i, f, g, !1);
    }
    var xa = Ea, Sa = wa;
    me.Fragment = n, me.jsx = xa, me.jsxs = Sa;
  }()), me;
}
process.env.NODE_ENV === "production" ? mt.exports = Wa() : mt.exports = Ha();
var p = mt.exports;
const Ba = [
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
}, Ua = ["规则名", "规则值", "规则说明"];
var fn = typeof global == "object" && global && global.Object === Object && global, Ya = typeof self == "object" && self && self.Object === Object && self, K = fn || Ya || Function("return this")(), ce = K.Symbol, dn = Object.prototype, qa = dn.hasOwnProperty, Ka = dn.toString, be = ce ? ce.toStringTag : void 0;
function za(e) {
  var t = qa.call(e, be), r = e[be];
  try {
    e[be] = void 0;
    var n = !0;
  } catch {
  }
  var a = Ka.call(e);
  return n && (t ? e[be] = r : delete e[be]), a;
}
var Va = Object.prototype, Ga = Va.toString;
function Ja(e) {
  return Ga.call(e);
}
var Xa = "[object Null]", Qa = "[object Undefined]", br = ce ? ce.toStringTag : void 0;
function Q(e) {
  return e == null ? e === void 0 ? Qa : Xa : br && br in Object(e) ? za(e) : Ja(e);
}
function X(e) {
  return e != null && typeof e == "object";
}
var fe = Array.isArray;
function pn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Za = "[object AsyncFunction]", ei = "[object Function]", ti = "[object GeneratorFunction]", ri = "[object Proxy]";
function gn(e) {
  if (!pn(e))
    return !1;
  var t = Q(e);
  return t == ei || t == ti || t == Za || t == ri;
}
var ot = K["__core-js_shared__"], _r = function() {
  var e = /[^.]+$/.exec(ot && ot.keys && ot.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ni(e) {
  return !!_r && _r in e;
}
var ai = Function.prototype, ii = ai.toString;
function ie(e) {
  if (e != null) {
    try {
      return ii.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var oi = /[\\^$.*+?()[\]{}|]/g, si = /^\[object .+?Constructor\]$/, li = Function.prototype, ui = Object.prototype, ci = li.toString, fi = ui.hasOwnProperty, di = RegExp(
  "^" + ci.call(fi).replace(oi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function pi(e) {
  if (!pn(e) || ni(e))
    return !1;
  var t = gn(e) ? di : si;
  return t.test(ie(e));
}
function gi(e, t) {
  return e == null ? void 0 : e[t];
}
function de(e, t) {
  var r = gi(e, t);
  return pi(r) ? r : void 0;
}
var bt = de(K, "WeakMap"), vi = 9007199254740991, yi = /^(?:0|[1-9]\d*)$/;
function hi(e, t) {
  var r = typeof e;
  return t = t ?? vi, !!t && (r == "number" || r != "symbol" && yi.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function vn(e, t) {
  return e === t || e !== e && t !== t;
}
var mi = 9007199254740991;
function yn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= mi;
}
function hn(e) {
  return e != null && yn(e.length) && !gn(e);
}
var bi = Object.prototype;
function mn(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || bi;
  return e === r;
}
function _i(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Ti = "[object Arguments]";
function Tr(e) {
  return X(e) && Q(e) == Ti;
}
var bn = Object.prototype, wi = bn.hasOwnProperty, Ei = bn.propertyIsEnumerable, _n = Tr(/* @__PURE__ */ function() {
  return arguments;
}()) ? Tr : function(e) {
  return X(e) && wi.call(e, "callee") && !Ei.call(e, "callee");
};
function xi() {
  return !1;
}
var Tn = typeof exports == "object" && exports && !exports.nodeType && exports, wr = Tn && typeof module == "object" && module && !module.nodeType && module, Si = wr && wr.exports === Tn, Er = Si ? K.Buffer : void 0, Oi = Er ? Er.isBuffer : void 0, He = Oi || xi, Ri = "[object Arguments]", Pi = "[object Array]", ji = "[object Boolean]", Ci = "[object Date]", Ai = "[object Error]", Ii = "[object Function]", $i = "[object Map]", Ni = "[object Number]", Di = "[object Object]", Fi = "[object RegExp]", Mi = "[object Set]", Li = "[object String]", ki = "[object WeakMap]", Wi = "[object ArrayBuffer]", Hi = "[object DataView]", Bi = "[object Float32Array]", Ui = "[object Float64Array]", Yi = "[object Int8Array]", qi = "[object Int16Array]", Ki = "[object Int32Array]", zi = "[object Uint8Array]", Vi = "[object Uint8ClampedArray]", Gi = "[object Uint16Array]", Ji = "[object Uint32Array]", j = {};
j[Bi] = j[Ui] = j[Yi] = j[qi] = j[Ki] = j[zi] = j[Vi] = j[Gi] = j[Ji] = !0;
j[Ri] = j[Pi] = j[Wi] = j[ji] = j[Hi] = j[Ci] = j[Ai] = j[Ii] = j[$i] = j[Ni] = j[Di] = j[Fi] = j[Mi] = j[Li] = j[ki] = !1;
function Xi(e) {
  return X(e) && yn(e.length) && !!j[Q(e)];
}
function Qi(e) {
  return function(t) {
    return e(t);
  };
}
var wn = typeof exports == "object" && exports && !exports.nodeType && exports, we = wn && typeof module == "object" && module && !module.nodeType && module, Zi = we && we.exports === wn, st = Zi && fn.process, xr = function() {
  try {
    var e = we && we.require && we.require("util").types;
    return e || st && st.binding && st.binding("util");
  } catch {
  }
}(), Sr = xr && xr.isTypedArray, At = Sr ? Qi(Sr) : Xi, eo = Object.prototype, to = eo.hasOwnProperty;
function ro(e, t) {
  var r = fe(e), n = !r && _n(e), a = !r && !n && He(e), o = !r && !n && !a && At(e), l = r || n || a || o, s = l ? _i(e.length, String) : [], u = s.length;
  for (var c in e)
    to.call(e, c) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    hi(c, u))) && s.push(c);
  return s;
}
function no(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var ao = no(Object.keys, Object), io = Object.prototype, oo = io.hasOwnProperty;
function En(e) {
  if (!mn(e))
    return ao(e);
  var t = [];
  for (var r in Object(e))
    oo.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function so(e) {
  return hn(e) ? ro(e) : En(e);
}
var Oe = de(Object, "create");
function lo() {
  this.__data__ = Oe ? Oe(null) : {}, this.size = 0;
}
function uo(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var co = "__lodash_hash_undefined__", fo = Object.prototype, po = fo.hasOwnProperty;
function go(e) {
  var t = this.__data__;
  if (Oe) {
    var r = t[e];
    return r === co ? void 0 : r;
  }
  return po.call(t, e) ? t[e] : void 0;
}
var vo = Object.prototype, yo = vo.hasOwnProperty;
function ho(e) {
  var t = this.__data__;
  return Oe ? t[e] !== void 0 : yo.call(t, e);
}
var mo = "__lodash_hash_undefined__";
function bo(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Oe && t === void 0 ? mo : t, this;
}
function te(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
te.prototype.clear = lo;
te.prototype.delete = uo;
te.prototype.get = go;
te.prototype.has = ho;
te.prototype.set = bo;
function _o() {
  this.__data__ = [], this.size = 0;
}
function Ke(e, t) {
  for (var r = e.length; r--; )
    if (vn(e[r][0], t))
      return r;
  return -1;
}
var To = Array.prototype, wo = To.splice;
function Eo(e) {
  var t = this.__data__, r = Ke(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : wo.call(t, r, 1), --this.size, !0;
}
function xo(e) {
  var t = this.__data__, r = Ke(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function So(e) {
  return Ke(this.__data__, e) > -1;
}
function Oo(e, t) {
  var r = this.__data__, n = Ke(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function z(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
z.prototype.clear = _o;
z.prototype.delete = Eo;
z.prototype.get = xo;
z.prototype.has = So;
z.prototype.set = Oo;
var Re = de(K, "Map");
function Ro() {
  this.size = 0, this.__data__ = {
    hash: new te(),
    map: new (Re || z)(),
    string: new te()
  };
}
function Po(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ze(e, t) {
  var r = e.__data__;
  return Po(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function jo(e) {
  var t = ze(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Co(e) {
  return ze(this, e).get(e);
}
function Ao(e) {
  return ze(this, e).has(e);
}
function Io(e, t) {
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
oe.prototype.clear = Ro;
oe.prototype.delete = jo;
oe.prototype.get = Co;
oe.prototype.has = Ao;
oe.prototype.set = Io;
function $o(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
function No() {
  this.__data__ = new z(), this.size = 0;
}
function Do(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Fo(e) {
  return this.__data__.get(e);
}
function Mo(e) {
  return this.__data__.has(e);
}
var Lo = 200;
function ko(e, t) {
  var r = this.__data__;
  if (r instanceof z) {
    var n = r.__data__;
    if (!Re || n.length < Lo - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new oe(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function J(e) {
  var t = this.__data__ = new z(e);
  this.size = t.size;
}
J.prototype.clear = No;
J.prototype.delete = Do;
J.prototype.get = Fo;
J.prototype.has = Mo;
J.prototype.set = ko;
function Wo(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, o = []; ++r < n; ) {
    var l = e[r];
    t(l, r, e) && (o[a++] = l);
  }
  return o;
}
function Ho() {
  return [];
}
var Bo = Object.prototype, Uo = Bo.propertyIsEnumerable, Or = Object.getOwnPropertySymbols, Yo = Or ? function(e) {
  return e == null ? [] : (e = Object(e), Wo(Or(e), function(t) {
    return Uo.call(e, t);
  }));
} : Ho;
function qo(e, t, r) {
  var n = t(e);
  return fe(e) ? n : $o(n, r(e));
}
function Rr(e) {
  return qo(e, so, Yo);
}
var _t = de(K, "DataView"), Tt = de(K, "Promise"), wt = de(K, "Set"), Pr = "[object Map]", Ko = "[object Object]", jr = "[object Promise]", Cr = "[object Set]", Ar = "[object WeakMap]", Ir = "[object DataView]", zo = ie(_t), Vo = ie(Re), Go = ie(Tt), Jo = ie(wt), Xo = ie(bt), U = Q;
(_t && U(new _t(new ArrayBuffer(1))) != Ir || Re && U(new Re()) != Pr || Tt && U(Tt.resolve()) != jr || wt && U(new wt()) != Cr || bt && U(new bt()) != Ar) && (U = function(e) {
  var t = Q(e), r = t == Ko ? e.constructor : void 0, n = r ? ie(r) : "";
  if (n)
    switch (n) {
      case zo:
        return Ir;
      case Vo:
        return Pr;
      case Go:
        return jr;
      case Jo:
        return Cr;
      case Xo:
        return Ar;
    }
  return t;
});
var $r = K.Uint8Array, Qo = "__lodash_hash_undefined__";
function Zo(e) {
  return this.__data__.set(e, Qo), this;
}
function es(e) {
  return this.__data__.has(e);
}
function Be(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new oe(); ++t < r; )
    this.add(e[t]);
}
Be.prototype.add = Be.prototype.push = Zo;
Be.prototype.has = es;
function ts(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function rs(e, t) {
  return e.has(t);
}
var ns = 1, as = 2;
function xn(e, t, r, n, a, o) {
  var l = r & ns, s = e.length, u = t.length;
  if (s != u && !(l && u > s))
    return !1;
  var c = o.get(e), d = o.get(t);
  if (c && d)
    return c == t && d == e;
  var y = -1, v = !0, w = r & as ? new Be() : void 0;
  for (o.set(e, t), o.set(t, e); ++y < s; ) {
    var m = e[y], E = t[y];
    if (n)
      var b = l ? n(E, m, y, t, e, o) : n(m, E, y, e, t, o);
    if (b !== void 0) {
      if (b)
        continue;
      v = !1;
      break;
    }
    if (w) {
      if (!ts(t, function(T, h) {
        if (!rs(w, h) && (m === T || a(m, T, r, n, o)))
          return w.push(h);
      })) {
        v = !1;
        break;
      }
    } else if (!(m === E || a(m, E, r, n, o))) {
      v = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), v;
}
function is(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
function os(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var ss = 1, ls = 2, us = "[object Boolean]", cs = "[object Date]", fs = "[object Error]", ds = "[object Map]", ps = "[object Number]", gs = "[object RegExp]", vs = "[object Set]", ys = "[object String]", hs = "[object Symbol]", ms = "[object ArrayBuffer]", bs = "[object DataView]", Nr = ce ? ce.prototype : void 0, lt = Nr ? Nr.valueOf : void 0;
function _s(e, t, r, n, a, o, l) {
  switch (r) {
    case bs:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case ms:
      return !(e.byteLength != t.byteLength || !o(new $r(e), new $r(t)));
    case us:
    case cs:
    case ps:
      return vn(+e, +t);
    case fs:
      return e.name == t.name && e.message == t.message;
    case gs:
    case ys:
      return e == t + "";
    case ds:
      var s = is;
    case vs:
      var u = n & ss;
      if (s || (s = os), e.size != t.size && !u)
        return !1;
      var c = l.get(e);
      if (c)
        return c == t;
      n |= ls, l.set(e, t);
      var d = xn(s(e), s(t), n, a, o, l);
      return l.delete(e), d;
    case hs:
      if (lt)
        return lt.call(e) == lt.call(t);
  }
  return !1;
}
var Ts = 1, ws = Object.prototype, Es = ws.hasOwnProperty;
function xs(e, t, r, n, a, o) {
  var l = r & Ts, s = Rr(e), u = s.length, c = Rr(t), d = c.length;
  if (u != d && !l)
    return !1;
  for (var y = u; y--; ) {
    var v = s[y];
    if (!(l ? v in t : Es.call(t, v)))
      return !1;
  }
  var w = o.get(e), m = o.get(t);
  if (w && m)
    return w == t && m == e;
  var E = !0;
  o.set(e, t), o.set(t, e);
  for (var b = l; ++y < u; ) {
    v = s[y];
    var T = e[v], h = t[v];
    if (n)
      var P = l ? n(h, T, v, t, e, o) : n(T, h, v, e, t, o);
    if (!(P === void 0 ? T === h || a(T, h, r, n, o) : P)) {
      E = !1;
      break;
    }
    b || (b = v == "constructor");
  }
  if (E && !b) {
    var D = e.constructor, V = t.constructor;
    D != V && "constructor" in e && "constructor" in t && !(typeof D == "function" && D instanceof D && typeof V == "function" && V instanceof V) && (E = !1);
  }
  return o.delete(e), o.delete(t), E;
}
var Ss = 1, Dr = "[object Arguments]", Fr = "[object Array]", Ne = "[object Object]", Os = Object.prototype, Mr = Os.hasOwnProperty;
function Rs(e, t, r, n, a, o) {
  var l = fe(e), s = fe(t), u = l ? Fr : U(e), c = s ? Fr : U(t);
  u = u == Dr ? Ne : u, c = c == Dr ? Ne : c;
  var d = u == Ne, y = c == Ne, v = u == c;
  if (v && He(e)) {
    if (!He(t))
      return !1;
    l = !0, d = !1;
  }
  if (v && !d)
    return o || (o = new J()), l || At(e) ? xn(e, t, r, n, a, o) : _s(e, t, u, r, n, a, o);
  if (!(r & Ss)) {
    var w = d && Mr.call(e, "__wrapped__"), m = y && Mr.call(t, "__wrapped__");
    if (w || m) {
      var E = w ? e.value() : e, b = m ? t.value() : t;
      return o || (o = new J()), a(E, b, r, n, o);
    }
  }
  return v ? (o || (o = new J()), xs(e, t, r, n, a, o)) : !1;
}
function Sn(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !X(e) && !X(t) ? e !== e && t !== t : Rs(e, t, r, n, Sn, a);
}
var Ps = "[object String]";
function js(e) {
  return typeof e == "string" || !fe(e) && X(e) && Q(e) == Ps;
}
var Cs = "[object Boolean]";
function It(e) {
  return e === !0 || e === !1 || X(e) && Q(e) == Cs;
}
var As = "[object Map]", Is = "[object Set]", $s = Object.prototype, Ns = $s.hasOwnProperty;
function Lr(e) {
  if (e == null)
    return !0;
  if (hn(e) && (fe(e) || typeof e == "string" || typeof e.splice == "function" || He(e) || At(e) || _n(e)))
    return !e.length;
  var t = U(e);
  if (t == As || t == Is)
    return !e.size;
  if (mn(e))
    return !En(e).length;
  for (var r in e)
    if (Ns.call(e, r))
      return !1;
  return !0;
}
function Ds(e, t) {
  return Sn(e, t);
}
var Fs = "[object Number]";
function kr(e) {
  return typeof e == "number" || X(e) && Q(e) == Fs;
}
const Ms = ({ removeRow: e, editRow: t, isRoot: r }) => {
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
        return It(a) ? a ? "是" : "否" : "-";
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
          const s = o == null ? void 0 : o.type, c = (cn[s] || []).map((d) => ({
            label: `参数类型:${o.type}`,
            children: /* @__PURE__ */ p.jsx(gr, { hoverable: !0, title: "详细规则", children: /* @__PURE__ */ p.jsx(yt, { children: Ua.map((y, v) => /* @__PURE__ */ p.jsxs(gr, { title: y, children: [
              v === 0 && d.validateName,
              v === 1 && a[d.validateName],
              v === 2 && d.validateLabel
            ] }, `${y}-${v}`)) }) })
          }));
          ln.confirm({
            title: "规则详情",
            content: /* @__PURE__ */ p.jsx(
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
        return /* @__PURE__ */ p.jsx(ue, { onClick: l, type: "primary", children: "查看规则详情" });
      }
    },
    {
      title: "操作",
      dataIndex: "op",
      fixed: "right",
      width: 200,
      render: (a, o) => /* @__PURE__ */ p.jsxs(yt, { children: [
        /* @__PURE__ */ p.jsx(ue, { onClick: () => t == null ? void 0 : t(o), type: "primary", children: "编辑" }),
        /* @__PURE__ */ p.jsx(ue, { onClick: () => e == null ? void 0 : e(o.key), type: "primary", danger: !0, children: "删除" })
      ] })
    }
  ];
  return r ? n.filter((a) => a.dataIndex !== "is_required") : n;
}, Ls = Symbol(), $t = Symbol(), Te = "a", On = "f", Wr = "p", Rn = "c", Pn = "t", ut = "n", ct = "g", Nt = "h", Ee = "w", Dt = "o", Ft = "k";
let ks = (e, t) => new Proxy(e, t);
const Et = Object.getPrototypeOf, xt = /* @__PURE__ */ new WeakMap(), jn = (e) => e && (xt.has(e) ? xt.get(e) : Et(e) === Object.prototype || Et(e) === Array.prototype), Ue = (e) => typeof e == "object" && e !== null, Ws = (e) => Object.values(Object.getOwnPropertyDescriptors(e)).some((t) => !t.configurable && !t.writable), Hs = (e) => {
  if (Array.isArray(e))
    return Array.from(e);
  const t = Object.getOwnPropertyDescriptors(e);
  return Object.values(t).forEach((r) => {
    r.configurable = !0;
  }), Object.create(Et(e), t);
}, Bs = (e, t) => {
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
        let d = c[s];
        d || (d = /* @__PURE__ */ new Set(), c[s] = d), d.add(u);
      }
    }
  }, o = () => {
    n = !0, r[Te].delete(e);
  }, l = {
    get(s, u) {
      return u === $t ? e : (a(Ft, u), Cn(Reflect.get(s, u), r[Te], r[Rn], r[Pn]));
    },
    has(s, u) {
      return u === Ls ? (o(), !0) : (a(Nt, u), Reflect.has(s, u));
    },
    getOwnPropertyDescriptor(s, u) {
      return a(Dt, u), Reflect.getOwnPropertyDescriptor(s, u);
    },
    ownKeys(s) {
      return a(Ee), Reflect.ownKeys(s);
    }
  };
  return t && (l.set = l.deleteProperty = () => !1), [l, r];
}, Mt = (e) => (
  // unwrap proxy
  e[$t] || // otherwise
  e
), Cn = (e, t, r, n) => {
  if (!jn(e))
    return e;
  let a = n && n.get(e);
  if (!a) {
    const u = Mt(e);
    Ws(u) ? a = [u, Hs(u)] : a = [u], n == null || n.set(e, a);
  }
  const [o, l] = a;
  let s = r && r.get(o);
  return (!s || s[1][On] !== !!l) && (s = Bs(o, !!l), s[1][Wr] = ks(l || o, s[0]), r && r.set(o, s)), s[1][Te] = t, s[1][Rn] = r, s[1][Pn] = n, s[1][Wr];
}, Us = (e, t) => {
  const r = Reflect.ownKeys(e), n = Reflect.ownKeys(t);
  return r.length !== n.length || r.some((a, o) => a !== n[o]);
}, An = (e, t, r, n, a = Object.is) => {
  if (a(e, t))
    return !1;
  if (!Ue(e) || !Ue(t))
    return !0;
  const o = r.get(Mt(e));
  if (!o)
    return !0;
  if (n) {
    const s = n.get(e);
    if (s && s[ut] === t)
      return s[ct];
    n.set(e, {
      [ut]: t,
      [ct]: !1
    });
  }
  let l = null;
  try {
    for (const s of o[Nt] || [])
      if (l = Reflect.has(e, s) !== Reflect.has(t, s), l)
        return l;
    if (o[Ee] === !0) {
      if (l = Us(e, t), l)
        return l;
    } else
      for (const s of o[Dt] || []) {
        const u = !!Reflect.getOwnPropertyDescriptor(e, s), c = !!Reflect.getOwnPropertyDescriptor(t, s);
        if (l = u !== c, l)
          return l;
      }
    for (const s of o[Ft] || [])
      if (l = An(e[s], t[s], r, n, a), l)
        return l;
    return l === null && (l = !0), l;
  } finally {
    n && n.set(e, {
      [ut]: t,
      [ct]: l
    });
  }
}, Ys = (e) => jn(e) && e[$t] || null, Hr = (e, t = !0) => {
  xt.set(e, t);
}, qs = (e, t, r) => {
  const n = [], a = /* @__PURE__ */ new WeakSet(), o = (l, s) => {
    var u, c, d;
    if (a.has(l))
      return;
    Ue(l) && a.add(l);
    const y = Ue(l) && t.get(Mt(l));
    if (y) {
      if ((u = y[Nt]) === null || u === void 0 || u.forEach((v) => {
        const w = `:has(${String(v)})`;
        n.push(s ? [...s, w] : [w]);
      }), y[Ee] === !0) {
        const v = ":ownKeys";
        n.push(s ? [...s, v] : [v]);
      } else
        (c = y[Dt]) === null || c === void 0 || c.forEach((v) => {
          const w = `:hasOwn(${String(v)})`;
          n.push(s ? [...s, w] : [w]);
        });
      (d = y[Ft]) === null || d === void 0 || d.forEach((v) => {
        "value" in (Object.getOwnPropertyDescriptor(l, v) || {}) && o(l[v], s ? [...s, v] : [v]);
      });
    } else s && n.push(s);
  };
  return o(e), n;
}, Ye = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, Lt = (e) => typeof e == "object" && e !== null, Ks = (e) => Lt(e) && !kt.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer) && !(e instanceof Promise), In = (e, t) => {
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
    if (kt.has(o))
      Hr(o, !1);
    else if (re.has(o)) {
      const [u] = re.get(o);
      s.value = In(u, t);
    }
    Object.defineProperty(n, a, s);
  }), Object.preventExtensions(n);
}, zs = (e, t, r, n) => ({
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
    r(o), Lt(l) && (l = Ys(l) || l);
    const d = !re.has(l) && Gs(l) ? $n(l) : l;
    return t(o, d), Reflect.set(a, o, d, s), n(["set", [o], l, c]), !0;
  }
}), re = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakSet(), Br = /* @__PURE__ */ new WeakMap(), De = [1, 1], qe = /* @__PURE__ */ new WeakMap();
let Ur = Object.is, Vs = (e, t) => new Proxy(e, t), Gs = Ks, Js = In, Xs = zs;
function $n(e = {}) {
  if (!Lt(e))
    throw new Error("object required");
  const t = qe.get(e);
  if (t)
    return t;
  let r = De[0];
  const n = /* @__PURE__ */ new Set(), a = (b, T = ++De[0]) => {
    r !== T && (r = T, n.forEach((h) => h(b, T)));
  };
  let o = De[1];
  const l = (b = ++De[1]) => (o !== b && !n.size && (o = b, u.forEach(([T]) => {
    const h = T[1](b);
    h > r && (r = h);
  })), r), s = (b) => (T, h) => {
    const P = [...T];
    P[1] = [b, ...P[1]], a(P, h);
  }, u = /* @__PURE__ */ new Map(), c = (b, T) => {
    const h = !kt.has(T) && re.get(T);
    if (h) {
      if ((Ye ? "production" : void 0) !== "production" && u.has(b))
        throw new Error("prop listener already exists");
      if (n.size) {
        const P = h[2](s(b));
        u.set(b, [h, P]);
      } else
        u.set(b, [h]);
    }
  }, d = (b) => {
    var T;
    const h = u.get(b);
    h && (u.delete(b), (T = h[1]) == null || T.call(h));
  }, y = (b) => (n.add(b), n.size === 1 && u.forEach(([h, P], D) => {
    if ((Ye ? "production" : void 0) !== "production" && P)
      throw new Error("remove already exists");
    const V = h[2](s(D));
    u.set(D, [h, V]);
  }), () => {
    n.delete(b), n.size === 0 && u.forEach(([h, P], D) => {
      P && (P(), u.set(D, [h]));
    });
  });
  let v = !0;
  const w = Xs(
    () => v,
    c,
    d,
    a
  ), m = Vs(e, w);
  qe.set(e, m);
  const E = [e, l, y];
  return re.set(m, E), Reflect.ownKeys(e).forEach((b) => {
    const T = Object.getOwnPropertyDescriptor(
      e,
      b
    );
    "value" in T && T.writable && (m[b] = e[b]);
  }), v = !1, m;
}
function Qs(e, t, r) {
  const n = re.get(e);
  (Ye ? "production" : void 0) !== "production" && !n && console.warn("Please use proxy object");
  let a;
  const o = [], l = n[2];
  let s = !1;
  const c = l((d) => {
    o.push(d), a || (a = Promise.resolve().then(() => {
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
  return Js(r, n());
}
const Zs = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, el = (e, t) => {
  const r = sn();
  Se(() => {
    r.current = qs(e, t);
  }), Aa(r.current);
}, tl = el, rl = /* @__PURE__ */ new WeakMap();
function Nn(e, t) {
  const n = vt(
    () => e && /* @__PURE__ */ new WeakMap(),
    [e]
  ), a = sn();
  let o = !0;
  const l = Pa(
    ja(
      (u) => {
        const c = Qs(e, u);
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
  }), (Zs ? "production" : void 0) !== "production" && tl(l, n);
  const s = vt(() => /* @__PURE__ */ new WeakMap(), []);
  return Cn(l, n, s, rl);
}
const { Group: nl } = ht, Ve = ({ trueText: e = "是", falseText: t = "否", ...r }) => /* @__PURE__ */ p.jsxs(nl, { ...r, children: [
  /* @__PURE__ */ p.jsx(ht.Button, { value: !0, children: e }),
  /* @__PURE__ */ p.jsx(ht.Button, { value: !1, children: t })
] });
Ve.displayName = "ParentRadioGroup";
const q = $n({
  schemaData: []
}), ne = (e) => e === "object" ? "properties" : e === "array" ? "items" : "", al = (e, t) => {
  const r = (n) => {
    if (!e)
      return n.push(t), !0;
    for (const a of n) {
      const o = ne(a == null ? void 0 : a.type);
      if ((a == null ? void 0 : a.key) === e)
        return ["object", "array"].includes(a == null ? void 0 : a.type) && o && (a == null ? void 0 : a.type) === "array" && (a == null ? void 0 : a.items.length) > 0 && a[o].push(t), !0;
      if (o && a[o] && r(a[o]))
        return !0;
    }
    return !1;
  };
  r(q.schemaData);
}, il = (e, t) => {
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
  r(q.schemaData);
}, ol = (e) => {
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
  t(q.schemaData);
}, sl = (e) => {
  const t = (n) => {
    const a = {}, o = [];
    return n.forEach((l) => {
      var T;
      const { title: s, properties: u = [], items: c, ...d } = l, { is_required: y, rule: v, type: w, description: m, enum: E } = d || {}, b = {};
      if (w && (b.type = w), m && (b.description = m), (Array.isArray(E) && E.length > 0 || It(E)) && (b.enum = E), w === "object" && u) {
        const { result: h, requiredFields: P } = t(u);
        b.properties = h, y && (b.required = P);
      }
      if ((d == null ? void 0 : d.type) === "array" && c.length > 0) {
        const { result: h } = t(c), P = h[(T = c[0]) == null ? void 0 : T.title];
        b.items = P;
      }
      Lr(v) || Object.keys(v).forEach((h) => {
        v[h] && (b[h] = v[h]);
      }), y && o.push(s), s && (a[s] = b);
    }), { result: a, requiredFields: o };
  }, r = {};
  return e.forEach((n) => {
    const { properties: a = [], items: o = [], rule: l, ...s } = n, u = ne(s == null ? void 0 : s.type);
    if (Object.keys(s).forEach((c) => {
      s[c] && !["is_required", "key"].includes(c) && (r[c] = s[c]);
    }), Lr(l) || Object.keys(l).forEach((c) => {
      l[c] && (r[c] = l[c]);
    }), u && (a.length || o.length)) {
      const { result: c, requiredFields: d } = t(n[u]);
      r[u] = c, r.required = d;
    }
  }), r;
}, ll = (e) => {
  const t = ne(e.type), r = (c) => Object.entries(c).map(([d, y], v) => {
    if (!y)
      return {};
    const {
      type: w,
      description: m,
      enum: E,
      properties: b,
      items: T,
      ...h
    } = y || {}, P = {
      title: d,
      key: `schema-1-${v + 1}`,
      is_required: l.includes(d),
      type: w,
      description: m,
      enum: E,
      rule: {
        ...h
      }
    };
    return b && (P.properties = r(b)), T && (P.items = r(T)), P;
  }), { title: n, type: a, description: o, required: l, ...s } = e, u = {
    title: n,
    type: a,
    description: o,
    key: "schema-1"
  };
  return t && (u[t] = e[t] ? r(e[t]) : []), s && (u.rule = {}, Object.keys(s).forEach((c) => {
    s[c] && !["properties", "items"].includes(c) && (u.rule[c] = s[c]);
  })), [u];
}, ul = (e, t = "json") => {
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
function Pe() {
  return Pe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pe.apply(null, arguments);
}
function cl(e) {
  if (Array.isArray(e)) return e;
}
function fl(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, o, l, s = [], u = !0, c = !1;
    try {
      if (o = (r = r.call(e)).next, t !== 0) for (; !(u = (n = o.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (d) {
      c = !0, a = d;
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
function dl(e, t) {
  if (e) {
    if (typeof e == "string") return qr(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? qr(e, t) : void 0;
  }
}
function pl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fn(e, t) {
  return cl(e) || fl(e, t) || dl(e, t) || pl();
}
function ae(e) {
  "@babel/helpers - typeof";
  return ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ae(e);
}
function gl(e, t) {
  if (ae(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ae(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vl(e) {
  var t = gl(e, "string");
  return ae(t) == "symbol" ? t : t + "";
}
function St(e, t, r) {
  return (t = vl(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function yl(e, t) {
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
  var r, n, a = yl(e, t);
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
var hl = Ln.exports;
const ml = /* @__PURE__ */ ka(hl);
function L(e, t) {
  bl(e) && (e = "100%");
  var r = _l(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function bl(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function _l(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Tl(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Fe(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function ft(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function wl(e, t, r) {
  return {
    r: L(e, 255) * 255,
    g: L(t, 255) * 255,
    b: L(r, 255) * 255
  };
}
function dt(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function El(e, t, r) {
  var n, a, o;
  if (e = L(e, 360), t = L(t, 100), r = L(r, 100), t === 0)
    a = r, o = r, n = r;
  else {
    var l = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - l;
    n = dt(s, l, e + 1 / 3), a = dt(s, l, e), o = dt(s, l, e - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: o * 255 };
}
function xl(e, t, r) {
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
function Sl(e, t, r) {
  e = L(e, 360) * 6, t = L(t, 100), r = L(r, 100);
  var n = Math.floor(e), a = e - n, o = r * (1 - t), l = r * (1 - a * t), s = r * (1 - (1 - a) * t), u = n % 6, c = [r, l, o, o, s, r][u], d = [s, r, r, l, o, o][u], y = [o, o, s, r, r, l][u];
  return { r: c * 255, g: d * 255, b: y * 255 };
}
function Ol(e, t, r, n) {
  var a = [
    ft(Math.round(e).toString(16)),
    ft(Math.round(t).toString(16)),
    ft(Math.round(r).toString(16))
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
  return typeof e == "string" && (e = jl(e)), typeof e == "object" && (B(e.r) && B(e.g) && B(e.b) ? (t = wl(e.r, e.g, e.b), l = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : B(e.h) && B(e.s) && B(e.v) ? (n = Fe(e.s), a = Fe(e.v), t = Sl(e.h, n, a), l = !0, s = "hsv") : B(e.h) && B(e.s) && B(e.l) && (n = Fe(e.s), o = Fe(e.l), t = El(e.h, n, o), l = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = Tl(r), {
    ok: l,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var Rl = "[-\\+]?\\d+%?", Pl = "[-\\+]?\\d*\\.\\d+%?", G = "(?:".concat(Pl, ")|(?:").concat(Rl, ")"), pt = "[\\s|\\(]+(".concat(G, ")[,|\\s]+(").concat(G, ")[,|\\s]+(").concat(G, ")\\s*\\)?"), gt = "[\\s|\\(]+(".concat(G, ")[,|\\s]+(").concat(G, ")[,|\\s]+(").concat(G, ")[,|\\s]+(").concat(G, ")\\s*\\)?"), k = {
  CSS_UNIT: new RegExp(G),
  rgb: new RegExp("rgb" + pt),
  rgba: new RegExp("rgba" + gt),
  hsl: new RegExp("hsl" + pt),
  hsla: new RegExp("hsla" + gt),
  hsv: new RegExp("hsv" + pt),
  hsva: new RegExp("hsva" + gt),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function jl(e) {
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
var Me = 2, Vr = 0.16, Cl = 0.05, Al = 0.05, Il = 0.15, kn = 5, Wn = 4, $l = [{
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
  var t = e.r, r = e.g, n = e.b, a = xl(t, r, n);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function Le(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(Ol(t, r, n));
}
function Nl(e, t, r) {
  var n = r / 100, a = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return a;
}
function Jr(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - Me * t : Math.round(e.h) + Me * t : n = r ? Math.round(e.h) + Me * t : Math.round(e.h) - Me * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Xr(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - Vr * t : t === Wn ? n = e.s + Vr : n = e.s + Cl * t, n > 1 && (n = 1), r && t === kn && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Qr(e, t, r) {
  var n;
  return r ? n = e.v + Al * t : n = e.v - Il * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function Dl(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = _e(e), a = kn; a > 0; a -= 1) {
    var o = Gr(n), l = Le(_e({
      h: Jr(o, a, !0),
      s: Xr(o, a, !0),
      v: Qr(o, a, !0)
    }));
    r.push(l);
  }
  r.push(Le(n));
  for (var s = 1; s <= Wn; s += 1) {
    var u = Gr(n), c = Le(_e({
      h: Jr(u, s),
      s: Xr(u, s),
      v: Qr(u, s)
    }));
    r.push(c);
  }
  return t.theme === "dark" ? $l.map(function(d) {
    var y = d.index, v = d.opacity, w = Le(Nl(_e(t.backgroundColor || "#141414"), _e(r[y]), v * 100));
    return w;
  }) : r;
}
var Ot = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Ot.primary = Ot[5];
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
      St(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Fl() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ml(e, t) {
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
var en = "data-rc-order", tn = "data-rc-priority", Ll = "rc-util-key", Rt = /* @__PURE__ */ new Map();
function Hn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Ll;
}
function Wt(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function kl(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Ht(e) {
  return Array.from((Rt.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Bn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Fl())
    return null;
  var r = t.csp, n = t.prepend, a = t.priority, o = a === void 0 ? 0 : a, l = kl(n), s = l === "prependQueue", u = document.createElement("style");
  u.setAttribute(en, l), s && o && u.setAttribute(tn, "".concat(o)), r != null && r.nonce && (u.nonce = r == null ? void 0 : r.nonce), u.innerHTML = e;
  var c = Wt(t), d = c.firstChild;
  if (n) {
    if (s) {
      var y = (t.styles || Ht(c)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(en)))
          return !1;
        var w = Number(v.getAttribute(tn) || 0);
        return o >= w;
      });
      if (y.length)
        return c.insertBefore(u, y[y.length - 1].nextSibling), u;
    }
    c.insertBefore(u, d);
  } else
    c.appendChild(u);
  return u;
}
function Wl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Wt(t);
  return (t.styles || Ht(r)).find(function(n) {
    return n.getAttribute(Hn(t)) === e;
  });
}
function Hl(e, t) {
  var r = Rt.get(e);
  if (!r || !Ml(document, r)) {
    var n = Bn("", t), a = n.parentNode;
    Rt.set(e, a), e.removeChild(n);
  }
}
function Bl(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Wt(r), a = Ht(n), o = H(H({}, r), {}, {
    styles: a
  });
  Hl(n, o);
  var l = Wl(t, o);
  if (l) {
    var s, u;
    if ((s = o.csp) !== null && s !== void 0 && s.nonce && l.nonce !== ((u = o.csp) === null || u === void 0 ? void 0 : u.nonce)) {
      var c;
      l.nonce = (c = o.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return l.innerHTML !== e && (l.innerHTML = e), l;
  }
  var d = Bn(e, o);
  return d.setAttribute(Hn(o), t), d;
}
function Un(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Ul(e) {
  return Un(e) instanceof ShadowRoot;
}
function Yl(e) {
  return Ul(e) ? Un(e) : null;
}
var Pt = {}, Bt = [], ql = function(t) {
  Bt.push(t);
};
function Kl(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Bt.reduce(function(n, a) {
      return a(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function zl(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Bt.reduce(function(n, a) {
      return a(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function Vl() {
  Pt = {};
}
function Yn(e, t, r) {
  !t && !Pt[r] && (e(!1, r), Pt[r] = !0);
}
function Ge(e, t) {
  Yn(Kl, e, t);
}
function Gl(e, t) {
  Yn(zl, e, t);
}
Ge.preMessage = ql;
Ge.resetWarned = Vl;
Ge.noteOnce = Gl;
function Jl(e) {
  return e.replace(/-(.)/g, function(t, r) {
    return r.toUpperCase();
  });
}
function Xl(e, t) {
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
        delete t[r], t[Jl(r)] = n;
    }
    return t;
  }, {});
}
function jt(e, t, r) {
  return r ? /* @__PURE__ */ We.createElement(e.tag, H(H({
    key: t
  }, nn(e.attrs)), r), (e.children || []).map(function(n, a) {
    return jt(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ We.createElement(e.tag, H({
    key: t
  }, nn(e.attrs)), (e.children || []).map(function(n, a) {
    return jt(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function qn(e) {
  return Dl(e)[0];
}
function Kn(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Ql = `
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
`, Zl = function(t) {
  var r = $a(Dn), n = r.csp, a = r.prefixCls, o = Ql;
  a && (o = o.replace(/anticon/g, a)), Se(function() {
    var l = t.current, s = Yl(l);
    Bl(o, "@ant-design-icons", {
      prepend: !0,
      csp: n,
      attachTo: s
    });
  }, []);
}, eu = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], xe = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function tu(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  xe.primaryColor = t, xe.secondaryColor = r || qn(t), xe.calculated = !!r;
}
function ru() {
  return H({}, xe);
}
var pe = function(t) {
  var r = t.icon, n = t.className, a = t.onClick, o = t.style, l = t.primaryColor, s = t.secondaryColor, u = Mn(t, eu), c = Y.useRef(), d = xe;
  if (l && (d = {
    primaryColor: l,
    secondaryColor: s || qn(l)
  }), Zl(c), Xl(rn(r), "icon should be icon definiton, but got ".concat(r)), !rn(r))
    return null;
  var y = r;
  return y && typeof y.icon == "function" && (y = H(H({}, y), {}, {
    icon: y.icon(d.primaryColor, d.secondaryColor)
  })), jt(y.icon, "svg-".concat(y.name), H(H({
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
pe.getTwoToneColors = ru;
pe.setTwoToneColors = tu;
function zn(e) {
  var t = Kn(e), r = Fn(t, 2), n = r[0], a = r[1];
  return pe.setTwoToneColors({
    primaryColor: n,
    secondaryColor: a
  });
}
function nu() {
  var e = pe.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var au = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
zn(Ot.primary);
var je = /* @__PURE__ */ Y.forwardRef(function(e, t) {
  var r = e.className, n = e.icon, a = e.spin, o = e.rotate, l = e.tabIndex, s = e.onClick, u = e.twoToneColor, c = Mn(e, au), d = Y.useContext(Dn), y = d.prefixCls, v = y === void 0 ? "anticon" : y, w = d.rootClassName, m = ml(w, v, St(St({}, "".concat(v, "-").concat(n.name), !!n.name), "".concat(v, "-spin"), !!a || n.name === "loading"), r), E = l;
  E === void 0 && s && (E = -1);
  var b = o ? {
    msTransform: "rotate(".concat(o, "deg)"),
    transform: "rotate(".concat(o, "deg)")
  } : void 0, T = Kn(u), h = Fn(T, 2), P = h[0], D = h[1];
  return /* @__PURE__ */ Y.createElement("span", Pe({
    role: "img",
    "aria-label": n.name
  }, c, {
    ref: t,
    tabIndex: E,
    onClick: s,
    className: m
  }), /* @__PURE__ */ Y.createElement(pe, {
    icon: n,
    primaryColor: P,
    secondaryColor: D,
    style: b
  }));
});
je.displayName = "AntdIcon";
je.getTwoToneColor = nu;
je.setTwoToneColor = zn;
var iu = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] }, name: "delete", theme: "outlined" }, ou = function(t, r) {
  return /* @__PURE__ */ Y.createElement(je, Pe({}, t, {
    ref: r,
    icon: iu
  }));
}, Vn = /* @__PURE__ */ Y.forwardRef(ou);
process.env.NODE_ENV !== "production" && (Vn.displayName = "DeleteOutlined");
var su = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { tag: "path", attrs: { d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, name: "plus", theme: "outlined" }, lu = function(t, r) {
  return /* @__PURE__ */ Y.createElement(je, Pe({}, t, {
    ref: r,
    icon: su
  }));
}, Ut = /* @__PURE__ */ Y.forwardRef(lu);
process.env.NODE_ENV !== "production" && (Ut.displayName = "PlusOutlined");
const an = (e) => {
  const { handleIndex: t, deleteText: r = "删除", addText: n = "添加", onDel: a, onAdd: o, showRemoveBtn: l } = e;
  return /* @__PURE__ */ p.jsx(I.Item, { children: /* @__PURE__ */ p.jsxs(yt, { children: [
    (It(l) ? l : kr(t) && t > 0 || !kr(t)) && /* @__PURE__ */ p.jsx(vr, { title: r, children: /* @__PURE__ */ p.jsx(ue, { icon: /* @__PURE__ */ p.jsx(Vn, {}), shape: "circle", danger: !0, onClick: () => a == null ? void 0 : a() }) }),
    /* @__PURE__ */ p.jsx(vr, { title: n, children: /* @__PURE__ */ p.jsx(ue, { icon: /* @__PURE__ */ p.jsx(Ut, {}), shape: "circle", onClick: () => o == null ? void 0 : o() }) })
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
  return /* @__PURE__ */ p.jsx(I.List, { name: t, children: (c, { add: d, remove: y }) => /* @__PURE__ */ p.jsxs(I.Item, { label: r, ...a, children: [
    c.map(({ key: v, ...w }, m) => /* @__PURE__ */ p.jsxs(Da, { gutter: 15, ...s, children: [
      /* @__PURE__ */ p.jsx(yr, { span: 20, children: /* @__PURE__ */ p.jsx(I.Item, { ...w, children: /* @__PURE__ */ p.jsx(n, {}) }) }),
      /* @__PURE__ */ p.jsx(yr, { span: 4, children: /* @__PURE__ */ p.jsx(
        an,
        {
          deleteText: `删除${r}`,
          addText: `添加${r}`,
          onDel: () => {
            y(m);
          },
          onAdd: () => u(d),
          ...o
        }
      ) })
    ] }, `${v}-${m}`)),
    !c.length && /* @__PURE__ */ p.jsx(
      an,
      {
        deleteText: `删除${r}`,
        addText: `添加${r}`,
        showRemoveBtn: !1,
        onAdd: () => u(d),
        ...o
      }
    )
  ] }) });
}, uu = ({ children: e, onClick: t, btnText: r = "添加一条" }) => /* @__PURE__ */ p.jsxs("div", { className: "add-row-button-container", children: [
  /* @__PURE__ */ p.jsx(ue, { size: "small", type: "text", icon: /* @__PURE__ */ p.jsx(Ut, {}), onClick: t, children: r }),
  e
] }), cu = ({ value: e, onChange: t }) => /* @__PURE__ */ p.jsx(Ct, { placeholder: "请输入枚举值", value: e, onChange: t, style: { width: "100%" } }), fu = ({
  value: e,
  onChange: t
}) => /* @__PURE__ */ p.jsx(Ct, { placeholder: "请输入枚举值", value: e, onChange: t, step: 1, style: { width: "100%" } }), du = ({ type: e }) => {
  const t = vt(() => cn[e] || [], [e]), r = ({ validateType: a, validateLabel: o }) => ["number", "integer"].includes(a) ? /* @__PURE__ */ p.jsx(Ct, { placeholder: `请输入${o}`, style: { width: "100%" } }) : a === "boolean" ? /* @__PURE__ */ p.jsx(Ve, {}) : /* @__PURE__ */ p.jsx(ke, { placeholder: `请输入${o}` }), n = e !== "boolean" && t.length === 0;
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    t == null ? void 0 : t.map((a, o) => /* @__PURE__ */ p.jsx(I.Item, { name: ["rule", `${a == null ? void 0 : a.validateName}`], children: r(a) }, `${a}-${o}`)),
    n && /* @__PURE__ */ p.jsx(Ma, { message: "请先选择参数类型，选择参数类型后会自动匹配相应规则!" }),
    e === "boolean" && /* @__PURE__ */ p.jsx(La, { description: "说明：布尔值没有相关规则" })
  ] });
}, pu = ({ type: e }) => e === "boolean" ? /* @__PURE__ */ p.jsx(I.Item, { name: "enum", label: "枚举值", children: /* @__PURE__ */ p.jsx(Ve, { trueText: "true", falseText: "false" }) }) : e === "string" ? /* @__PURE__ */ p.jsx(I.Item, { name: "enum", label: "枚举值", help: /* @__PURE__ */ p.jsx(p.Fragment, { children: "温馨提示: 输入枚举值需要按下enter键确定" }), children: /* @__PURE__ */ p.jsx(
  un,
  {
    mode: "tags",
    allowClear: !0,
    placeholder: "请输入枚举值并按下enter键确定"
  }
) }) : e === "number" ? /* @__PURE__ */ p.jsx(on, { listFormItemLabel: "枚举值", listField: "enum", FormListItemComponent: cu }) : e === "integer" ? /* @__PURE__ */ p.jsx(
  on,
  {
    listFormItemLabel: "枚举值",
    listField: "enum",
    FormListItemComponent: fu
  }
) : null, Gn = ({
  tableData: e,
  addKey: t = "schema",
  isRoot: r
}) => {
  const [n, a] = it(!1), [o, l] = it(!1), [s, u] = it(!1), [c] = I.useForm(), d = (m) => {
    ol(m);
  }, y = () => {
    a(!0), u(!1);
  }, v = Ms({
    removeRow: d,
    editRow(m) {
      c.setFieldsValue({ ...m }), a(!0), u(!0);
    },
    isRoot: r
  }), w = async () => {
    const { key: m, ...E } = await c.validateFields(), b = { ...E };
    if (["object", "array"].includes(E.type)) {
      const T = ne(E == null ? void 0 : E.type);
      b[T] = [];
    }
    s ? il(m, b) : al(
      r ? "" : t,
      {
        key: `${t}-${e.length + 1}`,
        ...b
      }
    ), a(!1), c.resetFields();
  };
  return Se(() => {
    if (!r) {
      const m = q.schemaData, E = m == null ? void 0 : m.findIndex((b) => b.type === "array");
      l(E > -1 && m[E].items.length > 0);
    }
  }, [e]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      Fa,
      {
        dataSource: e,
        columns: v,
        scroll: {
          y: 500,
          x: 1600
        },
        bordered: !1,
        footer: () => r && e.length > 0 || o ? null : /* @__PURE__ */ p.jsx(uu, { onClick: y }),
        expandable: {
          expandedRowRender: (m) => /* @__PURE__ */ p.jsx(
            Gn,
            {
              tableData: m.properties,
              addKey: m.key
            }
          ),
          rowExpandable: (m) => {
            const E = ne(m == null ? void 0 : m.type);
            return !!(["object", "array"].includes(m == null ? void 0 : m.type) && Array.isArray(m[E]));
          }
        }
      }
    ),
    /* @__PURE__ */ p.jsx(
      ln,
      {
        title: `${s ? "编辑" : "新增"}参数`,
        open: n,
        onOk: w,
        onCancel: () => {
          a(!1), c.resetFields();
        },
        style: {
          minWidth: 700
        },
        children: /* @__PURE__ */ p.jsxs(I, { form: c, labelCol: { span: 3 }, children: [
          /* @__PURE__ */ p.jsx(I.Item, { name: "key", label: "参数key", style: { display: "none" }, children: /* @__PURE__ */ p.jsx(ke, {}) }),
          /* @__PURE__ */ p.jsx(I.Item, { name: "title", label: "参数名", rules: [{ required: !0 }], children: /* @__PURE__ */ p.jsx(ke, { placeholder: "请输入参数名" }) }),
          /* @__PURE__ */ p.jsx(I.Item, { name: "type", label: "参数类型", rules: [{ required: !0 }], children: /* @__PURE__ */ p.jsx(un, { options: Ba, placeholder: "请选择参数类型" }) }),
          /* @__PURE__ */ p.jsx(I.Item, { name: "description", label: "参数描述", rules: [{ required: !0 }], children: /* @__PURE__ */ p.jsx(ke, { placeholder: "请输入参数描述" }) }),
          !r && /* @__PURE__ */ p.jsx(I.Item, { name: "is_required", label: "是否必填", rules: [{ required: !0 }], children: /* @__PURE__ */ p.jsx(Ve, { placeholder: "请选择是否必填" }) }),
          /* @__PURE__ */ p.jsx(I.Item, { shouldUpdate: !0, noStyle: !0, children: ({ getFieldValue: m }) => /* @__PURE__ */ p.jsx(pu, { type: m("type") }) }),
          /* @__PURE__ */ p.jsx(I.Item, { label: "规则", shouldUpdate: !0, children: ({ getFieldValue: m }) => /* @__PURE__ */ p.jsx(du, { type: m("type") }) })
        ] })
      }
    )
  ] });
}, gu = ({ stateKey: e }) => {
  const t = Nn(q);
  return /* @__PURE__ */ p.jsx(Gn, { tableData: t.schemaData, addKey: "schema", isRoot: !0 });
}, hu = ({ value: e, onChange: t }) => {
  const r = Nn(q), n = (a) => {
    let o;
    a.length > 0 && (o = sl(a), t == null || t(JSON.stringify(o)));
  };
  return Se(() => {
    n(q.schemaData);
  }, [r]), Se(() => {
    if (e && js(e)) {
      const a = ul(e);
      if (a) {
        const o = ll(a);
        Ds(q.schemaData, o) || (q.schemaData = o);
      }
    }
  }, [e]), /* @__PURE__ */ p.jsx(gu, {});
};
export {
  hu as EwJSONSchemaEditVisual
};

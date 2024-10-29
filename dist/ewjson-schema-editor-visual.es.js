import * as Y from "react";
import We, { useMemo as vt, useRef as sn, useSyncExternalStore as Pa, useCallback as ja, useLayoutEffect as Ca, useEffect as Se, useDebugValue as Aa, createContext as Ia, useContext as $a, useState as it } from "react";
import { Button as ue, Space as yt, Card as vr, Modal as ln, Descriptions as Na, Radio as ht, Form as N, Tooltip as yr, Row as Da, Col as hr, Table as Fa, Input as ke, Select as un, Alert as Ma, Empty as La, InputNumber as At } from "antd";
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
var mr;
function Wa() {
  if (mr) return he;
  mr = 1;
  var e = We, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, u, c) {
    var d, v = {}, p = null, E = null;
    c !== void 0 && (p = "" + c), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (E = u.ref);
    for (d in u) n.call(u, d) && !o.hasOwnProperty(d) && (v[d] = u[d]);
    if (l && l.defaultProps) for (d in u = l.defaultProps, u) v[d] === void 0 && (v[d] = u[d]);
    return { $$typeof: t, type: l, key: p, ref: E, props: v, _owner: a.current };
  }
  return he.Fragment = r, he.jsx = s, he.jsxs = s, he;
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
var br;
function Ha() {
  return br || (br = 1, process.env.NODE_ENV !== "production" && function() {
    var e = We, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), m = Symbol.iterator, w = "@@iterator";
    function b(i) {
      if (i === null || typeof i != "object")
        return null;
      var f = m && i[m] || i[w];
      return typeof f == "function" ? f : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(i) {
      {
        for (var f = arguments.length, y = new Array(f > 1 ? f - 1 : 0), _ = 1; _ < f; _++)
          y[_ - 1] = arguments[_];
        P("error", i, y);
      }
    }
    function P(i, f, y) {
      {
        var _ = T.ReactDebugCurrentFrame, O = _.getStackAddendum();
        O !== "" && (f += "%s", y = y.concat([O]));
        var R = y.map(function(S) {
          return String(S);
        });
        R.unshift("Warning: " + f), Function.prototype.apply.call(console[i], console, R);
      }
    }
    var I = !1, $ = !1, Jn = !1, Xn = !1, Qn = !1, Yt;
    Yt = Symbol.for("react.module.reference");
    function Zn(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === n || i === o || Qn || i === a || i === c || i === d || Xn || i === E || I || $ || Jn || typeof i == "object" && i !== null && (i.$$typeof === p || i.$$typeof === v || i.$$typeof === s || i.$$typeof === l || i.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === Yt || i.getModuleId !== void 0));
    }
    function ea(i, f, y) {
      var _ = i.displayName;
      if (_)
        return _;
      var O = f.displayName || f.name || "";
      return O !== "" ? y + "(" + O + ")" : y;
    }
    function qt(i) {
      return i.displayName || "Context";
    }
    function H(i) {
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
          case l:
            var f = i;
            return qt(f) + ".Consumer";
          case s:
            var y = i;
            return qt(y._context) + ".Provider";
          case u:
            return ea(i, i.render, "ForwardRef");
          case v:
            var _ = i.displayName || null;
            return _ !== null ? _ : H(i.type) || "Memo";
          case p: {
            var O = i, R = O._payload, S = O._init;
            try {
              return H(S(R));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, ge = 0, Vt, zt, Gt, Jt, Xt, Qt, Zt;
    function er() {
    }
    er.__reactDisabledLog = !0;
    function ta() {
      {
        if (ge === 0) {
          Vt = console.log, zt = console.info, Gt = console.warn, Jt = console.error, Xt = console.group, Qt = console.groupCollapsed, Zt = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: er,
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
              value: Vt
            }),
            info: Z({}, i, {
              value: zt
            }),
            warn: Z({}, i, {
              value: Gt
            }),
            error: Z({}, i, {
              value: Jt
            }),
            group: Z({}, i, {
              value: Xt
            }),
            groupCollapsed: Z({}, i, {
              value: Qt
            }),
            groupEnd: Z({}, i, {
              value: Zt
            })
          });
        }
        ge < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Je = T.ReactCurrentDispatcher, Xe;
    function Ce(i, f, y) {
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
    function tr(i, f) {
      if (!i || Qe)
        return "";
      {
        var y = Ae.get(i);
        if (y !== void 0)
          return y;
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
            } catch (F) {
              _ = F;
            }
            Reflect.construct(i, [], S);
          } else {
            try {
              S.call();
            } catch (F) {
              _ = F;
            }
            i.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            _ = F;
          }
          i();
        }
      } catch (F) {
        if (F && _ && typeof F.stack == "string") {
          for (var x = F.stack.split(`
`), D = _.stack.split(`
`), C = x.length - 1, A = D.length - 1; C >= 1 && A >= 0 && x[C] !== D[A]; )
            A--;
          for (; C >= 1 && A >= 0; C--, A--)
            if (x[C] !== D[A]) {
              if (C !== 1 || A !== 1)
                do
                  if (C--, A--, A < 0 || x[C] !== D[A]) {
                    var L = `
` + x[C].replace(" at new ", " at ");
                    return i.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", i.displayName)), typeof i == "function" && Ae.set(i, L), L;
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
    function aa(i, f, y) {
      return tr(i, !1);
    }
    function ia(i) {
      var f = i.prototype;
      return !!(f && f.isReactComponent);
    }
    function Ie(i, f, y) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return tr(i, ia(i));
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
          case v:
            return Ie(i.type, f, y);
          case p: {
            var _ = i, O = _._payload, R = _._init;
            try {
              return Ie(R(O), f, y);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, rr = {}, nr = T.ReactDebugCurrentFrame;
    function $e(i) {
      if (i) {
        var f = i._owner, y = Ie(i.type, i._source, f ? f.type : null);
        nr.setExtraStackFrame(y);
      } else
        nr.setExtraStackFrame(null);
    }
    function oa(i, f, y, _, O) {
      {
        var R = Function.call.bind(ve);
        for (var S in i)
          if (R(i, S)) {
            var x = void 0;
            try {
              if (typeof i[S] != "function") {
                var D = Error((_ || "React class") + ": " + y + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw D.name = "Invariant Violation", D;
              }
              x = i[S](f, S, _, y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              x = C;
            }
            x && !(x instanceof Error) && ($e(O), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", y, S, typeof x), $e(null)), x instanceof Error && !(x.message in rr) && (rr[x.message] = !0, $e(O), h("Failed %s type: %s", y, x.message), $e(null));
          }
      }
    }
    var sa = Array.isArray;
    function Ze(i) {
      return sa(i);
    }
    function la(i) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, y = f && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return y;
      }
    }
    function ua(i) {
      try {
        return ar(i), !1;
      } catch {
        return !0;
      }
    }
    function ar(i) {
      return "" + i;
    }
    function ir(i) {
      if (ua(i))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", la(i)), ar(i);
    }
    var ye = T.ReactCurrentOwner, ca = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, or, sr, et;
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
        var y = H(ye.current.type);
        et[y] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(ye.current.type), i.ref), et[y] = !0);
      }
    }
    function ga(i, f) {
      {
        var y = function() {
          or || (or = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        y.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: y,
          configurable: !0
        });
      }
    }
    function va(i, f) {
      {
        var y = function() {
          sr || (sr = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        y.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: y,
          configurable: !0
        });
      }
    }
    var ya = function(i, f, y, _, O, R, S) {
      var x = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: f,
        ref: y,
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
    function ha(i, f, y, _, O) {
      {
        var R, S = {}, x = null, D = null;
        y !== void 0 && (ir(y), x = "" + y), da(f) && (ir(f.key), x = "" + f.key), fa(f) && (D = f.ref, pa(f, O));
        for (R in f)
          ve.call(f, R) && !ca.hasOwnProperty(R) && (S[R] = f[R]);
        if (i && i.defaultProps) {
          var C = i.defaultProps;
          for (R in C)
            S[R] === void 0 && (S[R] = C[R]);
        }
        if (x || D) {
          var A = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          x && ga(S, A), D && va(S, A);
        }
        return ya(i, x, D, O, _, ye.current, S);
      }
    }
    var tt = T.ReactCurrentOwner, lr = T.ReactDebugCurrentFrame;
    function se(i) {
      if (i) {
        var f = i._owner, y = Ie(i.type, i._source, f ? f.type : null);
        lr.setExtraStackFrame(y);
      } else
        lr.setExtraStackFrame(null);
    }
    var rt;
    rt = !1;
    function nt(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function ur() {
      {
        if (tt.current) {
          var i = H(tt.current.type);
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
    var cr = {};
    function ba(i) {
      {
        var f = ur();
        if (!f) {
          var y = typeof i == "string" ? i : i.displayName || i.name;
          y && (f = `

Check the top-level render call using <` + y + ">.");
        }
        return f;
      }
    }
    function fr(i, f) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var y = ba(f);
        if (cr[y])
          return;
        cr[y] = !0;
        var _ = "";
        i && i._owner && i._owner !== tt.current && (_ = " It was passed a child from " + H(i._owner.type) + "."), se(i), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', y, _), se(null);
      }
    }
    function dr(i, f) {
      {
        if (typeof i != "object")
          return;
        if (Ze(i))
          for (var y = 0; y < i.length; y++) {
            var _ = i[y];
            nt(_) && fr(_, f);
          }
        else if (nt(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var O = b(i);
          if (typeof O == "function" && O !== i.entries)
            for (var R = O.call(i), S; !(S = R.next()).done; )
              nt(S.value) && fr(S.value, f);
        }
      }
    }
    function _a(i) {
      {
        var f = i.type;
        if (f == null || typeof f == "string")
          return;
        var y;
        if (typeof f == "function")
          y = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === v))
          y = f.propTypes;
        else
          return;
        if (y) {
          var _ = H(f);
          oa(y, i.props, "prop", _, i);
        } else if (f.PropTypes !== void 0 && !rt) {
          rt = !0;
          var O = H(f);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", O || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ta(i) {
      {
        for (var f = Object.keys(i.props), y = 0; y < f.length; y++) {
          var _ = f[y];
          if (_ !== "children" && _ !== "key") {
            se(i), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), se(null);
            break;
          }
        }
        i.ref !== null && (se(i), h("Invalid attribute `ref` supplied to `React.Fragment`."), se(null));
      }
    }
    var pr = {};
    function gr(i, f, y, _, O, R) {
      {
        var S = Zn(i);
        if (!S) {
          var x = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var D = ma();
          D ? x += D : x += ur();
          var C;
          i === null ? C = "null" : Ze(i) ? C = "array" : i !== void 0 && i.$$typeof === t ? (C = "<" + (H(i.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : C = typeof i, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, x);
        }
        var A = ha(i, f, y, O, R);
        if (A == null)
          return A;
        if (S) {
          var L = f.children;
          if (L !== void 0)
            if (_)
              if (Ze(L)) {
                for (var le = 0; le < L.length; le++)
                  dr(L[le], i);
                Object.freeze && Object.freeze(L);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              dr(L, i);
        }
        if (ve.call(f, "key")) {
          var ee = H(i), F = Object.keys(f).filter(function(Ra) {
            return Ra !== "key";
          }), at = F.length > 0 ? "{key: someKey, " + F.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!pr[ee + at]) {
            var Oa = F.length > 0 ? "{" + F.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, at, ee, Oa, ee), pr[ee + at] = !0;
          }
        }
        return i === n ? Ta(A) : _a(A), A;
      }
    }
    function wa(i, f, y) {
      return gr(i, f, y, !0);
    }
    function Ea(i, f, y) {
      return gr(i, f, y, !1);
    }
    var xa = Ea, Sa = wa;
    me.Fragment = n, me.jsx = xa, me.jsxs = Sa;
  }()), me;
}
process.env.NODE_ENV === "production" ? mt.exports = Wa() : mt.exports = Ha();
var g = mt.exports;
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
      validateName: "maxLength",
      validateType: "integer",
      validateLabel: "指定字符串的最大长度"
    },
    {
      validateName: "minLength",
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
}, Ka = ["规则名", "规则值", "规则说明"];
var fn = typeof global == "object" && global && global.Object === Object && global, Ua = typeof self == "object" && self && self.Object === Object && self, V = fn || Ua || Function("return this")(), ce = V.Symbol, dn = Object.prototype, Ya = dn.hasOwnProperty, qa = dn.toString, be = ce ? ce.toStringTag : void 0;
function Va(e) {
  var t = Ya.call(e, be), r = e[be];
  try {
    e[be] = void 0;
    var n = !0;
  } catch {
  }
  var a = qa.call(e);
  return n && (t ? e[be] = r : delete e[be]), a;
}
var za = Object.prototype, Ga = za.toString;
function Ja(e) {
  return Ga.call(e);
}
var Xa = "[object Null]", Qa = "[object Undefined]", _r = ce ? ce.toStringTag : void 0;
function Q(e) {
  return e == null ? e === void 0 ? Qa : Xa : _r && _r in Object(e) ? Va(e) : Ja(e);
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
var ot = V["__core-js_shared__"], Tr = function() {
  var e = /[^.]+$/.exec(ot && ot.keys && ot.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ni(e) {
  return !!Tr && Tr in e;
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
var bt = de(V, "WeakMap"), vi = 9007199254740991, yi = /^(?:0|[1-9]\d*)$/;
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
function wr(e) {
  return X(e) && Q(e) == Ti;
}
var bn = Object.prototype, wi = bn.hasOwnProperty, Ei = bn.propertyIsEnumerable, _n = wr(/* @__PURE__ */ function() {
  return arguments;
}()) ? wr : function(e) {
  return X(e) && wi.call(e, "callee") && !Ei.call(e, "callee");
};
function xi() {
  return !1;
}
var Tn = typeof exports == "object" && exports && !exports.nodeType && exports, Er = Tn && typeof module == "object" && module && !module.nodeType && module, Si = Er && Er.exports === Tn, xr = Si ? V.Buffer : void 0, Oi = xr ? xr.isBuffer : void 0, He = Oi || xi, Ri = "[object Arguments]", Pi = "[object Array]", ji = "[object Boolean]", Ci = "[object Date]", Ai = "[object Error]", Ii = "[object Function]", $i = "[object Map]", Ni = "[object Number]", Di = "[object Object]", Fi = "[object RegExp]", Mi = "[object Set]", Li = "[object String]", ki = "[object WeakMap]", Wi = "[object ArrayBuffer]", Hi = "[object DataView]", Bi = "[object Float32Array]", Ki = "[object Float64Array]", Ui = "[object Int8Array]", Yi = "[object Int16Array]", qi = "[object Int32Array]", Vi = "[object Uint8Array]", zi = "[object Uint8ClampedArray]", Gi = "[object Uint16Array]", Ji = "[object Uint32Array]", j = {};
j[Bi] = j[Ki] = j[Ui] = j[Yi] = j[qi] = j[Vi] = j[zi] = j[Gi] = j[Ji] = !0;
j[Ri] = j[Pi] = j[Wi] = j[ji] = j[Hi] = j[Ci] = j[Ai] = j[Ii] = j[$i] = j[Ni] = j[Di] = j[Fi] = j[Mi] = j[Li] = j[ki] = !1;
function Xi(e) {
  return X(e) && yn(e.length) && !!j[Q(e)];
}
function Qi(e) {
  return function(t) {
    return e(t);
  };
}
var wn = typeof exports == "object" && exports && !exports.nodeType && exports, we = wn && typeof module == "object" && module && !module.nodeType && module, Zi = we && we.exports === wn, st = Zi && fn.process, Sr = function() {
  try {
    var e = we && we.require && we.require("util").types;
    return e || st && st.binding && st.binding("util");
  } catch {
  }
}(), Or = Sr && Sr.isTypedArray, It = Or ? Qi(Or) : Xi, eo = Object.prototype, to = eo.hasOwnProperty;
function ro(e, t) {
  var r = fe(e), n = !r && _n(e), a = !r && !n && He(e), o = !r && !n && !a && It(e), s = r || n || a || o, l = s ? _i(e.length, String) : [], u = l.length;
  for (var c in e)
    to.call(e, c) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    hi(c, u))) && l.push(c);
  return l;
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
function qe(e, t) {
  for (var r = e.length; r--; )
    if (vn(e[r][0], t))
      return r;
  return -1;
}
var To = Array.prototype, wo = To.splice;
function Eo(e) {
  var t = this.__data__, r = qe(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : wo.call(t, r, 1), --this.size, !0;
}
function xo(e) {
  var t = this.__data__, r = qe(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function So(e) {
  return qe(this.__data__, e) > -1;
}
function Oo(e, t) {
  var r = this.__data__, n = qe(r, e);
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
var Re = de(V, "Map");
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
function Ve(e, t) {
  var r = e.__data__;
  return Po(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function jo(e) {
  var t = Ve(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Co(e) {
  return Ve(this, e).get(e);
}
function Ao(e) {
  return Ve(this, e).has(e);
}
function Io(e, t) {
  var r = Ve(this, e), n = r.size;
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
    var s = e[r];
    t(s, r, e) && (o[a++] = s);
  }
  return o;
}
function Ho() {
  return [];
}
var Bo = Object.prototype, Ko = Bo.propertyIsEnumerable, Rr = Object.getOwnPropertySymbols, Uo = Rr ? function(e) {
  return e == null ? [] : (e = Object(e), Wo(Rr(e), function(t) {
    return Ko.call(e, t);
  }));
} : Ho;
function Yo(e, t, r) {
  var n = t(e);
  return fe(e) ? n : $o(n, r(e));
}
function Pr(e) {
  return Yo(e, so, Uo);
}
var _t = de(V, "DataView"), Tt = de(V, "Promise"), wt = de(V, "Set"), jr = "[object Map]", qo = "[object Object]", Cr = "[object Promise]", Ar = "[object Set]", Ir = "[object WeakMap]", $r = "[object DataView]", Vo = ie(_t), zo = ie(Re), Go = ie(Tt), Jo = ie(wt), Xo = ie(bt), U = Q;
(_t && U(new _t(new ArrayBuffer(1))) != $r || Re && U(new Re()) != jr || Tt && U(Tt.resolve()) != Cr || wt && U(new wt()) != Ar || bt && U(new bt()) != Ir) && (U = function(e) {
  var t = Q(e), r = t == qo ? e.constructor : void 0, n = r ? ie(r) : "";
  if (n)
    switch (n) {
      case Vo:
        return $r;
      case zo:
        return jr;
      case Go:
        return Cr;
      case Jo:
        return Ar;
      case Xo:
        return Ir;
    }
  return t;
});
var Nr = V.Uint8Array, Qo = "__lodash_hash_undefined__";
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
  var s = r & ns, l = e.length, u = t.length;
  if (l != u && !(s && u > l))
    return !1;
  var c = o.get(e), d = o.get(t);
  if (c && d)
    return c == t && d == e;
  var v = -1, p = !0, E = r & as ? new Be() : void 0;
  for (o.set(e, t), o.set(t, e); ++v < l; ) {
    var m = e[v], w = t[v];
    if (n)
      var b = s ? n(w, m, v, t, e, o) : n(m, w, v, e, t, o);
    if (b !== void 0) {
      if (b)
        continue;
      p = !1;
      break;
    }
    if (E) {
      if (!ts(t, function(T, h) {
        if (!rs(E, h) && (m === T || a(m, T, r, n, o)))
          return E.push(h);
      })) {
        p = !1;
        break;
      }
    } else if (!(m === w || a(m, w, r, n, o))) {
      p = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), p;
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
var ss = 1, ls = 2, us = "[object Boolean]", cs = "[object Date]", fs = "[object Error]", ds = "[object Map]", ps = "[object Number]", gs = "[object RegExp]", vs = "[object Set]", ys = "[object String]", hs = "[object Symbol]", ms = "[object ArrayBuffer]", bs = "[object DataView]", Dr = ce ? ce.prototype : void 0, lt = Dr ? Dr.valueOf : void 0;
function _s(e, t, r, n, a, o, s) {
  switch (r) {
    case bs:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case ms:
      return !(e.byteLength != t.byteLength || !o(new Nr(e), new Nr(t)));
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
      var l = is;
    case vs:
      var u = n & ss;
      if (l || (l = os), e.size != t.size && !u)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      n |= ls, s.set(e, t);
      var d = xn(l(e), l(t), n, a, o, s);
      return s.delete(e), d;
    case hs:
      if (lt)
        return lt.call(e) == lt.call(t);
  }
  return !1;
}
var Ts = 1, ws = Object.prototype, Es = ws.hasOwnProperty;
function xs(e, t, r, n, a, o) {
  var s = r & Ts, l = Pr(e), u = l.length, c = Pr(t), d = c.length;
  if (u != d && !s)
    return !1;
  for (var v = u; v--; ) {
    var p = l[v];
    if (!(s ? p in t : Es.call(t, p)))
      return !1;
  }
  var E = o.get(e), m = o.get(t);
  if (E && m)
    return E == t && m == e;
  var w = !0;
  o.set(e, t), o.set(t, e);
  for (var b = s; ++v < u; ) {
    p = l[v];
    var T = e[p], h = t[p];
    if (n)
      var P = s ? n(h, T, p, t, e, o) : n(T, h, p, e, t, o);
    if (!(P === void 0 ? T === h || a(T, h, r, n, o) : P)) {
      w = !1;
      break;
    }
    b || (b = p == "constructor");
  }
  if (w && !b) {
    var I = e.constructor, $ = t.constructor;
    I != $ && "constructor" in e && "constructor" in t && !(typeof I == "function" && I instanceof I && typeof $ == "function" && $ instanceof $) && (w = !1);
  }
  return o.delete(e), o.delete(t), w;
}
var Ss = 1, Fr = "[object Arguments]", Mr = "[object Array]", Ne = "[object Object]", Os = Object.prototype, Lr = Os.hasOwnProperty;
function Rs(e, t, r, n, a, o) {
  var s = fe(e), l = fe(t), u = s ? Mr : U(e), c = l ? Mr : U(t);
  u = u == Fr ? Ne : u, c = c == Fr ? Ne : c;
  var d = u == Ne, v = c == Ne, p = u == c;
  if (p && He(e)) {
    if (!He(t))
      return !1;
    s = !0, d = !1;
  }
  if (p && !d)
    return o || (o = new J()), s || It(e) ? xn(e, t, r, n, a, o) : _s(e, t, u, r, n, a, o);
  if (!(r & Ss)) {
    var E = d && Lr.call(e, "__wrapped__"), m = v && Lr.call(t, "__wrapped__");
    if (E || m) {
      var w = E ? e.value() : e, b = m ? t.value() : t;
      return o || (o = new J()), a(w, b, r, n, o);
    }
  }
  return p ? (o || (o = new J()), xs(e, t, r, n, a, o)) : !1;
}
function Sn(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !X(e) && !X(t) ? e !== e && t !== t : Rs(e, t, r, n, Sn, a);
}
var Ps = "[object String]";
function js(e) {
  return typeof e == "string" || !fe(e) && X(e) && Q(e) == Ps;
}
var Cs = "[object Boolean]";
function $t(e) {
  return e === !0 || e === !1 || X(e) && Q(e) == Cs;
}
var As = "[object Map]", Is = "[object Set]", $s = Object.prototype, Ns = $s.hasOwnProperty;
function Et(e) {
  if (e == null)
    return !0;
  if (hn(e) && (fe(e) || typeof e == "string" || typeof e.splice == "function" || He(e) || It(e) || _n(e)))
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
        return $t(a) ? a ? "是" : "否" : "-";
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
        const s = () => {
          const l = o == null ? void 0 : o.type, c = (cn[l] || []).map((d) => ({
            label: `参数类型:${o.type}`,
            children: /* @__PURE__ */ g.jsx(vr, { hoverable: !0, title: "详细规则", children: /* @__PURE__ */ g.jsx(yt, { children: Ka.map((v, p) => /* @__PURE__ */ g.jsxs(vr, { title: v, children: [
              p === 0 && d.validateName,
              p === 1 && a[d.validateName],
              p === 2 && d.validateLabel
            ] }, `${v}-${p}`)) }) })
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
        return /* @__PURE__ */ g.jsx(ue, { onClick: s, type: "primary", children: "查看规则详情" });
      }
    },
    {
      title: "操作",
      dataIndex: "op",
      fixed: "right",
      width: 200,
      render: (a, o) => /* @__PURE__ */ g.jsxs(yt, { children: [
        /* @__PURE__ */ g.jsx(ue, { onClick: () => t == null ? void 0 : t(o), type: "primary", children: "编辑" }),
        /* @__PURE__ */ g.jsx(ue, { onClick: () => e == null ? void 0 : e(o.key), type: "primary", danger: !0, children: "删除" })
      ] })
    }
  ];
  return r ? n.filter((a) => a.dataIndex !== "is_required") : n;
}, Ls = Symbol(), Nt = Symbol(), Te = "a", On = "f", Wr = "p", Rn = "c", Pn = "t", ut = "n", ct = "g", Dt = "h", Ee = "w", Ft = "o", Mt = "k";
let ks = (e, t) => new Proxy(e, t);
const xt = Object.getPrototypeOf, St = /* @__PURE__ */ new WeakMap(), jn = (e) => e && (St.has(e) ? St.get(e) : xt(e) === Object.prototype || xt(e) === Array.prototype), Ke = (e) => typeof e == "object" && e !== null, Ws = (e) => Object.values(Object.getOwnPropertyDescriptors(e)).some((t) => !t.configurable && !t.writable), Hs = (e) => {
  if (Array.isArray(e))
    return Array.from(e);
  const t = Object.getOwnPropertyDescriptors(e);
  return Object.values(t).forEach((r) => {
    r.configurable = !0;
  }), Object.create(xt(e), t);
}, Bs = (e, t) => {
  const r = {
    [On]: t
  };
  let n = !1;
  const a = (l, u) => {
    if (!n) {
      let c = r[Te].get(e);
      if (c || (c = {}, r[Te].set(e, c)), l === Ee)
        c[Ee] = !0;
      else {
        let d = c[l];
        d || (d = /* @__PURE__ */ new Set(), c[l] = d), d.add(u);
      }
    }
  }, o = () => {
    n = !0, r[Te].delete(e);
  }, s = {
    get(l, u) {
      return u === Nt ? e : (a(Mt, u), Cn(Reflect.get(l, u), r[Te], r[Rn], r[Pn]));
    },
    has(l, u) {
      return u === Ls ? (o(), !0) : (a(Dt, u), Reflect.has(l, u));
    },
    getOwnPropertyDescriptor(l, u) {
      return a(Ft, u), Reflect.getOwnPropertyDescriptor(l, u);
    },
    ownKeys(l) {
      return a(Ee), Reflect.ownKeys(l);
    }
  };
  return t && (s.set = s.deleteProperty = () => !1), [s, r];
}, Lt = (e) => (
  // unwrap proxy
  e[Nt] || // otherwise
  e
), Cn = (e, t, r, n) => {
  if (!jn(e))
    return e;
  let a = n && n.get(e);
  if (!a) {
    const u = Lt(e);
    Ws(u) ? a = [u, Hs(u)] : a = [u], n == null || n.set(e, a);
  }
  const [o, s] = a;
  let l = r && r.get(o);
  return (!l || l[1][On] !== !!s) && (l = Bs(o, !!s), l[1][Wr] = ks(s || o, l[0]), r && r.set(o, l)), l[1][Te] = t, l[1][Rn] = r, l[1][Pn] = n, l[1][Wr];
}, Ks = (e, t) => {
  const r = Reflect.ownKeys(e), n = Reflect.ownKeys(t);
  return r.length !== n.length || r.some((a, o) => a !== n[o]);
}, An = (e, t, r, n, a = Object.is) => {
  if (a(e, t))
    return !1;
  if (!Ke(e) || !Ke(t))
    return !0;
  const o = r.get(Lt(e));
  if (!o)
    return !0;
  if (n) {
    const l = n.get(e);
    if (l && l[ut] === t)
      return l[ct];
    n.set(e, {
      [ut]: t,
      [ct]: !1
    });
  }
  let s = null;
  try {
    for (const l of o[Dt] || [])
      if (s = Reflect.has(e, l) !== Reflect.has(t, l), s)
        return s;
    if (o[Ee] === !0) {
      if (s = Ks(e, t), s)
        return s;
    } else
      for (const l of o[Ft] || []) {
        const u = !!Reflect.getOwnPropertyDescriptor(e, l), c = !!Reflect.getOwnPropertyDescriptor(t, l);
        if (s = u !== c, s)
          return s;
      }
    for (const l of o[Mt] || [])
      if (s = An(e[l], t[l], r, n, a), s)
        return s;
    return s === null && (s = !0), s;
  } finally {
    n && n.set(e, {
      [ut]: t,
      [ct]: s
    });
  }
}, Us = (e) => jn(e) && e[Nt] || null, Hr = (e, t = !0) => {
  St.set(e, t);
}, Ys = (e, t, r) => {
  const n = [], a = /* @__PURE__ */ new WeakSet(), o = (s, l) => {
    var u, c, d;
    if (a.has(s))
      return;
    Ke(s) && a.add(s);
    const v = Ke(s) && t.get(Lt(s));
    if (v) {
      if ((u = v[Dt]) === null || u === void 0 || u.forEach((p) => {
        const E = `:has(${String(p)})`;
        n.push(l ? [...l, E] : [E]);
      }), v[Ee] === !0) {
        const p = ":ownKeys";
        n.push(l ? [...l, p] : [p]);
      } else
        (c = v[Ft]) === null || c === void 0 || c.forEach((p) => {
          const E = `:hasOwn(${String(p)})`;
          n.push(l ? [...l, E] : [E]);
        });
      (d = v[Mt]) === null || d === void 0 || d.forEach((p) => {
        "value" in (Object.getOwnPropertyDescriptor(s, p) || {}) && o(s[p], l ? [...l, p] : [p]);
      });
    } else l && n.push(l);
  };
  return o(e), n;
}, Ue = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, kt = (e) => typeof e == "object" && e !== null, qs = (e) => kt(e) && !Wt.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer) && !(e instanceof Promise), In = (e, t) => {
  const r = Br.get(e);
  if ((r == null ? void 0 : r[0]) === t)
    return r[1];
  const n = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
  return Hr(n, !0), Br.set(e, [t, n]), Reflect.ownKeys(e).forEach((a) => {
    if (Object.getOwnPropertyDescriptor(n, a))
      return;
    const o = Reflect.get(e, a), { enumerable: s } = Reflect.getOwnPropertyDescriptor(
      e,
      a
    ), l = {
      value: o,
      enumerable: s,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (Wt.has(o))
      Hr(o, !1);
    else if (re.has(o)) {
      const [u] = re.get(o);
      l.value = In(u, t);
    }
    Object.defineProperty(n, a, l);
  }), Object.preventExtensions(n);
}, Vs = (e, t, r, n) => ({
  deleteProperty(a, o) {
    const s = Reflect.get(a, o);
    r(o);
    const l = Reflect.deleteProperty(a, o);
    return l && n(["delete", [o], s]), l;
  },
  set(a, o, s, l) {
    const u = !e() && Reflect.has(a, o), c = Reflect.get(a, o, l);
    if (u && (Kr(c, s) || Ye.has(s) && Kr(c, Ye.get(s))))
      return !0;
    r(o), kt(s) && (s = Us(s) || s);
    const d = !re.has(s) && Gs(s) ? $n(s) : s;
    return t(o, d), Reflect.set(a, o, d, l), n(["set", [o], s, c]), !0;
  }
}), re = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakSet(), Br = /* @__PURE__ */ new WeakMap(), De = [1, 1], Ye = /* @__PURE__ */ new WeakMap();
let Kr = Object.is, zs = (e, t) => new Proxy(e, t), Gs = qs, Js = In, Xs = Vs;
function $n(e = {}) {
  if (!kt(e))
    throw new Error("object required");
  const t = Ye.get(e);
  if (t)
    return t;
  let r = De[0];
  const n = /* @__PURE__ */ new Set(), a = (b, T = ++De[0]) => {
    r !== T && (r = T, n.forEach((h) => h(b, T)));
  };
  let o = De[1];
  const s = (b = ++De[1]) => (o !== b && !n.size && (o = b, u.forEach(([T]) => {
    const h = T[1](b);
    h > r && (r = h);
  })), r), l = (b) => (T, h) => {
    const P = [...T];
    P[1] = [b, ...P[1]], a(P, h);
  }, u = /* @__PURE__ */ new Map(), c = (b, T) => {
    const h = !Wt.has(T) && re.get(T);
    if (h) {
      if ((Ue ? "production" : void 0) !== "production" && u.has(b))
        throw new Error("prop listener already exists");
      if (n.size) {
        const P = h[2](l(b));
        u.set(b, [h, P]);
      } else
        u.set(b, [h]);
    }
  }, d = (b) => {
    var T;
    const h = u.get(b);
    h && (u.delete(b), (T = h[1]) == null || T.call(h));
  }, v = (b) => (n.add(b), n.size === 1 && u.forEach(([h, P], I) => {
    if ((Ue ? "production" : void 0) !== "production" && P)
      throw new Error("remove already exists");
    const $ = h[2](l(I));
    u.set(I, [h, $]);
  }), () => {
    n.delete(b), n.size === 0 && u.forEach(([h, P], I) => {
      P && (P(), u.set(I, [h]));
    });
  });
  let p = !0;
  const E = Xs(
    () => p,
    c,
    d,
    a
  ), m = zs(e, E);
  Ye.set(e, m);
  const w = [e, s, v];
  return re.set(m, w), Reflect.ownKeys(e).forEach((b) => {
    const T = Object.getOwnPropertyDescriptor(
      e,
      b
    );
    "value" in T && T.writable && (m[b] = e[b]);
  }), p = !1, m;
}
function Qs(e, t, r) {
  const n = re.get(e);
  (Ue ? "production" : void 0) !== "production" && !n && console.warn("Please use proxy object");
  let a;
  const o = [], s = n[2];
  let l = !1;
  const c = s((d) => {
    o.push(d), a || (a = Promise.resolve().then(() => {
      a = void 0, l && t(o.splice(0));
    }));
  });
  return l = !0, () => {
    l = !1, c();
  };
}
function Ur(e) {
  const t = re.get(e);
  (Ue ? "production" : void 0) !== "production" && !t && console.warn("Please use proxy object");
  const [r, n] = t;
  return Js(r, n());
}
const Zs = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, el = (e, t) => {
  const r = sn();
  Se(() => {
    r.current = Ys(e, t);
  }), Aa(r.current);
}, tl = el, rl = /* @__PURE__ */ new WeakMap();
function Nn(e, t) {
  const n = vt(
    () => e && /* @__PURE__ */ new WeakMap(),
    [e]
  ), a = sn();
  let o = !0;
  const s = Pa(
    ja(
      (u) => {
        const c = Qs(e, u);
        return u(), c;
      },
      [e, void 0]
    ),
    () => {
      const u = Ur(e);
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
    () => Ur(e)
  );
  o = !1, Ca(() => {
    a.current = s;
  }), (Zs ? "production" : void 0) !== "production" && tl(s, n);
  const l = vt(() => /* @__PURE__ */ new WeakMap(), []);
  return Cn(s, n, l, rl);
}
const { Group: nl } = ht, ze = ({ trueText: e = "是", falseText: t = "否", ...r }) => /* @__PURE__ */ g.jsxs(nl, { ...r, children: [
  /* @__PURE__ */ g.jsx(ht.Button, { value: !0, children: e }),
  /* @__PURE__ */ g.jsx(ht.Button, { value: !1, children: t })
] });
ze.displayName = "ParentRadioGroup";
const q = $n({
  schemaData: []
}), ne = (e) => e === "object" ? "properties" : e === "array" ? "items" : "", al = (e, t) => {
  const r = (n) => {
    if (!e)
      return n.push(t), !0;
    for (const a of n) {
      const o = ne(a == null ? void 0 : a.type);
      if ((a == null ? void 0 : a.key) === e) {
        if (["object", "array"].includes(a == null ? void 0 : a.type) && o) {
          if ((a == null ? void 0 : a.type) === "array" && (a == null ? void 0 : a.items.length) > 0)
            return !0;
          a[o].push(t);
        }
        return !0;
      }
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
        return Object.keys(t).forEach((s) => {
          a[s] = t[s];
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
    return n.forEach((s) => {
      var T;
      const { title: l, properties: u = [], items: c = [], ...d } = s, { is_required: v, rule: p, type: E, description: m, enum: w } = d || {}, b = {};
      if (E && (b.type = E), m && (b.description = m), (Array.isArray(w) && w.length > 0 || $t(w)) && (b.enum = w), E === "object" && u) {
        const { result: h, requiredFields: P } = t(u);
        b.properties = h, v && (b.required = P);
      }
      if ((d == null ? void 0 : d.type) === "array" && c.length > 0) {
        const { result: h } = t(c), P = h[(T = c[0]) == null ? void 0 : T.title];
        b.items = P;
      }
      Et(p) || Object.keys(p).forEach((h) => {
        p[h] && (b[h] = p[h]);
      }), v && o.push(l), l && (a[l] = b);
    }), { result: a, requiredFields: o };
  }, r = {};
  return e.forEach((n) => {
    const { properties: a = [], items: o = [], rule: s, ...l } = n, u = ne(l == null ? void 0 : l.type);
    if (Object.keys(l).forEach((c) => {
      l[c] && !["is_required", "key"].includes(c) && (r[c] = l[c]);
    }), Et(s) || Object.keys(s).forEach((c) => {
      s[c] && (r[c] = s[c]);
    }), u && (a.length || o.length)) {
      const { result: c, requiredFields: d } = t(n[u]);
      r[u] = c, r.required = d;
    }
  }), r;
}, ll = (e) => {
  const t = ne(e.type), r = (v, p) => `${v}-${p}`, n = ({ type: v, description: p, usage: E, default: m, ...w }, b, T, h) => {
    const I = {
      key: r(h, 1),
      title: b,
      type: v,
      description: p,
      usage: E,
      default: m,
      is_required: T
    };
    return Et(w) || (I.rule = {}, Object.keys(w).forEach(($) => {
      w[$] && !["properties", "items", "key"].includes($) && (I.rule[$] = w[$]);
    })), I;
  }, a = (v) => Object.entries(v).map(([p, E], m) => {
    if (!E)
      return {};
    const {
      type: w,
      description: b,
      enum: T,
      properties: h,
      items: P,
      ...I
    } = E || {}, $ = {
      title: p,
      key: `schema-1-${m + 1}`,
      is_required: u.includes(p),
      type: w,
      description: b,
      enum: T,
      rule: {
        ...I
      }
    };
    return h && ($.properties = a(h)), P && ($.items = [n(P, p, u.includes(p), `schema-1-${m + 1}`)]), $;
  }), { title: o, type: s, description: l, required: u, ...c } = e, d = {
    title: o,
    type: s,
    description: l,
    key: "schema-1"
  };
  return t && (d[t] = e[t] ? a(e[t]) : []), c && (d.rule = {}, Object.keys(c).forEach((v) => {
    c[v] && !["properties", "items"].includes(v) && (d.rule[v] = c[v]);
  })), [d];
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
    var n, a, o, s, l = [], u = !0, c = !1;
    try {
      if (o = (r = r.call(e)).next, t !== 0) for (; !(u = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); u = !0) ;
    } catch (d) {
      c = !0, a = d;
    } finally {
      try {
        if (!u && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function Yr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function dl(e, t) {
  if (e) {
    if (typeof e == "string") return Yr(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Yr(e, t) : void 0;
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
function Ot(e, t, r) {
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
      for (var o = "", s = 0; s < arguments.length; s++) {
        var l = arguments[s];
        l && (o = a(o, n(l)));
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
      var s = "";
      for (var l in o)
        t.call(o, l) && o[l] && (s = a(s, l));
      return s;
    }
    function a(o, s) {
      return s ? o ? o + " " + s : o + s : o;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Ln);
var hl = Ln.exports;
const ml = /* @__PURE__ */ ka(hl);
function k(e, t) {
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
    r: k(e, 255) * 255,
    g: k(t, 255) * 255,
    b: k(r, 255) * 255
  };
}
function dt(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function El(e, t, r) {
  var n, a, o;
  if (e = k(e, 360), t = k(t, 100), r = k(r, 100), t === 0)
    a = r, o = r, n = r;
  else {
    var s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    n = dt(l, s, e + 1 / 3), a = dt(l, s, e), o = dt(l, s, e - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: o * 255 };
}
function xl(e, t, r) {
  e = k(e, 255), t = k(t, 255), r = k(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), o = 0, s = n, l = n - a, u = n === 0 ? 0 : l / n;
  if (n === a)
    o = 0;
  else {
    switch (n) {
      case e:
        o = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / l + 2;
        break;
      case r:
        o = (e - t) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: u, v: s };
}
function Sl(e, t, r) {
  e = k(e, 360) * 6, t = k(t, 100), r = k(r, 100);
  var n = Math.floor(e), a = e - n, o = r * (1 - t), s = r * (1 - a * t), l = r * (1 - (1 - a) * t), u = n % 6, c = [r, s, o, o, l, r][u], d = [l, r, r, s, o, o][u], v = [o, o, l, r, r, s][u];
  return { r: c * 255, g: d * 255, b: v * 255 };
}
function Ol(e, t, r, n) {
  var a = [
    ft(Math.round(e).toString(16)),
    ft(Math.round(t).toString(16)),
    ft(Math.round(r).toString(16))
  ];
  return a.join("");
}
function qr(e) {
  return M(e) / 255;
}
function M(e) {
  return parseInt(e, 16);
}
var Vr = {
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
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, a = null, o = null, s = !1, l = !1;
  return typeof e == "string" && (e = jl(e)), typeof e == "object" && (K(e.r) && K(e.g) && K(e.b) ? (t = wl(e.r, e.g, e.b), s = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : K(e.h) && K(e.s) && K(e.v) ? (n = Fe(e.s), a = Fe(e.v), t = Sl(e.h, n, a), s = !0, l = "hsv") : K(e.h) && K(e.s) && K(e.l) && (n = Fe(e.s), o = Fe(e.l), t = El(e.h, n, o), s = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = Tl(r), {
    ok: s,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var Rl = "[-\\+]?\\d+%?", Pl = "[-\\+]?\\d*\\.\\d+%?", G = "(?:".concat(Pl, ")|(?:").concat(Rl, ")"), pt = "[\\s|\\(]+(".concat(G, ")[,|\\s]+(").concat(G, ")[,|\\s]+(").concat(G, ")\\s*\\)?"), gt = "[\\s|\\(]+(".concat(G, ")[,|\\s]+(").concat(G, ")[,|\\s]+(").concat(G, ")[,|\\s]+(").concat(G, ")\\s*\\)?"), W = {
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
  if (Vr[e])
    e = Vr[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = W.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = W.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = W.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = W.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = W.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = W.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = W.hex8.exec(e), r ? {
    r: M(r[1]),
    g: M(r[2]),
    b: M(r[3]),
    a: qr(r[4]),
    format: t ? "name" : "hex8"
  } : (r = W.hex6.exec(e), r ? {
    r: M(r[1]),
    g: M(r[2]),
    b: M(r[3]),
    format: t ? "name" : "hex"
  } : (r = W.hex4.exec(e), r ? {
    r: M(r[1] + r[1]),
    g: M(r[2] + r[2]),
    b: M(r[3] + r[3]),
    a: qr(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = W.hex3.exec(e), r ? {
    r: M(r[1] + r[1]),
    g: M(r[2] + r[2]),
    b: M(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function K(e) {
  return !!W.CSS_UNIT.exec(String(e));
}
var Me = 2, zr = 0.16, Cl = 0.05, Al = 0.05, Il = 0.15, kn = 5, Wn = 4, $l = [{
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
  return r ? n = e.s - zr * t : t === Wn ? n = e.s + zr : n = e.s + Cl * t, n > 1 && (n = 1), r && t === kn && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Qr(e, t, r) {
  var n;
  return r ? n = e.v + Al * t : n = e.v - Il * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function Dl(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = _e(e), a = kn; a > 0; a -= 1) {
    var o = Gr(n), s = Le(_e({
      h: Jr(o, a, !0),
      s: Xr(o, a, !0),
      v: Qr(o, a, !0)
    }));
    r.push(s);
  }
  r.push(Le(n));
  for (var l = 1; l <= Wn; l += 1) {
    var u = Gr(n), c = Le(_e({
      h: Jr(u, l),
      s: Xr(u, l),
      v: Qr(u, l)
    }));
    r.push(c);
  }
  return t.theme === "dark" ? $l.map(function(d) {
    var v = d.index, p = d.opacity, E = Le(Nl(_e(t.backgroundColor || "#141414"), _e(r[v]), p * 100));
    return E;
  }) : r;
}
var Rt = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Rt.primary = Rt[5];
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
function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zr(Object(r), !0).forEach(function(n) {
      Ot(e, n, r[n]);
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
var en = "data-rc-order", tn = "data-rc-priority", Ll = "rc-util-key", Pt = /* @__PURE__ */ new Map();
function Hn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Ll;
}
function Ht(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function kl(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Bt(e) {
  return Array.from((Pt.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Bn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Fl())
    return null;
  var r = t.csp, n = t.prepend, a = t.priority, o = a === void 0 ? 0 : a, s = kl(n), l = s === "prependQueue", u = document.createElement("style");
  u.setAttribute(en, s), l && o && u.setAttribute(tn, "".concat(o)), r != null && r.nonce && (u.nonce = r == null ? void 0 : r.nonce), u.innerHTML = e;
  var c = Ht(t), d = c.firstChild;
  if (n) {
    if (l) {
      var v = (t.styles || Bt(c)).filter(function(p) {
        if (!["prepend", "prependQueue"].includes(p.getAttribute(en)))
          return !1;
        var E = Number(p.getAttribute(tn) || 0);
        return o >= E;
      });
      if (v.length)
        return c.insertBefore(u, v[v.length - 1].nextSibling), u;
    }
    c.insertBefore(u, d);
  } else
    c.appendChild(u);
  return u;
}
function Wl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Ht(t);
  return (t.styles || Bt(r)).find(function(n) {
    return n.getAttribute(Hn(t)) === e;
  });
}
function Hl(e, t) {
  var r = Pt.get(e);
  if (!r || !Ml(document, r)) {
    var n = Bn("", t), a = n.parentNode;
    Pt.set(e, a), e.removeChild(n);
  }
}
function Bl(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Ht(r), a = Bt(n), o = B(B({}, r), {}, {
    styles: a
  });
  Hl(n, o);
  var s = Wl(t, o);
  if (s) {
    var l, u;
    if ((l = o.csp) !== null && l !== void 0 && l.nonce && s.nonce !== ((u = o.csp) === null || u === void 0 ? void 0 : u.nonce)) {
      var c;
      s.nonce = (c = o.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return s.innerHTML !== e && (s.innerHTML = e), s;
  }
  var d = Bn(e, o);
  return d.setAttribute(Hn(o), t), d;
}
function Kn(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Kl(e) {
  return Kn(e) instanceof ShadowRoot;
}
function Ul(e) {
  return Kl(e) ? Kn(e) : null;
}
var jt = {}, Kt = [], Yl = function(t) {
  Kt.push(t);
};
function ql(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Kt.reduce(function(n, a) {
      return a(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function Vl(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = Kt.reduce(function(n, a) {
      return a(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function zl() {
  jt = {};
}
function Un(e, t, r) {
  !t && !jt[r] && (e(!1, r), jt[r] = !0);
}
function Ge(e, t) {
  Un(ql, e, t);
}
function Gl(e, t) {
  Un(Vl, e, t);
}
Ge.preMessage = Yl;
Ge.resetWarned = zl;
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
function Ct(e, t, r) {
  return r ? /* @__PURE__ */ We.createElement(e.tag, B(B({
    key: t
  }, nn(e.attrs)), r), (e.children || []).map(function(n, a) {
    return Ct(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ We.createElement(e.tag, B({
    key: t
  }, nn(e.attrs)), (e.children || []).map(function(n, a) {
    return Ct(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function Yn(e) {
  return Dl(e)[0];
}
function qn(e) {
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
    var s = t.current, l = Ul(s);
    Bl(o, "@ant-design-icons", {
      prepend: !0,
      csp: n,
      attachTo: l
    });
  }, []);
}, eu = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], xe = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function tu(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  xe.primaryColor = t, xe.secondaryColor = r || Yn(t), xe.calculated = !!r;
}
function ru() {
  return B({}, xe);
}
var pe = function(t) {
  var r = t.icon, n = t.className, a = t.onClick, o = t.style, s = t.primaryColor, l = t.secondaryColor, u = Mn(t, eu), c = Y.useRef(), d = xe;
  if (s && (d = {
    primaryColor: s,
    secondaryColor: l || Yn(s)
  }), Zl(c), Xl(rn(r), "icon should be icon definiton, but got ".concat(r)), !rn(r))
    return null;
  var v = r;
  return v && typeof v.icon == "function" && (v = B(B({}, v), {}, {
    icon: v.icon(d.primaryColor, d.secondaryColor)
  })), Ct(v.icon, "svg-".concat(v.name), B(B({
    className: n,
    onClick: a,
    style: o,
    "data-icon": v.name,
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
function Vn(e) {
  var t = qn(e), r = Fn(t, 2), n = r[0], a = r[1];
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
Vn(Rt.primary);
var je = /* @__PURE__ */ Y.forwardRef(function(e, t) {
  var r = e.className, n = e.icon, a = e.spin, o = e.rotate, s = e.tabIndex, l = e.onClick, u = e.twoToneColor, c = Mn(e, au), d = Y.useContext(Dn), v = d.prefixCls, p = v === void 0 ? "anticon" : v, E = d.rootClassName, m = ml(E, p, Ot(Ot({}, "".concat(p, "-").concat(n.name), !!n.name), "".concat(p, "-spin"), !!a || n.name === "loading"), r), w = s;
  w === void 0 && l && (w = -1);
  var b = o ? {
    msTransform: "rotate(".concat(o, "deg)"),
    transform: "rotate(".concat(o, "deg)")
  } : void 0, T = qn(u), h = Fn(T, 2), P = h[0], I = h[1];
  return /* @__PURE__ */ Y.createElement("span", Pe({
    role: "img",
    "aria-label": n.name
  }, c, {
    ref: t,
    tabIndex: w,
    onClick: l,
    className: m
  }), /* @__PURE__ */ Y.createElement(pe, {
    icon: n,
    primaryColor: P,
    secondaryColor: I,
    style: b
  }));
});
je.displayName = "AntdIcon";
je.getTwoToneColor = nu;
je.setTwoToneColor = Vn;
var iu = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] }, name: "delete", theme: "outlined" }, ou = function(t, r) {
  return /* @__PURE__ */ Y.createElement(je, Pe({}, t, {
    ref: r,
    icon: iu
  }));
}, zn = /* @__PURE__ */ Y.forwardRef(ou);
process.env.NODE_ENV !== "production" && (zn.displayName = "DeleteOutlined");
var su = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { tag: "path", attrs: { d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, name: "plus", theme: "outlined" }, lu = function(t, r) {
  return /* @__PURE__ */ Y.createElement(je, Pe({}, t, {
    ref: r,
    icon: su
  }));
}, Ut = /* @__PURE__ */ Y.forwardRef(lu);
process.env.NODE_ENV !== "production" && (Ut.displayName = "PlusOutlined");
const an = (e) => {
  const { handleIndex: t, deleteText: r = "删除", addText: n = "添加", onDel: a, onAdd: o, showRemoveBtn: s } = e;
  return /* @__PURE__ */ g.jsx(N.Item, { children: /* @__PURE__ */ g.jsxs(yt, { children: [
    ($t(s) ? s : kr(t) && t > 0 || !kr(t)) && /* @__PURE__ */ g.jsx(yr, { title: r, children: /* @__PURE__ */ g.jsx(ue, { icon: /* @__PURE__ */ g.jsx(zn, {}), shape: "circle", danger: !0, onClick: () => a == null ? void 0 : a() }) }),
    /* @__PURE__ */ g.jsx(yr, { title: n, children: /* @__PURE__ */ g.jsx(ue, { icon: /* @__PURE__ */ g.jsx(Ut, {}), shape: "circle", onClick: () => o == null ? void 0 : o() }) })
  ] }) });
}, on = (e) => {
  const {
    listField: t = "field",
    listFormItemLabel: r,
    FormListItemComponent: n = () => null,
    listFormItemProps: a = {},
    iconFormProps: o = {},
    addItemData: s,
    rowProps: l = {}
  } = e, u = (c) => {
    c == null || c(s || void 0);
  };
  return /* @__PURE__ */ g.jsx(N.List, { name: t, children: (c, { add: d, remove: v }) => /* @__PURE__ */ g.jsxs(N.Item, { label: r, ...a, children: [
    c.map(({ key: p, ...E }, m) => /* @__PURE__ */ g.jsxs(Da, { gutter: 15, ...l, children: [
      /* @__PURE__ */ g.jsx(hr, { span: 20, children: /* @__PURE__ */ g.jsx(N.Item, { ...E, children: /* @__PURE__ */ g.jsx(n, {}) }) }),
      /* @__PURE__ */ g.jsx(hr, { span: 4, children: /* @__PURE__ */ g.jsx(
        an,
        {
          deleteText: `删除${r}`,
          addText: `添加${r}`,
          onDel: () => {
            v(m);
          },
          onAdd: () => u(d),
          ...o
        }
      ) })
    ] }, `${p}-${m}`)),
    !c.length && /* @__PURE__ */ g.jsx(
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
}, uu = ({ children: e, onClick: t, btnText: r = "添加一条" }) => /* @__PURE__ */ g.jsxs("div", { className: "add-row-button-container", children: [
  /* @__PURE__ */ g.jsx(ue, { size: "small", type: "text", icon: /* @__PURE__ */ g.jsx(Ut, {}), onClick: t, children: r }),
  e
] }), cu = ({ value: e, onChange: t }) => /* @__PURE__ */ g.jsx(At, { placeholder: "请输入枚举值", value: e, onChange: t, style: { width: "100%" } }), fu = ({
  value: e,
  onChange: t
}) => /* @__PURE__ */ g.jsx(At, { placeholder: "请输入枚举值", value: e, onChange: t, step: 1, style: { width: "100%" } }), du = ({ type: e }) => {
  const t = vt(() => cn[e] || [], [e]), r = ({ validateType: a, validateLabel: o }) => ["number", "integer"].includes(a) ? /* @__PURE__ */ g.jsx(At, { placeholder: `请输入${o}`, style: { width: "100%" } }) : a === "boolean" ? /* @__PURE__ */ g.jsx(ze, {}) : /* @__PURE__ */ g.jsx(ke, { placeholder: `请输入${o}` }), n = e !== "boolean" && t.length === 0;
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    t == null ? void 0 : t.map((a, o) => /* @__PURE__ */ g.jsx(N.Item, { name: ["rule", `${a == null ? void 0 : a.validateName}`], children: r(a) }, `${a}-${o}`)),
    n && /* @__PURE__ */ g.jsx(Ma, { message: "请先选择参数类型，选择参数类型后会自动匹配相应规则!" }),
    e === "boolean" && /* @__PURE__ */ g.jsx(La, { description: "说明：布尔值没有相关规则" })
  ] });
}, pu = ({ type: e }) => e === "boolean" ? /* @__PURE__ */ g.jsx(N.Item, { name: "enum", label: "枚举值", children: /* @__PURE__ */ g.jsx(ze, { trueText: "true", falseText: "false" }) }) : e === "string" ? /* @__PURE__ */ g.jsx(N.Item, { name: "enum", label: "枚举值", help: /* @__PURE__ */ g.jsx(g.Fragment, { children: "温馨提示: 输入枚举值需要按下enter键确定" }), children: /* @__PURE__ */ g.jsx(
  un,
  {
    mode: "tags",
    allowClear: !0,
    placeholder: "请输入枚举值并按下enter键确定"
  }
) }) : e === "number" ? /* @__PURE__ */ g.jsx(on, { listFormItemLabel: "枚举值", listField: "enum", FormListItemComponent: cu }) : e === "integer" ? /* @__PURE__ */ g.jsx(
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
  const [n, a] = it(!1), [o, s] = it(!1), [l, u] = it(!1), [c] = N.useForm(), d = (m) => {
    ol(m);
  }, v = () => {
    a(!0), u(!1);
  }, p = Ms({
    removeRow: d,
    editRow(m) {
      c.setFieldsValue({ ...m }), a(!0), u(!0);
    },
    isRoot: r
  }), E = async () => {
    const { key: m, ...w } = await c.validateFields(), b = { ...w };
    if (["object", "array"].includes(w.type)) {
      const T = ne(w == null ? void 0 : w.type);
      b[T] = [];
    }
    l ? il(m, b) : al(
      r ? "" : t,
      {
        key: `${t}-${e.length + 1}`,
        ...b
      }
    ), a(!1), c.resetFields();
  };
  return Se(() => {
    if (!r) {
      const m = q.schemaData, w = m == null ? void 0 : m.findIndex((b) => b.type === "array");
      s(w > -1 && m[w].items.length > 0);
    }
  }, [e]), /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx(
      Fa,
      {
        dataSource: e,
        columns: p,
        scroll: {
          y: 500,
          x: 1600
        },
        bordered: !1,
        footer: () => r && e.length > 0 || o ? null : /* @__PURE__ */ g.jsx(uu, { onClick: v }),
        expandable: {
          expandedRowRender: (m) => /* @__PURE__ */ g.jsx(
            Gn,
            {
              tableData: m.properties,
              addKey: m.key
            }
          ),
          rowExpandable: (m) => {
            const w = ne(m == null ? void 0 : m.type);
            return !!(["object", "array"].includes(m == null ? void 0 : m.type) && Array.isArray(m[w]));
          }
        }
      }
    ),
    /* @__PURE__ */ g.jsx(
      ln,
      {
        title: `${l ? "编辑" : "新增"}参数`,
        open: n,
        onOk: E,
        onCancel: () => {
          a(!1), c.resetFields();
        },
        style: {
          minWidth: 700
        },
        children: /* @__PURE__ */ g.jsxs(N, { form: c, labelCol: { span: 3 }, children: [
          /* @__PURE__ */ g.jsx(N.Item, { name: "key", label: "参数key", style: { display: "none" }, children: /* @__PURE__ */ g.jsx(ke, {}) }),
          /* @__PURE__ */ g.jsx(N.Item, { name: "title", label: "参数名", rules: [{ required: !0 }], children: /* @__PURE__ */ g.jsx(ke, { placeholder: "请输入参数名" }) }),
          /* @__PURE__ */ g.jsx(N.Item, { name: "type", label: "参数类型", rules: [{ required: !0 }], children: /* @__PURE__ */ g.jsx(un, { options: Ba, placeholder: "请选择参数类型" }) }),
          /* @__PURE__ */ g.jsx(N.Item, { name: "description", label: "参数描述", rules: [{ required: !0 }], children: /* @__PURE__ */ g.jsx(ke, { placeholder: "请输入参数描述" }) }),
          !r && /* @__PURE__ */ g.jsx(N.Item, { name: "is_required", label: "是否必填", rules: [{ required: !0 }], children: /* @__PURE__ */ g.jsx(ze, { placeholder: "请选择是否必填" }) }),
          /* @__PURE__ */ g.jsx(N.Item, { shouldUpdate: !0, noStyle: !0, children: ({ getFieldValue: m }) => /* @__PURE__ */ g.jsx(pu, { type: m("type") }) }),
          /* @__PURE__ */ g.jsx(N.Item, { label: "规则", shouldUpdate: !0, children: ({ getFieldValue: m }) => /* @__PURE__ */ g.jsx(du, { type: m("type") }) })
        ] })
      }
    )
  ] });
}, gu = ({ stateKey: e }) => {
  const t = Nn(q);
  return /* @__PURE__ */ g.jsx(Gn, { tableData: t.schemaData, addKey: "schema", isRoot: !0 });
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
  }, [e]), /* @__PURE__ */ g.jsx(gu, {});
};
export {
  hu as EwJSONSchemaEditVisual,
  gu as EwNotWrapperJSONSchemaEditVisual
};

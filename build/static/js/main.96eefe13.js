/*! For license information please see main.96eefe13.js.LICENSE.txt */
(() => {
  'use strict';
  var e = {
      730: (e, t, n) => {
        var r = n(43),
          a = n(853);
        function l(e) {
          for (
            var t =
                'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += '&args[]=' + encodeURIComponent(arguments[n]);
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        var i = new Set(),
          o = {};
        function s(e, t) {
          u(e, t), u(e + 'Capture', t);
        }
        function u(e, t) {
          for (o[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            'undefined' === typeof window ||
            'undefined' === typeof window.document ||
            'undefined' === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, l, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = i);
        }
        var g = {};
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
          ),
          [
            'autoReverse',
            'externalResourcesRequired',
            'focusable',
            'preserveAlpha',
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ['capture', 'download'].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ['rowSpan', 'start'].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function y(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ('o' !== t[0] && 'O' !== t[0]) ||
              ('n' !== t[1] && 'N' !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                'undefined' === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case 'function':
                    case 'symbol':
                      return !0;
                    case 'boolean':
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                            'aria-' !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && '' : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ''
                        : '' + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (e) {
            var t = e.replace(v, b);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (e) {
              var t = e.replace(v, b);
              g[t] = new m(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
            var t = e.replace(v, b);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              'http://www.w3.org/XML/1998/namespace',
              !1,
              !1,
            );
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1,
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          S = Symbol.for('react.element'),
          x = Symbol.for('react.portal'),
          C = Symbol.for('react.fragment'),
          k = Symbol.for('react.strict_mode'),
          E = Symbol.for('react.profiler'),
          T = Symbol.for('react.provider'),
          P = Symbol.for('react.context'),
          O = Symbol.for('react.forward_ref'),
          M = Symbol.for('react.suspense'),
          z = Symbol.for('react.suspense_list'),
          L = Symbol.for('react.memo'),
          _ = Symbol.for('react.lazy');
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
        var A = Symbol.for('react.offscreen');
        Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker');
        var B = Symbol.iterator;
        function N(e) {
          return null === e || 'object' !== typeof e
            ? null
            : 'function' === typeof (e = (B && e[B]) || e['@@iterator'])
            ? e
            : null;
        }
        var j,
          R = Object.assign;
        function I(e) {
          if (void 0 === j)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              j = (t && t[1]) || '';
            }
          return '\n' + j + e;
        }
        var D = !1;
        function F(e, t) {
          if (!e || D) return '';
          D = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && 'string' === typeof u.stack) {
              for (
                var a = u.stack.split('\n'),
                  l = r.stack.split('\n'),
                  i = a.length - 1,
                  o = l.length - 1;
                1 <= i && 0 <= o && a[i] !== l[o];

              )
                o--;
              for (; 1 <= i && 0 <= o; i--, o--)
                if (a[i] !== l[o]) {
                  if (1 !== i || 1 !== o)
                    do {
                      if ((i--, 0 > --o || a[i] !== l[o])) {
                        var s = '\n' + a[i].replace(' at new ', ' at ');
                        return (
                          e.displayName &&
                            s.includes('<anonymous>') &&
                            (s = s.replace('<anonymous>', e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= o);
                  break;
                }
            }
          } finally {
            (D = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : '') ? I(e) : '';
        }
        function H(e) {
          switch (e.tag) {
            case 5:
              return I(e.type);
            case 16:
              return I('Lazy');
            case 13:
              return I('Suspense');
            case 19:
              return I('SuspenseList');
            case 0:
            case 2:
            case 15:
              return (e = F(e.type, !1));
            case 11:
              return (e = F(e.type.render, !1));
            case 1:
              return (e = F(e.type, !0));
            default:
              return '';
          }
        }
        function U(e) {
          if (null == e) return null;
          if ('function' === typeof e) return e.displayName || e.name || null;
          if ('string' === typeof e) return e;
          switch (e) {
            case C:
              return 'Fragment';
            case x:
              return 'Portal';
            case E:
              return 'Profiler';
            case k:
              return 'StrictMode';
            case M:
              return 'Suspense';
            case z:
              return 'SuspenseList';
          }
          if ('object' === typeof e)
            switch (e.$$typeof) {
              case P:
                return (e.displayName || 'Context') + '.Consumer';
              case T:
                return (e._context.displayName || 'Context') + '.Provider';
              case O:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      '' !== (e = t.displayName || t.name || '')
                        ? 'ForwardRef(' + e + ')'
                        : 'ForwardRef'),
                  e
                );
              case L:
                return null !== (t = e.displayName || null)
                  ? t
                  : U(e.type) || 'Memo';
              case _:
                (t = e._payload), (e = e._init);
                try {
                  return U(e(t));
                } catch (n) {}
            }
          return null;
        }
        function G(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return 'Cache';
            case 9:
              return (t.displayName || 'Context') + '.Consumer';
            case 10:
              return (t._context.displayName || 'Context') + '.Provider';
            case 18:
              return 'DehydratedFragment';
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ''),
                t.displayName ||
                  ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
              );
            case 7:
              return 'Fragment';
            case 5:
              return t;
            case 4:
              return 'Portal';
            case 3:
              return 'Root';
            case 6:
              return 'Text';
            case 16:
              return U(t);
            case 8:
              return t === k ? 'StrictMode' : 'Mode';
            case 22:
              return 'Offscreen';
            case 12:
              return 'Profiler';
            case 21:
              return 'Scope';
            case 13:
              return 'Suspense';
            case 19:
              return 'SuspenseList';
            case 25:
              return 'TracingMarker';
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ('function' === typeof t)
                return t.displayName || t.name || null;
              if ('string' === typeof t) return t;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return e;
            default:
              return '';
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            'input' === e.toLowerCase() &&
            ('checkbox' === t || 'radio' === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t];
              if (
                !e.hasOwnProperty(t) &&
                'undefined' !== typeof n &&
                'function' === typeof n.get &&
                'function' === typeof n.set
              ) {
                var a = n.get,
                  l = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = '' + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = '' + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = '';
          return (
            e && (r = W(e) ? (e.checked ? 'true' : 'false') : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Y(e) {
          if (
            'undefined' ===
            typeof (e =
              e || ('undefined' !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function K(e, t) {
          var n = t.checked;
          return R({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function J(e, t) {
          var n = null == t.defaultValue ? '' : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = V(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                'checkbox' === t.type || 'radio' === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && y(e, 'checked', t, !1);
        }
        function Z(e, t) {
          X(e, t);
          var n = V(t.value),
            r = t.type;
          if (null != n)
            'number' === r
              ? ((0 === n && '' === e.value) || e.value != n) &&
                (e.value = '' + n)
              : e.value !== '' + n && (e.value = '' + n);
          else if ('submit' === r || 'reset' === r)
            return void e.removeAttribute('value');
          t.hasOwnProperty('value')
            ? ee(e, t.type, n)
            : t.hasOwnProperty('defaultValue') &&
              ee(e, t.type, V(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function $(e, t, n) {
          if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
            var r = t.type;
            if (
              !(
                ('submit' !== r && 'reset' !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = '' + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          '' !== (n = e.name) && (e.name = ''),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            '' !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ('number' === t && Y(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = '' + e._wrapperState.initialValue)
              : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = '' + V(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
          return R({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: '' + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(l(92));
              if (te(n)) {
                if (1 < n.length) throw Error(l(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ''), (n = t);
          }
          e._wrapperState = { initialValue: V(n) };
        }
        function le(e, t) {
          var n = V(t.value),
            r = V(t.defaultValue);
          null != n &&
            ((n = '' + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = '' + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            '' !== t &&
            null !== t &&
            (e.value = t);
        }
        function oe(e) {
          switch (e) {
            case 'svg':
              return 'http://www.w3.org/2000/svg';
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML';
            default:
              return 'http://www.w3.org/1999/xhtml';
          }
        }
        function se(e, t) {
          return null == e || 'http://www.w3.org/1999/xhtml' === e
            ? oe(t)
            : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
            ? 'http://www.w3.org/1999/xhtml'
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                'http://www.w3.org/2000/svg' !== e.namespaceURI ||
                'innerHTML' in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement('div')).innerHTML =
                    '<svg>' + t.valueOf().toString() + '</svg>',
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
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
            strokeWidth: !0,
          },
          he = ['Webkit', 'ms', 'Moz', 'O'];
        function me(e, t, n) {
          return null == t || 'boolean' === typeof t || '' === t
            ? ''
            : n ||
              'number' !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ('' + t).trim()
            : t + 'px';
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf('--'),
                a = me(n, t[n], r);
              'float' === n && (n = 'cssFloat'),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ve = R(
          { menuitem: !0 },
          {
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
            wbr: !0,
          },
        );
        function be(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(l(60));
              if (
                'object' !== typeof t.dangerouslySetInnerHTML ||
                !('__html' in t.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != t.style && 'object' !== typeof t.style)
              throw Error(l(62));
          }
        }
        function ye(e, t) {
          if (-1 === e.indexOf('-')) return 'string' === typeof t.is;
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function Se(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var xe = null,
          Ce = null,
          ke = null;
        function Ee(e) {
          if ((e = ya(e))) {
            if ('function' !== typeof xe) throw Error(l(280));
            var t = e.stateNode;
            t && ((t = Sa(t)), xe(e.stateNode, e.type, t));
          }
        }
        function Te(e) {
          Ce ? (ke ? ke.push(e) : (ke = [e])) : (Ce = e);
        }
        function Pe() {
          if (Ce) {
            var e = Ce,
              t = ke;
            if (((ke = Ce = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Oe(e, t) {
          return e(t);
        }
        function Me() {}
        var ze = !1;
        function Le(e, t, n) {
          if (ze) return e(t, n);
          ze = !0;
          try {
            return Oe(e, t, n);
          } finally {
            (ze = !1), (null !== Ce || null !== ke) && (Me(), Pe());
          }
        }
        function _e(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = Sa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              (r = !r.disabled) ||
                (r = !(
                  'button' === (e = e.type) ||
                  'input' === e ||
                  'select' === e ||
                  'textarea' === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && 'function' !== typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var Ae = !1;
        if (c)
          try {
            var Be = {};
            Object.defineProperty(Be, 'passive', {
              get: function () {
                Ae = !0;
              },
            }),
              window.addEventListener('test', Be, Be),
              window.removeEventListener('test', Be, Be);
          } catch (ce) {
            Ae = !1;
          }
        function Ne(e, t, n, r, a, l, i, o, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var je = !1,
          Re = null,
          Ie = !1,
          De = null,
          Fe = {
            onError: function (e) {
              (je = !0), (Re = e);
            },
          };
        function He(e, t, n, r, a, l, i, o, s) {
          (je = !1), (Re = null), Ne.apply(Fe, arguments);
        }
        function Ue(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ge(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if (Ue(e) !== e) throw Error(l(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ue(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return Ve(a), e;
                    if (i === r) return Ve(a), t;
                    i = i.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var o = !1, s = a.child; s; ) {
                    if (s === n) {
                      (o = !0), (n = a), (r = i);
                      break;
                    }
                    if (s === r) {
                      (o = !0), (r = a), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!o) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (o = !0), (n = i), (r = a);
                        break;
                      }
                      if (s === r) {
                        (o = !0), (r = i), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!o) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Ye = a.unstable_cancelCallback,
          Ke = a.unstable_shouldYield,
          Je = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Ze = a.unstable_getCurrentPriorityLevel,
          $e = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          lt = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((ot(e) / st) | 0)) | 0;
              },
          ot = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var o = i & ~a;
            0 !== o ? (r = dt(o)) : 0 !== (l &= i) && (r = dt(l));
          } else 0 !== (i = n & ~a) ? (r = dt(i)) : 0 !== l && (r = dt(l));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (l = t & -t) || (16 === a && 0 !== (4194240 & l)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
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
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function bt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var yt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var St,
          xt,
          Ct,
          kt,
          Et,
          Tt = !1,
          Pt = [],
          Ot = null,
          Mt = null,
          zt = null,
          Lt = new Map(),
          _t = new Map(),
          At = [],
          Bt =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' ',
            );
        function Nt(e, t) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              Ot = null;
              break;
            case 'dragenter':
            case 'dragleave':
              Mt = null;
              break;
            case 'mouseover':
            case 'mouseout':
              zt = null;
              break;
            case 'pointerover':
            case 'pointerout':
              Lt.delete(t.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              _t.delete(t.pointerId);
          }
        }
        function jt(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ya(t)) && xt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Rt(e) {
          var t = ba(e.target);
          if (null !== t) {
            var n = Ue(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ge(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      Ct(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function It(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ya(n)) && xt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Dt(e, t, n) {
          It(e) && n.delete(t);
        }
        function Ft() {
          (Tt = !1),
            null !== Ot && It(Ot) && (Ot = null),
            null !== Mt && It(Mt) && (Mt = null),
            null !== zt && It(zt) && (zt = null),
            Lt.forEach(Dt),
            _t.forEach(Dt);
        }
        function Ht(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Tt ||
              ((Tt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Ft)));
        }
        function Ut(e) {
          function t(t) {
            return Ht(t, e);
          }
          if (0 < Pt.length) {
            Ht(Pt[0], e);
            for (var n = 1; n < Pt.length; n++) {
              var r = Pt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Ot && Ht(Ot, e),
              null !== Mt && Ht(Mt, e),
              null !== zt && Ht(zt, e),
              Lt.forEach(t),
              _t.forEach(t),
              n = 0;
            n < At.length;
            n++
          )
            (r = At[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < At.length && null === (n = At[0]).blockedOn; )
            Rt(n), null === n.blockedOn && At.shift();
        }
        var Gt = w.ReactCurrentBatchConfig,
          Vt = !0;
        function Wt(e, t, n, r) {
          var a = yt,
            l = Gt.transition;
          Gt.transition = null;
          try {
            (yt = 1), qt(e, t, n, r);
          } finally {
            (yt = a), (Gt.transition = l);
          }
        }
        function Qt(e, t, n, r) {
          var a = yt,
            l = Gt.transition;
          Gt.transition = null;
          try {
            (yt = 4), qt(e, t, n, r);
          } finally {
            (yt = a), (Gt.transition = l);
          }
        }
        function qt(e, t, n, r) {
          if (Vt) {
            var a = Kt(e, t, n, r);
            if (null === a) Vr(e, t, r, Yt, n), Nt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case 'focusin':
                    return (Ot = jt(Ot, e, t, n, r, a)), !0;
                  case 'dragenter':
                    return (Mt = jt(Mt, e, t, n, r, a)), !0;
                  case 'mouseover':
                    return (zt = jt(zt, e, t, n, r, a)), !0;
                  case 'pointerover':
                    var l = a.pointerId;
                    return Lt.set(l, jt(Lt.get(l) || null, e, t, n, r, a)), !0;
                  case 'gotpointercapture':
                    return (
                      (l = a.pointerId),
                      _t.set(l, jt(_t.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Nt(e, r), 4 & t && -1 < Bt.indexOf(e))) {
              for (; null !== a; ) {
                var l = ya(a);
                if (
                  (null !== l && St(l),
                  null === (l = Kt(e, t, n, r)) && Vr(e, t, r, Yt, n),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Vr(e, t, r, null, n);
          }
        }
        var Yt = null;
        function Kt(e, t, n, r) {
          if (((Yt = null), null !== (e = ba((e = Se(r))))))
            if (null === (t = Ue(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ge(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Yt = e), null;
        }
        function Jt(e) {
          switch (e) {
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 1;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'toggle':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 4;
            case 'message':
              switch (Ze()) {
                case $e:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Zt = null,
          $t = null;
        function en() {
          if ($t) return $t;
          var e,
            t,
            n = Zt,
            r = n.length,
            a = 'value' in Xt ? Xt.value : Xt.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[l - t]; t++);
          return ($t = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            'charCode' in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, l) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            R(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : 'unknown' !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : 'unknown' !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var ln,
          on,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          dn = R({}, un, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = R({}, dn, {
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
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return 'movementX' in e
                ? e.movementX
                : (e !== sn &&
                    (sn && 'mousemove' === e.type
                      ? ((ln = e.screenX - sn.screenX),
                        (on = e.screenY - sn.screenY))
                      : (on = ln = 0),
                    (sn = e)),
                  ln);
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : on;
            },
          }),
          hn = an(pn),
          mn = an(R({}, pn, { dataTransfer: 0 })),
          gn = an(R({}, dn, { relatedTarget: 0 })),
          vn = an(
            R({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          bn = R({}, un, {
            clipboardData: function (e) {
              return 'clipboardData' in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          yn = an(bn),
          wn = an(R({}, un, { data: 0 })),
          Sn = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          xn = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          Cn = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
          };
        function kn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Cn[e]) && !!t[e];
        }
        function En() {
          return kn;
        }
        var Tn = R({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = Sn[e.key] || e.key;
                if ('Unidentified' !== t) return t;
              }
              return 'keypress' === e.type
                ? 13 === (e = tn(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? xn[e.keyCode] || 'Unidentified'
                : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return 'keypress' === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return 'keypress' === e.type
                ? tn(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Pn = an(Tn),
          On = an(
            R({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          Mn = an(
            R({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            }),
          ),
          zn = an(
            R({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          Ln = R({}, pn, {
            deltaX: function (e) {
              return 'deltaX' in e
                ? e.deltaX
                : 'wheelDeltaX' in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          _n = an(Ln),
          An = [9, 13, 27, 32],
          Bn = c && 'CompositionEvent' in window,
          Nn = null;
        c && 'documentMode' in document && (Nn = document.documentMode);
        var jn = c && 'TextEvent' in window && !Nn,
          Rn = c && (!Bn || (Nn && 8 < Nn && 11 >= Nn)),
          In = String.fromCharCode(32),
          Dn = !1;
        function Fn(e, t) {
          switch (e) {
            case 'keyup':
              return -1 !== An.indexOf(t.keyCode);
            case 'keydown':
              return 229 !== t.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function Hn(e) {
          return 'object' === typeof (e = e.detail) && 'data' in e
            ? e.data
            : null;
        }
        var Un = !1;
        var Gn = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
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
          week: !0,
        };
        function Vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return 'input' === t ? !!Gn[e.type] : 'textarea' === t;
        }
        function Wn(e, t, n, r) {
          Te(r),
            0 < (t = Qr(t, 'onChange')).length &&
              ((n = new cn('onChange', 'change', null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          qn = null;
        function Yn(e) {
          Ir(e, 0);
        }
        function Kn(e) {
          if (q(wa(e))) return e;
        }
        function Jn(e, t) {
          if ('change' === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Zn;
          if (c) {
            var $n = 'oninput' in document;
            if (!$n) {
              var er = document.createElement('div');
              er.setAttribute('oninput', 'return;'),
                ($n = 'function' === typeof er.oninput);
            }
            Zn = $n;
          } else Zn = !1;
          Xn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent('onpropertychange', nr), (qn = Qn = null));
        }
        function nr(e) {
          if ('value' === e.propertyName && Kn(qn)) {
            var t = [];
            Wn(t, qn, e, Se(e)), Le(Yn, t);
          }
        }
        function rr(e, t, n) {
          'focusin' === e
            ? (tr(), (qn = n), (Qn = t).attachEvent('onpropertychange', nr))
            : 'focusout' === e && tr();
        }
        function ar(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
            return Kn(qn);
        }
        function lr(e, t) {
          if ('click' === e) return Kn(t);
        }
        function ir(e, t) {
          if ('input' === e || 'change' === e) return Kn(t);
        }
        var or =
          'function' === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (or(e, t)) return !0;
          if (
            'object' !== typeof e ||
            null === e ||
            'object' !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !or(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : 'contains' in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = 'string' === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Y((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (('input' === t &&
              ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
              'textarea' === t ||
              'true' === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                'selectionStart' in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = cr(n, l));
                var i = cr(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              'function' === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && 'documentMode' in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          br = null,
          yr = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          yr ||
            null == gr ||
            gr !== Y(r) ||
            ('selectionStart' in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (br && sr(br, r)) ||
              ((br = r),
              0 < (r = Qr(vr, 'onSelect')).length &&
                ((t = new cn('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function Sr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n['Webkit' + e] = 'webkit' + t),
            (n['Moz' + e] = 'moz' + t),
            n
          );
        }
        var xr = {
            animationend: Sr('Animation', 'AnimationEnd'),
            animationiteration: Sr('Animation', 'AnimationIteration'),
            animationstart: Sr('Animation', 'AnimationStart'),
            transitionend: Sr('Transition', 'TransitionEnd'),
          },
          Cr = {},
          kr = {};
        function Er(e) {
          if (Cr[e]) return Cr[e];
          if (!xr[e]) return e;
          var t,
            n = xr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in kr) return (Cr[e] = n[t]);
          return e;
        }
        c &&
          ((kr = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete xr.animationend.animation,
            delete xr.animationiteration.animation,
            delete xr.animationstart.animation),
          'TransitionEvent' in window || delete xr.transitionend.transition);
        var Tr = Er('animationend'),
          Pr = Er('animationiteration'),
          Or = Er('animationstart'),
          Mr = Er('transitionend'),
          zr = new Map(),
          Lr =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' ',
            );
        function _r(e, t) {
          zr.set(e, t), s(t, [e]);
        }
        for (var Ar = 0; Ar < Lr.length; Ar++) {
          var Br = Lr[Ar];
          _r(Br.toLowerCase(), 'on' + (Br[0].toUpperCase() + Br.slice(1)));
        }
        _r(Tr, 'onAnimationEnd'),
          _r(Pr, 'onAnimationIteration'),
          _r(Or, 'onAnimationStart'),
          _r('dblclick', 'onDoubleClick'),
          _r('focusin', 'onFocus'),
          _r('focusout', 'onBlur'),
          _r(Mr, 'onTransitionEnd'),
          u('onMouseEnter', ['mouseout', 'mouseover']),
          u('onMouseLeave', ['mouseout', 'mouseover']),
          u('onPointerEnter', ['pointerout', 'pointerover']),
          u('onPointerLeave', ['pointerout', 'pointerover']),
          s(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(
              ' ',
            ),
          ),
          s(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' ',
            ),
          ),
          s('onBeforeInput', [
            'compositionend',
            'keypress',
            'textInput',
            'paste',
          ]),
          s(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(
              ' ',
            ),
          ),
          s(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(
              ' ',
            ),
          ),
          s(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(
              ' ',
            ),
          );
        var Nr =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' ',
            ),
          jr = new Set(
            'cancel close invalid load scroll toggle'.split(' ').concat(Nr),
          );
        function Rr(e, t, n) {
          var r = e.type || 'unknown-event';
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, o, s, u) {
              if ((He.apply(this, arguments), je)) {
                if (!je) throw Error(l(198));
                var c = Re;
                (je = !1), (Re = null), Ie || ((Ie = !0), (De = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ir(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var o = r[i],
                    s = o.instance,
                    u = o.currentTarget;
                  if (((o = o.listener), s !== l && a.isPropagationStopped()))
                    break e;
                  Rr(a, o, u), (l = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (o = r[i]).instance),
                    (u = o.currentTarget),
                    (o = o.listener),
                    s !== l && a.isPropagationStopped())
                  )
                    break e;
                  Rr(a, o, u), (l = s);
                }
            }
          }
          if (Ie) throw ((e = De), (Ie = !1), (De = null), e);
        }
        function Dr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + '__bubble';
          n.has(r) || (Gr(t, e, 2, !1), n.add(r));
        }
        function Fr(e, t, n) {
          var r = 0;
          t && (r |= 4), Gr(n, e, r, t);
        }
        var Hr = '_reactListening' + Math.random().toString(36).slice(2);
        function Ur(e) {
          if (!e[Hr]) {
            (e[Hr] = !0),
              i.forEach(function (t) {
                'selectionchange' !== t &&
                  (jr.has(t) || Fr(t, !1, e), Fr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Hr] || ((t[Hr] = !0), Fr('selectionchange', !1, t));
          }
        }
        function Gr(e, t, n, r) {
          switch (Jt(t)) {
            case 1:
              var a = Wt;
              break;
            case 4:
              a = Qt;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Ae ||
              ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Vr(e, t, n, r, a) {
          var l = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var o = r.stateNode.containerInfo;
                if (o === a || (8 === o.nodeType && o.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== o; ) {
                  if (null === (i = ba(o))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = l = i;
                    continue e;
                  }
                  o = o.parentNode;
                }
              }
              r = r.return;
            }
          Le(function () {
            var r = l,
              a = Se(n),
              i = [];
            e: {
              var o = zr.get(e);
              if (void 0 !== o) {
                var s = cn,
                  u = e;
                switch (e) {
                  case 'keypress':
                    if (0 === tn(n)) break e;
                  case 'keydown':
                  case 'keyup':
                    s = Pn;
                    break;
                  case 'focusin':
                    (u = 'focus'), (s = gn);
                    break;
                  case 'focusout':
                    (u = 'blur'), (s = gn);
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    s = gn;
                    break;
                  case 'click':
                    if (2 === n.button) break e;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    s = hn;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    s = mn;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    s = Mn;
                    break;
                  case Tr:
                  case Pr:
                  case Or:
                    s = vn;
                    break;
                  case Mr:
                    s = zn;
                    break;
                  case 'scroll':
                    s = fn;
                    break;
                  case 'wheel':
                    s = _n;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    s = yn;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    s = On;
                }
                var c = 0 !== (4 & t),
                  d = !c && 'scroll' === e,
                  f = c ? (null !== o ? o + 'Capture' : null) : o;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = _e(h, f)) &&
                        c.push(Wr(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((o = new s(o, u, null, n, a)),
                  i.push({ event: o, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = 'mouseout' === e || 'pointerout' === e),
                (!(o = 'mouseover' === e || 'pointerover' === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ba(u) && !u[ha])) &&
                  (s || o) &&
                  ((o =
                    a.window === a
                      ? a
                      : (o = a.ownerDocument)
                      ? o.defaultView || o.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ba(u)
                          : null) &&
                        (u !== (d = Ue(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (m = 'onMouseLeave'),
                  (f = 'onMouseEnter'),
                  (h = 'mouse'),
                  ('pointerout' !== e && 'pointerover' !== e) ||
                    ((c = On),
                    (m = 'onPointerLeave'),
                    (f = 'onPointerEnter'),
                    (h = 'pointer')),
                  (d = null == s ? o : wa(s)),
                  (p = null == u ? o : wa(u)),
                  ((o = new c(m, h + 'leave', s, n, a)).target = d),
                  (o.relatedTarget = p),
                  (m = null),
                  ba(a) === r &&
                    (((c = new c(f, h + 'enter', u, n, a)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  s && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = s; p; p = qr(p)) h++;
                    for (p = 0, m = f; m; m = qr(m)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (f = qr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = qr(c)), (f = qr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Yr(i, o, s, c, !1),
                  null !== u && null !== d && Yr(i, d, u, c, !0);
              }
              if (
                'select' ===
                  (s =
                    (o = r ? wa(r) : window).nodeName &&
                    o.nodeName.toLowerCase()) ||
                ('input' === s && 'file' === o.type)
              )
                var g = Jn;
              else if (Vn(o))
                if (Xn) g = ir;
                else {
                  g = ar;
                  var v = rr;
                }
              else
                (s = o.nodeName) &&
                  'input' === s.toLowerCase() &&
                  ('checkbox' === o.type || 'radio' === o.type) &&
                  (g = lr);
              switch (
                (g && (g = g(e, r))
                  ? Wn(i, g, n, a)
                  : (v && v(e, o, r),
                    'focusout' === e &&
                      (v = o._wrapperState) &&
                      v.controlled &&
                      'number' === o.type &&
                      ee(o, 'number', o.value)),
                (v = r ? wa(r) : window),
                e)
              ) {
                case 'focusin':
                  (Vn(v) || 'true' === v.contentEditable) &&
                    ((gr = v), (vr = r), (br = null));
                  break;
                case 'focusout':
                  br = vr = gr = null;
                  break;
                case 'mousedown':
                  yr = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  (yr = !1), wr(i, n, a);
                  break;
                case 'selectionchange':
                  if (mr) break;
                case 'keydown':
                case 'keyup':
                  wr(i, n, a);
              }
              var b;
              if (Bn)
                e: {
                  switch (e) {
                    case 'compositionstart':
                      var y = 'onCompositionStart';
                      break e;
                    case 'compositionend':
                      y = 'onCompositionEnd';
                      break e;
                    case 'compositionupdate':
                      y = 'onCompositionUpdate';
                      break e;
                  }
                  y = void 0;
                }
              else
                Un
                  ? Fn(e, n) && (y = 'onCompositionEnd')
                  : 'keydown' === e &&
                    229 === n.keyCode &&
                    (y = 'onCompositionStart');
              y &&
                (Rn &&
                  'ko' !== n.locale &&
                  (Un || 'onCompositionStart' !== y
                    ? 'onCompositionEnd' === y && Un && (b = en())
                    : ((Zt = 'value' in (Xt = a) ? Xt.value : Xt.textContent),
                      (Un = !0))),
                0 < (v = Qr(r, y)).length &&
                  ((y = new wn(y, e, null, n, a)),
                  i.push({ event: y, listeners: v }),
                  b ? (y.data = b) : null !== (b = Hn(n)) && (y.data = b))),
                (b = jn
                  ? (function (e, t) {
                      switch (e) {
                        case 'compositionend':
                          return Hn(t);
                        case 'keypress':
                          return 32 !== t.which ? null : ((Dn = !0), In);
                        case 'textInput':
                          return (e = t.data) === In && Dn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Un)
                        return 'compositionend' === e || (!Bn && Fn(e, t))
                          ? ((e = en()), ($t = Zt = Xt = null), (Un = !1), e)
                          : null;
                      switch (e) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case 'compositionend':
                          return Rn && 'ko' !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, 'onBeforeInput')).length &&
                  ((a = new wn('onBeforeInput', 'beforeinput', null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = b));
            }
            Ir(i, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + 'Capture', r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = _e(e, n)) && r.unshift(Wr(e, l, a)),
              null != (l = _e(e, t)) && r.push(Wr(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Yr(e, t, n, r, a) {
          for (var l = t._reactName, i = []; null !== n && n !== r; ) {
            var o = n,
              s = o.alternate,
              u = o.stateNode;
            if (null !== s && s === r) break;
            5 === o.tag &&
              null !== u &&
              ((o = u),
              a
                ? null != (s = _e(n, l)) && i.unshift(Wr(n, s, o))
                : a || (null != (s = _e(n, l)) && i.push(Wr(n, s, o)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Kr = /\r\n?/g,
          Jr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ('string' === typeof e ? e : '' + e)
            .replace(Kr, '\n')
            .replace(Jr, '');
        }
        function Zr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(l(425));
        }
        function $r() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            'textarea' === e ||
            'noscript' === e ||
            'string' === typeof t.children ||
            'number' === typeof t.children ||
            ('object' === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = 'function' === typeof setTimeout ? setTimeout : void 0,
          aa = 'function' === typeof clearTimeout ? clearTimeout : void 0,
          la = 'function' === typeof Promise ? Promise : void 0,
          ia =
            'function' === typeof queueMicrotask
              ? queueMicrotask
              : 'undefined' !== typeof la
              ? function (e) {
                  return la.resolve(null).then(e).catch(oa);
                }
              : ra;
        function oa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ('/$' === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Ut(t);
                r--;
              } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
            n = a;
          } while (n);
          Ut(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ('$' === (t = e.data) || '$!' === t || '$?' === t) break;
              if ('/$' === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === t) return e;
                t--;
              } else '/$' === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = '__reactFiber$' + da,
          pa = '__reactProps$' + da,
          ha = '__reactContainer$' + da,
          ma = '__reactEvents$' + da,
          ga = '__reactListeners$' + da,
          va = '__reactHandles$' + da;
        function ba(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ya(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function Sa(e) {
          return e[pa] || null;
        }
        var xa = [],
          Ca = -1;
        function ka(e) {
          return { current: e };
        }
        function Ea(e) {
          0 > Ca || ((e.current = xa[Ca]), (xa[Ca] = null), Ca--);
        }
        function Ta(e, t) {
          Ca++, (xa[Ca] = e.current), (e.current = t);
        }
        var Pa = {},
          Oa = ka(Pa),
          Ma = ka(!1),
          za = Pa;
        function La(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Pa;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            l = {};
          for (a in n) l[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function _a(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Aa() {
          Ea(Ma), Ea(Oa);
        }
        function Ba(e, t, n) {
          if (Oa.current !== Pa) throw Error(l(168));
          Ta(Oa, t), Ta(Ma, n);
        }
        function Na(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), 'function' !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(l(108, G(e) || 'Unknown', a));
          return R({}, n, r);
        }
        function ja(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Pa),
            (za = Oa.current),
            Ta(Oa, e),
            Ta(Ma, Ma.current),
            !0
          );
        }
        function Ra(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = Na(e, t, za)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ea(Ma),
              Ea(Oa),
              Ta(Oa, e))
            : Ea(Ma),
            Ta(Ma, n);
        }
        var Ia = null,
          Da = !1,
          Fa = !1;
        function Ha(e) {
          null === Ia ? (Ia = [e]) : Ia.push(e);
        }
        function Ua() {
          if (!Fa && null !== Ia) {
            Fa = !0;
            var e = 0,
              t = yt;
            try {
              var n = Ia;
              for (yt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ia = null), (Da = !1);
            } catch (a) {
              throw (null !== Ia && (Ia = Ia.slice(e + 1)), qe($e, Ua), a);
            } finally {
              (yt = t), (Fa = !1);
            }
          }
          return null;
        }
        var Ga = [],
          Va = 0,
          Wa = null,
          Qa = 0,
          qa = [],
          Ya = 0,
          Ka = null,
          Ja = 1,
          Xa = '';
        function Za(e, t) {
          (Ga[Va++] = Qa), (Ga[Va++] = Wa), (Wa = e), (Qa = t);
        }
        function $a(e, t, n) {
          (qa[Ya++] = Ja), (qa[Ya++] = Xa), (qa[Ya++] = Ka), (Ka = e);
          var r = Ja;
          e = Xa;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - it(t) + a;
          if (30 < l) {
            var i = a - (a % 5);
            (l = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ja = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Xa = l + e);
          } else (Ja = (1 << l) | (n << a) | r), (Xa = e);
        }
        function el(e) {
          null !== e.return && (Za(e, 1), $a(e, 1, 0));
        }
        function tl(e) {
          for (; e === Wa; )
            (Wa = Ga[--Va]), (Ga[Va] = null), (Qa = Ga[--Va]), (Ga[Va] = null);
          for (; e === Ka; )
            (Ka = qa[--Ya]),
              (qa[Ya] = null),
              (Xa = qa[--Ya]),
              (qa[Ya] = null),
              (Ja = qa[--Ya]),
              (qa[Ya] = null);
        }
        var nl = null,
          rl = null,
          al = !1,
          ll = null;
        function il(e, t) {
          var n = _u(5, null, null, 0);
          (n.elementType = 'DELETED'),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function ol(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (nl = e), (rl = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (nl = e), (rl = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ka ? { id: Ja, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = _u(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (nl = e),
                (rl = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function sl(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ul(e) {
          if (al) {
            var t = rl;
            if (t) {
              var n = t;
              if (!ol(e, t)) {
                if (sl(e)) throw Error(l(418));
                t = ua(n.nextSibling);
                var r = nl;
                t && ol(e, t)
                  ? il(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e));
              }
            } else {
              if (sl(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e);
            }
          }
        }
        function cl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          nl = e;
        }
        function dl(e) {
          if (e !== nl) return !1;
          if (!al) return cl(e), (al = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                'head' !== (t = e.type) &&
                'body' !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = rl))
          ) {
            if (sl(e)) throw (fl(), Error(l(418)));
            for (; t; ) il(e, t), (t = ua(t.nextSibling));
          }
          if ((cl(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ('/$' === n) {
                    if (0 === t) {
                      rl = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
              }
              rl = null;
            }
          } else rl = nl ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fl() {
          for (var e = rl; e; ) e = ua(e.nextSibling);
        }
        function pl() {
          (rl = nl = null), (al = !1);
        }
        function hl(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var ml = w.ReactCurrentBatchConfig;
        function gl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = R({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var vl = ka(null),
          bl = null,
          yl = null,
          wl = null;
        function Sl() {
          wl = yl = bl = null;
        }
        function xl(e) {
          var t = vl.current;
          Ea(vl), (e._currentValue = t);
        }
        function Cl(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function kl(e, t) {
          (bl = e),
            (wl = yl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wo = !0), (e.firstContext = null));
        }
        function El(e) {
          var t = e._currentValue;
          if (wl !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === yl)
            ) {
              if (null === bl) throw Error(l(308));
              (yl = e), (bl.dependencies = { lanes: 0, firstContext: e });
            } else yl = yl.next = e;
          return t;
        }
        var Tl = null;
        function Pl(e) {
          null === Tl ? (Tl = [e]) : Tl.push(e);
        }
        function Ol(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Pl(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Ml(e, r)
          );
        }
        function Ml(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var zl = !1;
        function Ll(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function _l(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Al(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Bl(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ms))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Ml(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Pl(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Ml(e, n)
          );
        }
        function Nl(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), bt(e, n);
          }
        }
        function jl(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === l ? (a = l = i) : (l = l.next = i), (n = n.next);
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Rl(e, t, n, r) {
          var a = e.updateQueue;
          zl = !1;
          var l = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            o = a.shared.pending;
          if (null !== o) {
            a.shared.pending = null;
            var s = o,
              u = s.next;
            (s.next = null), null === i ? (l = u) : (i.next = u), (i = s);
            var c = e.alternate;
            null !== c &&
              (o = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === o ? (c.firstBaseUpdate = u) : (o.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== l) {
            var d = a.baseState;
            for (i = 0, c = u = s = null, o = l; ; ) {
              var f = o.lane,
                p = o.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = o;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ('function' === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            'function' === typeof (h = m.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = R({}, d, f);
                      break e;
                    case 2:
                      zl = !0;
                  }
                }
                null !== o.callback &&
                  0 !== o.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [o]) : f.push(o));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                  (i |= f);
              if (null === (o = o.next)) {
                if (null === (o = a.shared.pending)) break;
                (o = (f = o).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === l && (a.shared.lanes = 0);
            (Rs |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function Il(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), 'function' !== typeof a))
                  throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var Dl = new r.Component().refs;
        function Fl(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : R({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Hl = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ue(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              a = nu(e),
              l = Al(r, a);
            (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Bl(e, l, a)) && (ru(t, e, a, r), Nl(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              a = nu(e),
              l = Al(r, a);
            (l.tag = 1),
              (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Bl(e, l, a)) && (ru(t, e, a, r), Nl(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tu(),
              r = nu(e),
              a = Al(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Bl(e, a, r)) && (ru(t, e, r, n), Nl(t, e, r));
          },
        };
        function Ul(e, t, n, r, a, l, i) {
          return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, l);
        }
        function Gl(e, t, n) {
          var r = !1,
            a = Pa,
            l = t.contextType;
          return (
            'object' === typeof l && null !== l
              ? (l = El(l))
              : ((a = _a(t) ? za : Oa.current),
                (l = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? La(e, a)
                  : Pa)),
            (t = new t(n, l)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Hl),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
          );
        }
        function Vl(e, t, n, r) {
          (e = t.state),
            'function' === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            'function' === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Hl.enqueueReplaceState(t, t.state, null);
        }
        function Wl(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Dl), Ll(e);
          var l = t.contextType;
          'object' === typeof l && null !== l
            ? (a.context = El(l))
            : ((l = _a(t) ? za : Oa.current), (a.context = La(e, l))),
            (a.state = e.memoizedState),
            'function' === typeof (l = t.getDerivedStateFromProps) &&
              (Fl(e, t, l, n), (a.state = e.memoizedState)),
            'function' === typeof t.getDerivedStateFromProps ||
              'function' === typeof a.getSnapshotBeforeUpdate ||
              ('function' !== typeof a.UNSAFE_componentWillMount &&
                'function' !== typeof a.componentWillMount) ||
              ((t = a.state),
              'function' === typeof a.componentWillMount &&
                a.componentWillMount(),
              'function' === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Hl.enqueueReplaceState(a, a.state, null),
              Rl(e, n, a, r),
              (a.state = e.memoizedState)),
            'function' === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Ql(e, t, n) {
          if (
            null !== (e = n.ref) &&
            'function' !== typeof e &&
            'object' !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var a = r,
                i = '' + e;
              return null !== t &&
                null !== t.ref &&
                'function' === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Dl && (t = a.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ('string' !== typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function ql(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                '[object Object]' === e
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : e,
              ),
            ))
          );
        }
        function Yl(e) {
          return (0, e._init)(e._payload);
        }
        function Kl(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Bu(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function o(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Iu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var l = n.type;
            return l === C
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ('object' === typeof l &&
                    null !== l &&
                    l.$$typeof === _ &&
                    Yl(l) === t.type))
              ? (((r = a(t, n.props)).ref = Ql(e, t, n)), (r.return = e), r)
              : (((r = Nu(n.type, n.key, n.props, null, e.mode, r)).ref = Ql(
                  e,
                  t,
                  n,
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Du(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = ju(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (('string' === typeof t && '' !== t) || 'number' === typeof t)
              return ((t = Iu('' + t, e.mode, n)).return = e), t;
            if ('object' === typeof t && null !== t) {
              switch (t.$$typeof) {
                case S:
                  return (
                    ((n = Nu(t.type, t.key, t.props, null, e.mode, n)).ref = Ql(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  );
                case x:
                  return ((t = Du(t, e.mode, n)).return = e), t;
                case _:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || N(t))
                return ((t = ju(t, e.mode, n, null)).return = e), t;
              ql(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (('string' === typeof n && '' !== n) || 'number' === typeof n)
              return null !== a ? null : s(e, t, '' + n, r);
            if ('object' === typeof n && null !== n) {
              switch (n.$$typeof) {
                case S:
                  return n.key === a ? u(e, t, n, r) : null;
                case x:
                  return n.key === a ? c(e, t, n, r) : null;
                case _:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || N(n)) return null !== a ? null : d(e, t, n, r, null);
              ql(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (('string' === typeof r && '' !== r) || 'number' === typeof r)
              return s(t, (e = e.get(n) || null), '' + r, a);
            if ('object' === typeof r && null !== r) {
              switch (r.$$typeof) {
                case S:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case _:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || N(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              ql(t, r);
            }
            return null;
          }
          function m(a, l, o, s) {
            for (
              var u = null, c = null, d = l, m = (l = 0), g = null;
              null !== d && m < o.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var v = p(a, d, o[m], s);
              if (null === v) {
                null === d && (d = g);
                break;
              }
              e && d && null === v.alternate && t(a, d),
                (l = i(v, l, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v),
                (d = g);
            }
            if (m === o.length) return n(a, d), al && Za(a, m), u;
            if (null === d) {
              for (; m < o.length; m++)
                null !== (d = f(a, o[m], s)) &&
                  ((l = i(d, l, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return al && Za(a, m), u;
            }
            for (d = r(a, d); m < o.length; m++)
              null !== (g = h(d, a, m, o[m], s)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (l = i(g, l, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              al && Za(a, m),
              u
            );
          }
          function g(a, o, s, u) {
            var c = N(s);
            if ('function' !== typeof c) throw Error(l(150));
            if (null == (s = c.call(s))) throw Error(l(151));
            for (
              var d = (c = null), m = o, g = (o = 0), v = null, b = s.next();
              null !== m && !b.done;
              g++, b = s.next()
            ) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
              var y = p(a, m, b.value, u);
              if (null === y) {
                null === m && (m = v);
                break;
              }
              e && m && null === y.alternate && t(a, m),
                (o = i(y, o, g)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y),
                (m = v);
            }
            if (b.done) return n(a, m), al && Za(a, g), c;
            if (null === m) {
              for (; !b.done; g++, b = s.next())
                null !== (b = f(a, b.value, u)) &&
                  ((o = i(b, o, g)),
                  null === d ? (c = b) : (d.sibling = b),
                  (d = b));
              return al && Za(a, g), c;
            }
            for (m = r(a, m); !b.done; g++, b = s.next())
              null !== (b = h(m, a, g, b.value, u)) &&
                (e &&
                  null !== b.alternate &&
                  m.delete(null === b.key ? g : b.key),
                (o = i(b, o, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              al && Za(a, g),
              c
            );
          }
          return function e(r, l, i, s) {
            if (
              ('object' === typeof i &&
                null !== i &&
                i.type === C &&
                null === i.key &&
                (i = i.props.children),
              'object' === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case S:
                  e: {
                    for (var u = i.key, c = l; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === C) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((l = a(c, i.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ('object' === typeof u &&
                            null !== u &&
                            u.$$typeof === _ &&
                            Yl(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((l = a(c, i.props)).ref = Ql(r, c, i)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === C
                      ? (((l = ju(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = l))
                      : (((s = Nu(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s,
                        )).ref = Ql(r, l, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return o(r);
                case x:
                  e: {
                    for (c = i.key; null !== l; ) {
                      if (l.key === c) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === i.containerInfo &&
                          l.stateNode.implementation === i.implementation
                        ) {
                          n(r, l.sibling),
                            ((l = a(l, i.children || [])).return = r),
                            (r = l);
                          break e;
                        }
                        n(r, l);
                        break;
                      }
                      t(r, l), (l = l.sibling);
                    }
                    ((l = Du(i, r.mode, s)).return = r), (r = l);
                  }
                  return o(r);
                case _:
                  return e(r, l, (c = i._init)(i._payload), s);
              }
              if (te(i)) return m(r, l, i, s);
              if (N(i)) return g(r, l, i, s);
              ql(r, i);
            }
            return ('string' === typeof i && '' !== i) || 'number' === typeof i
              ? ((i = '' + i),
                null !== l && 6 === l.tag
                  ? (n(r, l.sibling), ((l = a(l, i)).return = r), (r = l))
                  : (n(r, l), ((l = Iu(i, r.mode, s)).return = r), (r = l)),
                o(r))
              : n(r, l);
          };
        }
        var Jl = Kl(!0),
          Xl = Kl(!1),
          Zl = {},
          $l = ka(Zl),
          ei = ka(Zl),
          ti = ka(Zl);
        function ni(e) {
          if (e === Zl) throw Error(l(174));
          return e;
        }
        function ri(e, t) {
          switch ((Ta(ti, t), Ta(ei, e), Ta($l, Zl), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, '');
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName),
              );
          }
          Ea($l), Ta($l, t);
        }
        function ai() {
          Ea($l), Ea(ei), Ea(ti);
        }
        function li(e) {
          ni(ti.current);
          var t = ni($l.current),
            n = se(t, e.type);
          t !== n && (Ta(ei, e), Ta($l, n));
        }
        function ii(e) {
          ei.current === e && (Ea($l), Ea(ei));
        }
        var oi = ka(0);
        function si(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  '$?' === n.data ||
                  '$!' === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ui = [];
        function ci() {
          for (var e = 0; e < ui.length; e++)
            ui[e]._workInProgressVersionPrimary = null;
          ui.length = 0;
        }
        var di = w.ReactCurrentDispatcher,
          fi = w.ReactCurrentBatchConfig,
          pi = 0,
          hi = null,
          mi = null,
          gi = null,
          vi = !1,
          bi = !1,
          yi = 0,
          wi = 0;
        function Si() {
          throw Error(l(321));
        }
        function xi(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!or(e[n], t[n])) return !1;
          return !0;
        }
        function Ci(e, t, n, r, a, i) {
          if (
            ((pi = i),
            (hi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? io : oo),
            (e = n(r, a)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (yi = 0), 25 <= i)) throw Error(l(301));
              (i += 1),
                (gi = mi = null),
                (t.updateQueue = null),
                (di.current = so),
                (e = n(r, a));
            } while (bi);
          }
          if (
            ((di.current = lo),
            (t = null !== mi && null !== mi.next),
            (pi = 0),
            (gi = mi = hi = null),
            (vi = !1),
            t)
          )
            throw Error(l(300));
          return e;
        }
        function ki() {
          var e = 0 !== yi;
          return (yi = 0), e;
        }
        function Ei() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === gi ? (hi.memoizedState = gi = e) : (gi = gi.next = e), gi
          );
        }
        function Ti() {
          if (null === mi) {
            var e = hi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mi.next;
          var t = null === gi ? hi.memoizedState : gi.next;
          if (null !== t) (gi = t), (mi = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (mi = e).memoizedState,
              baseState: mi.baseState,
              baseQueue: mi.baseQueue,
              queue: mi.queue,
              next: null,
            }),
              null === gi ? (hi.memoizedState = gi = e) : (gi = gi.next = e);
          }
          return gi;
        }
        function Pi(e, t) {
          return 'function' === typeof t ? t(e) : t;
        }
        function Oi(e) {
          var t = Ti(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = mi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var o = a.next;
              (a.next = i.next), (i.next = o);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var s = (o = null),
              u = null,
              c = i;
            do {
              var d = c.lane;
              if ((pi & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = f), (o = r)) : (u = u.next = f),
                  (hi.lanes |= d),
                  (Rs |= d);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (o = r) : (u.next = s),
              or(r, t.memoizedState) || (wo = !0),
              (t.memoizedState = r),
              (t.baseState = o),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (hi.lanes |= i), (Rs |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Mi(e) {
          var t = Ti(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var o = (a = a.next);
            do {
              (i = e(i, o.action)), (o = o.next);
            } while (o !== a);
            or(i, t.memoizedState) || (wo = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function zi() {}
        function Li(e, t) {
          var n = hi,
            r = Ti(),
            a = t(),
            i = !or(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (wo = !0)),
            (r = r.queue),
            Gi(Bi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== gi && 1 & gi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ii(9, Ai.bind(null, n, r, a, t), void 0, null),
              null === zs)
            )
              throw Error(l(349));
            0 !== (30 & pi) || _i(n, t, a);
          }
          return a;
        }
        function _i(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = hi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (hi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ai(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ni(t) && ji(e);
        }
        function Bi(e, t, n) {
          return n(function () {
            Ni(t) && ji(e);
          });
        }
        function Ni(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !or(e, n);
          } catch (r) {
            return !0;
          }
        }
        function ji(e) {
          var t = Ml(e, 1);
          null !== t && ru(t, e, 1, -1);
        }
        function Ri(e) {
          var t = Ei();
          return (
            'function' === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Pi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = to.bind(null, hi, e)),
            [t.memoizedState, e]
          );
        }
        function Ii(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = hi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (hi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Di() {
          return Ti().memoizedState;
        }
        function Fi(e, t, n, r) {
          var a = Ei();
          (hi.flags |= e),
            (a.memoizedState = Ii(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Hi(e, t, n, r) {
          var a = Ti();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== mi) {
            var i = mi.memoizedState;
            if (((l = i.destroy), null !== r && xi(r, i.deps)))
              return void (a.memoizedState = Ii(t, n, l, r));
          }
          (hi.flags |= e), (a.memoizedState = Ii(1 | t, n, l, r));
        }
        function Ui(e, t) {
          return Fi(8390656, 8, e, t);
        }
        function Gi(e, t) {
          return Hi(2048, 8, e, t);
        }
        function Vi(e, t) {
          return Hi(4, 2, e, t);
        }
        function Wi(e, t) {
          return Hi(4, 4, e, t);
        }
        function Qi(e, t) {
          return 'function' === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function qi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Hi(4, 4, Qi.bind(null, t, e), n)
          );
        }
        function Yi() {}
        function Ki(e, t) {
          var n = Ti();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && xi(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ji(e, t) {
          var n = Ti();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && xi(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Xi(e, t, n) {
          return 0 === (21 & pi)
            ? (e.baseState && ((e.baseState = !1), (wo = !0)),
              (e.memoizedState = n))
            : (or(n, t) ||
                ((n = mt()), (hi.lanes |= n), (Rs |= n), (e.baseState = !0)),
              t);
        }
        function Zi(e, t) {
          var n = yt;
          (yt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = fi.transition;
          fi.transition = {};
          try {
            e(!1), t();
          } finally {
            (yt = n), (fi.transition = r);
          }
        }
        function $i() {
          return Ti().memoizedState;
        }
        function eo(e, t, n) {
          var r = nu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            no(e))
          )
            ro(t, n);
          else if (null !== (n = Ol(e, t, n, r))) {
            ru(n, e, r, tu()), ao(n, t, r);
          }
        }
        function to(e, t, n) {
          var r = nu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (no(e)) ro(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  o = l(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = o), or(o, i))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), Pl(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = Ol(e, t, a, r)) &&
              (ru(n, e, r, (a = tu())), ao(n, t, r));
          }
        }
        function no(e) {
          var t = e.alternate;
          return e === hi || (null !== t && t === hi);
        }
        function ro(e, t) {
          bi = vi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ao(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), bt(e, n);
          }
        }
        var lo = {
            readContext: El,
            useCallback: Si,
            useContext: Si,
            useEffect: Si,
            useImperativeHandle: Si,
            useInsertionEffect: Si,
            useLayoutEffect: Si,
            useMemo: Si,
            useReducer: Si,
            useRef: Si,
            useState: Si,
            useDebugValue: Si,
            useDeferredValue: Si,
            useTransition: Si,
            useMutableSource: Si,
            useSyncExternalStore: Si,
            useId: Si,
            unstable_isNewReconciler: !1,
          },
          io = {
            readContext: El,
            useCallback: function (e, t) {
              return (Ei().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: El,
            useEffect: Ui,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Fi(4194308, 4, Qi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Fi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Fi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ei();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Ei();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = eo.bind(null, hi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ei().memoizedState = e);
            },
            useState: Ri,
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              return (Ei().memoizedState = e);
            },
            useTransition: function () {
              var e = Ri(!1),
                t = e[0];
              return (
                (e = Zi.bind(null, e[1])), (Ei().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = hi,
                a = Ei();
              if (al) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === zs)) throw Error(l(349));
                0 !== (30 & pi) || _i(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Ui(Bi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ii(9, Ai.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ei(),
                t = zs.identifierPrefix;
              if (al) {
                var n = Xa;
                (t =
                  ':' +
                  t +
                  'R' +
                  (n = (Ja & ~(1 << (32 - it(Ja) - 1))).toString(32) + n)),
                  0 < (n = yi++) && (t += 'H' + n.toString(32)),
                  (t += ':');
              } else t = ':' + t + 'r' + (n = wi++).toString(32) + ':';
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          oo = {
            readContext: El,
            useCallback: Ki,
            useContext: El,
            useEffect: Gi,
            useImperativeHandle: qi,
            useInsertionEffect: Vi,
            useLayoutEffect: Wi,
            useMemo: Ji,
            useReducer: Oi,
            useRef: Di,
            useState: function () {
              return Oi(Pi);
            },
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              return Xi(Ti(), mi.memoizedState, e);
            },
            useTransition: function () {
              return [Oi(Pi)[0], Ti().memoizedState];
            },
            useMutableSource: zi,
            useSyncExternalStore: Li,
            useId: $i,
            unstable_isNewReconciler: !1,
          },
          so = {
            readContext: El,
            useCallback: Ki,
            useContext: El,
            useEffect: Gi,
            useImperativeHandle: qi,
            useInsertionEffect: Vi,
            useLayoutEffect: Wi,
            useMemo: Ji,
            useReducer: Mi,
            useRef: Di,
            useState: function () {
              return Mi(Pi);
            },
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              var t = Ti();
              return null === mi
                ? (t.memoizedState = e)
                : Xi(t, mi.memoizedState, e);
            },
            useTransition: function () {
              return [Mi(Pi)[0], Ti().memoizedState];
            },
            useMutableSource: zi,
            useSyncExternalStore: Li,
            useId: $i,
            unstable_isNewReconciler: !1,
          };
        function uo(e, t) {
          try {
            var n = '',
              r = t;
            do {
              (n += H(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (l) {
            a = '\nError generating stack: ' + l.message + '\n' + l.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function co(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fo(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var po = 'function' === typeof WeakMap ? WeakMap : Map;
        function ho(e, t, n) {
          ((n = Al(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Ws || ((Ws = !0), (Qs = r)), fo(0, t);
            }),
            n
          );
        }
        function mo(e, t, n) {
          (n = Al(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ('function' === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fo(0, t);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              'function' === typeof l.componentDidCatch &&
              (n.callback = function () {
                fo(0, t),
                  'function' !== typeof r &&
                    (null === qs ? (qs = new Set([this])) : qs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : '',
                });
              }),
            n
          );
        }
        function go(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new po();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Tu.bind(null, e, t, n)), t.then(e, e));
        }
        function vo(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function bo(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Al(-1, 1)).tag = 2), Bl(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var yo = w.ReactCurrentOwner,
          wo = !1;
        function So(e, t, n, r) {
          t.child = null === e ? Xl(t, null, n, r) : Jl(t, e.child, n, r);
        }
        function xo(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          return (
            kl(t, a),
            (r = Ci(e, t, n, r, l, a)),
            (n = ki()),
            null === e || wo
              ? (al && n && el(t), (t.flags |= 1), So(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wo(e, t, a))
          );
        }
        function Co(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return 'function' !== typeof l ||
              Au(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Nu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), ko(e, t, l, r, a));
          }
          if (((l = e.child), 0 === (e.lanes & a))) {
            var i = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(i, r) &&
              e.ref === t.ref
            )
              return Wo(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Bu(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function ko(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (sr(l, r) && e.ref === t.ref) {
              if (((wo = !1), (t.pendingProps = r = l), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Wo(e, t, a);
              0 !== (131072 & e.flags) && (wo = !0);
            }
          }
          return Po(e, t, n, r, a);
        }
        function Eo(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ('hidden' === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ta(Bs, As),
                (As |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ta(Bs, As),
                  (As |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : n),
                Ta(Bs, As),
                (As |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ta(Bs, As),
              (As |= r);
          return So(e, t, a, n), t.child;
        }
        function To(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Po(e, t, n, r, a) {
          var l = _a(n) ? za : Oa.current;
          return (
            (l = La(t, l)),
            kl(t, a),
            (n = Ci(e, t, n, r, l, a)),
            (r = ki()),
            null === e || wo
              ? (al && r && el(t), (t.flags |= 1), So(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wo(e, t, a))
          );
        }
        function Oo(e, t, n, r, a) {
          if (_a(n)) {
            var l = !0;
            ja(t);
          } else l = !1;
          if ((kl(t, a), null === t.stateNode))
            Vo(e, t), Gl(t, n, r), Wl(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              o = t.memoizedProps;
            i.props = o;
            var s = i.context,
              u = n.contextType;
            'object' === typeof u && null !== u
              ? (u = El(u))
              : (u = La(t, (u = _a(n) ? za : Oa.current)));
            var c = n.getDerivedStateFromProps,
              d =
                'function' === typeof c ||
                'function' === typeof i.getSnapshotBeforeUpdate;
            d ||
              ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof i.componentWillReceiveProps) ||
              ((o !== r || s !== u) && Vl(t, i, r, u)),
              (zl = !1);
            var f = t.memoizedState;
            (i.state = f),
              Rl(t, r, i, a),
              (s = t.memoizedState),
              o !== r || f !== s || Ma.current || zl
                ? ('function' === typeof c &&
                    (Fl(t, n, c, r), (s = t.memoizedState)),
                  (o = zl || Ul(t, n, o, r, f, s, u))
                    ? (d ||
                        ('function' !== typeof i.UNSAFE_componentWillMount &&
                          'function' !== typeof i.componentWillMount) ||
                        ('function' === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        'function' === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      'function' === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ('function' === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = u),
                  (r = o))
                : ('function' === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              _l(e, t),
              (o = t.memoizedProps),
              (u = t.type === t.elementType ? o : gl(t.type, o)),
              (i.props = u),
              (d = t.pendingProps),
              (f = i.context),
              'object' === typeof (s = n.contextType) && null !== s
                ? (s = El(s))
                : (s = La(t, (s = _a(n) ? za : Oa.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              'function' === typeof p ||
              'function' === typeof i.getSnapshotBeforeUpdate) ||
              ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof i.componentWillReceiveProps) ||
              ((o !== d || f !== s) && Vl(t, i, r, s)),
              (zl = !1),
              (f = t.memoizedState),
              (i.state = f),
              Rl(t, r, i, a);
            var h = t.memoizedState;
            o !== d || f !== h || Ma.current || zl
              ? ('function' === typeof p &&
                  (Fl(t, n, p, r), (h = t.memoizedState)),
                (u = zl || Ul(t, n, u, r, f, h, s) || !1)
                  ? (c ||
                      ('function' !== typeof i.UNSAFE_componentWillUpdate &&
                        'function' !== typeof i.componentWillUpdate) ||
                      ('function' === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, s),
                      'function' === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, s)),
                    'function' === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    'function' === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ('function' !== typeof i.componentDidUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    'function' !== typeof i.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = s),
                (r = u))
              : ('function' !== typeof i.componentDidUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                'function' !== typeof i.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Mo(e, t, n, r, l, a);
        }
        function Mo(e, t, n, r, a, l) {
          To(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Ra(t, n, !1), Wo(e, t, l);
          (r = t.stateNode), (yo.current = t);
          var o =
            i && 'function' !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Jl(t, e.child, null, l)),
                (t.child = Jl(t, null, o, l)))
              : So(e, t, o, l),
            (t.memoizedState = r.state),
            a && Ra(t, n, !0),
            t.child
          );
        }
        function zo(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ba(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ba(0, t.context, !1),
            ri(e, t.containerInfo);
        }
        function Lo(e, t, n, r, a) {
          return pl(), hl(a), (t.flags |= 256), So(e, t, n, r), t.child;
        }
        var _o,
          Ao,
          Bo,
          No,
          jo = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ro(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Io(e, t, n) {
          var r,
            a = t.pendingProps,
            i = oi.current,
            o = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((o = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Ta(oi, 1 & i),
            null === e)
          )
            return (
              ul(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : '$!' === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  o
                    ? ((a = t.mode),
                      (o = t.child),
                      (s = { mode: 'hidden', children: s }),
                      0 === (1 & a) && null !== o
                        ? ((o.childLanes = 0), (o.pendingProps = s))
                        : (o = Ru(s, a, 0, null)),
                      (e = ju(e, a, n, null)),
                      (o.return = t),
                      (e.return = t),
                      (o.sibling = e),
                      (t.child = o),
                      (t.child.memoizedState = Ro(n)),
                      (t.memoizedState = jo),
                      e)
                    : Do(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, o) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fo(e, t, o, (r = co(Error(l(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = Ru(
                      { mode: 'visible', children: r.children },
                      a,
                      0,
                      null,
                    )),
                    ((i = ju(i, a, o, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Jl(t, e.child, null, o),
                    (t.child.memoizedState = Ro(o)),
                    (t.memoizedState = jo),
                    i);
              if (0 === (1 & t.mode)) return Fo(e, t, o, null);
              if ('$!' === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Fo(e, t, o, (r = co((i = Error(l(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (o & e.childLanes)), wo || s)) {
                if (null !== (r = zs)) {
                  switch (o & -o) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
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
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | o)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Ml(e, a), ru(r, e, a, -1));
                }
                return gu(), Fo(e, t, o, (r = co(Error(l(421)))));
              }
              return '$?' === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ou.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (rl = ua(a.nextSibling)),
                  (nl = t),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((qa[Ya++] = Ja),
                    (qa[Ya++] = Xa),
                    (qa[Ya++] = Ka),
                    (Ja = e.id),
                    (Xa = e.overflow),
                    (Ka = t)),
                  (t = Do(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, i, n);
          if (o) {
            (o = a.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var u = { mode: 'hidden', children: a.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Bu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (o = Bu(r, o))
                : ((o = ju(o, s, n, null)).flags |= 2),
              (o.return = t),
              (a.return = t),
              (a.sibling = o),
              (t.child = a),
              (a = o),
              (o = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Ro(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (o.memoizedState = s),
              (o.childLanes = e.childLanes & ~n),
              (t.memoizedState = jo),
              a
            );
          }
          return (
            (e = (o = e.child).sibling),
            (a = Bu(o, { mode: 'visible', children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Do(e, t) {
          return (
            ((t = Ru(
              { mode: 'visible', children: t },
              e.mode,
              0,
              null,
            )).return = e),
            (e.child = t)
          );
        }
        function Fo(e, t, n, r) {
          return (
            null !== r && hl(r),
            Jl(t, e.child, null, n),
            ((e = Do(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ho(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Cl(e.return, t, n);
        }
        function Uo(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a));
        }
        function Go(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((So(e, t, r.children, n), 0 !== (2 & (r = oi.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ho(e, n, t);
                else if (19 === e.tag) Ho(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ta(oi, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case 'forwards':
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === si(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Uo(t, !1, a, n, l);
                break;
              case 'backwards':
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === si(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Uo(t, !0, n, null, l);
                break;
              case 'together':
                Uo(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Vo(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Wo(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Rs |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = Bu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Bu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Qo(e, t) {
          if (!al)
            switch (e.tailMode) {
              case 'hidden':
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case 'collapsed':
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function qo(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Yo(e, t, n) {
          var r = t.pendingProps;
          switch ((tl(t), t.tag)) {
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
              return qo(t), null;
            case 1:
            case 17:
              return _a(t.type) && Aa(), qo(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ai(),
                Ea(Ma),
                Ea(Oa),
                ci(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (dl(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ll && (ou(ll), (ll = null)))),
                Ao(e, t),
                qo(t),
                null
              );
            case 5:
              ii(t);
              var a = ni(ti.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Bo(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return qo(t), null;
                }
                if (((e = ni($l.current)), dl(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case 'dialog':
                      Dr('cancel', r), Dr('close', r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Dr('load', r);
                      break;
                    case 'video':
                    case 'audio':
                      for (a = 0; a < Nr.length; a++) Dr(Nr[a], r);
                      break;
                    case 'source':
                      Dr('error', r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Dr('error', r), Dr('load', r);
                      break;
                    case 'details':
                      Dr('toggle', r);
                      break;
                    case 'input':
                      J(r, i), Dr('invalid', r);
                      break;
                    case 'select':
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Dr('invalid', r);
                      break;
                    case 'textarea':
                      ae(r, i), Dr('invalid', r);
                  }
                  for (var s in (be(n, i), (a = null), i))
                    if (i.hasOwnProperty(s)) {
                      var u = i[s];
                      'children' === s
                        ? 'string' === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (a = ['children', u]))
                          : 'number' === typeof u &&
                            r.textContent !== '' + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (a = ['children', '' + u]))
                        : o.hasOwnProperty(s) &&
                          null != u &&
                          'onScroll' === s &&
                          Dr('scroll', r);
                    }
                  switch (n) {
                    case 'input':
                      Q(r), $(r, i, !0);
                      break;
                    case 'textarea':
                      Q(r), ie(r);
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' === typeof i.onClick && (r.onclick = $r);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === e && (e = oe(n)),
                    'http://www.w3.org/1999/xhtml' === e
                      ? 'script' === n
                        ? (((e = s.createElement('div')).innerHTML =
                            '<script></script>'),
                          (e = e.removeChild(e.firstChild)))
                        : 'string' === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          'select' === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    _o(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = ye(n, r)), n)) {
                      case 'dialog':
                        Dr('cancel', e), Dr('close', e), (a = r);
                        break;
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        Dr('load', e), (a = r);
                        break;
                      case 'video':
                      case 'audio':
                        for (a = 0; a < Nr.length; a++) Dr(Nr[a], e);
                        a = r;
                        break;
                      case 'source':
                        Dr('error', e), (a = r);
                        break;
                      case 'img':
                      case 'image':
                      case 'link':
                        Dr('error', e), Dr('load', e), (a = r);
                        break;
                      case 'details':
                        Dr('toggle', e), (a = r);
                        break;
                      case 'input':
                        J(e, r), (a = K(e, r)), Dr('invalid', e);
                        break;
                      case 'option':
                      default:
                        a = r;
                        break;
                      case 'select':
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = R({}, r, { value: void 0 })),
                          Dr('invalid', e);
                        break;
                      case 'textarea':
                        ae(e, r), (a = re(e, r)), Dr('invalid', e);
                    }
                    for (i in (be(n, a), (u = a)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        'style' === i
                          ? ge(e, c)
                          : 'dangerouslySetInnerHTML' === i
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : 'children' === i
                          ? 'string' === typeof c
                            ? ('textarea' !== n || '' !== c) && fe(e, c)
                            : 'number' === typeof c && fe(e, '' + c)
                          : 'suppressContentEditableWarning' !== i &&
                            'suppressHydrationWarning' !== i &&
                            'autoFocus' !== i &&
                            (o.hasOwnProperty(i)
                              ? null != c && 'onScroll' === i && Dr('scroll', e)
                              : null != c && y(e, i, c, s));
                      }
                    switch (n) {
                      case 'input':
                        Q(e), $(e, r, !1);
                        break;
                      case 'textarea':
                        Q(e), ie(e);
                        break;
                      case 'option':
                        null != r.value &&
                          e.setAttribute('value', '' + V(r.value));
                        break;
                      case 'select':
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        'function' === typeof a.onClick && (e.onclick = $r);
                    }
                    switch (n) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        r = !!r.autoFocus;
                        break e;
                      case 'img':
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return qo(t), null;
            case 6:
              if (e && null != t.stateNode) No(e, t, e.memoizedProps, r);
              else {
                if ('string' !== typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((n = ni(ti.current)), ni($l.current), dl(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (i = r.nodeValue !== n) && null !== (e = nl))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r,
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return qo(t), null;
            case 13:
              if (
                (Ea(oi),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fl(), pl(), (t.flags |= 98560), (i = !1);
                else if (((i = dl(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(l(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(l(317));
                    i[fa] = t;
                  } else
                    pl(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  qo(t), (i = !1);
                } else null !== ll && (ou(ll), (ll = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & oi.current)
                        ? 0 === Ns && (Ns = 3)
                        : gu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  qo(t),
                  null);
            case 4:
              return (
                ai(),
                Ao(e, t),
                null === e && Ur(t.stateNode.containerInfo),
                qo(t),
                null
              );
            case 10:
              return xl(t.type._context), qo(t), null;
            case 19:
              if ((Ea(oi), null === (i = t.memoizedState))) return qo(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (r) Qo(i, !1);
                else {
                  if (0 !== Ns || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = si(e))) {
                        for (
                          t.flags |= 128,
                            Qo(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ta(oi, (1 & oi.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Xe() > Gs &&
                    ((t.flags |= 128),
                    (r = !0),
                    Qo(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = si(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Qo(i, !0),
                      null === i.tail &&
                        'hidden' === i.tailMode &&
                        !s.alternate &&
                        !al)
                    )
                      return qo(t), null;
                  } else
                    2 * Xe() - i.renderingStartTime > Gs &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Qo(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s),
                    (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = oi.current),
                  Ta(oi, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (qo(t), null);
            case 22:
            case 23:
              return (
                fu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & As) &&
                    (qo(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : qo(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function Ko(e, t) {
          switch ((tl(t), t.tag)) {
            case 1:
              return (
                _a(t.type) && Aa(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ai(),
                Ea(Ma),
                Ea(Oa),
                ci(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return ii(t), null;
            case 13:
              if (
                (Ea(oi),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                pl();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ea(oi), null;
            case 4:
              return ai(), null;
            case 10:
              return xl(t.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (_o = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ao = function () {}),
          (Bo = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ni($l.current);
              var l,
                i = null;
              switch (n) {
                case 'input':
                  (a = K(e, a)), (r = K(e, r)), (i = []);
                  break;
                case 'select':
                  (a = R({}, a, { value: void 0 })),
                    (r = R({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case 'textarea':
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  'function' !== typeof a.onClick &&
                    'function' === typeof r.onClick &&
                    (e.onclick = $r);
              }
              for (c in (be(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ('style' === c) {
                    var s = a[c];
                    for (l in s)
                      s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
                  } else
                    'dangerouslySetInnerHTML' !== c &&
                      'children' !== c &&
                      'suppressContentEditableWarning' !== c &&
                      'suppressHydrationWarning' !== c &&
                      'autoFocus' !== c &&
                      (o.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ('style' === c)
                    if (s) {
                      for (l in s)
                        !s.hasOwnProperty(l) ||
                          (u && u.hasOwnProperty(l)) ||
                          (n || (n = {}), (n[l] = ''));
                      for (l in u)
                        u.hasOwnProperty(l) &&
                          s[l] !== u[l] &&
                          (n || (n = {}), (n[l] = u[l]));
                    } else n || (i || (i = []), i.push(c, n)), (n = u);
                  else
                    'dangerouslySetInnerHTML' === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (i = i || []).push(c, u))
                      : 'children' === c
                      ? ('string' !== typeof u && 'number' !== typeof u) ||
                        (i = i || []).push(c, '' + u)
                      : 'suppressContentEditableWarning' !== c &&
                        'suppressHydrationWarning' !== c &&
                        (o.hasOwnProperty(c)
                          ? (null != u && 'onScroll' === c && Dr('scroll', e),
                            i || s === u || (i = []))
                          : (i = i || []).push(c, u));
              }
              n && (i = i || []).push('style', n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (No = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Jo = !1,
          Xo = !1,
          Zo = 'function' === typeof WeakSet ? WeakSet : Set,
          $o = null;
        function es(e, t) {
          var n = e.ref;
          if (null !== n)
            if ('function' === typeof n)
              try {
                n(null);
              } catch (r) {
                Eu(e, t, r);
              }
            else n.current = null;
        }
        function ts(e, t, n) {
          try {
            n();
          } catch (r) {
            Eu(e, t, r);
          }
        }
        var ns = !1;
        function rs(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && ts(t, n, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function as(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ls(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), 'function' === typeof t ? t(e) : (t.current = e);
          }
        }
        function is(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), is(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ma],
              delete t[ga],
              delete t[va]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function os(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || os(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = $r));
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; )
              cs(e, t, n), (e = e.sibling);
        }
        var ds = null,
          fs = !1;
        function ps(e, t, n) {
          for (n = n.child; null !== n; ) hs(e, t, n), (n = n.sibling);
        }
        function hs(e, t, n) {
          if (lt && 'function' === typeof lt.onCommitFiberUnmount)
            try {
              lt.onCommitFiberUnmount(at, n);
            } catch (o) {}
          switch (n.tag) {
            case 5:
              Xo || es(n, t);
            case 6:
              var r = ds,
                a = fs;
              (ds = null),
                ps(e, t, n),
                (fs = a),
                null !== (ds = r) &&
                  (fs
                    ? ((e = ds),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : ds.removeChild(n.stateNode));
              break;
            case 18:
              null !== ds &&
                (fs
                  ? ((e = ds),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Ut(e))
                  : sa(ds, n.stateNode));
              break;
            case 4:
              (r = ds),
                (a = fs),
                (ds = n.stateNode.containerInfo),
                (fs = !0),
                ps(e, t, n),
                (ds = r),
                (fs = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xo &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    i = l.destroy;
                  (l = l.tag),
                    void 0 !== i &&
                      (0 !== (2 & l) || 0 !== (4 & l)) &&
                      ts(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              ps(e, t, n);
              break;
            case 1:
              if (
                !Xo &&
                (es(n, t),
                'function' === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (o) {
                  Eu(n, t, o);
                }
              ps(e, t, n);
              break;
            case 21:
              ps(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xo = (r = Xo) || null !== n.memoizedState),
                  ps(e, t, n),
                  (Xo = r))
                : ps(e, t, n);
              break;
            default:
              ps(e, t, n);
          }
        }
        function ms(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Zo()),
              t.forEach(function (t) {
                var r = Mu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  o = t,
                  s = o;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (ds = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (ds = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === ds) throw Error(l(160));
                hs(i, o, a), (ds = null), (fs = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                Eu(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vs(t, e), (t = t.sibling);
        }
        function vs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gs(t, e), bs(e), 4 & r)) {
                try {
                  rs(3, e, e.return), as(3, e);
                } catch (g) {
                  Eu(e, e.return, g);
                }
                try {
                  rs(5, e, e.return);
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              break;
            case 1:
              gs(t, e), bs(e), 512 & r && null !== n && es(n, n.return);
              break;
            case 5:
              if (
                (gs(t, e),
                bs(e),
                512 & r && null !== n && es(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, '');
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  o = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    'input' === s &&
                      'radio' === i.type &&
                      null != i.name &&
                      X(a, i),
                      ye(s, o);
                    var c = ye(s, i);
                    for (o = 0; o < u.length; o += 2) {
                      var d = u[o],
                        f = u[o + 1];
                      'style' === d
                        ? ge(a, f)
                        : 'dangerouslySetInnerHTML' === d
                        ? de(a, f)
                        : 'children' === d
                        ? fe(a, f)
                        : y(a, d, f, c);
                    }
                    switch (s) {
                      case 'input':
                        Z(a, i);
                        break;
                      case 'textarea':
                        le(a, i);
                        break;
                      case 'select':
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : '', !1));
                    }
                    a[pa] = i;
                  } catch (g) {
                    Eu(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((gs(t, e), bs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (gs(t, e),
                bs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ut(t.containerInfo);
                } catch (g) {
                  Eu(e, e.return, g);
                }
              break;
            case 4:
            default:
              gs(t, e), bs(e);
              break;
            case 13:
              gs(t, e),
                bs(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Us = Xe())),
                4 & r && ms(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xo = (c = Xo) || d), gs(t, e), (Xo = c))
                  : gs(t, e),
                bs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for ($o = e, d = e.child; null !== d; ) {
                    for (f = $o = d; null !== $o; ) {
                      switch (((h = (p = $o).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rs(4, p, p.return);
                          break;
                        case 1:
                          es(p, p.return);
                          var m = p.stateNode;
                          if ('function' === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              Eu(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          es(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            xs(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), ($o = h)) : xs(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? 'function' === typeof (i = a.style).setProperty
                              ? i.setProperty('display', 'none', 'important')
                              : (i.display = 'none')
                            : ((s = f.stateNode),
                              (o =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty('display')
                                  ? u.display
                                  : null),
                              (s.style.display = me('display', o)));
                      } catch (g) {
                        Eu(e, e.return, g);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? '' : f.memoizedProps;
                      } catch (g) {
                        Eu(e, e.return, g);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              gs(t, e), bs(e), 4 & r && ms(e);
            case 21:
          }
        }
        function bs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (os(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(l(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ''), (r.flags &= -33)),
                    cs(e, ss(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  us(e, ss(e), i);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (o) {
              Eu(e, e.return, o);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ys(e, t, n) {
          ($o = e), ws(e, t, n);
        }
        function ws(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== $o; ) {
            var a = $o,
              l = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Jo;
              if (!i) {
                var o = a.alternate,
                  s = (null !== o && null !== o.memoizedState) || Xo;
                o = Jo;
                var u = Xo;
                if (((Jo = i), (Xo = s) && !u))
                  for ($o = a; null !== $o; )
                    (s = (i = $o).child),
                      22 === i.tag && null !== i.memoizedState
                        ? Cs(a)
                        : null !== s
                        ? ((s.return = i), ($o = s))
                        : Cs(a);
                for (; null !== l; ) ($o = l), ws(l, t, n), (l = l.sibling);
                ($o = a), (Jo = o), (Xo = u);
              }
              Ss(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), ($o = l))
                : Ss(e);
          }
        }
        function Ss(e) {
          for (; null !== $o; ) {
            var t = $o;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xo || as(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xo)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : gl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Il(t, i, r);
                      break;
                    case 3:
                      var o = t.updateQueue;
                      if (null !== o) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Il(t, o, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            u.autoFocus && n.focus();
                            break;
                          case 'img':
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Ut(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Xo || (512 & t.flags && ls(t));
              } catch (p) {
                Eu(t, t.return, p);
              }
            }
            if (t === e) {
              $o = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), ($o = n);
              break;
            }
            $o = t.return;
          }
        }
        function xs(e) {
          for (; null !== $o; ) {
            var t = $o;
            if (t === e) {
              $o = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), ($o = n);
              break;
            }
            $o = t.return;
          }
        }
        function Cs(e) {
          for (; null !== $o; ) {
            var t = $o;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    as(4, t);
                  } catch (s) {
                    Eu(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ('function' === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Eu(t, a, s);
                    }
                  }
                  var l = t.return;
                  try {
                    ls(t);
                  } catch (s) {
                    Eu(t, l, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    ls(t);
                  } catch (s) {
                    Eu(t, i, s);
                  }
              }
            } catch (s) {
              Eu(t, t.return, s);
            }
            if (t === e) {
              $o = null;
              break;
            }
            var o = t.sibling;
            if (null !== o) {
              (o.return = t.return), ($o = o);
              break;
            }
            $o = t.return;
          }
        }
        var ks,
          Es = Math.ceil,
          Ts = w.ReactCurrentDispatcher,
          Ps = w.ReactCurrentOwner,
          Os = w.ReactCurrentBatchConfig,
          Ms = 0,
          zs = null,
          Ls = null,
          _s = 0,
          As = 0,
          Bs = ka(0),
          Ns = 0,
          js = null,
          Rs = 0,
          Is = 0,
          Ds = 0,
          Fs = null,
          Hs = null,
          Us = 0,
          Gs = 1 / 0,
          Vs = null,
          Ws = !1,
          Qs = null,
          qs = null,
          Ys = !1,
          Ks = null,
          Js = 0,
          Xs = 0,
          Zs = null,
          $s = -1,
          eu = 0;
        function tu() {
          return 0 !== (6 & Ms) ? Xe() : -1 !== $s ? $s : ($s = Xe());
        }
        function nu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ms) && 0 !== _s
            ? _s & -_s
            : null !== ml.transition
            ? (0 === eu && (eu = mt()), eu)
            : 0 !== (e = yt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Jt(e.type));
        }
        function ru(e, t, n, r) {
          if (50 < Xs) throw ((Xs = 0), (Zs = null), Error(l(185)));
          vt(e, n, r),
            (0 !== (2 & Ms) && e === zs) ||
              (e === zs && (0 === (2 & Ms) && (Is |= n), 4 === Ns && su(e, _s)),
              au(e, r),
              1 === n &&
                0 === Ms &&
                0 === (1 & t.mode) &&
                ((Gs = Xe() + 500), Da && Ua()));
        }
        function au(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var i = 31 - it(l),
                o = 1 << i,
                s = a[i];
              -1 === s
                ? (0 !== (o & n) && 0 === (o & r)) || (a[i] = pt(o, t))
                : s <= t && (e.expiredLanes |= o),
                (l &= ~o);
            }
          })(e, t);
          var r = ft(e, e === zs ? _s : 0);
          if (0 === r)
            null !== n && Ye(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ye(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Da = !0), Ha(e);
                  })(uu.bind(null, e))
                : Ha(uu.bind(null, e)),
                ia(function () {
                  0 === (6 & Ms) && Ua();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = $e;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = zu(n, lu.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function lu(e, t) {
          if ((($s = -1), (eu = 0), 0 !== (6 & Ms))) throw Error(l(327));
          var n = e.callbackNode;
          if (Cu() && e.callbackNode !== n) return null;
          var r = ft(e, e === zs ? _s : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vu(e, r);
          else {
            t = r;
            var a = Ms;
            Ms |= 2;
            var i = mu();
            for (
              (zs === e && _s === t) ||
              ((Vs = null), (Gs = Xe() + 500), pu(e, t));
              ;

            )
              try {
                yu();
                break;
              } catch (s) {
                hu(e, s);
              }
            Sl(),
              (Ts.current = i),
              (Ms = a),
              null !== Ls ? (t = 0) : ((zs = null), (_s = 0), (t = Ns));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = iu(e, a))),
              1 === t)
            )
              throw ((n = js), pu(e, 0), su(e, r), au(e, Xe()), n);
            if (6 === t) su(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              l = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!or(l(), a)) return !1;
                            } catch (o) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = vu(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = iu(e, i))),
                  1 === t))
              )
                throw ((n = js), pu(e, 0), su(e, r), au(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  xu(e, Hs, Vs);
                  break;
                case 3:
                  if (
                    (su(e, r),
                    (130023424 & r) === r && 10 < (t = Us + 500 - Xe()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(xu.bind(null, e, Hs, Vs), t);
                    break;
                  }
                  xu(e, Hs, Vs);
                  break;
                case 4:
                  if ((su(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var o = 31 - it(r);
                    (i = 1 << o), (o = t[o]) > a && (a = o), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Es(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(xu.bind(null, e, Hs, Vs), r);
                    break;
                  }
                  xu(e, Hs, Vs);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return au(e, Xe()), e.callbackNode === n ? lu.bind(null, e) : null;
        }
        function iu(e, t) {
          var n = Fs;
          return (
            e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
            2 !== (e = vu(e, t)) && ((t = Hs), (Hs = n), null !== t && ou(t)),
            e
          );
        }
        function ou(e) {
          null === Hs ? (Hs = e) : Hs.push.apply(Hs, e);
        }
        function su(e, t) {
          for (
            t &= ~Ds,
              t &= ~Is,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uu(e) {
          if (0 !== (6 & Ms)) throw Error(l(327));
          Cu();
          var t = ft(e, 0);
          if (0 === (1 & t)) return au(e, Xe()), null;
          var n = vu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = iu(e, r)));
          }
          if (1 === n) throw ((n = js), pu(e, 0), su(e, t), au(e, Xe()), n);
          if (6 === n) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xu(e, Hs, Vs),
            au(e, Xe()),
            null
          );
        }
        function cu(e, t) {
          var n = Ms;
          Ms |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ms = n) && ((Gs = Xe() + 500), Da && Ua());
          }
        }
        function du(e) {
          null !== Ks && 0 === Ks.tag && 0 === (6 & Ms) && Cu();
          var t = Ms;
          Ms |= 1;
          var n = Os.transition,
            r = yt;
          try {
            if (((Os.transition = null), (yt = 1), e)) return e();
          } finally {
            (yt = r), (Os.transition = n), 0 === (6 & (Ms = t)) && Ua();
          }
        }
        function fu() {
          (As = Bs.current), Ea(Bs);
        }
        function pu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ls))
            for (n = Ls.return; null !== n; ) {
              var r = n;
              switch ((tl(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Aa();
                  break;
                case 3:
                  ai(), Ea(Ma), Ea(Oa), ci();
                  break;
                case 5:
                  ii(r);
                  break;
                case 4:
                  ai();
                  break;
                case 13:
                case 19:
                  Ea(oi);
                  break;
                case 10:
                  xl(r.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              n = n.return;
            }
          if (
            ((zs = e),
            (Ls = e = Bu(e.current, null)),
            (_s = As = t),
            (Ns = 0),
            (js = null),
            (Ds = Is = Rs = 0),
            (Hs = Fs = null),
            null !== Tl)
          ) {
            for (t = 0; t < Tl.length; t++)
              if (null !== (r = (n = Tl[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  l = n.pending;
                if (null !== l) {
                  var i = l.next;
                  (l.next = a), (r.next = i);
                }
                n.pending = r;
              }
            Tl = null;
          }
          return e;
        }
        function hu(e, t) {
          for (;;) {
            var n = Ls;
            try {
              if ((Sl(), (di.current = lo), vi)) {
                for (var r = hi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                vi = !1;
              }
              if (
                ((pi = 0),
                (gi = mi = hi = null),
                (bi = !1),
                (yi = 0),
                (Ps.current = null),
                null === n || null === n.return)
              ) {
                (Ns = 1), (js = t), (Ls = null);
                break;
              }
              e: {
                var i = e,
                  o = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = _s),
                  (s.flags |= 32768),
                  null !== u &&
                    'object' === typeof u &&
                    'function' === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = vo(o);
                  if (null !== h) {
                    (h.flags &= -257),
                      bo(h, o, s, 0, t),
                      1 & h.mode && go(i, c, t),
                      (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    go(i, c, t), gu();
                    break e;
                  }
                  u = Error(l(426));
                } else if (al && 1 & s.mode) {
                  var v = vo(o);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      bo(v, o, s, 0, t),
                      hl(uo(u, s));
                    break e;
                  }
                }
                (i = u = uo(u, s)),
                  4 !== Ns && (Ns = 2),
                  null === Fs ? (Fs = [i]) : Fs.push(i),
                  (i = o);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        jl(i, ho(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var b = i.type,
                        y = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ('function' === typeof b.getDerivedStateFromError ||
                          (null !== y &&
                            'function' === typeof y.componentDidCatch &&
                            (null === qs || !qs.has(y))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          jl(i, mo(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              Su(n);
            } catch (w) {
              (t = w), Ls === n && null !== n && (Ls = n = n.return);
              continue;
            }
            break;
          }
        }
        function mu() {
          var e = Ts.current;
          return (Ts.current = lo), null === e ? lo : e;
        }
        function gu() {
          (0 !== Ns && 3 !== Ns && 2 !== Ns) || (Ns = 4),
            null === zs ||
              (0 === (268435455 & Rs) && 0 === (268435455 & Is)) ||
              su(zs, _s);
        }
        function vu(e, t) {
          var n = Ms;
          Ms |= 2;
          var r = mu();
          for ((zs === e && _s === t) || ((Vs = null), pu(e, t)); ; )
            try {
              bu();
              break;
            } catch (a) {
              hu(e, a);
            }
          if ((Sl(), (Ms = n), (Ts.current = r), null !== Ls))
            throw Error(l(261));
          return (zs = null), (_s = 0), Ns;
        }
        function bu() {
          for (; null !== Ls; ) wu(Ls);
        }
        function yu() {
          for (; null !== Ls && !Ke(); ) wu(Ls);
        }
        function wu(e) {
          var t = ks(e.alternate, e, As);
          (e.memoizedProps = e.pendingProps),
            null === t ? Su(e) : (Ls = t),
            (Ps.current = null);
        }
        function Su(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Yo(n, t, As))) return void (Ls = n);
            } else {
              if (null !== (n = Ko(n, t)))
                return (n.flags &= 32767), void (Ls = n);
              if (null === e) return (Ns = 6), void (Ls = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ls = t);
            Ls = t = e;
          } while (null !== t);
          0 === Ns && (Ns = 5);
        }
        function xu(e, t, n) {
          var r = yt,
            a = Os.transition;
          try {
            (Os.transition = null),
              (yt = 1),
              (function (e, t, n, r) {
                do {
                  Cu();
                } while (null !== Ks);
                if (0 !== (6 & Ms)) throw Error(l(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(l(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        l = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                    }
                  })(e, i),
                  e === zs && ((Ls = zs = null), (_s = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ys ||
                    ((Ys = !0),
                    zu(tt, function () {
                      return Cu(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Os.transition), (Os.transition = null);
                  var o = yt;
                  yt = 1;
                  var s = Ms;
                  (Ms |= 4),
                    (Ps.current = null),
                    (function (e, t) {
                      if (((ea = Vt), pr((e = fr())))) {
                        if ('selectionStart' in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (S) {
                                n = null;
                                break e;
                              }
                              var o = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = o + a),
                                    f !== i ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = o + r),
                                    3 === f.nodeType &&
                                      (o += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === a && (s = o),
                                    p === i && ++d === r && (u = o),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Vt = !1,
                          $o = t;
                        null !== $o;

                      )
                        if (
                          ((e = (t = $o).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), ($o = e);
                        else
                          for (; null !== $o; ) {
                            t = $o;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        v = m.memoizedState,
                                        b = t.stateNode,
                                        y = b.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : gl(t.type, g),
                                          v,
                                        );
                                      b.__reactInternalSnapshotBeforeUpdate = y;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = '')
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (S) {
                              Eu(t, t.return, S);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), ($o = e);
                              break;
                            }
                            $o = t.return;
                          }
                      (m = ns), (ns = !1);
                    })(e, n),
                    vs(n, e),
                    hr(ta),
                    (Vt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    ys(n, e, a),
                    Je(),
                    (Ms = s),
                    (yt = o),
                    (Os.transition = i);
                } else e.current = n;
                if (
                  (Ys && ((Ys = !1), (Ks = e), (Js = a)),
                  (i = e.pendingLanes),
                  0 === i && (qs = null),
                  (function (e) {
                    if (lt && 'function' === typeof lt.onCommitFiberRoot)
                      try {
                        lt.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags),
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  au(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Ws) throw ((Ws = !1), (e = Qs), (Qs = null), e);
                0 !== (1 & Js) && 0 !== e.tag && Cu(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Zs
                      ? Xs++
                      : ((Xs = 0), (Zs = e))
                    : (Xs = 0),
                  Ua();
              })(e, t, n, r);
          } finally {
            (Os.transition = a), (yt = r);
          }
          return null;
        }
        function Cu() {
          if (null !== Ks) {
            var e = wt(Js),
              t = Os.transition,
              n = yt;
            try {
              if (((Os.transition = null), (yt = 16 > e ? 16 : e), null === Ks))
                var r = !1;
              else {
                if (((e = Ks), (Ks = null), (Js = 0), 0 !== (6 & Ms)))
                  throw Error(l(331));
                var a = Ms;
                for (Ms |= 4, $o = e.current; null !== $o; ) {
                  var i = $o,
                    o = i.child;
                  if (0 !== (16 & $o.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for ($o = c; null !== $o; ) {
                          var d = $o;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), ($o = f);
                          else
                            for (; null !== $o; ) {
                              var p = (d = $o).sibling,
                                h = d.return;
                              if ((is(d), d === c)) {
                                $o = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), ($o = p);
                                break;
                              }
                              $o = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      $o = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== o)
                    (o.return = i), ($o = o);
                  else
                    e: for (; null !== $o; ) {
                      if (0 !== (2048 & (i = $o).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(9, i, i.return);
                        }
                      var b = i.sibling;
                      if (null !== b) {
                        (b.return = i.return), ($o = b);
                        break e;
                      }
                      $o = i.return;
                    }
                }
                var y = e.current;
                for ($o = y; null !== $o; ) {
                  var w = (o = $o).child;
                  if (0 !== (2064 & o.subtreeFlags) && null !== w)
                    (w.return = o), ($o = w);
                  else
                    e: for (o = y; null !== $o; ) {
                      if (0 !== (2048 & (s = $o).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              as(9, s);
                          }
                        } catch (x) {
                          Eu(s, s.return, x);
                        }
                      if (s === o) {
                        $o = null;
                        break e;
                      }
                      var S = s.sibling;
                      if (null !== S) {
                        (S.return = s.return), ($o = S);
                        break e;
                      }
                      $o = s.return;
                    }
                }
                if (
                  ((Ms = a),
                  Ua(),
                  lt && 'function' === typeof lt.onPostCommitFiberRoot)
                )
                  try {
                    lt.onPostCommitFiberRoot(at, e);
                  } catch (x) {}
                r = !0;
              }
              return r;
            } finally {
              (yt = n), (Os.transition = t);
            }
          }
          return !1;
        }
        function ku(e, t, n) {
          (e = Bl(e, (t = ho(0, (t = uo(n, t)), 1)), 1)),
            (t = tu()),
            null !== e && (vt(e, 1, t), au(e, t));
        }
        function Eu(e, t, n) {
          if (3 === e.tag) ku(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                ku(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  'function' === typeof t.type.getDerivedStateFromError ||
                  ('function' === typeof r.componentDidCatch &&
                    (null === qs || !qs.has(r)))
                ) {
                  (t = Bl(t, (e = mo(t, (e = uo(n, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (vt(t, 1, e), au(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Tu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            zs === e &&
              (_s & n) === n &&
              (4 === Ns ||
              (3 === Ns && (130023424 & _s) === _s && 500 > Xe() - Us)
                ? pu(e, 0)
                : (Ds |= n)),
            au(e, t);
        }
        function Pu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = tu();
          null !== (e = Ml(e, t)) && (vt(e, t, n), au(e, n));
        }
        function Ou(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Pu(e, n);
        }
        function Mu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(l(314));
          }
          null !== r && r.delete(t), Pu(e, n);
        }
        function zu(e, t) {
          return qe(e, t);
        }
        function Lu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function _u(e, t, n, r) {
          return new Lu(e, t, n, r);
        }
        function Au(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Bu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = _u(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Nu(e, t, n, r, a, i) {
          var o = 2;
          if (((r = e), 'function' === typeof e)) Au(e) && (o = 1);
          else if ('string' === typeof e) o = 5;
          else
            e: switch (e) {
              case C:
                return ju(n.children, a, i, t);
              case k:
                (o = 8), (a |= 8);
                break;
              case E:
                return (
                  ((e = _u(12, n, t, 2 | a)).elementType = E), (e.lanes = i), e
                );
              case M:
                return (
                  ((e = _u(13, n, t, a)).elementType = M), (e.lanes = i), e
                );
              case z:
                return (
                  ((e = _u(19, n, t, a)).elementType = z), (e.lanes = i), e
                );
              case A:
                return Ru(n, a, i, t);
              default:
                if ('object' === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case T:
                      o = 10;
                      break e;
                    case P:
                      o = 9;
                      break e;
                    case O:
                      o = 11;
                      break e;
                    case L:
                      o = 14;
                      break e;
                    case _:
                      (o = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ''));
            }
          return (
            ((t = _u(o, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function ju(e, t, n, r) {
          return ((e = _u(7, e, r, t)).lanes = n), e;
        }
        function Ru(e, t, n, r) {
          return (
            ((e = _u(22, e, r, t)).elementType = A),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Iu(e, t, n) {
          return ((e = _u(6, e, null, t)).lanes = n), e;
        }
        function Du(e, t, n) {
          return (
            ((t = _u(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Fu(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Hu(e, t, n, r, a, l, i, o, s) {
          return (
            (e = new Fu(e, t, n, o, s)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = _u(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ll(l),
            e
          );
        }
        function Uu(e) {
          if (!e) return Pa;
          e: {
            if (Ue((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (_a(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(l(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (_a(n)) return Na(e, n, t);
          }
          return t;
        }
        function Gu(e, t, n, r, a, l, i, o, s) {
          return (
            ((e = Hu(n, r, !0, e, 0, l, 0, o, s)).context = Uu(null)),
            (n = e.current),
            ((l = Al((r = tu()), (a = nu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Bl(n, l, a),
            (e.current.lanes = a),
            vt(e, a, r),
            au(e, r),
            e
          );
        }
        function Vu(e, t, n, r) {
          var a = t.current,
            l = tu(),
            i = nu(a);
          return (
            (n = Uu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Al(l, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Bl(a, t, i)) && (ru(e, a, i, l), Nl(e, a, i)),
            i
          );
        }
        function Wu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qu(e, t) {
          Qu(e, t), (e = e.alternate) && Qu(e, t);
        }
        ks = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ma.current) wo = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wo = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        zo(t), pl();
                        break;
                      case 5:
                        li(t);
                        break;
                      case 1:
                        _a(t.type) && ja(t);
                        break;
                      case 4:
                        ri(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ta(vl, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ta(oi, 1 & oi.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Io(e, t, n)
                            : (Ta(oi, 1 & oi.current),
                              null !== (e = Wo(e, t, n)) ? e.sibling : null);
                        Ta(oi, 1 & oi.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Go(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ta(oi, oi.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Eo(e, t, n);
                    }
                    return Wo(e, t, n);
                  })(e, t, n)
                );
              wo = 0 !== (131072 & e.flags);
            }
          else (wo = !1), al && 0 !== (1048576 & t.flags) && $a(t, Qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Vo(e, t), (e = t.pendingProps);
              var a = La(t, Oa.current);
              kl(t, n), (a = Ci(null, t, r, e, a, n));
              var i = ki();
              return (
                (t.flags |= 1),
                'object' === typeof a &&
                null !== a &&
                'function' === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    _a(r) ? ((i = !0), ja(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ll(t),
                    (a.updater = Hl),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Wl(t, r, e, n),
                    (t = Mo(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    al && i && el(t),
                    So(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Vo(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ('function' === typeof e) return Au(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === O) return 11;
                        if (e === L) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = gl(r, e)),
                  a)
                ) {
                  case 0:
                    t = Po(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Oo(null, t, r, e, n);
                    break e;
                  case 11:
                    t = xo(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Co(null, t, r, gl(r.type, e), n);
                    break e;
                }
                throw Error(l(306, r, ''));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Po(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Oo(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 3:
              e: {
                if ((zo(t), null === e)) throw Error(l(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  _l(e, t),
                  Rl(t, r, null, n);
                var o = t.memoizedState;
                if (((r = o.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: o.cache,
                      pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                      transitions: o.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Lo(e, t, r, n, (a = uo(Error(l(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Lo(e, t, r, n, (a = uo(Error(l(424)), t)));
                    break e;
                  }
                  for (
                    rl = ua(t.stateNode.containerInfo.firstChild),
                      nl = t,
                      al = !0,
                      ll = null,
                      n = Xl(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pl(), r === a)) {
                    t = Wo(e, t, n);
                    break e;
                  }
                  So(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                li(t),
                null === e && ul(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (o = a.children),
                na(r, a)
                  ? (o = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                To(e, t),
                So(e, t, o, n),
                t.child
              );
            case 6:
              return null === e && ul(t), null;
            case 13:
              return Io(e, t, n);
            case 4:
              return (
                ri(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Jl(t, null, r, n)) : So(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                xo(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 7:
              return So(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return So(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (o = a.value),
                  Ta(vl, r._currentValue),
                  (r._currentValue = o),
                  null !== i)
                )
                  if (or(i.value, o)) {
                    if (i.children === a.children && !Ma.current) {
                      t = Wo(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        o = i.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = Al(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              Cl(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag)
                        o = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (o = i.return)) throw Error(l(341));
                        (o.lanes |= n),
                          null !== (s = o.alternate) && (s.lanes |= n),
                          Cl(o, n, t),
                          (o = i.sibling);
                      } else o = i.child;
                      if (null !== o) o.return = i;
                      else
                        for (o = i; null !== o; ) {
                          if (o === t) {
                            o = null;
                            break;
                          }
                          if (null !== (i = o.sibling)) {
                            (i.return = o.return), (o = i);
                            break;
                          }
                          o = o.return;
                        }
                      i = o;
                    }
                So(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                kl(t, n),
                (r = r((a = El(a)))),
                (t.flags |= 1),
                So(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = gl((r = t.type), t.pendingProps)),
                Co(e, t, r, (a = gl(r.type, a)), n)
              );
            case 15:
              return ko(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : gl(r, a)),
                Vo(e, t),
                (t.tag = 1),
                _a(r) ? ((e = !0), ja(t)) : (e = !1),
                kl(t, n),
                Gl(t, r, a),
                Wl(t, r, a, n),
                Mo(null, t, r, !0, e, n)
              );
            case 19:
              return Go(e, t, n);
            case 22:
              return Eo(e, t, n);
          }
          throw Error(l(156, t.tag));
        };
        var Yu =
          'function' === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ku(e) {
          this._internalRoot = e;
        }
        function Ju(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                ' react-mount-point-unstable ' !== e.nodeValue))
          );
        }
        function $u() {}
        function ec(e, t, n, r, a) {
          var l = n._reactRootContainer;
          if (l) {
            var i = l;
            if ('function' === typeof a) {
              var o = a;
              a = function () {
                var e = Wu(i);
                o.call(e);
              };
            }
            Vu(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ('function' === typeof r) {
                  var l = r;
                  r = function () {
                    var e = Wu(i);
                    l.call(e);
                  };
                }
                var i = Gu(t, r, e, 0, null, !1, 0, '', $u);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  Ur(8 === e.nodeType ? e.parentNode : e),
                  du(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ('function' === typeof r) {
                var o = r;
                r = function () {
                  var e = Wu(s);
                  o.call(e);
                };
              }
              var s = Hu(e, 0, !1, null, 0, !1, 0, '', $u);
              return (
                (e._reactRootContainer = s),
                (e[ha] = s.current),
                Ur(8 === e.nodeType ? e.parentNode : e),
                du(function () {
                  Vu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Wu(i);
        }
        (Ju.prototype.render = Ku.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            Vu(e, t, null, null);
          }),
          (Ju.prototype.unmount = Ku.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                du(function () {
                  Vu(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Ju.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = kt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < At.length && 0 !== t && t < At[n].priority;
                n++
              );
              At.splice(n, 0, e), 0 === n && Rt(e);
            }
          }),
          (St = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (bt(t, 1 | n),
                    au(t, Xe()),
                    0 === (6 & Ms) && ((Gs = Xe() + 500), Ua()));
                }
                break;
              case 13:
                du(function () {
                  var t = Ml(e, 1);
                  if (null !== t) {
                    var n = tu();
                    ru(t, e, 1, n);
                  }
                }),
                  qu(e, 1);
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = Ml(e, 134217728);
              if (null !== t) ru(t, e, 134217728, tu());
              qu(e, 134217728);
            }
          }),
          (Ct = function (e) {
            if (13 === e.tag) {
              var t = nu(e),
                n = Ml(e, t);
              if (null !== n) ru(n, e, t, tu());
              qu(e, t);
            }
          }),
          (kt = function () {
            return yt;
          }),
          (Et = function (e, t) {
            var n = yt;
            try {
              return (yt = e), t();
            } finally {
              yt = n;
            }
          }),
          (xe = function (e, t, n) {
            switch (t) {
              case 'input':
                if ((Z(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name=' +
                        JSON.stringify('' + t) +
                        '][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = Sa(r);
                      if (!a) throw Error(l(90));
                      q(r), Z(r, a);
                    }
                  }
                }
                break;
              case 'textarea':
                le(e, n);
                break;
              case 'select':
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Oe = cu),
          (Me = du);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ya, wa, Sa, Te, Pe, cu],
          },
          nc = {
            findFiberByHostInstance: ba,
            bundleType: 0,
            version: '18.2.0',
            rendererPackageName: 'react-dom',
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
          };
        if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (lt = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xu(t)) throw Error(l(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: x,
                key: null == r ? null : '' + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xu(e)) throw Error(l(299));
            var n = !1,
              r = '',
              a = Yu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Hu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Ur(8 === e.nodeType ? e.parentNode : e),
              new Ku(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ('function' === typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(',')), Error(l(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return du(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zu(t)) throw Error(l(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xu(e)) throw Error(l(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = '',
              o = Yu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
              (t = Gu(t, null, e, 1, null != n ? n : null, a, 0, i, o)),
              (e[ha] = t.current),
              Ur(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ju(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zu(t)) throw Error(l(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zu(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (du(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zu(n)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = '18.2.0-next-9e3b772b8-20220608');
      },
      391: (e, t, n) => {
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      153: (e, t, n) => {
        var r = n(43),
          a = Symbol.for('react.element'),
          l = Symbol.for('react.fragment'),
          i = Object.prototype.hasOwnProperty,
          o =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            l = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = '' + n),
          void 0 !== t.key && (u = '' + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (l[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: l,
            _owner: o.current,
          };
        }
        (t.Fragment = l), (t.jsx = u), (t.jsxs = u);
      },
      202: (e, t) => {
        var n = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          a = Symbol.for('react.fragment'),
          l = Symbol.for('react.strict_mode'),
          i = Symbol.for('react.profiler'),
          o = Symbol.for('react.provider'),
          s = Symbol.for('react.context'),
          u = Symbol.for('react.forward_ref'),
          c = Symbol.for('react.suspense'),
          d = Symbol.for('react.memo'),
          f = Symbol.for('react.lazy'),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function b() {}
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ('object' !== typeof e && 'function' !== typeof e && null != e)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
              );
            this.updater.enqueueSetState(this, e, t, 'setState');
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
          }),
          (b.prototype = v.prototype);
        var w = (y.prototype = new b());
        (w.constructor = y), m(w, v.prototype), (w.isPureReactComponent = !0);
        var S = Array.isArray,
          x = Object.prototype.hasOwnProperty,
          C = { current: null },
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var a,
            l = {},
            i = null,
            o = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (o = t.ref),
            void 0 !== t.key && (i = '' + t.key),
            t))
              x.call(t, a) && !k.hasOwnProperty(a) && (l[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) l.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            l.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === l[a] && (l[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: o,
            props: l,
            _owner: C.current,
          };
        }
        function T(e) {
          return 'object' === typeof e && null !== e && e.$$typeof === n;
        }
        var P = /\/+/g;
        function O(e, t) {
          return 'object' === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { '=': '=0', ':': '=2' };
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })('' + e.key)
            : t.toString(36);
        }
        function M(e, t, a, l, i) {
          var o = typeof e;
          ('undefined' !== o && 'boolean' !== o) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (o) {
              case 'string':
              case 'number':
                s = !0;
                break;
              case 'object':
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = '' === l ? '.' + O(s, 0) : l),
              S(i)
                ? ((a = ''),
                  null != e && (a = e.replace(P, '$&/') + '/'),
                  M(i, t, a, '', function (e) {
                    return e;
                  }))
                : null != i &&
                  (T(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (s && s.key === i.key)
                          ? ''
                          : ('' + i.key).replace(P, '$&/') + '/') +
                        e,
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (l = '' === l ? '.' : l + ':'), S(e)))
            for (var u = 0; u < e.length; u++) {
              var c = l + O((o = e[u]), u);
              s += M(o, t, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || 'object' !== typeof e
                ? null
                : 'function' === typeof (e = (p && e[p]) || e['@@iterator'])
                ? e
                : null;
            })(e)),
            'function' === typeof c)
          )
            for (e = c.call(e), u = 0; !(o = e.next()).done; )
              s += M((o = o.value), t, a, (c = l + O(o, u++)), i);
          else if ('object' === o)
            throw (
              ((t = String(e)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === t
                    ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                    : t) +
                  '). If you meant to render a collection of children, use an array instead.',
              ))
            );
          return s;
        }
        function z(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            M(e, r, '', '', function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function L(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var _ = { current: null },
          A = { transition: null },
          B = {
            ReactCurrentDispatcher: _,
            ReactCurrentBatchConfig: A,
            ReactCurrentOwner: C,
          };
        (t.Children = {
          map: z,
          forEach: function (e, t, n) {
            z(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              z(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              z(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!T(e))
              throw Error(
                'React.Children.only expected to receive a single React element child.',
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = y),
          (t.StrictMode = l),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  e +
                  '.',
              );
            var a = m({}, e.props),
              l = e.key,
              i = e.ref,
              o = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (o = C.current)),
                void 0 !== t.key && (l = '' + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                x.call(t, u) &&
                  !k.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: l,
              ref: i,
              props: a,
              _owner: o,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: o, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = T),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: L,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = A.transition;
            A.transition = {};
            try {
              e();
            } finally {
              A.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              'act(...) is not supported in production builds of React.',
            );
          }),
          (t.useCallback = function (e, t) {
            return _.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return _.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return _.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return _.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return _.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return _.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return _.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return _.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return _.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return _.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return _.current.useRef(e);
          }),
          (t.useState = function (e) {
            return _.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return _.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return _.current.useTransition();
          }),
          (t.version = '18.2.0');
      },
      43: (e, t, n) => {
        e.exports = n(202);
      },
      579: (e, t, n) => {
        e.exports = n(153);
      },
      234: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var o = 2 * (r + 1) - 1,
                s = e[o],
                u = o + 1,
                c = e[u];
              if (0 > l(s, n))
                u < a && 0 > l(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[o] = n), (r = o));
              else {
                if (!(u < a && 0 > l(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          'object' === typeof performance &&
          'function' === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var o = Date,
            s = o.now();
          t.unstable_now = function () {
            return o.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          v = 'function' === typeof setTimeout ? setTimeout : null,
          b = 'function' === typeof clearTimeout ? clearTimeout : null,
          y = 'undefined' !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function S(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(u)) (m = !0), A(x);
            else {
              var t = r(c);
              null !== t && B(S, t.startTime - e);
            }
        }
        function x(e, n) {
          (m = !1), g && ((g = !1), b(T), (T = -1)), (h = !0);
          var l = p;
          try {
            for (
              w(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !M()));

            ) {
              var i = f.callback;
              if ('function' === typeof i) {
                (f.callback = null), (p = f.priorityLevel);
                var o = i(f.expirationTime <= n);
                (n = t.unstable_now()),
                  'function' === typeof o
                    ? (f.callback = o)
                    : f === r(u) && a(u),
                  w(n);
              } else a(u);
              f = r(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(c);
              null !== d && B(S, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = l), (h = !1);
          }
        }
        'undefined' !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var C,
          k = !1,
          E = null,
          T = -1,
          P = 5,
          O = -1;
        function M() {
          return !(t.unstable_now() - O < P);
        }
        function z() {
          if (null !== E) {
            var e = t.unstable_now();
            O = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? C() : ((k = !1), (E = null));
            }
          } else k = !1;
        }
        if ('function' === typeof y)
          C = function () {
            y(z);
          };
        else if ('undefined' !== typeof MessageChannel) {
          var L = new MessageChannel(),
            _ = L.port2;
          (L.port1.onmessage = z),
            (C = function () {
              _.postMessage(null);
            });
        } else
          C = function () {
            v(z, 0);
          };
        function A(e) {
          (E = e), k || ((k = !0), C());
        }
        function B(e, n) {
          T = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), A(x));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (P = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var i = t.unstable_now();
            switch (
              ('object' === typeof l && null !== l
                ? (l = 'number' === typeof (l = l.delay) && 0 < l ? i + l : i)
                : (l = i),
              e)
            ) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (o = l + o),
                sortIndex: -1,
              }),
              l > i
                ? ((e.sortIndex = l),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (b(T), (T = -1)) : (g = !0), B(S, l - i)))
                : ((e.sortIndex = o), n(u, e), m || h || ((m = !0), A(x))),
              e
            );
          }),
          (t.unstable_shouldYield = M),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        e.exports = n(234);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var l = (t[r] = { exports: {} });
    return e[r](l, l.exports, n), l.exports;
  }
  (() => {
    var e,
      t = Object.getPrototypeOf
        ? e => Object.getPrototypeOf(e)
        : e => e.__proto__;
    n.t = function (r, a) {
      if ((1 & a && (r = this(r)), 8 & a)) return r;
      if ('object' === typeof r && r) {
        if (4 & a && r.__esModule) return r;
        if (16 & a && 'function' === typeof r.then) return r;
      }
      var l = Object.create(null);
      n.r(l);
      var i = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var o = 2 & a && r; 'object' == typeof o && !~e.indexOf(o); o = t(o))
        Object.getOwnPropertyNames(o).forEach(e => (i[e] = () => r[e]));
      return (i.default = () => r), n.d(l, i), l;
    };
  })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = e => {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.p = '/genius-space-final-work-html-css-js/build/'),
    (() => {
      var e = n(43),
        t = n.t(e, 2),
        r = n(391);
      const a = n.p + 'static/media/hogwarts-students.6881340584faa08b8211.png',
        l = n.p + 'static/media/hogwarts-staff.255e6d896790676e7816.png',
        i = n.p + 'static/media/characters-in-house.1624d7b3d029fe70dc4c.png';
      var o,
        s = n(950),
        u = n.t(s, 2);
      function c() {
        return (
          (c = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          c.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
      })(o || (o = {}));
      const d = 'popstate';
      function f(e, t) {
        if (!1 === e || null === e || 'undefined' === typeof e)
          throw new Error(t);
      }
      function p(e, t) {
        if (!e) {
          'undefined' !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function h(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function m(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          c(
            {
              pathname: 'string' === typeof e ? e : e.pathname,
              search: '',
              hash: '',
            },
            'string' === typeof t ? v(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            },
          )
        );
      }
      function g(e) {
        let { pathname: t = '/', search: n = '', hash: r = '' } = e;
        return (
          n && '?' !== n && (t += '?' === n.charAt(0) ? n : '?' + n),
          r && '#' !== r && (t += '#' === r.charAt(0) ? r : '#' + r),
          t
        );
      }
      function v(e) {
        let t = {};
        if (e) {
          let n = e.indexOf('#');
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          let r = e.indexOf('?');
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function b(e, t, n, r) {
        void 0 === r && (r = {});
        let { window: a = document.defaultView, v5Compat: l = !1 } = r,
          i = a.history,
          s = o.Pop,
          u = null,
          p = v();
        function v() {
          return (i.state || { idx: null }).idx;
        }
        function b() {
          s = o.Pop;
          let e = v(),
            t = null == e ? null : e - p;
          (p = e), u && u({ action: s, location: w.location, delta: t });
        }
        function y(e) {
          let t =
              'null' !== a.location.origin
                ? a.location.origin
                : a.location.href,
            n = 'string' === typeof e ? e : g(e);
          return (
            (n = n.replace(/ $/, '%20')),
            f(
              t,
              'No window.location.(origin|href) available to create URL for href: ' +
                n,
            ),
            new URL(n, t)
          );
        }
        null == p && ((p = 0), i.replaceState(c({}, i.state, { idx: p }), ''));
        let w = {
          get action() {
            return s;
          },
          get location() {
            return e(a, i);
          },
          listen(e) {
            if (u)
              throw new Error('A history only accepts one active listener');
            return (
              a.addEventListener(d, b),
              (u = e),
              () => {
                a.removeEventListener(d, b), (u = null);
              }
            );
          },
          createHref: e => t(a, e),
          createURL: y,
          encodeLocation(e) {
            let t = y(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, t) {
            s = o.Push;
            let r = m(w.location, e, t);
            n && n(r, e), (p = v() + 1);
            let c = h(r, p),
              d = w.createHref(r);
            try {
              i.pushState(c, '', d);
            } catch (f) {
              if (f instanceof DOMException && 'DataCloneError' === f.name)
                throw f;
              a.location.assign(d);
            }
            l && u && u({ action: s, location: w.location, delta: 1 });
          },
          replace: function (e, t) {
            s = o.Replace;
            let r = m(w.location, e, t);
            n && n(r, e), (p = v());
            let a = h(r, p),
              c = w.createHref(r);
            i.replaceState(a, '', c),
              l && u && u({ action: s, location: w.location, delta: 0 });
          },
          go: e => i.go(e),
        };
        return w;
      }
      var y;
      !(function (e) {
        (e.data = 'data'),
          (e.deferred = 'deferred'),
          (e.redirect = 'redirect'),
          (e.error = 'error');
      })(y || (y = {}));
      new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
      function w(e, t, n) {
        void 0 === n && (n = '/');
        let r = B(('string' === typeof t ? v(t) : t).pathname || '/', n);
        if (null == r) return null;
        let a = S(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  let n =
                    e.length === t.length &&
                    e.slice(0, -1).every((e, n) => e === t[n]);
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(e => e.childrenIndex),
                  t.routesMeta.map(e => e.childrenIndex),
                ),
          );
        })(a);
        let l = null;
        for (let i = 0; null == l && i < a.length; ++i) {
          let e = A(r);
          l = L(a[i], e);
        }
        return l;
      }
      function S(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = '');
        let a = (e, a, l) => {
          let i = {
            relativePath: void 0 === l ? e.path || '' : l,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          i.relativePath.startsWith('/') &&
            (f(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          let o = D([r, i.relativePath]),
            s = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (f(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                o +
                '".',
            ),
            S(e.children, t, s, o)),
            (null != e.path || e.index) &&
              t.push({ path: o, score: z(o, e.index), routesMeta: s });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ('' !== e.path && null != (n = e.path) && n.includes('?'))
              for (let r of x(e.path)) a(e, t, r);
            else a(e, t);
          }),
          t
        );
      }
      function x(e) {
        let t = e.split('/');
        if (0 === t.length) return [];
        let [n, ...r] = t,
          a = n.endsWith('?'),
          l = n.replace(/\?$/, '');
        if (0 === r.length) return a ? [l, ''] : [l];
        let i = x(r.join('/')),
          o = [];
        return (
          o.push(...i.map(e => ('' === e ? l : [l, e].join('/')))),
          a && o.push(...i),
          o.map(t => (e.startsWith('/') && '' === t ? '/' : t))
        );
      }
      const C = /^:[\w-]+$/,
        k = 3,
        E = 2,
        T = 1,
        P = 10,
        O = -2,
        M = e => '*' === e;
      function z(e, t) {
        let n = e.split('/'),
          r = n.length;
        return (
          n.some(M) && (r += O),
          t && (r += E),
          n
            .filter(e => !M(e))
            .reduce((e, t) => e + (C.test(t) ? k : '' === t ? T : P), r)
        );
      }
      function L(e, t) {
        let { routesMeta: n } = e,
          r = {},
          a = '/',
          l = [];
        for (let i = 0; i < n.length; ++i) {
          let e = n[i],
            o = i === n.length - 1,
            s = '/' === a ? t : t.slice(a.length) || '/',
            u = _(
              { path: e.relativePath, caseSensitive: e.caseSensitive, end: o },
              s,
            );
          if (!u) return null;
          Object.assign(r, u.params);
          let c = e.route;
          l.push({
            params: r,
            pathname: D([a, u.pathname]),
            pathnameBase: F(D([a, u.pathnameBase])),
            route: c,
          }),
            '/' !== u.pathnameBase && (a = D([a, u.pathnameBase]));
        }
        return l;
      }
      function _(e, t) {
        'string' === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            p(
              '*' === e || !e.endsWith('*') || e.endsWith('/*'),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, '/*') +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, '/*') +
                '".',
            );
            let r = [],
              a =
                '^' +
                e
                  .replace(/\/*\*?$/, '')
                  .replace(/^\/*/, '/')
                  .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
                  .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (e, t, n) => (
                      r.push({ paramName: t, isOptional: null != n }),
                      n ? '/?([^\\/]+)?' : '/([^\\/]+)'
                    ),
                  );
            e.endsWith('*')
              ? (r.push({ paramName: '*' }),
                (a += '*' === e || '/*' === e ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
              : n
              ? (a += '\\/*$')
              : '' !== e && '/' !== e && (a += '(?:(?=\\/|$))');
            let l = new RegExp(a, t ? void 0 : 'i');
            return [l, r];
          })(e.path, e.caseSensitive, e.end),
          a = t.match(n);
        if (!a) return null;
        let l = a[0],
          i = l.replace(/(.)\/+$/, '$1'),
          o = a.slice(1);
        return {
          params: r.reduce((e, t, n) => {
            let { paramName: r, isOptional: a } = t;
            if ('*' === r) {
              let e = o[n] || '';
              i = l.slice(0, l.length - e.length).replace(/(.)\/+$/, '$1');
            }
            const s = o[n];
            return (
              (e[r] = a && !s ? void 0 : (s || '').replace(/%2F/g, '/')), e
            );
          }, {}),
          pathname: l,
          pathnameBase: i,
          pattern: e,
        };
      }
      function A(e) {
        try {
          return e
            .split('/')
            .map(e => decodeURIComponent(e).replace(/\//g, '%2F'))
            .join('/');
        } catch (t) {
          return (
            p(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ').',
            ),
            e
          );
        }
      }
      function B(e, t) {
        if ('/' === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith('/') ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && '/' !== r ? null : e.slice(n) || '/';
      }
      function N(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          '` field [' +
          JSON.stringify(r) +
          '].  Please separate it out to the `to.' +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function j(e) {
        return e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0),
        );
      }
      function R(e, t) {
        let n = j(e);
        return t
          ? n.map((t, n) => (n === e.length - 1 ? t.pathname : t.pathnameBase))
          : n.map(e => e.pathnameBase);
      }
      function I(e, t, n, r) {
        let a;
        void 0 === r && (r = !1),
          'string' === typeof e
            ? (a = v(e))
            : ((a = c({}, e)),
              f(
                !a.pathname || !a.pathname.includes('?'),
                N('?', 'pathname', 'search', a),
              ),
              f(
                !a.pathname || !a.pathname.includes('#'),
                N('#', 'pathname', 'hash', a),
              ),
              f(
                !a.search || !a.search.includes('#'),
                N('#', 'search', 'hash', a),
              ));
        let l,
          i = '' === e || '' === a.pathname,
          o = i ? '/' : a.pathname;
        if (null == o) l = n;
        else {
          let e = t.length - 1;
          if (!r && o.startsWith('..')) {
            let t = o.split('/');
            for (; '..' === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join('/');
          }
          l = e >= 0 ? t[e] : '/';
        }
        let s = (function (e, t) {
            void 0 === t && (t = '/');
            let {
                pathname: n,
                search: r = '',
                hash: a = '',
              } = 'string' === typeof e ? v(e) : e,
              l = n
                ? n.startsWith('/')
                  ? n
                  : (function (e, t) {
                      let n = t.replace(/\/+$/, '').split('/');
                      return (
                        e.split('/').forEach(e => {
                          '..' === e
                            ? n.length > 1 && n.pop()
                            : '.' !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join('/') : '/'
                      );
                    })(n, t)
                : t;
            return { pathname: l, search: H(r), hash: U(a) };
          })(a, l),
          u = o && '/' !== o && o.endsWith('/'),
          d = (i || '.' === o) && n.endsWith('/');
        return s.pathname.endsWith('/') || (!u && !d) || (s.pathname += '/'), s;
      }
      const D = e => e.join('/').replace(/\/\/+/g, '/'),
        F = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
        H = e => (e && '?' !== e ? (e.startsWith('?') ? e : '?' + e) : ''),
        U = e => (e && '#' !== e ? (e.startsWith('#') ? e : '#' + e) : '');
      Error;
      function G(e) {
        return (
          null != e &&
          'number' === typeof e.status &&
          'string' === typeof e.statusText &&
          'boolean' === typeof e.internal &&
          'data' in e
        );
      }
      const V = ['post', 'put', 'patch', 'delete'],
        W = (new Set(V), ['get', ...V]);
      new Set(W), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol('deferred');
      function Q() {
        return (
          (Q = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Q.apply(this, arguments)
        );
      }
      const q = e.createContext(null);
      const Y = e.createContext(null);
      const K = e.createContext(null);
      const J = e.createContext(null);
      const X = e.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      const Z = e.createContext(null);
      function $() {
        return null != e.useContext(J);
      }
      function ee() {
        return $() || f(!1), e.useContext(J).location;
      }
      function te(t) {
        e.useContext(K).static || e.useLayoutEffect(t);
      }
      function ne() {
        let { isDataRoute: t } = e.useContext(X);
        return t
          ? (function () {
              let { router: t } = fe(ce.UseNavigateStable),
                n = he(de.UseNavigateStable),
                r = e.useRef(!1);
              return (
                te(() => {
                  r.current = !0;
                }),
                e.useCallback(
                  function (e, a) {
                    void 0 === a && (a = {}),
                      r.current &&
                        ('number' === typeof e
                          ? t.navigate(e)
                          : t.navigate(e, Q({ fromRouteId: n }, a)));
                  },
                  [t, n],
                )
              );
            })()
          : (function () {
              $() || f(!1);
              let t = e.useContext(q),
                { basename: n, future: r, navigator: a } = e.useContext(K),
                { matches: l } = e.useContext(X),
                { pathname: i } = ee(),
                o = JSON.stringify(R(l, r.v7_relativeSplatPath)),
                s = e.useRef(!1);
              return (
                te(() => {
                  s.current = !0;
                }),
                e.useCallback(
                  function (e, r) {
                    if ((void 0 === r && (r = {}), !s.current)) return;
                    if ('number' === typeof e) return void a.go(e);
                    let l = I(e, JSON.parse(o), i, 'path' === r.relative);
                    null == t &&
                      '/' !== n &&
                      (l.pathname =
                        '/' === l.pathname ? n : D([n, l.pathname])),
                      (r.replace ? a.replace : a.push)(l, r.state, r);
                  },
                  [n, a, o, i, t],
                )
              );
            })();
      }
      function re(t, n) {
        let { relative: r } = void 0 === n ? {} : n,
          { future: a } = e.useContext(K),
          { matches: l } = e.useContext(X),
          { pathname: i } = ee(),
          o = JSON.stringify(R(l, a.v7_relativeSplatPath));
        return e.useMemo(
          () => I(t, JSON.parse(o), i, 'path' === r),
          [t, o, i, r],
        );
      }
      function ae(t, n, r, a) {
        $() || f(!1);
        let { navigator: l } = e.useContext(K),
          { matches: i } = e.useContext(X),
          s = i[i.length - 1],
          u = s ? s.params : {},
          c = (s && s.pathname, s ? s.pathnameBase : '/');
        s && s.route;
        let d,
          p = ee();
        if (n) {
          var h;
          let e = 'string' === typeof n ? v(n) : n;
          '/' === c ||
            (null == (h = e.pathname) ? void 0 : h.startsWith(c)) ||
            f(!1),
            (d = e);
        } else d = p;
        let m = d.pathname || '/',
          g = m;
        if ('/' !== c) {
          let e = c.replace(/^\//, '').split('/');
          g = '/' + m.replace(/^\//, '').split('/').slice(e.length).join('/');
        }
        let b = w(t, { pathname: g });
        let y = ue(
          b &&
            b.map(e =>
              Object.assign({}, e, {
                params: Object.assign({}, u, e.params),
                pathname: D([
                  c,
                  l.encodeLocation
                    ? l.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  '/' === e.pathnameBase
                    ? c
                    : D([
                        c,
                        l.encodeLocation
                          ? l.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              }),
            ),
          i,
          r,
          a,
        );
        return n && y
          ? e.createElement(
              J.Provider,
              {
                value: {
                  location: Q(
                    {
                      pathname: '/',
                      search: '',
                      hash: '',
                      state: null,
                      key: 'default',
                    },
                    d,
                  ),
                  navigationType: o.Pop,
                },
              },
              y,
            )
          : y;
      }
      function le() {
        let t = (function () {
            var t;
            let n = e.useContext(Z),
              r = pe(de.UseRouteError),
              a = he(de.UseRouteError);
            if (void 0 !== n) return n;
            return null == (t = r.errors) ? void 0 : t[a];
          })(),
          n = G(t)
            ? t.status + ' ' + t.statusText
            : t instanceof Error
            ? t.message
            : JSON.stringify(t),
          r = t instanceof Error ? t.stack : null,
          a = 'rgba(200,200,200, 0.5)',
          l = { padding: '0.5rem', backgroundColor: a };
        return e.createElement(
          e.Fragment,
          null,
          e.createElement('h2', null, 'Unexpected Application Error!'),
          e.createElement('h3', { style: { fontStyle: 'italic' } }, n),
          r ? e.createElement('pre', { style: l }, r) : null,
          null,
        );
      }
      const ie = e.createElement(le, null);
      class oe extends e.Component {
        constructor(e) {
          super(e),
            (this.state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ('idle' !== t.revalidation && 'idle' === e.revalidation)
            ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation,
              }
            : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error(
            'React Router caught the following error during render',
            e,
            t,
          );
        }
        render() {
          return void 0 !== this.state.error
            ? e.createElement(
                X.Provider,
                { value: this.props.routeContext },
                e.createElement(Z.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                }),
              )
            : this.props.children;
        }
      }
      function se(t) {
        let { routeContext: n, match: r, children: a } = t,
          l = e.useContext(q);
        return (
          l &&
            l.static &&
            l.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (l.staticContext._deepestRenderedBoundaryId = r.route.id),
          e.createElement(X.Provider, { value: n }, a)
        );
      }
      function ue(t, n, r, a) {
        var l;
        if (
          (void 0 === n && (n = []),
          void 0 === r && (r = null),
          void 0 === a && (a = null),
          null == t)
        ) {
          var i;
          if (null == (i = r) || !i.errors) return null;
          t = r.matches;
        }
        let o = t,
          s = null == (l = r) ? void 0 : l.errors;
        if (null != s) {
          let e = o.findIndex(
            e => e.route.id && (null == s ? void 0 : s[e.route.id]),
          );
          e >= 0 || f(!1), (o = o.slice(0, Math.min(o.length, e + 1)));
        }
        let u = !1,
          c = -1;
        if (r && a && a.v7_partialHydration)
          for (let e = 0; e < o.length; e++) {
            let t = o[e];
            if (
              ((t.route.HydrateFallback || t.route.hydrateFallbackElement) &&
                (c = e),
              t.route.id)
            ) {
              let { loaderData: e, errors: n } = r,
                a =
                  t.route.loader &&
                  void 0 === e[t.route.id] &&
                  (!n || void 0 === n[t.route.id]);
              if (t.route.lazy || a) {
                (u = !0), (o = c >= 0 ? o.slice(0, c + 1) : [o[0]]);
                break;
              }
            }
          }
        return o.reduceRight((t, a, l) => {
          let i,
            d = !1,
            f = null,
            p = null;
          var h;
          r &&
            ((i = s && a.route.id ? s[a.route.id] : void 0),
            (f = a.route.errorElement || ie),
            u &&
              (c < 0 && 0 === l
                ? ((h = 'route-fallback'),
                  !1 || me[h] || (me[h] = !0),
                  (d = !0),
                  (p = null))
                : c === l &&
                  ((d = !0), (p = a.route.hydrateFallbackElement || null))));
          let m = n.concat(o.slice(0, l + 1)),
            g = () => {
              let n;
              return (
                (n = i
                  ? f
                  : d
                  ? p
                  : a.route.Component
                  ? e.createElement(a.route.Component, null)
                  : a.route.element
                  ? a.route.element
                  : t),
                e.createElement(se, {
                  match: a,
                  routeContext: {
                    outlet: t,
                    matches: m,
                    isDataRoute: null != r,
                  },
                  children: n,
                })
              );
            };
          return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === l)
            ? e.createElement(oe, {
                location: r.location,
                revalidation: r.revalidation,
                component: f,
                error: i,
                children: g(),
                routeContext: { outlet: null, matches: m, isDataRoute: !0 },
              })
            : g();
        }, null);
      }
      var ce = (function (e) {
          return (
            (e.UseBlocker = 'useBlocker'),
            (e.UseRevalidator = 'useRevalidator'),
            (e.UseNavigateStable = 'useNavigate'),
            e
          );
        })(ce || {}),
        de = (function (e) {
          return (
            (e.UseBlocker = 'useBlocker'),
            (e.UseLoaderData = 'useLoaderData'),
            (e.UseActionData = 'useActionData'),
            (e.UseRouteError = 'useRouteError'),
            (e.UseNavigation = 'useNavigation'),
            (e.UseRouteLoaderData = 'useRouteLoaderData'),
            (e.UseMatches = 'useMatches'),
            (e.UseRevalidator = 'useRevalidator'),
            (e.UseNavigateStable = 'useNavigate'),
            (e.UseRouteId = 'useRouteId'),
            e
          );
        })(de || {});
      function fe(t) {
        let n = e.useContext(q);
        return n || f(!1), n;
      }
      function pe(t) {
        let n = e.useContext(Y);
        return n || f(!1), n;
      }
      function he(t) {
        let n = (function (t) {
            let n = e.useContext(X);
            return n || f(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || f(!1), r.route.id;
      }
      const me = {};
      t.startTransition;
      function ge(e) {
        f(!1);
      }
      function ve(t) {
        let {
          basename: n = '/',
          children: r = null,
          location: a,
          navigationType: l = o.Pop,
          navigator: i,
          static: s = !1,
          future: u,
        } = t;
        $() && f(!1);
        let c = n.replace(/^\/*/, '/'),
          d = e.useMemo(
            () => ({
              basename: c,
              navigator: i,
              static: s,
              future: Q({ v7_relativeSplatPath: !1 }, u),
            }),
            [c, u, i, s],
          );
        'string' === typeof a && (a = v(a));
        let {
            pathname: p = '/',
            search: h = '',
            hash: m = '',
            state: g = null,
            key: b = 'default',
          } = a,
          y = e.useMemo(() => {
            let e = B(p, c);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: h,
                    hash: m,
                    state: g,
                    key: b,
                  },
                  navigationType: l,
                };
          }, [c, p, h, m, g, b, l]);
        return null == y
          ? null
          : e.createElement(
              K.Provider,
              { value: d },
              e.createElement(J.Provider, { children: r, value: y }),
            );
      }
      function be(e) {
        let { children: t, location: n } = e;
        return ae(ye(t), n);
      }
      new Promise(() => {});
      e.Component;
      function ye(t, n) {
        void 0 === n && (n = []);
        let r = [];
        return (
          e.Children.forEach(t, (t, a) => {
            if (!e.isValidElement(t)) return;
            let l = [...n, a];
            if (t.type === e.Fragment)
              return void r.push.apply(r, ye(t.props.children, l));
            t.type !== ge && f(!1), t.props.index && t.props.children && f(!1);
            let i = {
              id: t.props.id || l.join('-'),
              caseSensitive: t.props.caseSensitive,
              element: t.props.element,
              Component: t.props.Component,
              index: t.props.index,
              path: t.props.path,
              loader: t.props.loader,
              action: t.props.action,
              errorElement: t.props.errorElement,
              ErrorBoundary: t.props.ErrorBoundary,
              hasErrorBoundary:
                null != t.props.ErrorBoundary || null != t.props.errorElement,
              shouldRevalidate: t.props.shouldRevalidate,
              handle: t.props.handle,
              lazy: t.props.lazy,
            };
            t.props.children && (i.children = ye(t.props.children, l)),
              r.push(i);
          }),
          r
        );
      }
      function we() {
        return (
          (we = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          we.apply(this, arguments)
        );
      }
      function Se(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++)
          (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      new Set([
        'application/x-www-form-urlencoded',
        'multipart/form-data',
        'text/plain',
      ]);
      const xe = [
        'onClick',
        'relative',
        'reloadDocument',
        'replace',
        'state',
        'target',
        'to',
        'preventScrollReset',
        'unstable_viewTransition',
      ];
      try {
        window.__reactRouterVersion = '6';
      } catch (yn) {}
      new Map();
      const Ce = t.startTransition;
      u.flushSync, t.useId;
      function ke(t) {
        let { basename: n, children: r, future: a, window: l } = t,
          i = e.useRef();
        var o;
        null == i.current &&
          (i.current =
            (void 0 === (o = { window: l, v5Compat: !0 }) && (o = {}),
            b(
              function (e, t) {
                let {
                  pathname: n = '/',
                  search: r = '',
                  hash: a = '',
                } = v(e.location.hash.substr(1));
                return (
                  n.startsWith('/') || n.startsWith('.') || (n = '/' + n),
                  m(
                    '',
                    { pathname: n, search: r, hash: a },
                    (t.state && t.state.usr) || null,
                    (t.state && t.state.key) || 'default',
                  )
                );
              },
              function (e, t) {
                let n = e.document.querySelector('base'),
                  r = '';
                if (n && n.getAttribute('href')) {
                  let t = e.location.href,
                    n = t.indexOf('#');
                  r = -1 === n ? t : t.slice(0, n);
                }
                return r + '#' + ('string' === typeof t ? t : g(t));
              },
              function (e, t) {
                p(
                  '/' === e.pathname.charAt(0),
                  'relative pathnames are not supported in hash history.push(' +
                    JSON.stringify(t) +
                    ')',
                );
              },
              o,
            )));
        let s = i.current,
          [u, c] = e.useState({ action: s.action, location: s.location }),
          { v7_startTransition: d } = a || {},
          f = e.useCallback(
            e => {
              d && Ce ? Ce(() => c(e)) : c(e);
            },
            [c, d],
          );
        return (
          e.useLayoutEffect(() => s.listen(f), [s, f]),
          e.createElement(ve, {
            basename: n,
            children: r,
            location: u.location,
            navigationType: u.action,
            navigator: s,
            future: a,
          })
        );
      }
      const Ee =
          'undefined' !== typeof window &&
          'undefined' !== typeof window.document &&
          'undefined' !== typeof window.document.createElement,
        Te = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Pe = e.forwardRef(function (t, n) {
          let r,
            {
              onClick: a,
              relative: l,
              reloadDocument: i,
              replace: o,
              state: s,
              target: u,
              to: c,
              preventScrollReset: d,
              unstable_viewTransition: p,
            } = t,
            h = Se(t, xe),
            { basename: m } = e.useContext(K),
            v = !1;
          if ('string' === typeof c && Te.test(c) && ((r = c), Ee))
            try {
              let e = new URL(window.location.href),
                t = c.startsWith('//') ? new URL(e.protocol + c) : new URL(c),
                n = B(t.pathname, m);
              t.origin === e.origin && null != n
                ? (c = n + t.search + t.hash)
                : (v = !0);
            } catch (yn) {}
          let b = (function (t, n) {
              let { relative: r } = void 0 === n ? {} : n;
              $() || f(!1);
              let { basename: a, navigator: l } = e.useContext(K),
                { hash: i, pathname: o, search: s } = re(t, { relative: r }),
                u = o;
              return (
                '/' !== a && (u = '/' === o ? a : D([a, o])),
                l.createHref({ pathname: u, search: s, hash: i })
              );
            })(c, { relative: l }),
            y = (function (t, n) {
              let {
                  target: r,
                  replace: a,
                  state: l,
                  preventScrollReset: i,
                  relative: o,
                  unstable_viewTransition: s,
                } = void 0 === n ? {} : n,
                u = ne(),
                c = ee(),
                d = re(t, { relative: o });
              return e.useCallback(
                e => {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || '_self' === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(e, r)
                  ) {
                    e.preventDefault();
                    let n = void 0 !== a ? a : g(c) === g(d);
                    u(t, {
                      replace: n,
                      state: l,
                      preventScrollReset: i,
                      relative: o,
                      unstable_viewTransition: s,
                    });
                  }
                },
                [c, u, d, a, l, r, t, i, o, s],
              );
            })(c, {
              replace: o,
              state: s,
              target: u,
              preventScrollReset: d,
              relative: l,
              unstable_viewTransition: p,
            });
          return e.createElement(
            'a',
            we({}, h, {
              href: r || b,
              onClick:
                v || i
                  ? a
                  : function (e) {
                      a && a(e), e.defaultPrevented || y(e);
                    },
              ref: n,
              target: u,
            }),
          );
        });
      var Oe, Me;
      (function (e) {
        (e.UseScrollRestoration = 'useScrollRestoration'),
          (e.UseSubmit = 'useSubmit'),
          (e.UseSubmitFetcher = 'useSubmitFetcher'),
          (e.UseFetcher = 'useFetcher'),
          (e.useViewTransitionState = 'useViewTransitionState');
      })(Oe || (Oe = {})),
        (function (e) {
          (e.UseFetcher = 'useFetcher'),
            (e.UseFetchers = 'useFetchers'),
            (e.UseScrollRestoration = 'useScrollRestoration');
        })(Me || (Me = {}));
      var ze = n(579);
      const Le = function () {
        const [t, n] = (0, e.useState)(!1);
        return (
          (0, e.useEffect)(() => {
            setTimeout(() => n(!0));
          }, []),
          (0, ze.jsx)('div', {
            className: 'main-cards '.concat(t ? 'main-cards--visible' : ''),
            children: (0, ze.jsxs)('ul', {
              className: 'main-cards__list',
              children: [
                (0, ze.jsx)('li', {
                  children: (0, ze.jsxs)('article', {
                    className: 'main-cards__article',
                    children: [
                      (0, ze.jsx)('img', {
                        className: 'main-cards__article__images',
                        src: a,
                        alt: 'hogwarts-students',
                      }),
                      (0, ze.jsx)(Pe, {
                        to: '/students',
                        className: 'main-cards__article__button',
                        children:
                          '\u0421\u0442\u0443\u0434\u0435\u043d\u0442\u0438 \u0413\u043e\u0491\u0432\u043e\u0440\u0442\u0441\u0443',
                      }),
                    ],
                  }),
                }),
                (0, ze.jsx)('li', {
                  children: (0, ze.jsxs)('article', {
                    className: 'main-cards__article',
                    children: [
                      (0, ze.jsx)('img', {
                        className: 'main-cards__article__images',
                        src: l,
                        alt: 'hogwarts-staff',
                      }),
                      (0, ze.jsx)(Pe, {
                        to: '/staff',
                        className: 'main-cards__article__button',
                        children:
                          '\u0421\u043f\u0456\u0432\u0440\u043e\u0431\u0456\u0442\u043d\u0438\u043a\u0438 \u0413\u043e\u0491\u0432\u043e\u0440\u0442\u0441\u0443',
                      }),
                    ],
                  }),
                }),
                (0, ze.jsx)('li', {
                  children: (0, ze.jsxs)('article', {
                    className: 'main-cards__article',
                    children: [
                      (0, ze.jsx)('img', {
                        className: 'main-cards__article__images',
                        src: i,
                        alt: 'characters-in-house',
                      }),
                      (0, ze.jsx)(Pe, {
                        to: '/characters',
                        className: 'main-cards__article__button',
                        children:
                          '\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0456 \u0432 \u043f\u0435\u0432\u043d\u043e\u043c\u0443 \u0431\u0443\u0434\u0438\u043d\u043a\u0443',
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      };
      const _e = function () {
          const [t, n] = (0, e.useState)('');
          return (0, ze.jsx)('section', {
            className: 'main',
            children: (0, ze.jsxs)('div', {
              className: 'container',
              children: [
                (0, ze.jsxs)('div', {
                  className: 'main__container',
                  children: [
                    (0, ze.jsx)('h1', {
                      className: 'main__title title',
                      children:
                        '\u041b\u0430\u0441\u043a\u0430\u0432\u043e \u043f\u0440\u043e\u0441\u0438\u043c\u043e \u0443 \u0441\u0432\u0456\u0442 \u0413\u0430\u0440\u0440\u0456 \u041f\u043e\u0442\u0442\u0435\u0440\u0430',
                    }),
                    (0, ze.jsx)('button', {
                      className: 'main__button',
                      onClick: () => {
                        n((0, ze.jsx)(Le, {}));
                      },
                      children:
                        '\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0432\u0441\u0456\u0445 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0456\u0432',
                    }),
                  ],
                }),
                t,
              ],
            }),
          });
        },
        Ae = JSON.parse(
          '[{"id":"9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8","name":"Harry Potter","alternate_names":["The Boy Who Lived","The Chosen One","Undesirable No. 1","Potty"],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":"31-07-1980","yearOfBirth":1980,"wizard":true,"ancestry":"half-blood","eyeColour":"green","hairColour":"black","wand":{"wood":"holly","core":"phoenix tail feather","length":11},"patronus":"stag","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Daniel Radcliffe","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/bf/70/c2/bf70c2818737989fb677f983a5ec35c5.jpg"},{"id":"4c7e6819-a91a-45b2-a454-f931e4a7cce3","name":"Hermione Granger","alternate_names":["Hermy","Know-it-all","Miss Grant","Herm-own-ninny"],"species":"human","gender":"female","house":"Gryffindor","dateOfBirth":"19-09-1979","yearOfBirth":1979,"wizard":true,"ancestry":"muggleborn","eyeColour":"brown","hairColour":"brown","wand":{"wood":"vine","core":"dragon heartstring","length":10.75},"patronus":"otter","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Emma Watson","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/97/24/fe/9724fe531d7f848933377564a79cd687.jpg"},{"id":"c3b1f9a5-b87b-48bf-b00d-95b093ea6390","name":"Ron Weasley","alternate_names":["Dragomir Despard","Ronald","Ickle Ronniekins","Ronnie","Wheezy","Won-Won","Roonil Wazlib"],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":"01-03-1980","yearOfBirth":1980,"wizard":true,"ancestry":"pure-blood","eyeColour":"blue","hairColour":"red","wand":{"wood":"willow","core":"unicorn tail hair","length":14},"patronus":"Jack Russell terrier","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Rupert Grint","alternate_actors":[],"alive":true,"image":"https://ik.imagekit.io/hpapi/ron.jpg"},{"id":"af95bd8a-dfae-45bb-bc69-533860d34129","name":"Draco Malfoy","alternate_names":[],"species":"human","gender":"male","house":"Slytherin","dateOfBirth":"05-06-1980","yearOfBirth":1980,"wizard":true,"ancestry":"pure-blood","eyeColour":"grey","hairColour":"blonde","wand":{"wood":"hawthorn","core":"unicorn tail hair","length":10},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Tom Felton","alternate_actors":[],"alive":true,"image":"https://ik.imagekit.io/hpapi/draco.jpg"},{"id":"d5c4daa3-c726-426a-aa98-fb40f3fba816","name":"Cedric Diggory","alternate_names":[],"species":"human","gender":"male","house":"Hufflepuff","dateOfBirth":null,"yearOfBirth":1977,"wizard":true,"ancestry":"","eyeColour":"grey","hairColour":"brown","wand":{"wood":"ash","core":"unicorn hair","length":12.25},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Robert Pattinson","alternate_actors":[],"alive":false,"image":"https://ik.imagekit.io/hpapi/cedric.png"},{"id":"8f9aa40b-5d7c-441e-ad32-4564ecda3b70","name":"Cho Chang","alternate_names":[],"species":"human","gender":"female","house":"Ravenclaw","dateOfBirth":"07-04-1979","yearOfBirth":1979,"wizard":true,"ancestry":"","eyeColour":"brown","hairColour":"black","wand":{"wood":"","core":"","length":null},"patronus":"swan","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Katie Leung","alternate_actors":[],"alive":true,"image":"https://ik.imagekit.io/hpapi/cho.jpg"},{"id":"3db6dc51-b461-4fa4-a6e4-b1ff352221c5","name":"Neville Longbottom","alternate_names":[],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":"30-07-1980","yearOfBirth":1980,"wizard":true,"ancestry":"pure-blood","eyeColour":"","hairColour":"blonde","wand":{"wood":"cherry","core":"unicorn tail hair","length":13},"patronus":"Non-Corporeal","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Matthew Lewis","alternate_actors":[],"alive":true,"image":"https://ik.imagekit.io/hpapi/neville.jpg"},{"id":"861c4cde-2f0f-4796-8d8f-9492e74b2573","name":"Luna Lovegood","alternate_names":["Loony Lovegood"],"species":"human","gender":"female","house":"Ravenclaw","dateOfBirth":"13-02-1981","yearOfBirth":1981,"wizard":true,"ancestry":"","eyeColour":"silver","hairColour":"blonde","wand":{"wood":"","core":"","length":null},"patronus":"hare","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Evanna Lynch","alternate_actors":[],"alive":true,"image":"https://ik.imagekit.io/hpapi/luna.jpg"},{"id":"1cd6dc64-01a9-4379-9cfd-1a7167ba1bb1","name":"Ginny Weasley","alternate_names":[],"species":"human","gender":"female","house":"Gryffindor","dateOfBirth":"11-08-1981","yearOfBirth":1981,"wizard":true,"ancestry":"pure-blood","eyeColour":"brown","hairColour":"red","wand":{"wood":"yew","core":"","length":null},"patronus":"horse","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Bonnie Wright","alternate_actors":[],"alive":true,"image":"https://ik.imagekit.io/hpapi/ginny.jpg"},{"id":"04f9eb45-d843-4e29-a7d3-0bd49ed87f85","name":"Vincent Crabbe","alternate_names":[],"species":"human","gender":"male","house":"Slytherin","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"pure-blood","eyeColour":"black","hairColour":"black","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Jamie Waylett","alternate_actors":[],"alive":false,"image":"https://ik.imagekit.io/hpapi/crabbe.jpg"},{"id":"a31ddc78-af12-4978-929c-3cc8a00a833e","name":"Gregory Goyle","alternate_names":[],"species":"human","gender":"male","house":"Slytherin","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"pure-blood","eyeColour":"","hairColour":"brown","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Josh Herdman","alternate_actors":[],"alive":true,"image":"https://ik.imagekit.io/hpapi/goyle.jpg"},{"id":"8f3b8796-c7b9-442e-ac02-113d48306fc7","name":"Percy Weasley","alternate_names":["Perce","Percy Ignatius Weasley","Weatherby"],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"pure-blood","eyeColour":"","hairColour":"red","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Chris Rankin","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/b7/0d/4c/b70d4cccb884ff679f3359e3af74fd01.jpg"},{"id":"28741184-263c-4000-b011-ca7c60466ef4","name":"Fred Weasley","alternate_names":[],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"pure-blood","eyeColour":"","hairColour":"red","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"James Phelps","alternate_actors":[],"alive":false,"image":"https://i.pinimg.com/564x/ee/33/f7/ee33f7864a3a7e09f2f2441e7934cff8.jpg"},{"id":"2a0615de-8aa4-41e7-9504-dd875f5f3f01","name":"George Weasley","alternate_names":[],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"pure-blood","eyeColour":"","hairColour":"red","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Oliver Phelps","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/a0/ed/a5/a0eda5fbe07c2d92c3961667f8aceff3.jpg"},{"id":"979ab773-944f-4ff8-88be-943a4bc2c18a","name":"Lee Jordan","alternate_names":[],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Luke Youngblood","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/a3/7e/1c/a37e1c9e37ac860ff8fe023f14657169.jpg"},{"id":"0af82694-e24f-45ec-a8d7-5bb1199ce631","name":"Hannah Abbott","alternate_names":[],"species":"human","gender":"female","house":"Hufflepuff","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"half-blood","eyeColour":"","hairColour":"blonde","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Charlotte Skeoch","alternate_actors":["Louisa Warren"],"alive":true,"image":"https://i.pinimg.com/564x/99/6b/4a/996b4a5c68f6968a6a056b562d85e6e4.jpg"},{"id":"7cc5e694-850d-4c44-830b-7154e23bb5c3","name":"Susan Bones","alternate_names":[],"species":"human","gender":"female","house":"Hufflepuff","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Eleanor Columbus","alternate_actors":["Emma Jayne-Corboz"],"alive":true,"image":"https://i.pinimg.com/564x/05/72/f5/0572f5cbc5c697ceb7eebcf5699b5713.jpg"},{"id":"9055a7b1-6ac9-4363-977c-4dec78572fad","name":"Terry Boot","alternate_names":[],"species":"human","gender":"male","house":"Ravenclaw","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Kevin Lee Yi","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/4f/18/d8/4f18d8c448471b02f04cc1364d786209.jpg"},{"id":"c5acae3e-1a05-4f1d-bb83-3f8c7639d84e","name":"Mandy Brocklehurst","alternate_names":[],"species":"human","gender":"female","house":"Ravenclaw","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Christina Petrou","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/8a/a1/c1/8aa1c1c8a1ee8338bc171f0e9ca2921c.jpg"},{"id":"f94086b8-03ae-4457-ba2c-e624d0980869","name":"Lavender Brown","alternate_names":[],"species":"human","gender":"female","house":"Gryffindor","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Kathleen Cauley","alternate_actors":["Jennifer Smith","Jessie Cave"],"alive":true,"image":"https://i.pinimg.com/564x/7d/b3/d3/7db3d392830118a6884ae0785935c2b6.jpg"},{"id":"14aca981-2b60-413e-8f8e-3534961b534b","name":"Millicent Bulstrode","alternate_names":[],"species":"human","gender":"female","house":"Slytherin","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Helen Stuart","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/97/ac/17/97ac177c41a13f34c8203f810972cb80.jpg"},{"id":"34155375-c8c0-415e-873a-b6483f0cbf17","name":"Justin Finch-Fletchley","alternate_names":[],"species":"human","gender":"male","house":"Hufflepuff","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"muggleborn","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Edward Randell","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/e2/f1/6a/e2f16a4708c623febf7be0e0360d5111.jpg"},{"id":"1413e1b3-2903-4a47-a2d5-e8abc5ce8014","name":"Seamus Finnigan","alternate_names":["O\'Flaherty","Seamus Finnegan"],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"half-blood","eyeColour":"","hairColour":"sandy","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Devon Murray","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/4b/37/68/4b3768781e1860cfb0f2b406708beece.jpg"},{"id":"47aa7511-59b9-4760-9bd7-822a1103177b","name":"Theodore Nott","alternate_names":[],"species":"human","gender":"male","house":"Slytherin","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"pure-blood","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/f7/aa/f2/f7aaf2c757139d358011b667c0ed5061.jpg"}]',
        );
      function Be(e) {
        return (
          null !== e &&
          'object' === typeof e &&
          'constructor' in e &&
          e.constructor === Object
        );
      }
      function Ne(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach(n => {
            'undefined' === typeof e[n]
              ? (e[n] = t[n])
              : Be(t[n]) &&
                Be(e[n]) &&
                Object.keys(t[n]).length > 0 &&
                Ne(e[n], t[n]);
          });
      }
      const je = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: '' },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
        },
      };
      function Re() {
        const e = 'undefined' !== typeof document ? document : {};
        return Ne(e, je), e;
      }
      const Ie = {
        document: je,
        navigator: { userAgent: '' },
        location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => '' }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e =>
          'undefined' === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          'undefined' !== typeof setTimeout && clearTimeout(e);
        },
      };
      function De() {
        const e = 'undefined' !== typeof window ? window : {};
        return Ne(e, Ie), e;
      }
      function Fe(e) {
        return (
          void 0 === e && (e = ''),
          e
            .trim()
            .split(' ')
            .filter(e => !!e.trim())
        );
      }
      function He(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function Ue() {
        return Date.now();
      }
      function Ge(e, t) {
        void 0 === t && (t = 'x');
        const n = De();
        let r, a, l;
        const i = (function (e) {
          const t = De();
          let n;
          return (
            t.getComputedStyle && (n = t.getComputedStyle(e, null)),
            !n && e.currentStyle && (n = e.currentStyle),
            n || (n = e.style),
            n
          );
        })(e);
        return (
          n.WebKitCSSMatrix
            ? ((a = i.transform || i.webkitTransform),
              a.split(',').length > 6 &&
                (a = a
                  .split(', ')
                  .map(e => e.replace(',', '.'))
                  .join(', ')),
              (l = new n.WebKitCSSMatrix('none' === a ? '' : a)))
            : ((l =
                i.MozTransform ||
                i.OTransform ||
                i.MsTransform ||
                i.msTransform ||
                i.transform ||
                i
                  .getPropertyValue('transform')
                  .replace('translate(', 'matrix(1, 0, 0, 1,')),
              (r = l.toString().split(','))),
          'x' === t &&
            (a = n.WebKitCSSMatrix
              ? l.m41
              : 16 === r.length
              ? parseFloat(r[12])
              : parseFloat(r[4])),
          'y' === t &&
            (a = n.WebKitCSSMatrix
              ? l.m42
              : 16 === r.length
              ? parseFloat(r[13])
              : parseFloat(r[5])),
          a || 0
        );
      }
      function Ve(e) {
        return (
          'object' === typeof e &&
          null !== e &&
          e.constructor &&
          'Object' === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function We() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ['__proto__', 'constructor', 'prototype'];
        for (let r = 1; r < arguments.length; r += 1) {
          const a = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          if (
            void 0 !== a &&
            null !== a &&
            ((n = a),
            !('undefined' !== typeof window &&
            'undefined' !== typeof window.HTMLElement
              ? n instanceof HTMLElement
              : n && (1 === n.nodeType || 11 === n.nodeType)))
          ) {
            const n = Object.keys(Object(a)).filter(e => t.indexOf(e) < 0);
            for (let t = 0, r = n.length; t < r; t += 1) {
              const r = n[t],
                l = Object.getOwnPropertyDescriptor(a, r);
              void 0 !== l &&
                l.enumerable &&
                (Ve(e[r]) && Ve(a[r])
                  ? a[r].__swiper__
                    ? (e[r] = a[r])
                    : We(e[r], a[r])
                  : !Ve(e[r]) && Ve(a[r])
                  ? ((e[r] = {}),
                    a[r].__swiper__ ? (e[r] = a[r]) : We(e[r], a[r]))
                  : (e[r] = a[r]));
            }
          }
        }
        var n;
        return e;
      }
      function Qe(e, t, n) {
        e.style.setProperty(t, n);
      }
      function qe(e) {
        let { swiper: t, targetPosition: n, side: r } = e;
        const a = De(),
          l = -t.translate;
        let i,
          o = null;
        const s = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = 'none'),
          a.cancelAnimationFrame(t.cssModeFrameID);
        const u = n > l ? 'next' : 'prev',
          c = (e, t) => ('next' === u && e >= t) || ('prev' === u && e <= t),
          d = () => {
            (i = new Date().getTime()), null === o && (o = i);
            const e = Math.max(Math.min((i - o) / s, 1), 0),
              u = 0.5 - Math.cos(e * Math.PI) / 2;
            let f = l + u * (n - l);
            if ((c(f, n) && (f = n), t.wrapperEl.scrollTo({ [r]: f }), c(f, n)))
              return (
                (t.wrapperEl.style.overflow = 'hidden'),
                (t.wrapperEl.style.scrollSnapType = ''),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ''),
                    t.wrapperEl.scrollTo({ [r]: f });
                }),
                void a.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = a.requestAnimationFrame(d);
          };
        d();
      }
      function Ye(e, t) {
        return (
          void 0 === t && (t = ''), [...e.children].filter(e => e.matches(t))
        );
      }
      function Ke(e) {
        try {
          return void console.warn(e);
        } catch (t) {}
      }
      function Je(e, t) {
        void 0 === t && (t = []);
        const n = document.createElement(e);
        return n.classList.add(...(Array.isArray(t) ? t : Fe(t))), n;
      }
      function Xe(e, t) {
        return De().getComputedStyle(e, null).getPropertyValue(t);
      }
      function Ze(e) {
        let t,
          n = e;
        if (n) {
          for (t = 0; null !== (n = n.previousSibling); )
            1 === n.nodeType && (t += 1);
          return t;
        }
      }
      function $e(e, t) {
        const n = [];
        let r = e.parentElement;
        for (; r; )
          t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
        return n;
      }
      function et(e, t, n) {
        const r = De();
        return n
          ? e['width' === t ? 'offsetWidth' : 'offsetHeight'] +
              parseFloat(
                r
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    'width' === t ? 'margin-right' : 'margin-top',
                  ),
              ) +
              parseFloat(
                r
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    'width' === t ? 'margin-left' : 'margin-bottom',
                  ),
              )
          : e.offsetWidth;
      }
      function tt(e) {
        return (Array.isArray(e) ? e : [e]).filter(e => !!e);
      }
      let nt, rt, at;
      function lt() {
        return (
          nt ||
            (nt = (function () {
              const e = De(),
                t = Re();
              return {
                smoothScroll:
                  t.documentElement &&
                  t.documentElement.style &&
                  'scrollBehavior' in t.documentElement.style,
                touch: !!(
                  'ontouchstart' in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
              };
            })()),
          nt
        );
      }
      function it(e) {
        return (
          void 0 === e && (e = {}),
          rt ||
            (rt = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e;
              const n = lt(),
                r = De(),
                a = r.navigator.platform,
                l = t || r.navigator.userAgent,
                i = { ios: !1, android: !1 },
                o = r.screen.width,
                s = r.screen.height,
                u = l.match(/(Android);?[\s\/]+([\d.]+)?/);
              let c = l.match(/(iPad).*OS\s([\d_]+)/);
              const d = l.match(/(iPod)(.*OS\s([\d_]+))?/),
                f = !c && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                p = 'Win32' === a;
              let h = 'MacIntel' === a;
              return (
                !c &&
                  h &&
                  n.touch &&
                  [
                    '1024x1366',
                    '1366x1024',
                    '834x1194',
                    '1194x834',
                    '834x1112',
                    '1112x834',
                    '768x1024',
                    '1024x768',
                    '820x1180',
                    '1180x820',
                    '810x1080',
                    '1080x810',
                  ].indexOf(''.concat(o, 'x').concat(s)) >= 0 &&
                  ((c = l.match(/(Version)\/([\d.]+)/)),
                  c || (c = [0, 1, '13_0_0']),
                  (h = !1)),
                u && !p && ((i.os = 'android'), (i.android = !0)),
                (c || f || d) && ((i.os = 'ios'), (i.ios = !0)),
                i
              );
            })(e)),
          rt
        );
      }
      function ot() {
        return (
          at ||
            (at = (function () {
              const e = De(),
                t = it();
              let n = !1;
              function r() {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf('safari') >= 0 &&
                  t.indexOf('chrome') < 0 &&
                  t.indexOf('android') < 0
                );
              }
              if (r()) {
                const t = String(e.navigator.userAgent);
                if (t.includes('Version/')) {
                  const [e, r] = t
                    .split('Version/')[1]
                    .split(' ')[0]
                    .split('.')
                    .map(e => Number(e));
                  n = e < 16 || (16 === e && r < 2);
                }
              }
              const a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent,
                ),
                l = r();
              return {
                isSafari: n || l,
                needPerspectiveFix: n,
                need3dFix: l || (a && t.ios),
                isWebView: a,
              };
            })()),
          at
        );
      }
      var st = {
        on(e, t, n) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ('function' !== typeof t) return r;
          const a = n ? 'unshift' : 'push';
          return (
            e.split(' ').forEach(e => {
              r.eventsListeners[e] || (r.eventsListeners[e] = []),
                r.eventsListeners[e][a](t);
            }),
            r
          );
        },
        once(e, t, n) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ('function' !== typeof t) return r;
          function a() {
            r.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
            for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++)
              l[i] = arguments[i];
            t.apply(r, l);
          }
          return (a.__emitterProxy = t), r.on(e, a, n);
        },
        onAny(e, t) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ('function' !== typeof e) return n;
          const r = t ? 'unshift' : 'push';
          return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off(e, t) {
          const n = this;
          return !n.eventsListeners || n.destroyed
            ? n
            : n.eventsListeners
            ? (e.split(' ').forEach(e => {
                'undefined' === typeof t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach((r, a) => {
                      (r === t ||
                        (r.__emitterProxy && r.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(a, 1);
                    });
              }),
              n)
            : n;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, n, r;
          for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++)
            l[i] = arguments[i];
          'string' === typeof l[0] || Array.isArray(l[0])
            ? ((t = l[0]), (n = l.slice(1, l.length)), (r = e))
            : ((t = l[0].events), (n = l[0].data), (r = l[0].context || e)),
            n.unshift(r);
          return (
            (Array.isArray(t) ? t : t.split(' ')).forEach(t => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach(e => {
                  e.apply(r, [t, ...n]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach(e => {
                    e.apply(r, n);
                  });
            }),
            e
          );
        },
      };
      const ut = (e, t, n) => {
        t && !e.classList.contains(n)
          ? e.classList.add(n)
          : !t && e.classList.contains(n) && e.classList.remove(n);
      };
      const ct = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const n = t.closest(
            e.isElement ? 'swiper-slide' : '.'.concat(e.params.slideClass),
          );
          if (n) {
            let t = n.querySelector('.'.concat(e.params.lazyPreloaderClass));
            !t &&
              e.isElement &&
              (n.shadowRoot
                ? (t = n.shadowRoot.querySelector(
                    '.'.concat(e.params.lazyPreloaderClass),
                  ))
                : requestAnimationFrame(() => {
                    n.shadowRoot &&
                      ((t = n.shadowRoot.querySelector(
                        '.'.concat(e.params.lazyPreloaderClass),
                      )),
                      t && t.remove());
                  })),
              t && t.remove();
          }
        },
        dt = (e, t) => {
          if (!e.slides[t]) return;
          const n = e.slides[t].querySelector('[loading="lazy"]');
          n && n.removeAttribute('loading');
        },
        ft = e => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const n = e.slides.length;
          if (!n || !t || t < 0) return;
          t = Math.min(t, n);
          const r =
              'auto' === e.params.slidesPerView
                ? e.slidesPerViewDynamic()
                : Math.ceil(e.params.slidesPerView),
            a = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const n = a,
              l = [n - t];
            return (
              l.push(...Array.from({ length: t }).map((e, t) => n + r + t)),
              void e.slides.forEach((t, n) => {
                l.includes(t.column) && dt(e, n);
              })
            );
          }
          const l = a + r - 1;
          if (e.params.rewind || e.params.loop)
            for (let i = a - t; i <= l + t; i += 1) {
              const t = ((i % n) + n) % n;
              (t < a || t > l) && dt(e, t);
            }
          else
            for (
              let i = Math.max(a - t, 0);
              i <= Math.min(l + t, n - 1);
              i += 1
            )
              i !== a && (i > l || i < a) && dt(e, i);
        };
      var pt = {
        updateSize: function () {
          const e = this;
          let t, n;
          const r = e.el;
          (t =
            'undefined' !== typeof e.params.width && null !== e.params.width
              ? e.params.width
              : r.clientWidth),
            (n =
              'undefined' !== typeof e.params.height && null !== e.params.height
                ? e.params.height
                : r.clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === n && e.isVertical()) ||
              ((t =
                t -
                parseInt(Xe(r, 'padding-left') || 0, 10) -
                parseInt(Xe(r, 'padding-right') || 0, 10)),
              (n =
                n -
                parseInt(Xe(r, 'padding-top') || 0, 10) -
                parseInt(Xe(r, 'padding-bottom') || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(n) && (n = 0),
              Object.assign(e, {
                width: t,
                height: n,
                size: e.isHorizontal() ? t : n,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t, n) {
            return parseFloat(t.getPropertyValue(e.getDirectionLabel(n)) || 0);
          }
          const n = e.params,
            {
              wrapperEl: r,
              slidesEl: a,
              size: l,
              rtlTranslate: i,
              wrongRTL: o,
            } = e,
            s = e.virtual && n.virtual.enabled,
            u = s ? e.virtual.slides.length : e.slides.length,
            c = Ye(a, '.'.concat(e.params.slideClass, ', swiper-slide')),
            d = s ? e.virtual.slides.length : c.length;
          let f = [];
          const p = [],
            h = [];
          let m = n.slidesOffsetBefore;
          'function' === typeof m && (m = n.slidesOffsetBefore.call(e));
          let g = n.slidesOffsetAfter;
          'function' === typeof g && (g = n.slidesOffsetAfter.call(e));
          const v = e.snapGrid.length,
            b = e.slidesGrid.length;
          let y = n.spaceBetween,
            w = -m,
            S = 0,
            x = 0;
          if ('undefined' === typeof l) return;
          'string' === typeof y && y.indexOf('%') >= 0
            ? (y = (parseFloat(y.replace('%', '')) / 100) * l)
            : 'string' === typeof y && (y = parseFloat(y)),
            (e.virtualSize = -y),
            c.forEach(e => {
              i ? (e.style.marginLeft = '') : (e.style.marginRight = ''),
                (e.style.marginBottom = ''),
                (e.style.marginTop = '');
            }),
            n.centeredSlides &&
              n.cssMode &&
              (Qe(r, '--swiper-centered-offset-before', ''),
              Qe(r, '--swiper-centered-offset-after', ''));
          const C = n.grid && n.grid.rows > 1 && e.grid;
          let k;
          C ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
          const E =
            'auto' === n.slidesPerView &&
            n.breakpoints &&
            Object.keys(n.breakpoints).filter(
              e => 'undefined' !== typeof n.breakpoints[e].slidesPerView,
            ).length > 0;
          for (let T = 0; T < d; T += 1) {
            let r;
            if (
              ((k = 0),
              c[T] && (r = c[T]),
              C && e.grid.updateSlide(T, r, c),
              !c[T] || 'none' !== Xe(r, 'display'))
            ) {
              if ('auto' === n.slidesPerView) {
                E && (c[T].style[e.getDirectionLabel('width')] = '');
                const a = getComputedStyle(r),
                  l = r.style.transform,
                  i = r.style.webkitTransform;
                if (
                  (l && (r.style.transform = 'none'),
                  i && (r.style.webkitTransform = 'none'),
                  n.roundLengths)
                )
                  k = e.isHorizontal()
                    ? et(r, 'width', !0)
                    : et(r, 'height', !0);
                else {
                  const e = t(a, 'width'),
                    n = t(a, 'padding-left'),
                    l = t(a, 'padding-right'),
                    i = t(a, 'margin-left'),
                    o = t(a, 'margin-right'),
                    s = a.getPropertyValue('box-sizing');
                  if (s && 'border-box' === s) k = e + i + o;
                  else {
                    const { clientWidth: t, offsetWidth: a } = r;
                    k = e + n + l + i + o + (a - t);
                  }
                }
                l && (r.style.transform = l),
                  i && (r.style.webkitTransform = i),
                  n.roundLengths && (k = Math.floor(k));
              } else
                (k = (l - (n.slidesPerView - 1) * y) / n.slidesPerView),
                  n.roundLengths && (k = Math.floor(k)),
                  c[T] &&
                    (c[T].style[e.getDirectionLabel('width')] = ''.concat(
                      k,
                      'px',
                    ));
              c[T] && (c[T].swiperSlideSize = k),
                h.push(k),
                n.centeredSlides
                  ? ((w = w + k / 2 + S / 2 + y),
                    0 === S && 0 !== T && (w = w - l / 2 - y),
                    0 === T && (w = w - l / 2 - y),
                    Math.abs(w) < 0.001 && (w = 0),
                    n.roundLengths && (w = Math.floor(w)),
                    x % n.slidesPerGroup === 0 && f.push(w),
                    p.push(w))
                  : (n.roundLengths && (w = Math.floor(w)),
                    (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                      e.params.slidesPerGroup ===
                      0 && f.push(w),
                    p.push(w),
                    (w = w + k + y)),
                (e.virtualSize += k + y),
                (S = k),
                (x += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, l) + g),
            i &&
              o &&
              ('slide' === n.effect || 'coverflow' === n.effect) &&
              (r.style.width = ''.concat(e.virtualSize + y, 'px')),
            n.setWrapperSize &&
              (r.style[e.getDirectionLabel('width')] = ''.concat(
                e.virtualSize + y,
                'px',
              )),
            C && e.grid.updateWrapperSize(k, f),
            !n.centeredSlides)
          ) {
            const t = [];
            for (let r = 0; r < f.length; r += 1) {
              let a = f[r];
              n.roundLengths && (a = Math.floor(a)),
                f[r] <= e.virtualSize - l && t.push(a);
            }
            (f = t),
              Math.floor(e.virtualSize - l) - Math.floor(f[f.length - 1]) > 1 &&
                f.push(e.virtualSize - l);
          }
          if (s && n.loop) {
            const t = h[0] + y;
            if (n.slidesPerGroup > 1) {
              const r = Math.ceil(
                  (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                    n.slidesPerGroup,
                ),
                a = t * n.slidesPerGroup;
              for (let e = 0; e < r; e += 1) f.push(f[f.length - 1] + a);
            }
            for (
              let r = 0;
              r < e.virtual.slidesBefore + e.virtual.slidesAfter;
              r += 1
            )
              1 === n.slidesPerGroup && f.push(f[f.length - 1] + t),
                p.push(p[p.length - 1] + t),
                (e.virtualSize += t);
          }
          if ((0 === f.length && (f = [0]), 0 !== y)) {
            const t =
              e.isHorizontal() && i
                ? 'marginLeft'
                : e.getDirectionLabel('marginRight');
            c.filter(
              (e, t) => !(n.cssMode && !n.loop) || t !== c.length - 1,
            ).forEach(e => {
              e.style[t] = ''.concat(y, 'px');
            });
          }
          if (n.centeredSlides && n.centeredSlidesBounds) {
            let e = 0;
            h.forEach(t => {
              e += t + (y || 0);
            }),
              (e -= y);
            const t = e - l;
            f = f.map(e => (e <= 0 ? -m : e > t ? t + g : e));
          }
          if (n.centerInsufficientSlides) {
            let e = 0;
            if (
              (h.forEach(t => {
                e += t + (y || 0);
              }),
              (e -= y),
              e < l)
            ) {
              const t = (l - e) / 2;
              f.forEach((e, n) => {
                f[n] = e - t;
              }),
                p.forEach((e, n) => {
                  p[n] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: c,
              snapGrid: f,
              slidesGrid: p,
              slidesSizesGrid: h,
            }),
            n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
          ) {
            Qe(r, '--swiper-centered-offset-before', ''.concat(-f[0], 'px')),
              Qe(
                r,
                '--swiper-centered-offset-after',
                ''.concat(e.size / 2 - h[h.length - 1] / 2, 'px'),
              );
            const t = -e.snapGrid[0],
              n = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map(e => e + t)),
              (e.slidesGrid = e.slidesGrid.map(e => e + n));
          }
          if (
            (d !== u && e.emit('slidesLengthChange'),
            f.length !== v &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit('snapGridLengthChange')),
            p.length !== b && e.emit('slidesGridLengthChange'),
            n.watchSlidesProgress && e.updateSlidesOffset(),
            e.emit('slidesUpdated'),
            !s && !n.cssMode && ('slide' === n.effect || 'fade' === n.effect))
          ) {
            const t = ''.concat(n.containerModifierClass, 'backface-hidden'),
              r = e.el.classList.contains(t);
            d <= n.maxBackfaceHiddenSlides
              ? r || e.el.classList.add(t)
              : r && e.el.classList.remove(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            n = [],
            r = t.virtual && t.params.virtual.enabled;
          let a,
            l = 0;
          'number' === typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const i = e => (r ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
          if ('auto' !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              (t.visibleSlides || []).forEach(e => {
                n.push(e);
              });
            else
              for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
                const e = t.activeIndex + a;
                if (e > t.slides.length && !r) break;
                n.push(i(e));
              }
          else n.push(i(t.activeIndex));
          for (a = 0; a < n.length; a += 1)
            if ('undefined' !== typeof n[a]) {
              const e = n[a].offsetHeight;
              l = e > l ? e : l;
            }
          (l || 0 === l) && (t.wrapperEl.style.height = ''.concat(l, 'px'));
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides,
            n = e.isElement
              ? e.isHorizontal()
                ? e.wrapperEl.offsetLeft
                : e.wrapperEl.offsetTop
              : 0;
          for (let r = 0; r < t.length; r += 1)
            t[r].swiperSlideOffset =
              (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
              n -
              e.cssOverflowAdjustment();
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            n = t.params,
            { slides: r, rtlTranslate: a, snapGrid: l } = t;
          if (0 === r.length) return;
          'undefined' === typeof r[0].swiperSlideOffset &&
            t.updateSlidesOffset();
          let i = -e;
          a && (i = e),
            r.forEach(e => {
              e.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass);
            }),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          let o = n.spaceBetween;
          'string' === typeof o && o.indexOf('%') >= 0
            ? (o = (parseFloat(o.replace('%', '')) / 100) * t.size)
            : 'string' === typeof o && (o = parseFloat(o));
          for (let s = 0; s < r.length; s += 1) {
            const e = r[s];
            let u = e.swiperSlideOffset;
            n.cssMode && n.centeredSlides && (u -= r[0].swiperSlideOffset);
            const c =
                (i + (n.centeredSlides ? t.minTranslate() : 0) - u) /
                (e.swiperSlideSize + o),
              d =
                (i - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
                (e.swiperSlideSize + o),
              f = -(i - u),
              p = f + t.slidesSizesGrid[s],
              h = f >= 0 && f <= t.size - t.slidesSizesGrid[s];
            ((f >= 0 && f < t.size - 1) ||
              (p > 1 && p <= t.size) ||
              (f <= 0 && p >= t.size)) &&
              (t.visibleSlides.push(e),
              t.visibleSlidesIndexes.push(s),
              r[s].classList.add(n.slideVisibleClass)),
              h && r[s].classList.add(n.slideFullyVisibleClass),
              (e.progress = a ? -c : c),
              (e.originalProgress = a ? -d : d);
          }
        },
        updateProgress: function (e) {
          const t = this;
          if ('undefined' === typeof e) {
            const n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          const n = t.params,
            r = t.maxTranslate() - t.minTranslate();
          let { progress: a, isBeginning: l, isEnd: i, progressLoop: o } = t;
          const s = l,
            u = i;
          if (0 === r) (a = 0), (l = !0), (i = !0);
          else {
            a = (e - t.minTranslate()) / r;
            const n = Math.abs(e - t.minTranslate()) < 1,
              o = Math.abs(e - t.maxTranslate()) < 1;
            (l = n || a <= 0), (i = o || a >= 1), n && (a = 0), o && (a = 1);
          }
          if (n.loop) {
            const n = t.getSlideIndexByData(0),
              r = t.getSlideIndexByData(t.slides.length - 1),
              a = t.slidesGrid[n],
              l = t.slidesGrid[r],
              i = t.slidesGrid[t.slidesGrid.length - 1],
              s = Math.abs(e);
            (o = s >= a ? (s - a) / i : (s + i - l) / i), o > 1 && (o -= 1);
          }
          Object.assign(t, {
            progress: a,
            progressLoop: o,
            isBeginning: l,
            isEnd: i,
          }),
            (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
              t.updateSlidesProgress(e),
            l && !s && t.emit('reachBeginning toEdge'),
            i && !u && t.emit('reachEnd toEdge'),
            ((s && !l) || (u && !i)) && t.emit('fromEdge'),
            t.emit('progress', a);
        },
        updateSlidesClasses: function () {
          const e = this,
            { slides: t, params: n, slidesEl: r, activeIndex: a } = e,
            l = e.virtual && n.virtual.enabled,
            i = e.grid && n.grid && n.grid.rows > 1,
            o = e =>
              Ye(
                r,
                '.'.concat(n.slideClass).concat(e, ', swiper-slide').concat(e),
              )[0];
          let s, u, c;
          if (l)
            if (n.loop) {
              let t = a - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t),
                t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
                (s = o('[data-swiper-slide-index="'.concat(t, '"]')));
            } else s = o('[data-swiper-slide-index="'.concat(a, '"]'));
          else
            i
              ? ((s = t.filter(e => e.column === a)[0]),
                (c = t.filter(e => e.column === a + 1)[0]),
                (u = t.filter(e => e.column === a - 1)[0]))
              : (s = t[a]);
          s &&
            (i ||
              ((c = (function (e, t) {
                const n = [];
                for (; e.nextElementSibling; ) {
                  const r = e.nextElementSibling;
                  t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
                }
                return n;
              })(s, '.'.concat(n.slideClass, ', swiper-slide'))[0]),
              n.loop && !c && (c = t[0]),
              (u = (function (e, t) {
                const n = [];
                for (; e.previousElementSibling; ) {
                  const r = e.previousElementSibling;
                  t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
                }
                return n;
              })(s, '.'.concat(n.slideClass, ', swiper-slide'))[0]),
              n.loop && 0 === !u && (u = t[t.length - 1]))),
            t.forEach(e => {
              ut(e, e === s, n.slideActiveClass),
                ut(e, e === c, n.slideNextClass),
                ut(e, e === u, n.slidePrevClass);
            }),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            n = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: r,
              params: a,
              activeIndex: l,
              realIndex: i,
              snapIndex: o,
            } = t;
          let s,
            u = e;
          const c = e => {
            let n = e - t.virtual.slidesBefore;
            return (
              n < 0 && (n = t.virtual.slides.length + n),
              n >= t.virtual.slides.length && (n -= t.virtual.slides.length),
              n
            );
          };
          if (
            ('undefined' === typeof u &&
              (u = (function (e) {
                const { slidesGrid: t, params: n } = e,
                  r = e.rtlTranslate ? e.translate : -e.translate;
                let a;
                for (let l = 0; l < t.length; l += 1)
                  'undefined' !== typeof t[l + 1]
                    ? r >= t[l] && r < t[l + 1] - (t[l + 1] - t[l]) / 2
                      ? (a = l)
                      : r >= t[l] && r < t[l + 1] && (a = l + 1)
                    : r >= t[l] && (a = l);
                return (
                  n.normalizeSlideIndex &&
                    (a < 0 || 'undefined' === typeof a) &&
                    (a = 0),
                  a
                );
              })(t)),
            r.indexOf(n) >= 0)
          )
            s = r.indexOf(n);
          else {
            const e = Math.min(a.slidesPerGroupSkip, u);
            s = e + Math.floor((u - e) / a.slidesPerGroup);
          }
          if ((s >= r.length && (s = r.length - 1), u === l && !t.params.loop))
            return void (
              s !== o && ((t.snapIndex = s), t.emit('snapIndexChange'))
            );
          if (u === l && t.params.loop && t.virtual && t.params.virtual.enabled)
            return void (t.realIndex = c(u));
          const d = t.grid && a.grid && a.grid.rows > 1;
          let f;
          if (t.virtual && a.virtual.enabled && a.loop) f = c(u);
          else if (d) {
            const e = t.slides.filter(e => e.column === u)[0];
            let n = parseInt(e.getAttribute('data-swiper-slide-index'), 10);
            Number.isNaN(n) && (n = Math.max(t.slides.indexOf(e), 0)),
              (f = Math.floor(n / a.grid.rows));
          } else if (t.slides[u]) {
            const e = t.slides[u].getAttribute('data-swiper-slide-index');
            f = e ? parseInt(e, 10) : u;
          } else f = u;
          Object.assign(t, {
            previousSnapIndex: o,
            snapIndex: s,
            previousRealIndex: i,
            realIndex: f,
            previousIndex: l,
            activeIndex: u,
          }),
            t.initialized && ft(t),
            t.emit('activeIndexChange'),
            t.emit('snapIndexChange'),
            (t.initialized || t.params.runCallbacksOnInit) &&
              (i !== f && t.emit('realIndexChange'), t.emit('slideChange'));
        },
        updateClickedSlide: function (e, t) {
          const n = this,
            r = n.params;
          let a = e.closest('.'.concat(r.slideClass, ', swiper-slide'));
          !a &&
            n.isElement &&
            t &&
            t.length > 1 &&
            t.includes(e) &&
            [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e => {
              !a &&
                e.matches &&
                e.matches('.'.concat(r.slideClass, ', swiper-slide')) &&
                (a = e);
            });
          let l,
            i = !1;
          if (a)
            for (let o = 0; o < n.slides.length; o += 1)
              if (n.slides[o] === a) {
                (i = !0), (l = o);
                break;
              }
          if (!a || !i)
            return (n.clickedSlide = void 0), void (n.clickedIndex = void 0);
          (n.clickedSlide = a),
            n.virtual && n.params.virtual.enabled
              ? (n.clickedIndex = parseInt(
                  a.getAttribute('data-swiper-slide-index'),
                  10,
                ))
              : (n.clickedIndex = l),
            r.slideToClickedSlide &&
              void 0 !== n.clickedIndex &&
              n.clickedIndex !== n.activeIndex &&
              n.slideToClickedSlide();
        },
      };
      var ht = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
          const {
            params: t,
            rtlTranslate: n,
            translate: r,
            wrapperEl: a,
          } = this;
          if (t.virtualTranslate) return n ? -r : r;
          if (t.cssMode) return r;
          let l = Ge(a, e);
          return (l += this.cssOverflowAdjustment()), n && (l = -l), l || 0;
        },
        setTranslate: function (e, t) {
          const n = this,
            { rtlTranslate: r, params: a, wrapperEl: l, progress: i } = n;
          let o,
            s = 0,
            u = 0;
          n.isHorizontal() ? (s = r ? -e : e) : (u = e),
            a.roundLengths && ((s = Math.floor(s)), (u = Math.floor(u))),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? s : u),
            a.cssMode
              ? (l[n.isHorizontal() ? 'scrollLeft' : 'scrollTop'] =
                  n.isHorizontal() ? -s : -u)
              : a.virtualTranslate ||
                (n.isHorizontal()
                  ? (s -= n.cssOverflowAdjustment())
                  : (u -= n.cssOverflowAdjustment()),
                (l.style.transform = 'translate3d('
                  .concat(s, 'px, ')
                  .concat(u, 'px, ')
                  .concat(0, 'px)')));
          const c = n.maxTranslate() - n.minTranslate();
          (o = 0 === c ? 0 : (e - n.minTranslate()) / c),
            o !== i && n.updateProgress(e),
            n.emit('setTranslate', n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, n, r, a) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            void 0 === r && (r = !0);
          const l = this,
            { params: i, wrapperEl: o } = l;
          if (l.animating && i.preventInteractionOnTransition) return !1;
          const s = l.minTranslate(),
            u = l.maxTranslate();
          let c;
          if (
            ((c = r && e > s ? s : r && e < u ? u : e),
            l.updateProgress(c),
            i.cssMode)
          ) {
            const e = l.isHorizontal();
            if (0 === t) o[e ? 'scrollLeft' : 'scrollTop'] = -c;
            else {
              if (!l.support.smoothScroll)
                return (
                  qe({
                    swiper: l,
                    targetPosition: -c,
                    side: e ? 'left' : 'top',
                  }),
                  !0
                );
              o.scrollTo({ [e ? 'left' : 'top']: -c, behavior: 'smooth' });
            }
            return !0;
          }
          return (
            0 === t
              ? (l.setTransition(0),
                l.setTranslate(c),
                n &&
                  (l.emit('beforeTransitionStart', t, a),
                  l.emit('transitionEnd')))
              : (l.setTransition(t),
                l.setTranslate(c),
                n &&
                  (l.emit('beforeTransitionStart', t, a),
                  l.emit('transitionStart')),
                l.animating ||
                  ((l.animating = !0),
                  l.onTranslateToWrapperTransitionEnd ||
                    (l.onTranslateToWrapperTransitionEnd = function (e) {
                      l &&
                        !l.destroyed &&
                        e.target === this &&
                        (l.wrapperEl.removeEventListener(
                          'transitionend',
                          l.onTranslateToWrapperTransitionEnd,
                        ),
                        (l.onTranslateToWrapperTransitionEnd = null),
                        delete l.onTranslateToWrapperTransitionEnd,
                        (l.animating = !1),
                        n && l.emit('transitionEnd'));
                    }),
                  l.wrapperEl.addEventListener(
                    'transitionend',
                    l.onTranslateToWrapperTransitionEnd,
                  ))),
            !0
          );
        },
      };
      function mt(e) {
        let { swiper: t, runCallbacks: n, direction: r, step: a } = e;
        const { activeIndex: l, previousIndex: i } = t;
        let o = r;
        if (
          (o || (o = l > i ? 'next' : l < i ? 'prev' : 'reset'),
          t.emit('transition'.concat(a)),
          n && l !== i)
        ) {
          if ('reset' === o)
            return void t.emit('slideResetTransition'.concat(a));
          t.emit('slideChangeTransition'.concat(a)),
            'next' === o
              ? t.emit('slideNextTransition'.concat(a))
              : t.emit('slidePrevTransition'.concat(a));
        }
      }
      var gt = {
        setTransition: function (e, t) {
          const n = this;
          n.params.cssMode ||
            ((n.wrapperEl.style.transitionDuration = ''.concat(e, 'ms')),
            (n.wrapperEl.style.transitionDelay = 0 === e ? '0ms' : '')),
            n.emit('setTransition', e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const n = this,
            { params: r } = n;
          r.cssMode ||
            (r.autoHeight && n.updateAutoHeight(),
            mt({ swiper: n, runCallbacks: e, direction: t, step: 'Start' }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const n = this,
            { params: r } = n;
          (n.animating = !1),
            r.cssMode ||
              (n.setTransition(0),
              mt({ swiper: n, runCallbacks: e, direction: t, step: 'End' }));
        },
      };
      var vt = {
        slideTo: function (e, t, n, r, a) {
          void 0 === e && (e = 0),
            void 0 === n && (n = !0),
            'string' === typeof e && (e = parseInt(e, 10));
          const l = this;
          let i = e;
          i < 0 && (i = 0);
          const {
            params: o,
            snapGrid: s,
            slidesGrid: u,
            previousIndex: c,
            activeIndex: d,
            rtlTranslate: f,
            wrapperEl: p,
            enabled: h,
          } = l;
          if (
            (!h && !r && !a) ||
            l.destroyed ||
            (l.animating && o.preventInteractionOnTransition)
          )
            return !1;
          'undefined' === typeof t && (t = l.params.speed);
          const m = Math.min(l.params.slidesPerGroupSkip, i);
          let g = m + Math.floor((i - m) / l.params.slidesPerGroup);
          g >= s.length && (g = s.length - 1);
          const v = -s[g];
          if (o.normalizeSlideIndex)
            for (let y = 0; y < u.length; y += 1) {
              const e = -Math.floor(100 * v),
                t = Math.floor(100 * u[y]),
                n = Math.floor(100 * u[y + 1]);
              'undefined' !== typeof u[y + 1]
                ? e >= t && e < n - (n - t) / 2
                  ? (i = y)
                  : e >= t && e < n && (i = y + 1)
                : e >= t && (i = y);
            }
          if (l.initialized && i !== d) {
            if (
              !l.allowSlideNext &&
              (f
                ? v > l.translate && v > l.minTranslate()
                : v < l.translate && v < l.minTranslate())
            )
              return !1;
            if (
              !l.allowSlidePrev &&
              v > l.translate &&
              v > l.maxTranslate() &&
              (d || 0) !== i
            )
              return !1;
          }
          let b;
          if (
            (i !== (c || 0) && n && l.emit('beforeSlideChangeStart'),
            l.updateProgress(v),
            (b = i > d ? 'next' : i < d ? 'prev' : 'reset'),
            (f && -v === l.translate) || (!f && v === l.translate))
          )
            return (
              l.updateActiveIndex(i),
              o.autoHeight && l.updateAutoHeight(),
              l.updateSlidesClasses(),
              'slide' !== o.effect && l.setTranslate(v),
              'reset' !== b && (l.transitionStart(n, b), l.transitionEnd(n, b)),
              !1
            );
          if (o.cssMode) {
            const e = l.isHorizontal(),
              n = f ? v : -v;
            if (0 === t) {
              const t = l.virtual && l.params.virtual.enabled;
              t &&
                ((l.wrapperEl.style.scrollSnapType = 'none'),
                (l._immediateVirtual = !0)),
                t && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
                  ? ((l._cssModeVirtualInitialSet = !0),
                    requestAnimationFrame(() => {
                      p[e ? 'scrollLeft' : 'scrollTop'] = n;
                    }))
                  : (p[e ? 'scrollLeft' : 'scrollTop'] = n),
                t &&
                  requestAnimationFrame(() => {
                    (l.wrapperEl.style.scrollSnapType = ''),
                      (l._immediateVirtual = !1);
                  });
            } else {
              if (!l.support.smoothScroll)
                return (
                  qe({
                    swiper: l,
                    targetPosition: n,
                    side: e ? 'left' : 'top',
                  }),
                  !0
                );
              p.scrollTo({ [e ? 'left' : 'top']: n, behavior: 'smooth' });
            }
            return !0;
          }
          return (
            l.setTransition(t),
            l.setTranslate(v),
            l.updateActiveIndex(i),
            l.updateSlidesClasses(),
            l.emit('beforeTransitionStart', t, r),
            l.transitionStart(n, b),
            0 === t
              ? l.transitionEnd(n, b)
              : l.animating ||
                ((l.animating = !0),
                l.onSlideToWrapperTransitionEnd ||
                  (l.onSlideToWrapperTransitionEnd = function (e) {
                    l &&
                      !l.destroyed &&
                      e.target === this &&
                      (l.wrapperEl.removeEventListener(
                        'transitionend',
                        l.onSlideToWrapperTransitionEnd,
                      ),
                      (l.onSlideToWrapperTransitionEnd = null),
                      delete l.onSlideToWrapperTransitionEnd,
                      l.transitionEnd(n, b));
                  }),
                l.wrapperEl.addEventListener(
                  'transitionend',
                  l.onSlideToWrapperTransitionEnd,
                )),
            !0
          );
        },
        slideToLoop: function (e, t, n, r) {
          if (
            (void 0 === e && (e = 0),
            void 0 === n && (n = !0),
            'string' === typeof e)
          ) {
            e = parseInt(e, 10);
          }
          const a = this;
          if (a.destroyed) return;
          'undefined' === typeof t && (t = a.params.speed);
          const l = a.grid && a.params.grid && a.params.grid.rows > 1;
          let i = e;
          if (a.params.loop)
            if (a.virtual && a.params.virtual.enabled)
              i += a.virtual.slidesBefore;
            else {
              let e;
              if (l) {
                const t = i * a.params.grid.rows;
                e = a.slides.filter(
                  e => 1 * e.getAttribute('data-swiper-slide-index') === t,
                )[0].column;
              } else e = a.getSlideIndexByData(i);
              const t = l
                  ? Math.ceil(a.slides.length / a.params.grid.rows)
                  : a.slides.length,
                { centeredSlides: n } = a.params;
              let o = a.params.slidesPerView;
              'auto' === o
                ? (o = a.slidesPerViewDynamic())
                : ((o = Math.ceil(parseFloat(a.params.slidesPerView, 10))),
                  n && o % 2 === 0 && (o += 1));
              let s = t - e < o;
              if (
                (n && (s = s || e < Math.ceil(o / 2)),
                r && n && 'auto' !== a.params.slidesPerView && !l && (s = !1),
                s)
              ) {
                const r = n
                  ? e < a.activeIndex
                    ? 'prev'
                    : 'next'
                  : e - a.activeIndex - 1 < a.params.slidesPerView
                  ? 'next'
                  : 'prev';
                a.loopFix({
                  direction: r,
                  slideTo: !0,
                  activeSlideIndex: 'next' === r ? e + 1 : e - t + 1,
                  slideRealIndex: 'next' === r ? a.realIndex : void 0,
                });
              }
              if (l) {
                const e = i * a.params.grid.rows;
                i = a.slides.filter(
                  t => 1 * t.getAttribute('data-swiper-slide-index') === e,
                )[0].column;
              } else i = a.getSlideIndexByData(i);
            }
          return (
            requestAnimationFrame(() => {
              a.slideTo(i, t, n, r);
            }),
            a
          );
        },
        slideNext: function (e, t, n) {
          void 0 === t && (t = !0);
          const r = this,
            { enabled: a, params: l, animating: i } = r;
          if (!a || r.destroyed) return r;
          'undefined' === typeof e && (e = r.params.speed);
          let o = l.slidesPerGroup;
          'auto' === l.slidesPerView &&
            1 === l.slidesPerGroup &&
            l.slidesPerGroupAuto &&
            (o = Math.max(r.slidesPerViewDynamic('current', !0), 1));
          const s = r.activeIndex < l.slidesPerGroupSkip ? 1 : o,
            u = r.virtual && l.virtual.enabled;
          if (l.loop) {
            if (i && !u && l.loopPreventsSliding) return !1;
            if (
              (r.loopFix({ direction: 'next' }),
              (r._clientLeft = r.wrapperEl.clientLeft),
              r.activeIndex === r.slides.length - 1 && l.cssMode)
            )
              return (
                requestAnimationFrame(() => {
                  r.slideTo(r.activeIndex + s, e, t, n);
                }),
                !0
              );
          }
          return l.rewind && r.isEnd
            ? r.slideTo(0, e, t, n)
            : r.slideTo(r.activeIndex + s, e, t, n);
        },
        slidePrev: function (e, t, n) {
          void 0 === t && (t = !0);
          const r = this,
            {
              params: a,
              snapGrid: l,
              slidesGrid: i,
              rtlTranslate: o,
              enabled: s,
              animating: u,
            } = r;
          if (!s || r.destroyed) return r;
          'undefined' === typeof e && (e = r.params.speed);
          const c = r.virtual && a.virtual.enabled;
          if (a.loop) {
            if (u && !c && a.loopPreventsSliding) return !1;
            r.loopFix({ direction: 'prev' }),
              (r._clientLeft = r.wrapperEl.clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const f = d(o ? r.translate : -r.translate),
            p = l.map(e => d(e));
          let h = l[p.indexOf(f) - 1];
          if ('undefined' === typeof h && a.cssMode) {
            let e;
            l.forEach((t, n) => {
              f >= t && (e = n);
            }),
              'undefined' !== typeof e && (h = l[e > 0 ? e - 1 : e]);
          }
          let m = 0;
          if (
            ('undefined' !== typeof h &&
              ((m = i.indexOf(h)),
              m < 0 && (m = r.activeIndex - 1),
              'auto' === a.slidesPerView &&
                1 === a.slidesPerGroup &&
                a.slidesPerGroupAuto &&
                ((m = m - r.slidesPerViewDynamic('previous', !0) + 1),
                (m = Math.max(m, 0)))),
            a.rewind && r.isBeginning)
          ) {
            const a =
              r.params.virtual && r.params.virtual.enabled && r.virtual
                ? r.virtual.slides.length - 1
                : r.slides.length - 1;
            return r.slideTo(a, e, t, n);
          }
          return a.loop && 0 === r.activeIndex && a.cssMode
            ? (requestAnimationFrame(() => {
                r.slideTo(m, e, t, n);
              }),
              !0)
            : r.slideTo(m, e, t, n);
        },
        slideReset: function (e, t, n) {
          void 0 === t && (t = !0);
          const r = this;
          if (!r.destroyed)
            return (
              'undefined' === typeof e && (e = r.params.speed),
              r.slideTo(r.activeIndex, e, t, n)
            );
        },
        slideToClosest: function (e, t, n, r) {
          void 0 === t && (t = !0), void 0 === r && (r = 0.5);
          const a = this;
          if (a.destroyed) return;
          'undefined' === typeof e && (e = a.params.speed);
          let l = a.activeIndex;
          const i = Math.min(a.params.slidesPerGroupSkip, l),
            o = i + Math.floor((l - i) / a.params.slidesPerGroup),
            s = a.rtlTranslate ? a.translate : -a.translate;
          if (s >= a.snapGrid[o]) {
            const e = a.snapGrid[o];
            s - e > (a.snapGrid[o + 1] - e) * r &&
              (l += a.params.slidesPerGroup);
          } else {
            const e = a.snapGrid[o - 1];
            s - e <= (a.snapGrid[o] - e) * r && (l -= a.params.slidesPerGroup);
          }
          return (
            (l = Math.max(l, 0)),
            (l = Math.min(l, a.slidesGrid.length - 1)),
            a.slideTo(l, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          const e = this;
          if (e.destroyed) return;
          const { params: t, slidesEl: n } = e,
            r =
              'auto' === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let a,
            l = e.clickedIndex;
          const i = e.isElement ? 'swiper-slide' : '.'.concat(t.slideClass);
          if (t.loop) {
            if (e.animating) return;
            (a = parseInt(
              e.clickedSlide.getAttribute('data-swiper-slide-index'),
              10,
            )),
              t.centeredSlides
                ? l < e.loopedSlides - r / 2 ||
                  l > e.slides.length - e.loopedSlides + r / 2
                  ? (e.loopFix(),
                    (l = e.getSlideIndex(
                      Ye(
                        n,
                        ''
                          .concat(i, '[data-swiper-slide-index="')
                          .concat(a, '"]'),
                      )[0],
                    )),
                    He(() => {
                      e.slideTo(l);
                    }))
                  : e.slideTo(l)
                : l > e.slides.length - r
                ? (e.loopFix(),
                  (l = e.getSlideIndex(
                    Ye(
                      n,
                      ''
                        .concat(i, '[data-swiper-slide-index="')
                        .concat(a, '"]'),
                    )[0],
                  )),
                  He(() => {
                    e.slideTo(l);
                  }))
                : e.slideTo(l);
          } else e.slideTo(l);
        },
      };
      var bt = {
        loopCreate: function (e) {
          const t = this,
            { params: n, slidesEl: r } = t;
          if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
          const a = () => {
              Ye(r, '.'.concat(n.slideClass, ', swiper-slide')).forEach(
                (e, t) => {
                  e.setAttribute('data-swiper-slide-index', t);
                },
              );
            },
            l = t.grid && n.grid && n.grid.rows > 1,
            i = n.slidesPerGroup * (l ? n.grid.rows : 1),
            o = t.slides.length % i !== 0,
            s = l && t.slides.length % n.grid.rows !== 0,
            u = e => {
              for (let r = 0; r < e; r += 1) {
                const e = t.isElement
                  ? Je('swiper-slide', [n.slideBlankClass])
                  : Je('div', [n.slideClass, n.slideBlankClass]);
                t.slidesEl.append(e);
              }
            };
          if (o) {
            if (n.loopAddBlankSlides) {
              u(i - (t.slides.length % i)), t.recalcSlides(), t.updateSlides();
            } else
              Ke(
                'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)',
              );
            a();
          } else if (s) {
            if (n.loopAddBlankSlides) {
              u(n.grid.rows - (t.slides.length % n.grid.rows)),
                t.recalcSlides(),
                t.updateSlides();
            } else
              Ke(
                'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)',
              );
            a();
          } else a();
          t.loopFix({
            slideRealIndex: e,
            direction: n.centeredSlides ? void 0 : 'next',
          });
        },
        loopFix: function (e) {
          let {
            slideRealIndex: t,
            slideTo: n = !0,
            direction: r,
            setTranslate: a,
            activeSlideIndex: l,
            byController: i,
            byMousewheel: o,
          } = void 0 === e ? {} : e;
          const s = this;
          if (!s.params.loop) return;
          s.emit('beforeLoopFix');
          const {
              slides: u,
              allowSlidePrev: c,
              allowSlideNext: d,
              slidesEl: f,
              params: p,
            } = s,
            { centeredSlides: h } = p;
          if (
            ((s.allowSlidePrev = !0),
            (s.allowSlideNext = !0),
            s.virtual && p.virtual.enabled)
          )
            return (
              n &&
                (p.centeredSlides || 0 !== s.snapIndex
                  ? p.centeredSlides && s.snapIndex < p.slidesPerView
                    ? s.slideTo(
                        s.virtual.slides.length + s.snapIndex,
                        0,
                        !1,
                        !0,
                      )
                    : s.snapIndex === s.snapGrid.length - 1 &&
                      s.slideTo(s.virtual.slidesBefore, 0, !1, !0)
                  : s.slideTo(s.virtual.slides.length, 0, !1, !0)),
              (s.allowSlidePrev = c),
              (s.allowSlideNext = d),
              void s.emit('loopFix')
            );
          let m = p.slidesPerView;
          'auto' === m
            ? (m = s.slidesPerViewDynamic())
            : ((m = Math.ceil(parseFloat(p.slidesPerView, 10))),
              h && m % 2 === 0 && (m += 1));
          const g = p.slidesPerGroupAuto ? m : p.slidesPerGroup;
          let v = g;
          v % g !== 0 && (v += g - (v % g)),
            (v += p.loopAdditionalSlides),
            (s.loopedSlides = v);
          const b = s.grid && p.grid && p.grid.rows > 1;
          u.length < m + v
            ? Ke(
                'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters',
              )
            : b &&
              'row' === p.grid.fill &&
              Ke(
                'Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`',
              );
          const y = [],
            w = [];
          let S = s.activeIndex;
          'undefined' === typeof l
            ? (l = s.getSlideIndex(
                u.filter(e => e.classList.contains(p.slideActiveClass))[0],
              ))
            : (S = l);
          const x = 'next' === r || !r,
            C = 'prev' === r || !r;
          let k = 0,
            E = 0;
          const T = b ? Math.ceil(u.length / p.grid.rows) : u.length,
            P =
              (b ? u[l].column : l) +
              (h && 'undefined' === typeof a ? -m / 2 + 0.5 : 0);
          if (P < v) {
            k = Math.max(v - P, g);
            for (let e = 0; e < v - P; e += 1) {
              const t = e - Math.floor(e / T) * T;
              if (b) {
                const e = T - t - 1;
                for (let t = u.length - 1; t >= 0; t -= 1)
                  u[t].column === e && y.push(t);
              } else y.push(T - t - 1);
            }
          } else if (P + m > T - v) {
            E = Math.max(P - (T - 2 * v), g);
            for (let e = 0; e < E; e += 1) {
              const t = e - Math.floor(e / T) * T;
              b
                ? u.forEach((e, n) => {
                    e.column === t && w.push(n);
                  })
                : w.push(t);
            }
          }
          if (
            ((s.__preventObserver__ = !0),
            requestAnimationFrame(() => {
              s.__preventObserver__ = !1;
            }),
            C &&
              y.forEach(e => {
                (u[e].swiperLoopMoveDOM = !0),
                  f.prepend(u[e]),
                  (u[e].swiperLoopMoveDOM = !1);
              }),
            x &&
              w.forEach(e => {
                (u[e].swiperLoopMoveDOM = !0),
                  f.append(u[e]),
                  (u[e].swiperLoopMoveDOM = !1);
              }),
            s.recalcSlides(),
            'auto' === p.slidesPerView
              ? s.updateSlides()
              : b &&
                ((y.length > 0 && C) || (w.length > 0 && x)) &&
                s.slides.forEach((e, t) => {
                  s.grid.updateSlide(t, e, s.slides);
                }),
            p.watchSlidesProgress && s.updateSlidesOffset(),
            n)
          )
            if (y.length > 0 && C) {
              if ('undefined' === typeof t) {
                const e = s.slidesGrid[S],
                  t = s.slidesGrid[S + k] - e;
                o
                  ? s.setTranslate(s.translate - t)
                  : (s.slideTo(S + Math.ceil(k), 0, !1, !0),
                    a &&
                      ((s.touchEventsData.startTranslate =
                        s.touchEventsData.startTranslate - t),
                      (s.touchEventsData.currentTranslate =
                        s.touchEventsData.currentTranslate - t)));
              } else if (a) {
                const e = b ? y.length / p.grid.rows : y.length;
                s.slideTo(s.activeIndex + e, 0, !1, !0),
                  (s.touchEventsData.currentTranslate = s.translate);
              }
            } else if (w.length > 0 && x)
              if ('undefined' === typeof t) {
                const e = s.slidesGrid[S],
                  t = s.slidesGrid[S - E] - e;
                o
                  ? s.setTranslate(s.translate - t)
                  : (s.slideTo(S - E, 0, !1, !0),
                    a &&
                      ((s.touchEventsData.startTranslate =
                        s.touchEventsData.startTranslate - t),
                      (s.touchEventsData.currentTranslate =
                        s.touchEventsData.currentTranslate - t)));
              } else {
                const e = b ? w.length / p.grid.rows : w.length;
                s.slideTo(s.activeIndex - e, 0, !1, !0);
              }
          if (
            ((s.allowSlidePrev = c),
            (s.allowSlideNext = d),
            s.controller && s.controller.control && !i)
          ) {
            const e = {
              slideRealIndex: t,
              direction: r,
              setTranslate: a,
              activeSlideIndex: l,
              byController: !0,
            };
            Array.isArray(s.controller.control)
              ? s.controller.control.forEach(t => {
                  !t.destroyed &&
                    t.params.loop &&
                    t.loopFix({
                      ...e,
                      slideTo: t.params.slidesPerView === p.slidesPerView && n,
                    });
                })
              : s.controller.control instanceof s.constructor &&
                s.controller.control.params.loop &&
                s.controller.control.loopFix({
                  ...e,
                  slideTo:
                    s.controller.control.params.slidesPerView ===
                      p.slidesPerView && n,
                });
          }
          s.emit('loopFix');
        },
        loopDestroy: function () {
          const e = this,
            { params: t, slidesEl: n } = e;
          if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
          e.recalcSlides();
          const r = [];
          e.slides.forEach(e => {
            const t =
              'undefined' === typeof e.swiperSlideIndex
                ? 1 * e.getAttribute('data-swiper-slide-index')
                : e.swiperSlideIndex;
            r[t] = e;
          }),
            e.slides.forEach(e => {
              e.removeAttribute('data-swiper-slide-index');
            }),
            r.forEach(e => {
              n.append(e);
            }),
            e.recalcSlides(),
            e.slideTo(e.realIndex, 0);
        },
      };
      var yt = {
        setGrabCursor: function (e) {
          const t = this;
          if (
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const n =
            'container' === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          t.isElement && (t.__preventObserver__ = !0),
            (n.style.cursor = 'move'),
            (n.style.cursor = e ? 'grabbing' : 'grab'),
            t.isElement &&
              requestAnimationFrame(() => {
                t.__preventObserver__ = !1;
              });
        },
        unsetGrabCursor: function () {
          const e = this;
          (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.isElement && (e.__preventObserver__ = !0),
            (e[
              'container' === e.params.touchEventsTarget ? 'el' : 'wrapperEl'
            ].style.cursor = ''),
            e.isElement &&
              requestAnimationFrame(() => {
                e.__preventObserver__ = !1;
              }));
        },
      };
      function wt(e, t, n) {
        const r = De(),
          { params: a } = e,
          l = a.edgeSwipeDetection,
          i = a.edgeSwipeThreshold;
        return (
          !l ||
          !(n <= i || n >= r.innerWidth - i) ||
          ('prevent' === l && (t.preventDefault(), !0))
        );
      }
      function St(e) {
        const t = this,
          n = Re();
        let r = e;
        r.originalEvent && (r = r.originalEvent);
        const a = t.touchEventsData;
        if ('pointerdown' === r.type) {
          if (null !== a.pointerId && a.pointerId !== r.pointerId) return;
          a.pointerId = r.pointerId;
        } else
          'touchstart' === r.type &&
            1 === r.targetTouches.length &&
            (a.touchId = r.targetTouches[0].identifier);
        if ('touchstart' === r.type)
          return void wt(t, r, r.targetTouches[0].pageX);
        const { params: l, touches: i, enabled: o } = t;
        if (!o) return;
        if (!l.simulateTouch && 'mouse' === r.pointerType) return;
        if (t.animating && l.preventInteractionOnTransition) return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let s = r.target;
        if ('wrapper' === l.touchEventsTarget && !t.wrapperEl.contains(s))
          return;
        if ('which' in r && 3 === r.which) return;
        if ('button' in r && r.button > 0) return;
        if (a.isTouched && a.isMoved) return;
        const u = !!l.noSwipingClass && '' !== l.noSwipingClass,
          c = r.composedPath ? r.composedPath() : r.path;
        u && r.target && r.target.shadowRoot && c && (s = c[0]);
        const d = l.noSwipingSelector
            ? l.noSwipingSelector
            : '.'.concat(l.noSwipingClass),
          f = !(!r.target || !r.target.shadowRoot);
        if (
          l.noSwiping &&
          (f
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(n) {
                    if (!n || n === Re() || n === De()) return null;
                    n.assignedSlot && (n = n.assignedSlot);
                    const r = n.closest(e);
                    return r || n.getRootNode
                      ? r || t(n.getRootNode().host)
                      : null;
                  })(t)
                );
              })(d, s)
            : s.closest(d))
        )
          return void (t.allowClick = !0);
        if (l.swipeHandler && !s.closest(l.swipeHandler)) return;
        (i.currentX = r.pageX), (i.currentY = r.pageY);
        const p = i.currentX,
          h = i.currentY;
        if (!wt(t, r, p)) return;
        Object.assign(a, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (i.startX = p),
          (i.startY = h),
          (a.touchStartTime = Ue()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          l.threshold > 0 && (a.allowThresholdMove = !1);
        let m = !0;
        s.matches(a.focusableElements) &&
          ((m = !1), 'SELECT' === s.nodeName && (a.isTouched = !1)),
          n.activeElement &&
            n.activeElement.matches(a.focusableElements) &&
            n.activeElement !== s &&
            n.activeElement.blur();
        const g = m && t.allowTouchMove && l.touchStartPreventDefault;
        (!l.touchStartForcePreventDefault && !g) ||
          s.isContentEditable ||
          r.preventDefault(),
          l.freeMode &&
            l.freeMode.enabled &&
            t.freeMode &&
            t.animating &&
            !l.cssMode &&
            t.freeMode.onTouchStart(),
          t.emit('touchStart', r);
      }
      function xt(e) {
        const t = Re(),
          n = this,
          r = n.touchEventsData,
          { params: a, touches: l, rtlTranslate: i, enabled: o } = n;
        if (!o) return;
        if (!a.simulateTouch && 'mouse' === e.pointerType) return;
        let s,
          u = e;
        if (
          (u.originalEvent && (u = u.originalEvent), 'pointermove' === u.type)
        ) {
          if (null !== r.touchId) return;
          if (u.pointerId !== r.pointerId) return;
        }
        if ('touchmove' === u.type) {
          if (
            ((s = [...u.changedTouches].filter(
              e => e.identifier === r.touchId,
            )[0]),
            !s || s.identifier !== r.touchId)
          )
            return;
        } else s = u;
        if (!r.isTouched)
          return void (
            r.startMoving &&
            r.isScrolling &&
            n.emit('touchMoveOpposite', u)
          );
        const c = s.pageX,
          d = s.pageY;
        if (u.preventedByNestedSwiper)
          return (l.startX = c), void (l.startY = d);
        if (!n.allowTouchMove)
          return (
            u.target.matches(r.focusableElements) || (n.allowClick = !1),
            void (
              r.isTouched &&
              (Object.assign(l, {
                startX: c,
                startY: d,
                currentX: c,
                currentY: d,
              }),
              (r.touchStartTime = Ue()))
            )
          );
        if (a.touchReleaseOnEdges && !a.loop)
          if (n.isVertical()) {
            if (
              (d < l.startY && n.translate <= n.maxTranslate()) ||
              (d > l.startY && n.translate >= n.minTranslate())
            )
              return (r.isTouched = !1), void (r.isMoved = !1);
          } else if (
            (c < l.startX && n.translate <= n.maxTranslate()) ||
            (c > l.startX && n.translate >= n.minTranslate())
          )
            return;
        if (
          t.activeElement &&
          u.target === t.activeElement &&
          u.target.matches(r.focusableElements)
        )
          return (r.isMoved = !0), void (n.allowClick = !1);
        r.allowTouchCallbacks && n.emit('touchMove', u),
          (l.previousX = l.currentX),
          (l.previousY = l.currentY),
          (l.currentX = c),
          (l.currentY = d);
        const f = l.currentX - l.startX,
          p = l.currentY - l.startY;
        if (
          n.params.threshold &&
          Math.sqrt(f ** 2 + p ** 2) < n.params.threshold
        )
          return;
        if ('undefined' === typeof r.isScrolling) {
          let e;
          (n.isHorizontal() && l.currentY === l.startY) ||
          (n.isVertical() && l.currentX === l.startX)
            ? (r.isScrolling = !1)
            : f * f + p * p >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(p), Math.abs(f))) / Math.PI),
              (r.isScrolling = n.isHorizontal()
                ? e > a.touchAngle
                : 90 - e > a.touchAngle));
        }
        if (
          (r.isScrolling && n.emit('touchMoveOpposite', u),
          'undefined' === typeof r.startMoving &&
            ((l.currentX === l.startX && l.currentY === l.startY) ||
              (r.startMoving = !0)),
          r.isScrolling ||
            ('touchmove' === u.type && r.preventTouchMoveFromPointerMove))
        )
          return void (r.isTouched = !1);
        if (!r.startMoving) return;
        (n.allowClick = !1),
          !a.cssMode && u.cancelable && u.preventDefault(),
          a.touchMoveStopPropagation && !a.nested && u.stopPropagation();
        let h = n.isHorizontal() ? f : p,
          m = n.isHorizontal()
            ? l.currentX - l.previousX
            : l.currentY - l.previousY;
        a.oneWayMovement &&
          ((h = Math.abs(h) * (i ? 1 : -1)), (m = Math.abs(m) * (i ? 1 : -1))),
          (l.diff = h),
          (h *= a.touchRatio),
          i && ((h = -h), (m = -m));
        const g = n.touchesDirection;
        (n.swipeDirection = h > 0 ? 'prev' : 'next'),
          (n.touchesDirection = m > 0 ? 'prev' : 'next');
        const v = n.params.loop && !a.cssMode,
          b =
            ('next' === n.touchesDirection && n.allowSlideNext) ||
            ('prev' === n.touchesDirection && n.allowSlidePrev);
        if (!r.isMoved) {
          if (
            (v && b && n.loopFix({ direction: n.swipeDirection }),
            (r.startTranslate = n.getTranslate()),
            n.setTransition(0),
            n.animating)
          ) {
            const e = new window.CustomEvent('transitionend', {
              bubbles: !0,
              cancelable: !0,
            });
            n.wrapperEl.dispatchEvent(e);
          }
          (r.allowMomentumBounce = !1),
            !a.grabCursor ||
              (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
              n.setGrabCursor(!0),
            n.emit('sliderFirstMove', u);
        }
        if (
          (new Date().getTime(),
          r.isMoved &&
            r.allowThresholdMove &&
            g !== n.touchesDirection &&
            v &&
            b &&
            Math.abs(h) >= 1)
        )
          return (
            Object.assign(l, {
              startX: c,
              startY: d,
              currentX: c,
              currentY: d,
              startTranslate: r.currentTranslate,
            }),
            (r.loopSwapReset = !0),
            void (r.startTranslate = r.currentTranslate)
          );
        n.emit('sliderMove', u),
          (r.isMoved = !0),
          (r.currentTranslate = h + r.startTranslate);
        let y = !0,
          w = a.resistanceRatio;
        if (
          (a.touchReleaseOnEdges && (w = 0),
          h > 0
            ? (v &&
                b &&
                r.allowThresholdMove &&
                r.currentTranslate >
                  (a.centeredSlides
                    ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1]
                    : n.minTranslate()) &&
                n.loopFix({
                  direction: 'prev',
                  setTranslate: !0,
                  activeSlideIndex: 0,
                }),
              r.currentTranslate > n.minTranslate() &&
                ((y = !1),
                a.resistance &&
                  (r.currentTranslate =
                    n.minTranslate() -
                    1 +
                    (-n.minTranslate() + r.startTranslate + h) ** w)))
            : h < 0 &&
              (v &&
                b &&
                r.allowThresholdMove &&
                r.currentTranslate <
                  (a.centeredSlides
                    ? n.maxTranslate() +
                      n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
                    : n.maxTranslate()) &&
                n.loopFix({
                  direction: 'next',
                  setTranslate: !0,
                  activeSlideIndex:
                    n.slides.length -
                    ('auto' === a.slidesPerView
                      ? n.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(a.slidesPerView, 10))),
                }),
              r.currentTranslate < n.maxTranslate() &&
                ((y = !1),
                a.resistance &&
                  (r.currentTranslate =
                    n.maxTranslate() +
                    1 -
                    (n.maxTranslate() - r.startTranslate - h) ** w))),
          y && (u.preventedByNestedSwiper = !0),
          !n.allowSlideNext &&
            'next' === n.swipeDirection &&
            r.currentTranslate < r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          !n.allowSlidePrev &&
            'prev' === n.swipeDirection &&
            r.currentTranslate > r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          n.allowSlidePrev ||
            n.allowSlideNext ||
            (r.currentTranslate = r.startTranslate),
          a.threshold > 0)
        ) {
          if (!(Math.abs(h) > a.threshold || r.allowThresholdMove))
            return void (r.currentTranslate = r.startTranslate);
          if (!r.allowThresholdMove)
            return (
              (r.allowThresholdMove = !0),
              (l.startX = l.currentX),
              (l.startY = l.currentY),
              (r.currentTranslate = r.startTranslate),
              void (l.diff = n.isHorizontal()
                ? l.currentX - l.startX
                : l.currentY - l.startY)
            );
        }
        a.followFinger &&
          !a.cssMode &&
          (((a.freeMode && a.freeMode.enabled && n.freeMode) ||
            a.watchSlidesProgress) &&
            (n.updateActiveIndex(), n.updateSlidesClasses()),
          a.freeMode &&
            a.freeMode.enabled &&
            n.freeMode &&
            n.freeMode.onTouchMove(),
          n.updateProgress(r.currentTranslate),
          n.setTranslate(r.currentTranslate));
      }
      function Ct(e) {
        const t = this,
          n = t.touchEventsData;
        let r,
          a = e;
        a.originalEvent && (a = a.originalEvent);
        if ('touchend' === a.type || 'touchcancel' === a.type) {
          if (
            ((r = [...a.changedTouches].filter(
              e => e.identifier === n.touchId,
            )[0]),
            !r || r.identifier !== n.touchId)
          )
            return;
        } else {
          if (null !== n.touchId) return;
          if (a.pointerId !== n.pointerId) return;
          r = a;
        }
        if (
          [
            'pointercancel',
            'pointerout',
            'pointerleave',
            'contextmenu',
          ].includes(a.type)
        ) {
          if (
            !(
              ['pointercancel', 'contextmenu'].includes(a.type) &&
              (t.browser.isSafari || t.browser.isWebView)
            )
          )
            return;
        }
        (n.pointerId = null), (n.touchId = null);
        const {
          params: l,
          touches: i,
          rtlTranslate: o,
          slidesGrid: s,
          enabled: u,
        } = t;
        if (!u) return;
        if (!l.simulateTouch && 'mouse' === a.pointerType) return;
        if (
          (n.allowTouchCallbacks && t.emit('touchEnd', a),
          (n.allowTouchCallbacks = !1),
          !n.isTouched)
        )
          return (
            n.isMoved && l.grabCursor && t.setGrabCursor(!1),
            (n.isMoved = !1),
            void (n.startMoving = !1)
          );
        l.grabCursor &&
          n.isMoved &&
          n.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const c = Ue(),
          d = c - n.touchStartTime;
        if (t.allowClick) {
          const e = a.path || (a.composedPath && a.composedPath());
          t.updateClickedSlide((e && e[0]) || a.target, e),
            t.emit('tap click', a),
            d < 300 &&
              c - n.lastClickTime < 300 &&
              t.emit('doubleTap doubleClick', a);
        }
        if (
          ((n.lastClickTime = Ue()),
          He(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !n.isTouched ||
            !n.isMoved ||
            !t.swipeDirection ||
            (0 === i.diff && !n.loopSwapReset) ||
            (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
        )
          return (
            (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
          );
        let f;
        if (
          ((n.isTouched = !1),
          (n.isMoved = !1),
          (n.startMoving = !1),
          (f = l.followFinger
            ? o
              ? t.translate
              : -t.translate
            : -n.currentTranslate),
          l.cssMode)
        )
          return;
        if (l.freeMode && l.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: f });
        const p = f >= -t.maxTranslate() && !t.params.loop;
        let h = 0,
          m = t.slidesSizesGrid[0];
        for (
          let w = 0;
          w < s.length;
          w += w < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup
        ) {
          const e = w < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
          'undefined' !== typeof s[w + e]
            ? (p || (f >= s[w] && f < s[w + e])) &&
              ((h = w), (m = s[w + e] - s[w]))
            : (p || f >= s[w]) &&
              ((h = w), (m = s[s.length - 1] - s[s.length - 2]));
        }
        let g = null,
          v = null;
        l.rewind &&
          (t.isBeginning
            ? (v =
                l.virtual && l.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (g = 0));
        const b = (f - s[h]) / m,
          y = h < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
        if (d > l.longSwipesMs) {
          if (!l.longSwipes) return void t.slideTo(t.activeIndex);
          'next' === t.swipeDirection &&
            (b >= l.longSwipesRatio
              ? t.slideTo(l.rewind && t.isEnd ? g : h + y)
              : t.slideTo(h)),
            'prev' === t.swipeDirection &&
              (b > 1 - l.longSwipesRatio
                ? t.slideTo(h + y)
                : null !== v && b < 0 && Math.abs(b) > l.longSwipesRatio
                ? t.slideTo(v)
                : t.slideTo(h));
        } else {
          if (!l.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (a.target === t.navigation.nextEl || a.target === t.navigation.prevEl)
            ? a.target === t.navigation.nextEl
              ? t.slideTo(h + y)
              : t.slideTo(h)
            : ('next' === t.swipeDirection && t.slideTo(null !== g ? g : h + y),
              'prev' === t.swipeDirection && t.slideTo(null !== v ? v : h));
        }
      }
      function kt() {
        const e = this,
          { params: t, el: n } = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: r, allowSlidePrev: a, snapGrid: l } = e,
          i = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses();
        const o = i && t.loop;
        !('auto' === t.slidesPerView || t.slidesPerView > 1) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        o
          ? e.params.loop && !i
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = a),
          (e.allowSlideNext = r),
          e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
      }
      function Et(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function Tt() {
        const e = this,
          { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
        if (!r) return;
        let a;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const l = e.maxTranslate() - e.minTranslate();
        (a = 0 === l ? 0 : (e.translate - e.minTranslate()) / l),
          a !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
          e.emit('setTranslate', e.translate, !1);
      }
      function Pt(e) {
        const t = this;
        ct(t, e.target),
          t.params.cssMode ||
            ('auto' !== t.params.slidesPerView && !t.params.autoHeight) ||
            t.update();
      }
      function Ot() {
        const e = this;
        e.documentTouchHandlerProceeded ||
          ((e.documentTouchHandlerProceeded = !0),
          e.params.touchReleaseOnEdges && (e.el.style.touchAction = 'auto'));
      }
      const Mt = (e, t) => {
        const n = Re(),
          { params: r, el: a, wrapperEl: l, device: i } = e,
          o = !!r.nested,
          s = 'on' === t ? 'addEventListener' : 'removeEventListener',
          u = t;
        n[s]('touchstart', e.onDocumentTouchStart, { passive: !1, capture: o }),
          a[s]('touchstart', e.onTouchStart, { passive: !1 }),
          a[s]('pointerdown', e.onTouchStart, { passive: !1 }),
          n[s]('touchmove', e.onTouchMove, { passive: !1, capture: o }),
          n[s]('pointermove', e.onTouchMove, { passive: !1, capture: o }),
          n[s]('touchend', e.onTouchEnd, { passive: !0 }),
          n[s]('pointerup', e.onTouchEnd, { passive: !0 }),
          n[s]('pointercancel', e.onTouchEnd, { passive: !0 }),
          n[s]('touchcancel', e.onTouchEnd, { passive: !0 }),
          n[s]('pointerout', e.onTouchEnd, { passive: !0 }),
          n[s]('pointerleave', e.onTouchEnd, { passive: !0 }),
          n[s]('contextmenu', e.onTouchEnd, { passive: !0 }),
          (r.preventClicks || r.preventClicksPropagation) &&
            a[s]('click', e.onClick, !0),
          r.cssMode && l[s]('scroll', e.onScroll),
          r.updateOnWindowResize
            ? e[u](
                i.ios || i.android
                  ? 'resize orientationchange observerUpdate'
                  : 'resize observerUpdate',
                kt,
                !0,
              )
            : e[u]('observerUpdate', kt, !0),
          a[s]('load', e.onLoad, { capture: !0 });
      };
      var zt = {
        attachEvents: function () {
          const e = this,
            { params: t } = e;
          (e.onTouchStart = St.bind(e)),
            (e.onTouchMove = xt.bind(e)),
            (e.onTouchEnd = Ct.bind(e)),
            (e.onDocumentTouchStart = Ot.bind(e)),
            t.cssMode && (e.onScroll = Tt.bind(e)),
            (e.onClick = Et.bind(e)),
            (e.onLoad = Pt.bind(e)),
            Mt(e, 'on');
        },
        detachEvents: function () {
          Mt(this, 'off');
        },
      };
      const Lt = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var _t = {
        setBreakpoint: function () {
          const e = this,
            { realIndex: t, initialized: n, params: r, el: a } = e,
            l = r.breakpoints;
          if (!l || (l && 0 === Object.keys(l).length)) return;
          const i = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
          if (!i || e.currentBreakpoint === i) return;
          const o = (i in l ? l[i] : void 0) || e.originalParams,
            s = Lt(e, r),
            u = Lt(e, o),
            c = e.params.grabCursor,
            d = o.grabCursor,
            f = r.enabled;
          s && !u
            ? (a.classList.remove(
                ''.concat(r.containerModifierClass, 'grid'),
                ''.concat(r.containerModifierClass, 'grid-column'),
              ),
              e.emitContainerClasses())
            : !s &&
              u &&
              (a.classList.add(''.concat(r.containerModifierClass, 'grid')),
              ((o.grid.fill && 'column' === o.grid.fill) ||
                (!o.grid.fill && 'column' === r.grid.fill)) &&
                a.classList.add(
                  ''.concat(r.containerModifierClass, 'grid-column'),
                ),
              e.emitContainerClasses()),
            c && !d ? e.unsetGrabCursor() : !c && d && e.setGrabCursor(),
            ['navigation', 'pagination', 'scrollbar'].forEach(t => {
              if ('undefined' === typeof o[t]) return;
              const n = r[t] && r[t].enabled,
                a = o[t] && o[t].enabled;
              n && !a && e[t].disable(), !n && a && e[t].enable();
            });
          const p = o.direction && o.direction !== r.direction,
            h = r.loop && (o.slidesPerView !== r.slidesPerView || p),
            m = r.loop;
          p && n && e.changeDirection(), We(e.params, o);
          const g = e.params.enabled,
            v = e.params.loop;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            f && !g ? e.disable() : !f && g && e.enable(),
            (e.currentBreakpoint = i),
            e.emit('_beforeBreakpoint', o),
            n &&
              (h
                ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                : !m && v
                ? (e.loopCreate(t), e.updateSlides())
                : m && !v && e.loopDestroy()),
            e.emit('breakpoint', o);
        },
        getBreakpoint: function (e, t, n) {
          if ((void 0 === t && (t = 'window'), !e || ('container' === t && !n)))
            return;
          let r = !1;
          const a = De(),
            l = 'window' === t ? a.innerHeight : n.clientHeight,
            i = Object.keys(e).map(e => {
              if ('string' === typeof e && 0 === e.indexOf('@')) {
                const t = parseFloat(e.substr(1));
                return { value: l * t, point: e };
              }
              return { value: e, point: e };
            });
          i.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let o = 0; o < i.length; o += 1) {
            const { point: e, value: l } = i[o];
            'window' === t
              ? a.matchMedia('(min-width: '.concat(l, 'px)')).matches && (r = e)
              : l <= n.clientWidth && (r = e);
          }
          return r || 'max';
        },
      };
      var At = {
        addClasses: function () {
          const e = this,
            { classNames: t, params: n, rtl: r, el: a, device: l } = e,
            i = (function (e, t) {
              const n = [];
              return (
                e.forEach(e => {
                  'object' === typeof e
                    ? Object.keys(e).forEach(r => {
                        e[r] && n.push(t + r);
                      })
                    : 'string' === typeof e && n.push(t + e);
                }),
                n
              );
            })(
              [
                'initialized',
                n.direction,
                { 'free-mode': e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: r },
                { grid: n.grid && n.grid.rows > 1 },
                {
                  'grid-column':
                    n.grid && n.grid.rows > 1 && 'column' === n.grid.fill,
                },
                { android: l.android },
                { ios: l.ios },
                { 'css-mode': n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
                { 'watch-progress': n.watchSlidesProgress },
              ],
              n.containerModifierClass,
            );
          t.push(...i), a.classList.add(...t), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { el: e, classNames: t } = this;
          e.classList.remove(...t), this.emitContainerClasses();
        },
      };
      var Bt = {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: n } = e,
              { slidesOffsetBefore: r } = n;
            if (r) {
              const t = e.slides.length - 1,
                n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
              e.isLocked = e.size > n;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock');
          },
        },
        Nt = {
          init: !0,
          direction: 'horizontal',
          oneWayMovement: !1,
          swiperElementNodeName: 'SWIPER-CONTAINER',
          touchEventsTarget: 'wrapper',
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          resizeObserver: !0,
          nested: !1,
          createElements: !1,
          eventsPrefix: 'swiper',
          enabled: !0,
          focusableElements:
            'input, select, option, textarea, button, video, label',
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: 'slide',
          breakpoints: void 0,
          breakpointsBase: 'window',
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          slidesPerGroupAuto: !1,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !0,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 5,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          loop: !1,
          loopAddBlankSlides: !0,
          loopAdditionalSlides: 0,
          loopPreventsSliding: !0,
          rewind: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: 'swiper-no-swiping',
          noSwipingSelector: null,
          passiveListeners: !0,
          maxBackfaceHiddenSlides: 10,
          containerModifierClass: 'swiper-',
          slideClass: 'swiper-slide',
          slideBlankClass: 'swiper-slide-blank',
          slideActiveClass: 'swiper-slide-active',
          slideVisibleClass: 'swiper-slide-visible',
          slideFullyVisibleClass: 'swiper-slide-fully-visible',
          slideNextClass: 'swiper-slide-next',
          slidePrevClass: 'swiper-slide-prev',
          wrapperClass: 'swiper-wrapper',
          lazyPreloaderClass: 'swiper-lazy-preloader',
          lazyPreloadPrevNext: 0,
          runCallbacksOnInit: !0,
          _emitClasses: !1,
        };
      function jt(e, t) {
        return function (n) {
          void 0 === n && (n = {});
          const r = Object.keys(n)[0],
            a = n[r];
          'object' === typeof a && null !== a
            ? (!0 === e[r] && (e[r] = { enabled: !0 }),
              'navigation' === r &&
                e[r] &&
                e[r].enabled &&
                !e[r].prevEl &&
                !e[r].nextEl &&
                (e[r].auto = !0),
              ['pagination', 'scrollbar'].indexOf(r) >= 0 &&
                e[r] &&
                e[r].enabled &&
                !e[r].el &&
                (e[r].auto = !0),
              r in e && 'enabled' in a
                ? ('object' !== typeof e[r] ||
                    'enabled' in e[r] ||
                    (e[r].enabled = !0),
                  e[r] || (e[r] = { enabled: !1 }),
                  We(t, n))
                : We(t, n))
            : We(t, n);
        };
      }
      const Rt = {
          eventsEmitter: st,
          update: pt,
          translate: ht,
          transition: gt,
          slide: vt,
          loop: bt,
          grabCursor: yt,
          events: zt,
          breakpoints: _t,
          checkOverflow: Bt,
          classes: At,
        },
        It = {};
      class Dt {
        constructor() {
          let e, t;
          for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          1 === r.length &&
          r[0].constructor &&
          'Object' === Object.prototype.toString.call(r[0]).slice(8, -1)
            ? (t = r[0])
            : ([e, t] = r),
            t || (t = {}),
            (t = We({}, t)),
            e && !t.el && (t.el = e);
          const l = Re();
          if (
            t.el &&
            'string' === typeof t.el &&
            l.querySelectorAll(t.el).length > 1
          ) {
            const e = [];
            return (
              l.querySelectorAll(t.el).forEach(n => {
                const r = We({}, t, { el: n });
                e.push(new Dt(r));
              }),
              e
            );
          }
          const i = this;
          (i.__swiper__ = !0),
            (i.support = lt()),
            (i.device = it({ userAgent: t.userAgent })),
            (i.browser = ot()),
            (i.eventsListeners = {}),
            (i.eventsAnyListeners = []),
            (i.modules = [...i.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              i.modules.push(...t.modules);
          const o = {};
          i.modules.forEach(e => {
            e({
              params: t,
              swiper: i,
              extendParams: jt(t, o),
              on: i.on.bind(i),
              once: i.once.bind(i),
              off: i.off.bind(i),
              emit: i.emit.bind(i),
            });
          });
          const s = We({}, Nt, o);
          return (
            (i.params = We({}, s, It, t)),
            (i.originalParams = We({}, i.params)),
            (i.passedParams = We({}, t)),
            i.params &&
              i.params.on &&
              Object.keys(i.params.on).forEach(e => {
                i.on(e, i.params.on[e]);
              }),
            i.params && i.params.onAny && i.onAny(i.params.onAny),
            Object.assign(i, {
              enabled: i.params.enabled,
              el: e,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => 'horizontal' === i.params.direction,
              isVertical: () => 'vertical' === i.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
              },
              allowSlideNext: i.params.allowSlideNext,
              allowSlidePrev: i.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: i.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null,
              },
              allowClick: !0,
              allowTouchMove: i.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            i.emit('_swiper'),
            i.params.init && i.init(),
            i
          );
        }
        getDirectionLabel(e) {
          return this.isHorizontal()
            ? e
            : {
                width: 'height',
                'margin-top': 'margin-left',
                'margin-bottom ': 'margin-right',
                'margin-left': 'margin-top',
                'margin-right': 'margin-bottom',
                'padding-left': 'padding-top',
                'padding-right': 'padding-bottom',
                marginRight: 'marginBottom',
              }[e];
        }
        getSlideIndex(e) {
          const { slidesEl: t, params: n } = this,
            r = Ze(Ye(t, '.'.concat(n.slideClass, ', swiper-slide'))[0]);
          return Ze(e) - r;
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(
            this.slides.filter(
              t => 1 * t.getAttribute('data-swiper-slide-index') === e,
            )[0],
          );
        }
        recalcSlides() {
          const { slidesEl: e, params: t } = this;
          this.slides = Ye(e, '.'.concat(t.slideClass, ', swiper-slide'));
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit('enable'));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit('disable'));
        }
        setProgress(e, t) {
          const n = this;
          e = Math.min(Math.max(e, 0), 1);
          const r = n.minTranslate(),
            a = (n.maxTranslate() - r) * e + r;
          n.translateTo(a, 'undefined' === typeof t ? 0 : t),
            n.updateActiveIndex(),
            n.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(' ')
            .filter(
              t =>
                0 === t.indexOf('swiper') ||
                0 === t.indexOf(e.params.containerModifierClass),
            );
          e.emit('_containerClasses', t.join(' '));
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed
            ? ''
            : e.className
                .split(' ')
                .filter(
                  e =>
                    0 === e.indexOf('swiper-slide') ||
                    0 === e.indexOf(t.params.slideClass),
                )
                .join(' ');
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.forEach(n => {
            const r = e.getSlideClasses(n);
            t.push({ slideEl: n, classNames: r }), e.emit('_slideClass', n, r);
          }),
            e.emit('_slideClasses', t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = 'current'), void 0 === t && (t = !1);
          const {
            params: n,
            slides: r,
            slidesGrid: a,
            slidesSizesGrid: l,
            size: i,
            activeIndex: o,
          } = this;
          let s = 1;
          if ('number' === typeof n.slidesPerView) return n.slidesPerView;
          if (n.centeredSlides) {
            let e,
              t = r[o] ? Math.ceil(r[o].swiperSlideSize) : 0;
            for (let n = o + 1; n < r.length; n += 1)
              r[n] &&
                !e &&
                ((t += Math.ceil(r[n].swiperSlideSize)),
                (s += 1),
                t > i && (e = !0));
            for (let n = o - 1; n >= 0; n -= 1)
              r[n] &&
                !e &&
                ((t += r[n].swiperSlideSize), (s += 1), t > i && (e = !0));
          } else if ('current' === e)
            for (let u = o + 1; u < r.length; u += 1) {
              (t ? a[u] + l[u] - a[o] < i : a[u] - a[o] < i) && (s += 1);
            }
          else
            for (let u = o - 1; u >= 0; u -= 1) {
              a[o] - a[u] < i && (s += 1);
            }
          return s;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: n } = e;
          function r() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let a;
          if (
            (n.breakpoints && e.setBreakpoint(),
            [...e.el.querySelectorAll('[loading="lazy"]')].forEach(t => {
              t.complete && ct(e, t);
            }),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            n.freeMode && n.freeMode.enabled && !n.cssMode)
          )
            r(), n.autoHeight && e.updateAutoHeight();
          else {
            if (
              ('auto' === n.slidesPerView || n.slidesPerView > 1) &&
              e.isEnd &&
              !n.centeredSlides
            ) {
              const t =
                e.virtual && n.virtual.enabled ? e.virtual.slides : e.slides;
              a = e.slideTo(t.length - 1, 0, !1, !0);
            } else a = e.slideTo(e.activeIndex, 0, !1, !0);
            a || r();
          }
          n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit('update');
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const n = this,
            r = n.params.direction;
          return (
            e || (e = 'horizontal' === r ? 'vertical' : 'horizontal'),
            e === r ||
              ('horizontal' !== e && 'vertical' !== e) ||
              (n.el.classList.remove(
                ''.concat(n.params.containerModifierClass).concat(r),
              ),
              n.el.classList.add(
                ''.concat(n.params.containerModifierClass).concat(e),
              ),
              n.emitContainerClasses(),
              (n.params.direction = e),
              n.slides.forEach(t => {
                'vertical' === e ? (t.style.width = '') : (t.style.height = '');
              }),
              n.emit('changeDirection'),
              t && n.update()),
            n
          );
        }
        changeLanguageDirection(e) {
          const t = this;
          (t.rtl && 'rtl' === e) ||
            (!t.rtl && 'ltr' === e) ||
            ((t.rtl = 'rtl' === e),
            (t.rtlTranslate = 'horizontal' === t.params.direction && t.rtl),
            t.rtl
              ? (t.el.classList.add(
                  ''.concat(t.params.containerModifierClass, 'rtl'),
                ),
                (t.el.dir = 'rtl'))
              : (t.el.classList.remove(
                  ''.concat(t.params.containerModifierClass, 'rtl'),
                ),
                (t.el.dir = 'ltr')),
            t.update());
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let n = e || t.params.el;
          if (('string' === typeof n && (n = document.querySelector(n)), !n))
            return !1;
          (n.swiper = t),
            n.parentNode &&
              n.parentNode.host &&
              n.parentNode.host.nodeName ===
                t.params.swiperElementNodeName.toUpperCase() &&
              (t.isElement = !0);
          const r = () =>
            '.'.concat(
              (t.params.wrapperClass || '').trim().split(' ').join('.'),
            );
          let a = (() => {
            if (n && n.shadowRoot && n.shadowRoot.querySelector) {
              return n.shadowRoot.querySelector(r());
            }
            return Ye(n, r())[0];
          })();
          return (
            !a &&
              t.params.createElements &&
              ((a = Je('div', t.params.wrapperClass)),
              n.append(a),
              Ye(n, '.'.concat(t.params.slideClass)).forEach(e => {
                a.append(e);
              })),
            Object.assign(t, {
              el: n,
              wrapperEl: a,
              slidesEl:
                t.isElement && !n.parentNode.host.slideSlots
                  ? n.parentNode.host
                  : a,
              hostEl: t.isElement ? n.parentNode.host : n,
              mounted: !0,
              rtl:
                'rtl' === n.dir.toLowerCase() || 'rtl' === Xe(n, 'direction'),
              rtlTranslate:
                'horizontal' === t.params.direction &&
                ('rtl' === n.dir.toLowerCase() || 'rtl' === Xe(n, 'direction')),
              wrongRTL: '-webkit-box' === Xe(a, 'display'),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit('beforeInit'),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0,
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0,
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents();
          const n = [...t.el.querySelectorAll('[loading="lazy"]')];
          return (
            t.isElement &&
              n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            n.forEach(e => {
              e.complete
                ? ct(t, e)
                : e.addEventListener('load', e => {
                    ct(t, e.target);
                  });
            }),
            ft(t),
            (t.initialized = !0),
            ft(t),
            t.emit('init'),
            t.emit('afterInit'),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const n = this,
            { params: r, el: a, wrapperEl: l, slides: i } = n;
          return (
            'undefined' === typeof n.params ||
              n.destroyed ||
              (n.emit('beforeDestroy'),
              (n.initialized = !1),
              n.detachEvents(),
              r.loop && n.loopDestroy(),
              t &&
                (n.removeClasses(),
                a.removeAttribute('style'),
                l.removeAttribute('style'),
                i &&
                  i.length &&
                  i.forEach(e => {
                    e.classList.remove(
                      r.slideVisibleClass,
                      r.slideFullyVisibleClass,
                      r.slideActiveClass,
                      r.slideNextClass,
                      r.slidePrevClass,
                    ),
                      e.removeAttribute('style'),
                      e.removeAttribute('data-swiper-slide-index');
                  })),
              n.emit('destroy'),
              Object.keys(n.eventsListeners).forEach(e => {
                n.off(e);
              }),
              !1 !== e &&
                ((n.el.swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach(e => {
                    try {
                      t[e] = null;
                    } catch (yn) {}
                    try {
                      delete t[e];
                    } catch (yn) {}
                  });
                })(n)),
              (n.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          We(It, e);
        }
        static get extendedDefaults() {
          return It;
        }
        static get defaults() {
          return Nt;
        }
        static installModule(e) {
          Dt.prototype.__modules__ || (Dt.prototype.__modules__ = []);
          const t = Dt.prototype.__modules__;
          'function' === typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach(e => Dt.installModule(e)), Dt)
            : (Dt.installModule(e), Dt);
        }
      }
      Object.keys(Rt).forEach(e => {
        Object.keys(Rt[e]).forEach(t => {
          Dt.prototype[t] = Rt[e][t];
        });
      }),
        Dt.use([
          function (e) {
            let { swiper: t, on: n, emit: r } = e;
            const a = De();
            let l = null,
              i = null;
            const o = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (r('beforeResize'), r('resize'));
              },
              s = () => {
                t && !t.destroyed && t.initialized && r('orientationchange');
              };
            n('init', () => {
              t.params.resizeObserver && 'undefined' !== typeof a.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((l = new ResizeObserver(e => {
                    i = a.requestAnimationFrame(() => {
                      const { width: n, height: r } = t;
                      let a = n,
                        l = r;
                      e.forEach(e => {
                        let {
                          contentBoxSize: n,
                          contentRect: r,
                          target: i,
                        } = e;
                        (i && i !== t.el) ||
                          ((a = r ? r.width : (n[0] || n).inlineSize),
                          (l = r ? r.height : (n[0] || n).blockSize));
                      }),
                        (a === n && l === r) || o();
                    });
                  })),
                  l.observe(t.el))
                : (a.addEventListener('resize', o),
                  a.addEventListener('orientationchange', s));
            }),
              n('destroy', () => {
                i && a.cancelAnimationFrame(i),
                  l && l.unobserve && t.el && (l.unobserve(t.el), (l = null)),
                  a.removeEventListener('resize', o),
                  a.removeEventListener('orientationchange', s);
              });
          },
          function (e) {
            let { swiper: t, extendParams: n, on: r, emit: a } = e;
            const l = [],
              i = De(),
              o = function (e, n) {
                void 0 === n && (n = {});
                const r = new (i.MutationObserver || i.WebkitMutationObserver)(
                  e => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) return void a('observerUpdate', e[0]);
                    const n = function () {
                      a('observerUpdate', e[0]);
                    };
                    i.requestAnimationFrame
                      ? i.requestAnimationFrame(n)
                      : i.setTimeout(n, 0);
                  },
                );
                r.observe(e, {
                  attributes:
                    'undefined' === typeof n.attributes || n.attributes,
                  childList: 'undefined' === typeof n.childList || n.childList,
                  characterData:
                    'undefined' === typeof n.characterData || n.characterData,
                }),
                  l.push(r);
              };
            n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              r('init', () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = $e(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) o(e[t]);
                  }
                  o(t.hostEl, { childList: t.params.observeSlideChildren }),
                    o(t.wrapperEl, { attributes: !1 });
                }
              }),
              r('destroy', () => {
                l.forEach(e => {
                  e.disconnect();
                }),
                  l.splice(0, l.length);
              });
          },
        ]);
      const Ft = [
        'eventsPrefix',
        'injectStyles',
        'injectStylesUrls',
        'modules',
        'init',
        '_direction',
        'oneWayMovement',
        'swiperElementNodeName',
        'touchEventsTarget',
        'initialSlide',
        '_speed',
        'cssMode',
        'updateOnWindowResize',
        'resizeObserver',
        'nested',
        'focusableElements',
        '_enabled',
        '_width',
        '_height',
        'preventInteractionOnTransition',
        'userAgent',
        'url',
        '_edgeSwipeDetection',
        '_edgeSwipeThreshold',
        '_freeMode',
        '_autoHeight',
        'setWrapperSize',
        'virtualTranslate',
        '_effect',
        'breakpoints',
        'breakpointsBase',
        '_spaceBetween',
        '_slidesPerView',
        'maxBackfaceHiddenSlides',
        '_grid',
        '_slidesPerGroup',
        '_slidesPerGroupSkip',
        '_slidesPerGroupAuto',
        '_centeredSlides',
        '_centeredSlidesBounds',
        '_slidesOffsetBefore',
        '_slidesOffsetAfter',
        'normalizeSlideIndex',
        '_centerInsufficientSlides',
        '_watchOverflow',
        'roundLengths',
        'touchRatio',
        'touchAngle',
        'simulateTouch',
        '_shortSwipes',
        '_longSwipes',
        'longSwipesRatio',
        'longSwipesMs',
        '_followFinger',
        'allowTouchMove',
        '_threshold',
        'touchMoveStopPropagation',
        'touchStartPreventDefault',
        'touchStartForcePreventDefault',
        'touchReleaseOnEdges',
        'uniqueNavElements',
        '_resistance',
        '_resistanceRatio',
        '_watchSlidesProgress',
        '_grabCursor',
        'preventClicks',
        'preventClicksPropagation',
        '_slideToClickedSlide',
        '_loop',
        'loopAdditionalSlides',
        'loopAddBlankSlides',
        'loopPreventsSliding',
        '_rewind',
        '_allowSlidePrev',
        '_allowSlideNext',
        '_swipeHandler',
        '_noSwiping',
        'noSwipingClass',
        'noSwipingSelector',
        'passiveListeners',
        'containerModifierClass',
        'slideClass',
        'slideActiveClass',
        'slideVisibleClass',
        'slideFullyVisibleClass',
        'slideNextClass',
        'slidePrevClass',
        'slideBlankClass',
        'wrapperClass',
        'lazyPreloaderClass',
        'lazyPreloadPrevNext',
        'runCallbacksOnInit',
        'observer',
        'observeParents',
        'observeSlideChildren',
        'a11y',
        '_autoplay',
        '_controller',
        'coverflowEffect',
        'cubeEffect',
        'fadeEffect',
        'flipEffect',
        'creativeEffect',
        'cardsEffect',
        'hashNavigation',
        'history',
        'keyboard',
        'mousewheel',
        '_navigation',
        '_pagination',
        'parallax',
        '_scrollbar',
        '_thumbs',
        'virtual',
        'zoom',
        'control',
      ];
      function Ht(e) {
        return (
          'object' === typeof e &&
          null !== e &&
          e.constructor &&
          'Object' === Object.prototype.toString.call(e).slice(8, -1) &&
          !e.__swiper__
        );
      }
      function Ut(e, t) {
        const n = ['__proto__', 'constructor', 'prototype'];
        Object.keys(t)
          .filter(e => n.indexOf(e) < 0)
          .forEach(n => {
            'undefined' === typeof e[n]
              ? (e[n] = t[n])
              : Ht(t[n]) && Ht(e[n]) && Object.keys(t[n]).length > 0
              ? t[n].__swiper__
                ? (e[n] = t[n])
                : Ut(e[n], t[n])
              : (e[n] = t[n]);
          });
      }
      function Gt(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            'undefined' === typeof e.navigation.nextEl &&
            'undefined' === typeof e.navigation.prevEl
        );
      }
      function Vt(e) {
        return (
          void 0 === e && (e = {}),
          e.pagination && 'undefined' === typeof e.pagination.el
        );
      }
      function Wt(e) {
        return (
          void 0 === e && (e = {}),
          e.scrollbar && 'undefined' === typeof e.scrollbar.el
        );
      }
      function Qt(e) {
        void 0 === e && (e = '');
        const t = e
            .split(' ')
            .map(e => e.trim())
            .filter(e => !!e),
          n = [];
        return (
          t.forEach(e => {
            n.indexOf(e) < 0 && n.push(e);
          }),
          n.join(' ')
        );
      }
      function qt(e) {
        return (
          void 0 === e && (e = ''),
          e
            ? e.includes('swiper-wrapper')
              ? e
              : 'swiper-wrapper '.concat(e)
            : 'swiper-wrapper'
        );
      }
      function Yt() {
        return (
          (Yt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Yt.apply(this, arguments)
        );
      }
      function Kt(e) {
        return (
          e.type &&
          e.type.displayName &&
          e.type.displayName.includes('SwiperSlide')
        );
      }
      function Jt(t) {
        const n = [];
        return (
          e.Children.toArray(t).forEach(e => {
            Kt(e)
              ? n.push(e)
              : e.props &&
                e.props.children &&
                Jt(e.props.children).forEach(e => n.push(e));
          }),
          n
        );
      }
      function Xt(t) {
        const n = [],
          r = {
            'container-start': [],
            'container-end': [],
            'wrapper-start': [],
            'wrapper-end': [],
          };
        return (
          e.Children.toArray(t).forEach(e => {
            if (Kt(e)) n.push(e);
            else if (e.props && e.props.slot && r[e.props.slot])
              r[e.props.slot].push(e);
            else if (e.props && e.props.children) {
              const t = Jt(e.props.children);
              t.length > 0
                ? t.forEach(e => n.push(e))
                : r['container-end'].push(e);
            } else r['container-end'].push(e);
          }),
          { slides: n, slots: r }
        );
      }
      function Zt(t, n) {
        return 'undefined' === typeof window
          ? (0, e.useEffect)(t, n)
          : (0, e.useLayoutEffect)(t, n);
      }
      const $t = (0, e.createContext)(null),
        en = (0, e.createContext)(null),
        tn = (0, e.forwardRef)(function (t, n) {
          let {
              className: r,
              tag: a = 'div',
              wrapperTag: l = 'div',
              children: i,
              onSwiper: o,
              ...s
            } = void 0 === t ? {} : t,
            u = !1;
          const [c, d] = (0, e.useState)('swiper'),
            [f, p] = (0, e.useState)(null),
            [h, m] = (0, e.useState)(!1),
            g = (0, e.useRef)(!1),
            v = (0, e.useRef)(null),
            b = (0, e.useRef)(null),
            y = (0, e.useRef)(null),
            w = (0, e.useRef)(null),
            S = (0, e.useRef)(null),
            x = (0, e.useRef)(null),
            C = (0, e.useRef)(null),
            k = (0, e.useRef)(null),
            {
              params: E,
              passedParams: T,
              rest: P,
              events: O,
            } = (function (e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = !0);
              const n = { on: {} },
                r = {},
                a = {};
              Ut(n, Nt), (n._emitClasses = !0), (n.init = !1);
              const l = {},
                i = Ft.map(e => e.replace(/_/, '')),
                o = Object.assign({}, e);
              return (
                Object.keys(o).forEach(o => {
                  'undefined' !== typeof e[o] &&
                    (i.indexOf(o) >= 0
                      ? Ht(e[o])
                        ? ((n[o] = {}),
                          (a[o] = {}),
                          Ut(n[o], e[o]),
                          Ut(a[o], e[o]))
                        : ((n[o] = e[o]), (a[o] = e[o]))
                      : 0 === o.search(/on[A-Z]/) && 'function' === typeof e[o]
                      ? t
                        ? (r[
                            ''.concat(o[2].toLowerCase()).concat(o.substr(3))
                          ] = e[o])
                        : (n.on[
                            ''.concat(o[2].toLowerCase()).concat(o.substr(3))
                          ] = e[o])
                      : (l[o] = e[o]));
                }),
                ['navigation', 'pagination', 'scrollbar'].forEach(e => {
                  !0 === n[e] && (n[e] = {}), !1 === n[e] && delete n[e];
                }),
                { params: n, passedParams: a, rest: l, events: r }
              );
            })(s),
            { slides: M, slots: z } = Xt(i),
            L = () => {
              m(!h);
            };
          Object.assign(E.on, {
            _containerClasses(e, t) {
              d(t);
            },
          });
          const _ = () => {
            Object.assign(E.on, O), (u = !0);
            const e = { ...E };
            if (
              (delete e.wrapperClass,
              (b.current = new Dt(e)),
              b.current.virtual && b.current.params.virtual.enabled)
            ) {
              b.current.virtual.slides = M;
              const e = {
                cache: !1,
                slides: M,
                renderExternal: p,
                renderExternalUpdate: !1,
              };
              Ut(b.current.params.virtual, e),
                Ut(b.current.originalParams.virtual, e);
            }
          };
          v.current || _(), b.current && b.current.on('_beforeBreakpoint', L);
          return (
            (0, e.useEffect)(() => () => {
              b.current && b.current.off('_beforeBreakpoint', L);
            }),
            (0, e.useEffect)(() => {
              !g.current &&
                b.current &&
                (b.current.emitSlidesClasses(), (g.current = !0));
            }),
            Zt(() => {
              if ((n && (n.current = v.current), v.current))
                return (
                  b.current.destroyed && _(),
                  (function (e, t) {
                    let {
                      el: n,
                      nextEl: r,
                      prevEl: a,
                      paginationEl: l,
                      scrollbarEl: i,
                      swiper: o,
                    } = e;
                    Gt(t) &&
                      r &&
                      a &&
                      ((o.params.navigation.nextEl = r),
                      (o.originalParams.navigation.nextEl = r),
                      (o.params.navigation.prevEl = a),
                      (o.originalParams.navigation.prevEl = a)),
                      Vt(t) &&
                        l &&
                        ((o.params.pagination.el = l),
                        (o.originalParams.pagination.el = l)),
                      Wt(t) &&
                        i &&
                        ((o.params.scrollbar.el = i),
                        (o.originalParams.scrollbar.el = i)),
                      o.init(n);
                  })(
                    {
                      el: v.current,
                      nextEl: S.current,
                      prevEl: x.current,
                      paginationEl: C.current,
                      scrollbarEl: k.current,
                      swiper: b.current,
                    },
                    E,
                  ),
                  o && !b.current.destroyed && o(b.current),
                  () => {
                    b.current &&
                      !b.current.destroyed &&
                      b.current.destroy(!0, !1);
                  }
                );
            }, []),
            Zt(() => {
              !u &&
                O &&
                b.current &&
                Object.keys(O).forEach(e => {
                  b.current.on(e, O[e]);
                });
              const e = (function (e, t, n, r, a) {
                const l = [];
                if (!t) return l;
                const i = e => {
                  l.indexOf(e) < 0 && l.push(e);
                };
                if (n && r) {
                  const e = r.map(a),
                    t = n.map(a);
                  e.join('') !== t.join('') && i('children'),
                    r.length !== n.length && i('children');
                }
                return (
                  Ft.filter(e => '_' === e[0])
                    .map(e => e.replace(/_/, ''))
                    .forEach(n => {
                      if (n in e && n in t)
                        if (Ht(e[n]) && Ht(t[n])) {
                          const r = Object.keys(e[n]),
                            a = Object.keys(t[n]);
                          r.length !== a.length
                            ? i(n)
                            : (r.forEach(r => {
                                e[n][r] !== t[n][r] && i(n);
                              }),
                              a.forEach(r => {
                                e[n][r] !== t[n][r] && i(n);
                              }));
                        } else e[n] !== t[n] && i(n);
                    }),
                  l
                );
              })(T, y.current, M, w.current, e => e.key);
              return (
                (y.current = T),
                (w.current = M),
                e.length &&
                  b.current &&
                  !b.current.destroyed &&
                  (function (e) {
                    let {
                      swiper: t,
                      slides: n,
                      passedParams: r,
                      changedParams: a,
                      nextEl: l,
                      prevEl: i,
                      scrollbarEl: o,
                      paginationEl: s,
                    } = e;
                    const u = a.filter(
                        e =>
                          'children' !== e &&
                          'direction' !== e &&
                          'wrapperClass' !== e,
                      ),
                      {
                        params: c,
                        pagination: d,
                        navigation: f,
                        scrollbar: p,
                        virtual: h,
                        thumbs: m,
                      } = t;
                    let g, v, b, y, w, S, x, C;
                    a.includes('thumbs') &&
                      r.thumbs &&
                      r.thumbs.swiper &&
                      c.thumbs &&
                      !c.thumbs.swiper &&
                      (g = !0),
                      a.includes('controller') &&
                        r.controller &&
                        r.controller.control &&
                        c.controller &&
                        !c.controller.control &&
                        (v = !0),
                      a.includes('pagination') &&
                        r.pagination &&
                        (r.pagination.el || s) &&
                        (c.pagination || !1 === c.pagination) &&
                        d &&
                        !d.el &&
                        (b = !0),
                      a.includes('scrollbar') &&
                        r.scrollbar &&
                        (r.scrollbar.el || o) &&
                        (c.scrollbar || !1 === c.scrollbar) &&
                        p &&
                        !p.el &&
                        (y = !0),
                      a.includes('navigation') &&
                        r.navigation &&
                        (r.navigation.prevEl || i) &&
                        (r.navigation.nextEl || l) &&
                        (c.navigation || !1 === c.navigation) &&
                        f &&
                        !f.prevEl &&
                        !f.nextEl &&
                        (w = !0);
                    const k = e => {
                      t[e] &&
                        (t[e].destroy(),
                        'navigation' === e
                          ? (t.isElement &&
                              (t[e].prevEl.remove(), t[e].nextEl.remove()),
                            (c[e].prevEl = void 0),
                            (c[e].nextEl = void 0),
                            (t[e].prevEl = void 0),
                            (t[e].nextEl = void 0))
                          : (t.isElement && t[e].el.remove(),
                            (c[e].el = void 0),
                            (t[e].el = void 0)));
                    };
                    a.includes('loop') &&
                      t.isElement &&
                      (c.loop && !r.loop
                        ? (S = !0)
                        : !c.loop && r.loop
                        ? (x = !0)
                        : (C = !0)),
                      u.forEach(e => {
                        if (Ht(c[e]) && Ht(r[e]))
                          Object.assign(c[e], r[e]),
                            ('navigation' !== e &&
                              'pagination' !== e &&
                              'scrollbar' !== e) ||
                              !('enabled' in r[e]) ||
                              r[e].enabled ||
                              k(e);
                        else {
                          const t = r[e];
                          (!0 !== t && !1 !== t) ||
                          ('navigation' !== e &&
                            'pagination' !== e &&
                            'scrollbar' !== e)
                            ? (c[e] = r[e])
                            : !1 === t && k(e);
                        }
                      }),
                      u.includes('controller') &&
                        !v &&
                        t.controller &&
                        t.controller.control &&
                        c.controller &&
                        c.controller.control &&
                        (t.controller.control = c.controller.control),
                      a.includes('children') && n && h && c.virtual.enabled
                        ? ((h.slides = n), h.update(!0))
                        : a.includes('virtual') &&
                          h &&
                          c.virtual.enabled &&
                          (n && (h.slides = n), h.update(!0)),
                      a.includes('children') && n && c.loop && (C = !0),
                      g && m.init() && m.update(!0);
                    v && (t.controller.control = c.controller.control),
                      b &&
                        (!t.isElement ||
                          (s && 'string' !== typeof s) ||
                          ((s = document.createElement('div')),
                          s.classList.add('swiper-pagination'),
                          s.part.add('pagination'),
                          t.el.appendChild(s)),
                        s && (c.pagination.el = s),
                        d.init(),
                        d.render(),
                        d.update()),
                      y &&
                        (!t.isElement ||
                          (o && 'string' !== typeof o) ||
                          ((o = document.createElement('div')),
                          o.classList.add('swiper-scrollbar'),
                          o.part.add('scrollbar'),
                          t.el.appendChild(o)),
                        o && (c.scrollbar.el = o),
                        p.init(),
                        p.updateSize(),
                        p.setTranslate()),
                      w &&
                        (t.isElement &&
                          ((l && 'string' !== typeof l) ||
                            ((l = document.createElement('div')),
                            l.classList.add('swiper-button-next'),
                            (l.innerHTML = t.hostEl.constructor.nextButtonSvg),
                            l.part.add('button-next'),
                            t.el.appendChild(l)),
                          (i && 'string' !== typeof i) ||
                            ((i = document.createElement('div')),
                            i.classList.add('swiper-button-prev'),
                            (i.innerHTML = t.hostEl.constructor.prevButtonSvg),
                            i.part.add('button-prev'),
                            t.el.appendChild(i))),
                        l && (c.navigation.nextEl = l),
                        i && (c.navigation.prevEl = i),
                        f.init(),
                        f.update()),
                      a.includes('allowSlideNext') &&
                        (t.allowSlideNext = r.allowSlideNext),
                      a.includes('allowSlidePrev') &&
                        (t.allowSlidePrev = r.allowSlidePrev),
                      a.includes('direction') &&
                        t.changeDirection(r.direction, !1),
                      (S || C) && t.loopDestroy(),
                      (x || C) && t.loopCreate(),
                      t.update();
                  })({
                    swiper: b.current,
                    slides: M,
                    passedParams: T,
                    changedParams: e,
                    nextEl: S.current,
                    prevEl: x.current,
                    scrollbarEl: k.current,
                    paginationEl: C.current,
                  }),
                () => {
                  O &&
                    b.current &&
                    Object.keys(O).forEach(e => {
                      b.current.off(e, O[e]);
                    });
                }
              );
            }),
            Zt(() => {
              (e => {
                !e ||
                  e.destroyed ||
                  !e.params.virtual ||
                  (e.params.virtual && !e.params.virtual.enabled) ||
                  (e.updateSlides(),
                  e.updateProgress(),
                  e.updateSlidesClasses(),
                  e.parallax &&
                    e.params.parallax &&
                    e.params.parallax.enabled &&
                    e.parallax.setTranslate());
              })(b.current);
            }, [f]),
            e.createElement(
              a,
              Yt(
                {
                  ref: v,
                  className: Qt(''.concat(c).concat(r ? ' '.concat(r) : '')),
                },
                P,
              ),
              e.createElement(
                en.Provider,
                { value: b.current },
                z['container-start'],
                e.createElement(
                  l,
                  { className: qt(E.wrapperClass) },
                  z['wrapper-start'],
                  E.virtual
                    ? (function (t, n, r) {
                        if (!r) return null;
                        const a = e => {
                            let t = e;
                            return (
                              e < 0
                                ? (t = n.length + e)
                                : t >= n.length && (t -= n.length),
                              t
                            );
                          },
                          l = t.isHorizontal()
                            ? {
                                [t.rtlTranslate ? 'right' : 'left']: ''.concat(
                                  r.offset,
                                  'px',
                                ),
                              }
                            : { top: ''.concat(r.offset, 'px') },
                          { from: i, to: o } = r,
                          s = t.params.loop ? -n.length : 0,
                          u = t.params.loop ? 2 * n.length : n.length,
                          c = [];
                        for (let e = s; e < u; e += 1)
                          e >= i && e <= o && c.push(n[a(e)]);
                        return c.map((n, r) =>
                          e.cloneElement(n, {
                            swiper: t,
                            style: l,
                            key:
                              n.props.virtualIndex ||
                              n.key ||
                              'slide-'.concat(r),
                          }),
                        );
                      })(b.current, M, f)
                    : M.map((t, n) =>
                        e.cloneElement(t, {
                          swiper: b.current,
                          swiperSlideIndex: n,
                        }),
                      ),
                  z['wrapper-end'],
                ),
                Gt(E) &&
                  e.createElement(
                    e.Fragment,
                    null,
                    e.createElement('div', {
                      ref: x,
                      className: 'swiper-button-prev',
                    }),
                    e.createElement('div', {
                      ref: S,
                      className: 'swiper-button-next',
                    }),
                  ),
                Wt(E) &&
                  e.createElement('div', {
                    ref: k,
                    className: 'swiper-scrollbar',
                  }),
                Vt(E) &&
                  e.createElement('div', {
                    ref: C,
                    className: 'swiper-pagination',
                  }),
                z['container-end'],
              ),
            )
          );
        });
      tn.displayName = 'Swiper';
      const nn = (0, e.forwardRef)(function (t, n) {
        let {
          tag: r = 'div',
          children: a,
          className: l = '',
          swiper: i,
          zoom: o,
          lazy: s,
          virtualIndex: u,
          swiperSlideIndex: c,
          ...d
        } = void 0 === t ? {} : t;
        const f = (0, e.useRef)(null),
          [p, h] = (0, e.useState)('swiper-slide'),
          [m, g] = (0, e.useState)(!1);
        function v(e, t, n) {
          t === f.current && h(n);
        }
        Zt(() => {
          if (
            ('undefined' !== typeof c && (f.current.swiperSlideIndex = c),
            n && (n.current = f.current),
            f.current && i)
          ) {
            if (!i.destroyed)
              return (
                i.on('_slideClass', v),
                () => {
                  i && i.off('_slideClass', v);
                }
              );
            'swiper-slide' !== p && h('swiper-slide');
          }
        }),
          Zt(() => {
            i && f.current && !i.destroyed && h(i.getSlideClasses(f.current));
          }, [i]);
        const b = {
            isActive: p.indexOf('swiper-slide-active') >= 0,
            isVisible: p.indexOf('swiper-slide-visible') >= 0,
            isPrev: p.indexOf('swiper-slide-prev') >= 0,
            isNext: p.indexOf('swiper-slide-next') >= 0,
          },
          y = () => ('function' === typeof a ? a(b) : a);
        return e.createElement(
          r,
          Yt(
            {
              ref: f,
              className: Qt(''.concat(p).concat(l ? ' '.concat(l) : '')),
              'data-swiper-slide-index': u,
              onLoad: () => {
                g(!0);
              },
            },
            d,
          ),
          o &&
            e.createElement(
              $t.Provider,
              { value: b },
              e.createElement(
                'div',
                {
                  className: 'swiper-zoom-container',
                  'data-swiper-zoom': 'number' === typeof o ? o : void 0,
                },
                y(),
                s &&
                  !m &&
                  e.createElement('div', {
                    className: 'swiper-lazy-preloader',
                  }),
              ),
            ),
          !o &&
            e.createElement(
              $t.Provider,
              { value: b },
              y(),
              s &&
                !m &&
                e.createElement('div', { className: 'swiper-lazy-preloader' }),
            ),
        );
      });
      function rn(e, t, n, r) {
        return (
          e.params.createElements &&
            Object.keys(r).forEach(a => {
              if (!n[a] && !0 === n.auto) {
                let l = Ye(e.el, '.'.concat(r[a]))[0];
                l ||
                  ((l = Je('div', r[a])), (l.className = r[a]), e.el.append(l)),
                  (n[a] = l),
                  (t[a] = l);
              }
            }),
          n
        );
      }
      function an(e) {
        let { swiper: t, extendParams: n, on: r, emit: a } = e;
        function l(e) {
          let n;
          return e &&
            'string' === typeof e &&
            t.isElement &&
            ((n = t.el.querySelector(e)), n)
            ? n
            : (e &&
                ('string' === typeof e &&
                  (n = [...document.querySelectorAll(e)]),
                t.params.uniqueNavElements &&
                'string' === typeof e &&
                n &&
                n.length > 1 &&
                1 === t.el.querySelectorAll(e).length
                  ? (n = t.el.querySelector(e))
                  : n && 1 === n.length && (n = n[0])),
              e && !n ? e : n);
        }
        function i(e, n) {
          const r = t.params.navigation;
          (e = tt(e)).forEach(e => {
            e &&
              (e.classList[n ? 'add' : 'remove'](...r.disabledClass.split(' ')),
              'BUTTON' === e.tagName && (e.disabled = n),
              t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? 'add' : 'remove'](r.lockClass));
          });
        }
        function o() {
          const { nextEl: e, prevEl: n } = t.navigation;
          if (t.params.loop) return i(n, !1), void i(e, !1);
          i(n, t.isBeginning && !t.params.rewind),
            i(e, t.isEnd && !t.params.rewind);
        }
        function s(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              (t.slidePrev(), a('navigationPrev'));
        }
        function u(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) &&
              (t.slideNext(), a('navigationNext'));
        }
        function c() {
          const e = t.params.navigation;
          if (
            ((t.params.navigation = rn(
              t,
              t.originalParams.navigation,
              t.params.navigation,
              { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' },
            )),
            !e.nextEl && !e.prevEl)
          )
            return;
          let n = l(e.nextEl),
            r = l(e.prevEl);
          Object.assign(t.navigation, { nextEl: n, prevEl: r }),
            (n = tt(n)),
            (r = tt(r));
          const a = (n, r) => {
            n && n.addEventListener('click', 'next' === r ? u : s),
              !t.enabled && n && n.classList.add(...e.lockClass.split(' '));
          };
          n.forEach(e => a(e, 'next')), r.forEach(e => a(e, 'prev'));
        }
        function d() {
          let { nextEl: e, prevEl: n } = t.navigation;
          (e = tt(e)), (n = tt(n));
          const r = (e, n) => {
            e.removeEventListener('click', 'next' === n ? u : s),
              e.classList.remove(
                ...t.params.navigation.disabledClass.split(' '),
              );
          };
          e.forEach(e => r(e, 'next')), n.forEach(e => r(e, 'prev'));
        }
        n({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock',
            navigationDisabledClass: 'swiper-navigation-disabled',
          },
        }),
          (t.navigation = { nextEl: null, prevEl: null }),
          r('init', () => {
            !1 === t.params.navigation.enabled ? f() : (c(), o());
          }),
          r('toEdge fromEdge lock unlock', () => {
            o();
          }),
          r('destroy', () => {
            d();
          }),
          r('enable disable', () => {
            let { nextEl: e, prevEl: n } = t.navigation;
            (e = tt(e)),
              (n = tt(n)),
              t.enabled
                ? o()
                : [...e, ...n]
                    .filter(e => !!e)
                    .forEach(e =>
                      e.classList.add(t.params.navigation.lockClass),
                    );
          }),
          r('click', (e, n) => {
            let { nextEl: r, prevEl: l } = t.navigation;
            (r = tt(r)), (l = tt(l));
            const i = n.target;
            if (
              t.params.navigation.hideOnClick &&
              !l.includes(i) &&
              !r.includes(i)
            ) {
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === i || t.pagination.el.contains(i))
              )
                return;
              let e;
              r.length
                ? (e = r[0].classList.contains(t.params.navigation.hiddenClass))
                : l.length &&
                  (e = l[0].classList.contains(
                    t.params.navigation.hiddenClass,
                  )),
                a(!0 === e ? 'navigationShow' : 'navigationHide'),
                [...r, ...l]
                  .filter(e => !!e)
                  .forEach(e =>
                    e.classList.toggle(t.params.navigation.hiddenClass),
                  );
            }
          });
        const f = () => {
          t.el.classList.add(
            ...t.params.navigation.navigationDisabledClass.split(' '),
          ),
            d();
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(
              ...t.params.navigation.navigationDisabledClass.split(' '),
            ),
              c(),
              o();
          },
          disable: f,
          update: o,
          init: c,
          destroy: d,
        });
      }
      function ln(e) {
        return (
          void 0 === e && (e = ''),
          '.'.concat(
            e
              .trim()
              .replace(/([\.:!+\/])/g, '\\$1')
              .replace(/ /g, '.'),
          )
        );
      }
      function on(e) {
        let { swiper: t, extendParams: n, on: r, emit: a } = e;
        const l = 'swiper-pagination';
        let i;
        n({
          pagination: {
            el: null,
            bulletElement: 'span',
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: 'bullets',
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: e => e,
            formatFractionTotal: e => e,
            bulletClass: ''.concat(l, '-bullet'),
            bulletActiveClass: ''.concat(l, '-bullet-active'),
            modifierClass: ''.concat(l, '-'),
            currentClass: ''.concat(l, '-current'),
            totalClass: ''.concat(l, '-total'),
            hiddenClass: ''.concat(l, '-hidden'),
            progressbarFillClass: ''.concat(l, '-progressbar-fill'),
            progressbarOppositeClass: ''.concat(l, '-progressbar-opposite'),
            clickableClass: ''.concat(l, '-clickable'),
            lockClass: ''.concat(l, '-lock'),
            horizontalClass: ''.concat(l, '-horizontal'),
            verticalClass: ''.concat(l, '-vertical'),
            paginationDisabledClass: ''.concat(l, '-disabled'),
          },
        }),
          (t.pagination = { el: null, bullets: [] });
        let o = 0;
        function s() {
          return (
            !t.params.pagination.el ||
            !t.pagination.el ||
            (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
          );
        }
        function u(e, n) {
          const { bulletActiveClass: r } = t.params.pagination;
          e &&
            (e =
              e[
                ''.concat('prev' === n ? 'previous' : 'next', 'ElementSibling')
              ]) &&
            (e.classList.add(''.concat(r, '-').concat(n)),
            (e =
              e[
                ''.concat('prev' === n ? 'previous' : 'next', 'ElementSibling')
              ]) &&
              e.classList.add(''.concat(r, '-').concat(n, '-').concat(n)));
        }
        function c(e) {
          const n = e.target.closest(ln(t.params.pagination.bulletClass));
          if (!n) return;
          e.preventDefault();
          const r = Ze(n) * t.params.slidesPerGroup;
          if (t.params.loop) {
            if (t.realIndex === r) return;
            t.slideToLoop(r);
          } else t.slideTo(r);
        }
        function d() {
          const e = t.rtl,
            n = t.params.pagination;
          if (s()) return;
          let r,
            l,
            c = t.pagination.el;
          c = tt(c);
          const d =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            f = t.params.loop
              ? Math.ceil(d / t.params.slidesPerGroup)
              : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((l = t.previousRealIndex || 0),
                (r =
                  t.params.slidesPerGroup > 1
                    ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                    : t.realIndex))
              : 'undefined' !== typeof t.snapIndex
              ? ((r = t.snapIndex), (l = t.previousSnapIndex))
              : ((l = t.previousIndex || 0), (r = t.activeIndex || 0)),
            'bullets' === n.type &&
              t.pagination.bullets &&
              t.pagination.bullets.length > 0)
          ) {
            const a = t.pagination.bullets;
            let s, d, f;
            if (
              (n.dynamicBullets &&
                ((i = et(a[0], t.isHorizontal() ? 'width' : 'height', !0)),
                c.forEach(e => {
                  e.style[t.isHorizontal() ? 'width' : 'height'] = ''.concat(
                    i * (n.dynamicMainBullets + 4),
                    'px',
                  );
                }),
                n.dynamicMainBullets > 1 &&
                  void 0 !== l &&
                  ((o += r - (l || 0)),
                  o > n.dynamicMainBullets - 1
                    ? (o = n.dynamicMainBullets - 1)
                    : o < 0 && (o = 0)),
                (s = Math.max(r - o, 0)),
                (d = s + (Math.min(a.length, n.dynamicMainBullets) - 1)),
                (f = (d + s) / 2)),
              a.forEach(e => {
                const t = [
                  ...[
                    '',
                    '-next',
                    '-next-next',
                    '-prev',
                    '-prev-prev',
                    '-main',
                  ].map(e => ''.concat(n.bulletActiveClass).concat(e)),
                ]
                  .map(e =>
                    'string' === typeof e && e.includes(' ') ? e.split(' ') : e,
                  )
                  .flat();
                e.classList.remove(...t);
              }),
              c.length > 1)
            )
              a.forEach(e => {
                const a = Ze(e);
                a === r
                  ? e.classList.add(...n.bulletActiveClass.split(' '))
                  : t.isElement && e.setAttribute('part', 'bullet'),
                  n.dynamicBullets &&
                    (a >= s &&
                      a <= d &&
                      e.classList.add(
                        ...''.concat(n.bulletActiveClass, '-main').split(' '),
                      ),
                    a === s && u(e, 'prev'),
                    a === d && u(e, 'next'));
              });
            else {
              const e = a[r];
              if (
                (e && e.classList.add(...n.bulletActiveClass.split(' ')),
                t.isElement &&
                  a.forEach((e, t) => {
                    e.setAttribute(
                      'part',
                      t === r ? 'bullet-active' : 'bullet',
                    );
                  }),
                n.dynamicBullets)
              ) {
                const e = a[s],
                  t = a[d];
                for (let r = s; r <= d; r += 1)
                  a[r] &&
                    a[r].classList.add(
                      ...''.concat(n.bulletActiveClass, '-main').split(' '),
                    );
                u(e, 'prev'), u(t, 'next');
              }
            }
            if (n.dynamicBullets) {
              const r = Math.min(a.length, n.dynamicMainBullets + 4),
                l = (i * r - i) / 2 - f * i,
                o = e ? 'right' : 'left';
              a.forEach(e => {
                e.style[t.isHorizontal() ? o : 'top'] = ''.concat(l, 'px');
              });
            }
          }
          c.forEach((e, l) => {
            if (
              ('fraction' === n.type &&
                (e.querySelectorAll(ln(n.currentClass)).forEach(e => {
                  e.textContent = n.formatFractionCurrent(r + 1);
                }),
                e.querySelectorAll(ln(n.totalClass)).forEach(e => {
                  e.textContent = n.formatFractionTotal(f);
                })),
              'progressbar' === n.type)
            ) {
              let a;
              a = n.progressbarOpposite
                ? t.isHorizontal()
                  ? 'vertical'
                  : 'horizontal'
                : t.isHorizontal()
                ? 'horizontal'
                : 'vertical';
              const l = (r + 1) / f;
              let i = 1,
                o = 1;
              'horizontal' === a ? (i = l) : (o = l),
                e.querySelectorAll(ln(n.progressbarFillClass)).forEach(e => {
                  (e.style.transform = 'translate3d(0,0,0) scaleX('
                    .concat(i, ') scaleY(')
                    .concat(o, ')')),
                    (e.style.transitionDuration = ''.concat(
                      t.params.speed,
                      'ms',
                    ));
                });
            }
            'custom' === n.type && n.renderCustom
              ? ((e.innerHTML = n.renderCustom(t, r + 1, f)),
                0 === l && a('paginationRender', e))
              : (0 === l && a('paginationRender', e), a('paginationUpdate', e)),
              t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? 'add' : 'remove'](n.lockClass);
          });
        }
        function f() {
          const e = t.params.pagination;
          if (s()) return;
          const n =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.grid && t.params.grid.rows > 1
              ? t.slides.length / Math.ceil(t.params.grid.rows)
              : t.slides.length;
          let r = t.pagination.el;
          r = tt(r);
          let l = '';
          if ('bullets' === e.type) {
            let r = t.params.loop
              ? Math.ceil(n / t.params.slidesPerGroup)
              : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && r > n && (r = n);
            for (let n = 0; n < r; n += 1)
              e.renderBullet
                ? (l += e.renderBullet.call(t, n, e.bulletClass))
                : (l += '<'
                    .concat(e.bulletElement, ' ')
                    .concat(t.isElement ? 'part="bullet"' : '', ' class="')
                    .concat(e.bulletClass, '"></')
                    .concat(e.bulletElement, '>'));
          }
          'fraction' === e.type &&
            (l = e.renderFraction
              ? e.renderFraction.call(t, e.currentClass, e.totalClass)
              : '<span class="'.concat(e.currentClass, '"></span>') +
                ' / ' +
                '<span class="'.concat(e.totalClass, '"></span>')),
            'progressbar' === e.type &&
              (l = e.renderProgressbar
                ? e.renderProgressbar.call(t, e.progressbarFillClass)
                : '<span class="'.concat(e.progressbarFillClass, '"></span>')),
            (t.pagination.bullets = []),
            r.forEach(n => {
              'custom' !== e.type && (n.innerHTML = l || ''),
                'bullets' === e.type &&
                  t.pagination.bullets.push(
                    ...n.querySelectorAll(ln(e.bulletClass)),
                  );
            }),
            'custom' !== e.type && a('paginationRender', r[0]);
        }
        function p() {
          t.params.pagination = rn(
            t,
            t.originalParams.pagination,
            t.params.pagination,
            { el: 'swiper-pagination' },
          );
          const e = t.params.pagination;
          if (!e.el) return;
          let n;
          'string' === typeof e.el &&
            t.isElement &&
            (n = t.el.querySelector(e.el)),
            n ||
              'string' !== typeof e.el ||
              (n = [...document.querySelectorAll(e.el)]),
            n || (n = e.el),
            n &&
              0 !== n.length &&
              (t.params.uniqueNavElements &&
                'string' === typeof e.el &&
                Array.isArray(n) &&
                n.length > 1 &&
                ((n = [...t.el.querySelectorAll(e.el)]),
                n.length > 1 &&
                  (n = n.filter(e => $e(e, '.swiper')[0] === t.el)[0])),
              Array.isArray(n) && 1 === n.length && (n = n[0]),
              Object.assign(t.pagination, { el: n }),
              (n = tt(n)),
              n.forEach(n => {
                'bullets' === e.type &&
                  e.clickable &&
                  n.classList.add(...(e.clickableClass || '').split(' ')),
                  n.classList.add(e.modifierClass + e.type),
                  n.classList.add(
                    t.isHorizontal() ? e.horizontalClass : e.verticalClass,
                  ),
                  'bullets' === e.type &&
                    e.dynamicBullets &&
                    (n.classList.add(
                      ''.concat(e.modifierClass).concat(e.type, '-dynamic'),
                    ),
                    (o = 0),
                    e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                  'progressbar' === e.type &&
                    e.progressbarOpposite &&
                    n.classList.add(e.progressbarOppositeClass),
                  e.clickable && n.addEventListener('click', c),
                  t.enabled || n.classList.add(e.lockClass);
              }));
        }
        function h() {
          const e = t.params.pagination;
          if (s()) return;
          let n = t.pagination.el;
          n &&
            ((n = tt(n)),
            n.forEach(n => {
              n.classList.remove(e.hiddenClass),
                n.classList.remove(e.modifierClass + e.type),
                n.classList.remove(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass,
                ),
                e.clickable &&
                  (n.classList.remove(...(e.clickableClass || '').split(' ')),
                  n.removeEventListener('click', c));
            })),
            t.pagination.bullets &&
              t.pagination.bullets.forEach(t =>
                t.classList.remove(...e.bulletActiveClass.split(' ')),
              );
        }
        r('changeDirection', () => {
          if (!t.pagination || !t.pagination.el) return;
          const e = t.params.pagination;
          let { el: n } = t.pagination;
          (n = tt(n)),
            n.forEach(n => {
              n.classList.remove(e.horizontalClass, e.verticalClass),
                n.classList.add(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass,
                );
            });
        }),
          r('init', () => {
            !1 === t.params.pagination.enabled ? m() : (p(), f(), d());
          }),
          r('activeIndexChange', () => {
            'undefined' === typeof t.snapIndex && d();
          }),
          r('snapIndexChange', () => {
            d();
          }),
          r('snapGridLengthChange', () => {
            f(), d();
          }),
          r('destroy', () => {
            h();
          }),
          r('enable disable', () => {
            let { el: e } = t.pagination;
            e &&
              ((e = tt(e)),
              e.forEach(e =>
                e.classList[t.enabled ? 'remove' : 'add'](
                  t.params.pagination.lockClass,
                ),
              ));
          }),
          r('lock unlock', () => {
            d();
          }),
          r('click', (e, n) => {
            const r = n.target,
              l = tt(t.pagination.el);
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              l &&
              l.length > 0 &&
              !r.classList.contains(t.params.pagination.bulletClass)
            ) {
              if (
                t.navigation &&
                ((t.navigation.nextEl && r === t.navigation.nextEl) ||
                  (t.navigation.prevEl && r === t.navigation.prevEl))
              )
                return;
              const e = l[0].classList.contains(
                t.params.pagination.hiddenClass,
              );
              a(!0 === e ? 'paginationShow' : 'paginationHide'),
                l.forEach(e =>
                  e.classList.toggle(t.params.pagination.hiddenClass),
                );
            }
          });
        const m = () => {
          t.el.classList.add(t.params.pagination.paginationDisabledClass);
          let { el: e } = t.pagination;
          e &&
            ((e = tt(e)),
            e.forEach(e =>
              e.classList.add(t.params.pagination.paginationDisabledClass),
            )),
            h();
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass);
            let { el: e } = t.pagination;
            e &&
              ((e = tt(e)),
              e.forEach(e =>
                e.classList.remove(t.params.pagination.paginationDisabledClass),
              )),
              p(),
              f(),
              d();
          },
          disable: m,
          render: f,
          update: d,
          init: p,
          destroy: h,
        });
      }
      function sn(e) {
        let { swiper: t, extendParams: n, on: r, emit: a } = e;
        const l = Re();
        let i,
          o,
          s,
          u,
          c = !1,
          d = null,
          f = null;
        function p() {
          if (!t.params.scrollbar.el || !t.scrollbar.el) return;
          const { scrollbar: e, rtlTranslate: n } = t,
            { dragEl: r, el: a } = e,
            l = t.params.scrollbar,
            i = t.params.loop ? t.progressLoop : t.progress;
          let u = o,
            c = (s - o) * i;
          n
            ? ((c = -c),
              c > 0 ? ((u = o - c), (c = 0)) : -c + o > s && (u = s + c))
            : c < 0
            ? ((u = o + c), (c = 0))
            : c + o > s && (u = s - c),
            t.isHorizontal()
              ? ((r.style.transform = 'translate3d('.concat(c, 'px, 0, 0)')),
                (r.style.width = ''.concat(u, 'px')))
              : ((r.style.transform = 'translate3d(0px, '.concat(c, 'px, 0)')),
                (r.style.height = ''.concat(u, 'px'))),
            l.hide &&
              (clearTimeout(d),
              (a.style.opacity = 1),
              (d = setTimeout(() => {
                (a.style.opacity = 0), (a.style.transitionDuration = '400ms');
              }, 1e3)));
        }
        function h() {
          if (!t.params.scrollbar.el || !t.scrollbar.el) return;
          const { scrollbar: e } = t,
            { dragEl: n, el: r } = e;
          (n.style.width = ''),
            (n.style.height = ''),
            (s = t.isHorizontal() ? r.offsetWidth : r.offsetHeight),
            (u =
              t.size /
              (t.virtualSize +
                t.params.slidesOffsetBefore -
                (t.params.centeredSlides ? t.snapGrid[0] : 0))),
            (o =
              'auto' === t.params.scrollbar.dragSize
                ? s * u
                : parseInt(t.params.scrollbar.dragSize, 10)),
            t.isHorizontal()
              ? (n.style.width = ''.concat(o, 'px'))
              : (n.style.height = ''.concat(o, 'px')),
            (r.style.display = u >= 1 ? 'none' : ''),
            t.params.scrollbar.hide && (r.style.opacity = 0),
            t.params.watchOverflow &&
              t.enabled &&
              e.el.classList[t.isLocked ? 'add' : 'remove'](
                t.params.scrollbar.lockClass,
              );
        }
        function m(e) {
          return t.isHorizontal() ? e.clientX : e.clientY;
        }
        function g(e) {
          const { scrollbar: n, rtlTranslate: r } = t,
            { el: a } = n;
          let l;
          (l =
            (m(e) -
              (function (e) {
                const t = De(),
                  n = Re(),
                  r = e.getBoundingClientRect(),
                  a = n.body,
                  l = e.clientTop || a.clientTop || 0,
                  i = e.clientLeft || a.clientLeft || 0,
                  o = e === t ? t.scrollY : e.scrollTop,
                  s = e === t ? t.scrollX : e.scrollLeft;
                return { top: r.top + o - l, left: r.left + s - i };
              })(a)[t.isHorizontal() ? 'left' : 'top'] -
              (null !== i ? i : o / 2)) /
            (s - o)),
            (l = Math.max(Math.min(l, 1), 0)),
            r && (l = 1 - l);
          const u =
            t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * l;
          t.updateProgress(u),
            t.setTranslate(u),
            t.updateActiveIndex(),
            t.updateSlidesClasses();
        }
        function v(e) {
          const n = t.params.scrollbar,
            { scrollbar: r, wrapperEl: l } = t,
            { el: o, dragEl: s } = r;
          (c = !0),
            (i =
              e.target === s
                ? m(e) -
                  e.target.getBoundingClientRect()[
                    t.isHorizontal() ? 'left' : 'top'
                  ]
                : null),
            e.preventDefault(),
            e.stopPropagation(),
            (l.style.transitionDuration = '100ms'),
            (s.style.transitionDuration = '100ms'),
            g(e),
            clearTimeout(f),
            (o.style.transitionDuration = '0ms'),
            n.hide && (o.style.opacity = 1),
            t.params.cssMode &&
              (t.wrapperEl.style['scroll-snap-type'] = 'none'),
            a('scrollbarDragStart', e);
        }
        function b(e) {
          const { scrollbar: n, wrapperEl: r } = t,
            { el: l, dragEl: i } = n;
          c &&
            (e.preventDefault && e.cancelable
              ? e.preventDefault()
              : (e.returnValue = !1),
            g(e),
            (r.style.transitionDuration = '0ms'),
            (l.style.transitionDuration = '0ms'),
            (i.style.transitionDuration = '0ms'),
            a('scrollbarDragMove', e));
        }
        function y(e) {
          const n = t.params.scrollbar,
            { scrollbar: r, wrapperEl: l } = t,
            { el: i } = r;
          c &&
            ((c = !1),
            t.params.cssMode &&
              ((t.wrapperEl.style['scroll-snap-type'] = ''),
              (l.style.transitionDuration = '')),
            n.hide &&
              (clearTimeout(f),
              (f = He(() => {
                (i.style.opacity = 0), (i.style.transitionDuration = '400ms');
              }, 1e3))),
            a('scrollbarDragEnd', e),
            n.snapOnRelease && t.slideToClosest());
        }
        function w(e) {
          const { scrollbar: n, params: r } = t,
            a = n.el;
          if (!a) return;
          const i = a,
            o = !!r.passiveListeners && { passive: !1, capture: !1 },
            s = !!r.passiveListeners && { passive: !0, capture: !1 };
          if (!i) return;
          const u = 'on' === e ? 'addEventListener' : 'removeEventListener';
          i[u]('pointerdown', v, o),
            l[u]('pointermove', b, o),
            l[u]('pointerup', y, s);
        }
        function S() {
          const { scrollbar: e, el: n } = t;
          t.params.scrollbar = rn(
            t,
            t.originalParams.scrollbar,
            t.params.scrollbar,
            { el: 'swiper-scrollbar' },
          );
          const r = t.params.scrollbar;
          if (!r.el) return;
          let a, i;
          if (
            ('string' === typeof r.el &&
              t.isElement &&
              (a = t.el.querySelector(r.el)),
            a || 'string' !== typeof r.el)
          )
            a || (a = r.el);
          else if (((a = l.querySelectorAll(r.el)), !a.length)) return;
          t.params.uniqueNavElements &&
            'string' === typeof r.el &&
            a.length > 1 &&
            1 === n.querySelectorAll(r.el).length &&
            (a = n.querySelector(r.el)),
            a.length > 0 && (a = a[0]),
            a.classList.add(
              t.isHorizontal() ? r.horizontalClass : r.verticalClass,
            ),
            a &&
              ((i = a.querySelector(ln(t.params.scrollbar.dragClass))),
              i ||
                ((i = Je('div', t.params.scrollbar.dragClass)), a.append(i))),
            Object.assign(e, { el: a, dragEl: i }),
            r.draggable && t.params.scrollbar.el && t.scrollbar.el && w('on'),
            a &&
              a.classList[t.enabled ? 'remove' : 'add'](
                ...Fe(t.params.scrollbar.lockClass),
              );
        }
        function x() {
          const e = t.params.scrollbar,
            n = t.scrollbar.el;
          n &&
            n.classList.remove(
              ...Fe(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
            ),
            t.params.scrollbar.el && t.scrollbar.el && w('off');
        }
        n({
          scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag',
            scrollbarDisabledClass: 'swiper-scrollbar-disabled',
            horizontalClass: 'swiper-scrollbar-horizontal',
            verticalClass: 'swiper-scrollbar-vertical',
          },
        }),
          (t.scrollbar = { el: null, dragEl: null }),
          r('changeDirection', () => {
            if (!t.scrollbar || !t.scrollbar.el) return;
            const e = t.params.scrollbar;
            let { el: n } = t.scrollbar;
            (n = tt(n)),
              n.forEach(n => {
                n.classList.remove(e.horizontalClass, e.verticalClass),
                  n.classList.add(
                    t.isHorizontal() ? e.horizontalClass : e.verticalClass,
                  );
              });
          }),
          r('init', () => {
            !1 === t.params.scrollbar.enabled ? C() : (S(), h(), p());
          }),
          r('update resize observerUpdate lock unlock changeDirection', () => {
            h();
          }),
          r('setTranslate', () => {
            p();
          }),
          r('setTransition', (e, n) => {
            !(function (e) {
              t.params.scrollbar.el &&
                t.scrollbar.el &&
                (t.scrollbar.dragEl.style.transitionDuration = ''.concat(
                  e,
                  'ms',
                ));
            })(n);
          }),
          r('enable disable', () => {
            const { el: e } = t.scrollbar;
            e &&
              e.classList[t.enabled ? 'remove' : 'add'](
                ...Fe(t.params.scrollbar.lockClass),
              );
          }),
          r('destroy', () => {
            x();
          });
        const C = () => {
          t.el.classList.add(...Fe(t.params.scrollbar.scrollbarDisabledClass)),
            t.scrollbar.el &&
              t.scrollbar.el.classList.add(
                ...Fe(t.params.scrollbar.scrollbarDisabledClass),
              ),
            x();
        };
        Object.assign(t.scrollbar, {
          enable: () => {
            t.el.classList.remove(
              ...Fe(t.params.scrollbar.scrollbarDisabledClass),
            ),
              t.scrollbar.el &&
                t.scrollbar.el.classList.remove(
                  ...Fe(t.params.scrollbar.scrollbarDisabledClass),
                ),
              S(),
              h(),
              p();
          },
          disable: C,
          updateSize: h,
          setTranslate: p,
          init: S,
          destroy: x,
        });
      }
      function un(e) {
        let { swiper: t, extendParams: n, on: r } = e;
        n({
          a11y: {
            enabled: !0,
            notificationClass: 'swiper-notification',
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            slideLabelMessage: '{{index}} / {{slidesLength}}',
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: 'group',
            id: null,
          },
        }),
          (t.a11y = { clicked: !1 });
        let a,
          l,
          i = null,
          o = new Date().getTime();
        function s(e) {
          const t = i;
          0 !== t.length && ((t.innerHTML = ''), (t.innerHTML = e));
        }
        function u(e) {
          (e = tt(e)).forEach(e => {
            e.setAttribute('tabIndex', '0');
          });
        }
        function c(e) {
          (e = tt(e)).forEach(e => {
            e.setAttribute('tabIndex', '-1');
          });
        }
        function d(e, t) {
          (e = tt(e)).forEach(e => {
            e.setAttribute('role', t);
          });
        }
        function f(e, t) {
          (e = tt(e)).forEach(e => {
            e.setAttribute('aria-roledescription', t);
          });
        }
        function p(e, t) {
          (e = tt(e)).forEach(e => {
            e.setAttribute('aria-label', t);
          });
        }
        function h(e) {
          (e = tt(e)).forEach(e => {
            e.setAttribute('aria-disabled', !0);
          });
        }
        function m(e) {
          (e = tt(e)).forEach(e => {
            e.setAttribute('aria-disabled', !1);
          });
        }
        function g(e) {
          if (13 !== e.keyCode && 32 !== e.keyCode) return;
          const n = t.params.a11y,
            r = e.target;
          if (
            !t.pagination ||
            !t.pagination.el ||
            (r !== t.pagination.el && !t.pagination.el.contains(e.target)) ||
            e.target.matches(ln(t.params.pagination.bulletClass))
          ) {
            if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
              const e = tt(t.navigation.prevEl);
              tt(t.navigation.nextEl).includes(r) &&
                ((t.isEnd && !t.params.loop) || t.slideNext(),
                t.isEnd ? s(n.lastSlideMessage) : s(n.nextSlideMessage)),
                e.includes(r) &&
                  ((t.isBeginning && !t.params.loop) || t.slidePrev(),
                  t.isBeginning
                    ? s(n.firstSlideMessage)
                    : s(n.prevSlideMessage));
            }
            t.pagination &&
              r.matches(ln(t.params.pagination.bulletClass)) &&
              r.click();
          }
        }
        function v() {
          return (
            t.pagination && t.pagination.bullets && t.pagination.bullets.length
          );
        }
        function b() {
          return v() && t.params.pagination.clickable;
        }
        const y = (e, t, n) => {
            u(e),
              'BUTTON' !== e.tagName &&
                (d(e, 'button'), e.addEventListener('keydown', g)),
              p(e, n),
              (function (e, t) {
                (e = tt(e)).forEach(e => {
                  e.setAttribute('aria-controls', t);
                });
              })(e, t);
          },
          w = e => {
            l && l !== e.target && !l.contains(e.target) && (a = !0),
              (t.a11y.clicked = !0);
          },
          S = () => {
            (a = !1),
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  t.destroyed || (t.a11y.clicked = !1);
                });
              });
          },
          x = e => {
            o = new Date().getTime();
          },
          C = e => {
            if (t.a11y.clicked) return;
            if (new Date().getTime() - o < 100) return;
            const n = e.target.closest(
              '.'.concat(t.params.slideClass, ', swiper-slide'),
            );
            if (!n || !t.slides.includes(n)) return;
            l = n;
            const r = t.slides.indexOf(n) === t.activeIndex,
              i =
                t.params.watchSlidesProgress &&
                t.visibleSlides &&
                t.visibleSlides.includes(n);
            r ||
              i ||
              (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) ||
              (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
              requestAnimationFrame(() => {
                a || (t.slideTo(t.slides.indexOf(n), 0), (a = !1));
              }));
          },
          k = () => {
            const e = t.params.a11y;
            e.itemRoleDescriptionMessage &&
              f(t.slides, e.itemRoleDescriptionMessage),
              e.slideRole && d(t.slides, e.slideRole);
            const n = t.slides.length;
            e.slideLabelMessage &&
              t.slides.forEach((r, a) => {
                const l = t.params.loop
                  ? parseInt(r.getAttribute('data-swiper-slide-index'), 10)
                  : a;
                p(
                  r,
                  e.slideLabelMessage
                    .replace(/\{\{index\}\}/, l + 1)
                    .replace(/\{\{slidesLength\}\}/, n),
                );
              });
          },
          E = () => {
            const e = t.params.a11y;
            t.el.append(i);
            const n = t.el;
            e.containerRoleDescriptionMessage &&
              f(n, e.containerRoleDescriptionMessage),
              e.containerMessage && p(n, e.containerMessage);
            const r = t.wrapperEl,
              a =
                e.id ||
                r.getAttribute('id') ||
                'swiper-wrapper-'.concat(
                  (void 0 === (l = 16) && (l = 16),
                  'x'
                    .repeat(l)
                    .replace(/x/g, () =>
                      Math.round(16 * Math.random()).toString(16),
                    )),
                );
            var l;
            const o =
              t.params.autoplay && t.params.autoplay.enabled ? 'off' : 'polite';
            var s;
            (s = a),
              tt(r).forEach(e => {
                e.setAttribute('id', s);
              }),
              (function (e, t) {
                (e = tt(e)).forEach(e => {
                  e.setAttribute('aria-live', t);
                });
              })(r, o),
              k();
            let { nextEl: u, prevEl: c } = t.navigation ? t.navigation : {};
            if (
              ((u = tt(u)),
              (c = tt(c)),
              u && u.forEach(t => y(t, a, e.nextSlideMessage)),
              c && c.forEach(t => y(t, a, e.prevSlideMessage)),
              b())
            ) {
              tt(t.pagination.el).forEach(e => {
                e.addEventListener('keydown', g);
              });
            }
            Re().addEventListener('visibilitychange', x),
              t.el.addEventListener('focus', C, !0),
              t.el.addEventListener('focus', C, !0),
              t.el.addEventListener('pointerdown', w, !0),
              t.el.addEventListener('pointerup', S, !0);
          };
        r('beforeInit', () => {
          (i = Je('span', t.params.a11y.notificationClass)),
            i.setAttribute('aria-live', 'assertive'),
            i.setAttribute('aria-atomic', 'true');
        }),
          r('afterInit', () => {
            t.params.a11y.enabled && E();
          }),
          r(
            'slidesLengthChange snapGridLengthChange slidesGridLengthChange',
            () => {
              t.params.a11y.enabled && k();
            },
          ),
          r('fromEdge toEdge afterInit lock unlock', () => {
            t.params.a11y.enabled &&
              (function () {
                if (t.params.loop || t.params.rewind || !t.navigation) return;
                const { nextEl: e, prevEl: n } = t.navigation;
                n && (t.isBeginning ? (h(n), c(n)) : (m(n), u(n))),
                  e && (t.isEnd ? (h(e), c(e)) : (m(e), u(e)));
              })();
          }),
          r('paginationUpdate', () => {
            t.params.a11y.enabled &&
              (function () {
                const e = t.params.a11y;
                v() &&
                  t.pagination.bullets.forEach(n => {
                    t.params.pagination.clickable &&
                      (u(n),
                      t.params.pagination.renderBullet ||
                        (d(n, 'button'),
                        p(
                          n,
                          e.paginationBulletMessage.replace(
                            /\{\{index\}\}/,
                            Ze(n) + 1,
                          ),
                        ))),
                      n.matches(ln(t.params.pagination.bulletActiveClass))
                        ? n.setAttribute('aria-current', 'true')
                        : n.removeAttribute('aria-current');
                  });
              })();
          }),
          r('destroy', () => {
            t.params.a11y.enabled &&
              (function () {
                i && i.remove();
                let { nextEl: e, prevEl: n } = t.navigation ? t.navigation : {};
                (e = tt(e)),
                  (n = tt(n)),
                  e && e.forEach(e => e.removeEventListener('keydown', g)),
                  n && n.forEach(e => e.removeEventListener('keydown', g)),
                  b() &&
                    tt(t.pagination.el).forEach(e => {
                      e.removeEventListener('keydown', g);
                    });
                Re().removeEventListener('visibilitychange', x),
                  t.el.removeEventListener('focus', C, !0),
                  t.el.removeEventListener('pointerdown', w, !0),
                  t.el.removeEventListener('pointerup', S, !0);
              })();
          });
      }
      function cn(e) {
        let t,
          n,
          r,
          a,
          { swiper: l, extendParams: i, on: o } = e;
        i({ grid: { rows: 1, fill: 'column' } });
        const s = () => {
          let e = l.params.spaceBetween;
          return (
            'string' === typeof e && e.indexOf('%') >= 0
              ? (e = (parseFloat(e.replace('%', '')) / 100) * l.size)
              : 'string' === typeof e && (e = parseFloat(e)),
            e
          );
        };
        o('init', () => {
          a = l.params.grid && l.params.grid.rows > 1;
        }),
          o('update', () => {
            const { params: e, el: t } = l,
              n = e.grid && e.grid.rows > 1;
            a && !n
              ? (t.classList.remove(
                  ''.concat(e.containerModifierClass, 'grid'),
                  ''.concat(e.containerModifierClass, 'grid-column'),
                ),
                (r = 1),
                l.emitContainerClasses())
              : !a &&
                n &&
                (t.classList.add(''.concat(e.containerModifierClass, 'grid')),
                'column' === e.grid.fill &&
                  t.classList.add(
                    ''.concat(e.containerModifierClass, 'grid-column'),
                  ),
                l.emitContainerClasses()),
              (a = n);
          }),
          (l.grid = {
            initSlides: e => {
              const { slidesPerView: a } = l.params,
                { rows: i, fill: o } = l.params.grid,
                s =
                  l.virtual && l.params.virtual.enabled
                    ? l.virtual.slides.length
                    : e.length;
              (r = Math.floor(s / i)),
                (t = Math.floor(s / i) === s / i ? s : Math.ceil(s / i) * i),
                'auto' !== a && 'row' === o && (t = Math.max(t, a * i)),
                (n = t / i);
            },
            unsetSlides: () => {
              l.slides &&
                l.slides.forEach(e => {
                  e.swiperSlideGridSet &&
                    ((e.style.height = ''),
                    (e.style[l.getDirectionLabel('margin-top')] = ''));
                });
            },
            updateSlide: (e, a, i) => {
              const { slidesPerGroup: o } = l.params,
                u = s(),
                { rows: c, fill: d } = l.params.grid,
                f =
                  l.virtual && l.params.virtual.enabled
                    ? l.virtual.slides.length
                    : i.length;
              let p, h, m;
              if ('row' === d && o > 1) {
                const n = Math.floor(e / (o * c)),
                  r = e - c * o * n,
                  l = 0 === n ? o : Math.min(Math.ceil((f - n * c * o) / c), o);
                (m = Math.floor(r / l)),
                  (h = r - m * l + n * o),
                  (p = h + (m * t) / c),
                  (a.style.order = p);
              } else
                'column' === d
                  ? ((h = Math.floor(e / c)),
                    (m = e - h * c),
                    (h > r || (h === r && m === c - 1)) &&
                      ((m += 1), m >= c && ((m = 0), (h += 1))))
                  : ((m = Math.floor(e / n)), (h = e - m * n));
              (a.row = m),
                (a.column = h),
                (a.style.height = 'calc((100% - '
                  .concat((c - 1) * u, 'px) / ')
                  .concat(c, ')')),
                (a.style[l.getDirectionLabel('margin-top')] =
                  0 !== m ? u && ''.concat(u, 'px') : ''),
                (a.swiperSlideGridSet = !0);
            },
            updateWrapperSize: (e, n) => {
              const { centeredSlides: r, roundLengths: a } = l.params,
                i = s(),
                { rows: o } = l.params.grid;
              if (
                ((l.virtualSize = (e + i) * t),
                (l.virtualSize = Math.ceil(l.virtualSize / o) - i),
                l.params.cssMode ||
                  (l.wrapperEl.style[l.getDirectionLabel('width')] = ''.concat(
                    l.virtualSize + i,
                    'px',
                  )),
                r)
              ) {
                const e = [];
                for (let t = 0; t < n.length; t += 1) {
                  let r = n[t];
                  a && (r = Math.floor(r)),
                    n[t] < l.virtualSize + n[0] && e.push(r);
                }
                n.splice(0, n.length), n.push(...e);
              }
            },
          });
      }
      nn.displayName = 'SwiperSlide';
      const dn =
        n.p + 'static/media/icons.df0184f771dec66015131d64619255c5.svg';
      const fn = function (t) {
        let { data: n } = t;
        const [r, a] = (0, e.useState)(null);
        return (0, ze.jsxs)(ze.Fragment, {
          children: [
            (0, ze.jsxs)('div', {
              className: 'slider-container',
              children: [
                (0, ze.jsx)('button', {
                  className: 'button-prev',
                  children: (0, ze.jsx)('svg', {
                    width: '48',
                    height: '48',
                    children: (0, ze.jsx)('use', {
                      xlinkHref: ''.concat(dn, '#icon-arrow-btn-2'),
                    }),
                  }),
                }),
                (0, ze.jsxs)(tn, {
                  className: 'slider-wrapper',
                  slidesPerView: 1,
                  spaceBetween: 5,
                  modules: [an, on, sn, un, cn],
                  navigation: {
                    nextEl: '.button-next',
                    prevEl: '.button-prev',
                  },
                  pagination: {
                    el: '.pagination',
                    bulletClass: 'pagination__button',
                    bulletActiveClass: 'pagination__button--active',
                  },
                  grid: { rows: 2, fill: 'row' },
                  breakpoints: {
                    768: { slidesPerView: 2, spaceBetween: 10 },
                    1288: { slidesPerView: 4, spaceBetween: 20 },
                  },
                  children: [
                    n.map((e, t) =>
                      (0, ze.jsx)(
                        nn,
                        {
                          className: 'slider-cards__list',
                          onMouseEnter: () => a(t),
                          onMouseLeave: () => a(null),
                          children:
                            r === t
                              ? (0, ze.jsxs)('div', {
                                  className: 'more-info',
                                  children: [
                                    (0, ze.jsxs)('p', {
                                      children: [
                                        'Name: ',
                                        (0, ze.jsxs)('span', {
                                          children: [' ', e.name],
                                        }),
                                      ],
                                    }),
                                    (0, ze.jsxs)('p', {
                                      children: [
                                        'Alternate names:',
                                        ' ',
                                        (0, ze.jsx)('span', {
                                          children:
                                            e.alternate_names.join(', '),
                                        }),
                                      ],
                                    }),
                                    (0, ze.jsxs)('p', {
                                      children: [
                                        'Species: ',
                                        (0, ze.jsxs)('span', {
                                          children: [' ', e.species],
                                        }),
                                      ],
                                    }),
                                    (0, ze.jsxs)('p', {
                                      children: [
                                        'Gend: ',
                                        (0, ze.jsxs)('span', {
                                          children: [' ', e.gender],
                                        }),
                                      ],
                                    }),
                                    (0, ze.jsxs)('p', {
                                      children: [
                                        'House: ',
                                        (0, ze.jsx)('span', {
                                          children: e.house,
                                        }),
                                      ],
                                    }),
                                    (0, ze.jsxs)('p', {
                                      children: [
                                        'Date of birth: ',
                                        (0, ze.jsx)('span', {
                                          children: e.dateOfBirth,
                                        }),
                                      ],
                                    }),
                                    (0, ze.jsxs)('p', {
                                      children: [
                                        'Year of birth: ',
                                        (0, ze.jsx)('span', {
                                          children: e.yearOfBirth,
                                        }),
                                      ],
                                    }),
                                    (0, ze.jsxs)('p', {
                                      children: [
                                        'Wizard: ',
                                        (0, ze.jsxs)('span', {
                                          children: [' ', e.wizard.toString()],
                                        }),
                                      ],
                                    }),
                                    (0, ze.jsxs)('p', {
                                      children: [
                                        'Ancestry: ',
                                        (0, ze.jsx)('span', {
                                          children: e.ancestry,
                                        }),
                                      ],
                                    }),
                                    (0, ze.jsxs)('p', {
                                      children: [
                                        'Eye colour: ',
                                        (0, ze.jsxs)('span', {
                                          children: [' ', e.eyeColour],
                                        }),
                                      ],
                                    }),
                                    (0, ze.jsxs)('p', {
                                      children: [
                                        'Hair colour: ',
                                        (0, ze.jsx)('span', {
                                          children: e.hairColour,
                                        }),
                                      ],
                                    }),
                                    (0, ze.jsxs)('p', {
                                      children: [
                                        'Wand:',
                                        (0, ze.jsx)('span', {
                                          children: ' Wood: '
                                            .concat(e.wand.wood, ', core: ')
                                            .concat(e.wand.core, ', length: ')
                                            .concat(e.wand.length, ' '),
                                        }),
                                      ],
                                    }),
                                    (0, ze.jsxs)('p', {
                                      children: [
                                        'Patronus: ',
                                        (0, ze.jsx)('span', {
                                          children: e.patronus,
                                        }),
                                      ],
                                    }),
                                    (0, ze.jsxs)('p', {
                                      children: [
                                        'Hogwarts student:',
                                        ' ',
                                        (0, ze.jsx)('span', {
                                          children:
                                            e.hogwartsStudent.toString(),
                                        }),
                                      ],
                                    }),
                                    (0, ze.jsxs)('p', {
                                      children: [
                                        'Hogwarts staff: ',
                                        (0, ze.jsx)('span', {
                                          children: e.hogwartsStaff.toString(),
                                        }),
                                      ],
                                    }),
                                    (0, ze.jsxs)('p', {
                                      children: [
                                        'Actor: ',
                                        (0, ze.jsxs)('span', {
                                          children: [' ', e.actor],
                                        }),
                                      ],
                                    }),
                                    (0, ze.jsxs)('p', {
                                      children: [
                                        'Alive: ',
                                        (0, ze.jsxs)('span', {
                                          children: [' ', e.alive.toString()],
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : (0, ze.jsxs)('article', {
                                  className: 'slider-cards__article',
                                  children: [
                                    (0, ze.jsxs)('div', {
                                      className: 'character-info',
                                      children: [
                                        (0, ze.jsx)('h3', {
                                          className: 'slider-cards__title',
                                          children: e.name,
                                        }),
                                        (0, ze.jsxs)('div', {
                                          className: 'slider-cards__info',
                                          children: [
                                            e.alternate_names[0]
                                              ? (0, ze.jsx)('p', {
                                                  className:
                                                    'slider-cards__text',
                                                  children:
                                                    e.alternate_names[0],
                                                })
                                              : '',
                                            (0, ze.jsx)('p', {
                                              className: 'slider-cards__text',
                                              children: e.house,
                                            }),
                                            (0, ze.jsx)('p', {
                                              className: 'slider-cards__text',
                                              children: e.dateOfBirth,
                                            }),
                                          ],
                                        }),
                                        (0, ze.jsxs)('span', {
                                          className: 'slider-cards__span',
                                          children: [
                                            '\u0411\u0456\u043b\u044c\u0448\u0435 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0457',
                                            (0, ze.jsx)('svg', {
                                              className: 'svg',
                                              width: '24',
                                              height: '14',
                                              children: (0, ze.jsx)('use', {
                                                xlinkHref: ''.concat(
                                                  dn,
                                                  '#icon-card-arrow',
                                                ),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, ze.jsx)('img', {
                                      className: 'slider-cards__image',
                                      src: e.image,
                                      alt: e.name,
                                    }),
                                  ],
                                }),
                        },
                        e.id,
                      ),
                    ),
                    (0, ze.jsxs)('div', {
                      className: 'pagination',
                      children: [
                        (0, ze.jsx)('span', {
                          className: 'pagination__button',
                        }),
                        (0, ze.jsx)('span', {
                          className: 'pagination__button',
                        }),
                        (0, ze.jsx)('span', {
                          className: 'pagination__button',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, ze.jsx)('button', {
                  className: 'button-next',
                  children: (0, ze.jsx)('svg', {
                    width: '48',
                    height: '48',
                    children: (0, ze.jsx)('use', {
                      xlinkHref: ''.concat(dn, '#icon-arrow-btn-1'),
                    }),
                  }),
                }),
              ],
            }),
            (0, ze.jsxs)(Pe, {
              to: '/',
              className: 'to-main-menu-btn',
              children: [
                (0, ze.jsx)('svg', {
                  className: 'svg',
                  width: '24',
                  height: '14',
                  children: (0, ze.jsx)('use', {
                    xlinkHref: ''.concat(dn, '#icon-card-arrow'),
                  }),
                }),
                ' ',
                '\u0414\u043e \u0433\u043e\u043b\u043e\u0432\u043d\u043e\u0457 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0438',
              ],
            }),
          ],
        });
      };
      const pn = function () {
          return (0, ze.jsx)('section', {
            className: 'pages',
            children: (0, ze.jsxs)('div', {
              className: 'container',
              children: [
                (0, ze.jsx)('h2', {
                  className: 'title pages__title',
                  children:
                    '\u0421\u0442\u0443\u0434\u0435\u043d\u0442\u0438 \u0413\u043e\u0491\u0432\u043e\u0440\u0442\u0441\u0443',
                }),
                (0, ze.jsx)(fn, { data: Ae }),
              ],
            }),
          });
        },
        hn = JSON.parse(
          '[{"id":"ca3827f0-375a-4891-aaa5-f5e8a5bad225","name":"Minerva McGonagall","alternate_names":[],"species":"human","gender":"female","house":"Gryffindor","dateOfBirth":"04-10-1925","yearOfBirth":1925,"wizard":true,"ancestry":"half-blood","eyeColour":"","hairColour":"black","wand":{"wood":"fir","core":"dragon heartstring","length":9.5},"patronus":"tabby cat","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Dame Maggie Smith","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/736x/71/6c/6c/716c6cf4539e40855ebd912e4e61ce1b.jpg"},{"id":"3569d265-bd27-44d8-88e8-82fb0a848374","name":"Severus Snape","alternate_names":["Half-Blood Prince","Snivellus","Sev"],"species":"human","gender":"male","house":"Slytherin","dateOfBirth":"09-01-1960","yearOfBirth":1960,"wizard":true,"ancestry":"half-blood","eyeColour":"black","hairColour":"black","wand":{"wood":"","core":"","length":null},"patronus":"doe","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Alan Rickman","alternate_actors":[],"alive":false,"image":"https://i.pinimg.com/564x/07/2c/52/072c52564a60a8787ed7c470f6ce8727.jpg"},{"id":"36bfefd0-e0bb-4d11-be98-d1ef6117a77a","name":"Rubeus Hagrid","alternate_names":["Professor Hagrid","Hagger"],"species":"half-giant","gender":"male","house":"Gryffindor","dateOfBirth":"06-12-1928","yearOfBirth":1928,"wizard":true,"ancestry":"half-blood","eyeColour":"black","hairColour":"black","wand":{"wood":"oak","core":"","length":16},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Robbie Coltrane","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/02/84/f3/0284f310865a2be88e841b3de88db731.jpg"},{"id":"b8f9095b-9de6-4d7d-83e0-4391af8f22e4","name":"Remus Lupin","alternate_names":["Professor Lupin","Moony","Remus John Lupin"],"species":"werewolf","gender":"male","house":"Gryffindor","dateOfBirth":"10-03-1960","yearOfBirth":1960,"wizard":true,"ancestry":"half-blood","eyeColour":"green","hairColour":"brown","wand":{"wood":"cypress","core":"unicorn tail hair","length":10.25},"patronus":"wolf","hogwartsStudent":false,"hogwartsStaff":true,"actor":"David Thewlis","alternate_actors":[],"alive":false,"image":"https://i.pinimg.com/564x/08/96/92/0896925975e6853b7d66342374818c04.jpg"},{"id":"2fb675cd-5505-4c8e-a54e-579e73bf4174","name":"Horace Slughorn","alternate_names":[],"species":"human","gender":"male","house":"Slytherin","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"pure-blood","eyeColour":"green","hairColour":"blonde","wand":{"wood":"cedar","core":"dragon heartstring","length":10.25},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Jim Broadbent","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/a1/1d/35/a11d3554e38ce750a83d590794a15688.jpg"},{"id":"d58e7249-19d1-40bd-a43f-1da0497fe8aa","name":"Dolores Umbridge","alternate_names":[],"species":"human","gender":"female","house":"Slytherin","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"half-blood","eyeColour":"brown","hairColour":"grey","wand":{"wood":"birch","core":"dragon heartstring","length":8},"patronus":"persian cat","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Imelda Staunton","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/77/15/29/7715298b32e343a9ec29deebb24156b8.jpg"},{"id":"2b82cfb8-0440-4a57-a030-6d75a40c0d98","name":"Argus Filch","alternate_names":[],"species":"human","gender":"male","house":"","dateOfBirth":null,"yearOfBirth":null,"wizard":false,"ancestry":"squib","eyeColour":"","hairColour":"grey","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"David Bradley","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/92/b4/d4/92b4d495f54f249d08c839ec38bf535a.jpg"},{"id":"b415c867-1cff-455e-b194-748662ac2cca","name":"Albus Dumbledore","alternate_names":["Professor Dumbledore"],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":null,"yearOfBirth":1881,"wizard":true,"ancestry":"half-blood","eyeColour":"blue","hairColour":"silver","wand":{"wood":"","core":"","length":null},"patronus":"Phoenix","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Richard Harris","alternate_actors":["Michael Gambon"],"alive":false,"image":"https://i.pinimg.com/564x/2f/4c/8c/2f4c8cc85a7efeeb2ad6f174a7ce33ce.jpg"},{"id":"e9457467-d10a-4893-afa9-19f9602b218a","name":"Madam Pomfrey","alternate_names":["Poppy Pomfrey"],"species":"human","gender":"female","house":"","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Gemma Jones","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/dc/2a/8a/dc2a8a154b403c02f1d969454c1ea178.jpg"},{"id":"ba19be27-178b-4594-95b7-51ba0e3ba1dd","name":"Quirinus Quirrel","alternate_names":["Professor Quirrel"],"species":"human","gender":"male","house":"","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"alder","core":"unicorn hair","length":9},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Ian Hart","alternate_actors":[],"alive":false,"image":"https://i.pinimg.com/564x/36/b3/1b/36b31b703b7092bdea32105a7c3c26a8.jpg"},{"id":"e8694719-a975-48fb-9523-f4cade1c38aa","name":"Pomona Sprout","alternate_names":["Professor Sprout"],"species":"human","gender":"female","house":"Hufflepuff","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Miriam Margolyes","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/5e/22/2c/5e222c9c5aeee0aa74ae389a89cb2e3a.jpg"},{"id":"6ea188f3-d95c-407c-ab00-a0bec8678a71","name":"Cuthbert Binns","alternate_names":["Professor Binns"],"species":"ghost","gender":"male","house":"","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"","alternate_actors":[],"alive":false,"image":"https://i.pinimg.com/564x/ef/84/99/ef849937e8f786b99eff3bd4aa3cf808.jpg"},{"id":"a61e0783-7914-4f8d-a800-c409c06315cf","name":"Filius Flitwick","alternate_names":["Professor Flitwick"],"species":"human","gender":"male","house":"Ravenclaw","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Warwick Davis","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/aa/8d/64/aa8d6443524b287121fd1906d4105625.jpg"},{"id":"0a81c4f9-b80d-45a7-a4fd-9191453815a1","name":"Madam Hooch","alternate_names":["Rolanda Hooch"],"species":"human","gender":"female","house":"","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"yellow","hairColour":"grey","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Zo\xeb Wanamaker","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/77/66/21/776621b61843c8bb6748d3e87da93852.jpg"},{"id":"3d687c4d-852e-470f-bac5-5a02758b1f8f","name":"Gilderoy Lockhart","alternate_names":["Professor Lockhart"],"species":"human","gender":"male","house":"","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"half-blood","eyeColour":"blue","hairColour":"blond","wand":{"wood":"cherry","core":"dragon heartstring","length":9},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Kenneth Branagh","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/56/b3/d8/56b3d8241eb798496fd43a2a54e319bf.jpg"},{"id":"cdec9b95-c7a5-4623-ad12-6fa76d168588","name":"Madame Pince","alternate_names":["Irma Pince"],"species":"human","gender":"female","house":"","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Sally Mortemore","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/0c/c6/d3/0cc6d346f5284b39a6fe7c7b514f5df4.jpg"},{"id":"8ea29415-012d-4781-ba5f-d0de63a05abe","name":"Sybill Trelawney","alternate_names":["Sybill Patricia Trelawney","Professor Trelawney"],"species":"human","gender":"female","house":"","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"hazel","core":"unicorn hair","length":9.5},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Emma Thompson","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/04/f4/67/04f4677ffa3a1ac0315b6eb2c86f216d.jpg"},{"id":"58f2cf41-392c-4e84-b441-dbbce585f78d","name":"Septima Vector","alternate_names":["Professor Vector"],"species":"human","gender":"female","house":"","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/2f/28/88/2f28881c593d78dd5be69d6e6706cd23.jpg"},{"id":"99d3ce6b-6a45-495a-a7c6-132203697d45","name":"Aurora Sinistra","alternate_names":["Professor Sinistra"],"species":"human","gender":"female","house":"","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/736x/b8/8a/6d/b88a6d3785544f5101d0fb94184fbd02.jpg"},{"id":"41ebe856-f0f4-4c77-8795-4735d3a87f3d","name":"Alastor Moody","alternate_names":["Professor Moody","Mad-Eye"],"species":"human","gender":"male","house":"","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"pure-blood","eyeColour":"dark","hairColour":"grey","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Brendan Gleeson","alternate_actors":[],"alive":false,"image":"https://i.pinimg.com/564x/19/e4/db/19e4dbb67d16b44005d6cc4d5d353483.jpg"}]',
        );
      const mn = function () {
          return (0, ze.jsx)('section', {
            className: 'pages',
            children: (0, ze.jsxs)('div', {
              className: 'container',
              children: [
                (0, ze.jsxs)('h2', {
                  className: 'title pages__title',
                  children: [
                    '\u0421\u043f\u0456\u0432\u0440\u043e\u0431\u0456\u0442\u043d\u0438\u043a\u0438 ',
                    (0, ze.jsx)('br', {}),
                    '\u0413\u043e\u0491\u0432\u043e\u0440\u0442\u0441\u0443',
                  ],
                }),
                (0, ze.jsx)(fn, { data: hn }),
              ],
            }),
          });
        },
        gn = JSON.parse(
          '[{"id":"9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8","name":"Harry Potter","alternate_names":["The Boy Who Lived","The Chosen One","Undesirable No. 1","Potty"],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":"31-07-1980","yearOfBirth":1980,"wizard":true,"ancestry":"half-blood","eyeColour":"green","hairColour":"black","wand":{"wood":"holly","core":"phoenix tail feather","length":11},"patronus":"stag","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Daniel Radcliffe","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/bf/70/c2/bf70c2818737989fb677f983a5ec35c5.jpg"},{"id":"4c7e6819-a91a-45b2-a454-f931e4a7cce3","name":"Hermione Granger","alternate_names":["Hermy","Know-it-all","Miss Grant","Herm-own-ninny"],"species":"human","gender":"female","house":"Gryffindor","dateOfBirth":"19-09-1979","yearOfBirth":1979,"wizard":true,"ancestry":"muggleborn","eyeColour":"brown","hairColour":"brown","wand":{"wood":"vine","core":"dragon heartstring","length":10.75},"patronus":"otter","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Emma Watson","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/97/24/fe/9724fe531d7f848933377564a79cd687.jpg"},{"id":"c3b1f9a5-b87b-48bf-b00d-95b093ea6390","name":"Ron Weasley","alternate_names":["Dragomir Despard","Ronald","Ickle Ronniekins","Ronnie","Wheezy","Won-Won","Roonil Wazlib"],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":"01-03-1980","yearOfBirth":1980,"wizard":true,"ancestry":"pure-blood","eyeColour":"blue","hairColour":"red","wand":{"wood":"willow","core":"unicorn tail hair","length":14},"patronus":"Jack Russell terrier","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Rupert Grint","alternate_actors":[],"alive":true,"image":"https://ik.imagekit.io/hpapi/ron.jpg"},{"id":"af95bd8a-dfae-45bb-bc69-533860d34129","name":"Draco Malfoy","alternate_names":[],"species":"human","gender":"male","house":"Slytherin","dateOfBirth":"05-06-1980","yearOfBirth":1980,"wizard":true,"ancestry":"pure-blood","eyeColour":"grey","hairColour":"blonde","wand":{"wood":"hawthorn","core":"unicorn tail hair","length":10},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Tom Felton","alternate_actors":[],"alive":true,"image":"https://ik.imagekit.io/hpapi/draco.jpg"},{"id":"d5c4daa3-c726-426a-aa98-fb40f3fba816","name":"Cedric Diggory","alternate_names":[],"species":"human","gender":"male","house":"Hufflepuff","dateOfBirth":null,"yearOfBirth":1977,"wizard":true,"ancestry":"","eyeColour":"grey","hairColour":"brown","wand":{"wood":"ash","core":"unicorn hair","length":12.25},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Robert Pattinson","alternate_actors":[],"alive":false,"image":"https://ik.imagekit.io/hpapi/cedric.png"},{"id":"8f9aa40b-5d7c-441e-ad32-4564ecda3b70","name":"Cho Chang","alternate_names":[],"species":"human","gender":"female","house":"Ravenclaw","dateOfBirth":"07-04-1979","yearOfBirth":1979,"wizard":true,"ancestry":"","eyeColour":"brown","hairColour":"black","wand":{"wood":"","core":"","length":null},"patronus":"swan","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Katie Leung","alternate_actors":[],"alive":true,"image":"https://ik.imagekit.io/hpapi/cho.jpg"},{"id":"3db6dc51-b461-4fa4-a6e4-b1ff352221c5","name":"Neville Longbottom","alternate_names":[],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":"30-07-1980","yearOfBirth":1980,"wizard":true,"ancestry":"pure-blood","eyeColour":"","hairColour":"blonde","wand":{"wood":"cherry","core":"unicorn tail hair","length":13},"patronus":"Non-Corporeal","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Matthew Lewis","alternate_actors":[],"alive":true,"image":"https://ik.imagekit.io/hpapi/neville.jpg"},{"id":"861c4cde-2f0f-4796-8d8f-9492e74b2573","name":"Luna Lovegood","alternate_names":["Loony Lovegood"],"species":"human","gender":"female","house":"Ravenclaw","dateOfBirth":"13-02-1981","yearOfBirth":1981,"wizard":true,"ancestry":"","eyeColour":"silver","hairColour":"blonde","wand":{"wood":"","core":"","length":null},"patronus":"hare","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Evanna Lynch","alternate_actors":[],"alive":true,"image":"https://ik.imagekit.io/hpapi/luna.jpg"},{"id":"1cd6dc64-01a9-4379-9cfd-1a7167ba1bb1","name":"Ginny Weasley","alternate_names":[],"species":"human","gender":"female","house":"Gryffindor","dateOfBirth":"11-08-1981","yearOfBirth":1981,"wizard":true,"ancestry":"pure-blood","eyeColour":"brown","hairColour":"red","wand":{"wood":"yew","core":"","length":null},"patronus":"horse","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Bonnie Wright","alternate_actors":[],"alive":true,"image":"https://ik.imagekit.io/hpapi/ginny.jpg"},{"id":"2cfd2d4b-5d1e-4dc5-8837-37a97c7e2f2f","name":"Sirius Black","alternate_names":["Padfoot","Snuffles"],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":"03-11-1959","yearOfBirth":1959,"wizard":true,"ancestry":"pure-blood","eyeColour":"grey","hairColour":"black","wand":{"wood":"","core":"","length":null},"patronus":"hare","hogwartsStudent":false,"hogwartsStaff":false,"actor":"Gary Oldman","alternate_actors":["James Walters","Rohan Gotobed"],"alive":false,"image":"https://i.pinimg.com/564x/db/0f/c8/db0fc8e99615586853c9ffb760f23b7f.jpg"},{"id":"04f9eb45-d843-4e29-a7d3-0bd49ed87f85","name":"Vincent Crabbe","alternate_names":[],"species":"human","gender":"male","house":"Slytherin","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"pure-blood","eyeColour":"black","hairColour":"black","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Jamie Waylett","alternate_actors":[],"alive":false,"image":"https://ik.imagekit.io/hpapi/crabbe.jpg"},{"id":"a31ddc78-af12-4978-929c-3cc8a00a833e","name":"Gregory Goyle","alternate_names":[],"species":"human","gender":"male","house":"Slytherin","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"pure-blood","eyeColour":"","hairColour":"brown","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Josh Herdman","alternate_actors":[],"alive":true,"image":"https://ik.imagekit.io/hpapi/goyle.jpg"},{"id":"8f3b8796-c7b9-442e-ac02-113d48306fc7","name":"Percy Weasley","alternate_names":["Perce","Percy Ignatius Weasley","Weatherby"],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"pure-blood","eyeColour":"","hairColour":"red","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Chris Rankin","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/b7/0d/4c/b70d4cccb884ff679f3359e3af74fd01.jpg"},{"id":"28741184-263c-4000-b011-ca7c60466ef4","name":"Fred Weasley","alternate_names":[],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"pure-blood","eyeColour":"","hairColour":"red","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"James Phelps","alternate_actors":[],"alive":false,"image":"https://i.pinimg.com/564x/ee/33/f7/ee33f7864a3a7e09f2f2441e7934cff8.jpg"},{"id":"2a0615de-8aa4-41e7-9504-dd875f5f3f01","name":"George Weasley","alternate_names":[],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"pure-blood","eyeColour":"","hairColour":"red","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Oliver Phelps","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/a0/ed/a5/a0eda5fbe07c2d92c3961667f8aceff3.jpg"},{"id":"979ab773-944f-4ff8-88be-943a4bc2c18a","name":"Lee Jordan","alternate_names":[],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Luke Youngblood","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/a3/7e/1c/a37e1c9e37ac860ff8fe023f14657169.jpg"},{"id":"0af82694-e24f-45ec-a8d7-5bb1199ce631","name":"Hannah Abbott","alternate_names":[],"species":"human","gender":"female","house":"Hufflepuff","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"half-blood","eyeColour":"","hairColour":"blonde","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Charlotte Skeoch","alternate_actors":["Louisa Warren"],"alive":true,"image":"https://i.pinimg.com/564x/99/6b/4a/996b4a5c68f6968a6a056b562d85e6e4.jpg"},{"id":"7cc5e694-850d-4c44-830b-7154e23bb5c3","name":"Susan Bones","alternate_names":[],"species":"human","gender":"female","house":"Hufflepuff","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Eleanor Columbus","alternate_actors":["Emma Jayne-Corboz"],"alive":true,"image":"https://i.pinimg.com/564x/05/72/f5/0572f5cbc5c697ceb7eebcf5699b5713.jpg"},{"id":"9055a7b1-6ac9-4363-977c-4dec78572fad","name":"Terry Boot","alternate_names":[],"species":"human","gender":"male","house":"Ravenclaw","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Kevin Lee Yi","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/4f/18/d8/4f18d8c448471b02f04cc1364d786209.jpg"},{"id":"c5acae3e-1a05-4f1d-bb83-3f8c7639d84e","name":"Mandy Brocklehurst","alternate_names":[],"species":"human","gender":"female","house":"Ravenclaw","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Christina Petrou","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/8a/a1/c1/8aa1c1c8a1ee8338bc171f0e9ca2921c.jpg"},{"id":"f94086b8-03ae-4457-ba2c-e624d0980869","name":"Lavender Brown","alternate_names":[],"species":"human","gender":"female","house":"Gryffindor","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Kathleen Cauley","alternate_actors":["Jennifer Smith","Jessie Cave"],"alive":true,"image":"https://i.pinimg.com/564x/7d/b3/d3/7db3d392830118a6884ae0785935c2b6.jpg"},{"id":"14aca981-2b60-413e-8f8e-3534961b534b","name":"Millicent Bulstrode","alternate_names":[],"species":"human","gender":"female","house":"Slytherin","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Helen Stuart","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/97/ac/17/97ac177c41a13f34c8203f810972cb80.jpg"},{"id":"34155375-c8c0-415e-873a-b6483f0cbf17","name":"Justin Finch-Fletchley","alternate_names":[],"species":"human","gender":"male","house":"Hufflepuff","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"muggleborn","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Edward Randell","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/e2/f1/6a/e2f16a4708c623febf7be0e0360d5111.jpg"},{"id":"1413e1b3-2903-4a47-a2d5-e8abc5ce8014","name":"Seamus Finnigan","alternate_names":["O\'Flaherty","Seamus Finnegan"],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"half-blood","eyeColour":"","hairColour":"sandy","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Devon Murray","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/4b/37/68/4b3768781e1860cfb0f2b406708beece.jpg"},{"id":"47aa7511-59b9-4760-9bd7-822a1103177b","name":"Theodore Nott","alternate_names":[],"species":"human","gender":"male","house":"Slytherin","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"pure-blood","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/f7/aa/f2/f7aaf2c757139d358011b667c0ed5061.jpg"},{"id":"ca3827f0-375a-4891-aaa5-f5e8a5bad225","name":"Minerva McGonagall","alternate_names":[],"species":"human","gender":"female","house":"Gryffindor","dateOfBirth":"04-10-1925","yearOfBirth":1925,"wizard":true,"ancestry":"half-blood","eyeColour":"","hairColour":"black","wand":{"wood":"fir","core":"dragon heartstring","length":9.5},"patronus":"tabby cat","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Dame Maggie Smith","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/736x/71/6c/6c/716c6cf4539e40855ebd912e4e61ce1b.jpg"},{"id":"3569d265-bd27-44d8-88e8-82fb0a848374","name":"Severus Snape","alternate_names":["Half-Blood Prince","Snivellus","Sev"],"species":"human","gender":"male","house":"Slytherin","dateOfBirth":"09-01-1960","yearOfBirth":1960,"wizard":true,"ancestry":"half-blood","eyeColour":"black","hairColour":"black","wand":{"wood":"","core":"","length":null},"patronus":"doe","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Alan Rickman","alternate_actors":[],"alive":false,"image":"https://i.pinimg.com/564x/07/2c/52/072c52564a60a8787ed7c470f6ce8727.jpg"},{"id":"36bfefd0-e0bb-4d11-be98-d1ef6117a77a","name":"Rubeus Hagrid","alternate_names":["Professor Hagrid","Hagger"],"species":"half-giant","gender":"male","house":"Gryffindor","dateOfBirth":"06-12-1928","yearOfBirth":1928,"wizard":true,"ancestry":"half-blood","eyeColour":"black","hairColour":"black","wand":{"wood":"oak","core":"","length":16},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Robbie Coltrane","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/02/84/f3/0284f310865a2be88e841b3de88db731.jpg"},{"id":"b8f9095b-9de6-4d7d-83e0-4391af8f22e4","name":"Remus Lupin","alternate_names":["Professor Lupin","Moony","Remus John Lupin"],"species":"werewolf","gender":"male","house":"Gryffindor","dateOfBirth":"10-03-1960","yearOfBirth":1960,"wizard":true,"ancestry":"half-blood","eyeColour":"green","hairColour":"brown","wand":{"wood":"cypress","core":"unicorn tail hair","length":10.25},"patronus":"wolf","hogwartsStudent":false,"hogwartsStaff":true,"actor":"David Thewlis","alternate_actors":[],"alive":false,"image":"https://i.pinimg.com/564x/08/96/92/0896925975e6853b7d66342374818c04.jpg"},{"id":"2fb675cd-5505-4c8e-a54e-579e73bf4174","name":"Horace Slughorn","alternate_names":[],"species":"human","gender":"male","house":"Slytherin","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"pure-blood","eyeColour":"green","hairColour":"blonde","wand":{"wood":"cedar","core":"dragon heartstring","length":10.25},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Jim Broadbent","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/a1/1d/35/a11d3554e38ce750a83d590794a15688.jpg"},{"id":"d58e7249-19d1-40bd-a43f-1da0497fe8aa","name":"Dolores Umbridge","alternate_names":[],"species":"human","gender":"female","house":"Slytherin","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"half-blood","eyeColour":"brown","hairColour":"grey","wand":{"wood":"birch","core":"dragon heartstring","length":8},"patronus":"persian cat","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Imelda Staunton","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/77/15/29/7715298b32e343a9ec29deebb24156b8.jpg"},{"id":"2b82cfb8-0440-4a57-a030-6d75a40c0d98","name":"Argus Filch","alternate_names":[],"species":"human","gender":"male","house":"","dateOfBirth":null,"yearOfBirth":null,"wizard":false,"ancestry":"squib","eyeColour":"","hairColour":"grey","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"David Bradley","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/92/b4/d4/92b4d495f54f249d08c839ec38bf535a.jpg"},{"id":"b415c867-1cff-455e-b194-748662ac2cca","name":"Albus Dumbledore","alternate_names":["Professor Dumbledore"],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":null,"yearOfBirth":1881,"wizard":true,"ancestry":"half-blood","eyeColour":"blue","hairColour":"silver","wand":{"wood":"","core":"","length":null},"patronus":"Phoenix","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Richard Harris","alternate_actors":["Michael Gambon"],"alive":false,"image":"https://i.pinimg.com/564x/2f/4c/8c/2f4c8cc85a7efeeb2ad6f174a7ce33ce.jpg"},{"id":"e9457467-d10a-4893-afa9-19f9602b218a","name":"Madam Pomfrey","alternate_names":["Poppy Pomfrey"],"species":"human","gender":"female","house":"","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Gemma Jones","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/dc/2a/8a/dc2a8a154b403c02f1d969454c1ea178.jpg"},{"id":"ba19be27-178b-4594-95b7-51ba0e3ba1dd","name":"Quirinus Quirrel","alternate_names":["Professor Quirrel"],"species":"human","gender":"male","house":"","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"alder","core":"unicorn hair","length":9},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Ian Hart","alternate_actors":[],"alive":false,"image":"https://i.pinimg.com/564x/36/b3/1b/36b31b703b7092bdea32105a7c3c26a8.jpg"},{"id":"e8694719-a975-48fb-9523-f4cade1c38aa","name":"Pomona Sprout","alternate_names":["Professor Sprout"],"species":"human","gender":"female","house":"Hufflepuff","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Miriam Margolyes","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/5e/22/2c/5e222c9c5aeee0aa74ae389a89cb2e3a.jpg"},{"id":"6ea188f3-d95c-407c-ab00-a0bec8678a71","name":"Cuthbert Binns","alternate_names":["Professor Binns"],"species":"ghost","gender":"male","house":"","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"","alternate_actors":[],"alive":false,"image":"https://i.pinimg.com/564x/ef/84/99/ef849937e8f786b99eff3bd4aa3cf808.jpg"},{"id":"a61e0783-7914-4f8d-a800-c409c06315cf","name":"Filius Flitwick","alternate_names":["Professor Flitwick"],"species":"human","gender":"male","house":"Ravenclaw","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Warwick Davis","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/aa/8d/64/aa8d6443524b287121fd1906d4105625.jpg"},{"id":"0a81c4f9-b80d-45a7-a4fd-9191453815a1","name":"Madam Hooch","alternate_names":["Rolanda Hooch"],"species":"human","gender":"female","house":"","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"yellow","hairColour":"grey","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Zo\xeb Wanamaker","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/77/66/21/776621b61843c8bb6748d3e87da93852.jpg"},{"id":"3d687c4d-852e-470f-bac5-5a02758b1f8f","name":"Gilderoy Lockhart","alternate_names":["Professor Lockhart"],"species":"human","gender":"male","house":"","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"half-blood","eyeColour":"blue","hairColour":"blond","wand":{"wood":"cherry","core":"dragon heartstring","length":9},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Kenneth Branagh","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/56/b3/d8/56b3d8241eb798496fd43a2a54e319bf.jpg"},{"id":"cdec9b95-c7a5-4623-ad12-6fa76d168588","name":"Madame Pince","alternate_names":["Irma Pince"],"species":"human","gender":"female","house":"","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Sally Mortemore","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/0c/c6/d3/0cc6d346f5284b39a6fe7c7b514f5df4.jpg"},{"id":"8ea29415-012d-4781-ba5f-d0de63a05abe","name":"Sybill Trelawney","alternate_names":["Sybill Patricia Trelawney","Professor Trelawney"],"species":"human","gender":"female","house":"","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"hazel","core":"unicorn hair","length":9.5},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Emma Thompson","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/04/f4/67/04f4677ffa3a1ac0315b6eb2c86f216d.jpg"},{"id":"58f2cf41-392c-4e84-b441-dbbce585f78d","name":"Septima Vector","alternate_names":["Professor Vector"],"species":"human","gender":"female","house":"","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/564x/2f/28/88/2f28881c593d78dd5be69d6e6706cd23.jpg"},{"id":"99d3ce6b-6a45-495a-a7c6-132203697d45","name":"Aurora Sinistra","alternate_names":["Professor Sinistra"],"species":"human","gender":"female","house":"","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"","eyeColour":"","hairColour":"","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"","alternate_actors":[],"alive":true,"image":"https://i.pinimg.com/736x/b8/8a/6d/b88a6d3785544f5101d0fb94184fbd02.jpg"},{"id":"41ebe856-f0f4-4c77-8795-4735d3a87f3d","name":"Alastor Moody","alternate_names":["Professor Moody","Mad-Eye"],"species":"human","gender":"male","house":"","dateOfBirth":null,"yearOfBirth":null,"wizard":true,"ancestry":"pure-blood","eyeColour":"dark","hairColour":"grey","wand":{"wood":"","core":"","length":null},"patronus":"","hogwartsStudent":false,"hogwartsStaff":true,"actor":"Brendan Gleeson","alternate_actors":[],"alive":false,"image":"https://i.pinimg.com/564x/19/e4/db/19e4dbb67d16b44005d6cc4d5d353483.jpg"}]',
        );
      const vn = function () {
        const t = gn.filter(e => 'Gryffindor' === e.house),
          n = gn.filter(e => 'Slytherin' === e.house),
          r = gn.filter(e => 'Ravenclaw' === e.house),
          a = gn.filter(e => 'Hufflepuff' === e.house),
          [l, i] = (0, e.useState)(gn);
        return (0, ze.jsx)('section', {
          className: 'pages',
          children: (0, ze.jsxs)('div', {
            className: 'container',
            children: [
              (0, ze.jsxs)('h2', {
                className: 'title pages__title',
                children: [
                  '\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0456 \u0432 ',
                  (0, ze.jsx)('br', {}),
                  '\u043f\u0435\u0432\u043d\u043e\u043c\u0443 \u0431\u0443\u0434\u0438\u043d\u043a\u0443',
                ],
              }),
              (0, ze.jsxs)('div', {
                className: 'characters-filter',
                children: [
                  (0, ze.jsxs)('button', {
                    className: 'filter-buttons',
                    onClick: () => {
                      i(t);
                    },
                    children: [
                      (0, ze.jsx)('img', {
                        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAmCAYAAABOFCLqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAApYSURBVHgBvVdpbB3VFf5mffvzW/zsOJsdE4eAEwcUaFQgFCrU8oNKqKVsreBPpQpFrVTUhaq0KlIFKXSRWsGfFlRRuiCgYZHYaUqbhIBJoISYJCyJlzTxs/2e/daZubP03Dszz89L0qiVeqTjO3d835xvvrOO9FRXj9evaZAkqaXgKvNrObiWxUIbLBQPnkeL60Jc0Orx1fPEeiZ1g3PtesJxoLaDECq3AeDXcgAwuC+1YEAYlTgQOuO59FB+TgBz6T6WFW5YkqQl97gsACMMBiopPhgp3IsHSC1yJC9gpo0VuPRPhwPjoF3/3jkACe+p4vkhE4riAwiAINjLghV53oUBKzNpwEx6KHUCxrYIel6sQR4xkJOUFn8hQ4uBhGyE9/iiSmF8hCwoAShFFfvxrRHoKyNQRxhiEw4UOj8a9dDxpTTYOhXplISUQvu0jH2KhLHNCoY+sbHuLVOQ6HmO785FQMJ9CMp3k6CmzTUCiAKXdHRbFNLnU+hdl8Dkdgcf75xCzJQQ2xjBedfm0WzaKOQV1BsMMzMWdF3F5k0pjE/NoZ/HkUfPCwL6TEBaIGlVIUkLYgMBK5qqoGdVHKnVSeQKUUy9X8MQYjgV8VA+4uClX01j3GS49tY8ajULXQUZc3MeAZLR7FTRoGfFOQ4eN2SjQWt9kwa1W4FziiHxnilYbrmLVLmlI/PjnK5DUn1GZAIiq1wV2MddjCcVDFzSgfzaOOrTwMqihE4qBfrFcazfmoIXU5DPqwTIxVzVgeO4cIiVyARDpu6nPjc3e1sK0U/HgOMMqdszqEck6CNmi6FZAusXkEAleT6AOSCFwHWflASIRCKCyE05jK+JYKYrgiKBzpD7mC1jatrDkWMm+ghwoyEJYO46XTzT6qCXuq+AC27LY253Hem/Gaj8sQL5fL3lOj8xwMHwkAlc1eYyzlKaGJj+yAaDgumSB4di4MQVcUR3dKJ7SwKZTAQ2UxDRNVx8UQeGD9ZRIzaG1ieg/8sVbrdu7UBuUxwj+2vIHrSE8eSWKGYONhYENY9dtZ0Zv9BJrXSWiakVjoq5CRvxNfyogmRKw5tklLxILqFYaPLVIxAOVnRHsW6tgv1vlXFp069dR+MEqmjBeLCMLgL6zoCMwaEICr8rY7HIaMfWcldQV3gQ0hH391VM7G/i8BGDUljHBRuSiMcpGDUJtg1ylYTxkzyIdQpgBddcncWplYp4VrXsoPjbWfROeji6RsaG7xUw86Mi4jVvKRgJy0tYcOMEKFcBah8YGNyYwOi4BceVsWUTuSmtodCpYfhADdGoTBlIbhw18MxfpnHhUb/a9R22UTEpsFdo6L2rgLG7JtFd9Ja1qS7YBWkWlgYvKPn8Ik6wKabx5evzGJswYJKB8izDqdMmrrw8jaZhYmrGEOBWD1vQ6JfUrtB/wIJrO6h+M4XSC1VsnJZ4E1kejNdmPey4Jd3F6GoXffS0hE4grkth9YUx5LKU+pKDvjUaZkrcmkJuiYIxi9ynUk2JwH2ujKE6udmzgTaj3noN6edY8LJnAEMV0hWlUvzQE933ZL+EQcqYSETHqp4EpbhKPU8iABZYVMHpIjeuQKFXuWhzFB8fdzA+0UTpVAPr/9FAko8J3vyYwF/QoXRnChYAbBc67So3p7PfzqpqJMyoSX52PW37dSQTCqo1B6bhYvjJMpwocOyjBjQqWOdRHcl0UHC7NgEDVnQp6MhLqPRRUO+pQaPiR2lG6ndvL0+FbxUx+a7Zig2vFRYepl2vpnwhlfx6t6pl/DFCRooC1j3JMDJlIUJMVyklx56fw8AxB8b7BlZSGS+uJFDERN9azpgjlKyiXmPo7NUwtYZ2e2vQCQxnmoOq0swxfpEGZZwq8Ky7wFX8uu7aY8qNqfR1XarWDymcVSTECVQXUZQ7ZCFFbi5QPVF4/DRdKKaL3DsGucHBP8ktfVRJXccW3TkW8yjIXRT6CBDFln6w6bNCWuqhbNuoQ3u1joS1EAiXUWYfkk8z9oEX/MATb0JvSsUjStcus+FalMqkNvPVsUyh9aM19Gse/rp7Cnv3lzBTNgRDHBTXdTekUdTc1kia/WwCcWoDWWseRLubyp47ojieG/1cPHlT2B9EeZHCsTL4E2ZbAHjmMh3ZOzJI9Ck4fyBCNYZm2NGmiBueDzx4JydNsFUyHGKkcUUUp6sMhdea5DoscRGXB2pzD6ivNJvPjzOrulbSU35U+3Mun0NcGpokPpPwauz4owB5DKe3xHFFlwR/5LUp5SWR6nyuiUYhZuAV3SrK3XT+PYolcmvvMQbZw5JBnMtxx64fcJxneGCb08x+Ya2q3Sjm1hCtHLAhy62vBM5enZjqXMG7iC08MFk0/QxjLnVrGb1rNaSSknitOGVd5MV6kOoLAbS7atJxX6CtJXrTAav5sNvmhlB55fQofjyb0Z6M0xqn+7GTFDc8tqiwVQ7X0X3fFDrvmYJj2DRC2ATaFe6N96iYWeazpB2URetus/Enfi3A/Hpu7pW9RvN4WKAQgIIA4oPiwSyAMYbSkyUCbsNoWphumNDpfJxUo3RuGkx8F7mUfRrxbhSkZdkI9RCzPnjWsna1wPAze5rG19zwA8t15wERI6I1B8AY7zPbNFFXVKrAVp1htmIJoPmnqij/pIjhl8oikA8Ra9o9nZi4JrIke7g6pK+Zze+HqbKgaf8y1/n6VbH4leE30vys7F/MUkCzHTls+mKGYoVRjJBb7p1C4UM7MOJnn3jj1R4ufWg1TYANdOZU6N8qQpq2F3xR7rHMN75bq1wW2l/QtYuWesOM5hzLKXImBDQZJ/qGqLDRiJC4KoHBq1M4+XgJ7++uQKF2gRQF9KK35jI45mFiuI4CtZVUSsahm2LQHp1D75xvq+66Mz+sVW5vt78AzH2101NMytx5SzL5SBhcI1s19FwTwyDNL/mcKt7qxIPT2Oz5GeVzgSUu4BKPychSp3/6oVPofZnqkCGJs/xL4f565W4axz9st69gkeyzjHcHdFXpk9XP2PRQmab5ymED7O0mGiUbw0+UsP6EOx9si1jZv12DfF0S40M0sA/6/dd8k7r5EZuqhX92r2Xe+xujef9i20vAcKFCuGetom3doKoDWaoxWRoRs5MOtAMGuk/YoiAuVzO4vDVNwCl483kNFQpy4xMT5Ydp/g2+kYaZ+cR36tU7lrN7pqlTyM8z2V3b9ej1iz/WF8tiUAbpGGViHxVMFfPsvcusP+yoVb56pucoZzPysmHsupyGl6wsXyl53lmLVzsohdYcr9jB/3nsvcOsnd+oV+8Erwn/DRj+w6eN5m76tGM9inJ18iwULc6mcC25DnvMbNz902bjnrMB4XJ2/ttkZyKxuUfTd21QtPOWA7H4mssBxsb+bDZu2MfYMM5B/hMzLXmVseLThvH4SkmJUx+8JCEa+/LzbMVzzVeY8Ysf1KtfGXfdT3COcs5gAqn/nZnPV2S8moU80CXLve3U8th427Zff6RZv/kxw3iUbhn4f8mOWGzbz5Lpfc9m8t7OZPqNT6nqdvwP8m8VZyCiubmbEwAAAABJRU5ErkJggg==',
                        alt: 'gryffindor',
                      }),
                      ' Gryffindor',
                    ],
                  }),
                  (0, ze.jsxs)('button', {
                    className: 'filter-buttons',
                    onClick: () => {
                      i(n);
                    },
                    children: [
                      (0, ze.jsx)('img', {
                        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAmCAYAAABOFCLqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAxgSURBVHgBnVhpbFzVFf7eNjNvdo8nXrI4DjGxAwHCEiC0tFBUSlqqIkQpUFUFqRSpCEErEKpKJVrKD+jGr0KrqGpVKPyglAJtEJCyhKQhIcFOg50QO57Y8Xgbe/Y3y9t6zhnipihVgGvN9t5995z7ne9851wr1z2xsWomA+GYnoIPFx79NVCDCgUBNQRDDUBXAqh5Zbrr0lUFUS0J3weaXg1Nv0bffZqvgt+DSgg1twLHt+V6VG2D7TXheQ6tUW3N9XXwAkHFhEVz+X6j5FR1RVHIYAi2X4dNbvDvqJqApzigH2iQsSbq0BQNISVCc4NokBM831d8JLQ0GXbg+S4tXILllWgTJjQyqMEQh3kNn/54E67nwqDN5e05ccJQWhtuoABVUVTaubbkSFiNgzaIrkCvOBDUwtBUHaqqQdN0cdJTHfmeNJbRbw9JPU2OA2EtLvNsch7kqAdnad243i5zEvRp+w2YWkSuM7INnk9DTdBCvHNBRGtDVE+2HqCr7IRRNxFx28R43GiDS47omoGInkBACyFldMFRm3QtIHPYiEqbSOqdS+uG1ZigkdSXCUqqAGBI+Pl+Su9iP6GX3QUkCA2HH/Ur6NJWYd6bEliXeT3YsvrbZETD7gNvI6MOwuyMiHGP3I15q1BxCvCKQawIr0TOnUJez4oxDldIDRNPLHpVyJEOzNtTErak1omGWycG2mC4ql5BKKHzG4cqrqaJAxR3v4o2etCj7+VGAUczR5FOpXHN565FOn0r3j86hLHSQaQCnbjgjMuQiBG/PE+Iya/juWN4Y+wFDFlvUKRUQjshSGqKjhQ5UUEeJScnXDP0buGf5ZQlTLq8Ewo1vywZFFESQkx2RifYDzbfxMVtn4VhrMPg4CA2b96MC/1LUK1WMVWYwHuTOzHvTsDKNxEKmvjC2V/BLZvuhLEvgHcrr8LhTPmQ7C6RnMmt6joh1ECVCM/hi+ptqCgW9CBlB8fYVQgy8l5RFfnu0Ks3eTacsI2JuQwC8+3ITI2h1H4cC+VZjJcOIRylLPRs1JwKVEND027g0Dt7cM+mR7Fl/U147+0daBpFyjRPOMgcKTkLlGkGpbcqdmxySiUpEWRUcoD5QrlChAzKQ+0aEUrzkcMElJCCPlyEcCiIcnAcw1adOOMglNQRJEkw3ajoUc1p6VA9YOH9zAFcNLAZKaUbWZTIiAHJLUKJE6buWhRCDYpHaUvXY2qSwleFznCFlTjB6NFS5BZxpuaXYCphQqcJ1dGxoExhon4Q4ViYyFaTlGeCM0lNyhTdb0X7xHUEPMmSUMAko4Q0CR6ns9ihecwTFj12kAdvQlKbnhFkYpTWrK4RSm2NdlL0FiRkYZMcCOeghzRBjQWKxYszxtRiYrzsL7bCrDLUOlbEe2XxfH2e1k3JupzevN28MyNZxNeY1CE1Qn61nFfZ0wDJco3SmnWGlbTsLcpN1oKQFpVPftAliee4s1ZECVouAXVCUlVVuh+QVO6o9GFlZw/Gpg/DjlSkjERIOpg3nOI8gjSPndBoXc7ACqf2iWxivjCMnO9sOElpzgYYgZKbE/hV1ZZFGBHGmkPEdSxM6DRJMwK6iapVxU2Xflc28vbxba0QUKlgKjAqAZJ+hdYNwMQiIcSOsJO8bh1FziZT4G8lOBDX2iW7olprN1yLWNY5xoyg6zcl1jJXXSZywAbUWgi3nXcXkuEU/rHrOWTdUdrih8pBw1RislF2gLOJN1F1SnLPUIItzvAEhp9jb1IhFFIR6ZpuU8jHYshzWuZ91Knycig5k7jK83PBRgy3nHsXUtE0ji9k8FruGRE8y2uJGWuLTmE21aggxQjFqJqzxvDg9cQZyhwnRanMHkvZ9xRxouDMk3NxLNjTxP66kIzDwYRk8XJIX3jhEGXd1y/4DqKRKGbmpvH02GMwErQZKgMpqk8+Wu2FPEPrV6Wqc5fQlNeJUJJRV1eDarHoLsST2jIhlcPxpWxiI4v2DMl+t6R4g5XAKxJ5LansphJF2VlEf/v5iJGCcknYlX0ZuhuQeyW6Z5GqR9WUoFBxitRilCWr+B6PtL5crlfpug+lpBYmqi4js+jOCApMtDo1PCWb0tWlJKRwzdYnULaLUD0NEbSh0JzHfOM4UAngvM7LxJE39r6GKWsMM81jUjyVmoHOuQ0oV4qYtTPCOw4H32tSeeBQceHkUBpEaYdkXI3q8f3Z5tEWsYhwYcQJ4ibaqKjpfhCO4yCutNMnhcUlVW5MwXaoalOYr1h+nWQOOzO8uBdltyBzeRNf67wDBXMKXqghTRY3WyQAgmqc0OIykqCWQuwyb21/XKcA7idhvp69rrpFSWNTj4mBijtPsGukJZakOpObWwImcojIuH71uTLv4Nggcua4tAVVQrDbW4fVnWtRyhHSZIzDy4WSs8Ym3tRpDYtsVejFwyHuFI7VRtSxoWN7GBEmKKdy2cmjaC9QqGoSopKdl11wu1hokuZ4BiFjo9M6Uxzh10huP+pOTRzh332JDVJeOIuYwCJshFqRNIulgDfNRJYM4i6G3o2o9qL67tbx3YVy0QJanV6IyOcTSgvNLO20JlqSUruge0FJ94pNzZTj4/L+a5acGascpCacyZmQPiVGWhUJEVHL1Jb4rU4uRqFhlPLOnNQmDherODfl+fmCt/uXmZ1cNsuFCeulIGVP3akShNQOUEXlVGRpyTdnMV3PUANUEQI7hJDZTKI7vWKpqVqoz8gzFolYzs4iakYRjUaxLLhc1Imzkpv2sGzUFySaIhc+OWYRX7wXaZqttqotHndcWyZxKrLocZPFn6wBXHUZpYBvIuiH0RboWHKkVqMq3tRlLjXIuLr7ZmxcezFyOSquZqtiSz9DkmFLYnSBNx4hVLhuMTLjb+WfaJUlGqOvz2XOumrV9WbE7JSao7QUkbWHhYmJx70rp/K60IVYY56D1V1rZI5lWXAWdVyx+qv4ct83sTLSh9HRUXyQOYR6td4SN7UuDrDhhpydPDkVJJRlyI7OHdi7dfzek9pOIJfP3e8lG9sMErwgXaa8IJlrtYV+Rcet/Xdjwxnny9wjR44s1ZxYLIa+rgEEvRBGhg+hv78f69evx8DAAK7CFwW9selDeHniz5irTUkm8fmLw14lURx7b/rRE2tpJ76MbZ8f7doQv6Kzo6uXU5lyvtVnlEzcffnDaAun8dLwk3j+/T9ikTiysWfzkkPZ8ji6U6vQ29uLQCCAQimPI9lhOHWXykQMyUg7lhtrsWtmm6DDYeOT5mw299q+30zed2Kd/5ZVRmcwf9v6NRuG1FA1XqM+hWX86p4bEY8k8Pt//QIjzd2iNxYdb8rVEiJEVB49yTNRqVRgNar4w87HMBcahaNRWbFU3Nh7Ny7u/4wQPt7oxLxxlNCmTqHu5oxQ8/aT7asn/xh8fiYzvGf8PqtuSXZwj9MV7WkVUaJMebpG/FDg0zlpx97Xl44nHKpgMIhXRv6CSXMIdaUimRiPxHFocmhpXiqRlqJr0+vAjpGfvvz9TOZk+wpOMbb8/Jxfr+pZcQ8fSQe0zbj20hvkeqPREGQMw2iFJ5tFd3f30nNybpqdwK6jr6JoLaInsQ6X9H1e0ny6OInfvvsTQqyJhdrcw3+/Y/iBj9o9pTM8rv3xJX/tOCt6HbeSN/f9AGu7+//n/vjkKPbMbsdMYQo3XnQ7uhIrlxz66OdkbhxPHfoVnSDorHVk/slXHhr61qls/l9naOi3PHTNn5w18zexpvRq56I90gEjaGBkchB5bRpaUJFiV2osolfZgHM6NqND78G6tf3CoaPTH+BwaR/2VbZLkWxktGeee3AHO+J8Umfk/g1bL3yYMumH1PNIe8GD+xBulPiIwU02Cxr/X0YnPQqTWPIJgLnBxFGktdKQz5Yf/+ePjtyJVnd7yqGdxhkMvzC9PdTjuVpYvVILqArXEy5yFTqaco3h37w6t5l8XOWmnht17le4GjctB9NDhXt3PjL+wOlsndYZHpO7C2/Ruen11BrzSlXTkgFCgHsQ6lHFaJBEjBWaTkLSq/B/qfhMtTCbPzYzWPzS/q3ZZz+OnY/lDI/cSOXYxK65Z+NrAqFwNLxJV/lRRQjKDb3rt2qQHE3qDsrZ6u8Ovzp1w+G/5cY+ro3TceaUY9P3VmwMxANPpddFzmJUGiSQXHu4P67ONt6ZPVC+/99Pz7yJTzg+lTMnxrot6W+kN0QfTA9EBhpld1d9uvazNx85tg2fcvwHuli72m/dqRkAAAAASUVORK5CYII=',
                        alt: 'slytherin',
                      }),
                      'Slytherin',
                    ],
                  }),
                  (0, ze.jsxs)('button', {
                    className: 'filter-buttons',
                    onClick: () => {
                      i(r);
                    },
                    children: [
                      (0, ze.jsx)('img', {
                        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAmCAYAAABOFCLqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAvJSURBVHgBnVh7cBT1Hf/s7u3t3eXuktwl5AVJyJM8gISXSXhIYAAVFURQhoK2Th06bWfqWB3a2qdKW62d6dg/lHaq1qJViyCIYi2vWMgIgRACIZBLSO5yuVwul9wr977d7W/3HiQkbdHv5Hu7v318v5/f972harac87PqbA1FUUgyyB8tHeQ1UizdoCDKR+kX5FckJ0kWxPga8lr8nywIwpR1LDzmV0wGITMdByCBoekkEAlE8pyWNcs6RSpxTCgPB0ApNERRHPZMJIrxbVAUNe3aVDB0HEASCE2uxQFRKUvFKX40Kq7ikSVtCIXDGPHqYDZb0TbxjHxXkOQLSWVC6t3JIJJAktckO6SAMGTFyEdyJzqOcn0r1Iogcqh/QkEuyqyIc06aHTvuakVV7gAWzBnCzlX9uLeRCOUn5PdpSpRlSrKLxH2ysnLd8VuhkNzWpDWTU7P7OQWnYaWdS2BoCRCRpuP8eGnbPyBEAygz9MMlVCMiaMgztMx1+VdgdRlw3QxkakXkGwUoqQAu9rDwoyRhOwr5XBuWFPaiueISVlXbcNLUmHLLZBcJfDCqSMaE7BYZCAU+MAi1qhtH2/Kwa20vIjHgbtcf8UnXcrQOrYOeNhGQEyiaxUDLKKFV+uB0UcgyalBkdMLhJMKFGJ5c8jqaa4chkiCKxXjseascBZorGBw3glLmTnGR7KZk5iTjQzLxs+s/xMpKC1TiIKz2MMJhCrPz9ZhLLMQqFQgyVbjiWosuxwKICiN6nYXQaTkig4Y9VCVvSq+JYUmpB2pOQWKKR1vnGNbOt+HB2pNYU3p6WvxIQOhU+iYsI/FHHU3YuHQcj2wwIitTQzKGJrvR42jfY+BYBpySgUqtgz1QiEPXNoNnZhEwKviDAgr1JllGKKrBrz5+hFzjwRFAa5vy8PCqCMrygmg13zUlZlKA6JRl4tYB7wcb6UKHpQAjYxHEBAraNA7n+uYAbCZYlpY5g+qCCiSIF3+GbU2DRCiDE1dnw2jQJ1wOOKMV6LWxsDuCxE0iOrrdaL2eDiN7Y1oQJz2UOIlnlEKpRX0FC49fAcd4DHqdCjqdGouKHUDMLQc5JwyibtYXWDv3GKpyeoliBsGwgPP9pbC7M4GIU1YwSzOMhWVSLKkwQSzk8qcRHRyq5vinWSVeZzCp0kp+I4IjTDHqCruhU+sRiYokgGOoKoxg70MfwDpKozwvgDQNQ1IhJIkgmQBiPSVe2nkRPB8llvgXrlk51JfxclZ5fDEU5qmRrg2jjLPh7bMrcDvJuuPFPWmu+PGqbTaOtenhcNFQcSwCwRh8/hhYKkh2FSExwMLtjaZeiFftRLkm0rINLBYW+6FRRjDqCsOQzmHEGcSIPwfH2gsxHinCTKSQZCSgpQAV6W9gbY0LdRUK0AyD/BwlxtxROcW9foEApIk1hMnbSP3aR4Ow2b3IziKx4gxjTi4HlhGh09BYq5PcxyNy3YFrY8XTwaTOEnVIqkE93hWgTHnosnThwaYgMvQMjJlcQl0cvX00EH84+RIh22iIABZQV2MkYKPIMShJjYmR2zwOnfSiy5qHkLoB3Y5qUkOmYSFuEqbKlAqRK6CFyexGul7yMy33FkhMEPcM+CA1nZs2nqRtDPHOLcrPnO8vQ581LujC1bFbOyS0/i5SIhg1ugZYUKweMxGpU0xsSuclXKhpx+4NFty72I5PW3lYbD5Z8KUeUqGVGQgEwui0zcPpqwaCURoHeBJXURw5nwOTI15Z7YESEme8BBUDQxOkbYTw3PYR7F7fg0xuaBoQkaJ5mmLUHglJchYRBMkyOrT2zsWvD6+ETywm/mbgcgfxyfkMlJJMOnOjEB0jdyEYUZHsiclgeFLuOd1cnHdsQv+wgMVlXrx5ulo2TjBE43BrJp7Zv4ZkmQHBqCrhCXESGnjpgNvECzKI+HAk8XiskhS5IgQDXiwrsUKrkaryUqyuHYV9nMan3c3IZK1YOc8s9yCBAFJxFH7QfJAUSQavtdyDDHUYmjQdPjqjQFWJCkUFepj7e3C6px5B3jCtWfJR34RUK9uTLpKswieYQhibF3chN92Dd87W4EKfEZ6QFj87vA0i78Ge+z5BhiZCLBKVLSNxSY4Pv9i4HwPuMnz/bw8imzPhjQvfxIeneHxrvQMbm2hZ9kxdG2Ksn8mrfqKc4QxrUsNP4qGtVfuhVKqw71QDLthWICgY0WlfgAivwpbKv6C8gId3gjRRku9S6krnrIKksCqEAVsYPZ7laB9eRoJWi47RZliHfVheOYxIyAezd14qPpOAJuytHzNcerFKk7VoF3Vbzbgy2oAvLYvgCucnYgmo1n2E+vwu3L90RM6eV47MR02emQxdIixODdqI9UpyPChOv0l6UQQB7xA8sSL5fbOnkswyDRggx5ksEwuP/oS2nHv+Sz7kDQiJ4I27itzkyZFwVGISnNI8ct3VBIr3oufmOC6bBLgmyOiZKY0IUWTrfCTdabRcDJCADaG/rw+DgUXThvPJIJLraMAmWM88eVaqYL6Au/uonKJkwJaAyHFDQMQBCQlQAjL4FjRWDOJ3J3fhheNPo3a2NDjxchDr0wQMOwX8oW0vXv18BXbf54CBs0+KCXEaqNSXAh/+WMJEx4sN9Zp8IxXAkDmNsoKK2IllRJSqjuIby6/ghWOPYTRYhHVzD2FV2XUZCE0JMqhdq0xozD2Im+FNePHgUjy1ej8MihuyQkXsJjj+5oyAPH0HX58cr6jd8uVlZVrugmQgq2HBlvpWcP4WFBaXo6bIg0FbAGN+LT7o3o0RMmY2l5zCjqZr0KgZeLxh/PCNSkxoH0W14TxWFh6FQnSjtFCPwTED3E4T/m1eg3OObVMABcY7Oy2nti+UdKZ6U9Q/sodVzzomJqb1DI0PStGB9HQd2XkM+1rW49JQNSbcFmxd+D7qlnmQrQ8iEBLJvKwk74j4+XYT6fR7cdkyC2+174bDq8a6suPYutwGtycbOnqAWDBKwoi5BcZ2+uUkhlS7Gut7r1ebu3y1Mi2/WFr7otmwegqwrqIFr5zYAdPobNRnvAcPX4RMTRAH2xeDDV/HvCKKpDZFUjuCIxfm4mTfaqQrLLhqzUXj7C9wwrwFvYNk9Mi+gbc7v0s06lLuiXj7j9vann52GhiJlPqSFi699Ama5qQWDYN6HO+fX4YIW4GHag6T2ZeDyVmOomwf6vPa8UBjSJ51VByDcU8EDZVeeaIT2DnoHJ6PeypPkBQN47JzHQacRtJmMohGdTxoo34nmckecPf+1Z3UT08GY+94acA3eOpZPhaUXxj0FEKhLZHPOVZAU7kZacwoculT2NQwBuuIH5EImU+iPOlf5KshFMPKsk4w3jOYnXYNiytCpFqH5TojpTmlNKbc47UefX7gs+aByfqnTRWeoc8vphdvyiDduSFpTomGvVnYOL8D2xuvoLSAIuMDqS0GFd5tycHCEj/ebKlFY6UTY54YVixksLH+BkxWFu9eup905LSpqRwN7LW07Pzt7bpn/jonVLz67UPanIbNUz7Q+SCyuAF4gyz+/p038cpnq0m/Ssfeh49g174nsG1ZOxbkm/CjAw+R1kCG+lgB0aCYkj2h8c79lpYdu2bSyfw3MO6BQx9qc1dUKNQ5tbegKxAQssBTGSjRnkVHnwrNdV6UGO2wudWgBS9ckQK0DTUhJKRDTOw1CSQ43vneYMuOx5H6l8AdWiZ5v3pz+16wmh/Li9s+LaSC90DZO9i5shuvHr8bZwc3pJRPBiFR2Gd5zXz8vu9h8vj3FcHINGfF6z9VZc5/XsEZZnxeJFUabM40IDLgqA/BkXPPDLU99fv/p4fBHZDXcvQLhtOdUmXUNoNiMqYAkZTStwJ0MkUDVrPHdnzDSPtzB3AHdEdgJAo4zpnHzAcOpGUuUtGsfikBNU15kiRrhH39f/L0vrHVdePPfXeo4s7cdDsVLH25jlbNekedtaT69nsRv/ncxPCZPc4rv2nBV6SvBSZJhopvP6qZ1fhLddbSeXxovDUSNL9obXn8GL4m/Qeomyf8KP9G6AAAAABJRU5ErkJggg==',
                        alt: 'ravenclaw',
                      }),
                      'Ravenclaw',
                    ],
                  }),
                  (0, ze.jsxs)('button', {
                    className: 'filter-buttons',
                    onClick: () => {
                      i(a);
                    },
                    children: [
                      (0, ze.jsx)('img', {
                        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAmCAYAAABOFCLqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAApjSURBVHgBvVh7bJbVGX/e2/f2Ysul3KGlXIqoGwkwQRkQGIEp0/3hFjLdYEMU4xxuOhIjbIm3xbiNoHMmuBgHY5pJwjJYKbQ4GAWLlOtWlBaoUIFCL/byQftd3/fs+T3nfctHqUCyxJPv5LznvZznd37P9XzGgd3T1PBhLtm2Qem0Qa5rUipF5DgmeZ7B9zESmaZBvk9k8Mg/8nxFirtpKkLzPH5IiixLyZhI+mRbfKUUGfx+KuXzqFiG4jWJR/1+kt9zHKKGzxNke56iVDoQxuukWbDvm/yiKcI9j695NcM0Kc0LupbJgiAUS+FbvmZA+JYf8eKePLMC8Gg+gCtsgGRMp3U3LT3HZlOMw7Z451muJcxYFu+ahaIb/KYTAQsGi+RnPHcjSkBnZ2kh2CkEsTiyMSfsnoEbvrDqOEoYwTem3pOAxXd4D/cNWUmR67AWgFDQK1YTs2AblqBWyhCG3IglHyplyoJK3lMUieC5L3Qb8gAj75DnlgXVKv0+xPH2RYt0lSFbmNNqA6BkiplxI6beDasF9oGFLObZNGA7+hpAYCsAYvNzRxb0xV6ysjQzqZRHuHJdW+9cBPvCLBjR9scAWCVuwBjkQibWsZkZMb+0hw9MphC2Y/GL/LUB1TEo09bdcHgeYXU5DAT32eqUzQKhIBumy3MNHBvRdmfJ5iBUeFEqGA2xE9wGM6IZntvKN8RY0SPwIPaoiGPDmEiZenGH5yYzhAVgGfAGdOw8zRYPW3EjhjyLx8GCxzsFu76owld6576HTWoGwRLAmIG6MLdBKECYVtCZEc83hSHfZ1COLUAtyxb2YOSwWdOAGjztbZSWRRmbuCkWh80oMXAj8CxDngEwGMI6sCGAQJgI7MgIjJXkAwCzmYVUWjNmKesqMNuUd0CpYSthDYYM9o/VxKj8wxY69t8oXWy6Qq2tCVZ3ivr3M+nrd2bRoocG0t1TI8KGH7i4dnsSO4Q02wwME+7se9qAtRc5wB0YpCOswOPwvDum6JP/xOj4iagY396qNjpR28Y2l5QOEGl2SairqTlBFxov07byS7TkkWH03DNDRcWplOoJpJiDPRt2AJoszxBdwuoh1PO1UUejisp2tlJTi6K2dkUtrT5daoqLQAhDx3UYnzK7jjlGjwH/eeMF6pdn0fKlBaTDkxKZMGIET9u0oBod9GyxfgN0UXunS+eaptL28gaqrv5MXFxcHsEDCuQRutf6t64TngkibJj/Yd15mjs7j8aPdSQOQc1AhNFMcW7wfB3OgQ5MNTbl09HaufTqa1uoqqrqmsV677q3sN73Mp/pHObRa2sbe2wnndKBT8JKJGJK4jMCdwOglo776JWXf0/t7e09u0dHxA175v3M1nve1/19+7+gin91CSDRhB2EC2gN4d3mq0Tco8bmobT2jfUicOmjj9K8efOova2NysvLqbKyMiNwqR5QmQDDZzcDWrGrnRbMyxZDjkRIpw8mVrITQNkcB06eGUR1dbX0+PLltGTJEiosLKTJU6bQ86tW0foNG2jQ4ME9hhuCgOdgDO9lgukLGK4bLyXFvWE3Otkans05pt221GD4EpLerj3nacWK5bSYgbS2tlJZWRnFurvptrw8CQ6IQRAeMoLrsIcgM4FmMhYCiTAVZ87GxU5QboCVRMLrtM9diHUVjswZnOYQWFdfQMOGjqBHfriMampqqPQfa2jhfJv2H0zR30rbJR7FEe+DRUPBmUAyQfTFEtqcWf2o8qMonTydopLx7MlsN8mE6jC9tKoDTWDm7IXRNLq4mJqaLlLzubX0y6csDlpd9P6mz6i4SNHD3+/fE9gSicR1Qa43Q33ZE9rMe/Ip7zaT9ldHOdDqStBT6owZi6UP48MWDt+fHt9Ht4+LUXPDCzTj7iQvnGL0XZSXZ9LLvxpBd0wwBQT6syuK6KXVxbRwQQHl5zvXgMjNdaioMFfUkckIRocT1JxZ+VQ40qXKqs6ezH38RHeNva2i6eP53yqgIYNtWrkCOWK7lA/IR2gl41yqO92PGi8mOOdoNsYU59F35ruStb85vYBWPj2AOjs9av3C4/oGxVWaSre3UfXhKO3ZlxAA3Wx3aPdOy2dZBt3F+WrDe43U1V1E/fKJLncky8xNm5v2nq7vTvu+JwUSxmQyzXVuimLxFM2e4dArq/OpaKRHuytbRCU/WgSP0uoRFXERnZPj0eginxNjmk6eSvNOfbpzoks/Wz6Spn3jth6G7l/QT5gYU5Qt6ovFFTWcS9CatxoPoj7o+PxCbMeEkpwHHDuovsjXUZA0vbWnEvT2u0104FAb3TNtCM2f6/BCaQkH+nSgKJbwKGJj7tOM6SZ9WuvTlrLLdLahg7q6ksxGLj352HB68L48iWkLv51HO/89lIYMMujgkcSHwAEwdOTIldfnzBzwAGrf7GyieILHLFvwyImBH0ydkk8rfz6MDZkrQmYDpSWhB7UNYjuOJwCHIFo8OsI5aCAb6gA22CwaNZKLNFuXm0g5WS7RO2+OYPV5tHlr8zpJGYGBm9s2Tzk16a68sbro1vUwwCFzI5kixSMu6GKIJIXgjJRELavNU3acTHlilFL3GUoKdOVr9jCPJ/icZGujxff79nee+vETdRMERADGP3w0+py4uBEevKAyLh9tdlHfk6rOslDi82ji2pNrdP0M176cnXQVqA9pWAtsGaZeG0AQ5MLD3taK1t+ELn9Nit34ztd2z501cI6u+nTHCVO7pa5XMSKfgCHYjGPrGhb0oyV459nZpjBmmWGi4eesQq5cOa7o9xDtqw5Ea5Y9dXJSKN/MBFNa2vxYc0syLjWKrevZ0EAxytGDR9fVKgpTiC6RtBpycvQhzgi+kW4ovZahHQIpIBpNd3KY+G6mfCtz8kltV3t2jhmdOD73fjdiBO6ojxRh/QGh8bjXQz9Y0qnBl6SHoy8FNiT6D1jTRbquKrHoH9ddXP3Sb89v/1IwaB9Xd1bPmtl/4JjR7vTwWBouHILDfexOg7y6W6lPzPCeCjagT5b66ExizGcbEq8/s6r+hd6yrwOD9vctzRV3lOTOKBzljsMCcuzQ3ivX4kGBocMrdA7SYzzuB0ypa0aoE+/srmzf9oOltT/pS26fYLCtf+5o3VwyLmf67SXZY8m4ygIYAMCwDsGOcT+Z1Id5FZyFtOtmskq0q7Jj55O/qP8eT1N9CTXoxs3+qGLymuHD3afDQgifpILDulaFPoyF/zZANJ9y5H8X+ZfB0MwcOHTlvcWP1y39MiA3YiZs/rsbL+2Aq44aEZmj/ySg4E8ifd5BtNUBTp8YYchiJ4ENtXek6K8fNK9aufrMs1jvRsJuBkYaR8k97PBHJkzIvjc/z+qvz8gB2kC4ZV2tcUNDPXM2cX79+02L3vrTpfW3IudmaurdRr/5u/G/njwpd1lBgRPYkF4CagHIREIfyA4evvzB8y/W/zQapbZbXfyWmMlondt3tm2NZNFezhCzi0a5A4zg/xc/cPkjxy4fLy1vW/Tiq+fWcA0Wo6+qPfRgweK33yipP7pvstr0l4mHVjwx4mH6P9r/AB2Kku+4fuENAAAAAElFTkSuQmCC',
                        alt: 'hufflepuff',
                      }),
                      'Hufflepuff',
                    ],
                  }),
                ],
              }),
              (0, ze.jsx)(fn, { data: l }),
            ],
          }),
        });
      };
      const bn = function () {
        return (0, ze.jsx)('div', {
          className: 'App',
          children: (0, ze.jsxs)(be, {
            children: [
              (0, ze.jsx)(ge, { path: '/', element: (0, ze.jsx)(_e, {}) }),
              (0, ze.jsx)(ge, {
                path: '/students',
                element: (0, ze.jsx)(pn, {}),
              }),
              (0, ze.jsx)(ge, { path: '/staff', element: (0, ze.jsx)(mn, {}) }),
              (0, ze.jsx)(ge, {
                path: '/characters',
                element: (0, ze.jsx)(vn, {}),
              }),
            ],
          }),
        });
      };
      r.createRoot(document.getElementById('root')).render(
        (0, ze.jsx)(e.StrictMode, {
          children: (0, ze.jsx)(ke, {
            basename: '/genius-space-final-work-html-css-js/build/',
            children: (0, ze.jsx)(bn, {}),
          }),
        }),
      );
    })();
})();
//# sourceMappingURL=main.96eefe13.js.map

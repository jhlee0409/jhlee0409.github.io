(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [318],
  {
    22358: function (e, t, r) {
      "use strict";
      var n = r(61682);
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      t.default = function (e, t) {
        var r = i.default,
          n = {
            loading: function (e) {
              e.error, e.isLoading;
              return e.pastDelay, null;
            },
          };
        e instanceof Promise
          ? (n.loader = function () {
              return e;
            })
          : "function" === typeof e
          ? (n.loader = e)
          : "object" === typeof e && (n = a(a({}, n), e));
        var o = (n = a(a({}, n), t));
        if (o.suspense)
          throw new Error(
            "Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense"
          );
        if (o.suspense) return r(o);
        n.loadableGenerated &&
          delete (n = a(a({}, n), n.loadableGenerated)).loadableGenerated;
        if ("boolean" === typeof n.ssr) {
          if (!n.ssr) return delete n.ssr, s(r, n);
          delete n.ssr;
        }
        return r(n);
      };
      u(r(67294));
      var i = u(r(26907));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
    },
    34213: function (e, t, r) {
      "use strict";
      var n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LoadableContext = void 0);
      var o = (
        (n = r(67294)) && n.__esModule ? n : { default: n }
      ).default.createContext(null);
      t.LoadableContext = o;
    },
    26907: function (e, t, r) {
      "use strict";
      var n = r(2553),
        o = r(62012),
        a = r(61682);
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                a(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        var r =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!r) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (!e) return;
              if ("string" === typeof e) return l(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === r && e.constructor && (r = e.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(e);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return l(e, t);
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          i = !0,
          u = !1;
        return {
          s: function () {
            r = r.call(e);
          },
          n: function () {
            var e = r.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (u = !0), (a = e);
          },
          f: function () {
            try {
              i || null == r.return || r.return();
            } finally {
              if (u) throw a;
            }
          },
        };
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var c,
        d = (c = r(67294)) && c.__esModule ? c : { default: c },
        f = r(67161),
        p = r(34213);
      var y = [],
        h = [],
        m = !1;
      function b(e) {
        var t = e(),
          r = { loading: !0, loaded: null, error: null };
        return (
          (r.promise = t
            .then(function (e) {
              return (r.loading = !1), (r.loaded = e), e;
            })
            .catch(function (e) {
              throw ((r.loading = !1), (r.error = e), e);
            })),
          r
        );
      }
      var v = (function () {
        function e(t, r) {
          n(this, e),
            (this._loadFn = t),
            (this._opts = r),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        return (
          o(e, [
            {
              key: "promise",
              value: function () {
                return this._res.promise;
              },
            },
            {
              key: "retry",
              value: function () {
                var e = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var t = this._res,
                  r = this._opts;
                t.loading &&
                  ("number" === typeof r.delay &&
                    (0 === r.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          e._update({ pastDelay: !0 });
                        }, r.delay))),
                  "number" === typeof r.timeout &&
                    (this._timeout = setTimeout(function () {
                      e._update({ timedOut: !0 });
                    }, r.timeout))),
                  this._res.promise
                    .then(function () {
                      e._update({}), e._clearTimeouts();
                    })
                    .catch(function (t) {
                      e._update({}), e._clearTimeouts();
                    }),
                  this._update({});
              },
            },
            {
              key: "_update",
              value: function (e) {
                (this._state = u(
                  u({}, this._state),
                  {},
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  },
                  e
                )),
                  this._callbacks.forEach(function (e) {
                    return e();
                  });
              },
            },
            {
              key: "_clearTimeouts",
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: "getCurrentValue",
              value: function () {
                return this._state;
              },
            },
            {
              key: "subscribe",
              value: function (e) {
                var t = this;
                return (
                  this._callbacks.add(e),
                  function () {
                    t._callbacks.delete(e);
                  }
                );
              },
            },
          ]),
          e
        );
      })();
      function _(e) {
        return (function (e, t) {
          var r = Object.assign(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              webpack: null,
              modules: null,
              suspense: !1,
            },
            t
          );
          r.suspense && (r.lazy = d.default.lazy(r.loader));
          var n = null;
          function o() {
            if (!n) {
              var t = new v(e, r);
              n = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t),
              };
            }
            return n.promise();
          }
          if (!m && "function" === typeof r.webpack && !r.suspense) {
            var a = r.webpack();
            h.push(function (e) {
              var t,
                r = s(a);
              try {
                for (r.s(); !(t = r.n()).done; ) {
                  var n = t.value;
                  if (-1 !== e.indexOf(n)) return o();
                }
              } catch (i) {
                r.e(i);
              } finally {
                r.f();
              }
            });
          }
          var i = r.suspense
            ? function (e, t) {
                return d.default.createElement(
                  r.lazy,
                  u(u({}, e), {}, { ref: t })
                );
              }
            : function (e, t) {
                o();
                var a = d.default.useContext(p.LoadableContext),
                  i = f.useSubscription(n);
                return (
                  d.default.useImperativeHandle(
                    t,
                    function () {
                      return { retry: n.retry };
                    },
                    []
                  ),
                  a &&
                    Array.isArray(r.modules) &&
                    r.modules.forEach(function (e) {
                      a(e);
                    }),
                  d.default.useMemo(
                    function () {
                      return i.loading || i.error
                        ? d.default.createElement(r.loading, {
                            isLoading: i.loading,
                            pastDelay: i.pastDelay,
                            timedOut: i.timedOut,
                            error: i.error,
                            retry: n.retry,
                          })
                        : i.loaded
                        ? d.default.createElement(
                            (function (e) {
                              return e && e.__esModule ? e.default : e;
                            })(i.loaded),
                            e
                          )
                        : null;
                    },
                    [e, i]
                  )
                );
              };
          return (
            (i.preload = function () {
              return !r.suspense && o();
            }),
            (i.displayName = "LoadableComponent"),
            d.default.forwardRef(i)
          );
        })(b, e);
      }
      function g(e, t) {
        for (var r = []; e.length; ) {
          var n = e.pop();
          r.push(n(t));
        }
        return Promise.all(r).then(function () {
          if (e.length) return g(e, t);
        });
      }
      (_.preloadAll = function () {
        return new Promise(function (e, t) {
          g(y).then(e, t);
        });
      }),
        (_.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (t) {
            var r = function () {
              return (m = !0), t();
            };
            g(h, e).then(r, r);
          });
        }),
        (window.__NEXT_PRELOADREADY = _.preloadReady);
      var O = _;
      t.default = O;
    },
    33053: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return s;
          },
        });
      var n = r(5152),
        o = r(11163),
        a = r(72254),
        i = r(85893),
        u = (0, n.default)(
          function () {
            return r.e(579).then(r.bind(r, 61579));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [61579];
              },
              modules: [
                "[categoryId]\\index.page.tsx -> @/components/article-list",
              ],
            },
          }
        ),
        s = !0;
      t.default = function (e) {
        var t = e.data,
          r = (0, o.useRouter)(),
          n = r.query.categoryId;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(a.Z, { title: n.toUpperCase(), url: r.asPath }),
            (0, i.jsx)(u, { data: t }),
          ],
        });
      };
    },
    72254: function (e, t, r) {
      "use strict";
      var n = r(9008),
        o = r(11163),
        a = r(85893),
        i = "Le Jack";
      t.Z = function (e) {
        var t = e.title,
          r = void 0 === t ? "" : t,
          u = e.description,
          s = (e.url, e.image),
          l = (0, o.useRouter)();
        return (0, a.jsxs)(n.default, {
          children: [
            (0, a.jsx)("title", {
              children: "".concat(i, " ").concat(r ? ": ".concat(r) : ""),
            }),
            (0, a.jsx)("meta", {
              name: "description",
              content:
                "\ub974\uc7ad " + (u || Object.values(l.query).join(", ")),
            }),
            (0, a.jsx)("meta", {
              name: "viewport",
              content: "initial-scale=1.0, width=device-width",
            }),
            (0, a.jsx)("meta", {
              property: "og:title",
              content: "".concat(i, " ").concat(r ? ": ".concat(r) : ""),
            }),
            (0, a.jsx)("meta", { property: "og:type", content: "website" }),
            (0, a.jsx)("meta", {
              property: "og:url",
              content: "https://jhlee0409.github.io",
            }),
            (0, a.jsx)("meta", {
              property: "og:image",
              content: s || "/assets/default-image.png",
            }),
            (0, a.jsx)("meta", {
              property: "og:article:author",
              content: "Jack",
            }),
            (0, a.jsx)("meta", { property: "og:image:width", content: "1200" }),
            (0, a.jsx)("meta", { property: "og:image:height", content: "630" }),
          ],
        });
      };
    },
    67601: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/[categoryId]",
        function () {
          return r(33053);
        },
      ]);
    },
    5152: function (e, t, r) {
      e.exports = r(22358);
    },
    9008: function (e, t, r) {
      e.exports = r(50630);
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 67601), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);

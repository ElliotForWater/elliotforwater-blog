_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [5],
  {
    0: function (e, t, n) {
      n('74v/'), (e.exports = n('nOHt'))
    },
    '74v/': function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n('hUgY')
        },
      ])
    },
    fnl6: function (e, t, n) {},
    hUgY: function (e, t, n) {
      'use strict'
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      n.r(t)
      var o = n('nKUr')
      n('q1tI'), n('fnl6'), n('ujgU')
      function c(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      t.default = function (e) {
        var t = e.Component,
          n = e.pageProps
        return Object(o.jsx)(
          t,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? c(Object(n), !0).forEach(function (t) {
                    r(e, t, n[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : c(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                  })
            }
            return e
          })({}, n)
        )
      }
    },
    ujgU: function (e, t, n) {},
  },
  [[0, 0, 2, 1]],
])

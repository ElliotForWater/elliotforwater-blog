;(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [3],
  {
    '/0+H': function (e, t, n) {
      'use strict'
      ;(t.__esModule = !0),
        (t.isInAmpMode = o),
        (t.useAmp = function () {
          return o(a.default.useContext(i.AmpStateContext))
        })
      var r,
        a = (r = n('q1tI')) && r.__esModule ? r : { default: r },
        i = n('lwAK')
      function o() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          a = void 0 !== r && r,
          i = e.hasQuery,
          o = void 0 !== i && i
        return n || (a && o)
      }
    },
    '20a2': function (e, t, n) {
      e.exports = n('nOHt')
    },
    '3niX': function (e, t, n) {
      'use strict'
      ;(t.__esModule = !0),
        (t.flush = function () {
          var e = i.cssRules()
          return i.flush(), e
        }),
        (t.default = void 0)
      var r,
        a = n('q1tI')
      var i = new ((r = n('SevZ')) && r.__esModule ? r : { default: r }).default(),
        o = (function (e) {
          var t, n
          function r(t) {
            var n
            return ((n = e.call(this, t) || this).prevProps = {}), n
          }
          ;(n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (r.dynamic = function (e) {
              return e
                .map(function (e) {
                  var t = e[0],
                    n = e[1]
                  return i.computeId(t, n)
                })
                .join(' ')
            })
          var a = r.prototype
          return (
            (a.shouldComponentUpdate = function (e) {
              return this.props.id !== e.id || String(this.props.dynamic) !== String(e.dynamic)
            }),
            (a.componentWillUnmount = function () {
              i.remove(this.props)
            }),
            (a.render = function () {
              return (
                this.shouldComponentUpdate(this.prevProps) &&
                  (this.prevProps.id && i.remove(this.prevProps), i.add(this.props), (this.prevProps = this.props)),
                null
              )
            }),
            r
          )
        })(a.Component)
      t.default = o
    },
    '5fIB': function (e, t, n) {
      var r = n('7eYB')
      e.exports = function (e) {
        if (Array.isArray(e)) return r(e)
      }
    },
    '8Ila': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var r = {
        site_name: 'Elliot for Water',
        title: 'Elliot For Water Blog',
        description: 'Articles and update about Elliot for Water and water issue in the world',
        url: 'https://elliotforwater.com',
        locale: 'en',
        author: 'Elliot For Water',
        pagination_size: 6,
        post_fields: ['title', 'description', 'date', 'image', 'tags', 'slug'],
      }
    },
    '8Kt/': function (e, t, n) {
      'use strict'
      n('oI91')
      ;(t.__esModule = !0), (t.defaultHead = l), (t.default = void 0)
      var r,
        a = (function (e) {
          if (e && e.__esModule) return e
          if (null === e || ('object' !== typeof e && 'function' !== typeof e)) return { default: e }
          var t = u()
          if (t && t.has(e)) return t.get(e)
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var i = r ? Object.getOwnPropertyDescriptor(e, a) : null
              i && (i.get || i.set) ? Object.defineProperty(n, a, i) : (n[a] = e[a])
            }
          ;(n.default = e), t && t.set(e, n)
          return n
        })(n('q1tI')),
        i = (r = n('Xuae')) && r.__esModule ? r : { default: r },
        o = n('lwAK'),
        s = n('FYa8'),
        c = n('/0+H')
      function u() {
        if ('function' !== typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (u = function () {
            return e
          }),
          e
        )
      }
      function l() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [a.default.createElement('meta', { charSet: 'utf-8' })]
        return e || t.push(a.default.createElement('meta', { name: 'viewport', content: 'width=device-width' })), t
      }
      function d(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === a.default.Fragment
          ? e.concat(
              a.default.Children.toArray(t.props.children).reduce(function (e, t) {
                return 'string' === typeof t || 'number' === typeof t ? e : e.concat(t)
              }, [])
            )
          : e.concat(t)
      }
      var h = ['name', 'httpEquiv', 'charSet', 'itemProp']
      function f(e, t) {
        return e
          .reduce(function (e, t) {
            var n = a.default.Children.toArray(t.props.children)
            return e.concat(n)
          }, [])
          .reduce(d, [])
          .reverse()
          .concat(l(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {}
              return function (a) {
                var i = !0,
                  o = !1
                if (a.key && 'number' !== typeof a.key && a.key.indexOf('$') > 0) {
                  o = !0
                  var s = a.key.slice(a.key.indexOf('$') + 1)
                  e.has(s) ? (i = !1) : e.add(s)
                }
                switch (a.type) {
                  case 'title':
                  case 'base':
                    t.has(a.type) ? (i = !1) : t.add(a.type)
                    break
                  case 'meta':
                    for (var c = 0, u = h.length; c < u; c++) {
                      var l = h[c]
                      if (a.props.hasOwnProperty(l))
                        if ('charSet' === l) n.has(l) ? (i = !1) : n.add(l)
                        else {
                          var d = a.props[l],
                            f = r[l] || new Set()
                          ;('name' === l && o) || !f.has(d) ? (f.add(d), (r[l] = f)) : (i = !1)
                        }
                    }
                }
                return i
              }
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t
            return a.default.cloneElement(e, { key: n })
          })
      }
      function m(e) {
        var t = e.children,
          n = (0, a.useContext)(o.AmpStateContext),
          r = (0, a.useContext)(s.HeadManagerContext)
        return a.default.createElement(
          i.default,
          { reduceComponentsToState: f, headManager: r, inAmpMode: (0, c.isInAmpMode)(n) },
          t
        )
      }
      m.rewind = function () {}
      var p = m
      t.default = p
    },
    '8oxB': function (e, t) {
      var n,
        r,
        a = (e.exports = {})
      function i() {
        throw new Error('setTimeout has not been defined')
      }
      function o() {
        throw new Error('clearTimeout has not been defined')
      }
      function s(e) {
        if (n === setTimeout) return setTimeout(e, 0)
        if ((n === i || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0)
        try {
          return n(e, 0)
        } catch (t) {
          try {
            return n.call(null, e, 0)
          } catch (t) {
            return n.call(this, e, 0)
          }
        }
      }
      !(function () {
        try {
          n = 'function' === typeof setTimeout ? setTimeout : i
        } catch (e) {
          n = i
        }
        try {
          r = 'function' === typeof clearTimeout ? clearTimeout : o
        } catch (e) {
          r = o
        }
      })()
      var c,
        u = [],
        l = !1,
        d = -1
      function h() {
        l && c && ((l = !1), c.length ? (u = c.concat(u)) : (d = -1), u.length && f())
      }
      function f() {
        if (!l) {
          var e = s(h)
          l = !0
          for (var t = u.length; t; ) {
            for (c = u, u = []; ++d < t; ) c && c[d].run()
            ;(d = -1), (t = u.length)
          }
          ;(c = null),
            (l = !1),
            (function (e) {
              if (r === clearTimeout) return clearTimeout(e)
              if ((r === o || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e)
              try {
                r(e)
              } catch (t) {
                try {
                  return r.call(null, e)
                } catch (t) {
                  return r.call(this, e)
                }
              }
            })(e)
        }
      }
      function m(e, t) {
        ;(this.fun = e), (this.array = t)
      }
      function p() {}
      ;(a.nextTick = function (e) {
        var t = new Array(arguments.length - 1)
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
        u.push(new m(e, t)), 1 !== u.length || l || s(f)
      }),
        (m.prototype.run = function () {
          this.fun.apply(null, this.array)
        }),
        (a.title = 'browser'),
        (a.browser = !0),
        (a.env = {}),
        (a.argv = []),
        (a.version = ''),
        (a.versions = {}),
        (a.on = p),
        (a.addListener = p),
        (a.once = p),
        (a.off = p),
        (a.removeListener = p),
        (a.removeAllListeners = p),
        (a.emit = p),
        (a.prependListener = p),
        (a.prependOnceListener = p),
        (a.listeners = function (e) {
          return []
        }),
        (a.binding = function (e) {
          throw new Error('process.binding is not supported')
        }),
        (a.cwd = function () {
          return '/'
        }),
        (a.chdir = function (e) {
          throw new Error('process.chdir is not supported')
        }),
        (a.umask = function () {
          return 0
        })
    },
    '9kyW': function (e, t, n) {
      'use strict'
      e.exports = function (e) {
        for (var t = 5381, n = e.length; n; ) t = (33 * t) ^ e.charCodeAt(--n)
        return t >>> 0
      }
    },
    FYFW: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      })
      var r = n('nKUr'),
        a = (n('q1tI'), n('YFqc')),
        i = n.n(a),
        o = n('8Ila'),
        s = n('MX0m'),
        c = n.n(s),
        u = function () {
          return Object(r.jsxs)('div', {
            className: 'jsx-3010718787 flex flex-wrap justify-center sm:justify-end',
            children: [
              Object(r.jsx)('a', {
                href: '',
                className: 'jsx-3010718787',
                children: Object(r.jsx)('svg', {
                  viewBox: '0 0 24 24',
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: 'jsx-3010718787',
                  children: Object(r.jsx)('path', {
                    d:
                      'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
                    className: 'jsx-3010718787',
                  }),
                }),
              }),
              Object(r.jsx)('a', {
                href: '',
                className: 'jsx-3010718787',
                children: Object(r.jsx)('svg', {
                  viewBox: '0 0 24 24',
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: 'jsx-3010718787',
                  children: Object(r.jsx)('path', {
                    d:
                      'M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z',
                    className: 'jsx-3010718787',
                  }),
                }),
              }),
              Object(r.jsx)('a', {
                href: '',
                className: 'jsx-3010718787',
                children: Object(r.jsx)('svg', {
                  viewBox: '0 0 24 24',
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: 'jsx-3010718787',
                  children: Object(r.jsx)('path', {
                    d:
                      'M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z',
                    className: 'jsx-3010718787',
                  }),
                }),
              }),
              Object(r.jsx)('a', {
                href: '',
                className: 'jsx-3010718787',
                children: Object(r.jsx)('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  viewBox: '0 0 24 24',
                  className: 'jsx-3010718787',
                  children: Object(r.jsx)('path', {
                    d:
                      'M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z',
                    className: 'jsx-3010718787',
                  }),
                }),
              }),
              Object(r.jsx)('a', {
                href: '',
                className: 'jsx-3010718787',
                children: Object(r.jsx)('svg', {
                  viewBox: '0 0 24 24',
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: 'jsx-3010718787',
                  children: Object(r.jsx)('path', {
                    d:
                      'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z',
                    className: 'jsx-3010718787',
                  }),
                }),
              }),
              Object(r.jsx)('a', {
                href: '',
                className: 'jsx-3010718787',
                children: Object(r.jsx)('svg', {
                  viewBox: '0 0 24 24',
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: 'jsx-3010718787',
                  children: Object(r.jsx)('path', {
                    d:
                      'M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.28 10.28 0 004.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4a10.161 10.161 0 006.29 2.166c1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248a65.473 65.473 0 00-3.8-5.928 10.275 10.275 0 00-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702A10.19 10.19 0 0012 1.764c-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z',
                    className: 'jsx-3010718787',
                  }),
                }),
              }),
              Object(r.jsx)('a', {
                href: '',
                className: 'jsx-3010718787',
                children: Object(r.jsx)('svg', {
                  viewBox: '0 0 24 24',
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: 'jsx-3010718787',
                  children: Object(r.jsx)('path', {
                    d:
                      'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
                    className: 'jsx-3010718787',
                  }),
                }),
              }),
              Object(r.jsx)('a', {
                href: '',
                className: 'jsx-3010718787',
                children: Object(r.jsx)('svg', {
                  viewBox: '0 0 24 24',
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: 'jsx-3010718787',
                  children: Object(r.jsx)('path', {
                    d:
                      'M11.585 5.267c1.834 0 3.558.811 4.824 2.08v.004c0-.609.41-1.068.979-1.068h.145c.891 0 1.073.842 1.073 1.109l.005 9.475c-.063.621.64.941 1.029.543 1.521-1.564 3.342-8.038-.946-11.79-3.996-3.497-9.357-2.921-12.209-.955-3.031 2.091-4.971 6.718-3.086 11.064 2.054 4.74 7.931 6.152 11.424 4.744 1.769-.715 2.586 1.676.749 2.457-2.776 1.184-10.502 1.064-14.11-5.188C-.977 13.521-.847 6.093 5.62 2.245 10.567-.698 17.09.117 21.022 4.224c4.111 4.294 3.872 12.334-.139 15.461-1.816 1.42-4.516.037-4.498-2.031l-.019-.678c-1.265 1.256-2.948 1.988-4.782 1.988-3.625 0-6.813-3.189-6.813-6.812 0-3.659 3.189-6.885 6.814-6.885zm4.561 6.623c-.137-2.653-2.106-4.249-4.484-4.249h-.09c-2.745 0-4.268 2.159-4.268 4.61 0 2.747 1.842 4.481 4.256 4.481 2.693 0 4.464-1.973 4.592-4.306l-.006-.536z',
                    className: 'jsx-3010718787',
                  }),
                }),
              }),
              Object(r.jsx)('a', {
                href: '',
                className: 'jsx-3010718787',
                children: Object(r.jsx)('svg', {
                  viewBox: '0 0 24 24',
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: 'jsx-3010718787',
                  children: Object(r.jsx)('path', {
                    d:
                      'M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415a3.3 3.3 0 013.293 3.295A3.303 3.303 0 013.283 24C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z',
                    className: 'jsx-3010718787',
                  }),
                }),
              }),
              Object(r.jsx)(c.a, {
                id: '3010718787',
                children: [
                  'a.jsx-3010718787:not(:last-child){margin-right:0.75rem;}',
                  'a.jsx-3010718787{--tw-text-opacity:1;color:rgba(203,213,224,var(--tw-text-opacity));}',
                  'a.jsx-3010718787:hover{--tw-text-opacity:1;color:rgba(45,55,72,var(--tw-text-opacity));}',
                  'svg.jsx-3010718787{height:1.25rem;width:1.25rem;fill:currentColor;}',
                ],
              }),
            ],
          })
        },
        l = function () {
          return Object(r.jsxs)('footer', {
            className:
              'max-w-screen-md px-3 py-4 mx-auto text-gray-500 text-sm grid grid-cols-1 gap-y-3 sm:grid-cols-2',
            children: [
              Object(r.jsx)('div', {
                className: 'text-center sm:text-left',
                children: '\xa9 Copyright '.concat(new Date().getFullYear(), ' ').concat(o.a.site_name),
              }),
              Object(r.jsx)(u, {}),
            ],
          })
        },
        d = function (e) {
          return Object(r.jsxs)('div', {
            className: 'jsx-2986487854 max-w-screen-xl flex flex-wrap justify-between items-center py-6 px-3 mx-auto',
            children: [
              Object(r.jsx)('div', {
                className: 'jsx-2986487854 font-bold text-2xl text-gray-800',
                children: Object(r.jsx)(i.a, {
                  href: '/',
                  children: Object(r.jsxs)('a', {
                    className: 'jsx-2986487854 flex items-center',
                    children: [
                      Object(r.jsxs)('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: '36',
                        height: '36',
                        viewBox: '0 0 24 24',
                        strokeWidth: '2',
                        fill: 'none',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        className: 'jsx-2986487854 text-primary stroke-current mr-1',
                        children: [
                          Object(r.jsx)('path', { d: 'M0 0h24v24H0z', stroke: 'none', className: 'jsx-2986487854' }),
                          Object(r.jsx)('path', {
                            d: 'M12 4L4 8l8 4 8-4-8-4M4 12l8 4 8-4M4 16l8 4 8-4',
                            className: 'jsx-2986487854',
                          }),
                        ],
                      }),
                      o.a.site_name,
                    ],
                  }),
                }),
              }),
              Object(r.jsx)('nav', {
                className: 'jsx-2986487854 navbar',
                children: Object(r.jsx)('ul', {
                  className: 'jsx-2986487854 flex flex-wrap items-center font-extrabold',
                  children: e.children,
                }),
              }),
              Object(r.jsx)(c.a, {
                id: '2986487854',
                children: [
                  '.navbar.jsx-2986487854 li:not(:last-child){margin-right:0.75rem;}',
                  '.navbar.jsx-2986487854 a{--tw-text-opacity:1;color:rgba(45,55,72,var(--tw-text-opacity));}',
                  '.navbar.jsx-2986487854 a:hover{border-bottom-width:2px;--tw-border-opacity:1;border-color:rgba(3,169,244,var(--tw-border-opacity));}',
                ],
              }),
            ],
          })
        },
        h = function (e) {
          return Object(r.jsxs)('div', {
            className: 'antialiased w-full text-gray-700',
            children: [
              e.meta,
              Object(r.jsxs)(d, {
                children: [
                  Object(r.jsx)('li', {
                    children: Object(r.jsx)(i.a, { href: '/', children: Object(r.jsx)('a', { children: 'Home' }) }),
                  }),
                  Object(r.jsx)('li', {
                    children: Object(r.jsx)(i.a, { href: '/', children: Object(r.jsx)('a', { children: 'Projects' }) }),
                  }),
                  Object(r.jsx)('li', {
                    children: Object(r.jsx)(i.a, { href: '/', children: Object(r.jsx)('a', { children: 'About' }) }),
                  }),
                ],
              }),
              e.hero,
              e.children,
              Object(r.jsx)(l, {}),
            ],
          })
        }
    },
    MX0m: function (e, t, n) {
      e.exports = n('3niX')
    },
    NmYn: function (e, t, n) {
      var r
      ;(r = function () {
        var e = JSON.parse(
            '{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xa2":"cent","\xa3":"pound","\xa4":"currency","\xa5":"yen","\xa9":"(c)","\xaa":"a","\xae":"(r)","\xba":"o","\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xc6":"AE","\xc7":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xde":"TH","\xdf":"ss","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xe6":"ae","\xe7":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xfe":"th","\xff":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u010c":"C","\u010d":"c","\u010e":"D","\u010f":"d","\u0110":"DJ","\u0111":"dj","\u0112":"E","\u0113":"e","\u0116":"E","\u0117":"e","\u0118":"e","\u0119":"e","\u011a":"E","\u011b":"e","\u011e":"G","\u011f":"g","\u0122":"G","\u0123":"g","\u0128":"I","\u0129":"i","\u012a":"i","\u012b":"i","\u012e":"I","\u012f":"i","\u0130":"I","\u0131":"i","\u0136":"k","\u0137":"k","\u013b":"L","\u013c":"l","\u013d":"L","\u013e":"l","\u0141":"L","\u0142":"l","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u014c":"O","\u014d":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","\u0154":"R","\u0155":"r","\u0158":"R","\u0159":"r","\u015a":"S","\u015b":"s","\u015e":"S","\u015f":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u0164":"T","\u0165":"t","\u0168":"U","\u0169":"u","\u016a":"u","\u016b":"u","\u016e":"U","\u016f":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017a":"z","\u017b":"Z","\u017c":"z","\u017d":"Z","\u017e":"z","\u018f":"E","\u0192":"f","\u01a0":"O","\u01a1":"o","\u01af":"U","\u01b0":"u","\u01c8":"LJ","\u01c9":"lj","\u01cb":"NJ","\u01cc":"nj","\u0218":"S","\u0219":"s","\u021a":"T","\u021b":"t","\u0259":"e","\u02da":"o","\u0386":"A","\u0388":"E","\u0389":"H","\u038a":"I","\u038c":"O","\u038e":"Y","\u038f":"W","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"H","\u0398":"8","\u0399":"I","\u039a":"K","\u039b":"L","\u039c":"M","\u039d":"N","\u039e":"3","\u039f":"O","\u03a0":"P","\u03a1":"R","\u03a3":"S","\u03a4":"T","\u03a5":"Y","\u03a6":"F","\u03a7":"X","\u03a8":"PS","\u03a9":"W","\u03aa":"I","\u03ab":"Y","\u03ac":"a","\u03ad":"e","\u03ae":"h","\u03af":"i","\u03b0":"y","\u03b1":"a","\u03b2":"b","\u03b3":"g","\u03b4":"d","\u03b5":"e","\u03b6":"z","\u03b7":"h","\u03b8":"8","\u03b9":"i","\u03ba":"k","\u03bb":"l","\u03bc":"m","\u03bd":"n","\u03be":"3","\u03bf":"o","\u03c0":"p","\u03c1":"r","\u03c2":"s","\u03c3":"s","\u03c4":"t","\u03c5":"y","\u03c6":"f","\u03c7":"x","\u03c8":"ps","\u03c9":"w","\u03ca":"i","\u03cb":"y","\u03cc":"o","\u03cd":"y","\u03ce":"w","\u0401":"Yo","\u0402":"DJ","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0408":"J","\u0409":"LJ","\u040a":"NJ","\u040b":"C","\u040f":"DZ","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"J","\u041a":"K","\u041b":"L","\u041c":"M","\u041d":"N","\u041e":"O","\u041f":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042a":"U","\u042b":"Y","\u042c":"","\u042d":"E","\u042e":"Yu","\u042f":"Ya","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"j","\u043a":"k","\u043b":"l","\u043c":"m","\u043d":"n","\u043e":"o","\u043f":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044a":"u","\u044b":"y","\u044c":"","\u044d":"e","\u044e":"yu","\u044f":"ya","\u0451":"yo","\u0452":"dj","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0458":"j","\u0459":"lj","\u045a":"nj","\u045b":"c","\u045d":"u","\u045f":"dz","\u0490":"G","\u0491":"g","\u0492":"GH","\u0493":"gh","\u049a":"KH","\u049b":"kh","\u04a2":"NG","\u04a3":"ng","\u04ae":"UE","\u04af":"ue","\u04b0":"U","\u04b1":"u","\u04ba":"H","\u04bb":"h","\u04d8":"AE","\u04d9":"ae","\u04e8":"OE","\u04e9":"oe","\u0e3f":"baht","\u10d0":"a","\u10d1":"b","\u10d2":"g","\u10d3":"d","\u10d4":"e","\u10d5":"v","\u10d6":"z","\u10d7":"t","\u10d8":"i","\u10d9":"k","\u10da":"l","\u10db":"m","\u10dc":"n","\u10dd":"o","\u10de":"p","\u10df":"zh","\u10e0":"r","\u10e1":"s","\u10e2":"t","\u10e3":"u","\u10e4":"f","\u10e5":"k","\u10e6":"gh","\u10e7":"q","\u10e8":"sh","\u10e9":"ch","\u10ea":"ts","\u10eb":"dz","\u10ec":"ts","\u10ed":"ch","\u10ee":"kh","\u10ef":"j","\u10f0":"h","\u1e80":"W","\u1e81":"w","\u1e82":"W","\u1e83":"w","\u1e84":"W","\u1e85":"w","\u1e9e":"SS","\u1ea0":"A","\u1ea1":"a","\u1ea2":"A","\u1ea3":"a","\u1ea4":"A","\u1ea5":"a","\u1ea6":"A","\u1ea7":"a","\u1ea8":"A","\u1ea9":"a","\u1eaa":"A","\u1eab":"a","\u1eac":"A","\u1ead":"a","\u1eae":"A","\u1eaf":"a","\u1eb0":"A","\u1eb1":"a","\u1eb2":"A","\u1eb3":"a","\u1eb4":"A","\u1eb5":"a","\u1eb6":"A","\u1eb7":"a","\u1eb8":"E","\u1eb9":"e","\u1eba":"E","\u1ebb":"e","\u1ebc":"E","\u1ebd":"e","\u1ebe":"E","\u1ebf":"e","\u1ec0":"E","\u1ec1":"e","\u1ec2":"E","\u1ec3":"e","\u1ec4":"E","\u1ec5":"e","\u1ec6":"E","\u1ec7":"e","\u1ec8":"I","\u1ec9":"i","\u1eca":"I","\u1ecb":"i","\u1ecc":"O","\u1ecd":"o","\u1ece":"O","\u1ecf":"o","\u1ed0":"O","\u1ed1":"o","\u1ed2":"O","\u1ed3":"o","\u1ed4":"O","\u1ed5":"o","\u1ed6":"O","\u1ed7":"o","\u1ed8":"O","\u1ed9":"o","\u1eda":"O","\u1edb":"o","\u1edc":"O","\u1edd":"o","\u1ede":"O","\u1edf":"o","\u1ee0":"O","\u1ee1":"o","\u1ee2":"O","\u1ee3":"o","\u1ee4":"U","\u1ee5":"u","\u1ee6":"U","\u1ee7":"u","\u1ee8":"U","\u1ee9":"u","\u1eea":"U","\u1eeb":"u","\u1eec":"U","\u1eed":"u","\u1eee":"U","\u1eef":"u","\u1ef0":"U","\u1ef1":"u","\u1ef2":"Y","\u1ef3":"y","\u1ef4":"Y","\u1ef5":"y","\u1ef6":"Y","\u1ef7":"y","\u1ef8":"Y","\u1ef9":"y","\u2018":"\'","\u2019":"\'","\u201c":"\\"","\u201d":"\\"","\u2020":"+","\u2022":"*","\u2026":"...","\u20a0":"ecu","\u20a2":"cruzeiro","\u20a3":"french franc","\u20a4":"lira","\u20a5":"mill","\u20a6":"naira","\u20a7":"peseta","\u20a8":"rupee","\u20a9":"won","\u20aa":"new shequel","\u20ab":"dong","\u20ac":"euro","\u20ad":"kip","\u20ae":"tugrik","\u20af":"drachma","\u20b0":"penny","\u20b1":"peso","\u20b2":"guarani","\u20b3":"austral","\u20b4":"hryvnia","\u20b5":"cedi","\u20b8":"kazakhstani tenge","\u20b9":"indian rupee","\u20ba":"turkish lira","\u20bd":"russian ruble","\u20bf":"bitcoin","\u2120":"sm","\u2122":"tm","\u2202":"d","\u2206":"delta","\u2211":"sum","\u221e":"infinity","\u2665":"love","\u5143":"yuan","\u5186":"yen","\ufdfc":"rial"}'
          ),
          t = JSON.parse(
            '{"de":{"\xc4":"AE","\xe4":"ae","\xd6":"OE","\xf6":"oe","\xdc":"UE","\xfc":"ue","%":"prozent","&":"und","|":"oder","\u2211":"summe","\u221e":"unendlich","\u2665":"liebe"},"vi":{"\u0110":"D","\u0111":"d"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xa2":"centime","\xa3":"livre","\xa4":"devise","\u20a3":"franc","\u2211":"somme","\u221e":"infini","\u2665":"amour"}}'
          )
        function n(n, r) {
          if ('string' !== typeof n) throw new Error('slugify: string argument expected')
          var a = t[(r = 'string' === typeof r ? { replacement: r } : r || {}).locale] || {},
            i = void 0 === r.replacement ? '-' : r.replacement,
            o = n
              .normalize()
              .split('')
              .reduce(function (t, n) {
                return t + (a[n] || e[n] || n).replace(r.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, '')
              }, '')
              .trim()
              .replace(new RegExp('[\\s' + i + ']+', 'g'), i)
          return (
            r.lower && (o = o.toLowerCase()),
            r.strict &&
              (o = o
                .replace(new RegExp('[^a-zA-Z0-9' + i + ']', 'g'), '')
                .replace(new RegExp('[\\s' + i + ']+', 'g'), i)),
            o
          )
        }
        return (
          (n.extend = function (t) {
            for (var n in t) e[n] = t[n]
          }),
          n
        )
      }),
        (e.exports = r()),
        (e.exports.default = r())
    },
    SevZ: function (e, t, n) {
      'use strict'
      ;(t.__esModule = !0), (t.default = void 0)
      var r = i(n('9kyW')),
        a = i(n('bVZc'))
      function i(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var o = (function () {
        function e(e) {
          var t = void 0 === e ? {} : e,
            n = t.styleSheet,
            r = void 0 === n ? null : n,
            i = t.optimizeForSpeed,
            o = void 0 !== i && i,
            s = t.isBrowser,
            c = void 0 === s ? 'undefined' !== typeof window : s
          ;(this._sheet = r || new a.default({ name: 'styled-jsx', optimizeForSpeed: o })),
            this._sheet.inject(),
            r &&
              'boolean' === typeof o &&
              (this._sheet.setOptimizeForSpeed(o), (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
            (this._isBrowser = c),
            (this._fromServer = void 0),
            (this._indices = {}),
            (this._instancesCounts = {}),
            (this.computeId = this.createComputeId()),
            (this.computeSelector = this.createComputeSelector())
        }
        var t = e.prototype
        return (
          (t.add = function (e) {
            var t = this
            void 0 === this._optimizeForSpeed &&
              ((this._optimizeForSpeed = Array.isArray(e.children)),
              this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              this._isBrowser &&
                !this._fromServer &&
                ((this._fromServer = this.selectFromServer()),
                (this._instancesCounts = Object.keys(this._fromServer).reduce(function (e, t) {
                  return (e[t] = 0), e
                }, {})))
            var n = this.getIdAndRules(e),
              r = n.styleId,
              a = n.rules
            if (r in this._instancesCounts) this._instancesCounts[r] += 1
            else {
              var i = a
                .map(function (e) {
                  return t._sheet.insertRule(e)
                })
                .filter(function (e) {
                  return -1 !== e
                })
              ;(this._indices[r] = i), (this._instancesCounts[r] = 1)
            }
          }),
          (t.remove = function (e) {
            var t = this,
              n = this.getIdAndRules(e).styleId
            if (
              ((function (e, t) {
                if (!e) throw new Error('StyleSheetRegistry: ' + t + '.')
              })(n in this._instancesCounts, 'styleId: `' + n + '` not found'),
              (this._instancesCounts[n] -= 1),
              this._instancesCounts[n] < 1)
            ) {
              var r = this._fromServer && this._fromServer[n]
              r
                ? (r.parentNode.removeChild(r), delete this._fromServer[n])
                : (this._indices[n].forEach(function (e) {
                    return t._sheet.deleteRule(e)
                  }),
                  delete this._indices[n]),
                delete this._instancesCounts[n]
            }
          }),
          (t.update = function (e, t) {
            this.add(t), this.remove(e)
          }),
          (t.flush = function () {
            this._sheet.flush(),
              this._sheet.inject(),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {}),
              (this.computeId = this.createComputeId()),
              (this.computeSelector = this.createComputeSelector())
          }),
          (t.cssRules = function () {
            var e = this,
              t = this._fromServer
                ? Object.keys(this._fromServer).map(function (t) {
                    return [t, e._fromServer[t]]
                  })
                : [],
              n = this._sheet.cssRules()
            return t.concat(
              Object.keys(this._indices)
                .map(function (t) {
                  return [
                    t,
                    e._indices[t]
                      .map(function (e) {
                        return n[e].cssText
                      })
                      .join(e._optimizeForSpeed ? '' : '\n'),
                  ]
                })
                .filter(function (e) {
                  return Boolean(e[1])
                })
            )
          }),
          (t.createComputeId = function () {
            var e = {}
            return function (t, n) {
              if (!n) return 'jsx-' + t
              var a = String(n),
                i = t + a
              return e[i] || (e[i] = 'jsx-' + (0, r.default)(t + '-' + a)), e[i]
            }
          }),
          (t.createComputeSelector = function (e) {
            void 0 === e && (e = /__jsx-style-dynamic-selector/g)
            var t = {}
            return function (n, r) {
              this._isBrowser || (r = r.replace(/\/style/gi, '\\/style'))
              var a = n + r
              return t[a] || (t[a] = r.replace(e, n)), t[a]
            }
          }),
          (t.getIdAndRules = function (e) {
            var t = this,
              n = e.children,
              r = e.dynamic,
              a = e.id
            if (r) {
              var i = this.computeId(a, r)
              return {
                styleId: i,
                rules: Array.isArray(n)
                  ? n.map(function (e) {
                      return t.computeSelector(i, e)
                    })
                  : [this.computeSelector(i, n)],
              }
            }
            return { styleId: this.computeId(a), rules: Array.isArray(n) ? n : [n] }
          }),
          (t.selectFromServer = function () {
            return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function (e, t) {
              return (e[t.id.slice(2)] = t), e
            }, {})
          }),
          e
        )
      })()
      t.default = o
    },
    Xuae: function (e, t, n) {
      'use strict'
      var r = n('mPvQ'),
        a = n('/GRZ'),
        i = n('i2R6'),
        o = (n('qXWd'), n('48fX')),
        s = n('tCBg'),
        c = n('T0f4')
      function u(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = c(e)
          if (t) {
            var a = c(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return s(this, n)
        }
      }
      ;(t.__esModule = !0), (t.default = void 0)
      var l = n('q1tI'),
        d = (function (e) {
          o(n, e)
          var t = u(n)
          function n(e) {
            var i
            return (
              a(this, n),
              ((i = t.call(this, e))._hasHeadManager = void 0),
              (i.emitChange = function () {
                i._hasHeadManager &&
                  i.props.headManager.updateHead(
                    i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances), i.props)
                  )
              }),
              (i._hasHeadManager = i.props.headManager && i.props.headManager.mountedInstances),
              i
            )
          }
          return (
            i(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.emitChange()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange()
                },
              },
              {
                key: 'render',
                value: function () {
                  return null
                },
              },
            ]),
            n
          )
        })(l.Component)
      t.default = d
    },
    YFqc: function (e, t, n) {
      e.exports = n('cTJO')
    },
    YUtM: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return u
      })
      var r = n('nKUr'),
        a = (n('q1tI'), n('g4pe')),
        i = n.n(a),
        o = n('20a2'),
        s = n('8Ila'),
        c = n('vvao'),
        u = function (e) {
          var t,
            n = Object(o.useRouter)(),
            a = e.post ? new Date(e.post.date).toISOString() : new Date().toISOString(),
            u = e.post && e.post.modified_date ? new Date(e.post.modified_date).toISOString() : a
          return Object(r.jsx)(r.Fragment, {
            children: Object(r.jsxs)(i.a, {
              children: [
                Object(r.jsx)('meta', { charSet: 'UTF-8' }, 'charset'),
                Object(r.jsx)('meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }),
                Object(r.jsx)(
                  'link',
                  { rel: 'apple-touch-icon', href: ''.concat('/blog', '/apple-touch-icon.png') },
                  'apple'
                ),
                Object(r.jsx)(
                  'link',
                  { rel: 'icon', type: 'image/png', sizes: '32x32', href: ''.concat('/blog', '/favicon-32x32.png') },
                  'icon32'
                ),
                Object(r.jsx)(
                  'link',
                  { rel: 'icon', type: 'image/png', sizes: '16x16', href: ''.concat('/blog', '/favicon-16x16.png') },
                  'icon16'
                ),
                Object(r.jsx)('link', { rel: 'icon', href: ''.concat('/blog', '/favicon.ico') }, 'favicon'),
                Object(r.jsx)('title', { children: ''.concat(e.title, ' | ').concat(s.a.site_name) }),
                Object(r.jsx)('meta', { name: 'description', content: e.description }, 'description'),
                Object(r.jsx)(
                  'meta',
                  {
                    name: 'author',
                    content: (null === (t = e.post) || void 0 === t ? void 0 : t.author) || 'Elliot for Water',
                  },
                  'author'
                ),
                e.canonical && Object(r.jsx)('link', { rel: 'canonical', href: e.canonical }, 'canonical'),
                Object(r.jsx)(
                  'meta',
                  { property: 'og:title', content: ''.concat(e.title, ' | ').concat(s.a.title) },
                  'og:title'
                ),
                Object(r.jsx)('meta', { property: 'og:description', content: e.description }, 'og:description'),
                Object(r.jsx)('meta', { property: 'og:locale', content: s.a.locale }, 'og:locale'),
                Object(r.jsx)('meta', { property: 'og:site_name', content: s.a.site_name }, 'og:site_name'),
                e.post &&
                  Object(r.jsxs)(r.Fragment, {
                    children: [
                      Object(r.jsx)('meta', { property: 'og:type', content: 'article' }, 'og:type'),
                      Object(r.jsx)('meta', { property: 'og:image', content: ''.concat(e.post.image) }, 'og:image'),
                      Object(r.jsx)('meta', { name: 'twitter:card', content: 'summary_large_image' }, 'twitter:card'),
                      Object(r.jsx)(
                        'meta',
                        { property: 'article:published_time', content: a },
                        'article:published_time'
                      ),
                      Object(r.jsx)('meta', { property: 'article:modified_time', content: u }, 'article:modified_time'),
                      Object(r.jsx)(
                        'script',
                        {
                          type: 'application/ld+json',
                          dangerouslySetInnerHTML: {
                            __html: '\n          {\n            "description": "'
                              .concat(
                                e.description,
                                '",\n            "author": {\n              "@type": "Person",\n              "name": "'
                              )
                              .concat(
                                e.post.author,
                                '"\n            },\n            "@type": "BlogPosting",\n            "url": "'
                              )
                              .concat(s.a.url)
                              .concat('/blog')
                              .concat(
                                Object(c.a)(n.asPath),
                                '",\n            "publisher": {\n              "@type": "Organization",\n              "logo": {\n                "@type": "ImageObject",\n                "url": "'
                              )
                              .concat(s.a.url)
                              .concat('/blog', '/assets/images/logo.png"\n              },\n              "name": "')
                              .concat(e.post.author, '"\n            },\n            "headline": "')
                              .concat(e.title, ' | ')
                              .concat(s.a.title, '",\n            "image": ["')
                              .concat(e.post.image, '"],\n            "datePublished": "')
                              .concat(a, '",\n            "dateModified": "')
                              .concat(
                                u,
                                '",\n            "mainEntityOfPage": {\n              "@type": "WebPage",\n              "@id": "'
                              )
                              .concat(s.a.url)
                              .concat('/blog')
                              .concat(
                                Object(c.a)(n.asPath),
                                '"\n            },\n            "@context": "http://schema.org"\n          }'
                              ),
                          },
                        },
                        'ldjson'
                      ),
                    ],
                  }),
              ],
            }),
          })
        }
    },
    bVZc: function (e, t, n) {
      'use strict'
      ;(function (e) {
        function n(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        ;(t.__esModule = !0), (t.default = void 0)
        var r = 'undefined' !== typeof e && e.env && !0,
          a = function (e) {
            return '[object String]' === Object.prototype.toString.call(e)
          },
          i = (function () {
            function e(e) {
              var t = void 0 === e ? {} : e,
                n = t.name,
                i = void 0 === n ? 'stylesheet' : n,
                s = t.optimizeForSpeed,
                c = void 0 === s ? r : s,
                u = t.isBrowser,
                l = void 0 === u ? 'undefined' !== typeof window : u
              o(a(i), '`name` must be a string'),
                (this._name = i),
                (this._deletedRulePlaceholder = '#' + i + '-deleted-rule____{}'),
                o('boolean' === typeof c, '`optimizeForSpeed` must be a boolean'),
                (this._optimizeForSpeed = c),
                (this._isBrowser = l),
                (this._serverSheet = void 0),
                (this._tags = []),
                (this._injected = !1),
                (this._rulesCount = 0)
              var d = this._isBrowser && document.querySelector('meta[property="csp-nonce"]')
              this._nonce = d ? d.getAttribute('content') : null
            }
            var t,
              i,
              s,
              c = e.prototype
            return (
              (c.setOptimizeForSpeed = function (e) {
                o('boolean' === typeof e, '`setOptimizeForSpeed` accepts a boolean'),
                  o(0 === this._rulesCount, 'optimizeForSpeed cannot be when rules have already been inserted'),
                  this.flush(),
                  (this._optimizeForSpeed = e),
                  this.inject()
              }),
              (c.isOptimizeForSpeed = function () {
                return this._optimizeForSpeed
              }),
              (c.inject = function () {
                var e = this
                if (
                  (o(!this._injected, 'sheet already injected'),
                  (this._injected = !0),
                  this._isBrowser && this._optimizeForSpeed)
                )
                  return (
                    (this._tags[0] = this.makeStyleTag(this._name)),
                    (this._optimizeForSpeed = 'insertRule' in this.getSheet()),
                    void (
                      this._optimizeForSpeed ||
                      (r ||
                        console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'),
                      this.flush(),
                      (this._injected = !0))
                    )
                  )
                this._serverSheet = {
                  cssRules: [],
                  insertRule: function (t, n) {
                    return (
                      'number' === typeof n
                        ? (e._serverSheet.cssRules[n] = { cssText: t })
                        : e._serverSheet.cssRules.push({ cssText: t }),
                      n
                    )
                  },
                  deleteRule: function (t) {
                    e._serverSheet.cssRules[t] = null
                  },
                }
              }),
              (c.getSheetForTag = function (e) {
                if (e.sheet) return e.sheet
                for (var t = 0; t < document.styleSheets.length; t++)
                  if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
              }),
              (c.getSheet = function () {
                return this.getSheetForTag(this._tags[this._tags.length - 1])
              }),
              (c.insertRule = function (e, t) {
                if ((o(a(e), '`insertRule` accepts only strings'), !this._isBrowser))
                  return (
                    'number' !== typeof t && (t = this._serverSheet.cssRules.length),
                    this._serverSheet.insertRule(e, t),
                    this._rulesCount++
                  )
                if (this._optimizeForSpeed) {
                  var n = this.getSheet()
                  'number' !== typeof t && (t = n.cssRules.length)
                  try {
                    n.insertRule(e, t)
                  } catch (s) {
                    return (
                      r ||
                        console.warn(
                          'StyleSheet: illegal rule: \n\n' +
                            e +
                            '\n\nSee https://stackoverflow.com/q/20007992 for more info'
                        ),
                      -1
                    )
                  }
                } else {
                  var i = this._tags[t]
                  this._tags.push(this.makeStyleTag(this._name, e, i))
                }
                return this._rulesCount++
              }),
              (c.replaceRule = function (e, t) {
                if (this._optimizeForSpeed || !this._isBrowser) {
                  var n = this._isBrowser ? this.getSheet() : this._serverSheet
                  if ((t.trim() || (t = this._deletedRulePlaceholder), !n.cssRules[e])) return e
                  n.deleteRule(e)
                  try {
                    n.insertRule(t, e)
                  } catch (i) {
                    r ||
                      console.warn(
                        'StyleSheet: illegal rule: \n\n' +
                          t +
                          '\n\nSee https://stackoverflow.com/q/20007992 for more info'
                      ),
                      n.insertRule(this._deletedRulePlaceholder, e)
                  }
                } else {
                  var a = this._tags[e]
                  o(a, 'old rule at index `' + e + '` not found'), (a.textContent = t)
                }
                return e
              }),
              (c.deleteRule = function (e) {
                if (this._isBrowser)
                  if (this._optimizeForSpeed) this.replaceRule(e, '')
                  else {
                    var t = this._tags[e]
                    o(t, 'rule at index `' + e + '` not found'), t.parentNode.removeChild(t), (this._tags[e] = null)
                  }
                else this._serverSheet.deleteRule(e)
              }),
              (c.flush = function () {
                ;(this._injected = !1),
                  (this._rulesCount = 0),
                  this._isBrowser
                    ? (this._tags.forEach(function (e) {
                        return e && e.parentNode.removeChild(e)
                      }),
                      (this._tags = []))
                    : (this._serverSheet.cssRules = [])
              }),
              (c.cssRules = function () {
                var e = this
                return this._isBrowser
                  ? this._tags.reduce(function (t, n) {
                      return (
                        n
                          ? (t = t.concat(
                              Array.prototype.map.call(e.getSheetForTag(n).cssRules, function (t) {
                                return t.cssText === e._deletedRulePlaceholder ? null : t
                              })
                            ))
                          : t.push(null),
                        t
                      )
                    }, [])
                  : this._serverSheet.cssRules
              }),
              (c.makeStyleTag = function (e, t, n) {
                t && o(a(t), 'makeStyleTag acceps only strings as second parameter')
                var r = document.createElement('style')
                this._nonce && r.setAttribute('nonce', this._nonce),
                  (r.type = 'text/css'),
                  r.setAttribute('data-' + e, ''),
                  t && r.appendChild(document.createTextNode(t))
                var i = document.head || document.getElementsByTagName('head')[0]
                return n ? i.insertBefore(r, n) : i.appendChild(r), r
              }),
              (t = e),
              (i = [
                {
                  key: 'length',
                  get: function () {
                    return this._rulesCount
                  },
                },
              ]) && n(t.prototype, i),
              s && n(t, s),
              e
            )
          })()
        function o(e, t) {
          if (!e) throw new Error('StyleSheet: ' + t + '.')
        }
        t.default = i
      }.call(this, n('8oxB')))
    },
    cTJO: function (e, t, n) {
      'use strict'
      var r = n('zoAU'),
        a = n('7KCV')
      ;(t.__esModule = !0), (t.default = void 0)
      var i = a(n('q1tI')),
        o = n('elyg'),
        s = n('nOHt'),
        c = n('vNVm'),
        u = {}
      function l(e, t, n, r) {
        if (e && (0, o.isLocalURL)(t)) {
          e.prefetch(t, n, r).catch(function (e) {
            0
          })
          var a = r && 'undefined' !== typeof r.locale ? r.locale : e && e.locale
          u[t + '%' + n + (a ? '%' + a : '')] = !0
        }
      }
      var d = function (e) {
        var t = !1 !== e.prefetch,
          n = (0, s.useRouter)(),
          a = (n && n.pathname) || '/',
          d = i.default.useMemo(
            function () {
              var t = (0, o.resolveHref)(a, e.href, !0),
                n = r(t, 2),
                i = n[0],
                s = n[1]
              return { href: i, as: e.as ? (0, o.resolveHref)(a, e.as) : s || i }
            },
            [a, e.href, e.as]
          ),
          h = d.href,
          f = d.as,
          m = e.children,
          p = e.replace,
          g = e.shallow,
          v = e.scroll,
          w = e.locale
        'string' === typeof m && (m = i.default.createElement('a', null, m))
        var y = i.Children.only(m),
          b = y && 'object' === typeof y && y.ref,
          x = (0, c.useIntersection)({ rootMargin: '200px' }),
          j = r(x, 2),
          S = j[0],
          O = j[1],
          _ = i.default.useCallback(
            function (e) {
              S(e), b && ('function' === typeof b ? b(e) : 'object' === typeof b && (b.current = e))
            },
            [b, S]
          )
        ;(0, i.useEffect)(
          function () {
            var e = O && t && (0, o.isLocalURL)(h),
              r = 'undefined' !== typeof w ? w : n && n.locale,
              a = u[h + '%' + f + (r ? '%' + r : '')]
            e && !a && l(n, h, f, { locale: r })
          },
          [f, h, O, w, t, n]
        )
        var C = {
          ref: _,
          onClick: function (e) {
            y.props && 'function' === typeof y.props.onClick && y.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, a, i, s, c) {
                  ;('A' !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var t = e.currentTarget.target
                      return (
                        (t && '_self' !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      )
                    })(e) &&
                      (0, o.isLocalURL)(n))) &&
                    (e.preventDefault(),
                    null == s && (s = r.indexOf('#') < 0),
                    t[a ? 'replace' : 'push'](n, r, { shallow: i, locale: c, scroll: s }).then(function (e) {
                      e && s && document.body.focus()
                    }))
                })(e, n, h, f, p, g, v, w)
          },
          onMouseEnter: function (e) {
            ;(0, o.isLocalURL)(h) &&
              (y.props && 'function' === typeof y.props.onMouseEnter && y.props.onMouseEnter(e),
              l(n, h, f, { priority: !0 }))
          },
        }
        if (e.passHref || ('a' === y.type && !('href' in y.props))) {
          var M = 'undefined' !== typeof w ? w : n && n.locale,
            T = n && n.isLocaleDomain && (0, o.getDomainLocale)(f, M, n && n.locales, n && n.domainLocales)
          C.href = T || (0, o.addBasePath)((0, o.addLocale)(f, M, n && n.defaultLocale))
        }
        return i.default.cloneElement(y, C)
      }
      t.default = d
    },
    g4pe: function (e, t, n) {
      e.exports = n('8Kt/')
    },
    kG2m: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      }
    },
    lwAK: function (e, t, n) {
      'use strict'
      var r
      ;(t.__esModule = !0), (t.AmpStateContext = void 0)
      var a = ((r = n('q1tI')) && r.__esModule ? r : { default: r }).default.createContext({})
      t.AmpStateContext = a
    },
    mPvQ: function (e, t, n) {
      var r = n('5fIB'),
        a = n('rlHP'),
        i = n('KckH'),
        o = n('kG2m')
      e.exports = function (e) {
        return r(e) || a(e) || i(e) || o()
      }
    },
    oI91: function (e, t) {
      e.exports = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
    },
    rlHP: function (e, t) {
      e.exports = function (e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
      }
    },
    sWYD: function (e, t, n) {
      'use strict'
      function r(e, t) {
        if (t.length < e)
          throw new TypeError(e + ' argument' + (e > 1 ? 's' : '') + ' required, but only ' + t.length + ' present')
      }
      function a(e) {
        r(1, arguments)
        var t = Object.prototype.toString.call(e)
        return e instanceof Date || ('object' === typeof e && '[object Date]' === t)
          ? new Date(e.getTime())
          : 'number' === typeof e || '[object Number]' === t
          ? new Date(e)
          : (('string' !== typeof e && '[object String]' !== t) ||
              'undefined' === typeof console ||
              (console.warn(
                "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"
              ),
              console.warn(new Error().stack)),
            new Date(NaN))
      }
      function i(e) {
        r(1, arguments)
        var t = a(e)
        return !isNaN(t)
      }
      n.d(t, 'a', function () {
        return Z
      })
      var o = {
        lessThanXSeconds: { one: 'less than a second', other: 'less than {{count}} seconds' },
        xSeconds: { one: '1 second', other: '{{count}} seconds' },
        halfAMinute: 'half a minute',
        lessThanXMinutes: { one: 'less than a minute', other: 'less than {{count}} minutes' },
        xMinutes: { one: '1 minute', other: '{{count}} minutes' },
        aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
        xHours: { one: '1 hour', other: '{{count}} hours' },
        xDays: { one: '1 day', other: '{{count}} days' },
        aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
        xWeeks: { one: '1 week', other: '{{count}} weeks' },
        aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
        xMonths: { one: '1 month', other: '{{count}} months' },
        aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
        xYears: { one: '1 year', other: '{{count}} years' },
        overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
        almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
      }
      function s(e) {
        return function (t) {
          var n = t || {},
            r = n.width ? String(n.width) : e.defaultWidth
          return e.formats[r] || e.formats[e.defaultWidth]
        }
      }
      var c = {
          date: s({
            formats: { full: 'EEEE, MMMM do, y', long: 'MMMM do, y', medium: 'MMM d, y', short: 'MM/dd/yyyy' },
            defaultWidth: 'full',
          }),
          time: s({
            formats: { full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a' },
            defaultWidth: 'full',
          }),
          dateTime: s({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: '{{date}}, {{time}}',
              short: '{{date}}, {{time}}',
            },
            defaultWidth: 'full',
          }),
        },
        u = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: 'P',
        }
      function l(e) {
        return function (t, n) {
          var r,
            a = n || {}
          if ('formatting' === (a.context ? String(a.context) : 'standalone') && e.formattingValues) {
            var i = e.defaultFormattingWidth || e.defaultWidth,
              o = a.width ? String(a.width) : i
            r = e.formattingValues[o] || e.formattingValues[i]
          } else {
            var s = e.defaultWidth,
              c = a.width ? String(a.width) : e.defaultWidth
            r = e.values[c] || e.values[s]
          }
          return r[e.argumentCallback ? e.argumentCallback(t) : t]
        }
      }
      function d(e) {
        return function (t, n) {
          var r = String(t),
            a = n || {},
            i = a.width,
            o = (i && e.matchPatterns[i]) || e.matchPatterns[e.defaultMatchWidth],
            s = r.match(o)
          if (!s) return null
          var c,
            u = s[0],
            l = (i && e.parsePatterns[i]) || e.parsePatterns[e.defaultParseWidth]
          return (
            (c =
              '[object Array]' === Object.prototype.toString.call(l)
                ? (function (e, t) {
                    for (var n = 0; n < e.length; n++) if (t(e[n])) return n
                  })(l, function (e) {
                    return e.test(u)
                  })
                : (function (e, t) {
                    for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n
                  })(l, function (e) {
                    return e.test(u)
                  })),
            (c = e.valueCallback ? e.valueCallback(c) : c),
            { value: (c = a.valueCallback ? a.valueCallback(c) : c), rest: r.slice(u.length) }
          )
        }
      }
      var h,
        f = {
          code: 'en-US',
          formatDistance: function (e, t, n) {
            var r
            return (
              (n = n || {}),
              (r = 'string' === typeof o[e] ? o[e] : 1 === t ? o[e].one : o[e].other.replace('{{count}}', t)),
              n.addSuffix ? (n.comparison > 0 ? 'in ' + r : r + ' ago') : r
            )
          },
          formatLong: c,
          formatRelative: function (e, t, n, r) {
            return u[e]
          },
          localize: {
            ordinalNumber: function (e, t) {
              var n = Number(e),
                r = n % 100
              if (r > 20 || r < 10)
                switch (r % 10) {
                  case 1:
                    return n + 'st'
                  case 2:
                    return n + 'nd'
                  case 3:
                    return n + 'rd'
                }
              return n + 'th'
            },
            era: l({
              values: { narrow: ['B', 'A'], abbreviated: ['BC', 'AD'], wide: ['Before Christ', 'Anno Domini'] },
              defaultWidth: 'wide',
            }),
            quarter: l({
              values: {
                narrow: ['1', '2', '3', '4'],
                abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
                wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
              },
              defaultWidth: 'wide',
              argumentCallback: function (e) {
                return Number(e) - 1
              },
            }),
            month: l({
              values: {
                narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
                abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                wide: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ],
              },
              defaultWidth: 'wide',
            }),
            day: l({
              values: {
                narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              },
              defaultWidth: 'wide',
            }),
            dayPeriod: l({
              values: {
                narrow: {
                  am: 'a',
                  pm: 'p',
                  midnight: 'mi',
                  noon: 'n',
                  morning: 'morning',
                  afternoon: 'afternoon',
                  evening: 'evening',
                  night: 'night',
                },
                abbreviated: {
                  am: 'AM',
                  pm: 'PM',
                  midnight: 'midnight',
                  noon: 'noon',
                  morning: 'morning',
                  afternoon: 'afternoon',
                  evening: 'evening',
                  night: 'night',
                },
                wide: {
                  am: 'a.m.',
                  pm: 'p.m.',
                  midnight: 'midnight',
                  noon: 'noon',
                  morning: 'morning',
                  afternoon: 'afternoon',
                  evening: 'evening',
                  night: 'night',
                },
              },
              defaultWidth: 'wide',
              formattingValues: {
                narrow: {
                  am: 'a',
                  pm: 'p',
                  midnight: 'mi',
                  noon: 'n',
                  morning: 'in the morning',
                  afternoon: 'in the afternoon',
                  evening: 'in the evening',
                  night: 'at night',
                },
                abbreviated: {
                  am: 'AM',
                  pm: 'PM',
                  midnight: 'midnight',
                  noon: 'noon',
                  morning: 'in the morning',
                  afternoon: 'in the afternoon',
                  evening: 'in the evening',
                  night: 'at night',
                },
                wide: {
                  am: 'a.m.',
                  pm: 'p.m.',
                  midnight: 'midnight',
                  noon: 'noon',
                  morning: 'in the morning',
                  afternoon: 'in the afternoon',
                  evening: 'in the evening',
                  night: 'at night',
                },
              },
              defaultFormattingWidth: 'wide',
            }),
          },
          match: {
            ordinalNumber:
              ((h = {
                matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                parsePattern: /\d+/i,
                valueCallback: function (e) {
                  return parseInt(e, 10)
                },
              }),
              function (e, t) {
                var n = String(e),
                  r = t || {},
                  a = n.match(h.matchPattern)
                if (!a) return null
                var i = a[0],
                  o = n.match(h.parsePattern)
                if (!o) return null
                var s = h.valueCallback ? h.valueCallback(o[0]) : o[0]
                return { value: (s = r.valueCallback ? r.valueCallback(s) : s), rest: n.slice(i.length) }
              }),
            era: d({
              matchPatterns: {
                narrow: /^(b|a)/i,
                abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                wide: /^(before christ|before common era|anno domini|common era)/i,
              },
              defaultMatchWidth: 'wide',
              parsePatterns: { any: [/^b/i, /^(a|c)/i] },
              defaultParseWidth: 'any',
            }),
            quarter: d({
              matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
              defaultMatchWidth: 'wide',
              parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
              defaultParseWidth: 'any',
              valueCallback: function (e) {
                return e + 1
              },
            }),
            month: d({
              matchPatterns: {
                narrow: /^[jfmasond]/i,
                abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
              },
              defaultMatchWidth: 'wide',
              parsePatterns: {
                narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i],
              },
              defaultParseWidth: 'any',
            }),
            day: d({
              matchPatterns: {
                narrow: /^[smtwf]/i,
                short: /^(su|mo|tu|we|th|fr|sa)/i,
                abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
              },
              defaultMatchWidth: 'wide',
              parsePatterns: {
                narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
              },
              defaultParseWidth: 'any',
            }),
            dayPeriod: d({
              matchPatterns: {
                narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
              },
              defaultMatchWidth: 'any',
              parsePatterns: {
                any: {
                  am: /^a/i,
                  pm: /^p/i,
                  midnight: /^mi/i,
                  noon: /^no/i,
                  morning: /morning/i,
                  afternoon: /afternoon/i,
                  evening: /evening/i,
                  night: /night/i,
                },
              },
              defaultParseWidth: 'any',
            }),
          },
          options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
        }
      function m(e) {
        if (null === e || !0 === e || !1 === e) return NaN
        var t = Number(e)
        return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
      }
      function p(e, t) {
        r(2, arguments)
        var n = a(e).getTime(),
          i = m(t)
        return new Date(n + i)
      }
      function g(e, t) {
        r(2, arguments)
        var n = m(t)
        return p(e, -n)
      }
      function v(e, t) {
        for (var n = e < 0 ? '-' : '', r = Math.abs(e).toString(); r.length < t; ) r = '0' + r
        return n + r
      }
      var w = {
          y: function (e, t) {
            var n = e.getUTCFullYear(),
              r = n > 0 ? n : 1 - n
            return v('yy' === t ? r % 100 : r, t.length)
          },
          M: function (e, t) {
            var n = e.getUTCMonth()
            return 'M' === t ? String(n + 1) : v(n + 1, 2)
          },
          d: function (e, t) {
            return v(e.getUTCDate(), t.length)
          },
          a: function (e, t) {
            var n = e.getUTCHours() / 12 >= 1 ? 'pm' : 'am'
            switch (t) {
              case 'a':
              case 'aa':
                return n.toUpperCase()
              case 'aaa':
                return n
              case 'aaaaa':
                return n[0]
              case 'aaaa':
              default:
                return 'am' === n ? 'a.m.' : 'p.m.'
            }
          },
          h: function (e, t) {
            return v(e.getUTCHours() % 12 || 12, t.length)
          },
          H: function (e, t) {
            return v(e.getUTCHours(), t.length)
          },
          m: function (e, t) {
            return v(e.getUTCMinutes(), t.length)
          },
          s: function (e, t) {
            return v(e.getUTCSeconds(), t.length)
          },
          S: function (e, t) {
            var n = t.length,
              r = e.getUTCMilliseconds()
            return v(Math.floor(r * Math.pow(10, n - 3)), t.length)
          },
        },
        y = 864e5
      function b(e) {
        r(1, arguments)
        var t = 1,
          n = a(e),
          i = n.getUTCDay(),
          o = (i < t ? 7 : 0) + i - t
        return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n
      }
      function x(e) {
        r(1, arguments)
        var t = a(e),
          n = t.getUTCFullYear(),
          i = new Date(0)
        i.setUTCFullYear(n + 1, 0, 4), i.setUTCHours(0, 0, 0, 0)
        var o = b(i),
          s = new Date(0)
        s.setUTCFullYear(n, 0, 4), s.setUTCHours(0, 0, 0, 0)
        var c = b(s)
        return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= c.getTime() ? n : n - 1
      }
      function j(e) {
        r(1, arguments)
        var t = x(e),
          n = new Date(0)
        n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0)
        var a = b(n)
        return a
      }
      var S = 6048e5
      function O(e, t) {
        r(1, arguments)
        var n = t || {},
          i = n.locale,
          o = i && i.options && i.options.weekStartsOn,
          s = null == o ? 0 : m(o),
          c = null == n.weekStartsOn ? s : m(n.weekStartsOn)
        if (!(c >= 0 && c <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
        var u = a(e),
          l = u.getUTCDay(),
          d = (l < c ? 7 : 0) + l - c
        return u.setUTCDate(u.getUTCDate() - d), u.setUTCHours(0, 0, 0, 0), u
      }
      function _(e, t) {
        r(1, arguments)
        var n = a(e, t),
          i = n.getUTCFullYear(),
          o = t || {},
          s = o.locale,
          c = s && s.options && s.options.firstWeekContainsDate,
          u = null == c ? 1 : m(c),
          l = null == o.firstWeekContainsDate ? u : m(o.firstWeekContainsDate)
        if (!(l >= 1 && l <= 7)) throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
        var d = new Date(0)
        d.setUTCFullYear(i + 1, 0, l), d.setUTCHours(0, 0, 0, 0)
        var h = O(d, t),
          f = new Date(0)
        f.setUTCFullYear(i, 0, l), f.setUTCHours(0, 0, 0, 0)
        var p = O(f, t)
        return n.getTime() >= h.getTime() ? i + 1 : n.getTime() >= p.getTime() ? i : i - 1
      }
      function C(e, t) {
        r(1, arguments)
        var n = t || {},
          a = n.locale,
          i = a && a.options && a.options.firstWeekContainsDate,
          o = null == i ? 1 : m(i),
          s = null == n.firstWeekContainsDate ? o : m(n.firstWeekContainsDate),
          c = _(e, t),
          u = new Date(0)
        u.setUTCFullYear(c, 0, s), u.setUTCHours(0, 0, 0, 0)
        var l = O(u, t)
        return l
      }
      var M = 6048e5
      var T = 'midnight',
        k = 'noon',
        E = 'morning',
        N = 'afternoon',
        P = 'evening',
        z = 'night'
      function U(e, t) {
        var n = e > 0 ? '-' : '+',
          r = Math.abs(e),
          a = Math.floor(r / 60),
          i = r % 60
        if (0 === i) return n + String(a)
        var o = t || ''
        return n + String(a) + o + v(i, 2)
      }
      function D(e, t) {
        return e % 60 === 0 ? (e > 0 ? '-' : '+') + v(Math.abs(e) / 60, 2) : A(e, t)
      }
      function A(e, t) {
        var n = t || '',
          r = e > 0 ? '-' : '+',
          a = Math.abs(e)
        return r + v(Math.floor(a / 60), 2) + n + v(a % 60, 2)
      }
      var R = {
        G: function (e, t, n) {
          var r = e.getUTCFullYear() > 0 ? 1 : 0
          switch (t) {
            case 'G':
            case 'GG':
            case 'GGG':
              return n.era(r, { width: 'abbreviated' })
            case 'GGGGG':
              return n.era(r, { width: 'narrow' })
            case 'GGGG':
            default:
              return n.era(r, { width: 'wide' })
          }
        },
        y: function (e, t, n) {
          if ('yo' === t) {
            var r = e.getUTCFullYear(),
              a = r > 0 ? r : 1 - r
            return n.ordinalNumber(a, { unit: 'year' })
          }
          return w.y(e, t)
        },
        Y: function (e, t, n, r) {
          var a = _(e, r),
            i = a > 0 ? a : 1 - a
          return 'YY' === t ? v(i % 100, 2) : 'Yo' === t ? n.ordinalNumber(i, { unit: 'year' }) : v(i, t.length)
        },
        R: function (e, t) {
          return v(x(e), t.length)
        },
        u: function (e, t) {
          return v(e.getUTCFullYear(), t.length)
        },
        Q: function (e, t, n) {
          var r = Math.ceil((e.getUTCMonth() + 1) / 3)
          switch (t) {
            case 'Q':
              return String(r)
            case 'QQ':
              return v(r, 2)
            case 'Qo':
              return n.ordinalNumber(r, { unit: 'quarter' })
            case 'QQQ':
              return n.quarter(r, { width: 'abbreviated', context: 'formatting' })
            case 'QQQQQ':
              return n.quarter(r, { width: 'narrow', context: 'formatting' })
            case 'QQQQ':
            default:
              return n.quarter(r, { width: 'wide', context: 'formatting' })
          }
        },
        q: function (e, t, n) {
          var r = Math.ceil((e.getUTCMonth() + 1) / 3)
          switch (t) {
            case 'q':
              return String(r)
            case 'qq':
              return v(r, 2)
            case 'qo':
              return n.ordinalNumber(r, { unit: 'quarter' })
            case 'qqq':
              return n.quarter(r, { width: 'abbreviated', context: 'standalone' })
            case 'qqqqq':
              return n.quarter(r, { width: 'narrow', context: 'standalone' })
            case 'qqqq':
            default:
              return n.quarter(r, { width: 'wide', context: 'standalone' })
          }
        },
        M: function (e, t, n) {
          var r = e.getUTCMonth()
          switch (t) {
            case 'M':
            case 'MM':
              return w.M(e, t)
            case 'Mo':
              return n.ordinalNumber(r + 1, { unit: 'month' })
            case 'MMM':
              return n.month(r, { width: 'abbreviated', context: 'formatting' })
            case 'MMMMM':
              return n.month(r, { width: 'narrow', context: 'formatting' })
            case 'MMMM':
            default:
              return n.month(r, { width: 'wide', context: 'formatting' })
          }
        },
        L: function (e, t, n) {
          var r = e.getUTCMonth()
          switch (t) {
            case 'L':
              return String(r + 1)
            case 'LL':
              return v(r + 1, 2)
            case 'Lo':
              return n.ordinalNumber(r + 1, { unit: 'month' })
            case 'LLL':
              return n.month(r, { width: 'abbreviated', context: 'standalone' })
            case 'LLLLL':
              return n.month(r, { width: 'narrow', context: 'standalone' })
            case 'LLLL':
            default:
              return n.month(r, { width: 'wide', context: 'standalone' })
          }
        },
        w: function (e, t, n, i) {
          var o = (function (e, t) {
            r(1, arguments)
            var n = a(e),
              i = O(n, t).getTime() - C(n, t).getTime()
            return Math.round(i / M) + 1
          })(e, i)
          return 'wo' === t ? n.ordinalNumber(o, { unit: 'week' }) : v(o, t.length)
        },
        I: function (e, t, n) {
          var i = (function (e) {
            r(1, arguments)
            var t = a(e),
              n = b(t).getTime() - j(t).getTime()
            return Math.round(n / S) + 1
          })(e)
          return 'Io' === t ? n.ordinalNumber(i, { unit: 'week' }) : v(i, t.length)
        },
        d: function (e, t, n) {
          return 'do' === t ? n.ordinalNumber(e.getUTCDate(), { unit: 'date' }) : w.d(e, t)
        },
        D: function (e, t, n) {
          var i = (function (e) {
            r(1, arguments)
            var t = a(e),
              n = t.getTime()
            t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
            var i = t.getTime(),
              o = n - i
            return Math.floor(o / y) + 1
          })(e)
          return 'Do' === t ? n.ordinalNumber(i, { unit: 'dayOfYear' }) : v(i, t.length)
        },
        E: function (e, t, n) {
          var r = e.getUTCDay()
          switch (t) {
            case 'E':
            case 'EE':
            case 'EEE':
              return n.day(r, { width: 'abbreviated', context: 'formatting' })
            case 'EEEEE':
              return n.day(r, { width: 'narrow', context: 'formatting' })
            case 'EEEEEE':
              return n.day(r, { width: 'short', context: 'formatting' })
            case 'EEEE':
            default:
              return n.day(r, { width: 'wide', context: 'formatting' })
          }
        },
        e: function (e, t, n, r) {
          var a = e.getUTCDay(),
            i = (a - r.weekStartsOn + 8) % 7 || 7
          switch (t) {
            case 'e':
              return String(i)
            case 'ee':
              return v(i, 2)
            case 'eo':
              return n.ordinalNumber(i, { unit: 'day' })
            case 'eee':
              return n.day(a, { width: 'abbreviated', context: 'formatting' })
            case 'eeeee':
              return n.day(a, { width: 'narrow', context: 'formatting' })
            case 'eeeeee':
              return n.day(a, { width: 'short', context: 'formatting' })
            case 'eeee':
            default:
              return n.day(a, { width: 'wide', context: 'formatting' })
          }
        },
        c: function (e, t, n, r) {
          var a = e.getUTCDay(),
            i = (a - r.weekStartsOn + 8) % 7 || 7
          switch (t) {
            case 'c':
              return String(i)
            case 'cc':
              return v(i, t.length)
            case 'co':
              return n.ordinalNumber(i, { unit: 'day' })
            case 'ccc':
              return n.day(a, { width: 'abbreviated', context: 'standalone' })
            case 'ccccc':
              return n.day(a, { width: 'narrow', context: 'standalone' })
            case 'cccccc':
              return n.day(a, { width: 'short', context: 'standalone' })
            case 'cccc':
            default:
              return n.day(a, { width: 'wide', context: 'standalone' })
          }
        },
        i: function (e, t, n) {
          var r = e.getUTCDay(),
            a = 0 === r ? 7 : r
          switch (t) {
            case 'i':
              return String(a)
            case 'ii':
              return v(a, t.length)
            case 'io':
              return n.ordinalNumber(a, { unit: 'day' })
            case 'iii':
              return n.day(r, { width: 'abbreviated', context: 'formatting' })
            case 'iiiii':
              return n.day(r, { width: 'narrow', context: 'formatting' })
            case 'iiiiii':
              return n.day(r, { width: 'short', context: 'formatting' })
            case 'iiii':
            default:
              return n.day(r, { width: 'wide', context: 'formatting' })
          }
        },
        a: function (e, t, n) {
          var r = e.getUTCHours() / 12 >= 1 ? 'pm' : 'am'
          switch (t) {
            case 'a':
            case 'aa':
              return n.dayPeriod(r, { width: 'abbreviated', context: 'formatting' })
            case 'aaa':
              return n.dayPeriod(r, { width: 'abbreviated', context: 'formatting' }).toLowerCase()
            case 'aaaaa':
              return n.dayPeriod(r, { width: 'narrow', context: 'formatting' })
            case 'aaaa':
            default:
              return n.dayPeriod(r, { width: 'wide', context: 'formatting' })
          }
        },
        b: function (e, t, n) {
          var r,
            a = e.getUTCHours()
          switch (((r = 12 === a ? k : 0 === a ? T : a / 12 >= 1 ? 'pm' : 'am'), t)) {
            case 'b':
            case 'bb':
              return n.dayPeriod(r, { width: 'abbreviated', context: 'formatting' })
            case 'bbb':
              return n.dayPeriod(r, { width: 'abbreviated', context: 'formatting' }).toLowerCase()
            case 'bbbbb':
              return n.dayPeriod(r, { width: 'narrow', context: 'formatting' })
            case 'bbbb':
            default:
              return n.dayPeriod(r, { width: 'wide', context: 'formatting' })
          }
        },
        B: function (e, t, n) {
          var r,
            a = e.getUTCHours()
          switch (((r = a >= 17 ? P : a >= 12 ? N : a >= 4 ? E : z), t)) {
            case 'B':
            case 'BB':
            case 'BBB':
              return n.dayPeriod(r, { width: 'abbreviated', context: 'formatting' })
            case 'BBBBB':
              return n.dayPeriod(r, { width: 'narrow', context: 'formatting' })
            case 'BBBB':
            default:
              return n.dayPeriod(r, { width: 'wide', context: 'formatting' })
          }
        },
        h: function (e, t, n) {
          if ('ho' === t) {
            var r = e.getUTCHours() % 12
            return 0 === r && (r = 12), n.ordinalNumber(r, { unit: 'hour' })
          }
          return w.h(e, t)
        },
        H: function (e, t, n) {
          return 'Ho' === t ? n.ordinalNumber(e.getUTCHours(), { unit: 'hour' }) : w.H(e, t)
        },
        K: function (e, t, n) {
          var r = e.getUTCHours() % 12
          return 'Ko' === t ? n.ordinalNumber(r, { unit: 'hour' }) : v(r, t.length)
        },
        k: function (e, t, n) {
          var r = e.getUTCHours()
          return 0 === r && (r = 24), 'ko' === t ? n.ordinalNumber(r, { unit: 'hour' }) : v(r, t.length)
        },
        m: function (e, t, n) {
          return 'mo' === t ? n.ordinalNumber(e.getUTCMinutes(), { unit: 'minute' }) : w.m(e, t)
        },
        s: function (e, t, n) {
          return 'so' === t ? n.ordinalNumber(e.getUTCSeconds(), { unit: 'second' }) : w.s(e, t)
        },
        S: function (e, t) {
          return w.S(e, t)
        },
        X: function (e, t, n, r) {
          var a = (r._originalDate || e).getTimezoneOffset()
          if (0 === a) return 'Z'
          switch (t) {
            case 'X':
              return D(a)
            case 'XXXX':
            case 'XX':
              return A(a)
            case 'XXXXX':
            case 'XXX':
            default:
              return A(a, ':')
          }
        },
        x: function (e, t, n, r) {
          var a = (r._originalDate || e).getTimezoneOffset()
          switch (t) {
            case 'x':
              return D(a)
            case 'xxxx':
            case 'xx':
              return A(a)
            case 'xxxxx':
            case 'xxx':
            default:
              return A(a, ':')
          }
        },
        O: function (e, t, n, r) {
          var a = (r._originalDate || e).getTimezoneOffset()
          switch (t) {
            case 'O':
            case 'OO':
            case 'OOO':
              return 'GMT' + U(a, ':')
            case 'OOOO':
            default:
              return 'GMT' + A(a, ':')
          }
        },
        z: function (e, t, n, r) {
          var a = (r._originalDate || e).getTimezoneOffset()
          switch (t) {
            case 'z':
            case 'zz':
            case 'zzz':
              return 'GMT' + U(a, ':')
            case 'zzzz':
            default:
              return 'GMT' + A(a, ':')
          }
        },
        t: function (e, t, n, r) {
          var a = r._originalDate || e
          return v(Math.floor(a.getTime() / 1e3), t.length)
        },
        T: function (e, t, n, r) {
          return v((r._originalDate || e).getTime(), t.length)
        },
      }
      function F(e, t) {
        switch (e) {
          case 'P':
            return t.date({ width: 'short' })
          case 'PP':
            return t.date({ width: 'medium' })
          case 'PPP':
            return t.date({ width: 'long' })
          case 'PPPP':
          default:
            return t.date({ width: 'full' })
        }
      }
      function I(e, t) {
        switch (e) {
          case 'p':
            return t.time({ width: 'short' })
          case 'pp':
            return t.time({ width: 'medium' })
          case 'ppp':
            return t.time({ width: 'long' })
          case 'pppp':
          default:
            return t.time({ width: 'full' })
        }
      }
      var W = {
        p: I,
        P: function (e, t) {
          var n,
            r = e.match(/(P+)(p+)?/),
            a = r[1],
            i = r[2]
          if (!i) return F(e, t)
          switch (a) {
            case 'P':
              n = t.dateTime({ width: 'short' })
              break
            case 'PP':
              n = t.dateTime({ width: 'medium' })
              break
            case 'PPP':
              n = t.dateTime({ width: 'long' })
              break
            case 'PPPP':
            default:
              n = t.dateTime({ width: 'full' })
          }
          return n.replace('{{date}}', F(a, t)).replace('{{time}}', I(i, t))
        },
      }
      function Y(e) {
        var t = new Date(
          Date.UTC(
            e.getFullYear(),
            e.getMonth(),
            e.getDate(),
            e.getHours(),
            e.getMinutes(),
            e.getSeconds(),
            e.getMilliseconds()
          )
        )
        return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime()
      }
      var H = ['D', 'DD'],
        q = ['YY', 'YYYY']
      function B(e) {
        return -1 !== H.indexOf(e)
      }
      function L(e) {
        return -1 !== q.indexOf(e)
      }
      function X(e, t, n) {
        if ('YYYY' === e)
          throw new RangeError(
            'Use `yyyy` instead of `YYYY` (in `'
              .concat(t, '`) for formatting years to the input `')
              .concat(n, '`; see: https://git.io/fxCyr')
          )
        if ('YY' === e)
          throw new RangeError(
            'Use `yy` instead of `YY` (in `'
              .concat(t, '`) for formatting years to the input `')
              .concat(n, '`; see: https://git.io/fxCyr')
          )
        if ('D' === e)
          throw new RangeError(
            'Use `d` instead of `D` (in `'
              .concat(t, '`) for formatting days of the month to the input `')
              .concat(n, '`; see: https://git.io/fxCyr')
          )
        if ('DD' === e)
          throw new RangeError(
            'Use `dd` instead of `DD` (in `'
              .concat(t, '`) for formatting days of the month to the input `')
              .concat(n, '`; see: https://git.io/fxCyr')
          )
      }
      var G = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        Q = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        J = /^'([^]*?)'?$/,
        K = /''/g,
        V = /[a-zA-Z]/
      function Z(e, t, n) {
        r(2, arguments)
        var o = String(t),
          s = n || {},
          c = s.locale || f,
          u = c.options && c.options.firstWeekContainsDate,
          l = null == u ? 1 : m(u),
          d = null == s.firstWeekContainsDate ? l : m(s.firstWeekContainsDate)
        if (!(d >= 1 && d <= 7)) throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
        var h = c.options && c.options.weekStartsOn,
          p = null == h ? 0 : m(h),
          v = null == s.weekStartsOn ? p : m(s.weekStartsOn)
        if (!(v >= 0 && v <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
        if (!c.localize) throw new RangeError('locale must contain localize property')
        if (!c.formatLong) throw new RangeError('locale must contain formatLong property')
        var w = a(e)
        if (!i(w)) throw new RangeError('Invalid time value')
        var y = Y(w),
          b = g(w, y),
          x = { firstWeekContainsDate: d, weekStartsOn: v, locale: c, _originalDate: w },
          j = o
            .match(Q)
            .map(function (e) {
              var t = e[0]
              return 'p' === t || 'P' === t ? (0, W[t])(e, c.formatLong, x) : e
            })
            .join('')
            .match(G)
            .map(function (n) {
              if ("''" === n) return "'"
              var r = n[0]
              if ("'" === r) return $(n)
              var a = R[r]
              if (a)
                return (
                  !s.useAdditionalWeekYearTokens && L(n) && X(n, t, e),
                  !s.useAdditionalDayOfYearTokens && B(n) && X(n, t, e),
                  a(b, n, c.localize, x)
                )
              if (r.match(V))
                throw new RangeError('Format string contains an unescaped latin alphabet character `' + r + '`')
              return n
            })
            .join('')
        return j
      }
      function $(e) {
        return e.match(J)[1].replace(K, "'")
      }
    },
    vNVm: function (e, t, n) {
      'use strict'
      var r = n('zoAU')
      ;(t.__esModule = !0),
        (t.useIntersection = function (e) {
          var t = e.rootMargin,
            n = e.disabled || !o,
            c = (0, a.useRef)(),
            u = (0, a.useState)(!1),
            l = r(u, 2),
            d = l[0],
            h = l[1],
            f = (0, a.useCallback)(
              function (e) {
                c.current && (c.current(), (c.current = void 0)),
                  n ||
                    d ||
                    (e &&
                      e.tagName &&
                      (c.current = (function (e, t, n) {
                        var r = (function (e) {
                            var t = e.rootMargin || '',
                              n = s.get(t)
                            if (n) return n
                            var r = new Map(),
                              a = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = r.get(e.target),
                                    n = e.isIntersecting || e.intersectionRatio > 0
                                  t && n && t(n)
                                })
                              }, e)
                            return s.set(t, (n = { id: t, observer: a, elements: r })), n
                          })(n),
                          a = r.id,
                          i = r.observer,
                          o = r.elements
                        return (
                          o.set(e, t),
                          i.observe(e),
                          function () {
                            o.delete(e), i.unobserve(e), 0 === o.size && (i.disconnect(), s.delete(a))
                          }
                        )
                      })(
                        e,
                        function (e) {
                          return e && h(e)
                        },
                        { rootMargin: t }
                      )))
              },
              [n, t, d]
            )
          return (
            (0, a.useEffect)(
              function () {
                if (!o && !d) {
                  var e = (0, i.requestIdleCallback)(function () {
                    return h(!0)
                  })
                  return function () {
                    return (0, i.cancelIdleCallback)(e)
                  }
                }
              },
              [d]
            ),
            [f, d]
          )
        })
      var a = n('q1tI'),
        i = n('0G5g'),
        o = 'undefined' !== typeof IntersectionObserver
      var s = new Map()
    },
    vvao: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      }),
        n.d(t, 'b', function () {
          return o
        })
      var r = n('NmYn'),
        a = n.n(r)
      function i(e) {
        return e.replace(/\/?$/, '/')
      }
      function o(e) {
        return a()(e, { lower: !0 })
      }
    },
    w9Dq: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      var r = n('nKUr'),
        a =
          (n('q1tI'),
          function (e) {
            return Object(r.jsxs)('header', {
              className: 'max-w-screen-xl text-center pt-8 pb-16 px-3 mx-auto',
              children: [
                Object(r.jsx)('h1', { className: 'text-4xl text-gray-800 font-semibold', children: e.title }),
                Object(r.jsx)('div', { className: 'text-2xl text-gray-600 mt-1', children: e.description }),
              ],
            })
          })
    },
  },
])

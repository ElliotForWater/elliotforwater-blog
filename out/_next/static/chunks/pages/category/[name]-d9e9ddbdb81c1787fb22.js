_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [7],
  {
    '+HE8': function (e, t, s) {
      'use strict'
      s.r(t),
        s.d(t, '__N_SSG', function () {
          return o
        })
      var a = s('nKUr'),
        c = (s('q1tI'), s('mstU')),
        r = s('w9Dq'),
        n = s('YUtM'),
        i = s('FYFW'),
        l = s('8Ila'),
        o = !0
      t.default = function (e) {
        return Object(a.jsx)(i.a, {
          meta: Object(a.jsx)(n.a, { title: 'Category '.concat(e.categoryName), description: l.a.description }),
          hero: Object(a.jsx)(r.a, {
            title: 'Category '.concat(e.categoryName),
            description: ''.concat(e.categoryName, ' ').concat(l.a.description),
          }),
          children: Object(a.jsx)(c.a, { posts: e.gallery.posts }),
        })
      }
    },
    '7Lwl': function (e, t, s) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/category/[name]',
        function () {
          return s('+HE8')
        },
      ])
    },
    mstU: function (e, t, s) {
      'use strict'
      s.d(t, 'a', function () {
        return d
      })
      var a = s('nKUr'),
        c = (s('q1tI'), s('MX0m')),
        r = s.n(c),
        n = s('YFqc'),
        i = s.n(n)
      function l(e) {
        return '/' === e ? '/' : '/[page]'
      }
      var o = function (e) {
          return Object(a.jsxs)('div', {
            className: 'jsx-2013880487 pt-8 flex justify-center',
            children: [
              e.previous &&
                Object(a.jsx)('div', {
                  className: 'jsx-2013880487 mx-3',
                  children: Object(a.jsx)(i.a, {
                    href: l(e.previous),
                    as: e.previous,
                    children: Object(a.jsx)('a', { className: 'jsx-2013880487', children: '\u2190 Newer Posts' }),
                  }),
                }),
              e.next &&
                Object(a.jsx)('div', {
                  className: 'jsx-2013880487 mx-3',
                  children: Object(a.jsx)(i.a, {
                    href: l(e.next),
                    as: e.next,
                    children: Object(a.jsx)('a', { className: 'jsx-2013880487', children: 'Older Posts \u2192' }),
                  }),
                }),
              Object(a.jsx)(r.a, {
                id: '2013880487',
                children: [
                  'a.jsx-2013880487{border-bottom-width:2px;border-color:transparent;--tw-text-opacity:1;color:rgba(160,174,192,var(--tw-text-opacity));}',
                  'a.jsx-2013880487:hover{--tw-text-opacity:1;color:rgba(45,55,72,var(--tw-text-opacity));}',
                ],
              }),
            ],
          })
        },
        x = s('sWYD'),
        j = function (e) {
          return Object(a.jsxs)('li', {
            className:
              'jsx-1393390695 max-w-sm rounded-lg overflow-hidden bg-white shadow-sm mx-auto transform hover:shadow-xl hover:-translate-y-1',
            children: [
              Object(a.jsx)(i.a, {
                href: '/posts/[slug]',
                as: '/posts/'.concat(e.slug),
                children: Object(a.jsxs)('a', {
                  className: 'jsx-1393390695 flex flex-col h-full',
                  children: [
                    Object(a.jsx)('img', {
                      src: e.image.url,
                      alt: 'Preview '.concat(e.image.title),
                      className: 'jsx-1393390695 w-full',
                    }),
                    Object(a.jsxs)('div', {
                      className: 'jsx-1393390695 px-6 py-4 flex-grow',
                      children: [
                        Object(a.jsx)('h3', {
                          className: 'jsx-1393390695 font-bold text-xl text-gray-800',
                          children: e.title,
                        }),
                        Object(a.jsx)('p', {
                          className: 'jsx-1393390695 text-gray-500 text-xs mb-2',
                          children: Object(x.a)(new Date(e.date), 'LLL d, yyyy'),
                        }),
                        Object(a.jsx)('p', { className: 'jsx-1393390695 text-gray-700', children: e.description }),
                      ],
                    }),
                    Object(a.jsx)('div', {
                      className: 'jsx-1393390695 px-6 py-4 flex flex-wrap',
                      children: e.tags.map(function (e) {
                        var t = e.name
                        return Object(a.jsx)(
                          'div',
                          {
                            className:
                              'jsx-1393390695 bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2',
                            children: '#'.concat(t),
                          },
                          t
                        )
                      }),
                    }),
                  ],
                }),
              }),
              Object(a.jsx)(r.a, { id: '1393390695', children: ['a.jsx-1393390695:focus{outline-offset:-1px;}'] }),
            ],
          })
        },
        d = function (e) {
          return Object(a.jsx)('div', {
            className: 'w-full bg-gray-200',
            children: Object(a.jsxs)('div', {
              className: 'max-w-screen-xl px-3 py-12 mx-auto',
              children: [
                Object(a.jsx)('ul', {
                  className: 'grid grid-cols-1 gap-y-10 lg:grid-cols-2 xl:grid-cols-3',
                  children: e.posts.map(function (e) {
                    var t = e.slug,
                      s = e.title,
                      c = e.publishDate,
                      r = e.heroImage,
                      n = e.tagsCollection
                    return Object(a.jsx)(j, { title: s, description: s, date: c, image: r, slug: t, tags: n.items }, t)
                  }),
                }),
                e.pagination && Object(a.jsx)(o, { previous: e.pagination.previous, next: e.pagination.next }),
              ],
            }),
          })
        }
    },
  },
  [['7Lwl', 0, 2, 1, 3]],
])

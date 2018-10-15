(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    20: function(e, t, n) {
      e.exports = n(28);
    },
    28: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0),
        i = n.n(r),
        c = n(15),
        o = n(7),
        a = n(9),
        u = n(2),
        l = n(3),
        s = n(5),
        p = n(4),
        d = n(6),
        f = (function(e) {
          function t() {
            return (
              Object(u.a)(this, t),
              Object(s.a)(this, Object(p.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, e),
            Object(l.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this;
                  return i.a.createElement(
                    "div",
                    null,
                    i.a.createElement(
                      "form",
                      {
                        onSubmit: function(t) {
                          t.preventDefault(), e.addTodoClick(e.input);
                        }
                      },
                      i.a.createElement("input", {
                        ref: function(t) {
                          e.input = t;
                        }
                      }),
                      i.a.createElement(
                        "button",
                        { type: "submit" },
                        "Add Todo"
                      )
                    )
                  );
                }
              },
              {
                key: "addTodoClick",
                value: function(e) {
                  e.value.trim() &&
                    (this.props.addTodoAction(e.value), (e.value = ""));
                }
              }
            ]),
            t
          );
        })(r.Component),
        E = Object(o.b)(null, function(e) {
          return {
            addTodoAction: function(t) {
              e(
                (function(e) {
                  return { type: "ADD_TODOS", text: e, complete: !1 };
                })(t)
              );
            }
          };
        })(f),
        O = (function(e) {
          function t() {
            return (
              Object(u.a)(this, t),
              Object(s.a)(this, Object(p.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, e),
            Object(l.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.todos,
                    n = e.liClick,
                    r = e.filter,
                    c = this.showTodosByFilter(t, r);
                  return i.a.createElement(
                    "ul",
                    null,
                    c &&
                      c.map(function(e) {
                        return i.a.createElement(
                          "li",
                          {
                            key: e.id,
                            style: {
                              textDecoration: e.complete
                                ? "line-through"
                                : "none"
                            },
                            onClick: function() {
                              return n(e.id);
                            }
                          },
                          e.text
                        );
                      })
                  );
                }
              },
              {
                key: "showTodosByFilter",
                value: function(e, t) {
                  return "FILTER_COMPLETED" === t
                    ? e.filter(function(e) {
                        return e.complete;
                      })
                    : "FILTER_ACTIVE" === t
                      ? e.filter(function(e) {
                          return !e.complete;
                        })
                      : "FILTER_ALL" === t
                        ? e
                        : void 0;
                }
              }
            ]),
            t
          );
        })(r.Component),
        b = Object(o.b)(
          function(e, t) {
            return { todos: e.PageReducer.todos, filter: e.PageReducer.filter };
          },
          function(e) {
            return {
              liClick: function(t) {
                e(
                  (function(e) {
                    return { type: "TOGGLE_TODO", id: e };
                  })(t)
                );
              }
            };
          }
        )(O),
        h = (function(e) {
          function t() {
            return (
              Object(u.a)(this, t),
              Object(s.a)(this, Object(p.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, e),
            Object(l.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.children,
                    t = this.props.active,
                    n = this.props.onClick;
                  return t
                    ? i.a.createElement("span", null, e)
                    : i.a.createElement(
                        "a",
                        {
                          href: "",
                          onClick: function(e) {
                            e.preventDefault(), n();
                          }
                        },
                        e
                      );
                }
              }
            ]),
            t
          );
        })(r.Component),
        T = (function(e) {
          function t() {
            return (
              Object(u.a)(this, t),
              Object(s.a)(this, Object(p.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, e),
            Object(l.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.active;
                  return i.a.createElement(
                    "p",
                    null,
                    "Show:",
                    i.a.createElement(
                      h,
                      {
                        filter: "FILTER_ALL",
                        onClick: this.props.linkClick.bind(this, "FILTER_ALL"),
                        active: "FILTER_ALL" === e
                      },
                      "All"
                    ),
                    ",",
                    i.a.createElement(
                      h,
                      {
                        filter: "FILTER_ACTIVE",
                        onClick: this.props.linkClick.bind(
                          this,
                          "FILTER_ACTIVE"
                        ),
                        active: "FILTER_ACTIVE" === e
                      },
                      "Active"
                    ),
                    ",",
                    i.a.createElement(
                      h,
                      {
                        filter: "FILTER_COMPLETED",
                        onClick: this.props.linkClick.bind(
                          this,
                          "FILTER_COMPLETED"
                        ),
                        active: "FILTER_COMPLETED" === e
                      },
                      "Completed"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        m = Object(o.b)(
          function(e, t) {
            return { active: e.PageReducer.filter };
          },
          function(e, t) {
            return {
              linkClick: function(t) {
                e(
                  (function(e) {
                    return { type: "FILTER_VISIBLE", filter: e };
                  })(t)
                );
              }
            };
          }
        )(T),
        j = (function(e) {
          function t() {
            return (
              Object(u.a)(this, t),
              Object(s.a)(this, Object(p.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, e),
            Object(l.a)(t, [
              {
                key: "render",
                value: function() {
                  return i.a.createElement(
                    "div",
                    null,
                    i.a.createElement(E, null),
                    i.a.createElement(b, null),
                    i.a.createElement(m, null)
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        L = n(19),
        v = n(11),
        _ = 0,
        k = { todos: [], filter: "FILTER_ALL" },
        C = Object(a.b)({
          PageReducer: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : k,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "ADD_TODOS":
                return Object(v.a)({}, e, {
                  todos: Object(L.a)(e.todos).concat([
                    { id: _++, text: t.text }
                  ])
                });
              case "TOGGLE_TODO":
                var n = e.todos.map(function(e) {
                  return e.id === t.id
                    ? Object.assign(e, { complete: !e.complete })
                    : e;
                });
                return Object(v.a)({}, e, { todos: n });
              case "FILTER_VISIBLE":
                return Object(v.a)({}, e, { filter: t.filter });
              default:
                return e;
            }
          }
        }),
        I = Object(a.c)(
          C,
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        );
      Object(c.render)(
        i.a.createElement(o.a, { store: I }, i.a.createElement(j, null)),
        document.getElementById("root")
      );
    }
  },
  [[20, 2, 1]]
]);
//# sourceMappingURL=main.a82b2047.chunk.js.map

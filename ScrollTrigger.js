
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function r() {
    return (
      Se ||
      ("undefined" != typeof window &&
        (Se = window.gsap) &&
        Se.registerPlugin &&
        Se)
    );
  }
  function z(e, t) {
    return ~Ie.indexOf(e) && Ie[Ie.indexOf(e) + 1][t];
  }
  function A(e) {
    return !!~t.indexOf(e);
  }
  function B(e, t, r, n, o) {
    return e.addEventListener(t, r, { passive: !n, capture: !!o });
  }
  function C(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function F() {
    return (Re && Re.isPressed) || ze.cache++;
  }
  function G(r, n) {
    function ad(e) {
      if (e || 0 === e) {
        o && (Te.history.scrollRestoration = "manual");
        var t = Re && Re.isPressed;
        (e = ad.v = Math.round(e) || (Re && Re.iOS ? 1 : 0)),
          r(e),
          (ad.cacheID = ze.cache),
          t && i("ss", e);
      } else (n || ze.cache !== ad.cacheID || i("ref")) && ((ad.cacheID = ze.cache), (ad.v = r()));
      return ad.v + ad.offset;
    }
    return (ad.offset = 0), r && ad;
  }
  function J(e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || Se.utils.toArray)(e)[0] ||
      ("string" == typeof e && !1 !== Se.config().nullTargetWarn
        ? console.warn("Element not found:", e)
        : null)
    );
  }
  function K(t, e) {
    var r = e.s,
      n = e.sc;
    A(t) && (t = Ce.scrollingElement || Pe);
    var o = ze.indexOf(t),
      i = n === He.sc ? 1 : 2;
    ~o || (o = ze.push(t) - 1), ze[o + i] || B(t, "scroll", F);
    var a = ze[o + i],
      s =
        a ||
        (ze[o + i] =
          G(z(t, r), !0) ||
          (A(t)
            ? n
            : G(function (e) {
                return arguments.length ? (t[r] = e) : t[r];
              })));
    return (
      (s.target = t),
      a || (s.smooth = "smooth" === Se.getProperty(t, "scrollBehavior")),
      s
    );
  }
  function L(e, t, o) {
    function zd(e, t) {
      var r = Ye();
      t || n < r - s
        ? ((a = i), (i = e), (l = s), (s = r))
        : o
        ? (i += e)
        : (i = a + ((e - a) / (r - l)) * (s - l));
    }
    var i = e,
      a = e,
      s = Ye(),
      l = s,
      n = t || 50,
      c = Math.max(500, 3 * n);
    return {
      update: zd,
      reset: function reset() {
        (a = i = o ? 0 : i), (l = s = 0);
      },
      getVelocity: function getVelocity(e) {
        var t = l,
          r = a,
          n = Ye();
        return (
          (!e && 0 !== e) || e === i || zd(e),
          s === l || c < n - l
            ? 0
            : ((i + (o ? r : -r)) / ((o ? n : s) - t)) * 1e3
        );
      },
    };
  }
  function M(e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  }
  function N(e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  }
  function O() {
    (Ae = Se.core.globals().ScrollTrigger) &&
      Ae.core &&
      (function _integrate() {
        var e = Ae.core,
          r = e.bridge || {},
          t = e._scrollers,
          n = e._proxies;
        t.push.apply(t, ze),
          n.push.apply(n, Ie),
          (ze = t),
          (Ie = n),
          (i = function _bridge(e, t) {
            return r[e](t);
          });
      })();
  }
  function P(e) {
    return (
      (Se = e || r()) &&
        "undefined" != typeof document &&
        document.body &&
        ((Te = window),
        (Pe = (Ce = document).documentElement),
        (Me = Ce.body),
        (t = [Te, Ce, Pe, Me]),
        Se.utils.clamp,
        (De = Se.core.context || function () {}),
        (Oe = "onpointerenter" in Me ? "pointer" : "mouse"),
        (Ee = E.isTouch =
          Te.matchMedia &&
          Te.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Te ||
              0 < navigator.maxTouchPoints ||
              0 < navigator.msMaxTouchPoints
            ? 2
            : 0),
        (Be = E.eventTypes =
          (
            "ontouchstart" in Pe
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Pe
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (o = 0);
        }, 500),
        O(),
        (ke = 1)),
      ke
    );
  }
  var Se,
    ke,
    Te,
    Ce,
    Pe,
    Me,
    Ee,
    Oe,
    Ae,
    t,
    Re,
    Be,
    De,
    o = 1,
    Fe = [],
    ze = [],
    Ie = [],
    Ye = Date.now,
    i = function _bridge(e, t) {
      return t;
    },
    n = "scrollLeft",
    a = "scrollTop",
    qe = {
      s: n,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: G(function (e) {
        return arguments.length
          ? Te.scrollTo(e, He.sc())
          : Te.pageXOffset || Ce[n] || Pe[n] || Me[n] || 0;
      }),
    },
    He = {
      s: a,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: qe,
      sc: G(function (e) {
        return arguments.length
          ? Te.scrollTo(qe.sc(), e)
          : Te.pageYOffset || Ce[a] || Pe[a] || Me[a] || 0;
      }),
    };
  (qe.op = He), (ze.cache = 0);
  var E =
    ((Observer.prototype.init = function init(e) {
      ke || P(Se) || console.warn("Please gsap.registerPlugin(Observer)"),
        Ae || O();
      var o = e.tolerance,
        a = e.dragMinimum,
        t = e.type,
        i = e.target,
        r = e.lineHeight,
        n = e.debounce,
        s = e.preventDefault,
        l = e.onStop,
        c = e.onStopDelay,
        u = e.ignore,
        f = e.wheelSpeed,
        d = e.event,
        p = e.onDragStart,
        g = e.onDragEnd,
        h = e.onDrag,
        v = e.onPress,
        b = e.onRelease,
        m = e.onRight,
        y = e.onLeft,
        x = e.onUp,
        _ = e.onDown,
        w = e.onChangeX,
        S = e.onChangeY,
        k = e.onChange,
        T = e.onToggleX,
        E = e.onToggleY,
        R = e.onHover,
        D = e.onHoverEnd,
        z = e.onMove,
        I = e.ignoreCheck,
        Y = e.isNormalizer,
        q = e.onGestureStart,
        H = e.onGestureEnd,
        X = e.onWheel,
        W = e.onEnable,
        G = e.onDisable,
        V = e.onClick,
        U = e.scrollSpeed,
        j = e.capture,
        Q = e.allowClicks,
        $ = e.lockAxis,
        Z = e.onLockAxis;
      function $e() {
        return (ye = Ye());
      }
      function _e(e, t) {
        return (
          ((se.event = e) && u && ~u.indexOf(e.target)) ||
          (t && ge && "touch" !== e.pointerType) ||
          (I && I(e, t))
        );
      }
      function bf() {
        var e = (se.deltaX = N(be)),
          t = (se.deltaY = N(me)),
          r = Math.abs(e) >= o,
          n = Math.abs(t) >= o;
        k && (r || n) && k(se, e, t, be, me),
          r &&
            (m && 0 < se.deltaX && m(se),
            y && se.deltaX < 0 && y(se),
            w && w(se),
            T && se.deltaX < 0 != le < 0 && T(se),
            (le = se.deltaX),
            (be[0] = be[1] = be[2] = 0)),
          n &&
            (_ && 0 < se.deltaY && _(se),
            x && se.deltaY < 0 && x(se),
            S && S(se),
            E && se.deltaY < 0 != ce < 0 && E(se),
            (ce = se.deltaY),
            (me[0] = me[1] = me[2] = 0)),
          (ne || re) && (z && z(se), re && (h(se), (re = !1)), (ne = !1)),
          ie && !(ie = !1) && Z && Z(se),
          oe && (X(se), (oe = !1)),
          (ee = 0);
      }
      function cf(e, t, r) {
        (be[r] += e),
          (me[r] += t),
          se._vx.update(e),
          se._vy.update(t),
          n ? (ee = ee || requestAnimationFrame(bf)) : bf();
      }
      function df(e, t) {
        $ &&
          !ae &&
          ((se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y"), (ie = !0)),
          "y" !== ae && ((be[2] += e), se._vx.update(e, !0)),
          "x" !== ae && ((me[2] += t), se._vy.update(t, !0)),
          n ? (ee = ee || requestAnimationFrame(bf)) : bf();
      }
      function ef(e) {
        if (!_e(e, 1)) {
          var t = (e = M(e, s)).clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y,
            i = se.isDragging;
          (se.x = t),
            (se.y = r),
            (i ||
              Math.abs(se.startX - t) >= a ||
              Math.abs(se.startY - r) >= a) &&
              (h && (re = !0),
              i || (se.isDragging = !0),
              df(n, o),
              i || (p && p(se)));
        }
      }
      function hf(e) {
        return (
          e.touches &&
          1 < e.touches.length &&
          (se.isGesturing = !0) &&
          q(e, se.isDragging)
        );
      }
      function jf() {
        return (se.isGesturing = !1) || H(se);
      }
      function kf(e) {
        if (!_e(e)) {
          var t = ue(),
            r = fe();
          cf((t - de) * U, (r - pe) * U, 1),
            (de = t),
            (pe = r),
            l && te.restart(!0);
        }
      }
      function lf(e) {
        if (!_e(e)) {
          (e = M(e, s)), X && (oe = !0);
          var t =
            (1 === e.deltaMode ? r : 2 === e.deltaMode ? Te.innerHeight : 1) *
            f;
          cf(e.deltaX * t, e.deltaY * t, 0), l && !Y && te.restart(!0);
        }
      }
      function mf(e) {
        if (!_e(e)) {
          var t = e.clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y;
          (se.x = t), (se.y = r), (ne = !0), (n || o) && df(n, o);
        }
      }
      function nf(e) {
        (se.event = e), R(se);
      }
      function of(e) {
        (se.event = e), D(se);
      }
      function pf(e) {
        return _e(e) || (M(e, s) && V(se));
      }
      (this.target = i = J(i) || Pe),
        (this.vars = e),
        (u = u && Se.utils.toArray(u)),
        (o = o || 1e-9),
        (a = a || 0),
        (f = f || 1),
        (U = U || 1),
        (t = t || "wheel,touch,pointer"),
        (n = !1 !== n),
        (r = r || parseFloat(Te.getComputedStyle(Me).lineHeight) || 22);
      var ee,
        te,
        re,
        ne,
        oe,
        ie,
        ae,
        se = this,
        le = 0,
        ce = 0,
        ue = K(i, qe),
        fe = K(i, He),
        de = ue(),
        pe = fe(),
        ge =
          ~t.indexOf("touch") &&
          !~t.indexOf("pointer") &&
          "pointerdown" === Be[0],
        he = A(i),
        ve = i.ownerDocument || Ce,
        be = [0, 0, 0],
        me = [0, 0, 0],
        ye = 0,
        xe = (se.onPress = function (e) {
          _e(e, 1) ||
            (e && e.button) ||
            ((se.axis = ae = null),
            te.pause(),
            (se.isPressed = !0),
            (e = M(e)),
            (le = ce = 0),
            (se.startX = se.x = e.clientX),
            (se.startY = se.y = e.clientY),
            se._vx.reset(),
            se._vy.reset(),
            B(Y ? i : ve, Be[1], ef, s, !0),
            (se.deltaX = se.deltaY = 0),
            v && v(se));
        }),
        we = (se.onRelease = function (t) {
          if (!_e(t, 1)) {
            C(Y ? i : ve, Be[1], ef, !0);
            var e = !isNaN(se.y - se.startY),
              r =
                se.isDragging &&
                (3 < Math.abs(se.x - se.startX) ||
                  3 < Math.abs(se.y - se.startY)),
              n = M(t);
            !r &&
              e &&
              (se._vx.reset(),
              se._vy.reset(),
              s &&
                Q &&
                Se.delayedCall(0.08, function () {
                  if (300 < Ye() - ye && !t.defaultPrevented)
                    if (t.target.click) t.target.click();
                    else if (ve.createEvent) {
                      var e = ve.createEvent("MouseEvents");
                      e.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Te,
                        1,
                        n.screenX,
                        n.screenY,
                        n.clientX,
                        n.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        t.target.dispatchEvent(e);
                    }
                })),
              (se.isDragging = se.isGesturing = se.isPressed = !1),
              l && !Y && te.restart(!0),
              g && r && g(se),
              b && b(se, r);
          }
        });
      (te = se._dc =
        Se.delayedCall(c || 0.25, function onStopFunc() {
          se._vx.reset(), se._vy.reset(), te.pause(), l && l(se);
        }).pause()),
        (se.deltaX = se.deltaY = 0),
        (se._vx = L(0, 50, !0)),
        (se._vy = L(0, 50, !0)),
        (se.scrollX = ue),
        (se.scrollY = fe),
        (se.isDragging = se.isGesturing = se.isPressed = !1),
        De(this),
        (se.enable = function (e) {
          return (
            se.isEnabled ||
              (B(he ? ve : i, "scroll", F),
              0 <= t.indexOf("scroll") && B(he ? ve : i, "scroll", kf, s, j),
              0 <= t.indexOf("wheel") && B(i, "wheel", lf, s, j),
              ((0 <= t.indexOf("touch") && Ee) || 0 <= t.indexOf("pointer")) &&
                (B(i, Be[0], xe, s, j),
                B(ve, Be[2], we),
                B(ve, Be[3], we),
                Q && B(i, "click", $e, !1, !0),
                V && B(i, "click", pf),
                q && B(ve, "gesturestart", hf),
                H && B(ve, "gestureend", jf),
                R && B(i, Oe + "enter", nf),
                D && B(i, Oe + "leave", of),
                z && B(i, Oe + "move", mf)),
              (se.isEnabled = !0),
              e && e.type && xe(e),
              W && W(se)),
            se
          );
        }),
        (se.disable = function () {
          se.isEnabled &&
            (Fe.filter(function (e) {
              return e !== se && A(e.target);
            }).length || C(he ? ve : i, "scroll", F),
            se.isPressed &&
              (se._vx.reset(), se._vy.reset(), C(Y ? i : ve, Be[1], ef, !0)),
            C(he ? ve : i, "scroll", kf, j),
            C(i, "wheel", lf, j),
            C(i, Be[0], xe, j),
            C(ve, Be[2], we),
            C(ve, Be[3], we),
            C(i, "click", $e, !0),
            C(i, "click", pf),
            C(ve, "gesturestart", hf),
            C(ve, "gestureend", jf),
            C(i, Oe + "enter", nf),
            C(i, Oe + "leave", of),
            C(i, Oe + "move", mf),
            (se.isEnabled = se.isPressed = se.isDragging = !1),
            G && G(se));
        }),
        (se.kill = se.revert =
          function () {
            se.disable();
            var e = Fe.indexOf(se);
            0 <= e && Fe.splice(e, 1), Re === se && (Re = 0);
          }),
        Fe.push(se),
        Y && A(i) && (Re = se),
        se.enable(d);
    }),
    (function _createClass(e, t, r) {
      return (
        t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
      );
    })(Observer, [
      {
        key: "velocityX",
        get: function get() {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function get() {
          return this._vy.getVelocity();
        },
      },
    ]),
    Observer);
  function Observer(e) {
    this.init(e);
  }
  (E.version = "3.12.2"),
    (E.create = function (e) {
      return new E(e);
    }),
    (E.register = P),
    (E.getAll = function () {
      return Fe.slice();
    }),
    (E.getById = function (t) {
      return Fe.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    r() && Se.registerPlugin(E);
  function Aa(e, t, r) {
    var n = ct(e) && ("clamp(" === e.substr(0, 6) || -1 < e.indexOf("max"));
    return (r["_" + t + "Clamp"] = n) ? e.substr(6, e.length - 7) : e;
  }
  function Ba(e, t) {
    return !t || (ct(e) && "clamp(" === e.substr(0, 6))
      ? e
      : "clamp(" + e + ")";
  }
  function Da() {
    return (Ke = 1);
  }
  function Ea() {
    return (Ke = 0);
  }
  function Fa(e) {
    return e;
  }
  function Ga(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }
  function Ha() {
    return "undefined" != typeof window;
  }
  function Ia() {
    return Le || (Ha() && (Le = window.gsap) && Le.registerPlugin && Le);
  }
  function Ja(e) {
    return !!~l.indexOf(e);
  }
  function Ka(e) {
    return (
      ("Height" === e ? S : Ne["inner" + e]) ||
      Je["client" + e] ||
      We["client" + e]
    );
  }
  function La(e) {
    return (
      z(e, "getBoundingClientRect") ||
      (Ja(e)
        ? function () {
            return (Ot.width = Ne.innerWidth), (Ot.height = S), Ot;
          }
        : function () {
            return _t(e);
          })
    );
  }
  function Oa(e, t) {
    var r = t.s,
      n = t.d2,
      o = t.d,
      i = t.a;
    return Math.max(
      0,
      (r = "scroll" + n) && (i = z(e, r))
        ? i() - La(e)()[o]
        : Ja(e)
        ? (Je[r] || We[r]) - Ka(n)
        : e[r] - e["offset" + n]
    );
  }
  function Pa(e, t) {
    for (var r = 0; r < g.length; r += 3)
      (t && !~t.indexOf(g[r + 1])) || e(g[r], g[r + 1], g[r + 2]);
  }
  function Ra(e) {
    return "function" == typeof e;
  }
  function Sa(e) {
    return "number" == typeof e;
  }
  function Ta(e) {
    return "object" == typeof e;
  }
  function Ua(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause();
  }
  function Va(e, t) {
    if (e.enabled) {
      var r = t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  }
  function kb(e) {
    return Ne.getComputedStyle(e);
  }
  function mb(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  }
  function ob(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  }
  function pb(e) {
    var t,
      r = [],
      n = e.labels,
      o = e.duration();
    for (t in n) r.push(n[t] / o);
    return r;
  }
  function rb(o) {
    var i = Le.utils.snap(o),
      a =
        Array.isArray(o) &&
        o.slice(0).sort(function (e, t) {
          return e - t;
        });
    return a
      ? function (e, t, r) {
          var n;
          if ((void 0 === r && (r = 0.001), !t)) return i(e);
          if (0 < t) {
            for (e -= r, n = 0; n < a.length; n++) if (a[n] >= e) return a[n];
            return a[n - 1];
          }
          for (n = a.length, e += r; n--; ) if (a[n] <= e) return a[n];
          return a[0];
        }
      : function (e, t, r) {
          void 0 === r && (r = 0.001);
          var n = i(e);
          return !t || Math.abs(n - e) < r || n - e < 0 == t < 0
            ? n
            : i(t < 0 ? e - o : e + o);
        };
  }
  function tb(t, r, e, n) {
    return e.split(",").forEach(function (e) {
      return t(r, e, n);
    });
  }
  function ub(e, t, r, n, o) {
    return e.addEventListener(t, r, { passive: !n, capture: !!o });
  }
  function vb(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function wb(e, t, r) {
    (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r));
  }
  function Ab(e, t) {
    if (ct(e)) {
      var r = e.indexOf("="),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (n *= t / 100), (e = e.substr(0, r - 1))),
        (e =
          n +
          (e in q
            ? q[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  }
  function Bb(e, t, r, n, o, i, a, s) {
    var l = o.startColor,
      c = o.endColor,
      u = o.fontSize,
      f = o.indent,
      d = o.fontWeight,
      p = Xe.createElement("div"),
      g = Ja(r) || "fixed" === z(r, "pinType"),
      h = -1 !== e.indexOf("scroller"),
      v = g ? We : r,
      b = -1 !== e.indexOf("start"),
      m = b ? l : c,
      y =
        "border-color:" +
        m +
        ";font-size:" +
        u +
        ";color:" +
        m +
        ";font-weight:" +
        d +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (y += "position:" + ((h || s) && g ? "fixed;" : "absolute;")),
      (!h && !s && g) ||
        (y += (n === He ? D : I) + ":" + (i + parseFloat(f)) + "px;"),
      a &&
        (y +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (p._isStart = b),
      p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (p.style.cssText = y),
      (p.innerText = t || 0 === t ? e + "-" + t : e),
      v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p),
      (p._offset = p["offset" + n.op.d2]),
      H(p, 0, n, b),
      p
    );
  }
  function Gb() {
    return 34 < at() - st && (k = k || requestAnimationFrame(Q));
  }
  function Hb() {
    (v && v.isPressed && !(v.startX > We.clientWidth)) ||
      (ze.cache++,
      v ? (k = k || requestAnimationFrame(Q)) : Q(),
      st || V("scrollStart"),
      (st = at()));
  }
  function Ib() {
    (y = Ne.innerWidth), (m = Ne.innerHeight);
  }
  function Jb() {
    ze.cache++,
      je ||
        h ||
        Xe.fullscreenElement ||
        Xe.webkitFullscreenElement ||
        (b &&
          y === Ne.innerWidth &&
          !(Math.abs(Ne.innerHeight - m) > 0.25 * Ne.innerHeight)) ||
        c.restart(!0);
  }
  function Mb() {
    return vb(re, "scrollEnd", Mb) || Pt(!0);
  }
  function Pb(e) {
    for (var t = 0; t < U.length; t += 5)
      (!e || (U[t + 4] && U[t + 4].query === e)) &&
        ((U[t].style.cssText = U[t + 1]),
        U[t].getBBox && U[t].setAttribute("transform", U[t + 2] || ""),
        (U[t + 3].uncache = 1));
  }
  function Qb(e, t) {
    var r;
    for (Qe = 0; Qe < kt.length; Qe++)
      !(r = kt[Qe]) ||
        (t && r._ctx !== t) ||
        (e ? r.kill(1) : r.revert(!0, !0));
    t && Pb(t), t || V("revert");
  }
  function Rb(e, t) {
    ze.cache++,
      (!t && rt) ||
        ze.forEach(function (e) {
          return Ra(e) && e.cacheID++ && (e.rec = 0);
        }),
      ct(e) && (Ne.history.scrollRestoration = _ = e);
  }
  function Wb() {
    We.appendChild(w),
      (S = w.offsetHeight || Ne.innerHeight),
      We.removeChild(w);
  }
  function dc(e, t, r, n) {
    if (!e._gsap.swappedIn) {
      for (var o, i = $.length, a = t.style, s = e.style; i--; )
        a[(o = $[i])] = r[o];
      (a.position = "absolute" === r.position ? "absolute" : "relative"),
        "inline" === r.display && (a.display = "inline-block"),
        (s[I] = s[D] = "auto"),
        (a.flexBasis = r.flexBasis || "auto"),
        (a.overflow = "visible"),
        (a.boxSizing = "border-box"),
        (a[ft] = ob(e, qe) + xt),
        (a[dt] = ob(e, He) + xt),
        (a[bt] = s[mt] = s.top = s.left = "0"),
        Et(n),
        (s[ft] = s.maxWidth = r[ft]),
        (s[dt] = s.maxHeight = r[dt]),
        (s[bt] = r[bt]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  }
  function gc(e) {
    for (var t = Z.length, r = e.style, n = [], o = 0; o < t; o++)
      n.push(Z[o], r[Z[o]]);
    return (n.t = e), n;
  }
  function jc(e, t, r, n, o, i, a, s, l, c, u, f, d, p) {
    Ra(e) && (e = e(s)),
      ct(e) &&
        "max" === e.substr(0, 3) &&
        (e = f + ("=" === e.charAt(4) ? Ab("0" + e.substr(3), r) : 0));
    var g,
      h,
      v,
      b = d ? d.time() : 0;
    if ((d && d.seek(0), isNaN(e) || (e = +e), Sa(e)))
      d &&
        (e = Le.utils.mapRange(
          d.scrollTrigger.start,
          d.scrollTrigger.end,
          0,
          f,
          e
        )),
        a && H(a, r, n, !0);
    else {
      Ra(t) && (t = t(s));
      var m,
        y,
        x,
        _,
        w = (e || "0").split(" ");
      (v = J(t, s) || We),
        ((m = _t(v) || {}) && (m.left || m.top)) ||
          "none" !== kb(v).display ||
          ((_ = v.style.display),
          (v.style.display = "block"),
          (m = _t(v)),
          _ ? (v.style.display = _) : v.style.removeProperty("display")),
        (y = Ab(w[0], m[n.d])),
        (x = Ab(w[1] || "0", r)),
        (e = m[n.p] - l[n.p] - c + y + o - x),
        a && H(a, x, n, r - x < 20 || (a._isStart && 20 < x)),
        (r -= r - x);
    }
    if ((p && ((s[p] = e || -0.001), e < 0 && (e = 0)), i)) {
      var S = e + r,
        k = i._isStart;
      (g = "scroll" + n.d2),
        H(
          i,
          S,
          n,
          (k && 20 < S) ||
            (!k && (u ? Math.max(We[g], Je[g]) : i.parentNode[g]) <= S + 1)
        ),
        u &&
          ((l = _t(a)),
          u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + xt));
    }
    return (
      d &&
        v &&
        ((g = _t(v)),
        d.seek(f),
        (h = _t(v)),
        (d._caScrollDist = g[n.p] - h[n.p]),
        (e = (e / d._caScrollDist) * f)),
      d && d.seek(b),
      d ? e : Math.round(e)
    );
  }
  function lc(e, t, r, n) {
    if (e.parentNode !== t) {
      var o,
        i,
        a = e.style;
      if (t === We) {
        for (o in ((e._stOrig = a.cssText), (i = kb(e))))
          +o ||
            te.test(o) ||
            !i[o] ||
            "string" != typeof a[o] ||
            "0" === o ||
            (a[o] = i[o]);
        (a.top = r), (a.left = n);
      } else a.cssText = e._stOrig;
      (Le.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  }
  function mc(r, e, n) {
    var o = e,
      i = o;
    return function (e) {
      var t = Math.round(r());
      return (
        t !== o &&
          t !== i &&
          3 < Math.abs(t - o) &&
          3 < Math.abs(t - i) &&
          ((e = t), n && n()),
        (i = o),
        (o = e)
      );
    };
  }
  function nc(e, t, r) {
    var n = {};
    (n[t.p] = "+=" + r), Le.set(e, n);
  }
  function oc(c, e) {
    function uk(e, t, r, n, o) {
      var i = uk.tween,
        a = t.onComplete,
        s = {};
      r = r || u();
      var l = mc(u, r, function () {
        i.kill(), (uk.tween = 0);
      });
      return (
        (o = (n && o) || 0),
        (n = n || e - r),
        i && i.kill(),
        (t[f] = e),
        ((t.modifiers = s)[f] = function () {
          return l(r + n * i.ratio + o * i.ratio * i.ratio);
        }),
        (t.onUpdate = function () {
          ze.cache++, Q();
        }),
        (t.onComplete = function () {
          (uk.tween = 0), a && a.call(i);
        }),
        (i = uk.tween = Le.to(c, t))
      );
    }
    var u = K(c, e),
      f = "_scroll" + e.p2;
    return (
      ((c[f] = u).wheelHandler = function () {
        return uk.tween && uk.tween.kill() && (uk.tween = 0);
      }),
      ub(c, "wheel", u.wheelHandler),
      re.isTouch && ub(c, "touchmove", u.wheelHandler),
      uk
    );
  }
  var Le,
    s,
    Ne,
    Xe,
    Je,
    We,
    l,
    c,
    Ge,
    Ve,
    Ue,
    u,
    je,
    Ke,
    f,
    Qe,
    d,
    p,
    g,
    Ze,
    et,
    h,
    v,
    b,
    m,
    y,
    R,
    x,
    _,
    w,
    S,
    tt,
    k,
    rt,
    nt,
    ot,
    it = 1,
    at = Date.now,
    T = at(),
    st = 0,
    lt = 0,
    ct = function _isString(e) {
      return "string" == typeof e;
    },
    ut = Math.abs,
    D = "right",
    I = "bottom",
    ft = "width",
    dt = "height",
    pt = "Right",
    gt = "Left",
    ht = "Top",
    vt = "Bottom",
    bt = "padding",
    mt = "margin",
    yt = "Width",
    Y = "Height",
    xt = "px",
    _t = function _getBounds(e, t) {
      var r =
          t &&
          "matrix(1, 0, 0, 1, 0, 0)" !== kb(e)[f] &&
          Le.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    wt = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    St = { toggleActions: "play", anticipatePin: 0 },
    q = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    H = function _positionMarker(e, t, r, n) {
      var o = { display: "block" },
        i = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
      (e._isFlipped = n),
        (o[r.a + "Percent"] = n ? -100 : 0),
        (o[r.a] = n ? "1px" : 0),
        (o["border" + i + yt] = 1),
        (o["border" + a + yt] = 0),
        (o[r.p] = t + "px"),
        Le.set(e, o);
    },
    kt = [],
    Tt = {},
    X = {},
    W = [],
    V = function _dispatch(e) {
      return (
        (X[e] &&
          X[e].map(function (e) {
            return e();
          })) ||
        W
      );
    },
    U = [],
    Ct = 0,
    Pt = function _refreshAll(e, t) {
      if (!st || e) {
        Wb(),
          (rt = re.isRefreshing = !0),
          ze.forEach(function (e) {
            return Ra(e) && ++e.cacheID && (e.rec = e());
          });
        var r = V("refreshInit");
        Ze && re.sort(),
          t || Qb(),
          ze.forEach(function (e) {
            Ra(e) &&
              (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
          }),
          kt.slice(0).forEach(function (e) {
            return e.refresh();
          }),
          kt.forEach(function (e, t) {
            if (e._subPinOffset && e.pin) {
              var r = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                n = e.pin[r];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[r] - n), e.refresh();
            }
          }),
          kt.forEach(function (e) {
            var t = Oa(e.scroller, e._dir);
            ("max" === e.vars.end || (e._endClamp && e.end > t)) &&
              e.setPositions(e.start, Math.max(e.start + 1, t), !0);
          }),
          r.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          ze.forEach(function (e) {
            Ra(e) &&
              (e.smooth &&
                requestAnimationFrame(function () {
                  return (e.target.style.scrollBehavior = "smooth");
                }),
              e.rec && e(e.rec));
          }),
          Rb(_, 1),
          c.pause(),
          Ct++,
          Q((rt = 2)),
          kt.forEach(function (e) {
            return Ra(e.vars.onRefresh) && e.vars.onRefresh(e);
          }),
          (rt = re.isRefreshing = !1),
          V("refresh");
      } else ub(re, "scrollEnd", Mb);
    },
    j = 0,
    Mt = 1,
    Q = function _updateAll(e) {
      if (!rt || 2 === e) {
        (re.isUpdating = !0), ot && ot.update(0);
        var t = kt.length,
          r = at(),
          n = 50 <= r - T,
          o = t && kt[0].scroll();
        if (
          ((Mt = o < j ? -1 : 1),
          rt || (j = o),
          n &&
            (st && !Ke && 200 < r - st && ((st = 0), V("scrollEnd")),
            (Ue = T),
            (T = r)),
          Mt < 0)
        ) {
          for (Qe = t; 0 < Qe--; ) kt[Qe] && kt[Qe].update(0, n);
          Mt = 1;
        } else for (Qe = 0; Qe < t; Qe++) kt[Qe] && kt[Qe].update(0, n);
        re.isUpdating = !1;
      }
      k = 0;
    },
    $ = [
      "left",
      "top",
      I,
      D,
      mt + vt,
      mt + pt,
      mt + ht,
      mt + gt,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    Z = $.concat([
      ft,
      dt,
      "boxSizing",
      "max" + yt,
      "max" + Y,
      "position",
      mt,
      bt,
      bt + ht,
      bt + pt,
      bt + vt,
      bt + gt,
    ]),
    ee = /([A-Z])/g,
    Et = function _setState(e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          o = e.length,
          i = 0;
        for ((e.t._gsap || Le.core.getCache(e.t)).uncache = 1; i < o; i += 2)
          (r = e[i + 1]),
            (t = e[i]),
            r
              ? (n[t] = r)
              : n[t] && n.removeProperty(t.replace(ee, "-$1").toLowerCase());
      }
    },
    Ot = { left: 0, top: 0 },
    te = /(webkit|moz|length|cssText|inset)/i,
    re =
      ((ScrollTrigger.prototype.init = function init(E, O) {
        if (
          ((this.progress = this.start = 0), this.vars && this.kill(!0, !0), lt)
        ) {
          var A,
            n,
            p,
            R,
            B,
            D,
            F,
            I,
            Y,
            q,
            H,
            e,
            L,
            N,
            X,
            W,
            G,
            V,
            t,
            U,
            b,
            j,
            Q,
            m,
            $,
            y,
            Z,
            x,
            r,
            _,
            w,
            ee,
            o,
            g,
            te,
            re,
            ne,
            S,
            i,
            k = (E = mb(ct(E) || Sa(E) || E.nodeType ? { trigger: E } : E, St))
              .onUpdate,
            T = E.toggleClass,
            a = E.id,
            C = E.onToggle,
            oe = E.onRefresh,
            P = E.scrub,
            ie = E.trigger,
            ae = E.pin,
            se = E.pinSpacing,
            le = E.invalidateOnRefresh,
            M = E.anticipatePin,
            s = E.onScrubComplete,
            h = E.onSnapComplete,
            ce = E.once,
            ue = E.snap,
            fe = E.pinReparent,
            l = E.pinSpacer,
            de = E.containerAnimation,
            pe = E.fastScrollEnd,
            ge = E.preventOverlaps,
            he =
              E.horizontal || (E.containerAnimation && !1 !== E.horizontal)
                ? qe
                : He,
            ve = !P && 0 !== P,
            be = J(E.scroller || Ne),
            c = Le.core.getCache(be),
            me = Ja(be),
            ye =
              "fixed" ===
              ("pinType" in E
                ? E.pinType
                : z(be, "pinType") || (me && "fixed")),
            xe = [E.onEnter, E.onLeave, E.onEnterBack, E.onLeaveBack],
            _e = ve && E.toggleActions.split(" "),
            we = "markers" in E ? E.markers : St.markers,
            Se = me ? 0 : parseFloat(kb(be)["border" + he.p2 + yt]) || 0,
            ke = this,
            Te =
              E.onRefreshInit &&
              function () {
                return E.onRefreshInit(ke);
              },
            Ce = (function _getSizeFunc(e, t, r) {
              var n = r.d,
                o = r.d2,
                i = r.a;
              return (i = z(e, "getBoundingClientRect"))
                ? function () {
                    return i()[n];
                  }
                : function () {
                    return (t ? Ka(o) : e["client" + o]) || 0;
                  };
            })(be, me, he),
            Pe = (function _getOffsetsFunc(e, t) {
              return !t || ~Ie.indexOf(e)
                ? La(e)
                : function () {
                    return Ot;
                  };
            })(be, me),
            Me = 0,
            Ee = 0,
            Oe = 0,
            Ae = K(be, he);
          if (
            ((ke._startClamp = ke._endClamp = !1),
            (ke._dir = he),
            (M *= 45),
            (ke.scroller = be),
            (ke.scroll = de ? de.time.bind(de) : Ae),
            (R = Ae()),
            (ke.vars = E),
            (O = O || E.animation),
            "refreshPriority" in E &&
              ((Ze = 1), -9999 === E.refreshPriority && (ot = ke)),
            (c.tweenScroll = c.tweenScroll || {
              top: oc(be, He),
              left: oc(be, qe),
            }),
            (ke.tweenTo = A = c.tweenScroll[he.p]),
            (ke.scrubDuration = function (e) {
              (o = Sa(e) && e)
                ? ee
                  ? ee.duration(e)
                  : (ee = Le.to(O, {
                      ease: "expo",
                      totalProgress: "+=0",
                      duration: o,
                      paused: !0,
                      onComplete: function onComplete() {
                        return s && s(ke);
                      },
                    }))
                : (ee && ee.progress(1).kill(), (ee = 0));
            }),
            O &&
              ((O.vars.lazy = !1),
              (O._initted && !ke.isReverted) ||
                (!1 !== O.vars.immediateRender &&
                  !1 !== E.immediateRender &&
                  O.duration() &&
                  O.render(0, !0, !0)),
              (ke.animation = O.pause()),
              (O.scrollTrigger = ke).scrubDuration(P),
              (_ = 0),
              (a = a || O.vars.id)),
            ue &&
              ((Ta(ue) && !ue.push) || (ue = { snapTo: ue }),
              "scrollBehavior" in We.style &&
                Le.set(me ? [We, Je] : be, { scrollBehavior: "auto" }),
              ze.forEach(function (e) {
                return (
                  Ra(e) &&
                  e.target === (me ? Xe.scrollingElement || Je : be) &&
                  (e.smooth = !1)
                );
              }),
              (p = Ra(ue.snapTo)
                ? ue.snapTo
                : "labels" === ue.snapTo
                ? (function _getClosestLabel(t) {
                    return function (e) {
                      return Le.utils.snap(pb(t), e);
                    };
                  })(O)
                : "labelsDirectional" === ue.snapTo
                ? (function _getLabelAtDirection(r) {
                    return function (e, t) {
                      return rb(pb(r))(e, t.direction);
                    };
                  })(O)
                : !1 !== ue.directional
                ? function (e, t) {
                    return rb(ue.snapTo)(e, at() - Ee < 500 ? 0 : t.direction);
                  }
                : Le.utils.snap(ue.snapTo)),
              (g = ue.duration || { min: 0.1, max: 2 }),
              (g = Ta(g) ? Ve(g.min, g.max) : Ve(g, g)),
              (te = Le.delayedCall(ue.delay || o / 2 || 0.1, function () {
                var e = Ae(),
                  t = at() - Ee < 500,
                  r = A.tween;
                if (
                  !(t || Math.abs(ke.getVelocity()) < 10) ||
                  r ||
                  Ke ||
                  Me === e
                )
                  ke.isActive && Me !== e && te.restart(!0);
                else {
                  var n = (e - D) / N,
                    o = O && !ve ? O.totalProgress() : n,
                    i = t ? 0 : ((o - w) / (at() - Ue)) * 1e3 || 0,
                    a = Le.utils.clamp(-n, 1 - n, (ut(i / 2) * i) / 0.185),
                    s = n + (!1 === ue.inertia ? 0 : a),
                    l = Ve(0, 1, p(s, ke)),
                    c = Math.round(D + l * N),
                    u = ue.onStart,
                    f = ue.onInterrupt,
                    d = ue.onComplete;
                  if (e <= F && D <= e && c !== e) {
                    if (r && !r._initted && r.data <= ut(c - e)) return;
                    !1 === ue.inertia && (a = l - n),
                      A(
                        c,
                        {
                          duration: g(
                            ut(
                              (0.185 * Math.max(ut(s - o), ut(l - o))) /
                                i /
                                0.05 || 0
                            )
                          ),
                          ease: ue.ease || "power3",
                          data: ut(c - e),
                          onInterrupt: function onInterrupt() {
                            return te.restart(!0) && f && f(ke);
                          },
                          onComplete: function onComplete() {
                            ke.update(),
                              (Me = Ae()),
                              (_ = w =
                                O && !ve ? O.totalProgress() : ke.progress),
                              h && h(ke),
                              d && d(ke);
                          },
                        },
                        e,
                        a * N,
                        c - e - a * N
                      ),
                      u && u(ke, A.tween);
                  }
                }
              }).pause())),
            a && (Tt[a] = ke),
            (i =
              (i =
                (ie = ke.trigger = J(ie || (!0 !== ae && ae))) &&
                ie._gsap &&
                ie._gsap.stRevert) && i(ke)),
            (ae = !0 === ae ? ie : J(ae)),
            ct(T) && (T = { targets: ie, className: T }),
            ae &&
              (!1 === se ||
                se === mt ||
                (se =
                  !(
                    !se &&
                    ae.parentNode &&
                    ae.parentNode.style &&
                    "flex" === kb(ae.parentNode).display
                  ) && bt),
              (ke.pin = ae),
              (n = Le.core.getCache(ae)).spacer
                ? (X = n.pinState)
                : (l &&
                    ((l = J(l)) &&
                      !l.nodeType &&
                      (l = l.current || l.nativeElement),
                    (n.spacerIsNative = !!l),
                    l && (n.spacerState = gc(l))),
                  (n.spacer = V = l || Xe.createElement("div")),
                  V.classList.add("pin-spacer"),
                  a && V.classList.add("pin-spacer-" + a),
                  (n.pinState = X = gc(ae))),
              !1 !== E.force3D && Le.set(ae, { force3D: !0 }),
              (ke.spacer = V = n.spacer),
              (r = kb(ae)),
              (m = r[se + he.os2]),
              (U = Le.getProperty(ae)),
              (b = Le.quickSetter(ae, he.a, xt)),
              dc(ae, V, r),
              (G = gc(ae))),
            we)
          ) {
            (e = Ta(we) ? mb(we, wt) : wt),
              (q = Bb("scroller-start", a, be, he, e, 0)),
              (H = Bb("scroller-end", a, be, he, e, 0, q)),
              (t = q["offset" + he.op.d2]);
            var u = J(z(be, "content") || be);
            (I = this.markerStart = Bb("start", a, u, he, e, t, 0, de)),
              (Y = this.markerEnd = Bb("end", a, u, he, e, t, 0, de)),
              de && (S = Le.quickSetter([I, Y], he.a, xt)),
              ye ||
                (Ie.length && !0 === z(be, "fixedMarkers")) ||
                ((function _makePositionable(e) {
                  var t = kb(e).position;
                  e.style.position =
                    "absolute" === t || "fixed" === t ? t : "relative";
                })(me ? We : be),
                Le.set([q, H], { force3D: !0 }),
                (y = Le.quickSetter(q, he.a, xt)),
                (x = Le.quickSetter(H, he.a, xt)));
          }
          if (de) {
            var f = de.vars.onUpdate,
              d = de.vars.onUpdateParams;
            de.eventCallback("onUpdate", function () {
              ke.update(0, 0, 1), f && f.apply(de, d || []);
            });
          }
          if (
            ((ke.previous = function () {
              return kt[kt.indexOf(ke) - 1];
            }),
            (ke.next = function () {
              return kt[kt.indexOf(ke) + 1];
            }),
            (ke.revert = function (e, t) {
              if (!t) return ke.kill(!0);
              var r = !1 !== e || !ke.enabled,
                n = je;
              r !== ke.isReverted &&
                (r &&
                  ((re = Math.max(Ae(), ke.scroll.rec || 0)),
                  (Oe = ke.progress),
                  (ne = O && O.progress())),
                I &&
                  [I, Y, q, H].forEach(function (e) {
                    return (e.style.display = r ? "none" : "block");
                  }),
                r && (je = ke).update(r),
                !ae ||
                  (fe && ke.isActive) ||
                  (r
                    ? (function _swapPinOut(e, t, r) {
                        Et(r);
                        var n = e._gsap;
                        if (n.spacerIsNative) Et(n.spacerState);
                        else if (e._gsap.swappedIn) {
                          var o = t.parentNode;
                          o && (o.insertBefore(e, t), o.removeChild(t));
                        }
                        e._gsap.swappedIn = !1;
                      })(ae, V, X)
                    : dc(ae, V, kb(ae), $)),
                r || ke.update(r),
                (je = n),
                (ke.isReverted = r));
            }),
            (ke.refresh = function (e, t, r, n) {
              if ((!je && ke.enabled) || t)
                if (ae && e && st) ub(ScrollTrigger, "scrollEnd", Mb);
                else {
                  !rt && Te && Te(ke),
                    (je = ke),
                    A.tween && !r && (A.tween.kill(), (A.tween = 0)),
                    ee && ee.pause(),
                    le && O && O.revert({ kill: !1 }).invalidate(),
                    ke.isReverted || ke.revert(!0, !0),
                    (ke._subPinOffset = !1);
                  var o,
                    i,
                    a,
                    s,
                    l,
                    c,
                    u,
                    f,
                    d,
                    p,
                    g,
                    h,
                    v,
                    b = Ce(),
                    m = Pe(),
                    y = de ? de.duration() : Oa(be, he),
                    x = N <= 0.01,
                    _ = 0,
                    w = n || 0,
                    S = Ta(r) ? r.end : E.end,
                    k = E.endTrigger || ie,
                    T = Ta(r)
                      ? r.start
                      : E.start ||
                        (0 !== E.start && ie ? (ae ? "0 0" : "0 100%") : 0),
                    C = (ke.pinnedContainer =
                      E.pinnedContainer && J(E.pinnedContainer, ke)),
                    P = (ie && Math.max(0, kt.indexOf(ke))) || 0,
                    M = P;
                  for (
                    we &&
                    Ta(r) &&
                    ((h = Le.getProperty(q, he.p)),
                    (v = Le.getProperty(H, he.p)));
                    M--;

                  )
                    (c = kt[M]).end || c.refresh(0, 1) || (je = ke),
                      !(u = c.pin) ||
                        (u !== ie && u !== ae && u !== C) ||
                        c.isReverted ||
                        ((p = p || []).unshift(c), c.revert(!0, !0)),
                      c !== kt[M] && (P--, M--);
                  for (
                    Ra(T) && (T = T(ke)),
                      T = Aa(T, "start", ke),
                      D =
                        jc(
                          T,
                          ie,
                          b,
                          he,
                          Ae(),
                          I,
                          q,
                          ke,
                          m,
                          Se,
                          ye,
                          y,
                          de,
                          ke._startClamp && "_startClamp"
                        ) || (ae ? -0.001 : 0),
                      Ra(S) && (S = S(ke)),
                      ct(S) &&
                        !S.indexOf("+=") &&
                        (~S.indexOf(" ")
                          ? (S = (ct(T) ? T.split(" ")[0] : "") + S)
                          : ((_ = Ab(S.substr(2), b)),
                            (S = ct(T)
                              ? T
                              : (de
                                  ? Le.utils.mapRange(
                                      0,
                                      de.duration(),
                                      de.scrollTrigger.start,
                                      de.scrollTrigger.end,
                                      D
                                    )
                                  : D) + _),
                            (k = ie))),
                      S = Aa(S, "end", ke),
                      F =
                        Math.max(
                          D,
                          jc(
                            S || (k ? "100% 0" : y),
                            k,
                            b,
                            he,
                            Ae() + _,
                            Y,
                            H,
                            ke,
                            m,
                            Se,
                            ye,
                            y,
                            de,
                            ke._endClamp && "_endClamp"
                          )
                        ) || -0.001,
                      _ = 0,
                      M = P;
                    M--;

                  )
                    (u = (c = kt[M]).pin) &&
                      c.start - c._pinPush <= D &&
                      !de &&
                      0 < c.end &&
                      ((o =
                        c.end -
                        (ke._startClamp ? Math.max(0, c.start) : c.start)),
                      ((u === ie && c.start - c._pinPush < D) || u === C) &&
                        isNaN(T) &&
                        (_ += o * (1 - c.progress)),
                      u === ae && (w += o));
                  if (
                    ((D += _),
                    (F += _),
                    ke._startClamp && (ke._startClamp += _),
                    ke._endClamp &&
                      !rt &&
                      ((ke._endClamp = F || -0.001),
                      (F = Math.min(F, Oa(be, he)))),
                    (N = F - D || ((D -= 0.01) && 0.001)),
                    x &&
                      (Oe = Le.utils.clamp(0, 1, Le.utils.normalize(D, F, re))),
                    (ke._pinPush = w),
                    I &&
                      _ &&
                      (((o = {})[he.a] = "+=" + _),
                      C && (o[he.p] = "-=" + Ae()),
                      Le.set([I, Y], o)),
                    ae)
                  )
                    (o = kb(ae)),
                      (s = he === He),
                      (a = Ae()),
                      (j = parseFloat(U(he.a)) + w),
                      !y &&
                        1 < F &&
                        ((g = {
                          style: (g = (me ? Xe.scrollingElement || Je : be)
                            .style),
                          value: g["overflow" + he.a.toUpperCase()],
                        }),
                        me &&
                          "scroll" !==
                            kb(We)["overflow" + he.a.toUpperCase()] &&
                          (g.style["overflow" + he.a.toUpperCase()] =
                            "scroll")),
                      dc(ae, V, o),
                      (G = gc(ae)),
                      (i = _t(ae, !0)),
                      (f = ye && K(be, s ? qe : He)()),
                      se &&
                        ((($ = [se + he.os2, N + w + xt]).t = V),
                        (M = se === bt ? ob(ae, he) + N + w : 0) &&
                          $.push(he.d, M + xt),
                        Et($),
                        C &&
                          kt.forEach(function (e) {
                            e.pin === C &&
                              !1 !== e.vars.pinSpacing &&
                              (e._subPinOffset = !0);
                          }),
                        ye && Ae(re)),
                      ye &&
                        (((l = {
                          top: i.top + (s ? a - D : f) + xt,
                          left: i.left + (s ? f : a - D) + xt,
                          boxSizing: "border-box",
                          position: "fixed",
                        })[ft] = l.maxWidth =
                          Math.ceil(i.width) + xt),
                        (l[dt] = l.maxHeight = Math.ceil(i.height) + xt),
                        (l[mt] =
                          l[mt + ht] =
                          l[mt + pt] =
                          l[mt + vt] =
                          l[mt + gt] =
                            "0"),
                        (l[bt] = o[bt]),
                        (l[bt + ht] = o[bt + ht]),
                        (l[bt + pt] = o[bt + pt]),
                        (l[bt + vt] = o[bt + vt]),
                        (l[bt + gt] = o[bt + gt]),
                        (W = (function _copyState(e, t, r) {
                          for (
                            var n, o = [], i = e.length, a = r ? 8 : 0;
                            a < i;
                            a += 2
                          )
                            (n = e[a]), o.push(n, n in t ? t[n] : e[a + 1]);
                          return (o.t = e.t), o;
                        })(X, l, fe)),
                        rt && Ae(0)),
                      O
                        ? ((d = O._initted),
                          et(1),
                          O.render(O.duration(), !0, !0),
                          (Q = U(he.a) - j + N + w),
                          (Z = 1 < Math.abs(N - Q)),
                          ye && Z && W.splice(W.length - 2, 2),
                          O.render(0, !0, !0),
                          d || O.invalidate(!0),
                          O.parent || O.totalTime(O.totalTime()),
                          et(0))
                        : (Q = N),
                      g &&
                        (g.value
                          ? (g.style["overflow" + he.a.toUpperCase()] = g.value)
                          : g.style.removeProperty("overflow-" + he.a));
                  else if (ie && Ae() && !de)
                    for (i = ie.parentNode; i && i !== We; )
                      i._pinOffset &&
                        ((D -= i._pinOffset), (F -= i._pinOffset)),
                        (i = i.parentNode);
                  p &&
                    p.forEach(function (e) {
                      return e.revert(!1, !0);
                    }),
                    (ke.start = D),
                    (ke.end = F),
                    (R = B = rt ? re : Ae()),
                    de || rt || (R < re && Ae(re), (ke.scroll.rec = 0)),
                    ke.revert(!1, !0),
                    (Ee = at()),
                    te && ((Me = -1), te.restart(!0)),
                    (je = 0),
                    O &&
                      ve &&
                      (O._initted || ne) &&
                      O.progress() !== ne &&
                      O.progress(ne || 0, !0).render(O.time(), !0, !0),
                    (x || Oe !== ke.progress || de) &&
                      (O &&
                        !ve &&
                        O.totalProgress(
                          de && D < -0.001 && !Oe
                            ? Le.utils.normalize(D, F, 0)
                            : Oe,
                          !0
                        ),
                      (ke.progress = x || (R - D) / N === Oe ? 0 : Oe)),
                    ae && se && (V._pinOffset = Math.round(ke.progress * Q)),
                    ee && ee.invalidate(),
                    isNaN(h) ||
                      ((h -= Le.getProperty(q, he.p)),
                      (v -= Le.getProperty(H, he.p)),
                      nc(q, he, h),
                      nc(I, he, h - (n || 0)),
                      nc(H, he, v),
                      nc(Y, he, v - (n || 0))),
                    x && !rt && ke.update(),
                    !oe || rt || L || ((L = !0), oe(ke), (L = !1));
                }
            }),
            (ke.getVelocity = function () {
              return ((Ae() - B) / (at() - Ue)) * 1e3 || 0;
            }),
            (ke.endAnimation = function () {
              Ua(ke.callbackAnimation),
                O &&
                  (ee
                    ? ee.progress(1)
                    : O.paused()
                    ? ve || Ua(O, ke.direction < 0, 1)
                    : Ua(O, O.reversed()));
            }),
            (ke.labelToScroll = function (e) {
              return (
                (O &&
                  O.labels &&
                  (D || ke.refresh() || D) +
                    (O.labels[e] / O.duration()) * N) ||
                0
              );
            }),
            (ke.getTrailing = function (t) {
              var e = kt.indexOf(ke),
                r =
                  0 < ke.direction ? kt.slice(0, e).reverse() : kt.slice(e + 1);
              return (
                ct(t)
                  ? r.filter(function (e) {
                      return e.vars.preventOverlaps === t;
                    })
                  : r
              ).filter(function (e) {
                return 0 < ke.direction ? e.end <= D : e.start >= F;
              });
            }),
            (ke.update = function (e, t, r) {
              if (!de || r || e) {
                var n,
                  o,
                  i,
                  a,
                  s,
                  l,
                  c,
                  u = !0 === rt ? re : ke.scroll(),
                  f = e ? 0 : (u - D) / N,
                  d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                  p = ke.progress;
                if (
                  (t &&
                    ((B = R),
                    (R = de ? Ae() : u),
                    ue && ((w = _), (_ = O && !ve ? O.totalProgress() : d))),
                  M &&
                    !d &&
                    ae &&
                    !je &&
                    !it &&
                    st &&
                    D < u + ((u - B) / (at() - Ue)) * M &&
                    (d = 1e-4),
                  d !== p && ke.enabled)
                ) {
                  if (
                    ((a =
                      (s =
                        (n = ke.isActive = !!d && d < 1) != (!!p && p < 1)) ||
                      !!d != !!p),
                    (ke.direction = p < d ? 1 : -1),
                    (ke.progress = d),
                    a &&
                      !je &&
                      ((o = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3),
                      ve &&
                        ((i =
                          (!s && "none" !== _e[o + 1] && _e[o + 1]) || _e[o]),
                        (c =
                          O && ("complete" === i || "reset" === i || i in O)))),
                    ge &&
                      (s || c) &&
                      (c || P || !O) &&
                      (Ra(ge)
                        ? ge(ke)
                        : ke.getTrailing(ge).forEach(function (e) {
                            return e.endAnimation();
                          })),
                    ve ||
                      (!ee || je || it
                        ? O && O.totalProgress(d, !(!je || (!Ee && !e)))
                        : (ee._dp._time - ee._start !== ee._time &&
                            ee.render(ee._dp._time - ee._start),
                          ee.resetTo
                            ? ee.resetTo("totalProgress", d, O._tTime / O._tDur)
                            : ((ee.vars.totalProgress = d),
                              ee.invalidate().restart()))),
                    ae)
                  )
                    if ((e && se && (V.style[se + he.os2] = m), ye)) {
                      if (a) {
                        if (
                          ((l =
                            !e && p < d && u < F + 1 && u + 1 >= Oa(be, he)),
                          fe)
                        )
                          if (e || (!n && !l)) lc(ae, V);
                          else {
                            var g = _t(ae, !0),
                              h = u - D;
                            lc(
                              ae,
                              We,
                              g.top + (he === He ? h : 0) + xt,
                              g.left + (he === He ? 0 : h) + xt
                            );
                          }
                        Et(n || l ? W : G),
                          (Z && d < 1 && n) || b(j + (1 !== d || l ? 0 : Q));
                      }
                    } else b(Ga(j + Q * d));
                  !ue || A.tween || je || it || te.restart(!0),
                    T &&
                      (s || (ce && d && (d < 1 || !tt))) &&
                      Ge(T.targets).forEach(function (e) {
                        return e.classList[n || ce ? "add" : "remove"](
                          T.className
                        );
                      }),
                    !k || ve || e || k(ke),
                    a && !je
                      ? (ve &&
                          (c &&
                            ("complete" === i
                              ? O.pause().totalProgress(1)
                              : "reset" === i
                              ? O.restart(!0).pause()
                              : "restart" === i
                              ? O.restart(!0)
                              : O[i]()),
                          k && k(ke)),
                        (!s && tt) ||
                          (C && s && Va(ke, C),
                          xe[o] && Va(ke, xe[o]),
                          ce && (1 === d ? ke.kill(!1, 1) : (xe[o] = 0)),
                          s || (xe[(o = 1 === d ? 1 : 3)] && Va(ke, xe[o]))),
                        pe &&
                          !n &&
                          Math.abs(ke.getVelocity()) > (Sa(pe) ? pe : 2500) &&
                          (Ua(ke.callbackAnimation),
                          ee
                            ? ee.progress(1)
                            : Ua(O, "reverse" === i ? 1 : !d, 1)))
                      : ve && k && !je && k(ke);
                }
                if (x) {
                  var v = de
                    ? (u / de.duration()) * (de._caScrollDist || 0)
                    : u;
                  y(v + (q._isFlipped ? 1 : 0)), x(v);
                }
                S && S((-u / de.duration()) * (de._caScrollDist || 0));
              }
            }),
            (ke.enable = function (e, t) {
              ke.enabled ||
                ((ke.enabled = !0),
                ub(be, "resize", Jb),
                me || ub(be, "scroll", Hb),
                Te && ub(ScrollTrigger, "refreshInit", Te),
                !1 !== e && ((ke.progress = Oe = 0), (R = B = Me = Ae())),
                !1 !== t && ke.refresh());
            }),
            (ke.getTween = function (e) {
              return e && A ? A.tween : ee;
            }),
            (ke.setPositions = function (e, t, r, n) {
              if (de) {
                var o = de.scrollTrigger,
                  i = de.duration(),
                  a = o.end - o.start;
                (e = o.start + (a * e) / i), (t = o.start + (a * t) / i);
              }
              ke.refresh(
                !1,
                !1,
                {
                  start: Ba(e, r && !!ke._startClamp),
                  end: Ba(t, r && !!ke._endClamp),
                },
                n
              ),
                ke.update();
            }),
            (ke.adjustPinSpacing = function (e) {
              if ($ && e) {
                var t = $.indexOf(he.d) + 1;
                ($[t] = parseFloat($[t]) + e + xt),
                  ($[1] = parseFloat($[1]) + e + xt),
                  Et($);
              }
            }),
            (ke.disable = function (e, t) {
              if (
                ke.enabled &&
                (!1 !== e && ke.revert(!0, !0),
                (ke.enabled = ke.isActive = !1),
                t || (ee && ee.pause()),
                (re = 0),
                n && (n.uncache = 1),
                Te && vb(ScrollTrigger, "refreshInit", Te),
                te && (te.pause(), A.tween && A.tween.kill() && (A.tween = 0)),
                !me)
              ) {
                for (var r = kt.length; r--; )
                  if (kt[r].scroller === be && kt[r] !== ke) return;
                vb(be, "resize", Jb), me || vb(be, "scroll", Hb);
              }
            }),
            (ke.kill = function (e, t) {
              ke.disable(e, t), ee && !t && ee.kill(), a && delete Tt[a];
              var r = kt.indexOf(ke);
              0 <= r && kt.splice(r, 1),
                r === Qe && 0 < Mt && Qe--,
                (r = 0),
                kt.forEach(function (e) {
                  return e.scroller === ke.scroller && (r = 1);
                }),
                r || rt || (ke.scroll.rec = 0),
                O &&
                  ((O.scrollTrigger = null),
                  e && O.revert({ kill: !1 }),
                  t || O.kill()),
                I &&
                  [I, Y, q, H].forEach(function (e) {
                    return e.parentNode && e.parentNode.removeChild(e);
                  }),
                ot === ke && (ot = 0),
                ae &&
                  (n && (n.uncache = 1),
                  (r = 0),
                  kt.forEach(function (e) {
                    return e.pin === ae && r++;
                  }),
                  r || (n.spacer = 0)),
                E.onKill && E.onKill(ke);
            }),
            kt.push(ke),
            ke.enable(!1, !1),
            i && i(ke),
            O && O.add && !N)
          ) {
            var v = ke.update;
            (ke.update = function () {
              (ke.update = v), D || F || ke.refresh();
            }),
              Le.delayedCall(0.01, ke.update),
              (N = 0.01),
              (D = F = 0);
          } else ke.refresh();
          ae &&
            (function _queueRefreshAll() {
              if (nt !== Ct) {
                var e = (nt = Ct);
                requestAnimationFrame(function () {
                  return e === Ct && Pt(!0);
                });
              }
            })();
        } else this.update = this.refresh = this.kill = Fa;
      }),
      (ScrollTrigger.register = function register(e) {
        return (
          s ||
            ((Le = e || Ia()),
            Ha() && window.document && ScrollTrigger.enable(),
            (s = lt)),
          s
        );
      }),
      (ScrollTrigger.defaults = function defaults(e) {
        if (e) for (var t in e) St[t] = e[t];
        return St;
      }),
      (ScrollTrigger.disable = function disable(t, r) {
        (lt = 0),
          kt.forEach(function (e) {
            return e[r ? "kill" : "disable"](t);
          }),
          vb(Ne, "wheel", Hb),
          vb(Xe, "scroll", Hb),
          clearInterval(u),
          vb(Xe, "touchcancel", Fa),
          vb(We, "touchstart", Fa),
          tb(vb, Xe, "pointerdown,touchstart,mousedown", Da),
          tb(vb, Xe, "pointerup,touchend,mouseup", Ea),
          c.kill(),
          Pa(vb);
        for (var e = 0; e < ze.length; e += 3)
          wb(vb, ze[e], ze[e + 1]), wb(vb, ze[e], ze[e + 2]);
      }),
      (ScrollTrigger.enable = function enable() {
        if (
          ((Ne = window),
          (Xe = document),
          (Je = Xe.documentElement),
          (We = Xe.body),
          Le &&
            ((Ge = Le.utils.toArray),
            (Ve = Le.utils.clamp),
            (x = Le.core.context || Fa),
            (et = Le.core.suppressOverwrites || Fa),
            (_ = Ne.history.scrollRestoration || "auto"),
            (j = Ne.pageYOffset),
            Le.core.globals("ScrollTrigger", ScrollTrigger),
            We))
        ) {
          (lt = 1),
            ((w = document.createElement("div")).style.height = "100vh"),
            (w.style.position = "absolute"),
            Wb(),
            (function _rafBugFix() {
              return lt && requestAnimationFrame(_rafBugFix);
            })(),
            E.register(Le),
            (ScrollTrigger.isTouch = E.isTouch),
            (R =
              E.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            ub(Ne, "wheel", Hb),
            (l = [Ne, Xe, Je, We]),
            Le.matchMedia
              ? ((ScrollTrigger.matchMedia = function (e) {
                  var t,
                    r = Le.matchMedia();
                  for (t in e) r.add(t, e[t]);
                  return r;
                }),
                Le.addEventListener("matchMediaInit", function () {
                  return Qb();
                }),
                Le.addEventListener("matchMediaRevert", function () {
                  return Pb();
                }),
                Le.addEventListener("matchMedia", function () {
                  Pt(0, 1), V("matchMedia");
                }),
                Le.matchMedia("(orientation: portrait)", function () {
                  return Ib(), Ib;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            Ib(),
            ub(Xe, "scroll", Hb);
          var e,
            t,
            r = We.style,
            n = r.borderTopStyle,
            o = Le.core.Animation.prototype;
          for (
            o.revert ||
              Object.defineProperty(o, "revert", {
                value: function value() {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              e = _t(We),
              He.m = Math.round(e.top + He.sc()) || 0,
              qe.m = Math.round(e.left + qe.sc()) || 0,
              n ? (r.borderTopStyle = n) : r.removeProperty("border-top-style"),
              u = setInterval(Gb, 250),
              Le.delayedCall(0.5, function () {
                return (it = 0);
              }),
              ub(Xe, "touchcancel", Fa),
              ub(We, "touchstart", Fa),
              tb(ub, Xe, "pointerdown,touchstart,mousedown", Da),
              tb(ub, Xe, "pointerup,touchend,mouseup", Ea),
              f = Le.utils.checkPrefix("transform"),
              Z.push(f),
              s = at(),
              c = Le.delayedCall(0.2, Pt).pause(),
              g = [
                Xe,
                "visibilitychange",
                function () {
                  var e = Ne.innerWidth,
                    t = Ne.innerHeight;
                  Xe.hidden ? ((d = e), (p = t)) : (d === e && p === t) || Jb();
                },
                Xe,
                "DOMContentLoaded",
                Pt,
                Ne,
                "load",
                Pt,
                Ne,
                "resize",
                Jb,
              ],
              Pa(ub),
              kt.forEach(function (e) {
                return e.enable(0, 1);
              }),
              t = 0;
            t < ze.length;
            t += 3
          )
            wb(vb, ze[t], ze[t + 1]), wb(vb, ze[t], ze[t + 2]);
        }
      }),
      (ScrollTrigger.config = function config(e) {
        "limitCallbacks" in e && (tt = !!e.limitCallbacks);
        var t = e.syncInterval;
        (t && clearInterval(u)) || ((u = t) && setInterval(Gb, t)),
          "ignoreMobileResize" in e &&
            (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize),
          "autoRefreshEvents" in e &&
            (Pa(vb) || Pa(ub, e.autoRefreshEvents || "none"),
            (h = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
      }),
      (ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = J(e),
          n = ze.indexOf(r),
          o = Ja(r);
        ~n && ze.splice(n, o ? 6 : 2),
          t && (o ? Ie.unshift(Ne, t, We, t, Je, t) : Ie.unshift(r, t));
      }),
      (ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
        kt.forEach(function (e) {
          return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
        });
      }),
      (ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
        var n = (ct(e) ? J(e) : e).getBoundingClientRect(),
          o = n[r ? ft : dt] * t || 0;
        return r
          ? 0 < n.right - o && n.left + o < Ne.innerWidth
          : 0 < n.bottom - o && n.top + o < Ne.innerHeight;
      }),
      (ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
        ct(e) && (e = J(e));
        var n = e.getBoundingClientRect(),
          o = n[r ? ft : dt],
          i =
            null == t
              ? o / 2
              : t in q
              ? q[t] * o
              : ~t.indexOf("%")
              ? (parseFloat(t) * o) / 100
              : parseFloat(t) || 0;
        return r ? (n.left + i) / Ne.innerWidth : (n.top + i) / Ne.innerHeight;
      }),
      (ScrollTrigger.killAll = function killAll(e) {
        if (
          (kt.slice(0).forEach(function (e) {
            return "ScrollSmoother" !== e.vars.id && e.kill();
          }),
          !0 !== e)
        ) {
          var t = X.killAll || [];
          (X = {}),
            t.forEach(function (e) {
              return e();
            });
        }
      }),
      ScrollTrigger);
  function ScrollTrigger(e, t) {
    s ||
      ScrollTrigger.register(Le) ||
      console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
      x(this),
      this.init(e, t);
  }
  (re.version = "3.12.2"),
    (re.saveStyles = function (e) {
      return e
        ? Ge(e).forEach(function (e) {
            if (e && e.style) {
              var t = U.indexOf(e);
              0 <= t && U.splice(t, 5),
                U.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  Le.core.getCache(e),
                  x()
                );
            }
          })
        : U;
    }),
    (re.revert = function (e, t) {
      return Qb(!e, t);
    }),
    (re.create = function (e, t) {
      return new re(e, t);
    }),
    (re.refresh = function (e) {
      return e ? Jb() : (s || re.register()) && Pt(!0);
    }),
    (re.update = function (e) {
      return ++ze.cache && Q(!0 === e ? 2 : 0);
    }),
    (re.clearScrollMemory = Rb),
    (re.maxScroll = function (e, t) {
      return Oa(e, t ? qe : He);
    }),
    (re.getScrollFunc = function (e, t) {
      return K(J(e), t ? qe : He);
    }),
    (re.getById = function (e) {
      return Tt[e];
    }),
    (re.getAll = function () {
      return kt.filter(function (e) {
        return "ScrollSmoother" !== e.vars.id;
      });
    }),
    (re.isScrolling = function () {
      return !!st;
    }),
    (re.snapDirectional = rb),
    (re.addEventListener = function (e, t) {
      var r = X[e] || (X[e] = []);
      ~r.indexOf(t) || r.push(t);
    }),
    (re.removeEventListener = function (e, t) {
      var r = X[e],
        n = r && r.indexOf(t);
      0 <= n && r.splice(n, 1);
    }),
    (re.batch = function (e, t) {
      function up(e, t) {
        var r = [],
          n = [],
          o = Le.delayedCall(i, function () {
            t(r, n), (r = []), (n = []);
          }).pause();
        return function (e) {
          r.length || o.restart(!0),
            r.push(e.trigger),
            n.push(e),
            a <= r.length && o.progress(1);
        };
      }
      var r,
        n = [],
        o = {},
        i = t.interval || 0.016,
        a = t.batchMax || 1e9;
      for (r in t)
        o[r] =
          "on" === r.substr(0, 2) && Ra(t[r]) && "onRefreshInit" !== r
            ? up(0, t[r])
            : t[r];
      return (
        Ra(a) &&
          ((a = a()),
          ub(re, "refresh", function () {
            return (a = t.batchMax());
          })),
        Ge(e).forEach(function (e) {
          var t = {};
          for (r in o) t[r] = o[r];
          (t.trigger = e), n.push(re.create(t));
        }),
        n
      );
    });
  function qc(e, t, r, n) {
    return (
      n < t ? e(n) : t < 0 && e(0),
      n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    );
  }
  function rc(e, t) {
    !0 === t
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          !0 === t
            ? "auto"
            : t
            ? "pan-" + t + (E.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === Je && rc(We, t);
  }
  function tc(e) {
    var t,
      r = e.event,
      n = e.target,
      o = e.axis,
      i = (r.changedTouches ? r.changedTouches[0] : r).target,
      a = i._gsap || Le.core.getCache(i),
      s = at();
    if (!a._isScrollT || 2e3 < s - a._isScrollT) {
      for (
        ;
        i &&
        i !== We &&
        ((i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth) ||
          (!oe[(t = kb(i)).overflowY] && !oe[t.overflowX]));

      )
        i = i.parentNode;
      (a._isScroll =
        i &&
        i !== n &&
        !Ja(i) &&
        (oe[(t = kb(i)).overflowY] || oe[t.overflowX])),
        (a._isScrollT = s);
    }
    (!a._isScroll && "x" !== o) || (r.stopPropagation(), (r._gsapAllow = !0));
  }
  function uc(e, t, r, n) {
    return E.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (n = n && tc),
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function onEnable() {
        return r && ub(Xe, E.eventTypes[0], ae, !1, !0);
      },
      onDisable: function onDisable() {
        return vb(Xe, E.eventTypes[0], ae, !0);
      },
    });
  }
  function yc(e) {
    function rq() {
      return (o = !1);
    }
    function uq() {
      (i = Oa(p, He)),
        (T = Ve(R ? 1 : 0, i)),
        f && (k = Ve(0, Oa(p, qe))),
        (l = Ct);
    }
    function vq() {
      (v._gsap.y = Ga(parseFloat(v._gsap.y) + b.offset) + "px"),
        (v.style.transform =
          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
          parseFloat(v._gsap.y) +
          ", 0, 1)"),
        (b.offset = b.cacheID = 0);
    }
    function Bq() {
      uq(),
        a.isActive() &&
          a.vars.scrollY > i &&
          (b() > i ? a.progress(1) && b(i) : a.resetTo("scrollY", i));
    }
    Ta(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var n,
      i,
      l,
      o,
      a,
      c,
      u,
      s,
      f = e.normalizeScrollX,
      t = e.momentum,
      r = e.allowNestedScroll,
      d = e.onRelease,
      p = J(e.target) || Je,
      g = Le.core.globals().ScrollSmoother,
      h = g && g.get(),
      v =
        R &&
        ((e.content && J(e.content)) ||
          (h && !1 !== e.content && !h.smooth() && h.content())),
      b = K(p, He),
      m = K(p, qe),
      y = 1,
      x =
        (E.isTouch && Ne.visualViewport
          ? Ne.visualViewport.scale * Ne.visualViewport.width
          : Ne.outerWidth) / Ne.innerWidth,
      _ = 0,
      w = Ra(t)
        ? function () {
            return t(n);
          }
        : function () {
            return t || 2.8;
          },
      S = uc(p, e.type, !0, r),
      k = Fa,
      T = Fa;
    return (
      v && Le.set(v, { y: "+=0" }),
      (e.ignoreCheck = function (e) {
        return (
          (R &&
            "touchmove" === e.type &&
            (function ignoreDrag() {
              if (o) {
                requestAnimationFrame(rq);
                var e = Ga(n.deltaY / 2),
                  t = T(b.v - e);
                if (v && t !== b.v + b.offset) {
                  b.offset = t - b.v;
                  var r = Ga((parseFloat(v && v._gsap.y) || 0) - b.offset);
                  (v.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    r +
                    ", 0, 1)"),
                    (v._gsap.y = r + "px"),
                    (b.cacheID = ze.cache),
                    Q();
                }
                return !0;
              }
              b.offset && vq(), (o = !0);
            })()) ||
          (1.05 < y && "touchstart" !== e.type) ||
          n.isGesturing ||
          (e.touches && 1 < e.touches.length)
        );
      }),
      (e.onPress = function () {
        o = !1;
        var e = y;
        (y = Ga(((Ne.visualViewport && Ne.visualViewport.scale) || 1) / x)),
          a.pause(),
          e !== y && rc(p, 1.01 < y || (!f && "x")),
          (c = m()),
          (u = b()),
          uq(),
          (l = Ct);
      }),
      (e.onRelease = e.onGestureStart =
        function (e, t) {
          if ((b.offset && vq(), t)) {
            ze.cache++;
            var r,
              n,
              o = w();
            f &&
              ((n = (r = m()) + (0.05 * o * -e.velocityX) / 0.227),
              (o *= qc(m, r, n, Oa(p, qe))),
              (a.vars.scrollX = k(n))),
              (n = (r = b()) + (0.05 * o * -e.velocityY) / 0.227),
              (o *= qc(b, r, n, Oa(p, He))),
              (a.vars.scrollY = T(n)),
              a.invalidate().duration(o).play(0.01),
              ((R && a.vars.scrollY >= i) || i - 1 <= r) &&
                Le.to({}, { onUpdate: Bq, duration: o });
          } else s.restart(!0);
          d && d(e);
        }),
      (e.onWheel = function () {
        a._ts && a.pause(), 1e3 < at() - _ && ((l = 0), (_ = at()));
      }),
      (e.onChange = function (e, t, r, n, o) {
        if (
          (Ct !== l && uq(),
          t && f && m(k(n[2] === t ? c + (e.startX - e.x) : m() + t - n[1])),
          r)
        ) {
          b.offset && vq();
          var i = o[2] === r,
            a = i ? u + e.startY - e.y : b() + r - o[1],
            s = T(a);
          i && a !== s && (u += s - a), b(s);
        }
        (r || t) && Q();
      }),
      (e.onEnable = function () {
        rc(p, !f && "x"),
          re.addEventListener("refresh", Bq),
          ub(Ne, "resize", Bq),
          b.smooth &&
            ((b.target.style.scrollBehavior = "auto"),
            (b.smooth = m.smooth = !1)),
          S.enable();
      }),
      (e.onDisable = function () {
        rc(p, !0),
          vb(Ne, "resize", Bq),
          re.removeEventListener("refresh", Bq),
          S.kill();
      }),
      (e.lockAxis = !1 !== e.lockAxis),
      ((n = new E(e)).iOS = R) && !b() && b(1),
      R && Le.ticker.add(Fa),
      (s = n._dc),
      (a = Le.to(n, {
        ease: "power4",
        paused: !0,
        scrollX: f ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: mc(b, b(), function () {
            return a.pause();
          }),
        },
        onUpdate: Q,
        onComplete: s.vars.onComplete,
      })),
      n
    );
  }
  var ne,
    oe = { auto: 1, scroll: 1 },
    ie = /(input|label|select|textarea)/i,
    ae = function _captureInputs(e) {
      var t = ie.test(e.target.tagName);
      (t || ne) && ((e._gsapAllow = !0), (ne = t));
    };
  (re.sort = function (e) {
    return kt.sort(
      e ||
        function (e, t) {
          return (
            -1e6 * (e.vars.refreshPriority || 0) +
            e.start -
            (t.start + -1e6 * (t.vars.refreshPriority || 0))
          );
        }
    );
  }),
    (re.observe = function (e) {
      return new E(e);
    }),
    (re.normalizeScroll = function (e) {
      if (void 0 === e) return v;
      if (!0 === e && v) return v.enable();
      if (!1 === e) return v && v.kill();
      var t = e instanceof E ? e : yc(e);
      return v && v.target === t.target && v.kill(), Ja(t.target) && (v = t), t;
    }),
    (re.core = {
      _getVelocityProp: L,
      _inputObserver: uc,
      _scrollers: ze,
      _proxies: Ie,
      bridge: {
        ss: function ss() {
          st || V("scrollStart"), (st = at());
        },
        ref: function ref() {
          return je;
        },
      },
    }),
    Ia() && Le.registerPlugin(re),
    (e.ScrollTrigger = re),
    (e.default = re);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

var je = Object.defineProperty;
var ke = (O, a, r) => a in O ? je(O, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : O[a] = r;
var G = (O, a, r) => (ke(O, typeof a != "symbol" ? a + "" : a, r), r);
import * as l from "three";
import { EventDispatcher as Ce, Vector3 as x, MOUSE as I, TOUCH as z, Quaternion as me, Spherical as ue, Vector2 as y } from "three";
class Ye {
  constructor(a) {
    G(this, "dom");
    this.dom = a, this.init();
  }
  init() {
    console.log("Charts3d");
  }
  getDomSize() {
    return {
      width: this.dom.offsetWidth || 100,
      height: this.dom.offsetHeight || 100
    };
  }
  createScene() {
    return new l.Scene();
  }
  createCamera() {
    const { width: a, height: r } = this.getDomSize();
    return new l.PerspectiveCamera(75, a / r, 0.1, 1e3);
  }
  createRenderer() {
    const a = new l.WebGLRenderer({
      antialias: !0,
      alpha: !0
    }), { width: r, height: e } = this.getDomSize();
    return a.setSize(r, e), this.dom.appendChild(a.domElement), a;
  }
  createLight() {
    return new l.AmbientLight(4210752);
  }
  createCube() {
    const a = new l.BoxGeometry(3, 3, 3), r = new l.MeshNormalMaterial();
    return new l.Mesh(a, r);
  }
  initScene() {
    if (!this.dom)
      throw new Error("dom is not defined");
    const a = this.createScene(), r = this.createCamera(), e = this.createRenderer(), o = this.createLight(), i = this.createCube();
    a.add(o), a.add(i), r.position.z = 6, r.position.y = 3, r.lookAt(0, 0, 0);
    const R = function() {
      e.render(a, r), requestAnimationFrame(R), i.rotation.x += 0.01, i.rotation.y += 0.01;
    };
    return R(), window.addEventListener(
      "resize",
      () => {
        const { width: c, height: m } = this.getDomSize();
        e.setSize(c, m), r.aspect = c / m, r.updateProjectionMatrix();
      }
    ), a;
  }
}
const pe = { type: "change" }, W = { type: "start" }, fe = { type: "end" };
class Ie extends Ce {
  constructor(a, r) {
    super(), this.object = a, this.domElement = r, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new x(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: I.ROTATE, MIDDLE: I.DOLLY, RIGHT: I.PAN }, this.touches = { ONE: z.ROTATE, TWO: z.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return c.phi;
    }, this.getAzimuthalAngle = function() {
      return c.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(t) {
      t.addEventListener("keydown", Z), this._domElementKeyEvents = t;
    }, this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", Z), this._domElementKeyEvents = null;
    }, this.saveState = function() {
      e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom;
    }, this.reset = function() {
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(pe), e.update(), i = o.NONE;
    }, this.update = function() {
      const t = new x(), n = new me().setFromUnitVectors(a.up, new x(0, 1, 0)), h = n.clone().invert(), d = new x(), f = new me(), C = 2 * Math.PI;
      return function() {
        const de = e.object.position;
        t.copy(de).sub(e.target), t.applyQuaternion(n), c.setFromVector3(t), e.autoRotate && i === o.NONE && v(ge()), e.enableDamping ? (c.theta += m.theta * e.dampingFactor, c.phi += m.phi * e.dampingFactor) : (c.theta += m.theta, c.phi += m.phi);
        let T = e.minAzimuthAngle, M = e.maxAzimuthAngle;
        return isFinite(T) && isFinite(M) && (T < -Math.PI ? T += C : T > Math.PI && (T -= C), M < -Math.PI ? M += C : M > Math.PI && (M -= C), T <= M ? c.theta = Math.max(T, Math.min(M, c.theta)) : c.theta = c.theta > (T + M) / 2 ? Math.max(T, c.theta) : Math.min(M, c.theta)), c.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, c.phi)), c.makeSafe(), c.radius *= j, c.radius = Math.max(e.minDistance, Math.min(e.maxDistance, c.radius)), e.enableDamping === !0 ? e.target.addScaledVector(S, e.dampingFactor) : e.target.add(S), t.setFromSpherical(c), t.applyQuaternion(h), de.copy(e.target).add(t), e.object.lookAt(e.target), e.enableDamping === !0 ? (m.theta *= 1 - e.dampingFactor, m.phi *= 1 - e.dampingFactor, S.multiplyScalar(1 - e.dampingFactor)) : (m.set(0, 0, 0), S.set(0, 0, 0)), j = 1, E || d.distanceToSquared(e.object.position) > R || 8 * (1 - f.dot(e.object.quaternion)) > R ? (e.dispatchEvent(pe), d.copy(e.object.position), f.copy(e.object.quaternion), E = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", ce), e.domElement.removeEventListener("pointerdown", ie), e.domElement.removeEventListener("pointercancel", se), e.domElement.removeEventListener("wheel", re), e.domElement.removeEventListener("pointermove", U), e.domElement.removeEventListener("pointerup", F), e._domElementKeyEvents !== null && (e._domElementKeyEvents.removeEventListener("keydown", Z), e._domElementKeyEvents = null);
    };
    const e = this, o = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let i = o.NONE;
    const R = 1e-6, c = new ue(), m = new ue();
    let j = 1;
    const S = new x();
    let E = !1;
    const D = new y(), u = new y(), g = new y(), p = new y(), w = new y(), P = new y(), L = new y(), b = new y(), A = new y(), s = [], N = {};
    function ge() {
      return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
    }
    function Y() {
      return Math.pow(0.95, e.zoomSpeed);
    }
    function v(t) {
      m.theta -= t;
    }
    function _(t) {
      m.phi -= t;
    }
    const V = function() {
      const t = new x();
      return function(h, d) {
        t.setFromMatrixColumn(d, 0), t.multiplyScalar(-h), S.add(t);
      };
    }(), q = function() {
      const t = new x();
      return function(h, d) {
        e.screenSpacePanning === !0 ? t.setFromMatrixColumn(d, 1) : (t.setFromMatrixColumn(d, 0), t.crossVectors(e.object.up, t)), t.multiplyScalar(h), S.add(t);
      };
    }(), k = function() {
      const t = new x();
      return function(h, d) {
        const f = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const C = e.object.position;
          t.copy(C).sub(e.target);
          let H = t.length();
          H *= Math.tan(e.object.fov / 2 * Math.PI / 180), V(2 * h * H / f.clientHeight, e.object.matrix), q(2 * d * H / f.clientHeight, e.object.matrix);
        } else
          e.object.isOrthographicCamera ? (V(h * (e.object.right - e.object.left) / e.object.zoom / f.clientWidth, e.object.matrix), q(d * (e.object.top - e.object.bottom) / e.object.zoom / f.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function K(t) {
      e.object.isPerspectiveCamera ? j /= t : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * t)), e.object.updateProjectionMatrix(), E = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function B(t) {
      e.object.isPerspectiveCamera ? j *= t : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / t)), e.object.updateProjectionMatrix(), E = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function Q(t) {
      D.set(t.clientX, t.clientY);
    }
    function be(t) {
      L.set(t.clientX, t.clientY);
    }
    function J(t) {
      p.set(t.clientX, t.clientY);
    }
    function ye(t) {
      u.set(t.clientX, t.clientY), g.subVectors(u, D).multiplyScalar(e.rotateSpeed);
      const n = e.domElement;
      v(2 * Math.PI * g.x / n.clientHeight), _(2 * Math.PI * g.y / n.clientHeight), D.copy(u), e.update();
    }
    function Ee(t) {
      b.set(t.clientX, t.clientY), A.subVectors(b, L), A.y > 0 ? K(Y()) : A.y < 0 && B(Y()), L.copy(b), e.update();
    }
    function we(t) {
      w.set(t.clientX, t.clientY), P.subVectors(w, p).multiplyScalar(e.panSpeed), k(P.x, P.y), p.copy(w), e.update();
    }
    function Pe(t) {
      t.deltaY < 0 ? B(Y()) : t.deltaY > 0 && K(Y()), e.update();
    }
    function Te(t) {
      let n = !1;
      switch (t.code) {
        case e.keys.UP:
          t.ctrlKey || t.metaKey || t.shiftKey ? _(2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : k(0, e.keyPanSpeed), n = !0;
          break;
        case e.keys.BOTTOM:
          t.ctrlKey || t.metaKey || t.shiftKey ? _(-2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : k(0, -e.keyPanSpeed), n = !0;
          break;
        case e.keys.LEFT:
          t.ctrlKey || t.metaKey || t.shiftKey ? v(2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : k(e.keyPanSpeed, 0), n = !0;
          break;
        case e.keys.RIGHT:
          t.ctrlKey || t.metaKey || t.shiftKey ? v(-2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : k(-e.keyPanSpeed, 0), n = !0;
          break;
      }
      n && (t.preventDefault(), e.update());
    }
    function $() {
      if (s.length === 1)
        D.set(s[0].pageX, s[0].pageY);
      else {
        const t = 0.5 * (s[0].pageX + s[1].pageX), n = 0.5 * (s[0].pageY + s[1].pageY);
        D.set(t, n);
      }
    }
    function ee() {
      if (s.length === 1)
        p.set(s[0].pageX, s[0].pageY);
      else {
        const t = 0.5 * (s[0].pageX + s[1].pageX), n = 0.5 * (s[0].pageY + s[1].pageY);
        p.set(t, n);
      }
    }
    function te() {
      const t = s[0].pageX - s[1].pageX, n = s[0].pageY - s[1].pageY, h = Math.sqrt(t * t + n * n);
      L.set(0, h);
    }
    function Me() {
      e.enableZoom && te(), e.enablePan && ee();
    }
    function Oe() {
      e.enableZoom && te(), e.enableRotate && $();
    }
    function ne(t) {
      if (s.length == 1)
        u.set(t.pageX, t.pageY);
      else {
        const h = X(t), d = 0.5 * (t.pageX + h.x), f = 0.5 * (t.pageY + h.y);
        u.set(d, f);
      }
      g.subVectors(u, D).multiplyScalar(e.rotateSpeed);
      const n = e.domElement;
      v(2 * Math.PI * g.x / n.clientHeight), _(2 * Math.PI * g.y / n.clientHeight), D.copy(u);
    }
    function oe(t) {
      if (s.length === 1)
        w.set(t.pageX, t.pageY);
      else {
        const n = X(t), h = 0.5 * (t.pageX + n.x), d = 0.5 * (t.pageY + n.y);
        w.set(h, d);
      }
      P.subVectors(w, p).multiplyScalar(e.panSpeed), k(P.x, P.y), p.copy(w);
    }
    function ae(t) {
      const n = X(t), h = t.pageX - n.x, d = t.pageY - n.y, f = Math.sqrt(h * h + d * d);
      b.set(0, f), A.set(0, Math.pow(b.y / L.y, e.zoomSpeed)), K(A.y), L.copy(b);
    }
    function Se(t) {
      e.enableZoom && ae(t), e.enablePan && oe(t);
    }
    function De(t) {
      e.enableZoom && ae(t), e.enableRotate && ne(t);
    }
    function ie(t) {
      e.enabled !== !1 && (s.length === 0 && (e.domElement.setPointerCapture(t.pointerId), e.domElement.addEventListener("pointermove", U), e.domElement.addEventListener("pointerup", F)), Ne(t), t.pointerType === "touch" ? xe(t) : Le(t));
    }
    function U(t) {
      e.enabled !== !1 && (t.pointerType === "touch" ? Re(t) : Ae(t));
    }
    function F(t) {
      le(t), s.length === 0 && (e.domElement.releasePointerCapture(t.pointerId), e.domElement.removeEventListener("pointermove", U), e.domElement.removeEventListener("pointerup", F)), e.dispatchEvent(fe), i = o.NONE;
    }
    function se(t) {
      le(t);
    }
    function Le(t) {
      let n;
      switch (t.button) {
        case 0:
          n = e.mouseButtons.LEFT;
          break;
        case 1:
          n = e.mouseButtons.MIDDLE;
          break;
        case 2:
          n = e.mouseButtons.RIGHT;
          break;
        default:
          n = -1;
      }
      switch (n) {
        case I.DOLLY:
          if (e.enableZoom === !1)
            return;
          be(t), i = o.DOLLY;
          break;
        case I.ROTATE:
          if (t.ctrlKey || t.metaKey || t.shiftKey) {
            if (e.enablePan === !1)
              return;
            J(t), i = o.PAN;
          } else {
            if (e.enableRotate === !1)
              return;
            Q(t), i = o.ROTATE;
          }
          break;
        case I.PAN:
          if (t.ctrlKey || t.metaKey || t.shiftKey) {
            if (e.enableRotate === !1)
              return;
            Q(t), i = o.ROTATE;
          } else {
            if (e.enablePan === !1)
              return;
            J(t), i = o.PAN;
          }
          break;
        default:
          i = o.NONE;
      }
      i !== o.NONE && e.dispatchEvent(W);
    }
    function Ae(t) {
      switch (i) {
        case o.ROTATE:
          if (e.enableRotate === !1)
            return;
          ye(t);
          break;
        case o.DOLLY:
          if (e.enableZoom === !1)
            return;
          Ee(t);
          break;
        case o.PAN:
          if (e.enablePan === !1)
            return;
          we(t);
          break;
      }
    }
    function re(t) {
      e.enabled === !1 || e.enableZoom === !1 || i !== o.NONE || (t.preventDefault(), e.dispatchEvent(W), Pe(t), e.dispatchEvent(fe));
    }
    function Z(t) {
      e.enabled === !1 || e.enablePan === !1 || Te(t);
    }
    function xe(t) {
      switch (he(t), s.length) {
        case 1:
          switch (e.touches.ONE) {
            case z.ROTATE:
              if (e.enableRotate === !1)
                return;
              $(), i = o.TOUCH_ROTATE;
              break;
            case z.PAN:
              if (e.enablePan === !1)
                return;
              ee(), i = o.TOUCH_PAN;
              break;
            default:
              i = o.NONE;
          }
          break;
        case 2:
          switch (e.touches.TWO) {
            case z.DOLLY_PAN:
              if (e.enableZoom === !1 && e.enablePan === !1)
                return;
              Me(), i = o.TOUCH_DOLLY_PAN;
              break;
            case z.DOLLY_ROTATE:
              if (e.enableZoom === !1 && e.enableRotate === !1)
                return;
              Oe(), i = o.TOUCH_DOLLY_ROTATE;
              break;
            default:
              i = o.NONE;
          }
          break;
        default:
          i = o.NONE;
      }
      i !== o.NONE && e.dispatchEvent(W);
    }
    function Re(t) {
      switch (he(t), i) {
        case o.TOUCH_ROTATE:
          if (e.enableRotate === !1)
            return;
          ne(t), e.update();
          break;
        case o.TOUCH_PAN:
          if (e.enablePan === !1)
            return;
          oe(t), e.update();
          break;
        case o.TOUCH_DOLLY_PAN:
          if (e.enableZoom === !1 && e.enablePan === !1)
            return;
          Se(t), e.update();
          break;
        case o.TOUCH_DOLLY_ROTATE:
          if (e.enableZoom === !1 && e.enableRotate === !1)
            return;
          De(t), e.update();
          break;
        default:
          i = o.NONE;
      }
    }
    function ce(t) {
      e.enabled !== !1 && t.preventDefault();
    }
    function Ne(t) {
      s.push(t);
    }
    function le(t) {
      delete N[t.pointerId];
      for (let n = 0; n < s.length; n++)
        if (s[n].pointerId == t.pointerId) {
          s.splice(n, 1);
          return;
        }
    }
    function he(t) {
      let n = N[t.pointerId];
      n === void 0 && (n = new y(), N[t.pointerId] = n), n.set(t.pageX, t.pageY);
    }
    function X(t) {
      const n = t.pointerId === s[0].pointerId ? s[1] : s[0];
      return N[n.pointerId];
    }
    e.domElement.addEventListener("contextmenu", ce), e.domElement.addEventListener("pointerdown", ie), e.domElement.addEventListener("pointercancel", se), e.domElement.addEventListener("wheel", re, { passive: !1 }), this.update();
  }
}
class _e {
  constructor(a) {
    G(this, "dom");
    this.dom = a;
  }
  getDomSize() {
    return {
      width: this.dom.offsetWidth || 100,
      height: this.dom.offsetHeight || 100
    };
  }
  createRenderer() {
    const a = new l.WebGLRenderer({
      antialias: !0,
      alpha: !0
    }), { width: r, height: e } = this.getDomSize();
    return a.setSize(r, e), this.dom.appendChild(a.domElement), a;
  }
  initScene() {
    if (!this.dom)
      throw new Error("dom is not defined");
    const { width: a, height: r } = this.getDomSize(), e = new l.Scene(), o = new l.PerspectiveCamera(75, a / r, 0.1, 1e3);
    o.position.z = 6, o.position.y = 3;
    const i = this.createRenderer(), R = new l.BoxGeometry(3, 3, 3), c = new l.MeshNormalMaterial(), m = new l.Mesh(R, c);
    e.add(m);
    const j = new l.SphereGeometry(0.5, 32, 32), S = new l.MeshNormalMaterial(), E = new l.Mesh(j, S);
    E.position.x = 3, e.add(E), new Ie(o, i.domElement).update();
    const u = 1, g = new l.OrthographicCamera(-u, u, u, -u, 0.1, 1e3), p = new l.Scene();
    g.position.z = 10, p.add(g);
    const w = new l.PlaneGeometry(u * 2, u * 2), P = new l.WebGLRenderTarget(a, r), L = new l.Mesh(w, new l.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: P.texture }
      },
      vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
      fragmentShader: `
                uniform sampler2D tDiffuse;
                varying vec2 vUv;
                void main() {
                    float dx = step(0.7, fract(vUv.y * 20.0));
                    vec4 col = texture2D(tDiffuse, vUv);
                    col.r += dx;
                    gl_FragColor = col;
                }
            `,
      transparent: !0
    }));
    p.add(L);
    const b = new l.Clock(), A = () => {
      requestAnimationFrame(A), i.setRenderTarget(P), i.render(e, o), i.setRenderTarget(null), i.render(p, g), m.rotation.y = -b.getElapsedTime(), E.position.x = Math.sin(b.getElapsedTime()) * 3, E.position.z = Math.cos(b.getElapsedTime()) * 3;
    };
    return A(), window.addEventListener("resize", () => {
      const { width: s, height: N } = this.getDomSize();
      i.setSize(s, N), o.aspect = s / N, o.updateProjectionMatrix();
    }), e;
  }
}
export {
  Ye as Demo,
  _e as RenderTarget
};

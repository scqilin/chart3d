var pA = Object.defineProperty;
var dA = (c, C, e) => C in c ? pA(c, C, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[C] = e;
var h = (c, C, e) => (dA(c, typeof C != "symbol" ? C + "" : C, e), e);
import * as B from "three";
import { EventDispatcher as yA, Vector3 as k, MOUSE as p, TOUCH as d, Quaternion as MA, Spherical as sA, Vector2 as J } from "three";
class q {
  constructor(C) {
    h(this, "dom");
    h(this, "camera");
    h(this, "scene");
    h(this, "renderer");
    /**
     * render
     */
    h(this, "render", () => {
      this.renderer.render(this.scene, this.camera), this.renderOthers(), requestAnimationFrame(this.render);
    });
    if (this.dom = C, !this.dom)
      throw new Error("dom is not defined");
    const { width: e, height: A } = this.getDomSize();
    this.scene = new B.Scene(), this.camera = new B.PerspectiveCamera(45, e / A, 0.01, 1e3), this.renderer = new B.WebGLRenderer({
      antialias: !0,
      alpha: !0
    }), this.renderer.setSize(e, A), this.dom.appendChild(this.renderer.domElement), this.camera.position.set(15, 10, 20), this.camera.lookAt(0, 0, 0);
  }
  /**
  * render others
  */
  renderOthers() {
  }
  /**
  * get dom size
  */
  getDomSize() {
    return {
      width: this.dom.offsetWidth || 100,
      height: this.dom.offsetHeight || 100
    };
  }
  /**
  * resize renderer
  */
  resize() {
    if (!this.renderer)
      return;
    const { width: C, height: e } = this.getDomSize();
    this.renderer.setSize(C, e), this.camera.aspect = C / e, this.camera.updateProjectionMatrix();
  }
}
class ZA extends q {
  constructor(e) {
    super(e);
    h(this, "cube");
    h(this, "clock", new B.Clock());
    const A = new B.BoxGeometry(5, 5, 5), Q = new B.MeshNormalMaterial();
    this.cube = new B.Mesh(A, Q), this.scene.add(this.cube), this.render();
  }
  renderOthers() {
    this.cube.rotation.y = this.clock.getElapsedTime();
  }
}
const nA = { type: "change" }, P = { type: "start" }, aA = { type: "end" };
class f extends yA {
  constructor(C, e) {
    super(), this.object = C, this.domElement = e, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new k(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: p.ROTATE, MIDDLE: p.DOLLY, RIGHT: p.PAN }, this.touches = { ONE: d.ROTATE, TWO: d.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return i.phi;
    }, this.getAzimuthalAngle = function() {
      return i.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(g) {
      g.addEventListener("keydown", L), this._domElementKeyEvents = g;
    }, this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", L), this._domElementKeyEvents = null;
    }, this.saveState = function() {
      A.target0.copy(A.target), A.position0.copy(A.object.position), A.zoom0 = A.object.zoom;
    }, this.reset = function() {
      A.target.copy(A.target0), A.object.position.copy(A.position0), A.object.zoom = A.zoom0, A.object.updateProjectionMatrix(), A.dispatchEvent(nA), A.update(), I = Q.NONE;
    }, this.update = function() {
      const g = new k(), E = new MA().setFromUnitVectors(C.up, new k(0, 1, 0)), D = E.clone().invert(), s = new k(), K = new MA(), T = 2 * Math.PI;
      return function() {
        const DA = A.object.position;
        g.copy(DA).sub(A.target), g.applyQuaternion(E), i.setFromVector3(g), A.autoRotate && I === Q.NONE && H(cA()), A.enableDamping ? (i.theta += w.theta * A.dampingFactor, i.phi += w.phi * A.dampingFactor) : (i.theta += w.theta, i.phi += w.phi);
        let O = A.minAzimuthAngle, r = A.maxAzimuthAngle;
        return isFinite(O) && isFinite(r) && (O < -Math.PI ? O += T : O > Math.PI && (O -= T), r < -Math.PI ? r += T : r > Math.PI && (r -= T), O <= r ? i.theta = Math.max(O, Math.min(r, i.theta)) : i.theta = i.theta > (O + r) / 2 ? Math.max(O, i.theta) : Math.min(r, i.theta)), i.phi = Math.max(A.minPolarAngle, Math.min(A.maxPolarAngle, i.phi)), i.makeSafe(), i.radius *= G, i.radius = Math.max(A.minDistance, Math.min(A.maxDistance, i.radius)), A.enableDamping === !0 ? A.target.addScaledVector(M, A.dampingFactor) : A.target.add(M), g.setFromSpherical(i), g.applyQuaternion(D), DA.copy(A.target).add(g), A.object.lookAt(A.target), A.enableDamping === !0 ? (w.theta *= 1 - A.dampingFactor, w.phi *= 1 - A.dampingFactor, M.multiplyScalar(1 - A.dampingFactor)) : (w.set(0, 0, 0), M.set(0, 0, 0)), G = 1, t || s.distanceToSquared(A.object.position) > Y || 8 * (1 - K.dot(A.object.quaternion)) > Y ? (A.dispatchEvent(nA), s.copy(A.object.position), K.copy(A.object.quaternion), t = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      A.domElement.removeEventListener("contextmenu", hA), A.domElement.removeEventListener("pointerdown", oA), A.domElement.removeEventListener("pointercancel", eA), A.domElement.removeEventListener("wheel", iA), A.domElement.removeEventListener("pointermove", V), A.domElement.removeEventListener("pointerup", W), A._domElementKeyEvents !== null && (A._domElementKeyEvents.removeEventListener("keydown", L), A._domElementKeyEvents = null);
    };
    const A = this, Q = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let I = Q.NONE;
    const Y = 1e-6, i = new sA(), w = new sA();
    let G = 1;
    const M = new k();
    let t = !1;
    const n = new J(), a = new J(), F = new J(), U = new J(), R = new J(), S = new J(), m = new J(), l = new J(), y = new J(), o = [], x = {};
    function cA() {
      return 2 * Math.PI / 60 / 60 * A.autoRotateSpeed;
    }
    function u() {
      return Math.pow(0.95, A.zoomSpeed);
    }
    function H(g) {
      w.theta -= g;
    }
    function j(g) {
      w.phi -= g;
    }
    const X = function() {
      const g = new k();
      return function(D, s) {
        g.setFromMatrixColumn(s, 0), g.multiplyScalar(-D), M.add(g);
      };
    }(), v = function() {
      const g = new k();
      return function(D, s) {
        A.screenSpacePanning === !0 ? g.setFromMatrixColumn(s, 1) : (g.setFromMatrixColumn(s, 0), g.crossVectors(A.object.up, g)), g.multiplyScalar(D), M.add(g);
      };
    }(), N = function() {
      const g = new k();
      return function(D, s) {
        const K = A.domElement;
        if (A.object.isPerspectiveCamera) {
          const T = A.object.position;
          g.copy(T).sub(A.target);
          let Z = g.length();
          Z *= Math.tan(A.object.fov / 2 * Math.PI / 180), X(2 * D * Z / K.clientHeight, A.object.matrix), v(2 * s * Z / K.clientHeight, A.object.matrix);
        } else
          A.object.isOrthographicCamera ? (X(D * (A.object.right - A.object.left) / A.object.zoom / K.clientWidth, A.object.matrix), v(s * (A.object.top - A.object.bottom) / A.object.zoom / K.clientHeight, A.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), A.enablePan = !1);
      };
    }();
    function b(g) {
      A.object.isPerspectiveCamera ? G /= g : A.object.isOrthographicCamera ? (A.object.zoom = Math.max(A.minZoom, Math.min(A.maxZoom, A.object.zoom * g)), A.object.updateProjectionMatrix(), t = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), A.enableZoom = !1);
    }
    function _(g) {
      A.object.isPerspectiveCamera ? G *= g : A.object.isOrthographicCamera ? (A.object.zoom = Math.max(A.minZoom, Math.min(A.maxZoom, A.object.zoom / g)), A.object.updateProjectionMatrix(), t = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), A.enableZoom = !1);
    }
    function $(g) {
      n.set(g.clientX, g.clientY);
    }
    function GA(g) {
      m.set(g.clientX, g.clientY);
    }
    function AA(g) {
      U.set(g.clientX, g.clientY);
    }
    function YA(g) {
      a.set(g.clientX, g.clientY), F.subVectors(a, n).multiplyScalar(A.rotateSpeed);
      const E = A.domElement;
      H(2 * Math.PI * F.x / E.clientHeight), j(2 * Math.PI * F.y / E.clientHeight), n.copy(a), A.update();
    }
    function KA(g) {
      l.set(g.clientX, g.clientY), y.subVectors(l, m), y.y > 0 ? b(u()) : y.y < 0 && _(u()), m.copy(l), A.update();
    }
    function JA(g) {
      R.set(g.clientX, g.clientY), S.subVectors(R, U).multiplyScalar(A.panSpeed), N(S.x, S.y), U.copy(R), A.update();
    }
    function FA(g) {
      g.deltaY < 0 ? _(u()) : g.deltaY > 0 && b(u()), A.update();
    }
    function UA(g) {
      let E = !1;
      switch (g.code) {
        case A.keys.UP:
          g.ctrlKey || g.metaKey || g.shiftKey ? j(2 * Math.PI * A.rotateSpeed / A.domElement.clientHeight) : N(0, A.keyPanSpeed), E = !0;
          break;
        case A.keys.BOTTOM:
          g.ctrlKey || g.metaKey || g.shiftKey ? j(-2 * Math.PI * A.rotateSpeed / A.domElement.clientHeight) : N(0, -A.keyPanSpeed), E = !0;
          break;
        case A.keys.LEFT:
          g.ctrlKey || g.metaKey || g.shiftKey ? H(2 * Math.PI * A.rotateSpeed / A.domElement.clientHeight) : N(A.keyPanSpeed, 0), E = !0;
          break;
        case A.keys.RIGHT:
          g.ctrlKey || g.metaKey || g.shiftKey ? H(-2 * Math.PI * A.rotateSpeed / A.domElement.clientHeight) : N(-A.keyPanSpeed, 0), E = !0;
          break;
      }
      E && (g.preventDefault(), A.update());
    }
    function gA() {
      if (o.length === 1)
        n.set(o[0].pageX, o[0].pageY);
      else {
        const g = 0.5 * (o[0].pageX + o[1].pageX), E = 0.5 * (o[0].pageY + o[1].pageY);
        n.set(g, E);
      }
    }
    function BA() {
      if (o.length === 1)
        U.set(o[0].pageX, o[0].pageY);
      else {
        const g = 0.5 * (o[0].pageX + o[1].pageX), E = 0.5 * (o[0].pageY + o[1].pageY);
        U.set(g, E);
      }
    }
    function EA() {
      const g = o[0].pageX - o[1].pageX, E = o[0].pageY - o[1].pageY, D = Math.sqrt(g * g + E * E);
      m.set(0, D);
    }
    function RA() {
      A.enableZoom && EA(), A.enablePan && BA();
    }
    function OA() {
      A.enableZoom && EA(), A.enableRotate && gA();
    }
    function QA(g) {
      if (o.length == 1)
        a.set(g.pageX, g.pageY);
      else {
        const D = z(g), s = 0.5 * (g.pageX + D.x), K = 0.5 * (g.pageY + D.y);
        a.set(s, K);
      }
      F.subVectors(a, n).multiplyScalar(A.rotateSpeed);
      const E = A.domElement;
      H(2 * Math.PI * F.x / E.clientHeight), j(2 * Math.PI * F.y / E.clientHeight), n.copy(a);
    }
    function CA(g) {
      if (o.length === 1)
        R.set(g.pageX, g.pageY);
      else {
        const E = z(g), D = 0.5 * (g.pageX + E.x), s = 0.5 * (g.pageY + E.y);
        R.set(D, s);
      }
      S.subVectors(R, U).multiplyScalar(A.panSpeed), N(S.x, S.y), U.copy(R);
    }
    function IA(g) {
      const E = z(g), D = g.pageX - E.x, s = g.pageY - E.y, K = Math.sqrt(D * D + s * s);
      l.set(0, K), y.set(0, Math.pow(l.y / m.y, A.zoomSpeed)), b(y.y), m.copy(l);
    }
    function rA(g) {
      A.enableZoom && IA(g), A.enablePan && CA(g);
    }
    function kA(g) {
      A.enableZoom && IA(g), A.enableRotate && QA(g);
    }
    function oA(g) {
      A.enabled !== !1 && (o.length === 0 && (A.domElement.setPointerCapture(g.pointerId), A.domElement.addEventListener("pointermove", V), A.domElement.addEventListener("pointerup", W)), TA(g), g.pointerType === "touch" ? lA(g) : SA(g));
    }
    function V(g) {
      A.enabled !== !1 && (g.pointerType === "touch" ? NA(g) : mA(g));
    }
    function W(g) {
      wA(g), o.length === 0 && (A.domElement.releasePointerCapture(g.pointerId), A.domElement.removeEventListener("pointermove", V), A.domElement.removeEventListener("pointerup", W)), A.dispatchEvent(aA), I = Q.NONE;
    }
    function eA(g) {
      wA(g);
    }
    function SA(g) {
      let E;
      switch (g.button) {
        case 0:
          E = A.mouseButtons.LEFT;
          break;
        case 1:
          E = A.mouseButtons.MIDDLE;
          break;
        case 2:
          E = A.mouseButtons.RIGHT;
          break;
        default:
          E = -1;
      }
      switch (E) {
        case p.DOLLY:
          if (A.enableZoom === !1)
            return;
          GA(g), I = Q.DOLLY;
          break;
        case p.ROTATE:
          if (g.ctrlKey || g.metaKey || g.shiftKey) {
            if (A.enablePan === !1)
              return;
            AA(g), I = Q.PAN;
          } else {
            if (A.enableRotate === !1)
              return;
            $(g), I = Q.ROTATE;
          }
          break;
        case p.PAN:
          if (g.ctrlKey || g.metaKey || g.shiftKey) {
            if (A.enableRotate === !1)
              return;
            $(g), I = Q.ROTATE;
          } else {
            if (A.enablePan === !1)
              return;
            AA(g), I = Q.PAN;
          }
          break;
        default:
          I = Q.NONE;
      }
      I !== Q.NONE && A.dispatchEvent(P);
    }
    function mA(g) {
      switch (I) {
        case Q.ROTATE:
          if (A.enableRotate === !1)
            return;
          YA(g);
          break;
        case Q.DOLLY:
          if (A.enableZoom === !1)
            return;
          KA(g);
          break;
        case Q.PAN:
          if (A.enablePan === !1)
            return;
          JA(g);
          break;
      }
    }
    function iA(g) {
      A.enabled === !1 || A.enableZoom === !1 || I !== Q.NONE || (g.preventDefault(), A.dispatchEvent(P), FA(g), A.dispatchEvent(aA));
    }
    function L(g) {
      A.enabled === !1 || A.enablePan === !1 || UA(g);
    }
    function lA(g) {
      switch (tA(g), o.length) {
        case 1:
          switch (A.touches.ONE) {
            case d.ROTATE:
              if (A.enableRotate === !1)
                return;
              gA(), I = Q.TOUCH_ROTATE;
              break;
            case d.PAN:
              if (A.enablePan === !1)
                return;
              BA(), I = Q.TOUCH_PAN;
              break;
            default:
              I = Q.NONE;
          }
          break;
        case 2:
          switch (A.touches.TWO) {
            case d.DOLLY_PAN:
              if (A.enableZoom === !1 && A.enablePan === !1)
                return;
              RA(), I = Q.TOUCH_DOLLY_PAN;
              break;
            case d.DOLLY_ROTATE:
              if (A.enableZoom === !1 && A.enableRotate === !1)
                return;
              OA(), I = Q.TOUCH_DOLLY_ROTATE;
              break;
            default:
              I = Q.NONE;
          }
          break;
        default:
          I = Q.NONE;
      }
      I !== Q.NONE && A.dispatchEvent(P);
    }
    function NA(g) {
      switch (tA(g), I) {
        case Q.TOUCH_ROTATE:
          if (A.enableRotate === !1)
            return;
          QA(g), A.update();
          break;
        case Q.TOUCH_PAN:
          if (A.enablePan === !1)
            return;
          CA(g), A.update();
          break;
        case Q.TOUCH_DOLLY_PAN:
          if (A.enableZoom === !1 && A.enablePan === !1)
            return;
          rA(g), A.update();
          break;
        case Q.TOUCH_DOLLY_ROTATE:
          if (A.enableZoom === !1 && A.enableRotate === !1)
            return;
          kA(g), A.update();
          break;
        default:
          I = Q.NONE;
      }
    }
    function hA(g) {
      A.enabled !== !1 && g.preventDefault();
    }
    function TA(g) {
      o.push(g);
    }
    function wA(g) {
      delete x[g.pointerId];
      for (let E = 0; E < o.length; E++)
        if (o[E].pointerId == g.pointerId) {
          o.splice(E, 1);
          return;
        }
    }
    function tA(g) {
      let E = x[g.pointerId];
      E === void 0 && (E = new J(), x[g.pointerId] = E), E.set(g.pageX, g.pageY);
    }
    function z(g) {
      const E = g.pointerId === o[0].pointerId ? o[1] : o[0];
      return x[E.pointerId];
    }
    A.domElement.addEventListener("contextmenu", hA), A.domElement.addEventListener("pointerdown", oA), A.domElement.addEventListener("pointercancel", eA), A.domElement.addEventListener("wheel", iA, { passive: !1 }), this.update();
  }
}
class HA {
  constructor(C = {
    size: {
      width: 10,
      height: 10,
      depth: 10
    },
    color: "yellow"
  }) {
    h(this, "size");
    h(this, "color");
    var e, A, Q;
    this.size = {
      width: ((e = C.size) == null ? void 0 : e.width) || 10,
      height: ((A = C.size) == null ? void 0 : A.height) || 10,
      depth: ((Q = C.size) == null ? void 0 : Q.depth) || 10
    }, this.color = C.color || "yellow";
  }
  /**
   * addBox
   * @returns box
   */
  addBox() {
    const C = [
      [0, 0, 0],
      [this.size.width, 0, 0],
      [this.size.width, this.size.height, 0],
      [0, this.size.height, 0],
      [0, 0, this.size.depth],
      [this.size.width, 0, this.size.depth],
      [this.size.width, this.size.height, this.size.depth],
      [0, this.size.height, this.size.depth]
    ], e = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4],
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7]
    ], A = [];
    e.forEach((i) => {
      const w = C[i[0]], G = C[i[1]];
      A.push(new B.Vector3(...w)), A.push(new B.Vector3(...G));
    });
    const Q = new B.LineBasicMaterial({
      color: this.color,
      linewidth: 1
    }), I = new B.BufferGeometry().setFromPoints(A), Y = new B.LineSegments(I, Q);
    return Y.position.set(-this.size.width / 2, -this.size.height / 2, -this.size.depth / 2), Y;
  }
  /**
   * addAxes
   * @returns axes
   */
  addAxes() {
    const C = new B.Group();
    C.name = "axes";
    const e = [
      [-this.size.width / 2, 0, 0],
      [this.size.height / 2, 0, 0],
      [0, -this.size.height / 2, 0],
      [0, this.size.height / 2, 0],
      [0, 0, -this.size.depth / 2],
      [0, 0, this.size.depth / 2]
    ], A = [
      [0, 1],
      [2, 3],
      [4, 5]
    ], Q = [];
    A.forEach(
      (F) => {
        const U = e[F[0]], R = e[F[1]];
        Q.push(new B.Vector3(...U)), Q.push(new B.Vector3(...R));
      }
    );
    const I = new B.LineBasicMaterial({
      color: this.color
    }), Y = new B.BufferGeometry().setFromPoints(Q), i = new B.LineSegments(Y, I);
    C.add(i);
    const w = 0.25, G = new B.ConeGeometry(w, w * 2, 32), M = new B.MeshLambertMaterial({ color: this.color }), t = new B.Mesh(G, M);
    t.position.set(this.size.width / 2 - w, 0, 0), t.rotation.z = -Math.PI / 2, C.add(t);
    const n = t.clone();
    n.position.set(0, this.size.height / 2 - w, 0), n.rotation.z = 0, C.add(n);
    const a = t.clone();
    return a.position.set(0, 0, this.size.depth / 2 - w), a.rotation.z = 0, a.rotation.x = Math.PI / 2, C.add(a), C;
  }
  /**
   * getSize 
   * @returns size
   */
  getSize() {
    return this.size;
  }
}
class qA extends q {
  constructor(e) {
    super(e);
    h(this, "control");
    const A = new HA();
    this.scene.add(A.addBox()), this.scene.add(A.addAxes()), this.control = new f(this.camera, this.renderer.domElement), this.control.autoRotate = !0, this.control.autoRotateSpeed = 1, this.control.enablePan = !1;
    const Q = new B.AmbientLight(16777215, 0.5);
    this.scene.add(Q);
    const I = new B.HemisphereLight(16777215, 0, 0.5);
    this.scene.add(I), this.render();
  }
  renderOthers() {
    this.control && this.control.update();
  }
}
class bA extends q {
  constructor(e) {
    super(e);
    h(this, "clock", new B.Clock());
    h(this, "postCamera");
    h(this, "postScene");
    h(this, "renderTarget");
    h(this, "cube");
    h(this, "sphere");
    h(this, "render", () => {
      requestAnimationFrame(this.render), this.renderer.setRenderTarget(this.renderTarget), this.renderer.render(this.scene, this.camera), this.renderer.setRenderTarget(null), this.renderer.render(this.postScene, this.postCamera), this.cube.rotation.y = this.clock.getElapsedTime(), this.sphere.position.x = -Math.sin(this.clock.getElapsedTime()) * 6, this.sphere.position.z = Math.cos(this.clock.getElapsedTime()) * 6;
    });
    const { width: A, height: Q } = this.getDomSize(), I = new B.BoxGeometry(5, 5, 5), Y = new B.MeshNormalMaterial();
    this.cube = new B.Mesh(I, Y), this.scene.add(this.cube);
    const i = new B.SphereGeometry(2, 32, 32), w = new B.MeshNormalMaterial();
    this.sphere = new B.Mesh(i, w), this.sphere.position.x = 6, this.scene.add(this.sphere);
    const G = new f(this.camera, this.renderer.domElement);
    G.enablePan = !1;
    const M = 1;
    this.postCamera = new B.OrthographicCamera(-M, M, M, -M, 0.1, 1e3), this.postScene = new B.Scene(), this.postCamera.position.z = 10, this.postScene.add(this.postCamera);
    const t = new B.PlaneGeometry(M * 2, M * 2);
    this.renderTarget = new B.WebGLRenderTarget(A, Q);
    const n = new B.Mesh(t, new B.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: this.renderTarget.texture }
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
    this.postScene.add(n), this.render();
  }
}
const xA = "data:image/gif;base64,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";
class VA extends q {
  constructor(e) {
    super(e);
    h(this, "clock", new B.Clock());
    h(this, "postCamera");
    h(this, "postScene");
    h(this, "renderTarget");
    h(this, "cube");
    h(this, "sphere");
    h(this, "render", () => {
      requestAnimationFrame(this.render), this.renderer.setRenderTarget(this.renderTarget), this.renderer.render(this.scene, this.camera), this.renderer.setRenderTarget(null), this.renderer.render(this.postScene, this.postCamera), this.cube.rotation.y = this.clock.getElapsedTime(), this.sphere.position.x = -Math.sin(this.clock.getElapsedTime()) * 6, this.sphere.position.z = Math.cos(this.clock.getElapsedTime()) * 6;
    });
    const { width: A, height: Q } = this.getDomSize(), I = new B.TextureLoader().load(xA), Y = new B.BoxGeometry(5, 5, 5), i = new B.MeshBasicMaterial({ map: I });
    this.cube = new B.Mesh(Y, i), this.scene.add(this.cube);
    const w = new B.SphereGeometry(2, 32, 32), G = new B.MeshNormalMaterial();
    this.sphere = new B.Mesh(w, G), this.sphere.position.x = 3, this.scene.add(this.sphere);
    const M = new f(this.camera, this.renderer.domElement);
    M.enablePan = !1;
    const t = 1;
    this.postCamera = new B.OrthographicCamera(-t, t, t, -t, 0.1, 1e3), this.postScene = new B.Scene(), this.postCamera.position.z = 10, this.postScene.add(this.postCamera);
    const n = new B.PlaneGeometry(t * 2, t * 2);
    this.renderTarget = new B.WebGLRenderTarget(A, Q);
    const a = new B.Mesh(n, new B.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: this.renderTarget.texture },
        uThickness: { value: 0.01 },
        uColor: { value: new B.Color(16720784) }
      },
      vertexShader: `
                varying vec2 vUv;
                varying vec3 vNormal;
                void main() {
                    vUv = uv;
                    vNormal = normal;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
      fragmentShader: `
                uniform sampler2D tDiffuse;
                uniform vec3 uColor;
                uniform float uThickness;

                varying vec2 vUv;
                varying vec3 vNormal;

                void main() {
                    vec4 texel = texture2D(tDiffuse, vUv);
                    vec4 texelsum = vec4(0.0);
                    for(int i = 0; i < 8; i++) {
                        float x = cos(float(i) * 3.1415926 / 4.0);
                        float y = sin(float(i) * 3.1415926 / 4.0);
                        vec4 texel1 = texture2D(tDiffuse, vUv + vec2(x,y) * uThickness);
                        vec4 texel2 = texture2D(tDiffuse, vUv - vec2(x,y) * uThickness);
                        texelsum += texel1 + texel2;
                    }
                    texelsum = vec4(uColor, texelsum.a);
                    gl_FragColor = texel;
                    if( texel.a == 0.0) {
                        gl_FragColor = texelsum;
                    }
                }
            `,
      transparent: !0
    }));
    this.postScene.add(a), this.render();
  }
}
export {
  ZA as Demo,
  bA as RenderTarget,
  VA as RenderTargetOutline,
  qA as Test
};

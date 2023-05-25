var m = Object.defineProperty;
var u = (n, e, t) => e in n ? m(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var h = (n, e, t) => (u(n, typeof e != "symbol" ? e + "" : e, t), t);
import * as r from "three";
class w {
  constructor(e) {
    h(this, "dom");
    this.dom = e, this.init();
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
    return new r.Scene();
  }
  createCamera() {
    const { width: e, height: t } = this.getDomSize();
    return new r.PerspectiveCamera(75, e / t, 0.1, 1e3);
  }
  createRenderer() {
    const e = new r.WebGLRenderer({
      antialias: !0,
      alpha: !0
    }), { width: t, height: i } = this.getDomSize();
    return e.setSize(t, i), this.dom.appendChild(e.domElement), e;
  }
  createLight() {
    return new r.AmbientLight(4210752);
  }
  createCube() {
    const e = new r.BoxGeometry(3, 3, 3), t = new r.MeshNormalMaterial();
    return new r.Mesh(e, t);
  }
  initScene() {
    if (!this.dom)
      throw new Error("dom is not defined");
    const e = this.createScene(), t = this.createCamera(), i = this.createRenderer(), d = this.createLight(), o = this.createCube();
    e.add(d), e.add(o), t.position.z = 10;
    const s = function() {
      i.render(e, t), requestAnimationFrame(s), o.rotation.x += 0.01, o.rotation.y += 0.01;
    };
    return s(), window.addEventListener(
      "resize",
      () => {
        const { width: a, height: c } = this.getDomSize();
        i.setSize(a, c), t.aspect = a / c, t.updateProjectionMatrix();
      }
    ), e;
  }
}
export {
  w as default
};

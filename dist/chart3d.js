var Ko = Object.defineProperty;
var Jo = (r, e, t) => e in r ? Ko(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Oe = (r, e, t) => (Jo(r, typeof e != "symbol" ? e + "" : e, t), t);
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Ts = "150", wn = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, _n = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Wo = 0, Vs = 1, qo = 2, Ao = 1, jo = 2, ti = 3, nn = 0, wt = 1, $t = 2, tn = 0, Nn = 1, Ks = 2, Js = 3, Ws = 4, Zo = 5, Un = 100, Xo = 101, $o = 102, qs = 103, js = 104, ea = 200, ta = 201, na = 202, ia = 203, mo = 204, xo = 205, sa = 206, ra = 207, oa = 208, aa = 209, la = 210, ca = 0, ha = 1, ua = 2, _s = 3, da = 4, fa = 5, pa = 6, ga = 7, Rs = 0, Aa = 1, ma = 2, Kt = 0, xa = 1, Ma = 2, Ea = 3, Ca = 4, wa = 5, Mo = 300, zn = 301, Yn = 302, Ss = 303, vs = 304, Qi = 306, Is = 1e3, Tt = 1001, ys = 1002, ut = 1003, Zs = 1004, Yi = 1005, vt = 1006, _a = 1007, si = 1008, mn = 1009, Sa = 1010, va = 1011, Eo = 1012, Ia = 1013, pn = 1014, gn = 1015, ri = 1016, ya = 1017, Ba = 1018, Pn = 1020, Da = 1021, Rt = 1023, ba = 1024, Ta = 1025, An = 1026, Hn = 1027, Ra = 1028, Qa = 1029, Fa = 1030, La = 1031, Ga = 1033, Hi = 33776, Vi = 33777, Ki = 33778, Ji = 33779, Xs = 35840, $s = 35841, er = 35842, tr = 35843, Ua = 36196, nr = 37492, ir = 37496, sr = 37808, rr = 37809, or = 37810, ar = 37811, lr = 37812, cr = 37813, hr = 37814, ur = 37815, dr = 37816, fr = 37817, pr = 37818, gr = 37819, Ar = 37820, mr = 37821, Wi = 36492, Oa = 36283, xr = 36284, Mr = 36285, Er = 36286, xn = 3e3, Ne = 3001, Na = 3200, Pa = 3201, Qs = 0, ka = 1, Gt = "srgb", oi = "srgb-linear", Co = "display-p3", qi = 7680, za = 519, Cr = 35044, wr = "300 es", Bs = 1035;
class En {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0)
      return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0)
      return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, a = i.length; s < a; s++)
        i[s].call(this, e);
      e.target = null;
    }
  }
}
const tt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], ji = Math.PI / 180, _r = 180 / Math.PI;
function li() {
  const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (tt[r & 255] + tt[r >> 8 & 255] + tt[r >> 16 & 255] + tt[r >> 24 & 255] + "-" + tt[e & 255] + tt[e >> 8 & 255] + "-" + tt[e >> 16 & 15 | 64] + tt[e >> 24 & 255] + "-" + tt[t & 63 | 128] + tt[t >> 8 & 255] + "-" + tt[t >> 16 & 255] + tt[t >> 24 & 255] + tt[n & 255] + tt[n >> 8 & 255] + tt[n >> 16 & 255] + tt[n >> 24 & 255]).toLowerCase();
}
function pt(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function Ya(r, e) {
  return (r % e + e) % e;
}
function Zi(r, e, t) {
  return (1 - t) * r + t * e;
}
function Sr(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function Ha(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function ui(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Mt(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class ve {
  constructor(e = 0, t = 0) {
    ve.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * n - a * i + e.x, this.y = s * i + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class dt {
  constructor() {
    dt.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, i, s, a, o, c, l) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = o, h[3] = t, h[4] = s, h[5] = c, h[6] = n, h[7] = a, h[8] = l, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], h = n[4], u = n[7], d = n[2], g = n[5], M = n[8], p = i[0], f = i[3], E = i[6], S = i[1], A = i[4], v = i[7], _ = i[2], B = i[5], L = i[8];
    return s[0] = a * p + o * S + c * _, s[3] = a * f + o * A + c * B, s[6] = a * E + o * v + c * L, s[1] = l * p + h * S + u * _, s[4] = l * f + h * A + u * B, s[7] = l * E + h * v + u * L, s[2] = d * p + g * S + M * _, s[5] = d * f + g * A + M * B, s[8] = d * E + g * v + M * L, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8];
    return t * a * h - t * o * l - n * s * h + n * o * c + i * s * l - i * a * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], u = h * a - o * l, d = o * c - h * s, g = l * s - a * c, M = t * u + n * d + i * g;
    if (M === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const p = 1 / M;
    return e[0] = u * p, e[1] = (i * l - h * n) * p, e[2] = (o * n - i * a) * p, e[3] = d * p, e[4] = (h * t - i * c) * p, e[5] = (i * s - o * t) * p, e[6] = g * p, e[7] = (n * c - l * t) * p, e[8] = (a * t - n * s) * p, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, s, a, o) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      n * c,
      n * l,
      -n * (c * a + l * o) + a + e,
      -i * l,
      i * c,
      -i * (-l * a + c * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(Xi.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Xi.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Xi.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Xi = /* @__PURE__ */ new dt();
function wo(r) {
  for (let e = r.length - 1; e >= 0; --e)
    if (r[e] >= 65535)
      return !0;
  return !1;
}
function ai(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
class Mn {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, a, o) {
    let c = n[i + 0], l = n[i + 1], h = n[i + 2], u = n[i + 3];
    const d = s[a + 0], g = s[a + 1], M = s[a + 2], p = s[a + 3];
    if (o === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (o === 1) {
      e[t + 0] = d, e[t + 1] = g, e[t + 2] = M, e[t + 3] = p;
      return;
    }
    if (u !== p || c !== d || l !== g || h !== M) {
      let f = 1 - o;
      const E = c * d + l * g + h * M + u * p, S = E >= 0 ? 1 : -1, A = 1 - E * E;
      if (A > Number.EPSILON) {
        const _ = Math.sqrt(A), B = Math.atan2(_, E * S);
        f = Math.sin(f * B) / _, o = Math.sin(o * B) / _;
      }
      const v = o * S;
      if (c = c * f + d * v, l = l * f + g * v, h = h * f + M * v, u = u * f + p * v, f === 1 - o) {
        const _ = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
        c *= _, l *= _, h *= _, u *= _;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, a) {
    const o = n[i], c = n[i + 1], l = n[i + 2], h = n[i + 3], u = s[a], d = s[a + 1], g = s[a + 2], M = s[a + 3];
    return e[t] = o * M + h * u + c * g - l * d, e[t + 1] = c * M + h * d + l * u - o * g, e[t + 2] = l * M + h * g + o * d - c * u, e[t + 3] = h * M - o * u - c * d - l * g, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    const n = e._x, i = e._y, s = e._z, a = e._order, o = Math.cos, c = Math.sin, l = o(n / 2), h = o(i / 2), u = o(s / 2), d = c(n / 2), g = c(i / 2), M = c(s / 2);
    switch (a) {
      case "XYZ":
        this._x = d * h * u + l * g * M, this._y = l * g * u - d * h * M, this._z = l * h * M + d * g * u, this._w = l * h * u - d * g * M;
        break;
      case "YXZ":
        this._x = d * h * u + l * g * M, this._y = l * g * u - d * h * M, this._z = l * h * M - d * g * u, this._w = l * h * u + d * g * M;
        break;
      case "ZXY":
        this._x = d * h * u - l * g * M, this._y = l * g * u + d * h * M, this._z = l * h * M + d * g * u, this._w = l * h * u - d * g * M;
        break;
      case "ZYX":
        this._x = d * h * u - l * g * M, this._y = l * g * u + d * h * M, this._z = l * h * M - d * g * u, this._w = l * h * u + d * g * M;
        break;
      case "YZX":
        this._x = d * h * u + l * g * M, this._y = l * g * u + d * h * M, this._z = l * h * M - d * g * u, this._w = l * h * u - d * g * M;
        break;
      case "XZY":
        this._x = d * h * u - l * g * M, this._y = l * g * u - d * h * M, this._z = l * h * M + d * g * u, this._w = l * h * u + d * g * M;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], s = t[8], a = t[1], o = t[5], c = t[9], l = t[2], h = t[6], u = t[10], d = n + o + u;
    if (d > 0) {
      const g = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / g, this._x = (h - c) * g, this._y = (s - l) * g, this._z = (a - i) * g;
    } else if (n > o && n > u) {
      const g = 2 * Math.sqrt(1 + n - o - u);
      this._w = (h - c) / g, this._x = 0.25 * g, this._y = (i + a) / g, this._z = (s + l) / g;
    } else if (o > u) {
      const g = 2 * Math.sqrt(1 + o - n - u);
      this._w = (s - l) / g, this._x = (i + a) / g, this._y = 0.25 * g, this._z = (c + h) / g;
    } else {
      const g = 2 * Math.sqrt(1 + u - n - o);
      this._w = (a - i) / g, this._x = (s + l) / g, this._y = (c + h) / g, this._z = 0.25 * g;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(pt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0)
      return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, s = e._z, a = e._w, o = t._x, c = t._y, l = t._z, h = t._w;
    return this._x = n * h + a * o + i * l - s * c, this._y = i * h + a * c + s * o - n * l, this._z = s * h + a * l + n * c - i * o, this._w = a * h - n * o - i * c - s * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const n = this._x, i = this._y, s = this._z, a = this._w;
    let o = a * e._w + n * e._x + i * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = n, this._y = i, this._z = s, this;
    const c = 1 - o * o;
    if (c <= Number.EPSILON) {
      const g = 1 - t;
      return this._w = g * a + t * this._w, this._x = g * n + t * this._x, this._y = g * i + t * this._y, this._z = g * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const l = Math.sqrt(c), h = Math.atan2(l, o), u = Math.sin((1 - t) * h) / l, d = Math.sin(t * h) / l;
    return this._w = a * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = s * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class R {
  constructor(e = 0, t = 0, n = 0) {
    R.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(vr.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(vr.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, a = e.y, o = e.z, c = e.w, l = c * t + a * i - o * n, h = c * n + o * t - s * i, u = c * i + s * n - a * t, d = -s * t - a * n - o * i;
    return this.x = l * c + d * -s + h * -o - u * -a, this.y = h * c + d * -a + u * -s - l * -o, this.z = u * c + d * -o + l * -a - h * -s, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, s = e.z, a = t.x, o = t.y, c = t.z;
    return this.x = i * c - s * o, this.y = s * a - n * c, this.z = n * o - i * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return $i.copy(this).projectOnVector(e), this.sub($i);
  }
  reflect(e) {
    return this.sub($i.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(pt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const $i = /* @__PURE__ */ new R(), vr = /* @__PURE__ */ new Mn();
function kn(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function es(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
const Va = new dt().fromArray([
  0.8224621,
  0.0331941,
  0.0170827,
  0.177538,
  0.9668058,
  0.0723974,
  -1e-7,
  1e-7,
  0.9105199
]), Ka = new dt().fromArray([
  1.2249401,
  -0.0420569,
  -0.0196376,
  -0.2249404,
  1.0420571,
  -0.0786361,
  1e-7,
  0,
  1.0982735
]), en = new R();
function Ja(r) {
  return r.convertSRGBToLinear(), en.set(r.r, r.g, r.b).applyMatrix3(Ka), r.setRGB(en.x, en.y, en.z);
}
function Wa(r) {
  return en.set(r.r, r.g, r.b).applyMatrix3(Va), r.setRGB(en.x, en.y, en.z).convertLinearToSRGB();
}
const qa = {
  [oi]: (r) => r,
  [Gt]: (r) => r.convertSRGBToLinear(),
  [Co]: Ja
}, ja = {
  [oi]: (r) => r,
  [Gt]: (r) => r.convertLinearToSRGB(),
  [Co]: Wa
}, ct = {
  enabled: !1,
  get legacyMode() {
    return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), !this.enabled;
  },
  set legacyMode(r) {
    console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), this.enabled = !r;
  },
  get workingColorSpace() {
    return oi;
  },
  set workingColorSpace(r) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(r, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return r;
    const n = qa[e], i = ja[t];
    if (n === void 0 || i === void 0)
      throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);
    return i(n(r));
  },
  fromWorkingColorSpace: function(r, e) {
    return this.convert(r, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(r, e) {
    return this.convert(r, e, this.workingColorSpace);
  }
};
let Sn;
class _o {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Sn === void 0 && (Sn = ai("canvas")), Sn.width = e.width, Sn.height = e.height;
      const n = Sn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Sn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = ai("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let a = 0; a < s.length; a++)
        s[a] = kn(s[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(kn(t[n] / 255) * 255) : t[n] = kn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
class So {
  constructor(e = null) {
    this.isSource = !0, this.uuid = li(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? s.push(ts(i[a].image)) : s.push(ts(i[a]));
      } else
        s = ts(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function ts(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? _o.getDataURL(r) : r.data ? {
    data: Array.from(r.data),
    width: r.width,
    height: r.height,
    type: r.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Za = 0;
class gt extends En {
  constructor(e = gt.DEFAULT_IMAGE, t = gt.DEFAULT_MAPPING, n = Tt, i = Tt, s = vt, a = si, o = Rt, c = mn, l = gt.DEFAULT_ANISOTROPY, h = xn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Za++ }), this.uuid = li(), this.name = "", this.source = new So(e), this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new ve(0, 0), this.repeat = new ve(1, 1), this.center = new ve(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new dt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Mo)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Is:
          e.x = e.x - Math.floor(e.x);
          break;
        case Tt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case ys:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Is:
          e.y = e.y - Math.floor(e.y);
          break;
        case Tt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case ys:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
}
gt.DEFAULT_IMAGE = null;
gt.DEFAULT_MAPPING = Mo;
gt.DEFAULT_ANISOTROPY = 1;
class et {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    et.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const c = e.elements, l = c[0], h = c[4], u = c[8], d = c[1], g = c[5], M = c[9], p = c[2], f = c[6], E = c[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - p) < 0.01 && Math.abs(M - f) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + p) < 0.1 && Math.abs(M + f) < 0.1 && Math.abs(l + g + E - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const A = (l + 1) / 2, v = (g + 1) / 2, _ = (E + 1) / 2, B = (h + d) / 4, L = (u + p) / 4, x = (M + f) / 4;
      return A > v && A > _ ? A < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(A), i = B / n, s = L / n) : v > _ ? v < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(v), n = B / i, s = x / i) : _ < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(_), n = L / s, i = x / s), this.set(n, i, s, t), this;
    }
    let S = Math.sqrt((f - M) * (f - M) + (u - p) * (u - p) + (d - h) * (d - h));
    return Math.abs(S) < 1e-3 && (S = 1), this.x = (f - M) / S, this.y = (u - p) / S, this.z = (d - h) / S, this.w = Math.acos((l + g + E - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Jt extends En {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new et(0, 0, e, t), this.scissorTest = !1, this.viewport = new et(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    this.texture = new gt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : vt, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new So(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class vo extends gt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = ut, this.minFilter = ut, this.wrapR = Tt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Xa extends gt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = ut, this.minFilter = ut, this.wrapR = Tt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class ci {
  constructor(e = new R(1 / 0, 1 / 0, 1 / 0), t = new R(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, a = -1 / 0, o = -1 / 0;
    for (let c = 0, l = e.length; c < l; c += 3) {
      const h = e[c], u = e[c + 1], d = e[c + 2];
      h < t && (t = h), u < n && (n = u), d < i && (i = d), h > s && (s = h), u > a && (a = u), d > o && (o = d);
    }
    return this.min.set(t, n, i), this.max.set(s, a, o), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, a = -1 / 0, o = -1 / 0;
    for (let c = 0, l = e.count; c < l; c++) {
      const h = e.getX(c), u = e.getY(c), d = e.getZ(c);
      h < t && (t = h), u < n && (n = u), d < i && (i = d), h > s && (s = h), u > a && (a = u), d > o && (o = d);
    }
    return this.min.set(t, n, i), this.max.set(s, a, o), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = ln.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const s = n.attributes.position;
        for (let a = 0, o = s.count; a < o; a++)
          ln.fromBufferAttribute(s, a).applyMatrix4(e.matrixWorld), this.expandByPoint(ln);
      } else
        n.boundingBox === null && n.computeBoundingBox(), ns.copy(n.boundingBox), ns.applyMatrix4(e.matrixWorld), this.union(ns);
    const i = e.children;
    for (let s = 0, a = i.length; s < a; s++)
      this.expandByObject(i[s], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, ln), ln.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Wn), di.subVectors(this.max, Wn), vn.subVectors(e.a, Wn), In.subVectors(e.b, Wn), yn.subVectors(e.c, Wn), qt.subVectors(In, vn), jt.subVectors(yn, In), cn.subVectors(vn, yn);
    let t = [
      0,
      -qt.z,
      qt.y,
      0,
      -jt.z,
      jt.y,
      0,
      -cn.z,
      cn.y,
      qt.z,
      0,
      -qt.x,
      jt.z,
      0,
      -jt.x,
      cn.z,
      0,
      -cn.x,
      -qt.y,
      qt.x,
      0,
      -jt.y,
      jt.x,
      0,
      -cn.y,
      cn.x,
      0
    ];
    return !is(t, vn, In, yn, di) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !is(t, vn, In, yn, di)) ? !1 : (fi.crossVectors(qt, jt), t = [fi.x, fi.y, fi.z], is(t, vn, In, yn, di));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, ln).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(ln).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Pt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Pt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Pt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Pt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Pt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Pt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Pt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Pt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Pt), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Pt = [
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R()
], ln = /* @__PURE__ */ new R(), ns = /* @__PURE__ */ new ci(), vn = /* @__PURE__ */ new R(), In = /* @__PURE__ */ new R(), yn = /* @__PURE__ */ new R(), qt = /* @__PURE__ */ new R(), jt = /* @__PURE__ */ new R(), cn = /* @__PURE__ */ new R(), Wn = /* @__PURE__ */ new R(), di = /* @__PURE__ */ new R(), fi = /* @__PURE__ */ new R(), hn = /* @__PURE__ */ new R();
function is(r, e, t, n, i) {
  for (let s = 0, a = r.length - 3; s <= a; s += 3) {
    hn.fromArray(r, s);
    const o = i.x * Math.abs(hn.x) + i.y * Math.abs(hn.y) + i.z * Math.abs(hn.z), c = e.dot(hn), l = t.dot(hn), h = n.dot(hn);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o)
      return !1;
  }
  return !0;
}
const $a = /* @__PURE__ */ new ci(), qn = /* @__PURE__ */ new R(), ss = /* @__PURE__ */ new R();
class Fi {
  constructor(e = new R(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : $a.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, a = e.length; s < a; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    qn.subVectors(e, this.center);
    const t = qn.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(qn, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (ss.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(qn.copy(e.center).add(ss)), this.expandByPoint(qn.copy(e.center).sub(ss))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const kt = /* @__PURE__ */ new R(), rs = /* @__PURE__ */ new R(), pi = /* @__PURE__ */ new R(), Zt = /* @__PURE__ */ new R(), os = /* @__PURE__ */ new R(), gi = /* @__PURE__ */ new R(), as = /* @__PURE__ */ new R();
class Io {
  constructor(e = new R(), t = new R(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, kt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = kt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (kt.copy(this.origin).addScaledVector(this.direction, t), kt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    rs.copy(e).add(t).multiplyScalar(0.5), pi.copy(t).sub(e).normalize(), Zt.copy(this.origin).sub(rs);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(pi), o = Zt.dot(this.direction), c = -Zt.dot(pi), l = Zt.lengthSq(), h = Math.abs(1 - a * a);
    let u, d, g, M;
    if (h > 0)
      if (u = a * c - o, d = a * o - c, M = s * h, u >= 0)
        if (d >= -M)
          if (d <= M) {
            const p = 1 / h;
            u *= p, d *= p, g = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * c) + l;
          } else
            d = s, u = Math.max(0, -(a * d + o)), g = -u * u + d * (d + 2 * c) + l;
        else
          d = -s, u = Math.max(0, -(a * d + o)), g = -u * u + d * (d + 2 * c) + l;
      else
        d <= -M ? (u = Math.max(0, -(-a * s + o)), d = u > 0 ? -s : Math.min(Math.max(-s, -c), s), g = -u * u + d * (d + 2 * c) + l) : d <= M ? (u = 0, d = Math.min(Math.max(-s, -c), s), g = d * (d + 2 * c) + l) : (u = Math.max(0, -(a * s + o)), d = u > 0 ? s : Math.min(Math.max(-s, -c), s), g = -u * u + d * (d + 2 * c) + l);
    else
      d = a > 0 ? -s : s, u = Math.max(0, -(a * d + o)), g = -u * u + d * (d + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(rs).addScaledVector(pi, d), g;
  }
  intersectSphere(e, t) {
    kt.subVectors(e.center, this.origin);
    const n = kt.dot(this.direction), i = kt.dot(kt) - n * n, s = e.radius * e.radius;
    if (i > s)
      return null;
    const a = Math.sqrt(s - i), o = n - a, c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, a, o, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return l >= 0 ? (n = (e.min.x - d.x) * l, i = (e.max.x - d.x) * l) : (n = (e.max.x - d.x) * l, i = (e.min.x - d.x) * l), h >= 0 ? (s = (e.min.y - d.y) * h, a = (e.max.y - d.y) * h) : (s = (e.max.y - d.y) * h, a = (e.min.y - d.y) * h), n > a || s > i || ((s > n || isNaN(n)) && (n = s), (a < i || isNaN(i)) && (i = a), u >= 0 ? (o = (e.min.z - d.z) * u, c = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, c = (e.min.z - d.z) * u), n > c || o > i) || ((o > n || n !== n) && (n = o), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, kt) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    os.subVectors(t, e), gi.subVectors(n, e), as.crossVectors(os, gi);
    let a = this.direction.dot(as), o;
    if (a > 0) {
      if (i)
        return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    Zt.subVectors(this.origin, e);
    const c = o * this.direction.dot(gi.crossVectors(Zt, gi));
    if (c < 0)
      return null;
    const l = o * this.direction.dot(os.cross(Zt));
    if (l < 0 || c + l > a)
      return null;
    const h = -o * Zt.dot(as);
    return h < 0 ? null : this.at(h / a, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class $e {
  constructor() {
    $e.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, i, s, a, o, c, l, h, u, d, g, M, p, f) {
    const E = this.elements;
    return E[0] = e, E[4] = t, E[8] = n, E[12] = i, E[1] = s, E[5] = a, E[9] = o, E[13] = c, E[2] = l, E[6] = h, E[10] = u, E[14] = d, E[3] = g, E[7] = M, E[11] = p, E[15] = f, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new $e().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / Bn.setFromMatrixColumn(e, 0).length(), s = 1 / Bn.setFromMatrixColumn(e, 1).length(), a = 1 / Bn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(i), l = Math.sin(i), h = Math.cos(s), u = Math.sin(s);
    if (e.order === "XYZ") {
      const d = a * h, g = a * u, M = o * h, p = o * u;
      t[0] = c * h, t[4] = -c * u, t[8] = l, t[1] = g + M * l, t[5] = d - p * l, t[9] = -o * c, t[2] = p - d * l, t[6] = M + g * l, t[10] = a * c;
    } else if (e.order === "YXZ") {
      const d = c * h, g = c * u, M = l * h, p = l * u;
      t[0] = d + p * o, t[4] = M * o - g, t[8] = a * l, t[1] = a * u, t[5] = a * h, t[9] = -o, t[2] = g * o - M, t[6] = p + d * o, t[10] = a * c;
    } else if (e.order === "ZXY") {
      const d = c * h, g = c * u, M = l * h, p = l * u;
      t[0] = d - p * o, t[4] = -a * u, t[8] = M + g * o, t[1] = g + M * o, t[5] = a * h, t[9] = p - d * o, t[2] = -a * l, t[6] = o, t[10] = a * c;
    } else if (e.order === "ZYX") {
      const d = a * h, g = a * u, M = o * h, p = o * u;
      t[0] = c * h, t[4] = M * l - g, t[8] = d * l + p, t[1] = c * u, t[5] = p * l + d, t[9] = g * l - M, t[2] = -l, t[6] = o * c, t[10] = a * c;
    } else if (e.order === "YZX") {
      const d = a * c, g = a * l, M = o * c, p = o * l;
      t[0] = c * h, t[4] = p - d * u, t[8] = M * u + g, t[1] = u, t[5] = a * h, t[9] = -o * h, t[2] = -l * h, t[6] = g * u + M, t[10] = d - p * u;
    } else if (e.order === "XZY") {
      const d = a * c, g = a * l, M = o * c, p = o * l;
      t[0] = c * h, t[4] = -u, t[8] = l * h, t[1] = d * u + p, t[5] = a * h, t[9] = g * u - M, t[2] = M * u - g, t[6] = o * h, t[10] = p * u + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(el, e, tl);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Et.subVectors(e, t), Et.lengthSq() === 0 && (Et.z = 1), Et.normalize(), Xt.crossVectors(n, Et), Xt.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Et.x += 1e-4 : Et.z += 1e-4, Et.normalize(), Xt.crossVectors(n, Et)), Xt.normalize(), Ai.crossVectors(Et, Xt), i[0] = Xt.x, i[4] = Ai.x, i[8] = Et.x, i[1] = Xt.y, i[5] = Ai.y, i[9] = Et.y, i[2] = Xt.z, i[6] = Ai.z, i[10] = Et.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], h = n[1], u = n[5], d = n[9], g = n[13], M = n[2], p = n[6], f = n[10], E = n[14], S = n[3], A = n[7], v = n[11], _ = n[15], B = i[0], L = i[4], x = i[8], I = i[12], T = i[1], V = i[5], J = i[9], O = i[13], b = i[2], P = i[6], W = i[10], $ = i[14], K = i[3], q = i[7], X = i[11], fe = i[15];
    return s[0] = a * B + o * T + c * b + l * K, s[4] = a * L + o * V + c * P + l * q, s[8] = a * x + o * J + c * W + l * X, s[12] = a * I + o * O + c * $ + l * fe, s[1] = h * B + u * T + d * b + g * K, s[5] = h * L + u * V + d * P + g * q, s[9] = h * x + u * J + d * W + g * X, s[13] = h * I + u * O + d * $ + g * fe, s[2] = M * B + p * T + f * b + E * K, s[6] = M * L + p * V + f * P + E * q, s[10] = M * x + p * J + f * W + E * X, s[14] = M * I + p * O + f * $ + E * fe, s[3] = S * B + A * T + v * b + _ * K, s[7] = S * L + A * V + v * P + _ * q, s[11] = S * x + A * J + v * W + _ * X, s[15] = S * I + A * O + v * $ + _ * fe, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], a = e[1], o = e[5], c = e[9], l = e[13], h = e[2], u = e[6], d = e[10], g = e[14], M = e[3], p = e[7], f = e[11], E = e[15];
    return M * (+s * c * u - i * l * u - s * o * d + n * l * d + i * o * g - n * c * g) + p * (+t * c * g - t * l * d + s * a * d - i * a * g + i * l * h - s * c * h) + f * (+t * l * u - t * o * g - s * a * u + n * a * g + s * o * h - n * l * h) + E * (-i * o * h - t * c * u + t * o * d + i * a * u - n * a * d + n * c * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], u = e[9], d = e[10], g = e[11], M = e[12], p = e[13], f = e[14], E = e[15], S = u * f * l - p * d * l + p * c * g - o * f * g - u * c * E + o * d * E, A = M * d * l - h * f * l - M * c * g + a * f * g + h * c * E - a * d * E, v = h * p * l - M * u * l + M * o * g - a * p * g - h * o * E + a * u * E, _ = M * u * c - h * p * c - M * o * d + a * p * d + h * o * f - a * u * f, B = t * S + n * A + i * v + s * _;
    if (B === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const L = 1 / B;
    return e[0] = S * L, e[1] = (p * d * s - u * f * s - p * i * g + n * f * g + u * i * E - n * d * E) * L, e[2] = (o * f * s - p * c * s + p * i * l - n * f * l - o * i * E + n * c * E) * L, e[3] = (u * c * s - o * d * s - u * i * l + n * d * l + o * i * g - n * c * g) * L, e[4] = A * L, e[5] = (h * f * s - M * d * s + M * i * g - t * f * g - h * i * E + t * d * E) * L, e[6] = (M * c * s - a * f * s - M * i * l + t * f * l + a * i * E - t * c * E) * L, e[7] = (a * d * s - h * c * s + h * i * l - t * d * l - a * i * g + t * c * g) * L, e[8] = v * L, e[9] = (M * u * s - h * p * s - M * n * g + t * p * g + h * n * E - t * u * E) * L, e[10] = (a * p * s - M * o * s + M * n * l - t * p * l - a * n * E + t * o * E) * L, e[11] = (h * o * s - a * u * s - h * n * l + t * u * l + a * n * g - t * o * g) * L, e[12] = _ * L, e[13] = (h * p * i - M * u * i + M * n * d - t * p * d - h * n * f + t * u * f) * L, e[14] = (M * o * i - a * p * i - M * n * c + t * p * c + a * n * f - t * o * f) * L, e[15] = (a * u * i - h * o * i + h * n * c - t * u * c - a * n * d + t * o * d) * L, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, a = e.x, o = e.y, c = e.z, l = s * a, h = s * o;
    return this.set(
      l * a + n,
      l * o - i * c,
      l * c + i * o,
      0,
      l * o + i * c,
      h * o + n,
      h * c - i * a,
      0,
      l * c - i * o,
      h * c + i * a,
      s * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, s, a) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      a,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, s = t._x, a = t._y, o = t._z, c = t._w, l = s + s, h = a + a, u = o + o, d = s * l, g = s * h, M = s * u, p = a * h, f = a * u, E = o * u, S = c * l, A = c * h, v = c * u, _ = n.x, B = n.y, L = n.z;
    return i[0] = (1 - (p + E)) * _, i[1] = (g + v) * _, i[2] = (M - A) * _, i[3] = 0, i[4] = (g - v) * B, i[5] = (1 - (d + E)) * B, i[6] = (f + S) * B, i[7] = 0, i[8] = (M + A) * L, i[9] = (f - S) * L, i[10] = (1 - (d + p)) * L, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Bn.set(i[0], i[1], i[2]).length();
    const a = Bn.set(i[4], i[5], i[6]).length(), o = Bn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], Bt.copy(this);
    const l = 1 / s, h = 1 / a, u = 1 / o;
    return Bt.elements[0] *= l, Bt.elements[1] *= l, Bt.elements[2] *= l, Bt.elements[4] *= h, Bt.elements[5] *= h, Bt.elements[6] *= h, Bt.elements[8] *= u, Bt.elements[9] *= u, Bt.elements[10] *= u, t.setFromRotationMatrix(Bt), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, i, s, a) {
    const o = this.elements, c = 2 * s / (t - e), l = 2 * s / (n - i), h = (t + e) / (t - e), u = (n + i) / (n - i), d = -(a + s) / (a - s), g = -2 * a * s / (a - s);
    return o[0] = c, o[4] = 0, o[8] = h, o[12] = 0, o[1] = 0, o[5] = l, o[9] = u, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = d, o[14] = g, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, a) {
    const o = this.elements, c = 1 / (t - e), l = 1 / (n - i), h = 1 / (a - s), u = (t + e) * c, d = (n + i) * l, g = (a + s) * h;
    return o[0] = 2 * c, o[4] = 0, o[8] = 0, o[12] = -u, o[1] = 0, o[5] = 2 * l, o[9] = 0, o[13] = -d, o[2] = 0, o[6] = 0, o[10] = -2 * h, o[14] = -g, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Bn = /* @__PURE__ */ new R(), Bt = /* @__PURE__ */ new $e(), el = /* @__PURE__ */ new R(0, 0, 0), tl = /* @__PURE__ */ new R(1, 1, 1), Xt = /* @__PURE__ */ new R(), Ai = /* @__PURE__ */ new R(), Et = /* @__PURE__ */ new R(), Ir = /* @__PURE__ */ new $e(), yr = /* @__PURE__ */ new Mn();
class Li {
  constructor(e = 0, t = 0, n = 0, i = Li.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, s = i[0], a = i[4], o = i[8], c = i[1], l = i[5], h = i[9], u = i[2], d = i[6], g = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(pt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, g), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-pt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, g), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(pt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, g), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-pt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, g), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(pt(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(o, g));
        break;
      case "XZY":
        this._z = Math.asin(-pt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, g), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Ir.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ir, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return yr.setFromEuler(this), this.setFromQuaternion(yr, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Li.DEFAULT_ORDER = "XYZ";
class yo {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let nl = 0;
const Br = /* @__PURE__ */ new R(), Dn = /* @__PURE__ */ new Mn(), zt = /* @__PURE__ */ new $e(), mi = /* @__PURE__ */ new R(), jn = /* @__PURE__ */ new R(), il = /* @__PURE__ */ new R(), sl = /* @__PURE__ */ new Mn(), Dr = /* @__PURE__ */ new R(1, 0, 0), br = /* @__PURE__ */ new R(0, 1, 0), Tr = /* @__PURE__ */ new R(0, 0, 1), rl = { type: "added" }, Rr = { type: "removed" };
class st extends En {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: nl++ }), this.uuid = li(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = st.DEFAULT_UP.clone();
    const e = new R(), t = new Li(), n = new Mn(), i = new R(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new $e()
      },
      normalMatrix: {
        value: new dt()
      }
    }), this.matrix = new $e(), this.matrixWorld = new $e(), this.matrixAutoUpdate = st.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new yo(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Dn.setFromAxisAngle(e, t), this.quaternion.multiply(Dn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Dn.setFromAxisAngle(e, t), this.quaternion.premultiply(Dn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Dr, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(br, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Tr, e);
  }
  translateOnAxis(e, t) {
    return Br.copy(e).applyQuaternion(this.quaternion), this.position.add(Br.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Dr, e);
  }
  translateY(e) {
    return this.translateOnAxis(br, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Tr, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(zt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? mi.copy(e) : mi.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), jn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? zt.lookAt(jn, mi, this.up) : zt.lookAt(mi, jn, this.up), this.quaternion.setFromRotationMatrix(zt), i && (zt.extractRotation(i.matrixWorld), Dn.setFromRotationMatrix(zt), this.quaternion.premultiply(Dn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(rl)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Rr)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(Rr);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), zt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), zt.multiply(e.parent.matrixWorld)), e.applyMatrix4(zt), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t)
      return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let i = 0, s = this.children.length; i < s; i++) {
      const a = this.children[i].getObjectsByProperty(e, t);
      a.length > 0 && (n = n.concat(a));
    }
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(jn, e, il), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(jn, sl, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1)
      return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const i = this.children;
      for (let s = 0, a = i.length; s < a; s++) {
        const o = i[s];
        o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
    function s(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const u = c[l];
            s(e.shapes, u);
          }
        else
          s(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(s(e.materials, this.material[c]));
        i.material = o;
      } else
        i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        i.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries), c = a(e.materials), l = a(e.textures), h = a(e.images), u = a(e.shapes), d = a(e.skeletons), g = a(e.animations), M = a(e.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), g.length > 0 && (n.animations = g), M.length > 0 && (n.nodes = M);
    }
    return n.object = i, n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const h = o[l];
        delete h.metadata, c.push(h);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
st.DEFAULT_UP = /* @__PURE__ */ new R(0, 1, 0);
st.DEFAULT_MATRIX_AUTO_UPDATE = !0;
st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Dt = /* @__PURE__ */ new R(), Yt = /* @__PURE__ */ new R(), ls = /* @__PURE__ */ new R(), Ht = /* @__PURE__ */ new R(), bn = /* @__PURE__ */ new R(), Tn = /* @__PURE__ */ new R(), Qr = /* @__PURE__ */ new R(), cs = /* @__PURE__ */ new R(), hs = /* @__PURE__ */ new R(), us = /* @__PURE__ */ new R();
class Vt {
  constructor(e = new R(), t = new R(), n = new R()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Dt.subVectors(e, t), i.cross(Dt);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, i, s) {
    Dt.subVectors(i, t), Yt.subVectors(n, t), ls.subVectors(e, t);
    const a = Dt.dot(Dt), o = Dt.dot(Yt), c = Dt.dot(ls), l = Yt.dot(Yt), h = Yt.dot(ls), u = a * l - o * o;
    if (u === 0)
      return s.set(-2, -1, -1);
    const d = 1 / u, g = (l * c - o * h) * d, M = (a * h - o * c) * d;
    return s.set(1 - g - M, M, g);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Ht), Ht.x >= 0 && Ht.y >= 0 && Ht.x + Ht.y <= 1;
  }
  static getUV(e, t, n, i, s, a, o, c) {
    return this.getBarycoord(e, t, n, i, Ht), c.set(0, 0), c.addScaledVector(s, Ht.x), c.addScaledVector(a, Ht.y), c.addScaledVector(o, Ht.z), c;
  }
  static isFrontFacing(e, t, n, i) {
    return Dt.subVectors(n, t), Yt.subVectors(e, t), Dt.cross(Yt).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Dt.subVectors(this.c, this.b), Yt.subVectors(this.a, this.b), Dt.cross(Yt).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Vt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Vt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return Vt.getUV(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return Vt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Vt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let a, o;
    bn.subVectors(i, n), Tn.subVectors(s, n), cs.subVectors(e, n);
    const c = bn.dot(cs), l = Tn.dot(cs);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    hs.subVectors(e, i);
    const h = bn.dot(hs), u = Tn.dot(hs);
    if (h >= 0 && u <= h)
      return t.copy(i);
    const d = c * u - h * l;
    if (d <= 0 && c >= 0 && h <= 0)
      return a = c / (c - h), t.copy(n).addScaledVector(bn, a);
    us.subVectors(e, s);
    const g = bn.dot(us), M = Tn.dot(us);
    if (M >= 0 && g <= M)
      return t.copy(s);
    const p = g * l - c * M;
    if (p <= 0 && l >= 0 && M <= 0)
      return o = l / (l - M), t.copy(n).addScaledVector(Tn, o);
    const f = h * M - g * u;
    if (f <= 0 && u - h >= 0 && g - M >= 0)
      return Qr.subVectors(s, i), o = (u - h) / (u - h + (g - M)), t.copy(i).addScaledVector(Qr, o);
    const E = 1 / (f + p + d);
    return a = p * E, o = d * E, t.copy(n).addScaledVector(bn, a).addScaledVector(Tn, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let ol = 0;
class Cn extends En {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: ol++ }), this.uuid = li(), this.name = "", this.type = "Material", this.blending = Nn, this.side = nn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = mo, this.blendDst = xo, this.blendEquation = Un, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = _s, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = za, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = qi, this.stencilZFail = qi, this.stencilZPass = qi, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Nn && (n.blending = this.blending), this.side !== nn && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const a = [];
      for (const o in s) {
        const c = s[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const s = i(e.textures), a = i(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
const Bo = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, bt = { h: 0, s: 0, l: 0 }, xi = { h: 0, s: 0, l: 0 };
function ds(r, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
class Fe {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Gt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, ct.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = ct.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, ct.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = ct.workingColorSpace) {
    if (e = Ya(e, 1), t = pt(t, 0, 1), n = pt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = ds(a, s, e + 1 / 3), this.g = ds(a, s, e), this.b = ds(a, s, e - 1 / 3);
    }
    return ct.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Gt) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = i[1], o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return this.r = Math.min(255, parseInt(s[1], 10)) / 255, this.g = Math.min(255, parseInt(s[2], 10)) / 255, this.b = Math.min(255, parseInt(s[3], 10)) / 255, ct.toWorkingColorSpace(this, t), n(s[4]), this;
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return this.r = Math.min(100, parseInt(s[1], 10)) / 100, this.g = Math.min(100, parseInt(s[2], 10)) / 100, this.b = Math.min(100, parseInt(s[3], 10)) / 100, ct.toWorkingColorSpace(this, t), n(s[4]), this;
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) {
            const c = parseFloat(s[1]) / 360, l = parseFloat(s[2]) / 100, h = parseFloat(s[3]) / 100;
            return n(s[4]), this.setHSL(c, l, h, t);
          }
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = i[1], a = s.length;
      if (a === 3)
        return this.r = parseInt(s.charAt(0) + s.charAt(0), 16) / 255, this.g = parseInt(s.charAt(1) + s.charAt(1), 16) / 255, this.b = parseInt(s.charAt(2) + s.charAt(2), 16) / 255, ct.toWorkingColorSpace(this, t), this;
      if (a === 6)
        return this.r = parseInt(s.charAt(0) + s.charAt(1), 16) / 255, this.g = parseInt(s.charAt(2) + s.charAt(3), 16) / 255, this.b = parseInt(s.charAt(4) + s.charAt(5), 16) / 255, ct.toWorkingColorSpace(this, t), this;
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Gt) {
    const n = Bo[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = kn(e.r), this.g = kn(e.g), this.b = kn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = es(e.r), this.g = es(e.g), this.b = es(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Gt) {
    return ct.fromWorkingColorSpace(nt.copy(this), e), pt(nt.r * 255, 0, 255) << 16 ^ pt(nt.g * 255, 0, 255) << 8 ^ pt(nt.b * 255, 0, 255) << 0;
  }
  getHexString(e = Gt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = ct.workingColorSpace) {
    ct.fromWorkingColorSpace(nt.copy(this), t);
    const n = nt.r, i = nt.g, s = nt.b, a = Math.max(n, i, s), o = Math.min(n, i, s);
    let c, l;
    const h = (o + a) / 2;
    if (o === a)
      c = 0, l = 0;
    else {
      const u = a - o;
      switch (l = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
        case n:
          c = (i - s) / u + (i < s ? 6 : 0);
          break;
        case i:
          c = (s - n) / u + 2;
          break;
        case s:
          c = (n - i) / u + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = h, e;
  }
  getRGB(e, t = ct.workingColorSpace) {
    return ct.fromWorkingColorSpace(nt.copy(this), t), e.r = nt.r, e.g = nt.g, e.b = nt.b, e;
  }
  getStyle(e = Gt) {
    ct.fromWorkingColorSpace(nt.copy(this), e);
    const t = nt.r, n = nt.g, i = nt.b;
    return e !== Gt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${t * 255 | 0},${n * 255 | 0},${i * 255 | 0})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(bt), bt.h += e, bt.s += t, bt.l += n, this.setHSL(bt.h, bt.s, bt.l), this;
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(bt), e.getHSL(xi);
    const n = Zi(bt.h, xi.h, t), i = Zi(bt.s, xi.s, t), s = Zi(bt.l, xi.l, t);
    return this.setHSL(n, i, s), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const nt = new Fe();
Fe.NAMES = Bo;
class Fs extends Cn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Fe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Rs, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const He = /* @__PURE__ */ new R(), Mi = /* @__PURE__ */ new ve();
class Ot {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Cr, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Mi.fromBufferAttribute(this, t), Mi.applyMatrix3(e), this.setXY(t, Mi.x, Mi.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        He.fromBufferAttribute(this, t), He.applyMatrix3(e), this.setXYZ(t, He.x, He.y, He.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      He.fromBufferAttribute(this, t), He.applyMatrix4(e), this.setXYZ(t, He.x, He.y, He.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      He.fromBufferAttribute(this, t), He.applyNormalMatrix(e), this.setXYZ(t, He.x, He.y, He.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      He.fromBufferAttribute(this, t), He.transformDirection(e), this.setXYZ(t, He.x, He.y, He.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = ui(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Mt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = ui(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Mt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = ui(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Mt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = ui(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Mt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Mt(t, this.array), n = Mt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Mt(t, this.array), n = Mt(n, this.array), i = Mt(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = Mt(t, this.array), n = Mt(n, this.array), i = Mt(i, this.array), s = Mt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== Cr && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
  // @deprecated
  copyColorsArray() {
    console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
  }
  copyVector2sArray() {
    console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
  }
  copyVector3sArray() {
    console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
  }
  copyVector4sArray() {
    console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
  }
}
class Do extends Ot {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class bo extends Ot {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class ft extends Ot {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let al = 0;
const St = /* @__PURE__ */ new $e(), fs = /* @__PURE__ */ new st(), Rn = /* @__PURE__ */ new R(), Ct = /* @__PURE__ */ new ci(), Zn = /* @__PURE__ */ new ci(), Xe = /* @__PURE__ */ new R();
class yt extends En {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: al++ }), this.uuid = li(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (wo(e) ? bo : Do)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new dt().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return St.makeRotationFromQuaternion(e), this.applyMatrix4(St), this;
  }
  rotateX(e) {
    return St.makeRotationX(e), this.applyMatrix4(St), this;
  }
  rotateY(e) {
    return St.makeRotationY(e), this.applyMatrix4(St), this;
  }
  rotateZ(e) {
    return St.makeRotationZ(e), this.applyMatrix4(St), this;
  }
  translate(e, t, n) {
    return St.makeTranslation(e, t, n), this.applyMatrix4(St), this;
  }
  scale(e, t, n) {
    return St.makeScale(e, t, n), this.applyMatrix4(St), this;
  }
  lookAt(e) {
    return fs.lookAt(e), fs.updateMatrix(), this.applyMatrix4(fs.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Rn).negate(), this.translate(Rn.x, Rn.y, Rn.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new ft(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ci());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new R(-1 / 0, -1 / 0, -1 / 0),
        new R(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          Ct.setFromBufferAttribute(s), this.morphTargetsRelative ? (Xe.addVectors(this.boundingBox.min, Ct.min), this.boundingBox.expandByPoint(Xe), Xe.addVectors(this.boundingBox.max, Ct.max), this.boundingBox.expandByPoint(Xe)) : (this.boundingBox.expandByPoint(Ct.min), this.boundingBox.expandByPoint(Ct.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Fi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new R(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Ct.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          Zn.setFromBufferAttribute(o), this.morphTargetsRelative ? (Xe.addVectors(Ct.min, Zn.min), Ct.expandByPoint(Xe), Xe.addVectors(Ct.max, Zn.max), Ct.expandByPoint(Xe)) : (Ct.expandByPoint(Zn.min), Ct.expandByPoint(Zn.max));
        }
      Ct.getCenter(n);
      let i = 0;
      for (let s = 0, a = e.count; s < a; s++)
        Xe.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(Xe));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], c = this.morphTargetsRelative;
          for (let l = 0, h = o.count; l < h; l++)
            Xe.fromBufferAttribute(o, l), c && (Rn.fromBufferAttribute(e, l), Xe.add(Rn)), i = Math.max(i, n.distanceToSquared(Xe));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, i = t.position.array, s = t.normal.array, a = t.uv.array, o = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Ot(new Float32Array(4 * o), 4));
    const c = this.getAttribute("tangent").array, l = [], h = [];
    for (let T = 0; T < o; T++)
      l[T] = new R(), h[T] = new R();
    const u = new R(), d = new R(), g = new R(), M = new ve(), p = new ve(), f = new ve(), E = new R(), S = new R();
    function A(T, V, J) {
      u.fromArray(i, T * 3), d.fromArray(i, V * 3), g.fromArray(i, J * 3), M.fromArray(a, T * 2), p.fromArray(a, V * 2), f.fromArray(a, J * 2), d.sub(u), g.sub(u), p.sub(M), f.sub(M);
      const O = 1 / (p.x * f.y - f.x * p.y);
      isFinite(O) && (E.copy(d).multiplyScalar(f.y).addScaledVector(g, -p.y).multiplyScalar(O), S.copy(g).multiplyScalar(p.x).addScaledVector(d, -f.x).multiplyScalar(O), l[T].add(E), l[V].add(E), l[J].add(E), h[T].add(S), h[V].add(S), h[J].add(S));
    }
    let v = this.groups;
    v.length === 0 && (v = [{
      start: 0,
      count: n.length
    }]);
    for (let T = 0, V = v.length; T < V; ++T) {
      const J = v[T], O = J.start, b = J.count;
      for (let P = O, W = O + b; P < W; P += 3)
        A(
          n[P + 0],
          n[P + 1],
          n[P + 2]
        );
    }
    const _ = new R(), B = new R(), L = new R(), x = new R();
    function I(T) {
      L.fromArray(s, T * 3), x.copy(L);
      const V = l[T];
      _.copy(V), _.sub(L.multiplyScalar(L.dot(V))).normalize(), B.crossVectors(x, V);
      const O = B.dot(h[T]) < 0 ? -1 : 1;
      c[T * 4] = _.x, c[T * 4 + 1] = _.y, c[T * 4 + 2] = _.z, c[T * 4 + 3] = O;
    }
    for (let T = 0, V = v.length; T < V; ++T) {
      const J = v[T], O = J.start, b = J.count;
      for (let P = O, W = O + b; P < W; P += 3)
        I(n[P + 0]), I(n[P + 1]), I(n[P + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Ot(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, g = n.count; d < g; d++)
          n.setXYZ(d, 0, 0, 0);
      const i = new R(), s = new R(), a = new R(), o = new R(), c = new R(), l = new R(), h = new R(), u = new R();
      if (e)
        for (let d = 0, g = e.count; d < g; d += 3) {
          const M = e.getX(d + 0), p = e.getX(d + 1), f = e.getX(d + 2);
          i.fromBufferAttribute(t, M), s.fromBufferAttribute(t, p), a.fromBufferAttribute(t, f), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), o.fromBufferAttribute(n, M), c.fromBufferAttribute(n, p), l.fromBufferAttribute(n, f), o.add(h), c.add(h), l.add(h), n.setXYZ(M, o.x, o.y, o.z), n.setXYZ(p, c.x, c.y, c.z), n.setXYZ(f, l.x, l.y, l.z);
        }
      else
        for (let d = 0, g = t.count; d < g; d += 3)
          i.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), a.fromBufferAttribute(t, d + 2), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  // @deprecated since r144
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      Xe.fromBufferAttribute(e, t), Xe.normalize(), e.setXYZ(t, Xe.x, Xe.y, Xe.z);
  }
  toNonIndexed() {
    function e(o, c) {
      const l = o.array, h = o.itemSize, u = o.normalized, d = new l.constructor(c.length * h);
      let g = 0, M = 0;
      for (let p = 0, f = c.length; p < f; p++) {
        o.isInterleavedBufferAttribute ? g = c[p] * o.data.stride + o.offset : g = c[p] * h;
        for (let E = 0; E < h; E++)
          d[M++] = l[g++];
      }
      return new Ot(d, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new yt(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const c = i[o], l = e(c, n);
      t.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [], l = s[o];
      for (let h = 0, u = l.length; h < u; h++) {
        const d = l[h], g = e(d, n);
        c.push(g);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], h = [];
      for (let u = 0, d = l.length; u < d; u++) {
        const g = l[u];
        h.push(g.toJSON(e.data));
      }
      h.length > 0 && (i[c] = h, s = !0);
    }
    s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const l in i) {
      const h = i[l];
      this.setAttribute(l, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const h = [], u = s[l];
      for (let d = 0, g = u.length; d < g; d++)
        h.push(u[d].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, h = a.length; l < h; l++) {
      const u = a[l];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Fr = /* @__PURE__ */ new $e(), Lt = /* @__PURE__ */ new Io(), Ei = /* @__PURE__ */ new Fi(), Lr = /* @__PURE__ */ new R(), Xn = /* @__PURE__ */ new R(), $n = /* @__PURE__ */ new R(), ei = /* @__PURE__ */ new R(), ps = /* @__PURE__ */ new R(), Ci = /* @__PURE__ */ new R(), wi = /* @__PURE__ */ new ve(), _i = /* @__PURE__ */ new ve(), Si = /* @__PURE__ */ new ve(), gs = /* @__PURE__ */ new R(), vi = /* @__PURE__ */ new R();
class it extends st {
  constructor(e = new yt(), t = new Fs()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      Ci.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const h = o[c], u = s[c];
        h !== 0 && (ps.fromBufferAttribute(u, e), a ? Ci.addScaledVector(ps, h) : Ci.addScaledVector(ps.sub(t), h));
      }
      t.add(Ci);
    }
    return this.isSkinnedMesh && this.boneTransform(e, t), t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), Ei.copy(n.boundingSphere), Ei.applyMatrix4(s), Lt.copy(e.ray).recast(e.near), Ei.containsPoint(Lt.origin) === !1 && (Lt.intersectSphere(Ei, Lr) === null || Lt.origin.distanceToSquared(Lr) > (e.far - e.near) ** 2)) || (Fr.copy(s).invert(), Lt.copy(e.ray).applyMatrix4(Fr), n.boundingBox !== null && Lt.intersectsBox(n.boundingBox) === !1))
      return;
    let a;
    const o = n.index, c = n.attributes.position, l = n.attributes.uv, h = n.attributes.uv2, u = n.groups, d = n.drawRange;
    if (o !== null)
      if (Array.isArray(i))
        for (let g = 0, M = u.length; g < M; g++) {
          const p = u[g], f = i[p.materialIndex], E = Math.max(p.start, d.start), S = Math.min(o.count, Math.min(p.start + p.count, d.start + d.count));
          for (let A = E, v = S; A < v; A += 3) {
            const _ = o.getX(A), B = o.getX(A + 1), L = o.getX(A + 2);
            a = Ii(this, f, e, Lt, l, h, _, B, L), a && (a.faceIndex = Math.floor(A / 3), a.face.materialIndex = p.materialIndex, t.push(a));
          }
        }
      else {
        const g = Math.max(0, d.start), M = Math.min(o.count, d.start + d.count);
        for (let p = g, f = M; p < f; p += 3) {
          const E = o.getX(p), S = o.getX(p + 1), A = o.getX(p + 2);
          a = Ii(this, i, e, Lt, l, h, E, S, A), a && (a.faceIndex = Math.floor(p / 3), t.push(a));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(i))
        for (let g = 0, M = u.length; g < M; g++) {
          const p = u[g], f = i[p.materialIndex], E = Math.max(p.start, d.start), S = Math.min(c.count, Math.min(p.start + p.count, d.start + d.count));
          for (let A = E, v = S; A < v; A += 3) {
            const _ = A, B = A + 1, L = A + 2;
            a = Ii(this, f, e, Lt, l, h, _, B, L), a && (a.faceIndex = Math.floor(A / 3), a.face.materialIndex = p.materialIndex, t.push(a));
          }
        }
      else {
        const g = Math.max(0, d.start), M = Math.min(c.count, d.start + d.count);
        for (let p = g, f = M; p < f; p += 3) {
          const E = p, S = p + 1, A = p + 2;
          a = Ii(this, i, e, Lt, l, h, E, S, A), a && (a.faceIndex = Math.floor(p / 3), t.push(a));
        }
      }
  }
}
function ll(r, e, t, n, i, s, a, o) {
  let c;
  if (e.side === wt ? c = n.intersectTriangle(a, s, i, !0, o) : c = n.intersectTriangle(i, s, a, e.side === nn, o), c === null)
    return null;
  vi.copy(o), vi.applyMatrix4(r.matrixWorld);
  const l = t.ray.origin.distanceTo(vi);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: vi.clone(),
    object: r
  };
}
function Ii(r, e, t, n, i, s, a, o, c) {
  r.getVertexPosition(a, Xn), r.getVertexPosition(o, $n), r.getVertexPosition(c, ei);
  const l = ll(r, e, t, n, Xn, $n, ei, gs);
  if (l) {
    i && (wi.fromBufferAttribute(i, a), _i.fromBufferAttribute(i, o), Si.fromBufferAttribute(i, c), l.uv = Vt.getUV(gs, Xn, $n, ei, wi, _i, Si, new ve())), s && (wi.fromBufferAttribute(s, a), _i.fromBufferAttribute(s, o), Si.fromBufferAttribute(s, c), l.uv2 = Vt.getUV(gs, Xn, $n, ei, wi, _i, Si, new ve()));
    const h = {
      a,
      b: o,
      c,
      normal: new R(),
      materialIndex: 0
    };
    Vt.getNormal(Xn, $n, ei, h.normal), l.face = h;
  }
  return l;
}
class sn extends yt {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    i = Math.floor(i), s = Math.floor(s), a = Math.floor(a);
    const c = [], l = [], h = [], u = [];
    let d = 0, g = 0;
    M("z", "y", "x", -1, -1, n, t, e, a, s, 0), M("z", "y", "x", 1, -1, n, t, -e, a, s, 1), M("x", "z", "y", 1, 1, e, n, t, i, a, 2), M("x", "z", "y", 1, -1, e, n, -t, i, a, 3), M("x", "y", "z", 1, -1, e, t, n, i, s, 4), M("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(c), this.setAttribute("position", new ft(l, 3)), this.setAttribute("normal", new ft(h, 3)), this.setAttribute("uv", new ft(u, 2));
    function M(p, f, E, S, A, v, _, B, L, x, I) {
      const T = v / L, V = _ / x, J = v / 2, O = _ / 2, b = B / 2, P = L + 1, W = x + 1;
      let $ = 0, K = 0;
      const q = new R();
      for (let X = 0; X < W; X++) {
        const fe = X * V - O;
        for (let N = 0; N < P; N++) {
          const j = N * T - J;
          q[p] = j * S, q[f] = fe * A, q[E] = b, l.push(q.x, q.y, q.z), q[p] = 0, q[f] = 0, q[E] = B > 0 ? 1 : -1, h.push(q.x, q.y, q.z), u.push(N / L), u.push(1 - X / x), $ += 1;
        }
      }
      for (let X = 0; X < x; X++)
        for (let fe = 0; fe < L; fe++) {
          const N = d + fe + P * X, j = d + fe + P * (X + 1), ie = d + (fe + 1) + P * (X + 1), G = d + (fe + 1) + P * X;
          c.push(N, j, G), c.push(j, ie, G), K += 6;
        }
      o.addGroup(g, K, I), g += K, d += $;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new sn(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Vn(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function ht(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = Vn(r[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function cl(r) {
  const e = [];
  for (let t = 0; t < r.length; t++)
    e.push(r[t].clone());
  return e;
}
function To(r) {
  return r.getRenderTarget() === null && r.outputEncoding === Ne ? Gt : oi;
}
const hl = { clone: Vn, merge: ht };
var ul = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, dl = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Wt extends Cn {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = ul, this.fragmentShader = dl, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1
      // set to use shader texture LOD
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Vn(e.uniforms), this.uniformsGroups = cl(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture ? t.uniforms[i] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[i] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[i] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Ro extends st {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new $e(), this.projectionMatrix = new $e(), this.projectionMatrixInverse = new $e();
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class It extends Ro {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = _r * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(ji * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return _r * 2 * Math.atan(
      Math.tan(ji * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, i, s, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(ji * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      s += a.offsetX * i / c, t -= a.offsetY * n / l, i *= a.width / c, n *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Qn = -90, Fn = 1;
class fl extends st {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n;
    const i = new It(Qn, Fn, e, t);
    i.layers = this.layers, i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
    const s = new It(Qn, Fn, e, t);
    s.layers = this.layers, s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), this.add(s);
    const a = new It(Qn, Fn, e, t);
    a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(0, 1, 0), this.add(a);
    const o = new It(Qn, Fn, e, t);
    o.layers = this.layers, o.up.set(0, 0, 1), o.lookAt(0, -1, 0), this.add(o);
    const c = new It(Qn, Fn, e, t);
    c.layers = this.layers, c.up.set(0, 1, 0), c.lookAt(0, 0, 1), this.add(c);
    const l = new It(Qn, Fn, e, t);
    l.layers = this.layers, l.up.set(0, 1, 0), l.lookAt(0, 0, -1), this.add(l);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [i, s, a, o, c, l] = this.children, h = e.getRenderTarget(), u = e.toneMapping, d = e.xr.enabled;
    e.toneMapping = Kt, e.xr.enabled = !1;
    const g = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, a), e.setRenderTarget(n, 3), e.render(t, o), e.setRenderTarget(n, 4), e.render(t, c), n.texture.generateMipmaps = g, e.setRenderTarget(n, 5), e.render(t, l), e.setRenderTarget(h), e.toneMapping = u, e.xr.enabled = d, n.texture.needsPMREMUpdate = !0;
  }
}
class Qo extends gt {
  constructor(e, t, n, i, s, a, o, c, l, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : zn, super(e, t, n, i, s, a, o, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class pl extends Jt {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new Qo(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : vt;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, i = new sn(5, 5, 5), s = new Wt({
      name: "CubemapFromEquirect",
      uniforms: Vn(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: wt,
      blending: tn
    });
    s.uniforms.tEquirect.value = t;
    const a = new it(i, s), o = t.minFilter;
    return t.minFilter === si && (t.minFilter = vt), new fl(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const As = /* @__PURE__ */ new R(), gl = /* @__PURE__ */ new R(), Al = /* @__PURE__ */ new dt();
class un {
  constructor(e = new R(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = As.subVectors(n, t).cross(gl.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(As), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Al.getNormalMatrix(e), i = this.coplanarPoint(As).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Ln = /* @__PURE__ */ new Fi(), yi = /* @__PURE__ */ new R();
class Fo {
  constructor(e = new un(), t = new un(), n = new un(), i = new un(), s = new un(), a = new un()) {
    this.planes = [e, t, n, i, s, a];
  }
  set(e, t, n, i, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(s), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes, n = e.elements, i = n[0], s = n[1], a = n[2], o = n[3], c = n[4], l = n[5], h = n[6], u = n[7], d = n[8], g = n[9], M = n[10], p = n[11], f = n[12], E = n[13], S = n[14], A = n[15];
    return t[0].setComponents(o - i, u - c, p - d, A - f).normalize(), t[1].setComponents(o + i, u + c, p + d, A + f).normalize(), t[2].setComponents(o + s, u + l, p + g, A + E).normalize(), t[3].setComponents(o - s, u - l, p - g, A - E).normalize(), t[4].setComponents(o - a, u - h, p - M, A - S).normalize(), t[5].setComponents(o + a, u + h, p + M, A + S).normalize(), this;
  }
  intersectsObject(e) {
    const t = e.geometry;
    return t.boundingSphere === null && t.computeBoundingSphere(), Ln.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(Ln);
  }
  intersectsSprite(e) {
    return Ln.center.set(0, 0, 0), Ln.radius = 0.7071067811865476, Ln.applyMatrix4(e.matrixWorld), this.intersectsSphere(Ln);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (yi.x = i.normal.x > 0 ? e.max.x : e.min.x, yi.y = i.normal.y > 0 ? e.max.y : e.min.y, yi.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(yi) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Lo() {
  let r = null, e = !1, t = null, n = null;
  function i(s, a) {
    t(s, a), n = r.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = r.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      r.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      r = s;
    }
  };
}
function ml(r, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(l, h) {
    const u = l.array, d = l.usage, g = r.createBuffer();
    r.bindBuffer(h, g), r.bufferData(h, u, d), l.onUploadCallback();
    let M;
    if (u instanceof Float32Array)
      M = 5126;
    else if (u instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          M = 5131;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        M = 5123;
    else if (u instanceof Int16Array)
      M = 5122;
    else if (u instanceof Uint32Array)
      M = 5125;
    else if (u instanceof Int32Array)
      M = 5124;
    else if (u instanceof Int8Array)
      M = 5120;
    else if (u instanceof Uint8Array)
      M = 5121;
    else if (u instanceof Uint8ClampedArray)
      M = 5121;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + u);
    return {
      buffer: g,
      type: M,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: l.version
    };
  }
  function s(l, h, u) {
    const d = h.array, g = h.updateRange;
    r.bindBuffer(u, l), g.count === -1 ? r.bufferSubData(u, 0, d) : (t ? r.bufferSubData(
      u,
      g.offset * d.BYTES_PER_ELEMENT,
      d,
      g.offset,
      g.count
    ) : r.bufferSubData(
      u,
      g.offset * d.BYTES_PER_ELEMENT,
      d.subarray(g.offset, g.offset + g.count)
    ), g.count = -1), h.onUploadCallback();
  }
  function a(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function o(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const h = n.get(l);
    h && (r.deleteBuffer(h.buffer), n.delete(l));
  }
  function c(l, h) {
    if (l.isGLBufferAttribute) {
      const d = n.get(l);
      (!d || d.version < l.version) && n.set(l, {
        buffer: l.buffer,
        type: l.type,
        bytesPerElement: l.elementSize,
        version: l.version
      });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const u = n.get(l);
    u === void 0 ? n.set(l, i(l, h)) : u.version < l.version && (s(u.buffer, l, h), u.version = l.version);
  }
  return {
    get: a,
    remove: o,
    update: c
  };
}
class hi extends yt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, a = t / 2, o = Math.floor(n), c = Math.floor(i), l = o + 1, h = c + 1, u = e / o, d = t / c, g = [], M = [], p = [], f = [];
    for (let E = 0; E < h; E++) {
      const S = E * d - a;
      for (let A = 0; A < l; A++) {
        const v = A * u - s;
        M.push(v, -S, 0), p.push(0, 0, 1), f.push(A / o), f.push(1 - E / c);
      }
    }
    for (let E = 0; E < c; E++)
      for (let S = 0; S < o; S++) {
        const A = S + l * E, v = S + l * (E + 1), _ = S + 1 + l * (E + 1), B = S + 1 + l * E;
        g.push(A, v, B), g.push(v, _, B);
      }
    this.setIndex(g), this.setAttribute("position", new ft(M, 3)), this.setAttribute("normal", new ft(p, 3)), this.setAttribute("uv", new ft(f, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new hi(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var xl = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, Ml = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, El = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Cl = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, wl = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, _l = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Sl = "vec3 transformed = vec3( position );", vl = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Il = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`, yl = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Bl = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Dl = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, bl = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Tl = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Rl = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Ql = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Fl = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Ll = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Gl = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Ul = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
float w0( float a ) {
	return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
}
float w1( float a ) {
	return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
}
float w2( float a ){
    return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
}
float w3( float a ) {
	return ( 1.0 / 6.0 ) * ( a * a * a );
}
float g0( float a ) {
	return w0( a ) + w1( a );
}
float g1( float a ) {
	return w2( a ) + w3( a );
}
float h0( float a ) {
	return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
}
float h1( float a ) {
    return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
}
vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
	uv = uv * texelSize.zw + 0.5;
	vec2 iuv = floor( uv );
    vec2 fuv = fract( uv );
    float g0x = g0( fuv.x );
    float g1x = g1( fuv.x );
    float h0x = h0( fuv.x );
    float h1x = h1( fuv.x );
    float h0y = h0( fuv.y );
    float h1y = h1( fuv.y );
    vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
    vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
    vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
    vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
    
    vec2 lodFudge = pow( 1.95, lod ) / fullSize;
	return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
		   g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
}
vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
	vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
	vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
	vec2 fLodSizeInv = 1.0 / fLodSize;
	vec2 cLodSizeInv = 1.0 / cLodSize;
	vec2 fullSize = vec2( textureSize( sampler, 0 ) );
	vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
	vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
	return mix( fSample, cSample, fract( lod ) );
}`, Ol = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Nl = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Pl = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, kl = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, zl = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Yl = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Hl = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Vl = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Kl = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Jl = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Wl = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, ql = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, jl = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Zl = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Xl = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, $l = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, ec = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, tc = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, nc = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, ic = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, sc = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, rc = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, oc = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, ac = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`, lc = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, cc = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, hc = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, uc = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, dc = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`, fc = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, pc = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, gc = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Ac = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, mc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, xc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Mc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Ec = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Cc = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, wc = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, _c = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Sc = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, vc = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Ic = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, yc = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Bc = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, Dc = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, bc = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, Tc = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`, Rc = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Qc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Fc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Lc = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Gc = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`, Uc = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, Oc = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, Nc = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, Pc = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, kc = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, zc = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`, Yc = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Hc = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Vc = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Kc = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Jc = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Wc = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, qc = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, jc = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Zc = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Xc = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, $c = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, eh = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, th = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, nh = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, ih = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, sh = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, rh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, oh = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, ah = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`, lh = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`, ch = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, hh = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, uh = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, dh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, fh = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, ph = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, gh = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Ah = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, mh = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, xh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Mh = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Eh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Ch = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, wh = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, _h = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, Sh = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, vh = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Ih = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, yh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Bh = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Dh = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, bh = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Th = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Rh = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Qh = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Fh = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Lh = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Gh = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Uh = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Oh = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Nh = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ph = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, kh = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, zh = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Yh = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Hh = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Vh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Kh = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Jh = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Wh = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, qh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, we = {
  alphamap_fragment: xl,
  alphamap_pars_fragment: Ml,
  alphatest_fragment: El,
  alphatest_pars_fragment: Cl,
  aomap_fragment: wl,
  aomap_pars_fragment: _l,
  begin_vertex: Sl,
  beginnormal_vertex: vl,
  bsdfs: Il,
  iridescence_fragment: yl,
  bumpmap_pars_fragment: Bl,
  clipping_planes_fragment: Dl,
  clipping_planes_pars_fragment: bl,
  clipping_planes_pars_vertex: Tl,
  clipping_planes_vertex: Rl,
  color_fragment: Ql,
  color_pars_fragment: Fl,
  color_pars_vertex: Ll,
  color_vertex: Gl,
  common: Ul,
  cube_uv_reflection_fragment: Ol,
  defaultnormal_vertex: Nl,
  displacementmap_pars_vertex: Pl,
  displacementmap_vertex: kl,
  emissivemap_fragment: zl,
  emissivemap_pars_fragment: Yl,
  encodings_fragment: Hl,
  encodings_pars_fragment: Vl,
  envmap_fragment: Kl,
  envmap_common_pars_fragment: Jl,
  envmap_pars_fragment: Wl,
  envmap_pars_vertex: ql,
  envmap_physical_pars_fragment: ac,
  envmap_vertex: jl,
  fog_vertex: Zl,
  fog_pars_vertex: Xl,
  fog_fragment: $l,
  fog_pars_fragment: ec,
  gradientmap_pars_fragment: tc,
  lightmap_fragment: nc,
  lightmap_pars_fragment: ic,
  lights_lambert_fragment: sc,
  lights_lambert_pars_fragment: rc,
  lights_pars_begin: oc,
  lights_toon_fragment: lc,
  lights_toon_pars_fragment: cc,
  lights_phong_fragment: hc,
  lights_phong_pars_fragment: uc,
  lights_physical_fragment: dc,
  lights_physical_pars_fragment: fc,
  lights_fragment_begin: pc,
  lights_fragment_maps: gc,
  lights_fragment_end: Ac,
  logdepthbuf_fragment: mc,
  logdepthbuf_pars_fragment: xc,
  logdepthbuf_pars_vertex: Mc,
  logdepthbuf_vertex: Ec,
  map_fragment: Cc,
  map_pars_fragment: wc,
  map_particle_fragment: _c,
  map_particle_pars_fragment: Sc,
  metalnessmap_fragment: vc,
  metalnessmap_pars_fragment: Ic,
  morphcolor_vertex: yc,
  morphnormal_vertex: Bc,
  morphtarget_pars_vertex: Dc,
  morphtarget_vertex: bc,
  normal_fragment_begin: Tc,
  normal_fragment_maps: Rc,
  normal_pars_fragment: Qc,
  normal_pars_vertex: Fc,
  normal_vertex: Lc,
  normalmap_pars_fragment: Gc,
  clearcoat_normal_fragment_begin: Uc,
  clearcoat_normal_fragment_maps: Oc,
  clearcoat_pars_fragment: Nc,
  iridescence_pars_fragment: Pc,
  output_fragment: kc,
  packing: zc,
  premultiplied_alpha_fragment: Yc,
  project_vertex: Hc,
  dithering_fragment: Vc,
  dithering_pars_fragment: Kc,
  roughnessmap_fragment: Jc,
  roughnessmap_pars_fragment: Wc,
  shadowmap_pars_fragment: qc,
  shadowmap_pars_vertex: jc,
  shadowmap_vertex: Zc,
  shadowmask_pars_fragment: Xc,
  skinbase_vertex: $c,
  skinning_pars_vertex: eh,
  skinning_vertex: th,
  skinnormal_vertex: nh,
  specularmap_fragment: ih,
  specularmap_pars_fragment: sh,
  tonemapping_fragment: rh,
  tonemapping_pars_fragment: oh,
  transmission_fragment: ah,
  transmission_pars_fragment: lh,
  uv_pars_fragment: ch,
  uv_pars_vertex: hh,
  uv_vertex: uh,
  uv2_pars_fragment: dh,
  uv2_pars_vertex: fh,
  uv2_vertex: ph,
  worldpos_vertex: gh,
  background_vert: Ah,
  background_frag: mh,
  backgroundCube_vert: xh,
  backgroundCube_frag: Mh,
  cube_vert: Eh,
  cube_frag: Ch,
  depth_vert: wh,
  depth_frag: _h,
  distanceRGBA_vert: Sh,
  distanceRGBA_frag: vh,
  equirect_vert: Ih,
  equirect_frag: yh,
  linedashed_vert: Bh,
  linedashed_frag: Dh,
  meshbasic_vert: bh,
  meshbasic_frag: Th,
  meshlambert_vert: Rh,
  meshlambert_frag: Qh,
  meshmatcap_vert: Fh,
  meshmatcap_frag: Lh,
  meshnormal_vert: Gh,
  meshnormal_frag: Uh,
  meshphong_vert: Oh,
  meshphong_frag: Nh,
  meshphysical_vert: Ph,
  meshphysical_frag: kh,
  meshtoon_vert: zh,
  meshtoon_frag: Yh,
  points_vert: Hh,
  points_frag: Vh,
  shadow_vert: Kh,
  shadow_frag: Jh,
  sprite_vert: Wh,
  sprite_frag: qh
}, ne = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Fe(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: /* @__PURE__ */ new dt() },
    uv2Transform: { value: /* @__PURE__ */ new dt() },
    alphaMap: { value: null },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 }
  },
  emissivemap: {
    emissiveMap: { value: null }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalScale: { value: /* @__PURE__ */ new ve(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  roughnessmap: {
    roughnessMap: { value: null }
  },
  metalnessmap: {
    metalnessMap: { value: null }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Fe(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Fe(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new dt() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Fe(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new ve(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new dt() }
  }
}, Ut = {
  basic: {
    uniforms: /* @__PURE__ */ ht([
      ne.common,
      ne.specularmap,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.fog
    ]),
    vertexShader: we.meshbasic_vert,
    fragmentShader: we.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ ht([
      ne.common,
      ne.specularmap,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new Fe(0) }
      }
    ]),
    vertexShader: we.meshlambert_vert,
    fragmentShader: we.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ ht([
      ne.common,
      ne.specularmap,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new Fe(0) },
        specular: { value: /* @__PURE__ */ new Fe(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: we.meshphong_vert,
    fragmentShader: we.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ ht([
      ne.common,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.roughnessmap,
      ne.metalnessmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new Fe(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: we.meshphysical_vert,
    fragmentShader: we.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ ht([
      ne.common,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.gradientmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new Fe(0) }
      }
    ]),
    vertexShader: we.meshtoon_vert,
    fragmentShader: we.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ ht([
      ne.common,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: we.meshmatcap_vert,
    fragmentShader: we.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ ht([
      ne.points,
      ne.fog
    ]),
    vertexShader: we.points_vert,
    fragmentShader: we.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ ht([
      ne.common,
      ne.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: we.linedashed_vert,
    fragmentShader: we.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ ht([
      ne.common,
      ne.displacementmap
    ]),
    vertexShader: we.depth_vert,
    fragmentShader: we.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ ht([
      ne.common,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: we.meshnormal_vert,
    fragmentShader: we.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ ht([
      ne.sprite,
      ne.fog
    ]),
    vertexShader: we.sprite_vert,
    fragmentShader: we.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new dt() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: we.background_vert,
    fragmentShader: we.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: we.backgroundCube_vert,
    fragmentShader: we.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: we.cube_vert,
    fragmentShader: we.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: we.equirect_vert,
    fragmentShader: we.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ ht([
      ne.common,
      ne.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new R() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: we.distanceRGBA_vert,
    fragmentShader: we.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ ht([
      ne.lights,
      ne.fog,
      {
        color: { value: /* @__PURE__ */ new Fe(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: we.shadow_vert,
    fragmentShader: we.shadow_frag
  }
};
Ut.physical = {
  uniforms: /* @__PURE__ */ ht([
    Ut.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: /* @__PURE__ */ new ve(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Fe(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: /* @__PURE__ */ new ve() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Fe(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: /* @__PURE__ */ new Fe(1, 1, 1) },
      specularColorMap: { value: null }
    }
  ]),
  vertexShader: we.meshphysical_vert,
  fragmentShader: we.meshphysical_frag
};
const Bi = { r: 0, b: 0, g: 0 };
function jh(r, e, t, n, i, s, a) {
  const o = new Fe(0);
  let c = s === !0 ? 0 : 1, l, h, u = null, d = 0, g = null;
  function M(f, E) {
    let S = !1, A = E.isScene === !0 ? E.background : null;
    A && A.isTexture && (A = (E.backgroundBlurriness > 0 ? t : e).get(A));
    const v = r.xr, _ = v.getSession && v.getSession();
    _ && _.environmentBlendMode === "additive" && (A = null), A === null ? p(o, c) : A && A.isColor && (p(A, 1), S = !0), (r.autoClear || S) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil), A && (A.isCubeTexture || A.mapping === Qi) ? (h === void 0 && (h = new it(
      new sn(1, 1, 1),
      new Wt({
        name: "BackgroundCubeMaterial",
        uniforms: Vn(Ut.backgroundCube.uniforms),
        vertexShader: Ut.backgroundCube.vertexShader,
        fragmentShader: Ut.backgroundCube.fragmentShader,
        side: wt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(B, L, x) {
      this.matrixWorld.copyPosition(x.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), h.material.uniforms.envMap.value = A, h.material.uniforms.flipEnvMap.value = A.isCubeTexture && A.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = E.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, h.material.toneMapped = A.encoding !== Ne, (u !== A || d !== A.version || g !== r.toneMapping) && (h.material.needsUpdate = !0, u = A, d = A.version, g = r.toneMapping), h.layers.enableAll(), f.unshift(h, h.geometry, h.material, 0, 0, null)) : A && A.isTexture && (l === void 0 && (l = new it(
      new hi(2, 2),
      new Wt({
        name: "BackgroundMaterial",
        uniforms: Vn(Ut.background.uniforms),
        vertexShader: Ut.background.vertexShader,
        fragmentShader: Ut.background.fragmentShader,
        side: nn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(l)), l.material.uniforms.t2D.value = A, l.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, l.material.toneMapped = A.encoding !== Ne, A.matrixAutoUpdate === !0 && A.updateMatrix(), l.material.uniforms.uvTransform.value.copy(A.matrix), (u !== A || d !== A.version || g !== r.toneMapping) && (l.material.needsUpdate = !0, u = A, d = A.version, g = r.toneMapping), l.layers.enableAll(), f.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function p(f, E) {
    f.getRGB(Bi, To(r)), n.buffers.color.setClear(Bi.r, Bi.g, Bi.b, E, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(f, E = 1) {
      o.set(f), c = E, p(o, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(f) {
      c = f, p(o, c);
    },
    render: M
  };
}
function Zh(r, e, t, n) {
  const i = r.getParameter(34921), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), a = n.isWebGL2 || s !== null, o = {}, c = f(null);
  let l = c, h = !1;
  function u(b, P, W, $, K) {
    let q = !1;
    if (a) {
      const X = p($, W, P);
      l !== X && (l = X, g(l.object)), q = E(b, $, W, K), q && S(b, $, W, K);
    } else {
      const X = P.wireframe === !0;
      (l.geometry !== $.id || l.program !== W.id || l.wireframe !== X) && (l.geometry = $.id, l.program = W.id, l.wireframe = X, q = !0);
    }
    K !== null && t.update(K, 34963), (q || h) && (h = !1, x(b, P, W, $), K !== null && r.bindBuffer(34963, t.get(K).buffer));
  }
  function d() {
    return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
  }
  function g(b) {
    return n.isWebGL2 ? r.bindVertexArray(b) : s.bindVertexArrayOES(b);
  }
  function M(b) {
    return n.isWebGL2 ? r.deleteVertexArray(b) : s.deleteVertexArrayOES(b);
  }
  function p(b, P, W) {
    const $ = W.wireframe === !0;
    let K = o[b.id];
    K === void 0 && (K = {}, o[b.id] = K);
    let q = K[P.id];
    q === void 0 && (q = {}, K[P.id] = q);
    let X = q[$];
    return X === void 0 && (X = f(d()), q[$] = X), X;
  }
  function f(b) {
    const P = [], W = [], $ = [];
    for (let K = 0; K < i; K++)
      P[K] = 0, W[K] = 0, $[K] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: P,
      enabledAttributes: W,
      attributeDivisors: $,
      object: b,
      attributes: {},
      index: null
    };
  }
  function E(b, P, W, $) {
    const K = l.attributes, q = P.attributes;
    let X = 0;
    const fe = W.getAttributes();
    for (const N in fe)
      if (fe[N].location >= 0) {
        const ie = K[N];
        let G = q[N];
        if (G === void 0 && (N === "instanceMatrix" && b.instanceMatrix && (G = b.instanceMatrix), N === "instanceColor" && b.instanceColor && (G = b.instanceColor)), ie === void 0 || ie.attribute !== G || G && ie.data !== G.data)
          return !0;
        X++;
      }
    return l.attributesNum !== X || l.index !== $;
  }
  function S(b, P, W, $) {
    const K = {}, q = P.attributes;
    let X = 0;
    const fe = W.getAttributes();
    for (const N in fe)
      if (fe[N].location >= 0) {
        let ie = q[N];
        ie === void 0 && (N === "instanceMatrix" && b.instanceMatrix && (ie = b.instanceMatrix), N === "instanceColor" && b.instanceColor && (ie = b.instanceColor));
        const G = {};
        G.attribute = ie, ie && ie.data && (G.data = ie.data), K[N] = G, X++;
      }
    l.attributes = K, l.attributesNum = X, l.index = $;
  }
  function A() {
    const b = l.newAttributes;
    for (let P = 0, W = b.length; P < W; P++)
      b[P] = 0;
  }
  function v(b) {
    _(b, 0);
  }
  function _(b, P) {
    const W = l.newAttributes, $ = l.enabledAttributes, K = l.attributeDivisors;
    W[b] = 1, $[b] === 0 && (r.enableVertexAttribArray(b), $[b] = 1), K[b] !== P && ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](b, P), K[b] = P);
  }
  function B() {
    const b = l.newAttributes, P = l.enabledAttributes;
    for (let W = 0, $ = P.length; W < $; W++)
      P[W] !== b[W] && (r.disableVertexAttribArray(W), P[W] = 0);
  }
  function L(b, P, W, $, K, q) {
    n.isWebGL2 === !0 && (W === 5124 || W === 5125) ? r.vertexAttribIPointer(b, P, W, K, q) : r.vertexAttribPointer(b, P, W, $, K, q);
  }
  function x(b, P, W, $) {
    if (n.isWebGL2 === !1 && (b.isInstancedMesh || $.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    A();
    const K = $.attributes, q = W.getAttributes(), X = P.defaultAttributeValues;
    for (const fe in q) {
      const N = q[fe];
      if (N.location >= 0) {
        let j = K[fe];
        if (j === void 0 && (fe === "instanceMatrix" && b.instanceMatrix && (j = b.instanceMatrix), fe === "instanceColor" && b.instanceColor && (j = b.instanceColor)), j !== void 0) {
          const ie = j.normalized, G = j.itemSize, le = t.get(j);
          if (le === void 0)
            continue;
          const ce = le.buffer, ue = le.type, he = le.bytesPerElement;
          if (j.isInterleavedBufferAttribute) {
            const Me = j.data, Ce = Me.stride, _e = j.offset;
            if (Me.isInstancedInterleavedBuffer) {
              for (let Te = 0; Te < N.locationSize; Te++)
                _(N.location + Te, Me.meshPerAttribute);
              b.isInstancedMesh !== !0 && $._maxInstanceCount === void 0 && ($._maxInstanceCount = Me.meshPerAttribute * Me.count);
            } else
              for (let Te = 0; Te < N.locationSize; Te++)
                v(N.location + Te);
            r.bindBuffer(34962, ce);
            for (let Te = 0; Te < N.locationSize; Te++)
              L(
                N.location + Te,
                G / N.locationSize,
                ue,
                ie,
                Ce * he,
                (_e + G / N.locationSize * Te) * he
              );
          } else {
            if (j.isInstancedBufferAttribute) {
              for (let Me = 0; Me < N.locationSize; Me++)
                _(N.location + Me, j.meshPerAttribute);
              b.isInstancedMesh !== !0 && $._maxInstanceCount === void 0 && ($._maxInstanceCount = j.meshPerAttribute * j.count);
            } else
              for (let Me = 0; Me < N.locationSize; Me++)
                v(N.location + Me);
            r.bindBuffer(34962, ce);
            for (let Me = 0; Me < N.locationSize; Me++)
              L(
                N.location + Me,
                G / N.locationSize,
                ue,
                ie,
                G * he,
                G / N.locationSize * Me * he
              );
          }
        } else if (X !== void 0) {
          const ie = X[fe];
          if (ie !== void 0)
            switch (ie.length) {
              case 2:
                r.vertexAttrib2fv(N.location, ie);
                break;
              case 3:
                r.vertexAttrib3fv(N.location, ie);
                break;
              case 4:
                r.vertexAttrib4fv(N.location, ie);
                break;
              default:
                r.vertexAttrib1fv(N.location, ie);
            }
        }
      }
    }
    B();
  }
  function I() {
    J();
    for (const b in o) {
      const P = o[b];
      for (const W in P) {
        const $ = P[W];
        for (const K in $)
          M($[K].object), delete $[K];
        delete P[W];
      }
      delete o[b];
    }
  }
  function T(b) {
    if (o[b.id] === void 0)
      return;
    const P = o[b.id];
    for (const W in P) {
      const $ = P[W];
      for (const K in $)
        M($[K].object), delete $[K];
      delete P[W];
    }
    delete o[b.id];
  }
  function V(b) {
    for (const P in o) {
      const W = o[P];
      if (W[b.id] === void 0)
        continue;
      const $ = W[b.id];
      for (const K in $)
        M($[K].object), delete $[K];
      delete W[b.id];
    }
  }
  function J() {
    O(), h = !0, l !== c && (l = c, g(l.object));
  }
  function O() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: u,
    reset: J,
    resetDefaultState: O,
    dispose: I,
    releaseStatesOfGeometry: T,
    releaseStatesOfProgram: V,
    initAttributes: A,
    enableAttribute: v,
    disableUnusedAttributes: B
  };
}
function Xh(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(l) {
    s = l;
  }
  function o(l, h) {
    r.drawArrays(s, l, h), t.update(h, s, 1);
  }
  function c(l, h, u) {
    if (u === 0)
      return;
    let d, g;
    if (i)
      d = r, g = "drawArraysInstanced";
    else if (d = e.get("ANGLE_instanced_arrays"), g = "drawArraysInstancedANGLE", d === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    d[g](s, l, h, u), t.update(h, s, u);
  }
  this.setMode = a, this.render = o, this.renderInstances = c;
}
function $h(r, e, t) {
  let n;
  function i() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const L = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(L) {
    if (L === "highp") {
      if (r.getShaderPrecisionFormat(35633, 36338).precision > 0 && r.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      L = "mediump";
    }
    return L === "mediump" && r.getShaderPrecisionFormat(35633, 36337).precision > 0 && r.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  const a = typeof WebGL2RenderingContext < "u" && r instanceof WebGL2RenderingContext;
  let o = t.precision !== void 0 ? t.precision : "highp";
  const c = s(o);
  c !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", c, "instead."), o = c);
  const l = a || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, u = r.getParameter(34930), d = r.getParameter(35660), g = r.getParameter(3379), M = r.getParameter(34076), p = r.getParameter(34921), f = r.getParameter(36347), E = r.getParameter(36348), S = r.getParameter(36349), A = d > 0, v = a || e.has("OES_texture_float"), _ = A && v, B = a ? r.getParameter(36183) : 0;
  return {
    isWebGL2: a,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: o,
    logarithmicDepthBuffer: h,
    maxTextures: u,
    maxVertexTextures: d,
    maxTextureSize: g,
    maxCubemapSize: M,
    maxAttributes: p,
    maxVertexUniforms: f,
    maxVaryings: E,
    maxFragmentUniforms: S,
    vertexTextures: A,
    floatFragmentTextures: v,
    floatVertexTextures: _,
    maxSamples: B
  };
}
function eu(r) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const a = new un(), o = new dt(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const g = u.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = d, n = u.length, g;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(u, d) {
    t = h(u, d, 0);
  }, this.setState = function(u, d, g) {
    const M = u.clippingPlanes, p = u.clipIntersection, f = u.clipShadows, E = r.get(u);
    if (!i || M === null || M.length === 0 || s && !f)
      s ? h(null) : l();
    else {
      const S = s ? 0 : n, A = S * 4;
      let v = E.clippingState || null;
      c.value = v, v = h(M, d, A, g);
      for (let _ = 0; _ !== A; ++_)
        v[_] = t[_];
      E.clippingState = v, this.numIntersection = p ? this.numPlanes : 0, this.numPlanes += S;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, d, g, M) {
    const p = u !== null ? u.length : 0;
    let f = null;
    if (p !== 0) {
      if (f = c.value, M !== !0 || f === null) {
        const E = g + p * 4, S = d.matrixWorldInverse;
        o.getNormalMatrix(S), (f === null || f.length < E) && (f = new Float32Array(E));
        for (let A = 0, v = g; A !== p; ++A, v += 4)
          a.copy(u[A]).applyMatrix4(S, o), a.normal.toArray(f, v), f[v + 3] = a.constant;
      }
      c.value = f, c.needsUpdate = !0;
    }
    return e.numPlanes = p, e.numIntersection = 0, f;
  }
}
function tu(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === Ss ? a.mapping = zn : o === vs && (a.mapping = Yn), a;
  }
  function n(a) {
    if (a && a.isTexture && a.isRenderTargetTexture === !1) {
      const o = a.mapping;
      if (o === Ss || o === vs)
        if (e.has(a)) {
          const c = e.get(a).texture;
          return t(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new pl(c.height / 2);
            return l.fromEquirectangularTexture(r, a), e.set(a, l), a.addEventListener("dispose", i), t(l.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const c = e.get(o);
    c !== void 0 && (e.delete(o), c.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class Ls extends Ro {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - e, a = n + e, o = i + t, c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, a = s + l * this.view.width, o -= h * this.view.offsetY, c = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const On = 4, Gr = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], fn = 20, ms = /* @__PURE__ */ new Ls(), Ur = /* @__PURE__ */ new Fe();
let xs = null;
const dn = (1 + Math.sqrt(5)) / 2, Gn = 1 / dn, Or = [
  /* @__PURE__ */ new R(1, 1, 1),
  /* @__PURE__ */ new R(-1, 1, 1),
  /* @__PURE__ */ new R(1, 1, -1),
  /* @__PURE__ */ new R(-1, 1, -1),
  /* @__PURE__ */ new R(0, dn, Gn),
  /* @__PURE__ */ new R(0, dn, -Gn),
  /* @__PURE__ */ new R(Gn, 0, dn),
  /* @__PURE__ */ new R(-Gn, 0, dn),
  /* @__PURE__ */ new R(dn, Gn, 0),
  /* @__PURE__ */ new R(-dn, Gn, 0)
];
class Nr {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, i = 100) {
    xs = this._renderer.getRenderTarget(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = zr(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = kr(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(xs), e.scissorTest = !1, Di(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === zn || e.mapping === Yn ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), xs = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: vt,
      minFilter: vt,
      generateMipmaps: !1,
      type: ri,
      format: Rt,
      encoding: xn,
      depthBuffer: !1
    }, i = Pr(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Pr(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = nu(s)), this._blurMaterial = iu(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new it(this._lodPlanes[0], e);
    this._renderer.compile(t, ms);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new It(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(Ur), h.toneMapping = Kt, h.autoClear = !1;
    const g = new Fs({
      name: "PMREM.Background",
      side: wt,
      depthWrite: !1,
      depthTest: !1
    }), M = new it(new sn(), g);
    let p = !1;
    const f = e.background;
    f ? f.isColor && (g.color.copy(f), e.background = null, p = !0) : (g.color.copy(Ur), p = !0);
    for (let E = 0; E < 6; E++) {
      const S = E % 3;
      S === 0 ? (o.up.set(0, c[E], 0), o.lookAt(l[E], 0, 0)) : S === 1 ? (o.up.set(0, 0, c[E]), o.lookAt(0, l[E], 0)) : (o.up.set(0, c[E], 0), o.lookAt(0, 0, l[E]));
      const A = this._cubeSize;
      Di(i, S * A, E > 2 ? A : 0, A, A), h.setRenderTarget(i), p && h.render(M, o), h.render(e, o);
    }
    M.geometry.dispose(), M.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = f;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === zn || e.mapping === Yn;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = zr()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = kr());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, a = new it(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    Di(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, ms);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), a = Or[(i - 1) % Or.length];
      this._blur(e, i - 1, i, s, a);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, i, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      i,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      i,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, i, s, a, o) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new it(this._lodPlanes[i], l), d = l.uniforms, g = this._sizeLods[n] - 1, M = isFinite(s) ? Math.PI / (2 * g) : 2 * Math.PI / (2 * fn - 1), p = s / M, f = isFinite(s) ? 1 + Math.floor(h * p) : fn;
    f > fn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${fn}`);
    const E = [];
    let S = 0;
    for (let L = 0; L < fn; ++L) {
      const x = L / p, I = Math.exp(-x * x / 2);
      E.push(I), L === 0 ? S += I : L < f && (S += 2 * I);
    }
    for (let L = 0; L < E.length; L++)
      E[L] = E[L] / S;
    d.envMap.value = e.texture, d.samples.value = f, d.weights.value = E, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o);
    const { _lodMax: A } = this;
    d.dTheta.value = M, d.mipInt.value = A - n;
    const v = this._sizeLods[i], _ = 3 * v * (i > A - On ? i - A + On : 0), B = 4 * (this._cubeSize - v);
    Di(t, _, B, 3 * v, 2 * v), c.setRenderTarget(t), c.render(u, ms);
  }
}
function nu(r) {
  const e = [], t = [], n = [];
  let i = r;
  const s = r - On + 1 + Gr.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let c = 1 / o;
    a > r - On ? c = Gr[a - r + On - 1] : a === 0 && (c = 0), n.push(c);
    const l = 1 / (o - 2), h = -l, u = 1 + l, d = [h, h, u, h, u, u, h, h, u, u, h, u], g = 6, M = 6, p = 3, f = 2, E = 1, S = new Float32Array(p * M * g), A = new Float32Array(f * M * g), v = new Float32Array(E * M * g);
    for (let B = 0; B < g; B++) {
      const L = B % 3 * 2 / 3 - 1, x = B > 2 ? 0 : -1, I = [
        L,
        x,
        0,
        L + 2 / 3,
        x,
        0,
        L + 2 / 3,
        x + 1,
        0,
        L,
        x,
        0,
        L + 2 / 3,
        x + 1,
        0,
        L,
        x + 1,
        0
      ];
      S.set(I, p * M * B), A.set(d, f * M * B);
      const T = [B, B, B, B, B, B];
      v.set(T, E * M * B);
    }
    const _ = new yt();
    _.setAttribute("position", new Ot(S, p)), _.setAttribute("uv", new Ot(A, f)), _.setAttribute("faceIndex", new Ot(v, E)), e.push(_), i > On && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Pr(r, e, t) {
  const n = new Jt(r, e, t);
  return n.texture.mapping = Qi, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Di(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function iu(r, e, t) {
  const n = new Float32Array(fn), i = new R(0, 1, 0);
  return new Wt({
    name: "SphericalGaussianBlur",
    defines: {
      n: fn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${r}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: Gs(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: tn,
    depthTest: !1,
    depthWrite: !1
  });
}
function kr() {
  return new Wt({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Gs(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: tn,
    depthTest: !1,
    depthWrite: !1
  });
}
function zr() {
  return new Wt({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Gs(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: tn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Gs() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function su(r) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping, l = c === Ss || c === vs, h = c === zn || c === Yn;
      if (l || h)
        if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
          o.needsPMREMUpdate = !1;
          let u = e.get(o);
          return t === null && (t = new Nr(r)), u = l ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u), e.set(o, u), u.texture;
        } else {
          if (e.has(o))
            return e.get(o).texture;
          {
            const u = o.image;
            if (l && u && u.height > 0 || h && u && i(u)) {
              t === null && (t = new Nr(r));
              const d = l ? t.fromEquirectangular(o) : t.fromCubemap(o);
              return e.set(o, d), o.addEventListener("dispose", s), d.texture;
            } else
              return null;
          }
        }
    }
    return o;
  }
  function i(o) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++)
      o[h] !== void 0 && c++;
    return c === l;
  }
  function s(o) {
    const c = o.target;
    c.removeEventListener("dispose", s);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function ru(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function ou(r, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function a(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const M in d.attributes)
      e.remove(d.attributes[M]);
    d.removeEventListener("dispose", a), delete i[d.id];
    const g = s.get(d);
    g && (e.remove(g), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function o(u, d) {
    return i[d.id] === !0 || (d.addEventListener("dispose", a), i[d.id] = !0, t.memory.geometries++), d;
  }
  function c(u) {
    const d = u.attributes;
    for (const M in d)
      e.update(d[M], 34962);
    const g = u.morphAttributes;
    for (const M in g) {
      const p = g[M];
      for (let f = 0, E = p.length; f < E; f++)
        e.update(p[f], 34962);
    }
  }
  function l(u) {
    const d = [], g = u.index, M = u.attributes.position;
    let p = 0;
    if (g !== null) {
      const S = g.array;
      p = g.version;
      for (let A = 0, v = S.length; A < v; A += 3) {
        const _ = S[A + 0], B = S[A + 1], L = S[A + 2];
        d.push(_, B, B, L, L, _);
      }
    } else {
      const S = M.array;
      p = M.version;
      for (let A = 0, v = S.length / 3 - 1; A < v; A += 3) {
        const _ = A + 0, B = A + 1, L = A + 2;
        d.push(_, B, B, L, L, _);
      }
    }
    const f = new (wo(d) ? bo : Do)(d, 1);
    f.version = p;
    const E = s.get(u);
    E && e.remove(E), s.set(u, f);
  }
  function h(u) {
    const d = s.get(u);
    if (d) {
      const g = u.index;
      g !== null && d.version < g.version && l(u);
    } else
      l(u);
    return s.get(u);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: h
  };
}
function au(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(d) {
    s = d;
  }
  let o, c;
  function l(d) {
    o = d.type, c = d.bytesPerElement;
  }
  function h(d, g) {
    r.drawElements(s, g, o, d * c), t.update(g, s, 1);
  }
  function u(d, g, M) {
    if (M === 0)
      return;
    let p, f;
    if (i)
      p = r, f = "drawElementsInstanced";
    else if (p = e.get("ANGLE_instanced_arrays"), f = "drawElementsInstancedANGLE", p === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    p[f](s, g, o, d * c, M), t.update(g, s, M);
  }
  this.setMode = a, this.setIndex = l, this.render = h, this.renderInstances = u;
}
function lu(r) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, a, o) {
    switch (t.calls++, a) {
      case 4:
        t.triangles += o * (s / 3);
        break;
      case 1:
        t.lines += o * (s / 2);
        break;
      case 3:
        t.lines += o * (s - 1);
        break;
      case 2:
        t.lines += o * s;
        break;
      case 0:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function cu(r, e) {
  return r[0] - e[0];
}
function hu(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}
function uu(r, e, t) {
  const n = {}, i = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), a = new et(), o = [];
  for (let l = 0; l < 8; l++)
    o[l] = [l, 0];
  function c(l, h, u) {
    const d = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, M = g !== void 0 ? g.length : 0;
      let p = s.get(h);
      if (p === void 0 || p.count !== M) {
        let b = function() {
          J.dispose(), s.delete(h), h.removeEventListener("dispose", b);
        };
        p !== void 0 && p.texture.dispose();
        const S = h.morphAttributes.position !== void 0, A = h.morphAttributes.normal !== void 0, v = h.morphAttributes.color !== void 0, _ = h.morphAttributes.position || [], B = h.morphAttributes.normal || [], L = h.morphAttributes.color || [];
        let x = 0;
        S === !0 && (x = 1), A === !0 && (x = 2), v === !0 && (x = 3);
        let I = h.attributes.position.count * x, T = 1;
        I > e.maxTextureSize && (T = Math.ceil(I / e.maxTextureSize), I = e.maxTextureSize);
        const V = new Float32Array(I * T * 4 * M), J = new vo(V, I, T, M);
        J.type = gn, J.needsUpdate = !0;
        const O = x * 4;
        for (let P = 0; P < M; P++) {
          const W = _[P], $ = B[P], K = L[P], q = I * T * 4 * P;
          for (let X = 0; X < W.count; X++) {
            const fe = X * O;
            S === !0 && (a.fromBufferAttribute(W, X), V[q + fe + 0] = a.x, V[q + fe + 1] = a.y, V[q + fe + 2] = a.z, V[q + fe + 3] = 0), A === !0 && (a.fromBufferAttribute($, X), V[q + fe + 4] = a.x, V[q + fe + 5] = a.y, V[q + fe + 6] = a.z, V[q + fe + 7] = 0), v === !0 && (a.fromBufferAttribute(K, X), V[q + fe + 8] = a.x, V[q + fe + 9] = a.y, V[q + fe + 10] = a.z, V[q + fe + 11] = K.itemSize === 4 ? a.w : 1);
          }
        }
        p = {
          count: M,
          texture: J,
          size: new ve(I, T)
        }, s.set(h, p), h.addEventListener("dispose", b);
      }
      let f = 0;
      for (let S = 0; S < d.length; S++)
        f += d[S];
      const E = h.morphTargetsRelative ? 1 : 1 - f;
      u.getUniforms().setValue(r, "morphTargetBaseInfluence", E), u.getUniforms().setValue(r, "morphTargetInfluences", d), u.getUniforms().setValue(r, "morphTargetsTexture", p.texture, t), u.getUniforms().setValue(r, "morphTargetsTextureSize", p.size);
    } else {
      const g = d === void 0 ? 0 : d.length;
      let M = n[h.id];
      if (M === void 0 || M.length !== g) {
        M = [];
        for (let A = 0; A < g; A++)
          M[A] = [A, 0];
        n[h.id] = M;
      }
      for (let A = 0; A < g; A++) {
        const v = M[A];
        v[0] = A, v[1] = d[A];
      }
      M.sort(hu);
      for (let A = 0; A < 8; A++)
        A < g && M[A][1] ? (o[A][0] = M[A][0], o[A][1] = M[A][1]) : (o[A][0] = Number.MAX_SAFE_INTEGER, o[A][1] = 0);
      o.sort(cu);
      const p = h.morphAttributes.position, f = h.morphAttributes.normal;
      let E = 0;
      for (let A = 0; A < 8; A++) {
        const v = o[A], _ = v[0], B = v[1];
        _ !== Number.MAX_SAFE_INTEGER && B ? (p && h.getAttribute("morphTarget" + A) !== p[_] && h.setAttribute("morphTarget" + A, p[_]), f && h.getAttribute("morphNormal" + A) !== f[_] && h.setAttribute("morphNormal" + A, f[_]), i[A] = B, E += B) : (p && h.hasAttribute("morphTarget" + A) === !0 && h.deleteAttribute("morphTarget" + A), f && h.hasAttribute("morphNormal" + A) === !0 && h.deleteAttribute("morphNormal" + A), i[A] = 0);
      }
      const S = h.morphTargetsRelative ? 1 : 1 - E;
      u.getUniforms().setValue(r, "morphTargetBaseInfluence", S), u.getUniforms().setValue(r, "morphTargetInfluences", i);
    }
  }
  return {
    update: c
  };
}
function du(r, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = n.render.frame, h = c.geometry, u = e.get(c, h);
    return i.get(u) !== l && (e.update(u), i.set(u, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o), t.update(c.instanceMatrix, 34962), c.instanceColor !== null && t.update(c.instanceColor, 34962)), u;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(c) {
    const l = c.target;
    l.removeEventListener("dispose", o), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: s,
    dispose: a
  };
}
const Go = /* @__PURE__ */ new gt(), Uo = /* @__PURE__ */ new vo(), Oo = /* @__PURE__ */ new Xa(), No = /* @__PURE__ */ new Qo(), Yr = [], Hr = [], Vr = new Float32Array(16), Kr = new Float32Array(9), Jr = new Float32Array(4);
function Kn(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0)
    return r;
  const i = e * t;
  let s = Yr[i];
  if (s === void 0 && (s = new Float32Array(i), Yr[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, r[a].toArray(s, o);
  }
  return s;
}
function Ve(r, e) {
  if (r.length !== e.length)
    return !1;
  for (let t = 0, n = r.length; t < n; t++)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function Ke(r, e) {
  for (let t = 0, n = e.length; t < n; t++)
    r[t] = e[t];
}
function Gi(r, e) {
  let t = Hr[e];
  t === void 0 && (t = new Int32Array(e), Hr[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = r.allocateTextureUnit();
  return t;
}
function fu(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
}
function pu(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Ve(t, e))
      return;
    r.uniform2fv(this.addr, e), Ke(t, e);
  }
}
function gu(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (Ve(t, e))
      return;
    r.uniform3fv(this.addr, e), Ke(t, e);
  }
}
function Au(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Ve(t, e))
      return;
    r.uniform4fv(this.addr, e), Ke(t, e);
  }
}
function mu(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Ve(t, e))
      return;
    r.uniformMatrix2fv(this.addr, !1, e), Ke(t, e);
  } else {
    if (Ve(t, n))
      return;
    Jr.set(n), r.uniformMatrix2fv(this.addr, !1, Jr), Ke(t, n);
  }
}
function xu(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Ve(t, e))
      return;
    r.uniformMatrix3fv(this.addr, !1, e), Ke(t, e);
  } else {
    if (Ve(t, n))
      return;
    Kr.set(n), r.uniformMatrix3fv(this.addr, !1, Kr), Ke(t, n);
  }
}
function Mu(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Ve(t, e))
      return;
    r.uniformMatrix4fv(this.addr, !1, e), Ke(t, e);
  } else {
    if (Ve(t, n))
      return;
    Vr.set(n), r.uniformMatrix4fv(this.addr, !1, Vr), Ke(t, n);
  }
}
function Eu(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
}
function Cu(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Ve(t, e))
      return;
    r.uniform2iv(this.addr, e), Ke(t, e);
  }
}
function wu(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Ve(t, e))
      return;
    r.uniform3iv(this.addr, e), Ke(t, e);
  }
}
function _u(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Ve(t, e))
      return;
    r.uniform4iv(this.addr, e), Ke(t, e);
  }
}
function Su(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
}
function vu(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Ve(t, e))
      return;
    r.uniform2uiv(this.addr, e), Ke(t, e);
  }
}
function Iu(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Ve(t, e))
      return;
    r.uniform3uiv(this.addr, e), Ke(t, e);
  }
}
function yu(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Ve(t, e))
      return;
    r.uniform4uiv(this.addr, e), Ke(t, e);
  }
}
function Bu(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || Go, i);
}
function Du(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Oo, i);
}
function bu(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || No, i);
}
function Tu(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Uo, i);
}
function Ru(r) {
  switch (r) {
    case 5126:
      return fu;
    case 35664:
      return pu;
    case 35665:
      return gu;
    case 35666:
      return Au;
    case 35674:
      return mu;
    case 35675:
      return xu;
    case 35676:
      return Mu;
    case 5124:
    case 35670:
      return Eu;
    case 35667:
    case 35671:
      return Cu;
    case 35668:
    case 35672:
      return wu;
    case 35669:
    case 35673:
      return _u;
    case 5125:
      return Su;
    case 36294:
      return vu;
    case 36295:
      return Iu;
    case 36296:
      return yu;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Bu;
    case 35679:
    case 36299:
    case 36307:
      return Du;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return bu;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Tu;
  }
}
function Qu(r, e) {
  r.uniform1fv(this.addr, e);
}
function Fu(r, e) {
  const t = Kn(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function Lu(r, e) {
  const t = Kn(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function Gu(r, e) {
  const t = Kn(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function Uu(r, e) {
  const t = Kn(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function Ou(r, e) {
  const t = Kn(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function Nu(r, e) {
  const t = Kn(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function Pu(r, e) {
  r.uniform1iv(this.addr, e);
}
function ku(r, e) {
  r.uniform2iv(this.addr, e);
}
function zu(r, e) {
  r.uniform3iv(this.addr, e);
}
function Yu(r, e) {
  r.uniform4iv(this.addr, e);
}
function Hu(r, e) {
  r.uniform1uiv(this.addr, e);
}
function Vu(r, e) {
  r.uniform2uiv(this.addr, e);
}
function Ku(r, e) {
  r.uniform3uiv(this.addr, e);
}
function Ju(r, e) {
  r.uniform4uiv(this.addr, e);
}
function Wu(r, e, t) {
  const n = this.cache, i = e.length, s = Gi(t, i);
  Ve(n, s) || (r.uniform1iv(this.addr, s), Ke(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture2D(e[a] || Go, s[a]);
}
function qu(r, e, t) {
  const n = this.cache, i = e.length, s = Gi(t, i);
  Ve(n, s) || (r.uniform1iv(this.addr, s), Ke(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture3D(e[a] || Oo, s[a]);
}
function ju(r, e, t) {
  const n = this.cache, i = e.length, s = Gi(t, i);
  Ve(n, s) || (r.uniform1iv(this.addr, s), Ke(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTextureCube(e[a] || No, s[a]);
}
function Zu(r, e, t) {
  const n = this.cache, i = e.length, s = Gi(t, i);
  Ve(n, s) || (r.uniform1iv(this.addr, s), Ke(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture2DArray(e[a] || Uo, s[a]);
}
function Xu(r) {
  switch (r) {
    case 5126:
      return Qu;
    case 35664:
      return Fu;
    case 35665:
      return Lu;
    case 35666:
      return Gu;
    case 35674:
      return Uu;
    case 35675:
      return Ou;
    case 35676:
      return Nu;
    case 5124:
    case 35670:
      return Pu;
    case 35667:
    case 35671:
      return ku;
    case 35668:
    case 35672:
      return zu;
    case 35669:
    case 35673:
      return Yu;
    case 5125:
      return Hu;
    case 36294:
      return Vu;
    case 36295:
      return Ku;
    case 36296:
      return Ju;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Wu;
    case 35679:
    case 36299:
    case 36307:
      return qu;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return ju;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Zu;
  }
}
class $u {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = Ru(t.type);
  }
}
class ed {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = Xu(t.type);
  }
}
class td {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, a = i.length; s !== a; ++s) {
      const o = i[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const Ms = /(\w+)(\])?(\[|\.)?/g;
function Wr(r, e) {
  r.seq.push(e), r.map[e.id] = e;
}
function nd(r, e, t) {
  const n = r.name, i = n.length;
  for (Ms.lastIndex = 0; ; ) {
    const s = Ms.exec(n), a = Ms.lastIndex;
    let o = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === i) {
      Wr(t, l === void 0 ? new $u(o, r, e) : new ed(o, r, e));
      break;
    } else {
      let u = t.map[o];
      u === void 0 && (u = new td(o), Wr(t, u)), t = u;
    }
  }
}
class Ti {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), a = e.getUniformLocation(t, s.name);
      nd(s, a, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function qr(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
let id = 0;
function sd(r, e) {
  const t = r.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = i; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function rd(r) {
  switch (r) {
    case xn:
      return ["Linear", "( value )"];
    case Ne:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported encoding:", r), ["Linear", "( value )"];
  }
}
function jr(r, e, t) {
  const n = r.getShaderParameter(e, 35713), i = r.getShaderInfoLog(e).trim();
  if (n && i === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const a = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + sd(r.getShaderSource(e), a);
  } else
    return i;
}
function od(r, e) {
  const t = rd(e);
  return "vec4 " + r + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function ad(r, e) {
  let t;
  switch (e) {
    case xa:
      t = "Linear";
      break;
    case Ma:
      t = "Reinhard";
      break;
    case Ea:
      t = "OptimizedCineon";
      break;
    case Ca:
      t = "ACESFilmic";
      break;
    case wa:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function ld(r) {
  return [
    r.extensionDerivatives || r.envMapCubeUVHeight || r.bumpMap || r.tangentSpaceNormalMap || r.clearcoatNormalMap || r.flatShading || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(ni).join(`
`);
}
function cd(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function hd(r, e) {
  const t = {}, n = r.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(e, i), a = s.name;
    let o = 1;
    s.type === 35674 && (o = 2), s.type === 35675 && (o = 3), s.type === 35676 && (o = 4), t[a] = {
      type: s.type,
      location: r.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function ni(r) {
  return r !== "";
}
function Zr(r, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Xr(r, e) {
  return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const ud = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ds(r) {
  return r.replace(ud, dd);
}
function dd(r, e) {
  const t = we[e];
  if (t === void 0)
    throw new Error("Can not resolve #include <" + e + ">");
  return Ds(t);
}
const fd = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function $r(r) {
  return r.replace(fd, pd);
}
function pd(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function eo(r) {
  let e = "precision " + r.precision + ` float;
precision ` + r.precision + " int;";
  return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function gd(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === Ao ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === jo ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === ti && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Ad(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case zn:
      case Yn:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Qi:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function md(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case Yn:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function xd(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case Rs:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Aa:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case ma:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Md(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Ed(r, e, t, n) {
  const i = r.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const c = gd(t), l = Ad(t), h = md(t), u = xd(t), d = Md(t), g = t.isWebGL2 ? "" : ld(t), M = cd(s), p = i.createProgram();
  let f, E, S = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (f = [
    M
  ].filter(ni).join(`
`), f.length > 0 && (f += `
`), E = [
    g,
    M
  ].filter(ni).join(`
`), E.length > 0 && (E += `
`)) : (f = [
    eo(t),
    "#define SHADER_NAME " + t.shaderName,
    M,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(ni).join(`
`), E = [
    g,
    eo(t),
    "#define SHADER_NAME " + t.shaderName,
    M,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + u : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== Kt ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Kt ? we.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== Kt ? ad("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    we.encodings_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    od("linearToOutputTexel", t.outputEncoding),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(ni).join(`
`)), a = Ds(a), a = Zr(a, t), a = Xr(a, t), o = Ds(o), o = Zr(o, t), o = Xr(o, t), a = $r(a), o = $r(o), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (S = `#version 300 es
`, f = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + f, E = [
    "#define varying in",
    t.glslVersion === wr ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === wr ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + E);
  const A = S + f + a, v = S + E + o, _ = qr(i, 35633, A), B = qr(i, 35632, v);
  if (i.attachShader(p, _), i.attachShader(p, B), t.index0AttributeName !== void 0 ? i.bindAttribLocation(p, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(p, 0, "position"), i.linkProgram(p), r.debug.checkShaderErrors) {
    const I = i.getProgramInfoLog(p).trim(), T = i.getShaderInfoLog(_).trim(), V = i.getShaderInfoLog(B).trim();
    let J = !0, O = !0;
    if (i.getProgramParameter(p, 35714) === !1) {
      J = !1;
      const b = jr(i, _, "vertex"), P = jr(i, B, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(p, 35715) + `

Program Info Log: ` + I + `
` + b + `
` + P
      );
    } else
      I !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", I) : (T === "" || V === "") && (O = !1);
    O && (this.diagnostics = {
      runnable: J,
      programLog: I,
      vertexShader: {
        log: T,
        prefix: f
      },
      fragmentShader: {
        log: V,
        prefix: E
      }
    });
  }
  i.deleteShader(_), i.deleteShader(B);
  let L;
  this.getUniforms = function() {
    return L === void 0 && (L = new Ti(i, p)), L;
  };
  let x;
  return this.getAttributes = function() {
    return x === void 0 && (x = hd(i, p)), x;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(p), this.program = void 0;
  }, this.name = t.shaderName, this.id = id++, this.cacheKey = e, this.usedTimes = 1, this.program = p, this.vertexShader = _, this.fragmentShader = B, this;
}
let Cd = 0;
class wd {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(i) === !1 && (a.add(i), i.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new _d(e), t.set(e, n)), n;
  }
}
class _d {
  constructor(e) {
    this.id = Cd++, this.code = e, this.usedTimes = 0;
  }
}
function Sd(r, e, t, n, i, s, a) {
  const o = new yo(), c = new wd(), l = [], h = i.isWebGL2, u = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let g = i.precision;
  const M = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function p(x, I, T, V, J) {
    const O = V.fog, b = J.geometry, P = x.isMeshStandardMaterial ? V.environment : null, W = (x.isMeshStandardMaterial ? t : e).get(x.envMap || P), $ = W && W.mapping === Qi ? W.image.height : null, K = M[x.type];
    x.precision !== null && (g = i.getMaxPrecision(x.precision), g !== x.precision && console.warn("THREE.WebGLProgram.getParameters:", x.precision, "not supported, using", g, "instead."));
    const q = b.morphAttributes.position || b.morphAttributes.normal || b.morphAttributes.color, X = q !== void 0 ? q.length : 0;
    let fe = 0;
    b.morphAttributes.position !== void 0 && (fe = 1), b.morphAttributes.normal !== void 0 && (fe = 2), b.morphAttributes.color !== void 0 && (fe = 3);
    let N, j, ie, G;
    if (K) {
      const Ce = Ut[K];
      N = Ce.vertexShader, j = Ce.fragmentShader;
    } else
      N = x.vertexShader, j = x.fragmentShader, c.update(x), ie = c.getVertexShaderID(x), G = c.getFragmentShaderID(x);
    const le = r.getRenderTarget(), ce = x.alphaTest > 0, ue = x.clearcoat > 0, he = x.iridescence > 0;
    return {
      isWebGL2: h,
      shaderID: K,
      shaderName: x.type,
      vertexShader: N,
      fragmentShader: j,
      defines: x.defines,
      customVertexShaderID: ie,
      customFragmentShaderID: G,
      isRawShaderMaterial: x.isRawShaderMaterial === !0,
      glslVersion: x.glslVersion,
      precision: g,
      instancing: J.isInstancedMesh === !0,
      instancingColor: J.isInstancedMesh === !0 && J.instanceColor !== null,
      supportsVertexTextures: d,
      outputEncoding: le === null ? r.outputEncoding : le.isXRRenderTarget === !0 ? le.texture.encoding : xn,
      map: !!x.map,
      matcap: !!x.matcap,
      envMap: !!W,
      envMapMode: W && W.mapping,
      envMapCubeUVHeight: $,
      lightMap: !!x.lightMap,
      aoMap: !!x.aoMap,
      emissiveMap: !!x.emissiveMap,
      bumpMap: !!x.bumpMap,
      normalMap: !!x.normalMap,
      objectSpaceNormalMap: x.normalMapType === ka,
      tangentSpaceNormalMap: x.normalMapType === Qs,
      decodeVideoTexture: !!x.map && x.map.isVideoTexture === !0 && x.map.encoding === Ne,
      clearcoat: ue,
      clearcoatMap: ue && !!x.clearcoatMap,
      clearcoatRoughnessMap: ue && !!x.clearcoatRoughnessMap,
      clearcoatNormalMap: ue && !!x.clearcoatNormalMap,
      iridescence: he,
      iridescenceMap: he && !!x.iridescenceMap,
      iridescenceThicknessMap: he && !!x.iridescenceThicknessMap,
      displacementMap: !!x.displacementMap,
      roughnessMap: !!x.roughnessMap,
      metalnessMap: !!x.metalnessMap,
      specularMap: !!x.specularMap,
      specularIntensityMap: !!x.specularIntensityMap,
      specularColorMap: !!x.specularColorMap,
      opaque: x.transparent === !1 && x.blending === Nn,
      alphaMap: !!x.alphaMap,
      alphaTest: ce,
      gradientMap: !!x.gradientMap,
      sheen: x.sheen > 0,
      sheenColorMap: !!x.sheenColorMap,
      sheenRoughnessMap: !!x.sheenRoughnessMap,
      transmission: x.transmission > 0,
      transmissionMap: !!x.transmissionMap,
      thicknessMap: !!x.thicknessMap,
      combine: x.combine,
      vertexTangents: !!x.normalMap && !!b.attributes.tangent,
      vertexColors: x.vertexColors,
      vertexAlphas: x.vertexColors === !0 && !!b.attributes.color && b.attributes.color.itemSize === 4,
      vertexUvs: !!x.map || !!x.bumpMap || !!x.normalMap || !!x.specularMap || !!x.alphaMap || !!x.emissiveMap || !!x.roughnessMap || !!x.metalnessMap || !!x.clearcoatMap || !!x.clearcoatRoughnessMap || !!x.clearcoatNormalMap || !!x.iridescenceMap || !!x.iridescenceThicknessMap || !!x.displacementMap || !!x.transmissionMap || !!x.thicknessMap || !!x.specularIntensityMap || !!x.specularColorMap || !!x.sheenColorMap || !!x.sheenRoughnessMap,
      uvsVertexOnly: !(x.map || x.bumpMap || x.normalMap || x.specularMap || x.alphaMap || x.emissiveMap || x.roughnessMap || x.metalnessMap || x.clearcoatNormalMap || x.iridescenceMap || x.iridescenceThicknessMap || x.transmission > 0 || x.transmissionMap || x.thicknessMap || x.specularIntensityMap || x.specularColorMap || x.sheen > 0 || x.sheenColorMap || x.sheenRoughnessMap) && !!x.displacementMap,
      fog: !!O,
      useFog: x.fog === !0,
      fogExp2: O && O.isFogExp2,
      flatShading: !!x.flatShading,
      sizeAttenuation: x.sizeAttenuation,
      logarithmicDepthBuffer: u,
      skinning: J.isSkinnedMesh === !0,
      morphTargets: b.morphAttributes.position !== void 0,
      morphNormals: b.morphAttributes.normal !== void 0,
      morphColors: b.morphAttributes.color !== void 0,
      morphTargetsCount: X,
      morphTextureStride: fe,
      numDirLights: I.directional.length,
      numPointLights: I.point.length,
      numSpotLights: I.spot.length,
      numSpotLightMaps: I.spotLightMap.length,
      numRectAreaLights: I.rectArea.length,
      numHemiLights: I.hemi.length,
      numDirLightShadows: I.directionalShadowMap.length,
      numPointLightShadows: I.pointShadowMap.length,
      numSpotLightShadows: I.spotShadowMap.length,
      numSpotLightShadowsWithMaps: I.numSpotLightShadowsWithMaps,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: x.dithering,
      shadowMapEnabled: r.shadowMap.enabled && T.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: x.toneMapped ? r.toneMapping : Kt,
      useLegacyLights: r.useLegacyLights,
      premultipliedAlpha: x.premultipliedAlpha,
      doubleSided: x.side === $t,
      flipSided: x.side === wt,
      useDepthPacking: !!x.depthPacking,
      depthPacking: x.depthPacking || 0,
      index0AttributeName: x.index0AttributeName,
      extensionDerivatives: x.extensions && x.extensions.derivatives,
      extensionFragDepth: x.extensions && x.extensions.fragDepth,
      extensionDrawBuffers: x.extensions && x.extensions.drawBuffers,
      extensionShaderTextureLOD: x.extensions && x.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: x.customProgramCacheKey()
    };
  }
  function f(x) {
    const I = [];
    if (x.shaderID ? I.push(x.shaderID) : (I.push(x.customVertexShaderID), I.push(x.customFragmentShaderID)), x.defines !== void 0)
      for (const T in x.defines)
        I.push(T), I.push(x.defines[T]);
    return x.isRawShaderMaterial === !1 && (E(I, x), S(I, x), I.push(r.outputEncoding)), I.push(x.customProgramCacheKey), I.join();
  }
  function E(x, I) {
    x.push(I.precision), x.push(I.outputEncoding), x.push(I.envMapMode), x.push(I.envMapCubeUVHeight), x.push(I.combine), x.push(I.vertexUvs), x.push(I.fogExp2), x.push(I.sizeAttenuation), x.push(I.morphTargetsCount), x.push(I.morphAttributeCount), x.push(I.numDirLights), x.push(I.numPointLights), x.push(I.numSpotLights), x.push(I.numSpotLightMaps), x.push(I.numHemiLights), x.push(I.numRectAreaLights), x.push(I.numDirLightShadows), x.push(I.numPointLightShadows), x.push(I.numSpotLightShadows), x.push(I.numSpotLightShadowsWithMaps), x.push(I.shadowMapType), x.push(I.toneMapping), x.push(I.numClippingPlanes), x.push(I.numClipIntersection), x.push(I.depthPacking);
  }
  function S(x, I) {
    o.disableAll(), I.isWebGL2 && o.enable(0), I.supportsVertexTextures && o.enable(1), I.instancing && o.enable(2), I.instancingColor && o.enable(3), I.map && o.enable(4), I.matcap && o.enable(5), I.envMap && o.enable(6), I.lightMap && o.enable(7), I.aoMap && o.enable(8), I.emissiveMap && o.enable(9), I.bumpMap && o.enable(10), I.normalMap && o.enable(11), I.objectSpaceNormalMap && o.enable(12), I.tangentSpaceNormalMap && o.enable(13), I.clearcoat && o.enable(14), I.clearcoatMap && o.enable(15), I.clearcoatRoughnessMap && o.enable(16), I.clearcoatNormalMap && o.enable(17), I.iridescence && o.enable(18), I.iridescenceMap && o.enable(19), I.iridescenceThicknessMap && o.enable(20), I.displacementMap && o.enable(21), I.specularMap && o.enable(22), I.roughnessMap && o.enable(23), I.metalnessMap && o.enable(24), I.gradientMap && o.enable(25), I.alphaMap && o.enable(26), I.alphaTest && o.enable(27), I.vertexColors && o.enable(28), I.vertexAlphas && o.enable(29), I.vertexUvs && o.enable(30), I.vertexTangents && o.enable(31), I.uvsVertexOnly && o.enable(32), x.push(o.mask), o.disableAll(), I.fog && o.enable(0), I.useFog && o.enable(1), I.flatShading && o.enable(2), I.logarithmicDepthBuffer && o.enable(3), I.skinning && o.enable(4), I.morphTargets && o.enable(5), I.morphNormals && o.enable(6), I.morphColors && o.enable(7), I.premultipliedAlpha && o.enable(8), I.shadowMapEnabled && o.enable(9), I.useLegacyLights && o.enable(10), I.doubleSided && o.enable(11), I.flipSided && o.enable(12), I.useDepthPacking && o.enable(13), I.dithering && o.enable(14), I.specularIntensityMap && o.enable(15), I.specularColorMap && o.enable(16), I.transmission && o.enable(17), I.transmissionMap && o.enable(18), I.thicknessMap && o.enable(19), I.sheen && o.enable(20), I.sheenColorMap && o.enable(21), I.sheenRoughnessMap && o.enable(22), I.decodeVideoTexture && o.enable(23), I.opaque && o.enable(24), x.push(o.mask);
  }
  function A(x) {
    const I = M[x.type];
    let T;
    if (I) {
      const V = Ut[I];
      T = hl.clone(V.uniforms);
    } else
      T = x.uniforms;
    return T;
  }
  function v(x, I) {
    let T;
    for (let V = 0, J = l.length; V < J; V++) {
      const O = l[V];
      if (O.cacheKey === I) {
        T = O, ++T.usedTimes;
        break;
      }
    }
    return T === void 0 && (T = new Ed(r, I, x, s), l.push(T)), T;
  }
  function _(x) {
    if (--x.usedTimes === 0) {
      const I = l.indexOf(x);
      l[I] = l[l.length - 1], l.pop(), x.destroy();
    }
  }
  function B(x) {
    c.remove(x);
  }
  function L() {
    c.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: f,
    getUniforms: A,
    acquireProgram: v,
    releaseProgram: _,
    releaseShaderCache: B,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: l,
    dispose: L
  };
}
function vd() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let a = r.get(s);
    return a === void 0 && (a = {}, r.set(s, a)), a;
  }
  function t(s) {
    r.delete(s);
  }
  function n(s, a, o) {
    r.get(s)[a] = o;
  }
  function i() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function Id(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function to(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function no() {
  const r = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function a(u, d, g, M, p, f) {
    let E = r[e];
    return E === void 0 ? (E = {
      id: u.id,
      object: u,
      geometry: d,
      material: g,
      groupOrder: M,
      renderOrder: u.renderOrder,
      z: p,
      group: f
    }, r[e] = E) : (E.id = u.id, E.object = u, E.geometry = d, E.material = g, E.groupOrder = M, E.renderOrder = u.renderOrder, E.z = p, E.group = f), e++, E;
  }
  function o(u, d, g, M, p, f) {
    const E = a(u, d, g, M, p, f);
    g.transmission > 0 ? n.push(E) : g.transparent === !0 ? i.push(E) : t.push(E);
  }
  function c(u, d, g, M, p, f) {
    const E = a(u, d, g, M, p, f);
    g.transmission > 0 ? n.unshift(E) : g.transparent === !0 ? i.unshift(E) : t.unshift(E);
  }
  function l(u, d) {
    t.length > 1 && t.sort(u || Id), n.length > 1 && n.sort(d || to), i.length > 1 && i.sort(d || to);
  }
  function h() {
    for (let u = e, d = r.length; u < d; u++) {
      const g = r[u];
      if (g.id === null)
        break;
      g.id = null, g.object = null, g.geometry = null, g.material = null, g.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: o,
    unshift: c,
    finish: h,
    sort: l
  };
}
function yd() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let a;
    return s === void 0 ? (a = new no(), r.set(n, [a])) : i >= s.length ? (a = new no(), s.push(a)) : a = s[i], a;
  }
  function t() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Bd() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new R(),
            color: new Fe()
          };
          break;
        case "SpotLight":
          t = {
            position: new R(),
            direction: new R(),
            color: new Fe(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new R(),
            color: new Fe(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new R(),
            skyColor: new Fe(),
            groundColor: new Fe()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Fe(),
            position: new R(),
            halfWidth: new R(),
            halfHeight: new R()
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
function Dd() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ve()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ve()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ve(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
let bd = 0;
function Td(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function Rd(r, e) {
  const t = new Bd(), n = Dd(), i = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0
  };
  for (let h = 0; h < 9; h++)
    i.probe.push(new R());
  const s = new R(), a = new $e(), o = new $e();
  function c(h, u) {
    let d = 0, g = 0, M = 0;
    for (let V = 0; V < 9; V++)
      i.probe[V].set(0, 0, 0);
    let p = 0, f = 0, E = 0, S = 0, A = 0, v = 0, _ = 0, B = 0, L = 0, x = 0;
    h.sort(Td);
    const I = u === !0 ? Math.PI : 1;
    for (let V = 0, J = h.length; V < J; V++) {
      const O = h[V], b = O.color, P = O.intensity, W = O.distance, $ = O.shadow && O.shadow.map ? O.shadow.map.texture : null;
      if (O.isAmbientLight)
        d += b.r * P * I, g += b.g * P * I, M += b.b * P * I;
      else if (O.isLightProbe)
        for (let K = 0; K < 9; K++)
          i.probe[K].addScaledVector(O.sh.coefficients[K], P);
      else if (O.isDirectionalLight) {
        const K = t.get(O);
        if (K.color.copy(O.color).multiplyScalar(O.intensity * I), O.castShadow) {
          const q = O.shadow, X = n.get(O);
          X.shadowBias = q.bias, X.shadowNormalBias = q.normalBias, X.shadowRadius = q.radius, X.shadowMapSize = q.mapSize, i.directionalShadow[p] = X, i.directionalShadowMap[p] = $, i.directionalShadowMatrix[p] = O.shadow.matrix, v++;
        }
        i.directional[p] = K, p++;
      } else if (O.isSpotLight) {
        const K = t.get(O);
        K.position.setFromMatrixPosition(O.matrixWorld), K.color.copy(b).multiplyScalar(P * I), K.distance = W, K.coneCos = Math.cos(O.angle), K.penumbraCos = Math.cos(O.angle * (1 - O.penumbra)), K.decay = O.decay, i.spot[E] = K;
        const q = O.shadow;
        if (O.map && (i.spotLightMap[L] = O.map, L++, q.updateMatrices(O), O.castShadow && x++), i.spotLightMatrix[E] = q.matrix, O.castShadow) {
          const X = n.get(O);
          X.shadowBias = q.bias, X.shadowNormalBias = q.normalBias, X.shadowRadius = q.radius, X.shadowMapSize = q.mapSize, i.spotShadow[E] = X, i.spotShadowMap[E] = $, B++;
        }
        E++;
      } else if (O.isRectAreaLight) {
        const K = t.get(O);
        K.color.copy(b).multiplyScalar(P), K.halfWidth.set(O.width * 0.5, 0, 0), K.halfHeight.set(0, O.height * 0.5, 0), i.rectArea[S] = K, S++;
      } else if (O.isPointLight) {
        const K = t.get(O);
        if (K.color.copy(O.color).multiplyScalar(O.intensity * I), K.distance = O.distance, K.decay = O.decay, O.castShadow) {
          const q = O.shadow, X = n.get(O);
          X.shadowBias = q.bias, X.shadowNormalBias = q.normalBias, X.shadowRadius = q.radius, X.shadowMapSize = q.mapSize, X.shadowCameraNear = q.camera.near, X.shadowCameraFar = q.camera.far, i.pointShadow[f] = X, i.pointShadowMap[f] = $, i.pointShadowMatrix[f] = O.shadow.matrix, _++;
        }
        i.point[f] = K, f++;
      } else if (O.isHemisphereLight) {
        const K = t.get(O);
        K.skyColor.copy(O.color).multiplyScalar(P * I), K.groundColor.copy(O.groundColor).multiplyScalar(P * I), i.hemi[A] = K, A++;
      }
    }
    S > 0 && (e.isWebGL2 || r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ne.LTC_FLOAT_1, i.rectAreaLTC2 = ne.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = ne.LTC_HALF_1, i.rectAreaLTC2 = ne.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = g, i.ambient[2] = M;
    const T = i.hash;
    (T.directionalLength !== p || T.pointLength !== f || T.spotLength !== E || T.rectAreaLength !== S || T.hemiLength !== A || T.numDirectionalShadows !== v || T.numPointShadows !== _ || T.numSpotShadows !== B || T.numSpotMaps !== L) && (i.directional.length = p, i.spot.length = E, i.rectArea.length = S, i.point.length = f, i.hemi.length = A, i.directionalShadow.length = v, i.directionalShadowMap.length = v, i.pointShadow.length = _, i.pointShadowMap.length = _, i.spotShadow.length = B, i.spotShadowMap.length = B, i.directionalShadowMatrix.length = v, i.pointShadowMatrix.length = _, i.spotLightMatrix.length = B + L - x, i.spotLightMap.length = L, i.numSpotLightShadowsWithMaps = x, T.directionalLength = p, T.pointLength = f, T.spotLength = E, T.rectAreaLength = S, T.hemiLength = A, T.numDirectionalShadows = v, T.numPointShadows = _, T.numSpotShadows = B, T.numSpotMaps = L, i.version = bd++);
  }
  function l(h, u) {
    let d = 0, g = 0, M = 0, p = 0, f = 0;
    const E = u.matrixWorldInverse;
    for (let S = 0, A = h.length; S < A; S++) {
      const v = h[S];
      if (v.isDirectionalLight) {
        const _ = i.directional[d];
        _.direction.setFromMatrixPosition(v.matrixWorld), s.setFromMatrixPosition(v.target.matrixWorld), _.direction.sub(s), _.direction.transformDirection(E), d++;
      } else if (v.isSpotLight) {
        const _ = i.spot[M];
        _.position.setFromMatrixPosition(v.matrixWorld), _.position.applyMatrix4(E), _.direction.setFromMatrixPosition(v.matrixWorld), s.setFromMatrixPosition(v.target.matrixWorld), _.direction.sub(s), _.direction.transformDirection(E), M++;
      } else if (v.isRectAreaLight) {
        const _ = i.rectArea[p];
        _.position.setFromMatrixPosition(v.matrixWorld), _.position.applyMatrix4(E), o.identity(), a.copy(v.matrixWorld), a.premultiply(E), o.extractRotation(a), _.halfWidth.set(v.width * 0.5, 0, 0), _.halfHeight.set(0, v.height * 0.5, 0), _.halfWidth.applyMatrix4(o), _.halfHeight.applyMatrix4(o), p++;
      } else if (v.isPointLight) {
        const _ = i.point[g];
        _.position.setFromMatrixPosition(v.matrixWorld), _.position.applyMatrix4(E), g++;
      } else if (v.isHemisphereLight) {
        const _ = i.hemi[f];
        _.direction.setFromMatrixPosition(v.matrixWorld), _.direction.transformDirection(E), f++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: i
  };
}
function io(r, e) {
  const t = new Rd(r, e), n = [], i = [];
  function s() {
    n.length = 0, i.length = 0;
  }
  function a(u) {
    n.push(u);
  }
  function o(u) {
    i.push(u);
  }
  function c(u) {
    t.setup(n, u);
  }
  function l(u) {
    t.setupView(n, u);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: c,
    setupLightsView: l,
    pushLight: a,
    pushShadow: o
  };
}
function Qd(r, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, a = 0) {
    const o = t.get(s);
    let c;
    return o === void 0 ? (c = new io(r, e), t.set(s, [c])) : a >= o.length ? (c = new io(r, e), o.push(c)) : c = o[a], c;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class Fd extends Cn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Na, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Ld extends Cn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new R(), this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Gd = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Ud = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Od(r, e, t) {
  let n = new Fo();
  const i = new ve(), s = new ve(), a = new et(), o = new Fd({ depthPacking: Pa }), c = new Ld(), l = {}, h = t.maxTextureSize, u = { [nn]: wt, [wt]: nn, [$t]: $t }, d = new Wt({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new ve() },
      radius: { value: 4 }
    },
    vertexShader: Gd,
    fragmentShader: Ud
  }), g = d.clone();
  g.defines.HORIZONTAL_PASS = 1;
  const M = new yt();
  M.setAttribute(
    "position",
    new Ot(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const p = new it(M, d), f = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Ao, this.render = function(v, _, B) {
    if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || v.length === 0)
      return;
    const L = r.getRenderTarget(), x = r.getActiveCubeFace(), I = r.getActiveMipmapLevel(), T = r.state;
    T.setBlending(tn), T.buffers.color.setClear(1, 1, 1, 1), T.buffers.depth.setTest(!0), T.setScissorTest(!1);
    for (let V = 0, J = v.length; V < J; V++) {
      const O = v[V], b = O.shadow;
      if (b === void 0) {
        console.warn("THREE.WebGLShadowMap:", O, "has no shadow.");
        continue;
      }
      if (b.autoUpdate === !1 && b.needsUpdate === !1)
        continue;
      i.copy(b.mapSize);
      const P = b.getFrameExtents();
      if (i.multiply(P), s.copy(b.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / P.x), i.x = s.x * P.x, b.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / P.y), i.y = s.y * P.y, b.mapSize.y = s.y)), b.map === null) {
        const $ = this.type !== ti ? { minFilter: ut, magFilter: ut } : {};
        b.map = new Jt(i.x, i.y, $), b.map.texture.name = O.name + ".shadowMap", b.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(b.map), r.clear();
      const W = b.getViewportCount();
      for (let $ = 0; $ < W; $++) {
        const K = b.getViewport($);
        a.set(
          s.x * K.x,
          s.y * K.y,
          s.x * K.z,
          s.y * K.w
        ), T.viewport(a), b.updateMatrices(O, $), n = b.getFrustum(), A(_, B, b.camera, O, this.type);
      }
      b.isPointLightShadow !== !0 && this.type === ti && E(b, B), b.needsUpdate = !1;
    }
    f.needsUpdate = !1, r.setRenderTarget(L, x, I);
  };
  function E(v, _) {
    const B = e.update(p);
    d.defines.VSM_SAMPLES !== v.blurSamples && (d.defines.VSM_SAMPLES = v.blurSamples, g.defines.VSM_SAMPLES = v.blurSamples, d.needsUpdate = !0, g.needsUpdate = !0), v.mapPass === null && (v.mapPass = new Jt(i.x, i.y)), d.uniforms.shadow_pass.value = v.map.texture, d.uniforms.resolution.value = v.mapSize, d.uniforms.radius.value = v.radius, r.setRenderTarget(v.mapPass), r.clear(), r.renderBufferDirect(_, null, B, d, p, null), g.uniforms.shadow_pass.value = v.mapPass.texture, g.uniforms.resolution.value = v.mapSize, g.uniforms.radius.value = v.radius, r.setRenderTarget(v.map), r.clear(), r.renderBufferDirect(_, null, B, g, p, null);
  }
  function S(v, _, B, L, x, I) {
    let T = null;
    const V = B.isPointLight === !0 ? v.customDistanceMaterial : v.customDepthMaterial;
    if (V !== void 0)
      T = V;
    else if (T = B.isPointLight === !0 ? c : o, r.localClippingEnabled && _.clipShadows === !0 && Array.isArray(_.clippingPlanes) && _.clippingPlanes.length !== 0 || _.displacementMap && _.displacementScale !== 0 || _.alphaMap && _.alphaTest > 0 || _.map && _.alphaTest > 0) {
      const J = T.uuid, O = _.uuid;
      let b = l[J];
      b === void 0 && (b = {}, l[J] = b);
      let P = b[O];
      P === void 0 && (P = T.clone(), b[O] = P), T = P;
    }
    return T.visible = _.visible, T.wireframe = _.wireframe, I === ti ? T.side = _.shadowSide !== null ? _.shadowSide : _.side : T.side = _.shadowSide !== null ? _.shadowSide : u[_.side], T.alphaMap = _.alphaMap, T.alphaTest = _.alphaTest, T.map = _.map, T.clipShadows = _.clipShadows, T.clippingPlanes = _.clippingPlanes, T.clipIntersection = _.clipIntersection, T.displacementMap = _.displacementMap, T.displacementScale = _.displacementScale, T.displacementBias = _.displacementBias, T.wireframeLinewidth = _.wireframeLinewidth, T.linewidth = _.linewidth, B.isPointLight === !0 && T.isMeshDistanceMaterial === !0 && (T.referencePosition.setFromMatrixPosition(B.matrixWorld), T.nearDistance = L, T.farDistance = x), T;
  }
  function A(v, _, B, L, x) {
    if (v.visible === !1)
      return;
    if (v.layers.test(_.layers) && (v.isMesh || v.isLine || v.isPoints) && (v.castShadow || v.receiveShadow && x === ti) && (!v.frustumCulled || n.intersectsObject(v))) {
      v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, v.matrixWorld);
      const V = e.update(v), J = v.material;
      if (Array.isArray(J)) {
        const O = V.groups;
        for (let b = 0, P = O.length; b < P; b++) {
          const W = O[b], $ = J[W.materialIndex];
          if ($ && $.visible) {
            const K = S(v, $, L, B.near, B.far, x);
            r.renderBufferDirect(B, null, V, K, v, W);
          }
        }
      } else if (J.visible) {
        const O = S(v, J, L, B.near, B.far, x);
        r.renderBufferDirect(B, null, V, O, v, null);
      }
    }
    const T = v.children;
    for (let V = 0, J = T.length; V < J; V++)
      A(T[V], _, B, L, x);
  }
}
function Nd(r, e, t) {
  const n = t.isWebGL2;
  function i() {
    let D = !1;
    const Y = new et();
    let Z = null;
    const ae = new et(0, 0, 0, 0);
    return {
      setMask: function(de) {
        Z !== de && !D && (r.colorMask(de, de, de, de), Z = de);
      },
      setLocked: function(de) {
        D = de;
      },
      setClear: function(de, Ue, je, at, Qt) {
        Qt === !0 && (de *= at, Ue *= at, je *= at), Y.set(de, Ue, je, at), ae.equals(Y) === !1 && (r.clearColor(de, Ue, je, at), ae.copy(Y));
      },
      reset: function() {
        D = !1, Z = null, ae.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let D = !1, Y = null, Z = null, ae = null;
    return {
      setTest: function(de) {
        de ? ce(2929) : ue(2929);
      },
      setMask: function(de) {
        Y !== de && !D && (r.depthMask(de), Y = de);
      },
      setFunc: function(de) {
        if (Z !== de) {
          switch (de) {
            case ca:
              r.depthFunc(512);
              break;
            case ha:
              r.depthFunc(519);
              break;
            case ua:
              r.depthFunc(513);
              break;
            case _s:
              r.depthFunc(515);
              break;
            case da:
              r.depthFunc(514);
              break;
            case fa:
              r.depthFunc(518);
              break;
            case pa:
              r.depthFunc(516);
              break;
            case ga:
              r.depthFunc(517);
              break;
            default:
              r.depthFunc(515);
          }
          Z = de;
        }
      },
      setLocked: function(de) {
        D = de;
      },
      setClear: function(de) {
        ae !== de && (r.clearDepth(de), ae = de);
      },
      reset: function() {
        D = !1, Y = null, Z = null, ae = null;
      }
    };
  }
  function a() {
    let D = !1, Y = null, Z = null, ae = null, de = null, Ue = null, je = null, at = null, Qt = null;
    return {
      setTest: function(ke) {
        D || (ke ? ce(2960) : ue(2960));
      },
      setMask: function(ke) {
        Y !== ke && !D && (r.stencilMask(ke), Y = ke);
      },
      setFunc: function(ke, _t, Ft) {
        (Z !== ke || ae !== _t || de !== Ft) && (r.stencilFunc(ke, _t, Ft), Z = ke, ae = _t, de = Ft);
      },
      setOp: function(ke, _t, Ft) {
        (Ue !== ke || je !== _t || at !== Ft) && (r.stencilOp(ke, _t, Ft), Ue = ke, je = _t, at = Ft);
      },
      setLocked: function(ke) {
        D = ke;
      },
      setClear: function(ke) {
        Qt !== ke && (r.clearStencil(ke), Qt = ke);
      },
      reset: function() {
        D = !1, Y = null, Z = null, ae = null, de = null, Ue = null, je = null, at = null, Qt = null;
      }
    };
  }
  const o = new i(), c = new s(), l = new a(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
  let d = {}, g = {}, M = /* @__PURE__ */ new WeakMap(), p = [], f = null, E = !1, S = null, A = null, v = null, _ = null, B = null, L = null, x = null, I = !1, T = null, V = null, J = null, O = null, b = null;
  const P = r.getParameter(35661);
  let W = !1, $ = 0;
  const K = r.getParameter(7938);
  K.indexOf("WebGL") !== -1 ? ($ = parseFloat(/^WebGL (\d)/.exec(K)[1]), W = $ >= 1) : K.indexOf("OpenGL ES") !== -1 && ($ = parseFloat(/^OpenGL ES (\d)/.exec(K)[1]), W = $ >= 2);
  let q = null, X = {};
  const fe = r.getParameter(3088), N = r.getParameter(2978), j = new et().fromArray(fe), ie = new et().fromArray(N);
  function G(D, Y, Z) {
    const ae = new Uint8Array(4), de = r.createTexture();
    r.bindTexture(D, de), r.texParameteri(D, 10241, 9728), r.texParameteri(D, 10240, 9728);
    for (let Ue = 0; Ue < Z; Ue++)
      r.texImage2D(Y + Ue, 0, 6408, 1, 1, 0, 6408, 5121, ae);
    return de;
  }
  const le = {};
  le[3553] = G(3553, 3553, 1), le[34067] = G(34067, 34069, 6), o.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), ce(2929), c.setFunc(_s), We(!1), qe(Vs), ce(2884), Je(tn);
  function ce(D) {
    d[D] !== !0 && (r.enable(D), d[D] = !0);
  }
  function ue(D) {
    d[D] !== !1 && (r.disable(D), d[D] = !1);
  }
  function he(D, Y) {
    return g[D] !== Y ? (r.bindFramebuffer(D, Y), g[D] = Y, n && (D === 36009 && (g[36160] = Y), D === 36160 && (g[36009] = Y)), !0) : !1;
  }
  function Me(D, Y) {
    let Z = p, ae = !1;
    if (D)
      if (Z = M.get(Y), Z === void 0 && (Z = [], M.set(Y, Z)), D.isWebGLMultipleRenderTargets) {
        const de = D.texture;
        if (Z.length !== de.length || Z[0] !== 36064) {
          for (let Ue = 0, je = de.length; Ue < je; Ue++)
            Z[Ue] = 36064 + Ue;
          Z.length = de.length, ae = !0;
        }
      } else
        Z[0] !== 36064 && (Z[0] = 36064, ae = !0);
    else
      Z[0] !== 1029 && (Z[0] = 1029, ae = !0);
    ae && (t.isWebGL2 ? r.drawBuffers(Z) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z));
  }
  function Ce(D) {
    return f !== D ? (r.useProgram(D), f = D, !0) : !1;
  }
  const _e = {
    [Un]: 32774,
    [Xo]: 32778,
    [$o]: 32779
  };
  if (n)
    _e[qs] = 32775, _e[js] = 32776;
  else {
    const D = e.get("EXT_blend_minmax");
    D !== null && (_e[qs] = D.MIN_EXT, _e[js] = D.MAX_EXT);
  }
  const Te = {
    [ea]: 0,
    [ta]: 1,
    [na]: 768,
    [mo]: 770,
    [la]: 776,
    [oa]: 774,
    [sa]: 772,
    [ia]: 769,
    [xo]: 771,
    [aa]: 775,
    [ra]: 773
  };
  function Je(D, Y, Z, ae, de, Ue, je, at) {
    if (D === tn) {
      E === !0 && (ue(3042), E = !1);
      return;
    }
    if (E === !1 && (ce(3042), E = !0), D !== Zo) {
      if (D !== S || at !== I) {
        if ((A !== Un || B !== Un) && (r.blendEquation(32774), A = Un, B = Un), at)
          switch (D) {
            case Nn:
              r.blendFuncSeparate(1, 771, 1, 771);
              break;
            case Ks:
              r.blendFunc(1, 1);
              break;
            case Js:
              r.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Ws:
              r.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", D);
              break;
          }
        else
          switch (D) {
            case Nn:
              r.blendFuncSeparate(770, 771, 1, 771);
              break;
            case Ks:
              r.blendFunc(770, 1);
              break;
            case Js:
              r.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Ws:
              r.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", D);
              break;
          }
        v = null, _ = null, L = null, x = null, S = D, I = at;
      }
      return;
    }
    de = de || Y, Ue = Ue || Z, je = je || ae, (Y !== A || de !== B) && (r.blendEquationSeparate(_e[Y], _e[de]), A = Y, B = de), (Z !== v || ae !== _ || Ue !== L || je !== x) && (r.blendFuncSeparate(Te[Z], Te[ae], Te[Ue], Te[je]), v = Z, _ = ae, L = Ue, x = je), S = D, I = !1;
  }
  function rt(D, Y) {
    D.side === $t ? ue(2884) : ce(2884);
    let Z = D.side === wt;
    Y && (Z = !Z), We(Z), D.blending === Nn && D.transparent === !1 ? Je(tn) : Je(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.premultipliedAlpha), c.setFunc(D.depthFunc), c.setTest(D.depthTest), c.setMask(D.depthWrite), o.setMask(D.colorWrite);
    const ae = D.stencilWrite;
    l.setTest(ae), ae && (l.setMask(D.stencilWriteMask), l.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), l.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), Ge(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === !0 ? ce(32926) : ue(32926);
  }
  function We(D) {
    T !== D && (D ? r.frontFace(2304) : r.frontFace(2305), T = D);
  }
  function qe(D) {
    D !== Wo ? (ce(2884), D !== V && (D === Vs ? r.cullFace(1029) : D === qo ? r.cullFace(1028) : r.cullFace(1032))) : ue(2884), V = D;
  }
  function Pe(D) {
    D !== J && (W && r.lineWidth(D), J = D);
  }
  function Ge(D, Y, Z) {
    D ? (ce(32823), (O !== Y || b !== Z) && (r.polygonOffset(Y, Z), O = Y, b = Z)) : ue(32823);
  }
  function At(D) {
    D ? ce(3089) : ue(3089);
  }
  function ot(D) {
    D === void 0 && (D = 33984 + P - 1), q !== D && (r.activeTexture(D), q = D);
  }
  function w(D, Y, Z) {
    Z === void 0 && (q === null ? Z = 33984 + P - 1 : Z = q);
    let ae = X[Z];
    ae === void 0 && (ae = { type: void 0, texture: void 0 }, X[Z] = ae), (ae.type !== D || ae.texture !== Y) && (q !== Z && (r.activeTexture(Z), q = Z), r.bindTexture(D, Y || le[D]), ae.type = D, ae.texture = Y);
  }
  function m() {
    const D = X[q];
    D !== void 0 && D.type !== void 0 && (r.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function z() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ee() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function te() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function re() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function me() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function y() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Q() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function oe() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function se() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function pe() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Ae(D) {
    j.equals(D) === !1 && (r.scissor(D.x, D.y, D.z, D.w), j.copy(D));
  }
  function ge(D) {
    ie.equals(D) === !1 && (r.viewport(D.x, D.y, D.z, D.w), ie.copy(D));
  }
  function ye(D, Y) {
    let Z = u.get(Y);
    Z === void 0 && (Z = /* @__PURE__ */ new WeakMap(), u.set(Y, Z));
    let ae = Z.get(D);
    ae === void 0 && (ae = r.getUniformBlockIndex(Y, D.name), Z.set(D, ae));
  }
  function Re(D, Y) {
    const ae = u.get(Y).get(D);
    h.get(Y) !== ae && (r.uniformBlockBinding(Y, ae, D.__bindingPointIndex), h.set(Y, ae));
  }
  function Le() {
    r.disable(3042), r.disable(2884), r.disable(2929), r.disable(32823), r.disable(3089), r.disable(2960), r.disable(32926), r.blendEquation(32774), r.blendFunc(1, 0), r.blendFuncSeparate(1, 0, 1, 0), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(513), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(519, 0, 4294967295), r.stencilOp(7680, 7680, 7680), r.clearStencil(0), r.cullFace(1029), r.frontFace(2305), r.polygonOffset(0, 0), r.activeTexture(33984), r.bindFramebuffer(36160, null), n === !0 && (r.bindFramebuffer(36009, null), r.bindFramebuffer(36008, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), d = {}, q = null, X = {}, g = {}, M = /* @__PURE__ */ new WeakMap(), p = [], f = null, E = !1, S = null, A = null, v = null, _ = null, B = null, L = null, x = null, I = !1, T = null, V = null, J = null, O = null, b = null, j.set(0, 0, r.canvas.width, r.canvas.height), ie.set(0, 0, r.canvas.width, r.canvas.height), o.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: o,
      depth: c,
      stencil: l
    },
    enable: ce,
    disable: ue,
    bindFramebuffer: he,
    drawBuffers: Me,
    useProgram: Ce,
    setBlending: Je,
    setMaterial: rt,
    setFlipSided: We,
    setCullFace: qe,
    setLineWidth: Pe,
    setPolygonOffset: Ge,
    setScissorTest: At,
    activeTexture: ot,
    bindTexture: w,
    unbindTexture: m,
    compressedTexImage2D: z,
    compressedTexImage3D: ee,
    texImage2D: se,
    texImage3D: pe,
    updateUBOMapping: ye,
    uniformBlockBinding: Re,
    texStorage2D: Q,
    texStorage3D: oe,
    texSubImage2D: te,
    texSubImage3D: re,
    compressedTexSubImage2D: me,
    compressedTexSubImage3D: y,
    scissor: Ae,
    viewport: ge,
    reset: Le
  };
}
function Pd(r, e, t, n, i, s, a) {
  const o = i.isWebGL2, c = i.maxTextures, l = i.maxCubemapSize, h = i.maxTextureSize, u = i.maxSamples, d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, g = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), M = /* @__PURE__ */ new WeakMap();
  let p;
  const f = /* @__PURE__ */ new WeakMap();
  let E = !1;
  try {
    E = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function S(w, m) {
    return E ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(w, m)
    ) : ai("canvas");
  }
  function A(w, m, z, ee) {
    let te = 1;
    if ((w.width > ee || w.height > ee) && (te = ee / Math.max(w.width, w.height)), te < 1 || m === !0)
      if (typeof HTMLImageElement < "u" && w instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && w instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && w instanceof ImageBitmap) {
        const re = m ? Ha : Math.floor, me = re(te * w.width), y = re(te * w.height);
        p === void 0 && (p = S(me, y));
        const Q = z ? S(me, y) : p;
        return Q.width = me, Q.height = y, Q.getContext("2d").drawImage(w, 0, 0, me, y), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + w.width + "x" + w.height + ") to (" + me + "x" + y + ")."), Q;
      } else
        return "data" in w && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + w.width + "x" + w.height + ")."), w;
    return w;
  }
  function v(w) {
    return Sr(w.width) && Sr(w.height);
  }
  function _(w) {
    return o ? !1 : w.wrapS !== Tt || w.wrapT !== Tt || w.minFilter !== ut && w.minFilter !== vt;
  }
  function B(w, m) {
    return w.generateMipmaps && m && w.minFilter !== ut && w.minFilter !== vt;
  }
  function L(w) {
    r.generateMipmap(w);
  }
  function x(w, m, z, ee, te = !1) {
    if (o === !1)
      return m;
    if (w !== null) {
      if (r[w] !== void 0)
        return r[w];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + w + "'");
    }
    let re = m;
    return m === 6403 && (z === 5126 && (re = 33326), z === 5131 && (re = 33325), z === 5121 && (re = 33321)), m === 33319 && (z === 5126 && (re = 33328), z === 5131 && (re = 33327), z === 5121 && (re = 33323)), m === 6408 && (z === 5126 && (re = 34836), z === 5131 && (re = 34842), z === 5121 && (re = ee === Ne && te === !1 ? 35907 : 32856), z === 32819 && (re = 32854), z === 32820 && (re = 32855)), (re === 33325 || re === 33326 || re === 33327 || re === 33328 || re === 34842 || re === 34836) && e.get("EXT_color_buffer_float"), re;
  }
  function I(w, m, z) {
    return B(w, z) === !0 || w.isFramebufferTexture && w.minFilter !== ut && w.minFilter !== vt ? Math.log2(Math.max(m.width, m.height)) + 1 : w.mipmaps !== void 0 && w.mipmaps.length > 0 ? w.mipmaps.length : w.isCompressedTexture && Array.isArray(w.image) ? m.mipmaps.length : 1;
  }
  function T(w) {
    return w === ut || w === Zs || w === Yi ? 9728 : 9729;
  }
  function V(w) {
    const m = w.target;
    m.removeEventListener("dispose", V), O(m), m.isVideoTexture && M.delete(m);
  }
  function J(w) {
    const m = w.target;
    m.removeEventListener("dispose", J), P(m);
  }
  function O(w) {
    const m = n.get(w);
    if (m.__webglInit === void 0)
      return;
    const z = w.source, ee = f.get(z);
    if (ee) {
      const te = ee[m.__cacheKey];
      te.usedTimes--, te.usedTimes === 0 && b(w), Object.keys(ee).length === 0 && f.delete(z);
    }
    n.remove(w);
  }
  function b(w) {
    const m = n.get(w);
    r.deleteTexture(m.__webglTexture);
    const z = w.source, ee = f.get(z);
    delete ee[m.__cacheKey], a.memory.textures--;
  }
  function P(w) {
    const m = w.texture, z = n.get(w), ee = n.get(m);
    if (ee.__webglTexture !== void 0 && (r.deleteTexture(ee.__webglTexture), a.memory.textures--), w.depthTexture && w.depthTexture.dispose(), w.isWebGLCubeRenderTarget)
      for (let te = 0; te < 6; te++)
        r.deleteFramebuffer(z.__webglFramebuffer[te]), z.__webglDepthbuffer && r.deleteRenderbuffer(z.__webglDepthbuffer[te]);
    else {
      if (r.deleteFramebuffer(z.__webglFramebuffer), z.__webglDepthbuffer && r.deleteRenderbuffer(z.__webglDepthbuffer), z.__webglMultisampledFramebuffer && r.deleteFramebuffer(z.__webglMultisampledFramebuffer), z.__webglColorRenderbuffer)
        for (let te = 0; te < z.__webglColorRenderbuffer.length; te++)
          z.__webglColorRenderbuffer[te] && r.deleteRenderbuffer(z.__webglColorRenderbuffer[te]);
      z.__webglDepthRenderbuffer && r.deleteRenderbuffer(z.__webglDepthRenderbuffer);
    }
    if (w.isWebGLMultipleRenderTargets)
      for (let te = 0, re = m.length; te < re; te++) {
        const me = n.get(m[te]);
        me.__webglTexture && (r.deleteTexture(me.__webglTexture), a.memory.textures--), n.remove(m[te]);
      }
    n.remove(m), n.remove(w);
  }
  let W = 0;
  function $() {
    W = 0;
  }
  function K() {
    const w = W;
    return w >= c && console.warn("THREE.WebGLTextures: Trying to use " + w + " texture units while this GPU supports only " + c), W += 1, w;
  }
  function q(w) {
    const m = [];
    return m.push(w.wrapS), m.push(w.wrapT), m.push(w.wrapR || 0), m.push(w.magFilter), m.push(w.minFilter), m.push(w.anisotropy), m.push(w.internalFormat), m.push(w.format), m.push(w.type), m.push(w.generateMipmaps), m.push(w.premultiplyAlpha), m.push(w.flipY), m.push(w.unpackAlignment), m.push(w.encoding), m.join();
  }
  function X(w, m) {
    const z = n.get(w);
    if (w.isVideoTexture && At(w), w.isRenderTargetTexture === !1 && w.version > 0 && z.__version !== w.version) {
      const ee = w.image;
      if (ee === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (ee.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ue(z, w, m);
        return;
      }
    }
    t.bindTexture(3553, z.__webglTexture, 33984 + m);
  }
  function fe(w, m) {
    const z = n.get(w);
    if (w.version > 0 && z.__version !== w.version) {
      ue(z, w, m);
      return;
    }
    t.bindTexture(35866, z.__webglTexture, 33984 + m);
  }
  function N(w, m) {
    const z = n.get(w);
    if (w.version > 0 && z.__version !== w.version) {
      ue(z, w, m);
      return;
    }
    t.bindTexture(32879, z.__webglTexture, 33984 + m);
  }
  function j(w, m) {
    const z = n.get(w);
    if (w.version > 0 && z.__version !== w.version) {
      he(z, w, m);
      return;
    }
    t.bindTexture(34067, z.__webglTexture, 33984 + m);
  }
  const ie = {
    [Is]: 10497,
    [Tt]: 33071,
    [ys]: 33648
  }, G = {
    [ut]: 9728,
    [Zs]: 9984,
    [Yi]: 9986,
    [vt]: 9729,
    [_a]: 9985,
    [si]: 9987
  };
  function le(w, m, z) {
    if (z ? (r.texParameteri(w, 10242, ie[m.wrapS]), r.texParameteri(w, 10243, ie[m.wrapT]), (w === 32879 || w === 35866) && r.texParameteri(w, 32882, ie[m.wrapR]), r.texParameteri(w, 10240, G[m.magFilter]), r.texParameteri(w, 10241, G[m.minFilter])) : (r.texParameteri(w, 10242, 33071), r.texParameteri(w, 10243, 33071), (w === 32879 || w === 35866) && r.texParameteri(w, 32882, 33071), (m.wrapS !== Tt || m.wrapT !== Tt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(w, 10240, T(m.magFilter)), r.texParameteri(w, 10241, T(m.minFilter)), m.minFilter !== ut && m.minFilter !== vt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
      const ee = e.get("EXT_texture_filter_anisotropic");
      if (m.magFilter === ut || m.minFilter !== Yi && m.minFilter !== si || m.type === gn && e.has("OES_texture_float_linear") === !1 || o === !1 && m.type === ri && e.has("OES_texture_half_float_linear") === !1)
        return;
      (m.anisotropy > 1 || n.get(m).__currentAnisotropy) && (r.texParameterf(w, ee.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(m.anisotropy, i.getMaxAnisotropy())), n.get(m).__currentAnisotropy = m.anisotropy);
    }
  }
  function ce(w, m) {
    let z = !1;
    w.__webglInit === void 0 && (w.__webglInit = !0, m.addEventListener("dispose", V));
    const ee = m.source;
    let te = f.get(ee);
    te === void 0 && (te = {}, f.set(ee, te));
    const re = q(m);
    if (re !== w.__cacheKey) {
      te[re] === void 0 && (te[re] = {
        texture: r.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, z = !0), te[re].usedTimes++;
      const me = te[w.__cacheKey];
      me !== void 0 && (te[w.__cacheKey].usedTimes--, me.usedTimes === 0 && b(m)), w.__cacheKey = re, w.__webglTexture = te[re].texture;
    }
    return z;
  }
  function ue(w, m, z) {
    let ee = 3553;
    (m.isDataArrayTexture || m.isCompressedArrayTexture) && (ee = 35866), m.isData3DTexture && (ee = 32879);
    const te = ce(w, m), re = m.source;
    t.bindTexture(ee, w.__webglTexture, 33984 + z);
    const me = n.get(re);
    if (re.version !== me.__version || te === !0) {
      t.activeTexture(33984 + z), r.pixelStorei(37440, m.flipY), r.pixelStorei(37441, m.premultiplyAlpha), r.pixelStorei(3317, m.unpackAlignment), r.pixelStorei(37443, 0);
      const y = _(m) && v(m.image) === !1;
      let Q = A(m.image, y, !1, h);
      Q = ot(m, Q);
      const oe = v(Q) || o, se = s.convert(m.format, m.encoding);
      let pe = s.convert(m.type), Ae = x(m.internalFormat, se, pe, m.encoding, m.isVideoTexture);
      le(ee, m, oe);
      let ge;
      const ye = m.mipmaps, Re = o && m.isVideoTexture !== !0, Le = me.__version === void 0 || te === !0, D = I(m, Q, oe);
      if (m.isDepthTexture)
        Ae = 6402, o ? m.type === gn ? Ae = 36012 : m.type === pn ? Ae = 33190 : m.type === Pn ? Ae = 35056 : Ae = 33189 : m.type === gn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), m.format === An && Ae === 6402 && m.type !== Eo && m.type !== pn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), m.type = pn, pe = s.convert(m.type)), m.format === Hn && Ae === 6402 && (Ae = 34041, m.type !== Pn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), m.type = Pn, pe = s.convert(m.type))), Le && (Re ? t.texStorage2D(3553, 1, Ae, Q.width, Q.height) : t.texImage2D(3553, 0, Ae, Q.width, Q.height, 0, se, pe, null));
      else if (m.isDataTexture)
        if (ye.length > 0 && oe) {
          Re && Le && t.texStorage2D(3553, D, Ae, ye[0].width, ye[0].height);
          for (let Y = 0, Z = ye.length; Y < Z; Y++)
            ge = ye[Y], Re ? t.texSubImage2D(3553, Y, 0, 0, ge.width, ge.height, se, pe, ge.data) : t.texImage2D(3553, Y, Ae, ge.width, ge.height, 0, se, pe, ge.data);
          m.generateMipmaps = !1;
        } else
          Re ? (Le && t.texStorage2D(3553, D, Ae, Q.width, Q.height), t.texSubImage2D(3553, 0, 0, 0, Q.width, Q.height, se, pe, Q.data)) : t.texImage2D(3553, 0, Ae, Q.width, Q.height, 0, se, pe, Q.data);
      else if (m.isCompressedTexture)
        if (m.isCompressedArrayTexture) {
          Re && Le && t.texStorage3D(35866, D, Ae, ye[0].width, ye[0].height, Q.depth);
          for (let Y = 0, Z = ye.length; Y < Z; Y++)
            ge = ye[Y], m.format !== Rt ? se !== null ? Re ? t.compressedTexSubImage3D(35866, Y, 0, 0, 0, ge.width, ge.height, Q.depth, se, ge.data, 0, 0) : t.compressedTexImage3D(35866, Y, Ae, ge.width, ge.height, Q.depth, 0, ge.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Re ? t.texSubImage3D(35866, Y, 0, 0, 0, ge.width, ge.height, Q.depth, se, pe, ge.data) : t.texImage3D(35866, Y, Ae, ge.width, ge.height, Q.depth, 0, se, pe, ge.data);
        } else {
          Re && Le && t.texStorage2D(3553, D, Ae, ye[0].width, ye[0].height);
          for (let Y = 0, Z = ye.length; Y < Z; Y++)
            ge = ye[Y], m.format !== Rt ? se !== null ? Re ? t.compressedTexSubImage2D(3553, Y, 0, 0, ge.width, ge.height, se, ge.data) : t.compressedTexImage2D(3553, Y, Ae, ge.width, ge.height, 0, ge.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Re ? t.texSubImage2D(3553, Y, 0, 0, ge.width, ge.height, se, pe, ge.data) : t.texImage2D(3553, Y, Ae, ge.width, ge.height, 0, se, pe, ge.data);
        }
      else if (m.isDataArrayTexture)
        Re ? (Le && t.texStorage3D(35866, D, Ae, Q.width, Q.height, Q.depth), t.texSubImage3D(35866, 0, 0, 0, 0, Q.width, Q.height, Q.depth, se, pe, Q.data)) : t.texImage3D(35866, 0, Ae, Q.width, Q.height, Q.depth, 0, se, pe, Q.data);
      else if (m.isData3DTexture)
        Re ? (Le && t.texStorage3D(32879, D, Ae, Q.width, Q.height, Q.depth), t.texSubImage3D(32879, 0, 0, 0, 0, Q.width, Q.height, Q.depth, se, pe, Q.data)) : t.texImage3D(32879, 0, Ae, Q.width, Q.height, Q.depth, 0, se, pe, Q.data);
      else if (m.isFramebufferTexture) {
        if (Le)
          if (Re)
            t.texStorage2D(3553, D, Ae, Q.width, Q.height);
          else {
            let Y = Q.width, Z = Q.height;
            for (let ae = 0; ae < D; ae++)
              t.texImage2D(3553, ae, Ae, Y, Z, 0, se, pe, null), Y >>= 1, Z >>= 1;
          }
      } else if (ye.length > 0 && oe) {
        Re && Le && t.texStorage2D(3553, D, Ae, ye[0].width, ye[0].height);
        for (let Y = 0, Z = ye.length; Y < Z; Y++)
          ge = ye[Y], Re ? t.texSubImage2D(3553, Y, 0, 0, se, pe, ge) : t.texImage2D(3553, Y, Ae, se, pe, ge);
        m.generateMipmaps = !1;
      } else
        Re ? (Le && t.texStorage2D(3553, D, Ae, Q.width, Q.height), t.texSubImage2D(3553, 0, 0, 0, se, pe, Q)) : t.texImage2D(3553, 0, Ae, se, pe, Q);
      B(m, oe) && L(ee), me.__version = re.version, m.onUpdate && m.onUpdate(m);
    }
    w.__version = m.version;
  }
  function he(w, m, z) {
    if (m.image.length !== 6)
      return;
    const ee = ce(w, m), te = m.source;
    t.bindTexture(34067, w.__webglTexture, 33984 + z);
    const re = n.get(te);
    if (te.version !== re.__version || ee === !0) {
      t.activeTexture(33984 + z), r.pixelStorei(37440, m.flipY), r.pixelStorei(37441, m.premultiplyAlpha), r.pixelStorei(3317, m.unpackAlignment), r.pixelStorei(37443, 0);
      const me = m.isCompressedTexture || m.image[0].isCompressedTexture, y = m.image[0] && m.image[0].isDataTexture, Q = [];
      for (let Y = 0; Y < 6; Y++)
        !me && !y ? Q[Y] = A(m.image[Y], !1, !0, l) : Q[Y] = y ? m.image[Y].image : m.image[Y], Q[Y] = ot(m, Q[Y]);
      const oe = Q[0], se = v(oe) || o, pe = s.convert(m.format, m.encoding), Ae = s.convert(m.type), ge = x(m.internalFormat, pe, Ae, m.encoding), ye = o && m.isVideoTexture !== !0, Re = re.__version === void 0 || ee === !0;
      let Le = I(m, oe, se);
      le(34067, m, se);
      let D;
      if (me) {
        ye && Re && t.texStorage2D(34067, Le, ge, oe.width, oe.height);
        for (let Y = 0; Y < 6; Y++) {
          D = Q[Y].mipmaps;
          for (let Z = 0; Z < D.length; Z++) {
            const ae = D[Z];
            m.format !== Rt ? pe !== null ? ye ? t.compressedTexSubImage2D(34069 + Y, Z, 0, 0, ae.width, ae.height, pe, ae.data) : t.compressedTexImage2D(34069 + Y, Z, ge, ae.width, ae.height, 0, ae.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : ye ? t.texSubImage2D(34069 + Y, Z, 0, 0, ae.width, ae.height, pe, Ae, ae.data) : t.texImage2D(34069 + Y, Z, ge, ae.width, ae.height, 0, pe, Ae, ae.data);
          }
        }
      } else {
        D = m.mipmaps, ye && Re && (D.length > 0 && Le++, t.texStorage2D(34067, Le, ge, Q[0].width, Q[0].height));
        for (let Y = 0; Y < 6; Y++)
          if (y) {
            ye ? t.texSubImage2D(34069 + Y, 0, 0, 0, Q[Y].width, Q[Y].height, pe, Ae, Q[Y].data) : t.texImage2D(34069 + Y, 0, ge, Q[Y].width, Q[Y].height, 0, pe, Ae, Q[Y].data);
            for (let Z = 0; Z < D.length; Z++) {
              const de = D[Z].image[Y].image;
              ye ? t.texSubImage2D(34069 + Y, Z + 1, 0, 0, de.width, de.height, pe, Ae, de.data) : t.texImage2D(34069 + Y, Z + 1, ge, de.width, de.height, 0, pe, Ae, de.data);
            }
          } else {
            ye ? t.texSubImage2D(34069 + Y, 0, 0, 0, pe, Ae, Q[Y]) : t.texImage2D(34069 + Y, 0, ge, pe, Ae, Q[Y]);
            for (let Z = 0; Z < D.length; Z++) {
              const ae = D[Z];
              ye ? t.texSubImage2D(34069 + Y, Z + 1, 0, 0, pe, Ae, ae.image[Y]) : t.texImage2D(34069 + Y, Z + 1, ge, pe, Ae, ae.image[Y]);
            }
          }
      }
      B(m, se) && L(34067), re.__version = te.version, m.onUpdate && m.onUpdate(m);
    }
    w.__version = m.version;
  }
  function Me(w, m, z, ee, te) {
    const re = s.convert(z.format, z.encoding), me = s.convert(z.type), y = x(z.internalFormat, re, me, z.encoding);
    n.get(m).__hasExternalTextures || (te === 32879 || te === 35866 ? t.texImage3D(te, 0, y, m.width, m.height, m.depth, 0, re, me, null) : t.texImage2D(te, 0, y, m.width, m.height, 0, re, me, null)), t.bindFramebuffer(36160, w), Ge(m) ? d.framebufferTexture2DMultisampleEXT(36160, ee, te, n.get(z).__webglTexture, 0, Pe(m)) : (te === 3553 || te >= 34069 && te <= 34074) && r.framebufferTexture2D(36160, ee, te, n.get(z).__webglTexture, 0), t.bindFramebuffer(36160, null);
  }
  function Ce(w, m, z) {
    if (r.bindRenderbuffer(36161, w), m.depthBuffer && !m.stencilBuffer) {
      let ee = 33189;
      if (z || Ge(m)) {
        const te = m.depthTexture;
        te && te.isDepthTexture && (te.type === gn ? ee = 36012 : te.type === pn && (ee = 33190));
        const re = Pe(m);
        Ge(m) ? d.renderbufferStorageMultisampleEXT(36161, re, ee, m.width, m.height) : r.renderbufferStorageMultisample(36161, re, ee, m.width, m.height);
      } else
        r.renderbufferStorage(36161, ee, m.width, m.height);
      r.framebufferRenderbuffer(36160, 36096, 36161, w);
    } else if (m.depthBuffer && m.stencilBuffer) {
      const ee = Pe(m);
      z && Ge(m) === !1 ? r.renderbufferStorageMultisample(36161, ee, 35056, m.width, m.height) : Ge(m) ? d.renderbufferStorageMultisampleEXT(36161, ee, 35056, m.width, m.height) : r.renderbufferStorage(36161, 34041, m.width, m.height), r.framebufferRenderbuffer(36160, 33306, 36161, w);
    } else {
      const ee = m.isWebGLMultipleRenderTargets === !0 ? m.texture : [m.texture];
      for (let te = 0; te < ee.length; te++) {
        const re = ee[te], me = s.convert(re.format, re.encoding), y = s.convert(re.type), Q = x(re.internalFormat, me, y, re.encoding), oe = Pe(m);
        z && Ge(m) === !1 ? r.renderbufferStorageMultisample(36161, oe, Q, m.width, m.height) : Ge(m) ? d.renderbufferStorageMultisampleEXT(36161, oe, Q, m.width, m.height) : r.renderbufferStorage(36161, Q, m.width, m.height);
      }
    }
    r.bindRenderbuffer(36161, null);
  }
  function _e(w, m) {
    if (m && m.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(36160, w), !(m.depthTexture && m.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(m.depthTexture).__webglTexture || m.depthTexture.image.width !== m.width || m.depthTexture.image.height !== m.height) && (m.depthTexture.image.width = m.width, m.depthTexture.image.height = m.height, m.depthTexture.needsUpdate = !0), X(m.depthTexture, 0);
    const ee = n.get(m.depthTexture).__webglTexture, te = Pe(m);
    if (m.depthTexture.format === An)
      Ge(m) ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, ee, 0, te) : r.framebufferTexture2D(36160, 36096, 3553, ee, 0);
    else if (m.depthTexture.format === Hn)
      Ge(m) ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, ee, 0, te) : r.framebufferTexture2D(36160, 33306, 3553, ee, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Te(w) {
    const m = n.get(w), z = w.isWebGLCubeRenderTarget === !0;
    if (w.depthTexture && !m.__autoAllocateDepthBuffer) {
      if (z)
        throw new Error("target.depthTexture not supported in Cube render targets");
      _e(m.__webglFramebuffer, w);
    } else if (z) {
      m.__webglDepthbuffer = [];
      for (let ee = 0; ee < 6; ee++)
        t.bindFramebuffer(36160, m.__webglFramebuffer[ee]), m.__webglDepthbuffer[ee] = r.createRenderbuffer(), Ce(m.__webglDepthbuffer[ee], w, !1);
    } else
      t.bindFramebuffer(36160, m.__webglFramebuffer), m.__webglDepthbuffer = r.createRenderbuffer(), Ce(m.__webglDepthbuffer, w, !1);
    t.bindFramebuffer(36160, null);
  }
  function Je(w, m, z) {
    const ee = n.get(w);
    m !== void 0 && Me(ee.__webglFramebuffer, w, w.texture, 36064, 3553), z !== void 0 && Te(w);
  }
  function rt(w) {
    const m = w.texture, z = n.get(w), ee = n.get(m);
    w.addEventListener("dispose", J), w.isWebGLMultipleRenderTargets !== !0 && (ee.__webglTexture === void 0 && (ee.__webglTexture = r.createTexture()), ee.__version = m.version, a.memory.textures++);
    const te = w.isWebGLCubeRenderTarget === !0, re = w.isWebGLMultipleRenderTargets === !0, me = v(w) || o;
    if (te) {
      z.__webglFramebuffer = [];
      for (let y = 0; y < 6; y++)
        z.__webglFramebuffer[y] = r.createFramebuffer();
    } else {
      if (z.__webglFramebuffer = r.createFramebuffer(), re)
        if (i.drawBuffers) {
          const y = w.texture;
          for (let Q = 0, oe = y.length; Q < oe; Q++) {
            const se = n.get(y[Q]);
            se.__webglTexture === void 0 && (se.__webglTexture = r.createTexture(), a.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (o && w.samples > 0 && Ge(w) === !1) {
        const y = re ? m : [m];
        z.__webglMultisampledFramebuffer = r.createFramebuffer(), z.__webglColorRenderbuffer = [], t.bindFramebuffer(36160, z.__webglMultisampledFramebuffer);
        for (let Q = 0; Q < y.length; Q++) {
          const oe = y[Q];
          z.__webglColorRenderbuffer[Q] = r.createRenderbuffer(), r.bindRenderbuffer(36161, z.__webglColorRenderbuffer[Q]);
          const se = s.convert(oe.format, oe.encoding), pe = s.convert(oe.type), Ae = x(oe.internalFormat, se, pe, oe.encoding, w.isXRRenderTarget === !0), ge = Pe(w);
          r.renderbufferStorageMultisample(36161, ge, Ae, w.width, w.height), r.framebufferRenderbuffer(36160, 36064 + Q, 36161, z.__webglColorRenderbuffer[Q]);
        }
        r.bindRenderbuffer(36161, null), w.depthBuffer && (z.__webglDepthRenderbuffer = r.createRenderbuffer(), Ce(z.__webglDepthRenderbuffer, w, !0)), t.bindFramebuffer(36160, null);
      }
    }
    if (te) {
      t.bindTexture(34067, ee.__webglTexture), le(34067, m, me);
      for (let y = 0; y < 6; y++)
        Me(z.__webglFramebuffer[y], w, m, 36064, 34069 + y);
      B(m, me) && L(34067), t.unbindTexture();
    } else if (re) {
      const y = w.texture;
      for (let Q = 0, oe = y.length; Q < oe; Q++) {
        const se = y[Q], pe = n.get(se);
        t.bindTexture(3553, pe.__webglTexture), le(3553, se, me), Me(z.__webglFramebuffer, w, se, 36064 + Q, 3553), B(se, me) && L(3553);
      }
      t.unbindTexture();
    } else {
      let y = 3553;
      (w.isWebGL3DRenderTarget || w.isWebGLArrayRenderTarget) && (o ? y = w.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(y, ee.__webglTexture), le(y, m, me), Me(z.__webglFramebuffer, w, m, 36064, y), B(m, me) && L(y), t.unbindTexture();
    }
    w.depthBuffer && Te(w);
  }
  function We(w) {
    const m = v(w) || o, z = w.isWebGLMultipleRenderTargets === !0 ? w.texture : [w.texture];
    for (let ee = 0, te = z.length; ee < te; ee++) {
      const re = z[ee];
      if (B(re, m)) {
        const me = w.isWebGLCubeRenderTarget ? 34067 : 3553, y = n.get(re).__webglTexture;
        t.bindTexture(me, y), L(me), t.unbindTexture();
      }
    }
  }
  function qe(w) {
    if (o && w.samples > 0 && Ge(w) === !1) {
      const m = w.isWebGLMultipleRenderTargets ? w.texture : [w.texture], z = w.width, ee = w.height;
      let te = 16384;
      const re = [], me = w.stencilBuffer ? 33306 : 36096, y = n.get(w), Q = w.isWebGLMultipleRenderTargets === !0;
      if (Q)
        for (let oe = 0; oe < m.length; oe++)
          t.bindFramebuffer(36160, y.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(36160, 36064 + oe, 36161, null), t.bindFramebuffer(36160, y.__webglFramebuffer), r.framebufferTexture2D(36009, 36064 + oe, 3553, null, 0);
      t.bindFramebuffer(36008, y.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, y.__webglFramebuffer);
      for (let oe = 0; oe < m.length; oe++) {
        re.push(36064 + oe), w.depthBuffer && re.push(me);
        const se = y.__ignoreDepthValues !== void 0 ? y.__ignoreDepthValues : !1;
        if (se === !1 && (w.depthBuffer && (te |= 256), w.stencilBuffer && (te |= 1024)), Q && r.framebufferRenderbuffer(36008, 36064, 36161, y.__webglColorRenderbuffer[oe]), se === !0 && (r.invalidateFramebuffer(36008, [me]), r.invalidateFramebuffer(36009, [me])), Q) {
          const pe = n.get(m[oe]).__webglTexture;
          r.framebufferTexture2D(36009, 36064, 3553, pe, 0);
        }
        r.blitFramebuffer(0, 0, z, ee, 0, 0, z, ee, te, 9728), g && r.invalidateFramebuffer(36008, re);
      }
      if (t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), Q)
        for (let oe = 0; oe < m.length; oe++) {
          t.bindFramebuffer(36160, y.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(36160, 36064 + oe, 36161, y.__webglColorRenderbuffer[oe]);
          const se = n.get(m[oe]).__webglTexture;
          t.bindFramebuffer(36160, y.__webglFramebuffer), r.framebufferTexture2D(36009, 36064 + oe, 3553, se, 0);
        }
      t.bindFramebuffer(36009, y.__webglMultisampledFramebuffer);
    }
  }
  function Pe(w) {
    return Math.min(u, w.samples);
  }
  function Ge(w) {
    const m = n.get(w);
    return o && w.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && m.__useRenderToTexture !== !1;
  }
  function At(w) {
    const m = a.render.frame;
    M.get(w) !== m && (M.set(w, m), w.update());
  }
  function ot(w, m) {
    const z = w.encoding, ee = w.format, te = w.type;
    return w.isCompressedTexture === !0 || w.isVideoTexture === !0 || w.format === Bs || z !== xn && (z === Ne ? o === !1 ? e.has("EXT_sRGB") === !0 && ee === Rt ? (w.format = Bs, w.minFilter = vt, w.generateMipmaps = !1) : m = _o.sRGBToLinear(m) : (ee !== Rt || te !== mn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", z)), m;
  }
  this.allocateTextureUnit = K, this.resetTextureUnits = $, this.setTexture2D = X, this.setTexture2DArray = fe, this.setTexture3D = N, this.setTextureCube = j, this.rebindTextures = Je, this.setupRenderTarget = rt, this.updateRenderTargetMipmap = We, this.updateMultisampleRenderTarget = qe, this.setupDepthRenderbuffer = Te, this.setupFrameBufferTexture = Me, this.useMultisampledRTT = Ge;
}
function kd(r, e, t) {
  const n = t.isWebGL2;
  function i(s, a = null) {
    let o;
    if (s === mn)
      return 5121;
    if (s === ya)
      return 32819;
    if (s === Ba)
      return 32820;
    if (s === Sa)
      return 5120;
    if (s === va)
      return 5122;
    if (s === Eo)
      return 5123;
    if (s === Ia)
      return 5124;
    if (s === pn)
      return 5125;
    if (s === gn)
      return 5126;
    if (s === ri)
      return n ? 5131 : (o = e.get("OES_texture_half_float"), o !== null ? o.HALF_FLOAT_OES : null);
    if (s === Da)
      return 6406;
    if (s === Rt)
      return 6408;
    if (s === ba)
      return 6409;
    if (s === Ta)
      return 6410;
    if (s === An)
      return 6402;
    if (s === Hn)
      return 34041;
    if (s === Bs)
      return o = e.get("EXT_sRGB"), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (s === Ra)
      return 6403;
    if (s === Qa)
      return 36244;
    if (s === Fa)
      return 33319;
    if (s === La)
      return 33320;
    if (s === Ga)
      return 36249;
    if (s === Hi || s === Vi || s === Ki || s === Ji)
      if (a === Ne)
        if (o = e.get("WEBGL_compressed_texture_s3tc_srgb"), o !== null) {
          if (s === Hi)
            return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === Vi)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === Ki)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === Ji)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (o = e.get("WEBGL_compressed_texture_s3tc"), o !== null) {
        if (s === Hi)
          return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === Vi)
          return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === Ki)
          return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === Ji)
          return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === Xs || s === $s || s === er || s === tr)
      if (o = e.get("WEBGL_compressed_texture_pvrtc"), o !== null) {
        if (s === Xs)
          return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === $s)
          return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === er)
          return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === tr)
          return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === Ua)
      return o = e.get("WEBGL_compressed_texture_etc1"), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === nr || s === ir)
      if (o = e.get("WEBGL_compressed_texture_etc"), o !== null) {
        if (s === nr)
          return a === Ne ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (s === ir)
          return a === Ne ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === sr || s === rr || s === or || s === ar || s === lr || s === cr || s === hr || s === ur || s === dr || s === fr || s === pr || s === gr || s === Ar || s === mr)
      if (o = e.get("WEBGL_compressed_texture_astc"), o !== null) {
        if (s === sr)
          return a === Ne ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === rr)
          return a === Ne ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === or)
          return a === Ne ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === ar)
          return a === Ne ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === lr)
          return a === Ne ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === cr)
          return a === Ne ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === hr)
          return a === Ne ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === ur)
          return a === Ne ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === dr)
          return a === Ne ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === fr)
          return a === Ne ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === pr)
          return a === Ne ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === gr)
          return a === Ne ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Ar)
          return a === Ne ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === mr)
          return a === Ne ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === Wi)
      if (o = e.get("EXT_texture_compression_bptc"), o !== null) {
        if (s === Wi)
          return a === Ne ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    if (s === Oa || s === xr || s === Mr || s === Er)
      if (o = e.get("EXT_texture_compression_rgtc"), o !== null) {
        if (s === Wi)
          return o.COMPRESSED_RED_RGTC1_EXT;
        if (s === xr)
          return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === Mr)
          return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === Er)
          return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return s === Pn ? n ? 34042 : (o = e.get("WEBGL_depth_texture"), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null) : r[s] !== void 0 ? r[s] : null;
  }
  return { convert: i };
}
class zd extends It {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class ii extends st {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Yd = { type: "move" };
class Es {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new ii(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new ii(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new R(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new R()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new ii(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new R(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new R()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, s = null, a = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const p of e.hand.values()) {
          const f = t.getJointPose(p, n), E = this._getHandJoint(l, p);
          f !== null && (E.matrix.fromArray(f.transform.matrix), E.matrix.decompose(E.position, E.rotation, E.scale), E.jointRadius = f.radius), E.visible = f !== null;
        }
        const h = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], d = h.position.distanceTo(u.position), g = 0.02, M = 5e-3;
        l.inputState.pinching && d > g + M ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && d <= g - M && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Yd)));
    }
    return o !== null && (o.visible = i !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new ii();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Hd extends gt {
  constructor(e, t, n, i, s, a, o, c, l, h) {
    if (h = h !== void 0 ? h : An, h !== An && h !== Hn)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === An && (n = pn), n === void 0 && h === Hn && (n = Pn), super(null, i, s, a, o, c, h, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : ut, this.minFilter = c !== void 0 ? c : ut, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class Vd extends En {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, a = null, o = "local-floor", c = 1, l = null, h = null, u = null, d = null, g = null, M = null;
    const p = t.getContextAttributes();
    let f = null, E = null;
    const S = [], A = [], v = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Map(), B = new It();
    B.layers.enable(1), B.viewport = new et();
    const L = new It();
    L.layers.enable(2), L.viewport = new et();
    const x = [B, L], I = new zd();
    I.layers.enable(1), I.layers.enable(2);
    let T = null, V = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(N) {
      let j = S[N];
      return j === void 0 && (j = new Es(), S[N] = j), j.getTargetRaySpace();
    }, this.getControllerGrip = function(N) {
      let j = S[N];
      return j === void 0 && (j = new Es(), S[N] = j), j.getGripSpace();
    }, this.getHand = function(N) {
      let j = S[N];
      return j === void 0 && (j = new Es(), S[N] = j), j.getHandSpace();
    };
    function J(N) {
      const j = A.indexOf(N.inputSource);
      if (j === -1)
        return;
      const ie = S[j];
      ie !== void 0 && ie.dispatchEvent({ type: N.type, data: N.inputSource });
    }
    function O() {
      i.removeEventListener("select", J), i.removeEventListener("selectstart", J), i.removeEventListener("selectend", J), i.removeEventListener("squeeze", J), i.removeEventListener("squeezestart", J), i.removeEventListener("squeezeend", J), i.removeEventListener("end", O), i.removeEventListener("inputsourceschange", b);
      for (let N = 0; N < S.length; N++) {
        const j = A[N];
        j !== null && (A[N] = null, S[N].disconnect(j));
      }
      T = null, V = null, e.setRenderTarget(f), g = null, d = null, u = null, i = null, E = null, fe.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(N) {
      s = N, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(N) {
      o = N, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(N) {
      l = N;
    }, this.getBaseLayer = function() {
      return d !== null ? d : g;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return M;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(N) {
      if (i = N, i !== null) {
        if (f = e.getRenderTarget(), i.addEventListener("select", J), i.addEventListener("selectstart", J), i.addEventListener("selectend", J), i.addEventListener("squeeze", J), i.addEventListener("squeezestart", J), i.addEventListener("squeezeend", J), i.addEventListener("end", O), i.addEventListener("inputsourceschange", b), p.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const j = {
            antialias: i.renderState.layers === void 0 ? p.antialias : !0,
            alpha: p.alpha,
            depth: p.depth,
            stencil: p.stencil,
            framebufferScaleFactor: s
          };
          g = new XRWebGLLayer(i, t, j), i.updateRenderState({ baseLayer: g }), E = new Jt(
            g.framebufferWidth,
            g.framebufferHeight,
            {
              format: Rt,
              type: mn,
              encoding: e.outputEncoding,
              stencilBuffer: p.stencil
            }
          );
        } else {
          let j = null, ie = null, G = null;
          p.depth && (G = p.stencil ? 35056 : 33190, j = p.stencil ? Hn : An, ie = p.stencil ? Pn : pn);
          const le = {
            colorFormat: 32856,
            depthFormat: G,
            scaleFactor: s
          };
          u = new XRWebGLBinding(i, t), d = u.createProjectionLayer(le), i.updateRenderState({ layers: [d] }), E = new Jt(
            d.textureWidth,
            d.textureHeight,
            {
              format: Rt,
              type: mn,
              depthTexture: new Hd(d.textureWidth, d.textureHeight, ie, void 0, void 0, void 0, void 0, void 0, void 0, j),
              stencilBuffer: p.stencil,
              encoding: e.outputEncoding,
              samples: p.antialias ? 4 : 0
            }
          );
          const ce = e.properties.get(E);
          ce.__ignoreDepthValues = d.ignoreDepthValues;
        }
        E.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await i.requestReferenceSpace(o), fe.setContext(i), fe.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    };
    function b(N) {
      for (let j = 0; j < N.removed.length; j++) {
        const ie = N.removed[j], G = A.indexOf(ie);
        G >= 0 && (A[G] = null, S[G].disconnect(ie));
      }
      for (let j = 0; j < N.added.length; j++) {
        const ie = N.added[j];
        let G = A.indexOf(ie);
        if (G === -1) {
          for (let ce = 0; ce < S.length; ce++)
            if (ce >= A.length) {
              A.push(ie), G = ce;
              break;
            } else if (A[ce] === null) {
              A[ce] = ie, G = ce;
              break;
            }
          if (G === -1)
            break;
        }
        const le = S[G];
        le && le.connect(ie);
      }
    }
    const P = new R(), W = new R();
    function $(N, j, ie) {
      P.setFromMatrixPosition(j.matrixWorld), W.setFromMatrixPosition(ie.matrixWorld);
      const G = P.distanceTo(W), le = j.projectionMatrix.elements, ce = ie.projectionMatrix.elements, ue = le[14] / (le[10] - 1), he = le[14] / (le[10] + 1), Me = (le[9] + 1) / le[5], Ce = (le[9] - 1) / le[5], _e = (le[8] - 1) / le[0], Te = (ce[8] + 1) / ce[0], Je = ue * _e, rt = ue * Te, We = G / (-_e + Te), qe = We * -_e;
      j.matrixWorld.decompose(N.position, N.quaternion, N.scale), N.translateX(qe), N.translateZ(We), N.matrixWorld.compose(N.position, N.quaternion, N.scale), N.matrixWorldInverse.copy(N.matrixWorld).invert();
      const Pe = ue + We, Ge = he + We, At = Je - qe, ot = rt + (G - qe), w = Me * he / Ge * Pe, m = Ce * he / Ge * Pe;
      N.projectionMatrix.makePerspective(At, ot, w, m, Pe, Ge);
    }
    function K(N, j) {
      j === null ? N.matrixWorld.copy(N.matrix) : N.matrixWorld.multiplyMatrices(j.matrixWorld, N.matrix), N.matrixWorldInverse.copy(N.matrixWorld).invert();
    }
    this.updateCamera = function(N) {
      if (i === null)
        return;
      I.near = L.near = B.near = N.near, I.far = L.far = B.far = N.far, (T !== I.near || V !== I.far) && (i.updateRenderState({
        depthNear: I.near,
        depthFar: I.far
      }), T = I.near, V = I.far);
      const j = N.parent, ie = I.cameras;
      K(I, j);
      for (let le = 0; le < ie.length; le++)
        K(ie[le], j);
      I.matrixWorld.decompose(I.position, I.quaternion, I.scale), N.matrix.copy(I.matrix), N.matrix.decompose(N.position, N.quaternion, N.scale);
      const G = N.children;
      for (let le = 0, ce = G.length; le < ce; le++)
        G[le].updateMatrixWorld(!0);
      ie.length === 2 ? $(I, B, L) : I.projectionMatrix.copy(B.projectionMatrix);
    }, this.getCamera = function() {
      return I;
    }, this.getFoveation = function() {
      if (!(d === null && g === null))
        return c;
    }, this.setFoveation = function(N) {
      c = N, d !== null && (d.fixedFoveation = N), g !== null && g.fixedFoveation !== void 0 && (g.fixedFoveation = N);
    }, this.getPlanes = function() {
      return v;
    };
    let q = null;
    function X(N, j) {
      if (h = j.getViewerPose(l || a), M = j, h !== null) {
        const ie = h.views;
        g !== null && (e.setRenderTargetFramebuffer(E, g.framebuffer), e.setRenderTarget(E));
        let G = !1;
        ie.length !== I.cameras.length && (I.cameras.length = 0, G = !0);
        for (let le = 0; le < ie.length; le++) {
          const ce = ie[le];
          let ue = null;
          if (g !== null)
            ue = g.getViewport(ce);
          else {
            const Me = u.getViewSubImage(d, ce);
            ue = Me.viewport, le === 0 && (e.setRenderTargetTextures(
              E,
              Me.colorTexture,
              d.ignoreDepthValues ? void 0 : Me.depthStencilTexture
            ), e.setRenderTarget(E));
          }
          let he = x[le];
          he === void 0 && (he = new It(), he.layers.enable(le), he.viewport = new et(), x[le] = he), he.matrix.fromArray(ce.transform.matrix), he.projectionMatrix.fromArray(ce.projectionMatrix), he.viewport.set(ue.x, ue.y, ue.width, ue.height), le === 0 && I.matrix.copy(he.matrix), G === !0 && I.cameras.push(he);
        }
      }
      for (let ie = 0; ie < S.length; ie++) {
        const G = A[ie], le = S[ie];
        G !== null && le !== void 0 && le.update(G, j, l || a);
      }
      if (q && q(N, j), j.detectedPlanes) {
        n.dispatchEvent({ type: "planesdetected", data: j.detectedPlanes });
        let ie = null;
        for (const G of v)
          j.detectedPlanes.has(G) || (ie === null && (ie = []), ie.push(G));
        if (ie !== null)
          for (const G of ie)
            v.delete(G), _.delete(G), n.dispatchEvent({ type: "planeremoved", data: G });
        for (const G of j.detectedPlanes)
          if (!v.has(G))
            v.add(G), _.set(G, j.lastChangedTime), n.dispatchEvent({ type: "planeadded", data: G });
          else {
            const le = _.get(G);
            G.lastChangedTime > le && (_.set(G, G.lastChangedTime), n.dispatchEvent({ type: "planechanged", data: G }));
          }
      }
      M = null;
    }
    const fe = new Lo();
    fe.setAnimationLoop(X), this.setAnimationLoop = function(N) {
      q = N;
    }, this.dispose = function() {
    };
  }
}
function Kd(r, e) {
  function t(p, f) {
    f.color.getRGB(p.fogColor.value, To(r)), f.isFog ? (p.fogNear.value = f.near, p.fogFar.value = f.far) : f.isFogExp2 && (p.fogDensity.value = f.density);
  }
  function n(p, f, E, S, A) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? i(p, f) : f.isMeshToonMaterial ? (i(p, f), h(p, f)) : f.isMeshPhongMaterial ? (i(p, f), l(p, f)) : f.isMeshStandardMaterial ? (i(p, f), u(p, f), f.isMeshPhysicalMaterial && d(p, f, A)) : f.isMeshMatcapMaterial ? (i(p, f), g(p, f)) : f.isMeshDepthMaterial ? i(p, f) : f.isMeshDistanceMaterial ? (i(p, f), M(p, f)) : f.isMeshNormalMaterial ? i(p, f) : f.isLineBasicMaterial ? (s(p, f), f.isLineDashedMaterial && a(p, f)) : f.isPointsMaterial ? o(p, f, E, S) : f.isSpriteMaterial ? c(p, f) : f.isShadowMaterial ? (p.color.value.copy(f.color), p.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function i(p, f) {
    p.opacity.value = f.opacity, f.color && p.diffuse.value.copy(f.color), f.emissive && p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.bumpMap && (p.bumpMap.value = f.bumpMap, p.bumpScale.value = f.bumpScale, f.side === wt && (p.bumpScale.value *= -1)), f.displacementMap && (p.displacementMap.value = f.displacementMap, p.displacementScale.value = f.displacementScale, p.displacementBias.value = f.displacementBias), f.emissiveMap && (p.emissiveMap.value = f.emissiveMap), f.normalMap && (p.normalMap.value = f.normalMap, p.normalScale.value.copy(f.normalScale), f.side === wt && p.normalScale.value.negate()), f.specularMap && (p.specularMap.value = f.specularMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    const E = e.get(f).envMap;
    if (E && (p.envMap.value = E, p.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = f.reflectivity, p.ior.value = f.ior, p.refractionRatio.value = f.refractionRatio), f.lightMap) {
      p.lightMap.value = f.lightMap;
      const v = r.useLegacyLights === !0 ? Math.PI : 1;
      p.lightMapIntensity.value = f.lightMapIntensity * v;
    }
    f.aoMap && (p.aoMap.value = f.aoMap, p.aoMapIntensity.value = f.aoMapIntensity);
    let S;
    f.map ? S = f.map : f.specularMap ? S = f.specularMap : f.displacementMap ? S = f.displacementMap : f.normalMap ? S = f.normalMap : f.bumpMap ? S = f.bumpMap : f.roughnessMap ? S = f.roughnessMap : f.metalnessMap ? S = f.metalnessMap : f.alphaMap ? S = f.alphaMap : f.emissiveMap ? S = f.emissiveMap : f.clearcoatMap ? S = f.clearcoatMap : f.clearcoatNormalMap ? S = f.clearcoatNormalMap : f.clearcoatRoughnessMap ? S = f.clearcoatRoughnessMap : f.iridescenceMap ? S = f.iridescenceMap : f.iridescenceThicknessMap ? S = f.iridescenceThicknessMap : f.specularIntensityMap ? S = f.specularIntensityMap : f.specularColorMap ? S = f.specularColorMap : f.transmissionMap ? S = f.transmissionMap : f.thicknessMap ? S = f.thicknessMap : f.sheenColorMap ? S = f.sheenColorMap : f.sheenRoughnessMap && (S = f.sheenRoughnessMap), S !== void 0 && (S.isWebGLRenderTarget && (S = S.texture), S.matrixAutoUpdate === !0 && S.updateMatrix(), p.uvTransform.value.copy(S.matrix));
    let A;
    f.aoMap ? A = f.aoMap : f.lightMap && (A = f.lightMap), A !== void 0 && (A.isWebGLRenderTarget && (A = A.texture), A.matrixAutoUpdate === !0 && A.updateMatrix(), p.uv2Transform.value.copy(A.matrix));
  }
  function s(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity;
  }
  function a(p, f) {
    p.dashSize.value = f.dashSize, p.totalSize.value = f.dashSize + f.gapSize, p.scale.value = f.scale;
  }
  function o(p, f, E, S) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.size.value = f.size * E, p.scale.value = S * 0.5, f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    let A;
    f.map ? A = f.map : f.alphaMap && (A = f.alphaMap), A !== void 0 && (A.matrixAutoUpdate === !0 && A.updateMatrix(), p.uvTransform.value.copy(A.matrix));
  }
  function c(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.rotation.value = f.rotation, f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    let E;
    f.map ? E = f.map : f.alphaMap && (E = f.alphaMap), E !== void 0 && (E.matrixAutoUpdate === !0 && E.updateMatrix(), p.uvTransform.value.copy(E.matrix));
  }
  function l(p, f) {
    p.specular.value.copy(f.specular), p.shininess.value = Math.max(f.shininess, 1e-4);
  }
  function h(p, f) {
    f.gradientMap && (p.gradientMap.value = f.gradientMap);
  }
  function u(p, f) {
    p.roughness.value = f.roughness, p.metalness.value = f.metalness, f.roughnessMap && (p.roughnessMap.value = f.roughnessMap), f.metalnessMap && (p.metalnessMap.value = f.metalnessMap), e.get(f).envMap && (p.envMapIntensity.value = f.envMapIntensity);
  }
  function d(p, f, E) {
    p.ior.value = f.ior, f.sheen > 0 && (p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), p.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (p.sheenColorMap.value = f.sheenColorMap), f.sheenRoughnessMap && (p.sheenRoughnessMap.value = f.sheenRoughnessMap)), f.clearcoat > 0 && (p.clearcoat.value = f.clearcoat, p.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (p.clearcoatMap.value = f.clearcoatMap), f.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap), f.clearcoatNormalMap && (p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), p.clearcoatNormalMap.value = f.clearcoatNormalMap, f.side === wt && p.clearcoatNormalScale.value.negate())), f.iridescence > 0 && (p.iridescence.value = f.iridescence, p.iridescenceIOR.value = f.iridescenceIOR, p.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (p.iridescenceMap.value = f.iridescenceMap), f.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = f.iridescenceThicknessMap)), f.transmission > 0 && (p.transmission.value = f.transmission, p.transmissionSamplerMap.value = E.texture, p.transmissionSamplerSize.value.set(E.width, E.height), f.transmissionMap && (p.transmissionMap.value = f.transmissionMap), p.thickness.value = f.thickness, f.thicknessMap && (p.thicknessMap.value = f.thicknessMap), p.attenuationDistance.value = f.attenuationDistance, p.attenuationColor.value.copy(f.attenuationColor)), p.specularIntensity.value = f.specularIntensity, p.specularColor.value.copy(f.specularColor), f.specularIntensityMap && (p.specularIntensityMap.value = f.specularIntensityMap), f.specularColorMap && (p.specularColorMap.value = f.specularColorMap);
  }
  function g(p, f) {
    f.matcap && (p.matcap.value = f.matcap);
  }
  function M(p, f) {
    p.referencePosition.value.copy(f.referencePosition), p.nearDistance.value = f.nearDistance, p.farDistance.value = f.farDistance;
  }
  return {
    refreshFogUniforms: t,
    refreshMaterialUniforms: n
  };
}
function Jd(r, e, t, n) {
  let i = {}, s = {}, a = [];
  const o = t.isWebGL2 ? r.getParameter(35375) : 0;
  function c(S, A) {
    const v = A.program;
    n.uniformBlockBinding(S, v);
  }
  function l(S, A) {
    let v = i[S.id];
    v === void 0 && (M(S), v = h(S), i[S.id] = v, S.addEventListener("dispose", f));
    const _ = A.program;
    n.updateUBOMapping(S, _);
    const B = e.render.frame;
    s[S.id] !== B && (d(S), s[S.id] = B);
  }
  function h(S) {
    const A = u();
    S.__bindingPointIndex = A;
    const v = r.createBuffer(), _ = S.__size, B = S.usage;
    return r.bindBuffer(35345, v), r.bufferData(35345, _, B), r.bindBuffer(35345, null), r.bindBufferBase(35345, A, v), v;
  }
  function u() {
    for (let S = 0; S < o; S++)
      if (a.indexOf(S) === -1)
        return a.push(S), S;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(S) {
    const A = i[S.id], v = S.uniforms, _ = S.__cache;
    r.bindBuffer(35345, A);
    for (let B = 0, L = v.length; B < L; B++) {
      const x = v[B];
      if (g(x, B, _) === !0) {
        const I = x.__offset, T = Array.isArray(x.value) ? x.value : [x.value];
        let V = 0;
        for (let J = 0; J < T.length; J++) {
          const O = T[J], b = p(O);
          typeof O == "number" ? (x.__data[0] = O, r.bufferSubData(35345, I + V, x.__data)) : O.isMatrix3 ? (x.__data[0] = O.elements[0], x.__data[1] = O.elements[1], x.__data[2] = O.elements[2], x.__data[3] = O.elements[0], x.__data[4] = O.elements[3], x.__data[5] = O.elements[4], x.__data[6] = O.elements[5], x.__data[7] = O.elements[0], x.__data[8] = O.elements[6], x.__data[9] = O.elements[7], x.__data[10] = O.elements[8], x.__data[11] = O.elements[0]) : (O.toArray(x.__data, V), V += b.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        r.bufferSubData(35345, I, x.__data);
      }
    }
    r.bindBuffer(35345, null);
  }
  function g(S, A, v) {
    const _ = S.value;
    if (v[A] === void 0) {
      if (typeof _ == "number")
        v[A] = _;
      else {
        const B = Array.isArray(_) ? _ : [_], L = [];
        for (let x = 0; x < B.length; x++)
          L.push(B[x].clone());
        v[A] = L;
      }
      return !0;
    } else if (typeof _ == "number") {
      if (v[A] !== _)
        return v[A] = _, !0;
    } else {
      const B = Array.isArray(v[A]) ? v[A] : [v[A]], L = Array.isArray(_) ? _ : [_];
      for (let x = 0; x < B.length; x++) {
        const I = B[x];
        if (I.equals(L[x]) === !1)
          return I.copy(L[x]), !0;
      }
    }
    return !1;
  }
  function M(S) {
    const A = S.uniforms;
    let v = 0;
    const _ = 16;
    let B = 0;
    for (let L = 0, x = A.length; L < x; L++) {
      const I = A[L], T = {
        boundary: 0,
        // bytes
        storage: 0
        // bytes
      }, V = Array.isArray(I.value) ? I.value : [I.value];
      for (let J = 0, O = V.length; J < O; J++) {
        const b = V[J], P = p(b);
        T.boundary += P.boundary, T.storage += P.storage;
      }
      if (I.__data = new Float32Array(T.storage / Float32Array.BYTES_PER_ELEMENT), I.__offset = v, L > 0) {
        B = v % _;
        const J = _ - B;
        B !== 0 && J - T.boundary < 0 && (v += _ - B, I.__offset = v);
      }
      v += T.storage;
    }
    return B = v % _, B > 0 && (v += _ - B), S.__size = v, S.__cache = {}, this;
  }
  function p(S) {
    const A = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof S == "number" ? (A.boundary = 4, A.storage = 4) : S.isVector2 ? (A.boundary = 8, A.storage = 8) : S.isVector3 || S.isColor ? (A.boundary = 16, A.storage = 12) : S.isVector4 ? (A.boundary = 16, A.storage = 16) : S.isMatrix3 ? (A.boundary = 48, A.storage = 48) : S.isMatrix4 ? (A.boundary = 64, A.storage = 64) : S.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", S), A;
  }
  function f(S) {
    const A = S.target;
    A.removeEventListener("dispose", f);
    const v = a.indexOf(A.__bindingPointIndex);
    a.splice(v, 1), r.deleteBuffer(i[A.id]), delete i[A.id], delete s[A.id];
  }
  function E() {
    for (const S in i)
      r.deleteBuffer(i[S]);
    a = [], i = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: E
  };
}
function Wd() {
  const r = ai("canvas");
  return r.style.display = "block", r;
}
function Us(r = {}) {
  this.isWebGLRenderer = !0;
  const e = r.canvas !== void 0 ? r.canvas : Wd(), t = r.context !== void 0 ? r.context : null, n = r.depth !== void 0 ? r.depth : !0, i = r.stencil !== void 0 ? r.stencil : !0, s = r.antialias !== void 0 ? r.antialias : !1, a = r.premultipliedAlpha !== void 0 ? r.premultipliedAlpha : !0, o = r.preserveDrawingBuffer !== void 0 ? r.preserveDrawingBuffer : !1, c = r.powerPreference !== void 0 ? r.powerPreference : "default", l = r.failIfMajorPerformanceCaveat !== void 0 ? r.failIfMajorPerformanceCaveat : !1;
  let h;
  t !== null ? h = t.getContextAttributes().alpha : h = r.alpha !== void 0 ? r.alpha : !1;
  let u = null, d = null;
  const g = [], M = [];
  this.domElement = e, this.debug = {
    /**
     * Enables error checking and reporting when shader programs are being compiled
     * @type {boolean}
     */
    checkShaderErrors: !0
  }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = xn, this.useLegacyLights = !0, this.toneMapping = Kt, this.toneMappingExposure = 1;
  const p = this;
  let f = !1, E = 0, S = 0, A = null, v = -1, _ = null;
  const B = new et(), L = new et();
  let x = null, I = e.width, T = e.height, V = 1, J = null, O = null;
  const b = new et(0, 0, I, T), P = new et(0, 0, I, T);
  let W = !1;
  const $ = new Fo();
  let K = !1, q = !1, X = null;
  const fe = new $e(), N = new R(), j = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
  function ie() {
    return A === null ? V : 1;
  }
  let G = t;
  function le(C, U) {
    for (let k = 0; k < C.length; k++) {
      const F = C[k], H = e.getContext(F, U);
      if (H !== null)
        return H;
    }
    return null;
  }
  try {
    const C = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: s,
      premultipliedAlpha: a,
      preserveDrawingBuffer: o,
      powerPreference: c,
      failIfMajorPerformanceCaveat: l
    };
    if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Ts}`), e.addEventListener("webglcontextlost", pe, !1), e.addEventListener("webglcontextrestored", Ae, !1), e.addEventListener("webglcontextcreationerror", ge, !1), G === null) {
      const U = ["webgl2", "webgl", "experimental-webgl"];
      if (p.isWebGL1Renderer === !0 && U.shift(), G = le(U, C), G === null)
        throw le(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    G.getShaderPrecisionFormat === void 0 && (G.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (C) {
    throw console.error("THREE.WebGLRenderer: " + C.message), C;
  }
  let ce, ue, he, Me, Ce, _e, Te, Je, rt, We, qe, Pe, Ge, At, ot, w, m, z, ee, te, re, me, y, Q;
  function oe() {
    ce = new ru(G), ue = new $h(G, ce, r), ce.init(ue), me = new kd(G, ce, ue), he = new Nd(G, ce, ue), Me = new lu(), Ce = new vd(), _e = new Pd(G, ce, he, Ce, ue, me, Me), Te = new tu(p), Je = new su(p), rt = new ml(G, ue), y = new Zh(G, ce, rt, ue), We = new ou(G, rt, Me, y), qe = new du(G, We, rt, Me), ee = new uu(G, ue, _e), w = new eu(Ce), Pe = new Sd(p, Te, Je, ce, ue, y, w), Ge = new Kd(p, Ce), At = new yd(), ot = new Qd(ce, ue), z = new jh(p, Te, Je, he, qe, h, a), m = new Od(p, qe, ue), Q = new Jd(G, Me, ue, he), te = new Xh(G, ce, Me, ue), re = new au(G, ce, Me, ue), Me.programs = Pe.programs, p.capabilities = ue, p.extensions = ce, p.properties = Ce, p.renderLists = At, p.shadowMap = m, p.state = he, p.info = Me;
  }
  oe();
  const se = new Vd(p, G);
  this.xr = se, this.getContext = function() {
    return G;
  }, this.getContextAttributes = function() {
    return G.getContextAttributes();
  }, this.forceContextLoss = function() {
    const C = ce.get("WEBGL_lose_context");
    C && C.loseContext();
  }, this.forceContextRestore = function() {
    const C = ce.get("WEBGL_lose_context");
    C && C.restoreContext();
  }, this.getPixelRatio = function() {
    return V;
  }, this.setPixelRatio = function(C) {
    C !== void 0 && (V = C, this.setSize(I, T, !1));
  }, this.getSize = function(C) {
    return C.set(I, T);
  }, this.setSize = function(C, U, k = !0) {
    if (se.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    I = C, T = U, e.width = Math.floor(C * V), e.height = Math.floor(U * V), k === !0 && (e.style.width = C + "px", e.style.height = U + "px"), this.setViewport(0, 0, C, U);
  }, this.getDrawingBufferSize = function(C) {
    return C.set(I * V, T * V).floor();
  }, this.setDrawingBufferSize = function(C, U, k) {
    I = C, T = U, V = k, e.width = Math.floor(C * k), e.height = Math.floor(U * k), this.setViewport(0, 0, C, U);
  }, this.getCurrentViewport = function(C) {
    return C.copy(B);
  }, this.getViewport = function(C) {
    return C.copy(b);
  }, this.setViewport = function(C, U, k, F) {
    C.isVector4 ? b.set(C.x, C.y, C.z, C.w) : b.set(C, U, k, F), he.viewport(B.copy(b).multiplyScalar(V).floor());
  }, this.getScissor = function(C) {
    return C.copy(P);
  }, this.setScissor = function(C, U, k, F) {
    C.isVector4 ? P.set(C.x, C.y, C.z, C.w) : P.set(C, U, k, F), he.scissor(L.copy(P).multiplyScalar(V).floor());
  }, this.getScissorTest = function() {
    return W;
  }, this.setScissorTest = function(C) {
    he.setScissorTest(W = C);
  }, this.setOpaqueSort = function(C) {
    J = C;
  }, this.setTransparentSort = function(C) {
    O = C;
  }, this.getClearColor = function(C) {
    return C.copy(z.getClearColor());
  }, this.setClearColor = function() {
    z.setClearColor.apply(z, arguments);
  }, this.getClearAlpha = function() {
    return z.getClearAlpha();
  }, this.setClearAlpha = function() {
    z.setClearAlpha.apply(z, arguments);
  }, this.clear = function(C = !0, U = !0, k = !0) {
    let F = 0;
    C && (F |= 16384), U && (F |= 256), k && (F |= 1024), G.clear(F);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    e.removeEventListener("webglcontextlost", pe, !1), e.removeEventListener("webglcontextrestored", Ae, !1), e.removeEventListener("webglcontextcreationerror", ge, !1), At.dispose(), ot.dispose(), Ce.dispose(), Te.dispose(), Je.dispose(), qe.dispose(), y.dispose(), Q.dispose(), Pe.dispose(), se.dispose(), se.removeEventListener("sessionstart", Z), se.removeEventListener("sessionend", ae), X && (X.dispose(), X = null), de.stop();
  };
  function pe(C) {
    C.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), f = !0;
  }
  function Ae() {
    console.log("THREE.WebGLRenderer: Context Restored."), f = !1;
    const C = Me.autoReset, U = m.enabled, k = m.autoUpdate, F = m.needsUpdate, H = m.type;
    oe(), Me.autoReset = C, m.enabled = U, m.autoUpdate = k, m.needsUpdate = F, m.type = H;
  }
  function ge(C) {
    console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", C.statusMessage);
  }
  function ye(C) {
    const U = C.target;
    U.removeEventListener("dispose", ye), Re(U);
  }
  function Re(C) {
    Le(C), Ce.remove(C);
  }
  function Le(C) {
    const U = Ce.get(C).programs;
    U !== void 0 && (U.forEach(function(k) {
      Pe.releaseProgram(k);
    }), C.isShaderMaterial && Pe.releaseShaderCache(C));
  }
  this.renderBufferDirect = function(C, U, k, F, H, xe) {
    U === null && (U = j);
    const Ee = H.isMesh && H.matrixWorld.determinant() < 0, Se = zo(C, U, k, F, H);
    he.setMaterial(F, Ee);
    let Ie = k.index, Qe = 1;
    F.wireframe === !0 && (Ie = We.getWireframeAttribute(k), Qe = 2);
    const Be = k.drawRange, De = k.attributes.position;
    let ze = Be.start * Qe, mt = (Be.start + Be.count) * Qe;
    xe !== null && (ze = Math.max(ze, xe.start * Qe), mt = Math.min(mt, (xe.start + xe.count) * Qe)), Ie !== null ? (ze = Math.max(ze, 0), mt = Math.min(mt, Ie.count)) : De != null && (ze = Math.max(ze, 0), mt = Math.min(mt, De.count));
    const Nt = mt - ze;
    if (Nt < 0 || Nt === 1 / 0)
      return;
    y.setup(H, F, Se, k, Ie);
    let rn, Ye = te;
    if (Ie !== null && (rn = rt.get(Ie), Ye = re, Ye.setIndex(rn)), H.isMesh)
      F.wireframe === !0 ? (he.setLineWidth(F.wireframeLinewidth * ie()), Ye.setMode(1)) : Ye.setMode(4);
    else if (H.isLine) {
      let be = F.linewidth;
      be === void 0 && (be = 1), he.setLineWidth(be * ie()), H.isLineSegments ? Ye.setMode(1) : H.isLineLoop ? Ye.setMode(2) : Ye.setMode(3);
    } else
      H.isPoints ? Ye.setMode(0) : H.isSprite && Ye.setMode(4);
    if (H.isInstancedMesh)
      Ye.renderInstances(ze, Nt, H.count);
    else if (k.isInstancedBufferGeometry) {
      const be = k._maxInstanceCount !== void 0 ? k._maxInstanceCount : 1 / 0, Ni = Math.min(k.instanceCount, be);
      Ye.renderInstances(ze, Nt, Ni);
    } else
      Ye.render(ze, Nt);
  }, this.compile = function(C, U) {
    function k(F, H, xe) {
      F.transparent === !0 && F.side === $t && F.forceSinglePass === !1 ? (F.side = wt, F.needsUpdate = !0, _t(F, H, xe), F.side = nn, F.needsUpdate = !0, _t(F, H, xe), F.side = $t) : _t(F, H, xe);
    }
    d = ot.get(C), d.init(), M.push(d), C.traverseVisible(function(F) {
      F.isLight && F.layers.test(U.layers) && (d.pushLight(F), F.castShadow && d.pushShadow(F));
    }), d.setupLights(p.useLegacyLights), C.traverse(function(F) {
      const H = F.material;
      if (H)
        if (Array.isArray(H))
          for (let xe = 0; xe < H.length; xe++) {
            const Ee = H[xe];
            k(Ee, C, F);
          }
        else
          k(H, C, F);
    }), M.pop(), d = null;
  };
  let D = null;
  function Y(C) {
    D && D(C);
  }
  function Z() {
    de.stop();
  }
  function ae() {
    de.start();
  }
  const de = new Lo();
  de.setAnimationLoop(Y), typeof self < "u" && de.setContext(self), this.setAnimationLoop = function(C) {
    D = C, se.setAnimationLoop(C), C === null ? de.stop() : de.start();
  }, se.addEventListener("sessionstart", Z), se.addEventListener("sessionend", ae), this.render = function(C, U) {
    if (U !== void 0 && U.isCamera !== !0) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (f === !0)
      return;
    C.matrixWorldAutoUpdate === !0 && C.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), se.enabled === !0 && se.isPresenting === !0 && (se.cameraAutoUpdate === !0 && se.updateCamera(U), U = se.getCamera()), C.isScene === !0 && C.onBeforeRender(p, C, U, A), d = ot.get(C, M.length), d.init(), M.push(d), fe.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), $.setFromProjectionMatrix(fe), q = this.localClippingEnabled, K = w.init(this.clippingPlanes, q), u = At.get(C, g.length), u.init(), g.push(u), Ue(C, U, 0, p.sortObjects), u.finish(), p.sortObjects === !0 && u.sort(J, O), K === !0 && w.beginShadows();
    const k = d.state.shadowsArray;
    if (m.render(k, C, U), K === !0 && w.endShadows(), this.info.autoReset === !0 && this.info.reset(), z.render(u, C), d.setupLights(p.useLegacyLights), U.isArrayCamera) {
      const F = U.cameras;
      for (let H = 0, xe = F.length; H < xe; H++) {
        const Ee = F[H];
        je(u, C, Ee, Ee.viewport);
      }
    } else
      je(u, C, U);
    A !== null && (_e.updateMultisampleRenderTarget(A), _e.updateRenderTargetMipmap(A)), C.isScene === !0 && C.onAfterRender(p, C, U), y.resetDefaultState(), v = -1, _ = null, M.pop(), M.length > 0 ? d = M[M.length - 1] : d = null, g.pop(), g.length > 0 ? u = g[g.length - 1] : u = null;
  };
  function Ue(C, U, k, F) {
    if (C.visible === !1)
      return;
    if (C.layers.test(U.layers)) {
      if (C.isGroup)
        k = C.renderOrder;
      else if (C.isLOD)
        C.autoUpdate === !0 && C.update(U);
      else if (C.isLight)
        d.pushLight(C), C.castShadow && d.pushShadow(C);
      else if (C.isSprite) {
        if (!C.frustumCulled || $.intersectsSprite(C)) {
          F && N.setFromMatrixPosition(C.matrixWorld).applyMatrix4(fe);
          const Ee = qe.update(C), Se = C.material;
          Se.visible && u.push(C, Ee, Se, k, N.z, null);
        }
      } else if ((C.isMesh || C.isLine || C.isPoints) && (C.isSkinnedMesh && C.skeleton.frame !== Me.render.frame && (C.skeleton.update(), C.skeleton.frame = Me.render.frame), !C.frustumCulled || $.intersectsObject(C))) {
        F && N.setFromMatrixPosition(C.matrixWorld).applyMatrix4(fe);
        const Ee = qe.update(C), Se = C.material;
        if (Array.isArray(Se)) {
          const Ie = Ee.groups;
          for (let Qe = 0, Be = Ie.length; Qe < Be; Qe++) {
            const De = Ie[Qe], ze = Se[De.materialIndex];
            ze && ze.visible && u.push(C, Ee, ze, k, N.z, De);
          }
        } else
          Se.visible && u.push(C, Ee, Se, k, N.z, null);
      }
    }
    const xe = C.children;
    for (let Ee = 0, Se = xe.length; Ee < Se; Ee++)
      Ue(xe[Ee], U, k, F);
  }
  function je(C, U, k, F) {
    const H = C.opaque, xe = C.transmissive, Ee = C.transparent;
    d.setupLightsView(k), K === !0 && w.setGlobalState(p.clippingPlanes, k), xe.length > 0 && at(H, U, k), F && he.viewport(B.copy(F)), H.length > 0 && Qt(H, U, k), xe.length > 0 && Qt(xe, U, k), Ee.length > 0 && Qt(Ee, U, k), he.buffers.depth.setTest(!0), he.buffers.depth.setMask(!0), he.buffers.color.setMask(!0), he.setPolygonOffset(!1);
  }
  function at(C, U, k) {
    const F = ue.isWebGL2;
    X === null && (X = new Jt(1024, 1024, {
      generateMipmaps: !0,
      type: ce.has("EXT_color_buffer_half_float") ? ri : mn,
      minFilter: si,
      samples: F && s === !0 ? 4 : 0
    }));
    const H = p.getRenderTarget();
    p.setRenderTarget(X), p.clear();
    const xe = p.toneMapping;
    p.toneMapping = Kt, Qt(C, U, k), p.toneMapping = xe, _e.updateMultisampleRenderTarget(X), _e.updateRenderTargetMipmap(X), p.setRenderTarget(H);
  }
  function Qt(C, U, k) {
    const F = U.isScene === !0 ? U.overrideMaterial : null;
    for (let H = 0, xe = C.length; H < xe; H++) {
      const Ee = C[H], Se = Ee.object, Ie = Ee.geometry, Qe = F === null ? Ee.material : F, Be = Ee.group;
      Se.layers.test(k.layers) && ke(Se, U, k, Ie, Qe, Be);
    }
  }
  function ke(C, U, k, F, H, xe) {
    C.onBeforeRender(p, U, k, F, H, xe), C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, C.matrixWorld), C.normalMatrix.getNormalMatrix(C.modelViewMatrix), H.onBeforeRender(p, U, k, F, C, xe), H.transparent === !0 && H.side === $t && H.forceSinglePass === !1 ? (H.side = wt, H.needsUpdate = !0, p.renderBufferDirect(k, U, F, H, C, xe), H.side = nn, H.needsUpdate = !0, p.renderBufferDirect(k, U, F, H, C, xe), H.side = $t) : p.renderBufferDirect(k, U, F, H, C, xe), C.onAfterRender(p, U, k, F, H, xe);
  }
  function _t(C, U, k) {
    U.isScene !== !0 && (U = j);
    const F = Ce.get(C), H = d.state.lights, xe = d.state.shadowsArray, Ee = H.state.version, Se = Pe.getParameters(C, H.state, xe, U, k), Ie = Pe.getProgramCacheKey(Se);
    let Qe = F.programs;
    F.environment = C.isMeshStandardMaterial ? U.environment : null, F.fog = U.fog, F.envMap = (C.isMeshStandardMaterial ? Je : Te).get(C.envMap || F.environment), Qe === void 0 && (C.addEventListener("dispose", ye), Qe = /* @__PURE__ */ new Map(), F.programs = Qe);
    let Be = Qe.get(Ie);
    if (Be !== void 0) {
      if (F.currentProgram === Be && F.lightsStateVersion === Ee)
        return Ft(C, Se), Be;
    } else
      Se.uniforms = Pe.getUniforms(C), C.onBuild(k, Se, p), C.onBeforeCompile(Se, p), Be = Pe.acquireProgram(Se, Ie), Qe.set(Ie, Be), F.uniforms = Se.uniforms;
    const De = F.uniforms;
    (!C.isShaderMaterial && !C.isRawShaderMaterial || C.clipping === !0) && (De.clippingPlanes = w.uniform), Ft(C, Se), F.needsLights = Ho(C), F.lightsStateVersion = Ee, F.needsLights && (De.ambientLightColor.value = H.state.ambient, De.lightProbe.value = H.state.probe, De.directionalLights.value = H.state.directional, De.directionalLightShadows.value = H.state.directionalShadow, De.spotLights.value = H.state.spot, De.spotLightShadows.value = H.state.spotShadow, De.rectAreaLights.value = H.state.rectArea, De.ltc_1.value = H.state.rectAreaLTC1, De.ltc_2.value = H.state.rectAreaLTC2, De.pointLights.value = H.state.point, De.pointLightShadows.value = H.state.pointShadow, De.hemisphereLights.value = H.state.hemi, De.directionalShadowMap.value = H.state.directionalShadowMap, De.directionalShadowMatrix.value = H.state.directionalShadowMatrix, De.spotShadowMap.value = H.state.spotShadowMap, De.spotLightMatrix.value = H.state.spotLightMatrix, De.spotLightMap.value = H.state.spotLightMap, De.pointShadowMap.value = H.state.pointShadowMap, De.pointShadowMatrix.value = H.state.pointShadowMatrix);
    const ze = Be.getUniforms(), mt = Ti.seqWithValue(ze.seq, De);
    return F.currentProgram = Be, F.uniformsList = mt, Be;
  }
  function Ft(C, U) {
    const k = Ce.get(C);
    k.outputEncoding = U.outputEncoding, k.instancing = U.instancing, k.skinning = U.skinning, k.morphTargets = U.morphTargets, k.morphNormals = U.morphNormals, k.morphColors = U.morphColors, k.morphTargetsCount = U.morphTargetsCount, k.numClippingPlanes = U.numClippingPlanes, k.numIntersection = U.numClipIntersection, k.vertexAlphas = U.vertexAlphas, k.vertexTangents = U.vertexTangents, k.toneMapping = U.toneMapping;
  }
  function zo(C, U, k, F, H) {
    U.isScene !== !0 && (U = j), _e.resetTextureUnits();
    const xe = U.fog, Ee = F.isMeshStandardMaterial ? U.environment : null, Se = A === null ? p.outputEncoding : A.isXRRenderTarget === !0 ? A.texture.encoding : xn, Ie = (F.isMeshStandardMaterial ? Je : Te).get(F.envMap || Ee), Qe = F.vertexColors === !0 && !!k.attributes.color && k.attributes.color.itemSize === 4, Be = !!F.normalMap && !!k.attributes.tangent, De = !!k.morphAttributes.position, ze = !!k.morphAttributes.normal, mt = !!k.morphAttributes.color, Nt = F.toneMapped ? p.toneMapping : Kt, rn = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color, Ye = rn !== void 0 ? rn.length : 0, be = Ce.get(F), Ni = d.state.lights;
    if (K === !0 && (q === !0 || C !== _)) {
      const xt = C === _ && F.id === v;
      w.setState(F, C, xt);
    }
    let Ze = !1;
    F.version === be.__version ? (be.needsLights && be.lightsStateVersion !== Ni.state.version || be.outputEncoding !== Se || H.isInstancedMesh && be.instancing === !1 || !H.isInstancedMesh && be.instancing === !0 || H.isSkinnedMesh && be.skinning === !1 || !H.isSkinnedMesh && be.skinning === !0 || be.envMap !== Ie || F.fog === !0 && be.fog !== xe || be.numClippingPlanes !== void 0 && (be.numClippingPlanes !== w.numPlanes || be.numIntersection !== w.numIntersection) || be.vertexAlphas !== Qe || be.vertexTangents !== Be || be.morphTargets !== De || be.morphNormals !== ze || be.morphColors !== mt || be.toneMapping !== Nt || ue.isWebGL2 === !0 && be.morphTargetsCount !== Ye) && (Ze = !0) : (Ze = !0, be.__version = F.version);
    let on = be.currentProgram;
    Ze === !0 && (on = _t(F, U, H));
    let Ys = !1, Jn = !1, Pi = !1;
    const lt = on.getUniforms(), an = be.uniforms;
    if (he.useProgram(on.program) && (Ys = !0, Jn = !0, Pi = !0), F.id !== v && (v = F.id, Jn = !0), Ys || _ !== C) {
      if (lt.setValue(G, "projectionMatrix", C.projectionMatrix), ue.logarithmicDepthBuffer && lt.setValue(
        G,
        "logDepthBufFC",
        2 / (Math.log(C.far + 1) / Math.LN2)
      ), _ !== C && (_ = C, Jn = !0, Pi = !0), F.isShaderMaterial || F.isMeshPhongMaterial || F.isMeshToonMaterial || F.isMeshStandardMaterial || F.envMap) {
        const xt = lt.map.cameraPosition;
        xt !== void 0 && xt.setValue(
          G,
          N.setFromMatrixPosition(C.matrixWorld)
        );
      }
      (F.isMeshPhongMaterial || F.isMeshToonMaterial || F.isMeshLambertMaterial || F.isMeshBasicMaterial || F.isMeshStandardMaterial || F.isShaderMaterial) && lt.setValue(G, "isOrthographic", C.isOrthographicCamera === !0), (F.isMeshPhongMaterial || F.isMeshToonMaterial || F.isMeshLambertMaterial || F.isMeshBasicMaterial || F.isMeshStandardMaterial || F.isShaderMaterial || F.isShadowMaterial || H.isSkinnedMesh) && lt.setValue(G, "viewMatrix", C.matrixWorldInverse);
    }
    if (H.isSkinnedMesh) {
      lt.setOptional(G, H, "bindMatrix"), lt.setOptional(G, H, "bindMatrixInverse");
      const xt = H.skeleton;
      xt && (ue.floatVertexTextures ? (xt.boneTexture === null && xt.computeBoneTexture(), lt.setValue(G, "boneTexture", xt.boneTexture, _e), lt.setValue(G, "boneTextureSize", xt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
    }
    const ki = k.morphAttributes;
    if ((ki.position !== void 0 || ki.normal !== void 0 || ki.color !== void 0 && ue.isWebGL2 === !0) && ee.update(H, k, on), (Jn || be.receiveShadow !== H.receiveShadow) && (be.receiveShadow = H.receiveShadow, lt.setValue(G, "receiveShadow", H.receiveShadow)), F.isMeshGouraudMaterial && F.envMap !== null && (an.envMap.value = Ie, an.flipEnvMap.value = Ie.isCubeTexture && Ie.isRenderTargetTexture === !1 ? -1 : 1), Jn && (lt.setValue(G, "toneMappingExposure", p.toneMappingExposure), be.needsLights && Yo(an, Pi), xe && F.fog === !0 && Ge.refreshFogUniforms(an, xe), Ge.refreshMaterialUniforms(an, F, V, T, X), Ti.upload(G, be.uniformsList, an, _e)), F.isShaderMaterial && F.uniformsNeedUpdate === !0 && (Ti.upload(G, be.uniformsList, an, _e), F.uniformsNeedUpdate = !1), F.isSpriteMaterial && lt.setValue(G, "center", H.center), lt.setValue(G, "modelViewMatrix", H.modelViewMatrix), lt.setValue(G, "normalMatrix", H.normalMatrix), lt.setValue(G, "modelMatrix", H.matrixWorld), F.isShaderMaterial || F.isRawShaderMaterial) {
      const xt = F.uniformsGroups;
      for (let zi = 0, Vo = xt.length; zi < Vo; zi++)
        if (ue.isWebGL2) {
          const Hs = xt[zi];
          Q.update(Hs, on), Q.bind(Hs, on);
        } else
          console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
    }
    return on;
  }
  function Yo(C, U) {
    C.ambientLightColor.needsUpdate = U, C.lightProbe.needsUpdate = U, C.directionalLights.needsUpdate = U, C.directionalLightShadows.needsUpdate = U, C.pointLights.needsUpdate = U, C.pointLightShadows.needsUpdate = U, C.spotLights.needsUpdate = U, C.spotLightShadows.needsUpdate = U, C.rectAreaLights.needsUpdate = U, C.hemisphereLights.needsUpdate = U;
  }
  function Ho(C) {
    return C.isMeshLambertMaterial || C.isMeshToonMaterial || C.isMeshPhongMaterial || C.isMeshStandardMaterial || C.isShadowMaterial || C.isShaderMaterial && C.lights === !0;
  }
  this.getActiveCubeFace = function() {
    return E;
  }, this.getActiveMipmapLevel = function() {
    return S;
  }, this.getRenderTarget = function() {
    return A;
  }, this.setRenderTargetTextures = function(C, U, k) {
    Ce.get(C.texture).__webglTexture = U, Ce.get(C.depthTexture).__webglTexture = k;
    const F = Ce.get(C);
    F.__hasExternalTextures = !0, F.__hasExternalTextures && (F.__autoAllocateDepthBuffer = k === void 0, F.__autoAllocateDepthBuffer || ce.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), F.__useRenderToTexture = !1));
  }, this.setRenderTargetFramebuffer = function(C, U) {
    const k = Ce.get(C);
    k.__webglFramebuffer = U, k.__useDefaultFramebuffer = U === void 0;
  }, this.setRenderTarget = function(C, U = 0, k = 0) {
    A = C, E = U, S = k;
    let F = !0, H = null, xe = !1, Ee = !1;
    if (C) {
      const Ie = Ce.get(C);
      Ie.__useDefaultFramebuffer !== void 0 ? (he.bindFramebuffer(36160, null), F = !1) : Ie.__webglFramebuffer === void 0 ? _e.setupRenderTarget(C) : Ie.__hasExternalTextures && _e.rebindTextures(C, Ce.get(C.texture).__webglTexture, Ce.get(C.depthTexture).__webglTexture);
      const Qe = C.texture;
      (Qe.isData3DTexture || Qe.isDataArrayTexture || Qe.isCompressedArrayTexture) && (Ee = !0);
      const Be = Ce.get(C).__webglFramebuffer;
      C.isWebGLCubeRenderTarget ? (H = Be[U], xe = !0) : ue.isWebGL2 && C.samples > 0 && _e.useMultisampledRTT(C) === !1 ? H = Ce.get(C).__webglMultisampledFramebuffer : H = Be, B.copy(C.viewport), L.copy(C.scissor), x = C.scissorTest;
    } else
      B.copy(b).multiplyScalar(V).floor(), L.copy(P).multiplyScalar(V).floor(), x = W;
    if (he.bindFramebuffer(36160, H) && ue.drawBuffers && F && he.drawBuffers(C, H), he.viewport(B), he.scissor(L), he.setScissorTest(x), xe) {
      const Ie = Ce.get(C.texture);
      G.framebufferTexture2D(36160, 36064, 34069 + U, Ie.__webglTexture, k);
    } else if (Ee) {
      const Ie = Ce.get(C.texture), Qe = U || 0;
      G.framebufferTextureLayer(36160, 36064, Ie.__webglTexture, k || 0, Qe);
    }
    v = -1;
  }, this.readRenderTargetPixels = function(C, U, k, F, H, xe, Ee) {
    if (!(C && C.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let Se = Ce.get(C).__webglFramebuffer;
    if (C.isWebGLCubeRenderTarget && Ee !== void 0 && (Se = Se[Ee]), Se) {
      he.bindFramebuffer(36160, Se);
      try {
        const Ie = C.texture, Qe = Ie.format, Be = Ie.type;
        if (Qe !== Rt && me.convert(Qe) !== G.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        const De = Be === ri && (ce.has("EXT_color_buffer_half_float") || ue.isWebGL2 && ce.has("EXT_color_buffer_float"));
        if (Be !== mn && me.convert(Be) !== G.getParameter(35738) && // Edge and Chrome Mac < 52 (#9513)
        !(Be === gn && (ue.isWebGL2 || ce.has("OES_texture_float") || ce.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
        !De) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        U >= 0 && U <= C.width - F && k >= 0 && k <= C.height - H && G.readPixels(U, k, F, H, me.convert(Qe), me.convert(Be), xe);
      } finally {
        const Ie = A !== null ? Ce.get(A).__webglFramebuffer : null;
        he.bindFramebuffer(36160, Ie);
      }
    }
  }, this.copyFramebufferToTexture = function(C, U, k = 0) {
    const F = Math.pow(2, -k), H = Math.floor(U.image.width * F), xe = Math.floor(U.image.height * F);
    _e.setTexture2D(U, 0), G.copyTexSubImage2D(3553, k, 0, 0, C.x, C.y, H, xe), he.unbindTexture();
  }, this.copyTextureToTexture = function(C, U, k, F = 0) {
    const H = U.image.width, xe = U.image.height, Ee = me.convert(k.format), Se = me.convert(k.type);
    _e.setTexture2D(k, 0), G.pixelStorei(37440, k.flipY), G.pixelStorei(37441, k.premultiplyAlpha), G.pixelStorei(3317, k.unpackAlignment), U.isDataTexture ? G.texSubImage2D(3553, F, C.x, C.y, H, xe, Ee, Se, U.image.data) : U.isCompressedTexture ? G.compressedTexSubImage2D(3553, F, C.x, C.y, U.mipmaps[0].width, U.mipmaps[0].height, Ee, U.mipmaps[0].data) : G.texSubImage2D(3553, F, C.x, C.y, Ee, Se, U.image), F === 0 && k.generateMipmaps && G.generateMipmap(3553), he.unbindTexture();
  }, this.copyTextureToTexture3D = function(C, U, k, F, H = 0) {
    if (p.isWebGL1Renderer) {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      return;
    }
    const xe = C.max.x - C.min.x + 1, Ee = C.max.y - C.min.y + 1, Se = C.max.z - C.min.z + 1, Ie = me.convert(F.format), Qe = me.convert(F.type);
    let Be;
    if (F.isData3DTexture)
      _e.setTexture3D(F, 0), Be = 32879;
    else if (F.isDataArrayTexture)
      _e.setTexture2DArray(F, 0), Be = 35866;
    else {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
      return;
    }
    G.pixelStorei(37440, F.flipY), G.pixelStorei(37441, F.premultiplyAlpha), G.pixelStorei(3317, F.unpackAlignment);
    const De = G.getParameter(3314), ze = G.getParameter(32878), mt = G.getParameter(3316), Nt = G.getParameter(3315), rn = G.getParameter(32877), Ye = k.isCompressedTexture ? k.mipmaps[0] : k.image;
    G.pixelStorei(3314, Ye.width), G.pixelStorei(32878, Ye.height), G.pixelStorei(3316, C.min.x), G.pixelStorei(3315, C.min.y), G.pixelStorei(32877, C.min.z), k.isDataTexture || k.isData3DTexture ? G.texSubImage3D(Be, H, U.x, U.y, U.z, xe, Ee, Se, Ie, Qe, Ye.data) : k.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), G.compressedTexSubImage3D(Be, H, U.x, U.y, U.z, xe, Ee, Se, Ie, Ye.data)) : G.texSubImage3D(Be, H, U.x, U.y, U.z, xe, Ee, Se, Ie, Qe, Ye), G.pixelStorei(3314, De), G.pixelStorei(32878, ze), G.pixelStorei(3316, mt), G.pixelStorei(3315, Nt), G.pixelStorei(32877, rn), H === 0 && F.generateMipmaps && G.generateMipmap(Be), he.unbindTexture();
  }, this.initTexture = function(C) {
    C.isCubeTexture ? _e.setTextureCube(C, 0) : C.isData3DTexture ? _e.setTexture3D(C, 0) : C.isDataArrayTexture || C.isCompressedArrayTexture ? _e.setTexture2DArray(C, 0) : _e.setTexture2D(C, 0), he.unbindTexture();
  }, this.resetState = function() {
    E = 0, S = 0, A = null, he.reset(), y.reset();
  }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
Object.defineProperties(Us.prototype, {
  // @deprecated since r150
  physicallyCorrectLights: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), !this.useLegacyLights;
    },
    set: function(r) {
      console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), this.useLegacyLights = !r;
    }
  }
});
class qd extends Us {
}
qd.prototype.isWebGL1Renderer = !0;
class Os extends st {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
  }
  // @deprecated
  get autoUpdate() {
    return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
  }
  set autoUpdate(e) {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = e;
  }
}
class bs extends Cn {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Fe(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const so = /* @__PURE__ */ new R(), ro = /* @__PURE__ */ new R(), oo = /* @__PURE__ */ new $e(), Cs = /* @__PURE__ */ new Io(), bi = /* @__PURE__ */ new Fi();
class jd extends st {
  constructor(e = new yt(), t = new bs()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, s = t.count; i < s; i++)
        so.fromBufferAttribute(t, i - 1), ro.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += so.distanceTo(ro);
      e.setAttribute("lineDistance", new ft(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), bi.copy(n.boundingSphere), bi.applyMatrix4(i), bi.radius += s, e.ray.intersectsSphere(bi) === !1)
      return;
    oo.copy(i).invert(), Cs.copy(e.ray).applyMatrix4(oo);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = new R(), h = new R(), u = new R(), d = new R(), g = this.isLineSegments ? 2 : 1, M = n.index, f = n.attributes.position;
    if (M !== null) {
      const E = Math.max(0, a.start), S = Math.min(M.count, a.start + a.count);
      for (let A = E, v = S - 1; A < v; A += g) {
        const _ = M.getX(A), B = M.getX(A + 1);
        if (l.fromBufferAttribute(f, _), h.fromBufferAttribute(f, B), Cs.distanceSqToSegment(l, h, d, u) > c)
          continue;
        d.applyMatrix4(this.matrixWorld);
        const x = e.ray.origin.distanceTo(d);
        x < e.near || x > e.far || t.push({
          distance: x,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: A,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const E = Math.max(0, a.start), S = Math.min(f.count, a.start + a.count);
      for (let A = E, v = S - 1; A < v; A += g) {
        if (l.fromBufferAttribute(f, A), h.fromBufferAttribute(f, A + 1), Cs.distanceSqToSegment(l, h, d, u) > c)
          continue;
        d.applyMatrix4(this.matrixWorld);
        const B = e.ray.origin.distanceTo(d);
        B < e.near || B > e.far || t.push({
          distance: B,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: A,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
const ao = /* @__PURE__ */ new R(), lo = /* @__PURE__ */ new R();
class co extends jd {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        ao.fromBufferAttribute(t, i), lo.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + ao.distanceTo(lo);
      e.setAttribute("lineDistance", new ft(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Ns extends yt {
  constructor(e = 1, t = 1, n = 1, i = 32, s = 1, a = !1, o = 0, c = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: e,
      radiusBottom: t,
      height: n,
      radialSegments: i,
      heightSegments: s,
      openEnded: a,
      thetaStart: o,
      thetaLength: c
    };
    const l = this;
    i = Math.floor(i), s = Math.floor(s);
    const h = [], u = [], d = [], g = [];
    let M = 0;
    const p = [], f = n / 2;
    let E = 0;
    S(), a === !1 && (e > 0 && A(!0), t > 0 && A(!1)), this.setIndex(h), this.setAttribute("position", new ft(u, 3)), this.setAttribute("normal", new ft(d, 3)), this.setAttribute("uv", new ft(g, 2));
    function S() {
      const v = new R(), _ = new R();
      let B = 0;
      const L = (t - e) / n;
      for (let x = 0; x <= s; x++) {
        const I = [], T = x / s, V = T * (t - e) + e;
        for (let J = 0; J <= i; J++) {
          const O = J / i, b = O * c + o, P = Math.sin(b), W = Math.cos(b);
          _.x = V * P, _.y = -T * n + f, _.z = V * W, u.push(_.x, _.y, _.z), v.set(P, L, W).normalize(), d.push(v.x, v.y, v.z), g.push(O, 1 - T), I.push(M++);
        }
        p.push(I);
      }
      for (let x = 0; x < i; x++)
        for (let I = 0; I < s; I++) {
          const T = p[I][x], V = p[I + 1][x], J = p[I + 1][x + 1], O = p[I][x + 1];
          h.push(T, V, O), h.push(V, J, O), B += 6;
        }
      l.addGroup(E, B, 0), E += B;
    }
    function A(v) {
      const _ = M, B = new ve(), L = new R();
      let x = 0;
      const I = v === !0 ? e : t, T = v === !0 ? 1 : -1;
      for (let J = 1; J <= i; J++)
        u.push(0, f * T, 0), d.push(0, T, 0), g.push(0.5, 0.5), M++;
      const V = M;
      for (let J = 0; J <= i; J++) {
        const b = J / i * c + o, P = Math.cos(b), W = Math.sin(b);
        L.x = I * W, L.y = f * T, L.z = I * P, u.push(L.x, L.y, L.z), d.push(0, T, 0), B.x = P * 0.5 + 0.5, B.y = W * 0.5 * T + 0.5, g.push(B.x, B.y), M++;
      }
      for (let J = 0; J < i; J++) {
        const O = _ + J, b = V + J;
        v === !0 ? h.push(b, b + 1, O) : h.push(b + 1, b, O), x += 3;
      }
      l.addGroup(E, x, v === !0 ? 1 : 2), E += x;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ns(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Ps extends Ns {
  constructor(e = 1, t = 1, n = 32, i = 1, s = !1, a = 0, o = Math.PI * 2) {
    super(0, e, t, n, i, s, a, o), this.type = "ConeGeometry", this.parameters = {
      radius: e,
      height: t,
      radialSegments: n,
      heightSegments: i,
      openEnded: s,
      thetaStart: a,
      thetaLength: o
    };
  }
  static fromJSON(e) {
    return new Ps(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Ui extends yt {
  constructor(e = 1, t = 32, n = 16, i = 0, s = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: e,
      widthSegments: t,
      heightSegments: n,
      phiStart: i,
      phiLength: s,
      thetaStart: a,
      thetaLength: o
    }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
    const c = Math.min(a + o, Math.PI);
    let l = 0;
    const h = [], u = new R(), d = new R(), g = [], M = [], p = [], f = [];
    for (let E = 0; E <= n; E++) {
      const S = [], A = E / n;
      let v = 0;
      E == 0 && a == 0 ? v = 0.5 / t : E == n && c == Math.PI && (v = -0.5 / t);
      for (let _ = 0; _ <= t; _++) {
        const B = _ / t;
        u.x = -e * Math.cos(i + B * s) * Math.sin(a + A * o), u.y = e * Math.cos(a + A * o), u.z = e * Math.sin(i + B * s) * Math.sin(a + A * o), M.push(u.x, u.y, u.z), d.copy(u).normalize(), p.push(d.x, d.y, d.z), f.push(B + v, 1 - A), S.push(l++);
      }
      h.push(S);
    }
    for (let E = 0; E < n; E++)
      for (let S = 0; S < t; S++) {
        const A = h[E][S + 1], v = h[E][S], _ = h[E + 1][S], B = h[E + 1][S + 1];
        (E !== 0 || a > 0) && g.push(A, v, B), (E !== n - 1 || c < Math.PI) && g.push(v, _, B);
      }
    this.setIndex(g), this.setAttribute("position", new ft(M, 3)), this.setAttribute("normal", new ft(p, 3)), this.setAttribute("uv", new ft(f, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ui(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class Ri extends Cn {
  constructor(e) {
    super(), this.isMeshNormalMaterial = !0, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Qs, this.normalScale = new ve(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.flatShading = !1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this;
  }
}
class Zd extends Cn {
  constructor(e) {
    super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new Fe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Fe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Qs, this.normalScale = new ve(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Rs, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
const ho = {
  enabled: !1,
  files: {},
  add: function(r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function(r) {
    if (this.enabled !== !1)
      return this.files[r];
  },
  remove: function(r) {
    delete this.files[r];
  },
  clear: function() {
    this.files = {};
  }
};
class Xd {
  constructor(e, t, n) {
    const i = this;
    let s = !1, a = 0, o = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      o++, s === !1 && i.onStart !== void 0 && i.onStart(h, a, o), s = !0;
    }, this.itemEnd = function(h) {
      a++, i.onProgress !== void 0 && i.onProgress(h, a, o), a === o && (s = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return c ? c(h) : h;
    }, this.setURLModifier = function(h) {
      return c = h, this;
    }, this.addHandler = function(h, u) {
      return l.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = l.indexOf(h);
      return u !== -1 && l.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = l.length; u < d; u += 2) {
        const g = l[u], M = l[u + 1];
        if (g.global && (g.lastIndex = 0), g.test(h))
          return M;
      }
      return null;
    };
  }
}
const $d = /* @__PURE__ */ new Xd();
class Po {
  constructor(e) {
    this.manager = e !== void 0 ? e : $d, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
class ef extends Po {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = ho.get(e);
    if (a !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    const o = ai("img");
    function c() {
      h(), ho.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function l(u) {
      h(), i && i(u), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", c, !1), o.removeEventListener("error", l, !1);
    }
    return o.addEventListener("load", c, !1), o.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(e), o.src = e, o;
  }
}
class tf extends Po {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new gt(), a = new ef(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      s.image = o, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, i), s;
  }
}
class ko extends st {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Fe(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
class nf extends ko {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(st.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Fe(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
class sf extends ko {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class ks {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = uo(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const t = uo();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function uo() {
  return (typeof performance > "u" ? Date : performance).now();
}
class fo {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(pt(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Ts
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ts);
class Oi {
  constructor(e) {
    Oe(this, "dom");
    Oe(this, "camera");
    Oe(this, "scene");
    Oe(this, "renderer");
    /**
     * render
     */
    Oe(this, "render", () => {
      this.renderer.render(this.scene, this.camera), this.renderOthers(), requestAnimationFrame(this.render);
    });
    if (this.dom = e, !this.dom)
      throw new Error("dom is not defined");
    const { width: t, height: n } = this.getDomSize();
    this.scene = new Os(), this.camera = new It(45, t / n, 0.01, 1e3), this.renderer = new Us({
      antialias: !0,
      alpha: !0
    }), this.renderer.setSize(t, n), this.dom.appendChild(this.renderer.domElement), this.camera.position.set(15, 10, 20), this.camera.lookAt(0, 0, 0);
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
    const { width: e, height: t } = this.getDomSize();
    this.renderer.setSize(e, t), this.camera.aspect = e / t, this.camera.updateProjectionMatrix();
  }
}
class lf extends Oi {
  constructor(t) {
    super(t);
    Oe(this, "cube");
    Oe(this, "clock", new ks());
    const n = new sn(5, 5, 5), i = new Ri();
    this.cube = new it(n, i), this.scene.add(this.cube), this.render();
  }
  renderOthers() {
    this.cube.rotation.y = this.clock.getElapsedTime();
  }
}
const po = { type: "change" }, ws = { type: "start" }, go = { type: "end" };
class zs extends En {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new R(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: wn.ROTATE, MIDDLE: wn.DOLLY, RIGHT: wn.PAN }, this.touches = { ONE: _n.ROTATE, TWO: _n.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return o.phi;
    }, this.getAzimuthalAngle = function() {
      return o.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(y) {
      y.addEventListener("keydown", ot), this._domElementKeyEvents = y;
    }, this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", ot), this._domElementKeyEvents = null;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(po), n.update(), s = i.NONE;
    }, this.update = function() {
      const y = new R(), Q = new Mn().setFromUnitVectors(e.up, new R(0, 1, 0)), oe = Q.clone().invert(), se = new R(), pe = new Mn(), Ae = 2 * Math.PI;
      return function() {
        const ye = n.object.position;
        y.copy(ye).sub(n.target), y.applyQuaternion(Q), o.setFromVector3(y), n.autoRotate && s === i.NONE && I(L()), n.enableDamping ? (o.theta += c.theta * n.dampingFactor, o.phi += c.phi * n.dampingFactor) : (o.theta += c.theta, o.phi += c.phi);
        let Re = n.minAzimuthAngle, Le = n.maxAzimuthAngle;
        return isFinite(Re) && isFinite(Le) && (Re < -Math.PI ? Re += Ae : Re > Math.PI && (Re -= Ae), Le < -Math.PI ? Le += Ae : Le > Math.PI && (Le -= Ae), Re <= Le ? o.theta = Math.max(Re, Math.min(Le, o.theta)) : o.theta = o.theta > (Re + Le) / 2 ? Math.max(Re, o.theta) : Math.min(Le, o.theta)), o.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, o.phi)), o.makeSafe(), o.radius *= l, o.radius = Math.max(n.minDistance, Math.min(n.maxDistance, o.radius)), n.enableDamping === !0 ? n.target.addScaledVector(h, n.dampingFactor) : n.target.add(h), y.setFromSpherical(o), y.applyQuaternion(oe), ye.copy(n.target).add(y), n.object.lookAt(n.target), n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor, c.phi *= 1 - n.dampingFactor, h.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), h.set(0, 0, 0)), l = 1, u || se.distanceToSquared(n.object.position) > a || 8 * (1 - pe.dot(n.object.quaternion)) > a ? (n.dispatchEvent(po), se.copy(n.object.position), pe.copy(n.object.quaternion), u = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", z), n.domElement.removeEventListener("pointerdown", Je), n.domElement.removeEventListener("pointercancel", qe), n.domElement.removeEventListener("wheel", At), n.domElement.removeEventListener("pointermove", rt), n.domElement.removeEventListener("pointerup", We), n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", ot), n._domElementKeyEvents = null);
    };
    const n = this, i = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let s = i.NONE;
    const a = 1e-6, o = new fo(), c = new fo();
    let l = 1;
    const h = new R();
    let u = !1;
    const d = new ve(), g = new ve(), M = new ve(), p = new ve(), f = new ve(), E = new ve(), S = new ve(), A = new ve(), v = new ve(), _ = [], B = {};
    function L() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function x() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function I(y) {
      c.theta -= y;
    }
    function T(y) {
      c.phi -= y;
    }
    const V = function() {
      const y = new R();
      return function(oe, se) {
        y.setFromMatrixColumn(se, 0), y.multiplyScalar(-oe), h.add(y);
      };
    }(), J = function() {
      const y = new R();
      return function(oe, se) {
        n.screenSpacePanning === !0 ? y.setFromMatrixColumn(se, 1) : (y.setFromMatrixColumn(se, 0), y.crossVectors(n.object.up, y)), y.multiplyScalar(oe), h.add(y);
      };
    }(), O = function() {
      const y = new R();
      return function(oe, se) {
        const pe = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const Ae = n.object.position;
          y.copy(Ae).sub(n.target);
          let ge = y.length();
          ge *= Math.tan(n.object.fov / 2 * Math.PI / 180), V(2 * oe * ge / pe.clientHeight, n.object.matrix), J(2 * se * ge / pe.clientHeight, n.object.matrix);
        } else
          n.object.isOrthographicCamera ? (V(oe * (n.object.right - n.object.left) / n.object.zoom / pe.clientWidth, n.object.matrix), J(se * (n.object.top - n.object.bottom) / n.object.zoom / pe.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function b(y) {
      n.object.isPerspectiveCamera ? l /= y : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * y)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function P(y) {
      n.object.isPerspectiveCamera ? l *= y : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / y)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function W(y) {
      d.set(y.clientX, y.clientY);
    }
    function $(y) {
      S.set(y.clientX, y.clientY);
    }
    function K(y) {
      p.set(y.clientX, y.clientY);
    }
    function q(y) {
      g.set(y.clientX, y.clientY), M.subVectors(g, d).multiplyScalar(n.rotateSpeed);
      const Q = n.domElement;
      I(2 * Math.PI * M.x / Q.clientHeight), T(2 * Math.PI * M.y / Q.clientHeight), d.copy(g), n.update();
    }
    function X(y) {
      A.set(y.clientX, y.clientY), v.subVectors(A, S), v.y > 0 ? b(x()) : v.y < 0 && P(x()), S.copy(A), n.update();
    }
    function fe(y) {
      f.set(y.clientX, y.clientY), E.subVectors(f, p).multiplyScalar(n.panSpeed), O(E.x, E.y), p.copy(f), n.update();
    }
    function N(y) {
      y.deltaY < 0 ? P(x()) : y.deltaY > 0 && b(x()), n.update();
    }
    function j(y) {
      let Q = !1;
      switch (y.code) {
        case n.keys.UP:
          y.ctrlKey || y.metaKey || y.shiftKey ? T(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : O(0, n.keyPanSpeed), Q = !0;
          break;
        case n.keys.BOTTOM:
          y.ctrlKey || y.metaKey || y.shiftKey ? T(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : O(0, -n.keyPanSpeed), Q = !0;
          break;
        case n.keys.LEFT:
          y.ctrlKey || y.metaKey || y.shiftKey ? I(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : O(n.keyPanSpeed, 0), Q = !0;
          break;
        case n.keys.RIGHT:
          y.ctrlKey || y.metaKey || y.shiftKey ? I(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : O(-n.keyPanSpeed, 0), Q = !0;
          break;
      }
      Q && (y.preventDefault(), n.update());
    }
    function ie() {
      if (_.length === 1)
        d.set(_[0].pageX, _[0].pageY);
      else {
        const y = 0.5 * (_[0].pageX + _[1].pageX), Q = 0.5 * (_[0].pageY + _[1].pageY);
        d.set(y, Q);
      }
    }
    function G() {
      if (_.length === 1)
        p.set(_[0].pageX, _[0].pageY);
      else {
        const y = 0.5 * (_[0].pageX + _[1].pageX), Q = 0.5 * (_[0].pageY + _[1].pageY);
        p.set(y, Q);
      }
    }
    function le() {
      const y = _[0].pageX - _[1].pageX, Q = _[0].pageY - _[1].pageY, oe = Math.sqrt(y * y + Q * Q);
      S.set(0, oe);
    }
    function ce() {
      n.enableZoom && le(), n.enablePan && G();
    }
    function ue() {
      n.enableZoom && le(), n.enableRotate && ie();
    }
    function he(y) {
      if (_.length == 1)
        g.set(y.pageX, y.pageY);
      else {
        const oe = me(y), se = 0.5 * (y.pageX + oe.x), pe = 0.5 * (y.pageY + oe.y);
        g.set(se, pe);
      }
      M.subVectors(g, d).multiplyScalar(n.rotateSpeed);
      const Q = n.domElement;
      I(2 * Math.PI * M.x / Q.clientHeight), T(2 * Math.PI * M.y / Q.clientHeight), d.copy(g);
    }
    function Me(y) {
      if (_.length === 1)
        f.set(y.pageX, y.pageY);
      else {
        const Q = me(y), oe = 0.5 * (y.pageX + Q.x), se = 0.5 * (y.pageY + Q.y);
        f.set(oe, se);
      }
      E.subVectors(f, p).multiplyScalar(n.panSpeed), O(E.x, E.y), p.copy(f);
    }
    function Ce(y) {
      const Q = me(y), oe = y.pageX - Q.x, se = y.pageY - Q.y, pe = Math.sqrt(oe * oe + se * se);
      A.set(0, pe), v.set(0, Math.pow(A.y / S.y, n.zoomSpeed)), b(v.y), S.copy(A);
    }
    function _e(y) {
      n.enableZoom && Ce(y), n.enablePan && Me(y);
    }
    function Te(y) {
      n.enableZoom && Ce(y), n.enableRotate && he(y);
    }
    function Je(y) {
      n.enabled !== !1 && (_.length === 0 && (n.domElement.setPointerCapture(y.pointerId), n.domElement.addEventListener("pointermove", rt), n.domElement.addEventListener("pointerup", We)), ee(y), y.pointerType === "touch" ? w(y) : Pe(y));
    }
    function rt(y) {
      n.enabled !== !1 && (y.pointerType === "touch" ? m(y) : Ge(y));
    }
    function We(y) {
      te(y), _.length === 0 && (n.domElement.releasePointerCapture(y.pointerId), n.domElement.removeEventListener("pointermove", rt), n.domElement.removeEventListener("pointerup", We)), n.dispatchEvent(go), s = i.NONE;
    }
    function qe(y) {
      te(y);
    }
    function Pe(y) {
      let Q;
      switch (y.button) {
        case 0:
          Q = n.mouseButtons.LEFT;
          break;
        case 1:
          Q = n.mouseButtons.MIDDLE;
          break;
        case 2:
          Q = n.mouseButtons.RIGHT;
          break;
        default:
          Q = -1;
      }
      switch (Q) {
        case wn.DOLLY:
          if (n.enableZoom === !1)
            return;
          $(y), s = i.DOLLY;
          break;
        case wn.ROTATE:
          if (y.ctrlKey || y.metaKey || y.shiftKey) {
            if (n.enablePan === !1)
              return;
            K(y), s = i.PAN;
          } else {
            if (n.enableRotate === !1)
              return;
            W(y), s = i.ROTATE;
          }
          break;
        case wn.PAN:
          if (y.ctrlKey || y.metaKey || y.shiftKey) {
            if (n.enableRotate === !1)
              return;
            W(y), s = i.ROTATE;
          } else {
            if (n.enablePan === !1)
              return;
            K(y), s = i.PAN;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(ws);
    }
    function Ge(y) {
      switch (s) {
        case i.ROTATE:
          if (n.enableRotate === !1)
            return;
          q(y);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1)
            return;
          X(y);
          break;
        case i.PAN:
          if (n.enablePan === !1)
            return;
          fe(y);
          break;
      }
    }
    function At(y) {
      n.enabled === !1 || n.enableZoom === !1 || s !== i.NONE || (y.preventDefault(), n.dispatchEvent(ws), N(y), n.dispatchEvent(go));
    }
    function ot(y) {
      n.enabled === !1 || n.enablePan === !1 || j(y);
    }
    function w(y) {
      switch (re(y), _.length) {
        case 1:
          switch (n.touches.ONE) {
            case _n.ROTATE:
              if (n.enableRotate === !1)
                return;
              ie(), s = i.TOUCH_ROTATE;
              break;
            case _n.PAN:
              if (n.enablePan === !1)
                return;
              G(), s = i.TOUCH_PAN;
              break;
            default:
              s = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case _n.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1)
                return;
              ce(), s = i.TOUCH_DOLLY_PAN;
              break;
            case _n.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1)
                return;
              ue(), s = i.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = i.NONE;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(ws);
    }
    function m(y) {
      switch (re(y), s) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1)
            return;
          he(y), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1)
            return;
          Me(y), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1)
            return;
          _e(y), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1)
            return;
          Te(y), n.update();
          break;
        default:
          s = i.NONE;
      }
    }
    function z(y) {
      n.enabled !== !1 && y.preventDefault();
    }
    function ee(y) {
      _.push(y);
    }
    function te(y) {
      delete B[y.pointerId];
      for (let Q = 0; Q < _.length; Q++)
        if (_[Q].pointerId == y.pointerId) {
          _.splice(Q, 1);
          return;
        }
    }
    function re(y) {
      let Q = B[y.pointerId];
      Q === void 0 && (Q = new ve(), B[y.pointerId] = Q), Q.set(y.pageX, y.pageY);
    }
    function me(y) {
      const Q = y.pointerId === _[0].pointerId ? _[1] : _[0];
      return B[Q.pointerId];
    }
    n.domElement.addEventListener("contextmenu", z), n.domElement.addEventListener("pointerdown", Je), n.domElement.addEventListener("pointercancel", qe), n.domElement.addEventListener("wheel", At, { passive: !1 }), this.update();
  }
}
class rf {
  constructor(e = {
    size: {
      width: 10,
      height: 10,
      depth: 10
    },
    color: "yellow"
  }) {
    Oe(this, "size");
    Oe(this, "color");
    var t, n, i;
    this.size = {
      width: ((t = e.size) == null ? void 0 : t.width) || 10,
      height: ((n = e.size) == null ? void 0 : n.height) || 10,
      depth: ((i = e.size) == null ? void 0 : i.depth) || 10
    }, this.color = e.color || "yellow";
  }
  /**
   * addBox
   * @returns box
   */
  addBox() {
    const e = [
      [0, 0, 0],
      [this.size.width, 0, 0],
      [this.size.width, this.size.height, 0],
      [0, this.size.height, 0],
      [0, 0, this.size.depth],
      [this.size.width, 0, this.size.depth],
      [this.size.width, this.size.height, this.size.depth],
      [0, this.size.height, this.size.depth]
    ], t = [
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
    ], n = [];
    t.forEach((o) => {
      const c = e[o[0]], l = e[o[1]];
      n.push(new R(...c)), n.push(new R(...l));
    });
    const i = new bs({
      color: this.color,
      linewidth: 1
    }), s = new yt().setFromPoints(n), a = new co(s, i);
    return a.position.set(-this.size.width / 2, -this.size.height / 2, -this.size.depth / 2), a;
  }
  /**
   * addAxes
   * @returns axes
   */
  addAxes() {
    const e = new ii();
    e.name = "axes";
    const t = [
      [-this.size.width / 2, 0, 0],
      [this.size.height / 2, 0, 0],
      [0, -this.size.height / 2, 0],
      [0, this.size.height / 2, 0],
      [0, 0, -this.size.depth / 2],
      [0, 0, this.size.depth / 2]
    ], n = [
      [0, 1],
      [2, 3],
      [4, 5]
    ], i = [];
    n.forEach(
      (M) => {
        const p = t[M[0]], f = t[M[1]];
        i.push(new R(...p)), i.push(new R(...f));
      }
    );
    const s = new bs({
      color: this.color
    }), a = new yt().setFromPoints(i), o = new co(a, s);
    e.add(o);
    const c = 0.25, l = new Ps(c, c * 2, 32), h = new Zd({ color: this.color }), u = new it(l, h);
    u.position.set(this.size.width / 2 - c, 0, 0), u.rotation.z = -Math.PI / 2, e.add(u);
    const d = u.clone();
    d.position.set(0, this.size.height / 2 - c, 0), d.rotation.z = 0, e.add(d);
    const g = u.clone();
    return g.position.set(0, 0, this.size.depth / 2 - c), g.rotation.z = 0, g.rotation.x = Math.PI / 2, e.add(g), e;
  }
  /**
   * getSize 
   * @returns size
   */
  getSize() {
    return this.size;
  }
}
class cf extends Oi {
  constructor(t) {
    super(t);
    Oe(this, "control");
    const n = new rf();
    this.scene.add(n.addBox()), this.scene.add(n.addAxes()), this.control = new zs(this.camera, this.renderer.domElement), this.control.autoRotate = !0, this.control.autoRotateSpeed = 1, this.control.enablePan = !1;
    const i = new sf(16777215, 0.5);
    this.scene.add(i);
    const s = new nf(16777215, 0, 0.5);
    this.scene.add(s), this.render();
  }
  renderOthers() {
    this.control && this.control.update();
  }
}
class hf extends Oi {
  constructor(t) {
    super(t);
    Oe(this, "clock", new ks());
    Oe(this, "postCamera");
    Oe(this, "postScene");
    Oe(this, "renderTarget");
    Oe(this, "cube");
    Oe(this, "sphere");
    Oe(this, "render", () => {
      requestAnimationFrame(this.render), this.renderer.setRenderTarget(this.renderTarget), this.renderer.render(this.scene, this.camera), this.renderer.setRenderTarget(null), this.renderer.render(this.postScene, this.postCamera), this.cube.rotation.y = this.clock.getElapsedTime(), this.sphere.position.x = -Math.sin(this.clock.getElapsedTime()) * 6, this.sphere.position.z = Math.cos(this.clock.getElapsedTime()) * 6;
    });
    const { width: n, height: i } = this.getDomSize(), s = new sn(5, 5, 5), a = new Ri();
    this.cube = new it(s, a), this.scene.add(this.cube);
    const o = new Ui(2, 32, 32), c = new Ri();
    this.sphere = new it(o, c), this.sphere.position.x = 6, this.scene.add(this.sphere);
    const l = new zs(this.camera, this.renderer.domElement);
    l.enablePan = !1;
    const h = 1;
    this.postCamera = new Ls(-h, h, h, -h, 0.1, 1e3), this.postScene = new Os(), this.postCamera.position.z = 10, this.postScene.add(this.postCamera);
    const u = new hi(h * 2, h * 2);
    this.renderTarget = new Jt(n, i);
    const d = new it(u, new Wt({
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
    this.postScene.add(d), this.render();
  }
}
const of = "data:image/gif;base64,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";
class uf extends Oi {
  constructor(t) {
    super(t);
    Oe(this, "clock", new ks());
    Oe(this, "postCamera");
    Oe(this, "postScene");
    Oe(this, "renderTarget");
    Oe(this, "cube");
    Oe(this, "sphere");
    Oe(this, "render", () => {
      requestAnimationFrame(this.render), this.renderer.setRenderTarget(this.renderTarget), this.renderer.render(this.scene, this.camera), this.renderer.setRenderTarget(null), this.renderer.render(this.postScene, this.postCamera), this.cube.rotation.y = this.clock.getElapsedTime(), this.sphere.position.x = -Math.sin(this.clock.getElapsedTime()) * 6, this.sphere.position.z = Math.cos(this.clock.getElapsedTime()) * 6;
    });
    const { width: n, height: i } = this.getDomSize(), s = new tf().load(of), a = new sn(5, 5, 5), o = new Fs({ map: s });
    this.cube = new it(a, o), this.scene.add(this.cube);
    const c = new Ui(2, 32, 32), l = new Ri();
    this.sphere = new it(c, l), this.sphere.position.x = 3, this.scene.add(this.sphere);
    const h = new zs(this.camera, this.renderer.domElement);
    h.enablePan = !1;
    const u = 1;
    this.postCamera = new Ls(-u, u, u, -u, 0.1, 1e3), this.postScene = new Os(), this.postCamera.position.z = 10, this.postScene.add(this.postCamera);
    const d = new hi(u * 2, u * 2);
    this.renderTarget = new Jt(n, i);
    const g = new it(d, new Wt({
      uniforms: {
        tDiffuse: { value: this.renderTarget.texture },
        uThickness: { value: 0.01 },
        uColor: { value: new Fe(16720784) }
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
    this.postScene.add(g), this.render();
  }
}
export {
  lf as Demo,
  hf as RenderTarget,
  uf as RenderTargetOutline,
  cf as Test
};

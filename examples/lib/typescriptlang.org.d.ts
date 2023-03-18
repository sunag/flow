/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
declare const REVISION = "150dev";
declare const MOUSE: {
    LEFT: number;
    MIDDLE: number;
    RIGHT: number;
    ROTATE: number;
    DOLLY: number;
    PAN: number;
};
declare const TOUCH: {
    ROTATE: number;
    PAN: number;
    DOLLY_PAN: number;
    DOLLY_ROTATE: number;
};
declare const CullFaceNone = 0;
declare const CullFaceBack = 1;
declare const CullFaceFront = 2;
declare const CullFaceFrontBack = 3;
declare const BasicShadowMap = 0;
declare const PCFShadowMap = 1;
declare const PCFSoftShadowMap = 2;
declare const VSMShadowMap = 3;
declare const FrontSide = 0;
declare const BackSide = 1;
declare const DoubleSide = 2;
declare const TwoPassDoubleSide = 2;
declare const NoBlending = 0;
declare const NormalBlending = 1;
declare const AdditiveBlending = 2;
declare const SubtractiveBlending = 3;
declare const MultiplyBlending = 4;
declare const CustomBlending = 5;
declare const AddEquation = 100;
declare const SubtractEquation = 101;
declare const ReverseSubtractEquation = 102;
declare const MinEquation = 103;
declare const MaxEquation = 104;
declare const ZeroFactor = 200;
declare const OneFactor = 201;
declare const SrcColorFactor = 202;
declare const OneMinusSrcColorFactor = 203;
declare const SrcAlphaFactor = 204;
declare const OneMinusSrcAlphaFactor = 205;
declare const DstAlphaFactor = 206;
declare const OneMinusDstAlphaFactor = 207;
declare const DstColorFactor = 208;
declare const OneMinusDstColorFactor = 209;
declare const SrcAlphaSaturateFactor = 210;
declare const NeverDepth = 0;
declare const AlwaysDepth = 1;
declare const LessDepth = 2;
declare const LessEqualDepth = 3;
declare const EqualDepth = 4;
declare const GreaterEqualDepth = 5;
declare const GreaterDepth = 6;
declare const NotEqualDepth = 7;
declare const MultiplyOperation = 0;
declare const MixOperation = 1;
declare const AddOperation = 2;
declare const NoToneMapping = 0;
declare const LinearToneMapping = 1;
declare const ReinhardToneMapping = 2;
declare const CineonToneMapping = 3;
declare const ACESFilmicToneMapping = 4;
declare const CustomToneMapping = 5;
declare const UVMapping = 300;
declare const CubeReflectionMapping = 301;
declare const CubeRefractionMapping = 302;
declare const EquirectangularReflectionMapping = 303;
declare const EquirectangularRefractionMapping = 304;
declare const CubeUVReflectionMapping = 306;
declare const RepeatWrapping = 1000;
declare const ClampToEdgeWrapping = 1001;
declare const MirroredRepeatWrapping = 1002;
declare const NearestFilter = 1003;
declare const NearestMipmapNearestFilter = 1004;
declare const NearestMipMapNearestFilter = 1004;
declare const NearestMipmapLinearFilter = 1005;
declare const NearestMipMapLinearFilter = 1005;
declare const LinearFilter = 1006;
declare const LinearMipmapNearestFilter = 1007;
declare const LinearMipMapNearestFilter = 1007;
declare const LinearMipmapLinearFilter = 1008;
declare const LinearMipMapLinearFilter = 1008;
declare const UnsignedByteType = 1009;
declare const ByteType = 1010;
declare const ShortType = 1011;
declare const UnsignedShortType = 1012;
declare const IntType = 1013;
declare const UnsignedIntType = 1014;
declare const FloatType = 1015;
declare const HalfFloatType = 1016;
declare const UnsignedShort4444Type = 1017;
declare const UnsignedShort5551Type = 1018;
declare const UnsignedInt248Type = 1020;
declare const AlphaFormat = 1021;
declare const RGBAFormat = 1023;
declare const LuminanceFormat = 1024;
declare const LuminanceAlphaFormat = 1025;
declare const DepthFormat = 1026;
declare const DepthStencilFormat = 1027;
declare const RedFormat = 1028;
declare const RedIntegerFormat = 1029;
declare const RGFormat = 1030;
declare const RGIntegerFormat = 1031;
declare const RGBAIntegerFormat = 1033;
declare const RGB_S3TC_DXT1_Format = 33776;
declare const RGBA_S3TC_DXT1_Format = 33777;
declare const RGBA_S3TC_DXT3_Format = 33778;
declare const RGBA_S3TC_DXT5_Format = 33779;
declare const RGB_PVRTC_4BPPV1_Format = 35840;
declare const RGB_PVRTC_2BPPV1_Format = 35841;
declare const RGBA_PVRTC_4BPPV1_Format = 35842;
declare const RGBA_PVRTC_2BPPV1_Format = 35843;
declare const RGB_ETC1_Format = 36196;
declare const RGB_ETC2_Format = 37492;
declare const RGBA_ETC2_EAC_Format = 37496;
declare const RGBA_ASTC_4x4_Format = 37808;
declare const RGBA_ASTC_5x4_Format = 37809;
declare const RGBA_ASTC_5x5_Format = 37810;
declare const RGBA_ASTC_6x5_Format = 37811;
declare const RGBA_ASTC_6x6_Format = 37812;
declare const RGBA_ASTC_8x5_Format = 37813;
declare const RGBA_ASTC_8x6_Format = 37814;
declare const RGBA_ASTC_8x8_Format = 37815;
declare const RGBA_ASTC_10x5_Format = 37816;
declare const RGBA_ASTC_10x6_Format = 37817;
declare const RGBA_ASTC_10x8_Format = 37818;
declare const RGBA_ASTC_10x10_Format = 37819;
declare const RGBA_ASTC_12x10_Format = 37820;
declare const RGBA_ASTC_12x12_Format = 37821;
declare const RGBA_BPTC_Format = 36492;
declare const RED_RGTC1_Format = 36283;
declare const SIGNED_RED_RGTC1_Format = 36284;
declare const RED_GREEN_RGTC2_Format = 36285;
declare const SIGNED_RED_GREEN_RGTC2_Format = 36286;
declare const LoopOnce = 2200;
declare const LoopRepeat = 2201;
declare const LoopPingPong = 2202;
declare const InterpolateDiscrete = 2300;
declare const InterpolateLinear = 2301;
declare const InterpolateSmooth = 2302;
declare const ZeroCurvatureEnding = 2400;
declare const ZeroSlopeEnding = 2401;
declare const WrapAroundEnding = 2402;
declare const NormalAnimationBlendMode = 2500;
declare const AdditiveAnimationBlendMode = 2501;
declare const TrianglesDrawMode = 0;
declare const TriangleStripDrawMode = 1;
declare const TriangleFanDrawMode = 2;
declare const LinearEncoding = 3000;
declare const sRGBEncoding = 3001;
declare const BasicDepthPacking = 3200;
declare const RGBADepthPacking = 3201;
declare const TangentSpaceNormalMap = 0;
declare const ObjectSpaceNormalMap = 1;
declare const NoColorSpace = "";
declare const SRGBColorSpace = "srgb";
declare const LinearSRGBColorSpace = "srgb-linear";
declare const ZeroStencilOp = 0;
declare const KeepStencilOp = 7680;
declare const ReplaceStencilOp = 7681;
declare const IncrementStencilOp = 7682;
declare const DecrementStencilOp = 7683;
declare const IncrementWrapStencilOp = 34055;
declare const DecrementWrapStencilOp = 34056;
declare const InvertStencilOp = 5386;
declare const NeverStencilFunc = 512;
declare const LessStencilFunc = 513;
declare const EqualStencilFunc = 514;
declare const LessEqualStencilFunc = 515;
declare const GreaterStencilFunc = 516;
declare const NotEqualStencilFunc = 517;
declare const GreaterEqualStencilFunc = 518;
declare const AlwaysStencilFunc = 519;
declare const StaticDrawUsage = 35044;
declare const DynamicDrawUsage = 35048;
declare const StreamDrawUsage = 35040;
declare const StaticReadUsage = 35045;
declare const DynamicReadUsage = 35049;
declare const StreamReadUsage = 35041;
declare const StaticCopyUsage = 35046;
declare const DynamicCopyUsage = 35050;
declare const StreamCopyUsage = 35042;
declare const GLSL1 = "100";
declare const GLSL3 = "300 es";
declare const _SRGBAFormat = 1035;
/**
 * https://github.com/mrdoob/eventdispatcher.js/
 */
declare class EventDispatcher {
    addEventListener(type: any, listener: any): void;
    hasEventListener(type: any, listener: any): boolean;
    removeEventListener(type: any, listener: any): void;
    dispatchEvent(event: any): void;
}
declare function generateUUID(): string;
declare function clamp(value: any, min: any, max: any): number;
declare function euclideanModulo(n: any, m: any): number;
declare function mapLinear(x: any, a1: any, a2: any, b1: any, b2: any): any;
declare function inverseLerp(x: any, y: any, value: any): number;
declare function lerp(x: any, y: any, t: any): number;
declare function damp(x: any, y: any, lambda: any, dt: any): number;
declare function pingpong(x: any, length?: number): number;
declare function smoothstep(x: any, min: any, max: any): number;
declare function smootherstep(x: any, min: any, max: any): number;
declare function randInt(low: any, high: any): any;
declare function randFloat(low: any, high: any): any;
declare function randFloatSpread(range: any): number;
declare function seededRandom(s: any): number;
declare function degToRad(degrees: any): number;
declare function radToDeg(radians: any): number;
declare function isPowerOfTwo(value: any): boolean;
declare function ceilPowerOfTwo(value: any): number;
declare function floorPowerOfTwo(value: any): number;
declare function setQuaternionFromProperEuler(q: any, a: any, b: any, c: any, order: any): void;
declare function denormalize(value: any, array: any): any;
declare function normalize(value: any, array: any): any;
declare var MathUtils: Readonly<{
    __proto__: null;
    DEG2RAD: number;
    RAD2DEG: number;
    ceilPowerOfTwo: typeof ceilPowerOfTwo;
    clamp: typeof clamp;
    damp: typeof damp;
    degToRad: typeof degToRad;
    denormalize: typeof denormalize;
    euclideanModulo: typeof euclideanModulo;
    floorPowerOfTwo: typeof floorPowerOfTwo;
    generateUUID: typeof generateUUID;
    inverseLerp: typeof inverseLerp;
    isPowerOfTwo: typeof isPowerOfTwo;
    lerp: typeof lerp;
    mapLinear: typeof mapLinear;
    normalize: typeof normalize;
    pingpong: typeof pingpong;
    radToDeg: typeof radToDeg;
    randFloat: typeof randFloat;
    randFloatSpread: typeof randFloatSpread;
    randInt: typeof randInt;
    seededRandom: typeof seededRandom;
    setQuaternionFromProperEuler: typeof setQuaternionFromProperEuler;
    smootherstep: typeof smootherstep;
    smoothstep: typeof smoothstep;
}>;
declare class Vector2 {
    constructor(x?: number, y?: number);
    get width(): any;
    set width(value: any);
    get height(): any;
    set height(value: any);
    set(x: any, y: any): this;
    setScalar(scalar: any): this;
    setX(x: any): this;
    setY(y: any): this;
    setComponent(index: any, value: any): this;
    getComponent(index: any): any;
    clone(): any;
    copy(v: any): this;
    add(v: any): this;
    addScalar(s: any): this;
    addVectors(a: any, b: any): this;
    addScaledVector(v: any, s: any): this;
    sub(v: any): this;
    subScalar(s: any): this;
    subVectors(a: any, b: any): this;
    multiply(v: any): this;
    multiplyScalar(scalar: any): this;
    divide(v: any): this;
    divideScalar(scalar: any): this;
    applyMatrix3(m: any): this;
    min(v: any): this;
    max(v: any): this;
    clamp(min: any, max: any): this;
    clampScalar(minVal: any, maxVal: any): this;
    clampLength(min: any, max: any): this;
    floor(): this;
    ceil(): this;
    round(): this;
    roundToZero(): this;
    negate(): this;
    dot(v: any): number;
    cross(v: any): number;
    lengthSq(): number;
    length(): number;
    manhattanLength(): number;
    normalize(): this;
    angle(): number;
    distanceTo(v: any): number;
    distanceToSquared(v: any): number;
    manhattanDistanceTo(v: any): number;
    setLength(length: any): this;
    lerp(v: any, alpha: any): this;
    lerpVectors(v1: any, v2: any, alpha: any): this;
    equals(v: any): boolean;
    fromArray(array: any, offset?: number): this;
    toArray(array?: never[], offset?: number): never[];
    fromBufferAttribute(attribute: any, index: any): this;
    rotateAround(center: any, angle: any): this;
    random(): this;
    [Symbol.iterator](): Generator<any, void, unknown>;
}
declare class Matrix3 {
    constructor();
    set(n11: any, n12: any, n13: any, n21: any, n22: any, n23: any, n31: any, n32: any, n33: any): this;
    identity(): this;
    copy(m: any): this;
    extractBasis(xAxis: any, yAxis: any, zAxis: any): this;
    setFromMatrix4(m: any): this;
    multiply(m: any): this;
    premultiply(m: any): this;
    multiplyMatrices(a: any, b: any): this;
    multiplyScalar(s: any): this;
    determinant(): number;
    invert(): this;
    transpose(): this;
    getNormalMatrix(matrix4: any): this;
    transposeIntoArray(r: any): this;
    setUvTransform(tx: any, ty: any, sx: any, sy: any, rotation: any, cx: any, cy: any): this;
    scale(sx: any, sy: any): this;
    rotate(theta: any): this;
    translate(tx: any, ty: any): this;
    makeTranslation(x: any, y: any): this;
    makeRotation(theta: any): this;
    makeScale(x: any, y: any): this;
    equals(matrix: any): boolean;
    fromArray(array: any, offset?: number): this;
    toArray(array?: never[], offset?: number): never[];
    clone(): any;
}
declare const ColorManagement: {
    enabled: boolean;
    legacyMode: boolean;
    workingColorSpace: string;
    convert: (color: any, sourceColorSpace: any, targetColorSpace: any) => any;
    fromWorkingColorSpace: (color: any, targetColorSpace: any) => any;
    toWorkingColorSpace: (color: any, sourceColorSpace: any) => any;
};
declare class Color {
    constructor(r: any, g: any, b: any);
    set(value: any): this;
    setScalar(scalar: any): this;
    setHex(hex: any, colorSpace?: string): this;
    setRGB(r: any, g: any, b: any, colorSpace?: string): this;
    setHSL(h: any, s: any, l: any, colorSpace?: string): this;
    setStyle(style: any, colorSpace?: string): this;
    setColorName(style: any, colorSpace?: string): this;
    clone(): any;
    copy(color: any): this;
    copySRGBToLinear(color: any): this;
    copyLinearToSRGB(color: any): this;
    convertSRGBToLinear(): this;
    convertLinearToSRGB(): this;
    getHex(colorSpace?: string): number;
    getHexString(colorSpace?: string): string;
    getHSL(target: any, colorSpace?: string): any;
    getRGB(target: any, colorSpace?: string): any;
    getStyle(colorSpace?: string): string;
    offsetHSL(h: any, s: any, l: any): this;
    add(color: any): this;
    addColors(color1: any, color2: any): this;
    addScalar(s: any): this;
    sub(color: any): this;
    multiply(color: any): this;
    multiplyScalar(s: any): this;
    lerp(color: any, alpha: any): this;
    lerpColors(color1: any, color2: any, alpha: any): this;
    lerpHSL(color: any, alpha: any): this;
    equals(c: any): boolean;
    fromArray(array: any, offset?: number): this;
    toArray(array?: never[], offset?: number): never[];
    fromBufferAttribute(attribute: any, index: any): this;
    toJSON(): number;
    [Symbol.iterator](): Generator<any, void, unknown>;
}
declare class ImageUtils {
    static getDataURL(image: any): any;
    static sRGBToLinear(image: any): any;
}
declare class Source {
    constructor(data?: null);
    set needsUpdate(value: any);
    toJSON(meta: any): any;
}
declare class Texture extends EventDispatcher {
    constructor(image?: any, mapping?: any, wrapS?: number, wrapT?: number, magFilter?: number, minFilter?: number, format?: number, type?: number, anisotropy?: any, encoding?: number);
    get image(): any;
    set image(value: any);
    updateMatrix(): void;
    clone(): any;
    copy(source: any): this;
    toJSON(meta: any): any;
    dispose(): void;
    transformUv(uv: any): any;
    set needsUpdate(value: any);
}
declare class Vector4 {
    constructor(x?: number, y?: number, z?: number, w?: number);
    get width(): any;
    set width(value: any);
    get height(): any;
    set height(value: any);
    set(x: any, y: any, z: any, w: any): this;
    setScalar(scalar: any): this;
    setX(x: any): this;
    setY(y: any): this;
    setZ(z: any): this;
    setW(w: any): this;
    setComponent(index: any, value: any): this;
    getComponent(index: any): any;
    clone(): any;
    copy(v: any): this;
    add(v: any): this;
    addScalar(s: any): this;
    addVectors(a: any, b: any): this;
    addScaledVector(v: any, s: any): this;
    sub(v: any): this;
    subScalar(s: any): this;
    subVectors(a: any, b: any): this;
    multiply(v: any): this;
    multiplyScalar(scalar: any): this;
    applyMatrix4(m: any): this;
    divideScalar(scalar: any): this;
    setAxisAngleFromQuaternion(q: any): this;
    setAxisAngleFromRotationMatrix(m: any): this;
    min(v: any): this;
    max(v: any): this;
    clamp(min: any, max: any): this;
    clampScalar(minVal: any, maxVal: any): this;
    clampLength(min: any, max: any): this;
    floor(): this;
    ceil(): this;
    round(): this;
    roundToZero(): this;
    negate(): this;
    dot(v: any): number;
    lengthSq(): number;
    length(): number;
    manhattanLength(): number;
    normalize(): this;
    setLength(length: any): this;
    lerp(v: any, alpha: any): this;
    lerpVectors(v1: any, v2: any, alpha: any): this;
    equals(v: any): boolean;
    fromArray(array: any, offset?: number): this;
    toArray(array?: never[], offset?: number): never[];
    fromBufferAttribute(attribute: any, index: any): this;
    random(): this;
    [Symbol.iterator](): Generator<any, void, unknown>;
}
declare class WebGLRenderTarget extends EventDispatcher {
    constructor(width?: number, height?: number, options?: {});
    setSize(width: any, height: any, depth?: number): void;
    clone(): any;
    copy(source: any): this;
    dispose(): void;
}
declare class DataArrayTexture extends Texture {
    constructor(data?: null, width?: number, height?: number, depth?: number);
}
declare class WebGLArrayRenderTarget extends WebGLRenderTarget {
    constructor(width?: number, height?: number, depth?: number);
}
declare class Data3DTexture extends Texture {
    constructor(data?: null, width?: number, height?: number, depth?: number);
}
declare class WebGL3DRenderTarget extends WebGLRenderTarget {
    constructor(width?: number, height?: number, depth?: number);
}
declare class WebGLMultipleRenderTargets extends WebGLRenderTarget {
    constructor(width?: number, height?: number, count?: number, options?: {});
    setSize(width: any, height: any, depth?: number): this;
    copy(source: any): this;
}
declare class Quaternion {
    constructor(x?: number, y?: number, z?: number, w?: number);
    static slerpFlat(dst: any, dstOffset: any, src0: any, srcOffset0: any, src1: any, srcOffset1: any, t: any): void;
    static multiplyQuaternionsFlat(dst: any, dstOffset: any, src0: any, srcOffset0: any, src1: any, srcOffset1: any): any;
    get x(): any;
    set x(value: any);
    get y(): any;
    set y(value: any);
    get z(): any;
    set z(value: any);
    get w(): any;
    set w(value: any);
    set(x: any, y: any, z: any, w: any): this;
    clone(): any;
    copy(quaternion: any): this;
    setFromEuler(euler: any, update: any): this;
    setFromAxisAngle(axis: any, angle: any): this;
    setFromRotationMatrix(m: any): this;
    setFromUnitVectors(vFrom: any, vTo: any): this;
    angleTo(q: any): number;
    rotateTowards(q: any, step: any): this;
    identity(): this;
    invert(): this;
    conjugate(): this;
    dot(v: any): number;
    lengthSq(): number;
    length(): number;
    normalize(): this;
    multiply(q: any): this;
    premultiply(q: any): this;
    multiplyQuaternions(a: any, b: any): this;
    slerp(qb: any, t: any): this;
    slerpQuaternions(qa: any, qb: any, t: any): this;
    random(): this;
    equals(quaternion: any): boolean;
    fromArray(array: any, offset?: number): this;
    toArray(array?: never[], offset?: number): never[];
    fromBufferAttribute(attribute: any, index: any): this;
    _onChange(callback: any): this;
    _onChangeCallback(): void;
    [Symbol.iterator](): Generator<any, void, unknown>;
}
declare class Vector3 {
    constructor(x?: number, y?: number, z?: number);
    set(x: any, y: any, z: any): this;
    setScalar(scalar: any): this;
    setX(x: any): this;
    setY(y: any): this;
    setZ(z: any): this;
    setComponent(index: any, value: any): this;
    getComponent(index: any): any;
    clone(): any;
    copy(v: any): this;
    add(v: any): this;
    addScalar(s: any): this;
    addVectors(a: any, b: any): this;
    addScaledVector(v: any, s: any): this;
    sub(v: any): this;
    subScalar(s: any): this;
    subVectors(a: any, b: any): this;
    multiply(v: any): this;
    multiplyScalar(scalar: any): this;
    multiplyVectors(a: any, b: any): this;
    applyEuler(euler: any): this;
    applyAxisAngle(axis: any, angle: any): this;
    applyMatrix3(m: any): this;
    applyNormalMatrix(m: any): this;
    applyMatrix4(m: any): this;
    applyQuaternion(q: any): this;
    project(camera: any): this;
    unproject(camera: any): this;
    transformDirection(m: any): this;
    divide(v: any): this;
    divideScalar(scalar: any): this;
    min(v: any): this;
    max(v: any): this;
    clamp(min: any, max: any): this;
    clampScalar(minVal: any, maxVal: any): this;
    clampLength(min: any, max: any): this;
    floor(): this;
    ceil(): this;
    round(): this;
    roundToZero(): this;
    negate(): this;
    dot(v: any): number;
    lengthSq(): number;
    length(): number;
    manhattanLength(): number;
    normalize(): this;
    setLength(length: any): this;
    lerp(v: any, alpha: any): this;
    lerpVectors(v1: any, v2: any, alpha: any): this;
    cross(v: any): this;
    crossVectors(a: any, b: any): this;
    projectOnVector(v: any): this;
    projectOnPlane(planeNormal: any): this;
    reflect(normal: any): this;
    angleTo(v: any): number;
    distanceTo(v: any): number;
    distanceToSquared(v: any): number;
    manhattanDistanceTo(v: any): number;
    setFromSpherical(s: any): this;
    setFromSphericalCoords(radius: any, phi: any, theta: any): this;
    setFromCylindrical(c: any): this;
    setFromCylindricalCoords(radius: any, theta: any, y: any): this;
    setFromMatrixPosition(m: any): this;
    setFromMatrixScale(m: any): this;
    setFromMatrixColumn(m: any, index: any): this;
    setFromMatrix3Column(m: any, index: any): this;
    setFromEuler(e: any): this;
    equals(v: any): boolean;
    fromArray(array: any, offset?: number): this;
    toArray(array?: never[], offset?: number): never[];
    fromBufferAttribute(attribute: any, index: any): this;
    random(): this;
    randomDirection(): this;
    [Symbol.iterator](): Generator<any, void, unknown>;
}
declare class Box3 {
    constructor(min?: Vector3, max?: Vector3);
    set(min: any, max: any): this;
    setFromArray(array: any): this;
    setFromBufferAttribute(attribute: any): this;
    setFromPoints(points: any): this;
    setFromCenterAndSize(center: any, size: any): this;
    setFromObject(object: any, precise?: boolean): this;
    clone(): any;
    copy(box: any): this;
    makeEmpty(): this;
    isEmpty(): boolean;
    getCenter(target: any): any;
    getSize(target: any): any;
    expandByPoint(point: any): this;
    expandByVector(vector: any): this;
    expandByScalar(scalar: any): this;
    expandByObject(object: any, precise?: boolean): this;
    containsPoint(point: any): boolean;
    containsBox(box: any): boolean;
    getParameter(point: any, target: any): any;
    intersectsBox(box: any): boolean;
    intersectsSphere(sphere: any): boolean;
    intersectsPlane(plane: any): boolean;
    intersectsTriangle(triangle: any): boolean;
    clampPoint(point: any, target: any): any;
    distanceToPoint(point: any): number;
    getBoundingSphere(target: any): any;
    intersect(box: any): this;
    union(box: any): this;
    applyMatrix4(matrix: any): this;
    translate(offset: any): this;
    equals(box: any): any;
}
declare class Sphere {
    constructor(center?: Vector3, radius?: number);
    set(center: any, radius: any): this;
    setFromPoints(points: any, optionalCenter: any): this;
    copy(sphere: any): this;
    isEmpty(): boolean;
    makeEmpty(): this;
    containsPoint(point: any): boolean;
    distanceToPoint(point: any): number;
    intersectsSphere(sphere: any): boolean;
    intersectsBox(box: any): any;
    intersectsPlane(plane: any): boolean;
    clampPoint(point: any, target: any): any;
    getBoundingBox(target: any): any;
    applyMatrix4(matrix: any): this;
    translate(offset: any): this;
    expandByPoint(point: any): this;
    union(sphere: any): this;
    equals(sphere: any): any;
    clone(): any;
}
declare class Ray {
    constructor(origin?: Vector3, direction?: Vector3);
    set(origin: any, direction: any): this;
    copy(ray: any): this;
    at(t: any, target: any): any;
    lookAt(v: any): this;
    recast(t: any): this;
    closestPointToPoint(point: any, target: any): any;
    distanceToPoint(point: any): number;
    distanceSqToPoint(point: any): any;
    distanceSqToSegment(v0: any, v1: any, optionalPointOnRay: any, optionalPointOnSegment: any): number;
    intersectSphere(sphere: any, target: any): any;
    intersectsSphere(sphere: any): boolean;
    distanceToPlane(plane: any): number | null;
    intersectPlane(plane: any, target: any): any;
    intersectsPlane(plane: any): boolean;
    intersectBox(box: any, target: any): any;
    intersectsBox(box: any): boolean;
    intersectTriangle(a: any, b: any, c: any, backfaceCulling: any, target: any): any;
    applyMatrix4(matrix4: any): this;
    equals(ray: any): any;
    clone(): any;
}
declare class Matrix4 {
    constructor();
    set(n11: any, n12: any, n13: any, n14: any, n21: any, n22: any, n23: any, n24: any, n31: any, n32: any, n33: any, n34: any, n41: any, n42: any, n43: any, n44: any): this;
    identity(): this;
    clone(): Matrix4;
    copy(m: any): this;
    copyPosition(m: any): this;
    setFromMatrix3(m: any): this;
    extractBasis(xAxis: any, yAxis: any, zAxis: any): this;
    makeBasis(xAxis: any, yAxis: any, zAxis: any): this;
    extractRotation(m: any): this;
    makeRotationFromEuler(euler: any): this;
    makeRotationFromQuaternion(q: any): this;
    lookAt(eye: any, target: any, up: any): this;
    multiply(m: any): this;
    premultiply(m: any): this;
    multiplyMatrices(a: any, b: any): this;
    multiplyScalar(s: any): this;
    determinant(): number;
    transpose(): this;
    setPosition(x: any, y: any, z: any): this;
    invert(): this;
    scale(v: any): this;
    getMaxScaleOnAxis(): number;
    makeTranslation(x: any, y: any, z: any): this;
    makeRotationX(theta: any): this;
    makeRotationY(theta: any): this;
    makeRotationZ(theta: any): this;
    makeRotationAxis(axis: any, angle: any): this;
    makeScale(x: any, y: any, z: any): this;
    makeShear(xy: any, xz: any, yx: any, yz: any, zx: any, zy: any): this;
    compose(position: any, quaternion: any, scale: any): this;
    decompose(position: any, quaternion: any, scale: any): this;
    makePerspective(left: any, right: any, top: any, bottom: any, near: any, far: any): this;
    makeOrthographic(left: any, right: any, top: any, bottom: any, near: any, far: any): this;
    equals(matrix: any): boolean;
    fromArray(array: any, offset?: number): this;
    toArray(array?: never[], offset?: number): never[];
}
declare class Euler {
    constructor(x?: number, y?: number, z?: number, order?: any);
    get x(): any;
    set x(value: any);
    get y(): any;
    set y(value: any);
    get z(): any;
    set z(value: any);
    get order(): any;
    set order(value: any);
    set(x: any, y: any, z: any, order?: any): this;
    clone(): any;
    copy(euler: any): this;
    setFromRotationMatrix(m: any, order?: any, update?: boolean): this;
    setFromQuaternion(q: any, order: any, update: any): this;
    setFromVector3(v: any, order?: any): this;
    reorder(newOrder: any): this;
    equals(euler: any): boolean;
    fromArray(array: any): this;
    toArray(array?: never[], offset?: number): never[];
    _onChange(callback: any): this;
    _onChangeCallback(): void;
    [Symbol.iterator](): Generator<any, void, unknown>;
}
declare class Layers {
    constructor();
    set(channel: any): void;
    enable(channel: any): void;
    enableAll(): void;
    toggle(channel: any): void;
    disable(channel: any): void;
    disableAll(): void;
    test(layers: any): boolean;
    isEnabled(channel: any): boolean;
}
declare class Object3D extends EventDispatcher {
    constructor();
    onBeforeRender(): void;
    onAfterRender(): void;
    applyMatrix4(matrix: any): void;
    applyQuaternion(q: any): this;
    setRotationFromAxisAngle(axis: any, angle: any): void;
    setRotationFromEuler(euler: any): void;
    setRotationFromMatrix(m: any): void;
    setRotationFromQuaternion(q: any): void;
    rotateOnAxis(axis: any, angle: any): this;
    rotateOnWorldAxis(axis: any, angle: any): this;
    rotateX(angle: any): this;
    rotateY(angle: any): this;
    rotateZ(angle: any): this;
    translateOnAxis(axis: any, distance: any): this;
    translateX(distance: any): this;
    translateY(distance: any): this;
    translateZ(distance: any): this;
    localToWorld(vector: any): any;
    worldToLocal(vector: any): any;
    lookAt(x: any, y: any, z: any): void;
    add(object: any): this;
    remove(object: any): this;
    removeFromParent(): this;
    clear(): this;
    attach(object: any): this;
    getObjectById(id: any): any;
    getObjectByName(name: any): any;
    getObjectByProperty(name: any, value: any): any;
    getObjectsByProperty(name: any, value: any): this[];
    getWorldPosition(target: any): any;
    getWorldQuaternion(target: any): any;
    getWorldScale(target: any): any;
    getWorldDirection(target: any): any;
    raycast(): void;
    traverse(callback: any): void;
    traverseVisible(callback: any): void;
    traverseAncestors(callback: any): void;
    updateMatrix(): void;
    updateMatrixWorld(force: any): void;
    updateWorldMatrix(updateParents: any, updateChildren: any): void;
    toJSON(meta: any): {};
    clone(recursive: any): any;
    copy(source: any, recursive?: boolean): this;
}
declare class Triangle {
    constructor(a?: Vector3, b?: Vector3, c?: Vector3);
    static getNormal(a: any, b: any, c: any, target: any): any;
    static getBarycoord(point: any, a: any, b: any, c: any, target: any): any;
    static containsPoint(point: any, a: any, b: any, c: any): boolean;
    static getUV(point: any, p1: any, p2: any, p3: any, uv1: any, uv2: any, uv3: any, target: any): any;
    static isFrontFacing(a: any, b: any, c: any, direction: any): boolean;
    set(a: any, b: any, c: any): this;
    setFromPointsAndIndices(points: any, i0: any, i1: any, i2: any): this;
    setFromAttributeAndIndices(attribute: any, i0: any, i1: any, i2: any): this;
    clone(): any;
    copy(triangle: any): this;
    getArea(): number;
    getMidpoint(target: any): any;
    getNormal(target: any): any;
    getPlane(target: any): any;
    getBarycoord(point: any, target: any): any;
    getUV(point: any, uv1: any, uv2: any, uv3: any, target: any): any;
    containsPoint(point: any): boolean;
    isFrontFacing(direction: any): boolean;
    intersectsBox(box: any): any;
    closestPointToPoint(p: any, target: any): any;
    equals(triangle: any): any;
}
declare class Material extends EventDispatcher {
    constructor();
    get alphaTest(): any;
    set alphaTest(value: any);
    onBuild(): void;
    onBeforeRender(): void;
    onBeforeCompile(): void;
    customProgramCacheKey(): string;
    setValues(values: any): void;
    toJSON(meta: any): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
    };
    clone(): any;
    copy(source: any): this;
    dispose(): void;
    set needsUpdate(value: any);
}
declare class MeshBasicMaterial extends Material {
    constructor(parameters: any);
    copy(source: any): this;
}
declare class BufferAttribute {
    constructor(array: any, itemSize: any, normalized?: boolean);
    onUploadCallback(): void;
    set needsUpdate(value: any);
    setUsage(value: any): this;
    copy(source: any): this;
    copyAt(index1: any, attribute: any, index2: any): this;
    copyArray(array: any): this;
    applyMatrix3(m: any): this;
    applyMatrix4(m: any): this;
    applyNormalMatrix(m: any): this;
    transformDirection(m: any): this;
    set(value: any, offset?: number): this;
    getX(index: any): any;
    setX(index: any, x: any): this;
    getY(index: any): any;
    setY(index: any, y: any): this;
    getZ(index: any): any;
    setZ(index: any, z: any): this;
    getW(index: any): any;
    setW(index: any, w: any): this;
    setXY(index: any, x: any, y: any): this;
    setXYZ(index: any, x: any, y: any, z: any): this;
    setXYZW(index: any, x: any, y: any, z: any, w: any): this;
    onUpload(callback: any): this;
    clone(): any;
    toJSON(): {
        itemSize: any;
        type: any;
        array: unknown[];
        normalized: any;
    };
    copyColorsArray(): void;
    copyVector2sArray(): void;
    copyVector3sArray(): void;
    copyVector4sArray(): void;
}
declare class Int8BufferAttribute extends BufferAttribute {
    constructor(array: any, itemSize: any, normalized: any);
}
declare class Uint8BufferAttribute extends BufferAttribute {
    constructor(array: any, itemSize: any, normalized: any);
}
declare class Uint8ClampedBufferAttribute extends BufferAttribute {
    constructor(array: any, itemSize: any, normalized: any);
}
declare class Int16BufferAttribute extends BufferAttribute {
    constructor(array: any, itemSize: any, normalized: any);
}
declare class Uint16BufferAttribute extends BufferAttribute {
    constructor(array: any, itemSize: any, normalized: any);
}
declare class Int32BufferAttribute extends BufferAttribute {
    constructor(array: any, itemSize: any, normalized: any);
}
declare class Uint32BufferAttribute extends BufferAttribute {
    constructor(array: any, itemSize: any, normalized: any);
}
declare class Float16BufferAttribute extends BufferAttribute {
    constructor(array: any, itemSize: any, normalized: any);
}
declare class Float32BufferAttribute extends BufferAttribute {
    constructor(array: any, itemSize: any, normalized: any);
}
declare class Float64BufferAttribute extends BufferAttribute {
    constructor(array: any, itemSize: any, normalized: any);
}
declare class BufferGeometry extends EventDispatcher {
    constructor();
    getIndex(): any;
    setIndex(index: any): this;
    getAttribute(name: any): any;
    setAttribute(name: any, attribute: any): this;
    deleteAttribute(name: any): this;
    hasAttribute(name: any): boolean;
    addGroup(start: any, count: any, materialIndex?: number): void;
    clearGroups(): void;
    setDrawRange(start: any, count: any): void;
    applyMatrix4(matrix: any): this;
    applyQuaternion(q: any): this;
    rotateX(angle: any): this;
    rotateY(angle: any): this;
    rotateZ(angle: any): this;
    translate(x: any, y: any, z: any): this;
    scale(x: any, y: any, z: any): this;
    lookAt(vector: any): this;
    center(): this;
    setFromPoints(points: any): this;
    computeBoundingBox(): void;
    computeBoundingSphere(): void;
    computeTangents(): void;
    computeVertexNormals(): void;
    merge(): this;
    normalizeNormals(): void;
    toNonIndexed(): BufferGeometry;
    toJSON(): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
    };
    clone(): any;
    copy(source: any): this;
    dispose(): void;
}
declare class Mesh extends Object3D {
    constructor(geometry?: BufferGeometry, material?: MeshBasicMaterial);
    copy(source: any, recursive: any): this;
    updateMorphTargets(): void;
    getVertexPosition(index: any, target: any): any;
    raycast(raycaster: any, intersects: any): void;
}
declare class BoxGeometry extends BufferGeometry {
    constructor(width?: number, height?: number, depth?: number, widthSegments?: number, heightSegments?: number, depthSegments?: number);
    static fromJSON(data: any): BoxGeometry;
}
/**
 * Uniform Utilities
 */
declare function cloneUniforms(src: any): {};
declare function mergeUniforms(uniforms: any): {};
declare const UniformsUtils: {
    clone: typeof cloneUniforms;
    merge: typeof mergeUniforms;
};
declare class ShaderMaterial extends Material {
    constructor(parameters: any);
    copy(source: any): this;
    toJSON(meta: any): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
    };
}
declare class Camera extends Object3D {
    constructor();
    copy(source: any, recursive: any): this;
    getWorldDirection(target: any): any;
    updateMatrixWorld(force: any): void;
    updateWorldMatrix(updateParents: any, updateChildren: any): void;
    clone(): any;
}
declare class PerspectiveCamera extends Camera {
    constructor(fov?: number, aspect?: number, near?: number, far?: number);
    copy(source: any, recursive: any): this;
    /**
     * Sets the FOV by focal length in respect to the current .filmGauge.
     *
     * The default film gauge is 35, so that the focal length can be specified for
     * a 35mm (full frame) camera.
     *
     * Values for focal length and film gauge must have the same unit.
     */
    setFocalLength(focalLength: any): void;
    /**
     * Calculates the focal length from the current .fov and .filmGauge.
     */
    getFocalLength(): number;
    getEffectiveFOV(): number;
    getFilmWidth(): number;
    getFilmHeight(): number;
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
    setViewOffset(fullWidth: any, fullHeight: any, x: any, y: any, width: any, height: any): void;
    clearViewOffset(): void;
    updateProjectionMatrix(): void;
    toJSON(meta: any): {};
}
declare class CubeCamera extends Object3D {
    constructor(near: any, far: any, renderTarget: any);
    update(renderer: any, scene: any): void;
}
declare class CubeTexture extends Texture {
    constructor(images: any, mapping: any, wrapS: any, wrapT: any, magFilter: any, minFilter: any, format: any, type: any, anisotropy: any, encoding: any);
    get images(): any;
    set images(value: any);
}
declare class WebGLCubeRenderTarget extends WebGLRenderTarget {
    constructor(size?: number, options?: {});
    fromEquirectangularTexture(renderer: any, texture: any): this;
    clear(renderer: any, color: any, depth: any, stencil: any): void;
}
declare class Plane {
    constructor(normal?: Vector3, constant?: number);
    set(normal: any, constant: any): this;
    setComponents(x: any, y: any, z: any, w: any): this;
    setFromNormalAndCoplanarPoint(normal: any, point: any): this;
    setFromCoplanarPoints(a: any, b: any, c: any): this;
    copy(plane: any): this;
    normalize(): this;
    negate(): this;
    distanceToPoint(point: any): any;
    distanceToSphere(sphere: any): number;
    projectPoint(point: any, target: any): any;
    intersectLine(line: any, target: any): any;
    intersectsLine(line: any): boolean;
    intersectsBox(box: any): any;
    intersectsSphere(sphere: any): any;
    coplanarPoint(target: any): any;
    applyMatrix4(matrix: any, optionalNormalMatrix: any): this;
    translate(offset: any): this;
    equals(plane: any): any;
    clone(): any;
}
declare class Frustum {
    constructor(p0?: Plane, p1?: Plane, p2?: Plane, p3?: Plane, p4?: Plane, p5?: Plane);
    set(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): this;
    copy(frustum: any): this;
    setFromProjectionMatrix(m: any): this;
    intersectsObject(object: any): boolean;
    intersectsSprite(sprite: any): boolean;
    intersectsSphere(sphere: any): boolean;
    intersectsBox(box: any): boolean;
    containsPoint(point: any): boolean;
    clone(): any;
}
declare class PlaneGeometry extends BufferGeometry {
    constructor(width?: number, height?: number, widthSegments?: number, heightSegments?: number);
    static fromJSON(data: any): PlaneGeometry;
}
declare const ShaderChunk: {
    alphamap_fragment: string;
    alphamap_pars_fragment: string;
    alphatest_fragment: string;
    alphatest_pars_fragment: string;
    aomap_fragment: string;
    aomap_pars_fragment: string;
    begin_vertex: string;
    beginnormal_vertex: string;
    bsdfs: string;
    iridescence_fragment: string;
    bumpmap_pars_fragment: string;
    clipping_planes_fragment: string;
    clipping_planes_pars_fragment: string;
    clipping_planes_pars_vertex: string;
    clipping_planes_vertex: string;
    color_fragment: string;
    color_pars_fragment: string;
    color_pars_vertex: string;
    color_vertex: string;
    common: string;
    cube_uv_reflection_fragment: string;
    defaultnormal_vertex: string;
    displacementmap_pars_vertex: string;
    displacementmap_vertex: string;
    emissivemap_fragment: string;
    emissivemap_pars_fragment: string;
    encodings_fragment: string;
    encodings_pars_fragment: string;
    envmap_fragment: string;
    envmap_common_pars_fragment: string;
    envmap_pars_fragment: string;
    envmap_pars_vertex: string;
    envmap_physical_pars_fragment: string;
    envmap_vertex: string;
    fog_vertex: string;
    fog_pars_vertex: string;
    fog_fragment: string;
    fog_pars_fragment: string;
    gradientmap_pars_fragment: string;
    lightmap_fragment: string;
    lightmap_pars_fragment: string;
    lights_lambert_fragment: string;
    lights_lambert_pars_fragment: string;
    lights_pars_begin: string;
    lights_toon_fragment: string;
    lights_toon_pars_fragment: string;
    lights_phong_fragment: string;
    lights_phong_pars_fragment: string;
    lights_physical_fragment: string;
    lights_physical_pars_fragment: string;
    lights_fragment_begin: string;
    lights_fragment_maps: string;
    lights_fragment_end: string;
    logdepthbuf_fragment: string;
    logdepthbuf_pars_fragment: string;
    logdepthbuf_pars_vertex: string;
    logdepthbuf_vertex: string;
    map_fragment: string;
    map_pars_fragment: string;
    map_particle_fragment: string;
    map_particle_pars_fragment: string;
    metalnessmap_fragment: string;
    metalnessmap_pars_fragment: string;
    morphcolor_vertex: string;
    morphnormal_vertex: string;
    morphtarget_pars_vertex: string;
    morphtarget_vertex: string;
    normal_fragment_begin: string;
    normal_fragment_maps: string;
    normal_pars_fragment: string;
    normal_pars_vertex: string;
    normal_vertex: string;
    normalmap_pars_fragment: string;
    clearcoat_normal_fragment_begin: string;
    clearcoat_normal_fragment_maps: string;
    clearcoat_pars_fragment: string;
    iridescence_pars_fragment: string;
    output_fragment: string;
    packing: string;
    premultiplied_alpha_fragment: string;
    project_vertex: string;
    dithering_fragment: string;
    dithering_pars_fragment: string;
    roughnessmap_fragment: string;
    roughnessmap_pars_fragment: string;
    shadowmap_pars_fragment: string;
    shadowmap_pars_vertex: string;
    shadowmap_vertex: string;
    shadowmask_pars_fragment: string;
    skinbase_vertex: string;
    skinning_pars_vertex: string;
    skinning_vertex: string;
    skinnormal_vertex: string;
    specularmap_fragment: string;
    specularmap_pars_fragment: string;
    tonemapping_fragment: string;
    tonemapping_pars_fragment: string;
    transmission_fragment: string;
    transmission_pars_fragment: string;
    uv_pars_fragment: string;
    uv_pars_vertex: string;
    uv_vertex: string;
    uv2_pars_fragment: string;
    uv2_pars_vertex: string;
    uv2_vertex: string;
    worldpos_vertex: string;
    background_vert: string;
    background_frag: string;
    backgroundCube_vert: string;
    backgroundCube_frag: string;
    cube_vert: string;
    cube_frag: string;
    depth_vert: string;
    depth_frag: string;
    distanceRGBA_vert: string;
    distanceRGBA_frag: string;
    equirect_vert: string;
    equirect_frag: string;
    linedashed_vert: string;
    linedashed_frag: string;
    meshbasic_vert: string;
    meshbasic_frag: string;
    meshlambert_vert: string;
    meshlambert_frag: string;
    meshmatcap_vert: string;
    meshmatcap_frag: string;
    meshnormal_vert: string;
    meshnormal_frag: string;
    meshphong_vert: string;
    meshphong_frag: string;
    meshphysical_vert: string;
    meshphysical_frag: string;
    meshtoon_vert: string;
    meshtoon_frag: string;
    points_vert: string;
    points_frag: string;
    shadow_vert: string;
    shadow_frag: string;
    sprite_vert: string;
    sprite_frag: string;
};
/**
 * Uniforms library for shared webgl shaders
 */
declare const UniformsLib: {
    common: {
        diffuse: {
            value: Color;
        };
        opacity: {
            value: number;
        };
        map: {
            value: null;
        };
        uvTransform: {
            value: Matrix3;
        };
        uv2Transform: {
            value: Matrix3;
        };
        alphaMap: {
            value: null;
        };
        alphaTest: {
            value: number;
        };
    };
    specularmap: {
        specularMap: {
            value: null;
        };
    };
    envmap: {
        envMap: {
            value: null;
        };
        flipEnvMap: {
            value: number;
        };
        reflectivity: {
            value: number;
        };
        ior: {
            value: number;
        };
        refractionRatio: {
            value: number;
        };
    };
    aomap: {
        aoMap: {
            value: null;
        };
        aoMapIntensity: {
            value: number;
        };
    };
    lightmap: {
        lightMap: {
            value: null;
        };
        lightMapIntensity: {
            value: number;
        };
    };
    emissivemap: {
        emissiveMap: {
            value: null;
        };
    };
    bumpmap: {
        bumpMap: {
            value: null;
        };
        bumpScale: {
            value: number;
        };
    };
    normalmap: {
        normalMap: {
            value: null;
        };
        normalScale: {
            value: Vector2;
        };
    };
    displacementmap: {
        displacementMap: {
            value: null;
        };
        displacementScale: {
            value: number;
        };
        displacementBias: {
            value: number;
        };
    };
    roughnessmap: {
        roughnessMap: {
            value: null;
        };
    };
    metalnessmap: {
        metalnessMap: {
            value: null;
        };
    };
    gradientmap: {
        gradientMap: {
            value: null;
        };
    };
    fog: {
        fogDensity: {
            value: number;
        };
        fogNear: {
            value: number;
        };
        fogFar: {
            value: number;
        };
        fogColor: {
            value: Color;
        };
    };
    lights: {
        ambientLightColor: {
            value: never[];
        };
        lightProbe: {
            value: never[];
        };
        directionalLights: {
            value: never[];
            properties: {
                direction: {};
                color: {};
            };
        };
        directionalLightShadows: {
            value: never[];
            properties: {
                shadowBias: {};
                shadowNormalBias: {};
                shadowRadius: {};
                shadowMapSize: {};
            };
        };
        directionalShadowMap: {
            value: never[];
        };
        directionalShadowMatrix: {
            value: never[];
        };
        spotLights: {
            value: never[];
            properties: {
                color: {};
                position: {};
                direction: {};
                distance: {};
                coneCos: {};
                penumbraCos: {};
                decay: {};
            };
        };
        spotLightShadows: {
            value: never[];
            properties: {
                shadowBias: {};
                shadowNormalBias: {};
                shadowRadius: {};
                shadowMapSize: {};
            };
        };
        spotLightMap: {
            value: never[];
        };
        spotShadowMap: {
            value: never[];
        };
        spotLightMatrix: {
            value: never[];
        };
        pointLights: {
            value: never[];
            properties: {
                color: {};
                position: {};
                decay: {};
                distance: {};
            };
        };
        pointLightShadows: {
            value: never[];
            properties: {
                shadowBias: {};
                shadowNormalBias: {};
                shadowRadius: {};
                shadowMapSize: {};
                shadowCameraNear: {};
                shadowCameraFar: {};
            };
        };
        pointShadowMap: {
            value: never[];
        };
        pointShadowMatrix: {
            value: never[];
        };
        hemisphereLights: {
            value: never[];
            properties: {
                direction: {};
                skyColor: {};
                groundColor: {};
            };
        };
        rectAreaLights: {
            value: never[];
            properties: {
                color: {};
                position: {};
                width: {};
                height: {};
            };
        };
        ltc_1: {
            value: null;
        };
        ltc_2: {
            value: null;
        };
    };
    points: {
        diffuse: {
            value: Color;
        };
        opacity: {
            value: number;
        };
        size: {
            value: number;
        };
        scale: {
            value: number;
        };
        map: {
            value: null;
        };
        alphaMap: {
            value: null;
        };
        alphaTest: {
            value: number;
        };
        uvTransform: {
            value: Matrix3;
        };
    };
    sprite: {
        diffuse: {
            value: Color;
        };
        opacity: {
            value: number;
        };
        center: {
            value: Vector2;
        };
        rotation: {
            value: number;
        };
        map: {
            value: null;
        };
        alphaMap: {
            value: null;
        };
        alphaTest: {
            value: number;
        };
        uvTransform: {
            value: Matrix3;
        };
    };
};
declare const ShaderLib: {
    basic: {
        uniforms: {};
        vertexShader: string;
        fragmentShader: string;
    };
    lambert: {
        uniforms: {};
        vertexShader: string;
        fragmentShader: string;
    };
    phong: {
        uniforms: {};
        vertexShader: string;
        fragmentShader: string;
    };
    standard: {
        uniforms: {};
        vertexShader: string;
        fragmentShader: string;
    };
    toon: {
        uniforms: {};
        vertexShader: string;
        fragmentShader: string;
    };
    matcap: {
        uniforms: {};
        vertexShader: string;
        fragmentShader: string;
    };
    points: {
        uniforms: {};
        vertexShader: string;
        fragmentShader: string;
    };
    dashed: {
        uniforms: {};
        vertexShader: string;
        fragmentShader: string;
    };
    depth: {
        uniforms: {};
        vertexShader: string;
        fragmentShader: string;
    };
    normal: {
        uniforms: {};
        vertexShader: string;
        fragmentShader: string;
    };
    sprite: {
        uniforms: {};
        vertexShader: string;
        fragmentShader: string;
    };
    background: {
        uniforms: {
            uvTransform: {
                value: Matrix3;
            };
            t2D: {
                value: null;
            };
            backgroundIntensity: {
                value: number;
            };
        };
        vertexShader: string;
        fragmentShader: string;
    };
    backgroundCube: {
        uniforms: {
            envMap: {
                value: null;
            };
            flipEnvMap: {
                value: number;
            };
            backgroundBlurriness: {
                value: number;
            };
            backgroundIntensity: {
                value: number;
            };
        };
        vertexShader: string;
        fragmentShader: string;
    };
    cube: {
        uniforms: {
            tCube: {
                value: null;
            };
            tFlip: {
                value: number;
            };
            opacity: {
                value: number;
            };
        };
        vertexShader: string;
        fragmentShader: string;
    };
    equirect: {
        uniforms: {
            tEquirect: {
                value: null;
            };
        };
        vertexShader: string;
        fragmentShader: string;
    };
    distanceRGBA: {
        uniforms: {};
        vertexShader: string;
        fragmentShader: string;
    };
    shadow: {
        uniforms: {};
        vertexShader: string;
        fragmentShader: string;
    };
};
declare class OrthographicCamera extends Camera {
    constructor(left?: number, right?: number, top?: number, bottom?: number, near?: number, far?: number);
    copy(source: any, recursive: any): this;
    setViewOffset(fullWidth: any, fullHeight: any, x: any, y: any, width: any, height: any): void;
    clearViewOffset(): void;
    updateProjectionMatrix(): void;
    toJSON(meta: any): {};
}
/**
 * This class generates a Prefiltered, Mipmapped Radiance Environment Map
 * (PMREM) from a cubeMap environment texture. This allows different levels of
 * blur to be quickly accessed based on material roughness. It is packed into a
 * special CubeUV format that allows us to perform custom interpolation so that
 * we can support nonlinear formats such as RGBE. Unlike a traditional mipmap
 * chain, it only goes down to the LOD_MIN level (above), and then creates extra
 * even more filtered 'mips' at the same LOD_MIN resolution, associated with
 * higher roughness levels. In this way we maintain resolution to smoothly
 * interpolate diffuse lighting while limiting sampling computation.
 *
 * Paper: Fast, Accurate Image-Based Lighting
 * https://drive.google.com/file/d/15y8r_UpKlU9SvV4ILb0C3qCPecS8pvLz/view
*/
declare class PMREMGenerator {
    constructor(renderer: any);
    /**
     * Generates a PMREM from a supplied Scene, which can be faster than using an
     * image if networking bandwidth is low. Optional sigma specifies a blur radius
     * in radians to be applied to the scene before PMREM generation. Optional near
     * and far planes ensure the scene is rendered in its entirety (the cubeCamera
     * is placed at the origin).
     */
    fromScene(scene: any, sigma?: number, near?: number, far?: number): WebGLRenderTarget;
    /**
     * Generates a PMREM from an equirectangular texture, which can be either LDR
     * or HDR. The ideal input image size is 1k (1024 x 512),
     * as this matches best with the 256 x 256 cubemap output.
     */
    fromEquirectangular(equirectangular: any, renderTarget?: null): any;
    /**
     * Generates a PMREM from an cubemap texture, which can be either LDR
     * or HDR. The ideal input cube size is 256 x 256,
     * as this matches best with the 256 x 256 cubemap output.
     */
    fromCubemap(cubemap: any, renderTarget?: null): any;
    /**
     * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
     * your texture's network fetch for increased concurrency.
     */
    compileCubemapShader(): void;
    /**
     * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
     * your texture's network fetch for increased concurrency.
     */
    compileEquirectangularShader(): void;
    /**
     * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
     * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
     * one of them will cause any others to also become unusable.
     */
    dispose(): void;
    _setSize(cubeSize: any): void;
    _dispose(): void;
    _cleanup(outputTarget: any): void;
    _fromTexture(texture: any, renderTarget: any): any;
    _allocateTargets(): WebGLRenderTarget;
    _compileMaterial(material: any): void;
    _sceneToCubeUV(scene: any, near: any, far: any, cubeUVRenderTarget: any): void;
    _textureToCubeUV(texture: any, cubeUVRenderTarget: any): void;
    _applyPMREM(cubeUVRenderTarget: any): void;
    /**
     * This is a two-pass Gaussian blur for a cubemap. Normally this is done
     * vertically and horizontally, but this breaks down on a cube. Here we apply
     * the blur latitudinally (around the poles), and then longitudinally (towards
     * the poles) to approximate the orthogonally-separable blur. It is least
     * accurate at the poles, but still does a decent job.
     */
    _blur(cubeUVRenderTarget: any, lodIn: any, lodOut: any, sigma: any, poleAxis: any): void;
    _halfBlur(targetIn: any, targetOut: any, lodIn: any, lodOut: any, sigmaRadians: any, direction: any, poleAxis: any): void;
}
declare class MeshDepthMaterial extends Material {
    constructor(parameters: any);
    copy(source: any): this;
}
declare class MeshDistanceMaterial extends Material {
    constructor(parameters: any);
    copy(source: any): this;
}
declare function WebGLUtils(gl: any, extensions: any, capabilities: any): {
    convert: (p: any, encoding?: null) => any;
};
declare class ArrayCamera extends PerspectiveCamera {
    constructor(array?: never[]);
}
declare class Group extends Object3D {
    constructor();
}
declare class DepthTexture extends Texture {
    constructor(width: any, height: any, type: any, mapping: any, wrapS: any, wrapT: any, magFilter: any, minFilter: any, anisotropy: any, format: any);
}
declare function WebGLRenderer(parameters?: {}): void;
declare class WebGL1Renderer extends WebGLRenderer {
}
declare class FogExp2 {
    constructor(color: any, density?: number);
    clone(): FogExp2;
    toJSON(): {
        type: string;
        color: any;
        density: any;
    };
}
declare class Fog {
    constructor(color: any, near?: number, far?: number);
    clone(): Fog;
    toJSON(): {
        type: string;
        color: any;
        near: any;
        far: any;
    };
}
declare class Scene extends Object3D {
    constructor();
    copy(source: any, recursive: any): this;
    toJSON(meta: any): {};
    get autoUpdate(): any;
    set autoUpdate(value: any);
}
declare class InterleavedBuffer {
    constructor(array: any, stride: any);
    onUploadCallback(): void;
    set needsUpdate(value: any);
    setUsage(value: any): this;
    copy(source: any): this;
    copyAt(index1: any, attribute: any, index2: any): this;
    set(value: any, offset?: number): this;
    clone(data: any): any;
    onUpload(callback: any): this;
    toJSON(data: any): {
        uuid: any;
        buffer: any;
        type: any;
        stride: any;
    };
}
declare class InterleavedBufferAttribute {
    constructor(interleavedBuffer: any, itemSize: any, offset: any, normalized?: boolean);
    get count(): any;
    get array(): any;
    set needsUpdate(value: any);
    applyMatrix4(m: any): this;
    applyNormalMatrix(m: any): this;
    transformDirection(m: any): this;
    setX(index: any, x: any): this;
    setY(index: any, y: any): this;
    setZ(index: any, z: any): this;
    setW(index: any, w: any): this;
    getX(index: any): any;
    getY(index: any): any;
    getZ(index: any): any;
    getW(index: any): any;
    setXY(index: any, x: any, y: any): this;
    setXYZ(index: any, x: any, y: any, z: any): this;
    setXYZW(index: any, x: any, y: any, z: any, w: any): this;
    clone(data: any): BufferAttribute | InterleavedBufferAttribute;
    toJSON(data: any): {
        itemSize: any;
        type: any;
        array: any[];
        normalized: any;
        isInterleavedBufferAttribute?: undefined;
        data?: undefined;
        offset?: undefined;
    } | {
        isInterleavedBufferAttribute: boolean;
        itemSize: any;
        data: any;
        offset: any;
        normalized: any;
        type?: undefined;
        array?: undefined;
    };
}
declare class SpriteMaterial extends Material {
    constructor(parameters: any);
    copy(source: any): this;
}
declare class Sprite extends Object3D {
    constructor(material: any);
    raycast(raycaster: any, intersects: any): void;
    copy(source: any, recursive: any): this;
}
declare class LOD extends Object3D {
    constructor();
    copy(source: any): this;
    addLevel(object: any, distance?: number, hysteresis?: number): this;
    getCurrentLevel(): any;
    getObjectForDistance(distance: any): any;
    raycast(raycaster: any, intersects: any): void;
    update(camera: any): void;
    toJSON(meta: any): {};
}
declare class SkinnedMesh extends Mesh {
    constructor(geometry: any, material: any);
    copy(source: any, recursive: any): this;
    bind(skeleton: any, bindMatrix: any): void;
    pose(): void;
    normalizeSkinWeights(): void;
    updateMatrixWorld(force: any): void;
    boneTransform(index: any, target: any): any;
}
declare class Bone extends Object3D {
    constructor();
}
declare class DataTexture extends Texture {
    constructor(data: null | undefined, width: number | undefined, height: number | undefined, format: any, type: any, mapping: any, wrapS: any, wrapT: any, magFilter: number | undefined, minFilter: number | undefined, anisotropy: any, encoding: any);
}
declare class Skeleton {
    constructor(bones?: never[], boneInverses?: never[]);
    init(): void;
    calculateInverses(): void;
    pose(): void;
    update(): void;
    clone(): Skeleton;
    computeBoneTexture(): this;
    getBoneByName(name: any): any;
    dispose(): void;
    fromJSON(json: any, bones: any): this;
    toJSON(): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
        bones: never[];
        boneInverses: never[];
    };
}
declare class InstancedBufferAttribute extends BufferAttribute {
    constructor(array: any, itemSize: any, normalized: any, meshPerAttribute?: number);
    copy(source: any): this;
    toJSON(): {
        itemSize: any;
        type: any;
        array: unknown[];
        normalized: any;
    };
}
declare class InstancedMesh extends Mesh {
    constructor(geometry: any, material: any, count: any);
    copy(source: any, recursive: any): this;
    getColorAt(index: any, color: any): void;
    getMatrixAt(index: any, matrix: any): void;
    raycast(raycaster: any, intersects: any): void;
    setColorAt(index: any, color: any): void;
    setMatrixAt(index: any, matrix: any): void;
    updateMorphTargets(): void;
    dispose(): void;
}
declare class LineBasicMaterial extends Material {
    constructor(parameters: any);
    copy(source: any): this;
}
declare class Line extends Object3D {
    constructor(geometry?: BufferGeometry, material?: LineBasicMaterial);
    copy(source: any, recursive: any): this;
    computeLineDistances(): this;
    raycast(raycaster: any, intersects: any): void;
    updateMorphTargets(): void;
}
declare class LineSegments extends Line {
    constructor(geometry: any, material: any);
    computeLineDistances(): this;
}
declare class LineLoop extends Line {
    constructor(geometry: any, material: any);
}
declare class PointsMaterial extends Material {
    constructor(parameters: any);
    copy(source: any): this;
}
declare class Points extends Object3D {
    constructor(geometry?: BufferGeometry, material?: PointsMaterial);
    copy(source: any, recursive: any): this;
    raycast(raycaster: any, intersects: any): void;
    updateMorphTargets(): void;
}
declare class VideoTexture extends Texture {
    constructor(video: any, mapping: any, wrapS: any, wrapT: any, magFilter: any, minFilter: any, format: any, type: any, anisotropy: any);
    clone(): any;
    update(): void;
}
declare class FramebufferTexture extends Texture {
    constructor(width: any, height: any, format: any);
}
declare class CompressedTexture extends Texture {
    constructor(mipmaps: any, width: any, height: any, format: any, type: any, mapping: any, wrapS: any, wrapT: any, magFilter: any, minFilter: any, anisotropy: any, encoding: any);
}
declare class CompressedArrayTexture extends CompressedTexture {
    constructor(mipmaps: any, width: any, height: any, depth: any, format: any, type: any);
}
declare class CanvasTexture extends Texture {
    constructor(canvas: any, mapping: any, wrapS: any, wrapT: any, magFilter: any, minFilter: any, format: any, type: any, anisotropy: any);
}
/**
 * Extensible curve object.
 *
 * Some common of curve methods:
 * .getPoint( t, optionalTarget ), .getTangent( t, optionalTarget )
 * .getPointAt( u, optionalTarget ), .getTangentAt( u, optionalTarget )
 * .getPoints(), .getSpacedPoints()
 * .getLength()
 * .updateArcLengths()
 *
 * This following curves inherit from THREE.Curve:
 *
 * -- 2D curves --
 * THREE.ArcCurve
 * THREE.CubicBezierCurve
 * THREE.EllipseCurve
 * THREE.LineCurve
 * THREE.QuadraticBezierCurve
 * THREE.SplineCurve
 *
 * -- 3D curves --
 * THREE.CatmullRomCurve3
 * THREE.CubicBezierCurve3
 * THREE.LineCurve3
 * THREE.QuadraticBezierCurve3
 *
 * A series of curves can be represented as a THREE.CurvePath.
 *
 **/
declare class Curve {
    constructor();
    getPoint(): null;
    getPointAt(u: any, optionalTarget: any): null;
    getPoints(divisions?: number): null[];
    getSpacedPoints(divisions?: number): null[];
    getLength(): any;
    getLengths(divisions?: any): any;
    updateArcLengths(): void;
    getUtoTmapping(u: any, distance: any): number;
    getTangent(t: any, optionalTarget: any): any;
    getTangentAt(u: any, optionalTarget: any): any;
    computeFrenetFrames(segments: any, closed: any): {
        tangents: any[];
        normals: any[];
        binormals: any[];
    };
    clone(): any;
    copy(source: any): this;
    toJSON(): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
    };
    fromJSON(json: any): this;
}
declare class EllipseCurve extends Curve {
    constructor(aX?: number, aY?: number, xRadius?: number, yRadius?: number, aStartAngle?: number, aEndAngle?: number, aClockwise?: boolean, aRotation?: number);
    getPoint(t: any, optionalTarget: any): any;
    copy(source: any): this;
    toJSON(): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
    };
    fromJSON(json: any): this;
}
declare class ArcCurve extends EllipseCurve {
    constructor(aX: any, aY: any, aRadius: any, aStartAngle: any, aEndAngle: any, aClockwise: any);
}
declare class CatmullRomCurve3 extends Curve {
    constructor(points?: never[], closed?: boolean, curveType?: string, tension?: number);
    getPoint(t: any, optionalTarget?: Vector3): Vector3;
    copy(source: any): this;
    toJSON(): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
    };
    fromJSON(json: any): this;
}
declare class CubicBezierCurve extends Curve {
    constructor(v0?: Vector2, v1?: Vector2, v2?: Vector2, v3?: Vector2);
    getPoint(t: any, optionalTarget?: Vector2): Vector2;
    copy(source: any): this;
    toJSON(): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
    };
    fromJSON(json: any): this;
}
declare class CubicBezierCurve3 extends Curve {
    constructor(v0?: Vector3, v1?: Vector3, v2?: Vector3, v3?: Vector3);
    getPoint(t: any, optionalTarget?: Vector3): Vector3;
    copy(source: any): this;
    toJSON(): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
    };
    fromJSON(json: any): this;
}
declare class LineCurve extends Curve {
    constructor(v1?: Vector2, v2?: Vector2);
    getPoint(t: any, optionalTarget?: Vector2): Vector2;
    getPointAt(u: any, optionalTarget: any): Vector2;
    getTangent(t: any, optionalTarget: any): any;
    copy(source: any): this;
    toJSON(): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
    };
    fromJSON(json: any): this;
}
declare class LineCurve3 extends Curve {
    constructor(v1?: Vector3, v2?: Vector3);
    getPoint(t: any, optionalTarget?: Vector3): Vector3;
    getPointAt(u: any, optionalTarget: any): Vector3;
    copy(source: any): this;
    toJSON(): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
    };
    fromJSON(json: any): this;
}
declare class QuadraticBezierCurve extends Curve {
    constructor(v0?: Vector2, v1?: Vector2, v2?: Vector2);
    getPoint(t: any, optionalTarget?: Vector2): Vector2;
    copy(source: any): this;
    toJSON(): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
    };
    fromJSON(json: any): this;
}
declare class QuadraticBezierCurve3 extends Curve {
    constructor(v0?: Vector3, v1?: Vector3, v2?: Vector3);
    getPoint(t: any, optionalTarget?: Vector3): Vector3;
    copy(source: any): this;
    toJSON(): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
    };
    fromJSON(json: any): this;
}
declare class SplineCurve extends Curve {
    constructor(points?: never[]);
    getPoint(t: any, optionalTarget?: Vector2): Vector2;
    copy(source: any): this;
    toJSON(): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
    };
    fromJSON(json: any): this;
}
/**************************************************************
 *  Curved Path - a curve path is simply a array of connected
 *  curves, but retains the api of a curve
 **************************************************************/
declare class CurvePath extends Curve {
    constructor();
    add(curve: any): void;
    closePath(): void;
    getPoint(t: any, optionalTarget: any): any;
    getLength(): any;
    updateArcLengths(): void;
    getCurveLengths(): any;
    getSpacedPoints(divisions?: number): any[];
    getPoints(divisions?: number): any[];
    copy(source: any): this;
    toJSON(): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
    };
    fromJSON(json: any): this;
}
declare class Path extends CurvePath {
    constructor(points: any);
    setFromPoints(points: any): this;
    moveTo(x: any, y: any): this;
    lineTo(x: any, y: any): this;
    quadraticCurveTo(aCPx: any, aCPy: any, aX: any, aY: any): this;
    bezierCurveTo(aCP1x: any, aCP1y: any, aCP2x: any, aCP2y: any, aX: any, aY: any): this;
    splineThru(pts: any): this;
    arc(aX: any, aY: any, aRadius: any, aStartAngle: any, aEndAngle: any, aClockwise: any): this;
    absarc(aX: any, aY: any, aRadius: any, aStartAngle: any, aEndAngle: any, aClockwise: any): this;
    ellipse(aX: any, aY: any, xRadius: any, yRadius: any, aStartAngle: any, aEndAngle: any, aClockwise: any, aRotation: any): this;
    absellipse(aX: any, aY: any, xRadius: any, yRadius: any, aStartAngle: any, aEndAngle: any, aClockwise: any, aRotation: any): this;
    copy(source: any): this;
    toJSON(): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
    };
    fromJSON(json: any): this;
}
declare class LatheGeometry extends BufferGeometry {
    constructor(points?: Vector2[], segments?: number, phiStart?: number, phiLength?: number);
    static fromJSON(data: any): LatheGeometry;
}
declare class CapsuleGeometry extends LatheGeometry {
    constructor(radius?: number, length?: number, capSegments?: number, radialSegments?: number);
    static fromJSON(data: any): CapsuleGeometry;
}
declare class CircleGeometry extends BufferGeometry {
    constructor(radius?: number, segments?: number, thetaStart?: number, thetaLength?: number);
    static fromJSON(data: any): CircleGeometry;
}
declare class CylinderGeometry extends BufferGeometry {
    constructor(radiusTop?: number, radiusBottom?: number, height?: number, radialSegments?: number, heightSegments?: number, openEnded?: boolean, thetaStart?: number, thetaLength?: number);
    static fromJSON(data: any): CylinderGeometry;
}
declare class ConeGeometry extends CylinderGeometry {
    constructor(radius?: number, height?: number, radialSegments?: number, heightSegments?: number, openEnded?: boolean, thetaStart?: number, thetaLength?: number);
    static fromJSON(data: any): ConeGeometry;
}
declare class PolyhedronGeometry extends BufferGeometry {
    constructor(vertices?: never[], indices?: never[], radius?: number, detail?: number);
    static fromJSON(data: any): PolyhedronGeometry;
}
declare class DodecahedronGeometry extends PolyhedronGeometry {
    constructor(radius?: number, detail?: number);
    static fromJSON(data: any): DodecahedronGeometry;
}
declare class EdgesGeometry extends BufferGeometry {
    constructor(geometry?: null, thresholdAngle?: number);
}
declare class Shape extends Path {
    constructor(points: any);
    getPointsHoles(divisions: any): any[];
    extractPoints(divisions: any): {
        shape: any[];
        holes: any[];
    };
    copy(source: any): this;
    toJSON(): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
    };
    fromJSON(json: any): this;
}
declare class ShapeUtils {
    static area(contour: any): number;
    static isClockWise(pts: any): boolean;
    static triangulateShape(contour: any, holes: any): any[][];
}
/**
 * Creates extruded geometry from a path shape.
 *
 * parameters = {
 *
 *  curveSegments: <int>, // number of points on the curves
 *  steps: <int>, // number of points for z-side extrusions / used for subdividing segments of extrude spline too
 *  depth: <float>, // Depth to extrude the shape
 *
 *  bevelEnabled: <bool>, // turn on bevel
 *  bevelThickness: <float>, // how deep into the original shape bevel goes
 *  bevelSize: <float>, // how far from shape outline (including bevelOffset) is bevel
 *  bevelOffset: <float>, // how far from shape outline does bevel start
 *  bevelSegments: <int>, // number of bevel layers
 *
 *  extrudePath: <THREE.Curve> // curve to extrude shape along
 *
 *  UVGenerator: <Object> // object that provides UV generator functions
 *
 * }
 */
declare class ExtrudeGeometry extends BufferGeometry {
    constructor(shapes?: Shape, options?: {});
    toJSON(): any;
    static fromJSON(data: any, shapes: any): ExtrudeGeometry;
}
declare class IcosahedronGeometry extends PolyhedronGeometry {
    constructor(radius?: number, detail?: number);
    static fromJSON(data: any): IcosahedronGeometry;
}
declare class OctahedronGeometry extends PolyhedronGeometry {
    constructor(radius?: number, detail?: number);
    static fromJSON(data: any): OctahedronGeometry;
}
declare class RingGeometry extends BufferGeometry {
    constructor(innerRadius?: number, outerRadius?: number, thetaSegments?: number, phiSegments?: number, thetaStart?: number, thetaLength?: number);
    static fromJSON(data: any): RingGeometry;
}
declare class ShapeGeometry extends BufferGeometry {
    constructor(shapes?: Shape, curveSegments?: number);
    toJSON(): any;
    static fromJSON(data: any, shapes: any): ShapeGeometry;
}
declare class SphereGeometry extends BufferGeometry {
    constructor(radius?: number, widthSegments?: number, heightSegments?: number, phiStart?: number, phiLength?: number, thetaStart?: number, thetaLength?: number);
    static fromJSON(data: any): SphereGeometry;
}
declare class TetrahedronGeometry extends PolyhedronGeometry {
    constructor(radius?: number, detail?: number);
    static fromJSON(data: any): TetrahedronGeometry;
}
declare class TorusGeometry extends BufferGeometry {
    constructor(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, arc?: number);
    static fromJSON(data: any): TorusGeometry;
}
declare class TorusKnotGeometry extends BufferGeometry {
    constructor(radius?: number, tube?: number, tubularSegments?: number, radialSegments?: number, p?: number, q?: number);
    static fromJSON(data: any): TorusKnotGeometry;
}
declare class TubeGeometry extends BufferGeometry {
    constructor(path?: QuadraticBezierCurve3, tubularSegments?: number, radius?: number, radialSegments?: number, closed?: boolean);
    toJSON(): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
    };
    static fromJSON(data: any): TubeGeometry;
}
declare class WireframeGeometry extends BufferGeometry {
    constructor(geometry?: null);
}
declare class ShadowMaterial extends Material {
    constructor(parameters: any);
    copy(source: any): this;
}
declare class RawShaderMaterial extends ShaderMaterial {
    constructor(parameters: any);
}
declare class MeshStandardMaterial extends Material {
    constructor(parameters: any);
    copy(source: any): this;
}
declare class MeshPhysicalMaterial extends MeshStandardMaterial {
    constructor(parameters: any);
    get sheen(): any;
    set sheen(value: any);
    get clearcoat(): any;
    set clearcoat(value: any);
    get iridescence(): any;
    set iridescence(value: any);
    get transmission(): any;
    set transmission(value: any);
    copy(source: any): this;
}
declare class MeshPhongMaterial extends Material {
    constructor(parameters: any);
    copy(source: any): this;
}
declare class MeshToonMaterial extends Material {
    constructor(parameters: any);
    copy(source: any): this;
}
declare class MeshNormalMaterial extends Material {
    constructor(parameters: any);
    copy(source: any): this;
}
declare class MeshLambertMaterial extends Material {
    constructor(parameters: any);
    copy(source: any): this;
}
declare class MeshMatcapMaterial extends Material {
    constructor(parameters: any);
    copy(source: any): this;
}
declare class LineDashedMaterial extends LineBasicMaterial {
    constructor(parameters: any);
    copy(source: any): this;
}
declare function arraySlice(array: any, from: any, to: any): any;
declare function convertArray(array: any, type: any, forceClone: any): any;
declare function isTypedArray(object: any): boolean;
declare function getKeyframeOrder(times: any): any[];
declare function sortedArray(values: any, stride: any, order: any): any;
declare function flattenJSON(jsonKeys: any, times: any, values: any, valuePropertyName: any): void;
declare function subclip(sourceClip: any, name: any, startFrame: any, endFrame: any, fps?: number): any;
declare function makeClipAdditive(targetClip: any, referenceFrame?: number, referenceClip?: any, fps?: number): any;
declare var AnimationUtils: Readonly<{
    __proto__: null;
    arraySlice: typeof arraySlice;
    convertArray: typeof convertArray;
    flattenJSON: typeof flattenJSON;
    getKeyframeOrder: typeof getKeyframeOrder;
    isTypedArray: typeof isTypedArray;
    makeClipAdditive: typeof makeClipAdditive;
    sortedArray: typeof sortedArray;
    subclip: typeof subclip;
}>;
/**
 * Abstract base class of interpolants over parametric samples.
 *
 * The parameter domain is one dimensional, typically the time or a path
 * along a curve defined by the data.
 *
 * The sample values can have any dimensionality and derived classes may
 * apply special interpretations to the data.
 *
 * This class provides the interval seek in a Template Method, deferring
 * the actual interpolation to derived classes.
 *
 * Time complexity is O(1) for linear access crossing at most two points
 * and O(log N) for random access, where N is the number of positions.
 *
 * References:
 *
 *      http://www.oodesign.com/template-method-pattern.html
 *
 */
declare class Interpolant {
    constructor(parameterPositions: any, sampleValues: any, sampleSize: any, resultBuffer: any);
    evaluate(t: any): any;
    getSettings_(): any;
    copySampleValue_(index: any): any;
    interpolate_(): void;
    intervalChanged_(): void;
}
/**
 * Fast and simple cubic spline interpolant.
 *
 * It was derived from a Hermitian construction setting the first derivative
 * at each sample position to the linear slope between neighboring positions
 * over their parameter interval.
 */
declare class CubicInterpolant extends Interpolant {
    constructor(parameterPositions: any, sampleValues: any, sampleSize: any, resultBuffer: any);
    intervalChanged_(i1: any, t0: any, t1: any): void;
    interpolate_(i1: any, t0: any, t: any, t1: any): any;
}
declare class LinearInterpolant extends Interpolant {
    constructor(parameterPositions: any, sampleValues: any, sampleSize: any, resultBuffer: any);
    interpolate_(i1: any, t0: any, t: any, t1: any): any;
}
/**
 *
 * Interpolant that evaluates to the sample value at the position preceding
 * the parameter.
 */
declare class DiscreteInterpolant extends Interpolant {
    constructor(parameterPositions: any, sampleValues: any, sampleSize: any, resultBuffer: any);
    interpolate_(i1: any): any;
}
declare class KeyframeTrack {
    constructor(name: any, times: any, values: any, interpolation: any);
    static toJSON(track: any): any;
    InterpolantFactoryMethodDiscrete(result: any): DiscreteInterpolant;
    InterpolantFactoryMethodLinear(result: any): LinearInterpolant;
    InterpolantFactoryMethodSmooth(result: any): CubicInterpolant;
    setInterpolation(interpolation: any): this;
    getInterpolation(): 2300 | 2301 | 2302 | undefined;
    getValueSize(): number;
    shift(timeOffset: any): this;
    scale(timeScale: any): this;
    trim(startTime: any, endTime: any): this;
    validate(): boolean;
    optimize(): this;
    clone(): any;
}
/**
 * A Track of Boolean keyframe values.
 */
declare class BooleanKeyframeTrack extends KeyframeTrack {
}
/**
 * A Track of keyframe values that represent color.
 */
declare class ColorKeyframeTrack extends KeyframeTrack {
}
/**
 * A Track of numeric keyframe values.
 */
declare class NumberKeyframeTrack extends KeyframeTrack {
}
/**
 * Spherical linear unit quaternion interpolant.
 */
declare class QuaternionLinearInterpolant extends Interpolant {
    constructor(parameterPositions: any, sampleValues: any, sampleSize: any, resultBuffer: any);
    interpolate_(i1: any, t0: any, t: any, t1: any): any;
}
/**
 * A Track of quaternion keyframe values.
 */
declare class QuaternionKeyframeTrack extends KeyframeTrack {
    InterpolantFactoryMethodLinear(result: any): QuaternionLinearInterpolant;
}
/**
 * A Track that interpolates Strings
 */
declare class StringKeyframeTrack extends KeyframeTrack {
}
/**
 * A Track of vectored keyframe values.
 */
declare class VectorKeyframeTrack extends KeyframeTrack {
}
declare class AnimationClip {
    constructor(name: any, duration: number | undefined, tracks: any, blendMode?: number);
    static parse(json: any): AnimationClip;
    static toJSON(clip: any): {
        name: any;
        duration: any;
        tracks: any[];
        uuid: any;
        blendMode: any;
    };
    static CreateFromMorphTargetSequence(name: any, morphTargetSequence: any, fps: any, noLoop: any): AnimationClip;
    static findByName(objectOrClipArray: any, name: any): any;
    static CreateClipsFromMorphTargetSequences(morphTargets: any, fps: any, noLoop: any): AnimationClip[];
    static parseAnimation(animation: any, bones: any): AnimationClip | null;
    resetDuration(): this;
    trim(): this;
    validate(): boolean;
    optimize(): this;
    clone(): any;
    toJSON(): any;
}
declare const Cache: {
    enabled: boolean;
    files: {};
    add: (key: any, file: any) => void;
    get: (key: any) => any;
    remove: (key: any) => void;
    clear: () => void;
};
declare class LoadingManager {
    constructor(onLoad: any, onProgress: any, onError: any);
}
declare const DefaultLoadingManager: LoadingManager;
declare class Loader {
    constructor(manager: any);
    load(): void;
    loadAsync(url: any, onProgress: any): Promise<unknown>;
    parse(): void;
    setCrossOrigin(crossOrigin: any): this;
    setWithCredentials(value: any): this;
    setPath(path: any): this;
    setResourcePath(resourcePath: any): this;
    setRequestHeader(requestHeader: any): this;
}
declare class FileLoader extends Loader {
    constructor(manager: any);
    load(url: any, onLoad: any, onProgress: any, onError: any): any;
    setResponseType(value: any): this;
    setMimeType(value: any): this;
}
declare class AnimationLoader extends Loader {
    constructor(manager: any);
    load(url: any, onLoad: any, onProgress: any, onError: any): void;
    parse(json: any): AnimationClip[];
}
/**
 * Abstract Base class to block based textures loader (dds, pvr, ...)
 *
 * Sub classes have to implement the parse() method which will be used in load().
 */
declare class CompressedTextureLoader extends Loader {
    constructor(manager: any);
    load(url: any, onLoad: any, onProgress: any, onError: any): CompressedTexture;
}
declare class ImageLoader extends Loader {
    constructor(manager: any);
    load(url: any, onLoad: any, onProgress: any, onError: any): any;
}
declare class CubeTextureLoader extends Loader {
    constructor(manager: any);
    load(urls: any, onLoad: any, onProgress: any, onError: any): CubeTexture;
}
/**
 * Abstract Base class to load generic binary textures formats (rgbe, hdr, ...)
 *
 * Sub classes have to implement the parse() method which will be used in load().
 */
declare class DataTextureLoader extends Loader {
    constructor(manager: any);
    load(url: any, onLoad: any, onProgress: any, onError: any): DataTexture;
}
declare class TextureLoader extends Loader {
    constructor(manager: any);
    load(url: any, onLoad: any, onProgress: any, onError: any): Texture;
}
declare class Light extends Object3D {
    constructor(color: any, intensity?: number);
    dispose(): void;
    copy(source: any, recursive: any): this;
    toJSON(meta: any): {};
}
declare class HemisphereLight extends Light {
    constructor(skyColor: any, groundColor: any, intensity: any);
    copy(source: any, recursive: any): this;
}
declare class SpotLight extends Light {
    constructor(color: any, intensity: any, distance?: number, angle?: number, penumbra?: number, decay?: number);
    get power(): number;
    set power(power: number);
    dispose(): void;
    copy(source: any, recursive: any): this;
}
declare class PointLight extends Light {
    constructor(color: any, intensity: any, distance?: number, decay?: number);
    get power(): number;
    set power(power: number);
    dispose(): void;
    copy(source: any, recursive: any): this;
}
declare class DirectionalLight extends Light {
    constructor(color: any, intensity: any);
    dispose(): void;
    copy(source: any): this;
}
declare class AmbientLight extends Light {
    constructor(color: any, intensity: any);
}
declare class RectAreaLight extends Light {
    constructor(color: any, intensity: any, width?: number, height?: number);
    get power(): number;
    set power(power: number);
    copy(source: any): this;
    toJSON(meta: any): {};
}
/**
 * Primary reference:
 *   https://graphics.stanford.edu/papers/envmap/envmap.pdf
 *
 * Secondary reference:
 *   https://www.ppsloan.org/publications/StupidSH36.pdf
 */
declare class SphericalHarmonics3 {
    constructor();
    set(coefficients: any): this;
    zero(): this;
    getAt(normal: any, target: any): any;
    getIrradianceAt(normal: any, target: any): any;
    add(sh: any): this;
    addScaledSH(sh: any, s: any): this;
    scale(s: any): this;
    lerp(sh: any, alpha: any): this;
    equals(sh: any): boolean;
    copy(sh: any): this;
    clone(): any;
    fromArray(array: any, offset?: number): this;
    toArray(array?: never[], offset?: number): never[];
    static getBasisAt(normal: any, shBasis: any): void;
}
declare class LightProbe extends Light {
    constructor(sh?: SphericalHarmonics3, intensity?: number);
    copy(source: any): this;
    fromJSON(json: any): this;
    toJSON(meta: any): {};
}
declare class MaterialLoader extends Loader {
    constructor(manager: any);
    load(url: any, onLoad: any, onProgress: any, onError: any): void;
    parse(json: any): any;
    setTextures(value: any): this;
    static createMaterialFromType(type: any): any;
}
declare class LoaderUtils {
    static decodeText(array: any): string;
    static extractUrlBase(url: any): any;
    static resolveURL(url: any, path: any): string;
}
declare class InstancedBufferGeometry extends BufferGeometry {
    constructor();
    copy(source: any): this;
    toJSON(): {
        metadata: {
            version: number;
            type: string;
            generator: string;
        };
    };
}
declare class BufferGeometryLoader extends Loader {
    constructor(manager: any);
    load(url: any, onLoad: any, onProgress: any, onError: any): void;
    parse(json: any): BufferGeometry;
}
declare class ObjectLoader extends Loader {
    constructor(manager: any);
    load(url: any, onLoad: any, onProgress: any, onError: any): void;
    loadAsync(url: any, onProgress: any): Promise<Object3D | Mesh | Sprite | LOD | Line | Points>;
    parse(json: any, onLoad: any): Object3D | Mesh | Sprite | LOD | Line | Points;
    parseAsync(json: any): Promise<Object3D | Mesh | Sprite | LOD | Line | Points>;
    parseShapes(json: any): {};
    parseSkeletons(json: any, object: any): {};
    parseGeometries(json: any, shapes: any): {};
    parseMaterials(json: any, textures: any): {};
    parseAnimations(json: any): {};
    parseImages(json: any, onLoad: any): {};
    parseImagesAsync(json: any): Promise<{}>;
    parseTextures(json: any, images: any): {};
    parseObject(data: any, geometries: any, materials: any, textures: any, animations: any): Object3D | Mesh | Sprite | LOD | Line | Points;
    bindSkeletons(object: any, skeletons: any): void;
}
declare class ImageBitmapLoader extends Loader {
    constructor(manager: any);
    setOptions(options: any): this;
    load(url: any, onLoad: any, onProgress: any, onError: any): any;
}
declare class AudioContext {
    static getContext(): any;
    static setContext(value: any): void;
}
declare class AudioLoader extends Loader {
    constructor(manager: any);
    load(url: any, onLoad: any, onProgress: any, onError: any): void;
}
declare class HemisphereLightProbe extends LightProbe {
    constructor(skyColor: any, groundColor: any, intensity?: number);
}
declare class AmbientLightProbe extends LightProbe {
    constructor(color: any, intensity?: number);
}
declare class StereoCamera {
    constructor();
    update(camera: any): void;
}
declare class Clock {
    constructor(autoStart?: boolean);
    start(): void;
    stop(): void;
    getElapsedTime(): any;
    getDelta(): number;
}
declare class AudioListener extends Object3D {
    constructor();
    getInput(): any;
    removeFilter(): this;
    getFilter(): any;
    setFilter(value: any): this;
    getMasterVolume(): any;
    setMasterVolume(value: any): this;
    updateMatrixWorld(force: any): void;
}
declare class Audio extends Object3D {
    constructor(listener: any);
    getOutput(): any;
    setNodeSource(audioNode: any): this;
    setMediaElementSource(mediaElement: any): this;
    setMediaStreamSource(mediaStream: any): this;
    setBuffer(audioBuffer: any): this;
    play(delay?: number): this | undefined;
    pause(): this | undefined;
    stop(): this | undefined;
    connect(): this;
    disconnect(): this;
    getFilters(): any;
    setFilters(value: any): this;
    setDetune(value: any): this | undefined;
    getDetune(): any;
    getFilter(): any;
    setFilter(filter: any): this;
    setPlaybackRate(value: any): this | undefined;
    getPlaybackRate(): any;
    onEnded(): void;
    getLoop(): any;
    setLoop(value: any): this | undefined;
    setLoopStart(value: any): this;
    setLoopEnd(value: any): this;
    getVolume(): any;
    setVolume(value: any): this;
}
declare class PositionalAudio extends Audio {
    constructor(listener: any);
    disconnect(): void;
    getOutput(): any;
    getRefDistance(): any;
    setRefDistance(value: any): this;
    getRolloffFactor(): any;
    setRolloffFactor(value: any): this;
    getDistanceModel(): any;
    setDistanceModel(value: any): this;
    getMaxDistance(): any;
    setMaxDistance(value: any): this;
    setDirectionalCone(coneInnerAngle: any, coneOuterAngle: any, coneOuterGain: any): this;
    updateMatrixWorld(force: any): void;
}
declare class AudioAnalyser {
    constructor(audio: any, fftSize?: number);
    getFrequencyData(): any;
    getAverageFrequency(): number;
}
declare class PropertyMixer {
    constructor(binding: any, typeName: any, valueSize: any);
    accumulate(accuIndex: any, weight: any): void;
    accumulateAdditive(weight: any): void;
    apply(accuIndex: any): void;
    saveOriginalState(): void;
    restoreOriginalState(): void;
    _setAdditiveIdentityNumeric(): void;
    _setAdditiveIdentityQuaternion(): void;
    _setAdditiveIdentityOther(): void;
    _select(buffer: any, dstOffset: any, srcOffset: any, t: any, stride: any): void;
    _slerp(buffer: any, dstOffset: any, srcOffset: any, t: any): void;
    _slerpAdditive(buffer: any, dstOffset: any, srcOffset: any, t: any, stride: any): void;
    _lerp(buffer: any, dstOffset: any, srcOffset: any, t: any, stride: any): void;
    _lerpAdditive(buffer: any, dstOffset: any, srcOffset: any, t: any, stride: any): void;
}
declare class PropertyBinding {
    constructor(rootNode: any, path: any, parsedPath: any);
    static create(root: any, path: any, parsedPath: any): any;
    /**
     * Replaces spaces with underscores and removes unsupported characters from
     * node names, to ensure compatibility with parseTrackName().
     *
     * @param {string} name Node name to be sanitized.
     * @return {string}
     */
    static sanitizeNodeName(name: any): any;
    static parseTrackName(trackName: any): {
        nodeName: string;
        objectName: string;
        objectIndex: string;
        propertyName: string;
        propertyIndex: string;
    };
    static findNode(root: any, nodeName: any): any;
    _getValue_unavailable(): void;
    _setValue_unavailable(): void;
    _getValue_direct(buffer: any, offset: any): void;
    _getValue_array(buffer: any, offset: any): void;
    _getValue_arrayElement(buffer: any, offset: any): void;
    _getValue_toArray(buffer: any, offset: any): void;
    _setValue_direct(buffer: any, offset: any): void;
    _setValue_direct_setNeedsUpdate(buffer: any, offset: any): void;
    _setValue_direct_setMatrixWorldNeedsUpdate(buffer: any, offset: any): void;
    _setValue_array(buffer: any, offset: any): void;
    _setValue_array_setNeedsUpdate(buffer: any, offset: any): void;
    _setValue_array_setMatrixWorldNeedsUpdate(buffer: any, offset: any): void;
    _setValue_arrayElement(buffer: any, offset: any): void;
    _setValue_arrayElement_setNeedsUpdate(buffer: any, offset: any): void;
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(buffer: any, offset: any): void;
    _setValue_fromArray(buffer: any, offset: any): void;
    _setValue_fromArray_setNeedsUpdate(buffer: any, offset: any): void;
    _setValue_fromArray_setMatrixWorldNeedsUpdate(buffer: any, offset: any): void;
    _getValue_unbound(targetArray: any, offset: any): void;
    _setValue_unbound(sourceArray: any, offset: any): void;
    bind(): void;
    unbind(): void;
}
/**
 *
 * A group of objects that receives a shared animation state.
 *
 * Usage:
 *
 *  - Add objects you would otherwise pass as 'root' to the
 *    constructor or the .clipAction method of AnimationMixer.
 *
 *  - Instead pass this object as 'root'.
 *
 *  - You can also add and remove objects later when the mixer
 *    is running.
 *
 * Note:
 *
 *    Objects of this class appear as one object to the mixer,
 *    so cache control of the individual objects must be done
 *    on the group.
 *
 * Limitation:
 *
 *  - The animated properties must be compatible among the
 *    all objects in the group.
 *
 *  - A single property can either be controlled through a
 *    target group or directly, but not both.
 */
declare class AnimationObjectGroup {
    constructor();
    add(): void;
    remove(): void;
    uncache(): void;
    subscribe_(path: any, parsedPath: any): any;
    unsubscribe_(path: any): void;
}
declare class AnimationMixer extends EventDispatcher {
    constructor(root: any);
    _bindAction(action: any, prototypeAction: any): void;
    _activateAction(action: any): void;
    _deactivateAction(action: any): void;
    _initMemoryManager(): void;
    _isActiveAction(action: any): boolean;
    _addInactiveAction(action: any, clipUuid: any, rootUuid: any): void;
    _removeInactiveAction(action: any): void;
    _removeInactiveBindingsForAction(action: any): void;
    _lendAction(action: any): void;
    _takeBackAction(action: any): void;
    _addInactiveBinding(binding: any, rootUuid: any, trackName: any): void;
    _removeInactiveBinding(binding: any): void;
    _lendBinding(binding: any): void;
    _takeBackBinding(binding: any): void;
    _lendControlInterpolant(): any;
    _takeBackControlInterpolant(interpolant: any): void;
    clipAction(clip: any, optionalRoot: any, blendMode: any): any;
    existingAction(clip: any, optionalRoot: any): any;
    stopAllAction(): this;
    update(deltaTime: any): this;
    setTime(timeInSeconds: any): this;
    getRoot(): any;
    uncacheClip(clip: any): void;
    uncacheRoot(root: any): void;
    uncacheAction(clip: any, optionalRoot: any): void;
}
declare class Uniform {
    constructor(value: any);
    clone(): Uniform;
}
declare class UniformsGroup extends EventDispatcher {
    constructor();
    add(uniform: any): this;
    remove(uniform: any): this;
    setName(name: any): this;
    setUsage(value: any): this;
    dispose(): this;
    copy(source: any): this;
    clone(): any;
}
declare class InstancedInterleavedBuffer extends InterleavedBuffer {
    constructor(array: any, stride: any, meshPerAttribute?: number);
    copy(source: any): this;
    clone(data: any): any;
    toJSON(data: any): {
        uuid: any;
        buffer: any;
        type: any;
        stride: any;
    };
}
declare class GLBufferAttribute {
    constructor(buffer: any, type: any, itemSize: any, elementSize: any, count: any);
    set needsUpdate(value: any);
    setBuffer(buffer: any): this;
    setType(type: any, elementSize: any): this;
    setItemSize(itemSize: any): this;
    setCount(count: any): this;
}
declare class Raycaster {
    constructor(origin: any, direction: any, near?: number, far?: number);
    set(origin: any, direction: any): void;
    setFromCamera(coords: any, camera: any): void;
    intersectObject(object: any, recursive?: boolean, intersects?: never[]): never[];
    intersectObjects(objects: any, recursive?: boolean, intersects?: never[]): never[];
}
/**
 * Ref: https://en.wikipedia.org/wiki/Spherical_coordinate_system
 *
 * The polar angle (phi) is measured from the positive y-axis. The positive y-axis is up.
 * The azimuthal angle (theta) is measured from the positive z-axis.
 */
declare class Spherical {
    constructor(radius?: number, phi?: number, theta?: number);
    set(radius: any, phi: any, theta: any): this;
    copy(other: any): this;
    makeSafe(): this;
    setFromVector3(v: any): this;
    setFromCartesianCoords(x: any, y: any, z: any): this;
    clone(): any;
}
/**
 * Ref: https://en.wikipedia.org/wiki/Cylindrical_coordinate_system
 */
declare class Cylindrical {
    constructor(radius?: number, theta?: number, y?: number);
    set(radius: any, theta: any, y: any): this;
    copy(other: any): this;
    setFromVector3(v: any): this;
    setFromCartesianCoords(x: any, y: any, z: any): this;
    clone(): any;
}
declare class Box2 {
    constructor(min?: Vector2, max?: Vector2);
    set(min: any, max: any): this;
    setFromPoints(points: any): this;
    setFromCenterAndSize(center: any, size: any): this;
    clone(): any;
    copy(box: any): this;
    makeEmpty(): this;
    isEmpty(): boolean;
    getCenter(target: any): any;
    getSize(target: any): any;
    expandByPoint(point: any): this;
    expandByVector(vector: any): this;
    expandByScalar(scalar: any): this;
    containsPoint(point: any): boolean;
    containsBox(box: any): boolean;
    getParameter(point: any, target: any): any;
    intersectsBox(box: any): boolean;
    clampPoint(point: any, target: any): any;
    distanceToPoint(point: any): number;
    intersect(box: any): this;
    union(box: any): this;
    translate(offset: any): this;
    equals(box: any): any;
}
declare class Line3 {
    constructor(start?: Vector3, end?: Vector3);
    set(start: any, end: any): this;
    copy(line: any): this;
    getCenter(target: any): any;
    delta(target: any): any;
    distanceSq(): any;
    distance(): any;
    at(t: any, target: any): any;
    closestPointToPointParameter(point: any, clampToLine: any): number;
    closestPointToPoint(point: any, clampToLine: any, target: any): any;
    applyMatrix4(matrix: any): this;
    equals(line: any): any;
    clone(): any;
}
declare class SpotLightHelper extends Object3D {
    constructor(light: any, color: any);
    dispose(): void;
    update(): void;
}
declare class SkeletonHelper extends LineSegments {
    constructor(object: any);
    updateMatrixWorld(force: any): void;
    dispose(): void;
}
declare class PointLightHelper extends Mesh {
    constructor(light: any, sphereSize: any, color: any);
    dispose(): void;
    update(): void;
}
declare class HemisphereLightHelper extends Object3D {
    constructor(light: any, size: any, color: any);
    dispose(): void;
    update(): void;
}
declare class GridHelper extends LineSegments {
    constructor(size?: number, divisions?: number, color1?: number, color2?: number);
    dispose(): void;
}
declare class PolarGridHelper extends LineSegments {
    constructor(radius?: number, sectors?: number, rings?: number, divisions?: number, color1?: number, color2?: number);
    dispose(): void;
}
declare class DirectionalLightHelper extends Object3D {
    constructor(light: any, size: any, color: any);
    dispose(): void;
    update(): void;
}
/**
 *  - shows frustum, line of sight and up of the camera
 *  - suitable for fast updates
 *  - based on frustum visualization in lightgl.js shadowmap example
 *      https://github.com/evanw/lightgl.js/blob/master/tests/shadowmap.html
 */
declare class CameraHelper extends LineSegments {
    constructor(camera: any);
    setColors(frustum: any, cone: any, up: any, target: any, cross: any): void;
    update(): void;
    dispose(): void;
}
declare class BoxHelper extends LineSegments {
    constructor(object: any, color?: number);
    update(object: any): void;
    setFromObject(object: any): this;
    copy(source: any, recursive: any): this;
    dispose(): void;
}
declare class Box3Helper extends LineSegments {
    constructor(box: any, color?: number);
    updateMatrixWorld(force: any): void;
    dispose(): void;
}
declare class PlaneHelper extends Line {
    constructor(plane: any, size?: number, hex?: number);
    updateMatrixWorld(force: any): void;
    dispose(): void;
}
declare class ArrowHelper extends Object3D {
    constructor(dir?: Vector3, origin?: Vector3, length?: number, color?: number, headLength?: number, headWidth?: number);
    setDirection(dir: any): void;
    setLength(length: any, headLength?: number, headWidth?: number): void;
    setColor(color: any): void;
    copy(source: any): this;
    dispose(): void;
}
declare class AxesHelper extends LineSegments {
    constructor(size?: number);
    setColors(xAxisColor: any, yAxisColor: any, zAxisColor: any): this;
    dispose(): void;
}
declare class ShapePath {
    constructor();
    moveTo(x: any, y: any): this;
    lineTo(x: any, y: any): this;
    quadraticCurveTo(aCPx: any, aCPy: any, aX: any, aY: any): this;
    bezierCurveTo(aCP1x: any, aCP1y: any, aCP2x: any, aCP2y: any, aX: any, aY: any): this;
    splineThru(pts: any): this;
    toShapes(isCCW: any): Shape[];
}
declare function toHalfFloat(val: any): number;
declare function fromHalfFloat(val: any): number;
declare var DataUtils: Readonly<{
    __proto__: null;
    fromHalfFloat: typeof fromHalfFloat;
    toHalfFloat: typeof toHalfFloat;
}>;
declare class BoxBufferGeometry extends BoxGeometry {
    constructor(width: any, height: any, depth: any, widthSegments: any, heightSegments: any, depthSegments: any);
}
declare class CapsuleBufferGeometry extends CapsuleGeometry {
    constructor(radius: any, length: any, capSegments: any, radialSegments: any);
}
declare class CircleBufferGeometry extends CircleGeometry {
    constructor(radius: any, segments: any, thetaStart: any, thetaLength: any);
}
declare class ConeBufferGeometry extends ConeGeometry {
    constructor(radius: any, height: any, radialSegments: any, heightSegments: any, openEnded: any, thetaStart: any, thetaLength: any);
}
declare class CylinderBufferGeometry extends CylinderGeometry {
    constructor(radiusTop: any, radiusBottom: any, height: any, radialSegments: any, heightSegments: any, openEnded: any, thetaStart: any, thetaLength: any);
}
declare class DodecahedronBufferGeometry extends DodecahedronGeometry {
    constructor(radius: any, detail: any);
}
declare class ExtrudeBufferGeometry extends ExtrudeGeometry {
    constructor(shapes: any, options: any);
}
declare class IcosahedronBufferGeometry extends IcosahedronGeometry {
    constructor(radius: any, detail: any);
}
declare class LatheBufferGeometry extends LatheGeometry {
    constructor(points: any, segments: any, phiStart: any, phiLength: any);
}
declare class OctahedronBufferGeometry extends OctahedronGeometry {
    constructor(radius: any, detail: any);
}
declare class PlaneBufferGeometry extends PlaneGeometry {
    constructor(width: any, height: any, widthSegments: any, heightSegments: any);
}
declare class PolyhedronBufferGeometry extends PolyhedronGeometry {
    constructor(vertices: any, indices: any, radius: any, detail: any);
}
declare class RingBufferGeometry extends RingGeometry {
    constructor(innerRadius: any, outerRadius: any, thetaSegments: any, phiSegments: any, thetaStart: any, thetaLength: any);
}
declare class ShapeBufferGeometry extends ShapeGeometry {
    constructor(shapes: any, curveSegments: any);
}
declare class SphereBufferGeometry extends SphereGeometry {
    constructor(radius: any, widthSegments: any, heightSegments: any, phiStart: any, phiLength: any, thetaStart: any, thetaLength: any);
}
declare class TetrahedronBufferGeometry extends TetrahedronGeometry {
    constructor(radius: any, detail: any);
}
declare class TorusBufferGeometry extends TorusGeometry {
    constructor(radius: any, tube: any, radialSegments: any, tubularSegments: any, arc: any);
}
declare class TorusKnotBufferGeometry extends TorusKnotGeometry {
    constructor(radius: any, tube: any, tubularSegments: any, radialSegments: any, p: any, q: any);
}
declare class TubeBufferGeometry extends TubeGeometry {
    constructor(path: any, tubularSegments: any, radius: any, radialSegments: any, closed: any);
}
export { ACESFilmicToneMapping, AddEquation, AddOperation, AdditiveAnimationBlendMode, AdditiveBlending, AlphaFormat, AlwaysDepth, AlwaysStencilFunc, AmbientLight, AmbientLightProbe, AnimationClip, AnimationLoader, AnimationMixer, AnimationObjectGroup, AnimationUtils, ArcCurve, ArrayCamera, ArrowHelper, Audio, AudioAnalyser, AudioContext, AudioListener, AudioLoader, AxesHelper, BackSide, BasicDepthPacking, BasicShadowMap, Bone, BooleanKeyframeTrack, Box2, Box3, Box3Helper, BoxBufferGeometry, BoxGeometry, BoxHelper, BufferAttribute, BufferGeometry, BufferGeometryLoader, ByteType, Cache, Camera, CameraHelper, CanvasTexture, CapsuleBufferGeometry, CapsuleGeometry, CatmullRomCurve3, CineonToneMapping, CircleBufferGeometry, CircleGeometry, ClampToEdgeWrapping, Clock, Color, ColorKeyframeTrack, ColorManagement, CompressedArrayTexture, CompressedTexture, CompressedTextureLoader, ConeBufferGeometry, ConeGeometry, CubeCamera, CubeReflectionMapping, CubeRefractionMapping, CubeTexture, CubeTextureLoader, CubeUVReflectionMapping, CubicBezierCurve, CubicBezierCurve3, CubicInterpolant, CullFaceBack, CullFaceFront, CullFaceFrontBack, CullFaceNone, Curve, CurvePath, CustomBlending, CustomToneMapping, CylinderBufferGeometry, CylinderGeometry, Cylindrical, Data3DTexture, DataArrayTexture, DataTexture, DataTextureLoader, DataUtils, DecrementStencilOp, DecrementWrapStencilOp, DefaultLoadingManager, DepthFormat, DepthStencilFormat, DepthTexture, DirectionalLight, DirectionalLightHelper, DiscreteInterpolant, DodecahedronBufferGeometry, DodecahedronGeometry, DoubleSide, DstAlphaFactor, DstColorFactor, DynamicCopyUsage, DynamicDrawUsage, DynamicReadUsage, EdgesGeometry, EllipseCurve, EqualDepth, EqualStencilFunc, EquirectangularReflectionMapping, EquirectangularRefractionMapping, Euler, EventDispatcher, ExtrudeBufferGeometry, ExtrudeGeometry, FileLoader, Float16BufferAttribute, Float32BufferAttribute, Float64BufferAttribute, FloatType, Fog, FogExp2, FramebufferTexture, FrontSide, Frustum, GLBufferAttribute, GLSL1, GLSL3, GreaterDepth, GreaterEqualDepth, GreaterEqualStencilFunc, GreaterStencilFunc, GridHelper, Group, HalfFloatType, HemisphereLight, HemisphereLightHelper, HemisphereLightProbe, IcosahedronBufferGeometry, IcosahedronGeometry, ImageBitmapLoader, ImageLoader, ImageUtils, IncrementStencilOp, IncrementWrapStencilOp, InstancedBufferAttribute, InstancedBufferGeometry, InstancedInterleavedBuffer, InstancedMesh, Int16BufferAttribute, Int32BufferAttribute, Int8BufferAttribute, IntType, InterleavedBuffer, InterleavedBufferAttribute, Interpolant, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, InvertStencilOp, KeepStencilOp, KeyframeTrack, LOD, LatheBufferGeometry, LatheGeometry, Layers, LessDepth, LessEqualDepth, LessEqualStencilFunc, LessStencilFunc, Light, LightProbe, Line, Line3, LineBasicMaterial, LineCurve, LineCurve3, LineDashedMaterial, LineLoop, LineSegments, LinearEncoding, LinearFilter, LinearInterpolant, LinearMipMapLinearFilter, LinearMipMapNearestFilter, LinearMipmapLinearFilter, LinearMipmapNearestFilter, LinearSRGBColorSpace, LinearToneMapping, Loader, LoaderUtils, LoadingManager, LoopOnce, LoopPingPong, LoopRepeat, LuminanceAlphaFormat, LuminanceFormat, MOUSE, Material, MaterialLoader, MathUtils, Matrix3, Matrix4, MaxEquation, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, MinEquation, MirroredRepeatWrapping, MixOperation, MultiplyBlending, MultiplyOperation, NearestFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, NearestMipmapLinearFilter, NearestMipmapNearestFilter, NeverDepth, NeverStencilFunc, NoBlending, NoColorSpace, NoToneMapping, NormalAnimationBlendMode, NormalBlending, NotEqualDepth, NotEqualStencilFunc, NumberKeyframeTrack, Object3D, ObjectLoader, ObjectSpaceNormalMap, OctahedronBufferGeometry, OctahedronGeometry, OneFactor, OneMinusDstAlphaFactor, OneMinusDstColorFactor, OneMinusSrcAlphaFactor, OneMinusSrcColorFactor, OrthographicCamera, PCFShadowMap, PCFSoftShadowMap, PMREMGenerator, Path, PerspectiveCamera, Plane, PlaneBufferGeometry, PlaneGeometry, PlaneHelper, PointLight, PointLightHelper, Points, PointsMaterial, PolarGridHelper, PolyhedronBufferGeometry, PolyhedronGeometry, PositionalAudio, PropertyBinding, PropertyMixer, QuadraticBezierCurve, QuadraticBezierCurve3, Quaternion, QuaternionKeyframeTrack, QuaternionLinearInterpolant, RED_GREEN_RGTC2_Format, RED_RGTC1_Format, REVISION, RGBADepthPacking, RGBAFormat, RGBAIntegerFormat, RGBA_ASTC_10x10_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_BPTC_Format, RGBA_ETC2_EAC_Format, RGBA_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGB_ETC1_Format, RGB_ETC2_Format, RGB_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGB_S3TC_DXT1_Format, RGFormat, RGIntegerFormat, RawShaderMaterial, Ray, Raycaster, RectAreaLight, RedFormat, RedIntegerFormat, ReinhardToneMapping, RepeatWrapping, ReplaceStencilOp, ReverseSubtractEquation, RingBufferGeometry, RingGeometry, SIGNED_RED_GREEN_RGTC2_Format, SIGNED_RED_RGTC1_Format, SRGBColorSpace, Scene, ShaderChunk, ShaderLib, ShaderMaterial, ShadowMaterial, Shape, ShapeBufferGeometry, ShapeGeometry, ShapePath, ShapeUtils, ShortType, Skeleton, SkeletonHelper, SkinnedMesh, Source, Sphere, SphereBufferGeometry, SphereGeometry, Spherical, SphericalHarmonics3, SplineCurve, SpotLight, SpotLightHelper, Sprite, SpriteMaterial, SrcAlphaFactor, SrcAlphaSaturateFactor, SrcColorFactor, StaticCopyUsage, StaticDrawUsage, StaticReadUsage, StereoCamera, StreamCopyUsage, StreamDrawUsage, StreamReadUsage, StringKeyframeTrack, SubtractEquation, SubtractiveBlending, TOUCH, TangentSpaceNormalMap, TetrahedronBufferGeometry, TetrahedronGeometry, Texture, TextureLoader, TorusBufferGeometry, TorusGeometry, TorusKnotBufferGeometry, TorusKnotGeometry, Triangle, TriangleFanDrawMode, TriangleStripDrawMode, TrianglesDrawMode, TubeBufferGeometry, TubeGeometry, TwoPassDoubleSide, UVMapping, Uint16BufferAttribute, Uint32BufferAttribute, Uint8BufferAttribute, Uint8ClampedBufferAttribute, Uniform, UniformsGroup, UniformsLib, UniformsUtils, UnsignedByteType, UnsignedInt248Type, UnsignedIntType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShortType, VSMShadowMap, Vector2, Vector3, Vector4, VectorKeyframeTrack, VideoTexture, WebGL1Renderer, WebGL3DRenderTarget, WebGLArrayRenderTarget, WebGLCubeRenderTarget, WebGLMultipleRenderTargets, WebGLRenderTarget, WebGLRenderer, WebGLUtils, WireframeGeometry, WrapAroundEnding, ZeroCurvatureEnding, ZeroFactor, ZeroSlopeEnding, ZeroStencilOp, _SRGBAFormat, sRGBEncoding };

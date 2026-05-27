"use strict";
(function(module) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], function(exports)  {
            module(exports);
        });
    } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeName !== 'string') {
        module(exports);
    } else {
        module(typeof self !== 'undefined' ? self : this);
}
}(function($rt_exports) {
let $rt_seed = 2463534242,
$rt_nextId = () => {
    let x = $rt_seed;
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    $rt_seed = x;
    return x;
},
$rt_wrapFunction0 = f => function() {
    return f(this);
},
$rt_wrapFunction1 = f => function(p1) {
    return f(this, p1);
},
$rt_wrapFunction2 = f => function(p1, p2) {
    return f(this, p1, p2);
},
$rt_wrapFunction3 = f => function(p1, p2, p3) {
    return f(this, p1, p2, p3);
},
$rt_wrapFunction4 = f => function(p1, p2, p3, p4) {
    return f(this, p1, p2, p3, p4);
},
$rt_mainStarter = f => (args, callback) => {
    if (!args) {
        args = [];
    }
    let javaArgs = $rt_createArray($rt_objcls(), args.length);
    for (let i = 0;i < args.length;++i) {
        javaArgs.data[i] = $rt_str(args[i]);
    }
    $rt_startThread(() => {
        f.call(null, javaArgs);
    }, callback);
},
$rt_eraseClinit = target => target.$clinit = () => {
},
$dbg_class = obj => {
    let cls = obj.constructor;
    let arrayDegree = 0;
    while (cls[$rt_meta] && cls[$rt_meta].item) {
        ++arrayDegree;
        cls = cls[$rt_meta].item;
    }
    let clsName = "";
    if (cls[$rt_meta].primitiveKind !== 0) {
        clsName = cls[$rt_meta].name;
    } else {
        clsName = cls[$rt_meta] ? cls[$rt_meta].name || "a/" + cls.name : "@" + cls.name;
    }
    while (arrayDegree-- > 0) {
        clsName += "[]";
    }
    return clsName;
},
$rt_classWithoutFields = superclass => {
    if (superclass === 0) {
        return function() {
        };
    }
    if (superclass === void 0) {
        superclass = $rt_objcls();
    }
    return function() {
        superclass.call(this);
    };
},
$rt_meta = Symbol("teavm_meta"),
$rt_cls = cls => {
    if (cls[$rt_meta].classObject === null) {
        cls[$rt_meta].classObject = jl_Class_createClass(cls);
    }
    return cls[$rt_meta].classObject;
},
$rt_objcls = () => jl_Object,
$rt_callWithReceiver = f => function() {
    return f.apply(null, [this].concat(Array.prototype.slice.call(arguments)));
},
$rt_newClassMetadata = source => {
    return Object.assign({ name : null, binaryName : null, parent : null, superinterfaces : [], modifiers : 0, primitiveKind : 0, itemType : null, arrayType : null, enclosingClass : null, declaringClass : null, simpleName : null, clinit : () => {
    }, constructor : null, enumConstants : () => null, resolvedEnumConstants : null, reflection : null, classObject : null, assignableCache : null, valueToObject : o => o, objectToValue : o => o }, source || {  });
},
$rt_createPrimitiveCls = (name, binaryName, kind, config) => {
    let cls = () => {
    };
    let meta = $rt_newClassMetadata({ name : name, binaryName : binaryName, modifiers : 1 | 1 << 4, primitiveKind : kind });
    cls[$rt_meta] = meta;
    if (typeof config === 'function') {
        config(meta);
    }
    return cls;
},
$rt_booleancls = $rt_createPrimitiveCls("boolean", "Z", 1, meta => {
    {
        meta.valueToObject = o => jl_Boolean_valueOf(o);
    }
    {
        meta.objectToValue = o => jl_Boolean_booleanValue(o);
    }
}),
$rt_bytecls = $rt_createPrimitiveCls("byte", "B", 2, meta => {
}),
$rt_shortcls = $rt_createPrimitiveCls("short", "S", 3, meta => {
}),
$rt_charcls = $rt_createPrimitiveCls("char", "C", 4, meta => {
}),
$rt_intcls = $rt_createPrimitiveCls("int", "I", 5, meta => {
    {
        meta.valueToObject = o => jl_Integer_valueOf(o);
    }
    {
        meta.objectToValue = o => jl_Integer_intValue(o);
    }
}),
$rt_longcls = $rt_createPrimitiveCls("long", "J", 6, meta => {
}),
$rt_floatcls = $rt_createPrimitiveCls("float", "F", 7, meta => {
}),
$rt_doublecls = $rt_createPrimitiveCls("double", "D", 8, meta => {
}),
$rt_voidcls = $rt_createPrimitiveCls("void", "V", 9),
$rt_numberConversionBuffer = new ArrayBuffer(16),
$rt_numberConversionFloatArray = new Float32Array($rt_numberConversionBuffer),
$rt_numberConversionDoubleArray = new Float64Array($rt_numberConversionBuffer),
$rt_numberConversionIntArray = new Int32Array($rt_numberConversionBuffer),
$rt_numberConversionLongArray = new BigInt64Array($rt_numberConversionBuffer),
$rt_doubleToRawLongBits = n => {
    $rt_numberConversionDoubleArray[0] = n;
    return $rt_numberConversionLongArray[0];
},
$rt_floatToRawIntBits = n => {
    $rt_numberConversionFloatArray[0] = n;
    return $rt_numberConversionIntArray[0];
},
$rt_compare = (a, b) => a === b ? 0 : a < b ?  -1 : 1,
$rt_compare_less = (a, b) => a === b ? 0 : a > b ? 1 :  -1,
$rt_imul = Math.imul || function(a, b) {
    let ah = a >>> 16 & 0xFFFF;
    let al = a & 0xFFFF;
    let bh = b >>> 16 & 0xFFFF;
    let bl = b & 0xFFFF;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
},
$rt_udiv = (a, b) => (a >>> 0) / (b >>> 0) >>> 0,
$rt_umod = (a, b) => (a >>> 0) % (b >>> 0) >>> 0,
$rt_ucmp = (a, b) => {
    a >>>= 0;
    b >>>= 0;
    return a < b ?  -1 : a > b ? 1 : 0;
},
Long_ZERO = BigInt(0),
Long_create = (lo, hi) => BigInt.asIntN(64, BigInt.asUintN(64, BigInt(lo)) | BigInt.asUintN(64, BigInt(hi) << BigInt(32))),
Long_fromInt = val => BigInt.asIntN(64, BigInt(val | 0)),
Long_fromNumber = val => BigInt.asIntN(64, BigInt(val >= 0 ? Math.floor(val) : Math.ceil(val))),
Long_lo = val => Number(BigInt.asIntN(32, val)) | 0,
Long_eq = (a, b) => a === b,
Long_le = (a, b) => a <= b,
Long_add = (a, b) => BigInt.asIntN(64, a + b),
Long_sub = (a, b) => BigInt.asIntN(64, a - b),
Long_ucompare = (a, b) => {
    a = BigInt.asUintN(64, a);
    b = BigInt.asUintN(64, b);
    return a < b ?  -1 : a > b ? 1 : 0;
},
Long_mul = (a, b) => BigInt.asIntN(64, a * b);
let Long_div = (a, b) => BigInt.asIntN(64, a / b),
Long_udiv = (a, b) => BigInt.asIntN(64, BigInt.asUintN(64, a) / BigInt.asUintN(64, b)),
Long_rem = (a, b) => BigInt.asIntN(64, a % b),
Long_and = (a, b) => BigInt.asIntN(64, a & b),
Long_or = (a, b) => BigInt.asIntN(64, a | b),
Long_shl = (a, b) => BigInt.asIntN(64, a << BigInt(b & 63)),
Long_shr = (a, b) => BigInt.asIntN(64, a >> BigInt(b & 63)),
Long_shru = (a, b) => BigInt.asIntN(64, BigInt.asUintN(64, a) >> BigInt(b & 63)),
$rt_createArray = (cls, sz) => {
    let data = new Array(sz);
    data.fill(null);
    return new ($rt_arraycls(cls))(data);
},
$rt_wrapArray = (cls, data) => new ($rt_arraycls(cls))(data),
$rt_createLongArrayFromData = data => {
    let buffer = new BigInt64Array(data.length);
    buffer.set(data);
    return new $rt_longArrayCls(buffer);
},
$rt_createCharArray = sz => new $rt_charArrayCls(new Uint16Array(sz)),
$rt_createCharArrayFromData = data => {
    let buffer = new Uint16Array(data.length);
    buffer.set(data);
    return new $rt_charArrayCls(buffer);
},
$rt_createByteArray = sz => new $rt_byteArrayCls(new Int8Array(sz)),
$rt_createShortArrayFromData = data => {
    let buffer = new Int16Array(data.length);
    buffer.set(data);
    return new $rt_shortArrayCls(buffer);
},
$rt_createIntArray = sz => new $rt_intArrayCls(new Int32Array(sz)),
$rt_createIntArrayFromData = data => {
    let buffer = new Int32Array(data.length);
    buffer.set(data);
    return new $rt_intArrayCls(buffer);
},
$rt_arraycls = cls => {
    let result = cls[$rt_meta].arrayType;
    if (result === null) {
        function JavaArray(data) {
            ($rt_objcls()).call(this);
            this.data = data;
        }
        JavaArray.prototype = Object.create(($rt_objcls()).prototype);
        JavaArray.prototype.type = cls;
        JavaArray.prototype.constructor = JavaArray;
        JavaArray.prototype.toString = function() {
            let str = "[";
            for (let i = 0;i < this.data.length;++i) {
                if (i > 0) {
                    str += ", ";
                }
                str += this.data[i].toString();
            }
            str += "]";
            return str;
        };
        JavaArray.prototype.$clone0 = function() {
            let dataCopy;
            if ('slice' in this.data) {
                dataCopy = this.data.slice();
            } else {
                dataCopy = new this.data.constructor(this.data.length);
                for (let i = 0;i < dataCopy.length;++i) {
                    dataCopy[i] = this.data[i];
                }
            }
            return new ($rt_arraycls(this.type))(dataCopy);
        };
        let name = "[" + cls[$rt_meta].binaryName;
        JavaArray[$rt_meta] = $rt_newClassMetadata({ name : name, binaryName : name, parent : $rt_objcls(), itemType : cls });
        result = JavaArray;
        cls[$rt_meta].arrayType = JavaArray;
    }
    return result;
};
function $rt_arrayLength(array) {
    return array.data.length;
}
let $rt_stringPool_instance,
$rt_stringPool = strings => {
    $rt_stringClassInit();
    $rt_stringPool_instance = new Array(strings.length);
    for (let i = 0;i < strings.length;++i) {
        $rt_stringPool_instance[i] = $rt_intern($rt_str(strings[i]));
    }
},
$rt_s = index => $rt_stringPool_instance[index],
$rt_charArrayToString = (array, offset, count) => {
    let result = "";
    let limit = offset + count;
    for (let i = offset;i < limit;i = i + 1024 | 0) {
        let next = Math.min(limit, i + 1024 | 0);
        result += String.fromCharCode.apply(null, array.subarray(i, next));
    }
    return result;
},
$rt_str = str => str === null ? null : jl_String__init_2(str),
$rt_ustr = str => str === null ? null : str.$nativeString,
$rt_stringClassInit = () => jl_String_$callClinit(),
$rt_intern;
{
    $rt_intern = str => str;
}
let $rt_enumConstants = cls => {
    let meta = cls[$rt_meta];
    if (meta.resolvedEnumConstants === null) {
        let result = meta.enumConstants();
        meta.resolvedEnumConstants = result !== null ? result : [];
    }
    return meta.resolvedEnumConstants;
},
$rt_isInstance = (obj, cls) => obj instanceof $rt_objcls() && !!obj.constructor[$rt_meta] && $rt_isAssignable(obj.constructor, cls),
$rt_isAssignable = (from, to) => {
    if (from === to) {
        return true;
    }
    let map = from[$rt_meta].assignableCache;
    if (map === null) {
        map = new Map();
        from[$rt_meta].assignableCache = map;
    }
    let cachedResult = map.get(to);
    if (typeof cachedResult !== 'undefined') {
        return cachedResult;
    }
    if (to[$rt_meta].itemType !== null) {
        let result = from[$rt_meta].itemType !== null && $rt_isAssignable(from[$rt_meta].itemType, to[$rt_meta].itemType);
        map.set(to, result);
        return result;
    }
    let parent = from[$rt_meta].parent;
    if (parent !== null && parent !== from) {
        if ($rt_isAssignable(parent, to)) {
            map.set(to, true);
            return true;
        }
    }
    let superinterfaces = from[$rt_meta].superinterfaces;
    for (let i = 0;i < superinterfaces.length;i = i + 1 | 0) {
        if ($rt_isAssignable(superinterfaces[i], to)) {
            map.set(to, true);
            return true;
        }
    }
    map.set(to, false);
    return false;
},
$rt_throw = ex => {
    throw $rt_exception(ex);
},
$rt_javaExceptionProp = Symbol("javaException"),
$rt_exception = ex => {
    if (!ex.$jsException) {
        $rt_fillNativeException(ex);
    }
    return ex.$jsException;
},
$rt_fillNativeException = ex => {
    let javaCause = $rt_throwableCause(ex);
    let jsCause = javaCause !== null ? javaCause.$jsException : void 0;
    let cause = typeof jsCause === "object" ? { cause : jsCause } : void 0;
    let err = new JavaError("Java exception thrown", cause);
    if (typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(err);
    }
    err[$rt_javaExceptionProp] = ex;
    ex.$jsException = err;
    $rt_fillStack(err, ex);
},
$rt_fillStack = (err, ex) => {
    if (typeof $rt_decodeStack === "function" && err.stack) {
        let stack = $rt_decodeStack(err.stack);
        let javaStack = $rt_createArray($rt_stecls(), stack.length);
        let elem;
        let noStack = false;
        for (let i = 0;i < stack.length;++i) {
            let element = stack[i];
            elem = $rt_createStackElement($rt_str(element.className), $rt_str(element.methodName), $rt_str(element.fileName), element.lineNumber);
            if (elem == null) {
                noStack = true;
                break;
            }
            javaStack.data[i] = elem;
        }
        if (!noStack) {
            $rt_setStack(ex, javaStack);
        }
    }
},
JavaError;
if (typeof Reflect === 'object') {
    let defaultMessage = Symbol("defaultMessage");
    JavaError = function JavaError(message, cause) {
        let self = Reflect.construct(Error, [void 0, cause], JavaError);
        Object.setPrototypeOf(self, JavaError.prototype);
        self[defaultMessage] = message;
        return self;
    }
    ;
    JavaError.prototype = Object.create(Error.prototype, { constructor : { configurable : true, writable : true, value : JavaError }, message : { get() {
        try {
            let javaException = this[$rt_javaExceptionProp];
            if (typeof javaException === 'object') {
                let javaMessage = $rt_throwableMessage(javaException);
                if (typeof javaMessage === "object") {
                    return javaMessage !== null ? javaMessage.toString() : null;
                }
            }
            return this[defaultMessage];
        } catch (e){
            return "Exception occurred trying to extract Java exception message: " + e;
        }
    } } });
} else {
    JavaError = Error;
}
let $rt_javaException = e => e instanceof Error && typeof e[$rt_javaExceptionProp] === 'object' ? e[$rt_javaExceptionProp] : null,
$rt_wrapException = err => {
    let ex = err[$rt_javaExceptionProp];
    if (!ex) {
        ex = $rt_createException($rt_str("(JavaScript) " + err.toString()));
        err[$rt_javaExceptionProp] = ex;
        ex.$jsException = err;
        $rt_fillStack(err, ex);
    }
    return ex;
},
$rt_createException = message => jl_RuntimeException__init_1(message),
$rt_throwableMessage = t => jl_Throwable_getMessage(t),
$rt_throwableCause = t => jl_Throwable_getCause(t),
$rt_stecls = () => $rt_objcls(),
$rt_createStackElement = (className, methodName, fileName, lineNumber) => {
    {
        return null;
    }
},
$rt_setStack = (e, stack) => {
},
$rt_createOutputFunction = outputFunction => {
    let buffer = "";
    return msg => {
        let index = 0;
        while (true) {
            let next = msg.indexOf('\n', index);
            if (next < 0) {
                break;
            }
            outputFunction(buffer + msg.substring(index, next));
            buffer = "";
            index = next + 1;
        }
        buffer += msg.substring(index);
    };
},
$rt_putStderr = typeof $rt_putStderrCustom === "function" ? $rt_putStderrCustom : typeof console === "object" ? $rt_createOutputFunction(msg => console.error(msg)) : () => {
},
$rt_packageData = null,
$rt_packages = data => {
    let i = 0;
    let packages = new Array(data.length);
    for (let j = 0;j < data.length;++j) {
        let prefixIndex = data[i++];
        let prefix = prefixIndex >= 0 ? packages[prefixIndex] : "";
        packages[j] = prefix + data[i++] + ".";
    }
    $rt_packageData = packages;
},
$rt_allClasses = [],
$rt_metadata = data => {
    let packages = $rt_packageData;
    let i = 0;
    while (i < data.length) {
        let cls = data[i++];
        $rt_allClasses.push(cls);
        let m = $rt_newClassMetadata();
        cls[$rt_meta] = m;
        let className = data[i++];
        m.name = className !== 0 ? className : null;
        if (m.name !== null) {
            let packageIndex = data[i++];
            if (packageIndex >= 0) {
                m.name = packages[packageIndex] + m.name;
            }
        }
        m.binaryName = "L" + m.name + ";";
        let superclass = data[i++];
        m.parent = superclass !== 0 ? superclass : null;
        m.superinterfaces = data[i++];
        if (m.parent) {
            cls.prototype = Object.create(m.parent.prototype);
        } else {
            cls.prototype = {  };
        }
        cls.prototype.constructor = cls;
        m.modifiers = data[i++];
        m.primitiveKind = 0;
        let innerClassInfo = data[i++];
        if (innerClassInfo !== 0) {
            let enclosingClass = innerClassInfo[0];
            m.enclosingClass = enclosingClass !== 0 ? enclosingClass : null;
            let declaringClass = innerClassInfo[1];
            m.declaringClass = declaringClass !== 0 ? declaringClass : null;
            let simpleName = innerClassInfo[2];
            m.simpleName = simpleName !== 0 ? simpleName : null;
        }
        let clinit = data[i++];
        m.clinit = clinit !== 0 ? () => {
            m.clinit = () => {
            };
            clinit();
        } : () => {
        };
        let virtualMethods = data[i++];
        if (virtualMethods !== 0) {
            for (let j = 0;j < virtualMethods.length;j += 2) {
                let name = virtualMethods[j];
                let func = virtualMethods[j + 1];
                if (typeof name === 'string') {
                    name = [name];
                }
                for (let k = 0;k < name.length;++k) {
                    cls.prototype[name[k]] = func;
                }
            }
        }
    }
},
$rt_enumConstantsMetadata = data => {
    let i = 0;
    while (i < data.length) {
        let cls = data[i++];
        cls[$rt_meta].enumConstants = data[i++];
    }
},
$rt_startThread = (runner, callback) => {
    let result;
    try {
        result = runner();
    } catch (e){
        result = e;
    }
    if (typeof callback !== 'undefined') {
        callback(result);
    } else if (result instanceof Error) {
        throw result;
    }
};
function jl_Object() {
    this.$id$ = 0;
}
let jl_Object__init_ = $this => {
    return;
},
jl_Object__init_0 = () => {
    let var_0 = new jl_Object();
    jl_Object__init_(var_0);
    return var_0;
},
jl_Object_getClass = $this => {
    return $rt_cls(jl_Object_getClassInfo($this));
},
jl_Object_getClassInfo = var$0 => {
    return var$0.constructor;
},
jl_Object_equals = (var$0, $other) => {
    return var$0 !== $other ? 0 : 1;
},
jl_Object_toString = $this => {
    let var$1, var$2, var$3;
    var$1 = jl_Class_getName(jl_Object_getClass($this));
    var$2 = jl_Integer_toHexString(jl_Object_identity($this));
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$3, var$1), 64), var$2);
    return jl_StringBuilder_toString(var$3);
},
jl_Object_identity = $this => {
    let $platformThis;
    $platformThis = $this;
    if (!$platformThis.$id$)
        $platformThis.$id$ = $rt_nextId();
    return $this.$id$;
},
jl_Object_clone = $this => {
    let $cls, $result, var$3, var$4;
    $cls = jl_Class_getClassInfo(jl_Object_getClass($this));
    if (!$rt_isInstance($this, jl_Cloneable) && $cls[$rt_meta].itemType === null)
        $rt_throw(jl_CloneNotSupportedException__init_0());
    $result = otp_Platform_clone($this);
    var$3 = $result;
    var$4 = $rt_nextId();
    var$3.$id$ = var$4;
    return $result;
};
function jur_AbstractCharClass$LazyCharClass() {
    let a = this; jl_Object.call(a);
    a.$posValue = null;
    a.$negValue = null;
}
let jur_AbstractCharClass$LazyCharClass__init_ = $this => {
    jl_Object__init_($this);
},
jur_AbstractCharClass$LazyCharClass_getValue = ($this, $negative) => {
    if (!$negative && $this.$posValue === null)
        $this.$posValue = $this.$computeValue();
    else if ($negative && $this.$negValue === null)
        $this.$negValue = ($this.$computeValue()).$setNegative(1);
    if ($negative)
        return $this.$negValue;
    return $this.$posValue;
},
jur_AbstractCharClass$LazyBlank = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyBlank__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyBlank__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyBlank();
    jur_AbstractCharClass$LazyBlank__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyBlank_computeValue = $this => {
    return ((jur_CharClass__init_()).$add(32)).$add(9);
},
jur_AbstractCharClass$LazyCntrl = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyCntrl__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyCntrl__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyCntrl();
    jur_AbstractCharClass$LazyCntrl__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyCntrl_computeValue = $this => {
    return ((jur_CharClass__init_()).$add0(0, 31)).$add(127);
},
ji_Serializable = $rt_classWithoutFields(0),
jl_Number = $rt_classWithoutFields(),
jl_Number__init_ = $this => {
    jl_Object__init_($this);
},
jl_Comparable = $rt_classWithoutFields(0);
function jl_Integer() {
    jl_Number.call(this);
    this.$value0 = 0;
}
let jl_Integer_TYPE = null,
jl_Integer_integerCache = null,
jl_Integer_$callClinit = () => {
    jl_Integer_$callClinit = $rt_eraseClinit(jl_Integer);
    jl_Integer__clinit_();
},
jl_Integer__init_ = ($this, $value) => {
    jl_Integer_$callClinit();
    jl_Number__init_($this);
    $this.$value0 = $value;
},
jl_Integer__init_0 = var_0 => {
    let var_1 = new jl_Integer();
    jl_Integer__init_(var_1, var_0);
    return var_1;
},
jl_Integer_toString0 = ($i, $radix) => {
    jl_Integer_$callClinit();
    if (!($radix >= 2 && $radix <= 36))
        $radix = 10;
    return ((jl_AbstractStringBuilder__init_3(20)).$append1($i, $radix)).$toString();
},
jl_Integer_toHexString = $i => {
    jl_Integer_$callClinit();
    return otci_IntegerUtil_toUnsignedLogRadixString($i, 4);
},
jl_Integer_toString = $i => {
    jl_Integer_$callClinit();
    return jl_Integer_toString0($i, 10);
},
jl_Integer_parseInt0 = ($s, $radix) => {
    jl_Integer_$callClinit();
    if ($s !== null)
        return jl_Integer_parseIntImpl($s, 0, $s.$length(), $radix);
    $rt_throw(jl_NumberFormatException__init_0($rt_s(0)));
},
jl_Integer_parseIntImpl = ($s, $beginIndex, $endIndex, $radix) => {
    let $negative, var$6, $value, $maxValue, var$9, $digit, var$11, var$12, var$13, var$14;
    jl_Integer_$callClinit();
    if ($beginIndex == $endIndex)
        $rt_throw(jl_NumberFormatException__init_0($rt_s(1)));
    if ($radix >= 2 && $radix <= 36) {
        a: {
            $negative = 0;
            switch ($s.$charAt($beginIndex)) {
                case 43:
                    var$6 = $beginIndex + 1 | 0;
                    break a;
                case 45:
                    $negative = 1;
                    var$6 = $beginIndex + 1 | 0;
                    break a;
                default:
            }
            var$6 = $beginIndex;
        }
        $value = 0;
        $maxValue = 1 + (2147483647 / $radix | 0) | 0;
        if (var$6 == $endIndex)
            $rt_throw(jl_NumberFormatException__init_2());
        while (true) {
            if (var$6 >= $endIndex) {
                if ($negative)
                    $value =  -$value | 0;
                return $value;
            }
            var$9 = var$6 + 1 | 0;
            $digit = jl_Integer_decodeDigit($s.$charAt(var$6));
            if ($digit < 0) {
                var$11 = new jl_NumberFormatException;
                var$12 = jl_String_valueOf($s.$subSequence($beginIndex, $endIndex));
                var$13 = jl_StringBuilder__init_();
                jl_StringBuilder_append(jl_StringBuilder_append(var$13, $rt_s(2)), var$12);
                jl_NumberFormatException__init_(var$11, jl_StringBuilder_toString(var$13));
                $rt_throw(var$11);
            }
            if ($digit >= $radix) {
                var$12 = new jl_NumberFormatException;
                var$13 = jl_String_valueOf($s.$subSequence($beginIndex, $endIndex));
                var$14 = jl_StringBuilder__init_();
                jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(var$14, $rt_s(3)), $radix), $rt_s(4)), var$13);
                jl_NumberFormatException__init_(var$12, jl_StringBuilder_toString(var$14));
                $rt_throw(var$12);
            }
            if ($value > $maxValue)
                break;
            $value = $rt_imul($radix, $value) + $digit | 0;
            if ($value < 0) {
                if (var$9 == $endIndex && $value == (-2147483648) && $negative)
                    return (-2147483648);
                var$11 = new jl_NumberFormatException;
                var$12 = jl_String_valueOf($s.$subSequence($beginIndex, $endIndex));
                var$13 = jl_StringBuilder__init_();
                jl_StringBuilder_append(jl_StringBuilder_append(var$13, $rt_s(5)), var$12);
                jl_NumberFormatException__init_(var$11, jl_StringBuilder_toString(var$13));
                $rt_throw(var$11);
            }
            var$6 = var$9;
        }
        $rt_throw(jl_NumberFormatException__init_0($rt_s(6)));
    }
    var$11 = new jl_NumberFormatException;
    var$12 = jl_StringBuilder__init_();
    jl_StringBuilder_append1(jl_StringBuilder_append(var$12, $rt_s(7)), $radix);
    jl_NumberFormatException__init_(var$11, jl_StringBuilder_toString(var$12));
    $rt_throw(var$11);
},
jl_Integer_parseInt = $s => {
    jl_Integer_$callClinit();
    return jl_Integer_parseInt0($s, 10);
},
jl_Integer_valueOf = $i => {
    jl_Integer_$callClinit();
    if ($i >= (-128) && $i <= 127) {
        jl_Integer_ensureIntegerCache();
        return jl_Integer_integerCache.data[$i + 128 | 0];
    }
    return jl_Integer__init_0($i);
},
jl_Integer_ensureIntegerCache = () => {
    let $j;
    jl_Integer_$callClinit();
    a: {
        if (jl_Integer_integerCache === null) {
            jl_Integer_integerCache = $rt_createArray(jl_Integer, 256);
            $j = 0;
            while (true) {
                if ($j >= jl_Integer_integerCache.data.length)
                    break a;
                jl_Integer_integerCache.data[$j] = jl_Integer__init_0($j - 128 | 0);
                $j = $j + 1 | 0;
            }
        }
    }
},
jl_Integer_intValue = $this => {
    return $this.$value0;
},
jl_Integer_toString1 = $this => {
    return jl_Integer_toString($this.$value0);
},
jl_Integer_decodeDigit = $c => {
    jl_Integer_$callClinit();
    if ($c >= 48 && $c <= 57)
        return $c - 48 | 0;
    if ($c >= 97 && $c <= 122)
        return ($c - 97 | 0) + 10 | 0;
    if ($c >= 65 && $c <= 90)
        return ($c - 65 | 0) + 10 | 0;
    return (-1);
},
jl_Integer_numberOfLeadingZeros = $i => {
    let $n, var$3, var$4;
    jl_Integer_$callClinit();
    if (!$i)
        return 32;
    $n = 0;
    var$3 = $i >>> 16 | 0;
    if (var$3)
        $n = 16;
    else
        var$3 = $i;
    var$4 = var$3 >>> 8 | 0;
    if (!var$4)
        var$4 = var$3;
    else
        $n = $n | 8;
    var$3 = var$4 >>> 4 | 0;
    if (!var$3)
        var$3 = var$4;
    else
        $n = $n | 4;
    var$4 = var$3 >>> 2 | 0;
    if (!var$4)
        var$4 = var$3;
    else
        $n = $n | 2;
    if (var$4 >>> 1 | 0)
        $n = $n | 1;
    return (32 - $n | 0) - 1 | 0;
},
jl_Integer_numberOfTrailingZeros = $i => {
    let $n, var$3, var$4;
    jl_Integer_$callClinit();
    if (!$i)
        return 32;
    $n = 0;
    var$3 = $i << 16;
    if (var$3)
        $n = 16;
    else
        var$3 = $i;
    var$4 = var$3 << 8;
    if (!var$4)
        var$4 = var$3;
    else
        $n = $n | 8;
    var$3 = var$4 << 4;
    if (!var$3)
        var$3 = var$4;
    else
        $n = $n | 4;
    var$4 = var$3 << 2;
    if (!var$4)
        var$4 = var$3;
    else
        $n = $n | 2;
    if (var$4 << 1)
        $n = $n | 1;
    return (32 - $n | 0) - 1 | 0;
},
jl_Integer_rotateLeft = ($i, $distance) => {
    let var$3;
    jl_Integer_$callClinit();
    var$3 = $distance & 31;
    return $i << var$3 | ($i >>> (32 - var$3 | 0) | 0);
},
jl_Integer__clinit_ = () => {
    jl_Integer_TYPE = $rt_cls($rt_intcls);
},
jl_AbstractStringBuilder$Constants = $rt_classWithoutFields(),
jl_AbstractStringBuilder$Constants_longLogPowersOfTen = null,
jl_AbstractStringBuilder$Constants_doubleAnalysisResult = null,
jl_AbstractStringBuilder$Constants_floatAnalysisResult = null,
jl_AbstractStringBuilder$Constants_$callClinit = () => {
    jl_AbstractStringBuilder$Constants_$callClinit = $rt_eraseClinit(jl_AbstractStringBuilder$Constants);
    jl_AbstractStringBuilder$Constants__clinit_();
},
jl_AbstractStringBuilder$Constants__clinit_ = () => {
    jl_AbstractStringBuilder$Constants_longLogPowersOfTen = $rt_createLongArrayFromData([Long_fromInt(1), Long_fromInt(10), Long_fromInt(100), Long_fromInt(10000), Long_fromInt(100000000), Long_create(1874919424, 2328306)]);
    jl_AbstractStringBuilder$Constants_doubleAnalysisResult = otcit_DoubleAnalyzer$Result__init_();
    jl_AbstractStringBuilder$Constants_floatAnalysisResult = otcit_FloatAnalyzer$Result__init_0();
};
function jur_AbstractSet() {
    let a = this; jl_Object.call(a);
    a.$next1 = null;
    a.$isSecondPassVisited = 0;
    a.$index4 = null;
    a.$type = 0;
}
let jur_AbstractSet_counter = 0,
jur_AbstractSet_$callClinit = () => {
    jur_AbstractSet_$callClinit = $rt_eraseClinit(jur_AbstractSet);
    jur_AbstractSet__clinit_();
},
jur_AbstractSet__init_ = $this => {
    let var$1;
    jur_AbstractSet_$callClinit();
    jl_Object__init_($this);
    var$1 = jur_AbstractSet_counter;
    jur_AbstractSet_counter = var$1 + 1 | 0;
    $this.$index4 = jl_Integer_toString(var$1);
},
jur_AbstractSet__init_0 = ($this, $n) => {
    let var$2;
    jur_AbstractSet_$callClinit();
    jl_Object__init_($this);
    var$2 = jur_AbstractSet_counter;
    jur_AbstractSet_counter = var$2 + 1 | 0;
    $this.$index4 = jl_Integer_toString(var$2);
    $this.$next1 = $n;
},
jur_AbstractSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $length;
    $length = $matchResult.$getRightBound();
    while (true) {
        if ($stringIndex > $length)
            return (-1);
        if ($this.$matches($stringIndex, $testString, $matchResult) >= 0)
            break;
        $stringIndex = $stringIndex + 1 | 0;
    }
    return $stringIndex;
},
jur_AbstractSet_findBack = ($this, $stringIndex, $startSearch, $testString, $matchResult) => {
    while (true) {
        if ($startSearch < $stringIndex)
            return (-1);
        if ($this.$matches($startSearch, $testString, $matchResult) >= 0)
            break;
        $startSearch = $startSearch + (-1) | 0;
    }
    return $startSearch;
},
jur_AbstractSet_setType = ($this, $type) => {
    $this.$type = $type;
},
jur_AbstractSet_getType = $this => {
    return $this.$type;
},
jur_AbstractSet_getQualifiedName = $this => {
    let var$1, var$2, var$3;
    var$1 = $this.$index4;
    var$2 = $this.$getName();
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(var$3, 60), var$1), 58), var$2), 62);
    return jl_StringBuilder_toString(var$3);
},
jur_AbstractSet_toString = $this => {
    return $this.$getQualifiedName();
},
jur_AbstractSet_getNext = $this => {
    return $this.$next1;
},
jur_AbstractSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_AbstractSet_first = ($this, $set) => {
    return 1;
},
jur_AbstractSet_processBackRefReplacement = $this => {
    return null;
},
jur_AbstractSet_processSecondPass = $this => {
    let $set;
    $this.$isSecondPassVisited = 1;
    if ($this.$next1 !== null) {
        if (!$this.$next1.$isSecondPassVisited) {
            $set = $this.$next1.$processBackRefReplacement();
            if ($set !== null) {
                $this.$next1.$isSecondPassVisited = 1;
                $this.$next1 = $set;
            }
            $this.$next1.$processSecondPass();
        } else if ($this.$next1 instanceof jur_SingleSet && $this.$next1.$fSet.$isBackReferenced)
            $this.$next1 = $this.$next1.$next1;
    }
},
jur_AbstractSet__clinit_ = () => {
    jur_AbstractSet_counter = 1;
};
function jur_JointSet() {
    let a = this; jur_AbstractSet.call(a);
    a.$children = null;
    a.$fSet = null;
    a.$groupIndex = 0;
}
let jur_JointSet__init_ = $this => {
    jur_AbstractSet__init_($this);
},
jur_JointSet__init_2 = () => {
    let var_0 = new jur_JointSet();
    jur_JointSet__init_(var_0);
    return var_0;
},
jur_JointSet__init_0 = ($this, $children, $fSet) => {
    jur_AbstractSet__init_($this);
    $this.$children = $children;
    $this.$fSet = $fSet;
    $this.$groupIndex = $fSet.$getGroupIndex();
},
jur_JointSet__init_1 = (var_0, var_1) => {
    let var_2 = new jur_JointSet();
    jur_JointSet__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_JointSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $start, $size, $i, $e, $shift;
    if ($this.$children === null)
        return (-1);
    $start = $matchResult.$getStart($this.$groupIndex);
    $matchResult.$setStart($this.$groupIndex, $stringIndex);
    $size = $this.$children.$size();
    $i = 0;
    while (true) {
        if ($i >= $size) {
            $matchResult.$setStart($this.$groupIndex, $start);
            return (-1);
        }
        $e = $this.$children.$get($i);
        $shift = $e.$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return $shift;
},
jur_JointSet_setNext = ($this, $next) => {
    $this.$fSet.$setNext($next);
},
jur_JointSet_getName = $this => {
    return $rt_s(8);
},
jur_JointSet_first = ($this, $set) => {
    let $i;
    a: {
        if ($this.$children !== null) {
            $i = $this.$children.$iterator();
            while (true) {
                if (!$i.$hasNext())
                    break a;
                if (!($i.$next()).$first($set))
                    continue;
                else
                    return 1;
            }
        }
    }
    return 0;
},
jur_JointSet_hasConsumed = ($this, $matchResult) => {
    let var$2, var$3;
    a: {
        if ($matchResult.$getEnd($this.$groupIndex) >= 0) {
            var$2 = $matchResult.$getStart($this.$groupIndex);
            var$3 = $this.$groupIndex;
            if (var$2 == $matchResult.$getEnd(var$3)) {
                var$2 = 0;
                break a;
            }
        }
        var$2 = 1;
    }
    return var$2;
},
jur_JointSet_processSecondPass = $this => {
    let $childrenSize, $i, $child, $set;
    $this.$isSecondPassVisited = 1;
    if ($this.$fSet !== null && !$this.$fSet.$isSecondPassVisited)
        $this.$fSet.$processSecondPass();
    a: {
        if ($this.$children !== null) {
            $childrenSize = $this.$children.$size();
            $i = 0;
            while (true) {
                if ($i >= $childrenSize)
                    break a;
                $child = $this.$children.$get($i);
                $set = $child.$processBackRefReplacement();
                if ($set === null)
                    $set = $child;
                else {
                    $child.$isSecondPassVisited = 1;
                    $this.$children.$remove($i);
                    $this.$children.$add1($i, $set);
                }
                if (!$set.$isSecondPassVisited)
                    $set.$processSecondPass();
                $i = $i + 1 | 0;
            }
        }
    }
    if ($this.$next1 !== null)
        jur_AbstractSet_processSecondPass($this);
};
function jur_SingleSet() {
    jur_JointSet.call(this);
    this.$kid = null;
}
let jur_SingleSet__init_ = ($this, $child, $fSet) => {
    jur_JointSet__init_($this);
    $this.$kid = $child;
    $this.$fSet = $fSet;
    $this.$groupIndex = $fSet.$getGroupIndex();
},
jur_SingleSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_SingleSet();
    jur_SingleSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_SingleSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $start, $shift;
    $start = $matchResult.$getStart($this.$groupIndex);
    $matchResult.$setStart($this.$groupIndex, $stringIndex);
    $shift = $this.$kid.$matches($stringIndex, $testString, $matchResult);
    if ($shift >= 0)
        return $shift;
    $matchResult.$setStart($this.$groupIndex, $start);
    return (-1);
},
jur_SingleSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $res;
    $res = $this.$kid.$find($stringIndex, $testString, $matchResult);
    if ($res >= 0)
        $matchResult.$setStart($this.$groupIndex, $res);
    return $res;
},
jur_SingleSet_findBack = ($this, $stringIndex, $lastIndex, $testString, $matchResult) => {
    let $res;
    $res = $this.$kid.$findBack($stringIndex, $lastIndex, $testString, $matchResult);
    if ($res >= 0)
        $matchResult.$setStart($this.$groupIndex, $res);
    return $res;
},
jur_SingleSet_first = ($this, $set) => {
    return $this.$kid.$first($set);
},
jur_SingleSet_processBackRefReplacement = $this => {
    let $set;
    $set = jur_BackReferencedSingleSet__init_0($this);
    $this.$next1 = $set;
    return $set;
},
jur_SingleSet_processSecondPass = $this => {
    let $set;
    $this.$isSecondPassVisited = 1;
    if ($this.$fSet !== null && !$this.$fSet.$isSecondPassVisited)
        $this.$fSet.$processSecondPass();
    if ($this.$kid !== null && !$this.$kid.$isSecondPassVisited) {
        $set = $this.$kid.$processBackRefReplacement();
        if ($set !== null) {
            $this.$kid.$isSecondPassVisited = 1;
            $this.$kid = $set;
        }
        $this.$kid.$processSecondPass();
    }
},
v_WebSpriteLibrary = $rt_classWithoutFields(),
v_WebSpriteLibrary_imgSprites = null,
v_WebSpriteLibrary_imgInitialScreen = null,
v_WebSpriteLibrary_imgCoinInserted = null,
v_WebSpriteLibrary_imgNumbers = null,
v_WebSpriteLibrary_imgLoadingScreen = null,
v_WebSpriteLibrary_cache = null,
v_WebSpriteLibrary_doc = null,
v_WebSpriteLibrary_onAllLoaded = null,
v_WebSpriteLibrary_loadedCount = 0,
v_WebSpriteLibrary_$callClinit = () => {
    v_WebSpriteLibrary_$callClinit = $rt_eraseClinit(v_WebSpriteLibrary);
    v_WebSpriteLibrary__clinit_();
},
v_WebSpriteLibrary_init = $onLoaded => {
    v_WebSpriteLibrary_$callClinit();
    v_WebSpriteLibrary_doc = window.document;
    v_WebSpriteLibrary_onAllLoaded = $onLoaded;
    v_WebSpriteLibrary_loadedCount = 0;
    v_WebSpriteLibrary_imgSprites = v_WebSpriteLibrary_loadImage($rt_s(9));
    v_WebSpriteLibrary_imgInitialScreen = v_WebSpriteLibrary_loadImage($rt_s(10));
    v_WebSpriteLibrary_imgCoinInserted = v_WebSpriteLibrary_loadImage($rt_s(11));
    v_WebSpriteLibrary_imgNumbers = v_WebSpriteLibrary_loadImage($rt_s(12));
    v_WebSpriteLibrary_imgLoadingScreen = v_WebSpriteLibrary_loadImage($rt_s(13));
},
v_WebSpriteLibrary_loadImage = $src => {
    let var$2, var$3, var$4;
    v_WebSpriteLibrary_$callClinit();
    var$2 = v_WebSpriteLibrary_doc.createElement("img");
    var$3 = v_WebSpriteLibrary$1__init_0();
    var$2.addEventListener("load", otji_JS_function(otji_JSWrapper_unwrap(var$3), "handleEvent"));
    var$4 = v_WebSpriteLibrary$2__init_0($src);
    var$2.addEventListener("error", otji_JS_function(otji_JSWrapper_unwrap(var$4), "handleEvent"));
    var$3 = $rt_ustr($src);
    var$2.src = var$3;
    return var$2;
},
v_WebSpriteLibrary_onImageLoadError = $src => {
    let var$2;
    v_WebSpriteLibrary_$callClinit();
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(14)), $src);
    v_WebSpriteLibrary_logError(jl_StringBuilder_toString(var$2));
    v_WebSpriteLibrary_loadedCount = v_WebSpriteLibrary_loadedCount + 1 | 0;
    if (v_WebSpriteLibrary_loadedCount == 5) {
        v_WebSpriteLibrary_logError($rt_s(15));
        v_WebSpriteLibrary_buildShots();
        if (v_WebSpriteLibrary_onAllLoaded !== null)
            v_WebSpriteLibrary_onAllLoaded.$run();
    }
},
v_WebSpriteLibrary_logError = $msg => {
    v_WebSpriteLibrary_$callClinit();
    console.error('Galaga: ' + $rt_ustr($msg));
},
v_WebSpriteLibrary_onOneLoaded = () => {
    v_WebSpriteLibrary_$callClinit();
    v_WebSpriteLibrary_loadedCount = v_WebSpriteLibrary_loadedCount + 1 | 0;
    if (v_WebSpriteLibrary_loadedCount == 5) {
        v_WebSpriteLibrary_buildShots();
        if (v_WebSpriteLibrary_onAllLoaded !== null)
            v_WebSpriteLibrary_onAllLoaded.$run();
    }
},
v_WebSpriteLibrary_getSprite0 = ($entity, $dir, $animationFrame) => {
    let var$4, var$5, var$6, $key;
    v_WebSpriteLibrary_$callClinit();
    var$4 = jl_Enum_name($entity);
    var$5 = jl_Enum_name($dir);
    var$6 = jl_StringBuilder__init_();
    jl_StringBuilder_append1(jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append(var$6, var$4), 95), var$5), 95), $animationFrame);
    $key = jl_StringBuilder_toString(var$6);
    if (!v_WebSpriteLibrary_cache.$containsKey($key))
        v_WebSpriteLibrary_cache.$put($key, otji_JSWrapper_wrap(v_WebSpriteLibrary_buildEntitySprite($entity, $dir, $animationFrame)));
    return otji_JSWrapper_unwrap(v_WebSpriteLibrary_cache.$get0($key));
},
v_WebSpriteLibrary_getSprite = $name => {
    v_WebSpriteLibrary_$callClinit();
    if (!v_WebSpriteLibrary_cache.$containsKey($name))
        v_WebSpriteLibrary_cache.$put($name, otji_JSWrapper_wrap(v_WebSpriteLibrary_buildNamedSprite($name)));
    return otji_JSWrapper_unwrap(v_WebSpriteLibrary_cache.$get0($name));
},
v_WebSpriteLibrary_getNumberSprite = ($color, $digit) => {
    let var$3, var$4, $key;
    v_WebSpriteLibrary_$callClinit();
    var$3 = $color.$toUpperCase();
    var$4 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append1(var$4, $digit), 95), var$3);
    $key = jl_StringBuilder_toString(var$4);
    if (!v_WebSpriteLibrary_cache.$containsKey($key))
        v_WebSpriteLibrary_cache.$put($key, otji_JSWrapper_wrap(v_WebSpriteLibrary_buildNumberSprite($color.$toUpperCase(), $digit)));
    return otji_JSWrapper_unwrap(v_WebSpriteLibrary_cache.$get0($key));
},
v_WebSpriteLibrary_offsetYForEntity = $e => {
    v_WebSpriteLibrary_$callClinit();
    v_WebSpriteLibrary$3_$callClinit();
    switch (v_WebSpriteLibrary$3_$SwitchMap$shared$Entities.data[jl_Enum_ordinal($e)]) {
        case 1:
            break;
        case 2:
            return 19;
        case 3:
            return 37;
        case 4:
            return 55;
        case 5:
            return 73;
        case 6:
            return 91;
        default:
            return 1;
    }
    return 1;
},
v_WebSpriteLibrary_buildEntitySprite = ($entity, $dir, $animationFrame) => {
    let $offsetY, $angle, $i, $flipX, $flipY, var$9;
    v_WebSpriteLibrary_$callClinit();
    s_Entities_$callClinit();
    if ($entity !== s_Entities_PLAYER_SHOT && $entity !== s_Entities_ENEMY_SHOT && $entity !== s_Entities_ALIEN_SHOT) {
        $offsetY = v_WebSpriteLibrary_offsetYForEntity($entity);
        $angle = s_RotationDirection_getAngle($dir);
        if ($animationFrame == 2 && !$angle)
            return v_WebSpriteLibrary_clip(v_WebSpriteLibrary_imgSprites, 127, $offsetY, 16, 16, 0, 0);
        $i = $angle && $angle != 180 ? ($angle % 90 | 0) / 15 | 0 : 6;
        $flipX = 0;
        $flipY = 0;
        if ($angle > 0 && $angle < 90) {
            $i = 6 - $i | 0;
            $flipX = 1;
        } else if ($angle >= 90 && $angle < 180) {
            $i = 6 - $i | 0;
            $flipX = 1;
            $flipY = 1;
        } else {
            var$9 = $rt_compare($angle, 180);
            if (!var$9)
                $flipY = 1;
            else if (var$9 > 0 && $angle < 270) {
                $i = 6 - $i | 0;
                $flipY = 1;
            }
        }
        return v_WebSpriteLibrary_clip(v_WebSpriteLibrary_imgSprites, 1 + (18 * $i | 0) | 0, $offsetY, 16, 16, $flipX, $flipY);
    }
    return v_WebSpriteLibrary_makeBlank(3, 8);
},
v_WebSpriteLibrary_buildShots = () => {
    let $ps, var$2, var$3, var$4, $es;
    v_WebSpriteLibrary_$callClinit();
    $ps = v_WebSpriteLibrary_clip(v_WebSpriteLibrary_imgSprites, 313, 123, 3, 8, 0, 0);
    var$2 = v_WebSpriteLibrary_cache;
    s_Entities_$callClinit();
    var$3 = jl_Enum_name(s_Entities_PLAYER_SHOT);
    var$4 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$4, var$3), $rt_s(16));
    var$2.$put(jl_StringBuilder_toString(var$4), otji_JSWrapper_wrap($ps));
    $es = v_WebSpriteLibrary_clip(v_WebSpriteLibrary_imgSprites, 313, 139, 3, 8, 0, 0);
    var$2 = v_WebSpriteLibrary_cache;
    var$3 = jl_Enum_name(s_Entities_ENEMY_SHOT);
    var$4 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$4, var$3), $rt_s(17));
    var$2.$put(jl_StringBuilder_toString(var$4), otji_JSWrapper_wrap($es));
    var$2 = v_WebSpriteLibrary_cache;
    var$3 = jl_Enum_name(s_Entities_ALIEN_SHOT);
    var$4 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$4, var$3), $rt_s(17));
    var$2.$put(jl_StringBuilder_toString(var$4), otji_JSWrapper_wrap($es));
},
v_WebSpriteLibrary_buildNamedSprite = $name => {
    let var$2;
    v_WebSpriteLibrary_$callClinit();
    a: {
        var$2 = (-1);
        switch ($name.$hashCode()) {
            case -1932423455:
                if (!$name.$equals($rt_s(18)))
                    break a;
                var$2 = 8;
                break a;
            case -529396795:
                if (!$name.$equals($rt_s(19)))
                    break a;
                var$2 = 7;
                break a;
            case 49804:
                if (!$name.$equals($rt_s(20)))
                    break a;
                var$2 = 0;
                break a;
            case 78726770:
                if (!$name.$equals($rt_s(21)))
                    break a;
                var$2 = 3;
                break a;
            case 79219422:
                if (!$name.$equals($rt_s(22)))
                    break a;
                var$2 = 9;
                break a;
            case 1395473813:
                if (!$name.$equals($rt_s(23)))
                    break a;
                var$2 = 1;
                break a;
            case 1564552781:
                if (!$name.$equals($rt_s(24)))
                    break a;
                var$2 = 4;
                break a;
            case 1650440420:
                if (!$name.$equals($rt_s(25)))
                    break a;
                var$2 = 5;
                break a;
            case 1996005113:
                if (!$name.$equals($rt_s(26)))
                    break a;
                var$2 = 6;
                break a;
            case 2095027433:
                if (!$name.$equals($rt_s(27)))
                    break a;
                var$2 = 2;
                break a;
            default:
        }
    }
    switch (var$2) {
        case 0:
            return v_WebSpriteLibrary_clip(v_WebSpriteLibrary_imgInitialScreen, 0, 0, 222, 21, 0, 0);
        case 1:
            return v_WebSpriteLibrary_clip(v_WebSpriteLibrary_imgInitialScreen, 0, 21, 222, 21, 0, 0);
        case 2:
            return v_WebSpriteLibrary_clip(v_WebSpriteLibrary_imgInitialScreen, 0, 42, 222, 21, 0, 0);
        case 3:
            return v_WebSpriteLibrary_clip(v_WebSpriteLibrary_imgInitialScreen, 0, 63, 222, 21, 0, 0);
        case 4:
            return v_WebSpriteLibrary_clip(v_WebSpriteLibrary_imgInitialScreen, 0, 84, 222, 21, 0, 0);
        case 5:
            return v_WebSpriteLibrary_clip(v_WebSpriteLibrary_imgInitialScreen, 0, 105, 222, 21, 0, 0);
        case 6:
            return v_WebSpriteLibrary_clip(v_WebSpriteLibrary_imgInitialScreen, 0, 126, 222, 21, 0, 0);
        case 7:
            break;
        case 8:
            return v_WebSpriteLibrary_clipHalf(v_WebSpriteLibrary_imgLoadingScreen, 0);
        case 9:
            return v_WebSpriteLibrary_clipHalf(v_WebSpriteLibrary_imgLoadingScreen, 1);
        default:
            return v_WebSpriteLibrary_makeBlank(8, 8);
    }
    return v_WebSpriteLibrary_clipFull(v_WebSpriteLibrary_imgCoinInserted);
},
v_WebSpriteLibrary_buildNumberSprite = ($color, $digit) => {
    let $colorRow;
    v_WebSpriteLibrary_$callClinit();
    $colorRow = $color.$equals($rt_s(28)) ? 0 : !$color.$equals($rt_s(29)) ? 2 : 1;
    return v_WebSpriteLibrary_clip(v_WebSpriteLibrary_imgNumbers, 25 * $digit | 0, 26 * $colorRow | 0, 24, 24, 0, 0);
},
v_WebSpriteLibrary_clip = ($src, $sx, $sy, $sw, $sh, $flipX, $flipY) => {
    let $c, var$9, var$10, var$11, var$12, var$13;
    v_WebSpriteLibrary_$callClinit();
    $c = v_WebSpriteLibrary_makeCanvas($sw, $sh);
    var$9 = $c.getContext("2d");
    var$9.save();
    if (!(!$flipX && !$flipY)) {
        var$9.translate(!$flipX ? 0.0 : $sw, !$flipY ? 0.0 : $sh);
        var$9.scale(!$flipX ? 1.0 : (-1.0), !$flipY ? 1.0 : (-1.0));
    }
    if (v_WebSpriteLibrary_isImageReady$js_body$_15($src) ? 1 : 0) {
        var$10 = $sx;
        var$11 = $sy;
        var$12 = $sw;
        var$13 = $sh;
        var$9.drawImage($src, var$10, var$11, var$12, var$13, 0.0, 0.0, var$12, var$13);
    }
    var$9.restore();
    return $c;
},
v_WebSpriteLibrary_clipFull = $src => {
    let $w, $h, $c, var$5, $data, $px, $len, $i, $a, $r, var$12, $g, var$14, $b, $isGray, $v;
    v_WebSpriteLibrary_$callClinit();
    $w = !(v_WebSpriteLibrary_isImageReady$js_body$_15($src) ? 1 : 0) ? 1 : $src.width;
    $h = !(v_WebSpriteLibrary_isImageReady$js_body$_15($src) ? 1 : 0) ? 1 : $src.height;
    $c = v_WebSpriteLibrary_makeCanvas($w, $h);
    var$5 = $c.getContext("2d");
    if (v_WebSpriteLibrary_isImageReady$js_body$_15($src) ? 1 : 0) {
        var$5.drawImage($src, 0.0, 0.0);
        $data = var$5.getImageData(0.0, 0.0, $w, $h);
        $px = $data.data;
        $len = $rt_imul($w, $h) * 4 | 0;
        $i = 0;
        while ($i < $len) {
            $a = $px[$i + 3 | 0];
            if ($a >= 128) {
                $r = $px[$i];
                var$12 = $i + 1 | 0;
                $g = $px[var$12];
                var$14 = $i + 2 | 0;
                $b = $px[var$14];
                $isGray = jl_Math_abs($r - $g | 0) < 10 && jl_Math_abs($g - $b | 0) < 10 && jl_Math_abs($r - $b | 0) < 10 ? 1 : 0;
                if ($isGray && $r < 240) {
                    $v = 255 - $r | 0;
                    $px[$i] = $v;
                    $px[var$12] = $v;
                    $px[var$14] = $v;
                }
            }
            $i = $i + 4 | 0;
        }
        var$5.putImageData($data, 0.0, 0.0);
    }
    return $c;
},
v_WebSpriteLibrary_clipHalf = ($src, $bottom) => {
    let $w, $h, $c, var$6, $sy, var$8, var$9, var$10;
    v_WebSpriteLibrary_$callClinit();
    if (!(v_WebSpriteLibrary_isImageReady$js_body$_15($src) ? 1 : 0))
        return v_WebSpriteLibrary_makeBlank(222, 21);
    $w = $src.width;
    $h = $src.height / 2 | 0;
    $c = v_WebSpriteLibrary_makeCanvas($w, $h);
    var$6 = $c.getContext("2d");
    $sy = !$bottom ? 0 : $src.height / 2 | 0;
    var$8 = $sy;
    var$9 = $w;
    var$10 = $h;
    var$6.drawImage($src, 0.0, var$8, var$9, var$10, 0.0, 0.0, var$9, var$10);
    return $c;
},
v_WebSpriteLibrary_makeCanvas = ($w, $h) => {
    let var$3, var$4;
    v_WebSpriteLibrary_$callClinit();
    var$3 = v_WebSpriteLibrary_doc.createElement("canvas");
    var$4 = $w;
    var$3.width = var$4;
    var$4 = $h;
    var$3.height = var$4;
    return var$3;
},
v_WebSpriteLibrary_makeBlank = ($w, $h) => {
    v_WebSpriteLibrary_$callClinit();
    return v_WebSpriteLibrary_makeCanvas($w, $h);
},
v_WebSpriteLibrary__clinit_ = () => {
    v_WebSpriteLibrary_cache = ju_HashMap__init_2();
    v_WebSpriteLibrary_loadedCount = 0;
},
v_WebSpriteLibrary_isImageReady$js_body$_15 = var$1 => {
    return var$1 && var$1.complete && var$1.naturalHeight !== 0;
},
ma_ModelForView = $rt_classWithoutFields(0),
ma_ModelForController = $rt_classWithoutFields(0);
function m_GameModel() {
    let a = this; jl_Object.call(a);
    a.$state = null;
    a.$entitiesList = null;
    a.$aliensList = null;
    a.$alienShotsList = null;
    a.$playerShotsList = null;
    a.$coins = 0;
    a.$lives = 0;
    a.$score = 0;
    a.$highScore = 0;
    a.$numStage0 = 0;
    a.$player = null;
    a.$activePlayerShotsCount = 0;
    a.$frameNumber0 = 0;
    a.$secondsInState = 0;
}
let m_GameModel_bounds = null,
m_GameModel_model = null,
m_GameModel_alienHandler = null,
m_GameModel_$callClinit = () => {
    m_GameModel_$callClinit = $rt_eraseClinit(m_GameModel);
    m_GameModel__clinit_();
},
m_GameModel__init_0 = $this => {
    m_GameModel_$callClinit();
    jl_Object__init_($this);
    $this.$entitiesList = ju_ArrayList__init_();
    $this.$aliensList = ju_ArrayList__init_();
    $this.$alienShotsList = ju_ArrayList__init_();
    $this.$playerShotsList = ju_ArrayList__init_();
    s_GameState_$callClinit();
    $this.$state = s_GameState_INITIAL_SCREEN;
    m_GameModel_alienHandler = m_AlienHandler__init_0($this);
    $this.$player = me_Player__init_0(m_GameModel_bounds);
    m_GameModel_addEntity($this, $this.$player);
    $this.$activePlayerShotsCount = 0;
    $this.$numStage0 = 1;
    $this.$frameNumber0 = 0;
    $this.$secondsInState = 0;
    $this.$coins = 0;
    $this.$lives = 3;
    $this.$score = 0;
    $this.$highScore = 20000;
},
m_GameModel__init_ = () => {
    let var_0 = new m_GameModel();
    m_GameModel__init_0(var_0);
    return var_0;
},
m_GameModel_initModel = () => {
    m_GameModel_$callClinit();
    if (m_GameModel_model === null)
        m_GameModel_model = m_GameModel__init_();
},
m_GameModel_getInstanceForView = () => {
    m_GameModel_$callClinit();
    if (m_GameModel_model !== null)
        return m_GameModel_model;
    $rt_throw(jl_IllegalStateException__init_0($rt_s(30)));
},
m_GameModel_getInstanceForController = () => {
    m_GameModel_$callClinit();
    if (m_GameModel_model !== null)
        return m_GameModel_model;
    $rt_throw(jl_IllegalStateException__init_0($rt_s(30)));
},
m_GameModel_getSreenHeight = () => {
    m_GameModel_$callClinit();
    return 288;
},
m_GameModel_AreAllStageAlienPathsEmpty = () => {
    m_GameModel_$callClinit();
    return m_GameModel_alienHandler.$AreAllStageAlienPathsEmpty();
},
m_GameModel_addEntity = ($this, $e) => {
    $this.$entitiesList.$add2($e);
    if ($e instanceof me_Alien)
        $this.$aliensList.$add2($e);
    else if ($e instanceof me_AlienShot)
        $this.$alienShotsList.$add2($e);
    else if ($e instanceof me_PlayerShot)
        $this.$playerShotsList.$add2($e);
},
m_GameModel_getSecondsInState = $this => {
    return $this.$secondsInState;
},
m_GameModel_getState = $this => {
    return $this.$state;
},
m_GameModel_getBounds = $this => {
    m_GameModel_$callClinit();
    return m_GameModel_bounds;
},
m_GameModel_getEntityListForView = $this => {
    let $entityInfos, var$2, $e;
    $entityInfos = ju_ArrayList__init_();
    var$2 = $this.$entitiesList.$iterator();
    while (var$2.$hasNext()) {
        $e = var$2.$next();
        $entityInfos.$add2(s_EntityInfo__init_0($e.$getEntityName(), $e.$getX(), $e.$getY(), $e.$getDirection(), $e.$getAnimationFrame(), $e.$isToRemove()));
    }
    return $entityInfos;
},
m_GameModel_getScore = $this => {
    return $this.$score;
},
m_GameModel_getHighScore = $this => {
    return $this.$highScore;
},
m_GameModel_getLives = $this => {
    return $this.$lives;
},
m_GameModel_getCoins = $this => {
    return $this.$coins;
},
m_GameModel_getNumStage = $this => {
    return $this.$numStage0;
},
m_GameModel_update = ($this, $frameNumber) => {
    let $initialScore, var$3, $e, $aliensToAdd, $a, $pShot, var$8, var$9, $totalLifeToHaveAcquired, $scoreForPresentLife;
    $initialScore = $this.$score;
    $this.$frameNumber0 = $frameNumber;
    if ($frameNumber == c_GameController_getFramePerSeconds())
        $this.$secondsInState = $this.$secondsInState + 1 | 0;
    var$3 = $this.$entitiesList.$iterator();
    while (var$3.$hasNext()) {
        $e = var$3.$next();
        $e.$update($this.$frameNumber0);
    }
    a: {
        var$3 = $this.$state;
        s_GameState_$callClinit();
        if (var$3 === s_GameState_PLAYING) {
            m_GameModel_$callClinit();
            $aliensToAdd = m_GameModel_alienHandler.$updateHandlerAndGetNewAliens($frameNumber);
            var$3 = $aliensToAdd.$iterator();
            while (var$3.$hasNext()) {
                $a = var$3.$next();
                m_GameModel_addEntity($this, $a);
            }
            var$3 = $this.$playerShotsList.$iterator();
            while (true) {
                if (!var$3.$hasNext())
                    break a;
                $pShot = var$3.$next();
                var$8 = $this.$aliensList.$iterator();
                b: {
                    while (true) {
                        if (!var$8.$hasNext())
                            break b;
                        $a = var$8.$next();
                        if ($a.$checkCollisionWithPlayerShot($pShot) && $a.$isToRemove())
                            break;
                    }
                    $this.$score = $this.$score + $a.$getScoreValue() | 0;
                }
            }
        }
    }
    $this.$entitiesList.$removeIf(m_GameModel$update$lambda$_20_0__init_0($this));
    var$9 = $this.$numStage0;
    m_GameModel_$callClinit();
    if (var$9 != m_GameModel_alienHandler.$getNumStage() && $this.$state === s_GameState_PLAYING) {
        $this.$state = s_GameState_LOADING_NOT_FIRST_STAGE;
        $this.$secondsInState = 0;
        $this.$numStage0 = m_GameModel_alienHandler.$getNumStage();
    }
    if ($this.$score > $this.$highScore)
        $this.$highScore = $this.$score;
    if ($this.$state === s_GameState_LOADING_FIRST_STAGE && $this.$secondsInState > 6) {
        $this.$state = s_GameState_PLAYING;
        $this.$secondsInState = 0;
    }
    if ($this.$state === s_GameState_LOADING_NOT_FIRST_STAGE && $this.$secondsInState > 4) {
        $this.$state = s_GameState_PLAYING;
        $this.$secondsInState = 0;
    }
    if ($initialScore > 20000) {
        $totalLifeToHaveAcquired = 1 + ($initialScore / 70000 | 0) | 0;
        $scoreForPresentLife = $totalLifeToHaveAcquired * 70000 | 0;
        if ($initialScore < $scoreForPresentLife && $this.$score >= $scoreForPresentLife)
            $this.$lives = $this.$lives + 1 | 0;
    } else if (20000 <= $this.$score)
        $this.$lives = $this.$lives + 1 | 0;
},
m_GameModel_insertCoin = $this => {
    let var$1;
    $this.$coins = $this.$coins + 1 | 0;
    var$1 = $this.$state;
    s_GameState_$callClinit();
    if (var$1 === s_GameState_INITIAL_SCREEN) {
        $this.$state = s_GameState_COIN_INSERTED;
        $this.$secondsInState = 0;
    }
},
m_GameModel_spendCoin = $this => {
    if ($this.$coins > 0)
        $this.$coins = $this.$coins - 1 | 0;
},
m_GameModel_startGame = $this => {
    if ($this.$coins > 0) {
        s_GameState_$callClinit();
        $this.$state = s_GameState_LOADING_FIRST_STAGE;
        $this.$secondsInState = 0;
        $this.$spendCoin();
    }
},
m_GameModel_setPlayerMovingRight = ($this, $moving) => {
    $this.$player.$setPlayerMovingRight($moving);
},
m_GameModel_setPlayerMovingLeft = ($this, $moving) => {
    $this.$player.$setPlayerMovingLeft($moving);
},
m_GameModel_shoot = $this => {
    let $shot;
    if ($this.$activePlayerShotsCount < 2) {
        $shot = new me_PlayerShot;
        m_GameModel_$callClinit();
        me_PlayerShot__init_($shot, m_GameModel_bounds, $this.$player);
        m_GameModel_addEntity($this, $shot);
        $this.$activePlayerShotsCount = $this.$activePlayerShotsCount + 1 | 0;
    }
},
m_GameModel_nukeAll = $this => {
    let $listCopy, var$2, $e, var$4;
    $listCopy = ju_ArrayList__init_0($this.$entitiesList);
    var$2 = $listCopy.$iterator();
    while (var$2.$hasNext()) {
        a: {
            b: {
                $e = var$2.$next();
                m_GameModel$1_$callClinit();
                switch (m_GameModel$1_$SwitchMap$shared$Entities.data[jl_Enum_ordinal($e.$getEntityName())]) {
                    case 1:
                        break;
                    case 2:
                        break a;
                    case 3:
                        $this.$entitiesList.$remove0($e);
                        $this.$alienShotsList.$remove0($e);
                        break b;
                    default:
                        break b;
                }
                break a;
            }
            if ($e instanceof me_Alien) {
                var$4 = $e;
                m_GameModel_$callClinit();
                if (var$4.$checkCollisionWith(m_GameModel_bounds)) {
                    $this.$aliensList.$remove0($e);
                    $this.$entitiesList.$remove0($e);
                }
            }
        }
    }
},
m_GameModel_lambda$update$0 = ($this, $e) => {
    if (!$e.$isToRemove())
        return 0;
    if ($e instanceof me_PlayerShot) {
        $this.$activePlayerShotsCount = $this.$activePlayerShotsCount - 1 | 0;
        $this.$playerShotsList.$remove0($e);
    }
    if ($e instanceof me_Alien)
        $this.$aliensList.$remove0($e);
    if ($e instanceof me_AlienShot)
        $this.$alienShotsList.$remove0($e);
    return 1;
},
m_GameModel__clinit_ = () => {
    m_GameModel_bounds = md_WorldBounds__init_0(224, 288);
},
jur_AbstractCharClass$LazyAlpha = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyAlpha__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyAlpha__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyAlpha();
    jur_AbstractCharClass$LazyAlpha__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyAlpha_computeValue = $this => {
    return ((jur_CharClass__init_()).$add0(97, 122)).$add0(65, 90);
},
jur_BackReferencedSingleSet = $rt_classWithoutFields(jur_SingleSet),
jur_BackReferencedSingleSet__init_ = ($this, $node) => {
    jur_SingleSet__init_($this, $node.$kid, $node.$fSet);
},
jur_BackReferencedSingleSet__init_0 = var_0 => {
    let var_1 = new jur_BackReferencedSingleSet();
    jur_BackReferencedSingleSet__init_(var_1, var_0);
    return var_1;
},
jur_BackReferencedSingleSet_find = ($this, $startSearch, $testString, $matchResult) => {
    let $res, $lastIndex, $saveStart;
    $res = 0;
    $lastIndex = $matchResult.$getRightBound();
    a: {
        while (true) {
            if ($startSearch > $lastIndex) {
                $startSearch = $res;
                break a;
            }
            $saveStart = $matchResult.$getStart($this.$groupIndex);
            $matchResult.$setStart($this.$groupIndex, $startSearch);
            $res = $this.$kid.$matches($startSearch, $testString, $matchResult);
            if ($res >= 0)
                break;
            $matchResult.$setStart($this.$groupIndex, $saveStart);
            $startSearch = $startSearch + 1 | 0;
        }
    }
    return $startSearch;
},
jur_BackReferencedSingleSet_findBack = ($this, $stringIndex, $startSearch, $testString, $matchResult) => {
    let $res, $saveStart;
    $res = 0;
    a: {
        while (true) {
            if ($startSearch < $stringIndex) {
                $startSearch = $res;
                break a;
            }
            $saveStart = $matchResult.$getStart($this.$groupIndex);
            $matchResult.$setStart($this.$groupIndex, $startSearch);
            $res = $this.$kid.$matches($startSearch, $testString, $matchResult);
            if ($res >= 0)
                break;
            $matchResult.$setStart($this.$groupIndex, $saveStart);
            $startSearch = $startSearch + (-1) | 0;
        }
    }
    return $startSearch;
},
jur_BackReferencedSingleSet_processBackRefReplacement = $this => {
    return null;
},
jur_AbstractCharClass$LazyWord = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyWord__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyWord__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyWord();
    jur_AbstractCharClass$LazyWord__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyWord_computeValue = $this => {
    return ((((jur_CharClass__init_()).$add0(97, 122)).$add0(65, 90)).$add0(48, 57)).$add(95);
},
jur_AbstractCharClass$LazyNonWord = $rt_classWithoutFields(jur_AbstractCharClass$LazyWord),
jur_AbstractCharClass$LazyNonWord__init_ = $this => {
    jur_AbstractCharClass$LazyWord__init_($this);
},
jur_AbstractCharClass$LazyNonWord__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyNonWord();
    jur_AbstractCharClass$LazyNonWord__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyNonWord_computeValue = $this => {
    let $chCl;
    $chCl = (jur_AbstractCharClass$LazyWord_computeValue($this)).$setNegative(1);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
};
function jur_LeafSet() {
    jur_AbstractSet.call(this);
    this.$charCount0 = 0;
}
let jur_LeafSet__init_0 = ($this, $next) => {
    jur_AbstractSet__init_0($this, $next);
    $this.$charCount0 = 1;
    $this.$setType(1);
},
jur_LeafSet__init_ = $this => {
    jur_AbstractSet__init_($this);
    $this.$charCount0 = 1;
},
jur_LeafSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $shift;
    if (($stringIndex + $this.$charCount() | 0) > $matchResult.$getRightBound()) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    $shift = $this.$accepts($stringIndex, $testString);
    if ($shift < 0)
        return (-1);
    return $this.$next1.$matches($stringIndex + $shift | 0, $testString, $matchResult);
},
jur_LeafSet_charCount = $this => {
    return $this.$charCount0;
},
jur_LeafSet_hasConsumed = ($this, $mr) => {
    return 1;
};
function jur_CISequenceSet() {
    jur_LeafSet.call(this);
    this.$string1 = null;
}
let jur_CISequenceSet__init_ = ($this, $substring) => {
    jur_LeafSet__init_($this);
    $this.$string1 = $substring.$toString();
    $this.$charCount0 = $substring.$length();
},
jur_CISequenceSet__init_0 = var_0 => {
    let var_1 = new jur_CISequenceSet();
    jur_CISequenceSet__init_(var_1, var_0);
    return var_1;
},
jur_CISequenceSet_accepts = ($this, $strIndex, $testString) => {
    let $i, var$4, var$5, var$6;
    $i = 0;
    while (true) {
        if ($i >= $this.$string1.$length())
            return $this.$string1.$length();
        var$4 = $this.$string1.$charAt($i);
        var$5 = $strIndex + $i | 0;
        if (var$4 != $testString.$charAt(var$5)) {
            var$6 = $this.$string1;
            if (jur_Pattern_getSupplement(var$6.$charAt($i)) != $testString.$charAt(var$5))
                break;
        }
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_CISequenceSet_getName = $this => {
    let var$1, var$2;
    var$1 = $this.$string1;
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(31)), var$1);
    return jl_StringBuilder_toString(var$2);
},
jl_CharSequence = $rt_classWithoutFields(0),
ju_Map = $rt_classWithoutFields(0),
ju_SequencedMap = $rt_classWithoutFields(0);
function jl_Throwable() {
    let a = this; jl_Object.call(a);
    a.$message = null;
    a.$cause = null;
    a.$suppressionEnabled = 0;
    a.$writableStackTrace = 0;
    a.$stackTrace = null;
}
let jl_Throwable__init_ = $this => {
    jl_Throwable_initNativeException($this);
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$fillInStackTrace();
},
jl_Throwable__init_3 = () => {
    let var_0 = new jl_Throwable();
    jl_Throwable__init_(var_0);
    return var_0;
},
jl_Throwable__init_1 = ($this, $message) => {
    jl_Throwable_initNativeException($this);
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$fillInStackTrace();
    $this.$message = $message;
},
jl_Throwable__init_2 = var_0 => {
    let var_1 = new jl_Throwable();
    jl_Throwable__init_1(var_1, var_0);
    return var_1;
},
jl_Throwable__init_0 = ($this, $cause) => {
    jl_Throwable_initNativeException($this);
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$fillInStackTrace();
    $this.$cause = $cause;
},
jl_Throwable__init_4 = var_0 => {
    let var_1 = new jl_Throwable();
    jl_Throwable__init_0(var_1, var_0);
    return var_1;
},
jl_Throwable_fillInStackTrace = $this => {
    return $this;
},
jl_Throwable_initNativeException = $this => {
    $rt_fillNativeException($this);
},
jl_Throwable_ensureStackTrace = $this => {
    return;
},
jl_Throwable_getMessage = $this => {
    return $this.$message;
},
jl_Throwable_getLocalizedMessage = $this => {
    return $this.$getMessage();
},
jl_Throwable_getCause = $this => {
    return $this.$cause === $this ? null : $this.$cause;
},
jl_Throwable_printStackTrace = $this => {
    $this.$printStackTrace(jl_System_err());
},
jl_Throwable_printStackTrace0 = ($this, $stream) => {
    let $message, var$3, var$4, var$5, var$6, $element;
    $stream.$print(jl_Class_getName(jl_Object_getClass($this)));
    $message = $this.$getLocalizedMessage();
    if ($message !== null) {
        var$3 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(4)), $message);
        $stream.$print(jl_StringBuilder_toString(var$3));
    }
    a: {
        $stream.$println();
        jl_Throwable_ensureStackTrace($this);
        if ($this.$stackTrace !== null) {
            var$4 = $this.$stackTrace.data;
            var$5 = var$4.length;
            var$6 = 0;
            while (true) {
                if (var$6 >= var$5)
                    break a;
                $element = var$4[var$6];
                $stream.$print($rt_s(32));
                $stream.$println0($element);
                var$6 = var$6 + 1 | 0;
            }
        }
    }
    if ($this.$cause !== null && $this.$cause !== $this) {
        $stream.$print($rt_s(33));
        $this.$cause.$printStackTrace($stream);
    }
},
jl_Exception = $rt_classWithoutFields(jl_Throwable),
jl_Exception__init_ = $this => {
    jl_Throwable__init_($this);
},
jl_Exception__init_1 = () => {
    let var_0 = new jl_Exception();
    jl_Exception__init_(var_0);
    return var_0;
},
jl_Exception__init_0 = ($this, $message) => {
    jl_Throwable__init_1($this, $message);
},
jl_Exception__init_2 = var_0 => {
    let var_1 = new jl_Exception();
    jl_Exception__init_0(var_1, var_0);
    return var_1;
},
jl_RuntimeException = $rt_classWithoutFields(jl_Exception),
jl_RuntimeException__init_ = $this => {
    jl_Exception__init_($this);
},
jl_RuntimeException__init_2 = () => {
    let var_0 = new jl_RuntimeException();
    jl_RuntimeException__init_(var_0);
    return var_0;
},
jl_RuntimeException__init_0 = ($this, $message) => {
    jl_Exception__init_0($this, $message);
},
jl_RuntimeException__init_1 = var_0 => {
    let var_1 = new jl_RuntimeException();
    jl_RuntimeException__init_0(var_1, var_0);
    return var_1;
},
jl_IndexOutOfBoundsException = $rt_classWithoutFields(jl_RuntimeException),
jl_IndexOutOfBoundsException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
jl_IndexOutOfBoundsException__init_ = () => {
    let var_0 = new jl_IndexOutOfBoundsException();
    jl_IndexOutOfBoundsException__init_0(var_0);
    return var_0;
},
jl_IndexOutOfBoundsException__init_2 = ($this, $message) => {
    jl_RuntimeException__init_0($this, $message);
},
jl_IndexOutOfBoundsException__init_1 = var_0 => {
    let var_1 = new jl_IndexOutOfBoundsException();
    jl_IndexOutOfBoundsException__init_2(var_1, var_0);
    return var_1;
},
jl_StringIndexOutOfBoundsException = $rt_classWithoutFields(jl_IndexOutOfBoundsException),
jl_StringIndexOutOfBoundsException__init_0 = $this => {
    jl_IndexOutOfBoundsException__init_0($this);
},
jl_StringIndexOutOfBoundsException__init_ = () => {
    let var_0 = new jl_StringIndexOutOfBoundsException();
    jl_StringIndexOutOfBoundsException__init_0(var_0);
    return var_0;
};
function ju_MissingResourceException() {
    let a = this; jl_RuntimeException.call(a);
    a.$className = null;
    a.$key0 = null;
}
let ju_MissingResourceException__init_ = ($this, $s, $className, $key) => {
    jl_RuntimeException__init_0($this, $s);
    $this.$className = $className;
    $this.$key0 = $key;
},
ju_MissingResourceException__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new ju_MissingResourceException();
    ju_MissingResourceException__init_(var_3, var_0, var_1, var_2);
    return var_3;
};
function jnc_CharsetDecoder() {
    let a = this; jl_Object.call(a);
    a.$charset0 = null;
    a.$averageCharsPerByte = 0.0;
    a.$maxCharsPerByte = 0.0;
    a.$replacement = null;
    a.$malformedAction = null;
    a.$unmappableAction = null;
    a.$state0 = 0;
}
let jnc_CharsetDecoder__init_ = ($this, $cs, $averageCharsPerByte, $maxCharsPerByte) => {
    let var$4, var$5;
    jl_Object__init_($this);
    $this.$replacement = $rt_s(34);
    jnc_CodingErrorAction_$callClinit();
    $this.$malformedAction = jnc_CodingErrorAction_REPORT;
    $this.$unmappableAction = jnc_CodingErrorAction_REPORT;
    if ($averageCharsPerByte <= 0.0) {
        var$4 = new jl_IllegalArgumentException;
        var$5 = jl_StringBuilder__init_();
        jl_StringBuilder_append2(jl_StringBuilder_append(var$5, $rt_s(35)), $averageCharsPerByte);
        jl_IllegalArgumentException__init_1(var$4, jl_StringBuilder_toString(var$5));
        $rt_throw(var$4);
    }
    if (!($maxCharsPerByte <= 0.0)) {
        $this.$charset0 = $cs;
        $this.$averageCharsPerByte = $averageCharsPerByte;
        $this.$maxCharsPerByte = $maxCharsPerByte;
        return;
    }
    var$4 = new jl_IllegalArgumentException;
    var$5 = jl_StringBuilder__init_();
    jl_StringBuilder_append2(jl_StringBuilder_append(var$5, $rt_s(36)), $maxCharsPerByte);
    jl_IllegalArgumentException__init_1(var$4, jl_StringBuilder_toString(var$5));
    $rt_throw(var$4);
},
jnc_CharsetDecoder_onMalformedInput = ($this, $newAction) => {
    if ($newAction !== null) {
        $this.$malformedAction = $newAction;
        $this.$implOnMalformedInput($newAction);
        return $this;
    }
    $rt_throw(jl_IllegalArgumentException__init_0($rt_s(37)));
},
jnc_CharsetDecoder_implOnMalformedInput = ($this, $newAction) => {
    return;
},
jnc_CharsetDecoder_onUnmappableCharacter = ($this, $newAction) => {
    if ($newAction !== null) {
        $this.$unmappableAction = $newAction;
        $this.$implOnUnmappableCharacter($newAction);
        return $this;
    }
    $rt_throw(jl_IllegalArgumentException__init_0($rt_s(37)));
},
jnc_CharsetDecoder_implOnUnmappableCharacter = ($this, $newAction) => {
    return;
},
jnc_CharsetDecoder_decode = ($this, $in, $out, $endOfInput) => {
    let $result, $e, var$6, $$je;
    if (!($this.$state0 == 2 && !$endOfInput) && $this.$state0 != 3) {
        $this.$state0 = $endOfInput ? 2 : 1;
        while (true) {
            try {
                $result = $this.$decodeLoop($in, $out);
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_RuntimeException) {
                    $e = $$je;
                    $rt_throw(jnc_CoderMalfunctionError__init_0($e));
                } else {
                    throw $$e;
                }
            }
            if ($result.$isOverflow())
                return $result;
            if ($result.$isUnderflow()) {
                if ($endOfInput && jn_Buffer_hasRemaining($in)) {
                    var$6 = $this.$malformedAction;
                    jnc_CodingErrorAction_$callClinit();
                    if (var$6 === jnc_CodingErrorAction_REPORT)
                        return jnc_CoderResult_malformedForLength(jn_Buffer_remaining($in));
                    if (jn_Buffer_remaining($out) <= $this.$replacement.$length())
                        return jnc_CoderResult_OVERFLOW;
                    $in.$position(jn_Buffer_position($in) + jn_Buffer_remaining($in) | 0);
                    if ($this.$malformedAction === jnc_CodingErrorAction_REPLACE)
                        jn_CharBuffer_put($out, $this.$replacement);
                }
                return $result;
            }
            if ($result.$isMalformed()) {
                var$6 = $this.$malformedAction;
                jnc_CodingErrorAction_$callClinit();
                if (var$6 === jnc_CodingErrorAction_REPORT)
                    return $result;
                if ($this.$malformedAction === jnc_CodingErrorAction_REPLACE) {
                    if (jn_Buffer_remaining($out) < $this.$replacement.$length())
                        return jnc_CoderResult_OVERFLOW;
                    jn_CharBuffer_put($out, $this.$replacement);
                }
                $in.$position(jn_Buffer_position($in) + $result.$length() | 0);
            } else if ($result.$isUnmappable()) {
                var$6 = $this.$unmappableAction;
                jnc_CodingErrorAction_$callClinit();
                if (var$6 === jnc_CodingErrorAction_REPORT)
                    break;
                if ($this.$unmappableAction === jnc_CodingErrorAction_REPLACE) {
                    if (jn_Buffer_remaining($out) < $this.$replacement.$length())
                        return jnc_CoderResult_OVERFLOW;
                    jn_CharBuffer_put($out, $this.$replacement);
                }
                $in.$position(jn_Buffer_position($in) + $result.$length() | 0);
            }
        }
        return $result;
    }
    $rt_throw(jl_IllegalStateException__init_());
},
jnc_CharsetDecoder_flush = ($this, $out) => {
    if ($this.$state0 != 3 && $this.$state0 != 2)
        $rt_throw(jl_IllegalStateException__init_());
    $this.$state0 = 3;
    return $this.$implFlush($out);
},
jnc_CharsetDecoder_implFlush = ($this, $out) => {
    jnc_CoderResult_$callClinit();
    return jnc_CoderResult_UNDERFLOW;
};
function jur_CIBackReferenceSet() {
    let a = this; jur_JointSet.call(a);
    a.$referencedGroup = 0;
    a.$consCounter1 = 0;
}
let jur_CIBackReferenceSet__init_ = ($this, $groupIndex, $consCounter) => {
    jur_JointSet__init_($this);
    $this.$referencedGroup = $groupIndex;
    $this.$consCounter1 = $consCounter;
},
jur_CIBackReferenceSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CIBackReferenceSet();
    jur_CIBackReferenceSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CIBackReferenceSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $group, $i, var$6, var$7;
    $group = $this.$getString($matchResult);
    if ($group !== null && ($stringIndex + $group.$length() | 0) <= $matchResult.$getRightBound()) {
        $i = 0;
        while (true) {
            if ($i >= $group.$length()) {
                $matchResult.$setConsumed($this.$consCounter1, $group.$length());
                return $this.$next1.$matches($stringIndex + $group.$length() | 0, $testString, $matchResult);
            }
            var$6 = $group.$charAt($i);
            var$7 = $stringIndex + $i | 0;
            if (var$6 != $testString.$charAt(var$7) && jur_Pattern_getSupplement($group.$charAt($i)) != $testString.$charAt(var$7))
                break;
            $i = $i + 1 | 0;
        }
        return (-1);
    }
    return (-1);
},
jur_CIBackReferenceSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_CIBackReferenceSet_getString = ($this, $matchResult) => {
    let $res;
    $res = $matchResult.$getGroupNoCheck($this.$referencedGroup);
    return $res;
},
jur_CIBackReferenceSet_getName = $this => {
    let var$1, var$2;
    var$1 = $this.$groupIndex;
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append1(jl_StringBuilder_append(var$2, $rt_s(38)), var$1);
    return jl_StringBuilder_toString(var$2);
},
jur_CIBackReferenceSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !$matchResult.$getConsumed($this.$consCounter1) ? 0 : 1;
    $matchResult.$setConsumed($this.$consCounter1, (-1));
    return $res;
};
function jur_UCIBackReferenceSet() {
    jur_CIBackReferenceSet.call(this);
    this.$groupIndex1 = 0;
}
let jur_UCIBackReferenceSet__init_ = ($this, $groupIndex, $consCounter) => {
    jur_CIBackReferenceSet__init_($this, $groupIndex, $consCounter);
},
jur_UCIBackReferenceSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_UCIBackReferenceSet();
    jur_UCIBackReferenceSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_UCIBackReferenceSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $group, $i, var$6, var$7;
    $group = $this.$getString($matchResult);
    if ($group !== null && ($stringIndex + $group.$length() | 0) <= $matchResult.$getRightBound()) {
        $i = 0;
        while (true) {
            if ($i >= $group.$length()) {
                $matchResult.$setConsumed($this.$consCounter1, $group.$length());
                return $this.$next1.$matches($stringIndex + $group.$length() | 0, $testString, $matchResult);
            }
            var$6 = jl_Character_toLowerCase(jl_Character_toUpperCase($group.$charAt($i)));
            var$7 = $stringIndex + $i | 0;
            var$7 = jl_Character_toUpperCase($testString.$charAt(var$7));
            if (var$6 != jl_Character_toLowerCase(var$7))
                break;
            $i = $i + 1 | 0;
        }
        return (-1);
    }
    return (-1);
},
jur_UCIBackReferenceSet_getName = $this => {
    let var$1, var$2;
    var$1 = $this.$groupIndex1;
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append1(jl_StringBuilder_append(var$2, $rt_s(39)), var$1);
    return jl_StringBuilder_toString(var$2);
};
function jn_ByteOrder() {
    jl_Object.call(this);
    this.$name2 = null;
}
let jn_ByteOrder_BIG_ENDIAN = null,
jn_ByteOrder_LITTLE_ENDIAN = null,
jn_ByteOrder_$callClinit = () => {
    jn_ByteOrder_$callClinit = $rt_eraseClinit(jn_ByteOrder);
    jn_ByteOrder__clinit_();
},
jn_ByteOrder__init_0 = ($this, $name) => {
    jn_ByteOrder_$callClinit();
    jl_Object__init_($this);
    $this.$name2 = $name;
},
jn_ByteOrder__init_ = var_0 => {
    let var_1 = new jn_ByteOrder();
    jn_ByteOrder__init_0(var_1, var_0);
    return var_1;
},
jn_ByteOrder__clinit_ = () => {
    jn_ByteOrder_BIG_ENDIAN = jn_ByteOrder__init_($rt_s(40));
    jn_ByteOrder_LITTLE_ENDIAN = jn_ByteOrder__init_($rt_s(41));
};
function jur_AbstractCharClass$LazyCategory() {
    let a = this; jur_AbstractCharClass$LazyCharClass.call(a);
    a.$category1 = 0;
    a.$mayContainSupplCodepoints1 = 0;
    a.$containsAllSurrogates0 = 0;
}
let jur_AbstractCharClass$LazyCategory__init_0 = ($this, $cat, $mayContainSupplCodepoints) => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
    $this.$mayContainSupplCodepoints1 = $mayContainSupplCodepoints;
    $this.$category1 = $cat;
},
jur_AbstractCharClass$LazyCategory__init_ = (var_0, var_1) => {
    let var_2 = new jur_AbstractCharClass$LazyCategory();
    jur_AbstractCharClass$LazyCategory__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_AbstractCharClass$LazyCategory__init_1 = ($this, $cat, $mayContainSupplCodepoints, $containsAllSurrogates) => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
    $this.$containsAllSurrogates0 = $containsAllSurrogates;
    $this.$mayContainSupplCodepoints1 = $mayContainSupplCodepoints;
    $this.$category1 = $cat;
},
jur_AbstractCharClass$LazyCategory__init_2 = (var_0, var_1, var_2) => {
    let var_3 = new jur_AbstractCharClass$LazyCategory();
    jur_AbstractCharClass$LazyCategory__init_1(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_AbstractCharClass$LazyCategory_computeValue = $this => {
    let $chCl;
    $chCl = jur_UnicodeCategory__init_0($this.$category1);
    if ($this.$containsAllSurrogates0)
        $chCl.$lowHighSurrogates.$set(0, 2048);
    $chCl.$mayContainSupplCodepoints0 = $this.$mayContainSupplCodepoints1;
    return $chCl;
};
function jur_QuantifierSet() {
    jur_AbstractSet.call(this);
    this.$innerSet = null;
}
let jur_QuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_AbstractSet__init_0($this, $next);
    $this.$innerSet = $innerSet;
    $this.$setType($type);
},
jur_QuantifierSet_getInnerSet = $this => {
    return $this.$innerSet;
},
jur_QuantifierSet_first = ($this, $set) => {
    return !$this.$innerSet.$first($set) && !$this.$next1.$first($set) ? 0 : 1;
},
jur_QuantifierSet_hasConsumed = ($this, $mr) => {
    return 1;
},
jur_QuantifierSet_processSecondPass = $this => {
    let $set;
    $this.$isSecondPassVisited = 1;
    if ($this.$next1 !== null && !$this.$next1.$isSecondPassVisited) {
        $set = $this.$next1.$processBackRefReplacement();
        if ($set !== null) {
            $this.$next1.$isSecondPassVisited = 1;
            $this.$next1 = $set;
        }
        $this.$next1.$processSecondPass();
    }
    if ($this.$innerSet !== null) {
        if (!$this.$innerSet.$isSecondPassVisited) {
            $set = $this.$innerSet.$processBackRefReplacement();
            if ($set !== null) {
                $this.$innerSet.$isSecondPassVisited = 1;
                $this.$innerSet = $set;
            }
            $this.$innerSet.$processSecondPass();
        } else if ($this.$innerSet instanceof jur_SingleSet && $this.$innerSet.$fSet.$isBackReferenced)
            $this.$innerSet = $this.$innerSet.$next1;
    }
},
jur_DotAllQuantifierSet = $rt_classWithoutFields(jur_QuantifierSet),
jur_DotAllQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_QuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_DotAllQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_DotAllQuantifierSet();
    jur_DotAllQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_DotAllQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength;
    $strLength = $matchResult.$getRightBound();
    if ($strLength > $stringIndex)
        return $this.$next1.$findBack($stringIndex, $strLength, $testString, $matchResult);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_DotAllQuantifierSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength;
    $strLength = $matchResult.$getRightBound();
    if ($this.$next1.$findBack($stringIndex, $strLength, $testString, $matchResult) >= 0)
        return $stringIndex;
    return (-1);
},
jur_DotAllQuantifierSet_getName = $this => {
    return $rt_s(42);
},
otji_JSWrapper$Helper = $rt_classWithoutFields(),
otji_JSWrapper$Helper_hashCodes = null,
otji_JSWrapper$Helper_wrappers = null,
otji_JSWrapper$Helper_stringWrappers = null,
otji_JSWrapper$Helper_numberWrappers = null,
otji_JSWrapper$Helper_undefinedWrapper = null,
otji_JSWrapper$Helper_stringFinalizationRegistry = null,
otji_JSWrapper$Helper_numberFinalizationRegistry = null,
otji_JSWrapper$Helper_$callClinit = () => {
    otji_JSWrapper$Helper_$callClinit = $rt_eraseClinit(otji_JSWrapper$Helper);
    otji_JSWrapper$Helper__clinit_();
},
otji_JSWrapper$Helper_lambda$static$1 = $token => {
    otji_JSWrapper$Helper_$callClinit();
    otji_JSWrapper$Helper_numberWrappers.delete($token);
},
otji_JSWrapper$Helper_lambda$static$0 = $token => {
    otji_JSWrapper$Helper_$callClinit();
    otji_JSWrapper$Helper_stringWrappers.delete($token);
},
otji_JSWrapper$Helper__clinit_ = () => {
    let var$1;
    otji_JSWrapper$Helper_hashCodes = new WeakMap();
    var$1 = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new WeakMap();
    otji_JSWrapper$Helper_wrappers = var$1;
    var$1 = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new Map();
    otji_JSWrapper$Helper_stringWrappers = var$1;
    var$1 = !(typeof WeakRef !== 'undefined' ? 1 : 0) ? null : new Map();
    otji_JSWrapper$Helper_numberWrappers = var$1;
    if (otji_JSWrapper$Helper_stringWrappers === null)
        var$1 = null;
    else {
        var$1 = otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_0();
        var$1 = new FinalizationRegistry(otji_JS_function(otji_JSWrapper_unwrap(var$1), "accept"));
    }
    otji_JSWrapper$Helper_stringFinalizationRegistry = var$1;
    if (otji_JSWrapper$Helper_numberWrappers === null)
        var$1 = null;
    else {
        var$1 = otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_0();
        var$1 = new FinalizationRegistry(otji_JS_function(otji_JSWrapper_unwrap(var$1), "accept"));
    }
    otji_JSWrapper$Helper_numberFinalizationRegistry = var$1;
},
ju_Comparator = $rt_classWithoutFields(0),
jl_String$_clinit_$lambda$_118_0 = $rt_classWithoutFields(),
jl_String$_clinit_$lambda$_118_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
jl_String$_clinit_$lambda$_118_0__init_0 = () => {
    let var_0 = new jl_String$_clinit_$lambda$_118_0();
    jl_String$_clinit_$lambda$_118_0__init_(var_0);
    return var_0;
};
function jur_FSet() {
    let a = this; jur_AbstractSet.call(a);
    a.$isBackReferenced = 0;
    a.$groupIndex0 = 0;
}
let jur_FSet_posFSet = null,
jur_FSet_$callClinit = () => {
    jur_FSet_$callClinit = $rt_eraseClinit(jur_FSet);
    jur_FSet__clinit_();
},
jur_FSet__init_ = ($this, $groupIndex) => {
    jur_FSet_$callClinit();
    jur_AbstractSet__init_($this);
    $this.$groupIndex0 = $groupIndex;
},
jur_FSet__init_0 = var_0 => {
    let var_1 = new jur_FSet();
    jur_FSet__init_(var_1, var_0);
    return var_1;
},
jur_FSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $end, $shift;
    $end = $matchResult.$getEnd($this.$groupIndex0);
    $matchResult.$setEnd($this.$groupIndex0, $stringIndex);
    $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($shift < 0)
        $matchResult.$setEnd($this.$groupIndex0, $end);
    return $shift;
},
jur_FSet_getGroupIndex = $this => {
    return $this.$groupIndex0;
},
jur_FSet_getName = $this => {
    return $rt_s(43);
},
jur_FSet_hasConsumed = ($this, $mr) => {
    return 0;
},
jur_FSet__clinit_ = () => {
    jur_FSet_posFSet = jur_FSet$PossessiveFSet__init_0();
},
jur_BehindFSet = $rt_classWithoutFields(jur_FSet),
jur_BehindFSet__init_ = ($this, $groupIndex) => {
    jur_FSet__init_($this, $groupIndex);
},
jur_BehindFSet__init_0 = var_0 => {
    let var_1 = new jur_BehindFSet();
    jur_BehindFSet__init_(var_1, var_0);
    return var_1;
},
jur_BehindFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $gr, $rightBound;
    $gr = $this.$getGroupIndex();
    $rightBound = $matchResult.$getConsumed($gr);
    if ($rightBound != $stringIndex)
        $stringIndex = (-1);
    return $stringIndex;
},
jur_BehindFSet_getName = $this => {
    return $rt_s(44);
};
function jur_LowHighSurrogateRangeSet() {
    let a = this; jur_JointSet.call(a);
    a.$surrChars = null;
    a.$alt1 = 0;
}
let jur_LowHighSurrogateRangeSet__init_ = ($this, $surrChars) => {
    jur_JointSet__init_($this);
    $this.$surrChars = $surrChars.$getInstance();
    $this.$alt1 = $surrChars.$alt;
},
jur_LowHighSurrogateRangeSet__init_0 = var_0 => {
    let var_1 = new jur_LowHighSurrogateRangeSet();
    jur_LowHighSurrogateRangeSet__init_(var_1, var_0);
    return var_1;
},
jur_LowHighSurrogateRangeSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_LowHighSurrogateRangeSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $startStr, $strLength, var$6, var$7, $ch, $low, $high;
    $startStr = $matchResult.$getLeftBound();
    $strLength = $matchResult.$getRightBound();
    var$6 = $stringIndex + 1 | 0;
    var$7 = $rt_compare(var$6, $strLength);
    if (var$7 > 0) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    $ch = $testString.$charAt($stringIndex);
    if (!$this.$surrChars.$contains($ch))
        return (-1);
    if (jl_Character_isHighSurrogate($ch)) {
        if (var$7 < 0) {
            $low = $testString.$charAt(var$6);
            if (jl_Character_isLowSurrogate($low))
                return (-1);
        }
    } else if (jl_Character_isLowSurrogate($ch) && $stringIndex > $startStr) {
        $high = $testString.$charAt($stringIndex - 1 | 0);
        if (jl_Character_isHighSurrogate($high))
            return (-1);
    }
    return $this.$next1.$matches(var$6, $testString, $matchResult);
},
jur_LowHighSurrogateRangeSet_getName = $this => {
    let var$1, var$2, var$3;
    var$1 = !$this.$alt1 ? $rt_s(45) : $rt_s(46);
    var$2 = $this.$surrChars.$toString();
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(47)), var$1), var$2);
    return jl_StringBuilder_toString(var$3);
},
jur_GroupQuantifierSet = $rt_classWithoutFields(jur_QuantifierSet),
jur_GroupQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_QuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_GroupQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_GroupQuantifierSet();
    jur_GroupQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_GroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex;
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex >= 0)
        return $nextIndex;
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_GroupQuantifierSet_getName = $this => {
    return $rt_s(48);
},
jur_ReluctantGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet),
jur_ReluctantGroupQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_GroupQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_ReluctantGroupQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_ReluctantGroupQuantifierSet();
    jur_ReluctantGroupQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_ReluctantGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $res;
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $res = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($res >= 0)
        return $res;
    return $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
},
jl_ClassCastException = $rt_classWithoutFields(jl_RuntimeException),
jl_Error = $rt_classWithoutFields(jl_Throwable),
jl_Error__init_ = ($this, $cause) => {
    jl_Throwable__init_0($this, $cause);
},
jl_Error__init_0 = var_0 => {
    let var_1 = new jl_Error();
    jl_Error__init_(var_1, var_0);
    return var_1;
},
jnc_CoderMalfunctionError = $rt_classWithoutFields(jl_Error),
jnc_CoderMalfunctionError__init_ = ($this, $cause) => {
    jl_Error__init_($this, $cause);
},
jnc_CoderMalfunctionError__init_0 = var_0 => {
    let var_1 = new jnc_CoderMalfunctionError();
    jnc_CoderMalfunctionError__init_(var_1, var_0);
    return var_1;
},
ju_AbstractMap = $rt_classWithoutFields(),
ju_AbstractMap__init_ = $this => {
    jl_Object__init_($this);
},
ju_AbstractMap_put = ($this, $key, $value) => {
    $rt_throw(jl_UnsupportedOperationException__init_());
},
jl_Cloneable = $rt_classWithoutFields(0);
function ju_HashMap() {
    let a = this; ju_AbstractMap.call(a);
    a.$elementCount = 0;
    a.$elementData = null;
    a.$modCount0 = 0;
    a.$loadFactor = 0.0;
    a.$threshold = 0;
}
let ju_HashMap_newElementArray = ($this, $s) => {
    return $rt_createArray(ju_HashMap$HashEntry, $s);
},
ju_HashMap__init_0 = $this => {
    ju_HashMap__init_($this, 16);
},
ju_HashMap__init_2 = () => {
    let var_0 = new ju_HashMap();
    ju_HashMap__init_0(var_0);
    return var_0;
},
ju_HashMap__init_ = ($this, $capacity) => {
    ju_HashMap__init_1($this, $capacity, 0.75);
},
ju_HashMap__init_3 = var_0 => {
    let var_1 = new ju_HashMap();
    ju_HashMap__init_(var_1, var_0);
    return var_1;
},
ju_HashMap_calculateCapacity = $x => {
    let var$2, var$3;
    if ($x >= 1073741824)
        return 1073741824;
    if (!$x)
        return 16;
    var$2 = $x - 1 | 0;
    var$3 = var$2 | var$2 >> 1;
    var$3 = var$3 | var$3 >> 2;
    var$3 = var$3 | var$3 >> 4;
    var$3 = var$3 | var$3 >> 8;
    var$3 = var$3 | var$3 >> 16;
    return var$3 + 1 | 0;
},
ju_HashMap__init_1 = ($this, $capacity, $loadFactor) => {
    let var$3;
    ju_AbstractMap__init_($this);
    if ($capacity >= 0 && $loadFactor > 0.0) {
        var$3 = ju_HashMap_calculateCapacity($capacity);
        $this.$elementCount = 0;
        $this.$elementData = $this.$newElementArray(var$3);
        $this.$loadFactor = $loadFactor;
        ju_HashMap_computeThreshold($this);
        return;
    }
    $rt_throw(jl_IllegalArgumentException__init_());
},
ju_HashMap__init_4 = (var_0, var_1) => {
    let var_2 = new ju_HashMap();
    ju_HashMap__init_1(var_2, var_0, var_1);
    return var_2;
},
ju_HashMap_computeThreshold = $this => {
    $this.$threshold = $this.$elementData.data.length * $this.$loadFactor | 0;
},
ju_HashMap_containsKey = ($this, $key) => {
    let $m;
    $m = ju_HashMap_entryByKey($this, $key);
    return $m === null ? 0 : 1;
},
ju_HashMap_get = ($this, $key) => {
    let $m;
    $m = ju_HashMap_entryByKey($this, $key);
    if ($m === null)
        return null;
    return $m.$value;
},
ju_HashMap_entryByKey = ($this, $key) => {
    let $m, $hash, $index;
    if ($key === null)
        $m = ju_HashMap_findNullKeyEntry($this);
    else {
        $hash = $key.$hashCode();
        $index = $hash & ($this.$elementData.data.length - 1 | 0);
        $m = ju_HashMap_findNonNullKeyEntry($this, $key, $index, $hash);
    }
    return $m;
},
ju_HashMap_findNonNullKeyEntry = ($this, $key, $index, $keyHash) => {
    let $m;
    $m = $this.$elementData.data[$index];
    while ($m !== null && !($m.$origKeyHash == $keyHash && ju_HashMap_areEqualKeys($key, $m.$key))) {
        $m = $m.$next3;
    }
    return $m;
},
ju_HashMap_findNullKeyEntry = $this => {
    let $m;
    $m = $this.$elementData.data[0];
    while ($m !== null && $m.$key !== null) {
        $m = $m.$next3;
    }
    return $m;
},
ju_HashMap_put = ($this, $key, $value) => {
    return ju_HashMap_putImpl($this, $key, $value);
},
ju_HashMap_putImpl = ($this, $key, $value) => {
    let $entry, var$4, $hash, $index, $result;
    if ($key === null) {
        $entry = ju_HashMap_findNullKeyEntry($this);
        if ($entry === null) {
            $this.$modCount0 = $this.$modCount0 + 1 | 0;
            $entry = ju_HashMap_createHashedEntry($this, null, 0, 0);
            var$4 = $this.$elementCount + 1 | 0;
            $this.$elementCount = var$4;
            if (var$4 > $this.$threshold)
                $this.$rehash();
        }
    } else {
        $hash = $key.$hashCode();
        $index = $hash & ($this.$elementData.data.length - 1 | 0);
        $entry = ju_HashMap_findNonNullKeyEntry($this, $key, $index, $hash);
        if ($entry === null) {
            $this.$modCount0 = $this.$modCount0 + 1 | 0;
            $entry = ju_HashMap_createHashedEntry($this, $key, $index, $hash);
            var$4 = $this.$elementCount + 1 | 0;
            $this.$elementCount = var$4;
            if (var$4 > $this.$threshold)
                $this.$rehash();
        }
    }
    $result = $entry.$value;
    $entry.$value = $value;
    return $result;
},
ju_HashMap_createHashedEntry = ($this, $key, $index, $hash) => {
    let $entry;
    $entry = ju_HashMap$HashEntry__init_0($key, $hash);
    $entry.$next3 = $this.$elementData.data[$index];
    $this.$elementData.data[$index] = $entry;
    return $entry;
},
ju_HashMap_rehash0 = ($this, $capacity) => {
    let $length, $newData, $i, $entry, var$6, $index, $next;
    $length = ju_HashMap_calculateCapacity(!$capacity ? 1 : $capacity << 1);
    $newData = $this.$newElementArray($length);
    $i = 0;
    while ($i < $this.$elementData.data.length) {
        $entry = $this.$elementData.data[$i];
        $this.$elementData.data[$i] = null;
        while ($entry !== null) {
            var$6 = $newData.data;
            $index = $entry.$origKeyHash & ($length - 1 | 0);
            $next = $entry.$next3;
            $entry.$next3 = var$6[$index];
            var$6[$index] = $entry;
            $entry = $next;
        }
        $i = $i + 1 | 0;
    }
    $this.$elementData = $newData;
    ju_HashMap_computeThreshold($this);
},
ju_HashMap_rehash = $this => {
    $this.$rehash0($this.$elementData.data.length);
},
ju_HashMap_removeEntry = ($this, $entry) => {
    let $index, $m;
    $index = $entry.$origKeyHash & ($this.$elementData.data.length - 1 | 0);
    $m = $this.$elementData.data[$index];
    if ($m === $entry)
        $this.$elementData.data[$index] = $entry.$next3;
    else {
        while ($m.$next3 !== $entry) {
            $m = $m.$next3;
        }
        $m.$next3 = $entry.$next3;
    }
    $this.$modCount0 = $this.$modCount0 + 1 | 0;
    $this.$elementCount = $this.$elementCount - 1 | 0;
},
ju_HashMap_size = $this => {
    return $this.$elementCount;
},
ju_HashMap_areEqualKeys = ($key1, $key2) => {
    return $key1 !== $key2 && !$key1.$equals($key2) ? 0 : 1;
};
function ju_LinkedHashMap() {
    let a = this; ju_HashMap.call(a);
    a.$accessOrder = 0;
    a.$head = null;
    a.$tail = null;
}
let ju_LinkedHashMap__init_ = $this => {
    ju_HashMap__init_0($this);
    $this.$accessOrder = 0;
    $this.$head = null;
},
ju_LinkedHashMap__init_0 = () => {
    let var_0 = new ju_LinkedHashMap();
    ju_LinkedHashMap__init_(var_0);
    return var_0;
},
ju_LinkedHashMap_newElementArray = ($this, $s) => {
    return $rt_createArray(ju_LinkedHashMap$LinkedHashMapEntry, $s);
},
ju_LinkedHashMap_createHashedEntry = ($this, $key, $index, $hash, $first) => {
    let $entry;
    $entry = ju_LinkedHashMap$LinkedHashMapEntry__init_0($key, $hash);
    $entry.$next3 = $this.$elementData.data[$index];
    $this.$elementData.data[$index] = $entry;
    if (!$first) {
        if ($this.$tail === null)
            $this.$head = $entry;
        else
            $this.$tail.$chainForward = $entry;
        $entry.$chainBackward = $this.$tail;
        $this.$tail = $entry;
    } else {
        if ($this.$head === null)
            $this.$tail = $entry;
        else
            $this.$head.$chainBackward = $entry;
        $entry.$chainForward = $this.$head;
        $this.$head = $entry;
    }
    return $entry;
},
ju_LinkedHashMap_put = ($this, $key, $value) => {
    let $oldSize, $existing;
    $oldSize = $this.$size();
    $existing = $this.$putImpl0($key, $value, 0, $this.$accessOrder);
    if ($this.$size() != $oldSize && $this.$removeEldestEntry($this.$head))
        $this.$removeLinkedEntry($this.$head);
    return $existing;
},
ju_LinkedHashMap_putImpl = ($this, $key, $value, $first, $forceMotion) => {
    let $hash, var$6, $index, $entry, var$9, $existing;
    if (!$this.$elementCount) {
        $this.$head = null;
        $this.$tail = null;
    }
    $hash = ju_Objects_hashCode($key);
    var$6 = $hash & 2147483647;
    $index = var$6 % $this.$elementData.data.length | 0;
    $entry = $key === null ? ju_HashMap_findNullKeyEntry($this) : ju_HashMap_findNonNullKeyEntry($this, $key, $index, $hash);
    if ($entry === null) {
        $this.$modCount0 = $this.$modCount0 + 1 | 0;
        var$9 = $this.$elementCount + 1 | 0;
        $this.$elementCount = var$9;
        if (var$9 > $this.$threshold) {
            $this.$rehash();
            $index = var$6 % $this.$elementData.data.length | 0;
        }
        $entry = ju_LinkedHashMap_createHashedEntry($this, $key, $index, $hash, $first);
    } else if ($forceMotion)
        ju_LinkedHashMap_linkEntry($this, $entry, $first);
    $existing = $entry.$value;
    $entry.$value = $value;
    return $existing;
},
ju_LinkedHashMap_linkEntry = ($this, $entry, $first) => {
    let $n, $p;
    if (!$first) {
        $n = $entry.$chainForward;
        if ($n === null)
            return;
        $p = $entry.$chainBackward;
        if ($p === null)
            $this.$head = $n;
        else
            $p.$chainForward = $n;
        $n.$chainBackward = $p;
        if ($this.$tail !== null)
            $this.$tail.$chainForward = $entry;
        $entry.$chainBackward = $this.$tail;
        $entry.$chainForward = null;
        $this.$tail = $entry;
    } else {
        $p = $entry.$chainBackward;
        if ($p === null)
            return;
        $n = $entry.$chainForward;
        if ($n === null)
            $this.$tail = $p;
        else
            $n.$chainBackward = $p;
        $p.$chainForward = $n;
        if ($this.$head !== null)
            $this.$head.$chainBackward = $entry;
        $entry.$chainForward = $this.$head;
        $entry.$chainBackward = null;
        $this.$head = $entry;
    }
},
ju_LinkedHashMap_removeLinkedEntry = ($this, $entry) => {
    ju_HashMap_removeEntry($this, $entry);
    ju_LinkedHashMap_unlinkEntry($this, $entry);
},
ju_LinkedHashMap_unlinkEntry = ($this, $entry) => {
    let $p, $n;
    $p = $entry.$chainBackward;
    $n = $entry.$chainForward;
    if ($p !== null) {
        $p.$chainForward = $n;
        if ($n === null)
            $this.$tail = $p;
        else
            $n.$chainBackward = $p;
    } else {
        $this.$head = $n;
        if ($n === null)
            $this.$tail = null;
        else
            $n.$chainBackward = null;
    }
},
ju_LinkedHashMap_removeEldestEntry = ($this, $eldest) => {
    return 0;
},
jur_PosPlusGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet),
jur_PosPlusGroupQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_GroupQuantifierSet__init_($this, $innerSet, $next, $type);
    jur_FSet_$callClinit();
    $innerSet.$setNext(jur_FSet_posFSet);
},
jur_PosPlusGroupQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_PosPlusGroupQuantifierSet();
    jur_PosPlusGroupQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_PosPlusGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex, var$5;
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex < 0)
        return (-1);
    if ($nextIndex > $stringIndex) {
        while (true) {
            var$5 = $this.$innerSet.$matches($nextIndex, $testString, $matchResult);
            if (var$5 <= $nextIndex)
                break;
            $nextIndex = var$5;
        }
        $stringIndex = $nextIndex;
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
};
function jl_AbstractStringBuilder() {
    let a = this; jl_Object.call(a);
    a.$buffer = null;
    a.$length0 = 0;
}
let jl_AbstractStringBuilder__init_0 = $this => {
    jl_AbstractStringBuilder__init_($this, 16);
},
jl_AbstractStringBuilder__init_6 = () => {
    let var_0 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_0(var_0);
    return var_0;
},
jl_AbstractStringBuilder__init_ = ($this, $capacity) => {
    jl_Object__init_($this);
    $this.$buffer = $rt_createCharArray($capacity);
},
jl_AbstractStringBuilder__init_3 = var_0 => {
    let var_1 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_(var_1, var_0);
    return var_1;
},
jl_AbstractStringBuilder__init_2 = ($this, $value) => {
    jl_AbstractStringBuilder__init_1($this, $value);
},
jl_AbstractStringBuilder__init_5 = var_0 => {
    let var_1 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_2(var_1, var_0);
    return var_1;
},
jl_AbstractStringBuilder__init_1 = ($this, $value) => {
    let $i;
    jl_Object__init_($this);
    $this.$buffer = $rt_createCharArray($value.$length());
    $i = 0;
    while ($i < $this.$buffer.data.length) {
        $this.$buffer.data[$i] = $value.$charAt($i);
        $i = $i + 1 | 0;
    }
    $this.$length0 = $value.$length();
},
jl_AbstractStringBuilder__init_4 = var_0 => {
    let var_1 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_1(var_1, var_0);
    return var_1;
},
jl_AbstractStringBuilder_append8 = ($this, $obj) => {
    return $this.$insert($this.$length0, $obj);
},
jl_AbstractStringBuilder_append = ($this, $string) => {
    return $this.$insert0($this.$length0, $string);
},
jl_AbstractStringBuilder_insert0 = ($this, $index, $string) => {
    let $i, var$4, var$5;
    if ($index >= 0 && $index <= $this.$length0) {
        if ($string === null)
            $string = $rt_s(49);
        else if ($string.$isEmpty())
            return $this;
        $this.$ensureCapacity($this.$length0 + $string.$length() | 0);
        $i = $this.$length0 - 1 | 0;
        while ($i >= $index) {
            $this.$buffer.data[$i + $string.$length() | 0] = $this.$buffer.data[$i];
            $i = $i + (-1) | 0;
        }
        $this.$length0 = $this.$length0 + $string.$length() | 0;
        $i = 0;
        while ($i < $string.$length()) {
            var$4 = $this.$buffer.data;
            var$5 = $index + 1 | 0;
            var$4[$index] = $string.$charAt($i);
            $i = $i + 1 | 0;
            $index = var$5;
        }
        return $this;
    }
    $rt_throw(jl_StringIndexOutOfBoundsException__init_());
},
jl_AbstractStringBuilder_append3 = ($this, $value) => {
    return $this.$append1($value, 10);
},
jl_AbstractStringBuilder_append10 = ($this, $value, $radix) => {
    return $this.$insert1($this.$length0, $value, $radix);
},
jl_AbstractStringBuilder_insert7 = ($this, $target, $value, $radix) => {
    let $positive, var$5, var$6, $pos, $sz, $posLimit, var$10, var$11;
    $positive = 1;
    if ($value < 0) {
        $positive = 0;
        $value =  -$value | 0;
    }
    a: {
        if ($rt_ucmp($value, $radix) < 0) {
            if ($positive)
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 1 | 0);
            else {
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 2 | 0);
                var$5 = $this.$buffer.data;
                var$6 = $target + 1 | 0;
                var$5[$target] = 45;
                $target = var$6;
            }
            $this.$buffer.data[$target] = jl_Character_forDigit($value, $radix);
        } else {
            $pos = 1;
            $sz = 1;
            $posLimit = $rt_udiv((-1), $radix);
            b: {
                while (true) {
                    var$10 = $rt_imul($pos, $radix);
                    if ($rt_ucmp(var$10, $value) > 0) {
                        var$10 = $pos;
                        break b;
                    }
                    $sz = $sz + 1 | 0;
                    if ($rt_ucmp(var$10, $posLimit) > 0)
                        break;
                    $pos = var$10;
                }
            }
            if (!$positive)
                $sz = $sz + 1 | 0;
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + $sz | 0);
            if ($positive)
                var$11 = $target;
            else {
                var$5 = $this.$buffer.data;
                var$11 = $target + 1 | 0;
                var$5[$target] = 45;
            }
            while (true) {
                if (!var$10)
                    break a;
                var$5 = $this.$buffer.data;
                var$6 = var$11 + 1 | 0;
                var$5[var$11] = jl_Character_forDigit($rt_udiv($value, var$10), $radix);
                $value = $rt_umod($value, var$10);
                var$10 = $rt_udiv(var$10, $radix);
                var$11 = var$6;
            }
        }
    }
    return $this;
},
jl_AbstractStringBuilder_append6 = ($this, $value) => {
    return $this.$insert2($this.$length0, $value);
},
jl_AbstractStringBuilder_insert4 = ($this, $target, $value) => {
    let var$3, var$4, var$5, $number, $mantissa, $exp, $negative, $intPart, $sz, $digits, $zeros, $leadingZeros, $leadingZero, var$16, $pos, $i, $intDigit, var$20;
    var$3 = $rt_compare_less($value, 0.0);
    if (!var$3) {
        if (1.0 / $value === Infinity) {
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + 3 | 0);
            var$4 = $this.$buffer.data;
            var$3 = $target + 1 | 0;
            var$4[$target] = 48;
            var$4 = $this.$buffer.data;
            var$5 = var$3 + 1 | 0;
            var$4[var$3] = 46;
            $this.$buffer.data[var$5] = 48;
            return $this;
        }
        jl_AbstractStringBuilder_insertSpace($this, $target, $target + 4 | 0);
        var$4 = $this.$buffer.data;
        var$3 = $target + 1 | 0;
        var$4[$target] = 45;
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 48;
        var$4 = $this.$buffer.data;
        var$3 = var$5 + 1 | 0;
        var$4[var$5] = 46;
        $this.$buffer.data[var$3] = 48;
        return $this;
    }
    if (isNaN($value) ? 1 : 0) {
        jl_AbstractStringBuilder_insertSpace($this, $target, $target + 3 | 0);
        var$4 = $this.$buffer.data;
        var$3 = $target + 1 | 0;
        var$4[$target] = 78;
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 97;
        $this.$buffer.data[var$5] = 78;
        return $this;
    }
    if (jl_Float_isInfinite($value)) {
        if (var$3 > 0) {
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + 8 | 0);
            var$3 = $target;
        } else {
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + 9 | 0);
            var$4 = $this.$buffer.data;
            var$3 = $target + 1 | 0;
            var$4[$target] = 45;
        }
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 73;
        var$4 = $this.$buffer.data;
        var$3 = var$5 + 1 | 0;
        var$4[var$5] = 110;
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 102;
        var$4 = $this.$buffer.data;
        var$3 = var$5 + 1 | 0;
        var$4[var$5] = 105;
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 110;
        var$4 = $this.$buffer.data;
        var$3 = var$5 + 1 | 0;
        var$4[var$5] = 105;
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 116;
        $this.$buffer.data[var$5] = 121;
        return $this;
    }
    jl_AbstractStringBuilder$Constants_$callClinit();
    $number = jl_AbstractStringBuilder$Constants_floatAnalysisResult;
    otcit_FloatAnalyzer_analyze($value, $number);
    $mantissa = $number.$mantissa0;
    $exp = $number.$exponent0;
    $negative = $number.$sign1;
    $intPart = 1;
    $sz = 1;
    if ($negative)
        $sz = 2;
    $digits = 9;
    $zeros = jl_AbstractStringBuilder_trailingDecimalZeros0($mantissa);
    if ($zeros > 0)
        $digits = $digits - $zeros | 0;
    $leadingZeros = 0;
    $leadingZero = 0;
    if ($exp < 7 && $exp >= (-3)) {
        if ($exp >= 0) {
            $intPart = $exp + 1 | 0;
            $digits = jl_Math_max($digits, $intPart + 1 | 0);
            $exp = 0;
        } else {
            $intPart = 0;
            $leadingZeros = ( -$exp | 0) - 1 | 0;
            $leadingZero = 1;
            $sz = $sz + 1 | 0;
            $exp = 0;
        }
    }
    if ($exp) {
        $sz = $sz + 2 | 0;
        if (!($exp > (-10) && $exp < 10))
            $sz = $sz + 1 | 0;
        if ($exp < 0)
            $sz = $sz + 1 | 0;
    }
    if ($exp && $digits == $intPart)
        $digits = $digits + 1 | 0;
    var$3 = $sz + ($digits + $leadingZeros | 0) | 0;
    jl_AbstractStringBuilder_insertSpace($this, $target, $target + var$3 | 0);
    if (!$negative)
        var$16 = $target;
    else {
        var$4 = $this.$buffer.data;
        var$16 = $target + 1 | 0;
        var$4[$target] = 45;
    }
    $pos = 100000000;
    if ($leadingZero) {
        var$4 = $this.$buffer.data;
        var$3 = var$16 + 1 | 0;
        var$4[var$16] = 48;
        var$4 = $this.$buffer.data;
        var$16 = var$3 + 1 | 0;
        var$4[var$3] = 46;
        while (true) {
            var$3 = $leadingZeros + (-1) | 0;
            if ($leadingZeros <= 0)
                break;
            var$4 = $this.$buffer.data;
            var$5 = var$16 + 1 | 0;
            var$4[var$16] = 48;
            $leadingZeros = var$3;
            var$16 = var$5;
        }
    }
    $i = 0;
    while ($i < $digits) {
        if ($pos <= 0)
            $intDigit = 0;
        else {
            $intDigit = $mantissa / $pos | 0;
            $mantissa = $mantissa % $pos | 0;
        }
        var$4 = $this.$buffer.data;
        var$3 = var$16 + 1 | 0;
        var$4[var$16] = (48 + $intDigit | 0) & 65535;
        $intPart = $intPart + (-1) | 0;
        if ($intPart)
            var$16 = var$3;
        else {
            var$4 = $this.$buffer.data;
            var$16 = var$3 + 1 | 0;
            var$4[var$3] = 46;
        }
        $pos = $pos / 10 | 0;
        $i = $i + 1 | 0;
    }
    if ($exp) {
        var$4 = $this.$buffer.data;
        var$3 = var$16 + 1 | 0;
        var$4[var$16] = 69;
        if ($exp >= 0)
            var$5 = var$3;
        else {
            $exp =  -$exp | 0;
            var$4 = $this.$buffer.data;
            var$5 = var$3 + 1 | 0;
            var$4[var$3] = 45;
        }
        if ($exp < 10)
            var$20 = var$5;
        else {
            var$4 = $this.$buffer.data;
            var$20 = var$5 + 1 | 0;
            var$4[var$5] = (48 + ($exp / 10 | 0) | 0) & 65535;
        }
        $this.$buffer.data[var$20] = (48 + ($exp % 10 | 0) | 0) & 65535;
    }
    return $this;
},
jl_AbstractStringBuilder_append7 = ($this, $value) => {
    return $this.$insert3($this.$length0, $value);
},
jl_AbstractStringBuilder_insert5 = ($this, $target, $value) => {
    let var$3, var$4, var$5, $number, $mantissa, $exp, $negative, $intPart, $sz, $digits, $zeros, $leadingZeros, $leadingZero, var$16, $pos, $i, $intDigit, var$20;
    var$3 = $rt_compare_less($value, 0.0);
    if (!var$3) {
        if (1.0 / $value === Infinity) {
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + 3 | 0);
            var$4 = $this.$buffer.data;
            var$3 = $target + 1 | 0;
            var$4[$target] = 48;
            var$4 = $this.$buffer.data;
            var$5 = var$3 + 1 | 0;
            var$4[var$3] = 46;
            $this.$buffer.data[var$5] = 48;
            return $this;
        }
        jl_AbstractStringBuilder_insertSpace($this, $target, $target + 4 | 0);
        var$4 = $this.$buffer.data;
        var$3 = $target + 1 | 0;
        var$4[$target] = 45;
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 48;
        var$4 = $this.$buffer.data;
        var$3 = var$5 + 1 | 0;
        var$4[var$5] = 46;
        $this.$buffer.data[var$3] = 48;
        return $this;
    }
    if (isNaN($value) ? 1 : 0) {
        jl_AbstractStringBuilder_insertSpace($this, $target, $target + 3 | 0);
        var$4 = $this.$buffer.data;
        var$3 = $target + 1 | 0;
        var$4[$target] = 78;
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 97;
        $this.$buffer.data[var$5] = 78;
        return $this;
    }
    if (jl_Double_isInfinite($value)) {
        if (var$3 > 0) {
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + 8 | 0);
            var$3 = $target;
        } else {
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + 9 | 0);
            var$4 = $this.$buffer.data;
            var$3 = $target + 1 | 0;
            var$4[$target] = 45;
        }
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 73;
        var$4 = $this.$buffer.data;
        var$3 = var$5 + 1 | 0;
        var$4[var$5] = 110;
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 102;
        var$4 = $this.$buffer.data;
        var$3 = var$5 + 1 | 0;
        var$4[var$5] = 105;
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 110;
        var$4 = $this.$buffer.data;
        var$3 = var$5 + 1 | 0;
        var$4[var$5] = 105;
        var$4 = $this.$buffer.data;
        var$5 = var$3 + 1 | 0;
        var$4[var$3] = 116;
        $this.$buffer.data[var$5] = 121;
        return $this;
    }
    jl_AbstractStringBuilder$Constants_$callClinit();
    $number = jl_AbstractStringBuilder$Constants_doubleAnalysisResult;
    otcit_DoubleAnalyzer_analyze($value, $number);
    $mantissa = $number.$mantissa;
    $exp = $number.$exponent;
    $negative = $number.$sign0;
    $intPart = 1;
    $sz = 1;
    if ($negative)
        $sz = 2;
    $digits = 18;
    $zeros = jl_AbstractStringBuilder_trailingDecimalZeros($mantissa);
    if ($zeros > 0)
        $digits = $digits - $zeros | 0;
    $leadingZeros = 0;
    $leadingZero = 0;
    if ($exp < 7 && $exp >= (-3)) {
        if ($exp >= 0) {
            $intPart = $exp + 1 | 0;
            $digits = jl_Math_max($digits, $intPart + 1 | 0);
            $exp = 0;
        } else {
            $intPart = 0;
            $leadingZeros = ( -$exp | 0) - 1 | 0;
            $leadingZero = 1;
            $sz = $sz + 1 | 0;
            $exp = 0;
        }
    }
    if ($exp) {
        $sz = $sz + 2 | 0;
        if (!($exp > (-10) && $exp < 10))
            $sz = $sz + 1 | 0;
        if (!($exp > (-100) && $exp < 100))
            $sz = $sz + 1 | 0;
        if ($exp < 0)
            $sz = $sz + 1 | 0;
    }
    if ($exp && $digits == $intPart)
        $digits = $digits + 1 | 0;
    var$3 = $sz + ($digits + $leadingZeros | 0) | 0;
    jl_AbstractStringBuilder_insertSpace($this, $target, $target + var$3 | 0);
    if (!$negative)
        var$16 = $target;
    else {
        var$4 = $this.$buffer.data;
        var$16 = $target + 1 | 0;
        var$4[$target] = 45;
    }
    $pos = Long_create(1569325056, 23283064);
    if ($leadingZero) {
        var$4 = $this.$buffer.data;
        var$3 = var$16 + 1 | 0;
        var$4[var$16] = 48;
        var$4 = $this.$buffer.data;
        var$16 = var$3 + 1 | 0;
        var$4[var$3] = 46;
        while (true) {
            var$3 = $leadingZeros + (-1) | 0;
            if ($leadingZeros <= 0)
                break;
            var$4 = $this.$buffer.data;
            var$5 = var$16 + 1 | 0;
            var$4[var$16] = 48;
            $leadingZeros = var$3;
            var$16 = var$5;
        }
    }
    $i = 0;
    while ($i < $digits) {
        if (Long_le($pos, Long_ZERO))
            $intDigit = 0;
        else {
            $intDigit = Long_lo(Long_div($mantissa, $pos));
            $mantissa = Long_rem($mantissa, $pos);
        }
        var$4 = $this.$buffer.data;
        var$3 = var$16 + 1 | 0;
        var$4[var$16] = (48 + $intDigit | 0) & 65535;
        $intPart = $intPart + (-1) | 0;
        if ($intPart)
            var$16 = var$3;
        else {
            var$4 = $this.$buffer.data;
            var$16 = var$3 + 1 | 0;
            var$4[var$3] = 46;
        }
        $pos = Long_div($pos, Long_fromInt(10));
        $i = $i + 1 | 0;
    }
    if ($exp) {
        var$4 = $this.$buffer.data;
        var$3 = var$16 + 1 | 0;
        var$4[var$16] = 69;
        if ($exp >= 0)
            var$5 = var$3;
        else {
            $exp =  -$exp | 0;
            var$4 = $this.$buffer.data;
            var$5 = var$3 + 1 | 0;
            var$4[var$3] = 45;
        }
        if ($exp >= 100) {
            var$4 = $this.$buffer.data;
            var$3 = var$5 + 1 | 0;
            var$4[var$5] = (48 + ($exp / 100 | 0) | 0) & 65535;
            $exp = $exp % 100 | 0;
            var$4 = $this.$buffer.data;
            var$20 = var$3 + 1 | 0;
            var$4[var$3] = (48 + ($exp / 10 | 0) | 0) & 65535;
        } else if ($exp < 10)
            var$20 = var$5;
        else {
            var$4 = $this.$buffer.data;
            var$20 = var$5 + 1 | 0;
            var$4[var$5] = (48 + ($exp / 10 | 0) | 0) & 65535;
        }
        $this.$buffer.data[var$20] = (48 + ($exp % 10 | 0) | 0) & 65535;
    }
    return $this;
},
jl_AbstractStringBuilder_trailingDecimalZeros0 = $n => {
    let $result, $zeros, var$4, var$5;
    if (!($n % 1000000000 | 0))
        return 9;
    $result = 0;
    $zeros = 1;
    if (!($n % 100000000 | 0)) {
        $result = 8;
        $zeros = 100000000;
    }
    var$4 = $zeros * 10000 | 0;
    if ($n % var$4 | 0)
        var$4 = $zeros;
    else
        $result = $result | 4;
    var$5 = var$4 * 100 | 0;
    if ($n % var$5 | 0)
        var$5 = var$4;
    else
        $result = $result | 2;
    if (!($n % (var$5 * 10 | 0) | 0))
        $result = $result | 1;
    return $result;
},
jl_AbstractStringBuilder_trailingDecimalZeros = $n => {
    let $zeros, $result, $bit, $i;
    $zeros = Long_fromInt(1);
    $result = 0;
    $bit = 16;
    jl_AbstractStringBuilder$Constants_$callClinit();
    $i = jl_AbstractStringBuilder$Constants_longLogPowersOfTen.data.length - 1 | 0;
    while ($i >= 0) {
        if (Long_eq(Long_rem($n, Long_mul($zeros, jl_AbstractStringBuilder$Constants_longLogPowersOfTen.data[$i])), Long_ZERO)) {
            $result = $result | $bit;
            $zeros = Long_mul($zeros, jl_AbstractStringBuilder$Constants_longLogPowersOfTen.data[$i]);
        }
        $bit = $bit >>> 1 | 0;
        $i = $i + (-1) | 0;
    }
    return $result;
},
jl_AbstractStringBuilder_append2 = ($this, $c) => {
    return $this.$insert4($this.$length0, $c);
},
jl_AbstractStringBuilder_insert1 = ($this, $index, $c) => {
    jl_AbstractStringBuilder_insertSpace($this, $index, $index + 1 | 0);
    $this.$buffer.data[$index] = $c;
    return $this;
},
jl_AbstractStringBuilder_insert6 = ($this, $index, $obj) => {
    return $this.$insert0($index, $obj === null ? $rt_s(49) : $obj.$toString());
},
jl_AbstractStringBuilder_append5 = ($this, $b) => {
    return $this.$insert5($this.$length0, $b);
},
jl_AbstractStringBuilder_insert2 = ($this, $index, $b) => {
    return $this.$insert0($index, !$b ? $rt_s(50) : $rt_s(51));
},
jl_AbstractStringBuilder_ensureCapacity = ($this, $capacity) => {
    let $newLength;
    if ($this.$buffer.data.length >= $capacity)
        return;
    $newLength = $this.$buffer.data.length >= 1073741823 ? 2147483647 : jl_Math_max($capacity, jl_Math_max($this.$buffer.data.length * 2 | 0, 5));
    $this.$buffer = ju_Arrays_copyOf1($this.$buffer, $newLength);
},
jl_AbstractStringBuilder_toString = $this => {
    return jl_String__init_0($this.$buffer, 0, $this.$length0);
},
jl_AbstractStringBuilder_length = $this => {
    return $this.$length0;
},
jl_AbstractStringBuilder_charAt = ($this, $index) => {
    if ($index >= 0 && $index < $this.$length0)
        return $this.$buffer.data[$index];
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
jl_AbstractStringBuilder_isEmpty = $this => {
    return $this.$length0 ? 0 : 1;
},
jl_AbstractStringBuilder_append4 = ($this, $s, $start, $end) => {
    return $this.$insert6($this.$length0, $s, $start, $end);
},
jl_AbstractStringBuilder_insert3 = ($this, $index, $s, $i, $end) => {
    let var$5, var$6;
    if ($i <= $end && $end <= $s.$length() && $i >= 0) {
        jl_AbstractStringBuilder_insertSpace($this, $index, ($index + $end | 0) - $i | 0);
        while ($i < $end) {
            var$5 = $this.$buffer.data;
            var$6 = $index + 1 | 0;
            var$5[$index] = $s.$charAt($i);
            $i = $i + 1 | 0;
            $index = var$6;
        }
        return $this;
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
jl_AbstractStringBuilder_append9 = ($this, $s) => {
    return $this.$append4($s, 0, $s.$length());
},
jl_AbstractStringBuilder_append1 = ($this, $chars, $offset, $len) => {
    return $this.$insert7($this.$length0, $chars, $offset, $len);
},
jl_AbstractStringBuilder_insert = ($this, $index, $chars, $offset, $len) => {
    let var$5, var$6, var$7, var$8, var$9;
    jl_AbstractStringBuilder_insertSpace($this, $index, $index + $len | 0);
    var$5 = $len + $offset | 0;
    while ($offset < var$5) {
        var$6 = $chars.data;
        var$7 = $this.$buffer.data;
        var$8 = $index + 1 | 0;
        var$9 = $offset + 1 | 0;
        var$7[$index] = var$6[$offset];
        $index = var$8;
        $offset = var$9;
    }
    return $this;
},
jl_AbstractStringBuilder_append0 = ($this, $chars) => {
    return $this.$append5($chars, 0, $chars.data.length);
},
jl_AbstractStringBuilder_subSequence = ($this, $start, $end) => {
    return $this.$substring($start, $end);
},
jl_AbstractStringBuilder_deleteCharAt = ($this, $i) => {
    let var$2, var$3, $i_0;
    if ($i >= 0 && $i < $this.$length0) {
        $this.$length0 = $this.$length0 - 1 | 0;
        while ($i < $this.$length0) {
            var$2 = $this.$buffer.data;
            var$3 = $this.$buffer.data;
            $i_0 = $i + 1 | 0;
            var$2[$i] = var$3[$i_0];
            $i = $i_0;
        }
        return $this;
    }
    $rt_throw(jl_StringIndexOutOfBoundsException__init_());
},
jl_AbstractStringBuilder_delete = ($this, $start, $end) => {
    let var$3, $sz, $i, var$6, var$7, var$8;
    if ($start >= 0) {
        var$3 = $rt_compare($start, $end);
        if (var$3 <= 0 && $start <= $this.$length0) {
            if (!var$3)
                return $this;
            if ($end > $this.$length0)
                $end = $this.$length0;
            $sz = $this.$length0 - $end | 0;
            $this.$length0 = $this.$length0 - ($end - $start | 0) | 0;
            $i = 0;
            while ($i < $sz) {
                var$6 = $this.$buffer.data;
                var$3 = $start + 1 | 0;
                var$7 = $this.$buffer.data;
                var$8 = $end + 1 | 0;
                var$6[$start] = var$7[$end];
                $i = $i + 1 | 0;
                $start = var$3;
                $end = var$8;
            }
            return $this;
        }
    }
    $rt_throw(jl_StringIndexOutOfBoundsException__init_());
},
jl_AbstractStringBuilder_insertSpace = ($this, $start, $end) => {
    let $sz, $i;
    $sz = $this.$length0 - $start | 0;
    $this.$ensureCapacity(($this.$length0 + $end | 0) - $start | 0);
    $i = $sz - 1 | 0;
    while ($i >= 0) {
        $this.$buffer.data[$end + $i | 0] = $this.$buffer.data[$start + $i | 0];
        $i = $i + (-1) | 0;
    }
    $this.$length0 = $this.$length0 + ($end - $start | 0) | 0;
},
jl_AbstractStringBuilder_substring = ($this, $from, $to) => {
    if ($from <= $to && $from >= 0 && $to <= $this.$length0)
        return jl_String__init_0($this.$buffer, $from, $to - $from | 0);
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
jl_Appendable = $rt_classWithoutFields(0),
jl_StringBuffer = $rt_classWithoutFields(jl_AbstractStringBuilder),
jl_StringBuffer__init_0 = $this => {
    jl_AbstractStringBuilder__init_0($this);
},
jl_StringBuffer__init_ = () => {
    let var_0 = new jl_StringBuffer();
    jl_StringBuffer__init_0(var_0);
    return var_0;
},
jl_StringBuffer_append2 = ($this, $string) => {
    jl_AbstractStringBuilder_append($this, $string);
    return $this;
},
jl_StringBuffer_append4 = ($this, $c) => {
    jl_AbstractStringBuilder_append2($this, $c);
    return $this;
},
jl_StringBuffer_append6 = ($this, $chars, $offset, $len) => {
    jl_AbstractStringBuilder_append1($this, $chars, $offset, $len);
    return $this;
},
jl_StringBuffer_append3 = ($this, $chars) => {
    jl_AbstractStringBuilder_append0($this, $chars);
    return $this;
},
jl_StringBuffer_append = ($this, $s, $start, $end) => {
    jl_AbstractStringBuilder_append4($this, $s, $start, $end);
    return $this;
};
let jl_StringBuffer_append5 = ($this, $s) => {
    jl_AbstractStringBuilder_append9($this, $s);
    return $this;
},
jl_StringBuffer_insert = ($this, $index, $s, $start, $end) => {
    jl_AbstractStringBuilder_insert3($this, $index, $s, $start, $end);
    return $this;
},
jl_StringBuffer_insert1 = ($this, $index, $chars, $offset, $len) => {
    jl_AbstractStringBuilder_insert($this, $index, $chars, $offset, $len);
    return $this;
},
jl_StringBuffer_insert6 = ($this, $index, $c) => {
    jl_AbstractStringBuilder_insert1($this, $index, $c);
    return $this;
},
jl_StringBuffer_insert2 = ($this, $index, $string) => {
    jl_AbstractStringBuilder_insert0($this, $index, $string);
    return $this;
},
jl_StringBuffer_insert4 = ($this, var$1, var$2, var$3, var$4) => {
    return $this.$insert8(var$1, var$2, var$3, var$4);
},
jl_StringBuffer_append0 = ($this, var$1, var$2, var$3) => {
    return $this.$append10(var$1, var$2, var$3);
},
jl_StringBuffer_insert5 = ($this, var$1, var$2, var$3, var$4) => {
    return $this.$insert9(var$1, var$2, var$3, var$4);
},
jl_StringBuffer_append1 = ($this, var$1, var$2, var$3) => {
    return $this.$append11(var$1, var$2, var$3);
},
jl_StringBuffer_charAt = ($this, var$1) => {
    return jl_AbstractStringBuilder_charAt($this, var$1);
},
jl_StringBuffer_length = $this => {
    return jl_AbstractStringBuilder_length($this);
},
jl_StringBuffer_toString = $this => {
    return jl_AbstractStringBuilder_toString($this);
},
jl_StringBuffer_ensureCapacity = ($this, var$1) => {
    jl_AbstractStringBuilder_ensureCapacity($this, var$1);
},
jl_StringBuffer_insert3 = ($this, var$1, var$2) => {
    return $this.$insert10(var$1, var$2);
},
jl_StringBuffer_insert0 = ($this, var$1, var$2) => {
    return $this.$insert11(var$1, var$2);
};
function jn_Buffer() {
    let a = this; jl_Object.call(a);
    a.$position3 = 0;
    a.$limit0 = 0;
    a.$mark = 0;
}
let jn_Buffer__init_ = $this => {
    jl_Object__init_($this);
    $this.$mark = (-1);
},
jn_Buffer_capacity = $this => {
    return $this.$capacityImpl();
},
jn_Buffer_position = $this => {
    return $this.$position3;
},
jn_Buffer_position0 = ($this, $newPosition) => {
    let var$2, var$3, var$4;
    if ($newPosition >= 0 && $newPosition <= $this.$limit0) {
        $this.$position3 = $newPosition;
        if ($newPosition < $this.$mark)
            $this.$mark = 0;
        return $this;
    }
    var$2 = new jl_IllegalArgumentException;
    var$3 = $this.$limit0;
    var$4 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(var$4, $rt_s(52)), $newPosition), $rt_s(53)), var$3), 93);
    jl_IllegalArgumentException__init_1(var$2, jl_StringBuilder_toString(var$4));
    $rt_throw(var$2);
},
jn_Buffer_limit = $this => {
    return $this.$limit0;
},
jn_Buffer_flip = $this => {
    $this.$limit0 = $this.$position3;
    $this.$position3 = 0;
    $this.$mark = (-1);
    return $this;
},
jn_Buffer_remaining = $this => {
    return $this.$limit0 - $this.$position3 | 0;
},
jn_Buffer_hasRemaining = $this => {
    return $this.$position3 >= $this.$limit0 ? 0 : 1;
},
jur_SpecialToken = $rt_classWithoutFields(),
jur_SpecialToken__init_ = $this => {
    jl_Object__init_($this);
};
function jur_AbstractCharClass() {
    let a = this; jur_SpecialToken.call(a);
    a.$alt = 0;
    a.$altSurrogates = 0;
    a.$lowHighSurrogates = null;
    a.$charClassWithoutSurrogates = null;
    a.$charClassWithSurrogates = null;
    a.$mayContainSupplCodepoints0 = 0;
}
let jur_AbstractCharClass_charClasses = null,
jur_AbstractCharClass_$callClinit = () => {
    jur_AbstractCharClass_$callClinit = $rt_eraseClinit(jur_AbstractCharClass);
    jur_AbstractCharClass__clinit_();
},
jur_AbstractCharClass__init_ = $this => {
    jur_AbstractCharClass_$callClinit();
    jur_SpecialToken__init_($this);
    $this.$lowHighSurrogates = ju_BitSet__init_2(2048);
},
jur_AbstractCharClass_getBits = $this => {
    return null;
},
jur_AbstractCharClass_getLowHighSurrogates = $this => {
    return $this.$lowHighSurrogates;
},
jur_AbstractCharClass_hasLowHighSurrogates = $this => {
    return !$this.$altSurrogates ? ($this.$lowHighSurrogates.$nextSetBit(0) >= 2048 ? 0 : 1) : $this.$lowHighSurrogates.$nextClearBit(0) >= 2048 ? 0 : 1;
},
jur_AbstractCharClass_mayContainSupplCodepoints = $this => {
    return $this.$mayContainSupplCodepoints0;
},
jur_AbstractCharClass_getInstance = $this => {
    return $this;
},
jur_AbstractCharClass_getSurrogates = $this => {
    let $lHS;
    if ($this.$charClassWithSurrogates === null) {
        $lHS = $this.$getLowHighSurrogates();
        $this.$charClassWithSurrogates = jur_AbstractCharClass$1__init_0($this, $lHS);
        $this.$charClassWithSurrogates.$setNegative($this.$altSurrogates);
    }
    return $this.$charClassWithSurrogates;
},
jur_AbstractCharClass_getWithoutSurrogates = $this => {
    let $lHS;
    if ($this.$charClassWithoutSurrogates === null) {
        $lHS = $this.$getLowHighSurrogates();
        $this.$charClassWithoutSurrogates = jur_AbstractCharClass$2__init_0($this, $lHS, $this);
        $this.$charClassWithoutSurrogates.$setNegative($this.$isNegative());
        $this.$charClassWithoutSurrogates.$mayContainSupplCodepoints0 = $this.$mayContainSupplCodepoints0;
    }
    return $this.$charClassWithoutSurrogates;
},
jur_AbstractCharClass_hasUCI = $this => {
    return 0;
},
jur_AbstractCharClass_setNegative = ($this, $value) => {
    if ($this.$alt ^ $value) {
        $this.$alt = $this.$alt ? 0 : 1;
        $this.$altSurrogates = $this.$altSurrogates ? 0 : 1;
    }
    if (!$this.$mayContainSupplCodepoints0)
        $this.$mayContainSupplCodepoints0 = 1;
    return $this;
},
jur_AbstractCharClass_isNegative = $this => {
    return $this.$alt;
},
jur_AbstractCharClass_intersects0 = ($cc, $ch) => {
    jur_AbstractCharClass_$callClinit();
    return $cc.$contains($ch);
},
jur_AbstractCharClass_intersects = ($cc1, $cc2) => {
    jur_AbstractCharClass_$callClinit();
    if ($cc1.$getBits() !== null && $cc2.$getBits() !== null)
        return ($cc1.$getBits()).$intersects($cc2.$getBits());
    return 1;
},
jur_AbstractCharClass_getPredefinedClass = ($name, $negative) => {
    jur_AbstractCharClass_$callClinit();
    return (jur_AbstractCharClass$PredefinedCharacterClasses_getObject(jur_AbstractCharClass_charClasses, $name)).$getValue($negative);
},
jur_AbstractCharClass__clinit_ = () => {
    jur_AbstractCharClass_charClasses = jur_AbstractCharClass$PredefinedCharacterClasses__init_0();
};
function jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$011 = null;
}
let jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1__init_ = ($this, $this$0) => {
    $this.$this$011 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1();
    jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1_contains = ($this, $ch) => {
    return jl_Character_isUnicodeIdentifierPart($ch);
},
jur_AbstractCharClass$PredefinedCharacterClasses = $rt_classWithoutFields(),
jur_AbstractCharClass$PredefinedCharacterClasses_space = null,
jur_AbstractCharClass$PredefinedCharacterClasses_digit = null,
jur_AbstractCharClass$PredefinedCharacterClasses_contents = null,
jur_AbstractCharClass$PredefinedCharacterClasses_$callClinit = () => {
    jur_AbstractCharClass$PredefinedCharacterClasses_$callClinit = $rt_eraseClinit(jur_AbstractCharClass$PredefinedCharacterClasses);
    jur_AbstractCharClass$PredefinedCharacterClasses__clinit_();
},
jur_AbstractCharClass$PredefinedCharacterClasses__init_ = $this => {
    jur_AbstractCharClass$PredefinedCharacterClasses_$callClinit();
    jl_Object__init_($this);
},
jur_AbstractCharClass$PredefinedCharacterClasses__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$PredefinedCharacterClasses();
    jur_AbstractCharClass$PredefinedCharacterClasses__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$PredefinedCharacterClasses_getObject = ($this, $name) => {
    let $i, $row, var$4;
    $i = 0;
    while (true) {
        jur_AbstractCharClass$PredefinedCharacterClasses_$callClinit();
        if ($i >= jur_AbstractCharClass$PredefinedCharacterClasses_contents.data.length)
            $rt_throw(ju_MissingResourceException__init_0($rt_s(54), $rt_s(54), $name));
        $row = jur_AbstractCharClass$PredefinedCharacterClasses_contents.data[$i];
        var$4 = $row.data;
        if ($name.$equals(var$4[0]))
            break;
        $i = $i + 1 | 0;
    }
    return var$4[1];
},
jur_AbstractCharClass$PredefinedCharacterClasses__clinit_ = () => {
    let var$1, var$2, var$3, var$4;
    jur_AbstractCharClass$PredefinedCharacterClasses_space = jur_AbstractCharClass$LazySpace__init_0();
    jur_AbstractCharClass$PredefinedCharacterClasses_digit = jur_AbstractCharClass$LazyDigit__init_0();
    var$1 = $rt_createArray($rt_arraycls(jl_Object), 194);
    var$2 = var$1.data;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(55);
    var$4[1] = jur_AbstractCharClass$LazyLower__init_0();
    var$2[0] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(56);
    var$4[1] = jur_AbstractCharClass$LazyUpper__init_0();
    var$2[1] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(57);
    var$4[1] = jur_AbstractCharClass$LazyASCII__init_0();
    var$2[2] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(58);
    var$4[1] = jur_AbstractCharClass$LazyAlpha__init_0();
    var$2[3] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(59);
    var$4[1] = jur_AbstractCharClass$PredefinedCharacterClasses_digit;
    var$2[4] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(60);
    var$4[1] = jur_AbstractCharClass$LazyAlnum__init_0();
    var$2[5] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(61);
    var$4[1] = jur_AbstractCharClass$LazyPunct__init_0();
    var$2[6] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(62);
    var$4[1] = jur_AbstractCharClass$LazyGraph__init_0();
    var$2[7] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(63);
    var$4[1] = jur_AbstractCharClass$LazyPrint__init_0();
    var$2[8] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(64);
    var$4[1] = jur_AbstractCharClass$LazyBlank__init_0();
    var$2[9] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(65);
    var$4[1] = jur_AbstractCharClass$LazyCntrl__init_0();
    var$2[10] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(66);
    var$4[1] = jur_AbstractCharClass$LazyXDigit__init_0();
    var$2[11] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(67);
    var$4[1] = jur_AbstractCharClass$LazyJavaLowerCase__init_0();
    var$2[12] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(68);
    var$4[1] = jur_AbstractCharClass$LazyJavaUpperCase__init_0();
    var$2[13] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(69);
    var$4[1] = jur_AbstractCharClass$LazyJavaWhitespace__init_0();
    var$2[14] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(70);
    var$4[1] = jur_AbstractCharClass$LazyJavaMirrored__init_0();
    var$2[15] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(71);
    var$4[1] = jur_AbstractCharClass$LazyJavaDefined__init_0();
    var$2[16] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(72);
    var$4[1] = jur_AbstractCharClass$LazyJavaDigit__init_0();
    var$2[17] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(73);
    var$4[1] = jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_0();
    var$2[18] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(74);
    var$4[1] = jur_AbstractCharClass$LazyJavaISOControl__init_0();
    var$2[19] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(75);
    var$4[1] = jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_0();
    var$2[20] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(76);
    var$4[1] = jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_0();
    var$2[21] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(77);
    var$4[1] = jur_AbstractCharClass$LazyJavaLetter__init_0();
    var$2[22] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(78);
    var$4[1] = jur_AbstractCharClass$LazyJavaLetterOrDigit__init_0();
    var$2[23] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(79);
    var$4[1] = jur_AbstractCharClass$LazyJavaSpaceChar__init_0();
    var$2[24] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(80);
    var$4[1] = jur_AbstractCharClass$LazyJavaTitleCase__init_0();
    var$2[25] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(81);
    var$4[1] = jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_0();
    var$2[26] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(82);
    var$4[1] = jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_0();
    var$2[27] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(83);
    var$4[1] = jur_AbstractCharClass$PredefinedCharacterClasses_space;
    var$2[28] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(84);
    var$4[1] = jur_AbstractCharClass$LazyWord__init_0();
    var$2[29] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(85);
    var$4[1] = jur_AbstractCharClass$LazyNonWord__init_0();
    var$2[30] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(86);
    var$4[1] = jur_AbstractCharClass$PredefinedCharacterClasses_space;
    var$2[31] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(87);
    var$4[1] = jur_AbstractCharClass$LazyNonSpace__init_0();
    var$2[32] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(88);
    var$4[1] = jur_AbstractCharClass$PredefinedCharacterClasses_digit;
    var$2[33] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(89);
    var$4[1] = jur_AbstractCharClass$LazyNonDigit__init_0();
    var$2[34] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(90);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(0, 127);
    var$2[35] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(91);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(128, 255);
    var$2[36] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(92);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(256, 383);
    var$2[37] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(93);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(384, 591);
    var$2[38] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(94);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(592, 687);
    var$2[39] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(95);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(688, 767);
    var$2[40] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(96);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(768, 879);
    var$2[41] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(97);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(880, 1023);
    var$2[42] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(98);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1024, 1279);
    var$2[43] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(99);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1280, 1327);
    var$2[44] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(100);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1328, 1423);
    var$2[45] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(101);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1424, 1535);
    var$2[46] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(102);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1536, 1791);
    var$2[47] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(103);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1792, 1871);
    var$2[48] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(104);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1872, 1919);
    var$2[49] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(105);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1920, 1983);
    var$2[50] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(106);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2304, 2431);
    var$2[51] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(107);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2432, 2559);
    var$2[52] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(108);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2560, 2687);
    var$2[53] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(109);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2688, 2815);
    var$2[54] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(110);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2816, 2943);
    var$2[55] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(111);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2944, 3071);
    var$2[56] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(112);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3072, 3199);
    var$2[57] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(113);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3200, 3327);
    var$2[58] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(114);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3328, 3455);
    var$2[59] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(115);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3456, 3583);
    var$2[60] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(116);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3584, 3711);
    var$2[61] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(117);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3712, 3839);
    var$2[62] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(118);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3840, 4095);
    var$2[63] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(119);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4096, 4255);
    var$2[64] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(120);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4256, 4351);
    var$2[65] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(121);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4352, 4607);
    var$2[66] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(122);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4608, 4991);
    var$2[67] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(123);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4992, 5023);
    var$2[68] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(124);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5024, 5119);
    var$2[69] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(125);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5120, 5759);
    var$2[70] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(126);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5760, 5791);
    var$2[71] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(127);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5792, 5887);
    var$2[72] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(128);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5888, 5919);
    var$2[73] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(129);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5920, 5951);
    var$2[74] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(130);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5952, 5983);
    var$2[75] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(131);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5984, 6015);
    var$2[76] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(132);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6016, 6143);
    var$2[77] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(133);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6144, 6319);
    var$2[78] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(134);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6400, 6479);
    var$2[79] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(135);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6480, 6527);
    var$2[80] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(136);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6528, 6623);
    var$2[81] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(137);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6624, 6655);
    var$2[82] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(138);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6656, 6687);
    var$2[83] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(139);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7424, 7551);
    var$2[84] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(140);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7552, 7615);
    var$2[85] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(141);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7616, 7679);
    var$2[86] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(142);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7680, 7935);
    var$2[87] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(143);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7936, 8191);
    var$2[88] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(144);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8192, 8303);
    var$2[89] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(145);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8304, 8351);
    var$2[90] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(146);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8352, 8399);
    var$2[91] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(147);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8400, 8447);
    var$2[92] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(148);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8448, 8527);
    var$2[93] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(149);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8528, 8591);
    var$2[94] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(150);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8592, 8703);
    var$2[95] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(151);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8704, 8959);
    var$2[96] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(152);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8960, 9215);
    var$2[97] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(153);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9216, 9279);
    var$2[98] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(154);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9280, 9311);
    var$2[99] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(155);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9312, 9471);
    var$2[100] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(156);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9472, 9599);
    var$2[101] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(157);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9600, 9631);
    var$2[102] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(158);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9632, 9727);
    var$2[103] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(159);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9728, 9983);
    var$2[104] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(160);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9984, 10175);
    var$2[105] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(161);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10176, 10223);
    var$2[106] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(162);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10224, 10239);
    var$2[107] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(163);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10240, 10495);
    var$2[108] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(164);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10496, 10623);
    var$2[109] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(165);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10624, 10751);
    var$2[110] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(166);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10752, 11007);
    var$2[111] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(167);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11008, 11263);
    var$2[112] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(168);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11264, 11359);
    var$2[113] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(169);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11392, 11519);
    var$2[114] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(170);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11520, 11567);
    var$2[115] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(171);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11568, 11647);
    var$2[116] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(172);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11648, 11743);
    var$2[117] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(173);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11776, 11903);
    var$2[118] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(174);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11904, 12031);
    var$2[119] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(175);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12032, 12255);
    var$2[120] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(176);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12272, 12287);
    var$2[121] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(177);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12288, 12351);
    var$2[122] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(178);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12352, 12447);
    var$2[123] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(179);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12448, 12543);
    var$2[124] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(180);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12544, 12591);
    var$2[125] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(181);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12592, 12687);
    var$2[126] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(182);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12688, 12703);
    var$2[127] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(183);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12704, 12735);
    var$2[128] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(184);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12736, 12783);
    var$2[129] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(185);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12784, 12799);
    var$2[130] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(186);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12800, 13055);
    var$2[131] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(187);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(13056, 13311);
    var$2[132] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(188);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(13312, 19893);
    var$2[133] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(189);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(19904, 19967);
    var$2[134] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(190);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(19968, 40959);
    var$2[135] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(191);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(40960, 42127);
    var$2[136] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(192);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(42128, 42191);
    var$2[137] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(193);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(42752, 42783);
    var$2[138] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(194);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(43008, 43055);
    var$2[139] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(195);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(44032, 55203);
    var$2[140] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(196);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(55296, 56191);
    var$2[141] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(197);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(56192, 56319);
    var$2[142] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(198);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(56320, 57343);
    var$2[143] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(199);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(57344, 63743);
    var$2[144] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(200);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(63744, 64255);
    var$2[145] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(201);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(64256, 64335);
    var$2[146] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(202);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(64336, 65023);
    var$2[147] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(203);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65024, 65039);
    var$2[148] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(204);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65040, 65055);
    var$2[149] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(205);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65056, 65071);
    var$2[150] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(206);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65072, 65103);
    var$2[151] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(207);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65104, 65135);
    var$2[152] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(208);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65136, 65279);
    var$2[153] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(209);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65280, 65519);
    var$2[154] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(210);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(0, 1114111);
    var$2[155] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(211);
    var$4[1] = jur_AbstractCharClass$LazySpecialsBlock__init_0();
    var$2[156] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(212);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(0, 1);
    var$2[157] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(213);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(62, 1);
    var$2[158] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(214);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(1, 1);
    var$2[159] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(215);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(2, 1);
    var$2[160] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(216);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(3, 0);
    var$2[161] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(217);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(4, 0);
    var$2[162] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(218);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(5, 1);
    var$2[163] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(219);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(448, 1);
    var$2[164] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(220);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(6, 1);
    var$2[165] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(221);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(7, 0);
    var$2[166] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(222);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(8, 1);
    var$2[167] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(223);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(3584, 1);
    var$2[168] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(224);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(9, 1);
    var$2[169] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(225);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(10, 1);
    var$2[170] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(226);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(11, 1);
    var$2[171] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(227);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(28672, 0);
    var$2[172] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(228);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(12, 0);
    var$2[173] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(229);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(13, 0);
    var$2[174] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(230);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(14, 0);
    var$2[175] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(231);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_2(983040, 1, 1);
    var$2[176] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(232);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(15, 0);
    var$2[177] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(233);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(16, 1);
    var$2[178] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(234);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(18, 1);
    var$2[179] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(235);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_2(19, 0, 1);
    var$2[180] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(236);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(1643118592, 1);
    var$2[181] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(237);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(20, 0);
    var$2[182] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(238);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(21, 0);
    var$2[183] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(239);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(22, 0);
    var$2[184] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(240);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(23, 0);
    var$2[185] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(241);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(24, 1);
    var$2[186] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(242);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(2113929216, 1);
    var$2[187] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(243);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(25, 1);
    var$2[188] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(244);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(26, 0);
    var$2[189] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(245);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(27, 0);
    var$2[190] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(246);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(28, 1);
    var$2[191] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(247);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(29, 0);
    var$2[192] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(248);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(30, 0);
    var$2[193] = var$3;
    jur_AbstractCharClass$PredefinedCharacterClasses_contents = var$1;
},
jur_AbstractCharClass$LazyDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyDigit__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyDigit__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyDigit();
    jur_AbstractCharClass$LazyDigit__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyDigit_computeValue = $this => {
    return (jur_CharClass__init_()).$add0(48, 57);
},
jur_AbstractCharClass$LazyJavaLetter = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaLetter__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaLetter__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaLetter();
    jur_AbstractCharClass$LazyJavaLetter__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaLetter_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaLetter$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
},
ji_Flushable = $rt_classWithoutFields(0);
function jur_DecomposedCharSet() {
    let a = this; jur_JointSet.call(a);
    a.$readCharsForCodePoint = 0;
    a.$decomposedCharUTF160 = null;
    a.$decomposedChar0 = null;
    a.$decomposedCharLength0 = 0;
}
let jur_DecomposedCharSet__init_ = ($this, $decomposedChar, $decomposedCharLength) => {
    jur_JointSet__init_($this);
    $this.$readCharsForCodePoint = 1;
    $this.$decomposedChar0 = $decomposedChar;
    $this.$decomposedCharLength0 = $decomposedCharLength;
},
jur_DecomposedCharSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_DecomposedCharSet();
    jur_DecomposedCharSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_DecomposedCharSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_DecomposedCharSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $decCodePoint, $readCodePoints, $rightBound, $curChar, var$8, $decCurCodePoint, var$10, var$11, var$12, var$13, var$14, var$15;
    $decCodePoint = $rt_createIntArray(4);
    $readCodePoints = 0;
    $rightBound = $matchResult.$getRightBound();
    if ($strIndex >= $rightBound)
        return (-1);
    $curChar = $this.$codePointAt($strIndex, $testString, $rightBound);
    var$8 = $strIndex + $this.$readCharsForCodePoint | 0;
    $decCurCodePoint = jur_Lexer_getDecomposition($curChar);
    if ($decCurCodePoint === null) {
        var$10 = $decCodePoint.data;
        var$11 = 1;
        var$10[$readCodePoints] = $curChar;
    } else {
        var$11 = $decCurCodePoint.data.length;
        jl_System_fastArraycopy($decCurCodePoint, 0, $decCodePoint, 0, var$11);
        var$11 = $readCodePoints + var$11 | 0;
    }
    a: {
        if (var$8 < $rightBound) {
            var$12 = $this.$codePointAt(var$8, $testString, $rightBound);
            while (var$11 < 4) {
                if (!jur_Lexer_hasDecompositionNonNullCanClass(var$12)) {
                    var$10 = $decCodePoint.data;
                    var$13 = var$11 + 1 | 0;
                    var$10[var$11] = var$12;
                } else {
                    var$10 = (jur_Lexer_getDecomposition(var$12)).data;
                    if (var$10.length != 2) {
                        var$14 = $decCodePoint.data;
                        var$13 = var$11 + 1 | 0;
                        var$14[var$11] = var$10[0];
                    } else {
                        var$14 = $decCodePoint.data;
                        var$12 = var$11 + 1 | 0;
                        var$14[var$11] = var$10[0];
                        var$13 = var$12 + 1 | 0;
                        var$14[var$12] = var$10[1];
                    }
                }
                var$8 = var$8 + $this.$readCharsForCodePoint | 0;
                if (var$8 >= $rightBound) {
                    var$11 = var$13;
                    break a;
                }
                var$12 = $this.$codePointAt(var$8, $testString, $rightBound);
                var$11 = var$13;
            }
        }
    }
    if (var$11 != $this.$decomposedCharLength0)
        return (-1);
    var$15 = 0;
    while (true) {
        if (var$15 >= var$11)
            return $this.$next1.$matches(var$8, $testString, $matchResult);
        if ($decCodePoint.data[var$15] != $this.$decomposedChar0.data[var$15])
            break;
        var$15 = var$15 + 1 | 0;
    }
    return (-1);
},
jur_DecomposedCharSet_getDecomposedChar = $this => {
    let $strBuff, $i;
    if ($this.$decomposedCharUTF160 === null) {
        $strBuff = jl_StringBuilder__init_();
        $i = 0;
        while ($i < $this.$decomposedCharLength0) {
            $strBuff.$append12(jl_Character_toChars($this.$decomposedChar0.data[$i]));
            $i = $i + 1 | 0;
        }
        $this.$decomposedCharUTF160 = $strBuff.$toString();
    }
    return $this.$decomposedCharUTF160;
},
jur_DecomposedCharSet_getName = $this => {
    let var$1, var$2;
    var$1 = jur_DecomposedCharSet_getDecomposedChar($this);
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(249)), var$1);
    return jl_StringBuilder_toString(var$2);
},
jur_DecomposedCharSet_codePointAt = ($this, $strIndex, $testString, $rightBound) => {
    let $curChar, var$5, $low, $curCodePointUTF16;
    $this.$readCharsForCodePoint = 1;
    if ($strIndex >= ($rightBound - 1 | 0))
        $curChar = $testString.$charAt($strIndex);
    else {
        var$5 = $strIndex + 1 | 0;
        $curChar = $testString.$charAt($strIndex);
        $low = $testString.$charAt(var$5);
        if (jl_Character_isSurrogatePair($curChar, $low)) {
            $curCodePointUTF16 = $rt_createCharArrayFromData([$curChar, $low]);
            $curChar = jl_Character_codePointAt($curCodePointUTF16, 0);
            $this.$readCharsForCodePoint = 2;
        }
    }
    return $curChar;
},
jur_DecomposedCharSet_first = ($this, $set) => {
    let var$2, var$3;
    a: {
        if ($set instanceof jur_DecomposedCharSet) {
            var$2 = $set;
            if (!(jur_DecomposedCharSet_getDecomposedChar(var$2)).$equals(jur_DecomposedCharSet_getDecomposedChar($this))) {
                var$3 = 0;
                break a;
            }
        }
        var$3 = 1;
    }
    return var$3;
},
jur_DecomposedCharSet_hasConsumed = ($this, $matchResult) => {
    return 1;
},
jur_CIDecomposedCharSet = $rt_classWithoutFields(jur_DecomposedCharSet),
jur_CIDecomposedCharSet__init_ = ($this, $decomp, $decomposedCharLength) => {
    jur_DecomposedCharSet__init_($this, $decomp, $decomposedCharLength);
},
jur_CIDecomposedCharSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CIDecomposedCharSet();
    jur_CIDecomposedCharSet__init_(var_2, var_0, var_1);
    return var_2;
};
function jnci_BufferedDecoder() {
    let a = this; jnc_CharsetDecoder.call(a);
    a.$inArray = null;
    a.$outArray = null;
}
let jnci_BufferedDecoder__init_ = ($this, $cs, $averageCharsPerByte, $maxCharsPerByte) => {
    jnc_CharsetDecoder__init_($this, $cs, $averageCharsPerByte, $maxCharsPerByte);
    $this.$inArray = $rt_createByteArray(512);
    $this.$outArray = $rt_createCharArray(512);
},
jnci_BufferedDecoder_decodeLoop = ($this, $in, $out) => {
    let $inArray, $inPos, $inSize, $outArray, $i, var$8, var$9, $result, $outPos, $outSize, $controller;
    $inArray = $this.$inArray;
    $inPos = 0;
    $inSize = 0;
    $outArray = $this.$outArray;
    a: {
        while (true) {
            if (($inPos + 32 | 0) > $inSize && jn_Buffer_hasRemaining($in)) {
                $i = $inPos;
                while ($i < $inSize) {
                    var$8 = $inArray.data;
                    var$8[$i - $inPos | 0] = var$8[$i];
                    $i = $i + 1 | 0;
                }
                var$8 = $inArray.data;
                var$9 = $inSize - $inPos | 0;
                $inSize = jl_Math_min(jn_Buffer_remaining($in) + var$9 | 0, var$8.length);
                $in.$get1($inArray, var$9, $inSize - var$9 | 0);
                $inPos = 0;
            }
            if (!jn_Buffer_hasRemaining($out)) {
                if (!jn_Buffer_hasRemaining($in) && $inPos >= $inSize) {
                    jnc_CoderResult_$callClinit();
                    $result = jnc_CoderResult_UNDERFLOW;
                } else {
                    jnc_CoderResult_$callClinit();
                    $result = jnc_CoderResult_OVERFLOW;
                }
                break a;
            }
            var$8 = $outArray.data;
            $outPos = 0;
            $outSize = jl_Math_min(jn_Buffer_remaining($out), var$8.length);
            $controller = jnci_BufferedDecoder$Controller__init_0($in, $out);
            $result = $this.$arrayDecode($inArray, $inPos, $inSize, $outArray, $outPos, $outSize, $controller);
            $inPos = $controller.$inPosition;
            if ($result === null && $outPos == $controller.$outPosition) {
                jnc_CoderResult_$callClinit();
                $result = jnc_CoderResult_UNDERFLOW;
            }
            var$9 = $controller.$outPosition;
            $out.$put1($outArray, 0, var$9);
            if ($result !== null)
                break;
        }
    }
    $in.$position(jn_Buffer_position($in) - ($inSize - $inPos | 0) | 0);
    return $result;
},
jnci_AsciiDecoder = $rt_classWithoutFields(jnci_BufferedDecoder),
jnci_AsciiDecoder__init_ = ($this, $cs) => {
    jnci_BufferedDecoder__init_($this, $cs, 1.0, 1.0);
},
jnci_AsciiDecoder__init_0 = var_0 => {
    let var_1 = new jnci_AsciiDecoder();
    jnci_AsciiDecoder__init_(var_1, var_0);
    return var_1;
},
jnci_AsciiDecoder_arrayDecode = ($this, $inArray, $inPos, $inSize, $outArray, $outPos, $outSize, $controller) => {
    let $result, var$9, var$10, $b, var$12;
    $result = null;
    a: {
        while ($inPos < $inSize) {
            if ($outPos >= $outSize)
                break a;
            var$9 = $inArray.data;
            var$10 = $inPos + 1 | 0;
            $b = var$9[$inPos] & 255;
            if ($b & 128) {
                $result = jnc_CoderResult_malformedForLength(1);
                $inPos = var$10 + (-1) | 0;
                break a;
            }
            var$9 = $outArray.data;
            var$12 = $outPos + 1 | 0;
            var$9[$outPos] = $b & 65535;
            $inPos = var$10;
            $outPos = var$12;
        }
    }
    $controller.$setInPosition($inPos);
    $controller.$setOutPosition($outPos);
    return $result;
},
jur_AheadFSet = $rt_classWithoutFields(jur_FSet),
jur_AheadFSet__init_ = $this => {
    jur_FSet__init_($this, (-1));
},
jur_AheadFSet__init_0 = () => {
    let var_0 = new jur_AheadFSet();
    jur_AheadFSet__init_(var_0);
    return var_0;
},
jur_AheadFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    return $stringIndex;
},
jur_AheadFSet_getName = $this => {
    return $rt_s(250);
},
v_WebSpriteLibrary$3 = $rt_classWithoutFields(),
v_WebSpriteLibrary$3_$SwitchMap$shared$Entities = null,
v_WebSpriteLibrary$3_$callClinit = () => {
    v_WebSpriteLibrary$3_$callClinit = $rt_eraseClinit(v_WebSpriteLibrary$3);
    v_WebSpriteLibrary$3__clinit_();
},
v_WebSpriteLibrary$3__clinit_ = () => {
    v_WebSpriteLibrary$3_$SwitchMap$shared$Entities = $rt_createIntArray((s_Entities_values()).data.length);
    v_WebSpriteLibrary$3_$SwitchMap$shared$Entities.data[jl_Enum_ordinal(s_Entities_PLAYER)] = 1;
    v_WebSpriteLibrary$3_$SwitchMap$shared$Entities.data[jl_Enum_ordinal(s_Entities_CAPTURED_PLAYER)] = 2;
    v_WebSpriteLibrary$3_$SwitchMap$shared$Entities.data[jl_Enum_ordinal(s_Entities_BOSS_GALAGA)] = 3;
    v_WebSpriteLibrary$3_$SwitchMap$shared$Entities.data[jl_Enum_ordinal(s_Entities_BOSS_GALAGA_ONE_SHOT)] = 4;
    v_WebSpriteLibrary$3_$SwitchMap$shared$Entities.data[jl_Enum_ordinal(s_Entities_GOEI)] = 5;
    v_WebSpriteLibrary$3_$SwitchMap$shared$Entities.data[jl_Enum_ordinal(s_Entities_ZAKO)] = 6;
},
otj_JSObject = $rt_classWithoutFields(0),
otjde_EventListener = $rt_classWithoutFields(0),
v_WebSpriteLibrary$1 = $rt_classWithoutFields(),
v_WebSpriteLibrary$1__init_ = $this => {
    jl_Object__init_($this);
},
v_WebSpriteLibrary$1__init_0 = () => {
    let var_0 = new v_WebSpriteLibrary$1();
    v_WebSpriteLibrary$1__init_(var_0);
    return var_0;
},
v_WebSpriteLibrary$1_handleEvent = ($this, $e) => {
    v_WebSpriteLibrary_onOneLoaded();
},
v_WebSpriteLibrary$1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
};
function v_WebSpriteLibrary$2() {
    jl_Object.call(this);
    this.$val$src = null;
}
let v_WebSpriteLibrary$2__init_ = ($this, var$1) => {
    $this.$val$src = var$1;
    jl_Object__init_($this);
},
v_WebSpriteLibrary$2__init_0 = var_0 => {
    let var_1 = new v_WebSpriteLibrary$2();
    v_WebSpriteLibrary$2__init_(var_1, var_0);
    return var_1;
},
v_WebSpriteLibrary$2_handleEvent = ($this, $e) => {
    v_WebSpriteLibrary_onImageLoadError($this.$val$src);
},
v_WebSpriteLibrary$2_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
},
jur_NonCapJointSet = $rt_classWithoutFields(jur_JointSet),
jur_NonCapJointSet__init_ = ($this, $children, $fSet) => {
    jur_JointSet__init_0($this, $children, $fSet);
},
jur_NonCapJointSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_NonCapJointSet();
    jur_NonCapJointSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_NonCapJointSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $start, $size, $i, $e, $shift;
    $start = $matchResult.$getConsumed($this.$groupIndex);
    $matchResult.$setConsumed($this.$groupIndex, $stringIndex);
    $size = $this.$children.$size();
    $i = 0;
    while (true) {
        if ($i >= $size) {
            $matchResult.$setConsumed($this.$groupIndex, $start);
            return (-1);
        }
        $e = $this.$children.$get($i);
        $shift = $e.$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return $shift;
},
jur_NonCapJointSet_getName = $this => {
    return $rt_s(251);
},
jur_NonCapJointSet_hasConsumed = ($this, $matchResult) => {
    let $cons;
    $cons = $matchResult.$getConsumed($this.$groupIndex);
    return !$cons ? 0 : 1;
},
jur_AtomicJointSet = $rt_classWithoutFields(jur_NonCapJointSet),
jur_AtomicJointSet__init_ = ($this, $children, $fSet) => {
    jur_NonCapJointSet__init_($this, $children, $fSet);
},
jur_AtomicJointSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_AtomicJointSet();
    jur_AtomicJointSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_AtomicJointSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $start, $size, $i, $e, $shift;
    $start = $matchResult.$getConsumed($this.$groupIndex);
    $matchResult.$setConsumed($this.$groupIndex, $stringIndex);
    $size = $this.$children.$size();
    $i = 0;
    while ($i < $size) {
        $e = $this.$children.$get($i);
        $shift = $e.$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0)
            return $this.$next1.$matches($this.$fSet.$getIndex(), $testString, $matchResult);
        $i = $i + 1 | 0;
    }
    $matchResult.$setConsumed($this.$groupIndex, $start);
    return (-1);
},
jur_AtomicJointSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_AtomicJointSet_getName = $this => {
    return $rt_s(251);
},
jur_PositiveLookAhead = $rt_classWithoutFields(jur_AtomicJointSet),
jur_PositiveLookAhead__init_ = ($this, $children, $fSet) => {
    jur_AtomicJointSet__init_($this, $children, $fSet);
},
jur_PositiveLookAhead__init_0 = (var_0, var_1) => {
    let var_2 = new jur_PositiveLookAhead();
    jur_PositiveLookAhead__init_(var_2, var_0, var_1);
    return var_2;
},
jur_PositiveLookAhead_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $size, $i, $e, $shift;
    $size = $this.$children.$size();
    $i = 0;
    while ($i < $size) {
        $e = $this.$children.$get($i);
        $shift = $e.$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0)
            return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_PositiveLookAhead_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_PositiveLookAhead_getName = $this => {
    return $rt_s(252);
},
jur_NegativeLookAhead = $rt_classWithoutFields(jur_AtomicJointSet),
jur_NegativeLookAhead__init_ = ($this, $children, $fSet) => {
    jur_AtomicJointSet__init_($this, $children, $fSet);
},
jur_NegativeLookAhead__init_0 = (var_0, var_1) => {
    let var_2 = new jur_NegativeLookAhead();
    jur_NegativeLookAhead__init_(var_2, var_0, var_1);
    return var_2;
},
jur_NegativeLookAhead_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $size, $i, $e;
    $size = $this.$children.$size();
    $i = 0;
    while (true) {
        if ($i >= $size)
            return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        $e = $this.$children.$get($i);
        if ($e.$matches($stringIndex, $testString, $matchResult) >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_NegativeLookAhead_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_NegativeLookAhead_getName = $this => {
    return $rt_s(253);
},
jl_Readable = $rt_classWithoutFields(0),
jn_CharBuffer = $rt_classWithoutFields(jn_Buffer),
jn_CharBuffer__init_ = ($this, $position, $limit) => {
    jn_Buffer__init_($this);
    $this.$position3 = $position;
    $this.$limit0 = $limit;
},
jn_CharBuffer_wrap0 = ($array, $offset, $length) => {
    let var$4, var$5, var$6, $result;
    if ($length >= 0 && $offset >= 0) {
        var$4 = $array.data;
        var$5 = $length + $offset | 0;
        var$6 = var$4.length;
        if (var$5 <= var$6) {
            $result = jn_CharBufferOverTypedArray__init_0(0, var$6, 0, $array.data, $array);
            $result.$position3 = $offset;
            $result.$limit0 = var$5;
            return $result;
        }
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
jn_CharBuffer_wrap = $array => {
    return jn_CharBuffer_wrap0($array, 0, $array.data.length);
},
jn_CharBuffer_get = ($this, $dst, $offset, $length) => {
    if ($length >= 0 && $offset >= 0 && ($offset + $length | 0) <= $dst.data.length) {
        if ($length > jn_Buffer_remaining($this))
            $rt_throw(jn_BufferUnderflowException__init_0());
        $this.$getImpl($this.$position3, $dst, $offset, $length);
        $this.$position3 = $this.$position3 + $length | 0;
        return $this;
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
jn_CharBuffer_put1 = ($this, $src, $offset, $length) => {
    if ($this.$isReadOnly())
        $rt_throw(jn_ReadOnlyBufferException__init_());
    if (jn_Buffer_remaining($this) < $length)
        $rt_throw(jn_BufferOverflowException__init_());
    if ($length >= 0 && $offset >= 0 && ($offset + $length | 0) <= $src.data.length) {
        $this.$putImpl1($this.$position3, $src, $offset, $length);
        $this.$position3 = $this.$position3 + $length | 0;
        return $this;
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
jn_CharBuffer_put0 = ($this, $src, $start, $end) => {
    let $sz, $pos;
    if ($this.$isReadOnly())
        $rt_throw(jn_ReadOnlyBufferException__init_());
    if ($end >= $start && $start >= 0 && $end <= $src.$length()) {
        $sz = $end - $start | 0;
        if (jn_Buffer_remaining($this) < $sz)
            $rt_throw(jn_BufferOverflowException__init_());
        $pos = $this.$position3;
        $this.$putImpl2($pos, $src, $start, $end);
        $this.$position3 = $this.$position3 + $sz | 0;
        return $this;
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
jn_CharBuffer_put = ($this, $src) => {
    return $this.$put2($src, 0, $src.$length());
},
jn_CharBuffer_flip = $this => {
    jn_Buffer_flip($this);
    return $this;
},
jn_CharBuffer_position = ($this, $newPosition) => {
    jn_Buffer_position0($this, $newPosition);
    return $this;
},
jn_CharBufferImpl = $rt_classWithoutFields(jn_CharBuffer),
jn_CharBufferImpl__init_ = ($this, $position, $limit) => {
    jn_CharBuffer__init_($this, $position, $limit);
},
jn_CharBufferImpl_compact = $this => {
    let $sz, $src, $i, var$4;
    if ($this.$isReadOnly())
        $rt_throw(jn_ReadOnlyBufferException__init_());
    a: {
        $sz = jn_Buffer_remaining($this);
        if ($this.$position3 > 0) {
            $src = $this.$position3;
            $i = 0;
            while (true) {
                if ($i >= $sz)
                    break a;
                var$4 = $src + 1 | 0;
                $this.$putChar($i, $this.$getChar($src));
                $i = $i + 1 | 0;
                $src = var$4;
            }
        }
    }
    $this.$position3 = $sz;
    $this.$limit0 = jn_Buffer_capacity($this);
    $this.$mark = (-1);
    return $this;
},
jn_CharBufferImpl_isReadOnly = $this => {
    return $this.$readOnly();
},
jn_ArrayBufferViewProvider = $rt_classWithoutFields(0);
function jn_CharBufferOverTypedArray() {
    let a = this; jn_CharBufferImpl.call(a);
    a.$readOnly0 = 0;
    a.$data0 = null;
    a.$array2 = null;
}
let jn_CharBufferOverTypedArray__init_ = ($this, $position, $limit, $readOnly, $data, $array) => {
    jn_CharBufferImpl__init_($this, $position, $limit);
    $this.$readOnly0 = $readOnly;
    $this.$data0 = $data;
    $this.$array2 = $array;
},
jn_CharBufferOverTypedArray__init_0 = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new jn_CharBufferOverTypedArray();
    jn_CharBufferOverTypedArray__init_(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
jn_CharBufferOverTypedArray_readOnly = $this => {
    return $this.$readOnly0;
},
jn_CharBufferOverTypedArray_getChar = ($this, $index) => {
    return $this.$data0[$index] & 65535;
},
jn_CharBufferOverTypedArray_putChar = ($this, $index, $value) => {
    $this.$data0[$index] = $value;
},
jn_CharBufferOverTypedArray_capacityImpl = $this => {
    return $this.$data0.length;
},
jn_CharBufferOverTypedArray_getImpl = ($this, $index, $dst, $offset, $length) => {
    let var$5, var$6, $slice;
    var$5 = $this.$data0.buffer;
    var$6 = $this.$data0.byteOffset + ($index * 2 | 0) | 0;
    $slice = new Uint16Array(var$5, var$6, $length);
    $dst.data.set($slice, $offset);
},
jn_CharBufferOverTypedArray_putImpl0 = ($this, $index, $src, $offset, $length) => {
    let var$5, var$6, $slice;
    var$5 = $src.data.buffer;
    var$6 = $offset * 2 | 0;
    $slice = new Uint16Array(var$5, var$6, $length);
    $this.$data0.set($slice, $index);
},
jn_CharBufferOverTypedArray_putImpl = ($this, $index, $src, $offset, $length) => {
    let $length_0, var$6, $index_0, $offset_0, var$9;
    while (true) {
        $length_0 = $length + (-1) | 0;
        if ($length <= 0)
            break;
        var$6 = $this.$data0;
        $index_0 = $index + 1 | 0;
        $offset_0 = $offset + 1 | 0;
        var$9 = $src.$charAt($offset);
        var$6[$index] = var$9;
        $length = $length_0;
        $index = $index_0;
        $offset = $offset_0;
    }
},
c_GameController$1 = $rt_classWithoutFields(),
c_GameController$1_$SwitchMap$shared$GameState = null,
c_GameController$1_$callClinit = () => {
    c_GameController$1_$callClinit = $rt_eraseClinit(c_GameController$1);
    c_GameController$1__clinit_();
},
c_GameController$1__clinit_ = () => {
    c_GameController$1_$SwitchMap$shared$GameState = $rt_createIntArray((s_GameState_values()).data.length);
    c_GameController$1_$SwitchMap$shared$GameState.data[jl_Enum_ordinal(s_GameState_PLAYING)] = 1;
    c_GameController$1_$SwitchMap$shared$GameState.data[jl_Enum_ordinal(s_GameState_LOADING_NOT_FIRST_STAGE)] = 2;
    c_GameController$1_$SwitchMap$shared$GameState.data[jl_Enum_ordinal(s_GameState_COIN_INSERTED)] = 3;
},
otjt_ArrayBufferView = $rt_classWithoutFields(),
otjt_TypedArray = $rt_classWithoutFields(otjt_ArrayBufferView),
jl_UnsupportedOperationException = $rt_classWithoutFields(jl_RuntimeException),
jl_UnsupportedOperationException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
jl_UnsupportedOperationException__init_ = () => {
    let var_0 = new jl_UnsupportedOperationException();
    jl_UnsupportedOperationException__init_0(var_0);
    return var_0;
},
jn_ReadOnlyBufferException = $rt_classWithoutFields(jl_UnsupportedOperationException),
jn_ReadOnlyBufferException__init_0 = $this => {
    jl_UnsupportedOperationException__init_0($this);
},
jn_ReadOnlyBufferException__init_ = () => {
    let var_0 = new jn_ReadOnlyBufferException();
    jn_ReadOnlyBufferException__init_0(var_0);
    return var_0;
},
jlr_Array = $rt_classWithoutFields(),
jlr_Array_getLength = $array => {
    let $cls;
    $cls = jl_Class_getClassInfo(jl_Object_getClass($array));
    if ($cls[$rt_meta].itemType !== null)
        return $rt_arrayLength($array);
    $rt_throw(jl_IllegalArgumentException__init_());
},
jlr_Array_newInstance = ($componentType, $length) => {
    let $cls;
    if ($componentType === null)
        $rt_throw(jl_NullPointerException__init_2());
    if ($componentType === $rt_cls($rt_voidcls))
        $rt_throw(jl_IllegalArgumentException__init_());
    if ($length < 0)
        $rt_throw(jl_NegativeArraySizeException__init_0());
    $cls = jl_Class_getClassInfo($componentType);
    return otrr_ClassInfo_newArrayInstance($cls, $length);
};
function otcit_DoubleAnalyzer$Result() {
    let a = this; jl_Object.call(a);
    a.$mantissa = Long_ZERO;
    a.$exponent = 0;
    a.$sign0 = 0;
}
let otcit_DoubleAnalyzer$Result__init_0 = $this => {
    jl_Object__init_($this);
},
otcit_DoubleAnalyzer$Result__init_ = () => {
    let var_0 = new otcit_DoubleAnalyzer$Result();
    otcit_DoubleAnalyzer$Result__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaDigit__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaDigit__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaDigit();
    jur_AbstractCharClass$LazyJavaDigit__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaDigit_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaDigit$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
},
jl_Iterable = $rt_classWithoutFields(0),
ju_Collection = $rt_classWithoutFields(0),
ju_Collection_removeIf = ($this, $filter) => {
    let $iterator, $removed, $element, $match;
    $iterator = $this.$iterator();
    $removed = 0;
    while ($iterator.$hasNext()) {
        $element = $iterator.$next();
        $match = $filter.$test($element);
        if ($match) {
            $iterator.$remove1();
            $removed = 1;
        }
    }
    return $removed;
},
ju_AbstractCollection = $rt_classWithoutFields(),
ju_AbstractCollection__init_ = $this => {
    jl_Object__init_($this);
},
ju_AbstractCollection_isEmpty = $this => {
    return $this.$size() ? 0 : 1;
},
ju_AbstractCollection_toArray = ($this, $a) => {
    let var$2, $i, var$4, $iter;
    var$2 = $a.data;
    $i = $this.$size();
    var$4 = var$2.length;
    if (var$4 < $i)
        $a = jlr_Array_newInstance(jl_Class_getComponentType(jl_Object_getClass($a)), $i);
    else
        while ($i < var$4) {
            var$2[$i] = null;
            $i = $i + 1 | 0;
        }
    $i = 0;
    $iter = $this.$iterator();
    while ($iter.$hasNext()) {
        var$2 = $a.data;
        var$4 = $i + 1 | 0;
        var$2[$i] = $iter.$next();
        $i = var$4;
    }
    return $a;
},
ju_AbstractCollection_addAll = ($this, $c) => {
    let $changed, $iter;
    $changed = 0;
    $iter = $c.$iterator();
    while ($iter.$hasNext()) {
        if (!$this.$add2($iter.$next()))
            continue;
        $changed = 1;
    }
    return $changed;
},
jl_AutoCloseable = $rt_classWithoutFields(0),
ji_Closeable = $rt_classWithoutFields(0),
ji_InputStream = $rt_classWithoutFields(),
ji_InputStream__init_ = $this => {
    jl_Object__init_($this);
};
function ji_ByteArrayInputStream() {
    let a = this; ji_InputStream.call(a);
    a.$buf = null;
    a.$pos = 0;
    a.$mark1 = 0;
    a.$count0 = 0;
}
let ji_ByteArrayInputStream__init_ = ($this, $buf, $offset, $length) => {
    ji_InputStream__init_($this);
    $this.$buf = $buf;
    $this.$pos = $offset;
    $this.$mark1 = $offset;
    $this.$count0 = $offset + $length | 0;
},
ji_ByteArrayInputStream__init_2 = (var_0, var_1, var_2) => {
    let var_3 = new ji_ByteArrayInputStream();
    ji_ByteArrayInputStream__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
ji_ByteArrayInputStream__init_0 = ($this, $buf) => {
    ji_ByteArrayInputStream__init_($this, $buf, 0, $buf.data.length);
},
ji_ByteArrayInputStream__init_1 = var_0 => {
    let var_1 = new ji_ByteArrayInputStream();
    ji_ByteArrayInputStream__init_0(var_1, var_0);
    return var_1;
},
ji_ByteArrayInputStream_read = ($this, $b, $off, $len) => {
    let $bytesToRead, $i, var$6, var$7, var$8, var$9;
    $bytesToRead = jl_Math_min($len, $this.$count0 - $this.$pos | 0);
    $i = 0;
    while ($i < $bytesToRead) {
        var$6 = $b.data;
        var$7 = $off + 1 | 0;
        var$8 = $this.$buf.data;
        var$9 = $this.$pos;
        $this.$pos = var$9 + 1 | 0;
        var$6[$off] = var$8[var$9];
        $i = $i + 1 | 0;
        $off = var$7;
    }
    if ($bytesToRead <= 0)
        $bytesToRead = (-1);
    return $bytesToRead;
},
ji_ByteArrayInputStream_available = $this => {
    return $this.$count0 - $this.$pos | 0;
},
ji_ByteArrayInputStream_close = $this => {
    return;
},
otci_IntegerUtil = $rt_classWithoutFields(),
otci_IntegerUtil_toUnsignedLogRadixString = ($value, $radixLog2) => {
    let $radix, $mask, $sz, $chars, $pos, $target, var$9, $target_0;
    if (!$value)
        return $rt_s(254);
    $radix = 1 << $radixLog2;
    $mask = $radix - 1 | 0;
    $sz = (((32 - jl_Integer_numberOfLeadingZeros($value) | 0) + $radixLog2 | 0) - 1 | 0) / $radixLog2 | 0;
    $chars = $rt_createCharArray($sz);
    $pos = $rt_imul($sz - 1 | 0, $radixLog2);
    $target = 0;
    while ($pos >= 0) {
        var$9 = $chars.data;
        $target_0 = $target + 1 | 0;
        var$9[$target] = jl_Character_forDigit(($value >>> $pos | 0) & $mask, $radix);
        $pos = $pos - $radixLog2 | 0;
        $target = $target_0;
    }
    return jl_String__init_($chars);
};
function jur_LeafQuantifierSet() {
    jur_QuantifierSet.call(this);
    this.$leaf = null;
}
let jur_LeafQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_QuantifierSet__init_($this, $innerSet, $next, $type);
    $this.$leaf = $innerSet;
},
jur_LeafQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_LeafQuantifierSet();
    jur_LeafQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_LeafQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $i, var$5;
    $i = 0;
    a: {
        while (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$getRightBound()) {
            var$5 = $this.$leaf.$accepts($stringIndex, $testString);
            if (var$5 <= 0)
                break a;
            $stringIndex = $stringIndex + var$5 | 0;
            $i = $i + 1 | 0;
        }
    }
    while (true) {
        if ($i < 0)
            return (-1);
        var$5 = $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if (var$5 >= 0)
            break;
        $stringIndex = $stringIndex - $this.$leaf.$charCount() | 0;
        $i = $i + (-1) | 0;
    }
    return var$5;
},
jur_LeafQuantifierSet_getName = $this => {
    return $rt_s(255);
},
jur_AltQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet),
jur_AltQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_LeafQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_AltQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_AltQuantifierSet();
    jur_AltQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_AltQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $shift;
    $shift = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($shift < 0)
        $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    return $shift;
},
jur_AltQuantifierSet_setNext = ($this, $next) => {
    jur_AbstractSet_setNext($this, $next);
    $this.$innerSet.$setNext($next);
},
jur_PossessiveAltQuantifierSet = $rt_classWithoutFields(jur_AltQuantifierSet),
jur_PossessiveAltQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_AltQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_PossessiveAltQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_PossessiveAltQuantifierSet();
    jur_PossessiveAltQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_PossessiveAltQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4;
    if (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$getRightBound()) {
        var$4 = $this.$leaf.$accepts($stringIndex, $testString);
        if (var$4 >= 1)
            $stringIndex = $stringIndex + var$4 | 0;
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
otjc_JSObjects = $rt_classWithoutFields(),
otji_JS = $rt_classWithoutFields(),
otji_JS_function = (var$1, var$2) => {
    if (var$1 === null || var$1 === undefined) {
        return null;
    }
    let name = 'jso$functor$' + var$2;
    let result = var$1[name];
    if (typeof result !== 'function') {
        let fn = function() {
            return var$1[var$2].apply(var$1, arguments);
        };
        result = () => fn;
        var$1[name] = result;
    }
    return result();
};
function jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$036 = null;
}
let jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1__init_ = ($this, var$1) => {
    $this.$this$036 = var$1;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1();
    jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1_contains = ($this, $ch) => {
    return jl_Character_isUnicodeIdentifierStart($ch);
};
function jnc_Charset() {
    let a = this; jl_Object.call(a);
    a.$canonicalName = null;
    a.$aliases = null;
}
let jnc_Charset__init_ = ($this, $canonicalName, $aliases) => {
    let var$3, var$4, var$5, $alias;
    var$3 = $aliases.data;
    jl_Object__init_($this);
    jnc_Charset_checkCanonicalName($canonicalName);
    var$4 = var$3.length;
    var$5 = 0;
    while (var$5 < var$4) {
        $alias = var$3[var$5];
        jnc_Charset_checkCanonicalName($alias);
        var$5 = var$5 + 1 | 0;
    }
    $this.$canonicalName = $canonicalName;
    $this.$aliases = $aliases.$clone0();
},
jnc_Charset_checkCanonicalName = $name => {
    let $i, $c;
    if ($name.$isEmpty())
        $rt_throw(jnc_IllegalCharsetNameException__init_($name));
    if (!jnc_Charset_isValidCharsetStart($name.$charAt(0)))
        $rt_throw(jnc_IllegalCharsetNameException__init_($name));
    $i = 1;
    while ($i < $name.$length()) {
        a: {
            $c = $name.$charAt($i);
            switch ($c) {
                case 43:
                case 45:
                case 46:
                case 58:
                case 95:
                    break;
                default:
                    if (jnc_Charset_isValidCharsetStart($c))
                        break a;
                    else
                        $rt_throw(jnc_IllegalCharsetNameException__init_($name));
            }
        }
        $i = $i + 1 | 0;
    }
},
jnc_Charset_isValidCharsetStart = $c => {
    let var$2;
    a: {
        b: {
            if (!($c >= 48 && $c <= 57) && !($c >= 97 && $c <= 122)) {
                if ($c < 65)
                    break b;
                if ($c > 90)
                    break b;
            }
            var$2 = 1;
            break a;
        }
        var$2 = 0;
    }
    return var$2;
},
jnc_Charset_forName = $charsetName => {
    let $charset;
    if ($charsetName === null)
        $rt_throw(jl_IllegalArgumentException__init_0($rt_s(256)));
    jnc_Charset_checkCanonicalName($charsetName);
    jnc_Charset$Charsets_$callClinit();
    $charset = jnc_Charset$Charsets_value.$get0($charsetName.$toUpperCase());
    if ($charset !== null)
        return $charset;
    $rt_throw(jnc_UnsupportedCharsetException__init_0($charsetName));
},
jnc_Charset_name = $this => {
    return $this.$canonicalName;
};
function jnci_UTF16Charset() {
    let a = this; jnc_Charset.call(a);
    a.$bom0 = 0;
    a.$littleEndian0 = 0;
}
let jnci_UTF16Charset__init_0 = ($this, $canonicalName, $bom, $littleEndian) => {
    jnc_Charset__init_($this, $canonicalName, $rt_createArray(jl_String, 0));
    $this.$bom0 = $bom;
    $this.$littleEndian0 = $littleEndian;
},
jnci_UTF16Charset__init_ = (var_0, var_1, var_2) => {
    let var_3 = new jnci_UTF16Charset();
    jnci_UTF16Charset__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
jnci_UTF16Charset_newDecoder = $this => {
    return jnci_UTF16Decoder__init_0($this, $this.$bom0, $this.$littleEndian0);
},
otciu_UnicodeHelper = $rt_classWithoutFields(),
otciu_UnicodeHelper_decodeIntPairsDiff = $text => {
    let $flow, $sz, $data, $j, $lastKey, $lastValue, $i, var$9, var$10;
    $flow = otci_CharFlow__init_0($text.$toCharArray());
    $sz = otci_Base46_decodeUnsigned($flow);
    $data = $rt_createIntArray($sz * 2 | 0);
    $j = 0;
    $lastKey = 0;
    $lastValue = 0;
    $i = 0;
    while ($i < $sz) {
        var$9 = $data.data;
        $lastKey = $lastKey + otci_Base46_decode($flow) | 0;
        $lastValue = $lastValue + otci_Base46_decode($flow) | 0;
        var$10 = $j + 1 | 0;
        var$9[$j] = $lastKey;
        $j = var$10 + 1 | 0;
        var$9[var$10] = $lastValue;
        $i = $i + 1 | 0;
    }
    return $data;
},
otciu_UnicodeHelper_decodeCaseMapping = $text => {
    let $flow, $sz, $data, $last, $i, var$7, var$8;
    $flow = otci_CharFlow__init_0($text.$toCharArray());
    $sz = otci_Base46_decodeUnsigned($flow);
    $data = $rt_createIntArray($sz * 2 | 0);
    $last = 0;
    $i = 0;
    while ($i < $sz) {
        var$7 = $data.data;
        $last = $last + otci_Base46_decodeUnsigned($flow) | 0;
        var$8 = $i * 2 | 0;
        var$7[var$8] = $last;
        var$7[var$8 + 1 | 0] = otci_Base46_decode($flow);
        $i = $i + 1 | 0;
    }
    return $data;
},
otciu_UnicodeHelper_createCharMapping = $data => {
    let $result, $last, $lastValue, $i, var$6, var$7, $key, $value, var$10;
    $result = $rt_createIntArray(65536);
    $last = 0;
    $lastValue = 0;
    $i = 0;
    a: {
        while (true) {
            var$6 = $data.data;
            if ($i >= var$6.length)
                break a;
            var$7 = $result.data;
            $key = var$6[$i];
            $value = var$6[$i + 1 | 0];
            var$10 = var$7.length;
            if ($key < var$10)
                var$10 = $key;
            else if ($key == $last)
                break;
            ju_Arrays_fill0($result, $last, var$10, $lastValue);
            $i = $i + 2 | 0;
            $last = var$10;
            $lastValue = $value;
        }
    }
    return otciu_CharMapping__init_0($data, $result);
},
otciu_UnicodeHelper_decodeByte = $c => {
    if ($c > 92)
        return (($c - 32 | 0) - 2 | 0) << 24 >> 24;
    if ($c <= 34)
        return ($c - 32 | 0) << 24 >> 24;
    return (($c - 32 | 0) - 1 | 0) << 24 >> 24;
},
otciu_UnicodeHelper_extractRle = $encoded => {
    let $ranges, $buffer, $index, $rangeIndex, $codePoint, $i, $b, $count, $pos, $j, $digit, var$13, var$14, var$15, var$16, var$17, var$18, $chunk;
    $ranges = $rt_createArray(otciu_UnicodeHelper$Range, 16384);
    $buffer = $rt_createByteArray(16384);
    $index = 0;
    $rangeIndex = 0;
    $codePoint = 0;
    $i = 0;
    while ($i < $encoded.$length()) {
        $b = otciu_UnicodeHelper_decodeByte($encoded.$charAt($i));
        if ($b == 64) {
            $i = $i + 1 | 0;
            $b = otciu_UnicodeHelper_decodeByte($encoded.$charAt($i));
            $count = 0;
            $pos = 1;
            $j = 0;
            while ($j < 3) {
                $i = $i + 1 | 0;
                $digit = otciu_UnicodeHelper_decodeByte($encoded.$charAt($i));
                $count = $count | $rt_imul($pos, $digit);
                $pos = $pos * 64 | 0;
                $j = $j + 1 | 0;
            }
        } else if ($b < 32)
            $count = 1;
        else {
            $b = ($b - 32 | 0) << 24 >> 24;
            $i = $i + 1 | 0;
            $count = otciu_UnicodeHelper_decodeByte($encoded.$charAt($i));
        }
        if (!$b && $count >= 128) {
            if ($index > 0) {
                var$13 = $ranges.data;
                var$14 = $rangeIndex + 1 | 0;
                var$13[$rangeIndex] = otciu_UnicodeHelper$Range__init_0($codePoint, $codePoint + $index | 0, ju_Arrays_copyOf($buffer, $index));
                $rangeIndex = var$14;
            }
            $codePoint = $codePoint + ($index + $count | 0) | 0;
            $index = 0;
        } else
            while ($count > 0) {
                var$14 = $buffer.data.length;
                if ($index != var$14)
                    var$15 = $index;
                else {
                    var$13 = $ranges.data;
                    var$16 = $rangeIndex + 1 | 0;
                    var$17 = new otciu_UnicodeHelper$Range;
                    var$18 = $codePoint + $index | 0;
                    otciu_UnicodeHelper$Range__init_(var$17, $codePoint, var$18, ju_Arrays_copyOf($buffer, $index));
                    var$13[$rangeIndex] = var$17;
                    var$15 = 0;
                    $rangeIndex = var$16;
                    $codePoint = var$18;
                }
                $chunk = jl_Math_min($count, var$14 - var$15 | 0);
                $index = var$15 + $chunk | 0;
                ju_Arrays_fill1($buffer, var$15, $index, $b);
                $count = $count - $chunk | 0;
            }
        $i = $i + 1 | 0;
    }
    if ($index <= 0)
        var$14 = $rangeIndex;
    else {
        var$13 = $ranges.data;
        var$14 = $rangeIndex + 1 | 0;
        var$13[$rangeIndex] = otciu_UnicodeHelper$Range__init_0($codePoint, $codePoint + $index | 0, ju_Arrays_copyOf($buffer, $index));
    }
    return ju_Arrays_copyOf0($ranges, var$14);
},
ju_Objects = $rt_classWithoutFields(),
ju_Objects_equals = ($a, $b) => {
    if ($a === $b)
        return 1;
    return $a !== null ? $a.$equals($b) : $b !== null ? 0 : 1;
},
ju_Objects_hashCode = $o => {
    return $o !== null ? $o.$hashCode() : 0;
},
ju_Objects_toString = $o => {
    return ju_Objects_toString0($o, $rt_s(49));
},
ju_Objects_toString0 = ($o, $nullDefault) => {
    if ($o !== null)
        $nullDefault = $o.$toString();
    return $nullDefault;
},
ju_Objects_requireNonNull0 = $obj => {
    return ju_Objects_requireNonNull($obj, $rt_s(54));
},
ju_Objects_requireNonNull = ($obj, $message) => {
    if ($obj !== null)
        return $obj;
    $rt_throw(jl_NullPointerException__init_($message));
},
ju_Objects_checkFromIndexSize = ($fromIndex, $size, $length) => {
    if ($fromIndex >= 0 && $size >= 0 && $size <= ($length - $fromIndex | 0))
        return $fromIndex;
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
otjc_JSUndefined = $rt_classWithoutFields(),
jur_AbstractCharClass$LazyAlnum = $rt_classWithoutFields(jur_AbstractCharClass$LazyAlpha),
jur_AbstractCharClass$LazyAlnum__init_ = $this => {
    jur_AbstractCharClass$LazyAlpha__init_($this);
},
jur_AbstractCharClass$LazyAlnum__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyAlnum();
    jur_AbstractCharClass$LazyAlnum__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyAlnum_computeValue = $this => {
    return (jur_AbstractCharClass$LazyAlpha_computeValue($this)).$add0(48, 57);
},
jur_AbstractCharClass$LazyGraph = $rt_classWithoutFields(jur_AbstractCharClass$LazyAlnum),
jur_AbstractCharClass$LazyGraph__init_ = $this => {
    jur_AbstractCharClass$LazyAlnum__init_($this);
},
jur_AbstractCharClass$LazyGraph__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyGraph();
    jur_AbstractCharClass$LazyGraph__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyGraph_computeValue = $this => {
    return (((jur_AbstractCharClass$LazyAlnum_computeValue($this)).$add0(33, 64)).$add0(91, 96)).$add0(123, 126);
},
jur_AbstractCharClass$LazyPrint = $rt_classWithoutFields(jur_AbstractCharClass$LazyGraph),
jur_AbstractCharClass$LazyPrint__init_ = $this => {
    jur_AbstractCharClass$LazyGraph__init_($this);
},
jur_AbstractCharClass$LazyPrint__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyPrint();
    jur_AbstractCharClass$LazyPrint__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyPrint_computeValue = $this => {
    return (jur_AbstractCharClass$LazyGraph_computeValue($this)).$add(32);
},
jur_AbstractCharClass$LazyJavaSpaceChar = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaSpaceChar__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaSpaceChar__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaSpaceChar();
    jur_AbstractCharClass$LazyJavaSpaceChar__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaSpaceChar_computeValue = $this => {
    return jur_AbstractCharClass$LazyJavaSpaceChar$1__init_0($this);
},
jur_PositiveLookBehind = $rt_classWithoutFields(jur_AtomicJointSet),
jur_PositiveLookBehind__init_ = ($this, $children, $fSet) => {
    jur_AtomicJointSet__init_($this, $children, $fSet);
},
jur_PositiveLookBehind__init_0 = (var_0, var_1) => {
    let var_2 = new jur_PositiveLookBehind();
    jur_PositiveLookBehind__init_(var_2, var_0, var_1);
    return var_2;
},
jur_PositiveLookBehind_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $size, $leftBound, $shift, $i, $e;
    $size = $this.$children.$size();
    $leftBound = !$matchResult.$hasTransparentBounds() ? $matchResult.$getLeftBound() : 0;
    a: {
        $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0) {
            $matchResult.$setConsumed($this.$groupIndex, $stringIndex);
            $i = 0;
            while (true) {
                if ($i >= $size)
                    break a;
                $e = $this.$children.$get($i);
                if ($e.$findBack($leftBound, $stringIndex, $testString, $matchResult) >= 0) {
                    $matchResult.$setConsumed($this.$groupIndex, (-1));
                    return $shift;
                }
                $i = $i + 1 | 0;
            }
        }
    }
    return (-1);
},
jur_PositiveLookBehind_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_PositiveLookBehind_getName = $this => {
    return $rt_s(257);
};
function jur_SequenceSet() {
    let a = this; jur_LeafSet.call(a);
    a.$string = null;
    a.$leftToRight = null;
    a.$rightToLeft = null;
}
let jur_SequenceSet__init_ = ($this, $substring) => {
    let $j;
    jur_LeafSet__init_($this);
    $this.$string = $substring.$toString();
    $this.$charCount0 = $substring.$length();
    $this.$leftToRight = jur_SequenceSet$IntHash__init_($this.$charCount0);
    $this.$rightToLeft = jur_SequenceSet$IntHash__init_($this.$charCount0);
    $j = 0;
    while ($j < ($this.$charCount0 - 1 | 0)) {
        $this.$leftToRight.$put3($this.$string.$charAt($j), ($this.$charCount0 - $j | 0) - 1 | 0);
        $this.$rightToLeft.$put3($this.$string.$charAt(($this.$charCount0 - $j | 0) - 1 | 0), ($this.$charCount0 - $j | 0) - 1 | 0);
        $j = $j + 1 | 0;
    }
},
jur_SequenceSet__init_0 = var_0 => {
    let var_1 = new jur_SequenceSet();
    jur_SequenceSet__init_(var_1, var_0);
    return var_1;
},
jur_SequenceSet_accepts = ($this, $strIndex, $testString) => {
    return !$this.$startsWith($testString, $strIndex) ? (-1) : $this.$charCount0;
},
jur_SequenceSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $strLength, var$5;
    $strLength = $matchResult.$getRightBound();
    while (true) {
        if ($strIndex > $strLength)
            return (-1);
        var$5 = $this.$indexOf($testString, $strIndex, $strLength);
        if (var$5 < 0)
            return (-1);
        if ($this.$next1.$matches(var$5 + $this.$charCount0 | 0, $testString, $matchResult) >= 0)
            break;
        $strIndex = var$5 + 1 | 0;
    }
    return var$5;
},
jur_SequenceSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let var$5;
    while (true) {
        if ($lastIndex < $strIndex)
            return (-1);
        var$5 = $this.$lastIndexOf($testString, $strIndex, $lastIndex);
        if (var$5 < 0)
            return (-1);
        if ($this.$next1.$matches(var$5 + $this.$charCount0 | 0, $testString, $matchResult) >= 0)
            break;
        $lastIndex = var$5 + (-1) | 0;
    }
    return var$5;
},
jur_SequenceSet_getName = $this => {
    let var$1, var$2;
    var$1 = $this.$string;
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(258)), var$1);
    return jl_StringBuilder_toString(var$2);
},
jur_SequenceSet_first = ($this, $set) => {
    let var$2, var$3, var$4, var$5, var$6;
    if ($set instanceof jur_CharSet)
        return $set.$getChar0() != $this.$string.$charAt(0) ? 0 : 1;
    if ($set instanceof jur_RangeSet)
        return $set.$accepts(0, $this.$string.$substring(0, 1)) <= 0 ? 0 : 1;
    if (!($set instanceof jur_SupplRangeSet)) {
        if (!($set instanceof jur_SupplCharSet))
            return 1;
        a: {
            if ($this.$string.$length() > 1) {
                var$2 = $set;
                var$3 = var$2.$getCodePoint();
                var$4 = $this.$string.$charAt(0);
                var$2 = $this.$string;
                var$5 = var$2.$charAt(1);
                if (var$3 == jl_Character_toCodePoint(var$4, var$5)) {
                    var$4 = 1;
                    break a;
                }
            }
            var$4 = 0;
        }
        return var$4;
    }
    b: {
        c: {
            var$2 = $set;
            if (!var$2.$contains($this.$string.$charAt(0))) {
                var$6 = $this.$string;
                if (var$6.$length() <= 1)
                    break c;
                var$6 = $this.$string;
                var$4 = jl_Character_toCodePoint(var$6.$charAt(0), $this.$string.$charAt(1));
                if (!var$2.$contains(var$4))
                    break c;
            }
            var$4 = 1;
            break b;
        }
        var$4 = 0;
    }
    return var$4;
},
jur_SequenceSet_indexOf = ($this, $str, $i, $to) => {
    let $last, $ch;
    $last = $this.$string.$charAt($this.$charCount0 - 1 | 0);
    while (true) {
        if ($i > ($to - $this.$charCount0 | 0))
            return (-1);
        $ch = $str.$charAt(($i + $this.$charCount0 | 0) - 1 | 0);
        if ($ch == $last && $this.$startsWith($str, $i))
            break;
        $i = $i + $this.$leftToRight.$get2($ch) | 0;
    }
    return $i;
},
jur_SequenceSet_lastIndexOf = ($this, $str, $to, $i) => {
    let $first, $size, $delta, $ch;
    $first = $this.$string.$charAt(0);
    $size = $str.$length();
    $delta = ($size - $i | 0) - $this.$charCount0 | 0;
    if ($delta <= 0)
        $i = $i + $delta | 0;
    while (true) {
        if ($i < $to)
            return (-1);
        $ch = $str.$charAt($i);
        if ($ch == $first && $this.$startsWith($str, $i))
            break;
        $i = $i - $this.$rightToLeft.$get2($ch) | 0;
    }
    return $i;
},
jur_SequenceSet_startsWith = ($this, $str, $from) => {
    let $i;
    $i = 0;
    while ($i < $this.$charCount0) {
        if ($str.$charAt($i + $from | 0) != $this.$string.$charAt($i))
            return 0;
        $i = $i + 1 | 0;
    }
    return 1;
},
jnci_AsciiCharset = $rt_classWithoutFields(jnc_Charset),
jnci_AsciiCharset__init_ = $this => {
    jnc_Charset__init_($this, $rt_s(259), $rt_createArray(jl_String, 0));
},
jnci_AsciiCharset__init_0 = () => {
    let var_0 = new jnci_AsciiCharset();
    jnci_AsciiCharset__init_(var_0);
    return var_0;
},
jnci_AsciiCharset_newDecoder = $this => {
    return jnci_AsciiDecoder__init_0($this);
},
va_ViewForController = $rt_classWithoutFields(0),
jl_ArrayStoreException = $rt_classWithoutFields(jl_RuntimeException),
jl_ArrayStoreException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
jl_ArrayStoreException__init_ = () => {
    let var_0 = new jl_ArrayStoreException();
    jl_ArrayStoreException__init_0(var_0);
    return var_0;
},
ju_SequencedCollection = $rt_classWithoutFields(0),
jur_AltGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet),
jur_AltGroupQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_GroupQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_AltGroupQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_AltGroupQuantifierSet();
    jur_AltGroupQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_AltGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex;
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex >= 0)
        return $nextIndex;
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_AltGroupQuantifierSet_setNext = ($this, $next) => {
    jur_AbstractSet_setNext($this, $next);
    $this.$innerSet.$setNext($next);
},
jur_MatchResult = $rt_classWithoutFields(0);
function jur_MatchResultImpl() {
    let a = this; jl_Object.call(a);
    a.$groupBounds = null;
    a.$consumers = null;
    a.$compQuantCounters = null;
    a.$string3 = null;
    a.$groupCount0 = 0;
    a.$valid = 0;
    a.$leftBound0 = 0;
    a.$rightBound0 = 0;
    a.$startIndex = 0;
    a.$transparentBounds = 0;
    a.$anchoringBounds = 0;
    a.$hitEnd = 0;
    a.$requireEnd = 0;
    a.$previousMatch = 0;
    a.$mode1 = 0;
    a.$namedGroups1 = null;
}
let jur_MatchResultImpl__init_ = ($this, $string, $leftBound, $rightBound, $groupCount, $compQuantCount, $consumersCount, $namedGroups) => {
    let var$8;
    jl_Object__init_($this);
    $this.$previousMatch = (-1);
    var$8 = $groupCount + 1 | 0;
    $this.$groupCount0 = var$8;
    $this.$groupBounds = $rt_createIntArray(var$8 * 2 | 0);
    $this.$namedGroups1 = $namedGroups;
    $this.$consumers = $rt_createIntArray($consumersCount);
    ju_Arrays_fill($this.$consumers, (-1));
    if ($compQuantCount > 0)
        $this.$compQuantCounters = $rt_createIntArray($compQuantCount);
    ju_Arrays_fill($this.$groupBounds, (-1));
    $this.$reset($string, $leftBound, $rightBound);
},
jur_MatchResultImpl__init_0 = (var_0, var_1, var_2, var_3, var_4, var_5, var_6) => {
    let var_7 = new jur_MatchResultImpl();
    jur_MatchResultImpl__init_(var_7, var_0, var_1, var_2, var_3, var_4, var_5, var_6);
    return var_7;
},
jur_MatchResultImpl_setConsumed = ($this, $counter, $value) => {
    $this.$consumers.data[$counter] = $value;
},
jur_MatchResultImpl_getConsumed = ($this, $counter) => {
    return $this.$consumers.data[$counter];
},
jur_MatchResultImpl_end = $this => {
    return $this.$end(0);
},
jur_MatchResultImpl_end0 = ($this, $group) => {
    jur_MatchResultImpl_checkGroup($this, $group);
    return $this.$groupBounds.data[($group * 2 | 0) + 1 | 0];
},
jur_MatchResultImpl_setStart = ($this, $group, $offset) => {
    $this.$groupBounds.data[$group * 2 | 0] = $offset;
},
jur_MatchResultImpl_setEnd = ($this, $group, $offset) => {
    $this.$groupBounds.data[($group * 2 | 0) + 1 | 0] = $offset;
},
jur_MatchResultImpl_getStart = ($this, $group) => {
    return $this.$groupBounds.data[$group * 2 | 0];
},
jur_MatchResultImpl_getEnd = ($this, $group) => {
    return $this.$groupBounds.data[($group * 2 | 0) + 1 | 0];
},
jur_MatchResultImpl_group = ($this, $group) => {
    if ($this.$start($group) < 0)
        return null;
    return ($this.$string3.$subSequence($this.$start($group), $this.$end($group))).$toString();
},
jur_MatchResultImpl_getGroupNoCheck = ($this, $group) => {
    let $st, $end;
    $st = $this.$getStart($group);
    $end = $this.$getEnd($group);
    if (($end | $st | ($end - $st | 0)) >= 0 && $end <= $this.$string3.$length())
        return ($this.$string3.$subSequence($st, $end)).$toString();
    return null;
},
jur_MatchResultImpl_start = $this => {
    return $this.$start(0);
},
jur_MatchResultImpl_start0 = ($this, $group) => {
    jur_MatchResultImpl_checkGroup($this, $group);
    return $this.$groupBounds.data[$group * 2 | 0];
},
jur_MatchResultImpl_finalizeMatch = $this => {
    if ($this.$groupBounds.data[0] == (-1)) {
        $this.$groupBounds.data[0] = $this.$startIndex;
        $this.$groupBounds.data[1] = $this.$startIndex;
    }
    $this.$previousMatch = $this.$end0();
},
jur_MatchResultImpl_getEnterCounter = ($this, $setCounter) => {
    return $this.$compQuantCounters.data[$setCounter];
},
jur_MatchResultImpl_setEnterCounter = ($this, $setCounter, $value) => {
    $this.$compQuantCounters.data[$setCounter] = $value;
},
jur_MatchResultImpl_checkGroup = ($this, $group) => {
    if (!$this.$valid)
        $rt_throw(jl_IllegalStateException__init_());
    if ($group >= 0 && $group < $this.$groupCount0)
        return;
    $rt_throw(jl_IndexOutOfBoundsException__init_1(jl_String_valueOf0($group)));
},
jur_MatchResultImpl_setValid = $this => {
    $this.$valid = 1;
},
jur_MatchResultImpl_isValid = $this => {
    return $this.$valid;
},
jur_MatchResultImpl_reset0 = ($this, $newSequence, $leftBound, $rightBound) => {
    $this.$valid = 0;
    $this.$mode1 = 2;
    ju_Arrays_fill($this.$groupBounds, (-1));
    ju_Arrays_fill($this.$consumers, (-1));
    if ($newSequence !== null)
        $this.$string3 = $newSequence;
    if ($leftBound >= 0)
        jur_MatchResultImpl_setBounds($this, $leftBound, $rightBound);
    $this.$startIndex = $this.$leftBound0;
},
jur_MatchResultImpl_reset = $this => {
    $this.$reset(null, (-1), (-1));
},
jur_MatchResultImpl_setBounds = ($this, $leftBound, $rightBound) => {
    $this.$leftBound0 = $leftBound;
    $this.$rightBound0 = $rightBound;
},
jur_MatchResultImpl_setStartIndex = ($this, $startIndex) => {
    $this.$startIndex = $startIndex;
    if ($this.$previousMatch >= 0)
        $startIndex = $this.$previousMatch;
    $this.$previousMatch = $startIndex;
},
jur_MatchResultImpl_getLeftBound = $this => {
    return $this.$leftBound0;
},
jur_MatchResultImpl_getRightBound = $this => {
    return $this.$rightBound0;
},
jur_MatchResultImpl_setMode = ($this, $mode) => {
    $this.$mode1 = $mode;
},
jur_MatchResultImpl_mode = $this => {
    return $this.$mode1;
},
jur_MatchResultImpl_useAnchoringBounds = ($this, $value) => {
    $this.$anchoringBounds = $value;
},
jur_MatchResultImpl_hasAnchoringBounds = $this => {
    return $this.$anchoringBounds;
},
jur_MatchResultImpl_hasTransparentBounds = $this => {
    return $this.$transparentBounds;
},
jur_MatchResultImpl_getPreviousMatchEnd = $this => {
    return $this.$previousMatch;
};
function jur_UCIRangeSet() {
    let a = this; jur_LeafSet.call(a);
    a.$chars1 = null;
    a.$alt3 = 0;
}
let jur_UCIRangeSet__init_ = ($this, $cc) => {
    jur_LeafSet__init_($this);
    $this.$chars1 = $cc.$getInstance();
    $this.$alt3 = $cc.$alt;
},
jur_UCIRangeSet__init_0 = var_0 => {
    let var_1 = new jur_UCIRangeSet();
    jur_UCIRangeSet__init_(var_1, var_0);
    return var_1;
},
jur_UCIRangeSet_accepts = ($this, $strIndex, $testString) => {
    let var$3, var$4;
    var$3 = $this.$chars1;
    var$4 = jl_Character_toUpperCase($testString.$charAt($strIndex));
    return !var$3.$contains(jl_Character_toLowerCase(var$4)) ? (-1) : 1;
},
jur_UCIRangeSet_getName = $this => {
    let var$1, var$2, var$3;
    var$1 = !$this.$alt3 ? $rt_s(45) : $rt_s(46);
    var$2 = $this.$chars1.$toString();
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(260)), var$1), var$2);
    return jl_StringBuilder_toString(var$3);
};
function jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$09 = null;
}
let jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1__init_ = ($this, $this$0) => {
    $this.$this$09 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1();
    jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1_contains = ($this, $ch) => {
    return jl_Character_isJavaIdentifierPart($ch);
},
ji_OutputStream = $rt_classWithoutFields(),
ji_OutputStream__init_ = $this => {
    jl_Object__init_($this);
};
function ji_FilterOutputStream() {
    ji_OutputStream.call(this);
    this.$out0 = null;
}
let ji_FilterOutputStream__init_ = ($this, $out) => {
    ji_OutputStream__init_($this);
    $this.$out0 = $out;
},
ji_FilterOutputStream__init_0 = var_0 => {
    let var_1 = new ji_FilterOutputStream();
    ji_FilterOutputStream__init_(var_1, var_0);
    return var_1;
};
function ji_PrintStream() {
    let a = this; ji_FilterOutputStream.call(a);
    a.$autoFlush = 0;
    a.$sb = null;
    a.$buffer1 = null;
    a.$charset = null;
}
let ji_PrintStream__init_ = ($this, $out, $autoFlush, $charset) => {
    ji_FilterOutputStream__init_($this, $out);
    $this.$sb = jl_StringBuilder__init_();
    $this.$buffer1 = $rt_createCharArray(32);
    $this.$autoFlush = $autoFlush;
    $this.$charset = $charset;
},
ji_PrintStream__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new ji_PrintStream();
    ji_PrintStream__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
otcic_JsConsolePrintStream = $rt_classWithoutFields(ji_PrintStream),
otcic_JsConsolePrintStream__init_ = $this => {
    ji_PrintStream__init_($this, null, 0, null);
},
otcic_JsConsolePrintStream_println1 = ($this, $s) => {
    $this.$print($s);
    $this.$print($rt_s(261));
},
otcic_JsConsolePrintStream_println0 = $this => {
    $this.$print($rt_s(261));
},
otcic_JsConsolePrintStream_println = ($this, $s) => {
    $this.$println1(ju_Objects_toString($s));
},
otp_Platform = $rt_classWithoutFields(),
otp_Platform_clone = var$1 => {
    let copy = new var$1.constructor();
    for (let field in var$1) {
        if (var$1.hasOwnProperty(field)) {
            copy[field] = var$1[field];
        }
    }
    return copy;
};
function jnc_CodingErrorAction() {
    jl_Object.call(this);
    this.$name3 = null;
}
let jnc_CodingErrorAction_IGNORE = null,
jnc_CodingErrorAction_REPLACE = null,
jnc_CodingErrorAction_REPORT = null,
jnc_CodingErrorAction_$callClinit = () => {
    jnc_CodingErrorAction_$callClinit = $rt_eraseClinit(jnc_CodingErrorAction);
    jnc_CodingErrorAction__clinit_();
},
jnc_CodingErrorAction__init_0 = ($this, var$1) => {
    jnc_CodingErrorAction_$callClinit();
    jl_Object__init_($this);
    $this.$name3 = var$1;
},
jnc_CodingErrorAction__init_ = var_0 => {
    let var_1 = new jnc_CodingErrorAction();
    jnc_CodingErrorAction__init_0(var_1, var_0);
    return var_1;
},
jnc_CodingErrorAction__clinit_ = () => {
    jnc_CodingErrorAction_IGNORE = jnc_CodingErrorAction__init_($rt_s(262));
    jnc_CodingErrorAction_REPLACE = jnc_CodingErrorAction__init_($rt_s(263));
    jnc_CodingErrorAction_REPORT = jnc_CodingErrorAction__init_($rt_s(264));
};
function jl_Boolean() {
    jl_Object.call(this);
    this.$value1 = 0;
}
let jl_Boolean_TRUE = null,
jl_Boolean_FALSE = null,
jl_Boolean_TYPE = null,
jl_Boolean_$callClinit = () => {
    jl_Boolean_$callClinit = $rt_eraseClinit(jl_Boolean);
    jl_Boolean__clinit_();
},
jl_Boolean__init_0 = ($this, $value) => {
    jl_Boolean_$callClinit();
    jl_Object__init_($this);
    $this.$value1 = $value;
},
jl_Boolean__init_ = var_0 => {
    let var_1 = new jl_Boolean();
    jl_Boolean__init_0(var_1, var_0);
    return var_1;
},
jl_Boolean_booleanValue = $this => {
    return $this.$value1;
},
jl_Boolean_valueOf = $value => {
    jl_Boolean_$callClinit();
    return !$value ? jl_Boolean_FALSE : jl_Boolean_TRUE;
},
jl_Boolean__clinit_ = () => {
    jl_Boolean_TRUE = jl_Boolean__init_(1);
    jl_Boolean_FALSE = jl_Boolean__init_(0);
    jl_Boolean_TYPE = $rt_cls($rt_booleancls);
},
jl_IllegalArgumentException = $rt_classWithoutFields(jl_RuntimeException),
jl_IllegalArgumentException__init_2 = $this => {
    jl_RuntimeException__init_($this);
},
jl_IllegalArgumentException__init_ = () => {
    let var_0 = new jl_IllegalArgumentException();
    jl_IllegalArgumentException__init_2(var_0);
    return var_0;
},
jl_IllegalArgumentException__init_1 = ($this, $message) => {
    jl_RuntimeException__init_0($this, $message);
},
jl_IllegalArgumentException__init_0 = var_0 => {
    let var_1 = new jl_IllegalArgumentException();
    jl_IllegalArgumentException__init_1(var_1, var_0);
    return var_1;
};
function jnc_IllegalCharsetNameException() {
    jl_IllegalArgumentException.call(this);
    this.$charsetName = null;
}
let jnc_IllegalCharsetNameException__init_0 = ($this, $charsetName) => {
    jl_IllegalArgumentException__init_2($this);
    $this.$charsetName = $charsetName;
},
jnc_IllegalCharsetNameException__init_ = var_0 => {
    let var_1 = new jnc_IllegalCharsetNameException();
    jnc_IllegalCharsetNameException__init_0(var_1, var_0);
    return var_1;
};
function me_Entity() {
    let a = this; jl_Object.call(a);
    a.$bounds = null;
    a.$entityName = null;
    a.$x1 = 0;
    a.$y1 = 0;
    a.$dx0 = 0;
    a.$dy0 = 0;
    a.$width0 = 0;
    a.$height0 = 0;
    a.$speed = 0;
    a.$isToRemove0 = 0;
    a.$direction0 = null;
    a.$animationFrame0 = 0;
}
let me_Entity__init_ = ($this, $x, $y, $width, $height, $speed, $bounds, $direction) => {
    jl_Object__init_($this);
    $this.$x1 = $x;
    $this.$y1 = $y;
    $this.$dx0 = 0;
    $this.$dy0 = 0;
    $this.$width0 = $width;
    $this.$height0 = $height;
    $this.$speed = $speed;
    $this.$bounds = $bounds;
    $this.$direction0 = $direction;
    $this.$isToRemove0 = 0;
    $this.$animationFrame0 = 1;
},
me_Entity_getEntityName = $this => {
    return $this.$entityName;
},
me_Entity_getX = $this => {
    return $this.$x1;
},
me_Entity_getY = $this => {
    return $this.$y1;
},
me_Entity_getCenterX = $this => {
    return jl_Math_ceil($this.$x1 + ($this.$width0 / 2 | 0)) | 0;
},
me_Entity_getCenterY = $this => {
    return jl_Math_ceil($this.$y1 + ($this.$height0 / 2 | 0)) | 0;
},
me_Entity_getWidth = $this => {
    return $this.$width0;
},
me_Entity_getHeight = $this => {
    return $this.$height0;
},
me_Entity_getDirection = $this => {
    return $this.$direction0;
},
me_Entity_isToRemove = $this => {
    return $this.$isToRemove0;
},
me_Entity_getAnimationFrame = $this => {
    return $this.$animationFrame0;
},
me_AlienShot = $rt_classWithoutFields(me_Entity),
ju_NoSuchElementException = $rt_classWithoutFields(jl_RuntimeException),
ju_NoSuchElementException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
ju_NoSuchElementException__init_ = () => {
    let var_0 = new ju_NoSuchElementException();
    ju_NoSuchElementException__init_0(var_0);
    return var_0;
},
jlr_AnnotatedElement = $rt_classWithoutFields(0),
jlr_GenericDeclaration = $rt_classWithoutFields(0),
jur_NegativeLookBehind = $rt_classWithoutFields(jur_AtomicJointSet),
jur_NegativeLookBehind__init_ = ($this, $children, $fSet) => {
    jur_AtomicJointSet__init_($this, $children, $fSet);
},
jur_NegativeLookBehind__init_0 = (var_0, var_1) => {
    let var_2 = new jur_NegativeLookBehind();
    jur_NegativeLookBehind__init_(var_2, var_0, var_1);
    return var_2;
},
jur_NegativeLookBehind_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $size, $i, $e, $shift;
    $size = $this.$children.$size();
    $matchResult.$setConsumed($this.$groupIndex, $stringIndex);
    $i = 0;
    while (true) {
        if ($i >= $size)
            return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        $e = $this.$children.$get($i);
        $shift = $e.$findBack(0, $stringIndex, $testString, $matchResult);
        if ($shift >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_NegativeLookBehind_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_NegativeLookBehind_getName = $this => {
    return $rt_s(265);
},
jur_BackReferenceSet = $rt_classWithoutFields(jur_CIBackReferenceSet),
jur_BackReferenceSet__init_ = ($this, $groupIndex, $consCounter) => {
    jur_CIBackReferenceSet__init_($this, $groupIndex, $consCounter);
},
jur_BackReferenceSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_BackReferenceSet();
    jur_BackReferenceSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_BackReferenceSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $group, $shift;
    $group = $this.$getString($matchResult);
    if ($group !== null && ($stringIndex + $group.$length() | 0) <= $matchResult.$getRightBound()) {
        $shift = !($testString.$toString()).$startsWith0($group, $stringIndex) ? (-1) : $group.$length();
        if ($shift < 0)
            return (-1);
        $matchResult.$setConsumed($this.$consCounter1, $shift);
        return $this.$next1.$matches($stringIndex + $shift | 0, $testString, $matchResult);
    }
    return (-1);
},
jur_BackReferenceSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $group, $strLength, $testStr, var$7;
    $group = $this.$getString($matchResult);
    $strLength = $matchResult.$getLeftBound();
    if ($group !== null && ($strIndex + $group.$length() | 0) <= $strLength) {
        $testStr = $testString.$toString();
        while (true) {
            if ($strIndex > $strLength)
                return (-1);
            var$7 = $testStr.$indexOf0($group, $strIndex);
            if (var$7 < 0)
                return (-1);
            if ($this.$next1.$matches(var$7 + $group.$length() | 0, $testString, $matchResult) >= 0)
                break;
            $strIndex = var$7 + 1 | 0;
        }
        return var$7;
    }
    return (-1);
},
jur_BackReferenceSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $group, $testStr, var$7;
    $group = $this.$getString($matchResult);
    if ($group === null)
        return (-1);
    $testStr = $testString.$toString();
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            var$7 = $testStr.$lastIndexOf0($group, $lastIndex);
            if (var$7 < 0)
                break a;
            if (var$7 < $strIndex)
                break a;
            if ($this.$next1.$matches(var$7 + $group.$length() | 0, $testString, $matchResult) >= 0)
                break;
            $lastIndex = var$7 + (-1) | 0;
        }
        return var$7;
    }
    return (-1);
},
jur_BackReferenceSet_first = ($this, $set) => {
    return 1;
},
jur_BackReferenceSet_getName = $this => {
    let var$1, var$2;
    var$1 = $this.$groupIndex;
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append1(jl_StringBuilder_append(var$2, $rt_s(266)), var$1);
    return jl_StringBuilder_toString(var$2);
};
function jur_DotQuantifierSet() {
    jur_QuantifierSet.call(this);
    this.$lt = null;
}
let jur_DotQuantifierSet__init_ = ($this, $innerSet, $next, $type, $lt) => {
    jur_QuantifierSet__init_($this, $innerSet, $next, $type);
    $this.$lt = $lt;
},
jur_DotQuantifierSet__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_DotQuantifierSet();
    jur_DotQuantifierSet__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_DotQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, $startSearch;
    $strLength = $matchResult.$getRightBound();
    $startSearch = jur_DotQuantifierSet_findLineTerminator($this, $stringIndex, $strLength, $testString);
    if ($startSearch >= 0)
        $strLength = $startSearch;
    if ($strLength > $stringIndex)
        return $this.$next1.$findBack($stringIndex, $strLength, $testString, $matchResult);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_DotQuantifierSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, $res, $nextSearch, var$7, $leftBound;
    $strLength = $matchResult.$getRightBound();
    $res = $this.$next1.$find($stringIndex, $testString, $matchResult);
    if ($res < 0)
        return (-1);
    $nextSearch = jur_DotQuantifierSet_findLineTerminator($this, $res, $strLength, $testString);
    if ($nextSearch >= 0)
        $strLength = $nextSearch;
    var$7 = $this.$next1.$findBack($res, $strLength, $testString, $matchResult);
    var$7 = jl_Math_max($res, var$7);
    $leftBound = var$7 > 0 ? jur_DotQuantifierSet_findBackLineTerminator($this, $stringIndex, var$7 - 1 | 0, $testString) : var$7 ? (-1) : 0;
    if ($leftBound >= $stringIndex)
        $stringIndex = $leftBound >= var$7 ? $leftBound : $leftBound + 1 | 0;
    return $stringIndex;
},
jur_DotQuantifierSet_findLineTerminator = ($this, $i, $to, $testString) => {
    while (true) {
        if ($i >= $to)
            return (-1);
        if ($this.$lt.$isLineTerminator($testString.$charAt($i)))
            break;
        $i = $i + 1 | 0;
    }
    return $i;
},
jur_DotQuantifierSet_findBackLineTerminator = ($this, $from, $i, $testString) => {
    while (true) {
        if ($i < $from)
            return (-1);
        if ($this.$lt.$isLineTerminator($testString.$charAt($i)))
            break;
        $i = $i + (-1) | 0;
    }
    return $i;
},
jur_DotQuantifierSet_getName = $this => {
    return $rt_s(267);
},
jur_AbstractCharClass$LazyJavaJavaIdentifierPart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaJavaIdentifierPart();
    jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierPart_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
},
otcit_FloatAnalyzer = $rt_classWithoutFields(),
otcit_FloatAnalyzer_MAX_MANTISSA = 0,
otcit_FloatAnalyzer_mantissa10Table = null,
otcit_FloatAnalyzer_exp10Table = null,
otcit_FloatAnalyzer_$callClinit = () => {
    otcit_FloatAnalyzer_$callClinit = $rt_eraseClinit(otcit_FloatAnalyzer);
    otcit_FloatAnalyzer__clinit_();
},
otcit_FloatAnalyzer_analyze = ($d, $result) => {
    let $bits, $mantissa, $exponent, var$6, $decExponent, var$8, var$9, $binExponentCorrection, $mantissaShift, $decMantissa, var$13, var$14, var$15, $decMantissaHi, $decMantissaLow, $lowerPos, $upperPos, $posCmp;
    otcit_FloatAnalyzer_$callClinit();
    $bits = jl_Float_floatToIntBits($d);
    $result.$sign1 = !($bits & (-2147483648)) ? 0 : 1;
    $mantissa = $bits & 8388607;
    $exponent = $bits >> 23 & 255;
    if (!$mantissa && !$exponent) {
        $result.$mantissa0 = 0;
        $result.$exponent0 = 0;
        return;
    }
    if ($exponent)
        var$6 = $mantissa | 8388608;
    else {
        var$6 = $mantissa << 1;
        while (Long_eq(Long_and(Long_fromInt(var$6), Long_fromInt(8388608)), Long_ZERO)) {
            var$6 = var$6 << 1;
            $exponent = $exponent + (-1) | 0;
        }
    }
    $decExponent = ju_Arrays_binarySearch(otcit_FloatAnalyzer_exp10Table, $exponent);
    if ($decExponent < 0)
        $decExponent =  -$decExponent | 0;
    var$8 = otcit_FloatAnalyzer_exp10Table.data;
    var$9 = $decExponent + 1 | 0;
    $binExponentCorrection = $exponent - var$8[var$9] | 0;
    $mantissaShift = 9 + $binExponentCorrection | 0;
    $decMantissa = otcit_FloatAnalyzer_mulAndShiftRight(var$6, otcit_FloatAnalyzer_mantissa10Table.data[var$9], $mantissaShift);
    if ($decMantissa < otcit_FloatAnalyzer_MAX_MANTISSA) {
        while ($rt_ucmp($decMantissa, otcit_FloatAnalyzer_MAX_MANTISSA) <= 0) {
            $decExponent = $decExponent + (-1) | 0;
            $decMantissa = ($decMantissa * 10 | 0) + 9 | 0;
        }
        var$8 = otcit_FloatAnalyzer_exp10Table.data;
        var$9 = $decExponent + 1 | 0;
        var$13 = $exponent - var$8[var$9] | 0;
        $mantissaShift = 9 + var$13 | 0;
        $decMantissa = otcit_FloatAnalyzer_mulAndShiftRight(var$6, otcit_FloatAnalyzer_mantissa10Table.data[var$9], $mantissaShift);
    }
    var$9 = var$6 << 1;
    var$6 = var$9 + 1 | 0;
    var$8 = otcit_FloatAnalyzer_mantissa10Table.data;
    var$13 = $decExponent + 1 | 0;
    var$14 = var$8[var$13];
    var$15 = $mantissaShift - 1 | 0;
    $decMantissaHi = otcit_FloatAnalyzer_mulAndShiftRight(var$6, var$14, var$15);
    $decMantissaLow = otcit_FloatAnalyzer_mulAndShiftRight(var$9 - 1 | 0, otcit_FloatAnalyzer_mantissa10Table.data[var$13], var$15);
    $lowerPos = otcit_FloatAnalyzer_findLowerDistance($decMantissa, $decMantissaLow);
    $upperPos = otcit_FloatAnalyzer_findUpperDistance($decMantissa, $decMantissaHi);
    $posCmp = $rt_ucmp($lowerPos, $upperPos);
    var$9 = $posCmp > 0 ? $rt_imul($rt_udiv($decMantissa, $lowerPos), $lowerPos) : $posCmp < 0 ? $rt_imul($rt_udiv($decMantissa, $upperPos), $upperPos) + $upperPos | 0 : $rt_imul($rt_udiv(($decMantissa + ($upperPos / 2 | 0) | 0), $upperPos), $upperPos);
    if (jl_Long_compareUnsigned(Long_fromInt(var$9), Long_fromInt(1000000000)) >= 0)
        while (true) {
            $decExponent = $decExponent + 1 | 0;
            var$9 = $rt_udiv(var$9, 10);
            if ($rt_ucmp(var$9, 1000000000) < 0)
                break;
        }
    else if ($rt_ucmp(var$9, 100000000) < 0) {
        $decExponent = $decExponent + (-1) | 0;
        var$9 = var$9 * 10 | 0;
    }
    $result.$mantissa0 = var$9;
    $result.$exponent0 = $decExponent - 50 | 0;
},
otcit_FloatAnalyzer_findLowerDistance = ($mantissa, $lower) => {
    let $pos, $pos_0, var$5, var$6;
    otcit_FloatAnalyzer_$callClinit();
    $pos = 1;
    while (true) {
        $pos_0 = $pos * 10 | 0;
        var$5 = $rt_udiv($mantissa, $pos_0);
        var$6 = $rt_udiv($lower, $pos_0);
        if ($rt_ucmp(var$5, var$6) <= 0)
            break;
        $pos = $pos_0;
    }
    return $pos;
},
otcit_FloatAnalyzer_findUpperDistance = ($mantissa, $upper) => {
    let $pos, $pos_0, var$5, var$6;
    otcit_FloatAnalyzer_$callClinit();
    $pos = 1;
    while (true) {
        $pos_0 = $pos * 10 | 0;
        var$5 = $rt_udiv($mantissa, $pos_0);
        var$6 = $rt_udiv($upper, $pos_0);
        if ($rt_ucmp(var$5, var$6) >= 0)
            break;
        $pos = $pos_0;
    }
    return $pos;
},
otcit_FloatAnalyzer_mulAndShiftRight = ($a, $b, $shift) => {
    let $result;
    otcit_FloatAnalyzer_$callClinit();
    $result = Long_mul(Long_and(Long_fromInt($a), Long_create(4294967295, 0)), Long_and(Long_fromInt($b), Long_create(4294967295, 0)));
    return Long_lo(Long_shru($result, 32 - $shift | 0));
},
otcit_FloatAnalyzer__clinit_ = () => {
    otcit_FloatAnalyzer_MAX_MANTISSA = $rt_udiv((-1), 10);
    otcit_FloatAnalyzer_mantissa10Table = $rt_createIntArrayFromData([(-18543760), (-873828468), (-1558056233), (-2105438446), (-791721136), (-1492370368), (-2052889754), (-707643228), (-1425108042), (-1999079893), (-621547450), (-1356231419), (-1943978595), (-533385374), (-1285701758), (-1887554866), (-443107408), (-1213479385), (-1829776968), (-350662770), (-1139523676), (-1770612400), (-255999462), (-1063793029), (-1710027882), (-159064234), (-986244846), (-1647989336), (-59802560), (-906835507), (-1584461865),
    (-2126562952), (-825520345), (-1519409735), (-2074521247), (-742253618), (-1452796353), (-2021230542), (-656988489), (-1384584251), (-1966660860), (-569676998), (-1314735058), (-1910781505), (-480270031), (-1243209484), (-1853561046), (-388717296), (-1169967296), (-1794967296), (-294967296), (-1094967296), (-1734967296), (-198967296), (-1018167296), (-1673527296), (-100663296), (-939524096), (-1610612736), (-2147483648), (-858993460), (-1546188227), (-2095944041), (-776530088), (-1480217529), (-2043167483),
    (-692087595), (-1412663535), (-1989124287), (-605618482), (-1343488245), (-1933784055), (-517074110), (-1272652747), (-1877115657), (-426404674), (-1200117198), (-1819087218), (-333559171), (-1125840796), (-1759666096), (-238485376), (-1049781760), (-1698818867), (-141129810), (-971897307), (-1636511305), (-41437710), (-892143627), (-1572708361), (-2117160148), (-810475859), (-1507374147), (-2064892777), (-726848065), (-1440471911), (-2011370988), (-641213203), (-1371964022), (-1956564688)]);
    otcit_FloatAnalyzer_exp10Table = $rt_createIntArrayFromData([(-37), (-34), (-31), (-28), (-24), (-21), (-18), (-14), (-11), (-8), (-4), (-1), 2, 6, 9, 12, 16, 19, 22, 26, 29, 32, 36, 39, 42, 46, 49, 52, 56, 59, 62, 65, 69, 72, 75, 79, 82, 85, 89, 92, 95, 99, 102, 105, 109, 112, 115, 119, 122, 125, 129, 132, 135, 139, 142, 145, 149, 152, 155, 158, 162, 165, 168, 172, 175, 178, 182, 185, 188, 192, 195, 198, 202, 205, 208, 212, 215, 218, 222, 225, 228, 232, 235, 238, 242, 245, 248, 252, 255, 258, 261, 265,
    268, 271, 275, 278, 281, 285, 288, 291]);
},
jur_UnifiedQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet),
jur_UnifiedQuantifierSet__init_ = ($this, $quant) => {
    jur_LeafQuantifierSet__init_($this, $quant.$getInnerSet(), $quant.$getNext(), $quant.$getType());
    $this.$innerSet.$setNext($this);
},
jur_UnifiedQuantifierSet__init_0 = var_0 => {
    let var_1 = new jur_UnifiedQuantifierSet();
    jur_UnifiedQuantifierSet__init_(var_1, var_0);
    return var_1;
},
jur_UnifiedQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4;
    while (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$getRightBound()) {
        var$4 = $this.$leaf;
        if (var$4.$accepts($stringIndex, $testString) <= 0)
            break;
        $stringIndex = $stringIndex + $this.$leaf.$charCount() | 0;
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_UnifiedQuantifierSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $startSearch, $newSearch, $newSearch_0;
    $startSearch = $this.$next1.$find($stringIndex, $testString, $matchResult);
    if ($startSearch < 0)
        return (-1);
    $newSearch = $startSearch - $this.$leaf.$charCount() | 0;
    while ($newSearch >= $stringIndex && $this.$leaf.$accepts($newSearch, $testString) > 0) {
        $newSearch_0 = $newSearch - $this.$leaf.$charCount() | 0;
        $startSearch = $newSearch;
        $newSearch = $newSearch_0;
    }
    return $startSearch;
},
jlr_Type = $rt_classWithoutFields(0);
function jl_Class() {
    let a = this; jl_Object.call(a);
    a.$flags1 = 0;
    a.$classInfo = null;
    a.$name1 = null;
}
let jl_Class__init_0 = ($this, $classInfo) => {
    jl_Object__init_($this);
    $this.$classInfo = $classInfo;
},
jl_Class__init_ = var_0 => {
    let var_1 = new jl_Class();
    jl_Class__init_0(var_1, var_0);
    return var_1;
},
jl_Class_createClass = $classInfo => {
    return jl_Class__init_($classInfo);
},
jl_Class_toString = $this => {
    let var$1, var$2, var$3;
    var$1 = jl_Class_isInterface($this) ? $rt_s(268) : !jl_Class_isPrimitive($this) ? $rt_s(269) : $rt_s(54);
    var$2 = jl_Class_getName($this);
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$3, var$1), var$2);
    return jl_StringBuilder_toString(var$3);
},
jl_Class_getClassInfo = $this => {
    return $this.$classInfo;
},
jl_Class_isInstance = ($this, $obj) => {
    return $obj !== null && jl_Class_isAssignableFrom($this, jl_Object_getClass($obj)) ? 1 : 0;
},
jl_Class_isAssignableFrom = ($this, $obj) => {
    return $rt_isAssignable($obj.$classInfo, $this.$classInfo);
},
jl_Class_getName = $this => {
    let $metadataName, $result, $itemType, $itemName, var$5;
    if (!($this.$flags1 & 1)) {
        $this.$flags1 = $this.$flags1 | 1;
        $metadataName = $this.$classInfo[$rt_meta].name;
        $result = $metadataName === null ? null : $rt_str($metadataName);
        if ($result === null) {
            $itemType = $this.$classInfo[$rt_meta].itemType;
            if ($itemType !== null) {
                $itemName = jl_Class_getName($rt_cls($itemType));
                if ($itemName !== null) {
                    if ($itemType[$rt_meta].itemType !== null) {
                        var$5 = jl_StringBuilder__init_();
                        jl_StringBuilder_append(jl_StringBuilder_append0(var$5, 91), $itemName);
                        $result = jl_StringBuilder_toString(var$5);
                    } else {
                        var$5 = jl_StringBuilder__init_();
                        jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append(var$5, $rt_s(270)), $itemName), 59);
                        $result = jl_StringBuilder_toString(var$5);
                    }
                }
            }
        }
        $this.$name1 = $result;
    }
    return $this.$name1;
},
jl_Class_isPrimitive = $this => {
    return !$this.$classInfo[$rt_meta].primitiveKind ? 0 : 1;
},
jl_Class_isEnum = $this => {
    return !($this.$classInfo[$rt_meta].modifiers & 65536) ? 0 : 1;
},
jl_Class_isInterface = $this => {
    return !($this.$classInfo[$rt_meta].modifiers & 512) ? 0 : 1;
},
jl_Class_getComponentType = $this => {
    let $itemTypeInfo;
    $itemTypeInfo = $this.$classInfo[$rt_meta].itemType;
    return $itemTypeInfo === null ? null : $rt_cls($itemTypeInfo);
},
jl_Class_getEnumConstants = $this => {
    let $count, $data, $i;
    if (!jl_Class_isEnum($this))
        return null;
    jl_Class_initialize($this);
    $count = $rt_enumConstants($this.$classInfo).length;
    $data = otrr_ClassInfo_newArrayInstance($this.$classInfo, $count);
    $i = 0;
    while ($i < $count) {
        $data.data[$i] = $rt_enumConstants($this.$classInfo)[$i];
        $i = $i + 1 | 0;
    }
    return $data;
},
jl_Class_getClassLoader = $this => {
    return jl_ClassLoader_getSystemClassLoader();
},
jl_Class_initialize = $this => {
    $this.$classInfo[$rt_meta].clinit();
};
function me_Alien() {
    let a = this; me_Entity.call(a);
    a.$path = null;
    a.$isOneShot = 0;
    a.$isAttacking0 = 0;
    a.$isDiving = 0;
    a.$isOffsetYChanging = 0;
    a.$offset = 0;
    a.$formationPoint = null;
    a.$POINTS_TO_CALCULATE_WITH_OFFSET = 0;
    a.$pathArrayList = null;
    a.$lastPoints = null;
    a.$pointsCounter = 0;
}
let me_Alien_CENTER_POINT_FOR_OFFSET = null,
me_Alien_$callClinit = () => {
    me_Alien_$callClinit = $rt_eraseClinit(me_Alien);
    me_Alien__clinit_();
},
me_Alien__init_ = ($this, $width, $height, $speed, $bounds, $path, $isOneShot, $direction, $POINTS_TO_CALCULATE_WITH_OFFSET, $formationPoint) => {
    me_Alien_$callClinit();
    me_Entity__init_($this, (-16), (-16), $width, $height, $speed, $bounds, $direction);
    $this.$path = $path;
    $this.$pathArrayList = ju_ArrayList__init_0($path);
    $this.$isOneShot = $isOneShot;
    $this.$isAttacking0 = 1;
    $this.$pointsCounter = 0;
    $this.$lastPoints = ju_LinkedList__init_0();
    $this.$isDiving = 0;
    $this.$POINTS_TO_CALCULATE_WITH_OFFSET = $POINTS_TO_CALCULATE_WITH_OFFSET;
    $this.$offset = 0;
    $this.$formationPoint = $formationPoint;
    $this.$isOffsetYChanging = 0;
},
me_Alien_update = ($this, $frameNumber) => {
    let $formationOffsetX, $formationOffsetY, $formationOffsetXWhenYChanging, $pointsSkipped, $nextPoint, $dx, $distanceFromCenterX, $distanceFromCenterY, $scaleFactorX, $scaleFactorY, var$12;
    $formationOffsetX = $this.$offset;
    $formationOffsetY = 0;
    $formationOffsetXWhenYChanging = $this.$offset / 2 | 0;
    if ($this.$isAttacking0) {
        $pointsSkipped = 0;
        a: {
            while (true) {
                if ($pointsSkipped >= $this.$speed)
                    break a;
                $nextPoint = $this.$path.$poll();
                $dx = 0;
                if ($this.$path.$size() <= $this.$POINTS_TO_CALCULATE_WITH_OFFSET && $formationOffsetX)
                    $dx = $formationOffsetX / $this.$POINTS_TO_CALCULATE_WITH_OFFSET * ($this.$POINTS_TO_CALCULATE_WITH_OFFSET - $this.$path.$size() | 0) | 0;
                if ($nextPoint === null)
                    break;
                $this.$x1 = (md_PointOfPath_x($nextPoint) | 0) + $dx | 0;
                $this.$y1 = md_PointOfPath_y($nextPoint) | 0;
                $pointsSkipped = $pointsSkipped + 1 | 0;
                $this.$pointsCounter = $this.$pointsCounter + 1 | 0;
            }
            $this.$isAttacking0 = 0;
            $this.$lastPoints.$clear();
        }
        if (!$this.$isDiving)
            me_Alien_updateAngleWhileInPath($this);
        if ($this.$isDiving) {
            s_RotationDirection_$callClinit();
            $this.$direction0 = s_RotationDirection_D;
        }
    } else {
        me_Alien_$callClinit();
        $distanceFromCenterX = md_PointOfPath_x(me_Alien_CENTER_POINT_FOR_OFFSET) - (md_PointOfPath_x($this.$formationPoint) + $this.$width0 / 2.0);
        $distanceFromCenterY = md_PointOfPath_y(me_Alien_CENTER_POINT_FOR_OFFSET) - (md_PointOfPath_y($this.$formationPoint) + $this.$height0 / 2.0);
        $scaleFactorX = $distanceFromCenterX / 50.0;
        $scaleFactorY = $distanceFromCenterY / 100.0;
        if (m_GameModel_AreAllStageAlienPathsEmpty() && !$this.$offset)
            $this.$isOffsetYChanging = 1;
        if ($this.$isOffsetYChanging) {
            var$12 = $formationOffsetXWhenYChanging * $scaleFactorX | 0;
            $formationOffsetY = jl_Math_abs0($this.$offset * $scaleFactorY) | 0;
            $formationOffsetX = !(md_PointOfPath_x($this.$formationPoint) < (md_WorldBounds_width($this.$bounds) / 2 | 0)) ? jl_Math_abs(var$12) :  -jl_Math_abs(var$12) | 0;
        }
        if ($frameNumber <= (c_GameController_getFramePerSeconds() / 2 | 0))
            $this.$animationFrame0 = 1;
        else if ($frameNumber > (c_GameController_getFramePerSeconds() / 2 | 0))
            $this.$animationFrame0 = 2;
        $this.$x1 = (md_PointOfPath_x($this.$formationPoint) | 0) + $formationOffsetX | 0;
        $this.$y1 = (md_PointOfPath_y($this.$formationPoint) | 0) + $formationOffsetY | 0;
        me_Alien_updateAngleWithNewPoint($this, md_PointOfPath__init_($this.$x1 - $formationOffsetX | 0, $this.$y1 - $formationOffsetY | 0));
        s_RotationDirection_$callClinit();
        $this.$direction0 = s_RotationDirection_U;
    }
},
me_Alien_getPathCopy = $this => {
    return ju_LinkedList__init_($this.$path);
},
me_Alien_isAttacking = $this => {
    return $this.$isAttacking0;
},
me_Alien_isPathEmpty = $this => {
    return $this.$path.$isEmpty();
},
me_Alien_getPointsToCalculateWithOffset = $this => {
    return $this.$POINTS_TO_CALCULATE_WITH_OFFSET;
},
me_Alien_updateOffset = ($this, $offset) => {
    $this.$offset = $offset;
},
me_Alien_checkCollisionWithPlayerShot = ($this, $pShot) => {
    let $didCollide, $radius, $radiusSquared, $pShotXMin, $pShotXMax, $pShotYMin, $pShotYMax, $pShotClosestPointToTheCircleX, $pShotClosestPointToTheCircleY, var$11, $pShotDistanceToCircleCenterSquared;
    $didCollide = 0;
    $radius = jl_Math_max($this.$width0, $this.$height0) / 2 | 0;
    $radiusSquared = $radius * $radius;
    $pShotXMin = $pShot.$getX();
    $pShotXMax = $pShot.$getX() + $pShot.$getWidth() | 0;
    $pShotYMin = $pShot.$getY();
    $pShotYMax = $pShot.$getY() + $pShot.$getHeight() | 0;
    $pShotClosestPointToTheCircleX = jl_Math_min0($pShotXMax, jl_Math_max0($this.$getCenterX(), $pShotXMin));
    $pShotClosestPointToTheCircleY = jl_Math_min0($pShotYMax, jl_Math_max0($this.$getCenterY(), $pShotYMin));
    var$11 = ($this.$getCenterX() - $pShotClosestPointToTheCircleX) * ($this.$getCenterX() - $pShotClosestPointToTheCircleX);
    $pShotDistanceToCircleCenterSquared = var$11 + ($this.$getCenterY() - $pShotClosestPointToTheCircleY) * ($this.$getCenterY() - $pShotClosestPointToTheCircleY);
    if ($pShotDistanceToCircleCenterSquared < $radiusSquared) {
        $didCollide = 1;
        $pShot.$isToRemove0 = 1;
        if ($this.$isOneShot)
            $this.$isToRemove0 = 1;
        else
            $this.$isOneShot = 1;
    }
    return $didCollide;
},
me_Alien_checkCollisionWith = ($this, $bounds) => {
    if ($this.$x1 > 0 && $this.$x1 < md_WorldBounds_width($bounds) && $this.$y1 > 0 && $this.$y1 < md_WorldBounds_height($bounds)) {
        $this.$isToRemove0 = 1;
        return 1;
    }
    return 0;
},
me_Alien_updateAngleWithNewPoint = ($this, $newP) => {
    let $safeCounter, $fromIdx, $toIdx, $tempList, $startI, $endI, $dx, $dy, $angle, $areAllSame, var$12, $p;
    if ($newP !== null) {
        if ($this.$lastPoints.$size() >= 20)
            $this.$lastPoints.$poll();
        $this.$lastPoints.$add2($newP);
    }
    if ($newP === null) {
        $safeCounter = jl_Math_min($this.$pointsCounter, $this.$pathArrayList.$size());
        $fromIdx = jl_Math_max(0, $safeCounter - 9 | 0);
        $toIdx = jl_Math_min($this.$pathArrayList.$size(), $safeCounter + 9 | 0);
        if ($fromIdx < $toIdx)
            $this.$lastPoints = ju_LinkedList__init_($this.$pathArrayList.$subList($fromIdx, $toIdx));
    }
    $tempList = ju_ArrayList__init_0($this.$lastPoints);
    if ($tempList.$isEmpty())
        return;
    $startI = 0;
    $endI = $tempList.$size() - 1 | 0;
    $dx = md_PointOfPath_x($tempList.$get($endI)) - md_PointOfPath_x($tempList.$get($startI));
    $dy = md_PointOfPath_y($tempList.$get($endI)) - md_PointOfPath_y($tempList.$get($startI));
    $angle = jl_Math_toDegrees(jl_Math_atan2($dy, $dx)) + 90.0;
    $areAllSame = 1;
    var$12 = $tempList.$iterator();
    while (var$12.$hasNext()) {
        $p = var$12.$next();
        if (!md_PointOfPath_equals($tempList.$get(0), $p))
            $areAllSame = 0;
    }
    if ($areAllSame)
        $angle = 0.0;
    $this.$direction0 = s_RotationDirection_fromAngle($angle);
},
me_Alien_updateAngleWhileInPath = $this => {
    me_Alien_updateAngleWithNewPoint($this, null);
},
me_Alien__clinit_ = () => {
    let var$1;
    var$1 = new md_PointOfPath;
    s_Entities_$callClinit();
    md_PointOfPath__init_0(var$1, 112 - (s_Entities_getWidth(s_Entities_BOSS_GALAGA) / 2 | 0) | 0, 40.0);
    me_Alien_CENTER_POINT_FOR_OFFSET = var$1;
};
function me_Zako() {
    let a = this; me_Alien.call(a);
    a.$SCORE_VALUE0 = 50;
    a.$SCORE_VALUE_CHARGING0 = 100;
}
let me_Zako__init_ = ($this, $speed, $bounds, $path, $POINTS_TO_CALCULATE_WITH_OFFSET, $formationPoint) => {
    let var$6, var$7;
    s_Entities_$callClinit();
    var$6 = s_Entities_getWidth(s_Entities_ZAKO);
    var$7 = s_Entities_getHeight(s_Entities_ZAKO);
    s_RotationDirection_$callClinit();
    me_Alien__init_($this, var$6, var$7, $speed, $bounds, $path, 1, s_RotationDirection_D, $POINTS_TO_CALCULATE_WITH_OFFSET, $formationPoint);
    $this.$SCORE_VALUE0 = 50;
    $this.$SCORE_VALUE_CHARGING0 = 100;
    $this.$entityName = s_Entities_ZAKO;
},
me_Zako__init_0 = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new me_Zako();
    me_Zako__init_(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
me_Zako_copyAlien = $this => {
    let $newPath;
    $newPath = ju_LinkedList__init_($this.$path);
    return me_Zako__init_0($this.$speed, $this.$bounds, $newPath, $this.$POINTS_TO_CALCULATE_WITH_OFFSET, $this.$formationPoint);
},
me_Zako_getScoreValue = $this => {
    if (!$this.$isAttacking0)
        return 50;
    return 100;
};
function ju_BitSet() {
    let a = this; jl_Object.call(a);
    a.$data = null;
    a.$length1 = 0;
}
let ju_BitSet__init_0 = $this => {
    jl_Object__init_($this);
    $this.$data = $rt_createIntArray(2);
},
ju_BitSet__init_1 = () => {
    let var_0 = new ju_BitSet();
    ju_BitSet__init_0(var_0);
    return var_0;
},
ju_BitSet__init_ = ($this, $nbits) => {
    jl_Object__init_($this);
    if ($nbits < 0)
        $rt_throw(jl_NegativeArraySizeException__init_0());
    $this.$data = $rt_createIntArray((($nbits + 32 | 0) - 1 | 0) / 32 | 0);
},
ju_BitSet__init_2 = var_0 => {
    let var_1 = new ju_BitSet();
    ju_BitSet__init_(var_1, var_0);
    return var_1;
},
ju_BitSet_set = ($this, $bitIndex) => {
    let $index, var$3;
    if ($bitIndex < 0)
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    $index = $bitIndex / 32 | 0;
    if ($bitIndex >= $this.$length1) {
        ju_BitSet_ensureCapacity($this, $index + 1 | 0);
        $this.$length1 = $bitIndex + 1 | 0;
    }
    var$3 = $this.$data.data;
    var$3[$index] = var$3[$index] | 1 << ($bitIndex % 32 | 0);
},
ju_BitSet_set0 = ($this, $fromIndex, $toIndex) => {
    let var$3, $fromDataIndex, $toDataIndex, var$6, $i;
    if ($fromIndex >= 0) {
        var$3 = $rt_compare($fromIndex, $toIndex);
        if (var$3 <= 0) {
            if (!var$3)
                return;
            $fromDataIndex = $fromIndex / 32 | 0;
            $toDataIndex = $toIndex / 32 | 0;
            if ($toIndex > $this.$length1) {
                ju_BitSet_ensureCapacity($this, $toDataIndex + 1 | 0);
                $this.$length1 = $toIndex;
            }
            if ($fromDataIndex == $toDataIndex) {
                var$6 = $this.$data.data;
                var$6[$fromDataIndex] = var$6[$fromDataIndex] | ju_BitSet_trailingZeroBits($this, $fromIndex) & ju_BitSet_trailingOneBits($this, $toIndex);
            } else {
                var$6 = $this.$data.data;
                var$6[$fromDataIndex] = var$6[$fromDataIndex] | ju_BitSet_trailingZeroBits($this, $fromIndex);
                $i = $fromDataIndex + 1 | 0;
                while ($i < $toDataIndex) {
                    $this.$data.data[$i] = (-1);
                    $i = $i + 1 | 0;
                }
                if ($toIndex & 31) {
                    var$6 = $this.$data.data;
                    var$6[$toDataIndex] = var$6[$toDataIndex] | ju_BitSet_trailingOneBits($this, $toIndex);
                }
            }
            return;
        }
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_BitSet_trailingZeroBits = ($this, $num) => {
    let var$2;
    var$2 = $num % 32 | 0;
    return (-1) << var$2;
},
ju_BitSet_trailingOneBits = ($this, $num) => {
    let var$2;
    var$2 = $num % 32 | 0;
    return !var$2 ? 0 : (-1) >>> (32 - var$2 | 0) | 0;
},
ju_BitSet_clear0 = ($this, $bitIndex) => {
    let $index, var$3;
    if ($bitIndex < 0)
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    $index = $bitIndex / 32 | 0;
    if ($index < $this.$data.data.length) {
        var$3 = $this.$data.data;
        var$3[$index] = var$3[$index] & jl_Integer_rotateLeft((-2), $bitIndex % 32 | 0);
        if ($bitIndex == ($this.$length1 - 1 | 0))
            ju_BitSet_recalculateLength($this);
    }
},
ju_BitSet_clear = ($this, $fromIndex, $toIndex) => {
    let var$3, $fromDataIndex, $toDataIndex, var$6, $i;
    if ($fromIndex >= 0 && $fromIndex <= $toIndex) {
        if ($fromIndex >= $this.$length1)
            return;
        var$3 = jl_Math_min($this.$length1, $toIndex);
        if ($fromIndex == var$3)
            return;
        $fromDataIndex = $fromIndex / 32 | 0;
        $toDataIndex = var$3 / 32 | 0;
        if ($fromDataIndex == $toDataIndex) {
            var$6 = $this.$data.data;
            var$6[$fromDataIndex] = var$6[$fromDataIndex] & (ju_BitSet_trailingOneBits($this, $fromIndex) | ju_BitSet_trailingZeroBits($this, var$3));
        } else {
            var$6 = $this.$data.data;
            var$6[$fromDataIndex] = var$6[$fromDataIndex] & ju_BitSet_trailingOneBits($this, $fromIndex);
            $i = $fromDataIndex + 1 | 0;
            while ($i < $toDataIndex) {
                $this.$data.data[$i] = 0;
                $i = $i + 1 | 0;
            }
            if (var$3 & 31) {
                var$6 = $this.$data.data;
                var$6[$toDataIndex] = var$6[$toDataIndex] & ju_BitSet_trailingZeroBits($this, var$3);
            }
        }
        ju_BitSet_recalculateLength($this);
        return;
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_BitSet_get = ($this, $bitIndex) => {
    let $index;
    if ($bitIndex < 0)
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    $index = $bitIndex / 32 | 0;
    return $index < $this.$data.data.length && $this.$data.data[$index] & 1 << ($bitIndex % 32 | 0) ? 1 : 0;
},
ju_BitSet_nextSetBit = ($this, $fromIndex) => {
    let $index, $val, var$4, $top, $i;
    if ($fromIndex < 0)
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    if ($fromIndex >= $this.$length1)
        return (-1);
    $index = $fromIndex / 32 | 0;
    $val = $this.$data.data[$index];
    var$4 = $val >>> ($fromIndex % 32 | 0) | 0;
    if (var$4)
        return jl_Integer_numberOfTrailingZeros(var$4) + $fromIndex | 0;
    $top = ($this.$length1 + 31 | 0) / 32 | 0;
    $i = $index + 1 | 0;
    while ($i < $top) {
        if ($this.$data.data[$i])
            return ($i * 32 | 0) + jl_Integer_numberOfTrailingZeros($this.$data.data[$i]) | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
},
ju_BitSet_nextClearBit = ($this, $fromIndex) => {
    let $index, $val, var$4, $top, $i;
    if ($fromIndex < 0)
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    if ($fromIndex >= $this.$length1)
        return $fromIndex;
    $index = $fromIndex / 32 | 0;
    $val = $this.$data.data[$index] ^ (-1);
    var$4 = $val >>> ($fromIndex % 32 | 0) | 0;
    if (var$4)
        return jl_Integer_numberOfTrailingZeros(var$4) + $fromIndex | 0;
    $top = ($this.$length1 + 31 | 0) / 32 | 0;
    $i = $index + 1 | 0;
    while ($i < $top) {
        if ($this.$data.data[$i] != (-1))
            return ($i * 32 | 0) + jl_Integer_numberOfTrailingZeros($this.$data.data[$i] ^ (-1)) | 0;
        $i = $i + 1 | 0;
    }
    return $this.$length1;
},
ju_BitSet_ensureCapacity = ($this, $capacity) => {
    let $newArrayLength;
    if ($this.$data.data.length >= $capacity)
        return;
    $newArrayLength = jl_Math_max(($capacity * 3 | 0) / 2 | 0, ($this.$data.data.length * 2 | 0) + 1 | 0);
    $this.$data = ju_Arrays_copyOf2($this.$data, $newArrayLength);
},
ju_BitSet_recalculateLength = $this => {
    let $top, $i, $sz;
    $top = ($this.$length1 + 31 | 0) / 32 | 0;
    $this.$length1 = $top * 32 | 0;
    $i = $top - 1 | 0;
    a: {
        while (true) {
            if ($i < 0)
                break a;
            $sz = jl_Integer_numberOfLeadingZeros($this.$data.data[$i]);
            if ($sz < 32)
                break;
            $i = $i + (-1) | 0;
            $this.$length1 = $this.$length1 - 32 | 0;
        }
        $this.$length1 = $this.$length1 - $sz | 0;
    }
},
ju_BitSet_intersects = ($this, $set) => {
    let $sz, $i;
    $sz = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i = 0;
    while ($i < $sz) {
        if ($this.$data.data[$i] & $set.$data.data[$i])
            return 1;
        $i = $i + 1 | 0;
    }
    return 0;
},
ju_BitSet_and = ($this, $set) => {
    let $i, $i_0, var$4;
    $i = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i_0 = 0;
    while ($i_0 < $i) {
        var$4 = $this.$data.data;
        var$4[$i_0] = var$4[$i_0] & $set.$data.data[$i_0];
        $i_0 = $i_0 + 1 | 0;
    }
    while ($i < $this.$data.data.length) {
        $this.$data.data[$i] = 0;
        $i = $i + 1 | 0;
    }
    $this.$length1 = jl_Math_min($this.$length1, $set.$length1);
    ju_BitSet_recalculateLength($this);
},
ju_BitSet_andNot = ($this, $set) => {
    let $sz, $i, var$4;
    $sz = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i = 0;
    while ($i < $sz) {
        var$4 = $this.$data.data;
        var$4[$i] = var$4[$i] & ($set.$data.data[$i] ^ (-1));
        $i = $i + 1 | 0;
    }
    ju_BitSet_recalculateLength($this);
},
ju_BitSet_or = ($this, $set) => {
    let $sz, $i, var$4;
    $this.$length1 = jl_Math_max($this.$length1, $set.$length1);
    ju_BitSet_ensureCapacity($this, ($this.$length1 + 31 | 0) / 32 | 0);
    $sz = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i = 0;
    while ($i < $sz) {
        var$4 = $this.$data.data;
        var$4[$i] = var$4[$i] | $set.$data.data[$i];
        $i = $i + 1 | 0;
    }
},
ju_BitSet_xor = ($this, $set) => {
    let $sz, $i, var$4;
    $this.$length1 = jl_Math_max($this.$length1, $set.$length1);
    ju_BitSet_ensureCapacity($this, ($this.$length1 + 31 | 0) / 32 | 0);
    $sz = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i = 0;
    while ($i < $sz) {
        var$4 = $this.$data.data;
        var$4[$i] = var$4[$i] ^ $set.$data.data[$i];
        $i = $i + 1 | 0;
    }
    ju_BitSet_recalculateLength($this);
},
ju_BitSet_isEmpty = $this => {
    return $this.$length1 ? 0 : 1;
};
function jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$016 = null;
}
let jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1__init_ = ($this, $this$0) => {
    $this.$this$016 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1();
    jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1_contains = ($this, $ch) => {
    return jl_Character_isJavaIdentifierStart($ch);
},
jl_Float = $rt_classWithoutFields(jl_Number),
jl_Float_TYPE = null,
jl_Float_$callClinit = () => {
    jl_Float_$callClinit = $rt_eraseClinit(jl_Float);
    jl_Float__clinit_();
},
jl_Float_isInfinite = $v => {
    jl_Float_$callClinit();
    return !(isFinite($v) ? 1 : 0) && !(isNaN($v) ? 1 : 0) ? 1 : 0;
},
jl_Float_floatToIntBits = $value => {
    jl_Float_$callClinit();
    if (isNaN($value) ? 1 : 0)
        return 2143289344;
    return $rt_floatToRawIntBits($value);
},
jl_Float__clinit_ = () => {
    jl_Float_TYPE = $rt_cls($rt_floatcls);
},
ju_Arrays = $rt_classWithoutFields(),
ju_Arrays_copyOf1 = ($array, $length) => {
    let var$3, $result, $sz, $i;
    var$3 = $array.data;
    $result = $rt_createCharArray($length);
    $sz = jl_Math_min($length, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_copyOf = ($array, $length) => {
    let var$3, $result, $sz, $i;
    var$3 = $array.data;
    $result = $rt_createByteArray($length);
    $sz = jl_Math_min($length, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_copyOf2 = ($array, $length) => {
    let var$3, $result, $sz, $i;
    var$3 = $array.data;
    $result = $rt_createIntArray($length);
    $sz = jl_Math_min($length, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_copyOf0 = ($original, $newLength) => {
    let var$3, $result, $sz, $i;
    var$3 = $original.data;
    $result = jlr_Array_newInstance(jl_Class_getComponentType(jl_Object_getClass($original)), $newLength);
    $sz = jl_Math_min($newLength, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_fill0 = ($a, $fromIndex, $toIndex, $val) => {
    let var$5, var$6;
    if ($fromIndex > $toIndex)
        $rt_throw(jl_IllegalArgumentException__init_());
    while ($fromIndex < $toIndex) {
        var$5 = $a.data;
        var$6 = $fromIndex + 1 | 0;
        var$5[$fromIndex] = $val;
        $fromIndex = var$6;
    }
},
ju_Arrays_fill = ($a, $val) => {
    ju_Arrays_fill0($a, 0, $a.data.length, $val);
},
ju_Arrays_fill3 = ($a, $fromIndex, $toIndex, $val) => {
    let var$5, var$6;
    if ($fromIndex > $toIndex)
        $rt_throw(jl_IllegalArgumentException__init_());
    while ($fromIndex < $toIndex) {
        var$5 = $a.data;
        var$6 = $fromIndex + 1 | 0;
        var$5[$fromIndex] = $val;
        $fromIndex = var$6;
    }
},
ju_Arrays_fill2 = ($a, $val) => {
    ju_Arrays_fill3($a, 0, $a.data.length, $val);
},
ju_Arrays_fill1 = ($a, $fromIndex, $toIndex, $val) => {
    let var$5, var$6;
    if ($fromIndex > $toIndex)
        $rt_throw(jl_IllegalArgumentException__init_());
    while ($fromIndex < $toIndex) {
        var$5 = $a.data;
        var$6 = $fromIndex + 1 | 0;
        var$5[$fromIndex] = $val;
        $fromIndex = var$6;
    }
},
ju_Arrays_binarySearch = ($a, $key) => {
    return ju_Arrays_binarySearch1($a, 0, $a.data.length, $key);
},
ju_Arrays_binarySearch1 = ($a, $fromIndex, $toIndex, $key) => {
    let $u, var$6, $i, $e;
    if ($fromIndex > $toIndex)
        $rt_throw(jl_IllegalArgumentException__init_());
    $u = $toIndex - 1 | 0;
    while (true) {
        if ($fromIndex > $u)
            return ( -$fromIndex | 0) - 1 | 0;
        var$6 = $a.data;
        $i = ($fromIndex + $u | 0) / 2 | 0;
        $e = var$6[$i];
        if ($e == $key)
            break;
        if ($key >= $e)
            $fromIndex = $i + 1 | 0;
        else
            $u = $i - 1 | 0;
    }
    return $i;
},
ju_Arrays_binarySearch0 = ($a, $key) => {
    return ju_Arrays_binarySearch2($a, 0, $a.data.length, $key);
},
ju_Arrays_binarySearch2 = ($a, $fromIndex, $toIndex, $key) => {
    let $u, var$6, $i, $e, var$9;
    if ($fromIndex > $toIndex)
        $rt_throw(jl_IllegalArgumentException__init_());
    $u = $toIndex - 1 | 0;
    while (true) {
        if ($fromIndex > $u)
            return ( -$fromIndex | 0) - 1 | 0;
        var$6 = $a.data;
        $i = ($fromIndex + $u | 0) / 2 | 0;
        $e = var$6[$i];
        var$9 = $rt_compare($e, $key);
        if (!var$9)
            break;
        if (var$9 <= 0)
            $fromIndex = $i + 1 | 0;
        else
            $u = $i - 1 | 0;
    }
    return $i;
};
function jur_CharSet() {
    jur_LeafSet.call(this);
    this.$ch0 = 0;
}
let jur_CharSet__init_0 = ($this, $ch) => {
    jur_LeafSet__init_($this);
    $this.$ch0 = $ch;
},
jur_CharSet__init_ = var_0 => {
    let var_1 = new jur_CharSet();
    jur_CharSet__init_0(var_1, var_0);
    return var_1;
},
jur_CharSet_charCount = $this => {
    return 1;
},
jur_CharSet_accepts = ($this, $strIndex, $testString) => {
    return $this.$ch0 != $testString.$charAt($strIndex) ? (-1) : 1;
},
jur_CharSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $testStr, $strLength, var$6, var$7;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
    $testStr = $testString;
    $strLength = $matchResult.$getRightBound();
    while (true) {
        if ($strIndex >= $strLength)
            return (-1);
        var$6 = $testStr.$indexOf1($this.$ch0, $strIndex);
        if (var$6 < 0)
            return (-1);
        var$7 = $this.$next1;
        $strIndex = var$6 + 1 | 0;
        if (var$7.$matches($strIndex, $testString, $matchResult) >= 0)
            break;
    }
    return var$6;
},
jur_CharSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $testStr, var$6;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
    $testStr = $testString;
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            var$6 = $testStr.$lastIndexOf1($this.$ch0, $lastIndex);
            if (var$6 < 0)
                break a;
            if (var$6 < $strIndex)
                break a;
            if ($this.$next1.$matches(var$6 + 1 | 0, $testString, $matchResult) >= 0)
                break;
            $lastIndex = var$6 + (-1) | 0;
        }
        return var$6;
    }
    return (-1);
},
jur_CharSet_getName = $this => {
    let var$1, var$2;
    var$1 = $this.$ch0;
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(var$2, var$1);
    return jl_StringBuilder_toString(var$2);
},
jur_CharSet_getChar = $this => {
    return $this.$ch0;
},
jur_CharSet_first = ($this, $set) => {
    if ($set instanceof jur_CharSet)
        return $set.$getChar0() != $this.$ch0 ? 0 : 1;
    if (!($set instanceof jur_RangeSet)) {
        if ($set instanceof jur_SupplRangeSet)
            return $set.$contains($this.$ch0);
        if (!($set instanceof jur_SupplCharSet))
            return 1;
        return 0;
    }
    return $set.$accepts(0, jl_Character_toString($this.$ch0)) <= 0 ? 0 : 1;
};
function jur_CharClass$3() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt = 0;
    a.$val$cc = null;
    a.$this$02 = null;
}
let jur_CharClass$3__init_ = ($this, $this$0, var$2, var$3) => {
    $this.$this$02 = $this$0;
    $this.$val$curAlt = var$2;
    $this.$val$cc = var$3;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$3__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_CharClass$3();
    jur_CharClass$3__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_CharClass$3_contains = ($this, $ch) => {
    return !($this.$val$curAlt ^ $this.$this$02.$bits.$get3($ch)) && !($this.$val$curAlt ^ $this.$this$02.$inverted ^ $this.$val$cc.$contains($ch)) ? 0 : 1;
};
function jur_CharClass$4() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt9 = 0;
    a.$val$nb4 = null;
    a.$val$cc2 = null;
    a.$this$034 = null;
}
let jur_CharClass$4__init_ = ($this, $this$0, var$2, var$3, var$4) => {
    $this.$this$034 = $this$0;
    $this.$val$curAlt9 = var$2;
    $this.$val$nb4 = var$3;
    $this.$val$cc2 = var$4;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$4__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CharClass$4();
    jur_CharClass$4__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CharClass$4_contains = ($this, $ch) => {
    return $this.$val$curAlt9 ^ (!$this.$val$nb4.$contains($ch) && !$this.$val$cc2.$contains($ch) ? 0 : 1) ? 0 : 1;
};
function jur_CharClass$1() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$cc3 = null;
    a.$this$010 = null;
}
let jur_CharClass$1__init_ = ($this, $this$0, var$2) => {
    $this.$this$010 = $this$0;
    $this.$val$cc3 = var$2;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$1__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CharClass$1();
    jur_CharClass$1__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass$1_contains = ($this, $ch) => {
    return $this.$val$cc3.$contains($ch);
},
otjb_AnimationFrameCallback = $rt_classWithoutFields(0);
function jur_CharClass$2() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt0 = 0;
    a.$val$cc1 = null;
    a.$this$01 = null;
}
let jur_CharClass$2__init_ = ($this, $this$0, var$2, var$3) => {
    $this.$this$01 = $this$0;
    $this.$val$curAlt0 = var$2;
    $this.$val$cc1 = var$3;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$2__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_CharClass$2();
    jur_CharClass$2__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_CharClass$2_contains = ($this, $ch) => {
    return !($this.$val$curAlt0 ^ $this.$this$01.$bits.$get3($ch)) && !($this.$val$curAlt0 ^ $this.$this$01.$inverted ^ $this.$val$cc1.$contains($ch)) ? 1 : 0;
};
function jur_CharClass$7() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz7 = null;
    a.$this$035 = null;
}
let jur_CharClass$7__init_ = ($this, $this$0, var$2) => {
    $this.$this$035 = $this$0;
    $this.$val$clazz7 = var$2;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$7__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CharClass$7();
    jur_CharClass$7__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass$7_contains = ($this, $ch) => {
    return $this.$val$clazz7.$contains($ch);
};
function jur_CharClass$8() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz1 = null;
    a.$val$curAlt2 = 0;
    a.$this$04 = null;
}
let jur_CharClass$8__init_ = ($this, $this$0, var$2, var$3) => {
    $this.$this$04 = $this$0;
    $this.$val$clazz1 = var$2;
    $this.$val$curAlt2 = var$3;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$8__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_CharClass$8();
    jur_CharClass$8__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_CharClass$8_contains = ($this, $ch) => {
    return !$this.$val$clazz1.$contains($ch) && !($this.$val$curAlt2 ^ $this.$this$04.$bits.$get3($ch)) ? 1 : 0;
};
function jur_CharClass$5() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt7 = 0;
    a.$val$nb3 = null;
    a.$val$cc0 = null;
    a.$this$020 = null;
}
let jur_CharClass$5__init_ = ($this, $this$0, var$2, var$3, var$4) => {
    $this.$this$020 = $this$0;
    $this.$val$curAlt7 = var$2;
    $this.$val$nb3 = var$3;
    $this.$val$cc0 = var$4;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$5__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CharClass$5();
    jur_CharClass$5__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CharClass$5_contains = ($this, $ch) => {
    return $this.$val$curAlt7 ^ (!$this.$val$nb3.$contains($ch) && !$this.$val$cc0.$contains($ch) ? 0 : 1);
};
function jur_CharClass$6() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz6 = null;
    a.$this$022 = null;
}
let jur_CharClass$6__init_ = ($this, $this$0, var$2) => {
    $this.$this$022 = $this$0;
    $this.$val$clazz6 = var$2;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$6__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CharClass$6();
    jur_CharClass$6__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass$6_contains = ($this, $ch) => {
    return $this.$val$clazz6.$contains($ch) ? 0 : 1;
},
ju_Iterator = $rt_classWithoutFields(0),
ju_ListIterator = $rt_classWithoutFields(0),
ju_Collections$5 = $rt_classWithoutFields(),
ju_Collections$5__init_ = $this => {
    jl_Object__init_($this);
},
ju_Collections$5__init_0 = () => {
    let var_0 = new ju_Collections$5();
    ju_Collections$5__init_(var_0);
    return var_0;
};
function jur_DotSet() {
    jur_JointSet.call(this);
    this.$lt0 = null;
}
let jur_DotSet__init_ = ($this, $lt) => {
    jur_JointSet__init_($this);
    $this.$lt0 = $lt;
},
jur_DotSet__init_0 = var_0 => {
    let var_1 = new jur_DotSet();
    jur_DotSet__init_(var_1, var_0);
    return var_1;
},
jur_DotSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, var$5, $high, var$7, $low;
    $strLength = $matchResult.$getRightBound();
    var$5 = $stringIndex + 1 | 0;
    if (var$5 > $strLength) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    $high = $testString.$charAt($stringIndex);
    if (jl_Character_isHighSurrogate($high)) {
        var$7 = $stringIndex + 2 | 0;
        if (var$7 <= $strLength) {
            $low = $testString.$charAt(var$5);
            if (jl_Character_isSurrogatePair($high, $low))
                return $this.$lt0.$isLineTerminator(jl_Character_toCodePoint($high, $low)) ? (-1) : $this.$next1.$matches(var$7, $testString, $matchResult);
        }
    }
    return $this.$lt0.$isLineTerminator($high) ? (-1) : $this.$next1.$matches(var$5, $testString, $matchResult);
},
jur_DotSet_getName = $this => {
    return $rt_s(271);
},
jur_DotSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_DotSet_getType = $this => {
    return (-2147483602);
},
jur_DotSet_hasConsumed = ($this, $matchResult) => {
    return 1;
},
ju_List = $rt_classWithoutFields(0);
function ju_AbstractList() {
    ju_AbstractCollection.call(this);
    this.$modCount = 0;
}
let ju_AbstractList__init_ = $this => {
    ju_AbstractCollection__init_($this);
},
ju_AbstractList_add = ($this, $e) => {
    $this.$add1($this.$size(), $e);
    return 1;
},
ju_AbstractList_iterator = $this => {
    return ju_AbstractList$1__init_0($this);
},
ju_AbstractList_indexOf = ($this, $o) => {
    let $sz, $i;
    $sz = $this.$size();
    $i = 0;
    while (true) {
        if ($i >= $sz)
            return (-1);
        if (ju_Objects_equals($o, $this.$get($i)))
            break;
        $i = $i + 1 | 0;
    }
    return $i;
},
ju_AbstractList_listIterator = ($this, $index) => {
    return ju_AbstractList$TListIteratorImpl__init_0($this, $index, $this.$modCount, $this.$size());
},
ju_AbstractList_subList = ($this, $fromIndex, $toIndex) => {
    if ($fromIndex > $toIndex)
        $rt_throw(jl_IllegalArgumentException__init_());
    if ($fromIndex >= 0 && $toIndex <= $this.$size()) {
        if (!$rt_isInstance($this, ju_RandomAccess))
            return ju_AbstractList$SubAbstractList__init_0($this, $fromIndex, $toIndex);
        return ju_AbstractList$SubAbstractListRandomAccess__init_0($this, $fromIndex, $toIndex);
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_RandomAccess = $rt_classWithoutFields(0),
ju_TemplateCollections$AbstractImmutableList = $rt_classWithoutFields(ju_AbstractList),
ju_TemplateCollections$AbstractImmutableList__init_ = $this => {
    ju_AbstractList__init_($this);
},
ju_Collections$3 = $rt_classWithoutFields(ju_TemplateCollections$AbstractImmutableList),
ju_Collections$3__init_ = $this => {
    ju_TemplateCollections$AbstractImmutableList__init_($this);
},
ju_Collections$3__init_0 = () => {
    let var_0 = new ju_Collections$3();
    ju_Collections$3__init_(var_0);
    return var_0;
};
function jur_CharClass$9() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz = null;
    a.$val$curAlt8 = 0;
    a.$this$06 = null;
}
let jur_CharClass$9__init_ = ($this, $this$0, var$2, var$3) => {
    $this.$this$06 = $this$0;
    $this.$val$clazz = var$2;
    $this.$val$curAlt8 = var$3;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$9__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_CharClass$9();
    jur_CharClass$9__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_CharClass$9_contains = ($this, $ch) => {
    return !$this.$val$clazz.$contains($ch) && !($this.$val$curAlt8 ^ $this.$this$06.$bits.$get3($ch)) ? 0 : 1;
},
ju_Collections$4 = $rt_classWithoutFields(),
ju_Collections$4__init_ = $this => {
    jl_Object__init_($this);
},
ju_Collections$4__init_0 = () => {
    let var_0 = new ju_Collections$4();
    ju_Collections$4__init_(var_0);
    return var_0;
},
jl_Character = $rt_classWithoutFields(),
jl_Character_TYPE = null,
jl_Character_digitMapping = null,
jl_Character_upperCaseMapping = null,
jl_Character_lowerCaseMapping = null,
jl_Character_classMapping = null,
jl_Character_characterCache = null,
jl_Character_$$metadata$$0 = null,
jl_Character_$$metadata$$1 = null,
jl_Character_$$metadata$$3 = null,
jl_Character_$$metadata$$4 = null,
jl_Character_$callClinit = () => {
    jl_Character_$callClinit = $rt_eraseClinit(jl_Character);
    jl_Character__clinit_();
},
jl_Character_toString = $c => {
    let var$2, var$3;
    jl_Character_$callClinit();
    var$2 = new jl_String;
    var$3 = $rt_createCharArray(1);
    var$3.data[0] = $c;
    jl_String__init_1(var$2, var$3);
    return var$2;
},
jl_Character_isValidCodePoint = $codePoint => {
    jl_Character_$callClinit();
    return $codePoint >= 0 && $codePoint <= 1114111 ? 1 : 0;
},
jl_Character_isBmpCodePoint = $codePoint => {
    jl_Character_$callClinit();
    return $codePoint > 0 && $codePoint <= 65535 ? 1 : 0;
},
jl_Character_isSupplementaryCodePoint = $codePoint => {
    jl_Character_$callClinit();
    return $codePoint >= 65536 && $codePoint <= 1114111 ? 1 : 0;
},
jl_Character_isHighSurrogate = $ch => {
    jl_Character_$callClinit();
    return ($ch & 64512) != 55296 ? 0 : 1;
},
jl_Character_isLowSurrogate = $ch => {
    jl_Character_$callClinit();
    return ($ch & 64512) != 56320 ? 0 : 1;
},
jl_Character_isSurrogate = $ch => {
    jl_Character_$callClinit();
    return !jl_Character_isHighSurrogate($ch) && !jl_Character_isLowSurrogate($ch) ? 0 : 1;
},
jl_Character_isSurrogatePair = ($high, $low) => {
    jl_Character_$callClinit();
    return jl_Character_isHighSurrogate($high) && jl_Character_isLowSurrogate($low) ? 1 : 0;
},
jl_Character_toCodePoint = ($high, $low) => {
    jl_Character_$callClinit();
    return (($high & 1023) << 10 | $low & 1023) + 65536 | 0;
},
jl_Character_codePointAt = ($a, $index) => {
    jl_Character_$callClinit();
    return jl_Character_codePointAt0($a, $index, $a.data.length);
},
jl_Character_codePointAt0 = ($a, $index, $limit) => {
    let var$4, var$5;
    jl_Character_$callClinit();
    if ($index < $limit && $index >= 0) {
        var$4 = $a.data;
        if ($limit <= var$4.length) {
            if ($index < ($limit - 1 | 0) && jl_Character_isHighSurrogate(var$4[$index])) {
                var$5 = $index + 1 | 0;
                if (jl_Character_isLowSurrogate(var$4[var$5]))
                    return jl_Character_toCodePoint(var$4[$index], var$4[var$5]);
            }
            return var$4[$index];
        }
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
jl_Character_highSurrogate = $codePoint => {
    let var$2;
    jl_Character_$callClinit();
    var$2 = $codePoint - 65536 | 0;
    return (55296 | var$2 >> 10 & 1023) & 65535;
},
jl_Character_lowSurrogate = $codePoint => {
    jl_Character_$callClinit();
    return (56320 | $codePoint & 1023) & 65535;
},
jl_Character_toLowerCase = $ch => {
    jl_Character_$callClinit();
    return jl_Character_toLowerCase0($ch) & 65535;
},
jl_Character_toLowerCase0 = $ch => {
    jl_Character_$callClinit();
    return jl_Character_mapChar(jl_Character_getLowerCaseMapping(), $ch);
},
jl_Character_getLowerCaseMapping = () => {
    let var$1;
    jl_Character_$callClinit();
    if (jl_Character_lowerCaseMapping === null) {
        var$1 = otciu_UnicodeHelper_decodeCaseMapping(((jl_Character_acquireLowerCaseMapping()).value !== null ? $rt_str((jl_Character_acquireLowerCaseMapping()).value) : null));
        jl_Character_lowerCaseMapping = otciu_UnicodeHelper_createCharMapping(var$1);
    }
    return jl_Character_lowerCaseMapping;
},
jl_Character_acquireLowerCaseMapping = () => {
    jl_Character_$callClinit();
    if (jl_Character_$$metadata$$0 === null)
        jl_Character_$$metadata$$0 = jl_Character_acquireLowerCaseMapping$$create();
    return jl_Character_$$metadata$$0;
},
jl_Character_toUpperCase = $ch => {
    jl_Character_$callClinit();
    return jl_Character_toUpperCase0($ch) & 65535;
},
jl_Character_toUpperCase0 = $codePoint => {
    jl_Character_$callClinit();
    return jl_Character_mapChar(jl_Character_getUpperCaseMapping(), $codePoint);
},
jl_Character_getUpperCaseMapping = () => {
    let var$1;
    jl_Character_$callClinit();
    if (jl_Character_upperCaseMapping === null) {
        var$1 = otciu_UnicodeHelper_decodeCaseMapping(((jl_Character_acquireUpperCaseMapping()).value !== null ? $rt_str((jl_Character_acquireUpperCaseMapping()).value) : null));
        jl_Character_upperCaseMapping = otciu_UnicodeHelper_createCharMapping(var$1);
    }
    return jl_Character_upperCaseMapping;
},
jl_Character_acquireUpperCaseMapping = () => {
    jl_Character_$callClinit();
    if (jl_Character_$$metadata$$1 === null)
        jl_Character_$$metadata$$1 = jl_Character_acquireUpperCaseMapping$$create();
    return jl_Character_$$metadata$$1;
},
jl_Character_mapChar = ($table, $codePoint) => {
    let $binSearchTable, $index, var$5, var$6;
    jl_Character_$callClinit();
    if ($codePoint < $table.$fastTable.data.length)
        return $codePoint + $table.$fastTable.data[$codePoint] | 0;
    $binSearchTable = $table.$binarySearchTable0;
    $index = jl_Character_binarySearchTable($binSearchTable, $codePoint);
    if ($index >= 0) {
        var$5 = $binSearchTable.data;
        var$6 = $index * 2 | 0;
        if (var$6 < var$5.length)
            return $codePoint + var$5[var$6 + 1 | 0] | 0;
    }
    return 0;
},
jl_Character_binarySearchTable = ($data, $key) => {
    let var$3, $l, $u, $i, $e, var$8;
    jl_Character_$callClinit();
    var$3 = $data.data;
    $l = 0;
    $u = (var$3.length / 2 | 0) - 1 | 0;
    while (true) {
        $i = ($l + $u | 0) / 2 | 0;
        $e = var$3[$i * 2 | 0];
        var$8 = $rt_compare($e, $key);
        if (!var$8)
            break;
        if (var$8 <= 0) {
            $l = $i + 1 | 0;
            if ($l > $u)
                return $i;
        } else {
            $u = $i - 1 | 0;
            if ($u < $l)
                return $u;
        }
    }
    return $i;
},
jl_Character_digit = ($ch, $radix) => {
    jl_Character_$callClinit();
    return jl_Character_digit0($ch, $radix);
},
jl_Character_digit0 = ($codePoint, $radix) => {
    let $d;
    jl_Character_$callClinit();
    if ($radix >= 2 && $radix <= 36) {
        $d = jl_Character_getNumericValue($codePoint);
        if ($d >= $radix)
            $d = (-1);
        return $d;
    }
    return (-1);
},
jl_Character_getNumericValue = $codePoint => {
    let $digitMapping, var$3, $l, $u, $idx, var$7, $val, var$9;
    jl_Character_$callClinit();
    $digitMapping = jl_Character_getDigitMapping();
    var$3 = $digitMapping.data;
    $l = 0;
    $u = (var$3.length / 2 | 0) - 1 | 0;
    while ($u >= $l) {
        $idx = ($l + $u | 0) / 2 | 0;
        var$7 = $idx * 2 | 0;
        $val = var$3[var$7];
        var$9 = $rt_compare($codePoint, $val);
        if (var$9 > 0)
            $l = $idx + 1 | 0;
        else {
            if (var$9 >= 0)
                return var$3[var$7 + 1 | 0];
            $u = $idx - 1 | 0;
        }
    }
    return (-1);
},
jl_Character_forDigit = ($digit, $radix) => {
    jl_Character_$callClinit();
    if ($radix >= 2 && $radix <= 36 && $digit >= 0 && $digit < $radix)
        return $digit < 10 ? (48 + $digit | 0) & 65535 : ((97 + $digit | 0) - 10 | 0) & 65535;
    return 0;
},
jl_Character_isDigit = $codePoint => {
    jl_Character_$callClinit();
    return jl_Character_getType($codePoint) != 9 ? 0 : 1;
},
jl_Character_getDigitMapping = () => {
    jl_Character_$callClinit();
    if (jl_Character_digitMapping === null)
        jl_Character_digitMapping = otciu_UnicodeHelper_decodeIntPairsDiff(((jl_Character_obtainDigitMapping()).value !== null ? $rt_str((jl_Character_obtainDigitMapping()).value) : null));
    return jl_Character_digitMapping;
},
jl_Character_obtainDigitMapping = () => {
    jl_Character_$callClinit();
    if (jl_Character_$$metadata$$3 === null)
        jl_Character_$$metadata$$3 = jl_Character_obtainDigitMapping$$create();
    return jl_Character_$$metadata$$3;
},
jl_Character_getClasses = () => {
    jl_Character_$callClinit();
    if (jl_Character_classMapping === null)
        jl_Character_classMapping = otciu_UnicodeHelper_extractRle(((jl_Character_obtainClasses()).value !== null ? $rt_str((jl_Character_obtainClasses()).value) : null));
    return jl_Character_classMapping;
},
jl_Character_obtainClasses = () => {
    jl_Character_$callClinit();
    if (jl_Character_$$metadata$$4 === null)
        jl_Character_$$metadata$$4 = jl_Character_obtainClasses$$create();
    return jl_Character_$$metadata$$4;
};
let jl_Character_toChars = $codePoint => {
    let var$2, var$3;
    jl_Character_$callClinit();
    if (!jl_Character_isValidCodePoint($codePoint))
        $rt_throw(jl_IllegalArgumentException__init_());
    if ($codePoint < 65536) {
        var$2 = $rt_createCharArray(1);
        var$2.data[0] = $codePoint & 65535;
        return var$2;
    }
    var$2 = $rt_createCharArray(2);
    var$3 = var$2.data;
    var$3[0] = jl_Character_highSurrogate($codePoint);
    var$3[1] = jl_Character_lowSurrogate($codePoint);
    return var$2;
},
jl_Character_isISOControl = $codePoint => {
    let var$2;
    jl_Character_$callClinit();
    a: {
        b: {
            if (!($codePoint >= 0 && $codePoint <= 31)) {
                if ($codePoint < 127)
                    break b;
                if ($codePoint > 159)
                    break b;
            }
            var$2 = 1;
            break a;
        }
        var$2 = 0;
    }
    return var$2;
},
jl_Character_getType0 = $c => {
    jl_Character_$callClinit();
    return jl_Character_getType($c);
},
jl_Character_getType = $codePoint => {
    let $classes, var$3, $l, $u, $i, $range;
    jl_Character_$callClinit();
    if (jl_Character_isBmpCodePoint($codePoint) && jl_Character_isSurrogate($codePoint & 65535))
        return 19;
    $classes = jl_Character_getClasses();
    var$3 = $classes.data;
    $l = 0;
    $u = var$3.length - 1 | 0;
    while ($l <= $u) {
        $i = ($l + $u | 0) / 2 | 0;
        $range = var$3[$i];
        if ($codePoint >= $range.$end2)
            $l = $i + 1 | 0;
        else {
            if ($codePoint >= $range.$start2)
                return $range.$data2.data[$codePoint - $range.$start2 | 0];
            $u = $i - 1 | 0;
        }
    }
    return 0;
},
jl_Character_isLowerCase = $codePoint => {
    jl_Character_$callClinit();
    return jl_Character_getType($codePoint) != 2 ? 0 : 1;
},
jl_Character_isUpperCase = $codePoint => {
    jl_Character_$callClinit();
    return jl_Character_getType($codePoint) != 1 ? 0 : 1;
},
jl_Character_isTitleCase = $codePoint => {
    jl_Character_$callClinit();
    return jl_Character_getType($codePoint) != 3 ? 0 : 1;
},
jl_Character_isDefined = $codePoint => {
    jl_Character_$callClinit();
    return !jl_Character_getType($codePoint) ? 0 : 1;
},
jl_Character_isLetter = $codePoint => {
    jl_Character_$callClinit();
    switch (jl_Character_getType($codePoint)) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            return 0;
    }
    return 1;
},
jl_Character_isLetterOrDigit0 = $ch => {
    jl_Character_$callClinit();
    return jl_Character_isLetterOrDigit($ch);
},
jl_Character_isLetterOrDigit = $codePoint => {
    jl_Character_$callClinit();
    a: {
        switch (jl_Character_getType($codePoint)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 9:
                break;
            case 6:
            case 7:
            case 8:
                break a;
            default:
                break a;
        }
        return 1;
    }
    return 0;
},
jl_Character_isJavaIdentifierStart = $codePoint => {
    jl_Character_$callClinit();
    a: {
        switch (jl_Character_getType($codePoint)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 10:
            case 23:
            case 26:
                break;
            case 6:
            case 7:
            case 8:
            case 9:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 24:
            case 25:
                break a;
            default:
                break a;
        }
        return 1;
    }
    return jl_Character_isIdentifierIgnorable($codePoint);
},
jl_Character_isJavaIdentifierPart = $codePoint => {
    jl_Character_$callClinit();
    a: {
        switch (jl_Character_getType($codePoint)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 8:
            case 9:
            case 10:
            case 23:
            case 26:
                break;
            case 7:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 24:
            case 25:
                break a;
            default:
                break a;
        }
        return 1;
    }
    return jl_Character_isIdentifierIgnorable($codePoint);
},
jl_Character_isUnicodeIdentifierStart = $codePoint => {
    jl_Character_$callClinit();
    a: {
        switch (jl_Character_getType($codePoint)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 10:
                break;
            case 6:
            case 7:
            case 8:
            case 9:
                break a;
            default:
                break a;
        }
        return 1;
    }
    return jl_Character_isIdentifierIgnorable($codePoint);
},
jl_Character_isUnicodeIdentifierPart = $codePoint => {
    jl_Character_$callClinit();
    a: {
        switch (jl_Character_getType($codePoint)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 8:
            case 9:
            case 10:
            case 23:
                break;
            case 7:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
                break a;
            default:
                break a;
        }
        return 1;
    }
    return jl_Character_isIdentifierIgnorable($codePoint);
},
jl_Character_isIdentifierIgnorable = $codePoint => {
    jl_Character_$callClinit();
    a: {
        if (!($codePoint >= 0 && $codePoint <= 8) && !($codePoint >= 14 && $codePoint <= 27)) {
            if ($codePoint < 127)
                break a;
            if ($codePoint > 159)
                break a;
        }
        return 1;
    }
    return jl_Character_getType($codePoint) != 16 ? 0 : 1;
},
jl_Character_isSpaceChar = $codePoint => {
    jl_Character_$callClinit();
    switch (jl_Character_getType($codePoint)) {
        case 12:
        case 13:
        case 14:
            break;
        default:
            return 0;
    }
    return 1;
},
jl_Character_isWhitespace0 = $ch => {
    jl_Character_$callClinit();
    return jl_Character_isWhitespace($ch);
},
jl_Character_isWhitespace = $codePoint => {
    jl_Character_$callClinit();
    switch ($codePoint) {
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 28:
        case 29:
        case 30:
        case 31:
            break;
        case 160:
        case 8199:
        case 8239:
            return 0;
        default:
            return jl_Character_isSpaceChar($codePoint);
    }
    return 1;
},
jl_Character__clinit_ = () => {
    jl_Character_TYPE = $rt_cls($rt_charcls);
    jl_Character_characterCache = $rt_createArray(jl_Character, 128);
},
jl_Character_acquireLowerCaseMapping$$create = () => {
    return {"value" : "NY  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
    + "%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
    + "# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%p kB#oq-&# _?gejg#A1 a$#%# -mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%"
    + "# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
    + "#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%"
    + "# #%# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# #$$r#%# #%# #%# #%# #%# #%# #%# #%# #P6r#}!rI )%# :GL#) i,5F#U TUg#r {%g#r >\'c#p Lnk%F# .\'F#S HB#F#b o@5F#b F#2#W 4Z;%# /%# #%# %%# \'%# M%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# u.#N#f "};
},
jl_Character_acquireUpperCaseMapping$$create = () => {
    return {"value" : "L[  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/#N6r# %_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
    + " #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3#!$r#:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# #{!r# ){!r#F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# "
    + "#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d# #\'- (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
    + "\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D4"
    + "5#845# #\'# #\'# #\'# -\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
    + " #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# U\'# REJ#% -Dr# Yiejg# e*5H#U eUi#r {%i#r <\'e#t {nm%:# V%H#^ >B#H#b o@5H#b <#4#P# eV;\'# /\'# #\'# %\'# \'\'# M\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# Z0#P#f "};
},
jl_Character_obtainDigitMapping$$create = () => {
    return {"value" : "6G*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
    + "%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
    + "%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%_fG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%B\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%oYG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%F%G%%%%%%%%%%%%%%%%%%Z?G%%%%%%%%%%%%%%%%%%ow?G%%%%%%%%%%%%%%%%%%s4%G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%"
    + "%%%%s+G%%%%%%%%%%%%%%%%%%:OG%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%N&OG%%%%%%%%%%%%%%%%%%VZ%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%k5G%%%%%%%%%%%%%%%%%%.lG%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};
},
jl_Character_obtainClasses$$create = () => {
    return {"value" : "PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!CgF#C;E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!"
    + "#!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BG E#Y\'CJ95E#^#; GN5\'9G#9G#9G$A\'F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91Y$FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,A&F9<F(Q#A&G*FJ%G91GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I#\'F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'& G#) F\'A%F#A#F7 F( F# F"
    + "# F#A#\' I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A&G%)A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A#\'&G$I% G$ G%A(G# F$ F#A#F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A&F$ F#G#A#J+ F#)A-G#I#F* F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\' \'I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G( J+A#F%AA&^$Y0=9^$G#^\'J"
    + "+L+=\'=\'=\'6767I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F3G$)A*F4G#)Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1\'J+A\'FD%FWA\'F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(GSA0G%)FP\')G&)\'I&\'I#F) Y#J+Y(^+G*^*Y$G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y"
    + "%FEI)G)I#G#A$Y&J+A$F$J+F?E\'Y#C*!#A&BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFGb!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67E2[FA,G."
    + "H%\'H$G-A0^#!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^jA7^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#b=+# BQCQ!#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y&%Y"
    + "+U#Y%596Y.^#Y$676767675A#Y#67A=^; b=:! A-b=7$ A;^1-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+FA^GA*=F1^@ L+^?L)=L0^AL+^HL0b= & b& H!^bb&  %b&6)!%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#!#!#B%#!#B##!#!#!#!#!#!#!#B#A%!A/E%!#&"
    + "E##F(\'F$\'F%\'F8I#G#)^%\'A$L\'^#;=A\'FUY%A)I#FSI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C*%]#B#A#b#1! FDI#\'I#\'I#9)\'A#J+A\'b&EO#A-F8A%FRA%b4 A b3 E!b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]2^1b&L& 76^1Fb^#FW^)AAF-;^$G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F$A$[#:<=[# "
    + "=Z%^#A+Q$^#A#F- F; F4 F# F0A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^.A$=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9B, B0 B( B# C, C0 C( C#A$FUA-b&X% A*F7A+F)A9E\' EK E/AbF\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9F;AGFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+A\'J+F%%&B7A$G&5%C7A)Z#b 1$ L@ FK G#5A#F#A1F$%F# ]#G&9^)F7 G1F>L+&A)F7G,L%Y&A7F3G%Y%AGF6L(A5F8A*)\')FVG0Y(A%L5J+\'F#G#&"
    + "A*G$)FNI$G%I#G#Y#1Y%\'A+1A#F:A(J+A\'G$FEG&)G) J+Y%&I#&A)FD\'Y#&A*G#)FQI$G*I#F%Y%G%9)\'J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'F#\'A`F( & F% F0 F+9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&A,F+ &A#& FG &I$G\' )A#) I% I#\')\'&\'&Y# Y#A)G#A>FVI$G)I#G$)\'F%Y&J+Y# 9\'F$A?FQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&9A\'J+A\'J5A=F<A#\')\'I#G%)G&A%J+L#Y$=F(b Z# FMI$G*)G#9b E! BACAJ+L*A-F)A#&A#F) F# F9I\' I#A#G#)\'&)&)\'Y$A*J+AhF)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)"
    + "&G\'I#G$FOG.)G#Y$&Y&A.FkA(Y+&b 6! \')G$)\')b 9! FB9A/J+A\'F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+A\'FJ%F#A%J+b W$ F4G#I#Y#A(G#&)F. FCI#G&A$I#\')\'Y.J+\'b 6! &A0L6^)[%^2A.9b&;/ b G! b+Q! Y&K,b&%$ A-b+X% b *E b&B! Y#A.b&Q1 Q1\'F\'G0A+b&<` A&b&(* b ZK!F?G-I$G$J+b \'< b&Z) A(F@ J+A%Y#Fq J+A\'F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q\' E$FIE#Y$J+A\'F9\'F%\'A#J+b 7# BACAL8Y%A&B:A#C:AMFmA%\'&IXA(G%E.AbE#9%\'A,I#E#K$A*b&<T!AEFCb @! b&T! A.b&3/ A/FTb >Y!E% E( E# b&J% A*&A>F$A#&A/F&"
    + "A(b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =_ b=Q$ J+^$A$b=U\' A\'^8 ^$A)Z$^1Z/A#GOA#G8A*b=U! A^b=W$ A+^HG#^^I#G$^$I\'Q)G)^#G(^?G%b=5# G$=A+I$^)G#^#)^AI#A`L5A-L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C> B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 1! Z>b D0 C+&CV!C(!#!C#!C$!C7!#!#!#!C$!#!#!#!#!#!#!#F#A/C(AWETG( G2A#G( G# G&A&E`AB\'b Q! FNA$G(E(A#J+A%&=b  & F?\'A2FMG%J+A&;b 1( F<%G%J+b 7$ F?G#&J+A%9b  $ F@ F$\'"
    + "F#\'F(G#F&\'A)&%b A$ F( F% F# F0 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN=L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.b=C# AX^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=;, A#^2A$^.A$b==$ A%^-A%^=A%^YA)^+A\'^IA)^?A#^-A%^#A/Z*AHb=9& A)^/A#^.A$^i =A$^3 ^.A$^-A&b=4#  b==! J+=b &1 b&  %b&  %b&A<#AAb&@%! b&/;!A#b&RU!A0b&O* b CG b&?) b C8 b&,.!A&b&K%#b   %b   %b \'O!b& R#b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   "
    + "%b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b !0 1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$b3  %b3  %b3  %b3`a$A#b3  %b3  %b3  %b3`a$"};
},
ju_Set = $rt_classWithoutFields(0),
ju_AbstractSet = $rt_classWithoutFields(ju_AbstractCollection),
ju_AbstractSet__init_ = $this => {
    ju_AbstractCollection__init_($this);
},
ju_TemplateCollections$AbstractImmutableSet = $rt_classWithoutFields(ju_AbstractSet),
ju_TemplateCollections$AbstractImmutableSet__init_ = $this => {
    ju_AbstractSet__init_($this);
},
ju_Collections$1 = $rt_classWithoutFields(ju_TemplateCollections$AbstractImmutableSet),
ju_Collections$1__init_ = $this => {
    ju_TemplateCollections$AbstractImmutableSet__init_($this);
},
ju_Collections$1__init_0 = () => {
    let var_0 = new ju_Collections$1();
    ju_Collections$1__init_(var_0);
    return var_0;
};
function jur_CICharSet() {
    let a = this; jur_LeafSet.call(a);
    a.$ch3 = 0;
    a.$supplement = 0;
}
let jur_CICharSet__init_0 = ($this, $ch) => {
    jur_LeafSet__init_($this);
    $this.$ch3 = $ch;
    $this.$supplement = jur_Pattern_getSupplement($ch);
},
jur_CICharSet__init_ = var_0 => {
    let var_1 = new jur_CICharSet();
    jur_CICharSet__init_0(var_1, var_0);
    return var_1;
},
jur_CICharSet_accepts = ($this, $strIndex, $testString) => {
    return $this.$ch3 != $testString.$charAt($strIndex) && $this.$supplement != $testString.$charAt($strIndex) ? (-1) : 1;
},
jur_CICharSet_getName = $this => {
    let var$1, var$2;
    var$1 = $this.$ch3;
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append(var$2, $rt_s(272)), var$1);
    return jl_StringBuilder_toString(var$2);
},
ju_TemplateCollections$AbstractImmutableMap = $rt_classWithoutFields(ju_AbstractMap),
ju_TemplateCollections$AbstractImmutableMap__init_ = $this => {
    ju_AbstractMap__init_($this);
},
ju_TemplateCollections$AbstractImmutableMap_put = ($this, $key, $value) => {
    $rt_throw(jl_UnsupportedOperationException__init_());
},
ju_Collections$2 = $rt_classWithoutFields(ju_TemplateCollections$AbstractImmutableMap),
ju_Collections$2__init_ = $this => {
    ju_TemplateCollections$AbstractImmutableMap__init_($this);
},
ju_Collections$2__init_0 = () => {
    let var_0 = new ju_Collections$2();
    ju_Collections$2__init_(var_0);
    return var_0;
};
function jur_SupplCharSet() {
    let a = this; jur_LeafSet.call(a);
    a.$high0 = 0;
    a.$low0 = 0;
    a.$ch1 = 0;
}
let jur_SupplCharSet__init_ = ($this, $ch) => {
    let $chUTF16, var$3;
    jur_LeafSet__init_($this);
    $this.$charCount0 = 2;
    $this.$ch1 = $ch;
    $chUTF16 = jl_Character_toChars($ch);
    var$3 = $chUTF16.data;
    $this.$high0 = var$3[0];
    $this.$low0 = var$3[1];
},
jur_SupplCharSet__init_0 = var_0 => {
    let var_1 = new jur_SupplCharSet();
    jur_SupplCharSet__init_(var_1, var_0);
    return var_1;
},
jur_SupplCharSet_accepts = ($this, $strIndex, $testString) => {
    let var$3, $high, $low;
    var$3 = $strIndex + 1 | 0;
    $high = $testString.$charAt($strIndex);
    $low = $testString.$charAt(var$3);
    return $this.$high0 == $high && $this.$low0 == $low ? 2 : (-1);
},
jur_SupplCharSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $testStr, $strLength, var$6, $ch;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
    $testStr = $testString;
    $strLength = $matchResult.$getRightBound();
    while ($strIndex < $strLength) {
        var$6 = $testStr.$indexOf1($this.$high0, $strIndex);
        if (var$6 < 0)
            return (-1);
        $strIndex = var$6 + 1 | 0;
        if ($strIndex >= $strLength)
            continue;
        $ch = $testStr.$charAt($strIndex);
        if ($this.$low0 == $ch && $this.$next1.$matches($strIndex + 1 | 0, $testString, $matchResult) >= 0)
            return $strIndex + (-1) | 0;
        $strIndex = $strIndex + 1 | 0;
    }
    return (-1);
},
jur_SupplCharSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $testStr, var$6, var$7;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
    $testStr = $testString;
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            var$6 = $testStr.$lastIndexOf1($this.$low0, $lastIndex);
            var$7 = var$6 + (-1) | 0;
            if (var$7 < 0)
                break a;
            if (var$7 < $strIndex)
                break a;
            if ($this.$high0 == $testStr.$charAt(var$7) && $this.$next1.$matches(var$7 + 2 | 0, $testString, $matchResult) >= 0)
                break;
            $lastIndex = var$7 + (-1) | 0;
        }
        return var$7;
    }
    return (-1);
},
jur_SupplCharSet_getName = $this => {
    let var$1, var$2, var$3;
    var$1 = $this.$high0;
    var$2 = $this.$low0;
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append0(var$3, var$1), var$2);
    return jl_StringBuilder_toString(var$3);
},
jur_SupplCharSet_getCodePoint = $this => {
    return $this.$ch1;
},
jur_SupplCharSet_first = ($this, $set) => {
    if ($set instanceof jur_SupplCharSet)
        return $set.$getCodePoint() != $this.$ch1 ? 0 : 1;
    if ($set instanceof jur_SupplRangeSet)
        return $set.$contains($this.$ch1);
    if ($set instanceof jur_CharSet)
        return 0;
    if (!($set instanceof jur_RangeSet))
        return 1;
    return 0;
},
otrr_ReflectionInfo = $rt_classWithoutFields();
function jur_AbstractCharClass$LazyCategoryScope() {
    let a = this; jur_AbstractCharClass$LazyCharClass.call(a);
    a.$category0 = 0;
    a.$mayContainSupplCodepoints2 = 0;
    a.$containsAllSurrogates = 0;
}
let jur_AbstractCharClass$LazyCategoryScope__init_1 = ($this, $cat, $mayContainSupplCodepoints) => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
    $this.$mayContainSupplCodepoints2 = $mayContainSupplCodepoints;
    $this.$category0 = $cat;
},
jur_AbstractCharClass$LazyCategoryScope__init_ = (var_0, var_1) => {
    let var_2 = new jur_AbstractCharClass$LazyCategoryScope();
    jur_AbstractCharClass$LazyCategoryScope__init_1(var_2, var_0, var_1);
    return var_2;
},
jur_AbstractCharClass$LazyCategoryScope__init_0 = ($this, $cat, $mayContainSupplCodepoints, $containsAllSurrogates) => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
    $this.$containsAllSurrogates = $containsAllSurrogates;
    $this.$mayContainSupplCodepoints2 = $mayContainSupplCodepoints;
    $this.$category0 = $cat;
},
jur_AbstractCharClass$LazyCategoryScope__init_2 = (var_0, var_1, var_2) => {
    let var_3 = new jur_AbstractCharClass$LazyCategoryScope();
    jur_AbstractCharClass$LazyCategoryScope__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_AbstractCharClass$LazyCategoryScope_computeValue = $this => {
    let $chCl;
    $chCl = jur_UnicodeCategoryScope__init_0($this.$category0);
    if ($this.$containsAllSurrogates)
        $chCl.$lowHighSurrogates.$set(0, 2048);
    $chCl.$mayContainSupplCodepoints0 = $this.$mayContainSupplCodepoints2;
    return $chCl;
},
jur_AbstractLineTerminator = $rt_classWithoutFields(),
jur_AbstractLineTerminator_unixLT = null,
jur_AbstractLineTerminator_unicodeLT = null,
jur_AbstractLineTerminator__init_ = $this => {
    jl_Object__init_($this);
},
jur_AbstractLineTerminator_getInstance = $flag => {
    if (!($flag & 1)) {
        if (jur_AbstractLineTerminator_unicodeLT !== null)
            return jur_AbstractLineTerminator_unicodeLT;
        jur_AbstractLineTerminator_unicodeLT = jur_AbstractLineTerminator$2__init_0();
        return jur_AbstractLineTerminator_unicodeLT;
    }
    if (jur_AbstractLineTerminator_unixLT !== null)
        return jur_AbstractLineTerminator_unixLT;
    jur_AbstractLineTerminator_unixLT = jur_AbstractLineTerminator$1__init_0();
    return jur_AbstractLineTerminator_unixLT;
};
function jur_AbstractCharClass$LazyJavaTitleCase$1() {
    jur_AbstractCharClass.call(this);
    this.$this$017 = null;
}
let jur_AbstractCharClass$LazyJavaTitleCase$1__init_ = ($this, $this$0) => {
    $this.$this$017 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaTitleCase$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaTitleCase$1();
    jur_AbstractCharClass$LazyJavaTitleCase$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaTitleCase$1_contains = ($this, $ch) => {
    return jl_Character_isTitleCase($ch);
},
jnc_StandardCharsets = $rt_classWithoutFields(),
jnc_StandardCharsets_UTF_8 = null,
jnc_StandardCharsets_US_ASCII = null,
jnc_StandardCharsets_ISO_8859_1 = null,
jnc_StandardCharsets_UTF_16 = null,
jnc_StandardCharsets_UTF_16BE = null,
jnc_StandardCharsets_UTF_16LE = null,
jnc_StandardCharsets_$callClinit = () => {
    jnc_StandardCharsets_$callClinit = $rt_eraseClinit(jnc_StandardCharsets);
    jnc_StandardCharsets__clinit_();
},
jnc_StandardCharsets__clinit_ = () => {
    jnci_UTF8Charset_$callClinit();
    jnc_StandardCharsets_UTF_8 = jnci_UTF8Charset_INSTANCE;
    jnc_StandardCharsets_US_ASCII = jnci_AsciiCharset__init_0();
    jnc_StandardCharsets_ISO_8859_1 = jnci_Iso8859Charset__init_0();
    jnc_StandardCharsets_UTF_16 = jnci_UTF16Charset__init_($rt_s(273), 1, 0);
    jnc_StandardCharsets_UTF_16BE = jnci_UTF16Charset__init_($rt_s(274), 0, 0);
    jnc_StandardCharsets_UTF_16LE = jnci_UTF16Charset__init_($rt_s(275), 0, 1);
},
ju_Collections$_clinit_$lambda$_59_0 = $rt_classWithoutFields(),
ju_Collections$_clinit_$lambda$_59_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
ju_Collections$_clinit_$lambda$_59_0__init_0 = () => {
    let var_0 = new ju_Collections$_clinit_$lambda$_59_0();
    ju_Collections$_clinit_$lambda$_59_0__init_(var_0);
    return var_0;
};
function jur_AbstractCharClass$LazyJavaMirrored$1() {
    jur_AbstractCharClass.call(this);
    this.$this$024 = null;
}
let jur_AbstractCharClass$LazyJavaMirrored$1__init_ = ($this, $this$0) => {
    $this.$this$024 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaMirrored$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaMirrored$1();
    jur_AbstractCharClass$LazyJavaMirrored$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaMirrored$1_contains = ($this, $ch) => {
    return 0;
};
function jnc_UnsupportedCharsetException() {
    jl_IllegalArgumentException.call(this);
    this.$charsetName0 = null;
}
let jnc_UnsupportedCharsetException__init_ = ($this, $charsetName) => {
    jl_IllegalArgumentException__init_2($this);
    $this.$charsetName0 = $charsetName;
},
jnc_UnsupportedCharsetException__init_0 = var_0 => {
    let var_1 = new jnc_UnsupportedCharsetException();
    jnc_UnsupportedCharsetException__init_(var_1, var_0);
    return var_1;
};
function jl_Enum() {
    let a = this; jl_Object.call(a);
    a.$name0 = null;
    a.$ordinal0 = 0;
}
let jl_Enum__init_ = ($this, $name, $ordinal) => {
    jl_Object__init_($this);
    $this.$name0 = $name;
    $this.$ordinal0 = $ordinal;
},
jl_Enum_name = $this => {
    return $this.$name0;
},
jl_Enum_ordinal = $this => {
    return $this.$ordinal0;
},
jl_Enum_toString = $this => {
    return $this.$name0.$toString();
},
jl_Enum_valueOf = ($enumType, $name) => {
    let $constants, var$4, var$5, var$6, var$7, var$8, var$9, var$10, $constant;
    $constants = jl_Class_getEnumConstants($enumType);
    if ($constants === null)
        $rt_throw(jl_IllegalArgumentException__init_0($rt_s(276)));
    var$4 = $constants.data;
    var$5 = var$4.length;
    var$6 = 0;
    while (true) {
        if (var$6 >= var$5) {
            var$7 = new jl_IllegalArgumentException;
            var$8 = jl_String_valueOf($enumType);
            var$9 = jl_String_valueOf($name);
            var$10 = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$10, $rt_s(277)), var$8), $rt_s(278)), var$9), $rt_s(279));
            jl_IllegalArgumentException__init_1(var$7, jl_StringBuilder_toString(var$10));
            $rt_throw(var$7);
        }
        $constant = var$4[var$6];
        if ((jl_Enum_name($constant)).$equals($name))
            break;
        var$6 = var$6 + 1 | 0;
    }
    return $constant;
};
function m_AlienFormationsLibrary$Direction() {
    let a = this; jl_Enum.call(a);
    a.$dx = 0;
    a.$dy = 0;
}
let m_AlienFormationsLibrary$Direction_D = null,
m_AlienFormationsLibrary$Direction_U = null,
m_AlienFormationsLibrary$Direction_L = null,
m_AlienFormationsLibrary$Direction_R = null,
m_AlienFormationsLibrary$Direction_DR = null,
m_AlienFormationsLibrary$Direction_DL = null,
m_AlienFormationsLibrary$Direction_UR = null,
m_AlienFormationsLibrary$Direction_UL = null,
m_AlienFormationsLibrary$Direction_S = null,
m_AlienFormationsLibrary$Direction_$VALUES = null,
m_AlienFormationsLibrary$Direction_$callClinit = () => {
    m_AlienFormationsLibrary$Direction_$callClinit = $rt_eraseClinit(m_AlienFormationsLibrary$Direction);
    m_AlienFormationsLibrary$Direction__clinit_();
},
m_AlienFormationsLibrary$Direction_valueOf = $name => {
    m_AlienFormationsLibrary$Direction_$callClinit();
    return jl_Enum_valueOf($rt_cls(m_AlienFormationsLibrary$Direction), $name);
},
m_AlienFormationsLibrary$Direction__init_0 = ($this, var$1, var$2, $dx, $dy) => {
    m_AlienFormationsLibrary$Direction_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$dx = $dx;
    $this.$dy = $dy;
},
m_AlienFormationsLibrary$Direction__init_ = (var_0, var_1, var_2, var_3) => {
    let var_4 = new m_AlienFormationsLibrary$Direction();
    m_AlienFormationsLibrary$Direction__init_0(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
m_AlienFormationsLibrary$Direction_getDx = $this => {
    return $this.$dx;
},
m_AlienFormationsLibrary$Direction_getDy = $this => {
    return $this.$dy;
},
m_AlienFormationsLibrary$Direction_$values = () => {
    let var$1, var$2;
    m_AlienFormationsLibrary$Direction_$callClinit();
    var$1 = $rt_createArray(m_AlienFormationsLibrary$Direction, 9);
    var$2 = var$1.data;
    var$2[0] = m_AlienFormationsLibrary$Direction_D;
    var$2[1] = m_AlienFormationsLibrary$Direction_U;
    var$2[2] = m_AlienFormationsLibrary$Direction_L;
    var$2[3] = m_AlienFormationsLibrary$Direction_R;
    var$2[4] = m_AlienFormationsLibrary$Direction_DR;
    var$2[5] = m_AlienFormationsLibrary$Direction_DL;
    var$2[6] = m_AlienFormationsLibrary$Direction_UR;
    var$2[7] = m_AlienFormationsLibrary$Direction_UL;
    var$2[8] = m_AlienFormationsLibrary$Direction_S;
    return var$1;
},
m_AlienFormationsLibrary$Direction__clinit_ = () => {
    m_AlienFormationsLibrary$Direction_D = m_AlienFormationsLibrary$Direction__init_($rt_s(89), 0, 0, 1);
    m_AlienFormationsLibrary$Direction_U = m_AlienFormationsLibrary$Direction__init_($rt_s(280), 1, 0, (-1));
    m_AlienFormationsLibrary$Direction_L = m_AlienFormationsLibrary$Direction__init_($rt_s(281), 2, (-1), 0);
    m_AlienFormationsLibrary$Direction_R = m_AlienFormationsLibrary$Direction__init_($rt_s(282), 3, 1, 0);
    m_AlienFormationsLibrary$Direction_DR = m_AlienFormationsLibrary$Direction__init_($rt_s(283), 4, 1, 1);
    m_AlienFormationsLibrary$Direction_DL = m_AlienFormationsLibrary$Direction__init_($rt_s(284), 5, (-1), 1);
    m_AlienFormationsLibrary$Direction_UR = m_AlienFormationsLibrary$Direction__init_($rt_s(285), 6, 1, (-1));
    m_AlienFormationsLibrary$Direction_UL = m_AlienFormationsLibrary$Direction__init_($rt_s(286), 7, (-1), (-1));
    m_AlienFormationsLibrary$Direction_S = m_AlienFormationsLibrary$Direction__init_($rt_s(87), 8, 0, 0);
    m_AlienFormationsLibrary$Direction_$VALUES = m_AlienFormationsLibrary$Direction_$values();
};
function jur_AbstractCharClass$LazyJavaISOControl$1() {
    jur_AbstractCharClass.call(this);
    this.$this$038 = null;
}
let jur_AbstractCharClass$LazyJavaISOControl$1__init_ = ($this, $this$0) => {
    $this.$this$038 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaISOControl$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaISOControl$1();
    jur_AbstractCharClass$LazyJavaISOControl$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaISOControl$1_contains = ($this, $ch) => {
    return jl_Character_isISOControl($ch);
};
function jur_UEOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter3 = 0;
}
let jur_UEOLSet__init_ = ($this, $counter) => {
    jur_AbstractSet__init_($this);
    $this.$consCounter3 = $counter;
},
jur_UEOLSet__init_0 = var_0 => {
    let var_1 = new jur_UEOLSet();
    jur_UEOLSet__init_(var_1, var_0);
    return var_1;
},
jur_UEOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $rightBound;
    $rightBound = !$matchResult.$hasAnchoringBounds() ? $testString.$length() : $matchResult.$getRightBound();
    if ($strIndex >= $rightBound) {
        $matchResult.$setConsumed($this.$consCounter3, 0);
        return $this.$next1.$matches($strIndex, $testString, $matchResult);
    }
    if (($rightBound - $strIndex | 0) == 1 && $testString.$charAt($strIndex) == 10) {
        $matchResult.$setConsumed($this.$consCounter3, 1);
        return $this.$next1.$matches($strIndex + 1 | 0, $testString, $matchResult);
    }
    return (-1);
},
jur_UEOLSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !$matchResult.$getConsumed($this.$consCounter3) ? 0 : 1;
    $matchResult.$setConsumed($this.$consCounter3, (-1));
    return $res;
},
jur_UEOLSet_getName = $this => {
    return $rt_s(287);
},
WebMain$onImagesLoaded$lambda$_3_0 = $rt_classWithoutFields(),
WebMain$onImagesLoaded$lambda$_3_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
WebMain$onImagesLoaded$lambda$_3_0__init_0 = () => {
    let var_0 = new WebMain$onImagesLoaded$lambda$_3_0();
    WebMain$onImagesLoaded$lambda$_3_0__init_(var_0);
    return var_0;
},
WebMain$onImagesLoaded$lambda$_3_0_onAnimationFrame = (var$0, var$1) => {
    WebMain_loop(var$1);
},
WebMain$onImagesLoaded$lambda$_3_0_onAnimationFrame$exported$0 = (var$1, var$2) => {
    let var$3;
    var$3 = var$2;
    var$1.$onAnimationFrame(var$3);
};
function jur_UCICharSet() {
    jur_LeafSet.call(this);
    this.$ch2 = 0;
}
let jur_UCICharSet__init_ = ($this, $ch) => {
    jur_LeafSet__init_($this);
    $this.$ch2 = jl_Character_toLowerCase(jl_Character_toUpperCase($ch));
},
jur_UCICharSet__init_0 = var_0 => {
    let var_1 = new jur_UCICharSet();
    jur_UCICharSet__init_(var_1, var_0);
    return var_1;
},
jur_UCICharSet_accepts = ($this, $strIndex, $testString) => {
    return $this.$ch2 != jl_Character_toLowerCase(jl_Character_toUpperCase($testString.$charAt($strIndex))) ? (-1) : 1;
},
jur_UCICharSet_getName = $this => {
    let var$1, var$2;
    var$1 = $this.$ch2;
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append(var$2, $rt_s(288)), var$1);
    return jl_StringBuilder_toString(var$2);
},
jnci_Iso8859Charset = $rt_classWithoutFields(jnc_Charset),
jnci_Iso8859Charset__init_ = $this => {
    jnc_Charset__init_($this, $rt_s(289), $rt_createArray(jl_String, 0));
},
jnci_Iso8859Charset__init_0 = () => {
    let var_0 = new jnci_Iso8859Charset();
    jnci_Iso8859Charset__init_(var_0);
    return var_0;
},
jnci_Iso8859Charset_newDecoder = $this => {
    return jnci_Iso8859Decoder__init_0($this);
};
function jur_AtomicFSet() {
    jur_FSet.call(this);
    this.$index5 = 0;
}
let jur_AtomicFSet__init_ = ($this, $groupIndex) => {
    jur_FSet__init_($this, $groupIndex);
},
jur_AtomicFSet__init_0 = var_0 => {
    let var_1 = new jur_AtomicFSet();
    jur_AtomicFSet__init_(var_1, var_0);
    return var_1;
},
jur_AtomicFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $gr;
    $gr = $this.$getGroupIndex();
    $matchResult.$setConsumed($gr, $stringIndex - $matchResult.$getConsumed($gr) | 0);
    $this.$index5 = $stringIndex;
    return $stringIndex;
},
jur_AtomicFSet_getIndex = $this => {
    return $this.$index5;
},
jur_AtomicFSet_getName = $this => {
    return $rt_s(290);
},
jur_AtomicFSet_hasConsumed = ($this, $mr) => {
    return 0;
};
function jur_LowSurrogateCharSet() {
    jur_JointSet.call(this);
    this.$low = 0;
}
let jur_LowSurrogateCharSet__init_0 = ($this, $low) => {
    jur_JointSet__init_($this);
    $this.$low = $low;
},
jur_LowSurrogateCharSet__init_ = var_0 => {
    let var_1 = new jur_LowSurrogateCharSet();
    jur_LowSurrogateCharSet__init_0(var_1, var_0);
    return var_1;
},
jur_LowSurrogateCharSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_LowSurrogateCharSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4, $low, $high;
    var$4 = $stringIndex + 1 | 0;
    if (var$4 > $matchResult.$getRightBound()) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    $low = $testString.$charAt($stringIndex);
    if ($stringIndex > $matchResult.$getLeftBound()) {
        $high = $testString.$charAt($stringIndex - 1 | 0);
        if (jl_Character_isHighSurrogate($high))
            return (-1);
    }
    if ($this.$low != $low)
        return (-1);
    return $this.$next1.$matches(var$4, $testString, $matchResult);
},
jur_LowSurrogateCharSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $testStr, $startStr, $strLength, var$7, var$8;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
    $testStr = $testString;
    $startStr = $matchResult.$getLeftBound();
    $strLength = $matchResult.$getRightBound();
    while (true) {
        if ($strIndex >= $strLength)
            return (-1);
        var$7 = $testStr.$indexOf1($this.$low, $strIndex);
        if (var$7 < 0)
            return (-1);
        if (var$7 > $startStr && jl_Character_isHighSurrogate($testStr.$charAt(var$7 - 1 | 0))) {
            $strIndex = var$7 + 1 | 0;
            continue;
        }
        var$8 = $this.$next1;
        $strIndex = var$7 + 1 | 0;
        if (var$8.$matches($strIndex, $testString, $matchResult) >= 0)
            break;
    }
    return var$7;
},
jur_LowSurrogateCharSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $startStr, $testStr, var$7;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
    $startStr = $matchResult.$getLeftBound();
    $testStr = $testString;
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            var$7 = $testStr.$lastIndexOf1($this.$low, $lastIndex);
            if (var$7 < 0)
                break a;
            if (var$7 < $strIndex)
                break a;
            if (var$7 > $startStr && jl_Character_isHighSurrogate($testStr.$charAt(var$7 - 1 | 0))) {
                $lastIndex = var$7 + (-2) | 0;
                continue;
            }
            if ($this.$next1.$matches(var$7 + 1 | 0, $testString, $matchResult) >= 0)
                break;
            $lastIndex = var$7 + (-1) | 0;
        }
        return var$7;
    }
    return (-1);
},
jur_LowSurrogateCharSet_getName = $this => {
    let var$1, var$2;
    var$1 = $this.$low;
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(var$2, var$1);
    return jl_StringBuilder_toString(var$2);
},
jur_LowSurrogateCharSet_first = ($this, $set) => {
    if ($set instanceof jur_CharSet)
        return 0;
    if ($set instanceof jur_RangeSet)
        return 0;
    if ($set instanceof jur_SupplRangeSet)
        return 0;
    if ($set instanceof jur_SupplCharSet)
        return 0;
    if ($set instanceof jur_HighSurrogateCharSet)
        return 0;
    if (!($set instanceof jur_LowSurrogateCharSet))
        return 1;
    return $set.$low != $this.$low ? 0 : 1;
},
jur_LowSurrogateCharSet_hasConsumed = ($this, $matchResult) => {
    return 1;
};
function jur_CompositeGroupQuantifierSet() {
    let a = this; jur_GroupQuantifierSet.call(a);
    a.$quantifier0 = null;
    a.$setCounter = 0;
}
let jur_CompositeGroupQuantifierSet__init_ = ($this, $quant, $innerSet, $next, $type, $setCounter) => {
    jur_GroupQuantifierSet__init_($this, $innerSet, $next, $type);
    $this.$quantifier0 = $quant;
    $this.$setCounter = $setCounter;
},
jur_CompositeGroupQuantifierSet__init_0 = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new jur_CompositeGroupQuantifierSet();
    jur_CompositeGroupQuantifierSet__init_(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
jur_CompositeGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $enterCounter, var$5, var$6, $nextIndex;
    $enterCounter = $matchResult.$getEnterCounter($this.$setCounter);
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($enterCounter >= $this.$quantifier0.$max1())
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    var$5 = $this.$setCounter;
    var$6 = $enterCounter + 1 | 0;
    $matchResult.$setEnterCounter(var$5, var$6);
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex >= 0) {
        $matchResult.$setEnterCounter($this.$setCounter, 0);
        return $nextIndex;
    }
    var$5 = $this.$setCounter;
    var$6 = var$6 + (-1) | 0;
    $matchResult.$setEnterCounter(var$5, var$6);
    if (var$6 >= $this.$quantifier0.$min1())
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $matchResult.$setEnterCounter($this.$setCounter, 0);
    return (-1);
},
jur_CompositeGroupQuantifierSet_getName = $this => {
    return $this.$quantifier0.$toString();
},
jur_RelCompositeGroupQuantifierSet = $rt_classWithoutFields(jur_CompositeGroupQuantifierSet),
jur_RelCompositeGroupQuantifierSet__init_ = ($this, $quant, $innerSet, $next, $type, $setCounter) => {
    jur_CompositeGroupQuantifierSet__init_($this, $quant, $innerSet, $next, $type, $setCounter);
},
jur_RelCompositeGroupQuantifierSet__init_0 = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new jur_RelCompositeGroupQuantifierSet();
    jur_RelCompositeGroupQuantifierSet__init_(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
jur_RelCompositeGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $enterCounter, $nextIndex;
    $enterCounter = $matchResult.$getEnterCounter($this.$setCounter);
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($enterCounter >= $this.$quantifier0.$max1()) {
        $matchResult.$setEnterCounter($this.$setCounter, 0);
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    }
    if ($enterCounter < $this.$quantifier0.$min1()) {
        $matchResult.$setEnterCounter($this.$setCounter, $enterCounter + 1 | 0);
        $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    } else {
        $nextIndex = $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if ($nextIndex >= 0) {
            $matchResult.$setEnterCounter($this.$setCounter, 0);
            return $nextIndex;
        }
        $matchResult.$setEnterCounter($this.$setCounter, $enterCounter + 1 | 0);
        $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    }
    return $nextIndex;
};
function ju_ArrayList() {
    let a = this; ju_AbstractList.call(a);
    a.$array0 = null;
    a.$size0 = 0;
}
let ju_ArrayList__init_3 = $this => {
    ju_ArrayList__init_1($this, 10);
},
ju_ArrayList__init_ = () => {
    let var_0 = new ju_ArrayList();
    ju_ArrayList__init_3(var_0);
    return var_0;
},
ju_ArrayList__init_1 = ($this, $initialCapacity) => {
    ju_AbstractList__init_($this);
    if ($initialCapacity >= 0) {
        $this.$array0 = $rt_createArray(jl_Object, $initialCapacity);
        return;
    }
    $rt_throw(jl_IllegalArgumentException__init_());
},
ju_ArrayList__init_4 = var_0 => {
    let var_1 = new ju_ArrayList();
    ju_ArrayList__init_1(var_1, var_0);
    return var_1;
},
ju_ArrayList__init_2 = ($this, $c) => {
    let $iter, $i;
    ju_ArrayList__init_1($this, $c.$size());
    $iter = $c.$iterator();
    $i = 0;
    while ($i < $this.$array0.data.length) {
        $this.$array0.data[$i] = $iter.$next();
        $i = $i + 1 | 0;
    }
    $this.$size0 = $this.$array0.data.length;
},
ju_ArrayList__init_0 = var_0 => {
    let var_1 = new ju_ArrayList();
    ju_ArrayList__init_2(var_1, var_0);
    return var_1;
},
ju_ArrayList_ensureCapacity = ($this, $minCapacity) => {
    let $newLength;
    if ($this.$array0.data.length < $minCapacity) {
        $newLength = $this.$array0.data.length >= 1073741823 ? 2147483647 : jl_Math_max($minCapacity, jl_Math_max($this.$array0.data.length * 2 | 0, 5));
        $this.$array0 = ju_Arrays_copyOf0($this.$array0, $newLength);
    }
},
ju_ArrayList_get = ($this, $index) => {
    ju_ArrayList_checkIndex($this, $index);
    return $this.$array0.data[$index];
},
ju_ArrayList_size = $this => {
    return $this.$size0;
},
ju_ArrayList_add = ($this, $element) => {
    let var$2, var$3;
    $this.$ensureCapacity($this.$size0 + 1 | 0);
    var$2 = $this.$array0.data;
    var$3 = $this.$size0;
    $this.$size0 = var$3 + 1 | 0;
    var$2[var$3] = $element;
    $this.$modCount = $this.$modCount + 1 | 0;
    return 1;
},
ju_ArrayList_add0 = ($this, $index, $element) => {
    let $i;
    ju_ArrayList_checkIndexForAdd($this, $index);
    $this.$ensureCapacity($this.$size0 + 1 | 0);
    $i = $this.$size0;
    while ($i > $index) {
        $this.$array0.data[$i] = $this.$array0.data[$i - 1 | 0];
        $i = $i + (-1) | 0;
    }
    $this.$array0.data[$index] = $element;
    $this.$size0 = $this.$size0 + 1 | 0;
    $this.$modCount = $this.$modCount + 1 | 0;
},
ju_ArrayList_remove = ($this, $i) => {
    let $old, var$3, var$4, $i_0;
    ju_ArrayList_checkIndex($this, $i);
    $old = $this.$array0.data[$i];
    $this.$size0 = $this.$size0 - 1 | 0;
    while ($i < $this.$size0) {
        var$3 = $this.$array0.data;
        var$4 = $this.$array0.data;
        $i_0 = $i + 1 | 0;
        var$3[$i] = var$4[$i_0];
        $i = $i_0;
    }
    $this.$array0.data[$this.$size0] = null;
    $this.$modCount = $this.$modCount + 1 | 0;
    return $old;
},
ju_ArrayList_remove0 = ($this, $o) => {
    let $index;
    $index = $this.$indexOf2($o);
    if ($index < 0)
        return 0;
    $this.$remove($index);
    return 1;
},
ju_ArrayList_checkIndex = ($this, $index) => {
    if ($index >= 0 && $index < $this.$size0)
        return;
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_ArrayList_checkIndexForAdd = ($this, $index) => {
    if ($index >= 0 && $index <= $this.$size0)
        return;
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_ArrayList_toString = $this => {
    let $length, $buffer, $i;
    if (!$this.$size0)
        return $rt_s(291);
    $length = $this.$size0 - 1 | 0;
    $buffer = jl_StringBuilder__init_0($this.$size0 * 16 | 0);
    $buffer.$append0(91);
    $i = 0;
    while ($i < $length) {
        ($buffer.$append($this.$array0.data[$i] === $this ? $rt_s(292) : $this.$array0.data[$i])).$append13($rt_s(293));
        $i = $i + 1 | 0;
    }
    $buffer.$append($this.$array0.data[$length] === $this ? $rt_s(292) : $this.$array0.data[$length]);
    return ($buffer.$append0(93)).$toString();
};
function jur_CompositeQuantifierSet() {
    jur_LeafQuantifierSet.call(this);
    this.$quantifier = null;
}
let jur_CompositeQuantifierSet__init_ = ($this, $quant, $innerSet, $next, $type) => {
    jur_LeafQuantifierSet__init_($this, $innerSet, $next, $type);
    $this.$quantifier = $quant;
},
jur_CompositeQuantifierSet__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CompositeQuantifierSet();
    jur_CompositeQuantifierSet__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CompositeQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $min, $max, $i, $shift;
    $min = $this.$quantifier.$min1();
    $max = $this.$quantifier.$max1();
    $i = 0;
    while (true) {
        if ($i >= $min) {
            a: {
                while ($i < $max) {
                    if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$getRightBound())
                        break a;
                    $shift = $this.$leaf.$accepts($stringIndex, $testString);
                    if ($shift < 1)
                        break a;
                    $stringIndex = $stringIndex + $shift | 0;
                    $i = $i + 1 | 0;
                }
            }
            while (true) {
                if ($i < $min)
                    return (-1);
                $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
                if ($shift >= 0)
                    break;
                $stringIndex = $stringIndex - $this.$leaf.$charCount() | 0;
                $i = $i + (-1) | 0;
            }
            return $shift;
        }
        if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$getRightBound()) {
            $matchResult.$hitEnd = 1;
            return (-1);
        }
        $shift = $this.$leaf.$accepts($stringIndex, $testString);
        if ($shift < 1)
            break;
        $stringIndex = $stringIndex + $shift | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_CompositeQuantifierSet_getName = $this => {
    return $this.$quantifier.$toString();
};
function jur_SupplRangeSet() {
    let a = this; jur_JointSet.call(a);
    a.$chars = null;
    a.$alt0 = 0;
}
let jur_SupplRangeSet__init_ = ($this, $cc) => {
    jur_JointSet__init_($this);
    $this.$chars = $cc.$getInstance();
    $this.$alt0 = $cc.$alt;
},
jur_SupplRangeSet__init_0 = var_0 => {
    let var_1 = new jur_SupplRangeSet();
    jur_SupplRangeSet__init_(var_1, var_0);
    return var_1;
},
jur_SupplRangeSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, var$5, $high, $offset, var$8, $low;
    $strLength = $matchResult.$getRightBound();
    if ($stringIndex < $strLength) {
        var$5 = $stringIndex + 1 | 0;
        $high = $testString.$charAt($stringIndex);
        if ($this.$contains($high)) {
            $offset = $this.$next1.$matches(var$5, $testString, $matchResult);
            if ($offset > 0)
                return $offset;
        }
        if (var$5 < $strLength) {
            var$8 = var$5 + 1 | 0;
            $low = $testString.$charAt(var$5);
            if (jl_Character_isSurrogatePair($high, $low) && $this.$contains(jl_Character_toCodePoint($high, $low)))
                return $this.$next1.$matches(var$8, $testString, $matchResult);
        }
    }
    return (-1);
},
jur_SupplRangeSet_getName = $this => {
    let var$1, var$2, var$3;
    var$1 = !$this.$alt0 ? $rt_s(45) : $rt_s(46);
    var$2 = $this.$chars.$toString();
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(47)), var$1), var$2);
    return jl_StringBuilder_toString(var$3);
},
jur_SupplRangeSet_contains = ($this, $ch) => {
    return $this.$chars.$contains($ch);
},
jur_SupplRangeSet_first = ($this, $set) => {
    if ($set instanceof jur_SupplCharSet)
        return jur_AbstractCharClass_intersects0($this.$chars, $set.$getCodePoint());
    if ($set instanceof jur_CharSet)
        return jur_AbstractCharClass_intersects0($this.$chars, $set.$getChar0());
    if ($set instanceof jur_SupplRangeSet)
        return jur_AbstractCharClass_intersects($this.$chars, $set.$chars);
    if (!($set instanceof jur_RangeSet))
        return 1;
    return jur_AbstractCharClass_intersects($this.$chars, $set.$getChars());
},
jur_SupplRangeSet_getChars = $this => {
    return $this.$chars;
},
jur_SupplRangeSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_SupplRangeSet_hasConsumed = ($this, $mr) => {
    return 1;
},
jur_RelAltGroupQuantifierSet = $rt_classWithoutFields(jur_AltGroupQuantifierSet),
jur_RelAltGroupQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_AltGroupQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_RelAltGroupQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_RelAltGroupQuantifierSet();
    jur_RelAltGroupQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_RelAltGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex;
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $nextIndex = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex < 0)
        $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    return $nextIndex;
};
function ju_AbstractList$SubAbstractList() {
    let a = this; ju_AbstractList.call(a);
    a.$fullList = null;
    a.$offset0 = 0;
    a.$size2 = 0;
}
let ju_AbstractList$SubAbstractList__init_ = ($this, $list, $start, $end) => {
    ju_AbstractList__init_($this);
    $this.$fullList = $list;
    $this.$modCount = $this.$fullList.$modCount;
    $this.$offset0 = $start;
    $this.$size2 = $end - $start | 0;
},
ju_AbstractList$SubAbstractList__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new ju_AbstractList$SubAbstractList();
    ju_AbstractList$SubAbstractList__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
ju_AbstractList$SubAbstractList_get = ($this, $location) => {
    if ($this.$modCount != $this.$fullList.$modCount)
        $rt_throw(ju_ConcurrentModificationException__init_());
    if (0 <= $location && $location < $this.$size2)
        return $this.$fullList.$get($location + $this.$offset0 | 0);
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_AbstractList$SubAbstractList_iterator = $this => {
    return $this.$listIterator(0);
},
ju_AbstractList$SubAbstractList_listIterator = ($this, $location) => {
    if ($this.$modCount != $this.$fullList.$modCount)
        $rt_throw(ju_ConcurrentModificationException__init_());
    if (0 <= $location && $location <= $this.$size2)
        return ju_AbstractList$SubAbstractList$SubAbstractListIterator__init_0($this.$fullList.$listIterator($location + $this.$offset0 | 0), $this, $this.$offset0, $this.$size2);
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
ju_AbstractList$SubAbstractList_size = $this => {
    if ($this.$modCount == $this.$fullList.$modCount)
        return $this.$size2;
    $rt_throw(ju_ConcurrentModificationException__init_());
},
ju_AbstractList$SubAbstractListRandomAccess = $rt_classWithoutFields(ju_AbstractList$SubAbstractList),
ju_AbstractList$SubAbstractListRandomAccess__init_ = ($this, $list, $start, $end) => {
    ju_AbstractList$SubAbstractList__init_($this, $list, $start, $end);
},
ju_AbstractList$SubAbstractListRandomAccess__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new ju_AbstractList$SubAbstractListRandomAccess();
    ju_AbstractList$SubAbstractListRandomAccess__init_(var_3, var_0, var_1, var_2);
    return var_3;
};
function jl_String() {
    jl_Object.call(this);
    this.$hashCode1 = 0;
}
let jl_String_EMPTY_CHARS = null,
jl_String_EMPTY = null,
jl_String_CASE_INSENSITIVE_ORDER = null,
jl_String_$callClinit = () => {
    jl_String_$callClinit = $rt_eraseClinit(jl_String);
    jl_String__clinit_();
},
jl_String__init_4 = $this => {
    jl_String_$callClinit();
    jl_Object__init_($this);
    $this.$nativeString = "";
},
jl_String__init_6 = () => {
    let var_0 = new jl_String();
    jl_String__init_4(var_0);
    return var_0;
},
jl_String__init_1 = ($this, $characters) => {
    let var$2;
    jl_String_$callClinit();
    var$2 = $characters.data;
    jl_Object__init_($this);
    $this.$nativeString = $rt_charArrayToString($characters.data, 0, var$2.length);
},
jl_String__init_ = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_1(var_1, var_0);
    return var_1;
},
jl_String__init_5 = (var$0, var$1) => {
    var$0.$nativeString = var$1;
},
jl_String__init_2 = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_5(var_1, var_0);
    return var_1;
},
jl_String__init_3 = (var$0, var$1, $offset, $count) => {
    let var$4;
    jl_String_$callClinit();
    var$4 = var$1.data;
    jl_Object__init_(var$0);
    ju_Objects_checkFromIndexSize($offset, $count, var$4.length);
    var$0.$nativeString = $rt_charArrayToString(var$1.data, $offset, $count);
},
jl_String__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jl_String();
    jl_String__init_3(var_3, var_0, var_1, var_2);
    return var_3;
},
jl_String_charAt = ($this, $index) => {
    if ($index >= 0 && $index < $this.$nativeString.length)
        return $this.$nativeString.charCodeAt($index);
    $rt_throw(jl_StringIndexOutOfBoundsException__init_());
},
jl_String_length = $this => {
    return $this.$nativeString.length;
},
jl_String_isEmpty = $this => {
    return $this.$nativeString.length ? 0 : 1;
},
jl_String_startsWith = ($this, $prefix, $toffset) => {
    let $i, var$4, var$5;
    if (($toffset + $prefix.$length() | 0) > $this.$length())
        return 0;
    $i = 0;
    while ($i < $prefix.$length()) {
        var$4 = $prefix.$charAt($i);
        var$5 = $toffset + 1 | 0;
        if (var$4 != $this.$charAt($toffset))
            return 0;
        $i = $i + 1 | 0;
        $toffset = var$5;
    }
    return 1;
},
jl_String_startsWith0 = ($this, $prefix) => {
    if ($this === $prefix)
        return 1;
    return $this.$startsWith0($prefix, 0);
},
jl_String_indexOf = ($this, $ch, $fromIndex) => {
    let $i, $bmpChar, $hi, $lo;
    $i = jl_Math_max(0, $fromIndex);
    if ($ch < 65536) {
        $bmpChar = $ch & 65535;
        while (true) {
            if ($i >= $this.$nativeString.length)
                return (-1);
            if ($this.$nativeString.charCodeAt($i) == $bmpChar)
                break;
            $i = $i + 1 | 0;
        }
        return $i;
    }
    $hi = jl_Character_highSurrogate($ch);
    $lo = jl_Character_lowSurrogate($ch);
    while (true) {
        if ($i >= ($this.$nativeString.length - 1 | 0))
            return (-1);
        if ($this.$nativeString.charCodeAt($i) == $hi && $this.$nativeString.charCodeAt(($i + 1 | 0)) == $lo)
            break;
        $i = $i + 1 | 0;
    }
    return $i;
},
jl_String_lastIndexOf = ($this, $ch, $fromIndex) => {
    let $i, $bmpChar, $hi, $lo, var$7;
    $i = jl_Math_min($fromIndex, $this.$length() - 1 | 0);
    if ($ch < 65536) {
        $bmpChar = $ch & 65535;
        while (true) {
            if ($i < 0)
                return (-1);
            if ($this.$nativeString.charCodeAt($i) == $bmpChar)
                break;
            $i = $i + (-1) | 0;
        }
        return $i;
    }
    $hi = jl_Character_highSurrogate($ch);
    $lo = jl_Character_lowSurrogate($ch);
    while (true) {
        if ($i < 1)
            return (-1);
        if ($this.$nativeString.charCodeAt($i) == $lo) {
            var$7 = $i - 1 | 0;
            if ($this.$nativeString.charCodeAt(var$7) == $hi)
                break;
        }
        $i = $i + (-1) | 0;
    }
    return var$7;
},
jl_String_indexOf1 = ($this, $str, $fromIndex) => {
    let $i, $toIndex, $j;
    $i = jl_Math_max(0, $fromIndex);
    $toIndex = $this.$length() - $str.$length() | 0;
    a: while (true) {
        if ($i > $toIndex)
            return (-1);
        $j = 0;
        while (true) {
            if ($j >= $str.$length())
                break a;
            if ($this.$charAt($i + $j | 0) != $str.$charAt($j))
                break;
            $j = $j + 1 | 0;
        }
        $i = $i + 1 | 0;
    }
    return $i;
},
jl_String_indexOf0 = ($this, $str) => {
    return $this.$indexOf0($str, 0);
},
jl_String_lastIndexOf0 = ($this, $str, $fromIndex) => {
    let $i, $j;
    $i = jl_Math_min($fromIndex, $this.$length() - $str.$length() | 0);
    a: while (true) {
        if ($i < 0)
            return (-1);
        $j = 0;
        while (true) {
            if ($j >= $str.$length())
                break a;
            if ($this.$charAt($i + $j | 0) != $str.$charAt($j))
                break;
            $j = $j + 1 | 0;
        }
        $i = $i + (-1) | 0;
    }
    return $i;
},
jl_String_substring = ($this, $beginIndex, $endIndex) => {
    let $length, var$4;
    $length = $this.$nativeString.length;
    var$4 = $rt_compare($beginIndex, $endIndex);
    if (!var$4)
        return jl_String_EMPTY;
    if (!$beginIndex && $endIndex == $length)
        return $this;
    if ($beginIndex >= 0 && var$4 <= 0 && $endIndex <= $length)
        return jl_String__init_2($this.$nativeString.substring($beginIndex, $endIndex));
    $rt_throw(jl_StringIndexOutOfBoundsException__init_());
},
jl_String_substring0 = ($this, $beginIndex) => {
    return $this.$substring($beginIndex, $this.$length());
},
jl_String_subSequence = ($this, $beginIndex, $endIndex) => {
    return $this.$substring($beginIndex, $endIndex);
},
jl_String_contains = ($this, $s) => {
    let $sz, $i, $j;
    $sz = $this.$length() - $s.$length() | 0;
    $i = 0;
    while ($i <= $sz) {
        $j = 0;
        while (true) {
            if ($j >= $s.$length())
                return 1;
            if ($this.$charAt($i + $j | 0) != $s.$charAt($j))
                break;
            $j = $j + 1 | 0;
        }
        $i = $i + 1 | 0;
    }
    return 0;
},
jl_String_trim = $this => {
    let $lower, $upper;
    $lower = 0;
    $upper = $this.$length() - 1 | 0;
    a: {
        while ($lower <= $upper) {
            if ($this.$charAt($lower) > 32)
                break a;
            $lower = $lower + 1 | 0;
        }
    }
    while ($lower <= $upper && $this.$charAt($upper) <= 32) {
        $upper = $upper + (-1) | 0;
    }
    return $this.$substring($lower, $upper + 1 | 0);
},
jl_String_toString = $this => {
    return $this;
},
jl_String_toCharArray = $this => {
    let $array, $i, var$3;
    $array = $rt_createCharArray($this.$nativeString.length);
    $i = 0;
    while (true) {
        var$3 = $array.data;
        if ($i >= var$3.length)
            break;
        var$3[$i] = $this.$charAt($i);
        $i = $i + 1 | 0;
    }
    return $array;
},
jl_String_valueOf = $obj => {
    jl_String_$callClinit();
    return $obj === null ? $rt_s(49) : $obj.$toString();
},
jl_String_valueOf0 = $i => {
    jl_String_$callClinit();
    return ((jl_StringBuilder__init_()).$append2($i)).$toString();
},
jl_String_equals = ($this, $other) => {
    let $str;
    if ($this === $other)
        return 1;
    if (!($other instanceof jl_String))
        return 0;
    $str = $other;
    return $this.$nativeString !== $str.$nativeString ? 0 : 1;
},
jl_String_hashCode = $this => {
    let $i;
    a: {
        if (!$this.$hashCode1) {
            $i = 0;
            while (true) {
                if ($i >= $this.$nativeString.length)
                    break a;
                $this.$hashCode1 = (31 * $this.$hashCode1 | 0) + $this.$nativeString.charCodeAt($i) | 0;
                $i = $i + 1 | 0;
            }
        }
    }
    return $this.$hashCode1;
},
jl_String_toUpperCase = $this => {
    let $upperCase;
    $upperCase = $this.$nativeString.toUpperCase();
    if ($upperCase !== $this.$nativeString)
        $this = jl_String__init_2($upperCase);
    return $this;
},
jl_String_split = ($this, $regex) => {
    return jur_Pattern_split(jur_Pattern_compile($regex), $this.$toString());
},
jl_String_replaceAll = ($this, $regex, $replacement) => {
    return jur_Matcher_replaceAll(jur_Pattern_matcher(jur_Pattern_compile($regex), $this.$toString()), $replacement);
},
jl_String__clinit_ = () => {
    jl_String_EMPTY_CHARS = $rt_createCharArray(0);
    jl_String_EMPTY = jl_String__init_6();
    jl_String_CASE_INSENSITIVE_ORDER = jl_String$_clinit_$lambda$_118_0__init_0();
},
jnc_Charset$Charsets = $rt_classWithoutFields(),
jnc_Charset$Charsets_value = null,
jnc_Charset$Charsets_$callClinit = () => {
    jnc_Charset$Charsets_$callClinit = $rt_eraseClinit(jnc_Charset$Charsets);
    jnc_Charset$Charsets__clinit_();
},
jnc_Charset$Charsets__clinit_ = () => {
    let $charsets, var$2, var$3, var$4, $charset;
    jnc_Charset$Charsets_value = ju_HashMap__init_2();
    $charsets = $rt_createArray(jnc_Charset, 6);
    var$2 = $charsets.data;
    jnc_StandardCharsets_$callClinit();
    var$2[0] = jnc_StandardCharsets_UTF_8;
    var$2[1] = jnc_StandardCharsets_US_ASCII;
    var$2[2] = jnc_StandardCharsets_ISO_8859_1;
    var$2[3] = jnc_StandardCharsets_UTF_16;
    var$2[4] = jnc_StandardCharsets_UTF_16BE;
    var$2[5] = jnc_StandardCharsets_UTF_16LE;
    var$3 = var$2.length;
    var$4 = 0;
    while (var$4 < var$3) {
        $charset = var$2[var$4];
        jnc_Charset$Charsets_value.$put(jnc_Charset_name($charset), $charset);
        var$4 = var$4 + 1 | 0;
    }
},
otjt_Uint16Array = $rt_classWithoutFields(otjt_TypedArray);
function v_WebGameView$2() {
    jl_Object.call(this);
    this.$val$handler0 = null;
}
let v_WebGameView$2__init_ = ($this, $this$0, var$2) => {
    $this.$val$handler0 = var$2;
    jl_Object__init_($this);
},
v_WebGameView$2__init_0 = (var_0, var_1) => {
    let var_2 = new v_WebGameView$2();
    v_WebGameView$2__init_(var_2, var_0, var_1);
    return var_2;
},
v_WebGameView$2_handleEvent0 = ($this, $e) => {
    let var$2, var$3;
    a: {
        var$2 = $rt_str($e.code);
        var$3 = (-1);
        switch (var$2.$hashCode()) {
            case 251549619:
                if (!var$2.$equals($rt_s(294)))
                    break a;
                var$3 = 1;
                break a;
            case 977763216:
                if (!var$2.$equals($rt_s(295)))
                    break a;
                var$3 = 0;
                break a;
            default:
        }
    }
    b: {
        switch (var$3) {
            case 0:
                break;
            case 1:
                $this.$val$handler0.$cmdMovingRight(0);
                break b;
            default:
                break b;
        }
        $this.$val$handler0.$cmdMovingLeft(0);
    }
},
v_WebGameView$2_handleEvent = ($this, var$1) => {
    $this.$handleEvent0(var$1);
},
v_WebGameView$2_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
},
jur_FSet$PossessiveFSet = $rt_classWithoutFields(jur_AbstractSet),
jur_FSet$PossessiveFSet__init_ = $this => {
    jur_AbstractSet__init_($this);
},
jur_FSet$PossessiveFSet__init_0 = () => {
    let var_0 = new jur_FSet$PossessiveFSet();
    jur_FSet$PossessiveFSet__init_(var_0);
    return var_0;
},
jur_FSet$PossessiveFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    return $stringIndex;
},
jur_FSet$PossessiveFSet_getName = $this => {
    return $rt_s(296);
},
jur_FSet$PossessiveFSet_hasConsumed = ($this, $mr) => {
    return 0;
},
jur_PosCompositeGroupQuantifierSet = $rt_classWithoutFields(jur_CompositeGroupQuantifierSet),
jur_PosCompositeGroupQuantifierSet__init_ = ($this, $quant, $innerSet, $next, $type, $setCounter) => {
    jur_CompositeGroupQuantifierSet__init_($this, $quant, $innerSet, $next, $type, $setCounter);
    jur_FSet_$callClinit();
    $innerSet.$setNext(jur_FSet_posFSet);
},
jur_PosCompositeGroupQuantifierSet__init_0 = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new jur_PosCompositeGroupQuantifierSet();
    jur_PosCompositeGroupQuantifierSet__init_(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
jur_PosCompositeGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $counter, $max, $nextIndex;
    $counter = 0;
    $max = $this.$quantifier0.$max1();
    a: {
        while (true) {
            $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
            if ($nextIndex <= $stringIndex)
                break a;
            if ($counter >= $max)
                break;
            $counter = $counter + 1 | 0;
            $stringIndex = $nextIndex;
        }
    }
    if ($nextIndex < 0 && $counter < $this.$quantifier0.$min1())
        return (-1);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jnci_UTF8Charset = $rt_classWithoutFields(jnc_Charset),
jnci_UTF8Charset_INSTANCE = null,
jnci_UTF8Charset_$callClinit = () => {
    jnci_UTF8Charset_$callClinit = $rt_eraseClinit(jnci_UTF8Charset);
    jnci_UTF8Charset__clinit_();
},
jnci_UTF8Charset__init_0 = $this => {
    jnci_UTF8Charset_$callClinit();
    jnc_Charset__init_($this, $rt_s(297), $rt_createArray(jl_String, 0));
},
jnci_UTF8Charset__init_ = () => {
    let var_0 = new jnci_UTF8Charset();
    jnci_UTF8Charset__init_0(var_0);
    return var_0;
},
jnci_UTF8Charset_newDecoder = $this => {
    return jnci_UTF8Decoder__init_0($this);
},
jnci_UTF8Charset__clinit_ = () => {
    jnci_UTF8Charset_INSTANCE = jnci_UTF8Charset__init_();
};
function jur_MultiLineEOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter = 0;
}
let jur_MultiLineEOLSet__init_ = ($this, $counter) => {
    jur_AbstractSet__init_($this);
    $this.$consCounter = $counter;
},
jur_MultiLineEOLSet__init_0 = var_0 => {
    let var_1 = new jur_MultiLineEOLSet();
    jur_MultiLineEOLSet__init_(var_1, var_0);
    return var_1;
},
jur_MultiLineEOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $strDif, $ch1, $ch2;
    $strDif = !$matchResult.$hasAnchoringBounds() ? $testString.$length() - $strIndex | 0 : $matchResult.$getRightBound() - $strIndex | 0;
    if (!$strDif) {
        $matchResult.$setConsumed($this.$consCounter, 0);
        return $this.$next1.$matches($strIndex, $testString, $matchResult);
    }
    if ($strDif < 2) {
        $ch1 = $testString.$charAt($strIndex);
        $ch2 = 97;
    } else {
        $ch1 = $testString.$charAt($strIndex);
        $ch2 = $testString.$charAt($strIndex + 1 | 0);
    }
    switch ($ch1) {
        case 10:
        case 133:
        case 8232:
        case 8233:
            $matchResult.$setConsumed($this.$consCounter, 0);
            return $this.$next1.$matches($strIndex, $testString, $matchResult);
        case 13:
            if ($ch2 != 10) {
                $matchResult.$setConsumed($this.$consCounter, 0);
                return $this.$next1.$matches($strIndex, $testString, $matchResult);
            }
            $matchResult.$setConsumed($this.$consCounter, 0);
            return $this.$next1.$matches($strIndex, $testString, $matchResult);
        default:
    }
    return (-1);
},
jur_MultiLineEOLSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !$matchResult.$getConsumed($this.$consCounter) ? 0 : 1;
    $matchResult.$setConsumed($this.$consCounter, (-1));
    return $res;
},
jur_MultiLineEOLSet_getName = $this => {
    return $rt_s(298);
};
function s_Entities() {
    let a = this; jl_Enum.call(a);
    a.$width2 = 0;
    a.$height2 = 0;
}
let s_Entities_PLAYER = null,
s_Entities_CAPTURED_PLAYER = null,
s_Entities_BOSS_GALAGA = null,
s_Entities_BOSS_GALAGA_ONE_SHOT = null,
s_Entities_GOEI = null,
s_Entities_ZAKO = null,
s_Entities_PLAYER_SHOT = null,
s_Entities_ENEMY_SHOT = null,
s_Entities_ALIEN_SHOT = null,
s_Entities_$VALUES = null,
s_Entities_$callClinit = () => {
    s_Entities_$callClinit = $rt_eraseClinit(s_Entities);
    s_Entities__clinit_();
},
s_Entities_values = () => {
    s_Entities_$callClinit();
    return s_Entities_$VALUES.$clone0();
},
s_Entities_valueOf = $name => {
    s_Entities_$callClinit();
    return jl_Enum_valueOf($rt_cls(s_Entities), $name);
},
s_Entities__init_0 = ($this, var$1, var$2, $w, $h) => {
    s_Entities_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$width2 = $w;
    $this.$height2 = $h;
},
s_Entities__init_ = (var_0, var_1, var_2, var_3) => {
    let var_4 = new s_Entities();
    s_Entities__init_0(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
s_Entities_getWidth = $this => {
    return $this.$width2;
},
s_Entities_getHeight = $this => {
    return $this.$height2;
},
s_Entities_$values = () => {
    let var$1, var$2;
    s_Entities_$callClinit();
    var$1 = $rt_createArray(s_Entities, 9);
    var$2 = var$1.data;
    var$2[0] = s_Entities_PLAYER;
    var$2[1] = s_Entities_CAPTURED_PLAYER;
    var$2[2] = s_Entities_BOSS_GALAGA;
    var$2[3] = s_Entities_BOSS_GALAGA_ONE_SHOT;
    var$2[4] = s_Entities_GOEI;
    var$2[5] = s_Entities_ZAKO;
    var$2[6] = s_Entities_PLAYER_SHOT;
    var$2[7] = s_Entities_ENEMY_SHOT;
    var$2[8] = s_Entities_ALIEN_SHOT;
    return var$1;
},
s_Entities__clinit_ = () => {
    s_Entities_PLAYER = s_Entities__init_($rt_s(18), 0, 16, 16);
    s_Entities_CAPTURED_PLAYER = s_Entities__init_($rt_s(299), 1, 16, 16);
    s_Entities_BOSS_GALAGA = s_Entities__init_($rt_s(300), 2, 15, 16);
    s_Entities_BOSS_GALAGA_ONE_SHOT = s_Entities__init_($rt_s(301), 3, 15, 16);
    s_Entities_GOEI = s_Entities__init_($rt_s(302), 4, 13, 10);
    s_Entities_ZAKO = s_Entities__init_($rt_s(303), 5, 13, 10);
    s_Entities_PLAYER_SHOT = s_Entities__init_($rt_s(304), 6, 3, 8);
    s_Entities_ENEMY_SHOT = s_Entities__init_($rt_s(305), 7, 3, 8);
    s_Entities_ALIEN_SHOT = s_Entities__init_($rt_s(306), 8, 3, 8);
    s_Entities_$VALUES = s_Entities_$values();
};
function ji_Reader() {
    jl_Object.call(this);
    this.$lock = null;
}
let ji_Reader__init_ = $this => {
    ji_Reader__init_0($this, jl_Object__init_0());
},
ji_Reader__init_0 = ($this, $lock) => {
    jl_Object__init_($this);
    $this.$lock = $lock;
};
function ji_BufferedReader() {
    let a = this; ji_Reader.call(a);
    a.$innerReader = null;
    a.$buffer0 = null;
    a.$index0 = 0;
    a.$count = 0;
    a.$eof = 0;
    a.$mark0 = 0;
}
let ji_BufferedReader__init_ = ($this, $innerReader, $size) => {
    ji_Reader__init_($this);
    $this.$mark0 = (-1);
    if ($size < 0)
        $rt_throw(jl_IllegalArgumentException__init_());
    $this.$innerReader = $innerReader;
    $this.$buffer0 = $rt_createCharArray(jl_Math_max(64, $size));
},
ji_BufferedReader__init_2 = (var_0, var_1) => {
    let var_2 = new ji_BufferedReader();
    ji_BufferedReader__init_(var_2, var_0, var_1);
    return var_2;
},
ji_BufferedReader__init_0 = ($this, $innerReader) => {
    ji_BufferedReader__init_($this, $innerReader, 1024);
},
ji_BufferedReader__init_1 = var_0 => {
    let var_1 = new ji_BufferedReader();
    ji_BufferedReader__init_0(var_1, var_0);
    return var_1;
},
ji_BufferedReader_close = $this => {
    ji_BufferedReader_requireOpened($this);
    $this.$innerReader.$close();
    $this.$innerReader = null;
},
ji_BufferedReader_readLine = $this => {
    let $line, var$2, var$3, $ch;
    ji_BufferedReader_requireOpened($this);
    if ($this.$eof && $this.$index0 >= $this.$count)
        return null;
    $line = jl_StringBuilder__init_();
    a: {
        b: {
            while (true) {
                if ($this.$index0 >= $this.$count && !ji_BufferedReader_fillBuffer($this, 0, $this.$count - $this.$index0 | 0)) {
                    if (!$line.$isEmpty())
                        break a;
                    return null;
                }
                var$2 = $this.$buffer0.data;
                var$3 = $this.$index0;
                $this.$index0 = var$3 + 1 | 0;
                $ch = var$2[var$3];
                if ($ch == 10)
                    break;
                if ($ch == 13)
                    break b;
                $line.$append0($ch);
            }
            break a;
        }
        if (!($this.$index0 >= $this.$count && !ji_BufferedReader_fillBuffer($this, 0, $this.$count - $this.$index0 | 0)) && $this.$buffer0.data[$this.$index0] == 10)
            $this.$index0 = $this.$index0 + 1 | 0;
    }
    return $line.$toString();
},
ji_BufferedReader_fillBuffer = ($this, $offset, $readLimit) => {
    let var$3, $totalRead, $charsRead;
    if ($this.$eof)
        return 0;
    var$3 = jl_Math_min($readLimit, $this.$buffer0.data.length - $this.$index0 | 0);
    $totalRead = 0;
    a: {
        while (true) {
            $charsRead = $this.$innerReader.$read($this.$buffer0, $offset, $this.$buffer0.data.length - $offset | 0);
            if ($charsRead == (-1)) {
                $this.$eof = 1;
                break a;
            }
            $offset = $offset + $charsRead | 0;
            $totalRead = $totalRead + $charsRead | 0;
            if (!($offset < var$3 && $this.$innerReader.$ready()) && $totalRead > 0)
                break;
        }
    }
    $this.$count = $offset;
    $this.$index0 = 0;
    $this.$mark0 = (-1);
    return $totalRead <= 0 ? 0 : 1;
},
ji_BufferedReader_requireOpened = $this => {
    if ($this.$innerReader !== null)
        return;
    $rt_throw(ji_IOException__init_1());
};
function v_WebGameView$1() {
    jl_Object.call(this);
    this.$val$handler = null;
}
let v_WebGameView$1__init_ = ($this, $this$0, var$2) => {
    $this.$val$handler = var$2;
    jl_Object__init_($this);
},
v_WebGameView$1__init_0 = (var_0, var_1) => {
    let var_2 = new v_WebGameView$1();
    v_WebGameView$1__init_(var_2, var_0, var_1);
    return var_2;
},
v_WebGameView$1_handleEvent = ($this, $e) => {
    let var$2, var$3;
    a: {
        var$2 = $rt_str($e.code);
        var$3 = (-1);
        switch (var$2.$hashCode()) {
            case 2335204:
                if (!var$2.$equals($rt_s(307)))
                    break a;
                var$3 = 0;
                break a;
            case 2335215:
                if (!var$2.$equals($rt_s(308)))
                    break a;
                var$3 = 4;
                break a;
            case 80085222:
                if (!var$2.$equals($rt_s(83)))
                    break a;
                var$3 = 3;
                break a;
            case 251549619:
                if (!var$2.$equals($rt_s(294)))
                    break a;
                var$3 = 2;
                break a;
            case 977763216:
                if (!var$2.$equals($rt_s(295)))
                    break a;
                var$3 = 1;
                break a;
            default:
        }
    }
    b: {
        switch (var$3) {
            case 0:
                break;
            case 1:
                $this.$val$handler.$cmdMovingLeft(1);
                break b;
            case 2:
                $this.$val$handler.$cmdMovingRight(1);
                break b;
            case 3:
                $this.$val$handler.$cmdAction();
                break b;
            case 4:
                $this.$val$handler.$cmdNukeAll();
                break b;
            default:
                break b;
        }
        $this.$val$handler.$cmdCoinInserted();
    }
},
v_WebGameView$1_handleEvent0 = ($this, var$1) => {
    $this.$handleEvent0(var$1);
},
v_WebGameView$1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
};
function jur_AbstractCharClass$LazyJavaDigit$1() {
    jur_AbstractCharClass.call(this);
    this.$this$015 = null;
}
let jur_AbstractCharClass$LazyJavaDigit$1__init_ = ($this, $this$0) => {
    $this.$this$015 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaDigit$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaDigit$1();
    jur_AbstractCharClass$LazyJavaDigit$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaDigit$1_contains = ($this, $ch) => {
    return jl_Character_isDigit($ch);
},
jl_NullPointerException = $rt_classWithoutFields(jl_RuntimeException),
jl_NullPointerException__init_1 = ($this, $message) => {
    jl_RuntimeException__init_0($this, $message);
},
jl_NullPointerException__init_ = var_0 => {
    let var_1 = new jl_NullPointerException();
    jl_NullPointerException__init_1(var_1, var_0);
    return var_1;
},
jl_NullPointerException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
jl_NullPointerException__init_2 = () => {
    let var_0 = new jl_NullPointerException();
    jl_NullPointerException__init_0(var_0);
    return var_0;
};
function jur_AbstractCharClass$LazyJavaSpaceChar$1() {
    jur_AbstractCharClass.call(this);
    this.$this$031 = null;
}
let jur_AbstractCharClass$LazyJavaSpaceChar$1__init_ = ($this, $this$0) => {
    $this.$this$031 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaSpaceChar$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaSpaceChar$1();
    jur_AbstractCharClass$LazyJavaSpaceChar$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaSpaceChar$1_contains = ($this, $ch) => {
    return jl_Character_isSpaceChar($ch);
},
otci_Base64Impl = $rt_classWithoutFields(),
otci_Base64Impl_alphabet = null,
otci_Base64Impl_urlAlphabet = null,
otci_Base64Impl_reverse = null,
otci_Base64Impl_urlReverse = null,
otci_Base64Impl_$callClinit = () => {
    otci_Base64Impl_$callClinit = $rt_eraseClinit(otci_Base64Impl);
    otci_Base64Impl__clinit_();
},
otci_Base64Impl_decode0 = ($text, $mapping) => {
    let var$3, var$4, $outputSize, $rem, $i, $output;
    otci_Base64Impl_$callClinit();
    var$3 = $text.data;
    var$4 = var$3.length;
    $outputSize = (var$4 / 4 | 0) * 3 | 0;
    $rem = var$4 % 4 | 0;
    if (!($rem != 2 && $rem != 3))
        $outputSize = $outputSize + ($rem - 1 | 0) | 0;
    $i = var$4 - 1 | 0;
    while ($i >= 0 && var$3[$i] == 61) {
        $outputSize = $outputSize + (-1) | 0;
        $i = $i + (-1) | 0;
    }
    $output = $rt_createByteArray($outputSize);
    otci_Base64Impl_decode2($text, $output, $mapping);
    return $output;
},
otci_Base64Impl_decode1 = $text => {
    otci_Base64Impl_$callClinit();
    return otci_Base64Impl_decode0($text, otci_Base64Impl_reverse);
},
otci_Base64Impl_decode2 = ($text, $output, $mapping) => {
    let var$4, $inputSize, $i, $triples, var$8, $j, var$10, var$11, $a, $b, $c, $d, $out, var$17, $rem;
    otci_Base64Impl_$callClinit();
    var$4 = $text.data;
    $inputSize = var$4.length;
    $i = $inputSize - 1 | 0;
    while ($i >= 0 && var$4[$i] == 61) {
        $inputSize = $inputSize + (-1) | 0;
        $i = $i + (-1) | 0;
    }
    $triples = ($inputSize / 4 | 0) * 4 | 0;
    var$8 = 0;
    $j = 0;
    while (var$8 < $triples) {
        var$10 = $output.data;
        var$11 = var$8 + 1 | 0;
        $a = otci_Base64Impl_decode($mapping, var$4[var$8]);
        var$8 = var$11 + 1 | 0;
        $b = otci_Base64Impl_decode($mapping, var$4[var$11]);
        var$11 = var$8 + 1 | 0;
        $c = otci_Base64Impl_decode($mapping, var$4[var$8]);
        var$8 = var$11 + 1 | 0;
        $d = otci_Base64Impl_decode($mapping, var$4[var$11]);
        $out = $a << 18 | $b << 12 | $c << 6 | $d;
        var$11 = $j + 1 | 0;
        var$10[$j] = ($out >>> 16 | 0) << 24 >> 24;
        var$17 = var$11 + 1 | 0;
        var$10[var$11] = ($out >>> 8 | 0) << 24 >> 24;
        $j = var$17 + 1 | 0;
        var$10[var$17] = $out << 24 >> 24;
    }
    $rem = $inputSize - var$8 | 0;
    if ($rem == 2) {
        var$10 = $output.data;
        $a = otci_Base64Impl_decode($mapping, var$4[var$8]);
        $b = otci_Base64Impl_decode($mapping, var$4[var$8 + 1 | 0]);
        var$10[$j] = ($a << 2 | ($b >>> 4 | 0)) << 24 >> 24;
    } else if ($rem == 3) {
        var$10 = $output.data;
        $a = otci_Base64Impl_decode($mapping, var$4[var$8]);
        $b = otci_Base64Impl_decode($mapping, var$4[var$8 + 1 | 0]);
        $c = otci_Base64Impl_decode($mapping, var$4[var$8 + 2 | 0]);
        var$10[$j] = ($a << 2 | ($b >>> 4 | 0)) << 24 >> 24;
        var$10[$j + 1 | 0] = ($b << 4 | ($c >>> 2 | 0)) << 24 >> 24;
    }
},
otci_Base64Impl_decode = ($mapping, $c) => {
    otci_Base64Impl_$callClinit();
    return $mapping.data[$c];
},
otci_Base64Impl__clinit_ = () => {
    let $i, $c, var$3, var$4;
    otci_Base64Impl_alphabet = $rt_createByteArray(64);
    otci_Base64Impl_urlAlphabet = $rt_createByteArray(64);
    otci_Base64Impl_reverse = $rt_createIntArray(256);
    otci_Base64Impl_urlReverse = $rt_createIntArray(256);
    $i = 0;
    $c = 65;
    while ($c <= 90) {
        var$3 = otci_Base64Impl_alphabet.data;
        var$4 = $c << 24 >> 24;
        var$3[$i] = var$4;
        otci_Base64Impl_urlAlphabet.data[$i] = var$4;
        $i = $i + 1 | 0;
        $c = ($c + 1 | 0) & 65535;
    }
    $c = 97;
    while ($c <= 122) {
        var$3 = otci_Base64Impl_alphabet.data;
        var$4 = $c << 24 >> 24;
        var$3[$i] = var$4;
        otci_Base64Impl_urlAlphabet.data[$i] = var$4;
        $i = $i + 1 | 0;
        $c = ($c + 1 | 0) & 65535;
    }
    $c = 48;
    while ($c <= 57) {
        var$3 = otci_Base64Impl_alphabet.data;
        var$4 = $c << 24 >> 24;
        var$3[$i] = var$4;
        otci_Base64Impl_urlAlphabet.data[$i] = var$4;
        $i = $i + 1 | 0;
        $c = ($c + 1 | 0) & 65535;
    }
    otci_Base64Impl_alphabet.data[$i] = 43;
    otci_Base64Impl_urlAlphabet.data[$i] = 45;
    var$4 = $i + 1 | 0;
    otci_Base64Impl_alphabet.data[var$4] = 47;
    otci_Base64Impl_urlAlphabet.data[var$4] = 95;
    ju_Arrays_fill(otci_Base64Impl_reverse, (-1));
    ju_Arrays_fill(otci_Base64Impl_urlReverse, (-1));
    var$4 = 0;
    while (var$4 < otci_Base64Impl_alphabet.data.length) {
        otci_Base64Impl_reverse.data[otci_Base64Impl_alphabet.data[var$4]] = var$4;
        otci_Base64Impl_urlReverse.data[otci_Base64Impl_urlAlphabet.data[var$4]] = var$4;
        var$4 = var$4 + 1 | 0;
    }
},
jl_Math = $rt_classWithoutFields(),
jl_Math_sin = var$1 => {
    return Math.sin(var$1);
},
jl_Math_cos = var$1 => {
    return Math.cos(var$1);
},
jl_Math_toRadians = var$1 => {
    return var$1 * 3.141592653589793 / 180.0;
},
jl_Math_toDegrees = $angrad => {
    return $angrad * 180.0 / 3.141592653589793;
},
jl_Math_ceil = var$1 => {
    return Math.ceil(var$1);
},
jl_Math_atan2 = (var$1, var$2) => {
    return Math.atan2(var$1, var$2);
},
jl_Math_round = var$1 => {
    return Long_fromNumber(var$1 + jl_Math_signum(var$1) * 0.5);
},
jl_Math_min = ($a, $b) => {
    if ($a < $b)
        $b = $a;
    return $b;
},
jl_Math_max = ($a, $b) => {
    if ($a > $b)
        $b = $a;
    return $b;
},
jl_Math_minImpl = (var$1, var$2) => {
    return Math.min(var$1, var$2);
},
jl_Math_min0 = (var$1, var$2) => {
    return jl_Math_minImpl(var$1, var$2);
},
jl_Math_maxImpl = (var$1, var$2) => {
    return Math.max(var$1, var$2);
},
jl_Math_max0 = (var$1, var$2) => {
    return jl_Math_maxImpl(var$1, var$2);
},
jl_Math_abs = $n => {
    if ($n < 0)
        $n =  -$n | 0;
    return $n;
},
jl_Math_absImpl = var$1 => {
    return Math.abs(var$1);
},
jl_Math_abs0 = var$1 => {
    return jl_Math_absImpl(var$1);
},
jl_Math_sign = var$1 => {
    return Math.sign(var$1);
},
jl_Math_signum = var$1 => {
    return jl_Math_sign(var$1);
},
otji_JSWrapper$Helper$FinalizationRegistryConsumer = $rt_classWithoutFields(0),
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart();
    jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
};
function jur_PatternSyntaxException() {
    let a = this; jl_IllegalArgumentException.call(a);
    a.$desc = null;
    a.$pattern1 = null;
    a.$index3 = 0;
}
let jur_PatternSyntaxException__init_0 = ($this, $description, $pattern, $index) => {
    jl_IllegalArgumentException__init_2($this);
    $this.$index3 = (-1);
    $this.$desc = $description;
    $this.$pattern1 = $pattern;
    $this.$index3 = $index;
},
jur_PatternSyntaxException__init_ = (var_0, var_1, var_2) => {
    let var_3 = new jur_PatternSyntaxException();
    jur_PatternSyntaxException__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_PatternSyntaxException_getMessage = $this => {
    let $filler, $temp, var$3, var$4, var$5, var$6;
    $filler = $rt_s(54);
    if ($this.$index3 >= 1) {
        $temp = $rt_createCharArray($this.$index3);
        ju_Arrays_fill2($temp, 32);
        $filler = jl_String__init_($temp);
    }
    var$3 = $this.$desc;
    if ($this.$pattern1 !== null && $this.$pattern1.$length()) {
        var$4 = $this.$index3;
        var$5 = $this.$pattern1;
        var$6 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append1(var$6, var$4), $rt_s(293)), var$5), $rt_s(293)), $filler);
        var$5 = jl_StringBuilder_toString(var$6);
    } else
        var$5 = $rt_s(54);
    var$6 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$6, var$3), var$5);
    return jl_StringBuilder_toString(var$6);
},
juf_Predicate = $rt_classWithoutFields(0),
ju_AbstractSequentialList = $rt_classWithoutFields(ju_AbstractList),
ju_AbstractSequentialList__init_ = $this => {
    ju_AbstractList__init_($this);
},
ju_AbstractSequentialList_get = ($this, $index) => {
    let $iter;
    if ($index < 0)
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    $iter = $this.$listIterator($index);
    return $iter.$next();
},
ju_AbstractSequentialList_add = ($this, $index, $element) => {
    let $iter;
    if ($index < 0)
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    $iter = $this.$listIterator($index);
    $iter.$add3($element);
},
ju_AbstractSequentialList_remove = ($this, $index) => {
    let $iter, $elem;
    if ($index < 0)
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    $iter = $this.$listIterator($index);
    $elem = $iter.$next();
    $iter.$remove1();
    return $elem;
},
ju_AbstractSequentialList_iterator = $this => {
    return $this.$listIterator0();
},
jur_AbstractCharClass$LazyJavaDefined = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaDefined__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaDefined__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaDefined();
    jur_AbstractCharClass$LazyJavaDefined__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaDefined_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaDefined$1__init_0($this);
    $chCl.$lowHighSurrogates.$set(0, 2048);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
};
function me_Goei() {
    let a = this; me_Alien.call(a);
    a.$SCORE_VALUE = 80;
    a.$SCORE_VALUE_CHARGING = 160;
}
let me_Goei__init_ = ($this, $speed, $bounds, $path, $POINTS_TO_CALCULATE_WITH_OFFSET, $formationPoint) => {
    let var$6, var$7;
    s_Entities_$callClinit();
    var$6 = s_Entities_getWidth(s_Entities_GOEI);
    var$7 = s_Entities_getHeight(s_Entities_GOEI);
    s_RotationDirection_$callClinit();
    me_Alien__init_($this, var$6, var$7, $speed, $bounds, $path, 1, s_RotationDirection_D, $POINTS_TO_CALCULATE_WITH_OFFSET, $formationPoint);
    $this.$SCORE_VALUE = 80;
    $this.$SCORE_VALUE_CHARGING = 160;
    $this.$entityName = s_Entities_GOEI;
},
me_Goei__init_0 = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new me_Goei();
    me_Goei__init_(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
me_Goei_copyAlien = $this => {
    let $newPath;
    $newPath = ju_LinkedList__init_($this.$path);
    return me_Goei__init_0($this.$speed, $this.$bounds, $newPath, $this.$POINTS_TO_CALCULATE_WITH_OFFSET, $this.$formationPoint);
},
me_Goei_getScoreValue = $this => {
    if (!$this.$isAttacking0)
        return 80;
    return 160;
};
function jur_Pattern() {
    let a = this; jl_Object.call(a);
    a.$lexemes = null;
    a.$flags = 0;
    a.$backRefs = null;
    a.$needsBackRefReplacement = 0;
    a.$globalGroupIndex = 0;
    a.$compCount0 = 0;
    a.$consCount0 = 0;
    a.$start1 = null;
    a.$namedGroups0 = null;
}
let jur_Pattern_matcher = ($this, $input) => {
    return jur_Matcher__init_0($this, $input);
},
jur_Pattern_split0 = ($this, $inputSeq, $limit) => {
    let $res, $mat, $index, $curPos, var$7, var$8;
    $res = ju_ArrayList__init_();
    $mat = jur_Pattern_matcher($this, $inputSeq);
    $index = 0;
    $curPos = 0;
    if (!$inputSeq.$length()) {
        var$7 = $rt_createArray(jl_String, 1);
        var$7.data[0] = $rt_s(54);
        return var$7;
    }
    while (jur_Matcher_find0($mat)) {
        var$8 = $index + 1 | 0;
        if (var$8 >= $limit && $limit > 0)
            break;
        $res.$add2(($inputSeq.$subSequence($curPos, jur_Matcher_start($mat))).$toString());
        $curPos = jur_Matcher_end($mat);
        $index = var$8;
    }
    a: {
        $res.$add2(($inputSeq.$subSequence($curPos, $inputSeq.$length())).$toString());
        var$8 = $index + 1 | 0;
        if (!$limit)
            while (true) {
                var$8 = var$8 + (-1) | 0;
                if (var$8 < 0)
                    break;
                if ((($res.$get(var$8)).$toString()).$length())
                    break a;
                $res.$remove(var$8);
            }
    }
    if (var$8 < 0)
        var$8 = 0;
    return $res.$toArray($rt_createArray(jl_String, var$8));
},
jur_Pattern_split = ($this, $input) => {
    return jur_Pattern_split0($this, $input, 0);
},
jur_Pattern_pattern = $this => {
    return $this.$lexemes.$toString();
},
jur_Pattern_compile0 = ($pattern, $flags) => {
    if ($pattern === null)
        $rt_throw(jl_NullPointerException__init_($rt_s(309)));
    if ($flags && ($flags | 255) != 255)
        $rt_throw(jl_IllegalArgumentException__init_0($rt_s(54)));
    jur_AbstractSet_$callClinit();
    jur_AbstractSet_counter = 1;
    return jur_Pattern_compileImpl(jur_Pattern__init_0(), $pattern, $flags);
},
jur_Pattern_compileImpl = ($this, $pattern, $flags) => {
    $this.$lexemes = jur_Lexer__init_0($pattern, $flags);
    $this.$flags = $flags;
    $this.$start1 = jur_Pattern_processExpression($this, (-1), $this.$flags, null);
    if ($this.$lexemes.$isEmpty()) {
        jur_Pattern_finalizeCompile($this);
        return $this;
    }
    $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$lexemes.$toString(), $this.$lexemes.$getIndex()));
},
jur_Pattern_processAlternations = ($this, $last) => {
    let $auxRange, var$3, $rangeSet;
    $auxRange = jur_CharClass__init_4(jur_Pattern_hasFlag($this, 2), jur_Pattern_hasFlag($this, 64));
    while (!$this.$lexemes.$isEmpty()) {
        var$3 = $this.$lexemes;
        if (!var$3.$isLetter())
            break;
        var$3 = $this.$lexemes;
        if (var$3.$lookAhead() && $this.$lexemes.$lookAhead() != (-536870788)) {
            var$3 = $this.$lexemes;
            if (var$3.$lookAhead() != (-536870871))
                break;
        }
        $auxRange.$add($this.$lexemes.$next0());
        if ($this.$lexemes.$peek() != (-536870788))
            continue;
        $this.$lexemes.$next0();
    }
    $rangeSet = jur_Pattern_processRangeSet($this, $auxRange);
    $rangeSet.$setNext($last);
    return $rangeSet;
},
jur_Pattern_processExpression = ($this, $ch, $newFlags, $last) => {
    let $children, $saveFlags, $saveChangedFlags, $fSet, var$8, $child;
    $children = ju_ArrayList__init_();
    $saveFlags = $this.$flags;
    $saveChangedFlags = 0;
    if ($newFlags != $this.$flags)
        $this.$flags = $newFlags;
    a: {
        switch ($ch) {
            case -1073741784:
                $fSet = new jur_NonCapFSet;
                var$8 = $this.$consCount0 + 1 | 0;
                $this.$consCount0 = var$8;
                jur_NonCapFSet__init_($fSet, var$8);
                break a;
            case -536870872:
            case -268435416:
                break;
            case -134217688:
            case -67108824:
                $fSet = new jur_BehindFSet;
                var$8 = $this.$consCount0 + 1 | 0;
                $this.$consCount0 = var$8;
                jur_BehindFSet__init_($fSet, var$8);
                break a;
            case -33554392:
                $fSet = new jur_AtomicFSet;
                var$8 = $this.$consCount0 + 1 | 0;
                $this.$consCount0 = var$8;
                jur_AtomicFSet__init_($fSet, var$8);
                break a;
            default:
                $this.$globalGroupIndex = $this.$globalGroupIndex + 1 | 0;
                if ($last === null) {
                    $fSet = jur_FinalSet__init_0();
                    $saveChangedFlags = 1;
                } else {
                    $fSet = jur_FSet__init_0($this.$globalGroupIndex);
                    if ($ch == (-2130706392)) {
                        if ($this.$namedGroups0 === null)
                            $this.$namedGroups0 = ju_LinkedHashMap__init_0();
                        $this.$namedGroups0.$put($this.$lexemes.$groupName, jl_Integer_valueOf($this.$globalGroupIndex));
                    }
                }
                if ($this.$globalGroupIndex <= (-1))
                    break a;
                if ($this.$globalGroupIndex >= 10)
                    break a;
                $this.$backRefs.data[$this.$globalGroupIndex] = $fSet;
                break a;
        }
        $fSet = jur_AheadFSet__init_0();
    }
    while (true) {
        if ($this.$lexemes.$isLetter() && $this.$lexemes.$lookAhead() == (-536870788))
            $child = jur_Pattern_processAlternations($this, $fSet);
        else if ($this.$lexemes.$peek() == (-536870788)) {
            $child = jur_EmptySet__init_($fSet);
            $this.$lexemes.$next0();
        } else {
            $child = jur_Pattern_processSubExpression($this, $fSet);
            if ($this.$lexemes.$peek() == (-536870788))
                $this.$lexemes.$next0();
        }
        if ($child !== null)
            $children.$add2($child);
        if ($this.$lexemes.$isEmpty())
            break;
        if ($this.$lexemes.$peek() == (-536870871))
            break;
    }
    if ($this.$lexemes.$back() == (-536870788))
        $children.$add2(jur_EmptySet__init_($fSet));
    if ($this.$flags != $saveFlags && !$saveChangedFlags) {
        $this.$flags = $saveFlags;
        $this.$lexemes.$restoreFlags($this.$flags);
    }
    switch ($ch) {
        case -1073741784:
            break;
        case -536870872:
            return jur_PositiveLookAhead__init_0($children, $fSet);
        case -268435416:
            return jur_NegativeLookAhead__init_0($children, $fSet);
        case -134217688:
            return jur_PositiveLookBehind__init_0($children, $fSet);
        case -67108824:
            return jur_NegativeLookBehind__init_0($children, $fSet);
        case -33554392:
            return jur_AtomicJointSet__init_0($children, $fSet);
        default:
            switch ($children.$size()) {
                case 0:
                    break;
                case 1:
                    return jur_SingleSet__init_0($children.$get(0), $fSet);
                default:
                    return jur_JointSet__init_1($children, $fSet);
            }
            return jur_EmptySet__init_($fSet);
    }
    return jur_NonCapJointSet__init_0($children, $fSet);
},
jur_Pattern_processSequence = $this => {
    let $substring, var$2, $ch;
    $substring = jl_StringBuffer__init_();
    while (!$this.$lexemes.$isEmpty()) {
        var$2 = $this.$lexemes;
        if (!var$2.$isLetter())
            break;
        var$2 = $this.$lexemes;
        if (var$2.$isHighSurrogate0())
            break;
        var$2 = $this.$lexemes;
        if (var$2.$isLowSurrogate0())
            break;
        var$2 = $this.$lexemes;
        if (!(!var$2.$isNextSpecial() && !$this.$lexemes.$lookAhead())) {
            var$2 = $this.$lexemes;
            if (!(!var$2.$isNextSpecial() && jur_Lexer_isLetter($this.$lexemes.$lookAhead()))) {
                var$2 = $this.$lexemes;
                if (var$2.$lookAhead() != (-536870871)) {
                    var$2 = $this.$lexemes;
                    if ((var$2.$lookAhead() & (-2147418113)) != (-2147483608)) {
                        var$2 = $this.$lexemes;
                        if (var$2.$lookAhead() != (-536870788)) {
                            var$2 = $this.$lexemes;
                            if (var$2.$lookAhead() != (-536870876))
                                break;
                        }
                    }
                }
            }
        }
        $ch = $this.$lexemes.$next0();
        if (!jl_Character_isSupplementaryCodePoint($ch))
            $substring.$append14($ch & 65535);
        else
            $substring.$append15(jl_Character_toChars($ch));
    }
    if (!jur_Pattern_hasFlag($this, 2))
        return jur_SequenceSet__init_0($substring);
    if (jur_Pattern_hasFlag($this, 64))
        return jur_UCISequenceSet__init_0($substring);
    return jur_CISequenceSet__init_0($substring);
},
jur_Pattern_processDecomposedChar = $this => {
    let $codePoints, $readCodePoints, $curSymb, $curSymbIndex, var$5, $codePointsHangul, var$7, var$8, var$9, var$10;
    $codePoints = $rt_createIntArray(4);
    $readCodePoints = 0;
    $curSymb = (-1);
    $curSymbIndex = (-1);
    if (!$this.$lexemes.$isEmpty() && $this.$lexemes.$isLetter()) {
        var$5 = $codePoints.data;
        $curSymb = $this.$lexemes.$next0();
        var$5[$readCodePoints] = $curSymb;
        $curSymbIndex = $curSymb - 4352 | 0;
    }
    if ($curSymbIndex >= 0 && $curSymbIndex < 19) {
        $codePointsHangul = $rt_createCharArray(3);
        var$5 = $codePointsHangul.data;
        var$5[$readCodePoints] = $curSymb & 65535;
        var$7 = $this.$lexemes.$peek();
        var$8 = var$7 - 4449 | 0;
        if (var$8 >= 0 && var$8 < 21) {
            var$5[1] = var$7 & 65535;
            $this.$lexemes.$next0();
            var$9 = $this.$lexemes.$peek();
            var$7 = var$9 - 4519 | 0;
            if (var$7 >= 0 && var$7 < 28) {
                var$5[2] = var$9 & 65535;
                $this.$lexemes.$next0();
                return jur_HangulDecomposedCharSet__init_0($codePointsHangul, 3);
            }
            return jur_HangulDecomposedCharSet__init_0($codePointsHangul, 2);
        }
        if (!jur_Pattern_hasFlag($this, 2))
            return jur_CharSet__init_(var$5[0]);
        if (jur_Pattern_hasFlag($this, 64))
            return jur_UCICharSet__init_0(var$5[0]);
        return jur_CICharSet__init_(var$5[0]);
    }
    var$10 = 1;
    while (var$10 < 4 && !$this.$lexemes.$isEmpty() && $this.$lexemes.$isLetter()) {
        var$5 = $codePoints.data;
        var$9 = var$10 + 1 | 0;
        var$5[var$10] = $this.$lexemes.$next0();
        var$10 = var$9;
    }
    if (var$10 == 1) {
        var$5 = $codePoints.data;
        if (!jur_Lexer_hasSingleCodepointDecomposition(var$5[0]))
            return jur_Pattern_processCharSet($this, var$5[0]);
    }
    if (!jur_Pattern_hasFlag($this, 2))
        return jur_DecomposedCharSet__init_0($codePoints, var$10);
    if (jur_Pattern_hasFlag($this, 64))
        return jur_UCIDecomposedCharSet__init_0($codePoints, var$10);
    return jur_CIDecomposedCharSet__init_0($codePoints, var$10);
},
jur_Pattern_processSubExpression = ($this, $last) => {
    let $cur, $term, var$4, $next;
    if ($this.$lexemes.$isLetter() && !$this.$lexemes.$isNextSpecial() && jur_Lexer_isLetter($this.$lexemes.$lookAhead())) {
        if (!jur_Pattern_hasFlag($this, 128)) {
            if (!$this.$lexemes.$isHighSurrogate0() && !$this.$lexemes.$isLowSurrogate0())
                $cur = jur_Pattern_processSequence($this);
            else {
                $term = jur_Pattern_processTerminal($this, $last);
                $cur = jur_Pattern_processQuantifier($this, $last, $term);
            }
        } else {
            $cur = jur_Pattern_processDecomposedChar($this);
            if (!$this.$lexemes.$isEmpty()) {
                var$4 = $this.$lexemes;
                if (!(var$4.$peek() == (-536870871) && !($last instanceof jur_FinalSet))) {
                    var$4 = $this.$lexemes;
                    if (var$4.$peek() != (-536870788) && !$this.$lexemes.$isLetter())
                        $cur = jur_Pattern_processQuantifier($this, $last, $cur);
                }
            }
        }
    } else if ($this.$lexemes.$peek() != (-536870871)) {
        $term = jur_Pattern_processTerminal($this, $last);
        $cur = jur_Pattern_processQuantifier($this, $last, $term);
    } else {
        if ($last instanceof jur_FinalSet)
            $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$lexemes.$toString(), $this.$lexemes.$getIndex()));
        $cur = jur_EmptySet__init_($last);
    }
    a: {
        if (!$this.$lexemes.$isEmpty()) {
            var$4 = $this.$lexemes;
            if (!(var$4.$peek() == (-536870871) && !($last instanceof jur_FinalSet))) {
                var$4 = $this.$lexemes;
                if (var$4.$peek() != (-536870788)) {
                    $next = jur_Pattern_processSubExpression($this, $last);
                    if ($cur instanceof jur_LeafQuantifierSet && !($cur instanceof jur_CompositeQuantifierSet) && !($cur instanceof jur_GroupQuantifierSet) && !($cur instanceof jur_AltQuantifierSet)) {
                        var$4 = $cur;
                        if (!$next.$first(var$4.$getInnerSet()))
                            $cur = jur_UnifiedQuantifierSet__init_0(var$4);
                    }
                    if (($next.$getType() & 65535) != 43)
                        $cur.$setNext($next);
                    else
                        $cur.$setNext($next.$getInnerSet());
                    break a;
                }
            }
        }
        if ($cur === null)
            return null;
        $cur.$setNext($last);
    }
    if (($cur.$getType() & 65535) != 43)
        return $cur;
    return $cur.$getInnerSet();
},
jur_Pattern_processQuantifier = ($this, $last, $term) => {
    let $quant, var$4, var$5, var$6, $q, var$8, $leaf;
    $quant = $this.$lexemes.$peek();
    if ($term !== null && !($term instanceof jur_LeafSet)) {
        switch ($quant) {
            case -2147483606:
                $this.$lexemes.$next0();
                return jur_PossessiveGroupQuantifierSet__init_0($term, $last, $quant);
            case -2147483605:
                $this.$lexemes.$next0();
                return jur_PosPlusGroupQuantifierSet__init_0($term, $last, (-2147483606));
            case -2147483585:
                $this.$lexemes.$next0();
                return jur_PosAltGroupQuantifierSet__init_0($term, $last, (-536870849));
            case -2147483525:
                var$4 = new jur_PosCompositeGroupQuantifierSet;
                var$5 = $this.$lexemes.$nextSpecial();
                var$6 = $this.$compCount0 + 1 | 0;
                $this.$compCount0 = var$6;
                jur_PosCompositeGroupQuantifierSet__init_(var$4, var$5, $term, $last, (-536870849), var$6);
                return var$4;
            case -1073741782:
            case -1073741781:
                $this.$lexemes.$next0();
                $q = jur_ReluctantGroupQuantifierSet__init_0($term, $last, $quant);
                $term.$setNext($q);
                return $q;
            case -1073741761:
                $this.$lexemes.$next0();
                $q = jur_RelAltGroupQuantifierSet__init_0($term, $last, (-536870849));
                $term.$setNext($last);
                return $q;
            case -1073741701:
                $q = new jur_RelCompositeGroupQuantifierSet;
                var$4 = $this.$lexemes;
                var$4 = var$4.$nextSpecial();
                var$8 = $this.$compCount0 + 1 | 0;
                $this.$compCount0 = var$8;
                jur_RelCompositeGroupQuantifierSet__init_($q, var$4, $term, $last, (-536870849), var$8);
                $term.$setNext($q);
                return $q;
            case -536870870:
            case -536870869:
                $this.$lexemes.$next0();
                $q = $term.$getType() != (-2147483602) ? jur_GroupQuantifierSet__init_0($term, $last, $quant) : jur_Pattern_hasFlag($this, 32) ? jur_DotAllQuantifierSet__init_0($term, $last, $quant) : jur_DotQuantifierSet__init_0($term, $last, $quant, jur_AbstractLineTerminator_getInstance($this.$flags));
                $term.$setNext($q);
                return $q;
            case -536870849:
                $this.$lexemes.$next0();
                $q = jur_AltGroupQuantifierSet__init_0($term, $last, (-536870849));
                $term.$setNext($last);
                return $q;
            case -536870789:
                $q = new jur_CompositeGroupQuantifierSet;
                var$4 = $this.$lexemes;
                var$4 = var$4.$nextSpecial();
                var$6 = $this.$compCount0 + 1 | 0;
                $this.$compCount0 = var$6;
                jur_CompositeGroupQuantifierSet__init_($q, var$4, $term, $last, (-536870849), var$6);
                $term.$setNext($q);
                return $q;
            default:
        }
        return $term;
    }
    $leaf = null;
    if ($term !== null)
        $leaf = $term;
    switch ($quant) {
        case -2147483606:
        case -2147483605:
            $this.$lexemes.$next0();
            $q = jur_PossessiveQuantifierSet__init_0($leaf, $last, $quant);
            $leaf.$setNext($q);
            return $q;
        case -2147483585:
            $this.$lexemes.$next0();
            return jur_PossessiveAltQuantifierSet__init_0($leaf, $last, (-2147483585));
        case -2147483525:
            return jur_PossessiveCompositeQuantifierSet__init_0($this.$lexemes.$nextSpecial(), $leaf, $last, (-2147483525));
        case -1073741782:
        case -1073741781:
            $this.$lexemes.$next0();
            $q = jur_ReluctantQuantifierSet__init_0($leaf, $last, $quant);
            $leaf.$setNext($q);
            return $q;
        case -1073741761:
            $this.$lexemes.$next0();
            return jur_ReluctantAltQuantifierSet__init_0($leaf, $last, (-1073741761));
        case -1073741701:
            return jur_ReluctantCompositeQuantifierSet__init_0($this.$lexemes.$nextSpecial(), $leaf, $last, (-1073741701));
        case -536870870:
        case -536870869:
            $this.$lexemes.$next0();
            $q = jur_LeafQuantifierSet__init_0($leaf, $last, $quant);
            $leaf.$setNext($q);
            return $q;
        case -536870849:
            $this.$lexemes.$next0();
            return jur_AltQuantifierSet__init_0($leaf, $last, (-536870849));
        case -536870789:
            return jur_CompositeQuantifierSet__init_0($this.$lexemes.$nextSpecial(), $leaf, $last, (-536870789));
        default:
    }
    return $term;
},
jur_Pattern_processTerminal = ($this, $last) => {
    let $term, $ch, $newFlags, var$5, $negative, $cc, $number, var$9, var$10, var$11;
    $term = null;
    while (true) {
        a: {
            $ch = $this.$lexemes.$peek();
            if (($ch & (-2147418113)) == (-2147483608)) {
                $this.$lexemes.$next0();
                $newFlags = ($ch & 16711680) >> 16;
                $ch = $ch & (-16711681);
                if ($ch == (-16777176))
                    $this.$flags = $newFlags;
                else {
                    if ($ch != (-1073741784))
                        $newFlags = $this.$flags;
                    $term = jur_Pattern_processExpression($this, $ch, $newFlags, $last);
                    if ($this.$lexemes.$peek() != (-536870871))
                        $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$lexemes.$toString(), $this.$lexemes.$getIndex()));
                    $this.$lexemes.$next0();
                }
            } else {
                b: {
                    c: {
                        switch ($ch) {
                            case -2147483599:
                            case -2147483598:
                            case -2147483597:
                            case -2147483596:
                            case -2147483595:
                            case -2147483594:
                            case -2147483593:
                            case -2147483592:
                            case -2147483591:
                                break c;
                            case -2147483583:
                                break;
                            case -2147483582:
                                $this.$lexemes.$next0();
                                $term = jur_WordBoundary__init_(0);
                                break a;
                            case -2147483577:
                                $this.$lexemes.$next0();
                                $term = jur_PreviousMatch__init_0();
                                break a;
                            case -2147483558:
                                $this.$lexemes.$next0();
                                $term = new jur_EOLSet;
                                var$5 = $this.$consCount0 + 1 | 0;
                                $this.$consCount0 = var$5;
                                jur_EOLSet__init_($term, var$5);
                                break a;
                            case -2147483550:
                                $this.$lexemes.$next0();
                                $term = jur_WordBoundary__init_(1);
                                break a;
                            case -2147483526:
                                $this.$lexemes.$next0();
                                $term = jur_EOISet__init_0();
                                break a;
                            case -536870876:
                                $this.$lexemes.$next0();
                                $this.$consCount0 = $this.$consCount0 + 1 | 0;
                                if (jur_Pattern_hasFlag($this, 8)) {
                                    if (jur_Pattern_hasFlag($this, 1)) {
                                        $term = jur_UMultiLineEOLSet__init_0($this.$consCount0);
                                        break a;
                                    }
                                    $term = jur_MultiLineEOLSet__init_0($this.$consCount0);
                                    break a;
                                }
                                if (jur_Pattern_hasFlag($this, 1)) {
                                    $term = jur_UEOLSet__init_0($this.$consCount0);
                                    break a;
                                }
                                $term = jur_EOLSet__init_0($this.$consCount0);
                                break a;
                            case -536870866:
                                $this.$lexemes.$next0();
                                if (jur_Pattern_hasFlag($this, 32)) {
                                    $term = jur_DotAllSet__init_0();
                                    break a;
                                }
                                $term = jur_DotSet__init_0(jur_AbstractLineTerminator_getInstance($this.$flags));
                                break a;
                            case -536870821:
                                $this.$lexemes.$next0();
                                $negative = 0;
                                if ($this.$lexemes.$peek() == (-536870818)) {
                                    $negative = 1;
                                    $this.$lexemes.$next0();
                                }
                                $term = jur_Pattern_processRange($this, $negative, $last);
                                if ($this.$lexemes.$peek() != (-536870819))
                                    $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$lexemes.$toString(), $this.$lexemes.$getIndex()));
                                $this.$lexemes.$setMode(1);
                                $this.$lexemes.$next0();
                                break a;
                            case -536870818:
                                $this.$lexemes.$next0();
                                $this.$consCount0 = $this.$consCount0 + 1 | 0;
                                if (!jur_Pattern_hasFlag($this, 8)) {
                                    $term = jur_SOLSet__init_0();
                                    break a;
                                }
                                $term = jur_MultiLineSOLSet__init_0(jur_AbstractLineTerminator_getInstance($this.$flags));
                                break a;
                            case 0:
                                $cc = $this.$lexemes.$peekSpecial();
                                if ($cc !== null)
                                    $term = jur_Pattern_processRangeSet($this, $cc);
                                else {
                                    if ($this.$lexemes.$isEmpty()) {
                                        $term = jur_EmptySet__init_($last);
                                        break a;
                                    }
                                    $term = jur_CharSet__init_($ch & 65535);
                                }
                                $this.$lexemes.$next0();
                                break a;
                            default:
                                break b;
                        }
                        $this.$lexemes.$next0();
                        $term = jur_SOLSet__init_0();
                        break a;
                    }
                    $number = ($ch & 2147483647) - 48 | 0;
                    if ($this.$globalGroupIndex < $number)
                        $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$lexemes.$toString(), $this.$lexemes.$getIndex()));
                    $this.$lexemes.$next0();
                    $this.$consCount0 = $this.$consCount0 + 1 | 0;
                    $term = !jur_Pattern_hasFlag($this, 2) ? jur_BackReferenceSet__init_0($number, $this.$consCount0) : jur_Pattern_hasFlag($this, 64) ? jur_UCIBackReferenceSet__init_0($number, $this.$consCount0) : jur_CIBackReferenceSet__init_0($number, $this.$consCount0);
                    $this.$backRefs.data[$number].$isBackReferenced = 1;
                    $this.$needsBackRefReplacement = 1;
                    break a;
                }
                if ($ch >= 0 && !$this.$lexemes.$isSpecial()) {
                    $term = jur_Pattern_processCharSet($this, $ch);
                    $this.$lexemes.$next0();
                } else if ($ch == (-536870788))
                    $term = jur_EmptySet__init_($last);
                else {
                    if ($ch != (-536870871)) {
                        var$9 = new jur_PatternSyntaxException;
                        var$10 = !$this.$lexemes.$isSpecial() ? jl_Character_toString($ch & 65535) : ($this.$lexemes.$peekSpecial()).$toString();
                        var$11 = $this.$lexemes;
                        jur_PatternSyntaxException__init_0(var$9, var$10, var$11.$toString(), $this.$lexemes.$getIndex());
                        $rt_throw(var$9);
                    }
                    if ($last instanceof jur_FinalSet)
                        $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$lexemes.$toString(), $this.$lexemes.$getIndex()));
                    $term = jur_EmptySet__init_($last);
                }
            }
        }
        if ($ch != (-16777176))
            break;
    }
    return $term;
},
jur_Pattern_processRange = ($this, $negative, $last) => {
    let $res, $rangeSet;
    $res = jur_Pattern_processRangeExpression($this, $negative);
    $rangeSet = jur_Pattern_processRangeSet($this, $res);
    $rangeSet.$setNext($last);
    return $rangeSet;
},
jur_Pattern_processRangeExpression = ($this, $alt) => {
    let $res, $buffer, $intersection, $notClosed, $firstInClass, var$7, $cur, $negative, $cs, $$je;
    $res = jur_CharClass__init_3($alt, jur_Pattern_hasFlag($this, 2), jur_Pattern_hasFlag($this, 64));
    $buffer = (-1);
    $intersection = 0;
    $notClosed = 0;
    $firstInClass = 1;
    a: {
        b: {
            c: while (true) {
                if ($this.$lexemes.$isEmpty())
                    break a;
                $notClosed = $this.$lexemes.$peek() == (-536870819) && !$firstInClass ? 0 : 1;
                if (!$notClosed)
                    break a;
                d: {
                    switch ($this.$lexemes.$peek()) {
                        case -536870874:
                            if ($buffer >= 0)
                                $res.$add($buffer);
                            $buffer = $this.$lexemes.$next0();
                            if ($this.$lexemes.$peek() != (-536870874)) {
                                $buffer = 38;
                                break d;
                            }
                            if ($this.$lexemes.$lookAhead() == (-536870821)) {
                                $this.$lexemes.$next0();
                                $intersection = 1;
                                $buffer = (-1);
                                break d;
                            }
                            $this.$lexemes.$next0();
                            if ($firstInClass) {
                                $res = jur_Pattern_processRangeExpression($this, 0);
                                break d;
                            }
                            if ($this.$lexemes.$peek() == (-536870819))
                                break d;
                            $res.$intersection(jur_Pattern_processRangeExpression($this, 0));
                            break d;
                        case -536870867:
                            if (!$firstInClass && $this.$lexemes.$lookAhead() != (-536870819)) {
                                var$7 = $this.$lexemes;
                                if (var$7.$lookAhead() != (-536870821) && $buffer >= 0) {
                                    $this.$lexemes.$next0();
                                    $cur = $this.$lexemes.$peek();
                                    if ($this.$lexemes.$isSpecial())
                                        break c;
                                    if ($cur < 0) {
                                        var$7 = $this.$lexemes;
                                        if (var$7.$lookAhead() != (-536870819)) {
                                            var$7 = $this.$lexemes;
                                            if (var$7.$lookAhead() != (-536870821) && $buffer >= 0)
                                                break c;
                                        }
                                    }
                                    e: {
                                        try {
                                            if (jur_Lexer_isLetter($cur))
                                                break e;
                                            $cur = $cur & 65535;
                                            break e;
                                        } catch ($$e) {
                                            $$je = $rt_wrapException($$e);
                                            if ($$je instanceof jl_Exception) {
                                                break b;
                                            } else {
                                                throw $$e;
                                            }
                                        }
                                    }
                                    try {
                                        $res.$add0($buffer, $cur);
                                    } catch ($$e) {
                                        $$je = $rt_wrapException($$e);
                                        if ($$je instanceof jl_Exception) {
                                            break b;
                                        } else {
                                            throw $$e;
                                        }
                                    }
                                    $this.$lexemes.$next0();
                                    $buffer = (-1);
                                    break d;
                                }
                            }
                            if ($buffer >= 0)
                                $res.$add($buffer);
                            $buffer = 45;
                            $this.$lexemes.$next0();
                            break d;
                        case -536870821:
                            if ($buffer >= 0) {
                                $res.$add($buffer);
                                $buffer = (-1);
                            }
                            $this.$lexemes.$next0();
                            $negative = 0;
                            if ($this.$lexemes.$peek() == (-536870818)) {
                                $this.$lexemes.$next0();
                                $negative = 1;
                            }
                            if (!$intersection)
                                $res.$union(jur_Pattern_processRangeExpression($this, $negative));
                            else
                                $res.$intersection(jur_Pattern_processRangeExpression($this, $negative));
                            $intersection = 0;
                            $this.$lexemes.$next0();
                            break d;
                        case -536870819:
                            if ($buffer >= 0)
                                $res.$add($buffer);
                            $buffer = 93;
                            $this.$lexemes.$next0();
                            break d;
                        case -536870818:
                            if ($buffer >= 0)
                                $res.$add($buffer);
                            $buffer = 94;
                            $this.$lexemes.$next0();
                            break d;
                        case 0:
                            if ($buffer >= 0)
                                $res.$add($buffer);
                            $cs = $this.$lexemes.$peekSpecial();
                            if ($cs === null)
                                $buffer = 0;
                            else {
                                $res.$add4($cs);
                                $buffer = (-1);
                            }
                            $this.$lexemes.$next0();
                            break d;
                        default:
                    }
                    if ($buffer >= 0)
                        $res.$add($buffer);
                    $buffer = $this.$lexemes.$next0();
                }
                $firstInClass = 0;
            }
            $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), jur_Pattern_pattern($this), $this.$lexemes.$getIndex()));
        }
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), jur_Pattern_pattern($this), $this.$lexemes.$getIndex()));
    }
    if (!$notClosed) {
        if ($buffer >= 0)
            $res.$add($buffer);
        return $res;
    }
    $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), jur_Pattern_pattern($this), $this.$lexemes.$getIndex() - 1 | 0));
},
jur_Pattern_processCharSet = ($this, $ch) => {
    let $isSupplCodePoint;
    $isSupplCodePoint = jl_Character_isSupplementaryCodePoint($ch);
    if (jur_Pattern_hasFlag($this, 2)) {
        a: {
            if (!($ch >= 97 && $ch <= 122)) {
                if ($ch < 65)
                    break a;
                if ($ch > 90)
                    break a;
            }
            return jur_CICharSet__init_($ch & 65535);
        }
        if (jur_Pattern_hasFlag($this, 64) && $ch > 128) {
            if ($isSupplCodePoint)
                return jur_UCISupplCharSet__init_0($ch);
            if (jur_Lexer_isLowSurrogate($ch))
                return jur_LowSurrogateCharSet__init_($ch & 65535);
            if (!jur_Lexer_isHighSurrogate($ch))
                return jur_UCICharSet__init_0($ch & 65535);
            return jur_HighSurrogateCharSet__init_0($ch & 65535);
        }
    }
    if ($isSupplCodePoint)
        return jur_SupplCharSet__init_0($ch);
    if (jur_Lexer_isLowSurrogate($ch))
        return jur_LowSurrogateCharSet__init_($ch & 65535);
    if (!jur_Lexer_isHighSurrogate($ch))
        return jur_CharSet__init_($ch & 65535);
    return jur_HighSurrogateCharSet__init_0($ch & 65535);
},
jur_Pattern_processRangeSet = ($this, $charClass) => {
    let $surrogates, $lowHighSurrRangeSet;
    if (!$charClass.$hasLowHighSurrogates()) {
        if (!$charClass.$mayContainSupplCodepoints()) {
            if ($charClass.$hasUCI())
                return jur_UCIRangeSet__init_0($charClass);
            return jur_RangeSet__init_0($charClass);
        }
        if ($charClass.$hasUCI())
            return jur_UCISupplRangeSet__init_($charClass);
        return jur_SupplRangeSet__init_0($charClass);
    }
    $surrogates = $charClass.$getSurrogates();
    $lowHighSurrRangeSet = jur_LowHighSurrogateRangeSet__init_0($surrogates);
    if (!$charClass.$mayContainSupplCodepoints()) {
        if ($charClass.$hasUCI())
            return jur_CompositeRangeSet__init_(jur_UCIRangeSet__init_0($charClass.$getWithoutSurrogates()), $lowHighSurrRangeSet);
        return jur_CompositeRangeSet__init_(jur_RangeSet__init_0($charClass.$getWithoutSurrogates()), $lowHighSurrRangeSet);
    }
    if ($charClass.$hasUCI())
        return jur_CompositeRangeSet__init_(jur_UCISupplRangeSet__init_($charClass.$getWithoutSurrogates()), $lowHighSurrRangeSet);
    return jur_CompositeRangeSet__init_(jur_SupplRangeSet__init_0($charClass.$getWithoutSurrogates()), $lowHighSurrRangeSet);
},
jur_Pattern_compile = $pattern => {
    return jur_Pattern_compile0($pattern, 0);
},
jur_Pattern_finalizeCompile = $this => {
    if ($this.$needsBackRefReplacement)
        $this.$start1.$processSecondPass();
    if ($this.$namedGroups0 === null)
        $this.$namedGroups0 = ju_Collections_emptyMap();
    else
        $this.$namedGroups0 = ju_Collections_unmodifiableMap($this.$namedGroups0);
},
jur_Pattern_quote = $s => {
    let $sb, $apos, var$4, $apos_0;
    $sb = (jl_StringBuilder__init_()).$append13($rt_s(310));
    $apos = 0;
    while (true) {
        var$4 = $s.$indexOf0($rt_s(311), $apos);
        if (var$4 < 0)
            break;
        $apos_0 = var$4 + 2 | 0;
        ($sb.$append13($s.$substring($apos, $apos_0))).$append13($rt_s(312));
        $apos = $apos_0;
    }
    return (($sb.$append13($s.$substring0($apos))).$append13($rt_s(311))).$toString();
},
jur_Pattern_namedGroups = $this => {
    return $this.$namedGroups0;
},
jur_Pattern_groupCount = $this => {
    return $this.$globalGroupIndex;
},
jur_Pattern_compCount = $this => {
    return $this.$compCount0 + 1 | 0;
},
jur_Pattern_consCount = $this => {
    return $this.$consCount0 + 1 | 0;
},
jur_Pattern_getSupplement = $ch => {
    if ($ch >= 97 && $ch <= 122)
        $ch = ($ch - 32 | 0) & 65535;
    else if ($ch >= 65 && $ch <= 90)
        $ch = ($ch + 32 | 0) & 65535;
    return $ch;
},
jur_Pattern_hasFlag = ($this, $flag) => {
    return ($this.$flags & $flag) != $flag ? 0 : 1;
},
jur_Pattern__init_ = $this => {
    jl_Object__init_($this);
    $this.$backRefs = $rt_createArray(jur_FSet, 10);
    $this.$globalGroupIndex = (-1);
    $this.$compCount0 = (-1);
    $this.$consCount0 = (-1);
},
jur_Pattern__init_0 = () => {
    let var_0 = new jur_Pattern();
    jur_Pattern__init_(var_0);
    return var_0;
};
function m_GameModel$update$lambda$_20_0() {
    jl_Object.call(this);
    this.$_0 = null;
}
let m_GameModel$update$lambda$_20_0__init_ = (var$0, var$1) => {
    jl_Object__init_(var$0);
    var$0.$_0 = var$1;
},
m_GameModel$update$lambda$_20_0__init_0 = var_0 => {
    let var_1 = new m_GameModel$update$lambda$_20_0();
    m_GameModel$update$lambda$_20_0__init_(var_1, var_0);
    return var_1;
},
m_GameModel$update$lambda$_20_0_test0 = (var$0, var$1) => {
    return m_GameModel$update$lambda$_20_0_test(var$0, var$1);
},
m_GameModel$update$lambda$_20_0_test = (var$0, var$1) => {
    return m_GameModel_lambda$update$0(var$0.$_0, var$1);
},
ji_IOException = $rt_classWithoutFields(jl_Exception),
ji_IOException__init_0 = $this => {
    jl_Exception__init_($this);
},
ji_IOException__init_1 = () => {
    let var_0 = new ji_IOException();
    ji_IOException__init_0(var_0);
    return var_0;
},
ji_IOException__init_ = ($this, $message) => {
    jl_Exception__init_0($this, $message);
},
ji_IOException__init_2 = var_0 => {
    let var_1 = new ji_IOException();
    ji_IOException__init_(var_1, var_0);
    return var_1;
},
ji_UnsupportedEncodingException = $rt_classWithoutFields(ji_IOException),
ji_UnsupportedEncodingException__init_ = ($this, $message) => {
    ji_IOException__init_($this, $message);
},
ji_UnsupportedEncodingException__init_0 = var_0 => {
    let var_1 = new ji_UnsupportedEncodingException();
    ji_UnsupportedEncodingException__init_(var_1, var_0);
    return var_1;
},
jur_PosAltGroupQuantifierSet = $rt_classWithoutFields(jur_AltGroupQuantifierSet),
jur_PosAltGroupQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_AltGroupQuantifierSet__init_($this, $innerSet, $next, $type);
    jur_FSet_$callClinit();
    $innerSet.$setNext(jur_FSet_posFSet);
},
jur_PosAltGroupQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_PosAltGroupQuantifierSet();
    jur_PosAltGroupQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_PosAltGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex;
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex <= 0)
        $nextIndex = $stringIndex;
    return $this.$next1.$matches($nextIndex, $testString, $matchResult);
},
jur_PosAltGroupQuantifierSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jn_BufferOverflowException = $rt_classWithoutFields(jl_RuntimeException),
jn_BufferOverflowException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
jn_BufferOverflowException__init_ = () => {
    let var_0 = new jn_BufferOverflowException();
    jn_BufferOverflowException__init_0(var_0);
    return var_0;
};
function ju_Collections$13() {
    ju_AbstractMap.call(this);
    this.$val$m = null;
}
let ju_Collections$13__init_ = ($this, var$1) => {
    $this.$val$m = var$1;
    ju_AbstractMap__init_($this);
},
ju_Collections$13__init_0 = var_0 => {
    let var_1 = new ju_Collections$13();
    ju_Collections$13__init_(var_1, var_0);
    return var_1;
},
me_PlayerShot = $rt_classWithoutFields(me_Entity),
me_PlayerShot__init_ = ($this, $bounds, $player) => {
    let var$3, var$4, var$5, var$6, var$7;
    var$3 = $player.$getCenterX();
    s_Entities_$callClinit();
    var$4 = var$3 - (jl_Math_ceil(s_Entities_getWidth(s_Entities_PLAYER_SHOT) / 2.0) | 0) | 0;
    var$5 = $player.$getCenterY();
    var$6 = s_Entities_getWidth(s_Entities_PLAYER_SHOT);
    var$7 = s_Entities_getHeight(s_Entities_PLAYER_SHOT);
    s_RotationDirection_$callClinit();
    me_Entity__init_($this, var$4, var$5, var$6, var$7, 6, $bounds, s_RotationDirection_U);
    $this.$entityName = s_Entities_PLAYER_SHOT;
},
me_PlayerShot__init_0 = (var_0, var_1) => {
    let var_2 = new me_PlayerShot();
    me_PlayerShot__init_(var_2, var_0, var_1);
    return var_2;
},
me_PlayerShot_update = ($this, $frameNumber) => {
    $this.$y1 = $this.$y1 - $this.$speed | 0;
    if ($this.$getY() < (-10))
        $this.$isToRemove0 = 1;
},
ju_Queue = $rt_classWithoutFields(0),
ju_Deque = $rt_classWithoutFields(0),
jur_AbstractCharClass$LazyJavaLetterOrDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaLetterOrDigit__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaLetterOrDigit__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaLetterOrDigit();
    jur_AbstractCharClass$LazyJavaLetterOrDigit__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaLetterOrDigit_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaLetterOrDigit$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
};
function otciu_UnicodeHelper$Range() {
    let a = this; jl_Object.call(a);
    a.$start2 = 0;
    a.$end2 = 0;
    a.$data2 = null;
}
let otciu_UnicodeHelper$Range__init_ = ($this, $start, $end, $data) => {
    jl_Object__init_($this);
    $this.$start2 = $start;
    $this.$end2 = $end;
    $this.$data2 = $data;
},
otciu_UnicodeHelper$Range__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new otciu_UnicodeHelper$Range();
    otciu_UnicodeHelper$Range__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_AbstractLineTerminator$2 = $rt_classWithoutFields(jur_AbstractLineTerminator),
jur_AbstractLineTerminator$2__init_ = $this => {
    jur_AbstractLineTerminator__init_($this);
},
jur_AbstractLineTerminator$2__init_0 = () => {
    let var_0 = new jur_AbstractLineTerminator$2();
    jur_AbstractLineTerminator$2__init_(var_0);
    return var_0;
},
jur_AbstractLineTerminator$2_isLineTerminator = ($this, $ch) => {
    return $ch != 10 && $ch != 13 && $ch != 133 && ($ch | 1) != 8233 ? 0 : 1;
},
jur_AbstractLineTerminator$2_isAfterLineTerminator = ($this, $ch, $ch2) => {
    let var$3;
    a: {
        b: {
            if ($ch != 10 && $ch != 133 && ($ch | 1) != 8233) {
                if ($ch != 13)
                    break b;
                if ($ch2 == 10)
                    break b;
            }
            var$3 = 1;
            break a;
        }
        var$3 = 0;
    }
    return var$3;
};
function otciu_CharMapping() {
    let a = this; jl_Object.call(a);
    a.$binarySearchTable0 = null;
    a.$fastTable = null;
}
let otciu_CharMapping__init_ = ($this, $binarySearchTable, $fastTable) => {
    jl_Object__init_($this);
    $this.$binarySearchTable0 = $binarySearchTable;
    $this.$fastTable = $fastTable;
},
otciu_CharMapping__init_0 = (var_0, var_1) => {
    let var_2 = new otciu_CharMapping();
    otciu_CharMapping__init_(var_2, var_0, var_1);
    return var_2;
},
jl_Record = $rt_classWithoutFields(),
jl_Record__init_ = $this => {
    jl_Object__init_($this);
};
function m_AlienFormationsLibrary$StagePaths() {
    jl_Record.call(this);
    this.$formationsList0 = null;
}
let m_AlienFormationsLibrary$StagePaths__init_ = ($this, $formationsList) => {
    jl_Record__init_($this);
    $this.$formationsList0 = $formationsList;
},
m_AlienFormationsLibrary$StagePaths__init_0 = var_0 => {
    let var_1 = new m_AlienFormationsLibrary$StagePaths();
    m_AlienFormationsLibrary$StagePaths__init_(var_1, var_0);
    return var_1;
},
m_AlienFormationsLibrary$StagePaths_toString = $this => {
    return ((((jl_StringBuilder__init_1($rt_s(313))).$append13($rt_s(314))).$append($this.$formationsList0)).$append13($rt_s(315))).$toString();
},
m_AlienFormationsLibrary$StagePaths_formationsList = $this => {
    return $this.$formationsList0;
},
jur_AbstractLineTerminator$1 = $rt_classWithoutFields(jur_AbstractLineTerminator),
jur_AbstractLineTerminator$1__init_ = $this => {
    jur_AbstractLineTerminator__init_($this);
},
jur_AbstractLineTerminator$1__init_0 = () => {
    let var_0 = new jur_AbstractLineTerminator$1();
    jur_AbstractLineTerminator$1__init_(var_0);
    return var_0;
},
jur_AbstractLineTerminator$1_isLineTerminator = ($this, $ch) => {
    return $ch != 10 ? 0 : 1;
},
jur_AbstractLineTerminator$1_isAfterLineTerminator = ($this, $ch, $ch2) => {
    return $ch != 10 ? 0 : 1;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart();
    jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
},
otjc_JSWeakRef = $rt_classWithoutFields();
function otci_CharFlow() {
    let a = this; jl_Object.call(a);
    a.$characters = null;
    a.$pointer = 0;
}
let otci_CharFlow__init_ = ($this, $characters) => {
    jl_Object__init_($this);
    $this.$characters = $characters;
},
otci_CharFlow__init_0 = var_0 => {
    let var_1 = new otci_CharFlow();
    otci_CharFlow__init_(var_1, var_0);
    return var_1;
};
function jur_RangeSet() {
    let a = this; jur_LeafSet.call(a);
    a.$chars0 = null;
    a.$alt2 = 0;
}
let jur_RangeSet__init_ = ($this, $cc) => {
    jur_LeafSet__init_($this);
    $this.$chars0 = $cc.$getInstance();
    $this.$alt2 = $cc.$alt;
},
jur_RangeSet__init_0 = var_0 => {
    let var_1 = new jur_RangeSet();
    jur_RangeSet__init_(var_1, var_0);
    return var_1;
},
jur_RangeSet_accepts = ($this, $strIndex, $testString) => {
    return !$this.$chars0.$contains($testString.$charAt($strIndex)) ? (-1) : 1;
},
jur_RangeSet_getName = $this => {
    let var$1, var$2, var$3;
    var$1 = !$this.$alt2 ? $rt_s(45) : $rt_s(46);
    var$2 = $this.$chars0.$toString();
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(47)), var$1), var$2);
    return jl_StringBuilder_toString(var$3);
},
jur_RangeSet_first = ($this, $set) => {
    if ($set instanceof jur_CharSet)
        return jur_AbstractCharClass_intersects0($this.$chars0, $set.$getChar0());
    if ($set instanceof jur_RangeSet)
        return jur_AbstractCharClass_intersects($this.$chars0, $set.$chars0);
    if ($set instanceof jur_SupplRangeSet)
        return jur_AbstractCharClass_intersects($this.$chars0, $set.$getChars());
    if (!($set instanceof jur_SupplCharSet))
        return 1;
    return 0;
},
jur_RangeSet_getChars = $this => {
    return $this.$chars0;
};
function jur_UnicodeCategory() {
    jur_AbstractCharClass.call(this);
    this.$category = 0;
}
let jur_UnicodeCategory__init_ = ($this, $category) => {
    jur_AbstractCharClass__init_($this);
    $this.$category = $category;
},
jur_UnicodeCategory__init_0 = var_0 => {
    let var_1 = new jur_UnicodeCategory();
    jur_UnicodeCategory__init_(var_1, var_0);
    return var_1;
},
jur_UnicodeCategory_contains = ($this, $ch) => {
    return $this.$alt ^ ($this.$category != jl_Character_getType0($ch & 65535) ? 0 : 1);
},
jur_UnicodeCategoryScope = $rt_classWithoutFields(jur_UnicodeCategory),
jur_UnicodeCategoryScope__init_ = ($this, $category) => {
    jur_UnicodeCategory__init_($this, $category);
},
jur_UnicodeCategoryScope__init_0 = var_0 => {
    let var_1 = new jur_UnicodeCategoryScope();
    jur_UnicodeCategoryScope__init_(var_1, var_0);
    return var_1;
},
jur_UnicodeCategoryScope_contains = ($this, $ch) => {
    return $this.$alt ^ (!($this.$category >> jl_Character_getType0($ch & 65535) & 1) ? 0 : 1);
};
function jur_CharClass() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$ci = 0;
    a.$uci = 0;
    a.$hasUCI0 = 0;
    a.$invertedSurrogates = 0;
    a.$inverted = 0;
    a.$hideBits = 0;
    a.$bits = null;
    a.$nonBitSet = null;
}
let jur_CharClass__init_2 = $this => {
    jur_AbstractCharClass__init_($this);
    $this.$bits = ju_BitSet__init_1();
},
jur_CharClass__init_ = () => {
    let var_0 = new jur_CharClass();
    jur_CharClass__init_2(var_0);
    return var_0;
},
jur_CharClass__init_0 = ($this, $ci, $uci) => {
    jur_AbstractCharClass__init_($this);
    $this.$bits = ju_BitSet__init_1();
    $this.$ci = $ci;
    $this.$uci = $uci;
},
jur_CharClass__init_4 = (var_0, var_1) => {
    let var_2 = new jur_CharClass();
    jur_CharClass__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass__init_1 = ($this, $negative, $ci, $uci) => {
    jur_CharClass__init_0($this, $ci, $uci);
    $this.$setNegative($negative);
},
jur_CharClass__init_3 = (var_0, var_1, var_2) => {
    let var_3 = new jur_CharClass();
    jur_CharClass__init_1(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_CharClass_add = ($this, $ch) => {
    a: {
        if ($this.$ci) {
            b: {
                if (!($ch >= 97 && $ch <= 122)) {
                    if ($ch < 65)
                        break b;
                    if ($ch > 90)
                        break b;
                }
                if ($this.$inverted) {
                    $this.$bits.$clear0(jur_Pattern_getSupplement($ch & 65535));
                    break a;
                }
                $this.$bits.$set0(jur_Pattern_getSupplement($ch & 65535));
                break a;
            }
            if ($this.$uci && $ch > 128) {
                $this.$hasUCI0 = 1;
                $ch = jl_Character_toLowerCase0(jl_Character_toUpperCase0($ch));
            }
        }
    }
    if (!(!jur_Lexer_isHighSurrogate($ch) && !jur_Lexer_isLowSurrogate($ch))) {
        if ($this.$invertedSurrogates)
            $this.$lowHighSurrogates.$clear0($ch - 55296 | 0);
        else
            $this.$lowHighSurrogates.$set0($ch - 55296 | 0);
    }
    if ($this.$inverted)
        $this.$bits.$clear0($ch);
    else
        $this.$bits.$set0($ch);
    if (!$this.$mayContainSupplCodepoints0 && jl_Character_isSupplementaryCodePoint($ch))
        $this.$mayContainSupplCodepoints0 = 1;
    return $this;
},
jur_CharClass_add1 = ($this, $cc) => {
    let $curAlt, $nb;
    if (!$this.$mayContainSupplCodepoints0 && $cc.$mayContainSupplCodepoints0)
        $this.$mayContainSupplCodepoints0 = 1;
    if ($this.$invertedSurrogates) {
        if (!$cc.$altSurrogates)
            $this.$lowHighSurrogates.$andNot($cc.$getLowHighSurrogates());
        else
            $this.$lowHighSurrogates.$and($cc.$getLowHighSurrogates());
    } else if (!$cc.$altSurrogates)
        $this.$lowHighSurrogates.$or($cc.$getLowHighSurrogates());
    else {
        $this.$lowHighSurrogates.$xor($cc.$getLowHighSurrogates());
        $this.$lowHighSurrogates.$and($cc.$getLowHighSurrogates());
        $this.$altSurrogates = $this.$altSurrogates ? 0 : 1;
        $this.$invertedSurrogates = 1;
    }
    if (!$this.$hideBits && $cc.$getBits() !== null) {
        if ($this.$inverted) {
            if (!$cc.$isNegative())
                $this.$bits.$andNot($cc.$getBits());
            else
                $this.$bits.$and($cc.$getBits());
        } else if (!$cc.$isNegative())
            $this.$bits.$or($cc.$getBits());
        else {
            $this.$bits.$xor($cc.$getBits());
            $this.$bits.$and($cc.$getBits());
            $this.$alt = $this.$alt ? 0 : 1;
            $this.$inverted = 1;
        }
    } else {
        $curAlt = $this.$alt;
        if ($this.$nonBitSet !== null) {
            $nb = $this.$nonBitSet;
            if (!$curAlt)
                $this.$nonBitSet = jur_CharClass$5__init_0($this, $curAlt, $nb, $cc);
            else
                $this.$nonBitSet = jur_CharClass$4__init_0($this, $curAlt, $nb, $cc);
        } else {
            if ($curAlt && !$this.$inverted && $this.$bits.$isEmpty())
                $this.$nonBitSet = jur_CharClass$1__init_0($this, $cc);
            else if (!$curAlt)
                $this.$nonBitSet = jur_CharClass$3__init_0($this, $curAlt, $cc);
            else
                $this.$nonBitSet = jur_CharClass$2__init_0($this, $curAlt, $cc);
            $this.$hideBits = 1;
        }
    }
    return $this;
},
jur_CharClass_add0 = ($this, $i, $end) => {
    if ($i > $end)
        $rt_throw(jl_IllegalArgumentException__init_());
    a: {
        b: {
            if (!$this.$ci) {
                if ($end < 55296)
                    break b;
                if ($i > 57343)
                    break b;
            }
            while (true) {
                if ($i >= ($end + 1 | 0))
                    break a;
                $this.$add($i);
                $i = $i + 1 | 0;
            }
        }
        if ($this.$inverted)
            $this.$bits.$clear1($i, $end + 1 | 0);
        else
            $this.$bits.$set($i, $end + 1 | 0);
    }
    return $this;
},
jur_CharClass_union = ($this, $clazz) => {
    let $curAlt, $nb;
    if (!$this.$mayContainSupplCodepoints0 && $clazz.$mayContainSupplCodepoints0)
        $this.$mayContainSupplCodepoints0 = 1;
    if ($clazz.$hasUCI())
        $this.$hasUCI0 = 1;
    if (!($this.$altSurrogates ^ $clazz.$altSurrogates)) {
        if (!$this.$altSurrogates)
            $this.$lowHighSurrogates.$or($clazz.$getLowHighSurrogates());
        else
            $this.$lowHighSurrogates.$and($clazz.$getLowHighSurrogates());
    } else if ($this.$altSurrogates)
        $this.$lowHighSurrogates.$andNot($clazz.$getLowHighSurrogates());
    else {
        $this.$lowHighSurrogates.$xor($clazz.$getLowHighSurrogates());
        $this.$lowHighSurrogates.$and($clazz.$getLowHighSurrogates());
        $this.$altSurrogates = 1;
    }
    if (!$this.$hideBits && $clazz.$getBits() !== null) {
        if (!($this.$alt ^ $clazz.$isNegative())) {
            if (!$this.$alt)
                $this.$bits.$or($clazz.$getBits());
            else
                $this.$bits.$and($clazz.$getBits());
        } else if ($this.$alt)
            $this.$bits.$andNot($clazz.$getBits());
        else {
            $this.$bits.$xor($clazz.$getBits());
            $this.$bits.$and($clazz.$getBits());
            $this.$alt = 1;
        }
    } else {
        $curAlt = $this.$alt;
        if ($this.$nonBitSet !== null) {
            $nb = $this.$nonBitSet;
            if (!$curAlt)
                $this.$nonBitSet = jur_CharClass$11__init_0($this, $curAlt, $nb, $clazz);
            else
                $this.$nonBitSet = jur_CharClass$10__init_0($this, $curAlt, $nb, $clazz);
        } else {
            if (!$this.$inverted && $this.$bits.$isEmpty()) {
                if (!$curAlt)
                    $this.$nonBitSet = jur_CharClass$7__init_0($this, $clazz);
                else
                    $this.$nonBitSet = jur_CharClass$6__init_0($this, $clazz);
            } else if (!$curAlt)
                $this.$nonBitSet = jur_CharClass$9__init_0($this, $clazz, $curAlt);
            else
                $this.$nonBitSet = jur_CharClass$8__init_0($this, $clazz, $curAlt);
            $this.$hideBits = 1;
        }
    }
},
jur_CharClass_intersection = ($this, $clazz) => {
    let $curAlt, $nb;
    if (!$this.$mayContainSupplCodepoints0 && $clazz.$mayContainSupplCodepoints0)
        $this.$mayContainSupplCodepoints0 = 1;
    if ($clazz.$hasUCI())
        $this.$hasUCI0 = 1;
    if (!($this.$altSurrogates ^ $clazz.$altSurrogates)) {
        if (!$this.$altSurrogates)
            $this.$lowHighSurrogates.$and($clazz.$getLowHighSurrogates());
        else
            $this.$lowHighSurrogates.$or($clazz.$getLowHighSurrogates());
    } else if (!$this.$altSurrogates)
        $this.$lowHighSurrogates.$andNot($clazz.$getLowHighSurrogates());
    else {
        $this.$lowHighSurrogates.$xor($clazz.$getLowHighSurrogates());
        $this.$lowHighSurrogates.$and($clazz.$getLowHighSurrogates());
        $this.$altSurrogates = 0;
    }
    if (!$this.$hideBits && $clazz.$getBits() !== null) {
        if (!($this.$alt ^ $clazz.$isNegative())) {
            if (!$this.$alt)
                $this.$bits.$and($clazz.$getBits());
            else
                $this.$bits.$or($clazz.$getBits());
        } else if (!$this.$alt)
            $this.$bits.$andNot($clazz.$getBits());
        else {
            $this.$bits.$xor($clazz.$getBits());
            $this.$bits.$and($clazz.$getBits());
            $this.$alt = 0;
        }
    } else {
        $curAlt = $this.$alt;
        if ($this.$nonBitSet !== null) {
            $nb = $this.$nonBitSet;
            if (!$curAlt)
                $this.$nonBitSet = jur_CharClass$17__init_0($this, $curAlt, $nb, $clazz);
            else
                $this.$nonBitSet = jur_CharClass$16__init_0($this, $curAlt, $nb, $clazz);
        } else {
            if (!$this.$inverted && $this.$bits.$isEmpty()) {
                if (!$curAlt)
                    $this.$nonBitSet = jur_CharClass$13__init_0($this, $clazz);
                else
                    $this.$nonBitSet = jur_CharClass$12__init_0($this, $clazz);
            } else if (!$curAlt)
                $this.$nonBitSet = jur_CharClass$15__init_0($this, $clazz, $curAlt);
            else
                $this.$nonBitSet = jur_CharClass$14__init_0($this, $clazz, $curAlt);
            $this.$hideBits = 1;
        }
    }
},
jur_CharClass_contains = ($this, $ch) => {
    if ($this.$nonBitSet !== null)
        return $this.$alt ^ $this.$nonBitSet.$contains($ch);
    return $this.$alt ^ $this.$bits.$get3($ch);
},
jur_CharClass_getBits = $this => {
    if (!$this.$hideBits)
        return $this.$bits;
    return null;
},
jur_CharClass_getLowHighSurrogates = $this => {
    return $this.$lowHighSurrogates;
},
jur_CharClass_getInstance = $this => {
    let $bs, $res;
    if ($this.$nonBitSet !== null)
        return $this;
    $bs = $this.$getBits();
    $res = jur_CharClass$18__init_0($this, $bs);
    return $res.$setNegative($this.$isNegative());
},
jur_CharClass_toString = $this => {
    let $temp, $i;
    $temp = jl_StringBuilder__init_();
    $i = $this.$bits.$nextSetBit(0);
    while ($i >= 0) {
        $temp.$append12(jl_Character_toChars($i));
        $temp.$append0(124);
        $i = $this.$bits.$nextSetBit($i + 1 | 0);
    }
    if ($temp.$length() > 0)
        $temp.$deleteCharAt($temp.$length() - 1 | 0);
    return $temp.$toString();
},
jur_CharClass_hasUCI = $this => {
    return $this.$hasUCI0;
},
jn_BufferUnderflowException = $rt_classWithoutFields(jl_RuntimeException),
jn_BufferUnderflowException__init_ = $this => {
    jl_RuntimeException__init_($this);
},
jn_BufferUnderflowException__init_0 = () => {
    let var_0 = new jn_BufferUnderflowException();
    jn_BufferUnderflowException__init_(var_0);
    return var_0;
};
function otcit_FloatAnalyzer$Result() {
    let a = this; jl_Object.call(a);
    a.$mantissa0 = 0;
    a.$exponent0 = 0;
    a.$sign1 = 0;
}
let otcit_FloatAnalyzer$Result__init_ = $this => {
    jl_Object__init_($this);
},
otcit_FloatAnalyzer$Result__init_0 = () => {
    let var_0 = new otcit_FloatAnalyzer$Result();
    otcit_FloatAnalyzer$Result__init_(var_0);
    return var_0;
},
jur_UCIDecomposedCharSet = $rt_classWithoutFields(jur_DecomposedCharSet),
jur_UCIDecomposedCharSet__init_ = ($this, $decomp, $decomposedCharLength) => {
    jur_DecomposedCharSet__init_($this, $decomp, $decomposedCharLength);
},
jur_UCIDecomposedCharSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_UCIDecomposedCharSet();
    jur_UCIDecomposedCharSet__init_(var_2, var_0, var_1);
    return var_2;
},
otrr_ClassInfo = $rt_classWithoutFields(otrr_ReflectionInfo),
otrr_ClassInfo_newArrayInstance = (var$0, var$1) => {
    switch (var$0.primitiveKind) {
        default: return $rt_createArray(var$0, var$1);
    }
};
function jur_AbstractCharClass$LazyJavaWhitespace$1() {
    jur_AbstractCharClass.call(this);
    this.$this$029 = null;
}
let jur_AbstractCharClass$LazyJavaWhitespace$1__init_ = (var$0, var$1) => {
    var$0.$this$029 = var$1;
    jur_AbstractCharClass__init_(var$0);
},
jur_AbstractCharClass$LazyJavaWhitespace$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaWhitespace$1();
    jur_AbstractCharClass$LazyJavaWhitespace$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaWhitespace$1_contains = ($this, $ch) => {
    return jl_Character_isWhitespace($ch);
},
jur_AbstractCharClass$LazyJavaJavaIdentifierStart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaJavaIdentifierStart();
    jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierStart_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
},
jl_CloneNotSupportedException = $rt_classWithoutFields(jl_Exception),
jl_CloneNotSupportedException__init_ = $this => {
    jl_Exception__init_($this);
},
jl_CloneNotSupportedException__init_0 = () => {
    let var_0 = new jl_CloneNotSupportedException();
    jl_CloneNotSupportedException__init_(var_0);
    return var_0;
},
v_WebEntityPainter$1 = $rt_classWithoutFields(),
v_WebEntityPainter$1_$SwitchMap$shared$Entities = null,
v_WebEntityPainter$1_$callClinit = () => {
    v_WebEntityPainter$1_$callClinit = $rt_eraseClinit(v_WebEntityPainter$1);
    v_WebEntityPainter$1__clinit_();
},
v_WebEntityPainter$1__clinit_ = () => {
    v_WebEntityPainter$1_$SwitchMap$shared$Entities = $rt_createIntArray((s_Entities_values()).data.length);
    v_WebEntityPainter$1_$SwitchMap$shared$Entities.data[jl_Enum_ordinal(s_Entities_PLAYER)] = 1;
},
jl_Long = $rt_classWithoutFields(jl_Number),
jl_Long_TYPE = null,
jl_Long_$callClinit = () => {
    jl_Long_$callClinit = $rt_eraseClinit(jl_Long);
    jl_Long__clinit_();
},
jl_Long_divideUnsigned = (var$1, var$2) => {
    return Long_udiv(var$1, var$2);
},
jl_Long_compareUnsigned = (var$1, var$2) => {
    return Long_ucompare(var$1, var$2);
},
jl_Long__clinit_ = () => {
    jl_Long_TYPE = $rt_cls($rt_longcls);
};
function jur_SequenceSet$IntHash() {
    let a = this; jl_Object.call(a);
    a.$table = null;
    a.$values2 = null;
    a.$mask = 0;
    a.$size4 = 0;
}
let jur_SequenceSet$IntHash__init_0 = ($this, $size) => {
    jl_Object__init_($this);
    while ($size >= $this.$mask) {
        $this.$mask = $this.$mask << 1 | 1;
    }
    $this.$mask = $this.$mask << 1 | 1;
    $this.$table = $rt_createIntArray($this.$mask + 1 | 0);
    $this.$values2 = $rt_createIntArray($this.$mask + 1 | 0);
    $this.$size4 = $size;
},
jur_SequenceSet$IntHash__init_ = var_0 => {
    let var_1 = new jur_SequenceSet$IntHash();
    jur_SequenceSet$IntHash__init_0(var_1, var_0);
    return var_1;
},
jur_SequenceSet$IntHash_put = ($this, $key, $value) => {
    let $i, $hashCode, var$5;
    $i = 0;
    $hashCode = $key & $this.$mask;
    while ($this.$table.data[$hashCode] && $this.$table.data[$hashCode] != $key) {
        var$5 = $i + 1 | 0;
        $i = var$5 & $this.$mask;
        var$5 = $hashCode + $i | 0;
        $hashCode = var$5 & $this.$mask;
    }
    $this.$table.data[$hashCode] = $key;
    $this.$values2.data[$hashCode] = $value;
},
jur_SequenceSet$IntHash_get = ($this, $key) => {
    let $hashCode, $i, $storedKey, var$5;
    $hashCode = $key & $this.$mask;
    $i = 0;
    while (true) {
        $storedKey = $this.$table.data[$hashCode];
        if (!$storedKey)
            break;
        if ($storedKey == $key)
            return $this.$values2.data[$hashCode];
        var$5 = $i + 1 | 0;
        $i = var$5 & $this.$mask;
        var$5 = $hashCode + $i | 0;
        $hashCode = var$5 & $this.$mask;
    }
    return $this.$size4;
},
jur_AbstractCharClass$LazyNonDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyDigit),
jur_AbstractCharClass$LazyNonDigit__init_ = $this => {
    jur_AbstractCharClass$LazyDigit__init_($this);
},
jur_AbstractCharClass$LazyNonDigit__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyNonDigit();
    jur_AbstractCharClass$LazyNonDigit__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyNonDigit_computeValue = $this => {
    let $chCl;
    $chCl = (jur_AbstractCharClass$LazyDigit_computeValue($this)).$setNegative(1);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
};
function jur_AbstractCharClass$1() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$lHS = null;
    a.$this$028 = null;
}
let jur_AbstractCharClass$1__init_ = ($this, $this$0, var$2) => {
    $this.$this$028 = $this$0;
    $this.$val$lHS = var$2;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$1__init_0 = (var_0, var_1) => {
    let var_2 = new jur_AbstractCharClass$1();
    jur_AbstractCharClass$1__init_(var_2, var_0, var_1);
    return var_2;
},
jur_AbstractCharClass$1_contains = ($this, $ch) => {
    let $index;
    $index = $ch - 55296 | 0;
    return $index >= 0 && $index < 2048 ? $this.$altSurrogates ^ $this.$val$lHS.$get3($index) : 0;
},
ca_ControllerForMain = $rt_classWithoutFields(0);
function jur_AbstractCharClass$2() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$lHS0 = null;
    a.$val$thisClass = null;
    a.$this$019 = null;
}
let jur_AbstractCharClass$2__init_ = ($this, $this$0, var$2, var$3) => {
    $this.$this$019 = $this$0;
    $this.$val$lHS0 = var$2;
    $this.$val$thisClass = var$3;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$2__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_AbstractCharClass$2();
    jur_AbstractCharClass$2__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_AbstractCharClass$2_contains = ($this, $ch) => {
    let $index, $containslHS;
    $index = $ch - 55296 | 0;
    $containslHS = $index >= 0 && $index < 2048 ? $this.$altSurrogates ^ $this.$val$lHS0.$get3($index) : 0;
    return $this.$val$thisClass.$contains($ch) && !$containslHS ? 1 : 0;
},
jur_AbstractCharClass$LazyJavaLowerCase = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaLowerCase__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaLowerCase__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaLowerCase();
    jur_AbstractCharClass$LazyJavaLowerCase__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaLowerCase_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaLowerCase$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
},
jur_PossessiveCompositeQuantifierSet = $rt_classWithoutFields(jur_CompositeQuantifierSet),
jur_PossessiveCompositeQuantifierSet__init_ = ($this, $quant, $innerSet, $next, $type) => {
    jur_CompositeQuantifierSet__init_($this, $quant, $innerSet, $next, $type);
},
jur_PossessiveCompositeQuantifierSet__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_PossessiveCompositeQuantifierSet();
    jur_PossessiveCompositeQuantifierSet__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_PossessiveCompositeQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $min, $max, $i, $shift;
    $min = $this.$quantifier.$min1();
    $max = $this.$quantifier.$max1();
    $i = 0;
    while (true) {
        if ($i >= $min) {
            a: {
                while (true) {
                    if ($i >= $max)
                        break a;
                    if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$getRightBound())
                        break a;
                    $shift = $this.$leaf.$accepts($stringIndex, $testString);
                    if ($shift < 1)
                        break;
                    $stringIndex = $stringIndex + $shift | 0;
                    $i = $i + 1 | 0;
                }
            }
            return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        }
        if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$getRightBound()) {
            $matchResult.$hitEnd = 1;
            return (-1);
        }
        $shift = $this.$leaf.$accepts($stringIndex, $testString);
        if ($shift < 1)
            break;
        $stringIndex = $stringIndex + $shift | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
};
function jur_AbstractCharClass$LazyJavaLetterOrDigit$1() {
    jur_AbstractCharClass.call(this);
    this.$this$030 = null;
}
let jur_AbstractCharClass$LazyJavaLetterOrDigit$1__init_ = ($this, $this$0) => {
    $this.$this$030 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaLetterOrDigit$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaLetterOrDigit$1();
    jur_AbstractCharClass$LazyJavaLetterOrDigit$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaLetterOrDigit$1_contains = ($this, $ch) => {
    return jl_Character_isLetterOrDigit($ch);
};
function jur_CharClass$18() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$bs = null;
    a.$this$013 = null;
}
let jur_CharClass$18__init_ = ($this, $this$0, var$2) => {
    $this.$this$013 = $this$0;
    $this.$val$bs = var$2;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$18__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CharClass$18();
    jur_CharClass$18__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass$18_contains = ($this, $ch) => {
    return $this.$alt ^ $this.$val$bs.$get3($ch);
},
jur_CharClass$18_toString = $this => {
    let $temp, $i;
    $temp = jl_StringBuilder__init_();
    $i = $this.$val$bs.$nextSetBit(0);
    while ($i >= 0) {
        $temp.$append12(jl_Character_toChars($i));
        $temp.$append0(124);
        $i = $this.$val$bs.$nextSetBit($i + 1 | 0);
    }
    if ($temp.$length() > 0)
        $temp.$deleteCharAt($temp.$length() - 1 | 0);
    return $temp.$toString();
};
function m_AlienFormationsLibrary$FormationPaths() {
    jl_Record.call(this);
    this.$alienList0 = null;
}
let m_AlienFormationsLibrary$FormationPaths__init_ = ($this, $alienList) => {
    jl_Record__init_($this);
    $this.$alienList0 = $alienList;
},
m_AlienFormationsLibrary$FormationPaths__init_0 = var_0 => {
    let var_1 = new m_AlienFormationsLibrary$FormationPaths();
    m_AlienFormationsLibrary$FormationPaths__init_(var_1, var_0);
    return var_1;
},
m_AlienFormationsLibrary$FormationPaths_toString = $this => {
    return ((((jl_StringBuilder__init_1($rt_s(316))).$append13($rt_s(317))).$append($this.$alienList0)).$append13($rt_s(315))).$toString();
},
m_AlienFormationsLibrary$FormationPaths_alienList = $this => {
    return $this.$alienList0;
},
jur_PossessiveGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet),
jur_PossessiveGroupQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_GroupQuantifierSet__init_($this, $innerSet, $next, $type);
    jur_FSet_$callClinit();
    $innerSet.$setNext(jur_FSet_posFSet);
},
jur_PossessiveGroupQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_PossessiveGroupQuantifierSet();
    jur_PossessiveGroupQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_PossessiveGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $stringIndex_0;
    while (true) {
        $stringIndex_0 = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
        if ($stringIndex_0 <= 0)
            break;
        $stringIndex = $stringIndex_0;
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
};
function jur_CharClass$13() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz4 = null;
    a.$this$023 = null;
}
let jur_CharClass$13__init_ = ($this, $this$0, var$2) => {
    $this.$this$023 = $this$0;
    $this.$val$clazz4 = var$2;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$13__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CharClass$13();
    jur_CharClass$13__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass$13_contains = ($this, $ch) => {
    return $this.$val$clazz4.$contains($ch);
};
function jur_CharClass$12() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz5 = null;
    a.$this$033 = null;
}
let jur_CharClass$12__init_ = ($this, $this$0, var$2) => {
    $this.$this$033 = $this$0;
    $this.$val$clazz5 = var$2;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$12__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CharClass$12();
    jur_CharClass$12__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass$12_contains = ($this, $ch) => {
    return $this.$val$clazz5.$contains($ch) ? 0 : 1;
};
function jur_CharClass$11() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt4 = 0;
    a.$val$nb2 = null;
    a.$val$clazz8 = null;
    a.$this$014 = null;
}
let jur_CharClass$11__init_ = ($this, $this$0, var$2, var$3, var$4) => {
    $this.$this$014 = $this$0;
    $this.$val$curAlt4 = var$2;
    $this.$val$nb2 = var$3;
    $this.$val$clazz8 = var$4;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$11__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CharClass$11();
    jur_CharClass$11__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CharClass$11_contains = ($this, $ch) => {
    return !($this.$val$curAlt4 ^ $this.$val$nb2.$contains($ch)) && !$this.$val$clazz8.$contains($ch) ? 0 : 1;
},
otci_Base46 = $rt_classWithoutFields(),
otci_Base46_decodeUnsigned = $seq => {
    let $number, $pos, var$4, var$5, $digit, $hasMore;
    $number = 0;
    $pos = 1;
    while (true) {
        var$4 = $seq.$characters.data;
        var$5 = $seq.$pointer;
        $seq.$pointer = var$5 + 1 | 0;
        $digit = otci_Base46_decodeDigit(var$4[var$5]);
        $hasMore = ($digit % 2 | 0) != 1 ? 0 : 1;
        $number = $number + $rt_imul($pos, $digit / 2 | 0) | 0;
        $pos = $pos * 46 | 0;
        if (!$hasMore)
            break;
    }
    return $number;
},
otci_Base46_decode = $seq => {
    let $number, $result;
    $number = otci_Base46_decodeUnsigned($seq);
    $result = $number / 2 | 0;
    if ($number % 2 | 0)
        $result =  -$result | 0;
    return $result;
},
otci_Base46_decodeDigit = $c => {
    if ($c < 34)
        return $c - 32 | 0;
    if ($c >= 92)
        return ($c - 32 | 0) - 2 | 0;
    return ($c - 32 | 0) - 1 | 0;
};
function jur_CharClass$10() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt6 = 0;
    a.$val$nb0 = null;
    a.$val$clazz0 = null;
    a.$this$021 = null;
}
let jur_CharClass$10__init_ = ($this, $this$0, var$2, var$3, var$4) => {
    $this.$this$021 = $this$0;
    $this.$val$curAlt6 = var$2;
    $this.$val$nb0 = var$3;
    $this.$val$clazz0 = var$4;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$10__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CharClass$10();
    jur_CharClass$10__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CharClass$10_contains = ($this, $ch) => {
    return !($this.$val$curAlt6 ^ $this.$val$nb0.$contains($ch)) && !$this.$val$clazz0.$contains($ch) ? 1 : 0;
};
function jur_CharClass$17() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt5 = 0;
    a.$val$nb1 = null;
    a.$val$clazz10 = null;
    a.$this$018 = null;
}
let jur_CharClass$17__init_ = ($this, $this$0, var$2, var$3, var$4) => {
    $this.$this$018 = $this$0;
    $this.$val$curAlt5 = var$2;
    $this.$val$nb1 = var$3;
    $this.$val$clazz10 = var$4;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$17__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CharClass$17();
    jur_CharClass$17__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CharClass$17_contains = ($this, $ch) => {
    return $this.$val$curAlt5 ^ $this.$val$nb1.$contains($ch) && $this.$val$clazz10.$contains($ch) ? 1 : 0;
};
function jur_UCISequenceSet() {
    jur_LeafSet.call(this);
    this.$string2 = null;
}
let jur_UCISequenceSet__init_ = ($this, $substring) => {
    let $res, $i;
    jur_LeafSet__init_($this);
    $res = jl_StringBuilder__init_();
    $i = 0;
    while ($i < $substring.$length()) {
        $res.$append0(jl_Character_toLowerCase(jl_Character_toUpperCase($substring.$charAt($i))));
        $i = $i + 1 | 0;
    }
    $this.$string2 = $res.$toString();
    $this.$charCount0 = $res.$length();
},
jur_UCISequenceSet__init_0 = var_0 => {
    let var_1 = new jur_UCISequenceSet();
    jur_UCISequenceSet__init_(var_1, var_0);
    return var_1;
},
jur_UCISequenceSet_accepts = ($this, $strIndex, $testString) => {
    let $i;
    $i = 0;
    while (true) {
        if ($i >= $this.$string2.$length())
            return $this.$string2.$length();
        if ($this.$string2.$charAt($i) != jl_Character_toLowerCase(jl_Character_toUpperCase($testString.$charAt($strIndex + $i | 0))))
            break;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_UCISequenceSet_getName = $this => {
    let var$1, var$2;
    var$1 = $this.$string2;
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(318)), var$1);
    return jl_StringBuilder_toString(var$2);
};
function jur_CharClass$16() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt3 = 0;
    a.$val$nb = null;
    a.$val$clazz3 = null;
    a.$this$025 = null;
}
let jur_CharClass$16__init_ = ($this, $this$0, var$2, var$3, var$4) => {
    $this.$this$025 = $this$0;
    $this.$val$curAlt3 = var$2;
    $this.$val$nb = var$3;
    $this.$val$clazz3 = var$4;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$16__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CharClass$16();
    jur_CharClass$16__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CharClass$16_contains = ($this, $ch) => {
    return $this.$val$curAlt3 ^ $this.$val$nb.$contains($ch) && $this.$val$clazz3.$contains($ch) ? 0 : 1;
};
function jur_CharClass$15() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz9 = null;
    a.$val$curAlt1 = 0;
    a.$this$08 = null;
}
let jur_CharClass$15__init_ = ($this, $this$0, var$2, var$3) => {
    $this.$this$08 = $this$0;
    $this.$val$clazz9 = var$2;
    $this.$val$curAlt1 = var$3;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$15__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_CharClass$15();
    jur_CharClass$15__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_CharClass$15_contains = ($this, $ch) => {
    return $this.$val$clazz9.$contains($ch) && $this.$val$curAlt1 ^ $this.$this$08.$bits.$get3($ch) ? 1 : 0;
};
function jur_AbstractCharClass$LazyJavaDefined$1() {
    jur_AbstractCharClass.call(this);
    this.$this$027 = null;
}
let jur_AbstractCharClass$LazyJavaDefined$1__init_ = ($this, $this$0) => {
    $this.$this$027 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaDefined$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaDefined$1();
    jur_AbstractCharClass$LazyJavaDefined$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaDefined$1_contains = ($this, $ch) => {
    return jl_Character_isDefined($ch);
},
otjt_Int8Array = $rt_classWithoutFields(otjt_TypedArray);
function jur_CharClass$14() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz2 = null;
    a.$val$curAlt10 = 0;
    a.$this$05 = null;
}
let jur_CharClass$14__init_ = ($this, $this$0, var$2, var$3) => {
    $this.$this$05 = $this$0;
    $this.$val$clazz2 = var$2;
    $this.$val$curAlt10 = var$3;
    jur_AbstractCharClass__init_($this);
},
jur_CharClass$14__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_CharClass$14();
    jur_CharClass$14__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_CharClass$14_contains = ($this, $ch) => {
    return $this.$val$clazz2.$contains($ch) && $this.$val$curAlt10 ^ $this.$this$05.$bits.$get3($ch) ? 0 : 1;
},
jl_StringBuilder = $rt_classWithoutFields(jl_AbstractStringBuilder),
jl_StringBuilder__init_4 = ($this, $capacity) => {
    jl_AbstractStringBuilder__init_($this, $capacity);
},
jl_StringBuilder__init_0 = var_0 => {
    let var_1 = new jl_StringBuilder();
    jl_StringBuilder__init_4(var_1, var_0);
    return var_1;
},
jl_StringBuilder__init_3 = $this => {
    jl_AbstractStringBuilder__init_0($this);
},
jl_StringBuilder__init_ = () => {
    let var_0 = new jl_StringBuilder();
    jl_StringBuilder__init_3(var_0);
    return var_0;
},
jl_StringBuilder__init_2 = ($this, $value) => {
    jl_AbstractStringBuilder__init_2($this, $value);
},
jl_StringBuilder__init_1 = var_0 => {
    let var_1 = new jl_StringBuilder();
    jl_StringBuilder__init_2(var_1, var_0);
    return var_1;
},
jl_StringBuilder_append = ($this, $obj) => {
    jl_AbstractStringBuilder_append8($this, $obj);
    return $this;
},
jl_StringBuilder_append3 = ($this, $string) => {
    jl_AbstractStringBuilder_append($this, $string);
    return $this;
},
jl_StringBuilder_append1 = ($this, $value) => {
    jl_AbstractStringBuilder_append3($this, $value);
    return $this;
},
jl_StringBuilder_append2 = ($this, $value) => {
    jl_AbstractStringBuilder_append6($this, $value);
    return $this;
},
jl_StringBuilder_append6 = ($this, $value) => {
    jl_AbstractStringBuilder_append7($this, $value);
    return $this;
},
jl_StringBuilder_append0 = ($this, $c) => {
    jl_AbstractStringBuilder_append2($this, $c);
    return $this;
},
jl_StringBuilder_append5 = ($this, $chars, $offset, $len) => {
    jl_AbstractStringBuilder_append1($this, $chars, $offset, $len);
    return $this;
},
jl_StringBuilder_append8 = ($this, $chars) => {
    jl_AbstractStringBuilder_append0($this, $chars);
    return $this;
},
jl_StringBuilder_append4 = ($this, $b) => {
    jl_AbstractStringBuilder_append5($this, $b);
    return $this;
},
jl_StringBuilder_insert5 = ($this, $target, $value) => {
    jl_AbstractStringBuilder_insert4($this, $target, $value);
    return $this;
},
jl_StringBuilder_insert7 = ($this, $target, $value) => {
    jl_AbstractStringBuilder_insert5($this, $target, $value);
    return $this;
},
jl_StringBuilder_insert3 = ($this, $index, $chars, $offset, $len) => {
    jl_AbstractStringBuilder_insert($this, $index, $chars, $offset, $len);
    return $this;
},
jl_StringBuilder_insert8 = ($this, $index, $obj) => {
    jl_AbstractStringBuilder_insert6($this, $index, $obj);
    return $this;
},
jl_StringBuilder_insert1 = ($this, $index, $b) => {
    jl_AbstractStringBuilder_insert2($this, $index, $b);
    return $this;
},
jl_StringBuilder_insert2 = ($this, $index, $c) => {
    jl_AbstractStringBuilder_insert1($this, $index, $c);
    return $this;
},
jl_StringBuilder_delete = ($this, $start, $end) => {
    jl_AbstractStringBuilder_delete($this, $start, $end);
    return $this;
},
jl_StringBuilder_deleteCharAt = ($this, $index) => {
    jl_AbstractStringBuilder_deleteCharAt($this, $index);
    return $this;
},
jl_StringBuilder_insert10 = ($this, $index, $string) => {
    jl_AbstractStringBuilder_insert0($this, $index, $string);
    return $this;
},
jl_StringBuilder_substring = ($this, var$1, var$2) => {
    return jl_AbstractStringBuilder_substring($this, var$1, var$2);
},
jl_StringBuilder_subSequence = ($this, var$1, var$2) => {
    return jl_AbstractStringBuilder_subSequence($this, var$1, var$2);
},
jl_StringBuilder_insert9 = ($this, var$1, var$2, var$3, var$4) => {
    return $this.$insert12(var$1, var$2, var$3, var$4);
},
jl_StringBuilder_append7 = ($this, var$1, var$2, var$3) => {
    return $this.$append21(var$1, var$2, var$3);
},
jl_StringBuilder_isEmpty = $this => {
    return jl_AbstractStringBuilder_isEmpty($this);
},
jl_StringBuilder_length = $this => {
    return jl_AbstractStringBuilder_length($this);
},
jl_StringBuilder_toString = $this => {
    return jl_AbstractStringBuilder_toString($this);
},
jl_StringBuilder_ensureCapacity = ($this, var$1) => {
    jl_AbstractStringBuilder_ensureCapacity($this, var$1);
},
jl_StringBuilder_insert11 = ($this, var$1, var$2) => {
    return $this.$insert13(var$1, var$2);
},
jl_StringBuilder_insert0 = ($this, var$1, var$2) => {
    return $this.$insert14(var$1, var$2);
},
jl_StringBuilder_insert = ($this, var$1, var$2) => {
    return $this.$insert15(var$1, var$2);
},
jl_StringBuilder_insert4 = ($this, var$1, var$2) => {
    return $this.$insert16(var$1, var$2);
},
jl_StringBuilder_insert6 = ($this, var$1, var$2) => {
    return $this.$insert17(var$1, var$2);
},
jl_StringBuilder_insert12 = ($this, var$1, var$2) => {
    return $this.$insert18(var$1, var$2);
};
function jl_ClassLoader() {
    jl_Object.call(this);
    this.$parent = null;
}
let jl_ClassLoader_systemClassLoader = null,
jl_ClassLoader_resources = null,
jl_ClassLoader_$callClinit = () => {
    jl_ClassLoader_$callClinit = $rt_eraseClinit(jl_ClassLoader);
    jl_ClassLoader__clinit_();
},
jl_ClassLoader__init_0 = $this => {
    jl_ClassLoader_$callClinit();
    jl_ClassLoader__init_($this, null);
},
jl_ClassLoader__init_ = ($this, $parent) => {
    jl_ClassLoader_$callClinit();
    jl_Object__init_($this);
    $this.$parent = $parent;
},
jl_ClassLoader_getSystemClassLoader = () => {
    jl_ClassLoader_$callClinit();
    return jl_ClassLoader_systemClassLoader;
},
jl_ClassLoader_getResourceAsStream = ($this, $name) => {
    let $data, $dataString, $bytes, $i, var$6;
    jl_ClassLoader_$callClinit();
    if (jl_ClassLoader_resources === null)
        jl_ClassLoader_resources = {
            "model/data/formations.txt": "IyBhIGxpc3Qgb2YgYWxsIHRoZSBlbmVteSBwYXRocyBpbiB0aGUgZ2FtZSwgc3RydWN0dXJlZCBsaWtlIHRoaXM6DQoNCiMgfCBmb3IgbmV3IHN0YWdlLCAoZm9yIG5ldyBmb3JtYXRpb24sIFsgZm9yIG5ldyBhbGllbiwNCiMgeyBmb3IgaW5pdGlhbCBjZW50ZXIgY29vcmRpbmF0ZXMsIGluIGZvcm1hdGlvbiBjZW50ZXIgY29vcmRpbmF0ZXMsIGxpc3QgZGlyZWN0aW9ucyBPUiBzaWRlIG9mIG90aGVyIGFsaWVuIHRvIGZvbGxvdywgbnVtYmVyIG9mIHBpeGVscyBpbiBzdGF0ZWQgZGlyZWN0aW9uIE9SIGFsaWVuIG9mIGZvcm1hdGlvbiB0byBmb2xsb3cNCiMgIyBmb3IgY29tbWVudHMNCiMgZW1wdHkgbGluZXMgaWdub3JlZA0KIyAhIHRvIHN0b3AgcmVhZGluZw0KIyBpbmRl"
            + "bnRhdGlvbiBpZ25vcmVkDQoNCg0KDQp8U3RhZ2UgMXwNCiAgICAoZm9ybWF0aW9uIDEpDQogICAgICAgIFtnb2VpIDFdDQogICAgICAgICAgICB7ODgsLTIwfQ0KICAgICAgICAgICAgezEyMCw3OH0NCiAgICAgICAgICAgIHtELEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsREwsRCxETCxELERMLEQsREwsRCxETCxMLERMLEwsREwsTCxETCxMLERMLEwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLFUsTCxVfQ0KICAgICAgICAgICAgezIwLDcsMSwzLDEsMiwxLDEsMSwzLDEsMywxLDMsMiwzLDEsMSw4MCwxLDMsMSwxLDEsMSwxLDIsMSwyLDIsMSwxMSwxLDIsMiwxLDEsMSwxLDEsMSwx"
            + "LDQsMiwyLDMsMSwyLDEsMTMsMSwzLDEsMiwxLDIsMiwxLDMsMiwxLDN9DQogICAgICAgIFtnb2VpIDJdDQogICAgICAgICAgICB7ODgsLTQwfQ0KICAgICAgICAgICAgezEyMCw2NX0NCiAgICAgICAgICAgIHtELEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsREwsRCxETCxELERMLEQsREwsRCxETCxMLERMLEwsREwsTCxETCxMLERMLEwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLFUsTCxVfQ0KICAgICAgICAgICAgezQwLDcsMSwzLDEsMiwxLDEsMSwzLDEsMywxLDMsMiwzLDEsMSw4MCwxLDMsMSwxLDEsMSwxLDIsMSwyLDIsMSwxMSwxLDIsMiwxLDEsMSwxLDEsMSwxLDQsMiwyLDMs"
            + "MSwyLDEsMTMsMSwzLDEsMiwxLDIsMiwxLDMsMiwxLDN9DQogICAgICAgIFtnb2VpIDNdDQogICAgICAgICAgICB7ODgsLTYwfQ0KICAgICAgICAgICAgezEwNCw2NX0NCiAgICAgICAgICAgIHtELEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsREwsRCxETCxELERMLEQsREwsRCxETCxMLERMLEwsREwsTCxETCxMLERMLEwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLFUsTCxVfQ0KICAgICAgICAgICAgezYwLDcsMSwzLDEsMiwxLDEsMSwzLDEsMywxLDMsMiwzLDEsMSw4MCwxLDMsMSwxLDEsMSwxLDIsMSwyLDIsMSwxMSwxLDIsMiwxLDEsMSwxLDEsMSwxLDQsMiwyLDMsMSwyLDEsMTMs"
            + "MSwzLDEsMiwxLDIsMiwxLDMsMiwxLDN9DQogICAgICAgIFtnb2VpIDRdDQogICAgICAgICAgICB7ODgsLTgwfQ0KICAgICAgICAgICAgezEwNCw3OH0NCiAgICAgICAgICAgIHtELEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsREwsRCxETCxELERMLEQsREwsRCxETCxMLERMLEwsREwsTCxETCxMLERMLEwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLFUsTCxVfQ0KICAgICAgICAgICAgezgwLDcsMSwzLDEsMiwxLDEsMSwzLDEsMywxLDMsMiwzLDEsMSw4MCwxLDMsMSwxLDEsMSwxLDIsMSwyLDIsMSwxMSwxLDIsMiwxLDEsMSwxLDEsMSwxLDQsMiwyLDMsMSwyLDEsMTMsMSwzLDEsMiwx"
            + "LDIsMiwxLDMsMiwxLDN9DQogICAgICAgIFt6YWtvIDFdDQogICAgICAgICAgICB7MTM2LC0yMH0NCiAgICAgICAgICAgIHsxMDQsMTA0fQ0KICAgICAgICAgICAge0QsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxEUixELERSLEQsRFIsRCxEUixELERSLFIsRFIsUixEUixSLERSLFIsRFIsUixVUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFUsUixVfQ0KICAgICAgICAgICAgezIwLDcsMSwzLDEsMiwxLDEsMSwzLDEsMywxLDMsMiwzLDEsMSw4MCwxLDMsMSwxLDEsMSwxLDIsMSwyLDIsMSwxMSwxLDIsMiwxLDEsMSwxLDEsMSwxLDQsMiwyLDMsMSwyLDEsMTMsMSwzLDEsMiwxLDIsMiwx"
            + "LDMsMiwxLDN9DQogICAgICAgIFt6YWtvIDJdDQogICAgICAgICAgICB7MTM2LC00MH0NCiAgICAgICAgICAgIHsxMDQsOTF9DQogICAgICAgICAgICB7RCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERSLEQsRFIsRCxEUixELERSLEQsRFIsUixEUixSLERSLFIsRFIsUixEUixSLFVSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsVSxSLFV9DQogICAgICAgICAgICB7NDAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEs"
            + "M30NCiAgICAgICAgW3pha28gM10NCiAgICAgICAgICAgIHsxMzYsLTYwfQ0KICAgICAgICAgICAgezEyMCwxMDR9DQogICAgICAgICAgICB7RCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERSLEQsRFIsRCxEUixELERSLEQsRFIsUixEUixSLERSLFIsRFIsUixEUixSLFVSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsVSxSLFV9DQogICAgICAgICAgICB7NjAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAg"
            + "ICAgICAgW3pha28gNF0NCiAgICAgICAgICAgIHsxMzYsLTgwfQ0KICAgICAgICAgICAgezEyMCw5MX0NCiAgICAgICAgICAgIHtELEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixSLERSLFIsRFIsUixEUixSLERSLFIsVVIsVVIsUixVUixSLFVSLFIsVVIsUixVUixVLFIsVX0NCiAgICAgICAgICAgIHs4MCw3LDEsMywxLDIsMSwxLDEsMywxLDMsMSwzLDIsMywxLDEsODAsMSwzLDEsMSwxLDEsMSwyLDEsMiwyLDEsMTEsMSwyLDIsMSwxLDEsMSwxLDEsMSw0LDIsMiwzLDEsMiwxLDEzLDEsMywxLDIsMSwyLDIsMSwzLDIsMSwzfQ0KICAgIChmb3Jt"
            + "YXRpb24gMikNCiAgICAgICAgW2dvZWkgMV0NCiAgICAgICAgICAgIHstMjUsMjUwfQ0KICAgICAgICAgICAgezg4LDY1fQ0KICAgICAgICAgICAge1IsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVTCxVLFVMLFUsVUwsVSxVTCxMLFVMLEwsVUwsTCxETCxMLERMLEwsREwsRCxETCxELERMLEQsRFIsRCxEUixELERSLEQsRFIsUixEUixSLFVSLFIsVVIsUixVUixVLFVSLFUsVVIsVX0NCiAgICAgICAgICAgIHsyNSwxLDMsMSwxLDEsMywxLDEsMSwx"
            + "LDEsMSwzLDEsMSwxLDEyLDEsNSwxLDIsMSwyLDEsNCwxLDMsMSwxLDEsNCwxLDIsMSwxLDEsMSwxLDEsMSwxLDEsMiwxLDEsMSwxLDIsMSwyLDEsMywxLDIsMSwyLDEsMSwxLDgsMSw2LDEsMywxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4fQ0KICAgICAgICBbYm9zc19HYWxhZ2EgMV0NCiAgICAgICAgICAgIHstNDUsMjUwfQ0KICAgICAgICAgICAgezg4LDQ2fQ0KICAgICAgICAgICAge1IsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIs"
            + "VSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVTCxVLFVMLFUsVUwsVSxVTCxMLFVMLEwsVUwsTCxETCxMLERMLEwsREwsRCxETCxELERMLEQsRFIsRCxEUixELERSLEQsRFIsUixEUixSLFVSLFIsVVIsUixVUixVLFVSLFUsVVIsVX0NCiAgICAgICAgICAgIHs0NSwxLDMsMSwxLDEsMywxLDEsMSwxLDEsMSwzLDEsMSwxLDEyLDEsNSwxLDIsMSwyLDEsNCwxLDMsMSwxLDEsNCwxLDIsMSwxLDEsMSwxLDEsMSwxLDEsMiwxLDEsMSwxLDIsMSwyLDEsMywxLDIsMSwyLDEsMSwxLDgsMSw2LDEsMywxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4fQ0KICAg"
            + "ICAgICBbZ29laSAyXQ0KICAgICAgICAgICAgey02NSwyNTB9DQogICAgICAgICAgICB7ODgsNzh9DQogICAgICAgICAgICB7UixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVMLFUsVUwsVSxVTCxVLFVMLEwsVUwsTCxVTCxMLERMLEwsREwsTCxETCxELERMLEQsREwsRCxEUixELERSLEQsRFIsRCxEUixSLERSLFIsVVIsUixVUixSLFVSLFUsVVIsVSxVUixVfQ0KICAgICAgICAgICAgezY1LDEsMywxLDEsMSwzLDEsMSwxLDEsMSwxLDMsMSwxLDEs"
            + "MTIsMSw1LDEsMiwxLDIsMSw0LDEsMywxLDEsMSw0LDEsMiwxLDEsMSwxLDEsMSwxLDEsMSwyLDEsMSwxLDEsMiwxLDIsMSwzLDEsMiwxLDIsMSwxLDEsOCwxLDYsMSwzLDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDh9DQogICAgICAgIFtib3NzX0dhbGFnYSAyXQ0KICAgICAgICAgICAgey04NSwyNTB9DQogICAgICAgICAgICB7MTA0LDQ2fQ0KICAgICAgICAgICAge1IsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUs"
            + "VVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVTCxVLFVMLFUsVUwsVSxVTCxMLFVMLEwsVUwsTCxETCxMLERMLEwsREwsRCxETCxELERMLEQsRFIsRCxEUixELERSLEQsRFIsUixEUixSLFVSLFIsVVIsUixVUixVLFVSLFUsVVIsVX0NCiAgICAgICAgICAgIHs4NSwxLDMsMSwxLDEsMywxLDEsMSwxLDEsMSwzLDEsMSwxLDEyLDEsNSwxLDIsMSwyLDEsNCwxLDMsMSwxLDEsNCwxLDIsMSwxLDEsMSwxLDEsMSwxLDEsMiwxLDEsMSwxLDIsMSwyLDEsMywxLDIsMSwyLDEsMSwxLDgsMSw2LDEsMywxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4fQ0KICAgICAgICBbZ29laSAz"
            + "XQ0KICAgICAgICAgICAgey0xMDUsMjUwfQ0KICAgICAgICAgICAgezEzNiw2NX0NCiAgICAgICAgICAgIHtSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVUwsVSxVTCxVLFVMLFUsVUwsTCxVTCxMLFVMLEwsREwsTCxETCxMLERMLEQsREwsRCxETCxELERSLEQsRFIsRCxEUixELERSLFIsRFIsUixVUixSLFVSLFIsVVIsVSxVUixVLFVSLFV9IA0KICAgICAgICAgICAgezEwNSwxLDMsMSwxLDEsMywxLDEsMSwxLDEsMSwzLDEsMSwxLDEyLDEsNSwx"
            + "LDIsMSwyLDEsNCwxLDMsMSwxLDEsNCwxLDIsMSwxLDEsMSwxLDEsMSwxLDEsMiwxLDEsMSwxLDIsMSwyLDEsMywxLDIsMSwyLDEsMSwxLDgsMSw2LDEsMywxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4fQ0KICAgICAgICBbYm9zc19HYWxhZ2EgM10NCiAgICAgICAgICAgIHstMTI1LDI1MH0NCiAgICAgICAgICAgIHsxMjAsNDZ9DQogICAgICAgICAgICB7UixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVS"
            + "LFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVMLFUsVUwsVSxVTCxVLFVMLEwsVUwsTCxVTCxMLERMLEwsREwsTCxETCxELERMLEQsREwsRCxEUixELERSLEQsRFIsRCxEUixSLERSLFIsVVIsUixVUixSLFVSLFUsVVIsVSxVUixVfSANCiAgICAgICAgICAgIHsxMjUsMSwzLDEsMSwxLDMsMSwxLDEsMSwxLDEsMywxLDEsMSwxMiwxLDUsMSwyLDEsMiwxLDQsMSwzLDEsMSwxLDQsMSwyLDEsMSwxLDEsMSwxLDEsMSwxLDIsMSwxLDEsMSwyLDEsMiwxLDMsMSwyLDEsMiwxLDEsMSw4LDEsNiwxLDMsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOH0NCiAgICAgICAgW2dvZWkgNF0NCiAg"
            + "ICAgICAgICAgIHstMTQ1LDI1MH0NCiAgICAgICAgICAgIHsxMzYsNzh9DQogICAgICAgICAgICB7UixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVMLFUsVUwsVSxVTCxVLFVMLEwsVUwsTCxVTCxMLERMLEwsREwsTCxETCxELERMLEQsREwsRCxEUixELERSLEQsRFIsRCxEUixSLERSLFIsVVIsUixVUixSLFVSLFUsVVIsVSxVUixVfSANCiAgICAgICAgICAgIHsxNDUsMSwzLDEsMSwxLDMsMSwxLDEsMSwxLDEsMywxLDEsMSwxMiwxLDUsMSwyLDEs"
            + "MiwxLDQsMSwzLDEsMSwxLDQsMSwyLDEsMSwxLDEsMSwxLDEsMSwxLDIsMSwxLDEsMSwyLDEsMiwxLDMsMSwyLDEsMiwxLDEsMSw4LDEsNiwxLDMsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOH0NCiAgICAgICAgW2Jvc3NfR2FsYWdhIDRdDQogICAgICAgICAgICB7LTE2NSwyNTB9DQogICAgICAgICAgICB7MTM2LDQ2fQ0KICAgICAgICAgICAge1IsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVS"
            + "LFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVTCxVLFVMLFUsVUwsVSxVTCxMLFVMLEwsVUwsTCxETCxMLERMLEwsREwsRCxETCxELERMLEQsRFIsRCxEUixELERSLEQsRFIsUixEUixSLFVSLFIsVVIsUixVUixVLFVSLFUsVVIsVX0gDQogICAgICAgICAgICB7MTY1LDEsMywxLDEsMSwzLDEsMSwxLDEsMSwxLDMsMSwxLDEsMTIsMSw1LDEsMiwxLDIsMSw0LDEsMywxLDEsMSw0LDEsMiwxLDEsMSwxLDEsMSwxLDEsMSwyLDEsMSwxLDEsMiwxLDIsMSwzLDEsMiwxLDIsMSwxLDEsOCwxLDYsMSwzLDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDh9DQogICAgKGZvcm1hdGlvbiAzKQ0KICAgICAg"
            + "ICBbZ29laSAxXQ0KICAgICAgICAgICAgezI0OSwyNTB9DQogICAgICAgICAgICB7MTUyLDc4fQ0KICAgICAgICAgICAge0wsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVUixVLFVSLFUsVVIsVSxVUixSLFVSLFIsVVIsUixEUixSLERSLFIsRFIsRCxEUixELERSLEQsREwsRCxETCxELERMLEQsREwsTCxETCxMLFVMLEwsVUwsTCxVTCxVLFVMLFUsVUwsVX0NCiAgICAgICAgICAgIHsyNSwxLDMsMSwxLDEsMywxLDEsMSwxLDEsMSwzLDEsMSwxLDEy"
            + "LDEsNSwxLDIsMSwyLDEsNCwxLDMsMSwxLDEsNCwxLDIsMSwxLDEsMSwxLDEsMSwxLDEsMiwxLDEsMSwxLDIsMSwyLDEsMywxLDIsMSwyLDEsMSwxLDgsMSw2LDEsMywxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4fQ0KICAgICAgICBbZ29laSAyXQ0KICAgICAgICAgICAgezI2OSwyNTB9DQogICAgICAgICAgICB7MTUyLDY1fQ0KICAgICAgICAgICAge0wsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxV"
            + "LFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVUixVLFVSLFUsVVIsVSxVUixSLFVSLFIsVVIsUixEUixSLERSLFIsRFIsRCxEUixELERSLEQsREwsRCxETCxELERMLEQsREwsTCxETCxMLFVMLEwsVUwsTCxVTCxVLFVMLFUsVUwsVX0NCiAgICAgICAgICAgIHs0NSwxLDMsMSwxLDEsMywxLDEsMSwxLDEsMSwzLDEsMSwxLDEyLDEsNSwxLDIsMSwyLDEsNCwxLDMsMSwxLDEsNCwxLDIsMSwxLDEsMSwxLDEsMSwxLDEsMiwxLDEsMSwxLDIsMSwyLDEsMywxLDIsMSwyLDEsMSwxLDgsMSw2LDEsMywxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4fQ0KICAgICAgICBbZ29laSAzXQ0KICAgICAg"
            + "ICAgICAgezI4OSwyNTB9DQogICAgICAgICAgICB7MTY4LDc4fQ0KICAgICAgICAgICAge0wsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVUixVLFVSLFUsVVIsVSxVUixSLFVSLFIsVVIsUixEUixSLERSLFIsRFIsRCxEUixELERSLEQsREwsRCxETCxELERMLEQsREwsTCxETCxMLFVMLEwsVUwsTCxVTCxVLFVMLFUsVUwsVX0NCiAgICAgICAgICAgIHs2NSwxLDMsMSwxLDEsMywxLDEsMSwxLDEsMSwzLDEsMSwxLDEyLDEsNSwxLDIsMSwyLDEsNCwx"
            + "LDMsMSwxLDEsNCwxLDIsMSwxLDEsMSwxLDEsMSwxLDEsMiwxLDEsMSwxLDIsMSwyLDEsMywxLDIsMSwyLDEsMSwxLDgsMSw2LDEsMywxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4fQ0KICAgICAgICBbZ29laSA0XQ0KICAgICAgICAgICAgezMwOSwyNTB9DQogICAgICAgICAgICB7MTY4LDY1fQ0KICAgICAgICAgICAge0wsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVM"
            + "LFUsVUwsVSxVUixVLFVSLFUsVVIsVSxVUixSLFVSLFIsVVIsUixEUixSLERSLFIsRFIsRCxEUixELERSLEQsREwsRCxETCxELERMLEQsREwsTCxETCxMLFVMLEwsVUwsTCxVTCxVLFVMLFUsVUwsVX0NCiAgICAgICAgICAgIHs4NSwxLDMsMSwxLDEsMywxLDEsMSwxLDEsMSwzLDEsMSwxLDEyLDEsNSwxLDIsMSwyLDEsNCwxLDMsMSwxLDEsNCwxLDIsMSwxLDEsMSwxLDEsMSwxLDEsMiwxLDEsMSwxLDIsMSwyLDEsMywxLDIsMSwyLDEsMSwxLDgsMSw2LDEsMywxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4fQ0KICAgICAgICBbZ29laSA1XQ0KICAgICAgICAgICAgezMyOSwyNTB9DQog"
            + "ICAgICAgICAgICB7NzIsNzh9DQogICAgICAgICAgICB7TCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVSLFUsVVIsVSxVUixVLFVSLFIsVVIsUixVUixSLERSLFIsRFIsUixEUixELERSLEQsRFIsRCxETCxELERMLEQsREwsRCxETCxMLERMLEwsVUwsTCxVTCxMLFVMLFUsVUwsVSxVTCxVfQ0KICAgICAgICAgICAgezEwNSwxLDMsMSwxLDEsMywxLDEsMSwxLDEsMSwzLDEsMSwxLDEyLDEsNSwxLDIsMSwyLDEsNCwxLDMsMSwxLDEsNCwxLDIsMSwx"
            + "LDEsMSwxLDEsMSwxLDEsMiwxLDEsMSwxLDIsMSwyLDEsMywxLDIsMSwyLDEsMSwxLDgsMSw2LDEsMywxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4fQ0KICAgICAgICBbZ29laSA2XQ0KICAgICAgICAgICAgezM0OSwyNTB9DQogICAgICAgICAgICB7NzIsNjV9DQogICAgICAgICAgICB7TCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVSLFUsVVIsVSxV"
            + "UixVLFVSLFIsVVIsUixVUixSLERSLFIsRFIsUixEUixELERSLEQsRFIsRCxETCxELERMLEQsREwsRCxETCxMLERMLEwsVUwsTCxVTCxMLFVMLFUsVUwsVSxVTCxVfQ0KICAgICAgICAgICAgezEyNSwxLDMsMSwxLDEsMywxLDEsMSwxLDEsMSwzLDEsMSwxLDEyLDEsNSwxLDIsMSwyLDEsNCwxLDMsMSwxLDEsNCwxLDIsMSwxLDEsMSwxLDEsMSwxLDEsMiwxLDEsMSwxLDIsMSwyLDEsMywxLDIsMSwyLDEsMSwxLDgsMSw2LDEsMywxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4fQ0KICAgICAgICBbZ29laSA3XQ0KICAgICAgICAgICAgezM2OSwyNTB9DQogICAgICAgICAgICB7NTYsNzh9"
            + "DQogICAgICAgICAgICB7TCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVSLFUsVVIsVSxVUixVLFVSLFIsVVIsUixVUixSLERSLFIsRFIsUixEUixELERSLEQsRFIsRCxETCxELERMLEQsREwsRCxETCxMLERMLEwsVUwsTCxVTCxMLFVMLFUsVUwsVSxVTCxVfQ0KICAgICAgICAgICAgezE0NSwxLDMsMSwxLDEsMywxLDEsMSwxLDEsMSwzLDEsMSwxLDEyLDEsNSwxLDIsMSwyLDEsNCwxLDMsMSwxLDEsNCwxLDIsMSwxLDEsMSwxLDEsMSwxLDEsMiwx"
            + "LDEsMSwxLDIsMSwyLDEsMywxLDIsMSwyLDEsMSwxLDgsMSw2LDEsMywxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4fQ0KICAgICAgICBbZ29laSA4XQ0KICAgICAgICAgICAgezM4OSwyNTB9DQogICAgICAgICAgICB7NTYsNjV9DQogICAgICAgICAgICB7TCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVSLFUsVVIsVSxVUixVLFVSLFIsVVIsUixVUixS"
            + "LERSLFIsRFIsUixEUixELERSLEQsRFIsRCxETCxELERMLEQsREwsRCxETCxMLERMLEwsVUwsTCxVTCxMLFVMLFUsVUwsVSxVTCxVfQ0KICAgICAgICAgICAgezE2NSwxLDMsMSwxLDEsMywxLDEsMSwxLDEsMSwzLDEsMSwxLDEyLDEsNSwxLDIsMSwyLDEsNCwxLDMsMSwxLDEsNCwxLDIsMSwxLDEsMSwxLDEsMSwxLDEsMiwxLDEsMSwxLDIsMSwyLDEsMywxLDIsMSwyLDEsMSwxLDgsMSw2LDEsMywxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4fQ0KICAgIChmb3JtYXRpb24gNCkNCiAgICAgICAgW3pha28gMV0NCiAgICAgICAgICAgIHsxMzYsLTIwfQ0KICAgICAgICAgICAgezEzNiwx"
            + "MDR9DQogICAgICAgICAgICB7RCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERSLEQsRFIsRCxEUixELERSLEQsRFIsUixEUixSLERSLFIsRFIsUixEUixSLFVSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsVSxSLFV9DQogICAgICAgICAgICB7MjAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAgICAgICAgW3pha28gMl0NCiAgICAgICAgICAgIHsxMzYsLTQwfQ0KICAgICAgICAgICAgezE1MiwxMDR9DQog"
            + "ICAgICAgICAgICB7RCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERSLEQsRFIsRCxEUixELERSLEQsRFIsUixEUixSLERSLFIsRFIsUixEUixSLFVSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsVSxSLFV9DQogICAgICAgICAgICB7NDAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAgICAgICAgW3pha28gM10NCiAgICAgICAgICAgIHsxMzYsLTYwfQ0KICAgICAgICAgICAgezEzNiw5MX0NCiAgICAgICAg"
            + "ICAgIHtELEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixSLERSLFIsRFIsUixEUixSLERSLFIsVVIsVVIsUixVUixSLFVSLFIsVVIsUixVUixVLFIsVX0NCiAgICAgICAgICAgIHs2MCw3LDEsMywxLDIsMSwxLDEsMywxLDMsMSwzLDIsMywxLDEsODAsMSwzLDEsMSwxLDEsMSwyLDEsMiwyLDEsMTEsMSwyLDIsMSwxLDEsMSwxLDEsMSw0LDIsMiwzLDEsMiwxLDEzLDEsMywxLDIsMSwyLDIsMSwzLDIsMSwzfQ0KICAgICAgICBbemFrbyA0XQ0KICAgICAgICAgICAgezEzNiwtODB9DQogICAgICAgICAgICB7MTUyLDkxfQ0KICAgICAgICAgICAge0Qs"
            + "RCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxEUixELERSLEQsRFIsRCxEUixELERSLFIsRFIsUixEUixSLERSLFIsRFIsUixVUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFUsUixVfQ0KICAgICAgICAgICAgezgwLDcsMSwzLDEsMiwxLDEsMSwzLDEsMywxLDMsMiwzLDEsMSw4MCwxLDMsMSwxLDEsMSwxLDIsMSwyLDIsMSwxMSwxLDIsMiwxLDEsMSwxLDEsMSwxLDQsMiwyLDMsMSwyLDEsMTMsMSwzLDEsMiwxLDIsMiwxLDMsMiwxLDN9DQogICAgICAgIFt6YWtvIDVdDQogICAgICAgICAgICB7MTM2LC0xMDB9DQogICAgICAgICAgICB7ODgsMTA0fQ0KICAgICAgICAgICAge0QsRCxETCxE"
            + "LERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxEUixELERSLEQsRFIsRCxEUixELERSLFIsRFIsUixEUixSLERSLFIsRFIsUixVUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFUsUixVfQ0KICAgICAgICAgICAgezEwMCw3LDEsMywxLDIsMSwxLDEsMywxLDMsMSwzLDIsMywxLDEsODAsMSwzLDEsMSwxLDEsMSwyLDEsMiwyLDEsMTEsMSwyLDIsMSwxLDEsMSwxLDEsMSw0LDIsMiwzLDEsMiwxLDEzLDEsMywxLDIsMSwyLDIsMSwzLDIsMSwzfQ0KICAgICAgICBbemFrbyA2XQ0KICAgICAgICAgICAgezEzNiwtMTIwfQ0KICAgICAgICAgICAgezcyLDEwNH0NCiAgICAgICAgICAgIHtELEQsREwsRCxETCxE"
            + "LERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixSLERSLFIsRFIsUixEUixSLERSLFIsVVIsVVIsUixVUixSLFVSLFIsVVIsUixVUixVLFIsVX0NCiAgICAgICAgICAgIHsxMjAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAgICAgICAgW3pha28gN10NCiAgICAgICAgICAgIHsxMzYsLTE0MH0NCiAgICAgICAgICAgIHs4OCw5MX0NCiAgICAgICAgICAgIHtELEQsREwsRCxETCxELERMLEQs"
            + "REwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixSLERSLFIsRFIsUixEUixSLERSLFIsVVIsVVIsUixVUixSLFVSLFIsVVIsUixVUixVLFIsVX0NCiAgICAgICAgICAgIHsxNDAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAgICAgICAgW3pha28gOF0NCiAgICAgICAgICAgIHsxMzYsLTE2MH0NCiAgICAgICAgICAgIHs3Miw5MX0NCiAgICAgICAgICAgIHtELEQsREwsRCxETCxELERMLEQsREwsRCxE"
            + "TCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixSLERSLFIsRFIsUixEUixSLERSLFIsVVIsVVIsUixVUixSLFVSLFIsVVIsUixVUixVLFIsVX0NCiAgICAgICAgICAgIHsxNjAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAgICAoZm9ybWF0aW9uIDUpDQogICAgICAgIFt6YWtvIDFdDQogICAgICAgICAgICB7ODgsLTIwfQ0KICAgICAgICAgICAgezE2OCwxMDR9DQogICAgICAgICAgICB7RCxELERSLEQsRFIs"
            + "RCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERMLEQsREwsRCxETCxELERMLEQsREwsTCxETCxMLERMLEwsREwsTCxETCxMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxVLEwsVX0NCiAgICAgICAgICAgIHsyMCw3LDEsMywxLDIsMSwxLDEsMywxLDMsMSwzLDIsMywxLDEsODAsMSwzLDEsMSwxLDEsMSwyLDEsMiwyLDEsMTEsMSwyLDIsMSwxLDEsMSwxLDEsMSw0LDIsMiwzLDEsMiwxLDEzLDEsMywxLDIsMSwyLDIsMSwzLDIsMSwzfQ0KICAgICAgICBbemFrbyAyXQ0KICAgICAgICAgICAgezg4LC00MH0NCiAgICAgICAgICAgIHsxODQsMTA0fQ0KICAgICAgICAgICAge0QsRCxEUixELERSLEQsRFIsRCxE"
            + "UixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxETCxELERMLEQsREwsRCxETCxELERMLEwsREwsTCxETCxMLERMLEwsREwsTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsVSxMLFV9DQogICAgICAgICAgICB7NDAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAgICAgICAgW3pha28gM10NCiAgICAgICAgICAgIHs4OCwtNjB9DQogICAgICAgICAgICB7MTY4LDkxfQ0KICAgICAgICAgICAge0QsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQs"
            + "RFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxETCxELERMLEQsREwsRCxETCxELERMLEwsREwsTCxETCxMLERMLEwsREwsTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsVSxMLFV9DQogICAgICAgICAgICB7NjAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAgICAgICAgW3pha28gNF0NCiAgICAgICAgICAgIHs4OCwtODB9DQogICAgICAgICAgICB7MTg0LDkxfQ0KICAgICAgICAgICAge0QsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixE"
            + "LERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxETCxELERMLEQsREwsRCxETCxELERMLEwsREwsTCxETCxMLERMLEwsREwsTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsVSxMLFV9DQogICAgICAgICAgICB7ODAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAgICAgICAgW3pha28gNV0NCiAgICAgICAgICAgIHs4OCwtMTAwfQ0KICAgICAgICAgICAgezU2LDEwNH0NCiAgICAgICAgICAgIHtELEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERS"
            + "LEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsREwsRCxETCxELERMLEQsREwsRCxETCxMLERMLEwsREwsTCxETCxMLERMLEwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLFUsTCxVfQ0KICAgICAgICAgICAgezEwMCw3LDEsMywxLDIsMSwxLDEsMywxLDMsMSwzLDIsMywxLDEsODAsMSwzLDEsMSwxLDEsMSwyLDEsMiwyLDEsMTEsMSwyLDIsMSwxLDEsMSwxLDEsMSw0LDIsMiwzLDEsMiwxLDEzLDEsMywxLDIsMSwyLDIsMSwzLDIsMSwzfQ0KICAgICAgICBbemFrbyA2XQ0KICAgICAgICAgICAgezg4LC0xMjB9DQogICAgICAgICAgICB7NDAsMTA0fQ0KICAgICAgICAgICAge0QsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixE"
            + "LERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxETCxELERMLEQsREwsRCxETCxELERMLEwsREwsTCxETCxMLERMLEwsREwsTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsVSxMLFV9DQogICAgICAgICAgICB7MTIwLDcsMSwzLDEsMiwxLDEsMSwzLDEsMywxLDMsMiwzLDEsMSw4MCwxLDMsMSwxLDEsMSwxLDIsMSwyLDIsMSwxMSwxLDIsMiwxLDEsMSwxLDEsMSwxLDQsMiwyLDMsMSwyLDEsMTMsMSwzLDEsMiwxLDIsMiwxLDMsMiwxLDN9DQogICAgICAgIFt6YWtvIDddDQogICAgICAgICAgICB7ODgsLTE0MH0NCiAgICAgICAgICAgIHs1Niw5MX0NCiAgICAgICAgICAgIHtELEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERS"
            + "LEQsRFIsRCxEUixELERSLEQsREwsRCxETCxELERMLEQsREwsRCxETCxMLERMLEwsREwsTCxETCxMLERMLEwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLFUsTCxVfQ0KICAgICAgICAgICAgezE0MCw3LDEsMywxLDIsMSwxLDEsMywxLDMsMSwzLDIsMywxLDEsODAsMSwzLDEsMSwxLDEsMSwyLDEsMiwyLDEsMTEsMSwyLDIsMSwxLDEsMSwxLDEsMSw0LDIsMiwzLDEsMiwxLDEzLDEsMywxLDIsMSwyLDIsMSwzLDIsMSwzfQ0KICAgICAgICBbemFrbyA4XQ0KICAgICAgICAgICAgezg4LC0xNjB9DQogICAgICAgICAgICB7NDAsOTF9DQogICAgICAgICAgICB7RCxELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQs"
            + "RFIsRCxEUixELERMLEQsREwsRCxETCxELERMLEQsREwsTCxETCxMLERMLEwsREwsTCxETCxMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxVLEwsVX0NCiAgICAgICAgICAgIHsxNjAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCnxTdGFnZSAyfA0KICAgIChmb3JtYXRpb24gMSkNCiAgICAgICAgW2dvZWkgMV0NCiAgICAgICAgICAgIHs4OCwtMjB9DQogICAgICAgICAgICB7MTIwLDc4fQ0KICAgICAgICAgICAge0QsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIs"
            + "RCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxETCxELERMLEQsREwsRCxETCxELERMLEwsREwsTCxETCxMLERMLEwsREwsTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsVSxMLFV9DQogICAgICAgICAgICB7MjAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAgICAgICAgW2dvZWkgMl0NCiAgICAgICAgICAgIHs4OCwtNDB9DQogICAgICAgICAgICB7MTIwLDY1fQ0KICAgICAgICAgICAge0QsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERS"
            + "LEQsRFIsRCxEUixELERSLEQsRFIsRCxETCxELERMLEQsREwsRCxETCxELERMLEwsREwsTCxETCxMLERMLEwsREwsTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsVSxMLFV9DQogICAgICAgICAgICB7NDAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAgICAgICAgW2dvZWkgM10NCiAgICAgICAgICAgIHs4OCwtNjB9DQogICAgICAgICAgICB7MTA0LDY1fQ0KICAgICAgICAgICAge0QsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxE"
            + "UixELERSLEQsRFIsRCxETCxELERMLEQsREwsRCxETCxELERMLEwsREwsTCxETCxMLERMLEwsREwsTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsVSxMLFV9DQogICAgICAgICAgICB7NjAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAgICAgICAgW2dvZWkgNF0NCiAgICAgICAgICAgIHs4OCwtODB9DQogICAgICAgICAgICB7MTA0LDc4fQ0KICAgICAgICAgICAge0QsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQs"
            + "RFIsRCxETCxELERMLEQsREwsRCxETCxELERMLEwsREwsTCxETCxMLERMLEwsREwsTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsVSxMLFV9DQogICAgICAgICAgICB7ODAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAgICAgICAgW3pha28gMV0NCiAgICAgICAgICAgIHsxMzYsLTIwfQ0KICAgICAgICAgICAgezEwNCwxMDR9DQogICAgICAgICAgICB7RCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERS"
            + "LEQsRFIsRCxEUixELERSLEQsRFIsUixEUixSLERSLFIsRFIsUixEUixSLFVSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsVSxSLFV9DQogICAgICAgICAgICB7MjAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAgICAgICAgW3pha28gMl0NCiAgICAgICAgICAgIHsxMzYsLTQwfQ0KICAgICAgICAgICAgezEwNCw5MX0NCiAgICAgICAgICAgIHtELEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsRFIsRCxEUixE"
            + "LERSLEQsRFIsRCxEUixSLERSLFIsRFIsUixEUixSLERSLFIsVVIsVVIsUixVUixSLFVSLFIsVVIsUixVUixVLFIsVX0NCiAgICAgICAgICAgIHs0MCw3LDEsMywxLDIsMSwxLDEsMywxLDMsMSwzLDIsMywxLDEsODAsMSwzLDEsMSwxLDEsMSwyLDEsMiwyLDEsMTEsMSwyLDIsMSwxLDEsMSwxLDEsMSw0LDIsMiwzLDEsMiwxLDEzLDEsMywxLDIsMSwyLDIsMSwzLDIsMSwzfQ0KICAgICAgICBbemFrbyAzXQ0KICAgICAgICAgICAgezEzNiwtNjB9DQogICAgICAgICAgICB7MTIwLDEwNH0NCiAgICAgICAgICAgIHtELEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsRFIsRCxEUixELERSLEQs"
            + "RFIsRCxEUixSLERSLFIsRFIsUixEUixSLERSLFIsVVIsVVIsUixVUixSLFVSLFIsVVIsUixVUixVLFIsVX0NCiAgICAgICAgICAgIHs2MCw3LDEsMywxLDIsMSwxLDEsMywxLDMsMSwzLDIsMywxLDEsODAsMSwzLDEsMSwxLDEsMSwyLDEsMiwyLDEsMTEsMSwyLDIsMSwxLDEsMSwxLDEsMSw0LDIsMiwzLDEsMiwxLDEzLDEsMywxLDIsMSwyLDIsMSwzLDIsMSwzfQ0KICAgICAgICBbemFrbyA0XQ0KICAgICAgICAgICAgezEzNiwtODB9DQogICAgICAgICAgICB7MTIwLDkxfQ0KICAgICAgICAgICAge0QsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxEUixELERSLEQsRFIsRCxEUixELERS"
            + "LFIsRFIsUixEUixSLERSLFIsRFIsUixVUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFUsUixVfQ0KICAgICAgICAgICAgezgwLDcsMSwzLDEsMiwxLDEsMSwzLDEsMywxLDMsMiwzLDEsMSw4MCwxLDMsMSwxLDEsMSwxLDIsMSwyLDIsMSwxMSwxLDIsMiwxLDEsMSwxLDEsMSwxLDQsMiwyLDMsMSwyLDEsMTMsMSwzLDEsMiwxLDIsMiwxLDMsMiwxLDN9DQogICAgKGZvcm1hdGlvbiAyKQ0KICAgICAgICBbZ29laSAxXQ0KICAgICAgICAgICAgey0yNSwyNTB9DQogICAgICAgICAgICB7ODgsNjV9DQogICAgICAgICAgICB7UixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIs"
            + "VSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVMLFUsVUwsVSxVTCxVLFVMLEwsVUwsTCxVTCxMLERMLEwsREwsTCxETCxELERMLEQsREwsRCxEUixELERSLEQsRFIsRCxEUixSLERSLFIsVVIsUixVUixSLFVSLFUsVVIsVSxVUixVfQ0KICAgICAgICAgICAgezI1LDEsMywxLDEsMSwzLDEsMSwxLDEsMSwxLDMsMSwxLDEsMTIsMSw1LDEsMiwxLDIsMSw0LDEsMywxLDEsMSw0LDEsMiwxLDEsMSwxLDEsMSwxLDEsMSwyLDEsMSwxLDEsMiwxLDIsMSwzLDEsMiwxLDIsMSwxLDEsOCwxLDYsMSwzLDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwx"
            + "LDEsNywxLDEsMiwxLDh9DQogICAgICAgIFtib3NzX0dhbGFnYSAxXQ0KICAgICAgICAgICAgey0yNSwyNTB9DQogICAgICAgICAgICB7ODgsNDZ9DQogICAgICAgICAgICB7cmlnaHR9DQogICAgICAgICAgICB7MX0NCiAgICAgICAgW2dvZWkgMl0NCiAgICAgICAgICAgIHstNDUsMjUwfQ0KICAgICAgICAgICAgezg4LDc4fQ0KICAgICAgICAgICAge1IsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVTCxVLFVMLFUsVUwsVSxVTCxMLFVMLEwsVUws"
            + "TCxETCxMLERMLEwsREwsRCxETCxELERMLEQsRFIsRCxEUixELERSLEQsRFIsUixEUixSLFVSLFIsVVIsUixVUixVLFVSLFUsVVIsVX0NCiAgICAgICAgICAgIHs0NSwxLDMsMSwxLDEsMywxLDEsMSwxLDEsMSwzLDEsMSwxLDEyLDEsNSwxLDIsMSwyLDEsNCwxLDMsMSwxLDEsNCwxLDIsMSwxLDEsMSwxLDEsMSwxLDEsMiwxLDEsMSwxLDIsMSwyLDEsMywxLDIsMSwyLDEsMSwxLDgsMSw2LDEsMywxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4fQ0KICAgICAgICBbYm9zc19HYWxhZ2EgMl0NCiAgICAgICAgICAgIHstNDUsMjUwfQ0KICAgICAgICAgICAgezEwNCw0Nn0NCiAgICAgICAg"
            + "ICAgIHtyaWdodH0NCiAgICAgICAgICAgIHszfQ0KICAgICAgICBbZ29laSAzXQ0KICAgICAgICAgICAgey02NSwyNTB9DQogICAgICAgICAgICB7MTM2LDY1fQ0KICAgICAgICAgICAge1IsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVTCxVLFVMLFUsVUwsVSxVTCxMLFVMLEwsVUwsTCxETCxMLERMLEwsREwsRCxETCxELERMLEQsRFIsRCxEUixELERSLEQsRFIsUixEUixSLFVSLFIsVVIsUixVUixVLFVSLFUsVVIsVX0gDQogICAgICAgICAgICB7"
            + "NjUsMSwzLDEsMSwxLDMsMSwxLDEsMSwxLDEsMywxLDEsMSwxMiwxLDUsMSwyLDEsMiwxLDQsMSwzLDEsMSwxLDQsMSwyLDEsMSwxLDEsMSwxLDEsMSwxLDIsMSwxLDEsMSwyLDEsMiwxLDMsMSwyLDEsMiwxLDEsMSw4LDEsNiwxLDMsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOH0NCiAgICAgICAgW2Jvc3NfR2FsYWdhIDNdDQogICAgICAgICAgICB7LTY1LDI1MH0NCiAgICAgICAgICAgIHsxMjAsNDZ9DQogICAgICAgICAgICB7cmlnaHR9DQogICAgICAgICAgICB7NX0NCiAgICAgICAgW2dvZWkgNF0NCiAgICAgICAgICAgIHstODUsMjUwfQ0KICAgICAgICAgICAgezEzNiw3OH0N"
            + "CiAgICAgICAgICAgIHtSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVUwsVSxVTCxVLFVMLFUsVUwsTCxVTCxMLFVMLEwsREwsTCxETCxMLERMLEQsREwsRCxETCxELERSLEQsRFIsRCxEUixELERSLFIsRFIsUixVUixSLFVSLFIsVVIsVSxVUixVLFVSLFV9IA0KICAgICAgICAgICAgezg1LDEsMywxLDEsMSwzLDEsMSwxLDEsMSwxLDMsMSwxLDEsMTIsMSw1LDEsMiwxLDIsMSw0LDEsMywxLDEsMSw0LDEsMiwxLDEsMSwxLDEsMSwxLDEsMSwyLDEs"
            + "MSwxLDEsMiwxLDIsMSwzLDEsMiwxLDIsMSwxLDEsOCwxLDYsMSwzLDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDh9DQogICAgICAgIFtib3NzX0dhbGFnYSA0XQ0KICAgICAgICAgICAgey04NSwyNTB9DQogICAgICAgICAgICB7MTM2LDQ2fQ0KICAgICAgICAgICAge3JpZ2h0fQ0KICAgICAgICAgICAgezd9DQogICAgKGZvcm1hdGlvbiAzKQ0KICAgICAgICBbZ29laSAxXQ0KICAgICAgICAgICAgezI0OSwyNTB9DQogICAgICAgICAgICB7MTUyLDc4fQ0KICAgICAgICAgICAge0wsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLFUsVUwsVSxVTCxVLFVM"
            + "LFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVUixVLFVSLFUsVVIsVSxVUixSLFVSLFIsVVIsUixEUixSLERSLFIsRFIsRCxEUixELERSLEQsREwsRCxETCxELERMLEQsREwsTCxETCxMLFVMLEwsVUwsTCxVTCxVLFVMLFUsVUwsVX0NCiAgICAgICAgICAgIHsyNSwxLDMsMSwxLDEsMywxLDEsMSwxLDEsMSwzLDEsMSwxLDEyLDEsNSwxLDIsMSwyLDEsNCwxLDMsMSwxLDEsNCwxLDIsMSwxLDEsMSwxLDEsMSwxLDEsMiwxLDEsMSwxLDIsMSwyLDEsMywxLDIsMSwyLDEsMSwxLDgsMSw2LDEsMywxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEs"
            + "MiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4fQ0KICAgICAgICBbZ29laSAyXQ0KICAgICAgICAgICAgezI0OSwyNTB9DQogICAgICAgICAgICB7MTUyLDY1fQ0KICAgICAgICAgICAge2xlZnR9DQogICAgICAgICAgICB7MX0NCiAgICAgICAgW2dvZWkgM10NCiAgICAgICAgICAgIHsyNjksMjUwfQ0KICAgICAgICAgICAgezE2OCw3OH0NCiAgICAgICAgICAgIHtMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVVIs"
            + "VSxVUixVLFVSLFUsVVIsUixVUixSLFVSLFIsRFIsUixEUixSLERSLEQsRFIsRCxEUixELERMLEQsREwsRCxETCxELERMLEwsREwsTCxVTCxMLFVMLEwsVUwsVSxVTCxVLFVMLFV9DQogICAgICAgICAgICB7NDUsMSwzLDEsMSwxLDMsMSwxLDEsMSwxLDEsMywxLDEsMSwxMiwxLDUsMSwyLDEsMiwxLDQsMSwzLDEsMSwxLDQsMSwyLDEsMSwxLDEsMSwxLDEsMSwxLDIsMSwxLDEsMSwyLDEsMiwxLDMsMSwyLDEsMiwxLDEsMSw4LDEsNiwxLDMsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOH0NCiAgICAgICAgW2dvZWkgNF0NCiAgICAgICAgICAgIHsyNjksMjUwfQ0KICAgICAgICAgICAg"
            + "ezE2OCw2NX0NCiAgICAgICAgICAgIHtsZWZ0fQ0KICAgICAgICAgICAgezN9DQogICAgICAgIFtnb2VpIDVdDQogICAgICAgICAgICB7Mjg5LDI1MH0NCiAgICAgICAgICAgIHs3Miw3OH0NCiAgICAgICAgICAgIHtMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVVIsVSxVUixVLFVSLFUsVVIsUixVUixSLFVSLFIsRFIsUixEUixSLERSLEQsRFIsRCxEUixELERMLEQsREwsRCxETCxELERMLEwsREwsTCxVTCxMLFVMLEwsVUwsVSxVTCxVLFVMLFV9"
            + "IA0KICAgICAgICAgICAgezY1LDEsMywxLDEsMSwzLDEsMSwxLDEsMSwxLDMsMSwxLDEsMTIsMSw1LDEsMiwxLDIsMSw0LDEsMywxLDEsMSw0LDEsMiwxLDEsMSwxLDEsMSwxLDEsMSwyLDEsMSwxLDEsMiwxLDIsMSwzLDEsMiwxLDIsMSwxLDEsOCwxLDYsMSwzLDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDh9DQogICAgICAgIFtnb2VpIDZdDQogICAgICAgICAgICB7Mjg5LDI1MH0NCiAgICAgICAgICAgIHs3Miw2NX0NCiAgICAgICAgICAgIHtsZWZ0fQ0KICAgICAgICAgICAgezV9DQogICAgICAgIFtnb2VpIDddDQogICAgICAgICAgICB7MzA5LDI1MH0NCiAgICAgICAgICAgIHs1"
            + "Niw3OH0NCiAgICAgICAgICAgIHtMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVVIsVSxVUixVLFVSLFUsVVIsUixVUixSLFVSLFIsRFIsUixEUixSLERSLEQsRFIsRCxEUixELERMLEQsREwsRCxETCxELERMLEwsREwsTCxVTCxMLFVMLEwsVUwsVSxVTCxVLFVMLFV9IA0KICAgICAgICAgICAgezg1LDEsMywxLDEsMSwzLDEsMSwxLDEsMSwxLDMsMSwxLDEsMTIsMSw1LDEsMiwxLDIsMSw0LDEsMywxLDEsMSw0LDEsMiwxLDEsMSwxLDEsMSwxLDEs"
            + "MSwyLDEsMSwxLDEsMiwxLDIsMSwzLDEsMiwxLDIsMSwxLDEsOCwxLDYsMSwzLDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDh9DQogICAgICAgIFtnb2VpIDhdDQogICAgICAgICAgICB7MzA5LDI1MH0NCiAgICAgICAgICAgIHs1Niw2NX0NCiAgICAgICAgICAgIHtsZWZ0fQ0KICAgICAgICAgICAgezd9DQogICAgKGZvcm1hdGlvbiA0KQ0KICAgICAgICBbemFrbyAxXQ0KICAgICAgICAgICAgezEzNiwtMjB9DQogICAgICAgICAgICB7MTM2LDEwNH0NCiAgICAgICAgICAgIHtELEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERM"
            + "LEQsREwsRCxETCxELERMLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixSLERSLFIsRFIsUixEUixSLERSLFIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFUsUixVfQ0KICAgICAgICAgICAgezIwLDcsMSwzLDEsMiwxLDEsMSwzLDEsMywxLDMsMiwzLDEsMSw4MCwxLDMsMSwxLDEsMSwxLDIsMSwyLDIsMSwxMSwxLDIsMiwxLDEsMSwxLDEsMSwxLDQsMiwyLDMsMSwyLDEsMTMsMSwzLDEsMiwxLDIsMiwxLDMsMiwxLDN9DQogICAgICAgIFt6YWtvIDJdDQogICAgICAgICAgICB7MTM2LC00MH0NCiAgICAgICAgICAgIHsxNTIsMTA0fQ0KICAgICAgICAgICAge0QsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxE"
            + "LERMLEQsREwsRCxEUixELERSLEQsRFIsRCxEUixELERSLFIsRFIsUixEUixSLERSLFIsRFIsUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsVSxSLFV9DQogICAgICAgICAgICB7NDAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAgICAgICAgW3pha28gM10NCiAgICAgICAgICAgIHsxMzYsLTYwfQ0KICAgICAgICAgICAgezEzNiw5MX0NCiAgICAgICAgICAgIHtELEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERM"
            + "LEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixSLERSLFIsRFIsUixEUixSLERSLFIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFUsUixVfQ0KICAgICAgICAgICAgezYwLDcsMSwzLDEsMiwxLDEsMSwzLDEsMywxLDMsMiwzLDEsMSw4MCwxLDMsMSwxLDEsMSwxLDIsMSwyLDIsMSwxMSwxLDIsMiwxLDEsMSwxLDEsMSwxLDQsMiwyLDMsMSwyLDEsMTMsMSwzLDEsMiwxLDIsMiwxLDMsMiwxLDN9DQogICAgICAgIFt6YWtvIDRdDQogICAgICAgICAgICB7MTM2LC04MH0NCiAgICAgICAgICAgIHsxNTIsOTF9DQogICAgICAgICAgICB7RCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERSLEQs"
            + "RFIsRCxEUixELERSLEQsRFIsUixEUixSLERSLFIsRFIsUixEUixSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixVLFIsVX0NCiAgICAgICAgICAgIHs4MCw3LDEsMywxLDIsMSwxLDEsMywxLDMsMSwzLDIsMywxLDEsODAsMSwzLDEsMSwxLDEsMSwyLDEsMiwyLDEsMTEsMSwyLDIsMSwxLDEsMSwxLDEsMSw0LDIsMiwzLDEsMiwxLDEzLDEsMywxLDIsMSwyLDIsMSwzLDIsMSwzfQ0KICAgICAgICBbemFrbyA1XQ0KICAgICAgICAgICAgezEzNiwtMjB9DQogICAgICAgICAgICB7ODgsMTA0fQ0KICAgICAgICAgICAge3JpZ2h0fQ0KICAgICAgICAgICAgezF9DQogICAgICAgIFt6YWtvIDZdDQogICAgICAgICAgICB7MTM2LC00MH0NCiAgICAgICAgICAgIHs3MiwxMDR9DQogICAg"
            + "ICAgICAgICB7cmlnaHR9DQogICAgICAgICAgICB7Mn0NCiAgICAgICAgW3pha28gN10NCiAgICAgICAgICAgIHsxMzYsLTYwfQ0KICAgICAgICAgICAgezg4LDkxfQ0KICAgICAgICAgICAge3JpZ2h0fQ0KICAgICAgICAgICAgezN9DQogICAgICAgIFt6YWtvIDhdDQogICAgICAgICAgICB7MTM2LC04MH0NCiAgICAgICAgICAgIHs3Miw5MX0NCiAgICAgICAgICAgIHtyaWdodH0NCiAgICAgICAgICAgIHs0fQ0KICAgIChmb3JtYXRpb24gNSkNCiAgICAgICAgW3pha28gMV0NCiAgICAgICAgICAgIHs4OCwtMjB9DQogICAgICAgICAgICB7MTY4LDEwNH0NCiAgICAgICAgICAgIHtELEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxE"
            + "UixELERSLEQsRFIsRCxEUixELERSLEQsREwsRCxETCxELERMLEQsREwsRCxETCxMLERMLEwsREwsTCxETCxMLERMLEwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLFUsTCxVfQ0KICAgICAgICAgICAgezIwLDcsMSwzLDEsMiwxLDEsMSwzLDEsMywxLDMsMiwzLDEsMSw4MCwxLDMsMSwxLDEsMSwxLDIsMSwyLDIsMSwxMSwxLDIsMiwxLDEsMSwxLDEsMSwxLDQsMiwyLDMsMSwyLDEsMTMsMSwzLDEsMiwxLDIsMiwxLDMsMiwxLDN9DQogICAgICAgIFt6YWtvIDJdDQogICAgICAgICAgICB7ODgsLTQwfQ0KICAgICAgICAgICAgezE4NCwxMDR9DQogICAgICAgICAgICB7RCxELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixE"
            + "LERSLEQsRFIsRCxEUixELERMLEQsREwsRCxETCxELERMLEQsREwsTCxETCxMLERMLEwsREwsTCxETCxMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxVLEwsVX0NCiAgICAgICAgICAgIHs0MCw3LDEsMywxLDIsMSwxLDEsMywxLDMsMSwzLDIsMywxLDEsODAsMSwzLDEsMSwxLDEsMSwyLDEsMiwyLDEsMTEsMSwyLDIsMSwxLDEsMSwxLDEsMSw0LDIsMiwzLDEsMiwxLDEzLDEsMywxLDIsMSwyLDIsMSwzLDIsMSwzfQ0KICAgICAgICBbemFrbyAzXQ0KICAgICAgICAgICAgezg4LC02MH0NCiAgICAgICAgICAgIHsxNjgsOTF9DQogICAgICAgICAgICB7RCxELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIs"
            + "RCxEUixELERMLEQsREwsRCxETCxELERMLEQsREwsTCxETCxMLERMLEwsREwsTCxETCxMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxVLEwsVX0NCiAgICAgICAgICAgIHs2MCw3LDEsMywxLDIsMSwxLDEsMywxLDMsMSwzLDIsMywxLDEsODAsMSwzLDEsMSwxLDEsMSwyLDEsMiwyLDEsMTEsMSwyLDIsMSwxLDEsMSwxLDEsMSw0LDIsMiwzLDEsMiwxLDEzLDEsMywxLDIsMSwyLDIsMSwzLDIsMSwzfQ0KICAgICAgICBbemFrbyA0XQ0KICAgICAgICAgICAgezg4LC04MH0NCiAgICAgICAgICAgIHsxODQsOTF9DQogICAgICAgICAgICB7RCxELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERM"
            + "LEQsREwsRCxETCxELERMLEQsREwsTCxETCxMLERMLEwsREwsTCxETCxMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxVLEwsVX0NCiAgICAgICAgICAgIHs4MCw3LDEsMywxLDIsMSwxLDEsMywxLDMsMSwzLDIsMywxLDEsODAsMSwzLDEsMSwxLDEsMSwyLDEsMiwyLDEsMTEsMSwyLDIsMSwxLDEsMSwxLDEsMSw0LDIsMiwzLDEsMiwxLDEzLDEsMywxLDIsMSwyLDIsMSwzLDIsMSwzfQ0KICAgICAgICBbemFrbyA1XQ0KICAgICAgICAgICAgezg4LC0yMH0NCiAgICAgICAgICAgIHs1NiwxMDR9DQogICAgICAgICAgICB7bGVmdH0NCiAgICAgICAgICAgIHsxfQ0KICAgICAgICBbemFrbyA2XQ0KICAgICAgICAgICAgezg4LC00MH0NCiAgICAgICAgICAgIHs0MCwxMDR9DQogICAg"
            + "ICAgICAgICB7bGVmdH0NCiAgICAgICAgICAgIHsyfQ0KICAgICAgICBbemFrbyA3XQ0KICAgICAgICAgICAgezg4LC02MH0NCiAgICAgICAgICAgIHs1Niw5MX0NCiAgICAgICAgICAgIHtsZWZ0fQ0KICAgICAgICAgICAgezN9DQogICAgICAgIFt6YWtvIDhdDQogICAgICAgICAgICB7ODgsLTgwfQ0KICAgICAgICAgICAgezQwLDkxfQ0KICAgICAgICAgICAge2xlZnR9DQogICAgICAgICAgICB7NH0NCnxTdGFnZSAzfA0KICAgIChmb3JtYXRpb24gMSkNCiAgICAgICAgW2dvZWkgMV0NCiAgICAgICAgICAgIHs4OCwtMjB9DQogICAgICAgICAgICB7MTIwLDc4fQ0KICAgICAgICAgICAge0QsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxE"
            + "UixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxETCxELERMLEQsREwsRCxETCxELERMLEwsREwsTCxETCxMLERMLEwsREwsTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsVSxMLFV9DQogICAgICAgICAgICB7MjAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAgICAgICAgW2dvZWkgMl0NCiAgICAgICAgICAgIHs4OCwtNDB9DQogICAgICAgICAgICB7MTIwLDY1fQ0KICAgICAgICAgICAge0QsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQs"
            + "RFIsRCxEUixELERSLEQsRFIsRCxETCxELERMLEQsREwsRCxETCxELERMLEwsREwsTCxETCxMLERMLEwsREwsTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsVSxMLFV9DQogICAgICAgICAgICB7NDAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAgICAgICAgW2dvZWkgM10NCiAgICAgICAgICAgIHs4OCwtNjB9DQogICAgICAgICAgICB7MTA0LDY1fQ0KICAgICAgICAgICAge0QsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixE"
            + "LERSLEQsRFIsRCxETCxELERMLEQsREwsRCxETCxELERMLEwsREwsTCxETCxMLERMLEwsREwsTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsVSxMLFV9DQogICAgICAgICAgICB7NjAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAgICAgICAgW2dvZWkgNF0NCiAgICAgICAgICAgIHs4OCwtODB9DQogICAgICAgICAgICB7MTA0LDc4fQ0KICAgICAgICAgICAge0QsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIs"
            + "RCxETCxELERMLEQsREwsRCxETCxELERMLEwsREwsTCxETCxMLERMLEwsREwsTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsVSxMLFV9DQogICAgICAgICAgICB7ODAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAgICAgICAgW3pha28gMV0NCiAgICAgICAgICAgIHsxMzYsLTIwfQ0KICAgICAgICAgICAgezEwNCwxMDR9DQogICAgICAgICAgICB7RCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERSLEQs"
            + "RFIsRCxEUixELERSLEQsRFIsUixEUixSLERSLFIsRFIsUixEUixSLFVSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsVSxSLFV9DQogICAgICAgICAgICB7MjAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAgICAgICAgW3pha28gMl0NCiAgICAgICAgICAgIHsxMzYsLTQwfQ0KICAgICAgICAgICAgezEwNCw5MX0NCiAgICAgICAgICAgIHtELEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsRFIsRCxEUixELERS"
            + "LEQsRFIsRCxEUixSLERSLFIsRFIsUixEUixSLERSLFIsVVIsVVIsUixVUixSLFVSLFIsVVIsUixVUixVLFIsVX0NCiAgICAgICAgICAgIHs0MCw3LDEsMywxLDIsMSwxLDEsMywxLDMsMSwzLDIsMywxLDEsODAsMSwzLDEsMSwxLDEsMSwyLDEsMiwyLDEsMTEsMSwyLDIsMSwxLDEsMSwxLDEsMSw0LDIsMiwzLDEsMiwxLDEzLDEsMywxLDIsMSwyLDIsMSwzLDIsMSwzfQ0KICAgICAgICBbemFrbyAzXQ0KICAgICAgICAgICAgezEzNiwtNjB9DQogICAgICAgICAgICB7MTIwLDEwNH0NCiAgICAgICAgICAgIHtELEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsRFIsRCxEUixELERSLEQsRFIs"
            + "RCxEUixSLERSLFIsRFIsUixEUixSLERSLFIsVVIsVVIsUixVUixSLFVSLFIsVVIsUixVUixVLFIsVX0NCiAgICAgICAgICAgIHs2MCw3LDEsMywxLDIsMSwxLDEsMywxLDMsMSwzLDIsMywxLDEsODAsMSwzLDEsMSwxLDEsMSwyLDEsMiwyLDEsMTEsMSwyLDIsMSwxLDEsMSwxLDEsMSw0LDIsMiwzLDEsMiwxLDEzLDEsMywxLDIsMSwyLDIsMSwzLDIsMSwzfQ0KICAgICAgICBbemFrbyA0XQ0KICAgICAgICAgICAgezEzNiwtODB9DQogICAgICAgICAgICB7MTIwLDkxfQ0KICAgICAgICAgICAge0QsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxEUixELERSLEQsRFIsRCxEUixELERSLFIs"
            + "RFIsUixEUixSLERSLFIsRFIsUixVUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFUsUixVfQ0KICAgICAgICAgICAgezgwLDcsMSwzLDEsMiwxLDEsMSwzLDEsMywxLDMsMiwzLDEsMSw4MCwxLDMsMSwxLDEsMSwxLDIsMSwyLDIsMSwxMSwxLDIsMiwxLDEsMSwxLDEsMSwxLDQsMiwyLDMsMSwyLDEsMTMsMSwzLDEsMiwxLDIsMiwxLDMsMiwxLDN9DQogICAgKGZvcm1hdGlvbiAyKQ0KICAgICAgICBbYm9zc19HYWxhZ2EgMV0NCiAgICAgICAgICAgIHstMjUsMjUwfQ0KICAgICAgICAgICAgezg4LDQ2fQ0KICAgICAgICAgICAge1IsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixV"
            + "LFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVTCxVLFVMLFUsVUwsVSxVTCxMLFVMLEwsVUwsTCxETCxMLERMLEwsREwsRCxETCxELERMLEQsRFIsRCxEUixELERSLEQsRFIsUixEUixSLFVSLFIsVVIsUixVUixVLFVSLFUsVVIsVX0NCiAgICAgICAgICAgIHsyNSwxLDMsMSwxLDEsMywxLDEsMSwxLDEsMSwzLDEsMSwxLDEyLDEsNSwxLDIsMSwyLDEsNCwxLDMsMSwxLDEsNCwxLDIsMSwxLDEsMSwxLDEsMSwxLDEsMiwxLDEsMSwxLDIsMSwyLDEsMywxLDIsMSwyLDEsMSwxLDgsMSw2LDEsMywxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwx"
            + "LDIsMSwxLDcsMSwxLDIsMSw4fQ0KICAgICAgICBbYm9zc19HYWxhZ2EgMl0NCiAgICAgICAgICAgIHstNDUsMjUwfQ0KICAgICAgICAgICAgezEwNCw0Nn0NCiAgICAgICAgICAgIHtSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVUwsVSxVTCxVLFVMLFUsVUwsTCxVTCxMLFVMLEwsREwsTCxETCxMLERMLEQsREwsRCxETCxELERSLEQsRFIsRCxEUixELERSLFIsRFIsUixVUixSLFVSLFIsVVIsVSxVUixVLFVSLFV9DQogICAgICAgICAgICB7NDUs"
            + "MSwzLDEsMSwxLDMsMSwxLDEsMSwxLDEsMywxLDEsMSwxMiwxLDUsMSwyLDEsMiwxLDQsMSwzLDEsMSwxLDQsMSwyLDEsMSwxLDEsMSwxLDEsMSwxLDIsMSwxLDEsMSwyLDEsMiwxLDMsMSwyLDEsMiwxLDEsMSw4LDEsNiwxLDMsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOH0NCiAgICAgICAgW2Jvc3NfR2FsYWdhIDNdDQogICAgICAgICAgICB7LTY1LDI1MH0NCiAgICAgICAgICAgIHsxMjAsNDZ9DQogICAgICAgICAgICB7UixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIs"
            + "VSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVMLFUsVUwsVSxVTCxVLFVMLEwsVUwsTCxVTCxMLERMLEwsREwsTCxETCxELERMLEQsREwsRCxEUixELERSLEQsRFIsRCxEUixSLERSLFIsVVIsUixVUixSLFVSLFUsVVIsVSxVUixVfQ0KICAgICAgICAgICAgezY1LDEsMywxLDEsMSwzLDEsMSwxLDEsMSwxLDMsMSwxLDEsMTIsMSw1LDEsMiwxLDIsMSw0LDEsMywxLDEsMSw0LDEsMiwxLDEsMSwxLDEsMSwxLDEsMSwyLDEsMSwxLDEsMiwxLDIsMSwzLDEsMiwxLDIsMSwxLDEsOCwxLDYsMSwzLDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwx"
            + "LDEsNywxLDEsMiwxLDh9DQogICAgICAgIFtib3NzX0dhbGFnYSA0XQ0KICAgICAgICAgICAgey04NSwyNTB9DQogICAgICAgICAgICB7MTM2LDQ2fQ0KICAgICAgICAgICAge1IsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVTCxVLFVMLFUsVUwsVSxVTCxMLFVMLEwsVUwsTCxETCxMLERMLEwsREwsRCxETCxELERMLEQsRFIsRCxEUixELERSLEQsRFIsUixEUixSLFVSLFIsVVIsUixVUixVLFVSLFUsVVIsVX0NCiAgICAgICAgICAgIHs4NSwxLDMs"
            + "MSwxLDEsMywxLDEsMSwxLDEsMSwzLDEsMSwxLDEyLDEsNSwxLDIsMSwyLDEsNCwxLDMsMSwxLDEsNCwxLDIsMSwxLDEsMSwxLDEsMSwxLDEsMiwxLDEsMSwxLDIsMSwyLDEsMywxLDIsMSwyLDEsMSwxLDgsMSw2LDEsMywxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4fQ0KICAgICAgICBbZ29laSAxXQ0KICAgICAgICAgICAgezI0OSwyNTB9DQogICAgICAgICAgICB7ODgsNjV9DQogICAgICAgICAgICB7TCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUs"
            + "VUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVSLFUsVVIsVSxVUixVLFVSLFIsVVIsUixVUixSLERSLFIsRFIsUixEUixELERSLEQsRFIsRCxETCxELERMLEQsREwsRCxETCxMLERMLEwsVUwsTCxVTCxMLFVMLFUsVUwsVSxVTCxVfQ0KICAgICAgICAgICAgezI1LDEsMywxLDEsMSwzLDEsMSwxLDEsMSwxLDMsMSwxLDEsMTIsMSw1LDEsMiwxLDIsMSw0LDEsMywxLDEsMSw0LDEsMiwxLDEsMSwxLDEsMSwxLDEsMSwyLDEsMSwxLDEsMiwxLDIsMSwzLDEsMiwxLDIsMSwxLDEsOCwxLDYsMSwzLDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwx"
            + "LDh9DQogICAgICAgIFtnb2VpIDJdDQogICAgICAgICAgICB7MjY5LDI1MH0NCiAgICAgICAgICAgIHs4OCw3OH0NCiAgICAgICAgICAgIHtMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVVIsVSxVUixVLFVSLFUsVVIsUixVUixSLFVSLFIsRFIsUixEUixSLERSLEQsRFIsRCxEUixELERMLEQsREwsRCxETCxELERMLEwsREwsTCxVTCxMLFVMLEwsVUwsVSxVTCxVLFVMLFV9DQogICAgICAgICAgICB7NDUsMSwzLDEsMSwxLDMsMSwxLDEsMSwxLDEs"
            + "MywxLDEsMSwxMiwxLDUsMSwyLDEsMiwxLDQsMSwzLDEsMSwxLDQsMSwyLDEsMSwxLDEsMSwxLDEsMSwxLDIsMSwxLDEsMSwyLDEsMiwxLDMsMSwyLDEsMiwxLDEsMSw4LDEsNiwxLDMsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOH0NCiAgICAgICAgW2dvZWkgM10NCiAgICAgICAgICAgIHsyODksMjUwfQ0KICAgICAgICAgICAgezEzNiw2NX0NCiAgICAgICAgICAgIHtMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxV"
            + "LFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVVIsVSxVUixVLFVSLFUsVVIsUixVUixSLFVSLFIsRFIsUixEUixSLERSLEQsRFIsRCxEUixELERMLEQsREwsRCxETCxELERMLEwsREwsTCxVTCxMLFVMLEwsVUwsVSxVTCxVLFVMLFV9DQogICAgICAgICAgICB7NjUsMSwzLDEsMSwxLDMsMSwxLDEsMSwxLDEsMywxLDEsMSwxMiwxLDUsMSwyLDEsMiwxLDQsMSwzLDEsMSwxLDQsMSwyLDEsMSwxLDEsMSwxLDEsMSwxLDIsMSwxLDEsMSwyLDEsMiwxLDMsMSwyLDEsMiwxLDEsMSw4LDEsNiwxLDMsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOH0NCiAgICAgICAgW2dvZWkg"
            + "NF0NCiAgICAgICAgICAgIHszMDksMjUwfQ0KICAgICAgICAgICAgezEzNiw3OH0NCiAgICAgICAgICAgIHtMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVVIsVSxVUixVLFVSLFUsVVIsUixVUixSLFVSLFIsRFIsUixEUixSLERSLEQsRFIsRCxEUixELERMLEQsREwsRCxETCxELERMLEwsREwsTCxVTCxMLFVMLEwsVUwsVSxVTCxVLFVMLFV9DQogICAgICAgICAgICB7ODUsMSwzLDEsMSwxLDMsMSwxLDEsMSwxLDEsMywxLDEsMSwxMiwxLDUsMSwy"
            + "LDEsMiwxLDQsMSwzLDEsMSwxLDQsMSwyLDEsMSwxLDEsMSwxLDEsMSwxLDIsMSwxLDEsMSwyLDEsMiwxLDMsMSwyLDEsMiwxLDEsMSw4LDEsNiwxLDMsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOH0NCiAgICAoZm9ybWF0aW9uIDMpDQogICAgICAgIFtnb2VpIDFdDQogICAgICAgICAgICB7LTI1LDI1MH0NCiAgICAgICAgICAgIHsxNTIsNzh9DQogICAgICAgICAgICB7UixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIs"
            + "VSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVMLFUsVUwsVSxVTCxVLFVMLEwsVUwsTCxVTCxMLERMLEwsREwsTCxETCxELERMLEQsREwsRCxEUixELERSLEQsRFIsRCxEUixSLERSLFIsVVIsUixVUixSLFVSLFUsVVIsVSxVUixVfQ0KICAgICAgICAgICAgezI1LDEsMywxLDEsMSwzLDEsMSwxLDEsMSwxLDMsMSwxLDEsMTIsMSw1LDEsMiwxLDIsMSw0LDEsMywxLDEsMSw0LDEsMiwxLDEsMSwxLDEsMSwxLDEsMSwyLDEsMSwxLDEsMiwxLDIsMSwzLDEsMiwxLDIsMSwxLDEsOCwxLDYsMSwzLDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDh9DQogICAgICAgIFtnb2Vp"
            + "IDJdDQogICAgICAgICAgICB7LTQ1LDI1MH0NCiAgICAgICAgICAgIHsxNTIsNjV9DQogICAgICAgICAgICB7UixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVMLFUsVUwsVSxVTCxVLFVMLEwsVUwsTCxVTCxMLERMLEwsREwsTCxETCxELERMLEQsREwsRCxEUixELERSLEQsRFIsRCxEUixSLERSLFIsVVIsUixVUixSLFVSLFUsVVIsVSxVUixVfQ0KICAgICAgICAgICAgezQ1LDEsMywxLDEsMSwzLDEsMSwxLDEsMSwxLDMsMSwxLDEsMTIsMSw1LDEs"
            + "MiwxLDIsMSw0LDEsMywxLDEsMSw0LDEsMiwxLDEsMSwxLDEsMSwxLDEsMSwyLDEsMSwxLDEsMiwxLDIsMSwzLDEsMiwxLDIsMSwxLDEsOCwxLDYsMSwzLDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDh9DQogICAgICAgIFtnb2VpIDNdDQogICAgICAgICAgICB7LTY1LDI1MH0NCiAgICAgICAgICAgIHsxNjgsNzh9DQogICAgICAgICAgICB7UixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxV"
            + "UixVLFVSLFUsVVIsVSxVUixVLFVMLFUsVUwsVSxVTCxVLFVMLEwsVUwsTCxVTCxMLERMLEwsREwsTCxETCxELERMLEQsREwsRCxEUixELERSLEQsRFIsRCxEUixSLERSLFIsVVIsUixVUixSLFVSLFUsVVIsVSxVUixVfQ0KICAgICAgICAgICAgezY1LDEsMywxLDEsMSwzLDEsMSwxLDEsMSwxLDMsMSwxLDEsMTIsMSw1LDEsMiwxLDIsMSw0LDEsMywxLDEsMSw0LDEsMiwxLDEsMSwxLDEsMSwxLDEsMSwyLDEsMSwxLDEsMiwxLDIsMSwzLDEsMiwxLDIsMSwxLDEsOCwxLDYsMSwzLDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDh9DQogICAgICAgIFtnb2VpIDRdDQogICAgICAgICAgICB7"
            + "LTg1LDI1MH0NCiAgICAgICAgICAgIHsxNjgsNjV9DQogICAgICAgICAgICB7UixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVSLFUsVVIsVSxVUixVLFVMLFUsVUwsVSxVTCxVLFVMLEwsVUwsTCxVTCxMLERMLEwsREwsTCxETCxELERMLEQsREwsRCxEUixELERSLEQsRFIsRCxEUixSLERSLFIsVVIsUixVUixSLFVSLFUsVVIsVSxVUixVfQ0KICAgICAgICAgICAgezg1LDEsMywxLDEsMSwzLDEsMSwxLDEsMSwxLDMsMSwxLDEsMTIsMSw1LDEsMiwxLDIsMSw0LDEsMywxLDEs"
            + "MSw0LDEsMiwxLDEsMSwxLDEsMSwxLDEsMSwyLDEsMSwxLDEsMiwxLDIsMSwzLDEsMiwxLDIsMSwxLDEsOCwxLDYsMSwzLDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDh9DQogICAgICAgIFtnb2VpIDVdDQogICAgICAgICAgICB7MjQ5LDI1MH0NCiAgICAgICAgICAgIHs3Miw3OH0NCiAgICAgICAgICAgIHtMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUs"
            + "VVIsVSxVUixVLFVSLFUsVVIsUixVUixSLFVSLFIsRFIsUixEUixSLERSLEQsRFIsRCxEUixELERMLEQsREwsRCxETCxELERMLEwsREwsTCxVTCxMLFVMLEwsVUwsVSxVTCxVLFVMLFV9DQogICAgICAgICAgICB7MjUsMSwzLDEsMSwxLDMsMSwxLDEsMSwxLDEsMywxLDEsMSwxMiwxLDUsMSwyLDEsMiwxLDQsMSwzLDEsMSwxLDQsMSwyLDEsMSwxLDEsMSwxLDEsMSwxLDIsMSwxLDEsMSwyLDEsMiwxLDMsMSwyLDEsMiwxLDEsMSw4LDEsNiwxLDMsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOH0NCiAgICAgICAgW2dvZWkgNl0NCiAgICAgICAgICAgIHsyNjksMjUwfQ0KICAgICAgICAg"
            + "ICAgezcyLDY1fQ0KICAgICAgICAgICAge0wsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVUixVLFVSLFUsVVIsVSxVUixSLFVSLFIsVVIsUixEUixSLERSLFIsRFIsRCxEUixELERSLEQsREwsRCxETCxELERMLEQsREwsTCxETCxMLFVMLEwsVUwsTCxVTCxVLFVMLFUsVUwsVX0NCiAgICAgICAgICAgIHs0NSwxLDMsMSwxLDEsMywxLDEsMSwxLDEsMSwzLDEsMSwxLDEyLDEsNSwxLDIsMSwyLDEsNCwxLDMsMSwxLDEsNCwxLDIsMSwxLDEsMSwxLDEs"
            + "MSwxLDEsMiwxLDEsMSwxLDIsMSwyLDEsMywxLDIsMSwyLDEsMSwxLDgsMSw2LDEsMywxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4fQ0KICAgICAgICBbZ29laSA3XQ0KICAgICAgICAgICAgezI4OSwyNTB9DQogICAgICAgICAgICB7NTYsNzh9DQogICAgICAgICAgICB7TCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVSLFUsVVIsVSxVUixVLFVSLFIs"
            + "VVIsUixVUixSLERSLFIsRFIsUixEUixELERSLEQsRFIsRCxETCxELERMLEQsREwsRCxETCxMLERMLEwsVUwsTCxVTCxMLFVMLFUsVUwsVSxVTCxVfQ0KICAgICAgICAgICAgezY1LDEsMywxLDEsMSwzLDEsMSwxLDEsMSwxLDMsMSwxLDEsMTIsMSw1LDEsMiwxLDIsMSw0LDEsMywxLDEsMSw0LDEsMiwxLDEsMSwxLDEsMSwxLDEsMSwyLDEsMSwxLDEsMiwxLDIsMSwzLDEsMiwxLDIsMSwxLDEsOCwxLDYsMSwzLDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDh9DQogICAgICAgIFtnb2VpIDhdDQogICAgICAgICAgICB7MzA5LDI1MH0NCiAgICAgICAgICAgIHs1Niw2NX0NCiAgICAgICAg"
            + "ICAgIHtMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVUwsVSxVTCxVLFVMLFUsVVIsVSxVUixVLFVSLFUsVVIsUixVUixSLFVSLFIsRFIsUixEUixSLERSLEQsRFIsRCxEUixELERMLEQsREwsRCxETCxELERMLEwsREwsTCxVTCxMLFVMLEwsVUwsVSxVTCxVLFVMLFV9DQogICAgICAgICAgICB7ODUsMSwzLDEsMSwxLDMsMSwxLDEsMSwxLDEsMywxLDEsMSwxMiwxLDUsMSwyLDEsMiwxLDQsMSwzLDEsMSwxLDQsMSwyLDEsMSwxLDEsMSwxLDEsMSwxLDIsMSwxLDEsMSwyLDEs"
            + "MiwxLDMsMSwyLDEsMiwxLDEsMSw4LDEsNiwxLDMsMSwyLDEsMSw3LDEsMSwyLDEsOCwxLDIsMSwxLDcsMSwxLDIsMSw4LDEsMiwxLDEsNywxLDEsMiwxLDgsMSwyLDEsMSw3LDEsMSwyLDEsOH0NCiAgICAoZm9ybWF0aW9uIDQpDQogICAgICAgIFt6YWtvIDFdDQogICAgICAgICAgICB7MTM2LC0yMH0NCiAgICAgICAgICAgIHsxMzYsMTA0fQ0KICAgICAgICAgICAge0QsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxEUixELERSLEQsRFIsRCxEUixELERSLFIsRFIsUixEUixSLERSLFIsRFIsUixVUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFUsUixVfQ0KICAgICAgICAgICAgezIwLDcs"
            + "MSwzLDEsMiwxLDEsMSwzLDEsMywxLDMsMiwzLDEsMSw4MCwxLDMsMSwxLDEsMSwxLDIsMSwyLDIsMSwxMSwxLDIsMiwxLDEsMSwxLDEsMSwxLDQsMiwyLDMsMSwyLDEsMTMsMSwzLDEsMiwxLDIsMiwxLDMsMiwxLDN9DQogICAgICAgIFt6YWtvIDJdDQogICAgICAgICAgICB7MTM2LC00MH0NCiAgICAgICAgICAgIHsxNTIsMTA0fQ0KICAgICAgICAgICAge0QsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxEUixELERSLEQsRFIsRCxEUixELERSLFIsRFIsUixEUixSLERSLFIsRFIsUixVUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFUsUixVfQ0KICAgICAgICAgICAgezQwLDcsMSwzLDEs"
            + "MiwxLDEsMSwzLDEsMywxLDMsMiwzLDEsMSw4MCwxLDMsMSwxLDEsMSwxLDIsMSwyLDIsMSwxMSwxLDIsMiwxLDEsMSwxLDEsMSwxLDQsMiwyLDMsMSwyLDEsMTMsMSwzLDEsMiwxLDIsMiwxLDMsMiwxLDN9DQogICAgICAgIFt6YWtvIDNdDQogICAgICAgICAgICB7MTM2LC02MH0NCiAgICAgICAgICAgIHsxMzYsOTF9DQogICAgICAgICAgICB7RCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERSLEQsRFIsRCxEUixELERSLEQsRFIsUixEUixSLERSLFIsRFIsUixEUixSLFVSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsVSxSLFV9DQogICAgICAgICAgICB7NjAsNywxLDMsMSwyLDEsMSwx"
            + "LDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAgICAgICAgW3pha28gNF0NCiAgICAgICAgICAgIHsxMzYsLTgwfQ0KICAgICAgICAgICAgezE1Miw5MX0NCiAgICAgICAgICAgIHtELEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixSLERSLFIsRFIsUixEUixSLERSLFIsVVIsVVIsUixVUixSLFVSLFIsVVIsUixVUixVLFIsVX0NCiAgICAgICAgICAgIHs4MCw3LDEsMywxLDIsMSwxLDEsMywxLDMs"
            + "MSwzLDIsMywxLDEsODAsMSwzLDEsMSwxLDEsMSwyLDEsMiwyLDEsMTEsMSwyLDIsMSwxLDEsMSwxLDEsMSw0LDIsMiwzLDEsMiwxLDEzLDEsMywxLDIsMSwyLDIsMSwzLDIsMSwzfQ0KICAgICAgICBbemFrbyA1XQ0KICAgICAgICAgICAgezg4LC0yMH0NCiAgICAgICAgICAgIHs4OCwxMDR9DQogICAgICAgICAgICB7RCxELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERMLEQsREwsRCxETCxELERMLEQsREwsTCxETCxMLERMLEwsREwsTCxETCxMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxVLEwsVX0NCiAgICAgICAgICAgIHsyMCw3LDEsMywxLDIsMSwxLDEsMywxLDMsMSwzLDIsMywx"
            + "LDEsODAsMSwzLDEsMSwxLDEsMSwyLDEsMiwyLDEsMTEsMSwyLDIsMSwxLDEsMSwxLDEsMSw0LDIsMiwzLDEsMiwxLDEzLDEsMywxLDIsMSwyLDIsMSwzLDIsMSwzfQ0KICAgICAgICBbemFrbyA2XQ0KICAgICAgICAgICAgezg4LC00MH0NCiAgICAgICAgICAgIHs3MiwxMDR9DQogICAgICAgICAgICB7RCxELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERMLEQsREwsRCxETCxELERMLEQsREwsTCxETCxMLERMLEwsREwsTCxETCxMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxVLEwsVX0NCiAgICAgICAgICAgIHs0MCw3LDEsMywxLDIsMSwxLDEsMywxLDMsMSwzLDIsMywxLDEsODAsMSwz"
            + "LDEsMSwxLDEsMSwyLDEsMiwyLDEsMTEsMSwyLDIsMSwxLDEsMSwxLDEsMSw0LDIsMiwzLDEsMiwxLDEzLDEsMywxLDIsMSwyLDIsMSwzLDIsMSwzfQ0KICAgICAgICBbemFrbyA3XQ0KICAgICAgICAgICAgezg4LC02MH0NCiAgICAgICAgICAgIHs4OCw5MX0NCiAgICAgICAgICAgIHtELEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsREwsRCxETCxELERMLEQsREwsRCxETCxMLERMLEwsREwsTCxETCxMLERMLEwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLFUsTCxVfQ0KICAgICAgICAgICAgezYwLDcsMSwzLDEsMiwxLDEsMSwzLDEsMywxLDMsMiwzLDEsMSw4MCwxLDMsMSwxLDEsMSwx"
            + "LDIsMSwyLDIsMSwxMSwxLDIsMiwxLDEsMSwxLDEsMSwxLDQsMiwyLDMsMSwyLDEsMTMsMSwzLDEsMiwxLDIsMiwxLDMsMiwxLDN9DQogICAgICAgIFt6YWtvIDhdDQogICAgICAgICAgICB7ODgsLTgwfQ0KICAgICAgICAgICAgezcyLDkxfQ0KICAgICAgICAgICAge0QsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxETCxELERMLEQsREwsRCxETCxELERMLEwsREwsTCxETCxMLERMLEwsREwsTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsVSxMLFV9DQogICAgICAgICAgICB7ODAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwx"
            + "LDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAgICAoZm9ybWF0aW9uIDUpDQogICAgICAgIFt6YWtvIDFdDQogICAgICAgICAgICB7MTM2LC0yMH0NCiAgICAgICAgICAgIHsxNjgsMTA0fQ0KICAgICAgICAgICAge0QsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxEUixELERSLEQsRFIsRCxEUixELERSLFIsRFIsUixEUixSLERSLFIsRFIsUixVUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFUsUixVfQ0KICAgICAgICAgICAgezIwLDcsMSwzLDEsMiwxLDEsMSwzLDEsMywxLDMsMiwzLDEsMSw4MCwxLDMsMSwxLDEs"
            + "MSwxLDIsMSwyLDIsMSwxMSwxLDIsMiwxLDEsMSwxLDEsMSwxLDQsMiwyLDMsMSwyLDEsMTMsMSwzLDEsMiwxLDIsMiwxLDMsMiwxLDN9DQogICAgICAgIFt6YWtvIDJdDQogICAgICAgICAgICB7MTM2LC00MH0NCiAgICAgICAgICAgIHsxODQsMTA0fQ0KICAgICAgICAgICAge0QsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxEUixELERSLEQsRFIsRCxEUixELERSLFIsRFIsUixEUixSLERSLFIsRFIsUixVUixVUixSLFVSLFIsVVIsUixVUixSLFVSLFUsUixVfQ0KICAgICAgICAgICAgezQwLDcsMSwzLDEsMiwxLDEsMSwzLDEsMywxLDMsMiwzLDEsMSw4MCwxLDMsMSwxLDEsMSwxLDIs"
            + "MSwyLDIsMSwxMSwxLDIsMiwxLDEsMSwxLDEsMSwxLDQsMiwyLDMsMSwyLDEsMTMsMSwzLDEsMiwxLDIsMiwxLDMsMiwxLDN9DQogICAgICAgIFt6YWtvIDNdDQogICAgICAgICAgICB7MTM2LC02MH0NCiAgICAgICAgICAgIHsxNjgsOTF9DQogICAgICAgICAgICB7RCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERSLEQsRFIsRCxEUixELERSLEQsRFIsUixEUixSLERSLFIsRFIsUixEUixSLFVSLFVSLFIsVVIsUixVUixSLFVSLFIsVVIsVSxSLFV9DQogICAgICAgICAgICB7NjAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwx"
            + "LDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMsMSwyLDEsMiwyLDEsMywyLDEsM30NCiAgICAgICAgW3pha28gNF0NCiAgICAgICAgICAgIHsxMzYsLTgwfQ0KICAgICAgICAgICAgezE4NCw5MX0NCiAgICAgICAgICAgIHtELEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsREwsRCxETCxELERMLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixSLERSLFIsRFIsUixEUixSLERSLFIsVVIsVVIsUixVUixSLFVSLFIsVVIsUixVUixVLFIsVX0NCiAgICAgICAgICAgIHs4MCw3LDEsMywxLDIsMSwxLDEsMywxLDMsMSwzLDIsMywxLDEsODAsMSwzLDEsMSwxLDEsMSwyLDEsMiwyLDEsMTEsMSwy"
            + "LDIsMSwxLDEsMSwxLDEsMSw0LDIsMiwzLDEsMiwxLDEzLDEsMywxLDIsMSwyLDIsMSwzLDIsMSwzfQ0KICAgICAgICBbemFrbyA1XQ0KICAgICAgICAgICAgezg4LC0yMH0NCiAgICAgICAgICAgIHs1NiwxMDR9DQogICAgICAgICAgICB7RCxELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERMLEQsREwsRCxETCxELERMLEQsREwsTCxETCxMLERMLEwsREwsTCxETCxMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxVLEwsVX0NCiAgICAgICAgICAgIHsyMCw3LDEsMywxLDIsMSwxLDEsMywxLDMsMSwzLDIsMywxLDEsODAsMSwzLDEsMSwxLDEsMSwyLDEsMiwyLDEsMTEsMSwyLDIsMSwxLDEs"
            + "MSwxLDEsMSw0LDIsMiwzLDEsMiwxLDEzLDEsMywxLDIsMSwyLDIsMSwzLDIsMSwzfQ0KICAgICAgICBbemFrbyA2XQ0KICAgICAgICAgICAgezg4LC00MH0NCiAgICAgICAgICAgIHs0MCwxMDR9DQogICAgICAgICAgICB7RCxELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERMLEQsREwsRCxETCxELERMLEQsREwsTCxETCxMLERMLEwsREwsTCxETCxMLEwsVUwsTCxVTCxMLFVMLEwsVUwsTCxVTCxVLEwsVX0NCiAgICAgICAgICAgIHs0MCw3LDEsMywxLDIsMSwxLDEsMywxLDMsMSwzLDIsMywxLDEsODAsMSwzLDEsMSwxLDEsMSwyLDEsMiwyLDEsMTEsMSwyLDIsMSwxLDEsMSwxLDEsMSw0"
            + "LDIsMiwzLDEsMiwxLDEzLDEsMywxLDIsMSwyLDIsMSwzLDIsMSwzfQ0KICAgICAgICBbemFrbyA3XQ0KICAgICAgICAgICAgezg4LC02MH0NCiAgICAgICAgICAgIHs1Niw5MX0NCiAgICAgICAgICAgIHtELEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsREwsRCxETCxELERMLEQsREwsRCxETCxMLERMLEwsREwsTCxETCxMLERMLEwsTCxVTCxMLFVMLEwsVUwsTCxVTCxMLFVMLFUsTCxVfQ0KICAgICAgICAgICAgezYwLDcsMSwzLDEsMiwxLDEsMSwzLDEsMywxLDMsMiwzLDEsMSw4MCwxLDMsMSwxLDEsMSwxLDIsMSwyLDIsMSwxMSwxLDIsMiwxLDEsMSwxLDEsMSwxLDQsMiwyLDMsMSwy"
            + "LDEsMTMsMSwzLDEsMiwxLDIsMiwxLDMsMiwxLDN9DQogICAgICAgIFt6YWtvIDhdDQogICAgICAgICAgICB7ODgsLTgwfQ0KICAgICAgICAgICAgezQwLDkxfQ0KICAgICAgICAgICAge0QsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxEUixELERSLEQsRFIsRCxETCxELERMLEQsREwsRCxETCxELERMLEwsREwsTCxETCxMLERMLEwsREwsTCxMLFVMLEwsVUwsTCxVTCxMLFVMLEwsVUwsVSxMLFV9DQogICAgICAgICAgICB7ODAsNywxLDMsMSwyLDEsMSwxLDMsMSwzLDEsMywyLDMsMSwxLDgwLDEsMywxLDEsMSwxLDEsMiwxLDIsMiwxLDExLDEsMiwyLDEsMSwxLDEsMSwxLDEsNCwyLDIsMywxLDIsMSwxMywxLDMs"
            + "MSwyLDEsMiwyLDEsMywyLDEsM30gDQohDQp8U3RhZ2UgQ2FsbGVuZ2luZ3wNCiAgICAoZm9ybWF0aW9uIDEpDQogICAgICAgIFthbGllbiAxXQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgW2FsaWVuIDJdDQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICBbYWxpZW4gM10NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgIFthbGllbiA0XQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAg"
            + "ICAgICAgICAge30NCiAgICAgICAgW2FsaWVuIDVdDQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICBbYWxpZW4gNl0NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgIFthbGllbiA3XQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgW2FsaWVuIDhdDQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgIChmb3JtYXRpb24gMikNCiAgICAgICAgW2FsaWVuIDFdDQog"
            + "ICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICBbYWxpZW4gMl0NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgIFthbGllbiAzXQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgW2FsaWVuIDRdDQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICBbYWxpZW4gNV0NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAg"
            + "ICAgICAgIHt9DQogICAgICAgIFthbGllbiA2XQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgW2FsaWVuIDddDQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICBbYWxpZW4gOF0NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgKGZvcm1hdGlvbiAzKQ0KICAgICAgICBbYWxpZW4gMV0NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgIFthbGllbiAyXQ0KICAg"
            + "ICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgW2FsaWVuIDNdDQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICBbYWxpZW4gNF0NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgIFthbGllbiA1XQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgW2FsaWVuIDZdDQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAg"
            + "ICAgICB7fQ0KICAgICAgICBbYWxpZW4gN10NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgIFthbGllbiA4XQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAoZm9ybWF0aW9uIDQpDQogICAgICAgIFthbGllbiAxXQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgW2FsaWVuIDJdDQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICBbYWxpZW4gM10NCiAgICAg"
            + "ICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgIFthbGllbiA0XQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgW2FsaWVuIDVdDQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICBbYWxpZW4gNl0NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgIFthbGllbiA3XQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAg"
            + "ICAge30NCiAgICAgICAgW2FsaWVuIDhdDQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgIChmb3JtYXRpb24gNSkNCiAgICAgICAgW2FsaWVuIDFdDQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICBbYWxpZW4gMl0NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgIFthbGllbiAzXQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgW2FsaWVuIDRdDQogICAgICAg"
            + "ICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICBbYWxpZW4gNV0NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgIFthbGllbiA2XQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgW2FsaWVuIDddDQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICBbYWxpZW4gOF0NCiAgICAgICAgICAgIHt9DQogICAgICAgICAgICB7fQ0KICAgICAgICAgICAge30NCiAgICAgICAgICAg"
            + "IHt9DQoh"
        };
    $data = jl_ClassLoader_resources[$rt_ustr($name)];
    $dataString = $rt_str(jl_ClassLoader_resourceToString$js_body$_6($data));
    if ($dataString === null)
        return null;
    $bytes = $rt_createByteArray($dataString.$length());
    $i = 0;
    while (true) {
        var$6 = $bytes.data;
        if ($i >= var$6.length)
            break;
        var$6[$i] = $dataString.$charAt($i) << 24 >> 24;
        $i = $i + 1 | 0;
    }
    return ji_ByteArrayInputStream__init_1(otci_Base64Impl_decode1($bytes));
},
jl_ClassLoader__clinit_ = () => {
    jl_ClassLoader_systemClassLoader = jl_SystemClassLoader__init_0();
},
jl_ClassLoader_resourceToString$js_body$_6 = var$1 => {
    return var$1 !== null && var$1 !== void 0 ? var$1 : null;
},
ju_ConcurrentModificationException = $rt_classWithoutFields(jl_RuntimeException),
ju_ConcurrentModificationException__init_0 = $this => {
    jl_RuntimeException__init_($this);
},
ju_ConcurrentModificationException__init_ = () => {
    let var_0 = new ju_ConcurrentModificationException();
    ju_ConcurrentModificationException__init_0(var_0);
    return var_0;
};
function jur_CompositeRangeSet() {
    let a = this; jur_JointSet.call(a);
    a.$withoutSurrogates = null;
    a.$withSurrogates = null;
}
let jur_CompositeRangeSet__init_0 = ($this, $withoutSurrogates, $withSurrogates) => {
    jur_JointSet__init_($this);
    $this.$withoutSurrogates = $withoutSurrogates;
    $this.$withSurrogates = $withSurrogates;
},
jur_CompositeRangeSet__init_ = (var_0, var_1) => {
    let var_2 = new jur_CompositeRangeSet();
    jur_CompositeRangeSet__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_CompositeRangeSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $shift;
    $shift = $this.$withoutSurrogates.$matches($stringIndex, $testString, $matchResult);
    if ($shift < 0)
        $shift = $this.$withSurrogates.$matches($stringIndex, $testString, $matchResult);
    if ($shift >= 0)
        return $shift;
    return (-1);
},
jur_CompositeRangeSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
    $this.$withSurrogates.$setNext($next);
    $this.$withoutSurrogates.$setNext($next);
},
jur_CompositeRangeSet_getName = $this => {
    let var$1, var$2, var$3;
    var$1 = jl_String_valueOf($this.$withoutSurrogates);
    var$2 = jl_String_valueOf($this.$withSurrogates);
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(319)), var$1), $rt_s(320)), var$2);
    return jl_StringBuilder_toString(var$3);
},
jur_CompositeRangeSet_hasConsumed = ($this, $matchResult) => {
    return 1;
},
jur_CompositeRangeSet_first = ($this, $set) => {
    return 1;
};
function me_Player() {
    let a = this; me_Entity.call(a);
    a.$isPlayerMovingRight = 0;
    a.$isPlayerMovingLeft = 0;
}
let me_Player__init_ = ($this, $bounds) => {
    let var$2, var$3;
    s_Entities_$callClinit();
    var$2 = s_Entities_getWidth(s_Entities_PLAYER);
    var$3 = s_Entities_getHeight(s_Entities_PLAYER);
    s_RotationDirection_$callClinit();
    me_Entity__init_($this, 105, 255, var$2, var$3, 2, $bounds, s_RotationDirection_U);
    $this.$entityName = s_Entities_PLAYER;
},
me_Player__init_0 = var_0 => {
    let var_1 = new me_Player();
    me_Player__init_(var_1, var_0);
    return var_1;
},
me_Player_update = ($this, $frameNumber) => {
    if ($this.$isPlayerMovingRight)
        $this.$x1 = $this.$x1 + $this.$speed | 0;
    if ($this.$isPlayerMovingLeft)
        $this.$x1 = $this.$x1 - $this.$speed | 0;
    $this.$fixCoordIfPlayerOutOfBounds();
},
me_Player_fixCoordIfPlayerOutOfBounds = $this => {
    if (($this.$x1 - 2 | 0) < 0)
        $this.$x1 = 2;
    if ((($this.$x1 + $this.$width0 | 0) + 2 | 0) > md_WorldBounds_width($this.$bounds))
        $this.$x1 = (md_WorldBounds_width($this.$bounds) - $this.$width0 | 0) - 2 | 0;
},
me_Player_setPlayerMovingRight = ($this, $moving) => {
    $this.$isPlayerMovingRight = $moving.$booleanValue();
},
me_Player_setPlayerMovingLeft = ($this, $moving) => {
    $this.$isPlayerMovingLeft = $moving.$booleanValue();
},
s_GameState = $rt_classWithoutFields(jl_Enum),
s_GameState_INITIAL_SCREEN = null,
s_GameState_COIN_INSERTED = null,
s_GameState_LOADING_FIRST_STAGE = null,
s_GameState_PLAYING = null,
s_GameState_LIFE_LOST = null,
s_GameState_LOADING_NOT_FIRST_STAGE = null,
s_GameState_GAME_OVER = null,
s_GameState_$VALUES = null,
s_GameState_$callClinit = () => {
    s_GameState_$callClinit = $rt_eraseClinit(s_GameState);
    s_GameState__clinit_();
},
s_GameState_values = () => {
    s_GameState_$callClinit();
    return s_GameState_$VALUES.$clone0();
},
s_GameState__init_0 = ($this, var$1, var$2) => {
    s_GameState_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
},
s_GameState__init_ = (var_0, var_1) => {
    let var_2 = new s_GameState();
    s_GameState__init_0(var_2, var_0, var_1);
    return var_2;
},
s_GameState_$values = () => {
    let var$1, var$2;
    s_GameState_$callClinit();
    var$1 = $rt_createArray(s_GameState, 7);
    var$2 = var$1.data;
    var$2[0] = s_GameState_INITIAL_SCREEN;
    var$2[1] = s_GameState_COIN_INSERTED;
    var$2[2] = s_GameState_LOADING_FIRST_STAGE;
    var$2[3] = s_GameState_PLAYING;
    var$2[4] = s_GameState_LIFE_LOST;
    var$2[5] = s_GameState_LOADING_NOT_FIRST_STAGE;
    var$2[6] = s_GameState_GAME_OVER;
    return var$1;
},
s_GameState__clinit_ = () => {
    s_GameState_INITIAL_SCREEN = s_GameState__init_($rt_s(321), 0);
    s_GameState_COIN_INSERTED = s_GameState__init_($rt_s(322), 1);
    s_GameState_LOADING_FIRST_STAGE = s_GameState__init_($rt_s(323), 2);
    s_GameState_PLAYING = s_GameState__init_($rt_s(324), 3);
    s_GameState_LIFE_LOST = s_GameState__init_($rt_s(325), 4);
    s_GameState_LOADING_NOT_FIRST_STAGE = s_GameState__init_($rt_s(326), 5);
    s_GameState_GAME_OVER = s_GameState__init_($rt_s(327), 6);
    s_GameState_$VALUES = s_GameState_$values();
},
jur_FinalSet = $rt_classWithoutFields(jur_FSet),
jur_FinalSet__init_ = $this => {
    jur_FSet__init_($this, 0);
},
jur_FinalSet__init_0 = () => {
    let var_0 = new jur_FinalSet();
    jur_FinalSet__init_(var_0);
    return var_0;
},
jur_FinalSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    if ($matchResult.$mode() != 1 && $stringIndex != $matchResult.$getRightBound())
        return (-1);
    $matchResult.$setValid();
    $matchResult.$setEnd(0, $stringIndex);
    return $stringIndex;
},
jur_FinalSet_getName = $this => {
    return $rt_s(328);
},
jur_EmptySet = $rt_classWithoutFields(jur_LeafSet),
jur_EmptySet__init_0 = ($this, $next) => {
    jur_LeafSet__init_0($this, $next);
    $this.$charCount0 = 0;
},
jur_EmptySet__init_ = var_0 => {
    let var_1 = new jur_EmptySet();
    jur_EmptySet__init_0(var_1, var_0);
    return var_1;
},
jur_EmptySet_accepts = ($this, $stringIndex, $testString) => {
    return 0;
},
jur_EmptySet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, $startStr, var$6, $low, $high;
    $strLength = $matchResult.$getRightBound();
    $startStr = $matchResult.$getLeftBound();
    while (true) {
        var$6 = $rt_compare($stringIndex, $strLength);
        if (var$6 > 0)
            return (-1);
        if (var$6 < 0) {
            $low = $testString.$charAt($stringIndex);
            if (jl_Character_isLowSurrogate($low) && $stringIndex > $startStr) {
                $high = $testString.$charAt($stringIndex - 1 | 0);
                if (jl_Character_isHighSurrogate($high)) {
                    $stringIndex = $stringIndex + 1 | 0;
                    continue;
                }
            }
        }
        if ($this.$next1.$matches($stringIndex, $testString, $matchResult) >= 0)
            break;
        $stringIndex = $stringIndex + 1 | 0;
    }
    return $stringIndex;
},
jur_EmptySet_findBack = ($this, $stringIndex, $startSearch, $testString, $matchResult) => {
    let $strLength, $startStr, $low, $high;
    $strLength = $matchResult.$getRightBound();
    $startStr = $matchResult.$getLeftBound();
    while (true) {
        if ($startSearch < $stringIndex)
            return (-1);
        if ($startSearch < $strLength) {
            $low = $testString.$charAt($startSearch);
            if (jl_Character_isLowSurrogate($low) && $startSearch > $startStr) {
                $high = $testString.$charAt($startSearch - 1 | 0);
                if (jl_Character_isHighSurrogate($high)) {
                    $startSearch = $startSearch + (-1) | 0;
                    continue;
                }
            }
        }
        if ($this.$next1.$matches($startSearch, $testString, $matchResult) >= 0)
            break;
        $startSearch = $startSearch + (-1) | 0;
    }
    return $startSearch;
},
jur_EmptySet_getName = $this => {
    return $rt_s(329);
},
jur_EmptySet_hasConsumed = ($this, $mr) => {
    return 0;
};
function v_WebBackgroundPainter$2() {
    jl_Object.call(this);
    this.$val$framePath = null;
}
let v_WebBackgroundPainter$2__init_ = ($this, var$1) => {
    $this.$val$framePath = var$1;
    jl_Object__init_($this);
},
v_WebBackgroundPainter$2__init_0 = var_0 => {
    let var_1 = new v_WebBackgroundPainter$2();
    v_WebBackgroundPainter$2__init_(var_1, var_0);
    return var_1;
},
v_WebBackgroundPainter$2_handleEvent = ($this, $e) => {
    v_WebBackgroundPainter_onFrameLoadError($this.$val$framePath);
},
v_WebBackgroundPainter$2_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
};
function s_RotationDirection() {
    jl_Enum.call(this);
    this.$angle = 0.0;
}
let s_RotationDirection_U = null,
s_RotationDirection_UUUR = null,
s_RotationDirection_UUR = null,
s_RotationDirection_UR = null,
s_RotationDirection_URR = null,
s_RotationDirection_URRR = null,
s_RotationDirection_R = null,
s_RotationDirection_DRRR = null,
s_RotationDirection_DRR = null,
s_RotationDirection_DR = null,
s_RotationDirection_DDR = null,
s_RotationDirection_DDDR = null,
s_RotationDirection_D = null,
s_RotationDirection_DDDL = null,
s_RotationDirection_DDL = null,
s_RotationDirection_DL = null,
s_RotationDirection_DLL = null,
s_RotationDirection_DLLL = null,
s_RotationDirection_L = null,
s_RotationDirection_ULLL = null,
s_RotationDirection_ULL = null,
s_RotationDirection_UL = null,
s_RotationDirection_UUL = null,
s_RotationDirection_UUUL = null,
s_RotationDirection_$VALUES = null,
s_RotationDirection_$callClinit = () => {
    s_RotationDirection_$callClinit = $rt_eraseClinit(s_RotationDirection);
    s_RotationDirection__clinit_();
},
s_RotationDirection_values = () => {
    s_RotationDirection_$callClinit();
    return s_RotationDirection_$VALUES.$clone0();
},
s_RotationDirection__init_0 = ($this, var$1, var$2, $angle) => {
    s_RotationDirection_$callClinit();
    jl_Enum__init_($this, var$1, var$2);
    $this.$angle = $angle;
},
s_RotationDirection__init_ = (var_0, var_1, var_2) => {
    let var_3 = new s_RotationDirection();
    s_RotationDirection__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
s_RotationDirection_getAngle = $this => {
    return $this.$angle | 0;
},
s_RotationDirection_fromAngle = $inputAngle => {
    let $normalizedAngle, $closest, $minDifference, var$5, var$6, var$7, $dir, $diff;
    s_RotationDirection_$callClinit();
    $normalizedAngle = ($inputAngle % 360.0 + 360.0) % 360.0;
    $closest = s_RotationDirection_U;
    $minDifference = 1.7976931348623157E308;
    var$5 = (s_RotationDirection_values()).data;
    var$6 = var$5.length;
    var$7 = 0;
    while (var$7 < var$6) {
        $dir = var$5[var$7];
        $diff = jl_Math_abs0($normalizedAngle - $dir.$angle);
        if ($diff > 180.0)
            $diff = 360.0 - $diff;
        if ($diff < $minDifference) {
            $minDifference = $diff;
            $closest = $dir;
        }
        var$7 = var$7 + 1 | 0;
    }
    return $closest;
},
s_RotationDirection_$values = () => {
    let var$1, var$2;
    s_RotationDirection_$callClinit();
    var$1 = $rt_createArray(s_RotationDirection, 24);
    var$2 = var$1.data;
    var$2[0] = s_RotationDirection_U;
    var$2[1] = s_RotationDirection_UUUR;
    var$2[2] = s_RotationDirection_UUR;
    var$2[3] = s_RotationDirection_UR;
    var$2[4] = s_RotationDirection_URR;
    var$2[5] = s_RotationDirection_URRR;
    var$2[6] = s_RotationDirection_R;
    var$2[7] = s_RotationDirection_DRRR;
    var$2[8] = s_RotationDirection_DRR;
    var$2[9] = s_RotationDirection_DR;
    var$2[10] = s_RotationDirection_DDR;
    var$2[11] = s_RotationDirection_DDDR;
    var$2[12] = s_RotationDirection_D;
    var$2[13] = s_RotationDirection_DDDL;
    var$2[14] = s_RotationDirection_DDL;
    var$2[15] = s_RotationDirection_DL;
    var$2[16] = s_RotationDirection_DLL;
    var$2[17] = s_RotationDirection_DLLL;
    var$2[18] = s_RotationDirection_L;
    var$2[19] = s_RotationDirection_ULLL;
    var$2[20] = s_RotationDirection_ULL;
    var$2[21] = s_RotationDirection_UL;
    var$2[22] = s_RotationDirection_UUL;
    var$2[23] = s_RotationDirection_UUUL;
    return var$1;
},
s_RotationDirection__clinit_ = () => {
    s_RotationDirection_U = s_RotationDirection__init_($rt_s(280), 0, 0.0);
    s_RotationDirection_UUUR = s_RotationDirection__init_($rt_s(330), 1, 15.0);
    s_RotationDirection_UUR = s_RotationDirection__init_($rt_s(331), 2, 30.0);
    s_RotationDirection_UR = s_RotationDirection__init_($rt_s(285), 3, 45.0);
    s_RotationDirection_URR = s_RotationDirection__init_($rt_s(332), 4, 60.0);
    s_RotationDirection_URRR = s_RotationDirection__init_($rt_s(333), 5, 75.0);
    s_RotationDirection_R = s_RotationDirection__init_($rt_s(282), 6, 90.0);
    s_RotationDirection_DRRR = s_RotationDirection__init_($rt_s(334), 7, 105.0);
    s_RotationDirection_DRR = s_RotationDirection__init_($rt_s(335), 8, 120.0);
    s_RotationDirection_DR = s_RotationDirection__init_($rt_s(283), 9, 135.0);
    s_RotationDirection_DDR = s_RotationDirection__init_($rt_s(336), 10, 150.0);
    s_RotationDirection_DDDR = s_RotationDirection__init_($rt_s(337), 11, 165.0);
    s_RotationDirection_D = s_RotationDirection__init_($rt_s(89), 12, 180.0);
    s_RotationDirection_DDDL = s_RotationDirection__init_($rt_s(338), 13, 195.0);
    s_RotationDirection_DDL = s_RotationDirection__init_($rt_s(339), 14, 210.0);
    s_RotationDirection_DL = s_RotationDirection__init_($rt_s(284), 15, 225.0);
    s_RotationDirection_DLL = s_RotationDirection__init_($rt_s(340), 16, 240.0);
    s_RotationDirection_DLLL = s_RotationDirection__init_($rt_s(341), 17, 255.0);
    s_RotationDirection_L = s_RotationDirection__init_($rt_s(281), 18, 270.0);
    s_RotationDirection_ULLL = s_RotationDirection__init_($rt_s(342), 19, 285.0);
    s_RotationDirection_ULL = s_RotationDirection__init_($rt_s(343), 20, 300.0);
    s_RotationDirection_UL = s_RotationDirection__init_($rt_s(286), 21, 315.0);
    s_RotationDirection_UUL = s_RotationDirection__init_($rt_s(344), 22, 330.0);
    s_RotationDirection_UUUL = s_RotationDirection__init_($rt_s(345), 23, 345.0);
    s_RotationDirection_$VALUES = s_RotationDirection_$values();
},
ju_Map$Entry = $rt_classWithoutFields(0);
function ju_MapEntry() {
    let a = this; jl_Object.call(a);
    a.$key = null;
    a.$value = null;
}
let ju_MapEntry__init_ = ($this, $theKey, $theValue) => {
    jl_Object__init_($this);
    $this.$key = $theKey;
    $this.$value = $theValue;
},
ju_MapEntry__init_0 = (var_0, var_1) => {
    let var_2 = new ju_MapEntry();
    ju_MapEntry__init_(var_2, var_0, var_1);
    return var_2;
};
function ju_HashMap$HashEntry() {
    let a = this; ju_MapEntry.call(a);
    a.$origKeyHash = 0;
    a.$next3 = null;
}
let ju_HashMap$HashEntry__init_ = ($this, $theKey, $hash) => {
    ju_MapEntry__init_($this, $theKey, null);
    $this.$origKeyHash = $hash;
},
ju_HashMap$HashEntry__init_0 = (var_0, var_1) => {
    let var_2 = new ju_HashMap$HashEntry();
    ju_HashMap$HashEntry__init_(var_2, var_0, var_1);
    return var_2;
};
function ju_LinkedHashMap$LinkedHashMapEntry() {
    let a = this; ju_HashMap$HashEntry.call(a);
    a.$chainForward = null;
    a.$chainBackward = null;
}
let ju_LinkedHashMap$LinkedHashMapEntry__init_ = ($this, $theKey, $hash) => {
    ju_HashMap$HashEntry__init_($this, $theKey, $hash);
    $this.$chainForward = null;
    $this.$chainBackward = null;
},
ju_LinkedHashMap$LinkedHashMapEntry__init_0 = (var_0, var_1) => {
    let var_2 = new ju_LinkedHashMap$LinkedHashMapEntry();
    ju_LinkedHashMap$LinkedHashMapEntry__init_(var_2, var_0, var_1);
    return var_2;
},
v_WebBackgroundPainter$1 = $rt_classWithoutFields(),
v_WebBackgroundPainter$1__init_ = $this => {
    jl_Object__init_($this);
},
v_WebBackgroundPainter$1__init_0 = () => {
    let var_0 = new v_WebBackgroundPainter$1();
    v_WebBackgroundPainter$1__init_(var_0);
    return var_0;
},
v_WebBackgroundPainter$1_handleEvent = ($this, $e) => {
    v_WebBackgroundPainter_onFrameLoaded();
},
v_WebBackgroundPainter$1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$handleEvent(var$2);
},
jur_AbstractCharClass$LazyASCII = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyASCII__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyASCII__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyASCII();
    jur_AbstractCharClass$LazyASCII__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyASCII_computeValue = $this => {
    return (jur_CharClass__init_()).$add0(0, 127);
};
function ji_InputStreamReader() {
    let a = this; ji_Reader.call(a);
    a.$stream = null;
    a.$decoder = null;
    a.$inData = null;
    a.$inBuffer = null;
    a.$outData = null;
    a.$outBuffer = null;
    a.$streamEof = 0;
    a.$eof0 = 0;
}
let ji_InputStreamReader__init_1 = ($this, $in, $charsetName) => {
    ji_InputStreamReader__init_0($this, $in, ji_InputStreamReader_getCharset($charsetName));
},
ji_InputStreamReader__init_2 = (var_0, var_1) => {
    let var_2 = new ji_InputStreamReader();
    ji_InputStreamReader__init_1(var_2, var_0, var_1);
    return var_2;
},
ji_InputStreamReader__init_0 = ($this, $in, $charset) => {
    let var$3, var$4;
    var$3 = $charset.$newDecoder();
    jnc_CodingErrorAction_$callClinit();
    var$4 = jnc_CodingErrorAction_REPLACE;
    var$4 = jnc_CharsetDecoder_onMalformedInput(var$3, var$4);
    var$3 = jnc_CodingErrorAction_REPLACE;
    var$4 = jnc_CharsetDecoder_onUnmappableCharacter(var$4, var$3);
    ji_InputStreamReader__init_($this, $in, var$4);
},
ji_InputStreamReader__init_3 = (var_0, var_1) => {
    let var_2 = new ji_InputStreamReader();
    ji_InputStreamReader__init_0(var_2, var_0, var_1);
    return var_2;
},
ji_InputStreamReader__init_ = ($this, $in, $decoder) => {
    ji_Reader__init_($this);
    $this.$inData = $rt_createByteArray(8192);
    $this.$inBuffer = jn_ByteBuffer_wrap($this.$inData);
    $this.$outData = $rt_createCharArray(1024);
    $this.$outBuffer = jn_CharBuffer_wrap($this.$outData);
    $this.$stream = $in;
    $this.$decoder = $decoder;
    $this.$outBuffer.$position2(jn_Buffer_limit($this.$outBuffer));
    $this.$inBuffer.$position(jn_Buffer_limit($this.$inBuffer));
},
ji_InputStreamReader__init_4 = (var_0, var_1) => {
    let var_2 = new ji_InputStreamReader();
    ji_InputStreamReader__init_(var_2, var_0, var_1);
    return var_2;
},
ji_InputStreamReader_getCharset = $charsetName => {
    let var$2, $$je;
    a: {
        try {
            var$2 = jnc_Charset_forName($charsetName.$toString());
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof jnc_UnsupportedCharsetException) {
                break a;
            } else {
                throw $$e;
            }
        }
        return var$2;
    }
    $rt_throw(ji_UnsupportedEncodingException__init_0($charsetName));
},
ji_InputStreamReader_close = $this => {
    $this.$stream.$close();
},
ji_InputStreamReader_read = ($this, $cbuf, $off, $len) => {
    let $bytesRead, $sz;
    a: {
        if (jn_Buffer_hasRemaining($this.$outBuffer)) {
            if ($len)
                break a;
            return 0;
        }
        if ($this.$eof0)
            return (-1);
        if (!$len)
            return 0;
        ji_InputStreamReader_ensureBufferHasData($this, 1);
    }
    $bytesRead = 0;
    while (true) {
        $sz = jl_Math_min($len, jn_Buffer_remaining($this.$outBuffer));
        $this.$outBuffer.$get4($cbuf, $off + $bytesRead | 0, $sz);
        $len = $len - $sz | 0;
        $bytesRead = $bytesRead + $sz | 0;
        if ($len <= 0)
            break;
        if (!ji_InputStreamReader_ensureBufferHasData($this, 0))
            break;
    }
    return $bytesRead;
},
ji_InputStreamReader_ensureBufferHasData = ($this, $force) => {
    if (!jn_Buffer_hasRemaining($this.$outBuffer))
        return ji_InputStreamReader_fillBuffer($this, $force);
    return 1;
},
ji_InputStreamReader_fillBuffer = ($this, $force) => {
    let $readSomething, $hasAvailable, $decoderCalled, $posBefore, $result;
    if ($this.$eof0)
        return 0;
    $this.$outBuffer.$compact();
    $readSomething = $force ? 0 : 1;
    $hasAvailable = 1;
    $decoderCalled = 0;
    a: {
        while (true) {
            if (jn_Buffer_hasRemaining($this.$inBuffer)) {
                $posBefore = jn_Buffer_position($this.$outBuffer);
                $result = jnc_CharsetDecoder_decode($this.$decoder, $this.$inBuffer, $this.$outBuffer, $this.$streamEof);
                $decoderCalled = 1;
                $readSomething = $readSomething | (jn_Buffer_position($this.$outBuffer) <= $posBefore ? 0 : 1);
                if ($result.$isOverflow())
                    break;
                if (!$result.$isUnderflow())
                    continue;
            }
            if ($this.$stream.$available() <= 0 && $readSomething) {
                $hasAvailable = 0;
                break a;
            }
            if (!ji_InputStreamReader_fillReadBuffer($this)) {
                jnc_CharsetDecoder_decode($this.$decoder, $this.$inBuffer, $this.$outBuffer, 1);
                break a;
            }
        }
    }
    if (!jn_Buffer_hasRemaining($this.$inBuffer) && $this.$streamEof && !($decoderCalled && !(jnc_CharsetDecoder_flush($this.$decoder, $this.$outBuffer)).$isUnderflow()))
        $this.$eof0 = 1;
    jn_CharBuffer_flip($this.$outBuffer);
    return $hasAvailable;
},
ji_InputStreamReader_fillReadBuffer = $this => {
    let $bytesRead;
    if ($this.$streamEof)
        return 0;
    $this.$inBuffer.$compact0();
    a: {
        while (true) {
            if (!jn_Buffer_hasRemaining($this.$inBuffer))
                break a;
            $bytesRead = $this.$stream.$read0(jn_ByteBuffer_array($this.$inBuffer), jn_Buffer_position($this.$inBuffer), jn_Buffer_remaining($this.$inBuffer));
            if ($bytesRead == (-1))
                break;
            if ($bytesRead > 0) {
                $this.$inBuffer.$position(jn_Buffer_position($this.$inBuffer) + $bytesRead | 0);
                break a;
            }
        }
        $this.$streamEof = 1;
    }
    jn_ByteBuffer_flip($this.$inBuffer);
    return 1;
},
ji_InputStreamReader_ready = $this => {
    return !jn_Buffer_hasRemaining($this.$outBuffer) && !jn_Buffer_hasRemaining($this.$inBuffer) && $this.$stream.$available() <= 0 ? 0 : 1;
};
function ju_AbstractList$1() {
    let a = this; jl_Object.call(a);
    a.$index1 = 0;
    a.$modCount1 = 0;
    a.$size3 = 0;
    a.$removeIndex = 0;
    a.$this$00 = null;
}
let ju_AbstractList$1__init_ = ($this, $this$0) => {
    $this.$this$00 = $this$0;
    jl_Object__init_($this);
    $this.$modCount1 = $this.$this$00.$modCount;
    $this.$size3 = $this.$this$00.$size();
    $this.$removeIndex = (-1);
},
ju_AbstractList$1__init_0 = var_0 => {
    let var_1 = new ju_AbstractList$1();
    ju_AbstractList$1__init_(var_1, var_0);
    return var_1;
},
ju_AbstractList$1_hasNext = $this => {
    return $this.$index1 >= $this.$size3 ? 0 : 1;
},
ju_AbstractList$1_next = $this => {
    let var$1, var$2;
    ju_AbstractList$1_checkConcurrentModification($this);
    $this.$removeIndex = $this.$index1;
    var$1 = $this.$this$00;
    var$2 = $this.$index1;
    $this.$index1 = var$2 + 1 | 0;
    return var$1.$get(var$2);
},
ju_AbstractList$1_remove = $this => {
    if ($this.$removeIndex < 0)
        $rt_throw(jl_IllegalStateException__init_());
    ju_AbstractList$1_checkConcurrentModification($this);
    $this.$this$00.$remove($this.$removeIndex);
    $this.$modCount1 = $this.$this$00.$modCount;
    if ($this.$removeIndex < $this.$index1)
        $this.$index1 = $this.$index1 - 1 | 0;
    $this.$size3 = $this.$size3 - 1 | 0;
    $this.$removeIndex = (-1);
},
ju_AbstractList$1_checkConcurrentModification = $this => {
    if ($this.$modCount1 == $this.$this$00.$modCount)
        return;
    $rt_throw(ju_ConcurrentModificationException__init_());
},
v_WebBackgroundPainter = $rt_classWithoutFields(),
v_WebBackgroundPainter_oldViewFrame = 0,
v_WebBackgroundPainter_presentFrame = 0,
v_WebBackgroundPainter_presentDY = 0,
v_WebBackgroundPainter_MAX_BACKGROUND_DY = 0,
v_WebBackgroundPainter_FRAME_PATHS = null,
v_WebBackgroundPainter_frames = null,
v_WebBackgroundPainter_loadedFrames = 0,
v_WebBackgroundPainter_$callClinit = () => {
    v_WebBackgroundPainter_$callClinit = $rt_eraseClinit(v_WebBackgroundPainter);
    v_WebBackgroundPainter__clinit_();
},
v_WebBackgroundPainter_init = () => {
    let $doc, $i, $framePath, var$4, var$5, var$6;
    v_WebBackgroundPainter_$callClinit();
    $doc = window.document;
    v_WebBackgroundPainter_frames = $rt_createArray(jl_Object, 4);
    v_WebBackgroundPainter_loadedFrames = 0;
    $i = 0;
    while ($i < 4) {
        $framePath = v_WebBackgroundPainter_FRAME_PATHS.data[$i];
        var$4 = $doc.createElement("img");
        var$5 = v_WebBackgroundPainter$1__init_0();
        var$4.addEventListener("load", otji_JS_function(otji_JSWrapper_unwrap(var$5), "handleEvent"));
        var$6 = v_WebBackgroundPainter$2__init_0($framePath);
        var$4.addEventListener("error", otji_JS_function(otji_JSWrapper_unwrap(var$6), "handleEvent"));
        var$5 = $rt_ustr(v_WebBackgroundPainter_FRAME_PATHS.data[$i]);
        var$4.src = var$5;
        v_WebBackgroundPainter_frames.data[$i] = otji_JSWrapper_wrap(var$4);
        $i = $i + 1 | 0;
    }
    v_WebBackgroundPainter_presentFrame = 0;
    v_WebBackgroundPainter_presentDY = 0;
    v_WebBackgroundPainter_oldViewFrame = (-1);
},
v_WebBackgroundPainter_onFrameLoaded = () => {
    v_WebBackgroundPainter_$callClinit();
    v_WebBackgroundPainter_loadedFrames = v_WebBackgroundPainter_loadedFrames + 1 | 0;
},
v_WebBackgroundPainter_onFrameLoadError = $path => {
    let var$2;
    v_WebBackgroundPainter_$callClinit();
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(346)), $path);
    console.warn('Galaga: ' + $rt_ustr(jl_StringBuilder_toString(var$2)));
    v_WebBackgroundPainter_loadedFrames = v_WebBackgroundPainter_loadedFrames + 1 | 0;
},
v_WebBackgroundPainter_paint = ($ctx, $frameOfView, $model) => {
    let $state, $secondsInState, $img, $scroll;
    v_WebBackgroundPainter_$callClinit();
    $state = $model.$getState();
    $secondsInState = $model.$getSecondsInState();
    v_WebBackgroundPainter_presentFrame = ($frameOfView / 8 | 0) % 4 | 0;
    $img = otji_JSWrapper_unwrap(v_WebBackgroundPainter_frames.data[v_WebBackgroundPainter_presentFrame]);
    if ($img !== null && (v_WebBackgroundPainter_isImageLoaded$js_body$_6($img) ? 1 : 0)) {
        $ctx.drawImage($img, 0.0, v_WebBackgroundPainter_presentDY);
        $ctx.drawImage($img, 0.0, ( -v_WebBackgroundPainter_MAX_BACKGROUND_DY | 0) + v_WebBackgroundPainter_presentDY | 0);
        $ctx.drawImage($img, 0.0, v_WebBackgroundPainter_MAX_BACKGROUND_DY + v_WebBackgroundPainter_presentDY | 0);
    }
    if (v_WebBackgroundPainter_oldViewFrame != $frameOfView) {
        a: {
            b: {
                s_GameState_$callClinit();
                if ($state !== s_GameState_INITIAL_SCREEN && $state !== s_GameState_COIN_INSERTED && $state !== s_GameState_PLAYING && $state !== s_GameState_LOADING_NOT_FIRST_STAGE) {
                    if ($state !== s_GameState_LOADING_FIRST_STAGE)
                        break b;
                    if ($secondsInState <= 3)
                        break b;
                }
                $scroll = 1;
                break a;
            }
            $scroll = 0;
        }
        if ($scroll)
            v_WebBackgroundPainter_presentDY = v_WebBackgroundPainter_presentDY + 1 | 0;
        if (v_WebBackgroundPainter_presentDY >= v_WebBackgroundPainter_MAX_BACKGROUND_DY)
            v_WebBackgroundPainter_presentDY = 0;
    }
    v_WebBackgroundPainter_oldViewFrame = $frameOfView;
},
v_WebBackgroundPainter__clinit_ = () => {
    v_WebBackgroundPainter_oldViewFrame = (-1);
    v_WebBackgroundPainter_presentFrame = 0;
    v_WebBackgroundPainter_presentDY = 0;
    v_WebBackgroundPainter_MAX_BACKGROUND_DY = m_GameModel_getSreenHeight();
    v_WebBackgroundPainter_FRAME_PATHS = $rt_wrapArray(jl_String, [$rt_s(347), $rt_s(348), $rt_s(349), $rt_s(350)]);
    v_WebBackgroundPainter_loadedFrames = 0;
},
v_WebBackgroundPainter_isImageLoaded$js_body$_6 = var$1 => {
    return var$1.complete && var$1.naturalHeight !== 0;
};
function jur_Quantifier() {
    let a = this; jur_SpecialToken.call(a);
    a.$min2 = 0;
    a.$max2 = 0;
}
let jur_Quantifier__init_ = ($this, var$1, $max) => {
    jur_SpecialToken__init_($this);
    $this.$min2 = var$1;
    $this.$max2 = $max;
},
jur_Quantifier__init_0 = (var_0, var_1) => {
    let var_2 = new jur_Quantifier();
    jur_Quantifier__init_(var_2, var_0, var_1);
    return var_2;
},
jur_Quantifier_min = $this => {
    return $this.$min2;
},
jur_Quantifier_max = $this => {
    return $this.$max2;
},
jur_Quantifier_toString = $this => {
    let var$1, var$2, var$3;
    var$1 = $this.$min2;
    var$2 = $this.$max2 == 2147483647 ? $rt_s(54) : jl_Integer_toString($this.$max2);
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(jl_StringBuilder_append(jl_StringBuilder_append0(jl_StringBuilder_append1(jl_StringBuilder_append0(var$3, 123), var$1), 44), var$2), 125);
    return jl_StringBuilder_toString(var$3);
};
function jur_AbstractCharClass$LazyJavaUpperCase$1() {
    jur_AbstractCharClass.call(this);
    this.$this$012 = null;
}
let jur_AbstractCharClass$LazyJavaUpperCase$1__init_ = ($this, $this$0) => {
    $this.$this$012 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaUpperCase$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaUpperCase$1();
    jur_AbstractCharClass$LazyJavaUpperCase$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaUpperCase$1_contains = ($this, $ch) => {
    return jl_Character_isUpperCase($ch);
},
jl_Runnable = $rt_classWithoutFields(0),
jnci_UTF8Decoder = $rt_classWithoutFields(jnci_BufferedDecoder),
jnci_UTF8Decoder__init_ = ($this, $cs) => {
    jnci_BufferedDecoder__init_($this, $cs, 0.3333333432674408, 0.5);
},
jnci_UTF8Decoder__init_0 = var_0 => {
    let var_1 = new jnci_UTF8Decoder();
    jnci_UTF8Decoder__init_(var_1, var_0);
    return var_1;
},
jnci_UTF8Decoder_arrayDecode = ($this, $inArray, $inPos, $inSize, $outArray, $outPos, $outSize, $controller) => {
    let $result, var$9, var$10, $b, var$12, var$13, $b2, $b3, $c, $b4, $code;
    $result = null;
    a: {
        b: {
            c: {
                while ($inPos < $inSize) {
                    if ($outPos >= $outSize)
                        break a;
                    var$9 = $inArray.data;
                    var$10 = $inPos + 1 | 0;
                    $b = var$9[$inPos] & 255;
                    if (!($b & 128)) {
                        var$9 = $outArray.data;
                        var$12 = $outPos + 1 | 0;
                        var$9[$outPos] = $b & 65535;
                    } else if (($b & 224) == 192) {
                        if (var$10 >= $inSize) {
                            $inPos = var$10 + (-1) | 0;
                            if ($controller.$hasMoreInput(2))
                                break a;
                            jnc_CoderResult_$callClinit();
                            $result = jnc_CoderResult_UNDERFLOW;
                            break a;
                        }
                        var$13 = var$10 + 1 | 0;
                        $b2 = var$9[var$10];
                        if (!jnci_UTF8Decoder_checkMidByte($this, $b2)) {
                            $inPos = var$13 + (-2) | 0;
                            $result = jnc_CoderResult_malformedForLength(1);
                            break a;
                        }
                        var$9 = $outArray.data;
                        var$12 = $outPos + 1 | 0;
                        var$9[$outPos] = (($b & 31) << 6 | $b2 & 63) & 65535;
                        var$10 = var$13;
                    } else if (($b & 240) == 224) {
                        if ((var$10 + 2 | 0) > $inSize) {
                            $inPos = var$10 + (-1) | 0;
                            if ($controller.$hasMoreInput(3))
                                break a;
                            jnc_CoderResult_$callClinit();
                            $result = jnc_CoderResult_UNDERFLOW;
                            break a;
                        }
                        var$13 = var$10 + 1 | 0;
                        $b2 = var$9[var$10];
                        var$10 = var$13 + 1 | 0;
                        $b3 = var$9[var$13];
                        if (!jnci_UTF8Decoder_checkMidByte($this, $b2))
                            break b;
                        if (!jnci_UTF8Decoder_checkMidByte($this, $b3))
                            break b;
                        $c = (($b & 15) << 12 | ($b2 & 63) << 6 | $b3 & 63) & 65535;
                        if (jl_Character_isSurrogate($c)) {
                            $inPos = var$10 + (-3) | 0;
                            $result = jnc_CoderResult_malformedForLength(3);
                            break a;
                        }
                        var$9 = $outArray.data;
                        var$12 = $outPos + 1 | 0;
                        var$9[$outPos] = $c;
                    } else {
                        if (($b & 248) != 240) {
                            $inPos = var$10 + (-1) | 0;
                            $result = jnc_CoderResult_malformedForLength(1);
                            break a;
                        }
                        if ((var$10 + 3 | 0) > $inSize) {
                            $inPos = var$10 + (-1) | 0;
                            if ($controller.$hasMoreInput(4))
                                break a;
                            jnc_CoderResult_$callClinit();
                            $result = jnc_CoderResult_UNDERFLOW;
                            break a;
                        }
                        if (($outPos + 2 | 0) > $outSize) {
                            $inPos = var$10 + (-1) | 0;
                            if ($controller.$hasMoreOutput(2))
                                break a;
                            jnc_CoderResult_$callClinit();
                            $result = jnc_CoderResult_OVERFLOW;
                            break a;
                        }
                        var$13 = var$10 + 1 | 0;
                        $b2 = var$9[var$10];
                        var$12 = var$13 + 1 | 0;
                        $b3 = var$9[var$13];
                        var$10 = var$12 + 1 | 0;
                        $b4 = var$9[var$12];
                        if (!jnci_UTF8Decoder_checkMidByte($this, $b2))
                            break c;
                        if (!jnci_UTF8Decoder_checkMidByte($this, $b3))
                            break c;
                        if (!jnci_UTF8Decoder_checkMidByte($this, $b4))
                            break c;
                        var$9 = $outArray.data;
                        $code = ($b & 7) << 18 | ($b2 & 63) << 12 | ($b3 & 63) << 6 | $b4 & 63;
                        var$13 = $outPos + 1 | 0;
                        var$9[$outPos] = jl_Character_highSurrogate($code);
                        var$12 = var$13 + 1 | 0;
                        var$9[var$13] = jl_Character_lowSurrogate($code);
                    }
                    $inPos = var$10;
                    $outPos = var$12;
                }
                break a;
            }
            $inPos = var$10 + (-3) | 0;
            $result = jnc_CoderResult_malformedForLength(1);
            break a;
        }
        $inPos = var$10 + (-3) | 0;
        $result = jnc_CoderResult_malformedForLength(1);
    }
    $controller.$setInPosition($inPos);
    $controller.$setOutPosition($outPos);
    return $result;
},
jnci_UTF8Decoder_checkMidByte = ($this, $b) => {
    return ($b & 192) != 128 ? 0 : 1;
},
otpp_ResourceAccessor = $rt_classWithoutFields();
function jnci_BufferedDecoder$Controller() {
    let a = this; jl_Object.call(a);
    a.$in = null;
    a.$out = null;
    a.$inPosition = 0;
    a.$outPosition = 0;
}
let jnci_BufferedDecoder$Controller__init_ = ($this, $in, $out) => {
    jl_Object__init_($this);
    $this.$in = $in;
    $this.$out = $out;
},
jnci_BufferedDecoder$Controller__init_0 = (var_0, var_1) => {
    let var_2 = new jnci_BufferedDecoder$Controller();
    jnci_BufferedDecoder$Controller__init_(var_2, var_0, var_1);
    return var_2;
},
jnci_BufferedDecoder$Controller_hasMoreInput = $this => {
    return jn_Buffer_hasRemaining($this.$in);
},
jnci_BufferedDecoder$Controller_hasMoreInput0 = ($this, $sz) => {
    return jn_Buffer_remaining($this.$in) < $sz ? 0 : 1;
},
jnci_BufferedDecoder$Controller_hasMoreOutput = ($this, $sz) => {
    return jn_Buffer_remaining($this.$out) < $sz ? 0 : 1;
},
jnci_BufferedDecoder$Controller_setInPosition = ($this, $inPosition) => {
    $this.$inPosition = $inPosition;
},
jnci_BufferedDecoder$Controller_setOutPosition = ($this, $outPosition) => {
    $this.$outPosition = $outPosition;
},
jur_PossessiveQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet),
jur_PossessiveQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_LeafQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_PossessiveQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_PossessiveQuantifierSet();
    jur_PossessiveQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_PossessiveQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4;
    a: {
        while (true) {
            if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$getRightBound())
                break a;
            var$4 = $this.$leaf.$accepts($stringIndex, $testString);
            if (var$4 < 1)
                break;
            $stringIndex = $stringIndex + var$4 | 0;
        }
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
};
function jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1() {
    jur_AbstractCharClass.call(this);
    this.$this$032 = null;
}
let jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1__init_ = ($this, $this$0) => {
    $this.$this$032 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1();
    jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1_contains = ($this, $ch) => {
    return jl_Character_isIdentifierIgnorable($ch);
};
function jur_AbstractCharClass$LazyJavaLetter$1() {
    jur_AbstractCharClass.call(this);
    this.$this$026 = null;
}
let jur_AbstractCharClass$LazyJavaLetter$1__init_ = ($this, $this$0) => {
    $this.$this$026 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaLetter$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaLetter$1();
    jur_AbstractCharClass$LazyJavaLetter$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaLetter$1_contains = ($this, $ch) => {
    return jl_Character_isLetter($ch);
},
jur_ReluctantQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet),
jur_ReluctantQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_LeafQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_ReluctantQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_ReluctantQuantifierSet();
    jur_ReluctantQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_ReluctantQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4;
    while (true) {
        var$4 = $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if (var$4 >= 0)
            break;
        if (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$getRightBound()) {
            var$4 = $this.$leaf.$accepts($stringIndex, $testString);
            $stringIndex = $stringIndex + var$4 | 0;
        }
        if (var$4 < 1)
            return (-1);
    }
    return var$4;
},
jnci_Iso8859Decoder = $rt_classWithoutFields(jnci_BufferedDecoder),
jnci_Iso8859Decoder__init_ = ($this, $cs) => {
    jnci_BufferedDecoder__init_($this, $cs, 1.0, 1.0);
},
jnci_Iso8859Decoder__init_0 = var_0 => {
    let var_1 = new jnci_Iso8859Decoder();
    jnci_Iso8859Decoder__init_(var_1, var_0);
    return var_1;
},
jnci_Iso8859Decoder_arrayDecode = ($this, $inArray, $inPos, $inSize, $outArray, $outPos, $outSize, $controller) => {
    let $result, var$9, var$10, var$11, $b, var$13;
    $result = null;
    while ($inPos < $inSize && $outPos < $outSize) {
        var$9 = $outArray.data;
        var$10 = $inArray.data;
        var$11 = $inPos + 1 | 0;
        $b = var$10[$inPos] & 255;
        var$13 = $outPos + 1 | 0;
        var$9[$outPos] = $b & 65535;
        $inPos = var$11;
        $outPos = var$13;
    }
    $controller.$setInPosition($inPos);
    $controller.$setOutPosition($outPos);
    return $result;
},
jur_EOISet = $rt_classWithoutFields(jur_AbstractSet),
jur_EOISet__init_ = $this => {
    jur_AbstractSet__init_($this);
},
jur_EOISet__init_0 = () => {
    let var_0 = new jur_EOISet();
    jur_EOISet__init_(var_0);
    return var_0;
},
jur_EOISet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $rightBound;
    $rightBound = !$matchResult.$hasTransparentBounds() ? $matchResult.$getRightBound() : $testString.$length();
    if ($stringIndex < $rightBound)
        return (-1);
    $matchResult.$hitEnd = 1;
    $matchResult.$requireEnd = 1;
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_EOISet_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_EOISet_getName = $this => {
    return $rt_s(351);
},
jur_AbstractCharClass$LazyUpper = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyUpper__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyUpper__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyUpper();
    jur_AbstractCharClass$LazyUpper__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyUpper_computeValue = $this => {
    return (jur_CharClass__init_()).$add0(65, 90);
},
v_WebInterfacePainter = $rt_classWithoutFields(),
v_WebInterfacePainter_paint = ($ctx, $frameOfView, $model) => {
    let $state, $bounds, $score, $highScore, $lives, $secondsInState, $credits, $fps, $margin, $px, $pw, $ph, $sep, $i, var$18, $playerSprite, var$20, var$21, $x, $y, $anim, $zako, $goei, $bg, var$28, var$29, $player, $xMargin, $xZero, var$33, $playerImg, $cx, $h2, $stageImg;
    $state = $model.$getState();
    $bounds = $model.$getBounds();
    $score = $model.$getScore();
    $highScore = $model.$getHighScore();
    $lives = $model.$getLives();
    $secondsInState = $model.$getSecondsInState();
    $credits = $model.$getCoins();
    $fps = c_GameController_getFramePerSeconds();
    s_GameState_$callClinit();
    if (!($state !== s_GameState_INITIAL_SCREEN && $state !== s_GameState_COIN_INSERTED && $state !== s_GameState_GAME_OVER))
        v_WebInterfacePainter_drawSprite($ctx, v_WebSpriteLibrary_getSprite($rt_s(20)), 20, 1, 76, 8);
    else if (!(($frameOfView / ($fps / 4 | 0) | 0) % 2 | 0))
        v_WebInterfacePainter_drawSprite($ctx, v_WebSpriteLibrary_getSprite($rt_s(20)), 20, 1, 76, 8);
    a: {
        v_WebInterfacePainter_drawSprite($ctx, v_WebSpriteLibrary_getSprite($rt_s(23)), 77, 1, 76, 8);
        v_WebInterfacePainter_paintNumberRTL($ctx, $highScore, $rt_s(352), 131, 9);
        if ($state !== s_GameState_INITIAL_SCREEN && $state !== s_GameState_COIN_INSERTED) {
            if ($state !== s_GameState_LOADING_FIRST_STAGE)
                break a;
            if ($secondsInState >= 4)
                break a;
        }
        $margin = 1;
        s_Entities_$callClinit();
        $px = s_Entities_getWidth(s_Entities_PLAYER);
        v_WebInterfacePainter_drawSprite($ctx, v_WebSpriteLibrary_getSprite($rt_s(26)), $px, (md_WorldBounds_height($bounds) - 8 | 0) - $margin | 0, 76, 8);
        v_WebInterfacePainter_paintNumberLTR($ctx, $credits, $rt_s(352), $px * 4 | 0, (md_WorldBounds_height($bounds) - 8 | 0) - $margin | 0);
    }
    b: {
        if (!(!($state === s_GameState_LOADING_FIRST_STAGE && $secondsInState > 3) && $state !== s_GameState_PLAYING && $state !== s_GameState_LIFE_LOST && $state !== s_GameState_LOADING_NOT_FIRST_STAGE)) {
            s_Entities_$callClinit();
            $pw = s_Entities_getWidth(s_Entities_PLAYER);
            $ph = s_Entities_getHeight(s_Entities_PLAYER);
            $sep = 2;
            $margin = 2;
            $i = 0;
            while (true) {
                if ($i >= ($lives - 1 | 0))
                    break b;
                if ($i >= 8)
                    break b;
                var$18 = s_Entities_PLAYER;
                s_RotationDirection_$callClinit();
                $playerSprite = v_WebSpriteLibrary_getSprite0(var$18, s_RotationDirection_U, 1);
                var$20 = $rt_imul($pw + $sep | 0, $i) + $margin | 0;
                var$21 = md_WorldBounds_height($bounds) - $ph | 0;
                $ctx.drawImage($playerSprite, var$20, var$21);
                $i = $i + 1 | 0;
            }
        }
    }
    if ($state === s_GameState_INITIAL_SCREEN && $secondsInState > 0) {
        $x = (md_WorldBounds_width($bounds) / 2 | 0) - 22 | 0;
        s_Entities_$callClinit();
        $y = s_Entities_getHeight(s_Entities_PLAYER) * 2 | 0;
        v_WebInterfacePainter_drawSprite($ctx, v_WebSpriteLibrary_getSprite($rt_s(27)), $x, $y, 76, 8);
    }
    if ($state === s_GameState_INITIAL_SCREEN && $secondsInState > 1) {
        $x = (md_WorldBounds_width($bounds) / 2 | 0) - 40 | 0;
        s_Entities_$callClinit();
        $y = (s_Entities_getHeight(s_Entities_PLAYER) * 3 | 0) + 8 | 0;
        v_WebInterfacePainter_drawSprite($ctx, v_WebSpriteLibrary_getSprite($rt_s(21)), $x, $y, 76, 8);
    }
    if ($state === s_GameState_INITIAL_SCREEN && $secondsInState > 2) {
        $x = (md_WorldBounds_width($bounds) / 2 | 0) - 15 | 0;
        s_Entities_$callClinit();
        $y = (s_Entities_getHeight(s_Entities_PLAYER) * 4 | 0) + 16 | 0;
        v_WebInterfacePainter_drawSprite($ctx, v_WebSpriteLibrary_getSprite($rt_s(24)), $x, $y, 76, 8);
        $anim = $frameOfView >= ($fps / 2 | 0) ? 2 : 1;
        var$18 = s_Entities_ZAKO;
        s_RotationDirection_$callClinit();
        $zako = v_WebSpriteLibrary_getSprite0(var$18, s_RotationDirection_U, $anim);
        $ctx.drawImage($zako, $x - 40 | 0, $y - 4 | 0, s_Entities_getWidth(s_Entities_PLAYER), s_Entities_getHeight(s_Entities_PLAYER));
    }
    if ($state === s_GameState_INITIAL_SCREEN && $secondsInState > 3) {
        $x = (md_WorldBounds_width($bounds) / 2 | 0) - 15 | 0;
        s_Entities_$callClinit();
        $y = (s_Entities_getHeight(s_Entities_PLAYER) * 5 | 0) + 24 | 0;
        v_WebInterfacePainter_drawSprite($ctx, v_WebSpriteLibrary_getSprite($rt_s(25)), $x, $y, 76, 8);
        $anim = $frameOfView >= ($fps / 2 | 0) ? 2 : 1;
        var$18 = s_Entities_GOEI;
        s_RotationDirection_$callClinit();
        $goei = v_WebSpriteLibrary_getSprite0(var$18, s_RotationDirection_U, $anim);
        $ctx.drawImage($goei, $x - 40 | 0, $y - 4 | 0, s_Entities_getWidth(s_Entities_PLAYER), s_Entities_getHeight(s_Entities_PLAYER));
    }
    c: {
        if ($state === s_GameState_COIN_INSERTED) {
            $bg = v_WebSpriteLibrary_getSprite($rt_s(19));
            var$28 = md_WorldBounds_width($bounds);
            var$29 = md_WorldBounds_height($bounds);
            $ctx.drawImage($bg, 0.0, 0.0, var$28, var$29);
            s_Entities_$callClinit();
            $pw = s_Entities_getWidth(s_Entities_PLAYER);
            $ph = s_Entities_getHeight(s_Entities_PLAYER);
            var$18 = s_Entities_PLAYER;
            s_RotationDirection_$callClinit();
            $player = v_WebSpriteLibrary_getSprite0(var$18, s_RotationDirection_U, 1);
            $i = 0;
            while (true) {
                if ($i >= 3)
                    break c;
                var$21 = $pw / 2 | 0;
                var$20 = $pw;
                var$28 = var$20 * (8.0 + 1.5 * $i) + 4.0 | 0;
                var$29 = $ph;
                $ctx.drawImage($player, var$21, var$28, var$20, var$29);
                $i = $i + 1 | 0;
            }
        }
    }
    if ($state !== s_GameState_INITIAL_SCREEN && $state !== s_GameState_COIN_INSERTED) {
        $xMargin = 41;
        $xZero = 33;
        if ($score < 10)
            v_WebInterfacePainter_paintNumberRTL($ctx, 0, $rt_s(352), $xZero, 9);
        v_WebInterfacePainter_paintNumberRTL($ctx, $score, $rt_s(352), $xMargin, 9);
    }
    if ($state === s_GameState_LOADING_FIRST_STAGE) {
        var$33 = $rt_compare($secondsInState, 4);
        if (!(var$33 >= 0 && $secondsInState <= 5)) {
            $playerImg = v_WebSpriteLibrary_getSprite($rt_s(18));
            $cx = md_WorldBounds_width($bounds) / 2 | 0;
            if (var$33 < 0) {
                v_WebInterfacePainter_drawSprite($ctx, $playerImg, $cx - 35 | 0, (md_WorldBounds_height($bounds) / 2 | 0) + 2 | 0, 76, 8);
                v_WebInterfacePainter_paintNumberLTR($ctx, 1, $rt_s(28), $cx + 20 | 0, (md_WorldBounds_height($bounds) / 2 | 0) + 2 | 0);
            } else {
                $h2 = $playerImg.height / 2 | 0;
                v_WebInterfacePainter_drawSprite($ctx, $playerImg, $cx - 35 | 0, ((md_WorldBounds_height($bounds) / 2 | 0) - $h2 | 0) - 2 | 0, 76, 8);
                v_WebInterfacePainter_paintNumberLTR($ctx, 1, $rt_s(28), $cx + 20 | 0, ((md_WorldBounds_height($bounds) / 2 | 0) - $h2 | 0) - 2 | 0);
            }
        }
    }
    d: {
        if (!($state === s_GameState_LOADING_FIRST_STAGE && $secondsInState > 3)) {
            if ($state !== s_GameState_LOADING_NOT_FIRST_STAGE)
                break d;
            if ($secondsInState <= 1)
                break d;
        }
        $stageImg = v_WebSpriteLibrary_getSprite($rt_s(22));
        $cx = md_WorldBounds_width($bounds) / 2 | 0;
        v_WebInterfacePainter_drawSprite($ctx, $stageImg, $cx - 35 | 0, (md_WorldBounds_height($bounds) / 2 | 0) + 2 | 0, 76, 8);
        v_WebInterfacePainter_paintNumberLTR($ctx, $model.$getNumStage(), $rt_s(28), $cx + 10 | 0, (md_WorldBounds_height($bounds) / 2 | 0) + 2 | 0);
    }
},
v_WebInterfacePainter_drawSprite = ($ctx, $sprite, $x, $y, $w, $h) => {
    let var$7, var$8, var$9, var$10;
    var$7 = $x;
    var$8 = $y;
    var$9 = $w;
    var$10 = $h;
    $ctx.drawImage($sprite, var$7, var$8, var$9, var$10);
},
v_WebInterfacePainter_paintNumberRTL = ($ctx, $number, $color, $xMax, $yMin) => {
    let $digits, $i, var$8, var$9, var$10;
    if ($number < 0)
        $number = 0;
    $digits = v_WebInterfacePainter_extractDigits($number);
    $i = 0;
    while ($i < $digits.$size()) {
        var$8 = v_WebSpriteLibrary_getNumberSprite($color, ($digits.$get($i)).$intValue());
        var$9 = $xMax - (8 * $i | 0) | 0;
        var$10 = $yMin;
        $ctx.drawImage(var$8, var$9, var$10, 8.0, 8.0);
        $i = $i + 1 | 0;
    }
},
v_WebInterfacePainter_paintNumberLTR = ($ctx, $number, $color, $xMin, $yMin) => {
    let $digits, $n, $i, var$9, var$10, var$11;
    if ($number < 0)
        $number = 0;
    $digits = v_WebInterfacePainter_extractDigits($number);
    $n = $digits.$size();
    $i = 0;
    while ($i < $n) {
        var$9 = v_WebSpriteLibrary_getNumberSprite($color, ($digits.$get(($n - $i | 0) - 1 | 0)).$intValue());
        var$10 = $xMin + (8 * $i | 0) | 0;
        var$11 = $yMin;
        $ctx.drawImage(var$9, var$10, var$11, 8.0, 8.0);
        $i = $i + 1 | 0;
    }
},
v_WebInterfacePainter_extractDigits = $temp => {
    let $list;
    $list = ju_ArrayList__init_();
    if (!$temp) {
        $list.$add2(jl_Integer_valueOf(0));
        return $list;
    }
    while ($temp > 0) {
        $list.$add2(jl_Integer_valueOf($temp % 10 | 0));
        $temp = $temp / 10 | 0;
    }
    return $list;
};
function otji_JSWrapper() {
    jl_Object.call(this);
    this.$js = null;
}
let otji_JSWrapper__init_0 = ($this, $js) => {
    jl_Object__init_($this);
    $this.$js = $js;
},
otji_JSWrapper__init_ = var_0 => {
    let var_1 = new otji_JSWrapper();
    otji_JSWrapper__init_0(var_1, var_0);
    return var_1;
},
otji_JSWrapper_wrap = $o => {
    let $type, $isObject, $wrappers, $existingRef, $existing, $wrapper, $jsString, $stringWrappers, $stringFinalizationRegistry, $wrapperAsJs, $jsNumber, $numberWrappers, $numberFinalizationRegistry;
    if ($o === null)
        return null;
    $type = $rt_str(typeof $o);
    $isObject = !$type.$equals($rt_s(353)) && !$type.$equals($rt_s(354)) ? 0 : 1;
    otji_JSWrapper$Helper_$callClinit();
    $wrappers = otji_JSWrapper$Helper_wrappers;
    if ($wrappers !== null) {
        if ($isObject) {
            $existingRef = $wrappers.get($o);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($o);
            $wrappers.set($o, new WeakRef($wrapper));
            return $wrapper;
        }
        if ($type.$equals($rt_s(355))) {
            $jsString = $o;
            $stringWrappers = otji_JSWrapper$Helper_stringWrappers;
            $stringFinalizationRegistry = otji_JSWrapper$Helper_stringFinalizationRegistry;
            $existingRef = $stringWrappers.get($jsString);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($o);
            $wrapperAsJs = $wrapper;
            $stringWrappers.set($jsString, new WeakRef($wrapperAsJs));
            $stringFinalizationRegistry.register($wrapperAsJs, $jsString);
            return $wrapper;
        }
        if ($type.$equals($rt_s(356))) {
            $jsNumber = $o;
            $numberWrappers = otji_JSWrapper$Helper_numberWrappers;
            $numberFinalizationRegistry = otji_JSWrapper$Helper_numberFinalizationRegistry;
            $existingRef = $numberWrappers.get($jsNumber);
            $existing = (typeof $existingRef == 'undefined' ? 1 : 0) ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($o);
            $wrapperAsJs = $wrapper;
            $numberWrappers.set($jsNumber, new WeakRef($wrapperAsJs));
            $numberFinalizationRegistry.register($wrapperAsJs, $jsNumber);
            return $wrapper;
        }
        if ($type.$equals($rt_s(357))) {
            $existingRef = otji_JSWrapper$Helper_undefinedWrapper;
            $existing = $existingRef === null ? void 0 : $existingRef.deref();
            if (!(typeof $existing == 'undefined' ? 1 : 0))
                return $existing;
            $wrapper = otji_JSWrapper__init_($o);
            $wrapperAsJs = $wrapper;
            otji_JSWrapper$Helper_undefinedWrapper = new WeakRef($wrapperAsJs);
            return $wrapper;
        }
    }
    return otji_JSWrapper__init_($o);
},
otji_JSWrapper_unwrap = $o => {
    if ($o === null)
        return null;
    return !($o instanceof otji_JSWrapper) ? $o : $o.$js;
},
ca_ActionHandlerForView = $rt_classWithoutFields(0);
function c_GameController() {
    let a = this; jl_Object.call(a);
    a.$view = null;
    a.$model = null;
    a.$frameNumber = 0;
}
let c_GameController_controller = null,
c_GameController__init_ = ($this, $view, $model) => {
    jl_Object__init_($this);
    $this.$view = $view;
    $this.$model = $model;
    $view.$setupInputs($this);
    $this.$frameNumber = 0;
},
c_GameController__init_0 = (var_0, var_1) => {
    let var_2 = new c_GameController();
    c_GameController__init_(var_2, var_0, var_1);
    return var_2;
},
c_GameController_initController = ($view, $model) => {
    if (c_GameController_controller === null)
        c_GameController_controller = c_GameController__init_0($view, $model);
},
c_GameController_getInstanceForMain = () => {
    if (c_GameController_controller !== null)
        return c_GameController_controller;
    $rt_throw(jl_IllegalStateException__init_0($rt_s(358)));
},
c_GameController_updateFramenumber = $this => {
    if ($this.$frameNumber > 60)
        $this.$frameNumber = 0;
    $this.$frameNumber = $this.$frameNumber + 1 | 0;
},
c_GameController_cmdMovingLeft = ($this, $active) => {
    let $state;
    a: {
        $state = $this.$model.$getState();
        c_GameController$1_$callClinit();
        switch (c_GameController$1_$SwitchMap$shared$GameState.data[jl_Enum_ordinal($state)]) {
            case 1:
            case 2:
                break;
            default:
                break a;
        }
        $this.$model.$setPlayerMovingLeft(jl_Boolean_valueOf($active));
    }
},
c_GameController_cmdMovingRight = ($this, $active) => {
    let $state;
    a: {
        $state = $this.$model.$getState();
        c_GameController$1_$callClinit();
        switch (c_GameController$1_$SwitchMap$shared$GameState.data[jl_Enum_ordinal($state)]) {
            case 1:
            case 2:
                break;
            default:
                break a;
        }
        $this.$model.$setPlayerMovingRight(jl_Boolean_valueOf($active));
    }
},
c_GameController_cmdCoinInserted = $this => {
    $this.$model.$insertCoin();
},
c_GameController_cmdAction = $this => {
    let $state;
    a: {
        $state = $this.$model.$getState();
        c_GameController$1_$callClinit();
        switch (c_GameController$1_$SwitchMap$shared$GameState.data[jl_Enum_ordinal($state)]) {
            case 1:
                break;
            case 2:
                $this.$model.$shoot();
                break a;
            case 3:
                $this.$model.$startGame();
                break a;
            default:
                break a;
        }
        $this.$model.$shoot();
    }
},
c_GameController_cmdNukeAll = $this => {
    $this.$model.$nukeAll();
},
c_GameController_updateModelOnly = $this => {
    c_GameController_updateFramenumber($this);
    $this.$model.$update($this.$frameNumber);
},
c_GameController_renderView = $this => {
    $this.$view.$refresh($this.$frameNumber);
},
c_GameController_getFramePerSeconds = () => {
    return 60;
};
function jur_MultiLineSOLSet() {
    jur_AbstractSet.call(this);
    this.$lt1 = null;
}
let jur_MultiLineSOLSet__init_ = ($this, $lt) => {
    jur_AbstractSet__init_($this);
    $this.$lt1 = $lt;
},
jur_MultiLineSOLSet__init_0 = var_0 => {
    let var_1 = new jur_MultiLineSOLSet();
    jur_MultiLineSOLSet__init_(var_1, var_0);
    return var_1;
},
jur_MultiLineSOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let var$4, var$5;
    a: {
        if ($strIndex != $matchResult.$getRightBound()) {
            if (!$strIndex)
                break a;
            if ($matchResult.$hasAnchoringBounds() && $strIndex == $matchResult.$getLeftBound())
                break a;
            var$4 = $this.$lt1;
            var$5 = $strIndex - 1 | 0;
            if (var$4.$isAfterLineTerminator($testString.$charAt(var$5), $testString.$charAt($strIndex)))
                break a;
        }
        return (-1);
    }
    return $this.$next1.$matches($strIndex, $testString, $matchResult);
},
jur_MultiLineSOLSet_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_MultiLineSOLSet_getName = $this => {
    return $rt_s(359);
};
function ju_LinkedList() {
    let a = this; ju_AbstractSequentialList.call(a);
    a.$firstEntry = null;
    a.$lastEntry = null;
    a.$size1 = 0;
}
let ju_LinkedList__init_2 = $this => {
    ju_AbstractSequentialList__init_($this);
},
ju_LinkedList__init_0 = () => {
    let var_0 = new ju_LinkedList();
    ju_LinkedList__init_2(var_0);
    return var_0;
},
ju_LinkedList__init_1 = ($this, $coll) => {
    let $iter, $prevEntry, $prevEntry_0;
    ju_AbstractSequentialList__init_($this);
    $iter = $coll.$iterator();
    $prevEntry = null;
    while ($iter.$hasNext()) {
        $prevEntry_0 = ju_LinkedList$Entry__init_();
        $prevEntry_0.$item = $iter.$next();
        $prevEntry_0.$previous = $prevEntry;
        if ($prevEntry !== null)
            $prevEntry.$next2 = $prevEntry_0;
        else
            $this.$firstEntry = $prevEntry_0;
        $this.$size1 = $this.$size1 + 1 | 0;
        $prevEntry = $prevEntry_0;
    }
    $this.$lastEntry = $prevEntry;
},
ju_LinkedList__init_ = var_0 => {
    let var_1 = new ju_LinkedList();
    ju_LinkedList__init_1(var_1, var_0);
    return var_1;
},
ju_LinkedList_size = $this => {
    return $this.$size1;
},
ju_LinkedList_clear = $this => {
    $this.$firstEntry = null;
    $this.$lastEntry = null;
    $this.$size1 = 0;
    $this.$modCount = $this.$modCount + 1 | 0;
},
ju_LinkedList_listIterator = $this => {
    return ju_LinkedList$SequentialListIterator__init_($this, $this.$firstEntry, null, 0);
},
ju_LinkedList_listIterator0 = ($this, $index) => {
    let $next, $i, $prev;
    if ($index < 0)
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    if ($index <= ($this.$size1 / 2 | 0)) {
        $next = $this.$firstEntry;
        $i = 0;
        while ($i < $index) {
            $next = $next.$next2;
            $i = $i + 1 | 0;
        }
        return ju_LinkedList$SequentialListIterator__init_($this, $next, $next === null ? null : $next.$previous, $index);
    }
    if ($index > $this.$size1)
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    $prev = $this.$lastEntry;
    $i = $index;
    while ($i < $this.$size1) {
        $prev = $prev.$previous;
        $i = $i + 1 | 0;
    }
    return ju_LinkedList$SequentialListIterator__init_($this, $prev === null ? null : $prev.$next2, $prev, $index);
},
ju_LinkedList_poll = $this => {
    let $entry;
    if ($this.$firstEntry === null)
        return null;
    $entry = $this.$firstEntry;
    $this.$firstEntry = $this.$firstEntry.$next2;
    if ($this.$firstEntry === null)
        $this.$lastEntry = null;
    else
        $this.$firstEntry.$previous = null;
    $this.$size1 = $this.$size1 - 1 | 0;
    $this.$modCount = $this.$modCount + 1 | 0;
    return $entry.$item;
},
ju_LinkedList_removeEntry = ($this, $entry) => {
    if ($entry.$previous === null)
        $this.$firstEntry = $entry.$next2;
    else
        $entry.$previous.$next2 = $entry.$next2;
    if ($entry.$next2 === null)
        $this.$lastEntry = $entry.$previous;
    else
        $entry.$next2.$previous = $entry.$previous;
    $this.$size1 = $this.$size1 - 1 | 0;
    $this.$modCount = $this.$modCount + 1 | 0;
},
otcic_JSStderrPrintStream = $rt_classWithoutFields(otcic_JsConsolePrintStream),
otcic_JSStderrPrintStream__init_ = $this => {
    otcic_JsConsolePrintStream__init_($this);
},
otcic_JSStderrPrintStream__init_0 = () => {
    let var_0 = new otcic_JSStderrPrintStream();
    otcic_JSStderrPrintStream__init_(var_0);
    return var_0;
},
otcic_JSStderrPrintStream_print = ($this, $s) => {
    if ($s === null)
        $s = $rt_s(49);
    $rt_putStderr($rt_ustr($s));
},
WebMain$loop$lambda$_4_0 = $rt_classWithoutFields(),
WebMain$loop$lambda$_4_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
WebMain$loop$lambda$_4_0__init_0 = () => {
    let var_0 = new WebMain$loop$lambda$_4_0();
    WebMain$loop$lambda$_4_0__init_(var_0);
    return var_0;
},
WebMain$loop$lambda$_4_0_onAnimationFrame = (var$0, var$1) => {
    WebMain_loop(var$1);
},
WebMain$loop$lambda$_4_0_onAnimationFrame$exported$0 = (var$1, var$2) => {
    let var$3;
    var$3 = var$2;
    var$1.$onAnimationFrame(var$3);
},
jur_AbstractCharClass$LazyLower = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyLower__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyLower__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyLower();
    jur_AbstractCharClass$LazyLower__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyLower_computeValue = $this => {
    return (jur_CharClass__init_()).$add0(97, 122);
};
function ju_AbstractList$TListIteratorImpl() {
    let a = this; jl_Object.call(a);
    a.$i = 0;
    a.$j = 0;
    a.$lastModCount = 0;
    a.$sz = 0;
    a.$this$03 = null;
}
let ju_AbstractList$TListIteratorImpl__init_ = ($this, var$1, $i, $lastModCount, $sz) => {
    $this.$this$03 = var$1;
    jl_Object__init_($this);
    $this.$i = $i;
    $this.$j = (-1);
    $this.$lastModCount = $lastModCount;
    $this.$sz = $sz;
},
ju_AbstractList$TListIteratorImpl__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new ju_AbstractList$TListIteratorImpl();
    ju_AbstractList$TListIteratorImpl__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
ju_AbstractList$TListIteratorImpl_next = $this => {
    let var$1, var$2;
    ju_AbstractList$TListIteratorImpl_checkConcurrentModification($this);
    if ($this.$i == $this.$sz)
        $rt_throw(ju_NoSuchElementException__init_());
    $this.$j = $this.$i;
    var$1 = $this.$this$03;
    var$2 = $this.$i;
    $this.$i = var$2 + 1 | 0;
    return var$1.$get(var$2);
},
ju_AbstractList$TListIteratorImpl_nextIndex = $this => {
    return $this.$i;
},
ju_AbstractList$TListIteratorImpl_checkConcurrentModification = $this => {
    if ($this.$lastModCount == $this.$this$03.$modCount)
        return;
    $rt_throw(ju_ConcurrentModificationException__init_());
},
jur_AbstractCharClass$LazyJavaTitleCase = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaTitleCase__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaTitleCase__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaTitleCase();
    jur_AbstractCharClass$LazyJavaTitleCase__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaTitleCase_computeValue = $this => {
    return jur_AbstractCharClass$LazyJavaTitleCase$1__init_0($this);
};
function md_PointOfPath() {
    let a = this; jl_Record.call(a);
    a.$x2 = 0.0;
    a.$y2 = 0.0;
}
let md_PointOfPath__init_0 = ($this, $x, $y) => {
    jl_Record__init_($this);
    $this.$x2 = $x;
    $this.$y2 = $y;
},
md_PointOfPath__init_ = (var_0, var_1) => {
    let var_2 = new md_PointOfPath();
    md_PointOfPath__init_0(var_2, var_0, var_1);
    return var_2;
},
md_PointOfPath_toString = $this => {
    return ((((((jl_StringBuilder__init_1($rt_s(360))).$append13($rt_s(361))).$append22($this.$x2)).$append13($rt_s(362))).$append22($this.$y2)).$append13($rt_s(315))).$toString();
},
md_PointOfPath_equals = ($this, $o) => {
    let var$2, var$3;
    if ($this === $o)
        var$2 = 1;
    else if ($o !== null && jl_Object_getClass($o) === $rt_cls(md_PointOfPath)) {
        var$3 = $o;
        var$2 = $this.$x2 !== var$3.$x2 ? 0 : $this.$y2 === var$3.$y2 ? 1 : 0;
    } else
        var$2 = 0;
    return var$2;
},
md_PointOfPath_x = $this => {
    return $this.$x2;
},
md_PointOfPath_y = $this => {
    return $this.$y2;
},
jur_PreviousMatch = $rt_classWithoutFields(jur_AbstractSet),
jur_PreviousMatch__init_ = $this => {
    jur_AbstractSet__init_($this);
},
jur_PreviousMatch__init_0 = () => {
    let var_0 = new jur_PreviousMatch();
    jur_PreviousMatch__init_(var_0);
    return var_0;
},
jur_PreviousMatch_matches = ($this, $stringIndex, $testString, $matchResult) => {
    if ($stringIndex != $matchResult.$getPreviousMatchEnd())
        return (-1);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_PreviousMatch_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_PreviousMatch_getName = $this => {
    return $rt_s(363);
},
jur_NonCapFSet = $rt_classWithoutFields(jur_FSet),
jur_NonCapFSet__init_ = ($this, $groupIndex) => {
    jur_FSet__init_($this, $groupIndex);
},
jur_NonCapFSet__init_0 = var_0 => {
    let var_1 = new jur_NonCapFSet();
    jur_NonCapFSet__init_(var_1, var_0);
    return var_1;
},
jur_NonCapFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $gr;
    $gr = $this.$getGroupIndex();
    $matchResult.$setConsumed($gr, $stringIndex - $matchResult.$getConsumed($gr) | 0);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_NonCapFSet_getName = $this => {
    return $rt_s(364);
},
jur_NonCapFSet_hasConsumed = ($this, $mr) => {
    return 0;
};
function jur_UCISupplCharSet() {
    jur_LeafSet.call(this);
    this.$ch4 = 0;
}
let jur_UCISupplCharSet__init_ = ($this, $ch) => {
    jur_LeafSet__init_($this);
    $this.$charCount0 = 2;
    $this.$ch4 = jl_Character_toLowerCase0(jl_Character_toUpperCase0($ch));
},
jur_UCISupplCharSet__init_0 = var_0 => {
    let var_1 = new jur_UCISupplCharSet();
    jur_UCISupplCharSet__init_(var_1, var_0);
    return var_1;
},
jur_UCISupplCharSet_accepts = ($this, $strIndex, $testString) => {
    let var$3, $high, $low;
    var$3 = $strIndex + 1 | 0;
    $high = $testString.$charAt($strIndex);
    $low = $testString.$charAt(var$3);
    return $this.$ch4 != jl_Character_toLowerCase0(jl_Character_toUpperCase0(jl_Character_toCodePoint($high, $low))) ? (-1) : 2;
},
jur_UCISupplCharSet_getName = $this => {
    let var$1, var$2;
    var$1 = jl_String__init_(jl_Character_toChars($this.$ch4));
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(288)), var$1);
    return jl_StringBuilder_toString(var$2);
},
jl_System = $rt_classWithoutFields(),
jl_System_errCache = null,
jl_System_err = () => {
    if (jl_System_errCache === null)
        jl_System_errCache = otcic_JSStderrPrintStream__init_0();
    return jl_System_errCache;
},
jl_System_arraycopy = ($src, $srcPos, $dest, $destPos, $length) => {
    let var$6, $srcType, $targetType, $srcArray, $i, var$11, var$12, $elem;
    if ($src !== null && $dest !== null) {
        if ($srcPos >= 0 && $destPos >= 0 && $length >= 0 && ($srcPos + $length | 0) <= jlr_Array_getLength($src)) {
            var$6 = $destPos + $length | 0;
            if (var$6 <= jlr_Array_getLength($dest)) {
                a: {
                    b: {
                        if ($src !== $dest) {
                            $srcType = jl_Class_getComponentType(jl_Object_getClass($src));
                            $targetType = jl_Class_getComponentType(jl_Object_getClass($dest));
                            if ($srcType !== null && $targetType !== null) {
                                if ($srcType === $targetType)
                                    break b;
                                if (!jl_Class_isPrimitive($srcType) && !jl_Class_isPrimitive($targetType)) {
                                    $srcArray = $src;
                                    $i = 0;
                                    var$6 = $srcPos;
                                    while ($i < $length) {
                                        var$11 = $srcArray.data;
                                        var$12 = var$6 + 1 | 0;
                                        $elem = var$11[var$6];
                                        if (!jl_Class_isInstance($targetType, $elem)) {
                                            jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $i);
                                            $rt_throw(jl_ArrayStoreException__init_());
                                        }
                                        $i = $i + 1 | 0;
                                        var$6 = var$12;
                                    }
                                    jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
                                    return;
                                }
                                if (!jl_Class_isPrimitive($srcType))
                                    break a;
                                if (jl_Class_isPrimitive($targetType))
                                    break b;
                                else
                                    break a;
                            }
                            $rt_throw(jl_ArrayStoreException__init_());
                        }
                    }
                    jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
                    return;
                }
                $rt_throw(jl_ArrayStoreException__init_());
            }
        }
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    }
    $rt_throw(jl_NullPointerException__init_($rt_s(365)));
},
jl_System_fastArraycopy = ($src, $srcPos, $dest, $destPos, $length) => {
    let var$6;
    if ($srcPos >= 0 && $destPos >= 0 && $length >= 0 && ($srcPos + $length | 0) <= jlr_Array_getLength($src)) {
        var$6 = $destPos + $length | 0;
        if (var$6 <= jlr_Array_getLength($dest)) {
            jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
            return;
        }
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
jl_System_doArrayCopy = (var$1, var$2, var$3, var$4, var$5) => {
    if (var$5 !== 0) {
        if (typeof var$1.data.buffer !== 'undefined') {
            var$3.data.set(var$1.data.subarray(var$2, var$2 + var$5), var$4);
        } else if (var$1 !== var$3 || var$4 < var$2) {
            for (let i = 0;i < var$5;i = i + 1 | 0) {
                var$3.data[var$4++] = var$1.data[var$2++];
            }
        } else {
            var$2 = var$2 + var$5 | 0;
            var$4 = var$4 + var$5 | 0;
            for (let i = 0;i < var$5;i = i + 1 | 0) {
                var$3.data[ --var$4] = var$1.data[ --var$2];
            }
        }
    }
};
function jur_AbstractCharClass$LazyRange() {
    let a = this; jur_AbstractCharClass$LazyCharClass.call(a);
    a.$start5 = 0;
    a.$end3 = 0;
}
let jur_AbstractCharClass$LazyRange__init_0 = ($this, var$1, var$2) => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
    $this.$start5 = var$1;
    $this.$end3 = var$2;
},
jur_AbstractCharClass$LazyRange__init_ = (var_0, var_1) => {
    let var_2 = new jur_AbstractCharClass$LazyRange();
    jur_AbstractCharClass$LazyRange__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_AbstractCharClass$LazyRange_computeValue = $this => {
    let $chCl;
    $chCl = (jur_CharClass__init_()).$add0($this.$start5, $this.$end3);
    return $chCl;
},
jur_AbstractCharClass$LazyXDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyXDigit__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyXDigit__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyXDigit();
    jur_AbstractCharClass$LazyXDigit__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyXDigit_computeValue = $this => {
    return (((jur_CharClass__init_()).$add0(48, 57)).$add0(97, 102)).$add0(65, 70);
};
function ju_LinkedList$Entry() {
    let a = this; jl_Object.call(a);
    a.$item = null;
    a.$next2 = null;
    a.$previous = null;
}
let ju_LinkedList$Entry__init_0 = $this => {
    jl_Object__init_($this);
},
ju_LinkedList$Entry__init_ = () => {
    let var_0 = new ju_LinkedList$Entry();
    ju_LinkedList$Entry__init_0(var_0);
    return var_0;
};
function jur_Matcher() {
    let a = this; jl_Object.call(a);
    a.$pat = null;
    a.$start4 = null;
    a.$string0 = null;
    a.$matchResult = null;
    a.$leftBound = 0;
    a.$rightBound = 0;
    a.$appendPos = 0;
    a.$replacement0 = null;
    a.$processedRepl = null;
    a.$replacementParts = null;
}
let jur_Matcher_appendReplacement = ($this, $buffer, $replacement) => {
    $this.$processedRepl = jur_Matcher_processReplacement($this, $replacement);
    $buffer.$append23($this.$string0.$subSequence($this.$appendPos, jur_Matcher_start($this)));
    $buffer.$append24($this.$processedRepl);
    $this.$appendPos = jur_Matcher_end($this);
    return $this;
},
jur_Matcher_processReplacement = ($this, $replacement) => {
    let $sb, $i, $repl, $res, $index, $replacementPos, $nextBackSlashed, var$9, var$10, var$11, $gr, $group, $$je;
    if ($this.$replacement0 !== null && $this.$replacement0.$equals($replacement)) {
        if ($this.$replacementParts === null)
            return $this.$processedRepl;
        $sb = jl_StringBuilder__init_();
        $i = 0;
        while ($i < $this.$replacementParts.$size()) {
            $sb.$append($this.$replacementParts.$get($i));
            $i = $i + 1 | 0;
        }
        return $sb.$toString();
    }
    $this.$replacement0 = $replacement;
    $repl = $replacement.$toCharArray();
    $res = jl_StringBuilder__init_();
    $this.$replacementParts = null;
    $index = 0;
    $replacementPos = 0;
    $nextBackSlashed = 0;
    a: {
        b: while (true) {
            var$9 = $repl.data;
            var$10 = var$9.length;
            if ($index >= var$10) {
                if ($this.$replacementParts !== null && $replacementPos != $res.$length())
                    $this.$replacementParts.$add2($res.$subSequence($replacementPos, $res.$length()));
                return $res.$toString();
            }
            if (var$9[$index] == 92 && !$nextBackSlashed) {
                $nextBackSlashed = 1;
                $index = $index + 1 | 0;
            }
            c: {
                if ($nextBackSlashed) {
                    if ($index >= var$10)
                        break b;
                    $res.$append0(var$9[$index]);
                    $nextBackSlashed = 0;
                } else if (var$9[$index] != 36)
                    $res.$append0(var$9[$index]);
                else {
                    if ($this.$replacementParts === null)
                        $this.$replacementParts = ju_ArrayList__init_();
                    d: {
                        try {
                            var$11 = new jl_String;
                            $index = $index + 1 | 0;
                            jl_String__init_3(var$11, $repl, $index, 1);
                            $gr = jl_Integer_parseInt(var$11);
                            if ($replacementPos == $res.$length())
                                break d;
                            $this.$replacementParts.$add2($res.$subSequence($replacementPos, $res.$length()));
                            $replacementPos = $res.$length();
                            break d;
                        } catch ($$e) {
                            $$je = $rt_wrapException($$e);
                            if ($$je instanceof jl_Exception) {
                                break a;
                            } else {
                                throw $$e;
                            }
                        }
                    }
                    try {
                        $this.$replacementParts.$add2(jur_Matcher$1__init_0($this, $gr));
                        $group = jur_Matcher_group($this, $gr);
                        $replacementPos = $replacementPos + $group.$length() | 0;
                        $res.$append13($group);
                        break c;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof jl_Exception) {
                            break a;
                        } else {
                            throw $$e;
                        }
                    }
                }
            }
            $index = $index + 1 | 0;
        }
        $rt_throw(jl_IndexOutOfBoundsException__init_());
    }
    $rt_throw(jl_IllegalArgumentException__init_0($rt_s(54)));
},
jur_Matcher_reset = $this => {
    $this.$leftBound = 0;
    $this.$rightBound = $this.$string0.$length();
    $this.$matchResult.$reset($this.$string0, $this.$leftBound, $this.$rightBound);
    $this.$appendPos = 0;
    $this.$replacement0 = null;
    $this.$matchResult.$previousMatch = (-1);
    return $this;
},
jur_Matcher_appendTail = ($this, $buffer) => {
    return $buffer.$append23($this.$string0.$subSequence($this.$appendPos, $this.$string0.$length()));
},
jur_Matcher_replaceAll = ($this, $replacement) => {
    let $sb;
    $sb = jl_StringBuffer__init_();
    jur_Matcher_reset($this);
    while (jur_Matcher_find0($this)) {
        jur_Matcher_appendReplacement($this, $sb, $replacement);
    }
    return (jur_Matcher_appendTail($this, $sb)).$toString();
},
jur_Matcher_group = ($this, $group) => {
    return $this.$matchResult.$group($group);
},
jur_Matcher_find = ($this, $start) => {
    let $stringLength, var$3;
    $stringLength = $this.$string0.$length();
    if ($start >= 0 && $start <= $stringLength) {
        var$3 = jur_Matcher_findAt($this, $start);
        if (var$3 >= 0 && $this.$matchResult.$isValid()) {
            $this.$matchResult.$finalizeMatch();
            return 1;
        }
        $this.$matchResult.$startIndex = (-1);
        return 0;
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_1(jl_String_valueOf0($start)));
},
jur_Matcher_findAt = ($this, $startIndex) => {
    let $foundIndex;
    $this.$matchResult.$reset1();
    $this.$matchResult.$setMode(1);
    $this.$matchResult.$setStartIndex($startIndex);
    $foundIndex = $this.$start4.$find($startIndex, $this.$string0, $this.$matchResult);
    if ($foundIndex == (-1))
        $this.$matchResult.$hitEnd = 1;
    return $foundIndex;
},
jur_Matcher_find0 = $this => {
    let $length, var$2;
    $length = $this.$string0.$length();
    if (!jur_Matcher_hasTransparentBounds($this))
        $length = $this.$rightBound;
    if ($this.$matchResult.$startIndex >= 0 && $this.$matchResult.$mode() == 1) {
        $this.$matchResult.$startIndex = $this.$matchResult.$end0();
        if ($this.$matchResult.$end0() == $this.$matchResult.$start0()) {
            var$2 = $this.$matchResult;
            var$2.$startIndex = var$2.$startIndex + 1 | 0;
        }
        return $this.$matchResult.$startIndex <= $length && jur_Matcher_find($this, $this.$matchResult.$startIndex) ? 1 : 0;
    }
    return jur_Matcher_find($this, $this.$leftBound);
},
jur_Matcher_start0 = ($this, $group) => {
    return $this.$matchResult.$start($group);
},
jur_Matcher_end0 = ($this, $group) => {
    return $this.$matchResult.$end($group);
},
jur_Matcher_start = $this => {
    return jur_Matcher_start0($this, 0);
},
jur_Matcher_end = $this => {
    return jur_Matcher_end0($this, 0);
},
jur_Matcher_hasTransparentBounds = $this => {
    return $this.$matchResult.$hasTransparentBounds();
},
jur_Matcher__init_ = ($this, $pat, $cs) => {
    let var$3, var$4, var$5, var$6, var$7;
    jl_Object__init_($this);
    $this.$leftBound = (-1);
    $this.$rightBound = (-1);
    $this.$pat = $pat;
    $this.$start4 = $pat.$start1;
    $this.$string0 = $cs;
    $this.$leftBound = 0;
    $this.$rightBound = $this.$string0.$length();
    var$3 = new jur_MatchResultImpl;
    var$4 = $this.$leftBound;
    var$5 = $this.$rightBound;
    var$6 = jur_Pattern_groupCount($pat);
    var$7 = jur_Pattern_compCount($pat);
    jur_MatchResultImpl__init_(var$3, $cs, var$4, var$5, var$6, var$7, jur_Pattern_consCount($pat), jur_Pattern_namedGroups($pat));
    $this.$matchResult = var$3;
    $this.$matchResult.$useAnchoringBounds(1);
},
jur_Matcher__init_0 = (var_0, var_1) => {
    let var_2 = new jur_Matcher();
    jur_Matcher__init_(var_2, var_0, var_1);
    return var_2;
},
jur_DotAllSet = $rt_classWithoutFields(jur_JointSet),
jur_DotAllSet__init_ = $this => {
    jur_JointSet__init_($this);
},
jur_DotAllSet__init_0 = () => {
    let var_0 = new jur_DotAllSet();
    jur_DotAllSet__init_(var_0);
    return var_0;
},
jur_DotAllSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, var$5, $high, var$7, $low;
    $strLength = $matchResult.$getRightBound();
    var$5 = $stringIndex + 1 | 0;
    if (var$5 > $strLength) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    $high = $testString.$charAt($stringIndex);
    if (jl_Character_isHighSurrogate($high)) {
        var$7 = $stringIndex + 2 | 0;
        if (var$7 <= $strLength) {
            $low = $testString.$charAt(var$5);
            if (jl_Character_isSurrogatePair($high, $low))
                return $this.$next1.$matches(var$7, $testString, $matchResult);
        }
    }
    return $this.$next1.$matches(var$5, $testString, $matchResult);
},
jur_DotAllSet_getName = $this => {
    return $rt_s(366);
},
jur_DotAllSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_DotAllSet_getType = $this => {
    return (-2147483602);
},
jur_DotAllSet_hasConsumed = ($this, $matchResult) => {
    return 1;
};
function jur_AbstractCharClass$LazyJavaLowerCase$1() {
    jur_AbstractCharClass.call(this);
    this.$this$037 = null;
}
let jur_AbstractCharClass$LazyJavaLowerCase$1__init_ = ($this, $this$0) => {
    $this.$this$037 = $this$0;
    jur_AbstractCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaLowerCase$1__init_0 = var_0 => {
    let var_1 = new jur_AbstractCharClass$LazyJavaLowerCase$1();
    jur_AbstractCharClass$LazyJavaLowerCase$1__init_(var_1, var_0);
    return var_1;
},
jur_AbstractCharClass$LazyJavaLowerCase$1_contains = ($this, $ch) => {
    return jl_Character_isLowerCase($ch);
},
jur_UCISupplRangeSet = $rt_classWithoutFields(jur_SupplRangeSet),
jur_UCISupplRangeSet__init_0 = ($this, $cc) => {
    jur_SupplRangeSet__init_($this, $cc);
},
jur_UCISupplRangeSet__init_ = var_0 => {
    let var_1 = new jur_UCISupplRangeSet();
    jur_UCISupplRangeSet__init_0(var_1, var_0);
    return var_1;
},
jur_UCISupplRangeSet_contains = ($this, $ch) => {
    return $this.$chars.$contains(jl_Character_toLowerCase0(jl_Character_toUpperCase0($ch)));
},
jur_UCISupplRangeSet_getName = $this => {
    let var$1, var$2, var$3;
    var$1 = !$this.$alt0 ? $rt_s(45) : $rt_s(46);
    var$2 = $this.$chars.$toString();
    var$3 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(260)), var$1), var$2);
    return jl_StringBuilder_toString(var$3);
},
jur_AbstractCharClass$LazyJavaUpperCase = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaUpperCase__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaUpperCase__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaUpperCase();
    jur_AbstractCharClass$LazyJavaUpperCase__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaUpperCase_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaUpperCase$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
};
function jur_HangulDecomposedCharSet() {
    let a = this; jur_JointSet.call(a);
    a.$decomposedChar = null;
    a.$decomposedCharUTF16 = null;
    a.$decomposedCharLength = 0;
}
let jur_HangulDecomposedCharSet__init_ = ($this, $decomposedChar, $decomposedCharLength) => {
    jur_JointSet__init_($this);
    $this.$decomposedChar = $decomposedChar;
    $this.$decomposedCharLength = $decomposedCharLength;
},
jur_HangulDecomposedCharSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_HangulDecomposedCharSet();
    jur_HangulDecomposedCharSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_HangulDecomposedCharSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_HangulDecomposedCharSet_getDecomposedChar = $this => {
    if ($this.$decomposedCharUTF16 === null)
        $this.$decomposedCharUTF16 = jl_String__init_($this.$decomposedChar);
    return $this.$decomposedCharUTF16;
},
jur_HangulDecomposedCharSet_getName = $this => {
    let var$1, var$2;
    var$1 = jur_HangulDecomposedCharSet_getDecomposedChar($this);
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(367)), var$1);
    return jl_StringBuilder_toString(var$2);
},
jur_HangulDecomposedCharSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $rightBound, $syllIndex, $decompSyllable, $vIndex, $tIndex, var$9, $curSymb, $decompCurSymb, var$12, $i, var$14, $lIndex, var$16, var$17;
    $rightBound = $matchResult.$getRightBound();
    $syllIndex = 0;
    $decompSyllable = $rt_createIntArray(3);
    $vIndex = (-1);
    $tIndex = (-1);
    if ($strIndex >= $rightBound)
        return (-1);
    var$9 = $strIndex + 1 | 0;
    $curSymb = $testString.$charAt($strIndex);
    $decompCurSymb = jur_Lexer_getHangulDecomposition($curSymb);
    if ($decompCurSymb !== null) {
        var$12 = $decompCurSymb.data;
        $i = 0;
        if (var$12.length != $this.$decomposedCharLength)
            return (-1);
        while (true) {
            if ($i >= $this.$decomposedCharLength)
                return $this.$next1.$matches(var$9, $testString, $matchResult);
            if (var$12[$i] != $this.$decomposedChar.data[$i])
                break;
            $i = $i + 1 | 0;
        }
        return (-1);
    }
    var$14 = $decompSyllable.data;
    var$14[$syllIndex] = $curSymb;
    $lIndex = $curSymb - 4352 | 0;
    if ($lIndex >= 0 && $lIndex < 19) {
        if (var$9 < $rightBound) {
            $curSymb = $testString.$charAt(var$9);
            $vIndex = $curSymb - 4449 | 0;
        }
        if ($vIndex >= 0 && $vIndex < 21) {
            var$16 = var$9 + 1 | 0;
            var$14[1] = $curSymb;
            if (var$16 < $rightBound) {
                $curSymb = $testString.$charAt(var$16);
                $tIndex = $curSymb - 4519 | 0;
            }
            if ($tIndex >= 0 && $tIndex < 28) {
                var$17 = var$16 + 1 | 0;
                var$14[2] = $curSymb;
                var$17 = $this.$decomposedCharLength == 3 && var$14[0] == $this.$decomposedChar.data[0] && var$14[1] == $this.$decomposedChar.data[1] && var$14[2] == $this.$decomposedChar.data[2] ? $this.$next1.$matches(var$17, $testString, $matchResult) : (-1);
                return var$17;
            }
            var$17 = $this.$decomposedCharLength == 2 && var$14[0] == $this.$decomposedChar.data[0] && var$14[1] == $this.$decomposedChar.data[1] ? $this.$next1.$matches(var$16, $testString, $matchResult) : (-1);
            return var$17;
        }
        return (-1);
    }
    return (-1);
},
jur_HangulDecomposedCharSet_first = ($this, $set) => {
    let var$2, var$3;
    a: {
        if ($set instanceof jur_HangulDecomposedCharSet) {
            var$2 = $set;
            if (!(jur_HangulDecomposedCharSet_getDecomposedChar(var$2)).$equals(jur_HangulDecomposedCharSet_getDecomposedChar($this))) {
                var$3 = 0;
                break a;
            }
        }
        var$3 = 1;
    }
    return var$3;
},
jur_HangulDecomposedCharSet_hasConsumed = ($this, $matchResult) => {
    return 1;
},
jur_AbstractCharClass$LazyPunct = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyPunct__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyPunct__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyPunct();
    jur_AbstractCharClass$LazyPunct__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyPunct_computeValue = $this => {
    return (((jur_CharClass__init_()).$add0(33, 64)).$add0(91, 96)).$add0(123, 126);
},
WebMain = $rt_classWithoutFields(),
WebMain_controller = null,
WebMain_model = null,
WebMain_lastTime = 0.0,
WebMain_accumulator = 0.0,
WebMain_$callClinit = () => {
    WebMain_$callClinit = $rt_eraseClinit(WebMain);
    WebMain__clinit_();
},
WebMain_main = $args => {
    WebMain_$callClinit();
    m_GameModel_initModel();
    WebMain_model = m_GameModel_getInstanceForView();
    v_WebGameView_initView(WebMain_model, WebMain$main$lambda$_2_0__init_0());
    c_GameController_initController(v_WebGameView_getInstance(), m_GameModel_getInstanceForController());
    WebMain_controller = c_GameController_getInstanceForMain();
},
WebMain_onImagesLoaded = () => {
    let var$1;
    WebMain_$callClinit();
    var$1 = WebMain$onImagesLoaded$lambda$_3_0__init_0();
    requestAnimationFrame(otji_JS_function(otji_JSWrapper_unwrap(var$1), "onAnimationFrame"));
},
WebMain_loop = $timestamp => {
    let $delta, $maxUpdatesPerFrame, $updates, $state, var$6;
    WebMain_$callClinit();
    if (WebMain_lastTime === 0.0)
        WebMain_lastTime = $timestamp;
    $delta = $timestamp - WebMain_lastTime;
    WebMain_lastTime = $timestamp;
    WebMain_accumulator = WebMain_accumulator + $delta;
    $maxUpdatesPerFrame = 5;
    $updates = 0;
    while (WebMain_accumulator >= 16.666666666666668 && $updates < $maxUpdatesPerFrame) {
        WebMain_controller.$updateModelOnly();
        WebMain_accumulator = WebMain_accumulator - 16.666666666666668;
        $updates = $updates + 1 | 0;
    }
    WebMain_controller.$renderView();
    $state = WebMain_model.$getState();
    s_GameState_$callClinit();
    window.galagaPlaying = !!($state !== s_GameState_PLAYING && $state !== s_GameState_LOADING_FIRST_STAGE && $state !== s_GameState_LOADING_NOT_FIRST_STAGE && $state !== s_GameState_LIFE_LOST ? 0 : 1);
    var$6 = WebMain$loop$lambda$_4_0__init_0();
    requestAnimationFrame(otji_JS_function(otji_JSWrapper_unwrap(var$6), "onAnimationFrame"));
},
WebMain__clinit_ = () => {
    WebMain_lastTime = 0.0;
    WebMain_accumulator = 0.0;
},
m_GameModel$1 = $rt_classWithoutFields(),
m_GameModel$1_$SwitchMap$shared$Entities = null,
m_GameModel$1_$callClinit = () => {
    m_GameModel$1_$callClinit = $rt_eraseClinit(m_GameModel$1);
    m_GameModel$1__clinit_();
},
m_GameModel$1__clinit_ = () => {
    m_GameModel$1_$SwitchMap$shared$Entities = $rt_createIntArray((s_Entities_values()).data.length);
    m_GameModel$1_$SwitchMap$shared$Entities.data[jl_Enum_ordinal(s_Entities_PLAYER)] = 1;
    m_GameModel$1_$SwitchMap$shared$Entities.data[jl_Enum_ordinal(s_Entities_PLAYER_SHOT)] = 2;
    m_GameModel$1_$SwitchMap$shared$Entities.data[jl_Enum_ordinal(s_Entities_ALIEN_SHOT)] = 3;
};
function m_AlienHandler() {
    let a = this; jl_Object.call(a);
    a.$numStage = 0;
    a.$numFormation = 0;
    a.$presentStageAliens = null;
    a.$presentFormationAliens = null;
    a.$formationOffset = 0;
    a.$isFormationOffsetGrowing = 0;
}
let m_AlienHandler__init_ = ($this, $model) => {
    jl_Object__init_($this);
    m_AlienFormationsLibrary_initFormations($model);
    $this.$presentFormationAliens = ju_ArrayList__init_();
    $this.$presentStageAliens = ju_ArrayList__init_();
    $this.$numStage = 1;
    $this.$numFormation = 0;
    $this.$formationOffset = 0;
    $this.$isFormationOffsetGrowing = 1;
},
m_AlienHandler__init_0 = var_0 => {
    let var_1 = new m_AlienHandler();
    m_AlienHandler__init_(var_1, var_0);
    return var_1;
},
m_AlienHandler_nextStage = $this => {
    $this.$numStage = $this.$numStage + 1 | 0;
    $this.$numFormation = 0;
    $this.$presentStageAliens = ju_ArrayList__init_();
    $this.$presentFormationAliens = ju_ArrayList__init_();
},
m_AlienHandler_updateHandlerAndGetNewAliens = ($this, $frameNumber) => {
    let $newAliens, var$3, $a;
    $newAliens = ju_ArrayList__init_();
    if ($this.$isFormationOffsetGrowing && !($frameNumber % (c_GameController_getFramePerSeconds() / 15 | 0) | 0)) {
        $this.$formationOffset = $this.$formationOffset + 1 | 0;
        if ($this.$formationOffset >= 30)
            $this.$isFormationOffsetGrowing = 0;
    } else if (!$this.$isFormationOffsetGrowing && !($frameNumber % (c_GameController_getFramePerSeconds() / 15 | 0) | 0)) {
        $this.$formationOffset = $this.$formationOffset - 1 | 0;
        if ($this.$formationOffset <= (-30))
            $this.$isFormationOffsetGrowing = 1;
    }
    var$3 = $this.$presentStageAliens.$iterator();
    while (var$3.$hasNext()) {
        $a = var$3.$next();
        $a.$updateOffset($this.$formationOffset);
    }
    if (!$this.$numFormation) {
        $this.$numFormation = $this.$numFormation + 1 | 0;
        if (m_AlienFormationsLibrary_isValidFormation($this.$numStage, $this.$numFormation)) {
            $this.$presentFormationAliens = m_AlienFormationsLibrary_getFormationCopy($this.$numStage, $this.$numFormation);
            $newAliens = $this.$presentFormationAliens;
            $this.$presentStageAliens.$addAll($newAliens);
        }
    } else if ($this.$isFormationCompleted()) {
        if ($this.$isStageCompleted())
            m_AlienHandler_nextStage($this);
        else {
            $this.$numFormation = $this.$numFormation + 1 | 0;
            if (m_AlienFormationsLibrary_isValidFormation($this.$numStage, $this.$numFormation)) {
                $this.$presentFormationAliens = m_AlienFormationsLibrary_getFormationCopy($this.$numStage, $this.$numFormation);
                $newAliens = $this.$presentFormationAliens;
                $this.$presentStageAliens.$addAll($newAliens);
            }
        }
    }
    return $newAliens;
},
m_AlienHandler_isFormationCompleted = $this => {
    let $isCompleted, var$2, $alien;
    $isCompleted = 1;
    var$2 = $this.$presentFormationAliens.$iterator();
    while (var$2.$hasNext()) {
        $alien = var$2.$next();
        if ($alien.$isAttacking() && !($alien.$getPathCopy()).$isEmpty() && !$alien.$isToRemove())
            return 0;
    }
    return $isCompleted;
},
m_AlienHandler_isStageCompleted = $this => {
    let $isCompleted, var$2, $alien;
    $isCompleted = 1;
    var$2 = $this.$presentStageAliens.$iterator();
    while (true) {
        if (!var$2.$hasNext()) {
            if ($this.$numFormation >= 5)
                return $isCompleted;
            return 0;
        }
        $alien = var$2.$next();
        if (!$alien.$isToRemove())
            break;
    }
    return 0;
},
m_AlienHandler_AreAllStageAlienPathsEmpty = $this => {
    let $temp, var$2, $a;
    $temp = 1;
    var$2 = $this.$presentStageAliens.$iterator();
    while (var$2.$hasNext()) {
        $a = var$2.$next();
        if (!$a.$isPathEmpty() && !$a.$isToRemove())
            $temp = 0;
    }
    return $temp;
},
m_AlienHandler_getNumStage = $this => {
    return $this.$numStage;
};
function ju_AbstractList$SubAbstractList$SubAbstractListIterator() {
    let a = this; jl_Object.call(a);
    a.$subList0 = null;
    a.$iterator0 = null;
    a.$start3 = 0;
    a.$end1 = 0;
}
let ju_AbstractList$SubAbstractList$SubAbstractListIterator__init_ = ($this, $it, $list, $offset, $length) => {
    jl_Object__init_($this);
    $this.$iterator0 = $it;
    $this.$subList0 = $list;
    $this.$start3 = $offset;
    $this.$end1 = $this.$start3 + $length | 0;
},
ju_AbstractList$SubAbstractList$SubAbstractListIterator__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new ju_AbstractList$SubAbstractList$SubAbstractListIterator();
    ju_AbstractList$SubAbstractList$SubAbstractListIterator__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
ju_AbstractList$SubAbstractList$SubAbstractListIterator_hasNext = $this => {
    return $this.$iterator0.$nextIndex() >= $this.$end1 ? 0 : 1;
},
ju_AbstractList$SubAbstractList$SubAbstractListIterator_next = $this => {
    if ($this.$iterator0.$nextIndex() >= $this.$end1)
        $rt_throw(ju_NoSuchElementException__init_());
    return $this.$iterator0.$next();
};
function jur_WordBoundary() {
    jur_AbstractSet.call(this);
    this.$positive = 0;
}
let jur_WordBoundary__init_0 = ($this, $positive) => {
    jur_AbstractSet__init_($this);
    $this.$positive = $positive;
},
jur_WordBoundary__init_ = var_0 => {
    let var_1 = new jur_WordBoundary();
    jur_WordBoundary__init_0(var_1, var_0);
    return var_1;
},
jur_WordBoundary_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $ch1, $ch2, $leftBound, $left, $right;
    $ch1 = $stringIndex < $matchResult.$getRightBound() ? $testString.$charAt($stringIndex) : 32;
    $ch2 = !$stringIndex ? 32 : $testString.$charAt($stringIndex - 1 | 0);
    $leftBound = !$matchResult.$hasTransparentBounds() ? $matchResult.$getLeftBound() : 0;
    $left = $ch1 != 32 && !jur_WordBoundary_isSpace($this, $ch1, $stringIndex, $leftBound, $testString) ? 0 : 1;
    $right = $ch2 != 32 && !jur_WordBoundary_isSpace($this, $ch2, $stringIndex - 1 | 0, $leftBound, $testString) ? 0 : 1;
    return $left ^ $right ^ $this.$positive ? (-1) : $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_WordBoundary_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_WordBoundary_getName = $this => {
    return $rt_s(368);
},
jur_WordBoundary_isSpace = ($this, $ch, $index, $leftBound, $testString) => {
    let var$5;
    if (!jl_Character_isLetterOrDigit0($ch) && $ch != 95) {
        a: {
            if (jl_Character_getType0($ch) == 6)
                while (true) {
                    $index = $index + (-1) | 0;
                    if ($index < $leftBound)
                        break a;
                    var$5 = $testString.$charAt($index);
                    if (jl_Character_isLetterOrDigit0(var$5))
                        return 0;
                    if (jl_Character_getType0(var$5) != 6)
                        return 1;
                }
        }
        return 1;
    }
    return 0;
},
jl_SystemClassLoader = $rt_classWithoutFields(jl_ClassLoader),
jl_SystemClassLoader__init_ = $this => {
    jl_ClassLoader__init_0($this);
},
jl_SystemClassLoader__init_0 = () => {
    let var_0 = new jl_SystemClassLoader();
    jl_SystemClassLoader__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazySpace = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazySpace__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazySpace__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazySpace();
    jur_AbstractCharClass$LazySpace__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazySpace_computeValue = $this => {
    return ((jur_CharClass__init_()).$add0(9, 13)).$add(32);
},
jl_Double = $rt_classWithoutFields(jl_Number),
jl_Double_TYPE = null,
jl_Double_$callClinit = () => {
    jl_Double_$callClinit = $rt_eraseClinit(jl_Double);
    jl_Double__clinit_();
},
jl_Double_isInfinite = $v => {
    jl_Double_$callClinit();
    return !(isFinite($v) ? 1 : 0) && !(isNaN($v) ? 1 : 0) ? 1 : 0;
},
jl_Double_doubleToLongBits = $value => {
    jl_Double_$callClinit();
    if (!(isNaN($value) ? 1 : 0))
        return $rt_doubleToRawLongBits($value);
    return Long_create(0, 2146959360);
},
jl_Double__clinit_ = () => {
    jl_Double_TYPE = $rt_cls($rt_doublecls);
},
m_AlienFormationsLibrary = $rt_classWithoutFields(),
m_AlienFormationsLibrary_stageList = null,
m_AlienFormationsLibrary_$callClinit = () => {
    m_AlienFormationsLibrary_$callClinit = $rt_eraseClinit(m_AlienFormationsLibrary);
    m_AlienFormationsLibrary__clinit_();
},
m_AlienFormationsLibrary_initFormations = $model => {
    let $buffRead, var$3, var$4, $is, var$6, $nStage, $mFormation, $kAlien, $n, $stageNToFill, $m, $formationMToFill, var$14, $typeStr, $type, $startPosStr, $finalPosStr, $directionsStr, $pixelsStr, $finalCoords, var$22, $finalX, $finalY, $startCoords, $startX, $startY, $directionsStringsArray, $directionsArray, $i, var$31, $pixelsStrings, var$33, $pixelsArray, $pointsList, $j, $alienIndexToCopy, $tempList, $lastX, $lastY, $POINTS_TO_CALCULATE_WITH_OFFSET, var$42, var$43, $maxDistance, $dxPerFrame, $dyPerFrame,
    var$47, $formationPoint, $ioe, $$je;
    m_AlienFormationsLibrary_$callClinit();
    $buffRead = null;
    a: {
        b: {
            c: {
                try {
                    var$3 = $buffRead;
                    var$4 = $buffRead;
                    $is = (jl_Class_getClassLoader($rt_cls(m_AlienFormationsLibrary))).$getResourceAsStream($rt_s(369));
                    if ($is === null) {
                        var$3 = $buffRead;
                        var$4 = $buffRead;
                        $rt_throw(ji_IOException__init_2($rt_s(370)));
                    }
                    var$3 = $buffRead;
                    var$4 = $buffRead;
                    var$6 = new ji_BufferedReader;
                    var$4 = var$6;
                    var$3 = var$6;
                    ji_BufferedReader__init_0(var$6, ji_InputStreamReader__init_2($is, $rt_s(371)));
                    $nStage = (-1);
                    $mFormation = (-1);
                    $kAlien = (-1);
                    $n = 1;
                    while (true) {
                        var$3 = var$6;
                        var$4 = var$6;
                        if ($n > 3)
                            break;
                        var$3 = var$6;
                        var$4 = var$6;
                        $stageNToFill = m_AlienFormationsLibrary$StagePaths__init_0(ju_ArrayList__init_());
                        $m = 1;
                        while (true) {
                            var$3 = var$6;
                            var$4 = var$6;
                            if ($m > 5)
                                break;
                            var$3 = var$6;
                            var$4 = var$6;
                            $formationMToFill = m_AlienFormationsLibrary$FormationPaths__init_0(ju_ArrayList__init_());
                            (m_AlienFormationsLibrary$StagePaths_formationsList($stageNToFill)).$add2($formationMToFill);
                            $m = $m + 1 | 0;
                        }
                        var$3 = var$6;
                        var$4 = var$6;
                        m_AlienFormationsLibrary_stageList.$add2($stageNToFill);
                        $n = $n + 1 | 0;
                    }
                    d: {
                        while (true) {
                            var$3 = var$6;
                            var$4 = var$6;
                            var$14 = var$6.$readLine();
                            if (var$14 === null)
                                break d;
                            var$3 = var$6;
                            var$4 = var$6;
                            if ($nStage > 3)
                                break d;
                            var$3 = var$6;
                            var$4 = var$6;
                            if ($mFormation > 5)
                                break d;
                            var$3 = var$6;
                            var$4 = var$6;
                            if ($kAlien > 8)
                                break d;
                            var$3 = var$6;
                            var$4 = var$6;
                            var$14 = var$14.$trim();
                            if (var$14.$isEmpty()) {
                                var$3 = var$6;
                                var$4 = var$6;
                                continue;
                            }
                            var$3 = var$6;
                            var$4 = var$6;
                            if (var$14.$startsWith1($rt_s(372)))
                                break;
                            var$3 = var$6;
                            var$4 = var$6;
                            if (var$14.$startsWith1($rt_s(373))) {
                                var$3 = var$6;
                                var$4 = var$6;
                                $nStage = $nStage + 1 | 0;
                                $mFormation = (-1);
                                continue;
                            }
                            var$3 = var$6;
                            var$4 = var$6;
                            if (var$14.$startsWith1($rt_s(374))) {
                                var$3 = var$6;
                                var$4 = var$6;
                                $mFormation = $mFormation + 1 | 0;
                                $kAlien = (-1);
                                continue;
                            }
                            var$3 = var$6;
                            var$4 = var$6;
                            if (!var$14.$startsWith1($rt_s(375)))
                                continue;
                            var$3 = var$6;
                            var$4 = var$6;
                            $kAlien = $kAlien + 1 | 0;
                            $typeStr = (var$14.$substring(1, var$14.$indexOf3($rt_s(45)))).$toUpperCase();
                            if ($typeStr.$contains0($rt_s(376))) {
                                var$3 = var$6;
                                var$4 = var$6;
                                break d;
                            }
                            e: {
                                var$3 = var$6;
                                var$4 = var$6;
                                $type = s_Entities_valueOf($typeStr);
                                $startPosStr = ((var$6.$readLine()).$trim()).$replaceAll0($rt_s(377), $rt_s(54));
                                $finalPosStr = ((var$6.$readLine()).$trim()).$replaceAll0($rt_s(377), $rt_s(54));
                                $directionsStr = ((var$6.$readLine()).$trim()).$replaceAll0($rt_s(377), $rt_s(54));
                                $pixelsStr = ((var$6.$readLine()).$trim()).$replaceAll0($rt_s(377), $rt_s(54));
                                $finalCoords = $finalPosStr.$split1($rt_s(378));
                                var$22 = $finalCoords.data;
                                $finalX = jl_Integer_parseInt(var$22[0]) - (s_Entities_getWidth($type) / 2 | 0) | 0;
                                $finalY = jl_Integer_parseInt(var$22[1]) - (s_Entities_getHeight($type) / 2 | 0) | 0;
                                $startCoords = $startPosStr.$split1($rt_s(378));
                                var$22 = $startCoords.data;
                                $startX = jl_Integer_parseInt(var$22[0]) - (s_Entities_getWidth($type) / 2 | 0) | 0;
                                $startY = jl_Integer_parseInt(var$22[1]) - (s_Entities_getHeight($type) / 2 | 0) | 0;
                                $directionsStringsArray = $directionsStr.$split1($rt_s(378));
                                var$22 = $directionsStringsArray.data;
                                if (!(var$22[0].$toUpperCase()).$equals($rt_s(379))) {
                                    var$3 = var$6;
                                    var$4 = var$6;
                                    if (!(var$22[0].$toUpperCase()).$equals($rt_s(380))) {
                                        var$3 = var$6;
                                        var$4 = var$6;
                                        $directionsArray = $rt_createArray(m_AlienFormationsLibrary$Direction, var$22.length);
                                        $i = 0;
                                        while (true) {
                                            var$3 = var$6;
                                            var$4 = var$6;
                                            var$31 = $directionsArray.data;
                                            if ($i >= var$31.length)
                                                break;
                                            var$3 = var$6;
                                            var$4 = var$6;
                                            var$31[$i] = m_AlienFormationsLibrary$Direction_valueOf(var$22[$i]);
                                            $i = $i + 1 | 0;
                                        }
                                        var$3 = var$6;
                                        var$4 = var$6;
                                        $pixelsStrings = $pixelsStr.$split1($rt_s(378));
                                        var$22 = $pixelsStrings.data;
                                        var$33 = var$22.length;
                                        $pixelsArray = $rt_createIntArray(var$33);
                                        $i = 0;
                                        while (true) {
                                            var$3 = var$6;
                                            var$4 = var$6;
                                            if ($i >= var$33)
                                                break;
                                            var$3 = var$6;
                                            var$4 = var$6;
                                            $pixelsArray.data[$i] = jl_Integer_parseInt(var$22[$i]);
                                            $i = $i + 1 | 0;
                                        }
                                        var$3 = var$6;
                                        var$4 = var$6;
                                        $pointsList = ju_LinkedList__init_0();
                                        $pointsList.$add2(md_PointOfPath__init_($startX, $startY));
                                        $i = 0;
                                        while (true) {
                                            var$3 = var$6;
                                            var$4 = var$6;
                                            var$22 = $pixelsArray.data;
                                            if ($i >= var$22.length)
                                                break;
                                            var$3 = var$6;
                                            var$4 = var$6;
                                            $j = 0;
                                            while (true) {
                                                var$3 = var$6;
                                                var$4 = var$6;
                                                if ($j >= var$22[$i])
                                                    break;
                                                var$3 = var$6;
                                                var$4 = var$6;
                                                $startX = $startX + m_AlienFormationsLibrary$Direction_getDx(var$31[$i]) | 0;
                                                $startY = $startY + m_AlienFormationsLibrary$Direction_getDy(var$31[$i]) | 0;
                                                $pointsList.$add2(md_PointOfPath__init_($startX, $startY));
                                                $j = $j + 1 | 0;
                                            }
                                            var$3 = var$6;
                                            var$4 = var$6;
                                            $i = $i + 1 | 0;
                                        }
                                        break e;
                                    }
                                }
                                var$3 = var$6;
                                var$4 = var$6;
                                $alienIndexToCopy = jl_Integer_parseInt($pixelsStr) - 1 | 0;
                                $pointsList = m_AlienFormationsLibrary_copyAlienPathWithOffset((((m_AlienFormationsLibrary_stageList.$get($nStage)).$formationsList0.$get($mFormation)).$alienList0.$get($alienIndexToCopy)).$copyAlien(), var$22[0].$toUpperCase());
                            }
                            var$3 = var$6;
                            var$4 = var$6;
                            $tempList = ju_ArrayList__init_0($pointsList);
                            $lastX = md_PointOfPath_x($tempList.$get($tempList.$size() - 1 | 0)) | 0;
                            $lastY = md_PointOfPath_y($tempList.$get($tempList.$size() - 1 | 0)) | 0;
                            $POINTS_TO_CALCULATE_WITH_OFFSET = 0;
                            var$33 = $finalY - $lastY | 0;
                            var$42 = jl_Math_abs(var$33);
                            var$43 = $finalX - $lastX | 0;
                            $maxDistance = jl_Math_max(var$42, jl_Math_abs(var$43));
                            $dxPerFrame = var$43 / $maxDistance;
                            $dyPerFrame = var$33 / $maxDistance;
                            if ($maxDistance > 0.0) {
                                var$3 = var$6;
                                var$4 = var$6;
                                $i = 1;
                                while (true) {
                                    var$3 = var$6;
                                    var$4 = var$6;
                                    var$47 = $i;
                                    if (!(var$47 <= $maxDistance))
                                        break;
                                    var$3 = var$6;
                                    var$4 = var$6;
                                    $pointsList.$add2(md_PointOfPath__init_($lastX + $dxPerFrame * var$47 | 0, $lastY + $dyPerFrame * var$47 | 0));
                                    $POINTS_TO_CALCULATE_WITH_OFFSET = $POINTS_TO_CALCULATE_WITH_OFFSET + 1 | 0;
                                    $i = $i + 1 | 0;
                                }
                            }
                            f: {
                                var$3 = var$6;
                                var$4 = var$6;
                                $formationPoint = md_PointOfPath__init_($finalX, $finalY);
                                m_AlienFormationsLibrary$1_$callClinit();
                                switch (m_AlienFormationsLibrary$1_$SwitchMap$shared$Entities.data[jl_Enum_ordinal($type)]) {
                                    case 1:
                                        break;
                                    case 2:
                                        var$3 = var$6;
                                        var$4 = var$6;
                                        (m_AlienFormationsLibrary$FormationPaths_alienList((m_AlienFormationsLibrary$StagePaths_formationsList(m_AlienFormationsLibrary_stageList.$get($nStage))).$get($mFormation))).$add2(me_Zako__init_0(2, $model.$getBounds(), $pointsList, $POINTS_TO_CALCULATE_WITH_OFFSET, $formationPoint));
                                        break f;
                                    case 3:
                                        var$3 = var$6;
                                        var$4 = var$6;
                                        (m_AlienFormationsLibrary$FormationPaths_alienList((m_AlienFormationsLibrary$StagePaths_formationsList(m_AlienFormationsLibrary_stageList.$get($nStage))).$get($mFormation))).$add2(me_BossGalaga__init_(2, $model.$getBounds(), $pointsList, $POINTS_TO_CALCULATE_WITH_OFFSET, $formationPoint));
                                        break f;
                                    default:
                                        break f;
                                }
                                var$3 = var$6;
                                var$4 = var$6;
                                (m_AlienFormationsLibrary$FormationPaths_alienList((m_AlienFormationsLibrary$StagePaths_formationsList(m_AlienFormationsLibrary_stageList.$get($nStage))).$get($mFormation))).$add2(me_Goei__init_0(2, $model.$getBounds(), $pointsList, $POINTS_TO_CALCULATE_WITH_OFFSET, $formationPoint));
                            }
                            var$3 = var$6;
                            var$4 = var$6;
                        }
                        var$3 = var$6;
                        var$4 = var$6;
                    }
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof ji_IOException) {
                        $ioe = $$je;
                        break c;
                    } else{
                        var$14 = $$je;
                        break a;
                    }
                }
                g: {
                    try {
                        if (var$6 === null)
                            break g;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof ji_IOException) {
                            $ioe = $$je;
                            break c;
                        } else{
                            var$14 = $$je;
                            break a;
                        }
                    }
                    try {
                        var$6.$close();
                        break g;
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof ji_IOException) {
                            $ioe = $$je;
                            $ioe.$printStackTrace0();
                            break b;
                        } else {
                            throw $$e;
                        }
                    }
                }
                break b;
            }
            try {
                var$3 = var$4;
                $ioe.$printStackTrace0();
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                var$14 = $$je;
                break a;

            }
            h: {
                try {
                    if (var$4 === null)
                        break h;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    var$14 = $$je;
                    break a;

                }
                try {
                    var$4.$close();
                    break h;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof ji_IOException) {
                        $ioe = $$je;
                        $ioe.$printStackTrace0();
                        break b;
                    } else {
                        throw $$e;
                    }
                }
            }
        }
        return;
    }
    i: {
        try {
            if (var$3 !== null)
                var$3.$close();
            break i;
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof ji_IOException) {
                $ioe = $$je;
                $ioe.$printStackTrace0();
                break i;
            } else {
                throw $$e;
            }
        }
    }
    $rt_throw(var$14);
},
m_AlienFormationsLibrary_getFormationCopy = ($numStage, $numFormation) => {
    let $formationCopy, var$4, var$5, $a;
    m_AlienFormationsLibrary_$callClinit();
    $formationCopy = ju_ArrayList__init_();
    if (!m_AlienFormationsLibrary_isValidFormation($numStage, $numFormation))
        $rt_throw(jl_IllegalStateException__init_0($rt_s(381)));
    var$4 = $rt_compare($numStage, 3);
    if (var$4 < 0)
        $numStage = $numStage + (-1) | 0;
    else if (!var$4)
        $numStage = 3;
    else if (!($numStage % 4 | 0))
        $numStage = 2;
    else if (!(($numStage - 1 | 0) % 4 | 0))
        $numStage = 1;
    else if (!(($numStage - 2 | 0) % 4 | 0))
        $numStage = 0;
    else if (!(($numStage - 3 | 0) % 4 | 0))
        $numStage = 3;
    var$4 = $numFormation + (-1) | 0;
    var$5 = (m_AlienFormationsLibrary$FormationPaths_alienList((m_AlienFormationsLibrary$StagePaths_formationsList(m_AlienFormationsLibrary_stageList.$get($numStage))).$get(var$4))).$iterator();
    while (var$5.$hasNext()) {
        $a = var$5.$next();
        $formationCopy.$add2($a.$copyAlien());
    }
    return $formationCopy;
},
m_AlienFormationsLibrary_isValidFormation = ($numStage, $numFormation) => {
    let $isValidFormation, $isValidStage, var$5;
    m_AlienFormationsLibrary_$callClinit();
    $isValidFormation = 0;
    if ($numFormation <= 5 && $numFormation >= 1)
        $isValidFormation = 1;
    a: {
        $isValidStage = 0;
        if ($numStage > 0) {
            var$5 = $rt_compare($numStage, 3);
            if (var$5 <= 0 && var$5 < 0) {
                $isValidStage = 1;
                break a;
            }
        }
        if (!(($numStage - 2 | 0) % 4 | 0))
            $isValidStage = 1;
        if (!(($numStage - 4 | 0) % 4 | 0))
            $isValidStage = 1;
        if (!(($numStage - 1 | 0) % 4 | 0))
            $isValidStage = 1;
        if ($numStage == 3)
            $isValidStage = 0;
    }
    return $isValidFormation && $isValidStage ? 1 : 0;
},
m_AlienFormationsLibrary_copyAlienPathWithOffset = ($a, $side) => {
    let $pointsList, $newPath, $arrayList, $angle, $i, $startI, $endI, $startP, $endP, $dx, $dy, $pathAngle, $offsetAngle, $currentP, $newX, $newY, $newPoint;
    m_AlienFormationsLibrary_$callClinit();
    $pointsList = $a.$getPathCopy();
    $newPath = ju_LinkedList__init_0();
    $arrayList = (ju_ArrayList__init_0($pointsList)).$subList(0, ($pointsList.$size() - $a.$getPointsToCalculateWithOffset() | 0) - 1 | 0);
    if (($side.$toUpperCase()).$equals($rt_s(379)))
        $angle = 90;
    else {
        if (!($side.$toUpperCase()).$equals($rt_s(380)))
            $rt_throw(jl_IllegalArgumentException__init_0($rt_s(382)));
        $angle = 270;
    }
    $i = 0;
    while ($i < $arrayList.$size()) {
        $startI = jl_Math_max(0, $i - 10 | 0);
        $endI = jl_Math_min($arrayList.$size() - 1 | 0, $i + 10 | 0);
        $startP = $arrayList.$get($startI);
        $endP = $arrayList.$get($endI);
        $dx = md_PointOfPath_x($endP) - md_PointOfPath_x($startP);
        $dy = md_PointOfPath_y($endP) - md_PointOfPath_y($startP);
        $pathAngle = jl_Math_atan2($dy, $dx);
        $offsetAngle = $pathAngle + jl_Math_toRadians($angle);
        $currentP = $arrayList.$get($i);
        $newX = Long_lo((jl_Math_round(md_PointOfPath_x($currentP) + 16.0 * jl_Math_cos($offsetAngle))));
        $newY = Long_lo((jl_Math_round(md_PointOfPath_y($currentP) + 16.0 * jl_Math_sin($offsetAngle))));
        $newPoint = md_PointOfPath__init_($newX, $newY);
        $newPath.$add2($newPoint);
        $i = $i + 1 | 0;
    }
    return $newPath;
},
m_AlienFormationsLibrary__clinit_ = () => {
    m_AlienFormationsLibrary_stageList = ju_ArrayList__init_();
};
function me_BossGalaga() {
    let a = this; me_Alien.call(a);
    a.$SCORE_VALUE1 = 150;
    a.$SCORE_VALUE_CHARGING1 = 400;
}
let me_BossGalaga__init_0 = ($this, $speed, $bounds, $path, $POINTS_TO_CALCULATE_WITH_OFFSET, $formationPoint) => {
    let var$6, var$7;
    s_Entities_$callClinit();
    var$6 = s_Entities_getWidth(s_Entities_BOSS_GALAGA);
    var$7 = s_Entities_getHeight(s_Entities_BOSS_GALAGA);
    s_RotationDirection_$callClinit();
    me_Alien__init_($this, var$6, var$7, $speed, $bounds, $path, 0, s_RotationDirection_D, $POINTS_TO_CALCULATE_WITH_OFFSET, $formationPoint);
    $this.$SCORE_VALUE1 = 150;
    $this.$SCORE_VALUE_CHARGING1 = 400;
    $this.$entityName = s_Entities_BOSS_GALAGA;
},
me_BossGalaga__init_ = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new me_BossGalaga();
    me_BossGalaga__init_0(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
me_BossGalaga_copyAlien = $this => {
    let $newPath;
    $newPath = ju_LinkedList__init_($this.$path);
    return me_BossGalaga__init_($this.$speed, $this.$bounds, $newPath, $this.$POINTS_TO_CALCULATE_WITH_OFFSET, $this.$formationPoint);
},
me_BossGalaga_update = ($this, $frameNumber) => {
    me_Alien_update($this, $frameNumber);
    if ($this.$isOneShot) {
        s_Entities_$callClinit();
        $this.$entityName = s_Entities_BOSS_GALAGA_ONE_SHOT;
    }
},
me_BossGalaga_getScoreValue = $this => {
    if (!$this.$isAttacking0)
        return 150;
    return 400;
};
function ju_LinkedList$SequentialListIterator() {
    let a = this; jl_Object.call(a);
    a.$nextEntry = null;
    a.$prevEntry = null;
    a.$currentEntry = null;
    a.$index2 = 0;
    a.$version = 0;
    a.$this$0 = null;
}
let ju_LinkedList$SequentialListIterator__init_0 = ($this, var$1, $nextEntry, $prevEntry, $index) => {
    $this.$this$0 = var$1;
    jl_Object__init_($this);
    $this.$version = $this.$this$0.$modCount;
    $this.$nextEntry = $nextEntry;
    $this.$prevEntry = $prevEntry;
    $this.$index2 = $index;
},
ju_LinkedList$SequentialListIterator__init_ = (var_0, var_1, var_2, var_3) => {
    let var_4 = new ju_LinkedList$SequentialListIterator();
    ju_LinkedList$SequentialListIterator__init_0(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
ju_LinkedList$SequentialListIterator_hasNext = $this => {
    return $this.$nextEntry === null ? 0 : 1;
},
ju_LinkedList$SequentialListIterator_next = $this => {
    let $result;
    ju_LinkedList$SequentialListIterator_checkConcurrentModification($this);
    if ($this.$nextEntry === null)
        $rt_throw(ju_NoSuchElementException__init_());
    $result = $this.$nextEntry.$item;
    $this.$currentEntry = $this.$nextEntry;
    $this.$prevEntry = $this.$nextEntry;
    $this.$nextEntry = $this.$nextEntry.$next2;
    $this.$index2 = $this.$index2 + 1 | 0;
    return $result;
},
ju_LinkedList$SequentialListIterator_remove = $this => {
    if ($this.$currentEntry === null)
        $rt_throw(jl_IllegalStateException__init_());
    ju_LinkedList_removeEntry($this.$this$0, $this.$currentEntry);
    if ($this.$currentEntry === $this.$prevEntry) {
        $this.$prevEntry = !$this.$hasNext() ? null : $this.$nextEntry.$previous;
        $this.$index2 = $this.$index2 - 1 | 0;
    } else if ($this.$currentEntry === $this.$nextEntry)
        $this.$nextEntry = !$this.$hasPrevious() ? null : $this.$prevEntry.$next2;
    $this.$version = $this.$this$0.$modCount;
    $this.$currentEntry = null;
},
ju_LinkedList$SequentialListIterator_hasPrevious = $this => {
    return $this.$prevEntry === null ? 0 : 1;
},
ju_LinkedList$SequentialListIterator_add = ($this, $e) => {
    let $newEntry, var$3;
    ju_LinkedList$SequentialListIterator_checkConcurrentModification($this);
    $newEntry = ju_LinkedList$Entry__init_();
    $newEntry.$item = $e;
    $newEntry.$previous = $this.$prevEntry;
    $newEntry.$next2 = $this.$nextEntry;
    if ($this.$prevEntry === null)
        $this.$this$0.$firstEntry = $newEntry;
    else
        $this.$prevEntry.$next2 = $newEntry;
    if ($this.$nextEntry === null)
        $this.$this$0.$lastEntry = $newEntry;
    else
        $this.$nextEntry.$previous = $newEntry;
    $this.$prevEntry = $newEntry;
    var$3 = $this.$this$0;
    var$3.$size1 = var$3.$size1 + 1 | 0;
    var$3 = $this.$this$0;
    var$3.$modCount = var$3.$modCount + 1 | 0;
    $this.$version = $this.$this$0.$modCount;
    $this.$currentEntry = null;
},
ju_LinkedList$SequentialListIterator_checkConcurrentModification = $this => {
    if ($this.$version >= $this.$this$0.$modCount)
        return;
    $rt_throw(ju_ConcurrentModificationException__init_());
},
jur_IntHash = $rt_classWithoutFields(),
jl_NegativeArraySizeException = $rt_classWithoutFields(jl_RuntimeException),
jl_NegativeArraySizeException__init_ = $this => {
    jl_RuntimeException__init_($this);
},
jl_NegativeArraySizeException__init_0 = () => {
    let var_0 = new jl_NegativeArraySizeException();
    jl_NegativeArraySizeException__init_(var_0);
    return var_0;
},
jur_ReluctantAltQuantifierSet = $rt_classWithoutFields(jur_AltQuantifierSet),
jur_ReluctantAltQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_AltQuantifierSet__init_($this, $innerSet, $next, $type);
},
jur_ReluctantAltQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_ReluctantAltQuantifierSet();
    jur_ReluctantAltQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_ReluctantAltQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $shift;
    $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($shift >= 0)
        return $shift;
    return $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
},
jur_AbstractCharClass$LazyJavaWhitespace = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaWhitespace__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaWhitespace__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaWhitespace();
    jur_AbstractCharClass$LazyJavaWhitespace__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaWhitespace_computeValue = $this => {
    return jur_AbstractCharClass$LazyJavaWhitespace$1__init_0($this);
};
function jur_Matcher$1() {
    let a = this; jl_Object.call(a);
    a.$grN = 0;
    a.$val$gr = 0;
    a.$this$07 = null;
}
let jur_Matcher$1__init_ = ($this, $this$0, var$2) => {
    $this.$this$07 = $this$0;
    $this.$val$gr = var$2;
    jl_Object__init_($this);
    $this.$grN = $this.$val$gr;
},
jur_Matcher$1__init_0 = (var_0, var_1) => {
    let var_2 = new jur_Matcher$1();
    jur_Matcher$1__init_(var_2, var_0, var_1);
    return var_2;
},
jur_Matcher$1_toString = $this => {
    return jur_Matcher_group($this.$this$07, $this.$grN);
},
jl_NumberFormatException = $rt_classWithoutFields(jl_IllegalArgumentException),
jl_NumberFormatException__init_1 = $this => {
    jl_IllegalArgumentException__init_2($this);
},
jl_NumberFormatException__init_2 = () => {
    let var_0 = new jl_NumberFormatException();
    jl_NumberFormatException__init_1(var_0);
    return var_0;
},
jl_NumberFormatException__init_ = ($this, $message) => {
    jl_IllegalArgumentException__init_1($this, $message);
},
jl_NumberFormatException__init_0 = var_0 => {
    let var_1 = new jl_NumberFormatException();
    jl_NumberFormatException__init_(var_1, var_0);
    return var_1;
};
function s_EntityInfo() {
    let a = this; jl_Record.call(a);
    a.$entity0 = null;
    a.$x3 = 0;
    a.$y3 = 0;
    a.$direction1 = null;
    a.$animationFrame1 = 0;
    a.$isToRemove1 = 0;
}
let s_EntityInfo__init_ = ($this, $entity, $x, $y, $direction, $animationFrame, $isToRemove) => {
    jl_Record__init_($this);
    $this.$entity0 = $entity;
    $this.$x3 = $x;
    $this.$y3 = $y;
    $this.$direction1 = $direction;
    $this.$animationFrame1 = $animationFrame;
    $this.$isToRemove1 = $isToRemove;
},
s_EntityInfo__init_0 = (var_0, var_1, var_2, var_3, var_4, var_5) => {
    let var_6 = new s_EntityInfo();
    s_EntityInfo__init_(var_6, var_0, var_1, var_2, var_3, var_4, var_5);
    return var_6;
},
s_EntityInfo_toString = $this => {
    return ((((((((((((((jl_StringBuilder__init_1($rt_s(383))).$append13($rt_s(384))).$append($this.$entity0)).$append13($rt_s(385))).$append2($this.$x3)).$append13($rt_s(362))).$append2($this.$y3)).$append13($rt_s(386))).$append($this.$direction1)).$append13($rt_s(387))).$append2($this.$animationFrame1)).$append13($rt_s(388))).$append25($this.$isToRemove1)).$append13($rt_s(315))).$toString();
},
s_EntityInfo_entity = $this => {
    return $this.$entity0;
},
s_EntityInfo_x = $this => {
    return $this.$x3;
},
s_EntityInfo_y = $this => {
    return $this.$y3;
},
s_EntityInfo_direction = $this => {
    return $this.$direction1;
},
s_EntityInfo_animationFrame = $this => {
    return $this.$animationFrame1;
};
function md_WorldBounds() {
    let a = this; jl_Record.call(a);
    a.$width1 = 0;
    a.$height1 = 0;
}
let md_WorldBounds__init_ = ($this, $width, $height) => {
    jl_Record__init_($this);
    $this.$width1 = $width;
    $this.$height1 = $height;
},
md_WorldBounds__init_0 = (var_0, var_1) => {
    let var_2 = new md_WorldBounds();
    md_WorldBounds__init_(var_2, var_0, var_1);
    return var_2;
},
md_WorldBounds_width = $this => {
    return $this.$width1;
},
md_WorldBounds_height = $this => {
    return $this.$height1;
},
jur_IntArrHash = $rt_classWithoutFields();
function jnci_UTF16Decoder() {
    let a = this; jnci_BufferedDecoder.call(a);
    a.$bom = 0;
    a.$littleEndian = 0;
}
let jnci_UTF16Decoder__init_ = ($this, $cs, $bom, $littleEndian) => {
    jnci_BufferedDecoder__init_($this, $cs, 0.5, 0.5);
    $this.$bom = $bom;
    $this.$littleEndian = $littleEndian;
},
jnci_UTF16Decoder__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jnci_UTF16Decoder();
    jnci_UTF16Decoder__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jnci_UTF16Decoder_arrayDecode = ($this, $inArray, $inPos, $inSize, $outArray, $outPos, $outSize, $controller) => {
    let var$8, var$9, var$10, $b;
    if ($this.$bom) {
        if (($inPos + 2 | 0) > $inSize) {
            if ($controller.$hasMoreInput0())
                var$8 = null;
            else {
                jnc_CoderResult_$callClinit();
                var$8 = jnc_CoderResult_UNDERFLOW;
            }
            return var$8;
        }
        var$9 = $inArray.data;
        $this.$bom = 0;
        var$10 = $inPos + 1 | 0;
        $b = var$9[$inPos];
        if ($b == (-1)) {
            if (var$9[var$10] != (-2))
                $inPos = var$10 + (-1) | 0;
            else {
                $inPos = var$10 + 1 | 0;
                $this.$littleEndian = 1;
            }
        } else if ($b != (-2))
            $inPos = var$10 + (-1) | 0;
        else if (var$9[var$10] != (-1))
            $inPos = var$10 + (-1) | 0;
        else {
            $inPos = var$10 + 1 | 0;
            $this.$littleEndian = 0;
        }
    }
    return !$this.$littleEndian ? jnci_UTF16Decoder_decodeBE($this, $inArray, $inPos, $inSize, $outArray, $outPos, $outSize, $controller) : jnci_UTF16Decoder_decodeLE($this, $inArray, $inPos, $inSize, $outArray, $outPos, $outSize, $controller);
},
jnci_UTF16Decoder_decodeLE = ($this, $inArray, $inPos, $inSize, $outArray, $outPos, $outSize, $controller) => {
    let $result, var$9, var$10, $b1, $b2, $c, var$14, $next;
    $result = null;
    a: {
        while ($inPos < $inSize) {
            if ($outPos >= $outSize)
                break a;
            if (($inPos + 2 | 0) > $inSize) {
                if ($controller.$hasMoreInput(2))
                    break a;
                jnc_CoderResult_$callClinit();
                $result = jnc_CoderResult_UNDERFLOW;
                break a;
            }
            var$9 = $inArray.data;
            var$10 = $inPos + 1 | 0;
            $b1 = var$9[$inPos] & 255;
            $inPos = var$10 + 1 | 0;
            $b2 = var$9[var$10] & 255;
            $c = ($b1 | $b2 << 8) & 65535;
            if (!jl_Character_isHighSurrogate($c)) {
                if (jl_Character_isLowSurrogate($c)) {
                    $inPos = $inPos + (-2) | 0;
                    $result = jnc_CoderResult_malformedForLength(2);
                    break a;
                }
                var$9 = $outArray.data;
                var$10 = $outPos + 1 | 0;
                var$9[$outPos] = $c;
                $outPos = var$10;
            } else {
                if (($inPos + 2 | 0) >= $inSize) {
                    if (!$controller.$hasMoreInput(4)) {
                        jnc_CoderResult_$callClinit();
                        $result = jnc_CoderResult_UNDERFLOW;
                    }
                    $inPos = $inPos + (-2) | 0;
                    break a;
                }
                var$10 = $inPos + 1 | 0;
                var$14 = var$9[$inPos] & 255;
                $inPos = var$10 + 1 | 0;
                var$10 = var$9[var$10] & 255;
                $next = (var$14 | var$10 << 8) & 65535;
                if (!jl_Character_isLowSurrogate($next)) {
                    $inPos = $inPos + (-4) | 0;
                    $result = jnc_CoderResult_malformedForLength(4);
                    break a;
                }
                if (($outPos + 2 | 0) > $outSize) {
                    if ($controller.$hasMoreOutput(2))
                        break a;
                    jnc_CoderResult_$callClinit();
                    $result = jnc_CoderResult_OVERFLOW;
                    break a;
                }
                var$9 = $outArray.data;
                var$10 = $outPos + 1 | 0;
                var$9[$outPos] = $c;
                $outPos = var$10 + 1 | 0;
                var$9[var$10] = $next;
            }
        }
    }
    $controller.$setInPosition($inPos);
    $controller.$setOutPosition($outPos);
    return $result;
},
jnci_UTF16Decoder_decodeBE = ($this, $inArray, $inPos, $inSize, $outArray, $outPos, $outSize, $controller) => {
    let $result, var$9, var$10, $b1, $b2, $c, var$14, $next;
    $result = null;
    a: {
        while ($inPos < $inSize) {
            if ($outPos >= $outSize)
                break a;
            if (($inPos + 2 | 0) > $inSize) {
                if ($controller.$hasMoreInput(2))
                    break a;
                jnc_CoderResult_$callClinit();
                $result = jnc_CoderResult_UNDERFLOW;
                break a;
            }
            var$9 = $inArray.data;
            var$10 = $inPos + 1 | 0;
            $b1 = var$9[$inPos] & 255;
            $inPos = var$10 + 1 | 0;
            $b2 = var$9[var$10] & 255;
            $c = ($b2 | $b1 << 8) & 65535;
            if (!jl_Character_isHighSurrogate($c)) {
                if (jl_Character_isLowSurrogate($c)) {
                    $inPos = $inPos + (-2) | 0;
                    $result = jnc_CoderResult_malformedForLength(2);
                    break a;
                }
                var$9 = $outArray.data;
                var$10 = $outPos + 1 | 0;
                var$9[$outPos] = $c;
                $outPos = var$10;
            } else {
                if (($inPos + 2 | 0) >= $inSize) {
                    if (!$controller.$hasMoreInput(4)) {
                        jnc_CoderResult_$callClinit();
                        $result = jnc_CoderResult_UNDERFLOW;
                    }
                    $inPos = $inPos + (-2) | 0;
                    break a;
                }
                var$10 = $inPos + 1 | 0;
                var$14 = var$9[$inPos] & 255;
                $inPos = var$10 + 1 | 0;
                var$10 = var$9[var$10] & 255;
                $next = (var$10 | var$14 << 8) & 65535;
                if (!jl_Character_isLowSurrogate($next)) {
                    $inPos = $inPos + (-4) | 0;
                    $result = jnc_CoderResult_malformedForLength(4);
                    break a;
                }
                if (($outPos + 2 | 0) > $outSize) {
                    if ($controller.$hasMoreOutput(2))
                        break a;
                    jnc_CoderResult_$callClinit();
                    $result = jnc_CoderResult_OVERFLOW;
                    break a;
                }
                var$9 = $outArray.data;
                var$10 = $outPos + 1 | 0;
                var$9[$outPos] = $c;
                $outPos = var$10 + 1 | 0;
                var$9[var$10] = $next;
            }
        }
    }
    $controller.$setInPosition($inPos);
    $controller.$setOutPosition($outPos);
    return $result;
},
jur_AbstractCharClass$LazyJavaMirrored = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaMirrored__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaMirrored__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaMirrored();
    jur_AbstractCharClass$LazyJavaMirrored__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaMirrored_computeValue = $this => {
    return jur_AbstractCharClass$LazyJavaMirrored$1__init_0($this);
},
WebMain$main$lambda$_2_0 = $rt_classWithoutFields(),
WebMain$main$lambda$_2_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
WebMain$main$lambda$_2_0__init_0 = () => {
    let var_0 = new WebMain$main$lambda$_2_0();
    WebMain$main$lambda$_2_0__init_(var_0);
    return var_0;
},
WebMain$main$lambda$_2_0_run = var$0 => {
    WebMain_onImagesLoaded();
},
jur_AbstractCharClass$LazyJavaISOControl = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaISOControl__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaISOControl__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaISOControl();
    jur_AbstractCharClass$LazyJavaISOControl__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaISOControl_computeValue = $this => {
    return jur_AbstractCharClass$LazyJavaISOControl$1__init_0($this);
},
jl_IllegalStateException = $rt_classWithoutFields(jl_RuntimeException),
jl_IllegalStateException__init_2 = $this => {
    jl_RuntimeException__init_($this);
},
jl_IllegalStateException__init_ = () => {
    let var_0 = new jl_IllegalStateException();
    jl_IllegalStateException__init_2(var_0);
    return var_0;
},
jl_IllegalStateException__init_1 = ($this, $message) => {
    jl_RuntimeException__init_0($this, $message);
},
jl_IllegalStateException__init_0 = var_0 => {
    let var_1 = new jl_IllegalStateException();
    jl_IllegalStateException__init_1(var_1, var_0);
    return var_1;
};
function jur_HighSurrogateCharSet() {
    jur_JointSet.call(this);
    this.$high = 0;
}
let jur_HighSurrogateCharSet__init_ = ($this, $high) => {
    jur_JointSet__init_($this);
    $this.$high = $high;
},
jur_HighSurrogateCharSet__init_0 = var_0 => {
    let var_1 = new jur_HighSurrogateCharSet();
    jur_HighSurrogateCharSet__init_(var_1, var_0);
    return var_1;
},
jur_HighSurrogateCharSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_HighSurrogateCharSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, var$5, var$6, $high, $low;
    $strLength = $matchResult.$getRightBound();
    var$5 = $stringIndex + 1 | 0;
    var$6 = $rt_compare(var$5, $strLength);
    if (var$6 > 0) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    $high = $testString.$charAt($stringIndex);
    if (var$6 < 0) {
        $low = $testString.$charAt(var$5);
        if (jl_Character_isLowSurrogate($low))
            return (-1);
    }
    if ($this.$high != $high)
        return (-1);
    return $this.$next1.$matches(var$5, $testString, $matchResult);
},
jur_HighSurrogateCharSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $testStr, $strLength, var$6;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
    $testStr = $testString;
    $strLength = $matchResult.$getRightBound();
    while (true) {
        if ($strIndex >= $strLength)
            return (-1);
        var$6 = $testStr.$indexOf1($this.$high, $strIndex);
        if (var$6 < 0)
            return (-1);
        $strIndex = var$6 + 1 | 0;
        if ($strIndex < $strLength && jl_Character_isLowSurrogate($testStr.$charAt($strIndex))) {
            $strIndex = var$6 + 2 | 0;
            continue;
        }
        if ($this.$next1.$matches($strIndex, $testString, $matchResult) >= 0)
            break;
    }
    return var$6;
},
jur_HighSurrogateCharSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $testStr, $strLength, var$7, var$8;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
    $testStr = $testString;
    $strLength = $matchResult.$getRightBound();
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            var$7 = $testStr.$lastIndexOf1($this.$high, $lastIndex);
            if (var$7 < 0)
                break a;
            if (var$7 < $strIndex)
                break a;
            var$8 = var$7 + 1 | 0;
            if (var$8 < $strLength && jl_Character_isLowSurrogate($testStr.$charAt(var$8))) {
                $lastIndex = var$7 + (-1) | 0;
                continue;
            }
            if ($this.$next1.$matches(var$8, $testString, $matchResult) >= 0)
                break;
            $lastIndex = var$7 + (-1) | 0;
        }
        return var$7;
    }
    return (-1);
},
jur_HighSurrogateCharSet_getName = $this => {
    let var$1, var$2;
    var$1 = $this.$high;
    var$2 = jl_StringBuilder__init_();
    jl_StringBuilder_append0(var$2, var$1);
    return jl_StringBuilder_toString(var$2);
},
jur_HighSurrogateCharSet_first = ($this, $set) => {
    if ($set instanceof jur_CharSet)
        return 0;
    if ($set instanceof jur_RangeSet)
        return 0;
    if ($set instanceof jur_SupplRangeSet)
        return 0;
    if ($set instanceof jur_SupplCharSet)
        return 0;
    if ($set instanceof jur_LowSurrogateCharSet)
        return 0;
    if (!($set instanceof jur_HighSurrogateCharSet))
        return 1;
    return $set.$high != $this.$high ? 0 : 1;
},
jur_HighSurrogateCharSet_hasConsumed = ($this, $matchResult) => {
    return 1;
},
jur_ReluctantCompositeQuantifierSet = $rt_classWithoutFields(jur_CompositeQuantifierSet),
jur_ReluctantCompositeQuantifierSet__init_ = ($this, $quant, $innerSet, $next, $type) => {
    jur_CompositeQuantifierSet__init_($this, $quant, $innerSet, $next, $type);
},
jur_ReluctantCompositeQuantifierSet__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_ReluctantCompositeQuantifierSet();
    jur_ReluctantCompositeQuantifierSet__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_ReluctantCompositeQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $min, $max, $i, var$7, var$8;
    $min = $this.$quantifier.$min1();
    $max = $this.$quantifier.$max1();
    $i = 0;
    while (true) {
        if ($i >= $min) {
            a: {
                while (true) {
                    var$7 = $this.$next1.$matches($stringIndex, $testString, $matchResult);
                    if (var$7 >= 0)
                        break;
                    if (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$getRightBound()) {
                        var$7 = $this.$leaf.$accepts($stringIndex, $testString);
                        $stringIndex = $stringIndex + var$7 | 0;
                        $i = $i + 1 | 0;
                    }
                    if (var$7 < 1)
                        break a;
                    if ($i > $max)
                        break a;
                }
                return var$7;
            }
            return (-1);
        }
        if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$getRightBound()) {
            $matchResult.$hitEnd = 1;
            return (-1);
        }
        var$8 = $this.$leaf.$accepts($stringIndex, $testString);
        if (var$8 < 1)
            break;
        $stringIndex = $stringIndex + var$8 | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
};
function jn_ByteBuffer() {
    jn_Buffer.call(this);
    this.$order = null;
}
let jn_ByteBuffer__init_ = $this => {
    jn_Buffer__init_($this);
    jn_ByteOrder_$callClinit();
    $this.$order = jn_ByteOrder_BIG_ENDIAN;
},
jn_ByteBuffer_wrap0 = ($array, $offset, $length) => {
    let var$4, $data, $result;
    ju_Objects_checkFromIndexSize($offset, $length, $array.data.length);
    var$4 = $array.data;
    $data = var$4;
    $result = jn_ByteBufferJsImpl__init_0($array, 0, $data, 0, 0);
    $result.$position3 = $offset;
    $result.$limit0 = $offset + $length | 0;
    return $result;
},
jn_ByteBuffer_wrap = $array => {
    return jn_ByteBuffer_wrap0($array, 0, $array.data.length);
},
jn_ByteBuffer_get = ($this, $dst, $offset, $length) => {
    if ($length >= 0 && $offset >= 0 && ($offset + $length | 0) <= $dst.data.length) {
        if ($length > jn_Buffer_remaining($this))
            $rt_throw(jn_BufferUnderflowException__init_0());
        $this.$getImpl0($this.$position3, $dst, $offset, $length);
        $this.$position3 = $this.$position3 + $length | 0;
        return $this;
    }
    $rt_throw(jl_IndexOutOfBoundsException__init_());
},
jn_ByteBuffer_array = $this => {
    return $this.$arrayImpl();
},
jn_ByteBuffer_flip = $this => {
    jn_Buffer_flip($this);
    return $this;
},
jn_ByteBuffer_position = ($this, $newPosition) => {
    jn_Buffer_position0($this, $newPosition);
    return $this;
},
jur_SOLSet = $rt_classWithoutFields(jur_AbstractSet),
jur_SOLSet__init_ = $this => {
    jur_AbstractSet__init_($this);
},
jur_SOLSet__init_0 = () => {
    let var_0 = new jur_SOLSet();
    jur_SOLSet__init_(var_0);
    return var_0;
},
jur_SOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    if ($strIndex && !($matchResult.$hasAnchoringBounds() && $strIndex == $matchResult.$getLeftBound()))
        return (-1);
    return $this.$next1.$matches($strIndex, $testString, $matchResult);
},
jur_SOLSet_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_SOLSet_getName = $this => {
    return $rt_s(389);
},
m_AlienFormationsLibrary$1 = $rt_classWithoutFields(),
m_AlienFormationsLibrary$1_$SwitchMap$shared$Entities = null,
m_AlienFormationsLibrary$1_$callClinit = () => {
    m_AlienFormationsLibrary$1_$callClinit = $rt_eraseClinit(m_AlienFormationsLibrary$1);
    m_AlienFormationsLibrary$1__clinit_();
},
m_AlienFormationsLibrary$1__clinit_ = () => {
    m_AlienFormationsLibrary$1_$SwitchMap$shared$Entities = $rt_createIntArray((s_Entities_values()).data.length);
    m_AlienFormationsLibrary$1_$SwitchMap$shared$Entities.data[jl_Enum_ordinal(s_Entities_GOEI)] = 1;
    m_AlienFormationsLibrary$1_$SwitchMap$shared$Entities.data[jl_Enum_ordinal(s_Entities_ZAKO)] = 2;
    m_AlienFormationsLibrary$1_$SwitchMap$shared$Entities.data[jl_Enum_ordinal(s_Entities_BOSS_GALAGA)] = 3;
};
function v_WebGameView() {
    let a = this; jl_Object.call(a);
    a.$model0 = null;
    a.$canvas = null;
    a.$frameNumber1 = 0;
}
let v_WebGameView_view = null,
v_WebGameView__init_ = ($this, $model, $onReady) => {
    let $doc;
    jl_Object__init_($this);
    $this.$model0 = $model;
    $this.$frameNumber1 = 0;
    $doc = window.document;
    $this.$canvas = $doc.getElementById("game-canvas");
    v_WebBackgroundPainter_init();
    v_WebSpriteLibrary_init($onReady);
},
v_WebGameView__init_0 = (var_0, var_1) => {
    let var_2 = new v_WebGameView();
    v_WebGameView__init_(var_2, var_0, var_1);
    return var_2;
},
v_WebGameView_initView = ($model, $onReady) => {
    if (v_WebGameView_view === null)
        v_WebGameView_view = v_WebGameView__init_0($model, $onReady);
    return v_WebGameView_view;
},
v_WebGameView_getInstance = () => {
    if (v_WebGameView_view !== null)
        return v_WebGameView_view;
    $rt_throw(jl_IllegalStateException__init_0($rt_s(390)));
},
v_WebGameView_setupInputs = ($this, $handler) => {
    let var$2, var$3;
    var$2 = window.document;
    var$3 = v_WebGameView$1__init_0($this, $handler);
    var$2.addEventListener("keydown", otji_JS_function(otji_JSWrapper_unwrap(var$3), "handleEvent"));
    var$2 = window.document;
    var$3 = v_WebGameView$2__init_0($this, $handler);
    var$2.addEventListener("keyup", otji_JS_function(otji_JSWrapper_unwrap(var$3), "handleEvent"));
},
v_WebGameView_refresh = ($this, $frameNumber) => {
    let var$2, var$3, $scaleX, $scaleY, $scale, var$7, var$8;
    $this.$frameNumber1 = $frameNumber;
    var$2 = $this.$canvas;
    var$3 = var$2.getContext("2d");
    $scaleX = $this.$canvas.width / md_WorldBounds_width($this.$model0.$getBounds());
    $scaleY = $this.$canvas.height / md_WorldBounds_height($this.$model0.$getBounds());
    $scale = jl_Math_min0($scaleX, $scaleY);
    var$3.save();
    var$7 = $this.$canvas.width;
    var$8 = $this.$canvas.height;
    var$3.clearRect(0.0, 0.0, var$7, var$8);
    var$3.scale($scale, $scale);
    v_WebBackgroundPainter_paint(var$3, $frameNumber, $this.$model0);
    v_WebEntityPainter_paint(var$3, $this.$model0.$getEntityListForView(), $this.$model0);
    v_WebInterfacePainter_paint(var$3, $frameNumber, $this.$model0);
    var$3.restore();
},
v_WebEntityPainter = $rt_classWithoutFields(),
v_WebEntityPainter_paint = ($ctx, $entities, $model) => {
    let $state, $secondsInState, var$6, $info;
    $state = $model.$getState();
    $secondsInState = $model.$getSecondsInState();
    var$6 = $entities.$iterator();
    while (var$6.$hasNext()) {
        a: {
            $info = var$6.$next();
            v_WebEntityPainter$1_$callClinit();
            switch (v_WebEntityPainter$1_$SwitchMap$shared$Entities.data[jl_Enum_ordinal(s_EntityInfo_entity($info))]) {
                case 1:
                    s_GameState_$callClinit();
                    if ($state !== s_GameState_PLAYING && $state !== s_GameState_LOADING_NOT_FIRST_STAGE) {
                        if ($state !== s_GameState_LOADING_FIRST_STAGE)
                            break a;
                        if ($secondsInState <= 5)
                            break a;
                    }
                    v_WebEntityPainter_paintEntity($ctx, $info);
                    break a;
                default:
            }
            v_WebEntityPainter_paintEntity($ctx, $info);
        }
    }
},
v_WebEntityPainter_paintEntity = ($ctx, $info) => {
    let $sprite, $spriteX, $spriteY, var$6, var$7;
    $sprite = v_WebSpriteLibrary_getSprite0(s_EntityInfo_entity($info), s_EntityInfo_direction($info), s_EntityInfo_animationFrame($info));
    $spriteX = s_EntityInfo_x($info) - (jl_Math_ceil(($sprite.width - s_Entities_getWidth(s_EntityInfo_entity($info)) | 0) / 2.0) | 0) | 0;
    $spriteY = s_EntityInfo_y($info) - (jl_Math_ceil(($sprite.height - s_Entities_getHeight(s_EntityInfo_entity($info)) | 0) / 2.0) | 0) | 0;
    var$6 = $spriteX;
    var$7 = $spriteY;
    $ctx.drawImage($sprite, var$6, var$7);
},
jur_AbstractCharClass$LazyJavaIdentifierIgnorable = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaIdentifierIgnorable();
    jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaIdentifierIgnorable_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1__init_0($this);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
};
function jur_UMultiLineEOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter2 = 0;
}
let jur_UMultiLineEOLSet__init_ = ($this, $counter) => {
    jur_AbstractSet__init_($this);
    $this.$consCounter2 = $counter;
},
jur_UMultiLineEOLSet__init_0 = var_0 => {
    let var_1 = new jur_UMultiLineEOLSet();
    jur_UMultiLineEOLSet__init_(var_1, var_0);
    return var_1;
},
jur_UMultiLineEOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $strDif;
    $strDif = !$matchResult.$hasAnchoringBounds() ? $testString.$length() - $strIndex | 0 : $matchResult.$getRightBound() - $strIndex | 0;
    if ($strDif <= 0) {
        $matchResult.$setConsumed($this.$consCounter2, 0);
        return $this.$next1.$matches($strIndex, $testString, $matchResult);
    }
    if ($testString.$charAt($strIndex) != 10)
        return (-1);
    $matchResult.$setConsumed($this.$consCounter2, 1);
    return $this.$next1.$matches($strIndex + 1 | 0, $testString, $matchResult);
},
jur_UMultiLineEOLSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !$matchResult.$getConsumed($this.$consCounter2) ? 0 : 1;
    $matchResult.$setConsumed($this.$consCounter2, (-1));
    return $res;
},
jur_UMultiLineEOLSet_getName = $this => {
    return $rt_s(391);
};
function jn_ByteBufferJsImpl() {
    let a = this; jn_ByteBuffer.call(a);
    a.$array1 = null;
    a.$arrayOffset = 0;
    a.$data1 = null;
    a.$direct = 0;
    a.$readOnly1 = 0;
}
let jn_ByteBufferJsImpl__init_ = ($this, $array, $arrayOffset, $data, $direct, $readOnly) => {
    jn_ByteBuffer__init_($this);
    $this.$array1 = $array;
    $this.$arrayOffset = $arrayOffset;
    $this.$data1 = $data;
    $this.$direct = $direct;
    $this.$readOnly1 = $readOnly;
},
jn_ByteBufferJsImpl__init_0 = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new jn_ByteBufferJsImpl();
    jn_ByteBufferJsImpl__init_(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
jn_ByteBufferJsImpl_arrayImpl = $this => {
    if ($this.$array1 !== null)
        return $this.$array1;
    $rt_throw(jl_UnsupportedOperationException__init_());
},
jn_ByteBufferJsImpl_capacityImpl = $this => {
    return $this.$data1.length;
},
jn_ByteBufferJsImpl_getImpl = ($this, $index, $dst, $offset, $length) => {
    let var$5, var$6, $slice;
    var$5 = $this.$data1.buffer;
    var$6 = $this.$data1.byteOffset + $index | 0;
    $slice = new Int8Array(var$5, var$6, $length);
    $dst.data.set($slice, $offset);
},
jn_ByteBufferJsImpl_compact = $this => {
    let $sz;
    if ($this.$readOnly1)
        $rt_throw(jn_ReadOnlyBufferException__init_());
    $sz = jn_Buffer_remaining($this);
    if ($this.$position3 > 0)
        $this.$data1.set(new Int8Array($this.$data1.buffer, $this.$data1.byteOffset + $this.$position3 | 0, $sz), 0);
    $this.$position3 = $sz;
    $this.$limit0 = jn_Buffer_capacity($this);
    $this.$mark = (-1);
    return $this;
};
function jnc_CoderResult() {
    let a = this; jl_Object.call(a);
    a.$kind = 0;
    a.$length2 = 0;
}
let jnc_CoderResult_UNDERFLOW = null,
jnc_CoderResult_OVERFLOW = null,
jnc_CoderResult_$callClinit = () => {
    jnc_CoderResult_$callClinit = $rt_eraseClinit(jnc_CoderResult);
    jnc_CoderResult__clinit_();
},
jnc_CoderResult__init_0 = ($this, $kind, $length) => {
    jnc_CoderResult_$callClinit();
    jl_Object__init_($this);
    $this.$kind = $kind;
    $this.$length2 = $length;
},
jnc_CoderResult__init_ = (var_0, var_1) => {
    let var_2 = new jnc_CoderResult();
    jnc_CoderResult__init_0(var_2, var_0, var_1);
    return var_2;
},
jnc_CoderResult_isUnderflow = $this => {
    return $this.$kind ? 0 : 1;
},
jnc_CoderResult_isOverflow = $this => {
    return $this.$kind != 1 ? 0 : 1;
},
jnc_CoderResult_isError = $this => {
    return !$this.$isMalformed() && !$this.$isUnmappable() ? 0 : 1;
},
jnc_CoderResult_isMalformed = $this => {
    return $this.$kind != 2 ? 0 : 1;
},
jnc_CoderResult_isUnmappable = $this => {
    return $this.$kind != 3 ? 0 : 1;
},
jnc_CoderResult_length = $this => {
    if ($this.$isError())
        return $this.$length2;
    $rt_throw(jl_UnsupportedOperationException__init_());
},
jnc_CoderResult_malformedForLength = $length => {
    jnc_CoderResult_$callClinit();
    return jnc_CoderResult__init_(2, $length);
},
jnc_CoderResult__clinit_ = () => {
    jnc_CoderResult_UNDERFLOW = jnc_CoderResult__init_(0, 0);
    jnc_CoderResult_OVERFLOW = jnc_CoderResult__init_(1, 0);
},
otcit_DoubleAnalyzer = $rt_classWithoutFields(),
otcit_DoubleAnalyzer_MAX_MANTISSA = Long_ZERO,
otcit_DoubleAnalyzer_resultForLog10 = null,
otcit_DoubleAnalyzer_mantissa10Table = null,
otcit_DoubleAnalyzer_exp10Table = null,
otcit_DoubleAnalyzer_$callClinit = () => {
    otcit_DoubleAnalyzer_$callClinit = $rt_eraseClinit(otcit_DoubleAnalyzer);
    otcit_DoubleAnalyzer__clinit_();
},
otcit_DoubleAnalyzer_analyze = ($d, $result) => {
    let $bits, $mantissa, $exponent, var$6, $decExponent, var$8, var$9, $binExponentCorrection, $mantissaShift, $decMantissa, var$13, var$14, var$15, $decMantissaHi, $decMantissaLow, $lowerPos, $upperPos, $posCmp;
    otcit_DoubleAnalyzer_$callClinit();
    $bits = jl_Double_doubleToLongBits($d);
    $result.$sign0 = Long_eq(Long_and($bits, Long_create(0, 2147483648)), Long_ZERO) ? 0 : 1;
    $mantissa = Long_and($bits, Long_create(4294967295, 1048575));
    $exponent = Long_lo(Long_shr($bits, 52)) & 2047;
    if (Long_eq($mantissa, Long_ZERO) && !$exponent) {
        $result.$mantissa = Long_ZERO;
        $result.$exponent = 0;
        return;
    }
    if ($exponent)
        var$6 = Long_or($mantissa, Long_create(0, 1048576));
    else {
        var$6 = Long_shl($mantissa, 1);
        while (Long_eq(Long_and(var$6, Long_create(0, 1048576)), Long_ZERO)) {
            var$6 = Long_shl(var$6, 1);
            $exponent = $exponent + (-1) | 0;
        }
    }
    $decExponent = ju_Arrays_binarySearch0(otcit_DoubleAnalyzer_exp10Table, $exponent << 16 >> 16);
    if ($decExponent < 0)
        $decExponent =  -$decExponent | 0;
    var$8 = otcit_DoubleAnalyzer_exp10Table.data;
    var$9 = $decExponent + 1 | 0;
    $binExponentCorrection = $exponent - var$8[var$9] | 0;
    $mantissaShift = 12 + $binExponentCorrection | 0;
    $decMantissa = otcit_DoubleAnalyzer_mulAndShiftRight(var$6, otcit_DoubleAnalyzer_mantissa10Table.data[var$9], $mantissaShift);
    if (Long_le($decMantissa, otcit_DoubleAnalyzer_MAX_MANTISSA)) {
        while (jl_Long_compareUnsigned($decMantissa, otcit_DoubleAnalyzer_MAX_MANTISSA) <= 0) {
            $decExponent = $decExponent + (-1) | 0;
            $decMantissa = Long_add(Long_mul($decMantissa, Long_fromInt(10)), Long_fromInt(9));
        }
        var$8 = otcit_DoubleAnalyzer_exp10Table.data;
        var$9 = $decExponent + 1 | 0;
        var$13 = $exponent - var$8[var$9] | 0;
        $mantissaShift = 12 + var$13 | 0;
        $decMantissa = otcit_DoubleAnalyzer_mulAndShiftRight(var$6, otcit_DoubleAnalyzer_mantissa10Table.data[var$9], $mantissaShift);
    }
    var$14 = Long_shl(var$6, 1);
    var$6 = Long_add(var$14, Long_fromInt(1));
    var$8 = otcit_DoubleAnalyzer_mantissa10Table.data;
    var$13 = $decExponent + 1 | 0;
    var$15 = var$8[var$13];
    var$9 = $mantissaShift - 1 | 0;
    $decMantissaHi = otcit_DoubleAnalyzer_mulAndShiftRight(var$6, var$15, var$9);
    $decMantissaLow = otcit_DoubleAnalyzer_mulAndShiftRight(Long_sub(var$14, Long_fromInt(1)), otcit_DoubleAnalyzer_mantissa10Table.data[var$13], var$9);
    $lowerPos = otcit_DoubleAnalyzer_findLowerDistance($decMantissa, $decMantissaLow);
    $upperPos = otcit_DoubleAnalyzer_findUpperDistance($decMantissa, $decMantissaHi);
    $posCmp = jl_Long_compareUnsigned($lowerPos, $upperPos);
    var$6 = $posCmp > 0 ? Long_mul(jl_Long_divideUnsigned($decMantissa, $lowerPos), $lowerPos) : $posCmp < 0 ? Long_add(Long_mul(jl_Long_divideUnsigned($decMantissa, $upperPos), $upperPos), $upperPos) : Long_mul(jl_Long_divideUnsigned(Long_add($decMantissa, Long_div($upperPos, Long_fromInt(2))), $upperPos), $upperPos);
    if (jl_Long_compareUnsigned(var$6, Long_create(2808348672, 232830643)) >= 0)
        while (true) {
            $decExponent = $decExponent + 1 | 0;
            var$6 = jl_Long_divideUnsigned(var$6, Long_fromInt(10));
            if (jl_Long_compareUnsigned(var$6, Long_create(2808348672, 232830643)) < 0)
                break;
        }
    else if (jl_Long_compareUnsigned(var$6, Long_create(1569325056, 23283064)) < 0) {
        $decExponent = $decExponent + (-1) | 0;
        var$6 = Long_mul(var$6, Long_fromInt(10));
    }
    $result.$mantissa = var$6;
    $result.$exponent = $decExponent - 330 | 0;
},
otcit_DoubleAnalyzer_findLowerDistance = ($mantissa, $lower) => {
    let $pos, $pos_0, var$5, var$6;
    otcit_DoubleAnalyzer_$callClinit();
    $pos = Long_fromInt(1);
    while (true) {
        $pos_0 = Long_mul($pos, Long_fromInt(10));
        var$5 = jl_Long_divideUnsigned($mantissa, $pos_0);
        var$6 = jl_Long_divideUnsigned($lower, $pos_0);
        if (jl_Long_compareUnsigned(var$5, var$6) <= 0)
            break;
        $pos = $pos_0;
    }
    return $pos;
},
otcit_DoubleAnalyzer_findUpperDistance = ($mantissa, $upper) => {
    let $pos, $pos_0, var$5, var$6;
    otcit_DoubleAnalyzer_$callClinit();
    $pos = Long_fromInt(1);
    while (true) {
        $pos_0 = Long_mul($pos, Long_fromInt(10));
        var$5 = jl_Long_divideUnsigned($mantissa, $pos_0);
        var$6 = jl_Long_divideUnsigned($upper, $pos_0);
        if (jl_Long_compareUnsigned(var$5, var$6) >= 0)
            break;
        $pos = $pos_0;
    }
    return $pos;
},
otcit_DoubleAnalyzer_mulAndShiftRight = ($a, $b, $shift) => {
    let $a1, $a2, $a3, $a4, $b1, $b2, $b3, $b4, $cm, $c0, $c1, $c2, $c3, $c, var$18;
    otcit_DoubleAnalyzer_$callClinit();
    $a1 = Long_and($a, Long_fromInt(65535));
    $a2 = Long_and(Long_shru($a, 16), Long_fromInt(65535));
    $a3 = Long_and(Long_shru($a, 32), Long_fromInt(65535));
    $a4 = Long_and(Long_shru($a, 48), Long_fromInt(65535));
    $b1 = Long_and($b, Long_fromInt(65535));
    $b2 = Long_and(Long_shru($b, 16), Long_fromInt(65535));
    $b3 = Long_and(Long_shru($b, 32), Long_fromInt(65535));
    $b4 = Long_and(Long_shru($b, 48), Long_fromInt(65535));
    $cm = Long_add(Long_add(Long_mul($b3, $a1), Long_mul($b2, $a2)), Long_mul($b1, $a3));
    $c0 = Long_add(Long_add(Long_add(Long_mul($b4, $a1), Long_mul($b3, $a2)), Long_mul($b2, $a3)), Long_mul($b1, $a4));
    $c1 = Long_add(Long_add(Long_mul($b4, $a2), Long_mul($b3, $a3)), Long_mul($b2, $a4));
    $c2 = Long_add(Long_mul($b4, $a3), Long_mul($b3, $a4));
    $c3 = Long_mul($b4, $a4);
    $c = Long_add(Long_add(Long_shl($c3, 32 + $shift | 0), Long_shl($c2, 16 + $shift | 0)), Long_shl($c1, $shift));
    var$18 = Long_add($cm, Long_shl($c0, 16));
    var$18 = Long_add($c, Long_shru(var$18, 32 - $shift | 0));
    return var$18;
},
otcit_DoubleAnalyzer__clinit_ = () => {
    otcit_DoubleAnalyzer_MAX_MANTISSA = jl_Long_divideUnsigned(Long_fromInt(-1), Long_fromInt(10));
    otcit_DoubleAnalyzer_resultForLog10 = otcit_DoubleAnalyzer$Result__init_();
    otcit_DoubleAnalyzer_mantissa10Table = $rt_createLongArrayFromData([Long_create(3251292512, 2194092222), Long_create(1766094183, 3510547556), Long_create(553881887, 2808438045), Long_create(443105509, 2246750436), Long_create(3285949193, 3594800697), Long_create(910772436, 2875840558), Long_create(2446604867, 2300672446), Long_create(2196580869, 3681075914), Long_create(2616258154, 2944860731), Long_create(1234013064, 2355888585), Long_create(1974420903, 3769421736), Long_create(720543263, 3015537389), Long_create(1435428070, 2412429911),
    Long_create(578697993, 3859887858), Long_create(2180945313, 3087910286), Long_create(885762791, 2470328229), Long_create(3135207384, 3952525166), Long_create(1649172448, 3162020133), Long_create(3037324877, 2529616106), Long_create(3141732885, 4047385770), Long_create(2513386308, 3237908616), Long_create(1151715587, 2590326893), Long_create(983751480, 4144523029), Long_create(1645994643, 3315618423), Long_create(3034782633, 2652494738), Long_create(3996658754, 4243991581), Long_create(2338333544, 3395193265),
    Long_create(1870666835, 2716154612), Long_create(4073513845, 2172923689), Long_create(3940641775, 3476677903), Long_create(575533043, 2781342323), Long_create(2178413352, 2225073858), Long_create(2626467905, 3560118173), Long_create(3819161242, 2848094538), Long_create(478348616, 2278475631), Long_create(3342338164, 3645561009), Long_create(3532863990, 2916448807), Long_create(1108304273, 2333159046), Long_create(55299919, 3733054474), Long_create(903233395, 2986443579), Long_create(1581580175, 2389154863),
    Long_create(1671534821, 3822647781), Long_create(478234397, 3058118225), Long_create(382587518, 2446494580), Long_create(612140029, 3914391328), Long_create(2207698941, 3131513062), Long_create(48172235, 2505210450), Long_create(77075576, 4008336720), Long_create(61660460, 3206669376), Long_create(3485302205, 2565335500), Long_create(1281516232, 4104536801), Long_create(166219527, 3283629441), Long_create(3568949458, 2626903552), Long_create(2274345296, 4203045684), Long_create(2678469696, 3362436547), Long_create(424788838, 2689949238),
    Long_create(2057817989, 2151959390), Long_create(3292508783, 3443135024), Long_create(3493000485, 2754508019), Long_create(3653393847, 2203606415), Long_create(1550462860, 3525770265), Long_create(1240370288, 2820616212), Long_create(3569276608, 2256492969), Long_create(3133862195, 3610388751), Long_create(1648096297, 2888311001), Long_create(459483578, 2310648801), Long_create(3312154103, 3697038081), Long_create(1790729823, 2957630465), Long_create(1432583858, 2366104372), Long_create(3151127633, 3785766995),
    Long_create(2520902106, 3028613596), Long_create(1157728226, 2422890877), Long_create(2711358621, 3876625403), Long_create(3887073815, 3101300322), Long_create(1391672133, 2481040258), Long_create(1367681954, 3969664413), Long_create(2812132482, 3175731530), Long_create(2249705985, 2540585224), Long_create(1022549199, 4064936359), Long_create(1677032818, 3251949087), Long_create(3918606632, 2601559269), Long_create(3692790234, 4162494831), Long_create(2095238728, 3329995865), Long_create(1676190982, 2663996692),
    Long_create(3540899031, 4262394707), Long_create(1114732307, 3409915766), Long_create(32792386, 2727932613), Long_create(1744220827, 2182346090), Long_create(2790753324, 3491753744), Long_create(3091596118, 2793402995), Long_create(2473276894, 2234722396), Long_create(2239256113, 3575555834), Long_create(2650398349, 2860444667), Long_create(402331761, 2288355734), Long_create(2361717736, 3661369174), Long_create(2748367648, 2929095339), Long_create(3057687578, 2343276271), Long_create(3174313206, 3749242034),
    Long_create(3398444024, 2999393627), Long_create(1000768301, 2399514902), Long_create(2460222741, 3839223843), Long_create(3686165111, 3071379074), Long_create(3807925548, 2457103259), Long_create(3515700499, 3931365215), Long_create(2812560399, 3145092172), Long_create(532061401, 2516073738), Long_create(4287272078, 4025717980), Long_create(3429817663, 3220574384), Long_create(3602847589, 2576459507), Long_create(2328582306, 4122335212), Long_create(144878926, 3297868170), Long_create(115903141, 2638294536),
    Long_create(2762425404, 4221271257), Long_create(491953404, 3377017006), Long_create(3829536560, 2701613604), Long_create(3922622707, 2161290883), Long_create(1122235577, 3458065414), Long_create(1756781920, 2766452331), Long_create(546432077, 2213161865), Long_create(874291324, 3541058984), Long_create(1558426518, 2832847187), Long_create(3823721592, 2266277749), Long_create(3540974170, 3626044399), Long_create(3691772795, 2900835519), Long_create(3812411695, 2320668415), Long_create(1804891416, 3713069465),
    Long_create(1443913133, 2970455572), Long_create(3732110884, 2376364457), Long_create(2535403578, 3802183132), Long_create(310335944, 3041746506), Long_create(3684242592, 2433397204), Long_create(3317807769, 3893435527), Long_create(936259297, 3114748422), Long_create(3325987815, 2491798737), Long_create(1885606668, 3986877980), Long_create(1508485334, 3189502384), Long_create(2065781726, 2551601907), Long_create(4164244222, 4082563051), Long_create(2472401918, 3266050441), Long_create(1118928075, 2612840353),
    Long_create(931291461, 4180544565), Long_create(745033169, 3344435652), Long_create(3173006913, 2675548521), Long_create(3358824142, 4280877634), Long_create(3546052773, 3424702107), Long_create(1118855300, 2739761686), Long_create(36090780, 2191809349), Long_create(1775732167, 3506894958), Long_create(3138572652, 2805515966), Long_create(1651864662, 2244412773), Long_create(1783990001, 3591060437), Long_create(4004172378, 2872848349), Long_create(4062331362, 2298278679), Long_create(3922749802, 3677245887),
    Long_create(1420212923, 2941796710), Long_create(1136170338, 2353437368), Long_create(958879082, 3765499789), Long_create(1626096725, 3012399831), Long_create(441883920, 2409919865), Long_create(707014273, 3855871784), Long_create(1424604878, 3084697427), Long_create(3716664280, 2467757941), Long_create(4228675929, 3948412706), Long_create(2523947284, 3158730165), Long_create(2019157827, 2526984132), Long_create(4089645983, 4043174611), Long_create(2412723327, 3234539689), Long_create(2789172121, 2587631751),
    Long_create(2744688475, 4140210802), Long_create(477763862, 3312168642), Long_create(2959191467, 2649734913), Long_create(3875712888, 4239575861), Long_create(2241576851, 3391660689), Long_create(2652254940, 2713328551), Long_create(1262810493, 2170662841), Long_create(302509870, 3473060546), Long_create(3677981733, 2778448436), Long_create(2083391927, 2222758749), Long_create(756446706, 3556413999), Long_create(1464150824, 2845131199), Long_create(2030314118, 2276104959), Long_create(671522212, 3641767935),
    Long_create(537217769, 2913414348), Long_create(2147761134, 2330731478), Long_create(2577424355, 3729170365), Long_create(2061939484, 2983336292), Long_create(4226531965, 2386669033), Long_create(1608490388, 3818670454), Long_create(2145785770, 3054936363), Long_create(3434615534, 2443949090), Long_create(1200417559, 3910318545), Long_create(960334047, 3128254836), Long_create(4204241074, 2502603868), Long_create(1572824964, 4004166190), Long_create(1258259971, 3203332952), Long_create(3583588354, 2562666361),
    Long_create(4015754449, 4100266178), Long_create(635623181, 3280212943), Long_create(2226485463, 2624170354), Long_create(985396364, 4198672567), Long_create(3365297469, 3358938053), Long_create(115257597, 2687150443), Long_create(1810192996, 2149720354), Long_create(319328417, 3439552567), Long_create(2832443111, 2751642053), Long_create(3983941407, 2201313642), Long_create(2938332415, 3522101828), Long_create(4068652850, 2817681462), Long_create(1536935362, 2254145170), Long_create(2459096579, 3606632272),
    Long_create(249290345, 2885305818), Long_create(1917419194, 2308244654), Long_create(490890333, 3693191447), Long_create(2969692644, 2954553157), Long_create(657767197, 2363642526), Long_create(3629407892, 3781828041), Long_create(2044532855, 3025462433), Long_create(3353613202, 2420369946), Long_create(3647794205, 3872591914), Long_create(3777228823, 3098073531), Long_create(2162789599, 2478458825), Long_create(3460463359, 3965534120), Long_create(2768370687, 3172427296), Long_create(1355703090, 2537941837),
    Long_create(3028118404, 4060706939), Long_create(3281488183, 3248565551), Long_create(1766197087, 2598852441), Long_create(1107928421, 4158163906), Long_create(27349277, 3326531125), Long_create(21879422, 2661224900), Long_create(35007075, 4257959840), Long_create(28005660, 3406367872), Long_create(2599384905, 2725094297), Long_create(361521006, 2180075438), Long_create(4014407446, 3488120700), Long_create(3211525957, 2790496560), Long_create(2569220766, 2232397248), Long_create(3251759766, 3571835597),
    Long_create(883420894, 2857468478), Long_create(2424723634, 2285974782), Long_create(443583977, 3657559652), Long_create(2931847559, 2926047721), Long_create(1486484588, 2340838177), Long_create(3237368801, 3745341083), Long_create(12914663, 2996272867), Long_create(2587312108, 2397018293), Long_create(3280705914, 3835229269), Long_create(3483558190, 3068183415), Long_create(2786846552, 2454546732), Long_create(1022980646, 3927274772), Long_create(3395364895, 3141819817), Long_create(998304997, 2513455854),
    Long_create(3315274914, 4021529366), Long_create(1793226472, 3217223493), Long_create(3152568096, 2573778794), Long_create(2467128576, 4118046071), Long_create(1114709402, 3294436857), Long_create(3468747899, 2635549485), Long_create(1255029343, 4216879177), Long_create(3581003852, 3373503341), Long_create(2005809622, 2698802673), Long_create(3322634616, 2159042138), Long_create(162254630, 3454467422), Long_create(2706784082, 2763573937), Long_create(447440347, 2210859150), Long_create(715904555, 3537374640),
    Long_create(572723644, 2829899712), Long_create(3035159293, 2263919769), Long_create(2279274491, 3622271631), Long_create(964426134, 2897817305), Long_create(771540907, 2318253844), Long_create(2952452370, 3709206150), Long_create(2361961896, 2967364920), Long_create(1889569516, 2373891936), Long_create(1305324308, 3798227098), Long_create(2762246365, 3038581678), Long_create(3927784010, 2430865342), Long_create(2848480580, 3889384548), Long_create(3996771382, 3111507638), Long_create(620436728, 2489206111),
    Long_create(3569679143, 3982729777), Long_create(1137756396, 3186183822), Long_create(3487185494, 2548947057), Long_create(2143522954, 4078315292), Long_create(4291798741, 3262652233), Long_create(856458615, 2610121787), Long_create(2229327243, 4176194859), Long_create(2642455254, 3340955887), Long_create(395977285, 2672764710), Long_create(633563656, 4276423536), Long_create(3942824761, 3421138828), Long_create(577279431, 2736911063), Long_create(2179810463, 2189528850), Long_create(3487696741, 3503246160),
    Long_create(2790157393, 2802596928), Long_create(3950112833, 2242077542), Long_create(2884206696, 3587324068), Long_create(4025352275, 2869859254), Long_create(4079275279, 2295887403), Long_create(1372879692, 3673419846), Long_create(239310294, 2938735877), Long_create(2768428613, 2350988701), Long_create(2711498862, 3761581922), Long_create(451212171, 3009265538), Long_create(2078956655, 2407412430), Long_create(3326330649, 3851859888), Long_create(84084141, 3081487911), Long_create(3503241150, 2465190328),
    Long_create(451225085, 3944304526), Long_create(3796953905, 3155443620), Long_create(3037563124, 2524354896), Long_create(3142114080, 4038967834), Long_create(3372684723, 3231174267), Long_create(980160860, 2584939414), Long_create(3286244294, 4135903062), Long_create(911008517, 3308722450), Long_create(728806813, 2646977960), Long_create(1166090902, 4235164736), Long_create(73879262, 3388131789), Long_create(918096869, 2710505431), Long_create(4170451332, 2168404344), Long_create(4095741754, 3469446951),
    Long_create(2417599944, 2775557561), Long_create(1075086496, 2220446049), Long_create(3438125312, 3552713678), Long_create(173519872, 2842170943), Long_create(1856802816, 2273736754), Long_create(393904128, 3637978807), Long_create(2892103680, 2910383045), Long_create(2313682944, 2328306436), Long_create(1983905792, 3725290298), Long_create(3305111552, 2980232238), Long_create(67108864, 2384185791), Long_create(2684354560, 3814697265), Long_create(2147483648, 3051757812), Long_create(0, 2441406250), Long_create(0, 3906250000),
    Long_create(0, 3125000000), Long_create(0, 2500000000), Long_create(0, 4000000000), Long_create(0, 3200000000), Long_create(0, 2560000000), Long_create(0, 4096000000), Long_create(0, 3276800000), Long_create(0, 2621440000), Long_create(0, 4194304000), Long_create(0, 3355443200), Long_create(0, 2684354560), Long_create(0, 2147483648), Long_create(3435973836, 3435973836), Long_create(1889785610, 2748779069), Long_create(2370821947, 2199023255), Long_create(3793315115, 3518437208), Long_create(457671715, 2814749767),
    Long_create(2943117749, 2251799813), Long_create(3849994940, 3602879701), Long_create(2221002492, 2882303761), Long_create(917808535, 2305843009), Long_create(3186480574, 3689348814), Long_create(3408177918, 2951479051), Long_create(1867548875, 2361183241), Long_create(1270091283, 3777893186), Long_create(157079567, 3022314549), Long_create(984657113, 2417851639), Long_create(3293438299, 3868562622), Long_create(916763721, 3094850098), Long_create(2451397895, 2475880078), Long_create(3063243173, 3961408125),
    Long_create(2450594538, 3169126500), Long_create(1960475630, 2535301200), Long_create(3136761009, 4056481920), Long_create(2509408807, 3245185536), Long_create(1148533586, 2596148429), Long_create(3555640657, 4153837486), Long_create(1985519066, 3323069989), Long_create(2447408712, 2658455991), Long_create(2197867021, 4253529586), Long_create(899300158, 3402823669), Long_create(1578433585, 2722258935), Long_create(1262746868, 2177807148), Long_create(1161401530, 3484491437), Long_create(3506101601, 2787593149),
    Long_create(3663874740, 2230074519), Long_create(3285219207, 3568119231), Long_create(1769181906, 2854495385), Long_create(1415345525, 2283596308), Long_create(1405559381, 3653754093), Long_create(2842434423, 2923003274), Long_create(3132940998, 2338402619), Long_create(2435725219, 3741444191), Long_create(1089586716, 2993155353), Long_create(2589656291, 2394524282), Long_create(707476229, 3831238852), Long_create(3142961361, 3064991081), Long_create(1655375629, 2451992865), Long_create(2648601007, 3923188584),
    Long_create(2977874265, 3138550867), Long_create(664312493, 2510840694), Long_create(2780886908, 4017345110), Long_create(2224709526, 3213876088), Long_create(3497754539, 2571100870), Long_create(1301439967, 4113761393), Long_create(2759138892, 3291009114), Long_create(3066304573, 2632807291), Long_create(3188100398, 4212491666), Long_create(1691486859, 3369993333), Long_create(3071176406, 2695994666), Long_create(1597947665, 2156795733), Long_create(1697722806, 3450873173), Long_create(3076165163, 2760698538),
    Long_create(4178919049, 2208558830), Long_create(2391303182, 3533694129), Long_create(2772036005, 2826955303), Long_create(3935615722, 2261564242), Long_create(2861011319, 3618502788), Long_create(4006795973, 2894802230), Long_create(3205436779, 2315841784), Long_create(2551718468, 3705346855), Long_create(2041374775, 2964277484), Long_create(2492093279, 2371421987), Long_create(551375410, 3794275180), Long_create(441100328, 3035420144), Long_create(1211873721, 2428336115), Long_create(1938997954, 3885337784),
    Long_create(2410191822, 3108270227), Long_create(210166539, 2486616182), Long_create(1195259923, 3978585891), Long_create(97214479, 3182868713), Long_create(1795758501, 2546294970), Long_create(2873213602, 4074071952), Long_create(580583963, 3259257562), Long_create(3041447548, 2607406049), Long_create(2289335700, 4171849679), Long_create(2690462019, 3337479743), Long_create(3870356534, 2669983794), Long_create(3615590076, 4271974071), Long_create(2033478602, 3417579257), Long_create(4203763259, 2734063405),
    Long_create(3363010607, 2187250724), Long_create(2803836594, 3499601159), Long_create(3102062734, 2799680927), Long_create(763663269, 2239744742), Long_create(2080854690, 3583591587), Long_create(4241664129, 2866873269), Long_create(4252324763, 2293498615), Long_create(2508752324, 3669597785), Long_create(2007001859, 2935678228), Long_create(3323588406, 2348542582), Long_create(1881767613, 3757668132), Long_create(4082394468, 3006134505), Long_create(3265915574, 2404907604), Long_create(2648484541, 3847852167),
    Long_create(400800715, 3078281734), Long_create(1179634031, 2462625387), Long_create(2746407909, 3940200619), Long_create(3056119786, 3152160495), Long_create(2444895829, 2521728396), Long_create(2193846408, 4034765434), Long_create(2614070585, 3227812347), Long_create(373269550, 2582249878), Long_create(4033205117, 4131599804), Long_create(4085557553, 3305279843), Long_create(691465664, 2644223875), Long_create(1106345063, 4230758200), Long_create(885076050, 3384606560), Long_create(708060840, 2707685248),
    Long_create(2284435591, 2166148198), Long_create(2796103486, 3465837117), Long_create(518895870, 2772669694), Long_create(1274110155, 2218135755), Long_create(2038576249, 3549017208), Long_create(3348847917, 2839213766), Long_create(1820084875, 2271371013), Long_create(2053142340, 3634193621), Long_create(783520413, 2907354897), Long_create(3203796708, 2325883917), Long_create(1690100896, 3721414268), Long_create(3070067635, 2977131414), Long_create(3315047567, 2381705131), Long_create(3586089190, 3810728210),
    Long_create(2868871352, 3048582568), Long_create(4013084000, 2438866054), Long_create(3843954022, 3902185687), Long_create(1357176299, 3121748550), Long_create(1085741039, 2497398840), Long_create(1737185663, 3995838144), Long_create(2248741989, 3196670515), Long_create(1798993591, 2557336412), Long_create(3737383206, 4091738259), Long_create(3848900024, 3273390607), Long_create(1361133101, 2618712486), Long_create(459826043, 4189939978), Long_create(2085847752, 3351951982), Long_create(4245658579, 2681561585),
    Long_create(2498086431, 4290498537), Long_create(280482227, 3432398830), Long_create(224385781, 2745919064), Long_create(1038502084, 2196735251), Long_create(4238583712, 3514776401), Long_create(2531873511, 2811821121), Long_create(1166505349, 2249456897), Long_create(2725402018, 3599131035), Long_create(2180321615, 2879304828), Long_create(3462244210, 2303443862), Long_create(2103616899, 3685510180), Long_create(1682893519, 2948408144), Long_create(2205308275, 2358726515), Long_create(3528493240, 3773962424),
    Long_create(3681788051, 3019169939), Long_create(3804423900, 2415335951), Long_create(74124026, 3864537523), Long_create(1777286139, 3091630018), Long_create(3139815829, 2473304014), Long_create(2446724950, 3957286423), Long_create(3675366878, 3165829138), Long_create(363313125, 2532663311), Long_create(3158281377, 4052261297), Long_create(808638183, 3241809038), Long_create(2364897465, 2593447230), Long_create(3783835944, 4149515568), Long_create(450088378, 3319612455), Long_create(360070702, 2655689964),
    Long_create(2294100042, 4249103942), Long_create(117293115, 3399283154), Long_create(952827951, 2719426523), Long_create(2480249279, 2175541218), Long_create(3109405388, 3480865949), Long_create(3346517769, 2784692759), Long_create(3536207675, 2227754207), Long_create(2221958443, 3564406732), Long_create(59579836, 2851525386), Long_create(3483637705, 2281220308), Long_create(419859574, 3649952494), Long_create(1194881118, 2919961995), Long_create(955904894, 2335969596), Long_create(4106428209, 3737551353),
    Long_create(708162189, 2990041083), Long_create(2284516670, 2392032866), Long_create(1937239754, 3827252586), Long_create(690798344, 3061802069), Long_create(1411632134, 2449441655), Long_create(2258611415, 3919106648), Long_create(3524876050, 3135285318), Long_create(242920462, 2508228255), Long_create(388672740, 4013165208), Long_create(2028925110, 3210532166), Long_create(764146629, 2568425733), Long_create(363641147, 4109481173), Long_create(2008899836, 3287584938), Long_create(3325106787, 2630067950),
    Long_create(1025203564, 4208108721), Long_create(4256136688, 3366486976), Long_create(2545915891, 2693189581), Long_create(1177739254, 2154551665), Long_create(1884382806, 3447282664), Long_create(2366499704, 2757826131), Long_create(1034206304, 2206260905), Long_create(1654730086, 3530017448), Long_create(3041770987, 2824013958), Long_create(4151403708, 2259211166), Long_create(629291719, 3614737867), Long_create(3080413753, 2891790293), Long_create(4182317920, 2313432234), Long_create(4114728295, 3701491575),
    Long_create(3291782636, 2961193260), Long_create(2633426109, 2368954608), Long_create(3354488315, 3790327373), Long_create(106610275, 3032261899), Long_create(944281679, 2425809519), Long_create(3228837605, 3881295230), Long_create(2583070084, 3105036184), Long_create(2925449526, 2484028947), Long_create(1244745405, 3974446316), Long_create(136802865, 3179557053), Long_create(1827429210, 2543645642), Long_create(3782880196, 4069833027), Long_create(1308317238, 3255866422), Long_create(3623634168, 2604693137),
    Long_create(2361840832, 4167509020), Long_create(1889472666, 3334007216), Long_create(652584673, 2667205773), Long_create(185142018, 4267529237), Long_create(2725093992, 3414023389), Long_create(3039068653, 2731218711), Long_create(1572261463, 2184974969), Long_create(4233605259, 3495959950), Long_create(3386884207, 2796767960), Long_create(2709507366, 2237414368), Long_create(3476218326, 3579862989), Long_create(3639968120, 2863890391), Long_create(2052981037, 2291112313), Long_create(2425776200, 3665779701),
    Long_create(1081627501, 2932623761), Long_create(6308541, 2346099009), Long_create(1728080585, 3753758414), Long_create(2241457927, 3003006731), Long_create(934172882, 2402405385), Long_create(1494676612, 3843848616), Long_create(336747830, 3075078893), Long_create(1987385183, 2460063114), Long_create(602835915, 3936100983), Long_create(2200255650, 3148880786), Long_create(901211061, 2519104629), Long_create(3159924616, 4030567406), Long_create(1668946233, 3224453925), Long_create(1335156987, 2579563140),
    Long_create(2136251179, 4127301024), Long_create(2567994402, 3301840819), Long_create(2913388981, 2641472655), Long_create(366455074, 4226356249), Long_create(1152157518, 3381084999), Long_create(1780719474, 2704867999), Long_create(2283569038, 2163894399), Long_create(1076730083, 3462231039), Long_create(1720377526, 2769784831), Long_create(517308561, 2215827865), Long_create(827693699, 3545324584), Long_create(1521148418, 2836259667), Long_create(3793899112, 2269007733), Long_create(916277824, 3630412374),
    Long_create(1592015718, 2904329899), Long_create(2132606034, 2323463919), Long_create(835189277, 3717542271), Long_create(4104125258, 2974033816), Long_create(2424306747, 2379227053), Long_create(3019897337, 3806763285), Long_create(2415917869, 3045410628), Long_create(3650721214, 2436328502), Long_create(2405180105, 3898125604), Long_create(2783137543, 3118500483), Long_create(3944496953, 2494800386), Long_create(298240911, 3991680619), Long_create(1097586188, 3193344495), Long_create(878068950, 2554675596),
    Long_create(3981890698, 4087480953), Long_create(608532181, 3269984763), Long_create(2204812663, 2615987810), Long_create(3527700261, 4185580496), Long_create(1963166749, 3348464397), Long_create(4147513777, 2678771517), Long_create(3200048207, 4286034428), Long_create(4278025484, 3428827542), Long_create(1704433468, 2743062034), Long_create(2222540234, 2194449627), Long_create(120090538, 3511119404), Long_create(955065889, 2808895523), Long_create(2482039630, 2247116418), Long_create(3112269949, 3595386269),
    Long_create(3348809418, 2876309015), Long_create(2679047534, 2301047212), Long_create(850502218, 3681675540), Long_create(680401775, 2945340432), Long_create(3121301797, 2356272345), Long_create(699115580, 3770035753), Long_create(2277279382, 3016028602), Long_create(103836587, 2412822882), Long_create(1025131999, 3860516611), Long_create(4256079436, 3088413288), Long_create(827883168, 2470730631), Long_create(3901593088, 3953169009)]);
    otcit_DoubleAnalyzer_exp10Table = $rt_createShortArrayFromData([(-70), (-66), (-63), (-60), (-56), (-53), (-50), (-46), (-43), (-40), (-36), (-33), (-30), (-26), (-23), (-20), (-16), (-13), (-10), (-6), (-3), 0, 4, 7, 10, 14, 17, 20, 23, 27, 30, 33, 37, 40, 43, 47, 50, 53, 57, 60, 63, 67, 70, 73, 77, 80, 83, 87, 90, 93, 97, 100, 103, 107, 110, 113, 116, 120, 123, 126, 130, 133, 136, 140, 143, 146, 150, 153, 156, 160, 163, 166, 170, 173, 176, 180, 183, 186, 190, 193, 196, 200, 203, 206, 210, 213, 216, 219,
    223, 226, 229, 233, 236, 239, 243, 246, 249, 253, 256, 259, 263, 266, 269, 273, 276, 279, 283, 286, 289, 293, 296, 299, 303, 306, 309, 312, 316, 319, 322, 326, 329, 332, 336, 339, 342, 346, 349, 352, 356, 359, 362, 366, 369, 372, 376, 379, 382, 386, 389, 392, 396, 399, 402, 406, 409, 412, 415, 419, 422, 425, 429, 432, 435, 439, 442, 445, 449, 452, 455, 459, 462, 465, 469, 472, 475, 479, 482, 485, 489, 492, 495, 499, 502, 505, 508, 512, 515, 518, 522, 525, 528, 532, 535, 538, 542, 545, 548, 552, 555, 558,
    562, 565, 568, 572, 575, 578, 582, 585, 588, 592, 595, 598, 601, 605, 608, 611, 615, 618, 621, 625, 628, 631, 635, 638, 641, 645, 648, 651, 655, 658, 661, 665, 668, 671, 675, 678, 681, 685, 688, 691, 695, 698, 701, 704, 708, 711, 714, 718, 721, 724, 728, 731, 734, 738, 741, 744, 748, 751, 754, 758, 761, 764, 768, 771, 774, 778, 781, 784, 788, 791, 794, 797, 801, 804, 807, 811, 814, 817, 821, 824, 827, 831, 834, 837, 841, 844, 847, 851, 854, 857, 861, 864, 867, 871, 874, 877, 881, 884, 887, 891, 894, 897,
    900, 904, 907, 910, 914, 917, 920, 924, 927, 930, 934, 937, 940, 944, 947, 950, 954, 957, 960, 964, 967, 970, 974, 977, 980, 984, 987, 990, 993, 997, 1000, 1003, 1007, 1010, 1013, 1017, 1020, 1023, 1027, 1030, 1033, 1037, 1040, 1043, 1047, 1050, 1053, 1057, 1060, 1063, 1067, 1070, 1073, 1077, 1080, 1083, 1086, 1090, 1093, 1096, 1100, 1103, 1106, 1110, 1113, 1116, 1120, 1123, 1126, 1130, 1133, 1136, 1140, 1143, 1146, 1150, 1153, 1156, 1160, 1163, 1166, 1170, 1173, 1176, 1180, 1183, 1186, 1189, 1193, 1196,
    1199, 1203, 1206, 1209, 1213, 1216, 1219, 1223, 1226, 1229, 1233, 1236, 1239, 1243, 1246, 1249, 1253, 1256, 1259, 1263, 1266, 1269, 1273, 1276, 1279, 1282, 1286, 1289, 1292, 1296, 1299, 1302, 1306, 1309, 1312, 1316, 1319, 1322, 1326, 1329, 1332, 1336, 1339, 1342, 1346, 1349, 1352, 1356, 1359, 1362, 1366, 1369, 1372, 1376, 1379, 1382, 1385, 1389, 1392, 1395, 1399, 1402, 1405, 1409, 1412, 1415, 1419, 1422, 1425, 1429, 1432, 1435, 1439, 1442, 1445, 1449, 1452, 1455, 1459, 1462, 1465, 1469, 1472, 1475, 1478,
    1482, 1485, 1488, 1492, 1495, 1498, 1502, 1505, 1508, 1512, 1515, 1518, 1522, 1525, 1528, 1532, 1535, 1538, 1542, 1545, 1548, 1552, 1555, 1558, 1562, 1565, 1568, 1572, 1575, 1578, 1581, 1585, 1588, 1591, 1595, 1598, 1601, 1605, 1608, 1611, 1615, 1618, 1621, 1625, 1628, 1631, 1635, 1638, 1641, 1645, 1648, 1651, 1655, 1658, 1661, 1665, 1668, 1671, 1674, 1678, 1681, 1684, 1688, 1691, 1694, 1698, 1701, 1704, 1708, 1711, 1714, 1718, 1721, 1724, 1728, 1731, 1734, 1738, 1741, 1744, 1748, 1751, 1754, 1758, 1761,
    1764, 1767, 1771, 1774, 1777, 1781, 1784, 1787, 1791, 1794, 1797, 1801, 1804, 1807, 1811, 1814, 1817, 1821, 1824, 1827, 1831, 1834, 1837, 1841, 1844, 1847, 1851, 1854, 1857, 1861, 1864, 1867, 1870, 1874, 1877, 1880, 1884, 1887, 1890, 1894, 1897, 1900, 1904, 1907, 1910, 1914, 1917, 1920, 1924, 1927, 1930, 1934, 1937, 1940, 1944, 1947, 1950, 1954, 1957, 1960, 1963, 1967, 1970, 1973, 1977, 1980, 1983, 1987, 1990, 1993, 1997, 2000, 2003, 2007, 2010, 2013, 2017, 2020, 2023, 2027, 2030, 2033, 2037, 2040, 2043,
    2047, 2050, 2053, 2057, 2060, 2063, 2066, 2070, 2073, 2076, 2080, 2083, 2086, 2090, 2093, 2096, 2100, 2103, 2106, 2110, 2113, 2116, 2120]);
};
function jur_EOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter0 = 0;
}
let jur_EOLSet__init_ = ($this, $counter) => {
    jur_AbstractSet__init_($this);
    $this.$consCounter0 = $counter;
},
jur_EOLSet__init_0 = var_0 => {
    let var_1 = new jur_EOLSet();
    jur_EOLSet__init_(var_1, var_0);
    return var_1;
},
jur_EOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $rightBound, var$5, var$6, $ch;
    $rightBound = !$matchResult.$hasAnchoringBounds() ? $testString.$length() : $matchResult.$getRightBound();
    if ($strIndex >= $rightBound) {
        $matchResult.$setConsumed($this.$consCounter0, 0);
        return $this.$next1.$matches($strIndex, $testString, $matchResult);
    }
    var$5 = $rightBound - $strIndex | 0;
    if (var$5 == 2 && $testString.$charAt($strIndex) == 13) {
        var$6 = $strIndex + 1 | 0;
        if ($testString.$charAt(var$6) == 10) {
            $matchResult.$setConsumed($this.$consCounter0, 0);
            return $this.$next1.$matches($strIndex, $testString, $matchResult);
        }
    }
    a: {
        if (var$5 == 1) {
            $ch = $testString.$charAt($strIndex);
            if ($ch == 10)
                break a;
            if ($ch == 13)
                break a;
            if ($ch == 133)
                break a;
            if (($ch | 1) == 8233)
                break a;
        }
        return (-1);
    }
    $matchResult.$setConsumed($this.$consCounter0, 0);
    return $this.$next1.$matches($strIndex, $testString, $matchResult);
},
jur_EOLSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !$matchResult.$getConsumed($this.$consCounter0) ? 0 : 1;
    $matchResult.$setConsumed($this.$consCounter0, (-1));
    return $res;
},
jur_EOLSet_getName = $this => {
    return $rt_s(287);
},
otr_StringInfo = $rt_classWithoutFields(otrr_ReflectionInfo);
function jur_Lexer() {
    let a = this; jl_Object.call(a);
    a.$pattern0 = null;
    a.$flags0 = 0;
    a.$mode0 = 0;
    a.$savedMode = 0;
    a.$lookBack = 0;
    a.$ch = 0;
    a.$lookAhead0 = 0;
    a.$groupName = null;
    a.$patternFullLength = 0;
    a.$curST = null;
    a.$lookAheadST = null;
    a.$index = 0;
    a.$prevNW = 0;
    a.$curToc = 0;
    a.$lookAheadToc = 0;
    a.$orig = null;
}
let jur_Lexer_decompTable = null,
jur_Lexer_singleDecompTable = null,
jur_Lexer_singleDecompTableSize = 0,
jur_Lexer__init_ = ($this, $pattern, $flags) => {
    jl_Object__init_($this);
    $this.$mode0 = 1;
    $this.$orig = $pattern;
    if (($flags & 16) > 0)
        $pattern = jur_Pattern_quote($pattern);
    else if (($flags & 128) > 0)
        $pattern = jur_Lexer_normalize($pattern);
    $this.$pattern0 = $rt_createCharArray($pattern.$length() + 2 | 0);
    jl_System_fastArraycopy($pattern.$toCharArray(), 0, $this.$pattern0, 0, $pattern.$length());
    $this.$pattern0.data[$this.$pattern0.data.length - 1 | 0] = 0;
    $this.$pattern0.data[$this.$pattern0.data.length - 2 | 0] = 0;
    $this.$patternFullLength = $this.$pattern0.data.length;
    $this.$flags0 = $flags;
    jur_Lexer_movePointer($this);
    jur_Lexer_movePointer($this);
},
jur_Lexer__init_0 = (var_0, var_1) => {
    let var_2 = new jur_Lexer();
    jur_Lexer__init_(var_2, var_0, var_1);
    return var_2;
},
jur_Lexer_peek = $this => {
    return $this.$ch;
},
jur_Lexer_setMode = ($this, $mode) => {
    if ($mode > 0 && $mode < 3)
        $this.$mode0 = $mode;
    if ($mode == 1)
        jur_Lexer_reread($this);
},
jur_Lexer_restoreFlags = ($this, $flags) => {
    $this.$flags0 = $flags;
    $this.$lookAhead0 = $this.$ch;
    $this.$lookAheadST = $this.$curST;
    $this.$index = $this.$curToc + 1 | 0;
    $this.$lookAheadToc = $this.$curToc;
    jur_Lexer_movePointer($this);
},
jur_Lexer_peekSpecial = $this => {
    return $this.$curST;
},
jur_Lexer_isSpecial = $this => {
    return $this.$curST === null ? 0 : 1;
},
jur_Lexer_isNextSpecial = $this => {
    return $this.$lookAheadST === null ? 0 : 1;
},
jur_Lexer_next = $this => {
    jur_Lexer_movePointer($this);
    return $this.$lookBack;
},
jur_Lexer_nextSpecial = $this => {
    let $res;
    $res = $this.$curST;
    jur_Lexer_movePointer($this);
    return $res;
},
jur_Lexer_lookAhead = $this => {
    return $this.$lookAhead0;
},
jur_Lexer_back = $this => {
    return $this.$lookBack;
},
jur_Lexer_normalize = $input => {
    return $input;
},
jur_Lexer_reread = $this => {
    $this.$lookAhead0 = $this.$ch;
    $this.$lookAheadST = $this.$curST;
    $this.$index = $this.$lookAheadToc;
    $this.$lookAheadToc = $this.$curToc;
    jur_Lexer_movePointer($this);
},
jur_Lexer_movePointer = $this => {
    let $reread, var$2, $cs, $negative, $nonCap, $behindOrNamed, $nameBuilder, var$8, $mod, $$je;
    $this.$lookBack = $this.$ch;
    $this.$ch = $this.$lookAhead0;
    $this.$curST = $this.$lookAheadST;
    $this.$curToc = $this.$lookAheadToc;
    $this.$lookAheadToc = $this.$index;
    a: {
        while (true) {
            $reread = 0;
            $this.$lookAhead0 = $this.$index >= $this.$pattern0.data.length ? 0 : jur_Lexer_nextCodePoint($this);
            $this.$lookAheadST = null;
            if ($this.$mode0 == 4) {
                if ($this.$lookAhead0 != 92)
                    return;
                $this.$lookAhead0 = $this.$index >= $this.$pattern0.data.length ? 0 : $this.$pattern0.data[jur_Lexer_nextIndex($this)];
                switch ($this.$lookAhead0) {
                    case 69:
                        break;
                    default:
                        $this.$lookAhead0 = 92;
                        $this.$index = $this.$prevNW;
                        return;
                }
                $this.$mode0 = $this.$savedMode;
                $this.$lookAhead0 = $this.$index > ($this.$pattern0.data.length - 2 | 0) ? 0 : jur_Lexer_nextCodePoint($this);
            }
            b: {
                if ($this.$lookAhead0 == 92) {
                    var$2 = $this.$index >= ($this.$pattern0.data.length - 2 | 0) ? (-1) : jur_Lexer_nextCodePoint($this);
                    c: {
                        $this.$lookAhead0 = var$2;
                        switch ($this.$lookAhead0) {
                            case -1:
                                $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$toString(), $this.$index));
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                            case 16:
                            case 17:
                            case 18:
                            case 19:
                            case 20:
                            case 21:
                            case 22:
                            case 23:
                            case 24:
                            case 25:
                            case 26:
                            case 27:
                            case 28:
                            case 29:
                            case 30:
                            case 31:
                            case 32:
                            case 33:
                            case 34:
                            case 35:
                            case 36:
                            case 37:
                            case 38:
                            case 39:
                            case 40:
                            case 41:
                            case 42:
                            case 43:
                            case 44:
                            case 45:
                            case 46:
                            case 47:
                            case 58:
                            case 59:
                            case 60:
                            case 61:
                            case 62:
                            case 63:
                            case 64:
                            case 91:
                            case 92:
                            case 93:
                            case 94:
                            case 95:
                            case 96:
                            case 118:
                                break;
                            case 48:
                                $this.$lookAhead0 = jur_Lexer_readOctals($this);
                                break b;
                            case 49:
                            case 50:
                            case 51:
                            case 52:
                            case 53:
                            case 54:
                            case 55:
                            case 56:
                            case 57:
                                if ($this.$mode0 != 1)
                                    break b;
                                $this.$lookAhead0 = (-2147483648) | $this.$lookAhead0;
                                break b;
                            case 65:
                                $this.$lookAhead0 = (-2147483583);
                                break b;
                            case 66:
                                $this.$lookAhead0 = (-2147483582);
                                break b;
                            case 67:
                            case 69:
                            case 70:
                            case 72:
                            case 73:
                            case 74:
                            case 75:
                            case 76:
                            case 77:
                            case 78:
                            case 79:
                            case 82:
                            case 84:
                            case 85:
                            case 86:
                            case 88:
                            case 89:
                            case 103:
                            case 104:
                            case 105:
                            case 106:
                            case 107:
                            case 108:
                            case 109:
                            case 111:
                            case 113:
                            case 121:
                                $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$toString(), $this.$index));
                            case 68:
                            case 83:
                            case 87:
                            case 100:
                            case 115:
                            case 119:
                                $this.$lookAheadST = jur_AbstractCharClass_getPredefinedClass(jl_String__init_0($this.$pattern0, $this.$prevNW, 1), 0);
                                $this.$lookAhead0 = 0;
                                break b;
                            case 71:
                                $this.$lookAhead0 = (-2147483577);
                                break b;
                            case 80:
                            case 112:
                                break c;
                            case 81:
                                $this.$savedMode = $this.$mode0;
                                $this.$mode0 = 4;
                                $reread = 1;
                                break b;
                            case 90:
                                $this.$lookAhead0 = (-2147483558);
                                break b;
                            case 97:
                                $this.$lookAhead0 = 7;
                                break b;
                            case 98:
                                $this.$lookAhead0 = (-2147483550);
                                break b;
                            case 99:
                                if ($this.$index >= ($this.$pattern0.data.length - 2 | 0))
                                    $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$toString(), $this.$index));
                                $this.$lookAhead0 = $this.$pattern0.data[jur_Lexer_nextIndex($this)] & 31;
                                break b;
                            case 101:
                                $this.$lookAhead0 = 27;
                                break b;
                            case 102:
                                $this.$lookAhead0 = 12;
                                break b;
                            case 110:
                                $this.$lookAhead0 = 10;
                                break b;
                            case 114:
                                $this.$lookAhead0 = 13;
                                break b;
                            case 116:
                                $this.$lookAhead0 = 9;
                                break b;
                            case 117:
                                $this.$lookAhead0 = jur_Lexer_readHex($this, 4);
                                break b;
                            case 120:
                                $this.$lookAhead0 = jur_Lexer_readHex($this, 2);
                                break b;
                            case 122:
                                $this.$lookAhead0 = (-2147483526);
                                break b;
                            default:
                        }
                        break b;
                    }
                    $cs = jur_Lexer_parseCharClassName($this);
                    $negative = 0;
                    if ($this.$lookAhead0 == 80)
                        $negative = 1;
                    try {
                        $this.$lookAheadST = jur_AbstractCharClass_getPredefinedClass($cs, $negative);
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof ju_MissingResourceException) {
                            $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$toString(), $this.$index));
                        } else {
                            throw $$e;
                        }
                    }
                    $this.$lookAhead0 = 0;
                } else if ($this.$mode0 == 1)
                    switch ($this.$lookAhead0) {
                        case 36:
                            $this.$lookAhead0 = (-536870876);
                            break b;
                        case 40:
                            if ($this.$pattern0.data[$this.$index] != 63) {
                                $this.$lookAhead0 = (-2147483608);
                                break b;
                            }
                            jur_Lexer_nextIndex($this);
                            $nonCap = $this.$pattern0.data[$this.$index];
                            $behindOrNamed = 0;
                            $nameBuilder = null;
                            while (true) {
                                d: {
                                    if (!$behindOrNamed) {
                                        switch ($nonCap) {
                                            case 33:
                                                break;
                                            case 60:
                                                jur_Lexer_nextIndex($this);
                                                $nonCap = $this.$pattern0.data[$this.$index];
                                                $behindOrNamed = 1;
                                                break d;
                                            case 61:
                                                $this.$lookAhead0 = (-536870872);
                                                jur_Lexer_nextIndex($this);
                                                break d;
                                            case 62:
                                                $this.$lookAhead0 = (-33554392);
                                                jur_Lexer_nextIndex($this);
                                                break d;
                                            default:
                                                $this.$lookAhead0 = jur_Lexer_readFlags($this);
                                                if ($this.$lookAhead0 < 256) {
                                                    $this.$flags0 = $this.$lookAhead0;
                                                    $this.$lookAhead0 = $this.$lookAhead0 << 16;
                                                    $this.$lookAhead0 = (-1073741784) | $this.$lookAhead0;
                                                    break d;
                                                }
                                                $this.$lookAhead0 = $this.$lookAhead0 & 255;
                                                $this.$flags0 = $this.$lookAhead0;
                                                $this.$lookAhead0 = $this.$lookAhead0 << 16;
                                                $this.$lookAhead0 = (-16777176) | $this.$lookAhead0;
                                                break d;
                                        }
                                        $this.$lookAhead0 = (-268435416);
                                        jur_Lexer_nextIndex($this);
                                    } else {
                                        e: {
                                            switch ($nonCap) {
                                                case 33:
                                                    break;
                                                case 61:
                                                    $behindOrNamed = 0;
                                                    $this.$lookAhead0 = (-134217688);
                                                    jur_Lexer_nextIndex($this);
                                                    break d;
                                                case 62:
                                                    if ($nameBuilder === null)
                                                        $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$toString(), $this.$index));
                                                    $this.$groupName = $nameBuilder.$toString();
                                                    jur_Lexer_nextIndex($this);
                                                    $nameBuilder = null;
                                                    $behindOrNamed = 0;
                                                    $this.$lookAhead0 = (-2130706392);
                                                    break d;
                                                default:
                                                    break e;
                                            }
                                            $behindOrNamed = 0;
                                            $this.$lookAhead0 = (-67108824);
                                            jur_Lexer_nextIndex($this);
                                            break d;
                                        }
                                        f: {
                                            if (!($nonCap >= 65 && $nonCap <= 90)) {
                                                if ($nonCap < 97)
                                                    break f;
                                                if ($nonCap > 122)
                                                    break f;
                                            }
                                            if ($nameBuilder === null)
                                                $nameBuilder = jl_StringBuilder__init_();
                                            $nameBuilder.$append0($nonCap);
                                            jur_Lexer_nextIndex($this);
                                            $nonCap = $this.$pattern0.data[$this.$index];
                                            break d;
                                        }
                                        if ($nonCap < 48)
                                            break a;
                                        if ($nonCap > 57)
                                            break a;
                                        if ($nameBuilder === null) {
                                            var$8 = jur_PatternSyntaxException__init_($rt_s(392), $this.$toString(), $this.$index);
                                            $rt_throw(var$8);
                                        }
                                        $nameBuilder.$append0($nonCap);
                                        jur_Lexer_nextIndex($this);
                                        $nonCap = $this.$pattern0.data[$this.$index];
                                    }
                                }
                                if (!$behindOrNamed)
                                    break;
                            }
                            break b;
                        case 41:
                            $this.$lookAhead0 = (-536870871);
                            break b;
                        case 42:
                        case 43:
                        case 63:
                            $mod = $this.$index >= $this.$pattern0.data.length ? 42 : $this.$pattern0.data[$this.$index];
                            switch ($mod) {
                                case 43:
                                    $this.$lookAhead0 = $this.$lookAhead0 | (-2147483648);
                                    jur_Lexer_nextIndex($this);
                                    break b;
                                case 63:
                                    $this.$lookAhead0 = $this.$lookAhead0 | (-1073741824);
                                    jur_Lexer_nextIndex($this);
                                    break b;
                                default:
                            }
                            $this.$lookAhead0 = $this.$lookAhead0 | (-536870912);
                            break b;
                        case 46:
                            $this.$lookAhead0 = (-536870866);
                            break b;
                        case 91:
                            $this.$lookAhead0 = (-536870821);
                            $this.$setMode(2);
                            break b;
                        case 93:
                            if ($this.$mode0 != 2)
                                break b;
                            $this.$lookAhead0 = (-536870819);
                            break b;
                        case 94:
                            $this.$lookAhead0 = (-536870818);
                            break b;
                        case 123:
                            $this.$lookAheadST = jur_Lexer_processQuantifier($this, $this.$lookAhead0);
                            break b;
                        case 124:
                            $this.$lookAhead0 = (-536870788);
                            break b;
                        default:
                    }
                else if ($this.$mode0 == 2)
                    switch ($this.$lookAhead0) {
                        case 38:
                            $this.$lookAhead0 = (-536870874);
                            break b;
                        case 45:
                            $this.$lookAhead0 = (-536870867);
                            break b;
                        case 91:
                            $this.$lookAhead0 = (-536870821);
                            break b;
                        case 93:
                            $this.$lookAhead0 = (-536870819);
                            break b;
                        case 94:
                            $this.$lookAhead0 = (-536870818);
                            break b;
                        default:
                    }
            }
            if ($reread)
                continue;
            else
                break;
        }
        return;
    }
    $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$toString(), $this.$index));
},
jur_Lexer_parseCharClassName = $this => {
    let $sb, var$2, var$3, $ch, $res;
    $sb = jl_StringBuilder__init_0(10);
    if ($this.$index < ($this.$pattern0.data.length - 2 | 0)) {
        if ($this.$pattern0.data[$this.$index] != 123) {
            var$2 = jl_String__init_0($this.$pattern0, jur_Lexer_nextIndex($this), 1);
            var$3 = jl_StringBuilder__init_();
            jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(393)), var$2);
            return jl_StringBuilder_toString(var$3);
        }
        jur_Lexer_nextIndex($this);
        $ch = 0;
        a: {
            while ($this.$index < ($this.$pattern0.data.length - 2 | 0)) {
                $ch = $this.$pattern0.data[jur_Lexer_nextIndex($this)];
                if ($ch == 125)
                    break a;
                $sb.$append0($ch);
            }
        }
        if ($ch != 125)
            $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$toString(), $this.$index));
    }
    if (!$sb.$length())
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$toString(), $this.$index));
    $res = $sb.$toString();
    if ($res.$length() == 1) {
        var$2 = jl_StringBuilder__init_();
        jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(393)), $res);
        return jl_StringBuilder_toString(var$2);
    }
    b: {
        c: {
            if ($res.$length() > 3) {
                if ($res.$startsWith1($rt_s(393)))
                    break c;
                if ($res.$startsWith1($rt_s(394)))
                    break c;
            }
            break b;
        }
        $res = $res.$substring0(2);
    }
    return $res;
},
jur_Lexer_processQuantifier = ($this, $ch) => {
    let $sb, $min, $max, $mod, $$je;
    $sb = jl_StringBuilder__init_0(4);
    $min = (-1);
    $max = 2147483647;
    a: {
        while (true) {
            if ($this.$index >= $this.$pattern0.data.length)
                break a;
            $ch = $this.$pattern0.data[jur_Lexer_nextIndex($this)];
            if ($ch == 125)
                break a;
            if ($ch == 44 && $min < 0)
                try {
                    $min = jl_Integer_parseInt0($sb.$toString(), 10);
                    $sb.$delete0(0, $sb.$length());
                    continue;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_NumberFormatException) {
                        break;
                    } else {
                        throw $$e;
                    }
                }
            $sb.$append0($ch & 65535);
        }
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$toString(), $this.$index));
    }
    if ($ch != 125)
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$toString(), $this.$index));
    if ($sb.$length() > 0)
        b: {
            try {
                $max = jl_Integer_parseInt0($sb.$toString(), 10);
                if ($min >= 0)
                    break b;
                $min = $max;
                break b;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_NumberFormatException) {
                    $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$toString(), $this.$index));
                } else {
                    throw $$e;
                }
            }
        }
    else if ($min < 0)
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$toString(), $this.$index));
    if (($min | $max | ($max - $min | 0)) < 0)
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$toString(), $this.$index));
    $mod = $this.$index >= $this.$pattern0.data.length ? 42 : $this.$pattern0.data[$this.$index];
    c: {
        switch ($mod) {
            case 43:
                $this.$lookAhead0 = (-2147483525);
                jur_Lexer_nextIndex($this);
                break c;
            case 63:
                $this.$lookAhead0 = (-1073741701);
                jur_Lexer_nextIndex($this);
                break c;
            default:
        }
        $this.$lookAhead0 = (-536870789);
    }
    return jur_Quantifier__init_0($min, $max);
},
jur_Lexer_toString = $this => {
    return $this.$orig;
},
jur_Lexer_isEmpty = $this => {
    return !$this.$ch && !$this.$lookAhead0 && $this.$index == $this.$patternFullLength && !$this.$isSpecial() ? 1 : 0;
},
jur_Lexer_isLetter = $ch => {
    return $ch < 0 ? 0 : 1;
},
jur_Lexer_isLetter0 = $this => {
    return !$this.$isEmpty() && !$this.$isSpecial() && jur_Lexer_isLetter($this.$ch) ? 1 : 0;
},
jur_Lexer_isHighSurrogate0 = $this => {
    return $this.$ch <= 56319 && $this.$ch >= 55296 ? 1 : 0;
},
jur_Lexer_isLowSurrogate0 = $this => {
    return $this.$ch <= 57343 && $this.$ch >= 56320 ? 1 : 0;
},
jur_Lexer_isHighSurrogate = $ch => {
    return $ch <= 56319 && $ch >= 55296 ? 1 : 0;
},
jur_Lexer_isLowSurrogate = $ch => {
    return $ch <= 57343 && $ch >= 56320 ? 1 : 0;
},
jur_Lexer_readHex = ($this, $max) => {
    let $st, $length, $i, var$5, $$je;
    $st = jl_StringBuilder__init_0($max);
    $length = $this.$pattern0.data.length - 2 | 0;
    $i = 0;
    while (true) {
        var$5 = $rt_compare($i, $max);
        if (var$5 >= 0)
            break;
        if ($this.$index >= $length)
            break;
        $st.$append0($this.$pattern0.data[jur_Lexer_nextIndex($this)]);
        $i = $i + 1 | 0;
    }
    if (!var$5)
        a: {
            try {
                var$5 = jl_Integer_parseInt0($st.$toString(), 16);
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_NumberFormatException) {
                    break a;
                } else {
                    throw $$e;
                }
            }
            return var$5;
        }
    $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$toString(), $this.$index));
},
jur_Lexer_readOctals = $this => {
    let $max, $i, $length, $res, var$5;
    $max = 3;
    $i = 1;
    $length = $this.$pattern0.data.length - 2 | 0;
    $res = jl_Character_digit($this.$pattern0.data[$this.$index], 8);
    switch ($res) {
        case -1:
            break;
        default:
            if ($res > 3)
                $max = 2;
            jur_Lexer_nextIndex($this);
            a: {
                while (true) {
                    if ($i >= $max)
                        break a;
                    if ($this.$index >= $length)
                        break a;
                    var$5 = jl_Character_digit($this.$pattern0.data[$this.$index], 8);
                    if (var$5 < 0)
                        break;
                    $res = ($res * 8 | 0) + var$5 | 0;
                    jur_Lexer_nextIndex($this);
                    $i = $i + 1 | 0;
                }
            }
            return $res;
    }
    $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$toString(), $this.$index));
},
jur_Lexer_readFlags = $this => {
    let $pos, $res, $ch;
    $pos = 1;
    $res = $this.$flags0;
    a: while (true) {
        if ($this.$index >= $this.$pattern0.data.length)
            $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$toString(), $this.$index));
        b: {
            c: {
                $ch = $this.$pattern0.data[$this.$index];
                switch ($ch) {
                    case 41:
                        jur_Lexer_nextIndex($this);
                        return $res | 256;
                    case 45:
                        if (!$pos)
                            $rt_throw(jur_PatternSyntaxException__init_($rt_s(54), $this.$toString(), $this.$index));
                        $pos = 0;
                        break b;
                    case 58:
                        break a;
                    case 100:
                        break c;
                    case 105:
                        $res = $pos ? $res | 2 : ($res ^ 2) & $res;
                        break b;
                    case 109:
                        $res = $pos ? $res | 8 : ($res ^ 8) & $res;
                        break b;
                    case 115:
                        $res = $pos ? $res | 32 : ($res ^ 32) & $res;
                        break b;
                    case 117:
                        $res = $pos ? $res | 64 : ($res ^ 64) & $res;
                        break b;
                    case 120:
                        $res = $pos ? $res | 4 : ($res ^ 4) & $res;
                        break b;
                    default:
                }
                break b;
            }
            $res = $pos ? $res | 1 : ($res ^ 1) & $res;
        }
        jur_Lexer_nextIndex($this);
    }
    jur_Lexer_nextIndex($this);
    return $res;
},
jur_Lexer_nextIndex = $this => {
    $this.$prevNW = $this.$index;
    if ($this.$flags0 & 4)
        jur_Lexer_skipComments($this);
    else
        $this.$index = $this.$index + 1 | 0;
    return $this.$prevNW;
},
jur_Lexer_skipComments = $this => {
    let $length;
    $length = $this.$pattern0.data.length - 2 | 0;
    $this.$index = $this.$index + 1 | 0;
    a: while (true) {
        if ($this.$index < $length && jl_Character_isWhitespace0($this.$pattern0.data[$this.$index])) {
            $this.$index = $this.$index + 1 | 0;
            continue;
        }
        if ($this.$index >= $length)
            break;
        if ($this.$pattern0.data[$this.$index] != 35)
            break;
        $this.$index = $this.$index + 1 | 0;
        while (true) {
            if ($this.$index >= $length)
                continue a;
            if (jur_Lexer_isLineSeparator($this, $this.$pattern0.data[$this.$index]))
                continue a;
            $this.$index = $this.$index + 1 | 0;
        }
    }
    return $this.$index;
},
jur_Lexer_isLineSeparator = ($this, $ch) => {
    return $ch != 10 && $ch != 13 && $ch != 133 && ($ch | 1) != 8233 ? 0 : 1;
},
jur_Lexer_getDecomposition = $ch => {
    return jur_Lexer_decompTable.$get5($ch);
},
jur_Lexer_getHangulDecomposition = $ch => {
    let $sIndex, $l, $v, $t, $decomp, var$7;
    $sIndex = $ch - 44032 | 0;
    if ($sIndex >= 0 && $sIndex < 11172) {
        $l = 4352 + ($sIndex / 588 | 0) | 0;
        $v = 4449 + (($sIndex % 588 | 0) / 28 | 0) | 0;
        $t = $sIndex % 28 | 0;
        if (!$t)
            $decomp = $rt_createIntArrayFromData([$l, $v]);
        else {
            var$7 = 4519 + $t | 0;
            $decomp = $rt_createIntArrayFromData([$l, $v, var$7]);
        }
        return $decomp;
    }
    return null;
},
jur_Lexer_hasSingleCodepointDecomposition = $ch => {
    let $hasSingleDecomp;
    $hasSingleDecomp = jur_Lexer_singleDecompTable.$get2($ch);
    return $hasSingleDecomp == jur_Lexer_singleDecompTableSize ? 0 : 1;
},
jur_Lexer_hasDecompositionNonNullCanClass = $ch => {
    return ($ch != 832 ? 0 : 1) | ($ch != 833 ? 0 : 1) | ($ch != 835 ? 0 : 1) | ($ch != 836 ? 0 : 1);
},
jur_Lexer_nextCodePoint = $this => {
    let $high, $lowExpectedIndex, $low;
    $high = $this.$pattern0.data[jur_Lexer_nextIndex($this)];
    if (jl_Character_isHighSurrogate($high)) {
        $lowExpectedIndex = $this.$prevNW + 1 | 0;
        if ($lowExpectedIndex < $this.$pattern0.data.length) {
            $low = $this.$pattern0.data[$lowExpectedIndex];
            if (jl_Character_isLowSurrogate($low)) {
                jur_Lexer_nextIndex($this);
                return jl_Character_toCodePoint($high, $low);
            }
        }
    }
    return $high;
},
jur_Lexer_getIndex = $this => {
    return $this.$curToc;
},
jur_AbstractCharClass$LazySpecialsBlock = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazySpecialsBlock__init_ = $this => {
    jur_AbstractCharClass$LazyCharClass__init_($this);
},
jur_AbstractCharClass$LazySpecialsBlock__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazySpecialsBlock();
    jur_AbstractCharClass$LazySpecialsBlock__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazySpecialsBlock_computeValue = $this => {
    return ((jur_CharClass__init_()).$add0(65279, 65279)).$add0(65520, 65533);
},
jur_AbstractCharClass$LazyNonSpace = $rt_classWithoutFields(jur_AbstractCharClass$LazySpace),
jur_AbstractCharClass$LazyNonSpace__init_ = $this => {
    jur_AbstractCharClass$LazySpace__init_($this);
},
jur_AbstractCharClass$LazyNonSpace__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyNonSpace();
    jur_AbstractCharClass$LazyNonSpace__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyNonSpace_computeValue = $this => {
    let $chCl;
    $chCl = (jur_AbstractCharClass$LazySpace_computeValue($this)).$setNegative(1);
    $chCl.$mayContainSupplCodepoints0 = 1;
    return $chCl;
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_1 = $rt_classWithoutFields(),
otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_ = var$0 => {
    jl_Object__init_(var$0);
};
let otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_0 = () => {
    let var_0 = new otji_JSWrapper$Helper$_clinit_$lambda$_3_1();
    otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_(var_0);
    return var_0;
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept = (var$0, var$1) => {
    otji_JSWrapper$Helper_lambda$static$1(var$1);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept$exported$0 = (var$1, var$2) => {
    var$1.$accept(var$2);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_0 = $rt_classWithoutFields(),
otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_ = var$0 => {
    jl_Object__init_(var$0);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_0 = () => {
    let var_0 = new otji_JSWrapper$Helper$_clinit_$lambda$_3_0();
    otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_(var_0);
    return var_0;
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept = (var$0, var$1) => {
    otji_JSWrapper$Helper_lambda$static$0(var$1);
},
otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept$exported$0 = (var$1, var$2) => {
    var$1.$accept(var$2);
},
ju_Collections = $rt_classWithoutFields(),
ju_Collections_EMPTY_SET = null,
ju_Collections_EMPTY_MAP = null,
ju_Collections_EMPTY_LIST = null,
ju_Collections_EMPTY_ITERATOR = null,
ju_Collections_EMPTY_LIST_ITERATOR = null,
ju_Collections_reverseOrder = null,
ju_Collections_$callClinit = () => {
    ju_Collections_$callClinit = $rt_eraseClinit(ju_Collections);
    ju_Collections__clinit_();
},
ju_Collections_emptyMap = () => {
    ju_Collections_$callClinit();
    return ju_Collections_EMPTY_MAP;
},
ju_Collections_unmodifiableMap = $m => {
    ju_Collections_$callClinit();
    ju_Objects_requireNonNull0($m);
    return ju_Collections$13__init_0($m);
},
ju_Collections__clinit_ = () => {
    ju_Collections_EMPTY_SET = ju_Collections$1__init_0();
    ju_Collections_EMPTY_MAP = ju_Collections$2__init_0();
    ju_Collections_EMPTY_LIST = ju_Collections$3__init_0();
    ju_Collections_EMPTY_ITERATOR = ju_Collections$4__init_0();
    ju_Collections_EMPTY_LIST_ITERATOR = ju_Collections$5__init_0();
    ju_Collections_reverseOrder = ju_Collections$_clinit_$lambda$_59_0__init_0();
};
$rt_packages([-1, "shared", -1, "java", 1, "util", 2, "regex", 1, "nio", 4, "charset", 1, "io", 1, "lang", -1, "org", 8, "teavm", 9, "classlib", 10, "impl", 11, "unicode", -1, "model", 13, "data", 13, "entities"
]);
$rt_metadata([jl_Object, "Object", 7, 0, [], 1, 0, 0, ["$getClass", $rt_wrapFunction0(jl_Object_getClass), "$equals", $rt_wrapFunction1(jl_Object_equals), "$toString", $rt_wrapFunction0(jl_Object_toString), "$identity", $rt_wrapFunction0(jl_Object_identity), "$clone0", $rt_wrapFunction0(jl_Object_clone)],
jur_AbstractCharClass$LazyCharClass, 0, jl_Object, [], 1024, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyCharClass__init_), "$getValue", $rt_wrapFunction1(jur_AbstractCharClass$LazyCharClass_getValue)],
jur_AbstractCharClass$LazyBlank, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyBlank__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyBlank_computeValue)],
jur_AbstractCharClass$LazyCntrl, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyCntrl__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyCntrl_computeValue)],
ji_Serializable, 0, jl_Object, [], 1537, 0, 0, 0,
jl_Number, 0, jl_Object, [ji_Serializable], 1025, 0, 0, ["$_init_", $rt_wrapFunction0(jl_Number__init_)],
jl_Comparable, 0, jl_Object, [], 1537, 0, 0, 0,
jl_Integer, "Integer", 7, jl_Number, [jl_Comparable], 1, 0, jl_Integer_$callClinit, ["$_init_0", $rt_wrapFunction1(jl_Integer__init_), "$intValue", $rt_wrapFunction0(jl_Integer_intValue), "$toString", $rt_wrapFunction0(jl_Integer_toString1)],
jl_AbstractStringBuilder$Constants, 0, jl_Object, [], 0, 0, jl_AbstractStringBuilder$Constants_$callClinit, 0,
jur_AbstractSet, 0, jl_Object, [], 1024, 0, jur_AbstractSet_$callClinit, ["$_init_", $rt_wrapFunction0(jur_AbstractSet__init_), "$_init_10", $rt_wrapFunction1(jur_AbstractSet__init_0), "$find", $rt_wrapFunction3(jur_AbstractSet_find), "$findBack", $rt_wrapFunction4(jur_AbstractSet_findBack), "$setType", $rt_wrapFunction1(jur_AbstractSet_setType), "$getType", $rt_wrapFunction0(jur_AbstractSet_getType), "$getQualifiedName", $rt_wrapFunction0(jur_AbstractSet_getQualifiedName), "$toString", $rt_wrapFunction0(jur_AbstractSet_toString),
"$getNext", $rt_wrapFunction0(jur_AbstractSet_getNext), "$setNext", $rt_wrapFunction1(jur_AbstractSet_setNext), "$first", $rt_wrapFunction1(jur_AbstractSet_first), "$processBackRefReplacement", $rt_wrapFunction0(jur_AbstractSet_processBackRefReplacement), "$processSecondPass", $rt_wrapFunction0(jur_AbstractSet_processSecondPass)],
jur_JointSet, "JointSet", 3, jur_AbstractSet, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_JointSet__init_), "$_init_26", $rt_wrapFunction2(jur_JointSet__init_0), "$matches", $rt_wrapFunction3(jur_JointSet_matches), "$setNext", $rt_wrapFunction1(jur_JointSet_setNext), "$getName", $rt_wrapFunction0(jur_JointSet_getName), "$first", $rt_wrapFunction1(jur_JointSet_first), "$hasConsumed", $rt_wrapFunction1(jur_JointSet_hasConsumed), "$processSecondPass", $rt_wrapFunction0(jur_JointSet_processSecondPass)],
jur_SingleSet, "SingleSet", 3, jur_JointSet, [], 0, 0, 0, ["$_init_9", $rt_wrapFunction2(jur_SingleSet__init_), "$matches", $rt_wrapFunction3(jur_SingleSet_matches), "$find", $rt_wrapFunction3(jur_SingleSet_find), "$findBack", $rt_wrapFunction4(jur_SingleSet_findBack), "$first", $rt_wrapFunction1(jur_SingleSet_first), "$processBackRefReplacement", $rt_wrapFunction0(jur_SingleSet_processBackRefReplacement), "$processSecondPass", $rt_wrapFunction0(jur_SingleSet_processSecondPass)],
v_WebSpriteLibrary, 0, jl_Object, [], 0, 0, v_WebSpriteLibrary_$callClinit, 0,
ma_ModelForView, 0, jl_Object, [], 1537, 0, 0, 0,
ma_ModelForController, 0, jl_Object, [], 1537, 0, 0, 0,
m_GameModel, 0, jl_Object, [ma_ModelForView, ma_ModelForController], 1, 0, m_GameModel_$callClinit, ["$getSecondsInState", $rt_wrapFunction0(m_GameModel_getSecondsInState), "$getState", $rt_wrapFunction0(m_GameModel_getState), "$getBounds", $rt_wrapFunction0(m_GameModel_getBounds), "$getEntityListForView", $rt_wrapFunction0(m_GameModel_getEntityListForView), "$getScore", $rt_wrapFunction0(m_GameModel_getScore), "$getHighScore", $rt_wrapFunction0(m_GameModel_getHighScore), "$getLives", $rt_wrapFunction0(m_GameModel_getLives),
"$getCoins", $rt_wrapFunction0(m_GameModel_getCoins), "$getNumStage", $rt_wrapFunction0(m_GameModel_getNumStage), "$update", $rt_wrapFunction1(m_GameModel_update), "$insertCoin", $rt_wrapFunction0(m_GameModel_insertCoin), "$spendCoin", $rt_wrapFunction0(m_GameModel_spendCoin), "$startGame", $rt_wrapFunction0(m_GameModel_startGame), "$setPlayerMovingRight", $rt_wrapFunction1(m_GameModel_setPlayerMovingRight), "$setPlayerMovingLeft", $rt_wrapFunction1(m_GameModel_setPlayerMovingLeft), "$shoot", $rt_wrapFunction0(m_GameModel_shoot),
"$nukeAll", $rt_wrapFunction0(m_GameModel_nukeAll)],
jur_AbstractCharClass$LazyAlpha, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyAlpha__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyAlpha_computeValue)],
jur_BackReferencedSingleSet, "BackReferencedSingleSet", 3, jur_SingleSet, [], 0, 0, 0, ["$_init_2", $rt_wrapFunction1(jur_BackReferencedSingleSet__init_), "$find", $rt_wrapFunction3(jur_BackReferencedSingleSet_find), "$findBack", $rt_wrapFunction4(jur_BackReferencedSingleSet_findBack), "$processBackRefReplacement", $rt_wrapFunction0(jur_BackReferencedSingleSet_processBackRefReplacement)],
jur_AbstractCharClass$LazyWord, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyWord__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyWord_computeValue)],
jur_AbstractCharClass$LazyNonWord, 0, jur_AbstractCharClass$LazyWord, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonWord__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonWord_computeValue)],
jur_LeafSet, 0, jur_AbstractSet, [], 1024, 0, 0, ["$_init_10", $rt_wrapFunction1(jur_LeafSet__init_0), "$_init_", $rt_wrapFunction0(jur_LeafSet__init_), "$matches", $rt_wrapFunction3(jur_LeafSet_matches), "$charCount", $rt_wrapFunction0(jur_LeafSet_charCount), "$hasConsumed", $rt_wrapFunction1(jur_LeafSet_hasConsumed)],
jur_CISequenceSet, "CISequenceSet", 3, jur_LeafSet, [], 0, 0, 0, ["$_init_62", $rt_wrapFunction1(jur_CISequenceSet__init_), "$accepts", $rt_wrapFunction2(jur_CISequenceSet_accepts), "$getName", $rt_wrapFunction0(jur_CISequenceSet_getName)],
jl_CharSequence, 0, jl_Object, [], 1537, 0, 0, 0,
ju_Map, 0, jl_Object, [], 1537, 0, 0, 0,
ju_SequencedMap, 0, jl_Object, [ju_Map], 1537, 0, 0, 0,
jl_Throwable, 0, jl_Object, [], 1, 0, 0, ["$fillInStackTrace", $rt_wrapFunction0(jl_Throwable_fillInStackTrace), "$getMessage", $rt_wrapFunction0(jl_Throwable_getMessage), "$getLocalizedMessage", $rt_wrapFunction0(jl_Throwable_getLocalizedMessage), "$getCause", $rt_wrapFunction0(jl_Throwable_getCause), "$printStackTrace0", $rt_wrapFunction0(jl_Throwable_printStackTrace), "$printStackTrace", $rt_wrapFunction1(jl_Throwable_printStackTrace0)],
jl_Exception, 0, jl_Throwable, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_Exception__init_), "$_init_1", $rt_wrapFunction1(jl_Exception__init_0)],
jl_RuntimeException, 0, jl_Exception, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_RuntimeException__init_), "$_init_1", $rt_wrapFunction1(jl_RuntimeException__init_0)],
jl_IndexOutOfBoundsException, "IndexOutOfBoundsException", 7, jl_RuntimeException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_IndexOutOfBoundsException__init_0), "$_init_1", $rt_wrapFunction1(jl_IndexOutOfBoundsException__init_2)],
jl_StringIndexOutOfBoundsException, "StringIndexOutOfBoundsException", 7, jl_IndexOutOfBoundsException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_StringIndexOutOfBoundsException__init_0)],
ju_MissingResourceException, "MissingResourceException", 2, jl_RuntimeException, [], 1, 0, 0, ["$_init_19", $rt_wrapFunction3(ju_MissingResourceException__init_)],
jnc_CharsetDecoder, 0, jl_Object, [], 1025, 0, 0, ["$_init_24", $rt_wrapFunction3(jnc_CharsetDecoder__init_), "$onMalformedInput", $rt_wrapFunction1(jnc_CharsetDecoder_onMalformedInput), "$implOnMalformedInput", $rt_wrapFunction1(jnc_CharsetDecoder_implOnMalformedInput), "$onUnmappableCharacter", $rt_wrapFunction1(jnc_CharsetDecoder_onUnmappableCharacter), "$implOnUnmappableCharacter", $rt_wrapFunction1(jnc_CharsetDecoder_implOnUnmappableCharacter), "$decode4", $rt_wrapFunction3(jnc_CharsetDecoder_decode), "$flush",
$rt_wrapFunction1(jnc_CharsetDecoder_flush), "$implFlush", $rt_wrapFunction1(jnc_CharsetDecoder_implFlush)],
jur_CIBackReferenceSet, "CIBackReferenceSet", 3, jur_JointSet, [], 0, 0, 0, ["$_init_8", $rt_wrapFunction2(jur_CIBackReferenceSet__init_), "$matches", $rt_wrapFunction3(jur_CIBackReferenceSet_matches), "$setNext", $rt_wrapFunction1(jur_CIBackReferenceSet_setNext), "$getString", $rt_wrapFunction1(jur_CIBackReferenceSet_getString), "$getName", $rt_wrapFunction0(jur_CIBackReferenceSet_getName), "$hasConsumed", $rt_wrapFunction1(jur_CIBackReferenceSet_hasConsumed)],
jur_UCIBackReferenceSet, "UCIBackReferenceSet", 3, jur_CIBackReferenceSet, [], 0, 0, 0, ["$_init_8", $rt_wrapFunction2(jur_UCIBackReferenceSet__init_), "$matches", $rt_wrapFunction3(jur_UCIBackReferenceSet_matches), "$getName", $rt_wrapFunction0(jur_UCIBackReferenceSet_getName)],
jn_ByteOrder, 0, jl_Object, [], 17, 0, jn_ByteOrder_$callClinit, 0,
jur_AbstractCharClass$LazyCategory, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_20", $rt_wrapFunction2(jur_AbstractCharClass$LazyCategory__init_0), "$_init_21", $rt_wrapFunction3(jur_AbstractCharClass$LazyCategory__init_1), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyCategory_computeValue)],
jur_QuantifierSet, 0, jur_AbstractSet, [], 1024, 0, 0, ["$_init_12", $rt_wrapFunction3(jur_QuantifierSet__init_), "$getInnerSet", $rt_wrapFunction0(jur_QuantifierSet_getInnerSet), "$first", $rt_wrapFunction1(jur_QuantifierSet_first), "$hasConsumed", $rt_wrapFunction1(jur_QuantifierSet_hasConsumed), "$processSecondPass", $rt_wrapFunction0(jur_QuantifierSet_processSecondPass)],
jur_DotAllQuantifierSet, "DotAllQuantifierSet", 3, jur_QuantifierSet, [], 0, 0, 0, ["$_init_12", $rt_wrapFunction3(jur_DotAllQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_DotAllQuantifierSet_matches), "$find", $rt_wrapFunction3(jur_DotAllQuantifierSet_find), "$getName", $rt_wrapFunction0(jur_DotAllQuantifierSet_getName)],
otji_JSWrapper$Helper, 0, jl_Object, [], 0, 0, otji_JSWrapper$Helper_$callClinit, 0,
ju_Comparator, 0, jl_Object, [], 1537, 0, 0, 0,
jl_String$_clinit_$lambda$_118_0, 0, jl_Object, [ju_Comparator], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_String$_clinit_$lambda$_118_0__init_)],
jur_FSet, "FSet", 3, jur_AbstractSet, [], 0, 0, jur_FSet_$callClinit, ["$_init_0", $rt_wrapFunction1(jur_FSet__init_), "$matches", $rt_wrapFunction3(jur_FSet_matches), "$getGroupIndex", $rt_wrapFunction0(jur_FSet_getGroupIndex), "$getName", $rt_wrapFunction0(jur_FSet_getName), "$hasConsumed", $rt_wrapFunction1(jur_FSet_hasConsumed)],
jur_BehindFSet, "BehindFSet", 3, jur_FSet, [], 0, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_BehindFSet__init_), "$matches", $rt_wrapFunction3(jur_BehindFSet_matches), "$getName", $rt_wrapFunction0(jur_BehindFSet_getName)],
jur_LowHighSurrogateRangeSet, 0, jur_JointSet, [], 0, 0, 0, ["$_init_70", $rt_wrapFunction1(jur_LowHighSurrogateRangeSet__init_), "$setNext", $rt_wrapFunction1(jur_LowHighSurrogateRangeSet_setNext), "$matches", $rt_wrapFunction3(jur_LowHighSurrogateRangeSet_matches), "$getName", $rt_wrapFunction0(jur_LowHighSurrogateRangeSet_getName)],
jur_GroupQuantifierSet, "GroupQuantifierSet", 3, jur_QuantifierSet, [], 0, 0, 0, ["$_init_12", $rt_wrapFunction3(jur_GroupQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_GroupQuantifierSet_matches), "$getName", $rt_wrapFunction0(jur_GroupQuantifierSet_getName)],
jur_ReluctantGroupQuantifierSet, "ReluctantGroupQuantifierSet", 3, jur_GroupQuantifierSet, [], 0, 0, 0, ["$_init_12", $rt_wrapFunction3(jur_ReluctantGroupQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_ReluctantGroupQuantifierSet_matches)],
jl_ClassCastException, "ClassCastException", 7, jl_RuntimeException, [], 1, 0, 0, 0,
jl_Error, 0, jl_Throwable, [], 1, 0, 0, ["$_init_11", $rt_wrapFunction1(jl_Error__init_)],
jnc_CoderMalfunctionError, 0, jl_Error, [], 1, 0, 0, ["$_init_11", $rt_wrapFunction1(jnc_CoderMalfunctionError__init_)],
ju_AbstractMap, 0, jl_Object, [ju_Map], 1025, 0, 0, ["$_init_", $rt_wrapFunction0(ju_AbstractMap__init_), "$put", $rt_wrapFunction2(ju_AbstractMap_put)]]);
$rt_metadata([jl_Cloneable, 0, jl_Object, [], 1537, 0, 0, 0,
ju_HashMap, 0, ju_AbstractMap, [jl_Cloneable, ji_Serializable], 1, 0, 0, ["$newElementArray", $rt_wrapFunction1(ju_HashMap_newElementArray), "$_init_", $rt_wrapFunction0(ju_HashMap__init_0), "$_init_0", $rt_wrapFunction1(ju_HashMap__init_), "$_init_13", $rt_wrapFunction2(ju_HashMap__init_1), "$containsKey", $rt_wrapFunction1(ju_HashMap_containsKey), "$get0", $rt_wrapFunction1(ju_HashMap_get), "$entryByKey", $rt_wrapFunction1(ju_HashMap_entryByKey), "$findNonNullKeyEntry", $rt_wrapFunction3(ju_HashMap_findNonNullKeyEntry),
"$findNullKeyEntry", $rt_wrapFunction0(ju_HashMap_findNullKeyEntry), "$put", $rt_wrapFunction2(ju_HashMap_put), "$rehash0", $rt_wrapFunction1(ju_HashMap_rehash0), "$rehash", $rt_wrapFunction0(ju_HashMap_rehash), "$removeEntry", $rt_wrapFunction1(ju_HashMap_removeEntry), "$size", $rt_wrapFunction0(ju_HashMap_size)],
ju_LinkedHashMap, 0, ju_HashMap, [ju_SequencedMap], 1, 0, 0, ["$_init_", $rt_wrapFunction0(ju_LinkedHashMap__init_), "$newElementArray", $rt_wrapFunction1(ju_LinkedHashMap_newElementArray), "$put", $rt_wrapFunction2(ju_LinkedHashMap_put), "$putImpl0", $rt_wrapFunction4(ju_LinkedHashMap_putImpl), "$removeLinkedEntry", $rt_wrapFunction1(ju_LinkedHashMap_removeLinkedEntry), "$removeEldestEntry", $rt_wrapFunction1(ju_LinkedHashMap_removeEldestEntry)],
jur_PosPlusGroupQuantifierSet, "PosPlusGroupQuantifierSet", 3, jur_GroupQuantifierSet, [], 0, 0, 0, ["$_init_12", $rt_wrapFunction3(jur_PosPlusGroupQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_PosPlusGroupQuantifierSet_matches)],
jl_AbstractStringBuilder, 0, jl_Object, [ji_Serializable, jl_CharSequence], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jl_AbstractStringBuilder__init_0), "$_init_0", $rt_wrapFunction1(jl_AbstractStringBuilder__init_), "$_init_1", $rt_wrapFunction1(jl_AbstractStringBuilder__init_2), "$_init_15", $rt_wrapFunction1(jl_AbstractStringBuilder__init_1), "$append16", $rt_wrapFunction1(jl_AbstractStringBuilder_append8), "$append6", $rt_wrapFunction1(jl_AbstractStringBuilder_append), "$insert0", $rt_wrapFunction2(jl_AbstractStringBuilder_insert0),
"$append17", $rt_wrapFunction1(jl_AbstractStringBuilder_append3), "$append1", $rt_wrapFunction2(jl_AbstractStringBuilder_append10), "$insert1", $rt_wrapFunction3(jl_AbstractStringBuilder_insert7), "$append18", $rt_wrapFunction1(jl_AbstractStringBuilder_append6), "$insert2", $rt_wrapFunction2(jl_AbstractStringBuilder_insert4), "$append19", $rt_wrapFunction1(jl_AbstractStringBuilder_append7), "$insert3", $rt_wrapFunction2(jl_AbstractStringBuilder_insert5), "$append7", $rt_wrapFunction1(jl_AbstractStringBuilder_append2),
"$insert4", $rt_wrapFunction2(jl_AbstractStringBuilder_insert1), "$insert", $rt_wrapFunction2(jl_AbstractStringBuilder_insert6), "$append20", $rt_wrapFunction1(jl_AbstractStringBuilder_append5), "$insert5", $rt_wrapFunction2(jl_AbstractStringBuilder_insert2), "$ensureCapacity", $rt_wrapFunction1(jl_AbstractStringBuilder_ensureCapacity), "$toString", $rt_wrapFunction0(jl_AbstractStringBuilder_toString), "$length", $rt_wrapFunction0(jl_AbstractStringBuilder_length), "$charAt", $rt_wrapFunction1(jl_AbstractStringBuilder_charAt),
"$isEmpty", $rt_wrapFunction0(jl_AbstractStringBuilder_isEmpty), "$append4", $rt_wrapFunction3(jl_AbstractStringBuilder_append4), "$insert6", $rt_wrapFunction4(jl_AbstractStringBuilder_insert3), "$append9", $rt_wrapFunction1(jl_AbstractStringBuilder_append9), "$append5", $rt_wrapFunction3(jl_AbstractStringBuilder_append1), "$insert7", $rt_wrapFunction4(jl_AbstractStringBuilder_insert), "$append8", $rt_wrapFunction1(jl_AbstractStringBuilder_append0), "$subSequence", $rt_wrapFunction2(jl_AbstractStringBuilder_subSequence),
"$deleteCharAt0", $rt_wrapFunction1(jl_AbstractStringBuilder_deleteCharAt), "$delete", $rt_wrapFunction2(jl_AbstractStringBuilder_delete), "$substring", $rt_wrapFunction2(jl_AbstractStringBuilder_substring)],
jl_Appendable, 0, jl_Object, [], 1537, 0, 0, 0,
jl_StringBuffer, 0, jl_AbstractStringBuilder, [jl_Appendable], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_StringBuffer__init_0), "$append24", $rt_wrapFunction1(jl_StringBuffer_append2), "$append14", $rt_wrapFunction1(jl_StringBuffer_append4), "$append10", $rt_wrapFunction3(jl_StringBuffer_append6), "$append15", $rt_wrapFunction1(jl_StringBuffer_append3), "$append11", $rt_wrapFunction3(jl_StringBuffer_append), "$append23", $rt_wrapFunction1(jl_StringBuffer_append5), "$insert9", $rt_wrapFunction4(jl_StringBuffer_insert),
"$insert8", $rt_wrapFunction4(jl_StringBuffer_insert1), "$insert10", $rt_wrapFunction2(jl_StringBuffer_insert6), "$insert11", $rt_wrapFunction2(jl_StringBuffer_insert2), "$insert7", $rt_wrapFunction4(jl_StringBuffer_insert4), "$append5", $rt_wrapFunction3(jl_StringBuffer_append0), "$insert6", $rt_wrapFunction4(jl_StringBuffer_insert5), "$append4", $rt_wrapFunction3(jl_StringBuffer_append1), "$charAt", $rt_wrapFunction1(jl_StringBuffer_charAt), "$length", $rt_wrapFunction0(jl_StringBuffer_length), "$toString",
$rt_wrapFunction0(jl_StringBuffer_toString), "$ensureCapacity", $rt_wrapFunction1(jl_StringBuffer_ensureCapacity), "$insert4", $rt_wrapFunction2(jl_StringBuffer_insert3), "$insert0", $rt_wrapFunction2(jl_StringBuffer_insert0)],
jn_Buffer, 0, jl_Object, [], 1025, 0, 0, ["$_init_", $rt_wrapFunction0(jn_Buffer__init_), "$capacity", $rt_wrapFunction0(jn_Buffer_capacity), "$position0", $rt_wrapFunction0(jn_Buffer_position), "$position1", $rt_wrapFunction1(jn_Buffer_position0), "$limit", $rt_wrapFunction0(jn_Buffer_limit), "$flip", $rt_wrapFunction0(jn_Buffer_flip), "$remaining", $rt_wrapFunction0(jn_Buffer_remaining), "$hasRemaining", $rt_wrapFunction0(jn_Buffer_hasRemaining)],
jur_SpecialToken, 0, jl_Object, [], 1024, 0, 0, ["$_init_", $rt_wrapFunction0(jur_SpecialToken__init_)],
jur_AbstractCharClass, 0, jur_SpecialToken, [], 1024, 0, jur_AbstractCharClass_$callClinit, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass__init_), "$getBits", $rt_wrapFunction0(jur_AbstractCharClass_getBits), "$getLowHighSurrogates", $rt_wrapFunction0(jur_AbstractCharClass_getLowHighSurrogates), "$hasLowHighSurrogates", $rt_wrapFunction0(jur_AbstractCharClass_hasLowHighSurrogates), "$mayContainSupplCodepoints", $rt_wrapFunction0(jur_AbstractCharClass_mayContainSupplCodepoints), "$getInstance", $rt_wrapFunction0(jur_AbstractCharClass_getInstance),
"$getSurrogates", $rt_wrapFunction0(jur_AbstractCharClass_getSurrogates), "$getWithoutSurrogates", $rt_wrapFunction0(jur_AbstractCharClass_getWithoutSurrogates), "$hasUCI", $rt_wrapFunction0(jur_AbstractCharClass_hasUCI), "$setNegative", $rt_wrapFunction1(jur_AbstractCharClass_setNegative), "$isNegative", $rt_wrapFunction0(jur_AbstractCharClass_isNegative)],
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1, "AbstractCharClass$LazyJavaUnicodeIdentifierPart$1", 3, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_57", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1_contains)],
jur_AbstractCharClass$PredefinedCharacterClasses, 0, jl_Object, [], 16, 0, jur_AbstractCharClass$PredefinedCharacterClasses_$callClinit, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$PredefinedCharacterClasses__init_), "$getObject", $rt_wrapFunction1(jur_AbstractCharClass$PredefinedCharacterClasses_getObject)],
jur_AbstractCharClass$LazyDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyDigit__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyDigit_computeValue)],
jur_AbstractCharClass$LazyJavaLetter, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLetter__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLetter_computeValue)],
ji_Flushable, 0, jl_Object, [], 1537, 0, 0, 0,
jur_DecomposedCharSet, "DecomposedCharSet", 3, jur_JointSet, [], 0, 0, 0, ["$_init_23", $rt_wrapFunction2(jur_DecomposedCharSet__init_), "$setNext", $rt_wrapFunction1(jur_DecomposedCharSet_setNext), "$matches", $rt_wrapFunction3(jur_DecomposedCharSet_matches), "$getName", $rt_wrapFunction0(jur_DecomposedCharSet_getName), "$codePointAt", $rt_wrapFunction3(jur_DecomposedCharSet_codePointAt), "$first", $rt_wrapFunction1(jur_DecomposedCharSet_first), "$hasConsumed", $rt_wrapFunction1(jur_DecomposedCharSet_hasConsumed)],
jur_CIDecomposedCharSet, "CIDecomposedCharSet", 3, jur_DecomposedCharSet, [], 0, 0, 0, ["$_init_23", $rt_wrapFunction2(jur_CIDecomposedCharSet__init_)],
jnci_BufferedDecoder, 0, jnc_CharsetDecoder, [], 1025, 0, 0, ["$_init_24", $rt_wrapFunction3(jnci_BufferedDecoder__init_), "$decodeLoop", $rt_wrapFunction2(jnci_BufferedDecoder_decodeLoop)],
jnci_AsciiDecoder, 0, jnci_BufferedDecoder, [], 1, 0, 0, ["$_init_37", $rt_wrapFunction1(jnci_AsciiDecoder__init_), "$arrayDecode", function(var_1, var_2, var_3, var_4, var_5, var_6, var_7) { return jnci_AsciiDecoder_arrayDecode(this, var_1, var_2, var_3, var_4, var_5, var_6, var_7); }],
jur_AheadFSet, "AheadFSet", 3, jur_FSet, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AheadFSet__init_), "$matches", $rt_wrapFunction3(jur_AheadFSet_matches), "$getName", $rt_wrapFunction0(jur_AheadFSet_getName)],
v_WebSpriteLibrary$3, 0, jl_Object, [], 32768, 0, v_WebSpriteLibrary$3_$callClinit, 0,
otj_JSObject, 0, jl_Object, [], 1537, 0, 0, 0,
otjde_EventListener, 0, jl_Object, [otj_JSObject], 1537, 0, 0, 0,
v_WebSpriteLibrary$1, 0, jl_Object, [otjde_EventListener], 0, 0, 0, ["$_init_", $rt_wrapFunction0(v_WebSpriteLibrary$1__init_), "$handleEvent", $rt_wrapFunction1(v_WebSpriteLibrary$1_handleEvent)],
v_WebSpriteLibrary$2, 0, jl_Object, [otjde_EventListener], 0, 0, 0, ["$_init_1", $rt_wrapFunction1(v_WebSpriteLibrary$2__init_), "$handleEvent", $rt_wrapFunction1(v_WebSpriteLibrary$2_handleEvent)],
jur_NonCapJointSet, "NonCapJointSet", 3, jur_JointSet, [], 0, 0, 0, ["$_init_26", $rt_wrapFunction2(jur_NonCapJointSet__init_), "$matches", $rt_wrapFunction3(jur_NonCapJointSet_matches), "$getName", $rt_wrapFunction0(jur_NonCapJointSet_getName), "$hasConsumed", $rt_wrapFunction1(jur_NonCapJointSet_hasConsumed)],
jur_AtomicJointSet, "AtomicJointSet", 3, jur_NonCapJointSet, [], 0, 0, 0, ["$_init_26", $rt_wrapFunction2(jur_AtomicJointSet__init_), "$matches", $rt_wrapFunction3(jur_AtomicJointSet_matches), "$setNext", $rt_wrapFunction1(jur_AtomicJointSet_setNext), "$getName", $rt_wrapFunction0(jur_AtomicJointSet_getName)],
jur_PositiveLookAhead, "PositiveLookAhead", 3, jur_AtomicJointSet, [], 0, 0, 0, ["$_init_26", $rt_wrapFunction2(jur_PositiveLookAhead__init_), "$matches", $rt_wrapFunction3(jur_PositiveLookAhead_matches), "$hasConsumed", $rt_wrapFunction1(jur_PositiveLookAhead_hasConsumed), "$getName", $rt_wrapFunction0(jur_PositiveLookAhead_getName)],
jur_NegativeLookAhead, "NegativeLookAhead", 3, jur_AtomicJointSet, [], 0, 0, 0, ["$_init_26", $rt_wrapFunction2(jur_NegativeLookAhead__init_), "$matches", $rt_wrapFunction3(jur_NegativeLookAhead_matches), "$hasConsumed", $rt_wrapFunction1(jur_NegativeLookAhead_hasConsumed), "$getName", $rt_wrapFunction0(jur_NegativeLookAhead_getName)],
jl_Readable, 0, jl_Object, [], 1537, 0, 0, 0,
jn_CharBuffer, 0, jn_Buffer, [jl_Comparable, jl_Appendable, jl_CharSequence, jl_Readable], 1025, 0, 0, ["$_init_8", $rt_wrapFunction2(jn_CharBuffer__init_), "$get4", $rt_wrapFunction3(jn_CharBuffer_get), "$put1", $rt_wrapFunction3(jn_CharBuffer_put1), "$put2", $rt_wrapFunction3(jn_CharBuffer_put0), "$put0", $rt_wrapFunction1(jn_CharBuffer_put), "$flip0", $rt_wrapFunction0(jn_CharBuffer_flip), "$position2", $rt_wrapFunction1(jn_CharBuffer_position)],
jn_CharBufferImpl, 0, jn_CharBuffer, [], 1024, 0, 0, ["$_init_8", $rt_wrapFunction2(jn_CharBufferImpl__init_), "$compact", $rt_wrapFunction0(jn_CharBufferImpl_compact), "$isReadOnly", $rt_wrapFunction0(jn_CharBufferImpl_isReadOnly)],
jn_ArrayBufferViewProvider, 0, jl_Object, [], 1537, 0, 0, 0,
jn_CharBufferOverTypedArray, 0, jn_CharBufferImpl, [jn_ArrayBufferViewProvider], 0, 0, 0, ["$_init_27", function(var_1, var_2, var_3, var_4, var_5) { jn_CharBufferOverTypedArray__init_(this, var_1, var_2, var_3, var_4, var_5); }, "$readOnly", $rt_wrapFunction0(jn_CharBufferOverTypedArray_readOnly), "$getChar", $rt_wrapFunction1(jn_CharBufferOverTypedArray_getChar), "$putChar", $rt_wrapFunction2(jn_CharBufferOverTypedArray_putChar), "$capacityImpl", $rt_wrapFunction0(jn_CharBufferOverTypedArray_capacityImpl),
"$getImpl", $rt_wrapFunction4(jn_CharBufferOverTypedArray_getImpl), "$putImpl1", $rt_wrapFunction4(jn_CharBufferOverTypedArray_putImpl0), "$putImpl2", $rt_wrapFunction4(jn_CharBufferOverTypedArray_putImpl)],
c_GameController$1, 0, jl_Object, [], 32768, 0, c_GameController$1_$callClinit, 0,
otjt_ArrayBufferView, 0, jl_Object, [otj_JSObject], 1025, 0, 0, 0,
otjt_TypedArray, 0, otjt_ArrayBufferView, [], 1025, 0, 0, 0,
jl_UnsupportedOperationException, "UnsupportedOperationException", 7, jl_RuntimeException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_UnsupportedOperationException__init_0)],
jn_ReadOnlyBufferException, "ReadOnlyBufferException", 4, jl_UnsupportedOperationException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jn_ReadOnlyBufferException__init_0)],
jlr_Array, 0, jl_Object, [], 17, 0, 0, 0,
otcit_DoubleAnalyzer$Result, 0, jl_Object, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(otcit_DoubleAnalyzer$Result__init_0)],
jur_AbstractCharClass$LazyJavaDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaDigit__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaDigit_computeValue)],
jl_Iterable, 0, jl_Object, [], 1537, 0, 0, 0,
ju_Collection, 0, jl_Object, [jl_Iterable], 1537, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf)],
ju_AbstractCollection, 0, jl_Object, [ju_Collection], 1025, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_", $rt_wrapFunction0(ju_AbstractCollection__init_), "$isEmpty", $rt_wrapFunction0(ju_AbstractCollection_isEmpty), "$toArray", $rt_wrapFunction1(ju_AbstractCollection_toArray), "$addAll", $rt_wrapFunction1(ju_AbstractCollection_addAll)],
jl_AutoCloseable, 0, jl_Object, [], 1537, 0, 0, 0,
ji_Closeable, 0, jl_Object, [jl_AutoCloseable], 1537, 0, 0, 0,
ji_InputStream, 0, jl_Object, [ji_Closeable], 1025, 0, 0, ["$_init_", $rt_wrapFunction0(ji_InputStream__init_)],
ji_ByteArrayInputStream, 0, ji_InputStream, [], 1, 0, 0, ["$_init_29", $rt_wrapFunction3(ji_ByteArrayInputStream__init_), "$_init_82", $rt_wrapFunction1(ji_ByteArrayInputStream__init_0), "$read0", $rt_wrapFunction3(ji_ByteArrayInputStream_read), "$available", $rt_wrapFunction0(ji_ByteArrayInputStream_available), "$close", $rt_wrapFunction0(ji_ByteArrayInputStream_close)],
otci_IntegerUtil, 0, jl_Object, [], 17, 0, 0, 0]);
$rt_metadata([jur_LeafQuantifierSet, "LeafQuantifierSet", 3, jur_QuantifierSet, [], 0, 0, 0, ["$_init_31", $rt_wrapFunction3(jur_LeafQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_LeafQuantifierSet_matches), "$getName", $rt_wrapFunction0(jur_LeafQuantifierSet_getName)],
jur_AltQuantifierSet, "AltQuantifierSet", 3, jur_LeafQuantifierSet, [], 0, 0, 0, ["$_init_31", $rt_wrapFunction3(jur_AltQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_AltQuantifierSet_matches), "$setNext", $rt_wrapFunction1(jur_AltQuantifierSet_setNext)],
jur_PossessiveAltQuantifierSet, "PossessiveAltQuantifierSet", 3, jur_AltQuantifierSet, [], 0, 0, 0, ["$_init_31", $rt_wrapFunction3(jur_PossessiveAltQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_PossessiveAltQuantifierSet_matches)],
otjc_JSObjects, 0, jl_Object, [], 17, 0, 0, 0,
otji_JS, 0, jl_Object, [], 17, 0, 0, 0,
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1, "AbstractCharClass$LazyJavaUnicodeIdentifierStart$1", 3, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_73", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1_contains)],
jnc_Charset, 0, jl_Object, [jl_Comparable], 1025, 0, 0, ["$_init_32", $rt_wrapFunction2(jnc_Charset__init_), "$name", $rt_wrapFunction0(jnc_Charset_name)],
jnci_UTF16Charset, 0, jnc_Charset, [], 1, 0, 0, ["$_init_50", $rt_wrapFunction3(jnci_UTF16Charset__init_0), "$newDecoder", $rt_wrapFunction0(jnci_UTF16Charset_newDecoder)],
otciu_UnicodeHelper, 0, jl_Object, [], 17, 0, 0, 0,
ju_Objects, 0, jl_Object, [], 17, 0, 0, 0,
otjc_JSUndefined, 0, jl_Object, [otj_JSObject], 1, 0, 0, 0,
jur_AbstractCharClass$LazyAlnum, 0, jur_AbstractCharClass$LazyAlpha, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyAlnum__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyAlnum_computeValue)],
jur_AbstractCharClass$LazyGraph, 0, jur_AbstractCharClass$LazyAlnum, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyGraph__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyGraph_computeValue)],
jur_AbstractCharClass$LazyPrint, 0, jur_AbstractCharClass$LazyGraph, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyPrint__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyPrint_computeValue)],
jur_AbstractCharClass$LazyJavaSpaceChar, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaSpaceChar__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaSpaceChar_computeValue)],
jur_PositiveLookBehind, "PositiveLookBehind", 3, jur_AtomicJointSet, [], 0, 0, 0, ["$_init_26", $rt_wrapFunction2(jur_PositiveLookBehind__init_), "$matches", $rt_wrapFunction3(jur_PositiveLookBehind_matches), "$hasConsumed", $rt_wrapFunction1(jur_PositiveLookBehind_hasConsumed), "$getName", $rt_wrapFunction0(jur_PositiveLookBehind_getName)],
jur_SequenceSet, "SequenceSet", 3, jur_LeafSet, [], 0, 0, 0, ["$_init_62", $rt_wrapFunction1(jur_SequenceSet__init_), "$accepts", $rt_wrapFunction2(jur_SequenceSet_accepts), "$find", $rt_wrapFunction3(jur_SequenceSet_find), "$findBack", $rt_wrapFunction4(jur_SequenceSet_findBack), "$getName", $rt_wrapFunction0(jur_SequenceSet_getName), "$first", $rt_wrapFunction1(jur_SequenceSet_first), "$indexOf", $rt_wrapFunction3(jur_SequenceSet_indexOf), "$lastIndexOf", $rt_wrapFunction3(jur_SequenceSet_lastIndexOf), "$startsWith",
$rt_wrapFunction2(jur_SequenceSet_startsWith)],
jnci_AsciiCharset, 0, jnc_Charset, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jnci_AsciiCharset__init_), "$newDecoder", $rt_wrapFunction0(jnci_AsciiCharset_newDecoder)],
va_ViewForController, 0, jl_Object, [], 1537, 0, 0, 0,
jl_ArrayStoreException, "ArrayStoreException", 7, jl_RuntimeException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_ArrayStoreException__init_0)],
ju_SequencedCollection, 0, jl_Object, [ju_Collection], 1537, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf)],
jur_AltGroupQuantifierSet, "AltGroupQuantifierSet", 3, jur_GroupQuantifierSet, [], 0, 0, 0, ["$_init_12", $rt_wrapFunction3(jur_AltGroupQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_AltGroupQuantifierSet_matches), "$setNext", $rt_wrapFunction1(jur_AltGroupQuantifierSet_setNext)],
jur_MatchResult, 0, jl_Object, [], 1537, 0, 0, 0,
jur_MatchResultImpl, 0, jl_Object, [jur_MatchResult], 0, 0, 0, ["$_init_92", function(var_1, var_2, var_3, var_4, var_5, var_6, var_7) { jur_MatchResultImpl__init_(this, var_1, var_2, var_3, var_4, var_5, var_6, var_7); }, "$setConsumed", $rt_wrapFunction2(jur_MatchResultImpl_setConsumed), "$getConsumed", $rt_wrapFunction1(jur_MatchResultImpl_getConsumed), "$end0", $rt_wrapFunction0(jur_MatchResultImpl_end), "$end", $rt_wrapFunction1(jur_MatchResultImpl_end0), "$setStart", $rt_wrapFunction2(jur_MatchResultImpl_setStart),
"$setEnd", $rt_wrapFunction2(jur_MatchResultImpl_setEnd), "$getStart", $rt_wrapFunction1(jur_MatchResultImpl_getStart), "$getEnd", $rt_wrapFunction1(jur_MatchResultImpl_getEnd), "$group", $rt_wrapFunction1(jur_MatchResultImpl_group), "$getGroupNoCheck", $rt_wrapFunction1(jur_MatchResultImpl_getGroupNoCheck), "$start0", $rt_wrapFunction0(jur_MatchResultImpl_start), "$start", $rt_wrapFunction1(jur_MatchResultImpl_start0), "$finalizeMatch", $rt_wrapFunction0(jur_MatchResultImpl_finalizeMatch), "$getEnterCounter",
$rt_wrapFunction1(jur_MatchResultImpl_getEnterCounter), "$setEnterCounter", $rt_wrapFunction2(jur_MatchResultImpl_setEnterCounter), "$setValid", $rt_wrapFunction0(jur_MatchResultImpl_setValid), "$isValid", $rt_wrapFunction0(jur_MatchResultImpl_isValid), "$reset", $rt_wrapFunction3(jur_MatchResultImpl_reset0), "$reset1", $rt_wrapFunction0(jur_MatchResultImpl_reset), "$setStartIndex", $rt_wrapFunction1(jur_MatchResultImpl_setStartIndex), "$getLeftBound", $rt_wrapFunction0(jur_MatchResultImpl_getLeftBound), "$getRightBound",
$rt_wrapFunction0(jur_MatchResultImpl_getRightBound), "$setMode", $rt_wrapFunction1(jur_MatchResultImpl_setMode), "$mode", $rt_wrapFunction0(jur_MatchResultImpl_mode), "$useAnchoringBounds", $rt_wrapFunction1(jur_MatchResultImpl_useAnchoringBounds), "$hasAnchoringBounds", $rt_wrapFunction0(jur_MatchResultImpl_hasAnchoringBounds), "$hasTransparentBounds", $rt_wrapFunction0(jur_MatchResultImpl_hasTransparentBounds), "$getPreviousMatchEnd", $rt_wrapFunction0(jur_MatchResultImpl_getPreviousMatchEnd)],
jur_UCIRangeSet, "UCIRangeSet", 3, jur_LeafSet, [], 0, 0, 0, ["$_init_70", $rt_wrapFunction1(jur_UCIRangeSet__init_), "$accepts", $rt_wrapFunction2(jur_UCIRangeSet_accepts), "$getName", $rt_wrapFunction0(jur_UCIRangeSet_getName)],
jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1, "AbstractCharClass$LazyJavaJavaIdentifierPart$1", 3, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_41", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1_contains)],
ji_OutputStream, 0, jl_Object, [ji_Closeable, ji_Flushable], 1025, 0, 0, ["$_init_", $rt_wrapFunction0(ji_OutputStream__init_)],
ji_FilterOutputStream, 0, ji_OutputStream, [], 1, 0, 0, ["$_init_38", $rt_wrapFunction1(ji_FilterOutputStream__init_)],
ji_PrintStream, 0, ji_FilterOutputStream, [jl_Appendable], 1, 0, 0, ["$_init_39", $rt_wrapFunction3(ji_PrintStream__init_)],
otcic_JsConsolePrintStream, 0, ji_PrintStream, [], 1025, 0, 0, ["$_init_", $rt_wrapFunction0(otcic_JsConsolePrintStream__init_), "$println1", $rt_wrapFunction1(otcic_JsConsolePrintStream_println1), "$println", $rt_wrapFunction0(otcic_JsConsolePrintStream_println0), "$println0", $rt_wrapFunction1(otcic_JsConsolePrintStream_println)],
otp_Platform, 0, jl_Object, [], 17, 0, 0, 0,
jnc_CodingErrorAction, 0, jl_Object, [], 1, 0, jnc_CodingErrorAction_$callClinit, ["$_init_1", $rt_wrapFunction1(jnc_CodingErrorAction__init_0)],
jl_Boolean, 0, jl_Object, [ji_Serializable, jl_Comparable], 1, 0, jl_Boolean_$callClinit, ["$_init_40", $rt_wrapFunction1(jl_Boolean__init_0), "$booleanValue", $rt_wrapFunction0(jl_Boolean_booleanValue)],
jl_IllegalArgumentException, "IllegalArgumentException", 7, jl_RuntimeException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_IllegalArgumentException__init_2), "$_init_1", $rt_wrapFunction1(jl_IllegalArgumentException__init_1)],
jnc_IllegalCharsetNameException, "IllegalCharsetNameException", 5, jl_IllegalArgumentException, [], 1, 0, 0, ["$_init_1", $rt_wrapFunction1(jnc_IllegalCharsetNameException__init_0)],
me_Entity, 0, jl_Object, [], 1025, 0, 0, ["$_init_43", function(var_1, var_2, var_3, var_4, var_5, var_6, var_7) { me_Entity__init_(this, var_1, var_2, var_3, var_4, var_5, var_6, var_7); }, "$getEntityName", $rt_wrapFunction0(me_Entity_getEntityName), "$getX", $rt_wrapFunction0(me_Entity_getX), "$getY", $rt_wrapFunction0(me_Entity_getY), "$getCenterX", $rt_wrapFunction0(me_Entity_getCenterX), "$getCenterY", $rt_wrapFunction0(me_Entity_getCenterY), "$getWidth", $rt_wrapFunction0(me_Entity_getWidth), "$getHeight",
$rt_wrapFunction0(me_Entity_getHeight), "$getDirection", $rt_wrapFunction0(me_Entity_getDirection), "$isToRemove", $rt_wrapFunction0(me_Entity_isToRemove), "$getAnimationFrame", $rt_wrapFunction0(me_Entity_getAnimationFrame)],
me_AlienShot, 0, me_Entity, [], 1, 0, 0, 0,
ju_NoSuchElementException, "NoSuchElementException", 2, jl_RuntimeException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(ju_NoSuchElementException__init_0)],
jlr_AnnotatedElement, 0, jl_Object, [], 1537, 0, 0, 0,
jlr_GenericDeclaration, 0, jl_Object, [jlr_AnnotatedElement], 1537, 0, 0, 0,
jur_NegativeLookBehind, "NegativeLookBehind", 3, jur_AtomicJointSet, [], 0, 0, 0, ["$_init_26", $rt_wrapFunction2(jur_NegativeLookBehind__init_), "$matches", $rt_wrapFunction3(jur_NegativeLookBehind_matches), "$hasConsumed", $rt_wrapFunction1(jur_NegativeLookBehind_hasConsumed), "$getName", $rt_wrapFunction0(jur_NegativeLookBehind_getName)],
jur_BackReferenceSet, "BackReferenceSet", 3, jur_CIBackReferenceSet, [], 0, 0, 0, ["$_init_8", $rt_wrapFunction2(jur_BackReferenceSet__init_), "$matches", $rt_wrapFunction3(jur_BackReferenceSet_matches), "$find", $rt_wrapFunction3(jur_BackReferenceSet_find), "$findBack", $rt_wrapFunction4(jur_BackReferenceSet_findBack), "$first", $rt_wrapFunction1(jur_BackReferenceSet_first), "$getName", $rt_wrapFunction0(jur_BackReferenceSet_getName)],
jur_DotQuantifierSet, "DotQuantifierSet", 3, jur_QuantifierSet, [], 0, 0, 0, ["$_init_66", $rt_wrapFunction4(jur_DotQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_DotQuantifierSet_matches), "$find", $rt_wrapFunction3(jur_DotQuantifierSet_find), "$getName", $rt_wrapFunction0(jur_DotQuantifierSet_getName)],
jur_AbstractCharClass$LazyJavaJavaIdentifierPart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaJavaIdentifierPart_computeValue)],
otcit_FloatAnalyzer, 0, jl_Object, [], 17, 0, otcit_FloatAnalyzer_$callClinit, 0,
jur_UnifiedQuantifierSet, "UnifiedQuantifierSet", 3, jur_LeafQuantifierSet, [], 0, 0, 0, ["$_init_65", $rt_wrapFunction1(jur_UnifiedQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_UnifiedQuantifierSet_matches), "$find", $rt_wrapFunction3(jur_UnifiedQuantifierSet_find)],
jlr_Type, 0, jl_Object, [], 1537, 0, 0, 0,
jl_Class, 0, jl_Object, [jlr_GenericDeclaration, jlr_Type], 17, 0, 0, ["$toString", $rt_wrapFunction0(jl_Class_toString), "$getClassInfo", $rt_wrapFunction0(jl_Class_getClassInfo), "$isInstance", $rt_wrapFunction1(jl_Class_isInstance), "$isAssignableFrom", $rt_wrapFunction1(jl_Class_isAssignableFrom), "$getName", $rt_wrapFunction0(jl_Class_getName), "$isPrimitive", $rt_wrapFunction0(jl_Class_isPrimitive), "$isEnum", $rt_wrapFunction0(jl_Class_isEnum), "$isInterface", $rt_wrapFunction0(jl_Class_isInterface),
"$getComponentType", $rt_wrapFunction0(jl_Class_getComponentType), "$getEnumConstants", $rt_wrapFunction0(jl_Class_getEnumConstants), "$getClassLoader", $rt_wrapFunction0(jl_Class_getClassLoader), "$initialize", $rt_wrapFunction0(jl_Class_initialize)],
me_Alien, 0, me_Entity, [], 1025, 0, me_Alien_$callClinit, ["$_init_45", function(var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9) { me_Alien__init_(this, var_1, var_2, var_3, var_4, var_5, var_6, var_7, var_8, var_9); }, "$update", $rt_wrapFunction1(me_Alien_update), "$getPathCopy", $rt_wrapFunction0(me_Alien_getPathCopy), "$isAttacking", $rt_wrapFunction0(me_Alien_isAttacking), "$isPathEmpty", $rt_wrapFunction0(me_Alien_isPathEmpty), "$getPointsToCalculateWithOffset", $rt_wrapFunction0(me_Alien_getPointsToCalculateWithOffset),
"$updateOffset", $rt_wrapFunction1(me_Alien_updateOffset), "$checkCollisionWithPlayerShot", $rt_wrapFunction1(me_Alien_checkCollisionWithPlayerShot), "$checkCollisionWith", $rt_wrapFunction1(me_Alien_checkCollisionWith)],
me_Zako, "Zako", 15, me_Alien, [], 1, 0, 0, ["$_init_46", function(var_1, var_2, var_3, var_4, var_5) { me_Zako__init_(this, var_1, var_2, var_3, var_4, var_5); }, "$copyAlien", $rt_wrapFunction0(me_Zako_copyAlien), "$getScoreValue", $rt_wrapFunction0(me_Zako_getScoreValue)]]);
$rt_metadata([ju_BitSet, 0, jl_Object, [jl_Cloneable, ji_Serializable], 1, 0, 0, ["$_init_", $rt_wrapFunction0(ju_BitSet__init_0), "$_init_0", $rt_wrapFunction1(ju_BitSet__init_), "$set0", $rt_wrapFunction1(ju_BitSet_set), "$set", $rt_wrapFunction2(ju_BitSet_set0), "$clear0", $rt_wrapFunction1(ju_BitSet_clear0), "$clear1", $rt_wrapFunction2(ju_BitSet_clear), "$get3", $rt_wrapFunction1(ju_BitSet_get), "$nextSetBit", $rt_wrapFunction1(ju_BitSet_nextSetBit), "$nextClearBit", $rt_wrapFunction1(ju_BitSet_nextClearBit),
"$intersects", $rt_wrapFunction1(ju_BitSet_intersects), "$and", $rt_wrapFunction1(ju_BitSet_and), "$andNot", $rt_wrapFunction1(ju_BitSet_andNot), "$or", $rt_wrapFunction1(ju_BitSet_or), "$xor", $rt_wrapFunction1(ju_BitSet_xor), "$isEmpty", $rt_wrapFunction0(ju_BitSet_isEmpty)],
jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1, "AbstractCharClass$LazyJavaJavaIdentifierStart$1", 3, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_79", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1_contains)],
jl_Float, 0, jl_Number, [jl_Comparable], 1, 0, jl_Float_$callClinit, 0,
ju_Arrays, 0, jl_Object, [], 1, 0, 0, 0,
jur_CharSet, "CharSet", 3, jur_LeafSet, [], 0, 0, 0, ["$_init_64", $rt_wrapFunction1(jur_CharSet__init_0), "$charCount", $rt_wrapFunction0(jur_CharSet_charCount), "$accepts", $rt_wrapFunction2(jur_CharSet_accepts), "$find", $rt_wrapFunction3(jur_CharSet_find), "$findBack", $rt_wrapFunction4(jur_CharSet_findBack), "$getName", $rt_wrapFunction0(jur_CharSet_getName), "$getChar0", $rt_wrapFunction0(jur_CharSet_getChar), "$first", $rt_wrapFunction1(jur_CharSet_first)],
jur_CharClass$3, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_76", $rt_wrapFunction3(jur_CharClass$3__init_), "$contains", $rt_wrapFunction1(jur_CharClass$3_contains)],
jur_CharClass$4, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_74", $rt_wrapFunction4(jur_CharClass$4__init_), "$contains", $rt_wrapFunction1(jur_CharClass$4_contains)],
jur_CharClass$1, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_75", $rt_wrapFunction2(jur_CharClass$1__init_), "$contains", $rt_wrapFunction1(jur_CharClass$1_contains)],
otjb_AnimationFrameCallback, 0, jl_Object, [otj_JSObject], 1537, 0, 0, 0,
jur_CharClass$2, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_76", $rt_wrapFunction3(jur_CharClass$2__init_), "$contains", $rt_wrapFunction1(jur_CharClass$2_contains)],
jur_CharClass$7, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_75", $rt_wrapFunction2(jur_CharClass$7__init_), "$contains", $rt_wrapFunction1(jur_CharClass$7_contains)],
jur_CharClass$8, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_77", $rt_wrapFunction3(jur_CharClass$8__init_), "$contains", $rt_wrapFunction1(jur_CharClass$8_contains)],
jur_CharClass$5, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_74", $rt_wrapFunction4(jur_CharClass$5__init_), "$contains", $rt_wrapFunction1(jur_CharClass$5_contains)],
jur_CharClass$6, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_75", $rt_wrapFunction2(jur_CharClass$6__init_), "$contains", $rt_wrapFunction1(jur_CharClass$6_contains)],
ju_Iterator, 0, jl_Object, [], 1537, 0, 0, 0,
ju_ListIterator, 0, jl_Object, [ju_Iterator], 1537, 0, 0, 0,
ju_Collections$5, 0, jl_Object, [ju_ListIterator], 0, 0, 0, ["$_init_", $rt_wrapFunction0(ju_Collections$5__init_)],
jur_DotSet, "DotSet", 3, jur_JointSet, [], 16, 0, 0, ["$_init_68", $rt_wrapFunction1(jur_DotSet__init_), "$matches", $rt_wrapFunction3(jur_DotSet_matches), "$getName", $rt_wrapFunction0(jur_DotSet_getName), "$setNext", $rt_wrapFunction1(jur_DotSet_setNext), "$getType", $rt_wrapFunction0(jur_DotSet_getType), "$hasConsumed", $rt_wrapFunction1(jur_DotSet_hasConsumed)],
ju_List, 0, jl_Object, [ju_SequencedCollection], 1537, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf)],
ju_AbstractList, 0, ju_AbstractCollection, [ju_List], 1025, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_", $rt_wrapFunction0(ju_AbstractList__init_), "$add2", $rt_wrapFunction1(ju_AbstractList_add), "$iterator", $rt_wrapFunction0(ju_AbstractList_iterator), "$indexOf2", $rt_wrapFunction1(ju_AbstractList_indexOf), "$listIterator", $rt_wrapFunction1(ju_AbstractList_listIterator), "$subList", $rt_wrapFunction2(ju_AbstractList_subList)],
ju_RandomAccess, 0, jl_Object, [], 1537, 0, 0, 0,
ju_TemplateCollections$AbstractImmutableList, 0, ju_AbstractList, [ju_RandomAccess], 1024, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_", $rt_wrapFunction0(ju_TemplateCollections$AbstractImmutableList__init_)],
ju_Collections$3, 0, ju_TemplateCollections$AbstractImmutableList, [], 0, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_", $rt_wrapFunction0(ju_Collections$3__init_)],
jur_CharClass$9, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_77", $rt_wrapFunction3(jur_CharClass$9__init_), "$contains", $rt_wrapFunction1(jur_CharClass$9_contains)],
ju_Collections$4, 0, jl_Object, [ju_Iterator], 0, 0, 0, ["$_init_", $rt_wrapFunction0(ju_Collections$4__init_)],
jl_Character, 0, jl_Object, [jl_Comparable], 1, 0, jl_Character_$callClinit, 0,
ju_Set, 0, jl_Object, [ju_Collection], 1537, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf)],
ju_AbstractSet, 0, ju_AbstractCollection, [ju_Set], 1025, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_", $rt_wrapFunction0(ju_AbstractSet__init_)],
ju_TemplateCollections$AbstractImmutableSet, 0, ju_AbstractSet, [], 1024, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_", $rt_wrapFunction0(ju_TemplateCollections$AbstractImmutableSet__init_)],
ju_Collections$1, 0, ju_TemplateCollections$AbstractImmutableSet, [], 0, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_", $rt_wrapFunction0(ju_Collections$1__init_)],
jur_CICharSet, "CICharSet", 3, jur_LeafSet, [], 0, 0, 0, ["$_init_64", $rt_wrapFunction1(jur_CICharSet__init_0), "$accepts", $rt_wrapFunction2(jur_CICharSet_accepts), "$getName", $rt_wrapFunction0(jur_CICharSet_getName)],
ju_TemplateCollections$AbstractImmutableMap, 0, ju_AbstractMap, [], 1024, 0, 0, ["$_init_", $rt_wrapFunction0(ju_TemplateCollections$AbstractImmutableMap__init_), "$put", $rt_wrapFunction2(ju_TemplateCollections$AbstractImmutableMap_put)],
ju_Collections$2, 0, ju_TemplateCollections$AbstractImmutableMap, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(ju_Collections$2__init_)],
jur_SupplCharSet, "SupplCharSet", 3, jur_LeafSet, [], 0, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_SupplCharSet__init_), "$accepts", $rt_wrapFunction2(jur_SupplCharSet_accepts), "$find", $rt_wrapFunction3(jur_SupplCharSet_find), "$findBack", $rt_wrapFunction4(jur_SupplCharSet_findBack), "$getName", $rt_wrapFunction0(jur_SupplCharSet_getName), "$getCodePoint", $rt_wrapFunction0(jur_SupplCharSet_getCodePoint), "$first", $rt_wrapFunction1(jur_SupplCharSet_first)],
otrr_ReflectionInfo, 0, jl_Object, [], 1025, 0, 0, 0,
jur_AbstractCharClass$LazyCategoryScope, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_20", $rt_wrapFunction2(jur_AbstractCharClass$LazyCategoryScope__init_1), "$_init_21", $rt_wrapFunction3(jur_AbstractCharClass$LazyCategoryScope__init_0), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyCategoryScope_computeValue)],
jur_AbstractLineTerminator, 0, jl_Object, [], 1024, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractLineTerminator__init_)],
jur_AbstractCharClass$LazyJavaTitleCase$1, "AbstractCharClass$LazyJavaTitleCase$1", 3, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_90", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaTitleCase$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaTitleCase$1_contains)],
jnc_StandardCharsets, 0, jl_Object, [], 17, 0, jnc_StandardCharsets_$callClinit, 0,
ju_Collections$_clinit_$lambda$_59_0, 0, jl_Object, [ju_Comparator], 1, 0, 0, ["$_init_", $rt_wrapFunction0(ju_Collections$_clinit_$lambda$_59_0__init_)],
jur_AbstractCharClass$LazyJavaMirrored$1, "AbstractCharClass$LazyJavaMirrored$1", 3, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_98", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaMirrored$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaMirrored$1_contains)],
jnc_UnsupportedCharsetException, "UnsupportedCharsetException", 5, jl_IllegalArgumentException, [], 1, 0, 0, ["$_init_1", $rt_wrapFunction1(jnc_UnsupportedCharsetException__init_)],
jl_Enum, 0, jl_Object, [jl_Comparable, ji_Serializable], 1025, 0, 0, ["$_init_51", $rt_wrapFunction2(jl_Enum__init_), "$name", $rt_wrapFunction0(jl_Enum_name), "$ordinal", $rt_wrapFunction0(jl_Enum_ordinal), "$toString", $rt_wrapFunction0(jl_Enum_toString)],
m_AlienFormationsLibrary$Direction, "AlienFormationsLibrary$Direction", 13, jl_Enum, [], 65552, 0, m_AlienFormationsLibrary$Direction_$callClinit, ["$getDx", $rt_wrapFunction0(m_AlienFormationsLibrary$Direction_getDx), "$getDy", $rt_wrapFunction0(m_AlienFormationsLibrary$Direction_getDy)],
jur_AbstractCharClass$LazyJavaISOControl$1, "AbstractCharClass$LazyJavaISOControl$1", 3, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_99", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaISOControl$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaISOControl$1_contains)],
jur_UEOLSet, "UEOLSet", 3, jur_AbstractSet, [], 16, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_UEOLSet__init_), "$matches", $rt_wrapFunction3(jur_UEOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_UEOLSet_hasConsumed), "$getName", $rt_wrapFunction0(jur_UEOLSet_getName)],
WebMain$onImagesLoaded$lambda$_3_0, 0, jl_Object, [otjb_AnimationFrameCallback], 1, 0, 0, ["$_init_", $rt_wrapFunction0(WebMain$onImagesLoaded$lambda$_3_0__init_), "$onAnimationFrame", $rt_wrapFunction1(WebMain$onImagesLoaded$lambda$_3_0_onAnimationFrame)],
jur_UCICharSet, "UCICharSet", 3, jur_LeafSet, [], 0, 0, 0, ["$_init_64", $rt_wrapFunction1(jur_UCICharSet__init_), "$accepts", $rt_wrapFunction2(jur_UCICharSet_accepts), "$getName", $rt_wrapFunction0(jur_UCICharSet_getName)],
jnci_Iso8859Charset, 0, jnc_Charset, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jnci_Iso8859Charset__init_), "$newDecoder", $rt_wrapFunction0(jnci_Iso8859Charset_newDecoder)],
jur_AtomicFSet, "AtomicFSet", 3, jur_FSet, [], 0, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_AtomicFSet__init_), "$matches", $rt_wrapFunction3(jur_AtomicFSet_matches), "$getIndex", $rt_wrapFunction0(jur_AtomicFSet_getIndex), "$getName", $rt_wrapFunction0(jur_AtomicFSet_getName), "$hasConsumed", $rt_wrapFunction1(jur_AtomicFSet_hasConsumed)]]);
$rt_metadata([jur_LowSurrogateCharSet, "LowSurrogateCharSet", 3, jur_JointSet, [], 0, 0, 0, ["$_init_64", $rt_wrapFunction1(jur_LowSurrogateCharSet__init_0), "$setNext", $rt_wrapFunction1(jur_LowSurrogateCharSet_setNext), "$matches", $rt_wrapFunction3(jur_LowSurrogateCharSet_matches), "$find", $rt_wrapFunction3(jur_LowSurrogateCharSet_find), "$findBack", $rt_wrapFunction4(jur_LowSurrogateCharSet_findBack), "$getName", $rt_wrapFunction0(jur_LowSurrogateCharSet_getName), "$first", $rt_wrapFunction1(jur_LowSurrogateCharSet_first),
"$hasConsumed", $rt_wrapFunction1(jur_LowSurrogateCharSet_hasConsumed)],
jur_CompositeGroupQuantifierSet, "CompositeGroupQuantifierSet", 3, jur_GroupQuantifierSet, [], 0, 0, 0, ["$_init_53", function(var_1, var_2, var_3, var_4, var_5) { jur_CompositeGroupQuantifierSet__init_(this, var_1, var_2, var_3, var_4, var_5); }, "$matches", $rt_wrapFunction3(jur_CompositeGroupQuantifierSet_matches), "$getName", $rt_wrapFunction0(jur_CompositeGroupQuantifierSet_getName)],
jur_RelCompositeGroupQuantifierSet, "RelCompositeGroupQuantifierSet", 3, jur_CompositeGroupQuantifierSet, [], 0, 0, 0, ["$_init_53", function(var_1, var_2, var_3, var_4, var_5) { jur_RelCompositeGroupQuantifierSet__init_(this, var_1, var_2, var_3, var_4, var_5); }, "$matches", $rt_wrapFunction3(jur_RelCompositeGroupQuantifierSet_matches)],
ju_ArrayList, "ArrayList", 2, ju_AbstractList, [jl_Cloneable, ji_Serializable, ju_RandomAccess], 1, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_", $rt_wrapFunction0(ju_ArrayList__init_3), "$_init_0", $rt_wrapFunction1(ju_ArrayList__init_1), "$_init_7", $rt_wrapFunction1(ju_ArrayList__init_2), "$ensureCapacity", $rt_wrapFunction1(ju_ArrayList_ensureCapacity), "$get", $rt_wrapFunction1(ju_ArrayList_get), "$size", $rt_wrapFunction0(ju_ArrayList_size), "$add2", $rt_wrapFunction1(ju_ArrayList_add),
"$add1", $rt_wrapFunction2(ju_ArrayList_add0), "$remove", $rt_wrapFunction1(ju_ArrayList_remove), "$remove0", $rt_wrapFunction1(ju_ArrayList_remove0), "$toString", $rt_wrapFunction0(ju_ArrayList_toString)],
jur_CompositeQuantifierSet, "CompositeQuantifierSet", 3, jur_LeafQuantifierSet, [], 0, 0, 0, ["$_init_67", $rt_wrapFunction4(jur_CompositeQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_CompositeQuantifierSet_matches), "$getName", $rt_wrapFunction0(jur_CompositeQuantifierSet_getName)],
jur_SupplRangeSet, "SupplRangeSet", 3, jur_JointSet, [], 0, 0, 0, ["$_init_70", $rt_wrapFunction1(jur_SupplRangeSet__init_), "$matches", $rt_wrapFunction3(jur_SupplRangeSet_matches), "$getName", $rt_wrapFunction0(jur_SupplRangeSet_getName), "$contains", $rt_wrapFunction1(jur_SupplRangeSet_contains), "$first", $rt_wrapFunction1(jur_SupplRangeSet_first), "$getChars", $rt_wrapFunction0(jur_SupplRangeSet_getChars), "$setNext", $rt_wrapFunction1(jur_SupplRangeSet_setNext), "$hasConsumed", $rt_wrapFunction1(jur_SupplRangeSet_hasConsumed)],
jur_RelAltGroupQuantifierSet, "RelAltGroupQuantifierSet", 3, jur_AltGroupQuantifierSet, [], 0, 0, 0, ["$_init_12", $rt_wrapFunction3(jur_RelAltGroupQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_RelAltGroupQuantifierSet_matches)],
ju_AbstractList$SubAbstractList, 0, ju_AbstractList, [], 0, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_49", $rt_wrapFunction3(ju_AbstractList$SubAbstractList__init_), "$get", $rt_wrapFunction1(ju_AbstractList$SubAbstractList_get), "$iterator", $rt_wrapFunction0(ju_AbstractList$SubAbstractList_iterator), "$listIterator", $rt_wrapFunction1(ju_AbstractList$SubAbstractList_listIterator), "$size", $rt_wrapFunction0(ju_AbstractList$SubAbstractList_size)],
ju_AbstractList$SubAbstractListRandomAccess, 0, ju_AbstractList$SubAbstractList, [ju_RandomAccess], 16, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_49", $rt_wrapFunction3(ju_AbstractList$SubAbstractListRandomAccess__init_)],
jl_String, "String", 7, jl_Object, [ji_Serializable, jl_Comparable, jl_CharSequence], 1, 0, jl_String_$callClinit, ["$_init_", $rt_wrapFunction0(jl_String__init_4), "$_init_30", $rt_wrapFunction1(jl_String__init_1), "$_init_55", $rt_wrapFunction1(jl_String__init_5), "$_init_16", $rt_wrapFunction3(jl_String__init_3), "$charAt", $rt_wrapFunction1(jl_String_charAt), "$length", $rt_wrapFunction0(jl_String_length), "$isEmpty", $rt_wrapFunction0(jl_String_isEmpty), "$startsWith0", $rt_wrapFunction2(jl_String_startsWith),
"$startsWith1", $rt_wrapFunction1(jl_String_startsWith0), "$indexOf1", $rt_wrapFunction2(jl_String_indexOf), "$lastIndexOf1", $rt_wrapFunction2(jl_String_lastIndexOf), "$indexOf0", $rt_wrapFunction2(jl_String_indexOf1), "$indexOf3", $rt_wrapFunction1(jl_String_indexOf0), "$lastIndexOf0", $rt_wrapFunction2(jl_String_lastIndexOf0), "$substring", $rt_wrapFunction2(jl_String_substring), "$substring0", $rt_wrapFunction1(jl_String_substring0), "$subSequence", $rt_wrapFunction2(jl_String_subSequence), "$contains0",
$rt_wrapFunction1(jl_String_contains), "$trim", $rt_wrapFunction0(jl_String_trim), "$toString", $rt_wrapFunction0(jl_String_toString), "$toCharArray", $rt_wrapFunction0(jl_String_toCharArray), "$equals", $rt_wrapFunction1(jl_String_equals), "$hashCode", $rt_wrapFunction0(jl_String_hashCode), "$toUpperCase", $rt_wrapFunction0(jl_String_toUpperCase), "$split1", $rt_wrapFunction1(jl_String_split), "$replaceAll0", $rt_wrapFunction2(jl_String_replaceAll)],
jnc_Charset$Charsets, 0, jl_Object, [], 0, 0, jnc_Charset$Charsets_$callClinit, 0,
otjt_Uint16Array, 0, otjt_TypedArray, [], 1, 0, 0, 0,
v_WebGameView$2, 0, jl_Object, [otjde_EventListener], 0, 0, 0, ["$_init_102", $rt_wrapFunction2(v_WebGameView$2__init_), "$handleEvent0", $rt_wrapFunction1(v_WebGameView$2_handleEvent0), "$handleEvent", $rt_wrapFunction1(v_WebGameView$2_handleEvent)],
jur_FSet$PossessiveFSet, "FSet$PossessiveFSet", 3, jur_AbstractSet, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_FSet$PossessiveFSet__init_), "$matches", $rt_wrapFunction3(jur_FSet$PossessiveFSet_matches), "$getName", $rt_wrapFunction0(jur_FSet$PossessiveFSet_getName), "$hasConsumed", $rt_wrapFunction1(jur_FSet$PossessiveFSet_hasConsumed)],
jur_PosCompositeGroupQuantifierSet, "PosCompositeGroupQuantifierSet", 3, jur_CompositeGroupQuantifierSet, [], 0, 0, 0, ["$_init_53", function(var_1, var_2, var_3, var_4, var_5) { jur_PosCompositeGroupQuantifierSet__init_(this, var_1, var_2, var_3, var_4, var_5); }, "$matches", $rt_wrapFunction3(jur_PosCompositeGroupQuantifierSet_matches)],
jnci_UTF8Charset, 0, jnc_Charset, [], 1, 0, jnci_UTF8Charset_$callClinit, ["$newDecoder", $rt_wrapFunction0(jnci_UTF8Charset_newDecoder)],
jur_MultiLineEOLSet, "MultiLineEOLSet", 3, jur_AbstractSet, [], 0, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_MultiLineEOLSet__init_), "$matches", $rt_wrapFunction3(jur_MultiLineEOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_MultiLineEOLSet_hasConsumed), "$getName", $rt_wrapFunction0(jur_MultiLineEOLSet_getName)],
s_Entities, "Entities", 0, jl_Enum, [], 65553, 0, s_Entities_$callClinit, ["$getWidth", $rt_wrapFunction0(s_Entities_getWidth), "$getHeight", $rt_wrapFunction0(s_Entities_getHeight)],
ji_Reader, 0, jl_Object, [ji_Closeable, jl_Readable], 1025, 0, 0, ["$_init_", $rt_wrapFunction0(ji_Reader__init_), "$_init_55", $rt_wrapFunction1(ji_Reader__init_0)],
ji_BufferedReader, 0, ji_Reader, [], 1, 0, 0, ["$_init_56", $rt_wrapFunction2(ji_BufferedReader__init_), "$_init_94", $rt_wrapFunction1(ji_BufferedReader__init_0), "$close", $rt_wrapFunction0(ji_BufferedReader_close), "$readLine", $rt_wrapFunction0(ji_BufferedReader_readLine)],
v_WebGameView$1, 0, jl_Object, [otjde_EventListener], 0, 0, 0, ["$_init_102", $rt_wrapFunction2(v_WebGameView$1__init_), "$handleEvent0", $rt_wrapFunction1(v_WebGameView$1_handleEvent), "$handleEvent", $rt_wrapFunction1(v_WebGameView$1_handleEvent0)],
jur_AbstractCharClass$LazyJavaDigit$1, "AbstractCharClass$LazyJavaDigit$1", 3, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_28", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaDigit$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaDigit$1_contains)],
jl_NullPointerException, "NullPointerException", 7, jl_RuntimeException, [], 1, 0, 0, ["$_init_1", $rt_wrapFunction1(jl_NullPointerException__init_1), "$_init_", $rt_wrapFunction0(jl_NullPointerException__init_0)],
jur_AbstractCharClass$LazyJavaSpaceChar$1, "AbstractCharClass$LazyJavaSpaceChar$1", 3, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_36", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaSpaceChar$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaSpaceChar$1_contains)],
otci_Base64Impl, 0, jl_Object, [], 17, 0, otci_Base64Impl_$callClinit, 0,
jl_Math, 0, jl_Object, [], 17, 0, 0, 0,
otji_JSWrapper$Helper$FinalizationRegistryConsumer, 0, jl_Object, [otj_JSObject], 1536, 0, 0, 0,
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart_computeValue)],
jur_PatternSyntaxException, "PatternSyntaxException", 3, jl_IllegalArgumentException, [], 1, 0, 0, ["$_init_60", $rt_wrapFunction3(jur_PatternSyntaxException__init_0), "$getMessage", $rt_wrapFunction0(jur_PatternSyntaxException_getMessage)],
juf_Predicate, 0, jl_Object, [], 1537, 0, 0, 0,
ju_AbstractSequentialList, 0, ju_AbstractList, [], 1025, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_", $rt_wrapFunction0(ju_AbstractSequentialList__init_), "$get", $rt_wrapFunction1(ju_AbstractSequentialList_get), "$add1", $rt_wrapFunction2(ju_AbstractSequentialList_add), "$remove", $rt_wrapFunction1(ju_AbstractSequentialList_remove), "$iterator", $rt_wrapFunction0(ju_AbstractSequentialList_iterator)],
jur_AbstractCharClass$LazyJavaDefined, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaDefined__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaDefined_computeValue)],
me_Goei, "Goei", 15, me_Alien, [], 1, 0, 0, ["$_init_46", function(var_1, var_2, var_3, var_4, var_5) { me_Goei__init_(this, var_1, var_2, var_3, var_4, var_5); }, "$copyAlien", $rt_wrapFunction0(me_Goei_copyAlien), "$getScoreValue", $rt_wrapFunction0(me_Goei_getScoreValue)],
jur_Pattern, 0, jl_Object, [ji_Serializable], 17, 0, 0, ["$matcher", $rt_wrapFunction1(jur_Pattern_matcher), "$split0", $rt_wrapFunction2(jur_Pattern_split0), "$split", $rt_wrapFunction1(jur_Pattern_split), "$pattern", $rt_wrapFunction0(jur_Pattern_pattern), "$namedGroups", $rt_wrapFunction0(jur_Pattern_namedGroups), "$groupCount", $rt_wrapFunction0(jur_Pattern_groupCount), "$compCount", $rt_wrapFunction0(jur_Pattern_compCount), "$consCount", $rt_wrapFunction0(jur_Pattern_consCount)],
m_GameModel$update$lambda$_20_0, 0, jl_Object, [juf_Predicate], 1, 0, 0, ["$_init_3", $rt_wrapFunction1(m_GameModel$update$lambda$_20_0__init_), "$test", $rt_wrapFunction1(m_GameModel$update$lambda$_20_0_test0), "$test0", $rt_wrapFunction1(m_GameModel$update$lambda$_20_0_test)],
ji_IOException, "IOException", 6, jl_Exception, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(ji_IOException__init_0), "$_init_1", $rt_wrapFunction1(ji_IOException__init_)],
ji_UnsupportedEncodingException, "UnsupportedEncodingException", 6, ji_IOException, [], 1, 0, 0, ["$_init_1", $rt_wrapFunction1(ji_UnsupportedEncodingException__init_)],
jur_PosAltGroupQuantifierSet, "PosAltGroupQuantifierSet", 3, jur_AltGroupQuantifierSet, [], 0, 0, 0, ["$_init_12", $rt_wrapFunction3(jur_PosAltGroupQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_PosAltGroupQuantifierSet_matches), "$setNext", $rt_wrapFunction1(jur_PosAltGroupQuantifierSet_setNext)],
jn_BufferOverflowException, "BufferOverflowException", 4, jl_RuntimeException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jn_BufferOverflowException__init_0)],
ju_Collections$13, 0, ju_AbstractMap, [], 0, 0, 0, ["$_init_105", $rt_wrapFunction1(ju_Collections$13__init_)],
me_PlayerShot, "PlayerShot", 15, me_Entity, [], 1, 0, 0, ["$_init_6", $rt_wrapFunction2(me_PlayerShot__init_), "$update", $rt_wrapFunction1(me_PlayerShot_update)],
ju_Queue, 0, jl_Object, [ju_Collection], 1537, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf)],
ju_Deque, 0, jl_Object, [ju_Queue, ju_SequencedCollection], 1537, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf)],
jur_AbstractCharClass$LazyJavaLetterOrDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLetterOrDigit__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLetterOrDigit_computeValue)],
otciu_UnicodeHelper$Range, "UnicodeHelper$Range", 12, jl_Object, [], 1, 0, 0, ["$_init_35", $rt_wrapFunction3(otciu_UnicodeHelper$Range__init_)],
jur_AbstractLineTerminator$2, 0, jur_AbstractLineTerminator, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractLineTerminator$2__init_), "$isLineTerminator", $rt_wrapFunction1(jur_AbstractLineTerminator$2_isLineTerminator), "$isAfterLineTerminator", $rt_wrapFunction2(jur_AbstractLineTerminator$2_isAfterLineTerminator)],
otciu_CharMapping, 0, jl_Object, [], 1, 0, 0, ["$_init_34", $rt_wrapFunction2(otciu_CharMapping__init_)],
jl_Record, 0, jl_Object, [], 1025, 0, 0, ["$_init_", $rt_wrapFunction0(jl_Record__init_)],
m_AlienFormationsLibrary$StagePaths, "AlienFormationsLibrary$StagePaths", 13, jl_Record, [], 16, 0, 0, ["$_init_96", $rt_wrapFunction1(m_AlienFormationsLibrary$StagePaths__init_), "$toString", $rt_wrapFunction0(m_AlienFormationsLibrary$StagePaths_toString), "$formationsList", $rt_wrapFunction0(m_AlienFormationsLibrary$StagePaths_formationsList)],
jur_AbstractLineTerminator$1, 0, jur_AbstractLineTerminator, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractLineTerminator$1__init_), "$isLineTerminator", $rt_wrapFunction1(jur_AbstractLineTerminator$1_isLineTerminator), "$isAfterLineTerminator", $rt_wrapFunction2(jur_AbstractLineTerminator$1_isAfterLineTerminator)]]);
$rt_metadata([jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart_computeValue)],
otjc_JSWeakRef, 0, jl_Object, [otj_JSObject], 1025, 0, 0, 0,
otci_CharFlow, 0, jl_Object, [], 1, 0, 0, ["$_init_30", $rt_wrapFunction1(otci_CharFlow__init_)],
jur_RangeSet, "RangeSet", 3, jur_LeafSet, [], 0, 0, 0, ["$_init_70", $rt_wrapFunction1(jur_RangeSet__init_), "$accepts", $rt_wrapFunction2(jur_RangeSet_accepts), "$getName", $rt_wrapFunction0(jur_RangeSet_getName), "$first", $rt_wrapFunction1(jur_RangeSet_first), "$getChars", $rt_wrapFunction0(jur_RangeSet_getChars)],
jur_UnicodeCategory, "UnicodeCategory", 3, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_UnicodeCategory__init_), "$contains", $rt_wrapFunction1(jur_UnicodeCategory_contains)],
jur_UnicodeCategoryScope, "UnicodeCategoryScope", 3, jur_UnicodeCategory, [], 0, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_UnicodeCategoryScope__init_), "$contains", $rt_wrapFunction1(jur_UnicodeCategoryScope_contains)],
jur_CharClass, "CharClass", 3, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_CharClass__init_2), "$_init_61", $rt_wrapFunction2(jur_CharClass__init_0), "$_init_69", $rt_wrapFunction3(jur_CharClass__init_1), "$add", $rt_wrapFunction1(jur_CharClass_add), "$add4", $rt_wrapFunction1(jur_CharClass_add1), "$add0", $rt_wrapFunction2(jur_CharClass_add0), "$union", $rt_wrapFunction1(jur_CharClass_union), "$intersection", $rt_wrapFunction1(jur_CharClass_intersection), "$contains", $rt_wrapFunction1(jur_CharClass_contains),
"$getBits", $rt_wrapFunction0(jur_CharClass_getBits), "$getLowHighSurrogates", $rt_wrapFunction0(jur_CharClass_getLowHighSurrogates), "$getInstance", $rt_wrapFunction0(jur_CharClass_getInstance), "$toString", $rt_wrapFunction0(jur_CharClass_toString), "$hasUCI", $rt_wrapFunction0(jur_CharClass_hasUCI)],
jn_BufferUnderflowException, "BufferUnderflowException", 4, jl_RuntimeException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jn_BufferUnderflowException__init_)],
otcit_FloatAnalyzer$Result, 0, jl_Object, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(otcit_FloatAnalyzer$Result__init_)],
jur_UCIDecomposedCharSet, "UCIDecomposedCharSet", 3, jur_DecomposedCharSet, [], 0, 0, 0, ["$_init_23", $rt_wrapFunction2(jur_UCIDecomposedCharSet__init_)],
otrr_ClassInfo, 0, otrr_ReflectionInfo, [], 17, 0, 0, ["$newArrayInstance", $rt_wrapFunction1(otrr_ClassInfo_newArrayInstance)],
jur_AbstractCharClass$LazyJavaWhitespace$1, "AbstractCharClass$LazyJavaWhitespace$1", 3, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_97", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaWhitespace$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaWhitespace$1_contains)],
jur_AbstractCharClass$LazyJavaJavaIdentifierStart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaJavaIdentifierStart_computeValue)],
jl_CloneNotSupportedException, 0, jl_Exception, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_CloneNotSupportedException__init_)],
v_WebEntityPainter$1, 0, jl_Object, [], 32768, 0, v_WebEntityPainter$1_$callClinit, 0,
jl_Long, 0, jl_Number, [jl_Comparable], 1, 0, jl_Long_$callClinit, 0,
jur_SequenceSet$IntHash, 0, jl_Object, [], 0, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_SequenceSet$IntHash__init_0), "$put3", $rt_wrapFunction2(jur_SequenceSet$IntHash_put), "$get2", $rt_wrapFunction1(jur_SequenceSet$IntHash_get)],
jur_AbstractCharClass$LazyNonDigit, 0, jur_AbstractCharClass$LazyDigit, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonDigit__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonDigit_computeValue)],
jur_AbstractCharClass$1, "AbstractCharClass$1", 3, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_17", $rt_wrapFunction2(jur_AbstractCharClass$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$1_contains)],
ca_ControllerForMain, 0, jl_Object, [], 1537, 0, 0, 0,
jur_AbstractCharClass$2, "AbstractCharClass$2", 3, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_18", $rt_wrapFunction3(jur_AbstractCharClass$2__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$2_contains)],
jur_AbstractCharClass$LazyJavaLowerCase, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLowerCase__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLowerCase_computeValue)],
jur_PossessiveCompositeQuantifierSet, "PossessiveCompositeQuantifierSet", 3, jur_CompositeQuantifierSet, [], 0, 0, 0, ["$_init_67", $rt_wrapFunction4(jur_PossessiveCompositeQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_PossessiveCompositeQuantifierSet_matches)],
jur_AbstractCharClass$LazyJavaLetterOrDigit$1, "AbstractCharClass$LazyJavaLetterOrDigit$1", 3, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_72", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLetterOrDigit$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLetterOrDigit$1_contains)],
jur_CharClass$18, "CharClass$18", 3, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_78", $rt_wrapFunction2(jur_CharClass$18__init_), "$contains", $rt_wrapFunction1(jur_CharClass$18_contains), "$toString", $rt_wrapFunction0(jur_CharClass$18_toString)],
m_AlienFormationsLibrary$FormationPaths, "AlienFormationsLibrary$FormationPaths", 13, jl_Record, [], 16, 0, 0, ["$_init_96", $rt_wrapFunction1(m_AlienFormationsLibrary$FormationPaths__init_), "$toString", $rt_wrapFunction0(m_AlienFormationsLibrary$FormationPaths_toString), "$alienList", $rt_wrapFunction0(m_AlienFormationsLibrary$FormationPaths_alienList)],
jur_PossessiveGroupQuantifierSet, "PossessiveGroupQuantifierSet", 3, jur_GroupQuantifierSet, [], 0, 0, 0, ["$_init_12", $rt_wrapFunction3(jur_PossessiveGroupQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_PossessiveGroupQuantifierSet_matches)],
jur_CharClass$13, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_75", $rt_wrapFunction2(jur_CharClass$13__init_), "$contains", $rt_wrapFunction1(jur_CharClass$13_contains)],
jur_CharClass$12, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_75", $rt_wrapFunction2(jur_CharClass$12__init_), "$contains", $rt_wrapFunction1(jur_CharClass$12_contains)],
jur_CharClass$11, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_74", $rt_wrapFunction4(jur_CharClass$11__init_), "$contains", $rt_wrapFunction1(jur_CharClass$11_contains)],
otci_Base46, 0, jl_Object, [], 17, 0, 0, 0,
jur_CharClass$10, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_74", $rt_wrapFunction4(jur_CharClass$10__init_), "$contains", $rt_wrapFunction1(jur_CharClass$10_contains)],
jur_CharClass$17, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_74", $rt_wrapFunction4(jur_CharClass$17__init_), "$contains", $rt_wrapFunction1(jur_CharClass$17_contains)],
jur_UCISequenceSet, "UCISequenceSet", 3, jur_LeafSet, [], 0, 0, 0, ["$_init_62", $rt_wrapFunction1(jur_UCISequenceSet__init_), "$accepts", $rt_wrapFunction2(jur_UCISequenceSet_accepts), "$getName", $rt_wrapFunction0(jur_UCISequenceSet_getName)],
jur_CharClass$16, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_74", $rt_wrapFunction4(jur_CharClass$16__init_), "$contains", $rt_wrapFunction1(jur_CharClass$16_contains)],
jur_CharClass$15, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_77", $rt_wrapFunction3(jur_CharClass$15__init_), "$contains", $rt_wrapFunction1(jur_CharClass$15_contains)],
jur_AbstractCharClass$LazyJavaDefined$1, "AbstractCharClass$LazyJavaDefined$1", 3, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_58", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaDefined$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaDefined$1_contains)],
otjt_Int8Array, 0, otjt_TypedArray, [], 1, 0, 0, 0,
jur_CharClass$14, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_77", $rt_wrapFunction3(jur_CharClass$14__init_), "$contains", $rt_wrapFunction1(jur_CharClass$14_contains)],
jl_StringBuilder, 0, jl_AbstractStringBuilder, [jl_Appendable], 1, 0, 0, ["$_init_0", $rt_wrapFunction1(jl_StringBuilder__init_4), "$_init_", $rt_wrapFunction0(jl_StringBuilder__init_3), "$_init_1", $rt_wrapFunction1(jl_StringBuilder__init_2), "$append", $rt_wrapFunction1(jl_StringBuilder_append), "$append13", $rt_wrapFunction1(jl_StringBuilder_append3), "$append2", $rt_wrapFunction1(jl_StringBuilder_append1), "$append3", $rt_wrapFunction1(jl_StringBuilder_append2), "$append22", $rt_wrapFunction1(jl_StringBuilder_append6),
"$append0", $rt_wrapFunction1(jl_StringBuilder_append0), "$append21", $rt_wrapFunction3(jl_StringBuilder_append5), "$append12", $rt_wrapFunction1(jl_StringBuilder_append8), "$append25", $rt_wrapFunction1(jl_StringBuilder_append4), "$insert17", $rt_wrapFunction2(jl_StringBuilder_insert5), "$insert16", $rt_wrapFunction2(jl_StringBuilder_insert7), "$insert12", $rt_wrapFunction4(jl_StringBuilder_insert3), "$insert14", $rt_wrapFunction2(jl_StringBuilder_insert8), "$insert13", $rt_wrapFunction2(jl_StringBuilder_insert1),
"$insert15", $rt_wrapFunction2(jl_StringBuilder_insert2), "$delete0", $rt_wrapFunction2(jl_StringBuilder_delete), "$deleteCharAt", $rt_wrapFunction1(jl_StringBuilder_deleteCharAt), "$insert18", $rt_wrapFunction2(jl_StringBuilder_insert10), "$substring", $rt_wrapFunction2(jl_StringBuilder_substring), "$subSequence", $rt_wrapFunction2(jl_StringBuilder_subSequence), "$insert7", $rt_wrapFunction4(jl_StringBuilder_insert9), "$append5", $rt_wrapFunction3(jl_StringBuilder_append7), "$isEmpty", $rt_wrapFunction0(jl_StringBuilder_isEmpty),
"$length", $rt_wrapFunction0(jl_StringBuilder_length), "$toString", $rt_wrapFunction0(jl_StringBuilder_toString), "$ensureCapacity", $rt_wrapFunction1(jl_StringBuilder_ensureCapacity), "$insert5", $rt_wrapFunction2(jl_StringBuilder_insert11), "$insert", $rt_wrapFunction2(jl_StringBuilder_insert0), "$insert4", $rt_wrapFunction2(jl_StringBuilder_insert), "$insert3", $rt_wrapFunction2(jl_StringBuilder_insert4), "$insert2", $rt_wrapFunction2(jl_StringBuilder_insert6), "$insert0", $rt_wrapFunction2(jl_StringBuilder_insert12)],
jl_ClassLoader, 0, jl_Object, [], 1025, 0, jl_ClassLoader_$callClinit, ["$_init_", $rt_wrapFunction0(jl_ClassLoader__init_0), "$_init_81", $rt_wrapFunction1(jl_ClassLoader__init_), "$getResourceAsStream", $rt_wrapFunction1(jl_ClassLoader_getResourceAsStream)],
ju_ConcurrentModificationException, "ConcurrentModificationException", 2, jl_RuntimeException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(ju_ConcurrentModificationException__init_0)],
jur_CompositeRangeSet, "CompositeRangeSet", 3, jur_JointSet, [], 0, 0, 0, ["$_init_71", $rt_wrapFunction2(jur_CompositeRangeSet__init_0), "$matches", $rt_wrapFunction3(jur_CompositeRangeSet_matches), "$setNext", $rt_wrapFunction1(jur_CompositeRangeSet_setNext), "$getName", $rt_wrapFunction0(jur_CompositeRangeSet_getName), "$hasConsumed", $rt_wrapFunction1(jur_CompositeRangeSet_hasConsumed), "$first", $rt_wrapFunction1(jur_CompositeRangeSet_first)],
me_Player, "Player", 15, me_Entity, [], 1, 0, 0, ["$_init_4", $rt_wrapFunction1(me_Player__init_), "$update", $rt_wrapFunction1(me_Player_update), "$fixCoordIfPlayerOutOfBounds", $rt_wrapFunction0(me_Player_fixCoordIfPlayerOutOfBounds), "$setPlayerMovingRight", $rt_wrapFunction1(me_Player_setPlayerMovingRight), "$setPlayerMovingLeft", $rt_wrapFunction1(me_Player_setPlayerMovingLeft)],
s_GameState, 0, jl_Enum, [], 65553, 0, s_GameState_$callClinit, 0,
jur_FinalSet, "FinalSet", 3, jur_FSet, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_FinalSet__init_), "$matches", $rt_wrapFunction3(jur_FinalSet_matches), "$getName", $rt_wrapFunction0(jur_FinalSet_getName)],
jur_EmptySet, "EmptySet", 3, jur_LeafSet, [], 0, 0, 0, ["$_init_10", $rt_wrapFunction1(jur_EmptySet__init_0), "$accepts", $rt_wrapFunction2(jur_EmptySet_accepts), "$find", $rt_wrapFunction3(jur_EmptySet_find), "$findBack", $rt_wrapFunction4(jur_EmptySet_findBack), "$getName", $rt_wrapFunction0(jur_EmptySet_getName), "$hasConsumed", $rt_wrapFunction1(jur_EmptySet_hasConsumed)],
v_WebBackgroundPainter$2, 0, jl_Object, [otjde_EventListener], 0, 0, 0, ["$_init_1", $rt_wrapFunction1(v_WebBackgroundPainter$2__init_), "$handleEvent", $rt_wrapFunction1(v_WebBackgroundPainter$2_handleEvent)],
s_RotationDirection, "RotationDirection", 0, jl_Enum, [], 65553, 0, s_RotationDirection_$callClinit, ["$getAngle", $rt_wrapFunction0(s_RotationDirection_getAngle)],
ju_Map$Entry, 0, jl_Object, [], 1537, 0, 0, 0]);
$rt_metadata([ju_MapEntry, 0, jl_Object, [ju_Map$Entry, jl_Cloneable], 0, 0, 0, ["$_init_84", $rt_wrapFunction2(ju_MapEntry__init_)],
ju_HashMap$HashEntry, 0, ju_MapEntry, [], 0, 0, 0, ["$_init_14", $rt_wrapFunction2(ju_HashMap$HashEntry__init_)],
ju_LinkedHashMap$LinkedHashMapEntry, 0, ju_HashMap$HashEntry, [], 16, 0, 0, ["$_init_14", $rt_wrapFunction2(ju_LinkedHashMap$LinkedHashMapEntry__init_)],
v_WebBackgroundPainter$1, 0, jl_Object, [otjde_EventListener], 0, 0, 0, ["$_init_", $rt_wrapFunction0(v_WebBackgroundPainter$1__init_), "$handleEvent", $rt_wrapFunction1(v_WebBackgroundPainter$1_handleEvent)],
jur_AbstractCharClass$LazyASCII, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyASCII__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyASCII_computeValue)],
ji_InputStreamReader, 0, ji_Reader, [], 1, 0, 0, ["$_init_95", $rt_wrapFunction2(ji_InputStreamReader__init_1), "$_init_85", $rt_wrapFunction2(ji_InputStreamReader__init_0), "$_init_86", $rt_wrapFunction2(ji_InputStreamReader__init_), "$close", $rt_wrapFunction0(ji_InputStreamReader_close), "$read", $rt_wrapFunction3(ji_InputStreamReader_read), "$ready", $rt_wrapFunction0(ji_InputStreamReader_ready)],
ju_AbstractList$1, 0, jl_Object, [ju_Iterator], 0, 0, 0, ["$_init_47", $rt_wrapFunction1(ju_AbstractList$1__init_), "$hasNext", $rt_wrapFunction0(ju_AbstractList$1_hasNext), "$next", $rt_wrapFunction0(ju_AbstractList$1_next), "$remove1", $rt_wrapFunction0(ju_AbstractList$1_remove)],
v_WebBackgroundPainter, 0, jl_Object, [], 0, 0, v_WebBackgroundPainter_$callClinit, 0,
jur_Quantifier, "Quantifier", 3, jur_SpecialToken, [jl_Cloneable], 0, 0, 0, ["$_init_8", $rt_wrapFunction2(jur_Quantifier__init_), "$min1", $rt_wrapFunction0(jur_Quantifier_min), "$max1", $rt_wrapFunction0(jur_Quantifier_max), "$toString", $rt_wrapFunction0(jur_Quantifier_toString)],
jur_AbstractCharClass$LazyJavaUpperCase$1, "AbstractCharClass$LazyJavaUpperCase$1", 3, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_93", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUpperCase$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUpperCase$1_contains)],
jl_Runnable, 0, jl_Object, [], 1537, 0, 0, 0,
jnci_UTF8Decoder, 0, jnci_BufferedDecoder, [], 1, 0, 0, ["$_init_37", $rt_wrapFunction1(jnci_UTF8Decoder__init_), "$arrayDecode", function(var_1, var_2, var_3, var_4, var_5, var_6, var_7) { return jnci_UTF8Decoder_arrayDecode(this, var_1, var_2, var_3, var_4, var_5, var_6, var_7); }],
otpp_ResourceAccessor, 0, jl_Object, [], 16, 0, 0, 0,
jnci_BufferedDecoder$Controller, 0, jl_Object, [], 1, 0, 0, ["$_init_25", $rt_wrapFunction2(jnci_BufferedDecoder$Controller__init_), "$hasMoreInput0", $rt_wrapFunction0(jnci_BufferedDecoder$Controller_hasMoreInput), "$hasMoreInput", $rt_wrapFunction1(jnci_BufferedDecoder$Controller_hasMoreInput0), "$hasMoreOutput", $rt_wrapFunction1(jnci_BufferedDecoder$Controller_hasMoreOutput), "$setInPosition", $rt_wrapFunction1(jnci_BufferedDecoder$Controller_setInPosition), "$setOutPosition", $rt_wrapFunction1(jnci_BufferedDecoder$Controller_setOutPosition)],
jur_PossessiveQuantifierSet, "PossessiveQuantifierSet", 3, jur_LeafQuantifierSet, [], 0, 0, 0, ["$_init_31", $rt_wrapFunction3(jur_PossessiveQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_PossessiveQuantifierSet_matches)],
jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1, "AbstractCharClass$LazyJavaIdentifierIgnorable$1", 3, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_103", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1_contains)],
jur_AbstractCharClass$LazyJavaLetter$1, "AbstractCharClass$LazyJavaLetter$1", 3, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_22", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLetter$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLetter$1_contains)],
jur_ReluctantQuantifierSet, "ReluctantQuantifierSet", 3, jur_LeafQuantifierSet, [], 0, 0, 0, ["$_init_31", $rt_wrapFunction3(jur_ReluctantQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_ReluctantQuantifierSet_matches)],
jnci_Iso8859Decoder, 0, jnci_BufferedDecoder, [], 1, 0, 0, ["$_init_37", $rt_wrapFunction1(jnci_Iso8859Decoder__init_), "$arrayDecode", function(var_1, var_2, var_3, var_4, var_5, var_6, var_7) { return jnci_Iso8859Decoder_arrayDecode(this, var_1, var_2, var_3, var_4, var_5, var_6, var_7); }],
jur_EOISet, "EOISet", 3, jur_AbstractSet, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_EOISet__init_), "$matches", $rt_wrapFunction3(jur_EOISet_matches), "$hasConsumed", $rt_wrapFunction1(jur_EOISet_hasConsumed), "$getName", $rt_wrapFunction0(jur_EOISet_getName)],
jur_AbstractCharClass$LazyUpper, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyUpper__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyUpper_computeValue)],
v_WebInterfacePainter, 0, jl_Object, [], 0, 0, 0, 0,
otji_JSWrapper, 0, jl_Object, [], 17, 0, 0, 0,
ca_ActionHandlerForView, 0, jl_Object, [], 1537, 0, 0, 0,
c_GameController, 0, jl_Object, [ca_ControllerForMain, ca_ActionHandlerForView], 1, 0, 0, ["$cmdMovingLeft", $rt_wrapFunction1(c_GameController_cmdMovingLeft), "$cmdMovingRight", $rt_wrapFunction1(c_GameController_cmdMovingRight), "$cmdCoinInserted", $rt_wrapFunction0(c_GameController_cmdCoinInserted), "$cmdAction", $rt_wrapFunction0(c_GameController_cmdAction), "$cmdNukeAll", $rt_wrapFunction0(c_GameController_cmdNukeAll), "$updateModelOnly", $rt_wrapFunction0(c_GameController_updateModelOnly), "$renderView",
$rt_wrapFunction0(c_GameController_renderView)],
jur_MultiLineSOLSet, "MultiLineSOLSet", 3, jur_AbstractSet, [], 0, 0, 0, ["$_init_68", $rt_wrapFunction1(jur_MultiLineSOLSet__init_), "$matches", $rt_wrapFunction3(jur_MultiLineSOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_MultiLineSOLSet_hasConsumed), "$getName", $rt_wrapFunction0(jur_MultiLineSOLSet_getName)],
ju_LinkedList, 0, ju_AbstractSequentialList, [ju_Deque, jl_Cloneable], 1, 0, 0, ["$removeIf", $rt_wrapFunction1(ju_Collection_removeIf), "$_init_", $rt_wrapFunction0(ju_LinkedList__init_2), "$_init_7", $rt_wrapFunction1(ju_LinkedList__init_1), "$size", $rt_wrapFunction0(ju_LinkedList_size), "$clear", $rt_wrapFunction0(ju_LinkedList_clear), "$listIterator0", $rt_wrapFunction0(ju_LinkedList_listIterator), "$listIterator", $rt_wrapFunction1(ju_LinkedList_listIterator0), "$poll", $rt_wrapFunction0(ju_LinkedList_poll)],
otcic_JSStderrPrintStream, 0, otcic_JsConsolePrintStream, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(otcic_JSStderrPrintStream__init_), "$print", $rt_wrapFunction1(otcic_JSStderrPrintStream_print)],
WebMain$loop$lambda$_4_0, 0, jl_Object, [otjb_AnimationFrameCallback], 1, 0, 0, ["$_init_", $rt_wrapFunction0(WebMain$loop$lambda$_4_0__init_), "$onAnimationFrame", $rt_wrapFunction1(WebMain$loop$lambda$_4_0_onAnimationFrame)],
jur_AbstractCharClass$LazyLower, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyLower__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyLower_computeValue)],
ju_AbstractList$TListIteratorImpl, 0, jl_Object, [ju_ListIterator], 0, 0, 0, ["$_init_48", $rt_wrapFunction4(ju_AbstractList$TListIteratorImpl__init_), "$next", $rt_wrapFunction0(ju_AbstractList$TListIteratorImpl_next), "$nextIndex", $rt_wrapFunction0(ju_AbstractList$TListIteratorImpl_nextIndex)],
jur_AbstractCharClass$LazyJavaTitleCase, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaTitleCase__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaTitleCase_computeValue)],
md_PointOfPath, "PointOfPath", 14, jl_Record, [], 17, 0, 0, ["$_init_44", $rt_wrapFunction2(md_PointOfPath__init_0), "$toString", $rt_wrapFunction0(md_PointOfPath_toString), "$equals", $rt_wrapFunction1(md_PointOfPath_equals), "$x", $rt_wrapFunction0(md_PointOfPath_x), "$y", $rt_wrapFunction0(md_PointOfPath_y)],
jur_PreviousMatch, "PreviousMatch", 3, jur_AbstractSet, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_PreviousMatch__init_), "$matches", $rt_wrapFunction3(jur_PreviousMatch_matches), "$hasConsumed", $rt_wrapFunction1(jur_PreviousMatch_hasConsumed), "$getName", $rt_wrapFunction0(jur_PreviousMatch_getName)],
jur_NonCapFSet, "NonCapFSet", 3, jur_FSet, [], 0, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_NonCapFSet__init_), "$matches", $rt_wrapFunction3(jur_NonCapFSet_matches), "$getName", $rt_wrapFunction0(jur_NonCapFSet_getName), "$hasConsumed", $rt_wrapFunction1(jur_NonCapFSet_hasConsumed)],
jur_UCISupplCharSet, "UCISupplCharSet", 3, jur_LeafSet, [], 0, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_UCISupplCharSet__init_), "$accepts", $rt_wrapFunction2(jur_UCISupplCharSet_accepts), "$getName", $rt_wrapFunction0(jur_UCISupplCharSet_getName)],
jl_System, 0, jl_Object, [], 17, 0, 0, 0,
jur_AbstractCharClass$LazyRange, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_8", $rt_wrapFunction2(jur_AbstractCharClass$LazyRange__init_0), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyRange_computeValue)],
jur_AbstractCharClass$LazyXDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyXDigit__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyXDigit_computeValue)],
ju_LinkedList$Entry, 0, jl_Object, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(ju_LinkedList$Entry__init_0)],
jur_Matcher, 0, jl_Object, [jur_MatchResult], 17, 0, 0, ["$appendReplacement", $rt_wrapFunction2(jur_Matcher_appendReplacement), "$reset0", $rt_wrapFunction0(jur_Matcher_reset), "$appendTail", $rt_wrapFunction1(jur_Matcher_appendTail), "$replaceAll", $rt_wrapFunction1(jur_Matcher_replaceAll), "$group", $rt_wrapFunction1(jur_Matcher_group), "$find1", $rt_wrapFunction1(jur_Matcher_find), "$find0", $rt_wrapFunction0(jur_Matcher_find0), "$start", $rt_wrapFunction1(jur_Matcher_start0), "$end", $rt_wrapFunction1(jur_Matcher_end0),
"$start0", $rt_wrapFunction0(jur_Matcher_start), "$end0", $rt_wrapFunction0(jur_Matcher_end), "$hasTransparentBounds", $rt_wrapFunction0(jur_Matcher_hasTransparentBounds), "$_init_59", $rt_wrapFunction2(jur_Matcher__init_)],
jur_DotAllSet, "DotAllSet", 3, jur_JointSet, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_DotAllSet__init_), "$matches", $rt_wrapFunction3(jur_DotAllSet_matches), "$getName", $rt_wrapFunction0(jur_DotAllSet_getName), "$setNext", $rt_wrapFunction1(jur_DotAllSet_setNext), "$getType", $rt_wrapFunction0(jur_DotAllSet_getType), "$hasConsumed", $rt_wrapFunction1(jur_DotAllSet_hasConsumed)],
jur_AbstractCharClass$LazyJavaLowerCase$1, "AbstractCharClass$LazyJavaLowerCase$1", 3, jur_AbstractCharClass, [], 0, 0, 0, ["$_init_80", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLowerCase$1__init_), "$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLowerCase$1_contains)],
jur_UCISupplRangeSet, "UCISupplRangeSet", 3, jur_SupplRangeSet, [], 0, 0, 0, ["$_init_70", $rt_wrapFunction1(jur_UCISupplRangeSet__init_0), "$contains", $rt_wrapFunction1(jur_UCISupplRangeSet_contains), "$getName", $rt_wrapFunction0(jur_UCISupplRangeSet_getName)],
jur_AbstractCharClass$LazyJavaUpperCase, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUpperCase__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUpperCase_computeValue)],
jur_HangulDecomposedCharSet, "HangulDecomposedCharSet", 3, jur_JointSet, [], 0, 0, 0, ["$_init_63", $rt_wrapFunction2(jur_HangulDecomposedCharSet__init_), "$setNext", $rt_wrapFunction1(jur_HangulDecomposedCharSet_setNext), "$getName", $rt_wrapFunction0(jur_HangulDecomposedCharSet_getName), "$matches", $rt_wrapFunction3(jur_HangulDecomposedCharSet_matches), "$first", $rt_wrapFunction1(jur_HangulDecomposedCharSet_first), "$hasConsumed", $rt_wrapFunction1(jur_HangulDecomposedCharSet_hasConsumed)],
jur_AbstractCharClass$LazyPunct, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyPunct__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyPunct_computeValue)],
WebMain, 0, jl_Object, [], 1, 0, WebMain_$callClinit, 0,
m_GameModel$1, 0, jl_Object, [], 32768, 0, m_GameModel$1_$callClinit, 0,
m_AlienHandler, 0, jl_Object, [], 0, 0, 0, ["$_init_3", $rt_wrapFunction1(m_AlienHandler__init_), "$updateHandlerAndGetNewAliens", $rt_wrapFunction1(m_AlienHandler_updateHandlerAndGetNewAliens), "$isFormationCompleted", $rt_wrapFunction0(m_AlienHandler_isFormationCompleted), "$isStageCompleted", $rt_wrapFunction0(m_AlienHandler_isStageCompleted), "$AreAllStageAlienPathsEmpty", $rt_wrapFunction0(m_AlienHandler_AreAllStageAlienPathsEmpty), "$getNumStage", $rt_wrapFunction0(m_AlienHandler_getNumStage)]]);
$rt_metadata([ju_AbstractList$SubAbstractList$SubAbstractListIterator, 0, jl_Object, [ju_ListIterator], 16, 0, 0, ["$_init_54", $rt_wrapFunction4(ju_AbstractList$SubAbstractList$SubAbstractListIterator__init_), "$hasNext", $rt_wrapFunction0(ju_AbstractList$SubAbstractList$SubAbstractListIterator_hasNext), "$next", $rt_wrapFunction0(ju_AbstractList$SubAbstractList$SubAbstractListIterator_next)],
jur_WordBoundary, "WordBoundary", 3, jur_AbstractSet, [], 0, 0, 0, ["$_init_40", $rt_wrapFunction1(jur_WordBoundary__init_0), "$matches", $rt_wrapFunction3(jur_WordBoundary_matches), "$hasConsumed", $rt_wrapFunction1(jur_WordBoundary_hasConsumed), "$getName", $rt_wrapFunction0(jur_WordBoundary_getName)],
jl_SystemClassLoader, 0, jl_ClassLoader, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jl_SystemClassLoader__init_)],
jur_AbstractCharClass$LazySpace, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazySpace__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazySpace_computeValue)],
jl_Double, 0, jl_Number, [jl_Comparable], 1, 0, jl_Double_$callClinit, 0,
m_AlienFormationsLibrary, 0, jl_Object, [], 0, 0, m_AlienFormationsLibrary_$callClinit, 0,
me_BossGalaga, "BossGalaga", 15, me_Alien, [], 1, 0, 0, ["$_init_46", function(var_1, var_2, var_3, var_4, var_5) { me_BossGalaga__init_0(this, var_1, var_2, var_3, var_4, var_5); }, "$copyAlien", $rt_wrapFunction0(me_BossGalaga_copyAlien), "$update", $rt_wrapFunction1(me_BossGalaga_update), "$getScoreValue", $rt_wrapFunction0(me_BossGalaga_getScoreValue)],
ju_LinkedList$SequentialListIterator, 0, jl_Object, [ju_ListIterator], 0, 0, 0, ["$_init_89", $rt_wrapFunction4(ju_LinkedList$SequentialListIterator__init_0), "$hasNext", $rt_wrapFunction0(ju_LinkedList$SequentialListIterator_hasNext), "$next", $rt_wrapFunction0(ju_LinkedList$SequentialListIterator_next), "$remove1", $rt_wrapFunction0(ju_LinkedList$SequentialListIterator_remove), "$hasPrevious", $rt_wrapFunction0(ju_LinkedList$SequentialListIterator_hasPrevious), "$add3", $rt_wrapFunction1(ju_LinkedList$SequentialListIterator_add)],
jur_IntHash, 0, jl_Object, [], 0, 0, 0, 0,
jl_NegativeArraySizeException, "NegativeArraySizeException", 7, jl_RuntimeException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_NegativeArraySizeException__init_)],
jur_ReluctantAltQuantifierSet, "ReluctantAltQuantifierSet", 3, jur_AltQuantifierSet, [], 0, 0, 0, ["$_init_31", $rt_wrapFunction3(jur_ReluctantAltQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_ReluctantAltQuantifierSet_matches)],
jur_AbstractCharClass$LazyJavaWhitespace, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaWhitespace__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaWhitespace_computeValue)],
jur_Matcher$1, "Matcher$1", 3, jl_Object, [], 0, 0, 0, ["$_init_91", $rt_wrapFunction2(jur_Matcher$1__init_), "$toString", $rt_wrapFunction0(jur_Matcher$1_toString)],
jl_NumberFormatException, "NumberFormatException", 7, jl_IllegalArgumentException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_NumberFormatException__init_1), "$_init_1", $rt_wrapFunction1(jl_NumberFormatException__init_)],
s_EntityInfo, "EntityInfo", 0, jl_Record, [], 17, 0, 0, ["$_init_5", function(var_1, var_2, var_3, var_4, var_5, var_6) { s_EntityInfo__init_(this, var_1, var_2, var_3, var_4, var_5, var_6); }, "$toString", $rt_wrapFunction0(s_EntityInfo_toString), "$entity", $rt_wrapFunction0(s_EntityInfo_entity), "$x0", $rt_wrapFunction0(s_EntityInfo_x), "$y0", $rt_wrapFunction0(s_EntityInfo_y), "$direction", $rt_wrapFunction0(s_EntityInfo_direction), "$animationFrame", $rt_wrapFunction0(s_EntityInfo_animationFrame)],
md_WorldBounds, 0, jl_Record, [], 17, 0, 0, ["$_init_8", $rt_wrapFunction2(md_WorldBounds__init_), "$width", $rt_wrapFunction0(md_WorldBounds_width), "$height", $rt_wrapFunction0(md_WorldBounds_height)],
jur_IntArrHash, 0, jl_Object, [], 0, 0, 0, 0,
jnci_UTF16Decoder, 0, jnci_BufferedDecoder, [], 1, 0, 0, ["$_init_33", $rt_wrapFunction3(jnci_UTF16Decoder__init_), "$arrayDecode", function(var_1, var_2, var_3, var_4, var_5, var_6, var_7) { return jnci_UTF16Decoder_arrayDecode(this, var_1, var_2, var_3, var_4, var_5, var_6, var_7); }],
jur_AbstractCharClass$LazyJavaMirrored, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaMirrored__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaMirrored_computeValue)],
WebMain$main$lambda$_2_0, 0, jl_Object, [jl_Runnable], 1, 0, 0, ["$_init_", $rt_wrapFunction0(WebMain$main$lambda$_2_0__init_), "$run", $rt_wrapFunction0(WebMain$main$lambda$_2_0_run)],
jur_AbstractCharClass$LazyJavaISOControl, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaISOControl__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaISOControl_computeValue)],
jl_IllegalStateException, "IllegalStateException", 7, jl_RuntimeException, [], 1, 0, 0, ["$_init_", $rt_wrapFunction0(jl_IllegalStateException__init_2), "$_init_1", $rt_wrapFunction1(jl_IllegalStateException__init_1)],
jur_HighSurrogateCharSet, "HighSurrogateCharSet", 3, jur_JointSet, [], 0, 0, 0, ["$_init_64", $rt_wrapFunction1(jur_HighSurrogateCharSet__init_), "$setNext", $rt_wrapFunction1(jur_HighSurrogateCharSet_setNext), "$matches", $rt_wrapFunction3(jur_HighSurrogateCharSet_matches), "$find", $rt_wrapFunction3(jur_HighSurrogateCharSet_find), "$findBack", $rt_wrapFunction4(jur_HighSurrogateCharSet_findBack), "$getName", $rt_wrapFunction0(jur_HighSurrogateCharSet_getName), "$first", $rt_wrapFunction1(jur_HighSurrogateCharSet_first),
"$hasConsumed", $rt_wrapFunction1(jur_HighSurrogateCharSet_hasConsumed)],
jur_ReluctantCompositeQuantifierSet, "ReluctantCompositeQuantifierSet", 3, jur_CompositeQuantifierSet, [], 0, 0, 0, ["$_init_67", $rt_wrapFunction4(jur_ReluctantCompositeQuantifierSet__init_), "$matches", $rt_wrapFunction3(jur_ReluctantCompositeQuantifierSet_matches)],
jn_ByteBuffer, 0, jn_Buffer, [jl_Comparable], 1025, 0, 0, ["$_init_", $rt_wrapFunction0(jn_ByteBuffer__init_), "$get1", $rt_wrapFunction3(jn_ByteBuffer_get), "$array", $rt_wrapFunction0(jn_ByteBuffer_array), "$flip1", $rt_wrapFunction0(jn_ByteBuffer_flip), "$position", $rt_wrapFunction1(jn_ByteBuffer_position)],
jur_SOLSet, "SOLSet", 3, jur_AbstractSet, [], 16, 0, 0, ["$_init_", $rt_wrapFunction0(jur_SOLSet__init_), "$matches", $rt_wrapFunction3(jur_SOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_SOLSet_hasConsumed), "$getName", $rt_wrapFunction0(jur_SOLSet_getName)],
m_AlienFormationsLibrary$1, 0, jl_Object, [], 32768, 0, m_AlienFormationsLibrary$1_$callClinit, 0,
v_WebGameView, 0, jl_Object, [va_ViewForController], 1, 0, 0, ["$setupInputs", $rt_wrapFunction1(v_WebGameView_setupInputs), "$refresh", $rt_wrapFunction1(v_WebGameView_refresh)],
v_WebEntityPainter, 0, jl_Object, [], 0, 0, 0, 0,
jur_AbstractCharClass$LazyJavaIdentifierIgnorable, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaIdentifierIgnorable_computeValue)],
jur_UMultiLineEOLSet, "UMultiLineEOLSet", 3, jur_AbstractSet, [], 0, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_UMultiLineEOLSet__init_), "$matches", $rt_wrapFunction3(jur_UMultiLineEOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_UMultiLineEOLSet_hasConsumed), "$getName", $rt_wrapFunction0(jur_UMultiLineEOLSet_getName)],
jn_ByteBufferJsImpl, 0, jn_ByteBuffer, [jn_ArrayBufferViewProvider], 0, 0, 0, ["$_init_100", function(var_1, var_2, var_3, var_4, var_5) { jn_ByteBufferJsImpl__init_(this, var_1, var_2, var_3, var_4, var_5); }, "$arrayImpl", $rt_wrapFunction0(jn_ByteBufferJsImpl_arrayImpl), "$capacityImpl", $rt_wrapFunction0(jn_ByteBufferJsImpl_capacityImpl), "$getImpl0", $rt_wrapFunction4(jn_ByteBufferJsImpl_getImpl), "$compact0", $rt_wrapFunction0(jn_ByteBufferJsImpl_compact)],
jnc_CoderResult, 0, jl_Object, [], 1, 0, jnc_CoderResult_$callClinit, ["$_init_104", $rt_wrapFunction2(jnc_CoderResult__init_0), "$isUnderflow", $rt_wrapFunction0(jnc_CoderResult_isUnderflow), "$isOverflow", $rt_wrapFunction0(jnc_CoderResult_isOverflow), "$isError", $rt_wrapFunction0(jnc_CoderResult_isError), "$isMalformed", $rt_wrapFunction0(jnc_CoderResult_isMalformed), "$isUnmappable", $rt_wrapFunction0(jnc_CoderResult_isUnmappable), "$length", $rt_wrapFunction0(jnc_CoderResult_length)],
otcit_DoubleAnalyzer, 0, jl_Object, [], 17, 0, otcit_DoubleAnalyzer_$callClinit, 0,
jur_EOLSet, "EOLSet", 3, jur_AbstractSet, [], 16, 0, 0, ["$_init_0", $rt_wrapFunction1(jur_EOLSet__init_), "$matches", $rt_wrapFunction3(jur_EOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_EOLSet_hasConsumed), "$getName", $rt_wrapFunction0(jur_EOLSet_getName)],
otr_StringInfo, 0, otrr_ReflectionInfo, [], 17, 0, 0, 0,
jur_Lexer, 0, jl_Object, [], 0, 0, 0, ["$_init_51", $rt_wrapFunction2(jur_Lexer__init_), "$peek", $rt_wrapFunction0(jur_Lexer_peek), "$setMode", $rt_wrapFunction1(jur_Lexer_setMode), "$restoreFlags", $rt_wrapFunction1(jur_Lexer_restoreFlags), "$peekSpecial", $rt_wrapFunction0(jur_Lexer_peekSpecial), "$isSpecial", $rt_wrapFunction0(jur_Lexer_isSpecial), "$isNextSpecial", $rt_wrapFunction0(jur_Lexer_isNextSpecial), "$next0", $rt_wrapFunction0(jur_Lexer_next), "$nextSpecial", $rt_wrapFunction0(jur_Lexer_nextSpecial),
"$lookAhead", $rt_wrapFunction0(jur_Lexer_lookAhead), "$back", $rt_wrapFunction0(jur_Lexer_back), "$toString", $rt_wrapFunction0(jur_Lexer_toString), "$isEmpty", $rt_wrapFunction0(jur_Lexer_isEmpty), "$isLetter", $rt_wrapFunction0(jur_Lexer_isLetter0), "$isHighSurrogate0", $rt_wrapFunction0(jur_Lexer_isHighSurrogate0), "$isLowSurrogate0", $rt_wrapFunction0(jur_Lexer_isLowSurrogate0), "$getIndex", $rt_wrapFunction0(jur_Lexer_getIndex)],
jur_AbstractCharClass$LazySpecialsBlock, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazySpecialsBlock__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazySpecialsBlock_computeValue)],
jur_AbstractCharClass$LazyNonSpace, 0, jur_AbstractCharClass$LazySpace, [], 0, 0, 0, ["$_init_", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonSpace__init_), "$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonSpace_computeValue)],
otji_JSWrapper$Helper$_clinit_$lambda$_3_1, 0, jl_Object, [otji_JSWrapper$Helper$FinalizationRegistryConsumer], 1, 0, 0, ["$_init_", $rt_wrapFunction0(otji_JSWrapper$Helper$_clinit_$lambda$_3_1__init_), "$accept", $rt_wrapFunction1(otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept)],
otji_JSWrapper$Helper$_clinit_$lambda$_3_0, 0, jl_Object, [otji_JSWrapper$Helper$FinalizationRegistryConsumer], 1, 0, 0, ["$_init_", $rt_wrapFunction0(otji_JSWrapper$Helper$_clinit_$lambda$_3_0__init_), "$accept", $rt_wrapFunction1(otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept)],
ju_Collections, 0, jl_Object, [], 17, 0, ju_Collections_$callClinit, 0]);
$rt_enumConstantsMetadata([
    m_AlienFormationsLibrary$Direction, () => [m_AlienFormationsLibrary$Direction_D, m_AlienFormationsLibrary$Direction_U, m_AlienFormationsLibrary$Direction_L, m_AlienFormationsLibrary$Direction_R, m_AlienFormationsLibrary$Direction_DR, m_AlienFormationsLibrary$Direction_DL, m_AlienFormationsLibrary$Direction_UR, m_AlienFormationsLibrary$Direction_UL, m_AlienFormationsLibrary$Direction_S], s_Entities, () => [s_Entities_PLAYER, s_Entities_CAPTURED_PLAYER, s_Entities_BOSS_GALAGA, s_Entities_BOSS_GALAGA_ONE_SHOT,
    s_Entities_GOEI, s_Entities_ZAKO, s_Entities_PLAYER_SHOT, s_Entities_ENEMY_SHOT, s_Entities_ALIEN_SHOT], s_GameState, () => [s_GameState_INITIAL_SCREEN, s_GameState_COIN_INSERTED, s_GameState_LOADING_FIRST_STAGE, s_GameState_PLAYING, s_GameState_LIFE_LOST, s_GameState_LOADING_NOT_FIRST_STAGE, s_GameState_GAME_OVER], s_RotationDirection, () => [s_RotationDirection_U, s_RotationDirection_UUUR, s_RotationDirection_UUR, s_RotationDirection_UR, s_RotationDirection_URR, s_RotationDirection_URRR, s_RotationDirection_R,
    s_RotationDirection_DRRR, s_RotationDirection_DRR, s_RotationDirection_DR, s_RotationDirection_DDR, s_RotationDirection_DDDR, s_RotationDirection_D, s_RotationDirection_DDDL, s_RotationDirection_DDL, s_RotationDirection_DL, s_RotationDirection_DLL, s_RotationDirection_DLLL, s_RotationDirection_L, s_RotationDirection_ULLL, s_RotationDirection_ULL, s_RotationDirection_UL, s_RotationDirection_UUL, s_RotationDirection_UUUL]]);
let $rt_charArrayCls = $rt_arraycls($rt_charcls),
$rt_byteArrayCls = $rt_arraycls($rt_bytecls),
$rt_shortArrayCls = $rt_arraycls($rt_shortcls),
$rt_intArrayCls = $rt_arraycls($rt_intcls),
$rt_longArrayCls = $rt_arraycls($rt_longcls);
$rt_stringPool(["String is null", "String is empty", "String contains invalid digits: ", "String contains digits out of radix ", ": ", "The value is too big for int type: ", "The value is too big for integer type", "Illegal radix: ", "JointSet", "web/js/sprites/sprites.png", "web/js/sprites/initial_screen_sprites.png", "web/js/sprites/coin_inserted_screen.png", "web/js/sprites/numbers.png", "web/js/sprites/loading_screen_sprites.png", "Failed to load image: ", "Some images failed to load. Attempting to start game anyway.",
"_U_1", "_D_1", "PLAYER", "COIN_INSERTED_SCREEN", "1UP", "SCORE", "STAGE", "HIGH_SCORE", "50_100", "80_160", "CREDIT", "GALAGA", "BLUE", "YELLOW", "model not initialized! first call getInstance() ", "CI sequence: ", "\tat ", "Caused by: ", "�", "averageCharsPerByte must be positive. Actual value is ", "maxCharsPerByte must be positive. Actual value is ", "newAction must be non-null", "CI back reference: ", "UCI back reference: ", "BIG_ENDIAN", "LITTLE_ENDIAN", "<DotAllQuant>", "fSet", "BehindFSet", " ", "^ ",
"range:", "<GroupQuant>", "null", "false", "true", "New position ", " is outside of range [0;", "", "Lower", "Upper", "ASCII", "Alpha", "Digit", "Alnum", "Punct", "Graph", "Print", "Blank", "Cntrl", "XDigit", "javaLowerCase", "javaUpperCase", "javaWhitespace", "javaMirrored", "javaDefined", "javaDigit", "javaIdentifierIgnorable", "javaISOControl", "javaJavaIdentifierPart", "javaJavaIdentifierStart", "javaLetter", "javaLetterOrDigit", "javaSpaceChar", "javaTitleCase", "javaUnicodeIdentifierPart", "javaUnicodeIdentifierStart",
"Space", "w", "W", "s", "S", "d", "D", "BasicLatin", "Latin-1Supplement", "LatinExtended-A", "LatinExtended-B", "IPAExtensions", "SpacingModifierLetters", "CombiningDiacriticalMarks", "Greek", "Cyrillic", "CyrillicSupplement", "Armenian", "Hebrew", "Arabic", "Syriac", "ArabicSupplement", "Thaana", "Devanagari", "Bengali", "Gurmukhi", "Gujarati", "Oriya", "Tamil", "Telugu", "Kannada", "Malayalam", "Sinhala", "Thai", "Lao", "Tibetan", "Myanmar", "Georgian", "HangulJamo", "Ethiopic", "EthiopicSupplement", "Cherokee",
"UnifiedCanadianAboriginalSyllabics", "Ogham", "Runic", "Tagalog", "Hanunoo", "Buhid", "Tagbanwa", "Khmer", "Mongolian", "Limbu", "TaiLe", "NewTaiLue", "KhmerSymbols", "Buginese", "PhoneticExtensions", "PhoneticExtensionsSupplement", "CombiningDiacriticalMarksSupplement", "LatinExtendedAdditional", "GreekExtended", "GeneralPunctuation", "SuperscriptsandSubscripts", "CurrencySymbols", "CombiningMarksforSymbols", "LetterlikeSymbols", "NumberForms", "Arrows", "MathematicalOperators", "MiscellaneousTechnical", "ControlPictures",
"OpticalCharacterRecognition", "EnclosedAlphanumerics", "BoxDrawing", "BlockElements", "GeometricShapes", "MiscellaneousSymbols", "Dingbats", "MiscellaneousMathematicalSymbols-A", "SupplementalArrows-A", "BraillePatterns", "SupplementalArrows-B", "MiscellaneousMathematicalSymbols-B", "SupplementalMathematicalOperators", "MiscellaneousSymbolsandArrows", "Glagolitic", "Coptic", "GeorgianSupplement", "Tifinagh", "EthiopicExtended", "SupplementalPunctuation", "CJKRadicalsSupplement", "KangxiRadicals", "IdeographicDescriptionCharacters",
"CJKSymbolsandPunctuation", "Hiragana", "Katakana", "Bopomofo", "HangulCompatibilityJamo", "Kanbun", "BopomofoExtended", "CJKStrokes", "KatakanaPhoneticExtensions", "EnclosedCJKLettersandMonths", "CJKCompatibility", "CJKUnifiedIdeographsExtensionA", "YijingHexagramSymbols", "CJKUnifiedIdeographs", "YiSyllables", "YiRadicals", "ModifierToneLetters", "SylotiNagri", "HangulSyllables", "HighSurrogates", "HighPrivateUseSurrogates", "LowSurrogates", "PrivateUseArea", "CJKCompatibilityIdeographs", "AlphabeticPresentationForms",
"ArabicPresentationForms-A", "VariationSelectors", "VerticalForms", "CombiningHalfMarks", "CJKCompatibilityForms", "SmallFormVariants", "ArabicPresentationForms-B", "HalfwidthandFullwidthForms", "all", "Specials", "Cn", "IsL", "Lu", "Ll", "Lt", "Lm", "Lo", "IsM", "Mn", "Me", "Mc", "N", "Nd", "Nl", "No", "IsZ", "Zs", "Zl", "Zp", "IsC", "Cc", "Cf", "Co", "Cs", "IsP", "Pd", "Ps", "Pe", "Pc", "Po", "IsS", "Sm", "Sc", "Sk", "So", "Pi", "Pf", "decomposed char:", "AheadFSet", "NonCapJointSet", "PosLookaheadJointSet",
"NegLookaheadJointSet", "0", "<Quant>", "charsetName is null", "PosBehindJointSet", "sequence: ", "US-ASCII", "UCI range:", "\n", "IGNORE", "REPLACE", "REPORT", "NegBehindJointSet", "back reference: ", "<DotQuant>", "interface ", "class ", "[L", ".", "CI ", "UTF-16", "UTF-16BE", "UTF-16LE", "Class does not represent enum", "Enum ", " does not have the ", " constant", "U", "L", "R", "DR", "DL", "UR", "UL", "<EOL>", "UCI ", "ISO-8859-1", "AtomicFSet", "[]", "(this Collection)", ", ", "ArrowRight", "ArrowLeft",
"posFSet", "UTF-8", "<MultiLine $>", "CAPTURED_PLAYER", "BOSS_GALAGA", "BOSS_GALAGA_ONE_SHOT", "GOEI", "ZAKO", "PLAYER_SHOT", "ENEMY_SHOT", "ALIEN_SHOT", "KeyC", "KeyN", "Patter is null", "\\Q", "\\E", "\\\\E\\Q", "StagePaths[", "formationsList=", "]", "FormationPaths[", "alienList=", "UCI sequence: ", "CompositeRangeSet:  <nonsurrogate> ", " <surrogate> ", "INITIAL_SCREEN", "COIN_INSERTED", "LOADING_FIRST_STAGE", "PLAYING", "LIFE_LOST", "LOADING_NOT_FIRST_STAGE", "GAME_OVER", "FinalSet", "<Empty set>", "UUUR",
"UUR", "URR", "URRR", "DRRR", "DRR", "DDR", "DDDR", "DDDL", "DDL", "DLL", "DLLL", "ULLL", "ULL", "UUL", "UUUL", "Background frame failed to load: ", "web/js/sprites/background-frame-0.png", "web/js/sprites/background-frame-1.png", "web/js/sprites/background-frame-2.png", "web/js/sprites/background-frame-3.png", "EOI", "WHITE", "object", "function", "string", "number", "undefined", "controller not initialized! first call getInstance( view, model)", "^", "PointOfPath[", "x=", ", y=", "PreviousMatch", "NonCapFSet",
"Either src or dest is null", "DotAll", "decomposed Hangul syllable:", "WordBoundary", "model/data/formations.txt", "Resource not found: model/data/formations.txt", "utf-8", "!", "|", "(", "[", "ALIEN", "[{}]", ",", "RIGHT", "LEFT", "check for valid numbers first", "side must be left or right", "EntityInfo[", "entity=", ", x=", ", direction=", ", animationFrame=", ", isToRemove=", "<SOL>", "WebGameView not initialized", "<Unix MultiLine $>", "Name capturing group should start with letter", "Is", "In"]);
jl_String.prototype.toString = function() {
    return $rt_ustr(this);
};
jl_String.prototype.valueOf = jl_String.prototype.toString;
jl_Object.prototype.toString = function() {
    return $rt_ustr(jl_Object_toString(this));
};
jl_Object.prototype.__teavm_class__ = function() {
    return $dbg_class(this);
};
let $rt_export_main = $rt_mainStarter(WebMain_main);
$rt_export_main.javaException = $rt_javaException;
let $rt_jso_marker = Symbol('jsoClass');
(() => {
    let c;
    c = v_WebSpriteLibrary$1.prototype;
    c.handleEvent = $rt_callWithReceiver(v_WebSpriteLibrary$1_handleEvent$exported$0);
    c = v_WebSpriteLibrary$2.prototype;
    c.handleEvent = $rt_callWithReceiver(v_WebSpriteLibrary$2_handleEvent$exported$0);
    c = WebMain$onImagesLoaded$lambda$_3_0.prototype;
    c.onAnimationFrame = $rt_callWithReceiver(WebMain$onImagesLoaded$lambda$_3_0_onAnimationFrame$exported$0);
    c = v_WebGameView$2.prototype;
    c.handleEvent = $rt_callWithReceiver(v_WebGameView$2_handleEvent$exported$0);
    c = v_WebGameView$1.prototype;
    c.handleEvent = $rt_callWithReceiver(v_WebGameView$1_handleEvent$exported$0);
    c = v_WebBackgroundPainter$2.prototype;
    c.handleEvent = $rt_callWithReceiver(v_WebBackgroundPainter$2_handleEvent$exported$0);
    c = v_WebBackgroundPainter$1.prototype;
    c.handleEvent = $rt_callWithReceiver(v_WebBackgroundPainter$1_handleEvent$exported$0);
    c = WebMain$loop$lambda$_4_0.prototype;
    c.onAnimationFrame = $rt_callWithReceiver(WebMain$loop$lambda$_4_0_onAnimationFrame$exported$0);
    c = otji_JSWrapper$Helper$_clinit_$lambda$_3_1.prototype;
    c.accept = $rt_callWithReceiver(otji_JSWrapper$Helper$_clinit_$lambda$_3_1_accept$exported$0);
    c = otji_JSWrapper$Helper$_clinit_$lambda$_3_0.prototype;
    c.accept = $rt_callWithReceiver(otji_JSWrapper$Helper$_clinit_$lambda$_3_0_accept$exported$0);
})();
$rt_exports.main = $rt_export_main;
}));

//# sourceMappingURL=galaga.js.map
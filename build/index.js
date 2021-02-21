'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/** @license React v17.0.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var react_production_min = createCommonjsModule(function (module, exports) {
var n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy");}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return "function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A;}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState");};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A;}var F=E.prototype=new D;F.constructor=E;objectAssign(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f;}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return {$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return {$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return "object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0;}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d);}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b);},function(b){0===a._status&&(a._status=2,a._result=b);});}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:objectAssign};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments);},c);},count:function(a){var b=0;P(a,function(){b++;});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=objectAssign({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g;}return {$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return {current:null}};exports.forwardRef=function(a){return {$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return {$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return {$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.1";
});

/** @license React v17.0.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var react_development = createCommonjsModule(function (module, exports) {

if (process.env.NODE_ENV !== "production") {
  (function() {

var _assign = objectAssign;

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.1';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  symbolFor('react.scope');
  symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}
});

var react = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = react_production_min;
} else {
  module.exports = react_development;
}
});

/** @license React v17.0.1
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var reactJsxRuntime_production_min = createCommonjsModule(function (module, exports) {
var g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment");}var m=react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;
});

/** @license React v17.0.1
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var reactJsxRuntime_development = createCommonjsModule(function (module, exports) {

if (process.env.NODE_ENV !== "production") {
  (function() {

var React = react;
var _assign = objectAssign;

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  symbolFor('react.scope');
  symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}
});

var jsxRuntime = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactJsxRuntime_production_min;
} else {
  module.exports = reactJsxRuntime_development;
}
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*-------------variables---------*/\n:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #6c757d;\n  --gray-dark: #343a40;\n  --primary: #5265cc;\n  --secondary: #6c757d;\n  --success: #15bd76;\n  --info: #8293b0;\n  --warning: #ff9900;\n  --danger: #e53e3e;\n  --light: #d9dfe7;\n  --dark: #080b1e;\n  --default: #293241;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block; }\n\nbody {\n  margin: 0;\n  font-family: Arial, sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.2;\n  color: #212529;\n  text-align: left;\n  background-color: #e6e9ef; }\n\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\n  outline: 0 !important; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n  text-decoration-skip-ink: none; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: 700; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -.25em; }\n\nsup {\n  top: -.5em; }\n\na {\n  color: #5265cc;\n  text-decoration: none;\n  background-color: transparent; }\n  a:hover {\n    color: #3041a2;\n    text-decoration: underline; }\n\na:not([href]):not([class]) {\n  color: inherit;\n  text-decoration: none; }\n  a:not([href]):not([class]):hover {\n    color: inherit;\n    text-decoration: none; }\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 1em; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\nsvg {\n  overflow: hidden;\n  vertical-align: middle; }\n\ntable {\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: inherit;\n  text-align: -webkit-match-parent; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: 0.5rem; }\n\nbutton {\n  border-radius: 0; }\n\nbutton:focus:not(:focus-visible) {\n  outline: 0; }\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton,\ninput {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\n[role=\"button\"] {\n  cursor: pointer; }\n\nselect {\n  word-wrap: normal; }\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\nbutton:not(:disabled),\n[type=\"button\"]:not(:disabled),\n[type=\"reset\"]:not(:disabled),\n[type=\"submit\"]:not(:disabled) {\n  cursor: pointer; }\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\n\nprogress {\n  vertical-align: baseline; }\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput {\n  display: inline-block; }\n\nsummary {\n  display: list-item;\n  cursor: pointer; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none !important; }\n\n.align-baseline {\n  vertical-align: baseline !important; }\n\n.align-top {\n  vertical-align: top !important; }\n\n.align-middle {\n  vertical-align: middle !important; }\n\n.align-bottom {\n  vertical-align: bottom !important; }\n\n.align-text-bottom {\n  vertical-align: text-bottom !important; }\n\n.align-text-top {\n  vertical-align: text-top !important; }\n\n.bg-primary {\n  background-color: #5265cc !important; }\n\na.bg-primary:hover, a.bg-primary:focus,\nbutton.bg-primary:hover,\nbutton.bg-primary:focus {\n  background-color: #3649b5 !important; }\n\n.bg-secondary {\n  background-color: #6c757d !important; }\n\na.bg-secondary:hover, a.bg-secondary:focus,\nbutton.bg-secondary:hover,\nbutton.bg-secondary:focus {\n  background-color: #545b62 !important; }\n\n.bg-success {\n  background-color: #15bd76 !important; }\n\na.bg-success:hover, a.bg-success:focus,\nbutton.bg-success:hover,\nbutton.bg-success:focus {\n  background-color: #108f59 !important; }\n\n.bg-info {\n  background-color: #8293b0 !important; }\n\na.bg-info:hover, a.bg-info:focus,\nbutton.bg-info:hover,\nbutton.bg-info:focus {\n  background-color: #63789c !important; }\n\n.bg-warning {\n  background-color: #ff9900 !important; }\n\na.bg-warning:hover, a.bg-warning:focus,\nbutton.bg-warning:hover,\nbutton.bg-warning:focus {\n  background-color: #cc7a00 !important; }\n\n.bg-danger {\n  background-color: #e53e3e !important; }\n\na.bg-danger:hover, a.bg-danger:focus,\nbutton.bg-danger:hover,\nbutton.bg-danger:focus {\n  background-color: #d41c1c !important; }\n\n.bg-light {\n  background-color: #d9dfe7 !important; }\n\na.bg-light:hover, a.bg-light:focus,\nbutton.bg-light:hover,\nbutton.bg-light:focus {\n  background-color: #bac5d3 !important; }\n\n.bg-dark {\n  background-color: #080b1e !important; }\n\na.bg-dark:hover, a.bg-dark:focus,\nbutton.bg-dark:hover,\nbutton.bg-dark:focus {\n  background-color: black !important; }\n\n.bg-default {\n  background-color: #293241 !important; }\n\na.bg-default:hover, a.bg-default:focus,\nbutton.bg-default:hover,\nbutton.bg-default:focus {\n  background-color: #151a22 !important; }\n\n.bg-white {\n  background-color: #fff !important; }\n\n.bg-transparent {\n  background-color: transparent !important; }\n\n.border {\n  border: 1px solid #d9dfe7 !important; }\n\n.border-top {\n  border-top: 1px solid #d9dfe7 !important; }\n\n.border-right {\n  border-right: 1px solid #d9dfe7 !important; }\n\n.border-bottom {\n  border-bottom: 1px solid #d9dfe7 !important; }\n\n.border-left {\n  border-left: 1px solid #d9dfe7 !important; }\n\n.border-0 {\n  border: 0 !important; }\n\n.border-top-0 {\n  border-top: 0 !important; }\n\n.border-right-0 {\n  border-right: 0 !important; }\n\n.border-bottom-0 {\n  border-bottom: 0 !important; }\n\n.border-left-0 {\n  border-left: 0 !important; }\n\n.border-primary {\n  border-color: #5265cc !important; }\n\n.border-secondary {\n  border-color: #6c757d !important; }\n\n.border-success {\n  border-color: #15bd76 !important; }\n\n.border-info {\n  border-color: #8293b0 !important; }\n\n.border-warning {\n  border-color: #ff9900 !important; }\n\n.border-danger {\n  border-color: #e53e3e !important; }\n\n.border-light {\n  border-color: #d9dfe7 !important; }\n\n.border-dark {\n  border-color: #080b1e !important; }\n\n.border-default {\n  border-color: #293241 !important; }\n\n.border-white {\n  border-color: #fff !important; }\n\n.rounded-sm {\n  border-radius: 0.2rem !important; }\n\n.rounded {\n  border-radius: 0.25rem !important; }\n\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important; }\n\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important; }\n\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n\n.rounded-lg {\n  border-radius: 0.3rem !important; }\n\n.rounded-circle {\n  border-radius: 50% !important; }\n\n.rounded-pill {\n  border-radius: 1.875rem !important; }\n\n.rounded-0 {\n  border-radius: 0 !important; }\n\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\"; }\n\n.d-none {\n  display: none !important; }\n\n.d-inline {\n  display: inline !important; }\n\n.d-inline-block {\n  display: inline-block !important; }\n\n.d-block {\n  display: block !important; }\n\n.d-table {\n  display: table !important; }\n\n.d-table-row {\n  display: table-row !important; }\n\n.d-table-cell {\n  display: table-cell !important; }\n\n.d-flex {\n  display: flex !important; }\n\n.d-inline-flex {\n  display: inline-flex !important; }\n\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: inline-flex !important; } }\n\n@media print {\n  .d-print-none {\n    display: none !important; }\n  .d-print-inline {\n    display: inline !important; }\n  .d-print-inline-block {\n    display: inline-block !important; }\n  .d-print-block {\n    display: block !important; }\n  .d-print-table {\n    display: table !important; }\n  .d-print-table-row {\n    display: table-row !important; }\n  .d-print-table-cell {\n    display: table-cell !important; }\n  .d-print-flex {\n    display: flex !important; }\n  .d-print-inline-flex {\n    display: inline-flex !important; } }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive::before {\n    display: block;\n    content: \"\"; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0; }\n\n.embed-responsive-21by9::before {\n  padding-top: 42.85714%; }\n\n.embed-responsive-16by9::before {\n  padding-top: 56.25%; }\n\n.embed-responsive-4by3::before {\n  padding-top: 75%; }\n\n.embed-responsive-1by1::before {\n  padding-top: 100%; }\n\n.flex-row {\n  flex-direction: row !important; }\n\n.flex-column {\n  flex-direction: column !important; }\n\n.flex-row-reverse {\n  flex-direction: row-reverse !important; }\n\n.flex-column-reverse {\n  flex-direction: column-reverse !important; }\n\n.flex-wrap {\n  flex-wrap: wrap !important; }\n\n.flex-nowrap {\n  flex-wrap: nowrap !important; }\n\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important; }\n\n.flex-fill {\n  flex: 1 1 auto !important; }\n\n.flex-grow-0 {\n  flex-grow: 0 !important; }\n\n.flex-grow-1 {\n  flex-grow: 1 !important; }\n\n.flex-shrink-0 {\n  flex-shrink: 0 !important; }\n\n.flex-shrink-1 {\n  flex-shrink: 1 !important; }\n\n.justify-content-start {\n  justify-content: flex-start !important; }\n\n.justify-content-end {\n  justify-content: flex-end !important; }\n\n.justify-content-center {\n  justify-content: center !important; }\n\n.justify-content-between {\n  justify-content: space-between !important; }\n\n.justify-content-around {\n  justify-content: space-around !important; }\n\n.align-items-start {\n  align-items: flex-start !important; }\n\n.align-items-end {\n  align-items: flex-end !important; }\n\n.align-items-center {\n  align-items: center !important; }\n\n.align-items-baseline {\n  align-items: baseline !important; }\n\n.align-items-stretch {\n  align-items: stretch !important; }\n\n.align-content-start {\n  align-content: flex-start !important; }\n\n.align-content-end {\n  align-content: flex-end !important; }\n\n.align-content-center {\n  align-content: center !important; }\n\n.align-content-between {\n  align-content: space-between !important; }\n\n.align-content-around {\n  align-content: space-around !important; }\n\n.align-content-stretch {\n  align-content: stretch !important; }\n\n.align-self-auto {\n  align-self: auto !important; }\n\n.align-self-start {\n  align-self: flex-start !important; }\n\n.align-self-end {\n  align-self: flex-end !important; }\n\n.align-self-center {\n  align-self: center !important; }\n\n.align-self-baseline {\n  align-self: baseline !important; }\n\n.align-self-stretch {\n  align-self: stretch !important; }\n\n@media (min-width: 576px) {\n  .flex-sm-row {\n    flex-direction: row !important; }\n  .flex-sm-column {\n    flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-sm-fill {\n    flex: 1 1 auto !important; }\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-sm-start {\n    justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    justify-content: center !important; }\n  .justify-content-sm-between {\n    justify-content: space-between !important; }\n  .justify-content-sm-around {\n    justify-content: space-around !important; }\n  .align-items-sm-start {\n    align-items: flex-start !important; }\n  .align-items-sm-end {\n    align-items: flex-end !important; }\n  .align-items-sm-center {\n    align-items: center !important; }\n  .align-items-sm-baseline {\n    align-items: baseline !important; }\n  .align-items-sm-stretch {\n    align-items: stretch !important; }\n  .align-content-sm-start {\n    align-content: flex-start !important; }\n  .align-content-sm-end {\n    align-content: flex-end !important; }\n  .align-content-sm-center {\n    align-content: center !important; }\n  .align-content-sm-between {\n    align-content: space-between !important; }\n  .align-content-sm-around {\n    align-content: space-around !important; }\n  .align-content-sm-stretch {\n    align-content: stretch !important; }\n  .align-self-sm-auto {\n    align-self: auto !important; }\n  .align-self-sm-start {\n    align-self: flex-start !important; }\n  .align-self-sm-end {\n    align-self: flex-end !important; }\n  .align-self-sm-center {\n    align-self: center !important; }\n  .align-self-sm-baseline {\n    align-self: baseline !important; }\n  .align-self-sm-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 768px) {\n  .flex-md-row {\n    flex-direction: row !important; }\n  .flex-md-column {\n    flex-direction: column !important; }\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-md-fill {\n    flex: 1 1 auto !important; }\n  .flex-md-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-md-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-md-start {\n    justify-content: flex-start !important; }\n  .justify-content-md-end {\n    justify-content: flex-end !important; }\n  .justify-content-md-center {\n    justify-content: center !important; }\n  .justify-content-md-between {\n    justify-content: space-between !important; }\n  .justify-content-md-around {\n    justify-content: space-around !important; }\n  .align-items-md-start {\n    align-items: flex-start !important; }\n  .align-items-md-end {\n    align-items: flex-end !important; }\n  .align-items-md-center {\n    align-items: center !important; }\n  .align-items-md-baseline {\n    align-items: baseline !important; }\n  .align-items-md-stretch {\n    align-items: stretch !important; }\n  .align-content-md-start {\n    align-content: flex-start !important; }\n  .align-content-md-end {\n    align-content: flex-end !important; }\n  .align-content-md-center {\n    align-content: center !important; }\n  .align-content-md-between {\n    align-content: space-between !important; }\n  .align-content-md-around {\n    align-content: space-around !important; }\n  .align-content-md-stretch {\n    align-content: stretch !important; }\n  .align-self-md-auto {\n    align-self: auto !important; }\n  .align-self-md-start {\n    align-self: flex-start !important; }\n  .align-self-md-end {\n    align-self: flex-end !important; }\n  .align-self-md-center {\n    align-self: center !important; }\n  .align-self-md-baseline {\n    align-self: baseline !important; }\n  .align-self-md-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 992px) {\n  .flex-lg-row {\n    flex-direction: row !important; }\n  .flex-lg-column {\n    flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-lg-fill {\n    flex: 1 1 auto !important; }\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-lg-start {\n    justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    justify-content: center !important; }\n  .justify-content-lg-between {\n    justify-content: space-between !important; }\n  .justify-content-lg-around {\n    justify-content: space-around !important; }\n  .align-items-lg-start {\n    align-items: flex-start !important; }\n  .align-items-lg-end {\n    align-items: flex-end !important; }\n  .align-items-lg-center {\n    align-items: center !important; }\n  .align-items-lg-baseline {\n    align-items: baseline !important; }\n  .align-items-lg-stretch {\n    align-items: stretch !important; }\n  .align-content-lg-start {\n    align-content: flex-start !important; }\n  .align-content-lg-end {\n    align-content: flex-end !important; }\n  .align-content-lg-center {\n    align-content: center !important; }\n  .align-content-lg-between {\n    align-content: space-between !important; }\n  .align-content-lg-around {\n    align-content: space-around !important; }\n  .align-content-lg-stretch {\n    align-content: stretch !important; }\n  .align-self-lg-auto {\n    align-self: auto !important; }\n  .align-self-lg-start {\n    align-self: flex-start !important; }\n  .align-self-lg-end {\n    align-self: flex-end !important; }\n  .align-self-lg-center {\n    align-self: center !important; }\n  .align-self-lg-baseline {\n    align-self: baseline !important; }\n  .align-self-lg-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    flex-direction: row !important; }\n  .flex-xl-column {\n    flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .flex-xl-fill {\n    flex: 1 1 auto !important; }\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important; }\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important; }\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important; }\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important; }\n  .justify-content-xl-start {\n    justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    justify-content: center !important; }\n  .justify-content-xl-between {\n    justify-content: space-between !important; }\n  .justify-content-xl-around {\n    justify-content: space-around !important; }\n  .align-items-xl-start {\n    align-items: flex-start !important; }\n  .align-items-xl-end {\n    align-items: flex-end !important; }\n  .align-items-xl-center {\n    align-items: center !important; }\n  .align-items-xl-baseline {\n    align-items: baseline !important; }\n  .align-items-xl-stretch {\n    align-items: stretch !important; }\n  .align-content-xl-start {\n    align-content: flex-start !important; }\n  .align-content-xl-end {\n    align-content: flex-end !important; }\n  .align-content-xl-center {\n    align-content: center !important; }\n  .align-content-xl-between {\n    align-content: space-between !important; }\n  .align-content-xl-around {\n    align-content: space-around !important; }\n  .align-content-xl-stretch {\n    align-content: stretch !important; }\n  .align-self-xl-auto {\n    align-self: auto !important; }\n  .align-self-xl-start {\n    align-self: flex-start !important; }\n  .align-self-xl-end {\n    align-self: flex-end !important; }\n  .align-self-xl-center {\n    align-self: center !important; }\n  .align-self-xl-baseline {\n    align-self: baseline !important; }\n  .align-self-xl-stretch {\n    align-self: stretch !important; } }\n\n.float-left {\n  float: left !important; }\n\n.float-right {\n  float: right !important; }\n\n.float-none {\n  float: none !important; }\n\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important; }\n  .float-sm-right {\n    float: right !important; }\n  .float-sm-none {\n    float: none !important; } }\n\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important; }\n  .float-md-right {\n    float: right !important; }\n  .float-md-none {\n    float: none !important; } }\n\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important; }\n  .float-lg-right {\n    float: right !important; }\n  .float-lg-none {\n    float: none !important; } }\n\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important; }\n  .float-xl-right {\n    float: right !important; }\n  .float-xl-none {\n    float: none !important; } }\n\n.user-select-all {\n  user-select: all !important; }\n\n.user-select-auto {\n  user-select: auto !important; }\n\n.user-select-none {\n  user-select: none !important; }\n\n.overflow-auto {\n  overflow: auto !important; }\n\n.overflow-hidden {\n  overflow: hidden !important; }\n\n.position-static {\n  position: static !important; }\n\n.position-relative {\n  position: relative !important; }\n\n.position-absolute {\n  position: absolute !important; }\n\n.position-fixed {\n  position: fixed !important; }\n\n.position-sticky {\n  position: sticky !important; }\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030; }\n\n@supports (position: sticky) {\n  .sticky-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal; }\n\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important; }\n\n.shadow {\n  box-shadow: 2px 2px 10px rgba(25, 30, 47, 0.1) !important; }\n\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important; }\n\n.shadow-none {\n  box-shadow: none !important; }\n\n.w-25 {\n  width: 25% !important; }\n\n.w-50 {\n  width: 50% !important; }\n\n.w-75 {\n  width: 75% !important; }\n\n.w-100 {\n  width: 100% !important; }\n\n.w-auto {\n  width: auto !important; }\n\n.h-25 {\n  height: 25% !important; }\n\n.h-50 {\n  height: 50% !important; }\n\n.h-75 {\n  height: 75% !important; }\n\n.h-100 {\n  height: 100% !important; }\n\n.h-auto {\n  height: auto !important; }\n\n.mw-100 {\n  max-width: 100% !important; }\n\n.mh-100 {\n  max-height: 100% !important; }\n\n.min-vw-100 {\n  min-width: 100vw !important; }\n\n.min-vh-100 {\n  min-height: 100vh !important; }\n\n.vw-100 {\n  width: 100vw !important; }\n\n.vh-100 {\n  height: 100vh !important; }\n\n.m-0 {\n  margin: 0 !important; }\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important; }\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important; }\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important; }\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important; }\n\n.m-1 {\n  margin: 0.25rem !important; }\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important; }\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important; }\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important; }\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important; }\n\n.m-2 {\n  margin: 0.5rem !important; }\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important; }\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important; }\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important; }\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important; }\n\n.m-3 {\n  margin: 1rem !important; }\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important; }\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important; }\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important; }\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important; }\n\n.m-4 {\n  margin: 1.5rem !important; }\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important; }\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important; }\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important; }\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important; }\n\n.m-5 {\n  margin: 3rem !important; }\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important; }\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important; }\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important; }\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important; }\n\n.p-0 {\n  padding: 0 !important; }\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important; }\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important; }\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important; }\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important; }\n\n.p-1 {\n  padding: 0.25rem !important; }\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important; }\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important; }\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important; }\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important; }\n\n.p-2 {\n  padding: 0.5rem !important; }\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important; }\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important; }\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important; }\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important; }\n\n.p-3 {\n  padding: 1rem !important; }\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important; }\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important; }\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important; }\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important; }\n\n.p-4 {\n  padding: 1.5rem !important; }\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important; }\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important; }\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important; }\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important; }\n\n.p-5 {\n  padding: 3rem !important; }\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important; }\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important; }\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important; }\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important; }\n\n.m-n1 {\n  margin: -0.25rem !important; }\n\n.mt-n1,\n.my-n1 {\n  margin-top: -0.25rem !important; }\n\n.mr-n1,\n.mx-n1 {\n  margin-right: -0.25rem !important; }\n\n.mb-n1,\n.my-n1 {\n  margin-bottom: -0.25rem !important; }\n\n.ml-n1,\n.mx-n1 {\n  margin-left: -0.25rem !important; }\n\n.m-n2 {\n  margin: -0.25rem !important; }\n\n.mt-n2,\n.my-n2 {\n  margin-top: -0.25rem !important; }\n\n.mr-n2,\n.mx-n2 {\n  margin-right: -0.25rem !important; }\n\n.mb-n2,\n.my-n2 {\n  margin-bottom: -0.25rem !important; }\n\n.ml-n2,\n.mx-n2 {\n  margin-left: -0.25rem !important; }\n\n.m-n3 {\n  margin: -0.25rem !important; }\n\n.mt-n3,\n.my-n3 {\n  margin-top: -0.25rem !important; }\n\n.mr-n3,\n.mx-n3 {\n  margin-right: -0.25rem !important; }\n\n.mb-n3,\n.my-n3 {\n  margin-bottom: -0.25rem !important; }\n\n.ml-n3,\n.mx-n3 {\n  margin-left: -0.25rem !important; }\n\n.m-n4 {\n  margin: -0.25rem !important; }\n\n.mt-n4,\n.my-n4 {\n  margin-top: -0.25rem !important; }\n\n.mr-n4,\n.mx-n4 {\n  margin-right: -0.25rem !important; }\n\n.mb-n4,\n.my-n4 {\n  margin-bottom: -0.25rem !important; }\n\n.ml-n4,\n.mx-n4 {\n  margin-left: -0.25rem !important; }\n\n.m-n5 {\n  margin: -0.25rem !important; }\n\n.mt-n5,\n.my-n5 {\n  margin-top: -0.25rem !important; }\n\n.mr-n5,\n.mx-n5 {\n  margin-right: -0.25rem !important; }\n\n.mb-n5,\n.my-n5 {\n  margin-bottom: -0.25rem !important; }\n\n.ml-n5,\n.mx-n5 {\n  margin-left: -0.25rem !important; }\n\n.m-auto {\n  margin: auto !important; }\n\n.mt-auto,\n.my-auto {\n  margin-top: auto !important; }\n\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important; }\n\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important; }\n\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important; }\n\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important; }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important; }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important; }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important; }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important; }\n  .m-sm-1 {\n    margin: 0.25rem !important; }\n  .mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important; }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important; }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important; }\n  .m-sm-2 {\n    margin: 0.5rem !important; }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important; }\n  .mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important; }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important; }\n  .m-sm-3 {\n    margin: 1rem !important; }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important; }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important; }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important; }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important; }\n  .m-sm-4 {\n    margin: 1.5rem !important; }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important; }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important; }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important; }\n  .m-sm-5 {\n    margin: 3rem !important; }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important; }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important; }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important; }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important; }\n  .p-sm-0 {\n    padding: 0 !important; }\n  .pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important; }\n  .pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important; }\n  .pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important; }\n  .pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important; }\n  .p-sm-1 {\n    padding: 0.25rem !important; }\n  .pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important; }\n  .pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important; }\n  .pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important; }\n  .p-sm-2 {\n    padding: 0.5rem !important; }\n  .pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important; }\n  .pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important; }\n  .pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important; }\n  .p-sm-3 {\n    padding: 1rem !important; }\n  .pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important; }\n  .pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important; }\n  .pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important; }\n  .pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important; }\n  .p-sm-4 {\n    padding: 1.5rem !important; }\n  .pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important; }\n  .pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important; }\n  .pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important; }\n  .p-sm-5 {\n    padding: 3rem !important; }\n  .pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important; }\n  .pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important; }\n  .pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important; }\n  .pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important; }\n  .m-sm-n1 {\n    margin: -0.25rem !important; }\n  .mt-sm-n1,\n  .my-sm-n1 {\n    margin-top: -0.25rem !important; }\n  .mr-sm-n1,\n  .mx-sm-n1 {\n    margin-right: -0.25rem !important; }\n  .mb-sm-n1,\n  .my-sm-n1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-sm-n1,\n  .mx-sm-n1 {\n    margin-left: -0.25rem !important; }\n  .m-sm-n2 {\n    margin: -0.25rem !important; }\n  .mt-sm-n2,\n  .my-sm-n2 {\n    margin-top: -0.25rem !important; }\n  .mr-sm-n2,\n  .mx-sm-n2 {\n    margin-right: -0.25rem !important; }\n  .mb-sm-n2,\n  .my-sm-n2 {\n    margin-bottom: -0.25rem !important; }\n  .ml-sm-n2,\n  .mx-sm-n2 {\n    margin-left: -0.25rem !important; }\n  .m-sm-n3 {\n    margin: -0.25rem !important; }\n  .mt-sm-n3,\n  .my-sm-n3 {\n    margin-top: -0.25rem !important; }\n  .mr-sm-n3,\n  .mx-sm-n3 {\n    margin-right: -0.25rem !important; }\n  .mb-sm-n3,\n  .my-sm-n3 {\n    margin-bottom: -0.25rem !important; }\n  .ml-sm-n3,\n  .mx-sm-n3 {\n    margin-left: -0.25rem !important; }\n  .m-sm-n4 {\n    margin: -0.25rem !important; }\n  .mt-sm-n4,\n  .my-sm-n4 {\n    margin-top: -0.25rem !important; }\n  .mr-sm-n4,\n  .mx-sm-n4 {\n    margin-right: -0.25rem !important; }\n  .mb-sm-n4,\n  .my-sm-n4 {\n    margin-bottom: -0.25rem !important; }\n  .ml-sm-n4,\n  .mx-sm-n4 {\n    margin-left: -0.25rem !important; }\n  .m-sm-n5 {\n    margin: -0.25rem !important; }\n  .mt-sm-n5,\n  .my-sm-n5 {\n    margin-top: -0.25rem !important; }\n  .mr-sm-n5,\n  .mx-sm-n5 {\n    margin-right: -0.25rem !important; }\n  .mb-sm-n5,\n  .my-sm-n5 {\n    margin-bottom: -0.25rem !important; }\n  .ml-sm-n5,\n  .mx-sm-n5 {\n    margin-left: -0.25rem !important; }\n  .m-sm-auto {\n    margin: auto !important; }\n  .mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important; }\n  .mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important; }\n  .mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important; }\n  .ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important; }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important; }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important; }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important; }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important; }\n  .m-md-1 {\n    margin: 0.25rem !important; }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important; }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important; }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important; }\n  .m-md-2 {\n    margin: 0.5rem !important; }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important; }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important; }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important; }\n  .m-md-3 {\n    margin: 1rem !important; }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important; }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important; }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important; }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important; }\n  .m-md-4 {\n    margin: 1.5rem !important; }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important; }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important; }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important; }\n  .m-md-5 {\n    margin: 3rem !important; }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important; }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important; }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important; }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important; }\n  .p-md-0 {\n    padding: 0 !important; }\n  .pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important; }\n  .pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important; }\n  .pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important; }\n  .pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important; }\n  .p-md-1 {\n    padding: 0.25rem !important; }\n  .pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important; }\n  .pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important; }\n  .pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important; }\n  .p-md-2 {\n    padding: 0.5rem !important; }\n  .pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important; }\n  .pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important; }\n  .pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important; }\n  .p-md-3 {\n    padding: 1rem !important; }\n  .pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important; }\n  .pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important; }\n  .pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important; }\n  .pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important; }\n  .p-md-4 {\n    padding: 1.5rem !important; }\n  .pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important; }\n  .pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important; }\n  .pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important; }\n  .p-md-5 {\n    padding: 3rem !important; }\n  .pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important; }\n  .pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important; }\n  .pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important; }\n  .pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important; }\n  .m-md-n1 {\n    margin: -0.25rem !important; }\n  .mt-md-n1,\n  .my-md-n1 {\n    margin-top: -0.25rem !important; }\n  .mr-md-n1,\n  .mx-md-n1 {\n    margin-right: -0.25rem !important; }\n  .mb-md-n1,\n  .my-md-n1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-md-n1,\n  .mx-md-n1 {\n    margin-left: -0.25rem !important; }\n  .m-md-n2 {\n    margin: -0.25rem !important; }\n  .mt-md-n2,\n  .my-md-n2 {\n    margin-top: -0.25rem !important; }\n  .mr-md-n2,\n  .mx-md-n2 {\n    margin-right: -0.25rem !important; }\n  .mb-md-n2,\n  .my-md-n2 {\n    margin-bottom: -0.25rem !important; }\n  .ml-md-n2,\n  .mx-md-n2 {\n    margin-left: -0.25rem !important; }\n  .m-md-n3 {\n    margin: -0.25rem !important; }\n  .mt-md-n3,\n  .my-md-n3 {\n    margin-top: -0.25rem !important; }\n  .mr-md-n3,\n  .mx-md-n3 {\n    margin-right: -0.25rem !important; }\n  .mb-md-n3,\n  .my-md-n3 {\n    margin-bottom: -0.25rem !important; }\n  .ml-md-n3,\n  .mx-md-n3 {\n    margin-left: -0.25rem !important; }\n  .m-md-n4 {\n    margin: -0.25rem !important; }\n  .mt-md-n4,\n  .my-md-n4 {\n    margin-top: -0.25rem !important; }\n  .mr-md-n4,\n  .mx-md-n4 {\n    margin-right: -0.25rem !important; }\n  .mb-md-n4,\n  .my-md-n4 {\n    margin-bottom: -0.25rem !important; }\n  .ml-md-n4,\n  .mx-md-n4 {\n    margin-left: -0.25rem !important; }\n  .m-md-n5 {\n    margin: -0.25rem !important; }\n  .mt-md-n5,\n  .my-md-n5 {\n    margin-top: -0.25rem !important; }\n  .mr-md-n5,\n  .mx-md-n5 {\n    margin-right: -0.25rem !important; }\n  .mb-md-n5,\n  .my-md-n5 {\n    margin-bottom: -0.25rem !important; }\n  .ml-md-n5,\n  .mx-md-n5 {\n    margin-left: -0.25rem !important; }\n  .m-md-auto {\n    margin: auto !important; }\n  .mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important; }\n  .mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important; }\n  .mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important; }\n  .ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important; }\n  .mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important; }\n  .mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important; }\n  .mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important; }\n  .ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important; }\n  .m-lg-1 {\n    margin: 0.25rem !important; }\n  .mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important; }\n  .mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important; }\n  .mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important; }\n  .m-lg-2 {\n    margin: 0.5rem !important; }\n  .mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important; }\n  .mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important; }\n  .mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important; }\n  .m-lg-3 {\n    margin: 1rem !important; }\n  .mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important; }\n  .mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important; }\n  .mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important; }\n  .ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important; }\n  .m-lg-4 {\n    margin: 1.5rem !important; }\n  .mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important; }\n  .mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important; }\n  .mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important; }\n  .m-lg-5 {\n    margin: 3rem !important; }\n  .mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important; }\n  .mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important; }\n  .mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important; }\n  .ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important; }\n  .p-lg-0 {\n    padding: 0 !important; }\n  .pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important; }\n  .pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important; }\n  .pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important; }\n  .pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important; }\n  .p-lg-1 {\n    padding: 0.25rem !important; }\n  .pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important; }\n  .pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important; }\n  .pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important; }\n  .p-lg-2 {\n    padding: 0.5rem !important; }\n  .pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important; }\n  .pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important; }\n  .pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important; }\n  .p-lg-3 {\n    padding: 1rem !important; }\n  .pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important; }\n  .pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important; }\n  .pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important; }\n  .pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important; }\n  .p-lg-4 {\n    padding: 1.5rem !important; }\n  .pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important; }\n  .pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important; }\n  .pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important; }\n  .p-lg-5 {\n    padding: 3rem !important; }\n  .pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important; }\n  .pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important; }\n  .pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important; }\n  .pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important; }\n  .m-lg-n1 {\n    margin: -0.25rem !important; }\n  .mt-lg-n1,\n  .my-lg-n1 {\n    margin-top: -0.25rem !important; }\n  .mr-lg-n1,\n  .mx-lg-n1 {\n    margin-right: -0.25rem !important; }\n  .mb-lg-n1,\n  .my-lg-n1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-lg-n1,\n  .mx-lg-n1 {\n    margin-left: -0.25rem !important; }\n  .m-lg-n2 {\n    margin: -0.25rem !important; }\n  .mt-lg-n2,\n  .my-lg-n2 {\n    margin-top: -0.25rem !important; }\n  .mr-lg-n2,\n  .mx-lg-n2 {\n    margin-right: -0.25rem !important; }\n  .mb-lg-n2,\n  .my-lg-n2 {\n    margin-bottom: -0.25rem !important; }\n  .ml-lg-n2,\n  .mx-lg-n2 {\n    margin-left: -0.25rem !important; }\n  .m-lg-n3 {\n    margin: -0.25rem !important; }\n  .mt-lg-n3,\n  .my-lg-n3 {\n    margin-top: -0.25rem !important; }\n  .mr-lg-n3,\n  .mx-lg-n3 {\n    margin-right: -0.25rem !important; }\n  .mb-lg-n3,\n  .my-lg-n3 {\n    margin-bottom: -0.25rem !important; }\n  .ml-lg-n3,\n  .mx-lg-n3 {\n    margin-left: -0.25rem !important; }\n  .m-lg-n4 {\n    margin: -0.25rem !important; }\n  .mt-lg-n4,\n  .my-lg-n4 {\n    margin-top: -0.25rem !important; }\n  .mr-lg-n4,\n  .mx-lg-n4 {\n    margin-right: -0.25rem !important; }\n  .mb-lg-n4,\n  .my-lg-n4 {\n    margin-bottom: -0.25rem !important; }\n  .ml-lg-n4,\n  .mx-lg-n4 {\n    margin-left: -0.25rem !important; }\n  .m-lg-n5 {\n    margin: -0.25rem !important; }\n  .mt-lg-n5,\n  .my-lg-n5 {\n    margin-top: -0.25rem !important; }\n  .mr-lg-n5,\n  .mx-lg-n5 {\n    margin-right: -0.25rem !important; }\n  .mb-lg-n5,\n  .my-lg-n5 {\n    margin-bottom: -0.25rem !important; }\n  .ml-lg-n5,\n  .mx-lg-n5 {\n    margin-left: -0.25rem !important; }\n  .m-lg-auto {\n    margin: auto !important; }\n  .mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important; }\n  .mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important; }\n  .mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important; }\n  .ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important; }\n  .mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important; }\n  .mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important; }\n  .mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important; }\n  .ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important; }\n  .m-xl-1 {\n    margin: 0.25rem !important; }\n  .mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important; }\n  .mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important; }\n  .mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important; }\n  .m-xl-2 {\n    margin: 0.5rem !important; }\n  .mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important; }\n  .mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important; }\n  .mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important; }\n  .m-xl-3 {\n    margin: 1rem !important; }\n  .mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important; }\n  .mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important; }\n  .mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important; }\n  .ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important; }\n  .m-xl-4 {\n    margin: 1.5rem !important; }\n  .mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important; }\n  .mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important; }\n  .mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important; }\n  .m-xl-5 {\n    margin: 3rem !important; }\n  .mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important; }\n  .mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important; }\n  .mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important; }\n  .ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important; }\n  .p-xl-0 {\n    padding: 0 !important; }\n  .pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important; }\n  .pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important; }\n  .pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important; }\n  .pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important; }\n  .p-xl-1 {\n    padding: 0.25rem !important; }\n  .pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important; }\n  .pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important; }\n  .pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important; }\n  .p-xl-2 {\n    padding: 0.5rem !important; }\n  .pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important; }\n  .pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important; }\n  .pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important; }\n  .p-xl-3 {\n    padding: 1rem !important; }\n  .pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important; }\n  .pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important; }\n  .pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important; }\n  .pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important; }\n  .p-xl-4 {\n    padding: 1.5rem !important; }\n  .pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important; }\n  .pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important; }\n  .pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important; }\n  .p-xl-5 {\n    padding: 3rem !important; }\n  .pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important; }\n  .pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important; }\n  .pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important; }\n  .pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important; }\n  .m-xl-n1 {\n    margin: -0.25rem !important; }\n  .mt-xl-n1,\n  .my-xl-n1 {\n    margin-top: -0.25rem !important; }\n  .mr-xl-n1,\n  .mx-xl-n1 {\n    margin-right: -0.25rem !important; }\n  .mb-xl-n1,\n  .my-xl-n1 {\n    margin-bottom: -0.25rem !important; }\n  .ml-xl-n1,\n  .mx-xl-n1 {\n    margin-left: -0.25rem !important; }\n  .m-xl-n2 {\n    margin: -0.25rem !important; }\n  .mt-xl-n2,\n  .my-xl-n2 {\n    margin-top: -0.25rem !important; }\n  .mr-xl-n2,\n  .mx-xl-n2 {\n    margin-right: -0.25rem !important; }\n  .mb-xl-n2,\n  .my-xl-n2 {\n    margin-bottom: -0.25rem !important; }\n  .ml-xl-n2,\n  .mx-xl-n2 {\n    margin-left: -0.25rem !important; }\n  .m-xl-n3 {\n    margin: -0.25rem !important; }\n  .mt-xl-n3,\n  .my-xl-n3 {\n    margin-top: -0.25rem !important; }\n  .mr-xl-n3,\n  .mx-xl-n3 {\n    margin-right: -0.25rem !important; }\n  .mb-xl-n3,\n  .my-xl-n3 {\n    margin-bottom: -0.25rem !important; }\n  .ml-xl-n3,\n  .mx-xl-n3 {\n    margin-left: -0.25rem !important; }\n  .m-xl-n4 {\n    margin: -0.25rem !important; }\n  .mt-xl-n4,\n  .my-xl-n4 {\n    margin-top: -0.25rem !important; }\n  .mr-xl-n4,\n  .mx-xl-n4 {\n    margin-right: -0.25rem !important; }\n  .mb-xl-n4,\n  .my-xl-n4 {\n    margin-bottom: -0.25rem !important; }\n  .ml-xl-n4,\n  .mx-xl-n4 {\n    margin-left: -0.25rem !important; }\n  .m-xl-n5 {\n    margin: -0.25rem !important; }\n  .mt-xl-n5,\n  .my-xl-n5 {\n    margin-top: -0.25rem !important; }\n  .mr-xl-n5,\n  .mx-xl-n5 {\n    margin-right: -0.25rem !important; }\n  .mb-xl-n5,\n  .my-xl-n5 {\n    margin-bottom: -0.25rem !important; }\n  .ml-xl-n5,\n  .mx-xl-n5 {\n    margin-left: -0.25rem !important; }\n  .m-xl-auto {\n    margin: auto !important; }\n  .mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important; }\n  .mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important; }\n  .mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important; }\n  .ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important; } }\n\n.stretched-link::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  pointer-events: auto;\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0); }\n\n.text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important; }\n\n.text-justify {\n  text-align: justify !important; }\n\n.text-wrap {\n  white-space: normal !important; }\n\n.text-nowrap {\n  white-space: nowrap !important; }\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.text-left {\n  text-align: left !important; }\n\n.text-right {\n  text-align: right !important; }\n\n.text-center {\n  text-align: center !important; }\n\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important; }\n  .text-sm-right {\n    text-align: right !important; }\n  .text-sm-center {\n    text-align: center !important; } }\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important; }\n  .text-md-right {\n    text-align: right !important; }\n  .text-md-center {\n    text-align: center !important; } }\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important; }\n  .text-lg-right {\n    text-align: right !important; }\n  .text-lg-center {\n    text-align: center !important; } }\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important; }\n  .text-xl-right {\n    text-align: right !important; }\n  .text-xl-center {\n    text-align: center !important; } }\n\n.text-lowercase {\n  text-transform: lowercase !important; }\n\n.text-uppercase {\n  text-transform: uppercase !important; }\n\n.text-capitalize {\n  text-transform: capitalize !important; }\n\n.font-weight-light {\n  font-weight: 300 !important; }\n\n.font-weight-lighter {\n  font-weight: lighter !important; }\n\n.font-weight-normal {\n  font-weight: 400 !important; }\n\n.font-weight-bold {\n  font-weight: 700 !important; }\n\n.font-weight-bolder {\n  font-weight: bolder !important; }\n\n.font-italic {\n  font-style: italic !important; }\n\n.text-white {\n  color: #fff !important; }\n\n.text-primary {\n  color: #5265cc !important; }\n\na.text-primary:hover, a.text-primary:focus {\n  color: #3041a2 !important; }\n\n.text-secondary {\n  color: #6c757d !important; }\n\na.text-secondary:hover, a.text-secondary:focus {\n  color: #494f54 !important; }\n\n.text-success {\n  color: #15bd76 !important; }\n\na.text-success:hover, a.text-success:focus {\n  color: #0d784b !important; }\n\n.text-info {\n  color: #8293b0 !important; }\n\na.text-info:hover, a.text-info:focus {\n  color: #596c8d !important; }\n\n.text-warning {\n  color: #ff9900 !important; }\n\na.text-warning:hover, a.text-warning:focus {\n  color: #b36b00 !important; }\n\n.text-danger {\n  color: #e53e3e !important; }\n\na.text-danger:hover, a.text-danger:focus {\n  color: #bd1919 !important; }\n\n.text-light {\n  color: #d9dfe7 !important; }\n\na.text-light:hover, a.text-light:focus {\n  color: #aab8c9 !important; }\n\n.text-dark {\n  color: #080b1e !important; }\n\na.text-dark:hover, a.text-dark:focus {\n  color: black !important; }\n\n.text-default {\n  color: #293241 !important; }\n\na.text-default:hover, a.text-default:focus {\n  color: #0b0e12 !important; }\n\n.text-body {\n  color: #212529 !important; }\n\n.text-muted {\n  color: #6c757d !important; }\n\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important; }\n\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.text-decoration-none {\n  text-decoration: none !important; }\n\n.text-break {\n  word-break: break-word !important;\n  word-wrap: break-word !important; }\n\n.text-reset {\n  color: inherit !important; }\n\n.visible {\n  visibility: visible !important; }\n\n.invisible {\n  visibility: hidden !important; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-weight: 600;\n  line-height: 1.2; }\n\nh1, .h1 {\n  font-size: 4.92188rem; }\n\nh2, .h2 {\n  font-size: 3.28125rem; }\n\nh3, .h3 {\n  font-size: 2.625rem; }\n\nh4, .h4 {\n  font-size: 1.96875rem; }\n\nh5, .h5 {\n  font-size: 1.3125rem; }\n\nh6, .h6 {\n  font-size: 1.09375rem; }\n\n.lead {\n  font-size: 1.09375rem;\n  font-weight: 300; }\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400; }\n\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline-item {\n  display: inline-block; }\n  .list-inline-item:not(:last-child) {\n    margin-right: 0.5rem; }\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase; }\n\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.09375rem; }\n\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #6c757d; }\n  .blockquote-footer::before {\n    content: \"\\2014\\00A0\"; }\n\n/*-------------Bootstrap optional---------*/\n.container,\n.container-fluid,\n.container-sm,\n.container-md,\n.container-lg,\n.container-xl {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n\n@media (min-width: 576px) {\n  .container, .container-sm {\n    max-width: 540px; } }\n\n@media (min-width: 768px) {\n  .container, .container-sm, .container-md {\n    max-width: 720px; } }\n\n@media (min-width: 992px) {\n  .container, .container-sm, .container-md, .container-lg {\n    max-width: 960px; } }\n\n@media (min-width: 1200px) {\n  .container, .container-sm, .container-md, .container-lg, .container-xl {\n    max-width: 1140px; } }\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n  .no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col-13, .col-14, .col-15, .col-16, .col-17, .col-18, .col-19, .col-20, .col-21, .col-22, .col-23, .col-24, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-13, .col-sm-14, .col-sm-15, .col-sm-16, .col-sm-17, .col-sm-18, .col-sm-19, .col-sm-20, .col-sm-21, .col-sm-22, .col-sm-23, .col-sm-24, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md-13, .col-md-14, .col-md-15, .col-md-16, .col-md-17, .col-md-18, .col-md-19, .col-md-20, .col-md-21, .col-md-22, .col-md-23, .col-md-24, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-13, .col-lg-14, .col-lg-15, .col-lg-16, .col-lg-17, .col-lg-18, .col-lg-19, .col-lg-20, .col-lg-21, .col-lg-22, .col-lg-23, .col-lg-24, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-13, .col-xl-14, .col-xl-15, .col-xl-16, .col-xl-17, .col-xl-18, .col-xl-19, .col-xl-20, .col-xl-21, .col-xl-22, .col-xl-23, .col-xl-24, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%; }\n\n.row-cols-1 > * {\n  flex: 0 0 100%;\n  max-width: 100%; }\n\n.row-cols-2 > * {\n  flex: 0 0 50%;\n  max-width: 50%; }\n\n.row-cols-3 > * {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n\n.row-cols-4 > * {\n  flex: 0 0 25%;\n  max-width: 25%; }\n\n.row-cols-5 > * {\n  flex: 0 0 20%;\n  max-width: 20%; }\n\n.row-cols-6 > * {\n  flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: 100%; }\n\n.col-1 {\n  flex: 0 0 4.16667%;\n  max-width: 4.16667%; }\n\n.col-2 {\n  flex: 0 0 8.33333%;\n  max-width: 8.33333%; }\n\n.col-3 {\n  flex: 0 0 12.5%;\n  max-width: 12.5%; }\n\n.col-4 {\n  flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n\n.col-5 {\n  flex: 0 0 20.83333%;\n  max-width: 20.83333%; }\n\n.col-6 {\n  flex: 0 0 25%;\n  max-width: 25%; }\n\n.col-7 {\n  flex: 0 0 29.16667%;\n  max-width: 29.16667%; }\n\n.col-8 {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n\n.col-9 {\n  flex: 0 0 37.5%;\n  max-width: 37.5%; }\n\n.col-10 {\n  flex: 0 0 41.66667%;\n  max-width: 41.66667%; }\n\n.col-11 {\n  flex: 0 0 45.83333%;\n  max-width: 45.83333%; }\n\n.col-12 {\n  flex: 0 0 50%;\n  max-width: 50%; }\n\n.col-13 {\n  flex: 0 0 54.16667%;\n  max-width: 54.16667%; }\n\n.col-14 {\n  flex: 0 0 58.33333%;\n  max-width: 58.33333%; }\n\n.col-15 {\n  flex: 0 0 62.5%;\n  max-width: 62.5%; }\n\n.col-16 {\n  flex: 0 0 66.66667%;\n  max-width: 66.66667%; }\n\n.col-17 {\n  flex: 0 0 70.83333%;\n  max-width: 70.83333%; }\n\n.col-18 {\n  flex: 0 0 75%;\n  max-width: 75%; }\n\n.col-19 {\n  flex: 0 0 79.16667%;\n  max-width: 79.16667%; }\n\n.col-20 {\n  flex: 0 0 83.33333%;\n  max-width: 83.33333%; }\n\n.col-21 {\n  flex: 0 0 87.5%;\n  max-width: 87.5%; }\n\n.col-22 {\n  flex: 0 0 91.66667%;\n  max-width: 91.66667%; }\n\n.col-23 {\n  flex: 0 0 95.83333%;\n  max-width: 95.83333%; }\n\n.col-24 {\n  flex: 0 0 100%;\n  max-width: 100%; }\n\n.order-first {\n  order: -1; }\n\n.order-last {\n  order: 25; }\n\n.order-0 {\n  order: 0; }\n\n.order-1 {\n  order: 1; }\n\n.order-2 {\n  order: 2; }\n\n.order-3 {\n  order: 3; }\n\n.order-4 {\n  order: 4; }\n\n.order-5 {\n  order: 5; }\n\n.order-6 {\n  order: 6; }\n\n.order-7 {\n  order: 7; }\n\n.order-8 {\n  order: 8; }\n\n.order-9 {\n  order: 9; }\n\n.order-10 {\n  order: 10; }\n\n.order-11 {\n  order: 11; }\n\n.order-12 {\n  order: 12; }\n\n.order-13 {\n  order: 13; }\n\n.order-14 {\n  order: 14; }\n\n.order-15 {\n  order: 15; }\n\n.order-16 {\n  order: 16; }\n\n.order-17 {\n  order: 17; }\n\n.order-18 {\n  order: 18; }\n\n.order-19 {\n  order: 19; }\n\n.order-20 {\n  order: 20; }\n\n.order-21 {\n  order: 21; }\n\n.order-22 {\n  order: 22; }\n\n.order-23 {\n  order: 23; }\n\n.order-24 {\n  order: 24; }\n\n.offset-1 {\n  margin-left: 4.16667%; }\n\n.offset-2 {\n  margin-left: 8.33333%; }\n\n.offset-3 {\n  margin-left: 12.5%; }\n\n.offset-4 {\n  margin-left: 16.66667%; }\n\n.offset-5 {\n  margin-left: 20.83333%; }\n\n.offset-6 {\n  margin-left: 25%; }\n\n.offset-7 {\n  margin-left: 29.16667%; }\n\n.offset-8 {\n  margin-left: 33.33333%; }\n\n.offset-9 {\n  margin-left: 37.5%; }\n\n.offset-10 {\n  margin-left: 41.66667%; }\n\n.offset-11 {\n  margin-left: 45.83333%; }\n\n.offset-12 {\n  margin-left: 50%; }\n\n.offset-13 {\n  margin-left: 54.16667%; }\n\n.offset-14 {\n  margin-left: 58.33333%; }\n\n.offset-15 {\n  margin-left: 62.5%; }\n\n.offset-16 {\n  margin-left: 66.66667%; }\n\n.offset-17 {\n  margin-left: 70.83333%; }\n\n.offset-18 {\n  margin-left: 75%; }\n\n.offset-19 {\n  margin-left: 79.16667%; }\n\n.offset-20 {\n  margin-left: 83.33333%; }\n\n.offset-21 {\n  margin-left: 87.5%; }\n\n.offset-22 {\n  margin-left: 91.66667%; }\n\n.offset-23 {\n  margin-left: 95.83333%; }\n\n@media (min-width: 576px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .row-cols-sm-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .row-cols-sm-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .row-cols-sm-3 > * {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .row-cols-sm-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .row-cols-sm-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%; }\n  .row-cols-sm-6 > * {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-sm-1 {\n    flex: 0 0 4.16667%;\n    max-width: 4.16667%; }\n  .col-sm-2 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-sm-3 {\n    flex: 0 0 12.5%;\n    max-width: 12.5%; }\n  .col-sm-4 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-sm-5 {\n    flex: 0 0 20.83333%;\n    max-width: 20.83333%; }\n  .col-sm-6 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-7 {\n    flex: 0 0 29.16667%;\n    max-width: 29.16667%; }\n  .col-sm-8 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-sm-9 {\n    flex: 0 0 37.5%;\n    max-width: 37.5%; }\n  .col-sm-10 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-sm-11 {\n    flex: 0 0 45.83333%;\n    max-width: 45.83333%; }\n  .col-sm-12 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-13 {\n    flex: 0 0 54.16667%;\n    max-width: 54.16667%; }\n  .col-sm-14 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-sm-15 {\n    flex: 0 0 62.5%;\n    max-width: 62.5%; }\n  .col-sm-16 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-sm-17 {\n    flex: 0 0 70.83333%;\n    max-width: 70.83333%; }\n  .col-sm-18 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-19 {\n    flex: 0 0 79.16667%;\n    max-width: 79.16667%; }\n  .col-sm-20 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-sm-21 {\n    flex: 0 0 87.5%;\n    max-width: 87.5%; }\n  .col-sm-22 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-sm-23 {\n    flex: 0 0 95.83333%;\n    max-width: 95.83333%; }\n  .col-sm-24 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    order: -1; }\n  .order-sm-last {\n    order: 25; }\n  .order-sm-0 {\n    order: 0; }\n  .order-sm-1 {\n    order: 1; }\n  .order-sm-2 {\n    order: 2; }\n  .order-sm-3 {\n    order: 3; }\n  .order-sm-4 {\n    order: 4; }\n  .order-sm-5 {\n    order: 5; }\n  .order-sm-6 {\n    order: 6; }\n  .order-sm-7 {\n    order: 7; }\n  .order-sm-8 {\n    order: 8; }\n  .order-sm-9 {\n    order: 9; }\n  .order-sm-10 {\n    order: 10; }\n  .order-sm-11 {\n    order: 11; }\n  .order-sm-12 {\n    order: 12; }\n  .order-sm-13 {\n    order: 13; }\n  .order-sm-14 {\n    order: 14; }\n  .order-sm-15 {\n    order: 15; }\n  .order-sm-16 {\n    order: 16; }\n  .order-sm-17 {\n    order: 17; }\n  .order-sm-18 {\n    order: 18; }\n  .order-sm-19 {\n    order: 19; }\n  .order-sm-20 {\n    order: 20; }\n  .order-sm-21 {\n    order: 21; }\n  .order-sm-22 {\n    order: 22; }\n  .order-sm-23 {\n    order: 23; }\n  .order-sm-24 {\n    order: 24; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 4.16667%; }\n  .offset-sm-2 {\n    margin-left: 8.33333%; }\n  .offset-sm-3 {\n    margin-left: 12.5%; }\n  .offset-sm-4 {\n    margin-left: 16.66667%; }\n  .offset-sm-5 {\n    margin-left: 20.83333%; }\n  .offset-sm-6 {\n    margin-left: 25%; }\n  .offset-sm-7 {\n    margin-left: 29.16667%; }\n  .offset-sm-8 {\n    margin-left: 33.33333%; }\n  .offset-sm-9 {\n    margin-left: 37.5%; }\n  .offset-sm-10 {\n    margin-left: 41.66667%; }\n  .offset-sm-11 {\n    margin-left: 45.83333%; }\n  .offset-sm-12 {\n    margin-left: 50%; }\n  .offset-sm-13 {\n    margin-left: 54.16667%; }\n  .offset-sm-14 {\n    margin-left: 58.33333%; }\n  .offset-sm-15 {\n    margin-left: 62.5%; }\n  .offset-sm-16 {\n    margin-left: 66.66667%; }\n  .offset-sm-17 {\n    margin-left: 70.83333%; }\n  .offset-sm-18 {\n    margin-left: 75%; }\n  .offset-sm-19 {\n    margin-left: 79.16667%; }\n  .offset-sm-20 {\n    margin-left: 83.33333%; }\n  .offset-sm-21 {\n    margin-left: 87.5%; }\n  .offset-sm-22 {\n    margin-left: 91.66667%; }\n  .offset-sm-23 {\n    margin-left: 95.83333%; } }\n\n@media (min-width: 768px) {\n  .col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .row-cols-md-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .row-cols-md-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .row-cols-md-3 > * {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .row-cols-md-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .row-cols-md-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%; }\n  .row-cols-md-6 > * {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-md-1 {\n    flex: 0 0 4.16667%;\n    max-width: 4.16667%; }\n  .col-md-2 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-md-3 {\n    flex: 0 0 12.5%;\n    max-width: 12.5%; }\n  .col-md-4 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-md-5 {\n    flex: 0 0 20.83333%;\n    max-width: 20.83333%; }\n  .col-md-6 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-7 {\n    flex: 0 0 29.16667%;\n    max-width: 29.16667%; }\n  .col-md-8 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-md-9 {\n    flex: 0 0 37.5%;\n    max-width: 37.5%; }\n  .col-md-10 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-md-11 {\n    flex: 0 0 45.83333%;\n    max-width: 45.83333%; }\n  .col-md-12 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-13 {\n    flex: 0 0 54.16667%;\n    max-width: 54.16667%; }\n  .col-md-14 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-md-15 {\n    flex: 0 0 62.5%;\n    max-width: 62.5%; }\n  .col-md-16 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-md-17 {\n    flex: 0 0 70.83333%;\n    max-width: 70.83333%; }\n  .col-md-18 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-19 {\n    flex: 0 0 79.16667%;\n    max-width: 79.16667%; }\n  .col-md-20 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-md-21 {\n    flex: 0 0 87.5%;\n    max-width: 87.5%; }\n  .col-md-22 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-md-23 {\n    flex: 0 0 95.83333%;\n    max-width: 95.83333%; }\n  .col-md-24 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    order: -1; }\n  .order-md-last {\n    order: 25; }\n  .order-md-0 {\n    order: 0; }\n  .order-md-1 {\n    order: 1; }\n  .order-md-2 {\n    order: 2; }\n  .order-md-3 {\n    order: 3; }\n  .order-md-4 {\n    order: 4; }\n  .order-md-5 {\n    order: 5; }\n  .order-md-6 {\n    order: 6; }\n  .order-md-7 {\n    order: 7; }\n  .order-md-8 {\n    order: 8; }\n  .order-md-9 {\n    order: 9; }\n  .order-md-10 {\n    order: 10; }\n  .order-md-11 {\n    order: 11; }\n  .order-md-12 {\n    order: 12; }\n  .order-md-13 {\n    order: 13; }\n  .order-md-14 {\n    order: 14; }\n  .order-md-15 {\n    order: 15; }\n  .order-md-16 {\n    order: 16; }\n  .order-md-17 {\n    order: 17; }\n  .order-md-18 {\n    order: 18; }\n  .order-md-19 {\n    order: 19; }\n  .order-md-20 {\n    order: 20; }\n  .order-md-21 {\n    order: 21; }\n  .order-md-22 {\n    order: 22; }\n  .order-md-23 {\n    order: 23; }\n  .order-md-24 {\n    order: 24; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 4.16667%; }\n  .offset-md-2 {\n    margin-left: 8.33333%; }\n  .offset-md-3 {\n    margin-left: 12.5%; }\n  .offset-md-4 {\n    margin-left: 16.66667%; }\n  .offset-md-5 {\n    margin-left: 20.83333%; }\n  .offset-md-6 {\n    margin-left: 25%; }\n  .offset-md-7 {\n    margin-left: 29.16667%; }\n  .offset-md-8 {\n    margin-left: 33.33333%; }\n  .offset-md-9 {\n    margin-left: 37.5%; }\n  .offset-md-10 {\n    margin-left: 41.66667%; }\n  .offset-md-11 {\n    margin-left: 45.83333%; }\n  .offset-md-12 {\n    margin-left: 50%; }\n  .offset-md-13 {\n    margin-left: 54.16667%; }\n  .offset-md-14 {\n    margin-left: 58.33333%; }\n  .offset-md-15 {\n    margin-left: 62.5%; }\n  .offset-md-16 {\n    margin-left: 66.66667%; }\n  .offset-md-17 {\n    margin-left: 70.83333%; }\n  .offset-md-18 {\n    margin-left: 75%; }\n  .offset-md-19 {\n    margin-left: 79.16667%; }\n  .offset-md-20 {\n    margin-left: 83.33333%; }\n  .offset-md-21 {\n    margin-left: 87.5%; }\n  .offset-md-22 {\n    margin-left: 91.66667%; }\n  .offset-md-23 {\n    margin-left: 95.83333%; } }\n\n@media (min-width: 992px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .row-cols-lg-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .row-cols-lg-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .row-cols-lg-3 > * {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .row-cols-lg-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .row-cols-lg-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%; }\n  .row-cols-lg-6 > * {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-lg-1 {\n    flex: 0 0 4.16667%;\n    max-width: 4.16667%; }\n  .col-lg-2 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-lg-3 {\n    flex: 0 0 12.5%;\n    max-width: 12.5%; }\n  .col-lg-4 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-lg-5 {\n    flex: 0 0 20.83333%;\n    max-width: 20.83333%; }\n  .col-lg-6 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-7 {\n    flex: 0 0 29.16667%;\n    max-width: 29.16667%; }\n  .col-lg-8 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-lg-9 {\n    flex: 0 0 37.5%;\n    max-width: 37.5%; }\n  .col-lg-10 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-lg-11 {\n    flex: 0 0 45.83333%;\n    max-width: 45.83333%; }\n  .col-lg-12 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-13 {\n    flex: 0 0 54.16667%;\n    max-width: 54.16667%; }\n  .col-lg-14 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-lg-15 {\n    flex: 0 0 62.5%;\n    max-width: 62.5%; }\n  .col-lg-16 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-lg-17 {\n    flex: 0 0 70.83333%;\n    max-width: 70.83333%; }\n  .col-lg-18 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-19 {\n    flex: 0 0 79.16667%;\n    max-width: 79.16667%; }\n  .col-lg-20 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-lg-21 {\n    flex: 0 0 87.5%;\n    max-width: 87.5%; }\n  .col-lg-22 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-lg-23 {\n    flex: 0 0 95.83333%;\n    max-width: 95.83333%; }\n  .col-lg-24 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    order: -1; }\n  .order-lg-last {\n    order: 25; }\n  .order-lg-0 {\n    order: 0; }\n  .order-lg-1 {\n    order: 1; }\n  .order-lg-2 {\n    order: 2; }\n  .order-lg-3 {\n    order: 3; }\n  .order-lg-4 {\n    order: 4; }\n  .order-lg-5 {\n    order: 5; }\n  .order-lg-6 {\n    order: 6; }\n  .order-lg-7 {\n    order: 7; }\n  .order-lg-8 {\n    order: 8; }\n  .order-lg-9 {\n    order: 9; }\n  .order-lg-10 {\n    order: 10; }\n  .order-lg-11 {\n    order: 11; }\n  .order-lg-12 {\n    order: 12; }\n  .order-lg-13 {\n    order: 13; }\n  .order-lg-14 {\n    order: 14; }\n  .order-lg-15 {\n    order: 15; }\n  .order-lg-16 {\n    order: 16; }\n  .order-lg-17 {\n    order: 17; }\n  .order-lg-18 {\n    order: 18; }\n  .order-lg-19 {\n    order: 19; }\n  .order-lg-20 {\n    order: 20; }\n  .order-lg-21 {\n    order: 21; }\n  .order-lg-22 {\n    order: 22; }\n  .order-lg-23 {\n    order: 23; }\n  .order-lg-24 {\n    order: 24; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 4.16667%; }\n  .offset-lg-2 {\n    margin-left: 8.33333%; }\n  .offset-lg-3 {\n    margin-left: 12.5%; }\n  .offset-lg-4 {\n    margin-left: 16.66667%; }\n  .offset-lg-5 {\n    margin-left: 20.83333%; }\n  .offset-lg-6 {\n    margin-left: 25%; }\n  .offset-lg-7 {\n    margin-left: 29.16667%; }\n  .offset-lg-8 {\n    margin-left: 33.33333%; }\n  .offset-lg-9 {\n    margin-left: 37.5%; }\n  .offset-lg-10 {\n    margin-left: 41.66667%; }\n  .offset-lg-11 {\n    margin-left: 45.83333%; }\n  .offset-lg-12 {\n    margin-left: 50%; }\n  .offset-lg-13 {\n    margin-left: 54.16667%; }\n  .offset-lg-14 {\n    margin-left: 58.33333%; }\n  .offset-lg-15 {\n    margin-left: 62.5%; }\n  .offset-lg-16 {\n    margin-left: 66.66667%; }\n  .offset-lg-17 {\n    margin-left: 70.83333%; }\n  .offset-lg-18 {\n    margin-left: 75%; }\n  .offset-lg-19 {\n    margin-left: 79.16667%; }\n  .offset-lg-20 {\n    margin-left: 83.33333%; }\n  .offset-lg-21 {\n    margin-left: 87.5%; }\n  .offset-lg-22 {\n    margin-left: 91.66667%; }\n  .offset-lg-23 {\n    margin-left: 95.83333%; } }\n\n@media (min-width: 1200px) {\n  .col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .row-cols-xl-1 > * {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .row-cols-xl-2 > * {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .row-cols-xl-3 > * {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .row-cols-xl-4 > * {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .row-cols-xl-5 > * {\n    flex: 0 0 20%;\n    max-width: 20%; }\n  .row-cols-xl-6 > * {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%; }\n  .col-xl-1 {\n    flex: 0 0 4.16667%;\n    max-width: 4.16667%; }\n  .col-xl-2 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-xl-3 {\n    flex: 0 0 12.5%;\n    max-width: 12.5%; }\n  .col-xl-4 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-xl-5 {\n    flex: 0 0 20.83333%;\n    max-width: 20.83333%; }\n  .col-xl-6 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-7 {\n    flex: 0 0 29.16667%;\n    max-width: 29.16667%; }\n  .col-xl-8 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-xl-9 {\n    flex: 0 0 37.5%;\n    max-width: 37.5%; }\n  .col-xl-10 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-xl-11 {\n    flex: 0 0 45.83333%;\n    max-width: 45.83333%; }\n  .col-xl-12 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-13 {\n    flex: 0 0 54.16667%;\n    max-width: 54.16667%; }\n  .col-xl-14 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-xl-15 {\n    flex: 0 0 62.5%;\n    max-width: 62.5%; }\n  .col-xl-16 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-xl-17 {\n    flex: 0 0 70.83333%;\n    max-width: 70.83333%; }\n  .col-xl-18 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-19 {\n    flex: 0 0 79.16667%;\n    max-width: 79.16667%; }\n  .col-xl-20 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-xl-21 {\n    flex: 0 0 87.5%;\n    max-width: 87.5%; }\n  .col-xl-22 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-xl-23 {\n    flex: 0 0 95.83333%;\n    max-width: 95.83333%; }\n  .col-xl-24 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    order: -1; }\n  .order-xl-last {\n    order: 25; }\n  .order-xl-0 {\n    order: 0; }\n  .order-xl-1 {\n    order: 1; }\n  .order-xl-2 {\n    order: 2; }\n  .order-xl-3 {\n    order: 3; }\n  .order-xl-4 {\n    order: 4; }\n  .order-xl-5 {\n    order: 5; }\n  .order-xl-6 {\n    order: 6; }\n  .order-xl-7 {\n    order: 7; }\n  .order-xl-8 {\n    order: 8; }\n  .order-xl-9 {\n    order: 9; }\n  .order-xl-10 {\n    order: 10; }\n  .order-xl-11 {\n    order: 11; }\n  .order-xl-12 {\n    order: 12; }\n  .order-xl-13 {\n    order: 13; }\n  .order-xl-14 {\n    order: 14; }\n  .order-xl-15 {\n    order: 15; }\n  .order-xl-16 {\n    order: 16; }\n  .order-xl-17 {\n    order: 17; }\n  .order-xl-18 {\n    order: 18; }\n  .order-xl-19 {\n    order: 19; }\n  .order-xl-20 {\n    order: 20; }\n  .order-xl-21 {\n    order: 21; }\n  .order-xl-22 {\n    order: 22; }\n  .order-xl-23 {\n    order: 23; }\n  .order-xl-24 {\n    order: 24; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 4.16667%; }\n  .offset-xl-2 {\n    margin-left: 8.33333%; }\n  .offset-xl-3 {\n    margin-left: 12.5%; }\n  .offset-xl-4 {\n    margin-left: 16.66667%; }\n  .offset-xl-5 {\n    margin-left: 20.83333%; }\n  .offset-xl-6 {\n    margin-left: 25%; }\n  .offset-xl-7 {\n    margin-left: 29.16667%; }\n  .offset-xl-8 {\n    margin-left: 33.33333%; }\n  .offset-xl-9 {\n    margin-left: 37.5%; }\n  .offset-xl-10 {\n    margin-left: 41.66667%; }\n  .offset-xl-11 {\n    margin-left: 45.83333%; }\n  .offset-xl-12 {\n    margin-left: 50%; }\n  .offset-xl-13 {\n    margin-left: 54.16667%; }\n  .offset-xl-14 {\n    margin-left: 58.33333%; }\n  .offset-xl-15 {\n    margin-left: 62.5%; }\n  .offset-xl-16 {\n    margin-left: 66.66667%; }\n  .offset-xl-17 {\n    margin-left: 70.83333%; }\n  .offset-xl-18 {\n    margin-left: 75%; }\n  .offset-xl-19 {\n    margin-left: 79.16667%; }\n  .offset-xl-20 {\n    margin-left: 83.33333%; }\n  .offset-xl-21 {\n    margin-left: 87.5%; }\n  .offset-xl-22 {\n    margin-left: 91.66667%; }\n  .offset-xl-23 {\n    margin-left: 95.83333%; } }\n\n.btn {\n  display: inline-block;\n  font-family: Arial, sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-weight: 500;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.625rem 1.25rem;\n  font-size: 0.76562rem;\n  line-height: 1.2;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media (prefers-reduced-motion: reduce) {\n    .btn {\n      transition: none; } }\n  .btn:hover {\n    color: #212529;\n    text-decoration: none; }\n  .btn:focus, .btn.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(82, 101, 204, 0.25); }\n  .btn.disabled, .btn:disabled {\n    opacity: 0.65; }\n  .btn:not(:disabled):not(.disabled) {\n    cursor: pointer; }\n\na.btn.disabled,\nfieldset:disabled a.btn {\n  pointer-events: none; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #5265cc;\n  border-color: #5265cc; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #384dbf;\n    border-color: #3649b5; }\n  .btn-primary:focus, .btn-primary.focus {\n    color: #fff;\n    background-color: #384dbf;\n    border-color: #3649b5;\n    box-shadow: 0 0 0 0.2rem rgba(108, 124, 212, 0.5); }\n  .btn-primary.disabled, .btn-primary:disabled {\n    color: #fff;\n    background-color: #5265cc;\n    border-color: #5265cc; }\n  .btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,\n  .show > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #3649b5;\n    border-color: #3345ac; }\n    .btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-primary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(108, 124, 212, 0.5); }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d; }\n  .btn-secondary:hover {\n    color: #fff;\n    background-color: #5a6268;\n    border-color: #545b62; }\n  .btn-secondary:focus, .btn-secondary.focus {\n    color: #fff;\n    background-color: #5a6268;\n    border-color: #545b62;\n    box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5); }\n  .btn-secondary.disabled, .btn-secondary:disabled {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n  .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,\n  .show > .btn-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #545b62;\n    border-color: #4e555b; }\n    .btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-secondary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5); }\n\n.btn-success {\n  color: #fff;\n  background-color: #15bd76;\n  border-color: #15bd76; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #119b61;\n    border-color: #108f59; }\n  .btn-success:focus, .btn-success.focus {\n    color: #fff;\n    background-color: #119b61;\n    border-color: #108f59;\n    box-shadow: 0 0 0 0.2rem rgba(56, 199, 139, 0.5); }\n  .btn-success.disabled, .btn-success:disabled {\n    color: #fff;\n    background-color: #15bd76;\n    border-color: #15bd76; }\n  .btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,\n  .show > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #108f59;\n    border-color: #0f8452; }\n    .btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-success.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(56, 199, 139, 0.5); }\n\n.btn-info {\n  color: #fff;\n  background-color: #8293b0;\n  border-color: #8293b0; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #6b7fa1;\n    border-color: #63789c; }\n  .btn-info:focus, .btn-info.focus {\n    color: #fff;\n    background-color: #6b7fa1;\n    border-color: #63789c;\n    box-shadow: 0 0 0 0.2rem rgba(149, 163, 188, 0.5); }\n  .btn-info.disabled, .btn-info:disabled {\n    color: #fff;\n    background-color: #8293b0;\n    border-color: #8293b0; }\n  .btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,\n  .show > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #63789c;\n    border-color: #5e7294; }\n    .btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-info.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(149, 163, 188, 0.5); }\n\n.btn-warning {\n  color: #fff;\n  background-color: #ff9900;\n  border-color: #ff9900; }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #d98200;\n    border-color: #cc7a00; }\n  .btn-warning:focus, .btn-warning.focus {\n    color: #fff;\n    background-color: #d98200;\n    border-color: #cc7a00;\n    box-shadow: 0 0 0 0.2rem rgba(255, 168, 38, 0.5); }\n  .btn-warning.disabled, .btn-warning:disabled {\n    color: #fff;\n    background-color: #ff9900;\n    border-color: #ff9900; }\n  .btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,\n  .show > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #cc7a00;\n    border-color: #bf7300; }\n    .btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-warning.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(255, 168, 38, 0.5); }\n\n.btn-danger {\n  color: #fff;\n  background-color: #e53e3e;\n  border-color: #e53e3e; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #df1e1e;\n    border-color: #d41c1c; }\n  .btn-danger:focus, .btn-danger.focus {\n    color: #fff;\n    background-color: #df1e1e;\n    border-color: #d41c1c;\n    box-shadow: 0 0 0 0.2rem rgba(233, 91, 91, 0.5); }\n  .btn-danger.disabled, .btn-danger:disabled {\n    color: #fff;\n    background-color: #e53e3e;\n    border-color: #e53e3e; }\n  .btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,\n  .show > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #d41c1c;\n    border-color: #c81b1b; }\n    .btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-danger.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(233, 91, 91, 0.5); }\n\n.btn-light {\n  color: #293241;\n  background-color: #d9dfe7;\n  border-color: #d9dfe7; }\n  .btn-light:hover {\n    color: #293241;\n    background-color: #c2cbd8;\n    border-color: #bac5d3; }\n  .btn-light:focus, .btn-light.focus {\n    color: #293241;\n    background-color: #c2cbd8;\n    border-color: #bac5d3;\n    box-shadow: 0 0 0 0.2rem rgba(191, 197, 206, 0.5); }\n  .btn-light.disabled, .btn-light:disabled {\n    color: #293241;\n    background-color: #d9dfe7;\n    border-color: #d9dfe7; }\n  .btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,\n  .show > .btn-light.dropdown-toggle {\n    color: #fff;\n    background-color: #bac5d3;\n    border-color: #b2bece; }\n    .btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-light.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(191, 197, 206, 0.5); }\n\n.btn-dark {\n  color: #fff;\n  background-color: #080b1e;\n  border-color: #080b1e; }\n  .btn-dark:hover {\n    color: #fff;\n    background-color: black;\n    border-color: black; }\n  .btn-dark:focus, .btn-dark.focus {\n    color: #fff;\n    background-color: black;\n    border-color: black;\n    box-shadow: 0 0 0 0.2rem rgba(45, 48, 64, 0.5); }\n  .btn-dark.disabled, .btn-dark:disabled {\n    color: #fff;\n    background-color: #080b1e;\n    border-color: #080b1e; }\n  .btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,\n  .show > .btn-dark.dropdown-toggle {\n    color: #fff;\n    background-color: black;\n    border-color: black; }\n    .btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-dark.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(45, 48, 64, 0.5); }\n\n.btn-default {\n  color: #fff;\n  background-color: #293241;\n  border-color: #293241; }\n  .btn-default:hover {\n    color: #fff;\n    background-color: #1a202a;\n    border-color: #151a22; }\n  .btn-default:focus, .btn-default.focus {\n    color: #fff;\n    background-color: #1a202a;\n    border-color: #151a22;\n    box-shadow: 0 0 0 0.2rem rgba(73, 81, 94, 0.5); }\n  .btn-default.disabled, .btn-default:disabled {\n    color: #fff;\n    background-color: #293241;\n    border-color: #293241; }\n  .btn-default:not(:disabled):not(.disabled):active, .btn-default:not(:disabled):not(.disabled).active,\n  .show > .btn-default.dropdown-toggle {\n    color: #fff;\n    background-color: #151a22;\n    border-color: #10141a; }\n    .btn-default:not(:disabled):not(.disabled):active:focus, .btn-default:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-default.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(73, 81, 94, 0.5); }\n\n.btn-outline-primary {\n  color: #5265cc;\n  border-color: #5265cc; }\n  .btn-outline-primary:hover {\n    color: #fff;\n    background-color: #5265cc;\n    border-color: #5265cc; }\n  .btn-outline-primary:focus, .btn-outline-primary.focus {\n    box-shadow: 0 0 0 0.2rem rgba(82, 101, 204, 0.5); }\n  .btn-outline-primary.disabled, .btn-outline-primary:disabled {\n    color: #5265cc;\n    background-color: transparent; }\n  .btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #5265cc;\n    border-color: #5265cc; }\n    .btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-primary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(82, 101, 204, 0.5); }\n\n.btn-outline-secondary {\n  color: #6c757d;\n  border-color: #6c757d; }\n  .btn-outline-secondary:hover {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n  .btn-outline-secondary:focus, .btn-outline-secondary.focus {\n    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n  .btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n    color: #6c757d;\n    background-color: transparent; }\n  .btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n    .btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-secondary.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n\n.btn-outline-success {\n  color: #15bd76;\n  border-color: #15bd76; }\n  .btn-outline-success:hover {\n    color: #fff;\n    background-color: #15bd76;\n    border-color: #15bd76; }\n  .btn-outline-success:focus, .btn-outline-success.focus {\n    box-shadow: 0 0 0 0.2rem rgba(21, 189, 118, 0.5); }\n  .btn-outline-success.disabled, .btn-outline-success:disabled {\n    color: #15bd76;\n    background-color: transparent; }\n  .btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-success.dropdown-toggle {\n    color: #fff;\n    background-color: #15bd76;\n    border-color: #15bd76; }\n    .btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-success.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(21, 189, 118, 0.5); }\n\n.btn-outline-info {\n  color: #8293b0;\n  border-color: #8293b0; }\n  .btn-outline-info:hover {\n    color: #fff;\n    background-color: #8293b0;\n    border-color: #8293b0; }\n  .btn-outline-info:focus, .btn-outline-info.focus {\n    box-shadow: 0 0 0 0.2rem rgba(130, 147, 176, 0.5); }\n  .btn-outline-info.disabled, .btn-outline-info:disabled {\n    color: #8293b0;\n    background-color: transparent; }\n  .btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-info.dropdown-toggle {\n    color: #fff;\n    background-color: #8293b0;\n    border-color: #8293b0; }\n    .btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-info.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(130, 147, 176, 0.5); }\n\n.btn-outline-warning {\n  color: #ff9900;\n  border-color: #ff9900; }\n  .btn-outline-warning:hover {\n    color: #fff;\n    background-color: #ff9900;\n    border-color: #ff9900; }\n  .btn-outline-warning:focus, .btn-outline-warning.focus {\n    box-shadow: 0 0 0 0.2rem rgba(255, 153, 0, 0.5); }\n  .btn-outline-warning.disabled, .btn-outline-warning:disabled {\n    color: #ff9900;\n    background-color: transparent; }\n  .btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #ff9900;\n    border-color: #ff9900; }\n    .btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-warning.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(255, 153, 0, 0.5); }\n\n.btn-outline-danger {\n  color: #e53e3e;\n  border-color: #e53e3e; }\n  .btn-outline-danger:hover {\n    color: #fff;\n    background-color: #e53e3e;\n    border-color: #e53e3e; }\n  .btn-outline-danger:focus, .btn-outline-danger.focus {\n    box-shadow: 0 0 0 0.2rem rgba(229, 62, 62, 0.5); }\n  .btn-outline-danger.disabled, .btn-outline-danger:disabled {\n    color: #e53e3e;\n    background-color: transparent; }\n  .btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #e53e3e;\n    border-color: #e53e3e; }\n    .btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-danger.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(229, 62, 62, 0.5); }\n\n.btn-outline-light {\n  color: #d9dfe7;\n  border-color: #d9dfe7; }\n  .btn-outline-light:hover {\n    color: #293241;\n    background-color: #d9dfe7;\n    border-color: #d9dfe7; }\n  .btn-outline-light:focus, .btn-outline-light.focus {\n    box-shadow: 0 0 0 0.2rem rgba(217, 223, 231, 0.5); }\n  .btn-outline-light.disabled, .btn-outline-light:disabled {\n    color: #d9dfe7;\n    background-color: transparent; }\n  .btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-light.dropdown-toggle {\n    color: #293241;\n    background-color: #d9dfe7;\n    border-color: #d9dfe7; }\n    .btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-light.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(217, 223, 231, 0.5); }\n\n.btn-outline-dark {\n  color: #080b1e;\n  border-color: #080b1e; }\n  .btn-outline-dark:hover {\n    color: #fff;\n    background-color: #080b1e;\n    border-color: #080b1e; }\n  .btn-outline-dark:focus, .btn-outline-dark.focus {\n    box-shadow: 0 0 0 0.2rem rgba(8, 11, 30, 0.5); }\n  .btn-outline-dark.disabled, .btn-outline-dark:disabled {\n    color: #080b1e;\n    background-color: transparent; }\n  .btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #080b1e;\n    border-color: #080b1e; }\n    .btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-dark.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(8, 11, 30, 0.5); }\n\n.btn-outline-default {\n  color: #293241;\n  border-color: #293241; }\n  .btn-outline-default:hover {\n    color: #fff;\n    background-color: #293241;\n    border-color: #293241; }\n  .btn-outline-default:focus, .btn-outline-default.focus {\n    box-shadow: 0 0 0 0.2rem rgba(41, 50, 65, 0.5); }\n  .btn-outline-default.disabled, .btn-outline-default:disabled {\n    color: #293241;\n    background-color: transparent; }\n  .btn-outline-default:not(:disabled):not(.disabled):active, .btn-outline-default:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-default.dropdown-toggle {\n    color: #fff;\n    background-color: #293241;\n    border-color: #293241; }\n    .btn-outline-default:not(:disabled):not(.disabled):active:focus, .btn-outline-default:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-default.dropdown-toggle:focus {\n      box-shadow: 0 0 0 0.2rem rgba(41, 50, 65, 0.5); }\n\n.btn-link {\n  font-weight: 400;\n  color: #5265cc;\n  text-decoration: none; }\n  .btn-link:hover {\n    color: #3041a2;\n    text-decoration: underline; }\n  .btn-link:focus, .btn-link.focus {\n    text-decoration: underline; }\n  .btn-link:disabled, .btn-link.disabled {\n    color: #6c757d;\n    pointer-events: none; }\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.625rem 1.5rem;\n  font-size: 0.98438rem;\n  line-height: 1.2;\n  border-radius: 0.3rem; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.625rem 1.125rem;\n  font-size: 0.65625rem;\n  line-height: 1.2;\n  border-radius: 0.2rem; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n  .btn-block + .btn-block {\n    margin-top: 0.5rem; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle; }\n  .btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    flex: 1 1 auto; }\n    .btn-group > .btn:hover,\n    .btn-group-vertical > .btn:hover {\n      z-index: 1; }\n    .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 1; }\n\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n  .btn-toolbar .input-group {\n    width: auto; }\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) {\n  margin-left: -1px; }\n\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.dropdown-toggle-split {\n  padding-right: 0.9375rem;\n  padding-left: 0.9375rem; }\n  .dropdown-toggle-split::after,\n  .dropup .dropdown-toggle-split::after,\n  .dropright .dropdown-toggle-split::after {\n    margin-left: 0; }\n  .dropleft .dropdown-toggle-split::before {\n    margin-right: 0; }\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.84375rem;\n  padding-left: 0.84375rem; }\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 1.125rem;\n  padding-left: 1.125rem; }\n\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center; }\n  .btn-group-vertical > .btn,\n  .btn-group-vertical > .btn-group {\n    width: 100%; }\n  .btn-group-vertical > .btn:not(:first-child),\n  .btn-group-vertical > .btn-group:not(:first-child) {\n    margin-top: -1px; }\n  .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n  .btn-group-vertical > .btn-group:not(:last-child) > .btn {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0; }\n  .btn-group-vertical > .btn:not(:first-child),\n  .btn-group-vertical > .btn-group:not(:first-child) > .btn {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n.btn-group-toggle > .btn,\n.btn-group-toggle > .btn-group > .btn {\n  margin-bottom: 0; }\n  .btn-group-toggle > .btn input[type=\"radio\"],\n  .btn-group-toggle > .btn input[type=\"checkbox\"],\n  .btn-group-toggle > .btn-group > .btn input[type=\"radio\"],\n  .btn-group-toggle > .btn-group > .btn input[type=\"checkbox\"] {\n    position: absolute;\n    clip: rect(0, 0, 0, 0);\n    pointer-events: none; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: add(1.2em, add(1.4rem, 2px, false));\n  padding: 0.7rem 0.8rem;\n  font-family: Arial, sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 0.76562rem;\n  font-weight: 400;\n  line-height: 1.2;\n  color: #293241;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #d9dfe7;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media (prefers-reduced-motion: reduce) {\n    .form-control {\n      transition: none; } }\n  .form-control::-ms-expand {\n    background-color: transparent;\n    border: 0; }\n  .form-control:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #293241; }\n  .form-control:focus {\n    color: #293241;\n    background-color: #fafbfc;\n    border-color: #738aec;\n    outline: 0;\n    box-shadow: none; }\n  .form-control::placeholder {\n    color: #c0c9d8;\n    opacity: 1; }\n  .form-control:disabled, .form-control[readonly] {\n    background-color: #e6e9ef;\n    opacity: 1; }\n\ninput[type=\"date\"].form-control,\ninput[type=\"time\"].form-control,\ninput[type=\"datetime-local\"].form-control,\ninput[type=\"month\"].form-control {\n  appearance: none; }\n\nselect.form-control:focus::-ms-value {\n  color: #293241;\n  background-color: #fff; }\n\n.form-control-file,\n.form-control-range {\n  display: block;\n  width: 100%; }\n\n.col-form-label {\n  padding-top: calc(0.7rem + 1px);\n  padding-bottom: calc(0.7rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.2; }\n\n.col-form-label-lg {\n  padding-top: calc(0.625rem + 1px);\n  padding-bottom: calc(0.625rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.2; }\n\n.col-form-label-sm {\n  padding-top: calc(0.437rem + 1px);\n  padding-bottom: calc(0.437rem + 1px);\n  font-size: 0.76562rem;\n  line-height: 1.2; }\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: 0.7rem 0;\n  margin-bottom: 0;\n  font-size: 0.76562rem;\n  line-height: 1.2;\n  color: #293241;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0; }\n  .form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n    padding-right: 0;\n    padding-left: 0; }\n\n.form-control-sm {\n  height: add(1.2em, add(0.874rem, 2px, false));\n  padding: 0.437rem 1rem;\n  font-size: 0.76562rem;\n  line-height: 1.2;\n  border-radius: 0.2rem; }\n\n.form-control-lg {\n  height: add(1.2em, add(1.25rem, 2px, false));\n  padding: 0.625rem 1.375rem;\n  font-size: 0.875rem;\n  line-height: 1.2;\n  border-radius: 0.3rem; }\n\nselect.form-control[size], select.form-control[multiple] {\n  height: auto; }\n\ntextarea.form-control {\n  height: auto; }\n\n.form-group {\n  margin-bottom: 1.25rem; }\n\n.form-text {\n  display: block;\n  margin-top: 0.25rem; }\n\n.form-row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px; }\n  .form-row > .col,\n  .form-row > [class*=\"col-\"] {\n    padding-right: 5px;\n    padding-left: 5px; }\n\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem; }\n\n.form-check-input {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem; }\n  .form-check-input[disabled] ~ .form-check-label,\n  .form-check-input:disabled ~ .form-check-label {\n    color: #6c757d; }\n\n.form-check-label {\n  margin-bottom: 0; }\n\n.form-check-inline {\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem; }\n  .form-check-inline .form-check-input {\n    position: static;\n    margin-top: 0;\n    margin-right: 0.3125rem;\n    margin-left: 0; }\n\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.65625rem;\n  color: #15bd76; }\n\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.65625rem;\n  line-height: 1.2;\n  color: #fff;\n  background-color: rgba(21, 189, 118, 0.9);\n  border-radius: 0.25rem; }\n  .form-row > .col > .valid-tooltip,\n  .form-row > [class*=\"col-\"] > .valid-tooltip {\n    left: 5px; }\n\n.was-validated :valid ~ .valid-feedback,\n.was-validated :valid ~ .valid-tooltip,\n.is-valid ~ .valid-feedback,\n.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .form-control:valid, .form-control.is-valid {\n  border-color: #15bd76;\n  padding-right: add(1.2em, 1.4rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2315bd76' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right add(0.3em, 0.35rem) center;\n  background-size: add(0.6em, 0.7rem) add(0.6em, 0.7rem); }\n  .was-validated .form-control:valid:focus, .form-control.is-valid:focus {\n    border-color: #15bd76;\n    box-shadow: 0 0 0 0.2rem rgba(21, 189, 118, 0.25); }\n\n.was-validated textarea.form-control:valid, textarea.form-control.is-valid {\n  padding-right: add(1.2em, 1.4rem);\n  background-position: top add(0.3em, 0.35rem) right add(0.3em, 0.35rem); }\n\n.was-validated .custom-select:valid, .custom-select.is-valid {\n  border-color: #15bd76;\n  padding-right: add(0.5em, 2.5rem);\n  background: url(\"data:image/svg+xml,<svg width='6' height='13' viewBox='0 0 6 13'  xmlns='http://www.w3.org/2000/svg'><path d='M1 10L3 12L5 10' fill='#343a40' stroke='#66707A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/><path d='M5 3L3 1L1 3' fill='#343a40' stroke='#66707A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>\") no-repeat right 0.8rem center/6px 12px, #fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2315bd76' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") center right 1.8rem/add(0.6em, 0.7rem) add(0.6em, 0.7rem) no-repeat; }\n  .was-validated .custom-select:valid:focus, .custom-select.is-valid:focus {\n    border-color: #15bd76;\n    box-shadow: 0 0 0 0.2rem rgba(21, 189, 118, 0.25); }\n\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #15bd76; }\n\n.was-validated .form-check-input:valid ~ .valid-feedback,\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\n.form-check-input.is-valid ~ .valid-tooltip {\n  display: block; }\n\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\n  color: #15bd76; }\n  .was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\n    border-color: #15bd76; }\n\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n  border-color: #1fe692;\n  background-color: #1fe692; }\n\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(21, 189, 118, 0.25); }\n\n.was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #15bd76; }\n\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\n  border-color: #15bd76; }\n\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\n  border-color: #15bd76;\n  box-shadow: 0 0 0 0.2rem rgba(21, 189, 118, 0.25); }\n\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.65625rem;\n  color: #e53e3e; }\n\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.65625rem;\n  line-height: 1.2;\n  color: #fff;\n  background-color: rgba(229, 62, 62, 0.9);\n  border-radius: 0.25rem; }\n  .form-row > .col > .invalid-tooltip,\n  .form-row > [class*=\"col-\"] > .invalid-tooltip {\n    left: 5px; }\n\n.was-validated :invalid ~ .invalid-feedback,\n.was-validated :invalid ~ .invalid-tooltip,\n.is-invalid ~ .invalid-feedback,\n.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  border-color: #e53e3e;\n  padding-right: add(1.2em, 1.4rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23e53e3e' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23e53e3e' stroke='none'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right add(0.3em, 0.35rem) center;\n  background-size: add(0.6em, 0.7rem) add(0.6em, 0.7rem); }\n  .was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\n    border-color: #e53e3e;\n    box-shadow: 0 0 0 0.2rem rgba(229, 62, 62, 0.25); }\n\n.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {\n  padding-right: add(1.2em, 1.4rem);\n  background-position: top add(0.3em, 0.35rem) right add(0.3em, 0.35rem); }\n\n.was-validated .custom-select:invalid, .custom-select.is-invalid {\n  border-color: #e53e3e;\n  padding-right: add(0.5em, 2.5rem);\n  background: url(\"data:image/svg+xml,<svg width='6' height='13' viewBox='0 0 6 13'  xmlns='http://www.w3.org/2000/svg'><path d='M1 10L3 12L5 10' fill='#343a40' stroke='#66707A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/><path d='M5 3L3 1L1 3' fill='#343a40' stroke='#66707A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>\") no-repeat right 0.8rem center/6px 12px, #fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23e53e3e' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23e53e3e' stroke='none'/%3e%3c/svg%3e\") center right 1.8rem/add(0.6em, 0.7rem) add(0.6em, 0.7rem) no-repeat; }\n  .was-validated .custom-select:invalid:focus, .custom-select.is-invalid:focus {\n    border-color: #e53e3e;\n    box-shadow: 0 0 0 0.2rem rgba(229, 62, 62, 0.25); }\n\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #e53e3e; }\n\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\n.form-check-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\n  color: #e53e3e; }\n  .was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\n    border-color: #e53e3e; }\n\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\n  border-color: #eb6b6b;\n  background-color: #eb6b6b; }\n\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(229, 62, 62, 0.25); }\n\n.was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #e53e3e; }\n\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\n  border-color: #e53e3e; }\n\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\n  border-color: #e53e3e;\n  box-shadow: 0 0 0 0.2rem rgba(229, 62, 62, 0.25); }\n\n.form-inline {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center; }\n  .form-inline .form-check {\n    width: 100%; }\n  @media (min-width: 576px) {\n    .form-inline label {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 0; }\n    .form-inline .form-group {\n      display: flex;\n      flex: 0 0 auto;\n      flex-flow: row wrap;\n      align-items: center;\n      margin-bottom: 0; }\n    .form-inline .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .form-inline .form-control-plaintext {\n      display: inline-block; }\n    .form-inline .input-group,\n    .form-inline .custom-select {\n      width: auto; }\n    .form-inline .form-check {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: auto;\n      padding-left: 0; }\n    .form-inline .form-check-input {\n      position: relative;\n      flex-shrink: 0;\n      margin-top: 0;\n      margin-right: 0.25rem;\n      margin-left: 0; }\n    .form-inline .custom-control {\n      align-items: center;\n      justify-content: center; }\n    .form-inline .custom-control-label {\n      margin-bottom: 0; } }\n\n.dropup,\n.dropright,\n.dropdown,\n.dropleft {\n  position: relative; }\n\n.dropdown-toggle {\n  white-space: nowrap; }\n  .dropdown-toggle::after {\n    display: inline-block;\n    margin-left: 0.255em;\n    vertical-align: 0.255em;\n    content: \"\";\n    border-top: 0.3em solid;\n    border-right: 0.3em solid transparent;\n    border-bottom: 0;\n    border-left: 0.3em solid transparent; }\n  .dropdown-toggle:empty::after {\n    margin-left: 0; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.5rem 0 0;\n  font-size: 0.76562rem;\n  color: #293241;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #d9dfe7;\n  border-radius: 0.25rem; }\n\n.dropdown-menu-left {\n  right: auto;\n  left: 0; }\n\n.dropdown-menu-right {\n  right: 0;\n  left: auto; }\n\n@media (min-width: 576px) {\n  .dropdown-menu-sm-left {\n    right: auto;\n    left: 0; }\n  .dropdown-menu-sm-right {\n    right: 0;\n    left: auto; } }\n\n@media (min-width: 768px) {\n  .dropdown-menu-md-left {\n    right: auto;\n    left: 0; }\n  .dropdown-menu-md-right {\n    right: 0;\n    left: auto; } }\n\n@media (min-width: 992px) {\n  .dropdown-menu-lg-left {\n    right: auto;\n    left: 0; }\n  .dropdown-menu-lg-right {\n    right: 0;\n    left: auto; } }\n\n@media (min-width: 1200px) {\n  .dropdown-menu-xl-left {\n    right: auto;\n    left: 0; }\n  .dropdown-menu-xl-right {\n    right: 0;\n    left: auto; } }\n\n.dropup .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent; }\n\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropright .dropdown-menu {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.5rem; }\n\n.dropright .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid; }\n\n.dropright .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropright .dropdown-toggle::after {\n  vertical-align: 0; }\n\n.dropleft .dropdown-menu {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.5rem; }\n\n.dropleft .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\"; }\n\n.dropleft .dropdown-toggle::after {\n  display: none; }\n\n.dropleft .dropdown-toggle::before {\n  display: inline-block;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent; }\n\n.dropleft .dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropleft .dropdown-toggle::before {\n  vertical-align: 0; }\n\n.dropdown-menu[x-placement^=\"top\"], .dropdown-menu[x-placement^=\"right\"], .dropdown-menu[x-placement^=\"bottom\"], .dropdown-menu[x-placement^=\"left\"] {\n  right: auto;\n  bottom: auto; }\n\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef; }\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.4rem 1.25rem;\n  clear: both;\n  font-weight: 400;\n  color: #293241;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0; }\n  .dropdown-item:hover, .dropdown-item:focus {\n    color: #1f2631;\n    text-decoration: none;\n    background-color: #f2f4f7; }\n  .dropdown-item.active, .dropdown-item:active {\n    color: #fff;\n    text-decoration: none;\n    background-color: #5265cc; }\n  .dropdown-item.disabled, .dropdown-item:disabled {\n    color: #191e2f;\n    pointer-events: none;\n    background-color: transparent; }\n\n.dropdown-menu.show {\n  display: block; }\n\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.25rem;\n  margin-bottom: 0;\n  font-size: 0.65625rem;\n  color: #191e2f;\n  white-space: nowrap; }\n\n.dropdown-item-text {\n  display: block;\n  padding: 0.4rem 1.25rem;\n  color: #293241; }\n\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem; }\n  .nav-link:hover, .nav-link:focus {\n    text-decoration: none; }\n  .nav-link.disabled {\n    color: #6c757d;\n    pointer-events: none;\n    cursor: default; }\n\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6; }\n  .nav-tabs .nav-link {\n    margin-bottom: -1px;\n    border: 1px solid transparent;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n    .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n      border-color: #e9ecef #e9ecef #dee2e6; }\n    .nav-tabs .nav-link.disabled {\n      color: #6c757d;\n      background-color: transparent;\n      border-color: transparent; }\n  .nav-tabs .nav-link.active,\n  .nav-tabs .nav-item.show .nav-link {\n    color: #495057;\n    background-color: #e6e9ef;\n    border-color: #dee2e6 #dee2e6 #e6e9ef; }\n  .nav-tabs .dropdown-menu {\n    margin-top: -1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n.nav-pills .nav-link {\n  border-radius: 0.25rem; }\n\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #5265cc; }\n\n.nav-fill > .nav-link,\n.nav-fill .nav-item {\n  flex: 1 1 auto;\n  text-align: center; }\n\n.nav-justified > .nav-link,\n.nav-justified .nav-item {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center; }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.custom-control {\n  position: relative;\n  z-index: 1;\n  display: block;\n  min-height: 1.05rem;\n  padding-left: 1.5rem;\n  color-adjust: exact; }\n\n.custom-control-inline {\n  display: inline-flex;\n  margin-right: 1rem; }\n\n.custom-control-input {\n  position: absolute;\n  left: 0;\n  z-index: -1;\n  width: 1rem;\n  height: 1.025rem;\n  opacity: 0; }\n  .custom-control-input:checked ~ .custom-control-label::before {\n    color: #fff;\n    border-color: #5265cc;\n    background-color: #5265cc; }\n  .custom-control-input:focus ~ .custom-control-label::before {\n    box-shadow: none; }\n  .custom-control-input:focus:not(:checked) ~ .custom-control-label::before {\n    border-color: #738aec; }\n  .custom-control-input:not(:disabled):active ~ .custom-control-label::before {\n    color: #fff;\n    background-color: #dce0f5;\n    border-color: #dce0f5; }\n  .custom-control-input[disabled] ~ .custom-control-label, .custom-control-input:disabled ~ .custom-control-label {\n    color: #6c757d; }\n    .custom-control-input[disabled] ~ .custom-control-label::before, .custom-control-input:disabled ~ .custom-control-label::before {\n      background-color: #e6e9ef; }\n\n.custom-control-label {\n  position: relative;\n  margin-bottom: 0;\n  vertical-align: top; }\n  .custom-control-label::before {\n    position: absolute;\n    top: 0.025rem;\n    left: -1.5rem;\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    pointer-events: none;\n    content: \"\";\n    background-color: #fff;\n    border: #adb5bd solid 1px; }\n  .custom-control-label::after {\n    position: absolute;\n    top: 0.025rem;\n    left: -1.5rem;\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    content: \"\";\n    background: 50% / 50% 50% no-repeat; }\n\n.custom-checkbox .custom-control-label::before {\n  border-radius: 0.25rem; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e\"); }\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\n  border-color: #5265cc;\n  background-color: #5265cc; }\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\"); }\n\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(82, 101, 204, 0.5); }\n\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\n  background-color: rgba(82, 101, 204, 0.5); }\n\n.custom-radio .custom-control-label::before {\n  border-radius: 50%; }\n\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\"); }\n\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(82, 101, 204, 0.5); }\n\n.custom-switch {\n  padding-left: 2.25rem; }\n  .custom-switch .custom-control-label::before {\n    left: -2.25rem;\n    width: 1.75rem;\n    pointer-events: all;\n    border-radius: 0.5rem; }\n  .custom-switch .custom-control-label::after {\n    top: calc(0.025rem + 2px);\n    left: calc(-2.25rem + 2px);\n    width: subtract(1rem, 4px);\n    height: subtract(1rem, 4px);\n    background-color: #adb5bd;\n    border-radius: 0.5rem;\n    transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n    @media (prefers-reduced-motion: reduce) {\n      .custom-switch .custom-control-label::after {\n        transition: none; } }\n  .custom-switch .custom-control-input:checked ~ .custom-control-label::after {\n    background-color: #fff;\n    transform: translateX(0.75rem); }\n  .custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before {\n    background-color: rgba(82, 101, 204, 0.5); }\n\n.custom-select {\n  display: inline-block;\n  width: 100%;\n  height: add(1.2em, add(1.4rem, 2px, false));\n  padding: 0.7rem 1.8rem 0.7rem 0.8rem;\n  font-family: Arial, sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 0.76562rem;\n  font-weight: 400;\n  line-height: 1.2;\n  color: #293241;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml,<svg width='6' height='13' viewBox='0 0 6 13'  xmlns='http://www.w3.org/2000/svg'><path d='M1 10L3 12L5 10' fill='#343a40' stroke='#66707A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/><path d='M5 3L3 1L1 3' fill='#343a40' stroke='#66707A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>\") no-repeat right 0.8rem center/6px 12px;\n  border: 1px solid #d9dfe7;\n  border-radius: 0.25rem;\n  appearance: none; }\n  .custom-select:focus {\n    border-color: #738aec;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(82, 101, 204, 0.25); }\n    .custom-select:focus::-ms-value {\n      color: #293241;\n      background-color: #fff; }\n  .custom-select[multiple], .custom-select[size]:not([size=\"1\"]) {\n    height: auto;\n    padding-right: 0.8rem;\n    background-image: none; }\n  .custom-select:disabled {\n    color: #6c757d;\n    background-color: #e9ecef; }\n  .custom-select::-ms-expand {\n    display: none; }\n  .custom-select:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #293241; }\n\n.custom-select-sm {\n  height: add(1.2em, add(0.874rem, 2px, false));\n  padding-top: 0.437rem;\n  padding-bottom: 0.437rem;\n  padding-left: 1rem;\n  font-size: 0.76562rem; }\n\n.custom-select-lg {\n  height: add(1.2em, add(1.25rem, 2px, false));\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  padding-left: 1.375rem;\n  font-size: 0.875rem; }\n\n.custom-file {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: add(1.2em, add(1.4rem, 2px, false));\n  margin-bottom: 0; }\n\n.custom-file-input {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: add(1.2em, add(1.4rem, 2px, false));\n  margin: 0;\n  overflow: hidden;\n  opacity: 0; }\n  .custom-file-input:focus ~ .custom-file-label {\n    border-color: #738aec;\n    box-shadow: none; }\n  .custom-file-input[disabled] ~ .custom-file-label,\n  .custom-file-input:disabled ~ .custom-file-label {\n    background-color: #e6e9ef; }\n  .custom-file-input:lang(en) ~ .custom-file-label::after {\n    content: \"Browse\"; }\n  .custom-file-input ~ .custom-file-label[data-browse]::after {\n    content: attr(data-browse); }\n\n.custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: add(1.2em, add(1.4rem, 2px, false));\n  padding: 0.7rem 0.8rem;\n  overflow: hidden;\n  font-family: Arial, sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-weight: 400;\n  line-height: 1.2;\n  color: #293241;\n  background-color: #fff;\n  border: 1px solid #d9dfe7;\n  border-radius: 0.25rem; }\n  .custom-file-label::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 3;\n    display: block;\n    height: add(1.2em, 1.4rem);\n    padding: 0.7rem 0.8rem;\n    line-height: 1.2;\n    color: #293241;\n    content: \"Browse\";\n    background-color: #e9ecef;\n    border-left: inherit;\n    border-radius: 0 0.25rem 0.25rem 0; }\n\n.custom-range {\n  width: 100%;\n  height: 1.4rem;\n  padding: 0;\n  background-color: transparent;\n  appearance: none; }\n  .custom-range:focus {\n    outline: 0; }\n    .custom-range:focus::-webkit-slider-thumb {\n      box-shadow: 0 0 0 1px #293241, none; }\n    .custom-range:focus::-moz-range-thumb {\n      box-shadow: 0 0 0 1px #293241, none; }\n    .custom-range:focus::-ms-thumb {\n      box-shadow: 0 0 0 1px #293241, none; }\n  .custom-range::-moz-focus-outer {\n    border: 0; }\n  .custom-range::-webkit-slider-thumb {\n    width: 1rem;\n    height: 1rem;\n    margin-top: -0.25rem;\n    background-color: #5265cc;\n    border: 0;\n    border-radius: 1rem;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    appearance: none; }\n    @media (prefers-reduced-motion: reduce) {\n      .custom-range::-webkit-slider-thumb {\n        transition: none; } }\n    .custom-range::-webkit-slider-thumb:active {\n      background-color: #dce0f5; }\n  .custom-range::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: #dee2e6;\n    border-color: transparent;\n    border-radius: 1rem; }\n  .custom-range::-moz-range-thumb {\n    width: 1rem;\n    height: 1rem;\n    background-color: #5265cc;\n    border: 0;\n    border-radius: 1rem;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    appearance: none; }\n    @media (prefers-reduced-motion: reduce) {\n      .custom-range::-moz-range-thumb {\n        transition: none; } }\n    .custom-range::-moz-range-thumb:active {\n      background-color: #dce0f5; }\n  .custom-range::-moz-range-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: #dee2e6;\n    border-color: transparent;\n    border-radius: 1rem; }\n  .custom-range::-ms-thumb {\n    width: 1rem;\n    height: 1rem;\n    margin-top: 0;\n    margin-right: 0.2rem;\n    margin-left: 0.2rem;\n    background-color: #5265cc;\n    border: 0;\n    border-radius: 1rem;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    appearance: none; }\n    @media (prefers-reduced-motion: reduce) {\n      .custom-range::-ms-thumb {\n        transition: none; } }\n    .custom-range::-ms-thumb:active {\n      background-color: #dce0f5; }\n  .custom-range::-ms-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: transparent;\n    border-color: transparent;\n    border-width: 0.5rem; }\n  .custom-range::-ms-fill-lower {\n    background-color: #dee2e6;\n    border-radius: 1rem; }\n  .custom-range::-ms-fill-upper {\n    margin-right: 15px;\n    background-color: #dee2e6;\n    border-radius: 1rem; }\n  .custom-range:disabled::-webkit-slider-thumb {\n    background-color: #adb5bd; }\n  .custom-range:disabled::-webkit-slider-runnable-track {\n    cursor: default; }\n  .custom-range:disabled::-moz-range-thumb {\n    background-color: #adb5bd; }\n  .custom-range:disabled::-moz-range-track {\n    cursor: default; }\n  .custom-range:disabled::-ms-thumb {\n    background-color: #adb5bd; }\n\n.custom-control-label::before,\n.custom-file-label,\n.custom-select {\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media (prefers-reduced-motion: reduce) {\n    .custom-control-label::before,\n    .custom-file-label,\n    .custom-select {\n      transition: none; } }\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #f2f4f7;\n  background-clip: border-box;\n  border: 1px solid #d9dfe7;\n  border-radius: 0.25rem; }\n  .card > hr {\n    margin-right: 0;\n    margin-left: 0; }\n  .card > .list-group {\n    border-top: inherit;\n    border-bottom: inherit; }\n    .card > .list-group:first-child {\n      border-top-width: 0;\n      border-top-left-radius: subtract(0.25rem, 1px);\n      border-top-right-radius: subtract(0.25rem, 1px); }\n    .card > .list-group:last-child {\n      border-bottom-width: 0;\n      border-bottom-right-radius: subtract(0.25rem, 1px);\n      border-bottom-left-radius: subtract(0.25rem, 1px); }\n  .card > .card-header + .list-group,\n  .card > .list-group + .card-footer {\n    border-top: 0; }\n\n.card-body {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 1.875rem;\n  color: #293241; }\n\n.card-title {\n  margin-bottom: 0.3rem; }\n\n.card-subtitle {\n  margin-top: -0.15rem;\n  margin-bottom: 0; }\n\n.card-text:last-child {\n  margin-bottom: 0; }\n\n.card-link:hover {\n  text-decoration: none; }\n\n.card-link + .card-link {\n  margin-left: 1.875rem; }\n\n.card-header {\n  padding: 0.3rem 1.875rem;\n  margin-bottom: 0;\n  color: #293241;\n  background-color: #f2f4f7;\n  border-bottom: 1px solid #d9dfe7; }\n  .card-header:first-child {\n    border-radius: subtract(0.25rem, 1px) subtract(0.25rem, 1px) 0 0; }\n\n.card-footer {\n  padding: 0.3rem 1.875rem;\n  color: #293241;\n  background-color: #f2f4f7;\n  border-top: 1px solid #d9dfe7; }\n  .card-footer:last-child {\n    border-radius: 0 0 subtract(0.25rem, 1px) subtract(0.25rem, 1px); }\n\n.card-header-tabs {\n  margin-right: -0.9375rem;\n  margin-bottom: -0.3rem;\n  margin-left: -0.9375rem;\n  border-bottom: 0; }\n\n.card-header-pills {\n  margin-right: -0.9375rem;\n  margin-left: -0.9375rem; }\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem;\n  border-radius: subtract(0.25rem, 1px); }\n\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  flex-shrink: 0;\n  width: 100%; }\n\n.card-img,\n.card-img-top {\n  border-top-left-radius: subtract(0.25rem, 1px);\n  border-top-right-radius: subtract(0.25rem, 1px); }\n\n.card-img,\n.card-img-bottom {\n  border-bottom-right-radius: subtract(0.25rem, 1px);\n  border-bottom-left-radius: subtract(0.25rem, 1px); }\n\n.card-deck .card {\n  margin-bottom: 15px; }\n\n@media (min-width: 576px) {\n  .card-deck {\n    display: flex;\n    flex-flow: row wrap;\n    margin-right: -15px;\n    margin-left: -15px; }\n    .card-deck .card {\n      flex: 1 0 0%;\n      margin-right: 15px;\n      margin-bottom: 0;\n      margin-left: 15px; } }\n\n.card-group > .card {\n  margin-bottom: 15px; }\n\n@media (min-width: 576px) {\n  .card-group {\n    display: flex;\n    flex-flow: row wrap; }\n    .card-group > .card {\n      flex: 1 0 0%;\n      margin-bottom: 0; }\n      .card-group > .card + .card {\n        margin-left: 0;\n        border-left: 0; }\n      .card-group > .card:not(:last-child) {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0; }\n        .card-group > .card:not(:last-child) .card-img-top,\n        .card-group > .card:not(:last-child) .card-header {\n          border-top-right-radius: 0; }\n        .card-group > .card:not(:last-child) .card-img-bottom,\n        .card-group > .card:not(:last-child) .card-footer {\n          border-bottom-right-radius: 0; }\n      .card-group > .card:not(:first-child) {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0; }\n        .card-group > .card:not(:first-child) .card-img-top,\n        .card-group > .card:not(:first-child) .card-header {\n          border-top-left-radius: 0; }\n        .card-group > .card:not(:first-child) .card-img-bottom,\n        .card-group > .card:not(:first-child) .card-footer {\n          border-bottom-left-radius: 0; } }\n\n.card-columns .card {\n  margin-bottom: 0.3rem; }\n\n@media (min-width: 576px) {\n  .card-columns {\n    column-count: 3;\n    column-gap: 1.25rem;\n    orphans: 1;\n    widows: 1; }\n    .card-columns .card {\n      display: inline-block;\n      width: 100%; } }\n\n.accordion {\n  overflow-anchor: none; }\n  .accordion > .card {\n    overflow: hidden; }\n    .accordion > .card:not(:last-of-type) {\n      border-bottom: 0;\n      border-bottom-right-radius: 0;\n      border-bottom-left-radius: 0; }\n    .accordion > .card:not(:first-of-type) {\n      border-top-left-radius: 0;\n      border-top-right-radius: 0; }\n    .accordion > .card > .card-header {\n      border-radius: 0;\n      margin-bottom: -1px; }\n\n.table {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #293241;\n  background-color: #fff; }\n  .table th,\n  .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #d9dfe7; }\n  .table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #d9dfe7; }\n  .table tbody + tbody {\n    border-top: 2px solid #d9dfe7; }\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n\n.table-bordered {\n  border: 1px solid #d9dfe7; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #d9dfe7; }\n  .table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n\n.table-borderless th,\n.table-borderless td,\n.table-borderless thead th,\n.table-borderless tbody + tbody {\n  border: 0; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.table-hover tbody tr:hover {\n  color: #293241;\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #cfd4f1; }\n\n.table-primary th,\n.table-primary td,\n.table-primary thead th,\n.table-primary tbody + tbody {\n  border-color: #a5afe4; }\n\n.table-hover .table-primary:hover {\n  background-color: #bbc2eb; }\n  .table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th {\n    background-color: #bbc2eb; }\n\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #d6d8db; }\n\n.table-secondary th,\n.table-secondary td,\n.table-secondary thead th,\n.table-secondary tbody + tbody {\n  border-color: #b3b7bb; }\n\n.table-hover .table-secondary:hover {\n  background-color: #c8cbcf; }\n  .table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th {\n    background-color: #c8cbcf; }\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #bdedd9; }\n\n.table-success th,\n.table-success td,\n.table-success thead th,\n.table-success tbody + tbody {\n  border-color: #85ddb8; }\n\n.table-hover .table-success:hover {\n  background-color: #a9e8cd; }\n  .table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #a9e8cd; }\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #dce1e9; }\n\n.table-info th,\n.table-info td,\n.table-info thead th,\n.table-info tbody + tbody {\n  border-color: #bec7d6; }\n\n.table-hover .table-info:hover {\n  background-color: #ccd4df; }\n  .table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #ccd4df; }\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffe2b8; }\n\n.table-warning th,\n.table-warning td,\n.table-warning thead th,\n.table-warning tbody + tbody {\n  border-color: #ffca7a; }\n\n.table-hover .table-warning:hover {\n  background-color: #ffd89f; }\n  .table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #ffd89f; }\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f8c9c9; }\n\n.table-danger th,\n.table-danger td,\n.table-danger thead th,\n.table-danger tbody + tbody {\n  border-color: #f19b9b; }\n\n.table-hover .table-danger:hover {\n  background-color: #f5b2b2; }\n  .table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #f5b2b2; }\n\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #f4f6f8; }\n\n.table-light th,\n.table-light td,\n.table-light thead th,\n.table-light tbody + tbody {\n  border-color: #ebeef3; }\n\n.table-hover .table-light:hover {\n  background-color: #e4e9ee; }\n  .table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th {\n    background-color: #e4e9ee; }\n\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #babbc0; }\n\n.table-dark th,\n.table-dark td,\n.table-dark thead th,\n.table-dark tbody + tbody {\n  border-color: #7f808a; }\n\n.table-hover .table-dark:hover {\n  background-color: #adaeb4; }\n  .table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th {\n    background-color: #adaeb4; }\n\n.table-default,\n.table-default > th,\n.table-default > td {\n  background-color: #c3c6ca; }\n\n.table-default th,\n.table-default td,\n.table-default thead th,\n.table-default tbody + tbody {\n  border-color: #90949c; }\n\n.table-hover .table-default:hover {\n  background-color: #b5b9be; }\n  .table-hover .table-default:hover > td,\n  .table-hover .table-default:hover > th {\n    background-color: #b5b9be; }\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n  .table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075); }\n\n.table .thead-dark th {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #454d55; }\n\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #d9dfe7; }\n\n.table-dark {\n  color: #fff;\n  background-color: #343a40; }\n  .table-dark th,\n  .table-dark td,\n  .table-dark thead th {\n    border-color: #454d55; }\n  .table-dark.table-bordered {\n    border: 0; }\n  .table-dark.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n  .table-dark.table-hover tbody tr:hover {\n    color: #fff;\n    background-color: rgba(255, 255, 255, 0.075); }\n\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n    .table-responsive-sm > .table-bordered {\n      border: 0; } }\n\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n    .table-responsive-md > .table-bordered {\n      border: 0; } }\n\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n    .table-responsive-lg > .table-bordered {\n      border: 0; } }\n\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n    .table-responsive-xl > .table-bordered {\n      border: 0; } }\n\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch; }\n  .table-responsive > .table-bordered {\n    border: 0; }\n\n.list-group {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  border-radius: 0.25rem; }\n\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit; }\n  .list-group-item-action:hover, .list-group-item-action:focus {\n    z-index: 1;\n    color: #495057;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n  .list-group-item-action:active {\n    color: #212529;\n    background-color: #e9ecef; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125); }\n  .list-group-item:first-child {\n    border-top-left-radius: inherit;\n    border-top-right-radius: inherit; }\n  .list-group-item:last-child {\n    border-bottom-right-radius: inherit;\n    border-bottom-left-radius: inherit; }\n  .list-group-item.disabled, .list-group-item:disabled {\n    color: #6c757d;\n    pointer-events: none;\n    background-color: #fff; }\n  .list-group-item.active {\n    z-index: 2;\n    color: #fff;\n    background-color: #5265cc;\n    border-color: #5265cc; }\n  .list-group-item + .list-group-item {\n    border-top-width: 0; }\n    .list-group-item + .list-group-item.active {\n      margin-top: -1px;\n      border-top-width: 1px; }\n\n.list-group-horizontal {\n  flex-direction: row; }\n  .list-group-horizontal > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0; }\n  .list-group-horizontal > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0; }\n  .list-group-horizontal > .list-group-item.active {\n    margin-top: 0; }\n  .list-group-horizontal > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0; }\n    .list-group-horizontal > .list-group-item + .list-group-item.active {\n      margin-left: -1px;\n      border-left-width: 1px; }\n\n@media (min-width: 576px) {\n  .list-group-horizontal-sm {\n    flex-direction: row; }\n    .list-group-horizontal-sm > .list-group-item:first-child {\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal-sm > .list-group-item:last-child {\n      border-top-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n    .list-group-horizontal-sm > .list-group-item.active {\n      margin-top: 0; }\n    .list-group-horizontal-sm > .list-group-item + .list-group-item {\n      border-top-width: 1px;\n      border-left-width: 0; }\n      .list-group-horizontal-sm > .list-group-item + .list-group-item.active {\n        margin-left: -1px;\n        border-left-width: 1px; } }\n\n@media (min-width: 768px) {\n  .list-group-horizontal-md {\n    flex-direction: row; }\n    .list-group-horizontal-md > .list-group-item:first-child {\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal-md > .list-group-item:last-child {\n      border-top-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n    .list-group-horizontal-md > .list-group-item.active {\n      margin-top: 0; }\n    .list-group-horizontal-md > .list-group-item + .list-group-item {\n      border-top-width: 1px;\n      border-left-width: 0; }\n      .list-group-horizontal-md > .list-group-item + .list-group-item.active {\n        margin-left: -1px;\n        border-left-width: 1px; } }\n\n@media (min-width: 992px) {\n  .list-group-horizontal-lg {\n    flex-direction: row; }\n    .list-group-horizontal-lg > .list-group-item:first-child {\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal-lg > .list-group-item:last-child {\n      border-top-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n    .list-group-horizontal-lg > .list-group-item.active {\n      margin-top: 0; }\n    .list-group-horizontal-lg > .list-group-item + .list-group-item {\n      border-top-width: 1px;\n      border-left-width: 0; }\n      .list-group-horizontal-lg > .list-group-item + .list-group-item.active {\n        margin-left: -1px;\n        border-left-width: 1px; } }\n\n@media (min-width: 1200px) {\n  .list-group-horizontal-xl {\n    flex-direction: row; }\n    .list-group-horizontal-xl > .list-group-item:first-child {\n      border-bottom-left-radius: 0.25rem;\n      border-top-right-radius: 0; }\n    .list-group-horizontal-xl > .list-group-item:last-child {\n      border-top-right-radius: 0.25rem;\n      border-bottom-left-radius: 0; }\n    .list-group-horizontal-xl > .list-group-item.active {\n      margin-top: 0; }\n    .list-group-horizontal-xl > .list-group-item + .list-group-item {\n      border-top-width: 1px;\n      border-left-width: 0; }\n      .list-group-horizontal-xl > .list-group-item + .list-group-item.active {\n        margin-left: -1px;\n        border-left-width: 1px; } }\n\n.list-group-flush {\n  border-radius: 0; }\n  .list-group-flush > .list-group-item {\n    border-width: 0 0 1px; }\n    .list-group-flush > .list-group-item:last-child {\n      border-bottom-width: 0; }\n\n.list-group-item-primary {\n  color: #2b356a;\n  background-color: #cfd4f1; }\n  .list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n    color: #2b356a;\n    background-color: #bbc2eb; }\n  .list-group-item-primary.list-group-item-action.active {\n    color: #fff;\n    background-color: #2b356a;\n    border-color: #2b356a; }\n\n.list-group-item-secondary {\n  color: #383d41;\n  background-color: #d6d8db; }\n  .list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n    color: #383d41;\n    background-color: #c8cbcf; }\n  .list-group-item-secondary.list-group-item-action.active {\n    color: #fff;\n    background-color: #383d41;\n    border-color: #383d41; }\n\n.list-group-item-success {\n  color: #0b623d;\n  background-color: #bdedd9; }\n  .list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n    color: #0b623d;\n    background-color: #a9e8cd; }\n  .list-group-item-success.list-group-item-action.active {\n    color: #fff;\n    background-color: #0b623d;\n    border-color: #0b623d; }\n\n.list-group-item-info {\n  color: #444c5c;\n  background-color: #dce1e9; }\n  .list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n    color: #444c5c;\n    background-color: #ccd4df; }\n  .list-group-item-info.list-group-item-action.active {\n    color: #fff;\n    background-color: #444c5c;\n    border-color: #444c5c; }\n\n.list-group-item-warning {\n  color: #855000;\n  background-color: #ffe2b8; }\n  .list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n    color: #855000;\n    background-color: #ffd89f; }\n  .list-group-item-warning.list-group-item-action.active {\n    color: #fff;\n    background-color: #855000;\n    border-color: #855000; }\n\n.list-group-item-danger {\n  color: #772020;\n  background-color: #f8c9c9; }\n  .list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n    color: #772020;\n    background-color: #f5b2b2; }\n  .list-group-item-danger.list-group-item-action.active {\n    color: #fff;\n    background-color: #772020;\n    border-color: #772020; }\n\n.list-group-item-light {\n  color: #717478;\n  background-color: #f4f6f8; }\n  .list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n    color: #717478;\n    background-color: #e4e9ee; }\n  .list-group-item-light.list-group-item-action.active {\n    color: #fff;\n    background-color: #717478;\n    border-color: #717478; }\n\n.list-group-item-dark {\n  color: #040610;\n  background-color: #babbc0; }\n  .list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n    color: #040610;\n    background-color: #adaeb4; }\n  .list-group-item-dark.list-group-item-action.active {\n    color: #fff;\n    background-color: #040610;\n    border-color: #040610; }\n\n.list-group-item-default {\n  color: #151a22;\n  background-color: #c3c6ca; }\n  .list-group-item-default.list-group-item-action:hover, .list-group-item-default.list-group-item-action:focus {\n    color: #151a22;\n    background-color: #b5b9be; }\n  .list-group-item-default.list-group-item-action.active {\n    color: #fff;\n    background-color: #151a22;\n    border-color: #151a22; }\n\n.modal-open {\n  overflow: hidden; }\n  .modal-open .modal {\n    overflow-x: hidden;\n    overflow-y: auto; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none; }\n  .modal.fade .modal-dialog {\n    transition: transform 0.3s ease-out;\n    transform: translate(0, -50px); }\n    @media (prefers-reduced-motion: reduce) {\n      .modal.fade .modal-dialog {\n        transition: none; } }\n  .modal.show .modal-dialog {\n    transform: none; }\n  .modal.modal-static .modal-dialog {\n    transform: scale(1.02); }\n\n.modal-dialog-scrollable {\n  display: flex;\n  max-height: calc(100% - 1rem); }\n  .modal-dialog-scrollable .modal-content {\n    max-height: calc(100vh - 1rem);\n    overflow: hidden; }\n  .modal-dialog-scrollable .modal-header,\n  .modal-dialog-scrollable .modal-footer {\n    flex-shrink: 0; }\n  .modal-dialog-scrollable .modal-body {\n    overflow-y: auto; }\n\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - 1rem); }\n  .modal-dialog-centered::before {\n    display: block;\n    height: calc(100vh - 1rem);\n    height: min-content;\n    content: \"\"; }\n  .modal-dialog-centered.modal-dialog-scrollable {\n    flex-direction: column;\n    justify-content: center;\n    height: 100%; }\n    .modal-dialog-centered.modal-dialog-scrollable .modal-content {\n      max-height: none; }\n    .modal-dialog-centered.modal-dialog-scrollable::before {\n      content: none; }\n\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #d9dfe7;\n  border-radius: 0.25rem;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0; }\n  .modal-backdrop.show {\n    opacity: 0.5; }\n\n.modal-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 2rem 2rem;\n  border-bottom: 1px solid #fff;\n  border-top-left-radius: subtract(0.25rem, 1px);\n  border-top-right-radius: subtract(0.25rem, 1px); }\n  .modal-header .close {\n    padding: 2rem 2rem;\n    margin: -2rem -2rem -2rem auto; }\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.2; }\n\n.modal-body {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 1rem 2rem 2rem; }\n\n.modal-footer {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 1rem 2rem 2rem-0.25rem;\n  border-top: 1px solid #d9dfe7;\n  border-bottom-right-radius: subtract(0.25rem, 1px);\n  border-bottom-left-radius: subtract(0.25rem, 1px); }\n  .modal-footer > * {\n    margin: 0.25rem; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto; }\n  .modal-dialog-scrollable {\n    max-height: calc(100% - 3.5rem); }\n    .modal-dialog-scrollable .modal-content {\n      max-height: calc(100vh - 3.5rem); }\n  .modal-dialog-centered {\n    min-height: calc(100% - 3.5rem); }\n    .modal-dialog-centered::before {\n      height: calc(100vh - 3.5rem);\n      height: min-content; }\n  .modal-sm {\n    max-width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg,\n  .modal-xl {\n    max-width: 800px; } }\n\n@media (min-width: 1200px) {\n  .modal-xl {\n    max-width: 980px; } }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: Arial, sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.2;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.65625rem;\n  word-wrap: break-word;\n  opacity: 0; }\n  .tooltip.show {\n    opacity: 0.9; }\n  .tooltip .arrow {\n    position: absolute;\n    display: block;\n    width: 0.8rem;\n    height: 0.4rem; }\n    .tooltip .arrow::before {\n      position: absolute;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n\n.bs-tooltip-top, .bs-tooltip-auto[x-placement^=\"top\"] {\n  padding: 0.4rem 0; }\n  .bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^=\"top\"] .arrow {\n    bottom: 0; }\n    .bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^=\"top\"] .arrow::before {\n      top: 0;\n      border-width: 0.4rem 0.4rem 0;\n      border-top-color: #000; }\n\n.bs-tooltip-right, .bs-tooltip-auto[x-placement^=\"right\"] {\n  padding: 0 0.4rem; }\n  .bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^=\"right\"] .arrow {\n    left: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n    .bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^=\"right\"] .arrow::before {\n      right: 0;\n      border-width: 0.4rem 0.4rem 0.4rem 0;\n      border-right-color: #000; }\n\n.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^=\"bottom\"] {\n  padding: 0.4rem 0; }\n  .bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow {\n    top: 0; }\n    .bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before {\n      bottom: 0;\n      border-width: 0 0.4rem 0.4rem;\n      border-bottom-color: #000; }\n\n.bs-tooltip-left, .bs-tooltip-auto[x-placement^=\"left\"] {\n  padding: 0 0.4rem; }\n  .bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^=\"left\"] .arrow {\n    right: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n    .bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^=\"left\"] .arrow::before {\n      left: 0;\n      border-width: 0.4rem 0 0.4rem 0.4rem;\n      border-left-color: #000; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 0.32rem 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  display: flex;\n  height: 0.32rem;\n  overflow: hidden;\n  line-height: 0;\n  font-size: 0.65625rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: theme-color(\"primary\");\n  transition: width 0.6s ease; }\n  @media (prefers-reduced-motion: reduce) {\n    .progress-bar {\n      transition: none; } }\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 0.32rem 0.32rem; }\n\n.progress-bar-animated {\n  animation: 1s linear infinite progress-bar-stripes; }\n  @media (prefers-reduced-motion: reduce) {\n    .progress-bar-animated {\n      animation: none; } }\n\n.badge {\n  display: inline-block;\n  padding: 0.3rem 0.8rem;\n  font-size: 0.68688rem;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media (prefers-reduced-motion: reduce) {\n    .badge {\n      transition: none; } }\n  a.badge:hover, a.badge:focus {\n    text-decoration: none; }\n  .badge:empty {\n    display: none; }\n\n.btn .badge {\n  position: relative;\n  top: -1px; }\n\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem; }\n\n.badge-primary {\n  color: #fff;\n  background-color: #5265cc; }\n  a.badge-primary:hover, a.badge-primary:focus {\n    color: #fff;\n    background-color: #3649b5; }\n  a.badge-primary:focus, a.badge-primary.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(82, 101, 204, 0.5); }\n\n.badge-secondary {\n  color: #fff;\n  background-color: #6c757d; }\n  a.badge-secondary:hover, a.badge-secondary:focus {\n    color: #fff;\n    background-color: #545b62; }\n  a.badge-secondary:focus, a.badge-secondary.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n\n.badge-success {\n  color: #fff;\n  background-color: #15bd76; }\n  a.badge-success:hover, a.badge-success:focus {\n    color: #fff;\n    background-color: #108f59; }\n  a.badge-success:focus, a.badge-success.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(21, 189, 118, 0.5); }\n\n.badge-info {\n  color: #fff;\n  background-color: #8293b0; }\n  a.badge-info:hover, a.badge-info:focus {\n    color: #fff;\n    background-color: #63789c; }\n  a.badge-info:focus, a.badge-info.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(130, 147, 176, 0.5); }\n\n.badge-warning {\n  color: #fff;\n  background-color: #ff9900; }\n  a.badge-warning:hover, a.badge-warning:focus {\n    color: #fff;\n    background-color: #cc7a00; }\n  a.badge-warning:focus, a.badge-warning.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(255, 153, 0, 0.5); }\n\n.badge-danger {\n  color: #fff;\n  background-color: #e53e3e; }\n  a.badge-danger:hover, a.badge-danger:focus {\n    color: #fff;\n    background-color: #d41c1c; }\n  a.badge-danger:focus, a.badge-danger.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(229, 62, 62, 0.5); }\n\n.badge-light {\n  color: #293241;\n  background-color: #d9dfe7; }\n  a.badge-light:hover, a.badge-light:focus {\n    color: #293241;\n    background-color: #bac5d3; }\n  a.badge-light:focus, a.badge-light.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(217, 223, 231, 0.5); }\n\n.badge-dark {\n  color: #fff;\n  background-color: #080b1e; }\n  a.badge-dark:hover, a.badge-dark:focus {\n    color: #fff;\n    background-color: black; }\n  a.badge-dark:focus, a.badge-dark.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(8, 11, 30, 0.5); }\n\n.badge-default {\n  color: #fff;\n  background-color: #293241; }\n  a.badge-default:hover, a.badge-default:focus {\n    color: #fff;\n    background-color: #151a22; }\n  a.badge-default:focus, a.badge-default.focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(41, 50, 65, 0.5); }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 287px;\n  font-family: Arial, sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.2;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.65625rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #d9dfe7;\n  border-radius: 0.25rem; }\n  .popover .arrow {\n    position: absolute;\n    display: block;\n    width: 1rem;\n    height: 0.5rem;\n    margin: 0 0.25rem; }\n    .popover .arrow::before, .popover .arrow::after {\n      position: absolute;\n      display: block;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n\n.bs-popover-top, .bs-popover-auto[x-placement^=\"top\"] {\n  margin-bottom: 0.5rem; }\n  .bs-popover-top > .arrow, .bs-popover-auto[x-placement^=\"top\"] > .arrow {\n    bottom: calc(-0.5rem - 1px); }\n    .bs-popover-top > .arrow::before, .bs-popover-auto[x-placement^=\"top\"] > .arrow::before {\n      bottom: 0;\n      border-width: 0.5rem 0.5rem 0;\n      border-top-color: #d9dfe7; }\n    .bs-popover-top > .arrow::after, .bs-popover-auto[x-placement^=\"top\"] > .arrow::after {\n      bottom: 1px;\n      border-width: 0.5rem 0.5rem 0;\n      border-top-color: #fff; }\n\n.bs-popover-right, .bs-popover-auto[x-placement^=\"right\"] {\n  margin-left: 0.5rem; }\n  .bs-popover-right > .arrow, .bs-popover-auto[x-placement^=\"right\"] > .arrow {\n    left: calc(-0.5rem - 1px);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0.25rem 0; }\n    .bs-popover-right > .arrow::before, .bs-popover-auto[x-placement^=\"right\"] > .arrow::before {\n      left: 0;\n      border-width: 0.5rem 0.5rem 0.5rem 0;\n      border-right-color: #d9dfe7; }\n    .bs-popover-right > .arrow::after, .bs-popover-auto[x-placement^=\"right\"] > .arrow::after {\n      left: 1px;\n      border-width: 0.5rem 0.5rem 0.5rem 0;\n      border-right-color: #fff; }\n\n.bs-popover-bottom, .bs-popover-auto[x-placement^=\"bottom\"] {\n  margin-top: 0.5rem; }\n  .bs-popover-bottom > .arrow, .bs-popover-auto[x-placement^=\"bottom\"] > .arrow {\n    top: calc(-0.5rem - 1px); }\n    .bs-popover-bottom > .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] > .arrow::before {\n      top: 0;\n      border-width: 0 0.5rem 0.5rem 0.5rem;\n      border-bottom-color: #d9dfe7; }\n    .bs-popover-bottom > .arrow::after, .bs-popover-auto[x-placement^=\"bottom\"] > .arrow::after {\n      top: 1px;\n      border-width: 0 0.5rem 0.5rem 0.5rem;\n      border-bottom-color: #fff; }\n  .bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: 1rem;\n    margin-left: -0.5rem;\n    content: \"\";\n    border-bottom: 1px solid #5265cc; }\n\n.bs-popover-left, .bs-popover-auto[x-placement^=\"left\"] {\n  margin-right: 0.5rem; }\n  .bs-popover-left > .arrow, .bs-popover-auto[x-placement^=\"left\"] > .arrow {\n    right: calc(-0.5rem - 1px);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0.25rem 0; }\n    .bs-popover-left > .arrow::before, .bs-popover-auto[x-placement^=\"left\"] > .arrow::before {\n      right: 0;\n      border-width: 0.5rem 0 0.5rem 0.5rem;\n      border-left-color: #d9dfe7; }\n    .bs-popover-left > .arrow::after, .bs-popover-auto[x-placement^=\"left\"] > .arrow::after {\n      right: 1px;\n      border-width: 0.5rem 0 0.5rem 0.5rem;\n      border-left-color: #fff; }\n\n.popover-header {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #fff;\n  background-color: #5265cc;\n  border-bottom: 1px solid #3e53c6;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem; }\n  .popover-header:empty {\n    display: none; }\n\n.popover-body {\n  padding: 0.5rem 0.75rem;\n  color: #293241; }\n\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n\n.alert-heading {\n  color: inherit; }\n\n.alert-link {\n  font-weight: 700; }\n\n.alert-dismissible {\n  padding-right: 3.8125rem; }\n  .alert-dismissible .close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 2;\n    padding: 0.75rem 1.25rem;\n    color: inherit; }\n\n.alert-primary {\n  color: #5265cc;\n  background-color: #dce0f5;\n  border-color: #5265cc; }\n  .alert-primary hr {\n    border-top-color: #3e53c6; }\n  .alert-primary .alert-link {\n    color: #3649b5; }\n\n.alert-secondary {\n  color: #6c757d;\n  background-color: #e2e3e5;\n  border-color: #6c757d; }\n  .alert-secondary hr {\n    border-top-color: #60686f; }\n  .alert-secondary .alert-link {\n    color: #545b62; }\n\n.alert-success {\n  color: #15bd76;\n  background-color: #d0f2e4;\n  border-color: #15bd76; }\n  .alert-success hr {\n    border-top-color: #12a668; }\n  .alert-success .alert-link {\n    color: #108f59; }\n\n.alert-info {\n  color: #8293b0;\n  background-color: #e6e9ef;\n  border-color: #8293b0; }\n  .alert-info hr {\n    border-top-color: #7286a6; }\n  .alert-info .alert-link {\n    color: #63789c; }\n\n.alert-warning {\n  color: #ff9900;\n  background-color: #ffebcc;\n  border-color: #ff9900; }\n  .alert-warning hr {\n    border-top-color: #e68a00; }\n  .alert-warning .alert-link {\n    color: #cc7a00; }\n\n.alert-danger {\n  color: #e53e3e;\n  background-color: #fad8d8;\n  border-color: #e53e3e; }\n  .alert-danger hr {\n    border-top-color: #e22828; }\n  .alert-danger .alert-link {\n    color: #d41c1c; }\n\n.alert-light {\n  color: #d9dfe7;\n  background-color: #f7f9fa;\n  border-color: #d9dfe7; }\n  .alert-light hr {\n    border-top-color: #c9d2dd; }\n  .alert-light .alert-link {\n    color: #bac5d3; }\n\n.alert-dark {\n  color: #080b1e;\n  background-color: #ceced2;\n  border-color: #080b1e; }\n  .alert-dark hr {\n    border-top-color: #03040a; }\n  .alert-dark .alert-link {\n    color: black; }\n\n.alert-default {\n  color: #293241;\n  background-color: #d4d6d9;\n  border-color: #293241; }\n  .alert-default hr {\n    border-top-color: #1f2631; }\n  .alert-default .alert-link {\n    color: #151a22; }\n\n.fade {\n  transition: opacity 0.15s linear; }\n  @media (prefers-reduced-motion: reduce) {\n    .fade {\n      transition: none; } }\n  .fade:not(.show) {\n    opacity: 0; }\n\n.collapse:not(.show) {\n  display: none; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease; }\n  @media (prefers-reduced-motion: reduce) {\n    .collapsing {\n      transition: none; } }\n\n.btn-plain-primary {\n  color: #5265cc;\n  border-color: rgba(82, 101, 204, 0.4);\n  background-color: rgba(82, 101, 204, 0.05); }\n  .btn-plain-primary:hover {\n    color: #fff;\n    background-color: #5265cc;\n    border-color: #5265cc; }\n  .btn-plain-primary:focus, .btn-plain-primary.focus {\n    color: #fff;\n    background-color: #5265cc;\n    border-color: #5265cc; }\n  .btn-plain-primary.disabled, .btn-plain-primary:disabled {\n    color: rgba(82, 101, 204, 0.75);\n    background-color: rgba(82, 101, 204, 0.85); }\n  .btn-plain-primary:not(:disabled):not(.disabled):active, .btn-plain-primary:not(:disabled):not(.disabled).active,\n  .show > .btn-plain-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #5265cc;\n    border-color: #5265cc; }\n    .btn-plain-primary:not(:disabled):not(.disabled):active:focus, .btn-plain-primary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-plain-primary.dropdown-toggle:focus {\n      box-shadow: none; }\n\n.btn-plain-secondary {\n  color: #6c757d;\n  border-color: rgba(108, 117, 125, 0.4);\n  background-color: rgba(108, 117, 125, 0.05); }\n  .btn-plain-secondary:hover {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n  .btn-plain-secondary:focus, .btn-plain-secondary.focus {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n  .btn-plain-secondary.disabled, .btn-plain-secondary:disabled {\n    color: rgba(108, 117, 125, 0.75);\n    background-color: rgba(108, 117, 125, 0.85); }\n  .btn-plain-secondary:not(:disabled):not(.disabled):active, .btn-plain-secondary:not(:disabled):not(.disabled).active,\n  .show > .btn-plain-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n    .btn-plain-secondary:not(:disabled):not(.disabled):active:focus, .btn-plain-secondary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-plain-secondary.dropdown-toggle:focus {\n      box-shadow: none; }\n\n.btn-plain-success {\n  color: #15bd76;\n  border-color: rgba(21, 189, 118, 0.4);\n  background-color: rgba(21, 189, 118, 0.05); }\n  .btn-plain-success:hover {\n    color: #fff;\n    background-color: #15bd76;\n    border-color: #15bd76; }\n  .btn-plain-success:focus, .btn-plain-success.focus {\n    color: #fff;\n    background-color: #15bd76;\n    border-color: #15bd76; }\n  .btn-plain-success.disabled, .btn-plain-success:disabled {\n    color: rgba(21, 189, 118, 0.75);\n    background-color: rgba(21, 189, 118, 0.85); }\n  .btn-plain-success:not(:disabled):not(.disabled):active, .btn-plain-success:not(:disabled):not(.disabled).active,\n  .show > .btn-plain-success.dropdown-toggle {\n    color: #fff;\n    background-color: #15bd76;\n    border-color: #15bd76; }\n    .btn-plain-success:not(:disabled):not(.disabled):active:focus, .btn-plain-success:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-plain-success.dropdown-toggle:focus {\n      box-shadow: none; }\n\n.btn-plain-info {\n  color: #8293b0;\n  border-color: rgba(130, 147, 176, 0.4);\n  background-color: rgba(130, 147, 176, 0.05); }\n  .btn-plain-info:hover {\n    color: #fff;\n    background-color: #8293b0;\n    border-color: #8293b0; }\n  .btn-plain-info:focus, .btn-plain-info.focus {\n    color: #fff;\n    background-color: #8293b0;\n    border-color: #8293b0; }\n  .btn-plain-info.disabled, .btn-plain-info:disabled {\n    color: rgba(130, 147, 176, 0.75);\n    background-color: rgba(130, 147, 176, 0.85); }\n  .btn-plain-info:not(:disabled):not(.disabled):active, .btn-plain-info:not(:disabled):not(.disabled).active,\n  .show > .btn-plain-info.dropdown-toggle {\n    color: #fff;\n    background-color: #8293b0;\n    border-color: #8293b0; }\n    .btn-plain-info:not(:disabled):not(.disabled):active:focus, .btn-plain-info:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-plain-info.dropdown-toggle:focus {\n      box-shadow: none; }\n\n.btn-plain-warning {\n  color: #ff9900;\n  border-color: rgba(255, 153, 0, 0.4);\n  background-color: rgba(255, 153, 0, 0.05); }\n  .btn-plain-warning:hover {\n    color: #fff;\n    background-color: #ff9900;\n    border-color: #ff9900; }\n  .btn-plain-warning:focus, .btn-plain-warning.focus {\n    color: #fff;\n    background-color: #ff9900;\n    border-color: #ff9900; }\n  .btn-plain-warning.disabled, .btn-plain-warning:disabled {\n    color: rgba(255, 153, 0, 0.75);\n    background-color: rgba(255, 153, 0, 0.85); }\n  .btn-plain-warning:not(:disabled):not(.disabled):active, .btn-plain-warning:not(:disabled):not(.disabled).active,\n  .show > .btn-plain-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #ff9900;\n    border-color: #ff9900; }\n    .btn-plain-warning:not(:disabled):not(.disabled):active:focus, .btn-plain-warning:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-plain-warning.dropdown-toggle:focus {\n      box-shadow: none; }\n\n.btn-plain-danger {\n  color: #e53e3e;\n  border-color: rgba(229, 62, 62, 0.4);\n  background-color: rgba(229, 62, 62, 0.05); }\n  .btn-plain-danger:hover {\n    color: #fff;\n    background-color: #e53e3e;\n    border-color: #e53e3e; }\n  .btn-plain-danger:focus, .btn-plain-danger.focus {\n    color: #fff;\n    background-color: #e53e3e;\n    border-color: #e53e3e; }\n  .btn-plain-danger.disabled, .btn-plain-danger:disabled {\n    color: rgba(229, 62, 62, 0.75);\n    background-color: rgba(229, 62, 62, 0.85); }\n  .btn-plain-danger:not(:disabled):not(.disabled):active, .btn-plain-danger:not(:disabled):not(.disabled).active,\n  .show > .btn-plain-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #e53e3e;\n    border-color: #e53e3e; }\n    .btn-plain-danger:not(:disabled):not(.disabled):active:focus, .btn-plain-danger:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-plain-danger.dropdown-toggle:focus {\n      box-shadow: none; }\n\n.btn-plain-light {\n  color: #d9dfe7;\n  border-color: rgba(217, 223, 231, 0.4);\n  background-color: rgba(217, 223, 231, 0.05); }\n  .btn-plain-light:hover {\n    color: #fff;\n    background-color: #d9dfe7;\n    border-color: #d9dfe7; }\n  .btn-plain-light:focus, .btn-plain-light.focus {\n    color: #fff;\n    background-color: #d9dfe7;\n    border-color: #d9dfe7; }\n  .btn-plain-light.disabled, .btn-plain-light:disabled {\n    color: rgba(217, 223, 231, 0.75);\n    background-color: rgba(217, 223, 231, 0.85); }\n  .btn-plain-light:not(:disabled):not(.disabled):active, .btn-plain-light:not(:disabled):not(.disabled).active,\n  .show > .btn-plain-light.dropdown-toggle {\n    color: #fff;\n    background-color: #d9dfe7;\n    border-color: #d9dfe7; }\n    .btn-plain-light:not(:disabled):not(.disabled):active:focus, .btn-plain-light:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-plain-light.dropdown-toggle:focus {\n      box-shadow: none; }\n\n.btn-plain-dark {\n  color: #080b1e;\n  border-color: rgba(8, 11, 30, 0.4);\n  background-color: rgba(8, 11, 30, 0.05); }\n  .btn-plain-dark:hover {\n    color: #fff;\n    background-color: #080b1e;\n    border-color: #080b1e; }\n  .btn-plain-dark:focus, .btn-plain-dark.focus {\n    color: #fff;\n    background-color: #080b1e;\n    border-color: #080b1e; }\n  .btn-plain-dark.disabled, .btn-plain-dark:disabled {\n    color: rgba(8, 11, 30, 0.75);\n    background-color: rgba(8, 11, 30, 0.85); }\n  .btn-plain-dark:not(:disabled):not(.disabled):active, .btn-plain-dark:not(:disabled):not(.disabled).active,\n  .show > .btn-plain-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #080b1e;\n    border-color: #080b1e; }\n    .btn-plain-dark:not(:disabled):not(.disabled):active:focus, .btn-plain-dark:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-plain-dark.dropdown-toggle:focus {\n      box-shadow: none; }\n\n.btn-plain-default {\n  color: #293241;\n  border-color: rgba(41, 50, 65, 0.4);\n  background-color: rgba(41, 50, 65, 0.05); }\n  .btn-plain-default:hover {\n    color: #fff;\n    background-color: #293241;\n    border-color: #293241; }\n  .btn-plain-default:focus, .btn-plain-default.focus {\n    color: #fff;\n    background-color: #293241;\n    border-color: #293241; }\n  .btn-plain-default.disabled, .btn-plain-default:disabled {\n    color: rgba(41, 50, 65, 0.75);\n    background-color: rgba(41, 50, 65, 0.85); }\n  .btn-plain-default:not(:disabled):not(.disabled):active, .btn-plain-default:not(:disabled):not(.disabled).active,\n  .show > .btn-plain-default.dropdown-toggle {\n    color: #fff;\n    background-color: #293241;\n    border-color: #293241; }\n    .btn-plain-default:not(:disabled):not(.disabled):active:focus, .btn-plain-default:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-plain-default.dropdown-toggle:focus {\n      box-shadow: none; }\n\n.btn-plain-default {\n  border: 1px solid #d9dfe7;\n  background-color: #fff;\n  color: #293241; }\n  .btn-plain-default:hover, .btn-plain-default:focus, .btn-plain-default:active, .btn-plain-default.focus, .btn-plain-default.disabled, .btn-plain-default:disabled, .btn-plain-default:not(:disabled):not(.disabled):active, .btn-plain-default:not(:disabled):not(.disabled).active,\n  .show > .btn-plain-default.dropdown-toggle {\n    color: #293241;\n    background-color: #fafbfc;\n    border: 1px solid #d9dfe7; }\n\n.btn-text-primary {\n  color: #5265cc;\n  border-color: transparent; }\n  .btn-text-primary:hover {\n    color: rgba(82, 101, 204, 0.85);\n    background-color: transparent;\n    border-color: transparent; }\n  .btn-text-primary:focus, .btn-text-primary.focus {\n    box-shadow: none;\n    border-color: transparent;\n    background-color: transparent;\n    outline: none; }\n  .btn-text-primary.disabled, .btn-text-primary:disabled {\n    color: rgba(82, 101, 204, 0.85);\n    background-color: transparent; }\n  .btn-text-primary:not(:disabled):not(.disabled):active, .btn-text-primary:not(:disabled):not(.disabled).active,\n  .show > .btn-text-primary.dropdown-toggle {\n    color: rgba(82, 101, 204, 0.85);\n    background-color: transparent;\n    border-color: transparent; }\n    .btn-text-primary:not(:disabled):not(.disabled):active:focus, .btn-text-primary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-text-primary.dropdown-toggle:focus {\n      box-shadow: none; }\n\n.btn-text-secondary {\n  color: #6c757d;\n  border-color: transparent; }\n  .btn-text-secondary:hover {\n    color: rgba(108, 117, 125, 0.85);\n    background-color: transparent;\n    border-color: transparent; }\n  .btn-text-secondary:focus, .btn-text-secondary.focus {\n    box-shadow: none;\n    border-color: transparent;\n    background-color: transparent;\n    outline: none; }\n  .btn-text-secondary.disabled, .btn-text-secondary:disabled {\n    color: rgba(108, 117, 125, 0.85);\n    background-color: transparent; }\n  .btn-text-secondary:not(:disabled):not(.disabled):active, .btn-text-secondary:not(:disabled):not(.disabled).active,\n  .show > .btn-text-secondary.dropdown-toggle {\n    color: rgba(108, 117, 125, 0.85);\n    background-color: transparent;\n    border-color: transparent; }\n    .btn-text-secondary:not(:disabled):not(.disabled):active:focus, .btn-text-secondary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-text-secondary.dropdown-toggle:focus {\n      box-shadow: none; }\n\n.btn-text-success {\n  color: #15bd76;\n  border-color: transparent; }\n  .btn-text-success:hover {\n    color: rgba(21, 189, 118, 0.85);\n    background-color: transparent;\n    border-color: transparent; }\n  .btn-text-success:focus, .btn-text-success.focus {\n    box-shadow: none;\n    border-color: transparent;\n    background-color: transparent;\n    outline: none; }\n  .btn-text-success.disabled, .btn-text-success:disabled {\n    color: rgba(21, 189, 118, 0.85);\n    background-color: transparent; }\n  .btn-text-success:not(:disabled):not(.disabled):active, .btn-text-success:not(:disabled):not(.disabled).active,\n  .show > .btn-text-success.dropdown-toggle {\n    color: rgba(21, 189, 118, 0.85);\n    background-color: transparent;\n    border-color: transparent; }\n    .btn-text-success:not(:disabled):not(.disabled):active:focus, .btn-text-success:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-text-success.dropdown-toggle:focus {\n      box-shadow: none; }\n\n.btn-text-info {\n  color: #8293b0;\n  border-color: transparent; }\n  .btn-text-info:hover {\n    color: rgba(130, 147, 176, 0.85);\n    background-color: transparent;\n    border-color: transparent; }\n  .btn-text-info:focus, .btn-text-info.focus {\n    box-shadow: none;\n    border-color: transparent;\n    background-color: transparent;\n    outline: none; }\n  .btn-text-info.disabled, .btn-text-info:disabled {\n    color: rgba(130, 147, 176, 0.85);\n    background-color: transparent; }\n  .btn-text-info:not(:disabled):not(.disabled):active, .btn-text-info:not(:disabled):not(.disabled).active,\n  .show > .btn-text-info.dropdown-toggle {\n    color: rgba(130, 147, 176, 0.85);\n    background-color: transparent;\n    border-color: transparent; }\n    .btn-text-info:not(:disabled):not(.disabled):active:focus, .btn-text-info:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-text-info.dropdown-toggle:focus {\n      box-shadow: none; }\n\n.btn-text-warning {\n  color: #ff9900;\n  border-color: transparent; }\n  .btn-text-warning:hover {\n    color: rgba(255, 153, 0, 0.85);\n    background-color: transparent;\n    border-color: transparent; }\n  .btn-text-warning:focus, .btn-text-warning.focus {\n    box-shadow: none;\n    border-color: transparent;\n    background-color: transparent;\n    outline: none; }\n  .btn-text-warning.disabled, .btn-text-warning:disabled {\n    color: rgba(255, 153, 0, 0.85);\n    background-color: transparent; }\n  .btn-text-warning:not(:disabled):not(.disabled):active, .btn-text-warning:not(:disabled):not(.disabled).active,\n  .show > .btn-text-warning.dropdown-toggle {\n    color: rgba(255, 153, 0, 0.85);\n    background-color: transparent;\n    border-color: transparent; }\n    .btn-text-warning:not(:disabled):not(.disabled):active:focus, .btn-text-warning:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-text-warning.dropdown-toggle:focus {\n      box-shadow: none; }\n\n.btn-text-danger {\n  color: #e53e3e;\n  border-color: transparent; }\n  .btn-text-danger:hover {\n    color: rgba(229, 62, 62, 0.85);\n    background-color: transparent;\n    border-color: transparent; }\n  .btn-text-danger:focus, .btn-text-danger.focus {\n    box-shadow: none;\n    border-color: transparent;\n    background-color: transparent;\n    outline: none; }\n  .btn-text-danger.disabled, .btn-text-danger:disabled {\n    color: rgba(229, 62, 62, 0.85);\n    background-color: transparent; }\n  .btn-text-danger:not(:disabled):not(.disabled):active, .btn-text-danger:not(:disabled):not(.disabled).active,\n  .show > .btn-text-danger.dropdown-toggle {\n    color: rgba(229, 62, 62, 0.85);\n    background-color: transparent;\n    border-color: transparent; }\n    .btn-text-danger:not(:disabled):not(.disabled):active:focus, .btn-text-danger:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-text-danger.dropdown-toggle:focus {\n      box-shadow: none; }\n\n.btn-text-light {\n  color: #d9dfe7;\n  border-color: transparent; }\n  .btn-text-light:hover {\n    color: rgba(217, 223, 231, 0.85);\n    background-color: transparent;\n    border-color: transparent; }\n  .btn-text-light:focus, .btn-text-light.focus {\n    box-shadow: none;\n    border-color: transparent;\n    background-color: transparent;\n    outline: none; }\n  .btn-text-light.disabled, .btn-text-light:disabled {\n    color: rgba(217, 223, 231, 0.85);\n    background-color: transparent; }\n  .btn-text-light:not(:disabled):not(.disabled):active, .btn-text-light:not(:disabled):not(.disabled).active,\n  .show > .btn-text-light.dropdown-toggle {\n    color: rgba(217, 223, 231, 0.85);\n    background-color: transparent;\n    border-color: transparent; }\n    .btn-text-light:not(:disabled):not(.disabled):active:focus, .btn-text-light:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-text-light.dropdown-toggle:focus {\n      box-shadow: none; }\n\n.btn-text-dark {\n  color: #080b1e;\n  border-color: transparent; }\n  .btn-text-dark:hover {\n    color: rgba(8, 11, 30, 0.85);\n    background-color: transparent;\n    border-color: transparent; }\n  .btn-text-dark:focus, .btn-text-dark.focus {\n    box-shadow: none;\n    border-color: transparent;\n    background-color: transparent;\n    outline: none; }\n  .btn-text-dark.disabled, .btn-text-dark:disabled {\n    color: rgba(8, 11, 30, 0.85);\n    background-color: transparent; }\n  .btn-text-dark:not(:disabled):not(.disabled):active, .btn-text-dark:not(:disabled):not(.disabled).active,\n  .show > .btn-text-dark.dropdown-toggle {\n    color: rgba(8, 11, 30, 0.85);\n    background-color: transparent;\n    border-color: transparent; }\n    .btn-text-dark:not(:disabled):not(.disabled):active:focus, .btn-text-dark:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-text-dark.dropdown-toggle:focus {\n      box-shadow: none; }\n\n.btn-text-default {\n  color: #293241;\n  border-color: transparent; }\n  .btn-text-default:hover {\n    color: rgba(41, 50, 65, 0.85);\n    background-color: transparent;\n    border-color: transparent; }\n  .btn-text-default:focus, .btn-text-default.focus {\n    box-shadow: none;\n    border-color: transparent;\n    background-color: transparent;\n    outline: none; }\n  .btn-text-default.disabled, .btn-text-default:disabled {\n    color: rgba(41, 50, 65, 0.85);\n    background-color: transparent; }\n  .btn-text-default:not(:disabled):not(.disabled):active, .btn-text-default:not(:disabled):not(.disabled).active,\n  .show > .btn-text-default.dropdown-toggle {\n    color: rgba(41, 50, 65, 0.85);\n    background-color: transparent;\n    border-color: transparent; }\n    .btn-text-default:not(:disabled):not(.disabled):active:focus, .btn-text-default:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-text-default.dropdown-toggle:focus {\n      box-shadow: none; }\n\n.btn-icon-primary {\n  color: #fff;\n  background: #5265cc;\n  padding: 0.75rem 0.75rem 0.625rem; }\n  .btn-icon-primary:hover {\n    color: #fff;\n    background-color: rgba(82, 101, 204, 0.85);\n    border-color: rgba(82, 101, 204, 0.85); }\n  .btn-icon-primary:focus, .btn-icon-primary.focus {\n    border-color: rgba(82, 101, 204, 0.85);\n    background-color: rgba(82, 101, 204, 0.85); }\n  .btn-icon-primary.disabled, .btn-icon-primary:disabled {\n    color: #fff;\n    background-color: rgba(82, 101, 204, 0.85); }\n  .btn-icon-primary:not(:disabled):not(.disabled):active, .btn-icon-primary:not(:disabled):not(.disabled).active,\n  .show > .btn-icon-primary.dropdown-toggle {\n    color: #fff;\n    background-color: rgba(82, 101, 204, 0.85);\n    border-color: rgba(82, 101, 204, 0.85); }\n\n.btn-icon-secondary {\n  color: #fff;\n  background: #6c757d;\n  padding: 0.75rem 0.75rem 0.625rem; }\n  .btn-icon-secondary:hover {\n    color: #fff;\n    background-color: rgba(108, 117, 125, 0.85);\n    border-color: rgba(108, 117, 125, 0.85); }\n  .btn-icon-secondary:focus, .btn-icon-secondary.focus {\n    border-color: rgba(108, 117, 125, 0.85);\n    background-color: rgba(108, 117, 125, 0.85); }\n  .btn-icon-secondary.disabled, .btn-icon-secondary:disabled {\n    color: #fff;\n    background-color: rgba(108, 117, 125, 0.85); }\n  .btn-icon-secondary:not(:disabled):not(.disabled):active, .btn-icon-secondary:not(:disabled):not(.disabled).active,\n  .show > .btn-icon-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: rgba(108, 117, 125, 0.85);\n    border-color: rgba(108, 117, 125, 0.85); }\n\n.btn-icon-success {\n  color: #fff;\n  background: #15bd76;\n  padding: 0.75rem 0.75rem 0.625rem; }\n  .btn-icon-success:hover {\n    color: #fff;\n    background-color: rgba(21, 189, 118, 0.85);\n    border-color: rgba(21, 189, 118, 0.85); }\n  .btn-icon-success:focus, .btn-icon-success.focus {\n    border-color: rgba(21, 189, 118, 0.85);\n    background-color: rgba(21, 189, 118, 0.85); }\n  .btn-icon-success.disabled, .btn-icon-success:disabled {\n    color: #fff;\n    background-color: rgba(21, 189, 118, 0.85); }\n  .btn-icon-success:not(:disabled):not(.disabled):active, .btn-icon-success:not(:disabled):not(.disabled).active,\n  .show > .btn-icon-success.dropdown-toggle {\n    color: #fff;\n    background-color: rgba(21, 189, 118, 0.85);\n    border-color: rgba(21, 189, 118, 0.85); }\n\n.btn-icon-info {\n  color: #fff;\n  background: #8293b0;\n  padding: 0.75rem 0.75rem 0.625rem; }\n  .btn-icon-info:hover {\n    color: #fff;\n    background-color: rgba(130, 147, 176, 0.85);\n    border-color: rgba(130, 147, 176, 0.85); }\n  .btn-icon-info:focus, .btn-icon-info.focus {\n    border-color: rgba(130, 147, 176, 0.85);\n    background-color: rgba(130, 147, 176, 0.85); }\n  .btn-icon-info.disabled, .btn-icon-info:disabled {\n    color: #fff;\n    background-color: rgba(130, 147, 176, 0.85); }\n  .btn-icon-info:not(:disabled):not(.disabled):active, .btn-icon-info:not(:disabled):not(.disabled).active,\n  .show > .btn-icon-info.dropdown-toggle {\n    color: #fff;\n    background-color: rgba(130, 147, 176, 0.85);\n    border-color: rgba(130, 147, 176, 0.85); }\n\n.btn-icon-warning {\n  color: #fff;\n  background: #ff9900;\n  padding: 0.75rem 0.75rem 0.625rem; }\n  .btn-icon-warning:hover {\n    color: #fff;\n    background-color: rgba(255, 153, 0, 0.85);\n    border-color: rgba(255, 153, 0, 0.85); }\n  .btn-icon-warning:focus, .btn-icon-warning.focus {\n    border-color: rgba(255, 153, 0, 0.85);\n    background-color: rgba(255, 153, 0, 0.85); }\n  .btn-icon-warning.disabled, .btn-icon-warning:disabled {\n    color: #fff;\n    background-color: rgba(255, 153, 0, 0.85); }\n  .btn-icon-warning:not(:disabled):not(.disabled):active, .btn-icon-warning:not(:disabled):not(.disabled).active,\n  .show > .btn-icon-warning.dropdown-toggle {\n    color: #fff;\n    background-color: rgba(255, 153, 0, 0.85);\n    border-color: rgba(255, 153, 0, 0.85); }\n\n.btn-icon-danger {\n  color: #fff;\n  background: #e53e3e;\n  padding: 0.75rem 0.75rem 0.625rem; }\n  .btn-icon-danger:hover {\n    color: #fff;\n    background-color: rgba(229, 62, 62, 0.85);\n    border-color: rgba(229, 62, 62, 0.85); }\n  .btn-icon-danger:focus, .btn-icon-danger.focus {\n    border-color: rgba(229, 62, 62, 0.85);\n    background-color: rgba(229, 62, 62, 0.85); }\n  .btn-icon-danger.disabled, .btn-icon-danger:disabled {\n    color: #fff;\n    background-color: rgba(229, 62, 62, 0.85); }\n  .btn-icon-danger:not(:disabled):not(.disabled):active, .btn-icon-danger:not(:disabled):not(.disabled).active,\n  .show > .btn-icon-danger.dropdown-toggle {\n    color: #fff;\n    background-color: rgba(229, 62, 62, 0.85);\n    border-color: rgba(229, 62, 62, 0.85); }\n\n.btn-icon-light {\n  color: #fff;\n  background: #d9dfe7;\n  padding: 0.75rem 0.75rem 0.625rem; }\n  .btn-icon-light:hover {\n    color: #fff;\n    background-color: rgba(217, 223, 231, 0.85);\n    border-color: rgba(217, 223, 231, 0.85); }\n  .btn-icon-light:focus, .btn-icon-light.focus {\n    border-color: rgba(217, 223, 231, 0.85);\n    background-color: rgba(217, 223, 231, 0.85); }\n  .btn-icon-light.disabled, .btn-icon-light:disabled {\n    color: #fff;\n    background-color: rgba(217, 223, 231, 0.85); }\n  .btn-icon-light:not(:disabled):not(.disabled):active, .btn-icon-light:not(:disabled):not(.disabled).active,\n  .show > .btn-icon-light.dropdown-toggle {\n    color: #fff;\n    background-color: rgba(217, 223, 231, 0.85);\n    border-color: rgba(217, 223, 231, 0.85); }\n\n.btn-icon-dark {\n  color: #fff;\n  background: #080b1e;\n  padding: 0.75rem 0.75rem 0.625rem; }\n  .btn-icon-dark:hover {\n    color: #fff;\n    background-color: rgba(8, 11, 30, 0.85);\n    border-color: rgba(8, 11, 30, 0.85); }\n  .btn-icon-dark:focus, .btn-icon-dark.focus {\n    border-color: rgba(8, 11, 30, 0.85);\n    background-color: rgba(8, 11, 30, 0.85); }\n  .btn-icon-dark.disabled, .btn-icon-dark:disabled {\n    color: #fff;\n    background-color: rgba(8, 11, 30, 0.85); }\n  .btn-icon-dark:not(:disabled):not(.disabled):active, .btn-icon-dark:not(:disabled):not(.disabled).active,\n  .show > .btn-icon-dark.dropdown-toggle {\n    color: #fff;\n    background-color: rgba(8, 11, 30, 0.85);\n    border-color: rgba(8, 11, 30, 0.85); }\n\n.btn-icon-default {\n  color: #fff;\n  background: #293241;\n  padding: 0.75rem 0.75rem 0.625rem; }\n  .btn-icon-default:hover {\n    color: #fff;\n    background-color: rgba(41, 50, 65, 0.85);\n    border-color: rgba(41, 50, 65, 0.85); }\n  .btn-icon-default:focus, .btn-icon-default.focus {\n    border-color: rgba(41, 50, 65, 0.85);\n    background-color: rgba(41, 50, 65, 0.85); }\n  .btn-icon-default.disabled, .btn-icon-default:disabled {\n    color: #fff;\n    background-color: rgba(41, 50, 65, 0.85); }\n  .btn-icon-default:not(:disabled):not(.disabled):active, .btn-icon-default:not(:disabled):not(.disabled).active,\n  .show > .btn-icon-default.dropdown-toggle {\n    color: #fff;\n    background-color: rgba(41, 50, 65, 0.85);\n    border-color: rgba(41, 50, 65, 0.85); }\n\n.btn i {\n  font-size: 0.875rem; }\n\n.btn-xs {\n  padding: 0.437rem 1rem;\n  font-size: 0.54688rem;\n  line-height: 1.2;\n  border-radius: 0.25rem;\n  letter-spacing: 0.04rem; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.625rem 1.125rem;\n  font-size: 0.65625rem;\n  line-height: 1.2;\n  border-radius: 0.2rem;\n  letter-spacing: 0.04rem; }\n\n.btn-md {\n  font-weight: 700;\n  padding: 0.625rem 1.375rem;\n  font-size: 0.875rem;\n  line-height: 1.2;\n  border-radius: 0.25rem; }\n\n.btn-lg, .btn-group-lg > .btn {\n  font-weight: 700;\n  padding: 0.625rem 1.5rem;\n  font-size: 0.98438rem;\n  line-height: 1.2;\n  border-radius: 0.3rem; }\n\n.btn-xl {\n  padding: 1rem 1.625rem;\n  font-size: 1.09375rem;\n  line-height: 1.2;\n  border-radius: 0.25rem;\n  font-weight: 700; }\n";
styleInject(css_248z);

var ButtonSize;
(function (ButtonSize) {
    ButtonSize["small"] = "small";
    ButtonSize["large"] = "large";
})(ButtonSize || (ButtonSize = {}));
var ButtonType;
(function (ButtonType) {
    ButtonType["success"] = "success";
    ButtonType["warning"] = "warning";
    ButtonType["info"] = "info";
    ButtonType["danger"] = "danger";
    ButtonType["primary"] = "primary";
    ButtonType["light"] = "light";
    ButtonType["dark"] = "dark";
    ButtonType["text"] = "text";
    ButtonType["default"] = "default";
})(ButtonType || (ButtonType = {}));
function getSize(size) {
    switch (size) {
        case ButtonSize.small:
            return "btn-sm";
        case ButtonSize.large:
            return "btn-lg";
        default:
            return "btn-lg";
    }
}
function getType(type, transparent) {
    if (transparent) {
        return "btn-text-" + type;
    }
    if (type === "text") {
        return "btn-link";
    }
    return "btn-" + type;
}
var Button = function (props) {
    var isDisabled = false;
    var classArr = ["btn"];
    if (props.outline) {
        classArr.push("btn-outline-" + props.type);
    }
    if (props.disabled) {
        isDisabled = true;
    }
    if (!props.outline && !props.plain) {
        classArr.push(getType(props.type, props.transparent));
    }
    if (props.plain) {
        classArr.push("btn-plain-" + props.type);
    }
    if (props.size) {
        classArr.push(getSize(props.size));
    }
    if (props.loading) {
        isDisabled = true;
    }
    var onClick = function () {
        if (props.onClick) {
            props.onClick();
        }
    };
    return (jsxRuntime.jsx("button", __assign({ className: classArr.join(" "), disabled: isDisabled, onClick: onClick }, { children: props.loading ? (jsxRuntime.jsx("div", __assign({ className: "loader loading-button" }, { children: jsxRuntime.jsx("svg", __assign({ className: "circular-loader", viewBox: "25 25 50 50" }, { children: jsxRuntime.jsx("circle", { className: "loader-path", cx: "50", cy: "50", r: "20", fill: "none", strokeWidth: "5" }, void 0) }), void 0) }), void 0)) : (jsxRuntime.jsxs(react.Fragment, { children: [props.icon && jsxRuntime.jsx("i", { className: props.icon }, void 0), props.label] }, void 0)) }), void 0));
};
// Set default props
Button.defaultProps = {
    label: "Add product",
    type: "default",
    size: "small",
    outline: false,
    disabled: false,
    loading: false,
};

exports.Button = Button;
//# sourceMappingURL=index.js.map

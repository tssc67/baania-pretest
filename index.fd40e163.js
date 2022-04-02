// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hboVj":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "196f8fe1fd40e163";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"boekP":[function(require,module,exports) {
/*!
  * Bootstrap v4.6.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ !function(t, e) {
    e(exports, require("jquery"), require("popper.js"));
}(this, function(t1, e1, n1) {
    "use strict";
    function i1(t) {
        return t && "object" == typeof t && "default" in t ? t : {
            default: t
        };
    }
    var o1 = i1(e1), a1 = i1(n1);
    function s1(t, e) {
        for(var n = 0; n < e.length; n++){
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }
    function l1(t, e, n) {
        return e && s1(t.prototype, e), n && s1(t, n), t;
    }
    function r1() {
        return r1 = Object.assign || function(t) {
            for(var e = 1; e < arguments.length; e++){
                var n = arguments[e];
                for(var i in n)Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
        }, r1.apply(this, arguments);
    }
    function u1(t2, e2) {
        return u1 = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t;
        }, u1(t2, e2);
    }
    var f1 = "transitionend";
    var d = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            do t += ~~(1000000 * Math.random());
            while (document.getElementById(t))
            return t;
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : "";
            }
            try {
                return document.querySelector(e) ? e : null;
            } catch (t3) {
                return null;
            }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t) return 0;
            var e = o1.default(t).css("transition-duration"), n = o1.default(t).css("transition-delay"), i = parseFloat(e), a = parseFloat(n);
            return i || a ? (e = e.split(",")[0], n = n.split(",")[0], 1000 * (parseFloat(e) + parseFloat(n))) : 0;
        },
        reflow: function(t) {
            return t.offsetHeight;
        },
        triggerTransitionEnd: function(t) {
            o1.default(t).trigger(f1);
        },
        supportsTransitionEnd: function() {
            return Boolean(f1);
        },
        isElement: function(t) {
            return (t[0] || t).nodeType;
        },
        typeCheckConfig: function(t, e, n) {
            for(var i in n)if (Object.prototype.hasOwnProperty.call(n, i)) {
                var o = n[i], a = e[i], s = a && d.isElement(a) ? "element" : null === (l = a) || "undefined" == typeof l ? "" + l : ({}).toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
            }
            var l;
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                var e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null;
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? d.findShadowRoot(t.parentNode) : null;
        },
        jQueryDetection: function() {
            if ("undefined" == typeof o1.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = o1.default.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
        }
    };
    d.jQueryDetection(), o1.default.fn.emulateTransitionEnd = function(t) {
        var e = this, n = !1;
        return o1.default(this).one(d.TRANSITION_END, function() {
            n = !0;
        }), setTimeout(function() {
            n || d.triggerTransitionEnd(e);
        }, t), this;
    }, o1.default.event.special[d.TRANSITION_END] = {
        bindType: f1,
        delegateType: f1,
        handle: function(t) {
            if (o1.default(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
        }
    };
    var c1 = "bs.alert", h1 = o1.default.fn.alert, g1 = function() {
        function t4(t) {
            this._element = t;
        }
        var e3 = t4.prototype;
        return e3.close = function(t) {
            var e = this._element;
            t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
        }, e3.dispose = function() {
            o1.default.removeData(this._element, c1), this._element = null;
        }, e3._getRootElement = function(t) {
            var e = d.getSelectorFromElement(t), n = !1;
            return e && (n = document.querySelector(e)), n || (n = o1.default(t).closest(".alert")[0]), n;
        }, e3._triggerCloseEvent = function(t) {
            var e = o1.default.Event("close.bs.alert");
            return o1.default(t).trigger(e), e;
        }, e3._removeElement = function(t) {
            var e = this;
            if (o1.default(t).removeClass("show"), o1.default(t).hasClass("fade")) {
                var n2 = d.getTransitionDurationFromElement(t);
                o1.default(t).one(d.TRANSITION_END, function(n) {
                    return e._destroyElement(t, n);
                }).emulateTransitionEnd(n2);
            } else this._destroyElement(t);
        }, e3._destroyElement = function(t) {
            o1.default(t).detach().trigger("closed.bs.alert").remove();
        }, t4._jQueryInterface = function(e) {
            return this.each(function() {
                var n = o1.default(this), i = n.data(c1);
                i || (i = new t4(this), n.data(c1, i)), "close" === e && i[e](this);
            });
        }, t4._handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(), t.close(this);
            };
        }, l1(t4, null, [
            {
                key: "VERSION",
                get: function() {
                    return "4.6.1";
                }
            }
        ]), t4;
    }();
    o1.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', g1._handleDismiss(new g1)), o1.default.fn.alert = g1._jQueryInterface, o1.default.fn.alert.Constructor = g1, o1.default.fn.alert.noConflict = function() {
        return o1.default.fn.alert = h1, g1._jQueryInterface;
    };
    var m = "bs.button", p = o1.default.fn.button, _ = "active", v = '[data-toggle^="button"]', y = 'input:not([type="hidden"])', b = ".btn", E = function() {
        function t5(t) {
            this._element = t, this.shouldAvoidTriggerChange = !1;
        }
        var e4 = t5.prototype;
        return e4.toggle = function() {
            var t = !0, e = !0, n = o1.default(this._element).closest('[data-toggle="buttons"]')[0];
            if (n) {
                var i = this._element.querySelector(y);
                if (i) {
                    if ("radio" === i.type) {
                        if (i.checked && this._element.classList.contains(_)) t = !1;
                        else {
                            var a = n.querySelector(".active");
                            a && o1.default(a).removeClass(_);
                        }
                    }
                    t && ("checkbox" !== i.type && "radio" !== i.type || (i.checked = !this._element.classList.contains(_)), this.shouldAvoidTriggerChange || o1.default(i).trigger("change")), i.focus(), e = !1;
                }
            }
            this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(_)), t && o1.default(this._element).toggleClass(_));
        }, e4.dispose = function() {
            o1.default.removeData(this._element, m), this._element = null;
        }, t5._jQueryInterface = function(e, n) {
            return this.each(function() {
                var i = o1.default(this), a = i.data(m);
                a || (a = new t5(this), i.data(m, a)), a.shouldAvoidTriggerChange = n, "toggle" === e && a[e]();
            });
        }, l1(t5, null, [
            {
                key: "VERSION",
                get: function() {
                    return "4.6.1";
                }
            }
        ]), t5;
    }();
    o1.default(document).on("click.bs.button.data-api", v, function(t) {
        var e = t.target, n = e;
        if (o1.default(e).hasClass("btn") || (e = o1.default(e).closest(b)[0]), !e || e.hasAttribute("disabled") || e.classList.contains("disabled")) t.preventDefault();
        else {
            var i = e.querySelector(y);
            if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void t.preventDefault();
            "INPUT" !== n.tagName && "LABEL" === e.tagName || E._jQueryInterface.call(o1.default(e), "toggle", "INPUT" === n.tagName);
        }
    }).on("focus.bs.button.data-api blur.bs.button.data-api", v, function(t) {
        var e = o1.default(t.target).closest(b)[0];
        o1.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
    }), o1.default(window).on("load.bs.button.data-api", function() {
        for(var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++){
            var i = t[e], o = i.querySelector(y);
            o.checked || o.hasAttribute("checked") ? i.classList.add(_) : i.classList.remove(_);
        }
        for(var a = 0, s = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; a < s; a++){
            var l = t[a];
            "true" === l.getAttribute("aria-pressed") ? l.classList.add(_) : l.classList.remove(_);
        }
    }), o1.default.fn.button = E._jQueryInterface, o1.default.fn.button.Constructor = E, o1.default.fn.button.noConflict = function() {
        return o1.default.fn.button = p, E._jQueryInterface;
    };
    var T = "carousel", w = "bs.carousel", C = o1.default.fn[T], S = "active", N = "next", D = "prev", A = "slid.bs.carousel", I = ".active.carousel-item", k = {
        interval: 5000,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }, O = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }, j = {
        TOUCH: "touch",
        PEN: "pen"
    }, P = function() {
        function t6(t, e) {
            this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
        }
        var e5 = t6.prototype;
        return e5.next = function() {
            this._isSliding || this._slide(N);
        }, e5.nextWhenVisible = function() {
            var t = o1.default(this._element);
            !document.hidden && t.is(":visible") && "hidden" !== t.css("visibility") && this.next();
        }, e5.prev = function() {
            this._isSliding || this._slide(D);
        }, e5.pause = function(t) {
            t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (d.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
        }, e5.cycle = function(t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
        }, e5.to = function(t) {
            var e = this;
            this._activeElement = this._element.querySelector(I);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0)) {
                if (this._isSliding) o1.default(this._element).one(A, function() {
                    return e.to(t);
                });
                else {
                    if (n === t) return this.pause(), void this.cycle();
                    var i = t > n ? N : D;
                    this._slide(i, this._items[t]);
                }
            }
        }, e5.dispose = function() {
            o1.default(this._element).off(".bs.carousel"), o1.default.removeData(this._element, w), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
        }, e5._getConfig = function(t) {
            return t = r1({}, k, t), d.typeCheckConfig(T, t, O), t;
        }, e5._handleSwipe = function() {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
                var e = t / this.touchDeltaX;
                this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next();
            }
        }, e5._addEventListeners = function() {
            var t = this;
            this._config.keyboard && o1.default(this._element).on("keydown.bs.carousel", function(e) {
                return t._keydown(e);
            }), "hover" === this._config.pause && o1.default(this._element).on("mouseenter.bs.carousel", function(e) {
                return t.pause(e);
            }).on("mouseleave.bs.carousel", function(e) {
                return t.cycle(e);
            }), this._config.touch && this._addTouchEventListeners();
        }, e5._addTouchEventListeners = function() {
            var t7 = this;
            if (this._touchSupported) {
                var e6 = function(e) {
                    t7._pointerEvent && j[e.originalEvent.pointerType.toUpperCase()] ? t7.touchStartX = e.originalEvent.clientX : t7._pointerEvent || (t7.touchStartX = e.originalEvent.touches[0].clientX);
                }, n = function(e8) {
                    t7._pointerEvent && j[e8.originalEvent.pointerType.toUpperCase()] && (t7.touchDeltaX = e8.originalEvent.clientX - t7.touchStartX), t7._handleSwipe(), "hover" === t7._config.pause && (t7.pause(), t7.touchTimeout && clearTimeout(t7.touchTimeout), t7.touchTimeout = setTimeout(function(e) {
                        return t7.cycle(e);
                    }, 500 + t7._config.interval));
                };
                o1.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function(t) {
                    return t.preventDefault();
                }), this._pointerEvent ? (o1.default(this._element).on("pointerdown.bs.carousel", function(t) {
                    return e6(t);
                }), o1.default(this._element).on("pointerup.bs.carousel", function(t) {
                    return n(t);
                }), this._element.classList.add("pointer-event")) : (o1.default(this._element).on("touchstart.bs.carousel", function(t) {
                    return e6(t);
                }), o1.default(this._element).on("touchmove.bs.carousel", function(e9) {
                    return function(e) {
                        t7.touchDeltaX = e.originalEvent.touches && e.originalEvent.touches.length > 1 ? 0 : e.originalEvent.touches[0].clientX - t7.touchStartX;
                    }(e9);
                }), o1.default(this._element).on("touchend.bs.carousel", function(t) {
                    return n(t);
                }));
            }
        }, e5._keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName)) switch(t.which){
                case 37:
                    t.preventDefault(), this.prev();
                    break;
                case 39:
                    t.preventDefault(), this.next();
            }
        }, e5._getItemIndex = function(t) {
            return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t);
        }, e5._getItemByDirection = function(t, e) {
            var n = t === N, i = t === D, o = this._getItemIndex(e), a = this._items.length - 1;
            if ((i && 0 === o || n && o === a) && !this._config.wrap) return e;
            var s = (o + (t === D ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s];
        }, e5._triggerSlideEvent = function(t, e) {
            var n = this._getItemIndex(t), i = this._getItemIndex(this._element.querySelector(I)), a = o1.default.Event("slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n
            });
            return o1.default(this._element).trigger(a), a;
        }, e5._setActiveIndicatorElement = function(t) {
            if (this._indicatorsElement) {
                var e = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                o1.default(e).removeClass(S);
                var n = this._indicatorsElement.children[this._getItemIndex(t)];
                n && o1.default(n).addClass(S);
            }
        }, e5._updateInterval = function() {
            var t = this._activeElement || this._element.querySelector(I);
            if (t) {
                var e = parseInt(t.getAttribute("data-interval"), 10);
                e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
            }
        }, e5._slide = function(t, e) {
            var n, i, a, s = this, l = this._element.querySelector(I), r = this._getItemIndex(l), u = e || l && this._getItemByDirection(t, l), f = this._getItemIndex(u), c = Boolean(this._interval);
            if (t === N ? (n = "carousel-item-left", i = "carousel-item-next", a = "left") : (n = "carousel-item-right", i = "carousel-item-prev", a = "right"), u && o1.default(u).hasClass(S)) this._isSliding = !1;
            else if (!this._triggerSlideEvent(u, a).isDefaultPrevented() && l && u) {
                this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(u), this._activeElement = u;
                var h = o1.default.Event(A, {
                    relatedTarget: u,
                    direction: a,
                    from: r,
                    to: f
                });
                if (o1.default(this._element).hasClass("slide")) {
                    o1.default(u).addClass(i), d.reflow(u), o1.default(l).addClass(n), o1.default(u).addClass(n);
                    var g = d.getTransitionDurationFromElement(l);
                    o1.default(l).one(d.TRANSITION_END, function() {
                        o1.default(u).removeClass(n + " " + i).addClass(S), o1.default(l).removeClass("active " + i + " " + n), s._isSliding = !1, setTimeout(function() {
                            return o1.default(s._element).trigger(h);
                        }, 0);
                    }).emulateTransitionEnd(g);
                } else o1.default(l).removeClass(S), o1.default(u).addClass(S), this._isSliding = !1, o1.default(this._element).trigger(h);
                c && this.cycle();
            }
        }, t6._jQueryInterface = function(e) {
            return this.each(function() {
                var n = o1.default(this).data(w), i = r1({}, k, o1.default(this).data());
                "object" == typeof e && (i = r1({}, i, e));
                var a = "string" == typeof e ? e : i.slide;
                if (n || (n = new t6(this, i), o1.default(this).data(w, n)), "number" == typeof e) n.to(e);
                else if ("string" == typeof a) {
                    if ("undefined" == typeof n[a]) throw new TypeError('No method named "' + a + '"');
                    n[a]();
                } else i.interval && i.ride && (n.pause(), n.cycle());
            });
        }, t6._dataApiClickHandler = function(e) {
            var n = d.getSelectorFromElement(this);
            if (n) {
                var i = o1.default(n)[0];
                if (i && o1.default(i).hasClass("carousel")) {
                    var a = r1({}, o1.default(i).data(), o1.default(this).data()), s = this.getAttribute("data-slide-to");
                    s && (a.interval = !1), t6._jQueryInterface.call(o1.default(i), a), s && o1.default(i).data(w).to(s), e.preventDefault();
                }
            }
        }, l1(t6, null, [
            {
                key: "VERSION",
                get: function() {
                    return "4.6.1";
                }
            },
            {
                key: "Default",
                get: function() {
                    return k;
                }
            }
        ]), t6;
    }();
    o1.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", P._dataApiClickHandler), o1.default(window).on("load.bs.carousel.data-api", function() {
        for(var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, n = t.length; e < n; e++){
            var i = o1.default(t[e]);
            P._jQueryInterface.call(i, i.data());
        }
    }), o1.default.fn[T] = P._jQueryInterface, o1.default.fn[T].Constructor = P, o1.default.fn[T].noConflict = function() {
        return o1.default.fn[T] = C, P._jQueryInterface;
    };
    var L = "collapse", R = "bs.collapse", x = o1.default.fn[L], q = "show", F = "collapse", Q = "collapsing", B = "collapsed", H = "width", U = '[data-toggle="collapse"]', M = {
        toggle: !0,
        parent: ""
    }, W = {
        toggle: "boolean",
        parent: "(string|element)"
    }, V = function() {
        function t8(t, e11) {
            this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e11), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
            for(var n = [].slice.call(document.querySelectorAll(U)), i = 0, o = n.length; i < o; i++){
                var a = n[i], s = d.getSelectorFromElement(a), l = [].slice.call(document.querySelectorAll(s)).filter(function(e) {
                    return e === t;
                });
                null !== s && l.length > 0 && (this._selector = s, this._triggerArray.push(a));
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
        }
        var e10 = t8.prototype;
        return e10.toggle = function() {
            o1.default(this._element).hasClass(q) ? this.hide() : this.show();
        }, e10.show = function() {
            var e, n, i = this;
            if (!(this._isTransitioning || o1.default(this._element).hasClass(q) || (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(t) {
                return "string" == typeof i._config.parent ? t.getAttribute("data-parent") === i._config.parent : t.classList.contains(F);
            })).length && (e = null), e && (n = o1.default(e).not(this._selector).data(R)) && n._isTransitioning))) {
                var a = o1.default.Event("show.bs.collapse");
                if (o1.default(this._element).trigger(a), !a.isDefaultPrevented()) {
                    e && (t8._jQueryInterface.call(o1.default(e).not(this._selector), "hide"), n || o1.default(e).data(R, null));
                    var s = this._getDimension();
                    o1.default(this._element).removeClass(F).addClass(Q), this._element.style[s] = 0, this._triggerArray.length && o1.default(this._triggerArray).removeClass(B).attr("aria-expanded", !0), this.setTransitioning(!0);
                    var l = "scroll" + (s[0].toUpperCase() + s.slice(1)), r = d.getTransitionDurationFromElement(this._element);
                    o1.default(this._element).one(d.TRANSITION_END, function() {
                        o1.default(i._element).removeClass(Q).addClass("collapse show"), i._element.style[s] = "", i.setTransitioning(!1), o1.default(i._element).trigger("shown.bs.collapse");
                    }).emulateTransitionEnd(r), this._element.style[s] = this._element[l] + "px";
                }
            }
        }, e10.hide = function() {
            var t = this;
            if (!this._isTransitioning && o1.default(this._element).hasClass(q)) {
                var e = o1.default.Event("hide.bs.collapse");
                if (o1.default(this._element).trigger(e), !e.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", d.reflow(this._element), o1.default(this._element).addClass(Q).removeClass("collapse show");
                    var i = this._triggerArray.length;
                    if (i > 0) for(var a = 0; a < i; a++){
                        var s = this._triggerArray[a], l = d.getSelectorFromElement(s);
                        null !== l && (o1.default([].slice.call(document.querySelectorAll(l))).hasClass(q) || o1.default(s).addClass(B).attr("aria-expanded", !1));
                    }
                    this.setTransitioning(!0), this._element.style[n] = "";
                    var r = d.getTransitionDurationFromElement(this._element);
                    o1.default(this._element).one(d.TRANSITION_END, function() {
                        t.setTransitioning(!1), o1.default(t._element).removeClass(Q).addClass(F).trigger("hidden.bs.collapse");
                    }).emulateTransitionEnd(r);
                }
            }
        }, e10.setTransitioning = function(t) {
            this._isTransitioning = t;
        }, e10.dispose = function() {
            o1.default.removeData(this._element, R), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
        }, e10._getConfig = function(t) {
            return (t = r1({}, M, t)).toggle = Boolean(t.toggle), d.typeCheckConfig(L, t, W), t;
        }, e10._getDimension = function() {
            return o1.default(this._element).hasClass(H) ? H : "height";
        }, e10._getParent = function() {
            var e, n = this;
            d.isElement(this._config.parent) ? (e = this._config.parent, "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
            var i2 = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', a = [].slice.call(e.querySelectorAll(i2));
            return o1.default(a).each(function(e, i) {
                n._addAriaAndCollapsedClass(t8._getTargetFromElement(i), [
                    i
                ]);
            }), e;
        }, e10._addAriaAndCollapsedClass = function(t, e) {
            var n = o1.default(t).hasClass(q);
            e.length && o1.default(e).toggleClass(B, !n).attr("aria-expanded", n);
        }, t8._getTargetFromElement = function(t) {
            var e = d.getSelectorFromElement(t);
            return e ? document.querySelector(e) : null;
        }, t8._jQueryInterface = function(e) {
            return this.each(function() {
                var n = o1.default(this), i = n.data(R), a = r1({}, M, n.data(), "object" == typeof e && e ? e : {});
                if (!i && a.toggle && "string" == typeof e && /show|hide/.test(e) && (a.toggle = !1), i || (i = new t8(this, a), n.data(R, i)), "string" == typeof e) {
                    if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                    i[e]();
                }
            });
        }, l1(t8, null, [
            {
                key: "VERSION",
                get: function() {
                    return "4.6.1";
                }
            },
            {
                key: "Default",
                get: function() {
                    return M;
                }
            }
        ]), t8;
    }();
    o1.default(document).on("click.bs.collapse.data-api", U, function(t9) {
        "A" === t9.currentTarget.tagName && t9.preventDefault();
        var e = o1.default(this), n4 = d.getSelectorFromElement(this), i = [].slice.call(document.querySelectorAll(n4));
        o1.default(i).each(function() {
            var t = o1.default(this), n = t.data(R) ? "toggle" : e.data();
            V._jQueryInterface.call(t, n);
        });
    }), o1.default.fn[L] = V._jQueryInterface, o1.default.fn[L].Constructor = V, o1.default.fn[L].noConflict = function() {
        return o1.default.fn[L] = x, V._jQueryInterface;
    };
    var z = "dropdown", K = "bs.dropdown", X = o1.default.fn[z], Y = new RegExp("38|40|27"), $ = "disabled", J = "show", G = "dropdown-menu-right", Z = "hide.bs.dropdown", tt = "hidden.bs.dropdown", et = "click.bs.dropdown.data-api", nt = "keydown.bs.dropdown.data-api", it = '[data-toggle="dropdown"]', ot = ".dropdown-menu", at = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }, st = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    }, lt = function() {
        function t10(t, e) {
            this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
        }
        var e12 = t10.prototype;
        return e12.toggle = function() {
            if (!this._element.disabled && !o1.default(this._element).hasClass($)) {
                var e = o1.default(this._menu).hasClass(J);
                t10._clearMenus(), e || this.show(!0);
            }
        }, e12.show = function(e) {
            if (void 0 === e && (e = !1), !(this._element.disabled || o1.default(this._element).hasClass($) || o1.default(this._menu).hasClass(J))) {
                var n = {
                    relatedTarget: this._element
                }, i = o1.default.Event("show.bs.dropdown", n), s = t10._getParentFromElement(this._element);
                if (o1.default(s).trigger(i), !i.isDefaultPrevented()) {
                    if (!this._inNavbar && e) {
                        if ("undefined" == typeof a1.default) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                        var l = this._element;
                        "parent" === this._config.reference ? l = s : d.isElement(this._config.reference) && (l = this._config.reference, "undefined" != typeof this._config.reference.jquery && (l = this._config.reference[0])), "scrollParent" !== this._config.boundary && o1.default(s).addClass("position-static"), this._popper = new a1.default(l, this._menu, this._getPopperConfig());
                    }
                    "ontouchstart" in document.documentElement && 0 === o1.default(s).closest(".navbar-nav").length && o1.default(document.body).children().on("mouseover", null, o1.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), o1.default(this._menu).toggleClass(J), o1.default(s).toggleClass(J).trigger(o1.default.Event("shown.bs.dropdown", n));
                }
            }
        }, e12.hide = function() {
            if (!this._element.disabled && !o1.default(this._element).hasClass($) && o1.default(this._menu).hasClass(J)) {
                var e = {
                    relatedTarget: this._element
                }, n = o1.default.Event(Z, e), i = t10._getParentFromElement(this._element);
                o1.default(i).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), o1.default(this._menu).toggleClass(J), o1.default(i).toggleClass(J).trigger(o1.default.Event(tt, e)));
            }
        }, e12.dispose = function() {
            o1.default.removeData(this._element, K), o1.default(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
        }, e12.update = function() {
            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
        }, e12._addEventListeners = function() {
            var t = this;
            o1.default(this._element).on("click.bs.dropdown", function(e) {
                e.preventDefault(), e.stopPropagation(), t.toggle();
            });
        }, e12._getConfig = function(t) {
            return t = r1({}, this.constructor.Default, o1.default(this._element).data(), t), d.typeCheckConfig(z, t, this.constructor.DefaultType), t;
        }, e12._getMenuElement = function() {
            if (!this._menu) {
                var e = t10._getParentFromElement(this._element);
                e && (this._menu = e.querySelector(ot));
            }
            return this._menu;
        }, e12._getPlacement = function() {
            var t = o1.default(this._element.parentNode), e = "bottom-start";
            return t.hasClass("dropup") ? e = o1.default(this._menu).hasClass(G) ? "top-end" : "top-start" : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : o1.default(this._menu).hasClass(G) && (e = "bottom-end"), e;
        }, e12._detectNavbar = function() {
            return o1.default(this._element).closest(".navbar").length > 0;
        }, e12._getOffset = function() {
            var t = this, e13 = {};
            return "function" == typeof this._config.offset ? e13.fn = function(e) {
                return e.offsets = r1({}, e.offsets, t._config.offset(e.offsets, t._element)), e;
            } : e13.offset = this._config.offset, e13;
        }, e12._getPopperConfig = function() {
            var t = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (t.modifiers.applyStyle = {
                enabled: !1
            }), r1({}, t, this._config.popperConfig);
        }, t10._jQueryInterface = function(e) {
            return this.each(function() {
                var n = o1.default(this).data(K);
                if (n || (n = new t10(this, "object" == typeof e ? e : null), o1.default(this).data(K, n)), "string" == typeof e) {
                    if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                    n[e]();
                }
            });
        }, t10._clearMenus = function(e) {
            if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for(var n = [].slice.call(document.querySelectorAll(it)), i = 0, a = n.length; i < a; i++){
                var s = t10._getParentFromElement(n[i]), l = o1.default(n[i]).data(K), r = {
                    relatedTarget: n[i]
                };
                if (e && "click" === e.type && (r.clickEvent = e), l) {
                    var u = l._menu;
                    if (o1.default(s).hasClass(J) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && o1.default.contains(s, e.target))) {
                        var f = o1.default.Event(Z, r);
                        o1.default(s).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && o1.default(document.body).children().off("mouseover", null, o1.default.noop), n[i].setAttribute("aria-expanded", "false"), l._popper && l._popper.destroy(), o1.default(u).removeClass(J), o1.default(s).removeClass(J).trigger(o1.default.Event(tt, r)));
                    }
                }
            }
        }, t10._getParentFromElement = function(t) {
            var e, n = d.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)), e || t.parentNode;
        }, t10._dataApiKeydownHandler = function(e) {
            if (!(/input|textarea/i.test(e.target.tagName) ? 32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || o1.default(e.target).closest(ot).length) : !Y.test(e.which)) && !this.disabled && !o1.default(this).hasClass($)) {
                var n = t10._getParentFromElement(this), i = o1.default(n).hasClass(J);
                if (i || 27 !== e.which) {
                    if (e.preventDefault(), e.stopPropagation(), !i || 27 === e.which || 32 === e.which) return 27 === e.which && o1.default(n.querySelector(it)).trigger("focus"), void o1.default(this).trigger("click");
                    var a = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(t) {
                        return o1.default(t).is(":visible");
                    });
                    if (0 !== a.length) {
                        var s = a.indexOf(e.target);
                        38 === e.which && s > 0 && s--, 40 === e.which && s < a.length - 1 && s++, s < 0 && (s = 0), a[s].focus();
                    }
                }
            }
        }, l1(t10, null, [
            {
                key: "VERSION",
                get: function() {
                    return "4.6.1";
                }
            },
            {
                key: "Default",
                get: function() {
                    return at;
                }
            },
            {
                key: "DefaultType",
                get: function() {
                    return st;
                }
            }
        ]), t10;
    }();
    o1.default(document).on(nt, it, lt._dataApiKeydownHandler).on(nt, ot, lt._dataApiKeydownHandler).on(et + " keyup.bs.dropdown.data-api", lt._clearMenus).on(et, it, function(t) {
        t.preventDefault(), t.stopPropagation(), lt._jQueryInterface.call(o1.default(this), "toggle");
    }).on(et, ".dropdown form", function(t) {
        t.stopPropagation();
    }), o1.default.fn[z] = lt._jQueryInterface, o1.default.fn[z].Constructor = lt, o1.default.fn[z].noConflict = function() {
        return o1.default.fn[z] = X, lt._jQueryInterface;
    };
    var rt = "bs.modal", ut = o1.default.fn.modal, ft = "modal-open", dt = "fade", ct = "show", ht = "modal-static", gt = "hidden.bs.modal", mt = "show.bs.modal", pt = "focusin.bs.modal", _t = "resize.bs.modal", vt = "click.dismiss.bs.modal", yt = "keydown.dismiss.bs.modal", bt = "mousedown.dismiss.bs.modal", Et = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Tt = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }, wt = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }, Ct = function() {
        function t11(t, e) {
            this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
        }
        var e14 = t11.prototype;
        return e14.toggle = function(t) {
            return this._isShown ? this.hide() : this.show(t);
        }, e14.show = function(t12) {
            var e = this;
            if (!this._isShown && !this._isTransitioning) {
                var n = o1.default.Event(mt, {
                    relatedTarget: t12
                });
                o1.default(this._element).trigger(n), n.isDefaultPrevented() || (this._isShown = !0, o1.default(this._element).hasClass(dt) && (this._isTransitioning = !0), this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), o1.default(this._element).on(vt, '[data-dismiss="modal"]', function(t) {
                    return e.hide(t);
                }), o1.default(this._dialog).on(bt, function() {
                    o1.default(e._element).one("mouseup.dismiss.bs.modal", function(t) {
                        o1.default(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
                    });
                }), this._showBackdrop(function() {
                    return e._showElement(t12);
                }));
            }
        }, e14.hide = function(t13) {
            var e = this;
            if (t13 && t13.preventDefault(), this._isShown && !this._isTransitioning) {
                var n = o1.default.Event("hide.bs.modal");
                if (o1.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = o1.default(this._element).hasClass(dt);
                    if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), o1.default(document).off(pt), o1.default(this._element).removeClass(ct), o1.default(this._element).off(vt), o1.default(this._dialog).off(bt), i) {
                        var a = d.getTransitionDurationFromElement(this._element);
                        o1.default(this._element).one(d.TRANSITION_END, function(t) {
                            return e._hideModal(t);
                        }).emulateTransitionEnd(a);
                    } else this._hideModal();
                }
            }
        }, e14.dispose = function() {
            [
                window,
                this._element,
                this._dialog
            ].forEach(function(t) {
                return o1.default(t).off(".bs.modal");
            }), o1.default(document).off(pt), o1.default.removeData(this._element, rt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
        }, e14.handleUpdate = function() {
            this._adjustDialog();
        }, e14._getConfig = function(t) {
            return t = r1({}, Tt, t), d.typeCheckConfig("modal", t, wt), t;
        }, e14._triggerBackdropTransition = function() {
            var t = this, e = o1.default.Event("hidePrevented.bs.modal");
            if (o1.default(this._element).trigger(e), !e.isDefaultPrevented()) {
                var n = this._element.scrollHeight > document.documentElement.clientHeight;
                n || (this._element.style.overflowY = "hidden"), this._element.classList.add(ht);
                var i = d.getTransitionDurationFromElement(this._dialog);
                o1.default(this._element).off(d.TRANSITION_END), o1.default(this._element).one(d.TRANSITION_END, function() {
                    t._element.classList.remove(ht), n || o1.default(t._element).one(d.TRANSITION_END, function() {
                        t._element.style.overflowY = "";
                    }).emulateTransitionEnd(t._element, i);
                }).emulateTransitionEnd(i), this._element.focus();
            }
        }, e14._showElement = function(t) {
            var e = this, n = o1.default(this._element).hasClass(dt), i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), o1.default(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && d.reflow(this._element), o1.default(this._element).addClass(ct), this._config.focus && this._enforceFocus();
            var a = o1.default.Event("shown.bs.modal", {
                relatedTarget: t
            }), s = function() {
                e._config.focus && e._element.focus(), e._isTransitioning = !1, o1.default(e._element).trigger(a);
            };
            if (n) {
                var l = d.getTransitionDurationFromElement(this._dialog);
                o1.default(this._dialog).one(d.TRANSITION_END, s).emulateTransitionEnd(l);
            } else s();
        }, e14._enforceFocus = function() {
            var t = this;
            o1.default(document).off(pt).on(pt, function(e) {
                document !== e.target && t._element !== e.target && 0 === o1.default(t._element).has(e.target).length && t._element.focus();
            });
        }, e14._setEscapeEvent = function() {
            var t = this;
            this._isShown ? o1.default(this._element).on(yt, function(e) {
                t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition();
            }) : this._isShown || o1.default(this._element).off(yt);
        }, e14._setResizeEvent = function() {
            var t = this;
            this._isShown ? o1.default(window).on(_t, function(e) {
                return t.handleUpdate(e);
            }) : o1.default(window).off(_t);
        }, e14._hideModal = function() {
            var t = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function() {
                o1.default(document.body).removeClass(ft), t._resetAdjustments(), t._resetScrollbar(), o1.default(t._element).trigger(gt);
            });
        }, e14._removeBackdrop = function() {
            this._backdrop && (o1.default(this._backdrop).remove(), this._backdrop = null);
        }, e14._showBackdrop = function(t14) {
            var e = this, n = o1.default(this._element).hasClass(dt) ? dt : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), o1.default(this._backdrop).appendTo(document.body), o1.default(this._element).on(vt, function(t) {
                    e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._triggerBackdropTransition() : e.hide());
                }), n && d.reflow(this._backdrop), o1.default(this._backdrop).addClass(ct), !t14) return;
                if (!n) return void t14();
                var i = d.getTransitionDurationFromElement(this._backdrop);
                o1.default(this._backdrop).one(d.TRANSITION_END, t14).emulateTransitionEnd(i);
            } else if (!this._isShown && this._backdrop) {
                o1.default(this._backdrop).removeClass(ct);
                var a = function() {
                    e._removeBackdrop(), t14 && t14();
                };
                if (o1.default(this._element).hasClass(dt)) {
                    var s = d.getTransitionDurationFromElement(this._backdrop);
                    o1.default(this._backdrop).one(d.TRANSITION_END, a).emulateTransitionEnd(s);
                } else a();
            } else t14 && t14();
        }, e14._adjustDialog = function() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }, e14._resetAdjustments = function() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }, e14._checkScrollbar = function() {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
        }, e14._setScrollbar = function() {
            var t = this;
            if (this._isBodyOverflowing) {
                var e = [].slice.call(document.querySelectorAll(Et)), n5 = [].slice.call(document.querySelectorAll(".sticky-top"));
                o1.default(e).each(function(e, n) {
                    var i = n.style.paddingRight, a = o1.default(n).css("padding-right");
                    o1.default(n).data("padding-right", i).css("padding-right", parseFloat(a) + t._scrollbarWidth + "px");
                }), o1.default(n5).each(function(e, n) {
                    var i = n.style.marginRight, a = o1.default(n).css("margin-right");
                    o1.default(n).data("margin-right", i).css("margin-right", parseFloat(a) - t._scrollbarWidth + "px");
                });
                var i3 = document.body.style.paddingRight, a2 = o1.default(document.body).css("padding-right");
                o1.default(document.body).data("padding-right", i3).css("padding-right", parseFloat(a2) + this._scrollbarWidth + "px");
            }
            o1.default(document.body).addClass(ft);
        }, e14._resetScrollbar = function() {
            var t = [].slice.call(document.querySelectorAll(Et));
            o1.default(t).each(function(t, e) {
                var n = o1.default(e).data("padding-right");
                o1.default(e).removeData("padding-right"), e.style.paddingRight = n || "";
            });
            var e15 = [].slice.call(document.querySelectorAll(".sticky-top"));
            o1.default(e15).each(function(t, e) {
                var n = o1.default(e).data("margin-right");
                "undefined" != typeof n && o1.default(e).css("margin-right", n).removeData("margin-right");
            });
            var n7 = o1.default(document.body).data("padding-right");
            o1.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n7 || "";
        }, e14._getScrollbarWidth = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
        }, t11._jQueryInterface = function(e, n) {
            return this.each(function() {
                var i = o1.default(this).data(rt), a = r1({}, Tt, o1.default(this).data(), "object" == typeof e && e ? e : {});
                if (i || (i = new t11(this, a), o1.default(this).data(rt, i)), "string" == typeof e) {
                    if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                    i[e](n);
                } else a.show && i.show(n);
            });
        }, l1(t11, null, [
            {
                key: "VERSION",
                get: function() {
                    return "4.6.1";
                }
            },
            {
                key: "Default",
                get: function() {
                    return Tt;
                }
            }
        ]), t11;
    }();
    o1.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t15) {
        var e, n = this, i = d.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var a = o1.default(e).data(rt) ? "toggle" : r1({}, o1.default(e).data(), o1.default(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t15.preventDefault();
        var s = o1.default(e).one(mt, function(t) {
            t.isDefaultPrevented() || s.one(gt, function() {
                o1.default(n).is(":visible") && n.focus();
            });
        });
        Ct._jQueryInterface.call(o1.default(e), a, this);
    }), o1.default.fn.modal = Ct._jQueryInterface, o1.default.fn.modal.Constructor = Ct, o1.default.fn.modal.noConflict = function() {
        return o1.default.fn.modal = ut, Ct._jQueryInterface;
    };
    var St = [
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href"
    ], Nt = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Dt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function At(t16, e16, n8) {
        if (0 === t16.length) return t16;
        if (n8 && "function" == typeof n8) return n8(t16);
        for(var i5 = (new window.DOMParser).parseFromString(t16, "text/html"), o2 = Object.keys(e16), a4 = [].slice.call(i5.body.querySelectorAll("*")), s2 = function(t17, n9) {
            var i6 = a4[t17], s = i6.nodeName.toLowerCase();
            if (-1 === o2.indexOf(i6.nodeName.toLowerCase())) return i6.parentNode.removeChild(i6), "continue";
            var l = [].slice.call(i6.attributes), r = [].concat(e16["*"] || [], e16[s] || []);
            l.forEach(function(t18) {
                (function(t19, e) {
                    var n = t19.nodeName.toLowerCase();
                    if (-1 !== e.indexOf(n)) return -1 === St.indexOf(n) || Boolean(Nt.test(t19.nodeValue) || Dt.test(t19.nodeValue));
                    for(var i = e.filter(function(t) {
                        return t instanceof RegExp;
                    }), o = 0, a = i.length; o < a; o++)if (i[o].test(n)) return !0;
                    return !1;
                })(t18, r) || i6.removeAttribute(t18.nodeName);
            });
        }, l2 = 0, r2 = a4.length; l2 < r2; l2++)s2(l2);
        return i5.body.innerHTML;
    }
    var It = "tooltip", kt = "bs.tooltip", Ot = o1.default.fn.tooltip, jt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), Pt = [
        "sanitize",
        "whiteList",
        "sanitizeFn"
    ], Lt = "fade", Rt = "show", xt = "show", qt = "out", Ft = "hover", Qt = "focus", Bt = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }, Ht = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
            "*": [
                "class",
                "dir",
                "id",
                "lang",
                "role",
                /^aria-[\w-]*$/i
            ],
            a: [
                "target",
                "href",
                "title",
                "rel"
            ],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: [
                "src",
                "srcset",
                "alt",
                "title",
                "width",
                "height"
            ],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        popperConfig: null
    }, Ut = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)"
    }, Mt = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }, Wt = function() {
        function t20(t, e) {
            if ("undefined" == typeof a1.default) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
        }
        var e17 = t20.prototype;
        return e17.enable = function() {
            this._isEnabled = !0;
        }, e17.disable = function() {
            this._isEnabled = !1;
        }, e17.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled;
        }, e17.toggle = function(t) {
            if (this._isEnabled) {
                if (t) {
                    var e = this.constructor.DATA_KEY, n = o1.default(t.currentTarget).data(e);
                    n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), o1.default(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
                } else {
                    if (o1.default(this.getTipElement()).hasClass(Rt)) return void this._leave(null, this);
                    this._enter(null, this);
                }
            }
        }, e17.dispose = function() {
            clearTimeout(this._timeout), o1.default.removeData(this.element, this.constructor.DATA_KEY), o1.default(this.element).off(this.constructor.EVENT_KEY), o1.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && o1.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
        }, e17.show = function() {
            var t = this;
            if ("none" === o1.default(this.element).css("display")) throw new Error("Please use show on visible elements");
            var e18 = o1.default.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                o1.default(this.element).trigger(e18);
                var n = d.findShadowRoot(this.element), i = o1.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                if (e18.isDefaultPrevented() || !i) return;
                var s = this.getTipElement(), l = d.getUID(this.constructor.NAME);
                s.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && o1.default(s).addClass(Lt);
                var r = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement, u = this._getAttachment(r);
                this.addAttachmentClass(u);
                var f = this._getContainer();
                o1.default(s).data(this.constructor.DATA_KEY, this), o1.default.contains(this.element.ownerDocument.documentElement, this.tip) || o1.default(s).appendTo(f), o1.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new a1.default(this.element, s, this._getPopperConfig(u)), o1.default(s).addClass(Rt), o1.default(s).addClass(this.config.customClass), "ontouchstart" in document.documentElement && o1.default(document.body).children().on("mouseover", null, o1.default.noop);
                var c = function() {
                    t.config.animation && t._fixTransition();
                    var e = t._hoverState;
                    t._hoverState = null, o1.default(t.element).trigger(t.constructor.Event.SHOWN), e === qt && t._leave(null, t);
                };
                if (o1.default(this.tip).hasClass(Lt)) {
                    var h = d.getTransitionDurationFromElement(this.tip);
                    o1.default(this.tip).one(d.TRANSITION_END, c).emulateTransitionEnd(h);
                } else c();
            }
        }, e17.hide = function(t) {
            var e = this, n = this.getTipElement(), i = o1.default.Event(this.constructor.Event.HIDE), a = function() {
                e._hoverState !== xt && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), o1.default(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
            };
            if (o1.default(this.element).trigger(i), !i.isDefaultPrevented()) {
                if (o1.default(n).removeClass(Rt), "ontouchstart" in document.documentElement && o1.default(document.body).children().off("mouseover", null, o1.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, o1.default(this.tip).hasClass(Lt)) {
                    var s = d.getTransitionDurationFromElement(n);
                    o1.default(n).one(d.TRANSITION_END, a).emulateTransitionEnd(s);
                } else a();
                this._hoverState = "";
            }
        }, e17.update = function() {
            null !== this._popper && this._popper.scheduleUpdate();
        }, e17.isWithContent = function() {
            return Boolean(this.getTitle());
        }, e17.addAttachmentClass = function(t) {
            o1.default(this.getTipElement()).addClass("bs-tooltip-" + t);
        }, e17.getTipElement = function() {
            return this.tip = this.tip || o1.default(this.config.template)[0], this.tip;
        }, e17.setContent = function() {
            var t = this.getTipElement();
            this.setElementContent(o1.default(t.querySelectorAll(".tooltip-inner")), this.getTitle()), o1.default(t).removeClass("fade show");
        }, e17.setElementContent = function(t, e) {
            "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = At(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? o1.default(e).parent().is(t) || t.empty().append(e) : t.text(o1.default(e).text());
        }, e17.getTitle = function() {
            var t = this.element.getAttribute("data-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
        }, e17._getPopperConfig = function(t21) {
            var e = this;
            return r1({}, {
                placement: t21,
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        behavior: this.config.fallbackPlacement
                    },
                    arrow: {
                        element: ".arrow"
                    },
                    preventOverflow: {
                        boundariesElement: this.config.boundary
                    }
                },
                onCreate: function(t) {
                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                },
                onUpdate: function(t) {
                    return e._handlePopperPlacementChange(t);
                }
            }, this.config.popperConfig);
        }, e17._getOffset = function() {
            var t = this, e19 = {};
            return "function" == typeof this.config.offset ? e19.fn = function(e) {
                return e.offsets = r1({}, e.offsets, t.config.offset(e.offsets, t.element)), e;
            } : e19.offset = this.config.offset, e19;
        }, e17._getContainer = function() {
            return !1 === this.config.container ? document.body : d.isElement(this.config.container) ? o1.default(this.config.container) : o1.default(document).find(this.config.container);
        }, e17._getAttachment = function(t) {
            return Bt[t.toUpperCase()];
        }, e17._setListeners = function() {
            var t = this;
            this.config.trigger.split(" ").forEach(function(e20) {
                if ("click" === e20) o1.default(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) {
                    return t.toggle(e);
                });
                else if ("manual" !== e20) {
                    var n = e20 === Ft ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN, i = e20 === Ft ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                    o1.default(t.element).on(n, t.config.selector, function(e) {
                        return t._enter(e);
                    }).on(i, t.config.selector, function(e) {
                        return t._leave(e);
                    });
                }
            }), this._hideModalHandler = function() {
                t.element && t.hide();
            }, o1.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = r1({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle();
        }, e17._fixTitle = function() {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
        }, e17._enter = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || o1.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), o1.default(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Qt : Ft] = !0), o1.default(e.getTipElement()).hasClass(Rt) || e._hoverState === xt ? e._hoverState = xt : (clearTimeout(e._timeout), e._hoverState = xt, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                e._hoverState === xt && e.show();
            }, e.config.delay.show) : e.show());
        }, e17._leave = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || o1.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), o1.default(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Qt : Ft] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = qt, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                e._hoverState === qt && e.hide();
            }, e.config.delay.hide) : e.hide());
        }, e17._isWithActiveTrigger = function() {
            for(var t in this._activeTrigger)if (this._activeTrigger[t]) return !0;
            return !1;
        }, e17._getConfig = function(t22) {
            var e = o1.default(this.element).data();
            return Object.keys(e).forEach(function(t) {
                -1 !== Pt.indexOf(t) && delete e[t];
            }), "number" == typeof (t22 = r1({}, this.constructor.Default, e, "object" == typeof t22 && t22 ? t22 : {})).delay && (t22.delay = {
                show: t22.delay,
                hide: t22.delay
            }), "number" == typeof t22.title && (t22.title = t22.title.toString()), "number" == typeof t22.content && (t22.content = t22.content.toString()), d.typeCheckConfig(It, t22, this.constructor.DefaultType), t22.sanitize && (t22.template = At(t22.template, t22.whiteList, t22.sanitizeFn)), t22;
        }, e17._getDelegateConfig = function() {
            var t = {};
            if (this.config) for(var e in this.config)this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t;
        }, e17._cleanTipClass = function() {
            var t = o1.default(this.getTipElement()), e = t.attr("class").match(jt);
            null !== e && e.length && t.removeClass(e.join(""));
        }, e17._handlePopperPlacementChange = function(t) {
            this.tip = t.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
        }, e17._fixTransition = function() {
            var t = this.getTipElement(), e = this.config.animation;
            null === t.getAttribute("x-placement") && (o1.default(t).removeClass(Lt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
        }, t20._jQueryInterface = function(e) {
            return this.each(function() {
                var n = o1.default(this), i = n.data(kt), a = "object" == typeof e && e;
                if ((i || !/dispose|hide/.test(e)) && (i || (i = new t20(this, a), n.data(kt, i)), "string" == typeof e)) {
                    if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                    i[e]();
                }
            });
        }, l1(t20, null, [
            {
                key: "VERSION",
                get: function() {
                    return "4.6.1";
                }
            },
            {
                key: "Default",
                get: function() {
                    return Ht;
                }
            },
            {
                key: "NAME",
                get: function() {
                    return It;
                }
            },
            {
                key: "DATA_KEY",
                get: function() {
                    return kt;
                }
            },
            {
                key: "Event",
                get: function() {
                    return Mt;
                }
            },
            {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.tooltip";
                }
            },
            {
                key: "DefaultType",
                get: function() {
                    return Ut;
                }
            }
        ]), t20;
    }();
    o1.default.fn.tooltip = Wt._jQueryInterface, o1.default.fn.tooltip.Constructor = Wt, o1.default.fn.tooltip.noConflict = function() {
        return o1.default.fn.tooltip = Ot, Wt._jQueryInterface;
    };
    var Vt = "bs.popover", zt = o1.default.fn.popover, Kt = new RegExp("(^|\\s)bs-popover\\S+", "g"), Xt = r1({}, Wt.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }), Yt = r1({}, Wt.DefaultType, {
        content: "(string|element|function)"
    }), $t = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    }, Jt = function(t23) {
        var e21, n10;
        function i() {
            return t23.apply(this, arguments) || this;
        }
        n10 = t23, (e21 = i).prototype = Object.create(n10.prototype), e21.prototype.constructor = e21, u1(e21, n10);
        var a = i.prototype;
        return a.isWithContent = function() {
            return this.getTitle() || this._getContent();
        }, a.addAttachmentClass = function(t) {
            o1.default(this.getTipElement()).addClass("bs-popover-" + t);
        }, a.getTipElement = function() {
            return this.tip = this.tip || o1.default(this.config.template)[0], this.tip;
        }, a.setContent = function() {
            var t = o1.default(this.getTipElement());
            this.setElementContent(t.find(".popover-header"), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show");
        }, a._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content;
        }, a._cleanTipClass = function() {
            var t = o1.default(this.getTipElement()), e = t.attr("class").match(Kt);
            null !== e && e.length > 0 && t.removeClass(e.join(""));
        }, i._jQueryInterface = function(t) {
            return this.each(function() {
                var e = o1.default(this).data(Vt), n = "object" == typeof t ? t : null;
                if ((e || !/dispose|hide/.test(t)) && (e || (e = new i(this, n), o1.default(this).data(Vt, e)), "string" == typeof t)) {
                    if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
                    e[t]();
                }
            });
        }, l1(i, null, [
            {
                key: "VERSION",
                get: function() {
                    return "4.6.1";
                }
            },
            {
                key: "Default",
                get: function() {
                    return Xt;
                }
            },
            {
                key: "NAME",
                get: function() {
                    return "popover";
                }
            },
            {
                key: "DATA_KEY",
                get: function() {
                    return Vt;
                }
            },
            {
                key: "Event",
                get: function() {
                    return $t;
                }
            },
            {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.popover";
                }
            },
            {
                key: "DefaultType",
                get: function() {
                    return Yt;
                }
            }
        ]), i;
    }(Wt);
    o1.default.fn.popover = Jt._jQueryInterface, o1.default.fn.popover.Constructor = Jt, o1.default.fn.popover.noConflict = function() {
        return o1.default.fn.popover = zt, Jt._jQueryInterface;
    };
    var Gt = "scrollspy", Zt = "bs.scrollspy", te = o1.default.fn[Gt], ee = "active", ne = "position", ie = ".nav, .list-group", oe = {
        offset: 10,
        method: "auto",
        target: ""
    }, ae = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }, se = function() {
        function t24(t25, e) {
            var n = this;
            this._element = t25, this._scrollElement = "BODY" === t25.tagName ? window : t25, this._config = this._getConfig(e), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, o1.default(this._scrollElement).on("scroll.bs.scrollspy", function(t) {
                return n._process(t);
            }), this.refresh(), this._process();
        }
        var e22 = t24.prototype;
        return e22.refresh = function() {
            var t26 = this, e23 = this._scrollElement === this._scrollElement.window ? "offset" : ne, n = "auto" === this._config.method ? e23 : this._config.method, i = n === ne ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                var e, a = d.getSelectorFromElement(t);
                if (a && (e = document.querySelector(a)), e) {
                    var s = e.getBoundingClientRect();
                    if (s.width || s.height) return [
                        o1.default(e)[n]().top + i,
                        a
                    ];
                }
                return null;
            }).filter(function(t) {
                return t;
            }).sort(function(t, e) {
                return t[0] - e[0];
            }).forEach(function(e) {
                t26._offsets.push(e[0]), t26._targets.push(e[1]);
            });
        }, e22.dispose = function() {
            o1.default.removeData(this._element, Zt), o1.default(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
        }, e22._getConfig = function(t) {
            if ("string" != typeof (t = r1({}, oe, "object" == typeof t && t ? t : {})).target && d.isElement(t.target)) {
                var e = o1.default(t.target).attr("id");
                e || (e = d.getUID(Gt), o1.default(t.target).attr("id", e)), t.target = "#" + e;
            }
            return d.typeCheckConfig(Gt, t, ae), t;
        }, e22._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        }, e22._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }, e22._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        }, e22._process = function() {
            var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), t >= n) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i);
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                for(var o = this._offsets.length; o--;)this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
            }
        }, e22._activate = function(t) {
            this._activeTarget = t, this._clear();
            var e24 = this._selector.split(",").map(function(e) {
                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
            }), n = o1.default([].slice.call(document.querySelectorAll(e24.join(","))));
            n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(ee), n.addClass(ee)) : (n.addClass(ee), n.parents(ie).prev(".nav-link, .list-group-item").addClass(ee), n.parents(ie).prev(".nav-item").children(".nav-link").addClass(ee)), o1.default(this._scrollElement).trigger("activate.bs.scrollspy", {
                relatedTarget: t
            });
        }, e22._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) {
                return t.classList.contains(ee);
            }).forEach(function(t) {
                return t.classList.remove(ee);
            });
        }, t24._jQueryInterface = function(e) {
            return this.each(function() {
                var n = o1.default(this).data(Zt);
                if (n || (n = new t24(this, "object" == typeof e && e), o1.default(this).data(Zt, n)), "string" == typeof e) {
                    if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                    n[e]();
                }
            });
        }, l1(t24, null, [
            {
                key: "VERSION",
                get: function() {
                    return "4.6.1";
                }
            },
            {
                key: "Default",
                get: function() {
                    return oe;
                }
            }
        ]), t24;
    }();
    o1.default(window).on("load.bs.scrollspy.data-api", function() {
        for(var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e = t.length; e--;){
            var n = o1.default(t[e]);
            se._jQueryInterface.call(n, n.data());
        }
    }), o1.default.fn[Gt] = se._jQueryInterface, o1.default.fn[Gt].Constructor = se, o1.default.fn[Gt].noConflict = function() {
        return o1.default.fn[Gt] = te, se._jQueryInterface;
    };
    var le = "bs.tab", re = o1.default.fn.tab, ue = "active", fe = "fade", de = "show", ce = ".active", he = "> li > .active", ge = function() {
        function t27(t) {
            this._element = t;
        }
        var e25 = t27.prototype;
        return e25.show = function() {
            var t = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && o1.default(this._element).hasClass(ue) || o1.default(this._element).hasClass("disabled"))) {
                var e26, n, i7 = o1.default(this._element).closest(".nav, .list-group")[0], a = d.getSelectorFromElement(this._element);
                if (i7) {
                    var s = "UL" === i7.nodeName || "OL" === i7.nodeName ? he : ce;
                    n = (n = o1.default.makeArray(o1.default(i7).find(s)))[n.length - 1];
                }
                var l = o1.default.Event("hide.bs.tab", {
                    relatedTarget: this._element
                }), r = o1.default.Event("show.bs.tab", {
                    relatedTarget: n
                });
                if (n && o1.default(n).trigger(l), o1.default(this._element).trigger(r), !r.isDefaultPrevented() && !l.isDefaultPrevented()) {
                    a && (e26 = document.querySelector(a)), this._activate(this._element, i7);
                    var u = function() {
                        var e = o1.default.Event("hidden.bs.tab", {
                            relatedTarget: t._element
                        }), i = o1.default.Event("shown.bs.tab", {
                            relatedTarget: n
                        });
                        o1.default(n).trigger(e), o1.default(t._element).trigger(i);
                    };
                    e26 ? this._activate(e26, e26.parentNode, u) : u();
                }
            }
        }, e25.dispose = function() {
            o1.default.removeData(this._element, le), this._element = null;
        }, e25._activate = function(t, e, n) {
            var i = this, a = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? o1.default(e).children(ce) : o1.default(e).find(he))[0], s = n && a && o1.default(a).hasClass(fe), l = function() {
                return i._transitionComplete(t, a, n);
            };
            if (a && s) {
                var r = d.getTransitionDurationFromElement(a);
                o1.default(a).removeClass(de).one(d.TRANSITION_END, l).emulateTransitionEnd(r);
            } else l();
        }, e25._transitionComplete = function(t, e, n) {
            if (e) {
                o1.default(e).removeClass(ue);
                var i = o1.default(e.parentNode).find("> .dropdown-menu .active")[0];
                i && o1.default(i).removeClass(ue), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
            }
            o1.default(t).addClass(ue), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), d.reflow(t), t.classList.contains(fe) && t.classList.add(de);
            var a = t.parentNode;
            if (a && "LI" === a.nodeName && (a = a.parentNode), a && o1.default(a).hasClass("dropdown-menu")) {
                var s = o1.default(t).closest(".dropdown")[0];
                if (s) {
                    var l = [].slice.call(s.querySelectorAll(".dropdown-toggle"));
                    o1.default(l).addClass(ue);
                }
                t.setAttribute("aria-expanded", !0);
            }
            n && n();
        }, t27._jQueryInterface = function(e) {
            return this.each(function() {
                var n = o1.default(this), i = n.data(le);
                if (i || (i = new t27(this), n.data(le, i)), "string" == typeof e) {
                    if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                    i[e]();
                }
            });
        }, l1(t27, null, [
            {
                key: "VERSION",
                get: function() {
                    return "4.6.1";
                }
            }
        ]), t27;
    }();
    o1.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(t) {
        t.preventDefault(), ge._jQueryInterface.call(o1.default(this), "show");
    }), o1.default.fn.tab = ge._jQueryInterface, o1.default.fn.tab.Constructor = ge, o1.default.fn.tab.noConflict = function() {
        return o1.default.fn.tab = re, ge._jQueryInterface;
    };
    var me = "bs.toast", pe = o1.default.fn.toast, _e = "hide", ve = "show", ye = "showing", be = "click.dismiss.bs.toast", Ee = {
        animation: !0,
        autohide: !0,
        delay: 500
    }, Te = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, we = function() {
        function t28(t, e) {
            this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners();
        }
        var e28 = t28.prototype;
        return e28.show = function() {
            var t = this, e = o1.default.Event("show.bs.toast");
            if (o1.default(this._element).trigger(e), !e.isDefaultPrevented()) {
                this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                var n = function() {
                    t._element.classList.remove(ye), t._element.classList.add(ve), o1.default(t._element).trigger("shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout(function() {
                        t.hide();
                    }, t._config.delay));
                };
                if (this._element.classList.remove(_e), d.reflow(this._element), this._element.classList.add(ye), this._config.animation) {
                    var i = d.getTransitionDurationFromElement(this._element);
                    o1.default(this._element).one(d.TRANSITION_END, n).emulateTransitionEnd(i);
                } else n();
            }
        }, e28.hide = function() {
            if (this._element.classList.contains(ve)) {
                var t = o1.default.Event("hide.bs.toast");
                o1.default(this._element).trigger(t), t.isDefaultPrevented() || this._close();
            }
        }, e28.dispose = function() {
            this._clearTimeout(), this._element.classList.contains(ve) && this._element.classList.remove(ve), o1.default(this._element).off(be), o1.default.removeData(this._element, me), this._element = null, this._config = null;
        }, e28._getConfig = function(t) {
            return t = r1({}, Ee, o1.default(this._element).data(), "object" == typeof t && t ? t : {}), d.typeCheckConfig("toast", t, this.constructor.DefaultType), t;
        }, e28._setListeners = function() {
            var t = this;
            o1.default(this._element).on(be, '[data-dismiss="toast"]', function() {
                return t.hide();
            });
        }, e28._close = function() {
            var t = this, e = function() {
                t._element.classList.add(_e), o1.default(t._element).trigger("hidden.bs.toast");
            };
            if (this._element.classList.remove(ve), this._config.animation) {
                var n = d.getTransitionDurationFromElement(this._element);
                o1.default(this._element).one(d.TRANSITION_END, e).emulateTransitionEnd(n);
            } else e();
        }, e28._clearTimeout = function() {
            clearTimeout(this._timeout), this._timeout = null;
        }, t28._jQueryInterface = function(e) {
            return this.each(function() {
                var n = o1.default(this), i = n.data(me);
                if (i || (i = new t28(this, "object" == typeof e && e), n.data(me, i)), "string" == typeof e) {
                    if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                    i[e](this);
                }
            });
        }, l1(t28, null, [
            {
                key: "VERSION",
                get: function() {
                    return "4.6.1";
                }
            },
            {
                key: "DefaultType",
                get: function() {
                    return Te;
                }
            },
            {
                key: "Default",
                get: function() {
                    return Ee;
                }
            }
        ]), t28;
    }();
    o1.default.fn.toast = we._jQueryInterface, o1.default.fn.toast.Constructor = we, o1.default.fn.toast.noConflict = function() {
        return o1.default.fn.toast = pe, we._jQueryInterface;
    }, t1.Alert = g1, t1.Button = E, t1.Carousel = P, t1.Collapse = V, t1.Dropdown = lt, t1.Modal = Ct, t1.Popover = Jt, t1.Scrollspy = se, t1.Tab = ge, t1.Toast = we, t1.Tooltip = Wt, t1.Util = d, Object.defineProperty(t1, "__esModule", {
        value: !0
    });
});

},{"jquery":"hgMhh","popper.js":"dj939"}],"dj939":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var global = arguments[3];
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */ var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';
var timeoutDuration = function() {
    var longerTimeoutBrowsers = [
        'Edge',
        'Trident',
        'Firefox'
    ];
    for(var i = 0; i < longerTimeoutBrowsers.length; i += 1){
        if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) return 1;
    }
    return 0;
}();
function microtaskDebounce(fn) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        window.Promise.resolve().then(function() {
            called = false;
            fn();
        });
    };
}
function taskDebounce(fn) {
    var scheduled = false;
    return function() {
        if (!scheduled) {
            scheduled = true;
            setTimeout(function() {
                scheduled = false;
                fn();
            }, timeoutDuration);
        }
    };
}
var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/ var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */ function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */ function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) return [];
    // NOTE: 1 DOM access here
    var window = element.ownerDocument.defaultView;
    var css = window.getComputedStyle(element, null);
    return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */ function getParentNode(element) {
    if (element.nodeName === 'HTML') return element;
    return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */ function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) return document.body;
    switch(element.nodeName){
        case 'HTML':
        case 'BODY':
            return element.ownerDocument.body;
        case '#document':
            return element.body;
    }
    // Firefox want us to check `-x` and `-y` variations as well
    var _getStyleComputedProp = getStyleComputedProperty(element), overflow = _getStyleComputedProp.overflow, overflowX = _getStyleComputedProp.overflowX, overflowY = _getStyleComputedProp.overflowY;
    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) return element;
    return getScrollParent(getParentNode(element));
}
/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */ function getReferenceNode(reference) {
    return reference && reference.referenceNode ? reference.referenceNode : reference;
}
var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */ function isIE(version) {
    if (version === 11) return isIE11;
    if (version === 10) return isIE10;
    return isIE11 || isIE10;
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */ function getOffsetParent(element) {
    if (!element) return document.documentElement;
    var noOffsetParent = isIE(10) ? document.body : null;
    // NOTE: 1 DOM access here
    var offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    while(offsetParent === noOffsetParent && element.nextElementSibling)offsetParent = (element = element.nextElementSibling).offsetParent;
    var nodeName = offsetParent && offsetParent.nodeName;
    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') return element ? element.ownerDocument.documentElement : document.documentElement;
    // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if ([
        'TH',
        'TD',
        'TABLE'
    ].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') return getOffsetParent(offsetParent);
    return offsetParent;
}
function isOffsetContainer(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY') return false;
    return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */ function getRoot(node) {
    if (node.parentNode !== null) return getRoot(node.parentNode);
    return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */ function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) return document.documentElement;
    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;
    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;
    // Both nodes are inside #document
    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
        if (isOffsetContainer(commonAncestorContainer)) return commonAncestorContainer;
        return getOffsetParent(commonAncestorContainer);
    }
    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) return findCommonOffsetParent(element1root.host, element2);
    else return findCommonOffsetParent(element1, getRoot(element2).host);
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */ function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        var html = element.ownerDocument.documentElement;
        var scrollingElement = element.ownerDocument.scrollingElement || html;
        return scrollingElement[upperSide];
    }
    return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */ function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */ function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
    return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}
function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}
function getWindowSizes(document) {
    var body = document.body;
    var html = document.documentElement;
    var computedStyle = isIE(10) && getComputedStyle(html);
    return {
        height: getSize('Height', body, html, computedStyle),
        width: getSize('Width', body, html, computedStyle)
    };
}
var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
};
var createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var defineProperty = function(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
};
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */ function getClientRect(offsets) {
    return _extends({}, offsets, {
        right: offsets.left + offsets.width,
        bottom: offsets.top + offsets.height
    });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */ function getBoundingClientRect(element) {
    var rect = {};
    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
        if (isIE(10)) {
            rect = element.getBoundingClientRect();
            var scrollTop = getScroll(element, 'top');
            var scrollLeft = getScroll(element, 'left');
            rect.top += scrollTop;
            rect.left += scrollLeft;
            rect.bottom += scrollTop;
            rect.right += scrollLeft;
        } else rect = element.getBoundingClientRect();
    } catch (e) {}
    var result = {
        left: rect.left,
        top: rect.top,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
    };
    // subtract scrollbar size from sizes
    var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
    var width = sizes.width || element.clientWidth || result.width;
    var height = sizes.height || element.clientHeight || result.height;
    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;
    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
        var styles = getStyleComputedProperty(element);
        horizScrollbar -= getBordersSize(styles, 'x');
        vertScrollbar -= getBordersSize(styles, 'y');
        result.width -= horizScrollbar;
        result.height -= vertScrollbar;
    }
    return getClientRect(result);
}
function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var isIE101 = isIE(10);
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);
    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth);
    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
        parentRect.top = Math.max(parentRect.top, 0);
        parentRect.left = Math.max(parentRect.left, 0);
    }
    var offsets = getClientRect({
        top: childrenRect.top - parentRect.top - borderTopWidth,
        left: childrenRect.left - parentRect.left - borderLeftWidth,
        width: childrenRect.width,
        height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;
    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE101 && isHTML) {
        var marginTop = parseFloat(styles.marginTop);
        var marginLeft = parseFloat(styles.marginLeft);
        offsets.top -= borderTopWidth - marginTop;
        offsets.bottom -= borderTopWidth - marginTop;
        offsets.left -= borderLeftWidth - marginLeft;
        offsets.right -= borderLeftWidth - marginLeft;
        // Attach marginTop and marginLeft because in some circumstances we may need them
        offsets.marginTop = marginTop;
        offsets.marginLeft = marginLeft;
    }
    if (isIE101 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') offsets = includeScroll(offsets, parent);
    return offsets;
}
function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);
    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
    var offset1 = {
        top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
        left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
        width: width,
        height: height
    };
    return getClientRect(offset1);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */ function isFixed(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') return false;
    if (getStyleComputedProperty(element, 'position') === 'fixed') return true;
    var parentNode = getParentNode(element);
    if (!parentNode) return false;
    return isFixed(parentNode);
}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */ function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) return document.documentElement;
    var el = element.parentElement;
    while(el && getStyleComputedProperty(el, 'transform') === 'none')el = el.parentElement;
    return el || document.documentElement;
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */ function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    // NOTE: 1 DOM access here
    var boundaries = {
        top: 0,
        left: 0
    };
    var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
    // Handle viewport case
    if (boundariesElement === 'viewport') boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    else {
        // Handle other cases based on DOM element used as boundaries
        var boundariesNode = void 0;
        if (boundariesElement === 'scrollParent') {
            boundariesNode = getScrollParent(getParentNode(reference));
            if (boundariesNode.nodeName === 'BODY') boundariesNode = popper.ownerDocument.documentElement;
        } else if (boundariesElement === 'window') boundariesNode = popper.ownerDocument.documentElement;
        else boundariesNode = boundariesElement;
        var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
        // In case of HTML, we need a different computation
        if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
            var _getWindowSizes = getWindowSizes(popper.ownerDocument), height = _getWindowSizes.height, width = _getWindowSizes.width;
            boundaries.top += offsets.top - offsets.marginTop;
            boundaries.bottom = height + offsets.top;
            boundaries.left += offsets.left - offsets.marginLeft;
            boundaries.right = width + offsets.left;
        } else // for all the other DOM elements, this one is good
        boundaries = offsets;
    }
    // Add paddings
    padding = padding || 0;
    var isPaddingNumber = typeof padding === 'number';
    boundaries.left += isPaddingNumber ? padding : padding.left || 0;
    boundaries.top += isPaddingNumber ? padding : padding.top || 0;
    boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
    boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
    return boundaries;
}
function getArea(_ref) {
    var width = _ref.width, height = _ref.height;
    return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    if (placement.indexOf('auto') === -1) return placement;
    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
    var rects = {
        top: {
            width: boundaries.width,
            height: refRect.top - boundaries.top
        },
        right: {
            width: boundaries.right - refRect.right,
            height: boundaries.height
        },
        bottom: {
            width: boundaries.width,
            height: boundaries.bottom - refRect.bottom
        },
        left: {
            width: refRect.left - boundaries.left,
            height: boundaries.height
        }
    };
    var sortedAreas = Object.keys(rects).map(function(key) {
        return _extends({
            key: key
        }, rects[key], {
            area: getArea(rects[key])
        });
    }).sort(function(a, b) {
        return b.area - a.area;
    });
    var filteredAreas = sortedAreas.filter(function(_ref2) {
        var width = _ref2.width, height = _ref2.height;
        return width >= popper.clientWidth && height >= popper.clientHeight;
    });
    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
    var variation = placement.split('-')[1];
    return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */ function getReferenceOffsets(state, popper, reference) {
    var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */ function getOuterSizes(element) {
    var window = element.ownerDocument.defaultView;
    var styles = window.getComputedStyle(element);
    var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    var result = {
        width: element.offsetWidth + y,
        height: element.offsetHeight + x
    };
    return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */ function getOppositePlacement(placement) {
    var hash = {
        left: 'right',
        right: 'left',
        bottom: 'top',
        top: 'bottom'
    };
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */ function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0];
    // Get popper node sizes
    var popperRect = getOuterSizes(popper);
    // Add position, width and height to our offsets object
    var popperOffsets = {
        width: popperRect.width,
        height: popperRect.height
    };
    // depending by the popper placement we have to compute its offsets slightly differently
    var isHoriz = [
        'right',
        'left'
    ].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';
    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
    if (placement === secondarySide) popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    else popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */ function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) return arr.find(check);
    // use `filter` to obtain the same behavior of `find`
    return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */ function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) return arr.findIndex(function(cur) {
        return cur[prop] === value;
    });
    // use `find` + `indexOf` if `findIndex` isn't supported
    var match = find(arr, function(obj) {
        return obj[prop] === value;
    });
    return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */ function runModifiers(modifiers1, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers1 : modifiers1.slice(0, findIndex(modifiers1, 'name', ends));
    modifiersToRun.forEach(function(modifier) {
        if (modifier['function']) // eslint-disable-line dot-notation
        console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
        var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
        if (modifier.enabled && isFunction(fn)) {
            // Add properties to offsets to make them a complete clientRect object
            // we do this before each modifier to make sure the previous one doesn't
            // mess with these values
            data.offsets.popper = getClientRect(data.offsets.popper);
            data.offsets.reference = getClientRect(data.offsets.reference);
            data = fn(data, modifier);
        }
    });
    return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */ function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) return;
    var data = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: false,
        offsets: {}
    };
    // compute reference element offsets
    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
    // store the computed placement inside `originalPlacement`
    data.originalPlacement = data.placement;
    data.positionFixed = this.options.positionFixed;
    // compute the popper offsets
    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
    data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';
    // run the modifiers
    data = runModifiers(this.modifiers, data);
    // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback
    if (!this.state.isCreated) {
        this.state.isCreated = true;
        this.options.onCreate(data);
    } else this.options.onUpdate(data);
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */ function isModifierEnabled(modifiers2, modifierName) {
    return modifiers2.some(function(_ref) {
        var name = _ref.name, enabled = _ref.enabled;
        return enabled && name === modifierName;
    });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */ function getSupportedPropertyName(property) {
    var prefixes = [
        false,
        'ms',
        'Webkit',
        'Moz',
        'O'
    ];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
    for(var i = 0; i < prefixes.length; i++){
        var prefix = prefixes[i];
        var toCheck = prefix ? '' + prefix + upperProp : property;
        if (typeof document.body.style[toCheck] !== 'undefined') return toCheck;
    }
    return null;
}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */ function destroy() {
    this.state.isDestroyed = true;
    // touch DOM only if `applyStyle` modifier is enabled
    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
        this.popper.removeAttribute('x-placement');
        this.popper.style.position = '';
        this.popper.style.top = '';
        this.popper.style.left = '';
        this.popper.style.right = '';
        this.popper.style.bottom = '';
        this.popper.style.willChange = '';
        this.popper.style[getSupportedPropertyName('transform')] = '';
    }
    this.disableEventListeners();
    // remove the popper if user explicitly asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it
    if (this.options.removeOnDestroy) this.popper.parentNode.removeChild(this.popper);
    return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */ function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
}
function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, {
        passive: true
    });
    if (!isBody) attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */ function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    getWindow(reference).addEventListener('resize', state.updateBound, {
        passive: true
    });
    // Scroll event listener on scroll parents
    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;
    return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */ function enableEventListeners() {
    if (!this.state.eventsEnabled) this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */ function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener('resize', state.updateBound);
    // Remove scroll event listener on scroll parents
    state.scrollParents.forEach(function(target) {
        target.removeEventListener('scroll', state.updateBound);
    });
    // Reset state
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */ function disableEventListeners() {
    if (this.state.eventsEnabled) {
        cancelAnimationFrame(this.scheduleUpdate);
        this.state = removeEventListeners(this.reference, this.state);
    }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */ function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */ function setStyles(element, styles) {
    Object.keys(styles).forEach(function(prop) {
        var unit = '';
        // add unit if the value is numeric and is one of the following
        if ([
            'width',
            'height',
            'top',
            'right',
            'bottom',
            'left'
        ].indexOf(prop) !== -1 && isNumeric(styles[prop])) unit = 'px';
        element.style[prop] = styles[prop] + unit;
    });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */ function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function(prop) {
        var value = attributes[prop];
        if (value !== false) element.setAttribute(prop, attributes[prop]);
        else element.removeAttribute(prop);
    });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */ function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles);
    // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element
    setAttributes(data.instance.popper, data.attributes);
    // if arrowElement is defined and arrowStyles has some properties
    if (data.arrowElement && Object.keys(data.arrowStyles).length) setStyles(data.arrowElement, data.arrowStyles);
    return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */ function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);
    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
    popper.setAttribute('x-placement', placement);
    // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations
    setStyles(popper, {
        position: options.positionFixed ? 'fixed' : 'absolute'
    });
    return options;
}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */ function getRoundedOffsets(data, shouldRound) {
    var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var round = Math.round, floor = Math.floor;
    var noRound = function noRound(v) {
        return v;
    };
    var referenceWidth = round(reference.width);
    var popperWidth = round(popper.width);
    var isVertical = [
        'left',
        'right'
    ].indexOf(data.placement) !== -1;
    var isVariation = data.placement.indexOf('-') !== -1;
    var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
    var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
    var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
    var verticalToInteger = !shouldRound ? noRound : round;
    return {
        left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
        top: verticalToInteger(popper.top),
        bottom: verticalToInteger(popper.bottom),
        right: horizontalToInteger(popper.right)
    };
}
var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function computeStyle(data, options) {
    var x = options.x, y = options.y;
    var popper = data.offsets.popper;
    // Remove this legacy support in Popper.js v2
    var legacyGpuAccelerationOption = find(data.instance.modifiers, function(modifier) {
        return modifier.name === 'applyStyle';
    }).gpuAcceleration;
    if (legacyGpuAccelerationOption !== undefined) console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);
    // Styles
    var styles = {
        position: popper.position
    };
    var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right';
    // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed
    var prefixedProperty = getSupportedPropertyName('transform');
    // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.
    var left = void 0, top = void 0;
    if (sideA === 'bottom') {
        // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
        // and not the bottom of the html element
        if (offsetParent.nodeName === 'HTML') top = -offsetParent.clientHeight + offsets.bottom;
        else top = -offsetParentRect.height + offsets.bottom;
    } else top = offsets.top;
    if (sideB === 'right') {
        if (offsetParent.nodeName === 'HTML') left = -offsetParent.clientWidth + offsets.right;
        else left = -offsetParentRect.width + offsets.right;
    } else left = offsets.left;
    if (gpuAcceleration && prefixedProperty) {
        styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
        styles[sideA] = 0;
        styles[sideB] = 0;
        styles.willChange = 'transform';
    } else {
        // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
        var invertTop = sideA === 'bottom' ? -1 : 1;
        var invertLeft = sideB === 'right' ? -1 : 1;
        styles[sideA] = top * invertTop;
        styles[sideB] = left * invertLeft;
        styles.willChange = sideA + ', ' + sideB;
    }
    // Attributes
    var attributes = {
        'x-placement': data.placement
    };
    // Update `data` attributes, styles and arrowStyles
    data.attributes = _extends({}, attributes, data.attributes);
    data.styles = _extends({}, styles, data.styles);
    data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
    return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */ function isModifierRequired(modifiers3, requestingName, requestedName) {
    var requesting = find(modifiers3, function(_ref) {
        var name = _ref.name;
        return name === requestingName;
    });
    var isRequired = !!requesting && modifiers3.some(function(modifier) {
        return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });
    if (!isRequired) {
        var _requesting = '`' + requestingName + '`';
        var requested = '`' + requestedName + '`';
        console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
    }
    return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function arrow(data, options) {
    var _data$offsets$arrow;
    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) return data;
    var arrowElement = options.element;
    // if arrowElement is a string, suppose it's a CSS selector
    if (typeof arrowElement === 'string') {
        arrowElement = data.instance.popper.querySelector(arrowElement);
        // if arrowElement is not found, don't run the modifier
        if (!arrowElement) return data;
    } else // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
        console.warn('WARNING: `arrow.element` must be child of its popper element!');
        return data;
    }
    var placement = data.placement.split('-')[0];
    var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var isVertical = [
        'left',
        'right'
    ].indexOf(placement) !== -1;
    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len];
    //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjunction
    //
    // top/left side
    if (reference[opSide] - arrowElementSize < popper[side]) data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    // bottom/right side
    if (reference[side] + arrowElementSize > popper[opSide]) data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    data.offsets.popper = getClientRect(data.offsets.popper);
    // compute center of the popper
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;
    // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available
    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
    var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
    var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;
    // prevent arrowElement from being placed not contiguously to its popper
    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
    data.arrowElement = arrowElement;
    data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
    return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */ function getOppositeVariation(variation) {
    if (variation === 'end') return 'start';
    else if (variation === 'start') return 'end';
    return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */ var placements = [
    'auto-start',
    'auto',
    'auto-end',
    'top-start',
    'top',
    'top-end',
    'right-start',
    'right',
    'right-end',
    'bottom-end',
    'bottom',
    'bottom-start',
    'left-end',
    'left',
    'left-start'
];
// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */ function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
}
var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) return data;
    if (data.flipped && data.placement === data.originalPlacement) // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';
    var flipOrder = [];
    switch(options.behavior){
        case BEHAVIORS.FLIP:
            flipOrder = [
                placement,
                placementOpposite
            ];
            break;
        case BEHAVIORS.CLOCKWISE:
            flipOrder = clockwise(placement);
            break;
        case BEHAVIORS.COUNTERCLOCKWISE:
            flipOrder = clockwise(placement, true);
            break;
        default:
            flipOrder = options.behavior;
    }
    flipOrder.forEach(function(step, index) {
        if (placement !== step || flipOrder.length === index + 1) return data;
        placement = data.placement.split('-')[0];
        placementOpposite = getOppositePlacement(placement);
        var popperOffsets = data.offsets.popper;
        var refOffsets = data.offsets.reference;
        // using floor because the reference offsets may contain decimals we are not going to consider here
        var floor = Math.floor;
        var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
        var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
        var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
        var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
        var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
        var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;
        // flip the variation if required
        var isVertical = [
            'top',
            'bottom'
        ].indexOf(placement) !== -1;
        // flips variation if reference element overflows boundaries
        var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);
        // flips variation if popper content overflows boundaries
        var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
        var flippedVariation = flippedVariationByRef || flippedVariationByContent;
        if (overlapsRef || overflowsBoundaries || flippedVariation) {
            // this boolean to detect any flip loop
            data.flipped = true;
            if (overlapsRef || overflowsBoundaries) placement = flipOrder[index + 1];
            if (flippedVariation) variation = getOppositeVariation(variation);
            data.placement = placement + (variation ? '-' + variation : '');
            // this object contains `position`, we want to preserve it along with
            // any additional property we may add in the future
            data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
            data = runModifiers(data.instance.modifiers, data, 'flip');
        }
    });
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function keepTogether(data) {
    var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = [
        'top',
        'bottom'
    ].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    if (popper[side] < floor(reference[opSide])) data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    if (popper[opSide] > floor(reference[side])) data.offsets.popper[opSide] = floor(reference[side]);
    return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */ function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];
    // If it's not a number it's an operator, I guess
    if (!value) return str;
    if (unit.indexOf('%') === 0) {
        var element = void 0;
        switch(unit){
            case '%p':
                element = popperOffsets;
                break;
            case '%':
            case '%r':
            default:
                element = referenceOffsets;
        }
        var rect = getClientRect(element);
        return rect[measurement] / 100 * value;
    } else if (unit === 'vh' || unit === 'vw') {
        // if is a vh or vw, we calculate the size based on the viewport
        var size = void 0;
        if (unit === 'vh') size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        else size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        return size / 100 * value;
    } else // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */ function parseOffset(offset2, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [
        0,
        0
    ];
    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight = [
        'right',
        'left'
    ].indexOf(basePlacement) !== -1;
    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments = offset2.split(/(\+|\-)/).map(function(frag) {
        return frag.trim();
    });
    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider = fragments.indexOf(find(fragments, function(frag) {
        return frag.search(/,|\s/) !== -1;
    }));
    if (fragments[divider] && fragments[divider].indexOf(',') === -1) console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [
        fragments.slice(0, divider).concat([
            fragments[divider].split(splitRegex)[0]
        ]),
        [
            fragments[divider].split(splitRegex)[1]
        ].concat(fragments.slice(divider + 1))
    ] : [
        fragments
    ];
    // Convert the values with units to absolute pixels to allow our computations
    ops = ops.map(function(op, index) {
        // Most of the units rely on the orientation of the popper
        var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
        var mergeWithPrevious = false;
        return op// This aggregates any `+` or `-` sign that aren't considered operators
        // e.g.: 10 + +5 => [10, +, +5]
        .reduce(function(a, b) {
            if (a[a.length - 1] === '' && [
                '+',
                '-'
            ].indexOf(b) !== -1) {
                a[a.length - 1] = b;
                mergeWithPrevious = true;
                return a;
            } else if (mergeWithPrevious) {
                a[a.length - 1] += b;
                mergeWithPrevious = false;
                return a;
            } else return a.concat(b);
        }, [])// Here we convert the string values into number values (in px)
        .map(function(str) {
            return toValue(str, measurement, popperOffsets, referenceOffsets);
        });
    });
    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function(op, index) {
        op.forEach(function(frag, index2) {
            if (isNumeric(frag)) offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
        });
    });
    return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */ function offset(data, _ref) {
    var offset3 = _ref.offset;
    var placement = data.placement, _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var basePlacement = placement.split('-')[0];
    var offsets = void 0;
    if (isNumeric(+offset3)) offsets = [
        +offset3,
        0
    ];
    else offsets = parseOffset(offset3, popper, reference, basePlacement);
    if (basePlacement === 'left') {
        popper.top += offsets[0];
        popper.left -= offsets[1];
    } else if (basePlacement === 'right') {
        popper.top += offsets[0];
        popper.left += offsets[1];
    } else if (basePlacement === 'top') {
        popper.left += offsets[0];
        popper.top -= offsets[1];
    } else if (basePlacement === 'bottom') {
        popper.left += offsets[0];
        popper.top += offsets[1];
    }
    data.popper = popper;
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);
    // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken
    if (data.instance.reference === boundariesElement) boundariesElement = getOffsetParent(boundariesElement);
    // NOTE: DOM access here
    // resets the popper's position so that the document size can be calculated excluding
    // the size of the popper element itself
    var transformProp = getSupportedPropertyName('transform');
    var popperStyles = data.instance.popper.style; // assignment to help minification
    var top = popperStyles.top, left = popperStyles.left, transform = popperStyles[transformProp];
    popperStyles.top = '';
    popperStyles.left = '';
    popperStyles[transformProp] = '';
    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    popperStyles.top = top;
    popperStyles.left = left;
    popperStyles[transformProp] = transform;
    options.boundaries = boundaries;
    var order = options.priority;
    var popper = data.offsets.popper;
    var check = {
        primary: function primary(placement) {
            var value = popper[placement];
            if (popper[placement] < boundaries[placement] && !options.escapeWithReference) value = Math.max(popper[placement], boundaries[placement]);
            return defineProperty({}, placement, value);
        },
        secondary: function secondary(placement) {
            var mainSide = placement === 'right' ? 'left' : 'top';
            var value = popper[mainSide];
            if (popper[placement] > boundaries[placement] && !options.escapeWithReference) value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
            return defineProperty({}, mainSide, value);
        }
    };
    order.forEach(function(placement) {
        var side = [
            'left',
            'top'
        ].indexOf(placement) !== -1 ? 'primary' : 'secondary';
        popper = _extends({}, popper, check[side](placement));
    });
    data.offsets.popper = popper;
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1];
    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
        var _data$offsets = data.offsets, reference = _data$offsets.reference, popper = _data$offsets.popper;
        var isVertical = [
            'bottom',
            'top'
        ].indexOf(basePlacement) !== -1;
        var side = isVertical ? 'left' : 'top';
        var measurement = isVertical ? 'width' : 'height';
        var shiftOffsets = {
            start: defineProperty({}, side, reference[side]),
            end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
        };
        data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
    }
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) return data;
    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function(modifier) {
        return modifier.name === 'preventOverflow';
    }).boundaries;
    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
        // Avoid unnecessary DOM access if visibility hasn't changed
        if (data.hide === true) return data;
        data.hide = true;
        data.attributes['x-out-of-boundaries'] = '';
    } else {
        // Avoid unnecessary DOM access if visibility hasn't changed
        if (data.hide === false) return data;
        data.hide = false;
        data.attributes['x-out-of-boundaries'] = false;
    }
    return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */ function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
    var isHoriz = [
        'left',
        'right'
    ].indexOf(basePlacement) !== -1;
    var subtractLength = [
        'top',
        'left'
    ].indexOf(basePlacement) === -1;
    popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);
    return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */ /**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */ var modifiers = {
    /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */ shift: {
        /** @prop {number} order=100 - Index used to define the order of execution */ order: 100,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: shift
    },
    /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */ offset: {
        /** @prop {number} order=200 - Index used to define the order of execution */ order: 200,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: offset,
        /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */ offset: 0
    },
    /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */ preventOverflow: {
        /** @prop {number} order=300 - Index used to define the order of execution */ order: 300,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: preventOverflow,
        /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */ priority: [
            'left',
            'right',
            'top',
            'bottom'
        ],
        /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */ padding: 5,
        /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */ boundariesElement: 'scrollParent'
    },
    /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */ keepTogether: {
        /** @prop {number} order=400 - Index used to define the order of execution */ order: 400,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: keepTogether
    },
    /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */ arrow: {
        /** @prop {number} order=500 - Index used to define the order of execution */ order: 500,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: arrow,
        /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */ element: '[x-arrow]'
    },
    /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */ flip: {
        /** @prop {number} order=600 - Index used to define the order of execution */ order: 600,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: flip,
        /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */ behavior: 'flip',
        /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */ padding: 5,
        /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */ boundariesElement: 'viewport',
        /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */ flipVariations: false,
        /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */ flipVariationsByContent: false
    },
    /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */ inner: {
        /** @prop {number} order=700 - Index used to define the order of execution */ order: 700,
        /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */ enabled: false,
        /** @prop {ModifierFn} */ fn: inner
    },
    /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */ hide: {
        /** @prop {number} order=800 - Index used to define the order of execution */ order: 800,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: hide
    },
    /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */ computeStyle: {
        /** @prop {number} order=850 - Index used to define the order of execution */ order: 850,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: computeStyle,
        /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */ gpuAcceleration: true,
        /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */ x: 'bottom',
        /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */ y: 'right'
    },
    /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */ applyStyle: {
        /** @prop {number} order=900 - Index used to define the order of execution */ order: 900,
        /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */ enabled: true,
        /** @prop {ModifierFn} */ fn: applyStyle,
        /** @prop {Function} */ onLoad: applyStyleOnLoad,
        /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */ gpuAcceleration: undefined
    }
};
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */ /**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */ var Defaults = {
    /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */ placement: 'bottom',
    /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */ positionFixed: false,
    /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */ eventsEnabled: true,
    /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */ removeOnDestroy: false,
    /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */ onCreate: function onCreate() {},
    /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */ onUpdate: function onUpdate() {},
    /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */ modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */ /**
 * @callback onUpdate
 * @param {dataObject} data
 */ // Utils
// Methods
var Popper = function() {
    /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */ function Popper1(reference, popper) {
        var _this = this;
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        classCallCheck(this, Popper1);
        this.scheduleUpdate = function() {
            return requestAnimationFrame(_this.update);
        };
        // make update() debounced, so that it only runs at most once-per-tick
        this.update = debounce(this.update.bind(this));
        // with {} we create a new object with the options inside it
        this.options = _extends({}, Popper1.Defaults, options);
        // init state
        this.state = {
            isDestroyed: false,
            isCreated: false,
            scrollParents: []
        };
        // get reference and popper elements (allow jQuery wrappers)
        this.reference = reference && reference.jquery ? reference[0] : reference;
        this.popper = popper && popper.jquery ? popper[0] : popper;
        // Deep merge modifiers options
        this.options.modifiers = {};
        Object.keys(_extends({}, Popper1.Defaults.modifiers, options.modifiers)).forEach(function(name) {
            _this.options.modifiers[name] = _extends({}, Popper1.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
        });
        // Refactoring modifiers' list (Object => Array)
        this.modifiers = Object.keys(this.options.modifiers).map(function(name) {
            return _extends({
                name: name
            }, _this.options.modifiers[name]);
        })// sort the modifiers by order
        .sort(function(a, b) {
            return a.order - b.order;
        });
        // modifiers have the ability to execute arbitrary code when Popper.js get inited
        // such code is executed in the same order of its modifier
        // they could add new properties to their options configuration
        // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
        this.modifiers.forEach(function(modifierOptions) {
            if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
        });
        // fire the first update to position the popper in the right place
        this.update();
        var eventsEnabled = this.options.eventsEnabled;
        if (eventsEnabled) // setup event listeners, they will take care of update the position in specific situations
        this.enableEventListeners();
        this.state.eventsEnabled = eventsEnabled;
    }
    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs
    createClass(Popper1, [
        {
            key: 'update',
            value: function update$$1() {
                return update.call(this);
            }
        },
        {
            key: 'destroy',
            value: function destroy$$1() {
                return destroy.call(this);
            }
        },
        {
            key: 'enableEventListeners',
            value: function enableEventListeners$$1() {
                return enableEventListeners.call(this);
            }
        },
        {
            key: 'disableEventListeners',
            value: function disableEventListeners$$1() {
                return disableEventListeners.call(this);
            }
        }
    ]);
    return Popper1;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */ Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
exports.default = Popper;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hboVj","boekP"], "boekP", "parcelRequire6378")

//# sourceMappingURL=index.fd40e163.js.map

/*!
 * Generated using the Bootstrap Customizer (https://getbootstrap.com/docs/3.4/customize/)
 */ /*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2022 Twitter, Inc.
 * Licensed under the MIT license
 */ if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
(function(t) {
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
})(jQuery), function(t1) {
    "use strict";
    function e1(e) {
        var r = e.attr("data-target");
        r || (r = e.attr("href"), r = r && /#[A-Za-z]/.test(r) && r.replace(/.*(?=#[^\s]*$)/, ""));
        var o = "#" !== r ? t1(document).find(r) : null;
        return o && o.length ? o : e.parent();
    }
    function r1(r) {
        r && 3 === r.which || (t1(n1).remove(), t1(a1).each(function() {
            var o = t1(this), n = e1(o), a = {
                relatedTarget: this
            };
            n.hasClass("open") && (r && "click" == r.type && /input|textarea/i.test(r.target.tagName) && t1.contains(n[0], r.target) || (n.trigger(r = t1.Event("hide.bs.dropdown", a)), r.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger(t1.Event("hidden.bs.dropdown", a)))));
        }));
    }
    function o1(e) {
        return this.each(function() {
            var r = t1(this), o = r.data("bs.dropdown");
            o || r.data("bs.dropdown", o = new i1(this)), "string" == typeof e && o[e].call(r);
        });
    }
    var n1 = ".dropdown-backdrop", a1 = '[data-toggle="dropdown"]', i1 = function(e) {
        t1(e).on("click.bs.dropdown", this.toggle);
    };
    i1.VERSION = "3.4.1", i1.prototype.toggle = function(o) {
        var n = t1(this);
        if (!n.is(".disabled, :disabled")) {
            var a = e1(n), i = a.hasClass("open");
            if (r1(), !i) {
                "ontouchstart" in document.documentElement && !a.closest(".navbar-nav").length && t1(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t1(this)).on("click", r1);
                var d = {
                    relatedTarget: this
                };
                if (a.trigger(o = t1.Event("show.bs.dropdown", d)), o.isDefaultPrevented()) return;
                n.trigger("focus").attr("aria-expanded", "true"), a.toggleClass("open").trigger(t1.Event("shown.bs.dropdown", d));
            }
            return !1;
        }
    }, i1.prototype.keydown = function(r) {
        if (/(38|40|27|32)/.test(r.which) && !/input|textarea/i.test(r.target.tagName)) {
            var o = t1(this);
            if (r.preventDefault(), r.stopPropagation(), !o.is(".disabled, :disabled")) {
                var n = e1(o), i = n.hasClass("open");
                if (!i && 27 != r.which || i && 27 == r.which) return 27 == r.which && n.find(a1).trigger("focus"), o.trigger("click");
                var d = " li:not(.disabled):visible a", s = n.find(".dropdown-menu" + d);
                if (s.length) {
                    var p = s.index(r.target);
                    38 == r.which && p > 0 && p--, 40 == r.which && p < s.length - 1 && p++, ~p || (p = 0), s.eq(p).trigger("focus");
                }
            }
        }
    };
    var d1 = t1.fn.dropdown;
    t1.fn.dropdown = o1, t1.fn.dropdown.Constructor = i1, t1.fn.dropdown.noConflict = function() {
        return t1.fn.dropdown = d1, this;
    }, t1(document).on("click.bs.dropdown.data-api", r1).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation();
    }).on("click.bs.dropdown.data-api", a1, i1.prototype.toggle).on("keydown.bs.dropdown.data-api", a1, i1.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i1.prototype.keydown);
}(jQuery);

//# sourceMappingURL=index.0d293e75.js.map

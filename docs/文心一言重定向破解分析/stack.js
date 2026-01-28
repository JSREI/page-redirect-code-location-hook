j = function() {
    function e(e) {
        this.stack = [],
            this.B = e;
    }
    return e.prototype.pop = function() {
        return this.stack.pop();
    }
        ,
        e.prototype.push = function(e) {
            return this.stack.push(e);
        }
        ,
        e.prototype.D = function() {
            var e = this.stack;
            return e[e.length - 1];
        }
        ,
        e.prototype.P = function(e, n) {
            var r = this.stack;
            if (r.length) {
                var i = this.D()
                    , o = i.k
                    , a = i.N
                    , f = i.step;
                if (0 === f)
                    return 0 === e ? o ? (i.step = 2,
                        i.M = [e, n],
                        N.O(o[0])) : (r.pop(),
                        this.P(e, n)) : 1 === e && a ? (this.B.V = new t(n),
                        i.step = 1,
                        i.M = null,
                        N.O(a[0])) : (i.M = [e, n],
                        i.step = 2,
                        N.O(o[0]));
                if (1 === f)
                    return o ? (i.M = [e, n],
                        i.step = 2,
                        N.O(o[0])) : (r.pop(),
                        this.P(e, n));
                if (2 === f)
                    return r.pop(),
                        this.P(e, n);
            }
            return 1 === e ? N.T(n) : (this.B.V = new t(n),
                N['return']());
        }
        ,
        e;
}(),
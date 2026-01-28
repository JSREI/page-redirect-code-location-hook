function D(e) {
    return String.fromCharCode.apply(String, e);
}
var P = function() {
    function e(e, t, n) {
        this.Y = 0,
            this.X = [],
            this.Z = null,
            this.q = new w(0,t),
            function(e) {
                if (e[3].length && 'object' == typeof e[3]) {
                    for (var t = e[3], n = [], r = 0, i = t.length; r < i; r++)
                        n.push(String.fromCharCode.apply(String, t[r]));
                    e[6] = n,
                        e[3] = [];
                }
            }(e),
            this.W = new j(this),
            this._ = e,
            this.$ = n;
    }
    return e.prototype.G = function(t, n) {
        var r = this.q
            , i = D(t[1])
            , o = r;
        return i && (o = new w(0,r)).A(i, n),
            new e(t,o,this);
    }
        ,
        e.prototype.J = function(e) {
            var t = this.q
                , n = this.Y;
            this.q = new w(1,t),
                this.q.u = [n, e];
        }
        ,
        e.prototype.L = function() {
            this.q = this.q.v;
        }
        ,
        e.prototype.run = function(e, n) {
            var r = this._[2];
            for (this.q.A('this', e),
                     this.q.A('arguments', n || []); ; ) {
                var i = r[this.Y];
                if (!i)
                    throw new Error('StackFrameInterpreter: instruct is undefined');
                var o = i[0]
                    , a = null;
                try {
                    a = (0,
                        T[o])(i, this) || null;
                } catch (u) {
                    this.V = new t(u),
                        a = this.W.P(1, u);
                }
                if (null !== a) {
                    if (N.U(a))
                        this.Y = a.value;
                    else {
                        if (!N.S(a))
                            throw N.R(a) ? (this.nn(a.value),
                                a.value) : new Error('StackFrameInterpreter: signal is not return or error');
                        var f = this.V
                            , c = null == f ? void 0 : f.get();
                        if (a = this.W.P(0, c),
                            N.S(a))
                            return c;
                        this.Y = a.value;
                    }
                    this.tn();
                } else
                    this.Y++;
            }
        }
        ,
        e.prototype.tn = function() {
            var e = this.q;
            if (1 === e.type) {
                var t = I(e.u, 2)
                    , n = t[0]
                    , r = t[1]
                    , i = this.Y;
                (i > r || i < n) && (this.L(),
                    this.tn());
            }
        }
        ,
        e.prototype.nn = function(e) {
            var t;
            if (e instanceof Error && !e.rn) {
                e.rn = !0;
                for (var n = this.Y, r = [], i = D(this._[0]) || '', o = this, a = this; o; )
                    r.push(D(o._[0])),
                        a = o,
                        o = o.$;
                var f = r.join(',')
                    , c = (null === (t = a.Z) || void 0 === t ? void 0 : t.en) || '';
                e.combinedSourceMapId = [n, i, c, f].join('_');
            }
        }
        ,
        e;
}();
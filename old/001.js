var SYN = 0, ASYN = 1, TDDP_INSTRUCT = 0, TDDP_WRITE = 1, TDDP_READ = 2, TDDP_UPLOAD = 3, TDDP_DOWNLOAD = 4,
    TDDP_RESET = 5, TDDP_REBOOT = 6, TDDP_AUTH = 7, TDDP_GETPEERMAC = 8, TDDP_CONFIG = 9, TDDP_CHGPWD = 10,
    TDDP_LOGOUT = 11, PARSE_INIT = 0, PARSE_NOTE = 1, PARSE_CMD = 2, PARSE_ID = 3, PARSE_INDEX = 4, PARSE_VALUE = 5,
    PARSE_ERR = 6;

function TDDP() {
    this.dataBlocks = new DataBlock;
    this.findBlock = function (g) {
        var a, b;
        for (b in this.dataBlocks) if ("object" === typeof this.dataBlocks[b] && this.dataBlocks[b].id === g) {
            a = this.dataBlocks[b];
            break
        }
        return a
    };
    this.elmInArray = function (g, a) {
        var b, c;
        for (c in g) if (g[c] instanceof Array) if (b = g[c][0], "undefined" === typeof b || "object" !== typeof b) {
            if (c === a) return !0
        } else if (b.hasOwnProperty(a)) return !0;
        return !1
    };
    this.setElmValue = function (g, a, b, c) {
        var f, e;
        b = decodeURI(b);
        for (var h in g) if (e = g[h], "object" !== typeof e) {
            if (h ===
                a) {
                g[h] = b;
                break
            }
        } else if ("[object Array]" !== Object.prototype.toString.call(e)) {
            if (e.hasOwnProperty(a)) {
                e[a] = b;
                break
            }
        } else if (f = e[0], "undefined" === typeof f || "object" !== typeof f) {
            if (h === a) {
                if (null === c) break;
                e[parseInt(c)] = b;
                break
            }
        } else if (f.hasOwnProperty(a)) {
            if (null === c) break;
            "object" !== typeof e[parseInt(c)] && (e[parseInt(c)] = {});
            e[parseInt(c)][a] = b;
            break
        }
    };
    this.toText = function (g) {
        var a = "", b = 0, c, f = "", e;
        for (e in g) if ("object" !== typeof g[e]) f = this.encodePara(g[e]), a += e + " " + f + "\r\n"; else if (c = g[e], "object" === typeof c &&
            "[object Array]" !== Object.prototype.toString.call(c)) for (var h in c) f = this.encodePara(c[h]), a += h + " " + f + "\r\n"; else if (c = g[e][0], "undefined" === typeof c || "object" !== typeof c) for (c = g[e], b = 0; b < c.length; b++) f = this.encodePara(c[b]), a += e + " " + b + " " + f + "\r\n"; else for (c = g[e], b = 0; b < c.length; b++) {
            var d = c[b];
            for (h in d) f = this.encodePara(d[h]), a += h + " " + b + " " + f + "\r\n"
        }
        return a
    };
    this.elmToText = function (g, a, b, c) {
        var f = "", f = "id 0\r\n";
        g.hasOwnProperty("id") && (f = "id " + g.id + "\r\n");
        return void 0 === c ? f + (a + " " + b + "\r\n") : f +=
            a + " " + c + " " + b + "\r\n"
    };
    this.parser = function (g) {
        for (var a = PARSE_INIT, b = "", c = "", f = "", e, h = "", d = "", k = 0, l = 0; l < g.length; l++) switch (d = g.charAt(l), a) {
            case PARSE_INIT:
                f = c = b = "";
                k = 0;
                if ("#" === d) {
                    a = PARSE_NOTE;
                    continue
                }
                " " < d && "~" >= d && (a = PARSE_CMD, b += d, k++);
                break;
            case PARSE_NOTE:
            case PARSE_ERR:
                if ("\r" === d || "\n" === d) a = PARSE_INIT;
                break;
            case PARSE_CMD:
                if (" " === d || "\t" === d) {
                    if ("id" === b) {
                        a = PARSE_ID;
                        k = 0;
                        continue
                    }
                    if (void 0 === e) {
                        a = PARSE_ERR;
                        continue
                    }
                    k = 0;
                    a = PARSE_VALUE;
                    this.elmInArray(e, b) && (a = PARSE_INDEX);
                    continue
                }
                if ("\r" === d || "\n" ===
                    d) {
                    a = PARSE_ERR;
                    continue
                }
                b += d;
                k++;
                break;
            case PARSE_ID:
                if (" " === d || "\t" === d) {
                    0 !== k && (a = PARSE_INIT, e = this.findBlock(h), h = "");
                    continue
                }
                if ("\r" === d || "\n" === d) {
                    if (0 === k) {
                        a = PARSE_ERR;
                        continue
                    }
                    a = PARSE_INIT;
                    e = this.findBlock(parseInt(h));
                    h = "";
                    continue
                }
                if ("0" > d || "9" < d) {
                    a = PARSE_ERR;
                    continue
                }
                h += d;
                k++;
                break;
            case PARSE_INDEX:
                if (" " === d || "\t" === d) {
                    0 !== k && (a = PARSE_VALUE, k = 0);
                    continue
                }
                if ("\r" === d || "\n" === d) {
                    a = PARSE_ERR;
                    continue
                }
                if ("0" > d || "9" < d) {
                    a = PARSE_ERR;
                    continue
                }
                f += d;
                k++;
                break;
            case PARSE_VALUE:
                if ((" " === d || "\t" === d) && 0 === k) continue;
                if ("\r" === d || "\n" === d) {
                    this.setElmValue(e, b, c, f);
                    a = PARSE_INIT;
                    continue
                }
                c += d;
                k++
        }
        PARSE_VALUE === a && 0 < k && this.setElmValue(e, b, c, f)
    }
};

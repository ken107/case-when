"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
function caseWhen(param, pred, val) {
    const list = [{ pred, val }];
    return {
        when(pred, val) {
            list.push({ pred, val });
            return this;
        },
        else(defVal) {
            for (const { pred, val } of list) {
                const cond = common_1.isFun(pred) ? pred(param) : pred == param;
                if (cond)
                    return common_1.isFun(val) ? val() : val;
            }
            return common_1.isFun(defVal) ? defVal() : defVal;
        }
    };
}
function default_1(param) {
    return {
        when(pred, val) {
            return caseWhen(param, pred, val);
        }
    };
}
exports.default = default_1;

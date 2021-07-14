"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.when = exports.caseWhen = void 0;
const common_1 = require("./common");
function caseWhen(param, prev) {
    return {
        when(pred, val) {
            return caseWhen(param, function () {
                const pval = prev === null || prev === void 0 ? void 0 : prev();
                if (pval)
                    return pval;
                const pcond = common_1.isFun(pred) ? pred(param) : pred == param;
                if (pcond)
                    return [common_1.isFun(val) ? val() : val];
                return undefined;
            });
        },
        else(val) {
            const pval = prev === null || prev === void 0 ? void 0 : prev();
            if (pval)
                return pval[0];
            return common_1.isFun(val) ? val() : val;
        }
    };
}
exports.caseWhen = caseWhen;
exports.when = caseWhen(true).when;

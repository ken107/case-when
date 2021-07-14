"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.when = exports.caseWhen = void 0;
const common_1 = require("./common");
function caseWhen(param, prev) {
    return {
        when(pred, val) {
            return caseWhen(param, async function () {
                const pval = await (prev === null || prev === void 0 ? void 0 : prev());
                if (pval)
                    return pval;
                const pcond = common_1.isFun(pred) ? await pred(param) : pred == param;
                if (pcond)
                    return [common_1.isFun(val) ? await val() : val];
                return undefined;
            });
        },
        async else(val) {
            const pval = await (prev === null || prev === void 0 ? void 0 : prev());
            if (pval)
                return pval[0];
            return common_1.isFun(val) ? await val() : val;
        }
    };
}
exports.caseWhen = caseWhen;
exports.when = caseWhen(true).when;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const async_1 = require("./async");
function text(val) {
    return async_1.caseWhen(val)
        .when(x => x > 100, "huge")
        .when(async (x) => x > 10, () => 20)
        .when(0, async () => [1, 2, 3])
        .else(null);
}
test("basic", async function () {
    expect(await text(500)).toBe("huge");
    expect(await text(50)).toBe(20);
    expect(await text(0)).toEqual([1, 2, 3]);
    expect(await text(5)).toBeNull();
});

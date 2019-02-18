"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const async_1 = require("./async");
function text(val) {
    return async_1.default(val)
        .when(x => x > 100, "huge")
        .when(async (x) => x > 10, () => "large")
        .when(0, async () => "zero")
        .else("small");
}
test("basic", async function () {
    expect(await text(500)).toBe("huge");
    expect(await text(50)).toBe("large");
    expect(await text(5)).toBe("small");
    expect(await text(0)).toBe("zero");
});

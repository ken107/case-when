"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sync_1 = require("./sync");
function text(val) {
    return sync_1.default(val)
        .when(x => x > 100, "huge")
        .when(x => x > 10, () => "large")
        .when(0, "zero")
        .else(() => "small");
}
test("basic", function () {
    expect(text(500)).toBe("huge");
    expect(text(50)).toBe("large");
    expect(text(5)).toBe("small");
    expect(text(0)).toBe("zero");
});

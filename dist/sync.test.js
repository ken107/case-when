"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sync_1 = require("./sync");
function text(val) {
    return sync_1.caseWhen(val)
        .when(x => x > 100, "huge")
        .when(x => x > 10, () => 20)
        .when(0, [1, 2, 3])
        .else(() => null);
}
test("basic", function () {
    expect(text(500)).toBe("huge");
    expect(text(50)).toBe(20);
    expect(text(0)).toEqual([1, 2, 3]);
    expect(text(5)).toBeNull();
});

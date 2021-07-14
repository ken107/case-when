import { caseWhen } from "./sync"

function text(val: number) {
  return caseWhen(val)
    .when(x => x > 100, "huge")
    .when(x => x > 10, () => 20)
    .when(0, [1,2,3])
    .else(() => null)
}

test("basic", function() {
  expect(text(500)).toBe("huge");
  expect(text(50)).toBe(20);
  expect(text(0)).toEqual([1,2,3]);
  expect(text(5)).toBeNull();
})

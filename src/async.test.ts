import Case from "./async"

function text(val: number) {
  return Case(val)
    .when(x => x > 100, "huge")
    .when(async x => x > 10, () => "large")
    .when(0, async () => "zero")
    .else("small")
}

test("basic", async function() {
  expect(await text(500)).toBe("huge");
  expect(await text(50)).toBe("large");
  expect(await text(5)).toBe("small");
  expect(await text(0)).toBe("zero");
})

## Install

```
npm i case-when
```

## Synchronous Example

```typescript
import Case from "case-when"

const result = Case(val)
  .when(0, "zero")
  .when(1, () => "one")
  .when(x => x > 1000, "huge")
  .when(x => x > 100, () => "large")
  .else("small")
```

or

```typescript
const result = Case()
  .when(() => val == 0, "zero")
  .when(() => val == 1, () => "one")
  .when(() => val > 1000, "huge")
  .when(() => val > 100, () => "large")
  .else("small")
```

## Async Example

```typescript
import Case from "case-when/dist/async"

const result = await Case(val)
  .when(0, "zero")
  .when(1, async () => "one")
  .when(async x => x > 1000, "huge")
  .when(x => x > 100, () => "large")
  .else(async () => "small")
```

In other words, uber flexible!

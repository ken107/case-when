[![Build Status](https://travis-ci.org/ken107/case-when.svg?branch=master)](https://travis-ci.org/ken107/case-when)

## Install

```
npm i case-when
```

## Synchronous Example

```typescript
import { caseWhen } from "case-when"

const result = caseWhen(val)
  .when(0, "zero")
  .when(1, () => 1)
  .when(x => x > 1000, {name: "John"})
  .when(x => x > 100, () => null)
  .else(false)
```

or

```typescript
import { when } from "case-when"

const result = when(() => val == 0, "zero")
  .when(() => val == 1, () => 1)
  .when(() => val > 1000, {name: "John"})
  .when(() => val > 100, () => null)
  .else(false)
```

## Async Example

```typescript
import { caseWhen } from "case-when/dist/async"

const result = await caseWhen(val)
  .when(0, "zero")
  .when(1, async () => 1)
  .when(async x => x > 1000, {name: "John"})
  .when(async x => x > 100, async () => null)
  .when(x => x > 10, () => "teen")
  .else(async () => false)
```

The return type of the case statement is the union of the return types of all the cases.  Here it would be `string | number | {name: string} | null | false`.

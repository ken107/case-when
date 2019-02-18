
export function isFun<Fun>(val: any): val is Fun {
  return typeof val == "function";
}

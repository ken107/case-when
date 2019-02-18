import { isFun } from "./common";

export type Predicate<P> = (param: P) => boolean;
export type Get<V> = () => V;

export interface CaseWhen<P, V> {
  when(pred: P|Predicate<P>, val: V|Get<V>): CaseWhen<P, V>;
  else(val: V|Get<V>): V;
}

function caseWhen<P, V>(param: P, pred: P|Predicate<P>, val: V|Get<V>): CaseWhen<P, V> {
  const list = [{pred, val}];
  return {
    when(pred, val) {
      list.push({pred, val});
      return this;
    },
    else(defVal) {
      for (const {pred, val} of list) {
        const cond = isFun<Predicate<P>>(pred) ? pred(param) : pred == param;
        if (cond) return isFun<Get<V>>(val) ? val() : val;
      }
      return isFun<Get<V>>(defVal) ? defVal() : defVal;
    }
  }
}

export default function<P>(param?: P) {
  return {
    when<V>(pred: P|Predicate<P>, val: V|Get<V>) {
      return caseWhen(param, pred, val);
    }
  }
}

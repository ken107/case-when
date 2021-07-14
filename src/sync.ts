import { isFun } from "./common";

type Pred<P> = (param: P) => boolean
type Get<V> = () => V

interface CaseWhen<P, X> {
  when: <V>(pred: P|Pred<P>, val: V|Get<V>) => CaseWhen<P, X|V>
  else: <V>(val: V|Get<V>) => X|V
}

export function caseWhen<P, X=never>(param: P, prev?: () => [X]|undefined): CaseWhen<P, X> {
  return {
    when<V>(pred: P|Pred<P>, val: V|Get<V>) {
      return caseWhen<P, X|V>(param, function() {
        const pval = prev?.()
        if (pval) return pval
        const pcond = isFun<Pred<P>>(pred) ? pred(param) : pred == param
        if (pcond) return [isFun<Get<V>>(val) ? val() : val]
        return undefined
      })
    },
    else<V>(val: V|Get<V>) {
      const pval = prev?.()
      if (pval) return pval[0]
      return isFun<Get<V>>(val) ? val() : val
    }
  }
}

export const when = caseWhen(true).when

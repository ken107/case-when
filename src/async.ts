import { isFun } from "./common";

type Pred<P> = (param: P) => boolean|Promise<boolean>;
type Get<V> = () => V|Promise<V>;

interface CaseWhen<P, X> {
  when: <V>(pred: P|Pred<P>, val: V|Get<V>) => CaseWhen<P, X|V>
  else: <V>(val: V|Get<V>) => Promise<X|V>
}

export function caseWhen<P, X=never>(param: P, prev?: () => Promise<[X]|undefined>): CaseWhen<P, X> {
  return {
    when<V>(pred: P|Pred<P>, val: V|Get<V>) {
      return caseWhen<P, X|V>(param, async function() {
        const pval = await prev?.()
        if (pval) return pval
        const pcond = isFun<Pred<P>>(pred) ? await pred(param) : pred == param
        if (pcond) return [isFun<Get<V>>(val) ? await val() : val]
        return undefined
      })
    },
    async else<V>(val: V|Get<V>) {
      const pval = await prev?.()
      if (pval) return pval[0]
      return isFun<Get<V>>(val) ? await val() : val
    }
  }
}

export const when = caseWhen(true).when

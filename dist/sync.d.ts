declare type Pred<P> = (param: P) => boolean;
declare type Get<V> = () => V;
interface CaseWhen<P, X> {
    when: <V>(pred: P | Pred<P>, val: V | Get<V>) => CaseWhen<P, X | V>;
    else: <V>(val: V | Get<V>) => X | V;
}
export declare function caseWhen<P, X = never>(param: P, prev?: () => [X] | undefined): CaseWhen<P, X>;
export declare const when: <V>(pred: boolean | Pred<boolean>, val: V | Get<V>) => CaseWhen<boolean, V>;
export {};

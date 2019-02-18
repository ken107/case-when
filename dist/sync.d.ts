export declare type Predicate<P> = (param: P) => boolean;
export declare type Get<V> = () => V;
export interface CaseWhen<P, V> {
    when(pred: P | Predicate<P>, val: V | Get<V>): CaseWhen<P, V>;
    else(val: V | Get<V>): V;
}
export default function <P>(param?: P): {
    when<V>(pred: P | Predicate<P>, val: V | Get<V>): CaseWhen<P, V>;
};

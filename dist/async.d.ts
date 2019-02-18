export declare type Predicate<P> = (param: P) => boolean | Promise<boolean>;
export declare type Get<V> = () => V | Promise<V>;
export interface CaseWhen<P, V> {
    when(pred: P | Predicate<P>, val: V | Get<V>): CaseWhen<P, V>;
    else(val: V | Get<V>): Promise<V>;
}
export default function <P>(param?: P): {
    when<V>(pred: P | Predicate<P>, val: V | Get<V>): CaseWhen<P, V>;
};

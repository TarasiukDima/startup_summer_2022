export type TSimpleFuncion = () => void;
export type TGetContent = () => TChildrens;
export type TChangeElHandler<T> = (value: React.ChangeEvent<T>) => void;
export type TChildrens = JSX.Element | Array<JSX.Element> | string | null;

export interface IWrapperElProps {
    className?: string;
    children?: TChildrens;
}

export enum TYPES {
    WIDTH = 'width',
    HEIGHT = 'height',
    BOTH = 'both'
}

export type ResizableTypes = {
    initialSize: { x: number; y: number };
    children: JSX.Element | JSX.Element[];
    className?: string;
    icon?: JSX.Element;
};

import { MouseEvent, useEffect, useState } from 'react';
import { TYPES } from '../types/types';
import '../style.css';

type ResizableTypes = {
    initialSize: { x: number; y: number };
    children: JSX.Element | JSX.Element[];
    className?: string;
    icon?: JSX.Element;
};

const Resizeable = (props: ResizableTypes) => {
    const { initialSize, icon, children, className } = props;
    const [size, setSize] = useState({ x: 0, y: 0 });
    const Icon = icon ? icon : 'Resize';

    useEffect(() => {
        setSize(initialSize);
    }, [initialSize]);

    const handler = (
        mouseDownEvent: MouseEvent<HTMLButtonElement>,
        type?: TYPES
    ) => {
        const startSize = size;
        const startPosition = {
            x: mouseDownEvent.pageX,
            y: mouseDownEvent.pageY
        };

        const onMouseMove = (mouseMoveEvent: any) => {
            if (type === TYPES.WIDTH) {
                setSize((currentSize) => ({
                    x: startSize.x - startPosition.x + mouseMoveEvent.pageX,
                    y: size.y
                }));
            }

            if (type === TYPES.HEIGHT) {
                setSize((currentSize) => ({
                    x: startSize.x,
                    y: startSize.y - startPosition.y + mouseMoveEvent.pageY
                }));
            }

            if (type === TYPES.BOTH) {
                setSize((currentSize) => ({
                    x: startSize.x - startPosition.x + mouseMoveEvent.pageX,
                    y: startSize.y - startPosition.y + mouseMoveEvent.pageY
                }));
            }
        };
        const onMouseUp = () => {
            document.body.removeEventListener('mousemove', onMouseMove);
        };

        document.body.addEventListener('mousemove', onMouseMove);
        document.body.addEventListener('mouseup', onMouseUp, { once: true });
    };

    return (
        <div
            id="container"
            className={className}
            style={{ width: size.x, height: size.y }}
        >
            {children}
            <button
                className="icon widthIcon"
                type="button"
                onMouseDown={(event) => handler(event, TYPES.WIDTH)}
            >
                {Icon}
            </button>
            <button
                className="icon heightIcon"
                type="button"
                onMouseDown={(event) => handler(event, TYPES.HEIGHT)}
            >
                {Icon}
            </button>
            <button
                className="icon bothIcon"
                type="button"
                onMouseDown={(event) => handler(event, TYPES.BOTH)}
            >
                {Icon}
            </button>
        </div>
    );
};

export default Resizeable;

import {RefObject, useEffect} from 'react';

export function useBodyScrollLock(disableScroll: boolean, scrollYRef: RefObject<number>) {
    useEffect(() => {
        const body = document.body;

        if (disableScroll) {
            scrollYRef.current = window.scrollY;
            body.style.position = 'fixed';
            body.style.top = `-${scrollYRef.current}px`;
            body.style.width = '100%';
        } else {
            body.style.position = '';
            body.style.top = '';
            body.style.width = '';
            window.scrollTo(0, scrollYRef.current);
        }

        return () => {
            body.style.position = '';
            body.style.top = '';
            body.style.width = '';
        };
    }, [disableScroll]);
}

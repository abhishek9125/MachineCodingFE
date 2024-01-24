import { useRef } from 'react';

const useCustomEffect = (cb, deps) => {
    
    const isFirstRender = useRef(true);
    const prevDeps = useRef([]);

    if(isFirstRender.current) {
        isFirstRender.current = false;
        const cleanup = cb();
        if(cleanup && typeof cleanup === "function") {
            cleanup();
        }
        return;
    }

    const isDepsChanged = !deps.length ? JSON.stringify(prevDeps.current) != JSON.stringify(deps) : true;

    if(isDepsChanged) {
        const cleanup = cb();
        if(cleanup && typeof cleanup === "function") {
            cleanup();
        }
    }

    prevDeps.current = deps || [];
}

export default useCustomEffect;
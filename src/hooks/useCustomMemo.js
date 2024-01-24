import { useRef, useEffect } from 'react';

const isEqual = (prevDeps, newDeps) => {

    if(!prevDeps) return false;
    if(prevDeps.length !== newDeps.length) return false;

    for(let i = 0; i < prevDeps.length; i++) {
        if(prevDeps[i] !== newDeps[i]) {
            return false;
        }
    }

    return true;
}

const useCustomMemo = (cb, deps) => {

    const cache = useRef(null);

    if(!cache.current || !isEqual(cache.current.deps, deps)) {
        cache.current = {
            value: cb(),
            deps
        }
    }

    useEffect(() => {
        return () => {
            cache.current = null;
        }
    }, [])

    return cache.current.value;
    
}

export default useCustomMemo;
import { useState, useEffect } from 'react';
function useDebounced(value, delay) {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const timeoutDebounced = setTimeout(() => {
            setDebounce(value);
        }, delay);

        return () => {
            clearTimeout(timeoutDebounced);
        };
    }, [value, delay]);
    return debounce;
}

export default useDebounced;

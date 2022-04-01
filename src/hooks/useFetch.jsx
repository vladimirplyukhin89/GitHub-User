import { useState, useEffect } from "react";
import useMountedRef from './useMountedRef';


export default function useFetch(url) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    const mounted = useMountedRef();

    useEffect(() => {
        if (!url) return;
        if (!mounted.current) return;
        setLoading(true);
        fetch(url)
            .then(data => {
                if (!mounted.current) throw new Error('component is not mounted');
                return data;
            })
            .then(data => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(error => {
                if (!mounted.current) return;
                setError(error);
            });
    }, [url]);

    return {
        data,
        error,
        loading
    };
}
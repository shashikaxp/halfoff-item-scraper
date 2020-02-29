import { useState, useEffect } from "react";

export let useApi = (initialValue, fn) => {

    const [data, setData] = useState(initialValue);

    useEffect(() => {
        async function getData() {
            let apiData = await fn();
            setData(apiData.data);
        }
        getData();
    }, [fn])

    return data
}
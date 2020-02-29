import { useState, useEffect } from "react";

export let useApi = (initialValue, dataPromise) => {

    const [data, setData] = useState(initialValue);

    useEffect(() => {
        async function getData() {
            let apiData = await dataPromise;
            setData(apiData.data);
        }
        getData();
    }, [dataPromise])

    return data
}
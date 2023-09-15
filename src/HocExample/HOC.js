import React, { useEffect, useState } from 'react';

const HOC = (WrapComponent, entity) => {
    const WithHOC = () => {
        const [ready, setReady] = useState(false); // HERE
        const [dataList, setDataList] = useState([]);
        const [inputValue, setInputValue] = useState("");
        useEffect(() => {
            const fetchData = async () => {
                const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
                const json = await res.json();
                setDataList(json)
                setReady(true)
            }
            fetchData();
        }, [])
        if (!ready) return <p>Initializing...</p>; // HERE
        return (
            <div>
                <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <WrapComponent dataList={dataList} />
            </div>
        );
    }
    return WithHOC;
}

export default HOC;
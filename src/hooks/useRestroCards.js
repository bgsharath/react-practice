import { useEffect, useState } from "react";

const useRestroCards = (entity) => {
    const [restroData, setRestroData] = useState(null);

    useEffect(() => {
        getRestroCards()
    }, [])

    const getRestroCards = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`)
        const resData = await res.json()
        setRestroData(resData)
    }

    return restroData;
}

export default useRestroCards;
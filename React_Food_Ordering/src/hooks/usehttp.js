import { use, useCallback, useEffect, useState } from "react"

async function sendHttpRequest(url, config) {
    const response = await fetch(url, config)
    const resData = await response.json()

    if (!response.ok) {
        throw new Error(
            resData.message || 'Something Went Wrong'
        )
    }

    return resData
}

export default function useHttp(url,config,initalData) {
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(initalData)

    const sendRequest = useCallback(
        async function sendRequest() {
            setIsLoading(true)
            try {
                const resData = await sendHttpRequest(url,config)
                console.log(JSON.stringify(resData))
                setData(resData)
            } catch (error) {
                setError(error.message || 'Something went wrong')
            }
            setIsLoading(false)
        }
        , [url,config])

    useEffect(() => {
        if(config && (config.method === 'GET' || !config.method) || !config ){
            console.log("config")
            sendRequest()
        }
    }, [sendRequest,config])


    
    return {
        error,
        isLoading,
        data,
        sendRequest
    }
}
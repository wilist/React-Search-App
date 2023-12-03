import { useEffect } from "react"
import { useApiStore } from "./api-store"
import { API } from "./api"
import { useApiService } from "./api-service"

export const useApi = () => {
    const {fetchApiToken} = useApiService()
    const {apiToken, setApiToken} = useApiStore()

    useEffect(() => {
        const initializeToken = async () => {
            try {
                if (!apiToken) {
                    const {access_token} = await fetchApiToken()
                    setApiToken({ apiToken: access_token })
                }
            } catch (e) {
                throw e
            }
        }
        initializeToken()
    }, [])

    useEffect(() => {
        const initializeAPI = () => {
            if (apiToken) {
                API.defaults.headers.common.Authorization = `Bearer ${apiToken}`
            } else {
                delete API.defaults.headers.common.Authorization
            }
        }
        initializeAPI()
    }, [apiToken])

    return API
}
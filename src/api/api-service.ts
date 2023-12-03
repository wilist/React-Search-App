import {Buffer} from 'buffer'
import {AUTH_API} from './api'

const API_SERVICE_PATHS = {
    token: '/token',
}

interface UseApiServiceReturnType {
    fetchApiToken: () => Promise<any>;
}

export const useApiService = (): UseApiServiceReturnType => {
    return {
        fetchApiToken: async () => {
            try {
                const response = await AUTH_API.post(
                    API_SERVICE_PATHS.token, 
                    new URLSearchParams({
                        grant_type: 'client_credentials',
                    }), 
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Authorization': 'Basic ' + (Buffer.from(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET).toString('base64'))
                        },
                    }
                )
                return response.data
            } catch (e) {
                throw e
            }
        }
    }
}
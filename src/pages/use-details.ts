import { useState } from "react"
import { useParams } from "react-router-dom"

export interface UseDetailsPropsType {
    fetchDetails: ({ id }: { id: string }) => Promise<any>;
}

export interface UseDetailsReturnType {
    details: any;
    initiDetails: () => Promise<any>;
}

export const useDetails = ({ fetchDetails }: UseDetailsPropsType): UseDetailsReturnType => {
    const {id} = useParams()
    const [details, setDetails] = useState<null|any>(null)

    return {
        details,
        initiDetails: async () => {
            if (id) {
                const response = await fetchDetails({ id })
                setDetails(response)
            }
        },
    }
}
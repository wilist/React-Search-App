import { useState } from "react"
import { UseSearchServiceReturnType } from "../features/search"

export const useSearch = ({ searchService }: { searchService: UseSearchServiceReturnType }) => {
    const [details, serDetails] = useState<any>(null)

    return {
        details,
        find: async ({ searchString }: { searchString: string }) => {
            const response = await searchService.fetch({ search: searchString })
            serDetails(response)
        },
    }
}
import { useSearchService } from "../../features/search"
import { useSearch } from "../use-search"

export const useHome = () => {
    const searchService = useSearchService()
    return useSearch({ searchService })
}
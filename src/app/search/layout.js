import SearchHeader from "@/app/components/SearchHeader";

export default function layout ({children}) {
    return(
        <div>
            <SearchHeader/>
            {children}
        </div>
    )
}
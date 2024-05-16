import { IStores } from "../../interfaces/stores"
import { StoreCard } from "../StoreCard/store-card"
import "./store-grid.css"

export interface StoreGridProps {
    stores: IStores[]
}

export const StoreGrid = ({ stores }: StoreGridProps) => {
    return (
        <div className="stores">
            {stores.length > 0 && stores.map(store => <StoreCard key={store.id} store={store}/>)}
        </div>
    )
}
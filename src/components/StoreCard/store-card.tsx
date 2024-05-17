import { IStores } from "../../interfaces/stores";
import "./StoreCard.css"
import comercial from "../../Images/comercial.jpg"

interface StoreCardProps {
    store: IStores;
}

export const StoreCard = ({ store }: StoreCardProps) => {
    return (
        <div className='store'>
            <img src={store.image} alt={store.name} />
            <div className='store-content'>
                <h1>{store.name}</h1>
            </div>
        </div>
    )
}
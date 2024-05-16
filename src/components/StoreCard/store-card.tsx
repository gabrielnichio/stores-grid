import { IStores } from "../../interfaces/stores";
import "./StoreCard.css"
import comercial from "../../Images/comercial.jpg"

interface StoreCardProps {
    store: IStores;
}

export const StoreCard = ({ store }: StoreCardProps) => {
    return (
        <div className='store'>
            <img src={comercial} alt={store.title} />
            <div className='store-content'>
                <h1>{store.title}</h1>
                <h2>{store.categorie}</h2>
                <p>{store.description}</p>
            </div>
        </div>
    )
}
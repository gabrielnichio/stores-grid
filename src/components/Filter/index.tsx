import "./Filter.css"


interface FilterProps {
    aoAlterado: (category: string) => void;
    valor: string;
    categories: string[];
}

export const Filter = ({ aoAlterado, valor, categories }: FilterProps) => {

    const categoriesWithAll = ["All"].concat(categories);

    return (
        <div className="select-field">
            <select className="select-field-select" value={valor} onChange={(e) => aoAlterado(e.target.value)}>
                {categoriesWithAll.map(categorie => <option key={Math.random()}>{categorie}</option>)}
            </select>
        </div>
    )
}
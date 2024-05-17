import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { NavigationBar } from './components/Navigation/navigation';
import { StoreGrid } from './components/StoreGrid/store-grid';
import { IStores } from './interfaces/stores';
import { loadStores } from './utils/request';
import { Filter } from './components/Filter';


function App() {

  const [stores, setStores] = useState<IStores[]>([]);
  const [categories, setCategories] = useState([]);

  const [categorieFilter, setCategorieFilter] = useState("All");

  const dataRequest = useCallback(async () => {
    let stores = await loadStores();

    stores = stores.filter((store: IStores) => store.name !== "herramientas de impacto" && store.name !== "PC")

    setCategories(stores.map((store: IStores) => store.name));

    setStores(stores)
  }, [])

  useEffect(() => { 
    dataRequest();
  }, [dataRequest])

  return (
    <div className="body">
      <NavigationBar />
      <section className='container'>
        <Filter aoAlterado={setCategorieFilter} valor={categorieFilter} categories={categories}/>
        <StoreGrid stores={stores} />
      </section>
    </div>
  );
}

export default App;

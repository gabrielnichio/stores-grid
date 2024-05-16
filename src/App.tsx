import './App.css';
import { NavigationBar } from './components/Navigation/navigation';
import { StoreGrid } from './components/StoreGrid/store-grid';
import { IStores } from './interfaces/stores';

const stores: IStores[] = [
  {
    id: 1,
    title: "Comercial",
    categorie: "Papelaria",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    url: "../../Images/comercial.jpg"
  },
  {
    id: 2,
    title: "Indus",
    categorie: "Roupas",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    url: "../../Images/indus.jpg"
  },
  {
    id: 3,
    title: "Lux Store",
    categorie: "Roupas",
    description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or ",
    url: "../Images/lux-store.jpg"
  },
  {
    id: 4,
    title: "Pernambucanas",
    categorie: "Casa",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolo",
    url: "../Images/pernambucanas.jpg"
  },

]

function App() {
  return (
    <div className="body">
      <NavigationBar />
      <section className='container'>
        <StoreGrid stores={stores} />
      </section>
    </div>
  );
}

export default App;

//import logo from './logo.svg';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import PageCategorias from './pages/categorias/categorias';
import PageHome from './pages/home/home';
import PageMarcas from './pages/marcas/marcas';
import PageNosotros from './pages/nosotros/nosotros';
import PageProductoDetail from './pages/productoDetail/productoDetail';
import PageProductos from './pages/productos/productos';
import ProductoProvider from './providers/productoProvider';

function App() {
  return (
    <div className="App">
      <ProductoProvider>
        <Router>
          <Switch>
            <Route path="/" exact>
              <PageHome />
            </Route>
            <Route path="/categorias" exact>
              <PageCategorias />
            </Route>
            <Route path="/productos/:uid" exact>
              <PageProductoDetail />
            </Route>
            <Route path="/ramas/:uid/categorias/:ref" exact>
              <PageProductos />
            </Route>
            <Route path="/nosotros" exact>
              <PageNosotros />
            </Route>
          </Switch>
        </Router>
      </ProductoProvider>
    </div>
  );
}

export default App;

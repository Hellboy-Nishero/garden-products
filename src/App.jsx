import {BrowserRouter, Routes, Route} from 'react-router'
import { Provider} from 'react-redux';
import store from './store';
import Home from './pages/Home/Home.jsx'
import Layout from './pages/Layout.jsx'
import Categories from './pages/Categories/Categories.jsx'
import NotFound from './pages/NotFound/NotFound.jsx';
import AllSales from './pages/AllSales/AllSales.jsx'
import AllProducts from './pages/AllProducts/AllProducts.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Favorites from './pages/Favorites/Favorites.jsx'
import Product from "./pages/Product/Product.jsx";
import Category from './pages/Category/Category.jsx'



function App() {



  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />}/>
              <Route path='categories' element={<Categories />} />
              <Route path='categories/:title' element={<Category />} />
              <Route path='categories/:title/:productTitle' element={<Product />} />
              <Route path='all-products' element={<AllProducts />} /> 
              <Route path='all-products/:productTitle' element={<Product />} />
              <Route path='all-sales' element={<AllSales />} /> 
              <Route path='all-sales/:productTitle' element={<Product />} />
              <Route path='cart' element={<Cart />} /> 
              <Route path='favorites' element={<Favorites />} /> 
              <Route path='favorites/:productTitle' element={<Product />} />
              <Route path='*' element={<NotFound />}/>
            </Route>
        </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App

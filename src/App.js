import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { fetchProducts } from './utils/api';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './containers/Home';
import Cart from './containers/Cart';
import Login from './containers/Login';
import ProductList from './containers/ProductList';
import ProductDetails from './containers/ProductDetails';

import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './redux/actions/userActions';
import UserProfile from './containers/UserProfile';

const App = () => {

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const doLogin = (data) => {
    dispatch(setUser(data))
    alert('Usuário Logado. Pode acessar as informações dele na página de Perfil do Usuário')
  }
  //const dispatch = useDispatch();

  /*useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const products = await fetchProducts();
        dispatch({ type: 'SET_PRODUCTS', payload: products });
      } catch (error) {
        // Lida com erros de forma adequada no seu aplicativo
      }
    };

    fetchInitialData();
  }, [dispatch]);*/

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/userProfile" element={<UserProfile/>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login onLogin={doLogin}/>} />
                <Route path="/produtos" component={<ProductList/>} />
                <Route path="/produtos/:productId" component={<ProductDetails/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

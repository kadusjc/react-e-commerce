import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

import Navbar from './components/Navbar';
import Home from './containers/Home';
import Cart from './containers/Cart';
import Login from './containers/Login';
import ProductList from './containers/ProductList';
import ProductDetails from './containers/ProductDetails';
import NotFound from './containers/NotFound';

import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './redux/actions/userActions';
import UserProfile from './containers/UserProfile';
import QuotationApi from './service/quotation-api';

const App = () => {

  const [quotation, setQuotation] = useState();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    QuotationApi.get("/")
      .then((response) => setQuotation(response.data))
      .catch((err) => { console.error("Ocorreu um erro ao consumir a API de cotação de moedas: " + err) })
  }, []);

  const doLogin = (data) => {
    dispatch(setUser(data))
  }
  
  return (
    <Router>
      <div>
        { user && user.name &&  
          <Alert key="success" variant="success">
            Você está logado na loja. Agora pode acessar o menu "Perfil do Usuário" e "Adicionar Produtos ao Carrinho".
          </Alert>
        }

        {!user && 
        <Alert key="warning" variant="warning">
          Faça o seu Login primeiro 
        </Alert>
       }
        <Navbar userData={{ ...user}} quotation={{...quotation}}/>
        <div className="container">
          <div className="row">
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/userProfile" element={<UserProfile/>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login onLogin={doLogin}/>} />
                <Route path="/produtos" element={<ProductList />} />
                <Route path="/produtos/:productId" element={<ProductDetails />}/>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

/* eslint-disable linebreak-style */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (
  <div>
    <h1>Error 404 - Página não encontrada. </h1>
    <br />
    <h4>A url especificada não foi encontrada, tente algo como:</h4>
    <p>https://harislist.vercel.app/home</p>
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

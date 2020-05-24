import React from 'react';
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import Routes from "./Routes/Routes"


function App() {
  return (
    <Provider  store={store}>
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
    </Provider>
  );
}

export default App;

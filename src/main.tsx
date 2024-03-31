import * as React from "react";
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "./store/store";
import { Provider } from "react-redux";
import App from './App.tsx'
import './main.scss'

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
)

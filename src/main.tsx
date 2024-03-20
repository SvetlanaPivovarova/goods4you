import * as React from "react";
import * as ReactDOM from 'react-dom/client'
import { store } from "./services/store";
import { Provider } from "react-redux";
import App from './App.tsx'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
)

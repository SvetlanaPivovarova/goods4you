import { Routes, Route } from 'react-router-dom';
import MainPage from "./components/UI/pages/main-page";
import AllProducts from "./components/UI/pages/all-products";
import OneProduct from "./components/UI/pages/one-product";
import NotFoundPage from "./components/UI/pages/not-found";
import {Counter} from "./components/some";


function App() {
  return (
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/some" element={<Counter />} />
        <Route path="/products">
            <Route index element={<AllProducts />} />
            <Route path=":id" element={<OneProduct />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App

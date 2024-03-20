import { Routes, Route } from 'react-router-dom';
import MainPage from "./components/UI/pages/main-page";
import AllProducts from "./components/UI/pages/all-products";
import OneProduct from "./components/UI/pages/one-product";
import NotFoundPage from "./components/UI/pages/not-found";


function App() {
  return (
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin">
            <Route index element={<AllProducts />} />
            <Route path="product" element={<OneProduct />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App

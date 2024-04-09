import { Routes, Route } from 'react-router-dom';
import MainPage from "./components/pages/main-page";
import AllProducts from "./components/pages/all-products";
import OneProduct from "./components/pages/one-product";
import NotFoundPage from "./components/pages/not-found";

function App() {
  return (
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products">
            <Route index element={<AllProducts />} />
            <Route path=":id" element={<OneProduct />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App

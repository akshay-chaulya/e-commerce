import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "@/pages/public/Home";
import Collection from "@/pages/public/Collection";
import About from "@/pages/public/About";
import Contact from "@/pages/public/Contact";
import Product from "@/pages/public/Product";
import Cart from "@/pages/public/Cart";
import PlaceOrder from "@/pages/public/PlaceOrder";
import Orders from "@/pages/public/Orders";
import Login from "@/pages/public/Login";
import PageNotFound from "@/pages/public/PageNotFound";

const App = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* ADMIN */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<div>Admin Dashboard</div>} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;

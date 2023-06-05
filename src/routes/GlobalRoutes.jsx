import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import UserDetails from "../pages/UserDetail";

export default function GlobalRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="user-details/:id" element={<UserDetails />} />
      </Route>
    </Routes>
  );
}
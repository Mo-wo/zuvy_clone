import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../pages/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;

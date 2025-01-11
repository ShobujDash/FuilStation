import { Button } from "@/components/ui/button";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/userPages/HomePage";
import DashboardPage from "./pages/userPages/DashboardPage";
import ChargingStationPage from "./pages/userPages/ChargingStationPage";
import RecentViewPage from "./pages/userPages/RecentViewPage";
import BatteryPage from "./pages/userPages/BatteryPage";
import SettingPage from "./pages/userPages/SettingPage";
import ProfilePage from "./pages/userPages/ProfilePage";
import LoginPage from "./pages/userPages/Auth/LoginPage";
import AdminHomePage from "./pages/adminPages/AdminHomePage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/dashboard"} element={<DashboardPage />} />
        <Route path={"/charge-station"} element={<ChargingStationPage />} />
        <Route path={"/recent-view"} element={<RecentViewPage />} />
        <Route path={"/battery"} element={<BatteryPage />} />
        <Route path={"/settings"} element={<SettingPage />} />
        <Route path={"/profile"} element={<ProfilePage />} />
        <Route path={"/login"} element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminHomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

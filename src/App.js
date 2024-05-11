import './App.css';
import Home from './pages/home/page';
import { Route, Routes } from "react-router-dom";
import ReportPage from './pages/reports/page';
import Contacts from './pages/contacts/page';
import AdminPage from './pages/admin/page';
import Rewards from './pages/rewards/page';
import Profile from './pages/profile/page';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reports" element={<ReportPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;

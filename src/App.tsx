
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Messages from "./pages/Messages";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import Squads from "./pages/Squads";
import NotFound from "./pages/NotFound";
import SearchModuleOne from "./pages/SearchModuleOne";
import SearchModuleTwo from "./pages/SearchModuleTwo";
import SearchModuleThree from "./pages/SearchModuleThree";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/search" element={<Search />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/squads" element={<Squads />} />
        <Route path="/search/module-one" element={<SearchModuleOne />} />
        <Route path="/search/module-two" element={<SearchModuleTwo />} />
        <Route path="/search/module-three" element={<SearchModuleThree />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

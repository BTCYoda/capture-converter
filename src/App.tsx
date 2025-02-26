
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import SearchModuleOne from "./pages/SearchModuleOne";
import SearchModuleTwo from "./pages/SearchModuleTwo";
import SearchModuleThree from "./pages/SearchModuleThree";
import Settings from "./pages/Settings";
import Messages from "./pages/Messages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search-module-1" element={<SearchModuleOne />} />
          <Route path="/search-module-2" element={<SearchModuleTwo />} />
          <Route path="/search-module-3" element={<SearchModuleThree />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/messages/:walletAddress" element={<Messages />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

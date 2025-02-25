
import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col">
      <div className="flex-1 p-6 max-w-lg mx-auto w-full">
        {children}
      </div>
      <Navigation />
    </div>
  );
};

export default Layout;

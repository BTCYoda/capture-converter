
import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-8 bg-white">
      {/* Logo Section */}
      <div className="flex-1 flex items-center justify-center w-full max-w-lg mx-auto">
        <div className="relative w-full aspect-[3/4] flex items-center justify-center">
          {/* Hermes Logo */}
          <div className="relative w-full max-w-xs">
            <img
              src="/lovable-uploads/531a3c87-62fd-4e13-91b0-935c371f420c.png"
              alt="Hermes Logo"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Index;

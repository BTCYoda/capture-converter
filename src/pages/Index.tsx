
import { Search, Mail, Users, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Index = () => {
  const navigationItems = [
    { icon: Search, label: "Search", path: "/search" },
    { icon: Mail, label: "Messages", path: "/messages" },
    { icon: Users, label: "Squads", path: "/squads" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

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

      {/* Navigation Bar */}
      <nav className="w-full max-w-lg mx-auto">
        <div className="flex justify-between items-center px-4 py-6 bg-white rounded-t-2xl border-t border-gray-100">
          {navigationItems.map((item, index) => (
            <NavItem
              key={item.label}
              Icon={item.icon}
              label={item.label}
              path={item.path}
              delay={index * 0.1}
            />
          ))}
        </div>
      </nav>
    </div>
  );
};

const NavItem = ({
  Icon,
  label,
  path,
  delay,
}: {
  Icon: React.ComponentType<any>;
  label: string;
  path: string;
  delay: number;
}) => {
  return (
    <Link to={path}>
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: delay,
        }}
        className={cn(
          "flex flex-col items-center gap-1 p-2",
          "transition-colors duration-200 ease-in-out",
          "hover:text-amber-500 focus:outline-none focus:text-amber-500"
        )}
      >
        <Icon className="w-6 h-6" />
        <span className="text-xs font-medium">{label}</span>
      </motion.button>
    </Link>
  );
};

export default Index;

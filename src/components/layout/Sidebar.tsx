import { motion } from "framer-motion";
import { Home, Settings, Users } from "lucide-react";
import { Button } from "../ui/button";

export function Sidebar() {
  return (
    <motion.aside
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-64 bg-card border-r p-4 flex-col h-screen fixed hidden lg:flex"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>
      <nav className="flex flex-col space-y-2">
        <Button variant="ghost" className="justify-start">
          <Home className="mr-2 h-4 w-4" />
          Home
        </Button>
        <Button variant="ghost" className="justify-start">
          <Users className="mr-2 h-4 w-4" />
          Users
        </Button>
        <Button variant="ghost" className="justify-start">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </nav>
    </motion.aside>
  );
}
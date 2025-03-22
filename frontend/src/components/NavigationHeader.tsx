import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavigationHeader: React.FC = () => {
  return (
    <motion.header
      className="w-full py-4 px-6 flex justify-between items-center border-b"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/" className="text-2xl font-bold">
            PersonaEd
          </Link>
        </motion.div>
      </div>

      <NavigationMenu className="justify-center center">
        <NavigationMenuList>
          <NavigationMenuItem className="flex-col flex items-end justify-center">
            <Link to="/chat" className={navigationMenuTriggerStyle()}>
              Characters
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="flex-col flex items-end justify-center">
            <Link to="/chat" className={navigationMenuTriggerStyle()}>
              Quiz
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="flex-col flex items-end justify-center">
            <Link
              to="https://github.com/CWSwastik/quizziz-hackathon-persona-ed/blob/main/README.md"
              className={navigationMenuTriggerStyle()}
            >
              Resources
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              to="https://github.com/CWSwastik/quizziz-hackathon-persona-ed/blob/main/README.md"
              className={navigationMenuTriggerStyle()}
            >
              About
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </motion.header>
  );
};

export default NavigationHeader;
